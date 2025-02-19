/*
Template Name: Aidus
Author: wpoceans
Version: 1.0
*/

(function ($) {
    'use strict';

    /*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if ($(".global-header__search-wrapper").length) {
        var searchToggleBtn = $(".global-search__toggle-btn");
        var searchToggleBtnIcon = $(".global-search__toggle-btn i");
        var searchContent = $(".global_header__search-form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("global_header__content-toggle");
            searchToggleBtnIcon.toggleClass("fi ti-close");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("global_header__content-toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    }

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation__collapse");
        var openBtn = $(".mobile__navigation .open__navbar");
        var xbutton = $(".mobile__navigation .navbar-toggler");

        openBtn.on("click", function (e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();

    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();

    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation__collapse");
        var smallNav = $(".navigation__collapse > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    $("body").on("click", function () {
        $('.navigation__collapse').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation__collapse').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.open-btn').removeClass('x-close');
    });


    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.global-header__navigation .global__navigation').length) {
        cloneNavForSticyMenu($('.global-header__navigation .global__navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.global-header__navigation .global__navigation');

        if ($(window).scrollTop() > 500) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.addClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;


    }

    /*==========================================================================
       WHEN WINDOW SCROLL
   ==========================================================================*/
    $(window).on("scroll", function () {

        if ($(".global-header__navigation").length) {
            stickyMenu($('.global-header__navigation .global__navigation'), "sticky-on");
        }


    });

    /*=========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        toggleMobileNavigation();

    });


    /*==========================================================================
       WHEN WINDOW RESIZE
   ==========================================================================*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));
    });


    /*----- ELEMENTOR LOAD FUNTION CALL ---*/

   $(window).on('elementor/frontend/init', function () {

        var swiper_slide = function () {

            var menu = [];
            jQuery('.wpo-hero-slider .swiper-slide').each(function (index) {
                menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
            });

            var interleaveOffset = 0.5;
            var swiperOptions = {
                loop: true,
                speed: 1000,
                parallax: true,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
                watchSlidesProgress: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    progress: function (swiper) {
                        swiper.slides.forEach(function (slide) {
                            var slideProgress = slide.progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            slide.querySelector(".slide-inner").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        });
                    },
                    touchStart: function (swiper) {
                        swiper.slides.forEach(function (slide) {
                            slide.style.transition = "";
                        });
                    },
                    setTransition: function (swiper, speed) {
                        swiper.slides.forEach(function (slide) {
                            slide.style.transition = speed + "ms";
                            var inner = slide.querySelector(".slide-inner");
                            if (inner) {
                                inner.style.transition = speed + "ms";
                            }
                        });
                    }
                }
            };

            var swiper = new Swiper(".wpo-hero-slider .swiper-container", swiperOptions);

        }; // end


        // sliderBgSetting

        var sliderBgSetting = function () {
            // DATA BACKGROUND IMAGE
            var sliderBgSetting = $(".slide-bg-image");
            sliderBgSetting.each(function (indx) {
                if ($(this).attr("data-background")) {
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });



        }; // end



        var hero_slider = function () {

            /* hero-slider */
            if ($(".hero-slider").length) {
                $('.hero-slider').slick({
                    autoplay: true,
                    speed: 2500,
                    lazyLoad: 'progressive',
                    arrows: true,
                    dots: false,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                arrows: false,
                                dots: true,
                            }
                        }
                    ]
                }).slickAnimation();
            }


        }; // end


        var hero_slider2 = function () {

            // DATA BACKGROUND IMAGE
            var sliderBgSetting = $(".slide-bg-image");
            sliderBgSetting.each(function (indx) {
                if ($(this).attr("data-background")) {
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });



            // Hero slider background setting
            function sliderBgSetting() {
                if ($(".hero-slider-s2 .slide").length) {
                    $(".hero-slider-s2 .slide").each(function () {
                        var $this = $(this);
                        var img = ($this.find(".slider-bg").attr("src")) ? $this.find(".slider-bg").attr("src") : false;

                        if (img) {
                            $this.css({
                                backgroundImage: "url(" + img + ")",
                                backgroundSize: "cover",
                                backgroundPosition: "center center"
                            })
                        }
                    });
                }
            }


            //Setting hero slider
            function heroSlider() {
                if ($(".hero-slider-s2").length) {
                    $(".hero-slider-s2").slick({
                        arrows: true,
                        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                        nextArrow: '<button type="button" class="slick-next">Next</button>',
                        dots: true,
                        fade: true,
                        cssEase: 'linear',
                    });
                }
            }

            //Active heor slider
            heroSlider();


        }; // end


        var supporter_slider = function () {
            /*------------------------------------------
            wpo-supporter-slide
            -------------------------------------------*/
            if ($(".wpo-supporter-slide").length) {
                $(".wpo-supporter-slide").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 0,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    nav: false,
                    items: 4
                });
            }
        }; // end


        var project_slider = function () {
            /*------------------------------------------
        = project-slider
    -------------------------------------------*/
            if ($(".project-slider").length) {
                $(".project-slider").owlCarousel({
                    autoplay: false,
                    smartSpeed: 300,
                    loop: true,
                    dots: false,
                    nav: false,
                    center: true,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        500: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                            nav: false,
                            dots: true,
                        },

                        991: {
                            items: 2,

                        },
                        1200: {
                            items: 3,
                        },
                    }
                });
            }
        }; // end

        var project_slider2 = function () {
            /*------------------------------------------
        = project-slider2
    -------------------------------------------*/
            if ($(".project-slider-s2").length) {
                $(".project-slider-s2").owlCarousel({
                    autoplay: false,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    dots: false,
                    nav: false,
                    center: true,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        500: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                            nav: false,
                            dots: true,
                        },

                        991: {
                            items: 2,

                        },
                        1200: {
                            items: 3,
                        },
                    }
                });
            }
        }; // end


        var causes_slider = function () {
            /*------------------------------------------
       causes slider s2
   -------------------------------------------*/
            if ($(".causes-slider").length) {
                $(".causes-slider").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    nav: true,
                    navText: ['<i class="flaticon-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        500: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                            nav: false,
                            dots: true,
                        },

                        991: {
                            items: 3,

                        },
                        1200: {
                            items: 3,
                        },

                        1400: {
                            items: 4
                        },
                        1599: {
                            items: 5
                        },

                    }
                });
            }


        }; // end

        var causes_slider2 = function () {
            /*------------------------------------------
                causes slider s2
            -------------------------------------------*/
            if ($(".causes-slider-s2").length) {
                $(".causes-slider-s2").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    nav: true,
                    navText: ['<i class="flaticon-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        500: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                            nav: false,
                            dots: true,
                        },

                        991: {
                            items: 3,

                        },
                        1200: {
                            items: 2,
                        },

                        1400: {
                            items: 3
                        },
                        1599: {
                            items: 3
                        },

                    }
                });
            }

        }; // end


        var blog_slider = function () {
            /*------------------------------------------
        = blog-slider
    -------------------------------------------*/
            if (document.querySelector(".blog-slider")) {
                var swiper = new Swiper(".blog-slider", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }
                });
            }


        }; // end


        var service_slider = function () {
            /*------------------------------------------
        service slider s2
    -------------------------------------------*/
            $('.service-slider-s4').slick({
                dots: true,
                arrows: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1499,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }

                ]
            });


        }; // end


        var hero_odometer = function () {

            /*------------------------------------------
              = FUNFACT
              -------------------------------------------*/
            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function (e) {
                    var odo = $(".odometer");
                    odo.each(function () {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                });
            }

        }; // end



        var testimonials_slider = function () {
            /*------------------------------------------
                = Testimonial SLIDER
            -------------------------------------------*/

            if ($(".testimonial-slider").length) {
                $(".testimonial-slider").owlCarousel({
                    autoplay: false,
                    smartSpeed: 300,
                    loop: true,
                    dots: false,
                    nav: false,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                        },

                        500: {
                            items: 1,
                            dots: true,
                        },

                        768: {
                            items: 2,
                            nav: false,
                            dots: true,
                        },

                        991: {
                            items: 3,

                        },
                        1200: {
                            items: 3,
                        },
                    }
                });
            }

        };

        var testimonials_slider2 = function () {
            /*------------------------------------------
                = Testimonial SLIDER
            -------------------------------------------*/
            if ($(".testimonial-slider-s2").length) {
                $('.slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    responsive: [
                        {
                            breakpoint: 450,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });
                $('.slider-nav').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    focusOnSelect: true,
                    fade: true,
                });
            }

        };

        var testimonials_slider3 = function () {
            /*------------------------------------------
                = Testimonial SLIDER
            -------------------------------------------*/
            if ($(".testimonial-slider-s3").length) {
                $('.testimonial-slider-s3').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    fade: true,
                    autoplay: true
                });

            }

        };

        // end
        var gallery_slider = function () {
            /*------------------------------------------
                = gallery_slider 
            -------------------------------------------*/
            if ($(".wpo-portfolio-section").length) {
                $('.gallery-slide').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    arrows: true,
                    dots: false,
                    variableWidth: true,
                    loop: false,
                    autoplay: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                variableWidth: false,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: false,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }

        }; // end


        // end
        var project_single_slider = function () {

            /* project-single-main-img - slider */
            if ($(".project-single-main-img").length) {
                $(".project-single-main-img").owlCarousel({
                    mouseDrag: false,
                    smartSpeed: 500,
                    margin: 30,
                    loop: true,
                    nav: true,
                    navText: ['<i class="fi ti-arrow-left"></i>', '<i class="fi ti-arrow-right"></i>'],
                    dots: false,
                    items: 1
                });
            }

        }; // end



        var odometer = function () {

            /*------------------------------------------
             = FUNFACT
             -------------------------------------------*/
            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function (e) {
                    var odo = $(".odometer");
                    odo.each(function () {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                });
            }



        }; // end


        var partners_slider = function () {

            /*------------------------------------------
                    = PARTNERS SLIDER
            -------------------------------------------*/
            $('.partners-slider').slick({
                infinite: true,
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 7,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1399,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 757,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }; // end

        var partners_slider2 = function () {

            /*------------------------------------------
                    = PARTNERS SLIDER
            -------------------------------------------*/
            $('.partners-slider-s2').slick({
                infinite: true,
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1399,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 757,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }; // end

        var partners_slider3 = function () {

            /*------------------------------------------
                    = PARTNERS SLIDER
            -------------------------------------------*/
            $('.partners-slider-s3').slick({
                infinite: true,
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1399,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 757,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }; // end



        var event_date = function () {


            // Set the target elements with the same class
            var dateElements = $(".event-date");

            // Update each set of date elements
            dateElements.each(function () {
                updateClock($(this));
            });

            // Set interval to update every second
            setInterval(function () {
                dateElements.each(function () {
                    updateClock($(this));
                });
            }, 1000);

            function updateClock(dateElement) {
                var eventDate = new Date(dateElement.data("event-date")); // Get the date from data attribute
                var currentDate = new Date();

                var difference = Math.abs(eventDate - currentDate);
                var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                var mins = Math.floor((difference / (1000 * 60)) % 60);
                var seconds = Math.floor((difference / 1000) % 60);

                // Select elements within the dateElement
                var getday = dateElement.find(".days");
                var gethour = dateElement.find(".hours");
                var getmins = dateElement.find(".mins");
                var getsec = dateElement.find(".sec");

                getday.text(checkZero(days));
                gethour.text(checkZero(hours));
                getmins.text(checkZero(mins));
                getsec.text(checkZero(seconds));
            }

            function checkZero(mytime) {
                return mytime < 10 ? "0" + mytime : mytime;
            }



        }; // end


        var eventSlider_active = function () {


            if ($(".event-active").length) {
                $(".event-active").slick({
                    autoplay: false,
                    autoplaySpeed: 6000,
                    pauseOnHover: true,
                    arrows: true,
                    dots: false,
                    fade: true,
                    cssEase: 'linear',
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            dots: true
                        }
                    }]

                });
            }

        }; // end


        var event_slider = function () {


            if ($(".event-slider").length) {
                $('.event-slider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            dots: true,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            dots: true,
                            arrows: false,
                        }
                    },
                    ]
                });

            }

        }; // end

        //hero_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_slider.default', function ($scope, $) {
            hero_slider();
        });

        //hero_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_slider.default', function ($scope, $) {
            hero_slider2();
        });

        //supporter_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_hero.default', function ($scope, $) {
            supporter_slider();
        });
        //causes_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_causes.default', function ($scope, $) {
            causes_slider();
        });

        //causes_slider2
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_causes.default', function ($scope, $) {
            causes_slider2();
        });

        //service_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_service.default', function ($scope, $) {
            service_slider();
        });

        //project_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_event.default', function ($scope, $) {
            project_slider();
        });

        //project_slider2
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_event.default', function ($scope, $) {
            project_slider2();
        });

        //blog_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_blog.default', function ($scope, $) {
            blog_slider();
        });

        //Gallery_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_gallery.default', function ($scope, $) {
            gallery_slider();
        });

        //hero_odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_hero.default', function ($scope, $) {
            hero_odometer();
        });

        //Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_slider.default', function ($scope, $) {
            swiper_slide();
        });

        //sliderBgSetting
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_slider.default', function ($scope, $) {
            sliderBgSetting();
        });

        //testimonial
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_testimonial.default', function ($scope, $) {
            testimonials_slider();
        });

        //testimonial
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_testimonial.default', function ($scope, $) {
            testimonials_slider2();
        });

        //testimonial
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_testimonial.default', function ($scope, $) {
            testimonials_slider3();
        });

        //Project Single
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_gallery.default', function ($scope, $) {
            project_single_slider();
        });

        //odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_about.default', function ($scope, $) {
            odometer();
        });

        //odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_funfact.default', function ($scope, $) {
            odometer();
        });

        //odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_info.default', function ($scope, $) {
            odometer();
        });

        //partners_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_client.default', function ($scope, $) {
            partners_slider();
        });

        //partners_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_client.default', function ($scope, $) {
            partners_slider2();
        });

        //partners_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_client.default', function ($scope, $) {
            partners_slider3();
        });

        //event_date
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_event.default', function ($scope, $) {
            event_date();
        });

        //eventSlider_active
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_event.default', function ($scope, $) {
            eventSlider_active();
        });

        //event_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-aidus_event.default', function ($scope, $) {
            event_slider();
        });


    });


})(jQuery);  