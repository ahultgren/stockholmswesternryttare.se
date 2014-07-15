<?php
/*
Template Name: All Terrain Trail Sidebar
*/

get_header();
?>

<section class="main row global-width clearfix" id="main">
  <?php the_loop(array('parts/single', get_post_type())); ?>
  <?php get_sidebar('all_terrain_trail'); ?>
</section>

<?php get_footer(); ?>
