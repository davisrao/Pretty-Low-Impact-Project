$(document).ready(function(){
// hamburger fxn
	$('.toggle-text').hide();
	$('.hamburger').click(showDrop);
	$('#X').click(hideDrop);
	function showDrop(){
		$('.dropdown-content').show();
		$('.hamburger').hide();
		$('#X').fadeIn();
	}
	function hideDrop(){
		$('.dropdown-content').hide();
		$('.hamburger').fadeIn();
		$('#X').hide();
	}
 //Dive in button
$('.header-btn').click(enterSite);

function enterSite(){
	$('#top-section').fadeOut('fast');
	$('.start-hidden').fadeIn('slow');
	$('#back-home-bar').slideDown('slow');
	}

$('#back-home-bar').click(backHome);
function backHome(){
	$('#top-section').fadeIn('fast');
	$('.start-hidden').fadeOut('slow');
	$('#back-home-bar').hide();
	}


});