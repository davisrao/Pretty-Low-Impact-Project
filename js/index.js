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
$('.body-btn').click(showMore);

function showMore(){

	$('#top-section').fadeOut('slow');
	$('.start-hidden').fadeIn('fast');
	}

$('#recipe-button').click(showRecipes);

function showRecipes(){
	$('#business-to-show').fadeOut('fast');
	$('#fashion-to-show').fadeOut('fast');
	$('#recipes-to-show').slideToggle('slow');
	document.getElementById('recipe-scroll-to').scrollIntoView();
}

$('#business-button').click(showBusiness);

function showBusiness(){
	$('#recipes-to-show').fadeOut('fast');
	$('#fashion-to-show').fadeOut('fast');
	$('#business-to-show').slideToggle('slow');
	document.getElementById('recipe-scroll-to').scrollIntoView();
	}
$('#fashion-button').click(showFashion);
function showFashion(){
	$('#business-to-show').fadeOut('fast');
	$('#recipes-to-show').fadeOut('fast');
	$('#fashion-to-show').slideToggle('slow');
	document.getElementById('recipe-scroll-to').scrollIntoView();
}
$('#business-x').click(hideBusiness);
function hideBusiness(){
	$('#business-to-show').fadeOut('fast');
	document.getElementById('header').scrollIntoView();
	}
$('#recipe-x').click(hideRecipes);
function hideRecipes(){
	$('#recipes-to-show').fadeOut('fast');
	document.getElementById('header').scrollIntoView();
	}
$('#fashion-x').click(hideFashion);
function hideFashion(){
	$('#fashion-to-show').fadeOut('fast');
	document.getElementById('header').scrollIntoView();
	}
});