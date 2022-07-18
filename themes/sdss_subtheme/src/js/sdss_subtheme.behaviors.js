/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

export default {

  // Attach Drupal Behavior.
  attach (context, settings) {
    // console.log("Attached.");


    (function ($) {
      /* ==========================================
        scrollTop() >= 300
        Should be equal the the height of the header
      ========================================== */
      $(window).scroll(function(){
        if ($(window).scrollTop() >= 30) {
            $('header.su-masthead').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
      });

    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
