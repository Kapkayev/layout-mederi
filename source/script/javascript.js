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

customSelect('.city-select select');

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
>>> FEEDBACK SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.feedback-slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: true,
    autoWidth: false,
    autoHeight: true,
    autoplay: true,
    items:1,
    // animateOut: 'fadeOut',
    smartSpeed: 2000,
    margin: 10
})

/*--------------------------------------------------------------
>>> FEEDBACK SLIDER CODE END.
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
    smartSpeed: 2000,
    margin: 10,
    responsive: {
        0 : {
            items: 2,
            touchDrag: true,
            mouseDrag: true,
        }, 
        650 : {
            items: 3,
        },
        992 : {
            items: 4,
        }
    },
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



/*--------------------------------------------------------------
>>> CALENDAR SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.calendar-slider').owlCarousel({
    loop: false,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    smartSpeed: 1000,
    margin: 10,
    responsive: {
        0 : {
            items: 3,
            touchDrag: true,
            mouseDrag: true,
        }, 
        992 : {
            items: 4,
        }
    },
})

let owlCalendarSlider = jQuery('.calendar-slider');
owlCalendarSlider.owlCarousel();

jQuery('#prev__calendar-slider').click(function() {
    owlCalendarSlider.trigger('prev.owl.carousel');
})

jQuery('#next__calendar-slider').click(function() {
    owlCalendarSlider.trigger('next.owl.carousel');
})

jQuery('.calendar-mobile-slider').owlCarousel({
    loop: false,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    smartSpeed: 1000,
    margin: 0,
    responsive: {
        0 : {
            items: 3,
            touchDrag: true,
            mouseDrag: true,
        },
        722 : {
            items: 2,
        },
        992 : {
            items: 3,
        }
    },
})

let owlCalendarMobileSlider = jQuery('.calendar-mobile-slider');
owlCalendarSlider.owlCarousel();

jQuery('#prev__calendar-mobile-slider').click(function() {
    owlCalendarMobileSlider.trigger('prev.owl.carousel');
})

jQuery('#next__calendar-mobile-slider').click(function() {
    owlCalendarMobileSlider.trigger('next.owl.carousel');
})

/*--------------------------------------------------------------
>>> CALENDAR SLIDER CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> DOCTOR TAB'S CODE START:
--------------------------------------------------------------*/

jQuery('.doctor-about__tab').click(function(){
   jQuery(this).toggleClass('active');
})

/*--------------------------------------------------------------
>>> DOCTOR TAB'S CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> PRICE TAB'S CODE START:
--------------------------------------------------------------*/

jQuery('.price-list__tab .head').click(function(){
   jQuery(this).parent().toggleClass('active');
})

/*--------------------------------------------------------------
>>> PRICE TAB'S CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> MODAL FUNCTION CODE START:
--------------------------------------------------------------*/

jQuery('.open-modal').magnificPopup({
    type: 'inline',
    preloader: true,
    midClick: true,
    showCloseBtn: false,
});

jQuery(document).on('click', '.close-modal', function (e) {
    e.preventDefault();
    jQuery.magnificPopup.close();
});

/*--------------------------------------------------------------
>>> MODAL FUNCTION CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> MOBILE MENU CODE START:
--------------------------------------------------------------*/

jQuery('.header-mobile-menu').click(function(){
    jQuery(this).find('svg').toggleClass('disactive');
    jQuery(this).find('img').toggleClass('active');

    jQuery('.container-header__row-04').toggleClass('active');
    jQuery('.container-header').toggleClass('gap');
})

/*--------------------------------------------------------------
>>> MOBILE MENU CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> DATE PICKER ON MOBILE CODE START:
--------------------------------------------------------------*/

if(jQuery(window).width() < 722){
    jQuery('.date-picker').click(function(){
        jQuery(this).next().toggleClass('active');
    })
}

/*--------------------------------------------------------------
>>> DATE PICKER ON MOBILE CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> CATALOG FILTER CODE START:
--------------------------------------------------------------*/

jQuery('.container-catalog__row-05').click(function(){
    jQuery(this).toggleClass('active');
    jQuery('.container-catalog__row-06').toggleClass('active');
})

/*--------------------------------------------------------------
>>> CATALOG FILTER CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> GOOGLE MAPS CODE START:
--------------------------------------------------------------*/

let map_01, map_02;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  city_01 = { lat: 43.2581387, lng: 76.9517876 };
  city_02 = { lat: 51.124526, lng: 71.454522 };


  map_01 = new Map(document.getElementById("map_01"), {
    center: city_01,
    zoom: 13,
    styles: 
        [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#704a3c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#C0D3D6"
                    }
                ]
            }
        ]
  });

  map_02 = new Map(document.getElementById("map_02"), {
    center: city_02,
    zoom: 13,
    styles: 
        [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#EDF0F1"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#EDF0F1"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#704a3c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#C0D3D6"
                    }
                ]
            }
        ]
  })

  }

initMap();

jQuery('.map-button').click(function(){
    if(jQuery(this).hasClass('city-01')){
      jQuery('.map-01').toggleClass('active');
      jQuery('.map-02').toggleClass('active');
    } else {
      jQuery('.map-01').toggleClass('active');
      jQuery('.map-02').toggleClass('active');
    }
})

/*--------------------------------------------------------------
>>> GOOGLE MAPS CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> CITY SELECT CODE START:
--------------------------------------------------------------*/

jQuery('.confirm-city').click(function(){
  jQuery('.section-notification__city-selector, .section-city').hide();
})

/*--------------------------------------------------------------
>>> CITY SELECT  CODE END.
--------------------------------------------------------------*/