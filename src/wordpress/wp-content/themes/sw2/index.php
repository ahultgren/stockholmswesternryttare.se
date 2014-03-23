<?php get_header(); 
global $query_string;
$args;
parse_str($query_string, $args);

if(is_archive('event')) {
  $args = array_merge($args, array(
    'date_query' => array(
      'before' => date('Y-m-d')
    )
  ));
  query_posts($args);
}
?>

<section class="main row global-width clearfix" id="main">
  <?php if(is_archive() || is_home()) {
    the_loop(array('parts/list', get_post_type()));
  }
  else {
    the_loop(array('parts/single', get_post_type()));
  } ?>
</section>

<?php get_footer(); ?>
