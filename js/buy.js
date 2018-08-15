/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  $('.pay .pay_boxs a').click (function () {
    $(this).addClass ('active').parent ().siblings ().find ('a').removeClass ('active');
    $('.pay .pay_info').removeClass ('show').eq ($(this).parent ().index ()).addClass ('show');
  });
});