/**
 * @file
 * Logo Animation.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Animation for Labor logo.
   */
  Drupal.behaviors.laborLogoAnimation = {
    attach: function (context) {
        $(function() {
            var offset = $("#logobar").offset();
            var topPadding = 15;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#logobar").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#logobar").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });
    }
  };


})(jQuery, this, Drupal, drupalSettings);
