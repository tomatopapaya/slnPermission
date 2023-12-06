$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', '收起');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', '展開').find(' > i').addClass('fa-plus-square').removeClass('fa-minus-square');
        } else {
            children.show('fast');
            $(this).attr('title', '收起').find(' > i').addClass('fa-minus-square').removeClass('fa-plus-square');
        }
        e.stopPropagation();
    });
});

function TreeViewClick(clicked_id) {
    url = '@Url.Action("TreeVieww", "Dept")'; //Url.Action(actionName, ControllerName)
    $.ajax({
        url: url,
        data: { id: clicked_id }, //json format
        success: function ShowList(returnData) {
/*            alert(clicked_id);*/
        },
        error: {

        }
    });
}






