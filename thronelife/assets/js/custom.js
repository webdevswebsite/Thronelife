(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () { $(this).remove(); });
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    /*==== Smoothscroll ====*/
    $('#home a, .header-main a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
    }); 

    $('.scrollup').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    if ($('select').length) {
        $(document).ready(function () {
            $('select').niceSelect();
        });
    };


    /* ------------------ OWL CAROUSEL ------------------ */

    var $carouselDirection = $("html").attr("dir");
    if ($carouselDirection == "rtl") {
        var $carouselrtl = true;
    } else {
        var $carouselrtl = false;
    }

    $(".carousel").each(function () {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            center: $Carousel.data('center'),
            dotsSpeed: $Carousel.data('speed'),
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: $Carousel.data('slide-rs'),
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            }
        });
    });

    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    $(window).on('load', function () {
        $('.top-category-slider').owlCarousel({
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,

                },
                1300: {
                    items: 4,

                },
                1900: {
                    items: 4,
                },
            },
        })
    });


    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            }
        );
        wow.init();
    };


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.header-main').addClass('sticky-menu')
        } else {
            $('.header-main').removeClass('sticky-menu')
        }
    });


    $('.nav-mobile-menu').on("click", function () {
        $('.mobile-menu-navbar').toggleClass("mobile-menu-on");
    });
    $('.nav-mobile-menu').on('click', function () {
        $('body').toggleClass('mobile-menu-overlay-on');
    });
    if ($('.mobile-menu li.dropdown ul').length) {
        $('.mobile-menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    };


    $('#main-slider-2').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navSpeed: 1000,
        smartSpeed: 2000,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    });



    var e = $(".image-grid"); if (e.length) var o = e.imagesLoaded(function () { o.masonry({ percentPosition: !0, itemSelector: ".image-grid-item" }) });

    $(window).on('load', function () {
        // Testimonials Slider
        $('.testimonials-slider').owlCarousel({
            loop: true,
            margin: 30,
            singleItem: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                }
            }
        });
    });


    var $grid = $('.grid').imagesLoaded(function () {
        $grid.masonry({
            percentPosition: true,
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer'
        });
    });
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    });
    var filterFns = {
        numberGreaterThan50: function () {
            var number = $(this)
                .find(".number")
                .text();
            return parseInt(number, 10) > 50;
        },
        ium: function () {
            var name = $(this)
                .find(".name")
                .text();
            return name.match(/ium$/);
        }
    };
    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    $(".button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
        });
    });

    $(window).on('load', function () {
        $('#blog-slider').owlCarousel({
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,

                },
                1300: {
                    items: 3,

                },
                1900: {
                    items: 3,
                },
            },
        })
    });


    $(window).on('load', function () {
        $('#category-slide').owlCarousel({
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,

                },
                1300: {
                    items: 3,

                },
                1900: {
                    items: 3,
                },
            },
        })
    });


    $(window).on('load', function () {
        $('#blog-slider-2').owlCarousel({
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,

                },
                1300: {
                    items: 3,

                },
                1900: {
                    items: 3,
                },
            },
        })
    });


    $(window).on('load', function () {
        $('#agent-slider').owlCarousel({
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,

                },
                1300: {
                    items: 4,

                },
                1900: {
                    items: 4,
                },
            },
        })
    });


    $(window).on('load', function () {
        $('#destination-slider').owlCarousel({
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,

                },
                1300: {
                    items: 4,

                },
                1900: {
                    items: 4,
                },
            },
        })
    });


    if ($('#google_map').length) {
        var $lat = $('#google_map').data('lat');
        var $lon = $('#google_map').data('lon');
        var $zoom = $('#google_map').data('zoom');
        var $marker = $('#google_map').data('marker');
        var $info = $('#google_map').data('info');
        var $markerLat = $('#google_map').data('mlat');
        var $markerLon = $('#google_map').data('mlon');
        var map = new GMaps({
            el: '#google_map',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        })
    };


})(jQuery);
