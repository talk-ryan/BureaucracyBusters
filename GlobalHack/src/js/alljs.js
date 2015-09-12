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

app.run(
    [            '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            /* It's very handy to add references to $state and $stateParams to the $rootScope
            ** so that you can access them from any scope within your applications.
            ** For example, <li ng-class="{ active: $state.includes('contacts.list') }"> will
            ** set the <li> to active whenever 'contacts.list' or one of its decendents is active.
            */
            
            $rootScope.state = $state;
            $rootScope.stateParams = $stateParams;

            $rootScope.pageLoaded = true;
            
            //$rootScope.endPoint = "http://localhost:3000";
            $rootScope.endPoint = "http://192.168.137.196:3000";

            $rootScope.clearmenuclass = true;

        }
    ]
);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImJvb3RzdHJhcC5taW4uanMiLCJodG1sNXNoaXYuanMiLCJqcXVlcnkuZml0dGV4dC5qcyIsImpxdWVyeS5qcyIsImpxdWVyeS5rbm9iLmpzIiwianF1ZXJ5Lm5hdi5qcyIsImpxdWVyeS52ZWdhcy5taW4uanMiLCJtaXNjLmpzIiwib3dsLmNhcm91c2VsLm1pbi5qcyIsInJlc3BvbmQubWluLmpzIiwic2NyaXB0LmpzIiwic2NyaXB0LnJlc3BvbnNpdmUuanMiLCJzY3JvbGxSZXZlYWwuanMiLCJzbW9vdGhzY3JvbGwuanMiLCJ3b3cubWluLmpzIiwiemVyaWYuanMiLCJjb250cm9sbGVycy9hYm91dC5jb250cm9sbGVyLmpzIiwiY29udHJvbGxlcnMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsImNvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlci5qcyIsImNvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiLCJkaXJlY3RpdmVzL2RpcmVjdGl2ZXMuanMiLCJkaXJlY3RpdmVzL3Rlc3QuZGlyZWN0aXZlcy5qcyIsImZpbHRlcnMvZmlsdGVycy5qcyIsInNlcnZpY2VzL3Bob3Rvcy5mYWN0b3J5LmpzIiwic2VydmljZXMvcGhvdG9zLnByb3ZpZGVyLmpzIiwic2VydmljZXMvcGhvdG9zLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9waG90b3MudXRpbHMuZmFjdG9yeS5qcyIsInNlcnZpY2VzL3NsaWRlcy5zZXJ2aWNlLmpzIiwic2VydmljZXMvdGVzdC5mYWN0b3J5LmpzIiwic2VydmljZXMvdXRpbHMuZmFjdG9yeS5qcyIsInNlcnZpY2VzL3ZpZGVvcy5mYWN0b3J5LmpzIiwic2VydmljZXMvdmlkZW9zLnNlcnZpY2UuanMiLCJ2ZW5kb3IvbW9kZXJuaXpyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1dkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RQQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4K0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvU0E7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDclFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hHQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGxqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGFwcC5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgZGVidWcgPSB0cnVlO1xyXG5cclxuLy8gTWFpbiBjb25maWd1cmF0aW9uIGZpbGUuIFNldHMgdXAgQW5ndWxhckpTIG1vZHVsZSBhbmQgcm91dGVzIGFuZCBhbnkgb3RoZXIgY29uZmlnIG9iamVjdHNcclxuLy8gQ29uZmlndXJhdGlvbiB3aXRoIHVpLXJvdXRlciBpbnN0ZWFkIG9mIG5nLXJvdXRlLlxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcclxuICAgICduZ0FuaW1hdGUnLFxyXG4gICAgJ25nUmVzb3VyY2UnLFxyXG4gICAgJ25nVG91Y2gnLFxyXG4gICAgJ3VpJyxcclxuICAgICd1aS5ib290c3RyYXAnLFxyXG4gICAgJ3VpLmJvb3RzdHJhcC5jYXJvdXNlbCcsXHJcbiAgICAndWkuY2FsZW5kYXInLFxyXG4gICAgJ3VpLmdyaWQnLFxyXG4gICAgJ3VpLmdyaWQuY2VsbE5hdicsXHJcbiAgICAndWkuZ3JpZC5lZGl0JyxcclxuICAgICd1aS5ncmlkLnJlc2l6ZUNvbHVtbnMnLFxyXG4gICAgJ3VpLmdyaWQucGlubmluZycsXHJcbiAgICAndWkuZ3JpZC5zZWxlY3Rpb24nLFxyXG4gICAgJ3VpLmdyaWQubW92ZUNvbHVtbnMnLFxyXG4gICAgJ3VpLmdyaWQuZXhwb3J0ZXInLFxyXG4gICAgJ3VpLmdyaWQuaW1wb3J0ZXInLFxyXG4gICAgJ3VpLmdyaWQuZ3JvdXBpbmcnLFxyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAndWkuc29ydGFibGUnLFxyXG4gICAgJ2FwcC5jb250cm9sbGVycycsXHJcbiAgICAnYXBwLmZpbHRlcnMnLFxyXG4gICAgJ2FwcC5kaXJlY3RpdmVzJyxcclxuICAgICdhcHAuc2VydmljZXMnXHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhbmd1bGFyLm1vZHVsZShhcHApIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbnZhciBhcHBDb250cm9sbGVycyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSk7ICAgICAvL0RlZmluZSB0aGUgY29udHJvbGxlcnMgbW9kdWxlXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKSBkZWZpbmVkXCIpO1xyXG59XHJcbnZhciBhcHBGaWx0ZXJzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5maWx0ZXJzJywgW10pOyAgICAgLy9EZWZpbmUgdGhlIGNvbnRyb2xsZXJzIG1vZHVsZVxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFuZ3VsYXIubW9kdWxlKCdhcHAuZmlsdGVycycsIFtdKSBkZWZpbmVkXCIpO1xyXG59XHJcbnZhciBhcHBEaXJlY3RpdmVzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pOyAgICAgLy9EZWZpbmUgdGhlIGRpcmVjdGl2ZSBtb2R1bGVcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSkgZGVmaW5lZFwiKTtcclxufVxyXG52YXIgYXBwU2VydmljZXMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW1xyXG4gICAgJ25nUmVzb3VyY2UnXHJcbiAgICBdKTsgICAgIC8vRGVmaW5lIHRoZSBzZXJ2aWNlcyBtb2R1bGVcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgWyduZ1Jlc291cmNlJ10pIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbmFwcC5ydW4oXHJcbiAgICBbICAgICAgICAgICAgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRyb290U2NvcGUsICAgJHN0YXRlLCAgICRzdGF0ZVBhcmFtcykge1xyXG4gICAgICAgICAgICAvKiBJdCdzIHZlcnkgaGFuZHkgdG8gYWRkIHJlZmVyZW5jZXMgdG8gJHN0YXRlIGFuZCAkc3RhdGVQYXJhbXMgdG8gdGhlICRyb290U2NvcGVcclxuICAgICAgICAgICAgKiogc28gdGhhdCB5b3UgY2FuIGFjY2VzcyB0aGVtIGZyb20gYW55IHNjb3BlIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9ucy5cclxuICAgICAgICAgICAgKiogRm9yIGV4YW1wbGUsIDxsaSBuZy1jbGFzcz1cInsgYWN0aXZlOiAkc3RhdGUuaW5jbHVkZXMoJ2NvbnRhY3RzLmxpc3QnKSB9XCI+IHdpbGxcclxuICAgICAgICAgICAgKiogc2V0IHRoZSA8bGk+IHRvIGFjdGl2ZSB3aGVuZXZlciAnY29udGFjdHMubGlzdCcgb3Igb25lIG9mIGl0cyBkZWNlbmRlbnRzIGlzIGFjdGl2ZS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICRyb290U2NvcGUuc3RhdGUgPSAkc3RhdGU7XHJcbiAgICAgICAgICAgICRyb290U2NvcGUuc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XHJcblxyXG4gICAgICAgICAgICAkcm9vdFNjb3BlLnBhZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8kcm9vdFNjb3BlLmVuZFBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS5lbmRQb2ludCA9IFwiaHR0cDovLzE5Mi4xNjguMTM3LjE5NjozMDAwXCI7XHJcblxyXG4gICAgICAgICAgICAkcm9vdFNjb3BlLmNsZWFybWVudWNsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4pO1xyXG5cclxuYXBwLmNvbmZpZyggWyckdXJsUm91dGVyUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInLFxyXG4gICAgZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgICAkc3RhdGVQcm92aWRlcikge1xyXG4gICAgXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG5cclxuICAgIC8vIHVybCAtIG1hdGNoZXMgdGhlIHVpLXNyZWYgb24gdGhlIGluZGV4Lmh0bWwgcGFnZVxyXG4gICAgLy8gdGVtcGxhdGVVcmwgLSBtYXRjaGVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGFydGlhbCBodG1sIGZpbGVcclxuICAgIC8vIGNvbnRyb2xsZXIgLSBtYXRjaGVzIHRoZSBuYW1lIG9mIHRoZSBjb250cm9sbGVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBhZ2VcclxuICAgIC8vIHNlcnZpY2UgLSBpZGVudGlmaWVzIHRoZSBzZXJ2aWNlIHVzZWQgdG8gZ2V0IHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhpcyBwYWdlLlxyXG4gICAgLy9cclxuICAgIC8vIFRvIGJlIGRpc3BsYXllZCBvbiBtYWluIHNjcmVlbjpcclxuICAgIC8vICRzdGF0ZSAgICAgICAgICA9IHt7ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfX1cclxuICAgIC8vICRzdGF0ZVBhcmFtcyAgICA9IHt7ICRzdGF0ZVBhcmFtcyB9fVxyXG4gICAgLy8gJHN0YXRlIGZ1bGwgdXJsID0ge3sgJHN0YXRlLiRjdXJyZW50LnVybC5zb3VyY2UgfX1cclxuICAgIC8vICRzdGF0ZVByb3ZpZGVyICA9IHt7ICRzdGF0ZVByb3ZpZGVyIH19XHJcbiAgICBcclxuICAgIC8qIEhvbWUgKi9cclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICBjbGVhcm1lbnVjbGFzczogdHJ1ZSxcclxuICAgICAgICBjb250cm9sbGVyOiAnaG9tZUNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUvaG9tZS5odG1sJyxcclxuICAgICAgICB1cmw6ICcvaG9tZSdcclxuICAgIH0pXHJcblxyXG4gICAgLnN0YXRlKCdhYm91dCcsIHtcclxuICAgICAgICBjb250cm9sbGVyOiAnYWJvdXRDb250cm9sbGVyJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hYm91dC9hYm91dC5odG1sJyxcclxuICAgICAgICB1cmw6ICcvYWJvdXQnXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvKiBSZWdpc3RlciAqL1xyXG4gICAgLnN0YXRlKCdyZWdpc3RlcicsIHtcclxuICAgICAgICBjb250cm9sbGVyOiAndXNlckNvbnRyb2xsZXInLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FjY291bnQvcmVnaXN0ZXIuaHRtbCcsXHJcbiAgICAgICAgdXJsOiBcIi9yZWdpc3RlclwiXHJcbiAgICB9KVxyXG5cclxuICAgLyogTG9naW4gKi9cclxuICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgY29udHJvbGxlcjogJ3VzZXJDb250cm9sbGVyJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hY2NvdW50L2xvZ2luLmh0bWwnLFxyXG4gICAgICAgIHVybDogXCIvbG9naW5cIlxyXG4gICAgfSlcclxuXHJcbiAgIC8qIExvZ291dCAqL1xyXG4gICAgLnN0YXRlKCdsb2dvdXQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWNjb3VudC9sb2dvdXQuaHRtbCcsXHJcbiAgICAgICAgdXJsOiBcIi9sb2dvdXRcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiogVGhlIGB3aGVuYCBtZXRob2Qgc2F5cyBpZiB0aGUgdXJsIGlzIGV2ZXIgdGhlIDFzdCBwYXJhbSwgdGhlbiByZWRpcmVjdCB0byB0aGUgMm5kIHBhcmFtXHJcbiAgICAgICAgKiogSGVyZSB3ZSBhcmUganVzdCBzZXR0aW5nIHVwIHNvbWUgY29udmVuaWVuY2UgdXJscy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIC53aGVuKCcvYz9pZCcsICcvdGVtcGxhdGVzL2NvbnRhY3RzLzppZCcpXHJcbiAgICAgICAgLndoZW4oJy91c2VyLzppZCcsICcvdGVtcGxhdGVzL2NvbnRhY3RzLzppZCcpXHJcblxyXG4gICAgICAgIC5vdGhlcndpc2UoJy9ob21lJyk7XHJcblxyXG5cclxuXHJcbn1dKTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhci5jb25maWcoWyckdXJsUm91dGVyUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInXSkgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCBcIndlYnNpdGUgaXMgbm93IHJlYWR5IHRvIGJlIGRpc3BsYXllZCFcIiApO1xyXG4gICAgJCggXCIjc3RhdGVEaXNwbGF5XCIgKS5jc3MoIFwidmlzaWJsZVwiLCBcInRydWVcIiApO1xyXG59KTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gYXBwLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiFcclxuICogQm9vdHN0cmFwIHYzLjMuNSAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXHJcbiAqIENvcHlyaWdodCAyMDExLTIwMTUgVHdpdHRlciwgSW5jLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnlcIik7K2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPWEuZm4uanF1ZXJ5LnNwbGl0KFwiIFwiKVswXS5zcGxpdChcIi5cIik7aWYoYlswXTwyJiZiWzFdPDl8fDE9PWJbMF0mJjk9PWJbMV0mJmJbMl08MSl0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeSB2ZXJzaW9uIDEuOS4xIG9yIGhpZ2hlclwiKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib290c3RyYXBcIiksYj17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmRcIix0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwifTtmb3IodmFyIGMgaW4gYilpZih2b2lkIDAhPT1hLnN0eWxlW2NdKXJldHVybntlbmQ6YltjXX07cmV0dXJuITF9YS5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihiKXt2YXIgYz0hMSxkPXRoaXM7YSh0aGlzKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2M9ITB9KTt2YXIgZT1mdW5jdGlvbigpe2N8fGEoZCkudHJpZ2dlcihhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpfTtyZXR1cm4gc2V0VGltZW91dChlLGIpLHRoaXN9LGEoZnVuY3Rpb24oKXthLnN1cHBvcnQudHJhbnNpdGlvbj1iKCksYS5zdXBwb3J0LnRyYW5zaXRpb24mJihhLmV2ZW50LnNwZWNpYWwuYnNUcmFuc2l0aW9uRW5kPXtiaW5kVHlwZTphLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsZGVsZWdhdGVUeXBlOmEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxoYW5kbGU6ZnVuY3Rpb24oYil7cmV0dXJuIGEoYi50YXJnZXQpLmlzKHRoaXMpP2IuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH19KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuYWxlcnRcIik7ZXx8Yy5kYXRhKFwiYnMuYWxlcnRcIixlPW5ldyBkKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXS5jYWxsKGMpfSl9dmFyIGM9J1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXScsZD1mdW5jdGlvbihiKXthKGIpLm9uKFwiY2xpY2tcIixjLHRoaXMuY2xvc2UpfTtkLlZFUlNJT049XCIzLjMuNVwiLGQuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsZC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe2cuZGV0YWNoKCkudHJpZ2dlcihcImNsb3NlZC5icy5hbGVydFwiKS5yZW1vdmUoKX12YXIgZT1hKHRoaXMpLGY9ZS5hdHRyKFwiZGF0YS10YXJnZXRcIik7Znx8KGY9ZS5hdHRyKFwiaHJlZlwiKSxmPWYmJmYucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGc9YShmKTtiJiZiLnByZXZlbnREZWZhdWx0KCksZy5sZW5ndGh8fChnPWUuY2xvc2VzdChcIi5hbGVydFwiKSksZy50cmlnZ2VyKGI9YS5FdmVudChcImNsb3NlLmJzLmFsZXJ0XCIpKSxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoZy5yZW1vdmVDbGFzcyhcImluXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZnLmhhc0NsYXNzKFwiZmFkZVwiKT9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGMpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTik6YygpKX07dmFyIGU9YS5mbi5hbGVydDthLmZuLmFsZXJ0PWIsYS5mbi5hbGVydC5Db25zdHJ1Y3Rvcj1kLGEuZm4uYWxlcnQubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmFsZXJ0PWUsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5hbGVydC5kYXRhLWFwaVwiLGMsZC5wcm90b3R5cGUuY2xvc2UpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuYnV0dG9uXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7ZXx8ZC5kYXRhKFwiYnMuYnV0dG9uXCIsZT1uZXcgYyh0aGlzLGYpKSxcInRvZ2dsZVwiPT1iP2UudG9nZ2xlKCk6YiYmZS5zZXRTdGF0ZShiKX0pfXZhciBjPWZ1bmN0aW9uKGIsZCl7dGhpcy4kZWxlbWVudD1hKGIpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQpLHRoaXMuaXNMb2FkaW5nPSExfTtjLlZFUlNJT049XCIzLjMuNVwiLGMuREVGQVVMVFM9e2xvYWRpbmdUZXh0OlwibG9hZGluZy4uLlwifSxjLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihiKXt2YXIgYz1cImRpc2FibGVkXCIsZD10aGlzLiRlbGVtZW50LGU9ZC5pcyhcImlucHV0XCIpP1widmFsXCI6XCJodG1sXCIsZj1kLmRhdGEoKTtiKz1cIlRleHRcIixudWxsPT1mLnJlc2V0VGV4dCYmZC5kYXRhKFwicmVzZXRUZXh0XCIsZFtlXSgpKSxzZXRUaW1lb3V0KGEucHJveHkoZnVuY3Rpb24oKXtkW2VdKG51bGw9PWZbYl0/dGhpcy5vcHRpb25zW2JdOmZbYl0pLFwibG9hZGluZ1RleHRcIj09Yj8odGhpcy5pc0xvYWRpbmc9ITAsZC5hZGRDbGFzcyhjKS5hdHRyKGMsYykpOnRoaXMuaXNMb2FkaW5nJiYodGhpcy5pc0xvYWRpbmc9ITEsZC5yZW1vdmVDbGFzcyhjKS5yZW1vdmVBdHRyKGMpKX0sdGhpcyksMCl9LGMucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe3ZhciBhPSEwLGI9dGhpcy4kZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyk7aWYoYi5sZW5ndGgpe3ZhciBjPXRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpO1wicmFkaW9cIj09Yy5wcm9wKFwidHlwZVwiKT8oYy5wcm9wKFwiY2hlY2tlZFwiKSYmKGE9ITEpLGIuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKSk6XCJjaGVja2JveFwiPT1jLnByb3AoXCJ0eXBlXCIpJiYoYy5wcm9wKFwiY2hlY2tlZFwiKSE9PXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJihhPSExKSx0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpKSxjLnByb3AoXCJjaGVja2VkXCIsdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSksYSYmYy50cmlnZ2VyKFwiY2hhbmdlXCIpfWVsc2UgdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBkPWEuZm4uYnV0dG9uO2EuZm4uYnV0dG9uPWIsYS5mbi5idXR0b24uQ29uc3RydWN0b3I9YyxhLmZuLmJ1dHRvbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYnV0dG9uPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCk7ZC5oYXNDbGFzcyhcImJ0blwiKXx8KGQ9ZC5jbG9zZXN0KFwiLmJ0blwiKSksYi5jYWxsKGQsXCJ0b2dnbGVcIiksYShjLnRhcmdldCkuaXMoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpfHxhKGMudGFyZ2V0KS5pcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyl8fGMucHJldmVudERlZmF1bHQoKX0pLm9uKFwiZm9jdXMuYnMuYnV0dG9uLmRhdGEtYXBpIGJsdXIuYnMuYnV0dG9uLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLGZ1bmN0aW9uKGIpe2EoYi50YXJnZXQpLmNsb3Nlc3QoXCIuYnRuXCIpLnRvZ2dsZUNsYXNzKFwiZm9jdXNcIiwvXmZvY3VzKGluKT8kLy50ZXN0KGIudHlwZSkpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5jYXJvdXNlbFwiKSxmPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZC5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGc9XCJzdHJpbmdcIj09dHlwZW9mIGI/YjpmLnNsaWRlO2V8fGQuZGF0YShcImJzLmNhcm91c2VsXCIsZT1uZXcgYyh0aGlzLGYpKSxcIm51bWJlclwiPT10eXBlb2YgYj9lLnRvKGIpOmc/ZVtnXSgpOmYuaW50ZXJ2YWwmJmUucGF1c2UoKS5jeWNsZSgpfSl9dmFyIGM9ZnVuY3Rpb24oYixjKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy4kaW5kaWNhdG9ycz10aGlzLiRlbGVtZW50LmZpbmQoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yc1wiKSx0aGlzLm9wdGlvbnM9Yyx0aGlzLnBhdXNlZD1udWxsLHRoaXMuc2xpZGluZz1udWxsLHRoaXMuaW50ZXJ2YWw9bnVsbCx0aGlzLiRhY3RpdmU9bnVsbCx0aGlzLiRpdGVtcz1udWxsLHRoaXMub3B0aW9ucy5rZXlib2FyZCYmdGhpcy4kZWxlbWVudC5vbihcImtleWRvd24uYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKSksXCJob3ZlclwiPT10aGlzLm9wdGlvbnMucGF1c2UmJiEoXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkmJnRoaXMuJGVsZW1lbnQub24oXCJtb3VzZWVudGVyLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLnBhdXNlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmUuYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMuY3ljbGUsdGhpcykpfTtjLlZFUlNJT049XCIzLjMuNVwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj02MDAsYy5ERUZBVUxUUz17aW50ZXJ2YWw6NWUzLHBhdXNlOlwiaG92ZXJcIix3cmFwOiEwLGtleWJvYXJkOiEwfSxjLnByb3RvdHlwZS5rZXlkb3duPWZ1bmN0aW9uKGEpe2lmKCEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGEudGFyZ2V0LnRhZ05hbWUpKXtzd2l0Y2goYS53aGljaCl7Y2FzZSAzNzp0aGlzLnByZXYoKTticmVhaztjYXNlIDM5OnRoaXMubmV4dCgpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufWEucHJldmVudERlZmF1bHQoKX19LGMucHJvdG90eXBlLmN5Y2xlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITEpLHRoaXMuaW50ZXJ2YWwmJmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpcy5vcHRpb25zLmludGVydmFsJiYhdGhpcy5wYXVzZWQmJih0aGlzLmludGVydmFsPXNldEludGVydmFsKGEucHJveHkodGhpcy5uZXh0LHRoaXMpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpLHRoaXN9LGMucHJvdG90eXBlLmdldEl0ZW1JbmRleD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy4kaXRlbXM9YS5wYXJlbnQoKS5jaGlsZHJlbihcIi5pdGVtXCIpLHRoaXMuJGl0ZW1zLmluZGV4KGF8fHRoaXMuJGFjdGl2ZSl9LGMucHJvdG90eXBlLmdldEl0ZW1Gb3JEaXJlY3Rpb249ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmdldEl0ZW1JbmRleChiKSxkPVwicHJldlwiPT1hJiYwPT09Y3x8XCJuZXh0XCI9PWEmJmM9PXRoaXMuJGl0ZW1zLmxlbmd0aC0xO2lmKGQmJiF0aGlzLm9wdGlvbnMud3JhcClyZXR1cm4gYjt2YXIgZT1cInByZXZcIj09YT8tMToxLGY9KGMrZSkldGhpcy4kaXRlbXMubGVuZ3RoO3JldHVybiB0aGlzLiRpdGVtcy5lcShmKX0sYy5wcm90b3R5cGUudG89ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXRoaXMuZ2V0SXRlbUluZGV4KHRoaXMuJGFjdGl2ZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIikpO3JldHVybiBhPnRoaXMuJGl0ZW1zLmxlbmd0aC0xfHwwPmE/dm9pZCAwOnRoaXMuc2xpZGluZz90aGlzLiRlbGVtZW50Lm9uZShcInNsaWQuYnMuY2Fyb3VzZWxcIixmdW5jdGlvbigpe2IudG8oYSl9KTpjPT1hP3RoaXMucGF1c2UoKS5jeWNsZSgpOnRoaXMuc2xpZGUoYT5jP1wibmV4dFwiOlwicHJldlwiLHRoaXMuJGl0ZW1zLmVxKGEpKX0sYy5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oYil7cmV0dXJuIGJ8fCh0aGlzLnBhdXNlZD0hMCksdGhpcy4kZWxlbWVudC5maW5kKFwiLm5leHQsIC5wcmV2XCIpLmxlbmd0aCYmYS5zdXBwb3J0LnRyYW5zaXRpb24mJih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKSx0aGlzLmN5Y2xlKCEwKSksdGhpcy5pbnRlcnZhbD1jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpLHRoaXN9LGMucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkaW5nP3ZvaWQgMDp0aGlzLnNsaWRlKFwibmV4dFwiKX0sYy5wcm90b3R5cGUucHJldj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNsaWRpbmc/dm9pZCAwOnRoaXMuc2xpZGUoXCJwcmV2XCIpfSxjLnByb3RvdHlwZS5zbGlkZT1mdW5jdGlvbihiLGQpe3ZhciBlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSxmPWR8fHRoaXMuZ2V0SXRlbUZvckRpcmVjdGlvbihiLGUpLGc9dGhpcy5pbnRlcnZhbCxoPVwibmV4dFwiPT1iP1wibGVmdFwiOlwicmlnaHRcIixpPXRoaXM7aWYoZi5oYXNDbGFzcyhcImFjdGl2ZVwiKSlyZXR1cm4gdGhpcy5zbGlkaW5nPSExO3ZhciBqPWZbMF0saz1hLkV2ZW50KFwic2xpZGUuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDpqLGRpcmVjdGlvbjpofSk7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGspLCFrLmlzRGVmYXVsdFByZXZlbnRlZCgpKXtpZih0aGlzLnNsaWRpbmc9ITAsZyYmdGhpcy5wYXVzZSgpLHRoaXMuJGluZGljYXRvcnMubGVuZ3RoKXt0aGlzLiRpbmRpY2F0b3JzLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO3ZhciBsPWEodGhpcy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpW3RoaXMuZ2V0SXRlbUluZGV4KGYpXSk7bCYmbC5hZGRDbGFzcyhcImFjdGl2ZVwiKX12YXIgbT1hLkV2ZW50KFwic2xpZC5icy5jYXJvdXNlbFwiLHtyZWxhdGVkVGFyZ2V0OmosZGlyZWN0aW9uOmh9KTtyZXR1cm4gYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJzbGlkZVwiKT8oZi5hZGRDbGFzcyhiKSxmWzBdLm9mZnNldFdpZHRoLGUuYWRkQ2xhc3MoaCksZi5hZGRDbGFzcyhoKSxlLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7Zi5yZW1vdmVDbGFzcyhbYixoXS5qb2luKFwiIFwiKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIiksZS5yZW1vdmVDbGFzcyhbXCJhY3RpdmVcIixoXS5qb2luKFwiIFwiKSksaS5zbGlkaW5nPSExLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLiRlbGVtZW50LnRyaWdnZXIobSl9LDApfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKSk6KGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLnNsaWRpbmc9ITEsdGhpcy4kZWxlbWVudC50cmlnZ2VyKG0pKSxnJiZ0aGlzLmN5Y2xlKCksdGhpc319O3ZhciBkPWEuZm4uY2Fyb3VzZWw7YS5mbi5jYXJvdXNlbD1iLGEuZm4uY2Fyb3VzZWwuQ29uc3RydWN0b3I9YyxhLmZuLmNhcm91c2VsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5jYXJvdXNlbD1kLHRoaXN9O3ZhciBlPWZ1bmN0aW9uKGMpe3ZhciBkLGU9YSh0aGlzKSxmPWEoZS5hdHRyKFwiZGF0YS10YXJnZXRcIil8fChkPWUuYXR0cihcImhyZWZcIikpJiZkLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIikpO2lmKGYuaGFzQ2xhc3MoXCJjYXJvdXNlbFwiKSl7dmFyIGc9YS5leHRlbmQoe30sZi5kYXRhKCksZS5kYXRhKCkpLGg9ZS5hdHRyKFwiZGF0YS1zbGlkZS10b1wiKTtoJiYoZy5pbnRlcnZhbD0hMSksYi5jYWxsKGYsZyksaCYmZi5kYXRhKFwiYnMuY2Fyb3VzZWxcIikudG8oaCksYy5wcmV2ZW50RGVmYXVsdCgpfX07YShkb2N1bWVudCkub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLFwiW2RhdGEtc2xpZGVdXCIsZSkub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLFwiW2RhdGEtc2xpZGUtdG9dXCIsZSksYSh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyk7Yi5jYWxsKGMsYy5kYXRhKCkpfSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXt2YXIgYyxkPWIuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoYz1iLmF0dHIoXCJocmVmXCIpKSYmYy5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpO3JldHVybiBhKGQpfWZ1bmN0aW9uIGMoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZT1jLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxmPWEuZXh0ZW5kKHt9LGQuREVGQVVMVFMsYy5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGImJmIpOyFlJiZmLnRvZ2dsZSYmL3Nob3d8aGlkZS8udGVzdChiKSYmKGYudG9nZ2xlPSExKSxlfHxjLmRhdGEoXCJicy5jb2xsYXBzZVwiLGU9bmV3IGQodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBkPWZ1bmN0aW9uKGIsYyl7dGhpcy4kZWxlbWVudD1hKGIpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxkLkRFRkFVTFRTLGMpLHRoaXMuJHRyaWdnZXI9YSgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnK2IuaWQrJ1wiXSxbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMnK2IuaWQrJ1wiXScpLHRoaXMudHJhbnNpdGlvbmluZz1udWxsLHRoaXMub3B0aW9ucy5wYXJlbnQ/dGhpcy4kcGFyZW50PXRoaXMuZ2V0UGFyZW50KCk6dGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy4kZWxlbWVudCx0aGlzLiR0cmlnZ2VyKSx0aGlzLm9wdGlvbnMudG9nZ2xlJiZ0aGlzLnRvZ2dsZSgpfTtkLlZFUlNJT049XCIzLjMuNVwiLGQuVFJBTlNJVElPTl9EVVJBVElPTj0zNTAsZC5ERUZBVUxUUz17dG9nZ2xlOiEwfSxkLnByb3RvdHlwZS5kaW1lbnNpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwid2lkdGhcIik7cmV0dXJuIGE/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9LGQucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiYhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYixlPXRoaXMuJHBhcmVudCYmdGhpcy4kcGFyZW50LmNoaWxkcmVuKFwiLnBhbmVsXCIpLmNoaWxkcmVuKFwiLmluLCAuY29sbGFwc2luZ1wiKTtpZighKGUmJmUubGVuZ3RoJiYoYj1lLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxiJiZiLnRyYW5zaXRpb25pbmcpKSl7dmFyIGY9YS5FdmVudChcInNob3cuYnMuY29sbGFwc2VcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGYpLCFmLmlzRGVmYXVsdFByZXZlbnRlZCgpKXtlJiZlLmxlbmd0aCYmKGMuY2FsbChlLFwiaGlkZVwiKSxifHxlLmRhdGEoXCJicy5jb2xsYXBzZVwiLG51bGwpKTt2YXIgZz10aGlzLmRpbWVuc2lvbigpO3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZVwiKS5hZGRDbGFzcyhcImNvbGxhcHNpbmdcIilbZ10oMCkuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy4kdHJpZ2dlci5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLnRyYW5zaXRpb25pbmc9MTt2YXIgaD1mdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiY29sbGFwc2UgaW5cIilbZ10oXCJcIiksdGhpcy50cmFuc2l0aW9uaW5nPTAsdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwic2hvd24uYnMuY29sbGFwc2VcIil9O2lmKCFhLnN1cHBvcnQudHJhbnNpdGlvbilyZXR1cm4gaC5jYWxsKHRoaXMpO3ZhciBpPWEuY2FtZWxDYXNlKFtcInNjcm9sbFwiLGddLmpvaW4oXCItXCIpKTt0aGlzLiRlbGVtZW50Lm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGEucHJveHkoaCx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoZC5UUkFOU0lUSU9OX0RVUkFUSU9OKVtnXSh0aGlzLiRlbGVtZW50WzBdW2ldKX19fX0sZC5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbigpe2lmKCF0aGlzLnRyYW5zaXRpb25pbmcmJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKSl7dmFyIGI9YS5FdmVudChcImhpZGUuYnMuY29sbGFwc2VcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpLCFiLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgYz10aGlzLmRpbWVuc2lvbigpO3RoaXMuJGVsZW1lbnRbY10odGhpcy4kZWxlbWVudFtjXSgpKVswXS5vZmZzZXRIZWlnaHQsdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhcImNvbGxhcHNpbmdcIikucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZSBpblwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSx0aGlzLiR0cmlnZ2VyLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLHRoaXMudHJhbnNpdGlvbmluZz0xO3ZhciBlPWZ1bmN0aW9uKCl7dGhpcy50cmFuc2l0aW9uaW5nPTAsdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIikuYWRkQ2xhc3MoXCJjb2xsYXBzZVwiKS50cmlnZ2VyKFwiaGlkZGVuLmJzLmNvbGxhcHNlXCIpfTtyZXR1cm4gYS5zdXBwb3J0LnRyYW5zaXRpb24/dm9pZCB0aGlzLiRlbGVtZW50W2NdKDApLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGEucHJveHkoZSx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoZC5UUkFOU0lUSU9OX0RVUkFUSU9OKTplLmNhbGwodGhpcyl9fX0sZC5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dGhpc1t0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIik/XCJoaWRlXCI6XCJzaG93XCJdKCl9LGQucHJvdG90eXBlLmdldFBhcmVudD1mdW5jdGlvbigpe3JldHVybiBhKHRoaXMub3B0aW9ucy5wYXJlbnQpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJyt0aGlzLm9wdGlvbnMucGFyZW50KydcIl0nKS5lYWNoKGEucHJveHkoZnVuY3Rpb24oYyxkKXt2YXIgZT1hKGQpO3RoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGIoZSksZSl9LHRoaXMpKS5lbmQoKX0sZC5wcm90b3R5cGUuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5oYXNDbGFzcyhcImluXCIpO2EuYXR0cihcImFyaWEtZXhwYW5kZWRcIixjKSxiLnRvZ2dsZUNsYXNzKFwiY29sbGFwc2VkXCIsIWMpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsYyl9O3ZhciBlPWEuZm4uY29sbGFwc2U7YS5mbi5jb2xsYXBzZT1jLGEuZm4uY29sbGFwc2UuQ29uc3RydWN0b3I9ZCxhLmZuLmNvbGxhcHNlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5jb2xsYXBzZT1lLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLGZ1bmN0aW9uKGQpe3ZhciBlPWEodGhpcyk7ZS5hdHRyKFwiZGF0YS10YXJnZXRcIil8fGQucHJldmVudERlZmF1bHQoKTt2YXIgZj1iKGUpLGc9Zi5kYXRhKFwiYnMuY29sbGFwc2VcIiksaD1nP1widG9nZ2xlXCI6ZS5kYXRhKCk7Yy5jYWxsKGYsaCl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXt2YXIgYz1iLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtjfHwoYz1iLmF0dHIoXCJocmVmXCIpLGM9YyYmLyNbQS1aYS16XS8udGVzdChjKSYmYy5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKTt2YXIgZD1jJiZhKGMpO3JldHVybiBkJiZkLmxlbmd0aD9kOmIucGFyZW50KCl9ZnVuY3Rpb24gYyhjKXtjJiYzPT09Yy53aGljaHx8KGEoZSkucmVtb3ZlKCksYShmKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWIoZCksZj17cmVsYXRlZFRhcmdldDp0aGlzfTtlLmhhc0NsYXNzKFwib3BlblwiKSYmKGMmJlwiY2xpY2tcIj09Yy50eXBlJiYvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGMudGFyZ2V0LnRhZ05hbWUpJiZhLmNvbnRhaW5zKGVbMF0sYy50YXJnZXQpfHwoZS50cmlnZ2VyKGM9YS5FdmVudChcImhpZGUuYnMuZHJvcGRvd25cIixmKSksYy5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KGQuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLGUucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuZHJvcGRvd25cIixmKSkpKX0pKX1mdW5jdGlvbiBkKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5kYXRhKFwiYnMuZHJvcGRvd25cIik7ZHx8Yy5kYXRhKFwiYnMuZHJvcGRvd25cIixkPW5ldyBnKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZFtiXS5jYWxsKGMpfSl9dmFyIGU9XCIuZHJvcGRvd24tYmFja2Ryb3BcIixmPSdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsZz1mdW5jdGlvbihiKXthKGIpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIix0aGlzLnRvZ2dsZSl9O2cuVkVSU0lPTj1cIjMuMy41XCIsZy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGQpe3ZhciBlPWEodGhpcyk7aWYoIWUuaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSl7dmFyIGY9YihlKSxnPWYuaGFzQ2xhc3MoXCJvcGVuXCIpO2lmKGMoKSwhZyl7XCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmIWYuY2xvc2VzdChcIi5uYXZiYXItbmF2XCIpLmxlbmd0aCYmYShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5hZGRDbGFzcyhcImRyb3Bkb3duLWJhY2tkcm9wXCIpLmluc2VydEFmdGVyKGEodGhpcykpLm9uKFwiY2xpY2tcIixjKTt2YXIgaD17cmVsYXRlZFRhcmdldDp0aGlzfTtpZihmLnRyaWdnZXIoZD1hLkV2ZW50KFwic2hvdy5icy5kcm9wZG93blwiLGgpKSxkLmlzRGVmYXVsdFByZXZlbnRlZCgpKXJldHVybjtlLnRyaWdnZXIoXCJmb2N1c1wiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKSxmLnRvZ2dsZUNsYXNzKFwib3BlblwiKS50cmlnZ2VyKFwic2hvd24uYnMuZHJvcGRvd25cIixoKX1yZXR1cm4hMX19LGcucHJvdG90eXBlLmtleWRvd249ZnVuY3Rpb24oYyl7aWYoLygzOHw0MHwyN3wzMikvLnRlc3QoYy53aGljaCkmJiEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGMudGFyZ2V0LnRhZ05hbWUpKXt2YXIgZD1hKHRoaXMpO2lmKGMucHJldmVudERlZmF1bHQoKSxjLnN0b3BQcm9wYWdhdGlvbigpLCFkLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpe3ZhciBlPWIoZCksZz1lLmhhc0NsYXNzKFwib3BlblwiKTtpZighZyYmMjchPWMud2hpY2h8fGcmJjI3PT1jLndoaWNoKXJldHVybiAyNz09Yy53aGljaCYmZS5maW5kKGYpLnRyaWdnZXIoXCJmb2N1c1wiKSxkLnRyaWdnZXIoXCJjbGlja1wiKTt2YXIgaD1cIiBsaTpub3QoLmRpc2FibGVkKTp2aXNpYmxlIGFcIixpPWUuZmluZChcIi5kcm9wZG93bi1tZW51XCIraCk7aWYoaS5sZW5ndGgpe3ZhciBqPWkuaW5kZXgoYy50YXJnZXQpOzM4PT1jLndoaWNoJiZqPjAmJmotLSw0MD09Yy53aGljaCYmajxpLmxlbmd0aC0xJiZqKyssfmp8fChqPTApLGkuZXEoaikudHJpZ2dlcihcImZvY3VzXCIpfX19fTt2YXIgaD1hLmZuLmRyb3Bkb3duO2EuZm4uZHJvcGRvd249ZCxhLmZuLmRyb3Bkb3duLkNvbnN0cnVjdG9yPWcsYS5mbi5kcm9wZG93bi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uZHJvcGRvd249aCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsYykub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLFwiLmRyb3Bkb3duIGZvcm1cIixmdW5jdGlvbihhKXthLnN0b3BQcm9wYWdhdGlvbigpfSkub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGYsZy5wcm90b3R5cGUudG9nZ2xlKS5vbihcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIixmLGcucHJvdG90eXBlLmtleWRvd24pLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLFwiLmRyb3Bkb3duLW1lbnVcIixnLnByb3RvdHlwZS5rZXlkb3duKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiLGQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1hKHRoaXMpLGY9ZS5kYXRhKFwiYnMubW9kYWxcIiksZz1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGUuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKTtmfHxlLmRhdGEoXCJicy5tb2RhbFwiLGY9bmV3IGModGhpcyxnKSksXCJzdHJpbmdcIj09dHlwZW9mIGI/ZltiXShkKTpnLnNob3cmJmYuc2hvdyhkKX0pfXZhciBjPWZ1bmN0aW9uKGIsYyl7dGhpcy5vcHRpb25zPWMsdGhpcy4kYm9keT1hKGRvY3VtZW50LmJvZHkpLHRoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRkaWFsb2c9dGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWRpYWxvZ1wiKSx0aGlzLiRiYWNrZHJvcD1udWxsLHRoaXMuaXNTaG93bj1udWxsLHRoaXMub3JpZ2luYWxCb2R5UGFkPW51bGwsdGhpcy5zY3JvbGxiYXJXaWR0aD0wLHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz0hMSx0aGlzLm9wdGlvbnMucmVtb3RlJiZ0aGlzLiRlbGVtZW50LmZpbmQoXCIubW9kYWwtY29udGVudFwiKS5sb2FkKHRoaXMub3B0aW9ucy5yZW1vdGUsYS5wcm94eShmdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQudHJpZ2dlcihcImxvYWRlZC5icy5tb2RhbFwiKX0sdGhpcykpfTtjLlZFUlNJT049XCIzLjMuNVwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj0zMDAsYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLkRFRkFVTFRTPXtiYWNrZHJvcDohMCxrZXlib2FyZDohMCxzaG93OiEwfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3coYSl9LGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcyxlPWEuRXZlbnQoXCJzaG93LmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6Yn0pO3RoaXMuJGVsZW1lbnQudHJpZ2dlcihlKSx0aGlzLmlzU2hvd258fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0aGlzLmlzU2hvd249ITAsdGhpcy5jaGVja1Njcm9sbGJhcigpLHRoaXMuc2V0U2Nyb2xsYmFyKCksdGhpcy4kYm9keS5hZGRDbGFzcyhcIm1vZGFsLW9wZW5cIiksdGhpcy5lc2NhcGUoKSx0aGlzLnJlc2l6ZSgpLHRoaXMuJGVsZW1lbnQub24oXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsYS5wcm94eSh0aGlzLmhpZGUsdGhpcykpLHRoaXMuJGRpYWxvZy5vbihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtkLiRlbGVtZW50Lm9uZShcIm1vdXNldXAuZGlzbWlzcy5icy5tb2RhbFwiLGZ1bmN0aW9uKGIpe2EoYi50YXJnZXQpLmlzKGQuJGVsZW1lbnQpJiYoZC5pZ25vcmVCYWNrZHJvcENsaWNrPSEwKX0pfSksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe3ZhciBlPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZkLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKTtkLiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aHx8ZC4kZWxlbWVudC5hcHBlbmRUbyhkLiRib2R5KSxkLiRlbGVtZW50LnNob3coKS5zY3JvbGxUb3AoMCksZC5hZGp1c3REaWFsb2coKSxlJiZkLiRlbGVtZW50WzBdLm9mZnNldFdpZHRoLGQuJGVsZW1lbnQuYWRkQ2xhc3MoXCJpblwiKSxkLmVuZm9yY2VGb2N1cygpO3ZhciBmPWEuRXZlbnQoXCJzaG93bi5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0OmJ9KTtlP2QuJGRpYWxvZy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2QuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoZil9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOmQuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoZil9KSl9LGMucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYil7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGI9YS5FdmVudChcImhpZGUuYnMubW9kYWxcIiksdGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpLHRoaXMuaXNTaG93biYmIWIuaXNEZWZhdWx0UHJldmVudGVkKCkmJih0aGlzLmlzU2hvd249ITEsdGhpcy5lc2NhcGUoKSx0aGlzLnJlc2l6ZSgpLGEoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIiksdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImluXCIpLm9mZihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIikub2ZmKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIpLHRoaXMuJGRpYWxvZy5vZmYoXCJtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbFwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KHRoaXMuaGlkZU1vZGFsLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOnRoaXMuaGlkZU1vZGFsKCkpfSxjLnByb3RvdHlwZS5lbmZvcmNlRm9jdXM9ZnVuY3Rpb24oKXthKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLm9uKFwiZm9jdXNpbi5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy4kZWxlbWVudFswXT09PWEudGFyZ2V0fHx0aGlzLiRlbGVtZW50LmhhcyhhLnRhcmdldCkubGVuZ3RofHx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKX0sdGhpcykpfSxjLnByb3RvdHlwZS5lc2NhcGU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5rZXlib2FyZD90aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXsyNz09YS53aGljaCYmdGhpcy5oaWRlKCl9LHRoaXMpKTp0aGlzLmlzU2hvd258fHRoaXMuJGVsZW1lbnQub2ZmKFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpfSxjLnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24/YSh3aW5kb3cpLm9uKFwicmVzaXplLmJzLm1vZGFsXCIsYS5wcm94eSh0aGlzLmhhbmRsZVVwZGF0ZSx0aGlzKSk6YSh3aW5kb3cpLm9mZihcInJlc2l6ZS5icy5tb2RhbFwiKX0sYy5wcm90b3R5cGUuaGlkZU1vZGFsPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLiRlbGVtZW50LmhpZGUoKSx0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uKCl7YS4kYm9keS5yZW1vdmVDbGFzcyhcIm1vZGFsLW9wZW5cIiksYS5yZXNldEFkanVzdG1lbnRzKCksYS5yZXNldFNjcm9sbGJhcigpLGEuJGVsZW1lbnQudHJpZ2dlcihcImhpZGRlbi5icy5tb2RhbFwiKX0pfSxjLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcD1mdW5jdGlvbigpe3RoaXMuJGJhY2tkcm9wJiZ0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKSx0aGlzLiRiYWNrZHJvcD1udWxsfSxjLnByb3RvdHlwZS5iYWNrZHJvcD1mdW5jdGlvbihiKXt2YXIgZD10aGlzLGU9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/XCJmYWRlXCI6XCJcIjtpZih0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5iYWNrZHJvcCl7dmFyIGY9YS5zdXBwb3J0LnRyYW5zaXRpb24mJmU7aWYodGhpcy4kYmFja2Ryb3A9YShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5hZGRDbGFzcyhcIm1vZGFsLWJhY2tkcm9wIFwiK2UpLmFwcGVuZFRvKHRoaXMuJGJvZHkpLHRoaXMuJGVsZW1lbnQub24oXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrP3ZvaWQodGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrPSExKTp2b2lkKGEudGFyZ2V0PT09YS5jdXJyZW50VGFyZ2V0JiYoXCJzdGF0aWNcIj09dGhpcy5vcHRpb25zLmJhY2tkcm9wP3RoaXMuJGVsZW1lbnRbMF0uZm9jdXMoKTp0aGlzLmhpZGUoKSkpfSx0aGlzKSksZiYmdGhpcy4kYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGgsdGhpcy4kYmFja2Ryb3AuYWRkQ2xhc3MoXCJpblwiKSwhYilyZXR1cm47Zj90aGlzLiRiYWNrZHJvcC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixiKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pOmIoKX1lbHNlIGlmKCF0aGlzLmlzU2hvd24mJnRoaXMuJGJhY2tkcm9wKXt0aGlzLiRiYWNrZHJvcC5yZW1vdmVDbGFzcyhcImluXCIpO3ZhciBnPWZ1bmN0aW9uKCl7ZC5yZW1vdmVCYWNrZHJvcCgpLGImJmIoKX07YS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGcpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik6ZygpfWVsc2UgYiYmYigpfSxjLnByb3RvdHlwZS5oYW5kbGVVcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLmFkanVzdERpYWxvZygpfSxjLnByb3RvdHlwZS5hZGp1c3REaWFsb2c9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50WzBdLnNjcm9sbEhlaWdodD5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O3RoaXMuJGVsZW1lbnQuY3NzKHtwYWRkaW5nTGVmdDohdGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmYT90aGlzLnNjcm9sbGJhcldpZHRoOlwiXCIscGFkZGluZ1JpZ2h0OnRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJiFhP3RoaXMuc2Nyb2xsYmFyV2lkdGg6XCJcIn0pfSxjLnByb3RvdHlwZS5yZXNldEFkanVzdG1lbnRzPWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5jc3Moe3BhZGRpbmdMZWZ0OlwiXCIscGFkZGluZ1JpZ2h0OlwiXCJ9KX0sYy5wcm90b3R5cGUuY2hlY2tTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT13aW5kb3cuaW5uZXJXaWR0aDtpZighYSl7dmFyIGI9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2E9Yi5yaWdodC1NYXRoLmFicyhiLmxlZnQpfXRoaXMuYm9keUlzT3ZlcmZsb3dpbmc9ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDxhLHRoaXMuc2Nyb2xsYmFyV2lkdGg9dGhpcy5tZWFzdXJlU2Nyb2xsYmFyKCl9LGMucHJvdG90eXBlLnNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3ZhciBhPXBhcnNlSW50KHRoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiKXx8MCwxMCk7dGhpcy5vcmlnaW5hbEJvZHlQYWQ9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHR8fFwiXCIsdGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmdGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsYSt0aGlzLnNjcm9sbGJhcldpZHRoKX0sYy5wcm90b3R5cGUucmVzZXRTY3JvbGxiYXI9ZnVuY3Rpb24oKXt0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIix0aGlzLm9yaWdpbmFsQm9keVBhZCl9LGMucHJvdG90eXBlLm1lYXN1cmVTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuY2xhc3NOYW1lPVwibW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmVcIix0aGlzLiRib2R5LmFwcGVuZChhKTt2YXIgYj1hLm9mZnNldFdpZHRoLWEuY2xpZW50V2lkdGg7cmV0dXJuIHRoaXMuJGJvZHlbMF0ucmVtb3ZlQ2hpbGQoYSksYn07dmFyIGQ9YS5mbi5tb2RhbDthLmZuLm1vZGFsPWIsYS5mbi5tb2RhbC5Db25zdHJ1Y3Rvcj1jLGEuZm4ubW9kYWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLm1vZGFsPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5tb2RhbC5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsZnVuY3Rpb24oYyl7dmFyIGQ9YSh0aGlzKSxlPWQuYXR0cihcImhyZWZcIiksZj1hKGQuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxlJiZlLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIikpLGc9Zi5kYXRhKFwiYnMubW9kYWxcIik/XCJ0b2dnbGVcIjphLmV4dGVuZCh7cmVtb3RlOiEvIy8udGVzdChlKSYmZX0sZi5kYXRhKCksZC5kYXRhKCkpO2QuaXMoXCJhXCIpJiZjLnByZXZlbnREZWZhdWx0KCksZi5vbmUoXCJzaG93LmJzLm1vZGFsXCIsZnVuY3Rpb24oYSl7YS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Zi5vbmUoXCJoaWRkZW4uYnMubW9kYWxcIixmdW5jdGlvbigpe2QuaXMoXCI6dmlzaWJsZVwiKSYmZC50cmlnZ2VyKFwiZm9jdXNcIil9KX0pLGIuY2FsbChmLGcsdGhpcyl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnRvb2x0aXBcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjsoZXx8IS9kZXN0cm95fGhpZGUvLnRlc3QoYikpJiYoZXx8ZC5kYXRhKFwiYnMudG9vbHRpcFwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKSl9KX12YXIgYz1mdW5jdGlvbihhLGIpe3RoaXMudHlwZT1udWxsLHRoaXMub3B0aW9ucz1udWxsLHRoaXMuZW5hYmxlZD1udWxsLHRoaXMudGltZW91dD1udWxsLHRoaXMuaG92ZXJTdGF0ZT1udWxsLHRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLmluU3RhdGU9bnVsbCx0aGlzLmluaXQoXCJ0b29sdGlwXCIsYSxiKX07Yy5WRVJTSU9OPVwiMy4zLjVcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGMuREVGQVVMVFM9e2FuaW1hdGlvbjohMCxwbGFjZW1lbnQ6XCJ0b3BcIixzZWxlY3RvcjohMSx0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wiLHRpdGxlOlwiXCIsZGVsYXk6MCxodG1sOiExLGNvbnRhaW5lcjohMSx2aWV3cG9ydDp7c2VsZWN0b3I6XCJib2R5XCIscGFkZGluZzowfX0sYy5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihiLGMsZCl7aWYodGhpcy5lbmFibGVkPSEwLHRoaXMudHlwZT1iLHRoaXMuJGVsZW1lbnQ9YShjKSx0aGlzLm9wdGlvbnM9dGhpcy5nZXRPcHRpb25zKGQpLHRoaXMuJHZpZXdwb3J0PXRoaXMub3B0aW9ucy52aWV3cG9ydCYmYShhLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnZpZXdwb3J0KT90aGlzLm9wdGlvbnMudmlld3BvcnQuY2FsbCh0aGlzLHRoaXMuJGVsZW1lbnQpOnRoaXMub3B0aW9ucy52aWV3cG9ydC5zZWxlY3Rvcnx8dGhpcy5vcHRpb25zLnZpZXdwb3J0KSx0aGlzLmluU3RhdGU9e2NsaWNrOiExLGhvdmVyOiExLGZvY3VzOiExfSx0aGlzLiRlbGVtZW50WzBdaW5zdGFuY2VvZiBkb2N1bWVudC5jb25zdHJ1Y3RvciYmIXRoaXMub3B0aW9ucy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJgc2VsZWN0b3JgIG9wdGlvbiBtdXN0IGJlIHNwZWNpZmllZCB3aGVuIGluaXRpYWxpemluZyBcIit0aGlzLnR5cGUrXCIgb24gdGhlIHdpbmRvdy5kb2N1bWVudCBvYmplY3QhXCIpO2Zvcih2YXIgZT10aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdChcIiBcIiksZj1lLmxlbmd0aDtmLS07KXt2YXIgZz1lW2ZdO2lmKFwiY2xpY2tcIj09Zyl0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMudG9nZ2xlLHRoaXMpKTtlbHNlIGlmKFwibWFudWFsXCIhPWcpe3ZhciBoPVwiaG92ZXJcIj09Zz9cIm1vdXNlZW50ZXJcIjpcImZvY3VzaW5cIixpPVwiaG92ZXJcIj09Zz9cIm1vdXNlbGVhdmVcIjpcImZvY3Vzb3V0XCI7dGhpcy4kZWxlbWVudC5vbihoK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLmVudGVyLHRoaXMpKSx0aGlzLiRlbGVtZW50Lm9uKGkrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMubGVhdmUsdGhpcykpfX10aGlzLm9wdGlvbnMuc2VsZWN0b3I/dGhpcy5fb3B0aW9ucz1hLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMse3RyaWdnZXI6XCJtYW51YWxcIixzZWxlY3RvcjpcIlwifSk6dGhpcy5maXhUaXRsZSgpfSxjLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBjLkRFRkFVTFRTfSxjLnByb3RvdHlwZS5nZXRPcHRpb25zPWZ1bmN0aW9uKGIpe3JldHVybiBiPWEuZXh0ZW5kKHt9LHRoaXMuZ2V0RGVmYXVsdHMoKSx0aGlzLiRlbGVtZW50LmRhdGEoKSxiKSxiLmRlbGF5JiZcIm51bWJlclwiPT10eXBlb2YgYi5kZWxheSYmKGIuZGVsYXk9e3Nob3c6Yi5kZWxheSxoaWRlOmIuZGVsYXl9KSxifSxjLnByb3RvdHlwZS5nZXREZWxlZ2F0ZU9wdGlvbnM9ZnVuY3Rpb24oKXt2YXIgYj17fSxjPXRoaXMuZ2V0RGVmYXVsdHMoKTtyZXR1cm4gdGhpcy5fb3B0aW9ucyYmYS5lYWNoKHRoaXMuX29wdGlvbnMsZnVuY3Rpb24oYSxkKXtjW2FdIT1kJiYoYlthXT1kKX0pLGJ9LGMucHJvdG90eXBlLmVudGVyPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO3JldHVybiBjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpLGIgaW5zdGFuY2VvZiBhLkV2ZW50JiYoYy5pblN0YXRlW1wiZm9jdXNpblwiPT1iLnR5cGU/XCJmb2N1c1wiOlwiaG92ZXJcIl09ITApLGMudGlwKCkuaGFzQ2xhc3MoXCJpblwiKXx8XCJpblwiPT1jLmhvdmVyU3RhdGU/dm9pZChjLmhvdmVyU3RhdGU9XCJpblwiKTooY2xlYXJUaW1lb3V0KGMudGltZW91dCksYy5ob3ZlclN0YXRlPVwiaW5cIixjLm9wdGlvbnMuZGVsYXkmJmMub3B0aW9ucy5kZWxheS5zaG93P3ZvaWQoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluXCI9PWMuaG92ZXJTdGF0ZSYmYy5zaG93KCl9LGMub3B0aW9ucy5kZWxheS5zaG93KSk6Yy5zaG93KCkpfSxjLnByb3RvdHlwZS5pc0luU3RhdGVUcnVlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIHRoaXMuaW5TdGF0ZSlpZih0aGlzLmluU3RhdGVbYV0pcmV0dXJuITA7cmV0dXJuITF9LGMucHJvdG90eXBlLmxlYXZlPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO3JldHVybiBjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpLGIgaW5zdGFuY2VvZiBhLkV2ZW50JiYoYy5pblN0YXRlW1wiZm9jdXNvdXRcIj09Yi50eXBlP1wiZm9jdXNcIjpcImhvdmVyXCJdPSExKSxjLmlzSW5TdGF0ZVRydWUoKT92b2lkIDA6KGNsZWFyVGltZW91dChjLnRpbWVvdXQpLGMuaG92ZXJTdGF0ZT1cIm91dFwiLGMub3B0aW9ucy5kZWxheSYmYy5vcHRpb25zLmRlbGF5LmhpZGU/dm9pZChjLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wib3V0XCI9PWMuaG92ZXJTdGF0ZSYmYy5oaWRlKCl9LGMub3B0aW9ucy5kZWxheS5oaWRlKSk6Yy5oaWRlKCkpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9YS5FdmVudChcInNob3cuYnMuXCIrdGhpcy50eXBlKTtpZih0aGlzLmhhc0NvbnRlbnQoKSYmdGhpcy5lbmFibGVkKXt0aGlzLiRlbGVtZW50LnRyaWdnZXIoYik7dmFyIGQ9YS5jb250YWlucyh0aGlzLiRlbGVtZW50WzBdLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHRoaXMuJGVsZW1lbnRbMF0pO2lmKGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fCFkKXJldHVybjt2YXIgZT10aGlzLGY9dGhpcy50aXAoKSxnPXRoaXMuZ2V0VUlEKHRoaXMudHlwZSk7dGhpcy5zZXRDb250ZW50KCksZi5hdHRyKFwiaWRcIixnKSx0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsZyksdGhpcy5vcHRpb25zLmFuaW1hdGlvbiYmZi5hZGRDbGFzcyhcImZhZGVcIik7dmFyIGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLnBsYWNlbWVudD90aGlzLm9wdGlvbnMucGxhY2VtZW50LmNhbGwodGhpcyxmWzBdLHRoaXMuJGVsZW1lbnRbMF0pOnRoaXMub3B0aW9ucy5wbGFjZW1lbnQsaT0vXFxzP2F1dG8/XFxzPy9pLGo9aS50ZXN0KGgpO2omJihoPWgucmVwbGFjZShpLFwiXCIpfHxcInRvcFwiKSxmLmRldGFjaCgpLmNzcyh7dG9wOjAsbGVmdDowLGRpc3BsYXk6XCJibG9ja1wifSkuYWRkQ2xhc3MoaCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSx0aGlzKSx0aGlzLm9wdGlvbnMuY29udGFpbmVyP2YuYXBwZW5kVG8odGhpcy5vcHRpb25zLmNvbnRhaW5lcik6Zi5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJpbnNlcnRlZC5icy5cIit0aGlzLnR5cGUpO3ZhciBrPXRoaXMuZ2V0UG9zaXRpb24oKSxsPWZbMF0ub2Zmc2V0V2lkdGgsbT1mWzBdLm9mZnNldEhlaWdodDtpZihqKXt2YXIgbj1oLG89dGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7aD1cImJvdHRvbVwiPT1oJiZrLmJvdHRvbSttPm8uYm90dG9tP1widG9wXCI6XCJ0b3BcIj09aCYmay50b3AtbTxvLnRvcD9cImJvdHRvbVwiOlwicmlnaHRcIj09aCYmay5yaWdodCtsPm8ud2lkdGg/XCJsZWZ0XCI6XCJsZWZ0XCI9PWgmJmsubGVmdC1sPG8ubGVmdD9cInJpZ2h0XCI6aCxmLnJlbW92ZUNsYXNzKG4pLmFkZENsYXNzKGgpfXZhciBwPXRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChoLGssbCxtKTt0aGlzLmFwcGx5UGxhY2VtZW50KHAsaCk7dmFyIHE9ZnVuY3Rpb24oKXt2YXIgYT1lLmhvdmVyU3RhdGU7ZS4kZWxlbWVudC50cmlnZ2VyKFwic2hvd24uYnMuXCIrZS50eXBlKSxlLmhvdmVyU3RhdGU9bnVsbCxcIm91dFwiPT1hJiZlLmxlYXZlKGUpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kdGlwLmhhc0NsYXNzKFwiZmFkZVwiKT9mLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLHEpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6cSgpfX0sYy5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQ9ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnRpcCgpLGU9ZFswXS5vZmZzZXRXaWR0aCxmPWRbMF0ub2Zmc2V0SGVpZ2h0LGc9cGFyc2VJbnQoZC5jc3MoXCJtYXJnaW4tdG9wXCIpLDEwKSxoPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLWxlZnRcIiksMTApO2lzTmFOKGcpJiYoZz0wKSxpc05hTihoKSYmKGg9MCksYi50b3ArPWcsYi5sZWZ0Kz1oLGEub2Zmc2V0LnNldE9mZnNldChkWzBdLGEuZXh0ZW5kKHt1c2luZzpmdW5jdGlvbihhKXtkLmNzcyh7dG9wOk1hdGgucm91bmQoYS50b3ApLGxlZnQ6TWF0aC5yb3VuZChhLmxlZnQpfSl9fSxiKSwwKSxkLmFkZENsYXNzKFwiaW5cIik7dmFyIGk9ZFswXS5vZmZzZXRXaWR0aCxqPWRbMF0ub2Zmc2V0SGVpZ2h0O1widG9wXCI9PWMmJmohPWYmJihiLnRvcD1iLnRvcCtmLWopO3ZhciBrPXRoaXMuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhKGMsYixpLGopO2subGVmdD9iLmxlZnQrPWsubGVmdDpiLnRvcCs9ay50b3A7dmFyIGw9L3RvcHxib3R0b20vLnRlc3QoYyksbT1sPzIqay5sZWZ0LWUraToyKmsudG9wLWYraixuPWw/XCJvZmZzZXRXaWR0aFwiOlwib2Zmc2V0SGVpZ2h0XCI7ZC5vZmZzZXQoYiksdGhpcy5yZXBsYWNlQXJyb3cobSxkWzBdW25dLGwpfSxjLnByb3RvdHlwZS5yZXBsYWNlQXJyb3c9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYXJyb3coKS5jc3MoYz9cImxlZnRcIjpcInRvcFwiLDUwKigxLWEvYikrXCIlXCIpLmNzcyhjP1widG9wXCI6XCJsZWZ0XCIsXCJcIil9LGMucHJvdG90eXBlLnNldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRpcCgpLGI9dGhpcy5nZXRUaXRsZSgpO2EuZmluZChcIi50b29sdGlwLWlubmVyXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShiKSxhLnJlbW92ZUNsYXNzKFwiZmFkZSBpbiB0b3AgYm90dG9tIGxlZnQgcmlnaHRcIil9LGMucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe1wiaW5cIiE9ZS5ob3ZlclN0YXRlJiZmLmRldGFjaCgpLGUuJGVsZW1lbnQucmVtb3ZlQXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIikudHJpZ2dlcihcImhpZGRlbi5icy5cIitlLnR5cGUpLGImJmIoKX12YXIgZT10aGlzLGY9YSh0aGlzLiR0aXApLGc9YS5FdmVudChcImhpZGUuYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gdGhpcy4kZWxlbWVudC50cmlnZ2VyKGcpLGcuaXNEZWZhdWx0UHJldmVudGVkKCk/dm9pZCAwOihmLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJmYuaGFzQ2xhc3MoXCJmYWRlXCIpP2Yub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZCkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpkKCksdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpcyl9LGMucHJvdG90eXBlLmZpeFRpdGxlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudDsoYS5hdHRyKFwidGl0bGVcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBhLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIpKSYmYS5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiLGEuYXR0cihcInRpdGxlXCIpfHxcIlwiKS5hdHRyKFwidGl0bGVcIixcIlwiKX0sYy5wcm90b3R5cGUuaGFzQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl9LGMucHJvdG90eXBlLmdldFBvc2l0aW9uPWZ1bmN0aW9uKGIpe2I9Ynx8dGhpcy4kZWxlbWVudDt2YXIgYz1iWzBdLGQ9XCJCT0RZXCI9PWMudGFnTmFtZSxlPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bnVsbD09ZS53aWR0aCYmKGU9YS5leHRlbmQoe30sZSx7d2lkdGg6ZS5yaWdodC1lLmxlZnQsaGVpZ2h0OmUuYm90dG9tLWUudG9wfSkpO3ZhciBmPWQ/e3RvcDowLGxlZnQ6MH06Yi5vZmZzZXQoKSxnPXtzY3JvbGw6ZD9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDpiLnNjcm9sbFRvcCgpfSxoPWQ/e3dpZHRoOmEod2luZG93KS53aWR0aCgpLGhlaWdodDphKHdpbmRvdykuaGVpZ2h0KCl9Om51bGw7cmV0dXJuIGEuZXh0ZW5kKHt9LGUsZyxoLGYpfSxjLnByb3RvdHlwZS5nZXRDYWxjdWxhdGVkT2Zmc2V0PWZ1bmN0aW9uKGEsYixjLGQpe3JldHVyblwiYm90dG9tXCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcInRvcFwiPT1hP3t0b3A6Yi50b3AtZCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcImxlZnRcIj09YT97dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0LWN9Ont0b3A6Yi50b3ArYi5oZWlnaHQvMi1kLzIsbGVmdDpiLmxlZnQrYi53aWR0aH19LGMucHJvdG90eXBlLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT17dG9wOjAsbGVmdDowfTtpZighdGhpcy4kdmlld3BvcnQpcmV0dXJuIGU7dmFyIGY9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZ0aGlzLm9wdGlvbnMudmlld3BvcnQucGFkZGluZ3x8MCxnPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO2lmKC9yaWdodHxsZWZ0Ly50ZXN0KGEpKXt2YXIgaD1iLnRvcC1mLWcuc2Nyb2xsLGk9Yi50b3ArZi1nLnNjcm9sbCtkO2g8Zy50b3A/ZS50b3A9Zy50b3AtaDppPmcudG9wK2cuaGVpZ2h0JiYoZS50b3A9Zy50b3ArZy5oZWlnaHQtaSl9ZWxzZXt2YXIgaj1iLmxlZnQtZixrPWIubGVmdCtmK2M7ajxnLmxlZnQ/ZS5sZWZ0PWcubGVmdC1qOms+Zy5yaWdodCYmKGUubGVmdD1nLmxlZnQrZy53aWR0aC1rKX1yZXR1cm4gZX0sYy5wcm90b3R5cGUuZ2V0VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuJGVsZW1lbnQsYz10aGlzLm9wdGlvbnM7cmV0dXJuIGE9Yi5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGl0bGU/Yy50aXRsZS5jYWxsKGJbMF0pOmMudGl0bGUpfSxjLnByb3RvdHlwZS5nZXRVSUQ9ZnVuY3Rpb24oYSl7ZG8gYSs9fn4oMWU2Kk1hdGgucmFuZG9tKCkpO3doaWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpKTtyZXR1cm4gYX0sYy5wcm90b3R5cGUudGlwPWZ1bmN0aW9uKCl7aWYoIXRoaXMuJHRpcCYmKHRoaXMuJHRpcD1hKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSksMSE9dGhpcy4kdGlwLmxlbmd0aCkpdGhyb3cgbmV3IEVycm9yKHRoaXMudHlwZStcIiBgdGVtcGxhdGVgIG9wdGlvbiBtdXN0IGNvbnNpc3Qgb2YgZXhhY3RseSAxIHRvcC1sZXZlbCBlbGVtZW50IVwiKTtyZXR1cm4gdGhpcy4kdGlwfSxjLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhcnJvdz10aGlzLiRhcnJvd3x8dGhpcy50aXAoKS5maW5kKFwiLnRvb2x0aXAtYXJyb3dcIil9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMX0sYy5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZD1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hdGhpcy5lbmFibGVkfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztiJiYoYz1hKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSksY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSksYj8oYy5pblN0YXRlLmNsaWNrPSFjLmluU3RhdGUuY2xpY2ssYy5pc0luU3RhdGVUcnVlKCk/Yy5lbnRlcihjKTpjLmxlYXZlKGMpKTpjLnRpcCgpLmhhc0NsYXNzKFwiaW5cIik/Yy5sZWF2ZShjKTpjLmVudGVyKGMpfSxjLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KSx0aGlzLmhpZGUoZnVuY3Rpb24oKXthLiRlbGVtZW50Lm9mZihcIi5cIithLnR5cGUpLnJlbW92ZURhdGEoXCJicy5cIithLnR5cGUpLGEuJHRpcCYmYS4kdGlwLmRldGFjaCgpLGEuJHRpcD1udWxsLGEuJGFycm93PW51bGwsYS4kdmlld3BvcnQ9bnVsbH0pfTt2YXIgZD1hLmZuLnRvb2x0aXA7YS5mbi50b29sdGlwPWIsYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yPWMsYS5mbi50b29sdGlwLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi50b29sdGlwPWQsdGhpc319KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5wb3BvdmVyXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7KGV8fCEvZGVzdHJveXxoaWRlLy50ZXN0KGIpKSYmKGV8fGQuZGF0YShcImJzLnBvcG92ZXJcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLmluaXQoXCJwb3BvdmVyXCIsYSxiKX07aWYoIWEuZm4udG9vbHRpcCl0aHJvdyBuZXcgRXJyb3IoXCJQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanNcIik7Yy5WRVJTSU9OPVwiMy4zLjVcIixjLkRFRkFVTFRTPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5ERUZBVUxUUyx7cGxhY2VtZW50OlwicmlnaHRcIix0cmlnZ2VyOlwiY2xpY2tcIixjb250ZW50OlwiXCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J30pLGMucHJvdG90eXBlPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpLGMucHJvdG90eXBlLmNvbnN0cnVjdG9yPWMsYy5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ERUZBVUxUU30sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCksYz10aGlzLmdldENvbnRlbnQoKTthLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5maW5kKFwiLnBvcG92ZXItY29udGVudFwiKS5jaGlsZHJlbigpLmRldGFjaCgpLmVuZCgpW3RoaXMub3B0aW9ucy5odG1sP1wic3RyaW5nXCI9PXR5cGVvZiBjP1wiaHRtbFwiOlwiYXBwZW5kXCI6XCJ0ZXh0XCJdKGMpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpblwiKSxhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5odG1sKCl8fGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmhpZGUoKX0sYy5wcm90b3R5cGUuaGFzQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl8fHRoaXMuZ2V0Q29udGVudCgpfSxjLnByb3RvdHlwZS5nZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudCxiPXRoaXMub3B0aW9ucztyZXR1cm4gYS5hdHRyKFwiZGF0YS1jb250ZW50XCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYi5jb250ZW50P2IuY29udGVudC5jYWxsKGFbMF0pOmIuY29udGVudCl9LGMucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIuYXJyb3dcIil9O3ZhciBkPWEuZm4ucG9wb3ZlcjthLmZuLnBvcG92ZXI9YixhLmZuLnBvcG92ZXIuQ29uc3RydWN0b3I9YyxhLmZuLnBvcG92ZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnBvcG92ZXI9ZCx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihjLGQpe3RoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRzY3JvbGxFbGVtZW50PWEoYShjKS5pcyhkb2N1bWVudC5ib2R5KT93aW5kb3c6YyksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGIuREVGQVVMVFMsZCksdGhpcy5zZWxlY3Rvcj0odGhpcy5vcHRpb25zLnRhcmdldHx8XCJcIikrXCIgLm5hdiBsaSA+IGFcIix0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5zY3JvbGxIZWlnaHQ9MCx0aGlzLiRzY3JvbGxFbGVtZW50Lm9uKFwic2Nyb2xsLmJzLnNjcm9sbHNweVwiLGEucHJveHkodGhpcy5wcm9jZXNzLHRoaXMpKSx0aGlzLnJlZnJlc2goKSx0aGlzLnByb2Nlc3MoKX1mdW5jdGlvbiBjKGMpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7ZXx8ZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIsZT1uZXcgYih0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYyYmZVtjXSgpfSl9Yi5WRVJTSU9OPVwiMy4zLjVcIixiLkRFRkFVTFRTPXtvZmZzZXQ6MTB9LGIucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRzY3JvbGxFbGVtZW50WzBdLnNjcm9sbEhlaWdodHx8TWF0aC5tYXgodGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCl9LGIucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9XCJvZmZzZXRcIixkPTA7dGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLnNjcm9sbEhlaWdodD10aGlzLmdldFNjcm9sbEhlaWdodCgpLGEuaXNXaW5kb3codGhpcy4kc2Nyb2xsRWxlbWVudFswXSl8fChjPVwicG9zaXRpb25cIixkPXRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkpLHRoaXMuJGJvZHkuZmluZCh0aGlzLnNlbGVjdG9yKS5tYXAoZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGU9Yi5kYXRhKFwidGFyZ2V0XCIpfHxiLmF0dHIoXCJocmVmXCIpLGY9L14jLi8udGVzdChlKSYmYShlKTtyZXR1cm4gZiYmZi5sZW5ndGgmJmYuaXMoXCI6dmlzaWJsZVwiKSYmW1tmW2NdKCkudG9wK2QsZV1dfHxudWxsfSkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhWzBdLWJbMF19KS5lYWNoKGZ1bmN0aW9uKCl7Yi5vZmZzZXRzLnB1c2godGhpc1swXSksYi50YXJnZXRzLnB1c2godGhpc1sxXSl9KX0sYi5wcm90b3R5cGUucHJvY2Vzcz1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSt0aGlzLm9wdGlvbnMub2Zmc2V0LGM9dGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxkPXRoaXMub3B0aW9ucy5vZmZzZXQrYy10aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpLGU9dGhpcy5vZmZzZXRzLGY9dGhpcy50YXJnZXRzLGc9dGhpcy5hY3RpdmVUYXJnZXQ7aWYodGhpcy5zY3JvbGxIZWlnaHQhPWMmJnRoaXMucmVmcmVzaCgpLGI+PWQpcmV0dXJuIGchPShhPWZbZi5sZW5ndGgtMV0pJiZ0aGlzLmFjdGl2YXRlKGEpO2lmKGcmJmI8ZVswXSlyZXR1cm4gdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLmNsZWFyKCk7Zm9yKGE9ZS5sZW5ndGg7YS0tOylnIT1mW2FdJiZiPj1lW2FdJiYodm9pZCAwPT09ZVthKzFdfHxiPGVbYSsxXSkmJnRoaXMuYWN0aXZhdGUoZlthXSl9LGIucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKGIpe3RoaXMuYWN0aXZlVGFyZ2V0PWIsdGhpcy5jbGVhcigpO3ZhciBjPXRoaXMuc2VsZWN0b3IrJ1tkYXRhLXRhcmdldD1cIicrYisnXCJdLCcrdGhpcy5zZWxlY3RvcisnW2hyZWY9XCInK2IrJ1wiXScsZD1hKGMpLnBhcmVudHMoXCJsaVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtkLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmKGQ9ZC5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLFxyXG5kLnRyaWdnZXIoXCJhY3RpdmF0ZS5icy5zY3JvbGxzcHlcIil9LGIucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7YSh0aGlzLnNlbGVjdG9yKS5wYXJlbnRzVW50aWwodGhpcy5vcHRpb25zLnRhcmdldCxcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBkPWEuZm4uc2Nyb2xsc3B5O2EuZm4uc2Nyb2xsc3B5PWMsYS5mbi5zY3JvbGxzcHkuQ29uc3RydWN0b3I9YixhLmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uc2Nyb2xsc3B5PWQsdGhpc30sYSh3aW5kb3cpLm9uKFwibG9hZC5icy5zY3JvbGxzcHkuZGF0YS1hcGlcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2MuY2FsbChiLGIuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50YWJcIik7ZXx8ZC5kYXRhKFwiYnMudGFiXCIsZT1uZXcgYyh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBjPWZ1bmN0aW9uKGIpe3RoaXMuZWxlbWVudD1hKGIpfTtjLlZFUlNJT049XCIzLjMuNVwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciBiPXRoaXMuZWxlbWVudCxjPWIuY2xvc2VzdChcInVsOm5vdCguZHJvcGRvd24tbWVudSlcIiksZD1iLmRhdGEoXCJ0YXJnZXRcIik7aWYoZHx8KGQ9Yi5hdHRyKFwiaHJlZlwiKSxkPWQmJmQucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSksIWIucGFyZW50KFwibGlcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpe3ZhciBlPWMuZmluZChcIi5hY3RpdmU6bGFzdCBhXCIpLGY9YS5FdmVudChcImhpZGUuYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6YlswXX0pLGc9YS5FdmVudChcInNob3cuYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6ZVswXX0pO2lmKGUudHJpZ2dlcihmKSxiLnRyaWdnZXIoZyksIWcuaXNEZWZhdWx0UHJldmVudGVkKCkmJiFmLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgaD1hKGQpO3RoaXMuYWN0aXZhdGUoYi5jbG9zZXN0KFwibGlcIiksYyksdGhpcy5hY3RpdmF0ZShoLGgucGFyZW50KCksZnVuY3Rpb24oKXtlLnRyaWdnZXIoe3R5cGU6XCJoaWRkZW4uYnMudGFiXCIscmVsYXRlZFRhcmdldDpiWzBdfSksYi50cmlnZ2VyKHt0eXBlOlwic2hvd24uYnMudGFiXCIscmVsYXRlZFRhcmdldDplWzBdfSl9KX19fSxjLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihiLGQsZSl7ZnVuY3Rpb24gZigpe2cucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcIj4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLGIuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksaD8oYlswXS5vZmZzZXRXaWR0aCxiLmFkZENsYXNzKFwiaW5cIikpOmIucmVtb3ZlQ2xhc3MoXCJmYWRlXCIpLGIucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoJiZiLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5lbmQoKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxlJiZlKCl9dmFyIGc9ZC5maW5kKFwiPiAuYWN0aXZlXCIpLGg9ZSYmYS5zdXBwb3J0LnRyYW5zaXRpb24mJihnLmxlbmd0aCYmZy5oYXNDbGFzcyhcImZhZGVcIil8fCEhZC5maW5kKFwiPiAuZmFkZVwiKS5sZW5ndGgpO2cubGVuZ3RoJiZoP2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZikuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpmKCksZy5yZW1vdmVDbGFzcyhcImluXCIpfTt2YXIgZD1hLmZuLnRhYjthLmZuLnRhYj1iLGEuZm4udGFiLkNvbnN0cnVjdG9yPWMsYS5mbi50YWIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnRhYj1kLHRoaXN9O3ZhciBlPWZ1bmN0aW9uKGMpe2MucHJldmVudERlZmF1bHQoKSxiLmNhbGwoYSh0aGlzKSxcInNob3dcIil9O2EoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScsZSkub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsZSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5hZmZpeFwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiO2V8fGQuZGF0YShcImJzLmFmZml4XCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGM9ZnVuY3Rpb24oYixkKXt0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLiR0YXJnZXQ9YSh0aGlzLm9wdGlvbnMudGFyZ2V0KS5vbihcInNjcm9sbC5icy5hZmZpeC5kYXRhLWFwaVwiLGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpKS5vbihcImNsaWNrLmJzLmFmZml4LmRhdGEtYXBpXCIsYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLHRoaXMpKSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5hZmZpeGVkPW51bGwsdGhpcy51bnBpbj1udWxsLHRoaXMucGlubmVkT2Zmc2V0PW51bGwsdGhpcy5jaGVja1Bvc2l0aW9uKCl9O2MuVkVSU0lPTj1cIjMuMy41XCIsYy5SRVNFVD1cImFmZml4IGFmZml4LXRvcCBhZmZpeC1ib3R0b21cIixjLkRFRkFVTFRTPXtvZmZzZXQ6MCx0YXJnZXQ6d2luZG93fSxjLnByb3RvdHlwZS5nZXRTdGF0ZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCksZj10aGlzLiRlbGVtZW50Lm9mZnNldCgpLGc9dGhpcy4kdGFyZ2V0LmhlaWdodCgpO2lmKG51bGwhPWMmJlwidG9wXCI9PXRoaXMuYWZmaXhlZClyZXR1cm4gYz5lP1widG9wXCI6ITE7aWYoXCJib3R0b21cIj09dGhpcy5hZmZpeGVkKXJldHVybiBudWxsIT1jP2UrdGhpcy51bnBpbjw9Zi50b3A/ITE6XCJib3R0b21cIjphLWQ+PWUrZz8hMTpcImJvdHRvbVwiO3ZhciBoPW51bGw9PXRoaXMuYWZmaXhlZCxpPWg/ZTpmLnRvcCxqPWg/ZzpiO3JldHVybiBudWxsIT1jJiZjPj1lP1widG9wXCI6bnVsbCE9ZCYmaStqPj1hLWQ/XCJib3R0b21cIjohMX0sYy5wcm90b3R5cGUuZ2V0UGlubmVkT2Zmc2V0PWZ1bmN0aW9uKCl7aWYodGhpcy5waW5uZWRPZmZzZXQpcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYy5SRVNFVCkuYWRkQ2xhc3MoXCJhZmZpeFwiKTt2YXIgYT10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCksYj10aGlzLiRlbGVtZW50Lm9mZnNldCgpO3JldHVybiB0aGlzLnBpbm5lZE9mZnNldD1iLnRvcC1hfSxjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcD1mdW5jdGlvbigpe3NldFRpbWVvdXQoYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcyksMSl9LGMucHJvdG90eXBlLmNoZWNrUG9zaXRpb249ZnVuY3Rpb24oKXtpZih0aGlzLiRlbGVtZW50LmlzKFwiOnZpc2libGVcIikpe3ZhciBiPXRoaXMuJGVsZW1lbnQuaGVpZ2h0KCksZD10aGlzLm9wdGlvbnMub2Zmc2V0LGU9ZC50b3AsZj1kLmJvdHRvbSxnPU1hdGgubWF4KGEoZG9jdW1lbnQpLmhlaWdodCgpLGEoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkpO1wib2JqZWN0XCIhPXR5cGVvZiBkJiYoZj1lPWQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihlPWQudG9wKHRoaXMuJGVsZW1lbnQpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoZj1kLmJvdHRvbSh0aGlzLiRlbGVtZW50KSk7dmFyIGg9dGhpcy5nZXRTdGF0ZShnLGIsZSxmKTtpZih0aGlzLmFmZml4ZWQhPWgpe251bGwhPXRoaXMudW5waW4mJnRoaXMuJGVsZW1lbnQuY3NzKFwidG9wXCIsXCJcIik7dmFyIGk9XCJhZmZpeFwiKyhoP1wiLVwiK2g6XCJcIiksaj1hLkV2ZW50KGkrXCIuYnMuYWZmaXhcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGopLGouaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO3RoaXMuYWZmaXhlZD1oLHRoaXMudW5waW49XCJib3R0b21cIj09aD90aGlzLmdldFBpbm5lZE9mZnNldCgpOm51bGwsdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjLlJFU0VUKS5hZGRDbGFzcyhpKS50cmlnZ2VyKGkucmVwbGFjZShcImFmZml4XCIsXCJhZmZpeGVkXCIpK1wiLmJzLmFmZml4XCIpfVwiYm90dG9tXCI9PWgmJnRoaXMuJGVsZW1lbnQub2Zmc2V0KHt0b3A6Zy1iLWZ9KX19O3ZhciBkPWEuZm4uYWZmaXg7YS5mbi5hZmZpeD1iLGEuZm4uYWZmaXguQ29uc3RydWN0b3I9YyxhLmZuLmFmZml4Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hZmZpeD1kLHRoaXN9LGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoKTtkLm9mZnNldD1kLm9mZnNldHx8e30sbnVsbCE9ZC5vZmZzZXRCb3R0b20mJihkLm9mZnNldC5ib3R0b209ZC5vZmZzZXRCb3R0b20pLG51bGwhPWQub2Zmc2V0VG9wJiYoZC5vZmZzZXQudG9wPWQub2Zmc2V0VG9wKSxiLmNhbGwoYyxkKX0pfSl9KGpRdWVyeSk7IiwiLyoqXHJcbiogQHByZXNlcnZlIEhUTUw1IFNoaXYgcHJldjMuNy4xIHwgQGFmYXJrYXMgQGpkYWx0b24gQGpvbl9uZWFsIEByZW0gfCBNSVQvR1BMMiBMaWNlbnNlZFxyXG4qL1xyXG47KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuLypqc2hpbnQgZXZpbDp0cnVlICovXHJcbiAgLyoqIHZlcnNpb24gKi9cclxuICB2YXIgdmVyc2lvbiA9ICczLjcuMCc7XHJcblxyXG4gIC8qKiBQcmVzZXQgb3B0aW9ucyAqL1xyXG4gIHZhciBvcHRpb25zID0gd2luZG93Lmh0bWw1IHx8IHt9O1xyXG5cclxuICAvKiogVXNlZCB0byBza2lwIHByb2JsZW0gZWxlbWVudHMgKi9cclxuICB2YXIgcmVTa2lwID0gL148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2k7XHJcblxyXG4gIC8qKiBOb3QgYWxsIGVsZW1lbnRzIGNhbiBiZSBjbG9uZWQgaW4gSUUgKiovXHJcbiAgdmFyIHNhdmVDbG9uZXMgPSAvXig/OmF8Ynxjb2RlfGRpdnxmaWVsZHNldHxoMXxoMnxoM3xoNHxoNXxoNnxpfGxhYmVsfGxpfG9sfHB8cXxzcGFufHN0cm9uZ3xzdHlsZXx0YWJsZXx0Ym9keXx0ZHx0aHx0cnx1bCkkL2k7XHJcblxyXG4gIC8qKiBEZXRlY3Qgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyBkZWZhdWx0IGh0bWw1IHN0eWxlcyAqL1xyXG4gIHZhciBzdXBwb3J0c0h0bWw1U3R5bGVzO1xyXG5cclxuICAvKiogTmFtZSBvZiB0aGUgZXhwYW5kbywgdG8gd29yayB3aXRoIG11bHRpcGxlIGRvY3VtZW50cyBvciB0byByZS1zaGl2IG9uZSBkb2N1bWVudCAqL1xyXG4gIHZhciBleHBhbmRvID0gJ19odG1sNXNoaXYnO1xyXG5cclxuICAvKiogVGhlIGlkIGZvciB0aGUgdGhlIGRvY3VtZW50cyBleHBhbmRvICovXHJcbiAgdmFyIGV4cGFuSUQgPSAwO1xyXG5cclxuICAvKiogQ2FjaGVkIGRhdGEgZm9yIGVhY2ggZG9jdW1lbnQgKi9cclxuICB2YXIgZXhwYW5kb0RhdGEgPSB7fTtcclxuXHJcbiAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHVua25vd24gZWxlbWVudHMgKi9cclxuICB2YXIgc3VwcG9ydHNVbmtub3duRWxlbWVudHM7XHJcblxyXG4gIChmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYS5pbm5lckhUTUwgPSAnPHh5ej48L3h5ej4nO1xyXG4gICAgICAgIC8vaWYgdGhlIGhpZGRlbiBwcm9wZXJ0eSBpcyBpbXBsZW1lbnRlZCB3ZSBjYW4gYXNzdW1lLCB0aGF0IHRoZSBicm93c2VyIHN1cHBvcnRzIGJhc2ljIEhUTUw1IFN0eWxlc1xyXG4gICAgICAgIHN1cHBvcnRzSHRtbDVTdHlsZXMgPSAoJ2hpZGRlbicgaW4gYSk7XHJcblxyXG4gICAgICAgIHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzID0gYS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxIHx8IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIHVuYWJsZSB0byBzaGl2XHJcbiAgICAgICAgICAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkoJ2EnKTtcclxuICAgICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdHlwZW9mIGZyYWcuY2xvbmVOb2RlID09ICd1bmRlZmluZWQnIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgICAgICAgICAgdHlwZW9mIGZyYWcuY3JlYXRlRWxlbWVudCA9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIGRldGVjdGlvbiBmYWlscyA9PiB1bmFibGUgdG8gc2hpdlxyXG4gICAgICBzdXBwb3J0c0h0bWw1U3R5bGVzID0gdHJ1ZTtcclxuICAgICAgc3VwcG9ydHNVbmtub3duRWxlbWVudHMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICB9KCkpO1xyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHN0eWxlIHNoZWV0IHdpdGggdGhlIGdpdmVuIENTUyB0ZXh0IGFuZCBhZGRzIGl0IHRvIHRoZSBkb2N1bWVudC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjc3NUZXh0IFRoZSBDU1MgdGV4dC5cclxuICAgKiBAcmV0dXJucyB7U3R5bGVTaGVldH0gVGhlIHN0eWxlIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LCBjc3NUZXh0KSB7XHJcbiAgICB2YXIgcCA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgICAgIHBhcmVudCA9IG93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBwLmlubmVySFRNTCA9ICd4PHN0eWxlPicgKyBjc3NUZXh0ICsgJzwvc3R5bGU+JztcclxuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKHAubGFzdENoaWxkLCBwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBgaHRtbDUuZWxlbWVudHNgIGFzIGFuIGFycmF5LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBzaGl2ZWQgZWxlbWVudCBub2RlIG5hbWVzLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRzKCkge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gaHRtbDUuZWxlbWVudHM7XHJcbiAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnRzID09ICdzdHJpbmcnID8gZWxlbWVudHMuc3BsaXQoJyAnKSA6IGVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBkYXRhIGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIGRvY3VtZW50XHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudC5cclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3Qgb2YgZGF0YS5cclxuICAgKi9cclxuICBmdW5jdGlvbiBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KSB7XHJcbiAgICB2YXIgZGF0YSA9IGV4cGFuZG9EYXRhW293bmVyRG9jdW1lbnRbZXhwYW5kb11dO1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgZGF0YSA9IHt9O1xyXG4gICAgICAgIGV4cGFuSUQrKztcclxuICAgICAgICBvd25lckRvY3VtZW50W2V4cGFuZG9dID0gZXhwYW5JRDtcclxuICAgICAgICBleHBhbmRvRGF0YVtleHBhbklEXSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybnMgYSBzaGl2ZWQgZWxlbWVudCBmb3IgdGhlIGdpdmVuIG5vZGVOYW1lIGFuZCBkb2N1bWVudFxyXG4gICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZSBuYW1lIG9mIHRoZSBlbGVtZW50XHJcbiAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgY29udGV4dCBkb2N1bWVudC5cclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlTmFtZSwgb3duZXJEb2N1bWVudCwgZGF0YSl7XHJcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZihzdXBwb3J0c1Vua25vd25FbGVtZW50cyl7XHJcbiAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICBkYXRhID0gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbm9kZTtcclxuXHJcbiAgICBpZiAoZGF0YS5jYWNoZVtub2RlTmFtZV0pIHtcclxuICAgICAgICBub2RlID0gZGF0YS5jYWNoZVtub2RlTmFtZV0uY2xvbmVOb2RlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHNhdmVDbG9uZXMudGVzdChub2RlTmFtZSkpIHtcclxuICAgICAgICBub2RlID0gKGRhdGEuY2FjaGVbbm9kZU5hbWVdID0gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKSkuY2xvbmVOb2RlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUgPSBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF2b2lkIGFkZGluZyBzb21lIGVsZW1lbnRzIHRvIGZyYWdtZW50cyBpbiBJRSA8IDkgYmVjYXVzZVxyXG4gICAgLy8gKiBBdHRyaWJ1dGVzIGxpa2UgYG5hbWVgIG9yIGB0eXBlYCBjYW5ub3QgYmUgc2V0L2NoYW5nZWQgb25jZSBhbiBlbGVtZW50XHJcbiAgICAvLyAgIGlzIGluc2VydGVkIGludG8gYSBkb2N1bWVudC9mcmFnbWVudFxyXG4gICAgLy8gKiBMaW5rIGVsZW1lbnRzIHdpdGggYHNyY2AgYXR0cmlidXRlcyB0aGF0IGFyZSBpbmFjY2Vzc2libGUsIGFzIHdpdGhcclxuICAgIC8vICAgYSA0MDMgcmVzcG9uc2UsIHdpbGwgY2F1c2UgdGhlIHRhYi93aW5kb3cgdG8gY3Jhc2hcclxuICAgIC8vICogU2NyaXB0IGVsZW1lbnRzIGFwcGVuZGVkIHRvIGZyYWdtZW50cyB3aWxsIGV4ZWN1dGUgd2hlbiB0aGVpciBgc3JjYFxyXG4gICAgLy8gICBvciBgdGV4dGAgcHJvcGVydHkgaXMgc2V0XHJcbiAgICByZXR1cm4gbm9kZS5jYW5IYXZlQ2hpbGRyZW4gJiYgIXJlU2tpcC50ZXN0KG5vZGVOYW1lKSAmJiAhbm9kZS50YWdVcm4gPyBkYXRhLmZyYWcuYXBwZW5kQ2hpbGQobm9kZSkgOiBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyBhIHNoaXZlZCBEb2N1bWVudEZyYWdtZW50IGZvciB0aGUgZ2l2ZW4gZG9jdW1lbnRcclxuICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudEZyYWdtZW50KG93bmVyRG9jdW1lbnQsIGRhdGEpe1xyXG4gICAgaWYgKCFvd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgb3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgfVxyXG4gICAgaWYoc3VwcG9ydHNVbmtub3duRWxlbWVudHMpe1xyXG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIH1cclxuICAgIGRhdGEgPSBkYXRhIHx8IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xyXG4gICAgdmFyIGNsb25lID0gZGF0YS5mcmFnLmNsb25lTm9kZSgpLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGVsZW1zID0gZ2V0RWxlbWVudHMoKSxcclxuICAgICAgICBsID0gZWxlbXMubGVuZ3RoO1xyXG4gICAgZm9yKDtpPGw7aSsrKXtcclxuICAgICAgICBjbG9uZS5jcmVhdGVFbGVtZW50KGVsZW1zW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNoaXZzIHRoZSBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YCBtZXRob2RzIG9mIHRoZSBkb2N1bWVudC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgb2YgdGhlIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNoaXZNZXRob2RzKG93bmVyRG9jdW1lbnQsIGRhdGEpIHtcclxuICAgIGlmICghZGF0YS5jYWNoZSkge1xyXG4gICAgICAgIGRhdGEuY2FjaGUgPSB7fTtcclxuICAgICAgICBkYXRhLmNyZWF0ZUVsZW0gPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgZGF0YS5jcmVhdGVGcmFnID0gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50O1xyXG4gICAgICAgIGRhdGEuZnJhZyA9IGRhdGEuY3JlYXRlRnJhZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihub2RlTmFtZSkge1xyXG4gICAgICAvL2Fib3J0IHNoaXZcclxuICAgICAgaWYgKCFodG1sNS5zaGl2TWV0aG9kcykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobm9kZU5hbWUsIG93bmVyRG9jdW1lbnQsIGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBGdW5jdGlvbignaCxmJywgJ3JldHVybiBmdW5jdGlvbigpeycgK1xyXG4gICAgICAndmFyIG49Zi5jbG9uZU5vZGUoKSxjPW4uY3JlYXRlRWxlbWVudDsnICtcclxuICAgICAgJ2guc2hpdk1ldGhvZHMmJignICtcclxuICAgICAgICAvLyB1bnJvbGwgdGhlIGBjcmVhdGVFbGVtZW50YCBjYWxsc1xyXG4gICAgICAgIGdldEVsZW1lbnRzKCkuam9pbigpLnJlcGxhY2UoL1tcXHdcXC06XSsvZywgZnVuY3Rpb24obm9kZU5hbWUpIHtcclxuICAgICAgICAgIGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XHJcbiAgICAgICAgICBkYXRhLmZyYWcuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gJ2MoXCInICsgbm9kZU5hbWUgKyAnXCIpJztcclxuICAgICAgICB9KSArXHJcbiAgICAgICcpO3JldHVybiBufSdcclxuICAgICkoaHRtbDUsIGRhdGEuZnJhZyk7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLyoqXHJcbiAgICogU2hpdnMgdGhlIGdpdmVuIGRvY3VtZW50LlxyXG4gICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50IHRvIHNoaXYuXHJcbiAgICogQHJldHVybnMge0RvY3VtZW50fSBUaGUgc2hpdmVkIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNoaXZEb2N1bWVudChvd25lckRvY3VtZW50KSB7XHJcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YSA9IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xyXG5cclxuICAgIGlmIChodG1sNS5zaGl2Q1NTICYmICFzdXBwb3J0c0h0bWw1U3R5bGVzICYmICFkYXRhLmhhc0NTUykge1xyXG4gICAgICBkYXRhLmhhc0NTUyA9ICEhYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LFxyXG4gICAgICAgIC8vIGNvcnJlY3RzIGJsb2NrIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUU2LzcvOC85XHJcbiAgICAgICAgJ2FydGljbGUsYXNpZGUsZGlhbG9nLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja30nICtcclxuICAgICAgICAvLyBhZGRzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUU2LzcvOC85XHJcbiAgICAgICAgJ21hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9JyArXHJcbiAgICAgICAgLy8gaGlkZXMgbm9uLXJlbmRlcmVkIGVsZW1lbnRzXHJcbiAgICAgICAgJ3RlbXBsYXRle2Rpc3BsYXk6bm9uZX0nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKSB7XHJcbiAgICAgIHNoaXZNZXRob2RzKG93bmVyRG9jdW1lbnQsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGBodG1sNWAgb2JqZWN0IGlzIGV4cG9zZWQgc28gdGhhdCBtb3JlIGVsZW1lbnRzIGNhbiBiZSBzaGl2ZWQgYW5kXHJcbiAgICogZXhpc3Rpbmcgc2hpdmluZyBjYW4gYmUgZGV0ZWN0ZWQgb24gaWZyYW1lcy5cclxuICAgKiBAdHlwZSBPYmplY3RcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqXHJcbiAgICogLy8gb3B0aW9ucyBjYW4gYmUgY2hhbmdlZCBiZWZvcmUgdGhlIHNjcmlwdCBpcyBpbmNsdWRlZFxyXG4gICAqIGh0bWw1ID0geyAnZWxlbWVudHMnOiAnbWFyayBzZWN0aW9uJywgJ3NoaXZDU1MnOiBmYWxzZSwgJ3NoaXZNZXRob2RzJzogZmFsc2UgfTtcclxuICAgKi9cclxuICB2YXIgaHRtbDUgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIG5vZGUgbmFtZXMgb2YgdGhlIGVsZW1lbnRzIHRvIHNoaXYuXHJcbiAgICAgKiBAbWVtYmVyT2YgaHRtbDVcclxuICAgICAqIEB0eXBlIEFycmF5fFN0cmluZ1xyXG4gICAgICovXHJcbiAgICAnZWxlbWVudHMnOiBvcHRpb25zLmVsZW1lbnRzIHx8ICdhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHByb2dyZXNzIHNlY3Rpb24gc3VtbWFyeSB0ZW1wbGF0ZSB0aW1lIHZpZGVvJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgdmVyc2lvbiBvZiBodG1sNXNoaXZcclxuICAgICAqL1xyXG4gICAgJ3ZlcnNpb24nOiB2ZXJzaW9uLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIEhUTUw1IHN0eWxlIHNoZWV0IHNob3VsZCBiZSBpbnNlcnRlZC5cclxuICAgICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICAnc2hpdkNTUyc6IChvcHRpb25zLnNoaXZDU1MgIT09IGZhbHNlKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIGVxdWFsIHRvIHRydWUgaWYgYSBicm93c2VyIHN1cHBvcnRzIGNyZWF0aW5nIHVua25vd24vSFRNTDUgZWxlbWVudHNcclxuICAgICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAgICogQHR5cGUgYm9vbGVhblxyXG4gICAgICovXHJcbiAgICAnc3VwcG9ydHNVbmtub3duRWxlbWVudHMnOiBzdXBwb3J0c1Vua25vd25FbGVtZW50cyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBkb2N1bWVudCdzIGBjcmVhdGVFbGVtZW50YCBhbmQgYGNyZWF0ZURvY3VtZW50RnJhZ21lbnRgXHJcbiAgICAgKiBtZXRob2RzIHNob3VsZCBiZSBvdmVyd3JpdHRlbi5cclxuICAgICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICAnc2hpdk1ldGhvZHMnOiAob3B0aW9ucy5zaGl2TWV0aG9kcyAhPT0gZmFsc2UpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBzdHJpbmcgdG8gZGVzY3JpYmUgdGhlIHR5cGUgb2YgYGh0bWw1YCBvYmplY3QgKFwiZGVmYXVsdFwiIG9yIFwiZGVmYXVsdCBwcmludFwiKS5cclxuICAgICAqIEBtZW1iZXJPZiBodG1sNVxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgICd0eXBlJzogJ2RlZmF1bHQnLFxyXG5cclxuICAgIC8vIHNoaXZzIHRoZSBkb2N1bWVudCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBgaHRtbDVgIG9iamVjdCBvcHRpb25zXHJcbiAgICAnc2hpdkRvY3VtZW50Jzogc2hpdkRvY3VtZW50LFxyXG5cclxuICAgIC8vY3JlYXRlcyBhIHNoaXZlZCBlbGVtZW50XHJcbiAgICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50LFxyXG5cclxuICAgIC8vY3JlYXRlcyBhIHNoaXZlZCBkb2N1bWVudEZyYWdtZW50XHJcbiAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50OiBjcmVhdGVEb2N1bWVudEZyYWdtZW50XHJcbiAgfTtcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIC8vIGV4cG9zZSBodG1sNVxyXG4gIHdpbmRvdy5odG1sNSA9IGh0bWw1O1xyXG5cclxuICAvLyBzaGl2IHRoZSBkb2N1bWVudFxyXG4gIHNoaXZEb2N1bWVudChkb2N1bWVudCk7XHJcblxyXG59KHRoaXMsIGRvY3VtZW50KSk7XHJcbiIsIi8qZ2xvYmFsIGpRdWVyeSAqL1xyXG4vKiFcclxuKiBGaXRUZXh0LmpzIDEuMlxyXG4qXHJcbiogQ29weXJpZ2h0IDIwMTEsIERhdmUgUnVwZXJ0IGh0dHA6Ly9kYXZlcnVwZXJ0LmNvbVxyXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlXHJcbiogaHR0cDovL3NhbS56b3kub3JnL3d0ZnBsL1xyXG4qXHJcbiogRGF0ZTogVGh1IE1heSAwNSAxNDoyMzowMCAyMDExIC0wNjAwXHJcbiovXHJcblxyXG4oZnVuY3Rpb24oICQgKXtcclxuXHJcbiAgJC5mbi5maXRUZXh0ID0gZnVuY3Rpb24oIGtvbXByZXNzb3IsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgLy8gU2V0dXAgb3B0aW9uc1xyXG4gICAgdmFyIGNvbXByZXNzb3IgPSBrb21wcmVzc29yIHx8IDEsXHJcbiAgICAgICAgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAnbWluRm9udFNpemUnIDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxyXG4gICAgICAgICAgJ21heEZvbnRTaXplJyA6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIFN0b3JlIHRoZSBvYmplY3RcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIFJlc2l6ZXIoKSByZXNpemVzIGl0ZW1zIGJhc2VkIG9uIHRoZSBvYmplY3Qgd2lkdGggZGl2aWRlZCBieSB0aGUgY29tcHJlc3NvciAqIDEwXHJcbiAgICAgIHZhciByZXNpemVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICR0aGlzLmNzcygnZm9udC1zaXplJywgTWF0aC5tYXgoTWF0aC5taW4oJHRoaXMud2lkdGgoKSAvIChjb21wcmVzc29yKjEwKSwgcGFyc2VGbG9hdChzZXR0aW5ncy5tYXhGb250U2l6ZSkpLCBwYXJzZUZsb2F0KHNldHRpbmdzLm1pbkZvbnRTaXplKSkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQ2FsbCBvbmNlIHRvIHNldC5cclxuICAgICAgcmVzaXplcigpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBvbiByZXNpemUuIE9wZXJhIGRlYm91bmNlcyB0aGVpciByZXNpemUgYnkgZGVmYXVsdC5cclxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuZml0dGV4dCBvcmllbnRhdGlvbmNoYW5nZS5maXR0ZXh0JywgcmVzaXplcik7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG59KSggalF1ZXJ5ICk7XHJcbiIsIi8qISBqUXVlcnkgdjEuOS4xIHwgKGMpIDIwMDUsIDIwMTIgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2Vcbi8vQCBzb3VyY2VNYXBwaW5nVVJMPWpxdWVyeS5taW4ubWFwXG4qLyhmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT10eXBlb2YgdCxvPWUuZG9jdW1lbnQsYT1lLmxvY2F0aW9uLHM9ZS5qUXVlcnksdT1lLiQsbD17fSxjPVtdLHA9XCIxLjkuMVwiLGY9Yy5jb25jYXQsZD1jLnB1c2gsaD1jLnNsaWNlLGc9Yy5pbmRleE9mLG09bC50b1N0cmluZyx5PWwuaGFzT3duUHJvcGVydHksdj1wLnRyaW0sYj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgYi5mbi5pbml0KGUsdCxyKX0seD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2Usdz0vXFxTKy9nLFQ9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLE49L14oPzooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxrPS9eW1xcXSw6e31cXHNdKiQvLEU9Lyg/Ol58OnwsKSg/OlxccypcXFspKy9nLFM9L1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbXFxkYS1mQS1GXXs0fSkvZyxBPS9cIlteXCJcXFxcXFxyXFxuXSpcInx0cnVlfGZhbHNlfG51bGx8LT8oPzpcXGQrXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpL2csaj0vXi1tcy0vLEQ9Ly0oW1xcZGEtel0pL2dpLEw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfSxIPWZ1bmN0aW9uKGUpeyhvLmFkZEV2ZW50TGlzdGVuZXJ8fFwibG9hZFwiPT09ZS50eXBlfHxcImNvbXBsZXRlXCI9PT1vLnJlYWR5U3RhdGUpJiYocSgpLGIucmVhZHkoKSl9LHE9ZnVuY3Rpb24oKXtvLmFkZEV2ZW50TGlzdGVuZXI/KG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixILCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSCwhMSkpOihvLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSCksZS5kZXRhY2hFdmVudChcIm9ubG9hZFwiLEgpKX07Yi5mbj1iLnByb3RvdHlwZT17anF1ZXJ5OnAsY29uc3RydWN0b3I6Yixpbml0OmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxhO2lmKCFlKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZihpPVwiPFwiPT09ZS5jaGFyQXQoMCkmJlwiPlwiPT09ZS5jaGFyQXQoZS5sZW5ndGgtMSkmJmUubGVuZ3RoPj0zP1tudWxsLGUsbnVsbF06Ti5leGVjKGUpLCFpfHwhaVsxXSYmbilyZXR1cm4hbnx8bi5qcXVlcnk/KG58fHIpLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3RvcihuKS5maW5kKGUpO2lmKGlbMV0pe2lmKG49biBpbnN0YW5jZW9mIGI/blswXTpuLGIubWVyZ2UodGhpcyxiLnBhcnNlSFRNTChpWzFdLG4mJm4ubm9kZVR5cGU/bi5vd25lckRvY3VtZW50fHxuOm8sITApKSxDLnRlc3QoaVsxXSkmJmIuaXNQbGFpbk9iamVjdChuKSlmb3IoaSBpbiBuKWIuaXNGdW5jdGlvbih0aGlzW2ldKT90aGlzW2ldKG5baV0pOnRoaXMuYXR0cihpLG5baV0pO3JldHVybiB0aGlzfWlmKGE9by5nZXRFbGVtZW50QnlJZChpWzJdKSxhJiZhLnBhcmVudE5vZGUpe2lmKGEuaWQhPT1pWzJdKXJldHVybiByLmZpbmQoZSk7dGhpcy5sZW5ndGg9MSx0aGlzWzBdPWF9cmV0dXJuIHRoaXMuY29udGV4dD1vLHRoaXMuc2VsZWN0b3I9ZSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6Yi5pc0Z1bmN0aW9uKGUpP3IucmVhZHkoZSk6KGUuc2VsZWN0b3IhPT10JiYodGhpcy5zZWxlY3Rvcj1lLnNlbGVjdG9yLHRoaXMuY29udGV4dD1lLmNvbnRleHQpLGIubWFrZUFycmF5KGUsdGhpcykpfSxzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gaC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dGhpcy50b0FycmF5KCk6MD5lP3RoaXNbdGhpcy5sZW5ndGgrZV06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PWIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0LmNvbnRleHQ9dGhpcy5jb250ZXh0LHR9LGVhY2g6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYi5lYWNoKHRoaXMsZSx0KX0scmVhZHk6ZnVuY3Rpb24oZSl7cmV0dXJuIGIucmVhZHkucHJvbWlzZSgpLmRvbmUoZSksdGhpc30sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKygwPmU/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobj49MCYmdD5uP1t0aGlzW25dXTpbXSl9LG1hcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYi5tYXAodGhpcyxmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuLHQpfSkpfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmQsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LGIuZm4uaW5pdC5wcm90b3R5cGU9Yi5mbixiLmV4dGVuZD1iLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLG4scixpLG8sYSxzPWFyZ3VtZW50c1swXXx8e30sdT0xLGw9YXJndW1lbnRzLmxlbmd0aCxjPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHMmJihjPXMscz1hcmd1bWVudHNbMV18fHt9LHU9MiksXCJvYmplY3RcIj09dHlwZW9mIHN8fGIuaXNGdW5jdGlvbihzKXx8KHM9e30pLGw9PT11JiYocz10aGlzLC0tdSk7bD51O3UrKylpZihudWxsIT0obz1hcmd1bWVudHNbdV0pKWZvcihpIGluIG8pZT1zW2ldLHI9b1tpXSxzIT09ciYmKGMmJnImJihiLmlzUGxhaW5PYmplY3Qocil8fChuPWIuaXNBcnJheShyKSkpPyhuPyhuPSExLGE9ZSYmYi5pc0FycmF5KGUpP2U6W10pOmE9ZSYmYi5pc1BsYWluT2JqZWN0KGUpP2U6e30sc1tpXT1iLmV4dGVuZChjLGEscikpOnIhPT10JiYoc1tpXT1yKSk7cmV0dXJuIHN9LGIuZXh0ZW5kKHtub0NvbmZsaWN0OmZ1bmN0aW9uKHQpe3JldHVybiBlLiQ9PT1iJiYoZS4kPXUpLHQmJmUualF1ZXJ5PT09YiYmKGUualF1ZXJ5PXMpLGJ9LGlzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGUpe2U/Yi5yZWFkeVdhaXQrKzpiLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oZSl7aWYoZT09PSEwPyEtLWIucmVhZHlXYWl0OiFiLmlzUmVhZHkpe2lmKCFvLmJvZHkpcmV0dXJuIHNldFRpbWVvdXQoYi5yZWFkeSk7Yi5pc1JlYWR5PSEwLGUhPT0hMCYmLS1iLnJlYWR5V2FpdD4wfHwobi5yZXNvbHZlV2l0aChvLFtiXSksYi5mbi50cmlnZ2VyJiZiKG8pLnRyaWdnZXIoXCJyZWFkeVwiKS5vZmYoXCJyZWFkeVwiKSl9fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09PWIudHlwZShlKX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT1iLnR5cGUoZSl9LGlzV2luZG93OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT1lLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGUpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KGUpKSYmaXNGaW5pdGUoZSl9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2xbbS5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXtpZighZXx8XCJvYmplY3RcIiE9PWIudHlwZShlKXx8ZS5ub2RlVHlwZXx8Yi5pc1dpbmRvdyhlKSlyZXR1cm4hMTt0cnl7aWYoZS5jb25zdHJ1Y3RvciYmIXkuY2FsbChlLFwiY29uc3RydWN0b3JcIikmJiF5LmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKG4pe3JldHVybiExfXZhciByO2ZvcihyIGluIGUpO3JldHVybiByPT09dHx8eS5jYWxsKGUscil9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgRXJyb3IoZSl9LHBhcnNlSFRNTDpmdW5jdGlvbihlLHQsbil7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0PXR8fG87dmFyIHI9Qy5leGVjKGUpLGk9IW4mJltdO3JldHVybiByP1t0LmNyZWF0ZUVsZW1lbnQoclsxXSldOihyPWIuYnVpbGRGcmFnbWVudChbZV0sdCxpKSxpJiZiKGkpLnJlbW92ZSgpLGIubWVyZ2UoW10sci5jaGlsZE5vZGVzKSl9LHBhcnNlSlNPTjpmdW5jdGlvbihuKXtyZXR1cm4gZS5KU09OJiZlLkpTT04ucGFyc2U/ZS5KU09OLnBhcnNlKG4pOm51bGw9PT1uP246XCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWIudHJpbShuKSxuJiZrLnRlc3Qobi5yZXBsYWNlKFMsXCJAXCIpLnJlcGxhY2UoQSxcIl1cIikucmVwbGFjZShFLFwiXCIpKSk/RnVuY3Rpb24oXCJyZXR1cm4gXCIrbikoKTooYi5lcnJvcihcIkludmFsaWQgSlNPTjogXCIrbiksdCl9LHBhcnNlWE1MOmZ1bmN0aW9uKG4pe3ZhciByLGk7aWYoIW58fFwic3RyaW5nXCIhPXR5cGVvZiBuKXJldHVybiBudWxsO3RyeXtlLkRPTVBhcnNlcj8oaT1uZXcgRE9NUGFyc2VyLHI9aS5wYXJzZUZyb21TdHJpbmcobixcInRleHQveG1sXCIpKToocj1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksci5hc3luYz1cImZhbHNlXCIsci5sb2FkWE1MKG4pKX1jYXRjaChvKXtyPXR9cmV0dXJuIHImJnIuZG9jdW1lbnRFbGVtZW50JiYhci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Yi5lcnJvcihcIkludmFsaWQgWE1MOiBcIituKSxyfSxub29wOmZ1bmN0aW9uKCl7fSxnbG9iYWxFdmFsOmZ1bmN0aW9uKHQpe3QmJmIudHJpbSh0KSYmKGUuZXhlY1NjcmlwdHx8ZnVuY3Rpb24odCl7ZS5ldmFsLmNhbGwoZSx0KX0pKHQpfSxjYW1lbENhc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShqLFwibXMtXCIpLnJlcGxhY2UoRCxMKX0sbm9kZU5hbWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPTAsbz1lLmxlbmd0aCxhPU0oZSk7aWYobil7aWYoYSl7Zm9yKDtvPmk7aSsrKWlmKHI9dC5hcHBseShlW2ldLG4pLHI9PT0hMSlicmVha31lbHNlIGZvcihpIGluIGUpaWYocj10LmFwcGx5KGVbaV0sbikscj09PSExKWJyZWFrfWVsc2UgaWYoYSl7Zm9yKDtvPmk7aSsrKWlmKHI9dC5jYWxsKGVbaV0saSxlW2ldKSxyPT09ITEpYnJlYWt9ZWxzZSBmb3IoaSBpbiBlKWlmKHI9dC5jYWxsKGVbaV0saSxlW2ldKSxyPT09ITEpYnJlYWs7cmV0dXJuIGV9LHRyaW06diYmIXYuY2FsbChcIlxcdWZlZmZcXHUwMGEwXCIpP2Z1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6di5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoVCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihNKE9iamVjdChlKSk/Yi5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpkLmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYodCl7aWYoZylyZXR1cm4gZy5jYWxsKHQsZSxuKTtmb3Iocj10Lmxlbmd0aCxuPW4/MD5uP01hdGgubWF4KDAscituKTpuOjA7cj5uO24rKylpZihuIGluIHQmJnRbbl09PT1lKXJldHVybiBufXJldHVybi0xfSxtZXJnZTpmdW5jdGlvbihlLG4pe3ZhciByPW4ubGVuZ3RoLGk9ZS5sZW5ndGgsbz0wO2lmKFwibnVtYmVyXCI9PXR5cGVvZiByKWZvcig7cj5vO28rKyllW2krK109bltvXTtlbHNlIHdoaWxlKG5bb10hPT10KWVbaSsrXT1uW28rK107cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1bXSxvPTAsYT1lLmxlbmd0aDtmb3Iobj0hIW47YT5vO28rKylyPSEhdChlW29dLG8pLG4hPT1yJiZpLnB1c2goZVtvXSk7cmV0dXJuIGl9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT0wLG89ZS5sZW5ndGgsYT1NKGUpLHM9W107aWYoYSlmb3IoO28+aTtpKyspcj10KGVbaV0saSxuKSxudWxsIT1yJiYoc1tzLmxlbmd0aF09cik7ZWxzZSBmb3IoaSBpbiBlKXI9dChlW2ldLGksbiksbnVsbCE9ciYmKHNbcy5sZW5ndGhdPXIpO3JldHVybiBmLmFwcGx5KFtdLHMpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG87cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG4mJihvPWVbbl0sbj1lLGU9byksYi5pc0Z1bmN0aW9uKGUpPyhyPWguY2FsbChhcmd1bWVudHMsMiksaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KG58fHRoaXMsci5jb25jYXQoaC5jYWxsKGFyZ3VtZW50cykpKX0saS5ndWlkPWUuZ3VpZD1lLmd1aWR8fGIuZ3VpZCsrLGkpOnR9LGFjY2VzczpmdW5jdGlvbihlLG4scixpLG8sYSxzKXt2YXIgdT0wLGw9ZS5sZW5ndGgsYz1udWxsPT1yO2lmKFwib2JqZWN0XCI9PT1iLnR5cGUocikpe289ITA7Zm9yKHUgaW4gciliLmFjY2VzcyhlLG4sdSxyW3VdLCEwLGEscyl9ZWxzZSBpZihpIT09dCYmKG89ITAsYi5pc0Z1bmN0aW9uKGkpfHwocz0hMCksYyYmKHM/KG4uY2FsbChlLGkpLG49bnVsbCk6KGM9bixuPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYy5jYWxsKGIoZSksbil9KSksbikpZm9yKDtsPnU7dSsrKW4oZVt1XSxyLHM/aTppLmNhbGwoZVt1XSx1LG4oZVt1XSxyKSkpO3JldHVybiBvP2U6Yz9uLmNhbGwoZSk6bD9uKGVbMF0scik6YX0sbm93OmZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9fSksYi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKHQpe2lmKCFuKWlmKG49Yi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PW8ucmVhZHlTdGF0ZSlzZXRUaW1lb3V0KGIucmVhZHkpO2Vsc2UgaWYoby5hZGRFdmVudExpc3RlbmVyKW8uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixILCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSCwhMSk7ZWxzZXtvLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSCksZS5hdHRhY2hFdmVudChcIm9ubG9hZFwiLEgpO3ZhciByPSExO3RyeXtyPW51bGw9PWUuZnJhbWVFbGVtZW50JiZvLmRvY3VtZW50RWxlbWVudH1jYXRjaChpKXt9ciYmci5kb1Njcm9sbCYmZnVuY3Rpb24gYSgpe2lmKCFiLmlzUmVhZHkpe3RyeXtyLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChlKXtyZXR1cm4gc2V0VGltZW91dChhLDUwKX1xKCksYi5yZWFkeSgpfX0oKX1yZXR1cm4gbi5wcm9taXNlKHQpfSxiLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bFtcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gTShlKXt2YXIgdD1lLmxlbmd0aCxuPWIudHlwZShlKTtyZXR1cm4gYi5pc1dpbmRvdyhlKT8hMToxPT09ZS5ub2RlVHlwZSYmdD8hMDpcImFycmF5XCI9PT1ufHxcImZ1bmN0aW9uXCIhPT1uJiYoMD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX1yPWIobyk7dmFyIF89e307ZnVuY3Rpb24gRihlKXt2YXIgdD1fW2VdPXt9O3JldHVybiBiLmVhY2goZS5tYXRjaCh3KXx8W10sZnVuY3Rpb24oZSxuKXt0W25dPSEwfSksdH1iLkNhbGxiYWNrcz1mdW5jdGlvbihlKXtlPVwic3RyaW5nXCI9PXR5cGVvZiBlP19bZV18fEYoZSk6Yi5leHRlbmQoe30sZSk7dmFyIG4scixpLG8sYSxzLHU9W10sbD0hZS5vbmNlJiZbXSxjPWZ1bmN0aW9uKHQpe2ZvcihyPWUubWVtb3J5JiZ0LGk9ITAsYT1zfHwwLHM9MCxvPXUubGVuZ3RoLG49ITA7dSYmbz5hO2ErKylpZih1W2FdLmFwcGx5KHRbMF0sdFsxXSk9PT0hMSYmZS5zdG9wT25GYWxzZSl7cj0hMTticmVha31uPSExLHUmJihsP2wubGVuZ3RoJiZjKGwuc2hpZnQoKSk6cj91PVtdOnAuZGlzYWJsZSgpKX0scD17YWRkOmZ1bmN0aW9uKCl7aWYodSl7dmFyIHQ9dS5sZW5ndGg7KGZ1bmN0aW9uIGkodCl7Yi5lYWNoKHQsZnVuY3Rpb24odCxuKXt2YXIgcj1iLnR5cGUobik7XCJmdW5jdGlvblwiPT09cj9lLnVuaXF1ZSYmcC5oYXMobil8fHUucHVzaChuKTpuJiZuLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXImJmkobil9KX0pKGFyZ3VtZW50cyksbj9vPXUubGVuZ3RoOnImJihzPXQsYyhyKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiB1JiZiLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIHI7d2hpbGUoKHI9Yi5pbkFycmF5KHQsdSxyKSk+LTEpdS5zcGxpY2UociwxKSxuJiYobz49ciYmby0tLGE+PXImJmEtLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/Yi5pbkFycmF5KGUsdSk+LTE6ISghdXx8IXUubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gdT1bXSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHU9bD1yPXQsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdX0sbG9jazpmdW5jdGlvbigpe3JldHVybiBsPXQscnx8cC5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWx9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dHx8W10sdD1bZSx0LnNsaWNlP3Quc2xpY2UoKTp0XSwhdXx8aSYmIWx8fChuP2wucHVzaCh0KTpjKHQpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIHAuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFpfX07cmV0dXJuIHB9LGIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgdD1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLGIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixiLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLGIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sbj1cInBlbmRpbmdcIixyPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBufSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gaS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHM7cmV0dXJuIGIuRGVmZXJyZWQoZnVuY3Rpb24obil7Yi5lYWNoKHQsZnVuY3Rpb24odCxvKXt2YXIgYT1vWzBdLHM9Yi5pc0Z1bmN0aW9uKGVbdF0pJiZlW3RdO2lbb1sxXV0oZnVuY3Rpb24oKXt2YXIgZT1zJiZzLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZiLmlzRnVuY3Rpb24oZS5wcm9taXNlKT9lLnByb21pc2UoKS5kb25lKG4ucmVzb2x2ZSkuZmFpbChuLnJlamVjdCkucHJvZ3Jlc3Mobi5ub3RpZnkpOm5bYStcIldpdGhcIl0odGhpcz09PXI/bi5wcm9taXNlKCk6dGhpcyxzP1tlXTphcmd1bWVudHMpfSl9KSxlPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Yi5leHRlbmQoZSxyKTpyfX0saT17fTtyZXR1cm4gci5waXBlPXIudGhlbixiLmVhY2godCxmdW5jdGlvbihlLG8pe3ZhciBhPW9bMl0scz1vWzNdO3Jbb1sxXV09YS5hZGQscyYmYS5hZGQoZnVuY3Rpb24oKXtuPXN9LHRbMV5lXVsyXS5kaXNhYmxlLHRbMl1bMl0ubG9jayksaVtvWzBdXT1mdW5jdGlvbigpe3JldHVybiBpW29bMF0rXCJXaXRoXCJdKHRoaXM9PT1pP3I6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGlbb1swXStcIldpdGhcIl09YS5maXJlV2l0aH0pLHIucHJvbWlzZShpKSxlJiZlLmNhbGwoaSxpKSxpfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1oLmNhbGwoYXJndW1lbnRzKSxyPW4ubGVuZ3RoLGk9MSE9PXJ8fGUmJmIuaXNGdW5jdGlvbihlLnByb21pc2UpP3I6MCxvPTE9PT1pP2U6Yi5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt0W2VdPXRoaXMsbltlXT1hcmd1bWVudHMubGVuZ3RoPjE/aC5jYWxsKGFyZ3VtZW50cyk6cixuPT09cz9vLm5vdGlmeVdpdGgodCxuKTotLWl8fG8ucmVzb2x2ZVdpdGgodCxuKX19LHMsdSxsO2lmKHI+MSlmb3Iocz1BcnJheShyKSx1PUFycmF5KHIpLGw9QXJyYXkocik7cj50O3QrKyluW3RdJiZiLmlzRnVuY3Rpb24oblt0XS5wcm9taXNlKT9uW3RdLnByb21pc2UoKS5kb25lKGEodCxsLG4pKS5mYWlsKG8ucmVqZWN0KS5wcm9ncmVzcyhhKHQsdSxzKSk6LS1pO3JldHVybiBpfHxvLnJlc29sdmVXaXRoKGwsbiksby5wcm9taXNlKCl9fSksYi5zdXBwb3J0PWZ1bmN0aW9uKCl7dmFyIHQsbixyLGEscyx1LGwsYyxwLGYsZD1vLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIixcInRcIiksZC5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixuPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLHI9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0sIW58fCFyfHwhbi5sZW5ndGgpcmV0dXJue307cz1vLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksbD1zLmFwcGVuZENoaWxkKG8uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksYT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0sci5zdHlsZS5jc3NUZXh0PVwidG9wOjFweDtmbG9hdDpsZWZ0O29wYWNpdHk6LjVcIix0PXtnZXRTZXRBdHRyaWJ1dGU6XCJ0XCIhPT1kLmNsYXNzTmFtZSxsZWFkaW5nV2hpdGVzcGFjZTozPT09ZC5maXJzdENoaWxkLm5vZGVUeXBlLHRib2R5OiFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIikubGVuZ3RoLGh0bWxTZXJpYWxpemU6ISFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKS5sZW5ndGgsc3R5bGU6L3RvcC8udGVzdChyLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxocmVmTm9ybWFsaXplZDpcIi9hXCI9PT1yLmdldEF0dHJpYnV0ZShcImhyZWZcIiksb3BhY2l0eTovXjAuNS8udGVzdChyLnN0eWxlLm9wYWNpdHkpLGNzc0Zsb2F0OiEhci5zdHlsZS5jc3NGbG9hdCxjaGVja09uOiEhYS52YWx1ZSxvcHRTZWxlY3RlZDpsLnNlbGVjdGVkLGVuY3R5cGU6ISFvLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGUsaHRtbDVDbG9uZTpcIjw6bmF2PjwvOm5hdj5cIiE9PW8uY3JlYXRlRWxlbWVudChcIm5hdlwiKS5jbG9uZU5vZGUoITApLm91dGVySFRNTCxib3hNb2RlbDpcIkNTUzFDb21wYXRcIj09PW8uY29tcGF0TW9kZSxkZWxldGVFeHBhbmRvOiEwLG5vQ2xvbmVFdmVudDohMCxpbmxpbmVCbG9ja05lZWRzTGF5b3V0OiExLHNocmlua1dyYXBCbG9ja3M6ITEscmVsaWFibGVNYXJnaW5SaWdodDohMCxib3hTaXppbmdSZWxpYWJsZTohMCxwaXhlbFBvc2l0aW9uOiExfSxhLmNoZWNrZWQ9ITAsdC5ub0Nsb25lQ2hlY2tlZD1hLmNsb25lTm9kZSghMCkuY2hlY2tlZCxzLmRpc2FibGVkPSEwLHQub3B0RGlzYWJsZWQ9IWwuZGlzYWJsZWQ7dHJ5e2RlbGV0ZSBkLnRlc3R9Y2F0Y2goaCl7dC5kZWxldGVFeHBhbmRvPSExfWE9by5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLHQuaW5wdXQ9XCJcIj09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksYS52YWx1ZT1cInRcIixhLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLHQucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWUsYS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJ0XCIpLGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSx1PW8uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHUuYXBwZW5kQ2hpbGQoYSksdC5hcHBlbmRDaGVja2VkPWEuY2hlY2tlZCx0LmNoZWNrQ2xvbmU9dS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsZC5hdHRhY2hFdmVudCYmKGQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsZnVuY3Rpb24oKXt0Lm5vQ2xvbmVFdmVudD0hMX0pLGQuY2xvbmVOb2RlKCEwKS5jbGljaygpKTtmb3IoZiBpbntzdWJtaXQ6ITAsY2hhbmdlOiEwLGZvY3VzaW46ITB9KWQuc2V0QXR0cmlidXRlKGM9XCJvblwiK2YsXCJ0XCIpLHRbZitcIkJ1YmJsZXNcIl09YyBpbiBlfHxkLmF0dHJpYnV0ZXNbY10uZXhwYW5kbz09PSExO3JldHVybiBkLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixkLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix0LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1kLnN0eWxlLmJhY2tncm91bmRDbGlwLGIoZnVuY3Rpb24oKXt2YXIgbixyLGEscz1cInBhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtcIix1PW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO3UmJihuPW8uY3JlYXRlRWxlbWVudChcImRpdlwiKSxuLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweFwiLHUuYXBwZW5kQ2hpbGQobikuYXBwZW5kQ2hpbGQoZCksZC5pbm5lckhUTUw9XCI8dGFibGU+PHRyPjx0ZD48L3RkPjx0ZD50PC90ZD48L3RyPjwvdGFibGU+XCIsYT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIiksYVswXS5zdHlsZS5jc3NUZXh0PVwicGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO2Rpc3BsYXk6bm9uZVwiLHA9MD09PWFbMF0ub2Zmc2V0SGVpZ2h0LGFbMF0uc3R5bGUuZGlzcGxheT1cIlwiLGFbMV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0LnJlbGlhYmxlSGlkZGVuT2Zmc2V0cz1wJiYwPT09YVswXS5vZmZzZXRIZWlnaHQsZC5pbm5lckhUTUw9XCJcIixkLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxcHg7Ym9yZGVyOjFweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjRweDttYXJnaW4tdG9wOjElO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxJTtcIix0LmJveFNpemluZz00PT09ZC5vZmZzZXRXaWR0aCx0LmRvZXNOb3RJbmNsdWRlTWFyZ2luSW5Cb2R5T2Zmc2V0PTEhPT11Lm9mZnNldFRvcCxlLmdldENvbXB1dGVkU3R5bGUmJih0LnBpeGVsUG9zaXRpb249XCIxJVwiIT09KGUuZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpfHx7fSkudG9wLHQuYm94U2l6aW5nUmVsaWFibGU9XCI0cHhcIj09PShlLmdldENvbXB1dGVkU3R5bGUoZCxudWxsKXx8e3dpZHRoOlwiNHB4XCJ9KS53aWR0aCxyPWQuYXBwZW5kQ2hpbGQoby5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxyLnN0eWxlLmNzc1RleHQ9ZC5zdHlsZS5jc3NUZXh0PXMsci5zdHlsZS5tYXJnaW5SaWdodD1yLnN0eWxlLndpZHRoPVwiMFwiLGQuc3R5bGUud2lkdGg9XCIxcHhcIix0LnJlbGlhYmxlTWFyZ2luUmlnaHQ9IXBhcnNlRmxvYXQoKGUuZ2V0Q29tcHV0ZWRTdHlsZShyLG51bGwpfHx7fSkubWFyZ2luUmlnaHQpKSx0eXBlb2YgZC5zdHlsZS56b29tIT09aSYmKGQuaW5uZXJIVE1MPVwiXCIsZC5zdHlsZS5jc3NUZXh0PXMrXCJ3aWR0aDoxcHg7cGFkZGluZzoxcHg7ZGlzcGxheTppbmxpbmU7em9vbToxXCIsdC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PTM9PT1kLm9mZnNldFdpZHRoLGQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZC5pbm5lckhUTUw9XCI8ZGl2PjwvZGl2PlwiLGQuZmlyc3RDaGlsZC5zdHlsZS53aWR0aD1cIjVweFwiLHQuc2hyaW5rV3JhcEJsb2Nrcz0zIT09ZC5vZmZzZXRXaWR0aCx0LmlubGluZUJsb2NrTmVlZHNMYXlvdXQmJih1LnN0eWxlLnpvb209MSkpLHUucmVtb3ZlQ2hpbGQobiksbj1kPWE9cj1udWxsKX0pLG49cz11PWw9cj1hPW51bGwsdH0oKTt2YXIgTz0vKD86XFx7W1xcc1xcU10qXFx9fFxcW1tcXHNcXFNdKlxcXSkkLyxCPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChlLG4scixpKXtpZihiLmFjY2VwdERhdGEoZSkpe3ZhciBvLGEscz1iLmV4cGFuZG8sdT1cInN0cmluZ1wiPT10eXBlb2YgbixsPWUubm9kZVR5cGUscD1sP2IuY2FjaGU6ZSxmPWw/ZVtzXTplW3NdJiZzO2lmKGYmJnBbZl0mJihpfHxwW2ZdLmRhdGEpfHwhdXx8ciE9PXQpcmV0dXJuIGZ8fChsP2Vbc109Zj1jLnBvcCgpfHxiLmd1aWQrKzpmPXMpLHBbZl18fChwW2ZdPXt9LGx8fChwW2ZdLnRvSlNPTj1iLm5vb3ApKSwoXCJvYmplY3RcIj09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pJiYoaT9wW2ZdPWIuZXh0ZW5kKHBbZl0sbik6cFtmXS5kYXRhPWIuZXh0ZW5kKHBbZl0uZGF0YSxuKSksbz1wW2ZdLGl8fChvLmRhdGF8fChvLmRhdGE9e30pLG89by5kYXRhKSxyIT09dCYmKG9bYi5jYW1lbENhc2UobildPXIpLHU/KGE9b1tuXSxudWxsPT1hJiYoYT1vW2IuY2FtZWxDYXNlKG4pXSkpOmE9byxhfX1mdW5jdGlvbiBSKGUsdCxuKXtpZihiLmFjY2VwdERhdGEoZSkpe3ZhciByLGksbyxhPWUubm9kZVR5cGUscz1hP2IuY2FjaGU6ZSx1PWE/ZVtiLmV4cGFuZG9dOmIuZXhwYW5kbztpZihzW3VdKXtpZih0JiYobz1uP3NbdV06c1t1XS5kYXRhKSl7Yi5pc0FycmF5KHQpP3Q9dC5jb25jYXQoYi5tYXAodCxiLmNhbWVsQ2FzZSkpOnQgaW4gbz90PVt0XToodD1iLmNhbWVsQ2FzZSh0KSx0PXQgaW4gbz9bdF06dC5zcGxpdChcIiBcIikpO2ZvcihyPTAsaT10Lmxlbmd0aDtpPnI7cisrKWRlbGV0ZSBvW3Rbcl1dO2lmKCEobj8kOmIuaXNFbXB0eU9iamVjdCkobykpcmV0dXJufShufHwoZGVsZXRlIHNbdV0uZGF0YSwkKHNbdV0pKSkmJihhP2IuY2xlYW5EYXRhKFtlXSwhMCk6Yi5zdXBwb3J0LmRlbGV0ZUV4cGFuZG98fHMhPXMud2luZG93P2RlbGV0ZSBzW3VdOnNbdV09bnVsbCl9fX1iLmV4dGVuZCh7Y2FjaGU6e30sZXhwYW5kbzpcImpRdWVyeVwiKyhwK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLG5vRGF0YTp7ZW1iZWQ6ITAsb2JqZWN0OlwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCIsYXBwbGV0OiEwfSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBlPWUubm9kZVR5cGU/Yi5jYWNoZVtlW2IuZXhwYW5kb11dOmVbYi5leHBhbmRvXSwhIWUmJiEkKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUChlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUihlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFAoZSx0LG4sITApfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe3JldHVybiBSKGUsdCwhMCl9LGFjY2VwdERhdGE6ZnVuY3Rpb24oZSl7aWYoZS5ub2RlVHlwZSYmMSE9PWUubm9kZVR5cGUmJjkhPT1lLm5vZGVUeXBlKXJldHVybiExO3ZhciB0PWUubm9kZU5hbWUmJmIubm9EYXRhW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07cmV0dXJuIXR8fHQhPT0hMCYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc2lkXCIpPT09dH19KSxiLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihlLG4pe3ZhciByLGksbz10aGlzWzBdLGE9MCxzPW51bGw7aWYoZT09PXQpe2lmKHRoaXMubGVuZ3RoJiYocz1iLmRhdGEobyksMT09PW8ubm9kZVR5cGUmJiFiLl9kYXRhKG8sXCJwYXJzZWRBdHRyc1wiKSkpe2ZvcihyPW8uYXR0cmlidXRlcztyLmxlbmd0aD5hO2ErKylpPXJbYV0ubmFtZSxpLmluZGV4T2YoXCJkYXRhLVwiKXx8KGk9Yi5jYW1lbENhc2UoaS5zbGljZSg1KSksVyhvLGksc1tpXSkpO2IuX2RhdGEobyxcInBhcnNlZEF0dHJzXCIsITApfXJldHVybiBzfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe2IuZGF0YSh0aGlzLGUpfSk6Yi5hY2Nlc3ModGhpcyxmdW5jdGlvbihuKXtyZXR1cm4gbj09PXQ/bz9XKG8sZSxiLmRhdGEobyxlKSk6bnVsbDoodGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5kYXRhKHRoaXMsZSxuKX0pLHQpfSxudWxsLG4sYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLnJlbW92ZURhdGEodGhpcyxlKX0pfX0pO2Z1bmN0aW9uIFcoZSxuLHIpe2lmKHI9PT10JiYxPT09ZS5ub2RlVHlwZSl7dmFyIGk9XCJkYXRhLVwiK24ucmVwbGFjZShCLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7aWYocj1lLmdldEF0dHJpYnV0ZShpKSxcInN0cmluZ1wiPT10eXBlb2Ygcil7dHJ5e3I9XCJ0cnVlXCI9PT1yPyEwOlwiZmFsc2VcIj09PXI/ITE6XCJudWxsXCI9PT1yP251bGw6K3IrXCJcIj09PXI/K3I6Ty50ZXN0KHIpP2IucGFyc2VKU09OKHIpOnJ9Y2F0Y2gobyl7fWIuZGF0YShlLG4scil9ZWxzZSByPXR9cmV0dXJuIHJ9ZnVuY3Rpb24gJChlKXt2YXIgdDtmb3IodCBpbiBlKWlmKChcImRhdGFcIiE9PXR8fCFiLmlzRW1wdHlPYmplY3QoZVt0XSkpJiZcInRvSlNPTlwiIT09dClyZXR1cm4hMTtyZXR1cm4hMH1iLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpO3JldHVybiBlPyhuPShufHxcImZ4XCIpK1wicXVldWVcIixpPWIuX2RhdGEoZSxuKSxyJiYoIWl8fGIuaXNBcnJheShyKT9pPWIuX2RhdGEoZSxuLGIubWFrZUFycmF5KHIpKTppLnB1c2gocikpLGl8fFtdKTp0fSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Yi5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1iLl9xdWV1ZUhvb2tzKGUsdCksYT1mdW5jdGlvbigpe2IuZGVxdWV1ZShlLHQpfTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLG8uY3VyPWksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxhLG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gYi5fZGF0YShlLG4pfHxiLl9kYXRhKGUsbix7ZW1wdHk6Yi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtiLl9yZW1vdmVEYXRhKGUsdCtcInF1ZXVlXCIpLGIuX3JlbW92ZURhdGEoZSxuKX0pfSl9fSksYi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsbil7dmFyIHI9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKG49ZSxlPVwiZnhcIixyLS0pLHI+YXJndW1lbnRzLmxlbmd0aD9iLnF1ZXVlKHRoaXNbMF0sZSk6bj09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1iLnF1ZXVlKHRoaXMsZSxuKTtiLl9xdWV1ZUhvb2tzKHRoaXMsZSksXCJmeFwiPT09ZSYmXCJpbnByb2dyZXNzXCIhPT10WzBdJiZiLmRlcXVldWUodGhpcyxlKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmRlcXVldWUodGhpcyxlKX0pfSxkZWxheTpmdW5jdGlvbihlLHQpe3JldHVybiBlPWIuZng/Yi5meC5zcGVlZHNbZV18fGU6ZSx0PXR8fFwiZnhcIix0aGlzLnF1ZXVlKHQsZnVuY3Rpb24odCxuKXt2YXIgcj1zZXRUaW1lb3V0KHQsZSk7bi5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpfX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSxuKXt2YXIgcixpPTEsbz1iLkRlZmVycmVkKCksYT10aGlzLHM9dGhpcy5sZW5ndGgsdT1mdW5jdGlvbigpey0taXx8by5yZXNvbHZlV2l0aChhLFthXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYobj1lLGU9dCksZT1lfHxcImZ4XCI7d2hpbGUocy0tKXI9Yi5fZGF0YShhW3NdLGUrXCJxdWV1ZUhvb2tzXCIpLHImJnIuZW1wdHkmJihpKyssci5lbXB0eS5hZGQodSkpO3JldHVybiB1KCksby5wcm9taXNlKG4pfX0pO3ZhciBJLHosWD0vW1xcdFxcclxcbl0vZyxVPS9cXHIvZyxWPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QpJC9pLFk9L14oPzphfGFyZWEpJC9pLEo9L14oPzpjaGVja2VkfHNlbGVjdGVkfGF1dG9mb2N1c3xhdXRvcGxheXxhc3luY3xjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZCkkL2ksRz0vXig/OmNoZWNrZWR8c2VsZWN0ZWQpJC9pLFE9Yi5zdXBwb3J0LmdldFNldEF0dHJpYnV0ZSxLPWIuc3VwcG9ydC5pbnB1dDtiLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGIuYXR0cixlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5yZW1vdmVBdHRyKHRoaXMsZSl9KX0scHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGIucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gZT1iLnByb3BGaXhbZV18fGUsdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dHJ5e3RoaXNbZV09dCxkZWxldGUgdGhpc1tlXX1jYXRjaChuKXt9fSl9LGFkZENsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYT0wLHM9dGhpcy5sZW5ndGgsdT1cInN0cmluZ1wiPT10eXBlb2YgZSYmZTtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLmFkZENsYXNzKGUuY2FsbCh0aGlzLHQsdGhpcy5jbGFzc05hbWUpKX0pO2lmKHUpZm9yKHQ9KGV8fFwiXCIpLm1hdGNoKHcpfHxbXTtzPmE7YSsrKWlmKG49dGhpc1thXSxyPTE9PT1uLm5vZGVUeXBlJiYobi5jbGFzc05hbWU/KFwiIFwiK24uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpOlwiIFwiKSl7bz0wO3doaWxlKGk9dFtvKytdKTA+ci5pbmRleE9mKFwiIFwiK2krXCIgXCIpJiYocis9aStcIiBcIik7bi5jbGFzc05hbWU9Yi50cmltKHIpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGE9MCxzPXRoaXMubGVuZ3RoLHU9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlO2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykucmVtb3ZlQ2xhc3MoZS5jYWxsKHRoaXMsdCx0aGlzLmNsYXNzTmFtZSkpfSk7aWYodSlmb3IodD0oZXx8XCJcIikubWF0Y2godyl8fFtdO3M+YTthKyspaWYobj10aGlzW2FdLHI9MT09PW4ubm9kZVR5cGUmJihuLmNsYXNzTmFtZT8oXCIgXCIrbi5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIik6XCJcIikpe289MDt3aGlsZShpPXRbbysrXSl3aGlsZShyLmluZGV4T2YoXCIgXCIraStcIiBcIik+PTApcj1yLnJlcGxhY2UoXCIgXCIraStcIiBcIixcIiBcIik7bi5jbGFzc05hbWU9ZT9iLnRyaW0ocik6XCJcIn1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10eXBlb2YgZSxyPVwiYm9vbGVhblwiPT10eXBlb2YgdDtyZXR1cm4gYi5pc0Z1bmN0aW9uKGUpP3RoaXMuZWFjaChmdW5jdGlvbihuKXtiKHRoaXMpLnRvZ2dsZUNsYXNzKGUuY2FsbCh0aGlzLG4sdGhpcy5jbGFzc05hbWUsdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09bil7dmFyIG8sYT0wLHM9Yih0aGlzKSx1PXQsbD1lLm1hdGNoKHcpfHxbXTt3aGlsZShvPWxbYSsrXSl1PXI/dTohcy5oYXNDbGFzcyhvKSxzW3U/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0obyl9ZWxzZShuPT09aXx8XCJib29sZWFuXCI9PT1uKSYmKHRoaXMuY2xhc3NOYW1lJiZiLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxlPT09ITE/XCJcIjpiLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdD1cIiBcIitlK1wiIFwiLG49MCxyPXRoaXMubGVuZ3RoO2Zvcig7cj5uO24rKylpZigxPT09dGhpc1tuXS5ub2RlVHlwZSYmKFwiIFwiK3RoaXNbbl0uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpLmluZGV4T2YodCk+PTApcmV0dXJuITA7cmV0dXJuITF9LHZhbDpmdW5jdGlvbihlKXt2YXIgbixyLGksbz10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBpPWIuaXNGdW5jdGlvbihlKSx0aGlzLmVhY2goZnVuY3Rpb24obil7dmFyIG8sYT1iKHRoaXMpOzE9PT10aGlzLm5vZGVUeXBlJiYobz1pP2UuY2FsbCh0aGlzLG4sYS52YWwoKSk6ZSxudWxsPT1vP289XCJcIjpcIm51bWJlclwiPT10eXBlb2Ygbz9vKz1cIlwiOmIuaXNBcnJheShvKSYmKG89Yi5tYXAobyxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSxyPWIudmFsSG9va3NbdGhpcy50eXBlXXx8Yi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLHImJlwic2V0XCJpbiByJiZyLnNldCh0aGlzLG8sXCJ2YWx1ZVwiKSE9PXR8fCh0aGlzLnZhbHVlPW8pKX0pO2lmKG8pcmV0dXJuIHI9Yi52YWxIb29rc1tvLnR5cGVdfHxiLnZhbEhvb2tzW28ubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sciYmXCJnZXRcImluIHImJihuPXIuZ2V0KG8sXCJ2YWx1ZVwiKSkhPT10P246KG49by52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2Ygbj9uLnJlcGxhY2UoVSxcIlwiKTpudWxsPT1uP1wiXCI6bil9fX0pLGIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5hdHRyaWJ1dGVzLnZhbHVlO3JldHVybiF0fHx0LnNwZWNpZmllZD9lLnZhbHVlOmUudGV4dH19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lLm9wdGlvbnMsaT1lLnNlbGVjdGVkSW5kZXgsbz1cInNlbGVjdC1vbmVcIj09PWUudHlwZXx8MD5pLGE9bz9udWxsOltdLHM9bz9pKzE6ci5sZW5ndGgsdT0wPmk/czpvP2k6MDtmb3IoO3M+dTt1KyspaWYobj1yW3VdLCEoIW4uc2VsZWN0ZWQmJnUhPT1pfHwoYi5zdXBwb3J0Lm9wdERpc2FibGVkP24uZGlzYWJsZWQ6bnVsbCE9PW4uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxuLnBhcmVudE5vZGUuZGlzYWJsZWQmJmIubm9kZU5hbWUobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PWIobikudmFsKCksbylyZXR1cm4gdDthLnB1c2godCl9cmV0dXJuIGF9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuPWIubWFrZUFycmF5KHQpO3JldHVybiBiKGUpLmZpbmQoXCJvcHRpb25cIikuZWFjaChmdW5jdGlvbigpe3RoaXMuc2VsZWN0ZWQ9Yi5pbkFycmF5KGIodGhpcykudmFsKCksbik+PTB9KSxuLmxlbmd0aHx8KGUuc2VsZWN0ZWRJbmRleD0tMSksbn19fSxhdHRyOmZ1bmN0aW9uKGUsbixyKXt2YXIgbyxhLHMsdT1lLm5vZGVUeXBlO2lmKGUmJjMhPT11JiY4IT09dSYmMiE9PXUpcmV0dXJuIHR5cGVvZiBlLmdldEF0dHJpYnV0ZT09PWk/Yi5wcm9wKGUsbixyKTooYT0xIT09dXx8IWIuaXNYTUxEb2MoZSksYSYmKG49bi50b0xvd2VyQ2FzZSgpLG89Yi5hdHRySG9va3Nbbl18fChKLnRlc3Qobik/ejpJKSkscj09PXQ/byYmYSYmXCJnZXRcImluIG8mJm51bGwhPT0ocz1vLmdldChlLG4pKT9zOih0eXBlb2YgZS5nZXRBdHRyaWJ1dGUhPT1pJiYocz1lLmdldEF0dHJpYnV0ZShuKSksbnVsbD09cz90OnMpOm51bGwhPT1yP28mJmEmJlwic2V0XCJpbiBvJiYocz1vLnNldChlLHIsbikpIT09dD9zOihlLnNldEF0dHJpYnV0ZShuLHIrXCJcIikscik6KGIucmVtb3ZlQXR0cihlLG4pLHQpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT0wLG89dCYmdC5tYXRjaCh3KTtpZihvJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPW9baSsrXSlyPWIucHJvcEZpeFtuXXx8bixKLnRlc3Qobik/IVEmJkcudGVzdChuKT9lW2IuY2FtZWxDYXNlKFwiZGVmYXVsdC1cIituKV09ZVtyXT0hMTplW3JdPSExOmIuYXR0cihlLG4sXCJcIiksZS5yZW1vdmVBdHRyaWJ1dGUoUT9uOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCFiLnN1cHBvcnQucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmYi5ub2RlTmFtZShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHByb3BGaXg6e3RhYmluZGV4OlwidGFiSW5kZXhcIixyZWFkb25seTpcInJlYWRPbmx5XCIsXCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIixtYXhsZW5ndGg6XCJtYXhMZW5ndGhcIixjZWxsc3BhY2luZzpcImNlbGxTcGFjaW5nXCIsY2VsbHBhZGRpbmc6XCJjZWxsUGFkZGluZ1wiLHJvd3NwYW46XCJyb3dTcGFuXCIsY29sc3BhbjpcImNvbFNwYW5cIix1c2VtYXA6XCJ1c2VNYXBcIixmcmFtZWJvcmRlcjpcImZyYW1lQm9yZGVyXCIsY29udGVudGVkaXRhYmxlOlwiY29udGVudEVkaXRhYmxlXCJ9LHByb3A6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPWUubm9kZVR5cGU7aWYoZSYmMyE9PXMmJjghPT1zJiYyIT09cylyZXR1cm4gYT0xIT09c3x8IWIuaXNYTUxEb2MoZSksYSYmKG49Yi5wcm9wRml4W25dfHxuLG89Yi5wcm9wSG9va3Nbbl0pLHIhPT10P28mJlwic2V0XCJpbiBvJiYoaT1vLnNldChlLHIsbikpIT09dD9pOmVbbl09cjpvJiZcImdldFwiaW4gbyYmbnVsbCE9PShpPW8uZ2V0KGUsbikpP2k6ZVtuXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciBuPWUuZ2V0QXR0cmlidXRlTm9kZShcInRhYmluZGV4XCIpO3JldHVybiBuJiZuLnNwZWNpZmllZD9wYXJzZUludChuLnZhbHVlLDEwKTpWLnRlc3QoZS5ub2RlTmFtZSl8fFkudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6dH19fX0pLHo9e2dldDpmdW5jdGlvbihlLG4pe3ZhciByPWIucHJvcChlLG4pLGk9XCJib29sZWFuXCI9PXR5cGVvZiByJiZlLmdldEF0dHJpYnV0ZShuKSxvPVwiYm9vbGVhblwiPT10eXBlb2Ygcj9LJiZRP251bGwhPWk6Ry50ZXN0KG4pP2VbYi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK24pXTohIWk6ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiBvJiZvLnZhbHVlIT09ITE/bi50b0xvd2VyQ2FzZSgpOnR9LHNldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHQ9PT0hMT9iLnJlbW92ZUF0dHIoZSxuKTpLJiZRfHwhRy50ZXN0KG4pP2Uuc2V0QXR0cmlidXRlKCFRJiZiLnByb3BGaXhbbl18fG4sbik6ZVtiLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrbildPWVbbl09ITAsbn19LEsmJlF8fChiLmF0dHJIb29rcy52YWx1ZT17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiBiLm5vZGVOYW1lKGUsXCJpbnB1dFwiKT9lLmRlZmF1bHRWYWx1ZTpyJiZyLnNwZWNpZmllZD9yLnZhbHVlOnR9LHNldDpmdW5jdGlvbihlLG4scil7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlucHV0XCIpPyhlLmRlZmF1bHRWYWx1ZT1uLHQpOkkmJkkuc2V0KGUsbixyKX19KSxRfHwoST1iLnZhbEhvb2tzLmJ1dHRvbj17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiByJiYoXCJpZFwiPT09bnx8XCJuYW1lXCI9PT1ufHxcImNvb3Jkc1wiPT09bj9cIlwiIT09ci52YWx1ZTpyLnNwZWNpZmllZCk/ci52YWx1ZTp0fSxzZXQ6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpPWUuZ2V0QXR0cmlidXRlTm9kZShyKTtyZXR1cm4gaXx8ZS5zZXRBdHRyaWJ1dGVOb2RlKGk9ZS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShyKSksaS52YWx1ZT1uKz1cIlwiLFwidmFsdWVcIj09PXJ8fG49PT1lLmdldEF0dHJpYnV0ZShyKT9uOnR9fSxiLmF0dHJIb29rcy5jb250ZW50ZWRpdGFibGU9e2dldDpJLmdldCxzZXQ6ZnVuY3Rpb24oZSx0LG4pe0kuc2V0KGUsXCJcIj09PXQ/ITE6dCxuKX19LGIuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsbil7Yi5hdHRySG9va3Nbbl09Yi5leHRlbmQoYi5hdHRySG9va3Nbbl0se3NldDpmdW5jdGlvbihlLHIpe3JldHVyblwiXCI9PT1yPyhlLnNldEF0dHJpYnV0ZShuLFwiYXV0b1wiKSxyKTp0fX0pfSkpLGIuc3VwcG9ydC5ocmVmTm9ybWFsaXplZHx8KGIuZWFjaChbXCJocmVmXCIsXCJzcmNcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSxuKXtiLmF0dHJIb29rc1tuXT1iLmV4dGVuZChiLmF0dHJIb29rc1tuXSx7Z2V0OmZ1bmN0aW9uKGUpe3ZhciByPWUuZ2V0QXR0cmlidXRlKG4sMik7cmV0dXJuIG51bGw9PXI/dDpyfX0pfSksYi5lYWNoKFtcImhyZWZcIixcInNyY1wiXSxmdW5jdGlvbihlLHQpe2IucHJvcEhvb2tzW3RdPXtnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsNCl9fX0pKSxiLnN1cHBvcnQuc3R5bGV8fChiLmF0dHJIb29rcy5zdHlsZT17Z2V0OmZ1bmN0aW9uKGUpe3JldHVybiBlLnN0eWxlLmNzc1RleHR8fHR9LHNldDpmdW5jdGlvbihlLHQpe3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dCtcIlwifX0pLGIuc3VwcG9ydC5vcHRTZWxlY3RlZHx8KGIucHJvcEhvb2tzLnNlbGVjdGVkPWIuZXh0ZW5kKGIucHJvcEhvb2tzLnNlbGVjdGVkLHtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpLG51bGx9fSkpLGIuc3VwcG9ydC5lbmN0eXBlfHwoYi5wcm9wRml4LmVuY3R5cGU9XCJlbmNvZGluZ1wiKSxiLnN1cHBvcnQuY2hlY2tPbnx8Yi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe2IudmFsSG9va3NbdGhpc109e2dldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9fX0pLGIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtiLnZhbEhvb2tzW3RoaXNdPWIuZXh0ZW5kKGIudmFsSG9va3NbdGhpc10se3NldDpmdW5jdGlvbihlLG4pe3JldHVybiBiLmlzQXJyYXkobik/ZS5jaGVja2VkPWIuaW5BcnJheShiKGUpLnZhbCgpLG4pPj0wOnR9fSl9KTt2YXIgWj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYSkkL2ksZXQ9L15rZXkvLHR0PS9eKD86bW91c2V8Y29udGV4dG1lbnUpfGNsaWNrLyxudD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8scnQ9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gaXQoKXtyZXR1cm4hMH1mdW5jdGlvbiBvdCgpe3JldHVybiExfWIuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oZSxuLHIsbyxhKXt2YXIgcyx1LGwsYyxwLGYsZCxoLGcsbSx5LHY9Yi5fZGF0YShlKTtpZih2KXtyLmhhbmRsZXImJihjPXIscj1jLmhhbmRsZXIsYT1jLnNlbGVjdG9yKSxyLmd1aWR8fChyLmd1aWQ9Yi5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9e30pLChmPXYuaGFuZGxlKXx8KGY9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBiPT09aXx8ZSYmYi5ldmVudC50cmlnZ2VyZWQ9PT1lLnR5cGU/dDpiLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGYuZWxlbSxhcmd1bWVudHMpfSxmLmVsZW09ZSksbj0obnx8XCJcIikubWF0Y2godyl8fFtcIlwiXSxsPW4ubGVuZ3RoO3doaWxlKGwtLSlzPXJ0LmV4ZWMobltsXSl8fFtdLGc9eT1zWzFdLG09KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCkscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGc9KGE/cC5kZWxlZ2F0ZVR5cGU6cC5iaW5kVHlwZSl8fGcscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGQ9Yi5leHRlbmQoe3R5cGU6ZyxvcmlnVHlwZTp5LGRhdGE6byxoYW5kbGVyOnIsZ3VpZDpyLmd1aWQsc2VsZWN0b3I6YSxuZWVkc0NvbnRleHQ6YSYmYi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGEpLG5hbWVzcGFjZTptLmpvaW4oXCIuXCIpfSxjKSwoaD11W2ddKXx8KGg9dVtnXT1bXSxoLmRlbGVnYXRlQ291bnQ9MCxwLnNldHVwJiZwLnNldHVwLmNhbGwoZSxvLG0sZikhPT0hMXx8KGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoZyxmLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib25cIitnLGYpKSkscC5hZGQmJihwLmFkZC5jYWxsKGUsZCksZC5oYW5kbGVyLmd1aWR8fChkLmhhbmRsZXIuZ3VpZD1yLmd1aWQpKSxhP2guc3BsaWNlKGguZGVsZWdhdGVDb3VudCsrLDAsZCk6aC5wdXNoKGQpLGIuZXZlbnQuZ2xvYmFsW2ddPSEwO2U9bnVsbH19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxwLGYsZCxoLGcsbT1iLmhhc0RhdGEoZSkmJmIuX2RhdGEoZSk7aWYobSYmKGM9bS5ldmVudHMpKXt0PSh0fHxcIlwiKS5tYXRjaCh3KXx8W1wiXCJdLGw9dC5sZW5ndGg7d2hpbGUobC0tKWlmKHM9cnQuZXhlYyh0W2xdKXx8W10sZD1nPXNbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtwPWIuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0ocj9wLmRlbGVnYXRlVHlwZTpwLmJpbmRUeXBlKXx8ZCxmPWNbZF18fFtdLHM9c1syXSYmUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksdT1vPWYubGVuZ3RoO3doaWxlKG8tLSlhPWZbb10sIWkmJmchPT1hLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1hLmd1aWR8fHMmJiFzLnRlc3QoYS5uYW1lc3BhY2UpfHxyJiZyIT09YS5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFhLnNlbGVjdG9yKXx8KGYuc3BsaWNlKG8sMSksYS5zZWxlY3RvciYmZi5kZWxlZ2F0ZUNvdW50LS0scC5yZW1vdmUmJnAucmVtb3ZlLmNhbGwoZSxhKSk7dSYmIWYubGVuZ3RoJiYocC50ZWFyZG93biYmcC50ZWFyZG93bi5jYWxsKGUsaCxtLmhhbmRsZSkhPT0hMXx8Yi5yZW1vdmVFdmVudChlLGQsbS5oYW5kbGUpLGRlbGV0ZSBjW2RdKX1lbHNlIGZvcihkIGluIGMpYi5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtiLmlzRW1wdHlPYmplY3QoYykmJihkZWxldGUgbS5oYW5kbGUsYi5fcmVtb3ZlRGF0YShlLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24obixyLGksYSl7dmFyIHMsdSxsLGMscCxmLGQsaD1baXx8b10sZz15LmNhbGwobixcInR5cGVcIik/bi50eXBlOm4sbT15LmNhbGwobixcIm5hbWVzcGFjZVwiKT9uLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobD1mPWk9aXx8bywzIT09aS5ub2RlVHlwZSYmOCE9PWkubm9kZVR5cGUmJiFudC50ZXN0KGcrYi5ldmVudC50cmlnZ2VyZWQpJiYoZy5pbmRleE9mKFwiLlwiKT49MCYmKG09Zy5zcGxpdChcIi5cIiksZz1tLnNoaWZ0KCksbS5zb3J0KCkpLHU9MD5nLmluZGV4T2YoXCI6XCIpJiZcIm9uXCIrZyxuPW5bYi5leHBhbmRvXT9uOm5ldyBiLkV2ZW50KGcsXCJvYmplY3RcIj09dHlwZW9mIG4mJm4pLG4uaXNUcmlnZ2VyPSEwLG4ubmFtZXNwYWNlPW0uam9pbihcIi5cIiksbi5uYW1lc3BhY2VfcmU9bi5uYW1lc3BhY2U/UmVnRXhwKFwiKF58XFxcXC4pXCIrbS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxuLnJlc3VsdD10LG4udGFyZ2V0fHwobi50YXJnZXQ9aSkscj1udWxsPT1yP1tuXTpiLm1ha2VBcnJheShyLFtuXSkscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGF8fCFwLnRyaWdnZXJ8fHAudHJpZ2dlci5hcHBseShpLHIpIT09ITEpKXtpZighYSYmIXAubm9CdWJibGUmJiFiLmlzV2luZG93KGkpKXtmb3IoYz1wLmRlbGVnYXRlVHlwZXx8ZyxudC50ZXN0KGMrZyl8fChsPWwucGFyZW50Tm9kZSk7bDtsPWwucGFyZW50Tm9kZSloLnB1c2gobCksZj1sO2Y9PT0oaS5vd25lckRvY3VtZW50fHxvKSYmaC5wdXNoKGYuZGVmYXVsdFZpZXd8fGYucGFyZW50V2luZG93fHxlKX1kPTA7d2hpbGUoKGw9aFtkKytdKSYmIW4uaXNQcm9wYWdhdGlvblN0b3BwZWQoKSluLnR5cGU9ZD4xP2M6cC5iaW5kVHlwZXx8ZyxzPShiLl9kYXRhKGwsXCJldmVudHNcIil8fHt9KVtuLnR5cGVdJiZiLl9kYXRhKGwsXCJoYW5kbGVcIikscyYmcy5hcHBseShsLHIpLHM9dSYmbFt1XSxzJiZiLmFjY2VwdERhdGEobCkmJnMuYXBwbHkmJnMuYXBwbHkobCxyKT09PSExJiZuLnByZXZlbnREZWZhdWx0KCk7aWYobi50eXBlPWcsIShhfHxuLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxwLl9kZWZhdWx0JiZwLl9kZWZhdWx0LmFwcGx5KGkub3duZXJEb2N1bWVudCxyKSE9PSExfHxcImNsaWNrXCI9PT1nJiZiLm5vZGVOYW1lKGksXCJhXCIpfHwhYi5hY2NlcHREYXRhKGkpfHwhdXx8IWlbZ118fGIuaXNXaW5kb3coaSkpKXtmPWlbdV0sZiYmKGlbdV09bnVsbCksYi5ldmVudC50cmlnZ2VyZWQ9Zzt0cnl7aVtnXSgpfWNhdGNoKHYpe31iLmV2ZW50LnRyaWdnZXJlZD10LGYmJihpW3VdPWYpfXJldHVybiBuLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe2U9Yi5ldmVudC5maXgoZSk7dmFyIG4scixpLG8sYSxzPVtdLHU9aC5jYWxsKGFyZ3VtZW50cyksbD0oYi5fZGF0YSh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbZS50eXBlXXx8W10sYz1iLmV2ZW50LnNwZWNpYWxbZS50eXBlXXx8e307aWYodVswXT1lLGUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsZSkhPT0hMSl7cz1iLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxlLGwpLG49MDt3aGlsZSgobz1zW24rK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtlLmN1cnJlbnRUYXJnZXQ9by5lbGVtLGE9MDt3aGlsZSgoaT1vLmhhbmRsZXJzW2ErK10pJiYhZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghZS5uYW1lc3BhY2VfcmV8fGUubmFtZXNwYWNlX3JlLnRlc3QoaS5uYW1lc3BhY2UpKSYmKGUuaGFuZGxlT2JqPWksZS5kYXRhPWkuZGF0YSxyPSgoYi5ldmVudC5zcGVjaWFsW2kub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxpLmhhbmRsZXIpLmFwcGx5KG8uZWxlbSx1KSxyIT09dCYmKGUucmVzdWx0PXIpPT09ITEmJihlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGUpLGUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG8sYSxzPVtdLHU9bi5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmKCFlLmJ1dHRvbnx8XCJjbGlja1wiIT09ZS50eXBlKSlmb3IoO2whPXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihsLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWUudHlwZSkpe2ZvcihvPVtdLGE9MDt1PmE7YSsrKWk9blthXSxyPWkuc2VsZWN0b3IrXCIgXCIsb1tyXT09PXQmJihvW3JdPWkubmVlZHNDb250ZXh0P2Iocix0aGlzKS5pbmRleChsKT49MDpiLmZpbmQocix0aGlzLG51bGwsW2xdKS5sZW5ndGgpLG9bcl0mJm8ucHVzaChpKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBuLmxlbmd0aD51JiZzLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpuLnNsaWNlKHUpfSksc30sZml4OmZ1bmN0aW9uKGUpe2lmKGVbYi5leHBhbmRvXSlyZXR1cm4gZTt2YXIgdCxuLHIsaT1lLnR5cGUsYT1lLHM9dGhpcy5maXhIb29rc1tpXTtzfHwodGhpcy5maXhIb29rc1tpXT1zPXR0LnRlc3QoaSk/dGhpcy5tb3VzZUhvb2tzOmV0LnRlc3QoaSk/dGhpcy5rZXlIb29rczp7fSkscj1zLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KHMucHJvcHMpOnRoaXMucHJvcHMsZT1uZXcgYi5FdmVudChhKSx0PXIubGVuZ3RoO3doaWxlKHQtLSluPXJbdF0sZVtuXT1hW25dO3JldHVybiBlLnRhcmdldHx8KGUudGFyZ2V0PWEuc3JjRWxlbWVudHx8byksMz09PWUudGFyZ2V0Lm5vZGVUeXBlJiYoZS50YXJnZXQ9ZS50YXJnZXQucGFyZW50Tm9kZSksZS5tZXRhS2V5PSEhZS5tZXRhS2V5LHMuZmlsdGVyP3MuZmlsdGVyKGUsYSk6ZX0scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZS53aGljaCYmKGUud2hpY2g9bnVsbCE9dC5jaGFyQ29kZT90LmNoYXJDb2RlOnQua2V5Q29kZSksZX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGZyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihlLG4pe3ZhciByLGksYSxzPW4uYnV0dG9uLHU9bi5mcm9tRWxlbWVudDtyZXR1cm4gbnVsbD09ZS5wYWdlWCYmbnVsbCE9bi5jbGllbnRYJiYoaT1lLnRhcmdldC5vd25lckRvY3VtZW50fHxvLGE9aS5kb2N1bWVudEVsZW1lbnQscj1pLmJvZHksZS5wYWdlWD1uLmNsaWVudFgrKGEmJmEuc2Nyb2xsTGVmdHx8ciYmci5zY3JvbGxMZWZ0fHwwKS0oYSYmYS5jbGllbnRMZWZ0fHxyJiZyLmNsaWVudExlZnR8fDApLGUucGFnZVk9bi5jbGllbnRZKyhhJiZhLnNjcm9sbFRvcHx8ciYmci5zY3JvbGxUb3B8fDApLShhJiZhLmNsaWVudFRvcHx8ciYmci5jbGllbnRUb3B8fDApKSwhZS5yZWxhdGVkVGFyZ2V0JiZ1JiYoZS5yZWxhdGVkVGFyZ2V0PXU9PT1lLnRhcmdldD9uLnRvRWxlbWVudDp1KSxlLndoaWNofHxzPT09dHx8KGUud2hpY2g9MSZzPzE6MiZzPzM6NCZzPzI6MCksZX19LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKSYmXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrPyh0aGlzLmNsaWNrKCksITEpOnR9fSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1vLmFjdGl2ZUVsZW1lbnQmJnRoaXMuZm9jdXMpdHJ5e3JldHVybiB0aGlzLmZvY3VzKCksITF9Y2F0Y2goZSl7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1vLmFjdGl2ZUVsZW1lbnQmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnR9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe2UucmVzdWx0IT09dCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9Yi5leHRlbmQobmV3IGIuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtyP2IuZXZlbnQudHJpZ2dlcihpLG51bGwsdCk6Yi5ldmVudC5kaXNwYXRjaC5jYWxsKHQsaSksaS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmbi5wcmV2ZW50RGVmYXVsdCgpfX0sYi5yZW1vdmVFdmVudD1vLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbiwhMSl9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1cIm9uXCIrdDtlLmRldGFjaEV2ZW50JiYodHlwZW9mIGVbcl09PT1pJiYoZVtyXT1udWxsKSxlLmRldGFjaEV2ZW50KHIsbikpfSxiLkV2ZW50PWZ1bmN0aW9uKGUsbil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBiLkV2ZW50PyhlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHxlLnJldHVyblZhbHVlPT09ITF8fGUuZ2V0UHJldmVudERlZmF1bHQmJmUuZ2V0UHJldmVudERlZmF1bHQoKT9pdDpvdCk6dGhpcy50eXBlPWUsbiYmYi5leHRlbmQodGhpcyxuKSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8Yi5ub3coKSx0aGlzW2IuZXhwYW5kb109ITAsdCk6bmV3IGIuRXZlbnQoZSxuKX0sYi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDpvdCxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpvdCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpvdCxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1pdCxlJiYoZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWl0LGUmJihlLnN0b3BQcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKSxlLmNhbmNlbEJ1YmJsZT0hMCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9aXQsdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LGIuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxmdW5jdGlvbihlLHQpe2IuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOnQsYmluZFR5cGU6dCxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG4scj10aGlzLGk9ZS5yZWxhdGVkVGFyZ2V0LG89ZS5oYW5kbGVPYmo7XG5yZXR1cm4oIWl8fGkhPT1yJiYhYi5jb250YWlucyhyLGkpKSYmKGUudHlwZT1vLm9yaWdUeXBlLG49by5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9dCksbn19fSksYi5zdXBwb3J0LnN1Ym1pdEJ1YmJsZXN8fChiLmV2ZW50LnNwZWNpYWwuc3VibWl0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOihiLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX3N1Ym1pdCBrZXlwcmVzcy5fc3VibWl0XCIsZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXQscj1iLm5vZGVOYW1lKG4sXCJpbnB1dFwiKXx8Yi5ub2RlTmFtZShuLFwiYnV0dG9uXCIpP24uZm9ybTp0O3ImJiFiLl9kYXRhKHIsXCJzdWJtaXRCdWJibGVzXCIpJiYoYi5ldmVudC5hZGQocixcInN1Ym1pdC5fc3VibWl0XCIsZnVuY3Rpb24oZSl7ZS5fc3VibWl0X2J1YmJsZT0hMH0pLGIuX2RhdGEocixcInN1Ym1pdEJ1YmJsZXNcIiwhMCkpfSksdCl9LHBvc3REaXNwYXRjaDpmdW5jdGlvbihlKXtlLl9zdWJtaXRfYnViYmxlJiYoZGVsZXRlIGUuX3N1Ym1pdF9idWJibGUsdGhpcy5wYXJlbnROb2RlJiYhZS5pc1RyaWdnZXImJmIuZXZlbnQuc2ltdWxhdGUoXCJzdWJtaXRcIix0aGlzLnBhcmVudE5vZGUsZSwhMCkpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOihiLmV2ZW50LnJlbW92ZSh0aGlzLFwiLl9zdWJtaXRcIiksdCl9fSksYi5zdXBwb3J0LmNoYW5nZUJ1YmJsZXN8fChiLmV2ZW50LnNwZWNpYWwuY2hhbmdlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBaLnRlc3QodGhpcy5ub2RlTmFtZSk/KChcImNoZWNrYm94XCI9PT10aGlzLnR5cGV8fFwicmFkaW9cIj09PXRoaXMudHlwZSkmJihiLmV2ZW50LmFkZCh0aGlzLFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe1wiY2hlY2tlZFwiPT09ZS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSYmKHRoaXMuX2p1c3RfY2hhbmdlZD0hMCl9KSxiLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe3RoaXMuX2p1c3RfY2hhbmdlZCYmIWUuaXNUcmlnZ2VyJiYodGhpcy5fanVzdF9jaGFuZ2VkPSExKSxiLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcyxlLCEwKX0pKSwhMSk6KGIuZXZlbnQuYWRkKHRoaXMsXCJiZWZvcmVhY3RpdmF0ZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7Wi50ZXN0KHQubm9kZU5hbWUpJiYhYi5fZGF0YSh0LFwiY2hhbmdlQnViYmxlc1wiKSYmKGIuZXZlbnQuYWRkKHQsXCJjaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpeyF0aGlzLnBhcmVudE5vZGV8fGUuaXNTaW11bGF0ZWR8fGUuaXNUcmlnZ2VyfHxiLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcy5wYXJlbnROb2RlLGUsITApfSksYi5fZGF0YSh0LFwiY2hhbmdlQnViYmxlc1wiLCEwKSl9KSx0KX0saGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciBuPWUudGFyZ2V0O3JldHVybiB0aGlzIT09bnx8ZS5pc1NpbXVsYXRlZHx8ZS5pc1RyaWdnZXJ8fFwicmFkaW9cIiE9PW4udHlwZSYmXCJjaGVja2JveFwiIT09bi50eXBlP2UuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnR9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGIuZXZlbnQucmVtb3ZlKHRoaXMsXCIuX2NoYW5nZVwiKSwhWi50ZXN0KHRoaXMubm9kZU5hbWUpfX0pLGIuc3VwcG9ydC5mb2N1c2luQnViYmxlc3x8Yi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj0wLHI9ZnVuY3Rpb24oZSl7Yi5ldmVudC5zaW11bGF0ZSh0LGUudGFyZ2V0LGIuZXZlbnQuZml4KGUpLCEwKX07Yi5ldmVudC5zcGVjaWFsW3RdPXtzZXR1cDpmdW5jdGlvbigpezA9PT1uKysmJm8uYWRkRXZlbnRMaXN0ZW5lcihlLHIsITApfSx0ZWFyZG93bjpmdW5jdGlvbigpezA9PT0tLW4mJm8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHIsITApfX19KSxiLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtcInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXQpO2ZvcihhIGluIGUpdGhpcy5vbihhLG4scixlW2FdLG8pO3JldHVybiB0aGlzfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj10KTooaT1yLHI9bixuPXQpKSxpPT09ITEpaT1vdDtlbHNlIGlmKCFpKXJldHVybiB0aGlzO3JldHVybiAxPT09byYmKHM9aSxpPWZ1bmN0aW9uKGUpe3JldHVybiBiKCkub2ZmKGUpLHMuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxpLmd1aWQ9cy5ndWlkfHwocy5ndWlkPWIuZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC5hZGQodGhpcyxlLGkscixuKX0pfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24oZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiBpPWUuaGFuZGxlT2JqLGIoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGkubmFtZXNwYWNlP2kub3JpZ1R5cGUrXCIuXCIraS5uYW1lc3BhY2U6aS5vcmlnVHlwZSxpLnNlbGVjdG9yLGkuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKG8gaW4gZSl0aGlzLm9mZihvLG4sZVtvXSk7cmV0dXJuIHRoaXN9cmV0dXJuKG49PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbikmJihyPW4sbj10KSxyPT09ITEmJihyPW90KSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LnJlbW92ZSh0aGlzLGUscixuKX0pfSxiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LHRyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLG4pe3ZhciByPXRoaXNbMF07cmV0dXJuIHI/Yi5ldmVudC50cmlnZ2VyKGUsbixyLCEwKTp0fX0pLGZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbCxjLHAsZixkLGgsZyxtLHksdix4PVwic2l6emxlXCIrLW5ldyBEYXRlLHc9ZS5kb2N1bWVudCxUPXt9LE49MCxDPTAsaz1pdCgpLEU9aXQoKSxTPWl0KCksQT10eXBlb2YgdCxqPTE8PDMxLEQ9W10sTD1ELnBvcCxIPUQucHVzaCxxPUQuc2xpY2UsTT1ELmluZGV4T2Z8fGZ1bmN0aW9uKGUpe3ZhciB0PTAsbj10aGlzLmxlbmd0aDtmb3IoO24+dDt0KyspaWYodGhpc1t0XT09PWUpcmV0dXJuIHQ7cmV0dXJuLTF9LF89XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEY9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixPPUYucmVwbGFjZShcIndcIixcIncjXCIpLEI9XCIoWypeJHwhfl0/PSlcIixQPVwiXFxcXFtcIitfK1wiKihcIitGK1wiKVwiK18rXCIqKD86XCIrQitfK1wiKig/OihbJ1xcXCJdKSgoPzpcXFxcXFxcXC58W15cXFxcXFxcXF0pKj8pXFxcXDN8KFwiK08rXCIpfCl8KVwiK18rXCIqXFxcXF1cIixSPVwiOihcIitGK1wiKSg/OlxcXFwoKChbJ1xcXCJdKSgoPzpcXFxcXFxcXC58W15cXFxcXFxcXF0pKj8pXFxcXDN8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1AucmVwbGFjZSgzLDgpK1wiKSopfC4qKVxcXFwpfClcIixXPVJlZ0V4cChcIl5cIitfK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitfK1wiKyRcIixcImdcIiksJD1SZWdFeHAoXCJeXCIrXytcIiosXCIrXytcIipcIiksST1SZWdFeHAoXCJeXCIrXytcIiooW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZj4rfl0pXCIrXytcIipcIiksej1SZWdFeHAoUiksWD1SZWdFeHAoXCJeXCIrTytcIiRcIiksVT17SUQ6UmVnRXhwKFwiXiMoXCIrRitcIilcIiksQ0xBU1M6UmVnRXhwKFwiXlxcXFwuKFwiK0YrXCIpXCIpLE5BTUU6UmVnRXhwKFwiXlxcXFxbbmFtZT1bJ1xcXCJdPyhcIitGK1wiKVsnXFxcIl0/XFxcXF1cIiksVEFHOlJlZ0V4cChcIl4oXCIrRi5yZXBsYWNlKFwid1wiLFwidypcIikrXCIpXCIpLEFUVFI6UmVnRXhwKFwiXlwiK1ApLFBTRVVETzpSZWdFeHAoXCJeXCIrUiksQ0hJTEQ6UmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitfK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrXytcIiooPzooWystXXwpXCIrXytcIiooXFxcXGQrKXwpKVwiK18rXCIqXFxcXCl8KVwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6UmVnRXhwKFwiXlwiK18rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK18rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK18rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFY9L1tcXHgyMFxcdFxcclxcblxcZl0qWyt+XS8sWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBjb2RlLyxKPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLEc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxRPS9eaFxcZCQvaSxLPS8nfFxcXFwvZyxaPS9cXD1bXFx4MjBcXHRcXHJcXG5cXGZdKihbXidcIlxcXV0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFxdL2csZXQ9L1xcXFwoW1xcZGEtZkEtRl17MSw2fVtcXHgyMFxcdFxcclxcblxcZl0/fC4pL2csdHQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrdC02NTUzNjtyZXR1cm4gbiE9PW4/dDowPm4/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fG4+PjEwLDU2MzIwfDEwMjMmbil9O3RyeXtxLmNhbGwody5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2RlcywwKVswXS5ub2RlVHlwZX1jYXRjaChudCl7cT1mdW5jdGlvbihlKXt2YXIgdCxuPVtdO3doaWxlKHQ9dGhpc1tlKytdKW4ucHVzaCh0KTtyZXR1cm4gbn19ZnVuY3Rpb24gcnQoZSl7cmV0dXJuIFkudGVzdChlK1wiXCIpfWZ1bmN0aW9uIGl0KCl7dmFyIGUsdD1bXTtyZXR1cm4gZT1mdW5jdGlvbihuLHIpe3JldHVybiB0LnB1c2gobis9XCIgXCIpPmkuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Quc2hpZnQoKV0sZVtuXT1yfX1mdW5jdGlvbiBvdChlKXtyZXR1cm4gZVt4XT0hMCxlfWZ1bmN0aW9uIGF0KGUpe3ZhciB0PXAuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuIGUodCl9Y2F0Y2gobil7cmV0dXJuITF9ZmluYWxseXt0PW51bGx9fWZ1bmN0aW9uIHN0KGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxmLGcsbSx2O2lmKCh0P3Qub3duZXJEb2N1bWVudHx8dDp3KSE9PXAmJmModCksdD10fHxwLG49bnx8W10sIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBuO2lmKDEhPT0ocz10Lm5vZGVUeXBlKSYmOSE9PXMpcmV0dXJuW107aWYoIWQmJiFyKXtpZihpPUouZXhlYyhlKSlpZihhPWlbMV0pe2lmKDk9PT1zKXtpZihvPXQuZ2V0RWxlbWVudEJ5SWQoYSksIW98fCFvLnBhcmVudE5vZGUpcmV0dXJuIG47aWYoby5pZD09PWEpcmV0dXJuIG4ucHVzaChvKSxufWVsc2UgaWYodC5vd25lckRvY3VtZW50JiYobz10Lm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpJiZ5KHQsbykmJm8uaWQ9PT1hKXJldHVybiBuLnB1c2gobyksbn1lbHNle2lmKGlbMl0pcmV0dXJuIEguYXBwbHkobixxLmNhbGwodC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSwwKSksbjtpZigoYT1pWzNdKSYmVC5nZXRCeUNsYXNzTmFtZSYmdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4scS5jYWxsKHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKSwwKSksbn1pZihULnFzYSYmIWgudGVzdChlKSl7aWYoZj0hMCxnPXgsbT10LHY9OT09PXMmJmUsMT09PXMmJlwib2JqZWN0XCIhPT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2w9ZnQoZSksKGY9dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/Zz1mLnJlcGxhY2UoSyxcIlxcXFwkJlwiKTp0LnNldEF0dHJpYnV0ZShcImlkXCIsZyksZz1cIltpZD0nXCIrZytcIiddIFwiLHU9bC5sZW5ndGg7d2hpbGUodS0tKWxbdV09ZytkdChsW3VdKTttPVYudGVzdChlKSYmdC5wYXJlbnROb2RlfHx0LHY9bC5qb2luKFwiLFwiKX1pZih2KXRyeXtyZXR1cm4gSC5hcHBseShuLHEuY2FsbChtLnF1ZXJ5U2VsZWN0b3JBbGwodiksMCkpLG59Y2F0Y2goYil7fWZpbmFsbHl7Znx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiB3dChlLnJlcGxhY2UoVyxcIiQxXCIpLHQsbixyKX1hPXN0LmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gdD9cIkhUTUxcIiE9PXQubm9kZU5hbWU6ITF9LGM9c3Quc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIG49ZT9lLm93bmVyRG9jdW1lbnR8fGU6dztyZXR1cm4gbiE9PXAmJjk9PT1uLm5vZGVUeXBlJiZuLmRvY3VtZW50RWxlbWVudD8ocD1uLGY9bi5kb2N1bWVudEVsZW1lbnQsZD1hKG4pLFQudGFnTmFtZU5vQ29tbWVudHM9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksVC5hdHRyaWJ1dGVzPWF0KGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPHNlbGVjdD48L3NlbGVjdD5cIjt2YXIgdD10eXBlb2YgZS5sYXN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIik7cmV0dXJuXCJib29sZWFuXCIhPT10JiZcInN0cmluZ1wiIT09dH0pLFQuZ2V0QnlDbGFzc05hbWU9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGRpdiBjbGFzcz0naGlkZGVuIGUnPjwvZGl2PjxkaXYgY2xhc3M9J2hpZGRlbic+PC9kaXY+XCIsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlXCIpLmxlbmd0aD8oZS5sYXN0Q2hpbGQuY2xhc3NOYW1lPVwiZVwiLDI9PT1lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlXCIpLmxlbmd0aCk6ITF9KSxULmdldEJ5TmFtZT1hdChmdW5jdGlvbihlKXtlLmlkPXgrMCxlLmlubmVySFRNTD1cIjxhIG5hbWU9J1wiK3grXCInPjwvYT48ZGl2IG5hbWU9J1wiK3grXCInPjwvZGl2PlwiLGYuaW5zZXJ0QmVmb3JlKGUsZi5maXJzdENoaWxkKTt2YXIgdD1uLmdldEVsZW1lbnRzQnlOYW1lJiZuLmdldEVsZW1lbnRzQnlOYW1lKHgpLmxlbmd0aD09PTIrbi5nZXRFbGVtZW50c0J5TmFtZSh4KzApLmxlbmd0aDtyZXR1cm4gVC5nZXRJZE5vdE5hbWU9IW4uZ2V0RWxlbWVudEJ5SWQoeCksZi5yZW1vdmVDaGlsZChlKSx0fSksaS5hdHRySGFuZGxlPWF0KGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixlLmZpcnN0Q2hpbGQmJnR5cGVvZiBlLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlIT09QSYmXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pP3t9OntocmVmOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImhyZWZcIiwyKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0sVC5nZXRJZE5vdE5hbWU/KGkuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKHR5cGVvZiB0LmdldEVsZW1lbnRCeUlkIT09QSYmIWQpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4mJm4ucGFyZW50Tm9kZT9bbl06W119fSxpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoZXQsdHQpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSk6KGkuZmluZC5JRD1mdW5jdGlvbihlLG4pe2lmKHR5cGVvZiBuLmdldEVsZW1lbnRCeUlkIT09QSYmIWQpe3ZhciByPW4uZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIHI/ci5pZD09PWV8fHR5cGVvZiByLmdldEF0dHJpYnV0ZU5vZGUhPT1BJiZyLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKS52YWx1ZT09PWU/W3JdOnQ6W119fSxpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoZXQsdHQpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlIT09QSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIG4mJm4udmFsdWU9PT10fX0pLGkuZmluZC5UQUc9VC50YWdOYW1lTm9Db21tZW50cz9mdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PUE/bi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTp0fTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGkuZmluZC5OQU1FPVQuZ2V0QnlOYW1lJiZmdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5TmFtZSE9PUE/bi5nZXRFbGVtZW50c0J5TmFtZShuYW1lKTp0fSxpLmZpbmQuQ0xBU1M9VC5nZXRCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSxuKXtyZXR1cm4gdHlwZW9mIG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT09PUF8fGQ/dDpuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LGc9W10saD1bXCI6Zm9jdXNcIl0sKFQucXNhPXJ0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoYXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8c2VsZWN0PjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fGgucHVzaChcIlxcXFxbXCIrXytcIiooPzpjaGVja2VkfGRpc2FibGVkfGlzbWFwfG11bHRpcGxlfHJlYWRvbmx5fHNlbGVjdGVkfHZhbHVlKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fGgucHVzaChcIjpjaGVja2VkXCIpfSksYXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8aW5wdXQgdHlwZT0naGlkZGVuJyBpPScnLz5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaV49JyddXCIpLmxlbmd0aCYmaC5wdXNoKFwiWypeJF09XCIrXytcIiooPzpcXFwiXFxcInwnJylcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxoLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksaC5wdXNoKFwiLC4qOlwiKX0pKSwoVC5tYXRjaGVzU2VsZWN0b3I9cnQobT1mLm1hdGNoZXNTZWxlY3Rvcnx8Zi5tb3pNYXRjaGVzU2VsZWN0b3J8fGYud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxmLm9NYXRjaGVzU2VsZWN0b3J8fGYubXNNYXRjaGVzU2VsZWN0b3IpKSYmYXQoZnVuY3Rpb24oZSl7VC5kaXNjb25uZWN0ZWRNYXRjaD1tLmNhbGwoZSxcImRpdlwiKSxtLmNhbGwoZSxcIltzIT0nJ106eFwiKSxnLnB1c2goXCIhPVwiLFIpfSksaD1SZWdFeHAoaC5qb2luKFwifFwiKSksZz1SZWdFeHAoZy5qb2luKFwifFwiKSkseT1ydChmLmNvbnRhaW5zKXx8Zi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LHY9Zi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiBlPT09dD8odT0hMCwwKToocj10LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpKT8xJnJ8fGUucGFyZW50Tm9kZSYmMTE9PT1lLnBhcmVudE5vZGUubm9kZVR5cGU/ZT09PW58fHkodyxlKT8tMTp0PT09bnx8eSh3LHQpPzE6MDo0JnI/LTE6MTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPy0xOjF9OmZ1bmN0aW9uKGUsdCl7dmFyIHIsaT0wLG89ZS5wYXJlbnROb2RlLGE9dC5wYXJlbnROb2RlLHM9W2VdLGw9W3RdO2lmKGU9PT10KXJldHVybiB1PSEwLDA7aWYoIW98fCFhKXJldHVybiBlPT09bj8tMTp0PT09bj8xOm8/LTE6YT8xOjA7aWYobz09PWEpcmV0dXJuIHV0KGUsdCk7cj1lO3doaWxlKHI9ci5wYXJlbnROb2RlKXMudW5zaGlmdChyKTtyPXQ7d2hpbGUocj1yLnBhcmVudE5vZGUpbC51bnNoaWZ0KHIpO3doaWxlKHNbaV09PT1sW2ldKWkrKztyZXR1cm4gaT91dChzW2ldLGxbaV0pOnNbaV09PT13Py0xOmxbaV09PT13PzE6MH0sdT0hMSxbMCwwXS5zb3J0KHYpLFQuZGV0ZWN0RHVwbGljYXRlcz11LHApOnB9LHN0Lm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc3QoZSxudWxsLG51bGwsdCl9LHN0Lm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKChlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSx0PXQucmVwbGFjZShaLFwiPSckMSddXCIpLCEoIVQubWF0Y2hlc1NlbGVjdG9yfHxkfHxnJiZnLnRlc3QodCl8fGgudGVzdCh0KSkpdHJ5e3ZhciBuPW0uY2FsbChlLHQpO2lmKG58fFQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChyKXt9cmV0dXJuIHN0KHQscCxudWxsLFtlXSkubGVuZ3RoPjB9LHN0LmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLHkoZSx0KX0sc3QuYXR0cj1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSxkfHwodD10LnRvTG93ZXJDYXNlKCkpLChuPWkuYXR0ckhhbmRsZVt0XSk/bihlKTpkfHxULmF0dHJpYnV0ZXM/ZS5nZXRBdHRyaWJ1dGUodCk6KChuPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSl8fGUuZ2V0QXR0cmlidXRlKHQpKSYmZVt0XT09PSEwP3Q6biYmbi5zcGVjaWZpZWQ/bi52YWx1ZTpudWxsfSxzdC5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzdC51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0xLGk9MDtpZih1PSFULmRldGVjdER1cGxpY2F0ZXMsZS5zb3J0KHYpLHUpe2Zvcig7dD1lW3JdO3IrKyl0PT09ZVtyLTFdJiYoaT1uLnB1c2gocikpO3doaWxlKGktLSllLnNwbGljZShuW2ldLDEpfXJldHVybiBlfTtmdW5jdGlvbiB1dChlLHQpe3ZhciBuPXQmJmUscj1uJiYofnQuc291cmNlSW5kZXh8fGopLSh+ZS5zb3VyY2VJbmRleHx8aik7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGx0KGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09biYmdC50eXBlPT09ZX19ZnVuY3Rpb24gY3QoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09bnx8XCJidXR0b25cIj09PW4pJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBwdChlKXtyZXR1cm4gb3QoZnVuY3Rpb24odCl7cmV0dXJuIHQ9K3Qsb3QoZnVuY3Rpb24obixyKXt2YXIgaSxvPWUoW10sbi5sZW5ndGgsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0pbltpPW9bYV1dJiYobltpXT0hKHJbaV09bltpXSkpfSl9KX1vPXN0LmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIGZvcig7dD1lW3JdO3IrKyluKz1vKHQpO3JldHVybiBufSxpPXN0LnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOm90LG1hdGNoOlUsZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKGV0LHR0KSxlWzNdPShlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKGV0LHR0KSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzdC5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzdC5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs1XSYmZVsyXTtyZXR1cm4gVS5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbNF0/ZVsyXT1lWzRdOm4mJnoudGVzdChuKSYmKHQ9ZnQobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06KGU9ZS5yZXBsYWNlKGV0LHR0KS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKHQpe3JldHVybiB0Lm5vZGVOYW1lJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1lfSl9LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PWtbZStcIiBcIl07cmV0dXJuIHR8fCh0PVJlZ0V4cChcIihefFwiK18rXCIpXCIrZStcIihcIitfK1wifCQpXCIpKSYmayhlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoZS5jbGFzc05hbWV8fHR5cGVvZiBlLmdldEF0dHJpYnV0ZSE9PUEmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaT1zdC5hdHRyKHIsZSk7cmV0dXJuIG51bGw9PWk/XCIhPVwiPT09dDp0PyhpKz1cIlwiLFwiPVwiPT09dD9pPT09bjpcIiE9XCI9PT10P2khPT1uOlwiXj1cIj09PXQ/biYmMD09PWkuaW5kZXhPZihuKTpcIio9XCI9PT10P24mJmkuaW5kZXhPZihuKT4tMTpcIiQ9XCI9PT10P24mJmkuc2xpY2UoLW4ubGVuZ3RoKT09PW46XCJ+PVwiPT09dD8oXCIgXCIraStcIiBcIikuaW5kZXhPZihuKT4tMTpcInw9XCI9PT10P2k9PT1ufHxpLnNsaWNlKDAsbi5sZW5ndGgrMSk9PT1uK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG89XCJudGhcIiE9PWUuc2xpY2UoMCwzKSxhPVwibGFzdFwiIT09ZS5zbGljZSgtNCkscz1cIm9mLXR5cGVcIj09PXQ7cmV0dXJuIDE9PT1yJiYwPT09aT9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24odCxuLHUpe3ZhciBsLGMscCxmLGQsaCxnPW8hPT1hP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLG09dC5wYXJlbnROb2RlLHk9cyYmdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHY9IXUmJiFzO2lmKG0pe2lmKG8pe3doaWxlKGcpe3A9dDt3aGlsZShwPXBbZ10paWYocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT15OjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2g9Zz1cIm9ubHlcIj09PWUmJiFoJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoaD1bYT9tLmZpcnN0Q2hpbGQ6bS5sYXN0Q2hpbGRdLGEmJnYpe2M9bVt4XXx8KG1beF09e30pLGw9Y1tlXXx8W10sZD1sWzBdPT09TiYmbFsxXSxmPWxbMF09PT1OJiZsWzJdLHA9ZCYmbS5jaGlsZE5vZGVzW2RdO3doaWxlKHA9KytkJiZwJiZwW2ddfHwoZj1kPTApfHxoLnBvcCgpKWlmKDE9PT1wLm5vZGVUeXBlJiYrK2YmJnA9PT10KXtjW2VdPVtOLGQsZl07YnJlYWt9fWVsc2UgaWYodiYmKGw9KHRbeF18fCh0W3hdPXt9KSlbZV0pJiZsWzBdPT09TilmPWxbMV07ZWxzZSB3aGlsZShwPSsrZCYmcCYmcFtnXXx8KGY9ZD0wKXx8aC5wb3AoKSlpZigocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT15OjE9PT1wLm5vZGVUeXBlKSYmKytmJiYodiYmKChwW3hdfHwocFt4XT17fSkpW2VdPVtOLGZdKSxwPT09dCkpYnJlYWs7cmV0dXJuIGYtPWksZj09PXJ8fDA9PT1mJXImJmYvcj49MH19fSxQU0VVRE86ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkucHNldWRvc1tlXXx8aS5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHN0LmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gclt4XT9yKHQpOnIubGVuZ3RoPjE/KG49W2UsZSxcIlwiLHRdLGkuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP290KGZ1bmN0aW9uKGUsbil7dmFyIGksbz1yKGUsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0paT1NLmNhbGwoZSxvW2FdKSxlW2ldPSEobltpXT1vW2FdKX0pOmZ1bmN0aW9uKGUpe3JldHVybiByKGUsMCxuKX0pOnJ9fSxwc2V1ZG9zOntub3Q6b3QoZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj1bXSxyPXMoZS5yZXBsYWNlKFcsXCIkMVwiKSk7cmV0dXJuIHJbeF0/b3QoZnVuY3Rpb24oZSx0LG4saSl7dmFyIG8sYT1yKGUsbnVsbCxpLFtdKSxzPWUubGVuZ3RoO3doaWxlKHMtLSkobz1hW3NdKSYmKGVbc109ISh0W3NdPW8pKX0pOmZ1bmN0aW9uKGUsaSxvKXtyZXR1cm4gdFswXT1lLHIodCxudWxsLG8sbiksIW4ucG9wKCl9fSksaGFzOm90KGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gc3QoZSx0KS5sZW5ndGg+MH19KSxjb250YWluczpvdChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuKHQudGV4dENvbnRlbnR8fHQuaW5uZXJUZXh0fHxvKHQpKS5pbmRleE9mKGUpPi0xfX0pLGxhbmc6b3QoZnVuY3Rpb24oZSl7cmV0dXJuIFgudGVzdChlfHxcIlwiKXx8c3QuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIitlKSxlPWUucmVwbGFjZShldCx0dCkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbih0KXt2YXIgbjtkbyBpZihuPWQ/dC5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8dC5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpOnQubGFuZylyZXR1cm4gbj1uLnRvTG93ZXJDYXNlKCksbj09PWV8fDA9PT1uLmluZGV4T2YoZStcIi1cIik7d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmMT09PXQubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbih0KXt2YXIgbj1lLmxvY2F0aW9uJiZlLmxvY2F0aW9uLmhhc2g7cmV0dXJuIG4mJm4uc2xpY2UoMSk9PT10LmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Zn0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1wLmFjdGl2ZUVsZW1lbnQmJighcC5oYXNGb2N1c3x8cC5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsZS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlTmFtZT5cIkBcInx8Mz09PWUubm9kZVR5cGV8fDQ9PT1lLm5vZGVUeXBlKXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWkucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBHLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fHQudG9Mb3dlckNhc2UoKT09PWUudHlwZSl9LGZpcnN0OnB0KGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwdChmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6cHQoZnVuY3Rpb24oZSx0LG4pe3JldHVyblswPm4/bit0Om5dfSksZXZlbjpwdChmdW5jdGlvbihlLHQpe3ZhciBuPTA7Zm9yKDt0Pm47bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6cHQoZnVuY3Rpb24oZSx0KXt2YXIgbj0xO2Zvcig7dD5uO24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6cHQoZnVuY3Rpb24oZSx0LG4pe3ZhciByPTA+bj9uK3Q6bjtmb3IoOy0tcj49MDspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6cHQoZnVuY3Rpb24oZSx0LG4pe3ZhciByPTA+bj9uK3Q6bjtmb3IoO3Q+KytyOyllLnB1c2gocik7cmV0dXJuIGV9KX19O2ZvcihuIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWkucHNldWRvc1tuXT1sdChuKTtmb3IobiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWkucHNldWRvc1tuXT1jdChuKTtmdW5jdGlvbiBmdChlLHQpe3ZhciBuLHIsbyxhLHMsdSxsLGM9RVtlK1wiIFwiXTtpZihjKXJldHVybiB0PzA6Yy5zbGljZSgwKTtzPWUsdT1bXSxsPWkucHJlRmlsdGVyO3doaWxlKHMpeyghbnx8KHI9JC5leGVjKHMpKSkmJihyJiYocz1zLnNsaWNlKHJbMF0ubGVuZ3RoKXx8cyksdS5wdXNoKG89W10pKSxuPSExLChyPUkuZXhlYyhzKSkmJihuPXIuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoVyxcIiBcIil9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtmb3IoYSBpbiBpLmZpbHRlcikhKHI9VVthXS5leGVjKHMpKXx8bFthXSYmIShyPWxbYV0ocikpfHwobj1yLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6YSxtYXRjaGVzOnJ9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9zLmxlbmd0aDpzP3N0LmVycm9yKGUpOkUoZSx1KS5zbGljZSgwKX1mdW5jdGlvbiBkdChlKXt2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO2Zvcig7bj50O3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGh0KGUsdCxuKXt2YXIgaT10LmRpcixvPW4mJlwicGFyZW50Tm9kZVwiPT09aSxhPUMrKztyZXR1cm4gdC5maXJzdD9mdW5jdGlvbih0LG4scil7d2hpbGUodD10W2ldKWlmKDE9PT10Lm5vZGVUeXBlfHxvKXJldHVybiBlKHQsbixyKX06ZnVuY3Rpb24odCxuLHMpe3ZhciB1LGwsYyxwPU4rXCIgXCIrYTtpZihzKXt3aGlsZSh0PXRbaV0paWYoKDE9PT10Lm5vZGVUeXBlfHxvKSYmZSh0LG4scykpcmV0dXJuITB9ZWxzZSB3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fG8paWYoYz10W3hdfHwodFt4XT17fSksKGw9Y1tpXSkmJmxbMF09PT1wKXtpZigodT1sWzFdKT09PSEwfHx1PT09cilyZXR1cm4gdT09PSEwfWVsc2UgaWYobD1jW2ldPVtwXSxsWzFdPWUodCxuLHMpfHxyLGxbMV09PT0hMClyZXR1cm4hMH19ZnVuY3Rpb24gZ3QoZSl7cmV0dXJuIGUubGVuZ3RoPjE/ZnVuY3Rpb24odCxuLHIpe3ZhciBpPWUubGVuZ3RoO3doaWxlKGktLSlpZighZVtpXSh0LG4scikpcmV0dXJuITE7cmV0dXJuITB9OmVbMF19ZnVuY3Rpb24gbXQoZSx0LG4scixpKXt2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtmb3IoO3U+cztzKyspKG89ZVtzXSkmJighbnx8bihvLHIsaSkpJiYoYS5wdXNoKG8pLGwmJnQucHVzaChzKSk7cmV0dXJuIGF9ZnVuY3Rpb24geXQoZSx0LG4scixpLG8pe3JldHVybiByJiYhclt4XSYmKHI9eXQocikpLGkmJiFpW3hdJiYoaT15dChpLG8pKSxvdChmdW5jdGlvbihvLGEscyx1KXt2YXIgbCxjLHAsZj1bXSxkPVtdLGg9YS5sZW5ndGgsZz1vfHx4dCh0fHxcIipcIixzLm5vZGVUeXBlP1tzXTpzLFtdKSxtPSFlfHwhbyYmdD9nOm10KGcsZixlLHMsdSkseT1uP2l8fChvP2U6aHx8cik/W106YTptO2lmKG4mJm4obSx5LHMsdSkscil7bD1tdCh5LGQpLHIobCxbXSxzLHUpLGM9bC5sZW5ndGg7d2hpbGUoYy0tKShwPWxbY10pJiYoeVtkW2NdXT0hKG1bZFtjXV09cCkpfWlmKG8pe2lmKGl8fGUpe2lmKGkpe2w9W10sYz15Lmxlbmd0aDt3aGlsZShjLS0pKHA9eVtjXSkmJmwucHVzaChtW2NdPXApO2kobnVsbCx5PVtdLGwsdSl9Yz15Lmxlbmd0aDt3aGlsZShjLS0pKHA9eVtjXSkmJihsPWk/TS5jYWxsKG8scCk6ZltjXSk+LTEmJihvW2xdPSEoYVtsXT1wKSl9fWVsc2UgeT1tdCh5PT09YT95LnNwbGljZShoLHkubGVuZ3RoKTp5KSxpP2kobnVsbCxhLHksdSk6SC5hcHBseShhLHkpfSl9ZnVuY3Rpb24gdnQoZSl7dmFyIHQsbixyLG89ZS5sZW5ndGgsYT1pLnJlbGF0aXZlW2VbMF0udHlwZV0scz1hfHxpLnJlbGF0aXZlW1wiIFwiXSx1PWE/MTowLGM9aHQoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSxzLCEwKSxwPWh0KGZ1bmN0aW9uKGUpe3JldHVybiBNLmNhbGwodCxlKT4tMX0scywhMCksZj1bZnVuY3Rpb24oZSxuLHIpe3JldHVybiFhJiYocnx8biE9PWwpfHwoKHQ9bikubm9kZVR5cGU/YyhlLG4scik6cChlLG4scikpfV07Zm9yKDtvPnU7dSsrKWlmKG49aS5yZWxhdGl2ZVtlW3VdLnR5cGVdKWY9W2h0KGd0KGYpLG4pXTtlbHNle2lmKG49aS5maWx0ZXJbZVt1XS50eXBlXS5hcHBseShudWxsLGVbdV0ubWF0Y2hlcyksblt4XSl7Zm9yKHI9Kyt1O28+cjtyKyspaWYoaS5yZWxhdGl2ZVtlW3JdLnR5cGVdKWJyZWFrO3JldHVybiB5dCh1PjEmJmd0KGYpLHU+MSYmZHQoZS5zbGljZSgwLHUtMSkpLnJlcGxhY2UoVyxcIiQxXCIpLG4scj51JiZ2dChlLnNsaWNlKHUscikpLG8+ciYmdnQoZT1lLnNsaWNlKHIpKSxvPnImJmR0KGUpKX1mLnB1c2gobil9cmV0dXJuIGd0KGYpfWZ1bmN0aW9uIGJ0KGUsdCl7dmFyIG49MCxvPXQubGVuZ3RoPjAsYT1lLmxlbmd0aD4wLHM9ZnVuY3Rpb24ocyx1LGMsZixkKXt2YXIgaCxnLG0seT1bXSx2PTAsYj1cIjBcIix4PXMmJltdLHc9bnVsbCE9ZCxUPWwsQz1zfHxhJiZpLmZpbmQuVEFHKFwiKlwiLGQmJnUucGFyZW50Tm9kZXx8dSksaz1OKz1udWxsPT1UPzE6TWF0aC5yYW5kb20oKXx8LjE7Zm9yKHcmJihsPXUhPT1wJiZ1LHI9bik7bnVsbCE9KGg9Q1tiXSk7YisrKXtpZihhJiZoKXtnPTA7d2hpbGUobT1lW2crK10paWYobShoLHUsYykpe2YucHVzaChoKTticmVha313JiYoTj1rLHI9KytuKX1vJiYoKGg9IW0mJmgpJiZ2LS0scyYmeC5wdXNoKGgpKX1pZih2Kz1iLG8mJmIhPT12KXtnPTA7d2hpbGUobT10W2crK10pbSh4LHksdSxjKTtpZihzKXtpZih2PjApd2hpbGUoYi0tKXhbYl18fHlbYl18fCh5W2JdPUwuY2FsbChmKSk7eT1tdCh5KX1ILmFwcGx5KGYseSksdyYmIXMmJnkubGVuZ3RoPjAmJnYrdC5sZW5ndGg+MSYmc3QudW5pcXVlU29ydChmKX1yZXR1cm4gdyYmKE49ayxsPVQpLHh9O3JldHVybiBvP290KHMpOnN9cz1zdC5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPVtdLG89U1tlK1wiIFwiXTtpZighbyl7dHx8KHQ9ZnQoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKW89dnQodFtuXSksb1t4XT9yLnB1c2gobyk6aS5wdXNoKG8pO289UyhlLGJ0KGkscikpfXJldHVybiBvfTtmdW5jdGlvbiB4dChlLHQsbil7dmFyIHI9MCxpPXQubGVuZ3RoO2Zvcig7aT5yO3IrKylzdChlLHRbcl0sbik7cmV0dXJuIG59ZnVuY3Rpb24gd3QoZSx0LG4scil7dmFyIG8sYSx1LGwsYyxwPWZ0KGUpO2lmKCFyJiYxPT09cC5sZW5ndGgpe2lmKGE9cFswXT1wWzBdLnNsaWNlKDApLGEubGVuZ3RoPjImJlwiSURcIj09PSh1PWFbMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiYhZCYmaS5yZWxhdGl2ZVthWzFdLnR5cGVdKXtpZih0PWkuZmluZC5JRCh1Lm1hdGNoZXNbMF0ucmVwbGFjZShldCx0dCksdClbMF0sIXQpcmV0dXJuIG47ZT1lLnNsaWNlKGEuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfW89VS5uZWVkc0NvbnRleHQudGVzdChlKT8wOmEubGVuZ3RoO3doaWxlKG8tLSl7aWYodT1hW29dLGkucmVsYXRpdmVbbD11LnR5cGVdKWJyZWFrO2lmKChjPWkuZmluZFtsXSkmJihyPWModS5tYXRjaGVzWzBdLnJlcGxhY2UoZXQsdHQpLFYudGVzdChhWzBdLnR5cGUpJiZ0LnBhcmVudE5vZGV8fHQpKSl7aWYoYS5zcGxpY2UobywxKSxlPXIubGVuZ3RoJiZkdChhKSwhZSlyZXR1cm4gSC5hcHBseShuLHEuY2FsbChyLDApKSxuO2JyZWFrfX19cmV0dXJuIHMoZSxwKShyLHQsZCxuLFYudGVzdChlKSksbn1pLnBzZXVkb3MubnRoPWkucHNldWRvcy5lcTtmdW5jdGlvbiBUdCgpe31pLmZpbHRlcnM9VHQucHJvdG90eXBlPWkucHNldWRvcyxpLnNldEZpbHRlcnM9bmV3IFR0LGMoKSxzdC5hdHRyPWIuYXR0cixiLmZpbmQ9c3QsYi5leHByPXN0LnNlbGVjdG9ycyxiLmV4cHJbXCI6XCJdPWIuZXhwci5wc2V1ZG9zLGIudW5pcXVlPXN0LnVuaXF1ZVNvcnQsYi50ZXh0PXN0LmdldFRleHQsYi5pc1hNTERvYz1zdC5pc1hNTCxiLmNvbnRhaW5zPXN0LmNvbnRhaW5zfShlKTt2YXIgYXQ9L1VudGlsJC8sc3Q9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sdXQ9L14uW146I1xcW1xcLixdKiQvLGx0PWIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsY3Q9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07Yi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9dGhpcy5sZW5ndGg7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHI9dGhpcyx0aGlzLnB1c2hTdGFjayhiKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7aT50O3QrKylpZihiLmNvbnRhaW5zKHJbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49W10sdD0wO2k+dDt0KyspYi5maW5kKGUsdGhpc1t0XSxuKTtyZXR1cm4gbj10aGlzLnB1c2hTdGFjayhpPjE/Yi51bmlxdWUobik6biksbi5zZWxlY3Rvcj0odGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiOlwiXCIpK2Usbn0saGFzOmZ1bmN0aW9uKGUpe3ZhciB0LG49YihlLHRoaXMpLHI9bi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDtyPnQ7dCsrKWlmKGIuY29udGFpbnModGhpcyxuW3RdKSlyZXR1cm4hMH0pfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGZ0KHRoaXMsZSwhMSkpfSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGZ0KHRoaXMsZSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWUmJihcInN0cmluZ1wiPT10eXBlb2YgZT9sdC50ZXN0KGUpP2IoZSx0aGlzLmNvbnRleHQpLmluZGV4KHRoaXNbMF0pPj0wOmIuZmlsdGVyKGUsdGhpcykubGVuZ3RoPjA6dGhpcy5maWx0ZXIoZSkubGVuZ3RoPjApfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPWx0LnRlc3QoZSl8fFwic3RyaW5nXCIhPXR5cGVvZiBlP2IoZSx0fHx0aGlzLmNvbnRleHQpOjA7Zm9yKDtpPnI7cisrKXtuPXRoaXNbcl07d2hpbGUobiYmbi5vd25lckRvY3VtZW50JiZuIT09dCYmMTEhPT1uLm5vZGVUeXBlKXtpZihhP2EuaW5kZXgobik+LTE6Yi5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKXtvLnB1c2gobik7YnJlYWt9bj1uLnBhcmVudE5vZGV9fXJldHVybiB0aGlzLnB1c2hTdGFjayhvLmxlbmd0aD4xP2IudW5pcXVlKG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9iLmluQXJyYXkodGhpc1swXSxiKGUpKTpiLmluQXJyYXkoZS5qcXVlcnk/ZVswXTplLHRoaXMpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIj09dHlwZW9mIGU/YihlLHQpOmIubWFrZUFycmF5KGUmJmUubm9kZVR5cGU/W2VdOmUpLHI9Yi5tZXJnZSh0aGlzLmdldCgpLG4pO3JldHVybiB0aGlzLnB1c2hTdGFjayhiLnVuaXF1ZShyKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLGIuZm4uYW5kU2VsZj1iLmZuLmFkZEJhY2s7ZnVuY3Rpb24gcHQoZSx0KXtkbyBlPWVbdF07d2hpbGUoZSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfWIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZGlyKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHB0KGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gcHQoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmRpcihlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5kaXIoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gYi5zaWJsaW5nKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gYi5zaWJsaW5nKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBiLm5vZGVOYW1lKGUsXCJpZnJhbWVcIik/ZS5jb250ZW50RG9jdW1lbnR8fGUuY29udGVudFdpbmRvdy5kb2N1bWVudDpiLm1lcmdlKFtdLGUuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24obixyKXt2YXIgaT1iLm1hcCh0aGlzLHQsbik7cmV0dXJuIGF0LnRlc3QoZSl8fChyPW4pLHImJlwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1iLmZpbHRlcihyLGkpKSxpPXRoaXMubGVuZ3RoPjEmJiFjdFtlXT9iLnVuaXF1ZShpKTppLHRoaXMubGVuZ3RoPjEmJnN0LnRlc3QoZSkmJihpPWkucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhpKX19KSxiLmV4dGVuZCh7ZmlsdGVyOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aD9iLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHRbMF0sZSk/W3RbMF1dOltdOmIuZmluZC5tYXRjaGVzKGUsdCl9LGRpcjpmdW5jdGlvbihlLG4scil7dmFyIGk9W10sbz1lW25dO3doaWxlKG8mJjkhPT1vLm5vZGVUeXBlJiYocj09PXR8fDEhPT1vLm5vZGVUeXBlfHwhYihvKS5pcyhyKSkpMT09PW8ubm9kZVR5cGUmJmkucHVzaChvKSxvPW9bbl07cmV0dXJuIGl9LHNpYmxpbmc6ZnVuY3Rpb24oZSx0KXt2YXIgbj1bXTtmb3IoO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufX0pO2Z1bmN0aW9uIGZ0KGUsdCxuKXtpZih0PXR8fDAsYi5pc0Z1bmN0aW9uKHQpKXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlLHIpe3ZhciBpPSEhdC5jYWxsKGUscixlKTtyZXR1cm4gaT09PW59KTtpZih0Lm5vZGVUeXBlKXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQ9PT1ufSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciByPWIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pO2lmKHV0LnRlc3QodCkpcmV0dXJuIGIuZmlsdGVyKHQsciwhbik7dD1iLmZpbHRlcih0LHIpfXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gYi5pbkFycmF5KGUsdCk+PTA9PT1ufSl9ZnVuY3Rpb24gZHQoZSl7dmFyIHQ9aHQuc3BsaXQoXCJ8XCIpLG49ZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYobi5jcmVhdGVFbGVtZW50KXdoaWxlKHQubGVuZ3RoKW4uY3JlYXRlRWxlbWVudCh0LnBvcCgpKTtyZXR1cm4gbn12YXIgaHQ9XCJhYmJyfGFydGljbGV8YXNpZGV8YXVkaW98YmRpfGNhbnZhc3xkYXRhfGRhdGFsaXN0fGRldGFpbHN8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGhlYWRlcnxoZ3JvdXB8bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHByb2dyZXNzfHNlY3Rpb258c3VtbWFyeXx0aW1lfHZpZGVvXCIsZ3Q9LyBqUXVlcnlcXGQrPVwiKD86bnVsbHxcXGQrKVwiL2csbXQ9UmVnRXhwKFwiPCg/OlwiK2h0K1wiKVtcXFxccy8+XVwiLFwiaVwiKSx5dD0vXlxccysvLHZ0PS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxidD0vPChbXFx3Ol0rKS8seHQ9Lzx0Ym9keS9pLHd0PS88fCYjP1xcdys7LyxUdD0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLE50PS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLEN0PS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksa3Q9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxFdD0vXnRydWVcXC8oLiopLyxTdD0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csQXQ9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxsZWdlbmQ6WzEsXCI8ZmllbGRzZXQ+XCIsXCI8L2ZpZWxkc2V0PlwiXSxhcmVhOlsxLFwiPG1hcD5cIixcIjwvbWFwPlwiXSxwYXJhbTpbMSxcIjxvYmplY3Q+XCIsXCI8L29iamVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6Yi5zdXBwb3J0Lmh0bWxTZXJpYWxpemU/WzAsXCJcIixcIlwiXTpbMSxcIlg8ZGl2PlwiLFwiPC9kaXY+XCJdfSxqdD1kdChvKSxEdD1qdC5hcHBlbmRDaGlsZChvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO0F0Lm9wdGdyb3VwPUF0Lm9wdGlvbixBdC50Ym9keT1BdC50Zm9vdD1BdC5jb2xncm91cD1BdC5jYXB0aW9uPUF0LnRoZWFkLEF0LnRoPUF0LnRkLGIuZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dD9iLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmFwcGVuZCgodGhpc1swXSYmdGhpc1swXS5vd25lckRvY3VtZW50fHxvKS5jcmVhdGVUZXh0Tm9kZShlKSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sd3JhcEFsbDpmdW5jdGlvbihlKXtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLndyYXBBbGwoZS5jYWxsKHRoaXMsdCkpfSk7aWYodGhpc1swXSl7dmFyIHQ9YihlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApO3RoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RDaGlsZCYmMT09PWUuZmlyc3RDaGlsZC5ub2RlVHlwZSllPWUuZmlyc3RDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKX1yZXR1cm4gdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGUpe3JldHVybiBiLmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykud3JhcElubmVyKGUuY2FsbCh0aGlzLHQpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWIodGhpcyksbj10LmNvbnRlbnRzKCk7bi5sZW5ndGg/bi53cmFwQWxsKGUpOnQuYXBwZW5kKGUpfSl9LHdyYXA6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5pc0Z1bmN0aW9uKGUpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7Yih0aGlzKS53cmFwQWxsKHQ/ZS5jYWxsKHRoaXMsbik6ZSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe2Iubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fGIodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITAsZnVuY3Rpb24oZSl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmdGhpcy5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLCEwLGZ1bmN0aW9uKGUpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJnRoaXMuaW5zZXJ0QmVmb3JlKGUsdGhpcy5maXJzdENoaWxkKX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITEsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITEsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2Zvcig7bnVsbCE9KG49dGhpc1tyXSk7cisrKSghZXx8Yi5maWx0ZXIoZSxbbl0pLmxlbmd0aD4wKSYmKHR8fDEhPT1uLm5vZGVUeXBlfHxiLmNsZWFuRGF0YShPdChuKSksbi5wYXJlbnROb2RlJiYodCYmYi5jb250YWlucyhuLm93bmVyRG9jdW1lbnQsbikmJk10KE90KG4sXCJzY3JpcHRcIikpLG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSkpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe3ZhciBlLHQ9MDtmb3IoO251bGwhPShlPXRoaXNbdF0pO3QrKyl7MT09PWUubm9kZVR5cGUmJmIuY2xlYW5EYXRhKE90KGUsITEpKTt3aGlsZShlLmZpcnN0Q2hpbGQpZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2Uub3B0aW9ucyYmYi5ub2RlTmFtZShlLFwic2VsZWN0XCIpJiYoZS5vcHRpb25zLmxlbmd0aD0wKX1yZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsPT1lPyExOmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBiLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUpe3ZhciBuPXRoaXNbMF18fHt9LHI9MCxpPXRoaXMubGVuZ3RoO2lmKGU9PT10KXJldHVybiAxPT09bi5ub2RlVHlwZT9uLmlubmVySFRNTC5yZXBsYWNlKGd0LFwiXCIpOnQ7aWYoIShcInN0cmluZ1wiIT10eXBlb2YgZXx8VHQudGVzdChlKXx8IWIuc3VwcG9ydC5odG1sU2VyaWFsaXplJiZtdC50ZXN0KGUpfHwhYi5zdXBwb3J0LmxlYWRpbmdXaGl0ZXNwYWNlJiZ5dC50ZXN0KGUpfHxBdFsoYnQuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKSl7ZT1lLnJlcGxhY2UodnQsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7aT5yO3IrKyluPXRoaXNbcl18fHt9LDE9PT1uLm5vZGVUeXBlJiYoYi5jbGVhbkRhdGEoT3QobiwhMSkpLG4uaW5uZXJIVE1MPWUpO249MH1jYXRjaChvKXt9fW4mJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5pc0Z1bmN0aW9uKGUpO3JldHVybiB0fHxcInN0cmluZ1wiPT10eXBlb2YgZXx8KGU9YihlKS5ub3QodGhpcykuZGV0YWNoKCkpLHRoaXMuZG9tTWFuaXAoW2VdLCEwLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubmV4dFNpYmxpbmcsbj10aGlzLnBhcmVudE5vZGU7biYmKGIodGhpcykucmVtb3ZlKCksbi5pbnNlcnRCZWZvcmUoZSx0KSl9KX0sZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlbW92ZShlLCEwKX0sZG9tTWFuaXA6ZnVuY3Rpb24oZSxuLHIpe2U9Zi5hcHBseShbXSxlKTt2YXIgaSxvLGEscyx1LGwsYz0wLHA9dGhpcy5sZW5ndGgsZD10aGlzLGg9cC0xLGc9ZVswXSxtPWIuaXNGdW5jdGlvbihnKTtpZihtfHwhKDE+PXB8fFwic3RyaW5nXCIhPXR5cGVvZiBnfHxiLnN1cHBvcnQuY2hlY2tDbG9uZSkmJkN0LnRlc3QoZykpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKXt2YXIgbz1kLmVxKGkpO20mJihlWzBdPWcuY2FsbCh0aGlzLGksbj9vLmh0bWwoKTp0KSksby5kb21NYW5pcChlLG4scil9KTtpZihwJiYobD1iLmJ1aWxkRnJhZ21lbnQoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksaT1sLmZpcnN0Q2hpbGQsMT09PWwuY2hpbGROb2Rlcy5sZW5ndGgmJihsPWkpLGkpKXtmb3Iobj1uJiZiLm5vZGVOYW1lKGksXCJ0clwiKSxzPWIubWFwKE90KGwsXCJzY3JpcHRcIiksSHQpLGE9cy5sZW5ndGg7cD5jO2MrKylvPWwsYyE9PWgmJihvPWIuY2xvbmUobywhMCwhMCksYSYmYi5tZXJnZShzLE90KG8sXCJzY3JpcHRcIikpKSxyLmNhbGwobiYmYi5ub2RlTmFtZSh0aGlzW2NdLFwidGFibGVcIik/THQodGhpc1tjXSxcInRib2R5XCIpOnRoaXNbY10sbyxjKTtpZihhKWZvcih1PXNbcy5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxiLm1hcChzLHF0KSxjPTA7YT5jO2MrKylvPXNbY10sa3QudGVzdChvLnR5cGV8fFwiXCIpJiYhYi5fZGF0YShvLFwiZ2xvYmFsRXZhbFwiKSYmYi5jb250YWlucyh1LG8pJiYoby5zcmM/Yi5hamF4KHt1cmw6by5zcmMsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KTpiLmdsb2JhbEV2YWwoKG8udGV4dHx8by50ZXh0Q29udGVudHx8by5pbm5lckhUTUx8fFwiXCIpLnJlcGxhY2UoU3QsXCJcIikpKTtsPWk9bnVsbH1yZXR1cm4gdGhpc319KTtmdW5jdGlvbiBMdChlLHQpe3JldHVybiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpWzBdfHxlLmFwcGVuZENoaWxkKGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpKX1mdW5jdGlvbiBIdChlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZU5vZGUoXCJ0eXBlXCIpO3JldHVybiBlLnR5cGU9KHQmJnQuc3BlY2lmaWVkKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxdChlKXt2YXIgdD1FdC5leGVjKGUudHlwZSk7cmV0dXJuIHQ/ZS50eXBlPXRbMV06ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTXQoZSx0KXt2YXIgbixyPTA7Zm9yKDtudWxsIT0obj1lW3JdKTtyKyspYi5fZGF0YShuLFwiZ2xvYmFsRXZhbFwiLCF0fHxiLl9kYXRhKHRbcl0sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBfdChlLHQpe2lmKDE9PT10Lm5vZGVUeXBlJiZiLmhhc0RhdGEoZSkpe3ZhciBuLHIsaSxvPWIuX2RhdGEoZSksYT1iLl9kYXRhKHQsbykscz1vLmV2ZW50cztpZihzKXtkZWxldGUgYS5oYW5kbGUsYS5ldmVudHM9e307Zm9yKG4gaW4gcylmb3Iocj0wLGk9c1tuXS5sZW5ndGg7aT5yO3IrKyliLmV2ZW50LmFkZCh0LG4sc1tuXVtyXSl9YS5kYXRhJiYoYS5kYXRhPWIuZXh0ZW5kKHt9LGEuZGF0YSkpfX1mdW5jdGlvbiBGdChlLHQpe3ZhciBuLHIsaTtpZigxPT09dC5ub2RlVHlwZSl7aWYobj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksIWIuc3VwcG9ydC5ub0Nsb25lRXZlbnQmJnRbYi5leHBhbmRvXSl7aT1iLl9kYXRhKHQpO2ZvcihyIGluIGkuZXZlbnRzKWIucmVtb3ZlRXZlbnQodCxyLGkuaGFuZGxlKTt0LnJlbW92ZUF0dHJpYnV0ZShiLmV4cGFuZG8pfVwic2NyaXB0XCI9PT1uJiZ0LnRleHQhPT1lLnRleHQ/KEh0KHQpLnRleHQ9ZS50ZXh0LHF0KHQpKTpcIm9iamVjdFwiPT09bj8odC5wYXJlbnROb2RlJiYodC5vdXRlckhUTUw9ZS5vdXRlckhUTUwpLGIuc3VwcG9ydC5odG1sNUNsb25lJiZlLmlubmVySFRNTCYmIWIudHJpbSh0LmlubmVySFRNTCkmJih0LmlubmVySFRNTD1lLmlubmVySFRNTCkpOlwiaW5wdXRcIj09PW4mJk50LnRlc3QoZS50eXBlKT8odC5kZWZhdWx0Q2hlY2tlZD10LmNoZWNrZWQ9ZS5jaGVja2VkLHQudmFsdWUhPT1lLnZhbHVlJiYodC52YWx1ZT1lLnZhbHVlKSk6XCJvcHRpb25cIj09PW4/dC5kZWZhdWx0U2VsZWN0ZWQ9dC5zZWxlY3RlZD1lLmRlZmF1bHRTZWxlY3RlZDooXCJpbnB1dFwiPT09bnx8XCJ0ZXh0YXJlYVwiPT09bikmJih0LmRlZmF1bHRWYWx1ZT1lLmRlZmF1bHRWYWx1ZSl9fWIuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24oZSl7dmFyIG4scj0wLGk9W10sbz1iKGUpLGE9by5sZW5ndGgtMTtmb3IoO2E+PXI7cisrKW49cj09PWE/dGhpczp0aGlzLmNsb25lKCEwKSxiKG9bcl0pW3RdKG4pLGQuYXBwbHkoaSxuLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaSl9fSk7ZnVuY3Rpb24gT3QoZSxuKXt2YXIgcixvLGE9MCxzPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09aT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKG58fFwiKlwiKTp0eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsIT09aT9lLnF1ZXJ5U2VsZWN0b3JBbGwobnx8XCIqXCIpOnQ7aWYoIXMpZm9yKHM9W10scj1lLmNoaWxkTm9kZXN8fGU7bnVsbCE9KG89clthXSk7YSsrKSFufHxiLm5vZGVOYW1lKG8sbik/cy5wdXNoKG8pOmIubWVyZ2UocyxPdChvLG4pKTtyZXR1cm4gbj09PXR8fG4mJmIubm9kZU5hbWUoZSxuKT9iLm1lcmdlKFtlXSxzKTpzfWZ1bmN0aW9uIEJ0KGUpe050LnRlc3QoZS50eXBlKSYmKGUuZGVmYXVsdENoZWNrZWQ9ZS5jaGVja2VkKX1iLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdT1iLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKTtpZihiLnN1cHBvcnQuaHRtbDVDbG9uZXx8Yi5pc1hNTERvYyhlKXx8IW10LnRlc3QoXCI8XCIrZS5ub2RlTmFtZStcIj5cIik/bz1lLmNsb25lTm9kZSghMCk6KER0LmlubmVySFRNTD1lLm91dGVySFRNTCxEdC5yZW1vdmVDaGlsZChvPUR0LmZpcnN0Q2hpbGQpKSwhKGIuc3VwcG9ydC5ub0Nsb25lRXZlbnQmJmIuc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Yi5pc1hNTERvYyhlKSkpZm9yKHI9T3Qobykscz1PdChlKSxhPTA7bnVsbCE9KGk9c1thXSk7KythKXJbYV0mJkZ0KGksclthXSk7aWYodClpZihuKWZvcihzPXN8fE90KGUpLHI9cnx8T3QobyksYT0wO251bGwhPShpPXNbYV0pO2ErKylfdChpLHJbYV0pO2Vsc2UgX3QoZSxvKTtyZXR1cm4gcj1PdChvLFwic2NyaXB0XCIpLHIubGVuZ3RoPjAmJk10KHIsIXUmJk90KGUsXCJzY3JpcHRcIikpLHI9cz1pPW51bGwsb30sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxwPWUubGVuZ3RoLGY9ZHQodCksZD1bXSxoPTA7Zm9yKDtwPmg7aCsrKWlmKG89ZVtoXSxvfHwwPT09bylpZihcIm9iamVjdFwiPT09Yi50eXBlKG8pKWIubWVyZ2UoZCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKHd0LnRlc3Qobykpe3M9c3x8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHU9KGJ0LmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGM9QXRbdV18fEF0Ll9kZWZhdWx0LHMuaW5uZXJIVE1MPWNbMV0rby5yZXBsYWNlKHZ0LFwiPCQxPjwvJDI+XCIpK2NbMl0saT1jWzBdO3doaWxlKGktLSlzPXMubGFzdENoaWxkO2lmKCFiLnN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UmJnl0LnRlc3QobykmJmQucHVzaCh0LmNyZWF0ZVRleHROb2RlKHl0LmV4ZWMobylbMF0pKSwhYi5zdXBwb3J0LnRib2R5KXtvPVwidGFibGVcIiE9PXV8fHh0LnRlc3Qobyk/XCI8dGFibGU+XCIhPT1jWzFdfHx4dC50ZXN0KG8pPzA6czpzLmZpcnN0Q2hpbGQsaT1vJiZvLmNoaWxkTm9kZXMubGVuZ3RoO3doaWxlKGktLSliLm5vZGVOYW1lKGw9by5jaGlsZE5vZGVzW2ldLFwidGJvZHlcIikmJiFsLmNoaWxkTm9kZXMubGVuZ3RoJiZvLnJlbW92ZUNoaWxkKGwpXG59Yi5tZXJnZShkLHMuY2hpbGROb2Rlcykscy50ZXh0Q29udGVudD1cIlwiO3doaWxlKHMuZmlyc3RDaGlsZClzLnJlbW92ZUNoaWxkKHMuZmlyc3RDaGlsZCk7cz1mLmxhc3RDaGlsZH1lbHNlIGQucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtzJiZmLnJlbW92ZUNoaWxkKHMpLGIuc3VwcG9ydC5hcHBlbmRDaGVja2VkfHxiLmdyZXAoT3QoZCxcImlucHV0XCIpLEJ0KSxoPTA7d2hpbGUobz1kW2grK10paWYoKCFyfHwtMT09PWIuaW5BcnJheShvLHIpKSYmKGE9Yi5jb250YWlucyhvLm93bmVyRG9jdW1lbnQsbykscz1PdChmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGEmJk10KHMpLG4pKXtpPTA7d2hpbGUobz1zW2krK10pa3QudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIHM9bnVsbCxmfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLG8sYSxzPTAsdT1iLmV4cGFuZG8sbD1iLmNhY2hlLHA9Yi5zdXBwb3J0LmRlbGV0ZUV4cGFuZG8sZj1iLmV2ZW50LnNwZWNpYWw7Zm9yKDtudWxsIT0obj1lW3NdKTtzKyspaWYoKHR8fGIuYWNjZXB0RGF0YShuKSkmJihvPW5bdV0sYT1vJiZsW29dKSl7aWYoYS5ldmVudHMpZm9yKHIgaW4gYS5ldmVudHMpZltyXT9iLmV2ZW50LnJlbW92ZShuLHIpOmIucmVtb3ZlRXZlbnQobixyLGEuaGFuZGxlKTtsW29dJiYoZGVsZXRlIGxbb10scD9kZWxldGUgblt1XTp0eXBlb2Ygbi5yZW1vdmVBdHRyaWJ1dGUhPT1pP24ucmVtb3ZlQXR0cmlidXRlKHUpOm5bdV09bnVsbCxjLnB1c2gobykpfX19KTt2YXIgUHQsUnQsV3QsJHQ9L2FscGhhXFwoW14pXSpcXCkvaSxJdD0vb3BhY2l0eVxccyo9XFxzKihbXildKikvLHp0PS9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLyxYdD0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sVXQ9L15tYXJnaW4vLFZ0PVJlZ0V4cChcIl4oXCIreCtcIikoLiopJFwiLFwiaVwiKSxZdD1SZWdFeHAoXCJeKFwiK3grXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksSnQ9UmVnRXhwKFwiXihbKy1dKT0oXCIreCtcIilcIixcImlcIiksR3Q9e0JPRFk6XCJibG9ja1wifSxRdD17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sS3Q9e2xldHRlclNwYWNpbmc6MCxmb250V2VpZ2h0OjQwMH0sWnQ9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGVuPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXTtmdW5jdGlvbiB0bihlLHQpe2lmKHQgaW4gZSlyZXR1cm4gdDt2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSkscj10LGk9ZW4ubGVuZ3RoO3doaWxlKGktLSlpZih0PWVuW2ldK24sdCBpbiBlKXJldHVybiB0O3JldHVybiByfWZ1bmN0aW9uIG5uKGUsdCl7cmV0dXJuIGU9dHx8ZSxcIm5vbmVcIj09PWIuY3NzKGUsXCJkaXNwbGF5XCIpfHwhYi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9ZnVuY3Rpb24gcm4oZSx0KXt2YXIgbixyLGksbz1bXSxhPTAscz1lLmxlbmd0aDtmb3IoO3M+YTthKyspcj1lW2FdLHIuc3R5bGUmJihvW2FdPWIuX2RhdGEocixcIm9sZGRpc3BsYXlcIiksbj1yLnN0eWxlLmRpc3BsYXksdD8ob1thXXx8XCJub25lXCIhPT1ufHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJm5uKHIpJiYob1thXT1iLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIsdW4oci5ub2RlTmFtZSkpKSk6b1thXXx8KGk9bm4ociksKG4mJlwibm9uZVwiIT09bnx8IWkpJiZiLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIsaT9uOmIuY3NzKHIsXCJkaXNwbGF5XCIpKSkpO2ZvcihhPTA7cz5hO2ErKylyPWVbYV0sci5zdHlsZSYmKHQmJlwibm9uZVwiIT09ci5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ci5zdHlsZS5kaXNwbGF5fHwoci5zdHlsZS5kaXNwbGF5PXQ/b1thXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBlfWIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihlLG4scil7dmFyIGksbyxhPXt9LHM9MDtpZihiLmlzQXJyYXkobikpe2ZvcihvPVJ0KGUpLGk9bi5sZW5ndGg7aT5zO3MrKylhW25bc11dPWIuY3NzKGUsbltzXSwhMSxvKTtyZXR1cm4gYX1yZXR1cm4gciE9PXQ/Yi5zdHlsZShlLG4scik6Yi5jc3MoZSxuKX0sZSxuLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gcm4odGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gcm4odGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXt2YXIgdD1cImJvb2xlYW5cIj09dHlwZW9mIGU7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyh0P2U6bm4odGhpcykpP2IodGhpcykuc2hvdygpOmIodGhpcykuaGlkZSgpfSl9fSksYi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1XdChlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOmIuc3VwcG9ydC5jc3NGbG9hdD9cImNzc0Zsb2F0XCI6XCJzdHlsZUZsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGUsbixyLGkpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIG8sYSxzLHU9Yi5jYW1lbENhc2UobiksbD1lLnN0eWxlO2lmKG49Yi5jc3NQcm9wc1t1XXx8KGIuY3NzUHJvcHNbdV09dG4obCx1KSkscz1iLmNzc0hvb2tzW25dfHxiLmNzc0hvb2tzW3VdLHI9PT10KXJldHVybiBzJiZcImdldFwiaW4gcyYmKG89cy5nZXQoZSwhMSxpKSkhPT10P286bFtuXTtpZihhPXR5cGVvZiByLFwic3RyaW5nXCI9PT1hJiYobz1KdC5leGVjKHIpKSYmKHI9KG9bMV0rMSkqb1syXStwYXJzZUZsb2F0KGIuY3NzKGUsbikpLGE9XCJudW1iZXJcIiksIShudWxsPT1yfHxcIm51bWJlclwiPT09YSYmaXNOYU4ocil8fChcIm51bWJlclwiIT09YXx8Yi5jc3NOdW1iZXJbdV18fChyKz1cInB4XCIpLGIuc3VwcG9ydC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1yfHwwIT09bi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbbl09XCJpbmhlcml0XCIpLHMmJlwic2V0XCJpbiBzJiYocj1zLnNldChlLHIsaSkpPT09dCkpKXRyeXtsW25dPXJ9Y2F0Y2goYyl7fX19LGNzczpmdW5jdGlvbihlLG4scixpKXt2YXIgbyxhLHMsdT1iLmNhbWVsQ2FzZShuKTtyZXR1cm4gbj1iLmNzc1Byb3BzW3VdfHwoYi5jc3NQcm9wc1t1XT10bihlLnN0eWxlLHUpKSxzPWIuY3NzSG9va3Nbbl18fGIuY3NzSG9va3NbdV0scyYmXCJnZXRcImluIHMmJihhPXMuZ2V0KGUsITAscikpLGE9PT10JiYoYT1XdChlLG4saSkpLFwibm9ybWFsXCI9PT1hJiZuIGluIEt0JiYoYT1LdFtuXSksXCJcIj09PXJ8fHI/KG89cGFyc2VGbG9hdChhKSxyPT09ITB8fGIuaXNOdW1lcmljKG8pP298fDA6YSk6YX0sc3dhcDpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGE9e307Zm9yKG8gaW4gdClhW29dPWUuc3R5bGVbb10sZS5zdHlsZVtvXT10W29dO2k9bi5hcHBseShlLHJ8fFtdKTtmb3IobyBpbiB0KWUuc3R5bGVbb109YVtvXTtyZXR1cm4gaX19KSxlLmdldENvbXB1dGVkU3R5bGU/KFJ0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmdldENvbXB1dGVkU3R5bGUodCxudWxsKX0sV3Q9ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPXJ8fFJ0KGUpLHU9cz9zLmdldFByb3BlcnR5VmFsdWUobil8fHNbbl06dCxsPWUuc3R5bGU7cmV0dXJuIHMmJihcIlwiIT09dXx8Yi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fCh1PWIuc3R5bGUoZSxuKSksWXQudGVzdCh1KSYmVXQudGVzdChuKSYmKGk9bC53aWR0aCxvPWwubWluV2lkdGgsYT1sLm1heFdpZHRoLGwubWluV2lkdGg9bC5tYXhXaWR0aD1sLndpZHRoPXUsdT1zLndpZHRoLGwud2lkdGg9aSxsLm1pbldpZHRoPW8sbC5tYXhXaWR0aD1hKSksdX0pOm8uZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSYmKFJ0PWZ1bmN0aW9uKGUpe3JldHVybiBlLmN1cnJlbnRTdHlsZX0sV3Q9ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPXJ8fFJ0KGUpLHU9cz9zW25dOnQsbD1lLnN0eWxlO3JldHVybiBudWxsPT11JiZsJiZsW25dJiYodT1sW25dKSxZdC50ZXN0KHUpJiYhenQudGVzdChuKSYmKGk9bC5sZWZ0LG89ZS5ydW50aW1lU3R5bGUsYT1vJiZvLmxlZnQsYSYmKG8ubGVmdD1lLmN1cnJlbnRTdHlsZS5sZWZ0KSxsLmxlZnQ9XCJmb250U2l6ZVwiPT09bj9cIjFlbVwiOnUsdT1sLnBpeGVsTGVmdCtcInB4XCIsbC5sZWZ0PWksYSYmKG8ubGVmdD1hKSksXCJcIj09PXU/XCJhdXRvXCI6dX0pO2Z1bmN0aW9uIG9uKGUsdCxuKXt2YXIgcj1WdC5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsxXS0obnx8MCkpKyhyWzJdfHxcInB4XCIpOnR9ZnVuY3Rpb24gYW4oZSx0LG4scixpKXt2YXIgbz1uPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT10PzE6MCxhPTA7Zm9yKDs0Pm87bys9MilcIm1hcmdpblwiPT09biYmKGErPWIuY3NzKGUsbitadFtvXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYoYS09Yi5jc3MoZSxcInBhZGRpbmdcIitadFtvXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJihhLT1iLmNzcyhlLFwiYm9yZGVyXCIrWnRbb10rXCJXaWR0aFwiLCEwLGkpKSk6KGErPWIuY3NzKGUsXCJwYWRkaW5nXCIrWnRbb10sITAsaSksXCJwYWRkaW5nXCIhPT1uJiYoYSs9Yi5jc3MoZSxcImJvcmRlclwiK1p0W29dK1wiV2lkdGhcIiwhMCxpKSkpO3JldHVybiBhfWZ1bmN0aW9uIHNuKGUsdCxuKXt2YXIgcj0hMCxpPVwid2lkdGhcIj09PXQ/ZS5vZmZzZXRXaWR0aDplLm9mZnNldEhlaWdodCxvPVJ0KGUpLGE9Yi5zdXBwb3J0LmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1iLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsbyk7aWYoMD49aXx8bnVsbD09aSl7aWYoaT1XdChlLHQsbyksKDA+aXx8bnVsbD09aSkmJihpPWUuc3R5bGVbdF0pLFl0LnRlc3QoaSkpcmV0dXJuIGk7cj1hJiYoYi5zdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlfHxpPT09ZS5zdHlsZVt0XSksaT1wYXJzZUZsb2F0KGkpfHwwfXJldHVybiBpK2FuKGUsdCxufHwoYT9cImJvcmRlclwiOlwiY29udGVudFwiKSxyLG8pK1wicHhcIn1mdW5jdGlvbiB1bihlKXt2YXIgdD1vLG49R3RbZV07cmV0dXJuIG58fChuPWxuKGUsdCksXCJub25lXCIhPT1uJiZufHwoUHQ9KFB0fHxiKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKS5jc3MoXCJjc3NUZXh0XCIsXCJkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnRcIikpLmFwcGVuZFRvKHQuZG9jdW1lbnRFbGVtZW50KSx0PShQdFswXS5jb250ZW50V2luZG93fHxQdFswXS5jb250ZW50RG9jdW1lbnQpLmRvY3VtZW50LHQud3JpdGUoXCI8IWRvY3R5cGUgaHRtbD48aHRtbD48Ym9keT5cIiksdC5jbG9zZSgpLG49bG4oZSx0KSxQdC5kZXRhY2goKSksR3RbZV09biksbn1mdW5jdGlvbiBsbihlLHQpe3ZhciBuPWIodC5jcmVhdGVFbGVtZW50KGUpKS5hcHBlbmRUbyh0LmJvZHkpLHI9Yi5jc3MoblswXSxcImRpc3BsYXlcIik7cmV0dXJuIG4ucmVtb3ZlKCkscn1iLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLG4pe2IuY3NzSG9va3Nbbl09e2dldDpmdW5jdGlvbihlLHIsaSl7cmV0dXJuIHI/MD09PWUub2Zmc2V0V2lkdGgmJlh0LnRlc3QoYi5jc3MoZSxcImRpc3BsYXlcIikpP2Iuc3dhcChlLFF0LGZ1bmN0aW9uKCl7cmV0dXJuIHNuKGUsbixpKX0pOnNuKGUsbixpKTp0fSxzZXQ6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPXImJlJ0KGUpO3JldHVybiBvbihlLHQscj9hbihlLG4scixiLnN1cHBvcnQuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PWIuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxpKTowKX19fSksYi5zdXBwb3J0Lm9wYWNpdHl8fChiLmNzc0hvb2tzLm9wYWNpdHk9e2dldDpmdW5jdGlvbihlLHQpe3JldHVybiBJdC50ZXN0KCh0JiZlLmN1cnJlbnRTdHlsZT9lLmN1cnJlbnRTdHlsZS5maWx0ZXI6ZS5zdHlsZS5maWx0ZXIpfHxcIlwiKT8uMDEqcGFyc2VGbG9hdChSZWdFeHAuJDEpK1wiXCI6dD9cIjFcIjpcIlwifSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnN0eWxlLHI9ZS5jdXJyZW50U3R5bGUsaT1iLmlzTnVtZXJpYyh0KT9cImFscGhhKG9wYWNpdHk9XCIrMTAwKnQrXCIpXCI6XCJcIixvPXImJnIuZmlsdGVyfHxuLmZpbHRlcnx8XCJcIjtuLnpvb209MSwodD49MXx8XCJcIj09PXQpJiZcIlwiPT09Yi50cmltKG8ucmVwbGFjZSgkdCxcIlwiKSkmJm4ucmVtb3ZlQXR0cmlidXRlJiYobi5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksXCJcIj09PXR8fHImJiFyLmZpbHRlcil8fChuLmZpbHRlcj0kdC50ZXN0KG8pP28ucmVwbGFjZSgkdCxpKTpvK1wiIFwiK2kpfX0pLGIoZnVuY3Rpb24oKXtiLnN1cHBvcnQucmVsaWFibGVNYXJnaW5SaWdodHx8KGIuY3NzSG9va3MubWFyZ2luUmlnaHQ9e2dldDpmdW5jdGlvbihlLG4pe3JldHVybiBuP2Iuc3dhcChlLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LFd0LFtlLFwibWFyZ2luUmlnaHRcIl0pOnR9fSksIWIuc3VwcG9ydC5waXhlbFBvc2l0aW9uJiZiLmZuLnBvc2l0aW9uJiZiLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Yi5jc3NIb29rc1tuXT17Z2V0OmZ1bmN0aW9uKGUscil7cmV0dXJuIHI/KHI9V3QoZSxuKSxZdC50ZXN0KHIpP2IoZSkucG9zaXRpb24oKVtuXStcInB4XCI6cik6dH19fSl9KSxiLmV4cHImJmIuZXhwci5maWx0ZXJzJiYoYi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiAwPj1lLm9mZnNldFdpZHRoJiYwPj1lLm9mZnNldEhlaWdodHx8IWIuc3VwcG9ydC5yZWxpYWJsZUhpZGRlbk9mZnNldHMmJlwibm9uZVwiPT09KGUuc3R5bGUmJmUuc3R5bGUuZGlzcGxheXx8Yi5jc3MoZSxcImRpc3BsYXlcIikpfSxiLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiFiLmV4cHIuZmlsdGVycy5oaWRkZW4oZSl9KSxiLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihlLHQpe2IuY3NzSG9va3NbZSt0XT17ZXhwYW5kOmZ1bmN0aW9uKG4pe3ZhciByPTAsaT17fSxvPVwic3RyaW5nXCI9PXR5cGVvZiBuP24uc3BsaXQoXCIgXCIpOltuXTtmb3IoOzQ+cjtyKyspaVtlK1p0W3JdK3RdPW9bcl18fG9bci0yXXx8b1swXTtyZXR1cm4gaX19LFV0LnRlc3QoZSl8fChiLmNzc0hvb2tzW2UrdF0uc2V0PW9uKX0pO3ZhciBjbj0vJTIwL2cscG49L1xcW1xcXSQvLGZuPS9cXHI/XFxuL2csZG49L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLGhuPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtiLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1iLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP2IubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIWIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJmhuLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFkbi50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhTnQudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1iKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6Yi5pc0FycmF5KG4pP2IubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShmbixcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGZuLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLGIucGFyYW09ZnVuY3Rpb24oZSxuKXt2YXIgcixpPVtdLG89ZnVuY3Rpb24oZSx0KXt0PWIuaXNGdW5jdGlvbih0KT90KCk6bnVsbD09dD9cIlwiOnQsaVtpLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KX07aWYobj09PXQmJihuPWIuYWpheFNldHRpbmdzJiZiLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksYi5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIWIuaXNQbGFpbk9iamVjdChlKSliLmVhY2goZSxmdW5jdGlvbigpe28odGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IociBpbiBlKWduKHIsZVtyXSxuLG8pO3JldHVybiBpLmpvaW4oXCImXCIpLnJlcGxhY2UoY24sXCIrXCIpfTtmdW5jdGlvbiBnbihlLHQsbixyKXt2YXIgaTtpZihiLmlzQXJyYXkodCkpYi5lYWNoKHQsZnVuY3Rpb24odCxpKXtufHxwbi50ZXN0KGUpP3IoZSxpKTpnbihlK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgaT90OlwiXCIpK1wiXVwiLGksbixyKX0pO2Vsc2UgaWYobnx8XCJvYmplY3RcIiE9PWIudHlwZSh0KSlyKGUsdCk7ZWxzZSBmb3IoaSBpbiB0KWduKGUrXCJbXCIraStcIl1cIix0W2ldLG4scil9Yi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2IuZm5bdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24odCxudWxsLGUsbik6dGhpcy50cmlnZ2VyKHQpfX0pLGIuZm4uaG92ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9O3ZhciBtbix5bix2bj1iLm5vdygpLGJuPS9cXD8vLHhuPS8jLiokLyx3bj0vKFs/Jl0pXz1bXiZdKi8sVG49L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopXFxyPyQvZ20sTm49L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sQ249L14oPzpHRVR8SEVBRCkkLyxrbj0vXlxcL1xcLy8sRW49L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sU249Yi5mbi5sb2FkLEFuPXt9LGpuPXt9LERuPVwiKi9cIi5jb25jYXQoXCIqXCIpO3RyeXt5bj1hLmhyZWZ9Y2F0Y2goTG4pe3luPW8uY3JlYXRlRWxlbWVudChcImFcIikseW4uaHJlZj1cIlwiLHluPXluLmhyZWZ9bW49RW4uZXhlYyh5bi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gSG4oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cIipcIik7dmFyIHIsaT0wLG89dC50b0xvd2VyQ2FzZSgpLm1hdGNoKHcpfHxbXTtpZihiLmlzRnVuY3Rpb24obikpd2hpbGUocj1vW2krK10pXCIrXCI9PT1yWzBdPyhyPXIuc2xpY2UoMSl8fFwiKlwiLChlW3JdPWVbcl18fFtdKS51bnNoaWZ0KG4pKTooZVtyXT1lW3JdfHxbXSkucHVzaChuKX19ZnVuY3Rpb24gcW4oZSxuLHIsaSl7dmFyIG89e30sYT1lPT09am47ZnVuY3Rpb24gcyh1KXt2YXIgbDtyZXR1cm4gb1t1XT0hMCxiLmVhY2goZVt1XXx8W10sZnVuY3Rpb24oZSx1KXt2YXIgYz11KG4scixpKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgY3x8YXx8b1tjXT9hPyEobD1jKTp0OihuLmRhdGFUeXBlcy51bnNoaWZ0KGMpLHMoYyksITEpfSksbH1yZXR1cm4gcyhuLmRhdGFUeXBlc1swXSl8fCFvW1wiKlwiXSYmcyhcIipcIil9ZnVuY3Rpb24gTW4oZSxuKXt2YXIgcixpLG89Yi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihpIGluIG4pbltpXSE9PXQmJigob1tpXT9lOnJ8fChyPXt9KSlbaV09bltpXSk7cmV0dXJuIHImJmIuZXh0ZW5kKCEwLGUsciksZX1iLmZuLmxvYWQ9ZnVuY3Rpb24oZSxuLHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiZTbilyZXR1cm4gU24uYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBpLG8sYSxzPXRoaXMsdT1lLmluZGV4T2YoXCIgXCIpO3JldHVybiB1Pj0wJiYoaT1lLnNsaWNlKHUsZS5sZW5ndGgpLGU9ZS5zbGljZSgwLHUpKSxiLmlzRnVuY3Rpb24obik/KHI9bixuPXQpOm4mJlwib2JqZWN0XCI9PXR5cGVvZiBuJiYoYT1cIlBPU1RcIikscy5sZW5ndGg+MCYmYi5hamF4KHt1cmw6ZSx0eXBlOmEsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpufSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxzLmh0bWwoaT9iKFwiPGRpdj5cIikuYXBwZW5kKGIucGFyc2VIVE1MKGUpKS5maW5kKGkpOmUpfSkuY29tcGxldGUociYmZnVuY3Rpb24oZSx0KXtzLmVhY2gocixvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KSx0aGlzfSxiLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe2IuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxiLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsbil7YltuXT1mdW5jdGlvbihlLHIsaSxvKXtyZXR1cm4gYi5pc0Z1bmN0aW9uKHIpJiYobz1vfHxpLGk9cixyPXQpLGIuYWpheCh7dXJsOmUsdHlwZTpuLGRhdGFUeXBlOm8sZGF0YTpyLHN1Y2Nlc3M6aX0pfX0pLGIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp5bix0eXBlOlwiR0VUXCIsaXNMb2NhbDpObi50ZXN0KG1uWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpEbix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6ZS5TdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOmIucGFyc2VKU09OLFwidGV4dCB4bWxcIjpiLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9NbihNbihlLGIuYWpheFNldHRpbmdzKSx0KTpNbihiLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpIbihBbiksYWpheFRyYW5zcG9ydDpIbihqbiksYWpheDpmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYobj1lLGU9dCksbj1ufHx7fTt2YXIgcixpLG8sYSxzLHUsbCxjLHA9Yi5hamF4U2V0dXAoe30sbiksZj1wLmNvbnRleHR8fHAsZD1wLmNvbnRleHQmJihmLm5vZGVUeXBlfHxmLmpxdWVyeSk/YihmKTpiLmV2ZW50LGg9Yi5EZWZlcnJlZCgpLGc9Yi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxtPXAuc3RhdHVzQ29kZXx8e30seT17fSx2PXt9LHg9MCxUPVwiY2FuY2VsZWRcIixOPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoMj09PXgpe2lmKCFjKXtjPXt9O3doaWxlKHQ9VG4uZXhlYyhhKSljW3RbMV0udG9Mb3dlckNhc2UoKV09dFsyXX10PWNbZS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09dD9udWxsOnR9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09eD9hOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHh8fChlPXZbbl09dltuXXx8ZSx5W2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHh8fChwLm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZigyPngpZm9yKHQgaW4gZSltW3RdPVttW3RdLGVbdF1dO2Vsc2UgTi5hbHdheXMoZVtOLnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHxUO3JldHVybiBsJiZsLmFib3J0KHQpLGsoMCx0KSx0aGlzfX07aWYoaC5wcm9taXNlKE4pLmNvbXBsZXRlPWcuYWRkLE4uc3VjY2Vzcz1OLmRvbmUsTi5lcnJvcj1OLmZhaWwscC51cmw9KChlfHxwLnVybHx8eW4pK1wiXCIpLnJlcGxhY2UoeG4sXCJcIikucmVwbGFjZShrbixtblsxXStcIi8vXCIpLHAudHlwZT1uLm1ldGhvZHx8bi50eXBlfHxwLm1ldGhvZHx8cC50eXBlLHAuZGF0YVR5cGVzPWIudHJpbShwLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaCh3KXx8W1wiXCJdLG51bGw9PXAuY3Jvc3NEb21haW4mJihyPUVuLmV4ZWMocC51cmwudG9Mb3dlckNhc2UoKSkscC5jcm9zc0RvbWFpbj0hKCFyfHxyWzFdPT09bW5bMV0mJnJbMl09PT1tblsyXSYmKHJbM118fChcImh0dHA6XCI9PT1yWzFdPzgwOjQ0MykpPT0obW5bM118fChcImh0dHA6XCI9PT1tblsxXT84MDo0NDMpKSkpLHAuZGF0YSYmcC5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHAuZGF0YSYmKHAuZGF0YT1iLnBhcmFtKHAuZGF0YSxwLnRyYWRpdGlvbmFsKSkscW4oQW4scCxuLE4pLDI9PT14KXJldHVybiBOO3U9cC5nbG9iYWwsdSYmMD09PWIuYWN0aXZlKysmJmIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxwLnR5cGU9cC50eXBlLnRvVXBwZXJDYXNlKCkscC5oYXNDb250ZW50PSFDbi50ZXN0KHAudHlwZSksbz1wLnVybCxwLmhhc0NvbnRlbnR8fChwLmRhdGEmJihvPXAudXJsKz0oYm4udGVzdChvKT9cIiZcIjpcIj9cIikrcC5kYXRhLGRlbGV0ZSBwLmRhdGEpLHAuY2FjaGU9PT0hMSYmKHAudXJsPXduLnRlc3Qobyk/by5yZXBsYWNlKHduLFwiJDFfPVwiK3ZuKyspOm8rKGJuLnRlc3Qobyk/XCImXCI6XCI/XCIpK1wiXz1cIit2bisrKSkscC5pZk1vZGlmaWVkJiYoYi5sYXN0TW9kaWZpZWRbb10mJk4uc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsYi5sYXN0TW9kaWZpZWRbb10pLGIuZXRhZ1tvXSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLGIuZXRhZ1tvXSkpLChwLmRhdGEmJnAuaGFzQ29udGVudCYmcC5jb250ZW50VHlwZSE9PSExfHxuLmNvbnRlbnRUeXBlKSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIscC5jb250ZW50VHlwZSksTi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIscC5kYXRhVHlwZXNbMF0mJnAuYWNjZXB0c1twLmRhdGFUeXBlc1swXV0/cC5hY2NlcHRzW3AuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1wLmRhdGFUeXBlc1swXT9cIiwgXCIrRG4rXCI7IHE9MC4wMVwiOlwiXCIpOnAuYWNjZXB0c1tcIipcIl0pO2ZvcihpIGluIHAuaGVhZGVycylOLnNldFJlcXVlc3RIZWFkZXIoaSxwLmhlYWRlcnNbaV0pO2lmKHAuYmVmb3JlU2VuZCYmKHAuYmVmb3JlU2VuZC5jYWxsKGYsTixwKT09PSExfHwyPT09eCkpcmV0dXJuIE4uYWJvcnQoKTtUPVwiYWJvcnRcIjtmb3IoaSBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSlOW2ldKHBbaV0pO2lmKGw9cW4oam4scCxuLE4pKXtOLnJlYWR5U3RhdGU9MSx1JiZkLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtOLHBdKSxwLmFzeW5jJiZwLnRpbWVvdXQ+MCYmKHM9c2V0VGltZW91dChmdW5jdGlvbigpe04uYWJvcnQoXCJ0aW1lb3V0XCIpfSxwLnRpbWVvdXQpKTt0cnl7eD0xLGwuc2VuZCh5LGspfWNhdGNoKEMpe2lmKCEoMj54KSl0aHJvdyBDO2soLTEsQyl9fWVsc2UgaygtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBrKGUsbixyLGkpe3ZhciBjLHksdix3LFQsQz1uOzIhPT14JiYoeD0yLHMmJmNsZWFyVGltZW91dChzKSxsPXQsYT1pfHxcIlwiLE4ucmVhZHlTdGF0ZT1lPjA/NDowLHImJih3PV9uKHAsTixyKSksZT49MjAwJiYzMDA+ZXx8MzA0PT09ZT8ocC5pZk1vZGlmaWVkJiYoVD1OLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSxUJiYoYi5sYXN0TW9kaWZpZWRbb109VCksVD1OLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSxUJiYoYi5ldGFnW29dPVQpKSwyMDQ9PT1lPyhjPSEwLEM9XCJub2NvbnRlbnRcIik6MzA0PT09ZT8oYz0hMCxDPVwibm90bW9kaWZpZWRcIik6KGM9Rm4ocCx3KSxDPWMuc3RhdGUseT1jLmRhdGEsdj1jLmVycm9yLGM9IXYpKToodj1DLChlfHwhQykmJihDPVwiZXJyb3JcIiwwPmUmJihlPTApKSksTi5zdGF0dXM9ZSxOLnN0YXR1c1RleHQ9KG58fEMpK1wiXCIsYz9oLnJlc29sdmVXaXRoKGYsW3ksQyxOXSk6aC5yZWplY3RXaXRoKGYsW04sQyx2XSksTi5zdGF0dXNDb2RlKG0pLG09dCx1JiZkLnRyaWdnZXIoYz9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbTixwLGM/eTp2XSksZy5maXJlV2l0aChmLFtOLENdKSx1JiYoZC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW04scF0pLC0tYi5hY3RpdmV8fGIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIE59LGdldFNjcmlwdDpmdW5jdGlvbihlLG4pe3JldHVybiBiLmdldChlLHQsbixcInNjcmlwdFwiKX0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZ2V0KGUsdCxuLFwianNvblwiKX19KTtmdW5jdGlvbiBfbihlLG4scil7dmFyIGksbyxhLHMsdT1lLmNvbnRlbnRzLGw9ZS5kYXRhVHlwZXMsYz1lLnJlc3BvbnNlRmllbGRzO2ZvcihzIGluIGMpcyBpbiByJiYobltjW3NdXT1yW3NdKTt3aGlsZShcIipcIj09PWxbMF0pbC5zaGlmdCgpLG89PT10JiYobz1lLm1pbWVUeXBlfHxuLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihvKWZvcihzIGluIHUpaWYodVtzXSYmdVtzXS50ZXN0KG8pKXtsLnVuc2hpZnQocyk7YnJlYWt9aWYobFswXWluIHIpYT1sWzBdO2Vsc2V7Zm9yKHMgaW4gcil7aWYoIWxbMF18fGUuY29udmVydGVyc1tzK1wiIFwiK2xbMF1dKXthPXM7YnJlYWt9aXx8KGk9cyl9YT1hfHxpfXJldHVybiBhPyhhIT09bFswXSYmbC51bnNoaWZ0KGEpLHJbYV0pOnR9ZnVuY3Rpb24gRm4oZSx0KXt2YXIgbixyLGksbyxhPXt9LHM9MCx1PWUuZGF0YVR5cGVzLnNsaWNlKCksbD11WzBdO2lmKGUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHVbMV0pZm9yKGkgaW4gZS5jb252ZXJ0ZXJzKWFbaS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbaV07Zm9yKDtyPXVbKytzXTspaWYoXCIqXCIhPT1yKXtpZihcIipcIiE9PWwmJmwhPT1yKXtpZihpPWFbbCtcIiBcIityXXx8YVtcIiogXCIrcl0sIWkpZm9yKG4gaW4gYSlpZihvPW4uc3BsaXQoXCIgXCIpLG9bMV09PT1yJiYoaT1hW2wrXCIgXCIrb1swXV18fGFbXCIqIFwiK29bMF1dKSl7aT09PSEwP2k9YVtuXTphW25dIT09ITAmJihyPW9bMF0sdS5zcGxpY2Uocy0tLDAscikpO2JyZWFrfWlmKGkhPT0hMClpZihpJiZlW1widGhyb3dzXCJdKXQ9aSh0KTtlbHNlIHRyeXt0PWkodCl9Y2F0Y2goYyl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjppP2M6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrbCtcIiB0byBcIityfX19bD1yfXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fWIuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi8oPzpqYXZhfGVjbWEpc2NyaXB0L30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBiLmdsb2JhbEV2YWwoZSksZX19fSksYi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7ZS5jYWNoZT09PXQmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIsZS5nbG9iYWw9ITEpfSksYi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7aWYoZS5jcm9zc0RvbWFpbil7dmFyIG4scj1vLmhlYWR8fGIoXCJoZWFkXCIpWzBdfHxvLmRvY3VtZW50RWxlbWVudDtyZXR1cm57c2VuZDpmdW5jdGlvbih0LGkpe249by5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLG4uYXN5bmM9ITAsZS5zY3JpcHRDaGFyc2V0JiYobi5jaGFyc2V0PWUuc2NyaXB0Q2hhcnNldCksbi5zcmM9ZS51cmwsbi5vbmxvYWQ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSx0KXsodHx8IW4ucmVhZHlTdGF0ZXx8L2xvYWRlZHxjb21wbGV0ZS8udGVzdChuLnJlYWR5U3RhdGUpKSYmKG4ub25sb2FkPW4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobiksbj1udWxsLHR8fGkoMjAwLFwic3VjY2Vzc1wiKSl9LHIuaW5zZXJ0QmVmb3JlKG4sci5maXJzdENoaWxkKX0sYWJvcnQ6ZnVuY3Rpb24oKXtuJiZuLm9ubG9hZCh0LCEwKX19fX0pO3ZhciBPbj1bXSxCbj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO2IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPU9uLnBvcCgpfHxiLmV4cGFuZG8rXCJfXCIrdm4rKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLGIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihuLHIsaSl7dmFyIG8sYSxzLHU9bi5qc29ucCE9PSExJiYoQm4udGVzdChuLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYhKG4uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkJuLnRlc3Qobi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiB1fHxcImpzb25wXCI9PT1uLmRhdGFUeXBlc1swXT8obz1uLmpzb25wQ2FsbGJhY2s9Yi5pc0Z1bmN0aW9uKG4uanNvbnBDYWxsYmFjayk/bi5qc29ucENhbGxiYWNrKCk6bi5qc29ucENhbGxiYWNrLHU/blt1XT1uW3VdLnJlcGxhY2UoQm4sXCIkMVwiK28pOm4uanNvbnAhPT0hMSYmKG4udXJsKz0oYm4udGVzdChuLnVybCk/XCImXCI6XCI/XCIpK24uanNvbnArXCI9XCIrbyksbi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gc3x8Yi5lcnJvcihvK1wiIHdhcyBub3QgY2FsbGVkXCIpLHNbMF19LG4uZGF0YVR5cGVzWzBdPVwianNvblwiLGE9ZVtvXSxlW29dPWZ1bmN0aW9uKCl7cz1hcmd1bWVudHN9LGkuYWx3YXlzKGZ1bmN0aW9uKCl7ZVtvXT1hLG5bb10mJihuLmpzb25wQ2FsbGJhY2s9ci5qc29ucENhbGxiYWNrLE9uLnB1c2gobykpLHMmJmIuaXNGdW5jdGlvbihhKSYmYShzWzBdKSxzPWE9dH0pLFwic2NyaXB0XCIpOnR9KTt2YXIgUG4sUm4sV249MCwkbj1lLkFjdGl2ZVhPYmplY3QmJmZ1bmN0aW9uKCl7dmFyIGU7Zm9yKGUgaW4gUG4pUG5bZV0odCwhMCl9O2Z1bmN0aW9uIEluKCl7dHJ5e3JldHVybiBuZXcgZS5YTUxIdHRwUmVxdWVzdH1jYXRjaCh0KXt9fWZ1bmN0aW9uIHpuKCl7dHJ5e3JldHVybiBuZXcgZS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9Y2F0Y2godCl7fX1iLmFqYXhTZXR0aW5ncy54aHI9ZS5BY3RpdmVYT2JqZWN0P2Z1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNMb2NhbCYmSW4oKXx8em4oKX06SW4sUm49Yi5hamF4U2V0dGluZ3MueGhyKCksYi5zdXBwb3J0LmNvcnM9ISFSbiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFJuLFJuPWIuc3VwcG9ydC5hamF4PSEhUm4sUm4mJmIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihuKXtpZighbi5jcm9zc0RvbWFpbnx8Yi5zdXBwb3J0LmNvcnMpe3ZhciByO3JldHVybntzZW5kOmZ1bmN0aW9uKGksbyl7dmFyIGEscyx1PW4ueGhyKCk7aWYobi51c2VybmFtZT91Lm9wZW4obi50eXBlLG4udXJsLG4uYXN5bmMsbi51c2VybmFtZSxuLnBhc3N3b3JkKTp1Lm9wZW4obi50eXBlLG4udXJsLG4uYXN5bmMpLG4ueGhyRmllbGRzKWZvcihzIGluIG4ueGhyRmllbGRzKXVbc109bi54aHJGaWVsZHNbc107bi5taW1lVHlwZSYmdS5vdmVycmlkZU1pbWVUeXBlJiZ1Lm92ZXJyaWRlTWltZVR5cGUobi5taW1lVHlwZSksbi5jcm9zc0RvbWFpbnx8aVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO3RyeXtmb3IocyBpbiBpKXUuc2V0UmVxdWVzdEhlYWRlcihzLGlbc10pfWNhdGNoKGwpe311LnNlbmQobi5oYXNDb250ZW50JiZuLmRhdGF8fG51bGwpLHI9ZnVuY3Rpb24oZSxpKXt2YXIgcyxsLGMscDt0cnl7aWYociYmKGl8fDQ9PT11LnJlYWR5U3RhdGUpKWlmKHI9dCxhJiYodS5vbnJlYWR5c3RhdGVjaGFuZ2U9Yi5ub29wLCRuJiZkZWxldGUgUG5bYV0pLGkpNCE9PXUucmVhZHlTdGF0ZSYmdS5hYm9ydCgpO2Vsc2V7cD17fSxzPXUuc3RhdHVzLGw9dS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcInN0cmluZ1wiPT10eXBlb2YgdS5yZXNwb25zZVRleHQmJihwLnRleHQ9dS5yZXNwb25zZVRleHQpO3RyeXtjPXUuc3RhdHVzVGV4dH1jYXRjaChmKXtjPVwiXCJ9c3x8IW4uaXNMb2NhbHx8bi5jcm9zc0RvbWFpbj8xMjIzPT09cyYmKHM9MjA0KTpzPXAudGV4dD8yMDA6NDA0fX1jYXRjaChkKXtpfHxvKC0xLGQpfXAmJm8ocyxjLHAsbCl9LG4uYXN5bmM/ND09PXUucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KHIpOihhPSsrV24sJG4mJihQbnx8KFBuPXt9LGIoZSkudW5sb2FkKCRuKSksUG5bYV09ciksdS5vbnJlYWR5c3RhdGVjaGFuZ2U9cik6cigpfSxhYm9ydDpmdW5jdGlvbigpe3ImJnIodCwhMCl9fX19KTt2YXIgWG4sVW4sVm49L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFluPVJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIreCtcIikoW2EteiVdKikkXCIsXCJpXCIpLEpuPS9xdWV1ZUhvb2tzJC8sR249W25yXSxRbj17XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG4scixpPXRoaXMuY3JlYXRlVHdlZW4oZSx0KSxvPVluLmV4ZWModCksYT1pLmN1cigpLHM9K2F8fDAsdT0xLGw9MjA7aWYobyl7aWYobj0rb1syXSxyPW9bM118fChiLmNzc051bWJlcltlXT9cIlwiOlwicHhcIiksXCJweFwiIT09ciYmcyl7cz1iLmNzcyhpLmVsZW0sZSwhMCl8fG58fDE7ZG8gdT11fHxcIi41XCIscy89dSxiLnN0eWxlKGkuZWxlbSxlLHMrcik7d2hpbGUodSE9PSh1PWkuY3VyKCkvYSkmJjEhPT11JiYtLWwpfWkudW5pdD1yLGkuc3RhcnQ9cyxpLmVuZD1vWzFdP3MrKG9bMV0rMSkqbjpufXJldHVybiBpfV19O2Z1bmN0aW9uIEtuKCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtYbj10fSksWG49Yi5ub3coKX1mdW5jdGlvbiBabihlLHQpe2IuZWFjaCh0LGZ1bmN0aW9uKHQsbil7dmFyIHI9KFFuW3RdfHxbXSkuY29uY2F0KFFuW1wiKlwiXSksaT0wLG89ci5sZW5ndGg7Zm9yKDtvPmk7aSsrKWlmKHJbaV0uY2FsbChlLHQsbikpcmV0dXJufSl9ZnVuY3Rpb24gZXIoZSx0LG4pe3ZhciByLGksbz0wLGE9R24ubGVuZ3RoLHM9Yi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoaSlyZXR1cm4hMTt2YXIgdD1Ybnx8S24oKSxuPU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi10KSxyPW4vbC5kdXJhdGlvbnx8MCxvPTEtcixhPTAsdT1sLnR3ZWVucy5sZW5ndGg7Zm9yKDt1PmE7YSsrKWwudHdlZW5zW2FdLnJ1bihvKTtyZXR1cm4gcy5ub3RpZnlXaXRoKGUsW2wsbyxuXSksMT5vJiZ1P246KHMucmVzb2x2ZVdpdGgoZSxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06ZSxwcm9wczpiLmV4dGVuZCh7fSx0KSxvcHRzOmIuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6WG58fEtuKCksZHVyYXRpb246bi5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24odCxuKXt2YXIgcj1iLlR3ZWVuKGUsbC5vcHRzLHQsbixsLm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gocikscn0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLHI9dD9sLnR3ZWVucy5sZW5ndGg6MDtpZihpKXJldHVybiB0aGlzO2ZvcihpPSEwO3I+bjtuKyspbC50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0P3MucmVzb2x2ZVdpdGgoZSxbbCx0XSk6cy5yZWplY3RXaXRoKGUsW2wsdF0pLHRoaXN9fSksYz1sLnByb3BzO2Zvcih0cihjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTthPm87bysrKWlmKHI9R25bb10uY2FsbChsLGUsYyxsLm9wdHMpKXJldHVybiByO3JldHVybiBabihsLGMpLGIuaXNGdW5jdGlvbihsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChlLGwpLGIuZngudGltZXIoYi5leHRlbmQodSx7ZWxlbTplLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyl9ZnVuY3Rpb24gdHIoZSx0KXt2YXIgbixyLGksbyxhO2ZvcihpIGluIGUpaWYocj1iLmNhbWVsQ2FzZShpKSxvPXRbcl0sbj1lW2ldLGIuaXNBcnJheShuKSYmKG89blsxXSxuPWVbaV09blswXSksaSE9PXImJihlW3JdPW4sZGVsZXRlIGVbaV0pLGE9Yi5jc3NIb29rc1tyXSxhJiZcImV4cGFuZFwiaW4gYSl7bj1hLmV4cGFuZChuKSxkZWxldGUgZVtyXTtmb3IoaSBpbiBuKWkgaW4gZXx8KGVbaV09bltpXSx0W2ldPW8pfWVsc2UgdFtyXT1vfWIuQW5pbWF0aW9uPWIuZXh0ZW5kKGVyLHt0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7Yi5pc0Z1bmN0aW9uKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUuc3BsaXQoXCIgXCIpO3ZhciBuLHI9MCxpPWUubGVuZ3RoO2Zvcig7aT5yO3IrKyluPWVbcl0sUW5bbl09UW5bbl18fFtdLFFuW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/R24udW5zaGlmdChlKTpHbi5wdXNoKGUpfX0pO2Z1bmN0aW9uIG5yKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLHAsZj10aGlzLGQ9ZS5zdHlsZSxoPXt9LGc9W10sbT1lLm5vZGVUeXBlJiZubihlKTtuLnF1ZXVlfHwoYz1iLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSxudWxsPT1jLnVucXVldWVkJiYoYy51bnF1ZXVlZD0wLHA9Yy5lbXB0eS5maXJlLGMuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2MudW5xdWV1ZWR8fHAoKX0pLGMudW5xdWV1ZWQrKyxmLmFsd2F5cyhmdW5jdGlvbigpe2YuYWx3YXlzKGZ1bmN0aW9uKCl7Yy51bnF1ZXVlZC0tLGIucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8Yy5lbXB0eS5maXJlKCl9KX0pKSwxPT09ZS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiB0fHxcIndpZHRoXCJpbiB0KSYmKG4ub3ZlcmZsb3c9W2Qub3ZlcmZsb3csZC5vdmVyZmxvd1gsZC5vdmVyZmxvd1ldLFwiaW5saW5lXCI9PT1iLmNzcyhlLFwiZGlzcGxheVwiKSYmXCJub25lXCI9PT1iLmNzcyhlLFwiZmxvYXRcIikmJihiLnN1cHBvcnQuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmXCJpbmxpbmVcIiE9PXVuKGUubm9kZU5hbWUpP2Quem9vbT0xOmQuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGQub3ZlcmZsb3c9XCJoaWRkZW5cIixiLnN1cHBvcnQuc2hyaW5rV3JhcEJsb2Nrc3x8Zi5hbHdheXMoZnVuY3Rpb24oKXtkLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0sZC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxkLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpO2ZvcihpIGluIHQpaWYoYT10W2ldLFZuLmV4ZWMoYSkpe2lmKGRlbGV0ZSB0W2ldLHU9dXx8XCJ0b2dnbGVcIj09PWEsYT09PShtP1wiaGlkZVwiOlwic2hvd1wiKSljb250aW51ZTtnLnB1c2goaSl9aWYobz1nLmxlbmd0aCl7cz1iLl9kYXRhKGUsXCJmeHNob3dcIil8fGIuX2RhdGEoZSxcImZ4c2hvd1wiLHt9KSxcImhpZGRlblwiaW4gcyYmKG09cy5oaWRkZW4pLHUmJihzLmhpZGRlbj0hbSksbT9iKGUpLnNob3coKTpmLmRvbmUoZnVuY3Rpb24oKXtiKGUpLmhpZGUoKX0pLGYuZG9uZShmdW5jdGlvbigpe3ZhciB0O2IuX3JlbW92ZURhdGEoZSxcImZ4c2hvd1wiKTtmb3IodCBpbiBoKWIuc3R5bGUoZSx0LGhbdF0pfSk7Zm9yKGk9MDtvPmk7aSsrKXI9Z1tpXSxsPWYuY3JlYXRlVHdlZW4ocixtP3Nbcl06MCksaFtyXT1zW3JdfHxiLnN0eWxlKGUsciksciBpbiBzfHwoc1tyXT1sLnN0YXJ0LG0mJihsLmVuZD1sLnN0YXJ0LGwuc3RhcnQ9XCJ3aWR0aFwiPT09cnx8XCJoZWlnaHRcIj09PXI/MTowKSl9fWZ1bmN0aW9uIHJyKGUsdCxuLHIsaSl7cmV0dXJuIG5ldyByci5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfWIuVHdlZW49cnIscnIucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjpycixpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChiLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPXJyLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpyci5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1yci5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5wb3M9dD10aGlzLm9wdGlvbnMuZHVyYXRpb24/Yi5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpyci5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxyci5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9cnIucHJvdG90eXBlLHJyLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09ZS5lbGVtW2UucHJvcF18fGUuZWxlbS5zdHlsZSYmbnVsbCE9ZS5lbGVtLnN0eWxlW2UucHJvcF0/KHQ9Yi5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSx0JiZcImF1dG9cIiE9PXQ/dDowKTplLmVsZW1bZS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGUpe2IuZnguc3RlcFtlLnByb3BdP2IuZnguc3RlcFtlLnByb3BdKGUpOmUuZWxlbS5zdHlsZSYmKG51bGwhPWUuZWxlbS5zdHlsZVtiLmNzc1Byb3BzW2UucHJvcF1dfHxiLmNzc0hvb2tzW2UucHJvcF0pP2Iuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpOmUuZWxlbVtlLnByb3BdPWUubm93fX19LHJyLnByb3BIb29rcy5zY3JvbGxUb3A9cnIucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sYi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPWIuZm5bdF07Yi5mblt0XT1mdW5jdGlvbihlLHIsaSl7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoaXIodCwhMCksZSxyLGkpfX0pLGIuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKG5uKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPWIuaXNFbXB0eU9iamVjdChlKSxvPWIuc3BlZWQodCxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgdD1lcih0aGlzLGIuZXh0ZW5kKHt9LGUpLG8pO2EuZmluaXNoPWZ1bmN0aW9uKCl7dC5zdG9wKCEwKX0sKGl8fGIuX2RhdGEodGhpcyxcImZpbmlzaFwiKSkmJnQuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fG8ucXVldWU9PT0hMT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGUsbixyKXt2YXIgaT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KHIpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKHI9bixuPWUsZT10KSxuJiZlIT09ITEmJnRoaXMucXVldWUoZXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0hMCxuPW51bGwhPWUmJmUrXCJxdWV1ZUhvb2tzXCIsbz1iLnRpbWVycyxhPWIuX2RhdGEodGhpcyk7aWYobilhW25dJiZhW25dLnN0b3AmJmkoYVtuXSk7ZWxzZSBmb3IobiBpbiBhKWFbbl0mJmFbbl0uc3RvcCYmSm4udGVzdChuKSYmaShhW25dKTtmb3Iobj1vLmxlbmd0aDtuLS07KW9bbl0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9bbl0ucXVldWUhPT1lfHwob1tuXS5hbmltLnN0b3AociksdD0hMSxvLnNwbGljZShuLDEpKTsodHx8IXIpJiZiLmRlcXVldWUodGhpcyxlKX0pfSxmaW5pc2g6ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT0hMSYmKGU9ZXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxuPWIuX2RhdGEodGhpcykscj1uW2UrXCJxdWV1ZVwiXSxpPW5bZStcInF1ZXVlSG9va3NcIl0sbz1iLnRpbWVycyxhPXI/ci5sZW5ndGg6MDtmb3Iobi5maW5pc2g9ITAsYi5xdWV1ZSh0aGlzLGUsW10pLGkmJmkuY3VyJiZpLmN1ci5maW5pc2gmJmkuY3VyLmZpbmlzaC5jYWxsKHRoaXMpLHQ9by5sZW5ndGg7dC0tOylvW3RdLmVsZW09PT10aGlzJiZvW3RdLnF1ZXVlPT09ZSYmKG9bdF0uYW5pbS5zdG9wKCEwKSxvLnNwbGljZSh0LDEpKTtmb3IodD0wO2E+dDt0Kyspclt0XSYmclt0XS5maW5pc2gmJnJbdF0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIG4uZmluaXNofSl9fSk7ZnVuY3Rpb24gaXIoZSx0KXt2YXIgbixyPXtoZWlnaHQ6ZX0saT0wO2Zvcih0PXQ/MTowOzQ+aTtpKz0yLXQpbj1adFtpXSxyW1wibWFyZ2luXCIrbl09cltcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoci5vcGFjaXR5PXIud2lkdGg9ZSkscn1iLmVhY2goe3NsaWRlRG93bjppcihcInNob3dcIiksc2xpZGVVcDppcihcImhpZGVcIiksc2xpZGVUb2dnbGU6aXIoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0aGlzLmFuaW1hdGUodCxlLG4scil9fSksYi5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Yi5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxiLmlzRnVuY3Rpb24oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIWIuaXNGdW5jdGlvbih0KSYmdH07cmV0dXJuIHIuZHVyYXRpb249Yi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2Ygci5kdXJhdGlvbj9yLmR1cmF0aW9uOnIuZHVyYXRpb24gaW4gYi5meC5zcGVlZHM/Yi5meC5zcGVlZHNbci5kdXJhdGlvbl06Yi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PXIucXVldWV8fHIucXVldWU9PT0hMCkmJihyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Yi5pc0Z1bmN0aW9uKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZiLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sYi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfX0sYi50aW1lcnM9W10sYi5meD1yci5wcm90b3R5cGUuaW5pdCxiLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSxuPWIudGltZXJzLHI9MDtmb3IoWG49Yi5ub3coKTtuLmxlbmd0aD5yO3IrKyllPW5bcl0sZSgpfHxuW3JdIT09ZXx8bi5zcGxpY2Uoci0tLDEpO24ubGVuZ3RofHxiLmZ4LnN0b3AoKSxYbj10fSxiLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe2UoKSYmYi50aW1lcnMucHVzaChlKSYmYi5meC5zdGFydCgpfSxiLmZ4LmludGVydmFsPTEzLGIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtVbnx8KFVuPXNldEludGVydmFsKGIuZngudGljayxiLmZ4LmludGVydmFsKSl9LGIuZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoVW4pLFVuPW51bGx9LGIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LGIuZnguc3RlcD17fSxiLmV4cHImJmIuZXhwci5maWx0ZXJzJiYoYi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZ3JlcChiLnRpbWVycyxmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuZWxlbX0pLmxlbmd0aH0pLGIuZm4ub2Zmc2V0PWZ1bmN0aW9uKGUpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGU9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGUsdCl9KTt2YXIgbixyLG89e3RvcDowLGxlZnQ6MH0sYT10aGlzWzBdLHM9YSYmYS5vd25lckRvY3VtZW50O2lmKHMpcmV0dXJuIG49cy5kb2N1bWVudEVsZW1lbnQsYi5jb250YWlucyhuLGEpPyh0eXBlb2YgYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1pJiYobz1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxyPW9yKHMpLHt0b3A6by50b3ArKHIucGFnZVlPZmZzZXR8fG4uc2Nyb2xsVG9wKS0obi5jbGllbnRUb3B8fDApLGxlZnQ6by5sZWZ0KyhyLnBhZ2VYT2Zmc2V0fHxuLnNjcm9sbExlZnQpLShuLmNsaWVudExlZnR8fDApfSk6b30sYi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHI9Yi5jc3MoZSxcInBvc2l0aW9uXCIpO1wic3RhdGljXCI9PT1yJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpO3ZhciBpPWIoZSksbz1pLm9mZnNldCgpLGE9Yi5jc3MoZSxcInRvcFwiKSxzPWIuY3NzKGUsXCJsZWZ0XCIpLHU9KFwiYWJzb2x1dGVcIj09PXJ8fFwiZml4ZWRcIj09PXIpJiZiLmluQXJyYXkoXCJhdXRvXCIsW2Esc10pPi0xLGw9e30sYz17fSxwLGY7dT8oYz1pLnBvc2l0aW9uKCkscD1jLnRvcCxmPWMubGVmdCk6KHA9cGFyc2VGbG9hdChhKXx8MCxmPXBhcnNlRmxvYXQocyl8fDApLGIuaXNGdW5jdGlvbih0KSYmKHQ9dC5jYWxsKGUsbixvKSksbnVsbCE9dC50b3AmJihsLnRvcD10LnRvcC1vLnRvcCtwKSxudWxsIT10LmxlZnQmJihsLmxlZnQ9dC5sZWZ0LW8ubGVmdCtmKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGwpOmkuY3NzKGwpfX0sYi5mbi5leHRlbmQoe3Bvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuPXt0b3A6MCxsZWZ0OjB9LHI9dGhpc1swXTtyZXR1cm5cImZpeGVkXCI9PT1iLmNzcyhyLFwicG9zaXRpb25cIik/dD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihlPXRoaXMub2Zmc2V0UGFyZW50KCksdD10aGlzLm9mZnNldCgpLGIubm9kZU5hbWUoZVswXSxcImh0bWxcIil8fChuPWUub2Zmc2V0KCkpLG4udG9wKz1iLmNzcyhlWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksbi5sZWZ0Kz1iLmNzcyhlWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOnQudG9wLW4udG9wLWIuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtbi5sZWZ0LWIuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50fHxvLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYhYi5ub2RlTmFtZShlLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PWIuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxvLmRvY3VtZW50RWxlbWVudH0pfX0pLGIuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSxuKXt2YXIgcj0vWS8udGVzdChuKTtiLmZuW2VdPWZ1bmN0aW9uKGkpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUsaSxvKXt2YXIgYT1vcihlKTtyZXR1cm4gbz09PXQ/YT9uIGluIGE/YVtuXTphLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtpXTplW2ldOihhP2Euc2Nyb2xsVG8ocj9iKGEpLnNjcm9sbExlZnQoKTpvLHI/bzpiKGEpLnNjcm9sbFRvcCgpKTplW2ldPW8sdCl9LGUsaSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pO2Z1bmN0aW9uIG9yKGUpe3JldHVybiBiLmlzV2luZG93KGUpP2U6OT09PWUubm9kZVR5cGU/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6ITF9Yi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGUsbil7Yi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIitlLGNvbnRlbnQ6bixcIlwiOlwib3V0ZXJcIitlfSxmdW5jdGlvbihyLGkpe2IuZm5baV09ZnVuY3Rpb24oaSxvKXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBpKSxzPXJ8fChpPT09ITB8fG89PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKG4scixpKXt2YXIgbztyZXR1cm4gYi5pc1dpbmRvdyhuKT9uLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2VdOjk9PT1uLm5vZGVUeXBlPyhvPW4uZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KG4uYm9keVtcInNjcm9sbFwiK2VdLG9bXCJzY3JvbGxcIitlXSxuLmJvZHlbXCJvZmZzZXRcIitlXSxvW1wib2Zmc2V0XCIrZV0sb1tcImNsaWVudFwiK2VdKSk6aT09PXQ/Yi5jc3MobixyLHMpOmIuc3R5bGUobixyLGkscyl9LG4sYT9pOnQsYSxudWxsKX19KX0pLGUualF1ZXJ5PWUuJD1iLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lLmFtZC5qUXVlcnkmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KX0pKHdpbmRvdyk7IiwiLyohalF1ZXJ5IEtub2IqL1xyXG4vKipcclxuICogRG93bndhcmQgY29tcGF0aWJsZSwgdG91Y2hhYmxlIGRpYWxcclxuICpcclxuICogVmVyc2lvbjogMS4yLjAgKDE1LzA3LzIwMTIpXHJcbiAqIFJlcXVpcmVzOiBqUXVlcnkgdjEuNytcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEyIEFudGhvbnkgVGVycmllblxyXG4gKiBVbmRlciBNSVQgYW5kIEdQTCBsaWNlbnNlczpcclxuICogIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAqICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLmh0bWxcclxuICpcclxuICogVGhhbmtzIHRvIHZvciwgZXNraW1vYmxvb2QsIHNwaWZmaXN0YW4sIEZhYnJpemlvQ1xyXG4gKi9cclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEtvbnRyb2wgbGlicmFyeVxyXG4gICAgICovXHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluaXRpb24gb2YgZ2xvYmFscyBhbmQgY29yZVxyXG4gICAgICovXHJcbiAgICB2YXIgayA9IHt9LCAvLyBrb250cm9sXHJcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgsXHJcbiAgICAgICAgbWluID0gTWF0aC5taW47XHJcblxyXG4gICAgay5jID0ge307XHJcbiAgICBrLmMuZCA9ICQoZG9jdW1lbnQpO1xyXG4gICAgay5jLnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggLSAxO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEtvbnRyb2wgT2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogRGVmaW5pdGlvbiBvZiBhbiBhYnN0cmFjdCBVSSBjb250cm9sXHJcbiAgICAgKlxyXG4gICAgICogRWFjaCBjb25jcmV0ZSBjb21wb25lbnQgbXVzdCBjYWxsIHRoaXMgb25lLlxyXG4gICAgICogPGNvZGU+XHJcbiAgICAgKiBrLm8uY2FsbCh0aGlzKTtcclxuICAgICAqIDwvY29kZT5cclxuICAgICAqL1xyXG4gICAgay5vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5vID0gbnVsbDsgLy8gYXJyYXkgb2Ygb3B0aW9uc1xyXG4gICAgICAgIHRoaXMuJCA9IG51bGw7IC8vIGpRdWVyeSB3cmFwcGVkIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmkgPSBudWxsOyAvLyBtaXhlZCBIVE1MSW5wdXRFbGVtZW50IG9yIGFycmF5IG9mIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICB0aGlzLmcgPSBudWxsOyAvLyBkZXByZWNhdGVkIDJEIGdyYXBoaWNzIGNvbnRleHQgZm9yICdwcmUtcmVuZGVyaW5nJ1xyXG4gICAgICAgIHRoaXMudiA9IG51bGw7IC8vIHZhbHVlIDsgbWl4ZWQgYXJyYXkgb3IgaW50ZWdlclxyXG4gICAgICAgIHRoaXMuY3YgPSBudWxsOyAvLyBjaGFuZ2UgdmFsdWUgOyBub3QgY29tbWl0ZWQgdmFsdWVcclxuICAgICAgICB0aGlzLnggPSAwOyAvLyBjYW52YXMgeCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMueSA9IDA7IC8vIGNhbnZhcyB5IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy53ID0gMDsgLy8gY2FudmFzIHdpZHRoXHJcbiAgICAgICAgdGhpcy5oID0gMDsgLy8gY2FudmFzIGhlaWdodFxyXG4gICAgICAgIHRoaXMuJGMgPSBudWxsOyAvLyBqUXVlcnkgY2FudmFzIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmMgPSBudWxsOyAvLyByZW5kZXJlZCBjYW52YXMgY29udGV4dFxyXG4gICAgICAgIHRoaXMudCA9IDA7IC8vIHRvdWNoZXMgaW5kZXhcclxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmdDb2xvciA9IG51bGw7IC8vIG1haW4gY29sb3JcclxuICAgICAgICB0aGlzLnBDb2xvciA9IG51bGw7IC8vIHByZXZpb3VzIGNvbG9yXHJcbiAgICAgICAgdGhpcy5kSCA9IG51bGw7IC8vIGRyYXcgaG9va1xyXG4gICAgICAgIHRoaXMuY0ggPSBudWxsOyAvLyBjaGFuZ2UgaG9va1xyXG4gICAgICAgIHRoaXMuZUggPSBudWxsOyAvLyBjYW5jZWwgaG9va1xyXG4gICAgICAgIHRoaXMuckggPSBudWxsOyAvLyByZWxlYXNlIGhvb2tcclxuICAgICAgICB0aGlzLnNjYWxlID0gMTsgLy8gc2NhbGUgZmFjdG9yXHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVsYXRpdmVXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVsYXRpdmVIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRkaXYgPSBudWxsOyAvLyBjb21wb25lbnQgZGl2XHJcblxyXG4gICAgICAgIHRoaXMucnVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2YgPSBmdW5jdGlvbiAoZSwgY29uZikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGs7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gY29uZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHMub1trXSA9IGNvbmZba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHMuX2NvbmZpZ3VyZSgpXHJcbiAgICAgICAgICAgICAgICAgLl9kcmF3KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLiQuZGF0YSgna29udHJvbGVkJykpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy4kLmRhdGEoJ2tvbnRyb2xlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leHRlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5vID0gJC5leHRlbmQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAgICAgbWluIDogdGhpcy4kLmRhdGEoJ21pbicpIHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4IDogdGhpcy4kLmRhdGEoJ21heCcpIHx8IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBzdG9wcGVyIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByZWFkT25seSA6IHRoaXMuJC5kYXRhKCdyZWFkb25seScpIHx8ICh0aGlzLiQuYXR0cigncmVhZG9ubHknKSA9PSAncmVhZG9ubHknKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVUlcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgOiAodGhpcy4kLmRhdGEoJ2N1cnNvcicpID09PSB0cnVlICYmIDMwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJC5kYXRhKCdjdXJzb3InKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJC5kYXRhKCd0aGlja25lc3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIE1hdGgubWF4KE1hdGgubWluKHRoaXMuJC5kYXRhKCd0aGlja25lc3MnKSwgMSksIDAuMDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDAuMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNhcCA6IHRoaXMuJC5kYXRhKCdsaW5lY2FwJykgfHwgJ2J1dHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGhpcy4kLmRhdGEoJ3dpZHRoJykgfHwgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IHRoaXMuJC5kYXRhKCdoZWlnaHQnKSB8fCAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUlucHV0IDogdGhpcy4kLmRhdGEoJ2Rpc3BsYXlpbnB1dCcpID09IG51bGwgfHwgdGhpcy4kLmRhdGEoJ2Rpc3BsYXlpbnB1dCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcmV2aW91cyA6IHRoaXMuJC5kYXRhKCdkaXNwbGF5cHJldmlvdXMnKSxcclxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yIDogdGhpcy4kLmRhdGEoJ2ZnY29sb3InKSB8fCAnIzg3Q0VFQicsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xvcjogdGhpcy4kLmRhdGEoJ2lucHV0Y29sb3InKSxcclxuICAgICAgICAgICAgICAgICAgICBmb250OiB0aGlzLiQuZGF0YSgnZm9udCcpIHx8ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy4kLmRhdGEoJ2ZvbnQtd2VpZ2h0JykgfHwgJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgOiB0aGlzLiQuZGF0YSgnc3RlcCcpIHx8IDEsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvb2tzXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhdyA6IG51bGwsIC8vIGZ1bmN0aW9uICgpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogbnVsbCwgLy8gZnVuY3Rpb24gKHZhbHVlKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbCA6IG51bGwsIC8vIGZ1bmN0aW9uICgpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSA6IG51bGwsIC8vIGZ1bmN0aW9uICh2YWx1ZSkge31cclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA6IG51bGwgLy8gZnVuY3Rpb24gKCkge31cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMub1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gZmluYWxpemUgb3B0aW9uc1xyXG4gICAgICAgICAgICBpZighdGhpcy5vLmlucHV0Q29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuby5pbnB1dENvbG9yID0gdGhpcy5vLmZnQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHJvdXRpbmcgdmFsdWVcclxuICAgICAgICAgICAgaWYodGhpcy4kLmlzKCdmaWVsZHNldCcpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmllbGRzZXQgPSBhcnJheSBvZiBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IHRoaXMuJC5maW5kKCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmkuZWFjaChmdW5jdGlvbihrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmlba10gPSAkdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBzLnZba10gPSAkdGhpcy52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZSBrZXl1cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxba10gPSAkdGhpcy52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiQuZmluZCgnbGVnZW5kJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlucHV0ID0gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gdGhpcy4kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ID0gdGhpcy4kLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMudiA9PSAnJykgJiYgKHRoaXMudiA9IHRoaXMuby5taW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGFuZ2Uga2V5dXAnXHJcbiAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuX3ZhbGlkYXRlKHMuJC52YWwoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoIXRoaXMuby5kaXNwbGF5SW5wdXQpICYmIHRoaXMuJC5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGRzIG5lZWRlZCBET00gZWxlbWVudHMgKGNhbnZhcywgZGl2KVxyXG4gICAgICAgICAgICB0aGlzLiRjID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgR192bWxDYW52YXNNYW5hZ2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgIEdfdm1sQ2FudmFzTWFuYWdlci5pbml0RWxlbWVudCh0aGlzLiRjWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmMgPSB0aGlzLiRjWzBdLmdldENvbnRleHQgPyB0aGlzLiRjWzBdLmdldENvbnRleHQoJzJkJykgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vLmVycm9yICYmIHRoaXMuby5lcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBoZHBpIHN1cHBvcnRcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlY3RzIHJlbGF0aXZlIHdpZHRoIC8gaGVpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVXaWR0aCA9ICgodGhpcy5vLndpZHRoICUgMSAhPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5vLndpZHRoLmluZGV4T2YoJyUnKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVIZWlnaHQgPSAoKHRoaXMuby5oZWlnaHQgJSAxICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLm8uaGVpZ2h0LmluZGV4T2YoJyUnKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlID0gKHRoaXMucmVsYXRpdmVXaWR0aCB8fCB0aGlzLnJlbGF0aXZlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdyYXBzIGFsbCBlbGVtZW50cyBpbiBhIGRpdlxyXG4gICAgICAgICAgICB0aGlzLiRkaXYgPSAkKCc8ZGl2IHN0eWxlPVwiJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICh0aGlzLm8uaW5saW5lID8gJ2Rpc3BsYXk6aW5saW5lOycgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnXCI+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiQud3JhcCh0aGlzLiRkaXYpLmJlZm9yZSh0aGlzLiRjKTtcclxuICAgICAgICAgICAgdGhpcy4kZGl2ID0gdGhpcy4kLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29tcHV0ZXMgc2l6ZSBhbmQgY2FydmVzIHRoZSBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5fY2FydmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHByZXBhcmVzIHByb3BzIGZvciB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAodGhpcy52IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkodGhpcy52LCB0aGlzLmN2KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3YgPSB0aGlzLnY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGJpbmRzIGNvbmZpZ3VyZSBldmVudFxyXG4gICAgICAgICAgICB0aGlzLiRcclxuICAgICAgICAgICAgICAgIC5iaW5kKFwiY29uZmlndXJlXCIsIGNmKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAuYmluZChcImNvbmZpZ3VyZVwiLCBjZik7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBpbml0XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbigpXHJcbiAgICAgICAgICAgICAgICAuX2NvbmZpZ3VyZSgpXHJcbiAgICAgICAgICAgICAgICAuX3h5KClcclxuICAgICAgICAgICAgICAgIC5pbml0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGUgbW9zdCBpbXBvcnRhbnQgIVxyXG4gICAgICAgICAgICB0aGlzLl9kcmF3KCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9jYXJ2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJlbGF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMucmVsYXRpdmVXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiRkaXYucGFyZW50KCkud2lkdGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGFyc2VJbnQodGhpcy5vLndpZHRoKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiRkaXYucGFyZW50KCkud2lkdGgoKSxcclxuICAgICAgICAgICAgICAgICAgICBoID0gdGhpcy5yZWxhdGl2ZUhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiRkaXYucGFyZW50KCkuaGVpZ2h0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBhcnNlSW50KHRoaXMuby5oZWlnaHQpIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuJGRpdi5wYXJlbnQoKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhcHBseSByZWxhdGl2ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy53ID0gdGhpcy5oID0gTWF0aC5taW4odywgaCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLncgPSB0aGlzLm8ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmggPSB0aGlzLm8uaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBkaXZcclxuICAgICAgICAgICAgdGhpcy4kZGl2LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiB0aGlzLncgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IHRoaXMuaCArICdweCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBjYW52YXMgd2l0aCBjb21wdXRlZCB3aWR0aFxyXG4gICAgICAgICAgICB0aGlzLiRjLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gc2NhbGluZ1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2FsZSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY1swXS53aWR0aCA9IHRoaXMuJGNbMF0ud2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY1swXS5oZWlnaHQgPSB0aGlzLiRjWzBdLmhlaWdodCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjLndpZHRoKHRoaXMudyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjLmhlaWdodCh0aGlzLmgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYXcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjYW52YXMgcHJlLXJlbmRlcmluZ1xyXG4gICAgICAgICAgICB2YXIgZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBzLmcgPSBzLmM7XHJcblxyXG4gICAgICAgICAgICBzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBzLmRIXHJcbiAgICAgICAgICAgICYmIChkID0gcy5kSCgpKTtcclxuXHJcbiAgICAgICAgICAgIChkICE9PSBmYWxzZSkgJiYgcy5kcmF3KCk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3RvdWNoID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0b3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2ID0gcy54eTJ2YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1tzLnRdLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbcy50XS5wYWdlWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHMuY2hhbmdlKHMuX3ZhbGlkYXRlKHYpKTtcclxuICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0b3VjaGVzIGluZGV4XHJcbiAgICAgICAgICAgIHRoaXMudCA9IGsuYy50KGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgdG91Y2hcclxuICAgICAgICAgICAgdG91Y2hNb3ZlKGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVG91Y2ggZXZlbnRzIGxpc3RlbmVyc1xyXG4gICAgICAgICAgICBrLmMuZFxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJ0b3VjaG1vdmUua1wiLCB0b3VjaE1vdmUpXHJcbiAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICBcInRvdWNoZW5kLmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC51bmJpbmQoJ3RvdWNobW92ZS5rIHRvdWNoZW5kLmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuckhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChzLnJIKHMuY3YpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLmN2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW91c2UgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIG1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHMueHkydmFsKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgICAgICAgICAgICAgcy5jaGFuZ2Uocy5fdmFsaWRhdGUodikpO1xyXG4gICAgICAgICAgICAgICAgcy5fZHJhdygpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgY2xpY2tcclxuICAgICAgICAgICAgbW91c2VNb3ZlKGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gTW91c2UgZXZlbnRzIGxpc3RlbmVyc1xyXG4gICAgICAgICAgICBrLmMuZFxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJtb3VzZW1vdmUua1wiLCBtb3VzZU1vdmUpXHJcbiAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAvLyBFc2NhcGUga2V5IGNhbmNlbCBjdXJyZW50IGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5dXAua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgay5jLmQudW5iaW5kKFwibW91c2V1cC5rIG1vdXNlbW92ZS5rIGtleXVwLmtcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZUhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAocy5lSCgpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICBcIm1vdXNldXAua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC51bmJpbmQoJ21vdXNlbW92ZS5rIG1vdXNldXAuayBrZXl1cC5rJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnJIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAocy5ySChzLmN2KSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5jdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3h5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuJGMub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IG8ubGVmdDtcclxuICAgICAgICAgICAgdGhpcy55ID0gby50b3A7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2xpc3RlbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vLnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjXHJcbiAgICAgICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2Vkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5feHkoKS5fbW91c2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvdWNoc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl94eSgpLl90b3VjaChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiQuYXR0cigncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5yZWxhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLl9jYXJ2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5fZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEhvb2tzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm8uZHJhdykgdGhpcy5kSCA9IHRoaXMuby5kcmF3O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vLmNoYW5nZSkgdGhpcy5jSCA9IHRoaXMuby5jaGFuZ2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm8uY2FuY2VsKSB0aGlzLmVIID0gdGhpcy5vLmNhbmNlbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuby5yZWxlYXNlKSB0aGlzLnJIID0gdGhpcy5vLnJlbGVhc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vLmRpc3BsYXlQcmV2aW91cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wQ29sb3IgPSB0aGlzLmgycmdiYSh0aGlzLm8uZmdDb2xvciwgXCIwLjRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZnQ29sb3IgPSB0aGlzLmgycmdiYSh0aGlzLm8uZmdDb2xvciwgXCIwLjZcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZnQ29sb3IgPSB0aGlzLm8uZmdDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNbMF0ud2lkdGggPSB0aGlzLiRjWzBdLndpZHRoO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlID0gZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICByZXR1cm4gKH5+ICgoKHYgPCAwKSA/IC0wLjUgOiAwLjUpICsgKHYvdGhpcy5vLnN0ZXApKSkgKiB0aGlzLm8uc3RlcDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBYnN0cmFjdCBtZXRob2RzXHJcbiAgICAgICAgdGhpcy5saXN0ZW4gPSBmdW5jdGlvbiAoKSB7fTsgLy8gb24gc3RhcnQsIG9uZSB0aW1lXHJcbiAgICAgICAgdGhpcy5leHRlbmQgPSBmdW5jdGlvbiAoKSB7fTsgLy8gZWFjaCB0aW1lIGNvbmZpZ3VyZSB0cmlnZ2VyZWRcclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7fTsgLy8gZWFjaCB0aW1lIGNvbmZpZ3VyZSB0cmlnZ2VyZWRcclxuICAgICAgICB0aGlzLmNoYW5nZSA9IGZ1bmN0aW9uICh2KSB7fTsgLy8gb24gY2hhbmdlXHJcbiAgICAgICAgdGhpcy52YWwgPSBmdW5jdGlvbiAodikge307IC8vIG9uIHJlbGVhc2VcclxuICAgICAgICB0aGlzLnh5MnZhbCA9IGZ1bmN0aW9uICh4LCB5KSB7fTsgLy9cclxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7fTsgLy8gb24gY2hhbmdlIC8gb24gcmVsZWFzZVxyXG4gICAgICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX2NsZWFyKCk7IH07XHJcblxyXG4gICAgICAgIC8vIFV0aWxzXHJcbiAgICAgICAgdGhpcy5oMnJnYmEgPSBmdW5jdGlvbiAoaCwgYSkge1xyXG4gICAgICAgICAgICB2YXIgcmdiO1xyXG4gICAgICAgICAgICBoID0gaC5zdWJzdHJpbmcoMSw3KVxyXG4gICAgICAgICAgICByZ2IgPSBbcGFyc2VJbnQoaC5zdWJzdHJpbmcoMCwyKSwxNilcclxuICAgICAgICAgICAgICAgICAgICxwYXJzZUludChoLnN1YnN0cmluZygyLDQpLDE2KVxyXG4gICAgICAgICAgICAgICAgICAgLHBhcnNlSW50KGguc3Vic3RyaW5nKDQsNiksMTYpXTtcclxuICAgICAgICAgICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlswXSArIFwiLFwiICsgcmdiWzFdICsgXCIsXCIgKyByZ2JbMl0gKyBcIixcIiArIGEgKyBcIilcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvcHkgPSBmdW5jdGlvbiAoZiwgdCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGYpIHsgdFtpXSA9IGZbaV07IH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBrLkRpYWxcclxuICAgICAqL1xyXG4gICAgay5EaWFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGsuby5jYWxsKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMueHkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JFeHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudzIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuUEkyID0gMipNYXRoLlBJO1xyXG5cclxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5vID0gJC5leHRlbmQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvciA6IHRoaXMuJC5kYXRhKCdiZ2NvbG9yJykgfHwgJyNFRUVFRUUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlT2Zmc2V0IDogdGhpcy4kLmRhdGEoJ2FuZ2xlb2Zmc2V0JykgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZUFyYyA6IHRoaXMuJC5kYXRhKCdhbmdsZWFyYycpIHx8IDM2MCxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmUgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnZhbCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGlmIChudWxsICE9IHYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3YgPSB0aGlzLm8uc3RvcHBlciA/IG1heChtaW4odiwgdGhpcy5vLm1heCksIHRoaXMuby5taW4pIDogdjtcclxuXHRcdHRoaXMudiA9IHRoaXMuY3Y7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMudik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy54eTJ2YWwgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICB2YXIgYSwgcmV0O1xyXG5cclxuICAgICAgICAgICAgYSA9IE1hdGguYXRhbjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggLSAodGhpcy54ICsgdGhpcy53MilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCAtICh5IC0gdGhpcy55IC0gdGhpcy53MilcclxuICAgICAgICAgICAgICAgICAgICApIC0gdGhpcy5hbmdsZU9mZnNldDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYW5nbGVBcmMgIT0gdGhpcy5QSTIgJiYgKGEgPCAwKSAmJiAoYSA+IC0wLjUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBpc3NldCBhbmdsZUFyYyBvcHRpb24sIHNldCB0byBtaW4gaWYgLjUgdW5kZXIgbWluXHJcbiAgICAgICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYSArPSB0aGlzLlBJMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0ID0gfn4gKDAuNSArIChhICogKHRoaXMuby5tYXggLSB0aGlzLm8ubWluKSAvIHRoaXMuYW5nbGVBcmMpKVxyXG4gICAgICAgICAgICAgICAgICAgICsgdGhpcy5vLm1pbjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuby5zdG9wcGVyXHJcbiAgICAgICAgICAgICYmIChyZXQgPSBtYXgobWluKHJldCwgdGhpcy5vLm1heCksIHRoaXMuby5taW4pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGJpbmQgTW91c2VXaGVlbFxyXG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMsIG13VGltZXJTdG9wLCBtd1RpbWVyUmVsZWFzZSxcclxuICAgICAgICAgICAgICAgIG13ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpID0gZS5vcmlnaW5hbEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGRlbHRhWCA9IG9yaS5kZXRhaWwgfHwgb3JpLndoZWVsRGVsdGFYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGRlbHRhWSA9IG9yaS5kZXRhaWwgfHwgb3JpLndoZWVsRGVsdGFZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLHYgPSBzLl92YWxpZGF0ZShzLiQudmFsKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGRlbHRhWD4wIHx8IGRlbHRhWT4wID8gcy5vLnN0ZXAgOiBkZWx0YVg8MCB8fCBkZWx0YVk8MCA/IC1zLm8uc3RlcCA6IDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBtYXgobWluKHYsIHMuby5tYXgpLCBzLm8ubWluKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwodik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocy5ySCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBtb3VzZXdoZWVsIHN0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobXdUaW1lclN0b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJTdG9wID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5ySCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclN0b3AgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBtb3VzZXdoZWVsIHJlbGVhc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIW13VGltZXJSZWxlYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG13VGltZXJTdG9wKSBzLnJIKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclJlbGVhc2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLCBrdmFsLCB0bywgbSA9IDEsIGt2ID0gezM3Oi1zLm8uc3RlcCwgMzg6cy5vLnN0ZXAsIDM5OnMuby5zdGVwLCA0MDotcy5vLnN0ZXB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kXHJcbiAgICAgICAgICAgICAgICAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICBcImtleWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2MgPSBlLmtleUNvZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBudW1wYWQgc3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihrYyA+PSA5NiAmJiBrYyA8PSAxMDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjID0gZS5rZXlDb2RlID0ga2MgLSA0ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAga3ZhbCA9IHBhcnNlSW50KFN0cmluZy5mcm9tQ2hhckNvZGUoa2MpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihrdmFsKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrYyAhPT0gMTMpICAgICAgICAgLy8gZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChrYyAhPT0gOCkgICAgICAgLy8gYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChrYyAhPT0gOSkgICAgICAgLy8gdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoa2MgIT09IDE4OSkgICAgIC8vIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoa2MsWzM3LDM4LDM5LDQwXSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBwYXJzZUludChzLiQudmFsKCkpICsga3Zba2NdICogbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5vLnN0b3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAodiA9IG1heChtaW4odiwgcy5vLm1heCksIHMuby5taW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jaGFuZ2Uodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5fZHJhdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb25nIHRpbWUga2V5ZG93biBzcGVlZC11cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgbSo9MjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXl1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihrdmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0byk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuJC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrdmFsIHBvc3Rjb25kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocy4kLnZhbCgpID4gcy5vLm1heCAmJiBzLiQudmFsKHMuby5tYXgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHMuJC52YWwoKSA8IHMuby5taW4gJiYgcy4kLnZhbChzLm8ubWluKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGMuYmluZChcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgbXcpO1xyXG4gICAgICAgICAgICB0aGlzLiQuYmluZChcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgbXcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy52IDwgdGhpcy5vLm1pblxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy52ID4gdGhpcy5vLm1heFxyXG4gICAgICAgICAgICApIHRoaXMudiA9IHRoaXMuby5taW47XHJcblxyXG4gICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMudik7XHJcbiAgICAgICAgICAgIHRoaXMudzIgPSB0aGlzLncgLyAyO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnNvckV4dCA9IHRoaXMuby5jdXJzb3IgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMueHkgPSB0aGlzLncyICogdGhpcy5zY2FsZTtcclxuICAgICAgICAgICAgdGhpcy5saW5lV2lkdGggPSB0aGlzLnh5ICogdGhpcy5vLnRoaWNrbmVzcztcclxuICAgICAgICAgICAgdGhpcy5saW5lQ2FwID0gdGhpcy5vLmxpbmVDYXA7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy54eSAtIHRoaXMubGluZVdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuby5hbmdsZU9mZnNldFxyXG4gICAgICAgICAgICAmJiAodGhpcy5vLmFuZ2xlT2Zmc2V0ID0gaXNOYU4odGhpcy5vLmFuZ2xlT2Zmc2V0KSA/IDAgOiB0aGlzLm8uYW5nbGVPZmZzZXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vLmFuZ2xlQXJjXHJcbiAgICAgICAgICAgICYmICh0aGlzLm8uYW5nbGVBcmMgPSBpc05hTih0aGlzLm8uYW5nbGVBcmMpID8gdGhpcy5QSTIgOiB0aGlzLm8uYW5nbGVBcmMpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGVnIHRvIHJhZFxyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlT2Zmc2V0ID0gdGhpcy5vLmFuZ2xlT2Zmc2V0ICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZUFyYyA9IHRoaXMuby5hbmdsZUFyYyAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgICAgICAgICAvLyBjb21wdXRlIHN0YXJ0IGFuZCBlbmQgYW5nbGVzXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IDEuNSAqIE1hdGguUEkgKyB0aGlzLmFuZ2xlT2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMS41ICogTWF0aC5QSSArIHRoaXMuYW5nbGVPZmZzZXQgKyB0aGlzLmFuZ2xlQXJjO1xyXG5cclxuICAgICAgICAgICAgdmFyIHMgPSBtYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcoTWF0aC5hYnModGhpcy5vLm1heCkpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBTdHJpbmcoTWF0aC5hYnModGhpcy5vLm1pbikpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuby5kaXNwbGF5SW5wdXRcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuaS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnIDogKCh0aGlzLncgLyAyICsgNCkgPj4gMCkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnaGVpZ2h0JyA6ICgodGhpcy53IC8gMykgPj4gMCkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwncG9zaXRpb24nIDogJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ3ZlcnRpY2FsLWFsaWduJyA6ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnbWFyZ2luLXRvcCcgOiAoKHRoaXMudyAvIDMpID4+IDApICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ21hcmdpbi1sZWZ0JyA6ICctJyArICgodGhpcy53ICogMyAvIDQgKyAyKSA+PiAwKSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCdib3JkZXInIDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ2JhY2tncm91bmQnIDogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwnZm9udCcgOiB0aGlzLm8uZm9udFdlaWdodCArICcgJyArICgodGhpcy53IC8gcykgPj4gMCkgKyAncHggJyArIHRoaXMuby5mb250XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ2NvbG9yJyA6IHRoaXMuby5pbnB1dENvbG9yIHx8IHRoaXMuby5mZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwncGFkZGluZycgOiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5pLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCcgOiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAsJ3Zpc2liaWxpdHknIDogJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBpZiAodiA9PSB0aGlzLmN2KSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuY3YgPSB2O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNIXHJcbiAgICAgICAgICAgICAgICAmJiAodGhpcy5jSCh2KSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICkgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICByZXR1cm4gKHYgLSB0aGlzLm8ubWluKSAqIHRoaXMuYW5nbGVBcmMgLyAodGhpcy5vLm1heCAtIHRoaXMuby5taW4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5nLCAgICAgICAgICAgICAgICAgLy8gY29udGV4dFxyXG4gICAgICAgICAgICAgICAgYSA9IHRoaXMuYW5nbGUodGhpcy5jdikgICAgLy8gQW5nbGVcclxuICAgICAgICAgICAgICAgICwgc2F0ID0gdGhpcy5zdGFydEFuZ2xlICAgICAvLyBTdGFydCBhbmdsZVxyXG4gICAgICAgICAgICAgICAgLCBlYXQgPSBzYXQgKyBhICAgICAgICAgICAgIC8vIEVuZCBhbmdsZVxyXG4gICAgICAgICAgICAgICAgLCBzYSwgZWEgICAgICAgICAgICAgICAgICAgIC8vIFByZXZpb3VzIGFuZ2xlc1xyXG4gICAgICAgICAgICAgICAgLCByID0gMTtcclxuXHJcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcblxyXG4gICAgICAgICAgICBjLmxpbmVDYXAgPSB0aGlzLmxpbmVDYXA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm8uY3Vyc29yXHJcbiAgICAgICAgICAgICAgICAmJiAoc2F0ID0gZWF0IC0gdGhpcy5jdXJzb3JFeHQpXHJcbiAgICAgICAgICAgICAgICAmJiAoZWF0ID0gZWF0ICsgdGhpcy5jdXJzb3JFeHQpO1xyXG5cclxuICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLm8uYmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzLCB0aGlzLmVuZEFuZ2xlIC0gMC4wMDAwMSwgdGhpcy5zdGFydEFuZ2xlICsgMC4wMDAwMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGMuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vLmRpc3BsYXlQcmV2aW91cykge1xyXG4gICAgICAgICAgICAgICAgZWEgPSB0aGlzLnN0YXJ0QW5nbGUgKyB0aGlzLmFuZ2xlKHRoaXMudik7XHJcbiAgICAgICAgICAgICAgICBzYSA9IHRoaXMuc3RhcnRBbmdsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuby5jdXJzb3JcclxuICAgICAgICAgICAgICAgICAgICAmJiAoc2EgPSBlYSAtIHRoaXMuY3Vyc29yRXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICYmIChlYSA9IGVhICsgdGhpcy5jdXJzb3JFeHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMucENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzLCBzYSAtIDAuMDAwMDEsIGVhICsgMC4wMDAwMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIHIgPSAodGhpcy5jdiA9PSB0aGlzLnYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHIgPyB0aGlzLm8uZmdDb2xvciA6IHRoaXMuZmdDb2xvciA7XHJcbiAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cywgc2F0IC0gMC4wMDAwMSwgZWF0ICsgMC4wMDAwMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjLnN0cm9rZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbCh0aGlzLnYpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4uZGlhbCA9ICQuZm4ua25vYiA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgay5EaWFsKCk7XHJcbiAgICAgICAgICAgICAgICBkLm8gPSBvO1xyXG4gICAgICAgICAgICAgICAgZC4kID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGQucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLnBhcmVudCgpO1xyXG4gICAgfTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiIsIi8qXHJcbiAqIGpRdWVyeSBPbmUgUGFnZSBOYXYgUGx1Z2luXHJcbiAqIGh0dHA6Ly9naXRodWIuY29tL2RhdmlzdDExL2pRdWVyeS1PbmUtUGFnZS1OYXZcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEwIFRyZXZvciBEYXZpcyAoaHR0cDovL3RyZXZvcmRhdmlzLm5ldClcclxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXHJcbiAqIFVzZXMgdGhlIHNhbWUgbGljZW5zZSBhcyBqUXVlcnksIHNlZTpcclxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxyXG4gKlxyXG4gKiBAdmVyc2lvbiAzLjAuMFxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzYWdlOlxyXG4gKiAkKCcjbmF2Jykub25lUGFnZU5hdih7XHJcbiAqICAgY3VycmVudENsYXNzOiAnY3VycmVudCcsXHJcbiAqICAgY2hhbmdlSGFzaDogZmFsc2UsXHJcbiAqICAgc2Nyb2xsU3BlZWQ6IDc1MFxyXG4gKiB9KTtcclxuICovXHJcblxyXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCl7XHJcblxyXG5cdC8vIG91ciBwbHVnaW4gY29uc3RydWN0b3JcclxuXHR2YXIgT25lUGFnZU5hdiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpe1xyXG5cdFx0dGhpcy5lbGVtID0gZWxlbTtcclxuXHRcdHRoaXMuJGVsZW0gPSAkKGVsZW0pO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMubWV0YWRhdGEgPSB0aGlzLiRlbGVtLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHR0aGlzLiR3aW4gPSAkKHdpbmRvdyk7XHJcblx0XHR0aGlzLnNlY3Rpb25zID0ge307XHJcblx0XHR0aGlzLmRpZFNjcm9sbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy4kZG9jID0gJChkb2N1bWVudCk7XHJcblx0XHR0aGlzLmRvY0hlaWdodCA9IHRoaXMuJGRvYy5oZWlnaHQoKTtcclxuXHR9O1xyXG5cclxuXHQvLyB0aGUgcGx1Z2luIHByb3RvdHlwZVxyXG5cdE9uZVBhZ2VOYXYucHJvdG90eXBlID0ge1xyXG5cdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0bmF2SXRlbXM6ICdhJyxcclxuXHRcdFx0Y3VycmVudENsYXNzOiAnY3VycmVudCcsXHJcblx0XHRcdGNoYW5nZUhhc2g6IGZhbHNlLFxyXG5cdFx0XHRlYXNpbmc6ICdzd2luZycsXHJcblx0XHRcdGZpbHRlcjogJycsXHJcblx0XHRcdHNjcm9sbFNwZWVkOiA3NTAsXHJcblx0XHRcdHNjcm9sbFRocmVzaG9sZDogMC41LFxyXG5cdFx0XHRiZWdpbjogZmFsc2UsXHJcblx0XHRcdGVuZDogZmFsc2UsXHJcblx0XHRcdHNjcm9sbENoYW5nZTogZmFsc2VcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIEludHJvZHVjZSBkZWZhdWx0cyB0aGF0IGNhbiBiZSBleHRlbmRlZCBlaXRoZXJcclxuXHRcdFx0Ly8gZ2xvYmFsbHkgb3IgdXNpbmcgYW4gb2JqZWN0IGxpdGVyYWwuXHJcblx0XHRcdHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIHRoaXMub3B0aW9ucywgdGhpcy5tZXRhZGF0YSk7XHJcblxyXG5cdFx0XHR0aGlzLiRuYXYgPSB0aGlzLiRlbGVtLmZpbmQodGhpcy5jb25maWcubmF2SXRlbXMpO1xyXG5cclxuXHRcdFx0Ly9GaWx0ZXIgYW55IGxpbmtzIG91dCBvZiB0aGUgbmF2XHJcblx0XHRcdGlmKHRoaXMuY29uZmlnLmZpbHRlciAhPT0gJycpIHtcclxuXHRcdFx0XHR0aGlzLiRuYXYgPSB0aGlzLiRuYXYuZmlsdGVyKHRoaXMuY29uZmlnLmZpbHRlcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vSGFuZGxlIGNsaWNrcyBvbiB0aGUgbmF2XHJcblx0XHRcdHRoaXMuJG5hdi5vbignY2xpY2sub25lUGFnZU5hdicsICQucHJveHkodGhpcy5oYW5kbGVDbGljaywgdGhpcykpO1xyXG5cclxuXHRcdFx0Ly9HZXQgdGhlIHNlY3Rpb24gcG9zaXRpb25zXHJcblx0XHRcdHRoaXMuZ2V0UG9zaXRpb25zKCk7XHJcblxyXG5cdFx0XHQvL0hhbmRsZSBzY3JvbGwgY2hhbmdlc1xyXG5cdFx0XHR0aGlzLmJpbmRJbnRlcnZhbCgpO1xyXG5cclxuXHRcdFx0Ly9VcGRhdGUgdGhlIHBvc2l0aW9ucyBvbiByZXNpemUgdG9vXHJcblx0XHRcdHRoaXMuJHdpbi5vbigncmVzaXplLm9uZVBhZ2VOYXYnLCAkLnByb3h5KHRoaXMuZ2V0UG9zaXRpb25zLCB0aGlzKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRqdXN0TmF2OiBmdW5jdGlvbihzZWxmLCAkcGFyZW50KSB7XHJcblx0XHRcdHNlbGYuJGVsZW0uZmluZCgnLicgKyBzZWxmLmNvbmZpZy5jdXJyZW50Q2xhc3MpLnJlbW92ZUNsYXNzKHNlbGYuY29uZmlnLmN1cnJlbnRDbGFzcyk7XHJcblx0XHRcdCRwYXJlbnQuYWRkQ2xhc3Moc2VsZi5jb25maWcuY3VycmVudENsYXNzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YmluZEludGVydmFsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgZG9jSGVpZ2h0O1xyXG5cclxuXHRcdFx0c2VsZi4kd2luLm9uKCdzY3JvbGwub25lUGFnZU5hdicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNlbGYuZGlkU2Nyb2xsID0gdHJ1ZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZWxmLnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRkb2NIZWlnaHQgPSBzZWxmLiRkb2MuaGVpZ2h0KCk7XHJcblxyXG5cdFx0XHRcdC8vSWYgaXQgd2FzIHNjcm9sbGVkXHJcblx0XHRcdFx0aWYoc2VsZi5kaWRTY3JvbGwpIHtcclxuXHRcdFx0XHRcdHNlbGYuZGlkU2Nyb2xsID0gZmFsc2U7XHJcblx0XHRcdFx0XHRzZWxmLnNjcm9sbENoYW5nZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9JZiB0aGUgZG9jdW1lbnQgaGVpZ2h0IGNoYW5nZXNcclxuXHRcdFx0XHRpZihkb2NIZWlnaHQgIT09IHNlbGYuZG9jSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRzZWxmLmRvY0hlaWdodCA9IGRvY0hlaWdodDtcclxuXHRcdFx0XHRcdHNlbGYuZ2V0UG9zaXRpb25zKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRIYXNoOiBmdW5jdGlvbigkbGluaykge1xyXG5cdFx0XHRyZXR1cm4gJGxpbmsuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMV07XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFBvc2l0aW9uczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dmFyIGxpbmtIcmVmO1xyXG5cdFx0XHR2YXIgdG9wUG9zO1xyXG5cdFx0XHR2YXIgJHRhcmdldDtcclxuXHJcblx0XHRcdHNlbGYuJG5hdi5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxpbmtIcmVmID0gc2VsZi5nZXRIYXNoKCQodGhpcykpO1xyXG5cdFx0XHRcdCR0YXJnZXQgPSAkKCcjJyArIGxpbmtIcmVmKTtcclxuXHJcblx0XHRcdFx0aWYoJHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRvcFBvcyA9ICR0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRcdFx0c2VsZi5zZWN0aW9uc1tsaW5rSHJlZl0gPSBNYXRoLnJvdW5kKHRvcFBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0U2VjdGlvbjogZnVuY3Rpb24od2luZG93UG9zKSB7XHJcblx0XHRcdHZhciByZXR1cm5WYWx1ZSA9IG51bGw7XHJcblx0XHRcdHZhciB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuJHdpbi5oZWlnaHQoKSAqIHRoaXMuY29uZmlnLnNjcm9sbFRocmVzaG9sZCk7XHJcblxyXG5cdFx0XHRmb3IodmFyIHNlY3Rpb24gaW4gdGhpcy5zZWN0aW9ucykge1xyXG5cdFx0XHRcdGlmKCh0aGlzLnNlY3Rpb25zW3NlY3Rpb25dIC0gd2luZG93SGVpZ2h0KSA8IHdpbmRvd1Bvcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUgPSBzZWN0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJldHVyblZhbHVlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRoYW5kbGVDbGljazogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHZhciAkbGluayA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuXHRcdFx0dmFyICRwYXJlbnQgPSAkbGluay5wYXJlbnQoKTtcclxuXHRcdFx0dmFyIG5ld0xvYyA9ICcjJyArIHNlbGYuZ2V0SGFzaCgkbGluayk7XHJcblxyXG5cdFx0XHRpZighJHBhcmVudC5oYXNDbGFzcyhzZWxmLmNvbmZpZy5jdXJyZW50Q2xhc3MpKSB7XHJcblx0XHRcdFx0Ly9TdGFydCBjYWxsYmFja1xyXG5cdFx0XHRcdGlmKHNlbGYuY29uZmlnLmJlZ2luKSB7XHJcblx0XHRcdFx0XHRzZWxmLmNvbmZpZy5iZWdpbigpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9DaGFuZ2UgdGhlIGhpZ2hsaWdodGVkIG5hdiBpdGVtXHJcblx0XHRcdFx0c2VsZi5hZGp1c3ROYXYoc2VsZiwgJHBhcmVudCk7XHJcblxyXG5cdFx0XHRcdC8vUmVtb3ZpbmcgdGhlIGF1dG8tYWRqdXN0IG9uIHNjcm9sbFxyXG5cdFx0XHRcdHNlbGYudW5iaW5kSW50ZXJ2YWwoKTtcclxuXHJcblx0XHRcdFx0Ly9TY3JvbGwgdG8gdGhlIGNvcnJlY3QgcG9zaXRpb25cclxuXHRcdFx0XHRzZWxmLnNjcm9sbFRvKG5ld0xvYywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvL0RvIHdlIG5lZWQgdG8gY2hhbmdlIHRoZSBoYXNoP1xyXG5cdFx0XHRcdFx0aWYoc2VsZi5jb25maWcuY2hhbmdlSGFzaCkge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IG5ld0xvYztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0FkZCB0aGUgYXV0by1hZGp1c3Qgb24gc2Nyb2xsIGJhY2sgaW5cclxuXHRcdFx0XHRcdHNlbGYuYmluZEludGVydmFsKCk7XHJcblxyXG5cdFx0XHRcdFx0Ly9FbmQgY2FsbGJhY2tcclxuXHRcdFx0XHRcdGlmKHNlbGYuY29uZmlnLmVuZCkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmNvbmZpZy5lbmQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzY3JvbGxDaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgd2luZG93VG9wID0gdGhpcy4kd2luLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHR2YXIgcG9zaXRpb24gPSB0aGlzLmdldFNlY3Rpb24od2luZG93VG9wKTtcclxuXHRcdFx0dmFyICRwYXJlbnQ7XHJcblxyXG5cdFx0XHQvL0lmIHRoZSBwb3NpdGlvbiBpcyBzZXRcclxuXHRcdFx0aWYocG9zaXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHQkcGFyZW50ID0gdGhpcy4kZWxlbS5maW5kKCdhW2hyZWYkPVwiIycgKyBwb3NpdGlvbiArICdcIl0nKS5wYXJlbnQoKTtcclxuXHJcblx0XHRcdFx0Ly9JZiBpdCdzIG5vdCBhbHJlYWR5IHRoZSBjdXJyZW50IHNlY3Rpb25cclxuXHRcdFx0XHRpZighJHBhcmVudC5oYXNDbGFzcyh0aGlzLmNvbmZpZy5jdXJyZW50Q2xhc3MpKSB7XHJcblx0XHRcdFx0XHQvL0NoYW5nZSB0aGUgaGlnaGxpZ2h0ZWQgbmF2IGl0ZW1cclxuXHRcdFx0XHRcdHRoaXMuYWRqdXN0TmF2KHRoaXMsICRwYXJlbnQpO1xyXG5cclxuXHRcdFx0XHRcdC8vSWYgdGhlcmUgaXMgYSBzY3JvbGxDaGFuZ2UgY2FsbGJhY2tcclxuXHRcdFx0XHRcdGlmKHRoaXMuY29uZmlnLnNjcm9sbENoYW5nZSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbmZpZy5zY3JvbGxDaGFuZ2UoJHBhcmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHNjcm9sbFRvOiBmdW5jdGlvbih0YXJnZXQsIGNhbGxiYWNrKSB7XHJcblx0XHRcdHZhciBvZmZzZXQgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xyXG5cclxuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogb2Zmc2V0XHJcblx0XHRcdH0sIHRoaXMuY29uZmlnLnNjcm9sbFNwZWVkLCB0aGlzLmNvbmZpZy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dW5iaW5kSW50ZXJ2YWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudCk7XHJcblx0XHRcdHRoaXMuJHdpbi51bmJpbmQoJ3Njcm9sbC5vbmVQYWdlTmF2Jyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0T25lUGFnZU5hdi5kZWZhdWx0cyA9IE9uZVBhZ2VOYXYucHJvdG90eXBlLmRlZmF1bHRzO1xyXG5cclxuXHQkLmZuLm9uZVBhZ2VOYXYgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRuZXcgT25lUGFnZU5hdih0aGlzLCBvcHRpb25zKS5pbml0KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxufSkoIGpRdWVyeSwgd2luZG93ICwgZG9jdW1lbnQgKTsiLCIgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gLy8gVmVnYXMgLSBGdWxsc2NyZWVuIEJhY2tncm91bmRzIGFuZCBTbGlkZXNob3dzIHdpdGggalF1ZXJ5LlxyXG4gLy8gdjEuMy40IC0gcmVsZWFzZWQgMjAxMy0xMi0xNiAxMzoyOFxyXG4gLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gLy8gaHR0cDovL3ZlZ2FzLmpheXNhbHZhdC5jb20vXHJcbiAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAvLyBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxMyBKYXkgU2FsdmF0XHJcbiAvLyBodHRwOi8vamF5c2FsdmF0LmNvbS9cclxuIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGEsbil7dmFyIG89e2FsaWduOlwiY2VudGVyXCIsdmFsaWduOlwiY2VudGVyXCJ9O2lmKGUuZXh0ZW5kKG8sbiksMD09PWEuaGVpZ2h0KCkpcmV0dXJuIGEubG9hZChmdW5jdGlvbigpe3QoZSh0aGlzKSxuKX0pLHZvaWQgMDt2YXIgaSxzLGcsZD1yKCksbD1kLndpZHRoLHU9ZC5oZWlnaHQsYz1hLndpZHRoKCksdj1hLmhlaWdodCgpLHA9dS9sLGY9di9jO3A+Zj8oaT11L2Yscz11KTooaT1sLHM9bCpmKSxnPXt3aWR0aDppK1wicHhcIixoZWlnaHQ6cytcInB4XCIsdG9wOlwiYXV0b1wiLGJvdHRvbTpcImF1dG9cIixsZWZ0OlwiYXV0b1wiLHJpZ2h0OlwiYXV0b1wifSxpc05hTihwYXJzZUludChvLnZhbGlnbiwxMCkpP1widG9wXCI9PW8udmFsaWduP2cudG9wPTA6XCJib3R0b21cIj09by52YWxpZ24/Zy5ib3R0b209MDpnLnRvcD0odS1zKS8yOmcudG9wPTAtKHMtdSkvMTAwKnBhcnNlSW50KG8udmFsaWduLDEwKStcInB4XCIsaXNOYU4ocGFyc2VJbnQoby5hbGlnbiwxMCkpP1wibGVmdFwiPT1vLmFsaWduP2cubGVmdD0wOlwicmlnaHRcIj09by5hbGlnbj9nLnJpZ2h0PTA6Zy5sZWZ0PShsLWkpLzI6Zy5sZWZ0PTAtKGktbCkvMTAwKnBhcnNlSW50KG8uYWxpZ24sMTApK1wicHhcIixhLmNzcyhnKX1mdW5jdGlvbiBhKCl7ZC5wcmVwZW5kVG8oXCJib2R5XCIpLmZhZGVJbigpfWZ1bmN0aW9uIG4oKXtkLmZhZGVPdXQoXCJmYXN0XCIsZnVuY3Rpb24oKXtlKHRoaXMpLnJlbW92ZSgpfSl9ZnVuY3Rpb24gbygpe3JldHVybiBlKFwiYm9keVwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIik/ZShcImJvZHlcIikuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIpLnJlcGxhY2UoL3VybFxcKFwiPyguKj8pXCI/XFwpL2ksXCIkMVwiKTp2b2lkIDB9ZnVuY3Rpb24gcigpe3ZhciBlPXdpbmRvdyx0PVwiaW5uZXJcIjtyZXR1cm5cImlubmVyV2lkdGhcImluIHdpbmRvd3x8KGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHxkb2N1bWVudC5ib2R5LHQ9XCJjbGllbnRcIikse3dpZHRoOmVbdCtcIldpZHRoXCJdLGhlaWdodDplW3QrXCJIZWlnaHRcIl19fXZhciBpLHM9ZShcIjxpbWcgLz5cIikuYWRkQ2xhc3MoXCJ2ZWdhcy1iYWNrZ3JvdW5kXCIpLGc9ZShcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ2ZWdhcy1vdmVybGF5XCIpLGQ9ZShcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ2ZWdhcy1sb2FkaW5nXCIpLGw9ZSgpLHU9bnVsbCxjPVtdLHY9MCxwPTVlMyxmPWZ1bmN0aW9uKCl7fSxoPXtpbml0OmZ1bmN0aW9uKHIpe3ZhciBpPXtzcmM6bygpLGFsaWduOlwiY2VudGVyXCIsdmFsaWduOlwiY2VudGVyXCIsZmFkZTowLGxvYWRpbmc6ITAsbG9hZDpmdW5jdGlvbigpe30sY29tcGxldGU6ZnVuY3Rpb24oKXt9fTtlLmV4dGVuZChpLGUudmVnYXMuZGVmYXVsdHMuYmFja2dyb3VuZCxyKSxpLmxvYWRpbmcmJmEoKTt2YXIgZz1zLmNsb25lKCk7cmV0dXJuIGcuY3NzKHtwb3NpdGlvbjpcImZpeGVkXCIsbGVmdDpcIjBweFwiLHRvcDpcIjBweFwifSkuYmluZChcImxvYWRcIixmdW5jdGlvbigpe2chPWwmJihlKHdpbmRvdykuYmluZChcImxvYWQgcmVzaXplLnZlZ2FzXCIsZnVuY3Rpb24oKXt0KGcsaSl9KSxsLmlzKFwiaW1nXCIpPyhsLnN0b3AoKSxnLmhpZGUoKS5pbnNlcnRBZnRlcihsKS5mYWRlSW4oaS5mYWRlLGZ1bmN0aW9uKCl7ZShcIi52ZWdhcy1iYWNrZ3JvdW5kXCIpLm5vdCh0aGlzKS5yZW1vdmUoKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNjb21wbGV0ZVwiLFt0aGlzLHYtMV0pLGkuY29tcGxldGUuYXBwbHkoZyxbdi0xXSl9KSk6Zy5oaWRlKCkucHJlcGVuZFRvKFwiYm9keVwiKS5mYWRlSW4oaS5mYWRlLGZ1bmN0aW9uKCl7ZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzY29tcGxldGVcIixbdGhpcyx2LTFdKSxpLmNvbXBsZXRlLmFwcGx5KHRoaXMsW3YtMV0pfSksbD1nLHQobCxpKSxpLmxvYWRpbmcmJm4oKSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNsb2FkXCIsW2wuZ2V0KDApLHYtMV0pLGkubG9hZC5hcHBseShsLmdldCgwKSxbdi0xXSksdiYmKGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc3dhbGtcIixbbC5nZXQoMCksdi0xXSksaS53YWxrLmFwcGx5KGwuZ2V0KDApLFt2LTFdKSkpfSkuYXR0cihcInNyY1wiLGkuc3JjKSxlLnZlZ2FzfSxkZXN0cm95OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImJhY2tncm91bmRcIiE9dHx8KGUoXCIudmVnYXMtYmFja2dyb3VuZCwgLnZlZ2FzLWxvYWRpbmdcIikucmVtb3ZlKCksZSh3aW5kb3cpLnVuYmluZChcIioudmVnYXNcIiksbD1lKCkpLHQmJlwib3ZlcmxheVwiIT10fHxlKFwiLnZlZ2FzLW92ZXJsYXlcIikucmVtb3ZlKCksY2xlYXJJbnRlcnZhbChpKSxlLnZlZ2FzfSxvdmVybGF5OmZ1bmN0aW9uKHQpe3ZhciBhPXtzcmM6bnVsbCxvcGFjaXR5Om51bGx9O3JldHVybiBlLmV4dGVuZChhLGUudmVnYXMuZGVmYXVsdHMub3ZlcmxheSx0KSxnLnJlbW92ZSgpLGcuY3NzKHttYXJnaW46XCIwXCIscGFkZGluZzpcIjBcIixwb3NpdGlvbjpcImZpeGVkXCIsbGVmdDpcIjBweFwiLHRvcDpcIjBweFwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGEuc3JjPT09ITEmJmcuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIsXCJub25lXCIpLGEuc3JjJiZnLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLFwidXJsKFwiK2Euc3JjK1wiKVwiKSxhLm9wYWNpdHkmJmcuY3NzKFwib3BhY2l0eVwiLGEub3BhY2l0eSksZy5wcmVwZW5kVG8oXCJib2R5XCIpLGUudmVnYXN9LHNsaWRlc2hvdzpmdW5jdGlvbih0LGEpe3ZhciBuPXtzdGVwOnYsZGVsYXk6cCxwcmVsb2FkOiExLGxvYWRpbmc6ITAsYmFja2dyb3VuZHM6Yyx3YWxrOmZ9O2lmKGUuZXh0ZW5kKG4sZS52ZWdhcy5kZWZhdWx0cy5zbGlkZXNob3csdCksbi5iYWNrZ3JvdW5kcyE9YyYmKHQuc3RlcHx8KG4uc3RlcD0wKSx0LndhbGt8fChuLndhbGs9ZnVuY3Rpb24oKXt9KSxuLnByZWxvYWQmJmUudmVnYXMoXCJwcmVsb2FkXCIsbi5iYWNrZ3JvdW5kcykpLGM9bi5iYWNrZ3JvdW5kcyxwPW4uZGVsYXksdj1uLnN0ZXAsZj1uLndhbGssY2xlYXJJbnRlcnZhbChpKSwhYy5sZW5ndGgpcmV0dXJuIGUudmVnYXM7dmFyIG89ZnVuY3Rpb24oKXswPnYmJih2PWMubGVuZ3RoLTEpLCh2Pj1jLmxlbmd0aHx8IWNbdi0xXSkmJih2PTApO3ZhciB0PWNbdisrXTt0LndhbGs9bi53YWxrLHQubG9hZGluZz1uLmxvYWRpbmcsdC5mYWRlPT09dm9pZCAwJiYodC5mYWRlPW4uZmFkZSksdC5mYWRlPm4uZGVsYXkmJih0LmZhZGU9bi5kZWxheSksZS52ZWdhcyh0KX07cmV0dXJuIG8oKSxhfHwodT0hMSxlKFwiYm9keVwiKS50cmlnZ2VyKFwidmVnYXNzdGFydFwiLFtsLmdldCgwKSx2LTFdKSksdXx8KGk9c2V0SW50ZXJ2YWwobyxuLmRlbGF5KSksZS52ZWdhc30sbmV4dDpmdW5jdGlvbigpe3ZhciB0PXY7cmV0dXJuIHYmJihlLnZlZ2FzKFwic2xpZGVzaG93XCIse3N0ZXA6dn0sITApLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc25leHRcIixbbC5nZXQoMCksdi0xLHQtMV0pKSxlLnZlZ2FzfSxwcmV2aW91czpmdW5jdGlvbigpe3ZhciB0PXY7cmV0dXJuIHYmJihlLnZlZ2FzKFwic2xpZGVzaG93XCIse3N0ZXA6di0yfSwhMCksZShcImJvZHlcIikudHJpZ2dlcihcInZlZ2FzcHJldmlvdXNcIixbbC5nZXQoMCksdi0xLHQtMV0pKSxlLnZlZ2FzfSxqdW1wOmZ1bmN0aW9uKHQpe3ZhciBhPXY7cmV0dXJuIHYmJihlLnZlZ2FzKFwic2xpZGVzaG93XCIse3N0ZXA6dH0sITApLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc2p1bXBcIixbbC5nZXQoMCksdi0xLGEtMV0pKSxlLnZlZ2FzfSxzdG9wOmZ1bmN0aW9uKCl7dmFyIHQ9djtyZXR1cm4gdj0wLHU9bnVsbCxjbGVhckludGVydmFsKGkpLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc3N0b3BcIixbbC5nZXQoMCksdC0xXSksZS52ZWdhc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4gdT0hMCxjbGVhckludGVydmFsKGkpLGUoXCJib2R5XCIpLnRyaWdnZXIoXCJ2ZWdhc3BhdXNlXCIsW2wuZ2V0KDApLHYtMV0pLGUudmVnYXN9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWV8fFwiYmFja2dyb3VuZFwiPT1lP2wuZ2V0KDApOlwib3ZlcmxheVwiPT1lP2cuZ2V0KDApOlwic3RlcFwiPT1lP3YtMTpcInBhdXNlZFwiPT1lP3U6dm9pZCAwfSxwcmVsb2FkOmZ1bmN0aW9uKHQpe3ZhciBhPVtdO2Zvcih2YXIgbiBpbiB0KWlmKHRbbl0uc3JjKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO28uc3JjPXRbbl0uc3JjLGEucHVzaChvKX1yZXR1cm4gZS52ZWdhc319O2UudmVnYXM9ZnVuY3Rpb24odCl7cmV0dXJuIGhbdF0/aFt0XS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIHQmJnQ/KGUuZXJyb3IoXCJNZXRob2QgXCIrdCtcIiBkb2VzIG5vdCBleGlzdFwiKSx2b2lkIDApOmguaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUudmVnYXMuZGVmYXVsdHM9e2JhY2tncm91bmQ6e30sc2xpZGVzaG93Ont9LG92ZXJsYXk6e319fSkoalF1ZXJ5KTsiLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBtaXNjLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiQoJ3VsLmRyb3Bkb3duLW1lbnUnKS5maW5kKCdsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIHJlbW92ZSB0aGUgJ29wZW4nIGNsYXNzIG9uIHRoZSBwYXJlbnQgZWxlbWVudCBcclxuICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLW1lbnUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tbWVudScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcbiovXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gTWlzY2VsbGFuZW91cyBDYWxlbmRhciBmdW5jdGlvbnNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vJChmdW5jdGlvbigpIHtcclxuLy8gICAgJCggXCIjM01vbkNhbFwiICkuZGF0ZXBpY2tlcih7XHJcbi8vICAgICAgICBudW1iZXJPZk1vbnRoczogMixcclxuLy8gICAgICAgIHNob3dCdXR0b25QYW5lbDogdHJ1ZVxyXG4vLyAgICB9KTtcclxuLy99KTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDYWxlbmRhckhUTUwobW8sIHlyLCBzaG93VG9kYXkpe1xyXG4gICAgLy8gbW8gPSB6ZXJvLWJhc2VkIG1vbnRoIG51bWJlclxyXG4gICAgLy8geXIgPSA0IGRpZ2l0IHllYXIgWVlZWVxyXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG1vbnRoIG5hbWVzXHJcbiAgICB2YXIgTSA9IG5ldyBBcnJheShcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiKTtcclxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSB3aXRoIHRoZSBkYXlzIG9mIHRoZSB3ZWVrXHJcbiAgICB2YXIgRCA9IG5ldyBBcnJheShcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiKTtcclxuICAgIC8vIFRoZSBmaXJzdCBvZiB0aGUgbW9udGhcclxuICAgIHZhciBkYXlPbmUgPSBuZXcgRGF0ZShNW21vXStcIiAxLFwiK3lyKTtcclxuICAgIC8vIERldGVybWluZSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHVwb24gd2hpY2ggdGhlIDFzdCBvZiB0aGUgbW9udGggZmFsbHNcclxuICAgIHZhciBkeSA9IGRheU9uZS5nZXREYXkoKTtcclxuICAgIHlyID0gZXZhbCh5cik7XHJcbiAgICBcclxuICAgIC8vIERheXMgaW4gZWFjaCBtb250aFxyXG4gICAgdmFyIGQgPSBcIjMxMjgzMTMwMzEzMDMxMzEzMDMxMzAzMVwiO1xyXG4gICAgLy8gSXMgdGhpcyBsZWFwIHllYXI/XHJcbiAgICBpZiAoeXIgLyA0ID09PSBNYXRoLmZsb29yKHlyIC8gNCkpIHtcclxuICAgICAgICBkID0gZC5zdWJzdHJpbmcoMCwgMikgKyBcIjI5XCIgKyBkLnN1YnN0cmluZyg0LCBkLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGluIHRoZSBkIHN0cmluZyBmb3IgdGhpcyBtb250aFxyXG4gICAgdmFyIHBvcyA9IChtbyAqIDIpO1xyXG4gICAgLy8gR3JhYiAyIGNoYXJhY3RlciBwb3NpdGlvbnMgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIG1vbnRoIChsYXN0IGRheSlcclxuICAgIHZhciBsZCA9IGV2YWwoZC5zdWJzdHJpbmcocG9zLCBwb3MgKyAyKSk7XHJcbiAgICB2YXIgdGRheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xyXG4gICAgdmFyIGRvdyA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XHJcbiAgICBcclxuICAgIC8vIFN0YXJ0IG91dHB1dHRpbmcgdGhpcyBtb250aCdzIGNhbGVuZGFyXHJcbiAgICB2YXIgaHRtbFRleHQgPSAgJzxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNFwiPic7XHJcbiAgICBodG1sVGV4dCArPSAnPHRhYmxlIGNsYXNzPVwiY2FsVGFibGVcIj48dHI+J1xyXG4gICAgLy8gRGlzcGxheSB0aGUgbW9udGggYW5kIHllYXJcclxuICAgIGh0bWxUZXh0ICs9ICc8dGggY2xhc3M9XCJtb25IZHInXHJcbiAgICBpZihzaG93VG9kYXkpe2h0bWxUZXh0ICs9ICcgaGlMaXRlJ31cclxuICAgIGh0bWxUZXh0ICs9ICdcIiBjb2xzcGFuPTcgY2VudGVyPicgKyBNW21vXSArIFwiIFwiICsgeXIgKyBcIjwvdGg+PC90cj5cIjtcclxuICAgIC8vIERpc3BsYXkgdGhlIGRheXMgb2YgdGhlIHdlZWtcclxuICAgIGh0bWxUZXh0ICs9ICc8dHI+JztcclxuICAgIGZvciAodmFyIGkgPSAwO2kgPCA3O2kgKyspIHtcclxuICAgICAgICBpZigoaSA9PSBkb3cpICYmIChzaG93VG9kYXkpKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkIGNsYXNzPVwid2tkYXlIZHIgaGlMaXRlXCI+JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQgY2xhc3M9XCJ3a2RheUhkclwiPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbFRleHQgKz0gRFtpXSArICc8L3RkPic7ICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSBkYXlzIG9mIHRoZSB3ZWVrXHJcbiAgICB9XHJcbiAgICBodG1sVGV4dCArPSAnPC90cj4nO1xyXG4gICAgdmFyIGN0ciA9IDA7XHJcbiAgICAvLyBEaXNwbGF5IHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9yIGEgYmxhbmsgaWYgdGhlIDFzdCBmYWxscyBpbiBtaWQtd2Vla1xyXG4gICAgaHRtbFRleHQgKz0gJzx0ciBjbGFzcz1cImNhbERheVJvd1wiPic7XHJcbiAgICAvLyBEaXNwbGF5IHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9yIGEgYmxhbmsgc3BhY2VcclxuICAgIC8vIGZvciB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgbW9udGhcclxuICAgIGZvciAoaSA9IDA7aSA8IDc7IGkrKyl7XHJcbiAgICAgICAgaWYgKGkgPCBkeSkge1xyXG4gICAgICAgICAgICBodG1sVGV4dCArPSBcIjx0ZD4gPC90ZD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN0cisrO1xyXG4gICAgICAgICAgICBpZigoY3RyID09IHRkYXkpICYmIChzaG93VG9kYXkpKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkIGNsYXNzPVwiaGlMaXRlXCI+JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQ+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sVGV4dCArPSBjdHIgKyBcIjwvdGQ+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaHRtbFRleHQgKz0gJzwvdHI+JztcclxuICAgIC8vIERpc3BsYXkgdGhlIGRheSBvZiB0aGUgbW9udGggZm9yIHRoZSByZXN0IG9mIHRoZSBtb250aFxyXG4gICAgLy8gRGlzcGxheSBhIGJsYW5rIGFmdGVyIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGhcclxuICAgIGh0bWxUZXh0ICs9ICc8dHIgY2xhc3M9XCJjYWxEYXlSb3dcIj4nO1xyXG4gICAgd2hpbGUgKGN0ciA8PSBsZCkge1xyXG4gICAgICAgIGZvciAoaSA9IDA7aSA8IDc7IGkrKyl7XHJcbiAgICAgICAgICAgIGN0cisrO1xyXG4gICAgICAgICAgICBpZiAoY3RyID4gbGQpe1xyXG4gICAgICAgICAgICAgICAgaHRtbFRleHQgKz0gJzx0ZD4gPC90ZD4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoKGN0ciA9PSB0ZGF5KSAmJiAoc2hvd1RvZGF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUZXh0ICs9ICc8dGQgY2xhc3M9XCJoaUxpdGVcIj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sVGV4dCArPSAnPHRkPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBodG1sVGV4dCArPSBjdHIgKyAnPC90ZD4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWxUZXh0ICs9ICc8L3RyPjx0ciBjbGFzcz1cImNhbERheVJvd1wiPic7XHJcbiAgICB9XHJcbiAgICBodG1sVGV4dCArPSAnPC90cj48L3RhYmxlPjxiciBjbGFzcz1cImNsZWFyXCIgLz48L2Rpdj4nO1xyXG4gICAgcmV0dXJuIGh0bWxUZXh0O1xyXG59XHJcblxyXG4gXHJcbmZ1bmN0aW9uIHNob3dDYWxlbmRlcnMoKSB7XHJcblxyXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kYXkncyBkYXRlXHJcbiAgICB2YXIgdGhpc01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBtb250aCAtIHplcm8tYmFzZWRcclxuICAgIHZhciB0aGlzWWVhciA9IHRvZGF5LmdldFllYXIoKSArIDE5MDA7ICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHllYXJcclxuICAgIHZhciBsYXN0TW9udGggPSAodGhpc01vbnRoPT09MD8xMTp0aGlzTW9udGgtMSk7ICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsYXN0IG1vbnRoXHJcbiAgICB2YXIgbGFzdFllYXIgPSAodGhpc01vbnRoPT09MD90aGlzWWVhci0xOnRoaXNZZWFyKTsgICAgICAgICAvLyBjYWxjdWxhdGUgbGFzdCBtb250aCdzIHllYXJcclxuICAgIHZhciBuZXh0WWVhciA9ICh0aGlzTW9udGg9PT0xMT90aGlzWWVhcisxOnRoaXNZZWFyKTsgICAgICAgIC8vIG5leHQgbW9udGgncyB5ZWFyXHJcbiAgICB2YXIgbmV4dE1vbnRoID0gKHRoaXNNb250aD09PTExPzA6dGhpc01vbnRoKzEpOyAgICAgICAgICAgICAvLyBuZXh0IG1vbnRoXHJcbiAgICB2YXIgaHRtbE9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsQm94XCIpO1xyXG5cclxuICAgIGlmKCBodG1sT2JqIClcclxuICAgIHtcclxuICAgICAgICB2YXIgaHRtbFRleHQ9JzxkaXYgY2xhc3M9XCJyb3dcIj4nO1xyXG5cclxuICAgICAgICBodG1sVGV4dCA9IGh0bWxUZXh0ICsgZ2V0Q2FsZW5kYXJIVE1MKGxhc3RNb250aCwgbGFzdFllYXIsIGZhbHNlKTsgICAgLy8gU2VuZCBsYXN0IG1vbnRoIHRvIHNjcmVlblxyXG4gICAgICAgIGh0bWxUZXh0ID0gaHRtbFRleHQgKyBnZXRDYWxlbmRhckhUTUwodGhpc01vbnRoLCB0aGlzWWVhciwgdHJ1ZSk7ICAgICAvLyBTZW5kIHRoaXMgbW9udGggdG8gc2NyZWVuXHJcbiAgICAgICAgaHRtbFRleHQgPSBodG1sVGV4dCArIGdldENhbGVuZGFySFRNTChuZXh0TW9udGgsIG5leHRZZWFyLCBmYWxzZSk7ICAgIC8vIFNlbmQgbmV4dCBtb250aCB0byBzY3JlZW5cclxuXHJcbiAgICAgICAgaHRtbE9iai5pbm5lckhUTUwgPSBodG1sVGV4dCArICc8L2Rpdj4nO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR2F0aGVyIFNjcmVlbiBTaXplIEluZm9ybWF0aW9uXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gZ2ViSUQoaWQpeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyB9XHJcbmZ1bmN0aW9uIGdlYlROKHRhZ05hbWUpeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSk7IH1cclxuZnVuY3Rpb24gc2V0U3R5bGVUb1RhZ3ModGFnTmFtZSwgc3R5bGVTdHJpbmcpe1xyXG4gICAgdmFyIHRhZ3MgPSBnZWJUTih0YWdOYW1lKTtcclxuICAgIGZvciggdmFyIGkgPSAwOyBpPHRhZ3MubGVuZ3RoOyBpKysgKSB0YWdzW2ldLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZVN0cmluZyk7XHJcbn1cclxuZnVuY3Rpb24gdGVzdFNpemVzKHBhcmVudE9iail7XHJcbiAgICBpZiggcGFyZW50T2JqID09IG51bGwpeyBwYXJlbnRPYmogPSBcImJvZHlcIjsgfVxyXG4gICAgXHJcbiAgICBnZWJJRCggJ3NjcmVlbi5XaWR0aCcgKS5pbm5lckhUTUwgPSBzY3JlZW4ud2lkdGg7XHJcbiAgICBnZWJJRCggJ3NjcmVlbi5IZWlnaHQnICkuaW5uZXJIVE1MID0gc2NyZWVuLmhlaWdodDtcclxuXHJcbiAgICBnZWJJRCggJ3dpbmRvdy5XaWR0aCcgKS5pbm5lckhUTUwgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGdlYklEKCAnd2luZG93LkhlaWdodCcgKS5pbm5lckhUTUwgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgZ2ViSUQoICdkb2N1bWVudEVsZW1lbnQuV2lkdGgnICkuaW5uZXJIVE1MID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgZ2ViSUQoICdkb2N1bWVudEVsZW1lbnQuSGVpZ2h0JyApLmlubmVySFRNTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgZ2ViSUQoICdib2R5LldpZHRoJyApLmlubmVySFRNTCA9IGdlYlROKHBhcmVudE9iailbMF0uY2xpZW50V2lkdGg7XHJcbiAgICBnZWJJRCggJ2JvZHkuSGVpZ2h0JyApLmlubmVySFRNTCA9IGdlYlROKHBhcmVudE9iailbMF0uY2xpZW50SGVpZ2h0OyAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaXplcyhwYXJlbnRPYmopIHtcclxuICAgIGlmKCBwYXJlbnRPYmogPT09IG51bGwpeyBwYXJlbnRPYmogPSBcImJvZHlcIjsgfVxyXG4gICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIHRhYmxlLmlubmVySFRNTCA9IFxyXG4gICAgICAgXCI8dHI+PHRoPlNPVVJDRTwvdGg+PHRoPldJRFRIPC90aD48dGg+eDwvdGg+PHRoPkhFSUdIVDwvdGg+PC90cj5cIlxyXG4gICAgICArXCI8dHI+PHRkPnNjcmVlbjwvdGQ+PHRkIGlkPSdzY3JlZW4uV2lkdGgnIC8+PHRkPng8L3RkPjx0ZCBpZD0nc2NyZWVuLkhlaWdodCcgLz48L3RyPlwiXHJcbiAgICAgICtcIjx0cj48dGQ+d2luZG93PC90ZD48dGQgaWQ9J3dpbmRvdy5XaWR0aCcgLz48dGQ+eDwvdGQ+PHRkIGlkPSd3aW5kb3cuSGVpZ2h0JyAvPjwvdHI+XCJcclxuICAgICAgK1wiPHRyPjx0ZD5kb2N1bWVudDxicj4uZG9jdW1lbnRFbGVtZW50PC90ZD48dGQgaWQ9J2RvY3VtZW50RWxlbWVudC5XaWR0aCcgLz48dGQ+eDwvdGQ+PHRkIGlkPSdkb2N1bWVudEVsZW1lbnQuSGVpZ2h0JyAvPjwvdHI+XCJcclxuICAgICAgK1wiPHRyPjx0ZD5kb2N1bWVudC5ib2R5PC90ZD48dGQgaWQ9J2JvZHkuV2lkdGgnIC8+PHRkPng8L3RkPjx0ZCBpZD0nYm9keS5IZWlnaHQnIC8+PC90cj5cIlxyXG4gICAgO1xyXG5cclxuICAgIGdlYlROKHBhcmVudE9iailbMF0uYXBwZW5kQ2hpbGQoIHRhYmxlICk7XHJcblxyXG4gICAgc2V0U3R5bGVUb1RhZ3MoXCJ0YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgIFwiYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDsgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgICtcImxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7IHRvcDogOTBweCAhaW1wb3J0YW50OyBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICArXCJ3aWR0aDogMjAwcHggIWltcG9ydGFudDsgZm9udC1zaXplOjEwcHg7ICFpbXBvcnRhbnRcIlxyXG4gICAgICAgICAgICAgICAgK1wid2hpdGUtc3BhY2U6IHByZSAhaW1wb3J0YW50OyBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgICtcInotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1wiXHJcbiAgICApO1xyXG4gICAgc2V0U3R5bGVUb1RhZ3MoXCJ0ZFwiLCBcImNvbG9yOiBibGFjayAhaW1wb3J0YW50OyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XCIpO1xyXG4gICAgc2V0U3R5bGVUb1RhZ3MoXCJ0aFwiLCBcImNvbG9yOiBibGFjayAhaW1wb3J0YW50OyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XCIpO1xyXG5cclxuICAgIHRhYmxlLnN0eWxlLnNldFByb3BlcnR5KCAnbWFyZ2luLWxlZnQnLCAnLScrKCB0YWJsZS5jbGllbnRXaWR0aCAvIDIgKSsncHgnICk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoIHRlc3RTaXplcywgMjAwICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRCeUtleShhcnJheSwga2V5KSB7XHJcbiAgICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgdmFyIHggPSBhW2tleV07IHZhciB5ID0gYltrZXldO1xyXG4gICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBtdWx0T2JqQXJyYXkyQXJyYXkobXVsdE9iakFycmF5KXtcclxuICAgICBjb25zb2xlLmRlYnVnKFwibXVsdE9iakFycmF5MkFycmF5XCIpO1xyXG4gICAgY29uc29sZS5kZWJ1ZyhtdWx0T2JqQXJyYXkpO1xyXG4gICAgdmFyIGFsbEFycmF5ID0gW107XHJcbiAgICBmb3IodmFyIGk9MDsgaTxtdWx0T2JqQXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBqPTA7IGo8bXVsdE9iakFycmF5W2ldLmxlbmd0aDtqKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbCA9IGFsbEFycmF5LnB1c2goIG11bHRPYmpBcnJheVtpXVtqXSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gSlNPTkRhdGVUb0RhdGVPYmogKGpkKSB7IC8vIGpkID0gSlNPTiBEYXRlIGZvcm1hdCBpZS4gJzIwMTMtMDMtMDhUMTQ6MzQ6MDA6MDAwWidcclxuICAgIGlmKCAoamQubGVuZ3RoICE9IDI0KSB8fCAgKGpkLnN1YnN0cig0LDEpICE9ICctJykgfHwgIChqZC5zdWJzdHIoNywxKSAhPSAnLScpIHx8ICAoamQuc3Vic3RyKDEwLDEpICE9ICdUJykgfHwgIChqZC5zdWJzdHIoMTMsMSkgIT0gJzonKSB8fCAgKGpkLnN1YnN0cigxNiwxKSAhPSAnOicpIHx8ICAoamQuc3Vic3RyKDE5LDEpICE9ICc6JykgfHwgIChqZC5zdWJzdHIoMjMsMSkgIT0gJ1onKSApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0RnVsbFllYXIoamQuc3Vic3RyKDAsNCksIGpkLnN1YnN0cig1LDIpLTEsIGpkLnN1YnN0cig4LDIpKTtcclxuICAgIGQuc2V0SG91cnMoamQuc3Vic3RyKDExLDIpKTtcclxuICAgIGQuc2V0TWludXRlcyhqZC5zdWJzdHIoMTQsMikpO1xyXG4gICAgZC5zZXRTZWNvbmRzKGpkLnN1YnN0cigxNywyKSk7XHJcbiAgICBkLnNldE1pbGxpc2Vjb25kcyhqZC5zdWJzdHIoMjAsMykpO1xyXG4gICAgcmV0dXJuIGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRJbWFnZURhdGEoaW1nSUQpIHtcclxuICAgIGFsZXJ0KFwiSSdtIHNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSB0aGUgYXV0aG9yaXR5IHRvIGVkaXQgaW1hZ2UgSUQjXCIgKyBpbWdJRCArIFwiLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlSW1hZ2UoaW1nSUQpe1xyXG4gICAgYWxlcnQoXCJJJ20gc29ycnksIHlvdSBkb24ndCBoYXZlIHRoZSBhdXRob3JpdHkgdG8gZGVsZXRlIGltYWdlIElEI1wiICsgaW1nSUQgKyBcIi5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVubGFyZ2VUb2dnbGUoaW1nSUQpe1xyXG4gICAgYWxlcnQoXCJFbmxhcmdlIGltYWdlIElEI1wiICsgaW1nSUQgKyBcIi5cIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBtaXNjLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCJldmFsKGZ1bmN0aW9uKHAsYSxjLGssZSxyKXtlPWZ1bmN0aW9uKGMpe3JldHVybihjPGE/Jyc6ZShwYXJzZUludChjL2EpKSkrKChjPWMlYSk+MzU/U3RyaW5nLmZyb21DaGFyQ29kZShjKzI5KTpjLnRvU3RyaW5nKDM2KSl9O2lmKCEnJy5yZXBsYWNlKC9eLyxTdHJpbmcpKXt3aGlsZShjLS0pcltlKGMpXT1rW2NdfHxlKGMpO2s9W2Z1bmN0aW9uKGUpe3JldHVybiByW2VdfV07ZT1mdW5jdGlvbigpe3JldHVybidcXFxcdysnfTtjPTF9O3doaWxlKGMtLSlpZihrW2NdKXA9cC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFxiJytlKGMpKydcXFxcYicsJ2cnKSxrW2NdKTtyZXR1cm4gcH0oJzcoQSAzYy4zcSE9PVwiOVwiKXszYy4zcT05KGUpezkgdCgpe310LjVTPWU7cCA1UiB0fX0oOShlLHQsbil7aCByPXsxTjo5KHQsbil7aCByPWM7ci4kaz1lKG4pO3IuNj1lLjRNKHt9LGUuMzcuMkIuNixyLiRrLnYoKSx0KTtyLjJBPXQ7ci40TCgpfSw0TDo5KCl7OSByKGUpe2ggbixyPVwiXCI7NyhBIHQuNi4zMz09PVwiOVwiKXt0LjYuMzMuUihjLFtlXSl9bHsxQShuIDM4IGUuZCl7NyhlLmQuNU0obikpe3IrPWUuZFtuXS4xS319dC4kay4yeShyKX10LjN0KCl9aCB0PWMsbjs3KEEgdC42LjJIPT09XCI5XCIpe3QuNi4ySC5SKGMsW3QuJGtdKX03KEEgdC42LjJPPT09XCIyWVwiKXtuPXQuNi4yTztlLjVLKG4scil9bHt0LjN0KCl9fSwzdDo5KCl7aCBlPWM7ZS4kay52KFwiZC00SVwiLGUuJGsuMngoXCIyd1wiKSkudihcImQtNEZcIixlLiRrLjJ4KFwiSFwiKSk7ZS4kay56KHsydTowfSk7ZS4ydD1lLjYucTtlLjRFKCk7ZS41dj0wO2UuMVg9MTQ7ZS4yMygpfSwyMzo5KCl7aCBlPWM7NyhlLiRrLjI1KCkuTj09PTApe3AgYn1lLjFNKCk7ZS40QygpO2UuJFM9ZS4kay4yNSgpO2UuRT1lLiRTLk47ZS40QigpO2UuJEc9ZS4kay4xNyhcIi5kLTFLXCIpO2UuJEs9ZS4kay4xNyhcIi5kLTFwXCIpO2UuM3U9XCJVXCI7ZS4xMz0wO2UuMjY9WzBdO2UubT0wO2UuNEEoKTtlLjR6KCl9LDR6OjkoKXtoIGU9YztlLjJWKCk7ZS4yVygpO2UuNHQoKTtlLjMwKCk7ZS40cigpO2UuNHEoKTtlLjJwKCk7ZS40bygpOzcoZS42LjJvIT09Yil7ZS40bihlLjYuMm8pfTcoZS42Lk89PT1qKXtlLjYuTz00UX1lLjE5KCk7ZS4kay4xNyhcIi5kLTFwXCIpLnooXCI0aVwiLFwiNGhcIik7NyghZS4kay4ybShcIjozblwiKSl7ZS4zbygpfWx7ZS4kay56KFwiMnVcIiwxKX1lLjVPPWI7ZS4ybCgpOzcoQSBlLjYuM3M9PT1cIjlcIil7ZS42LjNzLlIoYyxbZS4ka10pfX0sMmw6OSgpe2ggZT1jOzcoZS42LjFaPT09ail7ZS4xWigpfTcoZS42LjFCPT09ail7ZS4xQigpfWUuNGcoKTs3KEEgZS42LjN3PT09XCI5XCIpe2UuNi4zdy5SKGMsW2UuJGtdKX19LDN4OjkoKXtoIGU9Yzs3KEEgZS42LjNCPT09XCI5XCIpe2UuNi4zQi5SKGMsW2UuJGtdKX1lLjNvKCk7ZS4yVigpO2UuMlcoKTtlLjRmKCk7ZS4zMCgpO2UuMmwoKTs3KEEgZS42LjNEPT09XCI5XCIpe2UuNi4zRC5SKGMsW2UuJGtdKX19LDNGOjkoKXtoIGU9Yzt0LjFjKDkoKXtlLjN4KCl9LDApfSwzbzo5KCl7aCBlPWM7NyhlLiRrLjJtKFwiOjNuXCIpPT09Yil7ZS4kay56KHsydTowfSk7dC4xOChlLjFDKTt0LjE4KGUuMVgpfWx7cCBifWUuMVg9dC40ZCg5KCl7NyhlLiRrLjJtKFwiOjNuXCIpKXtlLjNGKCk7ZS4kay40Yih7MnU6MX0sMk0pO3QuMTgoZS4xWCl9fSw1eCl9LDRCOjkoKXtoIGU9YztlLiRTLjVuKFxcJzxMIEg9XCJkLTFwXCI+XFwnKS40YShcXCc8TCBIPVwiZC0xS1wiPjwvTD5cXCcpO2UuJGsuMTcoXCIuZC0xcFwiKS40YShcXCc8TCBIPVwiZC0xcC00OVwiPlxcJyk7ZS4xSD1lLiRrLjE3KFwiLmQtMXAtNDlcIik7ZS4kay56KFwiNGlcIixcIjRoXCIpfSwxTTo5KCl7aCBlPWMsdD1lLiRrLjFJKGUuNi4xTSksbj1lLiRrLjFJKGUuNi4yaSk7NyghdCl7ZS4kay5JKGUuNi4xTSl9Nyghbil7ZS4kay5JKGUuNi4yaSl9fSwyVjo5KCl7aCB0PWMsbixyOzcodC42LjJaPT09Yil7cCBifTcodC42LjQ4PT09ail7dC42LnE9dC4ydD0xO3QuNi4xaD1iO3QuNi4xcz1iO3QuNi4xTz1iO3QuNi4yMj1iO3QuNi4xUT1iO3QuNi4xUj1iO3AgYn1uPWUodC42LjQ3KS4xZigpOzcobj4odC42LjFzWzBdfHx0LjJ0KSl7dC42LnE9dC4ydH03KHQuNi4xaCE9PWIpe3QuNi4xaC41Zyg5KGUsdCl7cCBlWzBdLXRbMF19KTsxQShyPTA7cjx0LjYuMWguTjtyKz0xKXs3KHQuNi4xaFtyXVswXTw9bil7dC42LnE9dC42LjFoW3JdWzFdfX19bHs3KG48PXQuNi4xc1swXSYmdC42LjFzIT09Yil7dC42LnE9dC42LjFzWzFdfTcobjw9dC42LjFPWzBdJiZ0LjYuMU8hPT1iKXt0LjYucT10LjYuMU9bMV19NyhuPD10LjYuMjJbMF0mJnQuNi4yMiE9PWIpe3QuNi5xPXQuNi4yMlsxXX03KG48PXQuNi4xUVswXSYmdC42LjFRIT09Yil7dC42LnE9dC42LjFRWzFdfTcobjw9dC42LjFSWzBdJiZ0LjYuMVIhPT1iKXt0LjYucT10LjYuMVJbMV19fTcodC42LnE+dC5FJiZ0LjYuNDY9PT1qKXt0LjYucT10LkV9fSw0cjo5KCl7aCBuPWMscixpOzcobi42LjJaIT09ail7cCBifWk9ZSh0KS4xZigpO24uM2Q9OSgpezcoZSh0KS4xZigpIT09aSl7NyhuLjYuTyE9PWIpe3QuMTgobi4xQyl9dC41ZChyKTtyPXQuMWMoOSgpe2k9ZSh0KS4xZigpO24uM3goKX0sbi42LjQ1KX19O2UodCkuNDQobi4zZCl9LDRmOjkoKXtoIGU9YztlLjJnKGUubSk7NyhlLjYuTyE9PWIpe2UuM2ooKX19LDQzOjkoKXtoIHQ9YyxuPTAscj10LkUtdC42LnE7dC4kRy4yZig5KGkpe2ggcz1lKGMpO3Mueih7MWY6dC5NfSkudihcImQtMUtcIiwzcChpKSk7NyhpJXQuNi5xPT09MHx8aT09PXIpezcoIShpPnIpKXtuKz0xfX1zLnYoXCJkLTI0XCIsbil9KX0sNDI6OSgpe2ggZT1jLHQ9ZS4kRy5OKmUuTTtlLiRLLnooezFmOnQqMixUOjB9KTtlLjQzKCl9LDJXOjkoKXtoIGU9YztlLjQwKCk7ZS40MigpO2UuM1ooKTtlLjN2KCl9LDQwOjkoKXtoIGU9YztlLk09MUYuNE8oZS4kay4xZigpL2UuNi5xKX0sM3Y6OSgpe2ggZT1jLHQ9KGUuRSplLk0tZS42LnEqZS5NKSotMTs3KGUuNi5xPmUuRSl7ZS5EPTA7dD0wO2UuM3o9MH1se2UuRD1lLkUtZS42LnE7ZS4zej10fXAgdH0sM1k6OSgpe3AgMH0sM1o6OSgpe2ggdD1jLG49MCxyPTAsaSxzLG87dC5KPVswXTt0LjNFPVtdOzFBKGk9MDtpPHQuRTtpKz0xKXtyKz10Lk07dC5KLjJEKC1yKTs3KHQuNi4xMj09PWope3M9ZSh0LiRHW2ldKTtvPXMudihcImQtMjRcIik7NyhvIT09bil7dC4zRVtuXT10LkpbaV07bj1vfX19fSw0dDo5KCl7aCB0PWM7Nyh0LjYuMmE9PT1qfHx0LjYuMXY9PT1qKXt0LkI9ZShcXCc8TCBIPVwiZC01QVwiLz5cXCcpLjVtKFwiNWxcIiwhdC5GLjE1KS41Yyh0LiRrKX03KHQuNi4xdj09PWope3QuM1QoKX03KHQuNi4yYT09PWope3QuM1MoKX19LDNTOjkoKXtoIHQ9YyxuPWUoXFwnPEwgSD1cImQtNFVcIi8+XFwnKTt0LkIuMW8obik7dC4xdT1lKFwiPEwvPlwiLHtcIkhcIjpcImQtMW5cIiwyeTp0LjYuMlVbMF18fFwiXCJ9KTt0LjFxPWUoXCI8TC8+XCIse1wiSFwiOlwiZC1VXCIsMnk6dC42LjJVWzFdfHxcIlwifSk7bi4xbyh0LjF1KS4xbyh0LjFxKTtuLncoXCIyWC5CIDIxLkJcIixcXCdMW0hePVwiZFwiXVxcJyw5KGUpe2UuMWwoKX0pO24udyhcIjJuLkIgMjguQlwiLFxcJ0xbSF49XCJkXCJdXFwnLDkobil7bi4xbCgpOzcoZShjKS4xSShcImQtVVwiKSl7dC5VKCl9bHt0LjFuKCl9fSl9LDNUOjkoKXtoIHQ9Yzt0LjFrPWUoXFwnPEwgSD1cImQtMXZcIi8+XFwnKTt0LkIuMW8odC4xayk7dC4xay53KFwiMm4uQiAyOC5CXCIsXCIuZC0xalwiLDkobil7bi4xbCgpOzcoM3AoZShjKS52KFwiZC0xalwiKSkhPT10Lm0pe3QuMWcoM3AoZShjKS52KFwiZC0xalwiKSksail9fSl9LDNQOjkoKXtoIHQ9YyxuLHIsaSxzLG8sdTs3KHQuNi4xdj09PWIpe3AgYn10LjFrLjJ5KFwiXCIpO249MDtyPXQuRS10LkUldC42LnE7MUEocz0wO3M8dC5FO3MrPTEpezcocyV0LjYucT09PTApe24rPTE7NyhyPT09cyl7aT10LkUtdC42LnF9bz1lKFwiPEwvPlwiLHtcIkhcIjpcImQtMWpcIn0pO3U9ZShcIjwzTj48LzNOPlwiLHs0Ujp0LjYuMzk9PT1qP246XCJcIixcIkhcIjp0LjYuMzk9PT1qP1wiZC01OVwiOlwiXCJ9KTtvLjFvKHUpO28udihcImQtMWpcIixyPT09cz9pOnMpO28udihcImQtMjRcIixuKTt0LjFrLjFvKG8pfX10LjM1KCl9LDM1OjkoKXtoIHQ9Yzs3KHQuNi4xdj09PWIpe3AgYn10LjFrLjE3KFwiLmQtMWpcIikuMmYoOSgpezcoZShjKS52KFwiZC0yNFwiKT09PWUodC4kR1t0Lm1dKS52KFwiZC0yNFwiKSl7dC4xay4xNyhcIi5kLTFqXCIpLlooXCIyZFwiKTtlKGMpLkkoXCIyZFwiKX19KX0sM2U6OSgpe2ggZT1jOzcoZS42LjJhPT09Yil7cCBifTcoZS42LjJlPT09Yil7NyhlLm09PT0wJiZlLkQ9PT0wKXtlLjF1LkkoXCIxYlwiKTtlLjFxLkkoXCIxYlwiKX1sIDcoZS5tPT09MCYmZS5EIT09MCl7ZS4xdS5JKFwiMWJcIik7ZS4xcS5aKFwiMWJcIil9bCA3KGUubT09PWUuRCl7ZS4xdS5aKFwiMWJcIik7ZS4xcS5JKFwiMWJcIil9bCA3KGUubSE9PTAmJmUubSE9PWUuRCl7ZS4xdS5aKFwiMWJcIik7ZS4xcS5aKFwiMWJcIil9fX0sMzA6OSgpe2ggZT1jO2UuM1AoKTtlLjNlKCk7NyhlLkIpezcoZS42LnE+PWUuRSl7ZS5CLjNLKCl9bHtlLkIuM0ooKX19fSw1NTo5KCl7aCBlPWM7NyhlLkIpe2UuQi4zaygpfX0sVTo5KGUpe2ggdD1jOzcodC4xRSl7cCBifXQubSs9dC42LjEyPT09aj90LjYucToxOzcodC5tPnQuRCsodC42LjEyPT09aj90LjYucS0xOjApKXs3KHQuNi4yZT09PWope3QubT0wO2U9XCIya1wifWx7dC5tPXQuRDtwIGJ9fXQuMWcodC5tLGUpfSwxbjo5KGUpe2ggdD1jOzcodC4xRSl7cCBifTcodC42LjEyPT09aiYmdC5tPjAmJnQubTx0LjYucSl7dC5tPTB9bHt0Lm0tPXQuNi4xMj09PWo/dC42LnE6MX03KHQubTwwKXs3KHQuNi4yZT09PWope3QubT10LkQ7ZT1cIjJrXCJ9bHt0Lm09MDtwIGJ9fXQuMWcodC5tLGUpfSwxZzo5KGUsbixyKXtoIGk9YyxzOzcoaS4xRSl7cCBifTcoQSBpLjYuMVk9PT1cIjlcIil7aS42LjFZLlIoYyxbaS4ka10pfTcoZT49aS5EKXtlPWkuRH1sIDcoZTw9MCl7ZT0wfWkubT1pLmQubT1lOzcoaS42LjJvIT09YiYmciE9PVwiNGVcIiYmaS42LnE9PT0xJiZpLkYuMXg9PT1qKXtpLjF0KDApOzcoaS5GLjF4PT09ail7aS4xTChpLkpbZV0pfWx7aS4xcihpLkpbZV0sMSl9aS4ycigpO2kuNGwoKTtwIGJ9cz1pLkpbZV07NyhpLkYuMXg9PT1qKXtpLjFUPWI7NyhuPT09ail7aS4xdChcIjF3XCIpO3QuMWMoOSgpe2kuMVQ9an0saS42LjF3KX1sIDcobj09PVwiMmtcIil7aS4xdChpLjYuMnYpO3QuMWMoOSgpe2kuMVQ9an0saS42LjJ2KX1se2kuMXQoXCIxbVwiKTt0LjFjKDkoKXtpLjFUPWp9LGkuNi4xbSl9aS4xTChzKX1sezcobj09PWope2kuMXIocyxpLjYuMXcpfWwgNyhuPT09XCIya1wiKXtpLjFyKHMsaS42LjJ2KX1se2kuMXIocyxpLjYuMW0pfX1pLjJyKCl9LDJnOjkoZSl7aCB0PWM7NyhBIHQuNi4xWT09PVwiOVwiKXt0LjYuMVkuUihjLFt0LiRrXSl9NyhlPj10LkR8fGU9PT0tMSl7ZT10LkR9bCA3KGU8PTApe2U9MH10LjF0KDApOzcodC5GLjF4PT09ail7dC4xTCh0LkpbZV0pfWx7dC4xcih0LkpbZV0sMSl9dC5tPXQuZC5tPWU7dC4ycigpfSwycjo5KCl7aCBlPWM7ZS4yNi4yRChlLm0pO2UuMTM9ZS5kLjEzPWUuMjZbZS4yNi5OLTJdO2UuMjYuNWYoMCk7NyhlLjEzIT09ZS5tKXtlLjM1KCk7ZS4zZSgpO2UuMmwoKTs3KGUuNi5PIT09Yil7ZS4zaigpfX03KEEgZS42LjN5PT09XCI5XCImJmUuMTMhPT1lLm0pe2UuNi4zeS5SKGMsW2UuJGtdKX19LFg6OSgpe2ggZT1jO2UuM0E9XCJYXCI7dC4xOChlLjFDKX0sM2o6OSgpe2ggZT1jOzcoZS4zQSE9PVwiWFwiKXtlLjE5KCl9fSwxOTo5KCl7aCBlPWM7ZS4zQT1cIjE5XCI7NyhlLjYuTz09PWIpe3AgYn10LjE4KGUuMUMpO2UuMUM9dC40ZCg5KCl7ZS5VKGopfSxlLjYuTyl9LDF0OjkoZSl7aCB0PWM7NyhlPT09XCIxbVwiKXt0LiRLLnoodC4yeih0LjYuMW0pKX1sIDcoZT09PVwiMXdcIil7dC4kSy56KHQuMnoodC42LjF3KSl9bCA3KEEgZSE9PVwiMllcIil7dC4kSy56KHQuMnooZSkpfX0sMno6OShlKXtwe1wiLTFHLTFhXCI6XCIyQyBcIitlK1wiMXogMnNcIixcIi0xVy0xYVwiOlwiMkMgXCIrZStcIjF6IDJzXCIsXCItby0xYVwiOlwiMkMgXCIrZStcIjF6IDJzXCIsMWE6XCIyQyBcIitlK1wiMXogMnNcIn19LDNIOjkoKXtwe1wiLTFHLTFhXCI6XCJcIixcIi0xVy0xYVwiOlwiXCIsXCItby0xYVwiOlwiXCIsMWE6XCJcIn19LDNJOjkoZSl7cHtcIi0xRy1QXCI6XCIxaShcIitlK1wiViwgQywgQylcIixcIi0xVy1QXCI6XCIxaShcIitlK1wiViwgQywgQylcIixcIi1vLVBcIjpcIjFpKFwiK2UrXCJWLCBDLCBDKVwiLFwiLTF6LVBcIjpcIjFpKFwiK2UrXCJWLCBDLCBDKVwiLFA6XCIxaShcIitlK1wiViwgQyxDKVwifX0sMUw6OShlKXtoIHQ9Yzt0LiRLLnoodC4zSShlKSl9LDNMOjkoZSl7aCB0PWM7dC4kSy56KHtUOmV9KX0sMXI6OShlLHQpe2ggbj1jO24uMjk9YjtuLiRLLlgoaixqKS40Yih7VDplfSx7NTQ6dHx8bi42LjFtLDNNOjkoKXtuLjI5PWp9fSl9LDRFOjkoKXtoIGU9YyxyPVwiMWkoQywgQywgQylcIixpPW4uNTYoXCJMXCIpLHMsbyx1LGE7aS4ydy4zTz1cIiAgLTFXLVA6XCIrcitcIjsgLTF6LVA6XCIrcitcIjsgLW8tUDpcIityK1wiOyAtMUctUDpcIityK1wiOyBQOlwiK3I7cz0vMWlcXFxcKEMsIEMsIENcXFxcKS9nO289aS4ydy4zTy41aShzKTt1PW8hPT0xNCYmby5OPT09MTthPVwiNXpcIjM4IHR8fHQuNVEuNFA7ZS5GPXsxeDp1LDE1OmF9fSw0cTo5KCl7aCBlPWM7NyhlLjYuMjchPT1ifHxlLjYuMVUhPT1iKXtlLjNRKCk7ZS4zUigpfX0sNEM6OSgpe2ggZT1jLHQ9W1wic1wiLFwiZVwiLFwieFwiXTtlLjE2PXt9OzcoZS42LjI3PT09aiYmZS42LjFVPT09ail7dD1bXCIyWC5kIDIxLmRcIixcIjJOLmQgM1UuZFwiLFwiMm4uZCAzVi5kIDI4LmRcIl19bCA3KGUuNi4yNz09PWImJmUuNi4xVT09PWope3Q9W1wiMlguZFwiLFwiMk4uZFwiLFwiMm4uZCAzVi5kXCJdfWwgNyhlLjYuMjc9PT1qJiZlLjYuMVU9PT1iKXt0PVtcIjIxLmRcIixcIjNVLmRcIixcIjI4LmRcIl19ZS4xNi4zVz10WzBdO2UuMTYuMks9dFsxXTtlLjE2LjJKPXRbMl19LDNSOjkoKXtoIHQ9Yzt0LiRrLncoXCI1eS5kXCIsOShlKXtlLjFsKCl9KTt0LiRrLncoXCIyMS4zWFwiLDkodCl7cCBlKHQuMWQpLjJtKFwiNUMsIDVFLCA1RiwgNU5cIil9KX0sM1E6OSgpezkgcyhlKXs3KGUuMmIhPT1XKXtwe3g6ZS4yYlswXS4yYyx5OmUuMmJbMF0uNDF9fTcoZS4yYj09PVcpezcoZS4yYyE9PVcpe3B7eDplLjJjLHk6ZS40MX19NyhlLjJjPT09Vyl7cHt4OmUuNTIseTplLjUzfX19fTkgbyh0KXs3KHQ9PT1cIndcIil7ZShuKS53KHIuMTYuMkssYSk7ZShuKS53KHIuMTYuMkosZil9bCA3KHQ9PT1cIlFcIil7ZShuKS5RKHIuMTYuMkspO2UobikuUShyLjE2LjJKKX19OSB1KG4pe2ggdT1uLjNofHxufHx0LjNnLGE7Nyh1LjVhPT09Myl7cCBifTcoci5FPD1yLjYucSl7cH03KHIuMjk9PT1iJiYhci42LjNmKXtwIGJ9NyhyLjFUPT09YiYmIXIuNi4zZil7cCBifTcoci42Lk8hPT1iKXt0LjE4KHIuMUMpfTcoci5GLjE1IT09aiYmIXIuJEsuMUkoXCIzYlwiKSl7ci4kSy5JKFwiM2JcIil9ci4xMT0wO3IuWT0wO2UoYykueihyLjNIKCkpO2E9ZShjKS4yaCgpO2kuMlM9YS5UO2kuMlI9cyh1KS54LWEuVDtpLjJQPXModSkueS1hLjVvO28oXCJ3XCIpO2kuMmo9YjtpLjJMPXUuMWR8fHUuNGN9OSBhKG8pe2ggdT1vLjNofHxvfHx0LjNnLGEsZjtyLjExPXModSkueC1pLjJSO3IuMkk9cyh1KS55LWkuMlA7ci5ZPXIuMTEtaS4yUzs3KEEgci42LjJFPT09XCI5XCImJmkuM0MhPT1qJiZyLlkhPT0wKXtpLjNDPWo7ci42LjJFLlIocixbci4ka10pfTcoKHIuWT44fHxyLlk8LTgpJiZyLkYuMTU9PT1qKXs3KHUuMWwhPT1XKXt1LjFsKCl9bHt1LjVMPWJ9aS4yaj1qfTcoKHIuMkk+MTB8fHIuMkk8LTEwKSYmaS4yaj09PWIpe2UobikuUShcIjJOLmRcIil9YT05KCl7cCByLlkvNX07Zj05KCl7cCByLjN6K3IuWS81fTtyLjExPTFGLjN2KDFGLjNZKHIuMTEsYSgpKSxmKCkpOzcoci5GLjF4PT09ail7ci4xTChyLjExKX1se3IuM0woci4xMSl9fTkgZihuKXtoIHM9bi4zaHx8bnx8dC4zZyx1LGEsZjtzLjFkPXMuMWR8fHMuNGM7aS4zQz1iOzcoci5GLjE1IT09ail7ci4kSy5aKFwiM2JcIil9NyhyLlk8MCl7ci4xeT1yLmQuMXk9XCJUXCJ9bHtyLjF5PXIuZC4xeT1cIjNpXCJ9NyhyLlkhPT0wKXt1PXIuNGooKTtyLjFnKHUsYixcIjRlXCIpOzcoaS4yTD09PXMuMWQmJnIuRi4xNSE9PWope2Uocy4xZCkudyhcIjNhLjRrXCIsOSh0KXt0LjRTKCk7dC40VCgpO3QuMWwoKTtlKHQuMWQpLlEoXCIzYS40a1wiKX0pO2E9ZS40TihzLjFkLFwiNFZcIikuM2E7Zj1hLjRXKCk7YS40WCgwLDAsZil9fW8oXCJRXCIpfWggcj1jLGk9ezJSOjAsMlA6MCw0WTowLDJTOjAsMmg6MTQsNFo6MTQsNTA6MTQsMmo6MTQsNTE6MTQsMkw6MTR9O3IuMjk9ajtyLiRrLncoci4xNi4zVyxcIi5kLTFwXCIsdSl9LDRqOjkoKXtoIGU9Yyx0PWUuNG0oKTs3KHQ+ZS5EKXtlLm09ZS5EO3Q9ZS5EfWwgNyhlLjExPj0wKXt0PTA7ZS5tPTB9cCB0fSw0bTo5KCl7aCB0PWMsbj10LjYuMTI9PT1qP3QuM0U6dC5KLHI9dC4xMSxpPTE0O2UuMmYobiw5KHMsbyl7NyhyLXQuTS8yMD5uW3MrMV0mJnItdC5NLzIwPG8mJnQuMzQoKT09PVwiVFwiKXtpPW87Nyh0LjYuMTI9PT1qKXt0Lm09ZS40cChpLHQuSil9bHt0Lm09c319bCA3KHIrdC5NLzIwPG8mJnIrdC5NLzIwPihuW3MrMV18fG5bc10tdC5NKSYmdC4zNCgpPT09XCIzaVwiKXs3KHQuNi4xMj09PWope2k9bltzKzFdfHxuW24uTi0xXTt0Lm09ZS40cChpLHQuSil9bHtpPW5bcysxXTt0Lm09cysxfX19KTtwIHQubX0sMzQ6OSgpe2ggZT1jLHQ7NyhlLlk8MCl7dD1cIjNpXCI7ZS4zdT1cIlVcIn1se3Q9XCJUXCI7ZS4zdT1cIjFuXCJ9cCB0fSw0QTo5KCl7aCBlPWM7ZS4kay53KFwiZC5VXCIsOSgpe2UuVSgpfSk7ZS4kay53KFwiZC4xblwiLDkoKXtlLjFuKCl9KTtlLiRrLncoXCJkLjE5XCIsOSh0LG4pe2UuNi5PPW47ZS4xOSgpO2UuMzI9XCIxOVwifSk7ZS4kay53KFwiZC5YXCIsOSgpe2UuWCgpO2UuMzI9XCJYXCJ9KTtlLiRrLncoXCJkLjFnXCIsOSh0LG4pe2UuMWcobil9KTtlLiRrLncoXCJkLjJnXCIsOSh0LG4pe2UuMmcobil9KX0sMnA6OSgpe2ggZT1jOzcoZS42LjJwPT09aiYmZS5GLjE1IT09aiYmZS42Lk8hPT1iKXtlLiRrLncoXCI1N1wiLDkoKXtlLlgoKX0pO2UuJGsudyhcIjU4XCIsOSgpezcoZS4zMiE9PVwiWFwiKXtlLjE5KCl9fSl9fSwxWjo5KCl7aCB0PWMsbixyLGkscyxvOzcodC42LjFaPT09Yil7cCBifTFBKG49MDtuPHQuRTtuKz0xKXtyPWUodC4kR1tuXSk7NyhyLnYoXCJkLTFlXCIpPT09XCIxZVwiKXs0c31pPXIudihcImQtMUtcIik7cz1yLjE3KFwiLjViXCIpOzcoQSBzLnYoXCIxSlwiKSE9PVwiMllcIil7ci52KFwiZC0xZVwiLFwiMWVcIik7NHN9NyhyLnYoXCJkLTFlXCIpPT09Vyl7cy4zSygpO3IuSShcIjR1XCIpLnYoXCJkLTFlXCIsXCI1ZVwiKX03KHQuNi40dj09PWope289aT49dC5tfWx7bz1qfTcobyYmaTx0Lm0rdC42LnEmJnMuTil7dC40dyhyLHMpfX19LDR3OjkoZSxuKXs5IG8oKXtlLnYoXCJkLTFlXCIsXCIxZVwiKS5aKFwiNHVcIik7bi41aChcInYtMUpcIik7NyhyLjYuNHg9PT1cIjR5XCIpe24uNWooNWspfWx7bi4zSigpfTcoQSByLjYuMlQ9PT1cIjlcIil7ci42LjJULlIoYyxbci4ka10pfX05IHUoKXtpKz0xOzcoci4yUShuLjNsKDApKXx8cz09PWope28oKX1sIDcoaTw9MnEpe3QuMWModSwycSl9bHtvKCl9fWggcj1jLGk9MCxzOzcobi41cChcIjVxXCIpPT09XCI1clwiKXtuLnooXCI1cy01dFwiLFwiNXUoXCIrbi52KFwiMUpcIikrXCIpXCIpO3M9an1se25bMF0uMUo9bi52KFwiMUpcIil9dSgpfSwxQjo5KCl7OSBzKCl7aCByPWUobi4kR1tuLm1dKS4yRygpO24uMUgueihcIjJHXCIscitcIlZcIik7Nyghbi4xSC4xSShcIjFCXCIpKXt0LjFjKDkoKXtuLjFILkkoXCIxQlwiKX0sMCl9fTkgbygpe2krPTE7NyhuLjJRKHIuM2woMCkpKXtzKCl9bCA3KGk8PTJxKXt0LjFjKG8sMnEpfWx7bi4xSC56KFwiMkdcIixcIlwiKX19aCBuPWMscj1lKG4uJEdbbi5tXSkuMTcoXCI1d1wiKSxpOzcoci4zbCgwKSE9PVcpe2k9MDtvKCl9bHtzKCl9fSwyUTo5KGUpe2ggdDs3KCFlLjNNKXtwIGJ9dD1BIGUuNEQ7Nyh0IT09XCJXXCImJmUuNEQ9PT0wKXtwIGJ9cCBqfSw0Zzo5KCl7aCB0PWMsbjs3KHQuNi4yRj09PWope3QuJEcuWihcIjJkXCIpfXQuMUQ9W107MUEobj10Lm07bjx0Lm0rdC42LnE7bis9MSl7dC4xRC4yRChuKTs3KHQuNi4yRj09PWope2UodC4kR1tuXSkuSShcIjJkXCIpfX10LmQuMUQ9dC4xRH0sNG46OShlKXtoIHQ9Yzt0LjRHPVwiZC1cIitlK1wiLTVCXCI7dC40SD1cImQtXCIrZStcIi0zOFwifSw0bDo5KCl7OSBhKGUpe3B7Mmg6XCI1RFwiLFQ6ZStcIlZcIn19aCBlPWMsdD1lLjRHLG49ZS40SCxyPWUuJEcuMVMoZS5tKSxpPWUuJEcuMVMoZS4xMykscz0xRi40SihlLkpbZS5tXSkrZS5KW2UuMTNdLG89MUYuNEooZS5KW2UubV0pK2UuTS8yLHU9XCI1RyA1SCA1SSA1SlwiO2UuMUU9ajtlLiRLLkkoXCJkLTFQXCIpLnooe1wiLTFHLVAtMVBcIjpvK1wiVlwiLFwiLTFXLTRLLTFQXCI6bytcIlZcIixcIjRLLTFQXCI6bytcIlZcIn0pO2kueihhKHMsMTApKS5JKHQpLncodSw5KCl7ZS4zbT1qO2kuUSh1KTtlLjMxKGksdCl9KTtyLkkobikudyh1LDkoKXtlLjM2PWo7ci5RKHUpO2UuMzEocixuKX0pfSwzMTo5KGUsdCl7aCBuPWM7ZS56KHsyaDpcIlwiLFQ6XCJcIn0pLloodCk7NyhuLjNtJiZuLjM2KXtuLiRLLlooXCJkLTFQXCIpO24uM209YjtuLjM2PWI7bi4xRT1ifX0sNG86OSgpe2ggZT1jO2UuZD17MkE6ZS4yQSw1UDplLiRrLFM6ZS4kUyxHOmUuJEcsbTplLm0sMTM6ZS4xMywxRDplLjFELDE1OmUuRi4xNSxGOmUuRiwxeTplLjF5fX0sM0c6OSgpe2ggcj1jO3IuJGsuUShcIi5kIGQgMjEuM1hcIik7ZShuKS5RKFwiLmQgZFwiKTtlKHQpLlEoXCI0NFwiLHIuM2QpfSwxVjo5KCl7aCBlPWM7NyhlLiRrLjI1KCkuTiE9PTApe2UuJEsuM3IoKTtlLiRTLjNyKCkuM3IoKTs3KGUuQil7ZS5CLjNrKCl9fWUuM0coKTtlLiRrLjJ4KFwiMndcIixlLiRrLnYoXCJkLTRJXCIpfHxcIlwiKS4yeChcIkhcIixlLiRrLnYoXCJkLTRGXCIpKX0sNVQ6OSgpe2ggZT1jO2UuWCgpO3QuMTgoZS4xWCk7ZS4xVigpO2UuJGsuNVUoKX0sNVY6OSh0KXtoIG49YyxyPWUuNE0oe30sbi4yQSx0KTtuLjFWKCk7bi4xTihyLG4uJGspfSw1Vzo5KGUsdCl7aCBuPWMscjs3KCFlKXtwIGJ9NyhuLiRrLjI1KCkuTj09PTApe24uJGsuMW8oZSk7bi4yMygpO3AgYn1uLjFWKCk7Nyh0PT09V3x8dD09PS0xKXtyPS0xfWx7cj10fTcocj49bi4kUy5OfHxyPT09LTEpe24uJFMuMVMoLTEpLjVYKGUpfWx7bi4kUy4xUyhyKS41WShlKX1uLjIzKCl9LDVaOjkoZSl7aCB0PWMsbjs3KHQuJGsuMjUoKS5OPT09MCl7cCBifTcoZT09PVd8fGU9PT0tMSl7bj0tMX1se249ZX10LjFWKCk7dC4kUy4xUyhuKS4zaygpO3QuMjMoKX19O2UuMzcuMkI9OSh0KXtwIGMuMmYoOSgpezcoZShjKS52KFwiZC0xTlwiKT09PWope3AgYn1lKGMpLnYoXCJkLTFOXCIsaik7aCBuPTNjLjNxKHIpO24uMU4odCxjKTtlLnYoYyxcIjJCXCIsbil9KX07ZS4zNy4yQi42PXtxOjUsMWg6YiwxczpbNjAsNF0sMU86WzYxLDNdLDIyOls2MiwyXSwxUTpiLDFSOls2MywxXSw0ODpiLDQ2OmIsMW06Mk0sMXc6NjQsMnY6NjUsTzpiLDJwOmIsMmE6YiwyVTpbXCIxblwiLFwiVVwiXSwyZTpqLDEyOmIsMXY6aiwzOTpiLDJaOmosNDU6Mk0sNDc6dCwxTTpcImQtNjZcIiwyaTpcImQtMmlcIiwxWjpiLDR2OmosNHg6XCI0eVwiLDFCOmIsMk86YiwzMzpiLDNmOmosMjc6aiwxVTpqLDJGOmIsMm86YiwzQjpiLDNEOmIsMkg6YiwzczpiLDFZOmIsM3k6YiwzdzpiLDJFOmIsMlQ6Yn19KSg2Nyw2OCw2OSknLDYyLDM4MiwnfHx8fHx8b3B0aW9uc3xpZnx8ZnVuY3Rpb258fGZhbHNlfHRoaXN8b3dsfHx8fHZhcnx8dHJ1ZXxlbGVtfGVsc2V8Y3VycmVudEl0ZW18fHxyZXR1cm58aXRlbXN8fHx8fGRhdGF8b258fHxjc3N8dHlwZW9mfG93bENvbnRyb2xzfDBweHxtYXhpbXVtSXRlbXxpdGVtc0Ftb3VudHxicm93c2VyfG93bEl0ZW1zfGNsYXNzfGFkZENsYXNzfHBvc2l0aW9uc0luQXJyYXl8b3dsV3JhcHBlcnxkaXZ8aXRlbVdpZHRofGxlbmd0aHxhdXRvUGxheXx0cmFuc2Zvcm18b2ZmfGFwcGx5fHVzZXJJdGVtc3xsZWZ0fG5leHR8cHh8dW5kZWZpbmVkfHN0b3B8bmV3UmVsYXRpdmVYfHJlbW92ZUNsYXNzfHxuZXdQb3NYfHNjcm9sbFBlclBhZ2V8cHJldkl0ZW18bnVsbHxpc1RvdWNofGV2X3R5cGVzfGZpbmR8Y2xlYXJJbnRlcnZhbHxwbGF5fHRyYW5zaXRpb258ZGlzYWJsZWR8c2V0VGltZW91dHx0YXJnZXR8bG9hZGVkfHdpZHRofGdvVG98aXRlbXNDdXN0b218dHJhbnNsYXRlM2R8cGFnZXxwYWdpbmF0aW9uV3JhcHBlcnxwcmV2ZW50RGVmYXVsdHxzbGlkZVNwZWVkfHByZXZ8YXBwZW5kfHdyYXBwZXJ8YnV0dG9uTmV4dHxjc3Myc2xpZGV8aXRlbXNEZXNrdG9wfHN3YXBTcGVlZHxidXR0b25QcmV2fHBhZ2luYXRpb258cGFnaW5hdGlvblNwZWVkfHN1cHBvcnQzZHxkcmFnRGlyZWN0aW9ufG1zfGZvcnxhdXRvSGVpZ2h0fGF1dG9QbGF5SW50ZXJ2YWx8dmlzaWJsZUl0ZW1zfGlzVHJhbnNpdGlvbnxNYXRofHdlYmtpdHx3cmFwcGVyT3V0ZXJ8aGFzQ2xhc3N8c3JjfGl0ZW18dHJhbnNpdGlvbjNkfGJhc2VDbGFzc3xpbml0fGl0ZW1zRGVza3RvcFNtYWxsfG9yaWdpbnxpdGVtc1RhYmxldFNtYWxsfGl0ZW1zTW9iaWxlfGVxfGlzQ3NzM0ZpbmlzaHx0b3VjaERyYWd8dW5XcmFwfG1venxjaGVja1Zpc2libGV8YmVmb3JlTW92ZXxsYXp5TG9hZHx8bW91c2Vkb3dufGl0ZW1zVGFibGV0fHNldFZhcnN8cm91bmRQYWdlc3xjaGlsZHJlbnxwcmV2QXJyfG1vdXNlRHJhZ3xtb3VzZXVwfGlzQ3NzRmluaXNofG5hdmlnYXRpb258dG91Y2hlc3xwYWdlWHxhY3RpdmV8cmV3aW5kTmF2fGVhY2h8anVtcFRvfHBvc2l0aW9ufHRoZW1lfHNsaWRpbmd8cmV3aW5kfGVhY2hNb3ZlVXBkYXRlfGlzfHRvdWNoZW5kfHRyYW5zaXRpb25TdHlsZXxzdG9wT25Ib3ZlcnwxMDB8YWZ0ZXJHb3xlYXNlfG9yaWduYWxJdGVtc3xvcGFjaXR5fHJld2luZFNwZWVkfHN0eWxlfGF0dHJ8aHRtbHxhZGRDc3NTcGVlZHx1c2VyT3B0aW9uc3xvd2xDYXJvdXNlbHxhbGx8cHVzaHxzdGFydERyYWdnaW5nfGFkZENsYXNzQWN0aXZlfGhlaWdodHxiZWZvcmVJbml0fG5ld1Bvc1l8ZW5kfG1vdmV8dGFyZ2V0RWxlbWVudHwyMDB8dG91Y2htb3ZlfGpzb25QYXRofG9mZnNldFl8Y29tcGxldGVJbWd8b2Zmc2V0WHxyZWxhdGl2ZVBvc3xhZnRlckxhenlMb2FkfG5hdmlnYXRpb25UZXh0fHVwZGF0ZUl0ZW1zfGNhbGN1bGF0ZUFsbHx0b3VjaHN0YXJ0fHN0cmluZ3xyZXNwb25zaXZlfHVwZGF0ZUNvbnRyb2xzfGNsZWFyVHJhbnNTdHlsZXxob3ZlclN0YXR1c3xqc29uU3VjY2Vzc3xtb3ZlRGlyZWN0aW9ufGNoZWNrUGFnaW5hdGlvbnxlbmRDdXJyZW50fGZufGlufHBhZ2luYXRpb25OdW1iZXJzfGNsaWNrfGdyYWJiaW5nfE9iamVjdHxyZXNpemVyfGNoZWNrTmF2aWdhdGlvbnxkcmFnQmVmb3JlQW5pbUZpbmlzaHxldmVudHxvcmlnaW5hbEV2ZW50fHJpZ2h0fGNoZWNrQXB8cmVtb3ZlfGdldHxlbmRQcmV2fHZpc2libGV8d2F0Y2hWaXNpYmlsaXR5fE51bWJlcnxjcmVhdGV8dW53cmFwfGFmdGVySW5pdHxsb2dJbnxwbGF5RGlyZWN0aW9ufG1heHxhZnRlckFjdGlvbnx1cGRhdGVWYXJzfGFmdGVyTW92ZXxtYXhpbXVtUGl4ZWxzfGFwU3RhdHVzfGJlZm9yZVVwZGF0ZXxkcmFnZ2luZ3xhZnRlclVwZGF0ZXxwYWdlc0luQXJyYXl8cmVsb2FkfGNsZWFyRXZlbnRzfHJlbW92ZVRyYW5zaXRpb258ZG9UcmFuc2xhdGV8c2hvd3xoaWRlfGNzczJtb3ZlfGNvbXBsZXRlfHNwYW58Y3NzVGV4dHx1cGRhdGVQYWdpbmF0aW9ufGdlc3R1cmVzfGRpc2FibGVkRXZlbnRzfGJ1aWxkQnV0dG9uc3xidWlsZFBhZ2luYXRpb258bW91c2Vtb3ZlfHRvdWNoY2FuY2VsfHN0YXJ0fGRpc2FibGVUZXh0U2VsZWN0fG1pbnxsb29wc3xjYWxjdWxhdGVXaWR0aHxwYWdlWXxhcHBlbmRXcmFwcGVyU2l6ZXN8YXBwZW5kSXRlbXNTaXplc3xyZXNpemV8cmVzcG9uc2l2ZVJlZnJlc2hSYXRlfGl0ZW1zU2NhbGVVcHxyZXNwb25zaXZlQmFzZVdpZHRofHNpbmdsZUl0ZW18b3V0ZXJ8d3JhcHxhbmltYXRlfHNyY0VsZW1lbnR8c2V0SW50ZXJ2YWx8ZHJhZ3x1cGRhdGVQb3NpdGlvbnxvblZpc2libGVJdGVtc3xibG9ja3xkaXNwbGF5fGdldE5ld1Bvc2l0aW9ufGRpc2FibGV8c2luZ2xlSXRlbVRyYW5zaXRpb258Y2xvc2VzdEl0ZW18dHJhbnNpdGlvblR5cGVzfG93bFN0YXR1c3xpbkFycmF5fG1vdmVFdmVudHN8cmVzcG9uc2V8Y29udGludWV8YnVpbGRDb250cm9sc3xsb2FkaW5nfGxhenlGb2xsb3d8bGF6eVByZWxvYWR8bGF6eUVmZmVjdHxmYWRlfG9uU3RhcnR1cHxjdXN0b21FdmVudHN8d3JhcEl0ZW1zfGV2ZW50VHlwZXN8bmF0dXJhbFdpZHRofGNoZWNrQnJvd3NlcnxvcmlnaW5hbENsYXNzZXN8b3V0Q2xhc3N8aW5DbGFzc3xvcmlnaW5hbFN0eWxlc3xhYnN8cGVyc3BlY3RpdmV8bG9hZENvbnRlbnR8ZXh0ZW5kfF9kYXRhfHJvdW5kfG1zTWF4VG91Y2hQb2ludHN8NWUzfHRleHR8c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9ufHN0b3BQcm9wYWdhdGlvbnxidXR0b25zfGV2ZW50c3xwb3B8c3BsaWNlfGJhc2VFbFdpZHRofG1pblN3aXBlfG1heFN3aXBlfGRhcmdnaW5nfGNsaWVudFh8Y2xpZW50WXxkdXJhdGlvbnxkZXN0cm95Q29udHJvbHN8Y3JlYXRlRWxlbWVudHxtb3VzZW92ZXJ8bW91c2VvdXR8bnVtYmVyc3x3aGljaHxsYXp5T3dsfGFwcGVuZFRvfGNsZWFyVGltZW91dHxjaGVja2VkfHNoaWZ0fHNvcnR8cmVtb3ZlQXR0cnxtYXRjaHxmYWRlSW58NDAwfGNsaWNrYWJsZXx0b2dnbGVDbGFzc3x3cmFwQWxsfHRvcHxwcm9wfHRhZ05hbWV8RElWfGJhY2tncm91bmR8aW1hZ2V8dXJsfHdyYXBwZXJXaWR0aHxpbWd8NTAwfGRyYWdzdGFydHxvbnRvdWNoc3RhcnR8Y29udHJvbHN8b3V0fGlucHV0fHJlbGF0aXZlfHRleHRhcmVhfHNlbGVjdHx3ZWJraXRBbmltYXRpb25FbmR8b0FuaW1hdGlvbkVuZHxNU0FuaW1hdGlvbkVuZHxhbmltYXRpb25lbmR8Z2V0SlNPTnxyZXR1cm5WYWx1ZXxoYXNPd25Qcm9wZXJ0eXxvcHRpb258b25zdGFydHVwfGJhc2VFbGVtZW50fG5hdmlnYXRvcnxuZXd8cHJvdG90eXBlfGRlc3Ryb3l8cmVtb3ZlRGF0YXxyZWluaXR8YWRkSXRlbXxhZnRlcnxiZWZvcmV8cmVtb3ZlSXRlbXwxMTk5fDk3OXw3Njh8NDc5fDgwMHwxZTN8Y2Fyb3VzZWx8alF1ZXJ5fHdpbmRvd3xkb2N1bWVudCcuc3BsaXQoJ3wnKSwwLHt9KSkiLCJ3aW5kb3cubWF0Y2hNZWRpYT13aW5kb3cubWF0Y2hNZWRpYXx8ZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGMsZD1hLmRvY3VtZW50RWxlbWVudCxlPWQuZmlyc3RFbGVtZW50Q2hpbGR8fGQuZmlyc3RDaGlsZCxmPWEuY3JlYXRlRWxlbWVudChcImJvZHlcIiksZz1hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGcuaWQ9XCJtcS10ZXN0LTFcIixnLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTEwMGVtXCIsZi5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiLGYuYXBwZW5kQ2hpbGQoZyksZnVuY3Rpb24oYSl7cmV0dXJuIGcuaW5uZXJIVE1MPScmc2h5OzxzdHlsZSBtZWRpYT1cIicrYSsnXCI+ICNtcS10ZXN0LTEgeyB3aWR0aDogNDJweDsgfTwvc3R5bGU+JyxkLmluc2VydEJlZm9yZShmLGUpLGM9NDI9PT1nLm9mZnNldFdpZHRoLGQucmVtb3ZlQ2hpbGQoZikse21hdGNoZXM6YyxtZWRpYTphfX19KGRvY3VtZW50KTsoZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24geCgpe3UoITApfXZhciBiPXt9O2lmKGEucmVzcG9uZD1iLGIudXBkYXRlPWZ1bmN0aW9uKCl7fSxiLm1lZGlhUXVlcmllc1N1cHBvcnRlZD1hLm1hdGNoTWVkaWEmJmEubWF0Y2hNZWRpYShcIm9ubHkgYWxsXCIpLm1hdGNoZXMsIWIubWVkaWFRdWVyaWVzU3VwcG9ydGVkKXt2YXIgcSxyLHQsYz1hLmRvY3VtZW50LGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1bXSxmPVtdLGc9W10saD17fSxpPTMwLGo9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF18fGQsaz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYmFzZVwiKVswXSxsPWouZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpLG09W10sbj1mdW5jdGlvbigpe2Zvcih2YXIgYj0wO2wubGVuZ3RoPmI7YisrKXt2YXIgYz1sW2JdLGQ9Yy5ocmVmLGU9Yy5tZWRpYSxmPWMucmVsJiZcInN0eWxlc2hlZXRcIj09PWMucmVsLnRvTG93ZXJDYXNlKCk7ZCYmZiYmIWhbZF0mJihjLnN0eWxlU2hlZXQmJmMuc3R5bGVTaGVldC5yYXdDc3NUZXh0PyhwKGMuc3R5bGVTaGVldC5yYXdDc3NUZXh0LGQsZSksaFtkXT0hMCk6KCEvXihbYS16QS1aOl0qXFwvXFwvKS8udGVzdChkKSYmIWt8fGQucmVwbGFjZShSZWdFeHAuJDEsXCJcIikuc3BsaXQoXCIvXCIpWzBdPT09YS5sb2NhdGlvbi5ob3N0KSYmbS5wdXNoKHtocmVmOmQsbWVkaWE6ZX0pKX1vKCl9LG89ZnVuY3Rpb24oKXtpZihtLmxlbmd0aCl7dmFyIGI9bS5zaGlmdCgpO3YoYi5ocmVmLGZ1bmN0aW9uKGMpe3AoYyxiLmhyZWYsYi5tZWRpYSksaFtiLmhyZWZdPSEwLGEuc2V0VGltZW91dChmdW5jdGlvbigpe28oKX0sMCl9KX19LHA9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEubWF0Y2goL0BtZWRpYVteXFx7XStcXHsoW15cXHtcXH1dKlxce1teXFx9XFx7XSpcXH0pKy9naSksZz1kJiZkLmxlbmd0aHx8MDtiPWIuc3Vic3RyaW5nKDAsYi5sYXN0SW5kZXhPZihcIi9cIikpO3ZhciBoPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyh1cmxcXCgpWydcIl0/KFteXFwvXFwpJ1wiXVteOlxcKSdcIl0rKVsnXCJdPyhcXCkpL2csXCIkMVwiK2IrXCIkMiQzXCIpfSxpPSFnJiZjO2IubGVuZ3RoJiYoYis9XCIvXCIpLGkmJihnPTEpO2Zvcih2YXIgaj0wO2c+ajtqKyspe3ZhciBrLGwsbSxuO2k/KGs9YyxmLnB1c2goaChhKSkpOihrPWRbal0ubWF0Y2goL0BtZWRpYSAqKFteXFx7XSspXFx7KFtcXFNcXHNdKz8pJC8pJiZSZWdFeHAuJDEsZi5wdXNoKFJlZ0V4cC4kMiYmaChSZWdFeHAuJDIpKSksbT1rLnNwbGl0KFwiLFwiKSxuPW0ubGVuZ3RoO2Zvcih2YXIgbz0wO24+bztvKyspbD1tW29dLGUucHVzaCh7bWVkaWE6bC5zcGxpdChcIihcIilbMF0ubWF0Y2goLyhvbmx5XFxzKyk/KFthLXpBLVpdKylcXHM/LykmJlJlZ0V4cC4kMnx8XCJhbGxcIixydWxlczpmLmxlbmd0aC0xLGhhc3F1ZXJ5OmwuaW5kZXhPZihcIihcIik+LTEsbWludzpsLm1hdGNoKC9cXChcXHMqbWluXFwtd2lkdGhcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS8pJiZwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrKFJlZ0V4cC4kMnx8XCJcIiksbWF4dzpsLm1hdGNoKC9cXChcXHMqbWF4XFwtd2lkdGhcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS8pJiZwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrKFJlZ0V4cC4kMnx8XCJcIil9KX11KCl9LHM9ZnVuY3Rpb24oKXt2YXIgYSxiPWMuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPWMuYm9keSxmPSExO3JldHVybiBiLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbVwiLGV8fChlPWY9Yy5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSxlLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCIpLGUuYXBwZW5kQ2hpbGQoYiksZC5pbnNlcnRCZWZvcmUoZSxkLmZpcnN0Q2hpbGQpLGE9Yi5vZmZzZXRXaWR0aCxmP2QucmVtb3ZlQ2hpbGQoZSk6ZS5yZW1vdmVDaGlsZChiKSxhPXQ9cGFyc2VGbG9hdChhKX0sdT1mdW5jdGlvbihiKXt2YXIgaD1cImNsaWVudFdpZHRoXCIsaz1kW2hdLG09XCJDU1MxQ29tcGF0XCI9PT1jLmNvbXBhdE1vZGUmJmt8fGMuYm9keVtoXXx8ayxuPXt9LG89bFtsLmxlbmd0aC0xXSxwPShuZXcgRGF0ZSkuZ2V0VGltZSgpO2lmKGImJnEmJmk+cC1xKXJldHVybiBhLmNsZWFyVGltZW91dChyKSxyPWEuc2V0VGltZW91dCh1LGkpLHZvaWQgMDtxPXA7Zm9yKHZhciB2IGluIGUpaWYoZS5oYXNPd25Qcm9wZXJ0eSh2KSl7dmFyIHc9ZVt2XSx4PXcubWludyx5PXcubWF4dyx6PW51bGw9PT14LEE9bnVsbD09PXksQj1cImVtXCI7eCYmKHg9cGFyc2VGbG9hdCh4KSooeC5pbmRleE9mKEIpPi0xP3R8fHMoKToxKSkseSYmKHk9cGFyc2VGbG9hdCh5KSooeS5pbmRleE9mKEIpPi0xP3R8fHMoKToxKSksdy5oYXNxdWVyeSYmKHomJkF8fCEoenx8bT49eCl8fCEoQXx8eT49bSkpfHwoblt3Lm1lZGlhXXx8KG5bdy5tZWRpYV09W10pLG5bdy5tZWRpYV0ucHVzaChmW3cucnVsZXNdKSl9Zm9yKHZhciBDIGluIGcpZy5oYXNPd25Qcm9wZXJ0eShDKSYmZ1tDXSYmZ1tDXS5wYXJlbnROb2RlPT09aiYmai5yZW1vdmVDaGlsZChnW0NdKTtmb3IodmFyIEQgaW4gbilpZihuLmhhc093blByb3BlcnR5KEQpKXt2YXIgRT1jLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxGPW5bRF0uam9pbihcIlxcblwiKTtFLnR5cGU9XCJ0ZXh0L2Nzc1wiLEUubWVkaWE9RCxqLmluc2VydEJlZm9yZShFLG8ubmV4dFNpYmxpbmcpLEUuc3R5bGVTaGVldD9FLnN0eWxlU2hlZXQuY3NzVGV4dD1GOkUuYXBwZW5kQ2hpbGQoYy5jcmVhdGVUZXh0Tm9kZShGKSksZy5wdXNoKEUpfX0sdj1mdW5jdGlvbihhLGIpe3ZhciBjPXcoKTtjJiYoYy5vcGVuKFwiR0VUXCIsYSwhMCksYy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0IT09Yy5yZWFkeVN0YXRlfHwyMDAhPT1jLnN0YXR1cyYmMzA0IT09Yy5zdGF0dXN8fGIoYy5yZXNwb25zZVRleHQpfSw0IT09Yy5yZWFkeVN0YXRlJiZjLnNlbmQobnVsbCkpfSx3PWZ1bmN0aW9uKCl7dmFyIGI9ITE7dHJ5e2I9bmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYyl7Yj1uZXcgYS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGJ9fSgpO24oKSxiLnVwZGF0ZT1uLGEuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix4LCExKTphLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib25yZXNpemVcIix4KX19KSh0aGlzKTsiLCIvKiBDcmVhdGVkIGJ5IEFydGlzdGVlciB2NC4zLjAuNjA3NDUgKi9cclxuLypqc2hpbnQgZm9yaW46dHJ1ZSwgbm9hcmc6dHJ1ZSwgbm9lbXB0eTp0cnVlLCBlcWVxZXE6dHJ1ZSwgYml0d2lzZTp0cnVlLCBzdHJpY3Q6dHJ1ZSwgdW5kZWY6dHJ1ZSwgY3VybHk6ZmFsc2UsIGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OmZhbHNlICovXHJcbi8qZ2xvYmFsIGpRdWVyeSBCYWNrZ3JvdW5kSGVscGVyICovXHJcblxyXG4vLyBjc3MgaGVscGVyXHJcbmJyb3dzZXIgPSBmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIGRhdGEgPSBbXHJcbiAgICAgICAgeyBzdHI6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YjogJ0Nocm9tZScsIHZlcjogJ0Nocm9tZScsIG5hbWU6ICdjaHJvbWUnIH0sXHJcbiAgICAgICAgeyBzdHI6IG5hdmlnYXRvci52ZW5kb3IsIHN1YjogJ0FwcGxlJywgdmVyOiAnVmVyc2lvbicsIG5hbWU6ICdzYWZhcmknIH0sXHJcbiAgICAgICAgeyBwcm9wOiB3aW5kb3cub3BlcmEsIHZlcjogJ09wZXJhJywgbmFtZTogJ29wZXJhJyB9LFxyXG4gICAgICAgIHsgc3RyOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWI6ICdGaXJlZm94JywgdmVyOiAnRmlyZWZveCcsIG5hbWU6ICdmaXJlZm94JyB9LFxyXG4gICAgICAgIHsgc3RyOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWI6ICdNU0lFJywgdmVyOiAnTVNJRScsIG5hbWU6ICdpZScgfSxcclxuICAgICAgICB7IHN0cjogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViOiAnVHJpZGVudC83LjAnLCB2ZXI6ICdydicsIG5hbWU6ICdpZScgfVxyXG4gICAgXTtcclxuICAgIHZhciB2ID0gZnVuY3Rpb24gKHMsIG4pIHtcclxuICAgICAgICB2YXIgaSA9IHMuaW5kZXhPZihkYXRhW25dLnZlcik7XHJcbiAgICAgICAgcmV0dXJuIChpICE9PSAtMSkgPyBwYXJzZUZsb2F0KHMuc3Vic3RyaW5nKGkgKyBkYXRhW25dLnZlci5sZW5ndGggKyAxKSkgOiAwO1xyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB7IG5hbWU6ICd1bmtub3duJywgdmVyc2lvbjogMCB9O1xyXG4gICAgdmFyIGh0bWwgPSAkKCdodG1sJyk7XHJcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGRhdGEubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICBpZiAoIXJlc3VsdFtkYXRhW25dLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtkYXRhW25dLm5hbWVdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoZGF0YVtuXS5zdHIgJiYgKGRhdGFbbl0uc3RyLmluZGV4T2YoZGF0YVtuXS5zdWIpICE9PSAtMSkpIHx8IGRhdGFbbl0ucHJvcCkge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IGRhdGFbbl0ubmFtZTtcclxuICAgICAgICAgICAgcmVzdWx0W3Jlc3VsdC5uYW1lXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdihuYXZpZ2F0b3IudXNlckFnZW50LCBuKSB8fCB2KG5hdmlnYXRvci5hcHBWZXJzaW9uLCBuKTtcclxuICAgICAgICAgICAgaHRtbC5hZGRDbGFzcyhyZXN1bHQubmFtZSArICcgJyArIHJlc3VsdC5uYW1lICsgcGFyc2VJbnQocmVzdWx0LnZlcnNpb24sIDEwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufSAoalF1ZXJ5KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgaWYgKHR5cGVvZiByZXNwb25zaXZlRGVzaWduID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJkZXNrdG9wXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIGksIGosIGssIGwsIG07XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uICE9PSA5KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHNwbGl0QnlUb2tlbnMgPSBmdW5jdGlvbiAoc3RyLCBzdGFydFRva2VuLCBlbmRUb2tlbiwgbGFzdCkge1xyXG4gICAgICAgIGlmICghbGFzdCkge1xyXG4gICAgICAgICAgICBsYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFydFBvcyA9IHN0ci5pbmRleE9mKHN0YXJ0VG9rZW4pO1xyXG4gICAgICAgIGlmIChzdGFydFBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgc3RhcnRQb3MgKz0gc3RhcnRUb2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBlbmRQb3MgPSBsYXN0ID8gc3RyLmxhc3RJbmRleE9mKGVuZFRva2VuKSA6IHN0ci5pbmRleE9mKGVuZFRva2VuLCBzdGFydFBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5kUG9zICE9PSAtMSAmJiBlbmRQb3MgPiBzdGFydFBvcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnRQb3MsIGVuZFBvcyAtIHN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzcGxpdFdpdGhCcmFja2V0cyA9IGZ1bmN0aW9uIChzdHIsIHRva2VuLCBicmFja2V0cykge1xyXG4gICAgICAgIC8qanNoaW50IG5vbnN0YW5kYXJkOnRydWUgKi9cclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gJywnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJyYWNrZXRzKSB7XHJcbiAgICAgICAgICAgIGJyYWNrZXRzID0gJygpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJyYWNrZXQgPSAwO1xyXG4gICAgICAgIHZhciBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmIChicmFja2V0cy5sZW5naHQgPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIHdoaWxlIChwb3MgPCBzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHN0cltwb3NdO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09IGJyYWNrZXRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBicmFja2V0Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoID09PSBicmFja2V0c1sxXSkge1xyXG4gICAgICAgICAgICAgICAgYnJhY2tldC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gdG9rZW4gJiYgYnJhY2tldCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRQb3MsIHBvcyAtIHN0YXJ0UG9zKSk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvcyA9IHBvcyArIHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLnN1YnN0cihzdGFydFBvcywgcG9zIC0gc3RhcnRQb3MpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYnl0ZVRvSGV4ID0gZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICB2YXIgaGV4ID0gTnVtYmVyKGQpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB3aGlsZSAoaGV4Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XHJcbiAgICAgICAgdmFyIHIgPSBbc107XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHMuaW1wb3J0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICByLnB1c2gocy5pbXBvcnRzW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgcyA9IHJbal07XHJcbiAgICAgICAgICAgIHZhciBuID0gW107XHJcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBzLnJ1bGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gcy5ydWxlc1trXS5jc3NUZXh0IHx8IHMucnVsZXNba10uc3R5bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmICghY3NzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdEJ5VG9rZW5zKGNzcywgJy1zdmctYmFja2dyb3VuZDonLCAnOycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNwbGl0V2l0aEJyYWNrZXRzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGZvciAobCA9IDA7IGwgPCB2YWx1ZXMubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IHNwbGl0QnlUb2tlbnModmFsdWVzW2xdLCAnbGluZWFyLWdyYWRpZW50KCcsICcpJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGcgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHNwbGl0V2l0aEJyYWNrZXRzKGcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDE7IG0gPCBhcmdzLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9wVmFsdWVzID0gc3BsaXRXaXRoQnJhY2tldHMoJC50cmltKGFyZ3NbbV0pLCAnICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcFZhbHVlcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcENvbG9yID0gJC50cmltKHN0b3BWYWx1ZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcE9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcENvbG9yID09ICd0cmFuc3BhcmVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JSZ2JhID0gc3BsaXRCeVRva2VucyhzdG9wQ29sb3IsICdyZ2JhKCcsICcpJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9wT2Zmc2V0ID0gJC50cmltKHN0b3BWYWx1ZXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JSZ2JhICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmdiYSA9IGNvbG9yUmdiYS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJnYmEubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yID0gJyMnICsgYnl0ZVRvSGV4KHJnYmFbMF0pICsgYnl0ZVRvSGV4KHJnYmFbMV0pICsgYnl0ZVRvSGV4KHJnYmFbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHkgPSByZ2JhWzNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1B4ID0gc3RvcE9mZnNldC5pbmRleE9mKCdweCcpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heE9mZnNldCA9IE1hdGgubWF4KG1heE9mZnNldCwgcGFyc2VJbnQoc3RvcE9mZnNldCwgMTApIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzLnB1c2goeyBvZmZzZXQ6IHN0b3BPZmZzZXQsIGNvbG9yOiBzdG9wQ29sb3IsIG9wYWNpdHk6IHN0b3BPcGFjaXR5LCBpc1B4OiBpc1B4IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcHNYTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFN0b3AgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDA7IG0gPCBzdG9wcy5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcHNbbV0uaXNQeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHNbbV0ub2Zmc2V0ID0gKChwYXJzZUludChzdG9wc1ttXS5vZmZzZXQsIDEwKSB8fCAwKSAvIChtYXhPZmZzZXQgLyAxMDApKSArICclJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wc1hNTCArPSAnPHN0b3Agb2Zmc2V0PVwiJyArIHN0b3BzW21dLm9mZnNldCArICdcIiBzdG9wLWNvbG9yPVwiJyArIHN0b3BzW21dLmNvbG9yICsgJ1wiIHN0b3Atb3BhY2l0eT1cIicgKyBzdG9wc1ttXS5vcGFjaXR5ICsgJ1wiLz4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobSA9PT0gc3RvcHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFN0b3AgPSBzdG9wc1ttXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWZ0ID0gJC50cmltKGFyZ3NbMF0pID09PSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9ICd4MT1cIjAlXCIgeTE9XCIwJVwiICcgKyAoaXNMZWZ0ID8gJ3gyPVwiMTAwJVwiIHkyPVwiMCVcIicgOiAneDI9XCIwJVwiIHkyPVwiMTAwJVwiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyYWRpZW50TGVuZ3RoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhPZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50TGVuZ3RoID0gbWF4T2Zmc2V0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSAoaXNMZWZ0ID8gJ3dpZHRoPVwiJyArIGdyYWRpZW50TGVuZ3RoICsgJ1wiIGhlaWdodD1cIjEwMCVcIicgOiAnd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiJyArIGdyYWRpZW50TGVuZ3RoICsgJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0U3RvcCAhPT0gbnVsbCAmJiBtYXhPZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgPSAnPHJlY3QgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNMZWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneD1cIicgKyBtYXhPZmZzZXQgKyAnXCIgeT1cIjBcIicgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4PVwiMFwiIHk9XCInICsgbWF4T2Zmc2V0ICsgJ1wiJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3R5bGU9XCJmaWxsOicgKyBsYXN0U3RvcC5jb2xvciArICc7b3BhY2l0eTonICsgbGFzdFN0b3Aub3BhY2l0eSArICc7XCIvPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ZnR3JhZGllbnQgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj48bGluZWFyR3JhZGllbnQgaWQ9XCJnXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCIgJyArIGRpcmVjdGlvbiArICc+JyArIHN0b3BzWE1MICsgJzwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD1cIjBcIiB5PVwiMFwiICcgKyBzaXplICsgJyBmaWxsPVwidXJsKCNnKVwiIC8+JyArIGxhc3QgKyAnPC9zdmc+JztcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbbF0gPSB2YWx1ZXNbbF0ucmVwbGFjZSgnbGluZWFyLWdyYWRpZW50KCcgKyBnICsgJyknLCAndXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKHN2Z0dyYWRpZW50KSArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuLnB1c2goeyBzOiBzLnJ1bGVzW2tdLnNlbGVjdG9yVGV4dCwgdjogJ2JhY2tncm91bmQ6ICcgKyB2YWx1ZXMuam9pbihcIixcIikgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIHMuYWRkUnVsZShuW2tdLnMsIG5ba10udik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBpZThcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA4KSByZXR1cm47XHJcbiAgICAkKCcuc2hhcGVzJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuc2libGluZ3MoJy5zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnei1pbmRleCcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGllN1xyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDcpIHJldHVybjtcclxuICAgIHZhciB0ZXh0YmxvY2tUZXh0cyA9ICQoJy50ZXh0YmxvY2sgZGl2W2NsYXNzJD1cIi10ZXh0XCJdJyk7XHJcbiAgICB0ZXh0YmxvY2tUZXh0cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGJUZXh0ID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgdmFsaWduID0gdGJUZXh0LmNzcygndmVydGljYWwtYWxpZ24nKSA/IHRiVGV4dC5jc3MoJ3ZlcnRpY2FsLWFsaWduJykgOiAndG9wJztcclxuICAgICAgICBpZiAodmFsaWduID09PSAnbWlkZGxlJykge1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRiVGV4dC53cmFwKCc8ZGl2Lz4nKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgdGJUZXh0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICctNTAlJyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnYXV0bydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJzUwJSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZ24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIHRiVGV4dC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAnYm90dG9tJzogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vKiBTZXQgd21vZGU9dHJhbnNwYXJlbnQgZm9yIHlvdXR1YmUgYW5kIG90aGVyIHZpZGVvIGhvc3RpbmdzIHRvIHNob3cgaXQgdW5kZXIgdGhlIG1lbnVzLCBsaWdodGJveGVzIGV0Yy4gKi9cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciB2aWRlbyA9IFtcInlvdXR1YmVcIl07XHJcblxyXG4gICAgJChcImlmcmFtZVtzcmNdXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpZnJhbWUgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBzcmMgPSBpZnJhbWUuYXR0cihcInNyY1wiKSxcclxuICAgICAgICAgICAgaXNWaWRlbyA9IGZhbHNlLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmlkZW8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNyYy50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmlkZW9baV0udG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzVmlkZW8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNyYy5sYXN0SW5kZXhPZihcIj9cIikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNyYyArPSBcIiZhbXA7d21vZGU9dHJhbnNwYXJlbnRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCI/d21vZGU9dHJhbnNwYXJlbnRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWZyYW1lLmF0dHIoXCJzcmNcIiwgc3JjKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAkKHdpbmRvdykuYmluZChcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7IG5hdmlnYXRvclJlc2l6ZUhhbmRsZXIoJChcImh0bWxcIikuaGFzQ2xhc3MoXCJyZXNwb25zaXZlXCIpKTsgfSk7XHJcbn0pO1xyXG5cclxudmFyIG5hdmlnYXRvclJlc2l6ZUhhbmRsZXIgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24pIHJldHVybjtcclxuICAgICAgICAkKFwiLnNsaWRlclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IHNsaWRlci53aWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgbmF2ID0gc2xpZGVyLnNpYmxpbmdzKFwiLnNsaWRlbmF2aWdhdG9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgbmF2V2lkdGggPSBuYXYub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICBpZiAobmF2Lmxlbmd0aCAmJiBuYXZXaWR0aCA8IHNsaWRlcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZWZ0IG9mZnNldFxyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBuYXYuYXR0cihcImRhdGEtbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIChtYXJnaW4gPSBjb250YWluZXJXaWR0aCAtIChvYmplY3RQb3NpdGlvbiArIG9iamVjdFdpZHRoKSkgPCAwXHJcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luID0gc2xpZGVyV2lkdGggLSBzbGlkZXJXaWR0aCAqIHBhcnNlRmxvYXQobGVmdCkgLyAxMDAgLSBuYXYub3V0ZXJXaWR0aChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFyZ2luIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdi5jc3MoXCJtYXJnaW4tbGVmdFwiLCBtYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxudmFyIHByb2Nlc3NFbGVtZW50TXVsdGlwbHlCZyA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoc2VsZWN0b3IsIGluZm8pIHtcclxuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8ICFpbmZvIHx8ICFpbmZvLmJnaW1hZ2UgfHwgIWluZm8uYmdwb3NpdGlvbiB8fCAhaW5mby5pbWFnZXMgfHwgIWluZm8ucG9zaXRpb25zKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSAkKCdoZWFkIHNjcmlwdFtzcmMqPVwic2NyaXB0LmpzXCJdJyk7XHJcbiAgICAgICAgaWYgKHNjcmlwdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcGF0aCA9IChzY3JpcHQuYXR0cignc3JjJykgfHwgJycpO1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodG1sID0gJyc7XHJcbiAgICAgICAgdmFyIGVsID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGJnaW1hZ2VzID0gaW5mby5pbWFnZXMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHZhciBiZ3Bvc2l0aW9ucyA9IGluZm8ucG9zaXRpb25zLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gYmdpbWFnZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGJnaW1hZ2UgPSAkLnRyaW0oYmdpbWFnZXNbaV0pO1xyXG4gICAgICAgICAgICBpZiAoYmdpbWFnZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgaW1nSWR4ID0gYmdpbWFnZS5sYXN0SW5kZXhPZignaW1hZ2VzLycpO1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gYmdpbWFnZS5zdWJzdHJpbmcoaW1nSWR4ICsgNywgYmdpbWFnZS5sZW5ndGggLSA2KTtcclxuICAgICAgICAgICAgZWwuYXBwZW5kKFwiPGRpdiBjbGFzcz1cXFwiaWU4Zml4IFwiICsgY2xhc3NOYW1lICsgXCJcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOlwiICsgYmdpbWFnZS5yZXBsYWNlKC8oaW1hZ2VzXFwvW15cXC9dKykkLywgcGF0aCArICckMScpICsgXCIgXCIgKyBiZ3Bvc2l0aW9uc1tpXSArIFwiIG5vLXJlcGVhdFxcXCI+PC9kaXY+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBpbmZvLmJnaW1hZ2UucmVwbGFjZSgvKGltYWdlc1xcL1teXFwvXSspJC8sIHBhdGggKyAnJDEnKSk7XHJcbiAgICAgICAgZWwuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnLCBcIjUwJVwiKTtcclxuICAgICAgICBlbC5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24teScsIFwiNTAlXCIpO1xyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxudmFyIHJlc3BvbnNpdmVOYXZpZ2F0b3IgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGhlYWRlck9iamVjdFJlc2l6ZXIgIT09ICd1bmRlZmluZWQnICYmIGhlYWRlck9iamVjdFJlc2l6ZXIuaXNQcmV2aWV3KSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBzaGVldCA9ICQoJy5zaGVldCcpO1xyXG4gICAgICAgIHZhciBzaGVldFdpZHRoID0gc2hlZXQub3V0ZXJXaWR0aCgpO1xyXG5cclxuICAgICAgICAkKFwiLnNsaWRlclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlcldpZHRoID0gY3VycmVudFNsaWRlci53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsaWRlck5hdmlnYXRvciA9IGN1cnJlbnRTbGlkZXIuc2libGluZ3MoXCIuc2xpZGVuYXZpZ2F0b3JcIik7XHJcbiAgICAgICAgICAgIGlmIChzbGlkZXJOYXZpZ2F0b3IubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2ZmID0gc2hlZXRMZWZ0RnVuYyhzaGVldCwgc2xpZGVyTmF2aWdhdG9yKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYWxjV2lkdGggPSBpc0NvbnRlbnRTbGlkZXIoc2xpZGVyTmF2aWdhdG9yKSA/IGN1cnJlbnRTbGlkZXJXaWR0aCA6IHNoZWV0V2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRvcldpZHRoID0gc2xpZGVyTmF2aWdhdG9yLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChzbGlkZXJOYXZpZ2F0b3IuYXR0cignZGF0YS1vZmZzZXQnKSB8fCAwLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGVmdCBvZmZzZXRcclxuICAgICAgICAgICAgICAgIHNsaWRlck5hdmlnYXRvci5jc3MoJ21hcmdpbi1sZWZ0JywgJzBweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gcGFyc2VGbG9hdChzbGlkZXJOYXZpZ2F0b3IuYXR0cihcImRhdGEtbGVmdFwiKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0xlZnQgPSBvZmYgKyB1bmlUb1B4KGxlZnQsIG5hdmlnYXRvcldpZHRoLCBjYWxjV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyTmF2aWdhdG9yLmNzcygnbGVmdCcsIG5ld0xlZnQgKyAncHgnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgdG9wIHRvIG9yaWdpbmFsIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXZpZ2F0b3IuY3NzKFwidG9wXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvcFxyXG4gICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRvckhlaWdodCA9IHNsaWRlck5hdmlnYXRvci5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVuaXkgPSBwYXJzZUZsb2F0KHNsaWRlck5hdmlnYXRvci5hdHRyKCdkYXRhLXRvcCcpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlckhlaWdodCA9IHBhcnNlSW50KGN1cnJlbnRTbGlkZXIuY3NzKCdoZWlnaHQnKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1RvcCA9IHVuaVRvUHgodW5peSwgbmF2aWdhdG9ySGVpZ2h0LCBzbGlkZXJIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlck5hdmlnYXRvci5jc3MoXCJ0b3BcIiwgKG5ld1RvcCArIG9mZnNldCkgKyAncHgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgaWYgKHR5cGVvZiByZXNwb25zaXZlRGVzaWduID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgJCh3aW5kb3cpLmJpbmQoXCJyZXNpemVcIiwgcmVzcG9uc2l2ZU5hdmlnYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiBwYWdlSW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZVwiKTtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKFwibG9hZFwiLCBwYWdlSW5pdGlhbGl6ZSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAkKCduYXYubmF2JykuYWRkQ2xhc3MoXCJkZXNrdG9wLW5hdlwiKTtcclxufSk7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgndWwuaG1lbnU+bGk6bm90KDpmaXJzdC1jaGlsZCknKS5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImhtZW51LXNlcGFyYXRvclwiPiA8L3NwYW4+Jyk7IH0pO1xyXG59KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAkKFwidWwuaG1lbnUgYTpub3QoW2hyZWZdKVwiKS5hdHRyKCdocmVmJywgJyMnKS5jbGljayhmdW5jdGlvbiAoZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH0pO1xyXG59KTtcclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyogRml4IHdpZHRoIG9mIHN1Ym1lbnUgaXRlbXMuXHJcbiAgICAqIFRoZSB3aWR0aCBvZiBzdWJtZW51IGl0ZW0gY2FsY3VsYXRlZCBpbmNvcnJlY3RseSBpbiBJRTYtNy4gSUU2IGhhcyB3aWRlciBpdGVtcywgSUU3IGRpc3BsYXkgaXRlbXMgbGlrZSBzdGFpcnMuXHJcbiAgICAqL1xyXG4gICAgJC5lYWNoKCQoXCJ1bC5obWVudSB1bFwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXhTdWJpdGVtV2lkdGggPSAwO1xyXG4gICAgICAgIHZhciBzdWJtZW51ID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc3ViaXRlbSA9IG51bGw7XHJcbiAgICAgICAgJC5lYWNoKHN1Ym1lbnUuY2hpbGRyZW4oXCJsaVwiKS5jaGlsZHJlbihcImFcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3ViaXRlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzdWJpdGVtV2lkdGggPSBzdWJpdGVtLm91dGVyV2lkdGgoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAobWF4U3ViaXRlbVdpZHRoIDwgc3ViaXRlbVdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhTdWJpdGVtV2lkdGggPSBzdWJpdGVtV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3ViaXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgc3ViaXRlbUJvcmRlckxlZnQgPSBwYXJzZUludChzdWJpdGVtLmNzcyhcImJvcmRlci1sZWZ0LXdpZHRoXCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgdmFyIHN1Yml0ZW1Cb3JkZXJSaWdodCA9IHBhcnNlSW50KHN1Yml0ZW0uY3NzKFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgdmFyIHN1Yml0ZW1QYWRkaW5nTGVmdCA9IHBhcnNlSW50KHN1Yml0ZW0uY3NzKFwicGFkZGluZy1sZWZ0XCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgdmFyIHN1Yml0ZW1QYWRkaW5nUmlnaHQgPSBwYXJzZUludChzdWJpdGVtLmNzcyhcInBhZGRpbmctcmlnaHRcIiksIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICBtYXhTdWJpdGVtV2lkdGggLT0gc3ViaXRlbUJvcmRlckxlZnQgKyBzdWJpdGVtQm9yZGVyUmlnaHQgKyBzdWJpdGVtUGFkZGluZ0xlZnQgKyBzdWJpdGVtUGFkZGluZ1JpZ2h0O1xyXG4gICAgICAgICAgICBzdWJtZW51LmNoaWxkcmVuKFwibGlcIikuY2hpbGRyZW4oXCJhXCIpLmNzcyhcIndpZHRoXCIsIG1heFN1Yml0ZW1XaWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBzZXREaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZXRITWVudU9wZW5EaXJlY3Rpb24oe1xyXG4gICAgICAgICAgICBjb250YWluZXI6IFwiZGl2LnNoZWV0XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb250YWluZXI6IFwiI21haW5cIixcclxuICAgICAgICAgICAgbWVudUNsYXNzOiBcImhtZW51XCIsXHJcbiAgICAgICAgICAgIGxlZnRUb1JpZ2h0Q2xhc3M6IFwiaG1lbnUtbGVmdC10by1yaWdodFwiLFxyXG4gICAgICAgICAgICByaWdodFRvTGVmdENsYXNzOiBcImhtZW51LXJpZ2h0LXRvLWxlZnRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmICh0eXBlb2YgcmVzcG9uc2l2ZURlc2lnbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICQod2luZG93KS5vbigncmVzcG9uc2l2ZScsIHNldERpcmVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldERpcmVjdGlvbigpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBzZXRITWVudU9wZW5EaXJlY3Rpb24gPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIChmdW5jdGlvbihtZW51SW5mbykge1xyXG4gICAgICAgIHZhciBkZWZhdWx0Q29udGFpbmVyID0gJChtZW51SW5mby5kZWZhdWx0Q29udGFpbmVyKTtcclxuICAgICAgICBkZWZhdWx0Q29udGFpbmVyID0gZGVmYXVsdENvbnRhaW5lci5sZW5ndGggPiAwID8gZGVmYXVsdENvbnRhaW5lciA9ICQoZGVmYXVsdENvbnRhaW5lclswXSkgOiBudWxsO1xyXG5cclxuICAgICAgICAkKFwidWwuXCIgKyBtZW51SW5mby5tZW51Q2xhc3MgKyBcIj5saT51bFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHN1Ym1lbnUgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN1Ym1lbnVXaWR0aCA9IHN1Ym1lbnUub3V0ZXJXaWR0aChmYWxzZSk7XHJcbiAgICAgICAgICAgIHZhciBzdWJtZW51TGVmdCA9IHN1Ym1lbnUub2Zmc2V0KCkubGVmdDtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYWluQ29udGFpbmVyID0gc3VibWVudS5wYXJlbnRzKG1lbnVJbmZvLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIgPSBtYWluQ29udGFpbmVyLmxlbmd0aCA+IDAgPyBtYWluQ29udGFpbmVyID0gJChtYWluQ29udGFpbmVyWzBdKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gbWFpbkNvbnRhaW5lciB8fCBkZWZhdWx0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyTGVmdCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdWJtZW51TGVmdCArIHN1Ym1lbnVXaWR0aCA+PSBjb250YWluZXJMZWZ0ICsgY29udGFpbmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiByaWdodCB0byBsZWZ0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWVudS5hZGRDbGFzcyhtZW51SW5mby5yaWdodFRvTGVmdENsYXNzKS5maW5kKFwidWxcIikuYWRkQ2xhc3MobWVudUluZm8ucmlnaHRUb0xlZnRDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN1Ym1lbnVMZWZ0IDw9IGNvbnRhaW5lckxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBsZWZ0IHRvIHJpZ2h0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWVudS5hZGRDbGFzcyhtZW51SW5mby5sZWZ0VG9SaWdodENsYXNzKS5maW5kKFwidWxcIikuYWRkQ2xhc3MobWVudUluZm8ubGVmdFRvUmlnaHRDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbnZhciBtZW51RXh0ZW5kZWRDcmVhdGUgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2hlZXQgPSAkKFwiLnNoZWV0XCIpO1xyXG4gICAgICAgIHZhciBzaGVldExlZnQgPSBzaGVldC5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHZhciBzaGVldFdpZHRoID0gc2hlZXQud2lkdGgoKTtcclxuXHJcbiAgICAgICAgJChcIi5obWVudT5saVwiKS5lYWNoKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgdmFyIGl0bSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzdWJtID0gaXRtLmNoaWxkcmVuKFwidWxcIik7XHJcbiAgICAgICAgICAgIGlmIChzdWJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICBpdG0ucmVtb3ZlQ2xhc3MoXCJleHQgZXh0LXIgZXh0LWxcIik7XHJcbiAgICAgICAgICAgIGl0bS5jc3MoXCJ3aWR0aFwiLCBcIlwiKS5maW5kKFwiLmV4dC1vZmYsLmV4dC1tLC5leHQtbCwuZXh0LXJcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHN1Ym0uY2hpbGRyZW4oXCJsaVwiKS5jaGlsZHJlbihcImFcIikuY3NzKFwid2lkdGhcIiwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgbHcgPSAwLCBydyA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VibS5hdHRyKFwiZGF0YS1leHQtbFwiKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygc3VibS5hdHRyKFwiZGF0YS1leHQtclwiKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgbHcgPSBwYXJzZUludChzdWJtLmF0dHIoXCJkYXRhLWV4dC1sXCIpLCAxMCkgKyAwO1xyXG4gICAgICAgICAgICAgICAgcncgPSBwYXJzZUludChzdWJtLmF0dHIoXCJkYXRhLWV4dC1yXCIpLCAxMCkgKyAwO1xyXG4gICAgICAgICAgICAgICAgaXRtLmFkZENsYXNzKFwiZXh0LXJcIikuYWRkQ2xhc3MoXCJleHQtbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBsdHIgPSAhc3VibS5oYXNDbGFzcyhcImhtZW51LXJpZ2h0LXRvLWxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBpdG0uYWRkQ2xhc3MobHRyID8gXCJleHQtclwiIDogXCJleHQtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNoYWRvdyA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzdWJtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBsbmsgPSBpdG0uY2hpbGRyZW4oXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxua1dpZHRoID0gbG5rLm91dGVyV2lkdGgoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXRtLmNzcyhcIndpZHRoXCIsIE1hdGgucm91bmQocGFyc2VGbG9hdChsbmtXaWR0aCwgMTApKSArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudWJhck1hcmdpbiA9IDQgKiAyOyAvLyBtYXJnaW4gKiAyIHNpZGVzXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudWJhckJvcmRlciA9IDEgKiAyOyAvLyBib3JkZXIgMSBzaWRlXHJcbiAgICAgICAgICAgICAgICB2YXIgc3VibVdpZHRoID0gc3VibS53aWR0aCgpICsgc2hhZG93ICsgbWVudWJhck1hcmdpbiArIG1lbnViYXJCb3JkZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHN1Ym1XaWR0aCAtIGxua1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgJChcIjxkaXYgY2xhc3M9XFxcImV4dC1vZmZcXFwiPjwvZGl2PlwiKS5pbnNlcnRCZWZvcmUobG5rKTtcclxuICAgICAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPVxcXCJleHQtbVxcXCI+PC9kaXY+XCIpLmluc2VydEJlZm9yZShsbmspO1xyXG4gICAgICAgICAgICAgICAgaWYgKHcgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Ym1BID0gc3VibS5jaGlsZHJlbihcImxpXCIpLmNoaWxkcmVuKFwiYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcEwgPSBwYXJzZUludChzdWJtQS5jc3MoXCJwYWRkaW5nLWxlZnRcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcFIgPSBwYXJzZUludChzdWJtQS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpLnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJMID0gcGFyc2VJbnQoc3VibUEuY3NzKFwiYm9yZGVyLWxlZnRcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYlIgPSBwYXJzZUludChzdWJtQS5jc3MoXCJib3JkZXItcmlnaHRcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtLmNoaWxkcmVuKFwibGlcIikuY2hpbGRyZW4oXCJhXCIpLmNzcyhcIndpZHRoXCIsIChsbmtXaWR0aCAtIHBMIC0gcFIgLSBiTCAtIGJSKSArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibVdpZHRoID0gc3VibS53aWR0aCgpICsgc2hhZG93ICsgbWVudWJhck1hcmdpbiArIG1lbnViYXJCb3JkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdyA9IHN1Ym1XaWR0aCAtIGxua1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChcIjxkaXYgY2xhc3M9XFxcImV4dC1sXFxcIiBzdHlsZT1cXFwid2lkdGg6IFwiICsgKGx3ID4gMCA/IGx3IDogTWF0aC5yb3VuZChwYXJzZUZsb2F0KHcsIDEwKSkpICsgXCJweDtcXFwiPjwvZGl2PlwiKS5pbnNlcnRCZWZvcmUobG5rKTtcclxuICAgICAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPVxcXCJleHQtclxcXCIgc3R5bGU9XFxcIndpZHRoOiBcIiArIChydyA+IDAgPyBydyA6IE1hdGgucm91bmQocGFyc2VGbG9hdCh3LCAxMCkpKSArIFwicHg7XFxcIj48L2Rpdj5cIikuaW5zZXJ0QmVmb3JlKGxuayk7XHJcbiAgICAgICAgICAgICAgICBpdG0uYWRkQ2xhc3MoXCJleHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcbmpRdWVyeSh3aW5kb3cpLmxvYWQobWVudUV4dGVuZGVkQ3JlYXRlKTtcclxuXHJcblxyXG4vKiBJY29ucyBpbiBIZWFkZXIgc2hvdWxkIGhhdmUgZGlzcGxheSBibG9jay5cclxuICogT3RoZXJ3aXNlLCBpbiBjYXNlIG9mIGlubGluZS1ibG9jayB0aGVyZSdzIGEgc3BhY2UgZ2FwIGluIHNvbWUgYnJvd3NlcnMgKE9wZXJhIDEyLjE2KSBhbmQgaWNvbiBpcyBjdXR0ZWQuXHJcbiAqL1xyXG5pZiAoYnJvd3Nlci5vcGVyYSkge1xyXG4gICAgalF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAgICAgJChcIi5oZWFkZXIgYVtjbGFzcyQ9J3RhZy1pY29uJ11cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmIChicm93c2VyLmllICYmIGJyb3dzZXIudmVyc2lvbiA8IDgpIHtcclxuICAgICAgICAkKHdpbmRvdykuYmluZCgncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gJCgnZGl2LmNvbnRlbnQnKTtcclxuICAgICAgICAgICAgdmFyIHMgPSBjLnBhcmVudCgpLmNoaWxkcmVuKCcubGF5b3V0LWNlbGw6bm90KC5jb250ZW50KScpO1xyXG4gICAgICAgICAgICB2YXIgdyA9IDA7XHJcbiAgICAgICAgICAgIGMuaGlkZSgpO1xyXG4gICAgICAgICAgICBzLmVhY2goZnVuY3Rpb24oKSB7IHcgKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpOyB9KTtcclxuICAgICAgICAgICAgYy53ID0gYy5wYXJlbnQoKS53aWR0aCgpOyBjLmNzcygnd2lkdGgnLCBjLncgLSB3ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgIGMuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAoISQoJ2h0bWwnKS5oYXNDbGFzcygnaWU3JykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCd1bC52bWVudSBsaTpub3QoOmZpcnN0LWNoaWxkKSx1bC52bWVudSBsaSBsaSBsaTpmaXJzdC1jaGlsZCx1bC52bWVudT5saT51bCcpLmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInZtZW51LXNlcGFyYXRvclwiPiA8L2Rpdj48ZGl2IGNsYXNzPVwidm1lbnUtc2VwYXJhdG9yLWJnXCI+IDwvZGl2PicpOyB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbnZhciBhcnRCdXR0b25TZXR1cCA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgJC5lYWNoKCQoXCJhLlwiICsgY2xhc3NOYW1lICsgXCIsIGJ1dHRvbi5cIiArIGNsYXNzTmFtZSArIFwiLCBpbnB1dC5cIiArIGNsYXNzTmFtZSksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgdmFyIGIgPSAkKHZhbCk7XHJcbiAgICAgICAgICAgIGlmICghYi5oYXNDbGFzcygnYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgICAgIGIuYWRkQ2xhc3MoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBiLnZhbChiLnZhbCgpLnJlcGxhY2UoL15cXHMqLywgJycpKS5jc3MoJ3pvb20nLCAnMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIubW91c2Vkb3duKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiLm1vdXNldXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiLm1vdXNlbGVhdmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbmpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBhcnRCdXR0b25TZXR1cChcImJ1dHRvblwiKTtcclxufSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24oJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgJCgnaW5wdXQuc2VhcmNoLWJ1dHRvbiwgZm9ybS5zZWFyY2ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ3ZhbHVlJywgJycpO1xyXG59KTtcclxuXHJcbnZhciBDb250cm9sID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihsYWJlbCwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIGNoQXR0ciA9IGxhYmVsLmZpbmQoJ2lucHV0W3R5cGU9XCInICt0eXBlICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgaWYgKGNoQXR0ciA9PT0gJ2NoZWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFiZWwubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXJlZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhYmVsLm1vdXNlb3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXJlZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhYmVsLm1vdXNlZG93bihmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5yZW1vdmVDbGFzcygnaG92ZXJlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGFiZWwubW91c2V1cChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5hZGRDbGFzcygnaG92ZXJlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAkKCcucGFnZXInKS5jb250ZW50cygpLmZpbHRlcihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSB0aGlzLlRFWFRfTk9ERTtcclxuICAgICAgICB9XHJcbiAgICApLnJlbW92ZSgpO1xyXG59KTtcclxudmFyIGZpeFJzc0ljb25MaW5lSGVpZ2h0ID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgJChcIi5cIiArIGNsYXNzTmFtZSkuY3NzKFwibGluZS1oZWlnaHRcIiwgJChcIi5cIiArIGNsYXNzTmFtZSkuaGVpZ2h0KCkgKyBcInB4XCIpO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgcnNzSWNvbnMgPSAkKFwiLnJzcy10YWctaWNvblwiKTtcclxuICAgIGlmIChyc3NJY29ucy5sZW5ndGgpe1xyXG4gICAgICAgIGZpeFJzc0ljb25MaW5lSGVpZ2h0KFwicnNzLXRhZy1pY29uXCIpO1xyXG4gICAgICAgIGlmIChicm93c2VyLmllICYmIGJyb3dzZXIudmVyc2lvbiA8IDkpIHtcclxuICAgICAgICAgICAgcnNzSWNvbnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJC50cmltKCQodGhpcykuaHRtbCgpKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwidmVydGljYWwtYWxpZ25cIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbnZhciBUaGVtZUxpZ2h0Ym94ID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW1hZ2VzID0gJChcIi5saWdodGJveFwiKTtcclxuICAgICAgICB2YXIgY3VycmVudDtcclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoY3RybCkge1xyXG4gICAgICAgICAgICAkKFwiLmxpZ2h0Ym94XCIpLm1vdXNldXAoeyBfY3RybDogY3RybCB9LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChlLmRhdGEuX2N0cmwgPT09IHRydWUgJiYgIWUuY3RybEtleSkgfHwgKGUud2hpY2ggJiYgZS53aGljaCAhPT0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzID0gJChcIi5saWdodGJveFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gaW1hZ2VzLmluZGV4KHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbWdDb250YWluZXIgPSAkKCcubGlnaHRib3gtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltZ0NvbnRhaW5lci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtd3JhcHBlclwiPicpLmNzcygnbGluZS1oZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkgKyBcInB4XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQoXCJib2R5XCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlQnRuID0gJCgnPGRpdiBjbGFzcz1cImNsb3NlXCI+PGRpdiBjbGFzcz1cImN3XCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJjY3dcIj4gPC9kaXY+PGRpdiBjbGFzcz1cImNsb3NlLWFsdFwiPiYjMTAwMDc7PC9kaXY+PC9kaXY+JylcclxuICAgICAgICAgICAgICAgIC5jbGljayhjbG9zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG4uYXBwZW5kVG8oaW1nQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3dzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbW92ZShjdXJyZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZShpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2hvd0Vycm9yKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBpbmRleDtcclxuXHJcbiAgICAgICAgICAgICQoXCIubGlnaHRib3gtd3JhcHBlciAubGlnaHRib3gtaW1hZ2U6bm90KC5hY3RpdmUpXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9ICQoXCIubGlnaHRib3gtd3JhcHBlciAuYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCgnPGltZyBjbGFzcz1cImxpZ2h0Ym94LWltYWdlXCIgYWx0PVwiXCIgc3JjPVwiJyArIGdldEZ1bGxJbWdTcmMoJChpbWFnZXNbY3VycmVudF0pLmF0dHIoXCJzcmNcIikpICsgJ1wiIC8+JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlKGN1cnJlbnQgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZS5hZnRlcih0YXJnZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyXCIpLmFwcGVuZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaG93QXJyb3dzKCk7XHJcbiAgICAgICAgICAgIHNob3dMb2FkZXIodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBiaW5kTW91c2UoJChcIi5saWdodGJveC13cmFwcGVyXCIpLmFkZCh0YXJnZXQpKTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdGl2ZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQuZXJyb3IoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWRlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXR0cihcInNyY1wiLCAkKGltYWdlc1tjdXJyZW50XSkuYXR0cihcInNyY1wiKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Fycm93cygpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIubGlnaHRib3gtd3JhcHBlciAuYXJyb3dcIikubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJhcnJvdyBsZWZ0XCI+PGRpdiBjbGFzcz1cImFycm93LXQgY2N3XCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJhcnJvdy1iIGN3XCI+IDwvZGl2PjxkaXYgY2xhc3M9XCJhcnJvdy1sZWZ0LWFsdFwiPiYjODU5Mjs8L2Rpdj48L2Rpdj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFwidG9wXCIsICQod2luZG93KS5oZWlnaHQoKSAvIDIgLSA0MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZShjdXJyZW50IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyXCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwiYXJyb3cgcmlnaHRcIj48ZGl2IGNsYXNzPVwiYXJyb3ctdCBjd1wiPiA8L2Rpdj48ZGl2IGNsYXNzPVwiYXJyb3ctYiBjY3dcIj4gPC9kaXY+PGRpdiBjbGFzcz1cImFycm93LXJpZ2h0LWFsdFwiPiYjODU5NDs8L2Rpdj48L2Rpdj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFwidG9wXCIsICQod2luZG93KS5oZWlnaHQoKSAvIDIgLSA0MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZShjdXJyZW50ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5hcnJvdy5sZWZ0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmFycm93LmxlZnRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmFycm93LnJpZ2h0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmFycm93LnJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dFcnJvcihlbmFibGUpIHtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyXCIpLmFwcGVuZCgkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtZXJyb3JcIj5UaGUgcmVxdWVzdGVkIGNvbnRlbnQgY2Fubm90IGJlIGxvYWRlZC48YnIvPlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuPC9kaXY+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7IFwidG9wXCI6ICQod2luZG93KS5oZWlnaHQoKSAvIDIgLSA2MCwgXCJsZWZ0XCI6ICQod2luZG93KS53aWR0aCgpIC8gMiAtIDE3MCB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXIgLmxpZ2h0Ym94LWVycm9yXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93TG9hZGVyKGVuYWJsZSkge1xyXG4gICAgICAgICAgICBpZiAoIWVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5saWdodGJveC13cmFwcGVyIC5sb2FkaW5nXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cImxvYWRpbmdcIj4gPC9kaXY+JykuY3NzKHsgXCJ0b3BcIjogJCh3aW5kb3cpLmhlaWdodCgpIC8gMiAtIDE2LCBcImxlZnRcIjogJCh3aW5kb3cpLndpZHRoKCkgLyAyIC0gMTYgfSkuYXBwZW5kVG8oJChcIi5saWdodGJveC13cmFwcGVyXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmxpZ2h0Ym94LXdyYXBwZXJcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYmluZE1vdXNlKGltZykge1xyXG4gICAgICAgICAgICBpbWcuYmluZCgnbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JnRXZlbnQgPSB3aW5kb3cuZXZlbnQgfHwgZS5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gKG9yZ0V2ZW50LndoZWVsRGVsdGEgPyBvcmdFdmVudC53aGVlbERlbHRhIDogb3JnRXZlbnQuZGV0YWlsICogLTEpID4gMCA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgIG1vdmUoY3VycmVudCArIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSBvbiBtaWRkbGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RnVsbEltZ1NyYyhzcmMpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gc3JjLnN1YnN0cmluZygwLCBzcmMubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgICAgICAgICAgIHZhciBleHQgPSBzcmMuc3Vic3RyaW5nKHNyYy5sYXN0SW5kZXhPZignLicpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lICsgXCItbGFyZ2VcIiArIGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgbmV3IFRoZW1lTGlnaHRib3goKS5pbml0KCk7XHJcbn0pO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAvLyB0cmFuc2l0aW9uICYmIHRyYW5zaXRpb25FbmQgJiYgYnJvd3NlciBwcmVmaXhcclxuICAgICQuc3VwcG9ydC50aGVtZVRyYW5zaXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aGlzQm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICAgICAgICB0aGlzU3R5bGUgPSB0aGlzQm9keS5zdHlsZSxcclxuICAgICAgICAgICAgc3VwcG9ydCA9IHRoaXNTdHlsZS50cmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXNTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXNTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXNTdHlsZS5Nc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpc1N0eWxlLk9UcmFuc2l0aW9uICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHN1cHBvcnQgJiYge1xyXG4gICAgICAgICAgICBldmVudDogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZFwiO1xyXG4gICAgICAgICAgICB9KSgpLFxyXG4gICAgICAgICAgICBwcmVmaXg6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYTogXCItby1cIixcclxuICAgICAgICAgICAgICAgICAgICBmaXJlZm94OiBcIi1tb3otXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lOiBcIi13ZWJraXQtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2FmYXJpOiBcIi13ZWJraXQtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWU6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1bYnJvd3Nlci5uYW1lXSB8fCBcIlwiKTtcclxuICAgICAgICAgICAgfSkoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHdpbmRvdy5CYWNrZ3JvdW5kSGVscGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXMgPSBbXTtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gXCJuZXh0XCI7XHJcbiAgICAgICAgdmFyIG1vdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IDA7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IDA7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXIgPSAxO1xyXG4gICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gMDtcclxuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSAwO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAobW90aW9uVHlwZSwgZGlyLCBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBkaXI7XHJcbiAgICAgICAgICAgIG1vdGlvbiA9IG1vdGlvblR5cGU7XHJcbiAgICAgICAgICAgIHNsaWRlcyA9IFtdO1xyXG4gICAgICAgICAgICB3aWR0aCA9IDA7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIG11bHRpcGxpZXIgPSAxO1xyXG4gICAgICAgICAgICBvcmlnaW5hbFdpZHRoID0gMDtcclxuICAgICAgICAgICAgb3JpZ2luYWxIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NTbGlkZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBtb2RpZnkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKGVsZW1lbnQsIG51bGwpO1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgYmdQb3NpdGlvbiA9IGVsZW1lbnQuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9ucyA9IGJnUG9zaXRpb24uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAkLmVhY2gocG9zaXRpb25zLCBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJC50cmltKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9zaXRpb24uc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHplcm9WYWx1ZSA9IGJyb3dzZXIuaWUgJiYgYnJvd3Nlci52ZXJzaW9uID49IDEwID8gMC4xIDogMDtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBwb2ludFswXS5pbmRleE9mKCclJykgPT09IC0xID8gcGFyc2VGbG9hdChwb2ludFswXSwgMTApIDogemVyb1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcG9pbnRbMV0uaW5kZXhPZignJScpID09PSAtMSA/IHBhcnNlRmxvYXQocG9pbnRbMV0sIDEwKSA6IHplcm9WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MucHVzaCh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5wdXNoKHsgeDogemVyb1ZhbHVlLCB5OiB6ZXJvVmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJpbWFnZXNcIjogZWxlbWVudC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIpLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOiBlbGVtZW50LmNzcyhcImJhY2tncm91bmQtc2l6ZVwiKSxcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25zXCI6IHBvc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb2RpZnkpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBpbml0aWFsU2l6ZSkge1xyXG4gICAgICAgICAgICB3aWR0aCA9IGVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgaWYgKGluaXRpYWxTaXplICYmIHBhcnNlSW50KGluaXRpYWxTaXplLndpZHRoLCAxMCkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsV2lkdGggPSBwYXJzZUludChpbml0aWFsU2l6ZS53aWR0aCwgMTApO1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxIZWlnaHQgPSBwYXJzZUludChpbml0aWFsU2l6ZS5oZWlnaHQsIDEwKTtcclxuICAgICAgICAgICAgICAgIGlmIChtb3Rpb24gPT09IFwiZmFkZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGVsZW1lbnQuY2hpbGRyZW4oKSwgZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsIGdldENzc1Bvc2l0aW9ucyhzbGlkZXNbaV0ucG9zaXRpb25zLCB7IHg6IDAsIHk6IDAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBiZyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgc2l6ZXMgPSBbXTtcclxuICAgICAgICAgICAgJC5lYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaSwgbykge1xyXG4gICAgICAgICAgICAgICAgYmcucHVzaChvLmltYWdlcyk7XHJcbiAgICAgICAgICAgICAgICBzaXplcy5wdXNoKG8uc2l6ZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IGJnLmpvaW4oXCIsIFwiKSxcclxuICAgICAgICAgICAgICAgIC8vXCJiYWNrZ3JvdW5kLXNpemVcIjogc2l6ZXMuam9pbihcIiwgXCIpLFxyXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbWVudCwgaXRlbXMpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IFtdO1xyXG4gICAgICAgICAgICAkLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpLCBvKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MucHVzaChvLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIjogcG9zLmpvaW4oXCIsIFwiKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1tpbmRleF0gfHwgbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm5leHQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIG5leHQ7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gKGluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9IGluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBzbGlkZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzW25leHRdO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBmdW5jdGlvbiAocHJldiwgbmV4dCwgbW92ZSkge1xyXG4gICAgICAgICAgICB2YXIgcHJldkl0ZW0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICAgICAgdmFyIG5leHRJdGVtID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgICAgIHZhciBpc0RpcmVjdGlvbk5leHQgPSBkaXJlY3Rpb24gPT09IFwibmV4dFwiO1xyXG4gICAgICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSAtKG9yaWdpbmFsSGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsT2Zmc2V0ID0gLShvcmlnaW5hbFdpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgaWYgKG1vdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZJdGVtLnkgPSBuZXh0SXRlbS55ID0gLShvcmlnaW5hbEhlaWdodCAtIGhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgcHJldkl0ZW0ueCA9IGhvcml6b250YWxPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS54ID0gKGlzRGlyZWN0aW9uTmV4dCA/IG9yaWdpbmFsV2lkdGggOiAtb3JpZ2luYWxXaWR0aCkgKyBob3Jpem9udGFsT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2SXRlbS54ICs9IGlzRGlyZWN0aW9uTmV4dCA/IC1vcmlnaW5hbFdpZHRoIDogb3JpZ2luYWxXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS54ICs9IGlzRGlyZWN0aW9uTmV4dCA/IC1vcmlnaW5hbFdpZHRoIDogb3JpZ2luYWxXaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICAgICAgcHJldkl0ZW0ueCA9IG5leHRJdGVtLnggPSBob3Jpem9udGFsT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgcHJldkl0ZW0ueSA9IHZlcnRpY2FsT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0ueSA9IChpc0RpcmVjdGlvbk5leHQgPyBvcmlnaW5hbEhlaWdodCA6IC1vcmlnaW5hbEhlaWdodCkgKyB2ZXJ0aWNhbE9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkl0ZW0ueSArPSBpc0RpcmVjdGlvbk5leHQgPyAtb3JpZ2luYWxIZWlnaHQgOiBvcmlnaW5hbEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS55ICs9IGlzRGlyZWN0aW9uTmV4dCA/IC1vcmlnaW5hbEhlaWdodCA6IG9yaWdpbmFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgaWYgKCEhcHJldikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBpbWFnZXM6IHByZXYuaW1hZ2VzLCBwb3NpdGlvbnM6IGdldENzc1Bvc2l0aW9ucyhwcmV2LnBvc2l0aW9ucywgcHJldkl0ZW0pLCBzaXplczogcHJldi5zaXplcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISFuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IGltYWdlczogbmV4dC5pbWFnZXMsIHBvc2l0aW9uczogZ2V0Q3NzUG9zaXRpb25zKG5leHQucG9zaXRpb25zLCBuZXh0SXRlbSksIHNpemVzOiBuZXh0LnNpemVzIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBmdW5jdGlvbiAoY29udGFpbmVyLCBvbikge1xyXG4gICAgICAgICAgICBjb250YWluZXIuY3NzKCQuc3VwcG9ydC50aGVtZVRyYW5zaXRpb24ucHJlZml4ICsgXCJ0cmFuc2l0aW9uXCIsIG9uID8gXCJiYWNrZ3JvdW5kLXBvc2l0aW9uIFwiICsgdHJhbnNpdGlvbkR1cmF0aW9uICsgXCIgZWFzZS1pbi1vdXRcIiA6IFwiXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldENzc1Bvc2l0aW9ucyhwb3NpdGlvbnMsIG9mZnNldCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0LnggPSBvZmZzZXQueCB8fCAwO1xyXG4gICAgICAgICAgICBvZmZzZXQueSA9IG9mZnNldC55IHx8IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgocG9zaXRpb25zW2ldLnggKiAxICsgb2Zmc2V0LngpICsgXCJweCBcIiArIChwb3NpdGlvbnNbaV0ueSAqIDEgKyBvZmZzZXQueSkgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHZhciBUaGVtZVNsaWRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZXR0aW5ncykge1xyXG5cclxuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIHZhciBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBlbGVtZW50LmZpbmQoXCIuYWN0aXZlXCIpLnBhcmVudCgpLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGxhc3QgPSBmYWxzZTtcclxuICAgICAgICB2YXIgcnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIHtcclxuICAgICAgICAgICAgXCJhbmltYXRpb25cIjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibmV4dFwiLFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6IDYwMCxcclxuICAgICAgICAgICAgXCJwYXVzZVwiOiAyNTAwLFxyXG4gICAgICAgICAgICBcImF1dG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJyZXBlYXRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJuYXZpZ2F0b3JcIjogbnVsbCxcclxuICAgICAgICAgICAgXCJjbGlja2V2ZW50c1wiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImhvdmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiaGVscGVyXCI6IG51bGxcclxuICAgICAgICB9LCBzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG5leHQpIHtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBlbGVtZW50LmZpbmQoXCIuYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0gPSBuZXh0IHx8IGFjdGl2ZUl0ZW1bZGlyZWN0aW9uXSgpLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJEaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgPyBcImZvcndhcmRcIiA6IFwiYmFja1wiLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQgPSBkaXJlY3Rpb24gPT09IFwibmV4dFwiID8gXCJmaXJzdFwiIDogXCJsYXN0XCIsXHJcbiAgICAgICAgICAgICAgICBtb3ZpbmcgPSBpbnRlcnZhbCxcclxuICAgICAgICAgICAgICAgIHNsaWRlciA9IHRoaXMsIHRtcDtcclxuXHJcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAobW92aW5nKSB7IHRoaXMuc3RvcCh0cnVlKTsgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFuZXh0SXRlbS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtID0gZWxlbWVudC5maW5kKFwiLnNsaWRlLWl0ZW1cIilbcmVzZXRdKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MucmVwZWF0KSB7IGxhc3QgPSB0cnVlOyBhY3RpdmUgPSBmYWxzZTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkLnN1cHBvcnQudGhlbWVUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0bXAgPSBuZXh0SXRlbS5nZXQoMCkub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0uYWRkQ2xhc3MoaW5uZXJEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0uYWRkQ2xhc3MoaW5uZXJEaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudHJpZ2dlcihcImJlZm9yZVNsaWRlXCIsIGNoaWxkcmVuLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbmUoJC5zdXBwb3J0LnRoZW1lVHJhbnNpdGlvbi5ldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLnJlbW92ZUNsYXNzKHNsaWRlci5zZXR0aW5ncy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhpbm5lckRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGlubmVyRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50cmlnZ2VyKFwiYWZ0ZXJTbGlkZVwiLCBjaGlsZHJlbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRyaWdnZXIoXCJiZWZvcmVTbGlkZVwiLCBjaGlsZHJlbi5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudHJpZ2dlcihcImFmdGVyU2xpZGVcIiwgY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShuZXh0SXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobW92aW5nKSB7IHRoaXMuc3RhcnQoKTsgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGUgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hpbGRyZW4uaW5kZXgocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAkKHRoaXMuc2V0dGluZ3MubmF2aWdhdG9yKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVxKGluZGV4KS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRvID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVJdGVtID0gZWxlbWVudC5maW5kKFwiLmFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gYWN0aXZlSXRlbS5wYXJlbnQoKS5jaGlsZHJlbigpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBjaGlsZHJlbi5pbmRleChhY3RpdmVJdGVtKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlciA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSkgfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9uZShcImFmdGVyU2xpZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci50byhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoaW5kZXggPiBhY3RpdmVJbmRleCA/IFwibmV4dFwiIDogXCJwcmV2XCIsICQoY2hpbGRyZW5baW5kZXhdKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3QpIHsgdGhpcy5zdG9wKCk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKFwibmV4dFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0KSB7IHRoaXMuc3RvcCgpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShcInByZXZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghIWZvcmNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCQucHJveHkodGhpcy5uZXh0LCB0aGlzKSwgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoJC5wcm94eSh0aGlzLm5leHQsIHRoaXMpLCB0aGlzLnNldHRpbmdzLnBhdXNlKTtcclxuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKHBhdXNlKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBpbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJ1bm5pbmcgPSAhIXBhdXNlO1xyXG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShjaGlsZHJlbi5maWx0ZXIoXCIuYWN0aXZlXCIpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xpY2tldmVudHMpIHtcclxuICAgICAgICAgICAgJCh0aGlzLnNldHRpbmdzLm5hdmlnYXRvcikub24oXCJjbGlja1wiLCBcImFcIiwgeyBzbGlkZXI6IHRoaXMgfSwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSBjaGlsZHJlbi5pbmRleChjaGlsZHJlbi5maWx0ZXIoXCIuYWN0aXZlXCIpKTtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oKS5pbmRleCgkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnNsaWRlci50byhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmhvdmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZCh0aGlzLnNldHRpbmdzLm5hdmlnYXRvcilcclxuICAgICAgICAgICAgICAgICAgIC5hZGQoZWxlbWVudC5zaWJsaW5ncyhcIi5zaGFwZXNcIikpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpICYmICFsYXN0KSB7IHNsaWRlci5zdG9wKHRydWUpOyB9XHJcbiAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSAmJiAhbGFzdCkgeyBzbGlkZXIuc3RhcnQoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLnRoZW1lU2xpZGVyID0gZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gZWxlbWVudC5kYXRhKFwic2xpZGVyXCIpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIgJiYgYXJnO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IFRoZW1lU2xpZGVyKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhKFwic2xpZGVyXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIiAmJiBkYXRhW2FyZ10pIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbYXJnXSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc2V0dGluZ3MuYXV0byAmJiBlbGVtZW50LmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxuXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5yZXNpemVEYXRhID09PSAndW5kZWZpbmVkJykgd2luZG93LnJlc2l6ZURhdGEgPSB7fTtcbndpbmRvdy5yZXNpemVEYXRhLmhlYWRlclBhZ2VXaWR0aCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cuZGVmYXVsdFJlc3BvbnNpdmVEYXRhID09PSAndW5kZWZpbmVkJykgd2luZG93LmRlZmF1bHRSZXNwb25zaXZlRGF0YSA9IFtmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgXTtcblxucmVzaXplRGF0YVsnaGVhZGxpbmUnXSA9IHtcbiAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuMzksIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjM5LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC4zOSwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuMzksIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjM5LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgXSxcbiAgIGFyZWE6IHtcbiAgICAgICB4OiAwLFxuICAgICAgIHk6IDBcbiAgIH0sXG4gICB3aWR0aDogMjI0LFxuICAgaGVpZ2h0OiA0MyxcbiAgIGF1dG9XaWR0aDogdHJ1ZX07XG5cbnJlc2l6ZURhdGFbJ3Nsb2dhbiddID0ge1xuICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC41OCwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuNTgsIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICAgICB7IGxlZnQ6IDAuNSwgdG9wOiAwLjU4LCB2aXNpYmxlOiB0cnVlIH0sIFxuICAgICAgICAgICAgICAgICAgeyBsZWZ0OiAwLjUsIHRvcDogMC41OCwgdmlzaWJsZTogdHJ1ZSB9LCBcbiAgICAgICAgICAgICAgICAgIHsgbGVmdDogMC41LCB0b3A6IDAuNTgsIHZpc2libGU6IHRydWUgfSwgXG4gICAgICAgICAgICAgICBdLFxuICAgYXJlYToge1xuICAgICAgIHg6IDAsXG4gICAgICAgeTogMFxuICAgfSxcbiAgIHdpZHRoOiAxNDAsXG4gICBoZWlnaHQ6IDE4LFxuICAgYXV0b1dpZHRoOiB0cnVlfTtcblxuLy8gdXNlZCB0byBhcHBseSBjb21waWNhdGVkIHZhbHVlcyBpbiBzdHlsZSBsaWtlICchaW1wb3J0YW50IVxyXG5mdW5jdGlvbiBhcHBseUNzcyhvYmplY3QsIHBhcmFtLCB2YWx1ZSkge1xyXG4gICAgdmFyIHJnID0gbmV3IFJlZ0V4cChwYXJhbSArICdcXHMqOlxccypbXjtdKzsnLCBcImlcIik7XHJcbiAgICB2YXIgc3R5bGUgPSBvYmplY3QuYXR0cignc3R5bGUnKTtcclxuICAgIHZhciBzdHIgPSBwYXJhbSArICc6ICcgKyB2YWx1ZSArICc7JztcclxuICAgIGlmIChyZy50ZXN0KHN0eWxlKSkge1xyXG4gICAgICAgIHN0eWxlID0gc3R5bGUucmVwbGFjZShyZywgc3RyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0eWxlICs9ICc7ICcgKyBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IHVuaXZlcnNhbCBjb29yZCB0byBwaXhlbHNcclxuZnVuY3Rpb24gdW5pVG9QeCh1bmksIHNpemUsIHBhcmVudFNpemUpIHtcclxuICAgIHVuaSA9IHBhcnNlRmxvYXQodW5pIHx8ICcwJyk7XHJcbiAgICBpZiAodW5pIDwgMCkge1xyXG4gICAgICAgIHVuaSA9IHVuaSAqIHNpemU7XHJcbiAgICB9IGVsc2UgaWYgKHVuaSA+PSAxKSB7XHJcbiAgICAgICAgdW5pID0gcGFyZW50U2l6ZSAtICgyIC0gdW5pKSAqIHNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVuaSA9IHVuaSAqIChwYXJlbnRTaXplIC0gc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb250ZW50U2xpZGVyKG9iamVjdCkge1xyXG4gICAgdmFyIGlzSGVhZGVyID0gb2JqZWN0LnBhcmVudHMoJ2hlYWRlcicpLmxlbmd0aCA+IDA7XHJcbiAgICBpZiAoaXNIZWFkZXIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgaXNQYWdlU2xpZGVyID0gb2JqZWN0LnBhcmVudHMoJy5wYWdlc2xpZGVyJykubGVuZ3RoID4gMDtcclxuICAgIGlmIChpc1BhZ2VTbGlkZXIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaGVldExlZnRGdW5jKHNoZWV0LCBvYmplY3QpIHtcclxuICAgIHZhciBzaGVldExlZnQgPSBzaGVldC5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuICAgIHZhciBpc0hlYWRlciA9IG9iamVjdC5wYXJlbnRzKCdoZWFkZXInKS5sZW5ndGggPiAwO1xyXG4gICAgaWYgKGlzSGVhZGVyKSB7XHJcbiAgICAgICAgaWYgKHJlc2l6ZURhdGEuaGVhZGVyUGFnZVdpZHRoKSByZXR1cm4gc2hlZXRMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaXNQYWdlU2xpZGVyID0gb2JqZWN0LnBhcmVudHMoJy5wYWdlc2xpZGVyJykubGVuZ3RoID4gMDtcclxuICAgICAgICBpZiAoaXNQYWdlU2xpZGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNpemVEYXRhLnBhZ2VTbGlkZXJQYWdlV2lkdGgpIHJldHVybiBzaGVldExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG52YXIgaGVhZGVyT2JqZWN0UmVzaXplciA9IHtcclxuICAgIFxyXG4gICAgcG9zdEluaXQ6IGZhbHNlLFxyXG5cclxuICAgIHJlc2l6ZTogKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghaGVhZGVyT2JqZWN0UmVzaXplci5wb3N0SW5pdCAmJiB0eXBlb2YgcmVzcG9uc2l2ZURlc2lnbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vbigncmVzcG9uc2l2ZVJlc2l6ZScsIGhlYWRlck9iamVjdFJlc2l6ZXIucmVzaXplKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlck9iamVjdFJlc2l6ZXIucG9zdEluaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2l2ZVR5cGUgPSAwO1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBkb24ndCB1c2UgZnVsbCBjdXN0b20gcmVzcG9uc2l2ZSBzbyB3ZSBNVVNUIGNsZWFudXAgYWxsIHN0eWxlc1xyXG4gICAgICAgICAgICB2YXIgY2xlYW5VcFN0eWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB3aGVuIHVzZSBkZWZhdWx0IHJlc3BvIHNvIHdoaWxlIGluIGRlc2t0b3AgbW9kZSBhbHdheXMgdXNlIDAtdHlwZSwgaW4gb3RoZXIgY2FzZSBjbGVhbnVwIG91ciBzdHlsZXNcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zaXZlRGVzaWduICE9PSAndW5kZWZpbmVkJyAmJiBcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UmVzcG9uc2l2ZURhdGFbcmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlVHlwZUlkeF0gJiZcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5VcFN0eWxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2l2ZURlc2lnbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLnJlc3BvbnNpdmVUeXBlID09PSAndGFibGV0bGFuZHNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlVHlwZSA9PT0gJ3RhYmxldHBvcnRyYWl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlVHlwZSA9PT0gJ3Bob25lbGFuZHNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVUeXBlID0gMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlVHlwZSA9PT0gJ3Bob25lcG9ydHJhaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVR5cGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSAkKCcuc2hlZXQnKTtcclxuICAgICAgICAgICAgdmFyIHNoZWV0V2lkdGggPSBzaGVldC5vdXRlcldpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY3NzUHJlZml4ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGh0bWwgc2hhcGVzXHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJRdWVyeSA9ICdoZWFkZXIuaGVhZGVyIC5zaGFwZXM+KiwgaGVhZGVyLmhlYWRlciAudGV4dGJsb2NrLCBoZWFkZXIuaGVhZGVyPi5oZWFkbGluZSwgaGVhZGVyLmhlYWRlcj4uc2xvZ2FuLCBoZWFkZXIuaGVhZGVyPi5wb3NpdGlvbmNvbnRyb2wsIGhlYWRlci5oZWFkZXI+LmxvZ28nO1xyXG4gICAgICAgICAgICB2YXIgcGFnZVNsaWRlclF1ZXJ5ID0gJy5wYWdlc2xpZGVyIC5zbGlkZS1pdGVtPionO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyT2JqZWN0UmVzaXplci5pc1ByZXZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlclF1ZXJ5ID0gJ2hlYWRlciAuc2xpZGVyJztcclxuICAgICAgICAgICAgICAgIHBhZ2VTbGlkZXJRdWVyeSA9ICcucGFnZXNsaWRlciAuc2xpZGVyLCAucGFnZXNsaWRlciAudGV4dGJsb2NrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKGhlYWRlclF1ZXJ5ICsgJywgJyArIHBhZ2VTbGlkZXJRdWVyeSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IG9iamVjdC5wYXJlbnQoKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb2ZmID0gc2hlZXRMZWZ0RnVuYyhzaGVldCwgb2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2xzID0gb2JqZWN0LmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgICAgICQuZWFjaChjbHMsIGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICQudHJpbSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC5pbmRleE9mKGNzc1ByZWZpeCkgIT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnN1YnN0cmluZyhjc3NQcmVmaXgubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc2l6ZURhdGFbdmFsXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblVwU3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jc3MoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jc3MoJ2xlZnQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jc3MoJ21hcmdpbi1sZWZ0JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BEYXRhID0gZGF0YS5yZXNwb25zaXZlW3Jlc3BvbnNpdmVUeXBlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcERhdGEudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Q3NzKG9iamVjdCwgJ2Rpc3BsYXknLCAnbm9uZSAhaW1wb3J0YW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5VcFN0eWxlcyB8fCAhcmVzcERhdGEudmlzaWJsZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHVuaVRvUHgocmVzcERhdGEubGVmdCwgZGF0YS5hdXRvV2lkdGggPyBvYmplY3Qud2lkdGgoKSA6IGRhdGEud2lkdGgsIHNoZWV0V2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHggKz0gb2ZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHVuaVRvUHgocmVzcERhdGEudG9wLCBkYXRhLmhlaWdodCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNzcygnbGVmdCcsIHggKyAncHgnKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY3NzKCd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlDc3Mob2JqZWN0LCAnbWFyZ2luLWxlZnQnLCAnMHB4ICFpbXBvcnRhbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGltYWdlcyBpbiBzbGlkZSdzIGJhY2tncm91bmQtaW1hZ2VzXHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKCcuc2xpZGUtaXRlbScpLmFkZChoZWFkZXIpO1xyXG4gICAgICAgICAgICBpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLnZlcnNpb24gPD0gOCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzID0gc2xpZGVzLmFkZCgnLnNsaWRlLWl0ZW0gLmllOGZpeCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuZWFjaChzbGlkZXMsIGZ1bmN0aW9uIChzbGlkZUlkeCwgc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlID0gJChzbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLmNsb3Nlc3QoJy5jb2xsYWdlJykubGVuZ3RoID4gMCB8fCBjbGVhblVwU3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVWaXNpYmxlID0gc2xpZGUuaXMoJzp2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNsaWRlVmlzaWJsZSAmJiBicm93c2VyLmllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9mZiA9IHNoZWV0TGVmdEZ1bmMoc2hlZXQsIHNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLnZlcnNpb24gPD0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gc2xpZGUuYXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gcy5yZXBsYWNlKC9iYWNrZ3JvdW5kXFwtcG9zaXRpb25bXjtdKy8sICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXR0cignc3R5bGUnLCBzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsICcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnYmFja2dyb3VuZC1zaXplJywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBiZ0ltYWdlID0gc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJykgPyBzbGlkZS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKS5zcGxpdCgnLCcpIDogW107XHJcbiAgICAgICAgICAgICAgICB2YXIgYmdQb3NpdGlvbiA9IHNsaWRlLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicpICYmIChzbGlkZS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nKS5yZXBsYWNlKC9bMF1bXlxcZF0rL2dpLCAnJykpLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicpLnNwbGl0KCcsJykgOlxyXG4gICAgICAgICAgICAgICAgICAgIFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJnSW1hZ2UubGVuZ3RoICE9PSBiZ1Bvc2l0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gc2xpZGUuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0ID09PSAwKSBoZWlnaHQgPSBzbGlkZS5wYXJlbnQoKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goYmdJbWFnZSwgZnVuY3Rpb24gKGlkeCwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmRJbWFnZUlkeCA9IHZhbC5sYXN0SW5kZXhPZignaW1hZ2VzLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaW5kRG90SWR4ID0gdmFsLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRJbWFnZUlkeCA9PT0gLTEgfHwgZmluZERvdElkeCA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3Vic3RyaW5nKGZpbmRJbWFnZUlkeCArIDcsIGZpbmREb3RJZHgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc2l6ZURhdGFbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcERhdGEgPSBkYXRhLnJlc3BvbnNpdmVbcmVzcG9uc2l2ZVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJpZyBkZWZhdWx0IGNvb3JkaW5hdGVzIGZvciBoaWRpbmdcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IDk5OTksIHkgPSA5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwRGF0YS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSB1bmlUb1B4KHJlc3BEYXRhLmxlZnQsIGRhdGEud2lkdGgsIHNoZWV0V2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZiArIGRhdGEuYXJlYS54O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHVuaVRvUHgocmVzcERhdGEudG9wLCBkYXRhLmhlaWdodCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBkYXRhLmFyZWEueTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJnUG9zaXRpb25baWR4XSA9IHggKyAncHggJyArIHkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGUuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgYmdQb3NpdGlvbi5qb2luKCcsJykpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc2xpZGVWaXNpYmxlICYmIGJyb3dzZXIuaWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgfSkoalF1ZXJ5KSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoJCkge1xyXG4gICAgICAgIGlmICghYnJvd3Nlci5pZSB8fCBicm93c2VyLnZlcnNpb24gPiA4KSB7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5yZXNpemUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXNpemVUaW1lb3V0O1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNlbGYucmVzaXplKCk7IH0sIDI1KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuaGVhZGVyT2JqZWN0UmVzaXplci5pbml0aWFsaXplKGpRdWVyeSk7XHJcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gOClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBwcm9jZXNzRWxlbWVudE11bHRpcGx5QmcoXCIuaGVhZGVyXCIsIHtcclxuICAgICAgICBcImJnaW1hZ2VcIjogXCJ1cmwoJ2ltYWdlcy9oZWFkZXIuanBnJylcIixcclxuICAgICAgICBcImJncG9zaXRpb25cIjogXCIwIDBcIixcclxuICAgICAgICBcImltYWdlc1wiOiBcIlwiLFxyXG4gICAgICAgIFwicG9zaXRpb25zXCI6IFwiXCJcclxuICAgIH0pO1xyXG59KTtcclxuaWYgKHR5cGVvZiB3aW5kb3cucmVzaXplRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHdpbmRvdy5yZXNpemVEYXRhID0ge307XG5cbndpbmRvdy5yZXNpemVEYXRhLnBhZ2VTbGlkZXJQYWdlV2lkdGggPSBmYWxzZTtcbiIsIi8qIENyZWF0ZWQgYnkgQXJ0aXN0ZWVyIHY0LjMuMC42MDc0NSAqL1xyXG4vKmpzaGludCBmb3Jpbjp0cnVlLCBub2FyZzp0cnVlLCBub2VtcHR5OnRydWUsIGVxZXFlcTp0cnVlLCBiaXR3aXNlOnRydWUsIHN0cmljdDp0cnVlLCB1bmRlZjp0cnVlLCBjdXJseTpmYWxzZSwgYnJvd3Nlcjp0cnVlLCBqcXVlcnk6ZmFsc2UgKi9cclxuLypnbG9iYWwgalF1ZXJ5ICovXHJcblxyXG52YXIgcmVzcG9uc2l2ZURlc2lnbiA9IHtcclxuICAgIGlzUmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICBpc0Rlc2t0b3A6IGZhbHNlLFxyXG4gICAgaXNUYWJsZXQ6IGZhbHNlLFxyXG4gICAgaXNQaG9uZTogZmFsc2UsXHJcbiAgICBsb2NrZWRSZXNwb25zaXZlTW9kZTogJycsIC8vIGZyZWUgbW9kZSBmcm9tIHN0YXJ0XHJcblxyXG4gICAgcmVzcG9uc2l2ZVR5cGU6ICdkZXNrdG9wJyxcclxuICAgIHJlc3BvbnNpdmVUeXBlSWR4OiAxLFxyXG4gICAgbG9ja2VkUmVzcG9uc2l2ZVR5cGU6ICcnLFxyXG5cclxuICAgIGlzQ3VycmVudERlZmF1bHRSZXNwb25zaXZlOiBmYWxzZSxcclxuXHJcbiAgICBkZWZhdWx0UmVzcG9uc2l2ZTogWyBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSBdLCAvLyB0dXJuIG9uL29mZiBvbGQgb3IgbmV3IHJlc3BvbnNpdmUgbW9kZXNcclxuXHJcbiAgICB3aW5kb3dXaWR0aDogMCxcclxuXHJcbiAgICByZXNwb25zaXZlOiAoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaHRtbCA9ICQoXCJodG1sXCIpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpc1Jlc3BWaXNpYmxlID0gJChcIiNyZXNwXCIpLmlzKFwiOnZpc2libGVcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZFJlc3BvbnNpdmVNb2RlID09PSAnZGVza3RvcCcpIGlzUmVzcFZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1Jlc3BWaXNpYmxlICYmICF0aGlzLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgaHRtbC5hZGRDbGFzcyhcInJlc3BvbnNpdmVcIikucmVtb3ZlQ2xhc3MoXCJkZXNrdG9wXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Jlc3BvbnNpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzUmVzcFZpc2libGUgJiYgIXRoaXMuaXNEZXNrdG9wKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sLmFkZENsYXNzKFwiZGVza3RvcFwiKS5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUgZGVmYXVsdC1yZXNwb25zaXZlIHJlc3BvbnNpdmUtdGFibGV0IHJlc3BvbnNpdmUtcGhvbmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVzcG9uc2l2ZSA9IHRoaXMuaXNUYWJsZXQgPSB0aGlzLmlzUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBjaGVjayB0byBsb2NrIHJlc3BvbnNpdmUgbW9kZVxyXG4gICAgICAgICAgICAgICAgdmFyIGlzVGFibGV0ID0gdGhpcy5sb2NrZWRSZXNwb25zaXZlTW9kZSA9PT0gJ3RhYmxldCcgfHwgKCQoXCIjcmVzcC10XCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlTW9kZSA9PT0gJycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzUGhvbmUgPSB0aGlzLmxvY2tlZFJlc3BvbnNpdmVNb2RlID09PSAncGhvbmUnIHx8ICgkKFwiI3Jlc3AtbVwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZU1vZGUgPT09ICcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1RhYmxldCAmJiAhdGhpcy5pc1RhYmxldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwuYWRkQ2xhc3MoXCJyZXNwb25zaXZlLXRhYmxldFwiKS5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUtcGhvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RhYmxldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Bob25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQaG9uZSAmJiAhdGhpcy5pc1Bob25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbC5hZGRDbGFzcyhcInJlc3BvbnNpdmUtcGhvbmVcIikucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlLXRhYmxldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVGFibGV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Bob25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJldlJlc3BvbnNpdmVJbmR4ID0gdGhpcy5yZXNwb25zaXZlVHlwZUlkeDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICd0YWJsZXRsYW5kc2NhcGUnIHx8ICgkKFwiI3Jlc3AtdGFibGV0LWxhbmRzY2FwZVwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZSA9ICd0YWJsZXRsYW5kc2NhcGUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZUlkeCA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJ3RhYmxldHBvcnRyYWl0JyB8fCAoJChcIiNyZXNwLXRhYmxldC1wb3J0cmFpdFwiKS5pcyhcIjp2aXNpYmxlXCIpICYmIHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZSA9ICd0YWJsZXRwb3J0cmFpdCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4ID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAncGhvbmVsYW5kc2NhcGUnIHx8ICgkKFwiI3Jlc3AtcGhvbmUtbGFuZHNjYXBlXCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlID0gJ3Bob25lbGFuZHNjYXBlJztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGVJZHggPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICdwaG9uZXBvcnRyYWl0JyB8fCAoJChcIiNyZXNwLXBob25lLXBvcnRyYWl0XCIpLmlzKFwiOnZpc2libGVcIikgJiYgdGhpcy5sb2NrZWRSZXNwb25zaXZlVHlwZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlID0gJ3Bob25lcG9ydHJhaXQnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlVHlwZUlkeCA9IDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vaWYgKHRoaXMubG9ja2VkUmVzcG9uc2l2ZVR5cGUgPT09ICdkZXNrdG9wJyB8fCAoJChcIiNyZXNwLWRlc2t0b3BcIikuaXMoXCI6dmlzaWJsZVwiKSAmJiB0aGlzLmxvY2tlZFJlc3BvbnNpdmVUeXBlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVR5cGUgPSAnZGVza3RvcCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJFdmVudCB8fCBwcmV2UmVzcG9uc2l2ZUluZHggIT09IHRoaXMucmVzcG9uc2l2ZVR5cGVJZHgpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVzcG9uc2l2ZSAmJiB0aGlzLmRlZmF1bHRSZXNwb25zaXZlWyB0aGlzLnJlc3BvbnNpdmVUeXBlSWR4IF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ3VycmVudERlZmF1bHRSZXNwb25zaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNsYXNzKCdjdXN0b20tcmVzcG9uc2l2ZScpLmFkZENsYXNzKCdkZWZhdWx0LXJlc3BvbnNpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0N1cnJlbnREZWZhdWx0UmVzcG9uc2l2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2xhc3MoJ2RlZmF1bHQtcmVzcG9uc2l2ZScpLmFkZENsYXNzKCdjdXN0b20tcmVzcG9uc2l2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHJpZ2dlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc3BvbnNpdmVcIiwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzcG9uc2l2ZVJlc2l6ZVwiLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkoalF1ZXJ5KSxcclxuICAgIGluaXRpYWxpemU6IChmdW5jdGlvbiAoJCkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBjb3JyZWN0IGRlZmF1bHRSZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmYXVsdFJlc3BvbnNpdmVEYXRhICE9PSAndW5kZWZpbmVkJykgcmVzcG9uc2l2ZURlc2lnbi5kZWZhdWx0UmVzcG9uc2l2ZSA9IGRlZmF1bHRSZXNwb25zaXZlRGF0YTtcclxuXHJcbiAgICAgICAgICAgICQoXCI8ZGl2IGlkPVxcXCJyZXNwXFxcIj48ZGl2IGlkPVxcXCJyZXNwLW1cXFwiPjwvZGl2PjxkaXYgaWQ9XFxcInJlc3AtdFxcXCI+PC9kaXY+PC9kaXY+XCIpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuICAgICAgICAgICAgJCgnPGRpdiBpZD1cInJlc3AtdGFibGV0LWxhbmRzY2FwZVwiIC8+PGRpdiBpZD1cInJlc3AtdGFibGV0LXBvcnRyYWl0XCIgLz48ZGl2IGlkPVwicmVzcC1waG9uZS1sYW5kc2NhcGVcIiAvPjxkaXYgaWQ9XCJyZXNwLXBob25lLXBvcnRyYWl0XCIgLz4nKS5hcHBlbmRUbygnYm9keScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8qICgxKSBVc2UgdGhpcyBjb2RlIGZvciBkZWJ1ZyBpbnN0ZWFkIG9mICgyKTpcclxuICAgICAgICAgICAgICogdmFyIHJlc2l6ZVRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAqICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgKiBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgICAgICAqIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmVzcG9uc2l2ZURlc2lnbi5yZXNwb25zaXZlKCk7IH0sIDUwKTtcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLyogKDIpIFVzZSB0aGlzIGNvZGUgZm9yIHByb2R1Y3Rpb24gYW5kIGNvbW1lbnQgKDEpOiAqL1xyXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzaXplXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KShqUXVlcnkpLFxyXG4gICAgLy8gbG9jayByZXNwb25zaXZlIGluIHNvbWUgbW9kZTogZGVza3RvcCwgdGFibGV0IG9yIHBob25lIGZvciBlZGl0b3JcclxuICAgIGxvY2tSZXNwb25zaXZlVHlwZTogZnVuY3Rpb24gKG1vZGUpIHtcclxuICAgICAgICByZXNwb25zaXZlRGVzaWduLmxvY2tlZFJlc3BvbnNpdmVUeXBlID0gbW9kZTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGUuaW5kZXhPZigndGFibGV0JykgPT09IDApIG1vZGUgPSAndGFibGV0JztcclxuICAgICAgICBpZiAobW9kZS5pbmRleE9mKCdwaG9uZScpID09PSAwKSBtb2RlID0gJ3Bob25lJztcclxuXHJcbiAgICAgICAgcmVzcG9uc2l2ZURlc2lnbi5sb2NrZWRSZXNwb25zaXZlTW9kZSA9IG1vZGU7XHJcbiAgICB9LFxyXG4gICAgLy8gdXNpbmcgaW4gZWRpdG9yIHRvIHR1cm4gb2ZmIGRlZmF1bHQgcmVzcG9uc2l2ZVxyXG4gICAgdG9vZ2xlRGVmYXVsdFJlc3BvbnNpdmU6IGZ1bmN0aW9uICh0eXBlLCB2YWwpIHtcclxuICAgICAgICB2YXIgb2xkID0gcmVzcG9uc2l2ZURlc2lnbi5kZWZhdWx0UmVzcG9uc2l2ZVsgdHlwZSBdO1xyXG4gICAgICAgIHJlc3BvbnNpdmVEZXNpZ24uZGVmYXVsdFJlc3BvbnNpdmVbIHR5cGUgXSA9IHZhbDtcclxuICAgICAgICBpZiAob2xkICE9PSB2YWwpIHJlc3BvbnNpdmVEZXNpZ24ucmVzcG9uc2l2ZVR5cGVJZHggPSAtMTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNpdmVBYnNCZyhyZXNwb25zaXZlRGVzaWduLCBlbCwgYmcpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgaWYgKGJnLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGRlc2t0b3BCZ1RvcCA9IGJnLmF0dHIoXCJkYXRhLWJnLXRvcFwiKTtcclxuICAgIHZhciBkZXNrdG9wQmdIZWlnaHQgPSBiZy5hdHRyKFwiZGF0YS1iZy1oZWlnaHRcIik7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNrdG9wQmdUb3AgPT09IFwidW5kZWZpbmVkXCIgfHwgZGVza3RvcEJnVG9wID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBiZy5hdHRyKFwiZGF0YS1iZy10b3BcIiwgYmcuY3NzKFwidG9wXCIpKTtcclxuICAgICAgICAgICAgYmcuYXR0cihcImRhdGEtYmctaGVpZ2h0XCIsIGJnLmNzcyhcImhlaWdodFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZWxUb3AgPSBlbC5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgdmFyIGVsSGVpZ2h0ID0gZWwub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICBiZy5jc3MoXCJ0b3BcIiwgZWxUb3AgKyBcInB4XCIpO1xyXG4gICAgICAgIGJnLmNzcyhcImhlaWdodFwiLCBlbEhlaWdodCArIFwicHhcIik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXNrdG9wQmdUb3AgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVza3RvcEJnVG9wICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGJnLmNzcyhcInRvcFwiLCBkZXNrdG9wQmdUb3ApO1xyXG4gICAgICAgIGJnLmNzcyhcImhlaWdodFwiLCBkZXNrdG9wQmdIZWlnaHQpO1xyXG4gICAgICAgIGJnLnJlbW92ZUF0dHIoXCJkYXRhLWJnLXRvcFwiKTtcclxuICAgICAgICBiZy5yZW1vdmVBdHRyKFwiZGF0YS1iZy1oZWlnaHRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciByZXNwb25zaXZlSW1hZ2VzID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgICQoXCJpbWdbd2lkdGhdXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gJCh0aGlzKSwgbmV3V2lkdGggPSBcIlwiLCBuZXdNYXhXaWR0aCA9IFwiXCIsIG5ld0hlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAgICAgbmV3TWF4V2lkdGggPSBcIjEwMCVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhBdHRyID0gaW1nLmF0dHIoXCJ3aWR0aFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aEF0dHIgIT09IG51bGwgJiYgdHlwZW9mICh3aWR0aEF0dHIpID09PSBcInN0cmluZ1wiICYmIHdpZHRoQXR0ci5pbmRleE9mKFwiJVwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld01heFdpZHRoID0gcGFyc2VJbnQoJC50cmltKHdpZHRoQXR0ciksIDEwKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcuY3NzKFwid2lkdGhcIiwgbmV3V2lkdGgpLmNzcyhcIm1heC13aWR0aFwiLCBuZXdNYXhXaWR0aCkuY3NzKFwiaGVpZ2h0XCIsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpOyBcclxuXHJcbnZhciByZXNwb25zaXZlVmlkZW9zID0gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgICQoXCJpZnJhbWVbd2lkdGhdLG9iamVjdFt3aWR0aF0sZW1iZWRbd2lkdGhdXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKChvYmouaXMoJ1t3aWR0aF0nKSAmJiBvYmouYXR0cihcIndpZHRoXCIpLmluZGV4T2YoXCIlXCIpICE9PSAtMSkgfHxcclxuICAgICAgICAgICAgICAgIChvYmouaXMoJ1tjbGFzc10nKSAmJiBvYmouYXR0cihcImNsYXNzXCIpLmluZGV4T2YoXCJ0d2l0dGVyXCIpICE9PSAtMSkgfHxcclxuICAgICAgICAgICAgICAgIChvYmouaWQgJiYgb2JqLmlkLmluZGV4T2YoXCJnb29nbGVcIikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IG9iai5wYXJlbnQoXCIucmVzcG9uc2l2ZS1lbWJlZFwiKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmxlbmd0aCAhPT0gMClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSAkKFwiPGRpdiBjbGFzcz1cXFwicmVzcG9uc2l2ZS1lbWJlZFxcXCI+XCIpLmluc2VydEJlZm9yZShvYmopO1xyXG4gICAgICAgICAgICAgICAgb2JqLmFwcGVuZFRvKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG9iai5pbnNlcnRCZWZvcmUoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbi8vIHRoaXMgbXVzdCBiZSBjYWxsZWQgZm9yIGNvbGxhZ2VzIG9ubHkhXHJcbnZhciByZXNwb25zaXZlVGV4dGJsb2NrcyA9IChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNsaWRlciwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIHNsaWRlci5maW5kKFwiLnRleHRibG9ja1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHNsaWRlci5hdHRyKFwiZGF0YS13aWR0aFwiKSwgMTApID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgYyA9IHNsaWRlci53aWR0aCgpIC8gc2xpZGVyLmF0dHIoXCJkYXRhLXdpZHRoXCIpO1xyXG4gICAgICAgICAgICB0Yi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCJcIixcclxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRiSGVpZ2h0ID0gcGFyc2VJbnQodGIuY3NzKFwiaGVpZ2h0XCIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGJXaWR0aCA9IHBhcnNlSW50KHRiLmNzcyhcIndpZHRoXCIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGJUb3AgPSBwYXJzZUludCh0Yi5jc3MoXCJ0b3BcIiksIDEwKTtcclxuICAgICAgICAgICAgICAgIHZhciB0Yk1hcmdpbiA9IHBhcnNlSW50KHRiLmNzcyhcIm1hcmdpbi1sZWZ0XCIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0Yi5hZGQodGIuZmluZCgnZGl2JykpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogdGJIZWlnaHQgKiBjLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogdGJXaWR0aCAqIGNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGIuY3NzKFwidG9wXCIsIHRiVG9wICogYyk7XHJcbiAgICAgICAgICAgICAgICB0Yi5hdHRyKFwic3R5bGVcIiwgZnVuY3Rpb24gKGksIHMpIHsgcmV0dXJuIHMgKyBcIm1hcmdpbi1sZWZ0OiBcIiArICh0Yk1hcmdpbiAqIGMpICsgXCJweCAhaW1wb3J0YW50XCI7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxudmFyIHJlc3BvbnNpdmVTbGlkZXIgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgJChcIi5zbGlkZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpc0hlYWRlclNsaWRlciA9IHMucGFyZW50KCcuaGVhZGVyJykubGVuZ3RoID4gMCB8fCBzLnBhcmVudCgnLnBhZ2VzbGlkZXInKS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICBpZiAoIWlzSGVhZGVyU2xpZGVyICYmIHJlc3BvbnNpdmVEZXNpZ24uaXNSZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlVGV4dGJsb2NrcyhzLCByZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGluaXRpYWxXaWR0aCA9IHMuYXR0cihcImRhdGEtd2lkdGhcIik7XHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsSGVpZ2h0ID0gcy5hdHRyKFwiZGF0YS1oZWlnaHRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgc2l6ZVxyXG5cclxuICAgICAgICAgICAgdmFyIG9iaiA9IHMuZGF0YShcInNsaWRlclwiKTtcclxuICAgICAgICAgICAgaWYgKCFvYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGlubmVyID0gcy5maW5kKFwiLnNsaWRlci1pbm5lclwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2l2ZURlc2lnbi5pc1Jlc3BvbnNpdmUgJiYgb2JqLnNldHRpbmdzLmhlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgb2JqLnNldHRpbmdzLmhlbHBlci51cGRhdGVTaXplKGlubmVyLCB7IHdpZHRoOiBpbml0aWFsV2lkdGgsIGhlaWdodDogaW5pdGlhbEhlaWdodCB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHNsaWRlclxyXG4gICAgICAgICAgICBpZiAob2JqICYmIG9iai5zZXR0aW5ncy5oZWxwZXIpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vbihcInJlc3BvbnNpdmVSZXNpemVcIiwgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnNldHRpbmdzLmFuaW1hdGlvbiA9PT0gXCJmYWRlXCIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZURlc2lnbi5pc0N1cnJlbnREZWZhdWx0UmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc2V0dGluZ3MuaGVscGVyLnVwZGF0ZVNpemUoaW5uZXIsIHsgd2lkdGg6IGluaXRpYWxXaWR0aCwgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goaW5uZXIuY2hpbGRyZW4oKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLU1hdGguZmxvb3IoaW5pdGlhbFdpZHRoIC8gMiAtIHBhcnNlSW50KGlubmVyLm91dGVyV2lkdGgoKSwgMTApIC8gMikgKyBcInB4XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1NYXRoLmZsb29yKGluaXRpYWxIZWlnaHQgLyAyIC0gcGFyc2VJbnQoaW5uZXIub3V0ZXJIZWlnaHQoKSwgMTApIC8gMikgKyBcInB4IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzcG9uc2l2ZVJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbnZhciByZXNwb25zaXZlQ29sbGFnZXMgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgJChcIi5jb2xsYWdlXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xsYWdlID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IGNvbGxhZ2UuZmluZChcIi5zbGlkZXJcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFdpZHRoID0gc2xpZGVyLmF0dHIoXCJkYXRhLXdpZHRoXCIpO1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbEhlaWdodCA9IHNsaWRlci5hdHRyKFwiZGF0YS1oZWlnaHRcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gY29sbGFnZS5jbG9zZXN0KCc6bm90KC5pbWFnZS1jYXB0aW9uLXdyYXBwZXIsIC5jb2xsYWdlKScpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50SWN3ID0gY29sbGFnZS5jbG9zZXN0KCcuaW1hZ2UtY2FwdGlvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnRXaWR0aCA9IHBhcmVudC53aWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgY29sbGFnZVdpZHRoID0gY29sbGFnZS53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9yIHJlc3BvbnNpdmUgdHJ5IHRvIG1ha2UgY29sbGFnZSBzbWFsbGVyXHJcbiAgICAgICAgICAgIC8vIGEpIG5vIGljdyAtIGNoZWNrIGNvbGxhZ2Ugd2lkdGggYW5kIHBhcmVudFxyXG4gICAgICAgICAgICAvLyBiKSB3aXRoIGljdyAtIGNvbGxhZ2UgaXMgYmlnZ2VyIHRoYW4gaWN3XHJcbiAgICAgICAgICAgIHZhciBkb21zID0gY29sbGFnZVxyXG4gICAgICAgICAgICAgICAgLmFkZChzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKGNvbGxhZ2UuY2xvc2VzdChcIi5pbWFnZS1jYXB0aW9uLXdyYXBwZXJcIikpO1xyXG5cclxuICAgICAgICAgICAgLy8gc28gdHJ5IHRvIG1ha2UgY29sbGFnZSBzbWFsbGVyXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSAmJiBjb2xsYWdlV2lkdGggPiBwYXJlbnRXaWR0aCB8fCAocGFyZW50SWN3Lmxlbmd0aCA+IDAgJiYgY29sbGFnZVdpZHRoID4gcGFyZW50SWN3LndpZHRoKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBkb21zLmNzcyhcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYnV0IGlmIGljdyBtYWtlIGNvbGxhZ2UgdG9vIGJpdCByZXNldCBpdCB3aWR0aCB0byBub3JhbWxcclxuICAgICAgICAgICAgY29sbGFnZVdpZHRoID0gY29sbGFnZS53aWR0aCgpO1xyXG4gICAgICAgICAgICBpZiAoY29sbGFnZVdpZHRoID4gaW5pdGlhbFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBkb21zLmNzcyhcIndpZHRoXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYyA9IHNsaWRlci53aWR0aCgpIC8gaW5pdGlhbFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaCA9IGMgKiBpbml0aWFsSGVpZ2h0O1xyXG4gICAgICAgICAgICBzbGlkZXIuY3NzKFwiaGVpZ2h0XCIsIGggKyBcInB4XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZVwiLCAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIC8vIHNvIHRoaXMgZXZlbnQgaXMgbWFpbiBhbmQgaXQgZ2VuZXJhdGUgc3ViIGV2ZW50cyB0byBtYWtlIGltcG9ydGFudCBjaGFuZ2VzIGJlZm9yZSB3ZSB3aWxsIG1vZGlmeSBzbGlkZXJcclxuICAgICAgICAvLyBmb3IgZXhhbXBsZSB3ZSBtb3ZlIG91dCBvZiBzbGlkZXIgbWVudSBidXR0b24sIGFuZCBpdCBjaGFuZ2Ugc2xpZGVyIHNpemVcclxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzcG9uc2l2ZVBhZ2UnLCByZXNwb25zaXZlRGVzaWduKTtcclxuICAgICAgICByZXNwb25zaXZlSW1hZ2VzKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgIHJlc3BvbnNpdmVWaWRlb3MocmVzcG9uc2l2ZURlc2lnbik7XHJcblxyXG4gICAgICAgIHJlc3BvbnNpdmVTbGlkZXIocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgcmVzcG9uc2l2ZU5hdmlnYXRvcihyZXNwb25zaXZlRGVzaWduKTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSkpO1xyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVSZXNpemVcIiwgKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICByZXNwb25zaXZlQ29sbGFnZXMocmVzcG9uc2l2ZURlc2lnbik7XHJcbiAgICAgICAgcmVzcG9uc2l2ZU5hdmlnYXRvcihyZXNwb25zaXZlRGVzaWduKTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSkpO1xyXG5cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBpZiAoIWJyb3dzZXIuaWUgfHwgYnJvd3Nlci52ZXJzaW9uID4gOCkgcmV0dXJuO1xyXG4gICAgdmFyIHRpbWVvdXQ7XHJcbiAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZUNvbGxhZ2VzKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgICAgICByZXNwb25zaXZlTmF2aWdhdG9yKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgIH0sIDI1KTtcclxuICAgIH0pO1xyXG4gICAgcmVzcG9uc2l2ZUNvbGxhZ2VzKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgcmVzcG9uc2l2ZU5hdmlnYXRvcihyZXNwb25zaXZlRGVzaWduKTtcclxufSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZVJlc2l6ZVwiLCAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIHJlc3BvbnNpdmVBYnNCZyhyZXNwb25zaXZlRGVzaWduLCAkKFwibmF2Lm5hdlwiKSwgJChcIiNobWVudS1iZ1wiKSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNwb25zaXZlTmF2XCIsIHsgcmVzcG9uc2l2ZURlc2lnbjogcmVzcG9uc2l2ZURlc2lnbiB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSkpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24oJCkge1xyXG4gICAgJCgnPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcIm1lbnUtYnRuXFxcIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+JykuaW5zZXJ0QmVmb3JlKFwiLmhtZW51XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgbWVudSA9ICQodGhpcykubmV4dCgpO1xyXG4gICAgICAgIGlmIChtZW51LmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgbWVudS5zbGlkZVVwKFwiZmFzdFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ2aXNpYmxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuc2xpZGVEb3duKFwiZmFzdFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJ2aXNpYmxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZU5hdlwiLCAoZnVuY3Rpb24gKCQpIHtcclxuICAgIC8qZ2xvYmFsIG1lbnVFeHRlbmRlZENyZWF0ZSAqL1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZURlc2lnbi5pc0Rlc2t0b3AgJiYgJChcImxpLmV4dFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG1lbnVFeHRlbmRlZENyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKGpRdWVyeSkpO1xyXG5cclxudmFyIHJlc3BvbnNpdmVIZWFkZXIgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlc3BvbnNpdmVEZXNpZ24pIHtcclxuICAgICAgICB2YXIgaGVhZGVyID0gJChcImhlYWRlci5oZWFkZXJcIik7XHJcbiAgICAgICAgdmFyIGhlYWRlclNsaWRlciA9IGhlYWRlci5maW5kKFwiLnNsaWRlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGhlYWRlclNsaWRlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0U2xpZGUgPSBoZWFkZXJTbGlkZXIuZmluZChcIi5zbGlkZS1pdGVtXCIpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZWJnID0gZmlyc3RTbGlkZS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIpLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IGhlYWRlclNsaWRlci5wcmV2KCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJOYXYgPSBoZWFkZXJTbGlkZXIuc2libGluZ3MoXCIuc2xpZGVuYXZpZ2F0b3JcIik7XHJcbiAgICAgICAgICAgIGlmIChzbGlkZWJnLmxlbmd0aCAmJiByZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgcHJldiBpcyBtZW51IGluIGhlYWRlclxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzU2libGluZy5pcyhcIm5hdi5uYXZcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJOYXYuYXR0cihcImRhdGEtb2Zmc2V0XCIsIHByZXZpb3VzU2libGluZy5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXYucmVtb3ZlQXR0cihcImRhdGEtb2Zmc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZVJlc2l6ZVwiLCAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIHJlc3BvbnNpdmVBYnNCZyhyZXNwb25zaXZlRGVzaWduLCAkKFwiLmhlYWRlclwiKSwgJChcIiNoZWFkZXItYmdcIikpO1xyXG4gICAgfTtcclxufSkoalF1ZXJ5KSk7XHJcblxyXG5qUXVlcnkod2luZG93KS5iaW5kKFwicmVzcG9uc2l2ZVwiLCAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2l2ZURlc2lnbikge1xyXG4gICAgICAgIGlmIChicm93c2VyLmllICYmIGJyb3dzZXIudmVyc2lvbiA8PSA4KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zaXZlRGVzaWduLmlzUmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oXCJyZXNwb25zaXZlUmVzaXplLmhlYWRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlSGVhZGVyKHJlc3BvbnNpdmVEZXNpZ24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc3BvbnNpdmVSZXNpemUuaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzcG9uc2l2ZVJlc2l6ZS5oZWFkZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoalF1ZXJ5KSk7XHJcblxyXG52YXIgcmVzcG9uc2l2ZUxheW91dENlbGwgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICAgICAgJChcIi5jb250ZW50IC5jb250ZW50LWxheW91dC1yb3csLmZvb3RlciAuY29udGVudC1sYXlvdXQtcm93XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHJvd0NoaWxkcmVuID0gcm93LmNoaWxkcmVuKFwiLmxheW91dC1jZWxsXCIpO1xyXG4gICAgICAgICAgICBpZiAocm93Q2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgICAgICAgICByb3cucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlLWxheW91dC1yb3ctMlwiKS5yZW1vdmVDbGFzcyhcInJlc3BvbnNpdmUtbGF5b3V0LXJvdy0zXCIpLnJlbW92ZUNsYXNzKFwicmVzcG9uc2l2ZS1sYXlvdXQtcm93LTFcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93Q2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKFwicmVzcG9uc2l2ZS1sYXlvdXQtcm93LTFcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0NoaWxkcmVuLmxlbmd0aCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmFkZENsYXNzKFwicmVzcG9uc2l2ZS1sYXlvdXQtcm93LTJcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gMztcclxuICAgICAgICAgICAgICAgICAgICByb3cuYWRkQ2xhc3MoXCJyZXNwb25zaXZlLWxheW91dC1yb3ctM1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjID4gMCAmJiByZXNwb25zaXZlRGVzaWduLmlzVGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q2hpbGRyZW4uYWRkQ2xhc3MoXCJyZXNwb25zaXZlLXRhYmxldC1sYXlvdXQtY2VsbFwiKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaSArIDEpICUgYyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZnRlcihcIjxkaXYgY2xhc3M9XFxcImNsZWFyZWQgcmVzcG9uc2l2ZS1jbGVhcmVkXFxcIj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q2hpbGRyZW4ucmVtb3ZlQ2xhc3MoXCJyZXNwb25zaXZlLXRhYmxldC1sYXlvdXQtY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3cuY2hpbGRyZW4oXCIucmVzcG9uc2l2ZS1jbGVhcmVkXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxualF1ZXJ5KHdpbmRvdykuYmluZChcInJlc3BvbnNpdmVcIiwgZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zaXZlRGVzaWduKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICByZXNwb25zaXZlTGF5b3V0Q2VsbChyZXNwb25zaXZlRGVzaWduKTtcclxufSk7XHJcblxyXG4vKmdsb2JhbCBqUXVlcnksIHJlc3BvbnNpdmVEZXNpZ24qL1xyXG5cclxuXHJcblxyXG5cclxuLy9zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJkZXNrdG9wXCIpIH0sIDApO1xyXG5cclxuaWYgKCFicm93c2VyLmllIHx8IGJyb3dzZXIudmVyc2lvbiA+IDgpIHtcclxuICAgIGpRdWVyeShyZXNwb25zaXZlRGVzaWduLmluaXRpYWxpemUpO1xyXG59IGVsc2Uge1xyXG4gICAgalF1ZXJ5KFwiaHRtbFwiKS5hZGRDbGFzcyhcImRlc2t0b3BcIik7XHJcbn1cclxuIiwiLypcclxuICAgICAgICAgICAgICAgICAgICAgICBfIF8gX19fX18gICAgICAgICAgICAgICAgICAgICAgXyAgIF9cclxuICAgICAgICAgICAgICAgICAgICAgIHwgfCB8ICBfXyBcXCAgICAgICAgICAgICAgICAgICAgfCB8IChfKVxyXG4gICAgX19fICBfX18gXyBfXyBfX18gfCB8IHwgfF9fKSB8X19fX18gICBfX19fXyAgX18gX3wgfCAgXyBfX19cclxuICAgLyBfX3wvIF9ffCAnX18vIF8gXFx8IHwgfCAgXyAgLy8gXyBcXCBcXCAvIC8gXyBcXC8gX2AgfCB8IHwgLyBfX3xcclxuICAgXFxfXyBcXCAoX198IHwgfCAoXykgfCB8IHwgfCBcXCBcXCAgX18vXFwgViAvICBfXy8gKF98IHwgfF98IFxcX18gXFxcclxuICAgfF9fXy9cXF9fX3xffCAgXFxfX18vfF98X3xffCAgXFxfXFxfX198IFxcXy8gXFxfX198XFxfXyxffF8oXykgfF9fXy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLyB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8X18vXHJcblxyXG4gICAgXCJEZWNsYXJhdGl2ZSBvbi1zY3JvbGwgcmV2ZWFsIGFuaW1hdGlvbnMuXCJcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzY3JvbGxSZXZlYWwuanMgaXMgaW5zcGlyZWQgYnkgY2JwU2Nyb2xsZXIuanMsIMKpIDIwMTQsIENvZHJvcHMuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHJcbiAgICBzY3JvbGxSZXZlYWwuanMsIMKpIDIwMTQgaHR0cHM6Ly90d2l0dGVyLmNvbS9qdWxpYW5sbG95ZFxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuOyhmdW5jdGlvbiAod2luZG93KSB7XHJcblxyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGRvY0VsZW0gPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICBmdW5jdGlvbiBnZXRWaWV3cG9ydEggKCkge1xyXG4gICAgdmFyIGNsaWVudCA9IGRvY0VsZW1bJ2NsaWVudEhlaWdodCddLFxyXG4gICAgICBpbm5lciA9IHdpbmRvd1snaW5uZXJIZWlnaHQnXTtcclxuXHJcbiAgICByZXR1cm4gKGNsaWVudCA8IGlubmVyKSA/IGlubmVyIDogY2xpZW50O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0IChlbCkge1xyXG4gICAgdmFyIG9mZnNldFRvcCA9IDAsXHJcbiAgICAgICAgb2Zmc2V0TGVmdCA9IDA7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICBpZiAoIWlzTmFOKGVsLm9mZnNldFRvcCkpIHtcclxuICAgICAgICBvZmZzZXRUb3AgKz0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghaXNOYU4oZWwub2Zmc2V0TGVmdCkpIHtcclxuICAgICAgICBvZmZzZXRMZWZ0ICs9IGVsLm9mZnNldExlZnQ7XHJcbiAgICAgIH1cclxuICAgIH0gd2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogb2Zmc2V0VG9wLFxyXG4gICAgICBsZWZ0OiBvZmZzZXRMZWZ0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc0VsZW1lbnRJblZpZXdwb3J0IChlbCwgaCkge1xyXG4gICAgdmFyIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgIHZpZXdlZCA9IHNjcm9sbGVkICsgZ2V0Vmlld3BvcnRIKCksXHJcbiAgICAgICAgZWxIID0gZWwub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgIGVsVG9wID0gZ2V0T2Zmc2V0KGVsKS50b3AsXHJcbiAgICAgICAgZWxCb3R0b20gPSBlbFRvcCArIGVsSCxcclxuICAgICAgICBoID0gaCB8fCAwO1xyXG5cclxuICAgIHJldHVybiAoZWxUb3AgKyBlbEggKiBoKSA8PSB2aWV3ZWQgJiYgKGVsQm90dG9tKSA+PSBzY3JvbGxlZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4dGVuZCAoYSwgYikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIGIpIHtcclxuICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGFba2V5XSA9IGJba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsUmV2ZWFsKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHNjcm9sbFJldmVhbC5wcm90b3R5cGUgPSB7XHJcbiAgICBkZWZhdWx0czoge1xyXG4gICAgICBheGlzOiAneScsXHJcbiAgICAgIGRpc3RhbmNlOiAnNjBweCcsXHJcbiAgICAgIGR1cmF0aW9uOiAnMC41NXMnLFxyXG4gICAgICBkZWxheTogJzAuMTVzJyxcclxuXHJcbiAgLy8gIGlmIDAsIHRoZSBlbGVtZW50IGlzIGNvbnNpZGVyZWQgaW4gdGhlIHZpZXdwb3J0IGFzIHNvb24gYXMgaXQgZW50ZXJzXHJcbiAgLy8gIGlmIDEsIHRoZSBlbGVtZW50IGlzIGNvbnNpZGVyZWQgaW4gdGhlIHZpZXdwb3J0IHdoZW4gaXQncyBmdWxseSB2aXNpYmxlXHJcbiAgICAgIHZpZXdwb3J0RmFjdG9yOiAwLjMzXHJcbiAgICB9LFxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIF9pbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmVsZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jRWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zY3JvbGxSZXZlYWxdJykpO1xyXG4gICAgICB0aGlzLnNjcm9sbGVkID0gZmFsc2U7XHJcblxyXG4gIC8vICBJbml0aWFsaXplIGFsbCBzY3JvbGxyZXZlYWxzLCB0cmlnZ2VyaW5nIGFsbFxyXG4gIC8vICByZXZlYWxzIG9uIHZpc2libGUgZWxlbWVudHMuXHJcbiAgICAgIHRoaXMuZWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcclxuICAgICAgICBzZWxmLmFuaW1hdGUoZWwpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciBzY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2VsZi5zY3JvbGxlZCkge1xyXG4gICAgICAgICAgc2VsZi5zY3JvbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5fc2Nyb2xsUGFnZSgpO1xyXG4gICAgICAgICAgfSwgNjApO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciByZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XHJcbiAgICAgICAgICBzZWxmLl9zY3JvbGxQYWdlKCk7XHJcbiAgICAgICAgICBzZWxmLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5yZXNpemVUaW1lb3V0KSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5yZXNpemVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChkZWxheWVkLCAyMDApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgX3Njcm9sbFBhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcclxuICAgICAgICAgICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQoZWwsIHNlbGYub3B0aW9ucy52aWV3cG9ydEZhY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0ZShlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIHBhcnNlTGFuZ3VhZ2U6IGZ1bmN0aW9uIChlbCkge1xyXG5cclxuICAvLyAgU3BsaXRzIG9uIGEgc2VxdWVuY2Ugb2Ygb25lIG9yIG1vcmUgY29tbWFzIG9yIHNwYWNlcy5cclxuICAgICAgdmFyIHdvcmRzID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbHJldmVhbCcpLnNwbGl0KC9bLCBdKy8pLFxyXG4gICAgICAgICAgZW50ZXJGcm9tLFxyXG4gICAgICAgICAgcGFyc2VkID0ge307XHJcblxyXG4gICAgICBmdW5jdGlvbiBmaWx0ZXIgKHdvcmRzKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IFtdLFxyXG5cclxuICAgICAgICAgICAgYmxhY2tsaXN0ID0gW1xyXG4gICAgICAgICAgICAgIFwiZnJvbVwiLFxyXG4gICAgICAgICAgICAgIFwidGhlXCIsXHJcbiAgICAgICAgICAgICAgXCJhbmRcIixcclxuICAgICAgICAgICAgICBcInRoZW5cIixcclxuICAgICAgICAgICAgICBcImJ1dFwiXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgIHdvcmRzLmZvckVhY2goZnVuY3Rpb24gKHdvcmQsIGkpIHtcclxuICAgICAgICAgIGlmIChibGFja2xpc3QuaW5kZXhPZih3b3JkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldC5wdXNoKHdvcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3b3JkcyA9IGZpbHRlcih3b3Jkcyk7XHJcblxyXG4gICAgICB3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkLCBpKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAod29yZCkge1xyXG4gICAgICAgICAgY2FzZSBcImVudGVyXCI6XHJcbiAgICAgICAgICAgIGVudGVyRnJvbSA9IHdvcmRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRlckZyb20gPT0gXCJ0b3BcIiB8fCBlbnRlckZyb20gPT0gXCJib3R0b21cIikge1xyXG4gICAgICAgICAgICAgIHBhcnNlZC5heGlzID0gXCJ5XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRlckZyb20gPT0gXCJsZWZ0XCIgfHwgZW50ZXJGcm9tID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgIHBhcnNlZC5heGlzID0gXCJ4XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIFwiYWZ0ZXJcIjpcclxuICAgICAgICAgICAgcGFyc2VkLmRlbGF5ID0gd29yZHNbaSArIDFdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBcIndhaXRcIjpcclxuICAgICAgICAgICAgcGFyc2VkLmRlbGF5ID0gd29yZHNbaSArIDFdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBcIm1vdmVcIjpcclxuICAgICAgICAgICAgcGFyc2VkLmRpc3RhbmNlID0gd29yZHNbaSArIDFdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBcIm92ZXJcIjpcclxuICAgICAgICAgICAgcGFyc2VkLmR1cmF0aW9uID0gd29yZHNbaSArIDFdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBcInRyaWdnZXJcIjpcclxuICAgICAgICAgICAgcGFyc2VkLmV2ZW50TmFtZSA9IHdvcmRzW2kgKyAxXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gIFVucmVjb2duaXphYmxlIHdvcmRzOyBkbyBub3RoaW5nLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgLy8gIEFmdGVyIGFsbCB2YWx1ZXMgYXJlIHBhcnNlZCwgbGV04oCZcyBtYWtlIHN1cmUgb3VyIG91clxyXG4gIC8vICBwaXhlbCBkaXN0YW5jZSBpcyBuZWdhdGl2ZSBmb3IgdG9wIGFuZCBsZWZ0IGVudHJhbmNlcy5cclxuICAvL1xyXG4gIC8vICBpZS4gXCJtb3ZlIDI1cHggZnJvbSB0b3BcIiBzdGFydHMgYXQgJ3RvcDogLTI1cHgnIGluIENTUy5cclxuXHJcbiAgICAgIGlmIChlbnRlckZyb20gPT0gXCJ0b3BcIiB8fCBlbnRlckZyb20gPT0gXCJsZWZ0XCIpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0eXBlb2YgcGFyc2VkLmRpc3RhbmNlID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHBhcnNlZC5kaXN0YW5jZSA9IFwiLVwiICsgcGFyc2VkLmRpc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwYXJzZWQuZGlzdGFuY2UgPSBcIi1cIiArIHRoaXMub3B0aW9ucy5kaXN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBnZW5DU1M6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICB2YXIgcGFyc2VkID0gdGhpcy5wYXJzZUxhbmd1YWdlKGVsKTtcclxuXHJcbiAgICAgIHZhciBkaXN0ICAgPSBwYXJzZWQuZGlzdGFuY2UgfHwgdGhpcy5vcHRpb25zLmRpc3RhbmNlLFxyXG4gICAgICAgICAgZHVyICAgID0gcGFyc2VkLmR1cmF0aW9uIHx8IHRoaXMub3B0aW9ucy5kdXJhdGlvbixcclxuICAgICAgICAgIGRlbGF5ICA9IHBhcnNlZC5kZWxheSAgICB8fCB0aGlzLm9wdGlvbnMuZGVsYXksXHJcbiAgICAgICAgICBheGlzICAgPSBwYXJzZWQuYXhpcyAgICAgfHwgdGhpcy5vcHRpb25zLmF4aXM7XHJcblxyXG4gICAgICB2YXIgdHJhbnNpdGlvbiA9IFwiLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgXCIgKyBkdXIgKyBcIiBlYXNlIFwiICsgZGVsYXkgKyBcIjtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItbW96LXRyYW5zaXRpb246IGFsbCBcIiArIGR1ciArIFwiIGVhc2UgXCIgKyBkZWxheSArIFwiO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW8tdHJhbnNpdGlvbjogYWxsIFwiICsgZHVyICsgXCIgZWFzZSBcIiArIGRlbGF5ICsgXCI7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1tcy10cmFuc2l0aW9uOiBhbGwgXCIgKyBkdXIgKyBcIiBlYXNlIFwiICsgZGVsYXkgKyBcIjtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb246IGFsbCBcIiArIGR1ciArIFwiIGVhc2UgXCIgKyBkZWxheSArIFwiO1wiO1xyXG5cclxuICAgICAgdmFyIGluaXRpYWwgPSBcIi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIihcIiArIGRpc3QgKyBcIik7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVwiICsgYXhpcyArIFwiKFwiICsgZGlzdCArIFwiKTtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoXCIgKyBkaXN0ICsgXCIpO1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVcIiArIGF4aXMgKyBcIihcIiArIGRpc3QgKyBcIik7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wYWNpdHk6IDA7XCI7XHJcblxyXG4gICAgICB2YXIgdGFyZ2V0ID0gXCItd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoMCk7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCItbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoMCk7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFwiLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoMCk7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zZm9ybTogdHJhbnNsYXRlXCIgKyBheGlzICsgXCIoMCk7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eTogMTtcIjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxyXG4gICAgICAgIGluaXRpYWw6IGluaXRpYWwsXHJcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgdG90YWxEdXJhdGlvbjogKChwYXJzZUZsb2F0KGR1cikgKyBwYXJzZUZsb2F0KGRlbGF5KSkgKiAxMDAwKVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBhbmltYXRlOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgdmFyIGNzcyA9IHRoaXMuZ2VuQ1NTKGVsKTtcclxuXHJcbiAgICAgIGlmICghZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNyLWluaXQnKSkge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjc3MuaW5pdGlhbCk7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXNyLWluaXQnLCB0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1jb21wbGV0ZScpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChlbCwgdGhpcy5vcHRpb25zLnZpZXdwb3J0RmFjdG9yKSkge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjc3MudGFyZ2V0ICsgY3NzLnRyYW5zaXRpb24pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zci1jb21wbGV0ZScsIHRydWUpO1xyXG4gICAgICAgIH0sIGNzcy50b3RhbER1cmF0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9OyAvLyBlbmQgc2Nyb2xsUmV2ZWFsLnByb3RvdHlwZVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsUmV2ZWFsID0gbmV3IHNjcm9sbFJldmVhbCgpO1xyXG4gIH0pO1xyXG5cclxufSkod2luZG93KTsiLCIvLyBTbW9vdGhTY3JvbGwgdjAuOS45XHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcblxyXG4vLyBQZW9wbGUgaW52b2x2ZWRcclxuLy8gLSBCYWxhenMgR2FsYW1ib3NpOiBtYWludGFpbmVyIChDSEFOR0VMT0cudHh0KVxyXG4vLyAtIFBhdHJpY2sgQnJ1bm5lciAocGF0cmlja2IxOTkxQGdtYWlsLmNvbSlcclxuLy8gLSBNaWNoYWVsIEhlcmY6IHNzY19wdWxzZSBBbGdvcml0aG1cclxuXHJcbmZ1bmN0aW9uIHNzY19pbml0KCkge1xyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KSByZXR1cm47XHJcbiAgICB2YXIgZSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICB2YXIgdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBuID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgdmFyIHIgPSBlLnNjcm9sbEhlaWdodDtcclxuICAgIHNzY19yb290ID0gZG9jdW1lbnQuY29tcGF0TW9kZS5pbmRleE9mKFwiQ1NTXCIpID49IDAgPyB0IDogZTtcclxuICAgIHNzY19hY3RpdmVFbGVtZW50ID0gZTtcclxuICAgIHNzY19pbml0ZG9uZSA9IHRydWU7XHJcbiAgICBpZiAodG9wICE9IHNlbGYpIHtcclxuICAgICAgICBzc2NfZnJhbWUgPSB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKHIgPiBuICYmIChlLm9mZnNldEhlaWdodCA8PSBuIHx8IHQub2Zmc2V0SGVpZ2h0IDw9IG4pKSB7XHJcbiAgICAgICAgc3NjX3Jvb3Quc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgaWYgKHNzY19yb290Lm9mZnNldEhlaWdodCA8PSBuKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaS5zdHlsZS5jbGVhciA9IFwiYm90aFwiO1xyXG4gICAgICAgICAgICBlLmFwcGVuZENoaWxkKGkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFzc2NfZml4ZWRiYWNrKSB7XHJcbiAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9IFwic2Nyb2xsXCI7XHJcbiAgICAgICAgdC5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9IFwic2Nyb2xsXCJcclxuICAgIH1cclxuICAgIGlmIChzc2Nfa2V5Ym9hcmRzdXBwb3J0KSB7XHJcbiAgICAgICAgc3NjX2FkZEV2ZW50KFwia2V5ZG93blwiLCBzc2Nfa2V5ZG93bilcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX3Njcm9sbEFycmF5KGUsIHQsIG4sIHIpIHtcclxuICAgIHIgfHwgKHIgPSAxZTMpO1xyXG4gICAgc3NjX2RpcmVjdGlvbkNoZWNrKHQsIG4pO1xyXG4gICAgc3NjX3F1ZS5wdXNoKHtcclxuICAgICAgICB4OiB0LFxyXG4gICAgICAgIHk6IG4sXHJcbiAgICAgICAgbGFzdFg6IHQgPCAwID8gLjk5IDogLS45OSxcclxuICAgICAgICBsYXN0WTogbiA8IDAgPyAuOTkgOiAtLjk5LFxyXG4gICAgICAgIHN0YXJ0OiArKG5ldyBEYXRlKVxyXG4gICAgfSk7XHJcbiAgICBpZiAoc3NjX3BlbmRpbmcpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHZhciBpID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzID0gKyhuZXcgRGF0ZSk7XHJcbiAgICAgICAgdmFyIG8gPSAwO1xyXG4gICAgICAgIHZhciB1ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHNzY19xdWUubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgdmFyIGYgPSBzc2NfcXVlW2FdO1xyXG4gICAgICAgICAgICB2YXIgbCA9IHMgLSBmLnN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgYyA9IGwgPj0gc3NjX2FuaW10aW1lO1xyXG4gICAgICAgICAgICB2YXIgaCA9IGMgPyAxIDogbCAvIHNzY19hbmltdGltZTtcclxuICAgICAgICAgICAgaWYgKHNzY19wdWxzZUFsZ29yaXRobSkge1xyXG4gICAgICAgICAgICAgICAgaCA9IHNzY19wdWxzZShoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwID0gZi54ICogaCAtIGYubGFzdFggPj4gMDtcclxuICAgICAgICAgICAgdmFyIGQgPSBmLnkgKiBoIC0gZi5sYXN0WSA+PiAwO1xyXG4gICAgICAgICAgICBvICs9IHA7XHJcbiAgICAgICAgICAgIHUgKz0gZDtcclxuICAgICAgICAgICAgZi5sYXN0WCArPSBwO1xyXG4gICAgICAgICAgICBmLmxhc3RZICs9IGQ7XHJcbiAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICBzc2NfcXVlLnNwbGljZShhLCAxKTtcclxuICAgICAgICAgICAgICAgIGEtLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHZhciB2ID0gZS5zY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBlLnNjcm9sbExlZnQgKz0gbztcclxuICAgICAgICAgICAgaWYgKG8gJiYgZS5zY3JvbGxMZWZ0ID09PSB2KSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgIHZhciBtID0gZS5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGUuc2Nyb2xsVG9wICs9IHU7XHJcbiAgICAgICAgICAgIGlmICh1ICYmIGUuc2Nyb2xsVG9wID09PSBtKSB7XHJcbiAgICAgICAgICAgICAgICBuID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdCAmJiAhbikge1xyXG4gICAgICAgICAgICBzc2NfcXVlID0gW11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNzY19xdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaSwgciAvIHNzY19mcmFtZXJhdGUgKyAxKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNzY19wZW5kaW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgc2V0VGltZW91dChpLCAwKTtcclxuICAgIHNzY19wZW5kaW5nID0gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2Nfd2hlZWwoZSkge1xyXG4gICAgaWYgKCFzc2NfaW5pdGRvbmUpIHtcclxuICAgICAgICBzc2NfaW5pdCgpXHJcbiAgICB9XHJcbiAgICB2YXIgdCA9IGUudGFyZ2V0O1xyXG4gICAgdmFyIG4gPSBzc2Nfb3ZlcmZsb3dpbmdBbmNlc3Rvcih0KTtcclxuICAgIGlmICghbiB8fCBlLmRlZmF1bHRQcmV2ZW50ZWQgfHwgc3NjX2lzTm9kZU5hbWUoc3NjX2FjdGl2ZUVsZW1lbnQsIFwiZW1iZWRcIikgfHwgc3NjX2lzTm9kZU5hbWUodCwgXCJlbWJlZFwiKSAmJiAvXFwucGRmL2kudGVzdCh0LnNyYykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdmFyIHIgPSBlLndoZWVsRGVsdGFYIHx8IDA7XHJcbiAgICB2YXIgaSA9IGUud2hlZWxEZWx0YVkgfHwgMDtcclxuICAgIGlmICghciAmJiAhaSkge1xyXG4gICAgICAgIGkgPSBlLndoZWVsRGVsdGEgfHwgMFxyXG4gICAgfVxyXG4gICAgaWYgKE1hdGguYWJzKHIpID4gMS4yKSB7XHJcbiAgICAgICAgciAqPSBzc2Nfc3RlcHNpemUgLyAxMjBcclxuICAgIH1cclxuICAgIGlmIChNYXRoLmFicyhpKSA+IDEuMikge1xyXG4gICAgICAgIGkgKj0gc3NjX3N0ZXBzaXplIC8gMTIwXHJcbiAgICB9XHJcbiAgICBzc2Nfc2Nyb2xsQXJyYXkobiwgLXIsIC1pKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2Nfa2V5ZG93bihlKSB7XHJcbiAgICB2YXIgdCA9IGUudGFyZ2V0O1xyXG4gICAgdmFyIG4gPSBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5tZXRhS2V5O1xyXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYXxlbWJlZC9pLnRlc3QodC5ub2RlTmFtZSkgfHwgdC5pc0NvbnRlbnRFZGl0YWJsZSB8fCBlLmRlZmF1bHRQcmV2ZW50ZWQgfHwgbikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoc3NjX2lzTm9kZU5hbWUodCwgXCJidXR0b25cIikgJiYgZS5rZXlDb2RlID09PSBzc2Nfa2V5LnNwYWNlYmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhciByLCBpID0gMCxcclxuICAgICAgICBzID0gMDtcclxuICAgIHZhciBvID0gc3NjX292ZXJmbG93aW5nQW5jZXN0b3Ioc3NjX2FjdGl2ZUVsZW1lbnQpO1xyXG4gICAgdmFyIHUgPSBvLmNsaWVudEhlaWdodDtcclxuICAgIGlmIChvID09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICB1ID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgY2FzZSBzc2Nfa2V5LnVwOlxyXG4gICAgICAgIHMgPSAtc3NjX2Fycm93c2Nyb2xsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LmRvd246XHJcbiAgICAgICAgcyA9IHNzY19hcnJvd3Njcm9sbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5zcGFjZWJhcjpcclxuICAgICAgICByID0gZS5zaGlmdEtleSA/IDEgOiAtMTtcclxuICAgICAgICBzID0gLXIgKiB1ICogLjk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkucGFnZXVwOlxyXG4gICAgICAgIHMgPSAtdSAqIC45O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LnBhZ2Vkb3duOlxyXG4gICAgICAgIHMgPSB1ICogLjk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkuaG9tZTpcclxuICAgICAgICBzID0gLW8uc2Nyb2xsVG9wO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBzc2Nfa2V5LmVuZDpcclxuICAgICAgICB2YXIgYSA9IG8uc2Nyb2xsSGVpZ2h0IC0gby5zY3JvbGxUb3AgLSB1O1xyXG4gICAgICAgIHMgPSBhID4gMCA/IGEgKyAxMCA6IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHNzY19rZXkubGVmdDpcclxuICAgICAgICBpID0gLXNzY19hcnJvd3Njcm9sbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugc3NjX2tleS5yaWdodDpcclxuICAgICAgICBpID0gc3NjX2Fycm93c2Nyb2xsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3NjX3Njcm9sbEFycmF5KG8sIGksIHMpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19tb3VzZWRvd24oZSkge1xyXG4gICAgc3NjX2FjdGl2ZUVsZW1lbnQgPSBlLnRhcmdldFxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2Nfc2V0Q2FjaGUoZSwgdCkge1xyXG4gICAgZm9yICh2YXIgbiA9IGUubGVuZ3RoOyBuLS07KSBzc2NfY2FjaGVbc3NjX3VuaXF1ZUlEKGVbbl0pXSA9IHQ7XHJcbiAgICByZXR1cm4gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2Nfb3ZlcmZsb3dpbmdBbmNlc3RvcihlKSB7XHJcbiAgICB2YXIgdCA9IFtdO1xyXG4gICAgdmFyIG4gPSBzc2Nfcm9vdC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgdmFyIHIgPSBzc2NfY2FjaGVbc3NjX3VuaXF1ZUlEKGUpXTtcclxuICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3NjX3NldENhY2hlKHQsIHIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQucHVzaChlKTtcclxuICAgICAgICBpZiAobiA9PT0gZS5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKCFzc2NfZnJhbWUgfHwgc3NjX3Jvb3QuY2xpZW50SGVpZ2h0ICsgMTAgPCBuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3NjX3NldENhY2hlKHQsIGRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuY2xpZW50SGVpZ2h0ICsgMTAgPCBlLnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBvdmVyZmxvdyA9IGdldENvbXB1dGVkU3R5bGUoZSwgXCJcIikuZ2V0UHJvcGVydHlWYWx1ZShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgICAgICBpZiAob3ZlcmZsb3cgPT09IFwic2Nyb2xsXCIgfHwgb3ZlcmZsb3cgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3NjX3NldENhY2hlKHQsIGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IHdoaWxlIChlID0gZS5wYXJlbnROb2RlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfYWRkRXZlbnQoZSwgdCwgbikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZSwgdCwgbiB8fCBmYWxzZSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX3JlbW92ZUV2ZW50KGUsIHQsIG4pIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHQsIG4gfHwgZmFsc2UpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19pc05vZGVOYW1lKGUsIHQpIHtcclxuICAgIHJldHVybiBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHQudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzc2NfZGlyZWN0aW9uQ2hlY2soZSwgdCkge1xyXG4gICAgZSA9IGUgPiAwID8gMSA6IC0xO1xyXG4gICAgdCA9IHQgPiAwID8gMSA6IC0xO1xyXG4gICAgaWYgKHNzY19kaXJlY3Rpb24ueCAhPT0gZSB8fCBzc2NfZGlyZWN0aW9uLnkgIT09IHQpIHtcclxuICAgICAgICBzc2NfZGlyZWN0aW9uLnggPSBlO1xyXG4gICAgICAgIHNzY19kaXJlY3Rpb24ueSA9IHQ7XHJcbiAgICAgICAgc3NjX3F1ZSA9IFtdXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNzY19wdWxzZV8oZSkge1xyXG4gICAgdmFyIHQsIG4sIHI7XHJcbiAgICBlID0gZSAqIHNzY19wdWxzZVNjYWxlO1xyXG4gICAgaWYgKGUgPCAxKSB7XHJcbiAgICAgICAgdCA9IGUgLSAoMSAtIE1hdGguZXhwKC1lKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbiA9IE1hdGguZXhwKC0xKTtcclxuICAgICAgICBlIC09IDE7XHJcbiAgICAgICAgciA9IDEgLSBNYXRoLmV4cCgtZSk7XHJcbiAgICAgICAgdCA9IG4gKyByICogKDEgLSBuKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQgKiBzc2NfcHVsc2VOb3JtYWxpemVcclxufVxyXG5cclxuZnVuY3Rpb24gc3NjX3B1bHNlKGUpIHtcclxuICAgIGlmIChlID49IDEpIHJldHVybiAxO1xyXG4gICAgaWYgKGUgPD0gMCkgcmV0dXJuIDA7XHJcbiAgICBpZiAoc3NjX3B1bHNlTm9ybWFsaXplID09IDEpIHtcclxuICAgICAgICBzc2NfcHVsc2VOb3JtYWxpemUgLz0gc3NjX3B1bHNlXygxKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNzY19wdWxzZV8oZSlcclxufVxyXG5cclxudmFyIHNzY19mcmFtZXJhdGUgPSAxNTA7XHJcbnZhciBzc2NfYW5pbXRpbWUgPSA1MDA7XHJcbnZhciBzc2Nfc3RlcHNpemUgPSAxNTA7XHJcbnZhciBzc2NfcHVsc2VBbGdvcml0aG0gPSB0cnVlO1xyXG52YXIgc3NjX3B1bHNlU2NhbGUgPSA2O1xyXG52YXIgc3NjX3B1bHNlTm9ybWFsaXplID0gMTtcclxudmFyIHNzY19rZXlib2FyZHN1cHBvcnQgPSB0cnVlO1xyXG52YXIgc3NjX2Fycm93c2Nyb2xsID0gNTA7XHJcbnZhciBzc2NfZnJhbWUgPSBmYWxzZTtcclxudmFyIHNzY19kaXJlY3Rpb24gPSB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMFxyXG59O1xyXG5cclxudmFyIHNzY19pbml0ZG9uZSA9IGZhbHNlO1xyXG52YXIgc3NjX2ZpeGVkYmFjayA9IHRydWU7XHJcbnZhciBzc2Nfcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxudmFyIHNzY19hY3RpdmVFbGVtZW50O1xyXG52YXIgc3NjX2tleSA9IHtcclxuICAgIGxlZnQ6IDM3LFxyXG4gICAgdXA6IDM4LFxyXG4gICAgcmlnaHQ6IDM5LFxyXG4gICAgZG93bjogNDAsXHJcbiAgICBzcGFjZWJhcjogMzIsXHJcbiAgICBwYWdldXA6IDMzLFxyXG4gICAgcGFnZWRvd246IDM0LFxyXG4gICAgZW5kOiAzNSxcclxuICAgIGhvbWU6IDM2XHJcbn07XHJcblxyXG52YXIgc3NjX3F1ZSA9IFtdO1xyXG52YXIgc3NjX3BlbmRpbmcgPSBmYWxzZTtcclxudmFyIHNzY19jYWNoZSA9IHt9O1xyXG5cclxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgc3NjX2NhY2hlID0ge31cclxufSwgMTAgKiAxZTMpO1xyXG5cclxudmFyIHNzY191bmlxdWVJRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlID0gMDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0LnNzY191bmlxdWVJRCB8fCAodC5zc2NfdW5pcXVlSUQgPSBlKyspXHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbnZhciBpc2Nocm9tZSA9IC9jaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbmlmIChpc2Nocm9tZSkge1xyXG4gICAgc3NjX2FkZEV2ZW50KFwibW91c2Vkb3duXCIsIHNzY19tb3VzZWRvd24pO1xyXG4gICAgc3NjX2FkZEV2ZW50KFwibW91c2V3aGVlbFwiLCBzc2Nfd2hlZWwpO1xyXG4gICAgc3NjX2FkZEV2ZW50KFwibG9hZFwiLCBzc2NfaW5pdClcclxufSIsIi8qISBXT1cgLSB2MC4xLjQgLSAyMDE0LTAyLTEyXHJcbiogQ29weXJpZ2h0IChjKSAyMDE0IE1hdHRoaWV1IEF1c3NhZ3VlbDsgTGljZW5zZWQgTUlUICovKGZ1bmN0aW9uKCl7dmFyIGEsYj1bXS5zbGljZSxjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX07YT1mdW5jdGlvbigpe3ZhciBjLGQsZSxmLGcsaCxpLGosaztmb3IoZT1hcmd1bWVudHNbMF0sYz0yPD1hcmd1bWVudHMubGVuZ3RoP2IuY2FsbChhcmd1bWVudHMsMSk6W10sZz1lfHx7fSxpPTAsaj1jLmxlbmd0aDtqPmk7aSsrKXtmPWNbaV0saz1mfHx7fTtmb3IoZCBpbiBrKWg9a1tkXSxcIm9iamVjdFwiPT10eXBlb2YgZ1tkXT9nW2RdPWEoZ1tkXSxoKTpnW2RdfHwoZ1tkXT1oKX1yZXR1cm4gZ30sdGhpcy5XT1c9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe251bGw9PWImJihiPXt9KSx0aGlzLnNjcm9sbENhbGxiYWNrPWModGhpcy5zY3JvbGxDYWxsYmFjayx0aGlzKSx0aGlzLnNjcm9sbEhhbmRsZXI9Yyh0aGlzLnNjcm9sbEhhbmRsZXIsdGhpcyksdGhpcy5zdGFydD1jKHRoaXMuc3RhcnQsdGhpcyksdGhpcy5jb25maWc9YShiLHRoaXMuZGVmYXVsdHMpLHRoaXMuc2Nyb2xsZWQ9ITB9cmV0dXJuIGIucHJvdG90eXBlLmRlZmF1bHRzPXtib3hDbGFzczpcIndvd1wiLGFuaW1hdGVDbGFzczpcImFuaW1hdGVkXCIsb2Zmc2V0OjB9LGIucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm5cImludGVyYWN0aXZlXCI9PT0oYT1kb2N1bWVudC5yZWFkeVN0YXRlKXx8XCJjb21wbGV0ZVwiPT09YT90aGlzLnN0YXJ0KCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIix0aGlzLnN0YXJ0KX0sYi5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZDtpZih0aGlzLmVsZW1lbnQ9d2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0aGlzLmJveGVzPXRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuY29uZmlnLmJveENsYXNzKSx0aGlzLmJveGVzLmxlbmd0aCl7Zm9yKGQ9dGhpcy5ib3hlcyxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWE9ZFtiXSx0aGlzLmFwcGx5U3R5bGUoYSwhMCk7cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5zY3JvbGxIYW5kbGVyLCExKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuc2Nyb2xsSGFuZGxlciwhMSksdGhpcy5pbnRlcnZhbD1zZXRJbnRlcnZhbCh0aGlzLnNjcm9sbENhbGxiYWNrLDUwKX19LGIucHJvdG90eXBlLnN0b3A9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLnNjcm9sbEhhbmRsZXIsITEpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyLCExKSxudWxsIT10aGlzLmludGVydmFsP2NsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk6dm9pZCAwfSxiLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFwcGx5U3R5bGUoYSksYS5jbGFzc05hbWU9XCJcIithLmNsYXNzTmFtZStcIiBcIit0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3N9LGIucHJvdG90eXBlLmFwcGx5U3R5bGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7cmV0dXJuIGQ9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1kdXJhdGlvblwiKSxjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctZGVsYXlcIiksZT1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWl0ZXJhdGlvblwiKSxhLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsdGhpcy5jdXN0b21TdHlsZShiLGQsYyxlKSl9LGIucHJvdG90eXBlLmN1c3RvbVN0eWxlPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlO3JldHVybiBlPWE/XCJ2aXNpYmlsaXR5OiBoaWRkZW47IC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG5vbmU7IC1tb3otYW5pbWF0aW9uLW5hbWU6IG5vbmU7IGFuaW1hdGlvbi1uYW1lOiBub25lO1wiOlwidmlzaWJpbGl0eTogdmlzaWJsZTtcIixiJiYoZSs9XCItd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogXCIrYitcIjsgLW1vei1hbmltYXRpb24tZHVyYXRpb246IFwiK2IrXCI7IGFuaW1hdGlvbi1kdXJhdGlvbjogXCIrYitcIjtcIiksYyYmKGUrPVwiLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IFwiK2MrXCI7IC1tb3otYW5pbWF0aW9uLWRlbGF5OiBcIitjK1wiOyBhbmltYXRpb24tZGVsYXk6IFwiK2MrXCI7XCIpLGQmJihlKz1cIi13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogXCIrZCtcIjsgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBcIitkK1wiOyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBcIitkK1wiO1wiKSxlfSxiLnByb3RvdHlwZS5zY3JvbGxIYW5kbGVyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2Nyb2xsZWQ9ITB9LGIucHJvdG90eXBlLnNjcm9sbENhbGxiYWNrPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIHRoaXMuc2Nyb2xsZWQmJih0aGlzLnNjcm9sbGVkPSExLHRoaXMuYm94ZXM9ZnVuY3Rpb24oKXt2YXIgYixjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKylhPWRbYl0sYSYmKHRoaXMuaXNWaXNpYmxlKGEpP3RoaXMuc2hvdyhhKTplLnB1c2goYSkpO3JldHVybiBlfS5jYWxsKHRoaXMpLCF0aGlzLmJveGVzLmxlbmd0aCk/dGhpcy5zdG9wKCk6dm9pZCAwfSxiLnByb3RvdHlwZS5vZmZzZXRUb3A9ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGI9YS5vZmZzZXRUb3A7YT1hLm9mZnNldFBhcmVudDspYis9YS5vZmZzZXRUb3A7cmV0dXJuIGJ9LGIucHJvdG90eXBlLmlzVmlzaWJsZT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO3JldHVybiBjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctb2Zmc2V0XCIpfHx0aGlzLmNvbmZpZy5vZmZzZXQsZj13aW5kb3cucGFnZVlPZmZzZXQsZT1mK3RoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQtYyxkPXRoaXMub2Zmc2V0VG9wKGEpLGI9ZCthLmNsaWVudEhlaWdodCxlPj1kJiZiPj1mfSxifSgpfSkuY2FsbCh0aGlzKTsiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIEJBQ0tHUk9VTkQgU0xJREVSICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4kLnZlZ2FzKCdzbGlkZXNob3cnLCB7XHJcbiAgZGVsYXk6NzAwMCxcclxuICBiYWNrZ3JvdW5kczpbXHJcbiAgICB7IHNyYzonaW1hZ2VzL2JhY2tncm91bmRzL2JnMS5qcGcnLCBmYWRlOjEwMDAgfSxcclxuICAgIHsgc3JjOidpbWFnZXMvYmFja2dyb3VuZHMvYmcyLmpwZycsIGZhZGU6MTAwMCB9LFxyXG4gICAgeyBzcmM6J2ltYWdlcy9iYWNrZ3JvdW5kcy9iZzMuanBnJywgZmFkZToxMDAwIH1cclxuICBdXHJcbn0pO1xyXG4gICAgICBcclxuICAgXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBMT0FERVIgICAgICAgICAgICAgICAgICAgICBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gbWFrZXMgc3VyZSB0aGUgd2hvbGUgc2l0ZSBpcyBsb2FkZWRcclxualF1ZXJ5KHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyB3aWxsIGZpcnN0IGZhZGUgb3V0IHRoZSBsb2FkaW5nIGFuaW1hdGlvblxyXG5cdGpRdWVyeShcIi5zdGF0dXNcIikuZmFkZU91dCgpO1xyXG4gICAgICAgIC8vIHdpbGwgZmFkZSBvdXQgdGhlIHdob2xlIERJViB0aGF0IGNvdmVycyB0aGUgd2Vic2l0ZS5cclxuXHRqUXVlcnkoXCIucHJlbG9hZGVyXCIpLmRlbGF5KDEwMDApLmZhZGVPdXQoXCJzbG93XCIpO1xyXG59KVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIEJvb3RzdHJhcCBGaXggICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlXFwvMTBcXC4wLykpIHtcclxuICB2YXIgbXNWaWV3cG9ydFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gIG1zVmlld3BvcnRTdHlsZS5hcHBlbmRDaGlsZChcclxuICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxyXG4gICAgICAnQC1tcy12aWV3cG9ydHt3aWR0aDphdXRvIWltcG9ydGFudH0nXHJcbiAgICApXHJcbiAgKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChtc1ZpZXdwb3J0U3R5bGUpXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIFNUSUNLWSBOQVYgICAgICAgICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoJy5tYWluLW5hdi1saXN0Jykub25lUGFnZU5hdih7XHJcbiAgICBjaGFuZ2VIYXNoOiB0cnVlLFxyXG4gICAgc2Nyb2xsU3BlZWQ6IDc1MCxcclxuICAgIHNjcm9sbFRocmVzaG9sZDogMC41LFxyXG4gICAgZmlsdGVyOiAnOm5vdCguZXh0ZXJuYWwpJ1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIFN0aWNreSBIZWFkZXIgLSBodHRwOi8vanF1ZXJ5Zm9yZGVzaWduZXJzLmNvbS9maXhlZC1mbG9hdGluZy1lbGVtZW50cy8gICAgICAgICBcclxuICB2YXIgdG9wID0gJCgnI21haW4tbmF2Jykub2Zmc2V0KCkudG9wIC0gcGFyc2VGbG9hdCgkKCcjbWFpbi1uYXYnKS5jc3MoJ21hcmdpbi10b3AnKS5yZXBsYWNlKC9hdXRvLywgMCkpO1xyXG4gIFxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyB3aGF0IHRoZSB5IHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwgaXNcclxuICAgIHZhciB5ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIFxyXG4gICAgLy8gd2hldGhlciB0aGF0J3MgYmVsb3cgdGhlIGZvcm1cclxuICAgIGlmICh5ID49IHRvcCkge1xyXG4gICAgICAvLyBpZiBzbywgYWQgdGhlIGZpeGVkIGNsYXNzXHJcbiAgICAgICQoJyNtYWluLW5hdicpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gb3RoZXJ3aXNlIHJlbW92ZSBpdFxyXG4gICAgICAkKCcjbWFpbi1uYXYnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAvKiAgU01PT1RIIFNDUk9MTCBGUk8gSU5URVJOQUwgI0hBU0ggTElOS1NcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJCgnYVtocmVmXj1cIiNcIl0uaW5wYWdlLXNjcm9sbCwgLmlucGFnZS1zY3JvbGwgYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5oYXNoLFxyXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xyXG4gICAgICAgICQoJy5tYWluLW5hdmlnYXRpb24gYVtocmVmPVwiJyArIHRhcmdldCArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLm1haW4tbmF2aWdhdGlvbiBhOm5vdChbaHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdKScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAnc2Nyb2xsVG9wJzogKCR0YXJnZXQub2Zmc2V0KCkpID8gJHRhcmdldC5vZmZzZXQoKS50b3AgOiAwXHJcbiAgICAgICAgfSwgOTAwLCAnc3dpbmcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0YXJnZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIE9XTCBDUk9VU0VMICAgICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIHZhciBvd2wgPSAkKFwiI2NsaWVudC1mZWVkYmFja3NcIik7XHJcbiAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgaXRlbXMgOiAzLCAvLzEwIGl0ZW1zIGFib3ZlIDEwMDBweCBicm93c2VyIHdpZHRoXHJcbiAgICAgIGl0ZW1zRGVza3RvcCA6IFsxMDAwLDJdLCAvLzUgaXRlbXMgYmV0d2VlbiAxMDAwcHggYW5kIDkwMXB4XHJcbiAgICAgIGl0ZW1zRGVza3RvcFNtYWxsIDogWzkwMCwxXSwgLy8gYmV0d2VlbSA5MDBweCBhbmQgNjAxcHhcclxuICAgICAgaXRlbXNUYWJsZXQ6IFs2MDAsMV0sIC8vMiBpdGVtcyBiZXR3ZWVuIDYwMCBhbmQgMFxyXG4gICAgICBpdGVtc01vYmlsZSA6IGZhbHNlIC8vIGl0ZW1zTW9iaWxlIGRpc2FibGVkIC0gaW5oZXJpdCBmcm9tIGl0ZW1zVGFibGV0IG9wdGlvblxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIFNNT09USCBTQ1JPTEwgICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG52YXIgc2Nyb2xsQW5pbWF0aW9uVGltZSA9IDEyMDAsXHJcbiAgICAgICAgc2Nyb2xsQW5pbWF0aW9uID0gJ2Vhc2VJbk91dEV4cG8nO1xyXG4gICAgJCgnYS5zY3JvbGx0bycpLmJpbmQoJ2NsaWNrLnNtb290aHNjcm9sbCcsZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5oYXNoO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICdzY3JvbGxUb3AnOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgc2Nyb2xsQW5pbWF0aW9uVGltZSwgc2Nyb2xsQW5pbWF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7ICAgXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgQ09OVEFDVCBGT1JNICAgICAgICAgID09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiQoXCIjY29udGFjdC1mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgdmFyIHN1YmplY3QgPSAkKFwiI3N1YmplY3RcIikudmFsKCk7XHJcbiAgICB2YXIgbWVzc2FnZSA9ICQoXCIjbWVzc2FnZVwiKS52YWwoKTtcclxuICAgIHZhciBkYXRhU3RyaW5nID0gJ25hbWU9JyArIG5hbWUgKyAnJmVtYWlsPScgKyBlbWFpbCArICcmc3ViamVjdD0nICsgc3ViamVjdCArICcmbWVzc2FnZT0nICsgbWVzc2FnZTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWxBZGRyZXNzKSB7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eKCgoW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLj8kL2kpO1xyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWxBZGRyZXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlzVmFsaWRFbWFpbChlbWFpbCkgJiYgKG1lc3NhZ2UubGVuZ3RoID4gMSkgJiYgKG5hbWUubGVuZ3RoID4gMSkpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcInNlbmRtYWlsLnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3VjY2VzcycpLmZhZGVJbigxMDAwKTtcclxuICAgICAgICAgICAgICAgICQoJy5lcnJvcicpLmZhZGVPdXQoNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuZXJyb3InKS5mYWRlSW4oMTAwMCk7XHJcbiAgICAgICAgJCgnLnN1Y2Nlc3MnKS5mYWRlT3V0KDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTtcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIFBST0pFQ1QgTE9BRElORyAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gICAgJCgnLm1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJykgKyAnIC5zaW5nbGUtcHJvamVjdCcsXHJcbiAgICAgICAgICAgIHBvcnRmb2xpb0xpc3QgPSAkKCcjcG9ydGZvbGlvLWxpc3QnKSxcclxuICAgICAgICAgICAgY29udGVudCA9ICQoJyNsb2FkZWQtY29udGVudCcpO1xyXG5cclxuICAgICAgICBwb3J0Zm9saW9MaXN0LmFuaW1hdGUoeydtYXJnaW5MZWZ0JzonLTEyMCUnfSx7ZHVyYXRpb246NDAwLHF1ZXVlOmZhbHNlfSk7XHJcbiAgICAgICAgcG9ydGZvbGlvTGlzdC5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyAkKCcjbG9hZGVyJykuc2hvdygpOyB9LDQwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb250ZW50LmxvYWQoaHJlZiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbG9hZGVkLWNvbnRlbnQgbWV0YScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuZmFkZUluKDYwMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjYmFjay1idXR0b24nKS5mYWRlSW4oNjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSw4MDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNiYWNrLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIHBvcnRmb2xpb0xpc3QgPSAkKCcjcG9ydGZvbGlvLWxpc3QnKVxyXG4gICAgICAgICAgICBjb250ZW50ID0gJCgnI2xvYWRlZC1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICQoJyNiYWNrLWJ1dHRvbicpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHBvcnRmb2xpb0xpc3QuYW5pbWF0ZSh7J21hcmdpbkxlZnQnOicwJ30se2R1cmF0aW9uOjQwMCxxdWV1ZTpmYWxzZX0pO1xyXG4gICAgICAgICAgICBwb3J0Zm9saW9MaXN0LmZhZGVJbig2MDApO1xyXG4gICAgICAgIH0sODAwKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgUEFSQUxMQVggICAgICAgICAgICAgICAgICA9PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICQoJ2RpdltkYXRhLXR5cGU9XCJiYWNrZ3JvdW5kXCJdLCBoZWFkZXJbZGF0YS10eXBlPVwiYmFja2dyb3VuZFwiXSwgc2VjdGlvbltkYXRhLXR5cGU9XCJiYWNrZ3JvdW5kXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgdmFyICRiZ29iaiA9ICQodGhpcyk7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgeVBvcyA9IC0oJHdpbmRvdy5zY3JvbGxUb3AoKSAvICRiZ29iai5kYXRhKCdzcGVlZCcpKTtcclxuICAgICAgdmFyIGNvb3JkcyA9ICc1MCUgJysgeVBvcyArICdweCc7XHJcbiAgICAgICRiZ29iai5jc3MoeyBcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGNvb3JkcyBcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIEtOT0IgICAgICAgICAgICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuJChmdW5jdGlvbigpIHtcclxuJChcIi5za2lsbDFcIikua25vYih7XHJcbiAgICAgICAgICAgICAgICAnbWF4JzoxMDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiA2NCxcclxuICAgICAgICAgICAgICAgICdyZWFkT25seSc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dENvbG9yJzonICNGRkZGRkYgJyxcclxuICAgICAgICAgICAgICAgICdiZ0NvbG9yJzonICMyMjIyMjIgJyxcclxuICAgICAgICAgICAgICAgICdmZ0NvbG9yJzonICNlOTY2NTYgJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiQoXCIuc2tpbGwyXCIpLmtub2Ioe1xyXG4gICAgICAgICAgICAgICAgJ21heCc6MTAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogNjQsXHJcbiAgICAgICAgICAgICAgICAncmVhZE9ubHknOnRydWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXRDb2xvcic6JyAjRkZGRkZGICcsXHJcbiAgICAgICAgICAgICAgICAnYmdDb2xvcic6JyAjMjIyMjIyICcsXHJcbiAgICAgICAgICAgICAgICAnZmdDb2xvcic6JyAjMzRkMjkzICdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICQoXCIuc2tpbGwzXCIpLmtub2Ioe1xyXG4gICAgICAgICAgICAgICAgJ21heCc6IDEwMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6IDY0LFxyXG4gICAgICAgICAgICAgICAgJ3JlYWRPbmx5JzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dENvbG9yJzonICNGRkZGRkYgJyxcclxuICAgICAgICAgICAgICAgICdiZ0NvbG9yJzonICMyMjIyMjIgJyxcclxuICAgICAgICAgICAgICAgICdmZ0NvbG9yJzonICMzYWIwZTIgJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgJChcIi5za2lsbDRcIikua25vYih7XHJcbiAgICAgICAgICAgICAgICAnbWF4JzogMTAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogNjQsXHJcbiAgICAgICAgICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0Q29sb3InOicgI0ZGRkZGRiAnLFxyXG4gICAgICAgICAgICAgICAgJ2JnQ29sb3InOicgIzIyMjIyMiAnLFxyXG4gICAgICAgICAgICAgICAgJ2ZnQ29sb3InOicgI0U3QUM0NCAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gIFdPVyBBTklNQVRJT04gICAgICAgICAgICAgPT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxubmV3IFdPVygpLmluaXQoKTtcclxuXHJcblxyXG5cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogYWJvdXQuY29udHJvbGxlci5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBDb250cm9sbGVycy5jb250cm9sbGVyKCdhYm91dENvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLCAnJHJvb3RTY29wZScsIFxyXG4gICAgZnVuY3Rpb24oJHNjb3BlLCAgICRyb290U2NvcGUpe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ2Fib3V0Q29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgXHJcbiAgICAgICAgJHJvb3RTY29wZS5jbGVhcm1lbnVjbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICRzY29wZS5pdGVtcyA9IFsnYWJvdXQnLCAnd2Vic2l0ZScsICdjb250YWN0J107XHJcblxyXG4gICAgfVxyXG5dKTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ2Fib3V0Q29udHJvbGxlcicpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBhYm91dC5jb250cm9sbGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBjYWxlbmRhci5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2NhbGVuZGFyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgaWYoZGVidWcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ2NhbGVuZGFyQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgICRzY29wZS51aUNvbmZpZyA9IHtcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgICBoZWlnaHQgICAgICA6IDQ1MCxcclxuICAgICAgICAgICAgZWRpdGFibGUgICAgOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWFkZXIgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIGxlZnQgICAgOiAnbW9udGggYmFzaWNXZWVrIGJhc2ljRGF5IGFnZW5kYVdlZWsgYWdlbmRhRGF5JyxcclxuICAgICAgICAgICAgICAgIGNlbnRlciAgOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQgICA6ICd0b2RheSBwcmV2LG5leHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRheUNsaWNrICAgIDogJHNjb3BlLmFsZXJ0RXZlbnRPbkNsaWNrLFxyXG4gICAgICAgICAgICBldmVudERyb3AgICA6ICRzY29wZS5hbGVydE9uRHJvcCxcclxuICAgICAgICAgICAgZXZlbnRSZXNpemUgOiAkc2NvcGUuYWxlcnRPblJlc2l6ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxufV0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnY2FsZW5kYXJDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIGNhbGVuZGFyLmNvbnRyb2xsZXIuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGhvbWUuY29udHJvbGxlci5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBDb250cm9sbGVycy5jb250cm9sbGVyKCdob21lQ29udHJvbGxlcicsIFtcclxuICAgICAgICAgICAgJyRzY29wZScsICckcm9vdFNjb3BlJywgXHJcbiAgICBmdW5jdGlvbigkc2NvcGUsICAgJHJvb3RTY29wZSl7XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnaG9tZUNvbnRyb2xsZXInKSBhY3RpdmF0ZWRcIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBcclxuICAgICAgICAkcm9vdFNjb3BlLmNsZWFybWVudWNsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVGVtcG9yYXJ5IHZhbHVlcyBcclxuICAgICAgICAvLyBUT0RPOiByZXBsYWNlIHRoZXNlIHdpdGggcmVhbCBsb2dpbiB2YWx1ZXM7XHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUudXNlck5hbWUgPSBcImJpbGxAbWFpbnR6LmNvbVwiXHJcbiAgICB9XHJcbl0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygnaG9tZUNvbnRyb2xsZXInKSBkZWZpbmVkXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gaG9tZS5jb250cm9sbGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB1c2Vycy5jb250cm9sbGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcENvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ3VzZXJzQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgVXNlcikge1xyXG4gICAgaWYoZGVidWcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwQ29udHJvbGxlcnMoJ3VzZXJzQ29udHJvbGxlcicpIGFjdGl2YXRlZFwiKTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgICAgICAkc2NvcGUuc2F2ZVVzZXIgPSBVc2VyLnNhdmU7XHJcbiAgICBcclxuICAgICAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbihVc2VyLCBwYXNzd2QpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgJHNjb3BlLnVzZXJOYW1lID0gVXNlcjtcclxuICAgICAgICAgICAgYWxlcnQoXCJMb2dpbiBDb21wbGV0ZWQgOiBsb2dnZWRJbiA9IFwiICsgJHNjb3BlLmxvZ2dlZEluKTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKFVzZXIpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTG9nb3V0IENvbXBsZXRlZCA6IGxvZ2dlZEluID0gXCIgKyAkc2NvcGUubG9nZ2VkSW4pO1xyXG4gICAgICAgIH07XHJcbiAgIH0pO1xyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBDb250cm9sbGVycygndXNlcnNDb250cm9sbGVyJykgZGVmaW5lZFwiKTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgXHJcbmFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKFwiZHVtYlBhc3N3b3JkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj5cXG48aW5wdXQgdHlwZT0ndGV4dCcgbmctbW9kZWw9J21vZGVsLmlucHV0Jz5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiPGRpdj57e21vZGVsLmlucHV0fX08L2Rpdj5cXG4gICAgXFxuPC9kaXY+XCIsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goXCJtb2RlbC5pbnB1dFwiLCBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJwYXNzd29yZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbigxKS50b2dnbGVDbGFzcyhcImFsZXJ0LWJveCBhbGVydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuICAgIFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdXNlcnMuY29udHJvbGxlci5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IGRpcmVjdGl2ZXMuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIERlZmluZSB5b3VyIGRpcmVjdGl2ZXMgaGVyZS4gXHJcbi8vIERpcmVjdGl2ZXMgY2FuIGJlIGFkZGVkIHRvIHNhbWUgbW9kdWxlIGFzIHRoZSBtYWluICdhcHAnIFxyXG4vLyBvciBhIHNlcGVyYXRlIG1vZHVsZSBjYW4gYmUgY3JlYXRlZC5cclxuXHJcbmFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKFwicGhvdG9GbGlwXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgLy90ZW1wbGF0ZVVSTDogJ3BhcnRpYWxzL3Bob3Rvcy9waG90by50ZXN0Lmh0bWwnXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj5cXG48aW5wdXQgdHlwZT0ndGV4dCcgbmctbW9kZWw9J21vZGVsLmlucHV0Jz5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiPGRpdj57e21vZGVsLmlucHV0fX08L2Rpdj5cXG4gICAgXFxuPC9kaXY+XCIsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goXCJtb2RlbC5pbnB1dFwiLCBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJwYXNzd29yZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbigxKS50b2dnbGVDbGFzcyhcImFsZXJ0LWJveCBhbGVydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Bob3RvRmxpcCcpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcblxyXG5cclxuLyoqXHJcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcclxuICogQG5hbWUgdWkuYm9vdHN0cmFwLmNhcm91c2VsLmRpcmVjdGl2ZTpjYXJvdXNlbFxyXG4gKiBAcmVzdHJpY3QgRUFcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENhcm91c2VsIGlzIHRoZSBvdXRlciBjb250YWluZXIgZm9yIGEgc2V0IG9mIGltYWdlICdzbGlkZXMnIHRvIHNob3djYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcj19IGludGVydmFsIFRoZSB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgaXQgd2lsbCB0YWtlIFxyXG4gKiAgICAgdGhlIGNhcm91c2VsIHRvIGdvIHRvIHRoZSBuZXh0IHNsaWRlLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24gV2hldGhlciB0byBkaXNhYmxlIHRyYW5zaXRpb25zIG9uIHRoZSBcclxuICogICAgIGNhcm91c2VsLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1BhdXNlIFdoZXRoZXIgdG8gZGlzYWJsZSBwYXVzaW5nIG9uIHRoZSBjYXJvdXNlbCBcclxuICogICAgKGJ5IGRlZmF1bHQsIHRoZSBjYXJvdXNlbCBpbnRlcnZhbCBwYXVzZXMgb24gaG92ZXIpLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG48ZXhhbXBsZSBtb2R1bGU9XCJ1aS5ib290c3RyYXBcIj5cclxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxyXG4gICAgPGNhcm91c2VsPlxyXG4gICAgICA8c2xpZGU+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzE1MC8xNTBcIiBzdHlsZT1cIm1hcmdpbjphdXRvO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgICA8cD5CZWF1dGlmdWwhPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NsaWRlPlxyXG4gICAgICA8c2xpZGU+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzEwMC8xNTBcIiBzdHlsZT1cIm1hcmdpbjphdXRvO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgICA8cD5EJ2F3dyE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2xpZGU+XHJcbiAgICA8L2Nhcm91c2VsPlxyXG4gIDwvZmlsZT5cclxuICA8ZmlsZSBuYW1lPVwiZGVtby5jc3NcIj5cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgPC9maWxlPlxyXG48L2V4YW1wbGU+XHJcbiovXHJcblxyXG4vLyBDYXJvdXNlbCBEaXJlY3RpdmVcclxuLypcclxuYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ2Nhcm91c2VsJywgW2Z1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ3Bob3Rvc0NvbnRyb2xsZXInLFxyXG4gICAgICAgIHJlcXVpcmU6ICdjYXJvdXNlbCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9jYXJvdXNlbC9jYXJvdXNlbC5odG1sJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgaW50ZXJ2YWw6ICc9JyxcclxuICAgICAgICAgIG5vVHJhbnNpdGlvbjogJz0nLFxyXG4gICAgICAgICAgbm9QYXVzZTogJz0nXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufV0pXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCdjYXJvdXNlbCcpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcbiovXHJcbi8qKlxyXG4gKiBAbmdkb2MgZGlyZWN0aXZlXHJcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC5jYXJvdXNlbC5kaXJlY3RpdmU6c2xpZGVcclxuICogQHJlc3RyaWN0IEVBXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDcmVhdGVzIGEgc2xpZGUgaW5zaWRlIGEge0BsaW5rIHVpLmJvb3RzdHJhcC5jYXJvdXNlbC5kaXJlY3RpdmU6Y2Fyb3VzZWwgY2Fyb3VzZWx9LiAgTXVzdCBiZSBwbGFjZWQgYXMgYSBjaGlsZCBvZiBhIGNhcm91c2VsIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGFjdGl2ZSBNb2RlbCBiaW5kaW5nLCB3aGV0aGVyIG9yIG5vdCB0aGlzIHNsaWRlIGlzIGN1cnJlbnRseSBhY3RpdmUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyPX0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBzbGlkZS4gVGhlIHNsaWRlcyB3aWxsIGJlIHNvcnRlZCBieSB0aGlzIHBhcmFtZXRlci5cclxuICpcclxuICogQGV4YW1wbGVcclxuPGV4YW1wbGUgbW9kdWxlPVwidWkuYm9vdHN0cmFwXCI+XHJcbiAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cclxuPGRpdiBuZy1jb250cm9sbGVyPVwiQ2Fyb3VzZWxEZW1vQ3RybFwiPlxyXG4gIDxjYXJvdXNlbD5cclxuICAgIDxzbGlkZSBuZy1yZXBlYXQ9XCJzbGlkZSBpbiBzbGlkZXNcIiBhY3RpdmU9XCJzbGlkZS5hY3RpdmVcIiBpbmRleD1cIiRpbmRleFwiPlxyXG4gICAgICA8aW1nIG5nLXNyYz1cInt7c2xpZGUuaW1hZ2V9fVwiIHN0eWxlPVwibWFyZ2luOmF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgPGg0PlNsaWRlIHt7JGluZGV4fX08L2g0PlxyXG4gICAgICAgIDxwPnt7c2xpZGUudGV4dH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2xpZGU+XHJcbiAgPC9jYXJvdXNlbD5cclxuICBJbnRlcnZhbCwgaW4gbWlsbGlzZWNvbmRzOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5nLW1vZGVsPVwibXlJbnRlcnZhbFwiPlxyXG4gIDxiciAvPkVudGVyIGEgbmVnYXRpdmUgbnVtYmVyIHRvIHN0b3AgdGhlIGludGVydmFsLlxyXG48L2Rpdj5cclxuICA8L2ZpbGU+XHJcbiAgPGZpbGUgbmFtZT1cInNjcmlwdC5qc1wiPlxyXG5mdW5jdGlvbiBDYXJvdXNlbERlbW9DdHJsKCRzY29wZSkge1xyXG4gICRzY29wZS5teUludGVydmFsID0gNTAwMDtcclxufVxyXG4gIDwvZmlsZT5cclxuICA8ZmlsZSBuYW1lPVwiZGVtby5jc3NcIj5cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgPC9maWxlPlxyXG48L2V4YW1wbGU+XHJcbiovXHJcblxyXG4vKlxyXG5hcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgnc2xpZGUnLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZTogJ15jYXJvdXNlbCcsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvY2Fyb3VzZWwvc2xpZGUuaHRtbCcsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnPT8nLFxyXG4gICAgICAgICAgICBpbmRleDogJz0/J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY2Fyb3VzZWxDdHJsKSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsQ3RybC5hZGRTbGlkZShzY29wZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIC8vd2hlbiB0aGUgc2NvcGUgaXMgZGVzdHJveWVkIHRoZW4gcmVtb3ZlIHRoZSBzbGlkZSBmcm9tIHRoZSBjdXJyZW50IHNsaWRlcyBhcnJheVxyXG4gICAgICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbEN0cmwucmVtb3ZlU2xpZGUoc2NvcGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnYWN0aXZlJywgZnVuY3Rpb24oYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDdHJsLnNlbGVjdChzY29wZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcERpcmVjdGl2ZXMuZGlyZWN0aXZlKCdzbGlkZScpIGRlZmluZWRcIik7XHJcbn0gICAgXHJcblxyXG5hcHBEaXJlY3RpdmVzLmFuaW1hdGlvbignLml0ZW0nLCBbXHJcbiAgICAgICAgICAgICAnJGFuaW1hdGUnLFxyXG4gICAgZnVuY3Rpb24gKCRhbmltYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmVmb3JlQWRkQ2xhc3M6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUsIGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIER1ZSB0byB0cmFuc2NsdXNpb24sIG5vVHJhbnNpdGlvbiBwcm9wZXJ0eSBpcyBvbiBwYXJlbnQncyBzY29wZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSAnYWN0aXZlJyAmJiBlbGVtZW50LnBhcmVudCgpICYmXHJcbiAgICAgICAgICAgICAgICAhZWxlbWVudC5wYXJlbnQoKS5zY29wZSgpLm5vVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGVsZW1lbnQuaXNvbGF0ZVNjb3BlKCkuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb25DbGFzcyA9IGRpcmVjdGlvbiA9PSAnbmV4dCcgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3Rpb25DbGFzcykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RvcHBlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhkaXJlY3Rpb25DbGFzcyArICcgJyArIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZWZvcmVSZW1vdmVDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRHVlIHRvIHRyYW5zY2x1c2lvbiwgbm9UcmFuc2l0aW9uIHByb3BlcnR5IGlzIG9uIHBhcmVudCdzIHNjb3BlXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdhY3RpdmUnICYmIGVsZW1lbnQucGFyZW50KCkgJiZcclxuICAgICAgICAgICAgICAgICFlbGVtZW50LnBhcmVudCgpLnNjb3BlKCkubm9UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZWxlbWVudC5pc29sYXRlU2NvcGUoKS5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzID0gZGlyZWN0aW9uID09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aW9uQ2xhc3MpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3BwZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXSk7XHJcbiBcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmFuaW1hdGlvbignLml0ZW0nKSBkZWZpbmVkXCIpO1xyXG59ICAgIFxyXG4qL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHRlc3QuZGlyZWN0aXZlLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB0ZXN0LmRpcmVjdGl2ZS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gRGVmaW5lIHlvdXIgZGlyZWN0aXZlcyBoZXJlLiBcclxuLy8gRGlyZWN0aXZlcyBjYW4gYmUgYWRkZWQgdG8gc2FtZSBtb2R1bGUgYXMgJ21haW5BcHAnIG9yIGEgc2VwZXJhdGUgbW9kdWxlIGNhbiBiZSBjcmVhdGVkLlxyXG5cclxuYXBwLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1BJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3VzZSBhcyAndGVzdERpcmVjdGl2ZScgYXR0cmlidXRlIGluIEhUTUxcclxuICAgICAgICAvLyBpLmUuIDxkaXYgdGVzdERpcmVjdGl2ZT48L2Rpdj5cclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3REaXJlY3RpdmUtQSBsaW5rZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtQScpIGRlZmluZWRcIik7XHJcbn0gXHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0ZXN0RGlyZWN0aXZlLUMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vdXNlIGFzICd0ZXN0RGlyZWN0aXZlJyBjbGFzcyBpbiBIVE1MXHJcbiAgICAgICAgLy8gaS5lLiA8ZGl2IGNsYXNzPVwidGVzdERpcmVjdGl2ZVwiPjwvZGl2PlxyXG4gICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1DIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1DJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtRScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy91c2UgYXMgJ3Rlc3REaXJlY3RpdmUnIGVsZW1lbnQgaW4gSFRNTFxyXG4gICAgICAgIC8vIGkuZS4gPHRlc3REaXJlY3RpdmU+PC90ZXN0RGlyZWN0aXZlPlxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1FIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1FJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3REaXJlY3RpdmUtTScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy91c2UgYXMgJ3Rlc3REaXJlY3RpdmUnIGNvbW1lbnQgaW4gSFRNTFxyXG4gICAgICAgIC8vIGkuZS4gPCEtLSB0ZXN0RGlyZWN0aXZlIC0tPlxyXG4gICAgICAgIHJlc3RyaWN0OiAnTScsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdERpcmVjdGl2ZS1NIGxpbmtlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdERpcmVjdGl2ZS1NJykgZGVmaW5lZFwiKTtcclxufSBcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3Qtc3VwZXJtYW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPHA+e3twaG90by5pZH19PC9wPlwiXHJcbiAgICAgICAgLy90ZW1wbGF0ZVVSTDogJ3BhcnRpYWxzL3Bob3Rvcy9waG90by50ZXN0Lmh0bWwnXHJcbiAgICB9O1xyXG59KTtcclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBEaXJlY3RpdmVzLmRpcmVjdGl2ZSgndGVzdC1zdXBlcm1hbicpIGRlZmluZWRcIik7XHJcbn0gXHJcbmFwcC5kaXJlY3RpdmUoJ3Rlc3QtZ290SGVyZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJIG1hZGUgaXQgdG8gaGVyZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Rlc3QtZ290SGVyZScpIGRlZmluZWRcIik7XHJcbn0gXHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0ZXN0LWltZ0ZsaXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj57e3Bob3RvLmlkfX08L2Rpdj5cIixcclxuICAgICAgICB0ZW1wbGF0ZVVSTDogJ3BhcnRpYWxzL3Bob3Rvcy9waG90by50ZXN0Lmh0bWwnXHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmlmKGRlYnVnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwRGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3Rlc3QtaW1nRmxpcCcpIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB0ZXN0LmRpcmVjdGl2ZS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogZmlsdGVycy5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBGaWx0ZXJzLmZpbHRlcignbm9OdWxscycsIFxyXG4gICAgZnVuY3Rpb24oUGhvdG9zKSB7XHJcbiAgICBcclxuICAgICAgICB2YXIgZmlsdGVyZWRQaG90b3MgPSBbXTtcclxuICAgICAgICBpZihQaG90b3Mpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8UGhvdG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggUGhvdG9zW2ldLm5hbWUgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUGhvdG9zLnB1c2goUGhvdG9zW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJ2ZpbHRlcmVkUGhvdG9zIGZyb20gbm9OdWxscycgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggZmlsdGVyZWRQaG90b3MgKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQaG90b3M7XHJcbiAgICB9XHJcbik7XHJcblxyXG5hcHBGaWx0ZXJzLmZpbHRlcignaGlsaWdodHMnLCBcclxuICAgIGZ1bmN0aW9uKFBob3Rvcykge1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGZpbHRlcmVkUGhvdG9zID0gW107XHJcbiAgICAgICAgaWYoUGhvdG9zKXtcclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPFBob3Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIFBob3Rvc1tpXS5oaWxpZ2h0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUGhvdG9zLnB1c2goUGhvdG9zW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJ2ZpbHRlcmVkUGhvdG9zIGZyb20gaGlsaWdodHMnICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGZpbHRlcmVkUGhvdG9zICk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUGhvdG9zO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogcGhvdG9zLmZhY3RvcnkuanNcclxuICoqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFJFU1RGVUwgQVBJIHNlcnZpY2VcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ1Bob3RvRmFjdG9yeScsIFtcclxuICAgICAgICAgICAgJyRyZXNvdXJjZScsXHJcbiAgICBmdW5jdGlvbigkcmVzb3VyY2Upe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcy5mYWN0b3J5KFBob3RvRmFjdG9yeSktUkVTVEZVTCBBUEkgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgdmFyIFBob3RvcyA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICRyZXNvdXJjZShwYXRoLCB7fSwge1xyXG4gICAgICAgICAgICBnZXRQaG90b3M6IHttZXRob2Q6J0dFVCcsIHBhcmFtczp7cGhvdG9JZDonUGhvdG8nfSwgaXNBcnJheTp0cnVlfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5dKTsgXHJcblxyXG5pZihkZWJ1Zyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzLmZhY3RvcnkoUGhvdG9GYWN0b3J5KSAtIGRlZmluZWRcIik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBwaG90b3MuZmFjdG9yeS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogcGhvdG9zLnByb3ZpZGVyLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcFNlcnZpY2VzLnNlcnZpY2UoJ1Bob3Rvc1Byb3ZpZGVyJywgW1xyXG4gICAgICAgICAgICAgJyRodHRwJywgJyRxJywgJyRyb290U2NvcGUnLFxyXG4gICAgZnVuY3Rpb24oICRodHRwLCAgICRxLCAgICRyb290U2NvcGUgKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1Bob3Rvc1Byb3ZpZGVyJykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgJGh0dHAuZ2V0KHBhdGgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGhvdG9zID0gZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gcGhvdG9zLnByb3ZpZGVyLmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBwaG90b3Muc2VydmljZS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBTZXJ2aWNlcy5zZXJ2aWNlKCdQaG90b3NTZXJ2aWNlJywgW1xyXG4gICAgICAgICAgICAgJyRodHRwJywgJyRzY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHNjb3BlICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVidWc9dHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1Bob3Rvc1NlcnZpY2UnKSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3Bob3Rvcy5qc29uJztcclxuICAgICAgICBcclxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvJyArIHBhdGgpXHJcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnBob3RvcyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGhvdG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXSk7XHJcblxyXG5cclxuYXBwU2VydmljZXMuc2VydmljZSgnUGhvdG9zU2VydmljZVEnLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHEsICAgJHJvb3RTY29wZSApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlYnVnPXRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCdQaG90b3NTZXJ2aWNlUScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJ2pzb24vcGhvdG9zLmpzb24nO1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8kaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvJyArIHBhdGgpXHJcbiAgICAgICAgJGh0dHAuZ2V0KHBhdGgpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQaG90b3MgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5dKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gcGhvdG9zLnNlcnZpY2UuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHBob3Rvcy51dGlscy5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIEEgUkVTVGZ1bCBmYWN0b3J5IGZvciByZXRyaWV2aW5nIHBob3RvcyBmcm9tICdwaG90b3MuanNvbidcclxuYXBwU2VydmljZXMuZmFjdG9yeSgncGhvdG9zVXRpbHNGYWN0b3J5JywgW1xyXG4gICAgICAgICAgICAgJyRodHRwJywgJ3V0aWxzRmFjdG9yeScsIFxyXG4gICAgZnVuY3Rpb24gKCRodHRwLCAgIHV0aWxzRmFjdG9yeSkge1xyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygncGhvdG9zVXRpbHNGYWN0b3J5JykgaW5pdGlhbGl6aW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhdGggPSAnanNvbi9waG90b3MuanNvbic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBob3RvcyA9ICRodHRwLmdldChwYXRoKS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSByZXNwb25zZSBleGVjdXRlZChcIiArIHJlc3AubGVuZ3RoICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvcy5sZW5ndGggLSAoXCIgKyBwaG90b3MubGVuZ3RoICsgXCIpXCIpO1xyXG5cclxuICAgICAgICB2YXIgZmFjdG9yeSA9IHt9O1xyXG5cclxuICAgICAgICBmYWN0b3J5LmFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSBmYWN0b3J5LmFsbCBleGVjdXRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBob3RvcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmYWN0b3J5LmdldCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBob3Rvc1V0aWxzRmFjdG9yeSAtIGZhY3RvcnkuZ2V0IGV4ZWN1dGVkIGZvciBpZChcIiArIGlkICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvdG9zLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mYWN0b3J5LmZpbmRCeUlkKHBob3RvcywgaWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZhY3RvcnkuY291bnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSBmYWN0b3J5LmNvdW50IGV4ZWN1dGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvdG9zLmxlbmd0aDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmYWN0b3J5Lmxpc3QgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQocGF0aCkuc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaG90b3NVdGlsc0ZhY3RvcnkgLSBmYWN0b3J5Lmxpc3QgLSBleGVjdXRlZChcIiArIGRhdGEubGVuZ3RoICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xyXG5cclxuICAgIH1cclxuXSk7IFxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHBob3Rvcy51dGlscy5mYWN0b3J5LmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiBzbGlkZXMuc2VydmljZS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5hcHBTZXJ2aWNlcy5zZXJ2aWNlKCdTbGlkZVNlcnZpY2UnLCBbXHJcbiAgICAgICAgICAgICAnUGhvdG9zJyxcclxuICAgIGZ1bmN0aW9uKCBQaG90b3MgKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ1NsaWRlU2VydmljZScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5JbnRlcnZhbCA9IDUwMDA7XHJcbiAgICAgICAgJHNjb3BlLmNhcm91c2VsSW5kZXggPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgIFwiI2ZjMDAwM1wiLCBcIiNmNzAwMDhcIiwgXCIjZjIwMDBkXCIsIFwiI2VkMDAxMlwiLCBcIiNlODAwMTdcIiwgXHJcbiAgICAgICAgICAgIFwiI2UzMDAxY1wiLCBcIiNkZTAwMjFcIiwgXCIjZDkwMDI2XCIsIFwiI2Q0MDAyYlwiLCBcIiNjZjAwMzBcIiwgXHJcbiAgICAgICAgICAgIFwiI2M5MDAzNlwiLCBcIiNjNDAwM2JcIiwgXCIjYmYwMDQwXCIsIFwiI2JhMDA0NVwiLCBcIiNiNTAwNGFcIiwgXHJcbiAgICAgICAgICAgIFwiI2IwMDA0ZlwiLCBcIiNhYjAwNTRcIiwgXCIjYTYwMDU5XCIsIFwiI2ExMDA1ZVwiLCBcIiM5YzAwNjNcIiwgXHJcbiAgICAgICAgICAgIFwiIzk2MDA2OVwiLCBcIiM5MTAwNmVcIiwgXCIjOGMwMDczXCIsIFwiIzg3MDA3OFwiLCBcIiM4MjAwN2RcIiwgXHJcbiAgICAgICAgICAgIFwiIzdkMDA4MlwiLCBcIiM3ODAwODdcIiwgXCIjNzMwMDhjXCIsIFwiIzZlMDA5MVwiLCBcIiM2OTAwOTZcIiwgXHJcbiAgICAgICAgICAgIFwiIzYzMDA5Y1wiLCBcIiM1ZTAwYTFcIiwgXCIjNTkwMGE2XCIsIFwiIzU0MDBhYlwiLCBcIiM0ZjAwYjBcIiwgXHJcbiAgICAgICAgICAgIFwiIzRhMDBiNVwiLCBcIiM0NTAwYmFcIiwgXCIjNDAwMGJmXCIsIFwiIzNiMDBjNFwiLCBcIiMzNjAwYzlcIiwgXHJcbiAgICAgICAgICAgIFwiIzMwMDBjZlwiLCBcIiMyYjAwZDRcIiwgXCIjMjYwMGQ5XCIsIFwiIzIxMDBkZVwiLCBcIiMxYzAwZTNcIiwgXHJcbiAgICAgICAgICAgIFwiIzE3MDBlOFwiLCBcIiMxMjAwZWRcIiwgXCIjMGQwMGYyXCIsIFwiIzA4MDBmN1wiLCBcIiMwMzAwZmNcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNsaWRlcyA9IF8uZmlsdGVyKFBob3RvcywgZnVuY3Rpb24odmFsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFsnaGlsaWdodCddID09IDE7XHJcbiAgICAgICAgfSk7Ly8gZmlsdGVyIHRoZSBpbWFnZXMgaWRlbnRpZmllZCBhcyBoaWxpZ2h0c1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRlYnVnKXtjb25zb2xlLmxvZygnc2xpZGVzKCcgKyBzbGlkZXMubGVuZ3RoICsgJyk6Jyk7fVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLnNsaWRlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tpXS5jb2xvciA9IGNvbG9yc1soaSoxMCkgJSBjb2xvcnMubGVuZ3RoXTtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLm9kZCA9IChpICUgMiA9PT0gMCk7XHJcbiAgICAgICAgfSAvLyBBZGQgY29sb3IgYW5kIG9kZFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZSh0YXJnZXQsIHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gdGFyZ2V0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGFyZ2V0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IChpICsgMSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzdHlsZSArICcgc2xpZGUgIycgKyAoaSArIDEpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9sb3JlbXBpeGVsLmNvbS80NTAvMzAwLycgKyBzdHlsZSArICcvJyArICgoaSArIDEpICUgMTApICxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbIChpKjEwKSAlIGNvbG9ycy5sZW5ndGhdLFxyXG4gICAgICAgICAgICAgICAgb2RkOiAoaSAlIDIgPT09IDApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcyh0YXJnZXQsIHF0eSwgc3R5bGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcXR5OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFkZFNsaWRlKHRhcmdldCwgc3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuLypcclxuICAgICAgICB2YXIgbnVtMkFkZCA9IDc7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdhYnN0cmFjdCcpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnY2l0eScpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAncGVvcGxlJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICd0cmFuc3BvcnQnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ2FuaW1hbHMnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ2Zvb2QnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ25hdHVyZScpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnYnVzaW5lc3MnKTtcclxuICAgICAgICBhZGRTbGlkZXMoJHNjb3BlLnNsaWRlcywgbnVtMkFkZCwgJ25pZ2h0bGlmZScpO1xyXG4gICAgICAgIGFkZFNsaWRlcygkc2NvcGUuc2xpZGVzLCBudW0yQWRkLCAnc3BvcnRzJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICdmYXNoaW9uJyk7XHJcbiAgICAgICAgYWRkU2xpZGVzKCRzY29wZS5zbGlkZXMsIG51bTJBZGQsICd0ZWNobmljcycpO1xyXG4qL1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5nZXRTbGlkZXMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZGVidWcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcygnU2xpZGVTZXJ2aWNlJykgZ2V0U2xpZGVzIC0gcmV0dXJuaW5nIHNsaWRlcyhcIiArIHNsaWRlcy5sZW5ndGggKyBcIilcIik7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5dKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSBwaG90b3Muc2VydmljZS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKipcclxuICoqIEZpbGVuYW1lICAgIDogdGVzdC5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIERlZmluZSB5b3VyIHNlcnZpY2UgaGVyZS4gU2VydmljZXMgY2FuIGJlIGFkZGVkIHRvIHNhbWUgbW9kdWxlIGFzICdtYWluQXBwJyBvciBhIHNlcGVyYXRlIG1vZHVsZSBjYW4gYmUgY3JlYXRlZC5cclxuXHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ3Rlc3RGYWN0b3J5JywgW2Z1bmN0aW9uICgpIHtcclxuICAgIGlmKGRlYnVnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCd0ZXN0RmFjdG9yeScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIHNlcnZpY2UgPSB7fTtcclxuICAgIFxyXG4gICAgc2VydmljZS5kb1dvcmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3RGYWN0b3J5IC0gRGlkIHNvbWUgd29yayAhJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2VydmljZTtcclxuICAgIFxyXG59XSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdGVzdC5mYWN0b3J5LmpzXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB1dGlscy5mYWN0b3J5LmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vdmFyIHV0aWxTZXJ2aWNlcyA9IGFuZ3VsYXIubW9kdWxlKCd1dGlsU2VydmljZXMnLCBbXSk7XHJcbmFwcFNlcnZpY2VzLmZhY3RvcnkoJ3V0aWxzRmFjdG9yeScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ3V0aWxzRmFjdG9yeScpIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBVdGlsIGZvciBmaW5kaW5nIGFuIG9iamVjdCBieSBpdHMgJ2lkJyBwcm9wZXJ0eSBhbW9uZyBhbiBhcnJheVxyXG4gICAgICAgICAgICBmaW5kQnlJZDogZnVuY3Rpb24gZmluZEJ5SWQoYSwgaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhW2ldLmlkID09PSBpZCkge3JldHVybiBhW2ldO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gVXRpbCBmb3IgcmV0dXJuaW5nIGEgcmFuZG9tIGtleSBmcm9tIGEgY29sbGVjdGlvbiB0aGF0IGFsc28gaXNuJ3QgdGhlIGN1cnJlbnQga2V5XHJcbiAgICAgICAgICAgIG5ld1JhbmRvbUtleTogZnVuY3Rpb24gbmV3UmFuZG9tS2V5KGNvbGwsIGtleSwgY3VycmVudEtleSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZEtleTtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kS2V5ID0gY29sbFtNYXRoLmZsb29yKGNvbGwubGVuZ3RoICogTWF0aC5yYW5kb20oKSldW2tleV07XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChyYW5kS2V5ID09PSBjdXJyZW50S2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYW5kS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiBFTkQgT0YgRklMRSAtIHV0aWxzLmZhY3RvcnkuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4iLCIvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKlxyXG4gKiogRmlsZW5hbWUgICAgOiB2aWRlb3MuZmFjdG9yeS5qc1xyXG4gKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUkVTVEZVTCBBUEkgZmFjdG9yeSBzZXJ2aWNlXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5hcHBTZXJ2aWNlcy5mYWN0b3J5KCd2aWRlb3NGYWN0b3J5JywgW1xyXG4gICAgICAgICAgICAnJHJlc291cmNlJyxcclxuICAgIGZ1bmN0aW9uKCRyZXNvdXJjZSl7XHJcblxyXG4gICAgICAgIGlmKGRlYnVnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcy5mYWN0b3J5KHZpZGVvc0ZhY3RvcnkpLVJFU1RGVUwgQVBJIGluaXRpYWxpemluZ1wiKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwYXRoID0gJ2pzb24vdmlkZW9zLmpzb24nO1xyXG4gICAgICAgIHZhciBWaWRlb3MgPSBbXTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAkcmVzb3VyY2UocGF0aCwge30sIHtcclxuICAgICAgICAgICAgZ2V0VmlkZW9zOiB7bWV0aG9kOidHRVQnLCBwYXJhbXM6e3ZpZGVvSWQ6J1ZpZGVvJ30sIGlzQXJyYXk6dHJ1ZX1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXSk7IFxyXG5cclxuaWYoZGVidWcpe1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBTZXJ2aWNlcy5mYWN0b3J5KHZpZGVvc0ZhY3RvcnkpIC0gZGVmaW5lZFwiKTtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogRU5EIE9GIEZJTEUgLSB2aWRlb3MuZmFjdG9yeS5qc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqXHJcbiAqKiBGaWxlbmFtZSAgICA6IHZpZGVvcy5zZXJ2aWNlLmpzXHJcbiAqKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmFwcFNlcnZpY2VzLnNlcnZpY2UoJ3ZpZGVvc1NlcnZpY2UnLCBbXHJcbiAgICAgICAgICAgICAnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsXHJcbiAgICBmdW5jdGlvbiggJGh0dHAsICAgJHEsICAgJHJvb3RTY29wZSApe1xyXG5cclxuICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwU2VydmljZXMoJ3ZpZGVvc1NlcnZpY2UnKSBpbml0aWFsaXppbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGF0aCA9ICdqc29uL3ZpZGVvcy5qc29uJztcclxuICAgICAgICB2YXIgdmlkZW9zU2VydmljZSA9IHRoaXM7XHJcbiAgICAgICAgdmlkZW9zU2VydmljZS52aWRlb0xpc3QgPSB7fTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHRVRcclxuICAgICAgICB2aWRlb3NTZXJ2aWNlLmdldFZpZGVvcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvJyArIHBhdGgpXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB2aWRlb3NTZXJ2aWNlLnZpZGVvTGlzdCA9IHJlcztcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIGlmKGRlYnVnICYmIChyZXMubGVuZ3RoID4gMCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWRlb3NTZXJ2aWNlIC0gVmlkZW9zIGNvbnRhaW5zIFtcIiArIHJlcy5sZW5ndGggKyBcIl0gdmlkZW9zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZihkZWJ1Zyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcFNlcnZpY2VzKCd2aWRlb3NTZXJ2aWNlJykgZ2V0VmlkZW9zIC0gZGVmZXJyZWQgcHJvbWlzZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ1JFQVRFXHJcbiAgICAgICAgdmlkZW9zU2VydmljZS5jcmVhdGVWaWRlbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL25ld1ZpZGVvJylcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIHZpZGVvc1NlcnZpY2UudmlkZW9MaXN0ID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERFTEVURVxyXG4gICAgICAgIHZpZGVvc1NlcnZpY2UuZGVsZXRlVmlkZW8gPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2RlbGV0ZVZpZGVvP3ZpZGVvSWQ9JyArIGlkKVxyXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVUERBVEVcclxuICAgICAgICB2aWRlb3NTZXJ2aWNlLnVwZGF0ZVZpZGVvID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICRodHRwLnVwZGF0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy91cGRhdGVWaWRlbz92aWRlb0lkPScgKyBpZClcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvc1NlcnZpY2U7XHJcbiAgICB9XHJcbl0pXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqIEVORCBPRiBGSUxFIC0gdmlkZW9zLnNlcnZpY2UuanNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4iLCIvKiBNb2Rlcm5penIgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLXNoaXYtbG9hZC1jc3NjbGFzc2VzLWNhbnZhc3RleHQtY3NzdHJhbnNmb3JtczNkLWZsZXhib3gtY3NzZ3JhZGllbnRzLW9wYWNpdHktaW5kZXhlZERCLWJhY2tncm91bmRzaXplLWJvcmRlcmltYWdlLWJvcmRlcnJhZGl1cy1ib3hzaGFkb3ctY3NzYW5pbWF0aW9ucy1jc3Njb2x1bW5zLWNzc3JlZmxlY3Rpb25zLWNzc3RyYW5zaXRpb25zLWZsZXhib3hsZWdhY3ktcHJlZml4ZWQtY3NzdHJhbnNmb3Jtcy1tcS1oYXNoY2hhbmdlLWRyYWdhbmRkcm9wLWdlbmVyYXRlZGNvbnRlbnQtc3ZnLWlubGluZXN2Zy1zbWlsLXN2Z2NsaXBwYXRocy1pbnB1dC1pbnB1dHR5cGVzLXRvdWNoLWZvbnRmYWNlLXdlYnNvY2tldHMtY29ycy1qc29uLWFwcGxpY2F0aW9uY2FjaGUtYXVkaW8tY2FudmFzLWdlb2xvY2F0aW9uLWhpc3RvcnktaHNsYS1sb2NhbHN0b3JhZ2UtbXVsdGlwbGViZ3MtcG9zdG1lc3NhZ2Utc2Vzc2lvbnN0b3JhZ2UtdGV4dHNoYWRvdy1yZ2JhLXZpZGVvLXdlYmdsLXdlYnNxbGRhdGFiYXNlLXdlYndvcmtlcnNcbiAqL1xuO3dpbmRvdy5Nb2Rlcm5penI9ZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIEEoZSl7Zi5jc3NUZXh0PWV9ZnVuY3Rpb24gTyhlLHQpe3JldHVybiBBKHAuam9pbihlK1wiO1wiKSsodHx8XCJcIikpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4gdHlwZW9mIGU9PT10fWZ1bmN0aW9uIF8oZSx0KXtyZXR1cm4hIX4oXCJcIitlKS5pbmRleE9mKHQpfWZ1bmN0aW9uIEQoZSx0KXtmb3IodmFyIHIgaW4gZSl7dmFyIGk9ZVtyXTtpZighXyhpLFwiLVwiKSYmZltpXSE9PW4pcmV0dXJuIHQ9PVwicGZ4XCI/aTohMH1yZXR1cm4hMX1mdW5jdGlvbiBQKGUsdCxyKXtmb3IodmFyIGkgaW4gZSl7dmFyIHM9dFtlW2ldXTtpZihzIT09bilyZXR1cm4gcj09PSExP2VbaV06TShzLFwiZnVuY3Rpb25cIik/cy5iaW5kKHJ8fHQpOnN9cmV0dXJuITF9ZnVuY3Rpb24gSChlLHQsbil7dmFyIHI9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLGk9KGUrXCIgXCIrdi5qb2luKHIrXCIgXCIpK3IpLnNwbGl0KFwiIFwiKTtyZXR1cm4gTSh0LFwic3RyaW5nXCIpfHxNKHQsXCJ1bmRlZmluZWRcIik/RChpLHQpOihpPShlK1wiIFwiK20uam9pbihyK1wiIFwiKStyKS5zcGxpdChcIiBcIiksUChpLHQsbikpfWZ1bmN0aW9uIEIoKXtpLmlucHV0PWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl3W25bcl1dPW5bcl1pbiBsO3JldHVybiB3Lmxpc3QmJih3Lmxpc3Q9ISF0LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKSYmISFlLkhUTUxEYXRhTGlzdEVsZW1lbnQpLHd9KFwiYXV0b2NvbXBsZXRlIGF1dG9mb2N1cyBsaXN0IHBsYWNlaG9sZGVyIG1heCBtaW4gbXVsdGlwbGUgcGF0dGVybiByZXF1aXJlZCBzdGVwXCIuc3BsaXQoXCIgXCIpKSxpLmlucHV0dHlwZXM9ZnVuY3Rpb24oZSl7Zm9yKHZhciByPTAsaSxzLHUsYT1lLmxlbmd0aDtyPGE7cisrKWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLHM9ZVtyXSksaT1sLnR5cGUhPT1cInRleHRcIixpJiYobC52YWx1ZT1jLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3Zpc2liaWxpdHk6aGlkZGVuO1wiLC9ecmFuZ2UkLy50ZXN0KHMpJiZsLnN0eWxlLldlYmtpdEFwcGVhcmFuY2UhPT1uPyhvLmFwcGVuZENoaWxkKGwpLHU9dC5kZWZhdWx0VmlldyxpPXUuZ2V0Q29tcHV0ZWRTdHlsZSYmdS5nZXRDb21wdXRlZFN0eWxlKGwsbnVsbCkuV2Via2l0QXBwZWFyYW5jZSE9PVwidGV4dGZpZWxkXCImJmwub2Zmc2V0SGVpZ2h0IT09MCxvLnJlbW92ZUNoaWxkKGwpKTovXihzZWFyY2h8dGVsKSQvLnRlc3Qocyl8fCgvXih1cmx8ZW1haWwpJC8udGVzdChzKT9pPWwuY2hlY2tWYWxpZGl0eSYmbC5jaGVja1ZhbGlkaXR5KCk9PT0hMTppPWwudmFsdWUhPWMpKSxiW2Vbcl1dPSEhaTtyZXR1cm4gYn0oXCJzZWFyY2ggdGVsIHVybCBlbWFpbCBkYXRldGltZSBkYXRlIG1vbnRoIHdlZWsgdGltZSBkYXRldGltZS1sb2NhbCBudW1iZXIgcmFuZ2UgY29sb3JcIi5zcGxpdChcIiBcIikpfXZhciByPVwiMi44LjNcIixpPXt9LHM9ITAsbz10LmRvY3VtZW50RWxlbWVudCx1PVwibW9kZXJuaXpyXCIsYT10LmNyZWF0ZUVsZW1lbnQodSksZj1hLnN0eWxlLGw9dC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYz1cIjopXCIsaD17fS50b1N0cmluZyxwPVwiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKSxkPVwiV2Via2l0IE1veiBPIG1zXCIsdj1kLnNwbGl0KFwiIFwiKSxtPWQudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIiksZz17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn0seT17fSxiPXt9LHc9e30sRT1bXSxTPUUuc2xpY2UseCxUPWZ1bmN0aW9uKGUsbixyLGkpe3ZhciBzLGEsZixsLGM9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGg9dC5ib2R5LHA9aHx8dC5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtpZihwYXJzZUludChyLDEwKSl3aGlsZShyLS0pZj10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZi5pZD1pP2lbcl06dSsocisxKSxjLmFwcGVuZENoaWxkKGYpO3JldHVybiBzPVtcIiYjMTczO1wiLCc8c3R5bGUgaWQ9XCJzJyx1LCdcIj4nLGUsXCI8L3N0eWxlPlwiXS5qb2luKFwiXCIpLGMuaWQ9dSwoaD9jOnApLmlubmVySFRNTCs9cyxwLmFwcGVuZENoaWxkKGMpLGh8fChwLnN0eWxlLmJhY2tncm91bmQ9XCJcIixwLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsbD1vLnN0eWxlLm92ZXJmbG93LG8uc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixvLmFwcGVuZENoaWxkKHApKSxhPW4oYyxlKSxoP2MucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKToocC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLG8uc3R5bGUub3ZlcmZsb3c9bCksISFhfSxOPWZ1bmN0aW9uKHQpe3ZhciBuPWUubWF0Y2hNZWRpYXx8ZS5tc01hdGNoTWVkaWE7aWYobilyZXR1cm4gbih0KSYmbih0KS5tYXRjaGVzfHwhMTt2YXIgcjtyZXR1cm4gVChcIkBtZWRpYSBcIit0K1wiIHsgI1wiK3UrXCIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKHQpe3I9KGUuZ2V0Q29tcHV0ZWRTdHlsZT9nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCk6dC5jdXJyZW50U3R5bGUpW1wicG9zaXRpb25cIl09PVwiYWJzb2x1dGVcIn0pLHJ9LEM9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHIsaSl7aT1pfHx0LmNyZWF0ZUVsZW1lbnQoZVtyXXx8XCJkaXZcIikscj1cIm9uXCIrcjt2YXIgcz1yIGluIGk7cmV0dXJuIHN8fChpLnNldEF0dHJpYnV0ZXx8KGk9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxpLnNldEF0dHJpYnV0ZSYmaS5yZW1vdmVBdHRyaWJ1dGUmJihpLnNldEF0dHJpYnV0ZShyLFwiXCIpLHM9TShpW3JdLFwiZnVuY3Rpb25cIiksTShpW3JdLFwidW5kZWZpbmVkXCIpfHwoaVtyXT1uKSxpLnJlbW92ZUF0dHJpYnV0ZShyKSkpLGk9bnVsbCxzfXZhciBlPXtzZWxlY3Q6XCJpbnB1dFwiLGNoYW5nZTpcImlucHV0XCIsc3VibWl0OlwiZm9ybVwiLHJlc2V0OlwiZm9ybVwiLGVycm9yOlwiaW1nXCIsbG9hZDpcImltZ1wiLGFib3J0OlwiaW1nXCJ9O3JldHVybiByfSgpLGs9e30uaGFzT3duUHJvcGVydHksTDshTShrLFwidW5kZWZpbmVkXCIpJiYhTShrLmNhbGwsXCJ1bmRlZmluZWRcIik/TD1mdW5jdGlvbihlLHQpe3JldHVybiBrLmNhbGwoZSx0KX06TD1mdW5jdGlvbihlLHQpe3JldHVybiB0IGluIGUmJk0oZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbdF0sXCJ1bmRlZmluZWRcIil9LEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIHI9Uy5jYWxsKGFyZ3VtZW50cywxKSxpPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGkpe3ZhciBlPWZ1bmN0aW9uKCl7fTtlLnByb3RvdHlwZT1uLnByb3RvdHlwZTt2YXIgcz1uZXcgZSxvPW4uYXBwbHkocyxyLmNvbmNhdChTLmNhbGwoYXJndW1lbnRzKSkpO3JldHVybiBPYmplY3Qobyk9PT1vP286c31yZXR1cm4gbi5hcHBseSh0LHIuY29uY2F0KFMuY2FsbChhcmd1bWVudHMpKSl9O3JldHVybiBpfSkseS5mbGV4Ym94PWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJmbGV4V3JhcFwiKX0seS5mbGV4Ym94bGVnYWN5PWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJib3hEaXJlY3Rpb25cIil9LHkuY2FudmFzPWZ1bmN0aW9uKCl7dmFyIGU9dC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiEhZS5nZXRDb250ZXh0JiYhIWUuZ2V0Q29udGV4dChcIjJkXCIpfSx5LmNhbnZhc3RleHQ9ZnVuY3Rpb24oKXtyZXR1cm4hIWkuY2FudmFzJiYhIU0odC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKS5maWxsVGV4dCxcImZ1bmN0aW9uXCIpfSx5LndlYmdsPWZ1bmN0aW9uKCl7cmV0dXJuISFlLldlYkdMUmVuZGVyaW5nQ29udGV4dH0seS50b3VjaD1mdW5jdGlvbigpe3ZhciBuO3JldHVyblwib250b3VjaHN0YXJ0XCJpbiBlfHxlLkRvY3VtZW50VG91Y2gmJnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoP249ITA6VChbXCJAbWVkaWEgKFwiLHAuam9pbihcInRvdWNoLWVuYWJsZWQpLChcIiksdSxcIilcIixcInsjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fVwiXS5qb2luKFwiXCIpLGZ1bmN0aW9uKGUpe249ZS5vZmZzZXRUb3A9PT05fSksbn0seS5nZW9sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVyblwiZ2VvbG9jYXRpb25cImluIG5hdmlnYXRvcn0seS5wb3N0bWVzc2FnZT1mdW5jdGlvbigpe3JldHVybiEhZS5wb3N0TWVzc2FnZX0seS53ZWJzcWxkYXRhYmFzZT1mdW5jdGlvbigpe3JldHVybiEhZS5vcGVuRGF0YWJhc2V9LHkuaGFzaGNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBDKFwiaGFzaGNoYW5nZVwiLGUpJiYodC5kb2N1bWVudE1vZGU9PT1ufHx0LmRvY3VtZW50TW9kZT43KX0seS5oaXN0b3J5PWZ1bmN0aW9uKCl7cmV0dXJuISFlLmhpc3RvcnkmJiEhaGlzdG9yeS5wdXNoU3RhdGV9LHkuZHJhZ2FuZGRyb3A9ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuXCJkcmFnZ2FibGVcImluIGV8fFwib25kcmFnc3RhcnRcImluIGUmJlwib25kcm9wXCJpbiBlfSx5LndlYnNvY2tldHM9ZnVuY3Rpb24oKXtyZXR1cm5cIldlYlNvY2tldFwiaW4gZXx8XCJNb3pXZWJTb2NrZXRcImluIGV9LHkucmdiYT1mdW5jdGlvbigpe3JldHVybiBBKFwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MCwyNTUsMTUwLC41KVwiKSxfKGYuYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKX0seS5oc2xhPWZ1bmN0aW9uKCl7cmV0dXJuIEEoXCJiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMTIwLDQwJSwxMDAlLC41KVwiKSxfKGYuYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKXx8XyhmLmJhY2tncm91bmRDb2xvcixcImhzbGFcIil9LHkubXVsdGlwbGViZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gQShcImJhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pXCIpLC8odXJsXFxzKlxcKC4qPyl7M30vLnRlc3QoZi5iYWNrZ3JvdW5kKX0seS5iYWNrZ3JvdW5kc2l6ZT1mdW5jdGlvbigpe3JldHVybiBIKFwiYmFja2dyb3VuZFNpemVcIil9LHkuYm9yZGVyaW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImJvcmRlckltYWdlXCIpfSx5LmJvcmRlcnJhZGl1cz1mdW5jdGlvbigpe3JldHVybiBIKFwiYm9yZGVyUmFkaXVzXCIpfSx5LmJveHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBIKFwiYm94U2hhZG93XCIpfSx5LnRleHRzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLnRleHRTaGFkb3c9PT1cIlwifSx5Lm9wYWNpdHk9ZnVuY3Rpb24oKXtyZXR1cm4gTyhcIm9wYWNpdHk6LjU1XCIpLC9eMC41NSQvLnRlc3QoZi5vcGFjaXR5KX0seS5jc3NhbmltYXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEgoXCJhbmltYXRpb25OYW1lXCIpfSx5LmNzc2NvbHVtbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSChcImNvbHVtbkNvdW50XCIpfSx5LmNzc2dyYWRpZW50cz1mdW5jdGlvbigpe3ZhciBlPVwiYmFja2dyb3VuZC1pbWFnZTpcIix0PVwiZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IGJvdHRvbSxmcm9tKCM5ZjkpLHRvKHdoaXRlKSk7XCIsbj1cImxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwjOWY5LCB3aGl0ZSk7XCI7cmV0dXJuIEEoKGUrXCItd2Via2l0LSBcIi5zcGxpdChcIiBcIikuam9pbih0K2UpK3Auam9pbihuK2UpKS5zbGljZSgwLC1lLmxlbmd0aCkpLF8oZi5iYWNrZ3JvdW5kSW1hZ2UsXCJncmFkaWVudFwiKX0seS5jc3NyZWZsZWN0aW9ucz1mdW5jdGlvbigpe3JldHVybiBIKFwiYm94UmVmbGVjdFwiKX0seS5jc3N0cmFuc2Zvcm1zPWZ1bmN0aW9uKCl7cmV0dXJuISFIKFwidHJhbnNmb3JtXCIpfSx5LmNzc3RyYW5zZm9ybXMzZD1mdW5jdGlvbigpe3ZhciBlPSEhSChcInBlcnNwZWN0aXZlXCIpO3JldHVybiBlJiZcIndlYmtpdFBlcnNwZWN0aXZlXCJpbiBvLnN0eWxlJiZUKFwiQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7I21vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319XCIsZnVuY3Rpb24odCxuKXtlPXQub2Zmc2V0TGVmdD09PTkmJnQub2Zmc2V0SGVpZ2h0PT09M30pLGV9LHkuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSChcInRyYW5zaXRpb25cIil9LHkuZm9udGZhY2U9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gVCgnQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6XCJmb250XCI7c3JjOnVybChcImh0dHBzOi8vXCIpfScsZnVuY3Rpb24obixyKXt2YXIgaT10LmdldEVsZW1lbnRCeUlkKFwic21vZGVybml6clwiKSxzPWkuc2hlZXR8fGkuc3R5bGVTaGVldCxvPXM/cy5jc3NSdWxlcyYmcy5jc3NSdWxlc1swXT9zLmNzc1J1bGVzWzBdLmNzc1RleHQ6cy5jc3NUZXh0fHxcIlwiOlwiXCI7ZT0vc3JjL2kudGVzdChvKSYmby5pbmRleE9mKHIuc3BsaXQoXCIgXCIpWzBdKT09PTB9KSxlfSx5LmdlbmVyYXRlZGNvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gVChbXCIjXCIsdSxcIntmb250OjAvMCBhfSNcIix1LCc6YWZ0ZXJ7Y29udGVudDpcIicsYywnXCI7dmlzaWJpbGl0eTpoaWRkZW47Zm9udDozcHgvMSBhfSddLmpvaW4oXCJcIiksZnVuY3Rpb24odCl7ZT10Lm9mZnNldEhlaWdodD49M30pLGV9LHkudmlkZW89ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSxuPSExO3RyeXtpZihuPSEhZS5jYW5QbGF5VHlwZSluPW5ldyBCb29sZWFuKG4pLG4ub2dnPWUuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLmgyNjQ9ZS5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksbi53ZWJtPWUuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKX1jYXRjaChyKXt9cmV0dXJuIG59LHkuYXVkaW89ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSxuPSExO3RyeXtpZihuPSEhZS5jYW5QbGF5VHlwZSluPW5ldyBCb29sZWFuKG4pLG4ub2dnPWUuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLm1wMz1lLmNhblBsYXlUeXBlKFwiYXVkaW8vbXBlZztcIikucmVwbGFjZSgvXm5vJC8sXCJcIiksbi53YXY9ZS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxuLm00YT0oZS5jYW5QbGF5VHlwZShcImF1ZGlvL3gtbTRhO1wiKXx8ZS5jYW5QbGF5VHlwZShcImF1ZGlvL2FhYztcIikpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKHIpe31yZXR1cm4gbn0seS5sb2NhbHN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHUsdSksbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fSx5LnNlc3Npb25zdG9yYWdlPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHUsdSksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh1KSwhMH1jYXRjaChlKXtyZXR1cm4hMX19LHkud2Vid29ya2Vycz1mdW5jdGlvbigpe3JldHVybiEhZS5Xb3JrZXJ9LHkuYXBwbGljYXRpb25jYWNoZT1mdW5jdGlvbigpe3JldHVybiEhZS5hcHBsaWNhdGlvbkNhY2hlfSx5LnN2Zz1mdW5jdGlvbigpe3JldHVybiEhdC5jcmVhdGVFbGVtZW50TlMmJiEhdC5jcmVhdGVFbGVtZW50TlMoZy5zdmcsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdH0seS5pbmxpbmVzdmc9ZnVuY3Rpb24oKXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsKGUuZmlyc3RDaGlsZCYmZS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSk9PWcuc3ZnfSx5LnNtaWw9ZnVuY3Rpb24oKXtyZXR1cm4hIXQuY3JlYXRlRWxlbWVudE5TJiYvU1ZHQW5pbWF0ZS8udGVzdChoLmNhbGwodC5jcmVhdGVFbGVtZW50TlMoZy5zdmcsXCJhbmltYXRlXCIpKSl9LHkuc3ZnY2xpcHBhdGhzPWZ1bmN0aW9uKCl7cmV0dXJuISF0LmNyZWF0ZUVsZW1lbnROUyYmL1NWR0NsaXBQYXRoLy50ZXN0KGguY2FsbCh0LmNyZWF0ZUVsZW1lbnROUyhnLnN2ZyxcImNsaXBQYXRoXCIpKSl9O2Zvcih2YXIgaiBpbiB5KUwoeSxqKSYmKHg9ai50b0xvd2VyQ2FzZSgpLGlbeF09eVtqXSgpLEUucHVzaCgoaVt4XT9cIlwiOlwibm8tXCIpK3gpKTtyZXR1cm4gaS5pbnB1dHx8QigpLGkuYWRkVGVzdD1mdW5jdGlvbihlLHQpe2lmKHR5cGVvZiBlPT1cIm9iamVjdFwiKWZvcih2YXIgciBpbiBlKUwoZSxyKSYmaS5hZGRUZXN0KHIsZVtyXSk7ZWxzZXtlPWUudG9Mb3dlckNhc2UoKTtpZihpW2VdIT09bilyZXR1cm4gaTt0PXR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dCgpOnQsdHlwZW9mIHMhPVwidW5kZWZpbmVkXCImJnMmJihvLmNsYXNzTmFtZSs9XCIgXCIrKHQ/XCJcIjpcIm5vLVwiKStlKSxpW2VdPXR9cmV0dXJuIGl9LEEoXCJcIiksYT1sPW51bGwsZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBjKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwicFwiKSxyPWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxlLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gbi5pbm5lckhUTUw9XCJ4PHN0eWxlPlwiK3QrXCI8L3N0eWxlPlwiLHIuaW5zZXJ0QmVmb3JlKG4ubGFzdENoaWxkLHIuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gaCgpe3ZhciBlPXkuZWxlbWVudHM7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP2Uuc3BsaXQoXCIgXCIpOmV9ZnVuY3Rpb24gcChlKXt2YXIgdD1mW2VbdV1dO3JldHVybiB0fHwodD17fSxhKyssZVt1XT1hLGZbYV09dCksdH1mdW5jdGlvbiBkKGUsbixyKXtufHwobj10KTtpZihsKXJldHVybiBuLmNyZWF0ZUVsZW1lbnQoZSk7cnx8KHI9cChuKSk7dmFyIG87cmV0dXJuIHIuY2FjaGVbZV0/bz1yLmNhY2hlW2VdLmNsb25lTm9kZSgpOnMudGVzdChlKT9vPShyLmNhY2hlW2VdPXIuY3JlYXRlRWxlbShlKSkuY2xvbmVOb2RlKCk6bz1yLmNyZWF0ZUVsZW0oZSksby5jYW5IYXZlQ2hpbGRyZW4mJiFpLnRlc3QoZSkmJiFvLnRhZ1Vybj9yLmZyYWcuYXBwZW5kQ2hpbGQobyk6b31mdW5jdGlvbiB2KGUsbil7ZXx8KGU9dCk7aWYobClyZXR1cm4gZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7bj1ufHxwKGUpO3ZhciByPW4uZnJhZy5jbG9uZU5vZGUoKSxpPTAscz1oKCksbz1zLmxlbmd0aDtmb3IoO2k8bztpKyspci5jcmVhdGVFbGVtZW50KHNbaV0pO3JldHVybiByfWZ1bmN0aW9uIG0oZSx0KXt0LmNhY2hlfHwodC5jYWNoZT17fSx0LmNyZWF0ZUVsZW09ZS5jcmVhdGVFbGVtZW50LHQuY3JlYXRlRnJhZz1lLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsdC5mcmFnPXQuY3JlYXRlRnJhZygpKSxlLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24obil7cmV0dXJuIHkuc2hpdk1ldGhvZHM/ZChuLGUsdCk6dC5jcmVhdGVFbGVtKG4pfSxlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXCJoLGZcIixcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFwiK2goKS5qb2luKCkucmVwbGFjZSgvW1xcd1xcLV0rL2csZnVuY3Rpb24oZSl7cmV0dXJuIHQuY3JlYXRlRWxlbShlKSx0LmZyYWcuY3JlYXRlRWxlbWVudChlKSwnYyhcIicrZSsnXCIpJ30pK1wiKTtyZXR1cm4gbn1cIikoeSx0LmZyYWcpfWZ1bmN0aW9uIGcoZSl7ZXx8KGU9dCk7dmFyIG49cChlKTtyZXR1cm4geS5zaGl2Q1NTJiYhbyYmIW4uaGFzQ1NTJiYobi5oYXNDU1M9ISFjKGUsXCJhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9bWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9XCIpKSxsfHxtKGUsbiksZX12YXIgbj1cIjMuNy4wXCIscj1lLmh0bWw1fHx7fSxpPS9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pLHM9L14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pLG8sdT1cIl9odG1sNXNoaXZcIixhPTAsZj17fSxsOyhmdW5jdGlvbigpe3RyeXt2YXIgZT10LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2UuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixvPVwiaGlkZGVuXCJpbiBlLGw9ZS5jaGlsZE5vZGVzLmxlbmd0aD09MXx8ZnVuY3Rpb24oKXt0LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBlPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0eXBlb2YgZS5jbG9uZU5vZGU9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBlLmNyZWF0ZUVsZW1lbnQ9PVwidW5kZWZpbmVkXCJ9KCl9Y2F0Y2gobil7bz0hMCxsPSEwfX0pKCk7dmFyIHk9e2VsZW1lbnRzOnIuZWxlbWVudHN8fFwiYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlb1wiLHZlcnNpb246bixzaGl2Q1NTOnIuc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmwsc2hpdk1ldGhvZHM6ci5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XCJkZWZhdWx0XCIsc2hpdkRvY3VtZW50OmcsY3JlYXRlRWxlbWVudDpkLGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6dn07ZS5odG1sNT15LGcodCl9KHRoaXMsdCksaS5fdmVyc2lvbj1yLGkuX3ByZWZpeGVzPXAsaS5fZG9tUHJlZml4ZXM9bSxpLl9jc3NvbVByZWZpeGVzPXYsaS5tcT1OLGkuaGFzRXZlbnQ9QyxpLnRlc3RQcm9wPWZ1bmN0aW9uKGUpe3JldHVybiBEKFtlXSl9LGkudGVzdEFsbFByb3BzPUgsaS50ZXN0U3R5bGVzPVQsaS5wcmVmaXhlZD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHQ/SChlLHQsbik6SChlLFwicGZ4XCIpfSxvLmNsYXNzTmFtZT1vLmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLyxcIiQxJDJcIikrKHM/XCIganMgXCIrRS5qb2luKFwiIFwiKTpcIlwiKSxpfSh0aGlzLHRoaXMuZG9jdW1lbnQpLGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09ZC5jYWxsKGUpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9ZnVuY3Rpb24gcygpe31mdW5jdGlvbiBvKGUpe3JldHVybiFlfHxcImxvYWRlZFwiPT1lfHxcImNvbXBsZXRlXCI9PWV8fFwidW5pbml0aWFsaXplZFwiPT1lfWZ1bmN0aW9uIHUoKXt2YXIgZT12LnNoaWZ0KCk7bT0xLGU/ZS50P2goZnVuY3Rpb24oKXsoXCJjXCI9PWUudD9rLmluamVjdENzczprLmluamVjdEpzKShlLnMsMCxlLmEsZS54LGUuZSwxKX0sMCk6KGUoKSx1KCkpOm09MH1mdW5jdGlvbiBhKGUsbixyLGkscyxhLGYpe2Z1bmN0aW9uIGwodCl7aWYoIWQmJm8oYy5yZWFkeVN0YXRlKSYmKHcucj1kPTEsIW0mJnUoKSxjLm9ubG9hZD1jLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQpKXtcImltZ1wiIT1lJiZoKGZ1bmN0aW9uKCl7Yi5yZW1vdmVDaGlsZChjKX0sNTApO2Zvcih2YXIgciBpbiBUW25dKVRbbl0uaGFzT3duUHJvcGVydHkocikmJlRbbl1bcl0ub25sb2FkKCl9fXZhciBmPWZ8fGsuZXJyb3JUaW1lb3V0LGM9dC5jcmVhdGVFbGVtZW50KGUpLGQ9MCxnPTAsdz17dDpyLHM6bixlOnMsYTphLHg6Zn07MT09PVRbbl0mJihnPTEsVFtuXT1bXSksXCJvYmplY3RcIj09ZT9jLmRhdGE9bjooYy5zcmM9bixjLnR5cGU9ZSksYy53aWR0aD1jLmhlaWdodD1cIjBcIixjLm9uZXJyb3I9Yy5vbmxvYWQ9Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtsLmNhbGwodGhpcyxnKX0sdi5zcGxpY2UoaSwwLHcpLFwiaW1nXCIhPWUmJihnfHwyPT09VFtuXT8oYi5pbnNlcnRCZWZvcmUoYyx5P251bGw6cCksaChsLGYpKTpUW25dLnB1c2goYykpfWZ1bmN0aW9uIGYoZSx0LG4scixzKXtyZXR1cm4gbT0wLHQ9dHx8XCJqXCIsaShlKT9hKFwiY1wiPT10P0U6dyxlLHQsdGhpcy5pKyssbixyLHMpOih2LnNwbGljZSh0aGlzLmkrKywwLGUpLDE9PXYubGVuZ3RoJiZ1KCkpLHRoaXN9ZnVuY3Rpb24gbCgpe3ZhciBlPWs7cmV0dXJuIGUubG9hZGVyPXtsb2FkOmYsaTowfSxlfXZhciBjPXQuZG9jdW1lbnRFbGVtZW50LGg9ZS5zZXRUaW1lb3V0LHA9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxkPXt9LnRvU3RyaW5nLHY9W10sbT0wLGc9XCJNb3pBcHBlYXJhbmNlXCJpbiBjLnN0eWxlLHk9ZyYmISF0LmNyZWF0ZVJhbmdlKCkuY29tcGFyZU5vZGUsYj15P2M6cC5wYXJlbnROb2RlLGM9ZS5vcGVyYSYmXCJbb2JqZWN0IE9wZXJhXVwiPT1kLmNhbGwoZS5vcGVyYSksYz0hIXQuYXR0YWNoRXZlbnQmJiFjLHc9Zz9cIm9iamVjdFwiOmM/XCJzY3JpcHRcIjpcImltZ1wiLEU9Yz9cInNjcmlwdFwiOncsUz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PWQuY2FsbChlKX0seD1bXSxUPXt9LE49e3RpbWVvdXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5sZW5ndGgmJihlLnRpbWVvdXQ9dFswXSksZX19LEMsaztrPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7dmFyIGU9ZS5zcGxpdChcIiFcIiksdD14Lmxlbmd0aCxuPWUucG9wKCkscj1lLmxlbmd0aCxuPXt1cmw6bixvcmlnVXJsOm4scHJlZml4ZXM6ZX0saSxzLG87Zm9yKHM9MDtzPHI7cysrKW89ZVtzXS5zcGxpdChcIj1cIiksKGk9TltvLnNoaWZ0KCldKSYmKG49aShuLG8pKTtmb3Iocz0wO3M8dDtzKyspbj14W3NdKG4pO3JldHVybiBufWZ1bmN0aW9uIG8oZSxpLHMsbyx1KXt2YXIgYT10KGUpLGY9YS5hdXRvQ2FsbGJhY2s7YS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpLGEuYnlwYXNzfHwoaSYmKGk9cihpKT9pOmlbZV18fGlbb118fGlbZS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSksYS5pbnN0ZWFkP2EuaW5zdGVhZChlLGkscyxvLHUpOihUW2EudXJsXT9hLm5vZXhlYz0hMDpUW2EudXJsXT0xLHMubG9hZChhLnVybCxhLmZvcmNlQ1NTfHwhYS5mb3JjZUpTJiZcImNzc1wiPT1hLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCk/XCJjXCI6bixhLm5vZXhlYyxhLmF0dHJzLGEudGltZW91dCksKHIoaSl8fHIoZikpJiZzLmxvYWQoZnVuY3Rpb24oKXtsKCksaSYmaShhLm9yaWdVcmwsdSxvKSxmJiZmKGEub3JpZ1VybCx1LG8pLFRbYS51cmxdPTJ9KSkpfWZ1bmN0aW9uIHUoZSx0KXtmdW5jdGlvbiBuKGUsbil7aWYoZSl7aWYoaShlKSlufHwoZj1mdW5jdGlvbigpe3ZhciBlPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtsLmFwcGx5KHRoaXMsZSksYygpfSksbyhlLGYsdCwwLHUpO2Vsc2UgaWYoT2JqZWN0KGUpPT09ZSlmb3IocCBpbiBoPWZ1bmN0aW9uKCl7dmFyIHQ9MCxuO2ZvcihuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmdCsrO3JldHVybiB0fSgpLGUpZS5oYXNPd25Qcm9wZXJ0eShwKSYmKCFuJiYhLS1oJiYocihmKT9mPWZ1bmN0aW9uKCl7dmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2wuYXBwbHkodGhpcyxlKSxjKCl9OmZbcF09ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2UmJmUuYXBwbHkodGhpcyx0KSxjKCl9fShsW3BdKSksbyhlW3BdLGYsdCxwLHUpKX1lbHNlIW4mJmMoKX12YXIgdT0hIWUudGVzdCxhPWUubG9hZHx8ZS5ib3RoLGY9ZS5jYWxsYmFja3x8cyxsPWYsYz1lLmNvbXBsZXRlfHxzLGgscDtuKHU/ZS55ZXA6ZS5ub3BlLCEhYSksYSYmbihhKX12YXIgYSxmLGM9dGhpcy55ZXBub3BlLmxvYWRlcjtpZihpKGUpKW8oZSwwLGMsMCk7ZWxzZSBpZihTKGUpKWZvcihhPTA7YTxlLmxlbmd0aDthKyspZj1lW2FdLGkoZik/byhmLDAsYywwKTpTKGYpP2soZik6T2JqZWN0KGYpPT09ZiYmdShmLGMpO2Vsc2UgT2JqZWN0KGUpPT09ZSYmdShlLGMpfSxrLmFkZFByZWZpeD1mdW5jdGlvbihlLHQpe05bZV09dH0say5hZGRGaWx0ZXI9ZnVuY3Rpb24oZSl7eC5wdXNoKGUpfSxrLmVycm9yVGltZW91dD0xZTQsbnVsbD09dC5yZWFkeVN0YXRlJiZ0LmFkZEV2ZW50TGlzdGVuZXImJih0LnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsdC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEM9ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQywwKSx0LnJlYWR5U3RhdGU9XCJjb21wbGV0ZVwifSwwKSksZS55ZXBub3BlPWwoKSxlLnllcG5vcGUuZXhlY3V0ZVN0YWNrPXUsZS55ZXBub3BlLmluamVjdEpzPWZ1bmN0aW9uKGUsbixyLGksYSxmKXt2YXIgbD10LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYyxkLGk9aXx8ay5lcnJvclRpbWVvdXQ7bC5zcmM9ZTtmb3IoZCBpbiByKWwuc2V0QXR0cmlidXRlKGQscltkXSk7bj1mP3U6bnx8cyxsLm9ucmVhZHlzdGF0ZWNoYW5nZT1sLm9ubG9hZD1mdW5jdGlvbigpeyFjJiZvKGwucmVhZHlTdGF0ZSkmJihjPTEsbigpLGwub25sb2FkPWwub25yZWFkeXN0YXRlY2hhbmdlPW51bGwpfSxoKGZ1bmN0aW9uKCl7Y3x8KGM9MSxuKDEpKX0saSksYT9sLm9ubG9hZCgpOnAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobCxwKX0sZS55ZXBub3BlLmluamVjdENzcz1mdW5jdGlvbihlLG4scixpLG8sYSl7dmFyIGk9dC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxmLG49YT91Om58fHM7aS5ocmVmPWUsaS5yZWw9XCJzdHlsZXNoZWV0XCIsaS50eXBlPVwidGV4dC9jc3NcIjtmb3IoZiBpbiByKWkuc2V0QXR0cmlidXRlKGYscltmXSk7b3x8KHAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaSxwKSxoKG4sMCkpfX0odGhpcyxkb2N1bWVudCksTW9kZXJuaXpyLmxvYWQ9ZnVuY3Rpb24oKXt5ZXBub3BlLmFwcGx5KHdpbmRvdyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSl9LE1vZGVybml6ci5hZGRUZXN0KFwiY29yc1wiLCEhKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIG5ldyBYTUxIdHRwUmVxdWVzdCkpLE1vZGVybml6ci5hZGRUZXN0KFwianNvblwiLCEhd2luZG93LkpTT04mJiEhSlNPTi5wYXJzZSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9