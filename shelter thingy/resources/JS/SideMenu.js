var slideTime = 1000

function hideAll() {
    jQuery(".Layers").hide("slide", {direction: "left"}, slideTime);
    jQuery(".navbar").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
    jQuery(".navbar__menu-btn").show();

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
    jQuery(".navbar").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, 1);
    jQuery("#navbarSupportedContent1").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime);
    jQuery(".navbar__menu-btn").hide();
    console.log('Hello');
}

function closeNav() {

    slideNavAway();
    setTimeout(function () {
        jQuery(".navbar").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
    }, slideTime / 2);
    setTimeout(function () {
        jQuery(".navbar__menu-btn").show();

    }, slideTime);
}

/*second Layer Our Work*/
function openOurWorkSecondLayer() {
    jQuery("#navbarSupportedContent1").hide();
    jQuery(".OurWorkSecondLayer").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime);
    jQuery(".OurWorkSecondLayer").show("slide", {direction: "right"}, slideTime);

}

function closeOurWorkSecondLayer() {
    jQuery(".OurWorkSecondLayer").hide();
    slideNavIn();
}

/*THIRD LAYER Farm Animals*/
function openFarmAnimalsThirdLayer() {
    jQuery(".OurWorkSecondLayer").hide();
    jQuery(".FarmAnimalsThirdLayer").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime);
    jQuery(".FarmAnimalsThirdLayer").show("slide", {direction: "right"}, slideTime);

}

function closeFarmAnimalsThirdLayer() {
    jQuery(".FarmAnimalsThirdLayer").hide();
    jQuery(".OurWorkSecondLayer").show("slide", {direction: "right"}, slideTime);
    ;
}

