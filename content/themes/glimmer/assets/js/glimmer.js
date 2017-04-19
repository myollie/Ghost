var handle_newsletter_signup = function () {
  Cookies.set('#subscribe-modal', 'subscribed', {expires: 100 * 365});
  fbq('track', 'Lead');
  console.log("successful blog newsletter signup")
  if (typeof ga === "function") {
    ga('send', 'event', 'newsletter', 'signup', 'Blog');
  }
  if (typeof goog_report_conversion === "function") {
    goog_report_conversion();
  }
};

(function ($) {
    "use strict"; // use strict to start

    var glimmerApp = {

       updateLocalStorage: function() {
         if (localStorage) {
           localStorage.setItem('referralSoure', 'OllieBlog')
         }
       },

        /* ---------------------------------------------
         Header Settings
         --------------------------------------------- */
        header_settings: function() {

            //Header Padding Settings
            var header_padding_top = (!Header_Padding['top'] ) ? '45px' : Header_Padding['top'];
            var header_padding_right = (!Header_Padding['right'] ) ? '0' : Header_Padding['right'];
            var header_padding_bottom = (!Header_Padding['bottom'] ) ? '60px' : Header_Padding['bottom'];
            var header_padding_left = (!Header_Padding['left'] ) ? '0' : Header_Padding['left'];

            $('#header-middle').css('padding', header_padding_top+' '+header_padding_right+' '+header_padding_bottom+' '+header_padding_left);


            //Menu margin Settings
            var menu_margin_top = (!Menu_Margin['top'] ) ? '73px' : Menu_Margin['top'];
            var menu_margin_right = (!Menu_Margin['right'] ) ? '0' : Menu_Margin['right'];
            var menu_margin_bottom = (!Menu_Margin['bottom'] ) ? '0' : Menu_Margin['bottom'];
            var menu_margin_left = (!Menu_Margin['left'] ) ? '0' : Menu_Margin['left'];

            $('#header-middle #nav-left, #header-middle #nav-right').css('margin', menu_margin_top+' '+menu_margin_right+' '+menu_margin_bottom+' '+menu_margin_left);

        },
        /* ---------------------------------------------
         Theme configure
         --------------------------------------------- */
        themeconfig: function() {
            $('.post .entry-header .cat-links').each(function() {
                var tag_links = $(this).children().attr('href'); // This is your rel value
                var tag_item = $(this).find("a").length;
                if ( tag_item == 1 ) {
                    if ( tag_links == "/tag/sidebar-left/" || tag_links == "/tag/sidebar-right/" || tag_links == "/tag/full-width/") {
                        $(this).hide();
                        $(this).next().hide();
                    }
                } else {
                    $('.post .entry-header .cat-links a[href="/tag/sidebar-left/"], .post .entry-header .cat-links a[href="/tag/sidebar-right/"], .post .entry-header .cat-links a[href="/tag/full-width/"]').remove();
                }
            });
            function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }
            };
            var layout = getUrlParameter('layout');
            if ( layout === 'sidebar-left' ) {
                $('#main-layout').removeClass('col-md-10');
                $('#main-layout').removeClass('col-md-offset-1');
                $('#main-layout').addClass('col-md-push-4');
                $('#main-layout').addClass('col-md-8');
                $('#sidebar-layout').show();
                $('#sidebar-layout').addClass('col-md-pull-8');
            }
            else if ( layout === 'sidebar-right' ) {
                $('#main-layout').removeClass('col-md-10');
                $('#main-layout').removeClass('col-md-offset-1');
                $('#main-layout').removeClass('col-md-push-4');
                $('#main-layout').addClass('col-md-8');
                $('#sidebar-layout').show();
                $('#sidebar-layout').removeClass('col-md-pull-8');
            }
            else if ( layout === 'full-width' ) {
                $('#main-layout').removeClass('col-md-8');
                $('#main-layout').removeClass('col-md-push-4');
                $('#main-layout').removeClass('col-md-pull-8');
                $('#main-layout').addClass('col-md-10 col-md-offset-1');
                $('#sidebar-layout').hide();
            }

            else if ( theme_layout === 'sidebar-left' ) {
                $('#main-layout').removeClass('col-md-10');
                $('#main-layout').removeClass('col-md-offset-1');
                $('#main-layout').addClass('col-md-push-4');
                $('#main-layout').addClass('col-md-8');
                $('#sidebar-layout').show();
                $('#sidebar-layout').addClass('col-md-pull-8');
            }
            else if ( theme_layout === 'sidebar-right' ) {
                $('#main-layout').removeClass('col-md-10');
                $('#main-layout').removeClass('col-md-offset-1');
                $('#main-layout').removeClass('col-md-push-4');
                $('#main-layout').addClass('col-md-8');
                $('#sidebar-layout').show();
                $('#sidebar-layout').removeClass('col-md-pull-8');
            }
            else if ( theme_layout === 'full-width' ) {
                $('#main-layout').removeClass('col-md-8');
                $('#main-layout').removeClass('col-md-push-4');
                $('#main-layout').removeClass('col-md-pull-8');
                $('#main-layout').addClass('col-md-10 col-md-offset-1');
                $('#sidebar-layout').hide();
            }
        },

        /* ---------------------------------------------
         Single Page Configure
         --------------------------------------------- */
        postlayout: function() {
            if ( single_post_layout === 'sidebar-left' ) {
                $('#post-main-layout').removeClass('col-md-10');
                $('#post-main-layout').removeClass('col-md-offset-1');
                $('#post-main-layout').addClass('col-md-push-4');
                $('#post-main-layout').addClass('col-md-8');
                $('#post-sidebar-layout').show();
                $('#post-sidebar-layout').addClass('col-md-pull-8');
            }
            else if ( single_post_layout === 'sidebar-right' ) {
                $('#post-main-layout').removeClass('col-md-10');
                $('#post-main-layout').removeClass('col-md-offset-1');
                $('#post-main-layout').removeClass('col-md-push-4');
                $('#post-main-layout').addClass('col-md-8');
                $('#post-sidebar-layout').show();
                $('#post-sidebar-layout').removeClass('col-md-pull-8');
            }
            else if ( single_post_layout === 'full-width' ) {
                $('#post-main-layout').removeClass('col-md-8');
                $('#post-main-layout').removeClass('col-md-push-4');
                $('#post-main-layout').removeClass('col-md-pull-8');
                $('#post-main-layout').addClass('col-md-10 col-md-offset-1');
                $('#post-sidebar-layout').hide();
            }
            if ( page_layout === 'sidebar-left' ) {
                $('#page-layout').removeClass('col-md-10');
                $('#page-layout').removeClass('col-md-offset-1');
                $('#page-layout').addClass('col-md-push-4');
                $('#page-layout').addClass('col-md-8');
                $('#page-sidebar-layout').show();
                $('#page-sidebar-layout').addClass('col-md-pull-8');
            }
            else if ( page_layout === 'sidebar-right' ) {
                $('#page-layout').removeClass('col-md-10');
                $('#page-layout').removeClass('col-md-offset-1');
                $('#page-layout').removeClass('col-md-push-4');
                $('#page-layout').addClass('col-md-8');
                $('#page-sidebar-layout').show();
                $('#page-sidebar-layout').removeClass('col-md-pull-8');
            }
            else if ( page_layout === 'full-width' ) {
                $('#page-layout').removeClass('col-md-8');
                $('#page-layout').removeClass('col-md-push-4');
                $('#page-layout').removeClass('col-md-pull-8');
                $('#page-layout').addClass('col-md-10 col-md-offset-1');
                $('#page-sidebar-layout').hide();
            }
        },

        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function() {
            $(window).on('load', function () {
                $("body").imagesLoaded(function(){
                    $('.preloader').delay(500).slideUp('slow', function() {
                        $(this).remove();
                    });
                });
            });
        },
        /* ---------------------------------------------
         Related Post
         --------------------------------------------- */
        relatedpost: function() {
            $('#related-post-wrap').ghostRelated({
                limit: 3
            });

        },
        /* ---------------------------------------------
         Value To Placeholder
         --------------------------------------------- */
        placeholder: function () {
            var $ph = $('input[type="search"], input[type="text"], input[type="email"], textarea');
            $ph.each(function() {
                var value = $(this).val();
                $(this).focus(function() {
                    if ($(this).val() === value) {
                        $(this).val('');
                    }
                });
                $(this).blur(function() {
                    if ($(this).val() === '') {
                        $(this).val(value);
                    }
                });
            });
        },

        /* ---------------------------------------------
         Mobile Social Area
         --------------------------------------------- */
        socialarea_mobile: function() {
            var social = $('#header-top .header-social').clone();
            social.appendTo('#mobile-menu-wrap');
            $('#mobile-menu-wrap .header-social').prepend('<span>Follow us on-</span>');
        },

        /* ---------------------------------------------
         Home Version Grid Masonry
         --------------------------------------------- */
        grid_masonry: function () {
            if ($('#masonry-layout').length > 0) {
                var container = $('#masonry-layout');
                container.imagesLoaded( function() {
                    container.masonry({
                        itemSelector: '.grid'
                    });
                });
            }
        },
        /* ---------------------------------------------
         smooth scroll
         --------------------------------------------- */
        smoothscroll: function () {
            if( typeof smoothScroll == 'object'){
                smoothScroll.init();
            }
        },
        /* ---------------------------------------------
         For Video Fit Function
         --------------------------------------------- */
        video: function () {
            $(".featured-area").fitVids();
            $(".content-area").fitVids();
        },
        /* ---------------------------------------------
         Post Search
         --------------------------------------------- */
        post_search: function() {
            $("#glimmer-search").ghostHunter({
                results: "#glimmer-search-result",
                onKeyUp: true,
                zeroResultsInfo: false,
                info_template: "<div class='post-amount'>Number of posts found: {{amount}}</div>",
                result_template: "<div class='results'><i class='fa fa-arrow-right'></i><a href='{{link}}'>{{title}}</a></div>"
            });
        },
        /* ---------------------------------------------
         Gallery Carousel
         --------------------------------------------- */
        gallary: function () {
            $('.gallery-one').owlCarousel({
                items:1,
                autoplay: true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                singleItem:true,
                loop:true,
                nav : true,
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                owl2row: 'true',
                owl2rowTarget: 'item',
                responsive: {
                    1170:{
                        items:1
                    }
                }
            });
        },
        /* ---------------------------------------------
         Grid Version Read more Fix
         --------------------------------------------- */
        gridmore_button: function() {
            if ($('.grid .entry-content p .more-link').length) {
                $('.grid .entry-content p .more-link').remove();
            }
        },
        /* ---------------------------------------------
         Scroll top
         --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='glyphicon glyphicon-menu-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function() {
                if($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                    .addClass('btn-show')
                    .removeClass('btn-hide');
                } else {
                    $scrolltop
                    .addClass('btn-hide')
                    .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        /* ---------------------------------------------
         Maps
         --------------------------------------------- */
        maps: function() {
            //Latitude Callback Option
            var Map_Latitude = (!Contact_Info['map_latitude'] || Contact_Info['map_latitude'] === "") ? '43.04446' : Contact_Info['map_latitude'];

            //Latitude Callback Option
            var Map_Longitude = (!Contact_Info['map_longitude'] || Contact_Info['map_longitude'] === "") ? '-76.130791' : Contact_Info['map_longitude'];

            //Map Icon Callback Option
            var Map_Icon = (!Contact_Info['map_icon'] || Contact_Info['map_icon'] === "") ? 'http://greenarmywky.org/images/map-icon.png' : Contact_Info['map_icon'];

            if ($('#gmaps').length) {
                var map;
                map = new GMaps({
                    el: '#gmaps',
                    lat: Map_Latitude,
                    lng: Map_Longitude,
                    scrollwheel: false,
                    zoom: 10,
                    zoomControl: true,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });

                var image = Map_Icon;
                map.addMarker({
                    lat: Map_Latitude,
                    lng: Map_Longitude,
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center'
                });

                var styles = [{
                    "featureType": "road",
                    "stylers": [{
                        "color": "#b4b4b4"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": "#d8d8d8"
                    }]
                }, {
                    "featureType": "landscape",
                    "stylers": [{
                        "color": "#f1f1f1"
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#000000"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "color": "#d9d9d9"
                    }]
                }, {
                    "elementType": "labels.text",
                    "stylers": [{
                        "saturation": 1
                    }, {
                        "weight": 0.1
                    }, {
                        "color": "#000000"
                    }]
                }];
            }
        },
        /* ---------------------------------------------
         I   nstafeed Jquery
         --------------------------------------------- */
        instafeed: function() {
            var imageLimit = Instagram_Widget['image_limit'];
            var feedId = Instagram_Widget['user_id'];
            var feedToken = Instagram_Widget['access_token'];
            var userFeed = new Instafeed({
                limit: imageLimit,
                get: 'user',
                userId: feedId,
                accessToken: '' + feedToken + '',
                resolution: 'standard_resolution',
                template: '<div class="list"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'
            });
            userFeed.run();
        },
        /* ---------------------------------------------
         Flicker widget
         --------------------------------------------- */
        flickr_widget: function() {
            var glimmer_flickr_Id = Flickr_Widget['flickr_id'];
            var glimmer_photo_count = Flickr_Widget['photo_count'];

            $('.glimmer_flickr_album').jflickrfeed({
                    limit: glimmer_photo_count,
                    qstrings: {
                        id: glimmer_flickr_Id
                    },
                    itemTemplate: '<li><a href="{{link}}"><img src="{{image_t}}" alt="{{title}}" /></a></li>'
                },
                function(data) {
                    $('.glimmer_flickr_album li').hover(function() {
                            $(this).children('div').show();
                        },

                        function() {
                            $(this).children('div').hide();
                        });
                });
        },
        /* ---------------------------------------------
         Syntax height-lighter
         --------------------------------------------- */
        highlighter: function() {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        },
        /* ---------------------------------------------
         Mailchip widget
         --------------------------------------------- */
        mailchimp_widget: function() {
            var glimmer_success_btn_text = Mailchimp_Widget['success_btn_text'];
            $('#newsletter-form').formchimp({
                'buttonText': "" + glimmer_success_btn_text + "",
                'onMailChimpSuccess': handle_newsletter_signup,
            });
        },
        /* ---------------------------------------------
         Comments count
         --------------------------------------------- */
        comment_count: function() {
            var s = document.createElement('script');
            s.async = true;
            s.type = 'text/javascript';
            s.src = '//' + disqus_shortname + '.disqus.com/count.js';
            (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

        },
        /* ---------------------------------------------
         Contact Page
         --------------------------------------------- */
        contact_page: function() {

            //Address Callback Option
            var full_Address = (!Contact_Info['full_addess'] || Contact_Info['full_addess'] === "") ? 'Creative Agency, Melborn, Australia' : Contact_Info['full_addess'];

            var site_Phone = (!Contact_Info['phone'] || Contact_Info['phone'] === "") ? '' : Contact_Info['phone'];

            var site_Fax = (!Contact_Info['fax'] || Contact_Info['fax'] === "") ? '' : Contact_Info['fax'];

            var site_Email = (!Contact_Info['email'] || Contact_Info['email'] === "") ? '' : Contact_Info['email'];

            var site_Web = (!Contact_Info['web'] || Contact_Info['web'] === "") ? '' : Contact_Info['web'];

            $('#address-main span').html(full_Address);
            if ( site_Phone ) {
                $('#contact-info > .dl-horizontal').append('<dt>Phone :</dt><dd>'+site_Phone+'</dd>');
            }
            if ( site_Fax ) {
                $('#contact-info > .dl-horizontal').append('<dt>Fax :</dt><dd>'+site_Fax+'</dd>');
            }
            if ( site_Email ) {
                $('#contact-info > .dl-horizontal').append('<dt>Eamil :</dt><dd><a href="mailto:' + site_Email + '">' + site_Email + '</a></dd>');
            }
            if ( site_Web ) {
                $('#contact-info > .dl-horizontal').append('<dt>Web :</dt><dd><a target="_blank" href="' + site_Web + '">' + site_Web + '</a></dd>');
            }







        },
        /* ---------------------------------------------
         About page Options
         --------------------------------------------- */
        about_page: function() {

            $('.about-me span.append-author-name').append( '<h2 class="author-name">'+About_Info['author_name']+'</h2>' );
            $('.about-me div.author-sign').append('<img src="'+About_Info['signature_url']+'" alt="'+About_Info['author_name']+'">' );
            $('.about-me div.author-sign').append( '<h3>'+About_Info['author_name']+'</h3>');
            $('.about-me .author-image').append('<img class="img-responsive" src="'+About_Info['profile_pic_url']+'" alt="'+About_Info['author_name']+'">' );

            //This code for social Profile
            for (var Url in About_social) {
                $('#about-follow-social').append("<a href='" + About_social[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
            }
        },
        /* ---------------------------------------------
         Initialize All Function
         --------------------------------------------- */
        initializ: function () {
            glimmerApp.updateLocalStorage();
            glimmerApp.header_settings();
            glimmerApp.themeconfig();
            glimmerApp.postlayout();
            glimmerApp.preloader();
            glimmerApp.placeholder();
            glimmerApp.socialarea_mobile();
            glimmerApp.video();
            glimmerApp.grid_masonry();
            glimmerApp.smoothscroll();
            glimmerApp.post_search();
            glimmerApp.gallary();
            glimmerApp.gridmore_button();
            glimmerApp.scroll_top();
            glimmerApp.maps();
            glimmerApp.instafeed();
            glimmerApp.flickr_widget();
            glimmerApp.highlighter();
            glimmerApp.mailchimp_widget();
            glimmerApp.comment_count();
            glimmerApp.relatedpost();
            glimmerApp.contact_page();
            glimmerApp.about_page();
        }
    };
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        glimmerApp.initializ();
    });
})(jQuery);
