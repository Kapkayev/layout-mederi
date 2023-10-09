/*--------------------------------------------------------------
>>> SVG CODE START:
--------------------------------------------------------------*/

jQuery("img.img-svg").each(function () {
    var $img = jQuery(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

/*--------------------------------------------------------------
>>> SVG CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> JQUERY FORM MASK CODE START:
--------------------------------------------------------------*/

    jQuery("form .phone-mask").click(function(){
      jQuery(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");
    jQuery("form .phone-mask").mask("+7(999) 999-9999");

    jQuery.fn.setCursorPosition = function(pos) {
      if (jQuery(this).get(0).setSelectionRange) {
        jQuery(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

/*--------------------------------------------------------------
>>> JQUERY FORM MASK CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> UI SETTINGS CODE START:
--------------------------------------------------------------*/

customSelect('.header-select select');
customSelect('.doctor-select select');

customSelect('.catalog-speciality-select select');
customSelect('.catalog-age-select select');
customSelect('.catalog-category-select select');

/*--------------------------------------------------------------
>>> UI SETTINGS CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> HEADER SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.header-slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: true,
    autoWidth: false,
    autoHeight: false,
    autoplay: true,
    items:1,
    // animateOut: 'fadeOut',
    smartSpeed: 2000,
    margin: 10
})

/*--------------------------------------------------------------
>>> HEADER SLIDER CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> DOCTORS SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.doctors-slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    items:4,
    smartSpeed: 2000,
    margin: 10
})

let owlDoctorsSlider = jQuery('.doctors-slider');
owlDoctorsSlider.owlCarousel();

jQuery('#prev__doctors-slider').click(function() {
    owlDoctorsSlider.trigger('prev.owl.carousel');
})

jQuery('#next__doctors-slider').click(function() {
    owlDoctorsSlider.trigger('next.owl.carousel');
})

/*--------------------------------------------------------------
>>> DOCTORS SLIDER CODE END.
--------------------------------------------------------------*/


jQuery('.doctor-about__tab').click(function(){
   jQuery(this).toggleClass('active');
})

jQuery('.open-modal').magnificPopup({
    type: 'inline',
    preloader: true,
    midClick: true,
});

jQuery(document).on('click', '.close-modal', function (e) {
    e.preventDefault();
    jQuery.magnificPopup.close();
});