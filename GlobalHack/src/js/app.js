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

    .state('faq', {
        controller: 'faqController',
        templateUrl: 'templates/faq/faq.html',
        url: '/faq'
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
