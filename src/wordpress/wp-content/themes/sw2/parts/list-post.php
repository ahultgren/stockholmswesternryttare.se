<article <?php post_class(is_front_page() ? '' : 'col-md-8 push-md-4'); ?>>
  <header>
    <h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <span class="when"><?php the_time('j F, Y'); ?></span>
  </header>
  <?php get_template_part('parts/content/content'); ?>
  <footer>
    <?php get_template_part('parts/content/slideshow'); ?>
  </footer>
</article>
<?php if(is_single()) {
  comments_template();
}
