/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : links.controller.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

appControllers.controller("linksController", [
            '$scope', '$rootScope', 
    function($scope,   $rootScope){

        if(debug){
            console.log("appControllers('linksController') activated");
        }    

        $rootScope.clearmenuclass = false;
    
        $scope.links = [
            { "type": "cat", "category": "Business Affiliates", "descript": "The entrepreneurial spirit is alive and well within the Maintz family." },
            { "type": "cat", "category": "JUST FOR FUN", "descript": "These websites explore the lighter side." },
            { "type": "cat", "category": "THE CLAN", "descript": "Websites of the 'extended' Maintz family." },

            { "type": "link", "category": "Business Affiliates", "name": "All Business Computer Services", "href": "http://www.allbusinesscomputerservices.com", "target": "_blank", "descript": "My consulting company" },
            { "type": "link", "category": "Business Affiliates", "name": "Elite Renovations", "href": "http://www.eliterenovations.us", "target": "_blank", "descript": "My son's construction/renovation company" },
            { "type": "link", "category": "Business Affiliates", "name": "Styles Altar'd", "href": "http://www.stylealtard.com/our-story", "target": "_blank", "descript": "My daughters event-planning business" },
            { "type": "link", "category": "JUST FOR FUN", "name": "Maintz Wildlife Preserve", "href": "http://mdc.mo.gov/landwater-care/stream-and-watershed-management/missouri-watersheds/headwater-diversion/land-use/fi-13", "target": "_blank", "descript": "Maintz Wildlife Preserve" },
            { "type": "link", "category": "JUST FOR FUN", "name": "Roman Gladius Maintz Sword", "href": "http://www.kultofathena.com/product.asp?item=500360", "target": "_blank", "descript": "Roman Gladius Maintz Sword" },
            { "type": "link", "category": "THE CLAN", "name": "Tommy Maintz", "href": "http://www.linkedin.com/in/tommymaintz", "target": "_blank", "descript": "Tommy Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Twan Maintz", "href": "http://www.linkedin.com/in/twanmaintz", "target": "_blank", "descript": "Twan Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Bill Maintz  II", "href": "http://www.allbusinesscomputerservices.com/management.html", "target": "_blank", "descript": "Bill Maintz  II" },
            { "type": "link", "category": "THE CLAN", "name": "Bill Maintz III", "href": "http://www.linkedin.com/pub/bill-maintz/67/584/939", "target": "_blank", "descript": "Bill Maintz III" },
            { "type": "link", "category": "THE CLAN", "name": "Wade Maintz", "href": "http://www.eliterenovations.us/about/the-owner.cshtml", "target": "_blank", "descript": "Wade Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Allissa (Maintz) Reimer", "href": "http://stylealtard.com/about/", "target": "_blank", "descript": "Allissa (Maintz) Reimer" },
            { "type": "link", "category": "THE CLAN", "name": "David Maintz", "href": "http://www.linkedin.com/pub/david-maintz/38/163/a19", "target": "_blank", "descript": "David Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Gisela Maintz", "href": "http://www.astro.uni-bonn.de/~gmaintz/", "target": "_blank", "descript": "Gisela Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Ilja Maintz", "href": "http://www.linkedin.com/pub/ilja-maintz/b/457/236", "target": "_blank", "descript": "Ilja Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Dr. ir. J.B.Antoine Maintz", "href": "http://www.cs.uu.nl/staff/twan.html", "target": "_blank", "descript": "Dr. ir. J.B.Antoine Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Jens Peter Maintz", "href": "http://www.cellist.nl/database/showcellist.asp?id: 963", "target": "_blank", "descript": "Jens Peter Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Jesper Maintz", "href": "http://www.zoominfo.com/p/Jesper-Maintz/1857930792", "target": "_blank", "descript": "Jesper Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Prof. Dr. Julia Maintz", "href": "http://www.cbs-edu.de/en/cbs/team/julia-maintz/", "target": "_blank", "descript": "Prof. Dr. Julia Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Maximillian Maintz", "href": "http://maximilianmaintz.com/", "target": "_blank", "descript": "Maximillian Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Philipp Maintz", "href": "http://www.philippmaintz.de/", "target": "_blank", "descript": "Philipp Maintz" },
            { "type": "link", "category": "THE CLAN", "name": "Thomas Maintz", "href": "http://www.thomasmaintz.com/", "target": "_blank", "descript": "Thomas Maintz" }
            ];

        $scope.linkCats = _.uniq(_.pluck($scope.links, 'category'));

    }
]);

if(debug){
    console.log("appControllers('linksController') defined");
}

/*****************************************************************************
 ** END OF FILE - links.controller.js
 ****************************************************************************/

