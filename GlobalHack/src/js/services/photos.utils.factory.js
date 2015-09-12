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
