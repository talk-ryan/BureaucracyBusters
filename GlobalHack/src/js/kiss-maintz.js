/*! kiss-maintz
 ** @Version v1.0.2 - 2015-08-21
 ** @Desc: Maintz.com website
 ** @Link: https://github.com/wmmaintz/kiss-maintz 
 ** @Author Bill Maintz
 ** @License: MIT
 ** https://github.com/wmmaintz/kiss-maintz/LICENSE-MIT
 ** Copyright (c) 2015;  All rights reserved
 ** /

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


///  ///

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


///  ///

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


///  ///

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


///  ///

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : links.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller("linksController", [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('linksController') activated");
        }    

        $rootScope.clearmenuclass = false;
    
        $scope.links = [
            { "type": "cat", "category": "Business Affiliates", "descript": "The entrepreneurial spirit is alive and well within the Maintz family." },
            { "type": "cat", "category": "JUST FOR FUN", "descript": "These websites explore the lighter side." },
            { "type": "cat", "category": "THE CLAN", "descript": "Websites of the 'extended' Maintz family." },

            { "type": "link", "category": "Business Affiliates", "name": "All Business Computer Services", "href": "http://www.allbusinesscomputerservices.com", "target": "_blank", "descript": "My consulting company" },
            { "type": "link", "category": "Business Affiliates", "name": "Elite Renovations", "href": "http://www.eliterenovations.us", "target": "_blank", "descript": "My son's construction/renovation company" },
            { "type": "link", "category": "Business Affiliates", "name": "Styles Altar'd", "href": "http://www.stylealtard.com/our-story", "target": "_blank", "descript": "My daughters event-planning business" },
            { "type": "link", "category": "JUST FOR FUN", "name": "Maintz Wildlife Preserve", "href": "http://mdc.mo.gov/landwater-care/stream-and-watershed-management/missouri-watersheds/headwater-diversion/land-use/fi-13", "target": "_blank", "descript": "Maintz Wildlife Preserve" },
            { "type": "link", "category": "JUST FOR FUN", "name": "Roman Gladius Maintz Sword", "href": "http://www.kultofathena.com/product.asp?item=500360", "target": "_blank", "descript": "Roman Gladius Maintz Sword" },
            { "type": "link", "category": "THE CLAN", "name": "Tommy Maintz", "href": "http://www.linkedin.com/in/tommymaintz", "target": "_blank", "descript": "Tommy Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Twan Maintz", "href": "http://www.linkedin.com/in/twanmaintz", "target": "_blank", "descript": "Twan Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Bill Maintz  II", "href": "http://www.allbusinesscomputerservices.com/management.html", "target": "_blank", "descript": "Bill Maintz  II" },
            { "type": "link", "category": "THE CLAN", "name": "Bill Maintz III", "href": "http://www.linkedin.com/pub/bill-maintz/67/584/939", "target": "_blank", "descript": "Bill Maintz III" },
            { "type": "link", "category": "THE CLAN", "name": "Wade Maintz", "href": "http://www.eliterenovations.us/about/the-owner.cshtml", "target": "_blank", "descript": "Wade Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Allissa (Maintz) Reimer", "href": "http://stylealtard.com/about/", "target": "_blank", "descript": "Allissa (Maintz) Reimer" },
            { "type": "link", "category": "THE CLAN", "name": "David Maintz", "href": "http://www.linkedin.com/pub/david-maintz/38/163/a19", "target": "_blank", "descript": "David Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Gisela Maintz", "href": "http://www.astro.uni-bonn.de/~gmaintz/", "target": "_blank", "descript": "Gisela Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Ilja Maintz", "href": "http://www.linkedin.com/pub/ilja-maintz/b/457/236", "target": "_blank", "descript": "Ilja Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Dr. ir. J.B.Antoine Maintz", "href": "http://www.cs.uu.nl/staff/twan.html", "target": "_blank", "descript": "Dr. ir. J.B.Antoine Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Jens Peter Maintz", "href": "http://www.cellist.nl/database/showcellist.asp?id: 963", "target": "_blank", "descript": "Jens Peter Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Jesper Maintz", "href": "http://www.zoominfo.com/p/Jesper-Maintz/1857930792", "target": "_blank", "descript": "Jesper Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Prof. Dr. Julia Maintz", "href": "http://www.cbs-edu.de/en/cbs/team/julia-maintz/", "target": "_blank", "descript": "Prof. Dr. Julia Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Maximillian Maintz", "href": "http://maximilianmaintz.com/", "target": "_blank", "descript": "Maximillian Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Philipp Maintz", "href": "http://www.philippmaintz.de/", "target": "_blank", "descript": "Philipp Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Thomas Maintz", "href": "http://www.thomasmaintz.com/", "target": "_blank", "descript": "Thomas Maintz" }
            ];

        $scope.linkCats = _.uniq(_.pluck($scope.links, 'category'));

    }
]);

if(debug){
    console.log("appControllers('linksController') defined");
}

/*****************************************************************************
 ** END OF FILE - links.controller.js
 ****************************************************************************/



///  ///

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : photos.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('photosController', [
            '$scope', '$rootScope', '$http', '$interval', '$animate', 'uiGridConstants',
    function($scope,   $rootScope,   $http,   $interval,   $animate,   uiGridConstants  ){

        debug=true;
        
        if(debug){
            console.log("appControllers('photosController') activated");
        }    

        $rootScope.clearmenuclass = false;

        //////////////////////////////////////////////////////////////////////
        // photos collection
        //////////////////////////////////////////////////////////////////////
        
        var path = $rootScope.endPoint + '/json/photos.json';
        console.log(path);
        
        $http.get(path)
        .success(function(response) {
            $scope.photos = response;
            console.log($scope.photos);
        })
        .error(function(err) {
            console.debug('$http get error: ' + err);
            alert(err);
        });
        
        while( $scope.photos == undefined ){
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
/*
        $scope.gridOptions.enableColumnResizing = true;
        $scope.gridOptions.enableFiltering = false;
        $scope.gridOptions.enableGridMenu = true;
        $scope.gridOptions.showGridFooter = true;
        $scope.gridOptions.showColumnFooter = true;
        $scope.gridOptions.fastWatch = true;
        $scope.gridOptions.enableSorting = true;
*/
        $scope.gridOptions.rowIdentity = function(row) {
            return row.id;
        };
        
        $scope.gridOptions.getRowIdentity = function(row) {
            return row.id;
        };

        // End of Grid options
        
        
        //////////////////////////////////////////////////////////////////////
        // Slide / Carousel vars
        //////////////////////////////////////////////////////////////////////
        $scope.slideInterval = 5000;
        $scope.noWrapSlides = false;

        var self = this,
            slides = self.slides = $scope.slides = [],
            currentIndex = -1,
            currentInterval,
            isPlaying,
            destroyed = false;

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

        for(var i=0; i<$scope.photos.length; i++){
            if($scope.photos[i].hilight == 1){
                addSlide(slides, $scope.photos[i]);
            }
        }
        
        $scope.slides = self.slides = slides;

        if(debug){
            console.log('$scope.slides:');
            console.log($scope.slides);
            console.log('$scope.slides(' + $scope.slides.length + ')');
        }

        //////////////////////////////////////////////////////////////////////
        // Extract the unique tags
        //////////////////////////////////////////////////////////////////////
        var allTags = multObjArray2Array( _.uniq(_.pluck($scope.photos, 'tags')) );

        if(debug){
            console.debug('allTags:');
            console.debug(allTags);
        }

        $scope.photoTags = (_.uniq(allTags)).sort();
        if(debug){
            console.debug('$scope.photoTags:');
            console.debug($scope.photoTags);
        }

        if(debug){
            console.debug('   $scope.photos.length=(' + $scope.photos.length + ')');
            console.debug('         allTags.length=(' + allTags.length + ')');
            console.debug('$scope.photoTags.length=(' + $scope.photoTags.length + ')');
        }
        
        //////////////////////////////////////////////////////////////////////
        // functions / methods
        //////////////////////////////////////////////////////////////////////
        
        function addSlide(target, photoToAdd){
            target.push(photoToAdd);
            var i = target.length - 1;
            target[i].color = colors[(i*10) % colors.length];
            target[i].odd = (i % 2 === 0);
        }
        
        function addPhoto(target, hlFlag, style) {
            var i = target.length,
                d = new Date();
            console.log("Date = [" + d + "]");
            console.log("d.toJSON = [" + d.toJSON().toString() + "]");
            target.push({
                "id"        :(i + 1),
                "name"      : style + ' slide #' + (i + 1),
                "href"      : 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                "thumbnail" : 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                "hoffset"   : 0,
                "voffset"   : 0,
                "dateTaken" : d.toJSON().toString(),
                "size"      : 0,
                "tags"      : style,
                "hilight"   : hlFlag,
                "color"     : colors[ (i*10) % colors.length],
                "odd"       : (i % 2 === 0)
            });
        };

        function addNumPhotos(qty, hl, style) {
            for (var i=0; i < qty; i++) {
                addPhoto($scope.photos, hl, style);
                if(hl){
                    addSlide($scope.slides,$scope.photos[$scope.photos.length - 1]);
                }
            }
        }

        $scope.addPhotos = function (hlFlag) {
            var num2Add = 5;
            addNumPhotos(num2Add, hlFlag, 'abstract');
            addNumPhotos(num2Add, hlFlag, 'city');
            addNumPhotos(num2Add, hlFlag, 'people');
            addNumPhotos(num2Add, hlFlag, 'transport');
            addNumPhotos(num2Add, hlFlag, 'animals');
            addNumPhotos(num2Add, hlFlag, 'food');
            addNumPhotos(num2Add, hlFlag, 'nature');
            addNumPhotos(num2Add, hlFlag, 'business');
            addNumPhotos(num2Add, hlFlag, 'nightlife');
            addNumPhotos(num2Add, hlFlag, 'sports');
            addNumPhotos(num2Add, hlFlag, 'fashion');
            addNumPhotos(num2Add, hlFlag, 'technics');
            console.log( $scope.photos);
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
    console.log("appControllers('photosController') defined");
}

/*****************************************************************************
 ** END OF FILE - photos.controller.js
 ****************************************************************************/


///  ///

appControllers.controller('testCarouselController', [
             '$scope', 'PhotoFactory', 
    function ($scope,   PhotoFactory  ) {
    
    var self = this,
        slides = self.slides = $scope.slides = [],
        currentIndex = -1,
        currentInterval,
        isPlaying = true,
        destroyed = false;

    $scope.photos = [
    {
        "id"        : 0,
        "name"      : "ComputerGuy",
        "href"      : "img/photos/ComputerGuy.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-ComputerGuy.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-03-08T14:34:00:000Z",
        "size"      : 42539,
        "tags"      : ["Bill"],
        "hilight"   : 0
    },
    {
        "id"        : 1,
        "name"      : "Bill Maintz",
        "href"      : "img/photos/wmm2.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-wmm2.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-02-25T17:29:00:000Z",
        "size"      : 16384,
        "tags"      : ["Bill","Dad"],
        "hilight"   : 1
    },
    {
        "id"        : 3,
        "name"      : "Progress Park Basketball",
        "href"      : "img/photos/2012-11-02 07.00.11.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2012-11-02 07.00.11.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-11-02T08:00:00:000Z",
        "size"      : 2465860,
        "tags"      : ["Bill","Basketball"],
        "hilight"   : 0
    },

    {
        "id"        : 10,
        "name"      : "Ellen",
        "href"      : "img/photos/IMG_0003.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0003.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-05-10T13:35:00:000Z",
        "size"      : 1604793,
        "tags"      : ["Ellen"],
        "hilight"   : 1
    },

    {
        "id"        : 40,
        "name"      : "Father and Bride",
        "href"      : "img/photos/IMAG0130.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-IMAG0130.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-06T18:05:00:000Z",
        "size"      : 24733,
        "tags"      : ["Bill","Dad","Allissa","Wedding"],
        "hilight"   : 0
    },
    {
        "id"        : 41,
        "name"      : "Mike and Allissa",
        "href"      : "img/photos/IMAG0143.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-IMAG0143.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-06T18:25:00:000Z",
        "size"      : 938375,
        "tags"      : ["Mike","Allissa","Wedding"],
        "hilight"   : 0
    },
    {
        "id"        : 42,
        "name"      : "Newlyweds",
        "href"      : "img/photos/IMAG0144.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-IMAG0144.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-06T18:25:00:000Z",
        "size"      : 1053785,
        "tags"      : ["Mike","Allissa","Wedding"],
        "hilight"   : 0
    },
    {
        "id"        : 43,
        "name"      : "First Dance",
        "href"      : "img/photos/first%20dance.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-first%20dance.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-30T21:01:00:000Z",
        "size"      : 1520351,
        "tags"      : ["Mike","Allissa","Reception"],
        "hilight"   : 0
    },

    {
        "id"        : 50,
        "name"      : "The Boys",
        "href"      : "img/photos/2013-11-28-TheBoys.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2013-11-28-TheBoys.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-11-28T07:35:00:000Z",
        "size"      : 24733,
        "tags"      : ["Bill","Dad","Uncle","Billy","Wade","Bruce","Thanksgiving"],
        "hilight"   : 0
    },
    {
        "id"        : 51,
        "name"      : "Ellen and Allissa",
        "href"      : "img/photos/2013-05-12_14.16.08.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2013-05-12_14.16.08.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-05-30T17:26:00:000Z",
        "size"      : 84008,
        "tags"      : ["Ellen","Allissa"],
        "hilight"   : 1
    },
    {
        "id"        : 52,
        "name"      : "Billy, Wade, & Allissa",
        "href"      : "img/photos/2012-10-15-BillWadeAllissa.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2012-10-15-BillWadeAllissa.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-05-18T13:57:00:000Z",
        "size"      : 76911,
        "tags"      : ["Family","Billy","Wade","Allissa"],
        "hilight"   : 1
    },

    {
        "id"        : 100,
        "name"      : "Bill's Family",
        "href"      : "img/photos/2012-03-17 12.15.27.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2012-03-17 12.15.27.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-03-17T01:15:00:000Z",
        "size"      : 2032306,
        "tags"      : ["Billy","Candice","Dalton","Danny","Raegan","Ella"],
        "hilight"   : 1
    },
    {
        "id"        : 101,
        "name"      : "Dalton",
        "href"      : "img/photos/Dalton.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Dalton.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T08:06:00:000Z",
        "size"      : 3160119,
        "tags"      : ["Family","Billy","Dalton"],
        "hilight"   : 0
    },
    {
        "id"        : 102,
        "name"      : "Danny",
        "href"      : "img/photos/Danny.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Danny.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T08:40:00:000Z",
        "size"      : 2894916,
        "tags"      : ["Family","Billy","Danny"],
        "hilight"   : 0
    },
    {
        "id"        : 103,
        "name"      : "Raegan",
        "href"      : "img/photos/Raegan.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Raegan.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T09:17:00:000Z",
        "size"      : 3089099,
        "tags"      : ["Family","Billy","Raegan"],
        "hilight"   : 0
    },
    {
        "id"        : 104,
        "name"      : "Ella",
        "href"      : "img/photos/Ella.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Ella.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T09:17:00:000Z",
        "size"      : 2664488,
        "tags"      : ["Family","Billy","Ella"],
        "hilight"   : 0
    },
    {
        "id"        : 110,
        "name"      : "Skater Danny",
        "href"      : "img/photos/SkaterDanny.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-SkaterDanny.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-03-14T16:29:00:000Z",
        "size"      : 147389,
        "tags"      : ["Family","Danny","Skate Board"],
        "hilight"   : 1
    },
    {
        "id"        : 199,
        "name"      : "Charlie",
        "href"      : "img/photos/Charlie.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Charlie.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-07-06T20:51:00:000Z",
        "size"      : 1764988,
        "tags"      : ["Family","Billy","Charlie", "Pet"],
        "hilight"   : 0
    },

    {
        "id"        : 200,
        "name"      : "Wade and Julie",
        "href"      : "img/photos/2014-08-15-WadeJulie.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2014-08-15-WadeJulie.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-08-15T12:00:00:000Z",
        "size"      : 24733,
        "tags"      : ["Wade","Julie"],
        "hilight"   : 1
    },             
    {
        "id"        : 201,
        "name"      : "Wade",
        "href"      : "img/photos/2014-10-14-Wade.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2014-10-14-Wade.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-10-14T12:00:00:000Z",
        "size"      : 24733,
        "tags"      : ["Wade"],
        "hilight"   : 0
    },
    {
        "id"        : 202,
        "name"      : "Wade drives NASCAR",
        "href"      : "img/photos/NascarWade.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-NascarWade.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-03-08T14:35:00:000Z",
        "size"      : 65859,
        "tags"      : ["Wade","NASCAR"],
        "hilight"   : 1
    },
    {
        "id"        : 299,
        "name"      : "Kong & Clementine",
        "href"      : "img/photos/KongClementine.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-KongClementine.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-12-30T16:21:00:000Z",
        "size"      : 1711165,
        "tags"      : ["Wade","Pet"],
        "hilight"   : 0
    },

    {
        "id"        : 310,
        "name"      : "Mike and Allissa",
        "href"      : "img/photos/Mike-Allissa.png",
        "thumbnail" : "img/photos/Thumbnails/TN-Mike-Allissa.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-07-26T21:34:00:000Z",
        "size"      : 718851,
        "tags"      : ["Mike","Allissa"],
        "hilight"   : 1
    },
    {
        "id"        : 390,
        "name"      : "Gus Gus",
        "href"      : "img/photos/2014-02-26-Gus.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2014-02-26-Gus.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-02-26T12:00:00:000Z",
        "size"      : 24733,
        "tags"      : ["Gus", "Bulldog"],
        "hilight"   : 1
    },

    {
        "id"        : 550,
        "name"      : "Home - Right Front Yard",
        "href"      : "img/photos/Lussac50.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac50.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:51:00:000Z",
        "size"      : 190130,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 555,
        "name"      : "Home - Left Front Yard",
        "href"      : "img/photos/IMG_0117.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0117.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2009-05-03T17:02:00:000Z",
        "size"      : 147153,
        "tags"      : ["Home"],
        "hilight"   : 0
    },
    {
        "id"        : 560,
        "name"      : "Home - Left Front Garden",
        "href"      : "img/photos/IMG_0118.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0118.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2009-05-03T17:02:00:000Z",
        "size"      : 170630,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 565,
        "name"      : "White Flowers",
        "href"      : "img/photos/Lussac67.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac67.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:57:00:000Z",
        "size"      : 102845,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 570,
        "name"      : "Purple Flowers",
        "href"      : "img/photos/Lussac66.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac66.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:57:00:000Z",
        "size"      : 216718,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 575,
        "name"      : "Lying Angel Statue",
        "href"      : "img/photos/Lussac65.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac65.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:57:00:000Z",
        "size"      : 231775,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 580,
        "name"      : "Yellow Flower",
        "href"      : "img/photos/IMG_0235.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0235.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2010-04-17T18:21:00:000Z",
        "size"      : 2329415,
        "tags"      : ["Flowers", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 585,
        "name"      : "Barkin up a tree",
        "href"      : "img/photos/IMG_0239.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0239.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-04-17T18:22:00:000Z",
        "size"      : 1878382,
        "tags"      : ["Tree", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 590,
        "name"      : "Red Flower",
        "href"      : "img/photos/IMG_0236.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0236.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2010-04-17T18:21:00:000Z",
        "size"      : 2216600,
        "tags"      : ["Flowers", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 595,
        "name"      : "Home - Right Front Garden",
        "href"      : "img/photos/Lussac53.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac53.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:53:00:000Z",
        "size"      : 176719,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 600,
        "name"      : "Home - Right-side Pathway",
        "href"      : "img/photos/Lussac54.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac54.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:53:00:000Z",
        "size"      : 199561,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 605,
        "name"      : "Front Garden Pixie Statue",
        "href"      : "img/photos/Lussac55.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac55.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:53:00:000Z",
        "size"      : 158427,
        "tags"      : ["Home", "Statue"],
        "hilight"   : 0
    },
    {
        "id"        : 610,
        "name"      : "Home - Right-side Upper Garden",
        "href"      : "img/photos/Lussac57.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac57.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:54:00:000Z",
        "size"      : 181385,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 615,
        "name"      : "Home - Right-side Lower Pathway",
        "href"      : "img/photos/IMG_0121.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0121.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2009-05-03T17:03:00:000Z",
        "size"      : 182803,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 620,
        "name"      : "Home - Right-side Lower Garden",
        "href"      : "img/photos/Lussac58.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac58.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:54:00:000Z",
        "size"      : 177327,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 625,
        "name"      : "Home - Fountain/Bird Bath",
        "href"      : "img/photos/Lussac59.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac59.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:54:00:000Z",
        "size"      : 155709,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 630,
        "name"      : "Home - Right-side Garden From Rear",
        "href"      : "img/photos/Lussac60.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac60.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:55:00:000Z",
        "size"      : 200211,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 635,
        "name"      : "Home - Rear-View (Left)",
        "href"      : "img/photos/Lussac61.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac61.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:55:00:000Z",
        "size"      : 186970,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 640,
        "name"      : "Home - Rear-View (Right)",
        "href"      : "img/photos/Lussac62.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac62.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:56:00:000Z",
        "size"      : 180962,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 645,
        "name"      : "Home - Rear Yard",
        "href"      : "img/photos/Lussac63.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac63.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:56:00:000Z",
        "size"      : 205547,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 699,
        "name"      : "One of Many Squirrels",
        "href"      : "img/photos/IMG_0233.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0233.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2010-04-17T18:20:00:000Z",
        "size"      : 2362695,
        "tags"      : ["Squirrel"],
        "hilight"   : 0
    }
    ];

    //$scope.photos = PhotoFactory.getPhotos();
    console.log("$scope.photos.length=" + $scope.photos.length);
    
    $scope.slideInterval = 2000;
    $scope.noWrapSlides = false;

    for(var i=0; i<$scope.photos.length; i++){
        if($scope.photos[i].hilight == 1){
            slides.push($scope.photos[i]);
        }
    }

    $scope.slides = self.slides = slides;
    
    console.log("$scope.slides.length=" + $scope.slides.length);

    $scope.addSlides = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            href: '//placekitten.com/' + newWidth + '/300',
            name: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    
    
    
}]);

///  ///

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : ui.calendar.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

/*
*  AngularJs Fullcalendar Wrapper for the JQuery FullCalendar
*  API @ http://arshaw.com/fullcalendar/
*
*  Angular Calendar Directive that takes in the [eventSources] nested array object as the ng-model and watches it deeply changes.
*       Can also take in multiple event urls as a source object(s) and feed the events per view.
*       The calendar will watch any eventSource array and update itself when a change is made.
*
*/

angular.module('ui.calendar', [])
    .constant('uiCalendarConfig', {calendars: {}})
    .controller('uiCalendarController', [
                '$scope', '$timeout', '$locale', 
        function($scope,   $timeout,   $locale){

        if(debug){
            console.log("appControllers('aboutController') activated");
        }  
            
        var sources = $scope.eventSources,
            extraEventSignature = $scope.calendarWatchEvent ? $scope.calendarWatchEvent : angular.noop,
            wrapFunctionWithScopeApply = function(functionToWrap){
                var wrapper;
                if (functionToWrap){
                    wrapper = function(){
                        // This happens outside of angular context so we need to wrap it in a timeout which has an implied apply.
                        // In this way the function will be safely executed on the next digest.
                        var args = arguments;
                        var _this = this;
                        $timeout(function(){
                            functionToWrap.apply(_this, args);
                        });
                    };
                }
                return wrapper;
            };
            var eventSerialId = 1;
            // @return {String} fingerprint of the event object and its properties
            this.eventFingerprint = function(e) {
                if (!e._id) {
                    e._id = eventSerialId++;
                }
                // This extracts all the information we need from the event. http://jsperf.com/angular-calendar-events-fingerprint/3
                return "" + e._id + (e.id || '') + (e.title || '') + (e.url || '') + (+e.start || '') + (+e.end || '') +
                    (e.allDay || '') + (e.className || '') + extraEventSignature(e) || '';
            };

            var sourceSerialId = 1, sourceEventsSerialId = 1;
            // @return {String} fingerprint of the source object and its events array
            this.sourceFingerprint = function(source) {
                var fp = '' + (source.__id || (source.__id = sourceSerialId++)),
                    events = angular.isObject(source) && source.events;
                if (events) {
                    fp = fp + '-' + (events.__id || (events.__id = sourceEventsSerialId++));
                }
                return fp;
            };

            // @return {Array} all events from all sources
            this.allEvents = function() {
                // do sources.map(&:events).flatten(), but we don't have flatten
                var arraySources = [];
                for (var i = 0, srcLen = sources.length; i < srcLen; i++) {
                    var source = sources[i];
                    if (angular.isArray(source)) {
                        // event source as array
                        arraySources.push(source);
                    } else if(angular.isObject(source) && angular.isArray(source.events)){
                        // event source as object, ie extended form
                        var extEvent = {};
                        for(var key in source){
                            if(key !== '_id' && key !== 'events'){
                                extEvent[key] = source[key];
                            }
                        }
                        for(var eI = 0;eI < source.events.length;eI++){
                            angular.extend(source.events[eI],extEvent);
                            }
                        arraySources.push(source.events);
                    }
                }
                return Array.prototype.concat.apply([], arraySources);
            };

            // Track changes in array of objects by assigning id tokens to each element and watching the scope for changes in the tokens
            // @param {Array|Function} arraySource array of objects to watch
            // @param tokenFn {Function} that returns the token for a given object
            // @return {Object}
            //  subscribe: function(scope, function(newTokens, oldTokens))
            //    called when source has changed. return false to prevent individual callbacks from firing
            //  onAdded/Removed/Changed:
            //    when set to a callback, called each item where a respective change is detected
            this.changeWatcher = function(arraySource, tokenFn) {
                var self;
                var getTokens = function() {
                    var array = angular.isFunction(arraySource) ? arraySource() : arraySource;
                    var result = [], token, el;
                    for (var i = 0, n = array.length; i < n; i++) {
                        el = array[i];
                        token = tokenFn(el);
                        map[token] = el;
                        result.push(token);
                    }
                    return result;
                };

                // @param {Array} a
                // @param {Array} b
                // @return {Array} elements in that are in a but not in b
                // @example
                //  subtractAsSets([6, 100, 4, 5], [4, 5, 7]) // [6, 100]
                var subtractAsSets = function(a, b) {
                    var result = [], inB = {}, i, n;
                    for (i = 0, n = b.length; i < n; i++) {
                        inB[b[i]] = true;
                    }
                    for (i = 0, n = a.length; i < n; i++) {
                        if (!inB[a[i]]) {
                            result.push(a[i]);
                        }
                    }
                    return result;
                };
                
                // Map objects to tokens and vice-versa
                var map = {};
                
                // Compare newTokens to oldTokens and call onAdded, onRemoved, and onChanged handlers for each affected event respectively.
                var applyChanges = function(newTokens, oldTokens) {
                    var i, n, el, token;
                    var replacedTokens = {};
                    var removedTokens = subtractAsSets(oldTokens, newTokens);
                    for (i = 0, n = removedTokens.length; i < n; i++) {
                        var removedToken = removedTokens[i];
                        el = map[removedToken];
                        delete map[removedToken];
                        var newToken = tokenFn(el);
                        // if the element wasn't removed but simply got a new token, its old token will be different from the current one
                        if (newToken === removedToken) {
                            self.onRemoved(el);
                        } else {
                            replacedTokens[newToken] = removedToken;
                            self.onChanged(el);
                        }
                    }

                    var addedTokens = subtractAsSets(newTokens, oldTokens);
                    for (i = 0, n = addedTokens.length; i < n; i++) {
                        token = addedTokens[i];
                        el = map[token];
                        if (!replacedTokens[token]) {
                            self.onAdded(el);
                        }
                    }
                };
                return self = {
                    subscribe: function(scope, onArrayChanged) {
                        scope.$watch(getTokens, function(newTokens, oldTokens) {
                            var notify = !(onArrayChanged && onArrayChanged(newTokens, oldTokens) === false);
                            if (notify) {
                                applyChanges(newTokens, oldTokens);
                            }
                        }, true);
                    },
                    onAdded: angular.noop,
                    onChanged: angular.noop,
                    onRemoved: angular.noop
                };
            };
            
            this.getFullCalendarConfig = function(calendarSettings, uiCalendarConfig){
                var config = {};

                angular.extend(config, uiCalendarConfig);
                angular.extend(config, calendarSettings);

                angular.forEach(config, function(value,key){
                    if (typeof value === 'function'){
                        config[key] = wrapFunctionWithScopeApply(config[key]);
                    }
                });
                
                return config;
            };
            
            this.getLocaleConfig = function(fullCalendarConfig) {
                if (!fullCalendarConfig.lang || fullCalendarConfig.useNgLocale) {
                    // Configure to use locale names by default
                    var tValues = function(data) {
                        // convert {0: "Jan", 1: "Feb", ...} to ["Jan", "Feb", ...]
                        var r, k;
                        r = [];
                        for (k in data) {
                            r[k] = data[k];
                        }
                        return r;
                    };
                    var dtf = $locale.DATETIME_FORMATS;
                    return {
                        monthNames: tValues(dtf.MONTH),
                        monthNamesShort: tValues(dtf.SHORTMONTH),
                        dayNames: tValues(dtf.DAY),
                        dayNamesShort: tValues(dtf.SHORTDAY)
                    };
                }
                return {};
            };
        }])
    .directive('uiCalendar', ['uiCalendarConfig', function(uiCalendarConfig) {
        return {
            restrict: 'A',
            scope: {eventSources:'=ngModel',calendarWatchEvent: '&'},
            controller: 'uiCalendarController',
            link: function(scope, elm, attrs, controller) {

                var sources = scope.eventSources,
                    sourcesChanged = false,
                    calendar,
                    eventSourcesWatcher = controller.changeWatcher(sources, controller.sourceFingerprint),
                    eventsWatcher = controller.changeWatcher(controller.allEvents, controller.eventFingerprint),
                    options = null;
                
                function getOptions(){
                    var calendarSettings = attrs.uiCalendar ? scope.$parent.$eval(attrs.uiCalendar) : {},
                        fullCalendarConfig;
                    
                    fullCalendarConfig = controller.getFullCalendarConfig(calendarSettings, uiCalendarConfig);
                    
                    var localeFullCalendarConfig = controller.getLocaleConfig(fullCalendarConfig);
                    angular.extend(localeFullCalendarConfig, fullCalendarConfig);
                    options = { eventSources: sources };
                    angular.extend(options, localeFullCalendarConfig);
                    //remove calendars from options
                    options.calendars = null;
                    
                    var options2 = {};
                    for(var o in options){
                        if(o !== 'eventSources'){
                            options2[o] = options[o];
                        }
                    }
                    return JSON.stringify(options2);
                }
                
                    scope.destroy = function(){
                        if(calendar && calendar.fullCalendar){
                            calendar.fullCalendar('destroy');
                        }
                        if(attrs.calendar) {
                            calendar = uiCalendarConfig.calendars[attrs.calendar] = $(elm).html('');
                        } else {
                            calendar = $(elm).html('');
                        }
                    };

                scope.init = function(){
                    calendar.fullCalendar(options);
                    if(attrs.calendar) {
                        uiCalendarConfig.calendars[attrs.calendar] = calendar;
                    }          
                };
                
                eventSourcesWatcher.onAdded = function(source) {
                    calendar.fullCalendar('addEventSource', source);
                    sourcesChanged = true;
                };
                
                eventSourcesWatcher.onRemoved = function(source) {
                    calendar.fullCalendar('removeEventSource', source);
                    sourcesChanged = true;
                };
                
                eventSourcesWatcher.onChanged = function(source) {
                    console.log(source + " changed");
                    calendar.fullCalendar('refetchEvents');
                    sourcesChanged = true;
                };
                
                eventsWatcher.onAdded = function(event) {
                    calendar.fullCalendar('renderEvent', event, (event.stick ? true : false));
                };
                
                eventsWatcher.onRemoved = function(event) {
                    calendar.fullCalendar('removeEvents', event._id);
                };
                
                eventsWatcher.onChanged = function(event) {
                    event._start = jQuery.fullCalendar.moment(event.start);
                    event._end = jQuery.fullCalendar.moment(event.end);
                    calendar.fullCalendar('updateEvent', event);
                };

                eventSourcesWatcher.subscribe(scope);
                eventsWatcher.subscribe(scope, function() {
                    if (sourcesChanged === true) {
                        sourcesChanged = false;
                        // return false to prevent onAdded/Removed/Changed handlers from firing in this case
                        return false;
                    }
                });
                
                scope.$watch(getOptions, function(newO,oldO){
                    console.log(newO,oldO);
                    scope.destroy();
                    scope.init();
                });
            }
        };
    }]);

if(debug){
    console.log("appControllers('uiCalendarController') defined");
}

/*****************************************************************************
 ** END OF FILE - ui.calendar.controller.js
 ****************************************************************************/



///  ///

/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : videos.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller("videosController", [
            '$scope', '$rootScope', 
    function($scope,   $rootScope ){

        if(debug){
            console.log("appControllers('videosController') activated");
        }    

        $rootScope.clearmenuclass = false;

        $scope.videos = [
            {
                "id"        : 1,
                "name"      : 'Atomic 4 Tubing',
                "href"      : 'http://www.youtube.com/watch?v=7DtPaKSdtks&autoplay=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/7DtPaKSdtks/0.jpg',
                "category"  : 'family'
            },
            {
                "id"        : 2,
                "name"      : "Raegan's First Solo",
                "href"      : 'https://www.youtube.com/watch?v=TxTNU77q3SA&autoplay=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/TxTNU77q3SA/0.jpg',
                "category"  : 'family'
            },
            {
                "id"        : 3,
                "name"      : "Don't Stop Believing - Glee",
                "href"      : 'https://www.youtube.com/watch?v=xIoSTbPt_PI&autoplay=1&list=FL8IAe6sgARLks3TTLtROZ6Q&index=4&loop=1', 
                "img"       : 'http://img.youtube.com/vi/xIoSTbPt_PI/3.jpg',
                "category"  : 'Kurt Hugo Schneider - Sam Tsui'
            },
            {
                "id"        : 4,
                "name"      : 'Michael Jackson Medley',
                "href"      : 'https://www.youtube.com/watch?v=R12QVtuB0_Q&autoplay=1&list=FL8IAe6sgARLks3TTLtROZ6Q&index=5&loop=1', 
                "img"       : 'http://img.youtube.com/vi/R12QVtuB0_Q/0.jpg',
                "category"  : 'Kurt Hugo Schneider - Sam Tsui'
            },
            {
                "id"        : 5,
                "name"      : 'Patty-Cake',
                "href"      : 'https://www.youtube.com/watch?v=QZpGe5rNJkI&autoplay=1&feature=youtu.be&list=PLjbbwHkJGe5nRfXxcDA6nkCY-GWUyDBFi&loop=1', 
                "img"       : 'http://img.youtube.com/vi/QZpGe5rNJkI/0.jpg',
                "category"  : 'Kurt Hugo Schneider - Sam Tsui'
            },
            {
                "id"        : 6,
                "name"      : 'Evolution of Dance',
                "href"      : 'https://www.youtube.com/watch?v=dMH0bHeiRNg&autoplay=1&list=FL8IAe6sgARLks3TTLtROZ6Q&index=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/dMH0bHeiRNg/2.jpg',
                "category"  : 'Dance'
            },
            {
                "id"        : 7,
                "name"      : 'UFO1',
                "href"      : 'https://www.youtube.com/watch?v=mt801LI6L0w&autoplay=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/mt801LI6L0w/0.jpg',
                "category"  : "UFO's"
            },
            {
                "id"        : 8,
                "name"      : 'UFO2',
                "href"      : 'https://www.youtube.com/watch?v=W0S5_WJf0Xk&autoplay=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/W0S5_WJf0Xk/0.jpg',
                "category"  : "UFO's"
            },
            {
                "id"        : 9,
                "name"      : 'UFO3',
                "href"      : 'https://www.youtube.com/watch?v=SRoC645tUPY&autoplay=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/SRoC645tUPY/0.jpg',
                "category"  : "UFO's"
            },
            {
                "id"        : 10,
                "name"      : 'UFO4',
                "href"      : 'https://www.youtube.com/watch?v=gbbdX8gyrXM&autoplay=1&loop=1', 
                "img"       : 'http://img.youtube.com/vi/gbbdX8gyrXM/0.jpg',
                "category"  : "UFO's"
            },
            {
                "id"        : 11,
                "name"      : 'Amelymeloptical illusion',
                "href"      : 'https://www.youtube.com/watch?v=XmFmYLAveWM&autoplay=1&list=PLbpi6ZahtOH541994-XMZTDvMclH0gMHc&index=4&feature=inp-em-w62-10&loop=1', 
                "img"       : 'http://img.youtube.com/vi/XmFmYLAveWM/0.jpg',
                "category"  : 'Optical Illusion'
            },
            {
                "id"        : 12,
                "name"      : 'Amazing T-Rex Illusion!', 
                "href"      : 'https://www.youtube.com/watch?v=A4QcyW-qTUg&autoplay=1&list=PLbpi6ZahtOH541994-XMZTDvMclH0gMHc&index=7&feature=inp-em-w62-07&loop=1', 
                "img"       : 'http://img.youtube.com/vi/A4QcyW-qTUg/0.jpg',
                "category"  : 'Optical Illusion'
            },
            {
                "id"        : 13,
                "name"      : 'Future Terrifying Technology', 
                "href"      : 'https://www.youtube.com/watch?v=JbQeABIoO6A&autoplay=1&list=PLbpi6ZahtOH541994-XMZTDvMclH0gMHc&index=7&feature=inp-em-w62-07&loop=1', 
                "img"       : 'http://img.youtube.com/vi/JbQeABIoO6A/0.jpg',
                "category"  : 'Technology'
            }
        ];
        if(debug && ($scope.videos.length > 0) ){
            console.log('videosController $scope.videos(' + $scope.videos.length + ')');
        }

        $scope.videoCats = _.uniq(_.pluck($scope.videos, 'category'));
        if(debug){
            console.log($scope.videoCats);
            console.log('$scope.videoCats(' + $scope.videoCats.length + ')');
        }
        
    }
]);

if(debug){
    console.log("appControllers('videosController') defined");
}

/*****************************************************************************
 ** END OF FILE - videos.controller.js
 ****************************************************************************/


///  ///

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


///  ///

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


///  ///

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



///  ///

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


///  ///

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


///  ///

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


///  ///

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


///  ///

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


///  ///

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


///  ///

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


///  ///

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



///  ///

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



///  ///

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

