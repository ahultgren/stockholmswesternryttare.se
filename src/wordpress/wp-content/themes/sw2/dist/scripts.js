jQuery(function ($) {
  $('.slideshow a').lighty({
    baseZ : 5,
    prefix: 'lighty-',
    data: function () {
      return '';
    },
    itemTemplate: function(data){
      return {
        markup: '<img src="' + data.attr('href') + '" />'
      };
    }
  });
});
;/*
 * This is not the real lighty, just a quick special-hack version
 */

(function($) {
  // Class
  function Lighty(){
    // Private vars
    this.settings = {
        baseZ: 5,
        data: function(){
          return {
            jsonposts: 1
          };
        },
        prefix: 'lighty-',
        itemTemplate: function(data, bg){
          var contents = '<img src="' + data[0].the_post_thumbnail[0] + '" />' + '<p class="desc">' + data[0].the_excerpt + '</p>';
          
          return {
            markup: contents,
            width: data[0].the_post_thumbnail[1],
            height: data[0].the_post_thumbnail[2]
          };
        }
      };

    var settings = this.settings,
      bg,
      container,
      current,
      selector,
      contentContainer,
      next,
      prev;

    // Private methods
    var showLightbox = function(){
      var that = $(this),
          content;

      // Save this as currently lightboxed
      current = that;

      content = settings.itemTemplate(that);

      // Swap from loader to content
      contentContainer.empty().append(content.markup);

      container.removeClass('hidden');
      bg.removeClass('hidden');

      return this;
    },
    hideLightbox = function(){
      bg.addClass('hidden');
      contentContainer.empty();
      container.addClass('hidden');
      current = undefined;
    },
    toNext = function (e) {
      var newBox = selector[selector.index(current) + 1];

      if(e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if(!newBox) {
        newBox = selector[0];
      }

      showLightbox.call(newBox);
    },
    toPrev = function (e) {
      var newBox = selector[selector.index(current) - 1];

      if(e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if(!newBox) {
        newBox = selector[selector.length - 1];
      }

      showLightbox.call(newBox);
    };

    // Public methods
    this.init = function(options){
      selector = this;

      // Extend default settings
      $.extend(settings, options);

      // Prepare bakground
      bg = $(document.createElement('div'))
        .attr('id', settings.prefix + 'bg')
        .addClass('hidden')
        .appendTo('body')
        .click(function(){
          hideLightbox();
        });

      // Prepare lightbox container
      container = $(document.createElement('div'))
        .attr('id', settings.prefix + 'container')
        .addClass('hidden')
        .appendTo('body')
        .click(function(){
          hideLightbox();
        });

      // Arrows
      prev = $(document.createElement('div'))
        .addClass('prev')
        .appendTo(container)
        .on('click', toPrev);

      next = $(document.createElement('div'))
        .addClass('next')
        .appendTo(container)
        .on('click', toNext);

      // Content container
      contentContainer = $(document.createElement('div'))
        .attr('id', settings.prefix + 'content')
        .appendTo(container);

      // Pressing right and left keys
      $(window).keydown(function(e){
        var newBox;

        if( current ){
          if( e.which === 39 ){
            // Right
            e.preventDefault();
            toNext();
          }
          else if( e.which === 37 ){
            // Left
            e.preventDefault();
            toPrev();
          }
          else if(e.which === 27) {
            hideLightbox();
          }
        }
      });

      // Prepare each lightboxed item
      return this.each(function(){
        $(this).click(function(e){
          e.preventDefault();
          showLightbox.call(this);
        });
      });
    };
  }

  // Make things accessible
  $.fn.lighty = function(method) {
    // Don't act on absent elements
    if( this.length ){
      // Method calling logic
      var lighty = new Lighty();

      if( lighty[method] ){
        return lighty[method].apply(this, Array.prototype.slice.call(arguments, 1));
      }
      else if( typeof method === 'object' || !method ){
        return lighty.init.apply(this, arguments);
      } 
      else {
        $.error('Method ' +  method + ' does not exist on jQuery.lighty');
      }
    }
  };
}(jQuery));