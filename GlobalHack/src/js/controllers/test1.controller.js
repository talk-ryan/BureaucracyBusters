/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : home.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('test1Controller', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('test1Controller') activated");
        }    
        
        $rootScope.clearmenuclass = true;

        // Temporary values 
        // TODO: replace these with real login values;
        $scope.loggedIn = true;
        $scope.userName = "citizen@cane.com";
    }
]);

if(debug){
    console.log("appControllers('test1Controller') defined");
}

/*****************************************************************************
 ** END OF FILE - test1.controller.js
 ****************************************************************************/
