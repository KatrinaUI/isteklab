// tabs
if($(window).width() > 767){
  const triggerTabList = document.querySelectorAll('#tabsCategories button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()

      showAll();
      
      var destination = $('.main-contentainer').offset().top - 160;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 'fast', 'linear');
      return false;
    })
  });
}

$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 100) {
      $('#scroll_top').show();
    } else {
      $('#scroll_top').hide();
    }
  });
 
  $('#scroll_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 0);
    return false;
  });
});

//mobile tabs = popups
if($(window).width() <= 767){
  $('.product-categories__item').each(function(index){
    $(this).find('button').attr('data-bs-toggle','modal');
    $(this).find('button').attr('data-bs-target','#modalTabs');
  });

  $('.product-categories__item button').on('click', function(){
    const itemCatIndex = $(this).parents('.product-categories__item').index()+1;
    $('#modalTabs').find('.tab-pane').remove();
    $('.tab-pane:nth-child('+ itemCatIndex +')').clone().appendTo('#modalTabs .modal-body');
    setTimeout(showAll, 500);
  });
}

if(document.querySelector('.values__list')){
  showAll();
}

function showAll(){

  // show all in cat list

  $('.table__line').each(function(index){
    console.log($(this).find('.values__list').height());
    if($(this).find('.values__list').height() > $(this).find('.category__values').height()){
      $(this).find('.show-all').show();
    }
  });
  
  $('.show-all').on('click', function(){
    $(this).siblings('.category__content').addClass('openned');
    $(this).hide();
  });

}

$('.licenses__photo').on('click', function(){
  const imgLg = $(this).attr('data-lg');
  console.log(imgLg);
  $('.license__modal .license__img img').attr('src','');
  $('.license__modal .license__img img').attr('src',imgLg);
});

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

// news grid elements count
function funcNews(){
  let countChildren = $('.news-item').length;
  $('.news-item').each(function(index){
    let indexR = index + 1;
    if(index === 0) $(this).addClass('news-item--lg');
    
    if(countChildren % 3 === 1){
      if(indexR === countChildren) $(this).addClass('news-item--lg');  
    }
    if(countChildren % 3 === 0){
      if(indexR === countChildren) $(this).addClass('news-item--lg');  
      if(indexR === countChildren - 2) $(this).addClass('news-item--lg');  
    }
  });
}
funcNews();

$( document ).ready(function() {
  // stars links remove
  if($(window).width() >= 1999){
    $('.services-text a').on('click', function(){
      return false;
    });
  }


});

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
	$(this).parents('.request-form').find('input.required--input').each(function() {
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
        $(this).parents('section').addClass('success-section');
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

$(function(){
  $(".phone--input").mask("+7(999) 999-9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
  });
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



// close Call popup
$('#callModal').on('hide.bs.modal', function () {
  $(this).find('.modal-header p').show();
  $(this).find('.modal-header h2').show();
  $(this).find('.request-form__inside').show();
  $(this).find('.modal-body').show();
  $(this).find('.success-text').hide();
  $('#callModal').find('form').trigger("reset");
});


//stop video
const myModalEl = document.getElementById('modalVideo');
var stopVideo = function(player) {
  var vidSrc = player.prop('src');
  player.prop('src', ''); // to force it to pause
  player.prop('src', vidSrc);
};

if(document.querySelector('.page-content__video')){
  myModalEl.addEventListener('hide.bs.modal', event => {
    var videoId = $(this).data('src');
    stopVideo($('#videoAbout'));
  });
}

//filter menu
if($(window).width() <= 767){
  $('#catFilter').on('show.bs.offcanvas', function () {
    $('header .btn-block button').hide();
    $('header .btn-block button.categories__popup__close').show();
    $('header').addClass('dark-header');
  });
  $('#catFilter').on('hide.bs.offcanvas', function () {
    $('header .btn-block button').show();
    $('header .btn-block button.categories__popup__close').hide();
    $('header').removeClass('dark-header');
  });
}

//main menu (mobile)
if($(window).width() <= 991){
  $('.header__menu').on('show.bs.offcanvas', function () {
    $('header').addClass('dark-header');
  });
  $('.header__menu').on('hide.bs.offcanvas', function () {
    $('header').removeClass('dark-header');
  });
}

// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
if($(window).width() >= 992){
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl,{
    trigger: 'hover'
  }));
}
if($(window).width() > 767){
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl,{
    trigger: 'click'
  }));
}


