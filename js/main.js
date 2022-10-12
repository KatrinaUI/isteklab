function addPadddingBlock(){
  	let offsetLeft = document.querySelector('.page-content__licenses').offsetLeft; 
	document.querySelector('.page-content__laboratory').style.padding = `0 0 0 ${offsetLeft}px`;
}
window.addEventListener('resize', addPadddingBlock);
addPadddingBlock();


// appear elements
(function($) {
  $.fn.fadeInDelay = function() {
    var init = function() {
      $(this).hide().delay($(this).data('delay')).fadeIn();
    };
    return this.each(init);
  };
}(jQuery));

var windowHeight2 = $(window).height()/2 + 200;
var docsTop = $(".page-content__documents-types").offset().top;
var whyTop = $(".page-content__why").offset().top;

$(window).scroll(function() {
    if ($(this).scrollTop() > (docsTop - windowHeight2)){

         if (!$('.documents-types__items').hasClass('active')) {
            $('.documents-types__items').addClass('active');
            $('.documents-types__line').addClass('show');
            $('.documents-types__item').children('.documents-types__content').fadeInDelay();
         }
    }
    if ($(this).scrollTop() > 130){
	    $('header').addClass('fixed');
    }
    if ($(this).scrollTop() <= 130){
	    $('header').removeClass('fixed');
    }
});


// carousels
$('#laboratoryCarousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 20,
    items: 2,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1,
            stagePadding: 106
        },
        1000:{
            items:2,
            stagePadding: 106
        }
    }
});

if($(window).width() <= 767){
	$('.tests__cards').addClass('owl-carousel owl-theme owl-ltr');
	$('.tests__cards').owlCarousel({
	    rtl: false,
	    loop: true,
	    margin: 20,
	    items: 1,
	    nav: true
	});
}


// circle progress bar
var bar = new ProgressBar.Circle(progress, {
  color: '#000',
  strokeWidth: 10,
  trailWidth: 0,
  easing: 'easeInOut',
  duration: 1900,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#68CCF3', width: 10 },
  to: { color: '#68CCF3', width: 10 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } 
  }
});


// validation
$('.request-form .btn-call').on('click', function(){
	let sendForm = true;
	$(this).parents('.request-form').find('input').each(function() {

	    if ($(this).val() != '') {
	    	$(this).addClass('correct-input');
	    	$(this).removeClass('incorrect-input');
	    }else{
	    	$(this).attr('placeholder', $('.invalid-feedback').text());
	    	$(this).addClass('incorrect-input');
	    	$(this).removeClass('correct-input');
	    	sendForm = false;
	    }
	});
    if (sendForm) {
		$(this).parents('.request-form').addClass('success-request');
		$(this).parents('.request-form__inside').hide();
		if ($(window).width() <= 480) {
			$(this).parents('.page-content__c-form').find('h2').hide();
		}
		$(this).parents('.request-form').append( "<p class='success-text'>Спасибо за заявку! <span>Наш менеджер перезвонит вам в течение 10 минут.</span></p>");
    }
	return false;
});

$('.stack-cards__item').each(function() {
	const height = $(this).find('.step-item__text').outerHeight();

	// console.log(height);
	$(this).height(300);
});

// 660px


function elementIsInViewport(el){
	const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function lookForElement(Selector){
	let elementShow = true;
	document.addEventListener('scroll', function () {
		const element = document.querySelector(Selector);
		if(elementIsInViewport(element) && elementShow){
			$('.case-slide__number-value-animation').each(function() {
				const activeItem = $(this).find('span.is-active').index();
				const elWidth = $(this).find('span.is-active').width();
				const result = activeItem*66;
				$(this).css('transform',`translateY(-${result}px)`);
				$(this).css('width',`${elWidth}px`);
				// console.log(activeItem);
			});
			elementShow = false;

			bar.animate(1.0);
		}
	});
}

lookForElement('#why-counters');

