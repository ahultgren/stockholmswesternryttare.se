<?php get_header(); ?>

<section class="main row global-width clearfix" id="main">
  <?php
  $news = new WP_Query(array(
    'post_type' => 'post',
    'posts_per_page' => 5
  ));
  ?>

  <div class="news col-xs-12 col-md-8">
    <?php the_loop($news, array('parts/list', 'post')); ?>
  </div>

  <?php get_sidebar(); ?>
</section>

<?php get_footer(); ?>
