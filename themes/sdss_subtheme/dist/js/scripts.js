!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([,function(e,t,n){"use strict";n.r(t);n(2)},function(e,t){window.Drupal.behaviors.sdss_subtheme={attach:function(){!function(e){e(".su-brand-bar,.su-masthead").wrapAll('<div class="fixed-header">');var t=e("#block-sdss-subtheme-branding").attr("class");e(".fixed-header").addClass(t),(e(".su-lockup--option-a")||e(".su-lockup--option-b"))&&e(".su-brand-bar__container").append('<span><a class="sdss-brand-bar__text" href="https://stanford.edu">Stanford</a>  <a class="sdss-brand-bar__text" href="https://sustainability.stanford.edu/">Doeer School of Sustainability</a></span>')}(jQuery)},detach:function(){}}}]);
//# sourceMappingURL=scripts.js.map