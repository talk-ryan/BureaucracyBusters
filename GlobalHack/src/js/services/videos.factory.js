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

