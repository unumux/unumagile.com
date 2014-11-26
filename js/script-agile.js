function openDropdown () {
	if ($(this).hasClass('js-open')) {
		$(this).removeClass('js-open');
	}
	else {
		$(this).addClass('js-open');
	}
}

$('.nav-toggle').on("click", function(event){
	event.preventDefault();
	if ($('body').hasClass('js-nav-open')) {
		$('body').removeClass('js-nav-open');
	}
	else {
		$('body').addClass('js-nav-open');
	}
});

$('.dropdown-toggle').on("click", function(event){
	event.preventDefault();
	if ($('#mainNav').hasClass('js-dropdown-open')) {
		$('#mainNav').removeClass('js-dropdown-open');
	}
	else {
		$('#mainNav').addClass('js-dropdown-open');
	}
});

$('.close').on("click", function(event){
	event.preventDefault();
	$('#mainNav').removeClass('js-dropdown-open');
});

$('#mainNav a').not('.dropdown-toggle').on('click', function(event){
	$('body').removeClass('js-nav-open');
});

$('.video-btn').on('click', function(event){
	event.preventDefault();
	$('.video-container').addClass('js-open');
});

$('.close-btn').on('click', function(event){
	event.preventDefault();
	$('.video-container').removeClass('js-open');
});

$('dt').click(openDropdown);

$('#benefits h4').click(function(){
	$('#benefits h4').not(this).removeClass('js-open');

	if ($(this).hasClass('js-open')) {
		$(this).removeClass('js-open');
	}
	else {
		$(this).addClass('js-open');
	}

	if ($(window).width() > '991') {
		var copy = $(this).next().clone();
		$('.text-front-container, .text-back-container').html('');
		if ($('.text-front-container').hasClass('js-flip')) {
			$('.text-front-container').removeClass('js-flip');
			$('.text-back-container').html(copy).addClass('js-flip');
		}
		else {
			$('.text-back-container').removeClass('js-flip');
			$('.text-front-container').html(copy).addClass('js-flip');
		}
	}
});

///////////////////////
//Form Validation
///////////////////////

$('form').on('submit', function(e) {
  e.preventDefault();
  $('#submit-btn').attr('disabled', 'disabled');

  var isValid = true;
	$('.help-text').html('');
	$('.form-group').removeClass('has-error');
	
	if($('#name').val() == "") {
		isValid = false;
		$('#name').parent().addClass('has-error');
		$('#name').next().html('This field is required.');
	}

	if($('#email').val() == "") {
		isValid = false;
		$('#email').parent().addClass('has-error');
		$('#email').next().html('This field is required.');
	}

	if(validateEmail($('#email').val()) == false) {
		isValid = false;
		$('#email').parent().addClass('has-error');
		$('#email').next().html('Please enter a valid email address.');
	}

	if($('#comment').val() == "") {
		isValid = false;
		$('#comment').parent().addClass('has-error');
		$('#comment').next().html('This field is required.');
	}

	if (isValid === false) {
		$('#submit-btn').removeAttr('disabled');
	}
	else {
		$.post('http://unumagile.com/form', $(this).serialize())
		    .done(function() {
		      $('form').css('visibility', 'hidden');
			  $('.feedback').html('<p>Your submission was completed successfully. Thank you. </p> <a class="btn btn-platinum close" href="#">Close</a>').addClass('has-success');
		    })
		  .fail(function(data) {    
		  	console.log(data.responseJSON.ModelState);
		  	$('.feedback').html('There was a problem submitting your form. Please try again.');
		  })

		  $('#submit-btn').removeAttr('disabled');
	}
});

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

//////////////////////
//Smooth Scrolling 
/////////////////////
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if ($(window).width() > '991') {
      	if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 63
	        }, 1000);
	        return false;
	      }
      }
      else {
      	if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top 
	        }, 1000);
	        return false;
	      }
      }
      
    }
  });
});



////////////////////////////////////////////////////////////
//Carousel to intialize only after certain window size
///////////////////////////////////////////////////////////
$(window).resize(function(){
	if ($(window).width() > '991') {
		$('.carousel').carousel({
			pause: ""
		});
	}
})

$(document).ready(function(){
	if ($(window).width() > '991') {
		$('.carousel').carousel({
			pause: ""
		});
	}
});

var uagent = navigator.userAgent.toLowerCase();
if (uagent.search("iphone") > -1 ||
    uagent.search("ipod") > -1 ||
    uagent.search("ipad") > -1 ||
    uagent.search("appletv") > -1) {
       $('html').addClass('js-ios');   
} 
else {

}