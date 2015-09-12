/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : test.directive.js
 **
 *****************************************************************************
 ****************************************************************************/

// Define your directives here. 
// Directives can be added to same module as 'mainApp' or a seperate module can be created.

app.directive('testDirective-A', function () {
    return {
        //use as 'testDirective' attribute in HTML
        // i.e. <div testDirective></div>
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log('testDirective-A linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-A') defined");
} 

app.directive('testDirective-C', function () {
    return {
        //use as 'testDirective' class in HTML
        // i.e. <div class="testDirective"></div>
        restrict: 'C',
        link: function (scope, element, attrs) {
            console.log('testDirective-C linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-C') defined");
} 

app.directive('testDirective-E', function () {
    return {
        //use as 'testDirective' element in HTML
        // i.e. <testDirective></testDirective>
        restrict: 'E',
        link: function (scope, element, attrs) {
            console.log('testDirective-E linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-E') defined");
} 

app.directive('testDirective-M', function () {
    return {
        //use as 'testDirective' comment in HTML
        // i.e. <!-- testDirective -->
        restrict: 'M',
        link: function (scope, element, attrs) {
            console.log('testDirective-M linked.');
        }
    };
});
if(debug){
    console.log("appDirectives.directive('testDirective-M') defined");
} 

app.directive('test-superman', function () {
    return {
        restrict: 'E',
        template: "<p>{{photo.id}}</p>"
        //templateURL: 'partials/photos/photo.test.html'
    };
});
if(debug){
    console.log("appDirectives.directive('test-superman') defined");
} 
app.directive('test-gotHere', function () {
    return {
        restrict: 'A',
        link: function() {
            alert("I made it to here.");
        }
    };
});
if(debug){
    console.log("appDirectives.directive('test-gotHere') defined");
} 

app.directive('test-imgFlip', function () {
    return {
        restrict: 'E',
        template: "<div>{{photo.id}}</div>",
        templateURL: 'partials/photos/photo.test.html'
    };
});

if(debug){
    console.log("appDirectives.directive('test-imgFlip') defined");
}

/*****************************************************************************
 ** END OF FILE - test.directive.js
 ****************************************************************************/
