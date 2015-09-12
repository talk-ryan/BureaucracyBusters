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
