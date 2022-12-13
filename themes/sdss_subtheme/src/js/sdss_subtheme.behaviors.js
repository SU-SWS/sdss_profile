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

      $('.su-brand-bar,.su-masthead').wrapAll('<div class="fixed-header">');

      var sdss_logo_classes = $('#block-sdss-subtheme-branding').attr('class');
      $('.fixed-header').addClass(sdss_logo_classes);

      $('.su-brand-bar__container').append('<span><a class="sdss-brand-bar__text" href="https://sustainability.stanford.edu/">Stanford</a> | <a class="sdss-brand-bar__text" href="https://stanford.edu">Doeer School of Sustainability</a></span>');

    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
