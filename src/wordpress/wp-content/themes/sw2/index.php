<?php get_header(); ?>

<section class="main row global-width clearfix" id="main">
  <?php if(is_archive() || is_home()) {
    the_loop(array('parts/list', get_post_type()));
  }
  else {
    the_loop(array('parts/single', get_post_type()));
  } ?>
</section>

<?php get_footer(); ?>
