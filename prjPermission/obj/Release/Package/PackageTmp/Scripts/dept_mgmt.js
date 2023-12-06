function TreeViewClick(clicked_id) {
    $.ajax({
        url: '/Dept/TreeVieww',
        type: 'post',
        dataType: 'json',
        /*            contentType: 'application/json; charset=utf-8',*/
        data: { deptno: clicked_id }, //json format

        success: function (returnData) {
            //部門資訊
            $('#dept').empty();
            $("#dept").append("<th>部門編號	</th><th>部門名稱</th><th>經管部門</th><th>部門主管</th>");
            for (var i = 0; i < 1; i++) {
                $("#dept").append(
                    "<tr>" +
                    "<td>" + returnData[i].DEPT_NO + "</td>" +
                    "<td>" + returnData[i].DEPT_NAME + "</td>" +
                    "<td>" + returnData[i].DEPT_CHIEF + "</td>" +
                    "<td>" + returnData[i].MGR_FG + "</td>" +
                    "</tr>"
                );
            }
            //部門使用者
            $('#user').empty();
            $("#user").append("<th>使用者編號</th><th>使用者名稱</th><th>處理</th>")
            for (var i = 0; i < returnData.length; i++) {
                $("#user").append(
                    "<tr>" +
                    "<td>" + returnData[i].USR_ID + "</td>" +
                    "<td>" + returnData[i].USR_NAME + "</td>" +
                    "</tr>"
                );
            }
        }
    })
}