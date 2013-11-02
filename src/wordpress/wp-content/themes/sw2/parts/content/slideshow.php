<?php
// Get attachments
$images = get_posts(array(
  'post_parent' => $post->ID,
  'post_type' => 'attachment',
  'post_status' => 'any'
));

$i = 0;

if($images) : ?>
  <div class="slideshow">
    <?php foreach($images as $image) : ?>
      <?php if($i++ === 0) : ?>
        <a href="<?php echo wp_get_attachment_image_src($image->ID, 'lightbox')[0]; ?>">
          <img src="<?php echo wp_get_attachment_image_src($image->ID, 'featured-post')[0]; ?>" />
        </a>
      <?php continue; endif; ?>
      <a class="hidden" href="<?php echo wp_get_attachment_image_src($image->ID, 'lightbox')[0]; ?>"></a>
    <?php endforeach; ?>
  </div>
<?php endif;
