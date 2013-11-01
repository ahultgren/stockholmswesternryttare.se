<?php get_header(); ?>

<section class="main" id="main">
  <?php while(have_posts()) : the_post(); ?>
    <article <?php post_class(); ?>>
      <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>
    </article>
  <?php endwhile; ?>
</section>

<?php get_footer(); ?>
