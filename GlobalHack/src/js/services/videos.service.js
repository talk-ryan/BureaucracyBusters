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

