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

    // Run after loading if caching, otherwise run immediately
    var runAfterLoading = function() {
      self.switchPage = function(page) {
        // Page is selected from: passed in value, window.location, default
        if(!page) {
          page = window.location.hash.replace('#','') || self.settings['default'];
        }

        if(self.settings.cache) {
          // Load page content from cache
          $(self)[self.settings.animationOut](self.settings.animationOutSpeed, function() {
            $(self).html(self.pages[page])[self.settings.animation](self.settings.animationSpeed);
          })
          self.settings.onChange(page);
        }
        else {
          // Fetch page content
          $.get(page+'.html', function(content) {
            $(self)[self.settings.animationOut](self.settings.animationOutSpeed, function() {
              $(self).html(content)[self.settings.animation](self.settings.animationSpeed);
            })
            self.settings.onChange(page);
          }, 'text');
        }
      }

      // Respond to hash changes
			// Adds support for additional hash parameters in the URL, like a lightbox
      $(window).bind('hashchange', function() {
				var comparisonHash = location.hash.split('#')[1];
				var pagesArray = self.settings.pages;
				
				for(var i = 0;i<pagesArray.length;i++) {
					if( comparisonHash === pagesArray[i] ) {
						self.SwitchPage();
						break;
					}
				}
      });

      // Load initial page - current hash or default page
      if(window.location.hash) self.switchPage();
      else if(self.settings['default']) self.switchPage(self.settings['default']);
    };

    // Cache pages
    if(self.settings.cache) {
      self.pages = {};
      var pageLoads = self.settings.pages.length;
      $.each(self.settings.pages, function(ndx, page) {				
        $.get(page + 'html', function(content) {
          self.pages[page] = content;
          pageLoads--;
          //alert(pageLoads);
          if(!pageLoads) runAfterLoading();
        }, 'text');
      });
    } 
    else runAfterLoading();
  };
	
})(jQuery);
