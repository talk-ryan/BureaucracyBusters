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
        $scope.userName = "bill@maintz.com";
    }
]);

if(debug){
    console.log("appControllers('homeController') defined");
}

/*****************************************************************************
 ** END OF FILE - home.controller.js
 ****************************************************************************/
