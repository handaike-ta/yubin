$(function(){
  $('.slick').slick({
    dots:true,
    centerMode: true,
		centerPadding: '30px',
  });
  $('.slick2').slick({
    dots:true
  });
  $('.slick3').slick({
    slidesToShow: 3,
    centerMode:true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.black').hide();
  $('.modal-wrap').hide();
  $('.six-topics ul li a').click(function(){
    $('.modal-wrap').slideUp();
    $('.six-topics ul li a').css('border-bottom','solid 0px white');
    $('.six-topics ul li a').css('margin-bottom','0');
    var number = $('.six-topics ul li a').index($(this));
    console.log($('.six-topics ul li a').index($(this)));
    if($(this).hasClass('show')){
      $('.show').removeClass('show');
      $('.black').hide();
    }else{
      $('.show').removeClass('show');
      $(this).addClass('show');
      $('.modal-wrap').eq(number).slideDown();
      $('.black').show();
      $(this).css('border-bottom','solid 5px #FDB8B8');
      $(this).css('margin-bottom','-5px');
      return false;
    }
  });
  $('.modal').click(function(event) {
    if(!$(event.target).closest('.modal-wrap a').length) {
      $('.show').removeClass('show');
      $('.black').hide();
      $('.modal-wrap').slideUp();
      $('.six-topics ul li a').css('border-bottom','solid 0px white');
      $('.six-topics ul li a').css('margin-bottom','0');
    }else {

    }
  });
  $('.black').click(function(){
    $('.show').removeClass('show');
    $('.black').hide();
    $('.modal-wrap').slideUp();
    $('.six-topics ul li a').css('border-bottom','solid 0px white');
    $('.six-topics ul li a').css('margin-bottom','0');
  });
  $('.news-left li').eq(0).css('display','none');
  $('.news-left li').eq(1).css('display','flex');
  $('.news-left li').eq(1).addClass('selected');
  $('.news-left li').eq(8).css('display','none');
  $('.news-left li').eq(9).css('display','flex');
  $('.news-left li').eq(9).addClass('selected');
  $('.news-left li').click(function(){
    console.log($('.news-left li').index($(this)));
    if($(this).hasClass('selected')){
    }else{
      $('.border').css('border-top','solid 1px #D2D2D2');
      $('.news-left ul').css('border-bottom','solid 2px #D2D2D2');
      $('.selected').removeClass('selected');
      $('.news-left li:nth-of-type(even)').css('display','none');
      $('.news-left li:nth-of-type(odd)').css('display','flex');
      $(this).css('display','none');
      $('.news-left li').eq($('.news-left li').index($(this)) + 1).css('display','flex');
      $('.news-left li').eq($('.news-left li').index($(this)) + 1).addClass('selected');
      $('.border').hide();
      $('.border').eq($('.news-left li').index($(this)) / 2).css('display','flex');
      if($('.news-left li').index($(this)) + 1 === 3){
        $('.border').css('border-top','solid 1px #CC0000');
        $('.news-left ul').css('border-bottom','solid 2px #CC0000');
      };
      if($('.news-left li').index($(this)) + 1 === 5){
        $('.border').css('border-top','solid 1px #009900');
        $('.news-left ul').css('border-bottom','solid 2px #009900');
      };
      if($('.news-left li').index($(this)) + 1 === 7){
        $('.border').css('border-top','solid 1px #000099');
        $('.news-left ul').css('border-bottom','solid 2px #000099');
      };
      if($('.news-left-sm li').index($(this)) + 1 === 11){
        $('.border').css('border-top','solid 1px #CC0000');
        $('.news-left ul').css('border-bottom','solid 2px #CC0000');
      };
      if($('.news-left-sm li').index($(this)) + 1 === 13){
        $('.border').css('border-top','solid 1px #009900');
        $('.news-left ul').css('border-bottom','solid 2px #009900');
      };
      if($('.news-left-sm li').index($(this)) + 1 === 15){
        $('.border').css('border-top','solid 1px #000099');
        $('.news-left ul').css('border-bottom','solid 2px #000099');
      };
    };
  });
  $('.six-topics-two ul li a').click(function(){
    $('.modal-wrap').slideUp();
    $('.six-topics-two ul li a').css('border-bottom','solid 0px white');
    $('.six-topics-two ul li a').css('margin-bottom','0');
    var number = $('.six-topics-two ul li a').index($(this));
    console.log($('.six-topics-two ul li a').index($(this)));
    if($(this).hasClass('show')){
      $('.show').removeClass('show');
      $('.black').hide();
    }else{
      $('.show').removeClass('show');
      $(this).addClass('show');
      $('.modal-wrap').eq(number).slideDown();
      $('.black').show();
      $(this).css('border-bottom','solid 5px #FDB8B8');
      $(this).css('margin-bottom','-5px');
      return false;
    }
  });
  $('.modal').click(function(event) {
    if(!$(event.target).closest('.modal-wrap a').length) {
      $('.show').removeClass('show');
      $('.black').hide();
      $('.modal-wrap').slideUp();
      $('.six-topics-two ul li a').css('border-bottom','solid 0px white');
      $('.six-topics-two ul li a').css('margin-bottom','0');
    }else {

    }
  });
  $('.black').click(function(){
    $('.show').removeClass('show');
    $('.black').hide();
    $('.modal-wrap').slideUp();
    $('.six-topics-two ul li a').css('border-bottom','solid 0px white');
    $('.six-topics-two ul li a').css('margin-bottom','0');
  });
  $('.news-left li').eq(0).css('display','none');
  $('.news-left li').eq(1).css('display','flex');
  $('.news-left li').eq(1).addClass('selected');
  $('.news-left li').click(function(){
    if($(this).hasClass('selected')){
    }else{
      $('.border').css('border-top','solid 1px #D2D2D2');
      $('.news-left ul').css('border-bottom','solid 2px #D2D2D2');
      $('.selected').removeClass('selected');
      $('.news-left li:nth-of-type(even)').css('display','none');
      $('.news-left li:nth-of-type(odd)').css('display','flex');
      $(this).css('display','none');
      $('.news-left li').eq($('.news-left li').index($(this)) + 1).css('display','flex');
      $('.news-left li').eq($('.news-left li').index($(this)) + 1).addClass('selected');
      $('.border').hide();
      $('.border').eq($('.news-left li').index($(this)) / 2).css('display','flex');
      if($('.news-left li').index($(this)) + 1 === 3){
        $('.border').css('border-top','solid 1px #CC0000');
        $('.news-left ul').css('border-bottom','solid 2px #CC0000');
      };
      if($('.news-left li').index($(this)) + 1 === 5){
        $('.border').css('border-top','solid 1px #009900');
        $('.news-left ul').css('border-bottom','solid 2px #009900');
      };
      if($('.news-left li').index($(this)) + 1 === 7){
        $('.border').css('border-top','solid 1px #000099');
        $('.news-left ul').css('border-bottom','solid 2px #000099');
      };
    };
  });
  var topBtn = $('.top');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  var header_top = $('.six-topics-two');
  header_top.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      header_top.fadeIn();
      $('.modal').addClass('modal-second');
    } else {
      header_top.fadeOut();
      $('.modal').removeClass('modal-second');
    }
  });
  var topBtn = $('.top');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  var topsmBtn = $('.top-sm');
  topsmBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      topsmBtn.fadeIn();
    } else {
      topsmBtn.fadeOut();
    }
  });
  topsmBtn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  var group = $('.group');
    //navの位置
    var groupTop = group.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加
        if (winTop + 200 >= groupTop) {
            $('.top').addClass('fixed')
        } else if (winTop + 200 <= groupTop) {
            $('.top').removeClass('fixed')
        }
    });
    var group = $('.group');
      //navの位置
      var groupTop = group.offset().top;
      //スクロールするたびに実行
      $(window).scroll(function () {
          var winTop = $(this).scrollTop();
          //スクロール位置がnavの位置より下だったらクラスfixedを追加
          if (winTop - 1300 >= groupTop) {
              $('.top-sm').addClass('relative')
          } else if (winTop -1300 <= groupTop) {
              $('.top-sm').removeClass('relative')
          }
      });
      $('.modal-sm li:not(:first-child)').hide();
      $('.ab > li:first-child').click(function(){
        $('.modal-sm ul li:not(:first-child)').slideUp();
        if($(this).hasClass('active')){
          $(this).html('企業情報<i class="fas fa-plus-circle"></i>');
          $('.active').removeClass('active');
          $('.shadow').css('height','103%');
        }else{
          $(this).html('企業情報<i class="fas fa-minus-circle"></i>');
          $('.active').removeClass('active');
          $(this).addClass('active');
          $('.ab > li').slideDown();
          $('.shadow').css('height','138%');
        }
      });
      $('.cd > li:first-child').click(function(){
        $('.modal-sm ul li:not(:first-child)').slideUp();
        if($(this).hasClass('active')){
          $(this).html('グループ各社情報<i class="fas fa-plus-circle"></i>');
          $('.active').removeClass('active');
          $('.shadow').css('height','103%');
        }else{
          $(this).html('グループ各社情報<i class="fas fa-minus-circle"></i>');
          $('.active').removeClass('active');
          $(this).addClass('active');
          $('.cd > li').slideDown();
          $('.shadow').css('height','138%');
        }
      });
      $('.ef > li:first-child').click(function(){
        $('.modal-sm ul li:not(:first-child)').slideUp();
        if($(this).hasClass('active')){
          $(this).html('株式・投資家のみなさまへ<i class="fas fa-plus-circle"></i>');
          $('.active').removeClass('active');
          $('.shadow').css('height','103%');
        }else{
          $(this).html('株式・投資家のみなさまへ<i class="fas fa-minus-circle"></i>');
          $('.active').removeClass('active');
          $(this).addClass('active');
          $('.ef > li').slideDown();
          $('.shadow').css('height','138%');
        }
      });
      $('.gh > li:first-child').click(function(){
        $('.modal-sm ul li:not(:first-child)').slideUp();
        if($(this).hasClass('active')){
          $(this).html('ニュースリリース<i class="fas fa-plus-circle"></i>');
          $('.active').removeClass('active');
          $('.shadow').css('height','103%');
        }else{
          $(this).html('ニュースリリース<i class="fas fa-minus-circle"></i>');
          $('.active').removeClass('active');
          $(this).addClass('active');
          $('.gh > li').slideDown();
          $('.shadow').css('height','138%');
        }
      });
      $('.ij > li:first-child').click(function(){
        $('.modal-sm ul li:not(:first-child)').slideUp();
        if($(this).hasClass('active')){
          $(this).html('採用情報<i class="fas fa-plus-circle"></i>');
          $('.active').removeClass('active');
          $('.shadow').css('height','103%');
        }else{
          $(this).html('採用情報<i class="fas fa-minus-circle"></i>');
          $('.active').removeClass('active');
          $(this).addClass('active');
          $('.ij > li').slideDown();
          $('.shadow').css('height','138%');
        }
      });
      $('.kl > li:first-child').click(function(){
        $('.modal-sm ul li:not(:first-child)').slideUp();
        if($(this).hasClass('active')){
          $(this).html('採用情報<i class="fas fa-plus-circle"></i>');
          $('.active').removeClass('active');
          $('.shadow').css('height','103%');
        }else{
          $(this).html('採用情報<i class="fas fa-minus-circle"></i>');
          $('.active').removeClass('active');
          $(this).addClass('active');
          $('.kl > li').slideDown();
          $('.shadow').css('height','138%');
        }
      });
      $('.modal-sm').css('margin-left','100%');
      $('.red-border').on('click','i',function(){
        if($('.red-border').hasClass('show')){
          $('.red-border').removeClass('show');
          $('.modal-sm').animate({
            'margin-left':'100%'
          },200);
          console.log(1);
          $('.red-border').html('<a><img src="https://www.japanpost.jp/images/logo.gif"></a><i class="fas fa-bars bar"></i>');
        }else{
          $('.red-border').addClass('show');
          $('.modal-sm').animate({
            'margin-left':'0%'
          },200);
          console.log(1);
            $('.red-border').html('<a><img src="https://www.japanpost.jp/images/logo.gif"></a><i class="fas fa-times times"></i>');
          }
      });
});
