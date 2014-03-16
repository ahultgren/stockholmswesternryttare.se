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
