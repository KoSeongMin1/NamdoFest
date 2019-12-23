$(".mainmenu>li").mouseover(function(){
    $(this).children(".submenu").show();
});
$(".mainmenu>li").mouseleave(function(){
    $(this).children(".submenu").hide();
});

setInterval(function(){
    $(".slide").delay(2300);
    $(".slide").animate({marginLeft:"-750px"},700);
    $(".slide").delay(2300);
    $(".slide").animate({marginLeft:"-1500px"},700);
    $(".slide").delay(2300);
    $(".slide").animate({marginLeft:"0px"},700);
})

$(".onClick").click(function(){
    $("#modal").show();
});
$("#modalcontent>button").click(function(){
    $("#modal").hide();
});