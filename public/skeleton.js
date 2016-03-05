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

    $('#menu-item1').addClass("menu-selected");
    $('#menu-item2').addClass("menu-not-selected");
    $('#menu-item3').addClass("menu-not-selected");

    $('#menu-item1').on('click touchstart', (function(){
        $('#menu-item1').removeClass("menu-not-selected");
        $('#menu-item1').addClass("menu-selected");

        $('#menu-item2').removeClass("menu-selected");
        $('#menu-item2').addClass("menu-not-selected");

        $('#menu-item3').removeClass("menu-selected");
        $('#menu-item3').addClass("menu-not-selected");
    });

    $('#menu-item2').on('click touchstart', (function(){
        $('#menu-item1').removeClass("menu-selected");
        $('#menu-item1').addClass("menu-not-selected");

        $('#menu-item2').removeClass("menu-not-selected");
        $('#menu-item2').addClass("menu-selected");

        $('#menu-item3').removeClass("menu-selected");
        $('#menu-item3').addClass("menu-not-selected");
    });

    $('#menu-item3').on('click touchstart', (function(){
        $('#menu-item1').removeClass("menu-selected");
        $('#menu-item1').addClass("menu-not-selected");

        $('#menu-item2').removeClass("menu-selected");
        $('#menu-item2').addClass("menu-not-selected");

        $('#menu-item3').removeClass("menu-not-selected");
        $('#menu-item3').addClass("menu-selected");
    });
});