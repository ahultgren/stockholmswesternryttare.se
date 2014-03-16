<article <?php post_class('col-md-8 push-md-4'); ?>>
  <?php if(!has_post_thumbnail()) : ?>
  <header>
    <h1 class="title"><?php the_title(); ?></h1>
  </header>
  <?php endif; ?>
  <?php get_template_part('parts/content/content'); ?>
</article>
