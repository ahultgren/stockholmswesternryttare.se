<article <?php post_class('col-md-8 push-md-4'); ?>>
  <header>
    <h1><?php the_title(); ?></h1>
    <span class="when"><?php the_date('j/m Y'); ?></span>
  </header>
  <?php get_template_part('parts/content/content'); ?>
</article>
