
$(function() {
    var html = document.querySelector('html'),
        container = document.querySelector('div.container'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = {
            transitions: Modernizr.csstransitions
        };
    
// PROJECT OVERLAYS
    $(".container").on("click", "a.trigger-overlay", function(event){
        event.preventDefault();
        var overlayID = $(this).attr("href");
        var overlay = $(overlayID);
        overlay.addClass("open");
        $(".container").addClass("move");
        $("header").addClass("hide");
        $("html").addClass("no-scroll");
//        setTimeout(function(){
//            $("html").addClass("no-scroll");
//        }, 470);
    });

    $("body").on("click", "button.overlay-close", function(){
        var overlay = $(this.parentNode);
        overlay.removeClass("open");
        $(".container").removeClass("move");
        $("header").removeClass("hide");
        $("html").removeClass("no-scroll");
    });
    
// WOW
    var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       60,          // distance to the element when triggering the animation (default is 0)
        mobile:       false        // trigger animations on mobile devices (true is default)
    });
    wow.init();
    
});

