//Check off specific Todo by clicking
$("ul").on('click', "li", function(){
    $(this).toggleClass("done");
});

$("ul").on('click', "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
})
$(".fa-plus").on('click', function(){
    $("button").fadeToggle();
    $("input").fadeToggle();
})
