$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyAtjZjj7GPuTF57cv2grSbWJS9GytVMrUU',
        header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
        width: "parent",
        eventSources: [
            {
                googleCalendarId: 'f9ac2js6c7uaio13okgmneh3d4@group.calendar.google.com', // main calendar
                className: 'main-event'
            },
            {
                googleCalendarId: '5c8jnapi4jgo1om1220mrpk96c@group.calendar.google.com', // men's
                className: 'mens-event'
            },
            {
                googleCalendarId: '3fu2akujc2gh3dirmoe69j7kqs@group.calendar.google.com',
                className: 'womens-event'
            },
            {
                googleCalendarId: 'm3m6d0voiji08c02v0hqjp4i04@group.calendar.google.com',
                className: 'beach-event'
            }
        ],
        eventRender: function(event, element, view) {
            if (event.description != null) {
                element.qtip({
                    content: event.title + " at <strong>" + event.location + "</strong><br><br>" + "<strong>Description: </strong>" + event.description 
                });    
            }
            else {
                element.qtip({
                    content: event.title + " at <strong>" + event.location + "</strong><br>"
                }); 
            }
//            var getDesc = (event.location) ? event.location : 'No Description';
            console.log(event.title);
        }
    });
});


$(document).ready(function(){ 
	slant();
	window.scrollReveal = new scrollReveal();

	$('a[href^="#"]').on('click', function(event) {
	    var target = $($(this).attr('href'));
	    if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
});

window.onresize = function(event) {
    slant();
};

//$(window).scroll(function(e){
//	if(window.isMobile) return;
//   	parallax();
//});


/*! Check it is mobile */
window.isMobile = (function () {
  var check = false;
  (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
})();


/*! Slant angle */
var radianAlpha = slantAngle * (Math.PI / 180);
var radianBeta = (90 - slantAngle) * (Math.PI / 180);

function slant(){
	slantHeight = ($(window).width() * Math.sin(radianAlpha))/Math.sin(radianBeta);
	slantWidth = $(window).width();
	slantPosition = $('#intro').outerHeight() - slantHeight + 1;
	$('.cross').css('top', + slantPosition + 'px' );
	$('.cross').css('border-bottom-width', + slantHeight + 'px ');
	$('.cross').css('border-left-width', + slantWidth + 'px');
	$('.cross-2').css('border-top-width', + slantHeight + 'px ');
	$('.cross-2').css('border-right-width', + slantWidth + 'px');
};


/*! Parallax effect in intro section */
$('.bg-holder').parallaxScroll({
  friction: 0.4
});

/*! Contact form */
function checkForm() {
	checkName();
	checkMessage();
	checkEmail();
};

function checkName() {
	var name = document.getElementById('inputName');

   	setTimeout(function() {
    	if (name.value.length < 3) {
	    	$(name).parent().addClass('has-error has-feedback');
	    	inputName = '';
	    } else {
	    	$(name).parent().removeClass("has-error");
	    	$(name).parent().addClass('has-feedback');
	    	inputName = name.value;
	    }
   	}, 500);

   	return inputName;
};

function checkMessage() {
	var message = document.getElementById('inputMessage');

    setTimeout(function() {
	    if (message.value.length < 10) {
	    	$(message).parent().removeClass("has-success");
	    	$(message).parent().addClass('has-error has-feedback');
	    	inputMessage = '';
	    } else {
	    	$(message).parent().removeClass("has-error");
	    	$(message).parent().addClass('has-success has-feedback');
	    	inputMessage = message.value;
	    }
    }, 500);

    return inputMessage;
};

var aboutSlide = 0;

$( "#about1" ).click(function() {
    if (aboutSlide == 1) {
      $(".about-show").slideUp("fast", function() { 
          aboutSlide = 0;
      });
      $(" .scroll ").removeClass("fa fa-chevron-circle-up");
      $(" .scroll ").addClass("blink fa fa-chevron-circle-down");
      $(" .about-border ").addClass("about-hover");
    } 
    else {
      $( ".about-show" ).slideDown( "slow", function() {
         aboutSlide = 1;
      });
      $(" .scroll ").removeClass("blink fa fa-chevron-circle-down");
      $(" .scroll ").addClass("fa fa-chevron-circle-up");
      $(" .about-border").removeClass("about-hover");
    }    
});