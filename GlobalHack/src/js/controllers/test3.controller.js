/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : home.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('test3Controller', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('test3Controller') activated");
        }    
        
        $rootScope.clearmenuclass = true;

        // Temporary values 
        // TODO: replace these with real login values;
        $scope.loggedIn = true;
        $scope.userName = "citizen@cane.com";
    }
]);

if(debug){
    console.log("appControllers('test3Controller') defined");
}

/*****************************************************************************
 ** END OF FILE - test3.controller.js
 ****************************************************************************/
