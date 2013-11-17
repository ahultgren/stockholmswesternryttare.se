<article <?php post_class(); ?>>
  <header>
    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <span class="when"><?php the_date(); ?></span>
  </header>
  <?php get_template_part('parts/content/content'); ?>
  <footer>
    <?php get_template_part('parts/content/slideshow'); ?>
  </footer>
</article>
