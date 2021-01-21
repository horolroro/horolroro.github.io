/* MIR4 */
var mir = {
	fullPage: function () { //fullPage
	var FullIndex  = 0;
	$('.sectionWrap').fullpage({
		anchors: ['main','story', 'class', 'classSub', 'growth','growthSub', 'signature', 'media'], // 수정1121
		//responsiveHeight: 500,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowOptions: {
			bounce:false,
			click:false, 
			preventDefaultException:{tagName:/.*/}
		},
		scrollOverflowEndPrevent: { delay: 3500, reversal: false },
		onLeave : function(origin, destination, direction){

			//스크롤 초기화
			setTimeout(function(){
				var scrollable = $('.section.active').find('.fp-scrollable'); 
				var iScrollInstance = scrollable.data('iscrollInstance');
				if(iScrollInstance){
					iScrollInstance.scrollTo(0, 0, 0)
				}
			},100)

			//직업 초기화
			setTimeout(function(){
				$('#classList > ul > li').eq(0).addClass('active').siblings().removeClass('active');
			},500)

			if(destination == 11){
				$('.growthSlide ul').slick('slickGoTo', 0);
			}

		},
		afterLoad: function(origin, destination, direction){
			//$('.page').removeClass('subOpen');
			
			$('.video .youtube').empty();
			setTimeout(function(){
				$('.infoSwipe').addClass('show');

				/* @start 수정1121 */
				if(origin == 'growthSub'){
					var videoSrc = $('.growthSlide .slick-slide.slick-current .growthVideo video').attr('data-src');
					$('.growthSlide .slick-slide.slick-current .growthVideo video').attr('src',videoSrc).get(0).play()
				}
				/* @end 수정1121  */

				if(origin == 'story'){
					if($('.videoStory video').attr('src').length < 1){
						var videoSrc = $('.videoStory video').attr('data-src');
						$('.videoStory video').attr('src',videoSrc).get(0).play()
					}else{
						$('.videoStory video').get(0).play()
					}
				}

				if(origin == 'class'){
					if($('.classSection .bgVideo video').attr('src').length < 1){
						var videoSrc = $('.classSection .bgVideo video').attr('data-src');
						$('.classSection .bgVideo video').attr('src',videoSrc).get(0).play()
					}else{
						$('.classSection .bgVideo video').get(0).play()
					}
				}

				if(origin == 'growth'){
					if($('.growthSection .bgVideo video').attr('src').length < 1){
						var videoSrc = $('.growthSection .bgVideo video').attr('data-src');
						$('.growthSection .bgVideo video').attr('src',videoSrc).get(0).play()
					}else{
						$('.growthSection .bgVideo video').get(0).play()
					}
				}


			},500)

			setTimeout(function(){
				$.fn.fullpage.reBuild()
			},300)

			//직업 초기화
			$('.skillText,.skillIcon').each(function(){
				$(this).find('li').eq(0).addClass('active').siblings().removeClass('active');
			})


			/* @start 수정1121 
			$('.showcase').removeClass('enter videoComplted');
			$('.playShow').removeClass('active');
			document.getElementById('introVideo').pause();
			document.getElementById('introVideo').currentTime = 0;
			 @end 수정1121  */

		}
	});

	$('.page .in > div').height($(window).height()) // 초기 서브페이지 높이 설정
  },

  gnbToggle: function () { //Gnb Toggle

	$(".btnMenu,.closeNav,.navList .list a").not('.notMove').click(function(){
		$('.head').toggleClass('gnbOpen');
	})


	$(".closeNav,.navList .list a").click(function(){
		$('.page .in > div').height($(window).height())
		setTimeout(function(){
			$.fn.fullpage.reBuild()
		},1000)
	})

  },
  sectionCheck: function () { //Section Check

	var winSc = $(window).scrollTop();
	var checkSection = ['.main','.reserve'];
	checkSection.map(function(value){
		if($(value).offset().top - 22 <= winSc && $(value).offset().top + $(value).height() - 44 >= winSc ){
			$('#viewport').addClass($(value).attr('id')+'On');
		}else{
			$('#viewport').removeClass($(value).attr('id')+'On');
		}
	})

  },
  agreeAll: function () { //약관 전체동의하기

	$("#agreeAll").click(function(){
		$(".checkList").find( "input:checkbox" ).prop("checked" ,$(this).prop("checked") );
	})

	$(".checkList .check input:checkbox").click(function(){

		if(!$(this).prop("checked")){
			$('#agreeAll').prop("checked",false);
		}

		var allCheck = 0;
		$(".checkList .check").find( "input:checkbox" ).each(function(){
			if($(this).prop("checked")){
				allCheck++;
			}
		})

		if(allCheck == $(".checkList .check").length){
			$('#agreeAll').prop("checked",true);
		}
	});

  },
  btnUrl: function () { // URL 복사
	/*
	var urlCopy = new ClipboardJS('.btnUrl', {
	  text: function (trigger) {
		return $('.copyUrl').val();
	  }
	});
	urlCopy.on('success', function (e) {
	  mir.alertOpen('URL 복사가 완료되었습니다.');
	});

	//사이트url 공유
	var btnShareUrl = new ClipboardJS('.btnShareUrl', {
	  text: function (trigger) {
		return window.location.href;
	  }
	});
	btnShareUrl.on('success', function (e) {
	  mir.alertOpen('URL 복사가 완료되었습니다.');
	});
	*/
  },

  contentOpen: function (el) { //컨텐츠팝업-열기

	this.scrollOff();
	
	var parent = $('.contentPop')
	parent.show();
	parent.find(el).show().siblings().hide();
	
	var pop = parent.find('.popIn');
	
	setTimeout(function(){
		pop.css({ 'visibility' : 'visible',  'marginTop' : - (pop.outerHeight()/2)});
	},10)

  },
  contentClose: function () { //컨텐츠팝업-닫기

	this.scrollOn()
	$('.contentPop').hide(); 
	$('.contentPop .popIn').css({ 'visibility' : 'hidden', 'marginTop' : 0})

  },
  alertOpen: function (el,popClass,width,height) { //경고팝업-열기

	this.scrollOff();
	$('.alertText').html(el);
	$('.alertText').css({
		'width':width,
		'height':height
	})
	$('#popupAlert').addClass(popClass).show()
	
	var pop = $('#popupAlert .popIn');
	
	setTimeout(function(){
		pop.css({ 
			'visibility' : 'visible', 
			'marginTop' : - (pop.outerHeight()/2)
		});
	},10)

  },
  alertClose: function () { //경고팝업-닫기

	this.scrollOn()
	$('#popupAlert').hide().removeClass();
	$('.alertText').css({'width':'auto', 'height':'auto'})
	$('#popupAlert .popIn').css({ 'visibility' : 'hidden', 'marginTop' : 0})

  },
  youtubeOpen: function (id){ //유투브팝업-열기

	this.scrollOff();
	var src = 'https://www.youtube.com/embed/'+id+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&showinfo=0&autoplay=1&playsinline=1';
	$('#youtubeMovie iframe').attr('src',src);
	$('.youtubePop').show();

	setTimeout(function(){
		$('#player_youtubePop')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	},800)
      

  },
  youtubeClose: function () { // 유투브팝업-닫기

	this.scrollOn()
	$('.youtubePop').hide();
	$('#youtubeMovie iframe').attr('src','');

  },
  rewardOpen: function (off, video){ //보상받기팝업-열기
	
	var src = 'https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&showinfo=0&autoplay=1&playsinline=1';
	$('#rewardYoutube iframe').attr('src',src);
	$('.rewardPop').show();

	setTimeout(function(){
		$('#player_rewardPop')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	},800)

	//비활성 보상받기 표시
	if(off == 'off'){
		$('.rewardPop').addClass('off');
	}

	this.scrollOff();

  },
  rewardClose: function () { // 보상받기팝업-닫기

	this.scrollOn();
	//clearTimeout(rewardCheck);
	$('.rewardPop').hide().addClass('off');
	$('#rewardYoutube iframe').attr('src','');

  },
  scrollOff: function () { //팝업오픈 스크롤방지


  },
  scrollOn: function () { //팝업오픈 스크롤해제


  },
  fullVideo: function (el) { //Full Video

		var width = $(window).width(),
		pWidth,
		height = $(window).height(),
		pHeight;
		
		$video = $(el).find('video');
		
		if (width / (16/9) < height) { 
			pWidth = Math.ceil(height * (16/9));
			$video.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0});
		} else { 
			pHeight = Math.ceil(width / (16/9));
			$video.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2});
		}
  },

  chaChange: function (el) { //Class Change

	var ani = true;

	$('.btnCha a').on('click',function(e){
		if(ani){
			var idx = $(this).attr('data-cha');
			$('#classList > ul > li').eq(idx).addClass('active').siblings().removeClass('active')

			$('.video .youtube').empty();
			//$('.mp4Video').hide();


			setTimeout(function(){
				ani = true;
			},500)
		}
		ani = false;

		//직업 초기화
		$('.skillText,.skillIcon').each(function(){
			$(this).find('li').eq(0).addClass('active').siblings().removeClass('active');
		})


	})
  },
  growthSlide: function (el) { //Growth Slide
	var $slickElement = $('.growthSlide ul').slick({
		dots: false,
		variableWidth : true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		arrows: false,
		fade: false,
		infinite: false,
		autoplay: false,
		//autoplaySpeed: 4000,
		speed: 500,
		pauseOnHover:false,
		pauseOnDotsHover:false,
		pauseOnFocus:false,
	});

	$slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){

		if($('.growthSlide .slick-slide.slick-current .growthVideo video').attr('src').length > 0){
			$('.growthSlide .slick-slide.slick-current .growthVideo video').get(0).play()
		}else{
			var videoSrc = $('.growthSlide .slick-slide.slick-current .growthVideo video').attr('data-src');
			$('.growthSlide .slick-slide.slick-current .growthVideo video').attr('src',videoSrc).get(0).play()
		}


		$('.growthSlide .slick-slide').not('.slick-current').each(function(){
			$(this).find('.growthVideo video').get(0).pause()
		})
		$('.infoSwipe').removeClass('show');

	});


  },
  noticeSlide: function (el) { //Growth Slide
	var noticeSlide = $('.noticeSlide ul').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		infinite: true,
		autoplay: true,
		vertical: true,
		//autoplaySpeed: 4000,
		speed: 500,
		pauseOnHover:false,
		pauseOnDotsHover:false,
		pauseOnFocus:false,
	});


  },
  tabChange: function (el) { //Tab Change
	$('.tabList ul li').on('click',function(e){
		var idx = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.tabList').parent().find('.tabCont ul li').eq(idx).show().siblings().hide();
		$('.video .youtube').empty();
		//$('.mp4Video').hide();
	})
  },
  videoSkillChange: function (el) { //Video Skill Change
	$('.controlWrap .control a').on('click',function(e){
		var idx = $(this).index();
		$(this).parents('.controlWrap').find('.infoCha > div').eq(idx).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
		$('.controlWrap .youtube').empty();
		if(idx == 1){
			//$('.mp4Video').hide();
		}
	})
  },
  video: function (el) { //video
	$('.video').on('click',function(e){
		var idx = $(this).index();
		var iframe = '<iframe width="100" id="player_content" height="120"  src="https://www.youtube.com/embed/'+$(this).attr('data-src')+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&showinfo=0&autoplay=1&playsinline=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  frameborder="0" allowfullscreen="0"></iframe>'
		$(this).find('.youtube').append(iframe);

		setTimeout(function(){
			$('#player_content')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
		},800)
	})
  },
  mp4Video: function (el) { //mp4Video
	$('.mp4Wrap').on('click',function(e){
		//$(this).find('.mp4Video').show().find('video').get(0).play();
	})
  },
  randomStone: function (el) { //Random Stone

	var stone = [4,5,6] // 랜덤마석 3종류
	var randomNum = Math.floor(Math.random() * 4);

	$('.cont10-random .ran').text(stone[randomNum]);
	mir.contentOpen('.cont10-random')
  },
  chaSkillList: function () { //Cha Skill List
	$('.skillIcon ul li').mouseenter(function(){
		var idx = $(this).index();
		$(this).parents('.skillInfo').find('.skillText ul li').eq(idx).addClass('active').siblings().removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
	})
  },
  init: function () {
	this.fullPage(); //fullPage
    this.gnbToggle(); //Gnb Toggle
    this.agreeAll(); //약관 전체동의하기
    this.btnUrl(); //URL 복사
	//this.fullVideo('.bgVideo'); //Full Video	 
	this.chaChange(); //Class Change 
	this.growthSlide(); //Growth Slide
	this.tabChange(); //Tab Change
	this.videoSkillChange(); //Video Skill Change
	this.video(); //Video
	this.mp4Video(); //mp4Video
	this.noticeSlide(); //Notice Slide
	this.chaSkillList(); //Cha Skill List

	
  },
}


$(function () {
	 mir.init(); // mir init
	 $(this).find('.reserveForm').cmmValidator(); //유효성 체크 실행
})

$(document).ready(function(){
	$('html').addClass('load');

	//가로모드 벙지
	$(window).bind("orientationchange", function(e) {
		var orientation = window.orientation;
		if(window.orientation == 0) {
			$('html').removeClass('land');
		} else {
			setTimeout(function() {
				$('html').addClass('land');
			}, 100)
		}
	});

	if(window.orientation != 0){
		$('html').addClass('land');
	}else{
		$('html').removeClass('land');
	}

})


$(window).on({
	resize:function() {
		//mir.fullVideo('.bgVideo');
		$('.page .in > div').height($(window).height())
	},
	scroll:function() {
		//mir.sectionCheck();
	},
	load : function(){

	}
})



/* @start 수정1012 */

//편성표 열기
function tableOpen(){
	$('.tablePop').show();
	$.fn.fullpage.setAllowScrolling(false);
}

//편성표 닫기
function tableClose(){
	$('.tablePop').hide();
	$.fn.fullpage.setAllowScrolling(true);
}

/* @end 수정1012  */


/* @start 수정1121 */
/*
$(function(){
	var dt =0;  // 서버시간과 오차
	var xmlHttp;
	var myrem;

	function srvTime(url){
	  if(url == undefined) { url = window.location.href.toString(); }
	  if(window.XMLHttpRequest){
	   xmlHttp = new XMLHttpRequest();
	  }else if(window.ActiveXObject){
	   xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
	  }else{
	   return null; 
	  }

	  xmlHttp.open('HEAD',url,false); 
	  xmlHttp.setRequestHeader("Content-Type", "text/html");
	  xmlHttp.send('');
	  return xmlHttp.getResponseHeader("Date"); 
	}

	// 카운트다운 
	CountDownTimer('11/19/2020 04:00 PM', 'newcountdown');

	function CountDownTimer(dt, id){

		var end = new Date(dt);
		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		var timer;

		function showRemaining() {

			var now = new Date(srvTime());
			var distance = end - now;

			//카운트 다운 끝 체크
			if (distance < 0) {
				clearInterval(timer);
				$('.day').text('00')
				$('.hour').text('00')
				$('.minute').text('00')
				$('.second').text('00')
				 return;
			}

			var days = Math.floor(distance / _day);

			var hours = Math.floor((distance % _day) / _hour);

			var minutes = Math.floor((distance % _hour) / _minute);

			var seconds = Math.floor((distance % _minute) / _second);

			if(parseInt(days) < 10){ 
				days = 0 + "" + days; 
			} 

			if(parseInt(hours) < 10){ 
				hours = 0 + "" + hours; 
			}

			if(parseInt(minutes) < 10){ 
				minutes = 0 + "" + minutes; 
			} 

			if(parseInt(seconds) < 10){ 
				seconds = 0 + "" + seconds; 
			} 
			$('.day').text(days)
			$('.hour').text(hours)
			$('.minute').text(minutes)
			$('.second').text(seconds)
		}

		timer = setInterval(showRemaining, 1000);

	}
})


$(document).ready(function(){
	var myVid =  document.getElementById('introVideo');
	myVid.addEventListener('ended',myHandler,false);

	function myHandler(e) {
		$('.showcase').addClass('videoComplted');
		var src = $('.showEnter .videoArea .youtube').attr('video-src');
		var iframe = '<iframe width="100" height="120" src="'+src+'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  frameborder="0" allowfullscreen="0"></iframe>'
		setTimeout(function(){
			$('.showEnter .videoArea .youtube').append(iframe);
		},200)
	}

	$('.playShow').not('.disabled').click(function(){
		$('.showcase').addClass('enter');
		myVid.play();
	})

	$('.playShow').mouseenter(function(){
		$('.playShow').addClass('active');
	})

	$('.playShow').mouseleave(function(){
		$('.playShow').removeClass('active');
	})


	$('.showcase .closeEnter').click(function(){
		$('.showcase').removeClass('enter videoComplted');
		$('.showEnter .videoArea .youtube').empty();
		myVid.pause();
		myVid.currentTime = 0;
	})
})
/* @end 수정1121  */