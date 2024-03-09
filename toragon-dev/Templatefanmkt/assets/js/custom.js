function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  var mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
  layoutChangedCallback(mql.matches);
}
  
let tl1 = gsap.timeline();
tl1.to(".preloader", { duration: 1, delay: .5, xPercent: 100, })
  .from("h1 span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1')
  .from(".hero_phone", { duration: 3, x: 100, delay: 1, opacity: 0 }, '<-.5')
  .from("header nav", { duration: 2, y: -10, opacity: 0, ease: "expo", }, '<.5')
  .from(".book_a_catalog", { duration: 2, x: 10, opacity: 0, ease: "expo", }, '<.25')
  .from(".hero_scroll", { duration: 2, y: 10, opacity: 0, ease: "expo", }, '<.25');

$(document).ready(function () {

  installMediaQueryWatcher("(min-width: 767px)", function (matches) {

    var myFullpage = new fullpage('#fullpage', {
      onLeave: function (index, nextIndex, direction) {

        var section = $('#' + nextIndex.item.id);

        if (nextIndex.anchor == 01) {

          if ($('.book_a_catalog').hasClass("hideDesktop")) {
            $('.book_a_catalog').removeClass('hideDesktop');
          }

          $('header').removeClass('sticky');

          if (matches) {
            var tl = gsap.timeline();
            tl.from("h1 span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1');
            tl.from(".hero_phone", { duration: 3, x: 100, delay: 1, opacity: 0 }, '<-.5');
          }

        } else if (nextIndex.anchor == 02) {

          if ($('.book_a_catalog').hasClass("hideDesktop")) {
            $('.book_a_catalog').removeClass('hideDesktop');
          }

          $('header').addClass('sticky');

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#san_pham h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });

            tl.from(".foam", { duration: 2, x: -100, delay: .5, opacity: 0, ease: "expo", }, '<-.5');
            tl.from(".iphone", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", }, '<-.5');
            mySplitText1 = new SplitText("#whatisit_slide1 .slider_text", { type: "words,chars" });
            chars = mySplitText1.chars;
            tl.from(chars, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
            mySplitText2 = new SplitText("#whatisit_slide1 .slider_text_back", { type: "chars" });
            chars2 = mySplitText2.chars;
            tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");

            var tl = gsap.timeline();
            tl.from(".casquette", { duration: 2, x: -100, delay: .5, opacity: 0, ease: "expo", }, '<-.5');
            mySplitText1 = new SplitText("#whatisit_slide3 .slider_text", { type: "words,chars" });
            chars = mySplitText1.chars;
            tl.from(chars, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
            mySplitText2 = new SplitText("#whatisit_slide3 .slider_text_back", { type: "chars" });
            chars2 = mySplitText2.chars;
            tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
          }

        } else if (nextIndex.anchor == 03) {

          if ($('.book_a_catalog').hasClass("hideDesktop")) {
            $('.book_a_catalog').removeClass('hideDesktop');
          }

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#san_pham_moi_new h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
            tl.from("#san_pham_moi_new .aStats", { duration: 1, opacity: 0, scale: 1.5, x: -10, stagger: 0.25 }, '<-.5');
          }

          const randomX = random(1, 10);
          const randomY = random(1, 10);
          const randomDelay = random(0, 1);
          const randomTime = random(3, 5);
          const randomTime2 = random(5, 10);
          const randomAngle = random(-10, 10);
          const cans = gsap.utils.toArray('.float');
          cans.forEach(can => {
            gsap.set(can, {
              x: randomX(-1),
              y: randomX(1),
              rotation: randomAngle(-1)
            });
            moveX(can, 1);
            moveY(can, -1);
            rotate(can, 1);
          });
          function rotate(target, direction) {
            gsap.to(target, randomTime2(), {
              rotation: randomAngle(direction),
              delay: randomDelay(),
              ease: Sine.easeInOut,
              onComplete: rotate,
              onCompleteParams: [target, direction * -1]
            });
          }

          function moveX(target, direction) {
            gsap.to(target, randomTime(), {
              x: randomX(direction),
              ease: Sine.easeInOut,
              onComplete: moveX,
              onCompleteParams: [target, direction * -1]
            });
          }
          function moveY(target, direction) {
            gsap.to(target, randomTime(), {
              y: randomY(direction),
              ease: Sine.easeInOut,
              onComplete: moveY,
              onCompleteParams: [target, direction * -1]
            });
          }
          function random(min, max) {
            const delta = max - min;
            return (direction = 1) => (min + delta * Math.random()) * direction;
          }

        } else if (nextIndex.anchor == 04) {

          if ($('.book_a_catalog').hasClass("hideDesktop")) {
            $('.book_a_catalog').removeClass('hideDesktop');
          }

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#gioi_thieu_page h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
            tl.from("#gioi_thieu_page .aBox", { duration: 1, opacity: 0, scale: 1.5, x: -10, stagger: 0.25 }, '<-.5');
            mySplitText3 = new SplitText(".whysms_text_back", { type: "chars" });
            chars3 = mySplitText3.chars;
            tl.from(chars3, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
          }

        } else if (nextIndex.anchor == 05) {

          if ($('.book_a_catalog').hasClass("hideDesktop")) {
            $('.book_a_catalog').removeClass('hideDesktop');
          }

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#dieu_khoang_1 h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
            tl.from("#dieu_khoang_1 h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
            tl.from("#dieu_khoang_1 p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
            tl.from("#dieu_khoang_1 .overlay_img2", { duration: 2, y: 100, opacity: 0, ease: "back", }, "-=3");
            mySplitText4 = new SplitText("#dieu_khoang_1 .movin_text_back", { type: "words,chars" });
            chars4 = mySplitText4.chars;
            tl.from(chars4, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=6");
          }

          $('li[data-menuanchor=05] a').removeClass('aActive');

        } else if (nextIndex.anchor == 06) {

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#dieu_khoang_2 h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
            tl.from("#dieu_khoang_2 h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
            tl.from("#dieu_khoang_2 p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
            tl.from("#dieu_khoang_2 .overlay_img1", { duration: 2, y: -100, opacity: 0, ease: "back", }, "-=3");
            tl.from("#dieu_khoang_2 .overlay_img2", { duration: 2, y: 100, opacity: 0, ease: "back", }, "-=3");
            mySplitText5 = new SplitText("#dieu_khoang_2 .movin_text_back", { type: "words,chars" });
            chars5 = mySplitText5.chars;
            tl.from(chars5, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=6");
          }

          $('li[data-menuanchor=05] a').addClass('aActive');

        } else if (nextIndex.anchor == 07) {


          if (matches) {
            var tl = gsap.timeline();
            tl.from("#dieu_khoang_3 h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
            tl.from("#dieu_khoang_3 h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
            tl.from("#dieu_khoang_3 p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
            tl.from("#dieu_khoang_3 .overlay_img1", { duration: 2, y: -100, opacity: 0, ease: "back", }, "-=3");
            tl.from("#dieu_khoang_3 .overlay_img2", { duration: 2, y: 100, opacity: 0, ease: "back", }, "-=3");
            mySplitText5 = new SplitText("#dieu_khoang_3 .movin_text_back", { type: "words,chars" });
            chars5 = mySplitText5.chars;
            tl.from(chars5, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=6");
          }

          $('li[data-menuanchor=05] a').addClass('aActive');

        } else if (nextIndex.anchor == 08) {

          if ($('.book_a_catalog').hasClass("hideDesktop")) {
            $('.book_a_catalog').removeClass('hideDesktop');
          }

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#chinhsach h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
            tl.from("#chinhsach h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
            tl.from("#chinhsach p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
            tl.from("#chinhsach .btn-blue", { duration: 2, y: -100, opacity: 0, ease: "expo", }, "-=2");
            mySplitText6 = new SplitText("#chinhsach .light_bg_text_top", { type: "words,chars" });
            chars6 = mySplitText6.chars;
            tl.from(chars6, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=4");
            mySplitText7 = new SplitText("#chinhsach .light_bg_text_bottom", { type: "words,chars" });
            chars7 = mySplitText7.chars;
            tl.from(chars7, { duration: 1, opacity: 0, x: 200, rotation: 20, ease: "back", stagger: 0.1 }, "-=4");
          }

          $('li[data-menuanchor=05] a').removeClass('aActive');

        } else if (nextIndex.anchor == 09) {

          $('.book_a_catalog').addClass('hideDesktop');

          if (matches) {
            if (!section.hasClass('animation_done')) {
              var tl = gsap.timeline();
              tl.from("#lien_he h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo" });
              tl.from("#lien_he h4", { duration: 2, x: -100, opacity: 0, ease: "expo", stagger: 0.25 }, "-=2");
              tl.from("#lien_he .aField", { duration: 2, x: 50, opacity: 0, ease: "expo", stagger: 0.25 }, "-=2");
              tl.from("#lien_he button", { duration: 2, y: 50, opacity: 0, ease: "expo", stagger: 0.25 }, "-=2");
              section.addClass('animation_done');
              return tl;
            }
          }


        } else if (nextIndex.anchor == 10) {



        }
      },
      licenseKey: 'B97CB530-41974E0A-8D077045-30A618F4',
      afterLoad: function (anchorLink, index) {
        history.pushState(null, null, " ");
      },
      responsiveWidth: 767,
      scrollOverflowReset: true,
      scrollOverflow: true,
      normalScrollElements: 'footer',
      verticalCentered: false,
      menu: '#mainmenu',
      anchors: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
      slidesNavigation: false,
      autoScrolling: true,
      scrollHorizontally: true,
      scrollHorizontallyKey: 'dGhlZmFuZW5nYWdlbWVudC5jb21fMHpHYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1ZGR2',
      onSlideLeave: function (section, origin, destination, direction) {

        var slideID = destination.item.id;

        if (slideID == 'whatisit_slide1') {

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#" + slideID + " .foam", { duration: 2, x: -100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
            tl.from("#" + slideID + " .iphone", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
            mySplitText1 = new SplitText("#" + slideID + " .slider_text", { type: "words,chars" });
            chars = mySplitText1.chars;
            tl.from(chars, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
            mySplitText2 = new SplitText("#" + slideID + " .slider_text_back", { type: "chars" });
            chars2 = mySplitText2.chars;
            tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
          }

          $('.whatisit_slider_num > div.num_content').removeClass('active');
          $('.whatisit_slider_num > div.num_content:first-child').addClass('active');

        } else if (slideID == 'whatisit_slide2') {

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#" + slideID + " .carres", { duration: 2, x: -100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
            mySplitText1 = new SplitText("#" + slideID + " .slider_text", { type: "words,chars" });
            chars = mySplitText1.chars;
            tl.from(chars, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
            mySplitText2 = new SplitText("#" + slideID + " .slider_text_back", { type: "chars" });
            chars2 = mySplitText2.chars;
            tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
          }

          $('.whatisit_slider_num > div.num_content').removeClass('active');
          $('.whatisit_slider_num > div.num_content:nth-child(2)').addClass('active');

        } else if (slideID == 'whatisit_slide3') {

          if (matches) {
            var tl = gsap.timeline();
            tl.from("#" + slideID + " .casquette", { duration: 2, x: -100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
            mySplitText1 = new SplitText("#" + slideID + " .slider_text", { type: "words,chars" });
            chars = mySplitText1.chars;
            tl.from(chars, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
            mySplitText2 = new SplitText("#" + slideID + " .slider_text_back", { type: "chars" });
            chars2 = mySplitText2.chars;
            tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
          }

          $('.whatisit_slider_num > div.num_content').removeClass('active');
          $('.whatisit_slider_num > div.num_content:nth-child(3)').addClass('active');

        }

      },
      afterSlideLoad: function (section, origin, destination, direction) {
        history.pushState(null, null, " ");
      },
    });

  });

  $('.burger').click(
    function (e) {
      e.preventDefault();
      $('header nav').toggleClass('open');
      $('.burger').toggleClass('open');
      $('html').toggleClass('noscroll');
    },
  );

  $('header nav li a').click(
    function () {
      //e.preventDefault();   
      $('header nav').removeClass('open');
      $('.burger').removeClass('open');
      $('html').removeClass('noscroll');
      $('header').addClass('sticky');
    },
  );

});   