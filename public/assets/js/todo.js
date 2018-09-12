//Check off specific Todo by clicking
$("ul").on('click', "li", function(){
    $(this).toggleClass("done");
});

$("ul").on('click', "span", function(event){
    var textBody = $(this).parent()[0].lastElementChild.textContent;
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    $.ajax({
    type: "DELETE",
    url: "/remove",
    data: "textBody=" + textBody
    });
})
$(".fa-plus").on('click', function(){
    $("button").fadeToggle();
    $("input").fadeToggle();
})
