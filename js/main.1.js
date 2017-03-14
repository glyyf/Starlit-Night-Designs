var page = "dev";

$(document).ready(function(){
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


function buttons () {
    $('.btn').hide().delay(7000).fadeIn(2000);
}

function typewriter2 () {
    $('#line1').typeIt({
        strings: 'de·sign',
        speed: 100,
        cursor:false
    });
    $('#line2').typeIt({
        strings: '1. Noun -  Purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object.',
        speed: 50,
        cursor: false
    });
    $('#line3').typeIt({
        strings: '2. Verb -  Do or plan (something) with a specific purpose in mind.',
        speed: 50,
        cursor: true,
    });
    $('.bio').typeIt({
        strings: '> Hello, My name is Spencer Grimes, and I like to build cool stuff.',
        speed: 50,
        cursor: false,
    });
    $('.bio2').typeIt({
        strings: '&nbsp;&nbsp;&nbsp;&nbsp;Albert Einstien once said "If you can\'t explain it simply, you don\'t understand it well enough.", and I use that as a guiding principle in my development and design. If I can not convey the idea I am trying to express through design simply and effeciently, then that design is not good enough. Writing and reading code that is clean, intuitive, and simple is a pleasure any developer wishes to enjoy, myself included. I specialize in Web Development, Web Design, and Server Management. If you have an idea that you want to get online, please let me assist you getting the design in your head into a place where billions will see it.',
        speed: 10,
        cursor: false,
    });
    $('.explination').typeIt({
        strings: 'As you may have noticed, I wanted to keep actual text here to a minimum. While I could tell you everything I can do, I think it\'s simpler to just show you. This page is 100% responsive, and fully dynamic, all you have to do is select one of the above buttons.',
        speed: 25,
        cursor: false,
    });
}


function devtogalaxy(){
    $('body').css({'animation':'devtogalaxybgchange 3s','animation-fill-mode':'both'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'url("/img/space2.jpg")');
    $('.jumbotron').css({'background':'initial','background-color': 'rgba(0,0,0,.4)'});
    $('.jumbotron').css({'animation':'devtogalaxyjumbo 3s','animation-fill-mode':'both'});
    $('.jumbotron .btn').css({'animation':'devtogalaxyjumbobtn 3s','animation-fill-mode':'both'});
    $('.info').css({'animation':'devtogalaxyinfo 3s','animation-fill-mode':'both'});
    $('.buttons2 .btn').css({'animation':'devtogalaxybuttons2btn 3s','animation-fill-mode':'both'});
}

function devtovibrant(){
    $('body').css({'animation':'devtovibrantbgchange 3s','animation-fill-mode':'both'});
    $('.jumbotron').css({'animation':'devtovibrantjumbo 3s','animation-fill-mode':'both'});
    $('.jumbotron .btn').css({'animation':'devtovibrantjumbobtn 3s','animation-fill-mode':'both'});
    $('.info').css({'animation':'devtovibrantinfo 3s','animation-fill-mode':'both'});
    $('.buttons2 .btn').css({'animation':'devtovibrantbuttons2btn 3s','animation-fill-mode':'both'});
}

function galaxytodev(){
    $('body').css({'animation':'galaxytodevbgchange 3s','animation-fill-mode':'both'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'none');
    $('.jumbotron').css({'background':'initial'});
    $('.jumbotron').css({'animation':'galaxytodevjumbo 3s','animation-fill-mode':'both'});
    $('.jumbotron .btn').css({'animation':'galaxytodevjumbobtn 3s','animation-fill-mode':'both'});
    $('.info').css({'animation':'galaxytodevinfo 3s','animation-fill-mode':'both'});
    $('.buttons2 .btn').css({'animation':'galaxytodevbuttons2btn 3s','animation-fill-mode':'both'});
}

function galaxytovibrant(){
    $('body').css({'animation':'galaxytovibrantbgchange 3s','animation-fill-mode':'both'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'none');
    $('.jumbotron').css({'background':'initial'});
    $('.jumbotron').css({'animation':'galaxytovibrantjumbo 3s','animation-fill-mode':'both'});
    $('.jumbotron .btn').css({'animation':'galaxytovibrantjumbobtn 3s','animation-fill-mode':'both'});
    $('.info').css({'animation':'galaxytovibrantinfo 3s','animation-fill-mode':'both'});
    $('.buttons2 .btn').css({'animation':'galaxytovibrantbuttons2btn 3s','animation-fill-mode':'both'});
}

function vibranttodev(){
    $('body').css({'animation':'vibranttodevbgchange 3s','animation-fill-mode':'both'});
    $('.jumbotron').css({'animation':'vibranttodevjumbo 3s','animation-fill-mode':'both'});
    $('.jumbotron .btn').css({'animation':'vibranttodevjumbobtn 3s','animation-fill-mode':'both'});
    $('.info').css({'animation':'vibranttodevinfo 3s','animation-fill-mode':'both'});
    $('.buttons2 .btn').css({'animation':'vibranttodevbuttons2btn 3s','animation-fill-mode':'both'});
}

function vibranttogalaxy(){
    $('body').css({'animation':'vibranttogalaxybgchange 3s','animation-fill-mode':'both'});
    $('.maindata').css('display','inline');
    $(".firstdiv").css("background-image", 'url("/img/space2.jpg")');
    $('.jumbotron').css({'background':'initial','background-color': 'rgba(0,0,0,.4)'});
    $('.jumbotron').css({'animation':'vibranttogalaxyjumbo 3s','animation-fill-mode':'both'});
    $('.jumbotron .btn').css({'animation':'vibranttogalayjumbobtn 3s','animation-fill-mode':'both'});
    $('.info').css({'animation':'vibranttogalaxyinfo 3s','animation-fill-mode':'both'});
    $('.buttons2 .btn').css({'animation':'vibranttogalaxybuttons2btn 3s','animation-fill-mode':'both'});
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