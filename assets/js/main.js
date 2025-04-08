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
    autoplaySpeed: 27000,
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: false,
    arrows: true,
    slidesToShow: 1,
    dotsClass: "main-visual__slider-dots",
  })
  .on("afterChange", function(event, slick, currentSlide, nextSlide) {
    switch (currentSlide){
      case 0:
        // 1枚目のスライド
        $(this).slick("slickSetOption", "autoplaySpeed", 27000);
        break;
      default:
        // その他のスライド
        $(this).slick("slickSetOption", "autoplaySpeed", 3000);
        break;
    }
  });

  const $images = $('.main-visual-top-js img');
  let current = 0;
  const imageCount = $images.length;

  // 初回の切り替えを1.5秒後にスタート
  setTimeout(() => {
    // その後は通常通り繰り返し
    setInterval(() => {
      $images.eq(current).removeClass('active');
      current = (current + 1) % imageCount;
      $images.eq(current).addClass('active');
    }, 4000); // 切り替え間隔も1.5秒
  }, 0); // ← これが開始までの遅延


  const $images2 = $('.main-visual-bottom-js img');
  let current2 = 0;
  const imageCount2 = $images2.length;

  setInterval(() => {
    $images2.eq(current2).removeClass('active');
    current2 = (current2 + 1) % imageCount2;
    $images2.eq(current2).addClass('active');
  }, 4000);

  

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

  // トップページのパララックス　三和の役割（PC）


  // スマホスクロール時に .contents で止める
  おっしゃる通り、スマホのフリック操作などでは、意図せずスクロールが行き過ぎてしまうことがありますね。せっかく .contents が画面上部で止まっても、すぐに解除されてしまうのは困ります。

  この問題を解決するために、いくつかアプローチが考えられます。
  
  考えられる対策:
  
  固定解除の条件に少し余裕を持たせる: 内部コンテンツの最下部に達した「直後」ではなく、少しスクロールバックした時点で解除するように条件を調整する。
  固定時間を設ける: .contents が画面上部に固定された後、一定時間経過するまでは解除しないようにする（先ほどの例でご紹介した方法の応用）。
  スローダウン効果やバウンド効果を検討する: CSSやJavaScriptで、スクロールの勢いを弱めたり、最下部で少しバウンドするような効果を加えることで、行き過ぎを抑制する。
  ここでは、1番目の「固定解除の条件に少し余裕を持たせる」方法でコードを修正してみます。
  
  JavaScript
  
  $(function() {
    let isFixed = false;
    const $window = $(window);
    const $contents = $('.contents');
    const releaseOffset = 50; // 解除のオフセット値（ピクセル）
  
    function checkScroll() {
      const scrollTop = $window.scrollTop();
      const contentsTop = $contents.offset().top;
  
      if (scrollTop >= contentsTop && !isFixed) {
        // .contentsが画面上部に達したら固定
        $contents.css({
          position: 'fixed',
          top: 0,
          left: $contents.offset().left,
          width: $contents.outerWidth()
        });
        isFixed = true;
        $window.scrollTop(contentsTop); // スクロールを停止
      } else if (scrollTop < contentsTop && isFixed) {
        // .contentsが画面上部から離れたら固定解除
        resetContentsStyle();
        isFixed = false;
      }
  
      if (isFixed) {
        // .contentsが固定されている間、内部コンテンツのスクロールを監視
        const contentsScrollTop = $window.scrollTop() - contentsTop;
        const contentsScrollHeight = $contents[0].scrollHeight;
        const contentsClientHeight = $contents[0].clientHeight;
  
        // 内部コンテンツがほぼ最後までスクロールされたら固定解除（少し手前で解除）
        if (contentsScrollTop + contentsClientHeight >= contentsScrollHeight - releaseOffset) {
          resetContentsStyle();
          isFixed = false;
        }
      }
    }
  
    function resetContentsStyle() {
      $contents.css({
        position: 'static',
        top: '',
        left: '',
        width: ''
      });
    }
  
    $window.on('scroll touchmove', checkScroll);
  });

  // スライドメニューにアコーディオン
  $('.slide-menu__top-link-content').hide(); // 初めに非表示
  $('.top-link-js').on('click', function () {
    $(this).next('.slide-menu__top-link-content').slideToggle();
  });


  // トップに戻るボタン
  $('.footer__scroll-btn').click(function (e) {
    e.preventDefault(); // もしaタグなどの場合、デフォルトの挙動を防ぐ
    $('html, body').animate({
      scrollTop: 0
    }, 800); // 0.5秒でトップへ
  });

  $(window).bind('scroll', function () {
    scrolled = $(window).scrollTop();
    weight1 = 0.1;
    weight2 = 0.1;
    $('.parallax3').css('top', 800 - scrolled * weight1 + 'px');
    $('.parallax4').css('top', 1000 - scrolled * weight2 + 'px');
  });


  // パララックス
  $(window).on('scroll', function () {
    var scrollPosition = $(this).scrollTop();

    // パララックスを適用したい要素の動きを設定
    $('.parallax1').css('transform', 'translateY(' + scrollPosition * 0.4 + 'px)');
    $('.parallax2').css('transform', 'translateY(' + scrollPosition * 0.1 + 'px)');
  });


  // スマホの時はスクロールさせない
  $(".open-btn-js02").click(function () {
    if ($(window).width() <= 768) { // スマホサイズ
      const body = $("body");
      const isLocked = body.css("overflow") === "hidden";

      if (isLocked) {
        body.css({
          height: "",
          overflow: ""
        });
      } else {
        body.css({
          height: "100%",
          overflow: "hidden"
        });
      }
    }
  });

  // 大切なお知らせスライダー
  const $slides = $('.main-visual-info-js');
  const $slide = $('.main-visual__info-right-item');
  const slideCount = $slide.length;
  const slideWidth = $slide.outerWidth();

  let currentIndex = 0;

  // 最初と最後をつなぐためにクローンを追加
  $slides.append($slide.first().clone());

  setInterval(function() {
    currentIndex++;
    $slides.css('transform', 'translateX(' + (-slideWidth * currentIndex) + 'px)');

    // 最後のクローンに到達したら
    if (currentIndex === slideCount) {
      setTimeout(function() {
        // アニメーションなしでリセット
        $slides.css('transition', 'none');
        $slides.css('transform', 'translateX(0)');
        currentIndex = 0;

        // 再び transition を有効に
        setTimeout(function() {
          $slides.css('transition', 'transform 0.5s ease');
        }, 50);
      }, 500); // スライドの transition 時間
    }
  }, 3000);
})


