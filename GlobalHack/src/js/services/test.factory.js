/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : test.factory.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

// Define your service here. Services can be added to same module as 'mainApp' or a seperate module can be created.

appServices.factory('testFactory', [function () {
    if(debug){
        console.log("appServices('testFactory') initializing");
    }
    
    var service = {};
    
    service.doWork = function () {
        console.log('testFactory - Did some work !');
    };
    
    return service;
    
}]);

/*****************************************************************************
 ** END OF FILE - test.factory.js
 ****************************************************************************/
