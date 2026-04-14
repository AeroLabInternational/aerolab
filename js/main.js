/* scripts.js */
// ie11
// ------------------------------------------------------------------------------------
var browser;
const ua = navigator.userAgent;
if(ua.indexOf('Trident') !== -1) {
	browser = "ie11";
	$("body").addClass("ie11");
}

// mobile layout adjustments
// ------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    function adjustLayout() {
        if (window.innerWidth <= 850) {
            var hamList = document.querySelector(".nav-list");
            if (hamList) {
                hamList.style.display = "flex";
                hamList.style.flexDirection = "column";
                hamList.style.alignItems = "center";
                hamList.style.width = "100%";
            }
            document.querySelectorAll(".nav-list-card li").forEach(function (item) {
                item.style.width = "100%";
                item.style.textAlign = "center";
            });
            var video = document.querySelector(".mov_bg video");
            if (video) {
                video.style.width = "100%";
                video.style.height = "auto";
                video.style.objectFit = "cover";
            }
        }
    }
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});

// mobile
// ------------------------------------------------------------------------------------
var sp = false;
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
	sp = true
}

// common
// ------------------------------------------------------------------------------------
var device;
var wh = $(window).height();
var ww = $(window).width();
var st = $(window).scrollTop();
// console.log(st)
if(ww > 768) {
	device = "pc";
} else {
	device = "sp";
  $("html, body, .kv_sec").height(wh);
}
$(window).on("resize", function() {
  wh = window.outerHeight;
  ww = $(window).width();
  st = $(window).scrollTop();
  if(ww > 768) {
    device = "pc";
  } else {
    device = "sp";
  }
});
$(window).on("scroll", function() {
  st = $(window).scrollTop();
  if($("body").hasClass("top")) {
    if(st > wh*1.5) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  } else {
    if(st > 0) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  }
});
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function() {
  var ua = navigator.userAgent.toLowerCase();
  // windowsのみ適用 macやiphone、ipadも適用させない
  var isWindows = (ua.indexOf('windows') > -1) && !((ua.indexOf('mac') > -1) && (ua.indexOf('os') > -1)) && !((ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1));
  if(isWindows) {
    // $('body').niceScroll({
    //   scrollspeed: 40,
    //   mousescrollstep: 30,
    //   autohidemode: false,
    //   cursorcolor: "#ccc",
    //   cursorborder: "1px solid #ccc",
    //   // background: "#111",
    //   zindex: 100000
    // });
    // $("header .nav-menu").niceScroll({
    //   scrollspeed: 40,
    //   mousescrollstep: 30,
    //   autohidemode: false,
    //   cursorcolor: "#ccc",
    //   cursorborder: "1px solid #ccc",
    //   // background: "#111",
    //   zindex: 100000
    // });
  }
 });


gsap.config({
    nullTargetWarn: false,
  });


//リンクにホバー時はクラスをつける
// const linkElem = document.querySelectorAll('a');
// for (let i = 0; i < linkElem.length; i++) {
//     linkElem[i].addEventListener('mouseover', function (e) {
//       $(".cursor").addClass('hov');
//     });
//     linkElem[i].addEventListener('mouseout', function (e) {
//       $(".cursor").removeClass('hov');   
//     });
// }


// header_menu
// ------------------------------------------------------------------------------------
var header_menu_flg = 0;
var scroll_pos = 0;
$(document).on("click", ".nav-screen", function() {
  if(header_menu_flg == 0) {
    header_menu_flg = 1;
    scroll_pos = $(window).scrollTop();
    $(this).addClass("active");
    $(".nav-menu").fadeIn(300);
    $("body").addClass("fixed");
    $("#ascrail2000").css("visibility", "hidden");
  } else {
    header_menu_flg = 0;
    $(this).removeClass("active");
    $(".nav-menu").fadeOut(300);
    $("body").removeClass("fixed");
    $("#ascrail2000").css("visibility", "visible");
    $("html, body").animate({scrollTop:scroll_pos}, 0, "swing");
  }
});



   // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.


  
  var player;
  var player2;
  var player3;
  var player4;
  var player5;

  var player_flg = 0
  var HREF = window.location.origin

  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
             'Origin':HREF
      },
      height: '360',
      width: '640',
      videoId: 'fIVDp9FAGF8',
      host: 'https://www.youtube-nocookie.com'
    });

    // player.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";

    player2 = new YT.Player('ytplayer2', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
             'Origin':HREF
      },
      height: '360',
      width: '640',
      videoId: 'ncD3mK25_ig',
      host: 'https://www.youtube-nocookie.com'
    });

    // player2.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";


    player3 = new YT.Player('ytplayer3', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
             'Origin':HREF
      },
      height: '360',
      width: '640',
      videoId: 'xxsO8b59JUI',
      host: 'https://www.youtube-nocookie.com'
    });

    // player3.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";

    player4 = new YT.Player('ytplayer4', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
             'Origin':HREF
      },
      height: '360',
      width: '640',
      videoId: 'u4F-ny_CHLw',
      host: 'https://www.youtube-nocookie.com'
    });

    // player4.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";

    player5 = new YT.Player('ytplayer5', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
             'Origin':HREF
      },
      height: '360',
      width: '640',
      videoId: 'MzxtcEO4Qxk',
      host: 'https://www.youtube-nocookie.com'
    });

    // player5.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";

    player6 = new YT.Player('ytplayer6', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
             'Origin':HREF
      },
      height: '360',
      width: '640',
      videoId: 'Zar6TyRmTGM',
      host: 'https://www.youtube-nocookie.com'
    });

    // player6.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";
  }



// mov open
// ------------------------------------------------------------------------------------
$(".top .section_01").on("click", function() {


  if($(".cursor").hasClass('more')) {
    return
  }

    player_flg = 1
    $(".mov_06").fadeIn(500);
    player6.playVideo();



});
$(".top .section_04 .sec04_img01").on("click", function() {
  $(".mov_03").fadeIn(500);
  player3.playVideo();
});
$(".top .section_05 .sec05_img01").on("click", function() {
  $(".mov_04").fadeIn(500);
  player4.playVideo();
});
$(".top .section_06 .sec06_img01").on("click", function() {
  $(".mov_05").fadeIn(500);
  player5.playVideo();
});
$(".top .section_08 .tvcm_cont .tvcm_img01").on("click", function() {
  $(".mov_01").fadeIn(500);
  player.playVideo();
});
$(".top .section_08 .tvcm_cont .tvcm_img02").on("click", function() {
  $(".mov_02").fadeIn(500);
  player2.playVideo();
});
$(".top .section_08 .tvcm_cont .tvcm_img03").on("click", function() {
  $(".mov_06").fadeIn(500);
  player6.playVideo();
});

$(".local_1 .section_01").on("click", function() {
  $(".mov_03").fadeIn(500);
  player3.playVideo();
});

$(".local_2 .section_01").on("click", function() {
  $(".mov_04").fadeIn(500);
  player4.playVideo();
});

$(".local_3 .section_01").on("click", function() {
  $(".mov_05").fadeIn(500);
  player5.playVideo();
});


$("header .nav-menu .nav-inner .nav-list ul.ham_list_tvcm li").eq(0).on("click", function() {
  $(".mov_01").fadeIn(500);
  player.playVideo();
});
$("header .nav-menu .nav-inner .nav-list ul.ham_list_tvcm li").eq(2).on("click", function() {
  $(".mov_02").fadeIn(500);
  player2.playVideo();
});
$("header .nav-menu .nav-inner .nav-list ul.ham_list_tvcm li").eq(1).on("click", function() {
  $(".mov_06").fadeIn(500);
  player6.playVideo();
});
$(".modal_close, .mov_modal_bg").on("click", function() {
  $(".mov_modal").fadeOut(500);
  player.seekTo(0);
  player2.seekTo(0);
  player3.seekTo(0);
  player4.seekTo(0);
  player5.seekTo(0);
  player6.seekTo(0);
  player.pauseVideo();
  player2.pauseVideo();
  player3.pauseVideo();
  player4.pauseVideo();
  player5.pauseVideo();
  player6.pauseVideo();
});

// top opening
// ------------------------------------------------------------------------------------
$(document).ready(function() {
  $(".over_bk").fadeOut(700);
  if($("#keyvisual_txt").length) {
    const anim01 = lottie.loadAnimation({
        container: document.getElementById("keyvisual_txt"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./img/top-sec01_txt.json"
    });
    anim01.setSpeed(1.5);
    anim01.play();
}
});

// top scroll
// ------------------------------------------------------------------------------------
TweenMax.set('.top .section_00 .sec00_ttl', {"opacity": 0, y: 100}); 

TweenMax.set('.top .section_02 .sec02_txt', {"opacity": 0, y: 150}); 
TweenMax.set('.top .section_02 .sec02_message', {"opacity": 0}); 
TweenMax.set('.top .section_02 .img_sec02_1', {"opacity": 0}); 
TweenMax.set('.top .section_02 .img_sec02_2', {"opacity": 0}); 
TweenMax.set('.top .section_02 .img_sec02_3', {"opacity": 0}); 
TweenMax.set('.top .section_02 .sec02_ttl', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_02 .sec02_img01', {"opacity": 0}); 
TweenMax.set('.top .section_02 .sec02_img02', {"opacity": 0});
TweenMax.set('.top .section_02 .sec02_img03', {"opacity": 0});

TweenMax.set('.top .section_bannar h3', {"opacity": 0, y: 100});
TweenMax.set('.top .section_bannar .message_under_bannar', {"opacity": 0, y: 100});

TweenMax.set('.top .section_03 .img_sec03_1', {"opacity": 0});
TweenMax.set('.top .section_03 .sec03_ttl', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_03 .sec03_txt', {"opacity": 0, y: 100});
TweenMax.set('.top .section_03 ul', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_04 .dialogue_txt', {"opacity": 0});
TweenMax.set('.top .section_04 .theme_txt_01', {"opacity": 0});
TweenMax.set('.top .section_04 .person_txt_01', {"opacity": 0});
TweenMax.set('.top .section_04 .more_btn', {"opacity": 0});
TweenMax.set('.top .section_04 .sec04_txt02', {"opacity": 0});
TweenMax.set('.top .section_04 .sec04_ttl', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_03 .img_sec04_1', {"opacity": 0});
TweenMax.set('.top .section_03 .img_sec04_2', {"opacity": 0});
TweenMax.set('.top .section_04 .theme_comment_inner', {"opacity": 0}); 
TweenMax.set('.top .section_04 .sec04_img01', {"opacity": 0});
TweenMax.set('.top .section_04 .sec04_img02', {"opacity": 0});
TweenMax.set('.top .section_04 .sec04_img03', {"opacity": 0});
TweenMax.set('.top .section_05 .dialogue_txt', {"opacity": 0});
TweenMax.set('.top .section_05 .theme_txt_01', {"opacity": 0});
TweenMax.set('.top .section_05 .person_txt_02', {"opacity": 0});
TweenMax.set('.top .section_05 .sec05_txt02', {"opacity": 0});
TweenMax.set('.top .section_05 .sec05_ttl', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_05 .theme_comment_inner', {"opacity": 0}); 
TweenMax.set('.top .section_05 .more_btn', {"opacity": 0});
TweenMax.set('.top .section_05 .sec05_img01', {"opacity": 0});
TweenMax.set('.top .section_05 .sec05_img02', {"opacity": 0});
TweenMax.set('.top .section_05 .sec05_img03', {"opacity": 0});
TweenMax.set('.top .section_06 .dialogue_txt', {"opacity": 0});
TweenMax.set('.top .section_06 .theme_txt_01', {"opacity": 0});
TweenMax.set('.top .section_06 .person_txt_03', {"opacity": 0});
TweenMax.set('.top .section_06 .sec06_txt02', {"opacity": 0});
TweenMax.set('.top .section_06 .sec06_ttl', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_06 .theme_comment_inner', {"opacity": 0}); 
TweenMax.set('.top .section_06 .more_btn', {"opacity": 0});
TweenMax.set('.top .section_06 .sec06_img01', {"opacity": 0});
TweenMax.set('.top .section_06 .sec06_img02', {"opacity": 0});
TweenMax.set('.top .section_06 .sec06_img03', {"opacity": 0});
TweenMax.set('.top .section_07 .sec07_ttl', {"opacity": 0});
TweenMax.set('.top .section_07 .sec07_cont', {"opacity": 0});
TweenMax.set('.top .section_07 .tvcm_cont01', {"opacity": 0, y: 100}); 
TweenMax.set('.top .section_07 .tvcm_cont02', {"opacity": 0, y: 100}); 
ScrollTrigger.matchMedia({
  "(min-width: 851px)": function() {
    // top_sec01
    const top_sec01 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_01 .sec01_inner",
        start: "center center",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
    top_sec01.fromTo(
      ".top .mov_bg", { "filter": "blur(0px)", "opacity": 1 },
      { "filter": "blur(15px)", "opacity": .7, ease: "Power4.out" },
    );
    top_sec01.fromTo(
      ".top .section_01 .sec01_txt", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    top_sec01.fromTo(
      ".top .section_01 .scroll_line", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    top_sec01.fromTo(
      ".top .section_01 .kv_under_bannar", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );

    // top_sec00
    const top_sec00 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_00 .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec00(),
        onLeaveBack: () => leave_sec00(),
      }
    });
    const top_sec00_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_00 ul",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec00_02(),
        onLeaveBack: () => leave_sec00_02(),
      }
    });
    function enter_sec00() {
      TweenMax.to('.top .section_00 .sec00_dialogue', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_00 .sec00_ttl', 0.6, {"opacity": 1, y: 0}); 
      TweenMax.to('.top .section_00 .sec00_txt', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec00() {
      TweenMax.to('.top .section_00 .sec00_dialogue', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_00 .sec00_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_00 .sec00_txt', 0.6, {"opacity": 0, y: 100}); 
    }
    function enter_sec00_02() {
      TweenMax.to('.top .section_00 ul', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec00_02() {
      TweenMax.to('.top .section_00 ul', 0.6, {"opacity": 0, y: 100}); 
    }



    // top_sec02
    const top_sec02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_02 .cont_inner",
        start: "top bottom",
        end: "+=200%",
        scrub: 0,
      }
    });
    const top_sec02_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_02 .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec02(),
        onLeaveBack: () => leave_sec02(),
      }
    });
    const top_sec02_03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_02 .cont_inner",
        start: "bottom+=36% center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec02_02(),
        onLeaveBack: () => leave_sec02_02(),
      }
    });
    const top_sec02_04 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_02 .cont_inner",
        start: "bottom+=80% center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec02_03(),
        onLeaveBack: () => leave_sec02_03(),
      }
    });
    top_sec02.fromTo(
      ".top .section_02 .sec02_img01", { y: 150, },
      {  y: -150, ease: "Power4.out" },
    );
    top_sec02.fromTo(
      ".top .section_02 .sec02_img02", { y: 50, },
      {  y: -50, ease: "Power4.out" }, "<"
    );
    top_sec02.fromTo(
      ".top .section_02 .sec02_img03", { y: 200, },
      {  y: -200, ease: "Power4.out" }, "<"
    );
    function enter_sec02() {
      TweenMax.to('.top .section_02 .sec02_message', 0.6, {"opacity": 1}); 
      TweenMax.to('.top .section_02 .img_sec02_1', 0.6, {"opacity": 1}); 
      TweenMax.to('.top .section_02 .img_sec02_2', 0.6, {"opacity": 1}); 
      TweenMax.to('.top .section_02 .img_sec02_3', 0.6, {"opacity": 1}); 
      TweenMax.to('.top .section_02 .sec02_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_02 .sec02_txt', 0.6, {delay: .2, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_02 .message_under_bannar', 0.6, {delay: .2, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_02 .sec02_img01', 0.6, {"opacity": 1}); 
    }
    function leave_sec02() {
      TweenMax.to('.top .section_02 .sec02_message', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .img_sec02_1', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .img_sec02_2', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .img_sec02_3', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .sec02_ttl', 0.6, {delay: .1, "opacity": 0, y: 100}); 
      TweenMax.to('.top .section_02 .sec02_txt', 0.6, {delay: .2, "opacity": 0, y: 150}); 
      TweenMax.to('.top .section_02 .message_under_bannar', 0.6, {delay: .2, "opacity": 0, y: 150}); 
      TweenMax.to('.top .section_02 .sec02_img01', 0.6, {"opacity": 0}); 
    }
    function enter_sec02_02() {
      TweenMax.to('.top .section_02 .sec02_img02', 0.6, {"opacity": 1});
    }
    function leave_sec02_02() {
      TweenMax.to('.top .section_02 .sec02_img02', 0.6, {"opacity": 0});
    }
    function enter_sec02_03() {
      TweenMax.to('.top .section_02 .sec02_img03', 0.6, {"opacity": 1});
    }
    function leave_sec02_03() {
      TweenMax.to('.top .section_02 .sec02_img03', 0.6, {"opacity": 0});
    }


    // section_bannar
    const section_bannar = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_bannar .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_section_bannar(),
        onLeaveBack: () => leave_section_bannar(),
      }
    });

    function enter_section_bannar() {
      TweenMax.to('.top .section_bannar h3', 0.6, {"opacity": 1, y: 0}); 
      TweenMax.to('.top .section_bannar .message_under_bannar', 0.6, {delay: .1, "opacity": 1, y: 0}); 
    }
    function leave_section_bannar() {
      TweenMax.to('.top .section_bannar h3', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_bannar .message_under_bannar', 0.6, {delay: .1, "opacity": 0, y: 100}); 
    }

        
    // top_sec03
    const top_sec03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_03 .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec03(),
        onLeaveBack: () => leave_sec03(),
      }
    });
    const top_sec03_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_03",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec03_02(),
        onLeaveBack: () => leave_sec03_02(),
      }
    });
    function enter_sec03() {
      TweenMax.to('.top .section_03 .img_sec03_1', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_03 .sec03_ttl', 0.6, {"opacity": 1, y: 0}); 
      TweenMax.to('.top .section_03 .sec03_txt', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec03() {
      TweenMax.to('.top .section_03 .img_sec03_1', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_03 .sec03_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_03 .sec03_txt', 0.6, {"opacity": 0, y: 100}); 
    }
    function enter_sec03_02() {
      TweenMax.to('.top .section_03 ul', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec03_02() {
      TweenMax.to('.top .section_03 ul', 0.6, {"opacity": 0, y: 100}); 
    }
          
    // top_sec04
    const top_sec04 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_04 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec04(),
        onLeaveBack: () => leave_sec04(),
      }
    });
    top_sec04.fromTo(
      ".top .section_04 .sec04_img01", { y: 150, },
      {  y: -100, ease: "Power4.out" },
    );
    top_sec04.fromTo(
      ".top .section_04 .sec04_img02", { y: 70, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec04.fromTo(
      ".top .section_04 .sec04_txt02", { y: 120, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec04.fromTo(
      ".top .section_04 .sec04_img03", { y: 200, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec04.fromTo(
      ".top .section_04 .theme_comment_inner", { y: 200, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    function enter_sec04() {
      TweenMax.to('.top .section_04 .dialogue_txt', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .theme_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .person_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .sec04_txt02', 0.6, {delay: .1, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_04 .img_sec04_1', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .img_sec04_2', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .theme_comment_inner', 0.6, {delay: .2, "opacity": 1}); 
      TweenMax.to('.top .section_04 .more_btn', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_img01', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_img02', 0.6, {delay: .6, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_img03', 0.6, {delay: .6, "opacity": 1});
    }
    function leave_sec04() {
      TweenMax.to('.top .section_04 .dialogue_txt', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .theme_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .person_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_txt02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_04 .img_sec04_1', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .img_sec04_2', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .theme_comment_inner', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_04 .more_btn', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_img01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_img03', 0.6, {"opacity": 0});
    }

     // top_sec05
     const top_sec05 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_05 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec05(),
        onLeaveBack: () => leave_sec05(),
      }
    });
    top_sec05.fromTo(
      ".top .section_05 .sec05_img01", { y: 150, },
      {  y: -100, ease: "Power4.out" },
    );
    top_sec05.fromTo(
      ".top .section_05 .sec05_img02", { y: 70, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec05.fromTo(
      ".top .section_05 .sec05_txt02", { y: 120, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec05.fromTo(
      ".top .section_05 .sec05_img03", { y: 200, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec05.fromTo(
      ".top .section_05 .theme_comment_inner", { y: 200, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    function enter_sec05() {
      TweenMax.to('.top .section_05 .dialogue_txt', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_05 .theme_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_05 .person_txt_02', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_05 .sec05_txt02', 0.6, {delay: .1, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_05 .theme_comment_inner', 0.6, {delay: .2, "opacity": 1}); 
      TweenMax.to('.top .section_05 .more_btn', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_img01', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_img02', 0.6, {delay: .6, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_img03', 0.6, {delay: .6, "opacity": 1});
    }
    function leave_sec05() {
      TweenMax.to('.top .section_05 .dialogue_txt', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .theme_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .person_txt_02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_txt02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_05 .theme_comment_inner', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_05 .more_btn', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_img01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_img03', 0.6, {"opacity": 0});
    }

     // top_sec06
     const top_sec06 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_06 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec06(),
        onLeaveBack: () => leave_sec06(),
      }
    });
    top_sec06.fromTo(
      ".top .section_06 .sec06_img01", { y: 150, },
      {  y: -100, ease: "Power4.out" },
    );
    top_sec06.fromTo(
      ".top .section_06 .sec06_img02", { y: 70, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec06.fromTo(
      ".top .section_06 .sec06_txt02", { y: 120, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec06.fromTo(
      ".top .section_06 .sec06_img03", { y: 200, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    top_sec06.fromTo(
      ".top .section_06 .theme_comment_inner", { y: 200, },
      {  y: 0, ease: "Power4.out" }, "<"
    );
    function enter_sec06() {
      TweenMax.to('.top .section_06 .dialogue_txt', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_06 .theme_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_06 .person_txt_03', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_06 .sec06_txt02', 0.6, {delay: .1, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_06 .theme_comment_inner', 0.6, {delay: .2, "opacity": 1}); 
      TweenMax.to('.top .section_06 .more_btn', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_img01', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_img02', 0.6, {delay: .6, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_img03', 0.6, {delay: .6, "opacity": 1});
    }
    function leave_sec06() {
      TweenMax.to('.top .section_06 .dialogue_txt', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .theme_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .person_txt_03', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_txt02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_06 .theme_comment_inner', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_06 .more_btn', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_img01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_img03', 0.6, {"opacity": 0});
    }

    // top_sec07
    const top_sec07 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_07 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec07(),
        onLeaveBack: () => leave_sec07(),
      }
    });
    top_sec07.fromTo(
      ".top .section_07 .sec07_cont .sec07_cont_r", { y: 200, },
      {  y: -50, ease: "Power4.out" },
    );
    function enter_sec07() {
      TweenMax.to('.top .section_07 .sec07_ttl', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_07 .sec07_cont', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_sec07() {
      TweenMax.to('.top .section_07 .sec07_ttl', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_07 .sec07_cont', 0.6, {delay: .2, "opacity": 0});
    }

    // top_sec08
    const top_sec08 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_08 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec08(),
        onLeaveBack: () => leave_sec08(),
      }
    });
    const top_sec08_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_08 .tvcm_cont01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec08_02(),
        onLeaveBack: () => leave_sec08_02(),
      }
    });
    const top_sec08_03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_08 .tvcm_cont02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec08_03(),
        onLeaveBack: () => leave_sec08_03(),
      }
    });
    function enter_sec08() {
      TweenMax.to('.top .section_08 .sec08_ttl', 0.6, {"opacity": 1}); 
    }
    function leave_sec08() {
      TweenMax.to('.top .section_08 .sec08_ttl', 0.6, {"opacity": 0}); 
    }
    function enter_sec08_02() {
      TweenMax.to('.top .section_08 .tvcm_cont01', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec08_02() {
      TweenMax.to('.top .section_08 .tvcm_cont01', 0.6, {"opacity": 0, y: 100}); 
    }
    function enter_sec08_03() {
      TweenMax.to('.top .section_08 .tvcm_cont02', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec08_03() {
      TweenMax.to('.top .section_08 .tvcm_cont02', 0.6, {"opacity": 0, y: 100}); 
    }

    // footer
    const footer = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "+=100%",
        scrub: 1,
        onLeave: () => enter_footer(),
        onEnterBack: () => leave_footer(),
      }
    });
    function enter_footer() {
      $("header .nav-screen").addClass("footer");
    }
    function leave_footer() {
      $("header .nav-screen").removeClass("footer");
    }
  },
  
  "(max-width: 850px)": function() {
    // top_sec01
    const top_sec01 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_01 .sec01_inner",
        start: "center center",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
    top_sec01.fromTo(
      ".top .mov_bg", { "filter": "blur(0px)", "opacity": 1 },
      { "filter": "blur(15px)", "opacity": .7, ease: "Power4.out" },
    );
    top_sec01.fromTo(
      ".top .section_01 .sec01_txt", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    top_sec01.fromTo(
      ".top .section_01 .scroll_line", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    top_sec01.fromTo(
      ".top .section_01 .play_movie", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    top_sec01.fromTo(
      ".top .section_01 .kv_under_bannar", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );

    // top_sec00
    const top_sec00 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_00 .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec00(),
        onLeaveBack: () => leave_sec00(),
      }
    });
    const top_sec00_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_00 ul",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec00_02(),
        onLeaveBack: () => leave_sec00_02(),
      }
    });
    function enter_sec00 () {
      TweenMax.to('.top .section_00 .sec00_dialogue', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_00 .sec00_ttl', 0.6, {"opacity": 1, y: 0}); 
      TweenMax.to('.top .section_00 .sec00_txt', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec00() {
      TweenMax.to('.top .section_00 .sec00_dialogue', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_00 .sec00_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_00 .sec00_txt', 0.6, {"opacity": 0, y: 100}); 
    }
	function enter_sec00_02() {
      TweenMax.to('.top .section_00 ul', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec00_02() {
      TweenMax.to('.top .section_00 ul', 0.6, {"opacity": 0, y: 100}); 
    }



    // top_sec02
    const top_sec02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_02 .cont_inner",
        start: "top bottom",
        end: "+=200%",
        scrub: 1,
      }
    });
    const top_sec02_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_02 .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec02(),
        onLeaveBack: () => leave_sec02(),
      }
    });
    function enter_sec02() {
      TweenMax.to('.top .section_02 .sec02_message', 0.6, {"opacity": 1}); 
      TweenMax.to('.top .section_02 .sec02_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_02 .sec02_txt', 0.6, {delay: .2, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_02 .img_sec02_1', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_02 .img_sec02_2', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_02 .img_sec02_3', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_02 .sec02_img01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_02 .message_under_bannar', 0.6, {delay: .2, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_02 .sec02_img02', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_02 .sec02_img03', 0.6, {"opacity": 1});
    }
    function leave_sec02() {
      TweenMax.to('.top .section_02 .sec02_message', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .sec02_ttl', 0.6, {delay: .1, "opacity": 0, y: 100}); 
      TweenMax.to('.top .section_02 .sec02_txt', 0.6, {delay: .2, "opacity": 0, y: 150}); 
      TweenMax.to('.top .section_02 .img_sec02_1', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_02 .img_sec02_2', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_02 .img_sec02_3', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_02 .sec02_img01', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .message_under_bannar', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_02 .sec02_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_02 .sec02_img03', 0.6, {"opacity": 0});
    }


    // section_bannar
    const section_bannar = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_bannar .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_section_bannar(),
        onLeaveBack: () => leave_section_bannar(),
      }
    });

    function enter_section_bannar() {
      TweenMax.to('.top .section_bannar h3', 0.6, {"opacity": 1, y: 0}); 
      TweenMax.to('.top .section_bannar .message_under_bannar', 0.6, {delay: .1, "opacity": 1, y: 0}); 
    }
    function leave_section_bannar() {
      TweenMax.to('.top .section_bannar h3', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_bannar .message_under_bannar', 0.6, {delay: .1, "opacity": 0, y: 100}); 
    }
        
    // top_sec03
    const top_sec03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_03 .cont_inner",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec03(),
        onLeaveBack: () => leave_sec03(),
      }
    });
    const top_sec03_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_03 ul",
        start: "top center+=20%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec03_02(),
        onLeaveBack: () => leave_sec03_02(),
      }
    });
    function enter_sec03() {
      TweenMax.to('.top .section_03 .img_sec03_1', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_03 .sec03_ttl', 0.6, {"opacity": 1, y: 0}); 
      TweenMax.to('.top .section_03 .sec03_txt', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec03() {
      TweenMax.to('.top .section_03 .img_sec03_1', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_03 .sec03_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_03 .sec03_txt', 0.6, {"opacity": 0, y: 100}); 
    }
    function enter_sec03_02() {
      TweenMax.to('.top .section_03 ul', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec03_02() {
      TweenMax.to('.top .section_03 ul', 0.6, {"opacity": 0, y: 100}); 
    }
          
    // top_sec04
    const top_sec04 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_04 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec04(),
        onLeaveBack: () => leave_sec04(),
      }
    });
    function enter_sec04() {
      TweenMax.to('.top .section_04 .dialogue_txt', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .theme_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .person_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .sec04_txt02', 0.6, {delay: .1, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_04 .img_sec04_1', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .img_sec04_1', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_04 .theme_comment_inner', 0.6, {delay: .2, "opacity": 1}); 
      TweenMax.to('.top .section_04 .more_btn', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_img01', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_img02', 0.6, {delay: .6, "opacity": 1});
      TweenMax.to('.top .section_04 .sec04_img03', 0.6, {delay: .6, "opacity": 1});
    }
    function leave_sec04() {
      TweenMax.to('.top .section_04 .dialogue_txt', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .theme_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .person_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_txt02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_04 .img_sec04_1', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .img_sec04_1', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .theme_comment_inner', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_04 .more_btn', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_img01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_04 .sec04_img03', 0.6, {"opacity": 0});
    }

     // top_sec05
     const top_sec05 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_05 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec05(),
        onLeaveBack: () => leave_sec05(),
      }
    });
    function enter_sec05() {
      TweenMax.to('.top .section_05 .dialogue_txt', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_05 .theme_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_05 .person_txt_02', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_05 .sec05_txt02', 0.6, {delay: .1, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_05 .theme_comment_inner', 0.6, {delay: .2, "opacity": 1}); 
      TweenMax.to('.top .section_05 .more_btn', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_img01', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_img02', 0.6, {delay: .6, "opacity": 1});
      TweenMax.to('.top .section_05 .sec05_img03', 0.6, {delay: .6, "opacity": 1});
    }
    function leave_sec05() {
      TweenMax.to('.top .section_05 .dialogue_txt', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .theme_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .person_txt_02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_txt02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_05 .theme_comment_inner', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_05 .more_btn', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_img01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_05 .sec05_img03', 0.6, {"opacity": 0});
    }

     // top_sec06
     const top_sec06 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_06 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec06(),
        onLeaveBack: () => leave_sec06(),
      }
    });
    function enter_sec06() {
      TweenMax.to('.top .section_06 .dialogue_txt', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_06 .theme_txt_01', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_06 .person_txt_03', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_06 .sec06_txt02', 0.6, {delay: .1, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_ttl', 0.6, {delay: .1, "opacity": 1, y: 0}); 
      TweenMax.to('.top .section_06 .theme_comment_inner', 0.6, {delay: .2, "opacity": 1}); 
      TweenMax.to('.top .section_06 .more_btn', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_img01', 0.6, {delay: .4, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_img02', 0.6, {delay: .6, "opacity": 1});
      TweenMax.to('.top .section_06 .sec06_img03', 0.6, {delay: .6, "opacity": 1});
    }
    function leave_sec06() {
      TweenMax.to('.top .section_06 .dialogue_txt', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .theme_txt_01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .person_txt_03', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_txt02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_ttl', 0.6, {"opacity": 0, y: 100}); 
      TweenMax.to('.top .section_06 .theme_comment_inner', 0.6, {"opacity": 0}); 
      TweenMax.to('.top .section_06 .more_btn', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_img01', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_img02', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_06 .sec06_img03', 0.6, {"opacity": 0});
    }

    // top_sec07
    const top_sec07 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_07 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec07(),
        onLeaveBack: () => leave_sec07(),
      }
    });
    function enter_sec07() {
      TweenMax.to('.top .section_07 .sec07_ttl', 0.6, {"opacity": 1});
      TweenMax.to('.top .section_07 .sec07_cont', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_sec07() {
      TweenMax.to('.top .section_07 .sec07_ttl', 0.6, {"opacity": 0});
      TweenMax.to('.top .section_07 .sec07_cont', 0.6, {delay: .2, "opacity": 0});
    }

    // top_sec08
    const top_sec08 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_08 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec08(),
        onLeaveBack: () => leave_sec08(),
      }
    });
    const top_sec08_02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_08 .tvcm_cont01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec08_02(),
        onLeaveBack: () => leave_sec08_02(),
      }
    });
    const top_sec08_03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".top .section_08 .tvcm_cont02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        // markers: true,
        onEnter: () => enter_sec08_03(),
        onLeaveBack: () => leave_sec08_03(),
      }
    });
    function enter_sec08() {
      TweenMax.to('.top .section_08 .sec08_ttl', 0.6, {"opacity": 1}); 
    }
    function leave_sec08() {
      TweenMax.to('.top .section_08 .sec08_ttl', 0.6, {"opacity": 0}); 
    }
    function enter_sec08_02() {
      TweenMax.to('.top .section_08 .tvcm_cont01', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec08_02() {
      TweenMax.to('.top .section_08 .tvcm_cont01', 0.6, {"opacity": 0, y: 100}); 
    }
    function enter_sec08_03() {
      TweenMax.to('.top .section_08 .tvcm_cont02', 0.6, {"opacity": 1, y: 0}); 
    }
    function leave_sec08_03() {
      TweenMax.to('.top .section_08 .tvcm_cont02', 0.6, {"opacity": 0, y: 100}); 
    }

    // footer
    const footer = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "+=100%",
        scrub: 1,
        onLeave: () => enter_footer(),
        onEnterBack: () => leave_footer(),
      }
    });
    function enter_footer() {
      $("header .nav-screen").addClass("footer");
    }
    function leave_footer() {
      $("header .nav-screen").removeClass("footer");
    }
  }
});


// theme scroll
// ------------------------------------------------------------------------------------
TweenMax.set('.theme .mov_bg', {"opacity": .8});
TweenMax.set('.theme .section_02 .sec02_txt', {"opacity": 1, y: 100});
TweenMax.set('.theme .section_03 .journalist_ttl', {"opacity": 0});
TweenMax.set('.theme .section_03 .journalist_subttl', {"opacity": 0});
TweenMax.set('.theme .journalist_cont', {"opacity": 0, y: 100});
TweenMax.set('.theme .section_04 .article_img', {"opacity": 0, y: 100});
TweenMax.set('.theme .section_04 .article_txt', {"opacity": 0, x: 100});
TweenMax.set('.theme .section_04 .more_btn', {"opacity": 0});
ScrollTrigger.matchMedia({
  "(min-width: 851px)": function() {


     ScrollTrigger.create({
        trigger: "footer",
        start: "top 100%",

          onEnter: () => $(".arrow_back").addClass('fit'),
          onLeave: () => $(".arrow_back").removeClass('fit'),
          onEnterBack: () => $(".arrow_back").addClass('fit'),
          onLeaveBack: () => $(".arrow_back").removeClass('fit'),
      });


    // theme_sec01
    const theme_sec01 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .section_01 .sec01_inner",
        start: "center center",
        end: "+=50%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
    theme_sec01.fromTo(
      ".theme .mov_bg", { "filter": "blur(0px)", "opacity": .8 },
      { "filter": "blur(15px)", "opacity": .5, ease: "Power4.out" },
    );
    theme_sec01.fromTo(
      ".theme .section_01 .sec01_cont", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    theme_sec01.fromTo(
      ".theme .section_01 .scroll_line", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );

    // theme_sec01.fromTo(
    //   ".arrow_back", { "opacity": "1", },
    //   { "opacity": "0", ease: "Power4.out" }, "<"
    // );

    // theme_sec02
    const theme_sec02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .section_02 .cont_inner",
        start: "top 100%",
        end: "+=100%",
        scrub: 1,
        onEnter: () => enter_sec02(),
        onLeaveBack: () => leave_sec02(),
      }
    });
    function enter_sec02() {
      TweenMax.to('.theme .section_02 .sec02_txt', 0.6, {"opacity": 1, y: 0});
    }
    function leave_sec02() {
      TweenMax.to('.theme .section_02 .sec02_txt', 0.6, {"opacity": 0, y: 100}, "<");
    }
    
    // theme_sec03
    const theme_sec03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .section_03 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec03(),
        onLeaveBack: () => leave_sec03(),
      }
    });
    function enter_sec03() {
      TweenMax.to('.theme .section_03 .journalist_ttl', 0.6, {"opacity": 1});
      TweenMax.to('.theme .section_03 .journalist_subttl', 0.6, {"opacity": 1});
      TweenMax.to('.theme .journalist_cont', 0.6, {delay: .2, "opacity": 1, y: 0});
    }
    function leave_sec03() {
      TweenMax.to('.theme .section_03 .journalist_ttl', 0.6, {"opacity": 0});
      TweenMax.to('.theme .section_03 .journalist_subttl', 0.6, {"opacity": 0});
      TweenMax.to('.theme .journalist_cont', 0.6, {"opacity": 0, y: 100});
    }

    // theme01_article
    const theme01_article = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme01_article_01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme01_article(),
        onLeaveBack: () => leave_theme01_article(),
      }
    });
    function enter_theme01_article() {
      TweenMax.to('.theme .theme01_article_01 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme01_article_01 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme01_article_01 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme01_article() {
      TweenMax.to('.theme .theme01_article_01 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme01_article_01 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme01_article_01 .more_btn', 0.6, {"opacity": 0});
    }
    const theme01_article02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme01_article_02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme01_article02(),
        onLeaveBack: () => leave_theme01_article02(),
      }
    });
    function enter_theme01_article02() {
      TweenMax.to('.theme .theme01_article_02 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme01_article_02 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme01_article_02 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme01_article02() {
      TweenMax.to('.theme .theme01_article_02 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme01_article_02 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme01_article_02 .more_btn', 0.6, {"opacity": 0});
    }
    const theme01_article03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme01_article_03",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme01_article03(),
        onLeaveBack: () => leave_theme01_article03(),
      }
    });
    function enter_theme01_article03() {
      TweenMax.to('.theme .theme01_article_03 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme01_article_03 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme01_article_03 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme01_article03() {
      TweenMax.to('.theme .theme01_article_03 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme01_article_03 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme01_article_03 .more_btn', 0.6, {"opacity": 0});
    }
    
    // theme02_article
    const theme02_article = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme02_article_01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme02_article(),
        onLeaveBack: () => leave_theme02_article(),
      }
    });
    function enter_theme02_article() {
      TweenMax.to('.theme .theme02_article_01 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme02_article_01 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme02_article_01 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme02_article() {
      TweenMax.to('.theme .theme02_article_01 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme02_article_01 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme02_article_01 .more_btn', 0.6, {"opacity": 0});
    }
    const theme02_article02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme02_article_02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme02_article02(),
        onLeaveBack: () => leave_theme02_article02(),
      }
    });
    function enter_theme02_article02() {
      TweenMax.to('.theme .theme02_article_02 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme02_article_02 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme02_article_02 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme02_article02() {
      TweenMax.to('.theme .theme02_article_02 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme02_article_02 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme02_article_02 .more_btn', 0.6, {"opacity": 0});
    }
    const theme02_article03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme02_article_03",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme02_article03(),
        onLeaveBack: () => leave_theme02_article03(),
      }
    });
    function enter_theme02_article03() {
      TweenMax.to('.theme .theme02_article_03 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme02_article_03 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme02_article_03 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme02_article03() {
      TweenMax.to('.theme .theme02_article_03 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme02_article_03 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme02_article_03 .more_btn', 0.6, {"opacity": 0});
    }
    
    // theme03_article
    const theme03_article = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme03_article_01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme03_article(),
        onLeaveBack: () => leave_theme03_article(),
      }
    });
    function enter_theme03_article() {
      TweenMax.to('.theme .theme03_article_01 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme03_article_01 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme03_article_01 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme03_article() {
      TweenMax.to('.theme .theme03_article_01 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme03_article_01 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme03_article_01 .more_btn', 0.6, {"opacity": 0});
    }
    const theme03_article02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme03_article_02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme03_article02(),
        onLeaveBack: () => leave_theme03_article02(),
      }
    });
    function enter_theme03_article02() {
      TweenMax.to('.theme .theme03_article_02 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme03_article_02 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme03_article_02 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme03_article02() {
      TweenMax.to('.theme .theme03_article_02 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme03_article_02 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme03_article_02 .more_btn', 0.6, {"opacity": 0});
    }
    const theme03_article03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme03_article_03",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme03_article03(),
        onLeaveBack: () => leave_theme03_article03(),
      }
    });
    function enter_theme03_article03() {
      TweenMax.to('.theme .theme03_article_03 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme03_article_03 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme03_article_03 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme03_article03() {
      TweenMax.to('.theme .theme03_article_03 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme03_article_03 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme03_article_03 .more_btn', 0.6, {"opacity": 0});
    }
  },
  
  "(max-width: 850px)": function() {
    // theme_sec01

     ScrollTrigger.create({
        trigger: "footer",
        start: "top 100%",

          onEnter: () => $(".arrow_back").addClass('fit'),
          onLeave: () => $(".arrow_back").removeClass('fit'),
          onEnterBack: () => $(".arrow_back").addClass('fit'),
          onLeaveBack: () => $(".arrow_back").removeClass('fit'),
      });

    
    const theme_sec01 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .section_01 .sec01_inner",
        start: "center center",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
    theme_sec01.fromTo(
      ".theme .mov_bg", { "filter": "blur(0px)", "opacity": .8 },
      { "filter": "blur(15px)", "opacity": .5, ease: "Power4.out" },
    );
    theme_sec01.fromTo(
      ".theme .section_01 .sec01_cont", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    theme_sec01.fromTo(
      ".theme .section_01 .scroll_line", { "opacity": "1", },
      { "opacity": "0", ease: "Power4.out" }, "<"
    );
    // theme_sec01.fromTo(
    //   ".arrow_back", { "opacity": "1", },
    //   { "opacity": "0", ease: "Power4.out" }, "<"
    // );
    
    // theme_sec02
    const theme_sec02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .section_02 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec02(),
        onLeaveBack: () => leave_sec02(),
      }
    });
    function enter_sec02() {
      TweenMax.to('.theme .section_02 .sec02_txt', 0.6, {"opacity": 1, y: 0});
    }
    function leave_sec02() {
      TweenMax.to('.theme .section_02 .sec02_txt', 0.6, {"opacity": 0, y: 100});
    }
    
    // theme_sec03
    const theme_sec03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .section_03 .cont_inner",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_sec03(),
        onLeaveBack: () => leave_sec03(),
      }
    });
    function enter_sec03() {
      TweenMax.to('.theme .section_03 .journalist_ttl', 0.6, {"opacity": 1});
      TweenMax.to('.theme .section_03 .journalist_subttl', 0.6, {"opacity": 1});
      TweenMax.to('.theme .journalist_cont', 0.6, {delay: .2, "opacity": 1, y: 0});
    }
    function leave_sec03() {
      TweenMax.to('.theme .section_03 .journalist_ttl', 0.6, {"opacity": 0});
      TweenMax.to('.theme .section_03 .journalist_subttl', 0.6, {"opacity": 0});
      TweenMax.to('.theme .journalist_cont', 0.6, {"opacity": 0, y: 100});
    }

    // theme01_article
    const theme01_article = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme01_article_01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme01_article(),
        onLeaveBack: () => leave_theme01_article(),
      }
    });
    function enter_theme01_article() {
      TweenMax.to('.theme .theme01_article_01 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme01_article_01 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme01_article_01 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme01_article() {
      TweenMax.to('.theme .theme01_article_01 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme01_article_01 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme01_article_01 .more_btn', 0.6, {"opacity": 0});
    }
    const theme01_article02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme01_article_02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme01_article02(),
        onLeaveBack: () => leave_theme01_article02(),
      }
    });
    function enter_theme01_article02() {
      TweenMax.to('.theme .theme01_article_02 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme01_article_02 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme01_article_02 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme01_article02() {
      TweenMax.to('.theme .theme01_article_02 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme01_article_02 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme01_article_02 .more_btn', 0.6, {"opacity": 0});
    }
    const theme01_article03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme01_article_03",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme01_article03(),
        onLeaveBack: () => leave_theme01_article03(),
      }
    });
    function enter_theme01_article03() {
      TweenMax.to('.theme .theme01_article_03 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme01_article_03 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme01_article_03 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme01_article03() {
      TweenMax.to('.theme .theme01_article_03 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme01_article_03 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme01_article_03 .more_btn', 0.6, {"opacity": 0});
    }
    
    // theme02_article
    const theme02_article = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme02_article_01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme02_article(),
        onLeaveBack: () => leave_theme02_article(),
      }
    });
    function enter_theme02_article() {
      TweenMax.to('.theme .theme02_article_01 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme02_article_01 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme02_article_01 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme02_article() {
      TweenMax.to('.theme .theme02_article_01 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme02_article_01 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme02_article_01 .more_btn', 0.6, {"opacity": 0});
    }
    const theme02_article02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme02_article_02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme02_article02(),
        onLeaveBack: () => leave_theme02_article02(),
      }
    });
    function enter_theme02_article02() {
      TweenMax.to('.theme .theme02_article_02 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme02_article_02 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme02_article_02 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme02_article02() {
      TweenMax.to('.theme .theme02_article_02 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme02_article_02 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme02_article_02 .more_btn', 0.6, {"opacity": 0});
    }
    const theme02_article03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme02_article_03",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme02_article03(),
        onLeaveBack: () => leave_theme02_article03(),
      }
    });
    function enter_theme02_article03() {
      TweenMax.to('.theme .theme02_article_03 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme02_article_03 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme02_article_03 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme02_article03() {
      TweenMax.to('.theme .theme02_article_03 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme02_article_03 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme02_article_03 .more_btn', 0.6, {"opacity": 0});
    }
    
    // theme03_article
    const theme03_article = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme03_article_01",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme03_article(),
        onLeaveBack: () => leave_theme03_article(),
      }
    });
    function enter_theme03_article() {
      TweenMax.to('.theme .theme03_article_01 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme03_article_01 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme03_article_01 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme03_article() {
      TweenMax.to('.theme .theme03_article_01 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme03_article_01 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme03_article_01 .more_btn', 0.6, {"opacity": 0});
    }
    const theme03_article02 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme03_article_02",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme03_article02(),
        onLeaveBack: () => leave_theme03_article02(),
      }
    });
    function enter_theme03_article02() {
      TweenMax.to('.theme .theme03_article_02 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme03_article_02 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme03_article_02 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme03_article02() {
      TweenMax.to('.theme .theme03_article_02 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme03_article_02 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme03_article_02 .more_btn', 0.6, {"opacity": 0});
    }
    const theme03_article03 = gsap.timeline({
      y: () => wh,
      scrollTrigger: {
        trigger: ".theme .theme03_article_03",
        start: "top center+=20%",
        end: "+=200%",
        scrub: 1,
        onEnter: () => enter_theme03_article03(),
        onLeaveBack: () => leave_theme03_article03(),
      }
    });
    function enter_theme03_article03() {
      TweenMax.to('.theme .theme03_article_03 .article_img', 0.6, {"opacity": 1, y: 0});
      TweenMax.to('.theme .theme03_article_03 .article_txt', 0.6, {"opacity": 1, x: 0});
      TweenMax.to('.theme .theme03_article_03 .more_btn', 0.6, {delay: .2, "opacity": 1});
    }
    function leave_theme03_article03() {
      TweenMax.to('.theme .theme03_article_03 .article_img', 0.6, {"opacity": 0, y: 100});
      TweenMax.to('.theme .theme03_article_03 .article_txt', 0.6, {"opacity": 0, x: 100});
      TweenMax.to('.theme .theme03_article_03 .more_btn', 0.6, {"opacity": 0});
    }
  }
});


/* script.js */
$(document).ready(function(){
  $(".slide-items").slick({
    autoplay:true,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "22%",
    dots: true,
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const fadeInElements = document.querySelectorAll('.fade-in-element');
  const delayedGroups = document.querySelectorAll('.delayed-group');
  const offset = 200; // 下からのオフセット値（ピクセル）

  const onScroll = () => {
      const windowBottom = window.innerHeight + window.scrollY;

      fadeInElements.forEach(element => {
          if (!element.classList.contains('delayed')) {
              const elementTop = element.getBoundingClientRect().top + window.scrollY;
              if (windowBottom - offset > elementTop) {
                  element.classList.add('visible');
              }
          }
      });

      delayedGroups.forEach(group => {
          const groupTop = group.getBoundingClientRect().top + window.scrollY;
          if (windowBottom - offset > groupTop) {
              const delayedElements = group.querySelectorAll('.delayed');
              delayedElements.forEach((element, index) => {
                  setTimeout(() => {
                      element.classList.add('visible');
                  }, index * 200); // 200msの遅延をかけます。この値は調整可能です。
              });
          }
      });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
});





