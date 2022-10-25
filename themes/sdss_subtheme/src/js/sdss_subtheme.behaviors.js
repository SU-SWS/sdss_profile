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

      let headerheight = $('.fixed-header').outerHeight();
      $('.dialog-off-canvas-main-canvas').css('margin-top', headerheight + 'px');

      var prevWidth = window.width;
      var observer = new ResizeObserver(function(entries) {
      const width = entries[0].borderBoxSize?.[0].inlineSize;
      if (typeof width === 'number' && width !== prevWidth ) {
        prevWidth = width;

        if (width <= 991) {
          $('.dialog-off-canvas-main-canvas').css('margin-top', '');
        } else if (width >= 991) {
          $('.dialog-off-canvas-main-canvas').css('margin-top', headerheight + 'px');
        }

        console.log(width);
      }
      })
      observer.observe(window.document.body);


    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
