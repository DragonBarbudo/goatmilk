/*eslint-env jquery*/

AOS.init();


$(document).ready(function(){

    $('.txts:not(#txt1)').hide();
    $('.ico').click(function(){
      $('.txts').slideUp();
      $( $(this).attr('data') ).slideDown();
      $('.ico.active').removeClass('active');
      $(this).addClass('active');
      
    });

  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $( '#menu' ).toggleClass('is-active');
  });
/* MENUSCROLL */

  $('a[href^="#"]').each(function(){
    var url = this.hash;
    $(this).on('click', function (e) {
      console.log('click');
      e.preventDefault();
      $('html,body').animate({
        'scrollTop':$(url).offset().top-120
      }, 1000, 'swing');
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
  });




  $(".navbar").sticky({topSpacing:0});
  });
