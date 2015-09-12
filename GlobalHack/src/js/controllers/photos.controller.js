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
