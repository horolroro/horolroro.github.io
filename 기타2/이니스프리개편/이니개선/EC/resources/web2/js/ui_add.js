//WEB

$(document).ready(function(){
	//온라인실시간
	if($('.onRanking').length){onRanking.init();}
	//확장배너
	exFloatOnetime();
	//메인 팝업 슬라이드
	if($('.popEvtSlider').length){popEvtSlider.init()}
})

//온라인 실시간랭킹
var onRanking = {
	init: function(){
		var idx = Math.round($(".swiper2 .swiper-slide").length) 
		var idx2 = Math.round($(".swiper3 .swiper-slide").length) 
		console.log('idx='+idx+','+'idx2='+idx2)

		var swiper2 = new Swiper ('.swiper2', {
			autoplay: {
				delay: 2500,
			},
			speed : 1000,
			spaceBetween: 10,
			slidesPerView: 7,
			slidesPerGroup : 1,
			loop: true,
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on : {
				init : function(){
					var btnAuto = $('#tab-1 .btn_autoplay');

					$(".swiper2").on('mouseenter', function(){
						swiper2.autoplay.stop();
					});

					$(".swiper2").on('mouseleave', function(){
						if(!btnAuto.hasClass('stop')) {swiper2.autoplay.start();}
					});
					btnAuto.on('click', function(){
						var $this = $(this);
						if($this.hasClass('stop')) {
							$this.removeClass('stop');
							swiper2.autoplay.start();
							btnAuto.text('정지');
						} else {
							$this.addClass('stop');
							swiper2.autoplay.stop();
							btnAuto.text('재생');
						}
					});
					
					if(idx <= 4) {
						$('.swiper2').addClass( "disabled" );

						btnAuto.on('click', function(){
							$(this).attr({class:'btn_autoplay'})
						});
					}else{
						$('.swiper2').removeClass( "disabled" );
					}
				}
			}
		});
		

		var swiper3 = new Swiper ('.swiper3', {
			autoplay: {
				delay: 2500,
			},
			speed : 1000,
			spaceBetween: 10,
			slidesPerView: 7,
			slidesPerGroup : 1,
			loop: true,
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on : {
				init : function(){
					var btnAuto = $('#tab-2 .btn_autoplay');

					$(".swiper3").on('mouseenter', function(){
						swiper3.autoplay.stop();
					});

					$(".swiper3").on('mouseleave', function(){
						if(!btnAuto.hasClass('stop')) {swiper3.autoplay.start();}
					});
					btnAuto.on('click', function(){
						var $this = $(this);
						if($this.hasClass('stop')) {
							$this.removeClass('stop');
							swiper3.autoplay.start();
							btnAuto.text('정지');
						} else {
							$this.addClass('stop');
							swiper3.autoplay.stop();
							btnAuto.text('재생');
						}
					});

					if(idx2 <= 4) {
						$('.swiper3').addClass( "disabled" );

						btnAuto.on('click', function(){
							$(this).attr({class:'btn_autoplay'})
						});
					}else{
						$('.swiper3').removeClass( "disabled" );
					}
				}
			}
		});

		onRanking.high()
	},
	high : function(){
		var activeLeft = $('.cate li.active').position().left;
		var activeW = $('.cate li.active').width();

		$('.high').css({width: activeW,left: activeLeft});

		$('.cate li a').on('click', function(e){
			e.preventDefault();
			const el_higt_w = $(this).parents().width();
			const el_high = $('.high');

			$('.cate li').removeClass('active');
			$(this).parents().addClass('active');
			
			el_high.css({width: el_higt_w,left: $(this).position().left})
		});
	}
}
//확장배너
function exFloatOnetime(){
	const exBanner = $('.exfloatingBanner');

	exBanner.delay(3000).find('.bnr_on').css({transform: 'scale(1)', opacity:'1'})

	setTimeout(function(){
		exBanner.find('.bnr_on').css({transform: 'scale(0)', opacity:'0'})
		exBanner.find('.btnHide').show();
	}, 3000);
	$('.bnr_off').on('mouseenter', function(){
		let bnr_on_width = $('.bnr_on').find('img').attr('width');
		exBanner.find('.bnr_on').css({transform: 'scale(1)', opacity:'1' ,width: bnr_on_width + 'px'})
		//exBanner.find('.btnHide').hide()
	}) 
	$('.exfloatingBanner').on('mouseleave', function(){
		exBanner.find('.bnr_on').css({transform: 'scale(0)', opacity:'0'})
		//exBanner.find('.btnHide').show()
	}) 
}


/* 메인 팝업 슬라이드 */

var popEvtSlider = {

	init: function(){
		var mainSlidePop = $('.mainSlidePop');

		mainSlidePop.find('.txtArea2').addClass('mCustomScrollbar');
		mainSlidePop.find('.popWrap').css({transform: 'scale(1)'})
		
		popEvtSlider.slider();
		$('.btnWrap .close').on('click', function(){
			mainSlidePop.find('.popWrap').css({transform: 'scale(0)'});
			mainSlidePop.css({background: 'none',zIndex:'0'});
		})
	},
	slider : function(){
		var obj = 'popEvtSlider';
		var itemLength =  $('.'+ obj).find('.swiper-slide').length;
		var next = $('.mainSlidePop').find('.next');
		var today = $('.mainSlidePop').find('.today');
		
		if($('.popEvtSlider .slide').find('li').length == 1){
			next.hide();
			today.show();
		}

		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			// speed: 600,
			// autoplay: {delay: 5000},
			//autoHeight: true,
			slidesPerView : 'auto',
			spaceBetween: 10,
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<button type="button" class="' + className + '">' + '<em>' + (index + 1) + ' / ' + '</em>' + itemLength + '</button>';
				},
			},
			on : {
				slideChange: function () {
					let currentSlide = slide.realIndex + 1
					if(currentSlide == itemLength){
						next.hide();
						today.show();
					}else{
						next.show();
						today.hide();
					}
					//console.log(currentSlide, itemLength)
				  },
			}
		});

		next.on('click', function(){
			slide.slideNext();
		})
	}
}

//제품 상세, 함께 진행하는 프로모션 제품
$(function(){
	var list = $('.pdtPromo').find('.scrollWrap');

	list.niceScroll({cursorcolor:"#e2e2e2", cursorwidth:8, cursorborder:'none', horizrailenabled: false});
		
	$('a.btnpromo').on('click', function(){
		$(this).parent().toggleClass('active');

		if(!list.is(':visible')){
			list.slideDown();
		}else{
			list.slideUp();
		}
	})
});
