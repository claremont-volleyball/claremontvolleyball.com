/*!
 *  Norma v1.0
 *  Author: MUUteam / Lukasz Florczak
 */

var eventDate = new Date(year, month-1, day, hour, minute, second);

setInterval(function(){
	var currentDate = new Date().getTime();
	var secondsLeft = (eventDate - currentDate) / 1000;

	secondsLeft = parseInt(secondsLeft);

	days = parseInt(secondsLeft / 86400);
	secondsLeft = secondsLeft % 86400;
	if (days > 0) {
		$('#days').removeClass('hidden-xs');
		$('#hours').addClass('hidden-xs');
		$('#minutes').addClass('hidden-xs');
		$('#seconds').addClass('hidden-xs');
	} 

	hours = parseInt(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;
	if (hours > 0 && days == 0) {
		$('#days').addClass('hidden-xs');
		$('#hours').removeClass('hidden-xs');
		$('#minutes').addClass('hidden-xs');
		$('#seconds').addClass('hidden-xs');
	} 

	minutes = parseInt(secondsLeft / 60);
	if (minutes > 0 && hours == 0 && days == 0) {
		$('#days').addClass('hidden-xs');
		$('#hours').addClass('hidden-xs');
		$('#minutes').removeClass('hidden-xs');
		$('#seconds').addClass('hidden-xs');
	}

	seconds = parseInt(secondsLeft % 60);
	if (seconds > 0 && minutes == 0 && hours == 0 && days == 0) {
		$('#days').addClass('hidden-xs');
		$('#hours').addClass('hidden-xs');
		$('#minutes').addClass('hidden-xs');
		$('#seconds').removeClass('hidden-xs');
	}

	$(".countdown .days").html(days);
	$(".countdown .hours").html(hours);
	$(".countdown .minutes").html(minutes);
	$(".countdown .seconds").html(seconds);	

	if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
		$(".countdown").html('<span class="finish">' + finishText + '</span>');
	}
}, 1000);