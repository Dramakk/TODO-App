//Check off specific Todo by clicking
$("ul").on('click', "li", function(){
    $(this).toggleClass("done");
});

$("ul").on('click', "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    });
    event.stopPropagation();
})
$("input").on('keypress', function(event){
    if(event.which === 13){
        var toDoText = $("input").val();
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + toDoText + "</li>");
        $(this).val("");
    }
})
$("button").click(function(){
    var toDoText = $("input").val();
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + toDoText + "</li>");
    $("input").val("");
})
// $("ul").on("mouseover", "li", function(event){
//     $(this).children().fadeIn(500);
//     event.stopPropagation();
// })
// $("ul").on("mouseout", "li", function(event){
//     $(this).children().fadeOut(500);
//     event.stopPropagation();
// })
$(".fa-plus").on('click', function(){
    $("input").fadeToggle();
})