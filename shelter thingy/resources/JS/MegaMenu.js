
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
        jQuery(".mega-menu").animate({backgroundColor: 'rgba(0, 0, 0, .8)'}, slideTime / 2);
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
