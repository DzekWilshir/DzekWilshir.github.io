$(document).ready(function(){
    
    $("li").on("click", function(){

        var el = $(this).text().toLowerCase();
        var height = $("#" + el).offset().top;
        

        $("html, body").animate({
            scrollTop: height
        }, 1000);  
        

        $("ul").removeClass("active");
        $(this).addClass("active");
    
    })


    var btn = $(".backtotop");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      btn.css("display", "block");
    } else {
      btn.css("display", "none");
    }
  })

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1000');
  })

})