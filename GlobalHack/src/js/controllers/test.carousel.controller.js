appControllers.controller('testCarouselController', [
             '$scope', 'PhotoFactory', 
    function ($scope,   PhotoFactory  ) {
    
    var self = this,
        slides = self.slides = $scope.slides = [],
        currentIndex = -1,
        currentInterval,
        isPlaying = true,
        destroyed = false;

    $scope.photos = [
    {
        "id"        : 0,
        "name"      : "ComputerGuy",
        "href"      : "img/photos/ComputerGuy.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-ComputerGuy.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-03-08T14:34:00:000Z",
        "size"      : 42539,
        "tags"      : ["Bill"],
        "hilight"   : 0
    },
    {
        "id"        : 1,
        "name"      : "Bill Maintz",
        "href"      : "img/photos/wmm2.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-wmm2.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-02-25T17:29:00:000Z",
        "size"      : 16384,
        "tags"      : ["Bill","Dad"],
        "hilight"   : 1
    },
    {
        "id"        : 3,
        "name"      : "Progress Park Basketball",
        "href"      : "img/photos/2012-11-02 07.00.11.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2012-11-02 07.00.11.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-11-02T08:00:00:000Z",
        "size"      : 2465860,
        "tags"      : ["Bill","Basketball"],
        "hilight"   : 0
    },

    {
        "id"        : 10,
        "name"      : "Ellen",
        "href"      : "img/photos/IMG_0003.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0003.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-05-10T13:35:00:000Z",
        "size"      : 1604793,
        "tags"      : ["Ellen"],
        "hilight"   : 1
    },

    {
        "id"        : 40,
        "name"      : "Father and Bride",
        "href"      : "img/photos/IMAG0130.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-IMAG0130.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-06T18:05:00:000Z",
        "size"      : 24733,
        "tags"      : ["Bill","Dad","Allissa","Wedding"],
        "hilight"   : 0
    },
    {
        "id"        : 41,
        "name"      : "Mike and Allissa",
        "href"      : "img/photos/IMAG0143.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-IMAG0143.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-06T18:25:00:000Z",
        "size"      : 938375,
        "tags"      : ["Mike","Allissa","Wedding"],
        "hilight"   : 0
    },
    {
        "id"        : 42,
        "name"      : "Newlyweds",
        "href"      : "img/photos/IMAG0144.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-IMAG0144.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-06T18:25:00:000Z",
        "size"      : 1053785,
        "tags"      : ["Mike","Allissa","Wedding"],
        "hilight"   : 0
    },
    {
        "id"        : 43,
        "name"      : "First Dance",
        "href"      : "img/photos/first%20dance.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-first%20dance.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-10-30T21:01:00:000Z",
        "size"      : 1520351,
        "tags"      : ["Mike","Allissa","Reception"],
        "hilight"   : 0
    },

    {
        "id"        : 50,
        "name"      : "The Boys",
        "href"      : "img/photos/2013-11-28-TheBoys.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2013-11-28-TheBoys.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-11-28T07:35:00:000Z",
        "size"      : 24733,
        "tags"      : ["Bill","Dad","Uncle","Billy","Wade","Bruce","Thanksgiving"],
        "hilight"   : 0
    },
    {
        "id"        : 51,
        "name"      : "Ellen and Allissa",
        "href"      : "img/photos/2013-05-12_14.16.08.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2013-05-12_14.16.08.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-05-30T17:26:00:000Z",
        "size"      : 84008,
        "tags"      : ["Ellen","Allissa"],
        "hilight"   : 1
    },
    {
        "id"        : 52,
        "name"      : "Billy, Wade, & Allissa",
        "href"      : "img/photos/2012-10-15-BillWadeAllissa.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2012-10-15-BillWadeAllissa.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-05-18T13:57:00:000Z",
        "size"      : 76911,
        "tags"      : ["Family","Billy","Wade","Allissa"],
        "hilight"   : 1
    },

    {
        "id"        : 100,
        "name"      : "Bill's Family",
        "href"      : "img/photos/2012-03-17 12.15.27.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2012-03-17 12.15.27.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-03-17T01:15:00:000Z",
        "size"      : 2032306,
        "tags"      : ["Billy","Candice","Dalton","Danny","Raegan","Ella"],
        "hilight"   : 1
    },
    {
        "id"        : 101,
        "name"      : "Dalton",
        "href"      : "img/photos/Dalton.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Dalton.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T08:06:00:000Z",
        "size"      : 3160119,
        "tags"      : ["Family","Billy","Dalton"],
        "hilight"   : 0
    },
    {
        "id"        : 102,
        "name"      : "Danny",
        "href"      : "img/photos/Danny.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Danny.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T08:40:00:000Z",
        "size"      : 2894916,
        "tags"      : ["Family","Billy","Danny"],
        "hilight"   : 0
    },
    {
        "id"        : 103,
        "name"      : "Raegan",
        "href"      : "img/photos/Raegan.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Raegan.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T09:17:00:000Z",
        "size"      : 3089099,
        "tags"      : ["Family","Billy","Raegan"],
        "hilight"   : 0
    },
    {
        "id"        : 104,
        "name"      : "Ella",
        "href"      : "img/photos/Ella.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Ella.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-08-15T09:17:00:000Z",
        "size"      : 2664488,
        "tags"      : ["Family","Billy","Ella"],
        "hilight"   : 0
    },
    {
        "id"        : 110,
        "name"      : "Skater Danny",
        "href"      : "img/photos/SkaterDanny.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-SkaterDanny.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2015-03-14T16:29:00:000Z",
        "size"      : 147389,
        "tags"      : ["Family","Danny","Skate Board"],
        "hilight"   : 1
    },
    {
        "id"        : 199,
        "name"      : "Charlie",
        "href"      : "img/photos/Charlie.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-Charlie.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-07-06T20:51:00:000Z",
        "size"      : 1764988,
        "tags"      : ["Family","Billy","Charlie", "Pet"],
        "hilight"   : 0
    },

    {
        "id"        : 200,
        "name"      : "Wade and Julie",
        "href"      : "img/photos/2014-08-15-WadeJulie.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2014-08-15-WadeJulie.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-08-15T12:00:00:000Z",
        "size"      : 24733,
        "tags"      : ["Wade","Julie"],
        "hilight"   : 1
    },             
    {
        "id"        : 201,
        "name"      : "Wade",
        "href"      : "img/photos/2014-10-14-Wade.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2014-10-14-Wade.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-10-14T12:00:00:000Z",
        "size"      : 24733,
        "tags"      : ["Wade"],
        "hilight"   : 0
    },
    {
        "id"        : 202,
        "name"      : "Wade drives NASCAR",
        "href"      : "img/photos/NascarWade.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-NascarWade.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2013-03-08T14:35:00:000Z",
        "size"      : 65859,
        "tags"      : ["Wade","NASCAR"],
        "hilight"   : 1
    },
    {
        "id"        : 299,
        "name"      : "Kong & Clementine",
        "href"      : "img/photos/KongClementine.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-KongClementine.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-12-30T16:21:00:000Z",
        "size"      : 1711165,
        "tags"      : ["Wade","Pet"],
        "hilight"   : 0
    },

    {
        "id"        : 310,
        "name"      : "Mike and Allissa",
        "href"      : "img/photos/Mike-Allissa.png",
        "thumbnail" : "img/photos/Thumbnails/TN-Mike-Allissa.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2012-07-26T21:34:00:000Z",
        "size"      : 718851,
        "tags"      : ["Mike","Allissa"],
        "hilight"   : 1
    },
    {
        "id"        : 390,
        "name"      : "Gus Gus",
        "href"      : "img/photos/2014-02-26-Gus.jpg",
        "thumbnail" : "img/photos/Thumbnails/TN-2014-02-26-Gus.jpg",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-02-26T12:00:00:000Z",
        "size"      : 24733,
        "tags"      : ["Gus", "Bulldog"],
        "hilight"   : 1
    },

    {
        "id"        : 550,
        "name"      : "Home - Right Front Yard",
        "href"      : "img/photos/Lussac50.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac50.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:51:00:000Z",
        "size"      : 190130,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 555,
        "name"      : "Home - Left Front Yard",
        "href"      : "img/photos/IMG_0117.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0117.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2009-05-03T17:02:00:000Z",
        "size"      : 147153,
        "tags"      : ["Home"],
        "hilight"   : 0
    },
    {
        "id"        : 560,
        "name"      : "Home - Left Front Garden",
        "href"      : "img/photos/IMG_0118.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0118.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2009-05-03T17:02:00:000Z",
        "size"      : 170630,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 565,
        "name"      : "White Flowers",
        "href"      : "img/photos/Lussac67.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac67.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:57:00:000Z",
        "size"      : 102845,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 570,
        "name"      : "Purple Flowers",
        "href"      : "img/photos/Lussac66.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac66.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:57:00:000Z",
        "size"      : 216718,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 575,
        "name"      : "Lying Angel Statue",
        "href"      : "img/photos/Lussac65.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac65.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:57:00:000Z",
        "size"      : 231775,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 580,
        "name"      : "Yellow Flower",
        "href"      : "img/photos/IMG_0235.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0235.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2010-04-17T18:21:00:000Z",
        "size"      : 2329415,
        "tags"      : ["Flowers", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 585,
        "name"      : "Barkin up a tree",
        "href"      : "img/photos/IMG_0239.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0239.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2014-04-17T18:22:00:000Z",
        "size"      : 1878382,
        "tags"      : ["Tree", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 590,
        "name"      : "Red Flower",
        "href"      : "img/photos/IMG_0236.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0236.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2010-04-17T18:21:00:000Z",
        "size"      : 2216600,
        "tags"      : ["Flowers", "Garden"],
        "hilight"   : 0
    },
    {
        "id"        : 595,
        "name"      : "Home - Right Front Garden",
        "href"      : "img/photos/Lussac53.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac53.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:53:00:000Z",
        "size"      : 176719,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 600,
        "name"      : "Home - Right-side Pathway",
        "href"      : "img/photos/Lussac54.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac54.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:53:00:000Z",
        "size"      : 199561,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 605,
        "name"      : "Front Garden Pixie Statue",
        "href"      : "img/photos/Lussac55.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac55.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:53:00:000Z",
        "size"      : 158427,
        "tags"      : ["Home", "Statue"],
        "hilight"   : 0
    },
    {
        "id"        : 610,
        "name"      : "Home - Right-side Upper Garden",
        "href"      : "img/photos/Lussac57.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac57.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:54:00:000Z",
        "size"      : 181385,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 615,
        "name"      : "Home - Right-side Lower Pathway",
        "href"      : "img/photos/IMG_0121.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0121.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2009-05-03T17:03:00:000Z",
        "size"      : 182803,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 620,
        "name"      : "Home - Right-side Lower Garden",
        "href"      : "img/photos/Lussac58.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac58.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:54:00:000Z",
        "size"      : 177327,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 625,
        "name"      : "Home - Fountain/Bird Bath",
        "href"      : "img/photos/Lussac59.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac59.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:54:00:000Z",
        "size"      : 155709,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 630,
        "name"      : "Home - Right-side Garden From Rear",
        "href"      : "img/photos/Lussac60.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac60.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:55:00:000Z",
        "size"      : 200211,
        "tags"      : ["Home", "Garden"],
        "hilight"   : 1
    },
    {
        "id"        : 635,
        "name"      : "Home - Rear-View (Left)",
        "href"      : "img/photos/Lussac61.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac61.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:55:00:000Z",
        "size"      : 186970,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 640,
        "name"      : "Home - Rear-View (Right)",
        "href"      : "img/photos/Lussac62.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac62.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:56:00:000Z",
        "size"      : 180962,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 645,
        "name"      : "Home - Rear Yard",
        "href"      : "img/photos/Lussac63.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-Lussac63.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2008-04-05T09:56:00:000Z",
        "size"      : 205547,
        "tags"      : ["Home"],
        "hilight"   : 1
    },
    {
        "id"        : 699,
        "name"      : "One of Many Squirrels",
        "href"      : "img/photos/IMG_0233.JPG",
        "thumbnail" : "img/photos/Thumbnails/TN-IMG_0233.JPG",
        "hoffset"   : 0,
        "voffset"   : 0,
        "dateTaken" : "2010-04-17T18:20:00:000Z",
        "size"      : 2362695,
        "tags"      : ["Squirrel"],
        "hilight"   : 0
    }
    ];

    //$scope.photos = PhotoFactory.getPhotos();
    console.log("$scope.photos.length=" + $scope.photos.length);
    
    $scope.slideInterval = 2000;
    $scope.noWrapSlides = false;

    for(var i=0; i<$scope.photos.length; i++){
        if($scope.photos[i].hilight == 1){
            slides.push($scope.photos[i]);
        }
    }

    $scope.slides = self.slides = slides;
    
    console.log("$scope.slides.length=" + $scope.slides.length);

    $scope.addSlides = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            href: '//placekitten.com/' + newWidth + '/300',
            name: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    
    
    
}]);