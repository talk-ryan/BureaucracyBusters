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
            $rootScope.endPoint = "http://192.168.3.187:3000";

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
        templateUrl: 'partials/home/home.html',
        url: '/home'
    })

    /* About maintz.com */    
    .state('about', {
        controller: 'aboutController',
        templateUrl: 'partials/about/about.html',
        url: '/about'
    })

    /* About Website */
    .state('website', {
        templateUrl: 'partials/about/website.html',
        url: "/website"
    })
    
    /* Photo Carousel */
    .state('photoCarousel', {
        //controller: 'photosController',
        templateUrl: 'partials/photos/test.carousel.html',
        url: "/test.carousel"
    })

    /* Photo Gallery */
    .state('photoGallery', {
        //controller: 'photosController',
        templateUrl: 'partials/photos/photo.gallery.html',
        url: "/photo.gallery"
    })

    /* Photo Grid */
    .state('photoGrid', {
        /*
        service: 'PhotoService',
        resolve: {
            photos: ['http', function ($http) {
                return $http.get("json/photorecords.json").success(
                    function(response) {
                        $scope.photos = response.photo_records;
                    }
                );
            }]
        },
        */
        //controller: 'photosController',
        templateUrl: 'partials/photos/photo.grid.html',
        url: "/photo.grid"
    })

    /* Videos */
    .state('videos', {
        /*
        service: 'VideosService',
        resolve: {
            videos: ['http', function ($http) {
                return $http.get('json/videos.json').then(function(response){
                    return response.data;
                })
            }]
        },
        */
        controller: 'videosController',
        templateUrl: 'partials/videos/videos.html',
        url: "/videos"
    })

    /* Links */
    .state('links', {
        clearmenuclass: false,
        controller: 'linksController',
        templateUrl: 'partials/links/links.html',
        url: "/links"
    })

    /* Portfolio */
    .state('portfolio', {
        controller: 'portfolioController',
        templateUrl: 'partials/portfolio/portfolio.html',
        url: "/portfolio"
    })

    /* Contact */
    .state('contact', {
        controller: 'contactController',
        templateUrl: 'partials/contact/contact.html',
        url: "/contact"
    })

    /* Contacts */
    .state('contacts', {
        /*
        ** Showing off how you could return a promise from partialsProvider
        templateProvider: [  '$timeout',
            function (        $timeout) {
                return $timeout(function () {
                    return '<p class="lead">UI-Router Resources</p><ul>' +
                        '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
                        '</ul>';
                }, 100);
            }
        ],
        */
        controller: 'contactsController',
        templateUrl: 'partials/contacts.html',
        url: '/contacts'
    })

    /* Register */
    .state('register', {
        controller: 'userController',
        templateUrl: 'partials/account/register.html',
        url: "/register"
    })

   /* Login */
    .state('login', {
        controller: 'userController',
        templateUrl: 'partials/account/login.html',
        url: "/login"
    })

   /* Logout */
    .state('logout', {
        templateUrl: 'partials/account/logout.html',
        url: "/logout"
    });

    $urlRouterProvider

        /*
        ** The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        ** Here we are just setting up some convenience urls.
        */
        .when('/c?id', '/partials/contacts/:id')
        .when('/user/:id', '/partials/contacts/:id')

        .when('/video/:videoName', '/partials/videos/:id')
        /*
        ** If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        */
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
