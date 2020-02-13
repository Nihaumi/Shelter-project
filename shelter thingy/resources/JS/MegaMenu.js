/*DeskNav*/

$(document).ready(function () {
    if ($(".navbar--height").backgroundColor === 'rgba(0,0,0, 0.5)') {
        $(".navbar--height").mouseover(function () {
            $(".navbar--height").animate({backgroundColor: 'rgba(0, 0, 0,.8)'});
        });
    }

    $(".navbar--height").mouseout(function () {
        $(".navbar--height").animate({backgroundColor: 'rgba(0, 0, 0,.5)'});
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
        jQuery(".mega-menu").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime / 2);
    }
    //einklappen
    if (count == 0 % 2) {
        jQuery(".mega-menu").animate({backgroundColor: 'rgba(0, 0, 0, .5)'}, slideTime / 2);

    }
}