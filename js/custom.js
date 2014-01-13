
	
/* JavaScript for Animation */	

/* Hero */
jQuery(document).ready(function() {
/* prettyPhoto Gallery */

jQuery(".prettyphoto").prettyPhoto({
   overlay_gallery: false, social_tools: false,"theme": 'dark_rounded'
});
$('.hero-h1').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInLeft');
	}, { offset: '100%' });
$('.hero-h3').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	
$('.hero-p').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInRight');
	}, { offset: '60%' });

/* Service Images */

$('.simg-one').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('rotateIn');
	}, { offset: '60%' });

$('.simg-two').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('bounceIn');
	}, { offset: '70%' });
	
$('.simg-three').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInDown');
	}, { offset: '70%' });

$('.simg-four').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '70%' });

$('.simg-five').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInDown');
	}, { offset: '70%' });
	
$('.simg-six').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('bounceIn');
	}, { offset: '70%' });
	
$('.simg-seven').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInDown');
	}, { offset: '70%' });
	
$('.simg-eight').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('tada');
	}, { offset: '70%' });
	

/* Feature */

$('.feature-item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('bounceInUp');
	}, { offset: '70%' });

/* Portfolio */

$('.p-item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('rotateIn');
	}, { offset: '70%' });

/* About Us */

$('.team-member').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('flipInX');
	}, { offset: '70%' });

/* Experience */	

$('.e-item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('bounceIn');
	}, { offset: '70%' });
	
/* Pricing Table */

$('.ptable-content').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('bounceIn');
	}, { offset: '70%' });
});	

/* Scroll to Top */


  $(".totop").hide();

  $(function(){
	$(window).scroll(function(){
	  if ($(this).scrollTop()>300)
	  {
		$('.totop').slideDown();
	  } 
	  else
	  {
		$('.totop').slideUp();
	  }
	});

	$('.totop').click(function (e) {
	  e.preventDefault();
	  $('body,html').animate({scrollTop: 0}, 500);
	});

  });	

				
				