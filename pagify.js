/*
 * Pagify - A jquery plugin for effortlessly creating single page web sites.
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2011, Chris Polis
 */

(function($) {
  $.fn.pagify = function(options) { 
    var self = this;
  
    this.defaults = {
      pages: [],
      default: null,
      animation: 'show',
      cache: false
    };
    this.settings = $.extend({}, this.defaults, options);

    this.switchPage = function(page) {
      page = page || window.location.hash.replace('#','');
      $(self).load(page+'.html');
    }

    // Respond to hash changes
    $(window).bind('hashchange', function() {
      self.switchPage();
    });

    // Load initial page - current hash or default page
    if(window.location.hash) self.switchPage();
    else if(this.settings.default) self.switchPage(this.settings.default);
  };
  
})(jQuery);
