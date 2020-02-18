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
    console.log('Hello');
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


/*DeskNav*/

$(document).ready(function () {
    if ($(".NavHeight").backgroundColor === 'rgba(0,0,0, 0.5)') {
        $(".NavHeight").mouseover(function () {
            $(".NavHeight").animate({backgroundColor: 'rgba(0, 0, 0,.8)'});
        });
    }

    $(".NavHeight").mouseout(function () {
        $(".NavHeight").animate({backgroundColor: 'rgba(0, 0, 0,.5)'});
    });
});


var count = 0;
$(document).ready(function () {
    $(".mega-dropdown").click(function () {
        $(".mega-menu").slideToggle(slideTime);

    });

});

function colorChange() {

    count = (count + 1) % 2;
    console.log(count);
//ausklappen
    if (count == 1 % 2) {
        jQuery(".mega-menu").animate({backgroundColor: 'rgba(0, 0, 0, .6)'}, slideTime / 2);
        /*     setTimeout(function () {
                 jQuery(".NavHeight").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime / 2);
             }, slideTime / 2);*/
        //  jQuery(".mega-menu").animate({opacity: '1'}, slideTime/2 );
        console.log('zero' + count);

    }
    //einklappen
    if (count == 0 % 2) {
        jQuery(".mega-menu").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
        /*  setTimeout(function () {
              jQuery(".NavHeight").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);
          }, slideTime / 2);*/
        //  jQuery(".mega-menu").animate({opacity: '0'}, slideTime/2 );
        console.log('ones' + count);
    }
}
