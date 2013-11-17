<?php get_header(); ?>

<section class="main row global-width clearfix" id="main">
  <?php the_loop(array('parts/single', get_post_type())); ?>
</section>

<?php get_footer(); ?>
