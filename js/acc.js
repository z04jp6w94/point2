/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  $('figure').imgLiquid ({ verticalAlign:'center' });
  $('#acc-info').each (function () {
    var $that = $(this);
    var ori = $that.find ('#edit-acc').text ();
    
    $that.find ('#edit-acc').click (function () {
      if ($that.hasClass ('edit')) {
        $that.removeClass ('edit');
        $(this).text (ori);

        $that.find ('.data > div').each (function () {
          var $week = $(this);
          var $span = $week.find ('>span');
          var $input = $span.find ('>input');
          if ($input.length) {
            var val = $input.val ();
            $span.text (val);
          } else {
            var $i = $span.find ('>i');
            if ($i.length) {
              $i.each (function () {
                var v = $(this).find ('>input').val ();
                $(this).empty ().text (v);
              });
            }
          }
        });
      } else {
        $that.addClass ('edit');
        $(this).text ('儲存');
        $(this).addClass ('e_ac');

        $that.find ('.data > div').each (function () {
          var $week = $(this);
          var $span = $week.find ('>span');
          var text = $span.text ();
          var $i = $span.find ('i');
          
          if ($i.length) {
            $i.each (function (i) {
              var val = $(this).text ();
              $(this).empty ().append (
                $('<input />').val (val).attr ('name', $week.attr ('class') + '[' + i + ']')
              );
            });
          } else {
            if ($span.hasClass ('select'))
              $span.empty ().append (
                  $('<select />').append ($('<option />').text (text)).attr ('name', $week.attr ('class'))
                );
            else
            $span.empty ().append (
              $('<input />').val (text).attr ('name', $week.attr ('class'))
              );

          }

        });
      }
    });
  });

});