/*!
  # Responsive Celendar widget script
  # by w3widgets
  #
  # Author: Lukasz Kokoszkiewicz
  #
  # Copyright © w3widgets 2013 All Rights Reserved
*/
(function(){(function(c){var d,b,a;d=function(f,e){this.$element=f;this.options=e;this.weekDays=["sun","mon","tue","wed","thu","fri","sat","sun"];this.time=new Date();this.currentMonth=this.initialDraw();return null};d.prototype={addLeadingZero:function(e){if(e<10){return"0"+e}else{return""+e}},applyTransition:function(e,f){e.css("transition",f);e.css("-ms-transition","-ms-"+f);e.css("-moz-transition","-moz-"+f);return e.css("-webkit-transition","-webkit-"+f)},applyBackfaceVisibility:function(e){e.css("backface-visibility","hidden");e.css("-ms-backface-visibility","hidden");e.css("-moz-backface-visibility","hidden");return e.css("-webkit-backface-visibility","hidden")},applyTransform:function(f,e){f.css("transform",e);f.css("-ms-transform",e);f.css("-moz-transform",e);return f.css("-webkit-transform",e)},splitDateString:function(g){var e,i,h,f;h=g.split("-");f=parseInt(h[0]);i=parseInt(h[1]-1);e=parseInt(h[2]);return h={year:f,month:i,day:e}},initialDraw:function(){var e;if(!this.options.time){e={year:this.time.getFullYear(),month:this.time.getMonth()}}else{e=this.splitDateString(this.options.time)}return this.drawDays(e.year,e.month)},editDays:function(g){var h,f,j,i,e;e=[];for(h in g){j=g[h];this.options.events[h]=g[h];i=this.splitDateString(h);f=this.$element.find('[data-year="'+i.year+'"][data-month="'+(i.month+1)+'"][data-day="'+i.day+'"]').parent(".day");f.removeClass("active");f.find(".badge").remove();f.find("a").removeAttr("href");if(this.currentMonth===i.month||this.options.activateNonCurrentMonths){e.push(this.makeActive(f,j))}else{e.push(void 0)}}return e},clearDays:function(k){var h,g,j,i,f,e;e=[];for(i=0,f=k.length;i<f;i++){h=k[i];delete this.options.events[h];j=this.splitDateString(h);g=this.$element.find('[data-year="'+j.year+'"][data-month="'+(j.month+1)+'"][data-day="'+j.day+'"]').parent(".day");g.removeClass("active");g.find(".badge").remove();e.push(g.find("a").removeAttr("href"))}return e},clearAll:function(){var g,k,h,j,f,e;this.options.events={};k=this.$element.find('[data-group="days"] .day');e=[];for(h=j=0,f=k.length;j<f;h=++j){g=k[h];c(g).removeClass("active");c(g).find(".badge").remove();e.push(c(g).find("a").removeAttr("href"))}return e},setMonth:function(e){var f;f=this.splitDateString(e);return this.currentMonth=this.drawDays(f.year,f.month)},prev:function(){if(this.currentMonth-1<0){this.time.setYear(this.time.getFullYear()-1);this.time.setMonth(11)}else{this.time.setMonth(this.currentMonth-1)}this.currentMonth=this.drawDays(this.time.getFullYear(),this.time.getMonth());return null},next:function(){if(this.currentMonth+1>11){this.time.setYear(this.time.getFullYear()+1);this.time.setMonth(0)}else{this.time.setMonth(this.currentMonth+1)}this.currentMonth=this.drawDays(this.time.getFullYear(),this.time.getMonth());return null},addOthers:function(e,f){if(typeof f==="object"){if((f.number!=null)&&(f.badgeClass!=null)){e.append(c("<span></span>").html(f.number).addClass("badge").addClass(f.badgeClass))}if(f.url){e.find("a").attr("href",f.url)}}return e},makeActive:function(f,k){var h,l,g,j,e;if(k){if(k["class"]){h=k["class"].split(" ");for(g=j=0,e=h.length;j<e;g=++j){l=h[g];f.addClass(l)}}else{f.addClass("active")}f=this.addOthers(f,k)}return f},getDaysInMonth:function(e,f){return new Date(e,f+1,0).getDate()},drawDay:function(o,p,j,f,h){var n,k,m,l,e,g;l=c("<div></div>").addClass("day");k=new Date();k.setHours(0,0,0,0);e=new Date(p,j-1,f);if(e.getTime()<k.getTime()){g="past"}else{if(e.getTime()===k.getTime()){g="today"}else{g="future"}}l.addClass(this.weekDays[h%7]);l.addClass(g);m=p+"-"+this.addLeadingZero(j)+"-"+this.addLeadingZero(f);if(f<=0||f>o){n=new Date(p,j-1,f);f=n.getDate();j=n.getMonth()+1;p=n.getFullYear();l.addClass("not-current").addClass(g);if(this.options.activateNonCurrentMonths){m=p+"-"+this.addLeadingZero(j)+"-"+this.addLeadingZero(f)}}l.append(c("<a>"+f+"</a>").attr("data-day",f).attr("data-month",j).attr("data-year",p));if(this.options.monthChangeAnimation){this.applyTransform(l,"rotateY(180deg)");this.applyBackfaceVisibility(l)}l=this.makeActive(l,this.options.events[m]);return this.$element.find('[data-group="days"]').append(l)},drawDays:function(o,u){var p,s,f,j,w,n,r,t,h,x,y,l,q,k,m,e,g,v;q=this;k=new Date(o,u);p=k.getMonth();y=k.getMonth()+1;e=k.getFullYear();k.setDate(1);r=this.options.startFromSunday?k.getDay()+1:k.getDay()||7;h=this.getDaysInMonth(o,u);if(this.options.monthChangeAnimation){m=0;j=this.$element.find('[data-group="days"] .day');for(t=g=0,v=j.length;g<v;t=++g){s=j[t];w=t*0.01;this.applyTransition(c(s),"transform .5s ease "+w+"s");this.applyTransform(c(s),"rotateY(180deg)");this.applyBackfaceVisibility(c(s));m=(w+0.1)*1000}}f=2;if(this.options.allRows){x=42}else{l=Math.ceil((r-(f-1)+h)/7);x=l*7}this.$element.find(".timeInfo").html(k.getFullYear()+" "+this.options.translateMonths[k.getMonth()]);n=function(){var i;q.$element.find('[data-group="days"]').empty();i=f-r;t=q.options.startFromSunday?0:1;while(i<x-r+f){q.drawDay(h,e,y,i,t);i=i+1;t=t+1}w=function(){var A,z;j=q.$element.find('[data-group="days"] .day');for(t=A=0,z=j.length;A<z;t=++A){s=j[t];q.applyTransition(c(s),"transform .5s ease "+(t*0.01)+"s");q.applyTransform(c(s),"rotateY(0deg)")}if(q.options.onDayClick){q.$element.find('[data-group="days"] .day a').click(function(){return q.options.onDayClick.call(this,q.options.events)})}if(q.options.onDayHover){q.$element.find('[data-group="days"] .day a').hover(function(){return q.options.onDayHover.call(this,q.options.events)})}if(q.options.onActiveDayClick){q.$element.find('[data-group="days"] .day.active a').click(function(){return q.options.onActiveDayClick.call(this,q.options.events)})}if(q.options.onActiveDayHover){return q.$element.find('[data-group="days"] .day.active a').hover(function(){return q.options.onActiveDayHover.call(this,q.options.events)})}};if(q.options.monthChangeAnimation){return setTimeout(w,0)}};setTimeout(n,m);return p}};c.fn.responsiveCalendar=function(g,i){var h,f,e;if(i==null){i=void 0}f=c.extend({},c.fn.responsiveCalendar.defaults,typeof g==="object"&&g);e={next:"next",prev:"prev",edit:"editDays",clear:"clearDays",clearAll:"clearAll"};h=function(k){var j;f=c.metadata?c.extend({},f,k.metadata()):f;k.data("calendar",(j=new d(k,f)));if(f.onInit){f.onInit.call(this)}return k.find("[data-go]").click(function(){if(c(this).data("go")==="prev"){j.prev()}if(c(this).data("go")==="next"){j.next()}if(f.onMonthChange){return f.onMonthChange.call(this)}})};return this.each(function(){var k,j;k=c(this);j=k.data("calendar");if(!j){h(k)}else{if(typeof g==="string"){if(e[g]!=null){j[e[g]](i)}else{j.setMonth(g)}}else{if(typeof g==="number"){j.jump(Math.abs(g)+1)}}}return null})};c.fn.responsiveCalendar.defaults={translateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],events:{},time:void 0,allRows:true,startFromSunday:false,activateNonCurrentMonths:false,monthChangeAnimation:true,onInit:void 0,onDayClick:void 0,onDayHover:void 0,onActiveDayClick:void 0,onActiveDayHover:void 0,onMonthChange:void 0};a=c('[data-spy="responsive-calendar"]');if(a.length){b={};if((a.data("translate-months"))!=null){b.translateMonths=a.data("translate-months").split(",")}if((a.data("time"))!=null){b.time=a.data("time")}if((a.data("all-rows"))!=null){b.allRows=a.data("all-rows")}if((a.data("start-from-sunday"))!=null){b.startFromSunday=a.data("start-from-sunday")}if((a.data("activate-non-current-months"))!=null){b.activateNonCurrentMonths=a.data("activate-non-current-months")}if((a.data("month-change-animation"))!=null){b.monthChangeAnimation=a.data("month-change-animation")}return a.responsiveCalendar(b)}})(jQuery)}).call(this);;jQuery(function ($) {
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