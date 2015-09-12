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

