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
        
        $scope.fname = "";
        $scope.lname = "";
        $scope.bdate = "";


        
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
