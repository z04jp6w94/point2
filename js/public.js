/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
// ahover
  var is_iPad = navigator.userAgent.match(/iPad/i) != null;
  if(is_iPad) {
    $('header .menu_boxs .menu_box .nav_boxs > div').each (function () {
      var $that = $(this);
      $that.click(function () {
        $that.siblings().removeClass('ahover');
        $(this).toggleClass('ahover');
      });
    });
  }

  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });

  $('label.m_login').click (function () {
    $(this).toggleClass ('s');
  });

  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });
  $('.xx').click (function () {
    $(this).toggleClass ('a');
  });
  $('#header_banner').each (function () {
    var $that = $(this).attr ('data-i', 1);
    var l = $that.find ('>.header_banner').length;

    setInterval (function () {
      var i = parseInt ($that.attr ('data-i'), 10);
      $that.attr ('data-i', ++i > l ? 1 : i);
    }, 6500);
  });

  $('.login_boxs .icon-x').click (function () {
    if ($('.login_boxs').toggleClass ('show').hasClass ('show'))
      $("body").css({"overflow": "hidden"});
    else
      $("body").css({"overflow": "auto"});
  });

  $('.login-btn').click (function () {
    if ($('.login_boxs').toggleClass ('show').hasClass ('show'))
      $("body").css({"overflow": "hidden"});
    else
      $("body").css({"overflow": "auto"});
  });
  
  $('.login_boxs .show-reg').click (function () {
    $('.login_boxs').toggleClass ('show-reg');
    // $("body").toggleClass ('fixbg');
  });
  $('.login_boxs .show-psw').click (function () {
    $('.login_boxs').toggleClass ('show-psw');
    // $("body").toggleClass ('fixbg');
  });
  $('header .lang_boxs .lang_box>div').click (function () {
    $(this).toggleClass ('a');
  });

  $('.login_boxs .show-pswed').click (function () {
    $('.login_boxs').toggleClass ('show-pswed');
    // $("body").toggleClass ('fixbg');
  });

  $('.other .bg, .footer_banner .image, .header_banner .image, ._ic').imgLiquid ();


  // $(".login_boxs").on("show", function () {
  //    $("body").addClass("fixbg");
  //   }).on("icon-x", function () {
  //    $("body").removeClass("fixbg");
  // });
  $('.more').click (function () {
    $(this).remove();
  });
  
  $('.only1').click (function () {
    if (!$(this).find('input[type="checkbox"]').prop('checked'))
      return false;
  });
  $('.fq > div:not(:first-child)').each (function (i) {
    var j = 0;
    var $that = $(this);
    $that.find('>*').each(function () {
      if($(this).is('b')) j++;
      if ($(this).is('i'))
      $(this).addClass ('i' + i + j);
    });
    
    $that.find('i').click (function () {
      var c = $(this).attr('class');
      $that.find('i.' + c).removeClass('f');
      $(this).addClass('f');
    });
  });
  
  $('.pa').each (function () {
    var j = parseInt($(this).data('val'), 10);
    
    var $spans = $(this).next().find('span');
    $spans.css({'width': 'calc(100% * ' + (j / 100) + ')'});
    // for(i = 0; i < j; i++)
    //   $spans.eq(i).addClass ('a');
  });

  $('.stars i').click (function () {
    $(this).parent().find('i').attr('class', 'icon-star-empty');
    $(this).prevAll().andSelf().attr('class', 'icon-star-full');
  });

});
