<?php
add_theme_support('post-thumbnails');
set_post_thumbnail_size(250, 167, true);
add_image_size('large', 1024, 768, true);

add_theme_support('automatic-feed-links');


// Menu
register_nav_menus(array(
  'primary' => 'Main menu'
));

add_action('init', 'custom_init');
function custom_init () {
  /*$labels = array(
    'name' => __('Items'),
    'singular_name' => __('Item'),
    'add_new' => __('Add New'),
    'add_new_item' => __('Add New Item'),
    'edit_item' => __('Edit Item'),
    'new_item' => __('New Item'),
    'all_items' => __('All Items'),
    'view_item' => __('View Item'),
    'search_items' => __('Search Items'),
    'not_found' => 'No Items found',
    'not_found_in_trash' => __('No Items found in Trash'), 
    'parent_item_colon' => __(''),
    'menu_name' => __('Items')
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
    'rewrite' => array('slug' => 'item'),
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields')
  );

  register_post_type('item', $args);*/

  /*register_taxonomy('item_category', array('item'), array(
    'label' => __('Item taxonomy'),
    'hierarchical' => true
  ));*/
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
  }
}

function sitetitle_tag () {
  echo is_front_page() ? 'h1' : 'p';
}
