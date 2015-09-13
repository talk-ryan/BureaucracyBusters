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
    
    //'ngTouch',
    
    'ui',
    //'ui.bootstrap',
    //'ui.bootstrap.carousel',
    //'ui.calendar',
    /*
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
    */
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
        templateUrl: 'templates/home/home.html',
        url: '/home'
    })

    .state('about', {
        templateUrl: 'templates/about/about.html',
        url: '/about'
    })

    .state('citations', {
        controller: 'citationsController',
        templateUrl: 'templates/citations/citations.html',
        url: '/citations'
    })

    .state('test1', {
        controller: 'test1Controller',
        templateUrl: 'templates/test/test1.html',
        url: '/test1'
    })

    .state('test2', {
        controller: 'test2Controller',
        templateUrl: 'templates/test/test2.html',
        url: '/test2'
    })

    .state('test3', {
        controller: 'test3Controller',
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
        $scope.userName = "bill@maintz.com";
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
        $scope.userName = "citizen@cane.com";
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
        $scope.userName = "citizen@cane.com";
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
        $scope.userName = "citizen@cane.com";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImJvb3RzdHJhcC5taW4uanMiLCJodG1sNXNoaXYuanMiLCJqcXVlcnkuZml0dGV4dC5qcyIsImpxdWVyeS5qcyIsImpxdWVyeS5rbm9iLmpzIiwianF1ZXJ5Lm5hdi5qcyIsImpxdWVyeS52ZWdhcy5taW4uanMiLCJtaXNjLmpzIiwib3dsLmNhcm91c2VsLm1pbi5qcyIsInJlc3BvbmQubWluLmpzIiwic2NyaXB0LmpzIiwic2NyaXB0LnJlc3BvbnNpdmUuanMiLCJzY3JvbGxSZXZlYWwuanMiLCJzbW9vdGhzY3JvbGwuanMiLCJ3b3cubWluLmpzIiwiemVyaWYuanMiLCJjb250cm9sbGVycy9jYWxlbmRhci5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvY2l0YXRpb25zLmNvbnRyb2xsZXIuanMiLCJjb250cm9sbGVycy9ob21lLmNvbnRyb2xsZXIuanMiLCJjb250cm9sbGVycy90ZXN0MS5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvdGVzdDIuY29udHJvbGxlci5qcyIsImNvbnRyb2xsZXJzL3Rlc3QzLmNvbnRyb2xsZXIuanMiLCJjb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLmpzIiwiZGlyZWN0aXZlcy9kaXJlY3RpdmVzLmpzIiwiZGlyZWN0aXZlcy90ZXN0LmRpcmVjdGl2ZXMuanMiLCJmaWx0ZXJzL2ZpbHRlcnMuanMiLCJzZXJ2aWNlcy9waG90b3MuZmFjdG9yeS5qcyIsInNlcnZpY2VzL3Bob3Rvcy5wcm92aWRlci5qcyIsInNlcnZpY2VzL3Bob3Rvcy5zZXJ2aWNlLmpzIiwic2VydmljZXMvcGhvdG9zLnV0aWxzLmZhY3RvcnkuanMiLCJzZXJ2aWNlcy9zbGlkZXMuc2VydmljZS5qcyIsInNlcnZpY2VzL3Rlc3QuZmFjdG9yeS5qcyIsInNlcnZpY2VzL3V0aWxzLmZhY3RvcnkuanMiLCJzZXJ2aWNlcy92aWRlb3MuZmFjdG9yeS5qcyIsInNlcnZpY2VzL3ZpZGVvcy5zZXJ2aWNlLmpzIiwidmVuZG9yL21vZGVybml6ci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzV2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdFBBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3grQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9TQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEdBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbGpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogYXBwLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBkZWJ1ZyA9IHRydWU7XHJcblxyXG4vLyBNYWluIGNvbmZpZ3VyYXRpb24gZmlsZS4gU2V0cyB1cCBBbmd1bGFySlMgbW9kdWxlIGFuZCByb3V0ZXMgYW5kIGFueSBvdGhlciBjb25maWcgb2JqZWN0c1xyXG4vLyBDb25maWd1cmF0aW9uIHdpdGggdWktcm91dGVyIGluc3RlYWQgb2Ygbmctcm91dGUuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgJ25nQW5pbWF0ZScsXHJcbiAgICAnbmdSZXNvdXJjZScsXHJcbiAgICBcclxuICAgIC8vJ25nVG91Y2gnLFxyXG4gICAgXHJcbiAgICAndWknLFxyXG4gICAgLy8ndWkuYm9vdHN0cmFwJyxcclxuICAgIC8vJ3VpLmJvb3RzdHJhcC5jYXJvdXNlbCcsXHJcbiAgICAvLyd1aS5jYWxlbmRhcicsXHJcbiAgICAvKlxyXG4gICAgJ3VpLmdyaWQnLFxyXG4gICAgJ3VpLmdyaWQuY2VsbE5hdicsXHJcbiAgICAndWkuZ3JpZC5lZGl0JyxcclxuICAgICd1aS5ncmlkLnJlc2l6ZUNvbHVtbnMnLFxyXG4gICAgJ3VpLmdyaWQucGlubmluZycsXHJcbiAgICAndWkuZ3JpZC5zZWxlY3Rpb24nLFxyXG4gICAgJ3VpLmdyaWQubW92ZUNvbHVtbnMnLFxyXG4gICAgJ3VpLmdyaWQuZXhwb3J0ZXInLFxyXG4gICAgJ3VpLmdyaWQuaW1wb3J0ZXInLFxyXG4gICAgJ3VpLmdyaWQuZ3JvdXBpbmcnLFxyXG4gICAgKi9cclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ3VpLnNvcnRhYmxlJyxcclxuICAgICdhcHAuY29udHJvbGxlcnMnLFxyXG4gICAgJ2FwcC5maWx0ZXJzJyxcclxuICAgICdhcHAuZGlyZWN0aXZlcycsXHJcbiAgICAnYXBwLnNlcnZpY2VzJ1xyXG5dKTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoYXBwKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG52YXIgYXBwQ29udHJvbGxlcnMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pOyAgICAgLy9EZWZpbmUgdGhlIGNvbnRyb2xsZXJzIG1vZHVsZVxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSkgZGVmaW5lZFwiKTtcclxufVxyXG52YXIgYXBwRmlsdGVycyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZmlsdGVycycsIFtdKTsgICAgIC8vRGVmaW5lIHRoZSBjb250cm9sbGVycyBtb2R1bGVcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhbmd1bGFyLm1vZHVsZSgnYXBwLmZpbHRlcnMnLCBbXSkgZGVmaW5lZFwiKTtcclxufVxyXG52YXIgYXBwRGlyZWN0aXZlcyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKTsgICAgIC8vRGVmaW5lIHRoZSBkaXJlY3RpdmUgbW9kdWxlXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pIGRlZmluZWRcIik7XHJcbn1cclxudmFyIGFwcFNlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtcclxuICAgICduZ1Jlc291cmNlJ1xyXG4gICAgXSk7ICAgICAvL0RlZmluZSB0aGUgc2VydmljZXMgbW9kdWxlXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFsnbmdSZXNvdXJjZSddKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vL2FwcC5ydW4oXHJcbi8vICAgIFsgICAgICAgICAgICAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcclxuLy8gICAgICAgIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAgICRzdGF0ZSwgICAkc3RhdGVQYXJhbXMpIHtcclxuLy8gICAgICAgICAgICAvKiBJdCdzIHZlcnkgaGFuZHkgdG8gYWRkIHJlZmVyZW5jZXMgdG8gJHN0YXRlIGFuZCAkc3RhdGVQYXJhbXMgdG8gdGhlICRyb290U2NvcGVcclxuLy8gICAgICAgICAgICAqKiBzbyB0aGF0IHlvdSBjYW4gYWNjZXNzIHRoZW0gZnJvbSBhbnkgc2NvcGUgd2l0aGluIHlvdXIgYXBwbGljYXRpb25zLlxyXG4vLyAgICAgICAgICAgICoqIEZvciBleGFtcGxlLCA8bGkgbmctY2xhc3M9XCJ7IGFjdGl2ZTogJHN0YXRlLmluY2x1ZGVzKCdjb250YWN0cy5saXN0JykgfVwiPiB3aWxsXHJcbi8vICAgICAgICAgICAgKiogc2V0IHRoZSA8bGk+IHRvIGFjdGl2ZSB3aGVuZXZlciAnY29udGFjdHMubGlzdCcgb3Igb25lIG9mIGl0cyBkZWNlbmRlbnRzIGlzIGFjdGl2ZS5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICRyb290U2NvcGUuc3RhdGUgPSAkc3RhdGU7XHJcbi8vICAgICAgICAgICAgJHJvb3RTY29wZS5zdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcclxuLy9cclxuLy8gICAgICAgICAgICAkcm9vdFNjb3BlLnBhZ2VMb2FkZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIC8vJHJvb3RTY29wZS5lbmRQb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbi8vICAgICAgICAgICAgJHJvb3RTY29wZS5lbmRQb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbi8vXHJcbi8vICAgICAgICAgICAgJHJvb3RTY29wZS5jbGVhcm1lbnVjbGFzcyA9IHRydWU7XHJcbi8vXHJcbi8vICAgICAgICB9XHJcbi8vICAgIF1cclxuLy8pO1xyXG5cclxuYXBwLmNvbmZpZyggWyckdXJsUm91dGVyUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInLFxyXG4gICAgZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgICAkc3RhdGVQcm92aWRlcikge1xyXG4gICAgXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG5cclxuICAgIC8vIHVybCAtIG1hdGNoZXMgdGhlIHVpLXNyZWYgb24gdGhlIGluZGV4Lmh0bWwgcGFnZVxyXG4gICAgLy8gdGVtcGxhdGVVcmwgLSBtYXRjaGVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGFydGlhbCBodG1sIGZpbGVcclxuICAgIC8vIGNvbnRyb2xsZXIgLSBtYXRjaGVzIHRoZSBuYW1lIG9mIHRoZSBjb250cm9sbGVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBhZ2VcclxuICAgIC8vIHNlcnZpY2UgLSBpZGVudGlmaWVzIHRoZSBzZXJ2aWNlIHVzZWQgdG8gZ2V0IHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhpcyBwYWdlLlxyXG4gICAgLy9cclxuICAgIC8vIFRvIGJlIGRpc3BsYXllZCBvbiBtYWluIHNjcmVlbjpcclxuICAgIC8vICRzdGF0ZSAgICAgICAgICA9IHt7ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfX1cclxuICAgIC8vICRzdGF0ZVBhcmFtcyAgICA9IHt7ICRzdGF0ZVBhcmFtcyB9fVxyXG4gICAgLy8gJHN0YXRlIGZ1bGwgdXJsID0ge3sgJHN0YXRlLiRjdXJyZW50LnVybC5zb3VyY2UgfX1cclxuICAgIC8vICRzdGF0ZVByb3ZpZGVyICA9IHt7ICRzdGF0ZVByb3ZpZGVyIH19XHJcbiAgICBcclxuICAgIC8qIEhvbWUgKi9cclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICBjbGVhcm1lbnVjbGFzczogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL2hvbWUnXHJcbiAgICB9KVxyXG5cclxuICAgIC5zdGF0ZSgnYWJvdXQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWJvdXQvYWJvdXQuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL2Fib3V0J1xyXG4gICAgfSlcclxuXHJcbiAgICAuc3RhdGUoJ2NpdGF0aW9ucycsIHtcclxuICAgICAgICBjb250cm9sbGVyOiAnY2l0YXRpb25zQ29udHJvbGxlcicsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY2l0YXRpb25zL2NpdGF0aW9ucy5odG1sJyxcclxuICAgICAgICB1cmw6ICcvY2l0YXRpb25zJ1xyXG4gICAgfSlcclxuXHJcbiAgICAuc3RhdGUoJ3Rlc3QxJywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICd0ZXN0MUNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Rlc3QvdGVzdDEuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL3Rlc3QxJ1xyXG4gICAgfSlcclxuXHJcbiAgICAuc3RhdGUoJ3Rlc3QyJywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICd0ZXN0MkNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Rlc3QvdGVzdDIuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL3Rlc3QyJ1xyXG4gICAgfSlcclxuXHJcbiAgICAuc3RhdGUoJ3Rlc3QzJywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICd0ZXN0M0NvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Rlc3QvdGVzdDMuaHRtbCcsXHJcbiAgICAgICAgdXJsOiAnL3Rlc3QzJ1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLyogUmVnaXN0ZXIgKi9cclxuICAgIC5zdGF0ZSgncmVnaXN0ZXInLCB7XHJcbiAgICAgICAgY29udHJvbGxlcjogJ3VzZXJDb250cm9sbGVyJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hY2NvdW50L3JlZ2lzdGVyLmh0bWwnLFxyXG4gICAgICAgIHVybDogXCIvcmVnaXN0ZXJcIlxyXG4gICAgfSlcclxuXHJcbiAgIC8qIExvZ2luICovXHJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICd1c2VyQ29udHJvbGxlcicsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWNjb3VudC9sb2dpbi5odG1sJyxcclxuICAgICAgICB1cmw6IFwiL2xvZ2luXCJcclxuICAgIH0pXHJcblxyXG4gICAvKiBMb2dvdXQgKi9cclxuICAgIC5zdGF0ZSgnbG9nb3V0Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FjY291bnQvbG9nb3V0Lmh0bWwnLFxyXG4gICAgICAgIHVybDogXCIvbG9nb3V0XCJcclxuICAgIH0pO1xyXG5cclxuICAgICR1cmxSb3V0ZXJQcm92aWRlclxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICoqIFRoZSBgd2hlbmAgbWV0aG9kIHNheXMgaWYgdGhlIHVybCBpcyBldmVyIHRoZSAxc3QgcGFyYW0sIHRoZW4gcmVkaXJlY3QgdG8gdGhlIDJuZCBwYXJhbVxyXG4gICAgICAgICoqIEhlcmUgd2UgYXJlIGp1c3Qgc2V0dGluZyB1cCBzb21lIGNvbnZlbmllbmNlIHVybHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICAud2hlbignL2M/aWQnLCAnL3RlbXBsYXRlcy9jb250YWN0cy86aWQnKVxyXG4gICAgICAgIC53aGVuKCcvdXNlci86aWQnLCAnL3RlbXBsYXRlcy9jb250YWN0cy86aWQnKVxyXG5cclxuICAgICAgICAub3RoZXJ3aXNlKCcvaG9tZScpO1xyXG5cclxuXHJcblxyXG59XSk7XHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFuZ3VsYXIuY29uZmlnKFsnJHVybFJvdXRlclByb3ZpZGVyJywgJyRzdGF0ZVByb3ZpZGVyJ10pIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyggXCJ3ZWJzaXRlIGlzIG5vdyByZWFkeSB0byBiZSBkaXNwbGF5ZWQhXCIgKTtcclxuICAgICQoIFwiI3N0YXRlRGlzcGxheVwiICkuY3NzKCBcInZpc2libGVcIiwgXCJ0cnVlXCIgKTtcclxufSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIGFwcC5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohXHJcbiAqIEJvb3RzdHJhcCB2My4zLjUgKGh0dHA6Ly9nZXRib290c3RyYXAuY29tKVxyXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE1IFR3aXR0ZXIsIEluYy5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG5pZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5XCIpOytmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1hLmZuLmpxdWVyeS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCIuXCIpO2lmKGJbMF08MiYmYlsxXTw5fHwxPT1iWzBdJiY5PT1iWzFdJiZiWzJdPDEpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkgdmVyc2lvbiAxLjkuMSBvciBoaWdoZXJcIil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm9vdHN0cmFwXCIpLGI9e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm9UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn07Zm9yKHZhciBjIGluIGIpaWYodm9pZCAwIT09YS5zdHlsZVtjXSlyZXR1cm57ZW5kOmJbY119O3JldHVybiExfWEuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oYil7dmFyIGM9ITEsZD10aGlzO2EodGhpcykub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtjPSEwfSk7dmFyIGU9ZnVuY3Rpb24oKXtjfHxhKGQpLnRyaWdnZXIoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKX07cmV0dXJuIHNldFRpbWVvdXQoZSxiKSx0aGlzfSxhKGZ1bmN0aW9uKCl7YS5zdXBwb3J0LnRyYW5zaXRpb249YigpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiYoYS5ldmVudC5zcGVjaWFsLmJzVHJhbnNpdGlvbkVuZD17YmluZFR5cGU6YS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGRlbGVnYXRlVHlwZTphLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsaGFuZGxlOmZ1bmN0aW9uKGIpe3JldHVybiBhKGIudGFyZ2V0KS5pcyh0aGlzKT9iLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIDB9fSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxlPWMuZGF0YShcImJzLmFsZXJ0XCIpO2V8fGMuZGF0YShcImJzLmFsZXJ0XCIsZT1uZXcgZCh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0uY2FsbChjKX0pfXZhciBjPSdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nLGQ9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrXCIsYyx0aGlzLmNsb3NlKX07ZC5WRVJTSU9OPVwiMy4zLjVcIixkLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtnLmRldGFjaCgpLnRyaWdnZXIoXCJjbG9zZWQuYnMuYWxlcnRcIikucmVtb3ZlKCl9dmFyIGU9YSh0aGlzKSxmPWUuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2Z8fChmPWUuYXR0cihcImhyZWZcIiksZj1mJiZmLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBnPWEoZik7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGcubGVuZ3RofHwoZz1lLmNsb3Nlc3QoXCIuYWxlcnRcIikpLGcudHJpZ2dlcihiPWEuRXZlbnQoXCJjbG9zZS5icy5hbGVydFwiKSksYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KGcucmVtb3ZlQ2xhc3MoXCJpblwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmZy5oYXNDbGFzcyhcImZhZGVcIik/Zy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixjKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pOmMoKSl9O3ZhciBlPWEuZm4uYWxlcnQ7YS5mbi5hbGVydD1iLGEuZm4uYWxlcnQuQ29uc3RydWN0b3I9ZCxhLmZuLmFsZXJ0Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hbGVydD1lLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYWxlcnQuZGF0YS1hcGlcIixjLGQucHJvdG90eXBlLmNsb3NlKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmJ1dHRvblwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiO2V8fGQuZGF0YShcImJzLmJ1dHRvblwiLGU9bmV3IGModGhpcyxmKSksXCJ0b2dnbGVcIj09Yj9lLnRvZ2dsZSgpOmImJmUuc2V0U3RhdGUoYil9KX12YXIgYz1mdW5jdGlvbihiLGQpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLmlzTG9hZGluZz0hMX07Yy5WRVJTSU9OPVwiMy4zLjVcIixjLkRFRkFVTFRTPXtsb2FkaW5nVGV4dDpcImxvYWRpbmcuLi5cIn0sYy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYil7dmFyIGM9XCJkaXNhYmxlZFwiLGQ9dGhpcy4kZWxlbWVudCxlPWQuaXMoXCJpbnB1dFwiKT9cInZhbFwiOlwiaHRtbFwiLGY9ZC5kYXRhKCk7Yis9XCJUZXh0XCIsbnVsbD09Zi5yZXNldFRleHQmJmQuZGF0YShcInJlc2V0VGV4dFwiLGRbZV0oKSksc2V0VGltZW91dChhLnByb3h5KGZ1bmN0aW9uKCl7ZFtlXShudWxsPT1mW2JdP3RoaXMub3B0aW9uc1tiXTpmW2JdKSxcImxvYWRpbmdUZXh0XCI9PWI/KHRoaXMuaXNMb2FkaW5nPSEwLGQuYWRkQ2xhc3MoYykuYXR0cihjLGMpKTp0aGlzLmlzTG9hZGluZyYmKHRoaXMuaXNMb2FkaW5nPSExLGQucmVtb3ZlQ2xhc3MoYykucmVtb3ZlQXR0cihjKSl9LHRoaXMpLDApfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt2YXIgYT0hMCxiPXRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScpO2lmKGIubGVuZ3RoKXt2YXIgYz10aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKTtcInJhZGlvXCI9PWMucHJvcChcInR5cGVcIik/KGMucHJvcChcImNoZWNrZWRcIikmJihhPSExKSxiLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIikpOlwiY2hlY2tib3hcIj09Yy5wcm9wKFwidHlwZVwiKSYmKGMucHJvcChcImNoZWNrZWRcIikhPT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoYT0hMSksdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSksYy5wcm9wKFwiY2hlY2tlZFwiLHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpLGEmJmMudHJpZ2dlcihcImNoYW5nZVwiKX1lbHNlIHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtcHJlc3NlZFwiLCF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKSx0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpfTt2YXIgZD1hLmZuLmJ1dHRvbjthLmZuLmJ1dHRvbj1iLGEuZm4uYnV0dG9uLkNvbnN0cnVjdG9yPWMsYS5mbi5idXR0b24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmJ1dHRvbj1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLGZ1bmN0aW9uKGMpe3ZhciBkPWEoYy50YXJnZXQpO2QuaGFzQ2xhc3MoXCJidG5cIil8fChkPWQuY2xvc2VzdChcIi5idG5cIikpLGIuY2FsbChkLFwidG9nZ2xlXCIpLGEoYy50YXJnZXQpLmlzKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKXx8YShjLnRhcmdldCkuaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpfHxjLnByZXZlbnREZWZhdWx0KCl9KS5vbihcImZvY3VzLmJzLmJ1dHRvbi5kYXRhLWFwaSBibHVyLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbihiKXthKGIudGFyZ2V0KS5jbG9zZXN0KFwiLmJ0blwiKS50b2dnbGVDbGFzcyhcImZvY3VzXCIsL15mb2N1cyhpbik/JC8udGVzdChiLnR5cGUpKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIiksZj1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxnPVwic3RyaW5nXCI9PXR5cGVvZiBiP2I6Zi5zbGlkZTtlfHxkLmRhdGEoXCJicy5jYXJvdXNlbFwiLGU9bmV3IGModGhpcyxmKSksXCJudW1iZXJcIj09dHlwZW9mIGI/ZS50byhiKTpnP2VbZ10oKTpmLmludGVydmFsJiZlLnBhdXNlKCkuY3ljbGUoKX0pfXZhciBjPWZ1bmN0aW9uKGIsYyl7dGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuJGluZGljYXRvcnM9dGhpcy4kZWxlbWVudC5maW5kKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIiksdGhpcy5vcHRpb25zPWMsdGhpcy5wYXVzZWQ9bnVsbCx0aGlzLnNsaWRpbmc9bnVsbCx0aGlzLmludGVydmFsPW51bGwsdGhpcy4kYWN0aXZlPW51bGwsdGhpcy4kaXRlbXM9bnVsbCx0aGlzLm9wdGlvbnMua2V5Ym9hcmQmJnRoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLmtleWRvd24sdGhpcykpLFwiaG92ZXJcIj09dGhpcy5vcHRpb25zLnBhdXNlJiYhKFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpJiZ0aGlzLiRlbGVtZW50Lm9uKFwibW91c2VlbnRlci5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5wYXVzZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLmN5Y2xlLHRoaXMpKX07Yy5WRVJTSU9OPVwiMy4zLjVcIixjLlRSQU5TSVRJT05fRFVSQVRJT049NjAwLGMuREVGQVVMVFM9e2ludGVydmFsOjVlMyxwYXVzZTpcImhvdmVyXCIsd3JhcDohMCxrZXlib2FyZDohMH0sYy5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihhKXtpZighL2lucHV0fHRleHRhcmVhL2kudGVzdChhLnRhcmdldC50YWdOYW1lKSl7c3dpdGNoKGEud2hpY2gpe2Nhc2UgMzc6dGhpcy5wcmV2KCk7YnJlYWs7Y2FzZSAzOTp0aGlzLm5leHQoKTticmVhaztkZWZhdWx0OnJldHVybn1hLnByZXZlbnREZWZhdWx0KCl9fSxjLnByb3RvdHlwZS5jeWNsZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSExKSx0aGlzLmludGVydmFsJiZjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCYmIXRoaXMucGF1c2VkJiYodGhpcy5pbnRlcnZhbD1zZXRJbnRlcnZhbChhLnByb3h5KHRoaXMubmV4dCx0aGlzKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKSx0aGlzfSxjLnByb3RvdHlwZS5nZXRJdGVtSW5kZXg9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuJGl0ZW1zPWEucGFyZW50KCkuY2hpbGRyZW4oXCIuaXRlbVwiKSx0aGlzLiRpdGVtcy5pbmRleChhfHx0aGlzLiRhY3RpdmUpfSxjLnByb3RvdHlwZS5nZXRJdGVtRm9yRGlyZWN0aW9uPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5nZXRJdGVtSW5kZXgoYiksZD1cInByZXZcIj09YSYmMD09PWN8fFwibmV4dFwiPT1hJiZjPT10aGlzLiRpdGVtcy5sZW5ndGgtMTtpZihkJiYhdGhpcy5vcHRpb25zLndyYXApcmV0dXJuIGI7dmFyIGU9XCJwcmV2XCI9PWE/LTE6MSxmPShjK2UpJXRoaXMuJGl0ZW1zLmxlbmd0aDtyZXR1cm4gdGhpcy4kaXRlbXMuZXEoZil9LGMucHJvdG90eXBlLnRvPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz10aGlzLmdldEl0ZW1JbmRleCh0aGlzLiRhY3RpdmU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpKTtyZXR1cm4gYT50aGlzLiRpdGVtcy5sZW5ndGgtMXx8MD5hP3ZvaWQgMDp0aGlzLnNsaWRpbmc/dGhpcy4kZWxlbWVudC5vbmUoXCJzbGlkLmJzLmNhcm91c2VsXCIsZnVuY3Rpb24oKXtiLnRvKGEpfSk6Yz09YT90aGlzLnBhdXNlKCkuY3ljbGUoKTp0aGlzLnNsaWRlKGE+Yz9cIm5leHRcIjpcInByZXZcIix0aGlzLiRpdGVtcy5lcShhKSl9LGMucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITApLHRoaXMuJGVsZW1lbnQuZmluZChcIi5uZXh0LCAucHJldlwiKS5sZW5ndGgmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCksdGhpcy5jeWNsZSghMCkpLHRoaXMuaW50ZXJ2YWw9Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzfSxjLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGluZz92b2lkIDA6dGhpcy5zbGlkZShcIm5leHRcIil9LGMucHJvdG90eXBlLnByZXY9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkaW5nP3ZvaWQgMDp0aGlzLnNsaWRlKFwicHJldlwiKX0sYy5wcm90b3R5cGUuc2xpZGU9ZnVuY3Rpb24oYixkKXt2YXIgZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIiksZj1kfHx0aGlzLmdldEl0ZW1Gb3JEaXJlY3Rpb24oYixlKSxnPXRoaXMuaW50ZXJ2YWwsaD1cIm5leHRcIj09Yj9cImxlZnRcIjpcInJpZ2h0XCIsaT10aGlzO2lmKGYuaGFzQ2xhc3MoXCJhY3RpdmVcIikpcmV0dXJuIHRoaXMuc2xpZGluZz0hMTt2YXIgaj1mWzBdLGs9YS5FdmVudChcInNsaWRlLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246aH0pO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihrKSwhay5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7aWYodGhpcy5zbGlkaW5nPSEwLGcmJnRoaXMucGF1c2UoKSx0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aCl7dGhpcy4kaW5kaWNhdG9ycy5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgbD1hKHRoaXMuJGluZGljYXRvcnMuY2hpbGRyZW4oKVt0aGlzLmdldEl0ZW1JbmRleChmKV0pO2wmJmwuYWRkQ2xhc3MoXCJhY3RpdmVcIil9dmFyIG09YS5FdmVudChcInNsaWQuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDpqLGRpcmVjdGlvbjpofSk7cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwic2xpZGVcIik/KGYuYWRkQ2xhc3MoYiksZlswXS5vZmZzZXRXaWR0aCxlLmFkZENsYXNzKGgpLGYuYWRkQ2xhc3MoaCksZS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2YucmVtb3ZlQ2xhc3MoW2IsaF0uam9pbihcIiBcIikpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGUucmVtb3ZlQ2xhc3MoW1wiYWN0aXZlXCIsaF0uam9pbihcIiBcIikpLGkuc2xpZGluZz0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS4kZWxlbWVudC50cmlnZ2VyKG0pfSwwKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTikpOihlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy5zbGlkaW5nPSExLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihtKSksZyYmdGhpcy5jeWNsZSgpLHRoaXN9fTt2YXIgZD1hLmZuLmNhcm91c2VsO2EuZm4uY2Fyb3VzZWw9YixhLmZuLmNhcm91c2VsLkNvbnN0cnVjdG9yPWMsYS5mbi5jYXJvdXNlbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY2Fyb3VzZWw9ZCx0aGlzfTt2YXIgZT1mdW5jdGlvbihjKXt2YXIgZCxlPWEodGhpcyksZj1hKGUuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoZD1lLmF0dHIoXCJocmVmXCIpKSYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKTtpZihmLmhhc0NsYXNzKFwiY2Fyb3VzZWxcIikpe3ZhciBnPWEuZXh0ZW5kKHt9LGYuZGF0YSgpLGUuZGF0YSgpKSxoPWUuYXR0cihcImRhdGEtc2xpZGUtdG9cIik7aCYmKGcuaW50ZXJ2YWw9ITEpLGIuY2FsbChmLGcpLGgmJmYuZGF0YShcImJzLmNhcm91c2VsXCIpLnRvKGgpLGMucHJldmVudERlZmF1bHQoKX19O2EoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLXNsaWRlXVwiLGUpLm9uKFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLXNsaWRlLXRvXVwiLGUpLGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpO2IuY2FsbChjLGMuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7dmFyIGMsZD1iLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KGM9Yi5hdHRyKFwiaHJlZlwiKSkmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKTtyZXR1cm4gYShkKX1mdW5jdGlvbiBjKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuY29sbGFwc2VcIiksZj1hLmV4dGVuZCh7fSxkLkRFRkFVTFRTLGMuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKTshZSYmZi50b2dnbGUmJi9zaG93fGhpZGUvLnRlc3QoYikmJihmLnRvZ2dsZT0hMSksZXx8Yy5kYXRhKFwiYnMuY29sbGFwc2VcIixlPW5ldyBkKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgZD1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sZC5ERUZBVUxUUyxjKSx0aGlzLiR0cmlnZ2VyPWEoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJytiLmlkKydcIl0sW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJytiLmlkKydcIl0nKSx0aGlzLnRyYW5zaXRpb25pbmc9bnVsbCx0aGlzLm9wdGlvbnMucGFyZW50P3RoaXMuJHBhcmVudD10aGlzLmdldFBhcmVudCgpOnRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuJGVsZW1lbnQsdGhpcy4kdHJpZ2dlciksdGhpcy5vcHRpb25zLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX07ZC5WRVJTSU9OPVwiMy4zLjVcIixkLlRSQU5TSVRJT05fRFVSQVRJT049MzUwLGQuREVGQVVMVFM9e3RvZ2dsZTohMH0sZC5wcm90b3R5cGUuZGltZW5zaW9uPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcIndpZHRoXCIpO3JldHVybiBhP1wid2lkdGhcIjpcImhlaWdodFwifSxkLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKSl7dmFyIGIsZT10aGlzLiRwYXJlbnQmJnRoaXMuJHBhcmVudC5jaGlsZHJlbihcIi5wYW5lbFwiKS5jaGlsZHJlbihcIi5pbiwgLmNvbGxhcHNpbmdcIik7aWYoIShlJiZlLmxlbmd0aCYmKGI9ZS5kYXRhKFwiYnMuY29sbGFwc2VcIiksYiYmYi50cmFuc2l0aW9uaW5nKSkpe3ZhciBmPWEuRXZlbnQoXCJzaG93LmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihmKSwhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7ZSYmZS5sZW5ndGgmJihjLmNhbGwoZSxcImhpZGVcIiksYnx8ZS5kYXRhKFwiYnMuY29sbGFwc2VcIixudWxsKSk7dmFyIGc9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VcIikuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpW2ddKDApLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMuJHRyaWdnZXIucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGg9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlIGluXCIpW2ddKFwiXCIpLHRoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLmNvbGxhcHNlXCIpfTtpZighYS5zdXBwb3J0LnRyYW5zaXRpb24pcmV0dXJuIGguY2FsbCh0aGlzKTt2YXIgaT1hLmNhbWVsQ2FzZShbXCJzY3JvbGxcIixnXS5qb2luKFwiLVwiKSk7dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGgsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTilbZ10odGhpcy4kZWxlbWVudFswXVtpXSl9fX19LGQucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBiPWEuRXZlbnQoXCJoaWRlLmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKSwhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGM9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50W2NdKHRoaXMuJGVsZW1lbnRbY10oKSlbMF0ub2Zmc2V0SGVpZ2h0LHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLnJlbW92ZUNsYXNzKFwiY29sbGFwc2UgaW5cIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy4kdHJpZ2dlci5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSx0aGlzLnRyYW5zaXRpb25pbmc9MTt2YXIgZT1mdW5jdGlvbigpe3RoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiY29sbGFwc2VcIikudHJpZ2dlcihcImhpZGRlbi5icy5jb2xsYXBzZVwiKX07cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uP3ZvaWQgdGhpcy4kZWxlbWVudFtjXSgwKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGUsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTik6ZS5jYWxsKHRoaXMpfX19LGQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe3RoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpP1wiaGlkZVwiOlwic2hvd1wiXSgpfSxkLnByb3RvdHlwZS5nZXRQYXJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzLm9wdGlvbnMucGFyZW50KS5maW5kKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIicrdGhpcy5vcHRpb25zLnBhcmVudCsnXCJdJykuZWFjaChhLnByb3h5KGZ1bmN0aW9uKGMsZCl7dmFyIGU9YShkKTt0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhiKGUpLGUpfSx0aGlzKSkuZW5kKCl9LGQucHJvdG90eXBlLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcz1mdW5jdGlvbihhLGIpe3ZhciBjPWEuaGFzQ2xhc3MoXCJpblwiKTthLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsYyksYi50b2dnbGVDbGFzcyhcImNvbGxhcHNlZFwiLCFjKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGMpfTt2YXIgZT1hLmZuLmNvbGxhcHNlO2EuZm4uY29sbGFwc2U9YyxhLmZuLmNvbGxhcHNlLkNvbnN0cnVjdG9yPWQsYS5mbi5jb2xsYXBzZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY29sbGFwc2U9ZSx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyxmdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpO2UuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxkLnByZXZlbnREZWZhdWx0KCk7dmFyIGY9YihlKSxnPWYuZGF0YShcImJzLmNvbGxhcHNlXCIpLGg9Zz9cInRvZ2dsZVwiOmUuZGF0YSgpO2MuY2FsbChmLGgpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7dmFyIGM9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIik7Y3x8KGM9Yi5hdHRyKFwiaHJlZlwiKSxjPWMmJi8jW0EtWmEtel0vLnRlc3QoYykmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGQ9YyYmYShjKTtyZXR1cm4gZCYmZC5sZW5ndGg/ZDpiLnBhcmVudCgpfWZ1bmN0aW9uIGMoYyl7YyYmMz09PWMud2hpY2h8fChhKGUpLnJlbW92ZSgpLGEoZikuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1iKGQpLGY9e3JlbGF0ZWRUYXJnZXQ6dGhpc307ZS5oYXNDbGFzcyhcIm9wZW5cIikmJihjJiZcImNsaWNrXCI9PWMudHlwZSYmL2lucHV0fHRleHRhcmVhL2kudGVzdChjLnRhcmdldC50YWdOYW1lKSYmYS5jb250YWlucyhlWzBdLGMudGFyZ2V0KXx8KGUudHJpZ2dlcihjPWEuRXZlbnQoXCJoaWRlLmJzLmRyb3Bkb3duXCIsZikpLGMuaXNEZWZhdWx0UHJldmVudGVkKCl8fChkLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxlLnJlbW92ZUNsYXNzKFwib3BlblwiKS50cmlnZ2VyKFwiaGlkZGVuLmJzLmRyb3Bkb3duXCIsZikpKSl9KSl9ZnVuY3Rpb24gZChiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuZGF0YShcImJzLmRyb3Bkb3duXCIpO2R8fGMuZGF0YShcImJzLmRyb3Bkb3duXCIsZD1uZXcgZyh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmRbYl0uY2FsbChjKX0pfXZhciBlPVwiLmRyb3Bkb3duLWJhY2tkcm9wXCIsZj0nW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLGc9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsdGhpcy50b2dnbGUpfTtnLlZFUlNJT049XCIzLjMuNVwiLGcucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpO2lmKCFlLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpe3ZhciBmPWIoZSksZz1mLmhhc0NsYXNzKFwib3BlblwiKTtpZihjKCksIWcpe1wib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJiFmLmNsb3Nlc3QoXCIubmF2YmFyLW5hdlwiKS5sZW5ndGgmJmEoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuYWRkQ2xhc3MoXCJkcm9wZG93bi1iYWNrZHJvcFwiKS5pbnNlcnRBZnRlcihhKHRoaXMpKS5vbihcImNsaWNrXCIsYyk7dmFyIGg9e3JlbGF0ZWRUYXJnZXQ6dGhpc307aWYoZi50cmlnZ2VyKGQ9YS5FdmVudChcInNob3cuYnMuZHJvcGRvd25cIixoKSksZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47ZS50cmlnZ2VyKFwiZm9jdXNcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksZi50b2dnbGVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihcInNob3duLmJzLmRyb3Bkb3duXCIsaCl9cmV0dXJuITF9fSxnLnByb3RvdHlwZS5rZXlkb3duPWZ1bmN0aW9uKGMpe2lmKC8oMzh8NDB8Mjd8MzIpLy50ZXN0KGMud2hpY2gpJiYhL2lucHV0fHRleHRhcmVhL2kudGVzdChjLnRhcmdldC50YWdOYW1lKSl7dmFyIGQ9YSh0aGlzKTtpZihjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSwhZC5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZT1iKGQpLGc9ZS5oYXNDbGFzcyhcIm9wZW5cIik7aWYoIWcmJjI3IT1jLndoaWNofHxnJiYyNz09Yy53aGljaClyZXR1cm4gMjc9PWMud2hpY2gmJmUuZmluZChmKS50cmlnZ2VyKFwiZm9jdXNcIiksZC50cmlnZ2VyKFwiY2xpY2tcIik7dmFyIGg9XCIgbGk6bm90KC5kaXNhYmxlZCk6dmlzaWJsZSBhXCIsaT1lLmZpbmQoXCIuZHJvcGRvd24tbWVudVwiK2gpO2lmKGkubGVuZ3RoKXt2YXIgaj1pLmluZGV4KGMudGFyZ2V0KTszOD09Yy53aGljaCYmaj4wJiZqLS0sNDA9PWMud2hpY2gmJmo8aS5sZW5ndGgtMSYmaisrLH5qfHwoaj0wKSxpLmVxKGopLnRyaWdnZXIoXCJmb2N1c1wiKX19fX07dmFyIGg9YS5mbi5kcm9wZG93bjthLmZuLmRyb3Bkb3duPWQsYS5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvcj1nLGEuZm4uZHJvcGRvd24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRyb3Bkb3duPWgsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGMpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcIi5kcm9wZG93biBmb3JtXCIsZnVuY3Rpb24oYSl7YS5zdG9wUHJvcGFnYXRpb24oKX0pLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixmLGcucHJvdG90eXBlLnRvZ2dsZSkub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZixnLnByb3RvdHlwZS5rZXlkb3duKS5vbihcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcIi5kcm9wZG93bi1tZW51XCIsZy5wcm90b3R5cGUua2V5ZG93bil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYixkKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUuZGF0YShcImJzLm1vZGFsXCIpLGc9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxlLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7Znx8ZS5kYXRhKFwiYnMubW9kYWxcIixmPW5ldyBjKHRoaXMsZykpLFwic3RyaW5nXCI9PXR5cGVvZiBiP2ZbYl0oZCk6Zy5zaG93JiZmLnNob3coZCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMub3B0aW9ucz1jLHRoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy4kZGlhbG9nPXRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1kaWFsb2dcIiksdGhpcy4kYmFja2Ryb3A9bnVsbCx0aGlzLmlzU2hvd249bnVsbCx0aGlzLm9yaWdpbmFsQm9keVBhZD1udWxsLHRoaXMuc2Nyb2xsYmFyV2lkdGg9MCx0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITEsdGhpcy5vcHRpb25zLnJlbW90ZSYmdGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWNvbnRlbnRcIikubG9hZCh0aGlzLm9wdGlvbnMucmVtb3RlLGEucHJveHkoZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJsb2FkZWQuYnMubW9kYWxcIil9LHRoaXMpKX07Yy5WRVJTSU9OPVwiMy4zLjVcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MzAwLGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5ERUZBVUxUUz17YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITAsc2hvdzohMH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlzU2hvd24/dGhpcy5oaWRlKCk6dGhpcy5zaG93KGEpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT1hLkV2ZW50KFwic2hvdy5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0OmJ9KTt0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSksdGhpcy5pc1Nob3dufHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwodGhpcy5pc1Nob3duPSEwLHRoaXMuY2hlY2tTY3JvbGxiYXIoKSx0aGlzLnNldFNjcm9sbGJhcigpLHRoaXMuJGJvZHkuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpLHRoaXMuZXNjYXBlKCksdGhpcy5yZXNpemUoKSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLCdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLGEucHJveHkodGhpcy5oaWRlLHRoaXMpKSx0aGlzLiRkaWFsb2cub24oXCJtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbFwiLGZ1bmN0aW9uKCl7ZC4kZWxlbWVudC5vbmUoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIixmdW5jdGlvbihiKXthKGIudGFyZ2V0KS5pcyhkLiRlbGVtZW50KSYmKGQuaWdub3JlQmFja2Ryb3BDbGljaz0hMCl9KX0pLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXt2YXIgZT1hLnN1cHBvcnQudHJhbnNpdGlvbiYmZC4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik7ZC4kZWxlbWVudC5wYXJlbnQoKS5sZW5ndGh8fGQuJGVsZW1lbnQuYXBwZW5kVG8oZC4kYm9keSksZC4kZWxlbWVudC5zaG93KCkuc2Nyb2xsVG9wKDApLGQuYWRqdXN0RGlhbG9nKCksZSYmZC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCxkLiRlbGVtZW50LmFkZENsYXNzKFwiaW5cIiksZC5lbmZvcmNlRm9jdXMoKTt2YXIgZj1hLkV2ZW50KFwic2hvd24uYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDpifSk7ZT9kLiRkaWFsb2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpfSkpfSxjLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKGIpe2ImJmIucHJldmVudERlZmF1bHQoKSxiPWEuRXZlbnQoXCJoaWRlLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKSx0aGlzLmlzU2hvd24mJiFiLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYodGhpcy5pc1Nob3duPSExLHRoaXMuZXNjYXBlKCksdGhpcy5yZXNpemUoKSxhKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJpblwiKS5vZmYoXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIpLm9mZihcIm1vdXNldXAuZGlzbWlzcy5icy5tb2RhbFwiKSx0aGlzLiRkaWFsb2cub2ZmKFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eSh0aGlzLmhpZGVNb2RhbCx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTp0aGlzLmhpZGVNb2RhbCgpKX0sYy5wcm90b3R5cGUuZW5mb3JjZUZvY3VzPWZ1bmN0aW9uKCl7YShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKS5vbihcImZvY3VzaW4uYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuJGVsZW1lbnRbMF09PT1hLnRhcmdldHx8dGhpcy4kZWxlbWVudC5oYXMoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIil9LHRoaXMpKX0sYy5wcm90b3R5cGUuZXNjYXBlPWZ1bmN0aW9uKCl7dGhpcy5pc1Nob3duJiZ0aGlzLm9wdGlvbnMua2V5Ym9hcmQ/dGhpcy4kZWxlbWVudC5vbihcImtleWRvd24uZGlzbWlzcy5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7Mjc9PWEud2hpY2gmJnRoaXMuaGlkZSgpfSx0aGlzKSk6dGhpcy5pc1Nob3dufHx0aGlzLiRlbGVtZW50Lm9mZihcImtleWRvd24uZGlzbWlzcy5icy5tb2RhbFwiKX0sYy5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5pc1Nob3duP2Eod2luZG93KS5vbihcInJlc2l6ZS5icy5tb2RhbFwiLGEucHJveHkodGhpcy5oYW5kbGVVcGRhdGUsdGhpcykpOmEod2luZG93KS5vZmYoXCJyZXNpemUuYnMubW9kYWxcIil9LGMucHJvdG90eXBlLmhpZGVNb2RhbD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy4kZWxlbWVudC5oaWRlKCksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe2EuJGJvZHkucmVtb3ZlQ2xhc3MoXCJtb2RhbC1vcGVuXCIpLGEucmVzZXRBZGp1c3RtZW50cygpLGEucmVzZXRTY3JvbGxiYXIoKSxhLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMubW9kYWxcIil9KX0sYy5wcm90b3R5cGUucmVtb3ZlQmFja2Ryb3A9ZnVuY3Rpb24oKXt0aGlzLiRiYWNrZHJvcCYmdGhpcy4kYmFja2Ryb3AucmVtb3ZlKCksdGhpcy4kYmFja2Ryb3A9bnVsbH0sYy5wcm90b3R5cGUuYmFja2Ryb3A9ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcyxlPXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP1wiZmFkZVwiOlwiXCI7aWYodGhpcy5pc1Nob3duJiZ0aGlzLm9wdGlvbnMuYmFja2Ryb3Ape3ZhciBmPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZlO2lmKHRoaXMuJGJhY2tkcm9wPWEoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuYWRkQ2xhc3MoXCJtb2RhbC1iYWNrZHJvcCBcIitlKS5hcHBlbmRUbyh0aGlzLiRib2R5KSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz92b2lkKHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz0hMSk6dm9pZChhLnRhcmdldD09PWEuY3VycmVudFRhcmdldCYmKFwic3RhdGljXCI9PXRoaXMub3B0aW9ucy5iYWNrZHJvcD90aGlzLiRlbGVtZW50WzBdLmZvY3VzKCk6dGhpcy5oaWRlKCkpKX0sdGhpcykpLGYmJnRoaXMuJGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoLHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKFwiaW5cIiksIWIpcmV0dXJuO2Y/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYikuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTpiKCl9ZWxzZSBpZighdGhpcy5pc1Nob3duJiZ0aGlzLiRiYWNrZHJvcCl7dGhpcy4kYmFja2Ryb3AucmVtb3ZlQ2xhc3MoXCJpblwiKTt2YXIgZz1mdW5jdGlvbigpe2QucmVtb3ZlQmFja2Ryb3AoKSxiJiZiKCl9O2Euc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRiYWNrZHJvcC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixnKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pOmcoKX1lbHNlIGImJmIoKX0sYy5wcm90b3R5cGUuaGFuZGxlVXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5hZGp1c3REaWFsb2coKX0sYy5wcm90b3R5cGUuYWRqdXN0RGlhbG9nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6IXRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJmE/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwiLHBhZGRpbmdSaWdodDp0aGlzLmJvZHlJc092ZXJmbG93aW5nJiYhYT90aGlzLnNjcm9sbGJhcldpZHRoOlwiXCJ9KX0sYy5wcm90b3R5cGUucmVzZXRBZGp1c3RtZW50cz1mdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQuY3NzKHtwYWRkaW5nTGVmdDpcIlwiLHBhZGRpbmdSaWdodDpcIlwifSl9LGMucHJvdG90eXBlLmNoZWNrU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9d2luZG93LmlubmVyV2lkdGg7aWYoIWEpe3ZhciBiPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTthPWIucmlnaHQtTWF0aC5hYnMoYi5sZWZ0KX10aGlzLmJvZHlJc092ZXJmbG93aW5nPWRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg8YSx0aGlzLnNjcm9sbGJhcldpZHRoPXRoaXMubWVhc3VyZVNjcm9sbGJhcigpfSxjLnByb3RvdHlwZS5zZXRTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT1wYXJzZUludCh0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIil8fDAsMTApO3RoaXMub3JpZ2luYWxCb2R5UGFkPWRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0fHxcIlwiLHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJnRoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLGErdGhpcy5zY3JvbGxiYXJXaWR0aCl9LGMucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsdGhpcy5vcmlnaW5hbEJvZHlQYWQpfSxjLnByb3RvdHlwZS5tZWFzdXJlU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmNsYXNzTmFtZT1cIm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlXCIsdGhpcy4kYm9keS5hcHBlbmQoYSk7dmFyIGI9YS5vZmZzZXRXaWR0aC1hLmNsaWVudFdpZHRoO3JldHVybiB0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKGEpLGJ9O3ZhciBkPWEuZm4ubW9kYWw7YS5mbi5tb2RhbD1iLGEuZm4ubW9kYWwuQ29uc3RydWN0b3I9YyxhLmZuLm1vZGFsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5tb2RhbD1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMubW9kYWwuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyksZT1kLmF0dHIoXCJocmVmXCIpLGY9YShkLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZSYmZS5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKSxnPWYuZGF0YShcImJzLm1vZGFsXCIpP1widG9nZ2xlXCI6YS5leHRlbmQoe3JlbW90ZTohLyMvLnRlc3QoZSkmJmV9LGYuZGF0YSgpLGQuZGF0YSgpKTtkLmlzKFwiYVwiKSYmYy5wcmV2ZW50RGVmYXVsdCgpLGYub25lKFwic2hvdy5icy5tb2RhbFwiLGZ1bmN0aW9uKGEpe2EuaXNEZWZhdWx0UHJldmVudGVkKCl8fGYub25lKFwiaGlkZGVuLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtkLmlzKFwiOnZpc2libGVcIikmJmQudHJpZ2dlcihcImZvY3VzXCIpfSl9KSxiLmNhbGwoZixnLHRoaXMpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50b29sdGlwXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7KGV8fCEvZGVzdHJveXxoaWRlLy50ZXN0KGIpKSYmKGV8fGQuZGF0YShcImJzLnRvb2x0aXBcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLnR5cGU9bnVsbCx0aGlzLm9wdGlvbnM9bnVsbCx0aGlzLmVuYWJsZWQ9bnVsbCx0aGlzLnRpbWVvdXQ9bnVsbCx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzLiRlbGVtZW50PW51bGwsdGhpcy5pblN0YXRlPW51bGwsdGhpcy5pbml0KFwidG9vbHRpcFwiLGEsYil9O2MuVkVSU0lPTj1cIjMuMy41XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLkRFRkFVTFRTPXthbmltYXRpb246ITAscGxhY2VtZW50OlwidG9wXCIsc2VsZWN0b3I6ITEsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+Jyx0cmlnZ2VyOlwiaG92ZXIgZm9jdXNcIix0aXRsZTpcIlwiLGRlbGF5OjAsaHRtbDohMSxjb250YWluZXI6ITEsdmlld3BvcnQ6e3NlbGVjdG9yOlwiYm9keVwiLHBhZGRpbmc6MH19LGMucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oYixjLGQpe2lmKHRoaXMuZW5hYmxlZD0hMCx0aGlzLnR5cGU9Yix0aGlzLiRlbGVtZW50PWEoYyksdGhpcy5vcHRpb25zPXRoaXMuZ2V0T3B0aW9ucyhkKSx0aGlzLiR2aWV3cG9ydD10aGlzLm9wdGlvbnMudmlld3BvcnQmJmEoYS5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy52aWV3cG9ydCk/dGhpcy5vcHRpb25zLnZpZXdwb3J0LmNhbGwodGhpcyx0aGlzLiRlbGVtZW50KTp0aGlzLm9wdGlvbnMudmlld3BvcnQuc2VsZWN0b3J8fHRoaXMub3B0aW9ucy52aWV3cG9ydCksdGhpcy5pblN0YXRlPXtjbGljazohMSxob3ZlcjohMSxmb2N1czohMX0sdGhpcy4kZWxlbWVudFswXWluc3RhbmNlb2YgZG9jdW1lbnQuY29uc3RydWN0b3ImJiF0aGlzLm9wdGlvbnMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiYHNlbGVjdG9yYCBvcHRpb24gbXVzdCBiZSBzcGVjaWZpZWQgd2hlbiBpbml0aWFsaXppbmcgXCIrdGhpcy50eXBlK1wiIG9uIHRoZSB3aW5kb3cuZG9jdW1lbnQgb2JqZWN0IVwiKTtmb3IodmFyIGU9dGhpcy5vcHRpb25zLnRyaWdnZXIuc3BsaXQoXCIgXCIpLGY9ZS5sZW5ndGg7Zi0tOyl7dmFyIGc9ZVtmXTtpZihcImNsaWNrXCI9PWcpdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLnRvZ2dsZSx0aGlzKSk7ZWxzZSBpZihcIm1hbnVhbFwiIT1nKXt2YXIgaD1cImhvdmVyXCI9PWc/XCJtb3VzZWVudGVyXCI6XCJmb2N1c2luXCIsaT1cImhvdmVyXCI9PWc/XCJtb3VzZWxlYXZlXCI6XCJmb2N1c291dFwiO3RoaXMuJGVsZW1lbnQub24oaCtcIi5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy5lbnRlcix0aGlzKSksdGhpcy4kZWxlbWVudC5vbihpK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLmxlYXZlLHRoaXMpKX19dGhpcy5vcHRpb25zLnNlbGVjdG9yP3RoaXMuX29wdGlvbnM9YS5leHRlbmQoe30sdGhpcy5vcHRpb25zLHt0cmlnZ2VyOlwibWFudWFsXCIsc2VsZWN0b3I6XCJcIn0pOnRoaXMuZml4VGl0bGUoKX0sYy5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ERUZBVUxUU30sYy5wcm90b3R5cGUuZ2V0T3B0aW9ucz1mdW5jdGlvbihiKXtyZXR1cm4gYj1hLmV4dGVuZCh7fSx0aGlzLmdldERlZmF1bHRzKCksdGhpcy4kZWxlbWVudC5kYXRhKCksYiksYi5kZWxheSYmXCJudW1iZXJcIj09dHlwZW9mIGIuZGVsYXkmJihiLmRlbGF5PXtzaG93OmIuZGVsYXksaGlkZTpiLmRlbGF5fSksYn0sYy5wcm90b3R5cGUuZ2V0RGVsZWdhdGVPcHRpb25zPWZ1bmN0aW9uKCl7dmFyIGI9e30sYz10aGlzLmdldERlZmF1bHRzKCk7cmV0dXJuIHRoaXMuX29wdGlvbnMmJmEuZWFjaCh0aGlzLl9vcHRpb25zLGZ1bmN0aW9uKGEsZCl7Y1thXSE9ZCYmKGJbYV09ZCl9KSxifSxjLnByb3RvdHlwZS5lbnRlcj1mdW5jdGlvbihiKXt2YXIgYz1iIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcj9iOmEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSxiIGluc3RhbmNlb2YgYS5FdmVudCYmKGMuaW5TdGF0ZVtcImZvY3VzaW5cIj09Yi50eXBlP1wiZm9jdXNcIjpcImhvdmVyXCJdPSEwKSxjLnRpcCgpLmhhc0NsYXNzKFwiaW5cIil8fFwiaW5cIj09Yy5ob3ZlclN0YXRlP3ZvaWQoYy5ob3ZlclN0YXRlPVwiaW5cIik6KGNsZWFyVGltZW91dChjLnRpbWVvdXQpLGMuaG92ZXJTdGF0ZT1cImluXCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuc2hvdz92b2lkKGMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJpblwiPT1jLmhvdmVyU3RhdGUmJmMuc2hvdygpfSxjLm9wdGlvbnMuZGVsYXkuc2hvdykpOmMuc2hvdygpKX0sYy5wcm90b3R5cGUuaXNJblN0YXRlVHJ1ZT1mdW5jdGlvbigpe2Zvcih2YXIgYSBpbiB0aGlzLmluU3RhdGUpaWYodGhpcy5pblN0YXRlW2FdKXJldHVybiEwO3JldHVybiExfSxjLnByb3RvdHlwZS5sZWF2ZT1mdW5jdGlvbihiKXt2YXIgYz1iIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcj9iOmEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSxiIGluc3RhbmNlb2YgYS5FdmVudCYmKGMuaW5TdGF0ZVtcImZvY3Vzb3V0XCI9PWIudHlwZT9cImZvY3VzXCI6XCJob3ZlclwiXT0hMSksYy5pc0luU3RhdGVUcnVlKCk/dm9pZCAwOihjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJvdXRcIixjLm9wdGlvbnMuZGVsYXkmJmMub3B0aW9ucy5kZWxheS5oaWRlP3ZvaWQoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcIm91dFwiPT1jLmhvdmVyU3RhdGUmJmMuaGlkZSgpfSxjLm9wdGlvbnMuZGVsYXkuaGlkZSkpOmMuaGlkZSgpKX0sYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciBiPWEuRXZlbnQoXCJzaG93LmJzLlwiK3RoaXMudHlwZSk7aWYodGhpcy5oYXNDb250ZW50KCkmJnRoaXMuZW5hYmxlZCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpO3ZhciBkPWEuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0aGlzLiRlbGVtZW50WzBdKTtpZihiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwhZClyZXR1cm47dmFyIGU9dGhpcyxmPXRoaXMudGlwKCksZz10aGlzLmdldFVJRCh0aGlzLnR5cGUpO3RoaXMuc2V0Q29udGVudCgpLGYuYXR0cihcImlkXCIsZyksdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGcpLHRoaXMub3B0aW9ucy5hbmltYXRpb24mJmYuYWRkQ2xhc3MoXCJmYWRlXCIpO3ZhciBoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQ/dGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsZlswXSx0aGlzLiRlbGVtZW50WzBdKTp0aGlzLm9wdGlvbnMucGxhY2VtZW50LGk9L1xccz9hdXRvP1xccz8vaSxqPWkudGVzdChoKTtqJiYoaD1oLnJlcGxhY2UoaSxcIlwiKXx8XCJ0b3BcIiksZi5kZXRhY2goKS5jc3Moe3RvcDowLGxlZnQ6MCxkaXNwbGF5OlwiYmxvY2tcIn0pLmFkZENsYXNzKGgpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsdGhpcyksdGhpcy5vcHRpb25zLmNvbnRhaW5lcj9mLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpOmYuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCksdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiaW5zZXJ0ZWQuYnMuXCIrdGhpcy50eXBlKTt2YXIgaz10aGlzLmdldFBvc2l0aW9uKCksbD1mWzBdLm9mZnNldFdpZHRoLG09ZlswXS5vZmZzZXRIZWlnaHQ7aWYoail7dmFyIG49aCxvPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO2g9XCJib3R0b21cIj09aCYmay5ib3R0b20rbT5vLmJvdHRvbT9cInRvcFwiOlwidG9wXCI9PWgmJmsudG9wLW08by50b3A/XCJib3R0b21cIjpcInJpZ2h0XCI9PWgmJmsucmlnaHQrbD5vLndpZHRoP1wibGVmdFwiOlwibGVmdFwiPT1oJiZrLmxlZnQtbDxvLmxlZnQ/XCJyaWdodFwiOmgsZi5yZW1vdmVDbGFzcyhuKS5hZGRDbGFzcyhoKX12YXIgcD10aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQoaCxrLGwsbSk7dGhpcy5hcHBseVBsYWNlbWVudChwLGgpO3ZhciBxPWZ1bmN0aW9uKCl7dmFyIGE9ZS5ob3ZlclN0YXRlO2UuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLlwiK2UudHlwZSksZS5ob3ZlclN0YXRlPW51bGwsXCJvdXRcIj09YSYmZS5sZWF2ZShlKX07YS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixxKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOnEoKX19LGMucHJvdG90eXBlLmFwcGx5UGxhY2VtZW50PWZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy50aXAoKSxlPWRbMF0ub2Zmc2V0V2lkdGgsZj1kWzBdLm9mZnNldEhlaWdodCxnPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLXRvcFwiKSwxMCksaD1wYXJzZUludChkLmNzcyhcIm1hcmdpbi1sZWZ0XCIpLDEwKTtpc05hTihnKSYmKGc9MCksaXNOYU4oaCkmJihoPTApLGIudG9wKz1nLGIubGVmdCs9aCxhLm9mZnNldC5zZXRPZmZzZXQoZFswXSxhLmV4dGVuZCh7dXNpbmc6ZnVuY3Rpb24oYSl7ZC5jc3Moe3RvcDpNYXRoLnJvdW5kKGEudG9wKSxsZWZ0Ok1hdGgucm91bmQoYS5sZWZ0KX0pfX0sYiksMCksZC5hZGRDbGFzcyhcImluXCIpO3ZhciBpPWRbMF0ub2Zmc2V0V2lkdGgsaj1kWzBdLm9mZnNldEhlaWdodDtcInRvcFwiPT1jJiZqIT1mJiYoYi50b3A9Yi50b3ArZi1qKTt2YXIgaz10aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShjLGIsaSxqKTtrLmxlZnQ/Yi5sZWZ0Kz1rLmxlZnQ6Yi50b3ArPWsudG9wO3ZhciBsPS90b3B8Ym90dG9tLy50ZXN0KGMpLG09bD8yKmsubGVmdC1lK2k6MiprLnRvcC1mK2osbj1sP1wib2Zmc2V0V2lkdGhcIjpcIm9mZnNldEhlaWdodFwiO2Qub2Zmc2V0KGIpLHRoaXMucmVwbGFjZUFycm93KG0sZFswXVtuXSxsKX0sYy5wcm90b3R5cGUucmVwbGFjZUFycm93PWZ1bmN0aW9uKGEsYixjKXt0aGlzLmFycm93KCkuY3NzKGM/XCJsZWZ0XCI6XCJ0b3BcIiw1MCooMS1hL2IpK1wiJVwiKS5jc3MoYz9cInRvcFwiOlwibGVmdFwiLFwiXCIpfSxjLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50aXAoKSxiPXRoaXMuZ2V0VGl0bGUoKTthLmZpbmQoXCIudG9vbHRpcC1pbm5lclwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5yZW1vdmVDbGFzcyhcImZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0XCIpfSxjLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoKXtcImluXCIhPWUuaG92ZXJTdGF0ZSYmZi5kZXRhY2goKSxlLiRlbGVtZW50LnJlbW92ZUF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuXCIrZS50eXBlKSxiJiZiKCl9dmFyIGU9dGhpcyxmPWEodGhpcy4kdGlwKSxnPWEuRXZlbnQoXCJoaWRlLmJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihnKSxnLmlzRGVmYXVsdFByZXZlbnRlZCgpP3ZvaWQgMDooZi5yZW1vdmVDbGFzcyhcImluXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZmLmhhc0NsYXNzKFwiZmFkZVwiKT9mLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGQpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZCgpLHRoaXMuaG92ZXJTdGF0ZT1udWxsLHRoaXMpfSxjLnByb3RvdHlwZS5maXhUaXRsZT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQ7KGEuYXR0cihcInRpdGxlXCIpfHxcInN0cmluZ1wiIT10eXBlb2YgYS5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKSkmJmEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIixhLmF0dHIoXCJ0aXRsZVwiKXx8XCJcIikuYXR0cihcInRpdGxlXCIsXCJcIil9LGMucHJvdG90eXBlLmhhc0NvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRUaXRsZSgpfSxjLnByb3RvdHlwZS5nZXRQb3NpdGlvbj1mdW5jdGlvbihiKXtiPWJ8fHRoaXMuJGVsZW1lbnQ7dmFyIGM9YlswXSxkPVwiQk9EWVwiPT1jLnRhZ05hbWUsZT1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO251bGw9PWUud2lkdGgmJihlPWEuZXh0ZW5kKHt9LGUse3dpZHRoOmUucmlnaHQtZS5sZWZ0LGhlaWdodDplLmJvdHRvbS1lLnRvcH0pKTt2YXIgZj1kP3t0b3A6MCxsZWZ0OjB9OmIub2Zmc2V0KCksZz17c2Nyb2xsOmQ/ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6Yi5zY3JvbGxUb3AoKX0saD1kP3t3aWR0aDphKHdpbmRvdykud2lkdGgoKSxoZWlnaHQ6YSh3aW5kb3cpLmhlaWdodCgpfTpudWxsO3JldHVybiBhLmV4dGVuZCh7fSxlLGcsaCxmKX0sYy5wcm90b3R5cGUuZ2V0Q2FsY3VsYXRlZE9mZnNldD1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm5cImJvdHRvbVwiPT1hP3t0b3A6Yi50b3ArYi5oZWlnaHQsbGVmdDpiLmxlZnQrYi53aWR0aC8yLWMvMn06XCJ0b3BcIj09YT97dG9wOmIudG9wLWQsbGVmdDpiLmxlZnQrYi53aWR0aC8yLWMvMn06XCJsZWZ0XCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodC8yLWQvMixsZWZ0OmIubGVmdC1jfTp7dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0K2Iud2lkdGh9fSxjLnByb3RvdHlwZS5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9e3RvcDowLGxlZnQ6MH07aWYoIXRoaXMuJHZpZXdwb3J0KXJldHVybiBlO3ZhciBmPXRoaXMub3B0aW9ucy52aWV3cG9ydCYmdGhpcy5vcHRpb25zLnZpZXdwb3J0LnBhZGRpbmd8fDAsZz10aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtpZigvcmlnaHR8bGVmdC8udGVzdChhKSl7dmFyIGg9Yi50b3AtZi1nLnNjcm9sbCxpPWIudG9wK2YtZy5zY3JvbGwrZDtoPGcudG9wP2UudG9wPWcudG9wLWg6aT5nLnRvcCtnLmhlaWdodCYmKGUudG9wPWcudG9wK2cuaGVpZ2h0LWkpfWVsc2V7dmFyIGo9Yi5sZWZ0LWYsaz1iLmxlZnQrZitjO2o8Zy5sZWZ0P2UubGVmdD1nLmxlZnQtajprPmcucmlnaHQmJihlLmxlZnQ9Zy5sZWZ0K2cud2lkdGgtayl9cmV0dXJuIGV9LGMucHJvdG90eXBlLmdldFRpdGxlPWZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRlbGVtZW50LGM9dGhpcy5vcHRpb25zO3JldHVybiBhPWIuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnRpdGxlP2MudGl0bGUuY2FsbChiWzBdKTpjLnRpdGxlKX0sYy5wcm90b3R5cGUuZ2V0VUlEPWZ1bmN0aW9uKGEpe2RvIGErPX5+KDFlNipNYXRoLnJhbmRvbSgpKTt3aGlsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKSk7cmV0dXJuIGF9LGMucHJvdG90eXBlLnRpcD1mdW5jdGlvbigpe2lmKCF0aGlzLiR0aXAmJih0aGlzLiR0aXA9YSh0aGlzLm9wdGlvbnMudGVtcGxhdGUpLDEhPXRoaXMuJHRpcC5sZW5ndGgpKXRocm93IG5ldyBFcnJvcih0aGlzLnR5cGUrXCIgYHRlbXBsYXRlYCBvcHRpb24gbXVzdCBjb25zaXN0IG9mIGV4YWN0bHkgMSB0b3AtbGV2ZWwgZWxlbWVudCFcIik7cmV0dXJuIHRoaXMuJHRpcH0sYy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi50b29sdGlwLWFycm93XCIpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITF9LGMucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQ9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9IXRoaXMuZW5hYmxlZH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7YiYmKGM9YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpLGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSkpLGI/KGMuaW5TdGF0ZS5jbGljaz0hYy5pblN0YXRlLmNsaWNrLGMuaXNJblN0YXRlVHJ1ZSgpP2MuZW50ZXIoYyk6Yy5sZWF2ZShjKSk6Yy50aXAoKS5oYXNDbGFzcyhcImluXCIpP2MubGVhdmUoYyk6Yy5lbnRlcihjKX0sYy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCksdGhpcy5oaWRlKGZ1bmN0aW9uKCl7YS4kZWxlbWVudC5vZmYoXCIuXCIrYS50eXBlKS5yZW1vdmVEYXRhKFwiYnMuXCIrYS50eXBlKSxhLiR0aXAmJmEuJHRpcC5kZXRhY2goKSxhLiR0aXA9bnVsbCxhLiRhcnJvdz1udWxsLGEuJHZpZXdwb3J0PW51bGx9KX07dmFyIGQ9YS5mbi50b29sdGlwO2EuZm4udG9vbHRpcD1iLGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvcj1jLGEuZm4udG9vbHRpcC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4udG9vbHRpcD1kLHRoaXN9fShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMucG9wb3ZlclwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiOyhlfHwhL2Rlc3Ryb3l8aGlkZS8udGVzdChiKSkmJihlfHxkLmRhdGEoXCJicy5wb3BvdmVyXCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpKX0pfXZhciBjPWZ1bmN0aW9uKGEsYil7dGhpcy5pbml0KFwicG9wb3ZlclwiLGEsYil9O2lmKCFhLmZuLnRvb2x0aXApdGhyb3cgbmV3IEVycm9yKFwiUG9wb3ZlciByZXF1aXJlcyB0b29sdGlwLmpzXCIpO2MuVkVSU0lPTj1cIjMuMy41XCIsYy5ERUZBVUxUUz1hLmV4dGVuZCh7fSxhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IuREVGQVVMVFMse3BsYWNlbWVudDpcInJpZ2h0XCIsdHJpZ2dlcjpcImNsaWNrXCIsY29udGVudDpcIlwiLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPjwvZGl2PjwvZGl2Pid9KSxjLnByb3RvdHlwZT1hLmV4dGVuZCh7fSxhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IucHJvdG90eXBlKSxjLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1jLGMucHJvdG90eXBlLmdldERlZmF1bHRzPWZ1bmN0aW9uKCl7cmV0dXJuIGMuREVGQVVMVFN9LGMucHJvdG90eXBlLnNldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRpcCgpLGI9dGhpcy5nZXRUaXRsZSgpLGM9dGhpcy5nZXRDb250ZW50KCk7YS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIilbdGhpcy5vcHRpb25zLmh0bWw/XCJodG1sXCI6XCJ0ZXh0XCJdKGIpLGEuZmluZChcIi5wb3BvdmVyLWNvbnRlbnRcIikuY2hpbGRyZW4oKS5kZXRhY2goKS5lbmQoKVt0aGlzLm9wdGlvbnMuaHRtbD9cInN0cmluZ1wiPT10eXBlb2YgYz9cImh0bWxcIjpcImFwcGVuZFwiOlwidGV4dFwiXShjKSxhLnJlbW92ZUNsYXNzKFwiZmFkZSB0b3AgYm90dG9tIGxlZnQgcmlnaHQgaW5cIiksYS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaHRtbCgpfHxhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5oaWRlKCl9LGMucHJvdG90eXBlLmhhc0NvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRUaXRsZSgpfHx0aGlzLmdldENvbnRlbnQoKX0sYy5wcm90b3R5cGUuZ2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQsYj10aGlzLm9wdGlvbnM7cmV0dXJuIGEuYXR0cihcImRhdGEtY29udGVudFwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGIuY29udGVudD9iLmNvbnRlbnQuY2FsbChhWzBdKTpiLmNvbnRlbnQpfSxjLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhcnJvdz10aGlzLiRhcnJvd3x8dGhpcy50aXAoKS5maW5kKFwiLmFycm93XCIpfTt2YXIgZD1hLmZuLnBvcG92ZXI7YS5mbi5wb3BvdmVyPWIsYS5mbi5wb3BvdmVyLkNvbnN0cnVjdG9yPWMsYS5mbi5wb3BvdmVyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5wb3BvdmVyPWQsdGhpc319KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYyxkKXt0aGlzLiRib2R5PWEoZG9jdW1lbnQuYm9keSksdGhpcy4kc2Nyb2xsRWxlbWVudD1hKGEoYykuaXMoZG9jdW1lbnQuYm9keSk/d2luZG93OmMpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxiLkRFRkFVTFRTLGQpLHRoaXMuc2VsZWN0b3I9KHRoaXMub3B0aW9ucy50YXJnZXR8fFwiXCIpK1wiIC5uYXYgbGkgPiBhXCIsdGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLmFjdGl2ZVRhcmdldD1udWxsLHRoaXMuc2Nyb2xsSGVpZ2h0PTAsdGhpcy4kc2Nyb2xsRWxlbWVudC5vbihcInNjcm9sbC5icy5zY3JvbGxzcHlcIixhLnByb3h5KHRoaXMucHJvY2Vzcyx0aGlzKSksdGhpcy5yZWZyZXNoKCksdGhpcy5wcm9jZXNzKCl9ZnVuY3Rpb24gYyhjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnNjcm9sbHNweVwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2V8fGQuZGF0YShcImJzLnNjcm9sbHNweVwiLGU9bmV3IGIodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGMmJmVbY10oKX0pfWIuVkVSU0lPTj1cIjMuMy41XCIsYi5ERUZBVUxUUz17b2Zmc2V0OjEwfSxiLnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kc2Nyb2xsRWxlbWVudFswXS5zY3JvbGxIZWlnaHR8fE1hdGgubWF4KHRoaXMuJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpfSxiLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPVwib2Zmc2V0XCIsZD0wO3RoaXMub2Zmc2V0cz1bXSx0aGlzLnRhcmdldHM9W10sdGhpcy5zY3JvbGxIZWlnaHQ9dGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxhLmlzV2luZG93KHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0pfHwoYz1cInBvc2l0aW9uXCIsZD10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpKSx0aGlzLiRib2R5LmZpbmQodGhpcy5zZWxlY3RvcikubWFwKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxlPWIuZGF0YShcInRhcmdldFwiKXx8Yi5hdHRyKFwiaHJlZlwiKSxmPS9eIy4vLnRlc3QoZSkmJmEoZSk7cmV0dXJuIGYmJmYubGVuZ3RoJiZmLmlzKFwiOnZpc2libGVcIikmJltbZltjXSgpLnRvcCtkLGVdXXx8bnVsbH0pLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYVswXS1iWzBdfSkuZWFjaChmdW5jdGlvbigpe2Iub2Zmc2V0cy5wdXNoKHRoaXNbMF0pLGIudGFyZ2V0cy5wdXNoKHRoaXNbMV0pfSl9LGIucHJvdG90eXBlLnByb2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkrdGhpcy5vcHRpb25zLm9mZnNldCxjPXRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksZD10aGlzLm9wdGlvbnMub2Zmc2V0K2MtdGhpcy4kc2Nyb2xsRWxlbWVudC5oZWlnaHQoKSxlPXRoaXMub2Zmc2V0cyxmPXRoaXMudGFyZ2V0cyxnPXRoaXMuYWN0aXZlVGFyZ2V0O2lmKHRoaXMuc2Nyb2xsSGVpZ2h0IT1jJiZ0aGlzLnJlZnJlc2goKSxiPj1kKXJldHVybiBnIT0oYT1mW2YubGVuZ3RoLTFdKSYmdGhpcy5hY3RpdmF0ZShhKTtpZihnJiZiPGVbMF0pcmV0dXJuIHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5jbGVhcigpO2ZvcihhPWUubGVuZ3RoO2EtLTspZyE9ZlthXSYmYj49ZVthXSYmKHZvaWQgMD09PWVbYSsxXXx8YjxlW2ErMV0pJiZ0aGlzLmFjdGl2YXRlKGZbYV0pfSxiLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihiKXt0aGlzLmFjdGl2ZVRhcmdldD1iLHRoaXMuY2xlYXIoKTt2YXIgYz10aGlzLnNlbGVjdG9yKydbZGF0YS10YXJnZXQ9XCInK2IrJ1wiXSwnK3RoaXMuc2VsZWN0b3IrJ1tocmVmPVwiJytiKydcIl0nLGQ9YShjKS5wYXJlbnRzKFwibGlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ZC5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJihkPWQuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxcclxuZC50cmlnZ2VyKFwiYWN0aXZhdGUuYnMuc2Nyb2xsc3B5XCIpfSxiLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe2EodGhpcy5zZWxlY3RvcikucGFyZW50c1VudGlsKHRoaXMub3B0aW9ucy50YXJnZXQsXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfTt2YXIgZD1hLmZuLnNjcm9sbHNweTthLmZuLnNjcm9sbHNweT1jLGEuZm4uc2Nyb2xsc3B5LkNvbnN0cnVjdG9yPWIsYS5mbi5zY3JvbGxzcHkubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnNjcm9sbHNweT1kLHRoaXN9LGEod2luZG93KS5vbihcImxvYWQuYnMuc2Nyb2xsc3B5LmRhdGEtYXBpXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtjLmNhbGwoYixiLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMudGFiXCIpO2V8fGQuZGF0YShcImJzLnRhYlwiLGU9bmV3IGModGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgYz1mdW5jdGlvbihiKXt0aGlzLmVsZW1lbnQ9YShiKX07Yy5WRVJTSU9OPVwiMy4zLjVcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmVsZW1lbnQsYz1iLmNsb3Nlc3QoXCJ1bDpub3QoLmRyb3Bkb3duLW1lbnUpXCIpLGQ9Yi5kYXRhKFwidGFyZ2V0XCIpO2lmKGR8fChkPWIuYXR0cihcImhyZWZcIiksZD1kJiZkLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpLCFiLnBhcmVudChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXt2YXIgZT1jLmZpbmQoXCIuYWN0aXZlOmxhc3QgYVwiKSxmPWEuRXZlbnQoXCJoaWRlLmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmJbMF19KSxnPWEuRXZlbnQoXCJzaG93LmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmVbMF19KTtpZihlLnRyaWdnZXIoZiksYi50cmlnZ2VyKGcpLCFnLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGg9YShkKTt0aGlzLmFjdGl2YXRlKGIuY2xvc2VzdChcImxpXCIpLGMpLHRoaXMuYWN0aXZhdGUoaCxoLnBhcmVudCgpLGZ1bmN0aW9uKCl7ZS50cmlnZ2VyKHt0eXBlOlwiaGlkZGVuLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6YlswXX0pLGIudHJpZ2dlcih7dHlwZTpcInNob3duLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6ZVswXX0pfSl9fX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYixkLGUpe2Z1bmN0aW9uIGYoKXtnLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmZpbmQoXCI+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5lbmQoKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLGg/KGJbMF0ub2Zmc2V0V2lkdGgsYi5hZGRDbGFzcyhcImluXCIpKTpiLnJlbW92ZUNsYXNzKFwiZmFkZVwiKSxiLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmYi5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZW5kKCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksZSYmZSgpfXZhciBnPWQuZmluZChcIj4gLmFjdGl2ZVwiKSxoPWUmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYoZy5sZW5ndGgmJmcuaGFzQ2xhc3MoXCJmYWRlXCIpfHwhIWQuZmluZChcIj4gLmZhZGVcIikubGVuZ3RoKTtnLmxlbmd0aCYmaD9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGYpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZigpLGcucmVtb3ZlQ2xhc3MoXCJpblwiKX07dmFyIGQ9YS5mbi50YWI7YS5mbi50YWI9YixhLmZuLnRhYi5Db25zdHJ1Y3Rvcj1jLGEuZm4udGFiLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi50YWI9ZCx0aGlzfTt2YXIgZT1mdW5jdGlvbihjKXtjLnByZXZlbnREZWZhdWx0KCksYi5jYWxsKGEodGhpcyksXCJzaG93XCIpfTthKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGUpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInBpbGxcIl0nLGUpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuYWZmaXhcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjtlfHxkLmRhdGEoXCJicy5hZmZpeFwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBjPWZ1bmN0aW9uKGIsZCl7dGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZCksdGhpcy4kdGFyZ2V0PWEodGhpcy5vcHRpb25zLnRhcmdldCkub24oXCJzY3JvbGwuYnMuYWZmaXguZGF0YS1hcGlcIixhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbix0aGlzKSkub24oXCJjbGljay5icy5hZmZpeC5kYXRhLWFwaVwiLGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCx0aGlzKSksdGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuYWZmaXhlZD1udWxsLHRoaXMudW5waW49bnVsbCx0aGlzLnBpbm5lZE9mZnNldD1udWxsLHRoaXMuY2hlY2tQb3NpdGlvbigpfTtjLlZFUlNJT049XCIzLjMuNVwiLGMuUkVTRVQ9XCJhZmZpeCBhZmZpeC10b3AgYWZmaXgtYm90dG9tXCIsYy5ERUZBVUxUUz17b2Zmc2V0OjAsdGFyZ2V0OndpbmRvd30sYy5wcm90b3R5cGUuZ2V0U3RhdGU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGY9dGhpcy4kZWxlbWVudC5vZmZzZXQoKSxnPXRoaXMuJHRhcmdldC5oZWlnaHQoKTtpZihudWxsIT1jJiZcInRvcFwiPT10aGlzLmFmZml4ZWQpcmV0dXJuIGM+ZT9cInRvcFwiOiExO2lmKFwiYm90dG9tXCI9PXRoaXMuYWZmaXhlZClyZXR1cm4gbnVsbCE9Yz9lK3RoaXMudW5waW48PWYudG9wPyExOlwiYm90dG9tXCI6YS1kPj1lK2c/ITE6XCJib3R0b21cIjt2YXIgaD1udWxsPT10aGlzLmFmZml4ZWQsaT1oP2U6Zi50b3Asaj1oP2c6YjtyZXR1cm4gbnVsbCE9YyYmYz49ZT9cInRvcFwiOm51bGwhPWQmJmkraj49YS1kP1wiYm90dG9tXCI6ITF9LGMucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldD1mdW5jdGlvbigpe2lmKHRoaXMucGlubmVkT2Zmc2V0KXJldHVybiB0aGlzLnBpbm5lZE9mZnNldDt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGMuUkVTRVQpLmFkZENsYXNzKFwiYWZmaXhcIik7dmFyIGE9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGI9dGhpcy4kZWxlbWVudC5vZmZzZXQoKTtyZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ9Yi50b3AtYX0sYy5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3A9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpLDEpfSxjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uPWZ1bmN0aW9uKCl7aWYodGhpcy4kZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKXt2YXIgYj10aGlzLiRlbGVtZW50LmhlaWdodCgpLGQ9dGhpcy5vcHRpb25zLm9mZnNldCxlPWQudG9wLGY9ZC5ib3R0b20sZz1NYXRoLm1heChhKGRvY3VtZW50KS5oZWlnaHQoKSxhKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpKTtcIm9iamVjdFwiIT10eXBlb2YgZCYmKGY9ZT1kKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoZT1kLnRvcCh0aGlzLiRlbGVtZW50KSksXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmKGY9ZC5ib3R0b20odGhpcy4kZWxlbWVudCkpO3ZhciBoPXRoaXMuZ2V0U3RhdGUoZyxiLGUsZik7aWYodGhpcy5hZmZpeGVkIT1oKXtudWxsIT10aGlzLnVucGluJiZ0aGlzLiRlbGVtZW50LmNzcyhcInRvcFwiLFwiXCIpO3ZhciBpPVwiYWZmaXhcIisoaD9cIi1cIitoOlwiXCIpLGo9YS5FdmVudChpK1wiLmJzLmFmZml4XCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihqKSxqLmlzRGVmYXVsdFByZXZlbnRlZCgpKXJldHVybjt0aGlzLmFmZml4ZWQ9aCx0aGlzLnVucGluPVwiYm90dG9tXCI9PWg/dGhpcy5nZXRQaW5uZWRPZmZzZXQoKTpudWxsLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYy5SRVNFVCkuYWRkQ2xhc3MoaSkudHJpZ2dlcihpLnJlcGxhY2UoXCJhZmZpeFwiLFwiYWZmaXhlZFwiKStcIi5icy5hZmZpeFwiKX1cImJvdHRvbVwiPT1oJiZ0aGlzLiRlbGVtZW50Lm9mZnNldCh7dG9wOmctYi1mfSl9fTt2YXIgZD1hLmZuLmFmZml4O2EuZm4uYWZmaXg9YixhLmZuLmFmZml4LkNvbnN0cnVjdG9yPWMsYS5mbi5hZmZpeC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYWZmaXg9ZCx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1zcHk9XCJhZmZpeFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5kYXRhKCk7ZC5vZmZzZXQ9ZC5vZmZzZXR8fHt9LG51bGwhPWQub2Zmc2V0Qm90dG9tJiYoZC5vZmZzZXQuYm90dG9tPWQub2Zmc2V0Qm90dG9tKSxudWxsIT1kLm9mZnNldFRvcCYmKGQub2Zmc2V0LnRvcD1kLm9mZnNldFRvcCksYi5jYWxsKGMsZCl9KX0pfShqUXVlcnkpOyIsIi8qKlxyXG4qIEBwcmVzZXJ2ZSBIVE1MNSBTaGl2IHByZXYzLjcuMSB8IEBhZmFya2FzIEBqZGFsdG9uIEBqb25fbmVhbCBAcmVtIHwgTUlUL0dQTDIgTGljZW5zZWRcclxuKi9cclxuOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XHJcbi8qanNoaW50IGV2aWw6dHJ1ZSAqL1xyXG4gIC8qKiB2ZXJzaW9uICovXHJcbiAgdmFyIHZlcnNpb24gPSAnMy43LjAnO1xyXG5cclxuICAvKiogUHJlc2V0IG9wdGlvbnMgKi9cclxuICB2YXIgb3B0aW9ucyA9IHdpbmRvdy5odG1sNSB8fCB7fTtcclxuXHJcbiAgLyoqIFVzZWQgdG8gc2tpcCBwcm9ibGVtIGVsZW1lbnRzICovXHJcbiAgdmFyIHJlU2tpcCA9IC9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pO1xyXG5cclxuICAvKiogTm90IGFsbCBlbGVtZW50cyBjYW4gYmUgY2xvbmVkIGluIElFICoqL1xyXG4gIHZhciBzYXZlQ2xvbmVzID0gL14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pO1xyXG5cclxuICAvKiogRGV0ZWN0IHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgZGVmYXVsdCBodG1sNSBzdHlsZXMgKi9cclxuICB2YXIgc3VwcG9ydHNIdG1sNVN0eWxlcztcclxuXHJcbiAgLyoqIE5hbWUgb2YgdGhlIGV4cGFuZG8sIHRvIHdvcmsgd2l0aCBtdWx0aXBsZSBkb2N1bWVudHMgb3IgdG8gcmUtc2hpdiBvbmUgZG9jdW1lbnQgKi9cclxuICB2YXIgZXhwYW5kbyA9ICdfaHRtbDVzaGl2JztcclxuXHJcbiAgLyoqIFRoZSBpZCBmb3IgdGhlIHRoZSBkb2N1bWVudHMgZXhwYW5kbyAqL1xyXG4gIHZhciBleHBhbklEID0gMDtcclxuXHJcbiAgLyoqIENhY2hlZCBkYXRhIGZvciBlYWNoIGRvY3VtZW50ICovXHJcbiAgdmFyIGV4cGFuZG9EYXRhID0ge307XHJcblxyXG4gIC8qKiBEZXRlY3Qgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB1bmtub3duIGVsZW1lbnRzICovXHJcbiAgdmFyIHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzO1xyXG5cclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuaW5uZXJIVE1MID0gJzx4eXo+PC94eXo+JztcclxuICAgICAgICAvL2lmIHRoZSBoaWRkZW4gcHJvcGVydHkgaXMgaW1wbGVtZW50ZWQgd2UgY2FuIGFzc3VtZSwgdGhhdCB0aGUgYnJvd3NlciBzdXBwb3J0cyBiYXNpYyBIVE1MNSBTdHlsZXNcclxuICAgICAgICBzdXBwb3J0c0h0bWw1U3R5bGVzID0gKCdoaWRkZW4nIGluIGEpO1xyXG5cclxuICAgICAgICBzdXBwb3J0c1Vua25vd25FbGVtZW50cyA9IGEuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSB8fCAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvLyBhc3NpZ24gYSBmYWxzZSBwb3NpdGl2ZSBpZiB1bmFibGUgdG8gc2hpdlxyXG4gICAgICAgICAgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpKCdhJyk7XHJcbiAgICAgICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnLmNsb25lTm9kZSA9PSAndW5kZWZpbmVkJyB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgZnJhZy5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID09ICd1bmRlZmluZWQnIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnLmNyZWF0ZUVsZW1lbnQgPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSgpKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAvLyBhc3NpZ24gYSBmYWxzZSBwb3NpdGl2ZSBpZiBkZXRlY3Rpb24gZmFpbHMgPT4gdW5hYmxlIHRvIHNoaXZcclxuICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9IHRydWU7XHJcbiAgICAgIHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgfSgpKTtcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBzdHlsZSBzaGVldCB3aXRoIHRoZSBnaXZlbiBDU1MgdGV4dCBhbmQgYWRkcyBpdCB0byB0aGUgZG9jdW1lbnQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudC5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQuXHJcbiAgICogQHJldHVybnMge1N0eWxlU2hlZXR9IFRoZSBzdHlsZSBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFkZFN0eWxlU2hlZXQob3duZXJEb2N1bWVudCwgY3NzVGV4dCkge1xyXG4gICAgdmFyIHAgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgICAgICBwYXJlbnQgPSBvd25lckRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHwgb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgcC5pbm5lckhUTUwgPSAneDxzdHlsZT4nICsgY3NzVGV4dCArICc8L3N0eWxlPic7XHJcbiAgICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShwLmxhc3RDaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYGh0bWw1LmVsZW1lbnRzYCBhcyBhbiBhcnJheS5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2Ygc2hpdmVkIGVsZW1lbnQgbm9kZSBuYW1lcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiBnZXRFbGVtZW50cygpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IGh0bWw1LmVsZW1lbnRzO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50cyA9PSAnc3RyaW5nJyA/IGVsZW1lbnRzLnNwbGl0KCcgJykgOiBlbGVtZW50cztcclxuICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZGF0YSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBkb2N1bWVudFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXHJcbiAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IG9mIGRhdGEuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCkge1xyXG4gICAgdmFyIGRhdGEgPSBleHBhbmRvRGF0YVtvd25lckRvY3VtZW50W2V4cGFuZG9dXTtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIGRhdGEgPSB7fTtcclxuICAgICAgICBleHBhbklEKys7XHJcbiAgICAgICAgb3duZXJEb2N1bWVudFtleHBhbmRvXSA9IGV4cGFuSUQ7XHJcbiAgICAgICAgZXhwYW5kb0RhdGFbZXhwYW5JRF0gPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIGEgc2hpdmVkIGVsZW1lbnQgZm9yIHRoZSBnaXZlbiBub2RlTmFtZSBhbmQgZG9jdW1lbnRcclxuICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZU5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGNvbnRleHQgZG9jdW1lbnQuXHJcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHNoaXZlZCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobm9kZU5hbWUsIG93bmVyRG9jdW1lbnQsIGRhdGEpe1xyXG4gICAgaWYgKCFvd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgb3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgfVxyXG4gICAgaWYoc3VwcG9ydHNVbmtub3duRWxlbWVudHMpe1xyXG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgZGF0YSA9IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdmFyIG5vZGU7XHJcblxyXG4gICAgaWYgKGRhdGEuY2FjaGVbbm9kZU5hbWVdKSB7XHJcbiAgICAgICAgbm9kZSA9IGRhdGEuY2FjaGVbbm9kZU5hbWVdLmNsb25lTm9kZSgpO1xyXG4gICAgfSBlbHNlIGlmIChzYXZlQ2xvbmVzLnRlc3Qobm9kZU5hbWUpKSB7XHJcbiAgICAgICAgbm9kZSA9IChkYXRhLmNhY2hlW25vZGVOYW1lXSA9IGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSkpLmNsb25lTm9kZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBub2RlID0gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdm9pZCBhZGRpbmcgc29tZSBlbGVtZW50cyB0byBmcmFnbWVudHMgaW4gSUUgPCA5IGJlY2F1c2VcclxuICAgIC8vICogQXR0cmlidXRlcyBsaWtlIGBuYW1lYCBvciBgdHlwZWAgY2Fubm90IGJlIHNldC9jaGFuZ2VkIG9uY2UgYW4gZWxlbWVudFxyXG4gICAgLy8gICBpcyBpbnNlcnRlZCBpbnRvIGEgZG9jdW1lbnQvZnJhZ21lbnRcclxuICAgIC8vICogTGluayBlbGVtZW50cyB3aXRoIGBzcmNgIGF0dHJpYnV0ZXMgdGhhdCBhcmUgaW5hY2Nlc3NpYmxlLCBhcyB3aXRoXHJcbiAgICAvLyAgIGEgNDAzIHJlc3BvbnNlLCB3aWxsIGNhdXNlIHRoZSB0YWIvd2luZG93IHRvIGNyYXNoXHJcbiAgICAvLyAqIFNjcmlwdCBlbGVtZW50cyBhcHBlbmRlZCB0byBmcmFnbWVudHMgd2lsbCBleGVjdXRlIHdoZW4gdGhlaXIgYHNyY2BcclxuICAgIC8vICAgb3IgYHRleHRgIHByb3BlcnR5IGlzIHNldFxyXG4gICAgcmV0dXJuIG5vZGUuY2FuSGF2ZUNoaWxkcmVuICYmICFyZVNraXAudGVzdChub2RlTmFtZSkgJiYgIW5vZGUudGFnVXJuID8gZGF0YS5mcmFnLmFwcGVuZENoaWxkKG5vZGUpIDogbm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybnMgYSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudCBmb3IgdGhlIGdpdmVuIGRvY3VtZW50XHJcbiAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgY29udGV4dCBkb2N1bWVudC5cclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIERvY3VtZW50RnJhZ21lbnQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRGcmFnbWVudChvd25lckRvY3VtZW50LCBkYXRhKXtcclxuICAgIGlmICghb3duZXJEb2N1bWVudCkge1xyXG4gICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgIH1cclxuICAgIGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcclxuICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICB9XHJcbiAgICBkYXRhID0gZGF0YSB8fCBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KTtcclxuICAgIHZhciBjbG9uZSA9IGRhdGEuZnJhZy5jbG9uZU5vZGUoKSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBlbGVtcyA9IGdldEVsZW1lbnRzKCksXHJcbiAgICAgICAgbCA9IGVsZW1zLmxlbmd0aDtcclxuICAgIGZvcig7aTxsO2krKyl7XHJcbiAgICAgICAgY2xvbmUuY3JlYXRlRWxlbWVudChlbGVtc1tpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaGl2cyB0aGUgYGNyZWF0ZUVsZW1lbnRgIGFuZCBgY3JlYXRlRG9jdW1lbnRGcmFnbWVudGAgbWV0aG9kcyBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0RvY3VtZW50fERvY3VtZW50RnJhZ21lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIG9mIHRoZSBkb2N1bWVudC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBzaGl2TWV0aG9kcyhvd25lckRvY3VtZW50LCBkYXRhKSB7XHJcbiAgICBpZiAoIWRhdGEuY2FjaGUpIHtcclxuICAgICAgICBkYXRhLmNhY2hlID0ge307XHJcbiAgICAgICAgZGF0YS5jcmVhdGVFbGVtID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50O1xyXG4gICAgICAgIGRhdGEuY3JlYXRlRnJhZyA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudDtcclxuICAgICAgICBkYXRhLmZyYWcgPSBkYXRhLmNyZWF0ZUZyYWcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24obm9kZU5hbWUpIHtcclxuICAgICAgLy9hYm9ydCBzaGl2XHJcbiAgICAgIGlmICghaHRtbDUuc2hpdk1ldGhvZHMpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gRnVuY3Rpb24oJ2gsZicsICdyZXR1cm4gZnVuY3Rpb24oKXsnICtcclxuICAgICAgJ3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7JyArXHJcbiAgICAgICdoLnNoaXZNZXRob2RzJiYoJyArXHJcbiAgICAgICAgLy8gdW5yb2xsIHRoZSBgY3JlYXRlRWxlbWVudGAgY2FsbHNcclxuICAgICAgICBnZXRFbGVtZW50cygpLmpvaW4oKS5yZXBsYWNlKC9bXFx3XFwtOl0rL2csIGZ1bmN0aW9uKG5vZGVOYW1lKSB7XHJcbiAgICAgICAgICBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xyXG4gICAgICAgICAgZGF0YS5mcmFnLmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xyXG4gICAgICAgICAgcmV0dXJuICdjKFwiJyArIG5vZGVOYW1lICsgJ1wiKSc7XHJcbiAgICAgICAgfSkgK1xyXG4gICAgICAnKTtyZXR1cm4gbn0nXHJcbiAgICApKGh0bWw1LCBkYXRhLmZyYWcpO1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIC8qKlxyXG4gICAqIFNoaXZzIHRoZSBnaXZlbiBkb2N1bWVudC5cclxuICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudCB0byBzaGl2LlxyXG4gICAqIEByZXR1cm5zIHtEb2N1bWVudH0gVGhlIHNoaXZlZCBkb2N1bWVudC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBzaGl2RG9jdW1lbnQob3duZXJEb2N1bWVudCkge1xyXG4gICAgaWYgKCFvd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgb3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KTtcclxuXHJcbiAgICBpZiAoaHRtbDUuc2hpdkNTUyAmJiAhc3VwcG9ydHNIdG1sNVN0eWxlcyAmJiAhZGF0YS5oYXNDU1MpIHtcclxuICAgICAgZGF0YS5oYXNDU1MgPSAhIWFkZFN0eWxlU2hlZXQob3duZXJEb2N1bWVudCxcclxuICAgICAgICAvLyBjb3JyZWN0cyBibG9jayBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFNi83LzgvOVxyXG4gICAgICAgICdhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9JyArXHJcbiAgICAgICAgLy8gYWRkcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFNi83LzgvOVxyXG4gICAgICAgICdtYXJre2JhY2tncm91bmQ6I0ZGMDtjb2xvcjojMDAwfScgK1xyXG4gICAgICAgIC8vIGhpZGVzIG5vbi1yZW5kZXJlZCBlbGVtZW50c1xyXG4gICAgICAgICd0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9J1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzdXBwb3J0c1Vua25vd25FbGVtZW50cykge1xyXG4gICAgICBzaGl2TWV0aG9kcyhvd25lckRvY3VtZW50LCBkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvd25lckRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBgaHRtbDVgIG9iamVjdCBpcyBleHBvc2VkIHNvIHRoYXQgbW9yZSBlbGVtZW50cyBjYW4gYmUgc2hpdmVkIGFuZFxyXG4gICAqIGV4aXN0aW5nIHNoaXZpbmcgY2FuIGJlIGRldGVjdGVkIG9uIGlmcmFtZXMuXHJcbiAgICogQHR5cGUgT2JqZWN0XHJcbiAgICogQGV4YW1wbGVcclxuICAgKlxyXG4gICAqIC8vIG9wdGlvbnMgY2FuIGJlIGNoYW5nZWQgYmVmb3JlIHRoZSBzY3JpcHQgaXMgaW5jbHVkZWRcclxuICAgKiBodG1sNSA9IHsgJ2VsZW1lbnRzJzogJ21hcmsgc2VjdGlvbicsICdzaGl2Q1NTJzogZmFsc2UsICdzaGl2TWV0aG9kcyc6IGZhbHNlIH07XHJcbiAgICovXHJcbiAgdmFyIGh0bWw1ID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBub2RlIG5hbWVzIG9mIHRoZSBlbGVtZW50cyB0byBzaGl2LlxyXG4gICAgICogQG1lbWJlck9mIGh0bWw1XHJcbiAgICAgKiBAdHlwZSBBcnJheXxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgJ2VsZW1lbnRzJzogb3B0aW9ucy5lbGVtZW50cyB8fCAnYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlbycsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjdXJyZW50IHZlcnNpb24gb2YgaHRtbDVzaGl2XHJcbiAgICAgKi9cclxuICAgICd2ZXJzaW9uJzogdmVyc2lvbixcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBIVE1MNSBzdHlsZSBzaGVldCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcbiAgICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgJ3NoaXZDU1MnOiAob3B0aW9ucy5zaGl2Q1NTICE9PSBmYWxzZSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBlcXVhbCB0byB0cnVlIGlmIGEgYnJvd3NlciBzdXBwb3J0cyBjcmVhdGluZyB1bmtub3duL0hUTUw1IGVsZW1lbnRzXHJcbiAgICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgICAqIEB0eXBlIGJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgJ3N1cHBvcnRzVW5rbm93bkVsZW1lbnRzJzogc3VwcG9ydHNVbmtub3duRWxlbWVudHMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZG9jdW1lbnQncyBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YFxyXG4gICAgICogbWV0aG9kcyBzaG91bGQgYmUgb3ZlcndyaXR0ZW4uXHJcbiAgICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgJ3NoaXZNZXRob2RzJzogKG9wdGlvbnMuc2hpdk1ldGhvZHMgIT09IGZhbHNlKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RyaW5nIHRvIGRlc2NyaWJlIHRoZSB0eXBlIG9mIGBodG1sNWAgb2JqZWN0IChcImRlZmF1bHRcIiBvciBcImRlZmF1bHQgcHJpbnRcIikuXHJcbiAgICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICovXHJcbiAgICAndHlwZSc6ICdkZWZhdWx0JyxcclxuXHJcbiAgICAvLyBzaGl2cyB0aGUgZG9jdW1lbnQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgYGh0bWw1YCBvYmplY3Qgb3B0aW9uc1xyXG4gICAgJ3NoaXZEb2N1bWVudCc6IHNoaXZEb2N1bWVudCxcclxuXHJcbiAgICAvL2NyZWF0ZXMgYSBzaGl2ZWQgZWxlbWVudFxyXG4gICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCxcclxuXHJcbiAgICAvL2NyZWF0ZXMgYSBzaGl2ZWQgZG9jdW1lbnRGcmFnbWVudFxyXG4gICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudDogY3JlYXRlRG9jdW1lbnRGcmFnbWVudFxyXG4gIH07XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAvLyBleHBvc2UgaHRtbDVcclxuICB3aW5kb3cuaHRtbDUgPSBodG1sNTtcclxuXHJcbiAgLy8gc2hpdiB0aGUgZG9jdW1lbnRcclxuICBzaGl2RG9jdW1lbnQoZG9jdW1lbnQpO1xyXG5cclxufSh0aGlzLCBkb2N1bWVudCkpO1xyXG4iLCIvKmdsb2JhbCBqUXVlcnkgKi9cclxuLyohXHJcbiogRml0VGV4dC5qcyAxLjJcclxuKlxyXG4qIENvcHlyaWdodCAyMDExLCBEYXZlIFJ1cGVydCBodHRwOi8vZGF2ZXJ1cGVydC5jb21cclxuKiBSZWxlYXNlZCB1bmRlciB0aGUgV1RGUEwgbGljZW5zZVxyXG4qIGh0dHA6Ly9zYW0uem95Lm9yZy93dGZwbC9cclxuKlxyXG4qIERhdGU6IFRodSBNYXkgMDUgMTQ6MjM6MDAgMjAxMSAtMDYwMFxyXG4qL1xyXG5cclxuKGZ1bmN0aW9uKCAkICl7XHJcblxyXG4gICQuZm4uZml0VGV4dCA9IGZ1bmN0aW9uKCBrb21wcmVzc29yLCBvcHRpb25zICkge1xyXG5cclxuICAgIC8vIFNldHVwIG9wdGlvbnNcclxuICAgIHZhciBjb21wcmVzc29yID0ga29tcHJlc3NvciB8fCAxLFxyXG4gICAgICAgIHNldHRpbmdzID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgJ21pbkZvbnRTaXplJyA6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcclxuICAgICAgICAgICdtYXhGb250U2l6ZScgOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyBTdG9yZSB0aGUgb2JqZWN0XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAvLyBSZXNpemVyKCkgcmVzaXplcyBpdGVtcyBiYXNlZCBvbiB0aGUgb2JqZWN0IHdpZHRoIGRpdmlkZWQgYnkgdGhlIGNvbXByZXNzb3IgKiAxMFxyXG4gICAgICB2YXIgcmVzaXplciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkdGhpcy5jc3MoJ2ZvbnQtc2l6ZScsIE1hdGgubWF4KE1hdGgubWluKCR0aGlzLndpZHRoKCkgLyAoY29tcHJlc3NvcioxMCksIHBhcnNlRmxvYXQoc2V0dGluZ3MubWF4Rm9udFNpemUpKSwgcGFyc2VGbG9hdChzZXR0aW5ncy5taW5Gb250U2l6ZSkpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIENhbGwgb25jZSB0byBzZXQuXHJcbiAgICAgIHJlc2l6ZXIoKTtcclxuXHJcbiAgICAgIC8vIENhbGwgb24gcmVzaXplLiBPcGVyYSBkZWJvdW5jZXMgdGhlaXIgcmVzaXplIGJ5IGRlZmF1bHQuXHJcbiAgICAgICQod2luZG93KS5vbigncmVzaXplLmZpdHRleHQgb3JpZW50YXRpb25jaGFuZ2UuZml0dGV4dCcsIHJlc2l6ZXIpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxufSkoIGpRdWVyeSApO1xyXG4iLCIvKiEgalF1ZXJ5IHYxLjkuMSB8IChjKSAyMDA1LCAyMDEyIGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIHwganF1ZXJ5Lm9yZy9saWNlbnNlXG4vL0Agc291cmNlTWFwcGluZ1VSTD1qcXVlcnkubWluLm1hcFxuKi8oZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9dHlwZW9mIHQsbz1lLmRvY3VtZW50LGE9ZS5sb2NhdGlvbixzPWUualF1ZXJ5LHU9ZS4kLGw9e30sYz1bXSxwPVwiMS45LjFcIixmPWMuY29uY2F0LGQ9Yy5wdXNoLGg9Yy5zbGljZSxnPWMuaW5kZXhPZixtPWwudG9TdHJpbmcseT1sLmhhc093blByb3BlcnR5LHY9cC50cmltLGI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IGIuZm4uaW5pdChlLHQscil9LHg9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHc9L1xcUysvZyxUPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxOPS9eKD86KDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQz0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8saz0vXltcXF0sOnt9XFxzXSokLyxFPS8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZyxTPS9cXFxcKD86W1wiXFxcXFxcL2JmbnJ0XXx1W1xcZGEtZkEtRl17NH0pL2csQT0vXCJbXlwiXFxcXFxcclxcbl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/KD86XFxkK1xcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS9nLGo9L14tbXMtLyxEPS8tKFtcXGRhLXpdKS9naSxMPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX0sSD1mdW5jdGlvbihlKXsoby5hZGRFdmVudExpc3RlbmVyfHxcImxvYWRcIj09PWUudHlwZXx8XCJjb21wbGV0ZVwiPT09by5yZWFkeVN0YXRlKSYmKHEoKSxiLnJlYWR5KCkpfSxxPWZ1bmN0aW9uKCl7by5hZGRFdmVudExpc3RlbmVyPyhvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSCwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEgsITEpKTooby5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLEgpLGUuZGV0YWNoRXZlbnQoXCJvbmxvYWRcIixIKSl9O2IuZm49Yi5wcm90b3R5cGU9e2pxdWVyeTpwLGNvbnN0cnVjdG9yOmIsaW5pdDpmdW5jdGlvbihlLG4scil7dmFyIGksYTtpZighZSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoaT1cIjxcIj09PWUuY2hhckF0KDApJiZcIj5cIj09PWUuY2hhckF0KGUubGVuZ3RoLTEpJiZlLmxlbmd0aD49Mz9bbnVsbCxlLG51bGxdOk4uZXhlYyhlKSwhaXx8IWlbMV0mJm4pcmV0dXJuIW58fG4uanF1ZXJ5PyhufHxyKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IobikuZmluZChlKTtpZihpWzFdKXtpZihuPW4gaW5zdGFuY2VvZiBiP25bMF06bixiLm1lcmdlKHRoaXMsYi5wYXJzZUhUTUwoaVsxXSxuJiZuLm5vZGVUeXBlP24ub3duZXJEb2N1bWVudHx8bjpvLCEwKSksQy50ZXN0KGlbMV0pJiZiLmlzUGxhaW5PYmplY3QobikpZm9yKGkgaW4gbiliLmlzRnVuY3Rpb24odGhpc1tpXSk/dGhpc1tpXShuW2ldKTp0aGlzLmF0dHIoaSxuW2ldKTtyZXR1cm4gdGhpc31pZihhPW8uZ2V0RWxlbWVudEJ5SWQoaVsyXSksYSYmYS5wYXJlbnROb2RlKXtpZihhLmlkIT09aVsyXSlyZXR1cm4gci5maW5kKGUpO3RoaXMubGVuZ3RoPTEsdGhpc1swXT1hfXJldHVybiB0aGlzLmNvbnRleHQ9byx0aGlzLnNlbGVjdG9yPWUsdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOmIuaXNGdW5jdGlvbihlKT9yLnJlYWR5KGUpOihlLnNlbGVjdG9yIT09dCYmKHRoaXMuc2VsZWN0b3I9ZS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9ZS5jb250ZXh0KSxiLm1ha2VBcnJheShlLHRoaXMpKX0sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGguY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3RoaXMudG9BcnJheSgpOjA+ZT90aGlzW3RoaXMubGVuZ3RoK2VdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD1iLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdC5jb250ZXh0PXRoaXMuY29udGV4dCx0fSxlYWNoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGIuZWFjaCh0aGlzLGUsdCl9LHJlYWR5OmZ1bmN0aW9uKGUpe3JldHVybiBiLnJlYWR5LnByb21pc2UoKS5kb25lKGUpLHRoaXN9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGguYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoMD5lP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4+PTAmJnQ+bj9bdGhpc1tuXV06W10pfSxtYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIubWFwKHRoaXMsZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5jYWxsKHQsbix0KX0pKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcihudWxsKX0scHVzaDpkLHNvcnQ6W10uc29ydCxzcGxpY2U6W10uc3BsaWNlfSxiLmZuLmluaXQucHJvdG90eXBlPWIuZm4sYi5leHRlbmQ9Yi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSxuLHIsaSxvLGEscz1hcmd1bWVudHNbMF18fHt9LHU9MSxsPWFyZ3VtZW50cy5sZW5ndGgsYz0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBzJiYoYz1zLHM9YXJndW1lbnRzWzFdfHx7fSx1PTIpLFwib2JqZWN0XCI9PXR5cGVvZiBzfHxiLmlzRnVuY3Rpb24ocyl8fChzPXt9KSxsPT09dSYmKHM9dGhpcywtLXUpO2w+dTt1KyspaWYobnVsbCE9KG89YXJndW1lbnRzW3VdKSlmb3IoaSBpbiBvKWU9c1tpXSxyPW9baV0scyE9PXImJihjJiZyJiYoYi5pc1BsYWluT2JqZWN0KHIpfHwobj1iLmlzQXJyYXkocikpKT8obj8obj0hMSxhPWUmJmIuaXNBcnJheShlKT9lOltdKTphPWUmJmIuaXNQbGFpbk9iamVjdChlKT9lOnt9LHNbaV09Yi5leHRlbmQoYyxhLHIpKTpyIT09dCYmKHNbaV09cikpO3JldHVybiBzfSxiLmV4dGVuZCh7bm9Db25mbGljdDpmdW5jdGlvbih0KXtyZXR1cm4gZS4kPT09YiYmKGUuJD11KSx0JiZlLmpRdWVyeT09PWImJihlLmpRdWVyeT1zKSxifSxpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihlKXtlP2IucmVhZHlXYWl0Kys6Yi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGUpe2lmKGU9PT0hMD8hLS1iLnJlYWR5V2FpdDohYi5pc1JlYWR5KXtpZighby5ib2R5KXJldHVybiBzZXRUaW1lb3V0KGIucmVhZHkpO2IuaXNSZWFkeT0hMCxlIT09ITAmJi0tYi5yZWFkeVdhaXQ+MHx8KG4ucmVzb2x2ZVdpdGgobyxbYl0pLGIuZm4udHJpZ2dlciYmYihvKS50cmlnZ2VyKFwicmVhZHlcIikub2ZmKFwicmVhZHlcIikpfX0saXNGdW5jdGlvbjpmdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1iLnR5cGUoZSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJhcnJheVwiPT09Yi50eXBlKGUpfSxpc1dpbmRvdzpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09ZS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihlKXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChlKSkmJmlzRmluaXRlKGUpfSx0eXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9sW20uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7aWYoIWV8fFwib2JqZWN0XCIhPT1iLnR5cGUoZSl8fGUubm9kZVR5cGV8fGIuaXNXaW5kb3coZSkpcmV0dXJuITE7dHJ5e2lmKGUuY29uc3RydWN0b3ImJiF5LmNhbGwoZSxcImNvbnN0cnVjdG9yXCIpJiYheS5jYWxsKGUuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMX1jYXRjaChuKXtyZXR1cm4hMX12YXIgcjtmb3IociBpbiBlKTtyZXR1cm4gcj09PXR8fHkuY2FsbChlLHIpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IEVycm9yKGUpfSxwYXJzZUhUTUw6ZnVuY3Rpb24oZSx0LG4pe2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdD10fHxvO3ZhciByPUMuZXhlYyhlKSxpPSFuJiZbXTtyZXR1cm4gcj9bdC5jcmVhdGVFbGVtZW50KHJbMV0pXToocj1iLmJ1aWxkRnJhZ21lbnQoW2VdLHQsaSksaSYmYihpKS5yZW1vdmUoKSxiLm1lcmdlKFtdLHIuY2hpbGROb2RlcykpfSxwYXJzZUpTT046ZnVuY3Rpb24obil7cmV0dXJuIGUuSlNPTiYmZS5KU09OLnBhcnNlP2UuSlNPTi5wYXJzZShuKTpudWxsPT09bj9uOlwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1iLnRyaW0obiksbiYmay50ZXN0KG4ucmVwbGFjZShTLFwiQFwiKS5yZXBsYWNlKEEsXCJdXCIpLnJlcGxhY2UoRSxcIlwiKSkpP0Z1bmN0aW9uKFwicmV0dXJuIFwiK24pKCk6KGIuZXJyb3IoXCJJbnZhbGlkIEpTT046IFwiK24pLHQpfSxwYXJzZVhNTDpmdW5jdGlvbihuKXt2YXIgcixpO2lmKCFufHxcInN0cmluZ1wiIT10eXBlb2YgbilyZXR1cm4gbnVsbDt0cnl7ZS5ET01QYXJzZXI/KGk9bmV3IERPTVBhcnNlcixyPWkucGFyc2VGcm9tU3RyaW5nKG4sXCJ0ZXh0L3htbFwiKSk6KHI9bmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MRE9NXCIpLHIuYXN5bmM9XCJmYWxzZVwiLHIubG9hZFhNTChuKSl9Y2F0Y2gobyl7cj10fXJldHVybiByJiZyLmRvY3VtZW50RWxlbWVudCYmIXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fGIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrbikscn0sbm9vcDpmdW5jdGlvbigpe30sZ2xvYmFsRXZhbDpmdW5jdGlvbih0KXt0JiZiLnRyaW0odCkmJihlLmV4ZWNTY3JpcHR8fGZ1bmN0aW9uKHQpe2UuZXZhbC5jYWxsKGUsdCl9KSh0KX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoaixcIm1zLVwiKS5yZXBsYWNlKEQsTCl9LG5vZGVOYW1lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT0wLG89ZS5sZW5ndGgsYT1NKGUpO2lmKG4pe2lmKGEpe2Zvcig7bz5pO2krKylpZihyPXQuYXBwbHkoZVtpXSxuKSxyPT09ITEpYnJlYWt9ZWxzZSBmb3IoaSBpbiBlKWlmKHI9dC5hcHBseShlW2ldLG4pLHI9PT0hMSlicmVha31lbHNlIGlmKGEpe2Zvcig7bz5pO2krKylpZihyPXQuY2FsbChlW2ldLGksZVtpXSkscj09PSExKWJyZWFrfWVsc2UgZm9yKGkgaW4gZSlpZihyPXQuY2FsbChlW2ldLGksZVtpXSkscj09PSExKWJyZWFrO3JldHVybiBlfSx0cmltOnYmJiF2LmNhbGwoXCJcXHVmZWZmXFx1MDBhMFwiKT9mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOnYuY2FsbChlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKFQsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYoTShPYmplY3QoZSkpP2IubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6ZC5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHQpe2lmKGcpcmV0dXJuIGcuY2FsbCh0LGUsbik7Zm9yKHI9dC5sZW5ndGgsbj1uPzA+bj9NYXRoLm1heCgwLHIrbik6bjowO3I+bjtuKyspaWYobiBpbiB0JiZ0W25dPT09ZSlyZXR1cm4gbn1yZXR1cm4tMX0sbWVyZ2U6ZnVuY3Rpb24oZSxuKXt2YXIgcj1uLmxlbmd0aCxpPWUubGVuZ3RoLG89MDtpZihcIm51bWJlclwiPT10eXBlb2Ygcilmb3IoO3I+bztvKyspZVtpKytdPW5bb107ZWxzZSB3aGlsZShuW29dIT09dCllW2krK109bltvKytdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9W10sbz0wLGE9ZS5sZW5ndGg7Zm9yKG49ISFuO2E+bztvKyspcj0hIXQoZVtvXSxvKSxuIT09ciYmaS5wdXNoKGVbb10pO3JldHVybiBpfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9MCxvPWUubGVuZ3RoLGE9TShlKSxzPVtdO2lmKGEpZm9yKDtvPmk7aSsrKXI9dChlW2ldLGksbiksbnVsbCE9ciYmKHNbcy5sZW5ndGhdPXIpO2Vsc2UgZm9yKGkgaW4gZSlyPXQoZVtpXSxpLG4pLG51bGwhPXImJihzW3MubGVuZ3RoXT1yKTtyZXR1cm4gZi5hcHBseShbXSxzKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGUsbil7dmFyIHIsaSxvO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBuJiYobz1lW25dLG49ZSxlPW8pLGIuaXNGdW5jdGlvbihlKT8ocj1oLmNhbGwoYXJndW1lbnRzLDIpLGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseShufHx0aGlzLHIuY29uY2F0KGguY2FsbChhcmd1bWVudHMpKSl9LGkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxiLmd1aWQrKyxpKTp0fSxhY2Nlc3M6ZnVuY3Rpb24oZSxuLHIsaSxvLGEscyl7dmFyIHU9MCxsPWUubGVuZ3RoLGM9bnVsbD09cjtpZihcIm9iamVjdFwiPT09Yi50eXBlKHIpKXtvPSEwO2Zvcih1IGluIHIpYi5hY2Nlc3MoZSxuLHUsclt1XSwhMCxhLHMpfWVsc2UgaWYoaSE9PXQmJihvPSEwLGIuaXNGdW5jdGlvbihpKXx8KHM9ITApLGMmJihzPyhuLmNhbGwoZSxpKSxuPW51bGwpOihjPW4sbj1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGMuY2FsbChiKGUpLG4pfSkpLG4pKWZvcig7bD51O3UrKyluKGVbdV0scixzP2k6aS5jYWxsKGVbdV0sdSxuKGVbdV0scikpKTtyZXR1cm4gbz9lOmM/bi5jYWxsKGUpOmw/bihlWzBdLHIpOmF9LG5vdzpmdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfX0pLGIucmVhZHkucHJvbWlzZT1mdW5jdGlvbih0KXtpZighbilpZihuPWIuRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1vLnJlYWR5U3RhdGUpc2V0VGltZW91dChiLnJlYWR5KTtlbHNlIGlmKG8uYWRkRXZlbnRMaXN0ZW5lcilvLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSCwhMSksZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEgsITEpO2Vsc2V7by5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLEgpLGUuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIixIKTt2YXIgcj0hMTt0cnl7cj1udWxsPT1lLmZyYW1lRWxlbWVudCYmby5kb2N1bWVudEVsZW1lbnR9Y2F0Y2goaSl7fXImJnIuZG9TY3JvbGwmJmZ1bmN0aW9uIGEoKXtpZighYi5pc1JlYWR5KXt0cnl7ci5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2goZSl7cmV0dXJuIHNldFRpbWVvdXQoYSw1MCl9cSgpLGIucmVhZHkoKX19KCl9cmV0dXJuIG4ucHJvbWlzZSh0KX0sYi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2xbXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIE0oZSl7dmFyIHQ9ZS5sZW5ndGgsbj1iLnR5cGUoZSk7cmV0dXJuIGIuaXNXaW5kb3coZSk/ITE6MT09PWUubm9kZVR5cGUmJnQ/ITA6XCJhcnJheVwiPT09bnx8XCJmdW5jdGlvblwiIT09biYmKDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmdD4wJiZ0LTEgaW4gZSl9cj1iKG8pO3ZhciBfPXt9O2Z1bmN0aW9uIEYoZSl7dmFyIHQ9X1tlXT17fTtyZXR1cm4gYi5lYWNoKGUubWF0Y2godyl8fFtdLGZ1bmN0aW9uKGUsbil7dFtuXT0hMH0pLHR9Yi5DYWxsYmFja3M9ZnVuY3Rpb24oZSl7ZT1cInN0cmluZ1wiPT10eXBlb2YgZT9fW2VdfHxGKGUpOmIuZXh0ZW5kKHt9LGUpO3ZhciBuLHIsaSxvLGEscyx1PVtdLGw9IWUub25jZSYmW10sYz1mdW5jdGlvbih0KXtmb3Iocj1lLm1lbW9yeSYmdCxpPSEwLGE9c3x8MCxzPTAsbz11Lmxlbmd0aCxuPSEwO3UmJm8+YTthKyspaWYodVthXS5hcHBseSh0WzBdLHRbMV0pPT09ITEmJmUuc3RvcE9uRmFsc2Upe3I9ITE7YnJlYWt9bj0hMSx1JiYobD9sLmxlbmd0aCYmYyhsLnNoaWZ0KCkpOnI/dT1bXTpwLmRpc2FibGUoKSl9LHA9e2FkZDpmdW5jdGlvbigpe2lmKHUpe3ZhciB0PXUubGVuZ3RoOyhmdW5jdGlvbiBpKHQpe2IuZWFjaCh0LGZ1bmN0aW9uKHQsbil7dmFyIHI9Yi50eXBlKG4pO1wiZnVuY3Rpb25cIj09PXI/ZS51bmlxdWUmJnAuaGFzKG4pfHx1LnB1c2gobik6biYmbi5sZW5ndGgmJlwic3RyaW5nXCIhPT1yJiZpKG4pfSl9KShhcmd1bWVudHMpLG4/bz11Lmxlbmd0aDpyJiYocz10LGMocikpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gdSYmYi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciByO3doaWxlKChyPWIuaW5BcnJheSh0LHUscikpPi0xKXUuc3BsaWNlKHIsMSksbiYmKG8+PXImJm8tLSxhPj1yJiZhLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlP2IuaW5BcnJheShlLHUpPi0xOiEoIXV8fCF1Lmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIHU9W10sdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiB1PWw9cj10LHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXV9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gbD10LHJ8fHAuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFsfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiB0PXR8fFtdLHQ9W2UsdC5zbGljZT90LnNsaWNlKCk6dF0sIXV8fGkmJiFsfHwobj9sLnB1c2godCk6Yyh0KSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBwLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhaX19O3JldHVybiBwfSxiLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9W1tcInJlc29sdmVcIixcImRvbmVcIixiLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsYi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixiLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLG49XCJwZW5kaW5nXCIscj17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbn0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGkuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzO3JldHVybiBiLkRlZmVycmVkKGZ1bmN0aW9uKG4pe2IuZWFjaCh0LGZ1bmN0aW9uKHQsbyl7dmFyIGE9b1swXSxzPWIuaXNGdW5jdGlvbihlW3RdKSYmZVt0XTtpW29bMV1dKGZ1bmN0aW9uKCl7dmFyIGU9cyYmcy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmYi5pc0Z1bmN0aW9uKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkuZG9uZShuLnJlc29sdmUpLmZhaWwobi5yZWplY3QpLnByb2dyZXNzKG4ubm90aWZ5KTpuW2ErXCJXaXRoXCJdKHRoaXM9PT1yP24ucHJvbWlzZSgpOnRoaXMscz9bZV06YXJndW1lbnRzKX0pfSksZT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP2IuZXh0ZW5kKGUscik6cn19LGk9e307cmV0dXJuIHIucGlwZT1yLnRoZW4sYi5lYWNoKHQsZnVuY3Rpb24oZSxvKXt2YXIgYT1vWzJdLHM9b1szXTtyW29bMV1dPWEuYWRkLHMmJmEuYWRkKGZ1bmN0aW9uKCl7bj1zfSx0WzFeZV1bMl0uZGlzYWJsZSx0WzJdWzJdLmxvY2spLGlbb1swXV09ZnVuY3Rpb24oKXtyZXR1cm4gaVtvWzBdK1wiV2l0aFwiXSh0aGlzPT09aT9yOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxpW29bMF0rXCJXaXRoXCJdPWEuZmlyZVdpdGh9KSxyLnByb21pc2UoaSksZSYmZS5jYWxsKGksaSksaX0sd2hlbjpmdW5jdGlvbihlKXt2YXIgdD0wLG49aC5jYWxsKGFyZ3VtZW50cykscj1uLmxlbmd0aCxpPTEhPT1yfHxlJiZiLmlzRnVuY3Rpb24oZS5wcm9taXNlKT9yOjAsbz0xPT09aT9lOmIuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7dFtlXT10aGlzLG5bZV09YXJndW1lbnRzLmxlbmd0aD4xP2guY2FsbChhcmd1bWVudHMpOnIsbj09PXM/by5ub3RpZnlXaXRoKHQsbik6LS1pfHxvLnJlc29sdmVXaXRoKHQsbil9fSxzLHUsbDtpZihyPjEpZm9yKHM9QXJyYXkociksdT1BcnJheShyKSxsPUFycmF5KHIpO3I+dDt0Kyspblt0XSYmYi5pc0Z1bmN0aW9uKG5bdF0ucHJvbWlzZSk/blt0XS5wcm9taXNlKCkuZG9uZShhKHQsbCxuKSkuZmFpbChvLnJlamVjdCkucHJvZ3Jlc3MoYSh0LHUscykpOi0taTtyZXR1cm4gaXx8by5yZXNvbHZlV2l0aChsLG4pLG8ucHJvbWlzZSgpfX0pLGIuc3VwcG9ydD1mdW5jdGlvbigpe3ZhciB0LG4scixhLHMsdSxsLGMscCxmLGQ9by5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGQuc2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIsXCJ0XCIpLGQuaW5uZXJIVE1MPVwiICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj0nL2EnPmE8L2E+PGlucHV0IHR5cGU9J2NoZWNrYm94Jy8+XCIsbj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSxyPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLCFufHwhcnx8IW4ubGVuZ3RoKXJldHVybnt9O3M9by5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGw9cy5hcHBlbmRDaGlsZChvLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLGE9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLHIuc3R5bGUuY3NzVGV4dD1cInRvcDoxcHg7ZmxvYXQ6bGVmdDtvcGFjaXR5Oi41XCIsdD17Z2V0U2V0QXR0cmlidXRlOlwidFwiIT09ZC5jbGFzc05hbWUsbGVhZGluZ1doaXRlc3BhY2U6Mz09PWQuZmlyc3RDaGlsZC5ub2RlVHlwZSx0Ym9keTohZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpLmxlbmd0aCxodG1sU2VyaWFsaXplOiEhZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIikubGVuZ3RoLHN0eWxlOi90b3AvLnRlc3Qoci5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksaHJlZk5vcm1hbGl6ZWQ6XCIvYVwiPT09ci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLG9wYWNpdHk6L14wLjUvLnRlc3Qoci5zdHlsZS5vcGFjaXR5KSxjc3NGbG9hdDohIXIuc3R5bGUuY3NzRmxvYXQsY2hlY2tPbjohIWEudmFsdWUsb3B0U2VsZWN0ZWQ6bC5zZWxlY3RlZCxlbmN0eXBlOiEhby5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKS5lbmN0eXBlLGh0bWw1Q2xvbmU6XCI8Om5hdj48LzpuYXY+XCIhPT1vLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIikuY2xvbmVOb2RlKCEwKS5vdXRlckhUTUwsYm94TW9kZWw6XCJDU1MxQ29tcGF0XCI9PT1vLmNvbXBhdE1vZGUsZGVsZXRlRXhwYW5kbzohMCxub0Nsb25lRXZlbnQ6ITAsaW5saW5lQmxvY2tOZWVkc0xheW91dDohMSxzaHJpbmtXcmFwQmxvY2tzOiExLHJlbGlhYmxlTWFyZ2luUmlnaHQ6ITAsYm94U2l6aW5nUmVsaWFibGU6ITAscGl4ZWxQb3NpdGlvbjohMX0sYS5jaGVja2VkPSEwLHQubm9DbG9uZUNoZWNrZWQ9YS5jbG9uZU5vZGUoITApLmNoZWNrZWQscy5kaXNhYmxlZD0hMCx0Lm9wdERpc2FibGVkPSFsLmRpc2FibGVkO3RyeXtkZWxldGUgZC50ZXN0fWNhdGNoKGgpe3QuZGVsZXRlRXhwYW5kbz0hMX1hPW8uY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSx0LmlucHV0PVwiXCI9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpLGEudmFsdWU9XCJ0XCIsYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSx0LnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlLGEuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwidFwiKSxhLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksdT1vLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSx1LmFwcGVuZENoaWxkKGEpLHQuYXBwZW5kQ2hlY2tlZD1hLmNoZWNrZWQsdC5jaGVja0Nsb25lPXUuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGQuYXR0YWNoRXZlbnQmJihkLmF0dGFjaEV2ZW50KFwib25jbGlja1wiLGZ1bmN0aW9uKCl7dC5ub0Nsb25lRXZlbnQ9ITF9KSxkLmNsb25lTm9kZSghMCkuY2xpY2soKSk7Zm9yKGYgaW57c3VibWl0OiEwLGNoYW5nZTohMCxmb2N1c2luOiEwfSlkLnNldEF0dHJpYnV0ZShjPVwib25cIitmLFwidFwiKSx0W2YrXCJCdWJibGVzXCJdPWMgaW4gZXx8ZC5hdHRyaWJ1dGVzW2NdLmV4cGFuZG89PT0hMTtyZXR1cm4gZC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsZC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsdC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09ZC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxiKGZ1bmN0aW9uKCl7dmFyIG4scixhLHM9XCJwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7XCIsdT1vLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTt1JiYobj1vLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbi5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0Oi05OTk5cHg7bWFyZ2luLXRvcDoxcHhcIix1LmFwcGVuZENoaWxkKG4pLmFwcGVuZENoaWxkKGQpLGQuaW5uZXJIVE1MPVwiPHRhYmxlPjx0cj48dGQ+PC90ZD48dGQ+dDwvdGQ+PC90cj48L3RhYmxlPlwiLGE9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpLGFbMF0uc3R5bGUuY3NzVGV4dD1cInBhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDtkaXNwbGF5Om5vbmVcIixwPTA9PT1hWzBdLm9mZnNldEhlaWdodCxhWzBdLnN0eWxlLmRpc3BsYXk9XCJcIixhWzFdLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdC5yZWxpYWJsZUhpZGRlbk9mZnNldHM9cCYmMD09PWFbMF0ub2Zmc2V0SGVpZ2h0LGQuaW5uZXJIVE1MPVwiXCIsZC5zdHlsZS5jc3NUZXh0PVwiYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MXB4O2JvcmRlcjoxcHg7ZGlzcGxheTpibG9jazt3aWR0aDo0cHg7bWFyZ2luLXRvcDoxJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MSU7XCIsdC5ib3hTaXppbmc9ND09PWQub2Zmc2V0V2lkdGgsdC5kb2VzTm90SW5jbHVkZU1hcmdpbkluQm9keU9mZnNldD0xIT09dS5vZmZzZXRUb3AsZS5nZXRDb21wdXRlZFN0eWxlJiYodC5waXhlbFBvc2l0aW9uPVwiMSVcIiE9PShlLmdldENvbXB1dGVkU3R5bGUoZCxudWxsKXx8e30pLnRvcCx0LmJveFNpemluZ1JlbGlhYmxlPVwiNHB4XCI9PT0oZS5nZXRDb21wdXRlZFN0eWxlKGQsbnVsbCl8fHt3aWR0aDpcIjRweFwifSkud2lkdGgscj1kLmFwcGVuZENoaWxkKG8uY3JlYXRlRWxlbWVudChcImRpdlwiKSksci5zdHlsZS5jc3NUZXh0PWQuc3R5bGUuY3NzVGV4dD1zLHIuc3R5bGUubWFyZ2luUmlnaHQ9ci5zdHlsZS53aWR0aD1cIjBcIixkLnN0eWxlLndpZHRoPVwiMXB4XCIsdC5yZWxpYWJsZU1hcmdpblJpZ2h0PSFwYXJzZUZsb2F0KChlLmdldENvbXB1dGVkU3R5bGUocixudWxsKXx8e30pLm1hcmdpblJpZ2h0KSksdHlwZW9mIGQuc3R5bGUuem9vbSE9PWkmJihkLmlubmVySFRNTD1cIlwiLGQuc3R5bGUuY3NzVGV4dD1zK1wid2lkdGg6MXB4O3BhZGRpbmc6MXB4O2Rpc3BsYXk6aW5saW5lO3pvb206MVwiLHQuaW5saW5lQmxvY2tOZWVkc0xheW91dD0zPT09ZC5vZmZzZXRXaWR0aCxkLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGQuaW5uZXJIVE1MPVwiPGRpdj48L2Rpdj5cIixkLmZpcnN0Q2hpbGQuc3R5bGUud2lkdGg9XCI1cHhcIix0LnNocmlua1dyYXBCbG9ja3M9MyE9PWQub2Zmc2V0V2lkdGgsdC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0JiYodS5zdHlsZS56b29tPTEpKSx1LnJlbW92ZUNoaWxkKG4pLG49ZD1hPXI9bnVsbCl9KSxuPXM9dT1sPXI9YT1udWxsLHR9KCk7dmFyIE89Lyg/Olxce1tcXHNcXFNdKlxcfXxcXFtbXFxzXFxTXSpcXF0pJC8sQj0vKFtBLVpdKS9nO2Z1bmN0aW9uIFAoZSxuLHIsaSl7aWYoYi5hY2NlcHREYXRhKGUpKXt2YXIgbyxhLHM9Yi5leHBhbmRvLHU9XCJzdHJpbmdcIj09dHlwZW9mIG4sbD1lLm5vZGVUeXBlLHA9bD9iLmNhY2hlOmUsZj1sP2Vbc106ZVtzXSYmcztpZihmJiZwW2ZdJiYoaXx8cFtmXS5kYXRhKXx8IXV8fHIhPT10KXJldHVybiBmfHwobD9lW3NdPWY9Yy5wb3AoKXx8Yi5ndWlkKys6Zj1zKSxwW2ZdfHwocFtmXT17fSxsfHwocFtmXS50b0pTT049Yi5ub29wKSksKFwib2JqZWN0XCI9PXR5cGVvZiBufHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKSYmKGk/cFtmXT1iLmV4dGVuZChwW2ZdLG4pOnBbZl0uZGF0YT1iLmV4dGVuZChwW2ZdLmRhdGEsbikpLG89cFtmXSxpfHwoby5kYXRhfHwoby5kYXRhPXt9KSxvPW8uZGF0YSksciE9PXQmJihvW2IuY2FtZWxDYXNlKG4pXT1yKSx1PyhhPW9bbl0sbnVsbD09YSYmKGE9b1tiLmNhbWVsQ2FzZShuKV0pKTphPW8sYX19ZnVuY3Rpb24gUihlLHQsbil7aWYoYi5hY2NlcHREYXRhKGUpKXt2YXIgcixpLG8sYT1lLm5vZGVUeXBlLHM9YT9iLmNhY2hlOmUsdT1hP2VbYi5leHBhbmRvXTpiLmV4cGFuZG87aWYoc1t1XSl7aWYodCYmKG89bj9zW3VdOnNbdV0uZGF0YSkpe2IuaXNBcnJheSh0KT90PXQuY29uY2F0KGIubWFwKHQsYi5jYW1lbENhc2UpKTp0IGluIG8/dD1bdF06KHQ9Yi5jYW1lbENhc2UodCksdD10IGluIG8/W3RdOnQuc3BsaXQoXCIgXCIpKTtmb3Iocj0wLGk9dC5sZW5ndGg7aT5yO3IrKylkZWxldGUgb1t0W3JdXTtpZighKG4/JDpiLmlzRW1wdHlPYmplY3QpKG8pKXJldHVybn0obnx8KGRlbGV0ZSBzW3VdLmRhdGEsJChzW3VdKSkpJiYoYT9iLmNsZWFuRGF0YShbZV0sITApOmIuc3VwcG9ydC5kZWxldGVFeHBhbmRvfHxzIT1zLndpbmRvdz9kZWxldGUgc1t1XTpzW3VdPW51bGwpfX19Yi5leHRlbmQoe2NhY2hlOnt9LGV4cGFuZG86XCJqUXVlcnlcIisocCtNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxub0RhdGE6e2VtYmVkOiEwLG9iamVjdDpcImNsc2lkOkQyN0NEQjZFLUFFNkQtMTFjZi05NkI4LTQ0NDU1MzU0MDAwMFwiLGFwcGxldDohMH0saGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gZT1lLm5vZGVUeXBlP2IuY2FjaGVbZVtiLmV4cGFuZG9dXTplW2IuZXhwYW5kb10sISFlJiYhJChlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFAoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFIoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBQKGUsdCxuLCEwKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUihlLHQsITApfSxhY2NlcHREYXRhOmZ1bmN0aW9uKGUpe2lmKGUubm9kZVR5cGUmJjEhPT1lLm5vZGVUeXBlJiY5IT09ZS5ub2RlVHlwZSlyZXR1cm4hMTt2YXIgdD1lLm5vZGVOYW1lJiZiLm5vRGF0YVtlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldO3JldHVybiF0fHx0IT09ITAmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NpZFwiKT09PXR9fSksYi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG89dGhpc1swXSxhPTAscz1udWxsO2lmKGU9PT10KXtpZih0aGlzLmxlbmd0aCYmKHM9Yi5kYXRhKG8pLDE9PT1vLm5vZGVUeXBlJiYhYi5fZGF0YShvLFwicGFyc2VkQXR0cnNcIikpKXtmb3Iocj1vLmF0dHJpYnV0ZXM7ci5sZW5ndGg+YTthKyspaT1yW2FdLm5hbWUsaS5pbmRleE9mKFwiZGF0YS1cIil8fChpPWIuY2FtZWxDYXNlKGkuc2xpY2UoNSkpLFcobyxpLHNbaV0pKTtiLl9kYXRhKG8sXCJwYXJzZWRBdHRyc1wiLCEwKX1yZXR1cm4gc31yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT90aGlzLmVhY2goZnVuY3Rpb24oKXtiLmRhdGEodGhpcyxlKX0pOmIuYWNjZXNzKHRoaXMsZnVuY3Rpb24obil7cmV0dXJuIG49PT10P28/VyhvLGUsYi5kYXRhKG8sZSkpOm51bGw6KHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZGF0YSh0aGlzLGUsbil9KSx0KX0sbnVsbCxuLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5yZW1vdmVEYXRhKHRoaXMsZSl9KX19KTtmdW5jdGlvbiBXKGUsbixyKXtpZihyPT09dCYmMT09PWUubm9kZVR5cGUpe3ZhciBpPVwiZGF0YS1cIituLnJlcGxhY2UoQixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpO2lmKHI9ZS5nZXRBdHRyaWJ1dGUoaSksXCJzdHJpbmdcIj09dHlwZW9mIHIpe3RyeXtyPVwidHJ1ZVwiPT09cj8hMDpcImZhbHNlXCI9PT1yPyExOlwibnVsbFwiPT09cj9udWxsOityK1wiXCI9PT1yPytyOk8udGVzdChyKT9iLnBhcnNlSlNPTihyKTpyfWNhdGNoKG8pe31iLmRhdGEoZSxuLHIpfWVsc2Ugcj10fXJldHVybiByfWZ1bmN0aW9uICQoZSl7dmFyIHQ7Zm9yKHQgaW4gZSlpZigoXCJkYXRhXCIhPT10fHwhYi5pc0VtcHR5T2JqZWN0KGVbdF0pKSYmXCJ0b0pTT05cIiE9PXQpcmV0dXJuITE7cmV0dXJuITB9Yi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsbixyKXt2YXIgaTtyZXR1cm4gZT8obj0obnx8XCJmeFwiKStcInF1ZXVlXCIsaT1iLl9kYXRhKGUsbiksciYmKCFpfHxiLmlzQXJyYXkocik/aT1iLl9kYXRhKGUsbixiLm1ha2VBcnJheShyKSk6aS5wdXNoKHIpKSxpfHxbXSk6dH0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPWIucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89Yi5fcXVldWVIb29rcyhlLHQpLGE9ZnVuY3Rpb24oKXtiLmRlcXVldWUoZSx0KX07XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxvLmN1cj1pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsYSxvKSksIXImJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIGIuX2RhdGEoZSxuKXx8Yi5fZGF0YShlLG4se2VtcHR5OmIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Yi5fcmVtb3ZlRGF0YShlLHQrXCJxdWV1ZVwiKSxiLl9yZW1vdmVEYXRhKGUsbil9KX0pfX0pLGIuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLG4pe3ZhciByPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihuPWUsZT1cImZ4XCIsci0tKSxyPmFyZ3VtZW50cy5sZW5ndGg/Yi5xdWV1ZSh0aGlzWzBdLGUpOm49PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9Yi5xdWV1ZSh0aGlzLGUsbik7Yi5fcXVldWVIb29rcyh0aGlzLGUpLFwiZnhcIj09PWUmJlwiaW5wcm9ncmVzc1wiIT09dFswXSYmYi5kZXF1ZXVlKHRoaXMsZSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5kZXF1ZXVlKHRoaXMsZSl9KX0sZGVsYXk6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1iLmZ4P2IuZnguc3BlZWRzW2VdfHxlOmUsdD10fHxcImZ4XCIsdGhpcy5xdWV1ZSh0LGZ1bmN0aW9uKHQsbil7dmFyIHI9c2V0VGltZW91dCh0LGUpO24uc3RvcD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKX19KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsbil7dmFyIHIsaT0xLG89Yi5EZWZlcnJlZCgpLGE9dGhpcyxzPXRoaXMubGVuZ3RoLHU9ZnVuY3Rpb24oKXstLWl8fG8ucmVzb2x2ZVdpdGgoYSxbYV0pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKG49ZSxlPXQpLGU9ZXx8XCJmeFwiO3doaWxlKHMtLSlyPWIuX2RhdGEoYVtzXSxlK1wicXVldWVIb29rc1wiKSxyJiZyLmVtcHR5JiYoaSsrLHIuZW1wdHkuYWRkKHUpKTtyZXR1cm4gdSgpLG8ucHJvbWlzZShuKX19KTt2YXIgSSx6LFg9L1tcXHRcXHJcXG5dL2csVT0vXFxyL2csVj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0KSQvaSxZPS9eKD86YXxhcmVhKSQvaSxKPS9eKD86Y2hlY2tlZHxzZWxlY3RlZHxhdXRvZm9jdXN8YXV0b3BsYXl8YXN5bmN8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWQpJC9pLEc9L14oPzpjaGVja2VkfHNlbGVjdGVkKSQvaSxRPWIuc3VwcG9ydC5nZXRTZXRBdHRyaWJ1dGUsSz1iLnN1cHBvcnQuaW5wdXQ7Yi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxiLmF0dHIsZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2IucmVtb3ZlQXR0cih0aGlzLGUpfSl9LHByb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxiLnByb3AsZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9Yi5wcm9wRml4W2VdfHxlLHRoaXMuZWFjaChmdW5jdGlvbigpe3RyeXt0aGlzW2VdPXQsZGVsZXRlIHRoaXNbZV19Y2F0Y2gobil7fX0pfSxhZGRDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGE9MCxzPXRoaXMubGVuZ3RoLHU9XCJzdHJpbmdcIj09dHlwZW9mIGUmJmU7aWYoYi5pc0Z1bmN0aW9uKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7Yih0aGlzKS5hZGRDbGFzcyhlLmNhbGwodGhpcyx0LHRoaXMuY2xhc3NOYW1lKSl9KTtpZih1KWZvcih0PShlfHxcIlwiKS5tYXRjaCh3KXx8W107cz5hO2ErKylpZihuPXRoaXNbYV0scj0xPT09bi5ub2RlVHlwZSYmKG4uY2xhc3NOYW1lPyhcIiBcIituLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShYLFwiIFwiKTpcIiBcIikpe289MDt3aGlsZShpPXRbbysrXSkwPnIuaW5kZXhPZihcIiBcIitpK1wiIFwiKSYmKHIrPWkrXCIgXCIpO24uY2xhc3NOYW1lPWIudHJpbShyKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhPTAscz10aGlzLmxlbmd0aCx1PTA9PT1hcmd1bWVudHMubGVuZ3RofHxcInN0cmluZ1wiPT10eXBlb2YgZSYmZTtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLnJlbW92ZUNsYXNzKGUuY2FsbCh0aGlzLHQsdGhpcy5jbGFzc05hbWUpKX0pO2lmKHUpZm9yKHQ9KGV8fFwiXCIpLm1hdGNoKHcpfHxbXTtzPmE7YSsrKWlmKG49dGhpc1thXSxyPTE9PT1uLm5vZGVUeXBlJiYobi5jbGFzc05hbWU/KFwiIFwiK24uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpOlwiXCIpKXtvPTA7d2hpbGUoaT10W28rK10pd2hpbGUoci5pbmRleE9mKFwiIFwiK2krXCIgXCIpPj0wKXI9ci5yZXBsYWNlKFwiIFwiK2krXCIgXCIsXCIgXCIpO24uY2xhc3NOYW1lPWU/Yi50cmltKHIpOlwiXCJ9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dHlwZW9mIGUscj1cImJvb2xlYW5cIj09dHlwZW9mIHQ7cmV0dXJuIGIuaXNGdW5jdGlvbihlKT90aGlzLmVhY2goZnVuY3Rpb24obil7Yih0aGlzKS50b2dnbGVDbGFzcyhlLmNhbGwodGhpcyxuLHRoaXMuY2xhc3NOYW1lLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYoXCJzdHJpbmdcIj09PW4pe3ZhciBvLGE9MCxzPWIodGhpcyksdT10LGw9ZS5tYXRjaCh3KXx8W107d2hpbGUobz1sW2ErK10pdT1yP3U6IXMuaGFzQ2xhc3Mobyksc1t1P1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKG8pfWVsc2Uobj09PWl8fFwiYm9vbGVhblwiPT09bikmJih0aGlzLmNsYXNzTmFtZSYmYi5fZGF0YSh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8ZT09PSExP1wiXCI6Yi5fZGF0YSh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIil9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQ9XCIgXCIrZStcIiBcIixuPTAscj10aGlzLmxlbmd0aDtmb3IoO3I+bjtuKyspaWYoMT09PXRoaXNbbl0ubm9kZVR5cGUmJihcIiBcIit0aGlzW25dLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShYLFwiIFwiKS5pbmRleE9mKHQpPj0wKXJldHVybiEwO3JldHVybiExfSx2YWw6ZnVuY3Rpb24oZSl7dmFyIG4scixpLG89dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gaT1iLmlzRnVuY3Rpb24oZSksdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3ZhciBvLGE9Yih0aGlzKTsxPT09dGhpcy5ub2RlVHlwZSYmKG89aT9lLmNhbGwodGhpcyxuLGEudmFsKCkpOmUsbnVsbD09bz9vPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIG8/bys9XCJcIjpiLmlzQXJyYXkobykmJihvPWIubWFwKG8sZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSkscj1iLnZhbEhvb2tzW3RoaXMudHlwZV18fGIudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxyJiZcInNldFwiaW4gciYmci5zZXQodGhpcyxvLFwidmFsdWVcIikhPT10fHwodGhpcy52YWx1ZT1vKSl9KTtpZihvKXJldHVybiByPWIudmFsSG9va3Nbby50eXBlXXx8Yi52YWxIb29rc1tvLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLHImJlwiZ2V0XCJpbiByJiYobj1yLmdldChvLFwidmFsdWVcIikpIT09dD9uOihuPW8udmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIG4/bi5yZXBsYWNlKFUsXCJcIik6bnVsbD09bj9cIlwiOm4pfX19KSxiLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUuYXR0cmlidXRlcy52YWx1ZTtyZXR1cm4hdHx8dC5zcGVjaWZpZWQ/ZS52YWx1ZTplLnRleHR9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9ZS5vcHRpb25zLGk9ZS5zZWxlY3RlZEluZGV4LG89XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGV8fDA+aSxhPW8/bnVsbDpbXSxzPW8/aSsxOnIubGVuZ3RoLHU9MD5pP3M6bz9pOjA7Zm9yKDtzPnU7dSsrKWlmKG49clt1XSwhKCFuLnNlbGVjdGVkJiZ1IT09aXx8KGIuc3VwcG9ydC5vcHREaXNhYmxlZD9uLmRpc2FibGVkOm51bGwhPT1uLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8bi5wYXJlbnROb2RlLmRpc2FibGVkJiZiLm5vZGVOYW1lKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1iKG4pLnZhbCgpLG8pcmV0dXJuIHQ7YS5wdXNoKHQpfXJldHVybiBhfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1iLm1ha2VBcnJheSh0KTtyZXR1cm4gYihlKS5maW5kKFwib3B0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXt0aGlzLnNlbGVjdGVkPWIuaW5BcnJheShiKHRoaXMpLnZhbCgpLG4pPj0wfSksbi5sZW5ndGh8fChlLnNlbGVjdGVkSW5kZXg9LTEpLG59fX0sYXR0cjpmdW5jdGlvbihlLG4scil7dmFyIG8sYSxzLHU9ZS5ub2RlVHlwZTtpZihlJiYzIT09dSYmOCE9PXUmJjIhPT11KXJldHVybiB0eXBlb2YgZS5nZXRBdHRyaWJ1dGU9PT1pP2IucHJvcChlLG4scik6KGE9MSE9PXV8fCFiLmlzWE1MRG9jKGUpLGEmJihuPW4udG9Mb3dlckNhc2UoKSxvPWIuYXR0ckhvb2tzW25dfHwoSi50ZXN0KG4pP3o6SSkpLHI9PT10P28mJmEmJlwiZ2V0XCJpbiBvJiZudWxsIT09KHM9by5nZXQoZSxuKSk/czoodHlwZW9mIGUuZ2V0QXR0cmlidXRlIT09aSYmKHM9ZS5nZXRBdHRyaWJ1dGUobikpLG51bGw9PXM/dDpzKTpudWxsIT09cj9vJiZhJiZcInNldFwiaW4gbyYmKHM9by5zZXQoZSxyLG4pKSE9PXQ/czooZS5zZXRBdHRyaWJ1dGUobixyK1wiXCIpLHIpOihiLnJlbW92ZUF0dHIoZSxuKSx0KSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9MCxvPXQmJnQubWF0Y2godyk7aWYobyYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1vW2krK10pcj1iLnByb3BGaXhbbl18fG4sSi50ZXN0KG4pPyFRJiZHLnRlc3Qobik/ZVtiLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrbildPWVbcl09ITE6ZVtyXT0hMTpiLmF0dHIoZSxuLFwiXCIpLGUucmVtb3ZlQXR0cmlidXRlKFE/bjpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZighYi5zdXBwb3J0LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJmIubm9kZU5hbWUoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxwcm9wRml4Ont0YWJpbmRleDpcInRhYkluZGV4XCIscmVhZG9ubHk6XCJyZWFkT25seVwiLFwiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsbWF4bGVuZ3RoOlwibWF4TGVuZ3RoXCIsY2VsbHNwYWNpbmc6XCJjZWxsU3BhY2luZ1wiLGNlbGxwYWRkaW5nOlwiY2VsbFBhZGRpbmdcIixyb3dzcGFuOlwicm93U3BhblwiLGNvbHNwYW46XCJjb2xTcGFuXCIsdXNlbWFwOlwidXNlTWFwXCIsZnJhbWVib3JkZXI6XCJmcmFtZUJvcmRlclwiLGNvbnRlbnRlZGl0YWJsZTpcImNvbnRlbnRFZGl0YWJsZVwifSxwcm9wOmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvLGEscz1lLm5vZGVUeXBlO2lmKGUmJjMhPT1zJiY4IT09cyYmMiE9PXMpcmV0dXJuIGE9MSE9PXN8fCFiLmlzWE1MRG9jKGUpLGEmJihuPWIucHJvcEZpeFtuXXx8bixvPWIucHJvcEhvb2tzW25dKSxyIT09dD9vJiZcInNldFwiaW4gbyYmKGk9by5zZXQoZSxyLG4pKSE9PXQ/aTplW25dPXI6byYmXCJnZXRcImluIG8mJm51bGwhPT0oaT1vLmdldChlLG4pKT9pOmVbbl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgbj1lLmdldEF0dHJpYnV0ZU5vZGUoXCJ0YWJpbmRleFwiKTtyZXR1cm4gbiYmbi5zcGVjaWZpZWQ/cGFyc2VJbnQobi52YWx1ZSwxMCk6Vi50ZXN0KGUubm9kZU5hbWUpfHxZLnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOnR9fX19KSx6PXtnZXQ6ZnVuY3Rpb24oZSxuKXt2YXIgcj1iLnByb3AoZSxuKSxpPVwiYm9vbGVhblwiPT10eXBlb2YgciYmZS5nZXRBdHRyaWJ1dGUobiksbz1cImJvb2xlYW5cIj09dHlwZW9mIHI/SyYmUT9udWxsIT1pOkcudGVzdChuKT9lW2IuY2FtZWxDYXNlKFwiZGVmYXVsdC1cIituKV06ISFpOmUuZ2V0QXR0cmlidXRlTm9kZShuKTtyZXR1cm4gbyYmby52YWx1ZSE9PSExP24udG9Mb3dlckNhc2UoKTp0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0PT09ITE/Yi5yZW1vdmVBdHRyKGUsbik6SyYmUXx8IUcudGVzdChuKT9lLnNldEF0dHJpYnV0ZSghUSYmYi5wcm9wRml4W25dfHxuLG4pOmVbYi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK24pXT1lW25dPSEwLG59fSxLJiZRfHwoYi5hdHRySG9va3MudmFsdWU9e2dldDpmdW5jdGlvbihlLG4pe3ZhciByPWUuZ2V0QXR0cmlidXRlTm9kZShuKTtyZXR1cm4gYi5ub2RlTmFtZShlLFwiaW5wdXRcIik/ZS5kZWZhdWx0VmFsdWU6ciYmci5zcGVjaWZpZWQ/ci52YWx1ZTp0fSxzZXQ6ZnVuY3Rpb24oZSxuLHIpe3JldHVybiBiLm5vZGVOYW1lKGUsXCJpbnB1dFwiKT8oZS5kZWZhdWx0VmFsdWU9bix0KTpJJiZJLnNldChlLG4scil9fSksUXx8KEk9Yi52YWxIb29rcy5idXR0b249e2dldDpmdW5jdGlvbihlLG4pe3ZhciByPWUuZ2V0QXR0cmlidXRlTm9kZShuKTtyZXR1cm4gciYmKFwiaWRcIj09PW58fFwibmFtZVwiPT09bnx8XCJjb29yZHNcIj09PW4/XCJcIiE9PXIudmFsdWU6ci5zcGVjaWZpZWQpP3IudmFsdWU6dH0sc2V0OmZ1bmN0aW9uKGUsbixyKXt2YXIgaT1lLmdldEF0dHJpYnV0ZU5vZGUocik7cmV0dXJuIGl8fGUuc2V0QXR0cmlidXRlTm9kZShpPWUub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUocikpLGkudmFsdWU9bis9XCJcIixcInZhbHVlXCI9PT1yfHxuPT09ZS5nZXRBdHRyaWJ1dGUocik/bjp0fX0sYi5hdHRySG9va3MuY29udGVudGVkaXRhYmxlPXtnZXQ6SS5nZXQsc2V0OmZ1bmN0aW9uKGUsdCxuKXtJLnNldChlLFwiXCI9PT10PyExOnQsbil9fSxiLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihlLG4pe2IuYXR0ckhvb2tzW25dPWIuZXh0ZW5kKGIuYXR0ckhvb2tzW25dLHtzZXQ6ZnVuY3Rpb24oZSxyKXtyZXR1cm5cIlwiPT09cj8oZS5zZXRBdHRyaWJ1dGUobixcImF1dG9cIikscik6dH19KX0pKSxiLnN1cHBvcnQuaHJlZk5vcm1hbGl6ZWR8fChiLmVhY2goW1wiaHJlZlwiLFwic3JjXCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsbil7Yi5hdHRySG9va3Nbbl09Yi5leHRlbmQoYi5hdHRySG9va3Nbbl0se2dldDpmdW5jdGlvbihlKXt2YXIgcj1lLmdldEF0dHJpYnV0ZShuLDIpO3JldHVybiBudWxsPT1yP3Q6cn19KX0pLGIuZWFjaChbXCJocmVmXCIsXCJzcmNcIl0sZnVuY3Rpb24oZSx0KXtiLnByb3BIb29rc1t0XT17Z2V0OmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSh0LDQpfX19KSksYi5zdXBwb3J0LnN0eWxlfHwoYi5hdHRySG9va3Muc3R5bGU9e2dldDpmdW5jdGlvbihlKXtyZXR1cm4gZS5zdHlsZS5jc3NUZXh0fHx0fSxzZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5zdHlsZS5jc3NUZXh0PXQrXCJcIn19KSxiLnN1cHBvcnQub3B0U2VsZWN0ZWR8fChiLnByb3BIb29rcy5zZWxlY3RlZD1iLmV4dGVuZChiLnByb3BIb29rcy5zZWxlY3RlZCx7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KSxudWxsfX0pKSxiLnN1cHBvcnQuZW5jdHlwZXx8KGIucHJvcEZpeC5lbmN0eXBlPVwiZW5jb2RpbmdcIiksYi5zdXBwb3J0LmNoZWNrT258fGIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtiLnZhbEhvb2tzW3RoaXNdPXtnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfX19KSxiLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Yi52YWxIb29rc1t0aGlzXT1iLmV4dGVuZChiLnZhbEhvb2tzW3RoaXNdLHtzZXQ6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYi5pc0FycmF5KG4pP2UuY2hlY2tlZD1iLmluQXJyYXkoYihlKS52YWwoKSxuKT49MDp0fX0pfSk7dmFyIFo9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWEpJC9pLGV0PS9ea2V5Lyx0dD0vXig/Om1vdXNlfGNvbnRleHRtZW51KXxjbGljay8sbnQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLHJ0PS9eKFteLl0qKSg/OlxcLiguKyl8KSQvO2Z1bmN0aW9uIGl0KCl7cmV0dXJuITB9ZnVuY3Rpb24gb3QoKXtyZXR1cm4hMX1iLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGUsbixyLG8sYSl7dmFyIHMsdSxsLGMscCxmLGQsaCxnLG0seSx2PWIuX2RhdGEoZSk7aWYodil7ci5oYW5kbGVyJiYoYz1yLHI9Yy5oYW5kbGVyLGE9Yy5zZWxlY3Rvciksci5ndWlkfHwoci5ndWlkPWIuZ3VpZCsrKSwodT12LmV2ZW50cyl8fCh1PXYuZXZlbnRzPXt9KSwoZj12LmhhbmRsZSl8fChmPXYuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgYj09PWl8fGUmJmIuZXZlbnQudHJpZ2dlcmVkPT09ZS50eXBlP3Q6Yi5ldmVudC5kaXNwYXRjaC5hcHBseShmLmVsZW0sYXJndW1lbnRzKX0sZi5lbGVtPWUpLG49KG58fFwiXCIpLm1hdGNoKHcpfHxbXCJcIl0sbD1uLmxlbmd0aDt3aGlsZShsLS0pcz1ydC5leGVjKG5bbF0pfHxbXSxnPXk9c1sxXSxtPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLHA9Yi5ldmVudC5zcGVjaWFsW2ddfHx7fSxnPShhP3AuZGVsZWdhdGVUeXBlOnAuYmluZFR5cGUpfHxnLHA9Yi5ldmVudC5zcGVjaWFsW2ddfHx7fSxkPWIuZXh0ZW5kKHt0eXBlOmcsb3JpZ1R5cGU6eSxkYXRhOm8saGFuZGxlcjpyLGd1aWQ6ci5ndWlkLHNlbGVjdG9yOmEsbmVlZHNDb250ZXh0OmEmJmIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChhKSxuYW1lc3BhY2U6bS5qb2luKFwiLlwiKX0sYyksKGg9dVtnXSl8fChoPXVbZ109W10saC5kZWxlZ2F0ZUNvdW50PTAscC5zZXR1cCYmcC5zZXR1cC5jYWxsKGUsbyxtLGYpIT09ITF8fChlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKGcsZiwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9uXCIrZyxmKSkpLHAuYWRkJiYocC5hZGQuY2FsbChlLGQpLGQuaGFuZGxlci5ndWlkfHwoZC5oYW5kbGVyLmd1aWQ9ci5ndWlkKSksYT9oLnNwbGljZShoLmRlbGVnYXRlQ291bnQrKywwLGQpOmgucHVzaChkKSxiLmV2ZW50Lmdsb2JhbFtnXT0hMDtlPW51bGx9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMscCxmLGQsaCxnLG09Yi5oYXNEYXRhKGUpJiZiLl9kYXRhKGUpO2lmKG0mJihjPW0uZXZlbnRzKSl7dD0odHx8XCJcIikubWF0Y2godyl8fFtcIlwiXSxsPXQubGVuZ3RoO3doaWxlKGwtLSlpZihzPXJ0LmV4ZWModFtsXSl8fFtdLGQ9Zz1zWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7cD1iLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KHI/cC5kZWxlZ2F0ZVR5cGU6cC5iaW5kVHlwZSl8fGQsZj1jW2RdfHxbXSxzPXNbMl0mJlJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLHU9bz1mLmxlbmd0aDt3aGlsZShvLS0pYT1mW29dLCFpJiZnIT09YS5vcmlnVHlwZXx8biYmbi5ndWlkIT09YS5ndWlkfHxzJiYhcy50ZXN0KGEubmFtZXNwYWNlKXx8ciYmciE9PWEuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYS5zZWxlY3Rvcil8fChmLnNwbGljZShvLDEpLGEuc2VsZWN0b3ImJmYuZGVsZWdhdGVDb3VudC0tLHAucmVtb3ZlJiZwLnJlbW92ZS5jYWxsKGUsYSkpO3UmJiFmLmxlbmd0aCYmKHAudGVhcmRvd24mJnAudGVhcmRvd24uY2FsbChlLGgsbS5oYW5kbGUpIT09ITF8fGIucmVtb3ZlRXZlbnQoZSxkLG0uaGFuZGxlKSxkZWxldGUgY1tkXSl9ZWxzZSBmb3IoZCBpbiBjKWIuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Yi5pc0VtcHR5T2JqZWN0KGMpJiYoZGVsZXRlIG0uaGFuZGxlLGIuX3JlbW92ZURhdGEoZSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKG4scixpLGEpe3ZhciBzLHUsbCxjLHAsZixkLGg9W2l8fG9dLGc9eS5jYWxsKG4sXCJ0eXBlXCIpP24udHlwZTpuLG09eS5jYWxsKG4sXCJuYW1lc3BhY2VcIik/bi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGw9Zj1pPWl8fG8sMyE9PWkubm9kZVR5cGUmJjghPT1pLm5vZGVUeXBlJiYhbnQudGVzdChnK2IuZXZlbnQudHJpZ2dlcmVkKSYmKGcuaW5kZXhPZihcIi5cIik+PTAmJihtPWcuc3BsaXQoXCIuXCIpLGc9bS5zaGlmdCgpLG0uc29ydCgpKSx1PTA+Zy5pbmRleE9mKFwiOlwiKSYmXCJvblwiK2csbj1uW2IuZXhwYW5kb10/bjpuZXcgYi5FdmVudChnLFwib2JqZWN0XCI9PXR5cGVvZiBuJiZuKSxuLmlzVHJpZ2dlcj0hMCxuLm5hbWVzcGFjZT1tLmpvaW4oXCIuXCIpLG4ubmFtZXNwYWNlX3JlPW4ubmFtZXNwYWNlP1JlZ0V4cChcIihefFxcXFwuKVwiK20uam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsbi5yZXN1bHQ9dCxuLnRhcmdldHx8KG4udGFyZ2V0PWkpLHI9bnVsbD09cj9bbl06Yi5tYWtlQXJyYXkocixbbl0pLHA9Yi5ldmVudC5zcGVjaWFsW2ddfHx7fSxhfHwhcC50cmlnZ2VyfHxwLnRyaWdnZXIuYXBwbHkoaSxyKSE9PSExKSl7aWYoIWEmJiFwLm5vQnViYmxlJiYhYi5pc1dpbmRvdyhpKSl7Zm9yKGM9cC5kZWxlZ2F0ZVR5cGV8fGcsbnQudGVzdChjK2cpfHwobD1sLnBhcmVudE5vZGUpO2w7bD1sLnBhcmVudE5vZGUpaC5wdXNoKGwpLGY9bDtmPT09KGkub3duZXJEb2N1bWVudHx8bykmJmgucHVzaChmLmRlZmF1bHRWaWV3fHxmLnBhcmVudFdpbmRvd3x8ZSl9ZD0wO3doaWxlKChsPWhbZCsrXSkmJiFuLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpbi50eXBlPWQ+MT9jOnAuYmluZFR5cGV8fGcscz0oYi5fZGF0YShsLFwiZXZlbnRzXCIpfHx7fSlbbi50eXBlXSYmYi5fZGF0YShsLFwiaGFuZGxlXCIpLHMmJnMuYXBwbHkobCxyKSxzPXUmJmxbdV0scyYmYi5hY2NlcHREYXRhKGwpJiZzLmFwcGx5JiZzLmFwcGx5KGwscik9PT0hMSYmbi5wcmV2ZW50RGVmYXVsdCgpO2lmKG4udHlwZT1nLCEoYXx8bi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8cC5fZGVmYXVsdCYmcC5fZGVmYXVsdC5hcHBseShpLm93bmVyRG9jdW1lbnQscikhPT0hMXx8XCJjbGlja1wiPT09ZyYmYi5ub2RlTmFtZShpLFwiYVwiKXx8IWIuYWNjZXB0RGF0YShpKXx8IXV8fCFpW2ddfHxiLmlzV2luZG93KGkpKSl7Zj1pW3VdLGYmJihpW3VdPW51bGwpLGIuZXZlbnQudHJpZ2dlcmVkPWc7dHJ5e2lbZ10oKX1jYXRjaCh2KXt9Yi5ldmVudC50cmlnZ2VyZWQ9dCxmJiYoaVt1XT1mKX1yZXR1cm4gbi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXtlPWIuZXZlbnQuZml4KGUpO3ZhciBuLHIsaSxvLGEscz1bXSx1PWguY2FsbChhcmd1bWVudHMpLGw9KGIuX2RhdGEodGhpcyxcImV2ZW50c1wiKXx8e30pW2UudHlwZV18fFtdLGM9Yi5ldmVudC5zcGVjaWFsW2UudHlwZV18fHt9O2lmKHVbMF09ZSxlLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fGMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGUpIT09ITEpe3M9Yi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsZSxsKSxuPTA7d2hpbGUoKG89c1tuKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7ZS5jdXJyZW50VGFyZ2V0PW8uZWxlbSxhPTA7d2hpbGUoKGk9by5oYW5kbGVyc1thKytdKSYmIWUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWUubmFtZXNwYWNlX3JlfHxlLm5hbWVzcGFjZV9yZS50ZXN0KGkubmFtZXNwYWNlKSkmJihlLmhhbmRsZU9iaj1pLGUuZGF0YT1pLmRhdGEscj0oKGIuZXZlbnQuc3BlY2lhbFtpLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8aS5oYW5kbGVyKS5hcHBseShvLmVsZW0sdSksciE9PXQmJihlLnJlc3VsdD1yKT09PSExJiYoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyxlKSxlLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsbil7dmFyIHIsaSxvLGEscz1bXSx1PW4uZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJighZS5idXR0b258fFwiY2xpY2tcIiE9PWUudHlwZSkpZm9yKDtsIT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYobC5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1lLnR5cGUpKXtmb3Iobz1bXSxhPTA7dT5hO2ErKylpPW5bYV0scj1pLnNlbGVjdG9yK1wiIFwiLG9bcl09PT10JiYob1tyXT1pLm5lZWRzQ29udGV4dD9iKHIsdGhpcykuaW5kZXgobCk+PTA6Yi5maW5kKHIsdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxvW3JdJiZvLnB1c2goaSk7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbi5sZW5ndGg+dSYmcy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6bi5zbGljZSh1KX0pLHN9LGZpeDpmdW5jdGlvbihlKXtpZihlW2IuZXhwYW5kb10pcmV0dXJuIGU7dmFyIHQsbixyLGk9ZS50eXBlLGE9ZSxzPXRoaXMuZml4SG9va3NbaV07c3x8KHRoaXMuZml4SG9va3NbaV09cz10dC50ZXN0KGkpP3RoaXMubW91c2VIb29rczpldC50ZXN0KGkpP3RoaXMua2V5SG9va3M6e30pLHI9cy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChzLnByb3BzKTp0aGlzLnByb3BzLGU9bmV3IGIuRXZlbnQoYSksdD1yLmxlbmd0aDt3aGlsZSh0LS0pbj1yW3RdLGVbbl09YVtuXTtyZXR1cm4gZS50YXJnZXR8fChlLnRhcmdldD1hLnNyY0VsZW1lbnR8fG8pLDM9PT1lLnRhcmdldC5ub2RlVHlwZSYmKGUudGFyZ2V0PWUudGFyZ2V0LnBhcmVudE5vZGUpLGUubWV0YUtleT0hIWUubWV0YUtleSxzLmZpbHRlcj9zLmZpbHRlcihlLGEpOmV9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWUud2hpY2gmJihlLndoaWNoPW51bGwhPXQuY2hhckNvZGU/dC5jaGFyQ29kZTp0LmtleUNvZGUpLGV9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLGEscz1uLmJ1dHRvbix1PW4uZnJvbUVsZW1lbnQ7cmV0dXJuIG51bGw9PWUucGFnZVgmJm51bGwhPW4uY2xpZW50WCYmKGk9ZS50YXJnZXQub3duZXJEb2N1bWVudHx8byxhPWkuZG9jdW1lbnRFbGVtZW50LHI9aS5ib2R5LGUucGFnZVg9bi5jbGllbnRYKyhhJiZhLnNjcm9sbExlZnR8fHImJnIuc2Nyb2xsTGVmdHx8MCktKGEmJmEuY2xpZW50TGVmdHx8ciYmci5jbGllbnRMZWZ0fHwwKSxlLnBhZ2VZPW4uY2xpZW50WSsoYSYmYS5zY3JvbGxUb3B8fHImJnIuc2Nyb2xsVG9wfHwwKS0oYSYmYS5jbGllbnRUb3B8fHImJnIuY2xpZW50VG9wfHwwKSksIWUucmVsYXRlZFRhcmdldCYmdSYmKGUucmVsYXRlZFRhcmdldD11PT09ZS50YXJnZXQ/bi50b0VsZW1lbnQ6dSksZS53aGljaHx8cz09PXR8fChlLndoaWNoPTEmcz8xOjImcz8zOjQmcz8yOjApLGV9fSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gYi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikmJlwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljaz8odGhpcy5jbGljaygpLCExKTp0fX0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09by5hY3RpdmVFbGVtZW50JiZ0aGlzLmZvY3VzKXRyeXtyZXR1cm4gdGhpcy5mb2N1cygpLCExfWNhdGNoKGUpe319LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09by5hY3RpdmVFbGVtZW50JiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp0fSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXtlLnJlc3VsdCE9PXQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPWIuZXh0ZW5kKG5ldyBiLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMCxvcmlnaW5hbEV2ZW50Ont9fSk7cj9iLmV2ZW50LnRyaWdnZXIoaSxudWxsLHQpOmIuZXZlbnQuZGlzcGF0Y2guY2FsbCh0LGkpLGkuaXNEZWZhdWx0UHJldmVudGVkKCkmJm4ucHJldmVudERlZmF1bHQoKX19LGIucmVtb3ZlRXZlbnQ9by5yZW1vdmVFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sITEpfTpmdW5jdGlvbihlLHQsbil7dmFyIHI9XCJvblwiK3Q7ZS5kZXRhY2hFdmVudCYmKHR5cGVvZiBlW3JdPT09aSYmKGVbcl09bnVsbCksZS5kZXRhY2hFdmVudChyLG4pKX0sYi5FdmVudD1mdW5jdGlvbihlLG4pe3JldHVybiB0aGlzIGluc3RhbmNlb2YgYi5FdmVudD8oZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8ZS5yZXR1cm5WYWx1ZT09PSExfHxlLmdldFByZXZlbnREZWZhdWx0JiZlLmdldFByZXZlbnREZWZhdWx0KCk/aXQ6b3QpOnRoaXMudHlwZT1lLG4mJmIuZXh0ZW5kKHRoaXMsbiksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fGIubm93KCksdGhpc1tiLmV4cGFuZG9dPSEwLHQpOm5ldyBiLkV2ZW50KGUsbil9LGIuRXZlbnQucHJvdG90eXBlPXtpc0RlZmF1bHRQcmV2ZW50ZWQ6b3QsaXNQcm9wYWdhdGlvblN0b3BwZWQ6b3QsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6b3QscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9aXQsZSYmKGUucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITEpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1pdCxlJiYoZS5zdG9wUHJvcGFnYXRpb24mJmUuc3RvcFByb3BhZ2F0aW9uKCksZS5jYW5jZWxCdWJibGU9ITApfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWl0LHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxiLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIn0sZnVuY3Rpb24oZSx0KXtiLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTp0LGJpbmRUeXBlOnQsaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciBuLHI9dGhpcyxpPWUucmVsYXRlZFRhcmdldCxvPWUuaGFuZGxlT2JqO1xucmV0dXJuKCFpfHxpIT09ciYmIWIuY29udGFpbnMocixpKSkmJihlLnR5cGU9by5vcmlnVHlwZSxuPW8uaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPXQpLG59fX0pLGIuc3VwcG9ydC5zdWJtaXRCdWJibGVzfHwoYi5ldmVudC5zcGVjaWFsLnN1Ym1pdD17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gYi5ub2RlTmFtZSh0aGlzLFwiZm9ybVwiKT8hMTooYi5ldmVudC5hZGQodGhpcyxcImNsaWNrLl9zdWJtaXQga2V5cHJlc3MuX3N1Ym1pdFwiLGZ1bmN0aW9uKGUpe3ZhciBuPWUudGFyZ2V0LHI9Yi5ub2RlTmFtZShuLFwiaW5wdXRcIil8fGIubm9kZU5hbWUobixcImJ1dHRvblwiKT9uLmZvcm06dDtyJiYhYi5fZGF0YShyLFwic3VibWl0QnViYmxlc1wiKSYmKGIuZXZlbnQuYWRkKHIsXCJzdWJtaXQuX3N1Ym1pdFwiLGZ1bmN0aW9uKGUpe2UuX3N1Ym1pdF9idWJibGU9ITB9KSxiLl9kYXRhKHIsXCJzdWJtaXRCdWJibGVzXCIsITApKX0pLHQpfSxwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7ZS5fc3VibWl0X2J1YmJsZSYmKGRlbGV0ZSBlLl9zdWJtaXRfYnViYmxlLHRoaXMucGFyZW50Tm9kZSYmIWUuaXNUcmlnZ2VyJiZiLmV2ZW50LnNpbXVsYXRlKFwic3VibWl0XCIsdGhpcy5wYXJlbnROb2RlLGUsITApKX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gYi5ub2RlTmFtZSh0aGlzLFwiZm9ybVwiKT8hMTooYi5ldmVudC5yZW1vdmUodGhpcyxcIi5fc3VibWl0XCIpLHQpfX0pLGIuc3VwcG9ydC5jaGFuZ2VCdWJibGVzfHwoYi5ldmVudC5zcGVjaWFsLmNoYW5nZT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gWi50ZXN0KHRoaXMubm9kZU5hbWUpPygoXCJjaGVja2JveFwiPT09dGhpcy50eXBlfHxcInJhZGlvXCI9PT10aGlzLnR5cGUpJiYoYi5ldmVudC5hZGQodGhpcyxcInByb3BlcnR5Y2hhbmdlLl9jaGFuZ2VcIixmdW5jdGlvbihlKXtcImNoZWNrZWRcIj09PWUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUmJih0aGlzLl9qdXN0X2NoYW5nZWQ9ITApfSksYi5ldmVudC5hZGQodGhpcyxcImNsaWNrLl9jaGFuZ2VcIixmdW5jdGlvbihlKXt0aGlzLl9qdXN0X2NoYW5nZWQmJiFlLmlzVHJpZ2dlciYmKHRoaXMuX2p1c3RfY2hhbmdlZD0hMSksYi5ldmVudC5zaW11bGF0ZShcImNoYW5nZVwiLHRoaXMsZSwhMCl9KSksITEpOihiLmV2ZW50LmFkZCh0aGlzLFwiYmVmb3JlYWN0aXZhdGUuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O1oudGVzdCh0Lm5vZGVOYW1lKSYmIWIuX2RhdGEodCxcImNoYW5nZUJ1YmJsZXNcIikmJihiLmV2ZW50LmFkZCh0LFwiY2hhbmdlLl9jaGFuZ2VcIixmdW5jdGlvbihlKXshdGhpcy5wYXJlbnROb2RlfHxlLmlzU2ltdWxhdGVkfHxlLmlzVHJpZ2dlcnx8Yi5ldmVudC5zaW11bGF0ZShcImNoYW5nZVwiLHRoaXMucGFyZW50Tm9kZSxlLCEwKX0pLGIuX2RhdGEodCxcImNoYW5nZUJ1YmJsZXNcIiwhMCkpfSksdCl9LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgbj1lLnRhcmdldDtyZXR1cm4gdGhpcyE9PW58fGUuaXNTaW11bGF0ZWR8fGUuaXNUcmlnZ2VyfHxcInJhZGlvXCIhPT1uLnR5cGUmJlwiY2hlY2tib3hcIiE9PW4udHlwZT9lLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0fSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBiLmV2ZW50LnJlbW92ZSh0aGlzLFwiLl9jaGFuZ2VcIiksIVoudGVzdCh0aGlzLm5vZGVOYW1lKX19KSxiLnN1cHBvcnQuZm9jdXNpbkJ1YmJsZXN8fGIuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7dmFyIG49MCxyPWZ1bmN0aW9uKGUpe2IuZXZlbnQuc2ltdWxhdGUodCxlLnRhcmdldCxiLmV2ZW50LmZpeChlKSwhMCl9O2IuZXZlbnQuc3BlY2lhbFt0XT17c2V0dXA6ZnVuY3Rpb24oKXswPT09bisrJiZvLmFkZEV2ZW50TGlzdGVuZXIoZSxyLCEwKX0sdGVhcmRvd246ZnVuY3Rpb24oKXswPT09LS1uJiZvLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxyLCEwKX19fSksYi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7XCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj10KTtmb3IoYSBpbiBlKXRoaXMub24oYSxuLHIsZVthXSxvKTtyZXR1cm4gdGhpc31pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXQpOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dCk6KGk9cixyPW4sbj10KSksaT09PSExKWk9b3Q7ZWxzZSBpZighaSlyZXR1cm4gdGhpcztyZXR1cm4gMT09PW8mJihzPWksaT1mdW5jdGlvbihlKXtyZXR1cm4gYigpLm9mZihlKSxzLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0saS5ndWlkPXMuZ3VpZHx8KHMuZ3VpZD1iLmd1aWQrKykpLHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZXZlbnQuYWRkKHRoaXMsZSxpLHIsbil9KX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLG4scil7dmFyIGksbztpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gaT1lLmhhbmRsZU9iaixiKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihpLm5hbWVzcGFjZT9pLm9yaWdUeXBlK1wiLlwiK2kubmFtZXNwYWNlOmkub3JpZ1R5cGUsaS5zZWxlY3RvcixpLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihvIGluIGUpdGhpcy5vZmYobyxuLGVbb10pO3JldHVybiB0aGlzfXJldHVybihuPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pJiYocj1uLG49dCkscj09PSExJiYocj1vdCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC5yZW1vdmUodGhpcyxlLHIsbil9KX0sYmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfSx0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSxuKXt2YXIgcj10aGlzWzBdO3JldHVybiByP2IuZXZlbnQudHJpZ2dlcihlLG4sciwhMCk6dH19KSxmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGwsYyxwLGYsZCxoLGcsbSx5LHYseD1cInNpenpsZVwiKy1uZXcgRGF0ZSx3PWUuZG9jdW1lbnQsVD17fSxOPTAsQz0wLGs9aXQoKSxFPWl0KCksUz1pdCgpLEE9dHlwZW9mIHQsaj0xPDwzMSxEPVtdLEw9RC5wb3AsSD1ELnB1c2gscT1ELnNsaWNlLE09RC5pbmRleE9mfHxmdW5jdGlvbihlKXt2YXIgdD0wLG49dGhpcy5sZW5ndGg7Zm9yKDtuPnQ7dCsrKWlmKHRoaXNbdF09PT1lKXJldHVybiB0O3JldHVybi0xfSxfPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixGPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTz1GLnJlcGxhY2UoXCJ3XCIsXCJ3I1wiKSxCPVwiKFsqXiR8IX5dPz0pXCIsUD1cIlxcXFxbXCIrXytcIiooXCIrRitcIilcIitfK1wiKig/OlwiK0IrXytcIiooPzooWydcXFwiXSkoKD86XFxcXFxcXFwufFteXFxcXFxcXFxdKSo/KVxcXFwzfChcIitPK1wiKXwpfClcIitfK1wiKlxcXFxdXCIsUj1cIjooXCIrRitcIikoPzpcXFxcKCgoWydcXFwiXSkoKD86XFxcXFxcXFwufFteXFxcXFxcXFxdKSo/KVxcXFwzfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitQLnJlcGxhY2UoMyw4KStcIikqKXwuKilcXFxcKXwpXCIsVz1SZWdFeHAoXCJeXCIrXytcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrXytcIiskXCIsXCJnXCIpLCQ9UmVnRXhwKFwiXlwiK18rXCIqLFwiK18rXCIqXCIpLEk9UmVnRXhwKFwiXlwiK18rXCIqKFtcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGY+K35dKVwiK18rXCIqXCIpLHo9UmVnRXhwKFIpLFg9UmVnRXhwKFwiXlwiK08rXCIkXCIpLFU9e0lEOlJlZ0V4cChcIl4jKFwiK0YrXCIpXCIpLENMQVNTOlJlZ0V4cChcIl5cXFxcLihcIitGK1wiKVwiKSxOQU1FOlJlZ0V4cChcIl5cXFxcW25hbWU9WydcXFwiXT8oXCIrRitcIilbJ1xcXCJdP1xcXFxdXCIpLFRBRzpSZWdFeHAoXCJeKFwiK0YucmVwbGFjZShcIndcIixcIncqXCIpK1wiKVwiKSxBVFRSOlJlZ0V4cChcIl5cIitQKSxQU0VVRE86UmVnRXhwKFwiXlwiK1IpLENISUxEOlJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrXytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK18rXCIqKD86KFsrLV18KVwiK18rXCIqKFxcXFxkKyl8KSlcIitfK1wiKlxcXFwpfClcIixcImlcIiksbmVlZHNDb250ZXh0OlJlZ0V4cChcIl5cIitfK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitfK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitfK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxWPS9bXFx4MjBcXHRcXHJcXG5cXGZdKlsrfl0vLFk9L15bXntdK1xce1xccypcXFtuYXRpdmUgY29kZS8sSj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxHPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksUT0vXmhcXGQkL2ksSz0vJ3xcXFxcL2csWj0vXFw9W1xceDIwXFx0XFxyXFxuXFxmXSooW14nXCJcXF1dKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcXS9nLGV0PS9cXFxcKFtcXGRhLWZBLUZdezEsNn1bXFx4MjBcXHRcXHJcXG5cXGZdP3wuKS9nLHR0PWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK3QtNjU1MzY7cmV0dXJuIG4hPT1uP3Q6MD5uP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxuPj4xMCw1NjMyMHwxMDIzJm4pfTt0cnl7cS5jYWxsKHcuZG9jdW1lbnRFbGVtZW50LmNoaWxkTm9kZXMsMClbMF0ubm9kZVR5cGV9Y2F0Y2gobnQpe3E9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXTt3aGlsZSh0PXRoaXNbZSsrXSluLnB1c2godCk7cmV0dXJuIG59fWZ1bmN0aW9uIHJ0KGUpe3JldHVybiBZLnRlc3QoZStcIlwiKX1mdW5jdGlvbiBpdCgpe3ZhciBlLHQ9W107cmV0dXJuIGU9ZnVuY3Rpb24obixyKXtyZXR1cm4gdC5wdXNoKG4rPVwiIFwiKT5pLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVt0LnNoaWZ0KCldLGVbbl09cn19ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIGVbeF09ITAsZX1mdW5jdGlvbiBhdChlKXt2YXIgdD1wLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiBlKHQpfWNhdGNoKG4pe3JldHVybiExfWZpbmFsbHl7dD1udWxsfX1mdW5jdGlvbiBzdChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsZixnLG0sdjtpZigodD90Lm93bmVyRG9jdW1lbnR8fHQ6dykhPT1wJiZjKHQpLHQ9dHx8cCxuPW58fFtdLCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbjtpZigxIT09KHM9dC5ub2RlVHlwZSkmJjkhPT1zKXJldHVybltdO2lmKCFkJiYhcil7aWYoaT1KLmV4ZWMoZSkpaWYoYT1pWzFdKXtpZig5PT09cyl7aWYobz10LmdldEVsZW1lbnRCeUlkKGEpLCFvfHwhby5wYXJlbnROb2RlKXJldHVybiBuO2lmKG8uaWQ9PT1hKXJldHVybiBuLnB1c2gobyksbn1lbHNlIGlmKHQub3duZXJEb2N1bWVudCYmKG89dC5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpKSYmeSh0LG8pJiZvLmlkPT09YSlyZXR1cm4gbi5wdXNoKG8pLG59ZWxzZXtpZihpWzJdKXJldHVybiBILmFwcGx5KG4scS5jYWxsKHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSksMCkpLG47aWYoKGE9aVszXSkmJlQuZ2V0QnlDbGFzc05hbWUmJnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLHEuY2FsbCh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSksMCkpLG59aWYoVC5xc2EmJiFoLnRlc3QoZSkpe2lmKGY9ITAsZz14LG09dCx2PTk9PT1zJiZlLDE9PT1zJiZcIm9iamVjdFwiIT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtsPWZ0KGUpLChmPXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2c9Zi5yZXBsYWNlKEssXCJcXFxcJCZcIik6dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGcpLGc9XCJbaWQ9J1wiK2crXCInXSBcIix1PWwubGVuZ3RoO3doaWxlKHUtLSlsW3VdPWcrZHQobFt1XSk7bT1WLnRlc3QoZSkmJnQucGFyZW50Tm9kZXx8dCx2PWwuam9pbihcIixcIil9aWYodil0cnl7cmV0dXJuIEguYXBwbHkobixxLmNhbGwobS5xdWVyeVNlbGVjdG9yQWxsKHYpLDApKSxufWNhdGNoKGIpe31maW5hbGx5e2Z8fHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gd3QoZS5yZXBsYWNlKFcsXCIkMVwiKSx0LG4scil9YT1zdC5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIHQ/XCJIVE1MXCIhPT10Lm5vZGVOYW1lOiExfSxjPXN0LnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciBuPWU/ZS5vd25lckRvY3VtZW50fHxlOnc7cmV0dXJuIG4hPT1wJiY5PT09bi5ub2RlVHlwZSYmbi5kb2N1bWVudEVsZW1lbnQ/KHA9bixmPW4uZG9jdW1lbnRFbGVtZW50LGQ9YShuKSxULnRhZ05hbWVOb0NvbW1lbnRzPWF0KGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLFQuYXR0cmlidXRlcz1hdChmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxzZWxlY3Q+PC9zZWxlY3Q+XCI7dmFyIHQ9dHlwZW9mIGUubGFzdENoaWxkLmdldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIpO3JldHVyblwiYm9vbGVhblwiIT09dCYmXCJzdHJpbmdcIiE9PXR9KSxULmdldEJ5Q2xhc3NOYW1lPWF0KGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxkaXYgY2xhc3M9J2hpZGRlbiBlJz48L2Rpdj48ZGl2IGNsYXNzPSdoaWRkZW4nPjwvZGl2PlwiLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZVwiKS5sZW5ndGg/KGUubGFzdENoaWxkLmNsYXNzTmFtZT1cImVcIiwyPT09ZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZVwiKS5sZW5ndGgpOiExfSksVC5nZXRCeU5hbWU9YXQoZnVuY3Rpb24oZSl7ZS5pZD14KzAsZS5pbm5lckhUTUw9XCI8YSBuYW1lPSdcIit4K1wiJz48L2E+PGRpdiBuYW1lPSdcIit4K1wiJz48L2Rpdj5cIixmLmluc2VydEJlZm9yZShlLGYuZmlyc3RDaGlsZCk7dmFyIHQ9bi5nZXRFbGVtZW50c0J5TmFtZSYmbi5nZXRFbGVtZW50c0J5TmFtZSh4KS5sZW5ndGg9PT0yK24uZ2V0RWxlbWVudHNCeU5hbWUoeCswKS5sZW5ndGg7cmV0dXJuIFQuZ2V0SWROb3ROYW1lPSFuLmdldEVsZW1lbnRCeUlkKHgpLGYucmVtb3ZlQ2hpbGQoZSksdH0pLGkuYXR0ckhhbmRsZT1hdChmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsZS5maXJzdENoaWxkJiZ0eXBlb2YgZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSE9PUEmJlwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KT97fTp7aHJlZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIsMil9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKX19LFQuZ2V0SWROb3ROYW1lPyhpLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZih0eXBlb2YgdC5nZXRFbGVtZW50QnlJZCE9PUEmJiFkKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuJiZuLnBhcmVudE5vZGU/W25dOltdfX0saS5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKGV0LHR0KTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0pOihpLmZpbmQuSUQ9ZnVuY3Rpb24oZSxuKXtpZih0eXBlb2Ygbi5nZXRFbGVtZW50QnlJZCE9PUEmJiFkKXt2YXIgcj1uLmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiByP3IuaWQ9PT1lfHx0eXBlb2Ygci5nZXRBdHRyaWJ1dGVOb2RlIT09QSYmci5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikudmFsdWU9PT1lP1tyXTp0OltdfX0saS5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKGV0LHR0KTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIG49dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSE9PUEmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBuJiZuLnZhbHVlPT09dH19KSxpLmZpbmQuVEFHPVQudGFnTmFtZU5vQ29tbWVudHM/ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdHlwZW9mIG4uZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1BP24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6dH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxpLmZpbmQuTkFNRT1ULmdldEJ5TmFtZSYmZnVuY3Rpb24oZSxuKXtyZXR1cm4gdHlwZW9mIG4uZ2V0RWxlbWVudHNCeU5hbWUhPT1BP24uZ2V0RWxlbWVudHNCeU5hbWUobmFtZSk6dH0saS5maW5kLkNMQVNTPVQuZ2V0QnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsbil7cmV0dXJuIHR5cGVvZiBuLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9PT1BfHxkP3Q6bi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxnPVtdLGg9W1wiOmZvY3VzXCJdLChULnFzYT1ydChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGF0KGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPHNlbGVjdD48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxoLnB1c2goXCJcXFxcW1wiK18rXCIqKD86Y2hlY2tlZHxkaXNhYmxlZHxpc21hcHxtdWx0aXBsZXxyZWFkb25seXxzZWxlY3RlZHx2YWx1ZSlcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxoLnB1c2goXCI6Y2hlY2tlZFwiKX0pLGF0KGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGlucHV0IHR5cGU9J2hpZGRlbicgaT0nJy8+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lePScnXVwiKS5sZW5ndGgmJmgucHVzaChcIlsqXiRdPVwiK18rXCIqKD86XFxcIlxcXCJ8JycpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8aC5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLGgucHVzaChcIiwuKjpcIil9KSksKFQubWF0Y2hlc1NlbGVjdG9yPXJ0KG09Zi5tYXRjaGVzU2VsZWN0b3J8fGYubW96TWF0Y2hlc1NlbGVjdG9yfHxmLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8Zi5vTWF0Y2hlc1NlbGVjdG9yfHxmLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmF0KGZ1bmN0aW9uKGUpe1QuZGlzY29ubmVjdGVkTWF0Y2g9bS5jYWxsKGUsXCJkaXZcIiksbS5jYWxsKGUsXCJbcyE9JyddOnhcIiksZy5wdXNoKFwiIT1cIixSKX0pLGg9UmVnRXhwKGguam9pbihcInxcIikpLGc9UmVnRXhwKGcuam9pbihcInxcIikpLHk9cnQoZi5jb250YWlucyl8fGYuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSx2PWYuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZT09PXQ/KHU9ITAsMCk6KHI9dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KSk/MSZyfHxlLnBhcmVudE5vZGUmJjExPT09ZS5wYXJlbnROb2RlLm5vZGVUeXBlP2U9PT1ufHx5KHcsZSk/LTE6dD09PW58fHkodyx0KT8xOjA6NCZyPy0xOjE6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8tMToxfTpmdW5jdGlvbihlLHQpe3ZhciByLGk9MCxvPWUucGFyZW50Tm9kZSxhPXQucGFyZW50Tm9kZSxzPVtlXSxsPVt0XTtpZihlPT09dClyZXR1cm4gdT0hMCwwO2lmKCFvfHwhYSlyZXR1cm4gZT09PW4/LTE6dD09PW4/MTpvPy0xOmE/MTowO2lmKG89PT1hKXJldHVybiB1dChlLHQpO3I9ZTt3aGlsZShyPXIucGFyZW50Tm9kZSlzLnVuc2hpZnQocik7cj10O3doaWxlKHI9ci5wYXJlbnROb2RlKWwudW5zaGlmdChyKTt3aGlsZShzW2ldPT09bFtpXSlpKys7cmV0dXJuIGk/dXQoc1tpXSxsW2ldKTpzW2ldPT09dz8tMTpsW2ldPT09dz8xOjB9LHU9ITEsWzAsMF0uc29ydCh2KSxULmRldGVjdER1cGxpY2F0ZXM9dSxwKTpwfSxzdC5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHN0KGUsbnVsbCxudWxsLHQpfSxzdC5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZigoZS5vd25lckRvY3VtZW50fHxlKSE9PXAmJmMoZSksdD10LnJlcGxhY2UoWixcIj0nJDEnXVwiKSwhKCFULm1hdGNoZXNTZWxlY3Rvcnx8ZHx8ZyYmZy50ZXN0KHQpfHxoLnRlc3QodCkpKXRyeXt2YXIgbj1tLmNhbGwoZSx0KTtpZihufHxULmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2gocil7fXJldHVybiBzdCh0LHAsbnVsbCxbZV0pLmxlbmd0aD4wfSxzdC5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSx5KGUsdCl9LHN0LmF0dHI9ZnVuY3Rpb24oZSx0KXt2YXIgbjtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9PXAmJmMoZSksZHx8KHQ9dC50b0xvd2VyQ2FzZSgpKSwobj1pLmF0dHJIYW5kbGVbdF0pP24oZSk6ZHx8VC5hdHRyaWJ1dGVzP2UuZ2V0QXR0cmlidXRlKHQpOigobj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpfHxlLmdldEF0dHJpYnV0ZSh0KSkmJmVbdF09PT0hMD90Om4mJm4uc3BlY2lmaWVkP24udmFsdWU6bnVsbH0sc3QuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sc3QudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9MSxpPTA7aWYodT0hVC5kZXRlY3REdXBsaWNhdGVzLGUuc29ydCh2KSx1KXtmb3IoO3Q9ZVtyXTtyKyspdD09PWVbci0xXSYmKGk9bi5wdXNoKHIpKTt3aGlsZShpLS0pZS5zcGxpY2UobltpXSwxKX1yZXR1cm4gZX07ZnVuY3Rpb24gdXQoZSx0KXt2YXIgbj10JiZlLHI9biYmKH50LnNvdXJjZUluZGV4fHxqKS0ofmUuc291cmNlSW5kZXh8fGopO2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBsdChlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PW4mJnQudHlwZT09PWV9fWZ1bmN0aW9uIGN0KGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PW58fFwiYnV0dG9uXCI9PT1uKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gcHQoZSl7cmV0dXJuIG90KGZ1bmN0aW9uKHQpe3JldHVybiB0PSt0LG90KGZ1bmN0aW9uKG4scil7dmFyIGksbz1lKFtdLG4ubGVuZ3RoLHQpLGE9by5sZW5ndGg7d2hpbGUoYS0tKW5baT1vW2FdXSYmKG5baV09IShyW2ldPW5baV0pKX0pfSl9bz1zdC5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSBmb3IoO3Q9ZVtyXTtyKyspbis9byh0KTtyZXR1cm4gbn0saT1zdC5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpvdCxtYXRjaDpVLGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZShldCx0dCksZVszXT0oZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZShldCx0dCksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c3QuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc3QuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNV0mJmVbMl07cmV0dXJuIFUuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzRdP2VbMl09ZVs0XTpuJiZ6LnRlc3QobikmJih0PWZ0KG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OihlPWUucmVwbGFjZShldCx0dCkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbih0KXtyZXR1cm4gdC5ub2RlTmFtZSYmdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZX0pfSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1rW2UrXCIgXCJdO3JldHVybiB0fHwodD1SZWdFeHAoXCIoXnxcIitfK1wiKVwiK2UrXCIoXCIrXytcInwkKVwiKSkmJmsoZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KGUuY2xhc3NOYW1lfHx0eXBlb2YgZS5nZXRBdHRyaWJ1dGUhPT1BJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7dmFyIGk9c3QuYXR0cihyLGUpO3JldHVybiBudWxsPT1pP1wiIT1cIj09PXQ6dD8oaSs9XCJcIixcIj1cIj09PXQ/aT09PW46XCIhPVwiPT09dD9pIT09bjpcIl49XCI9PT10P24mJjA9PT1pLmluZGV4T2Yobik6XCIqPVwiPT09dD9uJiZpLmluZGV4T2Yobik+LTE6XCIkPVwiPT09dD9uJiZpLnNsaWNlKC1uLmxlbmd0aCk9PT1uOlwifj1cIj09PXQ/KFwiIFwiK2krXCIgXCIpLmluZGV4T2Yobik+LTE6XCJ8PVwiPT09dD9pPT09bnx8aS5zbGljZSgwLG4ubGVuZ3RoKzEpPT09bitcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvPVwibnRoXCIhPT1lLnNsaWNlKDAsMyksYT1cImxhc3RcIiE9PWUuc2xpY2UoLTQpLHM9XCJvZi10eXBlXCI9PT10O3JldHVybiAxPT09ciYmMD09PWk/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKHQsbix1KXt2YXIgbCxjLHAsZixkLGgsZz1vIT09YT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixtPXQucGFyZW50Tm9kZSx5PXMmJnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSx2PSF1JiYhcztpZihtKXtpZihvKXt3aGlsZShnKXtwPXQ7d2hpbGUocD1wW2ddKWlmKHM/cC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09eToxPT09cC5ub2RlVHlwZSlyZXR1cm4hMTtoPWc9XCJvbmx5XCI9PT1lJiYhaCYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKGg9W2E/bS5maXJzdENoaWxkOm0ubGFzdENoaWxkXSxhJiZ2KXtjPW1beF18fChtW3hdPXt9KSxsPWNbZV18fFtdLGQ9bFswXT09PU4mJmxbMV0sZj1sWzBdPT09TiYmbFsyXSxwPWQmJm0uY2hpbGROb2Rlc1tkXTt3aGlsZShwPSsrZCYmcCYmcFtnXXx8KGY9ZD0wKXx8aC5wb3AoKSlpZigxPT09cC5ub2RlVHlwZSYmKytmJiZwPT09dCl7Y1tlXT1bTixkLGZdO2JyZWFrfX1lbHNlIGlmKHYmJihsPSh0W3hdfHwodFt4XT17fSkpW2VdKSYmbFswXT09PU4pZj1sWzFdO2Vsc2Ugd2hpbGUocD0rK2QmJnAmJnBbZ118fChmPWQ9MCl8fGgucG9wKCkpaWYoKHM/cC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09eToxPT09cC5ub2RlVHlwZSkmJisrZiYmKHYmJigocFt4XXx8KHBbeF09e30pKVtlXT1bTixmXSkscD09PXQpKWJyZWFrO3JldHVybiBmLT1pLGY9PT1yfHwwPT09ZiVyJiZmL3I+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnBzZXVkb3NbZV18fGkuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzdC5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIHJbeF0/cih0KTpyLmxlbmd0aD4xPyhuPVtlLGUsXCJcIix0XSxpLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9vdChmdW5jdGlvbihlLG4pe3ZhciBpLG89cihlLHQpLGE9by5sZW5ndGg7d2hpbGUoYS0tKWk9TS5jYWxsKGUsb1thXSksZVtpXT0hKG5baV09b1thXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gcihlLDAsbil9KTpyfX0scHNldWRvczp7bm90Om90KGZ1bmN0aW9uKGUpe3ZhciB0PVtdLG49W10scj1zKGUucmVwbGFjZShXLFwiJDFcIikpO3JldHVybiByW3hdP290KGZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvLGE9cihlLG51bGwsaSxbXSkscz1lLmxlbmd0aDt3aGlsZShzLS0pKG89YVtzXSkmJihlW3NdPSEodFtzXT1vKSl9KTpmdW5jdGlvbihlLGksbyl7cmV0dXJuIHRbMF09ZSxyKHQsbnVsbCxvLG4pLCFuLnBvcCgpfX0pLGhhczpvdChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHN0KGUsdCkubGVuZ3RoPjB9fSksY29udGFpbnM6b3QoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybih0LnRleHRDb250ZW50fHx0LmlubmVyVGV4dHx8byh0KSkuaW5kZXhPZihlKT4tMX19KSxsYW5nOm90KGZ1bmN0aW9uKGUpe3JldHVybiBYLnRlc3QoZXx8XCJcIil8fHN0LmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrZSksZT1lLnJlcGxhY2UoZXQsdHQpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7dmFyIG47ZG8gaWYobj1kP3QuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fHQuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKTp0LmxhbmcpcmV0dXJuIG49bi50b0xvd2VyQ2FzZSgpLG49PT1lfHwwPT09bi5pbmRleE9mKGUrXCItXCIpO3doaWxlKCh0PXQucGFyZW50Tm9kZSkmJjE9PT10Lm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24odCl7dmFyIG49ZS5sb2NhdGlvbiYmZS5sb2NhdGlvbi5oYXNoO3JldHVybiBuJiZuLnNsaWNlKDEpPT09dC5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWZ9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09cC5hY3RpdmVFbGVtZW50JiYoIXAuaGFzRm9jdXN8fHAuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGUuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZU5hbWU+XCJAXCJ8fDM9PT1lLm5vZGVUeXBlfHw0PT09ZS5ub2RlVHlwZSlyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFpLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gRy50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHx0LnRvTG93ZXJDYXNlKCk9PT1lLnR5cGUpfSxmaXJzdDpwdChmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6cHQoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOnB0KGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bMD5uP24rdDpuXX0pLGV2ZW46cHQoZnVuY3Rpb24oZSx0KXt2YXIgbj0wO2Zvcig7dD5uO24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnB0KGZ1bmN0aW9uKGUsdCl7dmFyIG49MTtmb3IoO3Q+bjtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnB0KGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj0wPm4/bit0Om47Zm9yKDstLXI+PTA7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OnB0KGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj0wPm4/bit0Om47Zm9yKDt0PisrcjspZS5wdXNoKHIpO3JldHVybiBlfSl9fTtmb3IobiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlpLnBzZXVkb3Nbbl09bHQobik7Zm9yKG4gaW57c3VibWl0OiEwLHJlc2V0OiEwfSlpLnBzZXVkb3Nbbl09Y3Qobik7ZnVuY3Rpb24gZnQoZSx0KXt2YXIgbixyLG8sYSxzLHUsbCxjPUVbZStcIiBcIl07aWYoYylyZXR1cm4gdD8wOmMuc2xpY2UoMCk7cz1lLHU9W10sbD1pLnByZUZpbHRlcjt3aGlsZShzKXsoIW58fChyPSQuZXhlYyhzKSkpJiYociYmKHM9cy5zbGljZShyWzBdLmxlbmd0aCl8fHMpLHUucHVzaChvPVtdKSksbj0hMSwocj1JLmV4ZWMocykpJiYobj1yLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKFcsXCIgXCIpfSkscz1zLnNsaWNlKG4ubGVuZ3RoKSk7Zm9yKGEgaW4gaS5maWx0ZXIpIShyPVVbYV0uZXhlYyhzKSl8fGxbYV0mJiEocj1sW2FdKHIpKXx8KG49ci5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOmEsbWF0Y2hlczpyfSkscz1zLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/cy5sZW5ndGg6cz9zdC5lcnJvcihlKTpFKGUsdSkuc2xpY2UoMCl9ZnVuY3Rpb24gZHQoZSl7dmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjtmb3IoO24+dDt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBodChlLHQsbil7dmFyIGk9dC5kaXIsbz1uJiZcInBhcmVudE5vZGVcIj09PWksYT1DKys7cmV0dXJuIHQuZmlyc3Q/ZnVuY3Rpb24odCxuLHIpe3doaWxlKHQ9dFtpXSlpZigxPT09dC5ub2RlVHlwZXx8bylyZXR1cm4gZSh0LG4scil9OmZ1bmN0aW9uKHQsbixzKXt2YXIgdSxsLGMscD1OK1wiIFwiK2E7aWYocyl7d2hpbGUodD10W2ldKWlmKCgxPT09dC5ub2RlVHlwZXx8bykmJmUodCxuLHMpKXJldHVybiEwfWVsc2Ugd2hpbGUodD10W2ldKWlmKDE9PT10Lm5vZGVUeXBlfHxvKWlmKGM9dFt4XXx8KHRbeF09e30pLChsPWNbaV0pJiZsWzBdPT09cCl7aWYoKHU9bFsxXSk9PT0hMHx8dT09PXIpcmV0dXJuIHU9PT0hMH1lbHNlIGlmKGw9Y1tpXT1bcF0sbFsxXT1lKHQsbixzKXx8cixsWzFdPT09ITApcmV0dXJuITB9fWZ1bmN0aW9uIGd0KGUpe3JldHVybiBlLmxlbmd0aD4xP2Z1bmN0aW9uKHQsbixyKXt2YXIgaT1lLmxlbmd0aDt3aGlsZShpLS0paWYoIWVbaV0odCxuLHIpKXJldHVybiExO3JldHVybiEwfTplWzBdfWZ1bmN0aW9uIG10KGUsdCxuLHIsaSl7dmFyIG8sYT1bXSxzPTAsdT1lLmxlbmd0aCxsPW51bGwhPXQ7Zm9yKDt1PnM7cysrKShvPWVbc10pJiYoIW58fG4obyxyLGkpKSYmKGEucHVzaChvKSxsJiZ0LnB1c2gocykpO3JldHVybiBhfWZ1bmN0aW9uIHl0KGUsdCxuLHIsaSxvKXtyZXR1cm4gciYmIXJbeF0mJihyPXl0KHIpKSxpJiYhaVt4XSYmKGk9eXQoaSxvKSksb3QoZnVuY3Rpb24obyxhLHMsdSl7dmFyIGwsYyxwLGY9W10sZD1bXSxoPWEubGVuZ3RoLGc9b3x8eHQodHx8XCIqXCIscy5ub2RlVHlwZT9bc106cyxbXSksbT0hZXx8IW8mJnQ/ZzptdChnLGYsZSxzLHUpLHk9bj9pfHwobz9lOmh8fHIpP1tdOmE6bTtpZihuJiZuKG0seSxzLHUpLHIpe2w9bXQoeSxkKSxyKGwsW10scyx1KSxjPWwubGVuZ3RoO3doaWxlKGMtLSkocD1sW2NdKSYmKHlbZFtjXV09IShtW2RbY11dPXApKX1pZihvKXtpZihpfHxlKXtpZihpKXtsPVtdLGM9eS5sZW5ndGg7d2hpbGUoYy0tKShwPXlbY10pJiZsLnB1c2gobVtjXT1wKTtpKG51bGwseT1bXSxsLHUpfWM9eS5sZW5ndGg7d2hpbGUoYy0tKShwPXlbY10pJiYobD1pP00uY2FsbChvLHApOmZbY10pPi0xJiYob1tsXT0hKGFbbF09cCkpfX1lbHNlIHk9bXQoeT09PWE/eS5zcGxpY2UoaCx5Lmxlbmd0aCk6eSksaT9pKG51bGwsYSx5LHUpOkguYXBwbHkoYSx5KX0pfWZ1bmN0aW9uIHZ0KGUpe3ZhciB0LG4scixvPWUubGVuZ3RoLGE9aS5yZWxhdGl2ZVtlWzBdLnR5cGVdLHM9YXx8aS5yZWxhdGl2ZVtcIiBcIl0sdT1hPzE6MCxjPWh0KGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dH0scywhMCkscD1odChmdW5jdGlvbihlKXtyZXR1cm4gTS5jYWxsKHQsZSk+LTF9LHMsITApLGY9W2Z1bmN0aW9uKGUsbixyKXtyZXR1cm4hYSYmKHJ8fG4hPT1sKXx8KCh0PW4pLm5vZGVUeXBlP2MoZSxuLHIpOnAoZSxuLHIpKX1dO2Zvcig7bz51O3UrKylpZihuPWkucmVsYXRpdmVbZVt1XS50eXBlXSlmPVtodChndChmKSxuKV07ZWxzZXtpZihuPWkuZmlsdGVyW2VbdV0udHlwZV0uYXBwbHkobnVsbCxlW3VdLm1hdGNoZXMpLG5beF0pe2ZvcihyPSsrdTtvPnI7cisrKWlmKGkucmVsYXRpdmVbZVtyXS50eXBlXSlicmVhaztyZXR1cm4geXQodT4xJiZndChmKSx1PjEmJmR0KGUuc2xpY2UoMCx1LTEpKS5yZXBsYWNlKFcsXCIkMVwiKSxuLHI+dSYmdnQoZS5zbGljZSh1LHIpKSxvPnImJnZ0KGU9ZS5zbGljZShyKSksbz5yJiZkdChlKSl9Zi5wdXNoKG4pfXJldHVybiBndChmKX1mdW5jdGlvbiBidChlLHQpe3ZhciBuPTAsbz10Lmxlbmd0aD4wLGE9ZS5sZW5ndGg+MCxzPWZ1bmN0aW9uKHMsdSxjLGYsZCl7dmFyIGgsZyxtLHk9W10sdj0wLGI9XCIwXCIseD1zJiZbXSx3PW51bGwhPWQsVD1sLEM9c3x8YSYmaS5maW5kLlRBRyhcIipcIixkJiZ1LnBhcmVudE5vZGV8fHUpLGs9Tis9bnVsbD09VD8xOk1hdGgucmFuZG9tKCl8fC4xO2Zvcih3JiYobD11IT09cCYmdSxyPW4pO251bGwhPShoPUNbYl0pO2IrKyl7aWYoYSYmaCl7Zz0wO3doaWxlKG09ZVtnKytdKWlmKG0oaCx1LGMpKXtmLnB1c2goaCk7YnJlYWt9dyYmKE49ayxyPSsrbil9byYmKChoPSFtJiZoKSYmdi0tLHMmJngucHVzaChoKSl9aWYodis9YixvJiZiIT09dil7Zz0wO3doaWxlKG09dFtnKytdKW0oeCx5LHUsYyk7aWYocyl7aWYodj4wKXdoaWxlKGItLSl4W2JdfHx5W2JdfHwoeVtiXT1MLmNhbGwoZikpO3k9bXQoeSl9SC5hcHBseShmLHkpLHcmJiFzJiZ5Lmxlbmd0aD4wJiZ2K3QubGVuZ3RoPjEmJnN0LnVuaXF1ZVNvcnQoZil9cmV0dXJuIHcmJihOPWssbD1UKSx4fTtyZXR1cm4gbz9vdChzKTpzfXM9c3QuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1bXSxvPVNbZStcIiBcIl07aWYoIW8pe3R8fCh0PWZ0KGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSlvPXZ0KHRbbl0pLG9beF0/ci5wdXNoKG8pOmkucHVzaChvKTtvPVMoZSxidChpLHIpKX1yZXR1cm4gb307ZnVuY3Rpb24geHQoZSx0LG4pe3ZhciByPTAsaT10Lmxlbmd0aDtmb3IoO2k+cjtyKyspc3QoZSx0W3JdLG4pO3JldHVybiBufWZ1bmN0aW9uIHd0KGUsdCxuLHIpe3ZhciBvLGEsdSxsLGMscD1mdChlKTtpZighciYmMT09PXAubGVuZ3RoKXtpZihhPXBbMF09cFswXS5zbGljZSgwKSxhLmxlbmd0aD4yJiZcIklEXCI9PT0odT1hWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmIWQmJmkucmVsYXRpdmVbYVsxXS50eXBlXSl7aWYodD1pLmZpbmQuSUQodS5tYXRjaGVzWzBdLnJlcGxhY2UoZXQsdHQpLHQpWzBdLCF0KXJldHVybiBuO2U9ZS5zbGljZShhLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1vPVUubmVlZHNDb250ZXh0LnRlc3QoZSk/MDphLmxlbmd0aDt3aGlsZShvLS0pe2lmKHU9YVtvXSxpLnJlbGF0aXZlW2w9dS50eXBlXSlicmVhaztpZigoYz1pLmZpbmRbbF0pJiYocj1jKHUubWF0Y2hlc1swXS5yZXBsYWNlKGV0LHR0KSxWLnRlc3QoYVswXS50eXBlKSYmdC5wYXJlbnROb2RlfHx0KSkpe2lmKGEuc3BsaWNlKG8sMSksZT1yLmxlbmd0aCYmZHQoYSksIWUpcmV0dXJuIEguYXBwbHkobixxLmNhbGwociwwKSksbjticmVha319fXJldHVybiBzKGUscCkocix0LGQsbixWLnRlc3QoZSkpLG59aS5wc2V1ZG9zLm50aD1pLnBzZXVkb3MuZXE7ZnVuY3Rpb24gVHQoKXt9aS5maWx0ZXJzPVR0LnByb3RvdHlwZT1pLnBzZXVkb3MsaS5zZXRGaWx0ZXJzPW5ldyBUdCxjKCksc3QuYXR0cj1iLmF0dHIsYi5maW5kPXN0LGIuZXhwcj1zdC5zZWxlY3RvcnMsYi5leHByW1wiOlwiXT1iLmV4cHIucHNldWRvcyxiLnVuaXF1ZT1zdC51bmlxdWVTb3J0LGIudGV4dD1zdC5nZXRUZXh0LGIuaXNYTUxEb2M9c3QuaXNYTUwsYi5jb250YWlucz1zdC5jb250YWluc30oZSk7dmFyIGF0PS9VbnRpbCQvLHN0PS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLHV0PS9eLlteOiNcXFtcXC4sXSokLyxsdD1iLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LGN0PXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2IuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPXRoaXMubGVuZ3RoO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiByPXRoaXMsdGhpcy5wdXNoU3RhY2soYihlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO2k+dDt0KyspaWYoYi5jb250YWlucyhyW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPVtdLHQ9MDtpPnQ7dCsrKWIuZmluZChlLHRoaXNbdF0sbik7cmV0dXJuIG49dGhpcy5wdXNoU3RhY2soaT4xP2IudW5pcXVlKG4pOm4pLG4uc2VsZWN0b3I9KHRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIjpcIlwiKStlLG59LGhhczpmdW5jdGlvbihlKXt2YXIgdCxuPWIoZSx0aGlzKSxyPW4ubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7cj50O3QrKylpZihiLmNvbnRhaW5zKHRoaXMsblt0XSkpcmV0dXJuITB9KX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmdCh0aGlzLGUsITEpKX0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmdCh0aGlzLGUsITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFlJiYoXCJzdHJpbmdcIj09dHlwZW9mIGU/bHQudGVzdChlKT9iKGUsdGhpcy5jb250ZXh0KS5pbmRleCh0aGlzWzBdKT49MDpiLmZpbHRlcihlLHRoaXMpLmxlbmd0aD4wOnRoaXMuZmlsdGVyKGUpLmxlbmd0aD4wKX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1sdC50ZXN0KGUpfHxcInN0cmluZ1wiIT10eXBlb2YgZT9iKGUsdHx8dGhpcy5jb250ZXh0KTowO2Zvcig7aT5yO3IrKyl7bj10aGlzW3JdO3doaWxlKG4mJm4ub3duZXJEb2N1bWVudCYmbiE9PXQmJjExIT09bi5ub2RlVHlwZSl7aWYoYT9hLmluZGV4KG4pPi0xOmIuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSl7by5wdXNoKG4pO2JyZWFrfW49bi5wYXJlbnROb2RlfX1yZXR1cm4gdGhpcy5wdXNoU3RhY2soby5sZW5ndGg+MT9iLnVuaXF1ZShvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/Yi5pbkFycmF5KHRoaXNbMF0sYihlKSk6Yi5pbkFycmF5KGUuanF1ZXJ5P2VbMF06ZSx0aGlzKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3ZhciBuPVwic3RyaW5nXCI9PXR5cGVvZiBlP2IoZSx0KTpiLm1ha2VBcnJheShlJiZlLm5vZGVUeXBlP1tlXTplKSxyPWIubWVyZ2UodGhpcy5nZXQoKSxuKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYi51bmlxdWUocikpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxiLmZuLmFuZFNlbGY9Yi5mbi5hZGRCYWNrO2Z1bmN0aW9uIHB0KGUsdCl7ZG8gZT1lW3RdO3doaWxlKGUmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1iLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZGlyKGUsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmRpcihlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBwdChlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIHB0KGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZGlyKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5kaXIoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZGlyKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuc2libGluZygoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIGIuc2libGluZyhlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gYi5ub2RlTmFtZShlLFwiaWZyYW1lXCIpP2UuY29udGVudERvY3VtZW50fHxlLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ6Yi5tZXJnZShbXSxlLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oZSx0KXtiLmZuW2VdPWZ1bmN0aW9uKG4scil7dmFyIGk9Yi5tYXAodGhpcyx0LG4pO3JldHVybiBhdC50ZXN0KGUpfHwocj1uKSxyJiZcInN0cmluZ1wiPT10eXBlb2YgciYmKGk9Yi5maWx0ZXIocixpKSksaT10aGlzLmxlbmd0aD4xJiYhY3RbZV0/Yi51bmlxdWUoaSk6aSx0aGlzLmxlbmd0aD4xJiZzdC50ZXN0KGUpJiYoaT1pLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soaSl9fSksYi5leHRlbmQoe2ZpbHRlcjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGg/Yi5maW5kLm1hdGNoZXNTZWxlY3Rvcih0WzBdLGUpP1t0WzBdXTpbXTpiLmZpbmQubWF0Y2hlcyhlLHQpfSxkaXI6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpPVtdLG89ZVtuXTt3aGlsZShvJiY5IT09by5ub2RlVHlwZSYmKHI9PT10fHwxIT09by5ub2RlVHlwZXx8IWIobykuaXMocikpKTE9PT1vLm5vZGVUeXBlJiZpLnB1c2gobyksbz1vW25dO3JldHVybiBpfSxzaWJsaW5nOmZ1bmN0aW9uKGUsdCl7dmFyIG49W107Zm9yKDtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn19KTtmdW5jdGlvbiBmdChlLHQsbil7aWYodD10fHwwLGIuaXNGdW5jdGlvbih0KSlyZXR1cm4gYi5ncmVwKGUsZnVuY3Rpb24oZSxyKXt2YXIgaT0hIXQuY2FsbChlLHIsZSk7cmV0dXJuIGk9PT1ufSk7aWYodC5ub2RlVHlwZSlyZXR1cm4gYi5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10PT09bn0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgcj1iLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KTtpZih1dC50ZXN0KHQpKXJldHVybiBiLmZpbHRlcih0LHIsIW4pO3Q9Yi5maWx0ZXIodCxyKX1yZXR1cm4gYi5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGIuaW5BcnJheShlLHQpPj0wPT09bn0pfWZ1bmN0aW9uIGR0KGUpe3ZhciB0PWh0LnNwbGl0KFwifFwiKSxuPWUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKG4uY3JlYXRlRWxlbWVudCl3aGlsZSh0Lmxlbmd0aCluLmNyZWF0ZUVsZW1lbnQodC5wb3AoKSk7cmV0dXJuIG59dmFyIGh0PVwiYWJicnxhcnRpY2xlfGFzaWRlfGF1ZGlvfGJkaXxjYW52YXN8ZGF0YXxkYXRhbGlzdHxkZXRhaWxzfGZpZ2NhcHRpb258ZmlndXJlfGZvb3RlcnxoZWFkZXJ8aGdyb3VwfG1hcmt8bWV0ZXJ8bmF2fG91dHB1dHxwcm9ncmVzc3xzZWN0aW9ufHN1bW1hcnl8dGltZXx2aWRlb1wiLGd0PS8galF1ZXJ5XFxkKz1cIig/Om51bGx8XFxkKylcIi9nLG10PVJlZ0V4cChcIjwoPzpcIitodCtcIilbXFxcXHMvPl1cIixcImlcIikseXQ9L15cXHMrLyx2dD0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksYnQ9LzwoW1xcdzpdKykvLHh0PS88dGJvZHkvaSx3dD0vPHwmIz9cXHcrOy8sVHQ9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxOdD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxDdD0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGt0PS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksRXQ9L150cnVlXFwvKC4qKS8sU3Q9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLEF0PXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sbGVnZW5kOlsxLFwiPGZpZWxkc2V0PlwiLFwiPC9maWVsZHNldD5cIl0sYXJlYTpbMSxcIjxtYXA+XCIsXCI8L21hcD5cIl0scGFyYW06WzEsXCI8b2JqZWN0PlwiLFwiPC9vYmplY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OmIuc3VwcG9ydC5odG1sU2VyaWFsaXplP1swLFwiXCIsXCJcIl06WzEsXCJYPGRpdj5cIixcIjwvZGl2PlwiXX0sanQ9ZHQobyksRHQ9anQuYXBwZW5kQ2hpbGQoby5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtBdC5vcHRncm91cD1BdC5vcHRpb24sQXQudGJvZHk9QXQudGZvb3Q9QXQuY29sZ3JvdXA9QXQuY2FwdGlvbj1BdC50aGVhZCxBdC50aD1BdC50ZCxiLmZuLmV4dGVuZCh7dGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQ/Yi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5hcHBlbmQoKHRoaXNbMF0mJnRoaXNbMF0ub3duZXJEb2N1bWVudHx8bykuY3JlYXRlVGV4dE5vZGUoZSkpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHdyYXBBbGw6ZnVuY3Rpb24oZSl7aWYoYi5pc0Z1bmN0aW9uKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7Yih0aGlzKS53cmFwQWxsKGUuY2FsbCh0aGlzLHQpKX0pO2lmKHRoaXNbMF0pe3ZhciB0PWIoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKTt0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0Q2hpbGQmJjE9PT1lLmZpcnN0Q2hpbGQubm9kZVR5cGUpZT1lLmZpcnN0Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcyl9cmV0dXJuIHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihlKXtyZXR1cm4gYi5pc0Z1bmN0aW9uKGUpP3RoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLndyYXBJbm5lcihlLmNhbGwodGhpcyx0KSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1iKHRoaXMpLG49dC5jb250ZW50cygpO24ubGVuZ3RoP24ud3JhcEFsbChlKTp0LmFwcGVuZChlKX0pfSx3cmFwOmZ1bmN0aW9uKGUpe3ZhciB0PWIuaXNGdW5jdGlvbihlKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe2IodGhpcykud3JhcEFsbCh0P2UuY2FsbCh0aGlzLG4pOmUpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtiLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxiKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLCEwLGZ1bmN0aW9uKGUpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJnRoaXMuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMCxmdW5jdGlvbihlKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiZ0aGlzLmluc2VydEJlZm9yZShlLHRoaXMuZmlyc3RDaGlsZCl9KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLCExLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLCExLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtmb3IoO251bGwhPShuPXRoaXNbcl0pO3IrKykoIWV8fGIuZmlsdGVyKGUsW25dKS5sZW5ndGg+MCkmJih0fHwxIT09bi5ub2RlVHlwZXx8Yi5jbGVhbkRhdGEoT3QobikpLG4ucGFyZW50Tm9kZSYmKHQmJmIuY29udGFpbnMobi5vd25lckRvY3VtZW50LG4pJiZNdChPdChuLFwic2NyaXB0XCIpKSxuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobikpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXt2YXIgZSx0PTA7Zm9yKDtudWxsIT0oZT10aGlzW3RdKTt0KyspezE9PT1lLm5vZGVUeXBlJiZiLmNsZWFuRGF0YShPdChlLCExKSk7d2hpbGUoZS5maXJzdENoaWxkKWUucmVtb3ZlQ2hpbGQoZS5maXJzdENoaWxkKTtlLm9wdGlvbnMmJmIubm9kZU5hbWUoZSxcInNlbGVjdFwiKSYmKGUub3B0aW9ucy5sZW5ndGg9MCl9cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbD09ZT8hMTplLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYi5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihlKXt2YXIgbj10aGlzWzBdfHx7fSxyPTAsaT10aGlzLmxlbmd0aDtpZihlPT09dClyZXR1cm4gMT09PW4ubm9kZVR5cGU/bi5pbm5lckhUTUwucmVwbGFjZShndCxcIlwiKTp0O2lmKCEoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fFR0LnRlc3QoZSl8fCFiLnN1cHBvcnQuaHRtbFNlcmlhbGl6ZSYmbXQudGVzdChlKXx8IWIuc3VwcG9ydC5sZWFkaW5nV2hpdGVzcGFjZSYmeXQudGVzdChlKXx8QXRbKGJ0LmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSkpe2U9ZS5yZXBsYWNlKHZ0LFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2k+cjtyKyspbj10aGlzW3JdfHx7fSwxPT09bi5ub2RlVHlwZSYmKGIuY2xlYW5EYXRhKE90KG4sITEpKSxuLmlubmVySFRNTD1lKTtuPTB9Y2F0Y2gobyl7fX1uJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKGUpe3ZhciB0PWIuaXNGdW5jdGlvbihlKTtyZXR1cm4gdHx8XCJzdHJpbmdcIj09dHlwZW9mIGV8fChlPWIoZSkubm90KHRoaXMpLmRldGFjaCgpKSx0aGlzLmRvbU1hbmlwKFtlXSwhMCxmdW5jdGlvbihlKXt2YXIgdD10aGlzLm5leHRTaWJsaW5nLG49dGhpcy5wYXJlbnROb2RlO24mJihiKHRoaXMpLnJlbW92ZSgpLG4uaW5zZXJ0QmVmb3JlKGUsdCkpfSl9LGRldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZW1vdmUoZSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGUsbixyKXtlPWYuYXBwbHkoW10sZSk7dmFyIGksbyxhLHMsdSxsLGM9MCxwPXRoaXMubGVuZ3RoLGQ9dGhpcyxoPXAtMSxnPWVbMF0sbT1iLmlzRnVuY3Rpb24oZyk7aWYobXx8ISgxPj1wfHxcInN0cmluZ1wiIT10eXBlb2YgZ3x8Yi5zdXBwb3J0LmNoZWNrQ2xvbmUpJiZDdC50ZXN0KGcpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSl7dmFyIG89ZC5lcShpKTttJiYoZVswXT1nLmNhbGwodGhpcyxpLG4/by5odG1sKCk6dCkpLG8uZG9tTWFuaXAoZSxuLHIpfSk7aWYocCYmKGw9Yi5idWlsZEZyYWdtZW50KGUsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGk9bC5maXJzdENoaWxkLDE9PT1sLmNoaWxkTm9kZXMubGVuZ3RoJiYobD1pKSxpKSl7Zm9yKG49biYmYi5ub2RlTmFtZShpLFwidHJcIikscz1iLm1hcChPdChsLFwic2NyaXB0XCIpLEh0KSxhPXMubGVuZ3RoO3A+YztjKyspbz1sLGMhPT1oJiYobz1iLmNsb25lKG8sITAsITApLGEmJmIubWVyZ2UocyxPdChvLFwic2NyaXB0XCIpKSksci5jYWxsKG4mJmIubm9kZU5hbWUodGhpc1tjXSxcInRhYmxlXCIpP0x0KHRoaXNbY10sXCJ0Ym9keVwiKTp0aGlzW2NdLG8sYyk7aWYoYSlmb3IodT1zW3MubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsYi5tYXAocyxxdCksYz0wO2E+YztjKyspbz1zW2NdLGt0LnRlc3Qoby50eXBlfHxcIlwiKSYmIWIuX2RhdGEobyxcImdsb2JhbEV2YWxcIikmJmIuY29udGFpbnModSxvKSYmKG8uc3JjP2IuYWpheCh7dXJsOm8uc3JjLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSk6Yi5nbG9iYWxFdmFsKChvLnRleHR8fG8udGV4dENvbnRlbnR8fG8uaW5uZXJIVE1MfHxcIlwiKS5yZXBsYWNlKFN0LFwiXCIpKSk7bD1pPW51bGx9cmV0dXJuIHRoaXN9fSk7ZnVuY3Rpb24gTHQoZSx0KXtyZXR1cm4gZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KVswXXx8ZS5hcHBlbmRDaGlsZChlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KSl9ZnVuY3Rpb24gSHQoZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGVOb2RlKFwidHlwZVwiKTtyZXR1cm4gZS50eXBlPSh0JiZ0LnNwZWNpZmllZCkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gcXQoZSl7dmFyIHQ9RXQuZXhlYyhlLnR5cGUpO3JldHVybiB0P2UudHlwZT10WzFdOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIE10KGUsdCl7dmFyIG4scj0wO2Zvcig7bnVsbCE9KG49ZVtyXSk7cisrKWIuX2RhdGEobixcImdsb2JhbEV2YWxcIiwhdHx8Yi5fZGF0YSh0W3JdLFwiZ2xvYmFsRXZhbFwiKSl9ZnVuY3Rpb24gX3QoZSx0KXtpZigxPT09dC5ub2RlVHlwZSYmYi5oYXNEYXRhKGUpKXt2YXIgbixyLGksbz1iLl9kYXRhKGUpLGE9Yi5fZGF0YSh0LG8pLHM9by5ldmVudHM7aWYocyl7ZGVsZXRlIGEuaGFuZGxlLGEuZXZlbnRzPXt9O2ZvcihuIGluIHMpZm9yKHI9MCxpPXNbbl0ubGVuZ3RoO2k+cjtyKyspYi5ldmVudC5hZGQodCxuLHNbbl1bcl0pfWEuZGF0YSYmKGEuZGF0YT1iLmV4dGVuZCh7fSxhLmRhdGEpKX19ZnVuY3Rpb24gRnQoZSx0KXt2YXIgbixyLGk7aWYoMT09PXQubm9kZVR5cGUpe2lmKG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLCFiLnN1cHBvcnQubm9DbG9uZUV2ZW50JiZ0W2IuZXhwYW5kb10pe2k9Yi5fZGF0YSh0KTtmb3IociBpbiBpLmV2ZW50cyliLnJlbW92ZUV2ZW50KHQscixpLmhhbmRsZSk7dC5yZW1vdmVBdHRyaWJ1dGUoYi5leHBhbmRvKX1cInNjcmlwdFwiPT09biYmdC50ZXh0IT09ZS50ZXh0PyhIdCh0KS50ZXh0PWUudGV4dCxxdCh0KSk6XCJvYmplY3RcIj09PW4/KHQucGFyZW50Tm9kZSYmKHQub3V0ZXJIVE1MPWUub3V0ZXJIVE1MKSxiLnN1cHBvcnQuaHRtbDVDbG9uZSYmZS5pbm5lckhUTUwmJiFiLnRyaW0odC5pbm5lckhUTUwpJiYodC5pbm5lckhUTUw9ZS5pbm5lckhUTUwpKTpcImlucHV0XCI9PT1uJiZOdC50ZXN0KGUudHlwZSk/KHQuZGVmYXVsdENoZWNrZWQ9dC5jaGVja2VkPWUuY2hlY2tlZCx0LnZhbHVlIT09ZS52YWx1ZSYmKHQudmFsdWU9ZS52YWx1ZSkpOlwib3B0aW9uXCI9PT1uP3QuZGVmYXVsdFNlbGVjdGVkPXQuc2VsZWN0ZWQ9ZS5kZWZhdWx0U2VsZWN0ZWQ6KFwiaW5wdXRcIj09PW58fFwidGV4dGFyZWFcIj09PW4pJiYodC5kZWZhdWx0VmFsdWU9ZS5kZWZhdWx0VmFsdWUpfX1iLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSx0KXtiLmZuW2VdPWZ1bmN0aW9uKGUpe3ZhciBuLHI9MCxpPVtdLG89YihlKSxhPW8ubGVuZ3RoLTE7Zm9yKDthPj1yO3IrKyluPXI9PT1hP3RoaXM6dGhpcy5jbG9uZSghMCksYihvW3JdKVt0XShuKSxkLmFwcGx5KGksbi5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGkpfX0pO2Z1bmN0aW9uIE90KGUsbil7dmFyIHIsbyxhPTAscz10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PWk/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShufHxcIipcIik6dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCE9PWk/ZS5xdWVyeVNlbGVjdG9yQWxsKG58fFwiKlwiKTp0O2lmKCFzKWZvcihzPVtdLHI9ZS5jaGlsZE5vZGVzfHxlO251bGwhPShvPXJbYV0pO2ErKykhbnx8Yi5ub2RlTmFtZShvLG4pP3MucHVzaChvKTpiLm1lcmdlKHMsT3QobyxuKSk7cmV0dXJuIG49PT10fHxuJiZiLm5vZGVOYW1lKGUsbik/Yi5tZXJnZShbZV0scyk6c31mdW5jdGlvbiBCdChlKXtOdC50ZXN0KGUudHlwZSkmJihlLmRlZmF1bHRDaGVja2VkPWUuY2hlY2tlZCl9Yi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHU9Yi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSk7aWYoYi5zdXBwb3J0Lmh0bWw1Q2xvbmV8fGIuaXNYTUxEb2MoZSl8fCFtdC50ZXN0KFwiPFwiK2Uubm9kZU5hbWUrXCI+XCIpP289ZS5jbG9uZU5vZGUoITApOihEdC5pbm5lckhUTUw9ZS5vdXRlckhUTUwsRHQucmVtb3ZlQ2hpbGQobz1EdC5maXJzdENoaWxkKSksIShiLnN1cHBvcnQubm9DbG9uZUV2ZW50JiZiLnN1cHBvcnQubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fGIuaXNYTUxEb2MoZSkpKWZvcihyPU90KG8pLHM9T3QoZSksYT0wO251bGwhPShpPXNbYV0pOysrYSlyW2FdJiZGdChpLHJbYV0pO2lmKHQpaWYobilmb3Iocz1zfHxPdChlKSxyPXJ8fE90KG8pLGE9MDtudWxsIT0oaT1zW2FdKTthKyspX3QoaSxyW2FdKTtlbHNlIF90KGUsbyk7cmV0dXJuIHI9T3QobyxcInNjcmlwdFwiKSxyLmxlbmd0aD4wJiZNdChyLCF1JiZPdChlLFwic2NyaXB0XCIpKSxyPXM9aT1udWxsLG99LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGMscD1lLmxlbmd0aCxmPWR0KHQpLGQ9W10saD0wO2Zvcig7cD5oO2grKylpZihvPWVbaF0sb3x8MD09PW8paWYoXCJvYmplY3RcIj09PWIudHlwZShvKSliLm1lcmdlKGQsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZih3dC50ZXN0KG8pKXtzPXN8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSx1PShidC5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxjPUF0W3VdfHxBdC5fZGVmYXVsdCxzLmlubmVySFRNTD1jWzFdK28ucmVwbGFjZSh2dCxcIjwkMT48LyQyPlwiKStjWzJdLGk9Y1swXTt3aGlsZShpLS0pcz1zLmxhc3RDaGlsZDtpZighYi5zdXBwb3J0LmxlYWRpbmdXaGl0ZXNwYWNlJiZ5dC50ZXN0KG8pJiZkLnB1c2godC5jcmVhdGVUZXh0Tm9kZSh5dC5leGVjKG8pWzBdKSksIWIuc3VwcG9ydC50Ym9keSl7bz1cInRhYmxlXCIhPT11fHx4dC50ZXN0KG8pP1wiPHRhYmxlPlwiIT09Y1sxXXx8eHQudGVzdChvKT8wOnM6cy5maXJzdENoaWxkLGk9byYmby5jaGlsZE5vZGVzLmxlbmd0aDt3aGlsZShpLS0pYi5ub2RlTmFtZShsPW8uY2hpbGROb2Rlc1tpXSxcInRib2R5XCIpJiYhbC5jaGlsZE5vZGVzLmxlbmd0aCYmby5yZW1vdmVDaGlsZChsKVxufWIubWVyZ2UoZCxzLmNoaWxkTm9kZXMpLHMudGV4dENvbnRlbnQ9XCJcIjt3aGlsZShzLmZpcnN0Q2hpbGQpcy5yZW1vdmVDaGlsZChzLmZpcnN0Q2hpbGQpO3M9Zi5sYXN0Q2hpbGR9ZWxzZSBkLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7cyYmZi5yZW1vdmVDaGlsZChzKSxiLnN1cHBvcnQuYXBwZW5kQ2hlY2tlZHx8Yi5ncmVwKE90KGQsXCJpbnB1dFwiKSxCdCksaD0wO3doaWxlKG89ZFtoKytdKWlmKCghcnx8LTE9PT1iLmluQXJyYXkobyxyKSkmJihhPWIuY29udGFpbnMoby5vd25lckRvY3VtZW50LG8pLHM9T3QoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxhJiZNdChzKSxuKSl7aT0wO3doaWxlKG89c1tpKytdKWt0LnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBzPW51bGwsZn0sY2xlYW5EYXRhOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixvLGEscz0wLHU9Yi5leHBhbmRvLGw9Yi5jYWNoZSxwPWIuc3VwcG9ydC5kZWxldGVFeHBhbmRvLGY9Yi5ldmVudC5zcGVjaWFsO2Zvcig7bnVsbCE9KG49ZVtzXSk7cysrKWlmKCh0fHxiLmFjY2VwdERhdGEobikpJiYobz1uW3VdLGE9byYmbFtvXSkpe2lmKGEuZXZlbnRzKWZvcihyIGluIGEuZXZlbnRzKWZbcl0/Yi5ldmVudC5yZW1vdmUobixyKTpiLnJlbW92ZUV2ZW50KG4scixhLmhhbmRsZSk7bFtvXSYmKGRlbGV0ZSBsW29dLHA/ZGVsZXRlIG5bdV06dHlwZW9mIG4ucmVtb3ZlQXR0cmlidXRlIT09aT9uLnJlbW92ZUF0dHJpYnV0ZSh1KTpuW3VdPW51bGwsYy5wdXNoKG8pKX19fSk7dmFyIFB0LFJ0LFd0LCR0PS9hbHBoYVxcKFteKV0qXFwpL2ksSXQ9L29wYWNpdHlcXHMqPVxccyooW14pXSopLyx6dD0vXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC8sWHQ9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFV0PS9ebWFyZ2luLyxWdD1SZWdFeHAoXCJeKFwiK3grXCIpKC4qKSRcIixcImlcIiksWXQ9UmVnRXhwKFwiXihcIit4K1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLEp0PVJlZ0V4cChcIl4oWystXSk9KFwiK3grXCIpXCIsXCJpXCIpLEd0PXtCT0RZOlwiYmxvY2tcIn0sUXQ9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEt0PXtsZXR0ZXJTcGFjaW5nOjAsZm9udFdlaWdodDo0MDB9LFp0PVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxlbj1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl07ZnVuY3Rpb24gdG4oZSx0KXtpZih0IGluIGUpcmV0dXJuIHQ7dmFyIG49dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpLHI9dCxpPWVuLmxlbmd0aDt3aGlsZShpLS0paWYodD1lbltpXStuLHQgaW4gZSlyZXR1cm4gdDtyZXR1cm4gcn1mdW5jdGlvbiBubihlLHQpe3JldHVybiBlPXR8fGUsXCJub25lXCI9PT1iLmNzcyhlLFwiZGlzcGxheVwiKXx8IWIuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfWZ1bmN0aW9uIHJuKGUsdCl7dmFyIG4scixpLG89W10sYT0wLHM9ZS5sZW5ndGg7Zm9yKDtzPmE7YSsrKXI9ZVthXSxyLnN0eWxlJiYob1thXT1iLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIpLG49ci5zdHlsZS5kaXNwbGF5LHQ/KG9bYV18fFwibm9uZVwiIT09bnx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZubihyKSYmKG9bYV09Yi5fZGF0YShyLFwib2xkZGlzcGxheVwiLHVuKHIubm9kZU5hbWUpKSkpOm9bYV18fChpPW5uKHIpLChuJiZcIm5vbmVcIiE9PW58fCFpKSYmYi5fZGF0YShyLFwib2xkZGlzcGxheVwiLGk/bjpiLmNzcyhyLFwiZGlzcGxheVwiKSkpKTtmb3IoYT0wO3M+YTthKyspcj1lW2FdLHIuc3R5bGUmJih0JiZcIm5vbmVcIiE9PXIuc3R5bGUuZGlzcGxheSYmXCJcIiE9PXIuc3R5bGUuZGlzcGxheXx8KHIuc3R5bGUuZGlzcGxheT10P29bYV18fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gZX1iLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsbil7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYT17fSxzPTA7aWYoYi5pc0FycmF5KG4pKXtmb3Iobz1SdChlKSxpPW4ubGVuZ3RoO2k+cztzKyspYVtuW3NdXT1iLmNzcyhlLG5bc10sITEsbyk7cmV0dXJuIGF9cmV0dXJuIHIhPT10P2Iuc3R5bGUoZSxuLHIpOmIuY3NzKGUsbil9LGUsbixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIHJuKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHJuKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJib29sZWFuXCI9PXR5cGVvZiBlO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsodD9lOm5uKHRoaXMpKT9iKHRoaXMpLnNob3coKTpiKHRoaXMpLmhpZGUoKX0pfX0pLGIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49V3QoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOntjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpiLnN1cHBvcnQuY3NzRmxvYXQ/XCJjc3NGbG9hdFwiOlwic3R5bGVGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihlLG4scixpKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBvLGEscyx1PWIuY2FtZWxDYXNlKG4pLGw9ZS5zdHlsZTtpZihuPWIuY3NzUHJvcHNbdV18fChiLmNzc1Byb3BzW3VdPXRuKGwsdSkpLHM9Yi5jc3NIb29rc1tuXXx8Yi5jc3NIb29rc1t1XSxyPT09dClyZXR1cm4gcyYmXCJnZXRcImluIHMmJihvPXMuZ2V0KGUsITEsaSkpIT09dD9vOmxbbl07aWYoYT10eXBlb2YgcixcInN0cmluZ1wiPT09YSYmKG89SnQuZXhlYyhyKSkmJihyPShvWzFdKzEpKm9bMl0rcGFyc2VGbG9hdChiLmNzcyhlLG4pKSxhPVwibnVtYmVyXCIpLCEobnVsbD09cnx8XCJudW1iZXJcIj09PWEmJmlzTmFOKHIpfHwoXCJudW1iZXJcIiE9PWF8fGIuY3NzTnVtYmVyW3VdfHwocis9XCJweFwiKSxiLnN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09cnx8MCE9PW4uaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW25dPVwiaW5oZXJpdFwiKSxzJiZcInNldFwiaW4gcyYmKHI9cy5zZXQoZSxyLGkpKT09PXQpKSl0cnl7bFtuXT1yfWNhdGNoKGMpe319fSxjc3M6ZnVuY3Rpb24oZSxuLHIsaSl7dmFyIG8sYSxzLHU9Yi5jYW1lbENhc2Uobik7cmV0dXJuIG49Yi5jc3NQcm9wc1t1XXx8KGIuY3NzUHJvcHNbdV09dG4oZS5zdHlsZSx1KSkscz1iLmNzc0hvb2tzW25dfHxiLmNzc0hvb2tzW3VdLHMmJlwiZ2V0XCJpbiBzJiYoYT1zLmdldChlLCEwLHIpKSxhPT09dCYmKGE9V3QoZSxuLGkpKSxcIm5vcm1hbFwiPT09YSYmbiBpbiBLdCYmKGE9S3Rbbl0pLFwiXCI9PT1yfHxyPyhvPXBhcnNlRmxvYXQoYSkscj09PSEwfHxiLmlzTnVtZXJpYyhvKT9vfHwwOmEpOmF9LHN3YXA6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhPXt9O2ZvcihvIGluIHQpYVtvXT1lLnN0eWxlW29dLGUuc3R5bGVbb109dFtvXTtpPW4uYXBwbHkoZSxyfHxbXSk7Zm9yKG8gaW4gdCllLnN0eWxlW29dPWFbb107cmV0dXJuIGl9fSksZS5nZXRDb21wdXRlZFN0eWxlPyhSdD1mdW5jdGlvbih0KXtyZXR1cm4gZS5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCl9LFd0PWZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvLGEscz1yfHxSdChlKSx1PXM/cy5nZXRQcm9wZXJ0eVZhbHVlKG4pfHxzW25dOnQsbD1lLnN0eWxlO3JldHVybiBzJiYoXCJcIiE9PXV8fGIuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHwodT1iLnN0eWxlKGUsbikpLFl0LnRlc3QodSkmJlV0LnRlc3QobikmJihpPWwud2lkdGgsbz1sLm1pbldpZHRoLGE9bC5tYXhXaWR0aCxsLm1pbldpZHRoPWwubWF4V2lkdGg9bC53aWR0aD11LHU9cy53aWR0aCxsLndpZHRoPWksbC5taW5XaWR0aD1vLGwubWF4V2lkdGg9YSkpLHV9KTpvLmRvY3VtZW50RWxlbWVudC5jdXJyZW50U3R5bGUmJihSdD1mdW5jdGlvbihlKXtyZXR1cm4gZS5jdXJyZW50U3R5bGV9LFd0PWZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvLGEscz1yfHxSdChlKSx1PXM/c1tuXTp0LGw9ZS5zdHlsZTtyZXR1cm4gbnVsbD09dSYmbCYmbFtuXSYmKHU9bFtuXSksWXQudGVzdCh1KSYmIXp0LnRlc3QobikmJihpPWwubGVmdCxvPWUucnVudGltZVN0eWxlLGE9byYmby5sZWZ0LGEmJihvLmxlZnQ9ZS5jdXJyZW50U3R5bGUubGVmdCksbC5sZWZ0PVwiZm9udFNpemVcIj09PW4/XCIxZW1cIjp1LHU9bC5waXhlbExlZnQrXCJweFwiLGwubGVmdD1pLGEmJihvLmxlZnQ9YSkpLFwiXCI9PT11P1wiYXV0b1wiOnV9KTtmdW5jdGlvbiBvbihlLHQsbil7dmFyIHI9VnQuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMV0tKG58fDApKSsoclsyXXx8XCJweFwiKTp0fWZ1bmN0aW9uIGFuKGUsdCxuLHIsaSl7dmFyIG89bj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09dD8xOjAsYT0wO2Zvcig7ND5vO28rPTIpXCJtYXJnaW5cIj09PW4mJihhKz1iLmNzcyhlLG4rWnRbb10sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKGEtPWIuY3NzKGUsXCJwYWRkaW5nXCIrWnRbb10sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYoYS09Yi5jc3MoZSxcImJvcmRlclwiK1p0W29dK1wiV2lkdGhcIiwhMCxpKSkpOihhKz1iLmNzcyhlLFwicGFkZGluZ1wiK1p0W29dLCEwLGkpLFwicGFkZGluZ1wiIT09biYmKGErPWIuY3NzKGUsXCJib3JkZXJcIitadFtvXStcIldpZHRoXCIsITAsaSkpKTtyZXR1cm4gYX1mdW5jdGlvbiBzbihlLHQsbil7dmFyIHI9ITAsaT1cIndpZHRoXCI9PT10P2Uub2Zmc2V0V2lkdGg6ZS5vZmZzZXRIZWlnaHQsbz1SdChlKSxhPWIuc3VwcG9ydC5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09Yi5jc3MoZSxcImJveFNpemluZ1wiLCExLG8pO2lmKDA+PWl8fG51bGw9PWkpe2lmKGk9V3QoZSx0LG8pLCgwPml8fG51bGw9PWkpJiYoaT1lLnN0eWxlW3RdKSxZdC50ZXN0KGkpKXJldHVybiBpO3I9YSYmKGIuc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZXx8aT09PWUuc3R5bGVbdF0pLGk9cGFyc2VGbG9hdChpKXx8MH1yZXR1cm4gaSthbihlLHQsbnx8KGE/XCJib3JkZXJcIjpcImNvbnRlbnRcIikscixvKStcInB4XCJ9ZnVuY3Rpb24gdW4oZSl7dmFyIHQ9byxuPUd0W2VdO3JldHVybiBufHwobj1sbihlLHQpLFwibm9uZVwiIT09biYmbnx8KFB0PShQdHx8YihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikuY3NzKFwiY3NzVGV4dFwiLFwiZGlzcGxheTpibG9jayAhaW1wb3J0YW50XCIpKS5hcHBlbmRUbyh0LmRvY3VtZW50RWxlbWVudCksdD0oUHRbMF0uY29udGVudFdpbmRvd3x8UHRbMF0uY29udGVudERvY3VtZW50KS5kb2N1bWVudCx0LndyaXRlKFwiPCFkb2N0eXBlIGh0bWw+PGh0bWw+PGJvZHk+XCIpLHQuY2xvc2UoKSxuPWxuKGUsdCksUHQuZGV0YWNoKCkpLEd0W2VdPW4pLG59ZnVuY3Rpb24gbG4oZSx0KXt2YXIgbj1iKHQuY3JlYXRlRWxlbWVudChlKSkuYXBwZW5kVG8odC5ib2R5KSxyPWIuY3NzKG5bMF0sXCJkaXNwbGF5XCIpO3JldHVybiBuLnJlbW92ZSgpLHJ9Yi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSxuKXtiLmNzc0hvb2tzW25dPXtnZXQ6ZnVuY3Rpb24oZSxyLGkpe3JldHVybiByPzA9PT1lLm9mZnNldFdpZHRoJiZYdC50ZXN0KGIuY3NzKGUsXCJkaXNwbGF5XCIpKT9iLnN3YXAoZSxRdCxmdW5jdGlvbigpe3JldHVybiBzbihlLG4saSl9KTpzbihlLG4saSk6dH0sc2V0OmZ1bmN0aW9uKGUsdCxyKXt2YXIgaT1yJiZSdChlKTtyZXR1cm4gb24oZSx0LHI/YW4oZSxuLHIsYi5zdXBwb3J0LmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1iLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSksaSk6MCl9fX0pLGIuc3VwcG9ydC5vcGFjaXR5fHwoYi5jc3NIb29rcy5vcGFjaXR5PXtnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gSXQudGVzdCgodCYmZS5jdXJyZW50U3R5bGU/ZS5jdXJyZW50U3R5bGUuZmlsdGVyOmUuc3R5bGUuZmlsdGVyKXx8XCJcIik/LjAxKnBhcnNlRmxvYXQoUmVnRXhwLiQxKStcIlwiOnQ/XCIxXCI6XCJcIn0sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5zdHlsZSxyPWUuY3VycmVudFN0eWxlLGk9Yi5pc051bWVyaWModCk/XCJhbHBoYShvcGFjaXR5PVwiKzEwMCp0K1wiKVwiOlwiXCIsbz1yJiZyLmZpbHRlcnx8bi5maWx0ZXJ8fFwiXCI7bi56b29tPTEsKHQ+PTF8fFwiXCI9PT10KSYmXCJcIj09PWIudHJpbShvLnJlcGxhY2UoJHQsXCJcIikpJiZuLnJlbW92ZUF0dHJpYnV0ZSYmKG4ucmVtb3ZlQXR0cmlidXRlKFwiZmlsdGVyXCIpLFwiXCI9PT10fHxyJiYhci5maWx0ZXIpfHwobi5maWx0ZXI9JHQudGVzdChvKT9vLnJlcGxhY2UoJHQsaSk6bytcIiBcIitpKX19KSxiKGZ1bmN0aW9uKCl7Yi5zdXBwb3J0LnJlbGlhYmxlTWFyZ2luUmlnaHR8fChiLmNzc0hvb2tzLm1hcmdpblJpZ2h0PXtnZXQ6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj9iLnN3YXAoZSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxXdCxbZSxcIm1hcmdpblJpZ2h0XCJdKTp0fX0pLCFiLnN1cHBvcnQucGl4ZWxQb3NpdGlvbiYmYi5mbi5wb3NpdGlvbiYmYi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLG4pe2IuY3NzSG9va3Nbbl09e2dldDpmdW5jdGlvbihlLHIpe3JldHVybiByPyhyPVd0KGUsbiksWXQudGVzdChyKT9iKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnIpOnR9fX0pfSksYi5leHByJiZiLmV4cHIuZmlsdGVycyYmKGIuZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4gMD49ZS5vZmZzZXRXaWR0aCYmMD49ZS5vZmZzZXRIZWlnaHR8fCFiLnN1cHBvcnQucmVsaWFibGVIaWRkZW5PZmZzZXRzJiZcIm5vbmVcIj09PShlLnN0eWxlJiZlLnN0eWxlLmRpc3BsYXl8fGIuY3NzKGUsXCJkaXNwbGF5XCIpKX0sYi5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hYi5leHByLmZpbHRlcnMuaGlkZGVuKGUpfSksYi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oZSx0KXtiLmNzc0hvb2tzW2UrdF09e2V4cGFuZDpmdW5jdGlvbihuKXt2YXIgcj0wLGk9e30sbz1cInN0cmluZ1wiPT10eXBlb2Ygbj9uLnNwbGl0KFwiIFwiKTpbbl07Zm9yKDs0PnI7cisrKWlbZStadFtyXSt0XT1vW3JdfHxvW3ItMl18fG9bMF07cmV0dXJuIGl9fSxVdC50ZXN0KGUpfHwoYi5jc3NIb29rc1tlK3RdLnNldD1vbil9KTt2YXIgY249LyUyMC9nLHBuPS9cXFtcXF0kLyxmbj0vXFxyP1xcbi9nLGRuPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxobj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7Yi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBiLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9Yi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9iLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFiKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZobi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhZG4udGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IU50LnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49Yih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOmIuaXNBcnJheShuKT9iLm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2UoZm4sXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShmbixcIlxcclxcblwiKX19KS5nZXQoKX19KSxiLnBhcmFtPWZ1bmN0aW9uKGUsbil7dmFyIHIsaT1bXSxvPWZ1bmN0aW9uKGUsdCl7dD1iLmlzRnVuY3Rpb24odCk/dCgpOm51bGw9PXQ/XCJcIjp0LGlbaS5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCl9O2lmKG49PT10JiYobj1iLmFqYXhTZXR0aW5ncyYmYi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLGIuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFiLmlzUGxhaW5PYmplY3QoZSkpYi5lYWNoKGUsZnVuY3Rpb24oKXtvKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKHIgaW4gZSlnbihyLGVbcl0sbixvKTtyZXR1cm4gaS5qb2luKFwiJlwiKS5yZXBsYWNlKGNuLFwiK1wiKX07ZnVuY3Rpb24gZ24oZSx0LG4scil7dmFyIGk7aWYoYi5pc0FycmF5KHQpKWIuZWFjaCh0LGZ1bmN0aW9uKHQsaSl7bnx8cG4udGVzdChlKT9yKGUsaSk6Z24oZStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGk/dDpcIlwiKStcIl1cIixpLG4scil9KTtlbHNlIGlmKG58fFwib2JqZWN0XCIhPT1iLnR5cGUodCkpcihlLHQpO2Vsc2UgZm9yKGkgaW4gdClnbihlK1wiW1wiK2krXCJdXCIsdFtpXSxuLHIpfWIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtiLmZuW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKHQsbnVsbCxlLG4pOnRoaXMudHJpZ2dlcih0KX19KSxiLmZuLmhvdmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfTt2YXIgbW4seW4sdm49Yi5ub3coKSxibj0vXFw/Lyx4bj0vIy4qJC8sd249LyhbPyZdKV89W14mXSovLFRuPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKVxccj8kL2dtLE5uPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLENuPS9eKD86R0VUfEhFQUQpJC8sa249L15cXC9cXC8vLEVuPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLFNuPWIuZm4ubG9hZCxBbj17fSxqbj17fSxEbj1cIiovXCIuY29uY2F0KFwiKlwiKTt0cnl7eW49YS5ocmVmfWNhdGNoKExuKXt5bj1vLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLHluLmhyZWY9XCJcIix5bj15bi5ocmVmfW1uPUVuLmV4ZWMoeW4udG9Mb3dlckNhc2UoKSl8fFtdO2Z1bmN0aW9uIEhuKGUpe3JldHVybiBmdW5jdGlvbih0LG4pe1wic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCIqXCIpO3ZhciByLGk9MCxvPXQudG9Mb3dlckNhc2UoKS5tYXRjaCh3KXx8W107aWYoYi5pc0Z1bmN0aW9uKG4pKXdoaWxlKHI9b1tpKytdKVwiK1wiPT09clswXT8ocj1yLnNsaWNlKDEpfHxcIipcIiwoZVtyXT1lW3JdfHxbXSkudW5zaGlmdChuKSk6KGVbcl09ZVtyXXx8W10pLnB1c2gobil9fWZ1bmN0aW9uIHFuKGUsbixyLGkpe3ZhciBvPXt9LGE9ZT09PWpuO2Z1bmN0aW9uIHModSl7dmFyIGw7cmV0dXJuIG9bdV09ITAsYi5lYWNoKGVbdV18fFtdLGZ1bmN0aW9uKGUsdSl7dmFyIGM9dShuLHIsaSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGN8fGF8fG9bY10/YT8hKGw9Yyk6dDoobi5kYXRhVHlwZXMudW5zaGlmdChjKSxzKGMpLCExKX0pLGx9cmV0dXJuIHMobi5kYXRhVHlwZXNbMF0pfHwhb1tcIipcIl0mJnMoXCIqXCIpfWZ1bmN0aW9uIE1uKGUsbil7dmFyIHIsaSxvPWIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoaSBpbiBuKW5baV0hPT10JiYoKG9baV0/ZTpyfHwocj17fSkpW2ldPW5baV0pO3JldHVybiByJiZiLmV4dGVuZCghMCxlLHIpLGV9Yi5mbi5sb2FkPWZ1bmN0aW9uKGUsbixyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSYmU24pcmV0dXJuIFNuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgaSxvLGEscz10aGlzLHU9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gdT49MCYmKGk9ZS5zbGljZSh1LGUubGVuZ3RoKSxlPWUuc2xpY2UoMCx1KSksYi5pc0Z1bmN0aW9uKG4pPyhyPW4sbj10KTpuJiZcIm9iamVjdFwiPT10eXBlb2YgbiYmKGE9XCJQT1NUXCIpLHMubGVuZ3RoPjAmJmIuYWpheCh7dXJsOmUsdHlwZTphLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6bn0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMscy5odG1sKGk/YihcIjxkaXY+XCIpLmFwcGVuZChiLnBhcnNlSFRNTChlKSkuZmluZChpKTplKX0pLmNvbXBsZXRlKHImJmZ1bmN0aW9uKGUsdCl7cy5lYWNoKHIsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSksdGhpc30sYi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtiLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksYi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLG4pe2Jbbl09ZnVuY3Rpb24oZSxyLGksbyl7cmV0dXJuIGIuaXNGdW5jdGlvbihyKSYmKG89b3x8aSxpPXIscj10KSxiLmFqYXgoe3VybDplLHR5cGU6bixkYXRhVHlwZTpvLGRhdGE6cixzdWNjZXNzOml9KX19KSxiLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6eW4sdHlwZTpcIkdFVFwiLGlzTG9jYWw6Tm4udGVzdChtblsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6RG4sdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOmUuU3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpiLnBhcnNlSlNPTixcInRleHQgeG1sXCI6Yi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/TW4oTW4oZSxiLmFqYXhTZXR0aW5ncyksdCk6TW4oYi5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6SG4oQW4pLGFqYXhUcmFuc3BvcnQ6SG4oam4pLGFqYXg6ZnVuY3Rpb24oZSxuKXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKG49ZSxlPXQpLG49bnx8e307dmFyIHIsaSxvLGEscyx1LGwsYyxwPWIuYWpheFNldHVwKHt9LG4pLGY9cC5jb250ZXh0fHxwLGQ9cC5jb250ZXh0JiYoZi5ub2RlVHlwZXx8Zi5qcXVlcnkpP2IoZik6Yi5ldmVudCxoPWIuRGVmZXJyZWQoKSxnPWIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksbT1wLnN0YXR1c0NvZGV8fHt9LHk9e30sdj17fSx4PTAsVD1cImNhbmNlbGVkXCIsTj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKDI9PT14KXtpZighYyl7Yz17fTt3aGlsZSh0PVRuLmV4ZWMoYSkpY1t0WzFdLnRvTG93ZXJDYXNlKCldPXRbMl19dD1jW2UudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PXQ/bnVsbDp0fSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXg/YTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS50b0xvd2VyQ2FzZSgpO3JldHVybiB4fHwoZT12W25dPXZbbl18fGUseVtlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiB4fHwocC5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoMj54KWZvcih0IGluIGUpbVt0XT1bbVt0XSxlW3RdXTtlbHNlIE4uYWx3YXlzKGVbTi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8VDtyZXR1cm4gbCYmbC5hYm9ydCh0KSxrKDAsdCksdGhpc319O2lmKGgucHJvbWlzZShOKS5jb21wbGV0ZT1nLmFkZCxOLnN1Y2Nlc3M9Ti5kb25lLE4uZXJyb3I9Ti5mYWlsLHAudXJsPSgoZXx8cC51cmx8fHluKStcIlwiKS5yZXBsYWNlKHhuLFwiXCIpLnJlcGxhY2Uoa24sbW5bMV0rXCIvL1wiKSxwLnR5cGU9bi5tZXRob2R8fG4udHlwZXx8cC5tZXRob2R8fHAudHlwZSxwLmRhdGFUeXBlcz1iLnRyaW0ocC5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2godyl8fFtcIlwiXSxudWxsPT1wLmNyb3NzRG9tYWluJiYocj1Fbi5leGVjKHAudXJsLnRvTG93ZXJDYXNlKCkpLHAuY3Jvc3NEb21haW49ISghcnx8clsxXT09PW1uWzFdJiZyWzJdPT09bW5bMl0mJihyWzNdfHwoXCJodHRwOlwiPT09clsxXT84MDo0NDMpKT09KG1uWzNdfHwoXCJodHRwOlwiPT09bW5bMV0/ODA6NDQzKSkpKSxwLmRhdGEmJnAucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBwLmRhdGEmJihwLmRhdGE9Yi5wYXJhbShwLmRhdGEscC50cmFkaXRpb25hbCkpLHFuKEFuLHAsbixOKSwyPT09eClyZXR1cm4gTjt1PXAuZ2xvYmFsLHUmJjA9PT1iLmFjdGl2ZSsrJiZiLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIikscC50eXBlPXAudHlwZS50b1VwcGVyQ2FzZSgpLHAuaGFzQ29udGVudD0hQ24udGVzdChwLnR5cGUpLG89cC51cmwscC5oYXNDb250ZW50fHwocC5kYXRhJiYobz1wLnVybCs9KGJuLnRlc3Qobyk/XCImXCI6XCI/XCIpK3AuZGF0YSxkZWxldGUgcC5kYXRhKSxwLmNhY2hlPT09ITEmJihwLnVybD13bi50ZXN0KG8pP28ucmVwbGFjZSh3bixcIiQxXz1cIit2bisrKTpvKyhibi50ZXN0KG8pP1wiJlwiOlwiP1wiKStcIl89XCIrdm4rKykpLHAuaWZNb2RpZmllZCYmKGIubGFzdE1vZGlmaWVkW29dJiZOLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLGIubGFzdE1vZGlmaWVkW29dKSxiLmV0YWdbb10mJk4uc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixiLmV0YWdbb10pKSwocC5kYXRhJiZwLmhhc0NvbnRlbnQmJnAuY29udGVudFR5cGUhPT0hMXx8bi5jb250ZW50VHlwZSkmJk4uc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHAuY29udGVudFR5cGUpLE4uc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHAuZGF0YVR5cGVzWzBdJiZwLmFjY2VwdHNbcC5kYXRhVHlwZXNbMF1dP3AuYWNjZXB0c1twLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09cC5kYXRhVHlwZXNbMF0/XCIsIFwiK0RuK1wiOyBxPTAuMDFcIjpcIlwiKTpwLmFjY2VwdHNbXCIqXCJdKTtmb3IoaSBpbiBwLmhlYWRlcnMpTi5zZXRSZXF1ZXN0SGVhZGVyKGkscC5oZWFkZXJzW2ldKTtpZihwLmJlZm9yZVNlbmQmJihwLmJlZm9yZVNlbmQuY2FsbChmLE4scCk9PT0hMXx8Mj09PXgpKXJldHVybiBOLmFib3J0KCk7VD1cImFib3J0XCI7Zm9yKGkgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pTltpXShwW2ldKTtpZihsPXFuKGpuLHAsbixOKSl7Ti5yZWFkeVN0YXRlPTEsdSYmZC50cmlnZ2VyKFwiYWpheFNlbmRcIixbTixwXSkscC5hc3luYyYmcC50aW1lb3V0PjAmJihzPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtOLmFib3J0KFwidGltZW91dFwiKX0scC50aW1lb3V0KSk7dHJ5e3g9MSxsLnNlbmQoeSxrKX1jYXRjaChDKXtpZighKDI+eCkpdGhyb3cgQztrKC0xLEMpfX1lbHNlIGsoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gayhlLG4scixpKXt2YXIgYyx5LHYsdyxULEM9bjsyIT09eCYmKHg9MixzJiZjbGVhclRpbWVvdXQocyksbD10LGE9aXx8XCJcIixOLnJlYWR5U3RhdGU9ZT4wPzQ6MCxyJiYodz1fbihwLE4scikpLGU+PTIwMCYmMzAwPmV8fDMwND09PWU/KHAuaWZNb2RpZmllZCYmKFQ9Ti5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksVCYmKGIubGFzdE1vZGlmaWVkW29dPVQpLFQ9Ti5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksVCYmKGIuZXRhZ1tvXT1UKSksMjA0PT09ZT8oYz0hMCxDPVwibm9jb250ZW50XCIpOjMwND09PWU/KGM9ITAsQz1cIm5vdG1vZGlmaWVkXCIpOihjPUZuKHAsdyksQz1jLnN0YXRlLHk9Yy5kYXRhLHY9Yy5lcnJvcixjPSF2KSk6KHY9QywoZXx8IUMpJiYoQz1cImVycm9yXCIsMD5lJiYoZT0wKSkpLE4uc3RhdHVzPWUsTi5zdGF0dXNUZXh0PShufHxDKStcIlwiLGM/aC5yZXNvbHZlV2l0aChmLFt5LEMsTl0pOmgucmVqZWN0V2l0aChmLFtOLEMsdl0pLE4uc3RhdHVzQ29kZShtKSxtPXQsdSYmZC50cmlnZ2VyKGM/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW04scCxjP3k6dl0pLGcuZmlyZVdpdGgoZixbTixDXSksdSYmKGQudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtOLHBdKSwtLWIuYWN0aXZlfHxiLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBOfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYi5nZXQoZSx0LG4sXCJzY3JpcHRcIil9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmdldChlLHQsbixcImpzb25cIil9fSk7ZnVuY3Rpb24gX24oZSxuLHIpe3ZhciBpLG8sYSxzLHU9ZS5jb250ZW50cyxsPWUuZGF0YVR5cGVzLGM9ZS5yZXNwb25zZUZpZWxkcztmb3IocyBpbiBjKXMgaW4gciYmKG5bY1tzXV09cltzXSk7d2hpbGUoXCIqXCI9PT1sWzBdKWwuc2hpZnQoKSxvPT09dCYmKG89ZS5taW1lVHlwZXx8bi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYobylmb3IocyBpbiB1KWlmKHVbc10mJnVbc10udGVzdChvKSl7bC51bnNoaWZ0KHMpO2JyZWFrfWlmKGxbMF1pbiByKWE9bFswXTtlbHNle2ZvcihzIGluIHIpe2lmKCFsWzBdfHxlLmNvbnZlcnRlcnNbcytcIiBcIitsWzBdXSl7YT1zO2JyZWFrfWl8fChpPXMpfWE9YXx8aX1yZXR1cm4gYT8oYSE9PWxbMF0mJmwudW5zaGlmdChhKSxyW2FdKTp0fWZ1bmN0aW9uIEZuKGUsdCl7dmFyIG4scixpLG8sYT17fSxzPTAsdT1lLmRhdGFUeXBlcy5zbGljZSgpLGw9dVswXTtpZihlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1WzFdKWZvcihpIGluIGUuY29udmVydGVycylhW2kudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2ldO2Zvcig7cj11Wysrc107KWlmKFwiKlwiIT09cil7aWYoXCIqXCIhPT1sJiZsIT09cil7aWYoaT1hW2wrXCIgXCIrcl18fGFbXCIqIFwiK3JdLCFpKWZvcihuIGluIGEpaWYobz1uLnNwbGl0KFwiIFwiKSxvWzFdPT09ciYmKGk9YVtsK1wiIFwiK29bMF1dfHxhW1wiKiBcIitvWzBdXSkpe2k9PT0hMD9pPWFbbl06YVtuXSE9PSEwJiYocj1vWzBdLHUuc3BsaWNlKHMtLSwwLHIpKTticmVha31pZihpIT09ITApaWYoaSYmZVtcInRocm93c1wiXSl0PWkodCk7ZWxzZSB0cnl7dD1pKHQpfWNhdGNoKGMpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6aT9jOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2wrXCIgdG8gXCIrcn19fWw9cn1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX1iLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gYi5nbG9iYWxFdmFsKGUpLGV9fX0pLGIuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe2UuY2FjaGU9PT10JiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiLGUuZ2xvYmFsPSExKX0pLGIuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe2lmKGUuY3Jvc3NEb21haW4pe3ZhciBuLHI9by5oZWFkfHxiKFwiaGVhZFwiKVswXXx8by5kb2N1bWVudEVsZW1lbnQ7cmV0dXJue3NlbmQ6ZnVuY3Rpb24odCxpKXtuPW8uY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxuLmFzeW5jPSEwLGUuc2NyaXB0Q2hhcnNldCYmKG4uY2hhcnNldD1lLnNjcmlwdENoYXJzZXQpLG4uc3JjPWUudXJsLG4ub25sb2FkPW4ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKGUsdCl7KHR8fCFuLnJlYWR5U3RhdGV8fC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qobi5yZWFkeVN0YXRlKSkmJihuLm9ubG9hZD1uLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLG4ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLG49bnVsbCx0fHxpKDIwMCxcInN1Y2Nlc3NcIikpfSxyLmluc2VydEJlZm9yZShuLHIuZmlyc3RDaGlsZCl9LGFib3J0OmZ1bmN0aW9uKCl7biYmbi5vbmxvYWQodCwhMCl9fX19KTt2YXIgT249W10sQm49Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztiLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1Pbi5wb3AoKXx8Yi5leHBhbmRvK1wiX1wiK3ZuKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxiLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24obixyLGkpe3ZhciBvLGEscyx1PW4uanNvbnAhPT0hMSYmKEJuLnRlc3Qobi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIG4uZGF0YSYmIShuLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZCbi50ZXN0KG4uZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gdXx8XCJqc29ucFwiPT09bi5kYXRhVHlwZXNbMF0/KG89bi5qc29ucENhbGxiYWNrPWIuaXNGdW5jdGlvbihuLmpzb25wQ2FsbGJhY2spP24uanNvbnBDYWxsYmFjaygpOm4uanNvbnBDYWxsYmFjayx1P25bdV09blt1XS5yZXBsYWNlKEJuLFwiJDFcIitvKTpuLmpzb25wIT09ITEmJihuLnVybCs9KGJuLnRlc3Qobi51cmwpP1wiJlwiOlwiP1wiKStuLmpzb25wK1wiPVwiK28pLG4uY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHN8fGIuZXJyb3IobytcIiB3YXMgbm90IGNhbGxlZFwiKSxzWzBdfSxuLmRhdGFUeXBlc1swXT1cImpzb25cIixhPWVbb10sZVtvXT1mdW5jdGlvbigpe3M9YXJndW1lbnRzfSxpLmFsd2F5cyhmdW5jdGlvbigpe2Vbb109YSxuW29dJiYobi5qc29ucENhbGxiYWNrPXIuanNvbnBDYWxsYmFjayxPbi5wdXNoKG8pKSxzJiZiLmlzRnVuY3Rpb24oYSkmJmEoc1swXSkscz1hPXR9KSxcInNjcmlwdFwiKTp0fSk7dmFyIFBuLFJuLFduPTAsJG49ZS5BY3RpdmVYT2JqZWN0JiZmdW5jdGlvbigpe3ZhciBlO2ZvcihlIGluIFBuKVBuW2VdKHQsITApfTtmdW5jdGlvbiBJbigpe3RyeXtyZXR1cm4gbmV3IGUuWE1MSHR0cFJlcXVlc3R9Y2F0Y2godCl7fX1mdW5jdGlvbiB6bigpe3RyeXtyZXR1cm4gbmV3IGUuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfWNhdGNoKHQpe319Yi5hamF4U2V0dGluZ3MueGhyPWUuQWN0aXZlWE9iamVjdD9mdW5jdGlvbigpe3JldHVybiF0aGlzLmlzTG9jYWwmJkluKCl8fHpuKCl9OkluLFJuPWIuYWpheFNldHRpbmdzLnhocigpLGIuc3VwcG9ydC5jb3JzPSEhUm4mJlwid2l0aENyZWRlbnRpYWxzXCJpbiBSbixSbj1iLnN1cHBvcnQuYWpheD0hIVJuLFJuJiZiLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24obil7aWYoIW4uY3Jvc3NEb21haW58fGIuc3VwcG9ydC5jb3JzKXt2YXIgcjtyZXR1cm57c2VuZDpmdW5jdGlvbihpLG8pe3ZhciBhLHMsdT1uLnhocigpO2lmKG4udXNlcm5hbWU/dS5vcGVuKG4udHlwZSxuLnVybCxuLmFzeW5jLG4udXNlcm5hbWUsbi5wYXNzd29yZCk6dS5vcGVuKG4udHlwZSxuLnVybCxuLmFzeW5jKSxuLnhockZpZWxkcylmb3IocyBpbiBuLnhockZpZWxkcyl1W3NdPW4ueGhyRmllbGRzW3NdO24ubWltZVR5cGUmJnUub3ZlcnJpZGVNaW1lVHlwZSYmdS5vdmVycmlkZU1pbWVUeXBlKG4ubWltZVR5cGUpLG4uY3Jvc3NEb21haW58fGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoaVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTt0cnl7Zm9yKHMgaW4gaSl1LnNldFJlcXVlc3RIZWFkZXIocyxpW3NdKX1jYXRjaChsKXt9dS5zZW5kKG4uaGFzQ29udGVudCYmbi5kYXRhfHxudWxsKSxyPWZ1bmN0aW9uKGUsaSl7dmFyIHMsbCxjLHA7dHJ5e2lmKHImJihpfHw0PT09dS5yZWFkeVN0YXRlKSlpZihyPXQsYSYmKHUub25yZWFkeXN0YXRlY2hhbmdlPWIubm9vcCwkbiYmZGVsZXRlIFBuW2FdKSxpKTQhPT11LnJlYWR5U3RhdGUmJnUuYWJvcnQoKTtlbHNle3A9e30scz11LnN0YXR1cyxsPXUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksXCJzdHJpbmdcIj09dHlwZW9mIHUucmVzcG9uc2VUZXh0JiYocC50ZXh0PXUucmVzcG9uc2VUZXh0KTt0cnl7Yz11LnN0YXR1c1RleHR9Y2F0Y2goZil7Yz1cIlwifXN8fCFuLmlzTG9jYWx8fG4uY3Jvc3NEb21haW4/MTIyMz09PXMmJihzPTIwNCk6cz1wLnRleHQ/MjAwOjQwNH19Y2F0Y2goZCl7aXx8bygtMSxkKX1wJiZvKHMsYyxwLGwpfSxuLmFzeW5jPzQ9PT11LnJlYWR5U3RhdGU/c2V0VGltZW91dChyKTooYT0rK1duLCRuJiYoUG58fChQbj17fSxiKGUpLnVubG9hZCgkbikpLFBuW2FdPXIpLHUub25yZWFkeXN0YXRlY2hhbmdlPXIpOnIoKX0sYWJvcnQ6ZnVuY3Rpb24oKXtyJiZyKHQsITApfX19fSk7dmFyIFhuLFVuLFZuPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxZbj1SZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK3grXCIpKFthLXolXSopJFwiLFwiaVwiKSxKbj0vcXVldWVIb29rcyQvLEduPVtucl0sUW49e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT10aGlzLmNyZWF0ZVR3ZWVuKGUsdCksbz1Zbi5leGVjKHQpLGE9aS5jdXIoKSxzPSthfHwwLHU9MSxsPTIwO2lmKG8pe2lmKG49K29bMl0scj1vWzNdfHwoYi5jc3NOdW1iZXJbZV0/XCJcIjpcInB4XCIpLFwicHhcIiE9PXImJnMpe3M9Yi5jc3MoaS5lbGVtLGUsITApfHxufHwxO2RvIHU9dXx8XCIuNVwiLHMvPXUsYi5zdHlsZShpLmVsZW0sZSxzK3IpO3doaWxlKHUhPT0odT1pLmN1cigpL2EpJiYxIT09dSYmLS1sKX1pLnVuaXQ9cixpLnN0YXJ0PXMsaS5lbmQ9b1sxXT9zKyhvWzFdKzEpKm46bn1yZXR1cm4gaX1dfTtmdW5jdGlvbiBLbigpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7WG49dH0pLFhuPWIubm93KCl9ZnVuY3Rpb24gWm4oZSx0KXtiLmVhY2godCxmdW5jdGlvbih0LG4pe3ZhciByPShRblt0XXx8W10pLmNvbmNhdChRbltcIipcIl0pLGk9MCxvPXIubGVuZ3RoO2Zvcig7bz5pO2krKylpZihyW2ldLmNhbGwoZSx0LG4pKXJldHVybn0pfWZ1bmN0aW9uIGVyKGUsdCxuKXt2YXIgcixpLG89MCxhPUduLmxlbmd0aCxzPWIuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGkpcmV0dXJuITE7dmFyIHQ9WG58fEtuKCksbj1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tdCkscj1uL2wuZHVyYXRpb258fDAsbz0xLXIsYT0wLHU9bC50d2VlbnMubGVuZ3RoO2Zvcig7dT5hO2ErKylsLnR3ZWVuc1thXS5ydW4obyk7cmV0dXJuIHMubm90aWZ5V2l0aChlLFtsLG8sbl0pLDE+byYmdT9uOihzLnJlc29sdmVXaXRoKGUsW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOmUscHJvcHM6Yi5leHRlbmQoe30sdCksb3B0czpiLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fX0sbiksb3JpZ2luYWxQcm9wZXJ0aWVzOnQsb3JpZ2luYWxPcHRpb25zOm4sc3RhcnRUaW1lOlhufHxLbigpLGR1cmF0aW9uOm4uZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKHQsbil7dmFyIHI9Yi5Ud2VlbihlLGwub3B0cyx0LG4sbC5vcHRzLnNwZWNpYWxFYXNpbmdbdF18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKHIpLHJ9LHN0b3A6ZnVuY3Rpb24odCl7dmFyIG49MCxyPXQ/bC50d2VlbnMubGVuZ3RoOjA7aWYoaSlyZXR1cm4gdGhpcztmb3IoaT0hMDtyPm47bisrKWwudHdlZW5zW25dLnJ1bigxKTtyZXR1cm4gdD9zLnJlc29sdmVXaXRoKGUsW2wsdF0pOnMucmVqZWN0V2l0aChlLFtsLHRdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IodHIoYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7YT5vO28rKylpZihyPUduW29dLmNhbGwobCxlLGMsbC5vcHRzKSlyZXR1cm4gcjtyZXR1cm4gWm4obCxjKSxiLmlzRnVuY3Rpb24obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwoZSxsKSxiLmZ4LnRpbWVyKGIuZXh0ZW5kKHUse2VsZW06ZSxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpfWZ1bmN0aW9uIHRyKGUsdCl7dmFyIG4scixpLG8sYTtmb3IoaSBpbiBlKWlmKHI9Yi5jYW1lbENhc2UoaSksbz10W3JdLG49ZVtpXSxiLmlzQXJyYXkobikmJihvPW5bMV0sbj1lW2ldPW5bMF0pLGkhPT1yJiYoZVtyXT1uLGRlbGV0ZSBlW2ldKSxhPWIuY3NzSG9va3Nbcl0sYSYmXCJleHBhbmRcImluIGEpe249YS5leHBhbmQobiksZGVsZXRlIGVbcl07Zm9yKGkgaW4gbilpIGluIGV8fChlW2ldPW5baV0sdFtpXT1vKX1lbHNlIHRbcl09b31iLkFuaW1hdGlvbj1iLmV4dGVuZChlcix7dHdlZW5lcjpmdW5jdGlvbihlLHQpe2IuaXNGdW5jdGlvbihlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLnNwbGl0KFwiIFwiKTt2YXIgbixyPTAsaT1lLmxlbmd0aDtmb3IoO2k+cjtyKyspbj1lW3JdLFFuW25dPVFuW25dfHxbXSxRbltuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P0duLnVuc2hpZnQoZSk6R24ucHVzaChlKX19KTtmdW5jdGlvbiBucihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxwLGY9dGhpcyxkPWUuc3R5bGUsaD17fSxnPVtdLG09ZS5ub2RlVHlwZSYmbm4oZSk7bi5xdWV1ZXx8KGM9Yi5fcXVldWVIb29rcyhlLFwiZnhcIiksbnVsbD09Yy51bnF1ZXVlZCYmKGMudW5xdWV1ZWQ9MCxwPWMuZW1wdHkuZmlyZSxjLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtjLnVucXVldWVkfHxwKCl9KSxjLnVucXVldWVkKyssZi5hbHdheXMoZnVuY3Rpb24oKXtmLmFsd2F5cyhmdW5jdGlvbigpe2MudW5xdWV1ZWQtLSxiLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGMuZW1wdHkuZmlyZSgpfSl9KSksMT09PWUubm9kZVR5cGUmJihcImhlaWdodFwiaW4gdHx8XCJ3aWR0aFwiaW4gdCkmJihuLm92ZXJmbG93PVtkLm92ZXJmbG93LGQub3ZlcmZsb3dYLGQub3ZlcmZsb3dZXSxcImlubGluZVwiPT09Yi5jc3MoZSxcImRpc3BsYXlcIikmJlwibm9uZVwiPT09Yi5jc3MoZSxcImZsb2F0XCIpJiYoYi5zdXBwb3J0LmlubGluZUJsb2NrTmVlZHNMYXlvdXQmJlwiaW5saW5lXCIhPT11bihlLm5vZGVOYW1lKT9kLnpvb209MTpkLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihkLm92ZXJmbG93PVwiaGlkZGVuXCIsYi5zdXBwb3J0LnNocmlua1dyYXBCbG9ja3N8fGYuYWx3YXlzKGZ1bmN0aW9uKCl7ZC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGQub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0sZC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKTtmb3IoaSBpbiB0KWlmKGE9dFtpXSxWbi5leGVjKGEpKXtpZihkZWxldGUgdFtpXSx1PXV8fFwidG9nZ2xlXCI9PT1hLGE9PT0obT9cImhpZGVcIjpcInNob3dcIikpY29udGludWU7Zy5wdXNoKGkpfWlmKG89Zy5sZW5ndGgpe3M9Yi5fZGF0YShlLFwiZnhzaG93XCIpfHxiLl9kYXRhKGUsXCJmeHNob3dcIix7fSksXCJoaWRkZW5cImluIHMmJihtPXMuaGlkZGVuKSx1JiYocy5oaWRkZW49IW0pLG0/YihlKS5zaG93KCk6Zi5kb25lKGZ1bmN0aW9uKCl7YihlKS5oaWRlKCl9KSxmLmRvbmUoZnVuY3Rpb24oKXt2YXIgdDtiLl9yZW1vdmVEYXRhKGUsXCJmeHNob3dcIik7Zm9yKHQgaW4gaCliLnN0eWxlKGUsdCxoW3RdKX0pO2ZvcihpPTA7bz5pO2krKylyPWdbaV0sbD1mLmNyZWF0ZVR3ZWVuKHIsbT9zW3JdOjApLGhbcl09c1tyXXx8Yi5zdHlsZShlLHIpLHIgaW4gc3x8KHNbcl09bC5zdGFydCxtJiYobC5lbmQ9bC5zdGFydCxsLnN0YXJ0PVwid2lkdGhcIj09PXJ8fFwiaGVpZ2h0XCI9PT1yPzE6MCkpfX1mdW5jdGlvbiBycihlLHQsbixyLGkpe3JldHVybiBuZXcgcnIucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1iLlR3ZWVuPXJyLHJyLnByb3RvdHlwZT17Y29uc3RydWN0b3I6cnIsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8XCJzd2luZ1wiLHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoYi5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1yci5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6cnIucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49cnIucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMucG9zPXQ9dGhpcy5vcHRpb25zLmR1cmF0aW9uP2IuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOmUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6cnIucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0scnIucHJvdG90eXBlLmluaXQucHJvdG90eXBlPXJyLnByb3RvdHlwZSxyci5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIG51bGw9PWUuZWxlbVtlLnByb3BdfHxlLmVsZW0uc3R5bGUmJm51bGwhPWUuZWxlbS5zdHlsZVtlLnByb3BdPyh0PWIuY3NzKGUuZWxlbSxlLnByb3AsXCJcIiksdCYmXCJhdXRvXCIhPT10P3Q6MCk6ZS5lbGVtW2UucHJvcF19LHNldDpmdW5jdGlvbihlKXtiLmZ4LnN0ZXBbZS5wcm9wXT9iLmZ4LnN0ZXBbZS5wcm9wXShlKTplLmVsZW0uc3R5bGUmJihudWxsIT1lLmVsZW0uc3R5bGVbYi5jc3NQcm9wc1tlLnByb3BdXXx8Yi5jc3NIb29rc1tlLnByb3BdKT9iLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KTplLmVsZW1bZS5wcm9wXT1lLm5vd319fSxyci5wcm9wSG9va3Muc2Nyb2xsVG9wPXJyLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LGIuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSx0KXt2YXIgbj1iLmZuW3RdO2IuZm5bdF09ZnVuY3Rpb24oZSxyLGkpe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGlyKHQsITApLGUscixpKX19KSxiLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihubikuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgaT1iLmlzRW1wdHlPYmplY3QoZSksbz1iLnNwZWVkKHQsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIHQ9ZXIodGhpcyxiLmV4dGVuZCh7fSxlKSxvKTthLmZpbmlzaD1mdW5jdGlvbigpe3Quc3RvcCghMCl9LChpfHxiLl9kYXRhKHRoaXMsXCJmaW5pc2hcIikpJiZ0LnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHxvLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihlLG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChyKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihyPW4sbj1lLGU9dCksbiYmZSE9PSExJiZ0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9ITAsbj1udWxsIT1lJiZlK1wicXVldWVIb29rc1wiLG89Yi50aW1lcnMsYT1iLl9kYXRhKHRoaXMpO2lmKG4pYVtuXSYmYVtuXS5zdG9wJiZpKGFbbl0pO2Vsc2UgZm9yKG4gaW4gYSlhW25dJiZhW25dLnN0b3AmJkpuLnRlc3QobikmJmkoYVtuXSk7Zm9yKG49by5sZW5ndGg7bi0tOylvW25dLmVsZW0hPT10aGlzfHxudWxsIT1lJiZvW25dLnF1ZXVlIT09ZXx8KG9bbl0uYW5pbS5zdG9wKHIpLHQ9ITEsby5zcGxpY2UobiwxKSk7KHR8fCFyKSYmYi5kZXF1ZXVlKHRoaXMsZSl9KX0sZmluaXNoOmZ1bmN0aW9uKGUpe3JldHVybiBlIT09ITEmJihlPWV8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQsbj1iLl9kYXRhKHRoaXMpLHI9bltlK1wicXVldWVcIl0saT1uW2UrXCJxdWV1ZUhvb2tzXCJdLG89Yi50aW1lcnMsYT1yP3IubGVuZ3RoOjA7Zm9yKG4uZmluaXNoPSEwLGIucXVldWUodGhpcyxlLFtdKSxpJiZpLmN1ciYmaS5jdXIuZmluaXNoJiZpLmN1ci5maW5pc2guY2FsbCh0aGlzKSx0PW8ubGVuZ3RoO3QtLTspb1t0XS5lbGVtPT09dGhpcyYmb1t0XS5xdWV1ZT09PWUmJihvW3RdLmFuaW0uc3RvcCghMCksby5zcGxpY2UodCwxKSk7Zm9yKHQ9MDthPnQ7dCsrKXJbdF0mJnJbdF0uZmluaXNoJiZyW3RdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBuLmZpbmlzaH0pfX0pO2Z1bmN0aW9uIGlyKGUsdCl7dmFyIG4scj17aGVpZ2h0OmV9LGk9MDtmb3IodD10PzE6MDs0Pmk7aSs9Mi10KW49WnRbaV0scltcIm1hcmdpblwiK25dPXJbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKHIub3BhY2l0eT1yLndpZHRoPWUpLHJ9Yi5lYWNoKHtzbGlkZURvd246aXIoXCJzaG93XCIpLHNsaWRlVXA6aXIoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmlyKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSx0KXtiLmZuW2VdPWZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdGhpcy5hbmltYXRlKHQsZSxuLHIpfX0pLGIuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP2IuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8Yi5pc0Z1bmN0aW9uKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFiLmlzRnVuY3Rpb24odCkmJnR9O3JldHVybiByLmR1cmF0aW9uPWIuZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIHIuZHVyYXRpb24/ci5kdXJhdGlvbjpyLmR1cmF0aW9uIGluIGIuZnguc3BlZWRzP2IuZnguc3BlZWRzW3IuZHVyYXRpb25dOmIuZnguc3BlZWRzLl9kZWZhdWx0LChudWxsPT1yLnF1ZXVlfHxyLnF1ZXVlPT09ITApJiYoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe2IuaXNGdW5jdGlvbihyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmYi5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LGIuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn19LGIudGltZXJzPVtdLGIuZng9cnIucHJvdG90eXBlLmluaXQsYi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsbj1iLnRpbWVycyxyPTA7Zm9yKFhuPWIubm93KCk7bi5sZW5ndGg+cjtyKyspZT1uW3JdLGUoKXx8bltyXSE9PWV8fG4uc3BsaWNlKHItLSwxKTtuLmxlbmd0aHx8Yi5meC5zdG9wKCksWG49dH0sYi5meC50aW1lcj1mdW5jdGlvbihlKXtlKCkmJmIudGltZXJzLnB1c2goZSkmJmIuZnguc3RhcnQoKX0sYi5meC5pbnRlcnZhbD0xMyxiLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7VW58fChVbj1zZXRJbnRlcnZhbChiLmZ4LnRpY2ssYi5meC5pbnRlcnZhbCkpfSxiLmZ4LnN0b3A9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKFVuKSxVbj1udWxsfSxiLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxiLmZ4LnN0ZXA9e30sYi5leHByJiZiLmV4cHIuZmlsdGVycyYmKGIuZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGUpe3JldHVybiBiLmdyZXAoYi50aW1lcnMsZnVuY3Rpb24odCl7cmV0dXJuIGU9PT10LmVsZW19KS5sZW5ndGh9KSxiLmZuLm9mZnNldD1mdW5jdGlvbihlKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBlPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbih0KXtiLm9mZnNldC5zZXRPZmZzZXQodGhpcyxlLHQpfSk7dmFyIG4scixvPXt0b3A6MCxsZWZ0OjB9LGE9dGhpc1swXSxzPWEmJmEub3duZXJEb2N1bWVudDtpZihzKXJldHVybiBuPXMuZG9jdW1lbnRFbGVtZW50LGIuY29udGFpbnMobixhKT8odHlwZW9mIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IT09aSYmKG89YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkscj1vcihzKSx7dG9wOm8udG9wKyhyLnBhZ2VZT2Zmc2V0fHxuLnNjcm9sbFRvcCktKG4uY2xpZW50VG9wfHwwKSxsZWZ0Om8ubGVmdCsoci5wYWdlWE9mZnNldHx8bi5zY3JvbGxMZWZ0KS0obi5jbGllbnRMZWZ0fHwwKX0pOm99LGIub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWIuY3NzKGUsXCJwb3NpdGlvblwiKTtcInN0YXRpY1wiPT09ciYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKTt2YXIgaT1iKGUpLG89aS5vZmZzZXQoKSxhPWIuY3NzKGUsXCJ0b3BcIikscz1iLmNzcyhlLFwibGVmdFwiKSx1PShcImFic29sdXRlXCI9PT1yfHxcImZpeGVkXCI9PT1yKSYmYi5pbkFycmF5KFwiYXV0b1wiLFthLHNdKT4tMSxsPXt9LGM9e30scCxmO3U/KGM9aS5wb3NpdGlvbigpLHA9Yy50b3AsZj1jLmxlZnQpOihwPXBhcnNlRmxvYXQoYSl8fDAsZj1wYXJzZUZsb2F0KHMpfHwwKSxiLmlzRnVuY3Rpb24odCkmJih0PXQuY2FsbChlLG4sbykpLG51bGwhPXQudG9wJiYobC50b3A9dC50b3Atby50b3ArcCksbnVsbCE9dC5sZWZ0JiYobC5sZWZ0PXQubGVmdC1vLmxlZnQrZiksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxsKTppLmNzcyhsKX19LGIuZm4uZXh0ZW5kKHtwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbj17dG9wOjAsbGVmdDowfSxyPXRoaXNbMF07cmV0dXJuXCJmaXhlZFwiPT09Yi5jc3MocixcInBvc2l0aW9uXCIpP3Q9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooZT10aGlzLm9mZnNldFBhcmVudCgpLHQ9dGhpcy5vZmZzZXQoKSxiLm5vZGVOYW1lKGVbMF0sXCJodG1sXCIpfHwobj1lLm9mZnNldCgpKSxuLnRvcCs9Yi5jc3MoZVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLG4ubGVmdCs9Yi5jc3MoZVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDp0LnRvcC1uLnRvcC1iLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LW4ubGVmdC1iLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudHx8by5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmIWIubm9kZU5hbWUoZSxcImh0bWxcIikmJlwic3RhdGljXCI9PT1iLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8by5kb2N1bWVudEVsZW1lbnR9KX19KSxiLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGUsbil7dmFyIHI9L1kvLnRlc3Qobik7Yi5mbltlXT1mdW5jdGlvbihpKXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihlLGksbyl7dmFyIGE9b3IoZSk7cmV0dXJuIG89PT10P2E/biBpbiBhP2Fbbl06YS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbaV06ZVtpXTooYT9hLnNjcm9sbFRvKHI/YihhKS5zY3JvbGxMZWZ0KCk6byxyP286YihhKS5zY3JvbGxUb3AoKSk6ZVtpXT1vLHQpfSxlLGksYXJndW1lbnRzLmxlbmd0aCxudWxsKX19KTtmdW5jdGlvbiBvcihlKXtyZXR1cm4gYi5pc1dpbmRvdyhlKT9lOjk9PT1lLm5vZGVUeXBlP2UuZGVmYXVsdFZpZXd8fGUucGFyZW50V2luZG93OiExfWIuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihlLG4pe2IuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrZSxjb250ZW50Om4sXCJcIjpcIm91dGVyXCIrZX0sZnVuY3Rpb24ocixpKXtiLmZuW2ldPWZ1bmN0aW9uKGksbyl7dmFyIGE9YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgaSkscz1yfHwoaT09PSEwfHxvPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihuLHIsaSl7dmFyIG87cmV0dXJuIGIuaXNXaW5kb3cobik/bi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIitlXTo5PT09bi5ub2RlVHlwZT8obz1uLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChuLmJvZHlbXCJzY3JvbGxcIitlXSxvW1wic2Nyb2xsXCIrZV0sbi5ib2R5W1wib2Zmc2V0XCIrZV0sb1tcIm9mZnNldFwiK2VdLG9bXCJjbGllbnRcIitlXSkpOmk9PT10P2IuY3NzKG4scixzKTpiLnN0eWxlKG4scixpLHMpfSxuLGE/aTp0LGEsbnVsbCl9fSl9KSxlLmpRdWVyeT1lLiQ9YixcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZS5hbWQualF1ZXJ5JiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBifSl9KSh3aW5kb3cpOyIsIi8qIWpRdWVyeSBLbm9iKi9cclxuLyoqXHJcbiAqIERvd253YXJkIGNvbXBhdGlibGUsIHRvdWNoYWJsZSBkaWFsXHJcbiAqXHJcbiAqIFZlcnNpb246IDEuMi4wICgxNS8wNy8yMDEyKVxyXG4gKiBSZXF1aXJlczogalF1ZXJ5IHYxLjcrXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMiBBbnRob255IFRlcnJpZW5cclxuICogVW5kZXIgTUlUIGFuZCBHUEwgbGljZW5zZXM6XHJcbiAqICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gKiAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC5odG1sXHJcbiAqXHJcbiAqIFRoYW5rcyB0byB2b3IsIGVza2ltb2Jsb29kLCBzcGlmZmlzdGFuLCBGYWJyaXppb0NcclxuICovXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLb250cm9sIGxpYnJhcnlcclxuICAgICAqL1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbml0aW9uIG9mIGdsb2JhbHMgYW5kIGNvcmVcclxuICAgICAqL1xyXG4gICAgdmFyIGsgPSB7fSwgLy8ga29udHJvbFxyXG4gICAgICAgIG1heCA9IE1hdGgubWF4LFxyXG4gICAgICAgIG1pbiA9IE1hdGgubWluO1xyXG5cclxuICAgIGsuYyA9IHt9O1xyXG4gICAgay5jLmQgPSAkKGRvY3VtZW50KTtcclxuICAgIGsuYy50ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIC0gMTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLb250cm9sIE9iamVjdFxyXG4gICAgICpcclxuICAgICAqIERlZmluaXRpb24gb2YgYW4gYWJzdHJhY3QgVUkgY29udHJvbFxyXG4gICAgICpcclxuICAgICAqIEVhY2ggY29uY3JldGUgY29tcG9uZW50IG11c3QgY2FsbCB0aGlzIG9uZS5cclxuICAgICAqIDxjb2RlPlxyXG4gICAgICogay5vLmNhbGwodGhpcyk7XHJcbiAgICAgKiA8L2NvZGU+XHJcbiAgICAgKi9cclxuICAgIGsubyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMubyA9IG51bGw7IC8vIGFycmF5IG9mIG9wdGlvbnNcclxuICAgICAgICB0aGlzLiQgPSBudWxsOyAvLyBqUXVlcnkgd3JhcHBlZCBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5pID0gbnVsbDsgLy8gbWl4ZWQgSFRNTElucHV0RWxlbWVudCBvciBhcnJheSBvZiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgdGhpcy5nID0gbnVsbDsgLy8gZGVwcmVjYXRlZCAyRCBncmFwaGljcyBjb250ZXh0IGZvciAncHJlLXJlbmRlcmluZydcclxuICAgICAgICB0aGlzLnYgPSBudWxsOyAvLyB2YWx1ZSA7IG1peGVkIGFycmF5IG9yIGludGVnZXJcclxuICAgICAgICB0aGlzLmN2ID0gbnVsbDsgLy8gY2hhbmdlIHZhbHVlIDsgbm90IGNvbW1pdGVkIHZhbHVlXHJcbiAgICAgICAgdGhpcy54ID0gMDsgLy8gY2FudmFzIHggcG9zaXRpb25cclxuICAgICAgICB0aGlzLnkgPSAwOyAvLyBjYW52YXMgeSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMudyA9IDA7IC8vIGNhbnZhcyB3aWR0aFxyXG4gICAgICAgIHRoaXMuaCA9IDA7IC8vIGNhbnZhcyBoZWlnaHRcclxuICAgICAgICB0aGlzLiRjID0gbnVsbDsgLy8galF1ZXJ5IGNhbnZhcyBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5jID0gbnVsbDsgLy8gcmVuZGVyZWQgY2FudmFzIGNvbnRleHRcclxuICAgICAgICB0aGlzLnQgPSAwOyAvLyB0b3VjaGVzIGluZGV4XHJcbiAgICAgICAgdGhpcy5pc0luaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZnQ29sb3IgPSBudWxsOyAvLyBtYWluIGNvbG9yXHJcbiAgICAgICAgdGhpcy5wQ29sb3IgPSBudWxsOyAvLyBwcmV2aW91cyBjb2xvclxyXG4gICAgICAgIHRoaXMuZEggPSBudWxsOyAvLyBkcmF3IGhvb2tcclxuICAgICAgICB0aGlzLmNIID0gbnVsbDsgLy8gY2hhbmdlIGhvb2tcclxuICAgICAgICB0aGlzLmVIID0gbnVsbDsgLy8gY2FuY2VsIGhvb2tcclxuICAgICAgICB0aGlzLnJIID0gbnVsbDsgLy8gcmVsZWFzZSBob29rXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7IC8vIHNjYWxlIGZhY3RvclxyXG4gICAgICAgIHRoaXMucmVsYXRpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlV2lkdGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlSGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kZGl2ID0gbnVsbDsgLy8gY29tcG9uZW50IGRpdlxyXG5cclxuICAgICAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNmID0gZnVuY3Rpb24gKGUsIGNvbmYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrO1xyXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIGNvbmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLm9ba10gPSBjb25mW2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcy5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICBzLl9jb25maWd1cmUoKVxyXG4gICAgICAgICAgICAgICAgIC5fZHJhdygpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy4kLmRhdGEoJ2tvbnRyb2xlZCcpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuJC5kYXRhKCdrb250cm9sZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMubyA9ICQuZXh0ZW5kKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbiA6IHRoaXMuJC5kYXRhKCdtaW4nKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heCA6IHRoaXMuJC5kYXRhKCdtYXgnKSB8fCAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcHBlciA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgOiB0aGlzLiQuZGF0YSgncmVhZG9ubHknKSB8fCAodGhpcy4kLmF0dHIoJ3JlYWRvbmx5JykgPT0gJ3JlYWRvbmx5JyksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVJXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yIDogKHRoaXMuJC5kYXRhKCdjdXJzb3InKSA9PT0gdHJ1ZSAmJiAzMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLiQuZGF0YSgnY3Vyc29yJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzcyA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQuZGF0YSgndGhpY2tuZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBNYXRoLm1heChNYXRoLm1pbih0aGlzLiQuZGF0YSgndGhpY2tuZXNzJyksIDEpLCAwLjAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAwLjM1LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDYXAgOiB0aGlzLiQuZGF0YSgnbGluZWNhcCcpIHx8ICdidXR0JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IHRoaXMuJC5kYXRhKCd3aWR0aCcpIHx8IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLiQuZGF0YSgnaGVpZ2h0JykgfHwgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlJbnB1dCA6IHRoaXMuJC5kYXRhKCdkaXNwbGF5aW5wdXQnKSA9PSBudWxsIHx8IHRoaXMuJC5kYXRhKCdkaXNwbGF5aW5wdXQnKSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UHJldmlvdXMgOiB0aGlzLiQuZGF0YSgnZGlzcGxheXByZXZpb3VzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZmdDb2xvciA6IHRoaXMuJC5kYXRhKCdmZ2NvbG9yJykgfHwgJyM4N0NFRUInLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29sb3I6IHRoaXMuJC5kYXRhKCdpbnB1dGNvbG9yJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogdGhpcy4kLmRhdGEoJ2ZvbnQnKSB8fCAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMuJC5kYXRhKCdmb250LXdlaWdodCcpIHx8ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwIDogdGhpcy4kLmRhdGEoJ3N0ZXAnKSB8fCAxLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXcgOiBudWxsLCAvLyBmdW5jdGlvbiAoKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6IG51bGwsIC8vIGZ1bmN0aW9uICh2YWx1ZSkge31cclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWwgOiBudWxsLCAvLyBmdW5jdGlvbiAoKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgOiBudWxsLCAvLyBmdW5jdGlvbiAodmFsdWUpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBudWxsIC8vIGZ1bmN0aW9uICgpIHt9XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmFsaXplIG9wdGlvbnNcclxuICAgICAgICAgICAgaWYoIXRoaXMuby5pbnB1dENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm8uaW5wdXRDb2xvciA9IHRoaXMuby5mZ0NvbG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyByb3V0aW5nIHZhbHVlXHJcbiAgICAgICAgICAgIGlmKHRoaXMuJC5pcygnZmllbGRzZXQnKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZpZWxkc2V0ID0gYXJyYXkgb2YgaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgdGhpcy52ID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSB0aGlzLiQuZmluZCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pLmVhY2goZnVuY3Rpb24oaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5pW2tdID0gJHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcy52W2tdID0gJHRoaXMudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2Uga2V5dXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsW2tdID0gJHRoaXMudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kLmZpbmQoJ2xlZ2VuZCcpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dCA9IGludGVnZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IHRoaXMuJDtcclxuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuJC52YWwoKTtcclxuICAgICAgICAgICAgICAgICh0aGlzLnYgPT0gJycpICYmICh0aGlzLnYgPSB0aGlzLm8ubWluKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAnY2hhbmdlIGtleXVwJ1xyXG4gICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLl92YWxpZGF0ZShzLiQudmFsKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKCF0aGlzLm8uZGlzcGxheUlucHV0KSAmJiB0aGlzLiQuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkcyBuZWVkZWQgRE9NIGVsZW1lbnRzIChjYW52YXMsIGRpdilcclxuICAgICAgICAgICAgdGhpcy4kYyA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIEdfdm1sQ2FudmFzTWFuYWdlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICBHX3ZtbENhbnZhc01hbmFnZXIuaW5pdEVsZW1lbnQodGhpcy4kY1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jID0gdGhpcy4kY1swXS5nZXRDb250ZXh0ID8gdGhpcy4kY1swXS5nZXRDb250ZXh0KCcyZCcpIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuby5lcnJvciAmJiB0aGlzLm8uZXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaGRwaSBzdXBwb3J0XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZWN0cyByZWxhdGl2ZSB3aWR0aCAvIGhlaWdodFxyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlV2lkdGggPSAoKHRoaXMuby53aWR0aCAlIDEgIT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuby53aWR0aC5pbmRleE9mKCclJykpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlSGVpZ2h0ID0gKCh0aGlzLm8uaGVpZ2h0ICUgMSAhPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5vLmhlaWdodC5pbmRleE9mKCclJykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZSA9ICh0aGlzLnJlbGF0aXZlV2lkdGggfHwgdGhpcy5yZWxhdGl2ZUhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyB3cmFwcyBhbGwgZWxlbWVudHMgaW4gYSBkaXZcclxuICAgICAgICAgICAgdGhpcy4kZGl2ID0gJCgnPGRpdiBzdHlsZT1cIidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5vLmlubGluZSA/ICdkaXNwbGF5OmlubGluZTsnIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ1wiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kLndyYXAodGhpcy4kZGl2KS5iZWZvcmUodGhpcy4kYyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGRpdiA9IHRoaXMuJC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbXB1dGVzIHNpemUgYW5kIGNhcnZlcyB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMuX2NhcnZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBwcmVwYXJlcyBwcm9wcyBmb3IgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKHRoaXMudiBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KHRoaXMudiwgdGhpcy5jdik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0gdGhpcy52O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kcyBjb25maWd1cmUgZXZlbnRcclxuICAgICAgICAgICAgdGhpcy4kXHJcbiAgICAgICAgICAgICAgICAuYmluZChcImNvbmZpZ3VyZVwiLCBjZilcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJjb25maWd1cmVcIiwgY2YpO1xyXG5cclxuICAgICAgICAgICAgLy8gZmluYWxpemUgaW5pdFxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW4oKVxyXG4gICAgICAgICAgICAgICAgLl9jb25maWd1cmUoKVxyXG4gICAgICAgICAgICAgICAgLl94eSgpXHJcbiAgICAgICAgICAgICAgICAuaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlIG1vc3QgaW1wb3J0YW50ICFcclxuICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FydmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5yZWxhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLnJlbGF0aXZlV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy4kZGl2LnBhcmVudCgpLndpZHRoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBhcnNlSW50KHRoaXMuby53aWR0aCkgLyAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy4kZGl2LnBhcmVudCgpLndpZHRoKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IHRoaXMucmVsYXRpdmVIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy4kZGl2LnBhcmVudCgpLmhlaWdodCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwYXJzZUludCh0aGlzLm8uaGVpZ2h0KSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiRkaXYucGFyZW50KCkuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgcmVsYXRpdmVcclxuICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMuaCA9IE1hdGgubWluKHcsIGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ID0gdGhpcy5vLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oID0gdGhpcy5vLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZmluYWxpemUgZGl2XHJcbiAgICAgICAgICAgIHRoaXMuJGRpdi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogdGhpcy53ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiB0aGlzLmggKyAncHgnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZmluYWxpemUgY2FudmFzIHdpdGggY29tcHV0ZWQgd2lkdGhcclxuICAgICAgICAgICAgdGhpcy4kYy5hdHRyKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLncsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxpbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NhbGUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNbMF0ud2lkdGggPSB0aGlzLiRjWzBdLndpZHRoICogdGhpcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNbMF0uaGVpZ2h0ID0gdGhpcy4kY1swXS5oZWlnaHQgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYy53aWR0aCh0aGlzLncpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYy5oZWlnaHQodGhpcy5oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gY2FudmFzIHByZS1yZW5kZXJpbmdcclxuICAgICAgICAgICAgdmFyIGQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcy5nID0gcy5jO1xyXG5cclxuICAgICAgICAgICAgcy5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgcy5kSFxyXG4gICAgICAgICAgICAmJiAoZCA9IHMuZEgoKSk7XHJcblxyXG4gICAgICAgICAgICAoZCAhPT0gZmFsc2UpICYmIHMuZHJhdygpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl90b3VjaCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHMueHkydmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbcy50XS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3JpZ2luYWxFdmVudC50b3VjaGVzW3MudF0ucGFnZVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzLmNoYW5nZShzLl92YWxpZGF0ZSh2KSk7XHJcbiAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdG91Y2hlcyBpbmRleFxyXG4gICAgICAgICAgICB0aGlzLnQgPSBrLmMudChlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpcnN0IHRvdWNoXHJcbiAgICAgICAgICAgIHRvdWNoTW92ZShlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvdWNoIGV2ZW50cyBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgay5jLmRcclxuICAgICAgICAgICAgICAgIC5iaW5kKFwidG91Y2htb3ZlLmtcIiwgdG91Y2hNb3ZlKVxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaGVuZC5rXCJcclxuICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgay5jLmQudW5iaW5kKCd0b3VjaG1vdmUuayB0b3VjaGVuZC5rJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnJIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAocy5ySChzLmN2KSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5jdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX21vdXNlID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBtb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBzLnh5MnZhbChlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgICAgICAgICAgICAgIHMuY2hhbmdlKHMuX3ZhbGlkYXRlKHYpKTtcclxuICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpcnN0IGNsaWNrXHJcbiAgICAgICAgICAgIG1vdXNlTW92ZShlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1vdXNlIGV2ZW50cyBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgay5jLmRcclxuICAgICAgICAgICAgICAgIC5iaW5kKFwibW91c2Vtb3ZlLmtcIiwgbW91c2VNb3ZlKVxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXNjYXBlIGtleSBjYW5jZWwgY3VycmVudCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICBcImtleXVwLmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsuYy5kLnVuYmluZChcIm1vdXNldXAuayBtb3VzZW1vdmUuayBrZXl1cC5rXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHMuZUgoKSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb3VzZXVwLmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgay5jLmQudW5iaW5kKCdtb3VzZW1vdmUuayBtb3VzZXVwLmsga2V5dXAuaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5ySFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHMuckgocy5jdikgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuY3YpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl94eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLiRjLm9mZnNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnggPSBvLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IG8udG9wO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9saXN0ZW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuby5yZWFkT25seSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY1xyXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX3h5KCkuX21vdXNlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaHN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5feHkoKS5fdG91Y2goZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kLmF0dHIoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVsYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5fY2FydmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9jb25maWd1cmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vLmRyYXcpIHRoaXMuZEggPSB0aGlzLm8uZHJhdztcclxuICAgICAgICAgICAgaWYgKHRoaXMuby5jaGFuZ2UpIHRoaXMuY0ggPSB0aGlzLm8uY2hhbmdlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vLmNhbmNlbCkgdGhpcy5lSCA9IHRoaXMuby5jYW5jZWw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm8ucmVsZWFzZSkgdGhpcy5ySCA9IHRoaXMuby5yZWxlYXNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuby5kaXNwbGF5UHJldmlvdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucENvbG9yID0gdGhpcy5oMnJnYmEodGhpcy5vLmZnQ29sb3IsIFwiMC40XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZ0NvbG9yID0gdGhpcy5oMnJnYmEodGhpcy5vLmZnQ29sb3IsIFwiMC42XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZ0NvbG9yID0gdGhpcy5vLmZnQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2NsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRjWzBdLndpZHRoID0gdGhpcy4kY1swXS53aWR0aDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh+fiAoKCh2IDwgMCkgPyAtMC41IDogMC41KSArICh2L3RoaXMuby5zdGVwKSkpICogdGhpcy5vLnN0ZXA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQWJzdHJhY3QgbWV0aG9kc1xyXG4gICAgICAgIHRoaXMubGlzdGVuID0gZnVuY3Rpb24gKCkge307IC8vIG9uIHN0YXJ0LCBvbmUgdGltZVxyXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZnVuY3Rpb24gKCkge307IC8vIGVhY2ggdGltZSBjb25maWd1cmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge307IC8vIGVhY2ggdGltZSBjb25maWd1cmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBmdW5jdGlvbiAodikge307IC8vIG9uIGNoYW5nZVxyXG4gICAgICAgIHRoaXMudmFsID0gZnVuY3Rpb24gKHYpIHt9OyAvLyBvbiByZWxlYXNlXHJcbiAgICAgICAgdGhpcy54eTJ2YWwgPSBmdW5jdGlvbiAoeCwgeSkge307IC8vXHJcbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24gKCkge307IC8vIG9uIGNoYW5nZSAvIG9uIHJlbGVhc2VcclxuICAgICAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9jbGVhcigpOyB9O1xyXG5cclxuICAgICAgICAvLyBVdGlsc1xyXG4gICAgICAgIHRoaXMuaDJyZ2JhID0gZnVuY3Rpb24gKGgsIGEpIHtcclxuICAgICAgICAgICAgdmFyIHJnYjtcclxuICAgICAgICAgICAgaCA9IGguc3Vic3RyaW5nKDEsNylcclxuICAgICAgICAgICAgcmdiID0gW3BhcnNlSW50KGguc3Vic3RyaW5nKDAsMiksMTYpXHJcbiAgICAgICAgICAgICAgICAgICAscGFyc2VJbnQoaC5zdWJzdHJpbmcoMiw0KSwxNilcclxuICAgICAgICAgICAgICAgICAgICxwYXJzZUludChoLnN1YnN0cmluZyg0LDYpLDE2KV07XHJcbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JbMF0gKyBcIixcIiArIHJnYlsxXSArIFwiLFwiICsgcmdiWzJdICsgXCIsXCIgKyBhICsgXCIpXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb3B5ID0gZnVuY3Rpb24gKGYsIHQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmKSB7IHRbaV0gPSBmW2ldOyB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogay5EaWFsXHJcbiAgICAgKi9cclxuICAgIGsuRGlhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBrLm8uY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnh5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yRXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLncyID0gbnVsbDtcclxuICAgICAgICB0aGlzLlBJMiA9IDIqTWF0aC5QSTtcclxuXHJcbiAgICAgICAgdGhpcy5leHRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubyA9ICQuZXh0ZW5kKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3IgOiB0aGlzLiQuZGF0YSgnYmdjb2xvcicpIHx8ICcjRUVFRUVFJyxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZU9mZnNldCA6IHRoaXMuJC5kYXRhKCdhbmdsZW9mZnNldCcpIHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVBcmMgOiB0aGlzLiQuZGF0YSgnYW5nbGVhcmMnKSB8fCAzNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy52YWwgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBpZiAobnVsbCAhPSB2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0gdGhpcy5vLnN0b3BwZXIgPyBtYXgobWluKHYsIHRoaXMuby5tYXgpLCB0aGlzLm8ubWluKSA6IHY7XHJcblx0XHR0aGlzLnYgPSB0aGlzLmN2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kLnZhbCh0aGlzLnYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMueHkydmFsID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgdmFyIGEsIHJldDtcclxuXHJcbiAgICAgICAgICAgIGEgPSBNYXRoLmF0YW4yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IC0gKHRoaXMueCArIHRoaXMudzIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgLSAoeSAtIHRoaXMueSAtIHRoaXMudzIpXHJcbiAgICAgICAgICAgICAgICAgICAgKSAtIHRoaXMuYW5nbGVPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFuZ2xlQXJjICE9IHRoaXMuUEkyICYmIChhIDwgMCkgJiYgKGEgPiAtMC41KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgaXNzZXQgYW5nbGVBcmMgb3B0aW9uLCBzZXQgdG8gbWluIGlmIC41IHVuZGVyIG1pblxyXG4gICAgICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGEgKz0gdGhpcy5QSTI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldCA9IH5+ICgwLjUgKyAoYSAqICh0aGlzLm8ubWF4IC0gdGhpcy5vLm1pbikgLyB0aGlzLmFuZ2xlQXJjKSlcclxuICAgICAgICAgICAgICAgICAgICArIHRoaXMuby5taW47XHJcblxyXG4gICAgICAgICAgICB0aGlzLm8uc3RvcHBlclxyXG4gICAgICAgICAgICAmJiAocmV0ID0gbWF4KG1pbihyZXQsIHRoaXMuby5tYXgpLCB0aGlzLm8ubWluKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubGlzdGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBiaW5kIE1vdXNlV2hlZWxcclxuICAgICAgICAgICAgdmFyIHMgPSB0aGlzLCBtd1RpbWVyU3RvcCwgbXdUaW1lclJlbGVhc2UsXHJcbiAgICAgICAgICAgICAgICBtdyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaSA9IGUub3JpZ2luYWxFdmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxkZWx0YVggPSBvcmkuZGV0YWlsIHx8IG9yaS53aGVlbERlbHRhWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxkZWx0YVkgPSBvcmkuZGV0YWlsIHx8IG9yaS53aGVlbERlbHRhWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICx2ID0gcy5fdmFsaWRhdGUocy4kLnZhbCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChkZWx0YVg+MCB8fCBkZWx0YVk+MCA/IHMuby5zdGVwIDogZGVsdGFYPDAgfHwgZGVsdGFZPDAgPyAtcy5vLnN0ZXAgOiAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gbWF4KG1pbih2LCBzLm8ubWF4KSwgcy5vLm1pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuckgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbW91c2V3aGVlbCBzdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG13VGltZXJTdG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd1RpbWVyU3RvcCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuckgodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJTdG9wID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbW91c2V3aGVlbCByZWxlYXNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFtd1RpbWVyUmVsZWFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd1RpbWVyUmVsZWFzZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtd1RpbWVyU3RvcCkgcy5ySCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwga3ZhbCwgdG8sIG0gPSAxLCBrdiA9IHszNzotcy5vLnN0ZXAsIDM4OnMuby5zdGVwLCAzOTpzLm8uc3RlcCwgNDA6LXMuby5zdGVwfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJFxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtjID0gZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnVtcGFkIHN1cHBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoa2MgPj0gOTYgJiYga2MgPD0gMTA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYyA9IGUua2V5Q29kZSA9IGtjIC0gNDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGt2YWwgPSBwYXJzZUludChTdHJpbmcuZnJvbUNoYXJDb2RlKGtjKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oa3ZhbCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2MgIT09IDEzKSAgICAgICAgIC8vIGVudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoa2MgIT09IDgpICAgICAgIC8vIGJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoa2MgIT09IDkpICAgICAgIC8vIHRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKGtjICE9PSAxODkpICAgICAvLyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGtjLFszNywzOCwzOSw0MF0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcGFyc2VJbnQocy4kLnZhbCgpKSArIGt2W2tjXSAqIG07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuby5zdG9wcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHYgPSBtYXgobWluKHYsIHMuby5tYXgpLCBzLm8ubWluKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hhbmdlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9uZyB0aW1lIGtleWRvd24gc3BlZWQtdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byA9IHdpbmRvdy5zZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IG0qPTI7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5dXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oa3ZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLiQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga3ZhbCBwb3N0Y29uZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMuJC52YWwoKSA+IHMuby5tYXggJiYgcy4kLnZhbChzLm8ubWF4KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzLiQudmFsKCkgPCBzLm8ubWluICYmIHMuJC52YWwocy5vLm1pbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRjLmJpbmQoXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIG13KTtcclxuICAgICAgICAgICAgdGhpcy4kLmJpbmQoXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIG13KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMudiA8IHRoaXMuby5taW5cclxuICAgICAgICAgICAgICAgIHx8IHRoaXMudiA+IHRoaXMuby5tYXhcclxuICAgICAgICAgICAgKSB0aGlzLnYgPSB0aGlzLm8ubWluO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kLnZhbCh0aGlzLnYpO1xyXG4gICAgICAgICAgICB0aGlzLncyID0gdGhpcy53IC8gMjtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3JFeHQgPSB0aGlzLm8uY3Vyc29yIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnh5ID0gdGhpcy53MiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVdpZHRoID0gdGhpcy54eSAqIHRoaXMuby50aGlja25lc3M7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUNhcCA9IHRoaXMuby5saW5lQ2FwO1xyXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMueHkgLSB0aGlzLmxpbmVXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm8uYW5nbGVPZmZzZXRcclxuICAgICAgICAgICAgJiYgKHRoaXMuby5hbmdsZU9mZnNldCA9IGlzTmFOKHRoaXMuby5hbmdsZU9mZnNldCkgPyAwIDogdGhpcy5vLmFuZ2xlT2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuby5hbmdsZUFyY1xyXG4gICAgICAgICAgICAmJiAodGhpcy5vLmFuZ2xlQXJjID0gaXNOYU4odGhpcy5vLmFuZ2xlQXJjKSA/IHRoaXMuUEkyIDogdGhpcy5vLmFuZ2xlQXJjKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRlZyB0byByYWRcclxuICAgICAgICAgICAgdGhpcy5hbmdsZU9mZnNldCA9IHRoaXMuby5hbmdsZU9mZnNldCAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGVBcmMgPSB0aGlzLm8uYW5nbGVBcmMgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgICAgICAgICAgLy8gY29tcHV0ZSBzdGFydCBhbmQgZW5kIGFuZ2xlc1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSAxLjUgKiBNYXRoLlBJICsgdGhpcy5hbmdsZU9mZnNldDtcclxuICAgICAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDEuNSAqIE1hdGguUEkgKyB0aGlzLmFuZ2xlT2Zmc2V0ICsgdGhpcy5hbmdsZUFyYztcclxuXHJcbiAgICAgICAgICAgIHZhciBzID0gbWF4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKE1hdGguYWJzKHRoaXMuby5tYXgpKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgU3RyaW5nKE1hdGguYWJzKHRoaXMuby5taW4pKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIDI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm8uZGlzcGxheUlucHV0XHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJyA6ICgodGhpcy53IC8gMiArIDQpID4+IDApICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ2hlaWdodCcgOiAoKHRoaXMudyAvIDMpID4+IDApICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ3Bvc2l0aW9uJyA6ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCd2ZXJ0aWNhbC1hbGlnbicgOiAnbWlkZGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ21hcmdpbi10b3AnIDogKCh0aGlzLncgLyAzKSA+PiAwKSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdtYXJnaW4tbGVmdCcgOiAnLScgKyAoKHRoaXMudyAqIDMgLyA0ICsgMikgPj4gMCkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnYm9yZGVyJyA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdiYWNrZ3JvdW5kJyA6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ2ZvbnQnIDogdGhpcy5vLmZvbnRXZWlnaHQgKyAnICcgKyAoKHRoaXMudyAvIHMpID4+IDApICsgJ3B4ICcgKyB0aGlzLm8uZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ3RleHQtYWxpZ24nIDogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdjb2xvcicgOiB0aGlzLm8uaW5wdXRDb2xvciB8fCB0aGlzLm8uZmdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ3BhZGRpbmcnIDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMuaS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnIDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCd2aXNpYmlsaXR5JyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgaWYgKHYgPT0gdGhpcy5jdikgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmN2ID0gdjtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jSFxyXG4gICAgICAgICAgICAgICAgJiYgKHRoaXMuY0godikgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICApIHJldHVybjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFuZ2xlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh2IC0gdGhpcy5vLm1pbikgKiB0aGlzLmFuZ2xlQXJjIC8gKHRoaXMuby5tYXggLSB0aGlzLm8ubWluKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuZywgICAgICAgICAgICAgICAgIC8vIGNvbnRleHRcclxuICAgICAgICAgICAgICAgIGEgPSB0aGlzLmFuZ2xlKHRoaXMuY3YpICAgIC8vIEFuZ2xlXHJcbiAgICAgICAgICAgICAgICAsIHNhdCA9IHRoaXMuc3RhcnRBbmdsZSAgICAgLy8gU3RhcnQgYW5nbGVcclxuICAgICAgICAgICAgICAgICwgZWF0ID0gc2F0ICsgYSAgICAgICAgICAgICAvLyBFbmQgYW5nbGVcclxuICAgICAgICAgICAgICAgICwgc2EsIGVhICAgICAgICAgICAgICAgICAgICAvLyBQcmV2aW91cyBhbmdsZXNcclxuICAgICAgICAgICAgICAgICwgciA9IDE7XHJcblxyXG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG5cclxuICAgICAgICAgICAgYy5saW5lQ2FwID0gdGhpcy5saW5lQ2FwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vLmN1cnNvclxyXG4gICAgICAgICAgICAgICAgJiYgKHNhdCA9IGVhdCAtIHRoaXMuY3Vyc29yRXh0KVxyXG4gICAgICAgICAgICAgICAgJiYgKGVhdCA9IGVhdCArIHRoaXMuY3Vyc29yRXh0KTtcclxuXHJcbiAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5vLmJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cywgdGhpcy5lbmRBbmdsZSAtIDAuMDAwMDEsIHRoaXMuc3RhcnRBbmdsZSArIDAuMDAwMDEsIHRydWUpO1xyXG4gICAgICAgICAgICBjLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuby5kaXNwbGF5UHJldmlvdXMpIHtcclxuICAgICAgICAgICAgICAgIGVhID0gdGhpcy5zdGFydEFuZ2xlICsgdGhpcy5hbmdsZSh0aGlzLnYpO1xyXG4gICAgICAgICAgICAgICAgc2EgPSB0aGlzLnN0YXJ0QW5nbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm8uY3Vyc29yXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHNhID0gZWEgLSB0aGlzLmN1cnNvckV4dClcclxuICAgICAgICAgICAgICAgICAgICAmJiAoZWEgPSBlYSArIHRoaXMuY3Vyc29yRXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLnBDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cywgc2EgLSAwLjAwMDAxLCBlYSArIDAuMDAwMDEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICByID0gKHRoaXMuY3YgPT0gdGhpcy52KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSByID8gdGhpcy5vLmZnQ29sb3IgOiB0aGlzLmZnQ29sb3IgO1xyXG4gICAgICAgICAgICAgICAgYy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMsIHNhdCAtIDAuMDAwMDEsIGVhdCArIDAuMDAwMDEsIGZhbHNlKTtcclxuICAgICAgICAgICAgYy5zdHJva2UoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52YWwodGhpcy52KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLmRpYWwgPSAkLmZuLmtub2IgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IGsuRGlhbCgpO1xyXG4gICAgICAgICAgICAgICAgZC5vID0gbztcclxuICAgICAgICAgICAgICAgIGQuJCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBkLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS5wYXJlbnQoKTtcclxuICAgIH07XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvKlxyXG4gKiBqUXVlcnkgT25lIFBhZ2UgTmF2IFBsdWdpblxyXG4gKiBodHRwOi8vZ2l0aHViLmNvbS9kYXZpc3QxMS9qUXVlcnktT25lLVBhZ2UtTmF2XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCBUcmV2b3IgRGF2aXMgKGh0dHA6Ly90cmV2b3JkYXZpcy5uZXQpXHJcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxyXG4gKiBVc2VzIHRoZSBzYW1lIGxpY2Vuc2UgYXMgalF1ZXJ5LCBzZWU6XHJcbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcclxuICpcclxuICogQHZlcnNpb24gMy4wLjBcclxuICpcclxuICogRXhhbXBsZSB1c2FnZTpcclxuICogJCgnI25hdicpLm9uZVBhZ2VOYXYoe1xyXG4gKiAgIGN1cnJlbnRDbGFzczogJ2N1cnJlbnQnLFxyXG4gKiAgIGNoYW5nZUhhc2g6IGZhbHNlLFxyXG4gKiAgIHNjcm9sbFNwZWVkOiA3NTBcclxuICogfSk7XHJcbiAqL1xyXG5cclxuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpe1xyXG5cclxuXHQvLyBvdXIgcGx1Z2luIGNvbnN0cnVjdG9yXHJcblx0dmFyIE9uZVBhZ2VOYXYgPSBmdW5jdGlvbihlbGVtLCBvcHRpb25zKXtcclxuXHRcdHRoaXMuZWxlbSA9IGVsZW07XHJcblx0XHR0aGlzLiRlbGVtID0gJChlbGVtKTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLm1ldGFkYXRhID0gdGhpcy4kZWxlbS5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0dGhpcy4kd2luID0gJCh3aW5kb3cpO1xyXG5cdFx0dGhpcy5zZWN0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy5kaWRTY3JvbGwgPSBmYWxzZTtcclxuXHRcdHRoaXMuJGRvYyA9ICQoZG9jdW1lbnQpO1xyXG5cdFx0dGhpcy5kb2NIZWlnaHQgPSB0aGlzLiRkb2MuaGVpZ2h0KCk7XHJcblx0fTtcclxuXHJcblx0Ly8gdGhlIHBsdWdpbiBwcm90b3R5cGVcclxuXHRPbmVQYWdlTmF2LnByb3RvdHlwZSA9IHtcclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdG5hdkl0ZW1zOiAnYScsXHJcblx0XHRcdGN1cnJlbnRDbGFzczogJ2N1cnJlbnQnLFxyXG5cdFx0XHRjaGFuZ2VIYXNoOiBmYWxzZSxcclxuXHRcdFx0ZWFzaW5nOiAnc3dpbmcnLFxyXG5cdFx0XHRmaWx0ZXI6ICcnLFxyXG5cdFx0XHRzY3JvbGxTcGVlZDogNzUwLFxyXG5cdFx0XHRzY3JvbGxUaHJlc2hvbGQ6IDAuNSxcclxuXHRcdFx0YmVnaW46IGZhbHNlLFxyXG5cdFx0XHRlbmQ6IGZhbHNlLFxyXG5cdFx0XHRzY3JvbGxDaGFuZ2U6IGZhbHNlXHJcblx0XHR9LFxyXG5cclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBJbnRyb2R1Y2UgZGVmYXVsdHMgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgZWl0aGVyXHJcblx0XHRcdC8vIGdsb2JhbGx5IG9yIHVzaW5nIGFuIG9iamVjdCBsaXRlcmFsLlxyXG5cdFx0XHR0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLm9wdGlvbnMsIHRoaXMubWV0YWRhdGEpO1xyXG5cclxuXHRcdFx0dGhpcy4kbmF2ID0gdGhpcy4kZWxlbS5maW5kKHRoaXMuY29uZmlnLm5hdkl0ZW1zKTtcclxuXHJcblx0XHRcdC8vRmlsdGVyIGFueSBsaW5rcyBvdXQgb2YgdGhlIG5hdlxyXG5cdFx0XHRpZih0aGlzLmNvbmZpZy5maWx0ZXIgIT09ICcnKSB7XHJcblx0XHRcdFx0dGhpcy4kbmF2ID0gdGhpcy4kbmF2LmZpbHRlcih0aGlzLmNvbmZpZy5maWx0ZXIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL0hhbmRsZSBjbGlja3Mgb24gdGhlIG5hdlxyXG5cdFx0XHR0aGlzLiRuYXYub24oJ2NsaWNrLm9uZVBhZ2VOYXYnLCAkLnByb3h5KHRoaXMuaGFuZGxlQ2xpY2ssIHRoaXMpKTtcclxuXHJcblx0XHRcdC8vR2V0IHRoZSBzZWN0aW9uIHBvc2l0aW9uc1xyXG5cdFx0XHR0aGlzLmdldFBvc2l0aW9ucygpO1xyXG5cclxuXHRcdFx0Ly9IYW5kbGUgc2Nyb2xsIGNoYW5nZXNcclxuXHRcdFx0dGhpcy5iaW5kSW50ZXJ2YWwoKTtcclxuXHJcblx0XHRcdC8vVXBkYXRlIHRoZSBwb3NpdGlvbnMgb24gcmVzaXplIHRvb1xyXG5cdFx0XHR0aGlzLiR3aW4ub24oJ3Jlc2l6ZS5vbmVQYWdlTmF2JywgJC5wcm94eSh0aGlzLmdldFBvc2l0aW9ucywgdGhpcykpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFkanVzdE5hdjogZnVuY3Rpb24oc2VsZiwgJHBhcmVudCkge1xyXG5cdFx0XHRzZWxmLiRlbGVtLmZpbmQoJy4nICsgc2VsZi5jb25maWcuY3VycmVudENsYXNzKS5yZW1vdmVDbGFzcyhzZWxmLmNvbmZpZy5jdXJyZW50Q2xhc3MpO1xyXG5cdFx0XHQkcGFyZW50LmFkZENsYXNzKHNlbGYuY29uZmlnLmN1cnJlbnRDbGFzcyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJpbmRJbnRlcnZhbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dmFyIGRvY0hlaWdodDtcclxuXHJcblx0XHRcdHNlbGYuJHdpbi5vbignc2Nyb2xsLm9uZVBhZ2VOYXYnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzZWxmLmRpZFNjcm9sbCA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2VsZi50ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZG9jSGVpZ2h0ID0gc2VsZi4kZG9jLmhlaWdodCgpO1xyXG5cclxuXHRcdFx0XHQvL0lmIGl0IHdhcyBzY3JvbGxlZFxyXG5cdFx0XHRcdGlmKHNlbGYuZGlkU2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRzZWxmLmRpZFNjcm9sbCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0c2VsZi5zY3JvbGxDaGFuZ2UoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vSWYgdGhlIGRvY3VtZW50IGhlaWdodCBjaGFuZ2VzXHJcblx0XHRcdFx0aWYoZG9jSGVpZ2h0ICE9PSBzZWxmLmRvY0hlaWdodCkge1xyXG5cdFx0XHRcdFx0c2VsZi5kb2NIZWlnaHQgPSBkb2NIZWlnaHQ7XHJcblx0XHRcdFx0XHRzZWxmLmdldFBvc2l0aW9ucygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0SGFzaDogZnVuY3Rpb24oJGxpbmspIHtcclxuXHRcdFx0cmV0dXJuICRsaW5rLmF0dHIoJ2hyZWYnKS5zcGxpdCgnIycpWzFdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHZhciBsaW5rSHJlZjtcclxuXHRcdFx0dmFyIHRvcFBvcztcclxuXHRcdFx0dmFyICR0YXJnZXQ7XHJcblxyXG5cdFx0XHRzZWxmLiRuYXYuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsaW5rSHJlZiA9IHNlbGYuZ2V0SGFzaCgkKHRoaXMpKTtcclxuXHRcdFx0XHQkdGFyZ2V0ID0gJCgnIycgKyBsaW5rSHJlZik7XHJcblxyXG5cdFx0XHRcdGlmKCR0YXJnZXQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0b3BQb3MgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcDtcclxuXHRcdFx0XHRcdHNlbGYuc2VjdGlvbnNbbGlua0hyZWZdID0gTWF0aC5yb3VuZCh0b3BQb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFNlY3Rpb246IGZ1bmN0aW9uKHdpbmRvd1Bvcykge1xyXG5cdFx0XHR2YXIgcmV0dXJuVmFsdWUgPSBudWxsO1xyXG5cdFx0XHR2YXIgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLiR3aW4uaGVpZ2h0KCkgKiB0aGlzLmNvbmZpZy5zY3JvbGxUaHJlc2hvbGQpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBzZWN0aW9uIGluIHRoaXMuc2VjdGlvbnMpIHtcclxuXHRcdFx0XHRpZigodGhpcy5zZWN0aW9uc1tzZWN0aW9uXSAtIHdpbmRvd0hlaWdodCkgPCB3aW5kb3dQb3MpIHtcclxuXHRcdFx0XHRcdHJldHVyblZhbHVlID0gc2VjdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXR1cm5WYWx1ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgJGxpbmsgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblx0XHRcdHZhciAkcGFyZW50ID0gJGxpbmsucGFyZW50KCk7XHJcblx0XHRcdHZhciBuZXdMb2MgPSAnIycgKyBzZWxmLmdldEhhc2goJGxpbmspO1xyXG5cclxuXHRcdFx0aWYoISRwYXJlbnQuaGFzQ2xhc3Moc2VsZi5jb25maWcuY3VycmVudENsYXNzKSkge1xyXG5cdFx0XHRcdC8vU3RhcnQgY2FsbGJhY2tcclxuXHRcdFx0XHRpZihzZWxmLmNvbmZpZy5iZWdpbikge1xyXG5cdFx0XHRcdFx0c2VsZi5jb25maWcuYmVnaW4oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ2hhbmdlIHRoZSBoaWdobGlnaHRlZCBuYXYgaXRlbVxyXG5cdFx0XHRcdHNlbGYuYWRqdXN0TmF2KHNlbGYsICRwYXJlbnQpO1xyXG5cclxuXHRcdFx0XHQvL1JlbW92aW5nIHRoZSBhdXRvLWFkanVzdCBvbiBzY3JvbGxcclxuXHRcdFx0XHRzZWxmLnVuYmluZEludGVydmFsKCk7XHJcblxyXG5cdFx0XHRcdC8vU2Nyb2xsIHRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uXHJcblx0XHRcdFx0c2VsZi5zY3JvbGxUbyhuZXdMb2MsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Ly9EbyB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgaGFzaD9cclxuXHRcdFx0XHRcdGlmKHNlbGYuY29uZmlnLmNoYW5nZUhhc2gpIHtcclxuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdMb2M7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9BZGQgdGhlIGF1dG8tYWRqdXN0IG9uIHNjcm9sbCBiYWNrIGluXHJcblx0XHRcdFx0XHRzZWxmLmJpbmRJbnRlcnZhbCgpO1xyXG5cclxuXHRcdFx0XHRcdC8vRW5kIGNhbGxiYWNrXHJcblx0XHRcdFx0XHRpZihzZWxmLmNvbmZpZy5lbmQpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5jb25maWcuZW5kKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2Nyb2xsQ2hhbmdlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHdpbmRvd1RvcCA9IHRoaXMuJHdpbi5zY3JvbGxUb3AoKTtcclxuXHRcdFx0dmFyIHBvc2l0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHdpbmRvd1RvcCk7XHJcblx0XHRcdHZhciAkcGFyZW50O1xyXG5cclxuXHRcdFx0Ly9JZiB0aGUgcG9zaXRpb24gaXMgc2V0XHJcblx0XHRcdGlmKHBvc2l0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdFx0JHBhcmVudCA9IHRoaXMuJGVsZW0uZmluZCgnYVtocmVmJD1cIiMnICsgcG9zaXRpb24gKyAnXCJdJykucGFyZW50KCk7XHJcblxyXG5cdFx0XHRcdC8vSWYgaXQncyBub3QgYWxyZWFkeSB0aGUgY3VycmVudCBzZWN0aW9uXHJcblx0XHRcdFx0aWYoISRwYXJlbnQuaGFzQ2xhc3ModGhpcy5jb25maWcuY3VycmVudENsYXNzKSkge1xyXG5cdFx0XHRcdFx0Ly9DaGFuZ2UgdGhlIGhpZ2hsaWdodGVkIG5hdiBpdGVtXHJcblx0XHRcdFx0XHR0aGlzLmFkanVzdE5hdih0aGlzLCAkcGFyZW50KTtcclxuXHJcblx0XHRcdFx0XHQvL0lmIHRoZXJlIGlzIGEgc2Nyb2xsQ2hhbmdlIGNhbGxiYWNrXHJcblx0XHRcdFx0XHRpZih0aGlzLmNvbmZpZy5zY3JvbGxDaGFuZ2UpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcuc2Nyb2xsQ2hhbmdlKCRwYXJlbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzY3JvbGxUbzogZnVuY3Rpb24odGFyZ2V0LCBjYWxsYmFjaykge1xyXG5cdFx0XHR2YXIgb2Zmc2V0ID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcclxuXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IG9mZnNldFxyXG5cdFx0XHR9LCB0aGlzLmNvbmZpZy5zY3JvbGxTcGVlZCwgdGhpcy5jb25maWcuZWFzaW5nLCBjYWxsYmFjayk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVuYmluZEludGVydmFsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnQpO1xyXG5cdFx0XHR0aGlzLiR3aW4udW5iaW5kKCdzY3JvbGwub25lUGFnZU5hdicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdE9uZVBhZ2VOYXYuZGVmYXVsdHMgPSBPbmVQYWdlTmF2LnByb3RvdHlwZS5kZWZhdWx0cztcclxuXHJcblx0JC5mbi5vbmVQYWdlTmF2ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0bmV3IE9uZVBhZ2VOYXYodGhpcywgb3B0aW9ucykuaW5pdCgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcbn0pKCBqUXVlcnksIHdpbmRvdyAsIGRvY3VtZW50ICk7IiwiIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIC8vIFZlZ2FzIC0gRnVsbHNjcmVlbiBCYWNrZ3JvdW5kcyBhbmQgU2xpZGVzaG93cyB3aXRoIGpRdWVyeS5cclxuIC8vIHYxLjMuNCAtIHJlbGVhc2VkIDIwMTMtMTItMTYgMTM6MjhcclxuIC8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuIC8vIGh0dHA6Ly92ZWdhcy5qYXlzYWx2YXQuY29tL1xyXG4gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gLy8gQ29weXJpZ2h0IChDKSAyMDEwLTIwMTMgSmF5IFNhbHZhdFxyXG4gLy8gaHR0cDovL2pheXNhbHZhdC5jb20vXHJcbiAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChhLG4pe3ZhciBvPXthbGlnbjpcImNlbnRlclwiLHZhbGlnbjpcImNlbnRlclwifTtpZihlLmV4dGVuZChvLG4pLDA9PT1hLmhlaWdodCgpKXJldHVybiBhLmxvYWQoZnVuY3Rpb24oKXt0KGUodGhpcyksbil9KSx2b2lkIDA7dmFyIGkscyxnLGQ9cigpLGw9ZC53aWR0aCx1PWQuaGVpZ2h0LGM9YS53aWR0aCgpLHY9YS5oZWlnaHQoKSxwPXUvbCxmPXYvYztwPmY/KGk9dS9mLHM9dSk6KGk9bCxzPWwqZiksZz17d2lkdGg6aStcInB4XCIsaGVpZ2h0OnMrXCJweFwiLHRvcDpcImF1dG9cIixib3R0b206XCJhdXRvXCIsbGVmdDpcImF1dG9cIixyaWdodDpcImF1dG9cIn0saXNOYU4ocGFyc2VJbnQoby52YWxpZ24sMTApKT9cInRvcFwiPT1vLnZhbGlnbj9nLnRvcD0wOlwiYm90dG9tXCI9PW8udmFsaWduP2cuYm90dG9tPTA6Zy50b3A9KHUtcykvMjpnLnRvcD0wLShzLXUpLzEwMCpwYXJzZUludChvLnZhbGlnbiwxMCkrXCJweFwiLGlzTmFOKHBhcnNlSW50KG8uYWxpZ24sMTApKT9cImxlZnRcIj09by5hbGlnbj9nLmxlZnQ9MDpcInJpZ2h0XCI9PW8uYWxpZ24/Zy5yaWdodD0wOmcubGVmdD0obC1pKS8yOmcubGVmdD0wLShpLWwpLzEwMCpwYXJzZUludChvLmFsaWduLDEwKStcInB4XCIsYS5jc3MoZyl9ZnVuY3Rpb24gYSgpe2QucHJlcGVuZFRvKFwiYm9keVwiKS5mYWRlSW4oKX1mdW5jdGlvbiBuKCl7ZC5mYWRlT3V0KFwiZmFzdFwiLGZ1bmN0aW9uKCl7ZSh0aGlzKS5yZW1vdmUoKX0pfWZ1bmN0aW9uIG8oKXtyZXR1cm4gZShcImJvZHlcIikuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIpP2UoXCJib2R5XCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiKS5yZXBsYWNlKC91cmxcXChcIj8oLio/KVwiP1xcKS9pLFwiJDFcIik6dm9pZCAwfWZ1bmN0aW9uIHIoKXt2YXIgZT13aW5kb3csdD1cImlubmVyXCI7cmV0dXJuXCJpbm5lcldpZHRoXCJpbiB3aW5kb3d8fChlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudHx8ZG9jdW1lbnQuYm9keSx0PVwiY2xpZW50XCIpLHt3aWR0aDplW3QrXCJXaWR0aFwiXSxoZWlnaHQ6ZVt0K1wiSGVpZ2h0XCJdfX12YXIgaSxzPWUoXCI8aW1nIC8+XCIpLmFkZENsYXNzKFwidmVnYXMtYmFja2dyb3VuZFwiKSxnPWUoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidmVnYXMtb3ZlcmxheVwiKSxkPWUoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidmVnYXMtbG9hZGluZ1wiKSxsPWUoKSx1PW51bGwsYz1bXSx2PTAscD01ZTMsZj1mdW5jdGlvbigpe30saD17aW5pdDpmdW5jdGlvbihyKXt2YXIgaT17c3JjOm8oKSxhbGlnbjpcImNlbnRlclwiLHZhbGlnbjpcImNlbnRlclwiLGZhZGU6MCxsb2FkaW5nOiEwLGxvYWQ6ZnVuY3Rpb24oKXt9LGNvbXBsZXRlOmZ1bmN0aW9uKCl7fX07ZS5leHRlbmQoaSxlLnZlZ2FzLmRlZmF1bHRzLmJhY2tncm91bmQsciksaS5sb2FkaW5nJiZhKCk7dmFyIGc9cy5jbG9uZSgpO3JldHVybiBnLmNzcyh7cG9zaXRpb246XCJmaXhlZFwiLGxlZnQ6XCIwcHhcIix0b3A6XCIwcHhcIn0pLmJpbmQoXCJsb2FkXCIsZnVuY3Rpb24oKXtnIT1sJiYoZSh3aW5kb3cpLmJpbmQoXCJsb2FkIHJlc2l6ZS52ZWdhc1wiLGZ1bmN0aW9uKCl7dChnLGkpfSksbC5pcyhcImltZ1wiKT8obC5zdG9wKCksZy5oaWRlKCkuaW5zZXJ0QWZ0ZXIobCkuZmFkZUluKGkuZmFkZSxmdW5jdGlvbigpe2UoXCIudmVnYXMtYmFja2dyb3VuZFwiKS5ub3QodGhpcykucmVtb3ZlKCksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzY29tcGxldGVcIixbdGhpcyx2LTFdKSxpLmNvbXBsZXRlLmFwcGx5KGcsW3YtMV0pfSkpOmcuaGlkZSgpLnByZXBlbmRUbyhcImJvZHlcIikuZmFkZUluKGkuZmFkZSxmdW5jdGlvbigpe2UoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc2NvbXBsZXRlXCIsW3RoaXMsdi0xXSksaS5jb21wbGV0ZS5hcHBseSh0aGlzLFt2LTFdKX0pLGw9Zyx0KGwsaSksaS5sb2FkaW5nJiZuKCksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzbG9hZFwiLFtsLmdldCgwKSx2LTFdKSxpLmxvYWQuYXBwbHkobC5nZXQoMCksW3YtMV0pLHYmJihlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXN3YWxrXCIsW2wuZ2V0KDApLHYtMV0pLGkud2Fsay5hcHBseShsLmdldCgwKSxbdi0xXSkpKX0pLmF0dHIoXCJzcmNcIixpLnNyYyksZS52ZWdhc30sZGVzdHJveTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJiYWNrZ3JvdW5kXCIhPXR8fChlKFwiLnZlZ2FzLWJhY2tncm91bmQsIC52ZWdhcy1sb2FkaW5nXCIpLnJlbW92ZSgpLGUod2luZG93KS51bmJpbmQoXCIqLnZlZ2FzXCIpLGw9ZSgpKSx0JiZcIm92ZXJsYXlcIiE9dHx8ZShcIi52ZWdhcy1vdmVybGF5XCIpLnJlbW92ZSgpLGNsZWFySW50ZXJ2YWwoaSksZS52ZWdhc30sb3ZlcmxheTpmdW5jdGlvbih0KXt2YXIgYT17c3JjOm51bGwsb3BhY2l0eTpudWxsfTtyZXR1cm4gZS5leHRlbmQoYSxlLnZlZ2FzLmRlZmF1bHRzLm92ZXJsYXksdCksZy5yZW1vdmUoKSxnLmNzcyh7bWFyZ2luOlwiMFwiLHBhZGRpbmc6XCIwXCIscG9zaXRpb246XCJmaXhlZFwiLGxlZnQ6XCIwcHhcIix0b3A6XCIwcHhcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxhLnNyYz09PSExJiZnLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLFwibm9uZVwiKSxhLnNyYyYmZy5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIixcInVybChcIithLnNyYytcIilcIiksYS5vcGFjaXR5JiZnLmNzcyhcIm9wYWNpdHlcIixhLm9wYWNpdHkpLGcucHJlcGVuZFRvKFwiYm9keVwiKSxlLnZlZ2FzfSxzbGlkZXNob3c6ZnVuY3Rpb24odCxhKXt2YXIgbj17c3RlcDp2LGRlbGF5OnAscHJlbG9hZDohMSxsb2FkaW5nOiEwLGJhY2tncm91bmRzOmMsd2FsazpmfTtpZihlLmV4dGVuZChuLGUudmVnYXMuZGVmYXVsdHMuc2xpZGVzaG93LHQpLG4uYmFja2dyb3VuZHMhPWMmJih0LnN0ZXB8fChuLnN0ZXA9MCksdC53YWxrfHwobi53YWxrPWZ1bmN0aW9uKCl7fSksbi5wcmVsb2FkJiZlLnZlZ2FzKFwicHJlbG9hZFwiLG4uYmFja2dyb3VuZHMpKSxjPW4uYmFja2dyb3VuZHMscD1uLmRlbGF5LHY9bi5zdGVwLGY9bi53YWxrLGNsZWFySW50ZXJ2YWwoaSksIWMubGVuZ3RoKXJldHVybiBlLnZlZ2FzO3ZhciBvPWZ1bmN0aW9uKCl7MD52JiYodj1jLmxlbmd0aC0xKSwodj49Yy5sZW5ndGh8fCFjW3YtMV0pJiYodj0wKTt2YXIgdD1jW3YrK107dC53YWxrPW4ud2Fsayx0LmxvYWRpbmc9bi5sb2FkaW5nLHQuZmFkZT09PXZvaWQgMCYmKHQuZmFkZT1uLmZhZGUpLHQuZmFkZT5uLmRlbGF5JiYodC5mYWRlPW4uZGVsYXkpLGUudmVnYXModCl9O3JldHVybiBvKCksYXx8KHU9ITEsZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2Fzc3RhcnRcIixbbC5nZXQoMCksdi0xXSkpLHV8fChpPXNldEludGVydmFsKG8sbi5kZWxheSkpLGUudmVnYXN9LG5leHQ6ZnVuY3Rpb24oKXt2YXIgdD12O3JldHVybiB2JiYoZS52ZWdhcyhcInNsaWRlc2hvd1wiLHtzdGVwOnZ9LCEwKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNuZXh0XCIsW2wuZ2V0KDApLHYtMSx0LTFdKSksZS52ZWdhc30scHJldmlvdXM6ZnVuY3Rpb24oKXt2YXIgdD12O3JldHVybiB2JiYoZS52ZWdhcyhcInNsaWRlc2hvd1wiLHtzdGVwOnYtMn0sITApLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc3ByZXZpb3VzXCIsW2wuZ2V0KDApLHYtMSx0LTFdKSksZS52ZWdhc30sanVtcDpmdW5jdGlvbih0KXt2YXIgYT12O3JldHVybiB2JiYoZS52ZWdhcyhcInNsaWRlc2hvd1wiLHtzdGVwOnR9LCEwKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNqdW1wXCIsW2wuZ2V0KDApLHYtMSxhLTFdKSksZS52ZWdhc30sc3RvcDpmdW5jdGlvbigpe3ZhciB0PXY7cmV0dXJuIHY9MCx1PW51bGwsY2xlYXJJbnRlcnZhbChpKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNzdG9wXCIsW2wuZ2V0KDApLHQtMV0pLGUudmVnYXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIHU9ITAsY2xlYXJJbnRlcnZhbChpKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNwYXVzZVwiLFtsLmdldCgwKSx2LTFdKSxlLnZlZ2FzfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lfHxcImJhY2tncm91bmRcIj09ZT9sLmdldCgwKTpcIm92ZXJsYXlcIj09ZT9nLmdldCgwKTpcInN0ZXBcIj09ZT92LTE6XCJwYXVzZWRcIj09ZT91OnZvaWQgMH0scHJlbG9hZDpmdW5jdGlvbih0KXt2YXIgYT1bXTtmb3IodmFyIG4gaW4gdClpZih0W25dLnNyYyl7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtvLnNyYz10W25dLnNyYyxhLnB1c2gobyl9cmV0dXJuIGUudmVnYXN9fTtlLnZlZ2FzPWZ1bmN0aW9uKHQpe3JldHVybiBoW3RdP2hbdF0uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiB0JiZ0PyhlLmVycm9yKFwiTWV0aG9kIFwiK3QrXCIgZG9lcyBub3QgZXhpc3RcIiksdm9pZCAwKTpoLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLnZlZ2FzLmRlZmF1bHRzPXtiYWNrZ3JvdW5kOnt9LHNsaWRlc2hvdzp7fSxvdmVybGF5Ont9fX0pKGpRdWVyeSk7IiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogbWlzYy5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4kKCd1bC5kcm9wZG93bi1tZW51JykuZmluZCgnbGknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyByZW1vdmUgdGhlICdvcGVuJyBjbGFzcyBvbiB0aGUgcGFyZW50IGVsZW1lbnQgXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bi1tZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLW1lbnUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG4qL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE1pc2NlbGxhbmVvdXMgQ2FsZW5kYXIgZnVuY3Rpb25zXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICQoIFwiIzNNb25DYWxcIiApLmRhdGVwaWNrZXIoe1xyXG4vLyAgICAgICAgbnVtYmVyT2ZNb250aHM6IDIsXHJcbi8vICAgICAgICBzaG93QnV0dG9uUGFuZWw6IHRydWVcclxuLy8gICAgfSk7XHJcbi8vfSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q2FsZW5kYXJIVE1MKG1vLCB5ciwgc2hvd1RvZGF5KXtcclxuICAgIC8vIG1vID0gemVyby1iYXNlZCBtb250aCBudW1iZXJcclxuICAgIC8vIHlyID0gNCBkaWdpdCB5ZWFyIFlZWVlcclxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIHRoZSBtb250aCBuYW1lc1xyXG4gICAgdmFyIE0gPSBuZXcgQXJyYXkoXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIik7XHJcbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgd2l0aCB0aGUgZGF5cyBvZiB0aGUgd2Vla1xyXG4gICAgdmFyIEQgPSBuZXcgQXJyYXkoXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIik7XHJcbiAgICAvLyBUaGUgZmlyc3Qgb2YgdGhlIG1vbnRoXHJcbiAgICB2YXIgZGF5T25lID0gbmV3IERhdGUoTVttb10rXCIgMSxcIit5cik7XHJcbiAgICAvLyBEZXRlcm1pbmUgdGhlIGRheSBvZiB0aGUgd2VlayB1cG9uIHdoaWNoIHRoZSAxc3Qgb2YgdGhlIG1vbnRoIGZhbGxzXHJcbiAgICB2YXIgZHkgPSBkYXlPbmUuZ2V0RGF5KCk7XHJcbiAgICB5ciA9IGV2YWwoeXIpO1xyXG4gICAgXHJcbiAgICAvLyBEYXlzIGluIGVhY2ggbW9udGhcclxuICAgIHZhciBkID0gXCIzMTI4MzEzMDMxMzAzMTMxMzAzMTMwMzFcIjtcclxuICAgIC8vIElzIHRoaXMgbGVhcCB5ZWFyP1xyXG4gICAgaWYgKHlyIC8gNCA9PT0gTWF0aC5mbG9vcih5ciAvIDQpKSB7XHJcbiAgICAgICAgZCA9IGQuc3Vic3RyaW5nKDAsIDIpICsgXCIyOVwiICsgZC5zdWJzdHJpbmcoNCwgZC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBpbiB0aGUgZCBzdHJpbmcgZm9yIHRoaXMgbW9udGhcclxuICAgIHZhciBwb3MgPSAobW8gKiAyKTtcclxuICAgIC8vIEdyYWIgMiBjaGFyYWN0ZXIgcG9zaXRpb25zIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBtb250aCAobGFzdCBkYXkpXHJcbiAgICB2YXIgbGQgPSBldmFsKGQuc3Vic3RyaW5nKHBvcywgcG9zICsgMikpO1xyXG4gICAgdmFyIHRkYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcclxuICAgIHZhciBkb3cgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xyXG4gICAgXHJcbiAgICAvLyBTdGFydCBvdXRwdXR0aW5nIHRoaXMgbW9udGgncyBjYWxlbmRhclxyXG4gICAgdmFyIGh0bWxUZXh0ID0gICc8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTRcIj4nO1xyXG4gICAgaHRtbFRleHQgKz0gJzx0YWJsZSBjbGFzcz1cImNhbFRhYmxlXCI+PHRyPidcclxuICAgIC8vIERpc3BsYXkgdGhlIG1vbnRoIGFuZCB5ZWFyXHJcbiAgICBodG1sVGV4dCArPSAnPHRoIGNsYXNzPVwibW9uSGRyJ1xyXG4gICAgaWYoc2hvd1RvZGF5KXtodG1sVGV4dCArPSAnIGhpTGl0ZSd9XHJcbiAgICBodG1sVGV4dCArPSAnXCIgY29sc3Bhbj03IGNlbnRlcj4nICsgTVttb10gKyBcIiBcIiArIHlyICsgXCI8L3RoPjwvdHI+XCI7XHJcbiAgICAvLyBEaXNwbGF5IHRoZSBkYXlzIG9mIHRoZSB3ZWVrXHJcbiAgICBodG1sVGV4dCArPSAnPHRyPic7XHJcbiAgICBmb3IgKHZhciBpID0gMDtpIDwgNztpICsrKSB7XHJcbiAgICAgICAgaWYoKGkgPT0gZG93KSAmJiAoc2hvd1RvZGF5KSkge1xyXG4gICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZCBjbGFzcz1cIndrZGF5SGRyIGhpTGl0ZVwiPic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkIGNsYXNzPVwid2tkYXlIZHJcIj4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGh0bWxUZXh0ICs9IERbaV0gKyAnPC90ZD4nOyAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgZGF5cyBvZiB0aGUgd2Vla1xyXG4gICAgfVxyXG4gICAgaHRtbFRleHQgKz0gJzwvdHI+JztcclxuICAgIHZhciBjdHIgPSAwO1xyXG4gICAgLy8gRGlzcGxheSB0aGUgZGF5IG9mIHRoZSBtb250aCBvciBhIGJsYW5rIGlmIHRoZSAxc3QgZmFsbHMgaW4gbWlkLXdlZWtcclxuICAgIGh0bWxUZXh0ICs9ICc8dHIgY2xhc3M9XCJjYWxEYXlSb3dcIj4nO1xyXG4gICAgLy8gRGlzcGxheSB0aGUgZGF5IG9mIHRoZSBtb250aCBvciBhIGJsYW5rIHNwYWNlXHJcbiAgICAvLyBmb3IgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIG1vbnRoXHJcbiAgICBmb3IgKGkgPSAwO2kgPCA3OyBpKyspe1xyXG4gICAgICAgIGlmIChpIDwgZHkpIHtcclxuICAgICAgICAgICAgaHRtbFRleHQgKz0gXCI8dGQ+IDwvdGQ+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjdHIrKztcclxuICAgICAgICAgICAgaWYoKGN0ciA9PSB0ZGF5KSAmJiAoc2hvd1RvZGF5KSkge1xyXG4gICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZCBjbGFzcz1cImhpTGl0ZVwiPic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbFRleHQgKz0gY3RyICsgXCI8L3RkPlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGh0bWxUZXh0ICs9ICc8L3RyPic7XHJcbiAgICAvLyBEaXNwbGF5IHRoZSBkYXkgb2YgdGhlIG1vbnRoIGZvciB0aGUgcmVzdCBvZiB0aGUgbW9udGhcclxuICAgIC8vIERpc3BsYXkgYSBibGFuayBhZnRlciB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoXHJcbiAgICBodG1sVGV4dCArPSAnPHRyIGNsYXNzPVwiY2FsRGF5Um93XCI+JztcclxuICAgIHdoaWxlIChjdHIgPD0gbGQpIHtcclxuICAgICAgICBmb3IgKGkgPSAwO2kgPCA3OyBpKyspe1xyXG4gICAgICAgICAgICBjdHIrKztcclxuICAgICAgICAgICAgaWYgKGN0ciA+IGxkKXtcclxuICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQ+IDwvdGQ+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKChjdHIgPT0gdGRheSkgJiYgKHNob3dUb2RheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkIGNsYXNzPVwiaGlMaXRlXCI+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZD4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gY3RyICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sVGV4dCArPSAnPC90cj48dHIgY2xhc3M9XCJjYWxEYXlSb3dcIj4nO1xyXG4gICAgfVxyXG4gICAgaHRtbFRleHQgKz0gJzwvdHI+PC90YWJsZT48YnIgY2xhc3M9XCJjbGVhclwiIC8+PC9kaXY+JztcclxuICAgIHJldHVybiBodG1sVGV4dDtcclxufVxyXG5cclxuIFxyXG5mdW5jdGlvbiBzaG93Q2FsZW5kZXJzKCkge1xyXG5cclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZGF5J3MgZGF0ZVxyXG4gICAgdmFyIHRoaXNNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgbW9udGggLSB6ZXJvLWJhc2VkXHJcbiAgICB2YXIgdGhpc1llYXIgPSB0b2RheS5nZXRZZWFyKCkgKyAxOTAwOyAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCB5ZWFyXHJcbiAgICB2YXIgbGFzdE1vbnRoID0gKHRoaXNNb250aD09PTA/MTE6dGhpc01vbnRoLTEpOyAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGFzdCBtb250aFxyXG4gICAgdmFyIGxhc3RZZWFyID0gKHRoaXNNb250aD09PTA/dGhpc1llYXItMTp0aGlzWWVhcik7ICAgICAgICAgLy8gY2FsY3VsYXRlIGxhc3QgbW9udGgncyB5ZWFyXHJcbiAgICB2YXIgbmV4dFllYXIgPSAodGhpc01vbnRoPT09MTE/dGhpc1llYXIrMTp0aGlzWWVhcik7ICAgICAgICAvLyBuZXh0IG1vbnRoJ3MgeWVhclxyXG4gICAgdmFyIG5leHRNb250aCA9ICh0aGlzTW9udGg9PT0xMT8wOnRoaXNNb250aCsxKTsgICAgICAgICAgICAgLy8gbmV4dCBtb250aFxyXG4gICAgdmFyIGh0bWxPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbEJveFwiKTtcclxuXHJcbiAgICBpZiggaHRtbE9iaiApXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGh0bWxUZXh0PSc8ZGl2IGNsYXNzPVwicm93XCI+JztcclxuXHJcbiAgICAgICAgaHRtbFRleHQgPSBodG1sVGV4dCArIGdldENhbGVuZGFySFRNTChsYXN0TW9udGgsIGxhc3RZZWFyLCBmYWxzZSk7ICAgIC8vIFNlbmQgbGFzdCBtb250aCB0byBzY3JlZW5cclxuICAgICAgICBodG1sVGV4dCA9IGh0bWxUZXh0ICsgZ2V0Q2FsZW5kYXJIVE1MKHRoaXNNb250aCwgdGhpc1llYXIsIHRydWUpOyAgICAgLy8gU2VuZCB0aGlzIG1vbnRoIHRvIHNjcmVlblxyXG4gICAgICAgIGh0bWxUZXh0ID0gaHRtbFRleHQgKyBnZXRDYWxlbmRhckhUTUwobmV4dE1vbnRoLCBuZXh0WWVhciwgZmFsc2UpOyAgICAvLyBTZW5kIG5leHQgbW9udGggdG8gc2NyZWVuXHJcblxyXG4gICAgICAgIGh0bWxPYmouaW5uZXJIVE1MID0gaHRtbFRleHQgKyAnPC9kaXY+JztcclxuICAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlciBTY3JlZW4gU2l6ZSBJbmZvcm1hdGlvblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGdlYklEKGlkKXsgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgfVxyXG5mdW5jdGlvbiBnZWJUTih0YWdOYW1lKXsgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpOyB9XHJcbmZ1bmN0aW9uIHNldFN0eWxlVG9UYWdzKHRhZ05hbWUsIHN0eWxlU3RyaW5nKXtcclxuICAgIHZhciB0YWdzID0gZ2ViVE4odGFnTmFtZSk7XHJcbiAgICBmb3IoIHZhciBpID0gMDsgaTx0YWdzLmxlbmd0aDsgaSsrICkgdGFnc1tpXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGVTdHJpbmcpO1xyXG59XHJcbmZ1bmN0aW9uIHRlc3RTaXplcyhwYXJlbnRPYmope1xyXG4gICAgaWYoIHBhcmVudE9iaiA9PSBudWxsKXsgcGFyZW50T2JqID0gXCJib2R5XCI7IH1cclxuICAgIFxyXG4gICAgZ2ViSUQoICdzY3JlZW4uV2lkdGgnICkuaW5uZXJIVE1MID0gc2NyZWVuLndpZHRoO1xyXG4gICAgZ2ViSUQoICdzY3JlZW4uSGVpZ2h0JyApLmlubmVySFRNTCA9IHNjcmVlbi5oZWlnaHQ7XHJcblxyXG4gICAgZ2ViSUQoICd3aW5kb3cuV2lkdGgnICkuaW5uZXJIVE1MID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBnZWJJRCggJ3dpbmRvdy5IZWlnaHQnICkuaW5uZXJIVE1MID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIGdlYklEKCAnZG9jdW1lbnRFbGVtZW50LldpZHRoJyApLmlubmVySFRNTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGdlYklEKCAnZG9jdW1lbnRFbGVtZW50LkhlaWdodCcgKS5pbm5lckhUTUwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIGdlYklEKCAnYm9keS5XaWR0aCcgKS5pbm5lckhUTUwgPSBnZWJUTihwYXJlbnRPYmopWzBdLmNsaWVudFdpZHRoO1xyXG4gICAgZ2ViSUQoICdib2R5LkhlaWdodCcgKS5pbm5lckhUTUwgPSBnZWJUTihwYXJlbnRPYmopWzBdLmNsaWVudEhlaWdodDsgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2l6ZXMocGFyZW50T2JqKSB7XHJcbiAgICBpZiggcGFyZW50T2JqID09PSBudWxsKXsgcGFyZW50T2JqID0gXCJib2R5XCI7IH1cclxuICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICB0YWJsZS5pbm5lckhUTUwgPSBcclxuICAgICAgIFwiPHRyPjx0aD5TT1VSQ0U8L3RoPjx0aD5XSURUSDwvdGg+PHRoPng8L3RoPjx0aD5IRUlHSFQ8L3RoPjwvdHI+XCJcclxuICAgICAgK1wiPHRyPjx0ZD5zY3JlZW48L3RkPjx0ZCBpZD0nc2NyZWVuLldpZHRoJyAvPjx0ZD54PC90ZD48dGQgaWQ9J3NjcmVlbi5IZWlnaHQnIC8+PC90cj5cIlxyXG4gICAgICArXCI8dHI+PHRkPndpbmRvdzwvdGQ+PHRkIGlkPSd3aW5kb3cuV2lkdGgnIC8+PHRkPng8L3RkPjx0ZCBpZD0nd2luZG93LkhlaWdodCcgLz48L3RyPlwiXHJcbiAgICAgICtcIjx0cj48dGQ+ZG9jdW1lbnQ8YnI+LmRvY3VtZW50RWxlbWVudDwvdGQ+PHRkIGlkPSdkb2N1bWVudEVsZW1lbnQuV2lkdGgnIC8+PHRkPng8L3RkPjx0ZCBpZD0nZG9jdW1lbnRFbGVtZW50LkhlaWdodCcgLz48L3RyPlwiXHJcbiAgICAgICtcIjx0cj48dGQ+ZG9jdW1lbnQuYm9keTwvdGQ+PHRkIGlkPSdib2R5LldpZHRoJyAvPjx0ZD54PC90ZD48dGQgaWQ9J2JvZHkuSGVpZ2h0JyAvPjwvdHI+XCJcclxuICAgIDtcclxuXHJcbiAgICBnZWJUTihwYXJlbnRPYmopWzBdLmFwcGVuZENoaWxkKCB0YWJsZSApO1xyXG5cclxuICAgIHNldFN0eWxlVG9UYWdzKFwidGFibGVcIixcclxuICAgICAgICAgICAgICAgICBcImJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7IHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICArXCJsZWZ0OiAxMDBweCAhaW1wb3J0YW50OyB0b3A6IDkwcHggIWltcG9ydGFudDsgcGFkZGluZzo1cHggIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgK1wid2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZToxMHB4OyAhaW1wb3J0YW50XCJcclxuICAgICAgICAgICAgICAgICtcIndoaXRlLXNwYWNlOiBwcmUgIWltcG9ydGFudDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICArXCJ6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcIlxyXG4gICAgKTtcclxuICAgIHNldFN0eWxlVG9UYWdzKFwidGRcIiwgXCJjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDVweCAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1wiKTtcclxuICAgIHNldFN0eWxlVG9UYWdzKFwidGhcIiwgXCJjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDVweCAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1wiKTtcclxuXHJcbiAgICB0YWJsZS5zdHlsZS5zZXRQcm9wZXJ0eSggJ21hcmdpbi1sZWZ0JywgJy0nKyggdGFibGUuY2xpZW50V2lkdGggLyAyICkrJ3B4JyApO1xyXG5cclxuICAgIHNldEludGVydmFsKCB0ZXN0U2l6ZXMsIDIwMCApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlLZXkoYXJyYXksIGtleSkge1xyXG4gICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHZhciB4ID0gYVtrZXldOyB2YXIgeSA9IGJba2V5XTtcclxuICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4gZnVuY3Rpb24gbXVsdE9iakFycmF5MkFycmF5KG11bHRPYmpBcnJheSl7XHJcbiAgICAgY29uc29sZS5kZWJ1ZyhcIm11bHRPYmpBcnJheTJBcnJheVwiKTtcclxuICAgIGNvbnNvbGUuZGVidWcobXVsdE9iakFycmF5KTtcclxuICAgIHZhciBhbGxBcnJheSA9IFtdO1xyXG4gICAgZm9yKHZhciBpPTA7IGk8bXVsdE9iakFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgaj0wOyBqPG11bHRPYmpBcnJheVtpXS5sZW5ndGg7aisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGwgPSBhbGxBcnJheS5wdXNoKCBtdWx0T2JqQXJyYXlbaV1bal0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEpTT05EYXRlVG9EYXRlT2JqIChqZCkgeyAvLyBqZCA9IEpTT04gRGF0ZSBmb3JtYXQgaWUuICcyMDEzLTAzLTA4VDE0OjM0OjAwOjAwMFonXHJcbiAgICBpZiggKGpkLmxlbmd0aCAhPSAyNCkgfHwgIChqZC5zdWJzdHIoNCwxKSAhPSAnLScpIHx8ICAoamQuc3Vic3RyKDcsMSkgIT0gJy0nKSB8fCAgKGpkLnN1YnN0cigxMCwxKSAhPSAnVCcpIHx8ICAoamQuc3Vic3RyKDEzLDEpICE9ICc6JykgfHwgIChqZC5zdWJzdHIoMTYsMSkgIT0gJzonKSB8fCAgKGpkLnN1YnN0cigxOSwxKSAhPSAnOicpIHx8ICAoamQuc3Vic3RyKDIzLDEpICE9ICdaJykgKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBkLnNldEZ1bGxZZWFyKGpkLnN1YnN0cigwLDQpLCBqZC5zdWJzdHIoNSwyKS0xLCBqZC5zdWJzdHIoOCwyKSk7XHJcbiAgICBkLnNldEhvdXJzKGpkLnN1YnN0cigxMSwyKSk7XHJcbiAgICBkLnNldE1pbnV0ZXMoamQuc3Vic3RyKDE0LDIpKTtcclxuICAgIGQuc2V0U2Vjb25kcyhqZC5zdWJzdHIoMTcsMikpO1xyXG4gICAgZC5zZXRNaWxsaXNlY29uZHMoamQuc3Vic3RyKDIwLDMpKTtcclxuICAgIHJldHVybiBkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0SW1hZ2VEYXRhKGltZ0lEKSB7XHJcbiAgICBhbGVydChcIkknbSBzb3JyeSwgeW91IGRvbid0IGhhdmUgdGhlIGF1dGhvcml0eSB0byBlZGl0IGltYWdlIElEI1wiICsgaW1nSUQgKyBcIi5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUltYWdlKGltZ0lEKXtcclxuICAgIGFsZXJ0KFwiSSdtIHNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSB0aGUgYXV0aG9yaXR5IHRvIGRlbGV0ZSBpbWFnZSBJRCNcIiArIGltZ0lEICsgXCIuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmxhcmdlVG9nZ2xlKGltZ0lEKXtcclxuICAgIGFsZXJ0KFwiRW5sYXJnZSBpbWFnZSBJRCNcIiArIGltZ0lEICsgXCIuXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gbWlzYy5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiZXZhbChmdW5jdGlvbihwLGEsYyxrLGUscil7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzxhPycnOmUocGFyc2VJbnQoYy9hKSkpKygoYz1jJWEpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZighJycucmVwbGFjZSgvXi8sU3RyaW5nKSl7d2hpbGUoYy0tKXJbZShjKV09a1tjXXx8ZShjKTtrPVtmdW5jdGlvbihlKXtyZXR1cm4gcltlXX1dO2U9ZnVuY3Rpb24oKXtyZXR1cm4nXFxcXHcrJ307Yz0xfTt3aGlsZShjLS0paWYoa1tjXSlwPXAucmVwbGFjZShuZXcgUmVnRXhwKCdcXFxcYicrZShjKSsnXFxcXGInLCdnJyksa1tjXSk7cmV0dXJuIHB9KCc3KEEgM2MuM3EhPT1cIjlcIil7M2MuM3E9OShlKXs5IHQoKXt9dC41Uz1lO3AgNVIgdH19KDkoZSx0LG4pe2ggcj17MU46OSh0LG4pe2ggcj1jO3IuJGs9ZShuKTtyLjY9ZS40TSh7fSxlLjM3LjJCLjYsci4kay52KCksdCk7ci4yQT10O3IuNEwoKX0sNEw6OSgpezkgcihlKXtoIG4scj1cIlwiOzcoQSB0LjYuMzM9PT1cIjlcIil7dC42LjMzLlIoYyxbZV0pfWx7MUEobiAzOCBlLmQpezcoZS5kLjVNKG4pKXtyKz1lLmRbbl0uMUt9fXQuJGsuMnkocil9dC4zdCgpfWggdD1jLG47NyhBIHQuNi4ySD09PVwiOVwiKXt0LjYuMkguUihjLFt0LiRrXSl9NyhBIHQuNi4yTz09PVwiMllcIil7bj10LjYuMk87ZS41SyhuLHIpfWx7dC4zdCgpfX0sM3Q6OSgpe2ggZT1jO2UuJGsudihcImQtNElcIixlLiRrLjJ4KFwiMndcIikpLnYoXCJkLTRGXCIsZS4kay4yeChcIkhcIikpO2UuJGsueih7MnU6MH0pO2UuMnQ9ZS42LnE7ZS40RSgpO2UuNXY9MDtlLjFYPTE0O2UuMjMoKX0sMjM6OSgpe2ggZT1jOzcoZS4kay4yNSgpLk49PT0wKXtwIGJ9ZS4xTSgpO2UuNEMoKTtlLiRTPWUuJGsuMjUoKTtlLkU9ZS4kUy5OO2UuNEIoKTtlLiRHPWUuJGsuMTcoXCIuZC0xS1wiKTtlLiRLPWUuJGsuMTcoXCIuZC0xcFwiKTtlLjN1PVwiVVwiO2UuMTM9MDtlLjI2PVswXTtlLm09MDtlLjRBKCk7ZS40eigpfSw0ejo5KCl7aCBlPWM7ZS4yVigpO2UuMlcoKTtlLjR0KCk7ZS4zMCgpO2UuNHIoKTtlLjRxKCk7ZS4ycCgpO2UuNG8oKTs3KGUuNi4ybyE9PWIpe2UuNG4oZS42LjJvKX03KGUuNi5PPT09ail7ZS42Lk89NFF9ZS4xOSgpO2UuJGsuMTcoXCIuZC0xcFwiKS56KFwiNGlcIixcIjRoXCIpOzcoIWUuJGsuMm0oXCI6M25cIikpe2UuM28oKX1se2UuJGsueihcIjJ1XCIsMSl9ZS41Tz1iO2UuMmwoKTs3KEEgZS42LjNzPT09XCI5XCIpe2UuNi4zcy5SKGMsW2UuJGtdKX19LDJsOjkoKXtoIGU9Yzs3KGUuNi4xWj09PWope2UuMVooKX03KGUuNi4xQj09PWope2UuMUIoKX1lLjRnKCk7NyhBIGUuNi4zdz09PVwiOVwiKXtlLjYuM3cuUihjLFtlLiRrXSl9fSwzeDo5KCl7aCBlPWM7NyhBIGUuNi4zQj09PVwiOVwiKXtlLjYuM0IuUihjLFtlLiRrXSl9ZS4zbygpO2UuMlYoKTtlLjJXKCk7ZS40ZigpO2UuMzAoKTtlLjJsKCk7NyhBIGUuNi4zRD09PVwiOVwiKXtlLjYuM0QuUihjLFtlLiRrXSl9fSwzRjo5KCl7aCBlPWM7dC4xYyg5KCl7ZS4zeCgpfSwwKX0sM286OSgpe2ggZT1jOzcoZS4kay4ybShcIjozblwiKT09PWIpe2UuJGsueih7MnU6MH0pO3QuMTgoZS4xQyk7dC4xOChlLjFYKX1se3AgYn1lLjFYPXQuNGQoOSgpezcoZS4kay4ybShcIjozblwiKSl7ZS4zRigpO2UuJGsuNGIoezJ1OjF9LDJNKTt0LjE4KGUuMVgpfX0sNXgpfSw0Qjo5KCl7aCBlPWM7ZS4kUy41bihcXCc8TCBIPVwiZC0xcFwiPlxcJykuNGEoXFwnPEwgSD1cImQtMUtcIj48L0w+XFwnKTtlLiRrLjE3KFwiLmQtMXBcIikuNGEoXFwnPEwgSD1cImQtMXAtNDlcIj5cXCcpO2UuMUg9ZS4kay4xNyhcIi5kLTFwLTQ5XCIpO2UuJGsueihcIjRpXCIsXCI0aFwiKX0sMU06OSgpe2ggZT1jLHQ9ZS4kay4xSShlLjYuMU0pLG49ZS4kay4xSShlLjYuMmkpOzcoIXQpe2UuJGsuSShlLjYuMU0pfTcoIW4pe2UuJGsuSShlLjYuMmkpfX0sMlY6OSgpe2ggdD1jLG4scjs3KHQuNi4yWj09PWIpe3AgYn03KHQuNi40OD09PWope3QuNi5xPXQuMnQ9MTt0LjYuMWg9Yjt0LjYuMXM9Yjt0LjYuMU89Yjt0LjYuMjI9Yjt0LjYuMVE9Yjt0LjYuMVI9YjtwIGJ9bj1lKHQuNi40NykuMWYoKTs3KG4+KHQuNi4xc1swXXx8dC4ydCkpe3QuNi5xPXQuMnR9Nyh0LjYuMWghPT1iKXt0LjYuMWguNWcoOShlLHQpe3AgZVswXS10WzBdfSk7MUEocj0wO3I8dC42LjFoLk47cis9MSl7Nyh0LjYuMWhbcl1bMF08PW4pe3QuNi5xPXQuNi4xaFtyXVsxXX19fWx7NyhuPD10LjYuMXNbMF0mJnQuNi4xcyE9PWIpe3QuNi5xPXQuNi4xc1sxXX03KG48PXQuNi4xT1swXSYmdC42LjFPIT09Yil7dC42LnE9dC42LjFPWzFdfTcobjw9dC42LjIyWzBdJiZ0LjYuMjIhPT1iKXt0LjYucT10LjYuMjJbMV19NyhuPD10LjYuMVFbMF0mJnQuNi4xUSE9PWIpe3QuNi5xPXQuNi4xUVsxXX03KG48PXQuNi4xUlswXSYmdC42LjFSIT09Yil7dC42LnE9dC42LjFSWzFdfX03KHQuNi5xPnQuRSYmdC42LjQ2PT09ail7dC42LnE9dC5FfX0sNHI6OSgpe2ggbj1jLHIsaTs3KG4uNi4yWiE9PWope3AgYn1pPWUodCkuMWYoKTtuLjNkPTkoKXs3KGUodCkuMWYoKSE9PWkpezcobi42Lk8hPT1iKXt0LjE4KG4uMUMpfXQuNWQocik7cj10LjFjKDkoKXtpPWUodCkuMWYoKTtuLjN4KCl9LG4uNi40NSl9fTtlKHQpLjQ0KG4uM2QpfSw0Zjo5KCl7aCBlPWM7ZS4yZyhlLm0pOzcoZS42Lk8hPT1iKXtlLjNqKCl9fSw0Mzo5KCl7aCB0PWMsbj0wLHI9dC5FLXQuNi5xO3QuJEcuMmYoOShpKXtoIHM9ZShjKTtzLnooezFmOnQuTX0pLnYoXCJkLTFLXCIsM3AoaSkpOzcoaSV0LjYucT09PTB8fGk9PT1yKXs3KCEoaT5yKSl7bis9MX19cy52KFwiZC0yNFwiLG4pfSl9LDQyOjkoKXtoIGU9Yyx0PWUuJEcuTiplLk07ZS4kSy56KHsxZjp0KjIsVDowfSk7ZS40MygpfSwyVzo5KCl7aCBlPWM7ZS40MCgpO2UuNDIoKTtlLjNaKCk7ZS4zdigpfSw0MDo5KCl7aCBlPWM7ZS5NPTFGLjRPKGUuJGsuMWYoKS9lLjYucSl9LDN2OjkoKXtoIGU9Yyx0PShlLkUqZS5NLWUuNi5xKmUuTSkqLTE7NyhlLjYucT5lLkUpe2UuRD0wO3Q9MDtlLjN6PTB9bHtlLkQ9ZS5FLWUuNi5xO2UuM3o9dH1wIHR9LDNZOjkoKXtwIDB9LDNaOjkoKXtoIHQ9YyxuPTAscj0wLGkscyxvO3QuSj1bMF07dC4zRT1bXTsxQShpPTA7aTx0LkU7aSs9MSl7cis9dC5NO3QuSi4yRCgtcik7Nyh0LjYuMTI9PT1qKXtzPWUodC4kR1tpXSk7bz1zLnYoXCJkLTI0XCIpOzcobyE9PW4pe3QuM0Vbbl09dC5KW2ldO249b319fX0sNHQ6OSgpe2ggdD1jOzcodC42LjJhPT09anx8dC42LjF2PT09ail7dC5CPWUoXFwnPEwgSD1cImQtNUFcIi8+XFwnKS41bShcIjVsXCIsIXQuRi4xNSkuNWModC4kayl9Nyh0LjYuMXY9PT1qKXt0LjNUKCl9Nyh0LjYuMmE9PT1qKXt0LjNTKCl9fSwzUzo5KCl7aCB0PWMsbj1lKFxcJzxMIEg9XCJkLTRVXCIvPlxcJyk7dC5CLjFvKG4pO3QuMXU9ZShcIjxMLz5cIix7XCJIXCI6XCJkLTFuXCIsMnk6dC42LjJVWzBdfHxcIlwifSk7dC4xcT1lKFwiPEwvPlwiLHtcIkhcIjpcImQtVVwiLDJ5OnQuNi4yVVsxXXx8XCJcIn0pO24uMW8odC4xdSkuMW8odC4xcSk7bi53KFwiMlguQiAyMS5CXCIsXFwnTFtIXj1cImRcIl1cXCcsOShlKXtlLjFsKCl9KTtuLncoXCIybi5CIDI4LkJcIixcXCdMW0hePVwiZFwiXVxcJyw5KG4pe24uMWwoKTs3KGUoYykuMUkoXCJkLVVcIikpe3QuVSgpfWx7dC4xbigpfX0pfSwzVDo5KCl7aCB0PWM7dC4xaz1lKFxcJzxMIEg9XCJkLTF2XCIvPlxcJyk7dC5CLjFvKHQuMWspO3QuMWsudyhcIjJuLkIgMjguQlwiLFwiLmQtMWpcIiw5KG4pe24uMWwoKTs3KDNwKGUoYykudihcImQtMWpcIikpIT09dC5tKXt0LjFnKDNwKGUoYykudihcImQtMWpcIikpLGopfX0pfSwzUDo5KCl7aCB0PWMsbixyLGkscyxvLHU7Nyh0LjYuMXY9PT1iKXtwIGJ9dC4xay4yeShcIlwiKTtuPTA7cj10LkUtdC5FJXQuNi5xOzFBKHM9MDtzPHQuRTtzKz0xKXs3KHMldC42LnE9PT0wKXtuKz0xOzcocj09PXMpe2k9dC5FLXQuNi5xfW89ZShcIjxMLz5cIix7XCJIXCI6XCJkLTFqXCJ9KTt1PWUoXCI8M04+PC8zTj5cIix7NFI6dC42LjM5PT09aj9uOlwiXCIsXCJIXCI6dC42LjM5PT09aj9cImQtNTlcIjpcIlwifSk7by4xbyh1KTtvLnYoXCJkLTFqXCIscj09PXM/aTpzKTtvLnYoXCJkLTI0XCIsbik7dC4xay4xbyhvKX19dC4zNSgpfSwzNTo5KCl7aCB0PWM7Nyh0LjYuMXY9PT1iKXtwIGJ9dC4xay4xNyhcIi5kLTFqXCIpLjJmKDkoKXs3KGUoYykudihcImQtMjRcIik9PT1lKHQuJEdbdC5tXSkudihcImQtMjRcIikpe3QuMWsuMTcoXCIuZC0xalwiKS5aKFwiMmRcIik7ZShjKS5JKFwiMmRcIil9fSl9LDNlOjkoKXtoIGU9Yzs3KGUuNi4yYT09PWIpe3AgYn03KGUuNi4yZT09PWIpezcoZS5tPT09MCYmZS5EPT09MCl7ZS4xdS5JKFwiMWJcIik7ZS4xcS5JKFwiMWJcIil9bCA3KGUubT09PTAmJmUuRCE9PTApe2UuMXUuSShcIjFiXCIpO2UuMXEuWihcIjFiXCIpfWwgNyhlLm09PT1lLkQpe2UuMXUuWihcIjFiXCIpO2UuMXEuSShcIjFiXCIpfWwgNyhlLm0hPT0wJiZlLm0hPT1lLkQpe2UuMXUuWihcIjFiXCIpO2UuMXEuWihcIjFiXCIpfX19LDMwOjkoKXtoIGU9YztlLjNQKCk7ZS4zZSgpOzcoZS5CKXs3KGUuNi5xPj1lLkUpe2UuQi4zSygpfWx7ZS5CLjNKKCl9fX0sNTU6OSgpe2ggZT1jOzcoZS5CKXtlLkIuM2soKX19LFU6OShlKXtoIHQ9Yzs3KHQuMUUpe3AgYn10Lm0rPXQuNi4xMj09PWo/dC42LnE6MTs3KHQubT50LkQrKHQuNi4xMj09PWo/dC42LnEtMTowKSl7Nyh0LjYuMmU9PT1qKXt0Lm09MDtlPVwiMmtcIn1se3QubT10LkQ7cCBifX10LjFnKHQubSxlKX0sMW46OShlKXtoIHQ9Yzs3KHQuMUUpe3AgYn03KHQuNi4xMj09PWomJnQubT4wJiZ0Lm08dC42LnEpe3QubT0wfWx7dC5tLT10LjYuMTI9PT1qP3QuNi5xOjF9Nyh0Lm08MCl7Nyh0LjYuMmU9PT1qKXt0Lm09dC5EO2U9XCIya1wifWx7dC5tPTA7cCBifX10LjFnKHQubSxlKX0sMWc6OShlLG4scil7aCBpPWMsczs3KGkuMUUpe3AgYn03KEEgaS42LjFZPT09XCI5XCIpe2kuNi4xWS5SKGMsW2kuJGtdKX03KGU+PWkuRCl7ZT1pLkR9bCA3KGU8PTApe2U9MH1pLm09aS5kLm09ZTs3KGkuNi4ybyE9PWImJnIhPT1cIjRlXCImJmkuNi5xPT09MSYmaS5GLjF4PT09ail7aS4xdCgwKTs3KGkuRi4xeD09PWope2kuMUwoaS5KW2VdKX1se2kuMXIoaS5KW2VdLDEpfWkuMnIoKTtpLjRsKCk7cCBifXM9aS5KW2VdOzcoaS5GLjF4PT09ail7aS4xVD1iOzcobj09PWope2kuMXQoXCIxd1wiKTt0LjFjKDkoKXtpLjFUPWp9LGkuNi4xdyl9bCA3KG49PT1cIjJrXCIpe2kuMXQoaS42LjJ2KTt0LjFjKDkoKXtpLjFUPWp9LGkuNi4ydil9bHtpLjF0KFwiMW1cIik7dC4xYyg5KCl7aS4xVD1qfSxpLjYuMW0pfWkuMUwocyl9bHs3KG49PT1qKXtpLjFyKHMsaS42LjF3KX1sIDcobj09PVwiMmtcIil7aS4xcihzLGkuNi4ydil9bHtpLjFyKHMsaS42LjFtKX19aS4ycigpfSwyZzo5KGUpe2ggdD1jOzcoQSB0LjYuMVk9PT1cIjlcIil7dC42LjFZLlIoYyxbdC4ka10pfTcoZT49dC5EfHxlPT09LTEpe2U9dC5EfWwgNyhlPD0wKXtlPTB9dC4xdCgwKTs3KHQuRi4xeD09PWope3QuMUwodC5KW2VdKX1se3QuMXIodC5KW2VdLDEpfXQubT10LmQubT1lO3QuMnIoKX0sMnI6OSgpe2ggZT1jO2UuMjYuMkQoZS5tKTtlLjEzPWUuZC4xMz1lLjI2W2UuMjYuTi0yXTtlLjI2LjVmKDApOzcoZS4xMyE9PWUubSl7ZS4zNSgpO2UuM2UoKTtlLjJsKCk7NyhlLjYuTyE9PWIpe2UuM2ooKX19NyhBIGUuNi4zeT09PVwiOVwiJiZlLjEzIT09ZS5tKXtlLjYuM3kuUihjLFtlLiRrXSl9fSxYOjkoKXtoIGU9YztlLjNBPVwiWFwiO3QuMTgoZS4xQyl9LDNqOjkoKXtoIGU9Yzs3KGUuM0EhPT1cIlhcIil7ZS4xOSgpfX0sMTk6OSgpe2ggZT1jO2UuM0E9XCIxOVwiOzcoZS42Lk89PT1iKXtwIGJ9dC4xOChlLjFDKTtlLjFDPXQuNGQoOSgpe2UuVShqKX0sZS42Lk8pfSwxdDo5KGUpe2ggdD1jOzcoZT09PVwiMW1cIil7dC4kSy56KHQuMnoodC42LjFtKSl9bCA3KGU9PT1cIjF3XCIpe3QuJEsueih0LjJ6KHQuNi4xdykpfWwgNyhBIGUhPT1cIjJZXCIpe3QuJEsueih0LjJ6KGUpKX19LDJ6OjkoZSl7cHtcIi0xRy0xYVwiOlwiMkMgXCIrZStcIjF6IDJzXCIsXCItMVctMWFcIjpcIjJDIFwiK2UrXCIxeiAyc1wiLFwiLW8tMWFcIjpcIjJDIFwiK2UrXCIxeiAyc1wiLDFhOlwiMkMgXCIrZStcIjF6IDJzXCJ9fSwzSDo5KCl7cHtcIi0xRy0xYVwiOlwiXCIsXCItMVctMWFcIjpcIlwiLFwiLW8tMWFcIjpcIlwiLDFhOlwiXCJ9fSwzSTo5KGUpe3B7XCItMUctUFwiOlwiMWkoXCIrZStcIlYsIEMsIEMpXCIsXCItMVctUFwiOlwiMWkoXCIrZStcIlYsIEMsIEMpXCIsXCItby1QXCI6XCIxaShcIitlK1wiViwgQywgQylcIixcIi0xei1QXCI6XCIxaShcIitlK1wiViwgQywgQylcIixQOlwiMWkoXCIrZStcIlYsIEMsQylcIn19LDFMOjkoZSl7aCB0PWM7dC4kSy56KHQuM0koZSkpfSwzTDo5KGUpe2ggdD1jO3QuJEsueih7VDplfSl9LDFyOjkoZSx0KXtoIG49YztuLjI5PWI7bi4kSy5YKGosaikuNGIoe1Q6ZX0sezU0OnR8fG4uNi4xbSwzTTo5KCl7bi4yOT1qfX0pfSw0RTo5KCl7aCBlPWMscj1cIjFpKEMsIEMsIEMpXCIsaT1uLjU2KFwiTFwiKSxzLG8sdSxhO2kuMncuM089XCIgIC0xVy1QOlwiK3IrXCI7IC0xei1QOlwiK3IrXCI7IC1vLVA6XCIrcitcIjsgLTFHLVA6XCIrcitcIjsgUDpcIityO3M9LzFpXFxcXChDLCBDLCBDXFxcXCkvZztvPWkuMncuM08uNWkocyk7dT1vIT09MTQmJm8uTj09PTE7YT1cIjV6XCIzOCB0fHx0LjVRLjRQO2UuRj17MXg6dSwxNTphfX0sNHE6OSgpe2ggZT1jOzcoZS42LjI3IT09Ynx8ZS42LjFVIT09Yil7ZS4zUSgpO2UuM1IoKX19LDRDOjkoKXtoIGU9Yyx0PVtcInNcIixcImVcIixcInhcIl07ZS4xNj17fTs3KGUuNi4yNz09PWomJmUuNi4xVT09PWope3Q9W1wiMlguZCAyMS5kXCIsXCIyTi5kIDNVLmRcIixcIjJuLmQgM1YuZCAyOC5kXCJdfWwgNyhlLjYuMjc9PT1iJiZlLjYuMVU9PT1qKXt0PVtcIjJYLmRcIixcIjJOLmRcIixcIjJuLmQgM1YuZFwiXX1sIDcoZS42LjI3PT09aiYmZS42LjFVPT09Yil7dD1bXCIyMS5kXCIsXCIzVS5kXCIsXCIyOC5kXCJdfWUuMTYuM1c9dFswXTtlLjE2LjJLPXRbMV07ZS4xNi4ySj10WzJdfSwzUjo5KCl7aCB0PWM7dC4kay53KFwiNXkuZFwiLDkoZSl7ZS4xbCgpfSk7dC4kay53KFwiMjEuM1hcIiw5KHQpe3AgZSh0LjFkKS4ybShcIjVDLCA1RSwgNUYsIDVOXCIpfSl9LDNROjkoKXs5IHMoZSl7NyhlLjJiIT09Vyl7cHt4OmUuMmJbMF0uMmMseTplLjJiWzBdLjQxfX03KGUuMmI9PT1XKXs3KGUuMmMhPT1XKXtwe3g6ZS4yYyx5OmUuNDF9fTcoZS4yYz09PVcpe3B7eDplLjUyLHk6ZS41M319fX05IG8odCl7Nyh0PT09XCJ3XCIpe2UobikudyhyLjE2LjJLLGEpO2UobikudyhyLjE2LjJKLGYpfWwgNyh0PT09XCJRXCIpe2UobikuUShyLjE2LjJLKTtlKG4pLlEoci4xNi4ySil9fTkgdShuKXtoIHU9bi4zaHx8bnx8dC4zZyxhOzcodS41YT09PTMpe3AgYn03KHIuRTw9ci42LnEpe3B9NyhyLjI5PT09YiYmIXIuNi4zZil7cCBifTcoci4xVD09PWImJiFyLjYuM2Ype3AgYn03KHIuNi5PIT09Yil7dC4xOChyLjFDKX03KHIuRi4xNSE9PWomJiFyLiRLLjFJKFwiM2JcIikpe3IuJEsuSShcIjNiXCIpfXIuMTE9MDtyLlk9MDtlKGMpLnooci4zSCgpKTthPWUoYykuMmgoKTtpLjJTPWEuVDtpLjJSPXModSkueC1hLlQ7aS4yUD1zKHUpLnktYS41bztvKFwid1wiKTtpLjJqPWI7aS4yTD11LjFkfHx1LjRjfTkgYShvKXtoIHU9by4zaHx8b3x8dC4zZyxhLGY7ci4xMT1zKHUpLngtaS4yUjtyLjJJPXModSkueS1pLjJQO3IuWT1yLjExLWkuMlM7NyhBIHIuNi4yRT09PVwiOVwiJiZpLjNDIT09aiYmci5ZIT09MCl7aS4zQz1qO3IuNi4yRS5SKHIsW3IuJGtdKX03KChyLlk+OHx8ci5ZPC04KSYmci5GLjE1PT09ail7Nyh1LjFsIT09Vyl7dS4xbCgpfWx7dS41TD1ifWkuMmo9an03KChyLjJJPjEwfHxyLjJJPC0xMCkmJmkuMmo9PT1iKXtlKG4pLlEoXCIyTi5kXCIpfWE9OSgpe3Agci5ZLzV9O2Y9OSgpe3Agci4zeityLlkvNX07ci4xMT0xRi4zdigxRi4zWShyLjExLGEoKSksZigpKTs3KHIuRi4xeD09PWope3IuMUwoci4xMSl9bHtyLjNMKHIuMTEpfX05IGYobil7aCBzPW4uM2h8fG58fHQuM2csdSxhLGY7cy4xZD1zLjFkfHxzLjRjO2kuM0M9Yjs3KHIuRi4xNSE9PWope3IuJEsuWihcIjNiXCIpfTcoci5ZPDApe3IuMXk9ci5kLjF5PVwiVFwifWx7ci4xeT1yLmQuMXk9XCIzaVwifTcoci5ZIT09MCl7dT1yLjRqKCk7ci4xZyh1LGIsXCI0ZVwiKTs3KGkuMkw9PT1zLjFkJiZyLkYuMTUhPT1qKXtlKHMuMWQpLncoXCIzYS40a1wiLDkodCl7dC40UygpO3QuNFQoKTt0LjFsKCk7ZSh0LjFkKS5RKFwiM2EuNGtcIil9KTthPWUuNE4ocy4xZCxcIjRWXCIpLjNhO2Y9YS40VygpO2EuNFgoMCwwLGYpfX1vKFwiUVwiKX1oIHI9YyxpPXsyUjowLDJQOjAsNFk6MCwyUzowLDJoOjE0LDRaOjE0LDUwOjE0LDJqOjE0LDUxOjE0LDJMOjE0fTtyLjI5PWo7ci4kay53KHIuMTYuM1csXCIuZC0xcFwiLHUpfSw0ajo5KCl7aCBlPWMsdD1lLjRtKCk7Nyh0PmUuRCl7ZS5tPWUuRDt0PWUuRH1sIDcoZS4xMT49MCl7dD0wO2UubT0wfXAgdH0sNG06OSgpe2ggdD1jLG49dC42LjEyPT09aj90LjNFOnQuSixyPXQuMTEsaT0xNDtlLjJmKG4sOShzLG8pezcoci10Lk0vMjA+bltzKzFdJiZyLXQuTS8yMDxvJiZ0LjM0KCk9PT1cIlRcIil7aT1vOzcodC42LjEyPT09ail7dC5tPWUuNHAoaSx0LkopfWx7dC5tPXN9fWwgNyhyK3QuTS8yMDxvJiZyK3QuTS8yMD4obltzKzFdfHxuW3NdLXQuTSkmJnQuMzQoKT09PVwiM2lcIil7Nyh0LjYuMTI9PT1qKXtpPW5bcysxXXx8bltuLk4tMV07dC5tPWUuNHAoaSx0LkopfWx7aT1uW3MrMV07dC5tPXMrMX19fSk7cCB0Lm19LDM0OjkoKXtoIGU9Yyx0OzcoZS5ZPDApe3Q9XCIzaVwiO2UuM3U9XCJVXCJ9bHt0PVwiVFwiO2UuM3U9XCIxblwifXAgdH0sNEE6OSgpe2ggZT1jO2UuJGsudyhcImQuVVwiLDkoKXtlLlUoKX0pO2UuJGsudyhcImQuMW5cIiw5KCl7ZS4xbigpfSk7ZS4kay53KFwiZC4xOVwiLDkodCxuKXtlLjYuTz1uO2UuMTkoKTtlLjMyPVwiMTlcIn0pO2UuJGsudyhcImQuWFwiLDkoKXtlLlgoKTtlLjMyPVwiWFwifSk7ZS4kay53KFwiZC4xZ1wiLDkodCxuKXtlLjFnKG4pfSk7ZS4kay53KFwiZC4yZ1wiLDkodCxuKXtlLjJnKG4pfSl9LDJwOjkoKXtoIGU9Yzs3KGUuNi4ycD09PWomJmUuRi4xNSE9PWomJmUuNi5PIT09Yil7ZS4kay53KFwiNTdcIiw5KCl7ZS5YKCl9KTtlLiRrLncoXCI1OFwiLDkoKXs3KGUuMzIhPT1cIlhcIil7ZS4xOSgpfX0pfX0sMVo6OSgpe2ggdD1jLG4scixpLHMsbzs3KHQuNi4xWj09PWIpe3AgYn0xQShuPTA7bjx0LkU7bis9MSl7cj1lKHQuJEdbbl0pOzcoci52KFwiZC0xZVwiKT09PVwiMWVcIil7NHN9aT1yLnYoXCJkLTFLXCIpO3M9ci4xNyhcIi41YlwiKTs3KEEgcy52KFwiMUpcIikhPT1cIjJZXCIpe3IudihcImQtMWVcIixcIjFlXCIpOzRzfTcoci52KFwiZC0xZVwiKT09PVcpe3MuM0soKTtyLkkoXCI0dVwiKS52KFwiZC0xZVwiLFwiNWVcIil9Nyh0LjYuNHY9PT1qKXtvPWk+PXQubX1se289an03KG8mJmk8dC5tK3QuNi5xJiZzLk4pe3QuNHcocixzKX19fSw0dzo5KGUsbil7OSBvKCl7ZS52KFwiZC0xZVwiLFwiMWVcIikuWihcIjR1XCIpO24uNWgoXCJ2LTFKXCIpOzcoci42LjR4PT09XCI0eVwiKXtuLjVqKDVrKX1se24uM0ooKX03KEEgci42LjJUPT09XCI5XCIpe3IuNi4yVC5SKGMsW3IuJGtdKX19OSB1KCl7aSs9MTs3KHIuMlEobi4zbCgwKSl8fHM9PT1qKXtvKCl9bCA3KGk8PTJxKXt0LjFjKHUsMnEpfWx7bygpfX1oIHI9YyxpPTAsczs3KG4uNXAoXCI1cVwiKT09PVwiNXJcIil7bi56KFwiNXMtNXRcIixcIjV1KFwiK24udihcIjFKXCIpK1wiKVwiKTtzPWp9bHtuWzBdLjFKPW4udihcIjFKXCIpfXUoKX0sMUI6OSgpezkgcygpe2ggcj1lKG4uJEdbbi5tXSkuMkcoKTtuLjFILnooXCIyR1wiLHIrXCJWXCIpOzcoIW4uMUguMUkoXCIxQlwiKSl7dC4xYyg5KCl7bi4xSC5JKFwiMUJcIil9LDApfX05IG8oKXtpKz0xOzcobi4yUShyLjNsKDApKSl7cygpfWwgNyhpPD0ycSl7dC4xYyhvLDJxKX1se24uMUgueihcIjJHXCIsXCJcIil9fWggbj1jLHI9ZShuLiRHW24ubV0pLjE3KFwiNXdcIiksaTs3KHIuM2woMCkhPT1XKXtpPTA7bygpfWx7cygpfX0sMlE6OShlKXtoIHQ7NyghZS4zTSl7cCBifXQ9QSBlLjREOzcodCE9PVwiV1wiJiZlLjREPT09MCl7cCBifXAgan0sNGc6OSgpe2ggdD1jLG47Nyh0LjYuMkY9PT1qKXt0LiRHLlooXCIyZFwiKX10LjFEPVtdOzFBKG49dC5tO248dC5tK3QuNi5xO24rPTEpe3QuMUQuMkQobik7Nyh0LjYuMkY9PT1qKXtlKHQuJEdbbl0pLkkoXCIyZFwiKX19dC5kLjFEPXQuMUR9LDRuOjkoZSl7aCB0PWM7dC40Rz1cImQtXCIrZStcIi01QlwiO3QuNEg9XCJkLVwiK2UrXCItMzhcIn0sNGw6OSgpezkgYShlKXtwezJoOlwiNURcIixUOmUrXCJWXCJ9fWggZT1jLHQ9ZS40RyxuPWUuNEgscj1lLiRHLjFTKGUubSksaT1lLiRHLjFTKGUuMTMpLHM9MUYuNEooZS5KW2UubV0pK2UuSltlLjEzXSxvPTFGLjRKKGUuSltlLm1dKStlLk0vMix1PVwiNUcgNUggNUkgNUpcIjtlLjFFPWo7ZS4kSy5JKFwiZC0xUFwiKS56KHtcIi0xRy1QLTFQXCI6bytcIlZcIixcIi0xVy00Sy0xUFwiOm8rXCJWXCIsXCI0Sy0xUFwiOm8rXCJWXCJ9KTtpLnooYShzLDEwKSkuSSh0KS53KHUsOSgpe2UuM209ajtpLlEodSk7ZS4zMShpLHQpfSk7ci5JKG4pLncodSw5KCl7ZS4zNj1qO3IuUSh1KTtlLjMxKHIsbil9KX0sMzE6OShlLHQpe2ggbj1jO2Uueih7Mmg6XCJcIixUOlwiXCJ9KS5aKHQpOzcobi4zbSYmbi4zNil7bi4kSy5aKFwiZC0xUFwiKTtuLjNtPWI7bi4zNj1iO24uMUU9Yn19LDRvOjkoKXtoIGU9YztlLmQ9ezJBOmUuMkEsNVA6ZS4kayxTOmUuJFMsRzplLiRHLG06ZS5tLDEzOmUuMTMsMUQ6ZS4xRCwxNTplLkYuMTUsRjplLkYsMXk6ZS4xeX19LDNHOjkoKXtoIHI9YztyLiRrLlEoXCIuZCBkIDIxLjNYXCIpO2UobikuUShcIi5kIGRcIik7ZSh0KS5RKFwiNDRcIixyLjNkKX0sMVY6OSgpe2ggZT1jOzcoZS4kay4yNSgpLk4hPT0wKXtlLiRLLjNyKCk7ZS4kUy4zcigpLjNyKCk7NyhlLkIpe2UuQi4zaygpfX1lLjNHKCk7ZS4kay4yeChcIjJ3XCIsZS4kay52KFwiZC00SVwiKXx8XCJcIikuMngoXCJIXCIsZS4kay52KFwiZC00RlwiKSl9LDVUOjkoKXtoIGU9YztlLlgoKTt0LjE4KGUuMVgpO2UuMVYoKTtlLiRrLjVVKCl9LDVWOjkodCl7aCBuPWMscj1lLjRNKHt9LG4uMkEsdCk7bi4xVigpO24uMU4ocixuLiRrKX0sNVc6OShlLHQpe2ggbj1jLHI7NyghZSl7cCBifTcobi4kay4yNSgpLk49PT0wKXtuLiRrLjFvKGUpO24uMjMoKTtwIGJ9bi4xVigpOzcodD09PVd8fHQ9PT0tMSl7cj0tMX1se3I9dH03KHI+PW4uJFMuTnx8cj09PS0xKXtuLiRTLjFTKC0xKS41WChlKX1se24uJFMuMVMocikuNVkoZSl9bi4yMygpfSw1Wjo5KGUpe2ggdD1jLG47Nyh0LiRrLjI1KCkuTj09PTApe3AgYn03KGU9PT1XfHxlPT09LTEpe249LTF9bHtuPWV9dC4xVigpO3QuJFMuMVMobikuM2soKTt0LjIzKCl9fTtlLjM3LjJCPTkodCl7cCBjLjJmKDkoKXs3KGUoYykudihcImQtMU5cIik9PT1qKXtwIGJ9ZShjKS52KFwiZC0xTlwiLGopO2ggbj0zYy4zcShyKTtuLjFOKHQsYyk7ZS52KGMsXCIyQlwiLG4pfSl9O2UuMzcuMkIuNj17cTo1LDFoOmIsMXM6WzYwLDRdLDFPOls2MSwzXSwyMjpbNjIsMl0sMVE6YiwxUjpbNjMsMV0sNDg6Yiw0NjpiLDFtOjJNLDF3OjY0LDJ2OjY1LE86YiwycDpiLDJhOmIsMlU6W1wiMW5cIixcIlVcIl0sMmU6aiwxMjpiLDF2OmosMzk6YiwyWjpqLDQ1OjJNLDQ3OnQsMU06XCJkLTY2XCIsMmk6XCJkLTJpXCIsMVo6Yiw0djpqLDR4OlwiNHlcIiwxQjpiLDJPOmIsMzM6YiwzZjpqLDI3OmosMVU6aiwyRjpiLDJvOmIsM0I6YiwzRDpiLDJIOmIsM3M6YiwxWTpiLDN5OmIsM3c6YiwyRTpiLDJUOmJ9fSkoNjcsNjgsNjkpJyw2MiwzODIsJ3x8fHx8fG9wdGlvbnN8aWZ8fGZ1bmN0aW9ufHxmYWxzZXx0aGlzfG93bHx8fHx2YXJ8fHRydWV8ZWxlbXxlbHNlfGN1cnJlbnRJdGVtfHx8cmV0dXJufGl0ZW1zfHx8fHxkYXRhfG9ufHx8Y3NzfHR5cGVvZnxvd2xDb250cm9sc3wwcHh8bWF4aW11bUl0ZW18aXRlbXNBbW91bnR8YnJvd3Nlcnxvd2xJdGVtc3xjbGFzc3xhZGRDbGFzc3xwb3NpdGlvbnNJbkFycmF5fG93bFdyYXBwZXJ8ZGl2fGl0ZW1XaWR0aHxsZW5ndGh8YXV0b1BsYXl8dHJhbnNmb3JtfG9mZnxhcHBseXx1c2VySXRlbXN8bGVmdHxuZXh0fHB4fHVuZGVmaW5lZHxzdG9wfG5ld1JlbGF0aXZlWHxyZW1vdmVDbGFzc3x8bmV3UG9zWHxzY3JvbGxQZXJQYWdlfHByZXZJdGVtfG51bGx8aXNUb3VjaHxldl90eXBlc3xmaW5kfGNsZWFySW50ZXJ2YWx8cGxheXx0cmFuc2l0aW9ufGRpc2FibGVkfHNldFRpbWVvdXR8dGFyZ2V0fGxvYWRlZHx3aWR0aHxnb1RvfGl0ZW1zQ3VzdG9tfHRyYW5zbGF0ZTNkfHBhZ2V8cGFnaW5hdGlvbldyYXBwZXJ8cHJldmVudERlZmF1bHR8c2xpZGVTcGVlZHxwcmV2fGFwcGVuZHx3cmFwcGVyfGJ1dHRvbk5leHR8Y3NzMnNsaWRlfGl0ZW1zRGVza3RvcHxzd2FwU3BlZWR8YnV0dG9uUHJldnxwYWdpbmF0aW9ufHBhZ2luYXRpb25TcGVlZHxzdXBwb3J0M2R8ZHJhZ0RpcmVjdGlvbnxtc3xmb3J8YXV0b0hlaWdodHxhdXRvUGxheUludGVydmFsfHZpc2libGVJdGVtc3xpc1RyYW5zaXRpb258TWF0aHx3ZWJraXR8d3JhcHBlck91dGVyfGhhc0NsYXNzfHNyY3xpdGVtfHRyYW5zaXRpb24zZHxiYXNlQ2xhc3N8aW5pdHxpdGVtc0Rlc2t0b3BTbWFsbHxvcmlnaW58aXRlbXNUYWJsZXRTbWFsbHxpdGVtc01vYmlsZXxlcXxpc0NzczNGaW5pc2h8dG91Y2hEcmFnfHVuV3JhcHxtb3p8Y2hlY2tWaXNpYmxlfGJlZm9yZU1vdmV8bGF6eUxvYWR8fG1vdXNlZG93bnxpdGVtc1RhYmxldHxzZXRWYXJzfHJvdW5kUGFnZXN8Y2hpbGRyZW58cHJldkFycnxtb3VzZURyYWd8bW91c2V1cHxpc0Nzc0ZpbmlzaHxuYXZpZ2F0aW9ufHRvdWNoZXN8cGFnZVh8YWN0aXZlfHJld2luZE5hdnxlYWNofGp1bXBUb3xwb3NpdGlvbnx0aGVtZXxzbGlkaW5nfHJld2luZHxlYWNoTW92ZVVwZGF0ZXxpc3x0b3VjaGVuZHx0cmFuc2l0aW9uU3R5bGV8c3RvcE9uSG92ZXJ8MTAwfGFmdGVyR298ZWFzZXxvcmlnbmFsSXRlbXN8b3BhY2l0eXxyZXdpbmRTcGVlZHxzdHlsZXxhdHRyfGh0bWx8YWRkQ3NzU3BlZWR8dXNlck9wdGlvbnN8b3dsQ2Fyb3VzZWx8YWxsfHB1c2h8c3RhcnREcmFnZ2luZ3xhZGRDbGFzc0FjdGl2ZXxoZWlnaHR8YmVmb3JlSW5pdHxuZXdQb3NZfGVuZHxtb3ZlfHRhcmdldEVsZW1lbnR8MjAwfHRvdWNobW92ZXxqc29uUGF0aHxvZmZzZXRZfGNvbXBsZXRlSW1nfG9mZnNldFh8cmVsYXRpdmVQb3N8YWZ0ZXJMYXp5TG9hZHxuYXZpZ2F0aW9uVGV4dHx1cGRhdGVJdGVtc3xjYWxjdWxhdGVBbGx8dG91Y2hzdGFydHxzdHJpbmd8cmVzcG9uc2l2ZXx1cGRhdGVDb250cm9sc3xjbGVhclRyYW5zU3R5bGV8aG92ZXJTdGF0dXN8anNvblN1Y2Nlc3N8bW92ZURpcmVjdGlvbnxjaGVja1BhZ2luYXRpb258ZW5kQ3VycmVudHxmbnxpbnxwYWdpbmF0aW9uTnVtYmVyc3xjbGlja3xncmFiYmluZ3xPYmplY3R8cmVzaXplcnxjaGVja05hdmlnYXRpb258ZHJhZ0JlZm9yZUFuaW1GaW5pc2h8ZXZlbnR8b3JpZ2luYWxFdmVudHxyaWdodHxjaGVja0FwfHJlbW92ZXxnZXR8ZW5kUHJldnx2aXNpYmxlfHdhdGNoVmlzaWJpbGl0eXxOdW1iZXJ8Y3JlYXRlfHVud3JhcHxhZnRlckluaXR8bG9nSW58cGxheURpcmVjdGlvbnxtYXh8YWZ0ZXJBY3Rpb258dXBkYXRlVmFyc3xhZnRlck1vdmV8bWF4aW11bVBpeGVsc3xhcFN0YXR1c3xiZWZvcmVVcGRhdGV8ZHJhZ2dpbmd8YWZ0ZXJVcGRhdGV8cGFnZXNJbkFycmF5fHJlbG9hZHxjbGVhckV2ZW50c3xyZW1vdmVUcmFuc2l0aW9ufGRvVHJhbnNsYXRlfHNob3d8aGlkZXxjc3MybW92ZXxjb21wbGV0ZXxzcGFufGNzc1RleHR8dXBkYXRlUGFnaW5hdGlvbnxnZXN0dXJlc3xkaXNhYmxlZEV2ZW50c3xidWlsZEJ1dHRvbnN8YnVpbGRQYWdpbmF0aW9ufG1vdXNlbW92ZXx0b3VjaGNhbmNlbHxzdGFydHxkaXNhYmxlVGV4dFNlbGVjdHxtaW58bG9vcHN8Y2FsY3VsYXRlV2lkdGh8cGFnZVl8YXBwZW5kV3JhcHBlclNpemVzfGFwcGVuZEl0ZW1zU2l6ZXN8cmVzaXplfHJlc3BvbnNpdmVSZWZyZXNoUmF0ZXxpdGVtc1NjYWxlVXB8cmVzcG9uc2l2ZUJhc2VXaWR0aHxzaW5nbGVJdGVtfG91dGVyfHdyYXB8YW5pbWF0ZXxzcmNFbGVtZW50fHNldEludGVydmFsfGRyYWd8dXBkYXRlUG9zaXRpb258b25WaXNpYmxlSXRlbXN8YmxvY2t8ZGlzcGxheXxnZXROZXdQb3NpdGlvbnxkaXNhYmxlfHNpbmdsZUl0ZW1UcmFuc2l0aW9ufGNsb3Nlc3RJdGVtfHRyYW5zaXRpb25UeXBlc3xvd2xTdGF0dXN8aW5BcnJheXxtb3ZlRXZlbnRzfHJlc3BvbnNlfGNvbnRpbnVlfGJ1aWxkQ29udHJvbHN8bG9hZGluZ3xsYXp5Rm9sbG93fGxhenlQcmVsb2FkfGxhenlFZmZlY3R8ZmFkZXxvblN0YXJ0dXB8Y3VzdG9tRXZlbnRzfHdyYXBJdGVtc3xldmVudFR5cGVzfG5hdHVyYWxXaWR0aHxjaGVja0Jyb3dzZXJ8b3JpZ2luYWxDbGFzc2VzfG91dENsYXNzfGluQ2xhc3N8b3JpZ2luYWxTdHlsZXN8YWJzfHBlcnNwZWN0aXZlfGxvYWRDb250ZW50fGV4dGVuZHxfZGF0YXxyb3VuZHxtc01heFRvdWNoUG9pbnRzfDVlM3x0ZXh0fHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbnxzdG9wUHJvcGFnYXRpb258YnV0dG9uc3xldmVudHN8cG9wfHNwbGljZXxiYXNlRWxXaWR0aHxtaW5Td2lwZXxtYXhTd2lwZXxkYXJnZ2luZ3xjbGllbnRYfGNsaWVudFl8ZHVyYXRpb258ZGVzdHJveUNvbnRyb2xzfGNyZWF0ZUVsZW1lbnR8bW91c2VvdmVyfG1vdXNlb3V0fG51bWJlcnN8d2hpY2h8bGF6eU93bHxhcHBlbmRUb3xjbGVhclRpbWVvdXR8Y2hlY2tlZHxzaGlmdHxzb3J0fHJlbW92ZUF0dHJ8bWF0Y2h8ZmFkZUlufDQwMHxjbGlja2FibGV8dG9nZ2xlQ2xhc3N8d3JhcEFsbHx0b3B8cHJvcHx0YWdOYW1lfERJVnxiYWNrZ3JvdW5kfGltYWdlfHVybHx3cmFwcGVyV2lkdGh8aW1nfDUwMHxkcmFnc3RhcnR8b250b3VjaHN0YXJ0fGNvbnRyb2xzfG91dHxpbnB1dHxyZWxhdGl2ZXx0ZXh0YXJlYXxzZWxlY3R8d2Via2l0QW5pbWF0aW9uRW5kfG9BbmltYXRpb25FbmR8TVNBbmltYXRpb25FbmR8YW5pbWF0aW9uZW5kfGdldEpTT058cmV0dXJuVmFsdWV8aGFzT3duUHJvcGVydHl8b3B0aW9ufG9uc3RhcnR1cHxiYXNlRWxlbWVudHxuYXZpZ2F0b3J8bmV3fHByb3RvdHlwZXxkZXN0cm95fHJlbW92ZURhdGF8cmVpbml0fGFkZEl0ZW18YWZ0ZXJ8YmVmb3JlfHJlbW92ZUl0ZW18MTE5OXw5Nzl8NzY4fDQ3OXw4MDB8MWUzfGNhcm91c2VsfGpRdWVyeXx3aW5kb3d8ZG9jdW1lbnQnLnNwbGl0KCd8JyksMCx7fSkpIiwid2luZG93Lm1hdGNoTWVkaWE9d2luZG93Lm1hdGNoTWVkaWF8fGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBjLGQ9YS5kb2N1bWVudEVsZW1lbnQsZT1kLmZpcnN0RWxlbWVudENoaWxkfHxkLmZpcnN0Q2hpbGQsZj1hLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpLGc9YS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBnLmlkPVwibXEtdGVzdC0xXCIsZy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMDBlbVwiLGYuc3R5bGUuYmFja2dyb3VuZD1cIm5vbmVcIixmLmFwcGVuZENoaWxkKGcpLGZ1bmN0aW9uKGEpe3JldHVybiBnLmlubmVySFRNTD0nJnNoeTs8c3R5bGUgbWVkaWE9XCInK2ErJ1wiPiAjbXEtdGVzdC0xIHsgd2lkdGg6IDQycHg7IH08L3N0eWxlPicsZC5pbnNlcnRCZWZvcmUoZixlKSxjPTQyPT09Zy5vZmZzZXRXaWR0aCxkLnJlbW92ZUNoaWxkKGYpLHttYXRjaGVzOmMsbWVkaWE6YX19fShkb2N1bWVudCk7KGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHgoKXt1KCEwKX12YXIgYj17fTtpZihhLnJlc3BvbmQ9YixiLnVwZGF0ZT1mdW5jdGlvbigpe30sYi5tZWRpYVF1ZXJpZXNTdXBwb3J0ZWQ9YS5tYXRjaE1lZGlhJiZhLm1hdGNoTWVkaWEoXCJvbmx5IGFsbFwiKS5tYXRjaGVzLCFiLm1lZGlhUXVlcmllc1N1cHBvcnRlZCl7dmFyIHEscix0LGM9YS5kb2N1bWVudCxkPWMuZG9jdW1lbnRFbGVtZW50LGU9W10sZj1bXSxnPVtdLGg9e30saT0zMCxqPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxkLGs9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJhc2VcIilbMF0sbD1qLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKSxtPVtdLG49ZnVuY3Rpb24oKXtmb3IodmFyIGI9MDtsLmxlbmd0aD5iO2IrKyl7dmFyIGM9bFtiXSxkPWMuaHJlZixlPWMubWVkaWEsZj1jLnJlbCYmXCJzdHlsZXNoZWV0XCI9PT1jLnJlbC50b0xvd2VyQ2FzZSgpO2QmJmYmJiFoW2RdJiYoYy5zdHlsZVNoZWV0JiZjLnN0eWxlU2hlZXQucmF3Q3NzVGV4dD8ocChjLnN0eWxlU2hlZXQucmF3Q3NzVGV4dCxkLGUpLGhbZF09ITApOighL14oW2EtekEtWjpdKlxcL1xcLykvLnRlc3QoZCkmJiFrfHxkLnJlcGxhY2UoUmVnRXhwLiQxLFwiXCIpLnNwbGl0KFwiL1wiKVswXT09PWEubG9jYXRpb24uaG9zdCkmJm0ucHVzaCh7aHJlZjpkLG1lZGlhOmV9KSl9bygpfSxvPWZ1bmN0aW9uKCl7aWYobS5sZW5ndGgpe3ZhciBiPW0uc2hpZnQoKTt2KGIuaHJlZixmdW5jdGlvbihjKXtwKGMsYi5ocmVmLGIubWVkaWEpLGhbYi5ocmVmXT0hMCxhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvKCl9LDApfSl9fSxwPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLm1hdGNoKC9AbWVkaWFbXlxce10rXFx7KFteXFx7XFx9XSpcXHtbXlxcfVxce10qXFx9KSsvZ2kpLGc9ZCYmZC5sZW5ndGh8fDA7Yj1iLnN1YnN0cmluZygwLGIubGFzdEluZGV4T2YoXCIvXCIpKTt2YXIgaD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8odXJsXFwoKVsnXCJdPyhbXlxcL1xcKSdcIl1bXjpcXCknXCJdKylbJ1wiXT8oXFwpKS9nLFwiJDFcIitiK1wiJDIkM1wiKX0saT0hZyYmYztiLmxlbmd0aCYmKGIrPVwiL1wiKSxpJiYoZz0xKTtmb3IodmFyIGo9MDtnPmo7aisrKXt2YXIgayxsLG0sbjtpPyhrPWMsZi5wdXNoKGgoYSkpKTooaz1kW2pdLm1hdGNoKC9AbWVkaWEgKihbXlxce10rKVxceyhbXFxTXFxzXSs/KSQvKSYmUmVnRXhwLiQxLGYucHVzaChSZWdFeHAuJDImJmgoUmVnRXhwLiQyKSkpLG09ay5zcGxpdChcIixcIiksbj1tLmxlbmd0aDtmb3IodmFyIG89MDtuPm87bysrKWw9bVtvXSxlLnB1c2goe21lZGlhOmwuc3BsaXQoXCIoXCIpWzBdLm1hdGNoKC8ob25seVxccyspPyhbYS16QS1aXSspXFxzPy8pJiZSZWdFeHAuJDJ8fFwiYWxsXCIscnVsZXM6Zi5sZW5ndGgtMSxoYXNxdWVyeTpsLmluZGV4T2YoXCIoXCIpPi0xLG1pbnc6bC5tYXRjaCgvXFwoXFxzKm1pblxcLXdpZHRoXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvKSYmcGFyc2VGbG9hdChSZWdFeHAuJDEpKyhSZWdFeHAuJDJ8fFwiXCIpLG1heHc6bC5tYXRjaCgvXFwoXFxzKm1heFxcLXdpZHRoXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvKSYmcGFyc2VGbG9hdChSZWdFeHAuJDEpKyhSZWdFeHAuJDJ8fFwiXCIpfSl9dSgpfSxzPWZ1bmN0aW9uKCl7dmFyIGEsYj1jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1jLmJvZHksZj0hMTtyZXR1cm4gYi5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW1cIixlfHwoZT1mPWMuY3JlYXRlRWxlbWVudChcImJvZHlcIiksZS5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiKSxlLmFwcGVuZENoaWxkKGIpLGQuaW5zZXJ0QmVmb3JlKGUsZC5maXJzdENoaWxkKSxhPWIub2Zmc2V0V2lkdGgsZj9kLnJlbW92ZUNoaWxkKGUpOmUucmVtb3ZlQ2hpbGQoYiksYT10PXBhcnNlRmxvYXQoYSl9LHU9ZnVuY3Rpb24oYil7dmFyIGg9XCJjbGllbnRXaWR0aFwiLGs9ZFtoXSxtPVwiQ1NTMUNvbXBhdFwiPT09Yy5jb21wYXRNb2RlJiZrfHxjLmJvZHlbaF18fGssbj17fSxvPWxbbC5sZW5ndGgtMV0scD0obmV3IERhdGUpLmdldFRpbWUoKTtpZihiJiZxJiZpPnAtcSlyZXR1cm4gYS5jbGVhclRpbWVvdXQocikscj1hLnNldFRpbWVvdXQodSxpKSx2b2lkIDA7cT1wO2Zvcih2YXIgdiBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkodikpe3ZhciB3PWVbdl0seD13Lm1pbncseT13Lm1heHcsej1udWxsPT09eCxBPW51bGw9PT15LEI9XCJlbVwiO3gmJih4PXBhcnNlRmxvYXQoeCkqKHguaW5kZXhPZihCKT4tMT90fHxzKCk6MSkpLHkmJih5PXBhcnNlRmxvYXQoeSkqKHkuaW5kZXhPZihCKT4tMT90fHxzKCk6MSkpLHcuaGFzcXVlcnkmJih6JiZBfHwhKHp8fG0+PXgpfHwhKEF8fHk+PW0pKXx8KG5bdy5tZWRpYV18fChuW3cubWVkaWFdPVtdKSxuW3cubWVkaWFdLnB1c2goZlt3LnJ1bGVzXSkpfWZvcih2YXIgQyBpbiBnKWcuaGFzT3duUHJvcGVydHkoQykmJmdbQ10mJmdbQ10ucGFyZW50Tm9kZT09PWomJmoucmVtb3ZlQ2hpbGQoZ1tDXSk7Zm9yKHZhciBEIGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eShEKSl7dmFyIEU9Yy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksRj1uW0RdLmpvaW4oXCJcXG5cIik7RS50eXBlPVwidGV4dC9jc3NcIixFLm1lZGlhPUQsai5pbnNlcnRCZWZvcmUoRSxvLm5leHRTaWJsaW5nKSxFLnN0eWxlU2hlZXQ/RS5zdHlsZVNoZWV0LmNzc1RleHQ9RjpFLmFwcGVuZENoaWxkKGMuY3JlYXRlVGV4dE5vZGUoRikpLGcucHVzaChFKX19LHY9ZnVuY3Rpb24oYSxiKXt2YXIgYz13KCk7YyYmKGMub3BlbihcIkdFVFwiLGEsITApLGMub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7NCE9PWMucmVhZHlTdGF0ZXx8MjAwIT09Yy5zdGF0dXMmJjMwNCE9PWMuc3RhdHVzfHxiKGMucmVzcG9uc2VUZXh0KX0sNCE9PWMucmVhZHlTdGF0ZSYmYy5zZW5kKG51bGwpKX0sdz1mdW5jdGlvbigpe3ZhciBiPSExO3RyeXtiPW5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGMpe2I9bmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBifX0oKTtuKCksYi51cGRhdGU9bixhLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIseCwhMSk6YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9ucmVzaXplXCIseCl9fSkodGhpcyk7IiwiLyogQ3JlYXRlZCBieSBBcnRpc3RlZXIgdjQuMy4wLjYwNzQ1ICovXHJcbi8qanNoaW50IGZvcmluOnRydWUsIG5vYXJnOnRydWUsIG5vZW1wdHk6dHJ1ZSwgZXFlcWVxOnRydWUsIGJpdHdpc2U6dHJ1ZSwgc3RyaWN0OnRydWUsIHVuZGVmOnRydWUsIGN1cmx5OmZhbHNlLCBicm93c2VyOnRydWUsIGpxdWVyeTpmYWxzZSAqL1xyXG4vKmdsb2JhbCBqUXVlcnkgQmFja2dyb3VuZEhlbHBlciAqL1xyXG5cclxuLy8gY3NzIGhlbHBlclxyXG5icm93c2VyID0gZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgIHsgc3RyOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWI6ICdDaHJvbWUnLCB2ZXI6ICdDaHJvbWUnLCBuYW1lOiAnY2hyb21lJyB9LFxyXG4gICAgICAgIHsgc3RyOiBuYXZpZ2F0b3IudmVuZG9yLCBzdWI6ICdBcHBsZScsIHZlcjogJ1ZlcnNpb24nLCBuYW1lOiAnc2FmYXJpJyB9LFxyXG4gICAgICAgIHsgcHJvcDogd2luZG93Lm9wZXJhLCB2ZXI6ICdPcGVyYScsIG5hbWU6ICdvcGVyYScgfSxcclxuICAgICAgICB7IHN0cjogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViOiAnRmlyZWZveCcsIHZlcjogJ0ZpcmVmb3gnLCBuYW1lOiAnZmlyZWZveCcgfSxcclxuICAgICAgICB7IHN0cjogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViOiAnTVNJRScsIHZlcjogJ01TSUUnLCBuYW1lOiAnaWUnIH0sXHJcbiAgICAgICAgeyBzdHI6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YjogJ1RyaWRlbnQvNy4wJywgdmVyOiAncnYnLCBuYW1lOiAnaWUnIH1cclxuICAgIF07XHJcbiAgICB2YXIgdiA9IGZ1bmN0aW9uIChzLCBuKSB7XHJcbiAgICAgICAgdmFyIGkgPSBzLmluZGV4T2YoZGF0YVtuXS52ZXIpO1xyXG4gICAgICAgIHJldHVybiAoaSAhPT0gLTEpID8gcGFyc2VGbG9hdChzLnN1YnN0cmluZyhpICsgZGF0YVtuXS52ZXIubGVuZ3RoICsgMSkpIDogMDtcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0geyBuYW1lOiAndW5rbm93bicsIHZlcnNpb246IDAgfTtcclxuICAgIHZhciBodG1sID0gJCgnaHRtbCcpO1xyXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBkYXRhLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRbZGF0YVtuXS5uYW1lXSkge1xyXG4gICAgICAgICAgICByZXN1bHRbZGF0YVtuXS5uYW1lXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGRhdGFbbl0uc3RyICYmIChkYXRhW25dLnN0ci5pbmRleE9mKGRhdGFbbl0uc3ViKSAhPT0gLTEpKSB8fCBkYXRhW25dLnByb3ApIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBkYXRhW25dLm5hbWU7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHQubmFtZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IHYobmF2aWdhdG9yLnVzZXJBZ2VudCwgbikgfHwgdihuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgbik7XHJcbiAgICAgICAgICAgIGh0bWwuYWRkQ2xhc3MocmVzdWx0Lm5hbWUgKyAnICcgKyByZXN1bHQubmFtZSArIHBhcnNlSW50KHJlc3VsdC52ZXJzaW9uLCAxMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0gKGpRdWVyeSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIGlmICh0eXBlb2YgcmVzcG9uc2l2ZURlc2lnbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwiZGVza3RvcFwiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBpLCBqLCBrLCBsLCBtO1xyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiAhPT0gOSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBzcGxpdEJ5VG9rZW5zID0gZnVuY3Rpb24gKHN0ciwgc3RhcnRUb2tlbiwgZW5kVG9rZW4sIGxhc3QpIHtcclxuICAgICAgICBpZiAoIWxhc3QpIHtcclxuICAgICAgICAgICAgbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnRQb3MgPSBzdHIuaW5kZXhPZihzdGFydFRva2VuKTtcclxuICAgICAgICBpZiAoc3RhcnRQb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UG9zICs9IHN0YXJ0VG9rZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgZW5kUG9zID0gbGFzdCA/IHN0ci5sYXN0SW5kZXhPZihlbmRUb2tlbikgOiBzdHIuaW5kZXhPZihlbmRUb2tlbiwgc3RhcnRQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVuZFBvcyAhPT0gLTEgJiYgZW5kUG9zID4gc3RhcnRQb3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0UG9zLCBlbmRQb3MgLSBzdGFydFBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3BsaXRXaXRoQnJhY2tldHMgPSBmdW5jdGlvbiAoc3RyLCB0b2tlbiwgYnJhY2tldHMpIHtcclxuICAgICAgICAvKmpzaGludCBub25zdGFuZGFyZDp0cnVlICovXHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICB0b2tlbiA9ICcsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFicmFja2V0cykge1xyXG4gICAgICAgICAgICBicmFja2V0cyA9ICcoKSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBicmFja2V0ID0gMDtcclxuICAgICAgICB2YXIgc3RhcnRQb3MgPSAwO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAoYnJhY2tldHMubGVuZ2h0IDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICB3aGlsZSAocG9zIDwgc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSBzdHJbcG9zXTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSBicmFja2V0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgYnJhY2tldCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gYnJhY2tldHNbMV0pIHtcclxuICAgICAgICAgICAgICAgIGJyYWNrZXQtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2ggPT09IHRva2VuICYmIGJyYWNrZXQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzdHIuc3Vic3RyKHN0YXJ0UG9zLCBwb3MgLSBzdGFydFBvcykpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRQb3MgPSBwb3MgKyB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRQb3MsIHBvcyAtIHN0YXJ0UG9zKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJ5dGVUb0hleCA9IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdmFyIGhleCA9IE51bWJlcihkKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgd2hpbGUgKGhleC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGhleCA9IFwiMFwiICsgaGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGV4O1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xyXG4gICAgICAgIHZhciByID0gW3NdO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBzLmltcG9ydHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgci5wdXNoKHMuaW1wb3J0c1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCByLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHMgPSByW2pdO1xyXG4gICAgICAgICAgICB2YXIgbiA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcy5ydWxlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IHMucnVsZXNba10uY3NzVGV4dCB8fCBzLnJ1bGVzW2tdLnN0eWxlLmNzc1RleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXRCeVRva2Vucyhjc3MsICctc3ZnLWJhY2tncm91bmQ6JywgJzsnKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzcGxpdFdpdGhCcmFja2V0cyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGwgPSAwOyBsIDwgdmFsdWVzLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBzcGxpdEJ5VG9rZW5zKHZhbHVlc1tsXSwgJ2xpbmVhci1ncmFkaWVudCgnLCAnKScsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBzcGxpdFdpdGhCcmFja2V0cyhnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4T2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAxOyBtIDwgYXJncy5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcFZhbHVlcyA9IHNwbGl0V2l0aEJyYWNrZXRzKCQudHJpbShhcmdzW21dKSwgJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3BWYWx1ZXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BDb2xvciA9ICQudHJpbShzdG9wVmFsdWVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3BDb2xvciA9PSAndHJhbnNwYXJlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wT3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yUmdiYSA9IHNwbGl0QnlUb2tlbnMoc3RvcENvbG9yLCAncmdiYSgnLCAnKScsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcE9mZnNldCA9ICQudHJpbShzdG9wVmFsdWVzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yUmdiYSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJnYmEgPSBjb2xvclJnYmEuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZ2JhLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvciA9ICcjJyArIGJ5dGVUb0hleChyZ2JhWzBdKSArIGJ5dGVUb0hleChyZ2JhWzFdKSArIGJ5dGVUb0hleChyZ2JhWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5ID0gcmdiYVszXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNQeCA9IHN0b3BPZmZzZXQuaW5kZXhPZigncHgnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhPZmZzZXQgPSBNYXRoLm1heChtYXhPZmZzZXQsIHBhcnNlSW50KHN0b3BPZmZzZXQsIDEwKSB8fCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wcy5wdXNoKHsgb2Zmc2V0OiBzdG9wT2Zmc2V0LCBjb2xvcjogc3RvcENvbG9yLCBvcGFjaXR5OiBzdG9wT3BhY2l0eSwgaXNQeDogaXNQeCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BzWE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RTdG9wID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwOyBtIDwgc3RvcHMubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3BzW21dLmlzUHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzW21dLm9mZnNldCA9ICgocGFyc2VJbnQoc3RvcHNbbV0ub2Zmc2V0LCAxMCkgfHwgMCkgLyAobWF4T2Zmc2V0IC8gMTAwKSkgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHNYTUwgKz0gJzxzdG9wIG9mZnNldD1cIicgKyBzdG9wc1ttXS5vZmZzZXQgKyAnXCIgc3RvcC1jb2xvcj1cIicgKyBzdG9wc1ttXS5jb2xvciArICdcIiBzdG9wLW9wYWNpdHk9XCInICsgc3RvcHNbbV0ub3BhY2l0eSArICdcIi8+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPT09IHN0b3BzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTdG9wID0gc3RvcHNbbV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTGVmdCA9ICQudHJpbShhcmdzWzBdKSA9PT0gJ2xlZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSAneDE9XCIwJVwiIHkxPVwiMCVcIiAnICsgKGlzTGVmdCA/ICd4Mj1cIjEwMCVcIiB5Mj1cIjAlXCInIDogJ3gyPVwiMCVcIiB5Mj1cIjEwMCVcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBncmFkaWVudExlbmd0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4T2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudExlbmd0aCA9IG1heE9mZnNldCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gKGlzTGVmdCA/ICd3aWR0aD1cIicgKyBncmFkaWVudExlbmd0aCArICdcIiBoZWlnaHQ9XCIxMDAlXCInIDogJ3dpZHRoPVwiMTAwJVwiIGhlaWdodD1cIicgKyBncmFkaWVudExlbmd0aCArICdcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFN0b3AgIT09IG51bGwgJiYgbWF4T2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0ID0gJzxyZWN0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzTGVmdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3g9XCInICsgbWF4T2Zmc2V0ICsgJ1wiIHk9XCIwXCInIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneD1cIjBcIiB5PVwiJyArIG1heE9mZnNldCArICdcIicpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHN0eWxlPVwiZmlsbDonICsgbGFzdFN0b3AuY29sb3IgKyAnO29wYWNpdHk6JyArIGxhc3RTdG9wLm9wYWNpdHkgKyAnO1wiLz4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2Z0dyYWRpZW50ID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+PGxpbmVhckdyYWRpZW50IGlkPVwiZ1wiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiICcgKyBkaXJlY3Rpb24gKyAnPicgKyBzdG9wc1hNTCArICc8L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9XCIwXCIgeT1cIjBcIiAnICsgc2l6ZSArICcgZmlsbD1cInVybCgjZylcIiAvPicgKyBsYXN0ICsgJzwvc3ZnPic7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2xdID0gdmFsdWVzW2xdLnJlcGxhY2UoJ2xpbmVhci1ncmFkaWVudCgnICsgZyArICcpJywgJ3VybChkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShzdmdHcmFkaWVudCkgKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbi5wdXNoKHsgczogcy5ydWxlc1trXS5zZWxlY3RvclRleHQsIHY6ICdiYWNrZ3JvdW5kOiAnICsgdmFsdWVzLmpvaW4oXCIsXCIpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICBzLmFkZFJ1bGUobltrXS5zLCBuW2tdLnYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLy8gaWU4XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gOCkgcmV0dXJuO1xyXG4gICAgJCgnLnNoYXBlcycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNpYmxpbmdzKCcuc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3otaW5kZXgnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpZTdcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA3KSByZXR1cm47XHJcbiAgICB2YXIgdGV4dGJsb2NrVGV4dHMgPSAkKCcudGV4dGJsb2NrIGRpdltjbGFzcyQ9XCItdGV4dFwiXScpO1xyXG4gICAgdGV4dGJsb2NrVGV4dHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRiVGV4dCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHZhbGlnbiA9IHRiVGV4dC5jc3MoJ3ZlcnRpY2FsLWFsaWduJykgPyB0YlRleHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicpIDogJ3RvcCc7XHJcbiAgICAgICAgaWYgKHZhbGlnbiA9PT0gJ21pZGRsZScpIHtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0YlRleHQud3JhcCgnPGRpdi8+JykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHRiVGV4dC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICd0b3AnOiAnLTUwJScsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJ2F1dG8nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICc1MCUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsaWduID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICB0YlRleHQuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgJ2JvdHRvbSc6IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyogU2V0IHdtb2RlPXRyYW5zcGFyZW50IGZvciB5b3V0dWJlIGFuZCBvdGhlciB2aWRlbyBob3N0aW5ncyB0byBzaG93IGl0IHVuZGVyIHRoZSBtZW51cywgbGlnaHRib3hlcyBldGMuICovXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgdmlkZW8gPSBbXCJ5b3V0dWJlXCJdO1xyXG5cclxuICAgICQoXCJpZnJhbWVbc3JjXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWZyYW1lID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgc3JjID0gaWZyYW1lLmF0dHIoXCJzcmNcIiksXHJcbiAgICAgICAgICAgIGlzVmlkZW8gPSBmYWxzZSxcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZpZGVvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzcmMudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZpZGVvW2ldLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaXNWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc1ZpZGVvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzcmMubGFzdEluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImYW1wO3dtb2RlPXRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3JjICs9IFwiP3dtb2RlPXRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmcmFtZS5hdHRyKFwic3JjXCIsIHNyYyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgJCh3aW5kb3cpLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkgeyBuYXZpZ2F0b3JSZXNpemVIYW5kbGVyKCQoXCJodG1sXCIpLmhhc0NsYXNzKFwicmVzcG9uc2l2ZVwiKSk7IH0pO1xyXG59KTtcclxuXHJcbnZhciBuYXZpZ2F0b3JSZXNpemVIYW5kbGVyID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduKSByZXR1cm47XHJcbiAgICAgICAgJChcIi5zbGlkZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBzbGlkZXIud2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIG5hdiA9IHNsaWRlci5zaWJsaW5ncyhcIi5zbGlkZW5hdmlnYXRvclwiKTtcclxuICAgICAgICAgICAgdmFyIG5hdldpZHRoID0gbmF2Lm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgaWYgKG5hdi5sZW5ndGggJiYgbmF2V2lkdGggPCBzbGlkZXJXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGVmdCBvZmZzZXRcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gbmF2LmF0dHIoXCJkYXRhLWxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAvLyAobWFyZ2luID0gY29udGFpbmVyV2lkdGggLSAob2JqZWN0UG9zaXRpb24gKyBvYmplY3RXaWR0aCkpIDwgMFxyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmdpbiA9IHNsaWRlcldpZHRoIC0gc2xpZGVyV2lkdGggKiBwYXJzZUZsb2F0KGxlZnQpIC8gMTAwIC0gbmF2Lm91dGVyV2lkdGgoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmdpbiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXYuY3NzKFwibWFyZ2luLWxlZnRcIiwgbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbnZhciBwcm9jZXNzRWxlbWVudE11bHRpcGx5QmcgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIHJldHVybiAoZnVuY3Rpb24gKHNlbGVjdG9yLCBpbmZvKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCAhaW5mbyB8fCAhaW5mby5iZ2ltYWdlIHx8ICFpbmZvLmJncG9zaXRpb24gfHwgIWluZm8uaW1hZ2VzIHx8ICFpbmZvLnBvc2l0aW9ucykgcmV0dXJuO1xyXG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gJCgnaGVhZCBzY3JpcHRbc3JjKj1cInNjcmlwdC5qc1wiXScpO1xyXG4gICAgICAgIGlmIChzY3JpcHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSAoc2NyaXB0LmF0dHIoJ3NyYycpIHx8ICcnKTtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHRtbCA9ICcnO1xyXG4gICAgICAgIHZhciBlbCA9ICQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBiZ2ltYWdlcyA9IGluZm8uaW1hZ2VzLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB2YXIgYmdwb3NpdGlvbnMgPSBpbmZvLnBvc2l0aW9ucy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGJnaW1hZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBiZ2ltYWdlID0gJC50cmltKGJnaW1hZ2VzW2ldKTtcclxuICAgICAgICAgICAgaWYgKGJnaW1hZ2UgPT09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgdmFyIGltZ0lkeCA9IGJnaW1hZ2UubGFzdEluZGV4T2YoJ2ltYWdlcy8nKTtcclxuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGJnaW1hZ2Uuc3Vic3RyaW5nKGltZ0lkeCArIDcsIGJnaW1hZ2UubGVuZ3RoIC0gNik7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZChcIjxkaXYgY2xhc3M9XFxcImllOGZpeCBcIiArIGNsYXNzTmFtZSArIFwiXFxcIiBzdHlsZT1cXFwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpcIiArIGJnaW1hZ2UucmVwbGFjZSgvKGltYWdlc1xcL1teXFwvXSspJC8sIHBhdGggKyAnJDEnKSArIFwiIFwiICsgYmdwb3NpdGlvbnNbaV0gKyBcIiBuby1yZXBlYXRcXFwiPjwvZGl2PlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWwuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgaW5mby5iZ2ltYWdlLnJlcGxhY2UoLyhpbWFnZXNcXC9bXlxcL10rKSQvLCBwYXRoICsgJyQxJykpO1xyXG4gICAgICAgIGVsLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbi14JywgXCI1MCVcIik7XHJcbiAgICAgICAgZWwuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknLCBcIjUwJVwiKTtcclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbnZhciByZXNwb25zaXZlTmF2aWdhdG9yID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWFkZXJPYmplY3RSZXNpemVyICE9PSAndW5kZWZpbmVkJyAmJiBoZWFkZXJPYmplY3RSZXNpemVyLmlzUHJldmlldykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgc2hlZXQgPSAkKCcuc2hlZXQnKTtcclxuICAgICAgICB2YXIgc2hlZXRXaWR0aCA9IHNoZWV0Lm91dGVyV2lkdGgoKTtcclxuXHJcbiAgICAgICAgJChcIi5zbGlkZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZXJXaWR0aCA9IGN1cnJlbnRTbGlkZXIud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJOYXZpZ2F0b3IgPSBjdXJyZW50U2xpZGVyLnNpYmxpbmdzKFwiLnNsaWRlbmF2aWdhdG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVyTmF2aWdhdG9yLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZiA9IHNoZWV0TGVmdEZ1bmMoc2hlZXQsIHNsaWRlck5hdmlnYXRvcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FsY1dpZHRoID0gaXNDb250ZW50U2xpZGVyKHNsaWRlck5hdmlnYXRvcikgPyBjdXJyZW50U2xpZGVyV2lkdGggOiBzaGVldFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0b3JXaWR0aCA9IHNsaWRlck5hdmlnYXRvci5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoc2xpZGVyTmF2aWdhdG9yLmF0dHIoJ2RhdGEtb2Zmc2V0JykgfHwgMCwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxlZnQgb2Zmc2V0XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXZpZ2F0b3IuY3NzKCdtYXJnaW4tbGVmdCcsICcwcHgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IHBhcnNlRmxvYXQoc2xpZGVyTmF2aWdhdG9yLmF0dHIoXCJkYXRhLWxlZnRcIiksIDEwKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdMZWZ0ID0gb2ZmICsgdW5pVG9QeChsZWZ0LCBuYXZpZ2F0b3JXaWR0aCwgY2FsY1dpZHRoKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlck5hdmlnYXRvci5jc3MoJ2xlZnQnLCBuZXdMZWZ0ICsgJ3B4Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRvcCB0byBvcmlnaW5hbCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyTmF2aWdhdG9yLmNzcyhcInRvcFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0b3BcclxuICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0b3JIZWlnaHQgPSBzbGlkZXJOYXZpZ2F0b3Iub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB1bml5ID0gcGFyc2VGbG9hdChzbGlkZXJOYXZpZ2F0b3IuYXR0cignZGF0YS10b3AnKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXJIZWlnaHQgPSBwYXJzZUludChjdXJyZW50U2xpZGVyLmNzcygnaGVpZ2h0JyksIDEwKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdUb3AgPSB1bmlUb1B4KHVuaXksIG5hdmlnYXRvckhlaWdodCwgc2xpZGVySGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXZpZ2F0b3IuY3NzKFwidG9wXCIsIChuZXdUb3AgKyBvZmZzZXQpICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcmVzcG9uc2l2ZURlc2lnbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICQod2luZG93KS5iaW5kKFwicmVzaXplXCIsIHJlc3BvbnNpdmVOYXZpZ2F0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gcGFnZUluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemVcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZihcImxvYWRcIiwgcGFnZUluaXRpYWxpemUpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgJCgnbmF2Lm5hdicpLmFkZENsYXNzKFwiZGVza3RvcC1uYXZcIik7XHJcbn0pO1xyXG5cclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gNykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJ3VsLmhtZW51PmxpOm5vdCg6Zmlyc3QtY2hpbGQpJykuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykucHJlcGVuZCgnPHNwYW4gY2xhc3M9XCJobWVudS1zZXBhcmF0b3JcIj4gPC9zcGFuPicpOyB9KTtcclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgJChcInVsLmhtZW51IGE6bm90KFtocmVmXSlcIikuYXR0cignaHJlZicsICcjJykuY2xpY2soZnVuY3Rpb24gKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcclxufSk7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEZpeCB3aWR0aCBvZiBzdWJtZW51IGl0ZW1zLlxyXG4gICAgKiBUaGUgd2lkdGggb2Ygc3VibWVudSBpdGVtIGNhbGN1bGF0ZWQgaW5jb3JyZWN0bHkgaW4gSUU2LTcuIElFNiBoYXMgd2lkZXIgaXRlbXMsIElFNyBkaXNwbGF5IGl0ZW1zIGxpa2Ugc3RhaXJzLlxyXG4gICAgKi9cclxuICAgICQuZWFjaCgkKFwidWwuaG1lbnUgdWxcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWF4U3ViaXRlbVdpZHRoID0gMDtcclxuICAgICAgICB2YXIgc3VibWVudSA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHN1Yml0ZW0gPSBudWxsO1xyXG4gICAgICAgICQuZWFjaChzdWJtZW51LmNoaWxkcmVuKFwibGlcIikuY2hpbGRyZW4oXCJhXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN1Yml0ZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgc3ViaXRlbVdpZHRoID0gc3ViaXRlbS5vdXRlcldpZHRoKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKG1heFN1Yml0ZW1XaWR0aCA8IHN1Yml0ZW1XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbWF4U3ViaXRlbVdpZHRoID0gc3ViaXRlbVdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHN1Yml0ZW0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHN1Yml0ZW1Cb3JkZXJMZWZ0ID0gcGFyc2VJbnQoc3ViaXRlbS5jc3MoXCJib3JkZXItbGVmdC13aWR0aFwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBzdWJpdGVtQm9yZGVyUmlnaHQgPSBwYXJzZUludChzdWJpdGVtLmNzcyhcImJvcmRlci1yaWdodC13aWR0aFwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBzdWJpdGVtUGFkZGluZ0xlZnQgPSBwYXJzZUludChzdWJpdGVtLmNzcyhcInBhZGRpbmctbGVmdFwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBzdWJpdGVtUGFkZGluZ1JpZ2h0ID0gcGFyc2VJbnQoc3ViaXRlbS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgbWF4U3ViaXRlbVdpZHRoIC09IHN1Yml0ZW1Cb3JkZXJMZWZ0ICsgc3ViaXRlbUJvcmRlclJpZ2h0ICsgc3ViaXRlbVBhZGRpbmdMZWZ0ICsgc3ViaXRlbVBhZGRpbmdSaWdodDtcclxuICAgICAgICAgICAgc3VibWVudS5jaGlsZHJlbihcImxpXCIpLmNoaWxkcmVuKFwiYVwiKS5jc3MoXCJ3aWR0aFwiLCBtYXhTdWJpdGVtV2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgc2V0RGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2V0SE1lbnVPcGVuRGlyZWN0aW9uKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiBcImRpdi5zaGVldFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGFpbmVyOiBcIiNtYWluXCIsXHJcbiAgICAgICAgICAgIG1lbnVDbGFzczogXCJobWVudVwiLFxyXG4gICAgICAgICAgICBsZWZ0VG9SaWdodENsYXNzOiBcImhtZW51LWxlZnQtdG8tcmlnaHRcIixcclxuICAgICAgICAgICAgcmlnaHRUb0xlZnRDbGFzczogXCJobWVudS1yaWdodC10by1sZWZ0XCJcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNpdmVEZXNpZ24gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc3BvbnNpdmUnLCBzZXREaXJlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXREaXJlY3Rpb24oKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgc2V0SE1lbnVPcGVuRGlyZWN0aW9uID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiAoZnVuY3Rpb24obWVudUluZm8pIHtcclxuICAgICAgICB2YXIgZGVmYXVsdENvbnRhaW5lciA9ICQobWVudUluZm8uZGVmYXVsdENvbnRhaW5lcik7XHJcbiAgICAgICAgZGVmYXVsdENvbnRhaW5lciA9IGRlZmF1bHRDb250YWluZXIubGVuZ3RoID4gMCA/IGRlZmF1bHRDb250YWluZXIgPSAkKGRlZmF1bHRDb250YWluZXJbMF0pIDogbnVsbDtcclxuXHJcbiAgICAgICAgJChcInVsLlwiICsgbWVudUluZm8ubWVudUNsYXNzICsgXCI+bGk+dWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzdWJtZW51ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdWJtZW51V2lkdGggPSBzdWJtZW51Lm91dGVyV2lkdGgoZmFsc2UpO1xyXG4gICAgICAgICAgICB2YXIgc3VibWVudUxlZnQgPSBzdWJtZW51Lm9mZnNldCgpLmxlZnQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFpbkNvbnRhaW5lciA9IHN1Ym1lbnUucGFyZW50cyhtZW51SW5mby5jb250YWluZXIpO1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyID0gbWFpbkNvbnRhaW5lci5sZW5ndGggPiAwID8gbWFpbkNvbnRhaW5lciA9ICQobWFpbkNvbnRhaW5lclswXSkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IG1haW5Db250YWluZXIgfHwgZGVmYXVsdENvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckxlZnQgPSBjb250YWluZXIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3VibWVudUxlZnQgKyBzdWJtZW51V2lkdGggPj0gY29udGFpbmVyTGVmdCArIGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcmlnaHQgdG8gbGVmdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1lbnUuYWRkQ2xhc3MobWVudUluZm8ucmlnaHRUb0xlZnRDbGFzcykuZmluZChcInVsXCIpLmFkZENsYXNzKG1lbnVJbmZvLnJpZ2h0VG9MZWZ0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJtZW51TGVmdCA8PSBjb250YWluZXJMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogbGVmdCB0byByaWdodCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1lbnUuYWRkQ2xhc3MobWVudUluZm8ubGVmdFRvUmlnaHRDbGFzcykuZmluZChcInVsXCIpLmFkZENsYXNzKG1lbnVJbmZvLmxlZnRUb1JpZ2h0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG52YXIgbWVudUV4dGVuZGVkQ3JlYXRlID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNoZWV0ID0gJChcIi5zaGVldFwiKTtcclxuICAgICAgICB2YXIgc2hlZXRMZWZ0ID0gc2hlZXQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB2YXIgc2hlZXRXaWR0aCA9IHNoZWV0LndpZHRoKCk7XHJcblxyXG4gICAgICAgICQoXCIuaG1lbnU+bGlcIikuZWFjaChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgIHZhciBpdG0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgc3VibSA9IGl0bS5jaGlsZHJlbihcInVsXCIpO1xyXG4gICAgICAgICAgICBpZiAoc3VibS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcmVzZXRcclxuICAgICAgICAgICAgaXRtLnJlbW92ZUNsYXNzKFwiZXh0IGV4dC1yIGV4dC1sXCIpO1xyXG4gICAgICAgICAgICBpdG0uY3NzKFwid2lkdGhcIiwgXCJcIikuZmluZChcIi5leHQtb2ZmLC5leHQtbSwuZXh0LWwsLmV4dC1yXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJtLmNoaWxkcmVuKFwibGlcIikuY2hpbGRyZW4oXCJhXCIpLmNzcyhcIndpZHRoXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGx3ID0gMCwgcncgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1Ym0uYXR0cihcImRhdGEtZXh0LWxcIikgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHN1Ym0uYXR0cihcImRhdGEtZXh0LXJcIikgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGx3ID0gcGFyc2VJbnQoc3VibS5hdHRyKFwiZGF0YS1leHQtbFwiKSwgMTApICsgMDtcclxuICAgICAgICAgICAgICAgIHJ3ID0gcGFyc2VJbnQoc3VibS5hdHRyKFwiZGF0YS1leHQtclwiKSwgMTApICsgMDtcclxuICAgICAgICAgICAgICAgIGl0bS5hZGRDbGFzcyhcImV4dC1yXCIpLmFkZENsYXNzKFwiZXh0LWxcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbHRyID0gIXN1Ym0uaGFzQ2xhc3MoXCJobWVudS1yaWdodC10by1sZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgaXRtLmFkZENsYXNzKGx0ciA/IFwiZXh0LXJcIiA6IFwiZXh0LWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzaGFkb3cgPSAwO1xyXG4gICAgICAgICAgICBpZiAoc3VibS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG5rID0gaXRtLmNoaWxkcmVuKFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBsbmtXaWR0aCA9IGxuay5vdXRlcldpZHRoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0bS5jc3MoXCJ3aWR0aFwiLCBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobG5rV2lkdGgsIDEwKSkgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnViYXJNYXJnaW4gPSA0ICogMjsgLy8gbWFyZ2luICogMiBzaWRlc1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnViYXJCb3JkZXIgPSAxICogMjsgLy8gYm9yZGVyIDEgc2lkZVxyXG4gICAgICAgICAgICAgICAgdmFyIHN1Ym1XaWR0aCA9IHN1Ym0ud2lkdGgoKSArIHNoYWRvdyArIG1lbnViYXJNYXJnaW4gKyBtZW51YmFyQm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSBzdWJtV2lkdGggLSBsbmtXaWR0aDtcclxuICAgICAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPVxcXCJleHQtb2ZmXFxcIj48L2Rpdj5cIikuaW5zZXJ0QmVmb3JlKGxuayk7XHJcbiAgICAgICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz1cXFwiZXh0LW1cXFwiPjwvZGl2PlwiKS5pbnNlcnRCZWZvcmUobG5rKTtcclxuICAgICAgICAgICAgICAgIGlmICh3IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJtQSA9IHN1Ym0uY2hpbGRyZW4oXCJsaVwiKS5jaGlsZHJlbihcImFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBMID0gcGFyc2VJbnQoc3VibUEuY3NzKFwicGFkZGluZy1sZWZ0XCIpLnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBSID0gcGFyc2VJbnQoc3VibUEuY3NzKFwicGFkZGluZy1yaWdodFwiKS5yZXBsYWNlKFwicHhcIiwgXCJcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiTCA9IHBhcnNlSW50KHN1Ym1BLmNzcyhcImJvcmRlci1sZWZ0XCIpLnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJSID0gcGFyc2VJbnQoc3VibUEuY3NzKFwiYm9yZGVyLXJpZ2h0XCIpLnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibS5jaGlsZHJlbihcImxpXCIpLmNoaWxkcmVuKFwiYVwiKS5jc3MoXCJ3aWR0aFwiLCAobG5rV2lkdGggLSBwTCAtIHBSIC0gYkwgLSBiUikgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1XaWR0aCA9IHN1Ym0ud2lkdGgoKSArIHNoYWRvdyArIG1lbnViYXJNYXJnaW4gKyBtZW51YmFyQm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHcgPSBzdWJtV2lkdGggLSBsbmtXaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPVxcXCJleHQtbFxcXCIgc3R5bGU9XFxcIndpZHRoOiBcIiArIChsdyA+IDAgPyBsdyA6IE1hdGgucm91bmQocGFyc2VGbG9hdCh3LCAxMCkpKSArIFwicHg7XFxcIj48L2Rpdj5cIikuaW5zZXJ0QmVmb3JlKGxuayk7XHJcbiAgICAgICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz1cXFwiZXh0LXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogXCIgKyAocncgPiAwID8gcncgOiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQodywgMTApKSkgKyBcInB4O1xcXCI+PC9kaXY+XCIpLmluc2VydEJlZm9yZShsbmspO1xyXG4gICAgICAgICAgICAgICAgaXRtLmFkZENsYXNzKFwiZXh0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5qUXVlcnkod2luZG93KS5sb2FkKG1lbnVFeHRlbmRlZENyZWF0ZSk7XHJcblxyXG5cclxuLyogSWNvbnMgaW4gSGVhZGVyIHNob3VsZCBoYXZlIGRpc3BsYXkgYmxvY2suXHJcbiAqIE90aGVyd2lzZSwgaW4gY2FzZSBvZiBpbmxpbmUtYmxvY2sgdGhlcmUncyBhIHNwYWNlIGdhcCBpbiBzb21lIGJyb3dzZXJzIChPcGVyYSAxMi4xNikgYW5kIGljb24gaXMgY3V0dGVkLlxyXG4gKi9cclxuaWYgKGJyb3dzZXIub3BlcmEpIHtcclxuICAgIGpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgICAgICQoXCIuaGVhZGVyIGFbY2xhc3MkPSd0YWctaWNvbiddXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLnZlcnNpb24gPCA4KSB7XHJcbiAgICAgICAgJCh3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYyA9ICQoJ2Rpdi5jb250ZW50Jyk7XHJcbiAgICAgICAgICAgIHZhciBzID0gYy5wYXJlbnQoKS5jaGlsZHJlbignLmxheW91dC1jZWxsOm5vdCguY29udGVudCknKTtcclxuICAgICAgICAgICAgdmFyIHcgPSAwO1xyXG4gICAgICAgICAgICBjLmhpZGUoKTtcclxuICAgICAgICAgICAgcy5lYWNoKGZ1bmN0aW9uKCkgeyB3ICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTsgfSk7XHJcbiAgICAgICAgICAgIGMudyA9IGMucGFyZW50KCkud2lkdGgoKTsgYy5jc3MoJ3dpZHRoJywgYy53IC0gdyArICdweCcpO1xyXG4gICAgICAgICAgICBjLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgaWYgKCEkKCdodG1sJykuaGFzQ2xhc3MoJ2llNycpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgndWwudm1lbnUgbGk6bm90KDpmaXJzdC1jaGlsZCksdWwudm1lbnUgbGkgbGkgbGk6Zmlyc3QtY2hpbGQsdWwudm1lbnU+bGk+dWwnKS5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ2bWVudS1zZXBhcmF0b3JcIj4gPC9kaXY+PGRpdiBjbGFzcz1cInZtZW51LXNlcGFyYXRvci1iZ1wiPiA8L2Rpdj4nKTsgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG52YXIgYXJ0QnV0dG9uU2V0dXAgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICQuZWFjaCgkKFwiYS5cIiArIGNsYXNzTmFtZSArIFwiLCBidXR0b24uXCIgKyBjbGFzc05hbWUgKyBcIiwgaW5wdXQuXCIgKyBjbGFzc05hbWUpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBiID0gJCh2YWwpO1xyXG4gICAgICAgICAgICBpZiAoIWIuaGFzQ2xhc3MoJ2J1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBiLmFkZENsYXNzKCdidXR0b24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYi5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgYi52YWwoYi52YWwoKS5yZXBsYWNlKC9eXFxzKi8sICcnKSkuY3NzKCd6b29tJywgJzEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiLm1vdXNlZG93bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBiLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5tb3VzZXVwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChiLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChiLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG5qUXVlcnkoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYXJ0QnV0dG9uU2V0dXAoXCJidXR0b25cIik7XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgICQoJ2lucHV0LnNlYXJjaC1idXR0b24sIGZvcm0uc2VhcmNoIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCd2YWx1ZScsICcnKTtcclxufSk7XHJcblxyXG52YXIgQ29udHJvbCA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24obGFiZWwsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBjaEF0dHIgPSBsYWJlbC5maW5kKCdpbnB1dFt0eXBlPVwiJyArdHlwZSArICdcIl0nKS5hdHRyKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIGlmIChjaEF0dHIgPT09ICdjaGVja2VkJykge1xyXG4gICAgICAgICAgICAgIGxhYmVsLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsLm1vdXNlbGVhdmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYWJlbC5tb3VzZW92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hvdmVyZWQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYWJlbC5tb3VzZWRvd24oZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhYmVsLm1vdXNldXAoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuYWRkQ2xhc3MoJ2hvdmVyZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgJCgnLnBhZ2VyJykuY29udGVudHMoKS5maWx0ZXIoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gdGhpcy5URVhUX05PREU7XHJcbiAgICAgICAgfVxyXG4gICAgKS5yZW1vdmUoKTtcclxufSk7XHJcbnZhciBmaXhSc3NJY29uTGluZUhlaWdodCA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICQoXCIuXCIgKyBjbGFzc05hbWUpLmNzcyhcImxpbmUtaGVpZ2h0XCIsICQoXCIuXCIgKyBjbGFzc05hbWUpLmhlaWdodCgpICsgXCJweFwiKTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIHJzc0ljb25zID0gJChcIi5yc3MtdGFnLWljb25cIik7XHJcbiAgICBpZiAocnNzSWNvbnMubGVuZ3RoKXtcclxuICAgICAgICBmaXhSc3NJY29uTGluZUhlaWdodChcInJzcy10YWctaWNvblwiKTtcclxuICAgICAgICBpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLnZlcnNpb24gPCA5KSB7XHJcbiAgICAgICAgICAgIHJzc0ljb25zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQudHJpbSgkKHRoaXMpLmh0bWwoKSkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInZlcnRpY2FsLWFsaWduXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG52YXIgVGhlbWVMaWdodGJveCA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltYWdlcyA9ICQoXCIubGlnaHRib3hcIik7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKGN0cmwpIHtcclxuICAgICAgICAgICAgJChcIi5saWdodGJveFwiKS5tb3VzZXVwKHsgX2N0cmw6IGN0cmwgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoZS5kYXRhLl9jdHJsID09PSB0cnVlICYmICFlLmN0cmxLZXkpIHx8IChlLndoaWNoICYmIGUud2hpY2ggIT09IDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlcyA9ICQoXCIubGlnaHRib3hcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGltYWdlcy5pbmRleCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nQ29udGFpbmVyID0gJCgnLmxpZ2h0Ym94LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbWdDb250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXdyYXBwZXJcIj4nKS5jc3MoJ2xpbmUtaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKFwiYm9keVwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZUJ0biA9ICQoJzxkaXYgY2xhc3M9XCJjbG9zZVwiPjxkaXYgY2xhc3M9XCJjd1wiPiA8L2Rpdj48ZGl2IGNsYXNzPVwiY2N3XCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJjbG9zZS1hbHRcIj4mIzEwMDA3OzwvZGl2PjwvZGl2PicpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soY2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFwcGVuZFRvKGltZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1vdmUoY3VycmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmUoaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNob3dFcnJvcihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ID0gaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmxpZ2h0Ym94LWltYWdlOm5vdCguYWN0aXZlKVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoJzxpbWcgY2xhc3M9XCJsaWdodGJveC1pbWFnZVwiIGFsdD1cIlwiIHNyYz1cIicgKyBnZXRGdWxsSW1nU3JjKCQoaW1hZ2VzW2N1cnJlbnRdKS5hdHRyKFwic3JjXCIpKSArICdcIiAvPicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZShjdXJyZW50ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUuYWZ0ZXIodGFyZ2V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlclwiKS5hcHBlbmQodGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2hvd0Fycm93cygpO1xyXG4gICAgICAgICAgICBzaG93TG9hZGVyKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgYmluZE1vdXNlKCQoXCIubGlnaHRib3gtd3JhcHBlclwiKS5hZGQodGFyZ2V0KSk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0LmVycm9yKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmF0dHIoXCJzcmNcIiwgJChpbWFnZXNbY3VycmVudF0pLmF0dHIoXCJzcmNcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dBcnJvd3MoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmFycm93XCIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyXCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwiYXJyb3cgbGVmdFwiPjxkaXYgY2xhc3M9XCJhcnJvdy10IGNjd1wiPiA8L2Rpdj48ZGl2IGNsYXNzPVwiYXJyb3ctYiBjd1wiPiA8L2Rpdj48ZGl2IGNsYXNzPVwiYXJyb3ctbGVmdC1hbHRcIj4mIzg1OTI7PC9kaXY+PC9kaXY+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcInRvcFwiLCAkKHdpbmRvdykuaGVpZ2h0KCkgLyAyIC0gNDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmUoY3VycmVudCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlclwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cImFycm93IHJpZ2h0XCI+PGRpdiBjbGFzcz1cImFycm93LXQgY3dcIj4gPC9kaXY+PGRpdiBjbGFzcz1cImFycm93LWIgY2N3XCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJhcnJvdy1yaWdodC1hbHRcIj4mIzg1OTQ7PC9kaXY+PC9kaXY+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcInRvcFwiLCAkKHdpbmRvdykuaGVpZ2h0KCkgLyAyIC0gNDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmUoY3VycmVudCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAuYXJyb3cubGVmdFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5hcnJvdy5sZWZ0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5hcnJvdy5yaWdodFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5hcnJvdy5yaWdodFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93RXJyb3IoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlclwiKS5hcHBlbmQoJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWVycm9yXCI+VGhlIHJlcXVlc3RlZCBjb250ZW50IGNhbm5vdCBiZSBsb2FkZWQuPGJyLz5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyLjwvZGl2PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoeyBcInRvcFwiOiAkKHdpbmRvdykuaGVpZ2h0KCkgLyAyIC0gNjAsIFwibGVmdFwiOiAkKHdpbmRvdykud2lkdGgoKSAvIDIgLSAxNzAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5saWdodGJveC1lcnJvclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0xvYWRlcihlbmFibGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlbmFibGUpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAubG9hZGluZ1wiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+IDwvZGl2PicpLmNzcyh7IFwidG9wXCI6ICQod2luZG93KS5oZWlnaHQoKSAvIDIgLSAxNiwgXCJsZWZ0XCI6ICQod2luZG93KS53aWR0aCgpIC8gMiAtIDE2IH0pLmFwcGVuZFRvKCQoXCIubGlnaHRib3gtd3JhcHBlclwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRNb3VzZShpbWcpIHtcclxuICAgICAgICAgICAgaW1nLmJpbmQoJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yZ0V2ZW50ID0gd2luZG93LmV2ZW50IHx8IGUub3JpZ2luYWxFdmVudDtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IChvcmdFdmVudC53aGVlbERlbHRhID8gb3JnRXZlbnQud2hlZWxEZWx0YSA6IG9yZ0V2ZW50LmRldGFpbCAqIC0xKSA+IDAgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICBtb3ZlKGN1cnJlbnQgKyBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pLm1vdXNlZG93bihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xvc2Ugb24gbWlkZGxlIGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEZ1bGxJbWdTcmMoc3JjKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IHNyYy5zdWJzdHJpbmcoMCwgc3JjLmxhc3RJbmRleE9mKCcuJykpO1xyXG4gICAgICAgICAgICB2YXIgZXh0ID0gc3JjLnN1YnN0cmluZyhzcmMubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWxlTmFtZSArIFwiLWxhcmdlXCIgKyBleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIG5ldyBUaGVtZUxpZ2h0Ym94KCkuaW5pdCgpO1xyXG59KTtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgLy8gdHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uRW5kICYmIGJyb3dzZXIgcHJlZml4XHJcbiAgICAkLnN1cHBvcnQudGhlbWVUcmFuc2l0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGhpc0JvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuICAgICAgICAgICAgdGhpc1N0eWxlID0gdGhpc0JvZHkuc3R5bGUsXHJcbiAgICAgICAgICAgIHN1cHBvcnQgPSB0aGlzU3R5bGUudHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzU3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzU3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzU3R5bGUuTXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXNTdHlsZS5PVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBzdXBwb3J0ICYmIHtcclxuICAgICAgICAgICAgZXZlbnQ6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmRcIjtcclxuICAgICAgICAgICAgfSkoKSxcclxuICAgICAgICAgICAgcHJlZml4OiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmE6IFwiLW8tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWZveDogXCItbW96LVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZTogXCItd2Via2l0LVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhZmFyaTogXCItd2Via2l0LVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGllOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9W2Jyb3dzZXIubmFtZV0gfHwgXCJcIik7XHJcbiAgICAgICAgICAgIH0pKClcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB3aW5kb3cuQmFja2dyb3VuZEhlbHBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2xpZGVzID0gW107XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IFwibmV4dFwiO1xyXG4gICAgICAgIHZhciBtb3Rpb24gPSBcImhvcml6b250YWxcIjtcclxuICAgICAgICB2YXIgd2lkdGggPSAwO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSAwO1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyID0gMTtcclxuICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IDA7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gMDtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKG1vdGlvblR5cGUsIGRpciwgZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlyO1xyXG4gICAgICAgICAgICBtb3Rpb24gPSBtb3Rpb25UeXBlO1xyXG4gICAgICAgICAgICBzbGlkZXMgPSBbXTtcclxuICAgICAgICAgICAgd2lkdGggPSAwO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gMTtcclxuICAgICAgICAgICAgb3JpZ2luYWxXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsSGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU2xpZGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgbW9kaWZ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShlbGVtZW50LCBudWxsKTtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJnUG9zaXRpb24gPSBlbGVtZW50LmNzcyhcImJhY2tncm91bmQtcG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbnMgPSBiZ1Bvc2l0aW9uLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgJC5lYWNoKHBvc2l0aW9ucywgZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICQudHJpbSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IHBvc2l0aW9uLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB6ZXJvVmFsdWUgPSBicm93c2VyLmllICYmIGJyb3dzZXIudmVyc2lvbiA+PSAxMCA/IDAuMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gcG9pbnRbMF0uaW5kZXhPZignJScpID09PSAtMSA/IHBhcnNlRmxvYXQocG9pbnRbMF0sIDEwKSA6IHplcm9WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHBvaW50WzFdLmluZGV4T2YoJyUnKSA9PT0gLTEgPyBwYXJzZUZsb2F0KHBvaW50WzFdLCAxMCkgOiB6ZXJvVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3MucHVzaCh7IHg6IHplcm9WYWx1ZSwgeTogemVyb1ZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCI6IGVsZW1lbnQuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiKSxcclxuICAgICAgICAgICAgICAgIFwic2l6ZXNcIjogZWxlbWVudC5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIiksXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uc1wiOiBwb3NcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobW9kaWZ5KVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwibm9uZVwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5pdGlhbFNpemUpIHtcclxuICAgICAgICAgICAgd2lkdGggPSBlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsU2l6ZSAmJiBwYXJzZUludChpbml0aWFsU2l6ZS53aWR0aCwgMTApICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFdpZHRoID0gcGFyc2VJbnQoaW5pdGlhbFNpemUud2lkdGgsIDEwKTtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSGVpZ2h0ID0gcGFyc2VJbnQoaW5pdGlhbFNpemUuaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobW90aW9uID09PSBcImZhZGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChlbGVtZW50LmNoaWxkcmVuKCksIGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLCBnZXRDc3NQb3NpdGlvbnMoc2xpZGVzW2ldLnBvc2l0aW9ucywgeyB4OiAwLCB5OiAwIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpdGVtcykge1xyXG4gICAgICAgICAgICB2YXIgYmcgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHNpemVzID0gW107XHJcbiAgICAgICAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24gKGksIG8pIHtcclxuICAgICAgICAgICAgICAgIGJnLnB1c2goby5pbWFnZXMpO1xyXG4gICAgICAgICAgICAgICAgc2l6ZXMucHVzaChvLnNpemVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBiZy5qb2luKFwiLCBcIiksXHJcbiAgICAgICAgICAgICAgICAvL1wiYmFja2dyb3VuZC1zaXplXCI6IHNpemVzLmpvaW4oXCIsIFwiKSxcclxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBbXTtcclxuICAgICAgICAgICAgJC5lYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaSwgbykge1xyXG4gICAgICAgICAgICAgICAgcG9zLnB1c2goby5wb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6IHBvcy5qb2luKFwiLCBcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNbaW5kZXhdIHx8IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXh0O1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9IChpbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHQgPSBpbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1tuZXh0XTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gZnVuY3Rpb24gKHByZXYsIG5leHQsIG1vdmUpIHtcclxuICAgICAgICAgICAgdmFyIHByZXZJdGVtID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgICAgIHZhciBuZXh0SXRlbSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgICAgICB2YXIgaXNEaXJlY3Rpb25OZXh0ID0gZGlyZWN0aW9uID09PSBcIm5leHRcIjtcclxuICAgICAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gLShvcmlnaW5hbEhlaWdodCAtIGhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbE9mZnNldCA9IC0ob3JpZ2luYWxXaWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIGlmIChtb3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2SXRlbS55ID0gbmV4dEl0ZW0ueSA9IC0ob3JpZ2luYWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgIHByZXZJdGVtLnggPSBob3Jpem9udGFsT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0ueCA9IChpc0RpcmVjdGlvbk5leHQgPyBvcmlnaW5hbFdpZHRoIDogLW9yaWdpbmFsV2lkdGgpICsgaG9yaXpvbnRhbE9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkl0ZW0ueCArPSBpc0RpcmVjdGlvbk5leHQgPyAtb3JpZ2luYWxXaWR0aCA6IG9yaWdpbmFsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEl0ZW0ueCArPSBpc0RpcmVjdGlvbk5leHQgPyAtb3JpZ2luYWxXaWR0aCA6IG9yaWdpbmFsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW90aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZJdGVtLnggPSBuZXh0SXRlbS54ID0gaG9yaXpvbnRhbE9mZnNldDtcclxuICAgICAgICAgICAgICAgIHByZXZJdGVtLnkgPSB2ZXJ0aWNhbE9mZnNldDtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtLnkgPSAoaXNEaXJlY3Rpb25OZXh0ID8gb3JpZ2luYWxIZWlnaHQgOiAtb3JpZ2luYWxIZWlnaHQpICsgdmVydGljYWxPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLnkgKz0gaXNEaXJlY3Rpb25OZXh0ID8gLW9yaWdpbmFsSGVpZ2h0IDogb3JpZ2luYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEl0ZW0ueSArPSBpc0RpcmVjdGlvbk5leHQgPyAtb3JpZ2luYWxIZWlnaHQgOiBvcmlnaW5hbEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGlmICghIXByZXYpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgaW1hZ2VzOiBwcmV2LmltYWdlcywgcG9zaXRpb25zOiBnZXRDc3NQb3NpdGlvbnMocHJldi5wb3NpdGlvbnMsIHByZXZJdGVtKSwgc2l6ZXM6IHByZXYuc2l6ZXMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBpbWFnZXM6IG5leHQuaW1hZ2VzLCBwb3NpdGlvbnM6IGdldENzc1Bvc2l0aW9ucyhuZXh0LnBvc2l0aW9ucywgbmV4dEl0ZW0pLCBzaXplczogbmV4dC5zaXplcyB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgb24pIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNzcygkLnN1cHBvcnQudGhlbWVUcmFuc2l0aW9uLnByZWZpeCArIFwidHJhbnNpdGlvblwiLCBvbiA/IFwiYmFja2dyb3VuZC1wb3NpdGlvbiBcIiArIHRyYW5zaXRpb25EdXJhdGlvbiArIFwiIGVhc2UtaW4tb3V0XCIgOiBcIlwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDc3NQb3NpdGlvbnMocG9zaXRpb25zLCBvZmZzZXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9mZnNldC54ID0gb2Zmc2V0LnggfHwgMDtcclxuICAgICAgICAgICAgb2Zmc2V0LnkgPSBvZmZzZXQueSB8fCAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goKHBvc2l0aW9uc1tpXS54ICogMSArIG9mZnNldC54KSArIFwicHggXCIgKyAocG9zaXRpb25zW2ldLnkgKiAxICsgb2Zmc2V0LnkpICsgXCJweFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIsIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB2YXIgVGhlbWVTbGlkZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgc2V0dGluZ3MpIHtcclxuXHJcbiAgICAgICAgdmFyIGludGVydmFsID0gbnVsbDtcclxuICAgICAgICB2YXIgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gZWxlbWVudC5maW5kKFwiLmFjdGl2ZVwiKS5wYXJlbnQoKS5jaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBsYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB7XHJcbiAgICAgICAgICAgIFwiYW5pbWF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIm5leHRcIixcclxuICAgICAgICAgICAgXCJzcGVlZFwiOiA2MDAsXHJcbiAgICAgICAgICAgIFwicGF1c2VcIjogMjUwMCxcclxuICAgICAgICAgICAgXCJhdXRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicmVwZWF0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibmF2aWdhdG9yXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY2xpY2tldmVudHNcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJob3ZlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImhlbHBlclwiOiBudWxsXHJcbiAgICAgICAgfSwgc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uLCBuZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVJdGVtID0gZWxlbWVudC5maW5kKFwiLmFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dCB8fCBhY3RpdmVJdGVtW2RpcmVjdGlvbl0oKSxcclxuICAgICAgICAgICAgICAgIGlubmVyRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb24gPT09IFwibmV4dFwiID8gXCJmb3J3YXJkXCIgOiBcImJhY2tcIixcclxuICAgICAgICAgICAgICAgIHJlc2V0ID0gZGlyZWN0aW9uID09PSBcIm5leHRcIiA/IFwiZmlyc3RcIiA6IFwibGFzdFwiLFxyXG4gICAgICAgICAgICAgICAgbW92aW5nID0gaW50ZXJ2YWwsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIgPSB0aGlzLCB0bXA7XHJcblxyXG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vdmluZykgeyB0aGlzLnN0b3AodHJ1ZSk7IH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbmV4dEl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbSA9IGVsZW1lbnQuZmluZChcIi5zbGlkZS1pdGVtXCIpW3Jlc2V0XSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLnJlcGVhdCkgeyBsYXN0ID0gdHJ1ZTsgYWN0aXZlID0gZmFsc2U7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJC5zdXBwb3J0LnRoZW1lVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0uYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdG1wID0gbmV4dEl0ZW0uZ2V0KDApLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtLmFkZENsYXNzKGlubmVyRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtLmFkZENsYXNzKGlubmVyRGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRyaWdnZXIoXCJiZWZvcmVTbGlkZVwiLCBjaGlsZHJlbi5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub25lKCQuc3VwcG9ydC50aGVtZVRyYW5zaXRpb24uZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS5yZW1vdmVDbGFzcyhzbGlkZXIuc2V0dGluZ3MuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoaW5uZXJEaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhpbm5lckRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudHJpZ2dlcihcImFmdGVyU2xpZGVcIiwgY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50cmlnZ2VyKFwiYmVmb3JlU2xpZGVcIiwgY2hpbGRyZW4ubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRyaWdnZXIoXCJhZnRlclNsaWRlXCIsIGNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUobmV4dEl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vdmluZykgeyB0aGlzLnN0YXJ0KCk7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoaWxkcmVuLmluZGV4KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgJCh0aGlzLnNldHRpbmdzLm5hdmlnYXRvcikuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5lcShpbmRleCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50byA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSXRlbSA9IGVsZW1lbnQuZmluZChcIi5hY3RpdmVcIiksXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IGFjdGl2ZUl0ZW0ucGFyZW50KCkuY2hpbGRyZW4oKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gY2hpbGRyZW4uaW5kZXgoYWN0aXZlSXRlbSksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gKGNoaWxkcmVuLmxlbmd0aCAtIDEpIHx8IGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vbmUoXCJhZnRlclNsaWRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXIudG8oaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGluZGV4ID4gYWN0aXZlSW5kZXggPyBcIm5leHRcIiA6IFwicHJldlwiLCAkKGNoaWxkcmVuW2luZGV4XSkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0KSB7IHRoaXMuc3RvcCgpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShcIm5leHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdCkgeyB0aGlzLnN0b3AoKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoXCJwcmV2XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uIChmb3JjZSkge1xyXG4gICAgICAgICAgICBpZiAoISFmb3JjZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgkLnByb3h5KHRoaXMubmV4dCwgdGhpcyksIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCQucHJveHkodGhpcy5uZXh0LCB0aGlzKSwgdGhpcy5zZXR0aW5ncy5wYXVzZSk7XHJcbiAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uIChwYXVzZSkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICBydW5uaW5nID0gISFwYXVzZTtcclxuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubW92aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGUoY2hpbGRyZW4uZmlsdGVyKFwiLmFjdGl2ZVwiKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNsaWNrZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5zZXR0aW5ncy5uYXZpZ2F0b3IpLm9uKFwiY2xpY2tcIiwgXCJhXCIsIHsgc2xpZGVyOiB0aGlzIH0sIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gY2hpbGRyZW4uaW5kZXgoY2hpbGRyZW4uZmlsdGVyKFwiLmFjdGl2ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCkuaW5kZXgoJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggIT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5zbGlkZXIudG8oaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5ob3Zlcikge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gdGhpcztcclxuICAgICAgICAgICAgZWxlbWVudC5hZGQodGhpcy5zZXR0aW5ncy5uYXZpZ2F0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAuYWRkKGVsZW1lbnQuc2libGluZ3MoXCIuc2hhcGVzXCIpKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSAmJiAhbGFzdCkgeyBzbGlkZXIuc3RvcCh0cnVlKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzKFwiOnZpc2libGVcIikgJiYgIWxhc3QpIHsgc2xpZGVyLnN0YXJ0KCk7IH1cclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi50aGVtZVNsaWRlciA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGVsZW1lbnQuZGF0YShcInNsaWRlclwiKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiICYmIGFyZztcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBUaGVtZVNsaWRlcihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YShcInNsaWRlclwiLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIgJiYgZGF0YVthcmddKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2FyZ10oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnNldHRpbmdzLmF1dG8gJiYgZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcblxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cucmVzaXplRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHdpbmRvdy5yZXNpemVEYXRhID0ge307XG53aW5kb3cucmVzaXplRGF0YS5oZWFkZXJQYWdlV2lkdGggPSBmYWxzZTtcbmlmICh0eXBlb2Ygd2luZG93LmRlZmF1bHRSZXNwb25zaXZlRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHdpbmRvdy5kZWZhdWx0UmVzcG9uc2l2ZURhdGEgPSBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIF07XG5cbnJlc2l6ZURhdGFbJ2hlYWRsaW5lJ10gPSB7XG4gICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjM5LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC4zOSwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuMzksIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjM5LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC4zOSwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgIF0sXG4gICBhcmVhOiB7XG4gICAgICAgeDogMCxcbiAgICAgICB5OiAwXG4gICB9LFxuICAgd2lkdGg6IDIyNCxcbiAgIGhlaWdodDogNDMsXG4gICBhdXRvV2lkdGg6IHRydWV9O1xuXG5yZXNpemVEYXRhWydzbG9nYW4nXSA9IHtcbiAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuNTgsIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjU4LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC41OCwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuNTgsIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjU4LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgXSxcbiAgIGFyZWE6IHtcbiAgICAgICB4OiAwLFxuICAgICAgIHk6IDBcbiAgIH0sXG4gICB3aWR0aDogMTQwLFxuICAgaGVpZ2h0OiAxOCxcbiAgIGF1dG9XaWR0aDogdHJ1ZX07XG5cbi8vIHVzZWQgdG8gYXBwbHkgY29tcGljYXRlZCB2YWx1ZXMgaW4gc3R5bGUgbGlrZSAnIWltcG9ydGFudCFcclxuZnVuY3Rpb24gYXBwbHlDc3Mob2JqZWN0LCBwYXJhbSwgdmFsdWUpIHtcclxuICAgIHZhciByZyA9IG5ldyBSZWdFeHAocGFyYW0gKyAnXFxzKjpcXHMqW147XSs7JywgXCJpXCIpO1xyXG4gICAgdmFyIHN0eWxlID0gb2JqZWN0LmF0dHIoJ3N0eWxlJyk7XHJcbiAgICB2YXIgc3RyID0gcGFyYW0gKyAnOiAnICsgdmFsdWUgKyAnOyc7XHJcbiAgICBpZiAocmcudGVzdChzdHlsZSkpIHtcclxuICAgICAgICBzdHlsZSA9IHN0eWxlLnJlcGxhY2UocmcsIHN0cik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdHlsZSArPSAnOyAnICsgc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdC5hdHRyKCdzdHlsZScsIHN0eWxlKTtcclxufVxyXG5cclxuLy8gY29udmVydCB1bml2ZXJzYWwgY29vcmQgdG8gcGl4ZWxzXHJcbmZ1bmN0aW9uIHVuaVRvUHgodW5pLCBzaXplLCBwYXJlbnRTaXplKSB7XHJcbiAgICB1bmkgPSBwYXJzZUZsb2F0KHVuaSB8fCAnMCcpO1xyXG4gICAgaWYgKHVuaSA8IDApIHtcclxuICAgICAgICB1bmkgPSB1bmkgKiBzaXplO1xyXG4gICAgfSBlbHNlIGlmICh1bmkgPj0gMSkge1xyXG4gICAgICAgIHVuaSA9IHBhcmVudFNpemUgLSAoMiAtIHVuaSkgKiBzaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1bmkgPSB1bmkgKiAocGFyZW50U2l6ZSAtIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29udGVudFNsaWRlcihvYmplY3QpIHtcclxuICAgIHZhciBpc0hlYWRlciA9IG9iamVjdC5wYXJlbnRzKCdoZWFkZXInKS5sZW5ndGggPiAwO1xyXG4gICAgaWYgKGlzSGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIGlzUGFnZVNsaWRlciA9IG9iamVjdC5wYXJlbnRzKCcucGFnZXNsaWRlcicpLmxlbmd0aCA+IDA7XHJcbiAgICBpZiAoaXNQYWdlU2xpZGVyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hlZXRMZWZ0RnVuYyhzaGVldCwgb2JqZWN0KSB7XHJcbiAgICB2YXIgc2hlZXRMZWZ0ID0gc2hlZXQub2Zmc2V0KCkubGVmdDtcclxuXHJcbiAgICB2YXIgaXNIZWFkZXIgPSBvYmplY3QucGFyZW50cygnaGVhZGVyJykubGVuZ3RoID4gMDtcclxuICAgIGlmIChpc0hlYWRlcikge1xyXG4gICAgICAgIGlmIChyZXNpemVEYXRhLmhlYWRlclBhZ2VXaWR0aCkgcmV0dXJuIHNoZWV0TGVmdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGlzUGFnZVNsaWRlciA9IG9iamVjdC5wYXJlbnRzKCcucGFnZXNsaWRlcicpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaWYgKGlzUGFnZVNsaWRlcikge1xyXG4gICAgICAgICAgICBpZiAocmVzaXplRGF0YS5wYWdlU2xpZGVyUGFnZVdpZHRoKSByZXR1cm4gc2hlZXRMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxudmFyIGhlYWRlck9iamVjdFJlc2l6ZXIgPSB7XHJcbiAgICBcclxuICAgIHBvc3RJbml0OiBmYWxzZSxcclxuXHJcbiAgICByZXNpemU6IChmdW5jdGlvbiAoJCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWhlYWRlck9iamVjdFJlc2l6ZXIucG9zdEluaXQgJiYgdHlwZW9mIHJlc3BvbnNpdmVEZXNpZ24gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc3BvbnNpdmVSZXNpemUnLCBoZWFkZXJPYmplY3RSZXNpemVyLnJlc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJPYmplY3RSZXNpemVyLnBvc3RJbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNpdmVUeXBlID0gMDtcclxuICAgICAgICAgICAgLy8gaWYgd2UgZG9uJ3QgdXNlIGZ1bGwgY3VzdG9tIHJlc3BvbnNpdmUgc28gd2UgTVVTVCBjbGVhbnVwIGFsbCBzdHlsZXNcclxuICAgICAgICAgICAgdmFyIGNsZWFuVXBTdHlsZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gd2hlbiB1c2UgZGVmYXVsdCByZXNwbyBzbyB3aGlsZSBpbiBkZXNrdG9wIG1vZGUgYWx3YXlzIHVzZSAwLXR5cGUsIGluIG90aGVyIGNhc2UgY2xlYW51cCBvdXIgc3R5bGVzXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2l2ZURlc2lnbiAhPT0gJ3VuZGVmaW5lZCcgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc3BvbnNpdmVEYXRhW3Jlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZVR5cGVJZHhdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXBTdHlsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNpdmVEZXNpZ24gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlVHlwZSA9PT0gJ3RhYmxldGxhbmRzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZVR5cGUgPT09ICd0YWJsZXRwb3J0cmFpdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZVR5cGUgPT09ICdwaG9uZWxhbmRzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZVR5cGUgPT09ICdwaG9uZXBvcnRyYWl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVUeXBlID0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNoZWV0ID0gJCgnLnNoZWV0Jyk7XHJcbiAgICAgICAgICAgIHZhciBzaGVldFdpZHRoID0gc2hlZXQub3V0ZXJXaWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlYWRlciA9ICQoJ2hlYWRlcicpO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNzc1ByZWZpeCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSBodG1sIHNoYXBlc1xyXG4gICAgICAgICAgICB2YXIgaGVhZGVyUXVlcnkgPSAnaGVhZGVyLmhlYWRlciAuc2hhcGVzPiosIGhlYWRlci5oZWFkZXIgLnRleHRibG9jaywgaGVhZGVyLmhlYWRlcj4uaGVhZGxpbmUsIGhlYWRlci5oZWFkZXI+LnNsb2dhbiwgaGVhZGVyLmhlYWRlcj4ucG9zaXRpb25jb250cm9sLCBoZWFkZXIuaGVhZGVyPi5sb2dvJztcclxuICAgICAgICAgICAgdmFyIHBhZ2VTbGlkZXJRdWVyeSA9ICcucGFnZXNsaWRlciAuc2xpZGUtaXRlbT4qJztcclxuICAgICAgICAgICAgaWYgKGhlYWRlck9iamVjdFJlc2l6ZXIuaXNQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJRdWVyeSA9ICdoZWFkZXIgLnNsaWRlcic7XHJcbiAgICAgICAgICAgICAgICBwYWdlU2xpZGVyUXVlcnkgPSAnLnBhZ2VzbGlkZXIgLnNsaWRlciwgLnBhZ2VzbGlkZXIgLnRleHRibG9jayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChoZWFkZXJRdWVyeSArICcsICcgKyBwYWdlU2xpZGVyUXVlcnkpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBvYmplY3QucGFyZW50KCkuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9mZiA9IHNoZWV0TGVmdEZ1bmMoc2hlZXQsIG9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNscyA9IG9iamVjdC5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goY2xzLCBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSAkLnRyaW0odmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwuaW5kZXhPZihjc3NQcmVmaXgpICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5zdWJzdHJpbmcoY3NzUHJlZml4Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNpemVEYXRhW3ZhbF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5VcFN0eWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY3NzKCdsZWZ0JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY3NzKCdtYXJnaW4tbGVmdCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwRGF0YSA9IGRhdGEucmVzcG9uc2l2ZVtyZXNwb25zaXZlVHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BEYXRhLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseUNzcyhvYmplY3QsICdkaXNwbGF5JywgJ25vbmUgIWltcG9ydGFudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuVXBTdHlsZXMgfHwgIXJlc3BEYXRhLnZpc2libGUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSB1bmlUb1B4KHJlc3BEYXRhLmxlZnQsIGRhdGEuYXV0b1dpZHRoID8gb2JqZWN0LndpZHRoKCkgOiBkYXRhLndpZHRoLCBzaGVldFdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSB1bmlUb1B4KHJlc3BEYXRhLnRvcCwgZGF0YS5oZWlnaHQsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jc3MoJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNzcygndG9wJywgeSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Q3NzKG9iamVjdCwgJ21hcmdpbi1sZWZ0JywgJzBweCAhaW1wb3J0YW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSBpbWFnZXMgaW4gc2xpZGUncyBiYWNrZ3JvdW5kLWltYWdlc1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gJCgnLnNsaWRlLWl0ZW0nKS5hZGQoaGVhZGVyKTtcclxuICAgICAgICAgICAgaWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci52ZXJzaW9uIDw9IDgpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlcyA9IHNsaWRlcy5hZGQoJy5zbGlkZS1pdGVtIC5pZThmaXgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmVhY2goc2xpZGVzLCBmdW5jdGlvbiAoc2xpZGVJZHgsIHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZSA9ICQoc2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5jbG9zZXN0KCcuY29sbGFnZScpLmxlbmd0aCA+IDAgfHwgY2xlYW5VcFN0eWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlVmlzaWJsZSA9IHNsaWRlLmlzKCc6dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZVZpc2libGUgJiYgYnJvd3Nlci5pZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvZmYgPSBzaGVldExlZnRGdW5jKHNoZWV0LCBzbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci52ZXJzaW9uIDw9IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHNsaWRlLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHMucmVwbGFjZSgvYmFja2dyb3VuZFxcLXBvc2l0aW9uW147XSsvLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmF0dHIoJ3N0eWxlJywgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYmdJbWFnZSA9IHNsaWRlLmNzcygnYmFja2dyb3VuZC1pbWFnZScpID8gc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJykuc3BsaXQoJywnKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJnUG9zaXRpb24gPSBzbGlkZS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nKSAmJiAoc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJykucmVwbGFjZSgvWzBdW15cXGRdKy9naSwgJycpKS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nKS5zcGxpdCgnLCcpIDpcclxuICAgICAgICAgICAgICAgICAgICBbXTtcclxuICAgICAgICAgICAgICAgIGlmIChiZ0ltYWdlLmxlbmd0aCAhPT0gYmdQb3NpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHNsaWRlLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlaWdodCA9PT0gMCkgaGVpZ2h0ID0gc2xpZGUucGFyZW50KCkuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGJnSW1hZ2UsIGZ1bmN0aW9uIChpZHgsIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaW5kSW1hZ2VJZHggPSB2YWwubGFzdEluZGV4T2YoJ2ltYWdlcy8nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmluZERvdElkeCA9IHZhbC5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5kSW1hZ2VJZHggPT09IC0xIHx8IGZpbmREb3RJZHggPT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdmFsLnN1YnN0cmluZyhmaW5kSW1hZ2VJZHggKyA3LCBmaW5kRG90SWR4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNpemVEYXRhW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BEYXRhID0gZGF0YS5yZXNwb25zaXZlW3Jlc3BvbnNpdmVUeXBlXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiaWcgZGVmYXVsdCBjb29yZGluYXRlcyBmb3IgaGlkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSA5OTk5LCB5ID0gOTk5OTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcERhdGEudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gdW5pVG9QeChyZXNwRGF0YS5sZWZ0LCBkYXRhLndpZHRoLCBzaGVldFdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBvZmYgKyBkYXRhLmFyZWEueDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB1bmlUb1B4KHJlc3BEYXRhLnRvcCwgZGF0YS5oZWlnaHQsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gZGF0YS5hcmVhLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBiZ1Bvc2l0aW9uW2lkeF0gPSB4ICsgJ3B4ICcgKyB5ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIGJnUG9zaXRpb24uam9pbignLCcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNsaWRlVmlzaWJsZSAmJiBicm93c2VyLmllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH0pKGpRdWVyeSksXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gOCkge1xyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzaXplVGltZW91dDtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLnJlc2l6ZSgpOyB9LCAyNSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmhlYWRlck9iamVjdFJlc2l6ZXIuaW5pdGlhbGl6ZShqUXVlcnkpO1xyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDgpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgcHJvY2Vzc0VsZW1lbnRNdWx0aXBseUJnKFwiLmhlYWRlclwiLCB7XHJcbiAgICAgICAgXCJiZ2ltYWdlXCI6IFwidXJsKCdpbWFnZXMvaGVhZGVyLmpwZycpXCIsXHJcbiAgICAgICAgXCJiZ3Bvc2l0aW9uXCI6IFwiMCAwXCIsXHJcbiAgICAgICAgXCJpbWFnZXNcIjogXCJcIixcclxuICAgICAgICBcInBvc2l0aW9uc1wiOiBcIlwiXHJcbiAgICB9KTtcclxufSk7XHJcbmlmICh0eXBlb2Ygd2luZG93LnJlc2l6ZURhdGEgPT09ICd1bmRlZmluZWQnKSB3aW5kb3cucmVzaXplRGF0YSA9IHt9O1xuXG53aW5kb3cucmVzaXplRGF0YS5wYWdlU2xpZGVyUGFnZVdpZHRoID0gZmFsc2U7XG4iLCIvKiBDcmVhdGVkIGJ5IEFydGlzdGVlciB2NC4zLjAuNjA3NDUgKi9cclxuLypqc2hpbnQgZm9yaW46dHJ1ZSwgbm9hcmc6dHJ1ZSwgbm9lbXB0eTp0cnVlLCBlcWVxZXE6dHJ1ZSwgYml0d2lzZTp0cnVlLCBzdHJpY3Q6dHJ1ZSwgdW5kZWY6dHJ1ZSwgY3VybHk6ZmFsc2UsIGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OmZhbHNlICovXHJcbi8qZ2xvYmFsIGpRdWVyeSAqL1xyXG5cclxudmFyIHJlc3BvbnNpdmVEZXNpZ24gPSB7XHJcbiAgICBpc1Jlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgaXNEZXNrdG9wOiBmYWxzZSxcclxuICAgIGlzVGFibGV0OiBmYWxzZSxcclxuICAgIGlzUGhvbmU6IGZhbHNlLFxyXG4gICAgbG9ja2VkUmVzcG9uc2l2ZU1vZGU6ICcnLCAvLyBmcmVlIG1vZGUgZnJvbSBzdGFydFxyXG5cclxuICAgIHJlc3BvbnNpdmVUeXBlOiAnZGVza3RvcCcsXHJcbiAgICByZXNwb25zaXZlVHlwZUlkeDogMSxcclxuICAgIGxvY2tlZFJlc3BvbnNpdmVUeXBlOiAnJyxcclxuXHJcbiAgICBpc0N1cnJlbnREZWZhdWx0UmVzcG9uc2l2ZTogZmFsc2UsXHJcblxyXG4gICAgZGVmYXVsdFJlc3BvbnNpdmU6IFsgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUgXSwgLy8gdHVybiBvbi9vZmYgb2xkIG9yIG5ldyByZXNwb25zaXZlIG1vZGVzXHJcblxyXG4gICAgd2luZG93V2lkdGg6IDAsXHJcblxyXG4gICAgcmVzcG9uc2l2ZTogKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGh0bWwgPSAkKFwiaHRtbFwiKTtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgdHJpZ2dlckV2ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXNSZXNwVmlzaWJsZSA9ICQoXCIjcmVzcFwiKS5pcyhcIjp2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2NrZWRSZXNwb25zaXZlTW9kZSA9PT0gJ2Rlc2t0b3AnKSBpc1Jlc3BWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZXNwVmlzaWJsZSAmJiAhdGhpcy5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIGh0bWwuYWRkQ2xhc3MoXCJyZXNwb25zaXZlXCIpLnJlbW92ZUNsYXNzKFwiZGVza3RvcFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZXNwb25zaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1Jlc3BWaXNpYmxlICYmICF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgICAgICAgICAgICAgaHRtbC5hZGRDbGFzcyhcImRlc2t0b3BcIikucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlIGRlZmF1bHQtcmVzcG9uc2l2ZSByZXNwb25zaXZlLXRhYmxldCByZXNwb25zaXZlLXBob25lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Jlc3BvbnNpdmUgPSB0aGlzLmlzVGFibGV0ID0gdGhpcy5pc1Bob25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVza3RvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgY2hlY2sgdG8gbG9jayByZXNwb25zaXZlIG1vZGVcclxuICAgICAgICAgICAgICAgIHZhciBpc1RhYmxldCA9IHRoaXMubG9ja2VkUmVzcG9uc2l2ZU1vZGUgPT09ICd0YWJsZXQnIHx8ICgkKFwiI3Jlc3AtdFwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZU1vZGUgPT09ICcnKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1Bob25lID0gdGhpcy5sb2NrZWRSZXNwb25zaXZlTW9kZSA9PT0gJ3Bob25lJyB8fCAoJChcIiNyZXNwLW1cIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVNb2RlID09PSAnJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNUYWJsZXQgJiYgIXRoaXMuaXNUYWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sLmFkZENsYXNzKFwicmVzcG9uc2l2ZS10YWJsZXRcIikucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlLXBob25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUYWJsZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUGhvbmUgJiYgIXRoaXMuaXNQaG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwuYWRkQ2xhc3MoXCJyZXNwb25zaXZlLXBob25lXCIpLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZS10YWJsZXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RhYmxldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQaG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHByZXZSZXNwb25zaXZlSW5keCA9IHRoaXMucmVzcG9uc2l2ZVR5cGVJZHg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAndGFibGV0bGFuZHNjYXBlJyB8fCAoJChcIiNyZXNwLXRhYmxldC1sYW5kc2NhcGVcIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGUgPSAndGFibGV0bGFuZHNjYXBlJztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGVJZHggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICd0YWJsZXRwb3J0cmFpdCcgfHwgKCQoXCIjcmVzcC10YWJsZXQtcG9ydHJhaXRcIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGUgPSAndGFibGV0cG9ydHJhaXQnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZUlkeCA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJ3Bob25lbGFuZHNjYXBlJyB8fCAoJChcIiNyZXNwLXBob25lLWxhbmRzY2FwZVwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZSA9ICdwaG9uZWxhbmRzY2FwZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4ID0gMztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAncGhvbmVwb3J0cmFpdCcgfHwgKCQoXCIjcmVzcC1waG9uZS1wb3J0cmFpdFwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZSA9ICdwaG9uZXBvcnRyYWl0JztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGVJZHggPSA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvL2lmICh0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAnZGVza3RvcCcgfHwgKCQoXCIjcmVzcC1kZXNrdG9wXCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlID0gJ2Rlc2t0b3AnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZUlkeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyRXZlbnQgfHwgcHJldlJlc3BvbnNpdmVJbmR4ICE9PSB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4KSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Jlc3BvbnNpdmUgJiYgdGhpcy5kZWZhdWx0UmVzcG9uc2l2ZVsgdGhpcy5yZXNwb25zaXZlVHlwZUlkeCBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0N1cnJlbnREZWZhdWx0UmVzcG9uc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDbGFzcygnY3VzdG9tLXJlc3BvbnNpdmUnKS5hZGRDbGFzcygnZGVmYXVsdC1yZXNwb25zaXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDdXJyZW50RGVmYXVsdFJlc3BvbnNpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNsYXNzKCdkZWZhdWx0LXJlc3BvbnNpdmUnKS5hZGRDbGFzcygnY3VzdG9tLXJlc3BvbnNpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNwb25zaXZlXCIsIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc3BvbnNpdmVSZXNpemVcIiwgdGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKGpRdWVyeSksXHJcbiAgICBpbml0aWFsaXplOiAoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgY29ycmVjdCBkZWZhdWx0UmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlZmF1bHRSZXNwb25zaXZlRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHJlc3BvbnNpdmVEZXNpZ24uZGVmYXVsdFJlc3BvbnNpdmUgPSBkZWZhdWx0UmVzcG9uc2l2ZURhdGE7XHJcblxyXG4gICAgICAgICAgICAkKFwiPGRpdiBpZD1cXFwicmVzcFxcXCI+PGRpdiBpZD1cXFwicmVzcC1tXFxcIj48L2Rpdj48ZGl2IGlkPVxcXCJyZXNwLXRcXFwiPjwvZGl2PjwvZGl2PlwiKS5hcHBlbmRUbyhcImJvZHlcIik7XHJcbiAgICAgICAgICAgICQoJzxkaXYgaWQ9XCJyZXNwLXRhYmxldC1sYW5kc2NhcGVcIiAvPjxkaXYgaWQ9XCJyZXNwLXRhYmxldC1wb3J0cmFpdFwiIC8+PGRpdiBpZD1cInJlc3AtcGhvbmUtbGFuZHNjYXBlXCIgLz48ZGl2IGlkPVwicmVzcC1waG9uZS1wb3J0cmFpdFwiIC8+JykuYXBwZW5kVG8oJ2JvZHknKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvKiAoMSkgVXNlIHRoaXMgY29kZSBmb3IgZGVidWcgaW5zdGVhZCBvZiAoMik6XHJcbiAgICAgICAgICAgICAqIHZhciByZXNpemVUaW1lb3V0O1xyXG4gICAgICAgICAgICAgKiAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICogY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgKiByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZSgpOyB9LCA1MCk7XHJcbiAgICAgICAgICAgICAqIH0pO1xyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qICgyKSBVc2UgdGhpcyBjb2RlIGZvciBwcm9kdWN0aW9uIGFuZCBjb21tZW50ICgxKTogKi9cclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkoalF1ZXJ5KSxcclxuICAgIC8vIGxvY2sgcmVzcG9uc2l2ZSBpbiBzb21lIG1vZGU6IGRlc2t0b3AsIHRhYmxldCBvciBwaG9uZSBmb3IgZWRpdG9yXHJcbiAgICBsb2NrUmVzcG9uc2l2ZVR5cGU6IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZURlc2lnbi5sb2NrZWRSZXNwb25zaXZlVHlwZSA9IG1vZGU7XHJcblxyXG4gICAgICAgIGlmIChtb2RlLmluZGV4T2YoJ3RhYmxldCcpID09PSAwKSBtb2RlID0gJ3RhYmxldCc7XHJcbiAgICAgICAgaWYgKG1vZGUuaW5kZXhPZigncGhvbmUnKSA9PT0gMCkgbW9kZSA9ICdwaG9uZSc7XHJcblxyXG4gICAgICAgIHJlc3BvbnNpdmVEZXNpZ24ubG9ja2VkUmVzcG9uc2l2ZU1vZGUgPSBtb2RlO1xyXG4gICAgfSxcclxuICAgIC8vIHVzaW5nIGluIGVkaXRvciB0byB0dXJuIG9mZiBkZWZhdWx0IHJlc3BvbnNpdmVcclxuICAgIHRvb2dsZURlZmF1bHRSZXNwb25zaXZlOiBmdW5jdGlvbiAodHlwZSwgdmFsKSB7XHJcbiAgICAgICAgdmFyIG9sZCA9IHJlc3BvbnNpdmVEZXNpZ24uZGVmYXVsdFJlc3BvbnNpdmVbIHR5cGUgXTtcclxuICAgICAgICByZXNwb25zaXZlRGVzaWduLmRlZmF1bHRSZXNwb25zaXZlWyB0eXBlIF0gPSB2YWw7XHJcbiAgICAgICAgaWYgKG9sZCAhPT0gdmFsKSByZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmVUeXBlSWR4ID0gLTE7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXNwb25zaXZlQWJzQmcocmVzcG9uc2l2ZURlc2lnbiwgZWwsIGJnKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmIChiZy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBkZXNrdG9wQmdUb3AgPSBiZy5hdHRyKFwiZGF0YS1iZy10b3BcIik7XHJcbiAgICB2YXIgZGVza3RvcEJnSGVpZ2h0ID0gYmcuYXR0cihcImRhdGEtYmctaGVpZ2h0XCIpO1xyXG5cclxuICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGVza3RvcEJnVG9wID09PSBcInVuZGVmaW5lZFwiIHx8IGRlc2t0b3BCZ1RvcCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYmcuYXR0cihcImRhdGEtYmctdG9wXCIsIGJnLmNzcyhcInRvcFwiKSk7XHJcbiAgICAgICAgICAgIGJnLmF0dHIoXCJkYXRhLWJnLWhlaWdodFwiLCBiZy5jc3MoXCJoZWlnaHRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVsVG9wID0gZWwub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBlbEhlaWdodCA9IGVsLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgYmcuY3NzKFwidG9wXCIsIGVsVG9wICsgXCJweFwiKTtcclxuICAgICAgICBiZy5jc3MoXCJoZWlnaHRcIiwgZWxIZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVza3RvcEJnVG9wICE9PSBcInVuZGVmaW5lZFwiICYmIGRlc2t0b3BCZ1RvcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBiZy5jc3MoXCJ0b3BcIiwgZGVza3RvcEJnVG9wKTtcclxuICAgICAgICBiZy5jc3MoXCJoZWlnaHRcIiwgZGVza3RvcEJnSGVpZ2h0KTtcclxuICAgICAgICBiZy5yZW1vdmVBdHRyKFwiZGF0YS1iZy10b3BcIik7XHJcbiAgICAgICAgYmcucmVtb3ZlQXR0cihcImRhdGEtYmctaGVpZ2h0XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgcmVzcG9uc2l2ZUltYWdlcyA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICAkKFwiaW1nW3dpZHRoXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGltZyA9ICQodGhpcyksIG5ld1dpZHRoID0gXCJcIiwgbmV3TWF4V2lkdGggPSBcIlwiLCBuZXdIZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgIG5ld01heFdpZHRoID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoQXR0ciA9IGltZy5hdHRyKFwid2lkdGhcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAod2lkdGhBdHRyICE9PSBudWxsICYmIHR5cGVvZiAod2lkdGhBdHRyKSA9PT0gXCJzdHJpbmdcIiAmJiB3aWR0aEF0dHIuaW5kZXhPZihcIiVcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3V2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNYXhXaWR0aCA9IHBhcnNlSW50KCQudHJpbSh3aWR0aEF0dHIpLCAxMCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLmNzcyhcIndpZHRoXCIsIG5ld1dpZHRoKS5jc3MoXCJtYXgtd2lkdGhcIiwgbmV3TWF4V2lkdGgpLmNzcyhcImhlaWdodFwiLCBuZXdIZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTsgXHJcblxyXG52YXIgcmVzcG9uc2l2ZVZpZGVvcyA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICAkKFwiaWZyYW1lW3dpZHRoXSxvYmplY3Rbd2lkdGhdLGVtYmVkW3dpZHRoXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmICgob2JqLmlzKCdbd2lkdGhdJykgJiYgb2JqLmF0dHIoXCJ3aWR0aFwiKS5pbmRleE9mKFwiJVwiKSAhPT0gLTEpIHx8XHJcbiAgICAgICAgICAgICAgICAob2JqLmlzKCdbY2xhc3NdJykgJiYgb2JqLmF0dHIoXCJjbGFzc1wiKS5pbmRleE9mKFwidHdpdHRlclwiKSAhPT0gLTEpIHx8XHJcbiAgICAgICAgICAgICAgICAob2JqLmlkICYmIG9iai5pZC5pbmRleE9mKFwiZ29vZ2xlXCIpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBvYmoucGFyZW50KFwiLnJlc3BvbnNpdmUtZW1iZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5sZW5ndGggIT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gJChcIjxkaXYgY2xhc3M9XFxcInJlc3BvbnNpdmUtZW1iZWRcXFwiPlwiKS5pbnNlcnRCZWZvcmUob2JqKTtcclxuICAgICAgICAgICAgICAgIG9iai5hcHBlbmRUbyhjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaW5zZXJ0QmVmb3JlKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLyB0aGlzIG11c3QgYmUgY2FsbGVkIGZvciBjb2xsYWdlcyBvbmx5IVxyXG52YXIgcmVzcG9uc2l2ZVRleHRibG9ja3MgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzbGlkZXIsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICBzbGlkZXIuZmluZChcIi50ZXh0YmxvY2tcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChzbGlkZXIuYXR0cihcImRhdGEtd2lkdGhcIiksIDEwKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRiID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGMgPSBzbGlkZXIud2lkdGgoKSAvIHNsaWRlci5hdHRyKFwiZGF0YS13aWR0aFwiKTtcclxuICAgICAgICAgICAgdGIuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YkhlaWdodCA9IHBhcnNlSW50KHRiLmNzcyhcImhlaWdodFwiKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRiV2lkdGggPSBwYXJzZUludCh0Yi5jc3MoXCJ3aWR0aFwiKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRiVG9wID0gcGFyc2VJbnQodGIuY3NzKFwidG9wXCIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGJNYXJnaW4gPSBwYXJzZUludCh0Yi5jc3MoXCJtYXJnaW4tbGVmdFwiKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGIuYWRkKHRiLmZpbmQoJ2RpdicpKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IHRiSGVpZ2h0ICogYyxcclxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IHRiV2lkdGggKiBjXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRiLmNzcyhcInRvcFwiLCB0YlRvcCAqIGMpO1xyXG4gICAgICAgICAgICAgICAgdGIuYXR0cihcInN0eWxlXCIsIGZ1bmN0aW9uIChpLCBzKSB7IHJldHVybiBzICsgXCJtYXJnaW4tbGVmdDogXCIgKyAodGJNYXJnaW4gKiBjKSArIFwicHggIWltcG9ydGFudFwiOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbnZhciByZXNwb25zaXZlU2xpZGVyID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgICQoXCIuc2xpZGVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXNIZWFkZXJTbGlkZXIgPSBzLnBhcmVudCgnLmhlYWRlcicpLmxlbmd0aCA+IDAgfHwgcy5wYXJlbnQoJy5wYWdlc2xpZGVyJykubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgaWYgKCFpc0hlYWRlclNsaWRlciAmJiByZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVRleHRibG9ja3MocywgcmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsV2lkdGggPSBzLmF0dHIoXCJkYXRhLXdpZHRoXCIpO1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbEhlaWdodCA9IHMuYXR0cihcImRhdGEtaGVpZ2h0XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHNpemVcclxuXHJcbiAgICAgICAgICAgIHZhciBvYmogPSBzLmRhdGEoXCJzbGlkZXJcIik7XHJcbiAgICAgICAgICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpbm5lciA9IHMuZmluZChcIi5zbGlkZXItaW5uZXJcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlICYmIG9iai5zZXR0aW5ncy5oZWxwZXIpIHtcclxuICAgICAgICAgICAgICAgIG9iai5zZXR0aW5ncy5oZWxwZXIudXBkYXRlU2l6ZShpbm5lciwgeyB3aWR0aDogaW5pdGlhbFdpZHRoLCBoZWlnaHQ6IGluaXRpYWxIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBzbGlkZXJcclxuICAgICAgICAgICAgaWYgKG9iaiAmJiBvYmouc2V0dGluZ3MuaGVscGVyKSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oXCJyZXNwb25zaXZlUmVzaXplXCIsIGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5zZXR0aW5ncy5hbmltYXRpb24gPT09IFwiZmFkZVwiKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNDdXJyZW50RGVmYXVsdFJlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNldHRpbmdzLmhlbHBlci51cGRhdGVTaXplKGlubmVyLCB7IHdpZHRoOiBpbml0aWFsV2lkdGgsIGhlaWdodDogaW5pdGlhbEhlaWdodCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGlubmVyLmNoaWxkcmVuKCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1NYXRoLmZsb29yKGluaXRpYWxXaWR0aCAvIDIgLSBwYXJzZUludChpbm5lci5vdXRlcldpZHRoKCksIDEwKSAvIDIpICsgXCJweFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtTWF0aC5mbG9vcihpbml0aWFsSGVpZ2h0IC8gMiAtIHBhcnNlSW50KGlubmVyLm91dGVySGVpZ2h0KCksIDEwKSAvIDIpICsgXCJweCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihcInJlc3BvbnNpdmVSZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG52YXIgcmVzcG9uc2l2ZUNvbGxhZ2VzID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgICQoXCIuY29sbGFnZVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sbGFnZSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSBjb2xsYWdlLmZpbmQoXCIuc2xpZGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluaXRpYWxXaWR0aCA9IHNsaWRlci5hdHRyKFwiZGF0YS13aWR0aFwiKTtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxIZWlnaHQgPSBzbGlkZXIuYXR0cihcImRhdGEtaGVpZ2h0XCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGNvbGxhZ2UuY2xvc2VzdCgnOm5vdCguaW1hZ2UtY2FwdGlvbi13cmFwcGVyLCAuY29sbGFnZSknKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudEljdyA9IGNvbGxhZ2UuY2xvc2VzdCgnLmltYWdlLWNhcHRpb24td3JhcHBlcicpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50V2lkdGggPSBwYXJlbnQud2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIGNvbGxhZ2VXaWR0aCA9IGNvbGxhZ2Uud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZvciByZXNwb25zaXZlIHRyeSB0byBtYWtlIGNvbGxhZ2Ugc21hbGxlclxyXG4gICAgICAgICAgICAvLyBhKSBubyBpY3cgLSBjaGVjayBjb2xsYWdlIHdpZHRoIGFuZCBwYXJlbnRcclxuICAgICAgICAgICAgLy8gYikgd2l0aCBpY3cgLSBjb2xsYWdlIGlzIGJpZ2dlciB0aGFuIGljd1xyXG4gICAgICAgICAgICB2YXIgZG9tcyA9IGNvbGxhZ2VcclxuICAgICAgICAgICAgICAgIC5hZGQoc2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgLmFkZChjb2xsYWdlLmNsb3Nlc3QoXCIuaW1hZ2UtY2FwdGlvbi13cmFwcGVyXCIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNvIHRyeSB0byBtYWtlIGNvbGxhZ2Ugc21hbGxlclxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUgJiYgY29sbGFnZVdpZHRoID4gcGFyZW50V2lkdGggfHwgKHBhcmVudEljdy5sZW5ndGggPiAwICYmIGNvbGxhZ2VXaWR0aCA+IHBhcmVudEljdy53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICAgICAgZG9tcy5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGJ1dCBpZiBpY3cgbWFrZSBjb2xsYWdlIHRvbyBiaXQgcmVzZXQgaXQgd2lkdGggdG8gbm9yYW1sXHJcbiAgICAgICAgICAgIGNvbGxhZ2VXaWR0aCA9IGNvbGxhZ2Uud2lkdGgoKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxhZ2VXaWR0aCA+IGluaXRpYWxXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgZG9tcy5jc3MoXCJ3aWR0aFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGMgPSBzbGlkZXIud2lkdGgoKSAvIGluaXRpYWxXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGggPSBjICogaW5pdGlhbEhlaWdodDtcclxuICAgICAgICAgICAgc2xpZGVyLmNzcyhcImhlaWdodFwiLCBoICsgXCJweFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVcIiwgKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICAvLyBzbyB0aGlzIGV2ZW50IGlzIG1haW4gYW5kIGl0IGdlbmVyYXRlIHN1YiBldmVudHMgdG8gbWFrZSBpbXBvcnRhbnQgY2hhbmdlcyBiZWZvcmUgd2Ugd2lsbCBtb2RpZnkgc2xpZGVyXHJcbiAgICAgICAgLy8gZm9yIGV4YW1wbGUgd2UgbW92ZSBvdXQgb2Ygc2xpZGVyIG1lbnUgYnV0dG9uLCBhbmQgaXQgY2hhbmdlIHNsaWRlciBzaXplXHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc3BvbnNpdmVQYWdlJywgcmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlcyhyZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICByZXNwb25zaXZlVmlkZW9zKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG5cclxuICAgICAgICByZXNwb25zaXZlU2xpZGVyKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgIHJlc3BvbnNpdmVOYXZpZ2F0b3IocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpKTtcclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlUmVzaXplXCIsIChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZUNvbGxhZ2VzKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgIHJlc3BvbnNpdmVOYXZpZ2F0b3IocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpKTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDgpIHJldHVybjtcclxuICAgIHZhciB0aW1lb3V0O1xyXG4gICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVDb2xsYWdlcyhyZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZU5hdmlnYXRvcihyZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICB9LCAyNSk7XHJcbiAgICB9KTtcclxuICAgIHJlc3BvbnNpdmVDb2xsYWdlcyhyZXNwb25zaXZlRGVzaWduKTtcclxuICAgIHJlc3BvbnNpdmVOYXZpZ2F0b3IocmVzcG9uc2l2ZURlc2lnbik7XHJcbn0pO1xyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVSZXNpemVcIiwgKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICByZXNwb25zaXZlQWJzQmcocmVzcG9uc2l2ZURlc2lnbiwgJChcIm5hdi5uYXZcIiksICQoXCIjaG1lbnUtYmdcIikpO1xyXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzcG9uc2l2ZU5hdlwiLCB7IHJlc3BvbnNpdmVEZXNpZ246IHJlc3BvbnNpdmVEZXNpZ24gfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgICQoJzxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJtZW51LWJ0blxcXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPicpLmluc2VydEJlZm9yZShcIi5obWVudVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIG1lbnUgPSAkKHRoaXMpLm5leHQoKTtcclxuICAgICAgICBpZiAobWVudS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnUuc2xpZGVVcChcImZhc3RcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwidmlzaWJsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LnNsaWRlRG93bihcImZhc3RcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwidmlzaWJsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVOYXZcIiwgKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAvKmdsb2JhbCBtZW51RXh0ZW5kZWRDcmVhdGUgKi9cclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmVEZXNpZ24uaXNEZXNrdG9wICYmICQoXCJsaS5leHRcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtZW51RXh0ZW5kZWRDcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KShqUXVlcnkpKTtcclxuXHJcbnZhciByZXNwb25zaXZlSGVhZGVyID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbihyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlciA9ICQoXCJoZWFkZXIuaGVhZGVyXCIpO1xyXG4gICAgICAgIHZhciBoZWFkZXJTbGlkZXIgPSBoZWFkZXIuZmluZChcIi5zbGlkZXJcIik7XHJcblxyXG4gICAgICAgIGlmIChoZWFkZXJTbGlkZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdFNsaWRlID0gaGVhZGVyU2xpZGVyLmZpbmQoXCIuc2xpZGUtaXRlbVwiKS5maXJzdCgpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGViZyA9IGZpcnN0U2xpZGUuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1NpYmxpbmcgPSBoZWFkZXJTbGlkZXIucHJldigpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyTmF2ID0gaGVhZGVyU2xpZGVyLnNpYmxpbmdzKFwiLnNsaWRlbmF2aWdhdG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2xpZGViZy5sZW5ndGggJiYgcmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHByZXYgaXMgbWVudSBpbiBoZWFkZXJcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcuaXMoXCJuYXYubmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyTmF2LmF0dHIoXCJkYXRhLW9mZnNldFwiLCBwcmV2aW91c1NpYmxpbmcuaGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyTmF2LnJlbW92ZUF0dHIoXCJkYXRhLW9mZnNldFwiKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVSZXNpemVcIiwgKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICByZXNwb25zaXZlQWJzQmcocmVzcG9uc2l2ZURlc2lnbiwgJChcIi5oZWFkZXJcIiksICQoXCIjaGVhZGVyLWJnXCIpKTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSkpO1xyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVcIiwgKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICBpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLnZlcnNpb24gPD0gOCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzcG9uc2l2ZVJlc2l6ZS5oZWFkZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZUhlYWRlcihyZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNwb25zaXZlUmVzaXplLmhlYWRlclwiKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihcInJlc3BvbnNpdmVSZXNpemUuaGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKGpRdWVyeSkpO1xyXG5cclxudmFyIHJlc3BvbnNpdmVMYXlvdXRDZWxsID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgICQoXCIuY29udGVudCAuY29udGVudC1sYXlvdXQtcm93LC5mb290ZXIgLmNvbnRlbnQtbGF5b3V0LXJvd1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJvdyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciByb3dDaGlsZHJlbiA9IHJvdy5jaGlsZHJlbihcIi5sYXlvdXQtY2VsbFwiKTtcclxuICAgICAgICAgICAgaWYgKHJvd0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjO1xyXG4gICAgICAgICAgICAgICAgcm93LnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZS1sYXlvdXQtcm93LTJcIikucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlLWxheW91dC1yb3ctM1wiKS5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUtbGF5b3V0LXJvdy0xXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0NoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5hZGRDbGFzcyhcInJlc3BvbnNpdmUtbGF5b3V0LXJvdy0xXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dDaGlsZHJlbi5sZW5ndGggJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5hZGRDbGFzcyhcInJlc3BvbnNpdmUtbGF5b3V0LXJvdy0yXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKFwicmVzcG9uc2l2ZS1sYXlvdXQtcm93LTNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA+IDAgJiYgcmVzcG9uc2l2ZURlc2lnbi5pc1RhYmxldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NoaWxkcmVuLmFkZENsYXNzKFwicmVzcG9uc2l2ZS10YWJsZXQtbGF5b3V0LWNlbGxcIikuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGkgKyAxKSAlIGMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoXCI8ZGl2IGNsYXNzPVxcXCJjbGVhcmVkIHJlc3BvbnNpdmUtY2xlYXJlZFxcXCI+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NoaWxkcmVuLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZS10YWJsZXQtbGF5b3V0LWNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmNoaWxkcmVuKFwiLnJlc3BvbnNpdmUtY2xlYXJlZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmpRdWVyeSh3aW5kb3cpLmJpbmQoXCJyZXNwb25zaXZlXCIsIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgcmVzcG9uc2l2ZUxheW91dENlbGwocmVzcG9uc2l2ZURlc2lnbik7XHJcbn0pO1xyXG5cclxuLypnbG9iYWwgalF1ZXJ5LCByZXNwb25zaXZlRGVzaWduKi9cclxuXHJcblxyXG5cclxuXHJcbi8vc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICQoXCJodG1sXCIpLmFkZENsYXNzKFwiZGVza3RvcFwiKSB9LCAwKTtcclxuXHJcbmlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA4KSB7XHJcbiAgICBqUXVlcnkocmVzcG9uc2l2ZURlc2lnbi5pbml0aWFsaXplKTtcclxufSBlbHNlIHtcclxuICAgIGpRdWVyeShcImh0bWxcIikuYWRkQ2xhc3MoXCJkZXNrdG9wXCIpO1xyXG59XHJcbiIsIi8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXyBfIF9fX19fICAgICAgICAgICAgICAgICAgICAgIF8gICBfXHJcbiAgICAgICAgICAgICAgICAgICAgICB8IHwgfCAgX18gXFwgICAgICAgICAgICAgICAgICAgIHwgfCAoXylcclxuICAgIF9fXyAgX19fIF8gX18gX19fIHwgfCB8IHxfXykgfF9fX19fICAgX19fX18gIF9fIF98IHwgIF8gX19fXHJcbiAgIC8gX198LyBfX3wgJ19fLyBfIFxcfCB8IHwgIF8gIC8vIF8gXFwgXFwgLyAvIF8gXFwvIF9gIHwgfCB8IC8gX198XHJcbiAgIFxcX18gXFwgKF9ffCB8IHwgKF8pIHwgfCB8IHwgXFwgXFwgIF9fL1xcIFYgLyAgX18vIChffCB8IHxffCBcXF9fIFxcXHJcbiAgIHxfX18vXFxfX198X3wgIFxcX19fL3xffF98X3wgIFxcX1xcX19ffCBcXF8vIFxcX19ffFxcX18sX3xfKF8pIHxfX18vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy8gfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfF9fL1xyXG5cclxuICAgIFwiRGVjbGFyYXRpdmUgb24tc2Nyb2xsIHJldmVhbCBhbmltYXRpb25zLlwiXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2Nyb2xsUmV2ZWFsLmpzIGlzIGluc3BpcmVkIGJ5IGNicFNjcm9sbGVyLmpzLCDCqSAyMDE0LCBDb2Ryb3BzLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuICAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblxyXG4gICAgc2Nyb2xsUmV2ZWFsLmpzLCDCqSAyMDE0IGh0dHBzOi8vdHdpdHRlci5jb20vanVsaWFubGxveWRcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbjsoZnVuY3Rpb24gKHdpbmRvdykge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBkb2NFbGVtID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0Vmlld3BvcnRIICgpIHtcclxuICAgIHZhciBjbGllbnQgPSBkb2NFbGVtWydjbGllbnRIZWlnaHQnXSxcclxuICAgICAgaW5uZXIgPSB3aW5kb3dbJ2lubmVySGVpZ2h0J107XHJcblxyXG4gICAgcmV0dXJuIChjbGllbnQgPCBpbm5lcikgPyBpbm5lciA6IGNsaWVudDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE9mZnNldCAoZWwpIHtcclxuICAgIHZhciBvZmZzZXRUb3AgPSAwLFxyXG4gICAgICAgIG9mZnNldExlZnQgPSAwO1xyXG5cclxuICAgIGRvIHtcclxuICAgICAgaWYgKCFpc05hTihlbC5vZmZzZXRUb3ApKSB7XHJcbiAgICAgICAgb2Zmc2V0VG9wICs9IGVsLm9mZnNldFRvcDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWlzTmFOKGVsLm9mZnNldExlZnQpKSB7XHJcbiAgICAgICAgb2Zmc2V0TGVmdCArPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9IHdoaWxlIChlbCA9IGVsLm9mZnNldFBhcmVudClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgICAgbGVmdDogb2Zmc2V0TGVmdFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNFbGVtZW50SW5WaWV3cG9ydCAoZWwsIGgpIHtcclxuICAgIHZhciBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgICB2aWV3ZWQgPSBzY3JvbGxlZCArIGdldFZpZXdwb3J0SCgpLFxyXG4gICAgICAgIGVsSCA9IGVsLm9mZnNldEhlaWdodCxcclxuICAgICAgICBlbFRvcCA9IGdldE9mZnNldChlbCkudG9wLFxyXG4gICAgICAgIGVsQm90dG9tID0gZWxUb3AgKyBlbEgsXHJcbiAgICAgICAgaCA9IGggfHwgMDtcclxuXHJcbiAgICByZXR1cm4gKGVsVG9wICsgZWxIICogaCkgPD0gdmlld2VkICYmIChlbEJvdHRvbSkgPj0gc2Nyb2xsZWQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHRlbmQgKGEsIGIpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XHJcbiAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBhW2tleV0gPSBiW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbFJldmVhbChvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBzY3JvbGxSZXZlYWwucHJvdG90eXBlID0ge1xyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgYXhpczogJ3knLFxyXG4gICAgICBkaXN0YW5jZTogJzYwcHgnLFxyXG4gICAgICBkdXJhdGlvbjogJzAuNTVzJyxcclxuICAgICAgZGVsYXk6ICcwLjE1cycsXHJcblxyXG4gIC8vICBpZiAwLCB0aGUgZWxlbWVudCBpcyBjb25zaWRlcmVkIGluIHRoZSB2aWV3cG9ydCBhcyBzb29uIGFzIGl0IGVudGVyc1xyXG4gIC8vICBpZiAxLCB0aGUgZWxlbWVudCBpcyBjb25zaWRlcmVkIGluIHRoZSB2aWV3cG9ydCB3aGVuIGl0J3MgZnVsbHkgdmlzaWJsZVxyXG4gICAgICB2aWV3cG9ydEZhY3RvcjogMC4zM1xyXG4gICAgfSxcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgdGhpcy5lbGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY0VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2Nyb2xsUmV2ZWFsXScpKTtcclxuICAgICAgdGhpcy5zY3JvbGxlZCA9IGZhbHNlO1xyXG5cclxuICAvLyAgSW5pdGlhbGl6ZSBhbGwgc2Nyb2xscmV2ZWFscywgdHJpZ2dlcmluZyBhbGxcclxuICAvLyAgcmV2ZWFscyBvbiB2aXNpYmxlIGVsZW1lbnRzLlxyXG4gICAgICB0aGlzLmVsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XHJcbiAgICAgICAgc2VsZi5hbmltYXRlKGVsKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNlbGYuc2Nyb2xsZWQpIHtcclxuICAgICAgICAgIHNlbGYuc2Nyb2xsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuX3Njcm9sbFBhZ2UoKTtcclxuICAgICAgICAgIH0sIDYwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgcmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBkZWxheWVkKCkge1xyXG4gICAgICAgICAgc2VsZi5fc2Nyb2xsUGFnZSgpO1xyXG4gICAgICAgICAgc2VsZi5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYucmVzaXplVGltZW91dCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYucmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZGVsYXllZCwgMjAwKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIF9zY3JvbGxQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KGVsLCBzZWxmLm9wdGlvbnMudmlld3BvcnRGYWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGUoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBwYXJzZUxhbmd1YWdlOiBmdW5jdGlvbiAoZWwpIHtcclxuXHJcbiAgLy8gIFNwbGl0cyBvbiBhIHNlcXVlbmNlIG9mIG9uZSBvciBtb3JlIGNvbW1hcyBvciBzcGFjZXMuXHJcbiAgICAgIHZhciB3b3JkcyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGxyZXZlYWwnKS5zcGxpdCgvWywgXSsvKSxcclxuICAgICAgICAgIGVudGVyRnJvbSxcclxuICAgICAgICAgIHBhcnNlZCA9IHt9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gZmlsdGVyICh3b3Jkcykge1xyXG4gICAgICAgIHZhciByZXQgPSBbXSxcclxuXHJcbiAgICAgICAgICAgIGJsYWNrbGlzdCA9IFtcclxuICAgICAgICAgICAgICBcImZyb21cIixcclxuICAgICAgICAgICAgICBcInRoZVwiLFxyXG4gICAgICAgICAgICAgIFwiYW5kXCIsXHJcbiAgICAgICAgICAgICAgXCJ0aGVuXCIsXHJcbiAgICAgICAgICAgICAgXCJidXRcIlxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICB3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkLCBpKSB7XHJcbiAgICAgICAgICBpZiAoYmxhY2tsaXN0LmluZGV4T2Yod29yZCkgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXQucHVzaCh3b3JkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgfVxyXG5cclxuICAgICAgd29yZHMgPSBmaWx0ZXIod29yZHMpO1xyXG5cclxuICAgICAgd29yZHMuZm9yRWFjaChmdW5jdGlvbiAod29yZCwgaSkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHdvcmQpIHtcclxuICAgICAgICAgIGNhc2UgXCJlbnRlclwiOlxyXG4gICAgICAgICAgICBlbnRlckZyb20gPSB3b3Jkc1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50ZXJGcm9tID09IFwidG9wXCIgfHwgZW50ZXJGcm9tID09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgICBwYXJzZWQuYXhpcyA9IFwieVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50ZXJGcm9tID09IFwibGVmdFwiIHx8IGVudGVyRnJvbSA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICBwYXJzZWQuYXhpcyA9IFwieFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBcImFmdGVyXCI6XHJcbiAgICAgICAgICAgIHBhcnNlZC5kZWxheSA9IHdvcmRzW2kgKyAxXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJ3YWl0XCI6XHJcbiAgICAgICAgICAgIHBhcnNlZC5kZWxheSA9IHdvcmRzW2kgKyAxXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJtb3ZlXCI6XHJcbiAgICAgICAgICAgIHBhcnNlZC5kaXN0YW5jZSA9IHdvcmRzW2kgKyAxXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJvdmVyXCI6XHJcbiAgICAgICAgICAgIHBhcnNlZC5kdXJhdGlvbiA9IHdvcmRzW2kgKyAxXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJ0cmlnZ2VyXCI6XHJcbiAgICAgICAgICAgIHBhcnNlZC5ldmVudE5hbWUgPSB3b3Jkc1tpICsgMV07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICBVbnJlY29nbml6YWJsZSB3b3JkczsgZG8gbm90aGluZy5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gIC8vICBBZnRlciBhbGwgdmFsdWVzIGFyZSBwYXJzZWQsIGxldOKAmXMgbWFrZSBzdXJlIG91ciBvdXJcclxuICAvLyAgcGl4ZWwgZGlzdGFuY2UgaXMgbmVnYXRpdmUgZm9yIHRvcCBhbmQgbGVmdCBlbnRyYW5jZXMuXHJcbiAgLy9cclxuICAvLyAgaWUuIFwibW92ZSAyNXB4IGZyb20gdG9wXCIgc3RhcnRzIGF0ICd0b3A6IC0yNXB4JyBpbiBDU1MuXHJcblxyXG4gICAgICBpZiAoZW50ZXJGcm9tID09IFwidG9wXCIgfHwgZW50ZXJGcm9tID09IFwibGVmdFwiKSB7XHJcblxyXG4gICAgICAgIGlmICghdHlwZW9mIHBhcnNlZC5kaXN0YW5jZSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBwYXJzZWQuZGlzdGFuY2UgPSBcIi1cIiArIHBhcnNlZC5kaXN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcGFyc2VkLmRpc3RhbmNlID0gXCItXCIgKyB0aGlzLm9wdGlvbnMuZGlzdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHBhcnNlZDtcclxuICAgIH0sXHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgZ2VuQ1NTOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgdmFyIHBhcnNlZCA9IHRoaXMucGFyc2VMYW5ndWFnZShlbCk7XHJcblxyXG4gICAgICB2YXIgZGlzdCAgID0gcGFyc2VkLmRpc3RhbmNlIHx8IHRoaXMub3B0aW9ucy5kaXN0YW5jZSxcclxuICAgICAgICAgIGR1ciAgICA9IHBhcnNlZC5kdXJhdGlvbiB8fCB0aGlzLm9wdGlvbnMuZHVyYXRpb24sXHJcbiAgICAgICAgICBkZWxheSAgPSBwYXJzZWQuZGVsYXkgICAgfHwgdGhpcy5vcHRpb25zLmRlbGF5LFxyXG4gICAgICAgICAgYXhpcyAgID0gcGFyc2VkLmF4aXMgICAgIHx8IHRoaXMub3B0aW9ucy5heGlzO1xyXG5cclxuICAgICAgdmFyIHRyYW5zaXRpb24gPSBcIi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIFwiICsgZHVyICsgXCIgZWFzZSBcIiArIGRlbGF5ICsgXCI7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei10cmFuc2l0aW9uOiBhbGwgXCIgKyBkdXIgKyBcIiBlYXNlIFwiICsgZGVsYXkgKyBcIjtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1vLXRyYW5zaXRpb246IGFsbCBcIiArIGR1ciArIFwiIGVhc2UgXCIgKyBkZWxheSArIFwiO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItbXMtdHJhbnNpdGlvbjogYWxsIFwiICsgZHVyICsgXCIgZWFzZSBcIiArIGRlbGF5ICsgXCI7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uOiBhbGwgXCIgKyBkdXIgKyBcIiBlYXNlIFwiICsgZGVsYXkgKyBcIjtcIjtcclxuXHJcbiAgICAgIHZhciBpbml0aWFsID0gXCItd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoXCIgKyBkaXN0ICsgXCIpO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIihcIiArIGRpc3QgKyBcIik7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKFwiICsgZGlzdCArIFwiKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoXCIgKyBkaXN0ICsgXCIpO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5OiAwO1wiO1xyXG5cclxuICAgICAgdmFyIHRhcmdldCA9IFwiLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKDApO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKDApO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICBcIi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKDApO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKDApO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wYWNpdHk6IDE7XCI7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcclxuICAgICAgICBpbml0aWFsOiBpbml0aWFsLFxyXG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgIHRvdGFsRHVyYXRpb246ICgocGFyc2VGbG9hdChkdXIpICsgcGFyc2VGbG9hdChkZWxheSkpICogMTAwMClcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIHZhciBjc3MgPSB0aGlzLmdlbkNTUyhlbCk7XHJcblxyXG4gICAgICBpZiAoIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pbml0JykpIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY3NzLmluaXRpYWwpO1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zci1pbml0JywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItY29tcGxldGUnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQoZWwsIHRoaXMub3B0aW9ucy52aWV3cG9ydEZhY3RvcikpIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY3NzLnRhcmdldCArIGNzcy50cmFuc2l0aW9uKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItY29tcGxldGUnLCB0cnVlKTtcclxuICAgICAgICB9LCBjc3MudG90YWxEdXJhdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfTsgLy8gZW5kIHNjcm9sbFJldmVhbC5wcm90b3R5cGVcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgd2luZG93LnNjcm9sbFJldmVhbCA9IG5ldyBzY3JvbGxSZXZlYWwoKTtcclxuICB9KTtcclxuXHJcbn0pKHdpbmRvdyk7IiwiLy8gU21vb3RoU2Nyb2xsIHYwLjkuOVxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG5cclxuLy8gUGVvcGxlIGludm9sdmVkXHJcbi8vIC0gQmFsYXpzIEdhbGFtYm9zaTogbWFpbnRhaW5lciAoQ0hBTkdFTE9HLnR4dClcclxuLy8gLSBQYXRyaWNrIEJydW5uZXIgKHBhdHJpY2tiMTk5MUBnbWFpbC5jb20pXHJcbi8vIC0gTWljaGFlbCBIZXJmOiBzc2NfcHVsc2UgQWxnb3JpdGhtXHJcblxyXG5mdW5jdGlvbiBzc2NfaW5pdCgpIHtcclxuICAgIGlmICghZG9jdW1lbnQuYm9keSkgcmV0dXJuO1xyXG4gICAgdmFyIGUgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdmFyIHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICB2YXIgbiA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHZhciByID0gZS5zY3JvbGxIZWlnaHQ7XHJcbiAgICBzc2Nfcm9vdCA9IGRvY3VtZW50LmNvbXBhdE1vZGUuaW5kZXhPZihcIkNTU1wiKSA+PSAwID8gdCA6IGU7XHJcbiAgICBzc2NfYWN0aXZlRWxlbWVudCA9IGU7XHJcbiAgICBzc2NfaW5pdGRvbmUgPSB0cnVlO1xyXG4gICAgaWYgKHRvcCAhPSBzZWxmKSB7XHJcbiAgICAgICAgc3NjX2ZyYW1lID0gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChyID4gbiAmJiAoZS5vZmZzZXRIZWlnaHQgPD0gbiB8fCB0Lm9mZnNldEhlaWdodCA8PSBuKSkge1xyXG4gICAgICAgIHNzY19yb290LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGlmIChzc2Nfcm9vdC5vZmZzZXRIZWlnaHQgPD0gbikge1xyXG4gICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGkuc3R5bGUuY2xlYXIgPSBcImJvdGhcIjtcclxuICAgICAgICAgICAgZS5hcHBlbmRDaGlsZChpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghc3NjX2ZpeGVkYmFjaykge1xyXG4gICAgICAgIGUuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSBcInNjcm9sbFwiO1xyXG4gICAgICAgIHQuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSBcInNjcm9sbFwiXHJcbiAgICB9XHJcbiAgICBpZiAoc3NjX2tleWJvYXJkc3VwcG9ydCkge1xyXG4gICAgICAgIHNzY19hZGRFdmVudChcImtleWRvd25cIiwgc3NjX2tleWRvd24pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19zY3JvbGxBcnJheShlLCB0LCBuLCByKSB7XHJcbiAgICByIHx8IChyID0gMWUzKTtcclxuICAgIHNzY19kaXJlY3Rpb25DaGVjayh0LCBuKTtcclxuICAgIHNzY19xdWUucHVzaCh7XHJcbiAgICAgICAgeDogdCxcclxuICAgICAgICB5OiBuLFxyXG4gICAgICAgIGxhc3RYOiB0IDwgMCA/IC45OSA6IC0uOTksXHJcbiAgICAgICAgbGFzdFk6IG4gPCAwID8gLjk5IDogLS45OSxcclxuICAgICAgICBzdGFydDogKyhuZXcgRGF0ZSlcclxuICAgIH0pO1xyXG4gICAgaWYgKHNzY19wZW5kaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcyA9ICsobmV3IERhdGUpO1xyXG4gICAgICAgIHZhciBvID0gMDtcclxuICAgICAgICB2YXIgdSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBzc2NfcXVlLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmID0gc3NjX3F1ZVthXTtcclxuICAgICAgICAgICAgdmFyIGwgPSBzIC0gZi5zdGFydDtcclxuICAgICAgICAgICAgdmFyIGMgPSBsID49IHNzY19hbmltdGltZTtcclxuICAgICAgICAgICAgdmFyIGggPSBjID8gMSA6IGwgLyBzc2NfYW5pbXRpbWU7XHJcbiAgICAgICAgICAgIGlmIChzc2NfcHVsc2VBbGdvcml0aG0pIHtcclxuICAgICAgICAgICAgICAgIGggPSBzc2NfcHVsc2UoaClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcCA9IGYueCAqIGggLSBmLmxhc3RYID4+IDA7XHJcbiAgICAgICAgICAgIHZhciBkID0gZi55ICogaCAtIGYubGFzdFkgPj4gMDtcclxuICAgICAgICAgICAgbyArPSBwO1xyXG4gICAgICAgICAgICB1ICs9IGQ7XHJcbiAgICAgICAgICAgIGYubGFzdFggKz0gcDtcclxuICAgICAgICAgICAgZi5sYXN0WSArPSBkO1xyXG4gICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgc3NjX3F1ZS5zcGxpY2UoYSwgMSk7XHJcbiAgICAgICAgICAgICAgICBhLS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICB2YXIgdiA9IGUuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgZS5zY3JvbGxMZWZ0ICs9IG87XHJcbiAgICAgICAgICAgIGlmIChvICYmIGUuc2Nyb2xsTGVmdCA9PT0gdikge1xyXG4gICAgICAgICAgICAgICAgdCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICB2YXIgbSA9IGUuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBlLnNjcm9sbFRvcCArPSB1O1xyXG4gICAgICAgICAgICBpZiAodSAmJiBlLnNjcm9sbFRvcCA9PT0gbSkge1xyXG4gICAgICAgICAgICAgICAgbiA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXQgJiYgIW4pIHtcclxuICAgICAgICAgICAgc3NjX3F1ZSA9IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzc2NfcXVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGksIHIgLyBzc2NfZnJhbWVyYXRlICsgMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzc2NfcGVuZGluZyA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHNldFRpbWVvdXQoaSwgMCk7XHJcbiAgICBzc2NfcGVuZGluZyA9IHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX3doZWVsKGUpIHtcclxuICAgIGlmICghc3NjX2luaXRkb25lKSB7XHJcbiAgICAgICAgc3NjX2luaXQoKVxyXG4gICAgfVxyXG4gICAgdmFyIHQgPSBlLnRhcmdldDtcclxuICAgIHZhciBuID0gc3NjX292ZXJmbG93aW5nQW5jZXN0b3IodCk7XHJcbiAgICBpZiAoIW4gfHwgZS5kZWZhdWx0UHJldmVudGVkIHx8IHNzY19pc05vZGVOYW1lKHNzY19hY3RpdmVFbGVtZW50LCBcImVtYmVkXCIpIHx8IHNzY19pc05vZGVOYW1lKHQsIFwiZW1iZWRcIikgJiYgL1xcLnBkZi9pLnRlc3QodC5zcmMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhciByID0gZS53aGVlbERlbHRhWCB8fCAwO1xyXG4gICAgdmFyIGkgPSBlLndoZWVsRGVsdGFZIHx8IDA7XHJcbiAgICBpZiAoIXIgJiYgIWkpIHtcclxuICAgICAgICBpID0gZS53aGVlbERlbHRhIHx8IDBcclxuICAgIH1cclxuICAgIGlmIChNYXRoLmFicyhyKSA+IDEuMikge1xyXG4gICAgICAgIHIgKj0gc3NjX3N0ZXBzaXplIC8gMTIwXHJcbiAgICB9XHJcbiAgICBpZiAoTWF0aC5hYnMoaSkgPiAxLjIpIHtcclxuICAgICAgICBpICo9IHNzY19zdGVwc2l6ZSAvIDEyMFxyXG4gICAgfVxyXG4gICAgc3NjX3Njcm9sbEFycmF5KG4sIC1yLCAtaSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX2tleWRvd24oZSkge1xyXG4gICAgdmFyIHQgPSBlLnRhcmdldDtcclxuICAgIHZhciBuID0gZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUubWV0YUtleTtcclxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWF8ZW1iZWQvaS50ZXN0KHQubm9kZU5hbWUpIHx8IHQuaXNDb250ZW50RWRpdGFibGUgfHwgZS5kZWZhdWx0UHJldmVudGVkIHx8IG4pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKHNzY19pc05vZGVOYW1lKHQsIFwiYnV0dG9uXCIpICYmIGUua2V5Q29kZSA9PT0gc3NjX2tleS5zcGFjZWJhcikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB2YXIgciwgaSA9IDAsXHJcbiAgICAgICAgcyA9IDA7XHJcbiAgICB2YXIgbyA9IHNzY19vdmVyZmxvd2luZ0FuY2VzdG9yKHNzY19hY3RpdmVFbGVtZW50KTtcclxuICAgIHZhciB1ID0gby5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAobyA9PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgdSA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgIGNhc2Ugc3NjX2tleS51cDpcclxuICAgICAgICBzID0gLXNzY19hcnJvd3Njcm9sbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5kb3duOlxyXG4gICAgICAgIHMgPSBzc2NfYXJyb3dzY3JvbGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkuc3BhY2ViYXI6XHJcbiAgICAgICAgciA9IGUuc2hpZnRLZXkgPyAxIDogLTE7XHJcbiAgICAgICAgcyA9IC1yICogdSAqIC45O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LnBhZ2V1cDpcclxuICAgICAgICBzID0gLXUgKiAuOTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5wYWdlZG93bjpcclxuICAgICAgICBzID0gdSAqIC45O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LmhvbWU6XHJcbiAgICAgICAgcyA9IC1vLnNjcm9sbFRvcDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5lbmQ6XHJcbiAgICAgICAgdmFyIGEgPSBvLnNjcm9sbEhlaWdodCAtIG8uc2Nyb2xsVG9wIC0gdTtcclxuICAgICAgICBzID0gYSA+IDAgPyBhICsgMTAgOiAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LmxlZnQ6XHJcbiAgICAgICAgaSA9IC1zc2NfYXJyb3dzY3JvbGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkucmlnaHQ6XHJcbiAgICAgICAgaSA9IHNzY19hcnJvd3Njcm9sbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHNzY19zY3JvbGxBcnJheShvLCBpLCBzKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfbW91c2Vkb3duKGUpIHtcclxuICAgIHNzY19hY3RpdmVFbGVtZW50ID0gZS50YXJnZXRcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX3NldENhY2hlKGUsIHQpIHtcclxuICAgIGZvciAodmFyIG4gPSBlLmxlbmd0aDsgbi0tOykgc3NjX2NhY2hlW3NzY191bmlxdWVJRChlW25dKV0gPSB0O1xyXG4gICAgcmV0dXJuIHRcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX292ZXJmbG93aW5nQW5jZXN0b3IoZSkge1xyXG4gICAgdmFyIHQgPSBbXTtcclxuICAgIHZhciBuID0gc3NjX3Jvb3Quc2Nyb2xsSGVpZ2h0O1xyXG4gICAgZG8ge1xyXG4gICAgICAgIHZhciByID0gc3NjX2NhY2hlW3NzY191bmlxdWVJRChlKV07XHJcbiAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNzY19zZXRDYWNoZSh0LCByKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0LnB1c2goZSk7XHJcbiAgICAgICAgaWYgKG4gPT09IGUuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICghc3NjX2ZyYW1lIHx8IHNzY19yb290LmNsaWVudEhlaWdodCArIDEwIDwgbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNzY19zZXRDYWNoZSh0LCBkb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmNsaWVudEhlaWdodCArIDEwIDwgZS5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cgPSBnZXRDb21wdXRlZFN0eWxlKGUsIFwiXCIpLmdldFByb3BlcnR5VmFsdWUoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICAgICAgaWYgKG92ZXJmbG93ID09PSBcInNjcm9sbFwiIHx8IG92ZXJmbG93ID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNzY19zZXRDYWNoZSh0LCBlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSB3aGlsZSAoZSA9IGUucGFyZW50Tm9kZSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX2FkZEV2ZW50KGUsIHQsIG4pIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGUsIHQsIG4gfHwgZmFsc2UpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19yZW1vdmVFdmVudChlLCB0LCBuKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0LCBuIHx8IGZhbHNlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfaXNOb2RlTmFtZShlLCB0KSB7XHJcbiAgICByZXR1cm4gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0LnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX2RpcmVjdGlvbkNoZWNrKGUsIHQpIHtcclxuICAgIGUgPSBlID4gMCA/IDEgOiAtMTtcclxuICAgIHQgPSB0ID4gMCA/IDEgOiAtMTtcclxuICAgIGlmIChzc2NfZGlyZWN0aW9uLnggIT09IGUgfHwgc3NjX2RpcmVjdGlvbi55ICE9PSB0KSB7XHJcbiAgICAgICAgc3NjX2RpcmVjdGlvbi54ID0gZTtcclxuICAgICAgICBzc2NfZGlyZWN0aW9uLnkgPSB0O1xyXG4gICAgICAgIHNzY19xdWUgPSBbXVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfcHVsc2VfKGUpIHtcclxuICAgIHZhciB0LCBuLCByO1xyXG4gICAgZSA9IGUgKiBzc2NfcHVsc2VTY2FsZTtcclxuICAgIGlmIChlIDwgMSkge1xyXG4gICAgICAgIHQgPSBlIC0gKDEgLSBNYXRoLmV4cCgtZSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG4gPSBNYXRoLmV4cCgtMSk7XHJcbiAgICAgICAgZSAtPSAxO1xyXG4gICAgICAgIHIgPSAxIC0gTWF0aC5leHAoLWUpO1xyXG4gICAgICAgIHQgPSBuICsgciAqICgxIC0gbilcclxuICAgIH1cclxuICAgIHJldHVybiB0ICogc3NjX3B1bHNlTm9ybWFsaXplXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19wdWxzZShlKSB7XHJcbiAgICBpZiAoZSA+PSAxKSByZXR1cm4gMTtcclxuICAgIGlmIChlIDw9IDApIHJldHVybiAwO1xyXG4gICAgaWYgKHNzY19wdWxzZU5vcm1hbGl6ZSA9PSAxKSB7XHJcbiAgICAgICAgc3NjX3B1bHNlTm9ybWFsaXplIC89IHNzY19wdWxzZV8oMSlcclxuICAgIH1cclxuICAgIHJldHVybiBzc2NfcHVsc2VfKGUpXHJcbn1cclxuXHJcbnZhciBzc2NfZnJhbWVyYXRlID0gMTUwO1xyXG52YXIgc3NjX2FuaW10aW1lID0gNTAwO1xyXG52YXIgc3NjX3N0ZXBzaXplID0gMTUwO1xyXG52YXIgc3NjX3B1bHNlQWxnb3JpdGhtID0gdHJ1ZTtcclxudmFyIHNzY19wdWxzZVNjYWxlID0gNjtcclxudmFyIHNzY19wdWxzZU5vcm1hbGl6ZSA9IDE7XHJcbnZhciBzc2Nfa2V5Ym9hcmRzdXBwb3J0ID0gdHJ1ZTtcclxudmFyIHNzY19hcnJvd3Njcm9sbCA9IDUwO1xyXG52YXIgc3NjX2ZyYW1lID0gZmFsc2U7XHJcbnZhciBzc2NfZGlyZWN0aW9uID0ge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDBcclxufTtcclxuXHJcbnZhciBzc2NfaW5pdGRvbmUgPSBmYWxzZTtcclxudmFyIHNzY19maXhlZGJhY2sgPSB0cnVlO1xyXG52YXIgc3NjX3Jvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbnZhciBzc2NfYWN0aXZlRWxlbWVudDtcclxudmFyIHNzY19rZXkgPSB7XHJcbiAgICBsZWZ0OiAzNyxcclxuICAgIHVwOiAzOCxcclxuICAgIHJpZ2h0OiAzOSxcclxuICAgIGRvd246IDQwLFxyXG4gICAgc3BhY2ViYXI6IDMyLFxyXG4gICAgcGFnZXVwOiAzMyxcclxuICAgIHBhZ2Vkb3duOiAzNCxcclxuICAgIGVuZDogMzUsXHJcbiAgICBob21lOiAzNlxyXG59O1xyXG5cclxudmFyIHNzY19xdWUgPSBbXTtcclxudmFyIHNzY19wZW5kaW5nID0gZmFsc2U7XHJcbnZhciBzc2NfY2FjaGUgPSB7fTtcclxuXHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIHNzY19jYWNoZSA9IHt9XHJcbn0sIDEwICogMWUzKTtcclxuXHJcbnZhciBzc2NfdW5pcXVlSUQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZSA9IDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gdC5zc2NfdW5pcXVlSUQgfHwgKHQuc3NjX3VuaXF1ZUlEID0gZSsrKVxyXG4gICAgfVxyXG59KCk7XHJcblxyXG52YXIgaXNjaHJvbWUgPSAvY2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblxyXG5pZiAoaXNjaHJvbWUpIHtcclxuICAgIHNzY19hZGRFdmVudChcIm1vdXNlZG93blwiLCBzc2NfbW91c2Vkb3duKTtcclxuICAgIHNzY19hZGRFdmVudChcIm1vdXNld2hlZWxcIiwgc3NjX3doZWVsKTtcclxuICAgIHNzY19hZGRFdmVudChcImxvYWRcIiwgc3NjX2luaXQpXHJcbn0iLCIvKiEgV09XIC0gdjAuMS40IC0gMjAxNC0wMi0xMlxyXG4qIENvcHlyaWdodCAoYykgMjAxNCBNYXR0aGlldSBBdXNzYWd1ZWw7IExpY2Vuc2VkIE1JVCAqLyhmdW5jdGlvbigpe3ZhciBhLGI9W10uc2xpY2UsYz1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19O2E9ZnVuY3Rpb24oKXt2YXIgYyxkLGUsZixnLGgsaSxqLGs7Zm9yKGU9YXJndW1lbnRzWzBdLGM9Mjw9YXJndW1lbnRzLmxlbmd0aD9iLmNhbGwoYXJndW1lbnRzLDEpOltdLGc9ZXx8e30saT0wLGo9Yy5sZW5ndGg7aj5pO2krKyl7Zj1jW2ldLGs9Znx8e307Zm9yKGQgaW4gayloPWtbZF0sXCJvYmplY3RcIj09dHlwZW9mIGdbZF0/Z1tkXT1hKGdbZF0saCk6Z1tkXXx8KGdbZF09aCl9cmV0dXJuIGd9LHRoaXMuV09XPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXtudWxsPT1iJiYoYj17fSksdGhpcy5zY3JvbGxDYWxsYmFjaz1jKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssdGhpcyksdGhpcy5zY3JvbGxIYW5kbGVyPWModGhpcy5zY3JvbGxIYW5kbGVyLHRoaXMpLHRoaXMuc3RhcnQ9Yyh0aGlzLnN0YXJ0LHRoaXMpLHRoaXMuY29uZmlnPWEoYix0aGlzLmRlZmF1bHRzKSx0aGlzLnNjcm9sbGVkPSEwfXJldHVybiBiLnByb3RvdHlwZS5kZWZhdWx0cz17Ym94Q2xhc3M6XCJ3b3dcIixhbmltYXRlQ2xhc3M6XCJhbmltYXRlZFwiLG9mZnNldDowfSxiLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuXCJpbnRlcmFjdGl2ZVwiPT09KGE9ZG9jdW1lbnQucmVhZHlTdGF0ZSl8fFwiY29tcGxldGVcIj09PWE/dGhpcy5zdGFydCgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsdGhpcy5zdGFydCl9LGIucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQ7aWYodGhpcy5lbGVtZW50PXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdGhpcy5ib3hlcz10aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmNvbmZpZy5ib3hDbGFzcyksdGhpcy5ib3hlcy5sZW5ndGgpe2ZvcihkPXRoaXMuYm94ZXMsYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKylhPWRbYl0sdGhpcy5hcHBseVN0eWxlKGEsITApO3JldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciwhMSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnNjcm9sbEhhbmRsZXIsITEpLHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwodGhpcy5zY3JvbGxDYWxsYmFjayw1MCl9fSxiLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5zY3JvbGxIYW5kbGVyLCExKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuc2Nyb2xsSGFuZGxlciwhMSksbnVsbCE9dGhpcy5pbnRlcnZhbD9jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpOnZvaWQgMH0sYi5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hcHBseVN0eWxlKGEpLGEuY2xhc3NOYW1lPVwiXCIrYS5jbGFzc05hbWUrXCIgXCIrdGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzfSxiLnByb3RvdHlwZS5hcHBseVN0eWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO3JldHVybiBkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctZHVyYXRpb25cIiksYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWRlbGF5XCIpLGU9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1pdGVyYXRpb25cIiksYS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLHRoaXMuY3VzdG9tU3R5bGUoYixkLGMsZSkpfSxiLnByb3RvdHlwZS5jdXN0b21TdHlsZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZTtyZXR1cm4gZT1hP1widmlzaWJpbGl0eTogaGlkZGVuOyAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBub25lOyAtbW96LWFuaW1hdGlvbi1uYW1lOiBub25lOyBhbmltYXRpb24tbmFtZTogbm9uZTtcIjpcInZpc2liaWxpdHk6IHZpc2libGU7XCIsYiYmKGUrPVwiLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IFwiK2IrXCI7IC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiBcIitiK1wiOyBhbmltYXRpb24tZHVyYXRpb246IFwiK2IrXCI7XCIpLGMmJihlKz1cIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBcIitjK1wiOyAtbW96LWFuaW1hdGlvbi1kZWxheTogXCIrYytcIjsgYW5pbWF0aW9uLWRlbGF5OiBcIitjK1wiO1wiKSxkJiYoZSs9XCItd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IFwiK2QrXCI7IC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogXCIrZCtcIjsgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogXCIrZCtcIjtcIiksZX0sYi5wcm90b3R5cGUuc2Nyb2xsSGFuZGxlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNjcm9sbGVkPSEwfSxiLnByb3RvdHlwZS5zY3JvbGxDYWxsYmFjaz1mdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLnNjcm9sbGVkJiYodGhpcy5zY3JvbGxlZD0hMSx0aGlzLmJveGVzPWZ1bmN0aW9uKCl7dmFyIGIsYyxkLGU7Zm9yKGQ9dGhpcy5ib3hlcyxlPVtdLGI9MCxjPWQubGVuZ3RoO2M+YjtiKyspYT1kW2JdLGEmJih0aGlzLmlzVmlzaWJsZShhKT90aGlzLnNob3coYSk6ZS5wdXNoKGEpKTtyZXR1cm4gZX0uY2FsbCh0aGlzKSwhdGhpcy5ib3hlcy5sZW5ndGgpP3RoaXMuc3RvcCgpOnZvaWQgMH0sYi5wcm90b3R5cGUub2Zmc2V0VG9wPWZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiPWEub2Zmc2V0VG9wO2E9YS5vZmZzZXRQYXJlbnQ7KWIrPWEub2Zmc2V0VG9wO3JldHVybiBifSxiLnByb3RvdHlwZS5pc1Zpc2libGU9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZjtyZXR1cm4gYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LW9mZnNldFwiKXx8dGhpcy5jb25maWcub2Zmc2V0LGY9d2luZG93LnBhZ2VZT2Zmc2V0LGU9Zit0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LWMsZD10aGlzLm9mZnNldFRvcChhKSxiPWQrYS5jbGllbnRIZWlnaHQsZT49ZCYmYj49Zn0sYn0oKX0pLmNhbGwodGhpcyk7IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBCQUNLR1JPVU5EIFNMSURFUiAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuJC52ZWdhcygnc2xpZGVzaG93Jywge1xyXG4gIGRlbGF5OjcwMDAsXHJcbiAgYmFja2dyb3VuZHM6W1xyXG4gICAgeyBzcmM6J2ltYWdlcy9iYWNrZ3JvdW5kcy9iZzEuanBnJywgZmFkZToxMDAwIH0sXHJcbiAgICB7IHNyYzonaW1hZ2VzL2JhY2tncm91bmRzL2JnMi5qcGcnLCBmYWRlOjEwMDAgfSxcclxuICAgIHsgc3JjOidpbWFnZXMvYmFja2dyb3VuZHMvYmczLmpwZycsIGZhZGU6MTAwMCB9XHJcbiAgXVxyXG59KTtcclxuICAgICAgXHJcbiAgIFxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTE9BREVSICAgICAgICAgICAgICAgICAgICAgXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8vIG1ha2VzIHN1cmUgdGhlIHdob2xlIHNpdGUgaXMgbG9hZGVkXHJcbmpRdWVyeSh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gd2lsbCBmaXJzdCBmYWRlIG91dCB0aGUgbG9hZGluZyBhbmltYXRpb25cclxuXHRqUXVlcnkoXCIuc3RhdHVzXCIpLmZhZGVPdXQoKTtcclxuICAgICAgICAvLyB3aWxsIGZhZGUgb3V0IHRoZSB3aG9sZSBESVYgdGhhdCBjb3ZlcnMgdGhlIHdlYnNpdGUuXHJcblx0alF1ZXJ5KFwiLnByZWxvYWRlclwiKS5kZWxheSgxMDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxufSlcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBCb290c3RyYXAgRml4ICAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZVxcLzEwXFwuMC8pKSB7XHJcbiAgdmFyIG1zVmlld3BvcnRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICBtc1ZpZXdwb3J0U3R5bGUuYXBwZW5kQ2hpbGQoXHJcbiAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcclxuICAgICAgJ0AtbXMtdmlld3BvcnR7d2lkdGg6YXV0byFpbXBvcnRhbnR9J1xyXG4gICAgKVxyXG4gIClcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQobXNWaWV3cG9ydFN0eWxlKVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBTVElDS1kgTkFWICAgICAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKCcubWFpbi1uYXYtbGlzdCcpLm9uZVBhZ2VOYXYoe1xyXG4gICAgY2hhbmdlSGFzaDogdHJ1ZSxcclxuICAgIHNjcm9sbFNwZWVkOiA3NTAsXHJcbiAgICBzY3JvbGxUaHJlc2hvbGQ6IDAuNSxcclxuICAgIGZpbHRlcjogJzpub3QoLmV4dGVybmFsKSdcclxuICB9KTtcclxuICBcclxuICAvLyBTdGlja3kgSGVhZGVyIC0gaHR0cDovL2pxdWVyeWZvcmRlc2lnbmVycy5jb20vZml4ZWQtZmxvYXRpbmctZWxlbWVudHMvICAgICAgICAgXHJcbiAgdmFyIHRvcCA9ICQoJyNtYWluLW5hdicpLm9mZnNldCgpLnRvcCAtIHBhcnNlRmxvYXQoJCgnI21haW4tbmF2JykuY3NzKCdtYXJnaW4tdG9wJykucmVwbGFjZSgvYXV0by8sIDApKTtcclxuICBcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gd2hhdCB0aGUgeSBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsIGlzXHJcbiAgICB2YXIgeSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICBcclxuICAgIC8vIHdoZXRoZXIgdGhhdCdzIGJlbG93IHRoZSBmb3JtXHJcbiAgICBpZiAoeSA+PSB0b3ApIHtcclxuICAgICAgLy8gaWYgc28sIGFkIHRoZSBmaXhlZCBjbGFzc1xyXG4gICAgICAkKCcjbWFpbi1uYXYnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG90aGVyd2lzZSByZW1vdmUgaXRcclxuICAgICAgJCgnI21haW4tbmF2JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbn0pO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogIFNNT09USCBTQ1JPTEwgRlJPIElOVEVSTkFMICNIQVNIIExJTktTXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJ2FbaHJlZl49XCIjXCJdLmlucGFnZS1zY3JvbGwsIC5pbnBhZ2Utc2Nyb2xsIGFbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuaGFzaCxcclxuICAgICAgICAgICAgJHRhcmdldCA9ICQodGFyZ2V0KTtcclxuICAgICAgICAkKCcubWFpbi1uYXZpZ2F0aW9uIGFbaHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5tYWluLW5hdmlnYXRpb24gYTpub3QoW2hyZWY9XCInICsgdGFyZ2V0ICsgJ1wiXSknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICgkdGFyZ2V0Lm9mZnNldCgpKSA/ICR0YXJnZXQub2Zmc2V0KCkudG9wIDogMFxyXG4gICAgICAgIH0sIDkwMCwgJ3N3aW5nJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBPV0wgQ1JPVVNFTCAgICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICB2YXIgb3dsID0gJChcIiNjbGllbnQtZmVlZGJhY2tzXCIpO1xyXG4gIG93bC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGl0ZW1zIDogMywgLy8xMCBpdGVtcyBhYm92ZSAxMDAwcHggYnJvd3NlciB3aWR0aFxyXG4gICAgICBpdGVtc0Rlc2t0b3AgOiBbMTAwMCwyXSwgLy81IGl0ZW1zIGJldHdlZW4gMTAwMHB4IGFuZCA5MDFweFxyXG4gICAgICBpdGVtc0Rlc2t0b3BTbWFsbCA6IFs5MDAsMV0sIC8vIGJldHdlZW0gOTAwcHggYW5kIDYwMXB4XHJcbiAgICAgIGl0ZW1zVGFibGV0OiBbNjAwLDFdLCAvLzIgaXRlbXMgYmV0d2VlbiA2MDAgYW5kIDBcclxuICAgICAgaXRlbXNNb2JpbGUgOiBmYWxzZSAvLyBpdGVtc01vYmlsZSBkaXNhYmxlZCAtIGluaGVyaXQgZnJvbSBpdGVtc1RhYmxldCBvcHRpb25cclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBTTU9PVEggU0NST0xMICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxudmFyIHNjcm9sbEFuaW1hdGlvblRpbWUgPSAxMjAwLFxyXG4gICAgICAgIHNjcm9sbEFuaW1hdGlvbiA9ICdlYXNlSW5PdXRFeHBvJztcclxuICAgICQoJ2Euc2Nyb2xsdG8nKS5iaW5kKCdjbGljay5zbW9vdGhzY3JvbGwnLGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuaGFzaDtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAnc2Nyb2xsVG9wJzogJCh0YXJnZXQpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIHNjcm9sbEFuaW1hdGlvblRpbWUsIHNjcm9sbEFuaW1hdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcclxuICAgICAgICB9KTtcclxuICAgIH0pOyAgIFxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIENPTlRBQ1QgRk9STSAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4kKFwiI2NvbnRhY3QtZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xyXG4gICAgdmFyIGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuICAgIHZhciBzdWJqZWN0ID0gJChcIiNzdWJqZWN0XCIpLnZhbCgpO1xyXG4gICAgdmFyIG1lc3NhZ2UgPSAkKFwiI21lc3NhZ2VcIikudmFsKCk7XHJcbiAgICB2YXIgZGF0YVN0cmluZyA9ICduYW1lPScgKyBuYW1lICsgJyZlbWFpbD0nICsgZW1haWwgKyAnJnN1YmplY3Q9JyArIHN1YmplY3QgKyAnJm1lc3NhZ2U9JyArIG1lc3NhZ2U7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsQWRkcmVzcykge1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXigoKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4/JC9pKTtcclxuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KGVtYWlsQWRkcmVzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpc1ZhbGlkRW1haWwoZW1haWwpICYmIChtZXNzYWdlLmxlbmd0aCA+IDEpICYmIChuYW1lLmxlbmd0aCA+IDEpKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCJzZW5kbWFpbC5waHBcIixcclxuICAgICAgICAgICAgZGF0YTogZGF0YVN0cmluZyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnN1Y2Nlc3MnKS5mYWRlSW4oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZXJyb3InKS5mYWRlT3V0KDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmVycm9yJykuZmFkZUluKDEwMDApO1xyXG4gICAgICAgICQoJy5zdWNjZXNzJykuZmFkZU91dCg1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufSk7XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBQUk9KRUNUIExPQURJTkcgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcclxuICAgICQoJy5tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpICsgJyAuc2luZ2xlLXByb2plY3QnLFxyXG4gICAgICAgICAgICBwb3J0Zm9saW9MaXN0ID0gJCgnI3BvcnRmb2xpby1saXN0JyksXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSAkKCcjbG9hZGVkLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgcG9ydGZvbGlvTGlzdC5hbmltYXRlKHsnbWFyZ2luTGVmdCc6Jy0xMjAlJ30se2R1cmF0aW9uOjQwMCxxdWV1ZTpmYWxzZX0pO1xyXG4gICAgICAgIHBvcnRmb2xpb0xpc3QuZmFkZU91dCg0MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgJCgnI2xvYWRlcicpLnNob3coKTsgfSw0MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29udGVudC5sb2FkKGhyZWYsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2xvYWRlZC1jb250ZW50IG1ldGEnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNsb2FkZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmZhZGVJbig2MDApO1xyXG4gICAgICAgICAgICAgICAgJCgnI2JhY2stYnV0dG9uJykuZmFkZUluKDYwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sODAwKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYmFjay1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBwb3J0Zm9saW9MaXN0ID0gJCgnI3BvcnRmb2xpby1saXN0JylcclxuICAgICAgICAgICAgY29udGVudCA9ICQoJyNsb2FkZWQtY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb250ZW50LmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAkKCcjYmFjay1idXR0b24nKS5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBwb3J0Zm9saW9MaXN0LmFuaW1hdGUoeydtYXJnaW5MZWZ0JzonMCd9LHtkdXJhdGlvbjo0MDAscXVldWU6ZmFsc2V9KTtcclxuICAgICAgICAgICAgcG9ydGZvbGlvTGlzdC5mYWRlSW4oNjAwKTtcclxuICAgICAgICB9LDgwMCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIFBBUkFMTEFYICAgICAgICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuICAkKCdkaXZbZGF0YS10eXBlPVwiYmFja2dyb3VuZFwiXSwgaGVhZGVyW2RhdGEtdHlwZT1cImJhY2tncm91bmRcIl0sIHNlY3Rpb25bZGF0YS10eXBlPVwiYmFja2dyb3VuZFwiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIHZhciAkYmdvYmogPSAkKHRoaXMpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHlQb3MgPSAtKCR3aW5kb3cuc2Nyb2xsVG9wKCkgLyAkYmdvYmouZGF0YSgnc3BlZWQnKSk7XHJcbiAgICAgIHZhciBjb29yZHMgPSAnNTAlICcrIHlQb3MgKyAncHgnO1xyXG4gICAgICAkYmdvYmouY3NzKHsgXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBjb29yZHMgXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBLTk9CICAgICAgICAgICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiQoXCIuc2tpbGwxXCIpLmtub2Ioe1xyXG4gICAgICAgICAgICAgICAgJ21heCc6MTAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogNjQsXHJcbiAgICAgICAgICAgICAgICAncmVhZE9ubHknOnRydWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXRDb2xvcic6JyAjRkZGRkZGICcsXHJcbiAgICAgICAgICAgICAgICAnYmdDb2xvcic6JyAjMjIyMjIyICcsXHJcbiAgICAgICAgICAgICAgICAnZmdDb2xvcic6JyAjZTk2NjU2ICdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4kKFwiLnNraWxsMlwiKS5rbm9iKHtcclxuICAgICAgICAgICAgICAgICdtYXgnOjEwMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6IDY0LFxyXG4gICAgICAgICAgICAgICAgJ3JlYWRPbmx5Jzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0Q29sb3InOicgI0ZGRkZGRiAnLFxyXG4gICAgICAgICAgICAgICAgJ2JnQ29sb3InOicgIzIyMjIyMiAnLFxyXG4gICAgICAgICAgICAgICAgJ2ZnQ29sb3InOicgIzM0ZDI5MyAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAkKFwiLnNraWxsM1wiKS5rbm9iKHtcclxuICAgICAgICAgICAgICAgICdtYXgnOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiA2NCxcclxuICAgICAgICAgICAgICAgICdyZWFkT25seSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXRDb2xvcic6JyAjRkZGRkZGICcsXHJcbiAgICAgICAgICAgICAgICAnYmdDb2xvcic6JyAjMjIyMjIyICcsXHJcbiAgICAgICAgICAgICAgICAnZmdDb2xvcic6JyAjM2FiMGUyICdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICQoXCIuc2tpbGw0XCIpLmtub2Ioe1xyXG4gICAgICAgICAgICAgICAgJ21heCc6IDEwMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6IDY0LFxyXG4gICAgICAgICAgICAgICAgJ3JlYWRPbmx5JzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dENvbG9yJzonICNGRkZGRkYgJyxcclxuICAgICAgICAgICAgICAgICdiZ0NvbG9yJzonICMyMjIyMjIgJyxcclxuICAgICAgICAgICAgICAgICdmZ0NvbG9yJzonICNFN0FDNDQgJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBXT1cgQU5JTUFUSU9OICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG5cclxuXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGNhbGVuZGFyLmNvbnRyb2xsZXIuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuYXBwQ29udHJvbGxlcnMuY29udHJvbGxlcignY2FsZW5kYXJDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnY2FsZW5kYXJDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgJHNjb3BlLnVpQ29uZmlnID0ge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogNDUwLFxyXG4gICAgICAgICAgICBlZGl0YWJsZSAgICA6IHRydWUsXHJcbiAgICAgICAgICAgIGhlYWRlciAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgbGVmdCAgICA6ICdtb250aCBiYXNpY1dlZWsgYmFzaWNEYXkgYWdlbmRhV2VlayBhZ2VuZGFEYXknLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyICA6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodCAgIDogJ3RvZGF5IHByZXYsbmV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF5Q2xpY2sgICAgOiAkc2NvcGUuYWxlcnRFdmVudE9uQ2xpY2ssXHJcbiAgICAgICAgICAgIGV2ZW50RHJvcCAgIDogJHNjb3BlLmFsZXJ0T25Ecm9wLFxyXG4gICAgICAgICAgICBldmVudFJlc2l6ZSA6ICRzY29wZS5hbGVydE9uUmVzaXplXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG59XSk7XHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdjYWxlbmRhckNvbnRyb2xsZXInKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gY2FsZW5kYXIuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogY2l0YXRpb25zLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2NpdGF0aW9uc0NvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsICckaHR0cCcsICckaW50ZXJ2YWwnLCAnJGFuaW1hdGUnLCAndWlHcmlkQ29uc3RhbnRzJyxcclxuICAgIGZ1bmN0aW9uKCRzY29wZSwgICAkcm9vdFNjb3BlLCAgICRodHRwLCAgICRpbnRlcnZhbCwgICAkYW5pbWF0ZSwgICB1aUdyaWRDb25zdGFudHMgICl7XHJcblxyXG4gICAgICAgIGRlYnVnPXRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdjaXRhdGlvbnNDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIGNpdGF0aW9ucyBjb2xsZWN0aW9uXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJHJvb3RTY29wZS5lbmRQb2ludCArICcvanNvbi9jaXRhdGlvbnMuanNvbic7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJGh0dHAuZ2V0KHBhdGgpXHJcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNpdGF0aW9ucyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY2l0YXRpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJGh0dHAgZ2V0IGVycm9yOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZSggJHNjb3BlLmNpdGF0aW9ucyA9PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRGF0ZSgpKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyB1aS1ib290c3RyYXAuZ3JpZCBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlwbGF5TmFtZTogJ0lEJyxcclxuICAgICAgICAgICAgICAgICAgICBjZWxsQWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ2VsbEVkaXQ6IGZhbHNlIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXBsYXlOYW1lOiAnUGhvdG8gTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2VsbFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInVpLWdyaWQtZm9vdGVyXCI+VXBwZXIgTGltaXRzOjwvZGl2PidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdocmVmJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0aHVtYm5haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2hvZmZzZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndm9mZnNldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdkYXRlVGFrZW4nLCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGF0ZVRha2VuJywgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEYXRlIFRha2VuJywgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUNvbHVtblJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjZWxsRmlsdGVyOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2VsbEZpbHRlcjogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB1aUdyaWRDb25zdGFudHMuZmlsdGVyLkdSRUFURVJfVEhBTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB1aUdyaWRDb25zdGFudHMuZmlsdGVyLkxFU1NfVEhBTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRpb25UeXBlOiB1aUdyaWRDb25zdGFudHMuYWdncmVnYXRpb25UeXBlcy5tYXgsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0aW9uSGlkZUxhYmVsOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3NpemUnLCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2l6ZScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRmlsZSBTaXplJywgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ29sdW1uUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0aW9uVHlwZTogdWlHcmlkQ29uc3RhbnRzLmFnZ3JlZ2F0aW9uVHlwZXMubWF4LCBcclxuICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGlvbkhpZGVMYWJlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFncycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEZXNjcmlwdGl2ZSBUYWdzJyxcclxuICAgICAgICAgICAgICAgICAgICBjZWxsQWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdoaWxpZ2h0JywgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpbGlnaHQnLCBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0gnLCBcclxuICAgICAgICAgICAgICAgICAgICBjZWxsQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ29sdW1uUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB1aUdyaWRDb25zdGFudHMuZmlsdGVyLlNFTEVDVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJzAnLCBsYWJlbDogJ0dyaWQgT25seScgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnMScsIGxhYmVsOiAnQ2Fyb3VzZWwnIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24oIGdyaWRBcGkgKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZDFBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMucm93SWRlbnRpdHkgPSBmdW5jdGlvbihyb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdy5pZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5nZXRSb3dJZGVudGl0eSA9IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gcm93LmlkO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEVuZCBvZiBHcmlkIG9wdGlvbnNcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHVuaXF1ZSB0YWdzXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHZhciBhbGxJZHMgPSBtdWx0T2JqQXJyYXkyQXJyYXkoIF8udW5pcShfLnBsdWNrKCRzY29wZS5jaXRhdGlvbnMsICdpZCcpKSApO1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2FsbElkczonKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhhbGxJZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLklkcyA9IChfLnVuaXEoYWxsSWRzKSkuc29ydCgpO1xyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJHNjb3BlLklkczonKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygkc2NvcGUuSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnICAgJHNjb3BlLmNpdGF0aW9ucy5sZW5ndGg9KCcgKyAkc2NvcGUuY2l0YXRpb25zLmxlbmd0aCArICcpJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJyAgICAgICAgIGFsbElkcy5sZW5ndGg9KCcgKyBhbGxJZHMubGVuZ3RoICsgJyknKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnJHNjb3BlLklkcy5sZW5ndGg9KCcgKyAkc2NvcGUuSWRzLmxlbmd0aCArICcpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5zaG9ydERhdGUgPSBmdW5jdGlvbihmdWxsRGF0ZSkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gTU0tREQtWVlZWSBmcm9tICBZWVlZLU1NLUREVEhIOk1NOlNTOnNzc1ogZm9ybWF0XHJcbiAgICAgICAgICAgIGZ1bGxEYXRlID0gZnVsbERhdGUgKyAgICAgXCJfX19fX19fX19fX19fX19fX19fX19fX19cIjtcclxuICAgICAgICAgICAgcmV0dXJuIChmdWxsRGF0ZS5zdWJzdHIoNSwyKSsgJy0nICsgZnVsbERhdGUuc3Vic3RyKDgsMikgKyAnLScgKyBmdWxsRGF0ZS5zdWJzdHIoMCw0KSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgICAgICAkc2NvcGUuY2hlY2tlZCA9IGZ1bmN0aW9uKGJvb2xWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKGJvb2xWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbyc7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5zb3J0ID0ge1xyXG4gICAgICAgICAgICBjb2x1bW46ICcnLFxyXG4gICAgICAgICAgICBkZXNjZW5kaW5nOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHNjb3BlLmNoYW5nZVNvcnRpbmcgPSBmdW5jdGlvbihjb2x1bW4pIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzb3J0ID0gJHNjb3BlLnNvcnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc29ydC5jb2x1bW4gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICBzb3J0LmRlc2NlbmRpbmcgPSAhc29ydC5kZXNjZW5kaW5nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc29ydC5jb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBzb3J0LmRlc2NlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnY2l0YXRpb25zQ29udHJvbGxlcicpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBjaXRhdGlvbnMuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogaG9tZS5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgW1xyXG4gICAgICAgICAgICAnJHNjb3BlJywgJyRyb290U2NvcGUnLCBcclxuICAgIGZ1bmN0aW9uKCRzY29wZSwgICAkcm9vdFNjb3BlKXtcclxuXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCdob21lQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzIFxyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2luIHZhbHVlcztcclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS51c2VyTmFtZSA9IFwiYmlsbEBtYWludHouY29tXCI7XHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnaG9tZUNvbnRyb2xsZXInKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gaG9tZS5jb250cm9sbGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBob21lLmNvbnRyb2xsZXIuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuYXBwQ29udHJvbGxlcnMuY29udHJvbGxlcigndGVzdDFDb250cm9sbGVyJywgW1xyXG4gICAgICAgICAgICAnJHNjb3BlJywgJyRyb290U2NvcGUnLCBcclxuICAgIGZ1bmN0aW9uKCRzY29wZSwgICAkcm9vdFNjb3BlKXtcclxuXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCd0ZXN0MUNvbnRyb2xsZXInKSBhY3RpdmF0ZWRcIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBcclxuICAgICAgICAkcm9vdFNjb3BlLmNsZWFybWVudWNsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVGVtcG9yYXJ5IHZhbHVlcyBcclxuICAgICAgICAvLyBUT0RPOiByZXBsYWNlIHRoZXNlIHdpdGggcmVhbCBsb2dpbiB2YWx1ZXM7XHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUudXNlck5hbWUgPSBcImNpdGl6ZW5AY2FuZS5jb21cIjtcclxuICAgIH1cclxuXSk7XHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcENvbnRyb2xsZXJzKCd0ZXN0MUNvbnRyb2xsZXInKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdGVzdDEuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogaG9tZS5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ3Rlc3QxQ29udHJvbGxlcicsIFtcclxuICAgICAgICAgICAgJyRzY29wZScsICckcm9vdFNjb3BlJywgXHJcbiAgICBmdW5jdGlvbigkc2NvcGUsICAgJHJvb3RTY29wZSl7XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndGVzdDFDb250cm9sbGVyJykgYWN0aXZhdGVkXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgJHJvb3RTY29wZS5jbGVhcm1lbnVjbGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFRlbXBvcmFyeSB2YWx1ZXMgXHJcbiAgICAgICAgLy8gVE9ETzogcmVwbGFjZSB0aGVzZSB3aXRoIHJlYWwgbG9naW4gdmFsdWVzO1xyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJOYW1lID0gXCJjaXRpemVuQGNhbmUuY29tXCI7XHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndGVzdDFDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QxLmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGhvbWUuY29udHJvbGxlci5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBDb250cm9sbGVycy5jb250cm9sbGVyKCd0ZXN0M0NvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsIFxyXG4gICAgZnVuY3Rpb24oJHNjb3BlLCAgICRyb290U2NvcGUpe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3Rlc3QzQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRyb290U2NvcGUuY2xlYXJtZW51Y2xhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzIFxyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhlc2Ugd2l0aCByZWFsIGxvZ2luIHZhbHVlcztcclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS51c2VyTmFtZSA9IFwiY2l0aXplbkBjYW5lLmNvbVwiO1xyXG4gICAgfVxyXG5dKTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3Rlc3QzQ29udHJvbGxlcicpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB0ZXN0My5jb250cm9sbGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB1c2Vycy5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ3VzZXJzQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgVXNlcikge1xyXG4gICAgaWYoZGVidWcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3VzZXJzQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgICAgICAkc2NvcGUuc2F2ZVVzZXIgPSBVc2VyLnNhdmU7XHJcbiAgICBcclxuICAgICAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbihVc2VyLCBwYXNzd2QpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgJHNjb3BlLnVzZXJOYW1lID0gVXNlcjtcclxuICAgICAgICAgICAgYWxlcnQoXCJMb2dpbiBDb21wbGV0ZWQgOiBsb2dnZWRJbiA9IFwiICsgJHNjb3BlLmxvZ2dlZEluKTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKFVzZXIpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTG9nb3V0IENvbXBsZXRlZCA6IGxvZ2dlZEluID0gXCIgKyAkc2NvcGUubG9nZ2VkSW4pO1xyXG4gICAgICAgIH07XHJcbiAgIH0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndXNlcnNDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgXHJcbmFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKFwiZHVtYlBhc3N3b3JkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj5cXG48aW5wdXQgdHlwZT0ndGV4dCcgbmctbW9kZWw9J21vZGVsLmlucHV0Jz5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiPGRpdj57e21vZGVsLmlucHV0fX08L2Rpdj5cXG4gICAgXFxuPC9kaXY+XCIsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goXCJtb2RlbC5pbnB1dFwiLCBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJwYXNzd29yZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbigxKS50b2dnbGVDbGFzcyhcImFsZXJ0LWJveCBhbGVydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuICAgIFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdXNlcnMuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGRpcmVjdGl2ZXMuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIERlZmluZSB5b3VyIGRpcmVjdGl2ZXMgaGVyZS4gXHJcbi8vIERpcmVjdGl2ZXMgY2FuIGJlIGFkZGVkIHRvIHNhbWUgbW9kdWxlIGFzIHRoZSBtYWluICdhcHAnIFxyXG4vLyBvciBhIHNlcGVyYXRlIG1vZHVsZSBjYW4gYmUgY3JlYXRlZC5cclxuXHJcbmFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKFwicGhvdG9GbGlwXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgLy90ZW1wbGF0ZVVSTDogJ3BhcnRpYWxzL3Bob3Rvcy9waG90by50ZXN0Lmh0bWwnXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj5cXG48aW5wdXQgdHlwZT0ndGV4dCcgbmctbW9kZWw9J21vZGVsLmlucHV0Jz5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiPGRpdj57e21vZGVsLmlucHV0fX08L2Rpdj5cXG4gICAgXFxuPC9kaXY+XCIsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goXCJtb2RlbC5pbnB1dFwiLCBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJwYXNzd29yZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbigxKS50b2dnbGVDbGFzcyhcImFsZXJ0LWJveCBhbGVydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Bob3RvRmxpcCcpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcblxyXG5cclxuLyoqXHJcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcclxuICogQG5hbWUgdWkuYm9vdHN0cmFwLmNhcm91c2VsLmRpcmVjdGl2ZTpjYXJvdXNlbFxyXG4gKiBAcmVzdHJpY3QgRUFcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENhcm91c2VsIGlzIHRoZSBvdXRlciBjb250YWluZXIgZm9yIGEgc2V0IG9mIGltYWdlICdzbGlkZXMnIHRvIHNob3djYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcj19IGludGVydmFsIFRoZSB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgaXQgd2lsbCB0YWtlIFxyXG4gKiAgICAgdGhlIGNhcm91c2VsIHRvIGdvIHRvIHRoZSBuZXh0IHNsaWRlLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24gV2hldGhlciB0byBkaXNhYmxlIHRyYW5zaXRpb25zIG9uIHRoZSBcclxuICogICAgIGNhcm91c2VsLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1BhdXNlIFdoZXRoZXIgdG8gZGlzYWJsZSBwYXVzaW5nIG9uIHRoZSBjYXJvdXNlbCBcclxuICogICAgKGJ5IGRlZmF1bHQsIHRoZSBjYXJvdXNlbCBpbnRlcnZhbCBwYXVzZXMgb24gaG92ZXIpLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG48ZXhhbXBsZSBtb2R1bGU9XCJ1aS5ib290c3RyYXBcIj5cclxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxyXG4gICAgPGNhcm91c2VsPlxyXG4gICAgICA8c2xpZGU+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzE1MC8xNTBcIiBzdHlsZT1cIm1hcmdpbjphdXRvO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgICA8cD5CZWF1dGlmdWwhPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NsaWRlPlxyXG4gICAgICA8c2xpZGU+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzEwMC8xNTBcIiBzdHlsZT1cIm1hcmdpbjphdXRvO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgICA8cD5EJ2F3dyE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2xpZGU+XHJcbiAgICA8L2Nhcm91c2VsPlxyXG4gIDwvZmlsZT5cclxuICA8ZmlsZSBuYW1lPVwiZGVtby5jc3NcIj5cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgPC9maWxlPlxyXG48L2V4YW1wbGU+XHJcbiovXHJcblxyXG4vLyBDYXJvdXNlbCBEaXJlY3RpdmVcclxuLypcclxuYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ2Nhcm91c2VsJywgW2Z1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ3Bob3Rvc0NvbnRyb2xsZXInLFxyXG4gICAgICAgIHJlcXVpcmU6ICdjYXJvdXNlbCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9jYXJvdXNlbC9jYXJvdXNlbC5odG1sJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgaW50ZXJ2YWw6ICc9JyxcclxuICAgICAgICAgIG5vVHJhbnNpdGlvbjogJz0nLFxyXG4gICAgICAgICAgbm9QYXVzZTogJz0nXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufV0pXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCdjYXJvdXNlbCcpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcbiovXHJcbi8qKlxyXG4gKiBAbmdkb2MgZGlyZWN0aXZlXHJcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC5jYXJvdXNlbC5kaXJlY3RpdmU6c2xpZGVcclxuICogQHJlc3RyaWN0IEVBXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDcmVhdGVzIGEgc2xpZGUgaW5zaWRlIGEge0BsaW5rIHVpLmJvb3RzdHJhcC5jYXJvdXNlbC5kaXJlY3RpdmU6Y2Fyb3VzZWwgY2Fyb3VzZWx9LiAgTXVzdCBiZSBwbGFjZWQgYXMgYSBjaGlsZCBvZiBhIGNhcm91c2VsIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGFjdGl2ZSBNb2RlbCBiaW5kaW5nLCB3aGV0aGVyIG9yIG5vdCB0aGlzIHNsaWRlIGlzIGN1cnJlbnRseSBhY3RpdmUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyPX0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBzbGlkZS4gVGhlIHNsaWRlcyB3aWxsIGJlIHNvcnRlZCBieSB0aGlzIHBhcmFtZXRlci5cclxuICpcclxuICogQGV4YW1wbGVcclxuPGV4YW1wbGUgbW9kdWxlPVwidWkuYm9vdHN0cmFwXCI+XHJcbiAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cclxuPGRpdiBuZy1jb250cm9sbGVyPVwiQ2Fyb3VzZWxEZW1vQ3RybFwiPlxyXG4gIDxjYXJvdXNlbD5cclxuICAgIDxzbGlkZSBuZy1yZXBlYXQ9XCJzbGlkZSBpbiBzbGlkZXNcIiBhY3RpdmU9XCJzbGlkZS5hY3RpdmVcIiBpbmRleD1cIiRpbmRleFwiPlxyXG4gICAgICA8aW1nIG5nLXNyYz1cInt7c2xpZGUuaW1hZ2V9fVwiIHN0eWxlPVwibWFyZ2luOmF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgPGg0PlNsaWRlIHt7JGluZGV4fX08L2g0PlxyXG4gICAgICAgIDxwPnt7c2xpZGUudGV4dH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2xpZGU+XHJcbiAgPC9jYXJvdXNlbD5cclxuICBJbnRlcnZhbCwgaW4gbWlsbGlzZWNvbmRzOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5nLW1vZGVsPVwibXlJbnRlcnZhbFwiPlxyXG4gIDxiciAvPkVudGVyIGEgbmVnYXRpdmUgbnVtYmVyIHRvIHN0b3AgdGhlIGludGVydmFsLlxyXG48L2Rpdj5cclxuICA8L2ZpbGU+XHJcbiAgPGZpbGUgbmFtZT1cInNjcmlwdC5qc1wiPlxyXG5mdW5jdGlvbiBDYXJvdXNlbERlbW9DdHJsKCRzY29wZSkge1xyXG4gICRzY29wZS5teUludGVydmFsID0gNTAwMDtcclxufVxyXG4gIDwvZmlsZT5cclxuICA8ZmlsZSBuYW1lPVwiZGVtby5jc3NcIj5cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgPC9maWxlPlxyXG48L2V4YW1wbGU+XHJcbiovXHJcblxyXG4vKlxyXG5hcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgnc2xpZGUnLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZTogJ15jYXJvdXNlbCcsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvY2Fyb3VzZWwvc2xpZGUuaHRtbCcsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnPT8nLFxyXG4gICAgICAgICAgICBpbmRleDogJz0/J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY2Fyb3VzZWxDdHJsKSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsQ3RybC5hZGRTbGlkZShzY29wZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIC8vd2hlbiB0aGUgc2NvcGUgaXMgZGVzdHJveWVkIHRoZW4gcmVtb3ZlIHRoZSBzbGlkZSBmcm9tIHRoZSBjdXJyZW50IHNsaWRlcyBhcnJheVxyXG4gICAgICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbEN0cmwucmVtb3ZlU2xpZGUoc2NvcGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnYWN0aXZlJywgZnVuY3Rpb24oYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDdHJsLnNlbGVjdChzY29wZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCdzbGlkZScpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcblxyXG5hcHBEaXJlY3RpdmVzLmFuaW1hdGlvbignLml0ZW0nLCBbXHJcbiAgICAgICAgICAgICAnJGFuaW1hdGUnLFxyXG4gICAgZnVuY3Rpb24gKCRhbmltYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmVmb3JlQWRkQ2xhc3M6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUsIGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIER1ZSB0byB0cmFuc2NsdXNpb24sIG5vVHJhbnNpdGlvbiBwcm9wZXJ0eSBpcyBvbiBwYXJlbnQncyBzY29wZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSAnYWN0aXZlJyAmJiBlbGVtZW50LnBhcmVudCgpICYmXHJcbiAgICAgICAgICAgICAgICAhZWxlbWVudC5wYXJlbnQoKS5zY29wZSgpLm5vVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGVsZW1lbnQuaXNvbGF0ZVNjb3BlKCkuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb25DbGFzcyA9IGRpcmVjdGlvbiA9PSAnbmV4dCcgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3Rpb25DbGFzcykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RvcHBlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhkaXJlY3Rpb25DbGFzcyArICcgJyArIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZWZvcmVSZW1vdmVDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRHVlIHRvIHRyYW5zY2x1c2lvbiwgbm9UcmFuc2l0aW9uIHByb3BlcnR5IGlzIG9uIHBhcmVudCdzIHNjb3BlXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdhY3RpdmUnICYmIGVsZW1lbnQucGFyZW50KCkgJiZcclxuICAgICAgICAgICAgICAgICFlbGVtZW50LnBhcmVudCgpLnNjb3BlKCkubm9UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZWxlbWVudC5pc29sYXRlU2NvcGUoKS5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzID0gZGlyZWN0aW9uID09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aW9uQ2xhc3MpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3BwZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXSk7XHJcbiBcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmFuaW1hdGlvbignLml0ZW0nKSBkZWZpbmVkXCIpO1xyXG59ICAgIFxyXG4qL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QuZGlyZWN0aXZlLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB0ZXN0LmRpcmVjdGl2ZS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gRGVmaW5lIHlvdXIgZGlyZWN0aXZlcyBoZXJlLiBcclxuLy8gRGlyZWN0aXZlcyBjYW4gYmUgYWRkZWQgdG8gc2FtZSBtb2R1bGUgYXMgJ21haW5BcHAnIG9yIGEgc2VwZXJhdGUgbW9kdWxlIGNhbiBiZSBjcmVhdGVkLlxyXG5cclxuYXBwLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1BJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3VzZSBhcyAndGVzdERpcmVjdGl2ZScgYXR0cmlidXRlIGluIEhUTUxcclxuICAgICAgICAvLyBpLmUuIDxkaXYgdGVzdERpcmVjdGl2ZT48L2Rpdj5cclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3REaXJlY3RpdmUtQSBsaW5rZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtQScpIGRlZmluZWRcIik7XHJcbn0gXHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0ZXN0RGlyZWN0aXZlLUMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vdXNlIGFzICd0ZXN0RGlyZWN0aXZlJyBjbGFzcyBpbiBIVE1MXHJcbiAgICAgICAgLy8gaS5lLiA8ZGl2IGNsYXNzPVwidGVzdERpcmVjdGl2ZVwiPjwvZGl2PlxyXG4gICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1DIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1DJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtRScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy91c2UgYXMgJ3Rlc3REaXJlY3RpdmUnIGVsZW1lbnQgaW4gSFRNTFxyXG4gICAgICAgIC8vIGkuZS4gPHRlc3REaXJlY3RpdmU+PC90ZXN0RGlyZWN0aXZlPlxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1FIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1FJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtTScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy91c2UgYXMgJ3Rlc3REaXJlY3RpdmUnIGNvbW1lbnQgaW4gSFRNTFxyXG4gICAgICAgIC8vIGkuZS4gPCEtLSB0ZXN0RGlyZWN0aXZlIC0tPlxyXG4gICAgICAgIHJlc3RyaWN0OiAnTScsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1NIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1NJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3Qtc3VwZXJtYW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPHA+e3twaG90by5pZH19PC9wPlwiXHJcbiAgICAgICAgLy90ZW1wbGF0ZVVSTDogJ3BhcnRpYWxzL3Bob3Rvcy9waG90by50ZXN0Lmh0bWwnXHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdC1zdXBlcm1hbicpIGRlZmluZWRcIik7XHJcbn0gXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3QtZ290SGVyZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJIG1hZGUgaXQgdG8gaGVyZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Rlc3QtZ290SGVyZScpIGRlZmluZWRcIik7XHJcbn0gXHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0ZXN0LWltZ0ZsaXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj57e3Bob3RvLmlkfX08L2Rpdj5cIixcclxuICAgICAgICB0ZW1wbGF0ZVVSTDogJ3BhcnRpYWxzL3Bob3Rvcy9waG90by50ZXN0Lmh0bWwnXHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Rlc3QtaW1nRmxpcCcpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB0ZXN0LmRpcmVjdGl2ZS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogZmlsdGVycy5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBGaWx0ZXJzLmZpbHRlcignbm9OdWxscycsIFxyXG4gICAgZnVuY3Rpb24oUGhvdG9zKSB7XHJcbiAgICBcclxuICAgICAgICB2YXIgZmlsdGVyZWRQaG90b3MgPSBbXTtcclxuICAgICAgICBpZihQaG90b3Mpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8UGhvdG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggUGhvdG9zW2ldLm5hbWUgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUGhvdG9zLnB1c2goUGhvdG9zW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJ2ZpbHRlcmVkUGhvdG9zIGZyb20gbm9OdWxscycgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggZmlsdGVyZWRQaG90b3MgKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQaG90b3M7XHJcbiAgICB9XHJcbik7XHJcblxyXG5hcHBGaWx0ZXJzLmZpbHRlcignaGlsaWdodHMnLCBcclxuICAgIGZ1bmN0aW9uKFBob3Rvcykge1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGZpbHRlcmVkUGhvdG9zID0gW107XHJcbiAgICAgICAgaWYoUGhvdG9zKXtcclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPFBob3Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIFBob3Rvc1tpXS5oaWxpZ2h0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUGhvdG9zLnB1c2goUGhvdG9zW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJ2ZpbHRlcmVkUGhvdG9zIGZyb20gaGlsaWdodHMnICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGZpbHRlcmVkUGhvdG9zICk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUGhvdG9zO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogcGhvdG9zLmZhY3RvcnkuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFJFU1RGVUwgQVBJIHNlcnZpY2VcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ1Bob3RvRmFjdG9yeScsIFtcclxuICAgICAgICAgICAgJyRyZXNvdXJjZScsXHJcbiAgICBmdW5jdGlvbigkcmVzb3VyY2Upe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcy5mYWN0b3J5KFBob3RvRmFjdG9yeSktUkVTVEZVTCBBUEkgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgdmFyIFBob3RvcyA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICRyZXNvdXJjZShwYXRoLCB7fSwge1xyXG4gICAgICAgICAgICBnZXRQaG90b3M6IHttZXRob2Q6J0dFVCcsIHBhcmFtczp7cGhvdG9JZDonUGhvdG8nfSwgaXNBcnJheTp0cnVlfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5dKTsgXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzLmZhY3RvcnkoUGhvdG9GYWN0b3J5KSAtIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBwaG90b3MuZmFjdG9yeS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogcGhvdG9zLnByb3ZpZGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcFNlcnZpY2VzLnNlcnZpY2UoJ1Bob3Rvc1Byb3ZpZGVyJywgW1xyXG4gICAgICAgICAgICAgJyRodHRwJywgJyRxJywgJyRyb290U2NvcGUnLFxyXG4gICAgZnVuY3Rpb24oICRodHRwLCAgICRxLCAgICRyb290U2NvcGUgKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1Bob3Rvc1Byb3ZpZGVyJykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgJGh0dHAuZ2V0KHBhdGgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGhvdG9zID0gZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gcGhvdG9zLnByb3ZpZGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBwaG90b3Muc2VydmljZS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBTZXJ2aWNlcy5zZXJ2aWNlKCdQaG90b3NTZXJ2aWNlJywgW1xyXG4gICAgICAgICAgICAgJyRodHRwJywgJyRzY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHNjb3BlICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVidWc9dHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1Bob3Rvc1NlcnZpY2UnKSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3Bob3Rvcy5qc29uJztcclxuICAgICAgICBcclxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvJyArIHBhdGgpXHJcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnBob3RvcyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGhvdG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXSk7XHJcblxyXG5cclxuYXBwU2VydmljZXMuc2VydmljZSgnUGhvdG9zU2VydmljZVEnLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHEsICAgJHJvb3RTY29wZSApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlYnVnPXRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCdQaG90b3NTZXJ2aWNlUScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJ2pzb24vcGhvdG9zLmpzb24nO1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8kaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvJyArIHBhdGgpXHJcbiAgICAgICAgJGh0dHAuZ2V0KHBhdGgpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQaG90b3MgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5dKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gcGhvdG9zLnNlcnZpY2UuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHBob3Rvcy51dGlscy5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIEEgUkVTVGZ1bCBmYWN0b3J5IGZvciByZXRyaWV2aW5nIHBob3RvcyBmcm9tICdwaG90b3MuanNvbidcclxuYXBwU2VydmljZXMuZmFjdG9yeSgncGhvdG9zVXRpbHNGYWN0b3J5JywgW1xyXG4gICAgICAgICAgICAgJyRodHRwJywgJ3V0aWxzRmFjdG9yeScsIFxyXG4gICAgZnVuY3Rpb24gKCRodHRwLCAgIHV0aWxzRmFjdG9yeSkge1xyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygncGhvdG9zVXRpbHNGYWN0b3J5JykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBob3RvcyA9ICRodHRwLmdldChwYXRoKS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSByZXNwb25zZSBleGVjdXRlZChcIiArIHJlc3AubGVuZ3RoICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvcy5sZW5ndGggLSAoXCIgKyBwaG90b3MubGVuZ3RoICsgXCIpXCIpO1xyXG5cclxuICAgICAgICB2YXIgZmFjdG9yeSA9IHt9O1xyXG5cclxuICAgICAgICBmYWN0b3J5LmFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSBmYWN0b3J5LmFsbCBleGVjdXRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBob3RvcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmYWN0b3J5LmdldCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvc1V0aWxzRmFjdG9yeSAtIGZhY3RvcnkuZ2V0IGV4ZWN1dGVkIGZvciBpZChcIiArIGlkICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvdG9zLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mYWN0b3J5LmZpbmRCeUlkKHBob3RvcywgaWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZhY3RvcnkuY291bnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSBmYWN0b3J5LmNvdW50IGV4ZWN1dGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvdG9zLmxlbmd0aDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmYWN0b3J5Lmxpc3QgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQocGF0aCkuc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSBmYWN0b3J5Lmxpc3QgLSBleGVjdXRlZChcIiArIGRhdGEubGVuZ3RoICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xyXG5cclxuICAgIH1cclxuXSk7IFxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHBob3Rvcy51dGlscy5mYWN0b3J5LmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBzbGlkZXMuc2VydmljZS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBTZXJ2aWNlcy5zZXJ2aWNlKCdTbGlkZVNlcnZpY2UnLCBbXHJcbiAgICAgICAgICAgICAnUGhvdG9zJyxcclxuICAgIGZ1bmN0aW9uKCBQaG90b3MgKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1NsaWRlU2VydmljZScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5JbnRlcnZhbCA9IDUwMDA7XHJcbiAgICAgICAgJHNjb3BlLmNhcm91c2VsSW5kZXggPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgIFwiI2ZjMDAwM1wiLCBcIiNmNzAwMDhcIiwgXCIjZjIwMDBkXCIsIFwiI2VkMDAxMlwiLCBcIiNlODAwMTdcIiwgXHJcbiAgICAgICAgICAgIFwiI2UzMDAxY1wiLCBcIiNkZTAwMjFcIiwgXCIjZDkwMDI2XCIsIFwiI2Q0MDAyYlwiLCBcIiNjZjAwMzBcIiwgXHJcbiAgICAgICAgICAgIFwiI2M5MDAzNlwiLCBcIiNjNDAwM2JcIiwgXCIjYmYwMDQwXCIsIFwiI2JhMDA0NVwiLCBcIiNiNTAwNGFcIiwgXHJcbiAgICAgICAgICAgIFwiI2IwMDA0ZlwiLCBcIiNhYjAwNTRcIiwgXCIjYTYwMDU5XCIsIFwiI2ExMDA1ZVwiLCBcIiM5YzAwNjNcIiwgXHJcbiAgICAgICAgICAgIFwiIzk2MDA2OVwiLCBcIiM5MTAwNmVcIiwgXCIjOGMwMDczXCIsIFwiIzg3MDA3OFwiLCBcIiM4MjAwN2RcIiwgXHJcbiAgICAgICAgICAgIFwiIzdkMDA4MlwiLCBcIiM3ODAwODdcIiwgXCIjNzMwMDhjXCIsIFwiIzZlMDA5MVwiLCBcIiM2OTAwOTZcIiwgXHJcbiAgICAgICAgICAgIFwiIzYzMDA5Y1wiLCBcIiM1ZTAwYTFcIiwgXCIjNTkwMGE2XCIsIFwiIzU0MDBhYlwiLCBcIiM0ZjAwYjBcIiwgXHJcbiAgICAgICAgICAgIFwiIzRhMDBiNVwiLCBcIiM0NTAwYmFcIiwgXCIjNDAwMGJmXCIsIFwiIzNiMDBjNFwiLCBcIiMzNjAwYzlcIiwgXHJcbiAgICAgICAgICAgIFwiIzMwMDBjZlwiLCBcIiMyYjAwZDRcIiwgXCIjMjYwMGQ5XCIsIFwiIzIxMDBkZVwiLCBcIiMxYzAwZTNcIiwgXHJcbiAgICAgICAgICAgIFwiIzE3MDBlOFwiLCBcIiMxMjAwZWRcIiwgXCIjMGQwMGYyXCIsIFwiIzA4MDBmN1wiLCBcIiMwMzAwZmNcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNsaWRlcyA9IF8uZmlsdGVyKFBob3RvcywgZnVuY3Rpb24odmFsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFsnaGlsaWdodCddID09IDE7XHJcbiAgICAgICAgfSk7Ly8gZmlsdGVyIHRoZSBpbWFnZXMgaWRlbnRpZmllZCBhcyBoaWxpZ2h0c1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtjb25zb2xlLmxvZygnc2xpZGVzKCcgKyBzbGlkZXMubGVuZ3RoICsgJyk6Jyk7fVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLnNsaWRlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tpXS5jb2xvciA9IGNvbG9yc1soaSoxMCkgJSBjb2xvcnMubGVuZ3RoXTtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLm9kZCA9IChpICUgMiA9PT0gMCk7XHJcbiAgICAgICAgfSAvLyBBZGQgY29sb3IgYW5kIG9kZFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZSh0YXJnZXQsIHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gdGFyZ2V0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGFyZ2V0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IChpICsgMSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzdHlsZSArICcgc2xpZGUgIycgKyAoaSArIDEpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9sb3JlbXBpeGVsLmNvbS80NTAvMzAwLycgKyBzdHlsZSArICcvJyArICgoaSArIDEpICUgMTApICxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbIChpKjEwKSAlIGNvbG9ycy5sZW5ndGhdLFxyXG4gICAgICAgICAgICAgICAgb2RkOiAoaSAlIDIgPT09IDApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcyh0YXJnZXQsIHF0eSwgc3R5bGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcXR5OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFkZFNsaWRlKHRhcmdldCwgc3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuLypcclxuICAgICAgICB2YXIgbnVtMkFkZCA9IDc7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdhYnN0cmFjdCcpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnY2l0eScpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAncGVvcGxlJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICd0cmFuc3BvcnQnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ2FuaW1hbHMnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ2Zvb2QnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ25hdHVyZScpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnYnVzaW5lc3MnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ25pZ2h0bGlmZScpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnc3BvcnRzJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdmYXNoaW9uJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICd0ZWNobmljcycpO1xyXG4qL1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5nZXRTbGlkZXMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygnU2xpZGVTZXJ2aWNlJykgZ2V0U2xpZGVzIC0gcmV0dXJuaW5nIHNsaWRlcyhcIiArIHNsaWRlcy5sZW5ndGggKyBcIilcIik7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5dKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBwaG90b3Muc2VydmljZS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogdGVzdC5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIERlZmluZSB5b3VyIHNlcnZpY2UgaGVyZS4gU2VydmljZXMgY2FuIGJlIGFkZGVkIHRvIHNhbWUgbW9kdWxlIGFzICdtYWluQXBwJyBvciBhIHNlcGVyYXRlIG1vZHVsZSBjYW4gYmUgY3JlYXRlZC5cclxuXHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ3Rlc3RGYWN0b3J5JywgW2Z1bmN0aW9uICgpIHtcclxuICAgIGlmKGRlYnVnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCd0ZXN0RmFjdG9yeScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcclxuICAgIFxyXG4gICAgc2VydmljZS5kb1dvcmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3RGYWN0b3J5IC0gRGlkIHNvbWUgd29yayAhJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2VydmljZTtcclxuICAgIFxyXG59XSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdGVzdC5mYWN0b3J5LmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB1dGlscy5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vdmFyIHV0aWxTZXJ2aWNlcyA9IGFuZ3VsYXIubW9kdWxlKCd1dGlsU2VydmljZXMnLCBbXSk7XHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ3V0aWxzRmFjdG9yeScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ3V0aWxzRmFjdG9yeScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBVdGlsIGZvciBmaW5kaW5nIGFuIG9iamVjdCBieSBpdHMgJ2lkJyBwcm9wZXJ0eSBhbW9uZyBhbiBhcnJheVxyXG4gICAgICAgICAgICBmaW5kQnlJZDogZnVuY3Rpb24gZmluZEJ5SWQoYSwgaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhW2ldLmlkID09PSBpZCkge3JldHVybiBhW2ldO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gVXRpbCBmb3IgcmV0dXJuaW5nIGEgcmFuZG9tIGtleSBmcm9tIGEgY29sbGVjdGlvbiB0aGF0IGFsc28gaXNuJ3QgdGhlIGN1cnJlbnQga2V5XHJcbiAgICAgICAgICAgIG5ld1JhbmRvbUtleTogZnVuY3Rpb24gbmV3UmFuZG9tS2V5KGNvbGwsIGtleSwgY3VycmVudEtleSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZEtleTtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kS2V5ID0gY29sbFtNYXRoLmZsb29yKGNvbGwubGVuZ3RoICogTWF0aC5yYW5kb20oKSldW2tleV07XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChyYW5kS2V5ID09PSBjdXJyZW50S2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYW5kS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHV0aWxzLmZhY3RvcnkuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB2aWRlb3MuZmFjdG9yeS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUkVTVEZVTCBBUEkgZmFjdG9yeSBzZXJ2aWNlXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hcHBTZXJ2aWNlcy5mYWN0b3J5KCd2aWRlb3NGYWN0b3J5JywgW1xyXG4gICAgICAgICAgICAnJHJlc291cmNlJyxcclxuICAgIGZ1bmN0aW9uKCRyZXNvdXJjZSl7XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcy5mYWN0b3J5KHZpZGVvc0ZhY3RvcnkpLVJFU1RGVUwgQVBJIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJ2pzb24vdmlkZW9zLmpzb24nO1xyXG4gICAgICAgIHZhciBWaWRlb3MgPSBbXTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAkcmVzb3VyY2UocGF0aCwge30sIHtcclxuICAgICAgICAgICAgZ2V0VmlkZW9zOiB7bWV0aG9kOidHRVQnLCBwYXJhbXM6e3ZpZGVvSWQ6J1ZpZGVvJ30sIGlzQXJyYXk6dHJ1ZX1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXSk7IFxyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcy5mYWN0b3J5KHZpZGVvc0ZhY3RvcnkpIC0gZGVmaW5lZFwiKTtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB2aWRlb3MuZmFjdG9yeS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHZpZGVvcy5zZXJ2aWNlLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcFNlcnZpY2VzLnNlcnZpY2UoJ3ZpZGVvc1NlcnZpY2UnLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHEsICAgJHJvb3RTY29wZSApe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ3ZpZGVvc1NlcnZpY2UnKSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3ZpZGVvcy5qc29uJztcclxuICAgICAgICB2YXIgdmlkZW9zU2VydmljZSA9IHRoaXM7XHJcbiAgICAgICAgdmlkZW9zU2VydmljZS52aWRlb0xpc3QgPSB7fTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHRVRcclxuICAgICAgICB2aWRlb3NTZXJ2aWNlLmdldFZpZGVvcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvJyArIHBhdGgpXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB2aWRlb3NTZXJ2aWNlLnZpZGVvTGlzdCA9IHJlcztcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIGlmKGRlYnVnICYmIChyZXMubGVuZ3RoID4gMCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWRlb3NTZXJ2aWNlIC0gVmlkZW9zIGNvbnRhaW5zIFtcIiArIHJlcy5sZW5ndGggKyBcIl0gdmlkZW9zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCd2aWRlb3NTZXJ2aWNlJykgZ2V0VmlkZW9zIC0gZGVmZXJyZWQgcHJvbWlzZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ1JFQVRFXHJcbiAgICAgICAgdmlkZW9zU2VydmljZS5jcmVhdGVWaWRlbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL25ld1ZpZGVvJylcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIHZpZGVvc1NlcnZpY2UudmlkZW9MaXN0ID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERFTEVURVxyXG4gICAgICAgIHZpZGVvc1NlcnZpY2UuZGVsZXRlVmlkZW8gPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2RlbGV0ZVZpZGVvP3ZpZGVvSWQ9JyArIGlkKVxyXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVUERBVEVcclxuICAgICAgICB2aWRlb3NTZXJ2aWNlLnVwZGF0ZVZpZGVvID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICRodHRwLnVwZGF0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy91cGRhdGVWaWRlbz92aWRlb0lkPScgKyBpZClcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvc1NlcnZpY2U7XHJcbiAgICB9XHJcbl0pXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdmlkZW9zLnNlcnZpY2UuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4iLCIvKiBNb2Rlcm5penIgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLXNoaXYtbG9hZC1jc3NjbGFzc2VzLWNhbnZhc3RleHQtY3NzdHJhbnNmb3JtczNkLWZsZXhib3gtY3NzZ3JhZGllbnRzLW9wYWNpdHktaW5kZXhlZERCLWJhY2tncm91bmRzaXplLWJvcmRlcmltYWdlLWJvcmRlcnJhZGl1cy1ib3hzaGFkb3ctY3NzYW5pbWF0aW9ucy1jc3Njb2x1bW5zLWNzc3JlZmxlY3Rpb25zLWNzc3RyYW5zaXRpb25zLWZsZXhib3hsZWdhY3ktcHJlZml4ZWQtY3NzdHJhbnNmb3Jtcy1tcS1oYXNoY2hhbmdlLWRyYWdhbmRkcm9wLWdlbmVyYXRlZGNvbnRlbnQtc3ZnLWlubGluZXN2Zy1zbWlsLXN2Z2NsaXBwYXRocy1pbnB1dC1pbnB1dHR5cGVzLXRvdWNoLWZvbnRmYWNlLXdlYnNvY2tldHMtY29ycy1qc29uLWFwcGxpY2F0aW9uY2FjaGUtYXVkaW8tY2FudmFzLWdlb2xvY2F0aW9uLWhpc3RvcnktaHNsYS1sb2NhbHN0b3JhZ2UtbXVsdGlwbGViZ3MtcG9zdG1lc3NhZ2Utc2Vzc2lvbnN0b3JhZ2UtdGV4dHNoYWRvdy1yZ2JhLXZpZGVvLXdlYmdsLXdlYnNxbGRhdGFiYXNlLXdlYndvcmtlcnNcbiAqL1xuO3dpbmRvdy5Nb2Rlcm5penI9ZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIEEoZSl7Zi5jc3NUZXh0PWV9ZnVuY3Rpb24gTyhlLHQpe3JldHVybiBBKHAuam9pbihlK1wiO1wiKSsodHx8XCJcIikpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4gdHlwZW9mIGU9PT10fWZ1bmN0aW9uIF8oZSx0KXtyZXR1cm4hIX4oXCJcIitlKS5pbmRleE9mKHQpfWZ1bmN0aW9uIEQoZSx0KXtmb3IodmFyIHIgaW4gZSl7dmFyIGk9ZVtyXTtpZighXyhpLFwiLVwiKSYmZltpXSE9PW4pcmV0dXJuIHQ9PVwicGZ4XCI/aTohMH1yZXR1cm4hMX1mdW5jdGlvbiBQKGUsdCxyKXtmb3IodmFyIGkgaW4gZSl7dmFyIHM9dFtlW2ldXTtpZihzIT09bilyZXR1cm4gcj09PSExP2VbaV06TShzLFwiZnVuY3Rpb25cIik/cy5iaW5kKHJ8fHQpOnN9cmV0dXJuITF9ZnVuY3Rpb24gSChlLHQsbil7dmFyIHI9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLGk9KGUrXCIgXCIrdi5qb2luKHIrXCIgXCIpK3IpLnNwbGl0KFwiIFwiKTtyZXR1cm4gTSh0LFwic3RyaW5nXCIpfHxNKHQsXCJ1bmRlZmluZWRcIik/RChpLHQpOihpPShlK1wiIFwiK20uam9pbihyK1wiIFwiKStyKS5zcGxpdChcIiBcIiksUChpLHQsbikpfWZ1bmN0aW9uIEIoKXtpLmlucHV0PWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl3W25bcl1dPW5bcl1pbiBsO3JldHVybiB3Lmxpc3QmJih3Lmxpc3Q9ISF0LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKSYmISFlLkhUTUxEYXRhTGlzdEVsZW1lbnQpLHd9KFwiYXV0b2NvbXBsZXRlIGF1dG9mb2N1cyBsaXN0IHBsYWNlaG9sZGVyIG1heCBtaW4gbXVsdGlwbGUgcGF0dGVybiByZXF1aXJlZCBzdGVwXCIuc3BsaXQoXCIgXCIpKSxpLmlucHV0dHlwZXM9ZnVuY3Rpb24oZSl7Zm9yKHZhciByPTAsaSxzLHUsYT1lLmxlbmd0aDtyPGE7cisrKWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLHM9ZVtyXSksaT1sLnR5cGUhPT1cInRleHRcIixpJiYobC52YWx1ZT1jLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3Zpc2liaWxpdHk6aGlkZGVuO1wiLC9ecmFuZ2UkLy50ZXN0KHMpJiZsLnN0eWxlLldlYmtpdEFwcGVhcmFuY2UhPT1uPyhvLmFwcGVuZENoaWxkKGwpLHU9dC5kZWZhdWx0VmlldyxpPXUuZ2V0Q29tcHV0ZWRTdHlsZSYmdS5nZXRDb21wdXRlZFN0eWxlKGwsbnVsbCkuV2Via2l0QXBwZWFyYW5jZSE9PVwidGV4dGZpZWxkXCImJmwub2Zmc2V0SGVpZ2h0IT09MCxvLnJlbW92ZUNoaWxkKGwpKTovXihzZWFyY2h8dGVsKSQvLnRlc3Qocyl8fCgvXih1cmx8ZW1haWwpJC8udGVzdChzKT9pPWwuY2hlY2tWYWxpZGl0eSYmbC5jaGVja1ZhbGlkaXR5KCk9PT0hMTppPWwudmFsdWUhPWMpKSxiW2Vbcl1dPSEhaTtyZXR1cm4gYn0oXCJzZWFyY2ggdGVsIHVybCBlbWFpbCBkYXRldGltZSBkYXRlIG1vbnRoIHdlZWsgdGltZSBkYXRldGltZS1sb2NhbCBudW1iZXIgcmFuZ2UgY29sb3JcIi5zcGxpdChcIiBcIikpfXZhciByPVwiMi44LjNcIixpPXt9LHM9ITAsbz10LmRvY3VtZW50RWxlbWVudCx1PVwibW9kZXJuaXpyXCIsYT10LmNyZWF0ZUVsZW1lbnQodSksZj1hLnN0eWxlLGw9dC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYz1cIjopXCIsaD17fS50b1N0cmluZyxwPVwiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKSxkPVwiV2Via2l0IE1veiBPIG1zXCIsdj1kLnNwbGl0KFwiIFwiKSxtPWQudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIiksZz17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn0seT17fSxiPXt9LHc9e30sRT1bXSxTPUUuc2xpY2UseCxUPWZ1bmN0aW9uKGUsbixyLGkpe3ZhciBzLGEsZixsLGM9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGg9dC5ib2R5LHA9aHx8dC5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtpZihwYXJzZUludChyLDEwKSl3aGlsZShyLS0pZj10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZi5pZD1pP2lbcl06dSsocisxKSxjLmFwcGVuZENoaWxkKGYpO3JldHVybiBzPVtcIiYjMTczO1wiLCc8c3R5bGUgaWQ9XCJzJyx1LCdcIj4nLGUsXCI8L3N0eWxlPlwiXS5qb2luKFwiXCIpLGMuaWQ9dSwoaD9jOnApLmlubmVySFRNTCs9cyxwLmFwcGVuZENoaWxkKGMpLGh8fChwLnN0eWxlLmJhY2tncm91bmQ9XCJcIixwLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsbD1vLnN0eWxlLm92ZXJmbG93LG8uc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixvLmFwcGVuZENoaWxkKHApKSxhPW4oYyxlKSxoP2MucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKToocC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLG8uc3R5bGUub3ZlcmZsb3c9bCksISFhfSxOPWZ1bmN0aW9uKHQpe3ZhciBuPWUubWF0Y2hNZWRpYXx8ZS5tc01hdGNoTWVkaWE7aWYobilyZXR1cm4gbih0KSYmbih0KS5tYXRjaGVzfHwhMTt2YXIgcjtyZXR1cm4gVChcIkBtZWRpYSBcIit0K1wiIHsgI1wiK3UrXCIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKHQpe3I9KGUuZ2V0Q29tcHV0ZWRTdHlsZT9nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCk6dC5jdXJyZW50U3R5bGUpW1wicG9zaXRpb25cIl09PVwiYWJzb2x1dGVcIn0pLHJ9LEM9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHIsaSl7aT1pfHx0LmNyZWF0ZUVsZW1lbnQoZVtyXXx8XCJkaXZcIikscj1cIm9uXCIrcjt2YXIgcz1yIGluIGk7cmV0dXJuIHN8fChpLnNldEF0dHJpYnV0ZXx8KGk9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxpLnNldEF0dHJpYnV0ZSYmaS5yZW1vdmVBdHRyaWJ1dGUmJihpLnNldEF0dHJpYnV0ZShyLFwiXCIpLHM9TShpW3JdLFwiZnVuY3Rpb25cIiksTShpW3JdLFwidW5kZWZpbmVkXCIpfHwoaVtyXT1uKSxpLnJlbW92ZUF0dHJpYnV0ZShyKSkpLGk9bnVsbCxzfXZhciBlPXtzZWxlY3Q6XCJpbnB1dFwiLGNoYW5nZTpcImlucHV0XCIsc3VibWl0OlwiZm9ybVwiLHJlc2V0OlwiZm9ybVwiLGVycm9yOlwiaW1nXCIsbG9hZDpcImltZ1wiLGFib3J0OlwiaW1nXCJ9O3JldHVybiByfSgpLGs9e30uaGFzT3duUHJvcGVydHksTDshTShrLFwidW5kZWZpbmVkXCIpJiYhTShrLmNhbGwsXCJ1bmRlZmluZWRcIik/TD1mdW5jdGlvbihlLHQpe3JldHVybiBrLmNhbGwoZSx0KX06TD1mdW5jdGlvbihlLHQpe3JldHVybiB0IGluIGUmJk0oZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbdF0sXCJ1bmRlZmluZWRcIil9LEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIHI9Uy5jYWxsKGFyZ3VtZW50cywxKSxpPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGkpe3ZhciBlPWZ1bmN0aW9uKCl7fTtlLnByb3RvdHlwZT1uLnByb3RvdHlwZTt2YXIgcz1uZXcgZSxvPW4uYXBwbHkocyxyLmNvbmNhdChTLmNhbGwoYXJndW1lbnRzKSkpO3JldHVybiBPYmplY3Qobyk9PT1vP286c31yZXR1cm4gbi5hcHBseSh0LHIuY29uY2F0KFMuY2FsbChhcmd1bWVudHMpKSl9O3JldHVybiBpfSkseS5mbGV4Ym94PWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJmbGV4V3JhcFwiKX0seS5mbGV4Ym94bGVnYWN5PWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJib3hEaXJlY3Rpb25cIil9LHkuY2FudmFzPWZ1bmN0aW9uKCl7dmFyIGU9dC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiEhZS5nZXRDb250ZXh0JiYhIWUuZ2V0Q29udGV4dChcIjJkXCIpfSx5LmNhbnZhc3RleHQ9ZnVuY3Rpb24oKXtyZXR1cm4hIWkuY2FudmFzJiYhIU0odC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKS5maWxsVGV4dCxcImZ1bmN0aW9uXCIpfSx5LndlYmdsPWZ1bmN0aW9uKCl7cmV0dXJuISFlLldlYkdMUmVuZGVyaW5nQ29udGV4dH0seS50b3VjaD1mdW5jdGlvbigpe3ZhciBuO3JldHVyblwib250b3VjaHN0YXJ0XCJpbiBlfHxlLkRvY3VtZW50VG91Y2gmJnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoP249ITA6VChbXCJAbWVkaWEgKFwiLHAuam9pbihcInRvdWNoLWVuYWJsZWQpLChcIiksdSxcIilcIixcInsjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fVwiXS5qb2luKFwiXCIpLGZ1bmN0aW9uKGUpe249ZS5vZmZzZXRUb3A9PT05fSksbn0seS5nZW9sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVyblwiZ2VvbG9jYXRpb25cImluIG5hdmlnYXRvcn0seS5wb3N0bWVzc2FnZT1mdW5jdGlvbigpe3JldHVybiEhZS5wb3N0TWVzc2FnZX0seS53ZWJzcWxkYXRhYmFzZT1mdW5jdGlvbigpe3JldHVybiEhZS5vcGVuRGF0YWJhc2V9LHkuaGFzaGNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBDKFwiaGFzaGNoYW5nZVwiLGUpJiYodC5kb2N1bWVudE1vZGU9PT1ufHx0LmRvY3VtZW50TW9kZT43KX0seS5oaXN0b3J5PWZ1bmN0aW9uKCl7cmV0dXJuISFlLmhpc3RvcnkmJiEhaGlzdG9yeS5wdXNoU3RhdGV9LHkuZHJhZ2FuZGRyb3A9ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuXCJkcmFnZ2FibGVcImluIGV8fFwib25kcmFnc3RhcnRcImluIGUmJlwib25kcm9wXCJpbiBlfSx5LndlYnNvY2tldHM9ZnVuY3Rpb24oKXtyZXR1cm5cIldlYlNvY2tldFwiaW4gZXx8XCJNb3pXZWJTb2NrZXRcImluIGV9LHkucmdiYT1mdW5jdGlvbigpe3JldHVybiBBKFwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MCwyNTUsMTUwLC41KVwiKSxfKGYuYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKX0seS5oc2xhPWZ1bmN0aW9uKCl7cmV0dXJuIEEoXCJiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMTIwLDQwJSwxMDAlLC41KVwiKSxfKGYuYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKXx8XyhmLmJhY2tncm91bmRDb2xvcixcImhzbGFcIil9LHkubXVsdGlwbGViZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gQShcImJhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pXCIpLC8odXJsXFxzKlxcKC4qPyl7M30vLnRlc3QoZi5iYWNrZ3JvdW5kKX0seS5iYWNrZ3JvdW5kc2l6ZT1mdW5jdGlvbigpe3JldHVybiBIKFwiYmFja2dyb3VuZFNpemVcIil9LHkuYm9yZGVyaW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImJvcmRlckltYWdlXCIpfSx5LmJvcmRlcnJhZGl1cz1mdW5jdGlvbigpe3JldHVybiBIKFwiYm9yZGVyUmFkaXVzXCIpfSx5LmJveHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBIKFwiYm94U2hhZG93XCIpfSx5LnRleHRzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLnRleHRTaGFkb3c9PT1cIlwifSx5Lm9wYWNpdHk9ZnVuY3Rpb24oKXtyZXR1cm4gTyhcIm9wYWNpdHk6LjU1XCIpLC9eMC41NSQvLnRlc3QoZi5vcGFjaXR5KX0seS5jc3NhbmltYXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJhbmltYXRpb25OYW1lXCIpfSx5LmNzc2NvbHVtbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImNvbHVtbkNvdW50XCIpfSx5LmNzc2dyYWRpZW50cz1mdW5jdGlvbigpe3ZhciBlPVwiYmFja2dyb3VuZC1pbWFnZTpcIix0PVwiZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IGJvdHRvbSxmcm9tKCM5ZjkpLHRvKHdoaXRlKSk7XCIsbj1cImxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwjOWY5LCB3aGl0ZSk7XCI7cmV0dXJuIEEoKGUrXCItd2Via2l0LSBcIi5zcGxpdChcIiBcIikuam9pbih0K2UpK3Auam9pbihuK2UpKS5zbGljZSgwLC1lLmxlbmd0aCkpLF8oZi5iYWNrZ3JvdW5kSW1hZ2UsXCJncmFkaWVudFwiKX0seS5jc3NyZWZsZWN0aW9ucz1mdW5jdGlvbigpe3JldHVybiBIKFwiYm94UmVmbGVjdFwiKX0seS5jc3N0cmFuc2Zvcm1zPWZ1bmN0aW9uKCl7cmV0dXJuISFIKFwidHJhbnNmb3JtXCIpfSx5LmNzc3RyYW5zZm9ybXMzZD1mdW5jdGlvbigpe3ZhciBlPSEhSChcInBlcnNwZWN0aXZlXCIpO3JldHVybiBlJiZcIndlYmtpdFBlcnNwZWN0aXZlXCJpbiBvLnN0eWxlJiZUKFwiQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7I21vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319XCIsZnVuY3Rpb24odCxuKXtlPXQub2Zmc2V0TGVmdD09PTkmJnQub2Zmc2V0SGVpZ2h0PT09M30pLGV9LHkuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSChcInRyYW5zaXRpb25cIil9LHkuZm9udGZhY2U9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gVCgnQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6XCJmb250XCI7c3JjOnVybChcImh0dHBzOi8vXCIpfScsZnVuY3Rpb24obixyKXt2YXIgaT10LmdldEVsZW1lbnRCeUlkKFwic21vZGVybml6clwiKSxzPWkuc2hlZXR8fGkuc3R5bGVTaGVldCxvPXM/cy5jc3NSdWxlcyYmcy5jc3NSdWxlc1swXT9zLmNzc1J1bGVzWzBdLmNzc1RleHQ6cy5jc3NUZXh0fHxcIlwiOlwiXCI7ZT0vc3JjL2kudGVzdChvKSYmby5pbmRleE9mKHIuc3BsaXQoXCIgXCIpWzBdKT09PTB9KSxlfSx5LmdlbmVyYXRlZGNvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gVChbXCIjXCIsdSxcIntmb250OjAvMCBhfSNcIix1LCc6YWZ0ZXJ7Y29udGVudDpcIicsYywnXCI7dmlzaWJpbGl0eTpoaWRkZW47Zm9udDozcHgvMSBhfSddLmpvaW4oXCJcIiksZnVuY3Rpb24odCl7ZT10Lm9mZnNldEhlaWdodD49M30pLGV9LHkudmlkZW89ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSxuPSExO3RyeXtpZihuPSEhZS5jYW5QbGF5VHlwZSluPW5ldyBCb29sZWFuKG4pLG4ub2dnPWUuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLmgyNjQ9ZS5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksbi53ZWJtPWUuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKX1jYXRjaChyKXt9cmV0dXJuIG59LHkuYXVkaW89ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSxuPSExO3RyeXtpZihuPSEhZS5jYW5QbGF5VHlwZSluPW5ldyBCb29sZWFuKG4pLG4ub2dnPWUuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLm1wMz1lLmNhblBsYXlUeXBlKFwiYXVkaW8vbXBlZztcIikucmVwbGFjZSgvXm5vJC8sXCJcIiksbi53YXY9ZS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLm00YT0oZS5jYW5QbGF5VHlwZShcImF1ZGlvL3gtbTRhO1wiKXx8ZS5jYW5QbGF5VHlwZShcImF1ZGlvL2FhYztcIikpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKHIpe31yZXR1cm4gbn0seS5sb2NhbHN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHUsdSksbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fSx5LnNlc3Npb25zdG9yYWdlPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHUsdSksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh1KSwhMH1jYXRjaChlKXtyZXR1cm4hMX19LHkud2Vid29ya2Vycz1mdW5jdGlvbigpe3JldHVybiEhZS5Xb3JrZXJ9LHkuYXBwbGljYXRpb25jYWNoZT1mdW5jdGlvbigpe3JldHVybiEhZS5hcHBsaWNhdGlvbkNhY2hlfSx5LnN2Zz1mdW5jdGlvbigpe3JldHVybiEhdC5jcmVhdGVFbGVtZW50TlMmJiEhdC5jcmVhdGVFbGVtZW50TlMoZy5zdmcsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdH0seS5pbmxpbmVzdmc9ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsKGUuZmlyc3RDaGlsZCYmZS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSk9PWcuc3ZnfSx5LnNtaWw9ZnVuY3Rpb24oKXtyZXR1cm4hIXQuY3JlYXRlRWxlbWVudE5TJiYvU1ZHQW5pbWF0ZS8udGVzdChoLmNhbGwodC5jcmVhdGVFbGVtZW50TlMoZy5zdmcsXCJhbmltYXRlXCIpKSl9LHkuc3ZnY2xpcHBhdGhzPWZ1bmN0aW9uKCl7cmV0dXJuISF0LmNyZWF0ZUVsZW1lbnROUyYmL1NWR0NsaXBQYXRoLy50ZXN0KGguY2FsbCh0LmNyZWF0ZUVsZW1lbnROUyhnLnN2ZyxcImNsaXBQYXRoXCIpKSl9O2Zvcih2YXIgaiBpbiB5KUwoeSxqKSYmKHg9ai50b0xvd2VyQ2FzZSgpLGlbeF09eVtqXSgpLEUucHVzaCgoaVt4XT9cIlwiOlwibm8tXCIpK3gpKTtyZXR1cm4gaS5pbnB1dHx8QigpLGkuYWRkVGVzdD1mdW5jdGlvbihlLHQpe2lmKHR5cGVvZiBlPT1cIm9iamVjdFwiKWZvcih2YXIgciBpbiBlKUwoZSxyKSYmaS5hZGRUZXN0KHIsZVtyXSk7ZWxzZXtlPWUudG9Mb3dlckNhc2UoKTtpZihpW2VdIT09bilyZXR1cm4gaTt0PXR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dCgpOnQsdHlwZW9mIHMhPVwidW5kZWZpbmVkXCImJnMmJihvLmNsYXNzTmFtZSs9XCIgXCIrKHQ/XCJcIjpcIm5vLVwiKStlKSxpW2VdPXR9cmV0dXJuIGl9LEEoXCJcIiksYT1sPW51bGwsZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBjKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwicFwiKSxyPWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxlLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gbi5pbm5lckhUTUw9XCJ4PHN0eWxlPlwiK3QrXCI8L3N0eWxlPlwiLHIuaW5zZXJ0QmVmb3JlKG4ubGFzdENoaWxkLHIuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gaCgpe3ZhciBlPXkuZWxlbWVudHM7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP2Uuc3BsaXQoXCIgXCIpOmV9ZnVuY3Rpb24gcChlKXt2YXIgdD1mW2VbdV1dO3JldHVybiB0fHwodD17fSxhKyssZVt1XT1hLGZbYV09dCksdH1mdW5jdGlvbiBkKGUsbixyKXtufHwobj10KTtpZihsKXJldHVybiBuLmNyZWF0ZUVsZW1lbnQoZSk7cnx8KHI9cChuKSk7dmFyIG87cmV0dXJuIHIuY2FjaGVbZV0/bz1yLmNhY2hlW2VdLmNsb25lTm9kZSgpOnMudGVzdChlKT9vPShyLmNhY2hlW2VdPXIuY3JlYXRlRWxlbShlKSkuY2xvbmVOb2RlKCk6bz1yLmNyZWF0ZUVsZW0oZSksby5jYW5IYXZlQ2hpbGRyZW4mJiFpLnRlc3QoZSkmJiFvLnRhZ1Vybj9yLmZyYWcuYXBwZW5kQ2hpbGQobyk6b31mdW5jdGlvbiB2KGUsbil7ZXx8KGU9dCk7aWYobClyZXR1cm4gZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7bj1ufHxwKGUpO3ZhciByPW4uZnJhZy5jbG9uZU5vZGUoKSxpPTAscz1oKCksbz1zLmxlbmd0aDtmb3IoO2k8bztpKyspci5jcmVhdGVFbGVtZW50KHNbaV0pO3JldHVybiByfWZ1bmN0aW9uIG0oZSx0KXt0LmNhY2hlfHwodC5jYWNoZT17fSx0LmNyZWF0ZUVsZW09ZS5jcmVhdGVFbGVtZW50LHQuY3JlYXRlRnJhZz1lLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsdC5mcmFnPXQuY3JlYXRlRnJhZygpKSxlLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24obil7cmV0dXJuIHkuc2hpdk1ldGhvZHM/ZChuLGUsdCk6dC5jcmVhdGVFbGVtKG4pfSxlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXCJoLGZcIixcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFwiK2goKS5qb2luKCkucmVwbGFjZSgvW1xcd1xcLV0rL2csZnVuY3Rpb24oZSl7cmV0dXJuIHQuY3JlYXRlRWxlbShlKSx0LmZyYWcuY3JlYXRlRWxlbWVudChlKSwnYyhcIicrZSsnXCIpJ30pK1wiKTtyZXR1cm4gbn1cIikoeSx0LmZyYWcpfWZ1bmN0aW9uIGcoZSl7ZXx8KGU9dCk7dmFyIG49cChlKTtyZXR1cm4geS5zaGl2Q1NTJiYhbyYmIW4uaGFzQ1NTJiYobi5oYXNDU1M9ISFjKGUsXCJhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9bWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9XCIpKSxsfHxtKGUsbiksZX12YXIgbj1cIjMuNy4wXCIscj1lLmh0bWw1fHx7fSxpPS9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pLHM9L14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pLG8sdT1cIl9odG1sNXNoaXZcIixhPTAsZj17fSxsOyhmdW5jdGlvbigpe3RyeXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2UuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixvPVwiaGlkZGVuXCJpbiBlLGw9ZS5jaGlsZE5vZGVzLmxlbmd0aD09MXx8ZnVuY3Rpb24oKXt0LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBlPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0eXBlb2YgZS5jbG9uZU5vZGU9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBlLmNyZWF0ZUVsZW1lbnQ9PVwidW5kZWZpbmVkXCJ9KCl9Y2F0Y2gobil7bz0hMCxsPSEwfX0pKCk7dmFyIHk9e2VsZW1lbnRzOnIuZWxlbWVudHN8fFwiYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlb1wiLHZlcnNpb246bixzaGl2Q1NTOnIuc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmwsc2hpdk1ldGhvZHM6ci5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XCJkZWZhdWx0XCIsc2hpdkRvY3VtZW50OmcsY3JlYXRlRWxlbWVudDpkLGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6dn07ZS5odG1sNT15LGcodCl9KHRoaXMsdCksaS5fdmVyc2lvbj1yLGkuX3ByZWZpeGVzPXAsaS5fZG9tUHJlZml4ZXM9bSxpLl9jc3NvbVByZWZpeGVzPXYsaS5tcT1OLGkuaGFzRXZlbnQ9QyxpLnRlc3RQcm9wPWZ1bmN0aW9uKGUpe3JldHVybiBEKFtlXSl9LGkudGVzdEFsbFByb3BzPUgsaS50ZXN0U3R5bGVzPVQsaS5wcmVmaXhlZD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHQ/SChlLHQsbik6SChlLFwicGZ4XCIpfSxvLmNsYXNzTmFtZT1vLmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLyxcIiQxJDJcIikrKHM/XCIganMgXCIrRS5qb2luKFwiIFwiKTpcIlwiKSxpfSh0aGlzLHRoaXMuZG9jdW1lbnQpLGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09ZC5jYWxsKGUpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9ZnVuY3Rpb24gcygpe31mdW5jdGlvbiBvKGUpe3JldHVybiFlfHxcImxvYWRlZFwiPT1lfHxcImNvbXBsZXRlXCI9PWV8fFwidW5pbml0aWFsaXplZFwiPT1lfWZ1bmN0aW9uIHUoKXt2YXIgZT12LnNoaWZ0KCk7bT0xLGU/ZS50P2goZnVuY3Rpb24oKXsoXCJjXCI9PWUudD9rLmluamVjdENzczprLmluamVjdEpzKShlLnMsMCxlLmEsZS54LGUuZSwxKX0sMCk6KGUoKSx1KCkpOm09MH1mdW5jdGlvbiBhKGUsbixyLGkscyxhLGYpe2Z1bmN0aW9uIGwodCl7aWYoIWQmJm8oYy5yZWFkeVN0YXRlKSYmKHcucj1kPTEsIW0mJnUoKSxjLm9ubG9hZD1jLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQpKXtcImltZ1wiIT1lJiZoKGZ1bmN0aW9uKCl7Yi5yZW1vdmVDaGlsZChjKX0sNTApO2Zvcih2YXIgciBpbiBUW25dKVRbbl0uaGFzT3duUHJvcGVydHkocikmJlRbbl1bcl0ub25sb2FkKCl9fXZhciBmPWZ8fGsuZXJyb3JUaW1lb3V0LGM9dC5jcmVhdGVFbGVtZW50KGUpLGQ9MCxnPTAsdz17dDpyLHM6bixlOnMsYTphLHg6Zn07MT09PVRbbl0mJihnPTEsVFtuXT1bXSksXCJvYmplY3RcIj09ZT9jLmRhdGE9bjooYy5zcmM9bixjLnR5cGU9ZSksYy53aWR0aD1jLmhlaWdodD1cIjBcIixjLm9uZXJyb3I9Yy5vbmxvYWQ9Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtsLmNhbGwodGhpcyxnKX0sdi5zcGxpY2UoaSwwLHcpLFwiaW1nXCIhPWUmJihnfHwyPT09VFtuXT8oYi5pbnNlcnRCZWZvcmUoYyx5P251bGw6cCksaChsLGYpKTpUW25dLnB1c2goYykpfWZ1bmN0aW9uIGYoZSx0LG4scixzKXtyZXR1cm4gbT0wLHQ9dHx8XCJqXCIsaShlKT9hKFwiY1wiPT10P0U6dyxlLHQsdGhpcy5pKyssbixyLHMpOih2LnNwbGljZSh0aGlzLmkrKywwLGUpLDE9PXYubGVuZ3RoJiZ1KCkpLHRoaXN9ZnVuY3Rpb24gbCgpe3ZhciBlPWs7cmV0dXJuIGUubG9hZGVyPXtsb2FkOmYsaTowfSxlfXZhciBjPXQuZG9jdW1lbnRFbGVtZW50LGg9ZS5zZXRUaW1lb3V0LHA9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxkPXt9LnRvU3RyaW5nLHY9W10sbT0wLGc9XCJNb3pBcHBlYXJhbmNlXCJpbiBjLnN0eWxlLHk9ZyYmISF0LmNyZWF0ZVJhbmdlKCkuY29tcGFyZU5vZGUsYj15P2M6cC5wYXJlbnROb2RlLGM9ZS5vcGVyYSYmXCJbb2JqZWN0IE9wZXJhXVwiPT1kLmNhbGwoZS5vcGVyYSksYz0hIXQuYXR0YWNoRXZlbnQmJiFjLHc9Zz9cIm9iamVjdFwiOmM/XCJzY3JpcHRcIjpcImltZ1wiLEU9Yz9cInNjcmlwdFwiOncsUz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PWQuY2FsbChlKX0seD1bXSxUPXt9LE49e3RpbWVvdXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5sZW5ndGgmJihlLnRpbWVvdXQ9dFswXSksZX19LEMsaztrPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7dmFyIGU9ZS5zcGxpdChcIiFcIiksdD14Lmxlbmd0aCxuPWUucG9wKCkscj1lLmxlbmd0aCxuPXt1cmw6bixvcmlnVXJsOm4scHJlZml4ZXM6ZX0saSxzLG87Zm9yKHM9MDtzPHI7cysrKW89ZVtzXS5zcGxpdChcIj1cIiksKGk9TltvLnNoaWZ0KCldKSYmKG49aShuLG8pKTtmb3Iocz0wO3M8dDtzKyspbj14W3NdKG4pO3JldHVybiBufWZ1bmN0aW9uIG8oZSxpLHMsbyx1KXt2YXIgYT10KGUpLGY9YS5hdXRvQ2FsbGJhY2s7YS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpLGEuYnlwYXNzfHwoaSYmKGk9cihpKT9pOmlbZV18fGlbb118fGlbZS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSksYS5pbnN0ZWFkP2EuaW5zdGVhZChlLGkscyxvLHUpOihUW2EudXJsXT9hLm5vZXhlYz0hMDpUW2EudXJsXT0xLHMubG9hZChhLnVybCxhLmZvcmNlQ1NTfHwhYS5mb3JjZUpTJiZcImNzc1wiPT1hLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCk/XCJjXCI6bixhLm5vZXhlYyxhLmF0dHJzLGEudGltZW91dCksKHIoaSl8fHIoZikpJiZzLmxvYWQoZnVuY3Rpb24oKXtsKCksaSYmaShhLm9yaWdVcmwsdSxvKSxmJiZmKGEub3JpZ1VybCx1LG8pLFRbYS51cmxdPTJ9KSkpfWZ1bmN0aW9uIHUoZSx0KXtmdW5jdGlvbiBuKGUsbil7aWYoZSl7aWYoaShlKSlufHwoZj1mdW5jdGlvbigpe3ZhciBlPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtsLmFwcGx5KHRoaXMsZSksYygpfSksbyhlLGYsdCwwLHUpO2Vsc2UgaWYoT2JqZWN0KGUpPT09ZSlmb3IocCBpbiBoPWZ1bmN0aW9uKCl7dmFyIHQ9MCxuO2ZvcihuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmdCsrO3JldHVybiB0fSgpLGUpZS5oYXNPd25Qcm9wZXJ0eShwKSYmKCFuJiYhLS1oJiYocihmKT9mPWZ1bmN0aW9uKCl7dmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2wuYXBwbHkodGhpcyxlKSxjKCl9OmZbcF09ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2UmJmUuYXBwbHkodGhpcyx0KSxjKCl9fShsW3BdKSksbyhlW3BdLGYsdCxwLHUpKX1lbHNlIW4mJmMoKX12YXIgdT0hIWUudGVzdCxhPWUubG9hZHx8ZS5ib3RoLGY9ZS5jYWxsYmFja3x8cyxsPWYsYz1lLmNvbXBsZXRlfHxzLGgscDtuKHU/ZS55ZXA6ZS5ub3BlLCEhYSksYSYmbihhKX12YXIgYSxmLGM9dGhpcy55ZXBub3BlLmxvYWRlcjtpZihpKGUpKW8oZSwwLGMsMCk7ZWxzZSBpZihTKGUpKWZvcihhPTA7YTxlLmxlbmd0aDthKyspZj1lW2FdLGkoZik/byhmLDAsYywwKTpTKGYpP2soZik6T2JqZWN0KGYpPT09ZiYmdShmLGMpO2Vsc2UgT2JqZWN0KGUpPT09ZSYmdShlLGMpfSxrLmFkZFByZWZpeD1mdW5jdGlvbihlLHQpe05bZV09dH0say5hZGRGaWx0ZXI9ZnVuY3Rpb24oZSl7eC5wdXNoKGUpfSxrLmVycm9yVGltZW91dD0xZTQsbnVsbD09dC5yZWFkeVN0YXRlJiZ0LmFkZEV2ZW50TGlzdGVuZXImJih0LnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsdC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEM9ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQywwKSx0LnJlYWR5U3RhdGU9XCJjb21wbGV0ZVwifSwwKSksZS55ZXBub3BlPWwoKSxlLnllcG5vcGUuZXhlY3V0ZVN0YWNrPXUsZS55ZXBub3BlLmluamVjdEpzPWZ1bmN0aW9uKGUsbixyLGksYSxmKXt2YXIgbD10LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYyxkLGk9aXx8ay5lcnJvclRpbWVvdXQ7bC5zcmM9ZTtmb3IoZCBpbiByKWwuc2V0QXR0cmlidXRlKGQscltkXSk7bj1mP3U6bnx8cyxsLm9ucmVhZHlzdGF0ZWNoYW5nZT1sLm9ubG9hZD1mdW5jdGlvbigpeyFjJiZvKGwucmVhZHlTdGF0ZSkmJihjPTEsbigpLGwub25sb2FkPWwub25yZWFkeXN0YXRlY2hhbmdlPW51bGwpfSxoKGZ1bmN0aW9uKCl7Y3x8KGM9MSxuKDEpKX0saSksYT9sLm9ubG9hZCgpOnAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobCxwKX0sZS55ZXBub3BlLmluamVjdENzcz1mdW5jdGlvbihlLG4scixpLG8sYSl7dmFyIGk9dC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxmLG49YT91Om58fHM7aS5ocmVmPWUsaS5yZWw9XCJzdHlsZXNoZWV0XCIsaS50eXBlPVwidGV4dC9jc3NcIjtmb3IoZiBpbiByKWkuc2V0QXR0cmlidXRlKGYscltmXSk7b3x8KHAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaSxwKSxoKG4sMCkpfX0odGhpcyxkb2N1bWVudCksTW9kZXJuaXpyLmxvYWQ9ZnVuY3Rpb24oKXt5ZXBub3BlLmFwcGx5KHdpbmRvdyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSl9LE1vZGVybml6ci5hZGRUZXN0KFwiY29yc1wiLCEhKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIG5ldyBYTUxIdHRwUmVxdWVzdCkpLE1vZGVybml6ci5hZGRUZXN0KFwianNvblwiLCEhd2luZG93LkpTT04mJiEhSlNPTi5wYXJzZSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9