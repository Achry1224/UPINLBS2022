 $(window).load(function() {
     $('#venueslider').flexslider({
         prevText: '',
         nextText: '',
         start: function() {
             $('.flexslider .slides').css('background','none');
         }
     });


    $('#carousel').flexslider({
         prevText: '',
         nextText: '',
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
       
      $('#slider').flexslider({
         prevText: '',
         nextText: '',
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });

 });

$(document).ready(function() {
    $b = $('#booking');
    $('#flash-booking').on('click touchend', function() {
        $b.css('background-color','rgba(255,204,51,.3');
        setTimeout(function() { $b.css('background','none'); }, 3000);
    });
});
