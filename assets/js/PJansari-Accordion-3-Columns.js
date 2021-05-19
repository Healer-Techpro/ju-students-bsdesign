$(function () {
    // hide all panels by default
    $('.panel-subject').hide();
    
    // on accordion click
    $('.accordion-subject').click(function () {
        // record if it was active
        var wasActive = $(this).hasClass('active');
        // if not 
        if (!wasActive) {
            // hide all
            $('.panel-subject').slideUp();
            $(this).next('.panel-subject').slideDown();
            // deactivate all 
            $('.accordion-subject').removeClass('active');
            // activate selected accordion
            $(this).addClass('active');
        }else{
            // hide selected panel
            $(this).next('.panel-subject').slideUp();
            // deactivate selected accordion
            $(this).removeClass('active');
        }
    });
});