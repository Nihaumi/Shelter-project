var slideTime = 1000;

function hideAll() {
    jQuery(".MobileNav").hide("slide", {direction: "left"}, slideTime);
    jQuery(".NavColor").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
    jQuery(".MenuBtn").show();

}

/*hide/hwow Nav*/
function slideNavIn() {
    jQuery("#navbarSupportedContent1").show("slide", {direction: "left"}, slideTime);
    console.log('now')
}

function slideNavAway() {
    jQuery("#navbarSupportedContent1").hide("slide", {direction: "right"}, slideTime);
}

/*sliding snd transitions*/
function openNav() {

    slideNavIn();
    jQuery(".NavColor").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime);
    jQuery(".MenuBtn").hide();
    console.log('mehp');
}

function closeNav() {

    slideNavAway();
    setTimeout(function () {
        jQuery(".NavColor").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
    }, slideTime / 2);
    setTimeout(function () {
        jQuery(".MenuBtn").show();

    }, slideTime);
}

/*second Layer Our Work*/
function openOurWorkSecondLayer() {
    jQuery(".FirstLayer").hide();
    jQuery(".OurWorkSecondLayer").show("slide", {direction: "left"}, slideTime);

}

function closeOurWorkSecondLayer() {
    jQuery(".OurWorkSecondLayer").hide();
    jQuery(".FirstLayer").show("slide", {direction: "right"}, slideTime);
}

/*THIRD LAYER Farm Animals*/
function openFarmAnimalsThirdLayer() {
    jQuery(".OurWorkSecondLayer").hide();
    jQuery(".FarmAnimalsThirdLayer").show("slide", {direction: "left"}, slideTime);

}

function closeFarmAnimalsThirdLayer() {
    jQuery(".FarmAnimalsThirdLayer").hide();
    jQuery(".OurWorkSecondLayer").show("slide", {direction: "right"}, slideTime);

}

