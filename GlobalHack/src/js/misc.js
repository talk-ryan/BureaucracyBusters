/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : misc.js
 **
 *****************************************************************************
 ****************************************************************************/

"use strict";

/*
$('ul.dropdown-menu').find('li').click(function () {
    // remove the 'open' class on the parent element 
    $(this).parents('.dropdown-menu').parent().removeClass('open');
    $(this).parents('.dropdown-menu').parent().removeClass('active');
});
*/

//////////////////////////////////////////////////////////////////////////////
// Miscellaneous Calendar functions
//////////////////////////////////////////////////////////////////////////////
//
//$(function() {
//    $( "#3MonCal" ).datepicker({
//        numberOfMonths: 2,
//        showButtonPanel: true
//    });
//});


function getCalendarHTML(mo, yr, showToday){
    // mo = zero-based month number
    // yr = 4 digit year YYYY
    // Create an array containing the month names
    var M = new Array("January","February","March","April","May","June","July",
                    "August","September","October","November","December");
    // Create an array with the days of the week
    var D = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    // The first of the month
    var dayOne = new Date(M[mo]+" 1,"+yr);
    // Determine the day of the week upon which the 1st of the month falls
    var dy = dayOne.getDay();
    yr = eval(yr);
    
    // Days in each month
    var d = "312831303130313130313031";
    // Is this leap year?
    if (yr / 4 === Math.floor(yr / 4)) {
        d = d.substring(0, 2) + "29" + d.substring(4, d.length);
    }
    // Calculate the position in the d string for this month
    var pos = (mo * 2);
    // Grab 2 character positions representing the number of days in this month (last day)
    var ld = eval(d.substring(pos, pos + 2));
    var tday = new Date().getDate();
    var dow = new Date().getDay();
    
    // Start outputting this month's calendar
    var htmlText =  '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">';
    htmlText += '<table class="calTable"><tr>'
    // Display the month and year
    htmlText += '<th class="monHdr'
    if(showToday){htmlText += ' hiLite'}
    htmlText += '" colspan=7 center>' + M[mo] + " " + yr + "</th></tr>";
    // Display the days of the week
    htmlText += '<tr>';
    for (var i = 0;i < 7;i ++) {
        if((i == dow) && (showToday)) {
                htmlText += '<td class="wkdayHdr hiLite">';
            } else {
                htmlText += '<td class="wkdayHdr">';
            }
            htmlText += D[i] + '</td>';                    // Display the days of the week
    }
    htmlText += '</tr>';
    var ctr = 0;
    // Display the day of the month or a blank if the 1st falls in mid-week
    htmlText += '<tr class="calDayRow">';
    // Display the day of the month or a blank space
    // for the first week of the month
    for (i = 0;i < 7; i++){
        if (i < dy) {
            htmlText += "<td> </td>";
        }
        else {
            ctr++;
            if((ctr == tday) && (showToday)) {
                htmlText += '<td class="hiLite">';
            } else {
                htmlText += '<td>';
            }
            htmlText += ctr + "</td>";
        }
    }
    htmlText += '</tr>';
    // Display the day of the month for the rest of the month
    // Display a blank after the last day of the month
    htmlText += '<tr class="calDayRow">';
    while (ctr <= ld) {
        for (i = 0;i < 7; i++){
            ctr++;
            if (ctr > ld){
                htmlText += '<td> </td>';
            }
            else {
                if((ctr == tday) && (showToday)) {
                    htmlText += '<td class="hiLite">';
                } else {
                    htmlText += '<td>';
                }
                htmlText += ctr + '</td>';
            }
        }
        htmlText += '</tr><tr class="calDayRow">';
    }
    htmlText += '</tr></table><br class="clear" /></div>';
    return htmlText;
}

 
function showCalenders() {

    var today = new Date();                                     // today's date
    var thisMonth = today.getMonth();                           // the current month - zero-based
    var thisYear = today.getYear() + 1900;                      // the current year
    var lastMonth = (thisMonth===0?11:thisMonth-1);             // calculate last month
    var lastYear = (thisMonth===0?thisYear-1:thisYear);         // calculate last month's year
    var nextYear = (thisMonth===11?thisYear+1:thisYear);        // next month's year
    var nextMonth = (thisMonth===11?0:thisMonth+1);             // next month
    var htmlObj = document.getElementById("calBox");

    if( htmlObj )
    {
        var htmlText='<div class="row">';

        htmlText = htmlText + getCalendarHTML(lastMonth, lastYear, false);    // Send last month to screen
        htmlText = htmlText + getCalendarHTML(thisMonth, thisYear, true);     // Send this month to screen
        htmlText = htmlText + getCalendarHTML(nextMonth, nextYear, false);    // Send next month to screen

        htmlObj.innerHTML = htmlText + '</div>';
    }
}

//////////////////////////////////////////////////////////////////////////////
// Gather Screen Size Information
//////////////////////////////////////////////////////////////////////////////

function gebID(id){ return document.getElementById(id); }
function gebTN(tagName){ return document.getElementsByTagName(tagName); }
function setStyleToTags(tagName, styleString){
    var tags = gebTN(tagName);
    for( var i = 0; i<tags.length; i++ ) tags[i].setAttribute('style', styleString);
}
function testSizes(parentObj){
    if( parentObj == null){ parentObj = "body"; }
    
    gebID( 'screen.Width' ).innerHTML = screen.width;
    gebID( 'screen.Height' ).innerHTML = screen.height;

    gebID( 'window.Width' ).innerHTML = window.innerWidth;
    gebID( 'window.Height' ).innerHTML = window.innerHeight;

    gebID( 'documentElement.Width' ).innerHTML = document.documentElement.clientWidth;
    gebID( 'documentElement.Height' ).innerHTML = document.documentElement.clientHeight;

    gebID( 'body.Width' ).innerHTML = gebTN(parentObj)[0].clientWidth;
    gebID( 'body.Height' ).innerHTML = gebTN(parentObj)[0].clientHeight;  
}

function displaySizes(parentObj) {
    if( parentObj === null){ parentObj = "body"; }
    var table = document.createElement('table');
    table.innerHTML = 
       "<tr><th>SOURCE</th><th>WIDTH</th><th>x</th><th>HEIGHT</th></tr>"
      +"<tr><td>screen</td><td id='screen.Width' /><td>x</td><td id='screen.Height' /></tr>"
      +"<tr><td>window</td><td id='window.Width' /><td>x</td><td id='window.Height' /></tr>"
      +"<tr><td>document<br>.documentElement</td><td id='documentElement.Width' /><td>x</td><td id='documentElement.Height' /></tr>"
      +"<tr><td>document.body</td><td id='body.Width' /><td>x</td><td id='body.Height' /></tr>"
    ;

    gebTN(parentObj)[0].appendChild( table );

    setStyleToTags("table",
                 "border: 2px solid black !important; position: fixed !important;"
                +"left: 100px !important; top: 90px !important; padding:5px !important;"
                +"width: 200px !important; font-size:10px; !important"
                +"white-space: pre !important; font-family: monospace !important;"
                +"z-index: 9999 !important;background: white !important;"
    );
    setStyleToTags("td", "color: black !important; border: none !important; padding: 5px !important; text-align:center !important;");
    setStyleToTags("th", "color: black !important; border: none !important; padding: 5px !important; text-align:center !important;");

    table.style.setProperty( 'margin-left', '-'+( table.clientWidth / 2 )+'px' );

    setInterval( testSizes, 200 );
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

 function multObjArray2Array(multObjArray){
     console.debug("multObjArray2Array");
    console.debug(multObjArray);
    var allArray = [];
    for(var i=0; i<multObjArray.length; i++)
    {
        for(var j=0; j<multObjArray[i].length;j++)
        {
            var l = allArray.push( multObjArray[i][j] );
        }
    }
    return allArray;
}

function JSONDateToDateObj (jd) { // jd = JSON Date format ie. '2013-03-08T14:34:00:000Z'
    if( (jd.length != 24) ||  (jd.substr(4,1) != '-') ||  (jd.substr(7,1) != '-') ||  (jd.substr(10,1) != 'T') ||  (jd.substr(13,1) != ':') ||  (jd.substr(16,1) != ':') ||  (jd.substr(19,1) != ':') ||  (jd.substr(23,1) != 'Z') ) {
        return null;
    }
    var d = new Date();
    d.setFullYear(jd.substr(0,4), jd.substr(5,2)-1, jd.substr(8,2));
    d.setHours(jd.substr(11,2));
    d.setMinutes(jd.substr(14,2));
    d.setSeconds(jd.substr(17,2));
    d.setMilliseconds(jd.substr(20,3));
    return d;
}

function editImageData(imgID) {
    alert("I'm sorry, you don't have the authority to edit image ID#" + imgID + ".");
}

function deleteImage(imgID){
    alert("I'm sorry, you don't have the authority to delete image ID#" + imgID + ".");
}

function enlargeToggle(imgID){
    alert("Enlarge image ID#" + imgID + ".");
}

/*****************************************************************************
 ** END OF FILE - misc.js
 ****************************************************************************/
