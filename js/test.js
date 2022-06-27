

/**************************** loading page *************************/


$("document").ready(function () {

  $(".loader-cover").fadeOut(1000)

});
/**************************** scaling header caption *************************/

$("document").ready(function () {
  $(window).resize(function () {
    var x = $(window).innerWidth();
    var y = $(window).innerHeight();
    if (x > 950) {
      $(".caption").css(`transform`, `scale(1)`);

    }
     if (x < 950) {
      $(".caption").css(`transform`, `scale(.9)`);
      console.log("950");

    }
    if (x < 800) {
      $(".caption").css(`transform`, `scale(1)`);
      console.log("800");

    }
    if (x < 650) {
      $(".caption").css(`transform`, `scale(1,.6)`);
      
    
    
      console.log("650");

    }
  

  });
});
/*************************************** book shelf ******************** */




/***********************the skitter call ****************************/
$(document).ready(function () {
  $(".skitter-large").skitter({

    interval: 2000,
    progressbar: true,
    dots: false,
    responsive: true,



  });


  

  /*********************** owl carosuel call ****************************/
  $('.owl-carousel').owlCarousel({
    items: 1,
    
  
    responsiveClass:true,

    responsive: {
      0: {
        items: 1
      },

      360: {
        items: 1
      },

      600: {
        items: 3,
       
      },


      1024: {
        items: 4
      },

      1366: {
        items: 4
      }
    }
  });

});

// Go to the next item
$('.customNextBtn').click(function () {
  $('.owl-carousel').trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  $('.owl-carousel').trigger('prev.owl.carousel', [300]);
})


/*******************************  AOS animation ********************************/

////////////////////////! You can also pass an optional settings object ********************
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)



  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

/********************************************************* */
/********************************************************* */
/*************         Book js               ************* */
/********************************************************* */
/********************************************************* */

$(".flipbook").turn({

  autoCenter: true,
  duration: 2000,
  display:"single",

});


