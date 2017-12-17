//Use Strict Mode
(function($) {
  "use strict";

//Begin - Window Load
$(window).load(function(){


	//==============___Page Loader___================
  
  $('#page-loader').delay(300).fadeOut(400, function(){

  });

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation').addClass('loader-hide');

});

//Begin - Document Ready
$(document).ready(function(){

  // 背景图随鼠标晃动效果
  $(body).mousemove(function(e) {
    // 获取屏幕宽高
    var screenX=$(body).width()/2;
    var screenY=$(body).height()/2;
    // console.log(screenX,screenY)
    // console.log(e.pageX,e.pageY)
    var x = ((screenX-e.pageX) / 100), y = ((screenY-e.pageY) / 100);
    $('.bg').css('background-position', x + 'px ' + y + 'px');
  });

//==============___Page Loader___================
  $('#loading-wraper').fadeIn(300);

//==============___Testimonials - owl Carousel___================
 $("#testimonial-carousel").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true,    
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],     
  });


//==============_Map_================
$('.map').on('click', function(){
	$('.map-overlay').hide();
});

$('.map').on('mouseleave', function(){
	$('.map-overlay').show();
});

//==============_Lightbox_================
//Nivo Lightbox
  $('a.nivobox').nivoLightbox({ effect: 'fade' });


//==============___Scrollbars___================
$('.section-vcardbody').perfectScrollbar({
  wheelSpeed: 0.9
});

//==============___Menu & Pages Animation___================

var linkHome = 0;
var linkPage = '';

function pageOn(){
    $('#main-menu').addClass('main-menu-pgactive');
    $('#section-home').addClass('section-vcardbody-pgactive');    
    $('.profileActive').removeClass('profileActive');    
    $('#profile2').addClass('profileActive');
    
    linkHome = 1;
}

function pageOff(){
    $('.section-page-active').removeClass('section-page-active');
    $('#main-menu').removeClass('main-menu-pgactive');
    $('#section-home').removeClass('section-vcardbody-pgactive');
    $('.profileActive').removeClass('profileActive');
    $('#profile1').addClass('profileActive');
    linkHome = 0;
}


$(".link-page").on('click', function(event){
  event.preventDefault();
  $('.menuActive').removeClass('menuActive');  
  $(this).addClass('menuActive');
  linkPage = $(this).attr('href');
  $('.section-page-active').removeClass('section-page-active');
  $(linkPage).addClass('section-page-active');
  pageOn();
});


$(".link-home").on('click', function(event){
  event.preventDefault();

  if (linkHome == 0) {
    //pageOn();
  }
  else if (linkHome == 1) {
    $('.menuActive').removeClass('menuActive');
    $(this).addClass('menuActive');
    pageOff();
  }  
});

// function loadPost(){
//   var content = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="html://music.163.com/outchain/player?type=4&id=332307051&auto=1&height=430"></iframe>'
//   $("#postHere").html(content);
//   console.log(content)
// }

$(".loadPost").on('click', function(event){
  event.preventDefault();
  //$("#postHere").html('loading...');
  $('.section-page-active').removeClass('section-page-active');
  $('#page-intro-single').addClass('section-page-active');
  pageOn();
  // loadPost();
});

//End - Document Ready
});

//End - Use Strict mode
})(jQuery);