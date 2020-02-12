
var accordionLink = document.getElementsByClassName('AccordionLink');

var width = accordionLink.offsetWidth;

function mouseOver() {
    accordionLink.setAttribute("style, background-size: 100% 2px");
    console.log(width);
}