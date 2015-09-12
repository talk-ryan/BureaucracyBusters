/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : calendar.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller('calendarController', ['$scope', function ($scope) {
    if(debug){
        console.log("appControllers('calendarController') activated");
    }    
    
    $scope.uiConfig = {
        calendar: {
            height      : 450,
            editable    : true,
            header      : {
                left    : 'month basicWeek basicDay agendaWeek agendaDay',
                center  : 'title',
                right   : 'today prev,next'
            },
            dayClick    : $scope.alertEventOnClick,
            eventDrop   : $scope.alertOnDrop,
            eventResize : $scope.alertOnResize
        }
    };
    
}]);

if(debug){
    console.log("appControllers('calendarController') defined");
}

/*****************************************************************************
 ** END OF FILE - calendar.controller.js
 ****************************************************************************/
