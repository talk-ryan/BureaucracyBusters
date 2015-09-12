/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : app.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

var debug = true;

// Main configuration file. Sets up AngularJS module and routes and any other config objects
// Configuration with ui-router instead of ng-route.
var app = angular.module('app', [
    'ngAnimate',
    'ngResource',
    'ngTouch',
    'ui',
    'ui.bootstrap',
    'ui.bootstrap.carousel',
    'ui.calendar',
    'ui.grid',
    'ui.grid.cellNav',
    'ui.grid.edit',
    'ui.grid.resizeColumns',
    'ui.grid.pinning',
    'ui.grid.selection',
    'ui.grid.moveColumns',
    'ui.grid.exporter',
    'ui.grid.importer',
    'ui.grid.grouping',
    'ui.router',
    'ui.sortable',
    'app.controllers',
    'app.filters',
    'app.directives',
    'app.services'
]);

if(debug){
    console.log("angular.module(app) defined");
}

var appControllers = angular.module('app.controllers', []);     //Define the controllers module
if(debug){
    console.log("angular.module('app.controllers', []) defined");
}
var appFilters = angular.module('app.filters', []);     //Define the controllers module
if(debug){
    console.log("angular.module('app.filters', []) defined");
}
var appDirectives = angular.module('app.directives', []);     //Define the directive module
if(debug){
    console.log("angular.module('app.directives', []) defined");
}
var appServices = angular.module('app.services', [
    'ngResource'
    ]);     //Define the services module
if(debug){
    console.log("angular.module('app.services', ['ngResource']) defined");
}

//app.run(
//    [            '$rootScope', '$state', '$stateParams',
//        function ($rootScope,   $state,   $stateParams) {
//            /* It's very handy to add references to $state and $stateParams to the $rootScope
//            ** so that you can access them from any scope within your applications.
//            ** For example, <li ng-class="{ active: $state.includes('contacts.list') }"> will
//            ** set the <li> to active whenever 'contacts.list' or one of its decendents is active.
//            */
//            
//            $rootScope.state = $state;
//            $rootScope.stateParams = $stateParams;
//
//            $rootScope.pageLoaded = true;
//            
//            //$rootScope.endPoint = "http://localhost:3000";
//            $rootScope.endPoint = "http://localhost:3000";
//
//            $rootScope.clearmenuclass = true;
//
//        }
//    ]
//);

app.config( ['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider,   $stateProvider) {
    
    $stateProvider

    // url - matches the ui-sref on the index.html page
    // templateUrl - matches the location of the partial html file
    // controller - matches the name of the controller associated with this page
    // service - identifies the service used to get the data needed for this page.
    //
    // To be displayed on main screen:
    // $state          = {{ $state.current.name }}
    // $stateParams    = {{ $stateParams }}
    // $state full url = {{ $state.$current.url.source }}
    // $stateProvider  = {{ $stateProvider }}
    
    /* Home */
    .state('home', {
        clearmenuclass: true,
        controller: 'homeController',
        templateUrl: 'templates/home/home.html',
        url: '/home'
    })

    .state('about', {
        controller: 'aboutController',
        templateUrl: 'templates/about/about.html',
        url: '/about'
    })

    .state('citations', {
        //controller: 'citationsController',
        templateUrl: 'templates/citations/citations.html',
        url: '/citations'
    })

    .state('test1', {
        //controller: 'test1Controller',
        templateUrl: 'templates/test/test1.html',
        url: '/test1'
    })

    .state('test2', {
        //controller: 'test2Controller',
        templateUrl: 'templates/test/test2.html',
        url: '/test2'
    })

    .state('test3', {
        //controller: 'test3Controller',
        templateUrl: 'templates/test/test3.html',
        url: '/test3'
    })


    /* Register */
    .state('register', {
        controller: 'userController',
        templateUrl: 'templates/account/register.html',
        url: "/register"
    })

   /* Login */
    .state('login', {
        controller: 'userController',
        templateUrl: 'templates/account/login.html',
        url: "/login"
    })

   /* Logout */
    .state('logout', {
        templateUrl: 'templates/account/logout.html',
        url: "/logout"
    });

    $urlRouterProvider

        /*
        ** The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        ** Here we are just setting up some convenience urls.
        */
        .when('/c?id', '/templates/contacts/:id')
        .when('/user/:id', '/templates/contacts/:id')

        .otherwise('/home');



}]);

if(debug){
    console.log("angular.config(['$urlRouterProvider', '$stateProvider']) defined");
}

$( document ).ready(function() {
    console.log( "website is now ready to be displayed!" );
    $( "#stateDisplay" ).css( "visible", "true" );
});


/*****************************************************************************
 ** END OF FILE - app.js
 ****************************************************************************/

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
* @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.7.0';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

}(this, document));

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s.init();
                s._configure()
                 ._draw();
            };

            if(this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend(
                {
                    // Config
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    stopper : true,
                    readOnly : this.$.data('readonly') || (this.$.attr('readonly') == 'readonly'),

                    // UI
                    cursor : (this.$.data('cursor') === true && 30)
                                || this.$.data('cursor')
                                || 0,
                    thickness : (
                                this.$.data('thickness')
                                && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                                )
                                || 0.35,
                    lineCap : this.$.data('linecap') || 'butt',
                    width : this.$.data('width') || 200,
                    height : this.$.data('height') || 200,
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious : this.$.data('displayprevious'),
                    fgColor : this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline : false,
                    step : this.$.data('step') || 1,

                    // Hooks
                    draw : null, // function () {}
                    change : null, // function (value) {}
                    cancel : null, // function () {}
                    release : null, // function (value) {}
                    error : null // function () {}
                }, this.o
            );

            // finalize options
            if(!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if(this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input')
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = $this.val();

                    $this.bind(
                        'change keyup'
                        , function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();

            } else {

                // input = integer
                this.i = this.$;
                this.v = this.$.val();
                (this.v == '') && (this.v = this.o.min);

                this.$.bind(
                    'change keyup'
                    , function () {
                        s.val(s._validate(s.$.val()));
                    }
                );

            }

            (!this.o.displayInput) && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas'));
            if (typeof G_vmlCanvasManager !== 'undefined') {
              G_vmlCanvasManager.initElement(this.$c[0]);
            }
            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;
            if (!this.c) {
                this.o.error && this.o.error();
                return;
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) /
                        (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                        );

            // detects relative width / height
            this.relativeWidth = ((this.o.width % 1 !== 0)
                                    && this.o.width.indexOf('%'));
            this.relativeHeight = ((this.o.height % 1 !== 0)
                                    && this.o.height.indexOf('%'));

            this.relative = (this.relativeWidth || this.relativeHeight);

            // wraps all elements in a div
            this.$div = $('<div style="'
                        + (this.o.inline ? 'display:inline;' : '')
                        + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            // the most important !
            this._draw();

            return this;
        };

        this._carve = function() {
            if(this.relative) {
                var w = this.relativeWidth
                            ? this.$div.parent().width()
                                * parseInt(this.o.width) / 100
                            : this.$div.parent().width(),
                    h = this.relativeHeight
                            ? this.$div.parent().height()
                                * parseInt(this.o.height) / 100
                            : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        }

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH
            && (d = s.dH());

            (d !== false) && s.draw();

        };

        this._touch = function (e) {

            var touchMove = function (e) {

                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                            );
                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k"
                    , function () {
                        k.c.d.unbind('touchmove.k touchend.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {

            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);
                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k"
                    , function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (
                                s.eH
                                && (s.eH() === false)
                            ) return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k"
                    , function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;
            return this;
        };

        this._listen = function () {

            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                         }
                    )
                    .bind(
                        "touchstart"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                         }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if(this.relative) {
                $(window).resize(function() {
                    s._carve()
                     .init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function(v) {
            return (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7)
            rgb = [parseInt(h.substring(0,2),16)
                   ,parseInt(h.substring(2,4),16)
                   ,parseInt(h.substring(4,6),16)];
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) { t[i] = f[i]; }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend(
                {
                    bgColor : this.$.data('bgcolor') || '#EEEEEE',
                    angleOffset : this.$.data('angleoffset') || 0,
                    angleArc : this.$.data('anglearc') || 360,
                    inline : true
                }, this.o
            );
        };

        this.val = function (v) {
            if (null != v) {
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
		this.v = this.cv;
                this.$.val(this.v);
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2)
                        , - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
                    + this.o.min;

            this.o.stopper
            && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {
            // bind MouseWheel
            var s = this, mwTimerStop, mwTimerRelease,
                mw = function (e) {
                            e.preventDefault();

                            var ori = e.originalEvent
                                ,deltaX = ori.detail || ori.wheelDeltaX
                                ,deltaY = ori.detail || ori.wheelDeltaY
                                ,v = s._validate(s.$.val())
                                    + (deltaX>0 || deltaY>0 ? s.o.step : deltaX<0 || deltaY<0 ? -s.o.step : 0);

                            v = max(min(v, s.o.max), s.o.min);
                            
                            s.val(v);

                            if(s.rH) {
                                // Handle mousewheel stop
                                clearTimeout(mwTimerStop);
                                mwTimerStop = setTimeout(function() {
                                    s.rH(v);
                                    mwTimerStop = null;
                                }, 100);

                                // Handle mousewheel releases
                                if(!mwTimerRelease) {
                                    mwTimerRelease = setTimeout(function() {
                                        if(mwTimerStop) s.rH(v);
                                        mwTimerRelease = null;
                                    }, 200);
                                }
                            }
                        }
                , kval, to, m = 1, kv = {37:-s.o.step, 38:s.o.step, 39:s.o.step, 40:-s.o.step};

            this.$
                .bind(
                    "keydown"
                    ,function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if(kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {

                            (kc !== 13)         // enter
                            && (kc !== 8)       // bs
                            && (kc !== 9)       // tab
                            && (kc !== 189)     // -
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = parseInt(s.$.val()) + kv[kc] * m;

                                s.o.stopper
                                && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(
                                    function () { m*=2; }
                                    ,30
                                );
                            }
                        }
                    }
                )
                .bind(
                    "keyup"
                    ,function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }

                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function () {

            if (
                this.v < this.o.min
                || this.v > this.o.max
            ) this.v = this.o.min;

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                            String(Math.abs(this.o.max)).length
                            , String(Math.abs(this.o.min)).length
                            , 2
                            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px'
                        ,'height' : ((this.w / 3) >> 0) + 'px'
                        ,'position' : 'absolute'
                        ,'vertical-align' : 'middle'
                        ,'margin-top' : ((this.w / 3) >> 0) + 'px'
                        ,'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px'
                        ,'border' : 0
                        ,'background' : 'none'
                        ,'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font
                        ,'text-align' : 'center'
                        ,'color' : this.o.inputColor || this.o.fgColor
                        ,'padding' : '0px'
                        ,'-webkit-appearance': 'none'
                        })
                || this.i.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
        };

        this.change = function (v) {
            if (v == this.cv) return;
            this.cv = v;
            if (
                this.cH
                && (this.cH(v) === false)
            ) return;
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.draw = function () {

            var c = this.g,                 // context
                a = this.angle(this.cv)    // Angle
                , sat = this.startAngle     // Start angle
                , eat = sat + a             // End angle
                , sa, ea                    // Previous angles
                , r = 1;

            c.lineWidth = this.lineWidth;

            c.lineCap = this.lineCap;

            this.o.cursor
                && (sat = eat - this.cursorExt)
                && (eat = eat + this.cursorExt);

            c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
            c.stroke();

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                sa = this.startAngle;
                this.o.cursor
                    && (sa = ea - this.cursorExt)
                    && (ea = ea + this.cursorExt);

                c.beginPath();
                    c.strokeStyle = this.pColor;
                    c.arc(this.xy, this.xy, this.radius, sa - 0.00001, ea + 0.00001, false);
                c.stroke();
                r = (this.cv == this.v);
            }

            c.beginPath();
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                c.arc(this.xy, this.xy, this.radius, sat - 0.00001, eat + 0.00001, false);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

})(jQuery);

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

	// our plugin constructor
	var OnePageNav = function(elem, options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function() {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.$nav = this.$elem.find(this.config.navItems);

			//Filter any links out of the nav
			if(this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Handle clicks on the nav
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//Get the section positions
			this.getPositions();

			//Handle scroll changes
			this.bindInterval();

			//Update the positions on resize too
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function(self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function() {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function() {
				self.didScroll = true;
			});

			self.t = setInterval(function() {
				docHeight = self.$doc.height();

				//If it was scrolled
				if(self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//If the document height changes
				if(docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function() {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function() {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function(windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for(var section in this.sections) {
				if((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if(!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if(self.config.begin) {
					self.config.begin();
				}

				//Change the highlighted nav item
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Scroll to the correct position
				self.scrollTo(newLoc, function() {
					//Do we need to change the hash?
					if(self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if(self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function() {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//If the position is set
			if(position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//If it's not already the current section
				if(!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if(this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function(target, callback) {
			var offset = $(target).offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function() {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function(options) {
		return this.each(function() {
			new OnePageNav(this, options).init();
		});
	};

})( jQuery, window , document );
 // ----------------------------------------------------------------------------
 // Vegas - Fullscreen Backgrounds and Slideshows with jQuery.
 // v1.3.4 - released 2013-12-16 13:28
 // Licensed under the MIT license.
 // http://vegas.jaysalvat.com/
 // ----------------------------------------------------------------------------
 // Copyright (C) 2010-2013 Jay Salvat
 // http://jaysalvat.com/
 // ----------------------------------------------------------------------------

(function(e){function t(a,n){var o={align:"center",valign:"center"};if(e.extend(o,n),0===a.height())return a.load(function(){t(e(this),n)}),void 0;var i,s,g,d=r(),l=d.width,u=d.height,c=a.width(),v=a.height(),p=u/l,f=v/c;p>f?(i=u/f,s=u):(i=l,s=l*f),g={width:i+"px",height:s+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"},isNaN(parseInt(o.valign,10))?"top"==o.valign?g.top=0:"bottom"==o.valign?g.bottom=0:g.top=(u-s)/2:g.top=0-(s-u)/100*parseInt(o.valign,10)+"px",isNaN(parseInt(o.align,10))?"left"==o.align?g.left=0:"right"==o.align?g.right=0:g.left=(l-i)/2:g.left=0-(i-l)/100*parseInt(o.align,10)+"px",a.css(g)}function a(){d.prependTo("body").fadeIn()}function n(){d.fadeOut("fast",function(){e(this).remove()})}function o(){return e("body").css("backgroundImage")?e("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1"):void 0}function r(){var e=window,t="inner";return"innerWidth"in window||(e=document.documentElement||document.body,t="client"),{width:e[t+"Width"],height:e[t+"Height"]}}var i,s=e("<img />").addClass("vegas-background"),g=e("<div />").addClass("vegas-overlay"),d=e("<div />").addClass("vegas-loading"),l=e(),u=null,c=[],v=0,p=5e3,f=function(){},h={init:function(r){var i={src:o(),align:"center",valign:"center",fade:0,loading:!0,load:function(){},complete:function(){}};e.extend(i,e.vegas.defaults.background,r),i.loading&&a();var g=s.clone();return g.css({position:"fixed",left:"0px",top:"0px"}).bind("load",function(){g!=l&&(e(window).bind("load resize.vegas",function(){t(g,i)}),l.is("img")?(l.stop(),g.hide().insertAfter(l).fadeIn(i.fade,function(){e(".vegas-background").not(this).remove(),e("body").trigger("vegascomplete",[this,v-1]),i.complete.apply(g,[v-1])})):g.hide().prependTo("body").fadeIn(i.fade,function(){e("body").trigger("vegascomplete",[this,v-1]),i.complete.apply(this,[v-1])}),l=g,t(l,i),i.loading&&n(),e("body").trigger("vegasload",[l.get(0),v-1]),i.load.apply(l.get(0),[v-1]),v&&(e("body").trigger("vegaswalk",[l.get(0),v-1]),i.walk.apply(l.get(0),[v-1])))}).attr("src",i.src),e.vegas},destroy:function(t){return t&&"background"!=t||(e(".vegas-background, .vegas-loading").remove(),e(window).unbind("*.vegas"),l=e()),t&&"overlay"!=t||e(".vegas-overlay").remove(),clearInterval(i),e.vegas},overlay:function(t){var a={src:null,opacity:null};return e.extend(a,e.vegas.defaults.overlay,t),g.remove(),g.css({margin:"0",padding:"0",position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),a.src===!1&&g.css("backgroundImage","none"),a.src&&g.css("backgroundImage","url("+a.src+")"),a.opacity&&g.css("opacity",a.opacity),g.prependTo("body"),e.vegas},slideshow:function(t,a){var n={step:v,delay:p,preload:!1,loading:!0,backgrounds:c,walk:f};if(e.extend(n,e.vegas.defaults.slideshow,t),n.backgrounds!=c&&(t.step||(n.step=0),t.walk||(n.walk=function(){}),n.preload&&e.vegas("preload",n.backgrounds)),c=n.backgrounds,p=n.delay,v=n.step,f=n.walk,clearInterval(i),!c.length)return e.vegas;var o=function(){0>v&&(v=c.length-1),(v>=c.length||!c[v-1])&&(v=0);var t=c[v++];t.walk=n.walk,t.loading=n.loading,t.fade===void 0&&(t.fade=n.fade),t.fade>n.delay&&(t.fade=n.delay),e.vegas(t)};return o(),a||(u=!1,e("body").trigger("vegasstart",[l.get(0),v-1])),u||(i=setInterval(o,n.delay)),e.vegas},next:function(){var t=v;return v&&(e.vegas("slideshow",{step:v},!0),e("body").trigger("vegasnext",[l.get(0),v-1,t-1])),e.vegas},previous:function(){var t=v;return v&&(e.vegas("slideshow",{step:v-2},!0),e("body").trigger("vegasprevious",[l.get(0),v-1,t-1])),e.vegas},jump:function(t){var a=v;return v&&(e.vegas("slideshow",{step:t},!0),e("body").trigger("vegasjump",[l.get(0),v-1,a-1])),e.vegas},stop:function(){var t=v;return v=0,u=null,clearInterval(i),e("body").trigger("vegasstop",[l.get(0),t-1]),e.vegas},pause:function(){return u=!0,clearInterval(i),e("body").trigger("vegaspause",[l.get(0),v-1]),e.vegas},get:function(e){return null===e||"background"==e?l.get(0):"overlay"==e?g.get(0):"step"==e?v-1:"paused"==e?u:void 0},preload:function(t){var a=[];for(var n in t)if(t[n].src){var o=document.createElement("img");o.src=t[n].src,a.push(o)}return e.vegas}};e.vegas=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist"),void 0):h.init.apply(this,arguments)},e.vegas.defaults={background:{},slideshow:{},overlay:{}}})(jQuery);
/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : misc.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

/*
$('ul.dropdown-menu').find('li').click(function () {
    // remove the 'open' class on the parent element 
    $(this).parents('.dropdown-menu').parent().removeClass('open');
    $(this).parents('.dropdown-menu').parent().removeClass('active');
});
*/

//////////////////////////////////////////////////////////////////////////////
// Miscellaneous Calendar functions
//////////////////////////////////////////////////////////////////////////////
//
//$(function() {
//    $( "#3MonCal" ).datepicker({
//        numberOfMonths: 2,
//        showButtonPanel: true
//    });
//});


function getCalendarHTML(mo, yr, showToday){
    // mo = zero-based month number
    // yr = 4 digit year YYYY
    // Create an array containing the month names
    var M = new Array("January","February","March","April","May","June","July",
                    "August","September","October","November","December");
    // Create an array with the days of the week
    var D = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    // The first of the month
    var dayOne = new Date(M[mo]+" 1,"+yr);
    // Determine the day of the week upon which the 1st of the month falls
    var dy = dayOne.getDay();
    yr = eval(yr);
    
    // Days in each month
    var d = "312831303130313130313031";
    // Is this leap year?
    if (yr / 4 === Math.floor(yr / 4)) {
        d = d.substring(0, 2) + "29" + d.substring(4, d.length);
    }
    // Calculate the position in the d string for this month
    var pos = (mo * 2);
    // Grab 2 character positions representing the number of days in this month (last day)
    var ld = eval(d.substring(pos, pos + 2));
    var tday = new Date().getDate();
    var dow = new Date().getDay();
    
    // Start outputting this month's calendar
    var htmlText =  '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">';
    htmlText += '<table class="calTable"><tr>'
    // Display the month and year
    htmlText += '<th class="monHdr'
    if(showToday){htmlText += ' hiLite'}
    htmlText += '" colspan=7 center>' + M[mo] + " " + yr + "</th></tr>";
    // Display the days of the week
    htmlText += '<tr>';
    for (var i = 0;i < 7;i ++) {
        if((i == dow) && (showToday)) {
                htmlText += '<td class="wkdayHdr hiLite">';
            } else {
                htmlText += '<td class="wkdayHdr">';
            }
            htmlText += D[i] + '</td>';                    // Display the days of the week
    }
    htmlText += '</tr>';
    var ctr = 0;
    // Display the day of the month or a blank if the 1st falls in mid-week
    htmlText += '<tr class="calDayRow">';
    // Display the day of the month or a blank space
    // for the first week of the month
    for (i = 0;i < 7; i++){
        if (i < dy) {
            htmlText += "<td> </td>";
        }
        else {
            ctr++;
            if((ctr == tday) && (showToday)) {
                htmlText += '<td class="hiLite">';
            } else {
                htmlText += '<td>';
            }
            htmlText += ctr + "</td>";
        }
    }
    htmlText += '</tr>';
    // Display the day of the month for the rest of the month
    // Display a blank after the last day of the month
    htmlText += '<tr class="calDayRow">';
    while (ctr <= ld) {
        for (i = 0;i < 7; i++){
            ctr++;
            if (ctr > ld){
                htmlText += '<td> </td>';
            }
            else {
                if((ctr == tday) && (showToday)) {
                    htmlText += '<td class="hiLite">';
                } else {
                    htmlText += '<td>';
                }
                htmlText += ctr + '</td>';
            }
        }
        htmlText += '</tr><tr class="calDayRow">';
    }
    htmlText += '</tr></table><br class="clear" /></div>';
    return htmlText;
}

 
function showCalenders() {

    var today = new Date();                                     // today's date
    var thisMonth = today.getMonth();                           // the current month - zero-based
    var thisYear = today.getYear() + 1900;                      // the current year
    var lastMonth = (thisMonth===0?11:thisMonth-1);             // calculate last month
    var lastYear = (thisMonth===0?thisYear-1:thisYear);         // calculate last month's year
    var nextYear = (thisMonth===11?thisYear+1:thisYear);        // next month's year
    var nextMonth = (thisMonth===11?0:thisMonth+1);             // next month
    var htmlObj = document.getElementById("calBox");

    if( htmlObj )
    {
        var htmlText='<div class="row">';

        htmlText = htmlText + getCalendarHTML(lastMonth, lastYear, false);    // Send last month to screen
        htmlText = htmlText + getCalendarHTML(thisMonth, thisYear, true);     // Send this month to screen
        htmlText = htmlText + getCalendarHTML(nextMonth, nextYear, false);    // Send next month to screen

        htmlObj.innerHTML = htmlText + '</div>';
    }
}

//////////////////////////////////////////////////////////////////////////////
// Gather Screen Size Information
//////////////////////////////////////////////////////////////////////////////

function gebID(id){ return document.getElementById(id); }
function gebTN(tagName){ return document.getElementsByTagName(tagName); }
function setStyleToTags(tagName, styleString){
    var tags = gebTN(tagName);
    for( var i = 0; i<tags.length; i++ ) tags[i].setAttribute('style', styleString);
}
function testSizes(parentObj){
    if( parentObj == null){ parentObj = "body"; }
    
    gebID( 'screen.Width' ).innerHTML = screen.width;
    gebID( 'screen.Height' ).innerHTML = screen.height;

    gebID( 'window.Width' ).innerHTML = window.innerWidth;
    gebID( 'window.Height' ).innerHTML = window.innerHeight;

    gebID( 'documentElement.Width' ).innerHTML = document.documentElement.clientWidth;
    gebID( 'documentElement.Height' ).innerHTML = document.documentElement.clientHeight;

    gebID( 'body.Width' ).innerHTML = gebTN(parentObj)[0].clientWidth;
    gebID( 'body.Height' ).innerHTML = gebTN(parentObj)[0].clientHeight;  
}

function displaySizes(parentObj) {
    if( parentObj === null){ parentObj = "body"; }
    var table = document.createElement('table');
    table.innerHTML = 
       "<tr><th>SOURCE</th><th>WIDTH</th><th>x</th><th>HEIGHT</th></tr>"
      +"<tr><td>screen</td><td id='screen.Width' /><td>x</td><td id='screen.Height' /></tr>"
      +"<tr><td>window</td><td id='window.Width' /><td>x</td><td id='window.Height' /></tr>"
      +"<tr><td>document<br>.documentElement</td><td id='documentElement.Width' /><td>x</td><td id='documentElement.Height' /></tr>"
      +"<tr><td>document.body</td><td id='body.Width' /><td>x</td><td id='body.Height' /></tr>"
    ;

    gebTN(parentObj)[0].appendChild( table );

    setStyleToTags("table",
                 "border: 2px solid black !important; position: fixed !important;"
                +"left: 100px !important; top: 90px !important; padding:5px !important;"
                +"width: 200px !important; font-size:10px; !important"
                +"white-space: pre !important; font-family: monospace !important;"
                +"z-index: 9999 !important;background: white !important;"
    );
    setStyleToTags("td", "color: black !important; border: none !important; padding: 5px !important; text-align:center !important;");
    setStyleToTags("th", "color: black !important; border: none !important; padding: 5px !important; text-align:center !important;");

    table.style.setProperty( 'margin-left', '-'+( table.clientWidth / 2 )+'px' );

    setInterval( testSizes, 200 );
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

 function multObjArray2Array(multObjArray){
     console.debug("multObjArray2Array");
    console.debug(multObjArray);
    var allArray = [];
    for(var i=0; i<multObjArray.length; i++)
    {
        for(var j=0; j<multObjArray[i].length;j++)
        {
            var l = allArray.push( multObjArray[i][j] );
        }
    }
    return allArray;
}

function JSONDateToDateObj (jd) { // jd = JSON Date format ie. '2013-03-08T14:34:00:000Z'
    if( (jd.length != 24) ||  (jd.substr(4,1) != '-') ||  (jd.substr(7,1) != '-') ||  (jd.substr(10,1) != 'T') ||  (jd.substr(13,1) != ':') ||  (jd.substr(16,1) != ':') ||  (jd.substr(19,1) != ':') ||  (jd.substr(23,1) != 'Z') ) {
        return null;
    }
    var d = new Date();
    d.setFullYear(jd.substr(0,4), jd.substr(5,2)-1, jd.substr(8,2));
    d.setHours(jd.substr(11,2));
    d.setMinutes(jd.substr(14,2));
    d.setSeconds(jd.substr(17,2));
    d.setMilliseconds(jd.substr(20,3));
    return d;
}

function editImageData(imgID) {
    alert("I'm sorry, you don't have the authority to edit image ID#" + imgID + ".");
}

function deleteImage(imgID){
    alert("I'm sorry, you don't have the authority to delete image ID#" + imgID + ".");
}

function enlargeToggle(imgID){
    alert("Enlarge image ID#" + imgID + ".");
}

/*****************************************************************************
 ** END OF FILE - misc.js
 ****************************************************************************/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
/* Created by Artisteer v4.3.0.60745 */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:false, browser:true, jquery:false */
/*global jQuery BackgroundHelper */

// css helper
browser = function ($) {
    'use strict';
    var data = [
        { str: navigator.userAgent, sub: 'Chrome', ver: 'Chrome', name: 'chrome' },
        { str: navigator.vendor, sub: 'Apple', ver: 'Version', name: 'safari' },
        { prop: window.opera, ver: 'Opera', name: 'opera' },
        { str: navigator.userAgent, sub: 'Firefox', ver: 'Firefox', name: 'firefox' },
        { str: navigator.userAgent, sub: 'MSIE', ver: 'MSIE', name: 'ie' },
        { str: navigator.userAgent, sub: 'Trident/7.0', ver: 'rv', name: 'ie' }
    ];
    var v = function (s, n) {
        var i = s.indexOf(data[n].ver);
        return (i !== -1) ? parseFloat(s.substring(i + data[n].ver.length + 1)) : 0;
    };
    var result = { name: 'unknown', version: 0 };
    var html = $('html');
    for (var n = 0; n < data.length; n++) {
        if (!result[data[n].name]) {
            result[data[n].name] = false;
        }
        if ((data[n].str && (data[n].str.indexOf(data[n].sub) !== -1)) || data[n].prop) {
            result.name = data[n].name;
            result[result.name] = true;
            result.version = v(navigator.userAgent, n) || v(navigator.appVersion, n);
            html.addClass(result.name + ' ' + result.name + parseInt(result.version, 10));
        }
    }
    return result;
} (jQuery);

jQuery(function ($) {
    if (typeof responsiveDesign === "undefined") {
        $("html").addClass("desktop");
    }
});

jQuery(function ($) {
    'use strict';
    var i, j, k, l, m;
    if (!browser.ie || browser.version !== 9) {
        return;
    }
    var splitByTokens = function (str, startToken, endToken, last) {
        if (!last) {
            last = false;
        }
        var startPos = str.indexOf(startToken);
        if (startPos !== -1) {
            startPos += startToken.length;
            var endPos = last ? str.lastIndexOf(endToken) : str.indexOf(endToken, startPos);

            if (endPos !== -1 && endPos > startPos) {
                return str.substr(startPos, endPos - startPos);
            }
        }
        return '';
    };

    var splitWithBrackets = function (str, token, brackets) {
        /*jshint nonstandard:true */
        if (!token) {
            token = ',';
        }
        if (!brackets) {
            brackets = '()';
        }
        var bracket = 0;
        var startPos = 0;
        var result = [];
        if (brackets.lenght < 2) {
            return result;
        }
        var pos = 0;
        while (pos < str.length) {
            var ch = str[pos];
            if (ch === brackets[0]) {
                bracket++;
            }
            if (ch === brackets[1]) {
                bracket--;
            }
            if (ch === token && bracket < 1) {
                result.push(str.substr(startPos, pos - startPos));
                startPos = pos + token.length;
            }
            pos++;
        }
        result.push(str.substr(startPos, pos - startPos));
        return result;
    };

    var byteToHex = function (d) {
        var hex = Number(d).toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    for (i = 0; i < document.styleSheets.length; i++) {
        var s = document.styleSheets[i];
        var r = [s];
        for (j = 0; j < s.imports.length; j++) {
            r.push(s.imports[j]);
        }
        for (j = 0; j < r.length; j++) {
            s = r[j];
            var n = [];
            for (k = 0; k < s.rules.length; k++) {
                var css = s.rules[k].cssText || s.rules[k].style.cssText;
                if (!css) {
                    continue;
                }
                var value = splitByTokens(css, '-svg-background:', ';');
                if (value === '') {
                    continue;
                }
                var values = splitWithBrackets(value);
                for (l = 0; l < values.length; l++) {
                    var g = splitByTokens(values[l], 'linear-gradient(', ')', true);
                    if (g === '') {
                        continue;
                    }
                    var args = splitWithBrackets(g);
                    if (args.length < 3) {
                        continue;
                    }
                    var maxOffset = 0;
                    var stops = [];
                    for (m = 1; m < args.length; m++) {
                        var stopValues = splitWithBrackets($.trim(args[m]), ' ');
                        if (stopValues.length < 2) {
                            continue;
                        }
                        var stopColor = $.trim(stopValues[0]);
                        var stopOpacity = 1;
                        if (stopColor == 'transparent') {
                            stopColor = '#000000';
                            stopOpacity = 0;
                        }
                        var colorRgba = splitByTokens(stopColor, 'rgba(', ')', true);
                        var stopOffset = $.trim(stopValues[1]);
                        if (colorRgba !== "") {
                            var rgba = colorRgba.split(',');
                            if (rgba.length < 4) {
                                continue;
                            }
                            stopColor = '#' + byteToHex(rgba[0]) + byteToHex(rgba[1]) + byteToHex(rgba[2]);
                            stopOpacity = rgba[3];
                        }
                        var isPx = stopOffset.indexOf('px') !== -1;
                        if (isPx) {
                            maxOffset = Math.max(maxOffset, parseInt(stopOffset, 10) || 0);
                        }
                        stops.push({ offset: stopOffset, color: stopColor, opacity: stopOpacity, isPx: isPx });
                    }
                    var stopsXML = '';
                    var lastStop = null;
                    for (m = 0; m < stops.length; m++) {
                        if (stops[m].isPx) {
                            stops[m].offset = ((parseInt(stops[m].offset, 10) || 0) / (maxOffset / 100)) + '%';
                        }
                        stopsXML += '<stop offset="' + stops[m].offset + '" stop-color="' + stops[m].color + '" stop-opacity="' + stops[m].opacity + '"/>';
                        if (m === stops.length - 1) {
                            lastStop = stops[m];
                        }
                    }
                    var isLeft = $.trim(args[0]) === 'left';
                    var direction = 'x1="0%" y1="0%" ' + (isLeft ? 'x2="100%" y2="0%"' : 'x2="0%" y2="100%"');
                    var gradientLength = '100%';
                    if (maxOffset > 0) {
                        gradientLength = maxOffset + 'px';
                    }
                    var size = (isLeft ? 'width="' + gradientLength + '" height="100%"' : 'width="100%" height="' + gradientLength + '"');
                    var last = "";
                    if (lastStop !== null && maxOffset > 0) {
                        last = '<rect ' +
                            (isLeft ?
                                'x="' + maxOffset + '" y="0"' :
                                'x="0" y="' + maxOffset + '"') +
                            ' width="100%" height="100%" style="fill:' + lastStop.color + ';opacity:' + lastStop.opacity + ';"/>';

                    }
                    var svgGradient = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><linearGradient id="g" gradientUnits="objectBoundingBox" ' + direction + '>' + stopsXML + '</linearGradient><rect x="0" y="0" ' + size + ' fill="url(#g)" />' + last + '</svg>';
                    values[l] = values[l].replace('linear-gradient(' + g + ')', 'url(data:image/svg+xml,' + escape(svgGradient) + ')');
                }
                n.push({ s: s.rules[k].selectorText, v: 'background: ' + values.join(",") });
            }
            for (k = 0; k < n.length; k++) {
                s.addRule(n[k].s, n[k].v);
            }
        }
    }
});


jQuery(function ($) {
    "use strict";
    // ie8
    if (!browser.ie || browser.version > 8) return;
    $('.shapes').each(function () {
        if ($(this).siblings('.slider').length) {
            $(this).remove();
        } else {
            $(this).css('z-index', 1);
        }
    });

    // ie7
    if (!browser.ie || browser.version > 7) return;
    var textblockTexts = $('.textblock div[class$="-text"]');
    textblockTexts.each(function () {
        var tbText = $(this);
        var valign = tbText.css('vertical-align') ? tbText.css('vertical-align') : 'top';
        if (valign === 'middle') {
            var wrapper = tbText.wrap('<div/>').parent();
            tbText.css({
                'position': 'relative',
                'top': '-50%',
                'height': 'auto'
            });
            wrapper.css({
                'position': 'absolute',
                'top': '50%'
            });
        } else if (valign === 'bottom') {
            tbText.css({
                'position': 'absolute',
                'height': 'auto',
                'bottom': 0
            });
        }
    });
});

/* Set wmode=transparent for youtube and other video hostings to show it under the menus, lightboxes etc. */
jQuery(function ($) {
    "use strict";
    var video = ["youtube"];

    $("iframe[src]").each(function () {
        var iframe = $(this),
            src = iframe.attr("src"),
            isVideo = false,
            i;

        for (i = 0; i < video.length; i++) {
            if (src.toLowerCase().indexOf(video[i].toLowerCase()) !== -1) {
                isVideo = true;
                break;
            }
        }

        if (!isVideo) {
            return;
        }

        if (src.lastIndexOf("?") !== -1) {
            src += "&amp;wmode=transparent";
        } else {
            src += "?wmode=transparent";
        }
        iframe.attr("src", src);
    });
});

jQuery(function ($) {
    "use strict";
    $(window).bind("resize", function () { navigatorResizeHandler($("html").hasClass("responsive")); });
});

var navigatorResizeHandler = (function ($) {
    "use strict";
    return function (responsiveDesign) {
        if (responsiveDesign) return;
        $(".slider").each(function () {
            var slider = $(this);
            var sliderWidth = slider.width();
            var nav = slider.siblings(".slidenavigator");
            var navWidth = nav.outerWidth();
            if (nav.length && navWidth < sliderWidth) {
                // left offset
                var left = nav.attr("data-left");
                // (margin = containerWidth - (objectPosition + objectWidth)) < 0
                var margin = sliderWidth - sliderWidth * parseFloat(left) / 100 - nav.outerWidth(false);
                if (margin < 0) {
                    nav.css("margin-left", margin);
                }
            }
        });
    };
})(jQuery);

var processElementMultiplyBg = (function ($) {
    return (function (selector, info) {
        if (!selector || !info || !info.bgimage || !info.bgposition || !info.images || !info.positions) return;
        var path = "";
        var script = $('head script[src*="script.js"]');
        if (script.length) {
            path = (script.attr('src') || '');
            path = path.substr(0, path.lastIndexOf('/') + 1);
        }
        var html = '';
        var el = $(selector);
        var bgimages = info.images.split(",");
        var bgpositions = info.positions.split(",");
        for (var i = bgimages.length - 1; i >= 0; i--) {
            var bgimage = $.trim(bgimages[i]);
            if (bgimage === "")
                continue;
            var imgIdx = bgimage.lastIndexOf('images/');
            var className = bgimage.substring(imgIdx + 7, bgimage.length - 6);
            el.append("<div class=\"ie8fix " + className + "\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;background:" + bgimage.replace(/(images\/[^\/]+)$/, path + '$1') + " " + bgpositions[i] + " no-repeat\"></div>");
        }
        el.css('background-image', info.bgimage.replace(/(images\/[^\/]+)$/, path + '$1'));
        el.css('background-position-x', "50%");
        el.css('background-position-y', "50%");
    });
})(jQuery);


var responsiveNavigator = (function ($) {
    "use strict";
    return function () {
        if (typeof headerObjectResizer !== 'undefined' && headerObjectResizer.isPreview) return;

        var sheet = $('.sheet');
        var sheetWidth = sheet.outerWidth();

        $(".slider").each(function () {
            var currentSlider = $(this);
            var currentSliderWidth = currentSlider.width();

            var sliderNavigator = currentSlider.siblings(".slidenavigator");
            if (sliderNavigator.length) {
                var off = sheetLeftFunc(sheet, sliderNavigator);
                var calcWidth = isContentSlider(sliderNavigator) ? currentSliderWidth : sheetWidth;

                var navigatorWidth = sliderNavigator.outerWidth();
                var offset = parseInt(sliderNavigator.attr('data-offset') || 0, 10);

                // left offset
                sliderNavigator.css('margin-left', '0px');

                var left = parseFloat(sliderNavigator.attr("data-left"), 10);
                var newLeft = off + uniToPx(left, navigatorWidth, calcWidth);
                sliderNavigator.css('left', newLeft + 'px');


                // reset top to original value
                sliderNavigator.css("top", "");

                // top
                var navigatorHeight = sliderNavigator.outerHeight();
                var uniy = parseFloat(sliderNavigator.attr('data-top'), 10);

                var sliderHeight = parseInt(currentSlider.css('height'), 10);
                var newTop = uniToPx(uniy, navigatorHeight, sliderHeight);

                sliderNavigator.css("top", (newTop + offset) + 'px');
            }
        });
    };
})(jQuery);

jQuery(function ($) {
    "use strict";

    if (typeof responsiveDesign === "undefined") {
        $(window).bind("resize", responsiveNavigator);
    }

    $(window).on("load", function pageInitialize() {
        $(window).trigger("resize");
        $(window).off("load", pageInitialize);
    });
});

jQuery(function($) {
    "use strict";
    $('nav.nav').addClass("desktop-nav");
});


jQuery(function ($) {
    "use strict";
    if (!browser.ie || browser.version > 7) {
        return;
    }
    $('ul.hmenu>li:not(:first-child)').each(function () { $(this).prepend('<span class="hmenu-separator"> </span>'); });
});

jQuery(function ($) {
    "use strict";
    $("ul.hmenu a:not([href])").attr('href', '#').click(function (e) { e.preventDefault(); });
});


jQuery(function ($) {
    "use strict";
    if (!browser.ie || browser.version > 7) {
        return;
    }

    /* Fix width of submenu items.
    * The width of submenu item calculated incorrectly in IE6-7. IE6 has wider items, IE7 display items like stairs.
    */
    $.each($("ul.hmenu ul"), function () {
        var maxSubitemWidth = 0;
        var submenu = $(this);
        var subitem = null;
        $.each(submenu.children("li").children("a"), function () {
            subitem = $(this);
            var subitemWidth = subitem.outerWidth(false);
            if (maxSubitemWidth < subitemWidth) {
                maxSubitemWidth = subitemWidth;
            }
        });
        if (subitem !== null) {
            var subitemBorderLeft = parseInt(subitem.css("border-left-width"), 10) || 0;
            var subitemBorderRight = parseInt(subitem.css("border-right-width"), 10) || 0;
            var subitemPaddingLeft = parseInt(subitem.css("padding-left"), 10) || 0;
            var subitemPaddingRight = parseInt(subitem.css("padding-right"), 10) || 0;
            maxSubitemWidth -= subitemBorderLeft + subitemBorderRight + subitemPaddingLeft + subitemPaddingRight;
            submenu.children("li").children("a").css("width", maxSubitemWidth + "px");
        }
    });
});

jQuery(function ($) {
    "use strict";
    var setDirection = function() {
        setHMenuOpenDirection({
            container: "div.sheet",
            defaultContainer: "#main",
            menuClass: "hmenu",
            leftToRightClass: "hmenu-left-to-right",
            rightToLeftClass: "hmenu-right-to-left"
        });
    };
    if (typeof responsiveDesign !== "undefined") {
        $(window).on('responsive', setDirection);
    } else {
        setDirection();
    }
});

var setHMenuOpenDirection = (function ($) {
    "use strict";
    return (function(menuInfo) {
        var defaultContainer = $(menuInfo.defaultContainer);
        defaultContainer = defaultContainer.length > 0 ? defaultContainer = $(defaultContainer[0]) : null;

        $("ul." + menuInfo.menuClass + ">li>ul").each(function () {
            var submenu = $(this);

            var submenuWidth = submenu.outerWidth(false);
            var submenuLeft = submenu.offset().left;

            var mainContainer = submenu.parents(menuInfo.container);
            mainContainer = mainContainer.length > 0 ? mainContainer = $(mainContainer[0]) : null;

            var container = mainContainer || defaultContainer;
            if (container !== null) {
                var containerLeft = container.offset().left;
                var containerWidth = container.outerWidth(false);

                if (submenuLeft + submenuWidth >= containerLeft + containerWidth) {
                    /* right to left */
                    submenu.addClass(menuInfo.rightToLeftClass).find("ul").addClass(menuInfo.rightToLeftClass);
                } else if (submenuLeft <= containerLeft) {
                    /* left to right */
                    submenu.addClass(menuInfo.leftToRightClass).find("ul").addClass(menuInfo.leftToRightClass);
                }
            }
        });
    });
})(jQuery);


var menuExtendedCreate = (function ($) {
    "use strict";
    return function () {
        var sheet = $(".sheet");
        var sheetLeft = sheet.offset().left;
        var sheetWidth = sheet.width();

        $(".hmenu>li").each(function(i, v) {
            var itm = $(this);
            var subm = itm.children("ul");
            if (subm.length === 0) {
                return;
            }

            // reset
            itm.removeClass("ext ext-r ext-l");
            itm.css("width", "").find(".ext-off,.ext-m,.ext-l,.ext-r").remove();
            subm.children("li").children("a").css("width", "");

            var lw = 0, rw = 0;
        
            if (typeof subm.attr("data-ext-l") !== "undefined" && typeof subm.attr("data-ext-r") !== "undefined") {
                lw = parseInt(subm.attr("data-ext-l"), 10) + 0;
                rw = parseInt(subm.attr("data-ext-r"), 10) + 0;
                itm.addClass("ext-r").addClass("ext-l");
            } else {
                var ltr = !subm.hasClass("hmenu-right-to-left");
                itm.addClass(ltr ? "ext-r" : "ext-l");
            }

            var shadow = 0;
            if (subm.length > 0) {
                var lnk = itm.children("a");
                var lnkWidth = lnk.outerWidth(false);
                itm.css("width", Math.round(parseFloat(lnkWidth, 10)) + "px");
                var menubarMargin = 4 * 2; // margin * 2 sides
                var menubarBorder = 1 * 2; // border 1 side
                var submWidth = subm.width() + shadow + menubarMargin + menubarBorder;
                var w = submWidth - lnkWidth;
                $("<div class=\"ext-off\"></div>").insertBefore(lnk);
                $("<div class=\"ext-m\"></div>").insertBefore(lnk);
                if (w < 0) {
                    var submA = subm.children("li").children("a");
                    var pL = parseInt(submA.css("padding-left").replace("px", ""), 10) || 0;
                    var pR = parseInt(submA.css("padding-right").replace("px", ""), 10) || 0;
                    var bL = parseInt(submA.css("border-left").replace("px", ""), 10) || 0;
                    var bR = parseInt(submA.css("border-right").replace("px", ""), 10) || 0;
                    subm.children("li").children("a").css("width", (lnkWidth - pL - pR - bL - bR) + "px");
                    submWidth = subm.width() + shadow + menubarMargin + menubarBorder;
                    w = submWidth - lnkWidth;
                }
                $("<div class=\"ext-l\" style=\"width: " + (lw > 0 ? lw : Math.round(parseFloat(w, 10))) + "px;\"></div>").insertBefore(lnk);
                $("<div class=\"ext-r\" style=\"width: " + (rw > 0 ? rw : Math.round(parseFloat(w, 10))) + "px;\"></div>").insertBefore(lnk);
                itm.addClass("ext");
            }
        });
    };
})(jQuery);
jQuery(window).load(menuExtendedCreate);


/* Icons in Header should have display block.
 * Otherwise, in case of inline-block there's a space gap in some browsers (Opera 12.16) and icon is cutted.
 */
if (browser.opera) {
    jQuery(function ($) {
        $(".header a[class$='tag-icon']").css("display", "block");
    });
}

jQuery(function ($) {
    'use strict';

    if (browser.ie && browser.version < 8) {
        $(window).bind('resize', function() {
            var c = $('div.content');
            var s = c.parent().children('.layout-cell:not(.content)');
            var w = 0;
            c.hide();
            s.each(function() { w += $(this).outerWidth(true); });
            c.w = c.parent().width(); c.css('width', c.w - w + 'px');
            c.show();
        });
    }

    $(window).trigger('resize');
});

jQuery(function($) {
    "use strict";
    if (!$('html').hasClass('ie7')) {
        return;
    }
    $('ul.vmenu li:not(:first-child),ul.vmenu li li li:first-child,ul.vmenu>li>ul').each(function () { $(this).append('<div class="vmenu-separator"> </div><div class="vmenu-separator-bg"> </div>'); });
});



var artButtonSetup = (function ($) {
    'use strict';
    return (function (className) {
        $.each($("a." + className + ", button." + className + ", input." + className), function (i, val) {
            var b = $(val);
            if (!b.hasClass('button')) {
                b.addClass('button');
            }
            if (b.is('input')) {
                b.val(b.val().replace(/^\s*/, '')).css('zoom', '1');
            }
            b.mousedown(function () {
                var b = $(this);
                b.addClass("active");
            });
            b.mouseup(function () {
                var b = $(this);
                if (b.hasClass('active')) {
                    b.removeClass('active');
                }
            });
            b.mouseleave(function () {
                var b = $(this);
                if (b.hasClass('active')) {
                    b.removeClass('active');
                }
            });
        });
    });
})(jQuery);
jQuery(function () {
    'use strict';
    artButtonSetup("button");
});

jQuery(function($) {
    'use strict';
    $('input.search-button, form.search input[type="submit"]').attr('value', '');
});

var Control = (function ($) {
    'use strict';
    return (function () {
        this.init = function(label, type, callback) {
            var chAttr = label.find('input[type="' +type + '"]').attr('checked');
            if (chAttr === 'checked') {
              label.addClass('checked');
            }

            label.mouseleave(function () {
              $(this).removeClass('hovered').removeClass('active');
            });
            label.mouseover(function () {
              $(this).addClass('hovered').removeClass('active');
            });
            label.mousedown(function (event) {
              if (event.which !== 1) {
                  return;
              }
              $(this).addClass('active').removeClass('hovered');
            });
            label.mouseup(function (event) {
              if (event.which !== 1) {
                  return;
              }
              callback.apply(this);
              $(this).removeClass('active').addClass('hovered');
            });
        };
    });
})(jQuery);


jQuery(function ($) {
    'use strict';
    $('.pager').contents().filter(
        function () {
            return this.nodeType === this.TEXT_NODE;
        }
    ).remove();
});
var fixRssIconLineHeight = (function ($) {
    "use strict";
    return function (className) {
        $("." + className).css("line-height", $("." + className).height() + "px");
    };
})(jQuery);

jQuery(function ($) {
    "use strict";
    var rssIcons = $(".rss-tag-icon");
    if (rssIcons.length){
        fixRssIconLineHeight("rss-tag-icon");
        if (browser.ie && browser.version < 9) {
            rssIcons.each(function () {
                if ($.trim($(this).html()) === "") {
                    $(this).css("vertical-align", "middle");
                }
            });
        }
    }
});
var ThemeLightbox = (function ($) {
    'use strict';
    return (function () {
        var images = $(".lightbox");
        var current;
        this.init = function (ctrl) {
            $(".lightbox").mouseup({ _ctrl: ctrl }, function (e) {
                if ((e.data._ctrl === true && !e.ctrlKey) || (e.which && e.which !== 1)) {
                    return;
                }

                images = $(".lightbox");

                current = images.index(this);

                var imgContainer = $('.lightbox-wrapper');
                if (imgContainer.length === 0) {
                    imgContainer = $('<div class="lightbox-wrapper">').css('line-height', $(window).height() + "px")
                    .appendTo($("body"));

                    var closeBtn = $('<div class="close"><div class="cw"> </div><div class="ccw"> </div><div class="close-alt">&#10007;</div></div>')
                .click(close);
                    closeBtn.appendTo(imgContainer);
                    showArrows();
                }

                move(current);
            });
        };

        function move(index) {
            if (index < 0 || index >= images.length) {
                return;
            }

            showError(false);

            current = index;

            $(".lightbox-wrapper .lightbox-image:not(.active)").remove();

            var active = $(".lightbox-wrapper .active");
            var target = $('<img class="lightbox-image" alt="" src="' + getFullImgSrc($(images[current]).attr("src")) + '" />').click(function () {
                if ($(this).hasClass("active")) {
                    move(current + 1);
                }
            });

            if (active.length > 0) {
                active.after(target);
            } else {
                $(".lightbox-wrapper").append(target);
            }

            showArrows();
            showLoader(true);

            bindMouse($(".lightbox-wrapper").add(target));

            target.load(function () {
                showLoader(false);

                active.removeClass("active");
                target.addClass("active");
            });

            target.error(function () {
                showLoader(false);
                active.removeClass("active");
                target.addClass("active");
                target.attr("src", $(images[current]).attr("src"));
            });
        }

        function showArrows() {
            if ($(".lightbox-wrapper .arrow").length === 0) {
                $(".lightbox-wrapper").append(
                    $('<div class="arrow left"><div class="arrow-t ccw"> </div><div class="arrow-b cw"> </div><div class="arrow-left-alt">&#8592;</div></div>')
                        .css("top", $(window).height() / 2 - 40)
                        .click(function () {
                            if (!$(this).hasClass("disabled")) {
                                move(current - 1);
                            }
                        })
                );
                $(".lightbox-wrapper").append(
                    $('<div class="arrow right"><div class="arrow-t cw"> </div><div class="arrow-b ccw"> </div><div class="arrow-right-alt">&#8594;</div></div>')
                        .css("top", $(window).height() / 2 - 40)
                        .click(function () {
                            if (!$(this).hasClass("disabled")) {
                                move(current + 1);
                            }
                        })
                );
            }

            if (current === 0) {
                $(".lightbox-wrapper .arrow.left").addClass("disabled");
            } else {
                $(".lightbox-wrapper .arrow.left").removeClass("disabled");
            }

            if (current === images.length - 1) {
                $(".lightbox-wrapper .arrow.right").addClass("disabled");
            } else {
                $(".lightbox-wrapper .arrow.right").removeClass("disabled");
            }
        }

        function showError(enable) {
            if (enable) {
                $(".lightbox-wrapper").append($('<div class="lightbox-error">The requested content cannot be loaded.<br/>Please try again later.</div>')
                        .css({ "top": $(window).height() / 2 - 60, "left": $(window).width() / 2 - 170 }));
            } else {
                $(".lightbox-wrapper .lightbox-error").remove();
            }
        }

        function showLoader(enable) {
            if (!enable) {
                $(".lightbox-wrapper .loading").remove();
            }
            else {
                $('<div class="loading"> </div>').css({ "top": $(window).height() / 2 - 16, "left": $(window).width() / 2 - 16 }).appendTo($(".lightbox-wrapper"));
            }
        }

        var close = function () {
            $(".lightbox-wrapper").remove();
        };

        function bindMouse(img) {
            img.bind('mousewheel DOMMouseScroll', function (e) {
                var orgEvent = window.event || e.originalEvent;
                var delta = (orgEvent.wheelDelta ? orgEvent.wheelDelta : orgEvent.detail * -1) > 0 ? 1 : -1;
                move(current + delta);
                e.preventDefault();
            }).mousedown(function (e) {
                // close on middle button click
                if (e.which === 2) {
                    close();
                }
                e.preventDefault();
            });
        }

        function getFullImgSrc(src) {
            var fileName = src.substring(0, src.lastIndexOf('.'));
            var ext = src.substring(src.lastIndexOf('.'));
            return fileName + "-large" + ext;
        }

    });
})(jQuery);

jQuery(function () {
    'use strict';
    new ThemeLightbox().init();
});

(function ($) {
    'use strict';
    // transition && transitionEnd && browser prefix
    $.support.themeTransition = (function () {
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style,
            support = thisStyle.transition !== undefined ||
                thisStyle.WebkitTransition !== undefined ||
                thisStyle.MozTransition !== undefined ||
                thisStyle.MsTransition !== undefined ||
                thisStyle.OTransition !== undefined;
        return support && {
            event: (function () {
                return "transitionend webkitTransitionEnd otransitionend oTransitionEnd";
            })(),
            prefix: (function () {
                return ({
                    opera: "-o-",
                    firefox: "-moz-",
                    chrome: "-webkit-",
                    safari: "-webkit-",
                    ie: ""
                }[browser.name] || "");
            })()
        };
    })();

    window.BackgroundHelper = function () {
        var slides = [];
        var direction = "next";
        var motion = "horizontal";
        var width = 0;
        var height = 0;
        var multiplier = 1;
        var originalWidth = 0;
        var originalHeight = 0;
        var transitionDuration = "";

        this.init = function (motionType, dir, duration) {
            direction = dir;
            motion = motionType;
            slides = [];
            width = 0;
            height = 0;
            multiplier = 1;
            originalWidth = 0;
            originalHeight = 0;
            transitionDuration = duration;
        };

        this.processSlide = function (element, modify) {
            this.updateSize(element, null);
            var pos = [];

            var bgPosition = element.css("background-position");
            var positions = bgPosition.split(",");
            $.each(positions, function (i) {
                var position = $.trim(this);
                var point = position.split(" ");
                var zeroValue = browser.ie && browser.version >= 10 ? 0.1 : 0;
                if (point.length > 1) {
                    var x = point[0].indexOf('%') === -1 ? parseFloat(point[0], 10) : zeroValue;
                    var y = point[1].indexOf('%') === -1 ? parseFloat(point[1], 10) : zeroValue;
                    pos.push({ x: x, y: y });
                } else {
                    pos.push({ x: zeroValue, y: zeroValue });
                }
            });

            slides.push({
                "images": element.css("background-image"),
                "sizes": element.css("background-size"),
                "positions": pos
            });

            if (modify)
                element.css("background-image", "none");
        };

        this.updateSize = function (element, initialSize) {
            width = element.outerWidth(false);
            height = element.outerHeight();
            if (initialSize && parseInt(initialSize.width, 10) !== 0) {
                originalWidth = parseInt(initialSize.width, 10);
                originalHeight = parseInt(initialSize.height, 10);
                if (motion === "fade") {
                    $.each(element.children(), function (i) {
                        $(this).css("background-position", getCssPositions(slides[i].positions, { x: 0, y: 0 }));
                    });
                }
            }
        };

        this.setBackground = function (element, items) {
            var bg = [];
            var sizes = [];
            $.each(items, function (i, o) {
                bg.push(o.images);
                sizes.push(o.sizes);
            });
            element.css({
                "background-image": bg.join(", "),
                //"background-size": sizes.join(", "),
                "background-repeat": "no-repeat"
            });
        };

        this.setPosition = function (element, items) {
            var pos = [];
            $.each(items, function (i, o) {
                pos.push(o.positions);
            });
            element.css({
                "background-position": pos.join(", ")
            });
        };

        this.current = function (index) {
            return slides[index] || null;
        };

        this.next = function (index) {
            var next;
            if (direction === "next") {
                next = (index + 1) % slides.length;
            } else {
                next = index - 1;
                if (next < 0) {
                    next = slides.length - 1;
                }
            }
            return slides[next];
        };

        this.items = function (prev, next, move) {
            var prevItem = { x: 0, y: 0 };
            var nextItem = { x: 0, y: 0 };
            var isDirectionNext = direction === "next";
            var verticalOffset = -(originalHeight - height) / 2;
            var horizontalOffset = -(originalWidth - width) / 2;
            if (motion === "horizontal") {
                prevItem.y = nextItem.y = -(originalHeight - height) / 2;
                prevItem.x = horizontalOffset;
                nextItem.x = (isDirectionNext ? originalWidth : -originalWidth) + horizontalOffset;
                if (move) {
                    prevItem.x += isDirectionNext ? -originalWidth : originalWidth;
                    nextItem.x += isDirectionNext ? -originalWidth : originalWidth;
                }
            } else if (motion === "vertical") {
                prevItem.x = nextItem.x = horizontalOffset;
                prevItem.y = verticalOffset;
                nextItem.y = (isDirectionNext ? originalHeight : -originalHeight) + verticalOffset;
                if (move) {
                    prevItem.y += isDirectionNext ? -originalHeight : originalHeight;
                    nextItem.y += isDirectionNext ? -originalHeight : originalHeight;
                }
            }
            var result = [];
            if (!!prev) {
                result.push({ images: prev.images, positions: getCssPositions(prev.positions, prevItem), sizes: prev.sizes });
            }
            if (!!next) {
                result.push({ images: next.images, positions: getCssPositions(next.positions, nextItem), sizes: next.sizes });
            }

            if (direction === "next") {
                result.reverse();
            }

            return result;
        };

        this.transition = function (container, on) {
            container.css($.support.themeTransition.prefix + "transition", on ? "background-position " + transitionDuration + " ease-in-out" : "");
        };

        function getCssPositions(positions, offset) {
            var result = [];
            if (positions === undefined) {
                return "";
            }
            offset.x = offset.x || 0;
            offset.y = offset.y || 0;
            for (var i = 0; i < positions.length; i++) {
                result.push((positions[i].x * 1 + offset.x) + "px " + (positions[i].y * 1 + offset.y) + "px");
            }
            return result.join(", ");
        }
    };


    var ThemeSlider = function (element, settings) {

        var interval = null;
        var active = false;
        var children = element.find(".active").parent().children();
        var last = false;
        var running = false;

        this.settings = $.extend({}, {
            "animation": "horizontal",
            "direction": "next",
            "speed": 600,
            "pause": 2500,
            "auto": true,
            "repeat": true,
            "navigator": null,
            "clickevents": true,
            "hover": true,
            "helper": null
        }, settings);

        this.move = function (direction, next) {
            var activeItem = element.find(".active"),
                nextItem = next || activeItem[direction](),
                innerDirection = this.settings.direction === "next" ? "forward" : "back",
                reset = direction === "next" ? "first" : "last",
                moving = interval,
                slider = this, tmp;

            active = true;

            if (moving) { this.stop(true); }

            if (!nextItem.length) {
                nextItem = element.find(".slide-item")[reset]();
                if (!this.settings.repeat) { last = true; active = false; return; }
            }

            if ($.support.themeTransition) {
                nextItem.addClass(this.settings.direction);
                tmp = nextItem.get(0).offsetHeight;

                activeItem.addClass(innerDirection);
                nextItem.addClass(innerDirection);

                element.trigger("beforeSlide", children.length);

                element.one($.support.themeTransition.event, function () {
                    nextItem.removeClass(slider.settings.direction)
                        .removeClass(innerDirection)
                        .addClass("active");
                    activeItem.removeClass("active")
                        .removeClass(innerDirection);
                    active = false;
                    setTimeout(function () {
                        element.trigger("afterSlide", children.length);
                    }, 0);
                });
            } else {
                element.trigger("beforeSlide", children.length);

                activeItem.removeClass("active");
                nextItem.addClass("active");
                active = false;

                element.trigger("afterSlide", children.length);
            }

            this.navigate(nextItem);

            if (moving) { this.start(); }
        };

        this.navigate = function (position) {
            var index = children.index(position);
            $(this.settings.navigator).children().removeClass("active").eq(index).addClass("active");
        };

        this.to = function (index) {
            var activeItem = element.find(".active"),
                children = activeItem.parent().children(),
                activeIndex = children.index(activeItem),
                slider = this;

            if (index > (children.length - 1) || index < 0) {
                return;
            }

            if (active) {
                return element.one("afterSlide", function () {
                    slider.to(index);
                });
            }

            if (activeIndex === index) {
                return;
            }

            this.move(index > activeIndex ? "next" : "prev", $(children[index]));
        };

        this.next = function () {
            if (!active) {
                if (last) { this.stop(); return; }
                this.move("next");
            }
        };

        this.prev = function () {
            if (!active) {
                if (last) { this.stop(); return; }
                this.move("prev");
            }
        };

        this.start = function (force) {
            if (!!force) {
                setTimeout($.proxy(this.next, this), 10);
            }
            interval = setInterval($.proxy(this.next, this), this.settings.pause);
            running = true;
        };

        this.stop = function (pause) {
            clearInterval(interval);
            interval = null;
            running = !!pause;
            active = false;
        };

        this.active = function () {
            return running;
        };

        this.moving = function () {
            return active;
        };

        this.navigate(children.filter(".active"));

        if (this.settings.clickevents) {
            $(this.settings.navigator).on("click", "a", { slider: this }, function (event) {
                var activeIndex = children.index(children.filter(".active"));
                var index = $(this).parent().children().index($(this));
                if (activeIndex !== index) {
                    event.data.slider.to(index);
                }
                event.preventDefault();
            });
        }

        if (this.settings.hover) {
            var slider = this;
            element.add(this.settings.navigator)
                   .add(element.siblings(".shapes")).hover(function () {
                       if (element.is(":visible") && !last) { slider.stop(true); }
                   }, function () {
                       if (element.is(":visible") && !last) { slider.start(); }
                   });
        }
    };

    $.fn.themeSlider = function (arg) {
        return this.each(function () {
            var element = $(this),
                data = element.data("slider"),
                options = typeof arg === "object" && arg;

            if (!data) {
                data = new ThemeSlider(element, options);
                element.data("slider", data);
            }

            if (typeof arg === "string" && data[arg]) {
                data[arg]();
            } else if (data.settings.auto && element.is(":visible")) {
                data.start();
            }
        });
    };

})(jQuery);




if (typeof window.resizeData === 'undefined') window.resizeData = {};
window.resizeData.headerPageWidth = false;
if (typeof window.defaultResponsiveData === 'undefined') window.defaultResponsiveData = [false, true, true, true, true, ];

resizeData['headline'] = {
   responsive: [
                  { left: 0.5, top: 0.39, visible: true }, 
                  { left: 0.5, top: 0.39, visible: true }, 
                  { left: 0.5, top: 0.39, visible: true }, 
                  { left: 0.5, top: 0.39, visible: true }, 
                  { left: 0.5, top: 0.39, visible: true }, 
               ],
   area: {
       x: 0,
       y: 0
   },
   width: 224,
   height: 43,
   autoWidth: true};

resizeData['slogan'] = {
   responsive: [
                  { left: 0.5, top: 0.58, visible: true }, 
                  { left: 0.5, top: 0.58, visible: true }, 
                  { left: 0.5, top: 0.58, visible: true }, 
                  { left: 0.5, top: 0.58, visible: true }, 
                  { left: 0.5, top: 0.58, visible: true }, 
               ],
   area: {
       x: 0,
       y: 0
   },
   width: 140,
   height: 18,
   autoWidth: true};

// used to apply compicated values in style like '!important!
function applyCss(object, param, value) {
    var rg = new RegExp(param + '\s*:\s*[^;]+;', "i");
    var style = object.attr('style');
    var str = param + ': ' + value + ';';
    if (rg.test(style)) {
        style = style.replace(rg, str);
    }
    else {
        style += '; ' + str;
    }

    object.attr('style', style);
}

// convert universal coord to pixels
function uniToPx(uni, size, parentSize) {
    uni = parseFloat(uni || '0');
    if (uni < 0) {
        uni = uni * size;
    } else if (uni >= 1) {
        uni = parentSize - (2 - uni) * size;
    } else {
        uni = uni * (parentSize - size);
    }

    return uni;
}

function isContentSlider(object) {
    var isHeader = object.parents('header').length > 0;
    if (isHeader) {
        return false;
    }
    var isPageSlider = object.parents('.pageslider').length > 0;
    if (isPageSlider)
        return false;

    return true;
}

function sheetLeftFunc(sheet, object) {
    var sheetLeft = sheet.offset().left;

    var isHeader = object.parents('header').length > 0;
    if (isHeader) {
        if (resizeData.headerPageWidth) return sheetLeft;
    } else {
        var isPageSlider = object.parents('.pageslider').length > 0;
        if (isPageSlider) {
            if (resizeData.pageSliderPageWidth) return sheetLeft;
        }
    }

    return 0;
}

var headerObjectResizer = {
    
    postInit: false,

    resize: (function ($) {
        'use strict';
        return function () {
            if (!headerObjectResizer.postInit && typeof responsiveDesign !== 'undefined') {
                $(window).on('responsiveResize', headerObjectResizer.resize);
                headerObjectResizer.postInit = true;
            }

            var responsiveType = 0;
            // if we don't use full custom responsive so we MUST cleanup all styles
            var cleanUpStyles = false;
            // when use default respo so while in desktop mode always use 0-type, in other case cleanup our styles
            if (typeof responsiveDesign !== 'undefined' && 
                    defaultResponsiveData[responsiveDesign.responsiveTypeIdx] &&
                    responsiveDesign.isResponsive) {
                cleanUpStyles = true;
            }

            if (typeof responsiveDesign !== 'undefined') {
                if (responsiveDesign.responsiveType === 'tabletlandscape') {
                    responsiveType = 1;
                } else if (responsiveDesign.responsiveType === 'tabletportrait') {
                    responsiveType = 2;
                } else if (responsiveDesign.responsiveType === 'phonelandscape') {
                    responsiveType = 3;
                } else if (responsiveDesign.responsiveType === 'phoneportrait') {
                    responsiveType = 4;
                }
            }

            var sheet = $('.sheet');
            var sheetWidth = sheet.outerWidth();

            var header = $('header');
            var height = 0;
            var cssPrefix = '';

            // move html shapes
            var headerQuery = 'header.header .shapes>*, header.header .textblock, header.header>.headline, header.header>.slogan, header.header>.positioncontrol, header.header>.logo';
            var pageSliderQuery = '.pageslider .slide-item>*';
            if (headerObjectResizer.isPreview) {
                headerQuery = 'header .slider';
                pageSliderQuery = '.pageslider .slider, .pageslider .textblock';
            }
            $(headerQuery + ', ' + pageSliderQuery).each(function () {
                var object = $(this);
                height = object.parent().height();

                var off = sheetLeftFunc(sheet, object);

                var cls = object.attr('class').split(' ');
                $.each(cls, function (key, val) {
                    val = $.trim(val);
                    if (val.length === 0) return;
                    if (val.indexOf(cssPrefix) !== 0) return;

                    val = val.substring(cssPrefix.length);
                    var data = resizeData[val];
                    if (typeof data === 'undefined') return;

                    if (cleanUpStyles) {
                        object.css('display', '');
                        object.css('left', '');
                        object.css('margin-left', '');
                    }

                    var respData = data.responsive[responsiveType];
                    if (respData.visible) {
                        object.css('display', '');
                    } else {
                        applyCss(object, 'display', 'none !important');
                    }

                    if (cleanUpStyles || !respData.visible) return false;

                    var x = uniToPx(respData.left, data.autoWidth ? object.width() : data.width, sheetWidth);
                    x += off;

                    var y = uniToPx(respData.top, data.height, height);

                    object.css('left', x + 'px');
                    object.css('top', y + 'px');
                    applyCss(object, 'margin-left', '0px !important');
                    return false;
                });
            });

            // move images in slide's background-images
            var slides = $('.slide-item').add(header);
            if (browser.ie && browser.version <= 8) {
                slides = slides.add('.slide-item .ie8fix');
            }
            $.each(slides, function (slideIdx, slide) {
                slide = $(slide);

                if (slide.closest('.collage').length > 0 || cleanUpStyles) {
                    slide.css('background-position', '');
                    return;
                }

                var slideVisible = slide.is(':visible');
                if (!slideVisible && browser.ie) {
                    slide.css('display', 'block');
                }

                var off = sheetLeftFunc(sheet, slide);

                if (browser.ie && browser.version <= 8) {
                    var s = slide.attr('style');
                    if (s) {
                        s = s.replace(/background\-position[^;]+/, '');
                        slide.attr('style', s);
                    }
                } else {
                    slide.css('background-position', '');
                }
                slide.css('background-size', '');

                var bgImage = slide.css('background-image') ? slide.css('background-image').split(',') : [];
                var bgPosition = slide.css('background-position') && (slide.css('background-position').replace(/[0][^\d]+/gi, '')).length > 0 ?
                    slide.css('background-position').split(',') :
                    [];
                if (bgImage.length !== bgPosition.length) {
                    slide.css('display', '');
                    return;
                }

                height = slide.height();
                if (height === 0) height = slide.parent().height();

                $.each(bgImage, function (idx, val) {
                    var findImageIdx = val.lastIndexOf('images/');
                    var findDotIdx = val.lastIndexOf('.');
                    if (findImageIdx === -1 || findDotIdx === -1) return;

                    var name = val.substring(findImageIdx + 7, findDotIdx);

                    var data = resizeData[name];
                    if (typeof data === 'undefined') return;

                    var respData = data.responsive[responsiveType];
                    // big default coordinates for hiding
                    var x = 9999, y = 9999;
                    if (respData.visible) {
                        x = uniToPx(respData.left, data.width, sheetWidth);
                        x += off + data.area.x;

                        y = uniToPx(respData.top, data.height, height);
                        y += data.area.y;
                    }

                    bgPosition[idx] = x + 'px ' + y + 'px';
                });

                slide.css('background-position', bgPosition.join(','));

                if (!slideVisible && browser.ie) {
                    slide.css('display', '');
                }
            });

        };
    })(jQuery),

    initialize: function ($) {
        if (!browser.ie || browser.version > 8) {
            $(window).on('resize', this.resize);
        } else {
            var resizeTimeout;
            var self = this;
            $(window).on("resize", function () {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function () { self.resize(); }, 25);
            });
        }
    }
};

headerObjectResizer.initialize(jQuery);
jQuery(function ($) {
    "use strict";
    if (!browser.ie || browser.version > 8)
        return;
    processElementMultiplyBg(".header", {
        "bgimage": "url('images/header.jpg')",
        "bgposition": "0 0",
        "images": "",
        "positions": ""
    });
});
if (typeof window.resizeData === 'undefined') window.resizeData = {};

window.resizeData.pageSliderPageWidth = false;

/* Created by Artisteer v4.3.0.60745 */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:false, browser:true, jquery:false */
/*global jQuery */

var responsiveDesign = {
    isResponsive: false,
    isDesktop: false,
    isTablet: false,
    isPhone: false,
    lockedResponsiveMode: '', // free mode from start

    responsiveType: 'desktop',
    responsiveTypeIdx: 1,
    lockedResponsiveType: '',

    isCurrentDefaultResponsive: false,

    defaultResponsive: [ false, true, true, true, true ], // turn on/off old or new responsive modes

    windowWidth: 0,

    responsive: (function ($) {
        "use strict";
        return function () {
            var html = $("html");
            this.windowWidth = $(window).width();
            var triggerEvent = false;

            var isRespVisible = $("#resp").is(":visible");
            if (this.lockedResponsiveMode === 'desktop') isRespVisible = false;

            if (isRespVisible && !this.isResponsive) {
                html.addClass("responsive").removeClass("desktop");
                this.isResponsive = true;
                this.isDesktop = false;
                triggerEvent = true;
            } else if (!isRespVisible && !this.isDesktop) {
                html.addClass("desktop").removeClass("responsive default-responsive responsive-tablet responsive-phone");
                this.isResponsive = this.isTablet = this.isPhone = false;
                this.isDesktop = true;
                triggerEvent = true;
            }

            if (this.isResponsive) {
                // additional check to lock responsive mode
                var isTablet = this.lockedResponsiveMode === 'tablet' || ($("#resp-t").is(":visible") && this.lockedResponsiveMode === '');
                var isPhone = this.lockedResponsiveMode === 'phone' || ($("#resp-m").is(":visible") && this.lockedResponsiveMode === '');
                if (isTablet && !this.isTablet) {
                    html.addClass("responsive-tablet").removeClass("responsive-phone");
                    this.isTablet = true;
                    this.isPhone = false;
                    triggerEvent = true;
                } else if (isPhone && !this.isPhone) {
                    html.addClass("responsive-phone").removeClass("responsive-tablet");
                    this.isTablet = false;
                    this.isPhone = true;
                    triggerEvent = true;
                }
            }

            var prevResponsiveIndx = this.responsiveTypeIdx;
            if (this.lockedResponsiveType === 'tabletlandscape' || ($("#resp-tablet-landscape").is(":visible") && this.lockedResponsiveType === '')) {
                this.responsiveType = 'tabletlandscape';
                this.responsiveTypeIdx = 1;
            } else if (this.lockedResponsiveType === 'tabletportrait' || ($("#resp-tablet-portrait").is(":visible") && this.lockedResponsiveType === '')) {
                this.responsiveType = 'tabletportrait';
                this.responsiveTypeIdx = 2;
            } else if (this.lockedResponsiveType === 'phonelandscape' || ($("#resp-phone-landscape").is(":visible") && this.lockedResponsiveType === '')) {
                this.responsiveType = 'phonelandscape';
                this.responsiveTypeIdx = 3;
            } else if (this.lockedResponsiveType === 'phoneportrait' || ($("#resp-phone-portrait").is(":visible") && this.lockedResponsiveType === '')) {
                this.responsiveType = 'phoneportrait';
                this.responsiveTypeIdx = 4;
            } else { //if (this.lockedResponsiveType === 'desktop' || ($("#resp-desktop").is(":visible") && this.lockedResponsiveType === '')) {
                this.responsiveType = 'desktop';
                this.responsiveTypeIdx = 0;
            }

            if (triggerEvent || prevResponsiveIndx !== this.responsiveTypeIdx) {
                triggerEvent = true;
                
                if (this.isResponsive && this.defaultResponsive[ this.responsiveTypeIdx ]) {
                    this.isCurrentDefaultResponsive = true;
                    html.removeClass('custom-responsive').addClass('default-responsive');
                } else {
                    this.isCurrentDefaultResponsive = false;
                    html.removeClass('default-responsive').addClass('custom-responsive');
                }
            }

            if (triggerEvent) {
                $(window).trigger("responsive", this);
            }

            $(window).trigger("responsiveResize", this);
        };
    })(jQuery),
    initialize: (function ($) {
        "use strict";
        return function () {
            // get correct defaultResponsive
            if (typeof defaultResponsiveData !== 'undefined') responsiveDesign.defaultResponsive = defaultResponsiveData;

            $("<div id=\"resp\"><div id=\"resp-m\"></div><div id=\"resp-t\"></div></div>").appendTo("body");
            $('<div id="resp-tablet-landscape" /><div id="resp-tablet-portrait" /><div id="resp-phone-landscape" /><div id="resp-phone-portrait" />').appendTo('body');


            /* (1) Use this code for debug instead of (2):
             * var resizeTimeout;
             * $(window).resize(function () {
             * clearTimeout(resizeTimeout);
             * resizeTimeout = setTimeout(function () { responsiveDesign.responsive(); }, 50);
             * });
             */

            /* (2) Use this code for production and comment (1): */
            $(window).resize(function () {
                responsiveDesign.responsive();
            });

            $(window).trigger("resize");
        };
    })(jQuery),
    // lock responsive in some mode: desktop, tablet or phone for editor
    lockResponsiveType: function (mode) {
        responsiveDesign.lockedResponsiveType = mode;

        if (mode.indexOf('tablet') === 0) mode = 'tablet';
        if (mode.indexOf('phone') === 0) mode = 'phone';

        responsiveDesign.lockedResponsiveMode = mode;
    },
    // using in editor to turn off default responsive
    toogleDefaultResponsive: function (type, val) {
        var old = responsiveDesign.defaultResponsive[ type ];
        responsiveDesign.defaultResponsive[ type ] = val;
        if (old !== val) responsiveDesign.responsiveTypeIdx = -1;
    }
};

function responsiveAbsBg(responsiveDesign, el, bg) {
    "use strict";
    if (bg.length === 0)
        return;

    var desktopBgTop = bg.attr("data-bg-top");
    var desktopBgHeight = bg.attr("data-bg-height");

    if (responsiveDesign.isResponsive) {
        if (typeof desktopBgTop === "undefined" || desktopBgTop === false) {
            bg.attr("data-bg-top", bg.css("top"));
            bg.attr("data-bg-height", bg.css("height"));
        }

        var elTop = el.offset().top;
        var elHeight = el.outerHeight();
        bg.css("top", elTop + "px");
        bg.css("height", elHeight + "px");
    } else if (typeof desktopBgTop !== "undefined" && desktopBgTop !== false) {
        bg.css("top", desktopBgTop);
        bg.css("height", desktopBgHeight);
        bg.removeAttr("data-bg-top");
        bg.removeAttr("data-bg-height");
    }
}

var responsiveImages = (function ($) {
    "use strict";
    return function (responsiveDesign) {
        $("img[width]").each(function () {
            var img = $(this), newWidth = "", newMaxWidth = "", newHeight = "";
            if (responsiveDesign.isResponsive) {
                newWidth = "auto";
                newHeight = "auto";
                newMaxWidth = "100%";

                var widthAttr = img.attr("width");
                if (widthAttr !== null && typeof (widthAttr) === "string" && widthAttr.indexOf("%") === -1) {
                    newWidth = "100%";
                    newMaxWidth = parseInt($.trim(widthAttr), 10) + "px";
                }
            }
            img.css("width", newWidth).css("max-width", newMaxWidth).css("height", newHeight);
        });
    };
})(jQuery); 

var responsiveVideos = (function ($) {
    "use strict";
    return function (responsiveDesign) {
        $("iframe[width],object[width],embed[width]").each(function () {
            var obj = $(this);
            if ((obj.is('[width]') && obj.attr("width").indexOf("%") !== -1) ||
                (obj.is('[class]') && obj.attr("class").indexOf("twitter") !== -1) ||
                (obj.id && obj.id.indexOf("google") !== -1))
                return;
            var container = obj.parent(".responsive-embed");
            if (responsiveDesign.isResponsive) {
                if (container.length !== 0)
                    return;
                container = $("<div class=\"responsive-embed\">").insertBefore(obj);
                obj.appendTo(container);
            } else if (container.length > 0) {
                obj.insertBefore(container);
                container.remove();
            }
        });
    };
})(jQuery);

// this must be called for collages only!
var responsiveTextblocks = (function ($) {
    "use strict";
    return function (slider, responsiveDesign) {
        slider.find(".textblock").each(function () {
            if (parseInt(slider.attr("data-width"), 10) === 0) {
                return true;
            }
            var tb = $(this);
            var c = slider.width() / slider.attr("data-width");
            tb.css({
                "height": "",
                "width": "",
                "top": "",
                "margin-left": ""
            });
            if (responsiveDesign.isResponsive) {
                var tbHeight = parseInt(tb.css("height"), 10);
                var tbWidth = parseInt(tb.css("width"), 10);
                var tbTop = parseInt(tb.css("top"), 10);
                var tbMargin = parseInt(tb.css("margin-left"), 10);
                tb.add(tb.find('div')).css({
                    "height": tbHeight * c,
                    "width": tbWidth * c
                });
                tb.css("top", tbTop * c);
                tb.attr("style", function (i, s) { return s + "margin-left: " + (tbMargin * c) + "px !important"; });
            }
        });
    };
})(jQuery);

var responsiveSlider = (function ($) {
    "use strict";
    return function (responsiveDesign) {
        $(".slider").each(function () {
            var s = $(this);

            var isHeaderSlider = s.parent('.header').length > 0 || s.parent('.pageslider').length > 0;
            if (!isHeaderSlider && responsiveDesign.isResponsive) {
                responsiveTextblocks(s, responsiveDesign);
                return;
            }

            var initialWidth = s.attr("data-width");
            var initialHeight = s.attr("data-height");

            // set size

            var obj = s.data("slider");
            if (!obj) {
                return false;
            }

            var inner = s.find(".slider-inner");

            if (!responsiveDesign.isResponsive && obj.settings.helper) {
                obj.settings.helper.updateSize(inner, { width: initialWidth, height: initialHeight });
                return;
            }

            // set slider
            if (obj && obj.settings.helper) {
                $(window).on("responsiveResize", function updateSize() {
                    if (obj.settings.animation === "fade") return;
                    if (responsiveDesign.isCurrentDefaultResponsive) {
                        obj.settings.helper.updateSize(inner, { width: initialWidth, height: initialHeight });
                        $.each(inner.children(), function () {
                            $(this).css(
                                "background-position",
                                -Math.floor(initialWidth / 2 - parseInt(inner.outerWidth(), 10) / 2) + "px" +
                                -Math.floor(initialHeight / 2 - parseInt(inner.outerHeight(), 10) / 2) + "px "
                            );
                        });
                    } else {
                        $(window).off("responsiveResize", updateSize);
                    }
                });
            }
        });
    };
})(jQuery);

var responsiveCollages = (function ($) {
    "use strict";
    return function (responsiveDesign) {
        $(".collage").each(function() {
            var collage = $(this);
            var slider = collage.find(".slider");

            var initialWidth = slider.attr("data-width");
            var initialHeight = slider.attr("data-height");

            var parent = collage.closest(':not(.image-caption-wrapper, .collage)');
            var parentIcw = collage.closest('.image-caption-wrapper');
            var parentWidth = parent.width();
            var collageWidth = collage.width();

            // for responsive try to make collage smaller
            // a) no icw - check collage width and parent
            // b) with icw - collage is bigger than icw
            var doms = collage
                .add(slider)
                .add(collage.closest(".image-caption-wrapper"));

            // so try to make collage smaller
            if (responsiveDesign.isResponsive && collageWidth > parentWidth || (parentIcw.length > 0 && collageWidth > parentIcw.width())) {
                doms.css("width", "100%");
            }

            // but if icw make collage too bit reset it width to noraml
            collageWidth = collage.width();
            if (collageWidth > initialWidth) {
                doms.css("width", "");
            }

            var c = slider.width() / initialWidth;
            var h = c * initialHeight;
            slider.css("height", h + "px");
        });
    };
})(jQuery);


jQuery(window).bind("responsive", (function ($) {
    "use strict";
    return function (event, responsiveDesign) {
        // so this event is main and it generate sub events to make important changes before we will modify slider
        // for example we move out of slider menu button, and it change slider size
        $(window).trigger('responsivePage', responsiveDesign);
        responsiveImages(responsiveDesign);
        responsiveVideos(responsiveDesign);

        responsiveSlider(responsiveDesign);
        responsiveNavigator(responsiveDesign);
    };
})(jQuery));

jQuery(window).bind("responsiveResize", (function ($) {
    "use strict";
    return function (event, responsiveDesign) {
        responsiveCollages(responsiveDesign);
        responsiveNavigator(responsiveDesign);
    };
})(jQuery));

jQuery(function ($) {
    if (!browser.ie || browser.version > 8) return;
    var timeout;
    $(window).on("resize", function () {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            responsiveCollages(responsiveDesign);
            responsiveNavigator(responsiveDesign);
        }, 25);
    });
    responsiveCollages(responsiveDesign);
    responsiveNavigator(responsiveDesign);
});

jQuery(window).bind("responsiveResize", (function ($) {
    "use strict";
    return function (event, responsiveDesign) {
        responsiveAbsBg(responsiveDesign, $("nav.nav"), $("#hmenu-bg"));
        $(window).trigger("responsiveNav", { responsiveDesign: responsiveDesign });
    };
})(jQuery));






jQuery(function($) {
    $('<a href=\"#\" class=\"menu-btn\"><span></span><span></span><span></span></a>').insertBefore(".hmenu").click(function(e) {
        var menu = $(this).next();
        if (menu.is(":visible")) {
            menu.slideUp("fast", function() {
                $(this).removeClass("visible").css("display", "");
            });
        } else {
            menu.slideDown("fast", function() {
                $(this).addClass("visible").css("display", "");
            });
        }
        e.preventDefault();
    });
});

jQuery(window).bind("responsiveNav", (function ($) {
    /*global menuExtendedCreate */
    "use strict";
    return function (event, options) {
        if (options.responsiveDesign.isDesktop && $("li.ext").length > 0) {
            menuExtendedCreate();
        }
    };
})(jQuery));

var responsiveHeader = (function ($) {
    "use strict";
    return function(responsiveDesign) {
        var header = $("header.header");
        var headerSlider = header.find(".slider");

        if (headerSlider.length) {
            var firstSlide = headerSlider.find(".slide-item").first();
            var slidebg = firstSlide.css("background-image").split(",");
            var previousSibling = headerSlider.prev();
            var sliderNav = headerSlider.siblings(".slidenavigator");
            if (slidebg.length && responsiveDesign.isResponsive) {
                // if prev is menu in header
                if (previousSibling.is("nav.nav")) {
                    sliderNav.attr("data-offset", previousSibling.height());
                }
            } else {
                sliderNav.removeAttr("data-offset");
                header.removeAttr("style");
            }
        }
    };
})(jQuery);

jQuery(window).bind("responsiveResize", (function ($) {
    "use strict";
    return function (event, responsiveDesign) {
        responsiveAbsBg(responsiveDesign, $(".header"), $("#header-bg"));
    };
})(jQuery));

jQuery(window).bind("responsive", (function ($) {
    "use strict";
    return function (event, responsiveDesign) {
        if (browser.ie && browser.version <= 8) return;

        if (responsiveDesign.isResponsive) {
            $(window).on("responsiveResize.header", function () {
                responsiveHeader(responsiveDesign);
            });
        } else {
            $(window).trigger("responsiveResize.header");
            $(window).off("responsiveResize.header");
        }
    };
})(jQuery));

var responsiveLayoutCell = (function ($) {
    "use strict";
    return function (responsiveDesign) {
        $(".content .content-layout-row,.footer .content-layout-row").each(function () {
            var row = $(this);
            var rowChildren = row.children(".layout-cell");
            if (rowChildren.length > 0) {
                var c;
                row.removeClass("responsive-layout-row-2").removeClass("responsive-layout-row-3").removeClass("responsive-layout-row-1");
                if (rowChildren.length === 1) {
                    c = 1;
                    row.addClass("responsive-layout-row-1");
                } else if (rowChildren.length % 2 === 0) {
                    var c = 2;
                    row.addClass("responsive-layout-row-2");
                } else {
                    var c = 3;
                    row.addClass("responsive-layout-row-3");
                }
                if (c > 0 && responsiveDesign.isTablet) {
                    rowChildren.addClass("responsive-tablet-layout-cell").each(function (i) {
                        if ((i + 1) % c === 0) {
                            $(this).after("<div class=\"cleared responsive-cleared\">");
                        }
                    });
                } else {
                    rowChildren.removeClass("responsive-tablet-layout-cell");
                    row.children(".responsive-cleared").remove();
                }
            }
        });
    };
})(jQuery);

jQuery(window).bind("responsive", function (event, responsiveDesign) {
    "use strict";

    responsiveLayoutCell(responsiveDesign);
});

/*global jQuery, responsiveDesign*/




//setTimeout(function () { $("html").addClass("desktop") }, 0);

if (!browser.ie || browser.version > 8) {
    jQuery(responsiveDesign.initialize);
} else {
    jQuery("html").addClass("desktop");
}

/*
                       _ _ _____                      _   _
                      | | |  __ \                    | | (_)
    ___  ___ _ __ ___ | | | |__) |_____   _____  __ _| |  _ ___
   / __|/ __| '__/ _ \| | |  _  // _ \ \ / / _ \/ _` | | | / __|
   \__ \ (__| | | (_) | | | | \ \  __/\ V /  __/ (_| | |_| \__ \
   |___/\___|_|  \___/|_|_|_|  \_\___| \_/ \___|\__,_|_(_) |___/
                                                        _/ |
                                                       |__/

    "Declarative on-scroll reveal animations."

/*=============================================================================

    scrollReveal.js is inspired by cbpScroller.js, © 2014, Codrops.

    Licensed under the MIT license.
    http://www.opensource.org/licenses/mit-license.php

    scrollReveal.js, © 2014 https://twitter.com/julianlloyd

=============================================================================*/

;(function (window) {

  'use strict';

  var docElem = window.document.documentElement;

  function getViewportH () {
    var client = docElem['clientHeight'],
      inner = window['innerHeight'];

    return (client < inner) ? inner : client;
  }

  function getOffset (el) {
    var offsetTop = 0,
        offsetLeft = 0;

    do {
      if (!isNaN(el.offsetTop)) {
        offsetTop += el.offsetTop;
      }
      if (!isNaN(el.offsetLeft)) {
        offsetLeft += el.offsetLeft;
      }
    } while (el = el.offsetParent)

    return {
      top: offsetTop,
      left: offsetLeft
    }
  }

  function isElementInViewport (el, h) {
    var scrolled = window.pageYOffset,
        viewed = scrolled + getViewportH(),
        elH = el.offsetHeight,
        elTop = getOffset(el).top,
        elBottom = elTop + elH,
        h = h || 0;

    return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
  }

  function extend (a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }


  function scrollReveal(options) {
      this.options = extend(this.defaults, options);
      this._init();
  }



  scrollReveal.prototype = {
    defaults: {
      axis: 'y',
      distance: '60px',
      duration: '0.55s',
      delay: '0.15s',

  //  if 0, the element is considered in the viewport as soon as it enters
  //  if 1, the element is considered in the viewport when it's fully visible
      viewportFactor: 0.33
    },

    /*=============================================================================*/

    _init: function () {

      var self = this;

      this.elems = Array.prototype.slice.call(docElem.querySelectorAll('[data-scrollReveal]'));
      this.scrolled = false;

  //  Initialize all scrollreveals, triggering all
  //  reveals on visible elements.
      this.elems.forEach(function (el, i) {
        self.animate(el);
      });

      var scrollHandler = function () {
        if (!self.scrolled) {
          self.scrolled = true;
          setTimeout(function () {
            self._scrollPage();
          }, 60);
        }
      };

      var resizeHandler = function () {
        function delayed() {
          self._scrollPage();
          self.resizeTimeout = null;
        }
        if (self.resizeTimeout) {
          clearTimeout(self.resizeTimeout);
        }
        self.resizeTimeout = setTimeout(delayed, 200);
      };

      window.addEventListener('scroll', scrollHandler, false);
      window.addEventListener('resize', resizeHandler, false);
    },

    /*=============================================================================*/

    _scrollPage: function () {
        var self = this;

        this.elems.forEach(function (el, i) {
            if (isElementInViewport(el, self.options.viewportFactor)) {
                self.animate(el);
            }
        });
        this.scrolled = false;
    },

    /*=============================================================================*/

    parseLanguage: function (el) {

  //  Splits on a sequence of one or more commas or spaces.
      var words = el.getAttribute('data-scrollreveal').split(/[, ]+/),
          enterFrom,
          parsed = {};

      function filter (words) {
        var ret = [],

            blacklist = [
              "from",
              "the",
              "and",
              "then",
              "but"
            ];

        words.forEach(function (word, i) {
          if (blacklist.indexOf(word) > -1) {
            return;
          }
          ret.push(word);
        });

        return ret;
      }

      words = filter(words);

      words.forEach(function (word, i) {

        switch (word) {
          case "enter":
            enterFrom = words[i + 1];

            if (enterFrom == "top" || enterFrom == "bottom") {
              parsed.axis = "y";
            }

            if (enterFrom == "left" || enterFrom == "right") {
              parsed.axis = "x";
            }

            return;

          case "after":
            parsed.delay = words[i + 1];
            return;

          case "wait":
            parsed.delay = words[i + 1];
            return;

          case "move":
            parsed.distance = words[i + 1];
            return;

          case "over":
            parsed.duration = words[i + 1];
            return;

          case "trigger":
            parsed.eventName = words[i + 1];
            return;

          default:
        //  Unrecognizable words; do nothing.
            return;
        }
      });

  //  After all values are parsed, let’s make sure our our
  //  pixel distance is negative for top and left entrances.
  //
  //  ie. "move 25px from top" starts at 'top: -25px' in CSS.

      if (enterFrom == "top" || enterFrom == "left") {

        if (!typeof parsed.distance == "undefined") {
          parsed.distance = "-" + parsed.distance;
        }

        else {
          parsed.distance = "-" + this.options.distance;
        }

      }

      return parsed;
    },

    /*=============================================================================*/

    genCSS: function (el) {
      var parsed = this.parseLanguage(el);

      var dist   = parsed.distance || this.options.distance,
          dur    = parsed.duration || this.options.duration,
          delay  = parsed.delay    || this.options.delay,
          axis   = parsed.axis     || this.options.axis;

      var transition = "-webkit-transition: all " + dur + " ease " + delay + ";" +
                          "-moz-transition: all " + dur + " ease " + delay + ";" +
                            "-o-transition: all " + dur + " ease " + delay + ";" +
                           "-ms-transition: all " + dur + " ease " + delay + ";" +
                               "transition: all " + dur + " ease " + delay + ";";

      var initial = "-webkit-transform: translate" + axis + "(" + dist + ");" +
                       "-moz-transform: translate" + axis + "(" + dist + ");" +
                        "-ms-transform: translate" + axis + "(" + dist + ");" +
                            "transform: translate" + axis + "(" + dist + ");" +
                              "opacity: 0;";

      var target = "-webkit-transform: translate" + axis + "(0);" +
                      "-moz-transform: translate" + axis + "(0);" +
                       "-ms-transform: translate" + axis + "(0);" +
                           "transform: translate" + axis + "(0);" +
                             "opacity: 1;";
      return {
        transition: transition,
        initial: initial,
        target: target,
        totalDuration: ((parseFloat(dur) + parseFloat(delay)) * 1000)
      };
    },

    /*=============================================================================*/

    animate: function (el) {
      var css = this.genCSS(el);

      if (!el.getAttribute('data-sr-init')) {
        el.setAttribute('style', css.initial);
        el.setAttribute('data-sr-init', true);
      }

      if (el.getAttribute('data-sr-complete')) {
        return;
      }

      if (isElementInViewport(el, this.options.viewportFactor)) {
        el.setAttribute('style', css.target + css.transition);

        setTimeout(function () {
          el.removeAttribute('style');
          el.setAttribute('data-sr-complete', true);
        }, css.totalDuration);
      }

    }
  }; // end scrollReveal.prototype

  document.addEventListener("DOMContentLoaded", function (evt) {
    window.scrollReveal = new scrollReveal();
  });

})(window);
// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

function ssc_init() {
    if (!document.body) return;
    var e = document.body;
    var t = document.documentElement;
    var n = window.innerHeight;
    var r = e.scrollHeight;
    ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
    ssc_activeElement = e;
    ssc_initdone = true;
    if (top != self) {
        ssc_frame = true
    } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
        ssc_root.style.height = "auto";
        if (ssc_root.offsetHeight <= n) {
            var i = document.createElement("div");
            i.style.clear = "both";
            e.appendChild(i)
        }
    }
    if (!ssc_fixedback) {
        e.style.backgroundAttachment = "scroll";
        t.style.backgroundAttachment = "scroll"
    }
    if (ssc_keyboardsupport) {
        ssc_addEvent("keydown", ssc_keydown)
    }
}

function ssc_scrollArray(e, t, n, r) {
    r || (r = 1e3);
    ssc_directionCheck(t, n);
    ssc_que.push({
        x: t,
        y: n,
        lastX: t < 0 ? .99 : -.99,
        lastY: n < 0 ? .99 : -.99,
        start: +(new Date)
    });
    if (ssc_pending) {
        return
    }
    var i = function () {
        var s = +(new Date);
        var o = 0;
        var u = 0;
        for (var a = 0; a < ssc_que.length; a++) {
            var f = ssc_que[a];
            var l = s - f.start;
            var c = l >= ssc_animtime;
            var h = c ? 1 : l / ssc_animtime;
            if (ssc_pulseAlgorithm) {
                h = ssc_pulse(h)
            }
            var p = f.x * h - f.lastX >> 0;
            var d = f.y * h - f.lastY >> 0;
            o += p;
            u += d;
            f.lastX += p;
            f.lastY += d;
            if (c) {
                ssc_que.splice(a, 1);
                a--
            }
        }
        if (t) {
            var v = e.scrollLeft;
            e.scrollLeft += o;
            if (o && e.scrollLeft === v) {
                t = 0
            }
        }
        if (n) {
            var m = e.scrollTop;
            e.scrollTop += u;
            if (u && e.scrollTop === m) {
                n = 0
            }
        }
        if (!t && !n) {
            ssc_que = []
        }
        if (ssc_que.length) {
            setTimeout(i, r / ssc_framerate + 1)
        } else {
            ssc_pending = false
        }
    };
    setTimeout(i, 0);
    ssc_pending = true
}

function ssc_wheel(e) {
    if (!ssc_initdone) {
        ssc_init()
    }
    var t = e.target;
    var n = ssc_overflowingAncestor(t);
    if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
        return true
    }
    var r = e.wheelDeltaX || 0;
    var i = e.wheelDeltaY || 0;
    if (!r && !i) {
        i = e.wheelDelta || 0
    }
    if (Math.abs(r) > 1.2) {
        r *= ssc_stepsize / 120
    }
    if (Math.abs(i) > 1.2) {
        i *= ssc_stepsize / 120
    }
    ssc_scrollArray(n, -r, -i);
    e.preventDefault()
}

function ssc_keydown(e) {
    var t = e.target;
    var n = e.ctrlKey || e.altKey || e.metaKey;
    if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
        return true
    }
    if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
        return true
    }
    var r, i = 0,
        s = 0;
    var o = ssc_overflowingAncestor(ssc_activeElement);
    var u = o.clientHeight;
    if (o == document.body) {
        u = window.innerHeight
    }
    switch (e.keyCode) {
    case ssc_key.up:
        s = -ssc_arrowscroll;
        break;
    case ssc_key.down:
        s = ssc_arrowscroll;
        break;
    case ssc_key.spacebar:
        r = e.shiftKey ? 1 : -1;
        s = -r * u * .9;
        break;
    case ssc_key.pageup:
        s = -u * .9;
        break;
    case ssc_key.pagedown:
        s = u * .9;
        break;
    case ssc_key.home:
        s = -o.scrollTop;
        break;
    case ssc_key.end:
        var a = o.scrollHeight - o.scrollTop - u;
        s = a > 0 ? a + 10 : 0;
        break;
    case ssc_key.left:
        i = -ssc_arrowscroll;
        break;
    case ssc_key.right:
        i = ssc_arrowscroll;
        break;
    default:
        return true
    }
    ssc_scrollArray(o, i, s);
    e.preventDefault()
}

function ssc_mousedown(e) {
    ssc_activeElement = e.target
}

function ssc_setCache(e, t) {
    for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
    return t
}

function ssc_overflowingAncestor(e) {
    var t = [];
    var n = ssc_root.scrollHeight;
    do {
        var r = ssc_cache[ssc_uniqueID(e)];
        if (r) {
            return ssc_setCache(t, r)
        }
        t.push(e);
        if (n === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                return ssc_setCache(t, document.body)
            }
        } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow");
            if (overflow === "scroll" || overflow === "auto") {
                return ssc_setCache(t, e)
            }
        }
    } while (e = e.parentNode)
}

function ssc_addEvent(e, t, n) {
    window.addEventListener(e, t, n || false)
}

function ssc_removeEvent(e, t, n) {
    window.removeEventListener(e, t, n || false)
}

function ssc_isNodeName(e, t) {
    return e.nodeName.toLowerCase() === t.toLowerCase()
}

function ssc_directionCheck(e, t) {
    e = e > 0 ? 1 : -1;
    t = t > 0 ? 1 : -1;
    if (ssc_direction.x !== e || ssc_direction.y !== t) {
        ssc_direction.x = e;
        ssc_direction.y = t;
        ssc_que = []
    }
}

function ssc_pulse_(e) {
    var t, n, r;
    e = e * ssc_pulseScale;
    if (e < 1) {
        t = e - (1 - Math.exp(-e))
    } else {
        n = Math.exp(-1);
        e -= 1;
        r = 1 - Math.exp(-e);
        t = n + r * (1 - n)
    }
    return t * ssc_pulseNormalize
}

function ssc_pulse(e) {
    if (e >= 1) return 1;
    if (e <= 0) return 0;
    if (ssc_pulseNormalize == 1) {
        ssc_pulseNormalize /= ssc_pulse_(1)
    }
    return ssc_pulse_(e)
}

var ssc_framerate = 150;
var ssc_animtime = 500;
var ssc_stepsize = 150;
var ssc_pulseAlgorithm = true;
var ssc_pulseScale = 6;
var ssc_pulseNormalize = 1;
var ssc_keyboardsupport = true;
var ssc_arrowscroll = 50;
var ssc_frame = false;
var ssc_direction = {
    x: 0,
    y: 0
};

var ssc_initdone = false;
var ssc_fixedback = true;
var ssc_root = document.documentElement;
var ssc_activeElement;
var ssc_key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
};

var ssc_que = [];
var ssc_pending = false;
var ssc_cache = {};

setInterval(function () {
    ssc_cache = {}
}, 10 * 1e3);

var ssc_uniqueID = function () {
    var e = 0;
    return function (t) {
        return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
    }
}();

var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());

if (ischrome) {
    ssc_addEvent("mousedown", ssc_mousedown);
    ssc_addEvent("mousewheel", ssc_wheel);
    ssc_addEvent("load", ssc_init)
}
/*! WOW - v0.1.4 - 2014-02-12
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=[].slice,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){var c,d,e,f,g,h,i,j,k;for(e=arguments[0],c=2<=arguments.length?b.call(arguments,1):[],g=e||{},i=0,j=c.length;j>i;i++){f=c[i],k=f||{};for(d in k)h=k[d],"object"==typeof g[d]?g[d]=a(g[d],h):g[d]||(g[d]=h)}return g},this.WOW=function(){function b(b){null==b&&(b={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.config=a(b,this.defaults),this.scrolled=!0}return b.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0},b.prototype.init=function(){var a;return"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},b.prototype.start=function(){var a,b,c,d;if(this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},b.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},b.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},b.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},b.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},b.prototype.scrollHandler=function(){return this.scrolled=!0},b.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},b.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},b.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},b}()}).call(this);
/* ================================
===  BACKGROUND SLIDER        ====
================================= */
$.vegas('slideshow', {
  delay:7000,
  backgrounds:[
    { src:'images/backgrounds/bg1.jpg', fade:1000 },
    { src:'images/backgrounds/bg2.jpg', fade:1000 },
    { src:'images/backgrounds/bg3.jpg', fade:1000 }
  ]
});
      
   
/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})


/* =================================
===  Bootstrap Fix              ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-nav-list').onePageNav({
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)'
  });
  
  // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/         
  var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));
  
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#main-nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#main-nav').removeClass('fixed');
    }
  });
  
});

/*---------------------------------------*/
    /*  SMOOTH SCROLL FRO INTERNAL #HASH LINKS
/*---------------------------------------*/
$(document).ready(function(){
    $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        $('.main-navigation a[href="' + target + '"]').addClass('active');
        $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

/*=================================
===  OWL CROUSEL               ====
===================================*/
   $(document).ready(function() {
  var owl = $("#client-feedbacks");
  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
});


/*=================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });   


/* =================================
===  CONTACT FORM          ====
=================================== */

$("#contact-form").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});


/* ================================
===  PROJECT LOADING           ====
================================= */

jQuery(document).ready(function($) {
    $('.more').on('click', function(event) {
        event.preventDefault();

        var href = $(this).attr('href') + ' .single-project',
            portfolioList = $('#portfolio-list'),
            content = $('#loaded-content');

        portfolioList.animate({'marginLeft':'-120%'},{duration:400,queue:false});
        portfolioList.fadeOut(400);
        setTimeout(function(){ $('#loader').show(); },400);
        setTimeout(function(){
            content.load(href, function() {
                $('#loaded-content meta').remove();
                $('#loader').hide();
                content.fadeIn(600);
                $('#back-button').fadeIn(600);
            });
        },800);

    });

    $('#back-button').on('click', function(event) {
        event.preventDefault();

        var portfolioList = $('#portfolio-list')
            content = $('#loaded-content');

        content.fadeOut(400);
        $('#back-button').fadeOut(400);
        setTimeout(function(){
            portfolioList.animate({'marginLeft':'0'},{duration:400,queue:false});
            portfolioList.fadeIn(600);
        },800);
    });
});

/* ================================
===  PARALLAX                  ====
================================= */
$(document).ready(function(){
  var $window = $(window);
  $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ 
        backgroundPosition: coords 
      });
    });
  });
});

/* ================================
===  KNOB                      ====
================================= */
$(function() {
$(".skill1").knob({
                'max':100,
                'width': 64,
                'readOnly':true,
                'inputColor':' #FFFFFF ',
                'bgColor':' #222222 ',
                'fgColor':' #e96656 '
                });
$(".skill2").knob({
                'max':100,
                'width': 64,
                'readOnly':true,
                'inputColor':' #FFFFFF ',
                'bgColor':' #222222 ',
                'fgColor':' #34d293 '
                });
  $(".skill3").knob({
                'max': 100,
                'width': 64,
                'readOnly': true,
                'inputColor':' #FFFFFF ',
                'bgColor':' #222222 ',
                'fgColor':' #3ab0e2 '
                });
  $(".skill4").knob({
                'max': 100,
                'width': 64,
                'readOnly': true,
                'inputColor':' #FFFFFF ',
                'bgColor':' #222222 ',
                'fgColor':' #E7AC44 '
                });
});



/* =================================
===  WOW ANIMATION             ====
=================================== */

new WOW().init();




/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : about.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('aboutController', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('aboutController') activated");
        }    
    
        $rootScope.clearmenuclass = false;
        $scope.items = ['about', 'website', 'contact'];

    }
]);

if(debug){
    console.log("appControllers('aboutController') defined");
}

/*****************************************************************************
 ** END OF FILE - about.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : calendar.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('calendarController', ['$scope', function ($scope) {
    if(debug){
        console.log("appControllers('calendarController') activated");
    }    
    
    $scope.uiConfig = {
        calendar: {
            height      : 450,
            editable    : true,
            header      : {
                left    : 'month basicWeek basicDay agendaWeek agendaDay',
                center  : 'title',
                right   : 'today prev,next'
            },
            dayClick    : $scope.alertEventOnClick,
            eventDrop   : $scope.alertOnDrop,
            eventResize : $scope.alertOnResize
        }
    };
    
}]);

if(debug){
    console.log("appControllers('calendarController') defined");
}

/*****************************************************************************
 ** END OF FILE - calendar.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : citations.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('citationsController', [
            '$scope', '$rootScope', '$http', '$interval', '$animate', 'uiGridConstants',
    function($scope,   $rootScope,   $http,   $interval,   $animate,   uiGridConstants  ){

        debug=true;
        
        if(debug){
            console.log("appControllers('citationsController') activated");
        }    

        $rootScope.clearmenuclass = false;

        //////////////////////////////////////////////////////////////////////
        // citations collection
        //////////////////////////////////////////////////////////////////////
        
        var path = $rootScope.endPoint + '/json/citations.json';
        console.log(path);
        
        $http.get(path)
        .success(function(response) {
            $scope.citations = response;
            console.log($scope.citations);
        })
        .error(function(err) {
            console.debug('$http get error: ' + err);
            alert(err);
        });
        
        while( $scope.citations == undefined ){
            setTimeout(function(){
                console.log(Date());
            }, 1000);
        }
        
        
        //////////////////////////////////////////////////////////////////////
        // ui-bootstrap.grid configuration
        //////////////////////////////////////////////////////////////////////
        $scope.gridOptions = {
            columnDefs: [
                {
                    field: 'id',
                    name: 'id',
                    diplayName: 'ID',
                    cellAlign: 'right',
                    enableCellEdit: false 
                },
                {
                    field: 'name',
                    name: 'name',
                    diplayName: 'Photo Name',
                    cellAlign: 'left',
                    footerCellTemplate: '<div class="ui-grid-footer">Upper Limits:</div>'
                },
                {
                    field: 'href',
                    width: 0
                },                
                {
                    field: 'thumbnail',
                    width: 0
                },                
                {
                    field: 'hoffset',
                    width: 0
                },
                {
                    field: 'voffset',
                    width: 0
                },
                {
                    field: 'dateTaken', 
                    name: 'dateTaken', 
                    displayName: 'Date Taken', 
                    cellAlign: 'center',
                    width: 100,
                    enableColumnResizing: false,
                    cellFilter: 'date',
                    footerCellFilter: 'date',
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN,
                            placeholder: '>'
                        },
                        {
                            condition: uiGridConstants.filter.LESS_THAN,
                            placeholder: '<'
                        }
                    ],
                    aggregationType: uiGridConstants.aggregationTypes.max, 
                    aggregationHideLabel: false
                },
                {
                    field: 'size', 
                    name: 'size', 
                    displayName: 'File Size', 
                    cellAlign: 'right',
                    width: 100,
                    enableColumnResizing: false,
                    aggregationType: uiGridConstants.aggregationTypes.max, 
                    aggregationHideLabel: false
                },
                {
                    field: 'tags',
                    name: 'tags',
                    displayName: 'Descriptive Tags',
                    cellAlign: 'left',
                },
                {
                    field: 'hilight', 
                    name: 'hilight', 
                    displayName: 'H', 
                    cellAlign: 'center',
                    width: 100,
                    enableColumnResizing: false,
                    type: 'boolean',
                    filter: {
                        term: '1',
                        type: uiGridConstants.filter.SELECT,
                        selectOptions: [
                            { value: '0', label: 'Grid Only' }, 
                            { value: '1', label: 'Carousel' } ]
                    }
                }
            ],
            onRegisterApi: function( gridApi ) {
                $scope.grid1Api = gridApi;
            }
        };
        $scope.gridOptions.rowIdentity = function(row) {
            return row.id;
        };
        
        $scope.gridOptions.getRowIdentity = function(row) {
            return row.id;
        };

        // End of Grid options
        
        

        //////////////////////////////////////////////////////////////////////
        // Extract the unique tags
        //////////////////////////////////////////////////////////////////////
        var allIds = multObjArray2Array( _.uniq(_.pluck($scope.citations, 'id')) );

        if(debug){
            console.debug('allIds:');
            console.debug(allIds);
        }

        $scope.Ids = (_.uniq(allIds)).sort();
        if(debug){
            console.debug('$scope.Ids:');
            console.debug($scope.Ids);
        }

        if(debug){
            console.debug('   $scope.citations.length=(' + $scope.citations.length + ')');
            console.debug('         allIds.length=(' + allIds.length + ')');
            console.debug('$scope.Ids.length=(' + $scope.Ids.length + ')');
        }
        
        $scope.shortDate = function(fullDate) {
            // return MM-DD-YYYY from  YYYY-MM-DDTHH:MM:SS:sssZ format
            fullDate = fullDate +     "________________________";
            return (fullDate.substr(5,2)+ '-' + fullDate.substr(8,2) + '-' + fullDate.substr(0,4)).toString();
        }  
        
        $scope.checked = function(boolValue){
            if(boolValue) {
                return 'x';
            } else {
                return 'o';
            }    
        }
        
        $scope.sort = {
            column: '',
            descending: false
        };
        
        $scope.changeSorting = function(column) {

            var sort = $scope.sort;

            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };
    }
]);

if(debug){
    console.log("appControllers('citationsController') defined");
}

/*****************************************************************************
 ** END OF FILE - citations.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : home.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('homeController', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('homeController') activated");
        }    
        
        $rootScope.clearmenuclass = true;

        // Temporary values 
        // TODO: replace these with real login values;
        $scope.loggedIn = true;
        $scope.userName = "bill@maintz.com"
    }
]);

if(debug){
    console.log("appControllers('homeController') defined");
}

/*****************************************************************************
 ** END OF FILE - home.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : home.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('test1Controller', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('test1Controller') activated");
        }    
        
        $rootScope.clearmenuclass = true;

        // Temporary values 
        // TODO: replace these with real login values;
        $scope.loggedIn = true;
        $scope.userName = "citizen@cane.com"
    }
]);

if(debug){
    console.log("appControllers('test1Controller') defined");
}

/*****************************************************************************
 ** END OF FILE - test1.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : home.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('test1Controller', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('test1Controller') activated");
        }    
        
        $rootScope.clearmenuclass = true;

        // Temporary values 
        // TODO: replace these with real login values;
        $scope.loggedIn = true;
        $scope.userName = "citizen@cane.com"
    }
]);

if(debug){
    console.log("appControllers('test1Controller') defined");
}

/*****************************************************************************
 ** END OF FILE - test1.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : home.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('test3Controller', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('test3Controller') activated");
        }    
        
        $rootScope.clearmenuclass = true;

        // Temporary values 
        // TODO: replace these with real login values;
        $scope.loggedIn = true;
        $scope.userName = "citizen@cane.com"
    }
]);

if(debug){
    console.log("appControllers('test3Controller') defined");
}

/*****************************************************************************
 ** END OF FILE - test3.controller.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : users.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('usersController', function($scope, User) {
    if(debug){
        console.log("appControllers('usersController') activated");
    }    
    
        $scope.saveUser = User.save;
    
        $scope.login = function(User, passwd) {
            $scope.loggedIn = true;
            $scope.userName = User;
            alert("Login Completed : loggedIn = " + $scope.loggedIn);
        };
    
        $scope.logout = function(User) {
            $scope.loggedIn = false;
            alert("Logout Completed : loggedIn = " + $scope.loggedIn);
        };
   });

if(debug){
    console.log("appControllers('usersController') defined");
}



    
appDirectives.directive("dumbPassword", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div>\n<input type='text' ng-model='model.input'>\n" +
            "<div>{{model.input}}</div>\n    \n</div>",
        link: function(scope, element){
            scope.$watch("model.input", function(value){
                if(value === "password"){
                    console.log("change password.");
                    element.children(1).toggleClass("alert-box alert");
                }
            })
        }
    };
});
    
/*****************************************************************************
 ** END OF FILE - users.controller.js
 ****************************************************************************/


/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : directives.js
 **
 *****************************************************************************
 ****************************************************************************/

// Define your directives here. 
// Directives can be added to same module as the main 'app' 
// or a seperate module can be created.

appDirectives.directive("photoFlip", function () {
    return {
        restrict: "E",
        replace: true,
        //templateURL: 'partials/photos/photo.test.html'
        template: "<div>\n<input type='text' ng-model='model.input'>\n" +
            "<div>{{model.input}}</div>\n    \n</div>",
        link: function(scope, element){
            scope.$watch("model.input", function(value){
                if(value === "password"){
                    console.log("change password.");
                    element.children(1).toggleClass("alert-box alert");
                }
            })
        }
    };
});

if(debug){
    console.log("appDirectives.directive('photoFlip') defined");
}    


/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:carousel
 * @restrict EA
 *
 * @description
 * Carousel is the outer container for a set of image 'slides' to showcase.
 *
 * @param {number=} interval The time, in milliseconds, that it will take 
 *     the carousel to go to the next slide.
 * @param {boolean=} noTransition Whether to disable transitions on the 
 *     carousel.
 * @param {boolean=} noPause Whether to disable pausing on the carousel 
 *    (by default, the carousel interval pauses on hover).
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <carousel>
      <slide>
        <img src="http://placekitten.com/150/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>Beautiful!</p>
        </div>
      </slide>
      <slide>
        <img src="http://placekitten.com/100/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>D'aww!</p>
        </div>
      </slide>
    </carousel>
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

// Carousel Directive
/*
appDirectives.directive('carousel', [function() {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        controller: 'photosController',
        require: 'carousel',
        templateUrl: 'partials/carousel/carousel.html',
        scope: {
          interval: '=',
          noTransition: '=',
          noPause: '='
        }
    };
}])

if(debug){
    console.log("appDirectives.directive('carousel') defined");
}    
*/
/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:slide
 * @restrict EA
 *
 * @description
 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
 *
 * @param {boolean=} active Model binding, whether or not this slide is currently active.
 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
<div ng-controller="CarouselDemoCtrl">
  <carousel>
    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
      <img ng-src="{{slide.image}}" style="margin:auto;">
      <div class="carousel-caption">
        <h4>Slide {{$index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  Interval, in milliseconds: <input type="number" ng-model="myInterval">
  <br />Enter a negative number to stop the interval.
</div>
  </file>
  <file name="script.js">
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
}
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

/*
appDirectives.directive('slide', function() {
    return {
        require: '^carousel',
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: 'partials/carousel/slide.html',
        scope: {
            active: '=?',
            index: '=?'
        },
        link: function (scope, element, attrs, carouselCtrl) {
            carouselCtrl.addSlide(scope, element);
            //when the scope is destroyed then remove the slide from the current slides array
            scope.$on('$destroy', function() {
                carouselCtrl.removeSlide(scope);
            });

            scope.$watch('active', function(active) {
                if (active) {
                    carouselCtrl.select(scope);
                }
            });
        }
    };
})

if(debug){
    console.log("appDirectives.directive('slide') defined");
}    

appDirectives.animation('.item', [
             '$animate',
    function ($animate) {
        return {
            beforeAddClass: function (element, className, done) {
                // Due to transclusion, noTransition property is on parent's scope
                if (className == 'active' && element.parent() &&
                !element.parent().scope().noTransition) {
                    var stopped = false;
                    var direction = element.isolateScope().direction;
                    var directionClass = direction == 'next' ? 'left' : 'right';
                    element.addClass(direction);
                    $animate.addClass(element, directionClass).then(function () {
                        if (!stopped) {
                            element.removeClass(directionClass + ' ' + direction);
                        }
                        done();
                    });

                    return function () {
                        stopped = true;
                    };
                }
                done();
            },
            beforeRemoveClass: function (element, className, done) {
                // Due to transclusion, noTransition property is on parent's scope
                if (className == 'active' && element.parent() &&
                !element.parent().scope().noTransition) {
                    var stopped = false;
                    var direction = element.isolateScope().direction;
                    var directionClass = direction == 'next' ? 'left' : 'right';
                    $animate.addClass(element, directionClass).then(function () {
                        if (!stopped) {
                            element.removeClass(directionClass);
                        }
                        done();
                    });
                    return function () {
                        stopped = true;
                    };
                }
                done();
            }
        };
    }
]);
 
if(debug){
    console.log("appDirectives.animation('.item') defined");
}    
*/

/*****************************************************************************
 ** END OF FILE - test.directive.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : test.directive.js
 **
 *****************************************************************************
 ****************************************************************************/

// Define your directives here. 
// Directives can be added to same module as 'mainApp' or a seperate module can be created.

app.directive('testDirective-A', function () {
    return {
        //use as 'testDirective' attribute in HTML
        // i.e. <div testDirective></div>
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log('testDirective-A linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-A') defined");
} 

app.directive('testDirective-C', function () {
    return {
        //use as 'testDirective' class in HTML
        // i.e. <div class="testDirective"></div>
        restrict: 'C',
        link: function (scope, element, attrs) {
            console.log('testDirective-C linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-C') defined");
} 

app.directive('testDirective-E', function () {
    return {
        //use as 'testDirective' element in HTML
        // i.e. <testDirective></testDirective>
        restrict: 'E',
        link: function (scope, element, attrs) {
            console.log('testDirective-E linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-E') defined");
} 

app.directive('testDirective-M', function () {
    return {
        //use as 'testDirective' comment in HTML
        // i.e. <!-- testDirective -->
        restrict: 'M',
        link: function (scope, element, attrs) {
            console.log('testDirective-M linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-M') defined");
} 

app.directive('test-superman', function () {
    return {
        restrict: 'E',
        template: "<p>{{photo.id}}</p>"
        //templateURL: 'partials/photos/photo.test.html'
    };
});
if(debug){
    console.log("appDirectives.directive('test-superman') defined");
} 
app.directive('test-gotHere', function () {
    return {
        restrict: 'A',
        link: function() {
            alert("I made it to here.");
        }
    };
});
if(debug){
    console.log("appDirectives.directive('test-gotHere') defined");
} 

app.directive('test-imgFlip', function () {
    return {
        restrict: 'E',
        template: "<div>{{photo.id}}</div>",
        templateURL: 'partials/photos/photo.test.html'
    };
});

if(debug){
    console.log("appDirectives.directive('test-imgFlip') defined");
}

/*****************************************************************************
 ** END OF FILE - test.directive.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : filters.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appFilters.filter('noNulls', 
    function(Photos) {
    
        var filteredPhotos = [];
        if(Photos){
            for (var i=0; i<Photos.length; i++) {
                if( Photos[i].name != ''){
                    filteredPhotos.push(Photos[i]);
                }
            }
        }
        console.log( 'filteredPhotos from noNulls' );
        console.log( filteredPhotos );
        return filteredPhotos;
    }
);

appFilters.filter('hilights', 
    function(Photos) {
    
        var filteredPhotos = [];
        if(Photos){
            for (var i=0; i<Photos.length; i++) {
                if( Photos[i].hilight == 1){
                    filteredPhotos.push(Photos[i]);
                }
            }
        }
        console.log( 'filteredPhotos from hilights' );
        console.log( filteredPhotos );
        return filteredPhotos;
    }
);


/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : photos.factory.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

//////////////////////////////////////////////////////////////////////////////
// RESTFUL API service
//////////////////////////////////////////////////////////////////////////////
appServices.factory('PhotoFactory', [
            '$resource',
    function($resource){
        
        if(debug){
            console.log("appServices.factory(PhotoFactory)-RESTFUL API initializing");
        }    
        
        var path = 'json/photos.json';
        var Photos = [];
    
        return $resource(path, {}, {
            getPhotos: {method:'GET', params:{photoId:'Photo'}, isArray:true}
        });
    }
]); 

if(debug){
    console.log("appServices.factory(PhotoFactory) - defined");
}

/*****************************************************************************
 ** END OF FILE - photos.factory.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : photos.provider.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appServices.service('PhotosProvider', [
             '$http', '$q', '$rootScope',
    function( $http,   $q,   $rootScope ){
        
        if(debug){
            console.log("appServices('PhotosProvider') initializing");
        }    
        
        var path = 'json/photos.json';
        var deferred = $q.defer();

        $http.get(path)
            .then(function(data)
                {
                    deferred.resolve(data);
                })

        this.getPhotos = function()
        {
            return deferred.promise;
        }

    }
]);

/*****************************************************************************
 ** END OF FILE - photos.provider.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : photos.service.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appServices.service('PhotosService', [
             '$http', '$scope',
    function( $http,   $scope ){
        
        debug=true;
        
        if(debug){
            console.log("appServices('PhotosService') initializing");
        }    
        
        var path = 'json/photos.json';
        
        $http.get($rootScope.endPoint + '/' + path)
        .success(function(response) {
            $scope.photos = response;
            console.log($scope.photos);
        });
    }
]);


appServices.service('PhotosServiceQ', [
             '$http', '$q', '$rootScope',
    function( $http,   $q,   $rootScope ){
        
        debug=true;
        
        if(debug){
            console.log("appServices('PhotosServiceQ') initializing");
        }    
        
        var path = 'json/photos.json';
        var deferred = $q.defer();
        
        //$http.get($rootScope.endPoint + '/' + path)
        $http.get(path)
        .then(function(data){
            deferred.resolve(data);
        })

        this.getPhotos = function(){
            return deferred.promise;
        }

    }
]);


/*****************************************************************************
 ** END OF FILE - photos.service.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : photos.utils.factory.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

// A RESTful factory for retrieving photos from 'photos.json'
appServices.factory('photosUtilsFactory', [
             '$http', 'utilsFactory', 
    function ($http,   utilsFactory) {
        if(debug){
            console.log("appServices('photosUtilsFactory') initializing");
        }

        var path = 'json/photos.json';
        
        var photos = $http.get(path).then(function(resp) {
            console.log("photosUtilsFactory - response executed(" + resp.length + ")");
            return resp;
        });
        console.log("photos.length - (" + photos.length + ")");

        var factory = {};

        factory.all = function () {
            console.log("photosUtilsFactory - factory.all executed");
            return photos;
        };

        factory.get = function (id) {
            console.log("photosUtilsFactory - factory.get executed for id(" + id + ")");
            return photos.then(function(){
                return utils.factory.findById(photos, id);
            })
        };

        factory.count = function() {
            console.log("photosUtilsFactory - factory.count executed");
            return photos.length;
        };

        factory.list = function(){
            $http.get(path).success(data);
            console.log("photosUtilsFactory - factory.list - executed(" + data.length + ")");
            return data;
        };
        return factory;

    }
]); 

/*****************************************************************************
 ** END OF FILE - photos.utils.factory.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : slides.service.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appServices.service('SlideService', [
             'Photos',
    function( Photos ){
        
        if(debug){
            console.log("appServices('SlideService') initializing");
        }    
        
        $scope.Interval = 5000;
        $scope.carouselIndex = 1;
        
        var colors = [
            "#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", 
            "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", 
            "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", 
            "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", 
            "#960069", "#91006e", "#8c0073", "#870078", "#82007d", 
            "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", 
            "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", 
            "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", 
            "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", 
            "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"
        ];
        
        var slides = _.filter(Photos, function(val){
            return val['hilight'] == 1;
        });// filter the images identified as hilights
        
        if(debug){console.log('slides(' + slides.length + '):');}
        //console.log($scope.slides);
        
        for (var i=0; i < slides.length; i++) {
            slides[i].color = colors[(i*10) % colors.length];
            slides[i].odd = (i % 2 === 0);
        } // Add color and odd

        function addSlide(target, style) {
            var i = target.length;
            target.push({
                id: (i + 1),
                name: style + ' slide #' + (i + 1),
                href: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                color: colors[ (i*10) % colors.length],
                odd: (i % 2 === 0)
            });
        };

        function addSlides(target, qty, style) {
            for (var i=0; i < qty; i++) {
                addSlide(target, style);
            }
        }

/*
        var num2Add = 7;
        addSlides($scope.slides, num2Add, 'abstract');
        addSlides($scope.slides, num2Add, 'city');
        addSlides($scope.slides, num2Add, 'people');
        addSlides($scope.slides, num2Add, 'transport');
        addSlides($scope.slides, num2Add, 'animals');
        addSlides($scope.slides, num2Add, 'food');
        addSlides($scope.slides, num2Add, 'nature');
        addSlides($scope.slides, num2Add, 'business');
        addSlides($scope.slides, num2Add, 'nightlife');
        addSlides($scope.slides, num2Add, 'sports');
        addSlides($scope.slides, num2Add, 'fashion');
        addSlides($scope.slides, num2Add, 'technics');
*/


        this.getSlides = function(){
            
            if(debug){
                console.log("appServices('SlideService') getSlides - returning slides(" + slides.length + ")");
            }   
            return slides;
        }

    }
]);

/*****************************************************************************
 ** END OF FILE - photos.service.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : test.factory.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

// Define your service here. Services can be added to same module as 'mainApp' or a seperate module can be created.

appServices.factory('testFactory', [function () {
    if(debug){
        console.log("appServices('testFactory') initializing");
    }
    
    var service = {};
    
    service.doWork = function () {
        console.log('testFactory - Did some work !');
    };
    
    return service;
    
}]);

/*****************************************************************************
 ** END OF FILE - test.factory.js
 ****************************************************************************/

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : utils.factory.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

//var utilServices = angular.module('utilServices', []);
appServices.factory('utilsFactory', function () {
        if(debug){
            console.log("appServices('utilsFactory') initializing");
        }
    
        return {
            // Util for finding an object by its 'id' property among an array
            findById: function findById(a, id) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].id === id) {return a[i];}
                }
                return null;
            },

            // Util for returning a random key from a collection that also isn't the current key
            newRandomKey: function newRandomKey(coll, key, currentKey){
                var randKey;
                do {
                    randKey = coll[Math.floor(coll.length * Math.random())][key];
                } while (randKey === currentKey);
                return randKey;
            }
        };
    });

/*****************************************************************************
 ** END OF FILE - utils.factory.js
 ****************************************************************************/


/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : videos.factory.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

//////////////////////////////////////////////////////////////////////////////
// RESTFUL API factory service
//////////////////////////////////////////////////////////////////////////////
appServices.factory('videosFactory', [
            '$resource',
    function($resource){

        if(debug){
            console.log("appServices.factory(videosFactory)-RESTFUL API initializing");
        }    
        
        var path = 'json/videos.json';
        var Videos = [];
    
        return $resource(path, {}, {
            getVideos: {method:'GET', params:{videoId:'Video'}, isArray:true}
        });
    }
]); 

if(debug){
    console.log("appServices.factory(videosFactory) - defined");
}


/*****************************************************************************
 ** END OF FILE - videos.factory.js
 ****************************************************************************/


/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : videos.service.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appServices.service('videosService', [
             '$http', '$q', '$rootScope',
    function( $http,   $q,   $rootScope ){

        if(debug){
            console.log("appServices('videosService') initializing");
        }

        var path = 'json/videos.json';
        var videosService = this;
        videosService.videoList = {};
        
        // GET
        videosService.getVideos = function() {
            var defer = $q.defer();
            $http.get($rootScope.endPoint + '/' + path)
            .success(function(res){
                videosService.videoList = res;
                defer.resolve(res);
                if(debug && (res.length > 0) ) {
                    console.log("videosService - Videos contains [" + res.length + "] videos");
                }
            })
            .error(function(err, status){
                defer.reject(err);
            });
        
            if(debug){
                console.log("appServices('videosService') getVideos - deferred promise");
            }
            return defer.promise;
        }
        
        // CREATE
        videosService.createVideo = function() {
            var defer = $q.defer();
            $http.post($rootScope.endPoint + '/newVideo')
            .success(function(res){
                videosService.videoList = res;
                defer.resolve(res);
            })
            .error(function(err, status){
                defer.reject(err);
            });
            
            return defer.promise;
        }
        
        // DELETE
        videosService.deleteVideo = function(id) {
            var defer = $q.defer();

            $http.delete($rootScope.endPoint + '/deleteVideo?videoId=' + id)
            .success(function(res){
                defer.resolve(res);
            })
            .error(function(err, status){
                defer.reject(err);
            });
            
            return defer.promise;            
        }

        // UPDATE
        videosService.updateVideo = function(id) {
            var defer = $q.defer();

            $http.update($rootScope.endPoint + '/updateVideo?videoId=' + id)
            .success(function(res){
                defer.resolve(res);
            })
            .error(function(err, status){
                defer.reject(err);
            });
            
            return defer.promise;            
        }

        return videosService;
    }
])

/*****************************************************************************
 ** END OF FILE - videos.service.js
 ****************************************************************************/


/* Modernizr (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-load-cssclasses-canvastext-csstransforms3d-flexbox-cssgradients-opacity-indexedDB-backgroundsize-borderimage-borderradius-boxshadow-cssanimations-csscolumns-cssreflections-csstransitions-flexboxlegacy-prefixed-csstransforms-mq-hashchange-draganddrop-generatedcontent-svg-inlinesvg-smil-svgclippaths-input-inputtypes-touch-fontface-websockets-cors-json-applicationcache-audio-canvas-geolocation-history-hsla-localstorage-multiplebgs-postmessage-sessionstorage-textshadow-rgba-video-webgl-websqldatabase-webworkers
 */
;window.Modernizr=function(e,t,n){function A(e){f.cssText=e}function O(e,t){return A(p.join(e+";")+(t||""))}function M(e,t){return typeof e===t}function _(e,t){return!!~(""+e).indexOf(t)}function D(e,t){for(var r in e){var i=e[r];if(!_(i,"-")&&f[i]!==n)return t=="pfx"?i:!0}return!1}function P(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:M(s,"function")?s.bind(r||t):s}return!1}function H(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+v.join(r+" ")+r).split(" ");return M(t,"string")||M(t,"undefined")?D(i,t):(i=(e+" "+m.join(r+" ")+r).split(" "),P(i,t,n))}function B(){i.input=function(n){for(var r=0,i=n.length;r<i;r++)w[n[r]]=n[r]in l;return w.list&&(w.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),i.inputtypes=function(e){for(var r=0,i,s,u,a=e.length;r<a;r++)l.setAttribute("type",s=e[r]),i=l.type!=="text",i&&(l.value=c,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&l.style.WebkitAppearance!==n?(o.appendChild(l),u=t.defaultView,i=u.getComputedStyle&&u.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,o.removeChild(l)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=l.checkValidity&&l.checkValidity()===!1:i=l.value!=c)),b[e[r]]=!!i;return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.8.3",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c=":)",h={}.toString,p=" -webkit- -moz- -o- -ms- ".split(" "),d="Webkit Moz O ms",v=d.split(" "),m=d.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},y={},b={},w={},E=[],S=E.slice,x,T=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)f=t.createElement("div"),f.id=i?i[r]:u+(r+1),c.appendChild(f);return s=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),c.id=u,(h?c:p).innerHTML+=s,p.appendChild(c),h||(p.style.background="",p.style.overflow="hidden",l=o.style.overflow,o.style.overflow="hidden",o.appendChild(p)),a=n(c,e),h?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),o.style.overflow=l),!!a},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return T("@media "+t+" { #"+u+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},C=function(){function r(r,i){i=i||t.createElement(e[r]||"div"),r="on"+r;var s=r in i;return s||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(r,""),s=M(i[r],"function"),M(i[r],"undefined")||(i[r]=n),i.removeAttribute(r))),i=null,s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),k={}.hasOwnProperty,L;!M(k,"undefined")&&!M(k.call,"undefined")?L=function(e,t){return k.call(e,t)}:L=function(e,t){return t in e&&M(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=S.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(S.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(S.call(arguments)))};return i}),y.flexbox=function(){return H("flexWrap")},y.flexboxlegacy=function(){return H("boxDirection")},y.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},y.canvastext=function(){return!!i.canvas&&!!M(t.createElement("canvas").getContext("2d").fillText,"function")},y.webgl=function(){return!!e.WebGLRenderingContext},y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:T(["@media (",p.join("touch-enabled),("),u,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9}),n},y.geolocation=function(){return"geolocation"in navigator},y.postmessage=function(){return!!e.postMessage},y.websqldatabase=function(){return!!e.openDatabase},y.hashchange=function(){return C("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},y.history=function(){return!!e.history&&!!history.pushState},y.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},y.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},y.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),_(f.backgroundColor,"rgba")},y.hsla=function(){return A("background-color:hsla(120,40%,100%,.5)"),_(f.backgroundColor,"rgba")||_(f.backgroundColor,"hsla")},y.multiplebgs=function(){return A("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(f.background)},y.backgroundsize=function(){return H("backgroundSize")},y.borderimage=function(){return H("borderImage")},y.borderradius=function(){return H("borderRadius")},y.boxshadow=function(){return H("boxShadow")},y.textshadow=function(){return t.createElement("div").style.textShadow===""},y.opacity=function(){return O("opacity:.55"),/^0.55$/.test(f.opacity)},y.cssanimations=function(){return H("animationName")},y.csscolumns=function(){return H("columnCount")},y.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return A((e+"-webkit- ".split(" ").join(t+e)+p.join(n+e)).slice(0,-e.length)),_(f.backgroundImage,"gradient")},y.cssreflections=function(){return H("boxReflect")},y.csstransforms=function(){return!!H("transform")},y.csstransforms3d=function(){var e=!!H("perspective");return e&&"webkitPerspective"in o.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3}),e},y.csstransitions=function(){return H("transition")},y.fontface=function(){var e;return T('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0}),e},y.generatedcontent=function(){var e;return T(["#",u,"{font:0/0 a}#",u,':after{content:"',c,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},y.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(r){}return n},y.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(r){}return n},y.localstorage=function(){try{return localStorage.setItem(u,u),localStorage.removeItem(u),!0}catch(e){return!1}},y.sessionstorage=function(){try{return sessionStorage.setItem(u,u),sessionStorage.removeItem(u),!0}catch(e){return!1}},y.webworkers=function(){return!!e.Worker},y.applicationcache=function(){return!!e.applicationCache},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==g.svg},y.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(h.call(t.createElementNS(g.svg,"animate")))},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS(g.svg,"clipPath")))};for(var j in y)L(y,j)&&(x=j.toLowerCase(),i[x]=y[j](),E.push((i[x]?"":"no-")+x));return i.input||B(),i.addTest=function(e,t){if(typeof e=="object")for(var r in e)L(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e),i[e]=t}return i},A(""),a=l=null,function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function p(e){var t=f[e[u]];return t||(t={},a++,e[u]=a,f[a]=t),t}function d(e,n,r){n||(n=t);if(l)return n.createElement(e);r||(r=p(n));var o;return r.cache[e]?o=r.cache[e].cloneNode():s.test(e)?o=(r.cache[e]=r.createElem(e)).cloneNode():o=r.createElem(e),o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function v(e,n){e||(e=t);if(l)return e.createDocumentFragment();n=n||p(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function m(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?d(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function g(e){e||(e=t);var n=p(e);return y.shivCSS&&!o&&!n.hasCSS&&(n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||m(e,n),e}var n="3.7.0",r=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o,u="_html5shiv",a=0,f={},l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=!0,l=!0}})();var y={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:r.shivCSS!==!1,supportsUnknownElements:l,shivMethods:r.shivMethods!==!1,type:"default",shivDocument:g,createElement:d,createDocumentFragment:v};e.html5=y,g(t)}(this,t),i._version=r,i._prefixes=p,i._domPrefixes=m,i._cssomPrefixes=v,i.mq=N,i.hasEvent=C,i.testProp=function(e){return D([e])},i.testAllProps=H,i.testStyles=T,i.prefixed=function(e,t,n){return t?H(e,t,n):H(e,"pfx")},o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+E.join(" "):""),i}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cors",!!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest)),Modernizr.addTest("json",!!window.JSON&&!!JSON.parse);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImJvb3RzdHJhcC5taW4uanMiLCJodG1sNXNoaXYuanMiLCJqcXVlcnkuZml0dGV4dC5qcyIsImpxdWVyeS5qcyIsImpxdWVyeS5rbm9iLmpzIiwianF1ZXJ5Lm5hdi5qcyIsImpxdWVyeS52ZWdhcy5taW4uanMiLCJtaXNjLmpzIiwib3dsLmNhcm91c2VsLm1pbi5qcyIsInJlc3BvbmQubWluLmpzIiwic2NyaXB0LmpzIiwic2NyaXB0LnJlc3BvbnNpdmUuanMiLCJzY3JvbGxSZXZlYWwuanMiLCJzbW9vdGhzY3JvbGwuanMiLCJ3b3cubWluLmpzIiwiemVyaWYuanMiLCJjb250cm9sbGVycy9hYm91dC5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsImNvbnRyb2xsZXJzL2NpdGF0aW9ucy5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvaG9tZS5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvdGVzdDEuY29udHJvbGxlci5qcyIsImNvbnRyb2xsZXJzL3Rlc3QyLmNvbnRyb2xsZXIuanMiLCJjb250cm9sbGVycy90ZXN0My5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci5qcyIsImRpcmVjdGl2ZXMvZGlyZWN0aXZlcy5qcyIsImRpcmVjdGl2ZXMvdGVzdC5kaXJlY3RpdmVzLmpzIiwiZmlsdGVycy9maWx0ZXJzLmpzIiwic2VydmljZXMvcGhvdG9zLmZhY3RvcnkuanMiLCJzZXJ2aWNlcy9waG90b3MucHJvdmlkZXIuanMiLCJzZXJ2aWNlcy9waG90b3Muc2VydmljZS5qcyIsInNlcnZpY2VzL3Bob3Rvcy51dGlscy5mYWN0b3J5LmpzIiwic2VydmljZXMvc2xpZGVzLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy90ZXN0LmZhY3RvcnkuanMiLCJzZXJ2aWNlcy91dGlscy5mYWN0b3J5LmpzIiwic2VydmljZXMvdmlkZW9zLmZhY3RvcnkuanMiLCJzZXJ2aWNlcy92aWRlb3Muc2VydmljZS5qcyIsInZlbmRvci9tb2Rlcm5penIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzV2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdFBBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3grQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9TQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoR0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBhcHAuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGRlYnVnID0gdHJ1ZTtcclxuXHJcbi8vIE1haW4gY29uZmlndXJhdGlvbiBmaWxlLiBTZXRzIHVwIEFuZ3VsYXJKUyBtb2R1bGUgYW5kIHJvdXRlcyBhbmQgYW55IG90aGVyIGNvbmZpZyBvYmplY3RzXHJcbi8vIENvbmZpZ3VyYXRpb24gd2l0aCB1aS1yb3V0ZXIgaW5zdGVhZCBvZiBuZy1yb3V0ZS5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAnbmdBbmltYXRlJyxcclxuICAgICduZ1Jlc291cmNlJyxcclxuICAgICduZ1RvdWNoJyxcclxuICAgICd1aScsXHJcbiAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICd1aS5ib290c3RyYXAuY2Fyb3VzZWwnLFxyXG4gICAgJ3VpLmNhbGVuZGFyJyxcclxuICAgICd1aS5ncmlkJyxcclxuICAgICd1aS5ncmlkLmNlbGxOYXYnLFxyXG4gICAgJ3VpLmdyaWQuZWRpdCcsXHJcbiAgICAndWkuZ3JpZC5yZXNpemVDb2x1bW5zJyxcclxuICAgICd1aS5ncmlkLnBpbm5pbmcnLFxyXG4gICAgJ3VpLmdyaWQuc2VsZWN0aW9uJyxcclxuICAgICd1aS5ncmlkLm1vdmVDb2x1bW5zJyxcclxuICAgICd1aS5ncmlkLmV4cG9ydGVyJyxcclxuICAgICd1aS5ncmlkLmltcG9ydGVyJyxcclxuICAgICd1aS5ncmlkLmdyb3VwaW5nJyxcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ3VpLnNvcnRhYmxlJyxcclxuICAgICdhcHAuY29udHJvbGxlcnMnLFxyXG4gICAgJ2FwcC5maWx0ZXJzJyxcclxuICAgICdhcHAuZGlyZWN0aXZlcycsXHJcbiAgICAnYXBwLnNlcnZpY2VzJ1xyXG5dKTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoYXBwKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG52YXIgYXBwQ29udHJvbGxlcnMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pOyAgICAgLy9EZWZpbmUgdGhlIGNvbnRyb2xsZXJzIG1vZHVsZVxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSkgZGVmaW5lZFwiKTtcclxufVxyXG52YXIgYXBwRmlsdGVycyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZmlsdGVycycsIFtdKTsgICAgIC8vRGVmaW5lIHRoZSBjb250cm9sbGVycyBtb2R1bGVcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhbmd1bGFyLm1vZHVsZSgnYXBwLmZpbHRlcnMnLCBbXSkgZGVmaW5lZFwiKTtcclxufVxyXG52YXIgYXBwRGlyZWN0aXZlcyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKTsgICAgIC8vRGVmaW5lIHRoZSBkaXJlY3RpdmUgbW9kdWxlXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pIGRlZmluZWRcIik7XHJcbn1cclxudmFyIGFwcFNlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtcclxuICAgICduZ1Jlc291cmNlJ1xyXG4gICAgXSk7ICAgICAvL0RlZmluZSB0aGUgc2VydmljZXMgbW9kdWxlXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFsnbmdSZXNvdXJjZSddKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vL2FwcC5ydW4oXHJcbi8vICAgIFsgICAgICAgICAgICAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcclxuLy8gICAgICAgIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAgICRzdGF0ZSwgICAkc3RhdGVQYXJhbXMpIHtcclxuLy8gICAgICAgICAgICAvKiBJdCdzIHZlcnkgaGFuZHkgdG8gYWRkIHJlZmVyZW5jZXMgdG8gJHN0YXRlIGFuZCAkc3RhdGVQYXJhbXMgdG8gdGhlICRyb290U2NvcGVcclxuLy8gICAgICAgICAgICAqKiBzbyB0aGF0IHlvdSBjYW4gYWNjZXNzIHRoZW0gZnJvbSBhbnkgc2NvcGUgd2l0aGluIHlvdXIgYXBwbGljYXRpb25zLlxyXG4vLyAgICAgICAgICAgICoqIEZvciBleGFtcGxlLCA8bGkgbmctY2xhc3M9XCJ7IGFjdGl2ZTogJHN0YXRlLmluY2x1ZGVzKCdjb250YWN0cy5saXN0JykgfVwiPiB3aWxsXHJcbi8vICAgICAgICAgICAgKiogc2V0IHRoZSA8bGk+IHRvIGFjdGl2ZSB3aGVuZXZlciAnY29udGFjdHMubGlzdCcgb3Igb25lIG9mIGl0cyBkZWNlbmRlbnRzIGlzIGFjdGl2ZS5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICRyb290U2NvcGUuc3RhdGUgPSAkc3RhdGU7XHJcbi8vICAgICAgICAgICAgJHJvb3RTY29wZS5zdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcclxuLy9cclxuLy8gICAgICAgICAgICAkcm9vdFNjb3BlLnBhZ2VMb2FkZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIC8vJHJvb3RTY29wZS5lbmRQb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbi8vICAgICAgICAgICAgJHJvb3RTY29wZS5lbmRQb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbi8vXHJcbi8vICAgICAgICAgICAgJHJvb3RTY29wZS5jbGVhcm1lbnVjbGFzcyA9IHRydWU7XHJcbi8vXHJcbi8vICAgICAgICB9XHJcbi8vICAgIF1cclxuLy8pO1xyXG5cclxuYXBwLmNvbmZpZyggWyckdXJsUm91dGVyUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInLFxyXG4gICAgZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgICAkc3RhdGVQcm92aWRlcikge1xyXG4gICAgXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG5cclxuICAgIC8vIHVybCAtIG1hdGNoZXMgdGhlIHVpLXNyZWYgb24gdGhlIGluZGV4Lmh0bWwgcGFnZVxyXG4gICAgLy8gdGVtcGxhdGVVcmwgLSBtYXRjaGVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGFydGlhbCBodG1sIGZpbGVcclxuICAgIC8vIGNvbnRyb2xsZXIgLSBtYXRjaGVzIHRoZSBuYW1lIG9mIHRoZSBjb250cm9sbGVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBhZ2VcclxuICAgIC8vIHNlcnZpY2UgLSBpZGVudGlmaWVzIHRoZSBzZXJ2aWNlIHVzZWQgdG8gZ2V0IHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhpcyBwYWdlLlxyXG4gICAgLy9cclxuICAgIC8vIFRvIGJlIGRpc3BsYXllZCBvbiBtYWluIHNjcmVlbjpcclxuICAgIC8vICRzdGF0ZSAgICAgICAgICA9IHt7ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfX1cclxuICAgIC8vICRzdGF0ZVBhcmFtcyAgICA9IHt7ICRzdGF0ZVBhcmFtcyB9fVxyXG4gICAgLy8gJHN0YXRlIGZ1bGwgdXJsID0ge3sgJHN0YXRlLiRjdXJyZW50LnVybC5zb3VyY2UgfX1cclxuICAgIC8vICRzdGF0ZVByb3ZpZGVyICA9IHt7ICRzdGF0ZVByb3ZpZGVyIH19XHJcbiAgICBcclxuICAgIC8qIEhvbWUgKi9cclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICBjbGVhcm1lbnVjbGFzczogdHJ1ZSxcclxuICAgICAgICBjb250cm9sbGVyOiAnaG9tZUNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUvaG9tZS5odG1sJyxcclxuICAgICAgICB1cmw6ICcvaG9tZSdcclxuICAgIH0pXHJcblxyXG4gICAgLnN0YXRlKCdhYm91dCcsIHtcclxuICAgICAgICBjb250cm9sbGVyOiAnYWJvdXRDb250cm9sbGVyJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hYm91dC9hYm91dC5odG1sJyxcclxuICAgICAgICB1cmw6ICcvYWJvdXQnXHJcbiAgICB9KVxyXG5cclxuICAgIC5zdGF0ZSgnY2l0YXRpb25zJywge1xyXG4gICAgICAgIC8vY29udHJvbGxlcjogJ2NpdGF0aW9uc0NvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2NpdGF0aW9ucy9jaXRhdGlvbnMuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL2NpdGF0aW9ucydcclxuICAgIH0pXHJcblxyXG4gICAgLnN0YXRlKCd0ZXN0MScsIHtcclxuICAgICAgICAvL2NvbnRyb2xsZXI6ICd0ZXN0MUNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Rlc3QvdGVzdDEuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL3Rlc3QxJ1xyXG4gICAgfSlcclxuXHJcbiAgICAuc3RhdGUoJ3Rlc3QyJywge1xyXG4gICAgICAgIC8vY29udHJvbGxlcjogJ3Rlc3QyQ29udHJvbGxlcicsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGVzdC90ZXN0Mi5odG1sJyxcclxuICAgICAgICB1cmw6ICcvdGVzdDInXHJcbiAgICB9KVxyXG5cclxuICAgIC5zdGF0ZSgndGVzdDMnLCB7XHJcbiAgICAgICAgLy9jb250cm9sbGVyOiAndGVzdDNDb250cm9sbGVyJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90ZXN0L3Rlc3QzLmh0bWwnLFxyXG4gICAgICAgIHVybDogJy90ZXN0MydcclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8qIFJlZ2lzdGVyICovXHJcbiAgICAuc3RhdGUoJ3JlZ2lzdGVyJywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICd1c2VyQ29udHJvbGxlcicsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWNjb3VudC9yZWdpc3Rlci5odG1sJyxcclxuICAgICAgICB1cmw6IFwiL3JlZ2lzdGVyXCJcclxuICAgIH0pXHJcblxyXG4gICAvKiBMb2dpbiAqL1xyXG4gICAgLnN0YXRlKCdsb2dpbicsIHtcclxuICAgICAgICBjb250cm9sbGVyOiAndXNlckNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FjY291bnQvbG9naW4uaHRtbCcsXHJcbiAgICAgICAgdXJsOiBcIi9sb2dpblwiXHJcbiAgICB9KVxyXG5cclxuICAgLyogTG9nb3V0ICovXHJcbiAgICAuc3RhdGUoJ2xvZ291dCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hY2NvdW50L2xvZ291dC5odG1sJyxcclxuICAgICAgICB1cmw6IFwiL2xvZ291dFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXJcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqKiBUaGUgYHdoZW5gIG1ldGhvZCBzYXlzIGlmIHRoZSB1cmwgaXMgZXZlciB0aGUgMXN0IHBhcmFtLCB0aGVuIHJlZGlyZWN0IHRvIHRoZSAybmQgcGFyYW1cclxuICAgICAgICAqKiBIZXJlIHdlIGFyZSBqdXN0IHNldHRpbmcgdXAgc29tZSBjb252ZW5pZW5jZSB1cmxzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgLndoZW4oJy9jP2lkJywgJy90ZW1wbGF0ZXMvY29udGFjdHMvOmlkJylcclxuICAgICAgICAud2hlbignL3VzZXIvOmlkJywgJy90ZW1wbGF0ZXMvY29udGFjdHMvOmlkJylcclxuXHJcbiAgICAgICAgLm90aGVyd2lzZSgnL2hvbWUnKTtcclxuXHJcblxyXG5cclxufV0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhbmd1bGFyLmNvbmZpZyhbJyR1cmxSb3V0ZXJQcm92aWRlcicsICckc3RhdGVQcm92aWRlciddKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coIFwid2Vic2l0ZSBpcyBub3cgcmVhZHkgdG8gYmUgZGlzcGxheWVkIVwiICk7XHJcbiAgICAkKCBcIiNzdGF0ZURpc3BsYXlcIiApLmNzcyggXCJ2aXNpYmxlXCIsIFwidHJ1ZVwiICk7XHJcbn0pO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBhcHAuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qIVxyXG4gKiBCb290c3RyYXAgdjMuMy41IChodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcclxuICogQ29weXJpZ2h0IDIwMTEtMjAxNSBUd2l0dGVyLCBJbmMuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKi9cclxuaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGpRdWVyeSl0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeVwiKTsrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9YS5mbi5qcXVlcnkuc3BsaXQoXCIgXCIpWzBdLnNwbGl0KFwiLlwiKTtpZihiWzBdPDImJmJbMV08OXx8MT09YlswXSYmOT09YlsxXSYmYlsyXTwxKXRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5IHZlcnNpb24gMS45LjEgb3IgaGlnaGVyXCIpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJvb3RzdHJhcFwiKSxiPXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9O2Zvcih2YXIgYyBpbiBiKWlmKHZvaWQgMCE9PWEuc3R5bGVbY10pcmV0dXJue2VuZDpiW2NdfTtyZXR1cm4hMX1hLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKGIpe3ZhciBjPSExLGQ9dGhpczthKHRoaXMpLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7Yz0hMH0pO3ZhciBlPWZ1bmN0aW9uKCl7Y3x8YShkKS50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCl9O3JldHVybiBzZXRUaW1lb3V0KGUsYiksdGhpc30sYShmdW5jdGlvbigpe2Euc3VwcG9ydC50cmFuc2l0aW9uPWIoKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmKGEuZXZlbnQuc3BlY2lhbC5ic1RyYW5zaXRpb25FbmQ9e2JpbmRUeXBlOmEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxkZWxlZ2F0ZVR5cGU6YS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGhhbmRsZTpmdW5jdGlvbihiKXtyZXR1cm4gYShiLnRhcmdldCkuaXModGhpcyk/Yi5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZT1jLmRhdGEoXCJicy5hbGVydFwiKTtlfHxjLmRhdGEoXCJicy5hbGVydFwiLGU9bmV3IGQodGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdLmNhbGwoYyl9KX12YXIgYz0nW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJyxkPWZ1bmN0aW9uKGIpe2EoYikub24oXCJjbGlja1wiLGMsdGhpcy5jbG9zZSl9O2QuVkVSU0lPTj1cIjMuMy41XCIsZC5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxkLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKCl7Zy5kZXRhY2goKS50cmlnZ2VyKFwiY2xvc2VkLmJzLmFsZXJ0XCIpLnJlbW92ZSgpfXZhciBlPWEodGhpcyksZj1lLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtmfHwoZj1lLmF0dHIoXCJocmVmXCIpLGY9ZiYmZi5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKTt2YXIgZz1hKGYpO2ImJmIucHJldmVudERlZmF1bHQoKSxnLmxlbmd0aHx8KGc9ZS5jbG9zZXN0KFwiLmFsZXJ0XCIpKSxnLnRyaWdnZXIoYj1hLkV2ZW50KFwiY2xvc2UuYnMuYWxlcnRcIikpLGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fChnLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJmcuaGFzQ2xhc3MoXCJmYWRlXCIpP2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYykuZW11bGF0ZVRyYW5zaXRpb25FbmQoZC5UUkFOU0lUSU9OX0RVUkFUSU9OKTpjKCkpfTt2YXIgZT1hLmZuLmFsZXJ0O2EuZm4uYWxlcnQ9YixhLmZuLmFsZXJ0LkNvbnN0cnVjdG9yPWQsYS5mbi5hbGVydC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYWxlcnQ9ZSx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpXCIsYyxkLnByb3RvdHlwZS5jbG9zZSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5idXR0b25cIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjtlfHxkLmRhdGEoXCJicy5idXR0b25cIixlPW5ldyBjKHRoaXMsZikpLFwidG9nZ2xlXCI9PWI/ZS50b2dnbGUoKTpiJiZlLnNldFN0YXRlKGIpfSl9dmFyIGM9ZnVuY3Rpb24oYixkKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZCksdGhpcy5pc0xvYWRpbmc9ITF9O2MuVkVSU0lPTj1cIjMuMy41XCIsYy5ERUZBVUxUUz17bG9hZGluZ1RleHQ6XCJsb2FkaW5nLi4uXCJ9LGMucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGIpe3ZhciBjPVwiZGlzYWJsZWRcIixkPXRoaXMuJGVsZW1lbnQsZT1kLmlzKFwiaW5wdXRcIik/XCJ2YWxcIjpcImh0bWxcIixmPWQuZGF0YSgpO2IrPVwiVGV4dFwiLG51bGw9PWYucmVzZXRUZXh0JiZkLmRhdGEoXCJyZXNldFRleHRcIixkW2VdKCkpLHNldFRpbWVvdXQoYS5wcm94eShmdW5jdGlvbigpe2RbZV0obnVsbD09ZltiXT90aGlzLm9wdGlvbnNbYl06ZltiXSksXCJsb2FkaW5nVGV4dFwiPT1iPyh0aGlzLmlzTG9hZGluZz0hMCxkLmFkZENsYXNzKGMpLmF0dHIoYyxjKSk6dGhpcy5pc0xvYWRpbmcmJih0aGlzLmlzTG9hZGluZz0hMSxkLnJlbW92ZUNsYXNzKGMpLnJlbW92ZUF0dHIoYykpfSx0aGlzKSwwKX0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dmFyIGE9ITAsYj10aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKTtpZihiLmxlbmd0aCl7dmFyIGM9dGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIik7XCJyYWRpb1wiPT1jLnByb3AoXCJ0eXBlXCIpPyhjLnByb3AoXCJjaGVja2VkXCIpJiYoYT0hMSksYi5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpKTpcImNoZWNrYm94XCI9PWMucHJvcChcInR5cGVcIikmJihjLnByb3AoXCJjaGVja2VkXCIpIT09dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGE9ITEpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikpLGMucHJvcChcImNoZWNrZWRcIix0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKSxhJiZjLnRyaWdnZXIoXCJjaGFuZ2VcIil9ZWxzZSB0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLXByZXNzZWRcIiwhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSksdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIGQ9YS5mbi5idXR0b247YS5mbi5idXR0b249YixhLmZuLmJ1dHRvbi5Db25zdHJ1Y3Rvcj1jLGEuZm4uYnV0dG9uLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5idXR0b249ZCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KTtkLmhhc0NsYXNzKFwiYnRuXCIpfHwoZD1kLmNsb3Nlc3QoXCIuYnRuXCIpKSxiLmNhbGwoZCxcInRvZ2dsZVwiKSxhKGMudGFyZ2V0KS5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyl8fGEoYy50YXJnZXQpLmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKXx8Yy5wcmV2ZW50RGVmYXVsdCgpfSkub24oXCJmb2N1cy5icy5idXR0b24uZGF0YS1hcGkgYmx1ci5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oYil7YShiLnRhcmdldCkuY2xvc2VzdChcIi5idG5cIikudG9nZ2xlQ2xhc3MoXCJmb2N1c1wiLC9eZm9jdXMoaW4pPyQvLnRlc3QoYi50eXBlKSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmNhcm91c2VsXCIpLGY9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksZz1cInN0cmluZ1wiPT10eXBlb2YgYj9iOmYuc2xpZGU7ZXx8ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIixlPW5ldyBjKHRoaXMsZikpLFwibnVtYmVyXCI9PXR5cGVvZiBiP2UudG8oYik6Zz9lW2ddKCk6Zi5pbnRlcnZhbCYmZS5wYXVzZSgpLmN5Y2xlKCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRpbmRpY2F0b3JzPXRoaXMuJGVsZW1lbnQuZmluZChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpLHRoaXMub3B0aW9ucz1jLHRoaXMucGF1c2VkPW51bGwsdGhpcy5zbGlkaW5nPW51bGwsdGhpcy5pbnRlcnZhbD1udWxsLHRoaXMuJGFjdGl2ZT1udWxsLHRoaXMuJGl0ZW1zPW51bGwsdGhpcy5vcHRpb25zLmtleWJvYXJkJiZ0aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpKSxcImhvdmVyXCI9PXRoaXMub3B0aW9ucy5wYXVzZSYmIShcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSYmdGhpcy4kZWxlbWVudC5vbihcIm1vdXNlZW50ZXIuYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMucGF1c2UsdGhpcykpLm9uKFwibW91c2VsZWF2ZS5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5jeWNsZSx0aGlzKSl9O2MuVkVSU0lPTj1cIjMuMy41XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTYwMCxjLkRFRkFVTFRTPXtpbnRlcnZhbDo1ZTMscGF1c2U6XCJob3ZlclwiLHdyYXA6ITAsa2V5Ym9hcmQ6ITB9LGMucHJvdG90eXBlLmtleWRvd249ZnVuY3Rpb24oYSl7aWYoIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYS50YXJnZXQudGFnTmFtZSkpe3N3aXRjaChhLndoaWNoKXtjYXNlIDM3OnRoaXMucHJldigpO2JyZWFrO2Nhc2UgMzk6dGhpcy5uZXh0KCk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59YS5wcmV2ZW50RGVmYXVsdCgpfX0sYy5wcm90b3R5cGUuY3ljbGU9ZnVuY3Rpb24oYil7cmV0dXJuIGJ8fCh0aGlzLnBhdXNlZD0hMSksdGhpcy5pbnRlcnZhbCYmY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwmJiF0aGlzLnBhdXNlZCYmKHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoYS5wcm94eSh0aGlzLm5leHQsdGhpcyksdGhpcy5vcHRpb25zLmludGVydmFsKSksdGhpc30sYy5wcm90b3R5cGUuZ2V0SXRlbUluZGV4PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLiRpdGVtcz1hLnBhcmVudCgpLmNoaWxkcmVuKFwiLml0ZW1cIiksdGhpcy4kaXRlbXMuaW5kZXgoYXx8dGhpcy4kYWN0aXZlKX0sYy5wcm90b3R5cGUuZ2V0SXRlbUZvckRpcmVjdGlvbj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuZ2V0SXRlbUluZGV4KGIpLGQ9XCJwcmV2XCI9PWEmJjA9PT1jfHxcIm5leHRcIj09YSYmYz09dGhpcy4kaXRlbXMubGVuZ3RoLTE7aWYoZCYmIXRoaXMub3B0aW9ucy53cmFwKXJldHVybiBiO3ZhciBlPVwicHJldlwiPT1hPy0xOjEsZj0oYytlKSV0aGlzLiRpdGVtcy5sZW5ndGg7cmV0dXJuIHRoaXMuJGl0ZW1zLmVxKGYpfSxjLnByb3RvdHlwZS50bz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9dGhpcy5nZXRJdGVtSW5kZXgodGhpcy4kYWN0aXZlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSk7cmV0dXJuIGE+dGhpcy4kaXRlbXMubGVuZ3RoLTF8fDA+YT92b2lkIDA6dGhpcy5zbGlkaW5nP3RoaXMuJGVsZW1lbnQub25lKFwic2xpZC5icy5jYXJvdXNlbFwiLGZ1bmN0aW9uKCl7Yi50byhhKX0pOmM9PWE/dGhpcy5wYXVzZSgpLmN5Y2xlKCk6dGhpcy5zbGlkZShhPmM/XCJuZXh0XCI6XCJwcmV2XCIsdGhpcy4kaXRlbXMuZXEoYSkpfSxjLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSEwKSx0aGlzLiRlbGVtZW50LmZpbmQoXCIubmV4dCwgLnByZXZcIikubGVuZ3RoJiZhLnN1cHBvcnQudHJhbnNpdGlvbiYmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpLHRoaXMuY3ljbGUoITApKSx0aGlzLmludGVydmFsPWNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpc30sYy5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNsaWRpbmc/dm9pZCAwOnRoaXMuc2xpZGUoXCJuZXh0XCIpfSxjLnByb3RvdHlwZS5wcmV2PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGluZz92b2lkIDA6dGhpcy5zbGlkZShcInByZXZcIil9LGMucHJvdG90eXBlLnNsaWRlPWZ1bmN0aW9uKGIsZCl7dmFyIGU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpLGY9ZHx8dGhpcy5nZXRJdGVtRm9yRGlyZWN0aW9uKGIsZSksZz10aGlzLmludGVydmFsLGg9XCJuZXh0XCI9PWI/XCJsZWZ0XCI6XCJyaWdodFwiLGk9dGhpcztpZihmLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXJldHVybiB0aGlzLnNsaWRpbmc9ITE7dmFyIGo9ZlswXSxrPWEuRXZlbnQoXCJzbGlkZS5icy5jYXJvdXNlbFwiLHtyZWxhdGVkVGFyZ2V0OmosZGlyZWN0aW9uOmh9KTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoayksIWsuaXNEZWZhdWx0UHJldmVudGVkKCkpe2lmKHRoaXMuc2xpZGluZz0hMCxnJiZ0aGlzLnBhdXNlKCksdGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpe3RoaXMuJGluZGljYXRvcnMuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7dmFyIGw9YSh0aGlzLiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhpcy5nZXRJdGVtSW5kZXgoZildKTtsJiZsLmFkZENsYXNzKFwiYWN0aXZlXCIpfXZhciBtPWEuRXZlbnQoXCJzbGlkLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246aH0pO3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcInNsaWRlXCIpPyhmLmFkZENsYXNzKGIpLGZbMF0ub2Zmc2V0V2lkdGgsZS5hZGRDbGFzcyhoKSxmLmFkZENsYXNzKGgpLGUub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtmLnJlbW92ZUNsYXNzKFtiLGhdLmpvaW4oXCIgXCIpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlLnJlbW92ZUNsYXNzKFtcImFjdGl2ZVwiLGhdLmpvaW4oXCIgXCIpKSxpLnNsaWRpbmc9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2kuJGVsZW1lbnQudHJpZ2dlcihtKX0sMCl9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pKTooZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxmLmFkZENsYXNzKFwiYWN0aXZlXCIpLHRoaXMuc2xpZGluZz0hMSx0aGlzLiRlbGVtZW50LnRyaWdnZXIobSkpLGcmJnRoaXMuY3ljbGUoKSx0aGlzfX07dmFyIGQ9YS5mbi5jYXJvdXNlbDthLmZuLmNhcm91c2VsPWIsYS5mbi5jYXJvdXNlbC5Db25zdHJ1Y3Rvcj1jLGEuZm4uY2Fyb3VzZWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNhcm91c2VsPWQsdGhpc307dmFyIGU9ZnVuY3Rpb24oYyl7dmFyIGQsZT1hKHRoaXMpLGY9YShlLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KGQ9ZS5hdHRyKFwiaHJlZlwiKSkmJmQucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSk7aWYoZi5oYXNDbGFzcyhcImNhcm91c2VsXCIpKXt2YXIgZz1hLmV4dGVuZCh7fSxmLmRhdGEoKSxlLmRhdGEoKSksaD1lLmF0dHIoXCJkYXRhLXNsaWRlLXRvXCIpO2gmJihnLmludGVydmFsPSExKSxiLmNhbGwoZixnKSxoJiZmLmRhdGEoXCJicy5jYXJvdXNlbFwiKS50byhoKSxjLnByZXZlbnREZWZhdWx0KCl9fTthKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZV1cIixlKS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZS10b11cIixlKSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKTtiLmNhbGwoYyxjLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3ZhciBjLGQ9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIil8fChjPWIuYXR0cihcImhyZWZcIikpJiZjLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIik7cmV0dXJuIGEoZCl9ZnVuY3Rpb24gYyhiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxlPWMuZGF0YShcImJzLmNvbGxhcHNlXCIpLGY9YS5leHRlbmQoe30sZC5ERUZBVUxUUyxjLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7IWUmJmYudG9nZ2xlJiYvc2hvd3xoaWRlLy50ZXN0KGIpJiYoZi50b2dnbGU9ITEpLGV8fGMuZGF0YShcImJzLmNvbGxhcHNlXCIsZT1uZXcgZCh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGQ9ZnVuY3Rpb24oYixjKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGQuREVGQVVMVFMsYyksdGhpcy4kdHJpZ2dlcj1hKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycrYi5pZCsnXCJdLFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIycrYi5pZCsnXCJdJyksdGhpcy50cmFuc2l0aW9uaW5nPW51bGwsdGhpcy5vcHRpb25zLnBhcmVudD90aGlzLiRwYXJlbnQ9dGhpcy5nZXRQYXJlbnQoKTp0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLiRlbGVtZW50LHRoaXMuJHRyaWdnZXIpLHRoaXMub3B0aW9ucy50b2dnbGUmJnRoaXMudG9nZ2xlKCl9O2QuVkVSU0lPTj1cIjMuMy41XCIsZC5UUkFOU0lUSU9OX0RVUkFUSU9OPTM1MCxkLkRFRkFVTFRTPXt0b2dnbGU6ITB9LGQucHJvdG90eXBlLmRpbWVuc2lvbj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJ3aWR0aFwiKTtyZXR1cm4gYT9cIndpZHRoXCI6XCJoZWlnaHRcIn0sZC5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe2lmKCF0aGlzLnRyYW5zaXRpb25pbmcmJiF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBiLGU9dGhpcy4kcGFyZW50JiZ0aGlzLiRwYXJlbnQuY2hpbGRyZW4oXCIucGFuZWxcIikuY2hpbGRyZW4oXCIuaW4sIC5jb2xsYXBzaW5nXCIpO2lmKCEoZSYmZS5sZW5ndGgmJihiPWUuZGF0YShcImJzLmNvbGxhcHNlXCIpLGImJmIudHJhbnNpdGlvbmluZykpKXt2YXIgZj1hLkV2ZW50KFwic2hvdy5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoZiksIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe2UmJmUubGVuZ3RoJiYoYy5jYWxsKGUsXCJoaWRlXCIpLGJ8fGUuZGF0YShcImJzLmNvbGxhcHNlXCIsbnVsbCkpO3ZhciBnPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVtnXSgwKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLiR0cmlnZ2VyLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMudHJhbnNpdGlvbmluZz0xO3ZhciBoPWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIikuYWRkQ2xhc3MoXCJjb2xsYXBzZSBpblwiKVtnXShcIlwiKSx0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5jb2xsYXBzZVwiKX07aWYoIWEuc3VwcG9ydC50cmFuc2l0aW9uKXJldHVybiBoLmNhbGwodGhpcyk7dmFyIGk9YS5jYW1lbENhc2UoW1wic2Nyb2xsXCIsZ10uam9pbihcIi1cIikpO3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eShoLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pW2ddKHRoaXMuJGVsZW1lbnRbMF1baV0pfX19fSxkLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYj1hLkV2ZW50KFwiaGlkZS5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksIWIuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBjPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudFtjXSh0aGlzLiRlbGVtZW50W2NdKCkpWzBdLm9mZnNldEhlaWdodCx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlIGluXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLHRoaXMuJHRyaWdnZXIuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGU9ZnVuY3Rpb24oKXt0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlXCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIil9O3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbj92b2lkIHRoaXMuJGVsZW1lbnRbY10oMCkub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eShlLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pOmUuY2FsbCh0aGlzKX19fSxkLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKT9cImhpZGVcIjpcInNob3dcIl0oKX0sZC5wcm90b3R5cGUuZ2V0UGFyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcy5vcHRpb25zLnBhcmVudCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInK3RoaXMub3B0aW9ucy5wYXJlbnQrJ1wiXScpLmVhY2goYS5wcm94eShmdW5jdGlvbihjLGQpe3ZhciBlPWEoZCk7dGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoYihlKSxlKX0sdGhpcykpLmVuZCgpfSxkLnByb3RvdHlwZS5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3M9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmhhc0NsYXNzKFwiaW5cIik7YS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGMpLGIudG9nZ2xlQ2xhc3MoXCJjb2xsYXBzZWRcIiwhYykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixjKX07dmFyIGU9YS5mbi5jb2xsYXBzZTthLmZuLmNvbGxhcHNlPWMsYS5mbi5jb2xsYXBzZS5Db25zdHJ1Y3Rvcj1kLGEuZm4uY29sbGFwc2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNvbGxhcHNlPWUsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5jb2xsYXBzZS5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScsZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtlLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBmPWIoZSksZz1mLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxoPWc/XCJ0b2dnbGVcIjplLmRhdGEoKTtjLmNhbGwoZixoKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3ZhciBjPWIuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2N8fChjPWIuYXR0cihcImhyZWZcIiksYz1jJiYvI1tBLVphLXpdLy50ZXN0KGMpJiZjLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBkPWMmJmEoYyk7cmV0dXJuIGQmJmQubGVuZ3RoP2Q6Yi5wYXJlbnQoKX1mdW5jdGlvbiBjKGMpe2MmJjM9PT1jLndoaWNofHwoYShlKS5yZW1vdmUoKSxhKGYpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9YihkKSxmPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2UuaGFzQ2xhc3MoXCJvcGVuXCIpJiYoYyYmXCJjbGlja1wiPT1jLnR5cGUmJi9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYy50YXJnZXQudGFnTmFtZSkmJmEuY29udGFpbnMoZVswXSxjLnRhcmdldCl8fChlLnRyaWdnZXIoYz1hLkV2ZW50KFwiaGlkZS5icy5kcm9wZG93blwiLGYpKSxjLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoZC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksZS5yZW1vdmVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihcImhpZGRlbi5icy5kcm9wZG93blwiLGYpKSkpfSkpfWZ1bmN0aW9uIGQoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoXCJicy5kcm9wZG93blwiKTtkfHxjLmRhdGEoXCJicy5kcm9wZG93blwiLGQ9bmV3IGcodGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZkW2JdLmNhbGwoYyl9KX12YXIgZT1cIi5kcm9wZG93bi1iYWNrZHJvcFwiLGY9J1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxnPWZ1bmN0aW9uKGIpe2EoYikub24oXCJjbGljay5icy5kcm9wZG93blwiLHRoaXMudG9nZ2xlKX07Zy5WRVJTSU9OPVwiMy4zLjVcIixnLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtpZighZS5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZj1iKGUpLGc9Zi5oYXNDbGFzcyhcIm9wZW5cIik7aWYoYygpLCFnKXtcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhZi5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZhKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwiZHJvcGRvd24tYmFja2Ryb3BcIikuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSkub24oXCJjbGlja1wiLGMpO3ZhciBoPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2lmKGYudHJpZ2dlcihkPWEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIsaCkpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO2UudHJpZ2dlcihcImZvY3VzXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLGYudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoXCJzaG93bi5icy5kcm9wZG93blwiLGgpfXJldHVybiExfX0sZy5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihjKXtpZigvKDM4fDQwfDI3fDMyKS8udGVzdChjLndoaWNoKSYmIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYy50YXJnZXQudGFnTmFtZSkpe3ZhciBkPWEodGhpcyk7aWYoYy5wcmV2ZW50RGVmYXVsdCgpLGMuc3RvcFByb3BhZ2F0aW9uKCksIWQuaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSl7dmFyIGU9YihkKSxnPWUuaGFzQ2xhc3MoXCJvcGVuXCIpO2lmKCFnJiYyNyE9Yy53aGljaHx8ZyYmMjc9PWMud2hpY2gpcmV0dXJuIDI3PT1jLndoaWNoJiZlLmZpbmQoZikudHJpZ2dlcihcImZvY3VzXCIpLGQudHJpZ2dlcihcImNsaWNrXCIpO3ZhciBoPVwiIGxpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgYVwiLGk9ZS5maW5kKFwiLmRyb3Bkb3duLW1lbnVcIitoKTtpZihpLmxlbmd0aCl7dmFyIGo9aS5pbmRleChjLnRhcmdldCk7Mzg9PWMud2hpY2gmJmo+MCYmai0tLDQwPT1jLndoaWNoJiZqPGkubGVuZ3RoLTEmJmorKyx+anx8KGo9MCksaS5lcShqKS50cmlnZ2VyKFwiZm9jdXNcIil9fX19O3ZhciBoPWEuZm4uZHJvcGRvd247YS5mbi5kcm9wZG93bj1kLGEuZm4uZHJvcGRvd24uQ29uc3RydWN0b3I9ZyxhLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kcm9wZG93bj1oLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixjKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24gZm9ybVwiLGZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZixnLnByb3RvdHlwZS50b2dnbGUpLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGYsZy5wcm90b3R5cGUua2V5ZG93bikub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24tbWVudVwiLGcucHJvdG90eXBlLmtleWRvd24pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIsZCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1lLmRhdGEoXCJicy5tb2RhbFwiKSxnPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZS5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGImJmIpO2Z8fGUuZGF0YShcImJzLm1vZGFsXCIsZj1uZXcgYyh0aGlzLGcpKSxcInN0cmluZ1wiPT10eXBlb2YgYj9mW2JdKGQpOmcuc2hvdyYmZi5zaG93KGQpfSl9dmFyIGM9ZnVuY3Rpb24oYixjKXt0aGlzLm9wdGlvbnM9Yyx0aGlzLiRib2R5PWEoZG9jdW1lbnQuYm9keSksdGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuJGRpYWxvZz10aGlzLiRlbGVtZW50LmZpbmQoXCIubW9kYWwtZGlhbG9nXCIpLHRoaXMuJGJhY2tkcm9wPW51bGwsdGhpcy5pc1Nob3duPW51bGwsdGhpcy5vcmlnaW5hbEJvZHlQYWQ9bnVsbCx0aGlzLnNjcm9sbGJhcldpZHRoPTAsdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrPSExLHRoaXMub3B0aW9ucy5yZW1vdGUmJnRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1jb250ZW50XCIpLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSxhLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwibG9hZGVkLmJzLm1vZGFsXCIpfSx0aGlzKSl9O2MuVkVSU0lPTj1cIjMuMy41XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTMwMCxjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT049MTUwLGMuREVGQVVMVFM9e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwLHNob3c6ITB9LGMucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pc1Nob3duP3RoaXMuaGlkZSgpOnRoaXMuc2hvdyhhKX0sYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbihiKXt2YXIgZD10aGlzLGU9YS5FdmVudChcInNob3cuYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDpifSk7dGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpLHRoaXMuaXNTaG93bnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KHRoaXMuaXNTaG93bj0hMCx0aGlzLmNoZWNrU2Nyb2xsYmFyKCksdGhpcy5zZXRTY3JvbGxiYXIoKSx0aGlzLiRib2R5LmFkZENsYXNzKFwibW9kYWwtb3BlblwiKSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIiwnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxhLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksdGhpcy4kZGlhbG9nLm9uKFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIixmdW5jdGlvbigpe2QuJGVsZW1lbnQub25lKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIsZnVuY3Rpb24oYil7YShiLnRhcmdldCkuaXMoZC4kZWxlbWVudCkmJihkLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITApfSl9KSx0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uKCl7dmFyIGU9YS5zdXBwb3J0LnRyYW5zaXRpb24mJmQuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpO2QuJGVsZW1lbnQucGFyZW50KCkubGVuZ3RofHxkLiRlbGVtZW50LmFwcGVuZFRvKGQuJGJvZHkpLGQuJGVsZW1lbnQuc2hvdygpLnNjcm9sbFRvcCgwKSxkLmFkanVzdERpYWxvZygpLGUmJmQuJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGgsZC4kZWxlbWVudC5hZGRDbGFzcyhcImluXCIpLGQuZW5mb3JjZUZvY3VzKCk7dmFyIGY9YS5FdmVudChcInNob3duLmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6Yn0pO2U/ZC4kZGlhbG9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7ZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKX0pKX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihiKXtiJiZiLnByZXZlbnREZWZhdWx0KCksYj1hLkV2ZW50KFwiaGlkZS5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksdGhpcy5pc1Nob3duJiYhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmKHRoaXMuaXNTaG93bj0hMSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksYShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiaW5cIikub2ZmKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiKS5vZmYoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIiksdGhpcy4kZGlhbG9nLm9mZihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRlbGVtZW50Lm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGEucHJveHkodGhpcy5oaWRlTW9kYWwsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6dGhpcy5oaWRlTW9kYWwoKSl9LGMucHJvdG90eXBlLmVuZm9yY2VGb2N1cz1mdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIikub24oXCJmb2N1c2luLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXt0aGlzLiRlbGVtZW50WzBdPT09YS50YXJnZXR8fHRoaXMuJGVsZW1lbnQuaGFzKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpfSx0aGlzKSl9LGMucHJvdG90eXBlLmVzY2FwZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmtleWJvYXJkP3RoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpezI3PT1hLndoaWNoJiZ0aGlzLmhpZGUoKX0sdGhpcykpOnRoaXMuaXNTaG93bnx8dGhpcy4kZWxlbWVudC5vZmYoXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIil9LGMucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93bj9hKHdpbmRvdykub24oXCJyZXNpemUuYnMubW9kYWxcIixhLnByb3h5KHRoaXMuaGFuZGxlVXBkYXRlLHRoaXMpKTphKHdpbmRvdykub2ZmKFwicmVzaXplLmJzLm1vZGFsXCIpfSxjLnByb3RvdHlwZS5oaWRlTW9kYWw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuJGVsZW1lbnQuaGlkZSgpLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXthLiRib2R5LnJlbW92ZUNsYXNzKFwibW9kYWwtb3BlblwiKSxhLnJlc2V0QWRqdXN0bWVudHMoKSxhLnJlc2V0U2Nyb2xsYmFyKCksYS4kZWxlbWVudC50cmlnZ2VyKFwiaGlkZGVuLmJzLm1vZGFsXCIpfSl9LGMucHJvdG90eXBlLnJlbW92ZUJhY2tkcm9wPWZ1bmN0aW9uKCl7dGhpcy4kYmFja2Ryb3AmJnRoaXMuJGJhY2tkcm9wLnJlbW92ZSgpLHRoaXMuJGJhY2tkcm9wPW51bGx9LGMucHJvdG90eXBlLmJhY2tkcm9wPWZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT9cImZhZGVcIjpcIlwiO2lmKHRoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmJhY2tkcm9wKXt2YXIgZj1hLnN1cHBvcnQudHJhbnNpdGlvbiYmZTtpZih0aGlzLiRiYWNrZHJvcD1hKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwibW9kYWwtYmFja2Ryb3AgXCIrZSkuYXBwZW5kVG8odGhpcy4kYm9keSksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s/dm9pZCh0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITEpOnZvaWQoYS50YXJnZXQ9PT1hLmN1cnJlbnRUYXJnZXQmJihcInN0YXRpY1wiPT10aGlzLm9wdGlvbnMuYmFja2Ryb3A/dGhpcy4kZWxlbWVudFswXS5mb2N1cygpOnRoaXMuaGlkZSgpKSl9LHRoaXMpKSxmJiZ0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCx0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcyhcImluXCIpLCFiKXJldHVybjtmP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGIpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik6YigpfWVsc2UgaWYoIXRoaXMuaXNTaG93biYmdGhpcy4kYmFja2Ryb3Ape3RoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaW5cIik7dmFyIGc9ZnVuY3Rpb24oKXtkLnJlbW92ZUJhY2tkcm9wKCksYiYmYigpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZykuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTpnKCl9ZWxzZSBiJiZiKCl9LGMucHJvdG90eXBlLmhhbmRsZVVwZGF0ZT1mdW5jdGlvbigpe3RoaXMuYWRqdXN0RGlhbG9nKCl9LGMucHJvdG90eXBlLmFkanVzdERpYWxvZz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7dGhpcy4kZWxlbWVudC5jc3Moe3BhZGRpbmdMZWZ0OiF0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZhP3RoaXMuc2Nyb2xsYmFyV2lkdGg6XCJcIixwYWRkaW5nUmlnaHQ6dGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmIWE/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwifSl9LGMucHJvdG90eXBlLnJlc2V0QWRqdXN0bWVudHM9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6XCJcIixwYWRkaW5nUmlnaHQ6XCJcIn0pfSxjLnByb3RvdHlwZS5jaGVja1Njcm9sbGJhcj1mdW5jdGlvbigpe3ZhciBhPXdpbmRvdy5pbm5lcldpZHRoO2lmKCFhKXt2YXIgYj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7YT1iLnJpZ2h0LU1hdGguYWJzKGIubGVmdCl9dGhpcy5ib2R5SXNPdmVyZmxvd2luZz1kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoPGEsdGhpcy5zY3JvbGxiYXJXaWR0aD10aGlzLm1lYXN1cmVTY3JvbGxiYXIoKX0sYy5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9cGFyc2VJbnQodGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpfHwwLDEwKTt0aGlzLm9yaWdpbmFsQm9keVBhZD1kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodHx8XCJcIix0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZ0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIixhK3RoaXMuc2Nyb2xsYmFyV2lkdGgpfSxjLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3RoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLHRoaXMub3JpZ2luYWxCb2R5UGFkKX0sYy5wcm90b3R5cGUubWVhc3VyZVNjcm9sbGJhcj1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5jbGFzc05hbWU9XCJtb2RhbC1zY3JvbGxiYXItbWVhc3VyZVwiLHRoaXMuJGJvZHkuYXBwZW5kKGEpO3ZhciBiPWEub2Zmc2V0V2lkdGgtYS5jbGllbnRXaWR0aDtyZXR1cm4gdGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZChhKSxifTt2YXIgZD1hLmZuLm1vZGFsO2EuZm4ubW9kYWw9YixhLmZuLm1vZGFsLkNvbnN0cnVjdG9yPWMsYS5mbi5tb2RhbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4ubW9kYWw9ZCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLm1vZGFsLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxmdW5jdGlvbihjKXt2YXIgZD1hKHRoaXMpLGU9ZC5hdHRyKFwiaHJlZlwiKSxmPWEoZC5hdHRyKFwiZGF0YS10YXJnZXRcIil8fGUmJmUucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSksZz1mLmRhdGEoXCJicy5tb2RhbFwiKT9cInRvZ2dsZVwiOmEuZXh0ZW5kKHtyZW1vdGU6IS8jLy50ZXN0KGUpJiZlfSxmLmRhdGEoKSxkLmRhdGEoKSk7ZC5pcyhcImFcIikmJmMucHJldmVudERlZmF1bHQoKSxmLm9uZShcInNob3cuYnMubW9kYWxcIixmdW5jdGlvbihhKXthLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxmLm9uZShcImhpZGRlbi5icy5tb2RhbFwiLGZ1bmN0aW9uKCl7ZC5pcyhcIjp2aXNpYmxlXCIpJiZkLnRyaWdnZXIoXCJmb2N1c1wiKX0pfSksYi5jYWxsKGYsZyx0aGlzKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMudG9vbHRpcFwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiOyhlfHwhL2Rlc3Ryb3l8aGlkZS8udGVzdChiKSkmJihlfHxkLmRhdGEoXCJicy50b29sdGlwXCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpKX0pfXZhciBjPWZ1bmN0aW9uKGEsYil7dGhpcy50eXBlPW51bGwsdGhpcy5vcHRpb25zPW51bGwsdGhpcy5lbmFibGVkPW51bGwsdGhpcy50aW1lb3V0PW51bGwsdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpcy4kZWxlbWVudD1udWxsLHRoaXMuaW5TdGF0ZT1udWxsLHRoaXMuaW5pdChcInRvb2x0aXBcIixhLGIpfTtjLlZFUlNJT049XCIzLjMuNVwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5ERUZBVUxUUz17YW5pbWF0aW9uOiEwLHBsYWNlbWVudDpcInRvcFwiLHNlbGVjdG9yOiExLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsdHJpZ2dlcjpcImhvdmVyIGZvY3VzXCIsdGl0bGU6XCJcIixkZWxheTowLGh0bWw6ITEsY29udGFpbmVyOiExLHZpZXdwb3J0OntzZWxlY3RvcjpcImJvZHlcIixwYWRkaW5nOjB9fSxjLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGIsYyxkKXtpZih0aGlzLmVuYWJsZWQ9ITAsdGhpcy50eXBlPWIsdGhpcy4kZWxlbWVudD1hKGMpLHRoaXMub3B0aW9ucz10aGlzLmdldE9wdGlvbnMoZCksdGhpcy4kdmlld3BvcnQ9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZhKGEuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudmlld3BvcnQpP3RoaXMub3B0aW9ucy52aWV3cG9ydC5jYWxsKHRoaXMsdGhpcy4kZWxlbWVudCk6dGhpcy5vcHRpb25zLnZpZXdwb3J0LnNlbGVjdG9yfHx0aGlzLm9wdGlvbnMudmlld3BvcnQpLHRoaXMuaW5TdGF0ZT17Y2xpY2s6ITEsaG92ZXI6ITEsZm9jdXM6ITF9LHRoaXMuJGVsZW1lbnRbMF1pbnN0YW5jZW9mIGRvY3VtZW50LmNvbnN0cnVjdG9yJiYhdGhpcy5vcHRpb25zLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcImBzZWxlY3RvcmAgb3B0aW9uIG11c3QgYmUgc3BlY2lmaWVkIHdoZW4gaW5pdGlhbGl6aW5nIFwiK3RoaXMudHlwZStcIiBvbiB0aGUgd2luZG93LmRvY3VtZW50IG9iamVjdCFcIik7Zm9yKHZhciBlPXRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KFwiIFwiKSxmPWUubGVuZ3RoO2YtLTspe3ZhciBnPWVbZl07aWYoXCJjbGlja1wiPT1nKXRoaXMuJGVsZW1lbnQub24oXCJjbGljay5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy50b2dnbGUsdGhpcykpO2Vsc2UgaWYoXCJtYW51YWxcIiE9Zyl7dmFyIGg9XCJob3ZlclwiPT1nP1wibW91c2VlbnRlclwiOlwiZm9jdXNpblwiLGk9XCJob3ZlclwiPT1nP1wibW91c2VsZWF2ZVwiOlwiZm9jdXNvdXRcIjt0aGlzLiRlbGVtZW50Lm9uKGgrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMuZW50ZXIsdGhpcykpLHRoaXMuJGVsZW1lbnQub24oaStcIi5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy5sZWF2ZSx0aGlzKSl9fXRoaXMub3B0aW9ucy5zZWxlY3Rvcj90aGlzLl9vcHRpb25zPWEuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyx7dHJpZ2dlcjpcIm1hbnVhbFwiLHNlbGVjdG9yOlwiXCJ9KTp0aGlzLmZpeFRpdGxlKCl9LGMucHJvdG90eXBlLmdldERlZmF1bHRzPWZ1bmN0aW9uKCl7cmV0dXJuIGMuREVGQVVMVFN9LGMucHJvdG90eXBlLmdldE9wdGlvbnM9ZnVuY3Rpb24oYil7cmV0dXJuIGI9YS5leHRlbmQoe30sdGhpcy5nZXREZWZhdWx0cygpLHRoaXMuJGVsZW1lbnQuZGF0YSgpLGIpLGIuZGVsYXkmJlwibnVtYmVyXCI9PXR5cGVvZiBiLmRlbGF5JiYoYi5kZWxheT17c2hvdzpiLmRlbGF5LGhpZGU6Yi5kZWxheX0pLGJ9LGMucHJvdG90eXBlLmdldERlbGVnYXRlT3B0aW9ucz1mdW5jdGlvbigpe3ZhciBiPXt9LGM9dGhpcy5nZXREZWZhdWx0cygpO3JldHVybiB0aGlzLl9vcHRpb25zJiZhLmVhY2godGhpcy5fb3B0aW9ucyxmdW5jdGlvbihhLGQpe2NbYV0hPWQmJihiW2FdPWQpfSksYn0sYy5wcm90b3R5cGUuZW50ZXI9ZnVuY3Rpb24oYil7dmFyIGM9YiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/YjphKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSksYiBpbnN0YW5jZW9mIGEuRXZlbnQmJihjLmluU3RhdGVbXCJmb2N1c2luXCI9PWIudHlwZT9cImZvY3VzXCI6XCJob3ZlclwiXT0hMCksYy50aXAoKS5oYXNDbGFzcyhcImluXCIpfHxcImluXCI9PWMuaG92ZXJTdGF0ZT92b2lkKGMuaG92ZXJTdGF0ZT1cImluXCIpOihjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJpblwiLGMub3B0aW9ucy5kZWxheSYmYy5vcHRpb25zLmRlbGF5LnNob3c/dm9pZChjLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5cIj09Yy5ob3ZlclN0YXRlJiZjLnNob3coKX0sYy5vcHRpb25zLmRlbGF5LnNob3cpKTpjLnNob3coKSl9LGMucHJvdG90eXBlLmlzSW5TdGF0ZVRydWU9ZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gdGhpcy5pblN0YXRlKWlmKHRoaXMuaW5TdGF0ZVthXSlyZXR1cm4hMDtyZXR1cm4hMX0sYy5wcm90b3R5cGUubGVhdmU9ZnVuY3Rpb24oYil7dmFyIGM9YiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/YjphKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSksYiBpbnN0YW5jZW9mIGEuRXZlbnQmJihjLmluU3RhdGVbXCJmb2N1c291dFwiPT1iLnR5cGU/XCJmb2N1c1wiOlwiaG92ZXJcIl09ITEpLGMuaXNJblN0YXRlVHJ1ZSgpP3ZvaWQgMDooY2xlYXJUaW1lb3V0KGMudGltZW91dCksYy5ob3ZlclN0YXRlPVwib3V0XCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuaGlkZT92b2lkKGMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJvdXRcIj09Yy5ob3ZlclN0YXRlJiZjLmhpZGUoKX0sYy5vcHRpb25zLmRlbGF5LmhpZGUpKTpjLmhpZGUoKSl9LGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgYj1hLkV2ZW50KFwic2hvdy5icy5cIit0aGlzLnR5cGUpO2lmKHRoaXMuaGFzQ29udGVudCgpJiZ0aGlzLmVuYWJsZWQpe3RoaXMuJGVsZW1lbnQudHJpZ2dlcihiKTt2YXIgZD1hLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnRbMF0ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdGhpcy4kZWxlbWVudFswXSk7aWYoYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8IWQpcmV0dXJuO3ZhciBlPXRoaXMsZj10aGlzLnRpcCgpLGc9dGhpcy5nZXRVSUQodGhpcy50eXBlKTt0aGlzLnNldENvbnRlbnQoKSxmLmF0dHIoXCJpZFwiLGcpLHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixnKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uJiZmLmFkZENsYXNzKFwiZmFkZVwiKTt2YXIgaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50P3RoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLGZbMF0sdGhpcy4kZWxlbWVudFswXSk6dGhpcy5vcHRpb25zLnBsYWNlbWVudCxpPS9cXHM/YXV0bz9cXHM/L2ksaj1pLnRlc3QoaCk7aiYmKGg9aC5yZXBsYWNlKGksXCJcIil8fFwidG9wXCIpLGYuZGV0YWNoKCkuY3NzKHt0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImJsb2NrXCJ9KS5hZGRDbGFzcyhoKS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLHRoaXMpLHRoaXMub3B0aW9ucy5jb250YWluZXI/Zi5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTpmLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImluc2VydGVkLmJzLlwiK3RoaXMudHlwZSk7dmFyIGs9dGhpcy5nZXRQb3NpdGlvbigpLGw9ZlswXS5vZmZzZXRXaWR0aCxtPWZbMF0ub2Zmc2V0SGVpZ2h0O2lmKGope3ZhciBuPWgsbz10aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtoPVwiYm90dG9tXCI9PWgmJmsuYm90dG9tK20+by5ib3R0b20/XCJ0b3BcIjpcInRvcFwiPT1oJiZrLnRvcC1tPG8udG9wP1wiYm90dG9tXCI6XCJyaWdodFwiPT1oJiZrLnJpZ2h0K2w+by53aWR0aD9cImxlZnRcIjpcImxlZnRcIj09aCYmay5sZWZ0LWw8by5sZWZ0P1wicmlnaHRcIjpoLGYucmVtb3ZlQ2xhc3MobikuYWRkQ2xhc3MoaCl9dmFyIHA9dGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0KGgsayxsLG0pO3RoaXMuYXBwbHlQbGFjZW1lbnQocCxoKTt2YXIgcT1mdW5jdGlvbigpe3ZhciBhPWUuaG92ZXJTdGF0ZTtlLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5cIitlLnR5cGUpLGUuaG92ZXJTdGF0ZT1udWxsLFwib3V0XCI9PWEmJmUubGVhdmUoZSl9O2Euc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiR0aXAuaGFzQ2xhc3MoXCJmYWRlXCIpP2Yub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIscSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpxKCl9fSxjLnByb3RvdHlwZS5hcHBseVBsYWNlbWVudD1mdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMudGlwKCksZT1kWzBdLm9mZnNldFdpZHRoLGY9ZFswXS5vZmZzZXRIZWlnaHQsZz1wYXJzZUludChkLmNzcyhcIm1hcmdpbi10b3BcIiksMTApLGg9cGFyc2VJbnQoZC5jc3MoXCJtYXJnaW4tbGVmdFwiKSwxMCk7aXNOYU4oZykmJihnPTApLGlzTmFOKGgpJiYoaD0wKSxiLnRvcCs9ZyxiLmxlZnQrPWgsYS5vZmZzZXQuc2V0T2Zmc2V0KGRbMF0sYS5leHRlbmQoe3VzaW5nOmZ1bmN0aW9uKGEpe2QuY3NzKHt0b3A6TWF0aC5yb3VuZChhLnRvcCksbGVmdDpNYXRoLnJvdW5kKGEubGVmdCl9KX19LGIpLDApLGQuYWRkQ2xhc3MoXCJpblwiKTt2YXIgaT1kWzBdLm9mZnNldFdpZHRoLGo9ZFswXS5vZmZzZXRIZWlnaHQ7XCJ0b3BcIj09YyYmaiE9ZiYmKGIudG9wPWIudG9wK2Ytaik7dmFyIGs9dGhpcy5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEoYyxiLGksaik7ay5sZWZ0P2IubGVmdCs9ay5sZWZ0OmIudG9wKz1rLnRvcDt2YXIgbD0vdG9wfGJvdHRvbS8udGVzdChjKSxtPWw/MiprLmxlZnQtZStpOjIqay50b3AtZitqLG49bD9cIm9mZnNldFdpZHRoXCI6XCJvZmZzZXRIZWlnaHRcIjtkLm9mZnNldChiKSx0aGlzLnJlcGxhY2VBcnJvdyhtLGRbMF1bbl0sbCl9LGMucHJvdG90eXBlLnJlcGxhY2VBcnJvdz1mdW5jdGlvbihhLGIsYyl7dGhpcy5hcnJvdygpLmNzcyhjP1wibGVmdFwiOlwidG9wXCIsNTAqKDEtYS9iKStcIiVcIikuY3NzKGM/XCJ0b3BcIjpcImxlZnRcIixcIlwiKX0sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCk7YS5maW5kKFwiLnRvb2x0aXAtaW5uZXJcIilbdGhpcy5vcHRpb25zLmh0bWw/XCJodG1sXCI6XCJ0ZXh0XCJdKGIpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIGluIHRvcCBib3R0b20gbGVmdCByaWdodFwiKX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihiKXtmdW5jdGlvbiBkKCl7XCJpblwiIT1lLmhvdmVyU3RhdGUmJmYuZGV0YWNoKCksZS4kZWxlbWVudC5yZW1vdmVBdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKS50cmlnZ2VyKFwiaGlkZGVuLmJzLlwiK2UudHlwZSksYiYmYigpfXZhciBlPXRoaXMsZj1hKHRoaXMuJHRpcCksZz1hLkV2ZW50KFwiaGlkZS5icy5cIit0aGlzLnR5cGUpO3JldHVybiB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZyksZy5pc0RlZmF1bHRQcmV2ZW50ZWQoKT92b2lkIDA6KGYucmVtb3ZlQ2xhc3MoXCJpblwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmZi5oYXNDbGFzcyhcImZhZGVcIik/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixkKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOmQoKSx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzKX0sYy5wcm90b3R5cGUuZml4VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50OyhhLmF0dHIoXCJ0aXRsZVwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikpJiZhLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsYS5hdHRyKFwidGl0bGVcIil8fFwiXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxjLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKX0sYy5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oYil7Yj1ifHx0aGlzLiRlbGVtZW50O3ZhciBjPWJbMF0sZD1cIkJPRFlcIj09Yy50YWdOYW1lLGU9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtudWxsPT1lLndpZHRoJiYoZT1hLmV4dGVuZCh7fSxlLHt3aWR0aDplLnJpZ2h0LWUubGVmdCxoZWlnaHQ6ZS5ib3R0b20tZS50b3B9KSk7dmFyIGY9ZD97dG9wOjAsbGVmdDowfTpiLm9mZnNldCgpLGc9e3Njcm9sbDpkP2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOmIuc2Nyb2xsVG9wKCl9LGg9ZD97d2lkdGg6YSh3aW5kb3cpLndpZHRoKCksaGVpZ2h0OmEod2luZG93KS5oZWlnaHQoKX06bnVsbDtyZXR1cm4gYS5leHRlbmQoe30sZSxnLGgsZil9LGMucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQ9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuXCJib3R0b21cIj09YT97dG9wOmIudG9wK2IuaGVpZ2h0LGxlZnQ6Yi5sZWZ0K2Iud2lkdGgvMi1jLzJ9OlwidG9wXCI9PWE/e3RvcDpiLnRvcC1kLGxlZnQ6Yi5sZWZ0K2Iud2lkdGgvMi1jLzJ9OlwibGVmdFwiPT1hP3t0b3A6Yi50b3ArYi5oZWlnaHQvMi1kLzIsbGVmdDpiLmxlZnQtY306e3RvcDpiLnRvcCtiLmhlaWdodC8yLWQvMixsZWZ0OmIubGVmdCtiLndpZHRofX0sYy5wcm90b3R5cGUuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXt0b3A6MCxsZWZ0OjB9O2lmKCF0aGlzLiR2aWV3cG9ydClyZXR1cm4gZTt2YXIgZj10aGlzLm9wdGlvbnMudmlld3BvcnQmJnRoaXMub3B0aW9ucy52aWV3cG9ydC5wYWRkaW5nfHwwLGc9dGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7aWYoL3JpZ2h0fGxlZnQvLnRlc3QoYSkpe3ZhciBoPWIudG9wLWYtZy5zY3JvbGwsaT1iLnRvcCtmLWcuc2Nyb2xsK2Q7aDxnLnRvcD9lLnRvcD1nLnRvcC1oOmk+Zy50b3ArZy5oZWlnaHQmJihlLnRvcD1nLnRvcCtnLmhlaWdodC1pKX1lbHNle3ZhciBqPWIubGVmdC1mLGs9Yi5sZWZ0K2YrYztqPGcubGVmdD9lLmxlZnQ9Zy5sZWZ0LWo6az5nLnJpZ2h0JiYoZS5sZWZ0PWcubGVmdCtnLndpZHRoLWspfXJldHVybiBlfSxjLnByb3RvdHlwZS5nZXRUaXRsZT1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy4kZWxlbWVudCxjPXRoaXMub3B0aW9ucztyZXR1cm4gYT1iLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYy50aXRsZT9jLnRpdGxlLmNhbGwoYlswXSk6Yy50aXRsZSl9LGMucHJvdG90eXBlLmdldFVJRD1mdW5jdGlvbihhKXtkbyBhKz1+figxZTYqTWF0aC5yYW5kb20oKSk7d2hpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpO3JldHVybiBhfSxjLnByb3RvdHlwZS50aXA9ZnVuY3Rpb24oKXtpZighdGhpcy4kdGlwJiYodGhpcy4kdGlwPWEodGhpcy5vcHRpb25zLnRlbXBsYXRlKSwxIT10aGlzLiR0aXAubGVuZ3RoKSl0aHJvdyBuZXcgRXJyb3IodGhpcy50eXBlK1wiIGB0ZW1wbGF0ZWAgb3B0aW9uIG11c3QgY29uc2lzdCBvZiBleGFjdGx5IDEgdG9wLWxldmVsIGVsZW1lbnQhXCIpO3JldHVybiB0aGlzLiR0aXB9LGMucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIudG9vbHRpcC1hcnJvd1wiKX0sYy5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSEwfSxjLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExfSxjLnByb3RvdHlwZS50b2dnbGVFbmFibGVkPWZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSF0aGlzLmVuYWJsZWR9LGMucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihiKXt2YXIgYz10aGlzO2ImJihjPWEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlKSxjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpKSxiPyhjLmluU3RhdGUuY2xpY2s9IWMuaW5TdGF0ZS5jbGljayxjLmlzSW5TdGF0ZVRydWUoKT9jLmVudGVyKGMpOmMubGVhdmUoYykpOmMudGlwKCkuaGFzQ2xhc3MoXCJpblwiKT9jLmxlYXZlKGMpOmMuZW50ZXIoYyl9LGMucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpLHRoaXMuaGlkZShmdW5jdGlvbigpe2EuJGVsZW1lbnQub2ZmKFwiLlwiK2EudHlwZSkucmVtb3ZlRGF0YShcImJzLlwiK2EudHlwZSksYS4kdGlwJiZhLiR0aXAuZGV0YWNoKCksYS4kdGlwPW51bGwsYS4kYXJyb3c9bnVsbCxhLiR2aWV3cG9ydD1udWxsfSl9O3ZhciBkPWEuZm4udG9vbHRpcDthLmZuLnRvb2x0aXA9YixhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3I9YyxhLmZuLnRvb2x0aXAubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnRvb2x0aXA9ZCx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnBvcG92ZXJcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjsoZXx8IS9kZXN0cm95fGhpZGUvLnRlc3QoYikpJiYoZXx8ZC5kYXRhKFwiYnMucG9wb3ZlclwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKSl9KX12YXIgYz1mdW5jdGlvbihhLGIpe3RoaXMuaW5pdChcInBvcG92ZXJcIixhLGIpfTtpZighYS5mbi50b29sdGlwKXRocm93IG5ldyBFcnJvcihcIlBvcG92ZXIgcmVxdWlyZXMgdG9vbHRpcC5qc1wiKTtjLlZFUlNJT049XCIzLjMuNVwiLGMuREVGQVVMVFM9YS5leHRlbmQoe30sYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yLkRFRkFVTFRTLHtwbGFjZW1lbnQ6XCJyaWdodFwiLHRyaWdnZXI6XCJjbGlja1wiLGNvbnRlbnQ6XCJcIix0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGVcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nfSksYy5wcm90b3R5cGU9YS5leHRlbmQoe30sYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yLnByb3RvdHlwZSksYy5wcm90b3R5cGUuY29uc3RydWN0b3I9YyxjLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBjLkRFRkFVTFRTfSxjLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50aXAoKSxiPXRoaXMuZ2V0VGl0bGUoKSxjPXRoaXMuZ2V0Q29udGVudCgpO2EuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShiKSxhLmZpbmQoXCIucG9wb3Zlci1jb250ZW50XCIpLmNoaWxkcmVuKCkuZGV0YWNoKCkuZW5kKClbdGhpcy5vcHRpb25zLmh0bWw/XCJzdHJpbmdcIj09dHlwZW9mIGM/XCJodG1sXCI6XCJhcHBlbmRcIjpcInRleHRcIl0oYyksYS5yZW1vdmVDbGFzcyhcImZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluXCIpLGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmh0bWwoKXx8YS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaGlkZSgpfSxjLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKXx8dGhpcy5nZXRDb250ZW50KCl9LGMucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50LGI9dGhpcy5vcHRpb25zO3JldHVybiBhLmF0dHIoXCJkYXRhLWNvbnRlbnRcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmNvbnRlbnQ/Yi5jb250ZW50LmNhbGwoYVswXSk6Yi5jb250ZW50KX0sYy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi5hcnJvd1wiKX07dmFyIGQ9YS5mbi5wb3BvdmVyO2EuZm4ucG9wb3Zlcj1iLGEuZm4ucG9wb3Zlci5Db25zdHJ1Y3Rvcj1jLGEuZm4ucG9wb3Zlci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4ucG9wb3Zlcj1kLHRoaXN9fShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGMsZCl7dGhpcy4kYm9keT1hKGRvY3VtZW50LmJvZHkpLHRoaXMuJHNjcm9sbEVsZW1lbnQ9YShhKGMpLmlzKGRvY3VtZW50LmJvZHkpP3dpbmRvdzpjKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYi5ERUZBVUxUUyxkKSx0aGlzLnNlbGVjdG9yPSh0aGlzLm9wdGlvbnMudGFyZ2V0fHxcIlwiKStcIiAubmF2IGxpID4gYVwiLHRoaXMub2Zmc2V0cz1bXSx0aGlzLnRhcmdldHM9W10sdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLnNjcm9sbEhlaWdodD0wLHRoaXMuJHNjcm9sbEVsZW1lbnQub24oXCJzY3JvbGwuYnMuc2Nyb2xsc3B5XCIsYS5wcm94eSh0aGlzLnByb2Nlc3MsdGhpcykpLHRoaXMucmVmcmVzaCgpLHRoaXMucHJvY2VzcygpfWZ1bmN0aW9uIGMoYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5zY3JvbGxzcHlcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYyYmYztlfHxkLmRhdGEoXCJicy5zY3JvbGxzcHlcIixlPW5ldyBiKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBjJiZlW2NdKCl9KX1iLlZFUlNJT049XCIzLjMuNVwiLGIuREVGQVVMVFM9e29mZnNldDoxMH0sYi5wcm90b3R5cGUuZ2V0U2Nyb2xsSGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0fHxNYXRoLm1heCh0aGlzLiRib2R5WzBdLnNjcm9sbEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KX0sYi5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbigpe3ZhciBiPXRoaXMsYz1cIm9mZnNldFwiLGQ9MDt0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuc2Nyb2xsSGVpZ2h0PXRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksYS5pc1dpbmRvdyh0aGlzLiRzY3JvbGxFbGVtZW50WzBdKXx8KGM9XCJwb3NpdGlvblwiLGQ9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSksdGhpcy4kYm9keS5maW5kKHRoaXMuc2VsZWN0b3IpLm1hcChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZT1iLmRhdGEoXCJ0YXJnZXRcIil8fGIuYXR0cihcImhyZWZcIiksZj0vXiMuLy50ZXN0KGUpJiZhKGUpO3JldHVybiBmJiZmLmxlbmd0aCYmZi5pcyhcIjp2aXNpYmxlXCIpJiZbW2ZbY10oKS50b3ArZCxlXV18fG51bGx9KS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGFbMF0tYlswXX0pLmVhY2goZnVuY3Rpb24oKXtiLm9mZnNldHMucHVzaCh0aGlzWzBdKSxiLnRhcmdldHMucHVzaCh0aGlzWzFdKX0pfSxiLnByb3RvdHlwZS5wcm9jZXNzPWZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpK3RoaXMub3B0aW9ucy5vZmZzZXQsYz10aGlzLmdldFNjcm9sbEhlaWdodCgpLGQ9dGhpcy5vcHRpb25zLm9mZnNldCtjLXRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KCksZT10aGlzLm9mZnNldHMsZj10aGlzLnRhcmdldHMsZz10aGlzLmFjdGl2ZVRhcmdldDtpZih0aGlzLnNjcm9sbEhlaWdodCE9YyYmdGhpcy5yZWZyZXNoKCksYj49ZClyZXR1cm4gZyE9KGE9ZltmLmxlbmd0aC0xXSkmJnRoaXMuYWN0aXZhdGUoYSk7aWYoZyYmYjxlWzBdKXJldHVybiB0aGlzLmFjdGl2ZVRhcmdldD1udWxsLHRoaXMuY2xlYXIoKTtmb3IoYT1lLmxlbmd0aDthLS07KWchPWZbYV0mJmI+PWVbYV0mJih2b2lkIDA9PT1lW2ErMV18fGI8ZVthKzFdKSYmdGhpcy5hY3RpdmF0ZShmW2FdKX0sYi5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYil7dGhpcy5hY3RpdmVUYXJnZXQ9Yix0aGlzLmNsZWFyKCk7dmFyIGM9dGhpcy5zZWxlY3RvcisnW2RhdGEtdGFyZ2V0PVwiJytiKydcIl0sJyt0aGlzLnNlbGVjdG9yKydbaHJlZj1cIicrYisnXCJdJyxkPWEoYykucGFyZW50cyhcImxpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO2QucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoJiYoZD1kLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksXHJcbmQudHJpZ2dlcihcImFjdGl2YXRlLmJzLnNjcm9sbHNweVwiKX0sYi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXthKHRoaXMuc2VsZWN0b3IpLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIGQ9YS5mbi5zY3JvbGxzcHk7YS5mbi5zY3JvbGxzcHk9YyxhLmZuLnNjcm9sbHNweS5Db25zdHJ1Y3Rvcj1iLGEuZm4uc2Nyb2xsc3B5Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5zY3JvbGxzcHk9ZCx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkLmJzLnNjcm9sbHNweS5kYXRhLWFwaVwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yy5jYWxsKGIsYi5kYXRhKCkpfSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnRhYlwiKTtlfHxkLmRhdGEoXCJicy50YWJcIixlPW5ldyBjKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGM9ZnVuY3Rpb24oYil7dGhpcy5lbGVtZW50PWEoYil9O2MuVkVSU0lPTj1cIjMuMy41XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5lbGVtZW50LGM9Yi5jbG9zZXN0KFwidWw6bm90KC5kcm9wZG93bi1tZW51KVwiKSxkPWIuZGF0YShcInRhcmdldFwiKTtpZihkfHwoZD1iLmF0dHIoXCJocmVmXCIpLGQ9ZCYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKSwhYi5wYXJlbnQoXCJsaVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7dmFyIGU9Yy5maW5kKFwiLmFjdGl2ZTpsYXN0IGFcIiksZj1hLkV2ZW50KFwiaGlkZS5icy50YWJcIix7cmVsYXRlZFRhcmdldDpiWzBdfSksZz1hLkV2ZW50KFwic2hvdy5icy50YWJcIix7cmVsYXRlZFRhcmdldDplWzBdfSk7aWYoZS50cmlnZ2VyKGYpLGIudHJpZ2dlcihnKSwhZy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBoPWEoZCk7dGhpcy5hY3RpdmF0ZShiLmNsb3Nlc3QoXCJsaVwiKSxjKSx0aGlzLmFjdGl2YXRlKGgsaC5wYXJlbnQoKSxmdW5jdGlvbigpe2UudHJpZ2dlcih7dHlwZTpcImhpZGRlbi5icy50YWJcIixyZWxhdGVkVGFyZ2V0OmJbMF19KSxiLnRyaWdnZXIoe3R5cGU6XCJzaG93bi5icy50YWJcIixyZWxhdGVkVGFyZ2V0OmVbMF19KX0pfX19LGMucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKGIsZCxlKXtmdW5jdGlvbiBmKCl7Zy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5maW5kKFwiPiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZW5kKCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksYi5hZGRDbGFzcyhcImFjdGl2ZVwiKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxoPyhiWzBdLm9mZnNldFdpZHRoLGIuYWRkQ2xhc3MoXCJpblwiKSk6Yi5yZW1vdmVDbGFzcyhcImZhZGVcIiksYi5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJmIuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLGUmJmUoKX12YXIgZz1kLmZpbmQoXCI+IC5hY3RpdmVcIiksaD1lJiZhLnN1cHBvcnQudHJhbnNpdGlvbiYmKGcubGVuZ3RoJiZnLmhhc0NsYXNzKFwiZmFkZVwiKXx8ISFkLmZpbmQoXCI+IC5mYWRlXCIpLmxlbmd0aCk7Zy5sZW5ndGgmJmg/Zy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOmYoKSxnLnJlbW92ZUNsYXNzKFwiaW5cIil9O3ZhciBkPWEuZm4udGFiO2EuZm4udGFiPWIsYS5mbi50YWIuQ29uc3RydWN0b3I9YyxhLmZuLnRhYi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4udGFiPWQsdGhpc307dmFyIGU9ZnVuY3Rpb24oYyl7Yy5wcmV2ZW50RGVmYXVsdCgpLGIuY2FsbChhKHRoaXMpLFwic2hvd1wiKX07YShkb2N1bWVudCkub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxlKS5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJwaWxsXCJdJyxlKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmFmZml4XCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7ZXx8ZC5kYXRhKFwiYnMuYWZmaXhcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgYz1mdW5jdGlvbihiLGQpe3RoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQpLHRoaXMuJHRhcmdldD1hKHRoaXMub3B0aW9ucy50YXJnZXQpLm9uKFwic2Nyb2xsLmJzLmFmZml4LmRhdGEtYXBpXCIsYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcykpLm9uKFwiY2xpY2suYnMuYWZmaXguZGF0YS1hcGlcIixhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AsdGhpcykpLHRoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLmFmZml4ZWQ9bnVsbCx0aGlzLnVucGluPW51bGwsdGhpcy5waW5uZWRPZmZzZXQ9bnVsbCx0aGlzLmNoZWNrUG9zaXRpb24oKX07Yy5WRVJTSU9OPVwiMy4zLjVcIixjLlJFU0VUPVwiYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbVwiLGMuREVGQVVMVFM9e29mZnNldDowLHRhcmdldDp3aW5kb3d9LGMucHJvdG90eXBlLmdldFN0YXRlPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxmPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCksZz10aGlzLiR0YXJnZXQuaGVpZ2h0KCk7aWYobnVsbCE9YyYmXCJ0b3BcIj09dGhpcy5hZmZpeGVkKXJldHVybiBjPmU/XCJ0b3BcIjohMTtpZihcImJvdHRvbVwiPT10aGlzLmFmZml4ZWQpcmV0dXJuIG51bGwhPWM/ZSt0aGlzLnVucGluPD1mLnRvcD8hMTpcImJvdHRvbVwiOmEtZD49ZStnPyExOlwiYm90dG9tXCI7dmFyIGg9bnVsbD09dGhpcy5hZmZpeGVkLGk9aD9lOmYudG9wLGo9aD9nOmI7cmV0dXJuIG51bGwhPWMmJmM+PWU/XCJ0b3BcIjpudWxsIT1kJiZpK2o+PWEtZD9cImJvdHRvbVwiOiExfSxjLnByb3RvdHlwZS5nZXRQaW5uZWRPZmZzZXQ9ZnVuY3Rpb24oKXtpZih0aGlzLnBpbm5lZE9mZnNldClyZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjLlJFU0VUKS5hZGRDbGFzcyhcImFmZml4XCIpO3ZhciBhPXRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxiPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCk7cmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0PWIudG9wLWF9LGMucHJvdG90eXBlLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wPWZ1bmN0aW9uKCl7c2V0VGltZW91dChhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbix0aGlzKSwxKX0sYy5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbj1mdW5jdGlvbigpe2lmKHRoaXMuJGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSl7dmFyIGI9dGhpcy4kZWxlbWVudC5oZWlnaHQoKSxkPXRoaXMub3B0aW9ucy5vZmZzZXQsZT1kLnRvcCxmPWQuYm90dG9tLGc9TWF0aC5tYXgoYShkb2N1bWVudCkuaGVpZ2h0KCksYShkb2N1bWVudC5ib2R5KS5oZWlnaHQoKSk7XCJvYmplY3RcIiE9dHlwZW9mIGQmJihmPWU9ZCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKGU9ZC50b3AodGhpcy4kZWxlbWVudCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJihmPWQuYm90dG9tKHRoaXMuJGVsZW1lbnQpKTt2YXIgaD10aGlzLmdldFN0YXRlKGcsYixlLGYpO2lmKHRoaXMuYWZmaXhlZCE9aCl7bnVsbCE9dGhpcy51bnBpbiYmdGhpcy4kZWxlbWVudC5jc3MoXCJ0b3BcIixcIlwiKTt2YXIgaT1cImFmZml4XCIrKGg/XCItXCIraDpcIlwiKSxqPWEuRXZlbnQoaStcIi5icy5hZmZpeFwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoaiksai5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47dGhpcy5hZmZpeGVkPWgsdGhpcy51bnBpbj1cImJvdHRvbVwiPT1oP3RoaXMuZ2V0UGlubmVkT2Zmc2V0KCk6bnVsbCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGMuUkVTRVQpLmFkZENsYXNzKGkpLnRyaWdnZXIoaS5yZXBsYWNlKFwiYWZmaXhcIixcImFmZml4ZWRcIikrXCIuYnMuYWZmaXhcIil9XCJib3R0b21cIj09aCYmdGhpcy4kZWxlbWVudC5vZmZzZXQoe3RvcDpnLWItZn0pfX07dmFyIGQ9YS5mbi5hZmZpeDthLmZuLmFmZml4PWIsYS5mbi5hZmZpeC5Db25zdHJ1Y3Rvcj1jLGEuZm4uYWZmaXgubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmFmZml4PWQsdGhpc30sYSh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtc3B5PVwiYWZmaXhcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuZGF0YSgpO2Qub2Zmc2V0PWQub2Zmc2V0fHx7fSxudWxsIT1kLm9mZnNldEJvdHRvbSYmKGQub2Zmc2V0LmJvdHRvbT1kLm9mZnNldEJvdHRvbSksbnVsbCE9ZC5vZmZzZXRUb3AmJihkLm9mZnNldC50b3A9ZC5vZmZzZXRUb3ApLGIuY2FsbChjLGQpfSl9KX0oalF1ZXJ5KTsiLCIvKipcclxuKiBAcHJlc2VydmUgSFRNTDUgU2hpdiBwcmV2My43LjEgfCBAYWZhcmthcyBAamRhbHRvbiBAam9uX25lYWwgQHJlbSB8IE1JVC9HUEwyIExpY2Vuc2VkXHJcbiovXHJcbjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xyXG4vKmpzaGludCBldmlsOnRydWUgKi9cclxuICAvKiogdmVyc2lvbiAqL1xyXG4gIHZhciB2ZXJzaW9uID0gJzMuNy4wJztcclxuXHJcbiAgLyoqIFByZXNldCBvcHRpb25zICovXHJcbiAgdmFyIG9wdGlvbnMgPSB3aW5kb3cuaHRtbDUgfHwge307XHJcblxyXG4gIC8qKiBVc2VkIHRvIHNraXAgcHJvYmxlbSBlbGVtZW50cyAqL1xyXG4gIHZhciByZVNraXAgPSAvXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaTtcclxuXHJcbiAgLyoqIE5vdCBhbGwgZWxlbWVudHMgY2FuIGJlIGNsb25lZCBpbiBJRSAqKi9cclxuICB2YXIgc2F2ZUNsb25lcyA9IC9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaTtcclxuXHJcbiAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIGRlZmF1bHQgaHRtbDUgc3R5bGVzICovXHJcbiAgdmFyIHN1cHBvcnRzSHRtbDVTdHlsZXM7XHJcblxyXG4gIC8qKiBOYW1lIG9mIHRoZSBleHBhbmRvLCB0byB3b3JrIHdpdGggbXVsdGlwbGUgZG9jdW1lbnRzIG9yIHRvIHJlLXNoaXYgb25lIGRvY3VtZW50ICovXHJcbiAgdmFyIGV4cGFuZG8gPSAnX2h0bWw1c2hpdic7XHJcblxyXG4gIC8qKiBUaGUgaWQgZm9yIHRoZSB0aGUgZG9jdW1lbnRzIGV4cGFuZG8gKi9cclxuICB2YXIgZXhwYW5JRCA9IDA7XHJcblxyXG4gIC8qKiBDYWNoZWQgZGF0YSBmb3IgZWFjaCBkb2N1bWVudCAqL1xyXG4gIHZhciBleHBhbmRvRGF0YSA9IHt9O1xyXG5cclxuICAvKiogRGV0ZWN0IHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdW5rbm93biBlbGVtZW50cyAqL1xyXG4gIHZhciBzdXBwb3J0c1Vua25vd25FbGVtZW50cztcclxuXHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmlubmVySFRNTCA9ICc8eHl6PjwveHl6Pic7XHJcbiAgICAgICAgLy9pZiB0aGUgaGlkZGVuIHByb3BlcnR5IGlzIGltcGxlbWVudGVkIHdlIGNhbiBhc3N1bWUsIHRoYXQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYmFzaWMgSFRNTDUgU3R5bGVzXHJcbiAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9ICgnaGlkZGVuJyBpbiBhKTtcclxuXHJcbiAgICAgICAgc3VwcG9ydHNVbmtub3duRWxlbWVudHMgPSBhLmNoaWxkTm9kZXMubGVuZ3RoID09IDEgfHwgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gYXNzaWduIGEgZmFsc2UgcG9zaXRpdmUgaWYgdW5hYmxlIHRvIHNoaXZcclxuICAgICAgICAgIChkb2N1bWVudC5jcmVhdGVFbGVtZW50KSgnYScpO1xyXG4gICAgICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0eXBlb2YgZnJhZy5jbG9uZU5vZGUgPT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgICAgICAgICAgdHlwZW9mIGZyYWcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9PSAndW5kZWZpbmVkJyB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgZnJhZy5jcmVhdGVFbGVtZW50ID09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgLy8gYXNzaWduIGEgZmFsc2UgcG9zaXRpdmUgaWYgZGV0ZWN0aW9uIGZhaWxzID0+IHVuYWJsZSB0byBzaGl2XHJcbiAgICAgIHN1cHBvcnRzSHRtbDVTdHlsZXMgPSB0cnVlO1xyXG4gICAgICBzdXBwb3J0c1Vua25vd25FbGVtZW50cyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH0oKSk7XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgc3R5bGUgc2hlZXQgd2l0aCB0aGUgZ2l2ZW4gQ1NTIHRleHQgYW5kIGFkZHMgaXQgdG8gdGhlIGRvY3VtZW50LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNzc1RleHQgVGhlIENTUyB0ZXh0LlxyXG4gICAqIEByZXR1cm5zIHtTdHlsZVNoZWV0fSBUaGUgc3R5bGUgZWxlbWVudC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBhZGRTdHlsZVNoZWV0KG93bmVyRG9jdW1lbnQsIGNzc1RleHQpIHtcclxuICAgIHZhciBwID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgcGFyZW50ID0gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIHAuaW5uZXJIVE1MID0gJ3g8c3R5bGU+JyArIGNzc1RleHQgKyAnPC9zdHlsZT4nO1xyXG4gICAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUocC5sYXN0Q2hpbGQsIHBhcmVudC5maXJzdENoaWxkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGBodG1sNS5lbGVtZW50c2AgYXMgYW4gYXJyYXkuXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IG9mIHNoaXZlZCBlbGVtZW50IG5vZGUgbmFtZXMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2V0RWxlbWVudHMoKSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBodG1sNS5lbGVtZW50cztcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudHMgPT0gJ3N0cmluZycgPyBlbGVtZW50cy5zcGxpdCgnICcpIDogZWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGRhdGEgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gZG9jdW1lbnRcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBvZiBkYXRhLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpIHtcclxuICAgIHZhciBkYXRhID0gZXhwYW5kb0RhdGFbb3duZXJEb2N1bWVudFtleHBhbmRvXV07XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICBkYXRhID0ge307XHJcbiAgICAgICAgZXhwYW5JRCsrO1xyXG4gICAgICAgIG93bmVyRG9jdW1lbnRbZXhwYW5kb10gPSBleHBhbklEO1xyXG4gICAgICAgIGV4cGFuZG9EYXRhW2V4cGFuSURdID0gZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyBhIHNoaXZlZCBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gbm9kZU5hbWUgYW5kIGRvY3VtZW50XHJcbiAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lIG5hbWUgb2YgdGhlIGVsZW1lbnRcclxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzaGl2ZWQgZWxlbWVudC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKXtcclxuICAgIGlmICghb3duZXJEb2N1bWVudCkge1xyXG4gICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgIH1cclxuICAgIGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcclxuICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KTtcclxuICAgIH1cclxuICAgIHZhciBub2RlO1xyXG5cclxuICAgIGlmIChkYXRhLmNhY2hlW25vZGVOYW1lXSkge1xyXG4gICAgICAgIG5vZGUgPSBkYXRhLmNhY2hlW25vZGVOYW1lXS5jbG9uZU5vZGUoKTtcclxuICAgIH0gZWxzZSBpZiAoc2F2ZUNsb25lcy50ZXN0KG5vZGVOYW1lKSkge1xyXG4gICAgICAgIG5vZGUgPSAoZGF0YS5jYWNoZVtub2RlTmFtZV0gPSBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpKS5jbG9uZU5vZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZSA9IGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXZvaWQgYWRkaW5nIHNvbWUgZWxlbWVudHMgdG8gZnJhZ21lbnRzIGluIElFIDwgOSBiZWNhdXNlXHJcbiAgICAvLyAqIEF0dHJpYnV0ZXMgbGlrZSBgbmFtZWAgb3IgYHR5cGVgIGNhbm5vdCBiZSBzZXQvY2hhbmdlZCBvbmNlIGFuIGVsZW1lbnRcclxuICAgIC8vICAgaXMgaW5zZXJ0ZWQgaW50byBhIGRvY3VtZW50L2ZyYWdtZW50XHJcbiAgICAvLyAqIExpbmsgZWxlbWVudHMgd2l0aCBgc3JjYCBhdHRyaWJ1dGVzIHRoYXQgYXJlIGluYWNjZXNzaWJsZSwgYXMgd2l0aFxyXG4gICAgLy8gICBhIDQwMyByZXNwb25zZSwgd2lsbCBjYXVzZSB0aGUgdGFiL3dpbmRvdyB0byBjcmFzaFxyXG4gICAgLy8gKiBTY3JpcHQgZWxlbWVudHMgYXBwZW5kZWQgdG8gZnJhZ21lbnRzIHdpbGwgZXhlY3V0ZSB3aGVuIHRoZWlyIGBzcmNgXHJcbiAgICAvLyAgIG9yIGB0ZXh0YCBwcm9wZXJ0eSBpcyBzZXRcclxuICAgIHJldHVybiBub2RlLmNhbkhhdmVDaGlsZHJlbiAmJiAhcmVTa2lwLnRlc3Qobm9kZU5hbWUpICYmICFub2RlLnRhZ1VybiA/IGRhdGEuZnJhZy5hcHBlbmRDaGlsZChub2RlKSA6IG5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIGEgc2hpdmVkIERvY3VtZW50RnJhZ21lbnQgZm9yIHRoZSBnaXZlbiBkb2N1bWVudFxyXG4gICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGNvbnRleHQgZG9jdW1lbnQuXHJcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHNoaXZlZCBEb2N1bWVudEZyYWdtZW50LlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQob3duZXJEb2N1bWVudCwgZGF0YSl7XHJcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZihzdXBwb3J0c1Vua25vd25FbGVtZW50cyl7XHJcbiAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IGRhdGEgfHwgZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XHJcbiAgICB2YXIgY2xvbmUgPSBkYXRhLmZyYWcuY2xvbmVOb2RlKCksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgZWxlbXMgPSBnZXRFbGVtZW50cygpLFxyXG4gICAgICAgIGwgPSBlbGVtcy5sZW5ndGg7XHJcbiAgICBmb3IoO2k8bDtpKyspe1xyXG4gICAgICAgIGNsb25lLmNyZWF0ZUVsZW1lbnQoZWxlbXNbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hpdnMgdGhlIGBjcmVhdGVFbGVtZW50YCBhbmQgYGNyZWF0ZURvY3VtZW50RnJhZ21lbnRgIG1ldGhvZHMgb2YgdGhlIGRvY3VtZW50LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtEb2N1bWVudHxEb2N1bWVudEZyYWdtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc2hpdk1ldGhvZHMob3duZXJEb2N1bWVudCwgZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhLmNhY2hlKSB7XHJcbiAgICAgICAgZGF0YS5jYWNoZSA9IHt9O1xyXG4gICAgICAgIGRhdGEuY3JlYXRlRWxlbSA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudDtcclxuICAgICAgICBkYXRhLmNyZWF0ZUZyYWcgPSBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ7XHJcbiAgICAgICAgZGF0YS5mcmFnID0gZGF0YS5jcmVhdGVGcmFnKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKG5vZGVOYW1lKSB7XHJcbiAgICAgIC8vYWJvcnQgc2hpdlxyXG4gICAgICBpZiAoIWh0bWw1LnNoaXZNZXRob2RzKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChub2RlTmFtZSwgb3duZXJEb2N1bWVudCwgZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9IEZ1bmN0aW9uKCdoLGYnLCAncmV0dXJuIGZ1bmN0aW9uKCl7JyArXHJcbiAgICAgICd2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50OycgK1xyXG4gICAgICAnaC5zaGl2TWV0aG9kcyYmKCcgK1xyXG4gICAgICAgIC8vIHVucm9sbCB0aGUgYGNyZWF0ZUVsZW1lbnRgIGNhbGxzXHJcbiAgICAgICAgZ2V0RWxlbWVudHMoKS5qb2luKCkucmVwbGFjZSgvW1xcd1xcLTpdKy9nLCBmdW5jdGlvbihub2RlTmFtZSkge1xyXG4gICAgICAgICAgZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKTtcclxuICAgICAgICAgIGRhdGEuZnJhZy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcclxuICAgICAgICAgIHJldHVybiAnYyhcIicgKyBub2RlTmFtZSArICdcIiknO1xyXG4gICAgICAgIH0pICtcclxuICAgICAgJyk7cmV0dXJuIG59J1xyXG4gICAgKShodG1sNSwgZGF0YS5mcmFnKTtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAvKipcclxuICAgKiBTaGl2cyB0aGUgZ2l2ZW4gZG9jdW1lbnQuXHJcbiAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQgdG8gc2hpdi5cclxuICAgKiBAcmV0dXJucyB7RG9jdW1lbnR9IFRoZSBzaGl2ZWQgZG9jdW1lbnQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc2hpdkRvY3VtZW50KG93bmVyRG9jdW1lbnQpIHtcclxuICAgIGlmICghb3duZXJEb2N1bWVudCkge1xyXG4gICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgIH1cclxuICAgIHZhciBkYXRhID0gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XHJcblxyXG4gICAgaWYgKGh0bWw1LnNoaXZDU1MgJiYgIXN1cHBvcnRzSHRtbDVTdHlsZXMgJiYgIWRhdGEuaGFzQ1NTKSB7XHJcbiAgICAgIGRhdGEuaGFzQ1NTID0gISFhZGRTdHlsZVNoZWV0KG93bmVyRG9jdW1lbnQsXHJcbiAgICAgICAgLy8gY29ycmVjdHMgYmxvY2sgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRTYvNy84LzlcclxuICAgICAgICAnYXJ0aWNsZSxhc2lkZSxkaWFsb2csZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfScgK1xyXG4gICAgICAgIC8vIGFkZHMgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRTYvNy84LzlcclxuICAgICAgICAnbWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH0nICtcclxuICAgICAgICAvLyBoaWRlcyBub24tcmVuZGVyZWQgZWxlbWVudHNcclxuICAgICAgICAndGVtcGxhdGV7ZGlzcGxheTpub25lfSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICghc3VwcG9ydHNVbmtub3duRWxlbWVudHMpIHtcclxuICAgICAgc2hpdk1ldGhvZHMob3duZXJEb2N1bWVudCwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYGh0bWw1YCBvYmplY3QgaXMgZXhwb3NlZCBzbyB0aGF0IG1vcmUgZWxlbWVudHMgY2FuIGJlIHNoaXZlZCBhbmRcclxuICAgKiBleGlzdGluZyBzaGl2aW5nIGNhbiBiZSBkZXRlY3RlZCBvbiBpZnJhbWVzLlxyXG4gICAqIEB0eXBlIE9iamVjdFxyXG4gICAqIEBleGFtcGxlXHJcbiAgICpcclxuICAgKiAvLyBvcHRpb25zIGNhbiBiZSBjaGFuZ2VkIGJlZm9yZSB0aGUgc2NyaXB0IGlzIGluY2x1ZGVkXHJcbiAgICogaHRtbDUgPSB7ICdlbGVtZW50cyc6ICdtYXJrIHNlY3Rpb24nLCAnc2hpdkNTUyc6IGZhbHNlLCAnc2hpdk1ldGhvZHMnOiBmYWxzZSB9O1xyXG4gICAqL1xyXG4gIHZhciBodG1sNSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Ygbm9kZSBuYW1lcyBvZiB0aGUgZWxlbWVudHMgdG8gc2hpdi5cclxuICAgICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAgICogQHR5cGUgQXJyYXl8U3RyaW5nXHJcbiAgICAgKi9cclxuICAgICdlbGVtZW50cyc6IG9wdGlvbnMuZWxlbWVudHMgfHwgJ2FiYnIgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiZGkgY2FudmFzIGRhdGEgZGF0YWxpc3QgZGV0YWlscyBkaWFsb2cgZmlnY2FwdGlvbiBmaWd1cmUgZm9vdGVyIGhlYWRlciBoZ3JvdXAgbWFpbiBtYXJrIG1ldGVyIG5hdiBvdXRwdXQgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRlbXBsYXRlIHRpbWUgdmlkZW8nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3VycmVudCB2ZXJzaW9uIG9mIGh0bWw1c2hpdlxyXG4gICAgICovXHJcbiAgICAndmVyc2lvbic6IHZlcnNpb24sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgSFRNTDUgc3R5bGUgc2hlZXQgc2hvdWxkIGJlIGluc2VydGVkLlxyXG4gICAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgICdzaGl2Q1NTJzogKG9wdGlvbnMuc2hpdkNTUyAhPT0gZmFsc2UpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgZXF1YWwgdG8gdHJ1ZSBpZiBhIGJyb3dzZXIgc3VwcG9ydHMgY3JlYXRpbmcgdW5rbm93bi9IVE1MNSBlbGVtZW50c1xyXG4gICAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICAgKiBAdHlwZSBib29sZWFuXHJcbiAgICAgKi9cclxuICAgICdzdXBwb3J0c1Vua25vd25FbGVtZW50cyc6IHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGRvY3VtZW50J3MgYGNyZWF0ZUVsZW1lbnRgIGFuZCBgY3JlYXRlRG9jdW1lbnRGcmFnbWVudGBcclxuICAgICAqIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJ3cml0dGVuLlxyXG4gICAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgICdzaGl2TWV0aG9kcyc6IChvcHRpb25zLnNoaXZNZXRob2RzICE9PSBmYWxzZSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0cmluZyB0byBkZXNjcmliZSB0aGUgdHlwZSBvZiBgaHRtbDVgIG9iamVjdCAoXCJkZWZhdWx0XCIgb3IgXCJkZWZhdWx0IHByaW50XCIpLlxyXG4gICAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgJ3R5cGUnOiAnZGVmYXVsdCcsXHJcblxyXG4gICAgLy8gc2hpdnMgdGhlIGRvY3VtZW50IGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGBodG1sNWAgb2JqZWN0IG9wdGlvbnNcclxuICAgICdzaGl2RG9jdW1lbnQnOiBzaGl2RG9jdW1lbnQsXHJcblxyXG4gICAgLy9jcmVhdGVzIGEgc2hpdmVkIGVsZW1lbnRcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQsXHJcblxyXG4gICAgLy9jcmVhdGVzIGEgc2hpdmVkIGRvY3VtZW50RnJhZ21lbnRcclxuICAgIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGNyZWF0ZURvY3VtZW50RnJhZ21lbnRcclxuICB9O1xyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLy8gZXhwb3NlIGh0bWw1XHJcbiAgd2luZG93Lmh0bWw1ID0gaHRtbDU7XHJcblxyXG4gIC8vIHNoaXYgdGhlIGRvY3VtZW50XHJcbiAgc2hpdkRvY3VtZW50KGRvY3VtZW50KTtcclxuXHJcbn0odGhpcywgZG9jdW1lbnQpKTtcclxuIiwiLypnbG9iYWwgalF1ZXJ5ICovXHJcbi8qIVxyXG4qIEZpdFRleHQuanMgMS4yXHJcbipcclxuKiBDb3B5cmlnaHQgMjAxMSwgRGF2ZSBSdXBlcnQgaHR0cDovL2RhdmVydXBlcnQuY29tXHJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIFdURlBMIGxpY2Vuc2VcclxuKiBodHRwOi8vc2FtLnpveS5vcmcvd3RmcGwvXHJcbipcclxuKiBEYXRlOiBUaHUgTWF5IDA1IDE0OjIzOjAwIDIwMTEgLTA2MDBcclxuKi9cclxuXHJcbihmdW5jdGlvbiggJCApe1xyXG5cclxuICAkLmZuLmZpdFRleHQgPSBmdW5jdGlvbigga29tcHJlc3Nvciwgb3B0aW9ucyApIHtcclxuXHJcbiAgICAvLyBTZXR1cCBvcHRpb25zXHJcbiAgICB2YXIgY29tcHJlc3NvciA9IGtvbXByZXNzb3IgfHwgMSxcclxuICAgICAgICBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcclxuICAgICAgICAgICdtaW5Gb250U2l6ZScgOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXHJcbiAgICAgICAgICAnbWF4Rm9udFNpemUnIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8gU3RvcmUgdGhlIG9iamVjdFxyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgLy8gUmVzaXplcigpIHJlc2l6ZXMgaXRlbXMgYmFzZWQgb24gdGhlIG9iamVjdCB3aWR0aCBkaXZpZGVkIGJ5IHRoZSBjb21wcmVzc29yICogMTBcclxuICAgICAgdmFyIHJlc2l6ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHRoaXMuY3NzKCdmb250LXNpemUnLCBNYXRoLm1heChNYXRoLm1pbigkdGhpcy53aWR0aCgpIC8gKGNvbXByZXNzb3IqMTApLCBwYXJzZUZsb2F0KHNldHRpbmdzLm1heEZvbnRTaXplKSksIHBhcnNlRmxvYXQoc2V0dGluZ3MubWluRm9udFNpemUpKSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBDYWxsIG9uY2UgdG8gc2V0LlxyXG4gICAgICByZXNpemVyKCk7XHJcblxyXG4gICAgICAvLyBDYWxsIG9uIHJlc2l6ZS4gT3BlcmEgZGVib3VuY2VzIHRoZWlyIHJlc2l6ZSBieSBkZWZhdWx0LlxyXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5maXR0ZXh0IG9yaWVudGF0aW9uY2hhbmdlLmZpdHRleHQnLCByZXNpemVyKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbn0pKCBqUXVlcnkgKTtcclxuIiwiLyohIGpRdWVyeSB2MS45LjEgfCAoYykgMjAwNSwgMjAxMiBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZVxuLy9AIHNvdXJjZU1hcHBpbmdVUkw9anF1ZXJ5Lm1pbi5tYXBcbiovKGZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPXR5cGVvZiB0LG89ZS5kb2N1bWVudCxhPWUubG9jYXRpb24scz1lLmpRdWVyeSx1PWUuJCxsPXt9LGM9W10scD1cIjEuOS4xXCIsZj1jLmNvbmNhdCxkPWMucHVzaCxoPWMuc2xpY2UsZz1jLmluZGV4T2YsbT1sLnRvU3RyaW5nLHk9bC5oYXNPd25Qcm9wZXJ0eSx2PXAudHJpbSxiPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBiLmZuLmluaXQoZSx0LHIpfSx4PS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx3PS9cXFMrL2csVD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csTj0vXig/Oig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEM9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLGs9L15bXFxdLDp7fVxcc10qJC8sRT0vKD86Xnw6fCwpKD86XFxzKlxcWykrL2csUz0vXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVtcXGRhLWZBLUZdezR9KS9nLEE9L1wiW15cIlxcXFxcXHJcXG5dKlwifHRydWV8ZmFsc2V8bnVsbHwtPyg/OlxcZCtcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvZyxqPS9eLW1zLS8sRD0vLShbXFxkYS16XSkvZ2ksTD1mdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9LEg9ZnVuY3Rpb24oZSl7KG8uYWRkRXZlbnRMaXN0ZW5lcnx8XCJsb2FkXCI9PT1lLnR5cGV8fFwiY29tcGxldGVcIj09PW8ucmVhZHlTdGF0ZSkmJihxKCksYi5yZWFkeSgpKX0scT1mdW5jdGlvbigpe28uYWRkRXZlbnRMaXN0ZW5lcj8oby5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEgsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixILCExKSk6KG8uZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixIKSxlLmRldGFjaEV2ZW50KFwib25sb2FkXCIsSCkpfTtiLmZuPWIucHJvdG90eXBlPXtqcXVlcnk6cCxjb25zdHJ1Y3RvcjpiLGluaXQ6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLGE7aWYoIWUpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGk9XCI8XCI9PT1lLmNoYXJBdCgwKSYmXCI+XCI9PT1lLmNoYXJBdChlLmxlbmd0aC0xKSYmZS5sZW5ndGg+PTM/W251bGwsZSxudWxsXTpOLmV4ZWMoZSksIWl8fCFpWzFdJiZuKXJldHVybiFufHxuLmpxdWVyeT8obnx8cikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKG4pLmZpbmQoZSk7aWYoaVsxXSl7aWYobj1uIGluc3RhbmNlb2YgYj9uWzBdOm4sYi5tZXJnZSh0aGlzLGIucGFyc2VIVE1MKGlbMV0sbiYmbi5ub2RlVHlwZT9uLm93bmVyRG9jdW1lbnR8fG46bywhMCkpLEMudGVzdChpWzFdKSYmYi5pc1BsYWluT2JqZWN0KG4pKWZvcihpIGluIG4pYi5pc0Z1bmN0aW9uKHRoaXNbaV0pP3RoaXNbaV0obltpXSk6dGhpcy5hdHRyKGksbltpXSk7cmV0dXJuIHRoaXN9aWYoYT1vLmdldEVsZW1lbnRCeUlkKGlbMl0pLGEmJmEucGFyZW50Tm9kZSl7aWYoYS5pZCE9PWlbMl0pcmV0dXJuIHIuZmluZChlKTt0aGlzLmxlbmd0aD0xLHRoaXNbMF09YX1yZXR1cm4gdGhpcy5jb250ZXh0PW8sdGhpcy5zZWxlY3Rvcj1lLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTpiLmlzRnVuY3Rpb24oZSk/ci5yZWFkeShlKTooZS5zZWxlY3RvciE9PXQmJih0aGlzLnNlbGVjdG9yPWUuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWUuY29udGV4dCksYi5tYWtlQXJyYXkoZSx0aGlzKSl9LHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBoLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT90aGlzLnRvQXJyYXkoKTowPmU/dGhpc1t0aGlzLmxlbmd0aCtlXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHQuY29udGV4dD10aGlzLmNvbnRleHQsdH0sZWFjaDpmdW5jdGlvbihlLHQpe3JldHVybiBiLmVhY2godGhpcyxlLHQpfSxyZWFkeTpmdW5jdGlvbihlKXtyZXR1cm4gYi5yZWFkeS5wcm9taXNlKCkuZG9uZShlKSx0aGlzfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhoLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKDA+ZT90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhuPj0wJiZ0Pm4/W3RoaXNbbl1dOltdKX0sbWFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhiLm1hcCh0aGlzLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4sdCl9KSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6ZCxzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0sYi5mbi5pbml0LnByb3RvdHlwZT1iLmZuLGIuZXh0ZW5kPWIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsbixyLGksbyxhLHM9YXJndW1lbnRzWzBdfHx7fSx1PTEsbD1hcmd1bWVudHMubGVuZ3RoLGM9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgcyYmKGM9cyxzPWFyZ3VtZW50c1sxXXx8e30sdT0yKSxcIm9iamVjdFwiPT10eXBlb2Ygc3x8Yi5pc0Z1bmN0aW9uKHMpfHwocz17fSksbD09PXUmJihzPXRoaXMsLS11KTtsPnU7dSsrKWlmKG51bGwhPShvPWFyZ3VtZW50c1t1XSkpZm9yKGkgaW4gbyllPXNbaV0scj1vW2ldLHMhPT1yJiYoYyYmciYmKGIuaXNQbGFpbk9iamVjdChyKXx8KG49Yi5pc0FycmF5KHIpKSk/KG4/KG49ITEsYT1lJiZiLmlzQXJyYXkoZSk/ZTpbXSk6YT1lJiZiLmlzUGxhaW5PYmplY3QoZSk/ZTp7fSxzW2ldPWIuZXh0ZW5kKGMsYSxyKSk6ciE9PXQmJihzW2ldPXIpKTtyZXR1cm4gc30sYi5leHRlbmQoe25vQ29uZmxpY3Q6ZnVuY3Rpb24odCl7cmV0dXJuIGUuJD09PWImJihlLiQ9dSksdCYmZS5qUXVlcnk9PT1iJiYoZS5qUXVlcnk9cyksYn0saXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oZSl7ZT9iLnJlYWR5V2FpdCsrOmIucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihlKXtpZihlPT09ITA/IS0tYi5yZWFkeVdhaXQ6IWIuaXNSZWFkeSl7aWYoIW8uYm9keSlyZXR1cm4gc2V0VGltZW91dChiLnJlYWR5KTtiLmlzUmVhZHk9ITAsZSE9PSEwJiYtLWIucmVhZHlXYWl0PjB8fChuLnJlc29sdmVXaXRoKG8sW2JdKSxiLmZuLnRyaWdnZXImJmIobykudHJpZ2dlcihcInJlYWR5XCIpLm9mZihcInJlYWR5XCIpKX19LGlzRnVuY3Rpb246ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT09Yi50eXBlKGUpfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiYXJyYXlcIj09PWIudHlwZShlKX0saXNXaW5kb3c6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PWUud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bFttLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe2lmKCFlfHxcIm9iamVjdFwiIT09Yi50eXBlKGUpfHxlLm5vZGVUeXBlfHxiLmlzV2luZG93KGUpKXJldHVybiExO3RyeXtpZihlLmNvbnN0cnVjdG9yJiYheS5jYWxsKGUsXCJjb25zdHJ1Y3RvclwiKSYmIXkuY2FsbChlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2gobil7cmV0dXJuITF9dmFyIHI7Zm9yKHIgaW4gZSk7cmV0dXJuIHI9PT10fHx5LmNhbGwoZSxyKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBFcnJvcihlKX0scGFyc2VIVE1MOmZ1bmN0aW9uKGUsdCxuKXtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHQ9dHx8bzt2YXIgcj1DLmV4ZWMoZSksaT0hbiYmW107cmV0dXJuIHI/W3QuY3JlYXRlRWxlbWVudChyWzFdKV06KHI9Yi5idWlsZEZyYWdtZW50KFtlXSx0LGkpLGkmJmIoaSkucmVtb3ZlKCksYi5tZXJnZShbXSxyLmNoaWxkTm9kZXMpKX0scGFyc2VKU09OOmZ1bmN0aW9uKG4pe3JldHVybiBlLkpTT04mJmUuSlNPTi5wYXJzZT9lLkpTT04ucGFyc2Uobik6bnVsbD09PW4/bjpcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49Yi50cmltKG4pLG4mJmsudGVzdChuLnJlcGxhY2UoUyxcIkBcIikucmVwbGFjZShBLFwiXVwiKS5yZXBsYWNlKEUsXCJcIikpKT9GdW5jdGlvbihcInJldHVybiBcIituKSgpOihiLmVycm9yKFwiSW52YWxpZCBKU09OOiBcIituKSx0KX0scGFyc2VYTUw6ZnVuY3Rpb24obil7dmFyIHIsaTtpZighbnx8XCJzdHJpbmdcIiE9dHlwZW9mIG4pcmV0dXJuIG51bGw7dHJ5e2UuRE9NUGFyc2VyPyhpPW5ldyBET01QYXJzZXIscj1pLnBhcnNlRnJvbVN0cmluZyhuLFwidGV4dC94bWxcIikpOihyPW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKSxyLmFzeW5jPVwiZmFsc2VcIixyLmxvYWRYTUwobikpfWNhdGNoKG8pe3I9dH1yZXR1cm4gciYmci5kb2N1bWVudEVsZW1lbnQmJiFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxiLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK24pLHJ9LG5vb3A6ZnVuY3Rpb24oKXt9LGdsb2JhbEV2YWw6ZnVuY3Rpb24odCl7dCYmYi50cmltKHQpJiYoZS5leGVjU2NyaXB0fHxmdW5jdGlvbih0KXtlLmV2YWwuY2FsbChlLHQpfSkodCl9LGNhbWVsQ2FzZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKGosXCJtcy1cIikucmVwbGFjZShELEwpfSxub2RlTmFtZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9MCxvPWUubGVuZ3RoLGE9TShlKTtpZihuKXtpZihhKXtmb3IoO28+aTtpKyspaWYocj10LmFwcGx5KGVbaV0sbikscj09PSExKWJyZWFrfWVsc2UgZm9yKGkgaW4gZSlpZihyPXQuYXBwbHkoZVtpXSxuKSxyPT09ITEpYnJlYWt9ZWxzZSBpZihhKXtmb3IoO28+aTtpKyspaWYocj10LmNhbGwoZVtpXSxpLGVbaV0pLHI9PT0hMSlicmVha31lbHNlIGZvcihpIGluIGUpaWYocj10LmNhbGwoZVtpXSxpLGVbaV0pLHI9PT0hMSlicmVhaztyZXR1cm4gZX0sdHJpbTp2JiYhdi5jYWxsKFwiXFx1ZmVmZlxcdTAwYTBcIik/ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjp2LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShULFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKE0oT2JqZWN0KGUpKT9iLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOmQuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih0KXtpZihnKXJldHVybiBnLmNhbGwodCxlLG4pO2ZvcihyPXQubGVuZ3RoLG49bj8wPm4/TWF0aC5tYXgoMCxyK24pOm46MDtyPm47bisrKWlmKG4gaW4gdCYmdFtuXT09PWUpcmV0dXJuIG59cmV0dXJuLTF9LG1lcmdlOmZ1bmN0aW9uKGUsbil7dmFyIHI9bi5sZW5ndGgsaT1lLmxlbmd0aCxvPTA7aWYoXCJudW1iZXJcIj09dHlwZW9mIHIpZm9yKDtyPm87bysrKWVbaSsrXT1uW29dO2Vsc2Ugd2hpbGUobltvXSE9PXQpZVtpKytdPW5bbysrXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPVtdLG89MCxhPWUubGVuZ3RoO2ZvcihuPSEhbjthPm87bysrKXI9ISF0KGVbb10sbyksbiE9PXImJmkucHVzaChlW29dKTtyZXR1cm4gaX0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPTAsbz1lLmxlbmd0aCxhPU0oZSkscz1bXTtpZihhKWZvcig7bz5pO2krKylyPXQoZVtpXSxpLG4pLG51bGwhPXImJihzW3MubGVuZ3RoXT1yKTtlbHNlIGZvcihpIGluIGUpcj10KGVbaV0saSxuKSxudWxsIT1yJiYoc1tzLmxlbmd0aF09cik7cmV0dXJuIGYuYXBwbHkoW10scyl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihlLG4pe3ZhciByLGksbztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgbiYmKG89ZVtuXSxuPWUsZT1vKSxiLmlzRnVuY3Rpb24oZSk/KHI9aC5jYWxsKGFyZ3VtZW50cywyKSxpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkobnx8dGhpcyxyLmNvbmNhdChoLmNhbGwoYXJndW1lbnRzKSkpfSxpLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8Yi5ndWlkKyssaSk6dH0sYWNjZXNzOmZ1bmN0aW9uKGUsbixyLGksbyxhLHMpe3ZhciB1PTAsbD1lLmxlbmd0aCxjPW51bGw9PXI7aWYoXCJvYmplY3RcIj09PWIudHlwZShyKSl7bz0hMDtmb3IodSBpbiByKWIuYWNjZXNzKGUsbix1LHJbdV0sITAsYSxzKX1lbHNlIGlmKGkhPT10JiYobz0hMCxiLmlzRnVuY3Rpb24oaSl8fChzPSEwKSxjJiYocz8obi5jYWxsKGUsaSksbj1udWxsKTooYz1uLG49ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBjLmNhbGwoYihlKSxuKX0pKSxuKSlmb3IoO2w+dTt1KyspbihlW3VdLHIscz9pOmkuY2FsbChlW3VdLHUsbihlW3VdLHIpKSk7cmV0dXJuIG8/ZTpjP24uY2FsbChlKTpsP24oZVswXSxyKTphfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX19KSxiLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24odCl7aWYoIW4paWYobj1iLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09by5yZWFkeVN0YXRlKXNldFRpbWVvdXQoYi5yZWFkeSk7ZWxzZSBpZihvLmFkZEV2ZW50TGlzdGVuZXIpby5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEgsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixILCExKTtlbHNle28uYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixIKSxlLmF0dGFjaEV2ZW50KFwib25sb2FkXCIsSCk7dmFyIHI9ITE7dHJ5e3I9bnVsbD09ZS5mcmFtZUVsZW1lbnQmJm8uZG9jdW1lbnRFbGVtZW50fWNhdGNoKGkpe31yJiZyLmRvU2Nyb2xsJiZmdW5jdGlvbiBhKCl7aWYoIWIuaXNSZWFkeSl7dHJ5e3IuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGUpe3JldHVybiBzZXRUaW1lb3V0KGEsNTApfXEoKSxiLnJlYWR5KCl9fSgpfXJldHVybiBuLnByb21pc2UodCl9LGIuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtsW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBNKGUpe3ZhciB0PWUubGVuZ3RoLG49Yi50eXBlKGUpO3JldHVybiBiLmlzV2luZG93KGUpPyExOjE9PT1lLm5vZGVUeXBlJiZ0PyEwOlwiYXJyYXlcIj09PW58fFwiZnVuY3Rpb25cIiE9PW4mJigwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MCYmdC0xIGluIGUpfXI9YihvKTt2YXIgXz17fTtmdW5jdGlvbiBGKGUpe3ZhciB0PV9bZV09e307cmV0dXJuIGIuZWFjaChlLm1hdGNoKHcpfHxbXSxmdW5jdGlvbihlLG4pe3Rbbl09ITB9KSx0fWIuQ2FsbGJhY2tzPWZ1bmN0aW9uKGUpe2U9XCJzdHJpbmdcIj09dHlwZW9mIGU/X1tlXXx8RihlKTpiLmV4dGVuZCh7fSxlKTt2YXIgbixyLGksbyxhLHMsdT1bXSxsPSFlLm9uY2UmJltdLGM9ZnVuY3Rpb24odCl7Zm9yKHI9ZS5tZW1vcnkmJnQsaT0hMCxhPXN8fDAscz0wLG89dS5sZW5ndGgsbj0hMDt1JiZvPmE7YSsrKWlmKHVbYV0uYXBwbHkodFswXSx0WzFdKT09PSExJiZlLnN0b3BPbkZhbHNlKXtyPSExO2JyZWFrfW49ITEsdSYmKGw/bC5sZW5ndGgmJmMobC5zaGlmdCgpKTpyP3U9W106cC5kaXNhYmxlKCkpfSxwPXthZGQ6ZnVuY3Rpb24oKXtpZih1KXt2YXIgdD11Lmxlbmd0aDsoZnVuY3Rpb24gaSh0KXtiLmVhY2godCxmdW5jdGlvbih0LG4pe3ZhciByPWIudHlwZShuKTtcImZ1bmN0aW9uXCI9PT1yP2UudW5pcXVlJiZwLmhhcyhuKXx8dS5wdXNoKG4pOm4mJm4ubGVuZ3RoJiZcInN0cmluZ1wiIT09ciYmaShuKX0pfSkoYXJndW1lbnRzKSxuP289dS5sZW5ndGg6ciYmKHM9dCxjKHIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHUmJmIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgcjt3aGlsZSgocj1iLmluQXJyYXkodCx1LHIpKT4tMSl1LnNwbGljZShyLDEpLG4mJihvPj1yJiZvLS0sYT49ciYmYS0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT9iLmluQXJyYXkoZSx1KT4tMTohKCF1fHwhdS5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiB1PVtdLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gdT1sPXI9dCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiF1fSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGw9dCxyfHxwLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hbH0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD10fHxbXSx0PVtlLHQuc2xpY2U/dC5zbGljZSgpOnRdLCF1fHxpJiYhbHx8KG4/bC5wdXNoKHQpOmModCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gcC5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWl9fTtyZXR1cm4gcH0sYi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciB0PVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsYi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLGIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsYi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxuPVwicGVuZGluZ1wiLHI9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG59LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBpLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cztyZXR1cm4gYi5EZWZlcnJlZChmdW5jdGlvbihuKXtiLmVhY2godCxmdW5jdGlvbih0LG8pe3ZhciBhPW9bMF0scz1iLmlzRnVuY3Rpb24oZVt0XSkmJmVbdF07aVtvWzFdXShmdW5jdGlvbigpe3ZhciBlPXMmJnMuYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJmIuaXNGdW5jdGlvbihlLnByb21pc2UpP2UucHJvbWlzZSgpLmRvbmUobi5yZXNvbHZlKS5mYWlsKG4ucmVqZWN0KS5wcm9ncmVzcyhuLm5vdGlmeSk6blthK1wiV2l0aFwiXSh0aGlzPT09cj9uLnByb21pc2UoKTp0aGlzLHM/W2VdOmFyZ3VtZW50cyl9KX0pLGU9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9iLmV4dGVuZChlLHIpOnJ9fSxpPXt9O3JldHVybiByLnBpcGU9ci50aGVuLGIuZWFjaCh0LGZ1bmN0aW9uKGUsbyl7dmFyIGE9b1syXSxzPW9bM107cltvWzFdXT1hLmFkZCxzJiZhLmFkZChmdW5jdGlvbigpe249c30sdFsxXmVdWzJdLmRpc2FibGUsdFsyXVsyXS5sb2NrKSxpW29bMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGlbb1swXStcIldpdGhcIl0odGhpcz09PWk/cjp0aGlzLGFyZ3VtZW50cyksdGhpc30saVtvWzBdK1wiV2l0aFwiXT1hLmZpcmVXaXRofSksci5wcm9taXNlKGkpLGUmJmUuY2FsbChpLGkpLGl9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWguY2FsbChhcmd1bWVudHMpLHI9bi5sZW5ndGgsaT0xIT09cnx8ZSYmYi5pc0Z1bmN0aW9uKGUucHJvbWlzZSk/cjowLG89MT09PWk/ZTpiLkRlZmVycmVkKCksYT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3RbZV09dGhpcyxuW2VdPWFyZ3VtZW50cy5sZW5ndGg+MT9oLmNhbGwoYXJndW1lbnRzKTpyLG49PT1zP28ubm90aWZ5V2l0aCh0LG4pOi0taXx8by5yZXNvbHZlV2l0aCh0LG4pfX0scyx1LGw7aWYocj4xKWZvcihzPUFycmF5KHIpLHU9QXJyYXkociksbD1BcnJheShyKTtyPnQ7dCsrKW5bdF0mJmIuaXNGdW5jdGlvbihuW3RdLnByb21pc2UpP25bdF0ucHJvbWlzZSgpLmRvbmUoYSh0LGwsbikpLmZhaWwoby5yZWplY3QpLnByb2dyZXNzKGEodCx1LHMpKTotLWk7cmV0dXJuIGl8fG8ucmVzb2x2ZVdpdGgobCxuKSxvLnByb21pc2UoKX19KSxiLnN1cHBvcnQ9ZnVuY3Rpb24oKXt2YXIgdCxuLHIsYSxzLHUsbCxjLHAsZixkPW8uY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihkLnNldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiLFwidFwiKSxkLmlubmVySFRNTD1cIiAgPGxpbmsvPjx0YWJsZT48L3RhYmxlPjxhIGhyZWY9Jy9hJz5hPC9hPjxpbnB1dCB0eXBlPSdjaGVja2JveCcvPlwiLG49ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikscj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXSwhbnx8IXJ8fCFuLmxlbmd0aClyZXR1cm57fTtzPW8uY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxsPXMuYXBwZW5kQ2hpbGQoby5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxhPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXSxyLnN0eWxlLmNzc1RleHQ9XCJ0b3A6MXB4O2Zsb2F0OmxlZnQ7b3BhY2l0eTouNVwiLHQ9e2dldFNldEF0dHJpYnV0ZTpcInRcIiE9PWQuY2xhc3NOYW1lLGxlYWRpbmdXaGl0ZXNwYWNlOjM9PT1kLmZpcnN0Q2hpbGQubm9kZVR5cGUsdGJvZHk6IWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKS5sZW5ndGgsaHRtbFNlcmlhbGl6ZTohIWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpLmxlbmd0aCxzdHlsZTovdG9wLy50ZXN0KHIuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpLGhyZWZOb3JtYWxpemVkOlwiL2FcIj09PXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxvcGFjaXR5Oi9eMC41Ly50ZXN0KHIuc3R5bGUub3BhY2l0eSksY3NzRmxvYXQ6ISFyLnN0eWxlLmNzc0Zsb2F0LGNoZWNrT246ISFhLnZhbHVlLG9wdFNlbGVjdGVkOmwuc2VsZWN0ZWQsZW5jdHlwZTohIW8uY3JlYXRlRWxlbWVudChcImZvcm1cIikuZW5jdHlwZSxodG1sNUNsb25lOlwiPDpuYXY+PC86bmF2PlwiIT09by5jcmVhdGVFbGVtZW50KFwibmF2XCIpLmNsb25lTm9kZSghMCkub3V0ZXJIVE1MLGJveE1vZGVsOlwiQ1NTMUNvbXBhdFwiPT09by5jb21wYXRNb2RlLGRlbGV0ZUV4cGFuZG86ITAsbm9DbG9uZUV2ZW50OiEwLGlubGluZUJsb2NrTmVlZHNMYXlvdXQ6ITEsc2hyaW5rV3JhcEJsb2NrczohMSxyZWxpYWJsZU1hcmdpblJpZ2h0OiEwLGJveFNpemluZ1JlbGlhYmxlOiEwLHBpeGVsUG9zaXRpb246ITF9LGEuY2hlY2tlZD0hMCx0Lm5vQ2xvbmVDaGVja2VkPWEuY2xvbmVOb2RlKCEwKS5jaGVja2VkLHMuZGlzYWJsZWQ9ITAsdC5vcHREaXNhYmxlZD0hbC5kaXNhYmxlZDt0cnl7ZGVsZXRlIGQudGVzdH1jYXRjaChoKXt0LmRlbGV0ZUV4cGFuZG89ITF9YT1vLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksdC5pbnB1dD1cIlwiPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSxhLnZhbHVlPVwidFwiLGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksdC5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZSxhLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcInRcIiksYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLHU9by5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksdS5hcHBlbmRDaGlsZChhKSx0LmFwcGVuZENoZWNrZWQ9YS5jaGVja2VkLHQuY2hlY2tDbG9uZT11LmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxkLmF0dGFjaEV2ZW50JiYoZC5hdHRhY2hFdmVudChcIm9uY2xpY2tcIixmdW5jdGlvbigpe3Qubm9DbG9uZUV2ZW50PSExfSksZC5jbG9uZU5vZGUoITApLmNsaWNrKCkpO2ZvcihmIGlue3N1Ym1pdDohMCxjaGFuZ2U6ITAsZm9jdXNpbjohMH0pZC5zZXRBdHRyaWJ1dGUoYz1cIm9uXCIrZixcInRcIiksdFtmK1wiQnViYmxlc1wiXT1jIGluIGV8fGQuYXR0cmlidXRlc1tjXS5leHBhbmRvPT09ITE7cmV0dXJuIGQuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGQuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHQuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWQuc3R5bGUuYmFja2dyb3VuZENsaXAsYihmdW5jdGlvbigpe3ZhciBuLHIsYSxzPVwicGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O1wiLHU9by5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07dSYmKG49by5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG4uc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDotOTk5OXB4O21hcmdpbi10b3A6MXB4XCIsdS5hcHBlbmRDaGlsZChuKS5hcHBlbmRDaGlsZChkKSxkLmlubmVySFRNTD1cIjx0YWJsZT48dHI+PHRkPjwvdGQ+PHRkPnQ8L3RkPjwvdHI+PC90YWJsZT5cIixhPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSxhWzBdLnN0eWxlLmNzc1RleHQ9XCJwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7ZGlzcGxheTpub25lXCIscD0wPT09YVswXS5vZmZzZXRIZWlnaHQsYVswXS5zdHlsZS5kaXNwbGF5PVwiXCIsYVsxXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQucmVsaWFibGVIaWRkZW5PZmZzZXRzPXAmJjA9PT1hWzBdLm9mZnNldEhlaWdodCxkLmlubmVySFRNTD1cIlwiLGQuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjFweDtib3JkZXI6MXB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6NHB4O21hcmdpbi10b3A6MSU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjElO1wiLHQuYm94U2l6aW5nPTQ9PT1kLm9mZnNldFdpZHRoLHQuZG9lc05vdEluY2x1ZGVNYXJnaW5JbkJvZHlPZmZzZXQ9MSE9PXUub2Zmc2V0VG9wLGUuZ2V0Q29tcHV0ZWRTdHlsZSYmKHQucGl4ZWxQb3NpdGlvbj1cIjElXCIhPT0oZS5nZXRDb21wdXRlZFN0eWxlKGQsbnVsbCl8fHt9KS50b3AsdC5ib3hTaXppbmdSZWxpYWJsZT1cIjRweFwiPT09KGUuZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpfHx7d2lkdGg6XCI0cHhcIn0pLndpZHRoLHI9ZC5hcHBlbmRDaGlsZChvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHIuc3R5bGUuY3NzVGV4dD1kLnN0eWxlLmNzc1RleHQ9cyxyLnN0eWxlLm1hcmdpblJpZ2h0PXIuc3R5bGUud2lkdGg9XCIwXCIsZC5zdHlsZS53aWR0aD1cIjFweFwiLHQucmVsaWFibGVNYXJnaW5SaWdodD0hcGFyc2VGbG9hdCgoZS5nZXRDb21wdXRlZFN0eWxlKHIsbnVsbCl8fHt9KS5tYXJnaW5SaWdodCkpLHR5cGVvZiBkLnN0eWxlLnpvb20hPT1pJiYoZC5pbm5lckhUTUw9XCJcIixkLnN0eWxlLmNzc1RleHQ9cytcIndpZHRoOjFweDtwYWRkaW5nOjFweDtkaXNwbGF5OmlubGluZTt6b29tOjFcIix0LmlubGluZUJsb2NrTmVlZHNMYXlvdXQ9Mz09PWQub2Zmc2V0V2lkdGgsZC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixkLmlubmVySFRNTD1cIjxkaXY+PC9kaXY+XCIsZC5maXJzdENoaWxkLnN0eWxlLndpZHRoPVwiNXB4XCIsdC5zaHJpbmtXcmFwQmxvY2tzPTMhPT1kLm9mZnNldFdpZHRoLHQuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmKHUuc3R5bGUuem9vbT0xKSksdS5yZW1vdmVDaGlsZChuKSxuPWQ9YT1yPW51bGwpfSksbj1zPXU9bD1yPWE9bnVsbCx0fSgpO3ZhciBPPS8oPzpcXHtbXFxzXFxTXSpcXH18XFxbW1xcc1xcU10qXFxdKSQvLEI9LyhbQS1aXSkvZztmdW5jdGlvbiBQKGUsbixyLGkpe2lmKGIuYWNjZXB0RGF0YShlKSl7dmFyIG8sYSxzPWIuZXhwYW5kbyx1PVwic3RyaW5nXCI9PXR5cGVvZiBuLGw9ZS5ub2RlVHlwZSxwPWw/Yi5jYWNoZTplLGY9bD9lW3NdOmVbc10mJnM7aWYoZiYmcFtmXSYmKGl8fHBbZl0uZGF0YSl8fCF1fHxyIT09dClyZXR1cm4gZnx8KGw/ZVtzXT1mPWMucG9wKCl8fGIuZ3VpZCsrOmY9cykscFtmXXx8KHBbZl09e30sbHx8KHBbZl0udG9KU09OPWIubm9vcCkpLChcIm9iamVjdFwiPT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiPT10eXBlb2YgbikmJihpP3BbZl09Yi5leHRlbmQocFtmXSxuKTpwW2ZdLmRhdGE9Yi5leHRlbmQocFtmXS5kYXRhLG4pKSxvPXBbZl0saXx8KG8uZGF0YXx8KG8uZGF0YT17fSksbz1vLmRhdGEpLHIhPT10JiYob1tiLmNhbWVsQ2FzZShuKV09ciksdT8oYT1vW25dLG51bGw9PWEmJihhPW9bYi5jYW1lbENhc2UobildKSk6YT1vLGF9fWZ1bmN0aW9uIFIoZSx0LG4pe2lmKGIuYWNjZXB0RGF0YShlKSl7dmFyIHIsaSxvLGE9ZS5ub2RlVHlwZSxzPWE/Yi5jYWNoZTplLHU9YT9lW2IuZXhwYW5kb106Yi5leHBhbmRvO2lmKHNbdV0pe2lmKHQmJihvPW4/c1t1XTpzW3VdLmRhdGEpKXtiLmlzQXJyYXkodCk/dD10LmNvbmNhdChiLm1hcCh0LGIuY2FtZWxDYXNlKSk6dCBpbiBvP3Q9W3RdOih0PWIuY2FtZWxDYXNlKHQpLHQ9dCBpbiBvP1t0XTp0LnNwbGl0KFwiIFwiKSk7Zm9yKHI9MCxpPXQubGVuZ3RoO2k+cjtyKyspZGVsZXRlIG9bdFtyXV07aWYoIShuPyQ6Yi5pc0VtcHR5T2JqZWN0KShvKSlyZXR1cm59KG58fChkZWxldGUgc1t1XS5kYXRhLCQoc1t1XSkpKSYmKGE/Yi5jbGVhbkRhdGEoW2VdLCEwKTpiLnN1cHBvcnQuZGVsZXRlRXhwYW5kb3x8cyE9cy53aW5kb3c/ZGVsZXRlIHNbdV06c1t1XT1udWxsKX19fWIuZXh0ZW5kKHtjYWNoZTp7fSxleHBhbmRvOlwialF1ZXJ5XCIrKHArTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksbm9EYXRhOntlbWJlZDohMCxvYmplY3Q6XCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIixhcHBsZXQ6ITB9LGhhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZS5ub2RlVHlwZT9iLmNhY2hlW2VbYi5leHBhbmRvXV06ZVtiLmV4cGFuZG9dLCEhZSYmISQoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBQKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe3JldHVybiBSKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUChlLHQsbiwhMCl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFIoZSx0LCEwKX0sYWNjZXB0RGF0YTpmdW5jdGlvbihlKXtpZihlLm5vZGVUeXBlJiYxIT09ZS5ub2RlVHlwZSYmOSE9PWUubm9kZVR5cGUpcmV0dXJuITE7dmFyIHQ9ZS5ub2RlTmFtZSYmYi5ub0RhdGFbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXTtyZXR1cm4hdHx8dCE9PSEwJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzaWRcIik9PT10fX0pLGIuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGUsbil7dmFyIHIsaSxvPXRoaXNbMF0sYT0wLHM9bnVsbDtpZihlPT09dCl7aWYodGhpcy5sZW5ndGgmJihzPWIuZGF0YShvKSwxPT09by5ub2RlVHlwZSYmIWIuX2RhdGEobyxcInBhcnNlZEF0dHJzXCIpKSl7Zm9yKHI9by5hdHRyaWJ1dGVzO3IubGVuZ3RoPmE7YSsrKWk9clthXS5uYW1lLGkuaW5kZXhPZihcImRhdGEtXCIpfHwoaT1iLmNhbWVsQ2FzZShpLnNsaWNlKDUpKSxXKG8saSxzW2ldKSk7Yi5fZGF0YShvLFwicGFyc2VkQXR0cnNcIiwhMCl9cmV0dXJuIHN9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5kYXRhKHRoaXMsZSl9KTpiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKG4pe3JldHVybiBuPT09dD9vP1cobyxlLGIuZGF0YShvLGUpKTpudWxsOih0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmRhdGEodGhpcyxlLG4pfSksdCl9LG51bGwsbixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2IucmVtb3ZlRGF0YSh0aGlzLGUpfSl9fSk7ZnVuY3Rpb24gVyhlLG4scil7aWYocj09PXQmJjE9PT1lLm5vZGVUeXBlKXt2YXIgaT1cImRhdGEtXCIrbi5yZXBsYWNlKEIsXCItJDFcIikudG9Mb3dlckNhc2UoKTtpZihyPWUuZ2V0QXR0cmlidXRlKGkpLFwic3RyaW5nXCI9PXR5cGVvZiByKXt0cnl7cj1cInRydWVcIj09PXI/ITA6XCJmYWxzZVwiPT09cj8hMTpcIm51bGxcIj09PXI/bnVsbDorcitcIlwiPT09cj8rcjpPLnRlc3Qocik/Yi5wYXJzZUpTT04ocik6cn1jYXRjaChvKXt9Yi5kYXRhKGUsbixyKX1lbHNlIHI9dH1yZXR1cm4gcn1mdW5jdGlvbiAkKGUpe3ZhciB0O2Zvcih0IGluIGUpaWYoKFwiZGF0YVwiIT09dHx8IWIuaXNFbXB0eU9iamVjdChlW3RdKSkmJlwidG9KU09OXCIhPT10KXJldHVybiExO3JldHVybiEwfWIuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLG4scil7dmFyIGk7cmV0dXJuIGU/KG49KG58fFwiZnhcIikrXCJxdWV1ZVwiLGk9Yi5fZGF0YShlLG4pLHImJighaXx8Yi5pc0FycmF5KHIpP2k9Yi5fZGF0YShlLG4sYi5tYWtlQXJyYXkocikpOmkucHVzaChyKSksaXx8W10pOnR9LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1iLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPWIuX3F1ZXVlSG9va3MoZSx0KSxhPWZ1bmN0aW9uKCl7Yi5kZXF1ZXVlKGUsdCl9O1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksby5jdXI9aSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGEsbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBiLl9kYXRhKGUsbil8fGIuX2RhdGEoZSxuLHtlbXB0eTpiLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe2IuX3JlbW92ZURhdGEoZSx0K1wicXVldWVcIiksYi5fcmVtb3ZlRGF0YShlLG4pfSl9KX19KSxiLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSxuKXt2YXIgcj0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYobj1lLGU9XCJmeFwiLHItLSkscj5hcmd1bWVudHMubGVuZ3RoP2IucXVldWUodGhpc1swXSxlKTpuPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWIucXVldWUodGhpcyxlLG4pO2IuX3F1ZXVlSG9va3ModGhpcyxlKSxcImZ4XCI9PT1lJiZcImlucHJvZ3Jlc3NcIiE9PXRbMF0mJmIuZGVxdWV1ZSh0aGlzLGUpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZGVxdWV1ZSh0aGlzLGUpfSl9LGRlbGF5OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9Yi5meD9iLmZ4LnNwZWVkc1tlXXx8ZTplLHQ9dHx8XCJmeFwiLHRoaXMucXVldWUodCxmdW5jdGlvbih0LG4pe3ZhciByPXNldFRpbWVvdXQodCxlKTtuLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocil9fSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLG4pe3ZhciByLGk9MSxvPWIuRGVmZXJyZWQoKSxhPXRoaXMscz10aGlzLmxlbmd0aCx1PWZ1bmN0aW9uKCl7LS1pfHxvLnJlc29sdmVXaXRoKGEsW2FdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJihuPWUsZT10KSxlPWV8fFwiZnhcIjt3aGlsZShzLS0pcj1iLl9kYXRhKGFbc10sZStcInF1ZXVlSG9va3NcIiksciYmci5lbXB0eSYmKGkrKyxyLmVtcHR5LmFkZCh1KSk7cmV0dXJuIHUoKSxvLnByb21pc2Uobil9fSk7dmFyIEkseixYPS9bXFx0XFxyXFxuXS9nLFU9L1xcci9nLFY9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdCkkL2ksWT0vXig/OmF8YXJlYSkkL2ksSj0vXig/OmNoZWNrZWR8c2VsZWN0ZWR8YXV0b2ZvY3VzfGF1dG9wbGF5fGFzeW5jfGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkKSQvaSxHPS9eKD86Y2hlY2tlZHxzZWxlY3RlZCkkL2ksUT1iLnN1cHBvcnQuZ2V0U2V0QXR0cmlidXRlLEs9Yi5zdXBwb3J0LmlucHV0O2IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsYi5hdHRyLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLnJlbW92ZUF0dHIodGhpcyxlKX0pfSxwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsYi5wcm9wLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiBlPWIucHJvcEZpeFtlXXx8ZSx0aGlzLmVhY2goZnVuY3Rpb24oKXt0cnl7dGhpc1tlXT10LGRlbGV0ZSB0aGlzW2VdfWNhdGNoKG4pe319KX0sYWRkQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhPTAscz10aGlzLmxlbmd0aCx1PVwic3RyaW5nXCI9PXR5cGVvZiBlJiZlO2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykuYWRkQ2xhc3MoZS5jYWxsKHRoaXMsdCx0aGlzLmNsYXNzTmFtZSkpfSk7aWYodSlmb3IodD0oZXx8XCJcIikubWF0Y2godyl8fFtdO3M+YTthKyspaWYobj10aGlzW2FdLHI9MT09PW4ubm9kZVR5cGUmJihuLmNsYXNzTmFtZT8oXCIgXCIrbi5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIik6XCIgXCIpKXtvPTA7d2hpbGUoaT10W28rK10pMD5yLmluZGV4T2YoXCIgXCIraStcIiBcIikmJihyKz1pK1wiIFwiKTtuLmNsYXNzTmFtZT1iLnRyaW0ocil9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYT0wLHM9dGhpcy5sZW5ndGgsdT0wPT09YXJndW1lbnRzLmxlbmd0aHx8XCJzdHJpbmdcIj09dHlwZW9mIGUmJmU7aWYoYi5pc0Z1bmN0aW9uKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7Yih0aGlzKS5yZW1vdmVDbGFzcyhlLmNhbGwodGhpcyx0LHRoaXMuY2xhc3NOYW1lKSl9KTtpZih1KWZvcih0PShlfHxcIlwiKS5tYXRjaCh3KXx8W107cz5hO2ErKylpZihuPXRoaXNbYV0scj0xPT09bi5ub2RlVHlwZSYmKG4uY2xhc3NOYW1lPyhcIiBcIituLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShYLFwiIFwiKTpcIlwiKSl7bz0wO3doaWxlKGk9dFtvKytdKXdoaWxlKHIuaW5kZXhPZihcIiBcIitpK1wiIFwiKT49MClyPXIucmVwbGFjZShcIiBcIitpK1wiIFwiLFwiIFwiKTtuLmNsYXNzTmFtZT1lP2IudHJpbShyKTpcIlwifXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihlLHQpe3ZhciBuPXR5cGVvZiBlLHI9XCJib29sZWFuXCI9PXR5cGVvZiB0O3JldHVybiBiLmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKG4pe2IodGhpcykudG9nZ2xlQ2xhc3MoZS5jYWxsKHRoaXMsbix0aGlzLmNsYXNzTmFtZSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1uKXt2YXIgbyxhPTAscz1iKHRoaXMpLHU9dCxsPWUubWF0Y2godyl8fFtdO3doaWxlKG89bFthKytdKXU9cj91OiFzLmhhc0NsYXNzKG8pLHNbdT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShvKX1lbHNlKG49PT1pfHxcImJvb2xlYW5cIj09PW4pJiYodGhpcy5jbGFzc05hbWUmJmIuX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGU9PT0hMT9cIlwiOmIuX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0PVwiIFwiK2UrXCIgXCIsbj0wLHI9dGhpcy5sZW5ndGg7Zm9yKDtyPm47bisrKWlmKDE9PT10aGlzW25dLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tuXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIikuaW5kZXhPZih0KT49MClyZXR1cm4hMDtyZXR1cm4hMX0sdmFsOmZ1bmN0aW9uKGUpe3ZhciBuLHIsaSxvPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGk9Yi5pc0Z1bmN0aW9uKGUpLHRoaXMuZWFjaChmdW5jdGlvbihuKXt2YXIgbyxhPWIodGhpcyk7MT09PXRoaXMubm9kZVR5cGUmJihvPWk/ZS5jYWxsKHRoaXMsbixhLnZhbCgpKTplLG51bGw9PW8/bz1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBvP28rPVwiXCI6Yi5pc0FycmF5KG8pJiYobz1iLm1hcChvLGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLHI9Yi52YWxIb29rc1t0aGlzLnR5cGVdfHxiLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sciYmXCJzZXRcImluIHImJnIuc2V0KHRoaXMsbyxcInZhbHVlXCIpIT09dHx8KHRoaXMudmFsdWU9bykpfSk7aWYobylyZXR1cm4gcj1iLnZhbEhvb2tzW28udHlwZV18fGIudmFsSG9va3Nbby5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxyJiZcImdldFwiaW4gciYmKG49ci5nZXQobyxcInZhbHVlXCIpKSE9PXQ/bjoobj1vLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBuP24ucmVwbGFjZShVLFwiXCIpOm51bGw9PW4/XCJcIjpuKX19fSksYi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLmF0dHJpYnV0ZXMudmFsdWU7cmV0dXJuIXR8fHQuc3BlY2lmaWVkP2UudmFsdWU6ZS50ZXh0fX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWUub3B0aW9ucyxpPWUuc2VsZWN0ZWRJbmRleCxvPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlfHwwPmksYT1vP251bGw6W10scz1vP2krMTpyLmxlbmd0aCx1PTA+aT9zOm8/aTowO2Zvcig7cz51O3UrKylpZihuPXJbdV0sISghbi5zZWxlY3RlZCYmdSE9PWl8fChiLnN1cHBvcnQub3B0RGlzYWJsZWQ/bi5kaXNhYmxlZDpudWxsIT09bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl8fG4ucGFyZW50Tm9kZS5kaXNhYmxlZCYmYi5ub2RlTmFtZShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9YihuKS52YWwoKSxvKXJldHVybiB0O2EucHVzaCh0KX1yZXR1cm4gYX0sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG49Yi5tYWtlQXJyYXkodCk7cmV0dXJuIGIoZSkuZmluZChcIm9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZD1iLmluQXJyYXkoYih0aGlzKS52YWwoKSxuKT49MH0pLG4ubGVuZ3RofHwoZS5zZWxlY3RlZEluZGV4PS0xKSxufX19LGF0dHI6ZnVuY3Rpb24oZSxuLHIpe3ZhciBvLGEscyx1PWUubm9kZVR5cGU7aWYoZSYmMyE9PXUmJjghPT11JiYyIT09dSlyZXR1cm4gdHlwZW9mIGUuZ2V0QXR0cmlidXRlPT09aT9iLnByb3AoZSxuLHIpOihhPTEhPT11fHwhYi5pc1hNTERvYyhlKSxhJiYobj1uLnRvTG93ZXJDYXNlKCksbz1iLmF0dHJIb29rc1tuXXx8KEoudGVzdChuKT96OkkpKSxyPT09dD9vJiZhJiZcImdldFwiaW4gbyYmbnVsbCE9PShzPW8uZ2V0KGUsbikpP3M6KHR5cGVvZiBlLmdldEF0dHJpYnV0ZSE9PWkmJihzPWUuZ2V0QXR0cmlidXRlKG4pKSxudWxsPT1zP3Q6cyk6bnVsbCE9PXI/byYmYSYmXCJzZXRcImluIG8mJihzPW8uc2V0KGUscixuKSkhPT10P3M6KGUuc2V0QXR0cmlidXRlKG4scitcIlwiKSxyKTooYi5yZW1vdmVBdHRyKGUsbiksdCkpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPTAsbz10JiZ0Lm1hdGNoKHcpO2lmKG8mJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49b1tpKytdKXI9Yi5wcm9wRml4W25dfHxuLEoudGVzdChuKT8hUSYmRy50ZXN0KG4pP2VbYi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK24pXT1lW3JdPSExOmVbcl09ITE6Yi5hdHRyKGUsbixcIlwiKSxlLnJlbW92ZUF0dHJpYnV0ZShRP246cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIWIuc3VwcG9ydC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZiLm5vZGVOYW1lKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scHJvcEZpeDp7dGFiaW5kZXg6XCJ0YWJJbmRleFwiLHJlYWRvbmx5OlwicmVhZE9ubHlcIixcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwiLG1heGxlbmd0aDpcIm1heExlbmd0aFwiLGNlbGxzcGFjaW5nOlwiY2VsbFNwYWNpbmdcIixjZWxscGFkZGluZzpcImNlbGxQYWRkaW5nXCIscm93c3BhbjpcInJvd1NwYW5cIixjb2xzcGFuOlwiY29sU3BhblwiLHVzZW1hcDpcInVzZU1hcFwiLGZyYW1lYm9yZGVyOlwiZnJhbWVCb3JkZXJcIixjb250ZW50ZWRpdGFibGU6XCJjb250ZW50RWRpdGFibGVcIn0scHJvcDpmdW5jdGlvbihlLG4scil7dmFyIGksbyxhLHM9ZS5ub2RlVHlwZTtpZihlJiYzIT09cyYmOCE9PXMmJjIhPT1zKXJldHVybiBhPTEhPT1zfHwhYi5pc1hNTERvYyhlKSxhJiYobj1iLnByb3BGaXhbbl18fG4sbz1iLnByb3BIb29rc1tuXSksciE9PXQ/byYmXCJzZXRcImluIG8mJihpPW8uc2V0KGUscixuKSkhPT10P2k6ZVtuXT1yOm8mJlwiZ2V0XCJpbiBvJiZudWxsIT09KGk9by5nZXQoZSxuKSk/aTplW25dfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIG49ZS5nZXRBdHRyaWJ1dGVOb2RlKFwidGFiaW5kZXhcIik7cmV0dXJuIG4mJm4uc3BlY2lmaWVkP3BhcnNlSW50KG4udmFsdWUsMTApOlYudGVzdChlLm5vZGVOYW1lKXx8WS50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDp0fX19fSksej17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9Yi5wcm9wKGUsbiksaT1cImJvb2xlYW5cIj09dHlwZW9mIHImJmUuZ2V0QXR0cmlidXRlKG4pLG89XCJib29sZWFuXCI9PXR5cGVvZiByP0smJlE/bnVsbCE9aTpHLnRlc3Qobik/ZVtiLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrbildOiEhaTplLmdldEF0dHJpYnV0ZU5vZGUobik7cmV0dXJuIG8mJm8udmFsdWUhPT0hMT9uLnRvTG93ZXJDYXNlKCk6dH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdD09PSExP2IucmVtb3ZlQXR0cihlLG4pOksmJlF8fCFHLnRlc3Qobik/ZS5zZXRBdHRyaWJ1dGUoIVEmJmIucHJvcEZpeFtuXXx8bixuKTplW2IuY2FtZWxDYXNlKFwiZGVmYXVsdC1cIituKV09ZVtuXT0hMCxufX0sSyYmUXx8KGIuYXR0ckhvb2tzLnZhbHVlPXtnZXQ6ZnVuY3Rpb24oZSxuKXt2YXIgcj1lLmdldEF0dHJpYnV0ZU5vZGUobik7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlucHV0XCIpP2UuZGVmYXVsdFZhbHVlOnImJnIuc3BlY2lmaWVkP3IudmFsdWU6dH0sc2V0OmZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gYi5ub2RlTmFtZShlLFwiaW5wdXRcIik/KGUuZGVmYXVsdFZhbHVlPW4sdCk6SSYmSS5zZXQoZSxuLHIpfX0pLFF8fChJPWIudmFsSG9va3MuYnV0dG9uPXtnZXQ6ZnVuY3Rpb24oZSxuKXt2YXIgcj1lLmdldEF0dHJpYnV0ZU5vZGUobik7cmV0dXJuIHImJihcImlkXCI9PT1ufHxcIm5hbWVcIj09PW58fFwiY29vcmRzXCI9PT1uP1wiXCIhPT1yLnZhbHVlOnIuc3BlY2lmaWVkKT9yLnZhbHVlOnR9LHNldDpmdW5jdGlvbihlLG4scil7dmFyIGk9ZS5nZXRBdHRyaWJ1dGVOb2RlKHIpO3JldHVybiBpfHxlLnNldEF0dHJpYnV0ZU5vZGUoaT1lLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKHIpKSxpLnZhbHVlPW4rPVwiXCIsXCJ2YWx1ZVwiPT09cnx8bj09PWUuZ2V0QXR0cmlidXRlKHIpP246dH19LGIuYXR0ckhvb2tzLmNvbnRlbnRlZGl0YWJsZT17Z2V0OkkuZ2V0LHNldDpmdW5jdGlvbihlLHQsbil7SS5zZXQoZSxcIlwiPT09dD8hMTp0LG4pfX0sYi5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSxuKXtiLmF0dHJIb29rc1tuXT1iLmV4dGVuZChiLmF0dHJIb29rc1tuXSx7c2V0OmZ1bmN0aW9uKGUscil7cmV0dXJuXCJcIj09PXI/KGUuc2V0QXR0cmlidXRlKG4sXCJhdXRvXCIpLHIpOnR9fSl9KSksYi5zdXBwb3J0LmhyZWZOb3JtYWxpemVkfHwoYi5lYWNoKFtcImhyZWZcIixcInNyY1wiLFwid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihlLG4pe2IuYXR0ckhvb2tzW25dPWIuZXh0ZW5kKGIuYXR0ckhvb2tzW25dLHtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHI9ZS5nZXRBdHRyaWJ1dGUobiwyKTtyZXR1cm4gbnVsbD09cj90OnJ9fSl9KSxiLmVhY2goW1wiaHJlZlwiLFwic3JjXCJdLGZ1bmN0aW9uKGUsdCl7Yi5wcm9wSG9va3NbdF09e2dldDpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCw0KX19fSkpLGIuc3VwcG9ydC5zdHlsZXx8KGIuYXR0ckhvb2tzLnN0eWxlPXtnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dHx8dH0sc2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dD10K1wiXCJ9fSksYi5zdXBwb3J0Lm9wdFNlbGVjdGVkfHwoYi5wcm9wSG9va3Muc2VsZWN0ZWQ9Yi5leHRlbmQoYi5wcm9wSG9va3Muc2VsZWN0ZWQse2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCksbnVsbH19KSksYi5zdXBwb3J0LmVuY3R5cGV8fChiLnByb3BGaXguZW5jdHlwZT1cImVuY29kaW5nXCIpLGIuc3VwcG9ydC5jaGVja09ufHxiLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Yi52YWxIb29rc1t0aGlzXT17Z2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX19fSksYi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe2IudmFsSG9va3NbdGhpc109Yi5leHRlbmQoYi52YWxIb29rc1t0aGlzXSx7c2V0OmZ1bmN0aW9uKGUsbil7cmV0dXJuIGIuaXNBcnJheShuKT9lLmNoZWNrZWQ9Yi5pbkFycmF5KGIoZSkudmFsKCksbik+PTA6dH19KX0pO3ZhciBaPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaSxldD0vXmtleS8sdHQ9L14oPzptb3VzZXxjb250ZXh0bWVudSl8Y2xpY2svLG50PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxydD0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiBpdCgpe3JldHVybiEwfWZ1bmN0aW9uIG90KCl7cmV0dXJuITF9Yi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihlLG4scixvLGEpe3ZhciBzLHUsbCxjLHAsZixkLGgsZyxtLHksdj1iLl9kYXRhKGUpO2lmKHYpe3IuaGFuZGxlciYmKGM9cixyPWMuaGFuZGxlcixhPWMuc2VsZWN0b3IpLHIuZ3VpZHx8KHIuZ3VpZD1iLmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz17fSksKGY9di5oYW5kbGUpfHwoZj12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGI9PT1pfHxlJiZiLmV2ZW50LnRyaWdnZXJlZD09PWUudHlwZT90OmIuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZi5lbGVtLGFyZ3VtZW50cyl9LGYuZWxlbT1lKSxuPShufHxcIlwiKS5tYXRjaCh3KXx8W1wiXCJdLGw9bi5sZW5ndGg7d2hpbGUobC0tKXM9cnQuZXhlYyhuW2xdKXx8W10sZz15PXNbMV0sbT0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxwPWIuZXZlbnQuc3BlY2lhbFtnXXx8e30sZz0oYT9wLmRlbGVnYXRlVHlwZTpwLmJpbmRUeXBlKXx8ZyxwPWIuZXZlbnQuc3BlY2lhbFtnXXx8e30sZD1iLmV4dGVuZCh7dHlwZTpnLG9yaWdUeXBlOnksZGF0YTpvLGhhbmRsZXI6cixndWlkOnIuZ3VpZCxzZWxlY3RvcjphLG5lZWRzQ29udGV4dDphJiZiLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoYSksbmFtZXNwYWNlOm0uam9pbihcIi5cIil9LGMpLChoPXVbZ10pfHwoaD11W2ddPVtdLGguZGVsZWdhdGVDb3VudD0wLHAuc2V0dXAmJnAuc2V0dXAuY2FsbChlLG8sbSxmKSE9PSExfHwoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihnLGYsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvblwiK2csZikpKSxwLmFkZCYmKHAuYWRkLmNhbGwoZSxkKSxkLmhhbmRsZXIuZ3VpZHx8KGQuaGFuZGxlci5ndWlkPXIuZ3VpZCkpLGE/aC5zcGxpY2UoaC5kZWxlZ2F0ZUNvdW50KyssMCxkKTpoLnB1c2goZCksYi5ldmVudC5nbG9iYWxbZ109ITA7ZT1udWxsfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLHAsZixkLGgsZyxtPWIuaGFzRGF0YShlKSYmYi5fZGF0YShlKTtpZihtJiYoYz1tLmV2ZW50cykpe3Q9KHR8fFwiXCIpLm1hdGNoKHcpfHxbXCJcIl0sbD10Lmxlbmd0aDt3aGlsZShsLS0paWYocz1ydC5leGVjKHRbbF0pfHxbXSxkPWc9c1sxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe3A9Yi5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShyP3AuZGVsZWdhdGVUeXBlOnAuYmluZFR5cGUpfHxkLGY9Y1tkXXx8W10scz1zWzJdJiZSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSx1PW89Zi5sZW5ndGg7d2hpbGUoby0tKWE9ZltvXSwhaSYmZyE9PWEub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWEuZ3VpZHx8cyYmIXMudGVzdChhLm5hbWVzcGFjZSl8fHImJnIhPT1hLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWEuc2VsZWN0b3IpfHwoZi5zcGxpY2UobywxKSxhLnNlbGVjdG9yJiZmLmRlbGVnYXRlQ291bnQtLSxwLnJlbW92ZSYmcC5yZW1vdmUuY2FsbChlLGEpKTt1JiYhZi5sZW5ndGgmJihwLnRlYXJkb3duJiZwLnRlYXJkb3duLmNhbGwoZSxoLG0uaGFuZGxlKSE9PSExfHxiLnJlbW92ZUV2ZW50KGUsZCxtLmhhbmRsZSksZGVsZXRlIGNbZF0pfWVsc2UgZm9yKGQgaW4gYyliLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO2IuaXNFbXB0eU9iamVjdChjKSYmKGRlbGV0ZSBtLmhhbmRsZSxiLl9yZW1vdmVEYXRhKGUsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihuLHIsaSxhKXt2YXIgcyx1LGwsYyxwLGYsZCxoPVtpfHxvXSxnPXkuY2FsbChuLFwidHlwZVwiKT9uLnR5cGU6bixtPXkuY2FsbChuLFwibmFtZXNwYWNlXCIpP24ubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihsPWY9aT1pfHxvLDMhPT1pLm5vZGVUeXBlJiY4IT09aS5ub2RlVHlwZSYmIW50LnRlc3QoZytiLmV2ZW50LnRyaWdnZXJlZCkmJihnLmluZGV4T2YoXCIuXCIpPj0wJiYobT1nLnNwbGl0KFwiLlwiKSxnPW0uc2hpZnQoKSxtLnNvcnQoKSksdT0wPmcuaW5kZXhPZihcIjpcIikmJlwib25cIitnLG49bltiLmV4cGFuZG9dP246bmV3IGIuRXZlbnQoZyxcIm9iamVjdFwiPT10eXBlb2YgbiYmbiksbi5pc1RyaWdnZXI9ITAsbi5uYW1lc3BhY2U9bS5qb2luKFwiLlwiKSxuLm5hbWVzcGFjZV9yZT1uLm5hbWVzcGFjZT9SZWdFeHAoXCIoXnxcXFxcLilcIittLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLG4ucmVzdWx0PXQsbi50YXJnZXR8fChuLnRhcmdldD1pKSxyPW51bGw9PXI/W25dOmIubWFrZUFycmF5KHIsW25dKSxwPWIuZXZlbnQuc3BlY2lhbFtnXXx8e30sYXx8IXAudHJpZ2dlcnx8cC50cmlnZ2VyLmFwcGx5KGkscikhPT0hMSkpe2lmKCFhJiYhcC5ub0J1YmJsZSYmIWIuaXNXaW5kb3coaSkpe2ZvcihjPXAuZGVsZWdhdGVUeXBlfHxnLG50LnRlc3QoYytnKXx8KGw9bC5wYXJlbnROb2RlKTtsO2w9bC5wYXJlbnROb2RlKWgucHVzaChsKSxmPWw7Zj09PShpLm93bmVyRG9jdW1lbnR8fG8pJiZoLnB1c2goZi5kZWZhdWx0Vmlld3x8Zi5wYXJlbnRXaW5kb3d8fGUpfWQ9MDt3aGlsZSgobD1oW2QrK10pJiYhbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKW4udHlwZT1kPjE/YzpwLmJpbmRUeXBlfHxnLHM9KGIuX2RhdGEobCxcImV2ZW50c1wiKXx8e30pW24udHlwZV0mJmIuX2RhdGEobCxcImhhbmRsZVwiKSxzJiZzLmFwcGx5KGwscikscz11JiZsW3VdLHMmJmIuYWNjZXB0RGF0YShsKSYmcy5hcHBseSYmcy5hcHBseShsLHIpPT09ITEmJm4ucHJldmVudERlZmF1bHQoKTtpZihuLnR5cGU9ZywhKGF8fG4uaXNEZWZhdWx0UHJldmVudGVkKCl8fHAuX2RlZmF1bHQmJnAuX2RlZmF1bHQuYXBwbHkoaS5vd25lckRvY3VtZW50LHIpIT09ITF8fFwiY2xpY2tcIj09PWcmJmIubm9kZU5hbWUoaSxcImFcIil8fCFiLmFjY2VwdERhdGEoaSl8fCF1fHwhaVtnXXx8Yi5pc1dpbmRvdyhpKSkpe2Y9aVt1XSxmJiYoaVt1XT1udWxsKSxiLmV2ZW50LnRyaWdnZXJlZD1nO3RyeXtpW2ddKCl9Y2F0Y2godil7fWIuZXZlbnQudHJpZ2dlcmVkPXQsZiYmKGlbdV09Zil9cmV0dXJuIG4ucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7ZT1iLmV2ZW50LmZpeChlKTt2YXIgbixyLGksbyxhLHM9W10sdT1oLmNhbGwoYXJndW1lbnRzKSxsPShiLl9kYXRhKHRoaXMsXCJldmVudHNcIil8fHt9KVtlLnR5cGVdfHxbXSxjPWIuZXZlbnQuc3BlY2lhbFtlLnR5cGVdfHx7fTtpZih1WzBdPWUsZS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHxjLnByZURpc3BhdGNoLmNhbGwodGhpcyxlKSE9PSExKXtzPWIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGUsbCksbj0wO3doaWxlKChvPXNbbisrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2UuY3VycmVudFRhcmdldD1vLmVsZW0sYT0wO3doaWxlKChpPW8uaGFuZGxlcnNbYSsrXSkmJiFlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFlLm5hbWVzcGFjZV9yZXx8ZS5uYW1lc3BhY2VfcmUudGVzdChpLm5hbWVzcGFjZSkpJiYoZS5oYW5kbGVPYmo9aSxlLmRhdGE9aS5kYXRhLHI9KChiLmV2ZW50LnNwZWNpYWxbaS5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGkuaGFuZGxlcikuYXBwbHkoby5lbGVtLHUpLHIhPT10JiYoZS5yZXN1bHQ9cik9PT0hMSYmKGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsZSksZS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLG4pe3ZhciByLGksbyxhLHM9W10sdT1uLmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYoIWUuYnV0dG9ufHxcImNsaWNrXCIhPT1lLnR5cGUpKWZvcig7bCE9dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKGwuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09ZS50eXBlKSl7Zm9yKG89W10sYT0wO3U+YTthKyspaT1uW2FdLHI9aS5zZWxlY3RvcitcIiBcIixvW3JdPT09dCYmKG9bcl09aS5uZWVkc0NvbnRleHQ/YihyLHRoaXMpLmluZGV4KGwpPj0wOmIuZmluZChyLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksb1tyXSYmby5wdXNoKGkpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIG4ubGVuZ3RoPnUmJnMucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOm4uc2xpY2UodSl9KSxzfSxmaXg6ZnVuY3Rpb24oZSl7aWYoZVtiLmV4cGFuZG9dKXJldHVybiBlO3ZhciB0LG4scixpPWUudHlwZSxhPWUscz10aGlzLmZpeEhvb2tzW2ldO3N8fCh0aGlzLmZpeEhvb2tzW2ldPXM9dHQudGVzdChpKT90aGlzLm1vdXNlSG9va3M6ZXQudGVzdChpKT90aGlzLmtleUhvb2tzOnt9KSxyPXMucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQocy5wcm9wcyk6dGhpcy5wcm9wcyxlPW5ldyBiLkV2ZW50KGEpLHQ9ci5sZW5ndGg7d2hpbGUodC0tKW49clt0XSxlW25dPWFbbl07cmV0dXJuIGUudGFyZ2V0fHwoZS50YXJnZXQ9YS5zcmNFbGVtZW50fHxvKSwzPT09ZS50YXJnZXQubm9kZVR5cGUmJihlLnRhcmdldD1lLnRhcmdldC5wYXJlbnROb2RlKSxlLm1ldGFLZXk9ISFlLm1ldGFLZXkscy5maWx0ZXI/cy5maWx0ZXIoZSxhKTplfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1lLndoaWNoJiYoZS53aGljaD1udWxsIT10LmNoYXJDb2RlP3QuY2hhckNvZGU6dC5rZXlDb2RlKSxlfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGUsbil7dmFyIHIsaSxhLHM9bi5idXR0b24sdT1uLmZyb21FbGVtZW50O3JldHVybiBudWxsPT1lLnBhZ2VYJiZudWxsIT1uLmNsaWVudFgmJihpPWUudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fG8sYT1pLmRvY3VtZW50RWxlbWVudCxyPWkuYm9keSxlLnBhZ2VYPW4uY2xpZW50WCsoYSYmYS5zY3JvbGxMZWZ0fHxyJiZyLnNjcm9sbExlZnR8fDApLShhJiZhLmNsaWVudExlZnR8fHImJnIuY2xpZW50TGVmdHx8MCksZS5wYWdlWT1uLmNsaWVudFkrKGEmJmEuc2Nyb2xsVG9wfHxyJiZyLnNjcm9sbFRvcHx8MCktKGEmJmEuY2xpZW50VG9wfHxyJiZyLmNsaWVudFRvcHx8MCkpLCFlLnJlbGF0ZWRUYXJnZXQmJnUmJihlLnJlbGF0ZWRUYXJnZXQ9dT09PWUudGFyZ2V0P24udG9FbGVtZW50OnUpLGUud2hpY2h8fHM9PT10fHwoZS53aGljaD0xJnM/MToyJnM/Mzo0JnM/MjowKSxlfX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIGIubm9kZU5hbWUodGhpcyxcImlucHV0XCIpJiZcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2s/KHRoaXMuY2xpY2soKSwhMSk6dH19LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PW8uYWN0aXZlRWxlbWVudCYmdGhpcy5mb2N1cyl0cnl7cmV0dXJuIHRoaXMuZm9jdXMoKSwhMX1jYXRjaChlKXt9fSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PW8uYWN0aXZlRWxlbWVudCYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7ZS5yZXN1bHQhPT10JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgaT1iLmV4dGVuZChuZXcgYi5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO3I/Yi5ldmVudC50cmlnZ2VyKGksbnVsbCx0KTpiLmV2ZW50LmRpc3BhdGNoLmNhbGwodCxpKSxpLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZuLnByZXZlbnREZWZhdWx0KCl9fSxiLnJlbW92ZUV2ZW50PW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuLCExKX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVwib25cIit0O2UuZGV0YWNoRXZlbnQmJih0eXBlb2YgZVtyXT09PWkmJihlW3JdPW51bGwpLGUuZGV0YWNoRXZlbnQocixuKSl9LGIuRXZlbnQ9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGIuRXZlbnQ/KGUmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fGUucmV0dXJuVmFsdWU9PT0hMXx8ZS5nZXRQcmV2ZW50RGVmYXVsdCYmZS5nZXRQcmV2ZW50RGVmYXVsdCgpP2l0Om90KTp0aGlzLnR5cGU9ZSxuJiZiLmV4dGVuZCh0aGlzLG4pLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxiLm5vdygpLHRoaXNbYi5leHBhbmRvXT0hMCx0KTpuZXcgYi5FdmVudChlLG4pfSxiLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOm90LGlzUHJvcGFnYXRpb25TdG9wcGVkOm90LGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOm90LHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWl0LGUmJihlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9aXQsZSYmKGUuc3RvcFByb3BhZ2F0aW9uJiZlLnN0b3BQcm9wYWdhdGlvbigpLGUuY2FuY2VsQnViYmxlPSEwKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1pdCx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sYi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7Yi5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6dCxiaW5kVHlwZTp0LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgbixyPXRoaXMsaT1lLnJlbGF0ZWRUYXJnZXQsbz1lLmhhbmRsZU9iajtcbnJldHVybighaXx8aSE9PXImJiFiLmNvbnRhaW5zKHIsaSkpJiYoZS50eXBlPW8ub3JpZ1R5cGUsbj1vLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT10KSxufX19KSxiLnN1cHBvcnQuc3VibWl0QnViYmxlc3x8KGIuZXZlbnQuc3BlY2lhbC5zdWJtaXQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIGIubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6KGIuZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fc3VibWl0IGtleXByZXNzLl9zdWJtaXRcIixmdW5jdGlvbihlKXt2YXIgbj1lLnRhcmdldCxyPWIubm9kZU5hbWUobixcImlucHV0XCIpfHxiLm5vZGVOYW1lKG4sXCJidXR0b25cIik/bi5mb3JtOnQ7ciYmIWIuX2RhdGEocixcInN1Ym1pdEJ1YmJsZXNcIikmJihiLmV2ZW50LmFkZChyLFwic3VibWl0Ll9zdWJtaXRcIixmdW5jdGlvbihlKXtlLl9zdWJtaXRfYnViYmxlPSEwfSksYi5fZGF0YShyLFwic3VibWl0QnViYmxlc1wiLCEwKSl9KSx0KX0scG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe2UuX3N1Ym1pdF9idWJibGUmJihkZWxldGUgZS5fc3VibWl0X2J1YmJsZSx0aGlzLnBhcmVudE5vZGUmJiFlLmlzVHJpZ2dlciYmYi5ldmVudC5zaW11bGF0ZShcInN1Ym1pdFwiLHRoaXMucGFyZW50Tm9kZSxlLCEwKSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGIubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6KGIuZXZlbnQucmVtb3ZlKHRoaXMsXCIuX3N1Ym1pdFwiKSx0KX19KSxiLnN1cHBvcnQuY2hhbmdlQnViYmxlc3x8KGIuZXZlbnQuc3BlY2lhbC5jaGFuZ2U9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFoudGVzdCh0aGlzLm5vZGVOYW1lKT8oKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZXx8XCJyYWRpb1wiPT09dGhpcy50eXBlKSYmKGIuZXZlbnQuYWRkKHRoaXMsXCJwcm9wZXJ0eWNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7XCJjaGVja2VkXCI9PT1lLm9yaWdpbmFsRXZlbnQucHJvcGVydHlOYW1lJiYodGhpcy5fanVzdF9jaGFuZ2VkPSEwKX0pLGIuZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7dGhpcy5fanVzdF9jaGFuZ2VkJiYhZS5pc1RyaWdnZXImJih0aGlzLl9qdXN0X2NoYW5nZWQ9ITEpLGIuZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLGUsITApfSkpLCExKTooYi5ldmVudC5hZGQodGhpcyxcImJlZm9yZWFjdGl2YXRlLl9jaGFuZ2VcIixmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtaLnRlc3QodC5ub2RlTmFtZSkmJiFiLl9kYXRhKHQsXCJjaGFuZ2VCdWJibGVzXCIpJiYoYi5ldmVudC5hZGQodCxcImNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7IXRoaXMucGFyZW50Tm9kZXx8ZS5pc1NpbXVsYXRlZHx8ZS5pc1RyaWdnZXJ8fGIuZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLnBhcmVudE5vZGUsZSwhMCl9KSxiLl9kYXRhKHQsXCJjaGFuZ2VCdWJibGVzXCIsITApKX0pLHQpfSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXQ7cmV0dXJuIHRoaXMhPT1ufHxlLmlzU2ltdWxhdGVkfHxlLmlzVHJpZ2dlcnx8XCJyYWRpb1wiIT09bi50eXBlJiZcImNoZWNrYm94XCIhPT1uLnR5cGU/ZS5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dH0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gYi5ldmVudC5yZW1vdmUodGhpcyxcIi5fY2hhbmdlXCIpLCFaLnRlc3QodGhpcy5ub2RlTmFtZSl9fSksYi5zdXBwb3J0LmZvY3VzaW5CdWJibGVzfHxiLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe3ZhciBuPTAscj1mdW5jdGlvbihlKXtiLmV2ZW50LnNpbXVsYXRlKHQsZS50YXJnZXQsYi5ldmVudC5maXgoZSksITApfTtiLmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7MD09PW4rKyYmby5hZGRFdmVudExpc3RlbmVyKGUsciwhMCl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7MD09PS0tbiYmby5yZW1vdmVFdmVudExpc3RlbmVyKGUsciwhMCl9fX0pLGIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe1wic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dCk7Zm9yKGEgaW4gZSl0aGlzLm9uKGEsbixyLGVbYV0sbyk7cmV0dXJuIHRoaXN9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj10KTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXQpOihpPXIscj1uLG49dCkpLGk9PT0hMSlpPW90O2Vsc2UgaWYoIWkpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1vJiYocz1pLGk9ZnVuY3Rpb24oZSl7cmV0dXJuIGIoKS5vZmYoZSkscy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGkuZ3VpZD1zLmd1aWR8fChzLmd1aWQ9Yi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LmFkZCh0aGlzLGUsaSxyLG4pfSl9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbihlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG87aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIGk9ZS5oYW5kbGVPYmosYihlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoaS5uYW1lc3BhY2U/aS5vcmlnVHlwZStcIi5cIitpLm5hbWVzcGFjZTppLm9yaWdUeXBlLGkuc2VsZWN0b3IsaS5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IobyBpbiBlKXRoaXMub2ZmKG8sbixlW29dKTtyZXR1cm4gdGhpc31yZXR1cm4obj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKSYmKHI9bixuPXQpLHI9PT0hMSYmKHI9b3QpLHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZXZlbnQucmVtb3ZlKHRoaXMsZSxyLG4pfSl9LGJpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0sdHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsbil7dmFyIHI9dGhpc1swXTtyZXR1cm4gcj9iLmV2ZW50LnRyaWdnZXIoZSxuLHIsITApOnR9fSksZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsLGMscCxmLGQsaCxnLG0seSx2LHg9XCJzaXp6bGVcIistbmV3IERhdGUsdz1lLmRvY3VtZW50LFQ9e30sTj0wLEM9MCxrPWl0KCksRT1pdCgpLFM9aXQoKSxBPXR5cGVvZiB0LGo9MTw8MzEsRD1bXSxMPUQucG9wLEg9RC5wdXNoLHE9RC5zbGljZSxNPUQuaW5kZXhPZnx8ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPXRoaXMubGVuZ3RoO2Zvcig7bj50O3QrKylpZih0aGlzW3RdPT09ZSlyZXR1cm4gdDtyZXR1cm4tMX0sXz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsRj1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE89Ri5yZXBsYWNlKFwid1wiLFwidyNcIiksQj1cIihbKl4kfCF+XT89KVwiLFA9XCJcXFxcW1wiK18rXCIqKFwiK0YrXCIpXCIrXytcIiooPzpcIitCK18rXCIqKD86KFsnXFxcIl0pKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXSkqPylcXFxcM3woXCIrTytcIil8KXwpXCIrXytcIipcXFxcXVwiLFI9XCI6KFwiK0YrXCIpKD86XFxcXCgoKFsnXFxcIl0pKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXSkqPylcXFxcM3woKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrUC5yZXBsYWNlKDMsOCkrXCIpKil8LiopXFxcXCl8KVwiLFc9UmVnRXhwKFwiXlwiK18rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK18rXCIrJFwiLFwiZ1wiKSwkPVJlZ0V4cChcIl5cIitfK1wiKixcIitfK1wiKlwiKSxJPVJlZ0V4cChcIl5cIitfK1wiKihbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmPit+XSlcIitfK1wiKlwiKSx6PVJlZ0V4cChSKSxYPVJlZ0V4cChcIl5cIitPK1wiJFwiKSxVPXtJRDpSZWdFeHAoXCJeIyhcIitGK1wiKVwiKSxDTEFTUzpSZWdFeHAoXCJeXFxcXC4oXCIrRitcIilcIiksTkFNRTpSZWdFeHAoXCJeXFxcXFtuYW1lPVsnXFxcIl0/KFwiK0YrXCIpWydcXFwiXT9cXFxcXVwiKSxUQUc6UmVnRXhwKFwiXihcIitGLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpSZWdFeHAoXCJeXCIrUCksUFNFVURPOlJlZ0V4cChcIl5cIitSKSxDSElMRDpSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK18rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitfK1wiKig/OihbKy1dfClcIitfK1wiKihcXFxcZCspfCkpXCIrXytcIipcXFxcKXwpXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpSZWdFeHAoXCJeXCIrXytcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrXytcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrXytcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sVj0vW1xceDIwXFx0XFxyXFxuXFxmXSpbK35dLyxZPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIGNvZGUvLEo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sRz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFE9L15oXFxkJC9pLEs9Lyd8XFxcXC9nLFo9L1xcPVtcXHgyMFxcdFxcclxcblxcZl0qKFteJ1wiXFxdXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXF0vZyxldD0vXFxcXChbXFxkYS1mQS1GXXsxLDZ9W1xceDIwXFx0XFxyXFxuXFxmXT98LikvZyx0dD1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIit0LTY1NTM2O3JldHVybiBuIT09bj90OjA+bj9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8bj4+MTAsNTYzMjB8MTAyMyZuKX07dHJ5e3EuY2FsbCh3LmRvY3VtZW50RWxlbWVudC5jaGlsZE5vZGVzLDApWzBdLm5vZGVUeXBlfWNhdGNoKG50KXtxPWZ1bmN0aW9uKGUpe3ZhciB0LG49W107d2hpbGUodD10aGlzW2UrK10pbi5wdXNoKHQpO3JldHVybiBufX1mdW5jdGlvbiBydChlKXtyZXR1cm4gWS50ZXN0KGUrXCJcIil9ZnVuY3Rpb24gaXQoKXt2YXIgZSx0PVtdO3JldHVybiBlPWZ1bmN0aW9uKG4scil7cmV0dXJuIHQucHVzaChuKz1cIiBcIik+aS5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbdC5zaGlmdCgpXSxlW25dPXJ9fWZ1bmN0aW9uIG90KGUpe3JldHVybiBlW3hdPSEwLGV9ZnVuY3Rpb24gYXQoZSl7dmFyIHQ9cC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4gZSh0KX1jYXRjaChuKXtyZXR1cm4hMX1maW5hbGx5e3Q9bnVsbH19ZnVuY3Rpb24gc3QoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGYsZyxtLHY7aWYoKHQ/dC5vd25lckRvY3VtZW50fHx0OncpIT09cCYmYyh0KSx0PXR8fHAsbj1ufHxbXSwhZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG47aWYoMSE9PShzPXQubm9kZVR5cGUpJiY5IT09cylyZXR1cm5bXTtpZighZCYmIXIpe2lmKGk9Si5leGVjKGUpKWlmKGE9aVsxXSl7aWYoOT09PXMpe2lmKG89dC5nZXRFbGVtZW50QnlJZChhKSwhb3x8IW8ucGFyZW50Tm9kZSlyZXR1cm4gbjtpZihvLmlkPT09YSlyZXR1cm4gbi5wdXNoKG8pLG59ZWxzZSBpZih0Lm93bmVyRG9jdW1lbnQmJihvPXQub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKSkmJnkodCxvKSYmby5pZD09PWEpcmV0dXJuIG4ucHVzaChvKSxufWVsc2V7aWYoaVsyXSlyZXR1cm4gSC5hcHBseShuLHEuY2FsbCh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpLDApKSxuO2lmKChhPWlbM10pJiZULmdldEJ5Q2xhc3NOYW1lJiZ0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixxLmNhbGwodC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpLDApKSxufWlmKFQucXNhJiYhaC50ZXN0KGUpKXtpZihmPSEwLGc9eCxtPXQsdj05PT09cyYmZSwxPT09cyYmXCJvYmplY3RcIiE9PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bD1mdChlKSwoZj10LmdldEF0dHJpYnV0ZShcImlkXCIpKT9nPWYucmVwbGFjZShLLFwiXFxcXCQmXCIpOnQuc2V0QXR0cmlidXRlKFwiaWRcIixnKSxnPVwiW2lkPSdcIitnK1wiJ10gXCIsdT1sLmxlbmd0aDt3aGlsZSh1LS0pbFt1XT1nK2R0KGxbdV0pO209Vi50ZXN0KGUpJiZ0LnBhcmVudE5vZGV8fHQsdj1sLmpvaW4oXCIsXCIpfWlmKHYpdHJ5e3JldHVybiBILmFwcGx5KG4scS5jYWxsKG0ucXVlcnlTZWxlY3RvckFsbCh2KSwwKSksbn1jYXRjaChiKXt9ZmluYWxseXtmfHx0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIHd0KGUucmVwbGFjZShXLFwiJDFcIiksdCxuLHIpfWE9c3QuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmKGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiB0P1wiSFRNTFwiIT09dC5ub2RlTmFtZTohMX0sYz1zdC5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgbj1lP2Uub3duZXJEb2N1bWVudHx8ZTp3O3JldHVybiBuIT09cCYmOT09PW4ubm9kZVR5cGUmJm4uZG9jdW1lbnRFbGVtZW50PyhwPW4sZj1uLmRvY3VtZW50RWxlbWVudCxkPWEobiksVC50YWdOYW1lTm9Db21tZW50cz1hdChmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxULmF0dHJpYnV0ZXM9YXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8c2VsZWN0Pjwvc2VsZWN0PlwiO3ZhciB0PXR5cGVvZiBlLmxhc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKTtyZXR1cm5cImJvb2xlYW5cIiE9PXQmJlwic3RyaW5nXCIhPT10fSksVC5nZXRCeUNsYXNzTmFtZT1hdChmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8ZGl2IGNsYXNzPSdoaWRkZW4gZSc+PC9kaXY+PGRpdiBjbGFzcz0naGlkZGVuJz48L2Rpdj5cIixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVcIikubGVuZ3RoPyhlLmxhc3RDaGlsZC5jbGFzc05hbWU9XCJlXCIsMj09PWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVcIikubGVuZ3RoKTohMX0pLFQuZ2V0QnlOYW1lPWF0KGZ1bmN0aW9uKGUpe2UuaWQ9eCswLGUuaW5uZXJIVE1MPVwiPGEgbmFtZT0nXCIreCtcIic+PC9hPjxkaXYgbmFtZT0nXCIreCtcIic+PC9kaXY+XCIsZi5pbnNlcnRCZWZvcmUoZSxmLmZpcnN0Q2hpbGQpO3ZhciB0PW4uZ2V0RWxlbWVudHNCeU5hbWUmJm4uZ2V0RWxlbWVudHNCeU5hbWUoeCkubGVuZ3RoPT09MituLmdldEVsZW1lbnRzQnlOYW1lKHgrMCkubGVuZ3RoO3JldHVybiBULmdldElkTm90TmFtZT0hbi5nZXRFbGVtZW50QnlJZCh4KSxmLnJlbW92ZUNoaWxkKGUpLHR9KSxpLmF0dHJIYW5kbGU9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLGUuZmlyc3RDaGlsZCYmdHlwZW9mIGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUhPT1BJiZcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSk/e306e2hyZWY6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiLDIpfSx0eXBlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcInR5cGVcIil9fSxULmdldElkTm90TmFtZT8oaS5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYodHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQhPT1BJiYhZCl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbiYmbi5wYXJlbnROb2RlP1tuXTpbXX19LGkuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShldCx0dCk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19KTooaS5maW5kLklEPWZ1bmN0aW9uKGUsbil7aWYodHlwZW9mIG4uZ2V0RWxlbWVudEJ5SWQhPT1BJiYhZCl7dmFyIHI9bi5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gcj9yLmlkPT09ZXx8dHlwZW9mIHIuZ2V0QXR0cmlidXRlTm9kZSE9PUEmJnIuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLnZhbHVlPT09ZT9bcl06dDpbXX19LGkuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShldCx0dCk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUhPT1BJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gbiYmbi52YWx1ZT09PXR9fSksaS5maW5kLlRBRz1ULnRhZ05hbWVOb0NvbW1lbnRzP2Z1bmN0aW9uKGUsbil7cmV0dXJuIHR5cGVvZiBuLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09QT9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOnR9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30saS5maW5kLk5BTUU9VC5nZXRCeU5hbWUmJmZ1bmN0aW9uKGUsbil7cmV0dXJuIHR5cGVvZiBuLmdldEVsZW1lbnRzQnlOYW1lIT09QT9uLmdldEVsZW1lbnRzQnlOYW1lKG5hbWUpOnR9LGkuZmluZC5DTEFTUz1ULmdldEJ5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPT09QXx8ZD90Om4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0sZz1bXSxoPVtcIjpmb2N1c1wiXSwoVC5xc2E9cnQobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihhdChmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxzZWxlY3Q+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8aC5wdXNoKFwiXFxcXFtcIitfK1wiKig/OmNoZWNrZWR8ZGlzYWJsZWR8aXNtYXB8bXVsdGlwbGV8cmVhZG9ubHl8c2VsZWN0ZWR8dmFsdWUpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8aC5wdXNoKFwiOmNoZWNrZWRcIil9KSxhdChmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxpbnB1dCB0eXBlPSdoaWRkZW4nIGk9JycvPlwiLGUucXVlcnlTZWxlY3RvckFsbChcIltpXj0nJ11cIikubGVuZ3RoJiZoLnB1c2goXCJbKl4kXT1cIitfK1wiKig/OlxcXCJcXFwifCcnKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fGgucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxoLnB1c2goXCIsLio6XCIpfSkpLChULm1hdGNoZXNTZWxlY3Rvcj1ydChtPWYubWF0Y2hlc1NlbGVjdG9yfHxmLm1vek1hdGNoZXNTZWxlY3Rvcnx8Zi53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGYub01hdGNoZXNTZWxlY3Rvcnx8Zi5tc01hdGNoZXNTZWxlY3RvcikpJiZhdChmdW5jdGlvbihlKXtULmRpc2Nvbm5lY3RlZE1hdGNoPW0uY2FsbChlLFwiZGl2XCIpLG0uY2FsbChlLFwiW3MhPScnXTp4XCIpLGcucHVzaChcIiE9XCIsUil9KSxoPVJlZ0V4cChoLmpvaW4oXCJ8XCIpKSxnPVJlZ0V4cChnLmpvaW4oXCJ8XCIpKSx5PXJ0KGYuY29udGFpbnMpfHxmLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sdj1mLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGUsdCl7dmFyIHI7cmV0dXJuIGU9PT10Pyh1PSEwLDApOihyPXQuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCkpPzEmcnx8ZS5wYXJlbnROb2RlJiYxMT09PWUucGFyZW50Tm9kZS5ub2RlVHlwZT9lPT09bnx8eSh3LGUpPy0xOnQ9PT1ufHx5KHcsdCk/MTowOjQmcj8tMToxOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24/LTE6MX06ZnVuY3Rpb24oZSx0KXt2YXIgcixpPTAsbz1lLnBhcmVudE5vZGUsYT10LnBhcmVudE5vZGUscz1bZV0sbD1bdF07aWYoZT09PXQpcmV0dXJuIHU9ITAsMDtpZighb3x8IWEpcmV0dXJuIGU9PT1uPy0xOnQ9PT1uPzE6bz8tMTphPzE6MDtpZihvPT09YSlyZXR1cm4gdXQoZSx0KTtyPWU7d2hpbGUocj1yLnBhcmVudE5vZGUpcy51bnNoaWZ0KHIpO3I9dDt3aGlsZShyPXIucGFyZW50Tm9kZSlsLnVuc2hpZnQocik7d2hpbGUoc1tpXT09PWxbaV0paSsrO3JldHVybiBpP3V0KHNbaV0sbFtpXSk6c1tpXT09PXc/LTE6bFtpXT09PXc/MTowfSx1PSExLFswLDBdLnNvcnQodiksVC5kZXRlY3REdXBsaWNhdGVzPXUscCk6cH0sc3QubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzdChlLG51bGwsbnVsbCx0KX0sc3QubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLHQ9dC5yZXBsYWNlKFosXCI9JyQxJ11cIiksISghVC5tYXRjaGVzU2VsZWN0b3J8fGR8fGcmJmcudGVzdCh0KXx8aC50ZXN0KHQpKSl0cnl7dmFyIG49bS5jYWxsKGUsdCk7aWYobnx8VC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKHIpe31yZXR1cm4gc3QodCxwLG51bGwsW2VdKS5sZW5ndGg+MH0sc3QuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9PXAmJmMoZSkseShlLHQpfSxzdC5hdHRyPWZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLGR8fCh0PXQudG9Mb3dlckNhc2UoKSksKG49aS5hdHRySGFuZGxlW3RdKT9uKGUpOmR8fFQuYXR0cmlidXRlcz9lLmdldEF0dHJpYnV0ZSh0KTooKG49ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKXx8ZS5nZXRBdHRyaWJ1dGUodCkpJiZlW3RdPT09ITA/dDpuJiZuLnNwZWNpZmllZD9uLnZhbHVlOm51bGx9LHN0LmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHN0LnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTEsaT0wO2lmKHU9IVQuZGV0ZWN0RHVwbGljYXRlcyxlLnNvcnQodiksdSl7Zm9yKDt0PWVbcl07cisrKXQ9PT1lW3ItMV0mJihpPW4ucHVzaChyKSk7d2hpbGUoaS0tKWUuc3BsaWNlKG5baV0sMSl9cmV0dXJuIGV9O2Z1bmN0aW9uIHV0KGUsdCl7dmFyIG49dCYmZSxyPW4mJih+dC5zb3VyY2VJbmRleHx8aiktKH5lLnNvdXJjZUluZGV4fHxqKTtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gbHQoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1uJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBjdChlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1ufHxcImJ1dHRvblwiPT09bikmJnQudHlwZT09PWV9fWZ1bmN0aW9uIHB0KGUpe3JldHVybiBvdChmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCxvdChmdW5jdGlvbihuLHIpe3ZhciBpLG89ZShbXSxuLmxlbmd0aCx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSluW2k9b1thXV0mJihuW2ldPSEocltpXT1uW2ldKSl9KX0pfW89c3QuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2UgZm9yKDt0PWVbcl07cisrKW4rPW8odCk7cmV0dXJuIG59LGk9c3Quc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86b3QsbWF0Y2g6VSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UoZXQsdHQpLGVbM109KGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UoZXQsdHQpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHN0LmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnN0LmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzVdJiZlWzJdO3JldHVybiBVLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVs0XT9lWzJdPWVbNF06biYmei50ZXN0KG4pJiYodD1mdChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTooZT1lLnJlcGxhY2UoZXQsdHQpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7cmV0dXJuIHQubm9kZU5hbWUmJnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWV9KX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9a1tlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9UmVnRXhwKFwiKF58XCIrXytcIilcIitlK1wiKFwiK18rXCJ8JClcIikpJiZrKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChlLmNsYXNzTmFtZXx8dHlwZW9mIGUuZ2V0QXR0cmlidXRlIT09QSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciBpPXN0LmF0dHIocixlKTtyZXR1cm4gbnVsbD09aT9cIiE9XCI9PT10OnQ/KGkrPVwiXCIsXCI9XCI9PT10P2k9PT1uOlwiIT1cIj09PXQ/aSE9PW46XCJePVwiPT09dD9uJiYwPT09aS5pbmRleE9mKG4pOlwiKj1cIj09PXQ/biYmaS5pbmRleE9mKG4pPi0xOlwiJD1cIj09PXQ/biYmaS5zbGljZSgtbi5sZW5ndGgpPT09bjpcIn49XCI9PT10PyhcIiBcIitpK1wiIFwiKS5pbmRleE9mKG4pPi0xOlwifD1cIj09PXQ/aT09PW58fGkuc2xpY2UoMCxuLmxlbmd0aCsxKT09PW4rXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbz1cIm50aFwiIT09ZS5zbGljZSgwLDMpLGE9XCJsYXN0XCIhPT1lLnNsaWNlKC00KSxzPVwib2YtdHlwZVwiPT09dDtyZXR1cm4gMT09PXImJjA9PT1pP2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbih0LG4sdSl7dmFyIGwsYyxwLGYsZCxoLGc9byE9PWE/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsbT10LnBhcmVudE5vZGUseT1zJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksdj0hdSYmIXM7aWYobSl7aWYobyl7d2hpbGUoZyl7cD10O3doaWxlKHA9cFtnXSlpZihzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXk6MT09PXAubm9kZVR5cGUpcmV0dXJuITE7aD1nPVwib25seVwiPT09ZSYmIWgmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihoPVthP20uZmlyc3RDaGlsZDptLmxhc3RDaGlsZF0sYSYmdil7Yz1tW3hdfHwobVt4XT17fSksbD1jW2VdfHxbXSxkPWxbMF09PT1OJiZsWzFdLGY9bFswXT09PU4mJmxbMl0scD1kJiZtLmNoaWxkTm9kZXNbZF07d2hpbGUocD0rK2QmJnAmJnBbZ118fChmPWQ9MCl8fGgucG9wKCkpaWYoMT09PXAubm9kZVR5cGUmJisrZiYmcD09PXQpe2NbZV09W04sZCxmXTticmVha319ZWxzZSBpZih2JiYobD0odFt4XXx8KHRbeF09e30pKVtlXSkmJmxbMF09PT1OKWY9bFsxXTtlbHNlIHdoaWxlKHA9KytkJiZwJiZwW2ddfHwoZj1kPTApfHxoLnBvcCgpKWlmKChzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXk6MT09PXAubm9kZVR5cGUpJiYrK2YmJih2JiYoKHBbeF18fChwW3hdPXt9KSlbZV09W04sZl0pLHA9PT10KSlicmVhaztyZXR1cm4gZi09aSxmPT09cnx8MD09PWYlciYmZi9yPj0wfX19LFBTRVVETzpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS5wc2V1ZG9zW2VdfHxpLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c3QuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiByW3hdP3IodCk6ci5sZW5ndGg+MT8obj1bZSxlLFwiXCIsdF0saS5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/b3QoZnVuY3Rpb24oZSxuKXt2YXIgaSxvPXIoZSx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSlpPU0uY2FsbChlLG9bYV0pLGVbaV09IShuW2ldPW9bYV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSwwLG4pfSk6cn19LHBzZXVkb3M6e25vdDpvdChmdW5jdGlvbihlKXt2YXIgdD1bXSxuPVtdLHI9cyhlLnJlcGxhY2UoVyxcIiQxXCIpKTtyZXR1cm4gclt4XT9vdChmdW5jdGlvbihlLHQsbixpKXt2YXIgbyxhPXIoZSxudWxsLGksW10pLHM9ZS5sZW5ndGg7d2hpbGUocy0tKShvPWFbc10pJiYoZVtzXT0hKHRbc109bykpfSk6ZnVuY3Rpb24oZSxpLG8pe3JldHVybiB0WzBdPWUscih0LG51bGwsbyxuKSwhbi5wb3AoKX19KSxoYXM6b3QoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBzdChlLHQpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOm90KGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4odC50ZXh0Q29udGVudHx8dC5pbm5lclRleHR8fG8odCkpLmluZGV4T2YoZSk+LTF9fSksbGFuZzpvdChmdW5jdGlvbihlKXtyZXR1cm4gWC50ZXN0KGV8fFwiXCIpfHxzdC5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2UpLGU9ZS5yZXBsYWNlKGV0LHR0KS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKHQpe3ZhciBuO2RvIGlmKG49ZD90LmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHx0LmdldEF0dHJpYnV0ZShcImxhbmdcIik6dC5sYW5nKXJldHVybiBuPW4udG9Mb3dlckNhc2UoKSxuPT09ZXx8MD09PW4uaW5kZXhPZihlK1wiLVwiKTt3aGlsZSgodD10LnBhcmVudE5vZGUpJiYxPT09dC5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKHQpe3ZhciBuPWUubG9jYXRpb24mJmUubG9jYXRpb24uaGFzaDtyZXR1cm4gbiYmbi5zbGljZSgxKT09PXQuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1mfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PXAuYWN0aXZlRWxlbWVudCYmKCFwLmhhc0ZvY3VzfHxwLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxlLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVOYW1lPlwiQFwifHwzPT09ZS5ub2RlVHlwZXx8ND09PWUubm9kZVR5cGUpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4haS5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEcudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8dC50b0xvd2VyQ2FzZSgpPT09ZS50eXBlKX0sZmlyc3Q6cHQoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnB0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTpwdChmdW5jdGlvbihlLHQsbil7cmV0dXJuWzA+bj9uK3Q6bl19KSxldmVuOnB0KGZ1bmN0aW9uKGUsdCl7dmFyIG49MDtmb3IoO3Q+bjtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDpwdChmdW5jdGlvbihlLHQpe3ZhciBuPTE7Zm9yKDt0Pm47bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDpwdChmdW5jdGlvbihlLHQsbil7dmFyIHI9MD5uP24rdDpuO2Zvcig7LS1yPj0wOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDpwdChmdW5jdGlvbihlLHQsbil7dmFyIHI9MD5uP24rdDpuO2Zvcig7dD4rK3I7KWUucHVzaChyKTtyZXR1cm4gZX0pfX07Zm9yKG4gaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0paS5wc2V1ZG9zW25dPWx0KG4pO2ZvcihuIGlue3N1Ym1pdDohMCxyZXNldDohMH0paS5wc2V1ZG9zW25dPWN0KG4pO2Z1bmN0aW9uIGZ0KGUsdCl7dmFyIG4scixvLGEscyx1LGwsYz1FW2UrXCIgXCJdO2lmKGMpcmV0dXJuIHQ/MDpjLnNsaWNlKDApO3M9ZSx1PVtdLGw9aS5wcmVGaWx0ZXI7d2hpbGUocyl7KCFufHwocj0kLmV4ZWMocykpKSYmKHImJihzPXMuc2xpY2UoclswXS5sZW5ndGgpfHxzKSx1LnB1c2gobz1bXSkpLG49ITEsKHI9SS5leGVjKHMpKSYmKG49ci5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZShXLFwiIFwiKX0pLHM9cy5zbGljZShuLmxlbmd0aCkpO2ZvcihhIGluIGkuZmlsdGVyKSEocj1VW2FdLmV4ZWMocykpfHxsW2FdJiYhKHI9bFthXShyKSl8fChuPXIuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTphLG1hdGNoZXM6cn0pLHM9cy5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P3MubGVuZ3RoOnM/c3QuZXJyb3IoZSk6RShlLHUpLnNsaWNlKDApfWZ1bmN0aW9uIGR0KGUpe3ZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7Zm9yKDtuPnQ7dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gaHQoZSx0LG4pe3ZhciBpPXQuZGlyLG89biYmXCJwYXJlbnROb2RlXCI9PT1pLGE9QysrO3JldHVybiB0LmZpcnN0P2Z1bmN0aW9uKHQsbixyKXt3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fG8pcmV0dXJuIGUodCxuLHIpfTpmdW5jdGlvbih0LG4scyl7dmFyIHUsbCxjLHA9TitcIiBcIithO2lmKHMpe3doaWxlKHQ9dFtpXSlpZigoMT09PXQubm9kZVR5cGV8fG8pJiZlKHQsbixzKSlyZXR1cm4hMH1lbHNlIHdoaWxlKHQ9dFtpXSlpZigxPT09dC5ub2RlVHlwZXx8bylpZihjPXRbeF18fCh0W3hdPXt9KSwobD1jW2ldKSYmbFswXT09PXApe2lmKCh1PWxbMV0pPT09ITB8fHU9PT1yKXJldHVybiB1PT09ITB9ZWxzZSBpZihsPWNbaV09W3BdLGxbMV09ZSh0LG4scyl8fHIsbFsxXT09PSEwKXJldHVybiEwfX1mdW5jdGlvbiBndChlKXtyZXR1cm4gZS5sZW5ndGg+MT9mdW5jdGlvbih0LG4scil7dmFyIGk9ZS5sZW5ndGg7d2hpbGUoaS0tKWlmKCFlW2ldKHQsbixyKSlyZXR1cm4hMTtyZXR1cm4hMH06ZVswXX1mdW5jdGlvbiBtdChlLHQsbixyLGkpe3ZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O2Zvcig7dT5zO3MrKykobz1lW3NdKSYmKCFufHxuKG8scixpKSkmJihhLnB1c2gobyksbCYmdC5wdXNoKHMpKTtyZXR1cm4gYX1mdW5jdGlvbiB5dChlLHQsbixyLGksbyl7cmV0dXJuIHImJiFyW3hdJiYocj15dChyKSksaSYmIWlbeF0mJihpPXl0KGksbykpLG90KGZ1bmN0aW9uKG8sYSxzLHUpe3ZhciBsLGMscCxmPVtdLGQ9W10saD1hLmxlbmd0aCxnPW98fHh0KHR8fFwiKlwiLHMubm9kZVR5cGU/W3NdOnMsW10pLG09IWV8fCFvJiZ0P2c6bXQoZyxmLGUscyx1KSx5PW4/aXx8KG8/ZTpofHxyKT9bXTphOm07aWYobiYmbihtLHkscyx1KSxyKXtsPW10KHksZCkscihsLFtdLHMsdSksYz1sLmxlbmd0aDt3aGlsZShjLS0pKHA9bFtjXSkmJih5W2RbY11dPSEobVtkW2NdXT1wKSl9aWYobyl7aWYoaXx8ZSl7aWYoaSl7bD1bXSxjPXkubGVuZ3RoO3doaWxlKGMtLSkocD15W2NdKSYmbC5wdXNoKG1bY109cCk7aShudWxsLHk9W10sbCx1KX1jPXkubGVuZ3RoO3doaWxlKGMtLSkocD15W2NdKSYmKGw9aT9NLmNhbGwobyxwKTpmW2NdKT4tMSYmKG9bbF09IShhW2xdPXApKX19ZWxzZSB5PW10KHk9PT1hP3kuc3BsaWNlKGgseS5sZW5ndGgpOnkpLGk/aShudWxsLGEseSx1KTpILmFwcGx5KGEseSl9KX1mdW5jdGlvbiB2dChlKXt2YXIgdCxuLHIsbz1lLmxlbmd0aCxhPWkucmVsYXRpdmVbZVswXS50eXBlXSxzPWF8fGkucmVsYXRpdmVbXCIgXCJdLHU9YT8xOjAsYz1odChmdW5jdGlvbihlKXtyZXR1cm4gZT09PXR9LHMsITApLHA9aHQoZnVuY3Rpb24oZSl7cmV0dXJuIE0uY2FsbCh0LGUpPi0xfSxzLCEwKSxmPVtmdW5jdGlvbihlLG4scil7cmV0dXJuIWEmJihyfHxuIT09bCl8fCgodD1uKS5ub2RlVHlwZT9jKGUsbixyKTpwKGUsbixyKSl9XTtmb3IoO28+dTt1KyspaWYobj1pLnJlbGF0aXZlW2VbdV0udHlwZV0pZj1baHQoZ3QoZiksbildO2Vsc2V7aWYobj1pLmZpbHRlcltlW3VdLnR5cGVdLmFwcGx5KG51bGwsZVt1XS5tYXRjaGVzKSxuW3hdKXtmb3Iocj0rK3U7bz5yO3IrKylpZihpLnJlbGF0aXZlW2Vbcl0udHlwZV0pYnJlYWs7cmV0dXJuIHl0KHU+MSYmZ3QoZiksdT4xJiZkdChlLnNsaWNlKDAsdS0xKSkucmVwbGFjZShXLFwiJDFcIiksbixyPnUmJnZ0KGUuc2xpY2UodSxyKSksbz5yJiZ2dChlPWUuc2xpY2UocikpLG8+ciYmZHQoZSkpfWYucHVzaChuKX1yZXR1cm4gZ3QoZil9ZnVuY3Rpb24gYnQoZSx0KXt2YXIgbj0wLG89dC5sZW5ndGg+MCxhPWUubGVuZ3RoPjAscz1mdW5jdGlvbihzLHUsYyxmLGQpe3ZhciBoLGcsbSx5PVtdLHY9MCxiPVwiMFwiLHg9cyYmW10sdz1udWxsIT1kLFQ9bCxDPXN8fGEmJmkuZmluZC5UQUcoXCIqXCIsZCYmdS5wYXJlbnROb2RlfHx1KSxrPU4rPW51bGw9PVQ/MTpNYXRoLnJhbmRvbSgpfHwuMTtmb3IodyYmKGw9dSE9PXAmJnUscj1uKTtudWxsIT0oaD1DW2JdKTtiKyspe2lmKGEmJmgpe2c9MDt3aGlsZShtPWVbZysrXSlpZihtKGgsdSxjKSl7Zi5wdXNoKGgpO2JyZWFrfXcmJihOPWsscj0rK24pfW8mJigoaD0hbSYmaCkmJnYtLSxzJiZ4LnB1c2goaCkpfWlmKHYrPWIsbyYmYiE9PXYpe2c9MDt3aGlsZShtPXRbZysrXSltKHgseSx1LGMpO2lmKHMpe2lmKHY+MCl3aGlsZShiLS0peFtiXXx8eVtiXXx8KHlbYl09TC5jYWxsKGYpKTt5PW10KHkpfUguYXBwbHkoZix5KSx3JiYhcyYmeS5sZW5ndGg+MCYmdit0Lmxlbmd0aD4xJiZzdC51bmlxdWVTb3J0KGYpfXJldHVybiB3JiYoTj1rLGw9VCkseH07cmV0dXJuIG8/b3Qocyk6c31zPXN0LmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9W10sbz1TW2UrXCIgXCJdO2lmKCFvKXt0fHwodD1mdChlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pbz12dCh0W25dKSxvW3hdP3IucHVzaChvKTppLnB1c2gobyk7bz1TKGUsYnQoaSxyKSl9cmV0dXJuIG99O2Z1bmN0aW9uIHh0KGUsdCxuKXt2YXIgcj0wLGk9dC5sZW5ndGg7Zm9yKDtpPnI7cisrKXN0KGUsdFtyXSxuKTtyZXR1cm4gbn1mdW5jdGlvbiB3dChlLHQsbixyKXt2YXIgbyxhLHUsbCxjLHA9ZnQoZSk7aWYoIXImJjE9PT1wLmxlbmd0aCl7aWYoYT1wWzBdPXBbMF0uc2xpY2UoMCksYS5sZW5ndGg+MiYmXCJJRFwiPT09KHU9YVswXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJiFkJiZpLnJlbGF0aXZlW2FbMV0udHlwZV0pe2lmKHQ9aS5maW5kLklEKHUubWF0Y2hlc1swXS5yZXBsYWNlKGV0LHR0KSx0KVswXSwhdClyZXR1cm4gbjtlPWUuc2xpY2UoYS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9bz1VLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6YS5sZW5ndGg7d2hpbGUoby0tKXtpZih1PWFbb10saS5yZWxhdGl2ZVtsPXUudHlwZV0pYnJlYWs7aWYoKGM9aS5maW5kW2xdKSYmKHI9Yyh1Lm1hdGNoZXNbMF0ucmVwbGFjZShldCx0dCksVi50ZXN0KGFbMF0udHlwZSkmJnQucGFyZW50Tm9kZXx8dCkpKXtpZihhLnNwbGljZShvLDEpLGU9ci5sZW5ndGgmJmR0KGEpLCFlKXJldHVybiBILmFwcGx5KG4scS5jYWxsKHIsMCkpLG47YnJlYWt9fX1yZXR1cm4gcyhlLHApKHIsdCxkLG4sVi50ZXN0KGUpKSxufWkucHNldWRvcy5udGg9aS5wc2V1ZG9zLmVxO2Z1bmN0aW9uIFR0KCl7fWkuZmlsdGVycz1UdC5wcm90b3R5cGU9aS5wc2V1ZG9zLGkuc2V0RmlsdGVycz1uZXcgVHQsYygpLHN0LmF0dHI9Yi5hdHRyLGIuZmluZD1zdCxiLmV4cHI9c3Quc2VsZWN0b3JzLGIuZXhwcltcIjpcIl09Yi5leHByLnBzZXVkb3MsYi51bmlxdWU9c3QudW5pcXVlU29ydCxiLnRleHQ9c3QuZ2V0VGV4dCxiLmlzWE1MRG9jPXN0LmlzWE1MLGIuY29udGFpbnM9c3QuY29udGFpbnN9KGUpO3ZhciBhdD0vVW50aWwkLyxzdD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyx1dD0vXi5bXjojXFxbXFwuLF0qJC8sbHQ9Yi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCxjdD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtiLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT10aGlzLmxlbmd0aDtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gcj10aGlzLHRoaXMucHVzaFN0YWNrKGIoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDtpPnQ7dCsrKWlmKGIuY29udGFpbnMoclt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj1bXSx0PTA7aT50O3QrKyliLmZpbmQoZSx0aGlzW3RdLG4pO3JldHVybiBuPXRoaXMucHVzaFN0YWNrKGk+MT9iLnVuaXF1ZShuKTpuKSxuLnNlbGVjdG9yPSh0aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCI6XCJcIikrZSxufSxoYXM6ZnVuY3Rpb24oZSl7dmFyIHQsbj1iKGUsdGhpcykscj1uLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3I+dDt0KyspaWYoYi5jb250YWlucyh0aGlzLG5bdF0pKXJldHVybiEwfSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZnQodGhpcyxlLCExKSl9LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZnQodGhpcyxlLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBlP2x0LnRlc3QoZSk/YihlLHRoaXMuY29udGV4dCkuaW5kZXgodGhpc1swXSk+PTA6Yi5maWx0ZXIoZSx0aGlzKS5sZW5ndGg+MDp0aGlzLmZpbHRlcihlKS5sZW5ndGg+MCl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9bHQudGVzdChlKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGU/YihlLHR8fHRoaXMuY29udGV4dCk6MDtmb3IoO2k+cjtyKyspe249dGhpc1tyXTt3aGlsZShuJiZuLm93bmVyRG9jdW1lbnQmJm4hPT10JiYxMSE9PW4ubm9kZVR5cGUpe2lmKGE/YS5pbmRleChuKT4tMTpiLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpe28ucHVzaChuKTticmVha31uPW4ucGFyZW50Tm9kZX19cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoPjE/Yi51bmlxdWUobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2IuaW5BcnJheSh0aGlzWzBdLGIoZSkpOmIuaW5BcnJheShlLmpxdWVyeT9lWzBdOmUsdGhpcyk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgZT9iKGUsdCk6Yi5tYWtlQXJyYXkoZSYmZS5ub2RlVHlwZT9bZV06ZSkscj1iLm1lcmdlKHRoaXMuZ2V0KCksbik7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIudW5pcXVlKHIpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksYi5mbi5hbmRTZWxmPWIuZm4uYWRkQmFjaztmdW5jdGlvbiBwdChlLHQpe2RvIGU9ZVt0XTt3aGlsZShlJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9Yi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5kaXIoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gcHQoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBwdChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZGlyKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZGlyKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmRpcihlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBiLnNpYmxpbmcoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBiLnNpYmxpbmcoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlmcmFtZVwiKT9lLmNvbnRlbnREb2N1bWVudHx8ZS5jb250ZW50V2luZG93LmRvY3VtZW50OmIubWVyZ2UoW10sZS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGUsdCl7Yi5mbltlXT1mdW5jdGlvbihuLHIpe3ZhciBpPWIubWFwKHRoaXMsdCxuKTtyZXR1cm4gYXQudGVzdChlKXx8KHI9biksciYmXCJzdHJpbmdcIj09dHlwZW9mIHImJihpPWIuZmlsdGVyKHIsaSkpLGk9dGhpcy5sZW5ndGg+MSYmIWN0W2VdP2IudW5pcXVlKGkpOmksdGhpcy5sZW5ndGg+MSYmc3QudGVzdChlKSYmKGk9aS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGkpfX0pLGIuZXh0ZW5kKHtmaWx0ZXI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoP2IuZmluZC5tYXRjaGVzU2VsZWN0b3IodFswXSxlKT9bdFswXV06W106Yi5maW5kLm1hdGNoZXMoZSx0KX0sZGlyOmZ1bmN0aW9uKGUsbixyKXt2YXIgaT1bXSxvPWVbbl07d2hpbGUobyYmOSE9PW8ubm9kZVR5cGUmJihyPT09dHx8MSE9PW8ubm9kZVR5cGV8fCFiKG8pLmlzKHIpKSkxPT09by5ub2RlVHlwZSYmaS5wdXNoKG8pLG89b1tuXTtyZXR1cm4gaX0sc2libGluZzpmdW5jdGlvbihlLHQpe3ZhciBuPVtdO2Zvcig7ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59fSk7ZnVuY3Rpb24gZnQoZSx0LG4pe2lmKHQ9dHx8MCxiLmlzRnVuY3Rpb24odCkpcmV0dXJuIGIuZ3JlcChlLGZ1bmN0aW9uKGUscil7dmFyIGk9ISF0LmNhbGwoZSxyLGUpO3JldHVybiBpPT09bn0pO2lmKHQubm9kZVR5cGUpcmV0dXJuIGIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dD09PW59KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHI9Yi5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSk7aWYodXQudGVzdCh0KSlyZXR1cm4gYi5maWx0ZXIodCxyLCFuKTt0PWIuZmlsdGVyKHQscil9cmV0dXJuIGIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBiLmluQXJyYXkoZSx0KT49MD09PW59KX1mdW5jdGlvbiBkdChlKXt2YXIgdD1odC5zcGxpdChcInxcIiksbj1lLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZihuLmNyZWF0ZUVsZW1lbnQpd2hpbGUodC5sZW5ndGgpbi5jcmVhdGVFbGVtZW50KHQucG9wKCkpO3JldHVybiBufXZhciBodD1cImFiYnJ8YXJ0aWNsZXxhc2lkZXxhdWRpb3xiZGl8Y2FudmFzfGRhdGF8ZGF0YWxpc3R8ZGV0YWlsc3xmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8aGVhZGVyfGhncm91cHxtYXJrfG1ldGVyfG5hdnxvdXRwdXR8cHJvZ3Jlc3N8c2VjdGlvbnxzdW1tYXJ5fHRpbWV8dmlkZW9cIixndD0vIGpRdWVyeVxcZCs9XCIoPzpudWxsfFxcZCspXCIvZyxtdD1SZWdFeHAoXCI8KD86XCIraHQrXCIpW1xcXFxzLz5dXCIsXCJpXCIpLHl0PS9eXFxzKy8sdnQ9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGJ0PS88KFtcXHc6XSspLyx4dD0vPHRib2R5L2ksd3Q9Lzx8JiM/XFx3KzsvLFR0PS88KD86c2NyaXB0fHN0eWxlfGxpbmspL2ksTnQ9L14oPzpjaGVja2JveHxyYWRpbykkL2ksQ3Q9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxrdD0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLEV0PS9edHJ1ZVxcLyguKikvLFN0PS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxBdD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLGxlZ2VuZDpbMSxcIjxmaWVsZHNldD5cIixcIjwvZmllbGRzZXQ+XCJdLGFyZWE6WzEsXCI8bWFwPlwiLFwiPC9tYXA+XCJdLHBhcmFtOlsxLFwiPG9iamVjdD5cIixcIjwvb2JqZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjx0Ym9keT48L3Rib2R5Pjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpiLnN1cHBvcnQuaHRtbFNlcmlhbGl6ZT9bMCxcIlwiLFwiXCJdOlsxLFwiWDxkaXY+XCIsXCI8L2Rpdj5cIl19LGp0PWR0KG8pLER0PWp0LmFwcGVuZENoaWxkKG8uY3JlYXRlRWxlbWVudChcImRpdlwiKSk7QXQub3B0Z3JvdXA9QXQub3B0aW9uLEF0LnRib2R5PUF0LnRmb290PUF0LmNvbGdyb3VwPUF0LmNhcHRpb249QXQudGhlYWQsQXQudGg9QXQudGQsYi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10P2IudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuYXBwZW5kKCh0aGlzWzBdJiZ0aGlzWzBdLm93bmVyRG9jdW1lbnR8fG8pLmNyZWF0ZVRleHROb2RlKGUpKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSx3cmFwQWxsOmZ1bmN0aW9uKGUpe2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykud3JhcEFsbChlLmNhbGwodGhpcyx0KSl9KTtpZih0aGlzWzBdKXt2YXIgdD1iKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCk7dGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdENoaWxkJiYxPT09ZS5maXJzdENoaWxkLm5vZGVUeXBlKWU9ZS5maXJzdENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpfXJldHVybiB0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuaXNGdW5jdGlvbihlKT90aGlzLmVhY2goZnVuY3Rpb24odCl7Yih0aGlzKS53cmFwSW5uZXIoZS5jYWxsKHRoaXMsdCkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9Yih0aGlzKSxuPXQuY29udGVudHMoKTtuLmxlbmd0aD9uLndyYXBBbGwoZSk6dC5hcHBlbmQoZSl9KX0sd3JhcDpmdW5jdGlvbihlKXt2YXIgdD1iLmlzRnVuY3Rpb24oZSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihuKXtiKHRoaXMpLndyYXBBbGwodD9lLmNhbGwodGhpcyxuKTplKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7Yi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8Yih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMCxmdW5jdGlvbihlKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiZ0aGlzLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITAsZnVuY3Rpb24oZSl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmdGhpcy5pbnNlcnRCZWZvcmUoZSx0aGlzLmZpcnN0Q2hpbGQpfSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMSxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMSxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7Zm9yKDtudWxsIT0obj10aGlzW3JdKTtyKyspKCFlfHxiLmZpbHRlcihlLFtuXSkubGVuZ3RoPjApJiYodHx8MSE9PW4ubm9kZVR5cGV8fGIuY2xlYW5EYXRhKE90KG4pKSxuLnBhcmVudE5vZGUmJih0JiZiLmNvbnRhaW5zKG4ub3duZXJEb2N1bWVudCxuKSYmTXQoT3QobixcInNjcmlwdFwiKSksbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7dmFyIGUsdD0wO2Zvcig7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKXsxPT09ZS5ub2RlVHlwZSYmYi5jbGVhbkRhdGEoT3QoZSwhMSkpO3doaWxlKGUuZmlyc3RDaGlsZCllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5vcHRpb25zJiZiLm5vZGVOYW1lKGUsXCJzZWxlY3RcIikmJihlLm9wdGlvbnMubGVuZ3RoPTApfXJldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGw9PWU/ITE6ZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGIuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSl7dmFyIG49dGhpc1swXXx8e30scj0wLGk9dGhpcy5sZW5ndGg7aWYoZT09PXQpcmV0dXJuIDE9PT1uLm5vZGVUeXBlP24uaW5uZXJIVE1MLnJlcGxhY2UoZ3QsXCJcIik6dDtpZighKFwic3RyaW5nXCIhPXR5cGVvZiBlfHxUdC50ZXN0KGUpfHwhYi5zdXBwb3J0Lmh0bWxTZXJpYWxpemUmJm10LnRlc3QoZSl8fCFiLnN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UmJnl0LnRlc3QoZSl8fEF0WyhidC5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pKXtlPWUucmVwbGFjZSh2dCxcIjwkMT48LyQyPlwiKTt0cnl7Zm9yKDtpPnI7cisrKW49dGhpc1tyXXx8e30sMT09PW4ubm9kZVR5cGUmJihiLmNsZWFuRGF0YShPdChuLCExKSksbi5pbm5lckhUTUw9ZSk7bj0wfWNhdGNoKG8pe319biYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihlKXt2YXIgdD1iLmlzRnVuY3Rpb24oZSk7cmV0dXJuIHR8fFwic3RyaW5nXCI9PXR5cGVvZiBlfHwoZT1iKGUpLm5vdCh0aGlzKS5kZXRhY2goKSksdGhpcy5kb21NYW5pcChbZV0sITAsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5uZXh0U2libGluZyxuPXRoaXMucGFyZW50Tm9kZTtuJiYoYih0aGlzKS5yZW1vdmUoKSxuLmluc2VydEJlZm9yZShlLHQpKX0pfSxkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUsITApfSxkb21NYW5pcDpmdW5jdGlvbihlLG4scil7ZT1mLmFwcGx5KFtdLGUpO3ZhciBpLG8sYSxzLHUsbCxjPTAscD10aGlzLmxlbmd0aCxkPXRoaXMsaD1wLTEsZz1lWzBdLG09Yi5pc0Z1bmN0aW9uKGcpO2lmKG18fCEoMT49cHx8XCJzdHJpbmdcIiE9dHlwZW9mIGd8fGIuc3VwcG9ydC5jaGVja0Nsb25lKSYmQ3QudGVzdChnKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpe3ZhciBvPWQuZXEoaSk7bSYmKGVbMF09Zy5jYWxsKHRoaXMsaSxuP28uaHRtbCgpOnQpKSxvLmRvbU1hbmlwKGUsbixyKX0pO2lmKHAmJihsPWIuYnVpbGRGcmFnbWVudChlLHRoaXNbMF0ub3duZXJEb2N1bWVudCwhMSx0aGlzKSxpPWwuZmlyc3RDaGlsZCwxPT09bC5jaGlsZE5vZGVzLmxlbmd0aCYmKGw9aSksaSkpe2ZvcihuPW4mJmIubm9kZU5hbWUoaSxcInRyXCIpLHM9Yi5tYXAoT3QobCxcInNjcmlwdFwiKSxIdCksYT1zLmxlbmd0aDtwPmM7YysrKW89bCxjIT09aCYmKG89Yi5jbG9uZShvLCEwLCEwKSxhJiZiLm1lcmdlKHMsT3QobyxcInNjcmlwdFwiKSkpLHIuY2FsbChuJiZiLm5vZGVOYW1lKHRoaXNbY10sXCJ0YWJsZVwiKT9MdCh0aGlzW2NdLFwidGJvZHlcIik6dGhpc1tjXSxvLGMpO2lmKGEpZm9yKHU9c1tzLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LGIubWFwKHMscXQpLGM9MDthPmM7YysrKW89c1tjXSxrdC50ZXN0KG8udHlwZXx8XCJcIikmJiFiLl9kYXRhKG8sXCJnbG9iYWxFdmFsXCIpJiZiLmNvbnRhaW5zKHUsbykmJihvLnNyYz9iLmFqYXgoe3VybDpvLnNyYyx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pOmIuZ2xvYmFsRXZhbCgoby50ZXh0fHxvLnRleHRDb250ZW50fHxvLmlubmVySFRNTHx8XCJcIikucmVwbGFjZShTdCxcIlwiKSkpO2w9aT1udWxsfXJldHVybiB0aGlzfX0pO2Z1bmN0aW9uIEx0KGUsdCl7cmV0dXJuIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodClbMF18fGUuYXBwZW5kQ2hpbGQoZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCkpfWZ1bmN0aW9uIEh0KGUpe3ZhciB0PWUuZ2V0QXR0cmlidXRlTm9kZShcInR5cGVcIik7cmV0dXJuIGUudHlwZT0odCYmdC5zcGVjaWZpZWQpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIHF0KGUpe3ZhciB0PUV0LmV4ZWMoZS50eXBlKTtyZXR1cm4gdD9lLnR5cGU9dFsxXTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBNdChlLHQpe3ZhciBuLHI9MDtmb3IoO251bGwhPShuPWVbcl0pO3IrKyliLl9kYXRhKG4sXCJnbG9iYWxFdmFsXCIsIXR8fGIuX2RhdGEodFtyXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIF90KGUsdCl7aWYoMT09PXQubm9kZVR5cGUmJmIuaGFzRGF0YShlKSl7dmFyIG4scixpLG89Yi5fZGF0YShlKSxhPWIuX2RhdGEodCxvKSxzPW8uZXZlbnRzO2lmKHMpe2RlbGV0ZSBhLmhhbmRsZSxhLmV2ZW50cz17fTtmb3IobiBpbiBzKWZvcihyPTAsaT1zW25dLmxlbmd0aDtpPnI7cisrKWIuZXZlbnQuYWRkKHQsbixzW25dW3JdKX1hLmRhdGEmJihhLmRhdGE9Yi5leHRlbmQoe30sYS5kYXRhKSl9fWZ1bmN0aW9uIEZ0KGUsdCl7dmFyIG4scixpO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSwhYi5zdXBwb3J0Lm5vQ2xvbmVFdmVudCYmdFtiLmV4cGFuZG9dKXtpPWIuX2RhdGEodCk7Zm9yKHIgaW4gaS5ldmVudHMpYi5yZW1vdmVFdmVudCh0LHIsaS5oYW5kbGUpO3QucmVtb3ZlQXR0cmlidXRlKGIuZXhwYW5kbyl9XCJzY3JpcHRcIj09PW4mJnQudGV4dCE9PWUudGV4dD8oSHQodCkudGV4dD1lLnRleHQscXQodCkpOlwib2JqZWN0XCI9PT1uPyh0LnBhcmVudE5vZGUmJih0Lm91dGVySFRNTD1lLm91dGVySFRNTCksYi5zdXBwb3J0Lmh0bWw1Q2xvbmUmJmUuaW5uZXJIVE1MJiYhYi50cmltKHQuaW5uZXJIVE1MKSYmKHQuaW5uZXJIVE1MPWUuaW5uZXJIVE1MKSk6XCJpbnB1dFwiPT09biYmTnQudGVzdChlLnR5cGUpPyh0LmRlZmF1bHRDaGVja2VkPXQuY2hlY2tlZD1lLmNoZWNrZWQsdC52YWx1ZSE9PWUudmFsdWUmJih0LnZhbHVlPWUudmFsdWUpKTpcIm9wdGlvblwiPT09bj90LmRlZmF1bHRTZWxlY3RlZD10LnNlbGVjdGVkPWUuZGVmYXVsdFNlbGVjdGVkOihcImlucHV0XCI9PT1ufHxcInRleHRhcmVhXCI9PT1uKSYmKHQuZGVmYXVsdFZhbHVlPWUuZGVmYXVsdFZhbHVlKX19Yi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsdCl7Yi5mbltlXT1mdW5jdGlvbihlKXt2YXIgbixyPTAsaT1bXSxvPWIoZSksYT1vLmxlbmd0aC0xO2Zvcig7YT49cjtyKyspbj1yPT09YT90aGlzOnRoaXMuY2xvbmUoITApLGIob1tyXSlbdF0obiksZC5hcHBseShpLG4uZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhpKX19KTtmdW5jdGlvbiBPdChlLG4pe3ZhciByLG8sYT0wLHM9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1pP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUobnx8XCIqXCIpOnR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwhPT1pP2UucXVlcnlTZWxlY3RvckFsbChufHxcIipcIik6dDtpZighcylmb3Iocz1bXSxyPWUuY2hpbGROb2Rlc3x8ZTtudWxsIT0obz1yW2FdKTthKyspIW58fGIubm9kZU5hbWUobyxuKT9zLnB1c2gobyk6Yi5tZXJnZShzLE90KG8sbikpO3JldHVybiBuPT09dHx8biYmYi5ub2RlTmFtZShlLG4pP2IubWVyZ2UoW2VdLHMpOnN9ZnVuY3Rpb24gQnQoZSl7TnQudGVzdChlLnR5cGUpJiYoZS5kZWZhdWx0Q2hlY2tlZD1lLmNoZWNrZWQpfWIuZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1PWIuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpO2lmKGIuc3VwcG9ydC5odG1sNUNsb25lfHxiLmlzWE1MRG9jKGUpfHwhbXQudGVzdChcIjxcIitlLm5vZGVOYW1lK1wiPlwiKT9vPWUuY2xvbmVOb2RlKCEwKTooRHQuaW5uZXJIVE1MPWUub3V0ZXJIVE1MLER0LnJlbW92ZUNoaWxkKG89RHQuZmlyc3RDaGlsZCkpLCEoYi5zdXBwb3J0Lm5vQ2xvbmVFdmVudCYmYi5zdXBwb3J0Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxiLmlzWE1MRG9jKGUpKSlmb3Iocj1PdChvKSxzPU90KGUpLGE9MDtudWxsIT0oaT1zW2FdKTsrK2EpclthXSYmRnQoaSxyW2FdKTtpZih0KWlmKG4pZm9yKHM9c3x8T3QoZSkscj1yfHxPdChvKSxhPTA7bnVsbCE9KGk9c1thXSk7YSsrKV90KGksclthXSk7ZWxzZSBfdChlLG8pO3JldHVybiByPU90KG8sXCJzY3JpcHRcIiksci5sZW5ndGg+MCYmTXQociwhdSYmT3QoZSxcInNjcmlwdFwiKSkscj1zPWk9bnVsbCxvfSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLHA9ZS5sZW5ndGgsZj1kdCh0KSxkPVtdLGg9MDtmb3IoO3A+aDtoKyspaWYobz1lW2hdLG98fDA9PT1vKWlmKFwib2JqZWN0XCI9PT1iLnR5cGUobykpYi5tZXJnZShkLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYod3QudGVzdChvKSl7cz1zfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksdT0oYnQuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksYz1BdFt1XXx8QXQuX2RlZmF1bHQscy5pbm5lckhUTUw9Y1sxXStvLnJlcGxhY2UodnQsXCI8JDE+PC8kMj5cIikrY1syXSxpPWNbMF07d2hpbGUoaS0tKXM9cy5sYXN0Q2hpbGQ7aWYoIWIuc3VwcG9ydC5sZWFkaW5nV2hpdGVzcGFjZSYmeXQudGVzdChvKSYmZC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUoeXQuZXhlYyhvKVswXSkpLCFiLnN1cHBvcnQudGJvZHkpe289XCJ0YWJsZVwiIT09dXx8eHQudGVzdChvKT9cIjx0YWJsZT5cIiE9PWNbMV18fHh0LnRlc3Qobyk/MDpzOnMuZmlyc3RDaGlsZCxpPW8mJm8uY2hpbGROb2Rlcy5sZW5ndGg7d2hpbGUoaS0tKWIubm9kZU5hbWUobD1vLmNoaWxkTm9kZXNbaV0sXCJ0Ym9keVwiKSYmIWwuY2hpbGROb2Rlcy5sZW5ndGgmJm8ucmVtb3ZlQ2hpbGQobClcbn1iLm1lcmdlKGQscy5jaGlsZE5vZGVzKSxzLnRleHRDb250ZW50PVwiXCI7d2hpbGUocy5maXJzdENoaWxkKXMucmVtb3ZlQ2hpbGQocy5maXJzdENoaWxkKTtzPWYubGFzdENoaWxkfWVsc2UgZC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO3MmJmYucmVtb3ZlQ2hpbGQocyksYi5zdXBwb3J0LmFwcGVuZENoZWNrZWR8fGIuZ3JlcChPdChkLFwiaW5wdXRcIiksQnQpLGg9MDt3aGlsZShvPWRbaCsrXSlpZigoIXJ8fC0xPT09Yi5pbkFycmF5KG8scikpJiYoYT1iLmNvbnRhaW5zKG8ub3duZXJEb2N1bWVudCxvKSxzPU90KGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksYSYmTXQocyksbikpe2k9MDt3aGlsZShvPXNbaSsrXSlrdC50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gcz1udWxsLGZ9LGNsZWFuRGF0YTpmdW5jdGlvbihlLHQpe3ZhciBuLHIsbyxhLHM9MCx1PWIuZXhwYW5kbyxsPWIuY2FjaGUscD1iLnN1cHBvcnQuZGVsZXRlRXhwYW5kbyxmPWIuZXZlbnQuc3BlY2lhbDtmb3IoO251bGwhPShuPWVbc10pO3MrKylpZigodHx8Yi5hY2NlcHREYXRhKG4pKSYmKG89blt1XSxhPW8mJmxbb10pKXtpZihhLmV2ZW50cylmb3IociBpbiBhLmV2ZW50cylmW3JdP2IuZXZlbnQucmVtb3ZlKG4scik6Yi5yZW1vdmVFdmVudChuLHIsYS5oYW5kbGUpO2xbb10mJihkZWxldGUgbFtvXSxwP2RlbGV0ZSBuW3VdOnR5cGVvZiBuLnJlbW92ZUF0dHJpYnV0ZSE9PWk/bi5yZW1vdmVBdHRyaWJ1dGUodSk6blt1XT1udWxsLGMucHVzaChvKSl9fX0pO3ZhciBQdCxSdCxXdCwkdD0vYWxwaGFcXChbXildKlxcKS9pLEl0PS9vcGFjaXR5XFxzKj1cXHMqKFteKV0qKS8senQ9L14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvLFh0PS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxVdD0vXm1hcmdpbi8sVnQ9UmVnRXhwKFwiXihcIit4K1wiKSguKikkXCIsXCJpXCIpLFl0PVJlZ0V4cChcIl4oXCIreCtcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxKdD1SZWdFeHAoXCJeKFsrLV0pPShcIit4K1wiKVwiLFwiaVwiKSxHdD17Qk9EWTpcImJsb2NrXCJ9LFF0PXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxLdD17bGV0dGVyU3BhY2luZzowLGZvbnRXZWlnaHQ6NDAwfSxadD1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sZW49W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdO2Z1bmN0aW9uIHRuKGUsdCl7aWYodCBpbiBlKXJldHVybiB0O3ZhciBuPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKSxyPXQsaT1lbi5sZW5ndGg7d2hpbGUoaS0tKWlmKHQ9ZW5baV0rbix0IGluIGUpcmV0dXJuIHQ7cmV0dXJuIHJ9ZnVuY3Rpb24gbm4oZSx0KXtyZXR1cm4gZT10fHxlLFwibm9uZVwiPT09Yi5jc3MoZSxcImRpc3BsYXlcIil8fCFiLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX1mdW5jdGlvbiBybihlLHQpe3ZhciBuLHIsaSxvPVtdLGE9MCxzPWUubGVuZ3RoO2Zvcig7cz5hO2ErKylyPWVbYV0sci5zdHlsZSYmKG9bYV09Yi5fZGF0YShyLFwib2xkZGlzcGxheVwiKSxuPXIuc3R5bGUuZGlzcGxheSx0PyhvW2FdfHxcIm5vbmVcIiE9PW58fChyLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmbm4ocikmJihvW2FdPWIuX2RhdGEocixcIm9sZGRpc3BsYXlcIix1bihyLm5vZGVOYW1lKSkpKTpvW2FdfHwoaT1ubihyKSwobiYmXCJub25lXCIhPT1ufHwhaSkmJmIuX2RhdGEocixcIm9sZGRpc3BsYXlcIixpP246Yi5jc3MocixcImRpc3BsYXlcIikpKSk7Zm9yKGE9MDtzPmE7YSsrKXI9ZVthXSxyLnN0eWxlJiYodCYmXCJub25lXCIhPT1yLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1yLnN0eWxlLmRpc3BsYXl8fChyLnN0eWxlLmRpc3BsYXk9dD9vW2FdfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGV9Yi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLG4pe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvLGE9e30scz0wO2lmKGIuaXNBcnJheShuKSl7Zm9yKG89UnQoZSksaT1uLmxlbmd0aDtpPnM7cysrKWFbbltzXV09Yi5jc3MoZSxuW3NdLCExLG8pO3JldHVybiBhfXJldHVybiByIT09dD9iLnN0eWxlKGUsbixyKTpiLmNzcyhlLG4pfSxlLG4sYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBybih0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBybih0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiYm9vbGVhblwiPT10eXBlb2YgZTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7KHQ/ZTpubih0aGlzKSk/Yih0aGlzKS5zaG93KCk6Yih0aGlzKS5oaWRlKCl9KX19KSxiLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPVd0KGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7Y29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6Yi5zdXBwb3J0LmNzc0Zsb2F0P1wiY3NzRmxvYXRcIjpcInN0eWxlRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oZSxuLHIsaSl7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgbyxhLHMsdT1iLmNhbWVsQ2FzZShuKSxsPWUuc3R5bGU7aWYobj1iLmNzc1Byb3BzW3VdfHwoYi5jc3NQcm9wc1t1XT10bihsLHUpKSxzPWIuY3NzSG9va3Nbbl18fGIuY3NzSG9va3NbdV0scj09PXQpcmV0dXJuIHMmJlwiZ2V0XCJpbiBzJiYobz1zLmdldChlLCExLGkpKSE9PXQ/bzpsW25dO2lmKGE9dHlwZW9mIHIsXCJzdHJpbmdcIj09PWEmJihvPUp0LmV4ZWMocikpJiYocj0ob1sxXSsxKSpvWzJdK3BhcnNlRmxvYXQoYi5jc3MoZSxuKSksYT1cIm51bWJlclwiKSwhKG51bGw9PXJ8fFwibnVtYmVyXCI9PT1hJiZpc05hTihyKXx8KFwibnVtYmVyXCIhPT1hfHxiLmNzc051bWJlclt1XXx8KHIrPVwicHhcIiksYi5zdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PXJ8fDAhPT1uLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFtuXT1cImluaGVyaXRcIikscyYmXCJzZXRcImluIHMmJihyPXMuc2V0KGUscixpKSk9PT10KSkpdHJ5e2xbbl09cn1jYXRjaChjKXt9fX0sY3NzOmZ1bmN0aW9uKGUsbixyLGkpe3ZhciBvLGEscyx1PWIuY2FtZWxDYXNlKG4pO3JldHVybiBuPWIuY3NzUHJvcHNbdV18fChiLmNzc1Byb3BzW3VdPXRuKGUuc3R5bGUsdSkpLHM9Yi5jc3NIb29rc1tuXXx8Yi5jc3NIb29rc1t1XSxzJiZcImdldFwiaW4gcyYmKGE9cy5nZXQoZSwhMCxyKSksYT09PXQmJihhPVd0KGUsbixpKSksXCJub3JtYWxcIj09PWEmJm4gaW4gS3QmJihhPUt0W25dKSxcIlwiPT09cnx8cj8obz1wYXJzZUZsb2F0KGEpLHI9PT0hMHx8Yi5pc051bWVyaWMobyk/b3x8MDphKTphfSxzd2FwOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYT17fTtmb3IobyBpbiB0KWFbb109ZS5zdHlsZVtvXSxlLnN0eWxlW29dPXRbb107aT1uLmFwcGx5KGUscnx8W10pO2ZvcihvIGluIHQpZS5zdHlsZVtvXT1hW29dO3JldHVybiBpfX0pLGUuZ2V0Q29tcHV0ZWRTdHlsZT8oUnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpfSxXdD1mdW5jdGlvbihlLG4scil7dmFyIGksbyxhLHM9cnx8UnQoZSksdT1zP3MuZ2V0UHJvcGVydHlWYWx1ZShuKXx8c1tuXTp0LGw9ZS5zdHlsZTtyZXR1cm4gcyYmKFwiXCIhPT11fHxiLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8KHU9Yi5zdHlsZShlLG4pKSxZdC50ZXN0KHUpJiZVdC50ZXN0KG4pJiYoaT1sLndpZHRoLG89bC5taW5XaWR0aCxhPWwubWF4V2lkdGgsbC5taW5XaWR0aD1sLm1heFdpZHRoPWwud2lkdGg9dSx1PXMud2lkdGgsbC53aWR0aD1pLGwubWluV2lkdGg9byxsLm1heFdpZHRoPWEpKSx1fSk6by5kb2N1bWVudEVsZW1lbnQuY3VycmVudFN0eWxlJiYoUnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY3VycmVudFN0eWxlfSxXdD1mdW5jdGlvbihlLG4scil7dmFyIGksbyxhLHM9cnx8UnQoZSksdT1zP3Nbbl06dCxsPWUuc3R5bGU7cmV0dXJuIG51bGw9PXUmJmwmJmxbbl0mJih1PWxbbl0pLFl0LnRlc3QodSkmJiF6dC50ZXN0KG4pJiYoaT1sLmxlZnQsbz1lLnJ1bnRpbWVTdHlsZSxhPW8mJm8ubGVmdCxhJiYoby5sZWZ0PWUuY3VycmVudFN0eWxlLmxlZnQpLGwubGVmdD1cImZvbnRTaXplXCI9PT1uP1wiMWVtXCI6dSx1PWwucGl4ZWxMZWZ0K1wicHhcIixsLmxlZnQ9aSxhJiYoby5sZWZ0PWEpKSxcIlwiPT09dT9cImF1dG9cIjp1fSk7ZnVuY3Rpb24gb24oZSx0LG4pe3ZhciByPVZ0LmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzFdLShufHwwKSkrKHJbMl18fFwicHhcIik6dH1mdW5jdGlvbiBhbihlLHQsbixyLGkpe3ZhciBvPW49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PXQ/MTowLGE9MDtmb3IoOzQ+bztvKz0yKVwibWFyZ2luXCI9PT1uJiYoYSs9Yi5jc3MoZSxuK1p0W29dLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJihhLT1iLmNzcyhlLFwicGFkZGluZ1wiK1p0W29dLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKGEtPWIuY3NzKGUsXCJib3JkZXJcIitadFtvXStcIldpZHRoXCIsITAsaSkpKTooYSs9Yi5jc3MoZSxcInBhZGRpbmdcIitadFtvXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4mJihhKz1iLmNzcyhlLFwiYm9yZGVyXCIrWnRbb10rXCJXaWR0aFwiLCEwLGkpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gc24oZSx0LG4pe3ZhciByPSEwLGk9XCJ3aWR0aFwiPT09dD9lLm9mZnNldFdpZHRoOmUub2Zmc2V0SGVpZ2h0LG89UnQoZSksYT1iLnN1cHBvcnQuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PWIuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxvKTtpZigwPj1pfHxudWxsPT1pKXtpZihpPVd0KGUsdCxvKSwoMD5pfHxudWxsPT1pKSYmKGk9ZS5zdHlsZVt0XSksWXQudGVzdChpKSlyZXR1cm4gaTtyPWEmJihiLnN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGV8fGk9PT1lLnN0eWxlW3RdKSxpPXBhcnNlRmxvYXQoaSl8fDB9cmV0dXJuIGkrYW4oZSx0LG58fChhP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLHIsbykrXCJweFwifWZ1bmN0aW9uIHVuKGUpe3ZhciB0PW8sbj1HdFtlXTtyZXR1cm4gbnx8KG49bG4oZSx0KSxcIm5vbmVcIiE9PW4mJm58fChQdD0oUHR8fGIoXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpLmNzcyhcImNzc1RleHRcIixcImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiKSkuYXBwZW5kVG8odC5kb2N1bWVudEVsZW1lbnQpLHQ9KFB0WzBdLmNvbnRlbnRXaW5kb3d8fFB0WzBdLmNvbnRlbnREb2N1bWVudCkuZG9jdW1lbnQsdC53cml0ZShcIjwhZG9jdHlwZSBodG1sPjxodG1sPjxib2R5PlwiKSx0LmNsb3NlKCksbj1sbihlLHQpLFB0LmRldGFjaCgpKSxHdFtlXT1uKSxufWZ1bmN0aW9uIGxuKGUsdCl7dmFyIG49Yih0LmNyZWF0ZUVsZW1lbnQoZSkpLmFwcGVuZFRvKHQuYm9keSkscj1iLmNzcyhuWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gbi5yZW1vdmUoKSxyfWIuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsbil7Yi5jc3NIb29rc1tuXT17Z2V0OmZ1bmN0aW9uKGUscixpKXtyZXR1cm4gcj8wPT09ZS5vZmZzZXRXaWR0aCYmWHQudGVzdChiLmNzcyhlLFwiZGlzcGxheVwiKSk/Yi5zd2FwKGUsUXQsZnVuY3Rpb24oKXtyZXR1cm4gc24oZSxuLGkpfSk6c24oZSxuLGkpOnR9LHNldDpmdW5jdGlvbihlLHQscil7dmFyIGk9ciYmUnQoZSk7cmV0dXJuIG9uKGUsdCxyP2FuKGUsbixyLGIuc3VwcG9ydC5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09Yi5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLGkpOjApfX19KSxiLnN1cHBvcnQub3BhY2l0eXx8KGIuY3NzSG9va3Mub3BhY2l0eT17Z2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEl0LnRlc3QoKHQmJmUuY3VycmVudFN0eWxlP2UuY3VycmVudFN0eWxlLmZpbHRlcjplLnN0eWxlLmZpbHRlcil8fFwiXCIpPy4wMSpwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrXCJcIjp0P1wiMVwiOlwiXCJ9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuPWUuc3R5bGUscj1lLmN1cnJlbnRTdHlsZSxpPWIuaXNOdW1lcmljKHQpP1wiYWxwaGEob3BhY2l0eT1cIisxMDAqdCtcIilcIjpcIlwiLG89ciYmci5maWx0ZXJ8fG4uZmlsdGVyfHxcIlwiO24uem9vbT0xLCh0Pj0xfHxcIlwiPT09dCkmJlwiXCI9PT1iLnRyaW0oby5yZXBsYWNlKCR0LFwiXCIpKSYmbi5yZW1vdmVBdHRyaWJ1dGUmJihuLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSxcIlwiPT09dHx8ciYmIXIuZmlsdGVyKXx8KG4uZmlsdGVyPSR0LnRlc3Qobyk/by5yZXBsYWNlKCR0LGkpOm8rXCIgXCIraSl9fSksYihmdW5jdGlvbigpe2Iuc3VwcG9ydC5yZWxpYWJsZU1hcmdpblJpZ2h0fHwoYi5jc3NIb29rcy5tYXJnaW5SaWdodD17Z2V0OmZ1bmN0aW9uKGUsbil7cmV0dXJuIG4/Yi5zd2FwKGUse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sV3QsW2UsXCJtYXJnaW5SaWdodFwiXSk6dH19KSwhYi5zdXBwb3J0LnBpeGVsUG9zaXRpb24mJmIuZm4ucG9zaXRpb24mJmIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtiLmNzc0hvb2tzW25dPXtnZXQ6ZnVuY3Rpb24oZSxyKXtyZXR1cm4gcj8ocj1XdChlLG4pLFl0LnRlc3Qocik/YihlKS5wb3NpdGlvbigpW25dK1wicHhcIjpyKTp0fX19KX0pLGIuZXhwciYmYi5leHByLmZpbHRlcnMmJihiLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIDA+PWUub2Zmc2V0V2lkdGgmJjA+PWUub2Zmc2V0SGVpZ2h0fHwhYi5zdXBwb3J0LnJlbGlhYmxlSGlkZGVuT2Zmc2V0cyYmXCJub25lXCI9PT0oZS5zdHlsZSYmZS5zdHlsZS5kaXNwbGF5fHxiLmNzcyhlLFwiZGlzcGxheVwiKSl9LGIuZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuIWIuZXhwci5maWx0ZXJzLmhpZGRlbihlKX0pLGIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGUsdCl7Yi5jc3NIb29rc1tlK3RdPXtleHBhbmQ6ZnVuY3Rpb24obil7dmFyIHI9MCxpPXt9LG89XCJzdHJpbmdcIj09dHlwZW9mIG4/bi5zcGxpdChcIiBcIik6W25dO2Zvcig7ND5yO3IrKylpW2UrWnRbcl0rdF09b1tyXXx8b1tyLTJdfHxvWzBdO3JldHVybiBpfX0sVXQudGVzdChlKXx8KGIuY3NzSG9va3NbZSt0XS5zZXQ9b24pfSk7dmFyIGNuPS8lMjAvZyxwbj0vXFxbXFxdJC8sZm49L1xccj9cXG4vZyxkbj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksaG49L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2IuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gYi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPWIucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Yi5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhYih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmaG4udGVzdCh0aGlzLm5vZGVOYW1lKSYmIWRuLnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFOdC50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPWIodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpiLmlzQXJyYXkobik/Yi5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKGZuLFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2UoZm4sXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksYi5wYXJhbT1mdW5jdGlvbihlLG4pe3ZhciByLGk9W10sbz1mdW5jdGlvbihlLHQpe3Q9Yi5pc0Z1bmN0aW9uKHQpP3QoKTpudWxsPT10P1wiXCI6dCxpW2kubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpfTtpZihuPT09dCYmKG49Yi5hamF4U2V0dGluZ3MmJmIuYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxiLmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhYi5pc1BsYWluT2JqZWN0KGUpKWIuZWFjaChlLGZ1bmN0aW9uKCl7byh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihyIGluIGUpZ24ocixlW3JdLG4sbyk7cmV0dXJuIGkuam9pbihcIiZcIikucmVwbGFjZShjbixcIitcIil9O2Z1bmN0aW9uIGduKGUsdCxuLHIpe3ZhciBpO2lmKGIuaXNBcnJheSh0KSliLmVhY2godCxmdW5jdGlvbih0LGkpe258fHBuLnRlc3QoZSk/cihlLGkpOmduKGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBpP3Q6XCJcIikrXCJdXCIsaSxuLHIpfSk7ZWxzZSBpZihufHxcIm9iamVjdFwiIT09Yi50eXBlKHQpKXIoZSx0KTtlbHNlIGZvcihpIGluIHQpZ24oZStcIltcIitpK1wiXVwiLHRbaV0sbixyKX1iLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7Yi5mblt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbih0LG51bGwsZSxuKTp0aGlzLnRyaWdnZXIodCl9fSksYi5mbi5ob3Zlcj1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX07dmFyIG1uLHluLHZuPWIubm93KCksYm49L1xcPy8seG49LyMuKiQvLHduPS8oWz8mXSlfPVteJl0qLyxUbj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKilcXHI/JC9nbSxObj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxDbj0vXig/OkdFVHxIRUFEKSQvLGtuPS9eXFwvXFwvLyxFbj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyhbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxTbj1iLmZuLmxvYWQsQW49e30sam49e30sRG49XCIqL1wiLmNvbmNhdChcIipcIik7dHJ5e3luPWEuaHJlZn1jYXRjaChMbil7eW49by5jcmVhdGVFbGVtZW50KFwiYVwiKSx5bi5ocmVmPVwiXCIseW49eW4uaHJlZn1tbj1Fbi5leGVjKHluLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBIbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiKlwiKTt2YXIgcixpPTAsbz10LnRvTG93ZXJDYXNlKCkubWF0Y2godyl8fFtdO2lmKGIuaXNGdW5jdGlvbihuKSl3aGlsZShyPW9baSsrXSlcIitcIj09PXJbMF0/KHI9ci5zbGljZSgxKXx8XCIqXCIsKGVbcl09ZVtyXXx8W10pLnVuc2hpZnQobikpOihlW3JdPWVbcl18fFtdKS5wdXNoKG4pfX1mdW5jdGlvbiBxbihlLG4scixpKXt2YXIgbz17fSxhPWU9PT1qbjtmdW5jdGlvbiBzKHUpe3ZhciBsO3JldHVybiBvW3VdPSEwLGIuZWFjaChlW3VdfHxbXSxmdW5jdGlvbihlLHUpe3ZhciBjPXUobixyLGkpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBjfHxhfHxvW2NdP2E/IShsPWMpOnQ6KG4uZGF0YVR5cGVzLnVuc2hpZnQoYykscyhjKSwhMSl9KSxsfXJldHVybiBzKG4uZGF0YVR5cGVzWzBdKXx8IW9bXCIqXCJdJiZzKFwiKlwiKX1mdW5jdGlvbiBNbihlLG4pe3ZhciByLGksbz1iLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGkgaW4gbiluW2ldIT09dCYmKChvW2ldP2U6cnx8KHI9e30pKVtpXT1uW2ldKTtyZXR1cm4gciYmYi5leHRlbmQoITAsZSxyKSxlfWIuZm4ubG9hZD1mdW5jdGlvbihlLG4scil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJlNuKXJldHVybiBTbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGksbyxhLHM9dGhpcyx1PWUuaW5kZXhPZihcIiBcIik7cmV0dXJuIHU+PTAmJihpPWUuc2xpY2UodSxlLmxlbmd0aCksZT1lLnNsaWNlKDAsdSkpLGIuaXNGdW5jdGlvbihuKT8ocj1uLG49dCk6biYmXCJvYmplY3RcIj09dHlwZW9mIG4mJihhPVwiUE9TVFwiKSxzLmxlbmd0aD4wJiZiLmFqYXgoe3VybDplLHR5cGU6YSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOm59KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLHMuaHRtbChpP2IoXCI8ZGl2PlwiKS5hcHBlbmQoYi5wYXJzZUhUTUwoZSkpLmZpbmQoaSk6ZSl9KS5jb21wbGV0ZShyJiZmdW5jdGlvbihlLHQpe3MuZWFjaChyLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pLHRoaXN9LGIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Yi5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLGIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxuKXtiW25dPWZ1bmN0aW9uKGUscixpLG8pe3JldHVybiBiLmlzRnVuY3Rpb24ocikmJihvPW98fGksaT1yLHI9dCksYi5hamF4KHt1cmw6ZSx0eXBlOm4sZGF0YVR5cGU6byxkYXRhOnIsc3VjY2VzczppfSl9fSksYi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnluLHR5cGU6XCJHRVRcIixpc0xvY2FsOk5uLnRlc3QobW5bMV0pLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkRuLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L3htbC8saHRtbDovaHRtbC8sanNvbjovanNvbi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIn0sY29udmVydGVyczp7XCIqIHRleHRcIjplLlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6Yi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOmIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0P01uKE1uKGUsYi5hamF4U2V0dGluZ3MpLHQpOk1uKGIuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkhuKEFuKSxhamF4VHJhbnNwb3J0OkhuKGpuKSxhamF4OmZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGUmJihuPWUsZT10KSxuPW58fHt9O3ZhciByLGksbyxhLHMsdSxsLGMscD1iLmFqYXhTZXR1cCh7fSxuKSxmPXAuY29udGV4dHx8cCxkPXAuY29udGV4dCYmKGYubm9kZVR5cGV8fGYuanF1ZXJ5KT9iKGYpOmIuZXZlbnQsaD1iLkRlZmVycmVkKCksZz1iLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLG09cC5zdGF0dXNDb2RlfHx7fSx5PXt9LHY9e30seD0wLFQ9XCJjYW5jZWxlZFwiLE49e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZigyPT09eCl7aWYoIWMpe2M9e307d2hpbGUodD1Ubi5leGVjKGEpKWNbdFsxXS50b0xvd2VyQ2FzZSgpXT10WzJdfXQ9Y1tlLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT10P251bGw6dH0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT14P2E6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3ZhciBuPWUudG9Mb3dlckNhc2UoKTtyZXR1cm4geHx8KGU9dltuXT12W25dfHxlLHlbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4geHx8KHAubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKDI+eClmb3IodCBpbiBlKW1bdF09W21bdF0sZVt0XV07ZWxzZSBOLmFsd2F5cyhlW04uc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fFQ7cmV0dXJuIGwmJmwuYWJvcnQodCksaygwLHQpLHRoaXN9fTtpZihoLnByb21pc2UoTikuY29tcGxldGU9Zy5hZGQsTi5zdWNjZXNzPU4uZG9uZSxOLmVycm9yPU4uZmFpbCxwLnVybD0oKGV8fHAudXJsfHx5bikrXCJcIikucmVwbGFjZSh4bixcIlwiKS5yZXBsYWNlKGtuLG1uWzFdK1wiLy9cIikscC50eXBlPW4ubWV0aG9kfHxuLnR5cGV8fHAubWV0aG9kfHxwLnR5cGUscC5kYXRhVHlwZXM9Yi50cmltKHAuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKHcpfHxbXCJcIl0sbnVsbD09cC5jcm9zc0RvbWFpbiYmKHI9RW4uZXhlYyhwLnVybC50b0xvd2VyQ2FzZSgpKSxwLmNyb3NzRG9tYWluPSEoIXJ8fHJbMV09PT1tblsxXSYmclsyXT09PW1uWzJdJiYoclszXXx8KFwiaHR0cDpcIj09PXJbMV0/ODA6NDQzKSk9PShtblszXXx8KFwiaHR0cDpcIj09PW1uWzFdPzgwOjQ0MykpKSkscC5kYXRhJiZwLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgcC5kYXRhJiYocC5kYXRhPWIucGFyYW0ocC5kYXRhLHAudHJhZGl0aW9uYWwpKSxxbihBbixwLG4sTiksMj09PXgpcmV0dXJuIE47dT1wLmdsb2JhbCx1JiYwPT09Yi5hY3RpdmUrKyYmYi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHAudHlwZT1wLnR5cGUudG9VcHBlckNhc2UoKSxwLmhhc0NvbnRlbnQ9IUNuLnRlc3QocC50eXBlKSxvPXAudXJsLHAuaGFzQ29udGVudHx8KHAuZGF0YSYmKG89cC51cmwrPShibi50ZXN0KG8pP1wiJlwiOlwiP1wiKStwLmRhdGEsZGVsZXRlIHAuZGF0YSkscC5jYWNoZT09PSExJiYocC51cmw9d24udGVzdChvKT9vLnJlcGxhY2Uod24sXCIkMV89XCIrdm4rKyk6bysoYm4udGVzdChvKT9cIiZcIjpcIj9cIikrXCJfPVwiK3ZuKyspKSxwLmlmTW9kaWZpZWQmJihiLmxhc3RNb2RpZmllZFtvXSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixiLmxhc3RNb2RpZmllZFtvXSksYi5ldGFnW29dJiZOLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsYi5ldGFnW29dKSksKHAuZGF0YSYmcC5oYXNDb250ZW50JiZwLmNvbnRlbnRUeXBlIT09ITF8fG4uY29udGVudFR5cGUpJiZOLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixwLmNvbnRlbnRUeXBlKSxOLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixwLmRhdGFUeXBlc1swXSYmcC5hY2NlcHRzW3AuZGF0YVR5cGVzWzBdXT9wLmFjY2VwdHNbcC5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXAuZGF0YVR5cGVzWzBdP1wiLCBcIitEbitcIjsgcT0wLjAxXCI6XCJcIik6cC5hY2NlcHRzW1wiKlwiXSk7Zm9yKGkgaW4gcC5oZWFkZXJzKU4uc2V0UmVxdWVzdEhlYWRlcihpLHAuaGVhZGVyc1tpXSk7aWYocC5iZWZvcmVTZW5kJiYocC5iZWZvcmVTZW5kLmNhbGwoZixOLHApPT09ITF8fDI9PT14KSlyZXR1cm4gTi5hYm9ydCgpO1Q9XCJhYm9ydFwiO2ZvcihpIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KU5baV0ocFtpXSk7aWYobD1xbihqbixwLG4sTikpe04ucmVhZHlTdGF0ZT0xLHUmJmQudHJpZ2dlcihcImFqYXhTZW5kXCIsW04scF0pLHAuYXN5bmMmJnAudGltZW91dD4wJiYocz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Ti5hYm9ydChcInRpbWVvdXRcIil9LHAudGltZW91dCkpO3RyeXt4PTEsbC5zZW5kKHksayl9Y2F0Y2goQyl7aWYoISgyPngpKXRocm93IEM7aygtMSxDKX19ZWxzZSBrKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGsoZSxuLHIsaSl7dmFyIGMseSx2LHcsVCxDPW47MiE9PXgmJih4PTIscyYmY2xlYXJUaW1lb3V0KHMpLGw9dCxhPWl8fFwiXCIsTi5yZWFkeVN0YXRlPWU+MD80OjAsciYmKHc9X24ocCxOLHIpKSxlPj0yMDAmJjMwMD5lfHwzMDQ9PT1lPyhwLmlmTW9kaWZpZWQmJihUPU4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLFQmJihiLmxhc3RNb2RpZmllZFtvXT1UKSxUPU4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLFQmJihiLmV0YWdbb109VCkpLDIwND09PWU/KGM9ITAsQz1cIm5vY29udGVudFwiKTozMDQ9PT1lPyhjPSEwLEM9XCJub3Rtb2RpZmllZFwiKTooYz1GbihwLHcpLEM9Yy5zdGF0ZSx5PWMuZGF0YSx2PWMuZXJyb3IsYz0hdikpOih2PUMsKGV8fCFDKSYmKEM9XCJlcnJvclwiLDA+ZSYmKGU9MCkpKSxOLnN0YXR1cz1lLE4uc3RhdHVzVGV4dD0obnx8QykrXCJcIixjP2gucmVzb2x2ZVdpdGgoZixbeSxDLE5dKTpoLnJlamVjdFdpdGgoZixbTixDLHZdKSxOLnN0YXR1c0NvZGUobSksbT10LHUmJmQudHJpZ2dlcihjP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtOLHAsYz95OnZdKSxnLmZpcmVXaXRoKGYsW04sQ10pLHUmJihkLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbTixwXSksLS1iLmFjdGl2ZXx8Yi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gTn0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsbil7cmV0dXJuIGIuZ2V0KGUsdCxuLFwic2NyaXB0XCIpfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5nZXQoZSx0LG4sXCJqc29uXCIpfX0pO2Z1bmN0aW9uIF9uKGUsbixyKXt2YXIgaSxvLGEscyx1PWUuY29udGVudHMsbD1lLmRhdGFUeXBlcyxjPWUucmVzcG9uc2VGaWVsZHM7Zm9yKHMgaW4gYylzIGluIHImJihuW2Nbc11dPXJbc10pO3doaWxlKFwiKlwiPT09bFswXSlsLnNoaWZ0KCksbz09PXQmJihvPWUubWltZVR5cGV8fG4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKG8pZm9yKHMgaW4gdSlpZih1W3NdJiZ1W3NdLnRlc3Qobykpe2wudW5zaGlmdChzKTticmVha31pZihsWzBdaW4gcilhPWxbMF07ZWxzZXtmb3IocyBpbiByKXtpZighbFswXXx8ZS5jb252ZXJ0ZXJzW3MrXCIgXCIrbFswXV0pe2E9czticmVha31pfHwoaT1zKX1hPWF8fGl9cmV0dXJuIGE/KGEhPT1sWzBdJiZsLnVuc2hpZnQoYSksclthXSk6dH1mdW5jdGlvbiBGbihlLHQpe3ZhciBuLHIsaSxvLGE9e30scz0wLHU9ZS5kYXRhVHlwZXMuc2xpY2UoKSxsPXVbMF07aWYoZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdVsxXSlmb3IoaSBpbiBlLmNvbnZlcnRlcnMpYVtpLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1tpXTtmb3IoO3I9dVsrK3NdOylpZihcIipcIiE9PXIpe2lmKFwiKlwiIT09bCYmbCE9PXIpe2lmKGk9YVtsK1wiIFwiK3JdfHxhW1wiKiBcIityXSwhaSlmb3IobiBpbiBhKWlmKG89bi5zcGxpdChcIiBcIiksb1sxXT09PXImJihpPWFbbCtcIiBcIitvWzBdXXx8YVtcIiogXCIrb1swXV0pKXtpPT09ITA/aT1hW25dOmFbbl0hPT0hMCYmKHI9b1swXSx1LnNwbGljZShzLS0sMCxyKSk7YnJlYWt9aWYoaSE9PSEwKWlmKGkmJmVbXCJ0aHJvd3NcIl0pdD1pKHQpO2Vsc2UgdHJ5e3Q9aSh0KX1jYXRjaChjKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmk/YzpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitsK1wiIHRvIFwiK3J9fX1sPXJ9cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19Yi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZ2xvYmFsRXZhbChlKSxlfX19KSxiLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXtlLmNhY2hlPT09dCYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIixlLmdsb2JhbD0hMSl9KSxiLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihlKXtpZihlLmNyb3NzRG9tYWluKXt2YXIgbixyPW8uaGVhZHx8YihcImhlYWRcIilbMF18fG8uZG9jdW1lbnRFbGVtZW50O3JldHVybntzZW5kOmZ1bmN0aW9uKHQsaSl7bj1vLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbi5hc3luYz0hMCxlLnNjcmlwdENoYXJzZXQmJihuLmNoYXJzZXQ9ZS5zY3JpcHRDaGFyc2V0KSxuLnNyYz1lLnVybCxuLm9ubG9hZD1uLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihlLHQpeyh0fHwhbi5yZWFkeVN0YXRlfHwvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KG4ucmVhZHlTdGF0ZSkpJiYobi5vbmxvYWQ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxuLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxuPW51bGwsdHx8aSgyMDAsXCJzdWNjZXNzXCIpKX0sci5pbnNlcnRCZWZvcmUobixyLmZpcnN0Q2hpbGQpfSxhYm9ydDpmdW5jdGlvbigpe24mJm4ub25sb2FkKHQsITApfX19fSk7dmFyIE9uPVtdLEJuPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Yi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9T24ucG9wKCl8fGIuZXhwYW5kbytcIl9cIit2bisrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksYi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKG4scixpKXt2YXIgbyxhLHMsdT1uLmpzb25wIT09ITEmJihCbi50ZXN0KG4udXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBuLmRhdGEmJiEobi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmQm4udGVzdChuLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIHV8fFwianNvbnBcIj09PW4uZGF0YVR5cGVzWzBdPyhvPW4uanNvbnBDYWxsYmFjaz1iLmlzRnVuY3Rpb24obi5qc29ucENhbGxiYWNrKT9uLmpzb25wQ2FsbGJhY2soKTpuLmpzb25wQ2FsbGJhY2ssdT9uW3VdPW5bdV0ucmVwbGFjZShCbixcIiQxXCIrbyk6bi5qc29ucCE9PSExJiYobi51cmwrPShibi50ZXN0KG4udXJsKT9cIiZcIjpcIj9cIikrbi5qc29ucCtcIj1cIitvKSxuLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBzfHxiLmVycm9yKG8rXCIgd2FzIG5vdCBjYWxsZWRcIiksc1swXX0sbi5kYXRhVHlwZXNbMF09XCJqc29uXCIsYT1lW29dLGVbb109ZnVuY3Rpb24oKXtzPWFyZ3VtZW50c30saS5hbHdheXMoZnVuY3Rpb24oKXtlW29dPWEsbltvXSYmKG4uanNvbnBDYWxsYmFjaz1yLmpzb25wQ2FsbGJhY2ssT24ucHVzaChvKSkscyYmYi5pc0Z1bmN0aW9uKGEpJiZhKHNbMF0pLHM9YT10fSksXCJzY3JpcHRcIik6dH0pO3ZhciBQbixSbixXbj0wLCRuPWUuQWN0aXZlWE9iamVjdCYmZnVuY3Rpb24oKXt2YXIgZTtmb3IoZSBpbiBQbilQbltlXSh0LCEwKX07ZnVuY3Rpb24gSW4oKXt0cnl7cmV0dXJuIG5ldyBlLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKHQpe319ZnVuY3Rpb24gem4oKXt0cnl7cmV0dXJuIG5ldyBlLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1jYXRjaCh0KXt9fWIuYWpheFNldHRpbmdzLnhocj1lLkFjdGl2ZVhPYmplY3Q/ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0xvY2FsJiZJbigpfHx6bigpfTpJbixSbj1iLmFqYXhTZXR0aW5ncy54aHIoKSxiLnN1cHBvcnQuY29ycz0hIVJuJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gUm4sUm49Yi5zdXBwb3J0LmFqYXg9ISFSbixSbiYmYi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKG4pe2lmKCFuLmNyb3NzRG9tYWlufHxiLnN1cHBvcnQuY29ycyl7dmFyIHI7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oaSxvKXt2YXIgYSxzLHU9bi54aHIoKTtpZihuLnVzZXJuYW1lP3Uub3BlbihuLnR5cGUsbi51cmwsbi5hc3luYyxuLnVzZXJuYW1lLG4ucGFzc3dvcmQpOnUub3BlbihuLnR5cGUsbi51cmwsbi5hc3luYyksbi54aHJGaWVsZHMpZm9yKHMgaW4gbi54aHJGaWVsZHMpdVtzXT1uLnhockZpZWxkc1tzXTtuLm1pbWVUeXBlJiZ1Lm92ZXJyaWRlTWltZVR5cGUmJnUub3ZlcnJpZGVNaW1lVHlwZShuLm1pbWVUeXBlKSxuLmNyb3NzRG9tYWlufHxpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7dHJ5e2ZvcihzIGluIGkpdS5zZXRSZXF1ZXN0SGVhZGVyKHMsaVtzXSl9Y2F0Y2gobCl7fXUuc2VuZChuLmhhc0NvbnRlbnQmJm4uZGF0YXx8bnVsbCkscj1mdW5jdGlvbihlLGkpe3ZhciBzLGwsYyxwO3RyeXtpZihyJiYoaXx8ND09PXUucmVhZHlTdGF0ZSkpaWYocj10LGEmJih1Lm9ucmVhZHlzdGF0ZWNoYW5nZT1iLm5vb3AsJG4mJmRlbGV0ZSBQblthXSksaSk0IT09dS5yZWFkeVN0YXRlJiZ1LmFib3J0KCk7ZWxzZXtwPXt9LHM9dS5zdGF0dXMsbD11LmdldEFsbFJlc3BvbnNlSGVhZGVycygpLFwic3RyaW5nXCI9PXR5cGVvZiB1LnJlc3BvbnNlVGV4dCYmKHAudGV4dD11LnJlc3BvbnNlVGV4dCk7dHJ5e2M9dS5zdGF0dXNUZXh0fWNhdGNoKGYpe2M9XCJcIn1zfHwhbi5pc0xvY2FsfHxuLmNyb3NzRG9tYWluPzEyMjM9PT1zJiYocz0yMDQpOnM9cC50ZXh0PzIwMDo0MDR9fWNhdGNoKGQpe2l8fG8oLTEsZCl9cCYmbyhzLGMscCxsKX0sbi5hc3luYz80PT09dS5yZWFkeVN0YXRlP3NldFRpbWVvdXQocik6KGE9KytXbiwkbiYmKFBufHwoUG49e30sYihlKS51bmxvYWQoJG4pKSxQblthXT1yKSx1Lm9ucmVhZHlzdGF0ZWNoYW5nZT1yKTpyKCl9LGFib3J0OmZ1bmN0aW9uKCl7ciYmcih0LCEwKX19fX0pO3ZhciBYbixVbixWbj0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sWW49UmVnRXhwKFwiXig/OihbKy1dKT18KShcIit4K1wiKShbYS16JV0qKSRcIixcImlcIiksSm49L3F1ZXVlSG9va3MkLyxHbj1bbnJdLFFuPXtcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9dGhpcy5jcmVhdGVUd2VlbihlLHQpLG89WW4uZXhlYyh0KSxhPWkuY3VyKCkscz0rYXx8MCx1PTEsbD0yMDtpZihvKXtpZihuPStvWzJdLHI9b1szXXx8KGIuY3NzTnVtYmVyW2VdP1wiXCI6XCJweFwiKSxcInB4XCIhPT1yJiZzKXtzPWIuY3NzKGkuZWxlbSxlLCEwKXx8bnx8MTtkbyB1PXV8fFwiLjVcIixzLz11LGIuc3R5bGUoaS5lbGVtLGUscytyKTt3aGlsZSh1IT09KHU9aS5jdXIoKS9hKSYmMSE9PXUmJi0tbCl9aS51bml0PXIsaS5zdGFydD1zLGkuZW5kPW9bMV0/cysob1sxXSsxKSpuOm59cmV0dXJuIGl9XX07ZnVuY3Rpb24gS24oKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe1huPXR9KSxYbj1iLm5vdygpfWZ1bmN0aW9uIFpuKGUsdCl7Yi5lYWNoKHQsZnVuY3Rpb24odCxuKXt2YXIgcj0oUW5bdF18fFtdKS5jb25jYXQoUW5bXCIqXCJdKSxpPTAsbz1yLmxlbmd0aDtmb3IoO28+aTtpKyspaWYocltpXS5jYWxsKGUsdCxuKSlyZXR1cm59KX1mdW5jdGlvbiBlcihlLHQsbil7dmFyIHIsaSxvPTAsYT1Hbi5sZW5ndGgscz1iLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihpKXJldHVybiExO3ZhciB0PVhufHxLbigpLG49TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLXQpLHI9bi9sLmR1cmF0aW9ufHwwLG89MS1yLGE9MCx1PWwudHdlZW5zLmxlbmd0aDtmb3IoO3U+YTthKyspbC50d2VlbnNbYV0ucnVuKG8pO3JldHVybiBzLm5vdGlmeVdpdGgoZSxbbCxvLG5dKSwxPm8mJnU/bjoocy5yZXNvbHZlV2l0aChlLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTplLHByb3BzOmIuZXh0ZW5kKHt9LHQpLG9wdHM6Yi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e319LG4pLG9yaWdpbmFsUHJvcGVydGllczp0LG9yaWdpbmFsT3B0aW9uczpuLHN0YXJ0VGltZTpYbnx8S24oKSxkdXJhdGlvbjpuLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbih0LG4pe3ZhciByPWIuVHdlZW4oZSxsLm9wdHMsdCxuLGwub3B0cy5zcGVjaWFsRWFzaW5nW3RdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChyKSxyfSxzdG9wOmZ1bmN0aW9uKHQpe3ZhciBuPTAscj10P2wudHdlZW5zLmxlbmd0aDowO2lmKGkpcmV0dXJuIHRoaXM7Zm9yKGk9ITA7cj5uO24rKylsLnR3ZWVuc1tuXS5ydW4oMSk7cmV0dXJuIHQ/cy5yZXNvbHZlV2l0aChlLFtsLHRdKTpzLnJlamVjdFdpdGgoZSxbbCx0XSksdGhpc319KSxjPWwucHJvcHM7Zm9yKHRyKGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO2E+bztvKyspaWYocj1HbltvXS5jYWxsKGwsZSxjLGwub3B0cykpcmV0dXJuIHI7cmV0dXJuIFpuKGwsYyksYi5pc0Z1bmN0aW9uKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKGUsbCksYi5meC50aW1lcihiLmV4dGVuZCh1LHtlbGVtOmUsYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKX1mdW5jdGlvbiB0cihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKGkgaW4gZSlpZihyPWIuY2FtZWxDYXNlKGkpLG89dFtyXSxuPWVbaV0sYi5pc0FycmF5KG4pJiYobz1uWzFdLG49ZVtpXT1uWzBdKSxpIT09ciYmKGVbcl09bixkZWxldGUgZVtpXSksYT1iLmNzc0hvb2tzW3JdLGEmJlwiZXhwYW5kXCJpbiBhKXtuPWEuZXhwYW5kKG4pLGRlbGV0ZSBlW3JdO2ZvcihpIGluIG4paSBpbiBlfHwoZVtpXT1uW2ldLHRbaV09byl9ZWxzZSB0W3JdPW99Yi5BbmltYXRpb249Yi5leHRlbmQoZXIse3R3ZWVuZXI6ZnVuY3Rpb24oZSx0KXtiLmlzRnVuY3Rpb24oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5zcGxpdChcIiBcIik7dmFyIG4scj0wLGk9ZS5sZW5ndGg7Zm9yKDtpPnI7cisrKW49ZVtyXSxRbltuXT1RbltuXXx8W10sUW5bbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9Hbi51bnNoaWZ0KGUpOkduLnB1c2goZSl9fSk7ZnVuY3Rpb24gbnIoZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMscCxmPXRoaXMsZD1lLnN0eWxlLGg9e30sZz1bXSxtPWUubm9kZVR5cGUmJm5uKGUpO24ucXVldWV8fChjPWIuX3F1ZXVlSG9va3MoZSxcImZ4XCIpLG51bGw9PWMudW5xdWV1ZWQmJihjLnVucXVldWVkPTAscD1jLmVtcHR5LmZpcmUsYy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7Yy51bnF1ZXVlZHx8cCgpfSksYy51bnF1ZXVlZCsrLGYuYWx3YXlzKGZ1bmN0aW9uKCl7Zi5hbHdheXMoZnVuY3Rpb24oKXtjLnVucXVldWVkLS0sYi5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxjLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1lLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIHR8fFwid2lkdGhcImluIHQpJiYobi5vdmVyZmxvdz1bZC5vdmVyZmxvdyxkLm92ZXJmbG93WCxkLm92ZXJmbG93WV0sXCJpbmxpbmVcIj09PWIuY3NzKGUsXCJkaXNwbGF5XCIpJiZcIm5vbmVcIj09PWIuY3NzKGUsXCJmbG9hdFwiKSYmKGIuc3VwcG9ydC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0JiZcImlubGluZVwiIT09dW4oZS5ub2RlTmFtZSk/ZC56b29tPTE6ZC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoZC5vdmVyZmxvdz1cImhpZGRlblwiLGIuc3VwcG9ydC5zaHJpbmtXcmFwQmxvY2tzfHxmLmFsd2F5cyhmdW5jdGlvbigpe2Qub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxkLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGQub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSk7Zm9yKGkgaW4gdClpZihhPXRbaV0sVm4uZXhlYyhhKSl7aWYoZGVsZXRlIHRbaV0sdT11fHxcInRvZ2dsZVwiPT09YSxhPT09KG0/XCJoaWRlXCI6XCJzaG93XCIpKWNvbnRpbnVlO2cucHVzaChpKX1pZihvPWcubGVuZ3RoKXtzPWIuX2RhdGEoZSxcImZ4c2hvd1wiKXx8Yi5fZGF0YShlLFwiZnhzaG93XCIse30pLFwiaGlkZGVuXCJpbiBzJiYobT1zLmhpZGRlbiksdSYmKHMuaGlkZGVuPSFtKSxtP2IoZSkuc2hvdygpOmYuZG9uZShmdW5jdGlvbigpe2IoZSkuaGlkZSgpfSksZi5kb25lKGZ1bmN0aW9uKCl7dmFyIHQ7Yi5fcmVtb3ZlRGF0YShlLFwiZnhzaG93XCIpO2Zvcih0IGluIGgpYi5zdHlsZShlLHQsaFt0XSl9KTtmb3IoaT0wO28+aTtpKyspcj1nW2ldLGw9Zi5jcmVhdGVUd2VlbihyLG0/c1tyXTowKSxoW3JdPXNbcl18fGIuc3R5bGUoZSxyKSxyIGluIHN8fChzW3JdPWwuc3RhcnQsbSYmKGwuZW5kPWwuc3RhcnQsbC5zdGFydD1cIndpZHRoXCI9PT1yfHxcImhlaWdodFwiPT09cj8xOjApKX19ZnVuY3Rpb24gcnIoZSx0LG4scixpKXtyZXR1cm4gbmV3IHJyLnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9Yi5Ud2Vlbj1ycixyci5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnJyLGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFwic3dpbmdcIix0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KGIuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9cnIucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOnJyLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPXJyLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLnBvcz10PXRoaXMub3B0aW9ucy5kdXJhdGlvbj9iLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTplLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOnJyLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LHJyLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1yci5wcm90b3R5cGUscnIucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT1lLmVsZW1bZS5wcm9wXXx8ZS5lbGVtLnN0eWxlJiZudWxsIT1lLmVsZW0uc3R5bGVbZS5wcm9wXT8odD1iLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpLHQmJlwiYXV0b1wiIT09dD90OjApOmUuZWxlbVtlLnByb3BdfSxzZXQ6ZnVuY3Rpb24oZSl7Yi5meC5zdGVwW2UucHJvcF0/Yi5meC5zdGVwW2UucHJvcF0oZSk6ZS5lbGVtLnN0eWxlJiYobnVsbCE9ZS5lbGVtLnN0eWxlW2IuY3NzUHJvcHNbZS5wcm9wXV18fGIuY3NzSG9va3NbZS5wcm9wXSk/Yi5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCk6ZS5lbGVtW2UucHJvcF09ZS5ub3d9fX0scnIucHJvcEhvb2tzLnNjcm9sbFRvcD1yci5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxiLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUsdCl7dmFyIG49Yi5mblt0XTtiLmZuW3RdPWZ1bmN0aW9uKGUscixpKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShpcih0LCEwKSxlLHIsaSl9fSksYi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIobm4pLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9Yi5pc0VtcHR5T2JqZWN0KGUpLG89Yi5zcGVlZCh0LG4sciksYT1mdW5jdGlvbigpe3ZhciB0PWVyKHRoaXMsYi5leHRlbmQoe30sZSksbyk7YS5maW5pc2g9ZnVuY3Rpb24oKXt0LnN0b3AoITApfSwoaXx8Yi5fZGF0YSh0aGlzLFwiZmluaXNoXCIpKSYmdC5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8by5xdWV1ZT09PSExP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQocil9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYocj1uLG49ZSxlPXQpLG4mJmUhPT0hMSYmdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSEwLG49bnVsbCE9ZSYmZStcInF1ZXVlSG9va3NcIixvPWIudGltZXJzLGE9Yi5fZGF0YSh0aGlzKTtpZihuKWFbbl0mJmFbbl0uc3RvcCYmaShhW25dKTtlbHNlIGZvcihuIGluIGEpYVtuXSYmYVtuXS5zdG9wJiZKbi50ZXN0KG4pJiZpKGFbbl0pO2ZvcihuPW8ubGVuZ3RoO24tLTspb1tuXS5lbGVtIT09dGhpc3x8bnVsbCE9ZSYmb1tuXS5xdWV1ZSE9PWV8fChvW25dLmFuaW0uc3RvcChyKSx0PSExLG8uc3BsaWNlKG4sMSkpOyh0fHwhcikmJmIuZGVxdWV1ZSh0aGlzLGUpfSl9LGZpbmlzaDpmdW5jdGlvbihlKXtyZXR1cm4gZSE9PSExJiYoZT1lfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LG49Yi5fZGF0YSh0aGlzKSxyPW5bZStcInF1ZXVlXCJdLGk9bltlK1wicXVldWVIb29rc1wiXSxvPWIudGltZXJzLGE9cj9yLmxlbmd0aDowO2ZvcihuLmZpbmlzaD0hMCxiLnF1ZXVlKHRoaXMsZSxbXSksaSYmaS5jdXImJmkuY3VyLmZpbmlzaCYmaS5jdXIuZmluaXNoLmNhbGwodGhpcyksdD1vLmxlbmd0aDt0LS07KW9bdF0uZWxlbT09PXRoaXMmJm9bdF0ucXVldWU9PT1lJiYob1t0XS5hbmltLnN0b3AoITApLG8uc3BsaWNlKHQsMSkpO2Zvcih0PTA7YT50O3QrKylyW3RdJiZyW3RdLmZpbmlzaCYmclt0XS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgbi5maW5pc2h9KX19KTtmdW5jdGlvbiBpcihlLHQpe3ZhciBuLHI9e2hlaWdodDplfSxpPTA7Zm9yKHQ9dD8xOjA7ND5pO2krPTItdCluPVp0W2ldLHJbXCJtYXJnaW5cIituXT1yW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihyLm9wYWNpdHk9ci53aWR0aD1lKSxyfWIuZWFjaCh7c2xpZGVEb3duOmlyKFwic2hvd1wiKSxzbGlkZVVwOmlyKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTppcihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUsdCl7Yi5mbltlXT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMuYW5pbWF0ZSh0LGUsbixyKX19KSxiLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9iLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fGIuaXNGdW5jdGlvbihlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhYi5pc0Z1bmN0aW9uKHQpJiZ0fTtyZXR1cm4gci5kdXJhdGlvbj1iLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiByLmR1cmF0aW9uP3IuZHVyYXRpb246ci5kdXJhdGlvbiBpbiBiLmZ4LnNwZWVkcz9iLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpiLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ci5xdWV1ZXx8ci5xdWV1ZT09PSEwKSYmKHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXtiLmlzRnVuY3Rpb24oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJmIuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxiLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9fSxiLnRpbWVycz1bXSxiLmZ4PXJyLnByb3RvdHlwZS5pbml0LGIuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLG49Yi50aW1lcnMscj0wO2ZvcihYbj1iLm5vdygpO24ubGVuZ3RoPnI7cisrKWU9bltyXSxlKCl8fG5bcl0hPT1lfHxuLnNwbGljZShyLS0sMSk7bi5sZW5ndGh8fGIuZnguc3RvcCgpLFhuPXR9LGIuZngudGltZXI9ZnVuY3Rpb24oZSl7ZSgpJiZiLnRpbWVycy5wdXNoKGUpJiZiLmZ4LnN0YXJ0KCl9LGIuZnguaW50ZXJ2YWw9MTMsYi5meC5zdGFydD1mdW5jdGlvbigpe1VufHwoVW49c2V0SW50ZXJ2YWwoYi5meC50aWNrLGIuZnguaW50ZXJ2YWwpKX0sYi5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChVbiksVW49bnVsbH0sYi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sYi5meC5zdGVwPXt9LGIuZXhwciYmYi5leHByLmZpbHRlcnMmJihiLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihlKXtyZXR1cm4gYi5ncmVwKGIudGltZXJzLGZ1bmN0aW9uKHQpe3JldHVybiBlPT09dC5lbGVtfSkubGVuZ3RofSksYi5mbi5vZmZzZXQ9ZnVuY3Rpb24oZSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24odCl7Yi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsZSx0KX0pO3ZhciBuLHIsbz17dG9wOjAsbGVmdDowfSxhPXRoaXNbMF0scz1hJiZhLm93bmVyRG9jdW1lbnQ7aWYocylyZXR1cm4gbj1zLmRvY3VtZW50RWxlbWVudCxiLmNvbnRhaW5zKG4sYSk/KHR5cGVvZiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCE9PWkmJihvPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLHI9b3Iocykse3RvcDpvLnRvcCsoci5wYWdlWU9mZnNldHx8bi5zY3JvbGxUb3ApLShuLmNsaWVudFRvcHx8MCksbGVmdDpvLmxlZnQrKHIucGFnZVhPZmZzZXR8fG4uc2Nyb2xsTGVmdCktKG4uY2xpZW50TGVmdHx8MCl9KTpvfSxiLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1iLmNzcyhlLFwicG9zaXRpb25cIik7XCJzdGF0aWNcIj09PXImJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIik7dmFyIGk9YihlKSxvPWkub2Zmc2V0KCksYT1iLmNzcyhlLFwidG9wXCIpLHM9Yi5jc3MoZSxcImxlZnRcIiksdT0oXCJhYnNvbHV0ZVwiPT09cnx8XCJmaXhlZFwiPT09cikmJmIuaW5BcnJheShcImF1dG9cIixbYSxzXSk+LTEsbD17fSxjPXt9LHAsZjt1PyhjPWkucG9zaXRpb24oKSxwPWMudG9wLGY9Yy5sZWZ0KToocD1wYXJzZUZsb2F0KGEpfHwwLGY9cGFyc2VGbG9hdChzKXx8MCksYi5pc0Z1bmN0aW9uKHQpJiYodD10LmNhbGwoZSxuLG8pKSxudWxsIT10LnRvcCYmKGwudG9wPXQudG9wLW8udG9wK3ApLG51bGwhPXQubGVmdCYmKGwubGVmdD10LmxlZnQtby5sZWZ0K2YpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsbCk6aS5jc3MobCl9fSxiLmZuLmV4dGVuZCh7cG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG49e3RvcDowLGxlZnQ6MH0scj10aGlzWzBdO3JldHVyblwiZml4ZWRcIj09PWIuY3NzKHIsXCJwb3NpdGlvblwiKT90PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGU9dGhpcy5vZmZzZXRQYXJlbnQoKSx0PXRoaXMub2Zmc2V0KCksYi5ub2RlTmFtZShlWzBdLFwiaHRtbFwiKXx8KG49ZS5vZmZzZXQoKSksbi50b3ArPWIuY3NzKGVbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxuLmxlZnQrPWIuY3NzKGVbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6dC50b3Atbi50b3AtYi5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1uLmxlZnQtYi5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnR8fG8uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJiFiLm5vZGVOYW1lKGUsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09Yi5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fG8uZG9jdW1lbnRFbGVtZW50fSl9fSksYi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihlLG4pe3ZhciByPS9ZLy50ZXN0KG4pO2IuZm5bZV09ZnVuY3Rpb24oaSl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSxpLG8pe3ZhciBhPW9yKGUpO3JldHVybiBvPT09dD9hP24gaW4gYT9hW25dOmEuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W2ldOmVbaV06KGE/YS5zY3JvbGxUbyhyP2IoYSkuc2Nyb2xsTGVmdCgpOm8scj9vOmIoYSkuc2Nyb2xsVG9wKCkpOmVbaV09byx0KX0sZSxpLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSk7ZnVuY3Rpb24gb3IoZSl7cmV0dXJuIGIuaXNXaW5kb3coZSk/ZTo5PT09ZS5ub2RlVHlwZT9lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzohMX1iLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oZSxuKXtiLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2UsY29udGVudDpuLFwiXCI6XCJvdXRlclwiK2V9LGZ1bmN0aW9uKHIsaSl7Yi5mbltpXT1mdW5jdGlvbihpLG8pe3ZhciBhPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGkpLHM9cnx8KGk9PT0hMHx8bz09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24obixyLGkpe3ZhciBvO3JldHVybiBiLmlzV2luZG93KG4pP24uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrZV06OT09PW4ubm9kZVR5cGU/KG89bi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgobi5ib2R5W1wic2Nyb2xsXCIrZV0sb1tcInNjcm9sbFwiK2VdLG4uYm9keVtcIm9mZnNldFwiK2VdLG9bXCJvZmZzZXRcIitlXSxvW1wiY2xpZW50XCIrZV0pKTppPT09dD9iLmNzcyhuLHIscyk6Yi5zdHlsZShuLHIsaSxzKX0sbixhP2k6dCxhLG51bGwpfX0pfSksZS5qUXVlcnk9ZS4kPWIsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUuYW1kLmpRdWVyeSYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gYn0pfSkod2luZG93KTsiLCIvKiFqUXVlcnkgS25vYiovXHJcbi8qKlxyXG4gKiBEb3dud2FyZCBjb21wYXRpYmxlLCB0b3VjaGFibGUgZGlhbFxyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjIuMCAoMTUvMDcvMjAxMilcclxuICogUmVxdWlyZXM6IGpRdWVyeSB2MS43K1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgQW50aG9ueSBUZXJyaWVuXHJcbiAqIFVuZGVyIE1JVCBhbmQgR1BMIGxpY2Vuc2VzOlxyXG4gKiAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICogIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbFxyXG4gKlxyXG4gKiBUaGFua3MgdG8gdm9yLCBlc2tpbW9ibG9vZCwgc3BpZmZpc3RhbiwgRmFicml6aW9DXHJcbiAqL1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogS29udHJvbCBsaWJyYXJ5XHJcbiAgICAgKi9cclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5pdGlvbiBvZiBnbG9iYWxzIGFuZCBjb3JlXHJcbiAgICAgKi9cclxuICAgIHZhciBrID0ge30sIC8vIGtvbnRyb2xcclxuICAgICAgICBtYXggPSBNYXRoLm1heCxcclxuICAgICAgICBtaW4gPSBNYXRoLm1pbjtcclxuXHJcbiAgICBrLmMgPSB7fTtcclxuICAgIGsuYy5kID0gJChkb2N1bWVudCk7XHJcbiAgICBrLmMudCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCAtIDE7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogS29udHJvbCBPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBEZWZpbml0aW9uIG9mIGFuIGFic3RyYWN0IFVJIGNvbnRyb2xcclxuICAgICAqXHJcbiAgICAgKiBFYWNoIGNvbmNyZXRlIGNvbXBvbmVudCBtdXN0IGNhbGwgdGhpcyBvbmUuXHJcbiAgICAgKiA8Y29kZT5cclxuICAgICAqIGsuby5jYWxsKHRoaXMpO1xyXG4gICAgICogPC9jb2RlPlxyXG4gICAgICovXHJcbiAgICBrLm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm8gPSBudWxsOyAvLyBhcnJheSBvZiBvcHRpb25zXHJcbiAgICAgICAgdGhpcy4kID0gbnVsbDsgLy8galF1ZXJ5IHdyYXBwZWQgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuaSA9IG51bGw7IC8vIG1peGVkIEhUTUxJbnB1dEVsZW1lbnQgb3IgYXJyYXkgb2YgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIHRoaXMuZyA9IG51bGw7IC8vIGRlcHJlY2F0ZWQgMkQgZ3JhcGhpY3MgY29udGV4dCBmb3IgJ3ByZS1yZW5kZXJpbmcnXHJcbiAgICAgICAgdGhpcy52ID0gbnVsbDsgLy8gdmFsdWUgOyBtaXhlZCBhcnJheSBvciBpbnRlZ2VyXHJcbiAgICAgICAgdGhpcy5jdiA9IG51bGw7IC8vIGNoYW5nZSB2YWx1ZSA7IG5vdCBjb21taXRlZCB2YWx1ZVxyXG4gICAgICAgIHRoaXMueCA9IDA7IC8vIGNhbnZhcyB4IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy55ID0gMDsgLy8gY2FudmFzIHkgcG9zaXRpb25cclxuICAgICAgICB0aGlzLncgPSAwOyAvLyBjYW52YXMgd2lkdGhcclxuICAgICAgICB0aGlzLmggPSAwOyAvLyBjYW52YXMgaGVpZ2h0XHJcbiAgICAgICAgdGhpcy4kYyA9IG51bGw7IC8vIGpRdWVyeSBjYW52YXMgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuYyA9IG51bGw7IC8vIHJlbmRlcmVkIGNhbnZhcyBjb250ZXh0XHJcbiAgICAgICAgdGhpcy50ID0gMDsgLy8gdG91Y2hlcyBpbmRleFxyXG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mZ0NvbG9yID0gbnVsbDsgLy8gbWFpbiBjb2xvclxyXG4gICAgICAgIHRoaXMucENvbG9yID0gbnVsbDsgLy8gcHJldmlvdXMgY29sb3JcclxuICAgICAgICB0aGlzLmRIID0gbnVsbDsgLy8gZHJhdyBob29rXHJcbiAgICAgICAgdGhpcy5jSCA9IG51bGw7IC8vIGNoYW5nZSBob29rXHJcbiAgICAgICAgdGhpcy5lSCA9IG51bGw7IC8vIGNhbmNlbCBob29rXHJcbiAgICAgICAgdGhpcy5ySCA9IG51bGw7IC8vIHJlbGVhc2UgaG9va1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxOyAvLyBzY2FsZSBmYWN0b3JcclxuICAgICAgICB0aGlzLnJlbGF0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZUhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJGRpdiA9IG51bGw7IC8vIGNvbXBvbmVudCBkaXZcclxuXHJcbiAgICAgICAgdGhpcy5ydW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjZiA9IGZ1bmN0aW9uIChlLCBjb25mKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaztcclxuICAgICAgICAgICAgICAgIGZvciAoayBpbiBjb25mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5vW2tdID0gY29uZltrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgcy5fY29uZmlndXJlKClcclxuICAgICAgICAgICAgICAgICAuX2RyYXcoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuJC5kYXRhKCdrb250cm9sZWQnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLiQuZGF0YSgna29udHJvbGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4dGVuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLm8gPSAkLmV4dGVuZChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb25maWdcclxuICAgICAgICAgICAgICAgICAgICBtaW4gOiB0aGlzLiQuZGF0YSgnbWluJykgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXggOiB0aGlzLiQuZGF0YSgnbWF4JykgfHwgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3BwZXIgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5IDogdGhpcy4kLmRhdGEoJ3JlYWRvbmx5JykgfHwgKHRoaXMuJC5hdHRyKCdyZWFkb25seScpID09ICdyZWFkb25seScpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBVSVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciA6ICh0aGlzLiQuZGF0YSgnY3Vyc29yJykgPT09IHRydWUgJiYgMzApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy4kLmRhdGEoJ2N1cnNvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlja25lc3MgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kLmRhdGEoJ3RoaWNrbmVzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgTWF0aC5tYXgoTWF0aC5taW4odGhpcy4kLmRhdGEoJ3RoaWNrbmVzcycpLCAxKSwgMC4wMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgMC4zNSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lQ2FwIDogdGhpcy4kLmRhdGEoJ2xpbmVjYXAnKSB8fCAnYnV0dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggOiB0aGlzLiQuZGF0YSgnd2lkdGgnKSB8fCAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy4kLmRhdGEoJ2hlaWdodCcpIHx8IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SW5wdXQgOiB0aGlzLiQuZGF0YSgnZGlzcGxheWlucHV0JykgPT0gbnVsbCB8fCB0aGlzLiQuZGF0YSgnZGlzcGxheWlucHV0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByZXZpb3VzIDogdGhpcy4kLmRhdGEoJ2Rpc3BsYXlwcmV2aW91cycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZnQ29sb3IgOiB0aGlzLiQuZGF0YSgnZmdjb2xvcicpIHx8ICcjODdDRUVCJyxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbG9yOiB0aGlzLiQuZGF0YSgnaW5wdXRjb2xvcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuJC5kYXRhKCdmb250JykgfHwgJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiB0aGlzLiQuZGF0YSgnZm9udC13ZWlnaHQnKSB8fCAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA6IHRoaXMuJC5kYXRhKCdzdGVwJykgfHwgMSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9va3NcclxuICAgICAgICAgICAgICAgICAgICBkcmF3IDogbnVsbCwgLy8gZnVuY3Rpb24gKCkge31cclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiBudWxsLCAvLyBmdW5jdGlvbiAodmFsdWUpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsIDogbnVsbCwgLy8gZnVuY3Rpb24gKCkge31cclxuICAgICAgICAgICAgICAgICAgICByZWxlYXNlIDogbnVsbCwgLy8gZnVuY3Rpb24gKHZhbHVlKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogbnVsbCAvLyBmdW5jdGlvbiAoKSB7fVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBvcHRpb25zXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLm8uaW5wdXRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vLmlucHV0Q29sb3IgPSB0aGlzLm8uZmdDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcm91dGluZyB2YWx1ZVxyXG4gICAgICAgICAgICBpZih0aGlzLiQuaXMoJ2ZpZWxkc2V0JykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmaWVsZHNldCA9IGFycmF5IG9mIGludGVnZXJcclxuICAgICAgICAgICAgICAgIHRoaXMudiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gdGhpcy4kLmZpbmQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgIHRoaXMuaS5lYWNoKGZ1bmN0aW9uKGspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuaVtrXSA9ICR0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHMudltrXSA9ICR0aGlzLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlIGtleXVwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbFtrXSA9ICR0aGlzLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJC5maW5kKCdsZWdlbmQnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaW5wdXQgPSBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSB0aGlzLiQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLiQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAodGhpcy52ID09ICcnKSAmJiAodGhpcy52ID0gdGhpcy5vLm1pbik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZSBrZXl1cCdcclxuICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5fdmFsaWRhdGUocy4kLnZhbCgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICghdGhpcy5vLmRpc3BsYXlJbnB1dCkgJiYgdGhpcy4kLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZHMgbmVlZGVkIERPTSBlbGVtZW50cyAoY2FudmFzLCBkaXYpXHJcbiAgICAgICAgICAgIHRoaXMuJGMgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBHX3ZtbENhbnZhc01hbmFnZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KHRoaXMuJGNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYyA9IHRoaXMuJGNbMF0uZ2V0Q29udGV4dCA/IHRoaXMuJGNbMF0uZ2V0Q29udGV4dCgnMmQnKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm8uZXJyb3IgJiYgdGhpcy5vLmVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGhkcGkgc3VwcG9ydFxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVjdHMgcmVsYXRpdmUgd2lkdGggLyBoZWlnaHRcclxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZVdpZHRoID0gKCh0aGlzLm8ud2lkdGggJSAxICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLm8ud2lkdGguaW5kZXhPZignJScpKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZUhlaWdodCA9ICgodGhpcy5vLmhlaWdodCAlIDEgIT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuby5oZWlnaHQuaW5kZXhPZignJScpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmUgPSAodGhpcy5yZWxhdGl2ZVdpZHRoIHx8IHRoaXMucmVsYXRpdmVIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gd3JhcHMgYWxsIGVsZW1lbnRzIGluIGEgZGl2XHJcbiAgICAgICAgICAgIHRoaXMuJGRpdiA9ICQoJzxkaXYgc3R5bGU9XCInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRoaXMuby5pbmxpbmUgPyAnZGlzcGxheTppbmxpbmU7JyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArICdcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJC53cmFwKHRoaXMuJGRpdikuYmVmb3JlKHRoaXMuJGMpO1xyXG4gICAgICAgICAgICB0aGlzLiRkaXYgPSB0aGlzLiQucGFyZW50KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb21wdXRlcyBzaXplIGFuZCBjYXJ2ZXMgdGhlIGNvbXBvbmVudFxyXG4gICAgICAgICAgICB0aGlzLl9jYXJ2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcHJlcGFyZXMgcHJvcHMgZm9yIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnYgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3YgPSB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSh0aGlzLnYsIHRoaXMuY3YpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHRoaXMudjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYmluZHMgY29uZmlndXJlIGV2ZW50XHJcbiAgICAgICAgICAgIHRoaXMuJFxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJjb25maWd1cmVcIiwgY2YpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgIC5iaW5kKFwiY29uZmlndXJlXCIsIGNmKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmFsaXplIGluaXRcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuKClcclxuICAgICAgICAgICAgICAgIC5fY29uZmlndXJlKClcclxuICAgICAgICAgICAgICAgIC5feHkoKVxyXG4gICAgICAgICAgICAgICAgLmluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZSBtb3N0IGltcG9ydGFudCAhXHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2NhcnZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVsYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5yZWxhdGl2ZVdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuJGRpdi5wYXJlbnQoKS53aWR0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwYXJzZUludCh0aGlzLm8ud2lkdGgpIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuJGRpdi5wYXJlbnQoKS53aWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGggPSB0aGlzLnJlbGF0aXZlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuJGRpdi5wYXJlbnQoKS5oZWlnaHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGFyc2VJbnQodGhpcy5vLmhlaWdodCkgLyAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy4kZGl2LnBhcmVudCgpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IHJlbGF0aXZlXHJcbiAgICAgICAgICAgICAgICB0aGlzLncgPSB0aGlzLmggPSBNYXRoLm1pbih3LCBoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMuby53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaCA9IHRoaXMuby5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmFsaXplIGRpdlxyXG4gICAgICAgICAgICB0aGlzLiRkaXYuY3NzKHtcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6IHRoaXMudyArICdweCcsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogdGhpcy5oICsgJ3B4J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmFsaXplIGNhbnZhcyB3aXRoIGNvbXB1dGVkIHdpZHRoXHJcbiAgICAgICAgICAgIHRoaXMuJGMuYXR0cih7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzY2FsaW5nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYWxlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjWzBdLndpZHRoID0gdGhpcy4kY1swXS53aWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjWzBdLmhlaWdodCA9IHRoaXMuJGNbMF0uaGVpZ2h0ICogdGhpcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGMud2lkdGgodGhpcy53KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGMuaGVpZ2h0KHRoaXMuaCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbnZhcyBwcmUtcmVuZGVyaW5nXHJcbiAgICAgICAgICAgIHZhciBkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHMuZyA9IHMuYztcclxuXHJcbiAgICAgICAgICAgIHMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHMuZEhcclxuICAgICAgICAgICAgJiYgKGQgPSBzLmRIKCkpO1xyXG5cclxuICAgICAgICAgICAgKGQgIT09IGZhbHNlKSAmJiBzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fdG91Y2ggPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBzLnh5MnZhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3JpZ2luYWxFdmVudC50b3VjaGVzW3MudF0ucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1tzLnRdLnBhZ2VZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcy5jaGFuZ2Uocy5fdmFsaWRhdGUodikpO1xyXG4gICAgICAgICAgICAgICAgcy5fZHJhdygpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRvdWNoZXMgaW5kZXhcclxuICAgICAgICAgICAgdGhpcy50ID0gay5jLnQoZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBGaXJzdCB0b3VjaFxyXG4gICAgICAgICAgICB0b3VjaE1vdmUoZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUb3VjaCBldmVudHMgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIGsuYy5kXHJcbiAgICAgICAgICAgICAgICAuYmluZChcInRvdWNobW92ZS5rXCIsIHRvdWNoTW92ZSlcclxuICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG91Y2hlbmQua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsuYy5kLnVuYmluZCgndG91Y2htb3ZlLmsgdG91Y2hlbmQuaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5ySFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHMuckgocy5jdikgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuY3YpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9tb3VzZSA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gcy54eTJ2YWwoZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICAgICAgICAgICAgICBzLmNoYW5nZShzLl92YWxpZGF0ZSh2KSk7XHJcbiAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBGaXJzdCBjbGlja1xyXG4gICAgICAgICAgICBtb3VzZU1vdmUoZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNb3VzZSBldmVudHMgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIGsuYy5kXHJcbiAgICAgICAgICAgICAgICAuYmluZChcIm1vdXNlbW92ZS5rXCIsIG1vdXNlTW92ZSlcclxuICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVzY2FwZSBrZXkgY2FuY2VsIGN1cnJlbnQgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXl1cC5rXCJcclxuICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC51bmJpbmQoXCJtb3VzZXVwLmsgbW91c2Vtb3ZlLmsga2V5dXAua1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5lSFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChzLmVIKCkgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2V1cC5rXCJcclxuICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsuYy5kLnVuYmluZCgnbW91c2Vtb3ZlLmsgbW91c2V1cC5rIGtleXVwLmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuckhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChzLnJIKHMuY3YpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLmN2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5feHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy4kYy5vZmZzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy54ID0gby5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBvLnRvcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdGVuID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm8ucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNcclxuICAgICAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb3VzZWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl94eSgpLl9tb3VzZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG91Y2hzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX3h5KCkuX3RvdWNoKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJC5hdHRyKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnJlbGF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuX2NhcnZlKClcclxuICAgICAgICAgICAgICAgICAgICAgLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlndXJlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gSG9va3NcclxuICAgICAgICAgICAgaWYgKHRoaXMuby5kcmF3KSB0aGlzLmRIID0gdGhpcy5vLmRyYXc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm8uY2hhbmdlKSB0aGlzLmNIID0gdGhpcy5vLmNoYW5nZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuby5jYW5jZWwpIHRoaXMuZUggPSB0aGlzLm8uY2FuY2VsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vLnJlbGVhc2UpIHRoaXMuckggPSB0aGlzLm8ucmVsZWFzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm8uZGlzcGxheVByZXZpb3VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBDb2xvciA9IHRoaXMuaDJyZ2JhKHRoaXMuby5mZ0NvbG9yLCBcIjAuNFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmdDb2xvciA9IHRoaXMuaDJyZ2JhKHRoaXMuby5mZ0NvbG9yLCBcIjAuNlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmdDb2xvciA9IHRoaXMuby5mZ0NvbG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kY1swXS53aWR0aCA9IHRoaXMuJGNbMF0ud2lkdGg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUgPSBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAofn4gKCgodiA8IDApID8gLTAuNSA6IDAuNSkgKyAodi90aGlzLm8uc3RlcCkpKSAqIHRoaXMuby5zdGVwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEFic3RyYWN0IG1ldGhvZHNcclxuICAgICAgICB0aGlzLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHt9OyAvLyBvbiBzdGFydCwgb25lIHRpbWVcclxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHt9OyAvLyBlYWNoIHRpbWUgY29uZmlndXJlIHRyaWdnZXJlZFxyXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHt9OyAvLyBlYWNoIHRpbWUgY29uZmlndXJlIHRyaWdnZXJlZFxyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gZnVuY3Rpb24gKHYpIHt9OyAvLyBvbiBjaGFuZ2VcclxuICAgICAgICB0aGlzLnZhbCA9IGZ1bmN0aW9uICh2KSB7fTsgLy8gb24gcmVsZWFzZVxyXG4gICAgICAgIHRoaXMueHkydmFsID0gZnVuY3Rpb24gKHgsIHkpIHt9OyAvL1xyXG4gICAgICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHt9OyAvLyBvbiBjaGFuZ2UgLyBvbiByZWxlYXNlXHJcbiAgICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fY2xlYXIoKTsgfTtcclxuXHJcbiAgICAgICAgLy8gVXRpbHNcclxuICAgICAgICB0aGlzLmgycmdiYSA9IGZ1bmN0aW9uIChoLCBhKSB7XHJcbiAgICAgICAgICAgIHZhciByZ2I7XHJcbiAgICAgICAgICAgIGggPSBoLnN1YnN0cmluZygxLDcpXHJcbiAgICAgICAgICAgIHJnYiA9IFtwYXJzZUludChoLnN1YnN0cmluZygwLDIpLDE2KVxyXG4gICAgICAgICAgICAgICAgICAgLHBhcnNlSW50KGguc3Vic3RyaW5nKDIsNCksMTYpXHJcbiAgICAgICAgICAgICAgICAgICAscGFyc2VJbnQoaC5zdWJzdHJpbmcoNCw2KSwxNildO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiWzBdICsgXCIsXCIgKyByZ2JbMV0gKyBcIixcIiArIHJnYlsyXSArIFwiLFwiICsgYSArIFwiKVwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29weSA9IGZ1bmN0aW9uIChmLCB0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZikgeyB0W2ldID0gZltpXTsgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGsuRGlhbFxyXG4gICAgICovXHJcbiAgICBrLkRpYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgay5vLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy54eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnNvckV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53MiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5QSTIgPSAyKk1hdGguUEk7XHJcblxyXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm8gPSAkLmV4dGVuZChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yIDogdGhpcy4kLmRhdGEoJ2JnY29sb3InKSB8fCAnI0VFRUVFRScsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVPZmZzZXQgOiB0aGlzLiQuZGF0YSgnYW5nbGVvZmZzZXQnKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlQXJjIDogdGhpcy4kLmRhdGEoJ2FuZ2xlYXJjJykgfHwgMzYwLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMub1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudmFsID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgaWYgKG51bGwgIT0gdikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHRoaXMuby5zdG9wcGVyID8gbWF4KG1pbih2LCB0aGlzLm8ubWF4KSwgdGhpcy5vLm1pbikgOiB2O1xyXG5cdFx0dGhpcy52ID0gdGhpcy5jdjtcclxuICAgICAgICAgICAgICAgIHRoaXMuJC52YWwodGhpcy52KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnh5MnZhbCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgIHZhciBhLCByZXQ7XHJcblxyXG4gICAgICAgICAgICBhID0gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtICh0aGlzLnggKyB0aGlzLncyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsIC0gKHkgLSB0aGlzLnkgLSB0aGlzLncyKVxyXG4gICAgICAgICAgICAgICAgICAgICkgLSB0aGlzLmFuZ2xlT2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hbmdsZUFyYyAhPSB0aGlzLlBJMiAmJiAoYSA8IDApICYmIChhID4gLTAuNSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGlzc2V0IGFuZ2xlQXJjIG9wdGlvbiwgc2V0IHRvIG1pbiBpZiAuNSB1bmRlciBtaW5cclxuICAgICAgICAgICAgICAgIGEgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhICs9IHRoaXMuUEkyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXQgPSB+fiAoMC41ICsgKGEgKiAodGhpcy5vLm1heCAtIHRoaXMuby5taW4pIC8gdGhpcy5hbmdsZUFyYykpXHJcbiAgICAgICAgICAgICAgICAgICAgKyB0aGlzLm8ubWluO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vLnN0b3BwZXJcclxuICAgICAgICAgICAgJiYgKHJldCA9IG1heChtaW4ocmV0LCB0aGlzLm8ubWF4KSwgdGhpcy5vLm1pbikpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gYmluZCBNb3VzZVdoZWVsXHJcbiAgICAgICAgICAgIHZhciBzID0gdGhpcywgbXdUaW1lclN0b3AsIG13VGltZXJSZWxlYXNlLFxyXG4gICAgICAgICAgICAgICAgbXcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmkgPSBlLm9yaWdpbmFsRXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsZGVsdGFYID0gb3JpLmRldGFpbCB8fCBvcmkud2hlZWxEZWx0YVhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsZGVsdGFZID0gb3JpLmRldGFpbCB8fCBvcmkud2hlZWxEZWx0YVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsdiA9IHMuX3ZhbGlkYXRlKHMuJC52YWwoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoZGVsdGFYPjAgfHwgZGVsdGFZPjAgPyBzLm8uc3RlcCA6IGRlbHRhWDwwIHx8IGRlbHRhWTwwID8gLXMuby5zdGVwIDogMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IG1heChtaW4odiwgcy5vLm1heCksIHMuby5taW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbCh2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzLnJIKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG1vdXNld2hlZWwgc3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChtd1RpbWVyU3RvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclN0b3AgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnJIKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd1RpbWVyU3RvcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG1vdXNld2hlZWwgcmVsZWFzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighbXdUaW1lclJlbGVhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclJlbGVhc2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobXdUaW1lclN0b3ApIHMuckgodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd1RpbWVyUmVsZWFzZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAsIGt2YWwsIHRvLCBtID0gMSwga3YgPSB7Mzc6LXMuby5zdGVwLCAzODpzLm8uc3RlcCwgMzk6cy5vLnN0ZXAsIDQwOi1zLm8uc3RlcH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRcclxuICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5ZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrYyA9IGUua2V5Q29kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG51bXBhZCBzdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtjID49IDk2ICYmIGtjIDw9IDEwNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2MgPSBlLmtleUNvZGUgPSBrYyAtIDQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrdmFsID0gcGFyc2VJbnQoU3RyaW5nLmZyb21DaGFyQ29kZShrYykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGt2YWwpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtjICE9PSAxMykgICAgICAgICAvLyBlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKGtjICE9PSA4KSAgICAgICAvLyBic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKGtjICE9PSA5KSAgICAgICAvLyB0YWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChrYyAhPT0gMTg5KSAgICAgLy8gLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQuaW5BcnJheShrYyxbMzcsMzgsMzksNDBdKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHBhcnNlSW50KHMuJC52YWwoKSkgKyBrdltrY10gKiBtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLm8uc3RvcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICh2ID0gbWF4KG1pbih2LCBzLm8ubWF4KSwgcy5vLm1pbikpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNoYW5nZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvbmcgdGltZSBrZXlkb3duIHNwZWVkLXVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSB3aW5kb3cuc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyBtKj0yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICBcImtleXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGt2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy4kLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGt2YWwgcG9zdGNvbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzLiQudmFsKCkgPiBzLm8ubWF4ICYmIHMuJC52YWwocy5vLm1heCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocy4kLnZhbCgpIDwgcy5vLm1pbiAmJiBzLiQudmFsKHMuby5taW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kYy5iaW5kKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBtdyk7XHJcbiAgICAgICAgICAgIHRoaXMuJC5iaW5kKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBtdylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnYgPCB0aGlzLm8ubWluXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnYgPiB0aGlzLm8ubWF4XHJcbiAgICAgICAgICAgICkgdGhpcy52ID0gdGhpcy5vLm1pbjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJC52YWwodGhpcy52KTtcclxuICAgICAgICAgICAgdGhpcy53MiA9IHRoaXMudyAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yRXh0ID0gdGhpcy5vLmN1cnNvciAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy54eSA9IHRoaXMudzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IHRoaXMueHkgKiB0aGlzLm8udGhpY2tuZXNzO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVDYXAgPSB0aGlzLm8ubGluZUNhcDtcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLnh5IC0gdGhpcy5saW5lV2lkdGggLyAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vLmFuZ2xlT2Zmc2V0XHJcbiAgICAgICAgICAgICYmICh0aGlzLm8uYW5nbGVPZmZzZXQgPSBpc05hTih0aGlzLm8uYW5nbGVPZmZzZXQpID8gMCA6IHRoaXMuby5hbmdsZU9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm8uYW5nbGVBcmNcclxuICAgICAgICAgICAgJiYgKHRoaXMuby5hbmdsZUFyYyA9IGlzTmFOKHRoaXMuby5hbmdsZUFyYykgPyB0aGlzLlBJMiA6IHRoaXMuby5hbmdsZUFyYyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZWcgdG8gcmFkXHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGVPZmZzZXQgPSB0aGlzLm8uYW5nbGVPZmZzZXQgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlQXJjID0gdGhpcy5vLmFuZ2xlQXJjICogTWF0aC5QSSAvIDE4MDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgc3RhcnQgYW5kIGVuZCBhbmdsZXNcclxuICAgICAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gMS41ICogTWF0aC5QSSArIHRoaXMuYW5nbGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQW5nbGUgPSAxLjUgKiBNYXRoLlBJICsgdGhpcy5hbmdsZU9mZnNldCArIHRoaXMuYW5nbGVBcmM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcyA9IG1heChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhNYXRoLmFicyh0aGlzLm8ubWF4KSkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFN0cmluZyhNYXRoLmFicyh0aGlzLm8ubWluKSkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vLmRpc3BsYXlJbnB1dFxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5pLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCcgOiAoKHRoaXMudyAvIDIgKyA0KSA+PiAwKSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdoZWlnaHQnIDogKCh0aGlzLncgLyAzKSA+PiAwKSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdwb3NpdGlvbicgOiAnYWJzb2x1dGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwndmVydGljYWwtYWxpZ24nIDogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdtYXJnaW4tdG9wJyA6ICgodGhpcy53IC8gMykgPj4gMCkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnbWFyZ2luLWxlZnQnIDogJy0nICsgKCh0aGlzLncgKiAzIC8gNCArIDIpID4+IDApICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ2JvcmRlcicgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnYmFja2dyb3VuZCcgOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdmb250JyA6IHRoaXMuby5mb250V2VpZ2h0ICsgJyAnICsgKCh0aGlzLncgLyBzKSA+PiAwKSArICdweCAnICsgdGhpcy5vLmZvbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnY29sb3InIDogdGhpcy5vLmlucHV0Q29sb3IgfHwgdGhpcy5vLmZnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdwYWRkaW5nJyA6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLmkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJyA6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwndmlzaWJpbGl0eScgOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGlmICh2ID09IHRoaXMuY3YpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jdiA9IHY7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuY0hcclxuICAgICAgICAgICAgICAgICYmICh0aGlzLmNIKHYpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgKSByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodiAtIHRoaXMuby5taW4pICogdGhpcy5hbmdsZUFyYyAvICh0aGlzLm8ubWF4IC0gdGhpcy5vLm1pbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmcsICAgICAgICAgICAgICAgICAvLyBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICBhID0gdGhpcy5hbmdsZSh0aGlzLmN2KSAgICAvLyBBbmdsZVxyXG4gICAgICAgICAgICAgICAgLCBzYXQgPSB0aGlzLnN0YXJ0QW5nbGUgICAgIC8vIFN0YXJ0IGFuZ2xlXHJcbiAgICAgICAgICAgICAgICAsIGVhdCA9IHNhdCArIGEgICAgICAgICAgICAgLy8gRW5kIGFuZ2xlXHJcbiAgICAgICAgICAgICAgICAsIHNhLCBlYSAgICAgICAgICAgICAgICAgICAgLy8gUHJldmlvdXMgYW5nbGVzXHJcbiAgICAgICAgICAgICAgICAsIHIgPSAxO1xyXG5cclxuICAgICAgICAgICAgYy5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIGMubGluZUNhcCA9IHRoaXMubGluZUNhcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuby5jdXJzb3JcclxuICAgICAgICAgICAgICAgICYmIChzYXQgPSBlYXQgLSB0aGlzLmN1cnNvckV4dClcclxuICAgICAgICAgICAgICAgICYmIChlYXQgPSBlYXQgKyB0aGlzLmN1cnNvckV4dCk7XHJcblxyXG4gICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMuby5iZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgYy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMsIHRoaXMuZW5kQW5nbGUgLSAwLjAwMDAxLCB0aGlzLnN0YXJ0QW5nbGUgKyAwLjAwMDAxLCB0cnVlKTtcclxuICAgICAgICAgICAgYy5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm8uZGlzcGxheVByZXZpb3VzKSB7XHJcbiAgICAgICAgICAgICAgICBlYSA9IHRoaXMuc3RhcnRBbmdsZSArIHRoaXMuYW5nbGUodGhpcy52KTtcclxuICAgICAgICAgICAgICAgIHNhID0gdGhpcy5zdGFydEFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vLmN1cnNvclxyXG4gICAgICAgICAgICAgICAgICAgICYmIChzYSA9IGVhIC0gdGhpcy5jdXJzb3JFeHQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGVhID0gZWEgKyB0aGlzLmN1cnNvckV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5wQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMsIHNhIC0gMC4wMDAwMSwgZWEgKyAwLjAwMDAxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgciA9ICh0aGlzLmN2ID09IHRoaXMudik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gciA/IHRoaXMuby5mZ0NvbG9yIDogdGhpcy5mZ0NvbG9yIDtcclxuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzLCBzYXQgLSAwLjAwMDAxLCBlYXQgKyAwLjAwMDAxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGMuc3Ryb2tlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsKHRoaXMudik7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5kaWFsID0gJC5mbi5rbm9iID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBrLkRpYWwoKTtcclxuICAgICAgICAgICAgICAgIGQubyA9IG87XHJcbiAgICAgICAgICAgICAgICBkLiQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZC5ydW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkucGFyZW50KCk7XHJcbiAgICB9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwiLypcclxuICogalF1ZXJ5IE9uZSBQYWdlIE5hdiBQbHVnaW5cclxuICogaHR0cDovL2dpdGh1Yi5jb20vZGF2aXN0MTEvalF1ZXJ5LU9uZS1QYWdlLU5hdlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAgVHJldm9yIERhdmlzIChodHRwOi8vdHJldm9yZGF2aXMubmV0KVxyXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy5cclxuICogVXNlcyB0aGUgc2FtZSBsaWNlbnNlIGFzIGpRdWVyeSwgc2VlOlxyXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDMuMC4wXHJcbiAqXHJcbiAqIEV4YW1wbGUgdXNhZ2U6XHJcbiAqICQoJyNuYXYnKS5vbmVQYWdlTmF2KHtcclxuICogICBjdXJyZW50Q2xhc3M6ICdjdXJyZW50JyxcclxuICogICBjaGFuZ2VIYXNoOiBmYWxzZSxcclxuICogICBzY3JvbGxTcGVlZDogNzUwXHJcbiAqIH0pO1xyXG4gKi9cclxuXHJcbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKXtcclxuXHJcblx0Ly8gb3VyIHBsdWdpbiBjb25zdHJ1Y3RvclxyXG5cdHZhciBPbmVQYWdlTmF2ID0gZnVuY3Rpb24oZWxlbSwgb3B0aW9ucyl7XHJcblx0XHR0aGlzLmVsZW0gPSBlbGVtO1xyXG5cdFx0dGhpcy4kZWxlbSA9ICQoZWxlbSk7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy5tZXRhZGF0YSA9IHRoaXMuJGVsZW0uZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdHRoaXMuJHdpbiA9ICQod2luZG93KTtcclxuXHRcdHRoaXMuc2VjdGlvbnMgPSB7fTtcclxuXHRcdHRoaXMuZGlkU2Nyb2xsID0gZmFsc2U7XHJcblx0XHR0aGlzLiRkb2MgPSAkKGRvY3VtZW50KTtcclxuXHRcdHRoaXMuZG9jSGVpZ2h0ID0gdGhpcy4kZG9jLmhlaWdodCgpO1xyXG5cdH07XHJcblxyXG5cdC8vIHRoZSBwbHVnaW4gcHJvdG90eXBlXHJcblx0T25lUGFnZU5hdi5wcm90b3R5cGUgPSB7XHJcblx0XHRkZWZhdWx0czoge1xyXG5cdFx0XHRuYXZJdGVtczogJ2EnLFxyXG5cdFx0XHRjdXJyZW50Q2xhc3M6ICdjdXJyZW50JyxcclxuXHRcdFx0Y2hhbmdlSGFzaDogZmFsc2UsXHJcblx0XHRcdGVhc2luZzogJ3N3aW5nJyxcclxuXHRcdFx0ZmlsdGVyOiAnJyxcclxuXHRcdFx0c2Nyb2xsU3BlZWQ6IDc1MCxcclxuXHRcdFx0c2Nyb2xsVGhyZXNob2xkOiAwLjUsXHJcblx0XHRcdGJlZ2luOiBmYWxzZSxcclxuXHRcdFx0ZW5kOiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsQ2hhbmdlOiBmYWxzZVxyXG5cdFx0fSxcclxuXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gSW50cm9kdWNlIGRlZmF1bHRzIHRoYXQgY2FuIGJlIGV4dGVuZGVkIGVpdGhlclxyXG5cdFx0XHQvLyBnbG9iYWxseSBvciB1c2luZyBhbiBvYmplY3QgbGl0ZXJhbC5cclxuXHRcdFx0dGhpcy5jb25maWcgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgdGhpcy5vcHRpb25zLCB0aGlzLm1ldGFkYXRhKTtcclxuXHJcblx0XHRcdHRoaXMuJG5hdiA9IHRoaXMuJGVsZW0uZmluZCh0aGlzLmNvbmZpZy5uYXZJdGVtcyk7XHJcblxyXG5cdFx0XHQvL0ZpbHRlciBhbnkgbGlua3Mgb3V0IG9mIHRoZSBuYXZcclxuXHRcdFx0aWYodGhpcy5jb25maWcuZmlsdGVyICE9PSAnJykge1xyXG5cdFx0XHRcdHRoaXMuJG5hdiA9IHRoaXMuJG5hdi5maWx0ZXIodGhpcy5jb25maWcuZmlsdGVyKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9IYW5kbGUgY2xpY2tzIG9uIHRoZSBuYXZcclxuXHRcdFx0dGhpcy4kbmF2Lm9uKCdjbGljay5vbmVQYWdlTmF2JywgJC5wcm94eSh0aGlzLmhhbmRsZUNsaWNrLCB0aGlzKSk7XHJcblxyXG5cdFx0XHQvL0dldCB0aGUgc2VjdGlvbiBwb3NpdGlvbnNcclxuXHRcdFx0dGhpcy5nZXRQb3NpdGlvbnMoKTtcclxuXHJcblx0XHRcdC8vSGFuZGxlIHNjcm9sbCBjaGFuZ2VzXHJcblx0XHRcdHRoaXMuYmluZEludGVydmFsKCk7XHJcblxyXG5cdFx0XHQvL1VwZGF0ZSB0aGUgcG9zaXRpb25zIG9uIHJlc2l6ZSB0b29cclxuXHRcdFx0dGhpcy4kd2luLm9uKCdyZXNpemUub25lUGFnZU5hdicsICQucHJveHkodGhpcy5nZXRQb3NpdGlvbnMsIHRoaXMpKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhZGp1c3ROYXY6IGZ1bmN0aW9uKHNlbGYsICRwYXJlbnQpIHtcclxuXHRcdFx0c2VsZi4kZWxlbS5maW5kKCcuJyArIHNlbGYuY29uZmlnLmN1cnJlbnRDbGFzcykucmVtb3ZlQ2xhc3Moc2VsZi5jb25maWcuY3VycmVudENsYXNzKTtcclxuXHRcdFx0JHBhcmVudC5hZGRDbGFzcyhzZWxmLmNvbmZpZy5jdXJyZW50Q2xhc3MpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRiaW5kSW50ZXJ2YWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHZhciBkb2NIZWlnaHQ7XHJcblxyXG5cdFx0XHRzZWxmLiR3aW4ub24oJ3Njcm9sbC5vbmVQYWdlTmF2JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2VsZi5kaWRTY3JvbGwgPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNlbGYudCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGRvY0hlaWdodCA9IHNlbGYuJGRvYy5oZWlnaHQoKTtcclxuXHJcblx0XHRcdFx0Ly9JZiBpdCB3YXMgc2Nyb2xsZWRcclxuXHRcdFx0XHRpZihzZWxmLmRpZFNjcm9sbCkge1xyXG5cdFx0XHRcdFx0c2VsZi5kaWRTY3JvbGwgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHNlbGYuc2Nyb2xsQ2hhbmdlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0lmIHRoZSBkb2N1bWVudCBoZWlnaHQgY2hhbmdlc1xyXG5cdFx0XHRcdGlmKGRvY0hlaWdodCAhPT0gc2VsZi5kb2NIZWlnaHQpIHtcclxuXHRcdFx0XHRcdHNlbGYuZG9jSGVpZ2h0ID0gZG9jSGVpZ2h0O1xyXG5cdFx0XHRcdFx0c2VsZi5nZXRQb3NpdGlvbnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEhhc2g6IGZ1bmN0aW9uKCRsaW5rKSB7XHJcblx0XHRcdHJldHVybiAkbGluay5hdHRyKCdocmVmJykuc3BsaXQoJyMnKVsxXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0UG9zaXRpb25zOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgbGlua0hyZWY7XHJcblx0XHRcdHZhciB0b3BQb3M7XHJcblx0XHRcdHZhciAkdGFyZ2V0O1xyXG5cclxuXHRcdFx0c2VsZi4kbmF2LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGlua0hyZWYgPSBzZWxmLmdldEhhc2goJCh0aGlzKSk7XHJcblx0XHRcdFx0JHRhcmdldCA9ICQoJyMnICsgbGlua0hyZWYpO1xyXG5cclxuXHRcdFx0XHRpZigkdGFyZ2V0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dG9wUG9zID0gJHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRcdFx0XHRzZWxmLnNlY3Rpb25zW2xpbmtIcmVmXSA9IE1hdGgucm91bmQodG9wUG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRTZWN0aW9uOiBmdW5jdGlvbih3aW5kb3dQb3MpIHtcclxuXHRcdFx0dmFyIHJldHVyblZhbHVlID0gbnVsbDtcclxuXHRcdFx0dmFyIHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQodGhpcy4kd2luLmhlaWdodCgpICogdGhpcy5jb25maWcuc2Nyb2xsVGhyZXNob2xkKTtcclxuXHJcblx0XHRcdGZvcih2YXIgc2VjdGlvbiBpbiB0aGlzLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0aWYoKHRoaXMuc2VjdGlvbnNbc2VjdGlvbl0gLSB3aW5kb3dIZWlnaHQpIDwgd2luZG93UG9zKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZSA9IHNlY3Rpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhhbmRsZUNsaWNrOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dmFyICRsaW5rID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0XHR2YXIgJHBhcmVudCA9ICRsaW5rLnBhcmVudCgpO1xyXG5cdFx0XHR2YXIgbmV3TG9jID0gJyMnICsgc2VsZi5nZXRIYXNoKCRsaW5rKTtcclxuXHJcblx0XHRcdGlmKCEkcGFyZW50Lmhhc0NsYXNzKHNlbGYuY29uZmlnLmN1cnJlbnRDbGFzcykpIHtcclxuXHRcdFx0XHQvL1N0YXJ0IGNhbGxiYWNrXHJcblx0XHRcdFx0aWYoc2VsZi5jb25maWcuYmVnaW4pIHtcclxuXHRcdFx0XHRcdHNlbGYuY29uZmlnLmJlZ2luKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0NoYW5nZSB0aGUgaGlnaGxpZ2h0ZWQgbmF2IGl0ZW1cclxuXHRcdFx0XHRzZWxmLmFkanVzdE5hdihzZWxmLCAkcGFyZW50KTtcclxuXHJcblx0XHRcdFx0Ly9SZW1vdmluZyB0aGUgYXV0by1hZGp1c3Qgb24gc2Nyb2xsXHJcblx0XHRcdFx0c2VsZi51bmJpbmRJbnRlcnZhbCgpO1xyXG5cclxuXHRcdFx0XHQvL1Njcm9sbCB0byB0aGUgY29ycmVjdCBwb3NpdGlvblxyXG5cdFx0XHRcdHNlbGYuc2Nyb2xsVG8obmV3TG9jLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8vRG8gd2UgbmVlZCB0byBjaGFuZ2UgdGhlIGhhc2g/XHJcblx0XHRcdFx0XHRpZihzZWxmLmNvbmZpZy5jaGFuZ2VIYXNoKSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbmV3TG9jO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQWRkIHRoZSBhdXRvLWFkanVzdCBvbiBzY3JvbGwgYmFjayBpblxyXG5cdFx0XHRcdFx0c2VsZi5iaW5kSW50ZXJ2YWwoKTtcclxuXHJcblx0XHRcdFx0XHQvL0VuZCBjYWxsYmFja1xyXG5cdFx0XHRcdFx0aWYoc2VsZi5jb25maWcuZW5kKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuY29uZmlnLmVuZCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNjcm9sbENoYW5nZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB3aW5kb3dUb3AgPSB0aGlzLiR3aW4uc2Nyb2xsVG9wKCk7XHJcblx0XHRcdHZhciBwb3NpdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbih3aW5kb3dUb3ApO1xyXG5cdFx0XHR2YXIgJHBhcmVudDtcclxuXHJcblx0XHRcdC8vSWYgdGhlIHBvc2l0aW9uIGlzIHNldFxyXG5cdFx0XHRpZihwb3NpdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdCRwYXJlbnQgPSB0aGlzLiRlbGVtLmZpbmQoJ2FbaHJlZiQ9XCIjJyArIHBvc2l0aW9uICsgJ1wiXScpLnBhcmVudCgpO1xyXG5cclxuXHRcdFx0XHQvL0lmIGl0J3Mgbm90IGFscmVhZHkgdGhlIGN1cnJlbnQgc2VjdGlvblxyXG5cdFx0XHRcdGlmKCEkcGFyZW50Lmhhc0NsYXNzKHRoaXMuY29uZmlnLmN1cnJlbnRDbGFzcykpIHtcclxuXHRcdFx0XHRcdC8vQ2hhbmdlIHRoZSBoaWdobGlnaHRlZCBuYXYgaXRlbVxyXG5cdFx0XHRcdFx0dGhpcy5hZGp1c3ROYXYodGhpcywgJHBhcmVudCk7XHJcblxyXG5cdFx0XHRcdFx0Ly9JZiB0aGVyZSBpcyBhIHNjcm9sbENoYW5nZSBjYWxsYmFja1xyXG5cdFx0XHRcdFx0aWYodGhpcy5jb25maWcuc2Nyb2xsQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlnLnNjcm9sbENoYW5nZSgkcGFyZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2Nyb2xsVG86IGZ1bmN0aW9uKHRhcmdldCwgY2FsbGJhY2spIHtcclxuXHRcdFx0dmFyIG9mZnNldCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XHJcblxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBvZmZzZXRcclxuXHRcdFx0fSwgdGhpcy5jb25maWcuc2Nyb2xsU3BlZWQsIHRoaXMuY29uZmlnLmVhc2luZywgY2FsbGJhY2spO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1bmJpbmRJbnRlcnZhbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50KTtcclxuXHRcdFx0dGhpcy4kd2luLnVuYmluZCgnc2Nyb2xsLm9uZVBhZ2VOYXYnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRPbmVQYWdlTmF2LmRlZmF1bHRzID0gT25lUGFnZU5hdi5wcm90b3R5cGUuZGVmYXVsdHM7XHJcblxyXG5cdCQuZm4ub25lUGFnZU5hdiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdG5ldyBPbmVQYWdlTmF2KHRoaXMsIG9wdGlvbnMpLmluaXQoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG59KSggalF1ZXJ5LCB3aW5kb3cgLCBkb2N1bWVudCApOyIsIiAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAvLyBWZWdhcyAtIEZ1bGxzY3JlZW4gQmFja2dyb3VuZHMgYW5kIFNsaWRlc2hvd3Mgd2l0aCBqUXVlcnkuXHJcbiAvLyB2MS4zLjQgLSByZWxlYXNlZCAyMDEzLTEyLTE2IDEzOjI4XHJcbiAvLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbiAvLyBodHRwOi8vdmVnYXMuamF5c2FsdmF0LmNvbS9cclxuIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIC8vIENvcHlyaWdodCAoQykgMjAxMC0yMDEzIEpheSBTYWx2YXRcclxuIC8vIGh0dHA6Ly9qYXlzYWx2YXQuY29tL1xyXG4gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoYSxuKXt2YXIgbz17YWxpZ246XCJjZW50ZXJcIix2YWxpZ246XCJjZW50ZXJcIn07aWYoZS5leHRlbmQobyxuKSwwPT09YS5oZWlnaHQoKSlyZXR1cm4gYS5sb2FkKGZ1bmN0aW9uKCl7dChlKHRoaXMpLG4pfSksdm9pZCAwO3ZhciBpLHMsZyxkPXIoKSxsPWQud2lkdGgsdT1kLmhlaWdodCxjPWEud2lkdGgoKSx2PWEuaGVpZ2h0KCkscD11L2wsZj12L2M7cD5mPyhpPXUvZixzPXUpOihpPWwscz1sKmYpLGc9e3dpZHRoOmkrXCJweFwiLGhlaWdodDpzK1wicHhcIix0b3A6XCJhdXRvXCIsYm90dG9tOlwiYXV0b1wiLGxlZnQ6XCJhdXRvXCIscmlnaHQ6XCJhdXRvXCJ9LGlzTmFOKHBhcnNlSW50KG8udmFsaWduLDEwKSk/XCJ0b3BcIj09by52YWxpZ24/Zy50b3A9MDpcImJvdHRvbVwiPT1vLnZhbGlnbj9nLmJvdHRvbT0wOmcudG9wPSh1LXMpLzI6Zy50b3A9MC0ocy11KS8xMDAqcGFyc2VJbnQoby52YWxpZ24sMTApK1wicHhcIixpc05hTihwYXJzZUludChvLmFsaWduLDEwKSk/XCJsZWZ0XCI9PW8uYWxpZ24/Zy5sZWZ0PTA6XCJyaWdodFwiPT1vLmFsaWduP2cucmlnaHQ9MDpnLmxlZnQ9KGwtaSkvMjpnLmxlZnQ9MC0oaS1sKS8xMDAqcGFyc2VJbnQoby5hbGlnbiwxMCkrXCJweFwiLGEuY3NzKGcpfWZ1bmN0aW9uIGEoKXtkLnByZXBlbmRUbyhcImJvZHlcIikuZmFkZUluKCl9ZnVuY3Rpb24gbigpe2QuZmFkZU91dChcImZhc3RcIixmdW5jdGlvbigpe2UodGhpcykucmVtb3ZlKCl9KX1mdW5jdGlvbiBvKCl7cmV0dXJuIGUoXCJib2R5XCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiKT9lKFwiYm9keVwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIikucmVwbGFjZSgvdXJsXFwoXCI/KC4qPylcIj9cXCkvaSxcIiQxXCIpOnZvaWQgMH1mdW5jdGlvbiByKCl7dmFyIGU9d2luZG93LHQ9XCJpbm5lclwiO3JldHVyblwiaW5uZXJXaWR0aFwiaW4gd2luZG93fHwoZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHksdD1cImNsaWVudFwiKSx7d2lkdGg6ZVt0K1wiV2lkdGhcIl0saGVpZ2h0OmVbdCtcIkhlaWdodFwiXX19dmFyIGkscz1lKFwiPGltZyAvPlwiKS5hZGRDbGFzcyhcInZlZ2FzLWJhY2tncm91bmRcIiksZz1lKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInZlZ2FzLW92ZXJsYXlcIiksZD1lKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInZlZ2FzLWxvYWRpbmdcIiksbD1lKCksdT1udWxsLGM9W10sdj0wLHA9NWUzLGY9ZnVuY3Rpb24oKXt9LGg9e2luaXQ6ZnVuY3Rpb24ocil7dmFyIGk9e3NyYzpvKCksYWxpZ246XCJjZW50ZXJcIix2YWxpZ246XCJjZW50ZXJcIixmYWRlOjAsbG9hZGluZzohMCxsb2FkOmZ1bmN0aW9uKCl7fSxjb21wbGV0ZTpmdW5jdGlvbigpe319O2UuZXh0ZW5kKGksZS52ZWdhcy5kZWZhdWx0cy5iYWNrZ3JvdW5kLHIpLGkubG9hZGluZyYmYSgpO3ZhciBnPXMuY2xvbmUoKTtyZXR1cm4gZy5jc3Moe3Bvc2l0aW9uOlwiZml4ZWRcIixsZWZ0OlwiMHB4XCIsdG9wOlwiMHB4XCJ9KS5iaW5kKFwibG9hZFwiLGZ1bmN0aW9uKCl7ZyE9bCYmKGUod2luZG93KS5iaW5kKFwibG9hZCByZXNpemUudmVnYXNcIixmdW5jdGlvbigpe3QoZyxpKX0pLGwuaXMoXCJpbWdcIik/KGwuc3RvcCgpLGcuaGlkZSgpLmluc2VydEFmdGVyKGwpLmZhZGVJbihpLmZhZGUsZnVuY3Rpb24oKXtlKFwiLnZlZ2FzLWJhY2tncm91bmRcIikubm90KHRoaXMpLnJlbW92ZSgpLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc2NvbXBsZXRlXCIsW3RoaXMsdi0xXSksaS5jb21wbGV0ZS5hcHBseShnLFt2LTFdKX0pKTpnLmhpZGUoKS5wcmVwZW5kVG8oXCJib2R5XCIpLmZhZGVJbihpLmZhZGUsZnVuY3Rpb24oKXtlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNjb21wbGV0ZVwiLFt0aGlzLHYtMV0pLGkuY29tcGxldGUuYXBwbHkodGhpcyxbdi0xXSl9KSxsPWcsdChsLGkpLGkubG9hZGluZyYmbigpLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc2xvYWRcIixbbC5nZXQoMCksdi0xXSksaS5sb2FkLmFwcGx5KGwuZ2V0KDApLFt2LTFdKSx2JiYoZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2Fzd2Fsa1wiLFtsLmdldCgwKSx2LTFdKSxpLndhbGsuYXBwbHkobC5nZXQoMCksW3YtMV0pKSl9KS5hdHRyKFwic3JjXCIsaS5zcmMpLGUudmVnYXN9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiYmFja2dyb3VuZFwiIT10fHwoZShcIi52ZWdhcy1iYWNrZ3JvdW5kLCAudmVnYXMtbG9hZGluZ1wiKS5yZW1vdmUoKSxlKHdpbmRvdykudW5iaW5kKFwiKi52ZWdhc1wiKSxsPWUoKSksdCYmXCJvdmVybGF5XCIhPXR8fGUoXCIudmVnYXMtb3ZlcmxheVwiKS5yZW1vdmUoKSxjbGVhckludGVydmFsKGkpLGUudmVnYXN9LG92ZXJsYXk6ZnVuY3Rpb24odCl7dmFyIGE9e3NyYzpudWxsLG9wYWNpdHk6bnVsbH07cmV0dXJuIGUuZXh0ZW5kKGEsZS52ZWdhcy5kZWZhdWx0cy5vdmVybGF5LHQpLGcucmVtb3ZlKCksZy5jc3Moe21hcmdpbjpcIjBcIixwYWRkaW5nOlwiMFwiLHBvc2l0aW9uOlwiZml4ZWRcIixsZWZ0OlwiMHB4XCIsdG9wOlwiMHB4XCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksYS5zcmM9PT0hMSYmZy5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIixcIm5vbmVcIiksYS5zcmMmJmcuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIsXCJ1cmwoXCIrYS5zcmMrXCIpXCIpLGEub3BhY2l0eSYmZy5jc3MoXCJvcGFjaXR5XCIsYS5vcGFjaXR5KSxnLnByZXBlbmRUbyhcImJvZHlcIiksZS52ZWdhc30sc2xpZGVzaG93OmZ1bmN0aW9uKHQsYSl7dmFyIG49e3N0ZXA6dixkZWxheTpwLHByZWxvYWQ6ITEsbG9hZGluZzohMCxiYWNrZ3JvdW5kczpjLHdhbGs6Zn07aWYoZS5leHRlbmQobixlLnZlZ2FzLmRlZmF1bHRzLnNsaWRlc2hvdyx0KSxuLmJhY2tncm91bmRzIT1jJiYodC5zdGVwfHwobi5zdGVwPTApLHQud2Fsa3x8KG4ud2Fsaz1mdW5jdGlvbigpe30pLG4ucHJlbG9hZCYmZS52ZWdhcyhcInByZWxvYWRcIixuLmJhY2tncm91bmRzKSksYz1uLmJhY2tncm91bmRzLHA9bi5kZWxheSx2PW4uc3RlcCxmPW4ud2FsayxjbGVhckludGVydmFsKGkpLCFjLmxlbmd0aClyZXR1cm4gZS52ZWdhczt2YXIgbz1mdW5jdGlvbigpezA+diYmKHY9Yy5sZW5ndGgtMSksKHY+PWMubGVuZ3RofHwhY1t2LTFdKSYmKHY9MCk7dmFyIHQ9Y1t2KytdO3Qud2Fsaz1uLndhbGssdC5sb2FkaW5nPW4ubG9hZGluZyx0LmZhZGU9PT12b2lkIDAmJih0LmZhZGU9bi5mYWRlKSx0LmZhZGU+bi5kZWxheSYmKHQuZmFkZT1uLmRlbGF5KSxlLnZlZ2FzKHQpfTtyZXR1cm4gbygpLGF8fCh1PSExLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc3N0YXJ0XCIsW2wuZ2V0KDApLHYtMV0pKSx1fHwoaT1zZXRJbnRlcnZhbChvLG4uZGVsYXkpKSxlLnZlZ2FzfSxuZXh0OmZ1bmN0aW9uKCl7dmFyIHQ9djtyZXR1cm4gdiYmKGUudmVnYXMoXCJzbGlkZXNob3dcIix7c3RlcDp2fSwhMCksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzbmV4dFwiLFtsLmdldCgwKSx2LTEsdC0xXSkpLGUudmVnYXN9LHByZXZpb3VzOmZ1bmN0aW9uKCl7dmFyIHQ9djtyZXR1cm4gdiYmKGUudmVnYXMoXCJzbGlkZXNob3dcIix7c3RlcDp2LTJ9LCEwKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNwcmV2aW91c1wiLFtsLmdldCgwKSx2LTEsdC0xXSkpLGUudmVnYXN9LGp1bXA6ZnVuY3Rpb24odCl7dmFyIGE9djtyZXR1cm4gdiYmKGUudmVnYXMoXCJzbGlkZXNob3dcIix7c3RlcDp0fSwhMCksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzanVtcFwiLFtsLmdldCgwKSx2LTEsYS0xXSkpLGUudmVnYXN9LHN0b3A6ZnVuY3Rpb24oKXt2YXIgdD12O3JldHVybiB2PTAsdT1udWxsLGNsZWFySW50ZXJ2YWwoaSksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2Fzc3RvcFwiLFtsLmdldCgwKSx0LTFdKSxlLnZlZ2FzfSxwYXVzZTpmdW5jdGlvbigpe3JldHVybiB1PSEwLGNsZWFySW50ZXJ2YWwoaSksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzcGF1c2VcIixbbC5nZXQoMCksdi0xXSksZS52ZWdhc30sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZXx8XCJiYWNrZ3JvdW5kXCI9PWU/bC5nZXQoMCk6XCJvdmVybGF5XCI9PWU/Zy5nZXQoMCk6XCJzdGVwXCI9PWU/di0xOlwicGF1c2VkXCI9PWU/dTp2b2lkIDB9LHByZWxvYWQ6ZnVuY3Rpb24odCl7dmFyIGE9W107Zm9yKHZhciBuIGluIHQpaWYodFtuXS5zcmMpe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7by5zcmM9dFtuXS5zcmMsYS5wdXNoKG8pfXJldHVybiBlLnZlZ2FzfX07ZS52ZWdhcz1mdW5jdGlvbih0KXtyZXR1cm4gaFt0XT9oW3RdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgdCYmdD8oZS5lcnJvcihcIk1ldGhvZCBcIit0K1wiIGRvZXMgbm90IGV4aXN0XCIpLHZvaWQgMCk6aC5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS52ZWdhcy5kZWZhdWx0cz17YmFja2dyb3VuZDp7fSxzbGlkZXNob3c6e30sb3ZlcmxheTp7fX19KShqUXVlcnkpOyIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IG1pc2MuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuJCgndWwuZHJvcGRvd24tbWVudScpLmZpbmQoJ2xpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gcmVtb3ZlIHRoZSAnb3BlbicgY2xhc3Mgb24gdGhlIHBhcmVudCBlbGVtZW50IFxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tbWVudScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bi1tZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuKi9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBNaXNjZWxsYW5lb3VzIENhbGVuZGFyIGZ1bmN0aW9uc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8kKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCBcIiMzTW9uQ2FsXCIgKS5kYXRlcGlja2VyKHtcclxuLy8gICAgICAgIG51bWJlck9mTW9udGhzOiAyLFxyXG4vLyAgICAgICAgc2hvd0J1dHRvblBhbmVsOiB0cnVlXHJcbi8vICAgIH0pO1xyXG4vL30pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENhbGVuZGFySFRNTChtbywgeXIsIHNob3dUb2RheSl7XHJcbiAgICAvLyBtbyA9IHplcm8tYmFzZWQgbW9udGggbnVtYmVyXHJcbiAgICAvLyB5ciA9IDQgZGlnaXQgeWVhciBZWVlZXHJcbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbW9udGggbmFtZXNcclxuICAgIHZhciBNID0gbmV3IEFycmF5KFwiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCIpO1xyXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IHdpdGggdGhlIGRheXMgb2YgdGhlIHdlZWtcclxuICAgIHZhciBEID0gbmV3IEFycmF5KFwiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCIpO1xyXG4gICAgLy8gVGhlIGZpcnN0IG9mIHRoZSBtb250aFxyXG4gICAgdmFyIGRheU9uZSA9IG5ldyBEYXRlKE1bbW9dK1wiIDEsXCIreXIpO1xyXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBkYXkgb2YgdGhlIHdlZWsgdXBvbiB3aGljaCB0aGUgMXN0IG9mIHRoZSBtb250aCBmYWxsc1xyXG4gICAgdmFyIGR5ID0gZGF5T25lLmdldERheSgpO1xyXG4gICAgeXIgPSBldmFsKHlyKTtcclxuICAgIFxyXG4gICAgLy8gRGF5cyBpbiBlYWNoIG1vbnRoXHJcbiAgICB2YXIgZCA9IFwiMzEyODMxMzAzMTMwMzEzMTMwMzEzMDMxXCI7XHJcbiAgICAvLyBJcyB0aGlzIGxlYXAgeWVhcj9cclxuICAgIGlmICh5ciAvIDQgPT09IE1hdGguZmxvb3IoeXIgLyA0KSkge1xyXG4gICAgICAgIGQgPSBkLnN1YnN0cmluZygwLCAyKSArIFwiMjlcIiArIGQuc3Vic3RyaW5nKDQsIGQubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gaW4gdGhlIGQgc3RyaW5nIGZvciB0aGlzIG1vbnRoXHJcbiAgICB2YXIgcG9zID0gKG1vICogMik7XHJcbiAgICAvLyBHcmFiIDIgY2hhcmFjdGVyIHBvc2l0aW9ucyByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgbW9udGggKGxhc3QgZGF5KVxyXG4gICAgdmFyIGxkID0gZXZhbChkLnN1YnN0cmluZyhwb3MsIHBvcyArIDIpKTtcclxuICAgIHZhciB0ZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcbiAgICB2YXIgZG93ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICAgIFxyXG4gICAgLy8gU3RhcnQgb3V0cHV0dGluZyB0aGlzIG1vbnRoJ3MgY2FsZW5kYXJcclxuICAgIHZhciBodG1sVGV4dCA9ICAnPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS00IGNvbC14cy00XCI+JztcclxuICAgIGh0bWxUZXh0ICs9ICc8dGFibGUgY2xhc3M9XCJjYWxUYWJsZVwiPjx0cj4nXHJcbiAgICAvLyBEaXNwbGF5IHRoZSBtb250aCBhbmQgeWVhclxyXG4gICAgaHRtbFRleHQgKz0gJzx0aCBjbGFzcz1cIm1vbkhkcidcclxuICAgIGlmKHNob3dUb2RheSl7aHRtbFRleHQgKz0gJyBoaUxpdGUnfVxyXG4gICAgaHRtbFRleHQgKz0gJ1wiIGNvbHNwYW49NyBjZW50ZXI+JyArIE1bbW9dICsgXCIgXCIgKyB5ciArIFwiPC90aD48L3RyPlwiO1xyXG4gICAgLy8gRGlzcGxheSB0aGUgZGF5cyBvZiB0aGUgd2Vla1xyXG4gICAgaHRtbFRleHQgKz0gJzx0cj4nO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7aSA8IDc7aSArKykge1xyXG4gICAgICAgIGlmKChpID09IGRvdykgJiYgKHNob3dUb2RheSkpIHtcclxuICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQgY2xhc3M9XCJ3a2RheUhkciBoaUxpdGVcIj4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZCBjbGFzcz1cIndrZGF5SGRyXCI+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sVGV4dCArPSBEW2ldICsgJzwvdGQ+JzsgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIGRheXMgb2YgdGhlIHdlZWtcclxuICAgIH1cclxuICAgIGh0bWxUZXh0ICs9ICc8L3RyPic7XHJcbiAgICB2YXIgY3RyID0gMDtcclxuICAgIC8vIERpc3BsYXkgdGhlIGRheSBvZiB0aGUgbW9udGggb3IgYSBibGFuayBpZiB0aGUgMXN0IGZhbGxzIGluIG1pZC13ZWVrXHJcbiAgICBodG1sVGV4dCArPSAnPHRyIGNsYXNzPVwiY2FsRGF5Um93XCI+JztcclxuICAgIC8vIERpc3BsYXkgdGhlIGRheSBvZiB0aGUgbW9udGggb3IgYSBibGFuayBzcGFjZVxyXG4gICAgLy8gZm9yIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSBtb250aFxyXG4gICAgZm9yIChpID0gMDtpIDwgNzsgaSsrKXtcclxuICAgICAgICBpZiAoaSA8IGR5KSB7XHJcbiAgICAgICAgICAgIGh0bWxUZXh0ICs9IFwiPHRkPiA8L3RkPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY3RyKys7XHJcbiAgICAgICAgICAgIGlmKChjdHIgPT0gdGRheSkgJiYgKHNob3dUb2RheSkpIHtcclxuICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQgY2xhc3M9XCJoaUxpdGVcIj4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZD4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGh0bWxUZXh0ICs9IGN0ciArIFwiPC90ZD5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBodG1sVGV4dCArPSAnPC90cj4nO1xyXG4gICAgLy8gRGlzcGxheSB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgdGhlIHJlc3Qgb2YgdGhlIG1vbnRoXHJcbiAgICAvLyBEaXNwbGF5IGEgYmxhbmsgYWZ0ZXIgdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aFxyXG4gICAgaHRtbFRleHQgKz0gJzx0ciBjbGFzcz1cImNhbERheVJvd1wiPic7XHJcbiAgICB3aGlsZSAoY3RyIDw9IGxkKSB7XHJcbiAgICAgICAgZm9yIChpID0gMDtpIDwgNzsgaSsrKXtcclxuICAgICAgICAgICAgY3RyKys7XHJcbiAgICAgICAgICAgIGlmIChjdHIgPiBsZCl7XHJcbiAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkPiA8L3RkPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZigoY3RyID09IHRkYXkpICYmIChzaG93VG9kYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZCBjbGFzcz1cImhpTGl0ZVwiPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQ+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9IGN0ciArICc8L3RkPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbFRleHQgKz0gJzwvdHI+PHRyIGNsYXNzPVwiY2FsRGF5Um93XCI+JztcclxuICAgIH1cclxuICAgIGh0bWxUZXh0ICs9ICc8L3RyPjwvdGFibGU+PGJyIGNsYXNzPVwiY2xlYXJcIiAvPjwvZGl2Pic7XHJcbiAgICByZXR1cm4gaHRtbFRleHQ7XHJcbn1cclxuXHJcbiBcclxuZnVuY3Rpb24gc2hvd0NhbGVuZGVycygpIHtcclxuXHJcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RheSdzIGRhdGVcclxuICAgIHZhciB0aGlzTW9udGggPSB0b2RheS5nZXRNb250aCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IG1vbnRoIC0gemVyby1iYXNlZFxyXG4gICAgdmFyIHRoaXNZZWFyID0gdG9kYXkuZ2V0WWVhcigpICsgMTkwMDsgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgeWVhclxyXG4gICAgdmFyIGxhc3RNb250aCA9ICh0aGlzTW9udGg9PT0wPzExOnRoaXNNb250aC0xKTsgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxhc3QgbW9udGhcclxuICAgIHZhciBsYXN0WWVhciA9ICh0aGlzTW9udGg9PT0wP3RoaXNZZWFyLTE6dGhpc1llYXIpOyAgICAgICAgIC8vIGNhbGN1bGF0ZSBsYXN0IG1vbnRoJ3MgeWVhclxyXG4gICAgdmFyIG5leHRZZWFyID0gKHRoaXNNb250aD09PTExP3RoaXNZZWFyKzE6dGhpc1llYXIpOyAgICAgICAgLy8gbmV4dCBtb250aCdzIHllYXJcclxuICAgIHZhciBuZXh0TW9udGggPSAodGhpc01vbnRoPT09MTE/MDp0aGlzTW9udGgrMSk7ICAgICAgICAgICAgIC8vIG5leHQgbW9udGhcclxuICAgIHZhciBodG1sT2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxCb3hcIik7XHJcblxyXG4gICAgaWYoIGh0bWxPYmogKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBodG1sVGV4dD0nPGRpdiBjbGFzcz1cInJvd1wiPic7XHJcblxyXG4gICAgICAgIGh0bWxUZXh0ID0gaHRtbFRleHQgKyBnZXRDYWxlbmRhckhUTUwobGFzdE1vbnRoLCBsYXN0WWVhciwgZmFsc2UpOyAgICAvLyBTZW5kIGxhc3QgbW9udGggdG8gc2NyZWVuXHJcbiAgICAgICAgaHRtbFRleHQgPSBodG1sVGV4dCArIGdldENhbGVuZGFySFRNTCh0aGlzTW9udGgsIHRoaXNZZWFyLCB0cnVlKTsgICAgIC8vIFNlbmQgdGhpcyBtb250aCB0byBzY3JlZW5cclxuICAgICAgICBodG1sVGV4dCA9IGh0bWxUZXh0ICsgZ2V0Q2FsZW5kYXJIVE1MKG5leHRNb250aCwgbmV4dFllYXIsIGZhbHNlKTsgICAgLy8gU2VuZCBuZXh0IG1vbnRoIHRvIHNjcmVlblxyXG5cclxuICAgICAgICBodG1sT2JqLmlubmVySFRNTCA9IGh0bWxUZXh0ICsgJzwvZGl2Pic7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHYXRoZXIgU2NyZWVuIFNpemUgSW5mb3JtYXRpb25cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBnZWJJRChpZCl7IHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7IH1cclxuZnVuY3Rpb24gZ2ViVE4odGFnTmFtZSl7IHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKTsgfVxyXG5mdW5jdGlvbiBzZXRTdHlsZVRvVGFncyh0YWdOYW1lLCBzdHlsZVN0cmluZyl7XHJcbiAgICB2YXIgdGFncyA9IGdlYlROKHRhZ05hbWUpO1xyXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8dGFncy5sZW5ndGg7IGkrKyApIHRhZ3NbaV0uc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlU3RyaW5nKTtcclxufVxyXG5mdW5jdGlvbiB0ZXN0U2l6ZXMocGFyZW50T2JqKXtcclxuICAgIGlmKCBwYXJlbnRPYmogPT0gbnVsbCl7IHBhcmVudE9iaiA9IFwiYm9keVwiOyB9XHJcbiAgICBcclxuICAgIGdlYklEKCAnc2NyZWVuLldpZHRoJyApLmlubmVySFRNTCA9IHNjcmVlbi53aWR0aDtcclxuICAgIGdlYklEKCAnc2NyZWVuLkhlaWdodCcgKS5pbm5lckhUTUwgPSBzY3JlZW4uaGVpZ2h0O1xyXG5cclxuICAgIGdlYklEKCAnd2luZG93LldpZHRoJyApLmlubmVySFRNTCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgZ2ViSUQoICd3aW5kb3cuSGVpZ2h0JyApLmlubmVySFRNTCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICBnZWJJRCggJ2RvY3VtZW50RWxlbWVudC5XaWR0aCcgKS5pbm5lckhUTUwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBnZWJJRCggJ2RvY3VtZW50RWxlbWVudC5IZWlnaHQnICkuaW5uZXJIVE1MID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICBnZWJJRCggJ2JvZHkuV2lkdGgnICkuaW5uZXJIVE1MID0gZ2ViVE4ocGFyZW50T2JqKVswXS5jbGllbnRXaWR0aDtcclxuICAgIGdlYklEKCAnYm9keS5IZWlnaHQnICkuaW5uZXJIVE1MID0gZ2ViVE4ocGFyZW50T2JqKVswXS5jbGllbnRIZWlnaHQ7ICBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNpemVzKHBhcmVudE9iaikge1xyXG4gICAgaWYoIHBhcmVudE9iaiA9PT0gbnVsbCl7IHBhcmVudE9iaiA9IFwiYm9keVwiOyB9XHJcbiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgdGFibGUuaW5uZXJIVE1MID0gXHJcbiAgICAgICBcIjx0cj48dGg+U09VUkNFPC90aD48dGg+V0lEVEg8L3RoPjx0aD54PC90aD48dGg+SEVJR0hUPC90aD48L3RyPlwiXHJcbiAgICAgICtcIjx0cj48dGQ+c2NyZWVuPC90ZD48dGQgaWQ9J3NjcmVlbi5XaWR0aCcgLz48dGQ+eDwvdGQ+PHRkIGlkPSdzY3JlZW4uSGVpZ2h0JyAvPjwvdHI+XCJcclxuICAgICAgK1wiPHRyPjx0ZD53aW5kb3c8L3RkPjx0ZCBpZD0nd2luZG93LldpZHRoJyAvPjx0ZD54PC90ZD48dGQgaWQ9J3dpbmRvdy5IZWlnaHQnIC8+PC90cj5cIlxyXG4gICAgICArXCI8dHI+PHRkPmRvY3VtZW50PGJyPi5kb2N1bWVudEVsZW1lbnQ8L3RkPjx0ZCBpZD0nZG9jdW1lbnRFbGVtZW50LldpZHRoJyAvPjx0ZD54PC90ZD48dGQgaWQ9J2RvY3VtZW50RWxlbWVudC5IZWlnaHQnIC8+PC90cj5cIlxyXG4gICAgICArXCI8dHI+PHRkPmRvY3VtZW50LmJvZHk8L3RkPjx0ZCBpZD0nYm9keS5XaWR0aCcgLz48dGQ+eDwvdGQ+PHRkIGlkPSdib2R5LkhlaWdodCcgLz48L3RyPlwiXHJcbiAgICA7XHJcblxyXG4gICAgZ2ViVE4ocGFyZW50T2JqKVswXS5hcHBlbmRDaGlsZCggdGFibGUgKTtcclxuXHJcbiAgICBzZXRTdHlsZVRvVGFncyhcInRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgXCJib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgK1wibGVmdDogMTAwcHggIWltcG9ydGFudDsgdG9wOiA5MHB4ICFpbXBvcnRhbnQ7IHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgICtcIndpZHRoOiAyMDBweCAhaW1wb3J0YW50OyBmb250LXNpemU6MTBweDsgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICArXCJ3aGl0ZS1zcGFjZTogcHJlICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgK1wiei1pbmRleDogOTk5OSAhaW1wb3J0YW50O2JhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XCJcclxuICAgICk7XHJcbiAgICBzZXRTdHlsZVRvVGFncyhcInRkXCIsIFwiY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyBwYWRkaW5nOiA1cHggIWltcG9ydGFudDsgdGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudDtcIik7XHJcbiAgICBzZXRTdHlsZVRvVGFncyhcInRoXCIsIFwiY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyBwYWRkaW5nOiA1cHggIWltcG9ydGFudDsgdGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudDtcIik7XHJcblxyXG4gICAgdGFibGUuc3R5bGUuc2V0UHJvcGVydHkoICdtYXJnaW4tbGVmdCcsICctJysoIHRhYmxlLmNsaWVudFdpZHRoIC8gMiApKydweCcgKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbCggdGVzdFNpemVzLCAyMDAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydEJ5S2V5KGFycmF5LCBrZXkpIHtcclxuICAgIHJldHVybiBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICB2YXIgeCA9IGFba2V5XTsgdmFyIHkgPSBiW2tleV07XHJcbiAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuIGZ1bmN0aW9uIG11bHRPYmpBcnJheTJBcnJheShtdWx0T2JqQXJyYXkpe1xyXG4gICAgIGNvbnNvbGUuZGVidWcoXCJtdWx0T2JqQXJyYXkyQXJyYXlcIik7XHJcbiAgICBjb25zb2xlLmRlYnVnKG11bHRPYmpBcnJheSk7XHJcbiAgICB2YXIgYWxsQXJyYXkgPSBbXTtcclxuICAgIGZvcih2YXIgaT0wOyBpPG11bHRPYmpBcnJheS5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGo9MDsgajxtdWx0T2JqQXJyYXlbaV0ubGVuZ3RoO2orKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsID0gYWxsQXJyYXkucHVzaCggbXVsdE9iakFycmF5W2ldW2pdICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBKU09ORGF0ZVRvRGF0ZU9iaiAoamQpIHsgLy8gamQgPSBKU09OIERhdGUgZm9ybWF0IGllLiAnMjAxMy0wMy0wOFQxNDozNDowMDowMDBaJ1xyXG4gICAgaWYoIChqZC5sZW5ndGggIT0gMjQpIHx8ICAoamQuc3Vic3RyKDQsMSkgIT0gJy0nKSB8fCAgKGpkLnN1YnN0cig3LDEpICE9ICctJykgfHwgIChqZC5zdWJzdHIoMTAsMSkgIT0gJ1QnKSB8fCAgKGpkLnN1YnN0cigxMywxKSAhPSAnOicpIHx8ICAoamQuc3Vic3RyKDE2LDEpICE9ICc6JykgfHwgIChqZC5zdWJzdHIoMTksMSkgIT0gJzonKSB8fCAgKGpkLnN1YnN0cigyMywxKSAhPSAnWicpICkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXRGdWxsWWVhcihqZC5zdWJzdHIoMCw0KSwgamQuc3Vic3RyKDUsMiktMSwgamQuc3Vic3RyKDgsMikpO1xyXG4gICAgZC5zZXRIb3VycyhqZC5zdWJzdHIoMTEsMikpO1xyXG4gICAgZC5zZXRNaW51dGVzKGpkLnN1YnN0cigxNCwyKSk7XHJcbiAgICBkLnNldFNlY29uZHMoamQuc3Vic3RyKDE3LDIpKTtcclxuICAgIGQuc2V0TWlsbGlzZWNvbmRzKGpkLnN1YnN0cigyMCwzKSk7XHJcbiAgICByZXR1cm4gZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEltYWdlRGF0YShpbWdJRCkge1xyXG4gICAgYWxlcnQoXCJJJ20gc29ycnksIHlvdSBkb24ndCBoYXZlIHRoZSBhdXRob3JpdHkgdG8gZWRpdCBpbWFnZSBJRCNcIiArIGltZ0lEICsgXCIuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVJbWFnZShpbWdJRCl7XHJcbiAgICBhbGVydChcIkknbSBzb3JyeSwgeW91IGRvbid0IGhhdmUgdGhlIGF1dGhvcml0eSB0byBkZWxldGUgaW1hZ2UgSUQjXCIgKyBpbWdJRCArIFwiLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5sYXJnZVRvZ2dsZShpbWdJRCl7XHJcbiAgICBhbGVydChcIkVubGFyZ2UgaW1hZ2UgSUQjXCIgKyBpbWdJRCArIFwiLlwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIG1pc2MuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsImV2YWwoZnVuY3Rpb24ocCxhLGMsayxlLHIpe2U9ZnVuY3Rpb24oYyl7cmV0dXJuKGM8YT8nJzplKHBhcnNlSW50KGMvYSkpKSsoKGM9YyVhKT4zNT9TdHJpbmcuZnJvbUNoYXJDb2RlKGMrMjkpOmMudG9TdHJpbmcoMzYpKX07aWYoIScnLnJlcGxhY2UoL14vLFN0cmluZykpe3doaWxlKGMtLSlyW2UoYyldPWtbY118fGUoYyk7az1bZnVuY3Rpb24oZSl7cmV0dXJuIHJbZV19XTtlPWZ1bmN0aW9uKCl7cmV0dXJuJ1xcXFx3Kyd9O2M9MX07d2hpbGUoYy0tKWlmKGtbY10pcD1wLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxcXGInK2UoYykrJ1xcXFxiJywnZycpLGtbY10pO3JldHVybiBwfSgnNyhBIDNjLjNxIT09XCI5XCIpezNjLjNxPTkoZSl7OSB0KCl7fXQuNVM9ZTtwIDVSIHR9fSg5KGUsdCxuKXtoIHI9ezFOOjkodCxuKXtoIHI9YztyLiRrPWUobik7ci42PWUuNE0oe30sZS4zNy4yQi42LHIuJGsudigpLHQpO3IuMkE9dDtyLjRMKCl9LDRMOjkoKXs5IHIoZSl7aCBuLHI9XCJcIjs3KEEgdC42LjMzPT09XCI5XCIpe3QuNi4zMy5SKGMsW2VdKX1sezFBKG4gMzggZS5kKXs3KGUuZC41TShuKSl7cis9ZS5kW25dLjFLfX10LiRrLjJ5KHIpfXQuM3QoKX1oIHQ9YyxuOzcoQSB0LjYuMkg9PT1cIjlcIil7dC42LjJILlIoYyxbdC4ka10pfTcoQSB0LjYuMk89PT1cIjJZXCIpe249dC42LjJPO2UuNUsobixyKX1se3QuM3QoKX19LDN0OjkoKXtoIGU9YztlLiRrLnYoXCJkLTRJXCIsZS4kay4yeChcIjJ3XCIpKS52KFwiZC00RlwiLGUuJGsuMngoXCJIXCIpKTtlLiRrLnooezJ1OjB9KTtlLjJ0PWUuNi5xO2UuNEUoKTtlLjV2PTA7ZS4xWD0xNDtlLjIzKCl9LDIzOjkoKXtoIGU9Yzs3KGUuJGsuMjUoKS5OPT09MCl7cCBifWUuMU0oKTtlLjRDKCk7ZS4kUz1lLiRrLjI1KCk7ZS5FPWUuJFMuTjtlLjRCKCk7ZS4kRz1lLiRrLjE3KFwiLmQtMUtcIik7ZS4kSz1lLiRrLjE3KFwiLmQtMXBcIik7ZS4zdT1cIlVcIjtlLjEzPTA7ZS4yNj1bMF07ZS5tPTA7ZS40QSgpO2UuNHooKX0sNHo6OSgpe2ggZT1jO2UuMlYoKTtlLjJXKCk7ZS40dCgpO2UuMzAoKTtlLjRyKCk7ZS40cSgpO2UuMnAoKTtlLjRvKCk7NyhlLjYuMm8hPT1iKXtlLjRuKGUuNi4ybyl9NyhlLjYuTz09PWope2UuNi5PPTRRfWUuMTkoKTtlLiRrLjE3KFwiLmQtMXBcIikueihcIjRpXCIsXCI0aFwiKTs3KCFlLiRrLjJtKFwiOjNuXCIpKXtlLjNvKCl9bHtlLiRrLnooXCIydVwiLDEpfWUuNU89YjtlLjJsKCk7NyhBIGUuNi4zcz09PVwiOVwiKXtlLjYuM3MuUihjLFtlLiRrXSl9fSwybDo5KCl7aCBlPWM7NyhlLjYuMVo9PT1qKXtlLjFaKCl9NyhlLjYuMUI9PT1qKXtlLjFCKCl9ZS40ZygpOzcoQSBlLjYuM3c9PT1cIjlcIil7ZS42LjN3LlIoYyxbZS4ka10pfX0sM3g6OSgpe2ggZT1jOzcoQSBlLjYuM0I9PT1cIjlcIil7ZS42LjNCLlIoYyxbZS4ka10pfWUuM28oKTtlLjJWKCk7ZS4yVygpO2UuNGYoKTtlLjMwKCk7ZS4ybCgpOzcoQSBlLjYuM0Q9PT1cIjlcIil7ZS42LjNELlIoYyxbZS4ka10pfX0sM0Y6OSgpe2ggZT1jO3QuMWMoOSgpe2UuM3goKX0sMCl9LDNvOjkoKXtoIGU9Yzs3KGUuJGsuMm0oXCI6M25cIik9PT1iKXtlLiRrLnooezJ1OjB9KTt0LjE4KGUuMUMpO3QuMTgoZS4xWCl9bHtwIGJ9ZS4xWD10LjRkKDkoKXs3KGUuJGsuMm0oXCI6M25cIikpe2UuM0YoKTtlLiRrLjRiKHsydToxfSwyTSk7dC4xOChlLjFYKX19LDV4KX0sNEI6OSgpe2ggZT1jO2UuJFMuNW4oXFwnPEwgSD1cImQtMXBcIj5cXCcpLjRhKFxcJzxMIEg9XCJkLTFLXCI+PC9MPlxcJyk7ZS4kay4xNyhcIi5kLTFwXCIpLjRhKFxcJzxMIEg9XCJkLTFwLTQ5XCI+XFwnKTtlLjFIPWUuJGsuMTcoXCIuZC0xcC00OVwiKTtlLiRrLnooXCI0aVwiLFwiNGhcIil9LDFNOjkoKXtoIGU9Yyx0PWUuJGsuMUkoZS42LjFNKSxuPWUuJGsuMUkoZS42LjJpKTs3KCF0KXtlLiRrLkkoZS42LjFNKX03KCFuKXtlLiRrLkkoZS42LjJpKX19LDJWOjkoKXtoIHQ9YyxuLHI7Nyh0LjYuMlo9PT1iKXtwIGJ9Nyh0LjYuNDg9PT1qKXt0LjYucT10LjJ0PTE7dC42LjFoPWI7dC42LjFzPWI7dC42LjFPPWI7dC42LjIyPWI7dC42LjFRPWI7dC42LjFSPWI7cCBifW49ZSh0LjYuNDcpLjFmKCk7NyhuPih0LjYuMXNbMF18fHQuMnQpKXt0LjYucT10LjJ0fTcodC42LjFoIT09Yil7dC42LjFoLjVnKDkoZSx0KXtwIGVbMF0tdFswXX0pOzFBKHI9MDtyPHQuNi4xaC5OO3IrPTEpezcodC42LjFoW3JdWzBdPD1uKXt0LjYucT10LjYuMWhbcl1bMV19fX1sezcobjw9dC42LjFzWzBdJiZ0LjYuMXMhPT1iKXt0LjYucT10LjYuMXNbMV19NyhuPD10LjYuMU9bMF0mJnQuNi4xTyE9PWIpe3QuNi5xPXQuNi4xT1sxXX03KG48PXQuNi4yMlswXSYmdC42LjIyIT09Yil7dC42LnE9dC42LjIyWzFdfTcobjw9dC42LjFRWzBdJiZ0LjYuMVEhPT1iKXt0LjYucT10LjYuMVFbMV19NyhuPD10LjYuMVJbMF0mJnQuNi4xUiE9PWIpe3QuNi5xPXQuNi4xUlsxXX19Nyh0LjYucT50LkUmJnQuNi40Nj09PWope3QuNi5xPXQuRX19LDRyOjkoKXtoIG49YyxyLGk7NyhuLjYuMlohPT1qKXtwIGJ9aT1lKHQpLjFmKCk7bi4zZD05KCl7NyhlKHQpLjFmKCkhPT1pKXs3KG4uNi5PIT09Yil7dC4xOChuLjFDKX10LjVkKHIpO3I9dC4xYyg5KCl7aT1lKHQpLjFmKCk7bi4zeCgpfSxuLjYuNDUpfX07ZSh0KS40NChuLjNkKX0sNGY6OSgpe2ggZT1jO2UuMmcoZS5tKTs3KGUuNi5PIT09Yil7ZS4zaigpfX0sNDM6OSgpe2ggdD1jLG49MCxyPXQuRS10LjYucTt0LiRHLjJmKDkoaSl7aCBzPWUoYyk7cy56KHsxZjp0Lk19KS52KFwiZC0xS1wiLDNwKGkpKTs3KGkldC42LnE9PT0wfHxpPT09cil7NyghKGk+cikpe24rPTF9fXMudihcImQtMjRcIixuKX0pfSw0Mjo5KCl7aCBlPWMsdD1lLiRHLk4qZS5NO2UuJEsueih7MWY6dCoyLFQ6MH0pO2UuNDMoKX0sMlc6OSgpe2ggZT1jO2UuNDAoKTtlLjQyKCk7ZS4zWigpO2UuM3YoKX0sNDA6OSgpe2ggZT1jO2UuTT0xRi40TyhlLiRrLjFmKCkvZS42LnEpfSwzdjo5KCl7aCBlPWMsdD0oZS5FKmUuTS1lLjYucSplLk0pKi0xOzcoZS42LnE+ZS5FKXtlLkQ9MDt0PTA7ZS4zej0wfWx7ZS5EPWUuRS1lLjYucTtlLjN6PXR9cCB0fSwzWTo5KCl7cCAwfSwzWjo5KCl7aCB0PWMsbj0wLHI9MCxpLHMsbzt0Lko9WzBdO3QuM0U9W107MUEoaT0wO2k8dC5FO2krPTEpe3IrPXQuTTt0LkouMkQoLXIpOzcodC42LjEyPT09ail7cz1lKHQuJEdbaV0pO289cy52KFwiZC0yNFwiKTs3KG8hPT1uKXt0LjNFW25dPXQuSltpXTtuPW99fX19LDR0OjkoKXtoIHQ9Yzs3KHQuNi4yYT09PWp8fHQuNi4xdj09PWope3QuQj1lKFxcJzxMIEg9XCJkLTVBXCIvPlxcJykuNW0oXCI1bFwiLCF0LkYuMTUpLjVjKHQuJGspfTcodC42LjF2PT09ail7dC4zVCgpfTcodC42LjJhPT09ail7dC4zUygpfX0sM1M6OSgpe2ggdD1jLG49ZShcXCc8TCBIPVwiZC00VVwiLz5cXCcpO3QuQi4xbyhuKTt0LjF1PWUoXCI8TC8+XCIse1wiSFwiOlwiZC0xblwiLDJ5OnQuNi4yVVswXXx8XCJcIn0pO3QuMXE9ZShcIjxMLz5cIix7XCJIXCI6XCJkLVVcIiwyeTp0LjYuMlVbMV18fFwiXCJ9KTtuLjFvKHQuMXUpLjFvKHQuMXEpO24udyhcIjJYLkIgMjEuQlwiLFxcJ0xbSF49XCJkXCJdXFwnLDkoZSl7ZS4xbCgpfSk7bi53KFwiMm4uQiAyOC5CXCIsXFwnTFtIXj1cImRcIl1cXCcsOShuKXtuLjFsKCk7NyhlKGMpLjFJKFwiZC1VXCIpKXt0LlUoKX1se3QuMW4oKX19KX0sM1Q6OSgpe2ggdD1jO3QuMWs9ZShcXCc8TCBIPVwiZC0xdlwiLz5cXCcpO3QuQi4xbyh0LjFrKTt0LjFrLncoXCIybi5CIDI4LkJcIixcIi5kLTFqXCIsOShuKXtuLjFsKCk7NygzcChlKGMpLnYoXCJkLTFqXCIpKSE9PXQubSl7dC4xZygzcChlKGMpLnYoXCJkLTFqXCIpKSxqKX19KX0sM1A6OSgpe2ggdD1jLG4scixpLHMsbyx1OzcodC42LjF2PT09Yil7cCBifXQuMWsuMnkoXCJcIik7bj0wO3I9dC5FLXQuRSV0LjYucTsxQShzPTA7czx0LkU7cys9MSl7NyhzJXQuNi5xPT09MCl7bis9MTs3KHI9PT1zKXtpPXQuRS10LjYucX1vPWUoXCI8TC8+XCIse1wiSFwiOlwiZC0xalwifSk7dT1lKFwiPDNOPjwvM04+XCIsezRSOnQuNi4zOT09PWo/bjpcIlwiLFwiSFwiOnQuNi4zOT09PWo/XCJkLTU5XCI6XCJcIn0pO28uMW8odSk7by52KFwiZC0xalwiLHI9PT1zP2k6cyk7by52KFwiZC0yNFwiLG4pO3QuMWsuMW8obyl9fXQuMzUoKX0sMzU6OSgpe2ggdD1jOzcodC42LjF2PT09Yil7cCBifXQuMWsuMTcoXCIuZC0xalwiKS4yZig5KCl7NyhlKGMpLnYoXCJkLTI0XCIpPT09ZSh0LiRHW3QubV0pLnYoXCJkLTI0XCIpKXt0LjFrLjE3KFwiLmQtMWpcIikuWihcIjJkXCIpO2UoYykuSShcIjJkXCIpfX0pfSwzZTo5KCl7aCBlPWM7NyhlLjYuMmE9PT1iKXtwIGJ9NyhlLjYuMmU9PT1iKXs3KGUubT09PTAmJmUuRD09PTApe2UuMXUuSShcIjFiXCIpO2UuMXEuSShcIjFiXCIpfWwgNyhlLm09PT0wJiZlLkQhPT0wKXtlLjF1LkkoXCIxYlwiKTtlLjFxLlooXCIxYlwiKX1sIDcoZS5tPT09ZS5EKXtlLjF1LlooXCIxYlwiKTtlLjFxLkkoXCIxYlwiKX1sIDcoZS5tIT09MCYmZS5tIT09ZS5EKXtlLjF1LlooXCIxYlwiKTtlLjFxLlooXCIxYlwiKX19fSwzMDo5KCl7aCBlPWM7ZS4zUCgpO2UuM2UoKTs3KGUuQil7NyhlLjYucT49ZS5FKXtlLkIuM0soKX1se2UuQi4zSigpfX19LDU1OjkoKXtoIGU9Yzs3KGUuQil7ZS5CLjNrKCl9fSxVOjkoZSl7aCB0PWM7Nyh0LjFFKXtwIGJ9dC5tKz10LjYuMTI9PT1qP3QuNi5xOjE7Nyh0Lm0+dC5EKyh0LjYuMTI9PT1qP3QuNi5xLTE6MCkpezcodC42LjJlPT09ail7dC5tPTA7ZT1cIjJrXCJ9bHt0Lm09dC5EO3AgYn19dC4xZyh0Lm0sZSl9LDFuOjkoZSl7aCB0PWM7Nyh0LjFFKXtwIGJ9Nyh0LjYuMTI9PT1qJiZ0Lm0+MCYmdC5tPHQuNi5xKXt0Lm09MH1se3QubS09dC42LjEyPT09aj90LjYucToxfTcodC5tPDApezcodC42LjJlPT09ail7dC5tPXQuRDtlPVwiMmtcIn1se3QubT0wO3AgYn19dC4xZyh0Lm0sZSl9LDFnOjkoZSxuLHIpe2ggaT1jLHM7NyhpLjFFKXtwIGJ9NyhBIGkuNi4xWT09PVwiOVwiKXtpLjYuMVkuUihjLFtpLiRrXSl9NyhlPj1pLkQpe2U9aS5EfWwgNyhlPD0wKXtlPTB9aS5tPWkuZC5tPWU7NyhpLjYuMm8hPT1iJiZyIT09XCI0ZVwiJiZpLjYucT09PTEmJmkuRi4xeD09PWope2kuMXQoMCk7NyhpLkYuMXg9PT1qKXtpLjFMKGkuSltlXSl9bHtpLjFyKGkuSltlXSwxKX1pLjJyKCk7aS40bCgpO3AgYn1zPWkuSltlXTs3KGkuRi4xeD09PWope2kuMVQ9Yjs3KG49PT1qKXtpLjF0KFwiMXdcIik7dC4xYyg5KCl7aS4xVD1qfSxpLjYuMXcpfWwgNyhuPT09XCIya1wiKXtpLjF0KGkuNi4ydik7dC4xYyg5KCl7aS4xVD1qfSxpLjYuMnYpfWx7aS4xdChcIjFtXCIpO3QuMWMoOSgpe2kuMVQ9an0saS42LjFtKX1pLjFMKHMpfWx7NyhuPT09ail7aS4xcihzLGkuNi4xdyl9bCA3KG49PT1cIjJrXCIpe2kuMXIocyxpLjYuMnYpfWx7aS4xcihzLGkuNi4xbSl9fWkuMnIoKX0sMmc6OShlKXtoIHQ9Yzs3KEEgdC42LjFZPT09XCI5XCIpe3QuNi4xWS5SKGMsW3QuJGtdKX03KGU+PXQuRHx8ZT09PS0xKXtlPXQuRH1sIDcoZTw9MCl7ZT0wfXQuMXQoMCk7Nyh0LkYuMXg9PT1qKXt0LjFMKHQuSltlXSl9bHt0LjFyKHQuSltlXSwxKX10Lm09dC5kLm09ZTt0LjJyKCl9LDJyOjkoKXtoIGU9YztlLjI2LjJEKGUubSk7ZS4xMz1lLmQuMTM9ZS4yNltlLjI2Lk4tMl07ZS4yNi41ZigwKTs3KGUuMTMhPT1lLm0pe2UuMzUoKTtlLjNlKCk7ZS4ybCgpOzcoZS42Lk8hPT1iKXtlLjNqKCl9fTcoQSBlLjYuM3k9PT1cIjlcIiYmZS4xMyE9PWUubSl7ZS42LjN5LlIoYyxbZS4ka10pfX0sWDo5KCl7aCBlPWM7ZS4zQT1cIlhcIjt0LjE4KGUuMUMpfSwzajo5KCl7aCBlPWM7NyhlLjNBIT09XCJYXCIpe2UuMTkoKX19LDE5OjkoKXtoIGU9YztlLjNBPVwiMTlcIjs3KGUuNi5PPT09Yil7cCBifXQuMTgoZS4xQyk7ZS4xQz10LjRkKDkoKXtlLlUoail9LGUuNi5PKX0sMXQ6OShlKXtoIHQ9Yzs3KGU9PT1cIjFtXCIpe3QuJEsueih0LjJ6KHQuNi4xbSkpfWwgNyhlPT09XCIxd1wiKXt0LiRLLnoodC4yeih0LjYuMXcpKX1sIDcoQSBlIT09XCIyWVwiKXt0LiRLLnoodC4yeihlKSl9fSwyejo5KGUpe3B7XCItMUctMWFcIjpcIjJDIFwiK2UrXCIxeiAyc1wiLFwiLTFXLTFhXCI6XCIyQyBcIitlK1wiMXogMnNcIixcIi1vLTFhXCI6XCIyQyBcIitlK1wiMXogMnNcIiwxYTpcIjJDIFwiK2UrXCIxeiAyc1wifX0sM0g6OSgpe3B7XCItMUctMWFcIjpcIlwiLFwiLTFXLTFhXCI6XCJcIixcIi1vLTFhXCI6XCJcIiwxYTpcIlwifX0sM0k6OShlKXtwe1wiLTFHLVBcIjpcIjFpKFwiK2UrXCJWLCBDLCBDKVwiLFwiLTFXLVBcIjpcIjFpKFwiK2UrXCJWLCBDLCBDKVwiLFwiLW8tUFwiOlwiMWkoXCIrZStcIlYsIEMsIEMpXCIsXCItMXotUFwiOlwiMWkoXCIrZStcIlYsIEMsIEMpXCIsUDpcIjFpKFwiK2UrXCJWLCBDLEMpXCJ9fSwxTDo5KGUpe2ggdD1jO3QuJEsueih0LjNJKGUpKX0sM0w6OShlKXtoIHQ9Yzt0LiRLLnooe1Q6ZX0pfSwxcjo5KGUsdCl7aCBuPWM7bi4yOT1iO24uJEsuWChqLGopLjRiKHtUOmV9LHs1NDp0fHxuLjYuMW0sM006OSgpe24uMjk9an19KX0sNEU6OSgpe2ggZT1jLHI9XCIxaShDLCBDLCBDKVwiLGk9bi41NihcIkxcIikscyxvLHUsYTtpLjJ3LjNPPVwiICAtMVctUDpcIityK1wiOyAtMXotUDpcIityK1wiOyAtby1QOlwiK3IrXCI7IC0xRy1QOlwiK3IrXCI7IFA6XCIrcjtzPS8xaVxcXFwoQywgQywgQ1xcXFwpL2c7bz1pLjJ3LjNPLjVpKHMpO3U9byE9PTE0JiZvLk49PT0xO2E9XCI1elwiMzggdHx8dC41US40UDtlLkY9ezF4OnUsMTU6YX19LDRxOjkoKXtoIGU9Yzs3KGUuNi4yNyE9PWJ8fGUuNi4xVSE9PWIpe2UuM1EoKTtlLjNSKCl9fSw0Qzo5KCl7aCBlPWMsdD1bXCJzXCIsXCJlXCIsXCJ4XCJdO2UuMTY9e307NyhlLjYuMjc9PT1qJiZlLjYuMVU9PT1qKXt0PVtcIjJYLmQgMjEuZFwiLFwiMk4uZCAzVS5kXCIsXCIybi5kIDNWLmQgMjguZFwiXX1sIDcoZS42LjI3PT09YiYmZS42LjFVPT09ail7dD1bXCIyWC5kXCIsXCIyTi5kXCIsXCIybi5kIDNWLmRcIl19bCA3KGUuNi4yNz09PWomJmUuNi4xVT09PWIpe3Q9W1wiMjEuZFwiLFwiM1UuZFwiLFwiMjguZFwiXX1lLjE2LjNXPXRbMF07ZS4xNi4ySz10WzFdO2UuMTYuMko9dFsyXX0sM1I6OSgpe2ggdD1jO3QuJGsudyhcIjV5LmRcIiw5KGUpe2UuMWwoKX0pO3QuJGsudyhcIjIxLjNYXCIsOSh0KXtwIGUodC4xZCkuMm0oXCI1QywgNUUsIDVGLCA1TlwiKX0pfSwzUTo5KCl7OSBzKGUpezcoZS4yYiE9PVcpe3B7eDplLjJiWzBdLjJjLHk6ZS4yYlswXS40MX19NyhlLjJiPT09Vyl7NyhlLjJjIT09Vyl7cHt4OmUuMmMseTplLjQxfX03KGUuMmM9PT1XKXtwe3g6ZS41Mix5OmUuNTN9fX19OSBvKHQpezcodD09PVwid1wiKXtlKG4pLncoci4xNi4ySyxhKTtlKG4pLncoci4xNi4ySixmKX1sIDcodD09PVwiUVwiKXtlKG4pLlEoci4xNi4ySyk7ZShuKS5RKHIuMTYuMkopfX05IHUobil7aCB1PW4uM2h8fG58fHQuM2csYTs3KHUuNWE9PT0zKXtwIGJ9NyhyLkU8PXIuNi5xKXtwfTcoci4yOT09PWImJiFyLjYuM2Ype3AgYn03KHIuMVQ9PT1iJiYhci42LjNmKXtwIGJ9NyhyLjYuTyE9PWIpe3QuMTgoci4xQyl9NyhyLkYuMTUhPT1qJiYhci4kSy4xSShcIjNiXCIpKXtyLiRLLkkoXCIzYlwiKX1yLjExPTA7ci5ZPTA7ZShjKS56KHIuM0goKSk7YT1lKGMpLjJoKCk7aS4yUz1hLlQ7aS4yUj1zKHUpLngtYS5UO2kuMlA9cyh1KS55LWEuNW87byhcIndcIik7aS4yaj1iO2kuMkw9dS4xZHx8dS40Y305IGEobyl7aCB1PW8uM2h8fG98fHQuM2csYSxmO3IuMTE9cyh1KS54LWkuMlI7ci4yST1zKHUpLnktaS4yUDtyLlk9ci4xMS1pLjJTOzcoQSByLjYuMkU9PT1cIjlcIiYmaS4zQyE9PWomJnIuWSE9PTApe2kuM0M9ajtyLjYuMkUuUihyLFtyLiRrXSl9Nygoci5ZPjh8fHIuWTwtOCkmJnIuRi4xNT09PWopezcodS4xbCE9PVcpe3UuMWwoKX1se3UuNUw9Yn1pLjJqPWp9Nygoci4yST4xMHx8ci4ySTwtMTApJiZpLjJqPT09Yil7ZShuKS5RKFwiMk4uZFwiKX1hPTkoKXtwIHIuWS81fTtmPTkoKXtwIHIuM3orci5ZLzV9O3IuMTE9MUYuM3YoMUYuM1koci4xMSxhKCkpLGYoKSk7NyhyLkYuMXg9PT1qKXtyLjFMKHIuMTEpfWx7ci4zTChyLjExKX19OSBmKG4pe2ggcz1uLjNofHxufHx0LjNnLHUsYSxmO3MuMWQ9cy4xZHx8cy40YztpLjNDPWI7NyhyLkYuMTUhPT1qKXtyLiRLLlooXCIzYlwiKX03KHIuWTwwKXtyLjF5PXIuZC4xeT1cIlRcIn1se3IuMXk9ci5kLjF5PVwiM2lcIn03KHIuWSE9PTApe3U9ci40aigpO3IuMWcodSxiLFwiNGVcIik7NyhpLjJMPT09cy4xZCYmci5GLjE1IT09ail7ZShzLjFkKS53KFwiM2EuNGtcIiw5KHQpe3QuNFMoKTt0LjRUKCk7dC4xbCgpO2UodC4xZCkuUShcIjNhLjRrXCIpfSk7YT1lLjROKHMuMWQsXCI0VlwiKS4zYTtmPWEuNFcoKTthLjRYKDAsMCxmKX19byhcIlFcIil9aCByPWMsaT17MlI6MCwyUDowLDRZOjAsMlM6MCwyaDoxNCw0WjoxNCw1MDoxNCwyajoxNCw1MToxNCwyTDoxNH07ci4yOT1qO3IuJGsudyhyLjE2LjNXLFwiLmQtMXBcIix1KX0sNGo6OSgpe2ggZT1jLHQ9ZS40bSgpOzcodD5lLkQpe2UubT1lLkQ7dD1lLkR9bCA3KGUuMTE+PTApe3Q9MDtlLm09MH1wIHR9LDRtOjkoKXtoIHQ9YyxuPXQuNi4xMj09PWo/dC4zRTp0Lkoscj10LjExLGk9MTQ7ZS4yZihuLDkocyxvKXs3KHItdC5NLzIwPm5bcysxXSYmci10Lk0vMjA8byYmdC4zNCgpPT09XCJUXCIpe2k9bzs3KHQuNi4xMj09PWope3QubT1lLjRwKGksdC5KKX1se3QubT1zfX1sIDcocit0Lk0vMjA8byYmcit0Lk0vMjA+KG5bcysxXXx8bltzXS10Lk0pJiZ0LjM0KCk9PT1cIjNpXCIpezcodC42LjEyPT09ail7aT1uW3MrMV18fG5bbi5OLTFdO3QubT1lLjRwKGksdC5KKX1se2k9bltzKzFdO3QubT1zKzF9fX0pO3AgdC5tfSwzNDo5KCl7aCBlPWMsdDs3KGUuWTwwKXt0PVwiM2lcIjtlLjN1PVwiVVwifWx7dD1cIlRcIjtlLjN1PVwiMW5cIn1wIHR9LDRBOjkoKXtoIGU9YztlLiRrLncoXCJkLlVcIiw5KCl7ZS5VKCl9KTtlLiRrLncoXCJkLjFuXCIsOSgpe2UuMW4oKX0pO2UuJGsudyhcImQuMTlcIiw5KHQsbil7ZS42Lk89bjtlLjE5KCk7ZS4zMj1cIjE5XCJ9KTtlLiRrLncoXCJkLlhcIiw5KCl7ZS5YKCk7ZS4zMj1cIlhcIn0pO2UuJGsudyhcImQuMWdcIiw5KHQsbil7ZS4xZyhuKX0pO2UuJGsudyhcImQuMmdcIiw5KHQsbil7ZS4yZyhuKX0pfSwycDo5KCl7aCBlPWM7NyhlLjYuMnA9PT1qJiZlLkYuMTUhPT1qJiZlLjYuTyE9PWIpe2UuJGsudyhcIjU3XCIsOSgpe2UuWCgpfSk7ZS4kay53KFwiNThcIiw5KCl7NyhlLjMyIT09XCJYXCIpe2UuMTkoKX19KX19LDFaOjkoKXtoIHQ9YyxuLHIsaSxzLG87Nyh0LjYuMVo9PT1iKXtwIGJ9MUEobj0wO248dC5FO24rPTEpe3I9ZSh0LiRHW25dKTs3KHIudihcImQtMWVcIik9PT1cIjFlXCIpezRzfWk9ci52KFwiZC0xS1wiKTtzPXIuMTcoXCIuNWJcIik7NyhBIHMudihcIjFKXCIpIT09XCIyWVwiKXtyLnYoXCJkLTFlXCIsXCIxZVwiKTs0c303KHIudihcImQtMWVcIik9PT1XKXtzLjNLKCk7ci5JKFwiNHVcIikudihcImQtMWVcIixcIjVlXCIpfTcodC42LjR2PT09ail7bz1pPj10Lm19bHtvPWp9NyhvJiZpPHQubSt0LjYucSYmcy5OKXt0LjR3KHIscyl9fX0sNHc6OShlLG4pezkgbygpe2UudihcImQtMWVcIixcIjFlXCIpLlooXCI0dVwiKTtuLjVoKFwidi0xSlwiKTs3KHIuNi40eD09PVwiNHlcIil7bi41aig1ayl9bHtuLjNKKCl9NyhBIHIuNi4yVD09PVwiOVwiKXtyLjYuMlQuUihjLFtyLiRrXSl9fTkgdSgpe2krPTE7NyhyLjJRKG4uM2woMCkpfHxzPT09ail7bygpfWwgNyhpPD0ycSl7dC4xYyh1LDJxKX1se28oKX19aCByPWMsaT0wLHM7NyhuLjVwKFwiNXFcIik9PT1cIjVyXCIpe24ueihcIjVzLTV0XCIsXCI1dShcIituLnYoXCIxSlwiKStcIilcIik7cz1qfWx7blswXS4xSj1uLnYoXCIxSlwiKX11KCl9LDFCOjkoKXs5IHMoKXtoIHI9ZShuLiRHW24ubV0pLjJHKCk7bi4xSC56KFwiMkdcIixyK1wiVlwiKTs3KCFuLjFILjFJKFwiMUJcIikpe3QuMWMoOSgpe24uMUguSShcIjFCXCIpfSwwKX19OSBvKCl7aSs9MTs3KG4uMlEoci4zbCgwKSkpe3MoKX1sIDcoaTw9MnEpe3QuMWMobywycSl9bHtuLjFILnooXCIyR1wiLFwiXCIpfX1oIG49YyxyPWUobi4kR1tuLm1dKS4xNyhcIjV3XCIpLGk7NyhyLjNsKDApIT09Vyl7aT0wO28oKX1se3MoKX19LDJROjkoZSl7aCB0OzcoIWUuM00pe3AgYn10PUEgZS40RDs3KHQhPT1cIldcIiYmZS40RD09PTApe3AgYn1wIGp9LDRnOjkoKXtoIHQ9YyxuOzcodC42LjJGPT09ail7dC4kRy5aKFwiMmRcIil9dC4xRD1bXTsxQShuPXQubTtuPHQubSt0LjYucTtuKz0xKXt0LjFELjJEKG4pOzcodC42LjJGPT09ail7ZSh0LiRHW25dKS5JKFwiMmRcIil9fXQuZC4xRD10LjFEfSw0bjo5KGUpe2ggdD1jO3QuNEc9XCJkLVwiK2UrXCItNUJcIjt0LjRIPVwiZC1cIitlK1wiLTM4XCJ9LDRsOjkoKXs5IGEoZSl7cHsyaDpcIjVEXCIsVDplK1wiVlwifX1oIGU9Yyx0PWUuNEcsbj1lLjRILHI9ZS4kRy4xUyhlLm0pLGk9ZS4kRy4xUyhlLjEzKSxzPTFGLjRKKGUuSltlLm1dKStlLkpbZS4xM10sbz0xRi40SihlLkpbZS5tXSkrZS5NLzIsdT1cIjVHIDVIIDVJIDVKXCI7ZS4xRT1qO2UuJEsuSShcImQtMVBcIikueih7XCItMUctUC0xUFwiOm8rXCJWXCIsXCItMVctNEstMVBcIjpvK1wiVlwiLFwiNEstMVBcIjpvK1wiVlwifSk7aS56KGEocywxMCkpLkkodCkudyh1LDkoKXtlLjNtPWo7aS5RKHUpO2UuMzEoaSx0KX0pO3IuSShuKS53KHUsOSgpe2UuMzY9ajtyLlEodSk7ZS4zMShyLG4pfSl9LDMxOjkoZSx0KXtoIG49YztlLnooezJoOlwiXCIsVDpcIlwifSkuWih0KTs3KG4uM20mJm4uMzYpe24uJEsuWihcImQtMVBcIik7bi4zbT1iO24uMzY9YjtuLjFFPWJ9fSw0bzo5KCl7aCBlPWM7ZS5kPXsyQTplLjJBLDVQOmUuJGssUzplLiRTLEc6ZS4kRyxtOmUubSwxMzplLjEzLDFEOmUuMUQsMTU6ZS5GLjE1LEY6ZS5GLDF5OmUuMXl9fSwzRzo5KCl7aCByPWM7ci4kay5RKFwiLmQgZCAyMS4zWFwiKTtlKG4pLlEoXCIuZCBkXCIpO2UodCkuUShcIjQ0XCIsci4zZCl9LDFWOjkoKXtoIGU9Yzs3KGUuJGsuMjUoKS5OIT09MCl7ZS4kSy4zcigpO2UuJFMuM3IoKS4zcigpOzcoZS5CKXtlLkIuM2soKX19ZS4zRygpO2UuJGsuMngoXCIyd1wiLGUuJGsudihcImQtNElcIil8fFwiXCIpLjJ4KFwiSFwiLGUuJGsudihcImQtNEZcIikpfSw1VDo5KCl7aCBlPWM7ZS5YKCk7dC4xOChlLjFYKTtlLjFWKCk7ZS4kay41VSgpfSw1Vjo5KHQpe2ggbj1jLHI9ZS40TSh7fSxuLjJBLHQpO24uMVYoKTtuLjFOKHIsbi4kayl9LDVXOjkoZSx0KXtoIG49YyxyOzcoIWUpe3AgYn03KG4uJGsuMjUoKS5OPT09MCl7bi4kay4xbyhlKTtuLjIzKCk7cCBifW4uMVYoKTs3KHQ9PT1XfHx0PT09LTEpe3I9LTF9bHtyPXR9NyhyPj1uLiRTLk58fHI9PT0tMSl7bi4kUy4xUygtMSkuNVgoZSl9bHtuLiRTLjFTKHIpLjVZKGUpfW4uMjMoKX0sNVo6OShlKXtoIHQ9YyxuOzcodC4kay4yNSgpLk49PT0wKXtwIGJ9NyhlPT09V3x8ZT09PS0xKXtuPS0xfWx7bj1lfXQuMVYoKTt0LiRTLjFTKG4pLjNrKCk7dC4yMygpfX07ZS4zNy4yQj05KHQpe3AgYy4yZig5KCl7NyhlKGMpLnYoXCJkLTFOXCIpPT09ail7cCBifWUoYykudihcImQtMU5cIixqKTtoIG49M2MuM3Eocik7bi4xTih0LGMpO2UudihjLFwiMkJcIixuKX0pfTtlLjM3LjJCLjY9e3E6NSwxaDpiLDFzOls2MCw0XSwxTzpbNjEsM10sMjI6WzYyLDJdLDFROmIsMVI6WzYzLDFdLDQ4OmIsNDY6YiwxbToyTSwxdzo2NCwydjo2NSxPOmIsMnA6YiwyYTpiLDJVOltcIjFuXCIsXCJVXCJdLDJlOmosMTI6YiwxdjpqLDM5OmIsMlo6aiw0NToyTSw0Nzp0LDFNOlwiZC02NlwiLDJpOlwiZC0yaVwiLDFaOmIsNHY6aiw0eDpcIjR5XCIsMUI6YiwyTzpiLDMzOmIsM2Y6aiwyNzpqLDFVOmosMkY6YiwybzpiLDNCOmIsM0Q6YiwySDpiLDNzOmIsMVk6YiwzeTpiLDN3OmIsMkU6YiwyVDpifX0pKDY3LDY4LDY5KScsNjIsMzgyLCd8fHx8fHxvcHRpb25zfGlmfHxmdW5jdGlvbnx8ZmFsc2V8dGhpc3xvd2x8fHx8dmFyfHx0cnVlfGVsZW18ZWxzZXxjdXJyZW50SXRlbXx8fHJldHVybnxpdGVtc3x8fHx8ZGF0YXxvbnx8fGNzc3x0eXBlb2Z8b3dsQ29udHJvbHN8MHB4fG1heGltdW1JdGVtfGl0ZW1zQW1vdW50fGJyb3dzZXJ8b3dsSXRlbXN8Y2xhc3N8YWRkQ2xhc3N8cG9zaXRpb25zSW5BcnJheXxvd2xXcmFwcGVyfGRpdnxpdGVtV2lkdGh8bGVuZ3RofGF1dG9QbGF5fHRyYW5zZm9ybXxvZmZ8YXBwbHl8dXNlckl0ZW1zfGxlZnR8bmV4dHxweHx1bmRlZmluZWR8c3RvcHxuZXdSZWxhdGl2ZVh8cmVtb3ZlQ2xhc3N8fG5ld1Bvc1h8c2Nyb2xsUGVyUGFnZXxwcmV2SXRlbXxudWxsfGlzVG91Y2h8ZXZfdHlwZXN8ZmluZHxjbGVhckludGVydmFsfHBsYXl8dHJhbnNpdGlvbnxkaXNhYmxlZHxzZXRUaW1lb3V0fHRhcmdldHxsb2FkZWR8d2lkdGh8Z29Ub3xpdGVtc0N1c3RvbXx0cmFuc2xhdGUzZHxwYWdlfHBhZ2luYXRpb25XcmFwcGVyfHByZXZlbnREZWZhdWx0fHNsaWRlU3BlZWR8cHJldnxhcHBlbmR8d3JhcHBlcnxidXR0b25OZXh0fGNzczJzbGlkZXxpdGVtc0Rlc2t0b3B8c3dhcFNwZWVkfGJ1dHRvblByZXZ8cGFnaW5hdGlvbnxwYWdpbmF0aW9uU3BlZWR8c3VwcG9ydDNkfGRyYWdEaXJlY3Rpb258bXN8Zm9yfGF1dG9IZWlnaHR8YXV0b1BsYXlJbnRlcnZhbHx2aXNpYmxlSXRlbXN8aXNUcmFuc2l0aW9ufE1hdGh8d2Via2l0fHdyYXBwZXJPdXRlcnxoYXNDbGFzc3xzcmN8aXRlbXx0cmFuc2l0aW9uM2R8YmFzZUNsYXNzfGluaXR8aXRlbXNEZXNrdG9wU21hbGx8b3JpZ2lufGl0ZW1zVGFibGV0U21hbGx8aXRlbXNNb2JpbGV8ZXF8aXNDc3MzRmluaXNofHRvdWNoRHJhZ3x1bldyYXB8bW96fGNoZWNrVmlzaWJsZXxiZWZvcmVNb3ZlfGxhenlMb2FkfHxtb3VzZWRvd258aXRlbXNUYWJsZXR8c2V0VmFyc3xyb3VuZFBhZ2VzfGNoaWxkcmVufHByZXZBcnJ8bW91c2VEcmFnfG1vdXNldXB8aXNDc3NGaW5pc2h8bmF2aWdhdGlvbnx0b3VjaGVzfHBhZ2VYfGFjdGl2ZXxyZXdpbmROYXZ8ZWFjaHxqdW1wVG98cG9zaXRpb258dGhlbWV8c2xpZGluZ3xyZXdpbmR8ZWFjaE1vdmVVcGRhdGV8aXN8dG91Y2hlbmR8dHJhbnNpdGlvblN0eWxlfHN0b3BPbkhvdmVyfDEwMHxhZnRlckdvfGVhc2V8b3JpZ25hbEl0ZW1zfG9wYWNpdHl8cmV3aW5kU3BlZWR8c3R5bGV8YXR0cnxodG1sfGFkZENzc1NwZWVkfHVzZXJPcHRpb25zfG93bENhcm91c2VsfGFsbHxwdXNofHN0YXJ0RHJhZ2dpbmd8YWRkQ2xhc3NBY3RpdmV8aGVpZ2h0fGJlZm9yZUluaXR8bmV3UG9zWXxlbmR8bW92ZXx0YXJnZXRFbGVtZW50fDIwMHx0b3VjaG1vdmV8anNvblBhdGh8b2Zmc2V0WXxjb21wbGV0ZUltZ3xvZmZzZXRYfHJlbGF0aXZlUG9zfGFmdGVyTGF6eUxvYWR8bmF2aWdhdGlvblRleHR8dXBkYXRlSXRlbXN8Y2FsY3VsYXRlQWxsfHRvdWNoc3RhcnR8c3RyaW5nfHJlc3BvbnNpdmV8dXBkYXRlQ29udHJvbHN8Y2xlYXJUcmFuc1N0eWxlfGhvdmVyU3RhdHVzfGpzb25TdWNjZXNzfG1vdmVEaXJlY3Rpb258Y2hlY2tQYWdpbmF0aW9ufGVuZEN1cnJlbnR8Zm58aW58cGFnaW5hdGlvbk51bWJlcnN8Y2xpY2t8Z3JhYmJpbmd8T2JqZWN0fHJlc2l6ZXJ8Y2hlY2tOYXZpZ2F0aW9ufGRyYWdCZWZvcmVBbmltRmluaXNofGV2ZW50fG9yaWdpbmFsRXZlbnR8cmlnaHR8Y2hlY2tBcHxyZW1vdmV8Z2V0fGVuZFByZXZ8dmlzaWJsZXx3YXRjaFZpc2liaWxpdHl8TnVtYmVyfGNyZWF0ZXx1bndyYXB8YWZ0ZXJJbml0fGxvZ0lufHBsYXlEaXJlY3Rpb258bWF4fGFmdGVyQWN0aW9ufHVwZGF0ZVZhcnN8YWZ0ZXJNb3ZlfG1heGltdW1QaXhlbHN8YXBTdGF0dXN8YmVmb3JlVXBkYXRlfGRyYWdnaW5nfGFmdGVyVXBkYXRlfHBhZ2VzSW5BcnJheXxyZWxvYWR8Y2xlYXJFdmVudHN8cmVtb3ZlVHJhbnNpdGlvbnxkb1RyYW5zbGF0ZXxzaG93fGhpZGV8Y3NzMm1vdmV8Y29tcGxldGV8c3Bhbnxjc3NUZXh0fHVwZGF0ZVBhZ2luYXRpb258Z2VzdHVyZXN8ZGlzYWJsZWRFdmVudHN8YnVpbGRCdXR0b25zfGJ1aWxkUGFnaW5hdGlvbnxtb3VzZW1vdmV8dG91Y2hjYW5jZWx8c3RhcnR8ZGlzYWJsZVRleHRTZWxlY3R8bWlufGxvb3BzfGNhbGN1bGF0ZVdpZHRofHBhZ2VZfGFwcGVuZFdyYXBwZXJTaXplc3xhcHBlbmRJdGVtc1NpemVzfHJlc2l6ZXxyZXNwb25zaXZlUmVmcmVzaFJhdGV8aXRlbXNTY2FsZVVwfHJlc3BvbnNpdmVCYXNlV2lkdGh8c2luZ2xlSXRlbXxvdXRlcnx3cmFwfGFuaW1hdGV8c3JjRWxlbWVudHxzZXRJbnRlcnZhbHxkcmFnfHVwZGF0ZVBvc2l0aW9ufG9uVmlzaWJsZUl0ZW1zfGJsb2NrfGRpc3BsYXl8Z2V0TmV3UG9zaXRpb258ZGlzYWJsZXxzaW5nbGVJdGVtVHJhbnNpdGlvbnxjbG9zZXN0SXRlbXx0cmFuc2l0aW9uVHlwZXN8b3dsU3RhdHVzfGluQXJyYXl8bW92ZUV2ZW50c3xyZXNwb25zZXxjb250aW51ZXxidWlsZENvbnRyb2xzfGxvYWRpbmd8bGF6eUZvbGxvd3xsYXp5UHJlbG9hZHxsYXp5RWZmZWN0fGZhZGV8b25TdGFydHVwfGN1c3RvbUV2ZW50c3x3cmFwSXRlbXN8ZXZlbnRUeXBlc3xuYXR1cmFsV2lkdGh8Y2hlY2tCcm93c2VyfG9yaWdpbmFsQ2xhc3Nlc3xvdXRDbGFzc3xpbkNsYXNzfG9yaWdpbmFsU3R5bGVzfGFic3xwZXJzcGVjdGl2ZXxsb2FkQ29udGVudHxleHRlbmR8X2RhdGF8cm91bmR8bXNNYXhUb3VjaFBvaW50c3w1ZTN8dGV4dHxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb258c3RvcFByb3BhZ2F0aW9ufGJ1dHRvbnN8ZXZlbnRzfHBvcHxzcGxpY2V8YmFzZUVsV2lkdGh8bWluU3dpcGV8bWF4U3dpcGV8ZGFyZ2dpbmd8Y2xpZW50WHxjbGllbnRZfGR1cmF0aW9ufGRlc3Ryb3lDb250cm9sc3xjcmVhdGVFbGVtZW50fG1vdXNlb3Zlcnxtb3VzZW91dHxudW1iZXJzfHdoaWNofGxhenlPd2x8YXBwZW5kVG98Y2xlYXJUaW1lb3V0fGNoZWNrZWR8c2hpZnR8c29ydHxyZW1vdmVBdHRyfG1hdGNofGZhZGVJbnw0MDB8Y2xpY2thYmxlfHRvZ2dsZUNsYXNzfHdyYXBBbGx8dG9wfHByb3B8dGFnTmFtZXxESVZ8YmFja2dyb3VuZHxpbWFnZXx1cmx8d3JhcHBlcldpZHRofGltZ3w1MDB8ZHJhZ3N0YXJ0fG9udG91Y2hzdGFydHxjb250cm9sc3xvdXR8aW5wdXR8cmVsYXRpdmV8dGV4dGFyZWF8c2VsZWN0fHdlYmtpdEFuaW1hdGlvbkVuZHxvQW5pbWF0aW9uRW5kfE1TQW5pbWF0aW9uRW5kfGFuaW1hdGlvbmVuZHxnZXRKU09OfHJldHVyblZhbHVlfGhhc093blByb3BlcnR5fG9wdGlvbnxvbnN0YXJ0dXB8YmFzZUVsZW1lbnR8bmF2aWdhdG9yfG5ld3xwcm90b3R5cGV8ZGVzdHJveXxyZW1vdmVEYXRhfHJlaW5pdHxhZGRJdGVtfGFmdGVyfGJlZm9yZXxyZW1vdmVJdGVtfDExOTl8OTc5fDc2OHw0Nzl8ODAwfDFlM3xjYXJvdXNlbHxqUXVlcnl8d2luZG93fGRvY3VtZW50Jy5zcGxpdCgnfCcpLDAse30pKSIsIndpbmRvdy5tYXRjaE1lZGlhPXdpbmRvdy5tYXRjaE1lZGlhfHxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYyxkPWEuZG9jdW1lbnRFbGVtZW50LGU9ZC5maXJzdEVsZW1lbnRDaGlsZHx8ZC5maXJzdENoaWxkLGY9YS5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSxnPWEuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZy5pZD1cIm1xLXRlc3QtMVwiLGcuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3RvcDotMTAwZW1cIixmLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCIsZi5hcHBlbmRDaGlsZChnKSxmdW5jdGlvbihhKXtyZXR1cm4gZy5pbm5lckhUTUw9JyZzaHk7PHN0eWxlIG1lZGlhPVwiJythKydcIj4gI21xLXRlc3QtMSB7IHdpZHRoOiA0MnB4OyB9PC9zdHlsZT4nLGQuaW5zZXJ0QmVmb3JlKGYsZSksYz00Mj09PWcub2Zmc2V0V2lkdGgsZC5yZW1vdmVDaGlsZChmKSx7bWF0Y2hlczpjLG1lZGlhOmF9fX0oZG9jdW1lbnQpOyhmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB4KCl7dSghMCl9dmFyIGI9e307aWYoYS5yZXNwb25kPWIsYi51cGRhdGU9ZnVuY3Rpb24oKXt9LGIubWVkaWFRdWVyaWVzU3VwcG9ydGVkPWEubWF0Y2hNZWRpYSYmYS5tYXRjaE1lZGlhKFwib25seSBhbGxcIikubWF0Y2hlcywhYi5tZWRpYVF1ZXJpZXNTdXBwb3J0ZWQpe3ZhciBxLHIsdCxjPWEuZG9jdW1lbnQsZD1jLmRvY3VtZW50RWxlbWVudCxlPVtdLGY9W10sZz1bXSxoPXt9LGk9MzAsaj1jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXXx8ZCxrPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJiYXNlXCIpWzBdLGw9ai5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIiksbT1bXSxuPWZ1bmN0aW9uKCl7Zm9yKHZhciBiPTA7bC5sZW5ndGg+YjtiKyspe3ZhciBjPWxbYl0sZD1jLmhyZWYsZT1jLm1lZGlhLGY9Yy5yZWwmJlwic3R5bGVzaGVldFwiPT09Yy5yZWwudG9Mb3dlckNhc2UoKTtkJiZmJiYhaFtkXSYmKGMuc3R5bGVTaGVldCYmYy5zdHlsZVNoZWV0LnJhd0Nzc1RleHQ/KHAoYy5zdHlsZVNoZWV0LnJhd0Nzc1RleHQsZCxlKSxoW2RdPSEwKTooIS9eKFthLXpBLVo6XSpcXC9cXC8pLy50ZXN0KGQpJiYha3x8ZC5yZXBsYWNlKFJlZ0V4cC4kMSxcIlwiKS5zcGxpdChcIi9cIilbMF09PT1hLmxvY2F0aW9uLmhvc3QpJiZtLnB1c2goe2hyZWY6ZCxtZWRpYTplfSkpfW8oKX0sbz1mdW5jdGlvbigpe2lmKG0ubGVuZ3RoKXt2YXIgYj1tLnNoaWZ0KCk7dihiLmhyZWYsZnVuY3Rpb24oYyl7cChjLGIuaHJlZixiLm1lZGlhKSxoW2IuaHJlZl09ITAsYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bygpfSwwKX0pfX0scD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5tYXRjaCgvQG1lZGlhW15cXHtdK1xceyhbXlxce1xcfV0qXFx7W15cXH1cXHtdKlxcfSkrL2dpKSxnPWQmJmQubGVuZ3RofHwwO2I9Yi5zdWJzdHJpbmcoMCxiLmxhc3RJbmRleE9mKFwiL1wiKSk7dmFyIGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvKHVybFxcKClbJ1wiXT8oW15cXC9cXCknXCJdW146XFwpJ1wiXSspWydcIl0/KFxcKSkvZyxcIiQxXCIrYitcIiQyJDNcIil9LGk9IWcmJmM7Yi5sZW5ndGgmJihiKz1cIi9cIiksaSYmKGc9MSk7Zm9yKHZhciBqPTA7Zz5qO2orKyl7dmFyIGssbCxtLG47aT8oaz1jLGYucHVzaChoKGEpKSk6KGs9ZFtqXS5tYXRjaCgvQG1lZGlhICooW15cXHtdKylcXHsoW1xcU1xcc10rPykkLykmJlJlZ0V4cC4kMSxmLnB1c2goUmVnRXhwLiQyJiZoKFJlZ0V4cC4kMikpKSxtPWsuc3BsaXQoXCIsXCIpLG49bS5sZW5ndGg7Zm9yKHZhciBvPTA7bj5vO28rKylsPW1bb10sZS5wdXNoKHttZWRpYTpsLnNwbGl0KFwiKFwiKVswXS5tYXRjaCgvKG9ubHlcXHMrKT8oW2EtekEtWl0rKVxccz8vKSYmUmVnRXhwLiQyfHxcImFsbFwiLHJ1bGVzOmYubGVuZ3RoLTEsaGFzcXVlcnk6bC5pbmRleE9mKFwiKFwiKT4tMSxtaW53OmwubWF0Y2goL1xcKFxccyptaW5cXC13aWR0aFxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpLykmJnBhcnNlRmxvYXQoUmVnRXhwLiQxKSsoUmVnRXhwLiQyfHxcIlwiKSxtYXh3OmwubWF0Y2goL1xcKFxccyptYXhcXC13aWR0aFxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpLykmJnBhcnNlRmxvYXQoUmVnRXhwLiQxKSsoUmVnRXhwLiQyfHxcIlwiKX0pfXUoKX0scz1mdW5jdGlvbigpe3ZhciBhLGI9Yy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9Yy5ib2R5LGY9ITE7cmV0dXJuIGIuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxZW07d2lkdGg6MWVtXCIsZXx8KGU9Zj1jLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpLGUuc3R5bGUuYmFja2dyb3VuZD1cIm5vbmVcIiksZS5hcHBlbmRDaGlsZChiKSxkLmluc2VydEJlZm9yZShlLGQuZmlyc3RDaGlsZCksYT1iLm9mZnNldFdpZHRoLGY/ZC5yZW1vdmVDaGlsZChlKTplLnJlbW92ZUNoaWxkKGIpLGE9dD1wYXJzZUZsb2F0KGEpfSx1PWZ1bmN0aW9uKGIpe3ZhciBoPVwiY2xpZW50V2lkdGhcIixrPWRbaF0sbT1cIkNTUzFDb21wYXRcIj09PWMuY29tcGF0TW9kZSYma3x8Yy5ib2R5W2hdfHxrLG49e30sbz1sW2wubGVuZ3RoLTFdLHA9KG5ldyBEYXRlKS5nZXRUaW1lKCk7aWYoYiYmcSYmaT5wLXEpcmV0dXJuIGEuY2xlYXJUaW1lb3V0KHIpLHI9YS5zZXRUaW1lb3V0KHUsaSksdm9pZCAwO3E9cDtmb3IodmFyIHYgaW4gZSlpZihlLmhhc093blByb3BlcnR5KHYpKXt2YXIgdz1lW3ZdLHg9dy5taW53LHk9dy5tYXh3LHo9bnVsbD09PXgsQT1udWxsPT09eSxCPVwiZW1cIjt4JiYoeD1wYXJzZUZsb2F0KHgpKih4LmluZGV4T2YoQik+LTE/dHx8cygpOjEpKSx5JiYoeT1wYXJzZUZsb2F0KHkpKih5LmluZGV4T2YoQik+LTE/dHx8cygpOjEpKSx3Lmhhc3F1ZXJ5JiYoeiYmQXx8ISh6fHxtPj14KXx8IShBfHx5Pj1tKSl8fChuW3cubWVkaWFdfHwoblt3Lm1lZGlhXT1bXSksblt3Lm1lZGlhXS5wdXNoKGZbdy5ydWxlc10pKX1mb3IodmFyIEMgaW4gZylnLmhhc093blByb3BlcnR5KEMpJiZnW0NdJiZnW0NdLnBhcmVudE5vZGU9PT1qJiZqLnJlbW92ZUNoaWxkKGdbQ10pO2Zvcih2YXIgRCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkoRCkpe3ZhciBFPWMuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLEY9bltEXS5qb2luKFwiXFxuXCIpO0UudHlwZT1cInRleHQvY3NzXCIsRS5tZWRpYT1ELGouaW5zZXJ0QmVmb3JlKEUsby5uZXh0U2libGluZyksRS5zdHlsZVNoZWV0P0Uuc3R5bGVTaGVldC5jc3NUZXh0PUY6RS5hcHBlbmRDaGlsZChjLmNyZWF0ZVRleHROb2RlKEYpKSxnLnB1c2goRSl9fSx2PWZ1bmN0aW9uKGEsYil7dmFyIGM9dygpO2MmJihjLm9wZW4oXCJHRVRcIixhLCEwKSxjLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQhPT1jLnJlYWR5U3RhdGV8fDIwMCE9PWMuc3RhdHVzJiYzMDQhPT1jLnN0YXR1c3x8YihjLnJlc3BvbnNlVGV4dCl9LDQhPT1jLnJlYWR5U3RhdGUmJmMuc2VuZChudWxsKSl9LHc9ZnVuY3Rpb24oKXt2YXIgYj0hMTt0cnl7Yj1uZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChjKXtiPW5ldyBhLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19KCk7bigpLGIudXBkYXRlPW4sYS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHgsITEpOmEuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLHgpfX0pKHRoaXMpOyIsIi8qIENyZWF0ZWQgYnkgQXJ0aXN0ZWVyIHY0LjMuMC42MDc0NSAqL1xyXG4vKmpzaGludCBmb3Jpbjp0cnVlLCBub2FyZzp0cnVlLCBub2VtcHR5OnRydWUsIGVxZXFlcTp0cnVlLCBiaXR3aXNlOnRydWUsIHN0cmljdDp0cnVlLCB1bmRlZjp0cnVlLCBjdXJseTpmYWxzZSwgYnJvd3Nlcjp0cnVlLCBqcXVlcnk6ZmFsc2UgKi9cclxuLypnbG9iYWwgalF1ZXJ5IEJhY2tncm91bmRIZWxwZXIgKi9cclxuXHJcbi8vIGNzcyBoZWxwZXJcclxuYnJvd3NlciA9IGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICB7IHN0cjogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViOiAnQ2hyb21lJywgdmVyOiAnQ2hyb21lJywgbmFtZTogJ2Nocm9tZScgfSxcclxuICAgICAgICB7IHN0cjogbmF2aWdhdG9yLnZlbmRvciwgc3ViOiAnQXBwbGUnLCB2ZXI6ICdWZXJzaW9uJywgbmFtZTogJ3NhZmFyaScgfSxcclxuICAgICAgICB7IHByb3A6IHdpbmRvdy5vcGVyYSwgdmVyOiAnT3BlcmEnLCBuYW1lOiAnb3BlcmEnIH0sXHJcbiAgICAgICAgeyBzdHI6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YjogJ0ZpcmVmb3gnLCB2ZXI6ICdGaXJlZm94JywgbmFtZTogJ2ZpcmVmb3gnIH0sXHJcbiAgICAgICAgeyBzdHI6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YjogJ01TSUUnLCB2ZXI6ICdNU0lFJywgbmFtZTogJ2llJyB9LFxyXG4gICAgICAgIHsgc3RyOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWI6ICdUcmlkZW50LzcuMCcsIHZlcjogJ3J2JywgbmFtZTogJ2llJyB9XHJcbiAgICBdO1xyXG4gICAgdmFyIHYgPSBmdW5jdGlvbiAocywgbikge1xyXG4gICAgICAgIHZhciBpID0gcy5pbmRleE9mKGRhdGFbbl0udmVyKTtcclxuICAgICAgICByZXR1cm4gKGkgIT09IC0xKSA/IHBhcnNlRmxvYXQocy5zdWJzdHJpbmcoaSArIGRhdGFbbl0udmVyLmxlbmd0aCArIDEpKSA6IDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHsgbmFtZTogJ3Vua25vd24nLCB2ZXJzaW9uOiAwIH07XHJcbiAgICB2YXIgaHRtbCA9ICQoJ2h0bWwnKTtcclxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZGF0YS5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgIGlmICghcmVzdWx0W2RhdGFbbl0ubmFtZV0pIHtcclxuICAgICAgICAgICAgcmVzdWx0W2RhdGFbbl0ubmFtZV0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChkYXRhW25dLnN0ciAmJiAoZGF0YVtuXS5zdHIuaW5kZXhPZihkYXRhW25dLnN1YikgIT09IC0xKSkgfHwgZGF0YVtuXS5wcm9wKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gZGF0YVtuXS5uYW1lO1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lm5hbWVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2KG5hdmlnYXRvci51c2VyQWdlbnQsIG4pIHx8IHYobmF2aWdhdG9yLmFwcFZlcnNpb24sIG4pO1xyXG4gICAgICAgICAgICBodG1sLmFkZENsYXNzKHJlc3VsdC5uYW1lICsgJyAnICsgcmVzdWx0Lm5hbWUgKyBwYXJzZUludChyZXN1bHQudmVyc2lvbiwgMTApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59IChqUXVlcnkpO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNpdmVEZXNpZ24gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcImRlc2t0b3BcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgaSwgaiwgaywgbCwgbTtcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gIT09IDkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgc3BsaXRCeVRva2VucyA9IGZ1bmN0aW9uIChzdHIsIHN0YXJ0VG9rZW4sIGVuZFRva2VuLCBsYXN0KSB7XHJcbiAgICAgICAgaWYgKCFsYXN0KSB7XHJcbiAgICAgICAgICAgIGxhc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gc3RyLmluZGV4T2Yoc3RhcnRUb2tlbik7XHJcbiAgICAgICAgaWYgKHN0YXJ0UG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBzdGFydFBvcyArPSBzdGFydFRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGVuZFBvcyA9IGxhc3QgPyBzdHIubGFzdEluZGV4T2YoZW5kVG9rZW4pIDogc3RyLmluZGV4T2YoZW5kVG9rZW4sIHN0YXJ0UG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbmRQb3MgIT09IC0xICYmIGVuZFBvcyA+IHN0YXJ0UG9zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydFBvcywgZW5kUG9zIC0gc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNwbGl0V2l0aEJyYWNrZXRzID0gZnVuY3Rpb24gKHN0ciwgdG9rZW4sIGJyYWNrZXRzKSB7XHJcbiAgICAgICAgLypqc2hpbnQgbm9uc3RhbmRhcmQ6dHJ1ZSAqL1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgdG9rZW4gPSAnLCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYnJhY2tldHMpIHtcclxuICAgICAgICAgICAgYnJhY2tldHMgPSAnKCknO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnJhY2tldCA9IDA7XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gMDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKGJyYWNrZXRzLmxlbmdodCA8IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHBvcyA8IHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gc3RyW3Bvc107XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gYnJhY2tldHNbMF0pIHtcclxuICAgICAgICAgICAgICAgIGJyYWNrZXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2ggPT09IGJyYWNrZXRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBicmFja2V0LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoID09PSB0b2tlbiAmJiBicmFja2V0IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydFBvcywgcG9zIC0gc3RhcnRQb3MpKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zID0gcG9zICsgdG9rZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0UG9zLCBwb3MgLSBzdGFydFBvcykpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBieXRlVG9IZXggPSBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHZhciBoZXggPSBOdW1iZXIoZCkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIHdoaWxlIChoZXgubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBoZXggPSBcIjBcIiArIGhleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhleDtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcclxuICAgICAgICB2YXIgciA9IFtzXTtcclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgcy5pbXBvcnRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHIucHVzaChzLmltcG9ydHNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBzID0gcltqXTtcclxuICAgICAgICAgICAgdmFyIG4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHMucnVsZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSBzLnJ1bGVzW2tdLmNzc1RleHQgfHwgcy5ydWxlc1trXS5zdHlsZS5jc3NUZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0QnlUb2tlbnMoY3NzLCAnLXN2Zy1iYWNrZ3JvdW5kOicsICc7Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gc3BsaXRXaXRoQnJhY2tldHModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsID0gMDsgbCA8IHZhbHVlcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gc3BsaXRCeVRva2Vucyh2YWx1ZXNbbF0sICdsaW5lYXItZ3JhZGllbnQoJywgJyknLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gc3BsaXRXaXRoQnJhY2tldHMoZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heE9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMTsgbSA8IGFyZ3MubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BWYWx1ZXMgPSBzcGxpdFdpdGhCcmFja2V0cygkLnRyaW0oYXJnc1ttXSksICcgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9wVmFsdWVzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9wQ29sb3IgPSAkLnRyaW0oc3RvcFZhbHVlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9wT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9wQ29sb3IgPT0gJ3RyYW5zcGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvclJnYmEgPSBzcGxpdEJ5VG9rZW5zKHN0b3BDb2xvciwgJ3JnYmEoJywgJyknLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BPZmZzZXQgPSAkLnRyaW0oc3RvcFZhbHVlc1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvclJnYmEgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZ2JhID0gY29sb3JSZ2JhLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmdiYS5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3IgPSAnIycgKyBieXRlVG9IZXgocmdiYVswXSkgKyBieXRlVG9IZXgocmdiYVsxXSkgKyBieXRlVG9IZXgocmdiYVsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wT3BhY2l0eSA9IHJnYmFbM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzUHggPSBzdG9wT2Zmc2V0LmluZGV4T2YoJ3B4JykgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNQeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4T2Zmc2V0ID0gTWF0aC5tYXgobWF4T2Zmc2V0LCBwYXJzZUludChzdG9wT2Zmc2V0LCAxMCkgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHMucHVzaCh7IG9mZnNldDogc3RvcE9mZnNldCwgY29sb3I6IHN0b3BDb2xvciwgb3BhY2l0eTogc3RvcE9wYWNpdHksIGlzUHg6IGlzUHggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9wc1hNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0U3RvcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMDsgbSA8IHN0b3BzLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9wc1ttXS5pc1B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wc1ttXS5vZmZzZXQgPSAoKHBhcnNlSW50KHN0b3BzW21dLm9mZnNldCwgMTApIHx8IDApIC8gKG1heE9mZnNldCAvIDEwMCkpICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzWE1MICs9ICc8c3RvcCBvZmZzZXQ9XCInICsgc3RvcHNbbV0ub2Zmc2V0ICsgJ1wiIHN0b3AtY29sb3I9XCInICsgc3RvcHNbbV0uY29sb3IgKyAnXCIgc3RvcC1vcGFjaXR5PVwiJyArIHN0b3BzW21dLm9wYWNpdHkgKyAnXCIvPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID09PSBzdG9wcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0U3RvcCA9IHN0b3BzW21dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZnQgPSAkLnRyaW0oYXJnc1swXSkgPT09ICdsZWZ0JztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gJ3gxPVwiMCVcIiB5MT1cIjAlXCIgJyArIChpc0xlZnQgPyAneDI9XCIxMDAlXCIgeTI9XCIwJVwiJyA6ICd4Mj1cIjAlXCIgeTI9XCIxMDAlXCInKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhZGllbnRMZW5ndGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heE9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRMZW5ndGggPSBtYXhPZmZzZXQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IChpc0xlZnQgPyAnd2lkdGg9XCInICsgZ3JhZGllbnRMZW5ndGggKyAnXCIgaGVpZ2h0PVwiMTAwJVwiJyA6ICd3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCInICsgZ3JhZGllbnRMZW5ndGggKyAnXCInKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RTdG9wICE9PSBudWxsICYmIG1heE9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9ICc8cmVjdCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0xlZnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4PVwiJyArIG1heE9mZnNldCArICdcIiB5PVwiMFwiJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3g9XCIwXCIgeT1cIicgKyBtYXhPZmZzZXQgKyAnXCInKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzdHlsZT1cImZpbGw6JyArIGxhc3RTdG9wLmNvbG9yICsgJztvcGFjaXR5OicgKyBsYXN0U3RvcC5vcGFjaXR5ICsgJztcIi8+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdmdHcmFkaWVudCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPjxsaW5lYXJHcmFkaWVudCBpZD1cImdcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIiAnICsgZGlyZWN0aW9uICsgJz4nICsgc3RvcHNYTUwgKyAnPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PVwiMFwiIHk9XCIwXCIgJyArIHNpemUgKyAnIGZpbGw9XCJ1cmwoI2cpXCIgLz4nICsgbGFzdCArICc8L3N2Zz4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tsXSA9IHZhbHVlc1tsXS5yZXBsYWNlKCdsaW5lYXItZ3JhZGllbnQoJyArIGcgKyAnKScsICd1cmwoZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoc3ZnR3JhZGllbnQpICsgJyknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG4ucHVzaCh7IHM6IHMucnVsZXNba10uc2VsZWN0b3JUZXh0LCB2OiAnYmFja2dyb3VuZDogJyArIHZhbHVlcy5qb2luKFwiLFwiKSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgcy5hZGRSdWxlKG5ba10ucywgbltrXS52KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8vIGllOFxyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDgpIHJldHVybjtcclxuICAgICQoJy5zaGFwZXMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zaWJsaW5ncygnLnNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd6LWluZGV4JywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWU3XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gNykgcmV0dXJuO1xyXG4gICAgdmFyIHRleHRibG9ja1RleHRzID0gJCgnLnRleHRibG9jayBkaXZbY2xhc3MkPVwiLXRleHRcIl0nKTtcclxuICAgIHRleHRibG9ja1RleHRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0YlRleHQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciB2YWxpZ24gPSB0YlRleHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicpID8gdGJUZXh0LmNzcygndmVydGljYWwtYWxpZ24nKSA6ICd0b3AnO1xyXG4gICAgICAgIGlmICh2YWxpZ24gPT09ICdtaWRkbGUnKSB7XHJcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGJUZXh0LndyYXAoJzxkaXYvPicpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICB0YlRleHQuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJy01MCUnLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICdhdXRvJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3JhcHBlci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICd0b3AnOiAnNTAlJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbGlnbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgdGJUZXh0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICdib3R0b20nOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qIFNldCB3bW9kZT10cmFuc3BhcmVudCBmb3IgeW91dHViZSBhbmQgb3RoZXIgdmlkZW8gaG9zdGluZ3MgdG8gc2hvdyBpdCB1bmRlciB0aGUgbWVudXMsIGxpZ2h0Ym94ZXMgZXRjLiAqL1xyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIHZpZGVvID0gW1wieW91dHViZVwiXTtcclxuXHJcbiAgICAkKFwiaWZyYW1lW3NyY11cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlmcmFtZSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHNyYyA9IGlmcmFtZS5hdHRyKFwic3JjXCIpLFxyXG4gICAgICAgICAgICBpc1ZpZGVvID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2aWRlby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3JjLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2aWRlb1tpXS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlzVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNWaWRlbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3JjLmxhc3RJbmRleE9mKFwiP1wiKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgc3JjICs9IFwiJmFtcDt3bW9kZT10cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNyYyArPSBcIj93bW9kZT10cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZnJhbWUuYXR0cihcInNyY1wiLCBzcmMpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICQod2luZG93KS5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHsgbmF2aWdhdG9yUmVzaXplSGFuZGxlcigkKFwiaHRtbFwiKS5oYXNDbGFzcyhcInJlc3BvbnNpdmVcIikpOyB9KTtcclxufSk7XHJcblxyXG52YXIgbmF2aWdhdG9yUmVzaXplSGFuZGxlciA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbikgcmV0dXJuO1xyXG4gICAgICAgICQoXCIuc2xpZGVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gc2xpZGVyLndpZHRoKCk7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSBzbGlkZXIuc2libGluZ3MoXCIuc2xpZGVuYXZpZ2F0b3JcIik7XHJcbiAgICAgICAgICAgIHZhciBuYXZXaWR0aCA9IG5hdi5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgICAgIGlmIChuYXYubGVuZ3RoICYmIG5hdldpZHRoIDwgc2xpZGVyV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxlZnQgb2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IG5hdi5hdHRyKFwiZGF0YS1sZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gKG1hcmdpbiA9IGNvbnRhaW5lcldpZHRoIC0gKG9iamVjdFBvc2l0aW9uICsgb2JqZWN0V2lkdGgpKSA8IDBcclxuICAgICAgICAgICAgICAgIHZhciBtYXJnaW4gPSBzbGlkZXJXaWR0aCAtIHNsaWRlcldpZHRoICogcGFyc2VGbG9hdChsZWZ0KSAvIDEwMCAtIG5hdi5vdXRlcldpZHRoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJnaW4gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2LmNzcyhcIm1hcmdpbi1sZWZ0XCIsIG1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG52YXIgcHJvY2Vzc0VsZW1lbnRNdWx0aXBseUJnID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChzZWxlY3RvciwgaW5mbykge1xyXG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgIWluZm8gfHwgIWluZm8uYmdpbWFnZSB8fCAhaW5mby5iZ3Bvc2l0aW9uIHx8ICFpbmZvLmltYWdlcyB8fCAhaW5mby5wb3NpdGlvbnMpIHJldHVybjtcclxuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHNjcmlwdCA9ICQoJ2hlYWQgc2NyaXB0W3NyYyo9XCJzY3JpcHQuanNcIl0nKTtcclxuICAgICAgICBpZiAoc2NyaXB0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBwYXRoID0gKHNjcmlwdC5hdHRyKCdzcmMnKSB8fCAnJyk7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0bWwgPSAnJztcclxuICAgICAgICB2YXIgZWwgPSAkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYmdpbWFnZXMgPSBpbmZvLmltYWdlcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgdmFyIGJncG9zaXRpb25zID0gaW5mby5wb3NpdGlvbnMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBiZ2ltYWdlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgYmdpbWFnZSA9ICQudHJpbShiZ2ltYWdlc1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChiZ2ltYWdlID09PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIHZhciBpbWdJZHggPSBiZ2ltYWdlLmxhc3RJbmRleE9mKCdpbWFnZXMvJyk7XHJcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBiZ2ltYWdlLnN1YnN0cmluZyhpbWdJZHggKyA3LCBiZ2ltYWdlLmxlbmd0aCAtIDYpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmQoXCI8ZGl2IGNsYXNzPVxcXCJpZThmaXggXCIgKyBjbGFzc05hbWUgKyBcIlxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6XCIgKyBiZ2ltYWdlLnJlcGxhY2UoLyhpbWFnZXNcXC9bXlxcL10rKSQvLCBwYXRoICsgJyQxJykgKyBcIiBcIiArIGJncG9zaXRpb25zW2ldICsgXCIgbm8tcmVwZWF0XFxcIj48L2Rpdj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGluZm8uYmdpbWFnZS5yZXBsYWNlKC8oaW1hZ2VzXFwvW15cXC9dKykkLywgcGF0aCArICckMScpKTtcclxuICAgICAgICBlbC5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24teCcsIFwiNTAlXCIpO1xyXG4gICAgICAgIGVsLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbi15JywgXCI1MCVcIik7XHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG52YXIgcmVzcG9uc2l2ZU5hdmlnYXRvciA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaGVhZGVyT2JqZWN0UmVzaXplciAhPT0gJ3VuZGVmaW5lZCcgJiYgaGVhZGVyT2JqZWN0UmVzaXplci5pc1ByZXZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHNoZWV0ID0gJCgnLnNoZWV0Jyk7XHJcbiAgICAgICAgdmFyIHNoZWV0V2lkdGggPSBzaGVldC5vdXRlcldpZHRoKCk7XHJcblxyXG4gICAgICAgICQoXCIuc2xpZGVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVyV2lkdGggPSBjdXJyZW50U2xpZGVyLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xpZGVyTmF2aWdhdG9yID0gY3VycmVudFNsaWRlci5zaWJsaW5ncyhcIi5zbGlkZW5hdmlnYXRvclwiKTtcclxuICAgICAgICAgICAgaWYgKHNsaWRlck5hdmlnYXRvci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvZmYgPSBzaGVldExlZnRGdW5jKHNoZWV0LCBzbGlkZXJOYXZpZ2F0b3IpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGNXaWR0aCA9IGlzQ29udGVudFNsaWRlcihzbGlkZXJOYXZpZ2F0b3IpID8gY3VycmVudFNsaWRlcldpZHRoIDogc2hlZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdG9yV2lkdGggPSBzbGlkZXJOYXZpZ2F0b3Iub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KHNsaWRlck5hdmlnYXRvci5hdHRyKCdkYXRhLW9mZnNldCcpIHx8IDAsIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZWZ0IG9mZnNldFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyTmF2aWdhdG9yLmNzcygnbWFyZ2luLWxlZnQnLCAnMHB4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBwYXJzZUZsb2F0KHNsaWRlck5hdmlnYXRvci5hdHRyKFwiZGF0YS1sZWZ0XCIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TGVmdCA9IG9mZiArIHVuaVRvUHgobGVmdCwgbmF2aWdhdG9yV2lkdGgsIGNhbGNXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXZpZ2F0b3IuY3NzKCdsZWZ0JywgbmV3TGVmdCArICdweCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXNldCB0b3AgdG8gb3JpZ2luYWwgdmFsdWVcclxuICAgICAgICAgICAgICAgIHNsaWRlck5hdmlnYXRvci5jc3MoXCJ0b3BcIiwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdG9wXHJcbiAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdG9ySGVpZ2h0ID0gc2xpZGVyTmF2aWdhdG9yLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5peSA9IHBhcnNlRmxvYXQoc2xpZGVyTmF2aWdhdG9yLmF0dHIoJ2RhdGEtdG9wJyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVySGVpZ2h0ID0gcGFyc2VJbnQoY3VycmVudFNsaWRlci5jc3MoJ2hlaWdodCcpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VG9wID0gdW5pVG9QeCh1bml5LCBuYXZpZ2F0b3JIZWlnaHQsIHNsaWRlckhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyTmF2aWdhdG9yLmNzcyhcInRvcFwiLCAobmV3VG9wICsgb2Zmc2V0KSArICdweCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNpdmVEZXNpZ24gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAkKHdpbmRvdykuYmluZChcInJlc2l6ZVwiLCByZXNwb25zaXZlTmF2aWdhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAkKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uIHBhZ2VJbml0aWFsaXplKCkge1xyXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzaXplXCIpO1xyXG4gICAgICAgICQod2luZG93KS5vZmYoXCJsb2FkXCIsIHBhZ2VJbml0aWFsaXplKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICQoJ25hdi5uYXYnKS5hZGRDbGFzcyhcImRlc2t0b3AtbmF2XCIpO1xyXG59KTtcclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCd1bC5obWVudT5saTpub3QoOmZpcnN0LWNoaWxkKScpLmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiaG1lbnUtc2VwYXJhdG9yXCI+IDwvc3Bhbj4nKTsgfSk7XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICQoXCJ1bC5obWVudSBhOm5vdChbaHJlZl0pXCIpLmF0dHIoJ2hyZWYnLCAnIycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gNykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBGaXggd2lkdGggb2Ygc3VibWVudSBpdGVtcy5cclxuICAgICogVGhlIHdpZHRoIG9mIHN1Ym1lbnUgaXRlbSBjYWxjdWxhdGVkIGluY29ycmVjdGx5IGluIElFNi03LiBJRTYgaGFzIHdpZGVyIGl0ZW1zLCBJRTcgZGlzcGxheSBpdGVtcyBsaWtlIHN0YWlycy5cclxuICAgICovXHJcbiAgICAkLmVhY2goJChcInVsLmhtZW51IHVsXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1heFN1Yml0ZW1XaWR0aCA9IDA7XHJcbiAgICAgICAgdmFyIHN1Ym1lbnUgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzdWJpdGVtID0gbnVsbDtcclxuICAgICAgICAkLmVhY2goc3VibWVudS5jaGlsZHJlbihcImxpXCIpLmNoaWxkcmVuKFwiYVwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdWJpdGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHN1Yml0ZW1XaWR0aCA9IHN1Yml0ZW0ub3V0ZXJXaWR0aChmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChtYXhTdWJpdGVtV2lkdGggPCBzdWJpdGVtV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG1heFN1Yml0ZW1XaWR0aCA9IHN1Yml0ZW1XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWJpdGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBzdWJpdGVtQm9yZGVyTGVmdCA9IHBhcnNlSW50KHN1Yml0ZW0uY3NzKFwiYm9yZGVyLWxlZnQtd2lkdGhcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgc3ViaXRlbUJvcmRlclJpZ2h0ID0gcGFyc2VJbnQoc3ViaXRlbS5jc3MoXCJib3JkZXItcmlnaHQtd2lkdGhcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgc3ViaXRlbVBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoc3ViaXRlbS5jc3MoXCJwYWRkaW5nLWxlZnRcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgc3ViaXRlbVBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHN1Yml0ZW0uY3NzKFwicGFkZGluZy1yaWdodFwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgIG1heFN1Yml0ZW1XaWR0aCAtPSBzdWJpdGVtQm9yZGVyTGVmdCArIHN1Yml0ZW1Cb3JkZXJSaWdodCArIHN1Yml0ZW1QYWRkaW5nTGVmdCArIHN1Yml0ZW1QYWRkaW5nUmlnaHQ7XHJcbiAgICAgICAgICAgIHN1Ym1lbnUuY2hpbGRyZW4oXCJsaVwiKS5jaGlsZHJlbihcImFcIikuY3NzKFwid2lkdGhcIiwgbWF4U3ViaXRlbVdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIHNldERpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNldEhNZW51T3BlbkRpcmVjdGlvbih7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogXCJkaXYuc2hlZXRcIixcclxuICAgICAgICAgICAgZGVmYXVsdENvbnRhaW5lcjogXCIjbWFpblwiLFxyXG4gICAgICAgICAgICBtZW51Q2xhc3M6IFwiaG1lbnVcIixcclxuICAgICAgICAgICAgbGVmdFRvUmlnaHRDbGFzczogXCJobWVudS1sZWZ0LXRvLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIHJpZ2h0VG9MZWZ0Q2xhc3M6IFwiaG1lbnUtcmlnaHQtdG8tbGVmdFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHR5cGVvZiByZXNwb25zaXZlRGVzaWduICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNwb25zaXZlJywgc2V0RGlyZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RGlyZWN0aW9uKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIHNldEhNZW51T3BlbkRpcmVjdGlvbiA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gKGZ1bmN0aW9uKG1lbnVJbmZvKSB7XHJcbiAgICAgICAgdmFyIGRlZmF1bHRDb250YWluZXIgPSAkKG1lbnVJbmZvLmRlZmF1bHRDb250YWluZXIpO1xyXG4gICAgICAgIGRlZmF1bHRDb250YWluZXIgPSBkZWZhdWx0Q29udGFpbmVyLmxlbmd0aCA+IDAgPyBkZWZhdWx0Q29udGFpbmVyID0gJChkZWZhdWx0Q29udGFpbmVyWzBdKSA6IG51bGw7XHJcblxyXG4gICAgICAgICQoXCJ1bC5cIiArIG1lbnVJbmZvLm1lbnVDbGFzcyArIFwiPmxpPnVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VibWVudSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3VibWVudVdpZHRoID0gc3VibWVudS5vdXRlcldpZHRoKGZhbHNlKTtcclxuICAgICAgICAgICAgdmFyIHN1Ym1lbnVMZWZ0ID0gc3VibWVudS5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgdmFyIG1haW5Db250YWluZXIgPSBzdWJtZW51LnBhcmVudHMobWVudUluZm8uY29udGFpbmVyKTtcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lciA9IG1haW5Db250YWluZXIubGVuZ3RoID4gMCA/IG1haW5Db250YWluZXIgPSAkKG1haW5Db250YWluZXJbMF0pIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBtYWluQ29udGFpbmVyIHx8IGRlZmF1bHRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJMZWZ0ID0gY29udGFpbmVyLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN1Ym1lbnVMZWZ0ICsgc3VibWVudVdpZHRoID49IGNvbnRhaW5lckxlZnQgKyBjb250YWluZXJXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHJpZ2h0IHRvIGxlZnQgKi9cclxuICAgICAgICAgICAgICAgICAgICBzdWJtZW51LmFkZENsYXNzKG1lbnVJbmZvLnJpZ2h0VG9MZWZ0Q2xhc3MpLmZpbmQoXCJ1bFwiKS5hZGRDbGFzcyhtZW51SW5mby5yaWdodFRvTGVmdENsYXNzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VibWVudUxlZnQgPD0gY29udGFpbmVyTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGxlZnQgdG8gcmlnaHQgKi9cclxuICAgICAgICAgICAgICAgICAgICBzdWJtZW51LmFkZENsYXNzKG1lbnVJbmZvLmxlZnRUb1JpZ2h0Q2xhc3MpLmZpbmQoXCJ1bFwiKS5hZGRDbGFzcyhtZW51SW5mby5sZWZ0VG9SaWdodENsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxudmFyIG1lbnVFeHRlbmRlZENyZWF0ZSA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaGVldCA9ICQoXCIuc2hlZXRcIik7XHJcbiAgICAgICAgdmFyIHNoZWV0TGVmdCA9IHNoZWV0Lm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdmFyIHNoZWV0V2lkdGggPSBzaGVldC53aWR0aCgpO1xyXG5cclxuICAgICAgICAkKFwiLmhtZW51PmxpXCIpLmVhY2goZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICB2YXIgaXRtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHN1Ym0gPSBpdG0uY2hpbGRyZW4oXCJ1bFwiKTtcclxuICAgICAgICAgICAgaWYgKHN1Ym0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgICAgIGl0bS5yZW1vdmVDbGFzcyhcImV4dCBleHQtciBleHQtbFwiKTtcclxuICAgICAgICAgICAgaXRtLmNzcyhcIndpZHRoXCIsIFwiXCIpLmZpbmQoXCIuZXh0LW9mZiwuZXh0LW0sLmV4dC1sLC5leHQtclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgc3VibS5jaGlsZHJlbihcImxpXCIpLmNoaWxkcmVuKFwiYVwiKS5jc3MoXCJ3aWR0aFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBsdyA9IDAsIHJ3ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJtLmF0dHIoXCJkYXRhLWV4dC1sXCIpICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBzdWJtLmF0dHIoXCJkYXRhLWV4dC1yXCIpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsdyA9IHBhcnNlSW50KHN1Ym0uYXR0cihcImRhdGEtZXh0LWxcIiksIDEwKSArIDA7XHJcbiAgICAgICAgICAgICAgICBydyA9IHBhcnNlSW50KHN1Ym0uYXR0cihcImRhdGEtZXh0LXJcIiksIDEwKSArIDA7XHJcbiAgICAgICAgICAgICAgICBpdG0uYWRkQ2xhc3MoXCJleHQtclwiKS5hZGRDbGFzcyhcImV4dC1sXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGx0ciA9ICFzdWJtLmhhc0NsYXNzKFwiaG1lbnUtcmlnaHQtdG8tbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGl0bS5hZGRDbGFzcyhsdHIgPyBcImV4dC1yXCIgOiBcImV4dC1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2hhZG93ID0gMDtcclxuICAgICAgICAgICAgaWYgKHN1Ym0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxuayA9IGl0bS5jaGlsZHJlbihcImFcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG5rV2lkdGggPSBsbmsub3V0ZXJXaWR0aChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpdG0uY3NzKFwid2lkdGhcIiwgTWF0aC5yb3VuZChwYXJzZUZsb2F0KGxua1dpZHRoLCAxMCkpICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51YmFyTWFyZ2luID0gNCAqIDI7IC8vIG1hcmdpbiAqIDIgc2lkZXNcclxuICAgICAgICAgICAgICAgIHZhciBtZW51YmFyQm9yZGVyID0gMSAqIDI7IC8vIGJvcmRlciAxIHNpZGVcclxuICAgICAgICAgICAgICAgIHZhciBzdWJtV2lkdGggPSBzdWJtLndpZHRoKCkgKyBzaGFkb3cgKyBtZW51YmFyTWFyZ2luICsgbWVudWJhckJvcmRlcjtcclxuICAgICAgICAgICAgICAgIHZhciB3ID0gc3VibVdpZHRoIC0gbG5rV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz1cXFwiZXh0LW9mZlxcXCI+PC9kaXY+XCIpLmluc2VydEJlZm9yZShsbmspO1xyXG4gICAgICAgICAgICAgICAgJChcIjxkaXYgY2xhc3M9XFxcImV4dC1tXFxcIj48L2Rpdj5cIikuaW5zZXJ0QmVmb3JlKGxuayk7XHJcbiAgICAgICAgICAgICAgICBpZiAodyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VibUEgPSBzdWJtLmNoaWxkcmVuKFwibGlcIikuY2hpbGRyZW4oXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwTCA9IHBhcnNlSW50KHN1Ym1BLmNzcyhcInBhZGRpbmctbGVmdFwiKS5yZXBsYWNlKFwicHhcIiwgXCJcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwUiA9IHBhcnNlSW50KHN1Ym1BLmNzcyhcInBhZGRpbmctcmlnaHRcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYkwgPSBwYXJzZUludChzdWJtQS5jc3MoXCJib3JkZXItbGVmdFwiKS5yZXBsYWNlKFwicHhcIiwgXCJcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiUiA9IHBhcnNlSW50KHN1Ym1BLmNzcyhcImJvcmRlci1yaWdodFwiKS5yZXBsYWNlKFwicHhcIiwgXCJcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym0uY2hpbGRyZW4oXCJsaVwiKS5jaGlsZHJlbihcImFcIikuY3NzKFwid2lkdGhcIiwgKGxua1dpZHRoIC0gcEwgLSBwUiAtIGJMIC0gYlIpICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtV2lkdGggPSBzdWJtLndpZHRoKCkgKyBzaGFkb3cgKyBtZW51YmFyTWFyZ2luICsgbWVudWJhckJvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3ID0gc3VibVdpZHRoIC0gbG5rV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz1cXFwiZXh0LWxcXFwiIHN0eWxlPVxcXCJ3aWR0aDogXCIgKyAobHcgPiAwID8gbHcgOiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQodywgMTApKSkgKyBcInB4O1xcXCI+PC9kaXY+XCIpLmluc2VydEJlZm9yZShsbmspO1xyXG4gICAgICAgICAgICAgICAgJChcIjxkaXYgY2xhc3M9XFxcImV4dC1yXFxcIiBzdHlsZT1cXFwid2lkdGg6IFwiICsgKHJ3ID4gMCA/IHJ3IDogTWF0aC5yb3VuZChwYXJzZUZsb2F0KHcsIDEwKSkpICsgXCJweDtcXFwiPjwvZGl2PlwiKS5pbnNlcnRCZWZvcmUobG5rKTtcclxuICAgICAgICAgICAgICAgIGl0bS5hZGRDbGFzcyhcImV4dFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxualF1ZXJ5KHdpbmRvdykubG9hZChtZW51RXh0ZW5kZWRDcmVhdGUpO1xyXG5cclxuXHJcbi8qIEljb25zIGluIEhlYWRlciBzaG91bGQgaGF2ZSBkaXNwbGF5IGJsb2NrLlxyXG4gKiBPdGhlcndpc2UsIGluIGNhc2Ugb2YgaW5saW5lLWJsb2NrIHRoZXJlJ3MgYSBzcGFjZSBnYXAgaW4gc29tZSBicm93c2VycyAoT3BlcmEgMTIuMTYpIGFuZCBpY29uIGlzIGN1dHRlZC5cclxuICovXHJcbmlmIChicm93c2VyLm9wZXJhKSB7XHJcbiAgICBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICAkKFwiLmhlYWRlciBhW2NsYXNzJD0ndGFnLWljb24nXVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgaWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci52ZXJzaW9uIDwgOCkge1xyXG4gICAgICAgICQod2luZG93KS5iaW5kKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSAkKCdkaXYuY29udGVudCcpO1xyXG4gICAgICAgICAgICB2YXIgcyA9IGMucGFyZW50KCkuY2hpbGRyZW4oJy5sYXlvdXQtY2VsbDpub3QoLmNvbnRlbnQpJyk7XHJcbiAgICAgICAgICAgIHZhciB3ID0gMDtcclxuICAgICAgICAgICAgYy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHMuZWFjaChmdW5jdGlvbigpIHsgdyArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7IH0pO1xyXG4gICAgICAgICAgICBjLncgPSBjLnBhcmVudCgpLndpZHRoKCk7IGMuY3NzKCd3aWR0aCcsIGMudyAtIHcgKyAncHgnKTtcclxuICAgICAgICAgICAgYy5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmICghJCgnaHRtbCcpLmhhc0NsYXNzKCdpZTcnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJ3VsLnZtZW51IGxpOm5vdCg6Zmlyc3QtY2hpbGQpLHVsLnZtZW51IGxpIGxpIGxpOmZpcnN0LWNoaWxkLHVsLnZtZW51PmxpPnVsJykuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidm1lbnUtc2VwYXJhdG9yXCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJ2bWVudS1zZXBhcmF0b3ItYmdcIj4gPC9kaXY+Jyk7IH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxudmFyIGFydEJ1dHRvblNldHVwID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAkLmVhY2goJChcImEuXCIgKyBjbGFzc05hbWUgKyBcIiwgYnV0dG9uLlwiICsgY2xhc3NOYW1lICsgXCIsIGlucHV0LlwiICsgY2xhc3NOYW1lKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICB2YXIgYiA9ICQodmFsKTtcclxuICAgICAgICAgICAgaWYgKCFiLmhhc0NsYXNzKCdidXR0b24nKSkge1xyXG4gICAgICAgICAgICAgICAgYi5hZGRDbGFzcygnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgICAgICAgIGIudmFsKGIudmFsKCkucmVwbGFjZSgvXlxccyovLCAnJykpLmNzcygnem9vbScsICcxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYi5tb3VzZWRvd24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGIubW91c2V1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBiLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGIubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBiLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGFydEJ1dHRvblNldHVwKFwiYnV0dG9uXCIpO1xyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbigkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAkKCdpbnB1dC5zZWFyY2gtYnV0dG9uLCBmb3JtLnNlYXJjaCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYXR0cigndmFsdWUnLCAnJyk7XHJcbn0pO1xyXG5cclxudmFyIENvbnRyb2wgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKGxhYmVsLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgY2hBdHRyID0gbGFiZWwuZmluZCgnaW5wdXRbdHlwZT1cIicgK3R5cGUgKyAnXCJdJykuYXR0cignY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBpZiAoY2hBdHRyID09PSAnY2hlY2tlZCcpIHtcclxuICAgICAgICAgICAgICBsYWJlbC5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbC5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcmVkJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGFiZWwubW91c2VvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdob3ZlcmVkJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGFiZWwubW91c2Vkb3duKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgIGlmIChldmVudC53aGljaCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdob3ZlcmVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYWJlbC5tb3VzZXVwKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgIGlmIChldmVudC53aGljaCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMpO1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmFkZENsYXNzKCdob3ZlcmVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgICQoJy5wYWdlcicpLmNvbnRlbnRzKCkuZmlsdGVyKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IHRoaXMuVEVYVF9OT0RFO1xyXG4gICAgICAgIH1cclxuICAgICkucmVtb3ZlKCk7XHJcbn0pO1xyXG52YXIgZml4UnNzSWNvbkxpbmVIZWlnaHQgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAkKFwiLlwiICsgY2xhc3NOYW1lKS5jc3MoXCJsaW5lLWhlaWdodFwiLCAkKFwiLlwiICsgY2xhc3NOYW1lKS5oZWlnaHQoKSArIFwicHhcIik7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciByc3NJY29ucyA9ICQoXCIucnNzLXRhZy1pY29uXCIpO1xyXG4gICAgaWYgKHJzc0ljb25zLmxlbmd0aCl7XHJcbiAgICAgICAgZml4UnNzSWNvbkxpbmVIZWlnaHQoXCJyc3MtdGFnLWljb25cIik7XHJcbiAgICAgICAgaWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci52ZXJzaW9uIDwgOSkge1xyXG4gICAgICAgICAgICByc3NJY29ucy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkLnRyaW0oJCh0aGlzKS5odG1sKCkpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJ2ZXJ0aWNhbC1hbGlnblwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxudmFyIFRoZW1lTGlnaHRib3ggPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWFnZXMgPSAkKFwiLmxpZ2h0Ym94XCIpO1xyXG4gICAgICAgIHZhciBjdXJyZW50O1xyXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChjdHJsKSB7XHJcbiAgICAgICAgICAgICQoXCIubGlnaHRib3hcIikubW91c2V1cCh7IF9jdHJsOiBjdHJsIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGUuZGF0YS5fY3RybCA9PT0gdHJ1ZSAmJiAhZS5jdHJsS2V5KSB8fCAoZS53aGljaCAmJiBlLndoaWNoICE9PSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZXMgPSAkKFwiLmxpZ2h0Ym94XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBpbWFnZXMuaW5kZXgodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltZ0NvbnRhaW5lciA9ICQoJy5saWdodGJveC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nQ29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lciA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC13cmFwcGVyXCI+JykuY3NzKCdsaW5lLWhlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSArIFwicHhcIilcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJChcImJvZHlcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VCdG4gPSAkKCc8ZGl2IGNsYXNzPVwiY2xvc2VcIj48ZGl2IGNsYXNzPVwiY3dcIj4gPC9kaXY+PGRpdiBjbGFzcz1cImNjd1wiPiA8L2Rpdj48ZGl2IGNsYXNzPVwiY2xvc2UtYWx0XCI+JiMxMDAwNzs8L2Rpdj48L2Rpdj4nKVxyXG4gICAgICAgICAgICAgICAgLmNsaWNrKGNsb3NlKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hcHBlbmRUbyhpbWdDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBcnJvd3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtb3ZlKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaG93RXJyb3IoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudCA9IGluZGV4O1xyXG5cclxuICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5saWdodGJveC1pbWFnZTpub3QoLmFjdGl2ZSlcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gJChcIi5saWdodGJveC13cmFwcGVyIC5hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKCc8aW1nIGNsYXNzPVwibGlnaHRib3gtaW1hZ2VcIiBhbHQ9XCJcIiBzcmM9XCInICsgZ2V0RnVsbEltZ1NyYygkKGltYWdlc1tjdXJyZW50XSkuYXR0cihcInNyY1wiKSkgKyAnXCIgLz4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmUoY3VycmVudCArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlLmFmdGVyKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikuYXBwZW5kKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNob3dBcnJvd3MoKTtcclxuICAgICAgICAgICAgc2hvd0xvYWRlcih0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGJpbmRNb3VzZSgkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikuYWRkKHRhcmdldCkpO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0LmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWRlcihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5lcnJvcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hdHRyKFwic3JjXCIsICQoaW1hZ2VzW2N1cnJlbnRdKS5hdHRyKFwic3JjXCIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93QXJyb3dzKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5saWdodGJveC13cmFwcGVyIC5hcnJvd1wiKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlclwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cImFycm93IGxlZnRcIj48ZGl2IGNsYXNzPVwiYXJyb3ctdCBjY3dcIj4gPC9kaXY+PGRpdiBjbGFzcz1cImFycm93LWIgY3dcIj4gPC9kaXY+PGRpdiBjbGFzcz1cImFycm93LWxlZnQtYWx0XCI+JiM4NTkyOzwvZGl2PjwvZGl2PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJ0b3BcIiwgJCh3aW5kb3cpLmhlaWdodCgpIC8gMiAtIDQwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlKGN1cnJlbnQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJhcnJvdyByaWdodFwiPjxkaXYgY2xhc3M9XCJhcnJvdy10IGN3XCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJhcnJvdy1iIGNjd1wiPiA8L2Rpdj48ZGl2IGNsYXNzPVwiYXJyb3ctcmlnaHQtYWx0XCI+JiM4NTk0OzwvZGl2PjwvZGl2PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJ0b3BcIiwgJCh3aW5kb3cpLmhlaWdodCgpIC8gMiAtIDQwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlKGN1cnJlbnQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmFycm93LmxlZnRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAuYXJyb3cubGVmdFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAuYXJyb3cucmlnaHRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAuYXJyb3cucmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yKGVuYWJsZSkge1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikuYXBwZW5kKCQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1lcnJvclwiPlRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgbG9hZGVkLjxici8+UGxlYXNlIHRyeSBhZ2FpbiBsYXRlci48L2Rpdj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsgXCJ0b3BcIjogJCh3aW5kb3cpLmhlaWdodCgpIC8gMiAtIDYwLCBcImxlZnRcIjogJCh3aW5kb3cpLndpZHRoKCkgLyAyIC0gMTcwIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAubGlnaHRib3gtZXJyb3JcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dMb2FkZXIoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmxvYWRpbmdcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPiA8L2Rpdj4nKS5jc3MoeyBcInRvcFwiOiAkKHdpbmRvdykuaGVpZ2h0KCkgLyAyIC0gMTYsIFwibGVmdFwiOiAkKHdpbmRvdykud2lkdGgoKSAvIDIgLSAxNiB9KS5hcHBlbmRUbygkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlclwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBiaW5kTW91c2UoaW1nKSB7XHJcbiAgICAgICAgICAgIGltZy5iaW5kKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmdFdmVudCA9IHdpbmRvdy5ldmVudCB8fCBlLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSAob3JnRXZlbnQud2hlZWxEZWx0YSA/IG9yZ0V2ZW50LndoZWVsRGVsdGEgOiBvcmdFdmVudC5kZXRhaWwgKiAtMSkgPiAwID8gMSA6IC0xO1xyXG4gICAgICAgICAgICAgICAgbW92ZShjdXJyZW50ICsgZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KS5tb3VzZWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIG9uIG1pZGRsZSBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRGdWxsSW1nU3JjKHNyYykge1xyXG4gICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBzcmMuc3Vic3RyaW5nKDAsIHNyYy5sYXN0SW5kZXhPZignLicpKTtcclxuICAgICAgICAgICAgdmFyIGV4dCA9IHNyYy5zdWJzdHJpbmcoc3JjLmxhc3RJbmRleE9mKCcuJykpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsZU5hbWUgKyBcIi1sYXJnZVwiICsgZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBuZXcgVGhlbWVMaWdodGJveCgpLmluaXQoKTtcclxufSk7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIC8vIHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbkVuZCAmJiBicm93c2VyIHByZWZpeFxyXG4gICAgJC5zdXBwb3J0LnRoZW1lVHJhbnNpdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRoaXNCb2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgIHRoaXNTdHlsZSA9IHRoaXNCb2R5LnN0eWxlLFxyXG4gICAgICAgICAgICBzdXBwb3J0ID0gdGhpc1N0eWxlLnRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpc1N0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpc1N0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpc1N0eWxlLk1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzU3R5bGUuT1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gc3VwcG9ydCAmJiB7XHJcbiAgICAgICAgICAgIGV2ZW50OiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kIG9UcmFuc2l0aW9uRW5kXCI7XHJcbiAgICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAgIHByZWZpeDogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhOiBcIi1vLVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmVmb3g6IFwiLW1vei1cIixcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWU6IFwiLXdlYmtpdC1cIixcclxuICAgICAgICAgICAgICAgICAgICBzYWZhcmk6IFwiLXdlYmtpdC1cIixcclxuICAgICAgICAgICAgICAgICAgICBpZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVticm93c2VyLm5hbWVdIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICB9KSgpXHJcbiAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgd2luZG93LkJhY2tncm91bmRIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNsaWRlcyA9IFtdO1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBcIm5leHRcIjtcclxuICAgICAgICB2YXIgbW90aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gMDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcclxuICAgICAgICB2YXIgbXVsdGlwbGllciA9IDE7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSAwO1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEhlaWdodCA9IDA7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChtb3Rpb25UeXBlLCBkaXIsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcjtcclxuICAgICAgICAgICAgbW90aW9uID0gbW90aW9uVHlwZTtcclxuICAgICAgICAgICAgc2xpZGVzID0gW107XHJcbiAgICAgICAgICAgIHdpZHRoID0gMDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgbXVsdGlwbGllciA9IDE7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsV2lkdGggPSAwO1xyXG4gICAgICAgICAgICBvcmlnaW5hbEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc1NsaWRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG1vZGlmeSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoZWxlbWVudCwgbnVsbCk7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBiZ1Bvc2l0aW9uID0gZWxlbWVudC5jc3MoXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25zID0gYmdQb3NpdGlvbi5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICQuZWFjaChwb3NpdGlvbnMsIGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkLnRyaW0odGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBwb3NpdGlvbi5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgemVyb1ZhbHVlID0gYnJvd3Nlci5pZSAmJiBicm93c2VyLnZlcnNpb24gPj0gMTAgPyAwLjEgOiAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHBvaW50WzBdLmluZGV4T2YoJyUnKSA9PT0gLTEgPyBwYXJzZUZsb2F0KHBvaW50WzBdLCAxMCkgOiB6ZXJvVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwb2ludFsxXS5pbmRleE9mKCclJykgPT09IC0xID8gcGFyc2VGbG9hdChwb2ludFsxXSwgMTApIDogemVyb1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5wdXNoKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnB1c2goeyB4OiB6ZXJvVmFsdWUsIHk6IHplcm9WYWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcImltYWdlc1wiOiBlbGVtZW50LmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiksXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6IGVsZW1lbnQuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIpLFxyXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvbnNcIjogcG9zXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vZGlmeSlcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplID0gZnVuY3Rpb24gKGVsZW1lbnQsIGluaXRpYWxTaXplKSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5vdXRlcldpZHRoKGZhbHNlKTtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFNpemUgJiYgcGFyc2VJbnQoaW5pdGlhbFNpemUud2lkdGgsIDEwKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxXaWR0aCA9IHBhcnNlSW50KGluaXRpYWxTaXplLndpZHRoLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEhlaWdodCA9IHBhcnNlSW50KGluaXRpYWxTaXplLmhlaWdodCwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdGlvbiA9PT0gXCJmYWRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZWxlbWVudC5jaGlsZHJlbigpLCBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtcG9zaXRpb25cIiwgZ2V0Q3NzUG9zaXRpb25zKHNsaWRlc1tpXS5wb3NpdGlvbnMsIHsgeDogMCwgeTogMCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldEJhY2tncm91bmQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXRlbXMpIHtcclxuICAgICAgICAgICAgdmFyIGJnID0gW107XHJcbiAgICAgICAgICAgIHZhciBzaXplcyA9IFtdO1xyXG4gICAgICAgICAgICAkLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpLCBvKSB7XHJcbiAgICAgICAgICAgICAgICBiZy5wdXNoKG8uaW1hZ2VzKTtcclxuICAgICAgICAgICAgICAgIHNpemVzLnB1c2goby5zaXplcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogYmcuam9pbihcIiwgXCIpLFxyXG4gICAgICAgICAgICAgICAgLy9cImJhY2tncm91bmQtc2l6ZVwiOiBzaXplcy5qb2luKFwiLCBcIiksXHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6IFwibm8tcmVwZWF0XCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBpdGVtcykge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gW107XHJcbiAgICAgICAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24gKGksIG8pIHtcclxuICAgICAgICAgICAgICAgIHBvcy5wdXNoKG8ucG9zaXRpb25zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOiBwb3Muam9pbihcIiwgXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzW2luZGV4XSB8fCBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubmV4dCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dDtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgICAgICAgIG5leHQgPSAoaW5kZXggKyAxKSAlIHNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gaW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHNsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNbbmV4dF07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGZ1bmN0aW9uIChwcmV2LCBuZXh0LCBtb3ZlKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2SXRlbSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgICAgICB2YXIgbmV4dEl0ZW0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICAgICAgdmFyIGlzRGlyZWN0aW9uTmV4dCA9IGRpcmVjdGlvbiA9PT0gXCJuZXh0XCI7XHJcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IC0ob3JpZ2luYWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgdmFyIGhvcml6b250YWxPZmZzZXQgPSAtKG9yaWdpbmFsV2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICBpZiAobW90aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgICAgICAgICAgcHJldkl0ZW0ueSA9IG5leHRJdGVtLnkgPSAtKG9yaWdpbmFsSGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICBwcmV2SXRlbS54ID0gaG9yaXpvbnRhbE9mZnNldDtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtLnggPSAoaXNEaXJlY3Rpb25OZXh0ID8gb3JpZ2luYWxXaWR0aCA6IC1vcmlnaW5hbFdpZHRoKSArIGhvcml6b250YWxPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLnggKz0gaXNEaXJlY3Rpb25OZXh0ID8gLW9yaWdpbmFsV2lkdGggOiBvcmlnaW5hbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLnggKz0gaXNEaXJlY3Rpb25OZXh0ID8gLW9yaWdpbmFsV2lkdGggOiBvcmlnaW5hbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2SXRlbS54ID0gbmV4dEl0ZW0ueCA9IGhvcml6b250YWxPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBwcmV2SXRlbS55ID0gdmVydGljYWxPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS55ID0gKGlzRGlyZWN0aW9uTmV4dCA/IG9yaWdpbmFsSGVpZ2h0IDogLW9yaWdpbmFsSGVpZ2h0KSArIHZlcnRpY2FsT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2SXRlbS55ICs9IGlzRGlyZWN0aW9uTmV4dCA/IC1vcmlnaW5hbEhlaWdodCA6IG9yaWdpbmFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLnkgKz0gaXNEaXJlY3Rpb25OZXh0ID8gLW9yaWdpbmFsSGVpZ2h0IDogb3JpZ2luYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoISFwcmV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IGltYWdlczogcHJldi5pbWFnZXMsIHBvc2l0aW9uczogZ2V0Q3NzUG9zaXRpb25zKHByZXYucG9zaXRpb25zLCBwcmV2SXRlbSksIHNpemVzOiBwcmV2LnNpemVzIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIW5leHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgaW1hZ2VzOiBuZXh0LmltYWdlcywgcG9zaXRpb25zOiBnZXRDc3NQb3NpdGlvbnMobmV4dC5wb3NpdGlvbnMsIG5leHRJdGVtKSwgc2l6ZXM6IG5leHQuc2l6ZXMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChjb250YWluZXIsIG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jc3MoJC5zdXBwb3J0LnRoZW1lVHJhbnNpdGlvbi5wcmVmaXggKyBcInRyYW5zaXRpb25cIiwgb24gPyBcImJhY2tncm91bmQtcG9zaXRpb24gXCIgKyB0cmFuc2l0aW9uRHVyYXRpb24gKyBcIiBlYXNlLWluLW91dFwiIDogXCJcIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q3NzUG9zaXRpb25zKHBvc2l0aW9ucywgb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvZmZzZXQueCA9IG9mZnNldC54IHx8IDA7XHJcbiAgICAgICAgICAgIG9mZnNldC55ID0gb2Zmc2V0LnkgfHwgMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKChwb3NpdGlvbnNbaV0ueCAqIDEgKyBvZmZzZXQueCkgKyBcInB4IFwiICsgKHBvc2l0aW9uc1tpXS55ICogMSArIG9mZnNldC55KSArIFwicHhcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIFRoZW1lU2xpZGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNldHRpbmdzKSB7XHJcblxyXG4gICAgICAgIHZhciBpbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGVsZW1lbnQuZmluZChcIi5hY3RpdmVcIikucGFyZW50KCkuY2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBydW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwge1xyXG4gICAgICAgICAgICBcImFuaW1hdGlvblwiOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJuZXh0XCIsXHJcbiAgICAgICAgICAgIFwic3BlZWRcIjogNjAwLFxyXG4gICAgICAgICAgICBcInBhdXNlXCI6IDI1MDAsXHJcbiAgICAgICAgICAgIFwiYXV0b1wiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInJlcGVhdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIm5hdmlnYXRvclwiOiBudWxsLFxyXG4gICAgICAgICAgICBcImNsaWNrZXZlbnRzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiaG92ZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJoZWxwZXJcIjogbnVsbFxyXG4gICAgICAgIH0sIHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgbmV4dCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSXRlbSA9IGVsZW1lbnQuZmluZChcIi5hY3RpdmVcIiksXHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbSA9IG5leHQgfHwgYWN0aXZlSXRlbVtkaXJlY3Rpb25dKCksXHJcbiAgICAgICAgICAgICAgICBpbm5lckRpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uID09PSBcIm5leHRcIiA/IFwiZm9yd2FyZFwiIDogXCJiYWNrXCIsXHJcbiAgICAgICAgICAgICAgICByZXNldCA9IGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgPyBcImZpcnN0XCIgOiBcImxhc3RcIixcclxuICAgICAgICAgICAgICAgIG1vdmluZyA9IGludGVydmFsLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyID0gdGhpcywgdG1wO1xyXG5cclxuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb3ZpbmcpIHsgdGhpcy5zdG9wKHRydWUpOyB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5leHRJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0gPSBlbGVtZW50LmZpbmQoXCIuc2xpZGUtaXRlbVwiKVtyZXNldF0oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5yZXBlYXQpIHsgbGFzdCA9IHRydWU7IGFjdGl2ZSA9IGZhbHNlOyByZXR1cm47IH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQuc3VwcG9ydC50aGVtZVRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRtcCA9IG5leHRJdGVtLmdldCgwKS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbS5hZGRDbGFzcyhpbm5lckRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5hZGRDbGFzcyhpbm5lckRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50cmlnZ2VyKFwiYmVmb3JlU2xpZGVcIiwgY2hpbGRyZW4ubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9uZSgkLnN1cHBvcnQudGhlbWVUcmFuc2l0aW9uLmV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEl0ZW0ucmVtb3ZlQ2xhc3Moc2xpZGVyLnNldHRpbmdzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGlubmVyRGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoaW5uZXJEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRyaWdnZXIoXCJhZnRlclNsaWRlXCIsIGNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudHJpZ2dlcihcImJlZm9yZVNsaWRlXCIsIGNoaWxkcmVuLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50cmlnZ2VyKFwiYWZ0ZXJTbGlkZVwiLCBjaGlsZHJlbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKG5leHRJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb3ZpbmcpIHsgdGhpcy5zdGFydCgpOyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGlsZHJlbi5pbmRleChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICQodGhpcy5zZXR0aW5ncy5uYXZpZ2F0b3IpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZXEoaW5kZXgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudG8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBlbGVtZW50LmZpbmQoXCIuYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBhY3RpdmVJdGVtLnBhcmVudCgpLmNoaWxkcmVuKCksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGNoaWxkcmVuLmluZGV4KGFjdGl2ZUl0ZW0pLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IChjaGlsZHJlbi5sZW5ndGggLSAxKSB8fCBpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub25lKFwiYWZ0ZXJTbGlkZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLnRvKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShpbmRleCA+IGFjdGl2ZUluZGV4ID8gXCJuZXh0XCIgOiBcInByZXZcIiwgJChjaGlsZHJlbltpbmRleF0pKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdCkgeyB0aGlzLnN0b3AoKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoXCJuZXh0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3QpIHsgdGhpcy5zdG9wKCk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKFwicHJldlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuICAgICAgICAgICAgaWYgKCEhZm9yY2UpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoJC5wcm94eSh0aGlzLm5leHQsIHRoaXMpLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgkLnByb3h5KHRoaXMubmV4dCwgdGhpcyksIHRoaXMuc2V0dGluZ3MucGF1c2UpO1xyXG4gICAgICAgICAgICBydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAocGF1c2UpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGludGVydmFsID0gbnVsbDtcclxuICAgICAgICAgICAgcnVubmluZyA9ICEhcGF1c2U7XHJcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlKGNoaWxkcmVuLmZpbHRlcihcIi5hY3RpdmVcIikpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jbGlja2V2ZW50cykge1xyXG4gICAgICAgICAgICAkKHRoaXMuc2V0dGluZ3MubmF2aWdhdG9yKS5vbihcImNsaWNrXCIsIFwiYVwiLCB7IHNsaWRlcjogdGhpcyB9LCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVJbmRleCA9IGNoaWxkcmVuLmluZGV4KGNoaWxkcmVuLmZpbHRlcihcIi5hY3RpdmVcIikpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpLmluZGV4KCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuc2xpZGVyLnRvKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuaG92ZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IHRoaXM7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkKHRoaXMuc2V0dGluZ3MubmF2aWdhdG9yKVxyXG4gICAgICAgICAgICAgICAgICAgLmFkZChlbGVtZW50LnNpYmxpbmdzKFwiLnNoYXBlc1wiKSkuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzKFwiOnZpc2libGVcIikgJiYgIWxhc3QpIHsgc2xpZGVyLnN0b3AodHJ1ZSk7IH1cclxuICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpICYmICFsYXN0KSB7IHNsaWRlci5zdGFydCgpOyB9XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4udGhlbWVTbGlkZXIgPSBmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBlbGVtZW50LmRhdGEoXCJzbGlkZXJcIiksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIiAmJiBhcmc7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBuZXcgVGhlbWVTbGlkZXIoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEoXCJzbGlkZXJcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiICYmIGRhdGFbYXJnXSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVthcmddKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zZXR0aW5ncy5hdXRvICYmIGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LnJlc2l6ZURhdGEgPT09ICd1bmRlZmluZWQnKSB3aW5kb3cucmVzaXplRGF0YSA9IHt9O1xud2luZG93LnJlc2l6ZURhdGEuaGVhZGVyUGFnZVdpZHRoID0gZmFsc2U7XG5pZiAodHlwZW9mIHdpbmRvdy5kZWZhdWx0UmVzcG9uc2l2ZURhdGEgPT09ICd1bmRlZmluZWQnKSB3aW5kb3cuZGVmYXVsdFJlc3BvbnNpdmVEYXRhID0gW2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBdO1xuXG5yZXNpemVEYXRhWydoZWFkbGluZSddID0ge1xuICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC4zOSwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuMzksIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjM5LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC4zOSwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuMzksIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICBdLFxuICAgYXJlYToge1xuICAgICAgIHg6IDAsXG4gICAgICAgeTogMFxuICAgfSxcbiAgIHdpZHRoOiAyMjQsXG4gICBoZWlnaHQ6IDQzLFxuICAgYXV0b1dpZHRoOiB0cnVlfTtcblxucmVzaXplRGF0YVsnc2xvZ2FuJ10gPSB7XG4gICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjU4LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC41OCwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuNTgsIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjU4LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC41OCwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgIF0sXG4gICBhcmVhOiB7XG4gICAgICAgeDogMCxcbiAgICAgICB5OiAwXG4gICB9LFxuICAgd2lkdGg6IDE0MCxcbiAgIGhlaWdodDogMTgsXG4gICBhdXRvV2lkdGg6IHRydWV9O1xuXG4vLyB1c2VkIHRvIGFwcGx5IGNvbXBpY2F0ZWQgdmFsdWVzIGluIHN0eWxlIGxpa2UgJyFpbXBvcnRhbnQhXHJcbmZ1bmN0aW9uIGFwcGx5Q3NzKG9iamVjdCwgcGFyYW0sIHZhbHVlKSB7XHJcbiAgICB2YXIgcmcgPSBuZXcgUmVnRXhwKHBhcmFtICsgJ1xccyo6XFxzKlteO10rOycsIFwiaVwiKTtcclxuICAgIHZhciBzdHlsZSA9IG9iamVjdC5hdHRyKCdzdHlsZScpO1xyXG4gICAgdmFyIHN0ciA9IHBhcmFtICsgJzogJyArIHZhbHVlICsgJzsnO1xyXG4gICAgaWYgKHJnLnRlc3Qoc3R5bGUpKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZS5yZXBsYWNlKHJnLCBzdHIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3R5bGUgKz0gJzsgJyArIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuYXR0cignc3R5bGUnLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgdW5pdmVyc2FsIGNvb3JkIHRvIHBpeGVsc1xyXG5mdW5jdGlvbiB1bmlUb1B4KHVuaSwgc2l6ZSwgcGFyZW50U2l6ZSkge1xyXG4gICAgdW5pID0gcGFyc2VGbG9hdCh1bmkgfHwgJzAnKTtcclxuICAgIGlmICh1bmkgPCAwKSB7XHJcbiAgICAgICAgdW5pID0gdW5pICogc2l6ZTtcclxuICAgIH0gZWxzZSBpZiAodW5pID49IDEpIHtcclxuICAgICAgICB1bmkgPSBwYXJlbnRTaXplIC0gKDIgLSB1bmkpICogc2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5pID0gdW5pICogKHBhcmVudFNpemUgLSBzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbnRlbnRTbGlkZXIob2JqZWN0KSB7XHJcbiAgICB2YXIgaXNIZWFkZXIgPSBvYmplY3QucGFyZW50cygnaGVhZGVyJykubGVuZ3RoID4gMDtcclxuICAgIGlmIChpc0hlYWRlcikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBpc1BhZ2VTbGlkZXIgPSBvYmplY3QucGFyZW50cygnLnBhZ2VzbGlkZXInKS5sZW5ndGggPiAwO1xyXG4gICAgaWYgKGlzUGFnZVNsaWRlcilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNoZWV0TGVmdEZ1bmMoc2hlZXQsIG9iamVjdCkge1xyXG4gICAgdmFyIHNoZWV0TGVmdCA9IHNoZWV0Lm9mZnNldCgpLmxlZnQ7XHJcblxyXG4gICAgdmFyIGlzSGVhZGVyID0gb2JqZWN0LnBhcmVudHMoJ2hlYWRlcicpLmxlbmd0aCA+IDA7XHJcbiAgICBpZiAoaXNIZWFkZXIpIHtcclxuICAgICAgICBpZiAocmVzaXplRGF0YS5oZWFkZXJQYWdlV2lkdGgpIHJldHVybiBzaGVldExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBpc1BhZ2VTbGlkZXIgPSBvYmplY3QucGFyZW50cygnLnBhZ2VzbGlkZXInKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmIChpc1BhZ2VTbGlkZXIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc2l6ZURhdGEucGFnZVNsaWRlclBhZ2VXaWR0aCkgcmV0dXJuIHNoZWV0TGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbnZhciBoZWFkZXJPYmplY3RSZXNpemVyID0ge1xyXG4gICAgXHJcbiAgICBwb3N0SW5pdDogZmFsc2UsXHJcblxyXG4gICAgcmVzaXplOiAoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFoZWFkZXJPYmplY3RSZXNpemVyLnBvc3RJbml0ICYmIHR5cGVvZiByZXNwb25zaXZlRGVzaWduICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNwb25zaXZlUmVzaXplJywgaGVhZGVyT2JqZWN0UmVzaXplci5yZXNpemUpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyT2JqZWN0UmVzaXplci5wb3N0SW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zaXZlVHlwZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGRvbid0IHVzZSBmdWxsIGN1c3RvbSByZXNwb25zaXZlIHNvIHdlIE1VU1QgY2xlYW51cCBhbGwgc3R5bGVzXHJcbiAgICAgICAgICAgIHZhciBjbGVhblVwU3R5bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdXNlIGRlZmF1bHQgcmVzcG8gc28gd2hpbGUgaW4gZGVza3RvcCBtb2RlIGFsd2F5cyB1c2UgMC10eXBlLCBpbiBvdGhlciBjYXNlIGNsZWFudXAgb3VyIHN0eWxlc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNpdmVEZXNpZ24gIT09ICd1bmRlZmluZWQnICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXNwb25zaXZlRGF0YVtyZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmVUeXBlSWR4XSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhblVwU3R5bGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zaXZlRGVzaWduICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZVR5cGUgPT09ICd0YWJsZXRsYW5kc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVR5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmVUeXBlID09PSAndGFibGV0cG9ydHJhaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmVUeXBlID09PSAncGhvbmVsYW5kc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVR5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmVUeXBlID09PSAncGhvbmVwb3J0cmFpdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzaGVldCA9ICQoJy5zaGVldCcpO1xyXG4gICAgICAgICAgICB2YXIgc2hlZXRXaWR0aCA9IHNoZWV0Lm91dGVyV2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSAkKCdoZWFkZXInKTtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjc3NQcmVmaXggPSAnJztcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgaHRtbCBzaGFwZXNcclxuICAgICAgICAgICAgdmFyIGhlYWRlclF1ZXJ5ID0gJ2hlYWRlci5oZWFkZXIgLnNoYXBlcz4qLCBoZWFkZXIuaGVhZGVyIC50ZXh0YmxvY2ssIGhlYWRlci5oZWFkZXI+LmhlYWRsaW5lLCBoZWFkZXIuaGVhZGVyPi5zbG9nYW4sIGhlYWRlci5oZWFkZXI+LnBvc2l0aW9uY29udHJvbCwgaGVhZGVyLmhlYWRlcj4ubG9nbyc7XHJcbiAgICAgICAgICAgIHZhciBwYWdlU2xpZGVyUXVlcnkgPSAnLnBhZ2VzbGlkZXIgLnNsaWRlLWl0ZW0+Kic7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJPYmplY3RSZXNpemVyLmlzUHJldmlldykge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyUXVlcnkgPSAnaGVhZGVyIC5zbGlkZXInO1xyXG4gICAgICAgICAgICAgICAgcGFnZVNsaWRlclF1ZXJ5ID0gJy5wYWdlc2xpZGVyIC5zbGlkZXIsIC5wYWdlc2xpZGVyIC50ZXh0YmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoaGVhZGVyUXVlcnkgKyAnLCAnICsgcGFnZVNsaWRlclF1ZXJ5KS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gb2JqZWN0LnBhcmVudCgpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvZmYgPSBzaGVldExlZnRGdW5jKHNoZWV0LCBvYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbHMgPSBvYmplY3QuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGNscywgZnVuY3Rpb24gKGtleSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gJC50cmltKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmluZGV4T2YoY3NzUHJlZml4KSAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyaW5nKGNzc1ByZWZpeC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzaXplRGF0YVt2YWxdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuVXBTdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNzcygnbGVmdCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNzcygnbWFyZ2luLWxlZnQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcERhdGEgPSBkYXRhLnJlc3BvbnNpdmVbcmVzcG9uc2l2ZVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwRGF0YS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jc3MoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlDc3Mob2JqZWN0LCAnZGlzcGxheScsICdub25lICFpbXBvcnRhbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblVwU3R5bGVzIHx8ICFyZXNwRGF0YS52aXNpYmxlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gdW5pVG9QeChyZXNwRGF0YS5sZWZ0LCBkYXRhLmF1dG9XaWR0aCA/IG9iamVjdC53aWR0aCgpIDogZGF0YS53aWR0aCwgc2hlZXRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeCArPSBvZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gdW5pVG9QeChyZXNwRGF0YS50b3AsIGRhdGEuaGVpZ2h0LCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY3NzKCdsZWZ0JywgeCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jc3MoJ3RvcCcsIHkgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseUNzcyhvYmplY3QsICdtYXJnaW4tbGVmdCcsICcwcHggIWltcG9ydGFudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgaW1hZ2VzIGluIHNsaWRlJ3MgYmFja2dyb3VuZC1pbWFnZXNcclxuICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQoJy5zbGlkZS1pdGVtJykuYWRkKGhlYWRlcik7XHJcbiAgICAgICAgICAgIGlmIChicm93c2VyLmllICYmIGJyb3dzZXIudmVyc2lvbiA8PSA4KSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXMgPSBzbGlkZXMuYWRkKCcuc2xpZGUtaXRlbSAuaWU4Zml4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5lYWNoKHNsaWRlcywgZnVuY3Rpb24gKHNsaWRlSWR4LCBzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGUgPSAkKHNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUuY2xvc2VzdCgnLmNvbGxhZ2UnKS5sZW5ndGggPiAwIHx8IGNsZWFuVXBTdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZVZpc2libGUgPSBzbGlkZS5pcygnOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGlmICghc2xpZGVWaXNpYmxlICYmIGJyb3dzZXIuaWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb2ZmID0gc2hlZXRMZWZ0RnVuYyhzaGVldCwgc2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChicm93c2VyLmllICYmIGJyb3dzZXIudmVyc2lvbiA8PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBzbGlkZS5hdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzLnJlcGxhY2UoL2JhY2tncm91bmRcXC1wb3NpdGlvblteO10rLywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hdHRyKCdzdHlsZScsIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJnSW1hZ2UgPSBzbGlkZS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSA/IHNsaWRlLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLnNwbGl0KCcsJykgOiBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBiZ1Bvc2l0aW9uID0gc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJykgJiYgKHNsaWRlLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicpLnJlcGxhY2UoL1swXVteXFxkXSsvZ2ksICcnKSkubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJykuc3BsaXQoJywnKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgW107XHJcbiAgICAgICAgICAgICAgICBpZiAoYmdJbWFnZS5sZW5ndGggIT09IGJnUG9zaXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBzbGlkZS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChoZWlnaHQgPT09IDApIGhlaWdodCA9IHNsaWRlLnBhcmVudCgpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChiZ0ltYWdlLCBmdW5jdGlvbiAoaWR4LCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmluZEltYWdlSWR4ID0gdmFsLmxhc3RJbmRleE9mKCdpbWFnZXMvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmREb3RJZHggPSB2YWwubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluZEltYWdlSWR4ID09PSAtMSB8fCBmaW5kRG90SWR4ID09PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHZhbC5zdWJzdHJpbmcoZmluZEltYWdlSWR4ICsgNywgZmluZERvdElkeCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzaXplRGF0YVtuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwRGF0YSA9IGRhdGEucmVzcG9uc2l2ZVtyZXNwb25zaXZlVHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmlnIGRlZmF1bHQgY29vcmRpbmF0ZXMgZm9yIGhpZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gOTk5OSwgeSA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BEYXRhLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHVuaVRvUHgocmVzcERhdGEubGVmdCwgZGF0YS53aWR0aCwgc2hlZXRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gb2ZmICsgZGF0YS5hcmVhLng7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gdW5pVG9QeChyZXNwRGF0YS50b3AsIGRhdGEuaGVpZ2h0LCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICs9IGRhdGEuYXJlYS55O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmdQb3NpdGlvbltpZHhdID0geCArICdweCAnICsgeSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCBiZ1Bvc2l0aW9uLmpvaW4oJywnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZVZpc2libGUgJiYgYnJvd3Nlci5pZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9KShqUXVlcnkpLFxyXG5cclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgkKSB7XHJcbiAgICAgICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDgpIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJlc2l6ZVRpbWVvdXQ7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5yZXNpemUoKTsgfSwgMjUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5oZWFkZXJPYmplY3RSZXNpemVyLmluaXRpYWxpemUoalF1ZXJ5KTtcclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA4KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHByb2Nlc3NFbGVtZW50TXVsdGlwbHlCZyhcIi5oZWFkZXJcIiwge1xyXG4gICAgICAgIFwiYmdpbWFnZVwiOiBcInVybCgnaW1hZ2VzL2hlYWRlci5qcGcnKVwiLFxyXG4gICAgICAgIFwiYmdwb3NpdGlvblwiOiBcIjAgMFwiLFxyXG4gICAgICAgIFwiaW1hZ2VzXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwb3NpdGlvbnNcIjogXCJcIlxyXG4gICAgfSk7XHJcbn0pO1xyXG5pZiAodHlwZW9mIHdpbmRvdy5yZXNpemVEYXRhID09PSAndW5kZWZpbmVkJykgd2luZG93LnJlc2l6ZURhdGEgPSB7fTtcblxud2luZG93LnJlc2l6ZURhdGEucGFnZVNsaWRlclBhZ2VXaWR0aCA9IGZhbHNlO1xuIiwiLyogQ3JlYXRlZCBieSBBcnRpc3RlZXIgdjQuMy4wLjYwNzQ1ICovXHJcbi8qanNoaW50IGZvcmluOnRydWUsIG5vYXJnOnRydWUsIG5vZW1wdHk6dHJ1ZSwgZXFlcWVxOnRydWUsIGJpdHdpc2U6dHJ1ZSwgc3RyaWN0OnRydWUsIHVuZGVmOnRydWUsIGN1cmx5OmZhbHNlLCBicm93c2VyOnRydWUsIGpxdWVyeTpmYWxzZSAqL1xyXG4vKmdsb2JhbCBqUXVlcnkgKi9cclxuXHJcbnZhciByZXNwb25zaXZlRGVzaWduID0ge1xyXG4gICAgaXNSZXNwb25zaXZlOiBmYWxzZSxcclxuICAgIGlzRGVza3RvcDogZmFsc2UsXHJcbiAgICBpc1RhYmxldDogZmFsc2UsXHJcbiAgICBpc1Bob25lOiBmYWxzZSxcclxuICAgIGxvY2tlZFJlc3BvbnNpdmVNb2RlOiAnJywgLy8gZnJlZSBtb2RlIGZyb20gc3RhcnRcclxuXHJcbiAgICByZXNwb25zaXZlVHlwZTogJ2Rlc2t0b3AnLFxyXG4gICAgcmVzcG9uc2l2ZVR5cGVJZHg6IDEsXHJcbiAgICBsb2NrZWRSZXNwb25zaXZlVHlwZTogJycsXHJcblxyXG4gICAgaXNDdXJyZW50RGVmYXVsdFJlc3BvbnNpdmU6IGZhbHNlLFxyXG5cclxuICAgIGRlZmF1bHRSZXNwb25zaXZlOiBbIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlIF0sIC8vIHR1cm4gb24vb2ZmIG9sZCBvciBuZXcgcmVzcG9uc2l2ZSBtb2Rlc1xyXG5cclxuICAgIHdpbmRvd1dpZHRoOiAwLFxyXG5cclxuICAgIHJlc3BvbnNpdmU6IChmdW5jdGlvbiAoJCkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBodG1sID0gJChcImh0bWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIHRyaWdnZXJFdmVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlzUmVzcFZpc2libGUgPSAkKFwiI3Jlc3BcIikuaXMoXCI6dmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9ja2VkUmVzcG9uc2l2ZU1vZGUgPT09ICdkZXNrdG9wJykgaXNSZXNwVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzUmVzcFZpc2libGUgJiYgIXRoaXMuaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sLmFkZENsYXNzKFwicmVzcG9uc2l2ZVwiKS5yZW1vdmVDbGFzcyhcImRlc2t0b3BcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVzcG9uc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVza3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNSZXNwVmlzaWJsZSAmJiAhdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgICAgICAgICAgIGh0bWwuYWRkQ2xhc3MoXCJkZXNrdG9wXCIpLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZSBkZWZhdWx0LXJlc3BvbnNpdmUgcmVzcG9uc2l2ZS10YWJsZXQgcmVzcG9uc2l2ZS1waG9uZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZXNwb25zaXZlID0gdGhpcy5pc1RhYmxldCA9IHRoaXMuaXNQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGNoZWNrIHRvIGxvY2sgcmVzcG9uc2l2ZSBtb2RlXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNUYWJsZXQgPSB0aGlzLmxvY2tlZFJlc3BvbnNpdmVNb2RlID09PSAndGFibGV0JyB8fCAoJChcIiNyZXNwLXRcIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVNb2RlID09PSAnJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNQaG9uZSA9IHRoaXMubG9ja2VkUmVzcG9uc2l2ZU1vZGUgPT09ICdwaG9uZScgfHwgKCQoXCIjcmVzcC1tXCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlTW9kZSA9PT0gJycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVGFibGV0ICYmICF0aGlzLmlzVGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbC5hZGRDbGFzcyhcInJlc3BvbnNpdmUtdGFibGV0XCIpLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZS1waG9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVGFibGV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1Bob25lICYmICF0aGlzLmlzUGhvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sLmFkZENsYXNzKFwicmVzcG9uc2l2ZS1waG9uZVwiKS5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUtdGFibGV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUYWJsZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGhvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwcmV2UmVzcG9uc2l2ZUluZHggPSB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJ3RhYmxldGxhbmRzY2FwZScgfHwgKCQoXCIjcmVzcC10YWJsZXQtbGFuZHNjYXBlXCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlID0gJ3RhYmxldGxhbmRzY2FwZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4ID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAndGFibGV0cG9ydHJhaXQnIHx8ICgkKFwiI3Jlc3AtdGFibGV0LXBvcnRyYWl0XCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlID0gJ3RhYmxldHBvcnRyYWl0JztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGVJZHggPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICdwaG9uZWxhbmRzY2FwZScgfHwgKCQoXCIjcmVzcC1waG9uZS1sYW5kc2NhcGVcIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGUgPSAncGhvbmVsYW5kc2NhcGUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZUlkeCA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJ3Bob25lcG9ydHJhaXQnIHx8ICgkKFwiI3Jlc3AtcGhvbmUtcG9ydHJhaXRcIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGUgPSAncGhvbmVwb3J0cmFpdCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4ID0gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy9pZiAodGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJ2Rlc2t0b3AnIHx8ICgkKFwiI3Jlc3AtZGVza3RvcFwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZSA9ICdkZXNrdG9wJztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGVJZHggPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHJpZ2dlckV2ZW50IHx8IHByZXZSZXNwb25zaXZlSW5keCAhPT0gdGhpcy5yZXNwb25zaXZlVHlwZUlkeCkge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXNwb25zaXZlICYmIHRoaXMuZGVmYXVsdFJlc3BvbnNpdmVbIHRoaXMucmVzcG9uc2l2ZVR5cGVJZHggXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDdXJyZW50RGVmYXVsdFJlc3BvbnNpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2xhc3MoJ2N1c3RvbS1yZXNwb25zaXZlJykuYWRkQ2xhc3MoJ2RlZmF1bHQtcmVzcG9uc2l2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ3VycmVudERlZmF1bHRSZXNwb25zaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDbGFzcygnZGVmYXVsdC1yZXNwb25zaXZlJykuYWRkQ2xhc3MoJ2N1c3RvbS1yZXNwb25zaXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzcG9uc2l2ZVwiLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNwb25zaXZlUmVzaXplXCIsIHRoaXMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KShqUXVlcnkpLFxyXG4gICAgaW5pdGlhbGl6ZTogKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IGNvcnJlY3QgZGVmYXVsdFJlc3BvbnNpdmVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0UmVzcG9uc2l2ZURhdGEgIT09ICd1bmRlZmluZWQnKSByZXNwb25zaXZlRGVzaWduLmRlZmF1bHRSZXNwb25zaXZlID0gZGVmYXVsdFJlc3BvbnNpdmVEYXRhO1xyXG5cclxuICAgICAgICAgICAgJChcIjxkaXYgaWQ9XFxcInJlc3BcXFwiPjxkaXYgaWQ9XFxcInJlc3AtbVxcXCI+PC9kaXY+PGRpdiBpZD1cXFwicmVzcC10XFxcIj48L2Rpdj48L2Rpdj5cIikuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG4gICAgICAgICAgICAkKCc8ZGl2IGlkPVwicmVzcC10YWJsZXQtbGFuZHNjYXBlXCIgLz48ZGl2IGlkPVwicmVzcC10YWJsZXQtcG9ydHJhaXRcIiAvPjxkaXYgaWQ9XCJyZXNwLXBob25lLWxhbmRzY2FwZVwiIC8+PGRpdiBpZD1cInJlc3AtcGhvbmUtcG9ydHJhaXRcIiAvPicpLmFwcGVuZFRvKCdib2R5Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgLyogKDEpIFVzZSB0aGlzIGNvZGUgZm9yIGRlYnVnIGluc3RlYWQgb2YgKDIpOlxyXG4gICAgICAgICAgICAgKiB2YXIgcmVzaXplVGltZW91dDtcclxuICAgICAgICAgICAgICogJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAqIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICogcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmUoKTsgfSwgNTApO1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKiAoMikgVXNlIHRoaXMgY29kZSBmb3IgcHJvZHVjdGlvbiBhbmQgY29tbWVudCAoMSk6ICovXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemVcIik7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKGpRdWVyeSksXHJcbiAgICAvLyBsb2NrIHJlc3BvbnNpdmUgaW4gc29tZSBtb2RlOiBkZXNrdG9wLCB0YWJsZXQgb3IgcGhvbmUgZm9yIGVkaXRvclxyXG4gICAgbG9ja1Jlc3BvbnNpdmVUeXBlOiBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgIHJlc3BvbnNpdmVEZXNpZ24ubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPSBtb2RlO1xyXG5cclxuICAgICAgICBpZiAobW9kZS5pbmRleE9mKCd0YWJsZXQnKSA9PT0gMCkgbW9kZSA9ICd0YWJsZXQnO1xyXG4gICAgICAgIGlmIChtb2RlLmluZGV4T2YoJ3Bob25lJykgPT09IDApIG1vZGUgPSAncGhvbmUnO1xyXG5cclxuICAgICAgICByZXNwb25zaXZlRGVzaWduLmxvY2tlZFJlc3BvbnNpdmVNb2RlID0gbW9kZTtcclxuICAgIH0sXHJcbiAgICAvLyB1c2luZyBpbiBlZGl0b3IgdG8gdHVybiBvZmYgZGVmYXVsdCByZXNwb25zaXZlXHJcbiAgICB0b29nbGVEZWZhdWx0UmVzcG9uc2l2ZTogZnVuY3Rpb24gKHR5cGUsIHZhbCkge1xyXG4gICAgICAgIHZhciBvbGQgPSByZXNwb25zaXZlRGVzaWduLmRlZmF1bHRSZXNwb25zaXZlWyB0eXBlIF07XHJcbiAgICAgICAgcmVzcG9uc2l2ZURlc2lnbi5kZWZhdWx0UmVzcG9uc2l2ZVsgdHlwZSBdID0gdmFsO1xyXG4gICAgICAgIGlmIChvbGQgIT09IHZhbCkgcmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlVHlwZUlkeCA9IC0xO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVzcG9uc2l2ZUFic0JnKHJlc3BvbnNpdmVEZXNpZ24sIGVsLCBiZykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAoYmcubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgZGVza3RvcEJnVG9wID0gYmcuYXR0cihcImRhdGEtYmctdG9wXCIpO1xyXG4gICAgdmFyIGRlc2t0b3BCZ0hlaWdodCA9IGJnLmF0dHIoXCJkYXRhLWJnLWhlaWdodFwiKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGRlc2t0b3BCZ1RvcCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBkZXNrdG9wQmdUb3AgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGJnLmF0dHIoXCJkYXRhLWJnLXRvcFwiLCBiZy5jc3MoXCJ0b3BcIikpO1xyXG4gICAgICAgICAgICBiZy5hdHRyKFwiZGF0YS1iZy1oZWlnaHRcIiwgYmcuY3NzKFwiaGVpZ2h0XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbFRvcCA9IGVsLm9mZnNldCgpLnRvcDtcclxuICAgICAgICB2YXIgZWxIZWlnaHQgPSBlbC5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGJnLmNzcyhcInRvcFwiLCBlbFRvcCArIFwicHhcIik7XHJcbiAgICAgICAgYmcuY3NzKFwiaGVpZ2h0XCIsIGVsSGVpZ2h0ICsgXCJweFwiKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc2t0b3BCZ1RvcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZXNrdG9wQmdUb3AgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgYmcuY3NzKFwidG9wXCIsIGRlc2t0b3BCZ1RvcCk7XHJcbiAgICAgICAgYmcuY3NzKFwiaGVpZ2h0XCIsIGRlc2t0b3BCZ0hlaWdodCk7XHJcbiAgICAgICAgYmcucmVtb3ZlQXR0cihcImRhdGEtYmctdG9wXCIpO1xyXG4gICAgICAgIGJnLnJlbW92ZUF0dHIoXCJkYXRhLWJnLWhlaWdodFwiKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIHJlc3BvbnNpdmVJbWFnZXMgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgJChcImltZ1t3aWR0aF1cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKHRoaXMpLCBuZXdXaWR0aCA9IFwiXCIsIG5ld01heFdpZHRoID0gXCJcIiwgbmV3SGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdNYXhXaWR0aCA9IFwiMTAwJVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aEF0dHIgPSBpbWcuYXR0cihcIndpZHRoXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoQXR0ciAhPT0gbnVsbCAmJiB0eXBlb2YgKHdpZHRoQXR0cikgPT09IFwic3RyaW5nXCIgJiYgd2lkdGhBdHRyLmluZGV4T2YoXCIlXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF4V2lkdGggPSBwYXJzZUludCgkLnRyaW0od2lkdGhBdHRyKSwgMTApICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5jc3MoXCJ3aWR0aFwiLCBuZXdXaWR0aCkuY3NzKFwibWF4LXdpZHRoXCIsIG5ld01heFdpZHRoKS5jc3MoXCJoZWlnaHRcIiwgbmV3SGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7IFxyXG5cclxudmFyIHJlc3BvbnNpdmVWaWRlb3MgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgJChcImlmcmFtZVt3aWR0aF0sb2JqZWN0W3dpZHRoXSxlbWJlZFt3aWR0aF1cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoKG9iai5pcygnW3dpZHRoXScpICYmIG9iai5hdHRyKFwid2lkdGhcIikuaW5kZXhPZihcIiVcIikgIT09IC0xKSB8fFxyXG4gICAgICAgICAgICAgICAgKG9iai5pcygnW2NsYXNzXScpICYmIG9iai5hdHRyKFwiY2xhc3NcIikuaW5kZXhPZihcInR3aXR0ZXJcIikgIT09IC0xKSB8fFxyXG4gICAgICAgICAgICAgICAgKG9iai5pZCAmJiBvYmouaWQuaW5kZXhPZihcImdvb2dsZVwiKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gb2JqLnBhcmVudChcIi5yZXNwb25zaXZlLWVtYmVkXCIpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIubGVuZ3RoICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9ICQoXCI8ZGl2IGNsYXNzPVxcXCJyZXNwb25zaXZlLWVtYmVkXFxcIj5cIikuaW5zZXJ0QmVmb3JlKG9iaik7XHJcbiAgICAgICAgICAgICAgICBvYmouYXBwZW5kVG8oY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLmluc2VydEJlZm9yZShjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxuLy8gdGhpcyBtdXN0IGJlIGNhbGxlZCBmb3IgY29sbGFnZXMgb25seSFcclxudmFyIHJlc3BvbnNpdmVUZXh0YmxvY2tzID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc2xpZGVyLCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgc2xpZGVyLmZpbmQoXCIudGV4dGJsb2NrXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoc2xpZGVyLmF0dHIoXCJkYXRhLXdpZHRoXCIpLCAxMCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0YiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBjID0gc2xpZGVyLndpZHRoKCkgLyBzbGlkZXIuYXR0cihcImRhdGEtd2lkdGhcIik7XHJcbiAgICAgICAgICAgIHRiLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCJcIixcclxuICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGJIZWlnaHQgPSBwYXJzZUludCh0Yi5jc3MoXCJoZWlnaHRcIiksIDEwKTtcclxuICAgICAgICAgICAgICAgIHZhciB0YldpZHRoID0gcGFyc2VJbnQodGIuY3NzKFwid2lkdGhcIiksIDEwKTtcclxuICAgICAgICAgICAgICAgIHZhciB0YlRvcCA9IHBhcnNlSW50KHRiLmNzcyhcInRvcFwiKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRiTWFyZ2luID0gcGFyc2VJbnQodGIuY3NzKFwibWFyZ2luLWxlZnRcIiksIDEwKTtcclxuICAgICAgICAgICAgICAgIHRiLmFkZCh0Yi5maW5kKCdkaXYnKSkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiB0YkhlaWdodCAqIGMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB0YldpZHRoICogY1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0Yi5jc3MoXCJ0b3BcIiwgdGJUb3AgKiBjKTtcclxuICAgICAgICAgICAgICAgIHRiLmF0dHIoXCJzdHlsZVwiLCBmdW5jdGlvbiAoaSwgcykgeyByZXR1cm4gcyArIFwibWFyZ2luLWxlZnQ6IFwiICsgKHRiTWFyZ2luICogYykgKyBcInB4ICFpbXBvcnRhbnRcIjsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG52YXIgcmVzcG9uc2l2ZVNsaWRlciA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICAkKFwiLnNsaWRlclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlzSGVhZGVyU2xpZGVyID0gcy5wYXJlbnQoJy5oZWFkZXInKS5sZW5ndGggPiAwIHx8IHMucGFyZW50KCcucGFnZXNsaWRlcicpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWFkZXJTbGlkZXIgJiYgcmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVUZXh0YmxvY2tzKHMsIHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFdpZHRoID0gcy5hdHRyKFwiZGF0YS13aWR0aFwiKTtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxIZWlnaHQgPSBzLmF0dHIoXCJkYXRhLWhlaWdodFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBzaXplXHJcblxyXG4gICAgICAgICAgICB2YXIgb2JqID0gcy5kYXRhKFwic2xpZGVyXCIpO1xyXG4gICAgICAgICAgICBpZiAoIW9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5uZXIgPSBzLmZpbmQoXCIuc2xpZGVyLWlubmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSAmJiBvYmouc2V0dGluZ3MuaGVscGVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouc2V0dGluZ3MuaGVscGVyLnVwZGF0ZVNpemUoaW5uZXIsIHsgd2lkdGg6IGluaXRpYWxXaWR0aCwgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgc2xpZGVyXHJcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLnNldHRpbmdzLmhlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzcG9uc2l2ZVJlc2l6ZVwiLCBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouc2V0dGluZ3MuYW5pbWF0aW9uID09PSBcImZhZGVcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzQ3VycmVudERlZmF1bHRSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zZXR0aW5ncy5oZWxwZXIudXBkYXRlU2l6ZShpbm5lciwgeyB3aWR0aDogaW5pdGlhbFdpZHRoLCBoZWlnaHQ6IGluaXRpYWxIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChpbm5lci5jaGlsZHJlbigpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtTWF0aC5mbG9vcihpbml0aWFsV2lkdGggLyAyIC0gcGFyc2VJbnQoaW5uZXIub3V0ZXJXaWR0aCgpLCAxMCkgLyAyKSArIFwicHhcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLU1hdGguZmxvb3IoaW5pdGlhbEhlaWdodCAvIDIgLSBwYXJzZUludChpbm5lci5vdXRlckhlaWdodCgpLCAxMCkgLyAyKSArIFwicHggXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoXCJyZXNwb25zaXZlUmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxudmFyIHJlc3BvbnNpdmVDb2xsYWdlcyA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICAkKFwiLmNvbGxhZ2VcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGNvbGxhZ2UgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gY29sbGFnZS5maW5kKFwiLnNsaWRlclwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsV2lkdGggPSBzbGlkZXIuYXR0cihcImRhdGEtd2lkdGhcIik7XHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsSGVpZ2h0ID0gc2xpZGVyLmF0dHIoXCJkYXRhLWhlaWdodFwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBjb2xsYWdlLmNsb3Nlc3QoJzpub3QoLmltYWdlLWNhcHRpb24td3JhcHBlciwgLmNvbGxhZ2UpJyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnRJY3cgPSBjb2xsYWdlLmNsb3Nlc3QoJy5pbWFnZS1jYXB0aW9uLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudFdpZHRoID0gcGFyZW50LndpZHRoKCk7XHJcbiAgICAgICAgICAgIHZhciBjb2xsYWdlV2lkdGggPSBjb2xsYWdlLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb3IgcmVzcG9uc2l2ZSB0cnkgdG8gbWFrZSBjb2xsYWdlIHNtYWxsZXJcclxuICAgICAgICAgICAgLy8gYSkgbm8gaWN3IC0gY2hlY2sgY29sbGFnZSB3aWR0aCBhbmQgcGFyZW50XHJcbiAgICAgICAgICAgIC8vIGIpIHdpdGggaWN3IC0gY29sbGFnZSBpcyBiaWdnZXIgdGhhbiBpY3dcclxuICAgICAgICAgICAgdmFyIGRvbXMgPSBjb2xsYWdlXHJcbiAgICAgICAgICAgICAgICAuYWRkKHNsaWRlcilcclxuICAgICAgICAgICAgICAgIC5hZGQoY29sbGFnZS5jbG9zZXN0KFwiLmltYWdlLWNhcHRpb24td3JhcHBlclwiKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzbyB0cnkgdG8gbWFrZSBjb2xsYWdlIHNtYWxsZXJcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlICYmIGNvbGxhZ2VXaWR0aCA+IHBhcmVudFdpZHRoIHx8IChwYXJlbnRJY3cubGVuZ3RoID4gMCAmJiBjb2xsYWdlV2lkdGggPiBwYXJlbnRJY3cud2lkdGgoKSkpIHtcclxuICAgICAgICAgICAgICAgIGRvbXMuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBidXQgaWYgaWN3IG1ha2UgY29sbGFnZSB0b28gYml0IHJlc2V0IGl0IHdpZHRoIHRvIG5vcmFtbFxyXG4gICAgICAgICAgICBjb2xsYWdlV2lkdGggPSBjb2xsYWdlLndpZHRoKCk7XHJcbiAgICAgICAgICAgIGlmIChjb2xsYWdlV2lkdGggPiBpbml0aWFsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGRvbXMuY3NzKFwid2lkdGhcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjID0gc2xpZGVyLndpZHRoKCkgLyBpbml0aWFsV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoID0gYyAqIGluaXRpYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIHNsaWRlci5jc3MoXCJoZWlnaHRcIiwgaCArIFwicHhcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlXCIsIChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgLy8gc28gdGhpcyBldmVudCBpcyBtYWluIGFuZCBpdCBnZW5lcmF0ZSBzdWIgZXZlbnRzIHRvIG1ha2UgaW1wb3J0YW50IGNoYW5nZXMgYmVmb3JlIHdlIHdpbGwgbW9kaWZ5IHNsaWRlclxyXG4gICAgICAgIC8vIGZvciBleGFtcGxlIHdlIG1vdmUgb3V0IG9mIHNsaWRlciBtZW51IGJ1dHRvbiwgYW5kIGl0IGNoYW5nZSBzbGlkZXIgc2l6ZVxyXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNwb25zaXZlUGFnZScsIHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZXMocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgcmVzcG9uc2l2ZVZpZGVvcyhyZXNwb25zaXZlRGVzaWduKTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2l2ZVNsaWRlcihyZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICByZXNwb25zaXZlTmF2aWdhdG9yKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZVJlc2l6ZVwiLCAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIHJlc3BvbnNpdmVDb2xsYWdlcyhyZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICByZXNwb25zaXZlTmF2aWdhdG9yKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA4KSByZXR1cm47XHJcbiAgICB2YXIgdGltZW91dDtcclxuICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlQ29sbGFnZXMocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVOYXZpZ2F0b3IocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgfSwgMjUpO1xyXG4gICAgfSk7XHJcbiAgICByZXNwb25zaXZlQ29sbGFnZXMocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICByZXNwb25zaXZlTmF2aWdhdG9yKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG59KTtcclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlUmVzaXplXCIsIChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZUFic0JnKHJlc3BvbnNpdmVEZXNpZ24sICQoXCJuYXYubmF2XCIpLCAkKFwiI2htZW51LWJnXCIpKTtcclxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc3BvbnNpdmVOYXZcIiwgeyByZXNwb25zaXZlRGVzaWduOiByZXNwb25zaXZlRGVzaWduIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmpRdWVyeShmdW5jdGlvbigkKSB7XHJcbiAgICAkKCc8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibWVudS1idG5cXFwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT4nKS5pbnNlcnRCZWZvcmUoXCIuaG1lbnVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBtZW51ID0gJCh0aGlzKS5uZXh0KCk7XHJcbiAgICAgICAgaWYgKG1lbnUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICBtZW51LnNsaWRlVXAoXCJmYXN0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInZpc2libGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5zbGlkZURvd24oXCJmYXN0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInZpc2libGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlTmF2XCIsIChmdW5jdGlvbiAoJCkge1xyXG4gICAgLypnbG9iYWwgbWVudUV4dGVuZGVkQ3JlYXRlICovXHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlRGVzaWduLmlzRGVza3RvcCAmJiAkKFwibGkuZXh0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbWVudUV4dGVuZGVkQ3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoalF1ZXJ5KSk7XHJcblxyXG52YXIgcmVzcG9uc2l2ZUhlYWRlciA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIHZhciBoZWFkZXIgPSAkKFwiaGVhZGVyLmhlYWRlclwiKTtcclxuICAgICAgICB2YXIgaGVhZGVyU2xpZGVyID0gaGVhZGVyLmZpbmQoXCIuc2xpZGVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoaGVhZGVyU2xpZGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgZmlyc3RTbGlkZSA9IGhlYWRlclNsaWRlci5maW5kKFwiLnNsaWRlLWl0ZW1cIikuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlYmcgPSBmaXJzdFNsaWRlLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB2YXIgcHJldmlvdXNTaWJsaW5nID0gaGVhZGVyU2xpZGVyLnByZXYoKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlck5hdiA9IGhlYWRlclNsaWRlci5zaWJsaW5ncyhcIi5zbGlkZW5hdmlnYXRvclwiKTtcclxuICAgICAgICAgICAgaWYgKHNsaWRlYmcubGVuZ3RoICYmIHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBwcmV2IGlzIG1lbnUgaW4gaGVhZGVyXHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nLmlzKFwibmF2Lm5hdlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlck5hdi5hdHRyKFwiZGF0YS1vZmZzZXRcIiwgcHJldmlvdXNTaWJsaW5nLmhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlck5hdi5yZW1vdmVBdHRyKFwiZGF0YS1vZmZzZXRcIik7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlUmVzaXplXCIsIChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZUFic0JnKHJlc3BvbnNpdmVEZXNpZ24sICQoXCIuaGVhZGVyXCIpLCAkKFwiI2hlYWRlci1iZ1wiKSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpKTtcclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlXCIsIChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgaWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci52ZXJzaW9uIDw9IDgpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vbihcInJlc3BvbnNpdmVSZXNpemUuaGVhZGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVIZWFkZXIocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzcG9uc2l2ZVJlc2l6ZS5oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoXCJyZXNwb25zaXZlUmVzaXplLmhlYWRlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KShqUXVlcnkpKTtcclxuXHJcbnZhciByZXNwb25zaXZlTGF5b3V0Q2VsbCA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICAkKFwiLmNvbnRlbnQgLmNvbnRlbnQtbGF5b3V0LXJvdywuZm9vdGVyIC5jb250ZW50LWxheW91dC1yb3dcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByb3cgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcm93Q2hpbGRyZW4gPSByb3cuY2hpbGRyZW4oXCIubGF5b3V0LWNlbGxcIik7XHJcbiAgICAgICAgICAgIGlmIChyb3dDaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYztcclxuICAgICAgICAgICAgICAgIHJvdy5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUtbGF5b3V0LXJvdy0yXCIpLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZS1sYXlvdXQtcm93LTNcIikucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlLWxheW91dC1yb3ctMVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dDaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gMTtcclxuICAgICAgICAgICAgICAgICAgICByb3cuYWRkQ2xhc3MoXCJyZXNwb25zaXZlLWxheW91dC1yb3ctMVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93Q2hpbGRyZW4ubGVuZ3RoICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gMjtcclxuICAgICAgICAgICAgICAgICAgICByb3cuYWRkQ2xhc3MoXCJyZXNwb25zaXZlLWxheW91dC1yb3ctMlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5hZGRDbGFzcyhcInJlc3BvbnNpdmUtbGF5b3V0LXJvdy0zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGMgPiAwICYmIHJlc3BvbnNpdmVEZXNpZ24uaXNUYWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3dDaGlsZHJlbi5hZGRDbGFzcyhcInJlc3BvbnNpdmUtdGFibGV0LWxheW91dC1jZWxsXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpICsgMSkgJSBjID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFmdGVyKFwiPGRpdiBjbGFzcz1cXFwiY2xlYXJlZCByZXNwb25zaXZlLWNsZWFyZWRcXFwiPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByb3dDaGlsZHJlbi5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUtdGFibGV0LWxheW91dC1jZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5jaGlsZHJlbihcIi5yZXNwb25zaXZlLWNsZWFyZWRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZVwiLCBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHJlc3BvbnNpdmVMYXlvdXRDZWxsKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG59KTtcclxuXHJcbi8qZ2xvYmFsIGpRdWVyeSwgcmVzcG9uc2l2ZURlc2lnbiovXHJcblxyXG5cclxuXHJcblxyXG4vL3NldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcImRlc2t0b3BcIikgfSwgMCk7XHJcblxyXG5pZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gOCkge1xyXG4gICAgalF1ZXJ5KHJlc3BvbnNpdmVEZXNpZ24uaW5pdGlhbGl6ZSk7XHJcbn0gZWxzZSB7XHJcbiAgICBqUXVlcnkoXCJodG1sXCIpLmFkZENsYXNzKFwiZGVza3RvcFwiKTtcclxufVxyXG4iLCIvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgIF8gXyBfX19fXyAgICAgICAgICAgICAgICAgICAgICBfICAgX1xyXG4gICAgICAgICAgICAgICAgICAgICAgfCB8IHwgIF9fIFxcICAgICAgICAgICAgICAgICAgICB8IHwgKF8pXHJcbiAgICBfX18gIF9fXyBfIF9fIF9fXyB8IHwgfCB8X18pIHxfX19fXyAgIF9fX19fICBfXyBffCB8ICBfIF9fX1xyXG4gICAvIF9ffC8gX198ICdfXy8gXyBcXHwgfCB8ICBfICAvLyBfIFxcIFxcIC8gLyBfIFxcLyBfYCB8IHwgfCAvIF9ffFxyXG4gICBcXF9fIFxcIChfX3wgfCB8IChfKSB8IHwgfCB8IFxcIFxcICBfXy9cXCBWIC8gIF9fLyAoX3wgfCB8X3wgXFxfXyBcXFxyXG4gICB8X19fL1xcX19ffF98ICBcXF9fXy98X3xffF98ICBcXF9cXF9fX3wgXFxfLyBcXF9fX3xcXF9fLF98XyhfKSB8X19fL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8vIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxfXy9cclxuXHJcbiAgICBcIkRlY2xhcmF0aXZlIG9uLXNjcm9sbCByZXZlYWwgYW5pbWF0aW9ucy5cIlxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNjcm9sbFJldmVhbC5qcyBpcyBpbnNwaXJlZCBieSBjYnBTY3JvbGxlci5qcywgwqkgMjAxNCwgQ29kcm9wcy5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbiAgICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cclxuICAgIHNjcm9sbFJldmVhbC5qcywgwqkgMjAxNCBodHRwczovL3R3aXR0ZXIuY29tL2p1bGlhbmxsb3lkXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG47KGZ1bmN0aW9uICh3aW5kb3cpIHtcclxuXHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgZG9jRWxlbSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0SCAoKSB7XHJcbiAgICB2YXIgY2xpZW50ID0gZG9jRWxlbVsnY2xpZW50SGVpZ2h0J10sXHJcbiAgICAgIGlubmVyID0gd2luZG93Wydpbm5lckhlaWdodCddO1xyXG5cclxuICAgIHJldHVybiAoY2xpZW50IDwgaW5uZXIpID8gaW5uZXIgOiBjbGllbnQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRPZmZzZXQgKGVsKSB7XHJcbiAgICB2YXIgb2Zmc2V0VG9wID0gMCxcclxuICAgICAgICBvZmZzZXRMZWZ0ID0gMDtcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgIGlmICghaXNOYU4oZWwub2Zmc2V0VG9wKSkge1xyXG4gICAgICAgIG9mZnNldFRvcCArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc05hTihlbC5vZmZzZXRMZWZ0KSkge1xyXG4gICAgICAgIG9mZnNldExlZnQgKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBvZmZzZXRUb3AsXHJcbiAgICAgIGxlZnQ6IG9mZnNldExlZnRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzRWxlbWVudEluVmlld3BvcnQgKGVsLCBoKSB7XHJcbiAgICB2YXIgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgdmlld2VkID0gc2Nyb2xsZWQgKyBnZXRWaWV3cG9ydEgoKSxcclxuICAgICAgICBlbEggPSBlbC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgZWxUb3AgPSBnZXRPZmZzZXQoZWwpLnRvcCxcclxuICAgICAgICBlbEJvdHRvbSA9IGVsVG9wICsgZWxILFxyXG4gICAgICAgIGggPSBoIHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIChlbFRvcCArIGVsSCAqIGgpIDw9IHZpZXdlZCAmJiAoZWxCb3R0b20pID49IHNjcm9sbGVkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXh0ZW5kIChhLCBiKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xyXG4gICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgYVtrZXldID0gYltrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBzY3JvbGxSZXZlYWwob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBleHRlbmQodGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc2Nyb2xsUmV2ZWFsLnByb3RvdHlwZSA9IHtcclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgIGF4aXM6ICd5JyxcclxuICAgICAgZGlzdGFuY2U6ICc2MHB4JyxcclxuICAgICAgZHVyYXRpb246ICcwLjU1cycsXHJcbiAgICAgIGRlbGF5OiAnMC4xNXMnLFxyXG5cclxuICAvLyAgaWYgMCwgdGhlIGVsZW1lbnQgaXMgY29uc2lkZXJlZCBpbiB0aGUgdmlld3BvcnQgYXMgc29vbiBhcyBpdCBlbnRlcnNcclxuICAvLyAgaWYgMSwgdGhlIGVsZW1lbnQgaXMgY29uc2lkZXJlZCBpbiB0aGUgdmlld3BvcnQgd2hlbiBpdCdzIGZ1bGx5IHZpc2libGVcclxuICAgICAgdmlld3BvcnRGYWN0b3I6IDAuMzNcclxuICAgIH0sXHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgX2luaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZWxlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2NFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbFJldmVhbF0nKSk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsZWQgPSBmYWxzZTtcclxuXHJcbiAgLy8gIEluaXRpYWxpemUgYWxsIHNjcm9sbHJldmVhbHMsIHRyaWdnZXJpbmcgYWxsXHJcbiAgLy8gIHJldmVhbHMgb24gdmlzaWJsZSBlbGVtZW50cy5cclxuICAgICAgdGhpcy5lbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xyXG4gICAgICAgIHNlbGYuYW5pbWF0ZShlbCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzZWxmLnNjcm9sbGVkKSB7XHJcbiAgICAgICAgICBzZWxmLnNjcm9sbGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLl9zY3JvbGxQYWdlKCk7XHJcbiAgICAgICAgICB9LCA2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZGVsYXllZCgpIHtcclxuICAgICAgICAgIHNlbGYuX3Njcm9sbFBhZ2UoKTtcclxuICAgICAgICAgIHNlbGYucmVzaXplVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLnJlc2l6ZVRpbWVvdXQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIDIwMCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBfc2Nyb2xsUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xyXG4gICAgICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChlbCwgc2VsZi5vcHRpb25zLnZpZXdwb3J0RmFjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hbmltYXRlKGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgcGFyc2VMYW5ndWFnZTogZnVuY3Rpb24gKGVsKSB7XHJcblxyXG4gIC8vICBTcGxpdHMgb24gYSBzZXF1ZW5jZSBvZiBvbmUgb3IgbW9yZSBjb21tYXMgb3Igc3BhY2VzLlxyXG4gICAgICB2YXIgd29yZHMgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xscmV2ZWFsJykuc3BsaXQoL1ssIF0rLyksXHJcbiAgICAgICAgICBlbnRlckZyb20sXHJcbiAgICAgICAgICBwYXJzZWQgPSB7fTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGZpbHRlciAod29yZHMpIHtcclxuICAgICAgICB2YXIgcmV0ID0gW10sXHJcblxyXG4gICAgICAgICAgICBibGFja2xpc3QgPSBbXHJcbiAgICAgICAgICAgICAgXCJmcm9tXCIsXHJcbiAgICAgICAgICAgICAgXCJ0aGVcIixcclxuICAgICAgICAgICAgICBcImFuZFwiLFxyXG4gICAgICAgICAgICAgIFwidGhlblwiLFxyXG4gICAgICAgICAgICAgIFwiYnV0XCJcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgd29yZHMuZm9yRWFjaChmdW5jdGlvbiAod29yZCwgaSkge1xyXG4gICAgICAgICAgaWYgKGJsYWNrbGlzdC5pbmRleE9mKHdvcmQpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0LnB1c2god29yZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdvcmRzID0gZmlsdGVyKHdvcmRzKTtcclxuXHJcbiAgICAgIHdvcmRzLmZvckVhY2goZnVuY3Rpb24gKHdvcmQsIGkpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoICh3b3JkKSB7XHJcbiAgICAgICAgICBjYXNlIFwiZW50ZXJcIjpcclxuICAgICAgICAgICAgZW50ZXJGcm9tID0gd29yZHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVudGVyRnJvbSA9PSBcInRvcFwiIHx8IGVudGVyRnJvbSA9PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgICAgICAgICAgcGFyc2VkLmF4aXMgPSBcInlcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVudGVyRnJvbSA9PSBcImxlZnRcIiB8fCBlbnRlckZyb20gPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgcGFyc2VkLmF4aXMgPSBcInhcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJhZnRlclwiOlxyXG4gICAgICAgICAgICBwYXJzZWQuZGVsYXkgPSB3b3Jkc1tpICsgMV07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIFwid2FpdFwiOlxyXG4gICAgICAgICAgICBwYXJzZWQuZGVsYXkgPSB3b3Jkc1tpICsgMV07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIFwibW92ZVwiOlxyXG4gICAgICAgICAgICBwYXJzZWQuZGlzdGFuY2UgPSB3b3Jkc1tpICsgMV07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIFwib3ZlclwiOlxyXG4gICAgICAgICAgICBwYXJzZWQuZHVyYXRpb24gPSB3b3Jkc1tpICsgMV07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIFwidHJpZ2dlclwiOlxyXG4gICAgICAgICAgICBwYXJzZWQuZXZlbnROYW1lID0gd29yZHNbaSArIDFdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyAgVW5yZWNvZ25pemFibGUgd29yZHM7IGRvIG5vdGhpbmcuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAvLyAgQWZ0ZXIgYWxsIHZhbHVlcyBhcmUgcGFyc2VkLCBsZXTigJlzIG1ha2Ugc3VyZSBvdXIgb3VyXHJcbiAgLy8gIHBpeGVsIGRpc3RhbmNlIGlzIG5lZ2F0aXZlIGZvciB0b3AgYW5kIGxlZnQgZW50cmFuY2VzLlxyXG4gIC8vXHJcbiAgLy8gIGllLiBcIm1vdmUgMjVweCBmcm9tIHRvcFwiIHN0YXJ0cyBhdCAndG9wOiAtMjVweCcgaW4gQ1NTLlxyXG5cclxuICAgICAgaWYgKGVudGVyRnJvbSA9PSBcInRvcFwiIHx8IGVudGVyRnJvbSA9PSBcImxlZnRcIikge1xyXG5cclxuICAgICAgICBpZiAoIXR5cGVvZiBwYXJzZWQuZGlzdGFuY2UgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgcGFyc2VkLmRpc3RhbmNlID0gXCItXCIgKyBwYXJzZWQuZGlzdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHBhcnNlZC5kaXN0YW5jZSA9IFwiLVwiICsgdGhpcy5vcHRpb25zLmRpc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIGdlbkNTUzogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UoZWwpO1xyXG5cclxuICAgICAgdmFyIGRpc3QgICA9IHBhcnNlZC5kaXN0YW5jZSB8fCB0aGlzLm9wdGlvbnMuZGlzdGFuY2UsXHJcbiAgICAgICAgICBkdXIgICAgPSBwYXJzZWQuZHVyYXRpb24gfHwgdGhpcy5vcHRpb25zLmR1cmF0aW9uLFxyXG4gICAgICAgICAgZGVsYXkgID0gcGFyc2VkLmRlbGF5ICAgIHx8IHRoaXMub3B0aW9ucy5kZWxheSxcclxuICAgICAgICAgIGF4aXMgICA9IHBhcnNlZC5heGlzICAgICB8fCB0aGlzLm9wdGlvbnMuYXhpcztcclxuXHJcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gXCItd2Via2l0LXRyYW5zaXRpb246IGFsbCBcIiArIGR1ciArIFwiIGVhc2UgXCIgKyBkZWxheSArIFwiO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otdHJhbnNpdGlvbjogYWxsIFwiICsgZHVyICsgXCIgZWFzZSBcIiArIGRlbGF5ICsgXCI7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItby10cmFuc2l0aW9uOiBhbGwgXCIgKyBkdXIgKyBcIiBlYXNlIFwiICsgZGVsYXkgKyBcIjtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1zLXRyYW5zaXRpb246IGFsbCBcIiArIGR1ciArIFwiIGVhc2UgXCIgKyBkZWxheSArIFwiO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbjogYWxsIFwiICsgZHVyICsgXCIgZWFzZSBcIiArIGRlbGF5ICsgXCI7XCI7XHJcblxyXG4gICAgICB2YXIgaW5pdGlhbCA9IFwiLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKFwiICsgZGlzdCArIFwiKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXCItbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoXCIgKyBkaXN0ICsgXCIpO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIihcIiArIGRpc3QgKyBcIik7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKFwiICsgZGlzdCArIFwiKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eTogMDtcIjtcclxuXHJcbiAgICAgIHZhciB0YXJnZXQgPSBcIi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIigwKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIigwKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXCItbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIigwKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIigwKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5OiAxO1wiO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXHJcbiAgICAgICAgaW5pdGlhbDogaW5pdGlhbCxcclxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICB0b3RhbER1cmF0aW9uOiAoKHBhcnNlRmxvYXQoZHVyKSArIHBhcnNlRmxvYXQoZGVsYXkpKSAqIDEwMDApXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICB2YXIgY3NzID0gdGhpcy5nZW5DU1MoZWwpO1xyXG5cclxuICAgICAgaWYgKCFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaW5pdCcpKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNzcy5pbml0aWFsKTtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaW5pdCcsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNyLWNvbXBsZXRlJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KGVsLCB0aGlzLm9wdGlvbnMudmlld3BvcnRGYWN0b3IpKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNzcy50YXJnZXQgKyBjc3MudHJhbnNpdGlvbik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXNyLWNvbXBsZXRlJywgdHJ1ZSk7XHJcbiAgICAgICAgfSwgY3NzLnRvdGFsRHVyYXRpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH07IC8vIGVuZCBzY3JvbGxSZXZlYWwucHJvdG90eXBlXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxSZXZlYWwgPSBuZXcgc2Nyb2xsUmV2ZWFsKCk7XHJcbiAgfSk7XHJcblxyXG59KSh3aW5kb3cpOyIsIi8vIFNtb290aFNjcm9sbCB2MC45LjlcclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuXHJcbi8vIFBlb3BsZSBpbnZvbHZlZFxyXG4vLyAtIEJhbGF6cyBHYWxhbWJvc2k6IG1haW50YWluZXIgKENIQU5HRUxPRy50eHQpXHJcbi8vIC0gUGF0cmljayBCcnVubmVyIChwYXRyaWNrYjE5OTFAZ21haWwuY29tKVxyXG4vLyAtIE1pY2hhZWwgSGVyZjogc3NjX3B1bHNlIEFsZ29yaXRobVxyXG5cclxuZnVuY3Rpb24gc3NjX2luaXQoKSB7XHJcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHJldHVybjtcclxuICAgIHZhciBlID0gZG9jdW1lbnQuYm9keTtcclxuICAgIHZhciB0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgdmFyIG4gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB2YXIgciA9IGUuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgc3NjX3Jvb3QgPSBkb2N1bWVudC5jb21wYXRNb2RlLmluZGV4T2YoXCJDU1NcIikgPj0gMCA/IHQgOiBlO1xyXG4gICAgc3NjX2FjdGl2ZUVsZW1lbnQgPSBlO1xyXG4gICAgc3NjX2luaXRkb25lID0gdHJ1ZTtcclxuICAgIGlmICh0b3AgIT0gc2VsZikge1xyXG4gICAgICAgIHNzY19mcmFtZSA9IHRydWVcclxuICAgIH0gZWxzZSBpZiAociA+IG4gJiYgKGUub2Zmc2V0SGVpZ2h0IDw9IG4gfHwgdC5vZmZzZXRIZWlnaHQgPD0gbikpIHtcclxuICAgICAgICBzc2Nfcm9vdC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgICAgICBpZiAoc3NjX3Jvb3Qub2Zmc2V0SGVpZ2h0IDw9IG4pIHtcclxuICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpLnN0eWxlLmNsZWFyID0gXCJib3RoXCI7XHJcbiAgICAgICAgICAgIGUuYXBwZW5kQ2hpbGQoaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXNzY19maXhlZGJhY2spIHtcclxuICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICB0LnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJzY3JvbGxcIlxyXG4gICAgfVxyXG4gICAgaWYgKHNzY19rZXlib2FyZHN1cHBvcnQpIHtcclxuICAgICAgICBzc2NfYWRkRXZlbnQoXCJrZXlkb3duXCIsIHNzY19rZXlkb3duKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2Nfc2Nyb2xsQXJyYXkoZSwgdCwgbiwgcikge1xyXG4gICAgciB8fCAociA9IDFlMyk7XHJcbiAgICBzc2NfZGlyZWN0aW9uQ2hlY2sodCwgbik7XHJcbiAgICBzc2NfcXVlLnB1c2goe1xyXG4gICAgICAgIHg6IHQsXHJcbiAgICAgICAgeTogbixcclxuICAgICAgICBsYXN0WDogdCA8IDAgPyAuOTkgOiAtLjk5LFxyXG4gICAgICAgIGxhc3RZOiBuIDwgMCA/IC45OSA6IC0uOTksXHJcbiAgICAgICAgc3RhcnQ6ICsobmV3IERhdGUpXHJcbiAgICB9KTtcclxuICAgIGlmIChzc2NfcGVuZGluZykge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdmFyIGkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHMgPSArKG5ldyBEYXRlKTtcclxuICAgICAgICB2YXIgbyA9IDA7XHJcbiAgICAgICAgdmFyIHUgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgc3NjX3F1ZS5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgICB2YXIgZiA9IHNzY19xdWVbYV07XHJcbiAgICAgICAgICAgIHZhciBsID0gcyAtIGYuc3RhcnQ7XHJcbiAgICAgICAgICAgIHZhciBjID0gbCA+PSBzc2NfYW5pbXRpbWU7XHJcbiAgICAgICAgICAgIHZhciBoID0gYyA/IDEgOiBsIC8gc3NjX2FuaW10aW1lO1xyXG4gICAgICAgICAgICBpZiAoc3NjX3B1bHNlQWxnb3JpdGhtKSB7XHJcbiAgICAgICAgICAgICAgICBoID0gc3NjX3B1bHNlKGgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHAgPSBmLnggKiBoIC0gZi5sYXN0WCA+PiAwO1xyXG4gICAgICAgICAgICB2YXIgZCA9IGYueSAqIGggLSBmLmxhc3RZID4+IDA7XHJcbiAgICAgICAgICAgIG8gKz0gcDtcclxuICAgICAgICAgICAgdSArPSBkO1xyXG4gICAgICAgICAgICBmLmxhc3RYICs9IHA7XHJcbiAgICAgICAgICAgIGYubGFzdFkgKz0gZDtcclxuICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgIHNzY19xdWUuc3BsaWNlKGEsIDEpO1xyXG4gICAgICAgICAgICAgICAgYS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgdmFyIHYgPSBlLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIGUuc2Nyb2xsTGVmdCArPSBvO1xyXG4gICAgICAgICAgICBpZiAobyAmJiBlLnNjcm9sbExlZnQgPT09IHYpIHtcclxuICAgICAgICAgICAgICAgIHQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgdmFyIG0gPSBlLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgZS5zY3JvbGxUb3AgKz0gdTtcclxuICAgICAgICAgICAgaWYgKHUgJiYgZS5zY3JvbGxUb3AgPT09IG0pIHtcclxuICAgICAgICAgICAgICAgIG4gPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0ICYmICFuKSB7XHJcbiAgICAgICAgICAgIHNzY19xdWUgPSBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3NjX3F1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChpLCByIC8gc3NjX2ZyYW1lcmF0ZSArIDEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3NjX3BlbmRpbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBzZXRUaW1lb3V0KGksIDApO1xyXG4gICAgc3NjX3BlbmRpbmcgPSB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY193aGVlbChlKSB7XHJcbiAgICBpZiAoIXNzY19pbml0ZG9uZSkge1xyXG4gICAgICAgIHNzY19pbml0KClcclxuICAgIH1cclxuICAgIHZhciB0ID0gZS50YXJnZXQ7XHJcbiAgICB2YXIgbiA9IHNzY19vdmVyZmxvd2luZ0FuY2VzdG9yKHQpO1xyXG4gICAgaWYgKCFuIHx8IGUuZGVmYXVsdFByZXZlbnRlZCB8fCBzc2NfaXNOb2RlTmFtZShzc2NfYWN0aXZlRWxlbWVudCwgXCJlbWJlZFwiKSB8fCBzc2NfaXNOb2RlTmFtZSh0LCBcImVtYmVkXCIpICYmIC9cXC5wZGYvaS50ZXN0KHQuc3JjKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB2YXIgciA9IGUud2hlZWxEZWx0YVggfHwgMDtcclxuICAgIHZhciBpID0gZS53aGVlbERlbHRhWSB8fCAwO1xyXG4gICAgaWYgKCFyICYmICFpKSB7XHJcbiAgICAgICAgaSA9IGUud2hlZWxEZWx0YSB8fCAwXHJcbiAgICB9XHJcbiAgICBpZiAoTWF0aC5hYnMocikgPiAxLjIpIHtcclxuICAgICAgICByICo9IHNzY19zdGVwc2l6ZSAvIDEyMFxyXG4gICAgfVxyXG4gICAgaWYgKE1hdGguYWJzKGkpID4gMS4yKSB7XHJcbiAgICAgICAgaSAqPSBzc2Nfc3RlcHNpemUgLyAxMjBcclxuICAgIH1cclxuICAgIHNzY19zY3JvbGxBcnJheShuLCAtciwgLWkpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19rZXlkb3duKGUpIHtcclxuICAgIHZhciB0ID0gZS50YXJnZXQ7XHJcbiAgICB2YXIgbiA9IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLm1ldGFLZXk7XHJcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhfGVtYmVkL2kudGVzdCh0Lm5vZGVOYW1lKSB8fCB0LmlzQ29udGVudEVkaXRhYmxlIHx8IGUuZGVmYXVsdFByZXZlbnRlZCB8fCBuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmIChzc2NfaXNOb2RlTmFtZSh0LCBcImJ1dHRvblwiKSAmJiBlLmtleUNvZGUgPT09IHNzY19rZXkuc3BhY2ViYXIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdmFyIHIsIGkgPSAwLFxyXG4gICAgICAgIHMgPSAwO1xyXG4gICAgdmFyIG8gPSBzc2Nfb3ZlcmZsb3dpbmdBbmNlc3Rvcihzc2NfYWN0aXZlRWxlbWVudCk7XHJcbiAgICB2YXIgdSA9IG8uY2xpZW50SGVpZ2h0O1xyXG4gICAgaWYgKG8gPT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIHUgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICBjYXNlIHNzY19rZXkudXA6XHJcbiAgICAgICAgcyA9IC1zc2NfYXJyb3dzY3JvbGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkuZG93bjpcclxuICAgICAgICBzID0gc3NjX2Fycm93c2Nyb2xsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LnNwYWNlYmFyOlxyXG4gICAgICAgIHIgPSBlLnNoaWZ0S2V5ID8gMSA6IC0xO1xyXG4gICAgICAgIHMgPSAtciAqIHUgKiAuOTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5wYWdldXA6XHJcbiAgICAgICAgcyA9IC11ICogLjk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkucGFnZWRvd246XHJcbiAgICAgICAgcyA9IHUgKiAuOTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5ob21lOlxyXG4gICAgICAgIHMgPSAtby5zY3JvbGxUb3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkuZW5kOlxyXG4gICAgICAgIHZhciBhID0gby5zY3JvbGxIZWlnaHQgLSBvLnNjcm9sbFRvcCAtIHU7XHJcbiAgICAgICAgcyA9IGEgPiAwID8gYSArIDEwIDogMDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5sZWZ0OlxyXG4gICAgICAgIGkgPSAtc3NjX2Fycm93c2Nyb2xsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LnJpZ2h0OlxyXG4gICAgICAgIGkgPSBzc2NfYXJyb3dzY3JvbGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBzc2Nfc2Nyb2xsQXJyYXkobywgaSwgcyk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX21vdXNlZG93bihlKSB7XHJcbiAgICBzc2NfYWN0aXZlRWxlbWVudCA9IGUudGFyZ2V0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19zZXRDYWNoZShlLCB0KSB7XHJcbiAgICBmb3IgKHZhciBuID0gZS5sZW5ndGg7IG4tLTspIHNzY19jYWNoZVtzc2NfdW5pcXVlSUQoZVtuXSldID0gdDtcclxuICAgIHJldHVybiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19vdmVyZmxvd2luZ0FuY2VzdG9yKGUpIHtcclxuICAgIHZhciB0ID0gW107XHJcbiAgICB2YXIgbiA9IHNzY19yb290LnNjcm9sbEhlaWdodDtcclxuICAgIGRvIHtcclxuICAgICAgICB2YXIgciA9IHNzY19jYWNoZVtzc2NfdW5pcXVlSUQoZSldO1xyXG4gICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzc2Nfc2V0Q2FjaGUodCwgcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wdXNoKGUpO1xyXG4gICAgICAgIGlmIChuID09PSBlLnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoIXNzY19mcmFtZSB8fCBzc2Nfcm9vdC5jbGllbnRIZWlnaHQgKyAxMCA8IG4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzc2Nfc2V0Q2FjaGUodCwgZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5jbGllbnRIZWlnaHQgKyAxMCA8IGUuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93ID0gZ2V0Q29tcHV0ZWRTdHlsZShlLCBcIlwiKS5nZXRQcm9wZXJ0eVZhbHVlKFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgICAgIGlmIChvdmVyZmxvdyA9PT0gXCJzY3JvbGxcIiB8fCBvdmVyZmxvdyA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzc2Nfc2V0Q2FjaGUodCwgZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gd2hpbGUgKGUgPSBlLnBhcmVudE5vZGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19hZGRFdmVudChlLCB0LCBuKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLCB0LCBuIHx8IGZhbHNlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfcmVtb3ZlRXZlbnQoZSwgdCwgbikge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdCwgbiB8fCBmYWxzZSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX2lzTm9kZU5hbWUoZSwgdCkge1xyXG4gICAgcmV0dXJuIGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdC50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19kaXJlY3Rpb25DaGVjayhlLCB0KSB7XHJcbiAgICBlID0gZSA+IDAgPyAxIDogLTE7XHJcbiAgICB0ID0gdCA+IDAgPyAxIDogLTE7XHJcbiAgICBpZiAoc3NjX2RpcmVjdGlvbi54ICE9PSBlIHx8IHNzY19kaXJlY3Rpb24ueSAhPT0gdCkge1xyXG4gICAgICAgIHNzY19kaXJlY3Rpb24ueCA9IGU7XHJcbiAgICAgICAgc3NjX2RpcmVjdGlvbi55ID0gdDtcclxuICAgICAgICBzc2NfcXVlID0gW11cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX3B1bHNlXyhlKSB7XHJcbiAgICB2YXIgdCwgbiwgcjtcclxuICAgIGUgPSBlICogc3NjX3B1bHNlU2NhbGU7XHJcbiAgICBpZiAoZSA8IDEpIHtcclxuICAgICAgICB0ID0gZSAtICgxIC0gTWF0aC5leHAoLWUpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuID0gTWF0aC5leHAoLTEpO1xyXG4gICAgICAgIGUgLT0gMTtcclxuICAgICAgICByID0gMSAtIE1hdGguZXhwKC1lKTtcclxuICAgICAgICB0ID0gbiArIHIgKiAoMSAtIG4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdCAqIHNzY19wdWxzZU5vcm1hbGl6ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfcHVsc2UoZSkge1xyXG4gICAgaWYgKGUgPj0gMSkgcmV0dXJuIDE7XHJcbiAgICBpZiAoZSA8PSAwKSByZXR1cm4gMDtcclxuICAgIGlmIChzc2NfcHVsc2VOb3JtYWxpemUgPT0gMSkge1xyXG4gICAgICAgIHNzY19wdWxzZU5vcm1hbGl6ZSAvPSBzc2NfcHVsc2VfKDEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3NjX3B1bHNlXyhlKVxyXG59XHJcblxyXG52YXIgc3NjX2ZyYW1lcmF0ZSA9IDE1MDtcclxudmFyIHNzY19hbmltdGltZSA9IDUwMDtcclxudmFyIHNzY19zdGVwc2l6ZSA9IDE1MDtcclxudmFyIHNzY19wdWxzZUFsZ29yaXRobSA9IHRydWU7XHJcbnZhciBzc2NfcHVsc2VTY2FsZSA9IDY7XHJcbnZhciBzc2NfcHVsc2VOb3JtYWxpemUgPSAxO1xyXG52YXIgc3NjX2tleWJvYXJkc3VwcG9ydCA9IHRydWU7XHJcbnZhciBzc2NfYXJyb3dzY3JvbGwgPSA1MDtcclxudmFyIHNzY19mcmFtZSA9IGZhbHNlO1xyXG52YXIgc3NjX2RpcmVjdGlvbiA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwXHJcbn07XHJcblxyXG52YXIgc3NjX2luaXRkb25lID0gZmFsc2U7XHJcbnZhciBzc2NfZml4ZWRiYWNrID0gdHJ1ZTtcclxudmFyIHNzY19yb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG52YXIgc3NjX2FjdGl2ZUVsZW1lbnQ7XHJcbnZhciBzc2Nfa2V5ID0ge1xyXG4gICAgbGVmdDogMzcsXHJcbiAgICB1cDogMzgsXHJcbiAgICByaWdodDogMzksXHJcbiAgICBkb3duOiA0MCxcclxuICAgIHNwYWNlYmFyOiAzMixcclxuICAgIHBhZ2V1cDogMzMsXHJcbiAgICBwYWdlZG93bjogMzQsXHJcbiAgICBlbmQ6IDM1LFxyXG4gICAgaG9tZTogMzZcclxufTtcclxuXHJcbnZhciBzc2NfcXVlID0gW107XHJcbnZhciBzc2NfcGVuZGluZyA9IGZhbHNlO1xyXG52YXIgc3NjX2NhY2hlID0ge307XHJcblxyXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICBzc2NfY2FjaGUgPSB7fVxyXG59LCAxMCAqIDFlMyk7XHJcblxyXG52YXIgc3NjX3VuaXF1ZUlEID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGUgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHQuc3NjX3VuaXF1ZUlEIHx8ICh0LnNzY191bmlxdWVJRCA9IGUrKylcclxuICAgIH1cclxufSgpO1xyXG5cclxudmFyIGlzY2hyb21lID0gL2Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuaWYgKGlzY2hyb21lKSB7XHJcbiAgICBzc2NfYWRkRXZlbnQoXCJtb3VzZWRvd25cIiwgc3NjX21vdXNlZG93bik7XHJcbiAgICBzc2NfYWRkRXZlbnQoXCJtb3VzZXdoZWVsXCIsIHNzY193aGVlbCk7XHJcbiAgICBzc2NfYWRkRXZlbnQoXCJsb2FkXCIsIHNzY19pbml0KVxyXG59IiwiLyohIFdPVyAtIHYwLjEuNCAtIDIwMTQtMDItMTJcclxuKiBDb3B5cmlnaHQgKGMpIDIwMTQgTWF0dGhpZXUgQXVzc2FndWVsOyBMaWNlbnNlZCBNSVQgKi8oZnVuY3Rpb24oKXt2YXIgYSxiPVtdLnNsaWNlLGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fTthPWZ1bmN0aW9uKCl7dmFyIGMsZCxlLGYsZyxoLGksaixrO2ZvcihlPWFyZ3VtZW50c1swXSxjPTI8PWFyZ3VtZW50cy5sZW5ndGg/Yi5jYWxsKGFyZ3VtZW50cywxKTpbXSxnPWV8fHt9LGk9MCxqPWMubGVuZ3RoO2o+aTtpKyspe2Y9Y1tpXSxrPWZ8fHt9O2ZvcihkIGluIGspaD1rW2RdLFwib2JqZWN0XCI9PXR5cGVvZiBnW2RdP2dbZF09YShnW2RdLGgpOmdbZF18fChnW2RdPWgpfXJldHVybiBnfSx0aGlzLldPVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7bnVsbD09YiYmKGI9e30pLHRoaXMuc2Nyb2xsQ2FsbGJhY2s9Yyh0aGlzLnNjcm9sbENhbGxiYWNrLHRoaXMpLHRoaXMuc2Nyb2xsSGFuZGxlcj1jKHRoaXMuc2Nyb2xsSGFuZGxlcix0aGlzKSx0aGlzLnN0YXJ0PWModGhpcy5zdGFydCx0aGlzKSx0aGlzLmNvbmZpZz1hKGIsdGhpcy5kZWZhdWx0cyksdGhpcy5zY3JvbGxlZD0hMH1yZXR1cm4gYi5wcm90b3R5cGUuZGVmYXVsdHM9e2JveENsYXNzOlwid293XCIsYW5pbWF0ZUNsYXNzOlwiYW5pbWF0ZWRcIixvZmZzZXQ6MH0sYi5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBhO3JldHVyblwiaW50ZXJhY3RpdmVcIj09PShhPWRvY3VtZW50LnJlYWR5U3RhdGUpfHxcImNvbXBsZXRlXCI9PT1hP3RoaXMuc3RhcnQoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLHRoaXMuc3RhcnQpfSxiLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkO2lmKHRoaXMuZWxlbWVudD13aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHRoaXMuYm94ZXM9dGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5jb25maWcuYm94Q2xhc3MpLHRoaXMuYm94ZXMubGVuZ3RoKXtmb3IoZD10aGlzLmJveGVzLGI9MCxjPWQubGVuZ3RoO2M+YjtiKyspYT1kW2JdLHRoaXMuYXBwbHlTdHlsZShhLCEwKTtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLnNjcm9sbEhhbmRsZXIsITEpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyLCExKSx0aGlzLmludGVydmFsPXNldEludGVydmFsKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssNTApfX0sYi5wcm90b3R5cGUuc3RvcD1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciwhMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnNjcm9sbEhhbmRsZXIsITEpLG51bGwhPXRoaXMuaW50ZXJ2YWw/Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTp2b2lkIDB9LGIucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYXBwbHlTdHlsZShhKSxhLmNsYXNzTmFtZT1cIlwiK2EuY2xhc3NOYW1lK1wiIFwiK3RoaXMuY29uZmlnLmFuaW1hdGVDbGFzc30sYi5wcm90b3R5cGUuYXBwbHlTdHlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtyZXR1cm4gZD1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWR1cmF0aW9uXCIpLGM9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1kZWxheVwiKSxlPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctaXRlcmF0aW9uXCIpLGEuc2V0QXR0cmlidXRlKFwic3R5bGVcIix0aGlzLmN1c3RvbVN0eWxlKGIsZCxjLGUpKX0sYi5wcm90b3R5cGUuY3VzdG9tU3R5bGU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU7cmV0dXJuIGU9YT9cInZpc2liaWxpdHk6IGhpZGRlbjsgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbm9uZTsgLW1vei1hbmltYXRpb24tbmFtZTogbm9uZTsgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XCI6XCJ2aXNpYmlsaXR5OiB2aXNpYmxlO1wiLGImJihlKz1cIi13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBcIitiK1wiOyAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogXCIrYitcIjsgYW5pbWF0aW9uLWR1cmF0aW9uOiBcIitiK1wiO1wiKSxjJiYoZSs9XCItd2Via2l0LWFuaW1hdGlvbi1kZWxheTogXCIrYytcIjsgLW1vei1hbmltYXRpb24tZGVsYXk6IFwiK2MrXCI7IGFuaW1hdGlvbi1kZWxheTogXCIrYytcIjtcIiksZCYmKGUrPVwiLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBcIitkK1wiOyAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IFwiK2QrXCI7IGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IFwiK2QrXCI7XCIpLGV9LGIucHJvdG90eXBlLnNjcm9sbEhhbmRsZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY3JvbGxlZD0hMH0sYi5wcm90b3R5cGUuc2Nyb2xsQ2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5zY3JvbGxlZCYmKHRoaXMuc2Nyb2xsZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBiLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWE9ZFtiXSxhJiYodGhpcy5pc1Zpc2libGUoYSk/dGhpcy5zaG93KGEpOmUucHVzaChhKSk7cmV0dXJuIGV9LmNhbGwodGhpcyksIXRoaXMuYm94ZXMubGVuZ3RoKT90aGlzLnN0b3AoKTp2b2lkIDB9LGIucHJvdG90eXBlLm9mZnNldFRvcD1mdW5jdGlvbihhKXt2YXIgYjtmb3IoYj1hLm9mZnNldFRvcDthPWEub2Zmc2V0UGFyZW50OyliKz1hLm9mZnNldFRvcDtyZXR1cm4gYn0sYi5wcm90b3R5cGUuaXNWaXNpYmxlPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7cmV0dXJuIGM9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1vZmZzZXRcIil8fHRoaXMuY29uZmlnLm9mZnNldCxmPXdpbmRvdy5wYWdlWU9mZnNldCxlPWYrdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodC1jLGQ9dGhpcy5vZmZzZXRUb3AoYSksYj1kK2EuY2xpZW50SGVpZ2h0LGU+PWQmJmI+PWZ9LGJ9KCl9KS5jYWxsKHRoaXMpOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgQkFDS0dST1VORCBTTElERVIgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiQudmVnYXMoJ3NsaWRlc2hvdycsIHtcclxuICBkZWxheTo3MDAwLFxyXG4gIGJhY2tncm91bmRzOltcclxuICAgIHsgc3JjOidpbWFnZXMvYmFja2dyb3VuZHMvYmcxLmpwZycsIGZhZGU6MTAwMCB9LFxyXG4gICAgeyBzcmM6J2ltYWdlcy9iYWNrZ3JvdW5kcy9iZzIuanBnJywgZmFkZToxMDAwIH0sXHJcbiAgICB7IHNyYzonaW1hZ2VzL2JhY2tncm91bmRzL2JnMy5qcGcnLCBmYWRlOjEwMDAgfVxyXG4gIF1cclxufSk7XHJcbiAgICAgIFxyXG4gICBcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIExPQURFUiAgICAgICAgICAgICAgICAgICAgIFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vLyBtYWtlcyBzdXJlIHRoZSB3aG9sZSBzaXRlIGlzIGxvYWRlZFxyXG5qUXVlcnkod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIHdpbGwgZmlyc3QgZmFkZSBvdXQgdGhlIGxvYWRpbmcgYW5pbWF0aW9uXHJcblx0alF1ZXJ5KFwiLnN0YXR1c1wiKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgLy8gd2lsbCBmYWRlIG91dCB0aGUgd2hvbGUgRElWIHRoYXQgY292ZXJzIHRoZSB3ZWJzaXRlLlxyXG5cdGpRdWVyeShcIi5wcmVsb2FkZXJcIikuZGVsYXkoMTAwMCkuZmFkZU91dChcInNsb3dcIik7XHJcbn0pXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgQm9vdHN0cmFwIEZpeCAgICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5pZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGVcXC8xMFxcLjAvKSkge1xyXG4gIHZhciBtc1ZpZXdwb3J0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcbiAgbXNWaWV3cG9ydFN0eWxlLmFwcGVuZENoaWxkKFxyXG4gICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcbiAgICAgICdALW1zLXZpZXdwb3J0e3dpZHRoOmF1dG8haW1wb3J0YW50fSdcclxuICAgIClcclxuICApXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKG1zVmlld3BvcnRTdHlsZSlcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgU1RJQ0tZIE5BViAgICAgICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgJCgnLm1haW4tbmF2LWxpc3QnKS5vbmVQYWdlTmF2KHtcclxuICAgIGNoYW5nZUhhc2g6IHRydWUsXHJcbiAgICBzY3JvbGxTcGVlZDogNzUwLFxyXG4gICAgc2Nyb2xsVGhyZXNob2xkOiAwLjUsXHJcbiAgICBmaWx0ZXI6ICc6bm90KC5leHRlcm5hbCknXHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gU3RpY2t5IEhlYWRlciAtIGh0dHA6Ly9qcXVlcnlmb3JkZXNpZ25lcnMuY29tL2ZpeGVkLWZsb2F0aW5nLWVsZW1lbnRzLyAgICAgICAgIFxyXG4gIHZhciB0b3AgPSAkKCcjbWFpbi1uYXYnKS5vZmZzZXQoKS50b3AgLSBwYXJzZUZsb2F0KCQoJyNtYWluLW5hdicpLmNzcygnbWFyZ2luLXRvcCcpLnJlcGxhY2UoL2F1dG8vLCAwKSk7XHJcbiAgXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIHdoYXQgdGhlIHkgcG9zaXRpb24gb2YgdGhlIHNjcm9sbCBpc1xyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgXHJcbiAgICAvLyB3aGV0aGVyIHRoYXQncyBiZWxvdyB0aGUgZm9ybVxyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIC8vIGlmIHNvLCBhZCB0aGUgZml4ZWQgY2xhc3NcclxuICAgICAgJCgnI21haW4tbmF2JykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBvdGhlcndpc2UgcmVtb3ZlIGl0XHJcbiAgICAgICQoJyNtYWluLW5hdicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG59KTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qICBTTU9PVEggU0NST0xMIEZSTyBJTlRFUk5BTCAjSEFTSCBMSU5LU1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdhW2hyZWZePVwiI1wiXS5pbnBhZ2Utc2Nyb2xsLCAuaW5wYWdlLXNjcm9sbCBhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmhhc2gsXHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKHRhcmdldCk7XHJcbiAgICAgICAgJCgnLm1haW4tbmF2aWdhdGlvbiBhW2hyZWY9XCInICsgdGFyZ2V0ICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcubWFpbi1uYXZpZ2F0aW9uIGE6bm90KFtocmVmPVwiJyArIHRhcmdldCArICdcIl0pJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICdzY3JvbGxUb3AnOiAoJHRhcmdldC5vZmZzZXQoKSkgPyAkdGFyZ2V0Lm9mZnNldCgpLnRvcCA6IDBcclxuICAgICAgICB9LCA5MDAsICdzd2luZycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgT1dMIENST1VTRUwgICAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG93bCA9ICQoXCIjY2xpZW50LWZlZWRiYWNrc1wiKTtcclxuICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBpdGVtcyA6IDMsIC8vMTAgaXRlbXMgYWJvdmUgMTAwMHB4IGJyb3dzZXIgd2lkdGhcclxuICAgICAgaXRlbXNEZXNrdG9wIDogWzEwMDAsMl0sIC8vNSBpdGVtcyBiZXR3ZWVuIDEwMDBweCBhbmQgOTAxcHhcclxuICAgICAgaXRlbXNEZXNrdG9wU21hbGwgOiBbOTAwLDFdLCAvLyBiZXR3ZWVtIDkwMHB4IGFuZCA2MDFweFxyXG4gICAgICBpdGVtc1RhYmxldDogWzYwMCwxXSwgLy8yIGl0ZW1zIGJldHdlZW4gNjAwIGFuZCAwXHJcbiAgICAgIGl0ZW1zTW9iaWxlIDogZmFsc2UgLy8gaXRlbXNNb2JpbGUgZGlzYWJsZWQgLSBpbmhlcml0IGZyb20gaXRlbXNUYWJsZXQgb3B0aW9uXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgU01PT1RIIFNDUk9MTCAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbnZhciBzY3JvbGxBbmltYXRpb25UaW1lID0gMTIwMCxcclxuICAgICAgICBzY3JvbGxBbmltYXRpb24gPSAnZWFzZUluT3V0RXhwbyc7XHJcbiAgICAkKCdhLnNjcm9sbHRvJykuYmluZCgnY2xpY2suc21vb3Roc2Nyb2xsJyxmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmhhc2g7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LCBzY3JvbGxBbmltYXRpb25UaW1lLCBzY3JvbGxBbmltYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0YXJnZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgICBcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBDT05UQUNUIEZPUk0gICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuJChcIiNjb250YWN0LWZvcm1cIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgbmFtZSA9ICQoXCIjbmFtZVwiKS52YWwoKTtcclxuICAgIHZhciBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XHJcbiAgICB2YXIgc3ViamVjdCA9ICQoXCIjc3ViamVjdFwiKS52YWwoKTtcclxuICAgIHZhciBtZXNzYWdlID0gJChcIiNtZXNzYWdlXCIpLnZhbCgpO1xyXG4gICAgdmFyIGRhdGFTdHJpbmcgPSAnbmFtZT0nICsgbmFtZSArICcmZW1haWw9JyArIGVtYWlsICsgJyZzdWJqZWN0PScgKyBzdWJqZWN0ICsgJyZtZXNzYWdlPScgKyBtZXNzYWdlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbEFkZHJlc3MpIHtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuPyQvaSk7XHJcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbEFkZHJlc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXNWYWxpZEVtYWlsKGVtYWlsKSAmJiAobWVzc2FnZS5sZW5ndGggPiAxKSAmJiAobmFtZS5sZW5ndGggPiAxKSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwic2VuZG1haWwucGhwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zdWNjZXNzJykuZmFkZUluKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgJCgnLmVycm9yJykuZmFkZU91dCg1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5lcnJvcicpLmZhZGVJbigxMDAwKTtcclxuICAgICAgICAkKCcuc3VjY2VzcycpLmZhZGVPdXQoNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pO1xyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgUFJPSkVDVCBMT0FESU5HICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbiAgICAkKCcubW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSArICcgLnNpbmdsZS1wcm9qZWN0JyxcclxuICAgICAgICAgICAgcG9ydGZvbGlvTGlzdCA9ICQoJyNwb3J0Zm9saW8tbGlzdCcpLFxyXG4gICAgICAgICAgICBjb250ZW50ID0gJCgnI2xvYWRlZC1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIHBvcnRmb2xpb0xpc3QuYW5pbWF0ZSh7J21hcmdpbkxlZnQnOictMTIwJSd9LHtkdXJhdGlvbjo0MDAscXVldWU6ZmFsc2V9KTtcclxuICAgICAgICBwb3J0Zm9saW9MaXN0LmZhZGVPdXQoNDAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ICQoJyNsb2FkZXInKS5zaG93KCk7IH0sNDAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubG9hZChocmVmLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJyNsb2FkZWQtY29udGVudCBtZXRhJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbG9hZGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5mYWRlSW4oNjAwKTtcclxuICAgICAgICAgICAgICAgICQoJyNiYWNrLWJ1dHRvbicpLmZhZGVJbig2MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LDgwMCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2JhY2stYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgcG9ydGZvbGlvTGlzdCA9ICQoJyNwb3J0Zm9saW8tbGlzdCcpXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSAkKCcjbG9hZGVkLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgY29udGVudC5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgJCgnI2JhY2stYnV0dG9uJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcG9ydGZvbGlvTGlzdC5hbmltYXRlKHsnbWFyZ2luTGVmdCc6JzAnfSx7ZHVyYXRpb246NDAwLHF1ZXVlOmZhbHNlfSk7XHJcbiAgICAgICAgICAgIHBvcnRmb2xpb0xpc3QuZmFkZUluKDYwMCk7XHJcbiAgICAgICAgfSw4MDApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBQQVJBTExBWCAgICAgICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgJCgnZGl2W2RhdGEtdHlwZT1cImJhY2tncm91bmRcIl0sIGhlYWRlcltkYXRhLXR5cGU9XCJiYWNrZ3JvdW5kXCJdLCBzZWN0aW9uW2RhdGEtdHlwZT1cImJhY2tncm91bmRcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgJGJnb2JqID0gJCh0aGlzKTtcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB5UG9zID0gLSgkd2luZG93LnNjcm9sbFRvcCgpIC8gJGJnb2JqLmRhdGEoJ3NwZWVkJykpO1xyXG4gICAgICB2YXIgY29vcmRzID0gJzUwJSAnKyB5UG9zICsgJ3B4JztcclxuICAgICAgJGJnb2JqLmNzcyh7IFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogY29vcmRzIFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgS05PQiAgICAgICAgICAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4kKFwiLnNraWxsMVwiKS5rbm9iKHtcclxuICAgICAgICAgICAgICAgICdtYXgnOjEwMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6IDY0LFxyXG4gICAgICAgICAgICAgICAgJ3JlYWRPbmx5Jzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0Q29sb3InOicgI0ZGRkZGRiAnLFxyXG4gICAgICAgICAgICAgICAgJ2JnQ29sb3InOicgIzIyMjIyMiAnLFxyXG4gICAgICAgICAgICAgICAgJ2ZnQ29sb3InOicgI2U5NjY1NiAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuJChcIi5za2lsbDJcIikua25vYih7XHJcbiAgICAgICAgICAgICAgICAnbWF4JzoxMDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiA2NCxcclxuICAgICAgICAgICAgICAgICdyZWFkT25seSc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dENvbG9yJzonICNGRkZGRkYgJyxcclxuICAgICAgICAgICAgICAgICdiZ0NvbG9yJzonICMyMjIyMjIgJyxcclxuICAgICAgICAgICAgICAgICdmZ0NvbG9yJzonICMzNGQyOTMgJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgJChcIi5za2lsbDNcIikua25vYih7XHJcbiAgICAgICAgICAgICAgICAnbWF4JzogMTAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogNjQsXHJcbiAgICAgICAgICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0Q29sb3InOicgI0ZGRkZGRiAnLFxyXG4gICAgICAgICAgICAgICAgJ2JnQ29sb3InOicgIzIyMjIyMiAnLFxyXG4gICAgICAgICAgICAgICAgJ2ZnQ29sb3InOicgIzNhYjBlMiAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAkKFwiLnNraWxsNFwiKS5rbm9iKHtcclxuICAgICAgICAgICAgICAgICdtYXgnOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiA2NCxcclxuICAgICAgICAgICAgICAgICdyZWFkT25seSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXRDb2xvcic6JyAjRkZGRkZGICcsXHJcbiAgICAgICAgICAgICAgICAnYmdDb2xvcic6JyAjMjIyMjIyICcsXHJcbiAgICAgICAgICAgICAgICAnZmdDb2xvcic6JyAjRTdBQzQ0ICdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgV09XIEFOSU1BVElPTiAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBhYm91dC5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2Fib3V0Q29udHJvbGxlcicsIFtcclxuICAgICAgICAgICAgJyRzY29wZScsICckcm9vdFNjb3BlJywgXHJcbiAgICBmdW5jdGlvbigkc2NvcGUsICAgJHJvb3RTY29wZSl7XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnYWJvdXRDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICBcclxuICAgICAgICAkcm9vdFNjb3BlLmNsZWFybWVudWNsYXNzID0gZmFsc2U7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gWydhYm91dCcsICd3ZWJzaXRlJywgJ2NvbnRhY3QnXTtcclxuXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnYWJvdXRDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIGFib3V0LmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGNhbGVuZGFyLmNvbnRyb2xsZXIuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuYXBwQ29udHJvbGxlcnMuY29udHJvbGxlcignY2FsZW5kYXJDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnY2FsZW5kYXJDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgJHNjb3BlLnVpQ29uZmlnID0ge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogNDUwLFxyXG4gICAgICAgICAgICBlZGl0YWJsZSAgICA6IHRydWUsXHJcbiAgICAgICAgICAgIGhlYWRlciAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgbGVmdCAgICA6ICdtb250aCBiYXNpY1dlZWsgYmFzaWNEYXkgYWdlbmRhV2VlayBhZ2VuZGFEYXknLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyICA6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodCAgIDogJ3RvZGF5IHByZXYsbmV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF5Q2xpY2sgICAgOiAkc2NvcGUuYWxlcnRFdmVudE9uQ2xpY2ssXHJcbiAgICAgICAgICAgIGV2ZW50RHJvcCAgIDogJHNjb3BlLmFsZXJ0T25Ecm9wLFxyXG4gICAgICAgICAgICBldmVudFJlc2l6ZSA6ICRzY29wZS5hbGVydE9uUmVzaXplXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG59XSk7XHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdjYWxlbmRhckNvbnRyb2xsZXInKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gY2FsZW5kYXIuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogY2l0YXRpb25zLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2NpdGF0aW9uc0NvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsICckaHR0cCcsICckaW50ZXJ2YWwnLCAnJGFuaW1hdGUnLCAndWlHcmlkQ29uc3RhbnRzJyxcclxuICAgIGZ1bmN0aW9uKCRzY29wZSwgICAkcm9vdFNjb3BlLCAgICRodHRwLCAgICRpbnRlcnZhbCwgICAkYW5pbWF0ZSwgICB1aUdyaWRDb25zdGFudHMgICl7XHJcblxyXG4gICAgICAgIGRlYnVnPXRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdjaXRhdGlvbnNDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIGNpdGF0aW9ucyBjb2xsZWN0aW9uXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJHJvb3RTY29wZS5lbmRQb2ludCArICcvanNvbi9jaXRhdGlvbnMuanNvbic7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJGh0dHAuZ2V0KHBhdGgpXHJcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNpdGF0aW9ucyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY2l0YXRpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJGh0dHAgZ2V0IGVycm9yOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZSggJHNjb3BlLmNpdGF0aW9ucyA9PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRGF0ZSgpKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyB1aS1ib290c3RyYXAuZ3JpZCBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlwbGF5TmFtZTogJ0lEJyxcclxuICAgICAgICAgICAgICAgICAgICBjZWxsQWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ2VsbEVkaXQ6IGZhbHNlIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXBsYXlOYW1lOiAnUGhvdG8gTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2VsbFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInVpLWdyaWQtZm9vdGVyXCI+VXBwZXIgTGltaXRzOjwvZGl2PidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdocmVmJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0aHVtYm5haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2hvZmZzZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndm9mZnNldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdkYXRlVGFrZW4nLCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGF0ZVRha2VuJywgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEYXRlIFRha2VuJywgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUNvbHVtblJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjZWxsRmlsdGVyOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2VsbEZpbHRlcjogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB1aUdyaWRDb25zdGFudHMuZmlsdGVyLkdSRUFURVJfVEhBTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB1aUdyaWRDb25zdGFudHMuZmlsdGVyLkxFU1NfVEhBTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRpb25UeXBlOiB1aUdyaWRDb25zdGFudHMuYWdncmVnYXRpb25UeXBlcy5tYXgsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0aW9uSGlkZUxhYmVsOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3NpemUnLCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2l6ZScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRmlsZSBTaXplJywgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ29sdW1uUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0aW9uVHlwZTogdWlHcmlkQ29uc3RhbnRzLmFnZ3JlZ2F0aW9uVHlwZXMubWF4LCBcclxuICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGlvbkhpZGVMYWJlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFncycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEZXNjcmlwdGl2ZSBUYWdzJyxcclxuICAgICAgICAgICAgICAgICAgICBjZWxsQWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdoaWxpZ2h0JywgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpbGlnaHQnLCBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0gnLCBcclxuICAgICAgICAgICAgICAgICAgICBjZWxsQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ29sdW1uUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB1aUdyaWRDb25zdGFudHMuZmlsdGVyLlNFTEVDVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJzAnLCBsYWJlbDogJ0dyaWQgT25seScgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnMScsIGxhYmVsOiAnQ2Fyb3VzZWwnIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24oIGdyaWRBcGkgKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZDFBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMucm93SWRlbnRpdHkgPSBmdW5jdGlvbihyb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdy5pZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5nZXRSb3dJZGVudGl0eSA9IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gcm93LmlkO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEVuZCBvZiBHcmlkIG9wdGlvbnNcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHVuaXF1ZSB0YWdzXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHZhciBhbGxJZHMgPSBtdWx0T2JqQXJyYXkyQXJyYXkoIF8udW5pcShfLnBsdWNrKCRzY29wZS5jaXRhdGlvbnMsICdpZCcpKSApO1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2FsbElkczonKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhhbGxJZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLklkcyA9IChfLnVuaXEoYWxsSWRzKSkuc29ydCgpO1xyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJHNjb3BlLklkczonKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygkc2NvcGUuSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnICAgJHNjb3BlLmNpdGF0aW9ucy5sZW5ndGg9KCcgKyAkc2NvcGUuY2l0YXRpb25zLmxlbmd0aCArICcpJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJyAgICAgICAgIGFsbElkcy5sZW5ndGg9KCcgKyBhbGxJZHMubGVuZ3RoICsgJyknKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJHNjb3BlLklkcy5sZW5ndGg9KCcgKyAkc2NvcGUuSWRzLmxlbmd0aCArICcpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5zaG9ydERhdGUgPSBmdW5jdGlvbihmdWxsRGF0ZSkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gTU0tREQtWVlZWSBmcm9tICBZWVlZLU1NLUREVEhIOk1NOlNTOnNzc1ogZm9ybWF0XHJcbiAgICAgICAgICAgIGZ1bGxEYXRlID0gZnVsbERhdGUgKyAgICAgXCJfX19fX19fX19fX19fX19fX19fX19fX19cIjtcclxuICAgICAgICAgICAgcmV0dXJuIChmdWxsRGF0ZS5zdWJzdHIoNSwyKSsgJy0nICsgZnVsbERhdGUuc3Vic3RyKDgsMikgKyAnLScgKyBmdWxsRGF0ZS5zdWJzdHIoMCw0KSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgICAgICAkc2NvcGUuY2hlY2tlZCA9IGZ1bmN0aW9uKGJvb2xWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKGJvb2xWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbyc7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5zb3J0ID0ge1xyXG4gICAgICAgICAgICBjb2x1bW46ICcnLFxyXG4gICAgICAgICAgICBkZXNjZW5kaW5nOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHNjb3BlLmNoYW5nZVNvcnRpbmcgPSBmdW5jdGlvbihjb2x1bW4pIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzb3J0ID0gJHNjb3BlLnNvcnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc29ydC5jb2x1bW4gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICBzb3J0LmRlc2NlbmRpbmcgPSAhc29ydC5kZXNjZW5kaW5nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc29ydC5jb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBzb3J0LmRlc2NlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnY2l0YXRpb25zQ29udHJvbGxlcicpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBjaXRhdGlvbnMuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogaG9tZS5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgW1xyXG4gICAgICAgICAgICAnJHNjb3BlJywgJyRyb290U2NvcGUnLCBcclxuICAgIGZ1bmN0aW9uKCRzY29wZSwgICAkcm9vdFNjb3BlKXtcclxuXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdob21lQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzIFxyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2luIHZhbHVlcztcclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS51c2VyTmFtZSA9IFwiYmlsbEBtYWludHouY29tXCJcclxuICAgIH1cclxuXSk7XHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdob21lQ29udHJvbGxlcicpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBob21lLmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGhvbWUuY29udHJvbGxlci5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBDb250cm9sbGVycy5jb250cm9sbGVyKCd0ZXN0MUNvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsIFxyXG4gICAgZnVuY3Rpb24oJHNjb3BlLCAgICRyb290U2NvcGUpe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3Rlc3QxQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzIFxyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2luIHZhbHVlcztcclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS51c2VyTmFtZSA9IFwiY2l0aXplbkBjYW5lLmNvbVwiXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndGVzdDFDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QxLmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGhvbWUuY29udHJvbGxlci5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBDb250cm9sbGVycy5jb250cm9sbGVyKCd0ZXN0MUNvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsIFxyXG4gICAgZnVuY3Rpb24oJHNjb3BlLCAgICRyb290U2NvcGUpe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3Rlc3QxQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzIFxyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2luIHZhbHVlcztcclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS51c2VyTmFtZSA9IFwiY2l0aXplbkBjYW5lLmNvbVwiXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndGVzdDFDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QxLmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGhvbWUuY29udHJvbGxlci5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBDb250cm9sbGVycy5jb250cm9sbGVyKCd0ZXN0M0NvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsIFxyXG4gICAgZnVuY3Rpb24oJHNjb3BlLCAgICRyb290U2NvcGUpe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3Rlc3QzQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzIFxyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2luIHZhbHVlcztcclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS51c2VyTmFtZSA9IFwiY2l0aXplbkBjYW5lLmNvbVwiXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndGVzdDNDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QzLmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHVzZXJzLmNvbnRyb2xsZXIuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuYXBwQ29udHJvbGxlcnMuY29udHJvbGxlcigndXNlcnNDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyKSB7XHJcbiAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndXNlcnNDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgICAgICRzY29wZS5zYXZlVXNlciA9IFVzZXIuc2F2ZTtcclxuICAgIFxyXG4gICAgICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKFVzZXIsIHBhc3N3ZCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAkc2NvcGUudXNlck5hbWUgPSBVc2VyO1xyXG4gICAgICAgICAgICBhbGVydChcIkxvZ2luIENvbXBsZXRlZCA6IGxvZ2dlZEluID0gXCIgKyAkc2NvcGUubG9nZ2VkSW4pO1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oVXNlcikge1xyXG4gICAgICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgYWxlcnQoXCJMb2dvdXQgQ29tcGxldGVkIDogbG9nZ2VkSW4gPSBcIiArICRzY29wZS5sb2dnZWRJbik7XHJcbiAgICAgICAgfTtcclxuICAgfSk7XHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCd1c2Vyc0NvbnRyb2xsZXInKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbiAgICBcclxuYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoXCJkdW1iUGFzc3dvcmRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2PlxcbjxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1tb2RlbD0nbW9kZWwuaW5wdXQnPlxcblwiICtcclxuICAgICAgICAgICAgXCI8ZGl2Pnt7bW9kZWwuaW5wdXR9fTwvZGl2PlxcbiAgICBcXG48L2Rpdj5cIixcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChcIm1vZGVsLmlucHV0XCIsIGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSBcInBhc3N3b3JkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuKDEpLnRvZ2dsZUNsYXNzKFwiYWxlcnQtYm94IGFsZXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG4gICAgXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB1c2Vycy5jb250cm9sbGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogZGlyZWN0aXZlcy5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gRGVmaW5lIHlvdXIgZGlyZWN0aXZlcyBoZXJlLiBcclxuLy8gRGlyZWN0aXZlcyBjYW4gYmUgYWRkZWQgdG8gc2FtZSBtb2R1bGUgYXMgdGhlIG1haW4gJ2FwcCcgXHJcbi8vIG9yIGEgc2VwZXJhdGUgbW9kdWxlIGNhbiBiZSBjcmVhdGVkLlxyXG5cclxuYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoXCJwaG90b0ZsaXBcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAvL3RlbXBsYXRlVVJMOiAncGFydGlhbHMvcGhvdG9zL3Bob3RvLnRlc3QuaHRtbCdcclxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2PlxcbjxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1tb2RlbD0nbW9kZWwuaW5wdXQnPlxcblwiICtcclxuICAgICAgICAgICAgXCI8ZGl2Pnt7bW9kZWwuaW5wdXR9fTwvZGl2PlxcbiAgICBcXG48L2Rpdj5cIixcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChcIm1vZGVsLmlucHV0XCIsIGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSBcInBhc3N3b3JkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuKDEpLnRvZ2dsZUNsYXNzKFwiYWxlcnQtYm94IGFsZXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgncGhvdG9GbGlwJykgZGVmaW5lZFwiKTtcclxufSAgICBcclxuXHJcblxyXG4vKipcclxuICogQG5nZG9jIGRpcmVjdGl2ZVxyXG4gKiBAbmFtZSB1aS5ib290c3RyYXAuY2Fyb3VzZWwuZGlyZWN0aXZlOmNhcm91c2VsXHJcbiAqIEByZXN0cmljdCBFQVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2Fyb3VzZWwgaXMgdGhlIG91dGVyIGNvbnRhaW5lciBmb3IgYSBzZXQgb2YgaW1hZ2UgJ3NsaWRlcycgdG8gc2hvd2Nhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyPX0gaW50ZXJ2YWwgVGhlIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCBpdCB3aWxsIHRha2UgXHJcbiAqICAgICB0aGUgY2Fyb3VzZWwgdG8gZ28gdG8gdGhlIG5leHQgc2xpZGUuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiBXaGV0aGVyIHRvIGRpc2FibGUgdHJhbnNpdGlvbnMgb24gdGhlIFxyXG4gKiAgICAgY2Fyb3VzZWwuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vUGF1c2UgV2hldGhlciB0byBkaXNhYmxlIHBhdXNpbmcgb24gdGhlIGNhcm91c2VsIFxyXG4gKiAgICAoYnkgZGVmYXVsdCwgdGhlIGNhcm91c2VsIGludGVydmFsIHBhdXNlcyBvbiBob3ZlcikuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbjxleGFtcGxlIG1vZHVsZT1cInVpLmJvb3RzdHJhcFwiPlxyXG4gIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XHJcbiAgICA8Y2Fyb3VzZWw+XHJcbiAgICAgIDxzbGlkZT5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMTUwLzE1MFwiIHN0eWxlPVwibWFyZ2luOmF1dG87XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICAgIDxwPkJlYXV0aWZ1bCE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2xpZGU+XHJcbiAgICAgIDxzbGlkZT5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMTAwLzE1MFwiIHN0eWxlPVwibWFyZ2luOmF1dG87XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICAgIDxwPkQnYXd3ITwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zbGlkZT5cclxuICAgIDwvY2Fyb3VzZWw+XHJcbiAgPC9maWxlPlxyXG4gIDxmaWxlIG5hbWU9XCJkZW1vLmNzc1wiPlxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICB0b3A6IGF1dG87XHJcbiAgICAgIGJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICA8L2ZpbGU+XHJcbjwvZXhhbXBsZT5cclxuKi9cclxuXHJcbi8vIENhcm91c2VsIERpcmVjdGl2ZVxyXG4vKlxyXG5hcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgnY2Fyb3VzZWwnLCBbZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBjb250cm9sbGVyOiAncGhvdG9zQ29udHJvbGxlcicsXHJcbiAgICAgICAgcmVxdWlyZTogJ2Nhcm91c2VsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWwnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICBpbnRlcnZhbDogJz0nLFxyXG4gICAgICAgICAgbm9UcmFuc2l0aW9uOiAnPScsXHJcbiAgICAgICAgICBub1BhdXNlOiAnPSdcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XSlcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ2Nhcm91c2VsJykgZGVmaW5lZFwiKTtcclxufSAgICBcclxuKi9cclxuLyoqXHJcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcclxuICogQG5hbWUgdWkuYm9vdHN0cmFwLmNhcm91c2VsLmRpcmVjdGl2ZTpzbGlkZVxyXG4gKiBAcmVzdHJpY3QgRUFcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENyZWF0ZXMgYSBzbGlkZSBpbnNpZGUgYSB7QGxpbmsgdWkuYm9vdHN0cmFwLmNhcm91c2VsLmRpcmVjdGl2ZTpjYXJvdXNlbCBjYXJvdXNlbH0uICBNdXN0IGJlIHBsYWNlZCBhcyBhIGNoaWxkIG9mIGEgY2Fyb3VzZWwgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtib29sZWFuPX0gYWN0aXZlIE1vZGVsIGJpbmRpbmcsIHdoZXRoZXIgb3Igbm90IHRoaXMgc2xpZGUgaXMgY3VycmVudGx5IGFjdGl2ZS5cclxuICogQHBhcmFtIHtudW1iZXI9fSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHNsaWRlLiBUaGUgc2xpZGVzIHdpbGwgYmUgc29ydGVkIGJ5IHRoaXMgcGFyYW1ldGVyLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG48ZXhhbXBsZSBtb2R1bGU9XCJ1aS5ib290c3RyYXBcIj5cclxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxyXG48ZGl2IG5nLWNvbnRyb2xsZXI9XCJDYXJvdXNlbERlbW9DdHJsXCI+XHJcbiAgPGNhcm91c2VsPlxyXG4gICAgPHNsaWRlIG5nLXJlcGVhdD1cInNsaWRlIGluIHNsaWRlc1wiIGFjdGl2ZT1cInNsaWRlLmFjdGl2ZVwiIGluZGV4PVwiJGluZGV4XCI+XHJcbiAgICAgIDxpbWcgbmctc3JjPVwie3tzbGlkZS5pbWFnZX19XCIgc3R5bGU9XCJtYXJnaW46YXV0bztcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICA8aDQ+U2xpZGUge3skaW5kZXh9fTwvaDQ+XHJcbiAgICAgICAgPHA+e3tzbGlkZS50ZXh0fX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zbGlkZT5cclxuICA8L2Nhcm91c2VsPlxyXG4gIEludGVydmFsLCBpbiBtaWxsaXNlY29uZHM6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmctbW9kZWw9XCJteUludGVydmFsXCI+XHJcbiAgPGJyIC8+RW50ZXIgYSBuZWdhdGl2ZSBudW1iZXIgdG8gc3RvcCB0aGUgaW50ZXJ2YWwuXHJcbjwvZGl2PlxyXG4gIDwvZmlsZT5cclxuICA8ZmlsZSBuYW1lPVwic2NyaXB0LmpzXCI+XHJcbmZ1bmN0aW9uIENhcm91c2VsRGVtb0N0cmwoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLm15SW50ZXJ2YWwgPSA1MDAwO1xyXG59XHJcbiAgPC9maWxlPlxyXG4gIDxmaWxlIG5hbWU9XCJkZW1vLmNzc1wiPlxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICB0b3A6IGF1dG87XHJcbiAgICAgIGJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICA8L2ZpbGU+XHJcbjwvZXhhbXBsZT5cclxuKi9cclxuXHJcbi8qXHJcbmFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCdzbGlkZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXF1aXJlOiAnXmNhcm91c2VsJyxcclxuICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9jYXJvdXNlbC9zbGlkZS5odG1sJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBhY3RpdmU6ICc9PycsXHJcbiAgICAgICAgICAgIGluZGV4OiAnPT8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjYXJvdXNlbEN0cmwpIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWxDdHJsLmFkZFNsaWRlKHNjb3BlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgLy93aGVuIHRoZSBzY29wZSBpcyBkZXN0cm95ZWQgdGhlbiByZW1vdmUgdGhlIHNsaWRlIGZyb20gdGhlIGN1cnJlbnQgc2xpZGVzIGFycmF5XHJcbiAgICAgICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsQ3RybC5yZW1vdmVTbGlkZShzY29wZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdhY3RpdmUnLCBmdW5jdGlvbihhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbEN0cmwuc2VsZWN0KHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSlcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3NsaWRlJykgZGVmaW5lZFwiKTtcclxufSAgICBcclxuXHJcbmFwcERpcmVjdGl2ZXMuYW5pbWF0aW9uKCcuaXRlbScsIFtcclxuICAgICAgICAgICAgICckYW5pbWF0ZScsXHJcbiAgICBmdW5jdGlvbiAoJGFuaW1hdGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiZWZvcmVBZGRDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRHVlIHRvIHRyYW5zY2x1c2lvbiwgbm9UcmFuc2l0aW9uIHByb3BlcnR5IGlzIG9uIHBhcmVudCdzIHNjb3BlXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdhY3RpdmUnICYmIGVsZW1lbnQucGFyZW50KCkgJiZcclxuICAgICAgICAgICAgICAgICFlbGVtZW50LnBhcmVudCgpLnNjb3BlKCkubm9UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZWxlbWVudC5pc29sYXRlU2NvcGUoKS5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzID0gZGlyZWN0aW9uID09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICRhbmltYXRlLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGlvbkNsYXNzKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdG9wcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKGRpcmVjdGlvbkNsYXNzICsgJyAnICsgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lLCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEdWUgdG8gdHJhbnNjbHVzaW9uLCBub1RyYW5zaXRpb24gcHJvcGVydHkgaXMgb24gcGFyZW50J3Mgc2NvcGVcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gJ2FjdGl2ZScgJiYgZWxlbWVudC5wYXJlbnQoKSAmJlxyXG4gICAgICAgICAgICAgICAgIWVsZW1lbnQucGFyZW50KCkuc2NvcGUoKS5ub1RyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlbGVtZW50Lmlzb2xhdGVTY29wZSgpLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uQ2xhc3MgPSBkaXJlY3Rpb24gPT0gJ25leHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuICAgICAgICAgICAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3Rpb25DbGFzcykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RvcHBlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhkaXJlY3Rpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5dKTtcclxuIFxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuYW5pbWF0aW9uKCcuaXRlbScpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcbiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdGVzdC5kaXJlY3RpdmUuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHRlc3QuZGlyZWN0aXZlLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBEZWZpbmUgeW91ciBkaXJlY3RpdmVzIGhlcmUuIFxyXG4vLyBEaXJlY3RpdmVzIGNhbiBiZSBhZGRlZCB0byBzYW1lIG1vZHVsZSBhcyAnbWFpbkFwcCcgb3IgYSBzZXBlcmF0ZSBtb2R1bGUgY2FuIGJlIGNyZWF0ZWQuXHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0ZXN0RGlyZWN0aXZlLUEnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vdXNlIGFzICd0ZXN0RGlyZWN0aXZlJyBhdHRyaWJ1dGUgaW4gSFRNTFxyXG4gICAgICAgIC8vIGkuZS4gPGRpdiB0ZXN0RGlyZWN0aXZlPjwvZGl2PlxyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1BIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1BJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtQycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy91c2UgYXMgJ3Rlc3REaXJlY3RpdmUnIGNsYXNzIGluIEhUTUxcclxuICAgICAgICAvLyBpLmUuIDxkaXYgY2xhc3M9XCJ0ZXN0RGlyZWN0aXZlXCI+PC9kaXY+XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0RGlyZWN0aXZlLUMgbGlua2VkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCd0ZXN0RGlyZWN0aXZlLUMnKSBkZWZpbmVkXCIpO1xyXG59IFxyXG5cclxuYXBwLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1FJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3VzZSBhcyAndGVzdERpcmVjdGl2ZScgZWxlbWVudCBpbiBIVE1MXHJcbiAgICAgICAgLy8gaS5lLiA8dGVzdERpcmVjdGl2ZT48L3Rlc3REaXJlY3RpdmU+XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0RGlyZWN0aXZlLUUgbGlua2VkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCd0ZXN0RGlyZWN0aXZlLUUnKSBkZWZpbmVkXCIpO1xyXG59IFxyXG5cclxuYXBwLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1NJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3VzZSBhcyAndGVzdERpcmVjdGl2ZScgY29tbWVudCBpbiBIVE1MXHJcbiAgICAgICAgLy8gaS5lLiA8IS0tIHRlc3REaXJlY3RpdmUgLS0+XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdNJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0RGlyZWN0aXZlLU0gbGlua2VkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCd0ZXN0RGlyZWN0aXZlLU0nKSBkZWZpbmVkXCIpO1xyXG59IFxyXG5cclxuYXBwLmRpcmVjdGl2ZSgndGVzdC1zdXBlcm1hbicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZTogXCI8cD57e3Bob3RvLmlkfX08L3A+XCJcclxuICAgICAgICAvL3RlbXBsYXRlVVJMOiAncGFydGlhbHMvcGhvdG9zL3Bob3RvLnRlc3QuaHRtbCdcclxuICAgIH07XHJcbn0pO1xyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCd0ZXN0LXN1cGVybWFuJykgZGVmaW5lZFwiKTtcclxufSBcclxuYXBwLmRpcmVjdGl2ZSgndGVzdC1nb3RIZXJlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkkgbWFkZSBpdCB0byBoZXJlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdC1nb3RIZXJlJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3QtaW1nRmxpcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2Pnt7cGhvdG8uaWR9fTwvZGl2PlwiLFxyXG4gICAgICAgIHRlbXBsYXRlVVJMOiAncGFydGlhbHMvcGhvdG9zL3Bob3RvLnRlc3QuaHRtbCdcclxuICAgIH07XHJcbn0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdC1pbWdGbGlwJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QuZGlyZWN0aXZlLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBmaWx0ZXJzLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcEZpbHRlcnMuZmlsdGVyKCdub051bGxzJywgXHJcbiAgICBmdW5jdGlvbihQaG90b3MpIHtcclxuICAgIFxyXG4gICAgICAgIHZhciBmaWx0ZXJlZFBob3RvcyA9IFtdO1xyXG4gICAgICAgIGlmKFBob3Rvcyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxQaG90b3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKCBQaG90b3NbaV0ubmFtZSAhPSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRQaG90b3MucHVzaChQaG90b3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnZmlsdGVyZWRQaG90b3MgZnJvbSBub051bGxzJyApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBmaWx0ZXJlZFBob3RvcyApO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFBob3RvcztcclxuICAgIH1cclxuKTtcclxuXHJcbmFwcEZpbHRlcnMuZmlsdGVyKCdoaWxpZ2h0cycsIFxyXG4gICAgZnVuY3Rpb24oUGhvdG9zKSB7XHJcbiAgICBcclxuICAgICAgICB2YXIgZmlsdGVyZWRQaG90b3MgPSBbXTtcclxuICAgICAgICBpZihQaG90b3Mpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8UGhvdG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggUGhvdG9zW2ldLmhpbGlnaHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRQaG90b3MucHVzaChQaG90b3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnZmlsdGVyZWRQaG90b3MgZnJvbSBoaWxpZ2h0cycgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggZmlsdGVyZWRQaG90b3MgKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQaG90b3M7XHJcbiAgICB9XHJcbik7XHJcblxyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBwaG90b3MuZmFjdG9yeS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUkVTVEZVTCBBUEkgc2VydmljZVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYXBwU2VydmljZXMuZmFjdG9yeSgnUGhvdG9GYWN0b3J5JywgW1xyXG4gICAgICAgICAgICAnJHJlc291cmNlJyxcclxuICAgIGZ1bmN0aW9uKCRyZXNvdXJjZSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzLmZhY3RvcnkoUGhvdG9GYWN0b3J5KS1SRVNURlVMIEFQSSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3Bob3Rvcy5qc29uJztcclxuICAgICAgICB2YXIgUGhvdG9zID0gW107XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gJHJlc291cmNlKHBhdGgsIHt9LCB7XHJcbiAgICAgICAgICAgIGdldFBob3Rvczoge21ldGhvZDonR0VUJywgcGFyYW1zOntwaG90b0lkOidQaG90byd9LCBpc0FycmF5OnRydWV9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbl0pOyBcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMuZmFjdG9yeShQaG90b0ZhY3RvcnkpIC0gZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHBob3Rvcy5mYWN0b3J5LmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBwaG90b3MucHJvdmlkZXIuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuYXBwU2VydmljZXMuc2VydmljZSgnUGhvdG9zUHJvdmlkZXInLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHEsICAgJHJvb3RTY29wZSApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygnUGhvdG9zUHJvdmlkZXInKSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3Bob3Rvcy5qc29uJztcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAkaHR0cC5nZXQocGF0aClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQaG90b3MgPSBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5dKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBwaG90b3MucHJvdmlkZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHBob3Rvcy5zZXJ2aWNlLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcFNlcnZpY2VzLnNlcnZpY2UoJ1Bob3Rvc1NlcnZpY2UnLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAnJHNjb3BlJyxcclxuICAgIGZ1bmN0aW9uKCAkaHR0cCwgICAkc2NvcGUgKXtcclxuICAgICAgICBcclxuICAgICAgICBkZWJ1Zz10cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygnUGhvdG9zU2VydmljZScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJ2pzb24vcGhvdG9zLmpzb24nO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy8nICsgcGF0aClcclxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUucGhvdG9zID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5waG90b3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5dKTtcclxuXHJcblxyXG5hcHBTZXJ2aWNlcy5zZXJ2aWNlKCdQaG90b3NTZXJ2aWNlUScsIFtcclxuICAgICAgICAgICAgICckaHR0cCcsICckcScsICckcm9vdFNjb3BlJyxcclxuICAgIGZ1bmN0aW9uKCAkaHR0cCwgICAkcSwgICAkcm9vdFNjb3BlICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVidWc9dHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1Bob3Rvc1NlcnZpY2VRJykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy8nICsgcGF0aClcclxuICAgICAgICAkaHR0cC5nZXQocGF0aClcclxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmdldFBob3RvcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBwaG90b3Muc2VydmljZS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogcGhvdG9zLnV0aWxzLmZhY3RvcnkuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQSBSRVNUZnVsIGZhY3RvcnkgZm9yIHJldHJpZXZpbmcgcGhvdG9zIGZyb20gJ3Bob3Rvcy5qc29uJ1xyXG5hcHBTZXJ2aWNlcy5mYWN0b3J5KCdwaG90b3NVdGlsc0ZhY3RvcnknLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAndXRpbHNGYWN0b3J5JywgXHJcbiAgICBmdW5jdGlvbiAoJGh0dHAsICAgdXRpbHNGYWN0b3J5KSB7XHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCdwaG90b3NVdGlsc0ZhY3RvcnknKSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3Bob3Rvcy5qc29uJztcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGhvdG9zID0gJGh0dHAuZ2V0KHBhdGgpLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvc1V0aWxzRmFjdG9yeSAtIHJlc3BvbnNlIGV4ZWN1dGVkKFwiICsgcmVzcC5sZW5ndGggKyBcIilcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGhvdG9zLmxlbmd0aCAtIChcIiArIHBob3Rvcy5sZW5ndGggKyBcIilcIik7XHJcblxyXG4gICAgICAgIHZhciBmYWN0b3J5ID0ge307XHJcblxyXG4gICAgICAgIGZhY3RvcnkuYWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvc1V0aWxzRmFjdG9yeSAtIGZhY3RvcnkuYWxsIGV4ZWN1dGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvdG9zO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZhY3RvcnkuZ2V0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGhvdG9zVXRpbHNGYWN0b3J5IC0gZmFjdG9yeS5nZXQgZXhlY3V0ZWQgZm9yIGlkKFwiICsgaWQgKyBcIilcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBwaG90b3MudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZhY3RvcnkuZmluZEJ5SWQocGhvdG9zLCBpZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmFjdG9yeS5jb3VudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvc1V0aWxzRmFjdG9yeSAtIGZhY3RvcnkuY291bnQgZXhlY3V0ZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBwaG90b3MubGVuZ3RoO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZhY3RvcnkubGlzdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRodHRwLmdldChwYXRoKS5zdWNjZXNzKGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvc1V0aWxzRmFjdG9yeSAtIGZhY3RvcnkubGlzdCAtIGV4ZWN1dGVkKFwiICsgZGF0YS5sZW5ndGggKyBcIilcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XHJcblxyXG4gICAgfVxyXG5dKTsgXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gcGhvdG9zLnV0aWxzLmZhY3RvcnkuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHNsaWRlcy5zZXJ2aWNlLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcFNlcnZpY2VzLnNlcnZpY2UoJ1NsaWRlU2VydmljZScsIFtcclxuICAgICAgICAgICAgICdQaG90b3MnLFxyXG4gICAgZnVuY3Rpb24oIFBob3RvcyApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygnU2xpZGVTZXJ2aWNlJykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgJHNjb3BlLkludGVydmFsID0gNTAwMDtcclxuICAgICAgICAkc2NvcGUuY2Fyb3VzZWxJbmRleCA9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgXCIjZmMwMDAzXCIsIFwiI2Y3MDAwOFwiLCBcIiNmMjAwMGRcIiwgXCIjZWQwMDEyXCIsIFwiI2U4MDAxN1wiLCBcclxuICAgICAgICAgICAgXCIjZTMwMDFjXCIsIFwiI2RlMDAyMVwiLCBcIiNkOTAwMjZcIiwgXCIjZDQwMDJiXCIsIFwiI2NmMDAzMFwiLCBcclxuICAgICAgICAgICAgXCIjYzkwMDM2XCIsIFwiI2M0MDAzYlwiLCBcIiNiZjAwNDBcIiwgXCIjYmEwMDQ1XCIsIFwiI2I1MDA0YVwiLCBcclxuICAgICAgICAgICAgXCIjYjAwMDRmXCIsIFwiI2FiMDA1NFwiLCBcIiNhNjAwNTlcIiwgXCIjYTEwMDVlXCIsIFwiIzljMDA2M1wiLCBcclxuICAgICAgICAgICAgXCIjOTYwMDY5XCIsIFwiIzkxMDA2ZVwiLCBcIiM4YzAwNzNcIiwgXCIjODcwMDc4XCIsIFwiIzgyMDA3ZFwiLCBcclxuICAgICAgICAgICAgXCIjN2QwMDgyXCIsIFwiIzc4MDA4N1wiLCBcIiM3MzAwOGNcIiwgXCIjNmUwMDkxXCIsIFwiIzY5MDA5NlwiLCBcclxuICAgICAgICAgICAgXCIjNjMwMDljXCIsIFwiIzVlMDBhMVwiLCBcIiM1OTAwYTZcIiwgXCIjNTQwMGFiXCIsIFwiIzRmMDBiMFwiLCBcclxuICAgICAgICAgICAgXCIjNGEwMGI1XCIsIFwiIzQ1MDBiYVwiLCBcIiM0MDAwYmZcIiwgXCIjM2IwMGM0XCIsIFwiIzM2MDBjOVwiLCBcclxuICAgICAgICAgICAgXCIjMzAwMGNmXCIsIFwiIzJiMDBkNFwiLCBcIiMyNjAwZDlcIiwgXCIjMjEwMGRlXCIsIFwiIzFjMDBlM1wiLCBcclxuICAgICAgICAgICAgXCIjMTcwMGU4XCIsIFwiIzEyMDBlZFwiLCBcIiMwZDAwZjJcIiwgXCIjMDgwMGY3XCIsIFwiIzAzMDBmY1wiXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2xpZGVzID0gXy5maWx0ZXIoUGhvdG9zLCBmdW5jdGlvbih2YWwpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsWydoaWxpZ2h0J10gPT0gMTtcclxuICAgICAgICB9KTsvLyBmaWx0ZXIgdGhlIGltYWdlcyBpZGVudGlmaWVkIGFzIGhpbGlnaHRzXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVidWcpe2NvbnNvbGUubG9nKCdzbGlkZXMoJyArIHNsaWRlcy5sZW5ndGggKyAnKTonKTt9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUuc2xpZGVzKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLmNvbG9yID0gY29sb3JzWyhpKjEwKSAlIGNvbG9ycy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBzbGlkZXNbaV0ub2RkID0gKGkgJSAyID09PSAwKTtcclxuICAgICAgICB9IC8vIEFkZCBjb2xvciBhbmQgb2RkXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlKHRhcmdldCwgc3R5bGUpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSB0YXJnZXQubGVuZ3RoO1xyXG4gICAgICAgICAgICB0YXJnZXQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogKGkgKyAxKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHN0eWxlICsgJyBzbGlkZSAjJyArIChpICsgMSksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQ1MC8zMDAvJyArIHN0eWxlICsgJy8nICsgKChpICsgMSkgJSAxMCkgLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgKGkqMTApICUgY29sb3JzLmxlbmd0aF0sXHJcbiAgICAgICAgICAgICAgICBvZGQ6IChpICUgMiA9PT0gMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVzKHRhcmdldCwgcXR5LCBzdHlsZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBxdHk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYWRkU2xpZGUodGFyZ2V0LCBzdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4vKlxyXG4gICAgICAgIHZhciBudW0yQWRkID0gNztcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ2Fic3RyYWN0Jyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdjaXR5Jyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdwZW9wbGUnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ3RyYW5zcG9ydCcpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnYW5pbWFscycpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnZm9vZCcpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnbmF0dXJlJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdidXNpbmVzcycpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnbmlnaHRsaWZlJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdzcG9ydHMnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ2Zhc2hpb24nKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ3RlY2huaWNzJyk7XHJcbiovXHJcblxyXG5cclxuICAgICAgICB0aGlzLmdldFNsaWRlcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCdTbGlkZVNlcnZpY2UnKSBnZXRTbGlkZXMgLSByZXR1cm5pbmcgc2xpZGVzKFwiICsgc2xpZGVzLmxlbmd0aCArIFwiKVwiKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHBob3Rvcy5zZXJ2aWNlLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB0ZXN0LmZhY3RvcnkuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gRGVmaW5lIHlvdXIgc2VydmljZSBoZXJlLiBTZXJ2aWNlcyBjYW4gYmUgYWRkZWQgdG8gc2FtZSBtb2R1bGUgYXMgJ21haW5BcHAnIG9yIGEgc2VwZXJhdGUgbW9kdWxlIGNhbiBiZSBjcmVhdGVkLlxyXG5cclxuYXBwU2VydmljZXMuZmFjdG9yeSgndGVzdEZhY3RvcnknLCBbZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoZGVidWcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ3Rlc3RGYWN0b3J5JykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgc2VydmljZSA9IHt9O1xyXG4gICAgXHJcbiAgICBzZXJ2aWNlLmRvV29yayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdEZhY3RvcnkgLSBEaWQgc29tZSB3b3JrICEnKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgXHJcbn1dKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB0ZXN0LmZhY3RvcnkuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHV0aWxzLmZhY3RvcnkuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy92YXIgdXRpbFNlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoJ3V0aWxTZXJ2aWNlcycsIFtdKTtcclxuYXBwU2VydmljZXMuZmFjdG9yeSgndXRpbHNGYWN0b3J5JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygndXRpbHNGYWN0b3J5JykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIFV0aWwgZm9yIGZpbmRpbmcgYW4gb2JqZWN0IGJ5IGl0cyAnaWQnIHByb3BlcnR5IGFtb25nIGFuIGFycmF5XHJcbiAgICAgICAgICAgIGZpbmRCeUlkOiBmdW5jdGlvbiBmaW5kQnlJZChhLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFbaV0uaWQgPT09IGlkKSB7cmV0dXJuIGFbaV07fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBVdGlsIGZvciByZXR1cm5pbmcgYSByYW5kb20ga2V5IGZyb20gYSBjb2xsZWN0aW9uIHRoYXQgYWxzbyBpc24ndCB0aGUgY3VycmVudCBrZXlcclxuICAgICAgICAgICAgbmV3UmFuZG9tS2V5OiBmdW5jdGlvbiBuZXdSYW5kb21LZXkoY29sbCwga2V5LCBjdXJyZW50S2V5KXtcclxuICAgICAgICAgICAgICAgIHZhciByYW5kS2V5O1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRLZXkgPSBjb2xsW01hdGguZmxvb3IoY29sbC5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHJhbmRLZXkgPT09IGN1cnJlbnRLZXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhbmRLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdXRpbHMuZmFjdG9yeS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHZpZGVvcy5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBSRVNURlVMIEFQSSBmYWN0b3J5IHNlcnZpY2VcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ3ZpZGVvc0ZhY3RvcnknLCBbXHJcbiAgICAgICAgICAgICckcmVzb3VyY2UnLFxyXG4gICAgZnVuY3Rpb24oJHJlc291cmNlKXtcclxuXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzLmZhY3RvcnkodmlkZW9zRmFjdG9yeSktUkVTVEZVTCBBUEkgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi92aWRlb3MuanNvbic7XHJcbiAgICAgICAgdmFyIFZpZGVvcyA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICRyZXNvdXJjZShwYXRoLCB7fSwge1xyXG4gICAgICAgICAgICBnZXRWaWRlb3M6IHttZXRob2Q6J0dFVCcsIHBhcmFtczp7dmlkZW9JZDonVmlkZW8nfSwgaXNBcnJheTp0cnVlfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5dKTsgXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzLmZhY3RvcnkodmlkZW9zRmFjdG9yeSkgLSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHZpZGVvcy5mYWN0b3J5LmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogdmlkZW9zLnNlcnZpY2UuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuYXBwU2VydmljZXMuc2VydmljZSgndmlkZW9zU2VydmljZScsIFtcclxuICAgICAgICAgICAgICckaHR0cCcsICckcScsICckcm9vdFNjb3BlJyxcclxuICAgIGZ1bmN0aW9uKCAkaHR0cCwgICAkcSwgICAkcm9vdFNjb3BlICl7XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygndmlkZW9zU2VydmljZScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXRoID0gJ2pzb24vdmlkZW9zLmpzb24nO1xyXG4gICAgICAgIHZhciB2aWRlb3NTZXJ2aWNlID0gdGhpcztcclxuICAgICAgICB2aWRlb3NTZXJ2aWNlLnZpZGVvTGlzdCA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdFVFxyXG4gICAgICAgIHZpZGVvc1NlcnZpY2UuZ2V0VmlkZW9zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy8nICsgcGF0aClcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIHZpZGVvc1NlcnZpY2UudmlkZW9MaXN0ID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGVidWcgJiYgKHJlcy5sZW5ndGggPiAwKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpZGVvc1NlcnZpY2UgLSBWaWRlb3MgY29udGFpbnMgW1wiICsgcmVzLmxlbmd0aCArIFwiXSB2aWRlb3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICBkZWZlci5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ3ZpZGVvc1NlcnZpY2UnKSBnZXRWaWRlb3MgLSBkZWZlcnJlZCBwcm9taXNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDUkVBVEVcclxuICAgICAgICB2aWRlb3NTZXJ2aWNlLmNyZWF0ZVZpZGVvID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvbmV3VmlkZW8nKVxyXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgdmlkZW9zU2VydmljZS52aWRlb0xpc3QgPSByZXM7XHJcbiAgICAgICAgICAgICAgICBkZWZlci5yZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICBkZWZlci5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gREVMRVRFXHJcbiAgICAgICAgdmlkZW9zU2VydmljZS5kZWxldGVWaWRlbyA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAkaHR0cC5kZWxldGUoJHJvb3RTY29wZS5lbmRQb2ludCArICcvZGVsZXRlVmlkZW8/dmlkZW9JZD0nICsgaWQpXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICBkZWZlci5yZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICBkZWZlci5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVQREFURVxyXG4gICAgICAgIHZpZGVvc1NlcnZpY2UudXBkYXRlVmlkZW8gPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgJGh0dHAudXBkYXRlKCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL3VwZGF0ZVZpZGVvP3ZpZGVvSWQ9JyArIGlkKVxyXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmlkZW9zU2VydmljZTtcclxuICAgIH1cclxuXSlcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB2aWRlb3Muc2VydmljZS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIi8qIE1vZGVybml6ciAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxuICogQnVpbGQ6IGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLyMtc2hpdi1sb2FkLWNzc2NsYXNzZXMtY2FudmFzdGV4dC1jc3N0cmFuc2Zvcm1zM2QtZmxleGJveC1jc3NncmFkaWVudHMtb3BhY2l0eS1pbmRleGVkREItYmFja2dyb3VuZHNpemUtYm9yZGVyaW1hZ2UtYm9yZGVycmFkaXVzLWJveHNoYWRvdy1jc3NhbmltYXRpb25zLWNzc2NvbHVtbnMtY3NzcmVmbGVjdGlvbnMtY3NzdHJhbnNpdGlvbnMtZmxleGJveGxlZ2FjeS1wcmVmaXhlZC1jc3N0cmFuc2Zvcm1zLW1xLWhhc2hjaGFuZ2UtZHJhZ2FuZGRyb3AtZ2VuZXJhdGVkY29udGVudC1zdmctaW5saW5lc3ZnLXNtaWwtc3ZnY2xpcHBhdGhzLWlucHV0LWlucHV0dHlwZXMtdG91Y2gtZm9udGZhY2Utd2Vic29ja2V0cy1jb3JzLWpzb24tYXBwbGljYXRpb25jYWNoZS1hdWRpby1jYW52YXMtZ2VvbG9jYXRpb24taGlzdG9yeS1oc2xhLWxvY2Fsc3RvcmFnZS1tdWx0aXBsZWJncy1wb3N0bWVzc2FnZS1zZXNzaW9uc3RvcmFnZS10ZXh0c2hhZG93LXJnYmEtdmlkZW8td2ViZ2wtd2Vic3FsZGF0YWJhc2Utd2Vid29ya2Vyc1xuICovXG47d2luZG93Lk1vZGVybml6cj1mdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gQShlKXtmLmNzc1RleHQ9ZX1mdW5jdGlvbiBPKGUsdCl7cmV0dXJuIEEocC5qb2luKGUrXCI7XCIpKyh0fHxcIlwiKSl9ZnVuY3Rpb24gTShlLHQpe3JldHVybiB0eXBlb2YgZT09PXR9ZnVuY3Rpb24gXyhlLHQpe3JldHVybiEhfihcIlwiK2UpLmluZGV4T2YodCl9ZnVuY3Rpb24gRChlLHQpe2Zvcih2YXIgciBpbiBlKXt2YXIgaT1lW3JdO2lmKCFfKGksXCItXCIpJiZmW2ldIT09bilyZXR1cm4gdD09XCJwZnhcIj9pOiEwfXJldHVybiExfWZ1bmN0aW9uIFAoZSx0LHIpe2Zvcih2YXIgaSBpbiBlKXt2YXIgcz10W2VbaV1dO2lmKHMhPT1uKXJldHVybiByPT09ITE/ZVtpXTpNKHMsXCJmdW5jdGlvblwiKT9zLmJpbmQocnx8dCk6c31yZXR1cm4hMX1mdW5jdGlvbiBIKGUsdCxuKXt2YXIgcj1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksaT0oZStcIiBcIit2LmpvaW4ocitcIiBcIikrcikuc3BsaXQoXCIgXCIpO3JldHVybiBNKHQsXCJzdHJpbmdcIil8fE0odCxcInVuZGVmaW5lZFwiKT9EKGksdCk6KGk9KGUrXCIgXCIrbS5qb2luKHIrXCIgXCIpK3IpLnNwbGl0KFwiIFwiKSxQKGksdCxuKSl9ZnVuY3Rpb24gQigpe2kuaW5wdXQ9ZnVuY3Rpb24obil7Zm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKXdbbltyXV09bltyXWluIGw7cmV0dXJuIHcubGlzdCYmKHcubGlzdD0hIXQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpJiYhIWUuSFRNTERhdGFMaXN0RWxlbWVudCksd30oXCJhdXRvY29tcGxldGUgYXV0b2ZvY3VzIGxpc3QgcGxhY2Vob2xkZXIgbWF4IG1pbiBtdWx0aXBsZSBwYXR0ZXJuIHJlcXVpcmVkIHN0ZXBcIi5zcGxpdChcIiBcIikpLGkuaW5wdXR0eXBlcz1mdW5jdGlvbihlKXtmb3IodmFyIHI9MCxpLHMsdSxhPWUubGVuZ3RoO3I8YTtyKyspbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIscz1lW3JdKSxpPWwudHlwZSE9PVwidGV4dFwiLGkmJihsLnZhbHVlPWMsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7dmlzaWJpbGl0eTpoaWRkZW47XCIsL15yYW5nZSQvLnRlc3QocykmJmwuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSE9PW4/KG8uYXBwZW5kQ2hpbGQobCksdT10LmRlZmF1bHRWaWV3LGk9dS5nZXRDb21wdXRlZFN0eWxlJiZ1LmdldENvbXB1dGVkU3R5bGUobCxudWxsKS5XZWJraXRBcHBlYXJhbmNlIT09XCJ0ZXh0ZmllbGRcIiYmbC5vZmZzZXRIZWlnaHQhPT0wLG8ucmVtb3ZlQ2hpbGQobCkpOi9eKHNlYXJjaHx0ZWwpJC8udGVzdChzKXx8KC9eKHVybHxlbWFpbCkkLy50ZXN0KHMpP2k9bC5jaGVja1ZhbGlkaXR5JiZsLmNoZWNrVmFsaWRpdHkoKT09PSExOmk9bC52YWx1ZSE9YykpLGJbZVtyXV09ISFpO3JldHVybiBifShcInNlYXJjaCB0ZWwgdXJsIGVtYWlsIGRhdGV0aW1lIGRhdGUgbW9udGggd2VlayB0aW1lIGRhdGV0aW1lLWxvY2FsIG51bWJlciByYW5nZSBjb2xvclwiLnNwbGl0KFwiIFwiKSl9dmFyIHI9XCIyLjguM1wiLGk9e30scz0hMCxvPXQuZG9jdW1lbnRFbGVtZW50LHU9XCJtb2Rlcm5penJcIixhPXQuY3JlYXRlRWxlbWVudCh1KSxmPWEuc3R5bGUsbD10LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxjPVwiOilcIixoPXt9LnRvU3RyaW5nLHA9XCIgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gXCIuc3BsaXQoXCIgXCIpLGQ9XCJXZWJraXQgTW96IE8gbXNcIix2PWQuc3BsaXQoXCIgXCIpLG09ZC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKSxnPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifSx5PXt9LGI9e30sdz17fSxFPVtdLFM9RS5zbGljZSx4LFQ9ZnVuY3Rpb24oZSxuLHIsaSl7dmFyIHMsYSxmLGwsYz10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaD10LmJvZHkscD1ofHx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpO2lmKHBhcnNlSW50KHIsMTApKXdoaWxlKHItLSlmPXQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmLmlkPWk/aVtyXTp1KyhyKzEpLGMuYXBwZW5kQ2hpbGQoZik7cmV0dXJuIHM9W1wiJiMxNzM7XCIsJzxzdHlsZSBpZD1cInMnLHUsJ1wiPicsZSxcIjwvc3R5bGU+XCJdLmpvaW4oXCJcIiksYy5pZD11LChoP2M6cCkuaW5uZXJIVE1MKz1zLHAuYXBwZW5kQ2hpbGQoYyksaHx8KHAuc3R5bGUuYmFja2dyb3VuZD1cIlwiLHAuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixsPW8uc3R5bGUub3ZlcmZsb3csby5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLG8uYXBwZW5kQ2hpbGQocCkpLGE9bihjLGUpLGg/Yy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpOihwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCksby5zdHlsZS5vdmVyZmxvdz1sKSwhIWF9LE49ZnVuY3Rpb24odCl7dmFyIG49ZS5tYXRjaE1lZGlhfHxlLm1zTWF0Y2hNZWRpYTtpZihuKXJldHVybiBuKHQpJiZuKHQpLm1hdGNoZXN8fCExO3ZhciByO3JldHVybiBUKFwiQG1lZGlhIFwiK3QrXCIgeyAjXCIrdStcIiB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfSB9XCIsZnVuY3Rpb24odCl7cj0oZS5nZXRDb21wdXRlZFN0eWxlP2dldENvbXB1dGVkU3R5bGUodCxudWxsKTp0LmN1cnJlbnRTdHlsZSlbXCJwb3NpdGlvblwiXT09XCJhYnNvbHV0ZVwifSkscn0sQz1mdW5jdGlvbigpe2Z1bmN0aW9uIHIocixpKXtpPWl8fHQuY3JlYXRlRWxlbWVudChlW3JdfHxcImRpdlwiKSxyPVwib25cIityO3ZhciBzPXIgaW4gaTtyZXR1cm4gc3x8KGkuc2V0QXR0cmlidXRlfHwoaT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGkuc2V0QXR0cmlidXRlJiZpLnJlbW92ZUF0dHJpYnV0ZSYmKGkuc2V0QXR0cmlidXRlKHIsXCJcIikscz1NKGlbcl0sXCJmdW5jdGlvblwiKSxNKGlbcl0sXCJ1bmRlZmluZWRcIil8fChpW3JdPW4pLGkucmVtb3ZlQXR0cmlidXRlKHIpKSksaT1udWxsLHN9dmFyIGU9e3NlbGVjdDpcImlucHV0XCIsY2hhbmdlOlwiaW5wdXRcIixzdWJtaXQ6XCJmb3JtXCIscmVzZXQ6XCJmb3JtXCIsZXJyb3I6XCJpbWdcIixsb2FkOlwiaW1nXCIsYWJvcnQ6XCJpbWdcIn07cmV0dXJuIHJ9KCksaz17fS5oYXNPd25Qcm9wZXJ0eSxMOyFNKGssXCJ1bmRlZmluZWRcIikmJiFNKGsuY2FsbCxcInVuZGVmaW5lZFwiKT9MPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGsuY2FsbChlLHQpfTpMPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQgaW4gZSYmTShlLmNvbnN0cnVjdG9yLnByb3RvdHlwZVt0XSxcInVuZGVmaW5lZFwiKX0sRnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgcj1TLmNhbGwoYXJndW1lbnRzLDEpLGk9ZnVuY3Rpb24oKXtpZih0aGlzIGluc3RhbmNlb2YgaSl7dmFyIGU9ZnVuY3Rpb24oKXt9O2UucHJvdG90eXBlPW4ucHJvdG90eXBlO3ZhciBzPW5ldyBlLG89bi5hcHBseShzLHIuY29uY2F0KFMuY2FsbChhcmd1bWVudHMpKSk7cmV0dXJuIE9iamVjdChvKT09PW8/bzpzfXJldHVybiBuLmFwcGx5KHQsci5jb25jYXQoUy5jYWxsKGFyZ3VtZW50cykpKX07cmV0dXJuIGl9KSx5LmZsZXhib3g9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImZsZXhXcmFwXCIpfSx5LmZsZXhib3hsZWdhY3k9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImJveERpcmVjdGlvblwiKX0seS5jYW52YXM9ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuISFlLmdldENvbnRleHQmJiEhZS5nZXRDb250ZXh0KFwiMmRcIil9LHkuY2FudmFzdGV4dD1mdW5jdGlvbigpe3JldHVybiEhaS5jYW52YXMmJiEhTSh0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpLmZpbGxUZXh0LFwiZnVuY3Rpb25cIil9LHkud2ViZ2w9ZnVuY3Rpb24oKXtyZXR1cm4hIWUuV2ViR0xSZW5kZXJpbmdDb250ZXh0fSx5LnRvdWNoPWZ1bmN0aW9uKCl7dmFyIG47cmV0dXJuXCJvbnRvdWNoc3RhcnRcImluIGV8fGUuRG9jdW1lbnRUb3VjaCYmdCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2g/bj0hMDpUKFtcIkBtZWRpYSAoXCIscC5qb2luKFwidG91Y2gtZW5hYmxlZCksKFwiKSx1LFwiKVwiLFwieyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19XCJdLmpvaW4oXCJcIiksZnVuY3Rpb24oZSl7bj1lLm9mZnNldFRvcD09PTl9KSxufSx5Lmdlb2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCJnZW9sb2NhdGlvblwiaW4gbmF2aWdhdG9yfSx5LnBvc3RtZXNzYWdlPWZ1bmN0aW9uKCl7cmV0dXJuISFlLnBvc3RNZXNzYWdlfSx5LndlYnNxbGRhdGFiYXNlPWZ1bmN0aW9uKCl7cmV0dXJuISFlLm9wZW5EYXRhYmFzZX0seS5oYXNoY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuIEMoXCJoYXNoY2hhbmdlXCIsZSkmJih0LmRvY3VtZW50TW9kZT09PW58fHQuZG9jdW1lbnRNb2RlPjcpfSx5Lmhpc3Rvcnk9ZnVuY3Rpb24oKXtyZXR1cm4hIWUuaGlzdG9yeSYmISFoaXN0b3J5LnB1c2hTdGF0ZX0seS5kcmFnYW5kZHJvcD1mdW5jdGlvbigpe3ZhciBlPXQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm5cImRyYWdnYWJsZVwiaW4gZXx8XCJvbmRyYWdzdGFydFwiaW4gZSYmXCJvbmRyb3BcImluIGV9LHkud2Vic29ja2V0cz1mdW5jdGlvbigpe3JldHVyblwiV2ViU29ja2V0XCJpbiBlfHxcIk1veldlYlNvY2tldFwiaW4gZX0seS5yZ2JhPWZ1bmN0aW9uKCl7cmV0dXJuIEEoXCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTUwLDI1NSwxNTAsLjUpXCIpLF8oZi5iYWNrZ3JvdW5kQ29sb3IsXCJyZ2JhXCIpfSx5LmhzbGE9ZnVuY3Rpb24oKXtyZXR1cm4gQShcImJhY2tncm91bmQtY29sb3I6aHNsYSgxMjAsNDAlLDEwMCUsLjUpXCIpLF8oZi5iYWNrZ3JvdW5kQ29sb3IsXCJyZ2JhXCIpfHxfKGYuYmFja2dyb3VuZENvbG9yLFwiaHNsYVwiKX0seS5tdWx0aXBsZWJncz1mdW5jdGlvbigpe3JldHVybiBBKFwiYmFja2dyb3VuZDp1cmwoaHR0cHM6Ly8pLHVybChodHRwczovLykscmVkIHVybChodHRwczovLylcIiksLyh1cmxcXHMqXFwoLio/KXszfS8udGVzdChmLmJhY2tncm91bmQpfSx5LmJhY2tncm91bmRzaXplPWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJiYWNrZ3JvdW5kU2l6ZVwiKX0seS5ib3JkZXJpbWFnZT1mdW5jdGlvbigpe3JldHVybiBIKFwiYm9yZGVySW1hZ2VcIil9LHkuYm9yZGVycmFkaXVzPWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJib3JkZXJSYWRpdXNcIil9LHkuYm94c2hhZG93PWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJib3hTaGFkb3dcIil9LHkudGV4dHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiB0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUudGV4dFNoYWRvdz09PVwiXCJ9LHkub3BhY2l0eT1mdW5jdGlvbigpe3JldHVybiBPKFwib3BhY2l0eTouNTVcIiksL14wLjU1JC8udGVzdChmLm9wYWNpdHkpfSx5LmNzc2FuaW1hdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImFuaW1hdGlvbk5hbWVcIil9LHkuY3NzY29sdW1ucz1mdW5jdGlvbigpe3JldHVybiBIKFwiY29sdW1uQ291bnRcIil9LHkuY3NzZ3JhZGllbnRzPWZ1bmN0aW9uKCl7dmFyIGU9XCJiYWNrZ3JvdW5kLWltYWdlOlwiLHQ9XCJncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgYm90dG9tLGZyb20oIzlmOSksdG8od2hpdGUpKTtcIixuPVwibGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCM5ZjksIHdoaXRlKTtcIjtyZXR1cm4gQSgoZStcIi13ZWJraXQtIFwiLnNwbGl0KFwiIFwiKS5qb2luKHQrZSkrcC5qb2luKG4rZSkpLnNsaWNlKDAsLWUubGVuZ3RoKSksXyhmLmJhY2tncm91bmRJbWFnZSxcImdyYWRpZW50XCIpfSx5LmNzc3JlZmxlY3Rpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJib3hSZWZsZWN0XCIpfSx5LmNzc3RyYW5zZm9ybXM9ZnVuY3Rpb24oKXtyZXR1cm4hIUgoXCJ0cmFuc2Zvcm1cIil9LHkuY3NzdHJhbnNmb3JtczNkPWZ1bmN0aW9uKCl7dmFyIGU9ISFIKFwicGVyc3BlY3RpdmVcIik7cmV0dXJuIGUmJlwid2Via2l0UGVyc3BlY3RpdmVcImluIG8uc3R5bGUmJlQoXCJAbWVkaWEgKHRyYW5zZm9ybS0zZCksKC13ZWJraXQtdHJhbnNmb3JtLTNkKXsjbW9kZXJuaXpye2xlZnQ6OXB4O3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDozcHg7fX1cIixmdW5jdGlvbih0LG4pe2U9dC5vZmZzZXRMZWZ0PT09OSYmdC5vZmZzZXRIZWlnaHQ9PT0zfSksZX0seS5jc3N0cmFuc2l0aW9ucz1mdW5jdGlvbigpe3JldHVybiBIKFwidHJhbnNpdGlvblwiKX0seS5mb250ZmFjZT1mdW5jdGlvbigpe3ZhciBlO3JldHVybiBUKCdAZm9udC1mYWNlIHtmb250LWZhbWlseTpcImZvbnRcIjtzcmM6dXJsKFwiaHR0cHM6Ly9cIil9JyxmdW5jdGlvbihuLHIpe3ZhciBpPXQuZ2V0RWxlbWVudEJ5SWQoXCJzbW9kZXJuaXpyXCIpLHM9aS5zaGVldHx8aS5zdHlsZVNoZWV0LG89cz9zLmNzc1J1bGVzJiZzLmNzc1J1bGVzWzBdP3MuY3NzUnVsZXNbMF0uY3NzVGV4dDpzLmNzc1RleHR8fFwiXCI6XCJcIjtlPS9zcmMvaS50ZXN0KG8pJiZvLmluZGV4T2Yoci5zcGxpdChcIiBcIilbMF0pPT09MH0pLGV9LHkuZ2VuZXJhdGVkY29udGVudD1mdW5jdGlvbigpe3ZhciBlO3JldHVybiBUKFtcIiNcIix1LFwie2ZvbnQ6MC8wIGF9I1wiLHUsJzphZnRlcntjb250ZW50OlwiJyxjLCdcIjt2aXNpYmlsaXR5OmhpZGRlbjtmb250OjNweC8xIGF9J10uam9pbihcIlwiKSxmdW5jdGlvbih0KXtlPXQub2Zmc2V0SGVpZ2h0Pj0zfSksZX0seS52aWRlbz1mdW5jdGlvbigpe3ZhciBlPXQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpLG49ITE7dHJ5e2lmKG49ISFlLmNhblBsYXlUeXBlKW49bmV3IEJvb2xlYW4obiksbi5vZ2c9ZS5jYW5QbGF5VHlwZSgndmlkZW8vb2dnOyBjb2RlY3M9XCJ0aGVvcmFcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLG4uaDI2ND1lLmNhblBsYXlUeXBlKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLndlYm09ZS5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA4LCB2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKHIpe31yZXR1cm4gbn0seS5hdWRpbz1mdW5jdGlvbigpe3ZhciBlPXQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpLG49ITE7dHJ5e2lmKG49ISFlLmNhblBsYXlUeXBlKW49bmV3IEJvb2xlYW4obiksbi5vZ2c9ZS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLG4ubXAzPWUuY2FuUGxheVR5cGUoXCJhdWRpby9tcGVnO1wiKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLndhdj1lLmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLG4ubTRhPShlLmNhblBsYXlUeXBlKFwiYXVkaW8veC1tNGE7XCIpfHxlLmNhblBsYXlUeXBlKFwiYXVkaW8vYWFjO1wiKSkucmVwbGFjZSgvXm5vJC8sXCJcIil9Y2F0Y2gocil7fXJldHVybiBufSx5LmxvY2Fsc3RvcmFnZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odSx1KSxsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh1KSwhMH1jYXRjaChlKXtyZXR1cm4hMX19LHkuc2Vzc2lvbnN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odSx1KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHUpLCEwfWNhdGNoKGUpe3JldHVybiExfX0seS53ZWJ3b3JrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuISFlLldvcmtlcn0seS5hcHBsaWNhdGlvbmNhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuISFlLmFwcGxpY2F0aW9uQ2FjaGV9LHkuc3ZnPWZ1bmN0aW9uKCl7cmV0dXJuISF0LmNyZWF0ZUVsZW1lbnROUyYmISF0LmNyZWF0ZUVsZW1lbnROUyhnLnN2ZyxcInN2Z1wiKS5jcmVhdGVTVkdSZWN0fSx5LmlubGluZXN2Zz1mdW5jdGlvbigpe3ZhciBlPXQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8c3ZnLz5cIiwoZS5maXJzdENoaWxkJiZlLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKT09Zy5zdmd9LHkuc21pbD1mdW5jdGlvbigpe3JldHVybiEhdC5jcmVhdGVFbGVtZW50TlMmJi9TVkdBbmltYXRlLy50ZXN0KGguY2FsbCh0LmNyZWF0ZUVsZW1lbnROUyhnLnN2ZyxcImFuaW1hdGVcIikpKX0seS5zdmdjbGlwcGF0aHM9ZnVuY3Rpb24oKXtyZXR1cm4hIXQuY3JlYXRlRWxlbWVudE5TJiYvU1ZHQ2xpcFBhdGgvLnRlc3QoaC5jYWxsKHQuY3JlYXRlRWxlbWVudE5TKGcuc3ZnLFwiY2xpcFBhdGhcIikpKX07Zm9yKHZhciBqIGluIHkpTCh5LGopJiYoeD1qLnRvTG93ZXJDYXNlKCksaVt4XT15W2pdKCksRS5wdXNoKChpW3hdP1wiXCI6XCJuby1cIikreCkpO3JldHVybiBpLmlucHV0fHxCKCksaS5hZGRUZXN0PWZ1bmN0aW9uKGUsdCl7aWYodHlwZW9mIGU9PVwib2JqZWN0XCIpZm9yKHZhciByIGluIGUpTChlLHIpJiZpLmFkZFRlc3QocixlW3JdKTtlbHNle2U9ZS50b0xvd2VyQ2FzZSgpO2lmKGlbZV0hPT1uKXJldHVybiBpO3Q9dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90KCk6dCx0eXBlb2YgcyE9XCJ1bmRlZmluZWRcIiYmcyYmKG8uY2xhc3NOYW1lKz1cIiBcIisodD9cIlwiOlwibm8tXCIpK2UpLGlbZV09dH1yZXR1cm4gaX0sQShcIlwiKSxhPWw9bnVsbCxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIGMoZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLHI9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF18fGUuZG9jdW1lbnRFbGVtZW50O3JldHVybiBuLmlubmVySFRNTD1cIng8c3R5bGU+XCIrdCtcIjwvc3R5bGU+XCIsci5pbnNlcnRCZWZvcmUobi5sYXN0Q2hpbGQsci5maXJzdENoaWxkKX1mdW5jdGlvbiBoKCl7dmFyIGU9eS5lbGVtZW50cztyZXR1cm4gdHlwZW9mIGU9PVwic3RyaW5nXCI/ZS5zcGxpdChcIiBcIik6ZX1mdW5jdGlvbiBwKGUpe3ZhciB0PWZbZVt1XV07cmV0dXJuIHR8fCh0PXt9LGErKyxlW3VdPWEsZlthXT10KSx0fWZ1bmN0aW9uIGQoZSxuLHIpe258fChuPXQpO2lmKGwpcmV0dXJuIG4uY3JlYXRlRWxlbWVudChlKTtyfHwocj1wKG4pKTt2YXIgbztyZXR1cm4gci5jYWNoZVtlXT9vPXIuY2FjaGVbZV0uY2xvbmVOb2RlKCk6cy50ZXN0KGUpP289KHIuY2FjaGVbZV09ci5jcmVhdGVFbGVtKGUpKS5jbG9uZU5vZGUoKTpvPXIuY3JlYXRlRWxlbShlKSxvLmNhbkhhdmVDaGlsZHJlbiYmIWkudGVzdChlKSYmIW8udGFnVXJuP3IuZnJhZy5hcHBlbmRDaGlsZChvKTpvfWZ1bmN0aW9uIHYoZSxuKXtlfHwoZT10KTtpZihsKXJldHVybiBlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtuPW58fHAoZSk7dmFyIHI9bi5mcmFnLmNsb25lTm9kZSgpLGk9MCxzPWgoKSxvPXMubGVuZ3RoO2Zvcig7aTxvO2krKylyLmNyZWF0ZUVsZW1lbnQoc1tpXSk7cmV0dXJuIHJ9ZnVuY3Rpb24gbShlLHQpe3QuY2FjaGV8fCh0LmNhY2hlPXt9LHQuY3JlYXRlRWxlbT1lLmNyZWF0ZUVsZW1lbnQsdC5jcmVhdGVGcmFnPWUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCx0LmZyYWc9dC5jcmVhdGVGcmFnKCkpLGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihuKXtyZXR1cm4geS5zaGl2TWV0aG9kcz9kKG4sZSx0KTp0LmNyZWF0ZUVsZW0obil9LGUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1GdW5jdGlvbihcImgsZlwiLFwicmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49Zi5jbG9uZU5vZGUoKSxjPW4uY3JlYXRlRWxlbWVudDtoLnNoaXZNZXRob2RzJiYoXCIraCgpLmpvaW4oKS5yZXBsYWNlKC9bXFx3XFwtXSsvZyxmdW5jdGlvbihlKXtyZXR1cm4gdC5jcmVhdGVFbGVtKGUpLHQuZnJhZy5jcmVhdGVFbGVtZW50KGUpLCdjKFwiJytlKydcIiknfSkrXCIpO3JldHVybiBufVwiKSh5LHQuZnJhZyl9ZnVuY3Rpb24gZyhlKXtlfHwoZT10KTt2YXIgbj1wKGUpO3JldHVybiB5LnNoaXZDU1MmJiFvJiYhbi5oYXNDU1MmJihuLmhhc0NTUz0hIWMoZSxcImFydGljbGUsYXNpZGUsZGlhbG9nLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31tYXJre2JhY2tncm91bmQ6I0ZGMDtjb2xvcjojMDAwfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1cIikpLGx8fG0oZSxuKSxlfXZhciBuPVwiMy43LjBcIixyPWUuaHRtbDV8fHt9LGk9L148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2kscz0vXig/OmF8Ynxjb2RlfGRpdnxmaWVsZHNldHxoMXxoMnxoM3xoNHxoNXxoNnxpfGxhYmVsfGxpfG9sfHB8cXxzcGFufHN0cm9uZ3xzdHlsZXx0YWJsZXx0Ym9keXx0ZHx0aHx0cnx1bCkkL2ksbyx1PVwiX2h0bWw1c2hpdlwiLGE9MCxmPXt9LGw7KGZ1bmN0aW9uKCl7dHJ5e3ZhciBlPXQuY3JlYXRlRWxlbWVudChcImFcIik7ZS5pbm5lckhUTUw9XCI8eHl6PjwveHl6PlwiLG89XCJoaWRkZW5cImluIGUsbD1lLmNoaWxkTm9kZXMubGVuZ3RoPT0xfHxmdW5jdGlvbigpe3QuY3JlYXRlRWxlbWVudChcImFcIik7dmFyIGU9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7cmV0dXJuIHR5cGVvZiBlLmNsb25lTm9kZT09XCJ1bmRlZmluZWRcInx8dHlwZW9mIGUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD09XCJ1bmRlZmluZWRcInx8dHlwZW9mIGUuY3JlYXRlRWxlbWVudD09XCJ1bmRlZmluZWRcIn0oKX1jYXRjaChuKXtvPSEwLGw9ITB9fSkoKTt2YXIgeT17ZWxlbWVudHM6ci5lbGVtZW50c3x8XCJhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHByb2dyZXNzIHNlY3Rpb24gc3VtbWFyeSB0ZW1wbGF0ZSB0aW1lIHZpZGVvXCIsdmVyc2lvbjpuLHNoaXZDU1M6ci5zaGl2Q1NTIT09ITEsc3VwcG9ydHNVbmtub3duRWxlbWVudHM6bCxzaGl2TWV0aG9kczpyLnNoaXZNZXRob2RzIT09ITEsdHlwZTpcImRlZmF1bHRcIixzaGl2RG9jdW1lbnQ6ZyxjcmVhdGVFbGVtZW50OmQsY3JlYXRlRG9jdW1lbnRGcmFnbWVudDp2fTtlLmh0bWw1PXksZyh0KX0odGhpcyx0KSxpLl92ZXJzaW9uPXIsaS5fcHJlZml4ZXM9cCxpLl9kb21QcmVmaXhlcz1tLGkuX2Nzc29tUHJlZml4ZXM9dixpLm1xPU4saS5oYXNFdmVudD1DLGkudGVzdFByb3A9ZnVuY3Rpb24oZSl7cmV0dXJuIEQoW2VdKX0saS50ZXN0QWxsUHJvcHM9SCxpLnRlc3RTdHlsZXM9VCxpLnByZWZpeGVkPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdD9IKGUsdCxuKTpIKGUsXCJwZnhcIil9LG8uY2xhc3NOYW1lPW8uY2xhc3NOYW1lLnJlcGxhY2UoLyhefFxccyluby1qcyhcXHN8JCkvLFwiJDEkMlwiKSsocz9cIiBqcyBcIitFLmpvaW4oXCIgXCIpOlwiXCIpLGl9KHRoaXMsdGhpcy5kb2N1bWVudCksZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1kLmNhbGwoZSl9ZnVuY3Rpb24gaShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZX1mdW5jdGlvbiBzKCl7fWZ1bmN0aW9uIG8oZSl7cmV0dXJuIWV8fFwibG9hZGVkXCI9PWV8fFwiY29tcGxldGVcIj09ZXx8XCJ1bmluaXRpYWxpemVkXCI9PWV9ZnVuY3Rpb24gdSgpe3ZhciBlPXYuc2hpZnQoKTttPTEsZT9lLnQ/aChmdW5jdGlvbigpeyhcImNcIj09ZS50P2suaW5qZWN0Q3NzOmsuaW5qZWN0SnMpKGUucywwLGUuYSxlLngsZS5lLDEpfSwwKTooZSgpLHUoKSk6bT0wfWZ1bmN0aW9uIGEoZSxuLHIsaSxzLGEsZil7ZnVuY3Rpb24gbCh0KXtpZighZCYmbyhjLnJlYWR5U3RhdGUpJiYody5yPWQ9MSwhbSYmdSgpLGMub25sb2FkPWMub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdCkpe1wiaW1nXCIhPWUmJmgoZnVuY3Rpb24oKXtiLnJlbW92ZUNoaWxkKGMpfSw1MCk7Zm9yKHZhciByIGluIFRbbl0pVFtuXS5oYXNPd25Qcm9wZXJ0eShyKSYmVFtuXVtyXS5vbmxvYWQoKX19dmFyIGY9Znx8ay5lcnJvclRpbWVvdXQsYz10LmNyZWF0ZUVsZW1lbnQoZSksZD0wLGc9MCx3PXt0OnIsczpuLGU6cyxhOmEseDpmfTsxPT09VFtuXSYmKGc9MSxUW25dPVtdKSxcIm9iamVjdFwiPT1lP2MuZGF0YT1uOihjLnNyYz1uLGMudHlwZT1lKSxjLndpZHRoPWMuaGVpZ2h0PVwiMFwiLGMub25lcnJvcj1jLm9ubG9hZD1jLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2wuY2FsbCh0aGlzLGcpfSx2LnNwbGljZShpLDAsdyksXCJpbWdcIiE9ZSYmKGd8fDI9PT1UW25dPyhiLmluc2VydEJlZm9yZShjLHk/bnVsbDpwKSxoKGwsZikpOlRbbl0ucHVzaChjKSl9ZnVuY3Rpb24gZihlLHQsbixyLHMpe3JldHVybiBtPTAsdD10fHxcImpcIixpKGUpP2EoXCJjXCI9PXQ/RTp3LGUsdCx0aGlzLmkrKyxuLHIscyk6KHYuc3BsaWNlKHRoaXMuaSsrLDAsZSksMT09di5sZW5ndGgmJnUoKSksdGhpc31mdW5jdGlvbiBsKCl7dmFyIGU9aztyZXR1cm4gZS5sb2FkZXI9e2xvYWQ6ZixpOjB9LGV9dmFyIGM9dC5kb2N1bWVudEVsZW1lbnQsaD1lLnNldFRpbWVvdXQscD10LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdLGQ9e30udG9TdHJpbmcsdj1bXSxtPTAsZz1cIk1vekFwcGVhcmFuY2VcImluIGMuc3R5bGUseT1nJiYhIXQuY3JlYXRlUmFuZ2UoKS5jb21wYXJlTm9kZSxiPXk/YzpwLnBhcmVudE5vZGUsYz1lLm9wZXJhJiZcIltvYmplY3QgT3BlcmFdXCI9PWQuY2FsbChlLm9wZXJhKSxjPSEhdC5hdHRhY2hFdmVudCYmIWMsdz1nP1wib2JqZWN0XCI6Yz9cInNjcmlwdFwiOlwiaW1nXCIsRT1jP1wic2NyaXB0XCI6dyxTPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09ZC5jYWxsKGUpfSx4PVtdLFQ9e30sTj17dGltZW91dDpmdW5jdGlvbihlLHQpe3JldHVybiB0Lmxlbmd0aCYmKGUudGltZW91dD10WzBdKSxlfX0sQyxrO2s9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXt2YXIgZT1lLnNwbGl0KFwiIVwiKSx0PXgubGVuZ3RoLG49ZS5wb3AoKSxyPWUubGVuZ3RoLG49e3VybDpuLG9yaWdVcmw6bixwcmVmaXhlczplfSxpLHMsbztmb3Iocz0wO3M8cjtzKyspbz1lW3NdLnNwbGl0KFwiPVwiKSwoaT1OW28uc2hpZnQoKV0pJiYobj1pKG4sbykpO2ZvcihzPTA7czx0O3MrKyluPXhbc10obik7cmV0dXJuIG59ZnVuY3Rpb24gbyhlLGkscyxvLHUpe3ZhciBhPXQoZSksZj1hLmF1dG9DYWxsYmFjazthLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCksYS5ieXBhc3N8fChpJiYoaT1yKGkpP2k6aVtlXXx8aVtvXXx8aVtlLnNwbGl0KFwiL1wiKS5wb3AoKS5zcGxpdChcIj9cIilbMF1dKSxhLmluc3RlYWQ/YS5pbnN0ZWFkKGUsaSxzLG8sdSk6KFRbYS51cmxdP2Eubm9leGVjPSEwOlRbYS51cmxdPTEscy5sb2FkKGEudXJsLGEuZm9yY2VDU1N8fCFhLmZvcmNlSlMmJlwiY3NzXCI9PWEudXJsLnNwbGl0KFwiLlwiKS5wb3AoKS5zcGxpdChcIj9cIikuc2hpZnQoKT9cImNcIjpuLGEubm9leGVjLGEuYXR0cnMsYS50aW1lb3V0KSwocihpKXx8cihmKSkmJnMubG9hZChmdW5jdGlvbigpe2woKSxpJiZpKGEub3JpZ1VybCx1LG8pLGYmJmYoYS5vcmlnVXJsLHUsbyksVFthLnVybF09Mn0pKSl9ZnVuY3Rpb24gdShlLHQpe2Z1bmN0aW9uIG4oZSxuKXtpZihlKXtpZihpKGUpKW58fChmPWZ1bmN0aW9uKCl7dmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2wuYXBwbHkodGhpcyxlKSxjKCl9KSxvKGUsZix0LDAsdSk7ZWxzZSBpZihPYmplY3QoZSk9PT1lKWZvcihwIGluIGg9ZnVuY3Rpb24oKXt2YXIgdD0wLG47Zm9yKG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiZ0Kys7cmV0dXJuIHR9KCksZSllLmhhc093blByb3BlcnR5KHApJiYoIW4mJiEtLWgmJihyKGYpP2Y9ZnVuY3Rpb24oKXt2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7bC5hcHBseSh0aGlzLGUpLGMoKX06ZltwXT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ZSYmZS5hcHBseSh0aGlzLHQpLGMoKX19KGxbcF0pKSxvKGVbcF0sZix0LHAsdSkpfWVsc2UhbiYmYygpfXZhciB1PSEhZS50ZXN0LGE9ZS5sb2FkfHxlLmJvdGgsZj1lLmNhbGxiYWNrfHxzLGw9ZixjPWUuY29tcGxldGV8fHMsaCxwO24odT9lLnllcDplLm5vcGUsISFhKSxhJiZuKGEpfXZhciBhLGYsYz10aGlzLnllcG5vcGUubG9hZGVyO2lmKGkoZSkpbyhlLDAsYywwKTtlbHNlIGlmKFMoZSkpZm9yKGE9MDthPGUubGVuZ3RoO2ErKylmPWVbYV0saShmKT9vKGYsMCxjLDApOlMoZik/ayhmKTpPYmplY3QoZik9PT1mJiZ1KGYsYyk7ZWxzZSBPYmplY3QoZSk9PT1lJiZ1KGUsYyl9LGsuYWRkUHJlZml4PWZ1bmN0aW9uKGUsdCl7TltlXT10fSxrLmFkZEZpbHRlcj1mdW5jdGlvbihlKXt4LnB1c2goZSl9LGsuZXJyb3JUaW1lb3V0PTFlNCxudWxsPT10LnJlYWR5U3RhdGUmJnQuYWRkRXZlbnRMaXN0ZW5lciYmKHQucmVhZHlTdGF0ZT1cImxvYWRpbmdcIix0LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQz1mdW5jdGlvbigpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixDLDApLHQucmVhZHlTdGF0ZT1cImNvbXBsZXRlXCJ9LDApKSxlLnllcG5vcGU9bCgpLGUueWVwbm9wZS5leGVjdXRlU3RhY2s9dSxlLnllcG5vcGUuaW5qZWN0SnM9ZnVuY3Rpb24oZSxuLHIsaSxhLGYpe3ZhciBsPXQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxjLGQsaT1pfHxrLmVycm9yVGltZW91dDtsLnNyYz1lO2ZvcihkIGluIHIpbC5zZXRBdHRyaWJ1dGUoZCxyW2RdKTtuPWY/dTpufHxzLGwub25yZWFkeXN0YXRlY2hhbmdlPWwub25sb2FkPWZ1bmN0aW9uKCl7IWMmJm8obC5yZWFkeVN0YXRlKSYmKGM9MSxuKCksbC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCl9LGgoZnVuY3Rpb24oKXtjfHwoYz0xLG4oMSkpfSxpKSxhP2wub25sb2FkKCk6cC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsLHApfSxlLnllcG5vcGUuaW5qZWN0Q3NzPWZ1bmN0aW9uKGUsbixyLGksbyxhKXt2YXIgaT10LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpLGYsbj1hP3U6bnx8cztpLmhyZWY9ZSxpLnJlbD1cInN0eWxlc2hlZXRcIixpLnR5cGU9XCJ0ZXh0L2Nzc1wiO2ZvcihmIGluIHIpaS5zZXRBdHRyaWJ1dGUoZixyW2ZdKTtvfHwocC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpLHApLGgobiwwKSl9fSh0aGlzLGRvY3VtZW50KSxNb2Rlcm5penIubG9hZD1mdW5jdGlvbigpe3llcG5vcGUuYXBwbHkod2luZG93LFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKX0sTW9kZXJuaXpyLmFkZFRlc3QoXCJjb3JzXCIsISEod2luZG93LlhNTEh0dHBSZXF1ZXN0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KSksTW9kZXJuaXpyLmFkZFRlc3QoXCJqc29uXCIsISF3aW5kb3cuSlNPTiYmISFKU09OLnBhcnNlKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=