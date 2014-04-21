<?php
add_theme_support('post-thumbnails');
set_post_thumbnail_size(250, 167, true);
add_image_size('super-header', 1600, 800);
add_image_size('lightbox', 1600, 800);
add_image_size('featured-post', 600, 300, true);

add_theme_support('automatic-feed-links');
add_theme_support('html5', array(
  'search-form', 'comment-form', 'comment-list',
));

// Menu
register_nav_menus(array(
  'primary' => 'Main menu'
));

add_action('init', 'custom_init');
function custom_init () {
  $labels = array(
    'name' => __('Events'),
    'singular_name' => __('Event'),
    'add_new' => __('Add New'),
    'add_new_item' => __('Add New Event'),
    'edit_item' => __('Edit Event'),
    'new_item' => __('New Event'),
    'all_items' => __('All Events'),
    'view_item' => __('View Event'),
    'search_items' => __('Search Events'),
    'not_found' => 'No Events found',
    'not_found_in_trash' => __('No Events found in Trash'), 
    'parent_item_colon' => __(''),
    'menu_name' => __('Events')
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true, 
    'show_in_menu' => true, 
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'has_archive' => true,
    'rewrite' => array('slug' => 'evenemang'),
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'comments')
  );

  register_post_type('event', $args);
}

add_action('wp_enqueue_scripts', 'custom_enqueue_scripts', 10);
function custom_enqueue_scripts () {
  if(!is_admin()) {
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', false, null, true);
    wp_enqueue_script('jquery');

    // Load modernizr first
    wp_register_script('modernizr', get_bloginfo('stylesheet_directory') . '/js/libs/modernizr-2.6.2.min.js');
    wp_enqueue_script('modernizr');

    wp_enqueue_style('my_styles', get_stylesheet_uri(), false, filemtime(get_stylesheet_directory() . '/style.css'));

    // filetime() is to clear cahche on file update
    if(WP_DEBUG){
      wp_enqueue_script('my_scripts', get_bloginfo('stylesheet_directory') . '/dist/scripts.js', false, filemtime(get_stylesheet_directory() . '/dist/scripts.js'), true);
    }
    else {
      wp_enqueue_script('my_scripts', get_bloginfo('stylesheet_directory') . '/dist/scripts.min.js', false, filemtime(get_stylesheet_directory() . '/dist/scripts.min.js'), true);
    }

    wp_localize_script('my_scripts', 'wp', array('url' => get_bloginfo('url') ));
  }
}

function sitetitle_tag () {
  echo is_front_page() ? 'h1' : 'p';
}

function super_header ($pid = null) {
  global $post;

  $pid = $pid ? $pid : $post->ID;

  $id = get_post_thumbnail_id($pid);
  $img = wp_get_attachment_image_src($id, 'super-header');

  if($img) { ?>
    <div class="super-header" style="background-image: url('<?php echo $img[0]; ?>');">
      <div class="global-width">
        <h1 class="title">
          <?php echo is_page() || is_home() ? get_the_title($pid) : wp_title(); ?>
        </h1>
      </div>
    </div>
  <?php }
}


// Loop helper
function the_loop ($list = null, $iterator = null) {
  global $posts;
  global $wp_query;

  if($iterator === null) {
    $iterator = $list;
    $list = null;
  }

  if($list === null) {
    $list = $wp_query;
  }

  // Allow the just specify a template part instead of a callback
  if(!is_array($iterator)) {
    // Loop
    while($list->have_posts()) {
      $list->the_post();
      $iterator($list);
    }
  }
  else {
    // Loop
    while($list->have_posts()) {
      $list->the_post();
      get_template_part($iterator[0], isset($iterator[1]) ? $iterator[1] : null);
    }
  }

  wp_reset_postdata();
}


add_action('pre_get_posts', 'modify_events_query', 1);
function modify_events_query ($query) {
  if(!is_admin() && is_post_type_archive('event') && $_GET['jsonposts']) {
    $query->set('posts_per_page', -1);
  }
}


add_filter('wp_insert_post_data', 'do_not_set_posts_to_future');
function do_not_set_posts_to_future ($post) {
  if($post['post_status'] === 'future' && $post['post_type'] === 'event') {
    $post['post_status'] = 'publish';
  }
  return $post;
}
