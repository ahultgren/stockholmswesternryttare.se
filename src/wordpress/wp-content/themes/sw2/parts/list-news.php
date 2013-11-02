<article <?php post_class(); ?>>
  <header>
    <h2><?php the_title(); ?></h2>
    <p class="when"><?php the_date(); ?></p>
  </header>
  <?php get_template_part('parts/content/content'); ?>
  <footer>
    <?php get_template_part('parts/content/slideshow'); ?>
  </footer>
</article>
