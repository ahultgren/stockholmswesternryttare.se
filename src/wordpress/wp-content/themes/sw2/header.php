<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1.0" />
  <link rel="shortcut icon" href="<?php bloginfo('url'); ?>/favicon.png" />
  <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

  <!--[if lt IE 9]>
  <link href='<?php echo get_template_directory_uri(); ?>/dist/ie.css' rel='stylesheet' type='text/css' />
  <![endif]-->

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header class="head" role="banner">
    <nav class="topnav col-xs-12 global-width clearfix" role="navigation">
      <a class="logo" href="<?php bloginfo('url'); ?>"><?php bloginfo('name'); ?></a>
      <label for="menu-toggle" class="menu-toggle-label"></label>
      <input type="checkbox" class="menu-toggle" id="menu-toggle">
      <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
    </nav>
    <?php if(has_post_thumbnail()) {
      super_header();
    } ?>
  </header>
