var page = "dev";

$(document).ready(function(){
      edgedetect();
      $("#dev").click(function(){
        if (page == "dev") {
            page = "dev";
        } else if (page == "galaxy") {
            galaxytodev();
            page = "dev";
        } else if (page == "vibrant") {
            deanimation();
            vibranttodev();
            page = "dev";
        }
      });
      $("#space").click(function(){
        if (page == "dev") {
            devtogalaxy()
            page = "galaxy";
        } else if (page == "galaxy") {
            page = "galaxy";
        } else if (page == "vibrant") {
            deanimation();
            vibranttogalaxy();
            page = "galaxy";
        }
      });
      $("#vibrant").click(function(){
        if (page == "dev") {
            devtovibrant();
            animation()
            page = "vibrant";
        } else if (page == "galaxy") {
            galaxytovibrant();
            page = "vibrant";
            animation();
        } else if (page == "vibrant") {
            page = "vibrant";
            deanimation();
            animation();
        }
      });
      
});

function edgedetect() {
        if (bowser.msedge || bowser.msie) {
            alert('Background Trasitions not supported very well in Edge or Internet Explorer, please consider using Google Chrome or Firefox. Thanks!');
        }
}

function typewriter () {
    $('#line1').typeIt({
        speed: 100,
        cursor:false
    });
    $('#line2').typeIt({
        speed: 50,
        cursor: false
    });
    $('#line3').typeIt({
        speed: 50,
        cursor: true,
    });
    $('.bio').typeIt({
        speed: 50,
        cursor: false,
    });
    $('.bio2').typeIt({
        speed: 10,
        cursor: false,
    });
    $('.explination').typeIt({
        speed: 25,
        cursor: false,
    });
}

function devtogalaxy(){
    $('body').css({'animation':'devtogalaxybgchange 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'url("/img/space2.jpg")');
    $('.jumbotron').css({'background':'initial','background-color': 'rgba(0,0,0,.4)'});
    $('.jumbotron').css({'animation':'devtogalaxyjumbo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron .btn').css({'animation':'devtogalaxyjumbobtn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.info').css({'animation':'devtogalaxyinfo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.buttons2 .btn').css({'animation':'devtogalaxybuttons2btn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
}

function devtovibrant(){
    $('body').css({'animation':'devtovibrantbgchange 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron').css({'animation':'devtovibrantjumbo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron .btn').css({'animation':'devtovibrantjumbobtn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.info').css({'animation':'devtovibrantinfo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.buttons2 .btn').css({'animation':'devtovibrantbuttons2btn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
}

function galaxytodev(){
    $('body').css({'animation':'galaxytodevbgchange 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'none');
    $('.jumbotron').css({'background':'initial'});
    $('.jumbotron').css({'animation':'galaxytodevjumbo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron .btn').css({'animation':'galaxytodevjumbobtn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.info').css({'animation':'galaxytodevinfo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.buttons2 .btn').css({'animation':'galaxytodevbuttons2btn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
}

function galaxytovibrant(){
    $('body').css({'animation':'galaxytovibrantbgchange 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'none');
    $('.jumbotron').css({'background':'initial'});
    $('.jumbotron').css({'animation':'galaxytovibrantjumbo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron .btn').css({'animation':'galaxytovibrantjumbobtn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.info').css({'animation':'galaxytovibrantinfo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.buttons2 .btn').css({'animation':'galaxytovibrantbuttons2btn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
}

function vibranttodev(){
    $('body').css({'animation':'vibranttodevbgchange 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron').css({'animation':'vibranttodevjumbo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron .btn').css({'animation':'vibranttodevjumbobtn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.info').css({'animation':'vibranttodevinfo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.buttons2 .btn').css({'animation':'vibranttodevbuttons2btn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
}

function vibranttogalaxy(){
    $('body').css({'animation':'vibranttogalaxybgchange 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'url("/img/space2.jpg")');
    $('.jumbotron').css({'background':'initial','background-color': 'rgba(0,0,0,.4)'});
    $('.jumbotron').css({'animation':'vibranttogalaxyjumbo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.jumbotron .btn').css({'animation':'vibranttogalayjumbobtn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.info').css({'animation':'vibranttogalaxyinfo 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
    $('.buttons2 .btn').css({'animation':'vibranttogalaxybuttons2btn 3s','-webkit-animation-fill-mode':'forwards','-moz-animation-fill-mode':'forwards','-o-animation-fill-mode':'forwards','-ms-animation-fill-mode':'forwards','animation-fill-mode':'forwards'});
}

function animation(){
    $(".bio").mouseover(function tada(){
        $(".bio").addClass('animated tada');
    });
    $(".explination").mouseover(function jello(){
        $(".explination").addClass('animated jello');
    });
    $("h1").mouseover(function flip(){
        $("h1").addClass('animated flip');
    });
}

function deanimation(){
    $(".bio").removeClass('animated tada');
    $(".explination").removeClass('animated jello');
    $("h1").removeClass('animated flip');
    $(".bio").off();
    $(".explination").off();
    $("h1").off();
}