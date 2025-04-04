$(function () {
  //グローバル　ホバーでメニュー表示
  $('.hover-menu-js,.header__global-child-wrap').mouseover(function (e) {
    $('.header__global-child-wrap').addClass("active");
  })
  $('.hover-menu-js,.header__global-child-wrap').mouseout(function (e) {
    $('.header__global-child-wrap').removeClass("active");
  })


  // ヘッダーメニューactiveの付け替え
  $(".open-btn-js").on("click", function () {
    $(".search-menu").toggleClass("active");
  });
  $(".open-btn-js02").on("click", function () {
    $(".slide-menu").toggleClass("active");
  });


  // 画像の切り替え
  $(".open-btn-js").on("click", function () {
    let img1 = $(".open-btn-js-img");
    let img2 = $(".open-btn-js02-img");

    let currentSrc1 = img1.attr("src");
    let currentSrc2 = img2.attr("src");

    let newSrc1 = (currentSrc1 === "assets/img/top/search-btn.png") ? "assets/img/top/search-btn-batsu.png" : "assets/img/top/search-btn.png";
    let newSrc2 = (currentSrc2 === "assets/img/top/hamburger-btn.png") ? "assets/img/top/hamburger-btn-gray.png" : "assets/img/top/hamburger-btn.png";

    img1.attr("src", newSrc1);
    img2.attr("src", newSrc2);
  });

  // 画像の切り替え
  $(".open-btn-js02").on("click", function () {
    let img1 = $(".open-btn-js-img");
    let img2 = $(".open-btn-js02-img");

    let currentSrc1 = img1.attr("src");
    let currentSrc2 = img2.attr("src");

    let newSrc1 = (currentSrc1 === "assets/img/top/search-btn.png") ? "assets/img/top/search-btn-gray.png" : "assets/img/top/search-btn.png";
    let newSrc2 = (currentSrc2 === "assets/img/top/hamburger-btn.png") ? "assets/img/top/hamburger-btn-batsu.png" : "assets/img/top/hamburger-btn.png";

    img1.attr("src", newSrc1);
    img2.attr("src", newSrc2);
  });


  // クリックでさわれない
  $(".open-btn-js").on("click", function () {
    $(this).toggleClass("active");

    // .activeがあるとき、.open-btn-js02を無効化
    if ($(this).hasClass("active")) {
      $(".open-btn-js02").addClass("disabled");
    } else {
      $(".open-btn-js02").removeClass("disabled");
    }
  });

  $(".open-btn-js02").on("click", function () {
    $(this).toggleClass("active");

    // .activeがあるとき、.open-btn-js02を無効化
    if ($(this).hasClass("active")) {
      $(".open-btn-js").addClass("disabled");
    } else {
      $(".open-btn-js").removeClass("disabled");
    }
  });



  // スライドメニュー　アコーディオン
  $('.slide-menu__toggle-title').click(function () {
    $(this).toggleClass('open');
    $(this).next().slideToggle(200).toggleClass('active');
  });


  // ヘッダー隠れる動き

  // let startPos = 0;
  // let winScrollTop = 0;
  // const Header = $('.header');
  // $(window).on('scroll', function () {
  //   winScrollTop = $(this).scrollTop();
  //   if (winScrollTop >= startPos && winScrollTop > 100) { // ここにコードを追加
  //     $(Header).addClass('active');
  //   } else {
  //     $(Header).removeClass('active');
  //   }
  //   startPos = winScrollTop;
  // });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });


  // メインビジュアル　スライダー
  $(".top-slider-js").slick({
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: false,
    arrows: true,
    slidesToShow: 1,
    dotsClass: "main-visual__slider-dots",

  });

  // バナー　スライダー
  $(".external-bnr-js").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear', // アニメーション
    speed: 500, // フェードアニメーションの速度設定
    dots: false,
    arrows: true,
    slidesToShow: 1,

  });

  //営業所スライダー
  $(".single-office__slider").slick({
    autoplay: false,
    arrows: false,
    fade: true,
    asNavFor: ".single-office__thumbnail",
  });
  $(".single-office__thumbnail").slick({
    slidesToShow: 3,
    asNavFor: ".single-office__slider",
    focusOnSelect: true,
  });

  //スクロースしたら表示
  $(window).scroll(function () {
    $('.fadein-anime,.fadein-anime02,.fadein-anime03,.fadein-anime04').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });

  // PC インフォメーション　タブ切り替え
  $(".top-news__tab-item").on("click", function () {
    var i = $(this).index();
    $(".top-news__tab-item").removeClass("active");
    $(".top-news__box-item").removeClass("active");
    $(".top-news__tab-item").eq(i).addClass("active");
    $(".top-news__box-item").eq(i).addClass("active");
  });

  // PC ニュースページ　タブ切り替え
  $(".page-newsrelease__tab-item").on("click", function () {
    var i = $(this).index();
    $(".page-newsrelease__tab-item").removeClass("active");
    $(".page-newsrelease__box-item").removeClass("active");
    $(".page-newsrelease__tab-item").eq(i).addClass("active");
    $(".page-newsrelease__box-item").eq(i).addClass("active");
  });

  // トップページのパララックス
  $(window).scroll(function () {
    $('.contents div').each(function () {
      boxNum = $(this).attr("class"),
        scrollTop = $(window).scrollTop();
      areaTop = $(this).offset().top;
      if (scrollTop > areaTop) {
        $('.images .' + boxNum).addClass('active');
      } else {
        $('.images .' + boxNum).removeClass('active');
      }
    });
  });

  // スライドメニューにアコーディオン
  $('.slide-menu__top-link-content').hide(); // 初めに非表示
  $('.top-link-js').on('click', function(){
      $(this).next('.slide-menu__top-link-content').slideToggle();
  });


  // トップに戻るボタン
  $('.footer__scroll-btn').click(function(e) {
    e.preventDefault(); // もしaタグなどの場合、デフォルトの挙動を防ぐ
    $('html, body').animate({ scrollTop: 0 }, 800); // 0.5秒でトップへ
  });
 


})