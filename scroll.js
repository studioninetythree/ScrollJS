/* ========================================================================
 * Ninetythree: scroll.js v1.0.0
 * Dillan Isaacs
 * March 8, 2015
 * https://github.com/studioninetythree/ScrollJS.git
 * ========================================================================
 * Licensed under MIT (https://github.com/studioninetythree/ScrollJS/blob/master/README.txt)
 * ========================================================================
 * This script works most effectively with Single-Page Sites (SPS's).
 * It is used to animate auto-scrolling withing the web page using.
 * Just call the function and pass in the ID of the element you would like the page to scroll to.
 * The variable 'scrollSpeed' can be increased and decreased to whichever speed you'd like.
 * */

var scrollSpeed = 24;
var distance = 80;
var scrollY = 0;

function scrollTo(el)
{
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var documentHeight = document.body.offsetHeight;
    var yPosition = currentY + window.innerHeight;
    var scroller = setTimeout('scrollTo(\''+el+'\')', scrollSpeed);

    if(yPosition > documentHeight)
    {
        clearTimeout(scroller);                     // Stops the scroller from scrolling forever
    }
    else
    {
        if(currentY < (targetY - distance))         // To scroll to contents below the current element
        {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);
        }
        else if(currentY > targetY)                 // To scroll to contents above the current element
        {
            scrollY = currentY - distance;
            window.scroll(0, scrollY);
        }
        else
        {
            clearTimeout(scroller);
        }
    }
}
