'use strict';
(function ($) {

  $('body').on('submit', 'form', function (e) {
    e.preventDefault();
    var formData = $(this).serializeArray();
    $.ajax({
      type: 'POST',
      url: '../mail.php',
      data: formData,
      beforeSend: function () {
        $('button[type="submit"]').attr('disabled', true);
      },
      success: function success(data) {
        // console.log(111111111);
        console.log('success', formData);
        $('.modal').modal('hide');
        window.location.href = '../thanks.php';
      },
      error: function error(data) {
        // console.log('error: ' + formData);
        $('.modal').modal('hide');
        window.location.href = '../thanks.php';
      }
    });
    return false;

  });

  $('input[type="tel"]').inputmask({
    "mask": "(099) 999-99-99"
  });

   $('input[type="tel"], input[type="tel"], input[type="tel"]').on('change keyup keydown', function() {
    var myVar = $(this).val();
    var digit = ('' + myVar)[2];
    if (digit == '0') {
      $(this).val(' ');
      $(this).blur().focus();
    }
    $('button[type="submit"]').attr('disabled', 'disabled');
    var re = new RegExp("_$");
    if (!re.test(myVar)) {
      $(this).removeClass('error-phone');
      $('button[type="submit"]').removeAttr('disabled');
      $('button[type="submit"]').removeAttr('disabled').find('.shine-button__el').addClass('animate');
    } else {
      $(this).addClass('error-phone');
    }
  });

})(jQuery);
