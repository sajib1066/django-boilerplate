/**
 * Star Ratings (jquery)
 */

'use strict';
$(function () {
  var basicRatings = $('.basic-ratings'),
    customSvg = $('.custom-svg-ratings'),
    multiColor = $('.multi-color-ratings'),
    halfStar = $('.half-star-ratings'),
    fullStar = $('.full-star-ratings'),
    readOnlyRatings = $('.read-only-ratings'),
    onSetEvents = $('.onset-event-ratings'),
    onChangeEvents = $('.onChange-event-ratings'),
    ratingMethods = $('.methods-ratings'),
    initializeRatings = $('.btn-initialize'),
    destroyRatings = $('.btn-destroy'),
    getRatings = $('.btn-get-rating'),
    setRatings = $('.btn-set-rating');

  // Basic Ratings
  // --------------------------------------------------------------------
  if (basicRatings) {
    basicRatings.rateYo({
      rating: 3.6,
      spacing: '5px',
      starWidth: '25px',
      rtl: isRtl
    });
  }

  // Custom SVG Ratings
  // --------------------------------------------------------------------
  if (customSvg) {
    customSvg.rateYo({
      rating: 3.2,
      starWidth: '25px',
      spacing: '5px',
      starSvg:
        "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' focusable='false' aria-hidden='true' viewBox='0 0 24 24' data-testid='StarBorderIcon'><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'></path></svg>",
      rtl: isRtl
    });
  }

  // Multi Color Ratings
  // --------------------------------------------------------------------
  if (multiColor) {
    multiColor.rateYo({
      spacing: '5px',
      starWidth: '25px',
      rtl: isRtl,
      multiColor: {
        startColor: '#ffd687',
        endColor: '#fdb528'
      }
    });
  }

  // Half Star Ratings
  // --------------------------------------------------------------------
  if (halfStar) {
    halfStar.rateYo({
      rtl: isRtl,
      starWidth: '25px',
      spacing: '5px',
      rating: 2
    });
  }

  // Full Star Ratings
  // --------------------------------------------------------------------
  if (fullStar) {
    fullStar.rateYo({
      rtl: isRtl,
      starWidth: '25px',
      spacing: '5px',
      rating: 2
    });
  }

  // Read Only Ratings
  // --------------------------------------------------------------------
  if (readOnlyRatings) {
    readOnlyRatings.rateYo({
      rating: 2,
      starWidth: '25px',
      spacing: '5px',
      rtl: isRtl
    });
  }

  // Ratings Events
  // --------------------------------------------------------------------

  // onSet Event
  if (onSetEvents) {
    onSetEvents
      .rateYo({
        starWidth: '25px',
        spacing: '5px',
        rtl: isRtl
      })
      .on('rateyo.set', function (e, data) {
        alert('The rating is set to ' + data.rating + '!');
      });
  }

  // onChange Event
  if (onChangeEvents) {
    onChangeEvents
      .rateYo({
        spacing: '5px',
        rtl: isRtl
      })
      .on('rateyo.change', function (e, data) {
        var rating = data.rating;
        $(this).parent().find('.counter').text(rating);
      });
  }

  // Ratings Methods
  // --------------------------------------------------------------------
  if (ratingMethods) {
    var $instance = ratingMethods.rateYo({
      starWidth: '25px',
      spacing: '5px',
      rtl: isRtl
    });

    if (initializeRatings) {
      initializeRatings.on('click', function () {
        $instance.rateYo({
          rtl: isRtl
        });
      });
    }

    if (destroyRatings) {
      destroyRatings.on('click', function () {
        if ($instance.hasClass('jq-ry-container')) {
          $instance.rateYo('destroy');
        } else {
          window.alert('Please Initialize Ratings First');
        }
      });
    }

    if (getRatings) {
      getRatings.on('click', function () {
        if ($instance.hasClass('jq-ry-container')) {
          var rating = $instance.rateYo('rating');
          window.alert('Current Ratings are ' + rating);
        } else {
          window.alert('Please Initialize Ratings First');
        }
      });
    }

    if (setRatings) {
      setRatings.on('click', function () {
        if ($instance.hasClass('jq-ry-container')) {
          $instance.rateYo('rating', 1);
        } else {
          window.alert('Please Initialize Ratings First');
        }
      });
    }
  }
});
