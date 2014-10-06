function openDropdown () {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
	}
	else {
		$(this).addClass('open');
	}
}

$('.nav-toggle').on("click", function(event){
	event.preventDefault();
	if ($('body').hasClass('nav-open')) {
		$('body').removeClass('nav-open');
	}
	else {
		$('body').addClass('nav-open');
	}
});

$('.dropdown-toggle').on("click", function(event){
	event.preventDefault();
	if ($('#mainNav').hasClass('dropdown-open')) {
		$('#mainNav').removeClass('dropdown-open');
	}
	else {
		$('#mainNav').addClass('dropdown-open');
	}
});

$('#mainNav a').not('.dropdown-toggle').on('click', function(event){
	$('body').removeClass('nav-open');
});

$('.video-btn').on('click', function(event){
	event.preventDefault();
	$('.video-container').addClass('open');
});

$('.close-btn').on('click', function(event){
	event.preventDefault();
	$('.video-container').removeClass('open');
});

$('#values h3, dt').click(openDropdown);


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
			  $('.feedback').html('Your submission was completed successfully. Thank you.').addClass('has-success');
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
		$('.carousel').carousel();
	}
})

$(document).ready(function(){


	if ($(window).width() > '991') {
		$('.carousel').carousel();
	}

	if (Modernizr.touch) {
		var hasTouch =  true;

	}
	else {
		var hasTouch = false;
	}

	if (hasTouch = false) {
		$('#benefits h4').hover(openDropdown);
	}
	else {
		$('#benefits h4').click(openDropdown);
	}

	if ($(window).width() > '1200') {
		$('#benefits h4').hover(openDropdown);
	}


});
