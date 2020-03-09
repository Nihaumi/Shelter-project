var slideTime = 1000;

function hideAll() {
    jQuery(".Layers").hide("slide", {direction: "left"}, slideTime);
    jQuery(".navbar").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
    jQuery(".MenuBtn").show();

}

/*hide/hwow Nav*/
function slideNavIn() {
    jQuery("#navbarSupportedContent1").show("slide", {direction: "right"}, slideTime);
}

function slideNavAway() {
    jQuery("#navbarSupportedContent1").hide("slide", {direction: "left"}, slideTime);
}

/*sliding snd transitions*/
function openNav() {

    slideNavIn();
    jQuery(".navbar").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime);
    jQuery(".MenuBtn").hide();
}

function closeNav() {

    slideNavAway();
    setTimeout(function () {
        jQuery(".navbar").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
    }, slideTime / 2);
    setTimeout(function () {
        jQuery(".MenuBtn").show();

    }, slideTime);
}

/*second Layer Our Work*/
function openOurWorkSecondLayer() {
    jQuery("#navbarSupportedContent1").hide();
    jQuery(".OurWorkSecondLayer").show("slide", {direction: "right"}, slideTime);

}

function closeOurWorkSecondLayer() {
    jQuery(".OurWorkSecondLayer").hide();
    slideNavIn();
}

/*THIRD LAYER Farm Animals*/
function openFarmAnimalsThirdLayer() {
    jQuery(".OurWorkSecondLayer").hide();
    jQuery(".FarmAnimalsThirdLayer").show("slide", {direction: "right"}, slideTime);

}

function closeFarmAnimalsThirdLayer() {
    jQuery(".FarmAnimalsThirdLayer").hide();
    jQuery(".OurWorkSecondLayer").show("slide", {direction: "right"}, slideTime);
    ;
}

