function addPadddingBlock(){
  let offsetLeft = document.querySelector('.page-content__licenses').offsetLeft; 
  document.querySelector('.page-content__laboratory').style.padding = `0 0 0 ${offsetLeft}px`;
}
if(document.querySelector('.page-content__licenses')){
  window.addEventListener('resize', addPadddingBlock);
  addPadddingBlock();
}

// add paddding for Equipment
function addPadddingBlockEquip(){
  let offsetLeft = document.querySelector('.page-content__breadcrumbs').offsetLeft; 
  document.querySelector('.page-content__equipment').style.padding = `0 0 0 ${offsetLeft}px`;
}
if(document.querySelector('.page-content__equipment')){
  window.addEventListener('resize', addPadddingBlockEquip);
  addPadddingBlockEquip();
}


// appear elements Docs
(function($) {
  $.fn.fadeInDelay = function() {
    var init = function() {
      $(this).hide().delay($(this).data('delay')).fadeIn();
    };
    return this.each(init);
  };
}(jQuery));

if(document.querySelector('.page-content__documents-types')){
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
  });
}

// appear elements Years
if(document.querySelector('.yearslines')){
  var windowHeight2 = $(window).height()/2 + 200;
  var docsTop = $(".page-content__breadcrumbs").offset().top - 100;

  if($(window).width() >= 992){
      if ($(this).scrollTop() > (docsTop - windowHeight2)){

           if (!$('.page-content__yearslines .yearslines').hasClass('active')) {
              $('.page-content__yearslines .yearslines').addClass('active');
              $('.yearslines__item').children('div').fadeInDelay();
           }
      }
  }
}


$(window).scroll(function() {
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

$('#equipmentCarousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 20,
    items: 3,
    nav: true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        768:{
            items:1,
            stagePadding: 162
        },
        1000:{
            items:3,
            stagePadding: 62
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

if($(window).width() <= 991){
  $('.employees__staff').addClass('owl-carousel owl-theme owl-ltr');
  $('.employees__staff').owlCarousel({
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
              items:2,
              stagePadding: 85
          },
          992:{
              items:2,
              stagePadding: 85
          }
      }
  });
}

// circle progress bar
if(document.querySelector('.why__percent__block')){
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
}

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
  		  $(this).parents('.modal-body').hide();
        $(this).parents('.request-form__inside').hide();
        if($(window).width() <= 768){
            $(this).parents('.page-content__c-form').find('h2').hide();
        }
        $(this).parents('.modal-content').find('.modal-header p').hide();
        $(this).parents('.modal-content').find('.modal-header h2').hide();
  		  if ($(window).width() <= 480) {
  			 $(this).parents('.page-content__c-form').find('h2').hide();
  		  }
  		  $(this).parents('.modal').find('.success-text').show();
    }
	return false;
});

$('.stack-cards__item').each(function() {
	const height = $(this).find('.step-item__text').outerHeight();
	$(this).height(300);
});


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
			});
			elementShow = false;

			bar.animate(1.0);
		}
	});
}

if(document.querySelector('.why__percent__block')){
  lookForElement('#why-counters');
}

$('.licenses__photo').on('click', function(){
  const imgLg = $(this).attr('data-lg');
  $('.license__modal .license__img img').attr('src','');
  $('.license__modal .license__img img').attr('src',imgLg);
});

// tabs
const triggerTabList = document.querySelectorAll('#tabsCategories button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
});

// close Call popup
$('#callModal').on('hide.bs.modal', function () {
  $(this).find('.modal-header p').show();
  $(this).find('.modal-header h2').show();
  $(this).find('.request-form__inside').show();
  $(this).find('.modal-body').show();
  $(this).find('.success-text').hide();
  $('#callModal').find('form').trigger("reset");
});

//filter menu
if($(window).width() <= 767){
  $('#catFilter').on('show.bs.offcanvas', function () {
    $('header .btn-block button').hide();
    $('header .btn-block button.categories__popup__close').show();
  });
  $('#catFilter').on('hide.bs.offcanvas', function () {
    $('header .btn-block button').show();
    $('header .btn-block button.categories__popup__close').hide();
  });
}



