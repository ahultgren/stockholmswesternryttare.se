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

  // Calendar
  $.ajax({
    url: wp.url + '/evenemang',
    data: {
      jsonposts: 1,
    },
    dataType: 'json',
    success: function (data) {
      var events = {},
          today = new Date();

      $.each(data, function () {
        var event = this,
            date = event.the_date.split(' ')[0];

        events[date] = {
          url: event.the_permalink
        };
      });

      console.log($('.responsive-calendar'));
      $('.responsive-calendar').responsiveCalendar({
        time: today.getFullYear() + '-' + (today.getMonth() + 1),
        translateMonths: ['januari', 'februari', 'mars', 'april', 'maj' ,'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
        events: events,
        onActiveDayHover: function(events) {
          console.log($(this), $(this).data);
        }
      });
    }
  });
});
