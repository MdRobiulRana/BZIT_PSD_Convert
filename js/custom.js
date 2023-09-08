(function($){
	'use strict';

// isotope

$(document).ready(function ($) {
setTimeout(function(){ 
          // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
     }, 1000);
});

// isotope end


//isotope buttons

$('.bzit-portfolio-buttons button').on('click', function(){
  $('.bzit-portfolio-buttons button.active').removeClass('active');
  $(this).addClass('active');
})

//venobox

new VenoBox();

//code start

$('.bzit-menu-icon i.fa-bars').on('click', function(){
  $('.bzit-header-menu').animate({left:0});
  $(this).hide();
  $('.bzit-menu-icon i.fa-times').show();
})
$('.bzit-menu-icon i.fa-times').on('click', function(){
  $('.bzit-header-menu').animate({left:-250});
  $(this).hide();
  $('.bzit-menu-icon i.fa-bars').show();
})

$(window).scroll(function(){
  var distance = $(window).scrollTop();
  if( distance > 150 ){
    $('header').addClass('header_slide');
  }
  else{
    $('header').removeClass('header_slide');
  }
});

$(window).scroll(function(){
  var icon_scrollTop = $(window).scrollTop();
  if( icon_scrollTop > 300 ){
    $('.scrollTop_bzit').fadeIn();
  }
  else{
    $('.scrollTop_bzit').fadeOut();
  }
});

$('.scrollTop_bzit').on('click', function(){
  $('html').animate({scrollTop: 0}, 800)
})


})(jQuery);

function validation(){
  var userName = document.getElementById('username'),
      userMail = document.getElementById('usermail');

  if(userName.value == ''){
    document.getElementById('name-error').innerHTML = 'Please Enter Your Name';
    return false;
  }
  else{
    document.getElementById('name-error').innerHTML = '';
  }
  
  if(userMail.value == ''){
    document.getElementById('mail-error').innerHTML = 'Please Enter Your Email';
    return false;
  }
  else{
    document.getElementById('mail-error').innerHTML = '';
  }
}