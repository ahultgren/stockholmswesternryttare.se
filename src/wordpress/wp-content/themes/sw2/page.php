<?php get_header(); ?>

<section class="main row global-width clearfix" id="main">
  <?php the_loop(array('parts/single', 'page')); ?>
</section>

<?php get_footer(); ?>
