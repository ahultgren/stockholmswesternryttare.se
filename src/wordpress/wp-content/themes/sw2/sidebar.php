<section class="sidebar col-xs-12 col-md-4">
  <?php
  if(is_front_page()) {
    the_loop(array('parts/sidebar_top'));
  }

  $events = new WP_Query(array(
    'post_type' => 'event',
    'post_status' => 'publish',
    'posts_per_page' => 10,
    'order' => 'ASC',
    'date_query' => array(
      'after' => date('Y-m-d'),
    ),
  ));
  ?>

  <aside class="events">
    <h2 class="title">Evenemang</h2>
    <?php if($events->post_count) : ?>
    <ul>
      <?php the_loop($events, array('parts/sidebar')); ?>
    </ul>
    <?php else : ?>
      <p>
        Det finns inga kommande evenemang just nu.
      </p>
    <?php endif; ?>
  </aside>
</section>
