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
      'pages': [],
      'default': null,
      'animation': 'show',
      'animationSpeed': 'normal',
      'animationOut': 'hide',
      'animationOutSpeed': 0,
      'onChange': function (page) {},
      'cache': false
    };
    this.settings = $.extend({}, this.defaults, options);
    if (self.settings.cache) {
      self.pages = {};
    }

    // Run after loading if caching, otherwise run immediately
    var runAfterLoading = function() {
      self.switchPage = function(page) {
        // Page is selected from: passed in value, window.location, default
        if(!page) {
          page = window.location.hash.replace('#','') || self.settings['default'];
        }

        if(self.settings.cache) {
          if (self.pages[page] == undefined) {
            // Fetch and cache content
            fetchPageContentAndShow(page);
          }
          else {
            // Load page content from cache
            $(self)[self.settings.animationOut](self.settings.animationOutSpeed, function() {
              $(self).html(self.pages[page])[self.settings.animation](self.settings.animationSpeed);
            })
            self.settings.onChange(page);
          }
        }
        else {
          // Fetch page content
          fetchPageContentAndShow(page);
        }
      }

      var fetchPageContentAndShow = function(page) {
        $.get(page+'.html', function(content) {
          $(self)[self.settings.animationOut](self.settings.animationOutSpeed, function() {
            $(self).html(content)[self.settings.animation](self.settings.animationSpeed);
          })
          self.settings.onChange(page);
          if (self.settings.cache) {
            self.pages[page] =  content;
          }
        }, 'text');
      };

      // Respond to hash changes
      $(window).bind('hashchange', function() {
        self.switchPage();
      });

      // Load initial page - current hash or default page
      if(window.location.hash) self.switchPage();
      else if(self.settings['default']) self.switchPage(self.settings['default']);
    };

    // loadPage
    runAfterLoading();
  };

})(jQuery);
