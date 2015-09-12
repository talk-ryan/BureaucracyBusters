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
