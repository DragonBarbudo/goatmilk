/*eslint-env jquery*/




$(document).ready(function(){


  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $( '#menu' ).toggleClass('is-active');
  });
/* MENUSCROLL */
  $('a[href^="#"]').each(function(){
    var url = this.hash;
    $(this).on('click', function (e) {
      e.preventDefault();
      $( '#menu' ).removeClass('is-active');
      $('a.is-active').removeClass('is-active');
      $('html,body').animate({
        'scrollTop':$(url).offset().top-$('.navbar').height()
      }, 400, 'swing');
    });

    $(url).waypoint({
      handler: function() {
        $('a.is-active').removeClass('is-active');
        $('a[href^="'+url+'"]').addClass('is-active');
      }, offset: $('.navbar').height()
    });

    $(url).waypoint({
      handler: function() {
        $('a.is-active').removeClass('is-active');
        $('a[href^="'+url+'"]').addClass('is-active');
      }, offset: -$('.navbar').height()
    });

  });



  $('[data-modal]').click(function(){
    var open = $(this).attr('data-modal');
    $(open).addClass('is-active');
    $('.carousel').slick();
  });

  $('.modal-close').click(function(){
    $(this).closest('.modal').removeClass('is-active');
    $('.carousel').slick('unslick');
  });


  $('.slider').slick({ });


  $(".navbar").sticky({topSpacing:0});
  });
