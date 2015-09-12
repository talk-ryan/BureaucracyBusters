/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : about.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('aboutController', [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('aboutController') activated");
        }    
    
        $rootScope.clearmenuclass = false;
        $scope.items = ['about', 'website', 'contact'];

    }
]);

if(debug){
    console.log("appControllers('aboutController') defined");
}

/*****************************************************************************
 ** END OF FILE - about.controller.js
 ****************************************************************************/
