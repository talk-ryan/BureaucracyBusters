/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : users.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('usersController', function($scope, User) {
    if(debug){
        console.log("appControllers('usersController') activated");
    }    
    
        $scope.saveUser = User.save;
    
        $scope.login = function(User, passwd) {
            $scope.loggedIn = true;
            $scope.userName = User;
            alert("Login Completed : loggedIn = " + $scope.loggedIn);
        };
    
        $scope.logout = function(User) {
            $scope.loggedIn = false;
            alert("Logout Completed : loggedIn = " + $scope.loggedIn);
        };
   });

if(debug){
    console.log("appControllers('usersController') defined");
}



    
appDirectives.directive("dumbPassword", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div>\n<input type='text' ng-model='model.input'>\n" +
            "<div>{{model.input}}</div>\n    \n</div>",
        link: function(scope, element){
            scope.$watch("model.input", function(value){
                if(value === "password"){
                    console.log("change password.");
                    element.children(1).toggleClass("alert-box alert");
                }
            })
        }
    };
});
    
/*****************************************************************************
 ** END OF FILE - users.controller.js
 ****************************************************************************/

