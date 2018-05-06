$(document).ready(function(){
    
    $(".button").on("click", function(){
        $(".firstdiv").fadeOut(2000);
        $(".content").css("display", "block");
    })

    $(".meny").on("click", function(){
        $("ul").fadeToggle(500).toggleClass("active");

    })

    $("li").on("click", function(){
        
        var width = $(document).width();
        if (width <= 768){
            $("ul").fadeToggle(500);
            $("ul").removeClass("active");
        }
        
    })

});
