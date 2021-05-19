$('#myCollapsible').collapse({
    toggle: false
  })

  
  $(document).ready(function(){
    $('[data-bs-hover-animate]')
      .mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
      .mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });
  });  

  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
$(function () {
  // hide all panels by default
  $('.panel').hide();
  
  // on accordion click
  $('.accordion').click(function () {
      // record if it was active
      var wasActive = $(this).hasClass('active');
      // if not 
      if (!wasActive) {
          // hide all
          $('.panel').slideUp();
          $(this).next('.panel').slideDown();
          // deactivate all 
          $('.accordion').removeClass('active');
          // activate selected accordion
          $(this).addClass('active');
      }else{
          // hide selected panel
          $(this).next('.panel').slideUp();
          // deactivate selected accordion
          $(this).removeClass('active');
      }
  });
});  