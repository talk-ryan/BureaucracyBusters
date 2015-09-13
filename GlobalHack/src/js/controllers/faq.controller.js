/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : faq.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('faqController', [
            '$scope', '$rootScope', '$http',  
    function($scope,   $rootScope,   $http    ){

        debug=true;
        
        if(debug){
            console.log("appControllers('faqController') activated");
        }    
/*
        $rootScope.clearmenuclass = false;

        //////////////////////////////////////////////////////////////////////
        // citations collection
        //////////////////////////////////////////////////////////////////////
        
        var path = $rootScope.endPoint + '/json/faq.json';
        
        console.log(path);
        
        $http.get(path)
        .success(function(response) {
            $scope.faqs = response;
            console.log($scope.faqs);
        })
        .error(function(err) {
            console.debug('$http get error: ' + err);
            alert(err);
        });
        
        while( $scope.faqs == undefined ){
            setTimeout(function(){
                console.log(Date());
            }, 1000);
        }
*/
    }
]);

if(debug){
    console.log("appControllers('faqController') defined");
}

/*****************************************************************************
 ** END OF FILE - citations.controller.js
 ****************************************************************************/
