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
      onChange: function (page) {},
      cache: false
    };
    this.settings = $.extend({}, this.defaults, options);

    // Run after loading if caching, otherwise run immediately
    var runAfterLoading = function() {
      self.switchPage = function(page) {
        page = page || window.location.hash.replace('#','');
     
        // Load page content from cache 
        if(self.settings.cache) {
          $(self).hide().html(self.pages[page])[self.settings.animation]();
          self.settings.onChange(page);
 
        // Fetch page content
        } else {
          $.get(page+'.html', function(content) {
            $(self).hide().html(content)[self.settings.animation]();
            self.settings.onChange(page);
          }, 'text');      
        }
      }
    
      // Respond to hash changes
      $(window).bind('hashchange', function() {
        self.switchPage();
      });

      // Load initial page - current hash or default page
      if(window.location.hash) self.switchPage();
      else if(self.settings.default) self.switchPage(self.settings.default);

    };

    // Cache pages
    if(self.settings.cache) {
      self.pages = {};
      var pageLoads = self.settings.pages.length;
      $.each(self.settings.pages, function(ndx, page) {
        $.get(page+'.html', function(content) {
          self.pages[page] = content;
          pageLoads--;
          if(!pageLoads) runAfterLoading();
        }, 'text');
      });
    } else runAfterLoading();
  };
  
})(jQuery);
