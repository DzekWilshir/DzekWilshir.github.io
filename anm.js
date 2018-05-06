$(document).ready(function(){

    $(window).scroll(function(){

        let animation_elements = $(".animation-element");

        let window_top = $(window).scrollTop();
        let window_bottom = (window_top + $(window).height() );

        $.each(animation_elements, function(){
            let element = $(this);
            let element_top = element.parent().parent().offset().top;
            let element_bottom = ( element_top + element.parent().parent().height() );

            if (( element_top <= window_top ) && (element_bottom >= window_top)) {
                element.addClass("in-view");
            } else {
            //    element.removeClass("in-view"); 
            }
        })
    })

})