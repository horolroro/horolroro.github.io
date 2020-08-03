var onRanking = {
	init: function(){
		var swiper2 = new Swiper ('.swiper2', {
			autoplay: {
				delay: 2500,
			},
			speed : 1000,
			spaceBetween: 10,
			slidesPerView: 6,
			slidesPerGroup : 1,
			direction: 'horizontal',
			loop: true,
			autoHeight: true,
			disableOnInteraction: true,
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
				}
			}
		});

		var swiper3 = new Swiper ('.swiper3', {
			autoplay: {
				delay: 2500,
			},
			speed : 1000,
			spaceBetween: 10,
			slidesPerView: 6,
			slidesPerGroup : 1,
			direction: 'horizontal',
			loop: true,
			autoHeight: true,
			disableOnInteraction: true,
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
				}
			}
		});

		onRanking.tab();
		onRanking.high();
		onRanking.exFloatOnetime();
	},
	tab : function(){
		$('.tab-menu a').on('click', function(e){
			e.preventDefault();
			var targetHash = $(this).attr('href');
			$('.tab-menu a').removeClass('active');
			$('.tab-content .tab_cont').removeClass('active');
			$(this).addClass('active')
			$(targetHash).addClass('active');
			
		});
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
	},
	exFloatOnetime : function(){
		const exBanner = $('.exfloatingBanner');

		setTimeout(function(){
			exBanner.find('.bnr_on').css({transform: 'scale(0)', opacity:'0'})
		}, 1500);
		$('.bnr_off').on('mouseenter', function(){
			let bnr_on_width = $('.bnr_on').find('img').attr('width');
			exBanner.find('.bnr_on').css({transform: 'scale(1)', opacity:'1' ,width: bnr_on_width + 'px'})
			exBanner.find('.btnHide').hide()
		}) 
		$('.exfloatingBanner').on('mouseleave', function(){
			exBanner.find('.bnr_on').css({transform: 'scale(0)', opacity:'0'})
			exBanner.find('.btnHide').show()
		}) 
	}
}