<?php get_header(); ?>

<section class="main col-xs-12 global-width" id="main">
  <?php the_loop(array('parts/single', 'page')); ?>
</section>

<?php get_footer(); ?>
