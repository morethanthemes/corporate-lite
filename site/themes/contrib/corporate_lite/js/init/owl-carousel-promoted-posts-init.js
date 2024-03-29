(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.mtowlCarouselPromotedPosts = {
    attach: function (context, settings) {
      once('mtowlCarouselPromotedPostsInit', ".mt-carousel-promoted-posts", context).forEach(function(item) {
        $(item).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:1,
            },
            480:{
              items:1,
            },
            768:{
              items:1,
            },
            992:{
              items:2,
            },
            1200:{
              items:4,
            },
            1680:{
              items:4,
            }
          },
          autoplay: true,
          autoplayTimeout: 5000,
          nav: true,
          dots: false,
          loop: true,
          navText: [Drupal.t('prev', {}, {context: "Owl Carousel prev text"}),Drupal.t('next', {}, {context: "Owl Carousel next text"})]
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings, once);
