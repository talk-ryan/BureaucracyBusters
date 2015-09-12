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
