<?php get_header(); ?>

<section class="main col-xs-12 global-width clearfix" id="main">
  <?php the_loop(array('parts/list', 'post')); ?>
</section>

<?php get_footer(); ?>
