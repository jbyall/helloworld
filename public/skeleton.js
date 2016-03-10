$(document).ready(function() {
    $('#slider').flexslider({
        animation: "slide",
        slideshow: false,
        directionNav: false,
        manualControls: ".menu li"
    });

    // $('#menu-item1').addClass("menu-selected");
    // $('#menu-item2').addClass("menu-selected");
    // $('#menu-item3').addClass("menu-selected");

    $('#menu-item1 a').addClass("menu-selected");
    $('#menu-item2 a').addClass("menu-not-selected");
    $('#menu-item3 a').addClass("menu-not-selected");

    $('#menu-item1 a').on('click touch', function(){
        $('#menu-item1 a').removeClass("menu-not-selected");
        $('#menu-item1 a').addClass("menu-selected");
        

        $('#menu-item2 a').removeClass("menu-selected");
        $('#menu-item2 a').addClass("menu-not-selected");
        

        $('#menu-item3 a').removeClass("menu-selected");
        $('#menu-item2 a').addClass("menu-not-selected");
        // $('#menu-item1 a').toggleClass('menu-not-selected menu-selected');
        // $('#menu-item2 a').toggleClass('menu-selected menu-not-selected');
        // $('#menu-item3 a').toggleClass('menu-selected menu-not-selected');
    });

    $('#menu-item2 a').on('click touch', function(){
        $('#menu-item1 a').removeClass("menu-selected");
        $('#menu-item1 a').addClass("menu-not-selected");

        $('#menu-item2 a').removeClass("menu-not-selected");
        $('#menu-item2 a').addClass("menu-selected");

        $('#menu-item3 a').removeClass("menu-selected");
        $('#menu-item3 a').addClass("menu-not-selected");
        // $('#menu-item1 a').toggleClass('menu-selected menu-not-selected');
        // $('#menu-item2 a').toggleClass('menu-not-selected menu-selected');
        // $('#menu-item3 a').toggleClass('menu-selected menu-not-selected');
    });

    $('#menu-item3 a').on('click touch', function(){
        $('#menu-item1 a').removeClass("menu-selected");
        $('#menu-item1 a').addClass("menu-not-selected");

        $('#menu-item2 a').removeClass("menu-selected");
        $('#menu-item2 a').addClass("menu-not-selected");

        $('#menu-item3 a').removeClass("menu-not-selected");
        $('#menu-item3 a').addClass("menu-selected");
        // $('#menu-item1 a').toggleClass('menu-selected menu-not-selected');
        // $('#menu-item2 a').toggleClass('menu-selected menu-not-selected');
        // $('#menu-item3 a').toggleClass('menu-not-selected menu-selected');
    });
});