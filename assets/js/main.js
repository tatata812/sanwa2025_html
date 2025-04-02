$(function () {
  //グローバル　ホバーでメニュー表示
  $('.hover-menu-js,.header__global-child-wrap').mouseover(function (e) {
    $('.header__global-child-wrap').addClass("active");
  })
  $('.hover-menu-js,.header__global-child-wrap').mouseout(function (e) {
    $('.header__global-child-wrap').removeClass("active");
  })


  // PCハンバーガーメニュー
  $(".open-btn").click(function () {
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".slide-menu").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".slide-menu__btn-wrap").click(function () {
    $(".slide-menu").toggleClass("open-menu"); //ナビゲーションにクラスを付与
    $(".open-btn").toggleClass("active");
  });

  // スライドメニュー　アコーディオン
  $('.slide-menu__toggle-title').click(function () {
    $(this).toggleClass('open');
    $(this).next().slideToggle(200).toggleClass('active');
  });

  // メインビジュアル　スライダー
  $(".top-slider-js").slick({
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: true,
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
  $(".top-information__tab-item").on("click", function () {
    var i = $(this).index();
    $(".top-information__tab-item").removeClass("active");
    $(".top-information__box-item").removeClass("active");
    $(".top-information__tab-item").eq(i).addClass("active");
    $(".top-information__box-item").eq(i).addClass("active");
  });

  // PC ニュースページ　タブ切り替え
  $(".page-newsrelease__tab-item").on("click", function () {
    var i = $(this).index();
    $(".page-newsrelease__tab-item").removeClass("active");
    $(".page-newsrelease__box-item").removeClass("active");
    $(".page-newsrelease__tab-item").eq(i).addClass("active");
    $(".page-newsrelease__box-item").eq(i).addClass("active");
  });

  $(".footer__scroll-btn").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


})