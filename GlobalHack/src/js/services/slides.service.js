/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : slides.service.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appServices.service('SlideService', [
             'Photos',
    function( Photos ){
        
        if(debug){
            console.log("appServices('SlideService') initializing");
        }    
        
        $scope.Interval = 5000;
        $scope.carouselIndex = 1;
        
        var colors = [
            "#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", 
            "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", 
            "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", 
            "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", 
            "#960069", "#91006e", "#8c0073", "#870078", "#82007d", 
            "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", 
            "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", 
            "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", 
            "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", 
            "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"
        ];
        
        var slides = _.filter(Photos, function(val){
            return val['hilight'] == 1;
        });// filter the images identified as hilights
        
        if(debug){console.log('slides(' + slides.length + '):');}
        //console.log($scope.slides);
        
        for (var i=0; i < slides.length; i++) {
            slides[i].color = colors[(i*10) % colors.length];
            slides[i].odd = (i % 2 === 0);
        } // Add color and odd

        function addSlide(target, style) {
            var i = target.length;
            target.push({
                id: (i + 1),
                name: style + ' slide #' + (i + 1),
                href: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                color: colors[ (i*10) % colors.length],
                odd: (i % 2 === 0)
            });
        };

        function addSlides(target, qty, style) {
            for (var i=0; i < qty; i++) {
                addSlide(target, style);
            }
        }

/*
        var num2Add = 7;
        addSlides($scope.slides, num2Add, 'abstract');
        addSlides($scope.slides, num2Add, 'city');
        addSlides($scope.slides, num2Add, 'people');
        addSlides($scope.slides, num2Add, 'transport');
        addSlides($scope.slides, num2Add, 'animals');
        addSlides($scope.slides, num2Add, 'food');
        addSlides($scope.slides, num2Add, 'nature');
        addSlides($scope.slides, num2Add, 'business');
        addSlides($scope.slides, num2Add, 'nightlife');
        addSlides($scope.slides, num2Add, 'sports');
        addSlides($scope.slides, num2Add, 'fashion');
        addSlides($scope.slides, num2Add, 'technics');
*/


        this.getSlides = function(){
            
            if(debug){
                console.log("appServices('SlideService') getSlides - returning slides(" + slides.length + ")");
            }   
            return slides;
        }

    }
]);

/*****************************************************************************
 ** END OF FILE - photos.service.js
 ****************************************************************************/
