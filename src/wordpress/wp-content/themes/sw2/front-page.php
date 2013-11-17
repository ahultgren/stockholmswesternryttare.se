<?php get_header(); ?>

<section class="main row global-width clearfix" id="main">
  <?php the_loop(array('parts/single', 'page'));

  $news = new WP_Query(array(
    'post_type' => 'post',
    'posts_per_page' => 5
  ));

  $events = new WP_Query(array(
    'post_type' => 'event',
    'post_status' => 'future',
    'posts_per_page' => 5,
    'order' => 'ASC'
  )); ?>

  <div class="news col-xs-12 col-md-8">
    <?php the_loop($news, array('parts/list', 'post')); ?>
  </div>
  <div class="events col-xs-12 col-md-4">
    <h2>Evenemang</h2>
    <div class="responsive-calendar">
      <div class="controls">
          <a class="prev" data-go="prev"></a>
          <h4 class="timeInfo"></h4>
          <a class="next" data-go="next"></a>
      </div><hr/>
      <div class="day-headers">
        <div class="day header">Mån</div>
        <div class="day header">Tis</div>
        <div class="day header">Ons</div>
        <div class="day header">Tors</div>
        <div class="day header">Fre</div>
        <div class="day header">Lör</div>
        <div class="day header">Sön</div>
      </div>
      <div class="days" data-group="days">
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
