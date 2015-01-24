!function(a){"use strict";var b={initialised:!1,version:1.2,mobile:!1,menuCollapse:!1,init:function(){this.initialised||(this.initialised=!0,this.checkMobile(),this.checkPlaceholder(),this.menuHover(),this.customScrollbar(),this.tregoMenu(),this.menuBtn(),this.responsiveToggle(),this.uniqueMenu(),this.twitterFeed(),this.flexSliders(),this.registerCarousels(),this.productZoomImage(),this.animateTop(),this.prettyPhoto(),this.productRatings(),this.productColorbox(),this.flickrFeed(),this.responsiveVideos(),this.collapseIcons(),this.priceSlider(),this.selectBox(),this.appearAnimation(),this.parallax(),this.searchInput())},checkMobile:function(){this.mobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?!0:!1},checkPlaceholder:function(){a.support.placeholder=function(){var a=document.createElement("input");return"placeholder"in a}(),!a.support.placeholder&&a.fn.placeholder&&a("input, textarea").placeholder()},menuHover:function(){a.fn.hoverIntent&&a("ul.menu").hoverIntent({over:function(){a(window).width()>768&&(a(this).children("ul, .mega-menu").addClass("active-menu-item"),a(this).addClass("active"))},out:function(){a(window).width()>768&&(a(this).children("ul, .mega-menu").removeClass("active-menu-item"),a(this).removeClass("active"))},selector:"li",timeout:145,interval:55})},customScrollbar:function(){a.fn.niceScroll&&a("html").niceScroll({zindex:9999,autohidemode:!0,background:"rgba(0,0,0, 0.04)",cursorcolor:"#45484a",cursorwidth:"7px",cursorborder:"1px solid #ccc",cursorborderradius:"4px"})},tregoMenu:function(){var b=this,c=(a("#header-wrapper"),a("#header-footer")),d=a("#menu-btn"),e=a(".menu"),f=a(window).height(),g=a(window).width();if(g>979)800>f?(d.addClass("block"),e.fadeOut(),b.menuCollapse=!0):(d.removeClass("block"),e.fadeIn(),b.menuCollapse=!1,c.hasClass("relative")&&c.removeClass("relative")),a(".nav-container").css({left:0,width:"100%"}),e.hasClass("responsive-menu")&&e.removeClass("responsive-menu"),(e.is(":hidden")||e.find("ul, .mega-menu").is(":hidden"))&&e.fadeIn().find("ul, .mega-menu").fadeIn();else if(979>g&&g>768){var h=(g-728)/2;d.removeClass("block"),e.fadeIn(),b.menuCollapse=!1,a(".nav-container").css({left:-h,width:g}),e.hasClass("responsive-menu")&&e.removeClass("responsive-menu"),(e.is(":hidden")||e.find("ul, .mega-menu").is(":hidden"))&&e.fadeIn().find("ul, .mega-menu").fadeIn()}else a(".nav-container").css({left:0,width:"100%"}),d.addClass("block"),e.fadeOut().addClass("responsive-menu"),e.find("li, .col-2, .col-3, .col-4, .col-5").each(function(){var b=a(this);(b.find("ul").length||b.find(".mega-menu").length)&&(b.find(".responsive-toggle").length||a('<span class="responsive-toggle"></span>').appendTo(b.find("a").first()))}),b.menuCollapse=!0},menuBtn:function(){var b=this,c=a("#menu-btn"),d=a(".menu"),e=a("#header-footer");c.on("click",function(f){var g=a(window).width();g>768?b.menuCollapse?(d.fadeIn(0,function(){b.menuCollapse=!1,c.addClass("open")}),e.addClass("relative")):(d.fadeOut(0,function(){b.menuCollapse=!0,c.removeClass("open")}),e.hasClass("relative")&&e.removeClass("relative")):b.menuCollapse?(a(".nav-container").addClass("active"),d.slideDown(500,function(){b.menuCollapse=!1,c.addClass("open")})):(a(".nav-container").removeClass("active"),d.slideUp(400,function(){b.menuCollapse=!0,c.removeClass("open")})),f.preventDefault()})},responsiveToggle:function(){a(".menu.responsive-menu").find(".responsive-toggle").on("click",function(b){var c=a(this),d=c.closest("li, .col-2, .col-3, .col-4, .col-5"),e=d.find("ul, .mega-menu").first();c.hasClass("open")||d.hasClass("open")?(e.slideUp(),c.removeClass("open"),d.removeClass("open")):(e.slideDown(),c.addClass("open"),d.addClass("open")),b.preventDefault()})},uniqueMenu:function(){var b=a(".unique-menu, .unique-menu-tab"),c=b.find("a"),d=a("#unique-menu-btn"),e=a("#unique-menu-content-container"),f=e.find("#unique-menu-content"),g=a(".unique-menu-slider"),h=f.find(".unique-menu-title"),i=f.find("#unique-menu-prev"),j=f.find("#unique-menu-next"),k=f.find("#unique-menu-close-btn"),l=!1;c.on("click",function(b){var c=a(this);if(a(window).width()>979){if(c.hasClass("active")||!e.is(":hidden"))return;var d=c.attr("href"),g=a(d),i=c.attr("title");c.addClass("active"),f.hasClass("loading")||f.addClass("loading"),e.fadeIn(500,function(){g.length&&g.is(":hidden")&&(h.text(i),f.hasClass("loading")&&f.removeClass("loading"),l=!0,g.fadeIn(500),g.addClass("active").siblings().removeClass("active"))})}else{var d=c.attr("href"),g=a(d),i=c.attr("title");if(c.addClass("active").closest("li").siblings().find("a").removeClass("active"),!g.length||!g.is(":hidden"))return;f.hasClass("loading")&&f.removeClass("loading"),l=!0,f.find(".unique-menu-slider.active").fadeOut(300,function(){g.fadeIn(500),g.addClass("active").siblings().removeClass("active")})}b.preventDefault()}),d.on("click",function(a){e.is(":hidden")&&(f.hasClass("loading")||f.addClass("loading"),l=!0,e.fadeIn(500,function(){var a=g.first();a.fadeIn(400),h.text("Latest Products"),f.hasClass("loading")&&f.removeClass("loading"),a.addClass("active").siblings().removeClass("active")}),a.preventDefault())}),j.on("click",function(b){var c=a(this),d=a(".unique-menu-slider.active"),e=d.find(".row"),f=e.length,g=d.find(".row.active"),h=g.index(),j=g.outerHeight();f>h+1&&(d.animate({"margin-top":"-="+j},480),e.removeClass("active").eq(h+1).addClass("active"),i.hasClass("disabled")&&i.removeClass("disabled"),h+2>=f&&c.addClass("disabled")),b.preventDefault()}),i.on("click",function(b){var c=a(this),d=a(".unique-menu-slider.active"),e=d.find(".row"),f=(e.length,d.find(".row.active")),g=f.index(),h=f.outerHeight();0!=g&&(d.animate({"margin-top":"+="+h},480),e.removeClass("active").eq(g-1).addClass("active"),j.hasClass("disabled")&&j.removeClass("disabled"),g-1==0&&c.addClass("disabled")),b.preventDefault()}),k.on("click",function(a){e.is(":hidden")||e.fadeOut(500,function(){c.removeClass("active"),g.fadeOut(0).removeClass("active"),h.text(""),l=!1,j.hasClass("disabled")&&j.removeClass("disabled"),i.hasClass("disabled")||i.addClass("disabled")}),a.preventDefault()}),a("html").on("click",function(b){l&&a(b.target).hasClass("overlay-cell")&&(e.is(":hidden")||e.fadeOut(500,function(){c.removeClass("active"),g.fadeOut(0).removeClass("active"),h.text(""),l=!1,j.hasClass("disabled")&&j.removeClass("disabled"),i.hasClass("disabled")||i.addClass("disabled")}))})},prettyPhoto:function(){a.fn.prettyPhoto&&a("a[data-rel^='prettyPhoto']").prettyPhoto({hook:"data-rel",animation_speed:"fast",slideshow:6e3,autoplay_slideshow:!0,show_title:!1,deeplinking:!1,social_tools:"",overlay_gallery:!0})},twitterFeed:function(){a.fn.tweet&&a(".twitter_feed").length&&a(".twitter_feed").tweet({modpath:"./js/twitter/",avatar_size:"",count:2,query:"themeforest",loading_text:"Waiting for twitter...",join_text:"",template:"{join}{text}{time}"})},scrollBtn:function(){var b=a(window).scrollTop(),c=a("#scroll-top");b>=200?c.addClass("fixed"):c.removeClass("fixed")},animateTop:function(){a("#scroll-top").on("click",function(b){a("html, body").animate({scrollTop:0},600),b.preventDefault()})},flexSliders:function(){a.fn.flexslider&&(a(".flexslider.sidebar-bestsellers").flexslider({animation:"slide",controlNav:!1,slideshowSpeed:10800,smoothHeight:!0}),a(".flexslider.sidebar-testimonials").flexslider({animation:"fade",controlNav:!1,slideshowSpeed:8200,smoothHeight:!0}),a(".flexslider.sidebar-recent-posts").flexslider({animation:"slide",controlNav:!1,slideshowSpeed:1e4,smoothHeight:!0}),a(".flexslider.post-gallery-slider").flexslider({animation:"slide",controlNav:!1,slideshowSpeed:7800,smoothHeight:!0}),a(".flexslider.banner-slider").flexslider({animation:"fade",directionNav:!1,slideshowSpeed:9500,smoothHeight:!0}),a(".flexslider.testimonials-slider").flexslider({animation:"fade",directionNav:!1,controlNav:!0,slideshowSpeed:9e3,smoothHeight:!0}))},registerCarousels:function(){var b=this;a.fn.owlCarousel&&(a(".owl-carousel.team-carousel").length&&a(".owl-carousel.team-carousel").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:400,autoPlay:9200,stopOnHover:!0,navigation:!1,pagination:!1,responsive:!0,autoHeight:!0,lazyLoad:!0}).data("carouselNavBtns",["#team-carousel-prev","#team-carousel-next"]),a(".owl-carousel.related-products-carousel").length&&a(".owl-carousel.related-products-carousel").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:400,autoPlay:9200,stopOnHover:!0,navigation:!1,pagination:!1,responsive:!0,autoHeight:!0,lazyLoad:!0}).data("carouselNavBtns",["#related-products-carousel-prev","#related-products-carousel-next"]),a(".owl-carousel.recent-portfolio-carousel").length&&a(".owl-carousel.recent-portfolio-carousel").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:400,autoPlay:9200,stopOnHover:!0,navigation:!1,pagination:!1,responsive:!0,autoHeight:!0,lazyLoad:!0}).data("carouselNavBtns",["#recent-portfolio-carousel-prev","#recent-portfolio-carousel-next"]),a(".owl-carousel.accordion-carousel").length&&a(".owl-carousel.accordion-carousel").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:400,autoPlay:18e3,stopOnHover:!0,navigation:!1,pagination:!1,responsive:!0,autoHeight:!0,lazyLoad:!0}).data("carouselNavBtns",["#accordion-carousel-prev","#accordion-carousel-next"]),a(".owl-carousel.product-gallery").length&&a(".owl-carousel.product-gallery").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,3],itemsMobile:[479,3],slideSpeed:400,autoPlay:11e3,stopOnHover:!0,navigation:!1,pagination:!1,responsive:!0,autoHeight:!0,lazyLoad:!0}).data("carouselNavBtns",["#product-gallery-carousel-prev","#product-gallery-carousel-next"]),a(".owl-carousel.section-team-carousel").length&&a(".owl-carousel.section-team-carousel").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:700,autoPlay:9200,stopOnHover:!0,navigation:!1,pagination:!1,responsive:!0,autoHeight:!0,lazyLoad:!0}).data("carouselNavBtns",["#section-team-carousel-prev","#section-team-carousel-next"]),a(".owl-carousel").each(function(){var c,d,e=a(this),f=e.data("owlCarousel"),g=e.data("carouselNavBtns");if("undefined"!=typeof f&&"undefined"!=typeof g){for(var h in g)-1==g[h].indexOf("next")?c=a(g[h]):d=a(g[h]);c.on("click touchstart",function(a){f.prev(),a.preventDefault()}),d.on("click touchstart",function(a){f.next(),a.preventDefault()}),a.fn.mousewheel&&!b.mobile&&e.on("mousewheel",function(a){return a.deltaY>0?f.next():f.prev(),!1})}}))},productRatings:function(){a(".ratings").each(function(){{var b=a(this),c=b.data("rating");a(".ratings-container").width()}b.css("width",c+"%")})},productColorbox:function(){a(".colorbox").each(function(){var b=a(this),c=b.data("bgcolor");b.css("background-color","#"+c)})},responsiveVideos:function(){a.fn.fitVids&&a("body").fitVids()},flickrFeed:function(){a.fn.jflickrfeed&&a("ul.flickrfeed").jflickrfeed({limit:6,qstrings:{id:"52617155@N08"},itemTemplate:'<li><a data-rel="prettyPhoto[gallery-flickr]" href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /><div class="flickr-overlay">&#43;</div></a></li>'},function(){a.fn.prettyPhoto&&a("a[data-rel^='prettyPhoto']").prettyPhoto({hook:"data-rel",animation_speed:"fast",slideshow:6e3,autoplay_slideshow:!0,show_title:!1,deeplinking:!1,social_tools:"",overlay_gallery:!0}),a.fn.hoverdir&&a("ul.flickrfeed").find("li").each(function(){a(this).hoverdir({speed:400,hoverDelay:0,hoverElem:".flickr-overlay",rotate3d:!0})})})},priceSlider:function(){a.fn.jslider&&a(".price-slider").slider({from:0,to:1200,step:100,dimension:"$"})},productZoomImage:function(){var b=this;a.fn.elevateZoom&&(a("#product-zoom").elevateZoom({responsive:!0,zoomType:b.mobile||a(window).width()<768?"inner":"window",borderColour:"#d0d0d0",zoomWindowPosition:1,zoomWindowOffetx:30,cursor:"crosshair",zoomWindowFadeIn:400,zoomWindowFadeOut:250,lensBorderSize:3,lensOpacity:1,lensColour:"rgba(255, 255, 255, 0.25)"}),a(".product-gallery").find("a").on("click",function(b){var c=a("#product-zoom").data("elevateZoom"),d=a(this).data("image"),e=a(this).data("zoom-image");c.swaptheimage(d,e),b.preventDefault()}))},selectBox:function(){a.fn.selectbox&&a(".selectbox").selectbox({effect:"fade",onChange:function(){}})},appearAnimation:function(){a.fn.appear?(a(".progress-appear").appear(),a(".progress-appear").on("appear",function(){var b=a(this),c=b.data("value"),d=b.data("animation-delay"),e=b.find(".progress-count");setTimeout(function(){b.animate({width:c+"%"},300,function(){e.addClass("active"),b.removeClass("progress-appear")})},d)})):a(".progress").each(function(){var b=a(this),c=b.data("value"),d=b.find(".progress-count");b.css({width:c+"%"}),d.addClass("active")})},scrollAnimations:function(){"function"==typeof WOW&&new WOW({boxClass:"wow",animateClass:"animated",offset:0}).init()},parallax:function(){!this.mobile&&a.fn.parallax&&(a(".fun-facts").addClass("parallax").parallax("50%",.3),a(".testimonials").addClass("parallax").parallax("50%",.3),a(".ourskills").addClass("parallax").parallax("50%",.3),a(".latest-tweets").addClass("parallax").parallax("50%",.3))},collapseIcons:function(){a(".panel").each(function(){var b=a(this),c=b.find(".accordion-btn"),d=b.find(".accordion-body");c.length&&d.on("shown.bs.collapse",function(){c.hasClass("open")||c.addClass("open")}).on("hidden.bs.collapse",function(){c.hasClass("open")&&c.removeClass("open")})})},searchInput:function(){var b=a("#search").find("input");a("#search-btn").on("click",function(c){var d=a(window).width();if(!b.hasClass("active")&&768>=d)b.addClass("active");else if(b.hasClass("active")&&768>=d)return;c.preventDefault()})}};b.init(),"undefined"!=typeof Pace?Pace.on("done",function(){b.scrollAnimations()}):a(window).on("load",function(){b.scrollAnimations()}),a(window).on("scroll",function(){b.scrollBtn()}),a.event.special.debouncedresize?a(window).on("debouncedresize",function(){b.tregoMenu()}):a(window).on("resize",function(){b.tregoMenu()})}(jQuery),function(){"use strict";function a(){var a=new google.maps.LatLng(51.520068,-.156299),b={center:a,zoom:15,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{elementType:"geometry",stylers:[{hue:"#000"},{weight:1},{saturation:-200},{gamma:.7},{visibility:"on"}]}]},c=new google.maps.Map(document.getElementById("map"),b);new google.maps.Marker({position:a,map:c,animation:google.maps.Animation.DROP,title:"Trego"})}document.getElementById("map")&&google.maps.event.addDomListener(window,"load",a)}();