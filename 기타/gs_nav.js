;(function($,win){ 
	/** 
	 * <pre>
	 * 방송편성표 컨트롤러
	 * </pre>
	 */
	var broadSchedule = function(){
		var cls = this;

		/**
		 * 변수영역
		 */
		{
			/**
			 * <pre>데이터가 로딩중인지 여부</pre>
			 */
			cls.isLoadData = false;
			/**
			 * <pre>
			 * 생방송 남은시간 처리 여부
			 * 히스토리백과 날짜변경시 생방송 남은시간 처리여부 판단
			 * </pre>
			 */
			cls.isOnAirCount = false;
			/**
			 * <pre>다음방송시간과 현재시간의 간격</pre>
			 */
			cls.tvDiffTime = 0;
			/**
			 * <pre>방송편성표 URL정보</pre>
			 */
			cls.broadScheduleUrl = '/main/broadSchedule';
			/**
			 * <pre>생방송 정보 URL정보</pre>
			 */
			cls.onAirInfoUrl = '/main/liveBroadInfo';
			/**
			 * <pre>생방송남은시간 setTimeout</pre>
			 */
			cls.onAirTimerCount_setTimeout = null;
			/**
			 * <pre>방송상품리스트 CSS</pre>
			 */
			cls.broadContentsAreaCss = '.tvshop-onair-list';
			/**
			 * <pre>방송PGM CSS</pre>
			 */
			cls.broadPGMCss = '.tvshop-onair-item';
			/**
			 * <pre>검색 DIM 레이어 CSS</pre>
			 */
			cls.searchDimCss = '.tvshop-onair-srch-dim';
			/**
			 * <pre>검색 영역 CSS</pre>
			 */
			cls.searchAreaCss = '.tvshop-onair-srch-area';
			/**
			 * <pre>스크롤 체크 setTimeout</pre>
			 */
			cls.scrollHandler_setTimeout = null;
			/**
			 * <pre>요일포맷</pre>
			 */
			cls.dayOfWeek = ['일','월','화','수','목','금','토'];
			/**
			 * <pre>방송타입</pre>
			 */
			cls.broadType = 'LIVE';
			/**
			 * <pre>MSEQ 효율코드정의</pre>
			 */
			cls.liveMseqFix = {"LIVE" : "-L_L", "ETC" : "-L_LETC"}
			cls.liveMseqObj = {
					 'PRV_L'				: '-PD'		// 뒤로가기 버튼
					, 'PRV_R'				: '-L_S-PD'	// 검색 버튼
					, 'NEXT_L'				: '-ND'		// 장바구니 버튼
					, 'NEXT_R'				: '-L_S-ND'	// 생방송 상품(주상품)

					, 'PRD_PGM'				: '-PGM' 	// 주상품 PGM배너
					, 'PRD_MAIN_DETAIL'		: '-PRD' 	// 주상품 상세
					, 'PRD_SUB_DETAIL'		: '-SPRD' 	// 부상품 상세
					, 'PRD_MAIN_DIRECT_BUY'	: '-BUY' 	// 주상품 바로구매
					, 'PRD_SUB_DIRECT_BUY'	: '-SBUY' 	// 부상품 바로구매
					, 'MAIN_ALARM_ON'		: '-AR'		// 알람등록
					, 'SUB_ALARM_ON'		: '-SAR' 	// 알람해제
					, 'MAIN_ALARM_OFF'		: '-AC'		// 알람등록
					, 'SUB_ALARM_OFF'		: '-SAC' 	// 알람해제
					, 'LIVETALK'			: '-LIVET' 	// 부상품 바로구매
					, 'VIDEOPLAY'			: '-PLAY' 	// 부상품 바로구매
						
					, 'RIGHT_ELSAIR'		: '-L_S-AP' // 오른쪽타임라인 생방송외
					, 'RIGHT_ONAIR'			: '-L_S-LP' // 오른쪽타임라인 생방송
						
					, 'DATE_TODAY'			: '-C_SCH-TODAY'// 달력 오늘
					, 'DATE_PRV'			: '-C_SCH-PD-' 	// 달력 이전
					, 'DATE_NEXT'			: '-C_SCH-ND-' 	// 달력	이후 
					, 'SEARCH_BTN'			: '-C_SCH-SCH' 	// 검색버튼
					, 'PRO_BANNER'			: '-B_CM-1' 	// 프로모션띠배너
					, 'QUICK_ICON'			: '-C_SCH-ONAIR'// 생방송퀵아이콘
					, 'MORE_OPEN'			: '-C_SCH-SOPEN' // 더보기 오픈
					, 'MORE_CLOSE'			: '-C_SCH-SCLOSE'// 더보기 닫기
						
					, 'SWT_LIVE'			: '-SWT-L'
					, 'SWT_DATA'			: '-SWT-D'
			}
			
			cls.dataMseqFix = {"LIVE" : "-L_L_D", "ETC" : "-L_LETC_D"}
			cls.dataMseqObj = {
					 'PRV_L'				: '-PD'		// 뒤로가기 버튼
					, 'PRV_R'				: '-L_S_D-PD'	// 검색 버튼
					, 'NEXT_L'				: '-ND'		// 장바구니 버튼
					, 'NEXT_R'				: '-L_S_D-ND'	// 생방송 상품(주상품)

					, 'PRD_PGM'				: '-PGM' 	// 주상품 PGM배너
					, 'PRD_MAIN_DETAIL'		: '-PRD' 	// 주상품 상세
					, 'PRD_SUB_DETAIL'		: '-SPRD' 	// 부상품 상세
					, 'PRD_MAIN_DIRECT_BUY'	: '-BUY' 	// 주상품 바로구매
					, 'PRD_SUB_DIRECT_BUY'	: '-SBUY' 	// 부상품 바로구매
					, 'MAIN_ALARM_ON'		: '-AR'		// 알람등록
					, 'SUB_ALARM_ON'		: '-SAR' 	// 알람해제
					, 'MAIN_ALARM_OFF'		: '-AC'		// 알람등록
					, 'SUB_ALARM_OFF'		: '-SAC' 	// 알람해제
					, 'LIVETALK'			: '-LIVET' 	// 라이브톡
					, 'VIDEOPLAY'			: '-PLAY' 	// 영상재생
						
					, 'RIGHT_ELSAIR'		: '-L_S_D-AP' // 오른쪽타임라인 생방송외
					, 'RIGHT_ONAIR'			: '-L_S_D-LP' // 오른쪽타임라인 생방송
						
					, 'DATE_TODAY'			: '-C_SCH_D-TODAY'// 달력 오늘
					, 'DATE_PRV'			: '-C_SCH_D-PD-' 	// 달력 이전
					, 'DATE_NEXT'			: '-C_SCH_D-ND-' 	// 달력	이후 
					//, 'SEARCH_BTN'			: '-C_SCH-SCH' 	// 검색버튼
					, 'PRO_BANNER'			: '-B_CM_D-1' 	// 프로모션띠배너
					//, 'QUICK_ICON'			: '-C_SCH-ONAIR'// 생방송퀵아이콘
					, 'MORE_OPEN'			: '-C_SCH_D-SOPEN' // 더보기 오픈
					, 'MORE_CLOSE'			: '-C_SCH_D-SCLOSE'// 더보기 닫기
					
					, 'SWT_LIVE'			: '-SWT-L'
					, 'SWT_DATA'			: '-SWT-D'
			}	
			
		}
		
		/**
		 * 함수영역
		 */
		{
			/**
			 * <pre>
			 * 초기화
			 * </pre>
			 * @param isAjax ajax로딩여부
			 */
			cls.init = function(isAjax){
				cls.setDefaultCss('Y');
				if('undefined' == typeof isAjax || 'Y' !=  isAjax){
					cls.timeLive.init();
					cls.moveToggle();
				}
				cls.rightTimeLine.init();
				cls.setOnAirTimer();
				cls.setNextPrevMoreBtn();
				cls.createLoadingBar();
				cls.setEvent();
				cls.setSubProductArea();
				
				var broadType = gsCommon.m_storage.getItem("broadSchedule.broadType");
				if(null != broadType && 'undefined' != broadType){
					cls.broadType = broadType;
				}
				cls.initMseq(cls.broadType);

				setTimeout(function(){
					cls.moveTodayBroad();
					gsCommon.m_storage.removeItem("broadSchedule.pgmGbn");
					gsCommon.m_storage.removeItem("broadSchedule.broadType");
				}, 500);

	
			}
			
			/**
			 * <pre>
			 * 방송유형에 따른 효율 코드 초기화
			 * </pre>
			 */
			cls.initMseq = function(broadType){
				if('DATA' == cls.broadType){
					cls.mseqFix = cls.dataMseqFix;
					cls.mseqObj = cls.dataMseqObj;
				}else{
					cls.mseqFix = cls.liveMseqFix;
					cls.mseqObj = cls.liveMseqObj;
				}
			}
			
			/**
			 * <pre>
			 * 이전, 다음 날짜의 편성표 더보기 정보
			 * </pre>
			 */
			cls.setNextPrevMoreBtn = function(){
				// 선택된 날짜 css
				var timeLiveSwiperCssOfOnair = cls.timeLive.swiperTargetCss.concat(' li.on');
				var tdate = $(timeLiveSwiperCssOfOnair).data('brddate');
				if('undefined' != typeof tdate && 8 == ''.concat(tdate).length){
					tdate = ''.concat(tdate);
					var year = Number(tdate.substring(0,4));
					var month = Number(tdate.substring(4,6)) - 1;
					var day = Number(tdate.substring(6,8));
					var tm = new Date(year, month, day);					

					// 이전날짜 편성표 더보기
					if($(timeLiveSwiperCssOfOnair).prev().size() > 0){
						var dPrev = new Date(tm.getTime() - (1000 * 3600 * 24 * 1));
						cls.setNextPrevMoreBtnDetail('prev', dPrev);
					}
					// 다음날짜 편성표 더보기
					if($(timeLiveSwiperCssOfOnair).next().size() > 0){
						var dNext = new Date(tm.getTime() + (1000 * 3600 * 24 * 1));
						cls.setNextPrevMoreBtnDetail('next', dNext);
					}

					cls.rightTimeLine.rightTimeLine.resizeFix(true);
				}
			}

			/**
			 * <pre>
			 * 이전, 다음 날짜의 편성표 더보기 정보 상세
			 * </pre>
			 * @param gbn 구분 (next : 다음날짜, prev : 이전날짜)
			 * @param date 대상날짜 new Date()
			 */
			cls.setNextPrevMoreBtnDetail = function(gbn, date){
				var timeLiveSwiperCssOfOnair = cls.timeLive.swiperTargetCss.concat(' li.on');
				var contentCssClass = cls.broadContentsAreaCss.concat(' .').concat(gbn).concat(' .date');
				var brdDate = 'prev' == gbn ? $(timeLiveSwiperCssOfOnair).prev().data('brddate') : $(timeLiveSwiperCssOfOnair).next().data('brddate');
				
				$(contentCssClass).attr("data-brddate",brdDate);
				
				$(contentCssClass.concat(' em')).text(''.concat(date.getMonth() + 1).concat('.').concat(date.getDate()).concat(' ').concat(cls.dayOfWeek[date.getDay()]));
				$(contentCssClass).show();

				var rightTimeCssClass = cls.rightTimeLine.swiperTargetCss.concat(' .').concat(gbn);
				$(rightTimeCssClass).attr("data-brddate",brdDate);
				$(rightTimeCssClass.concat(' em')).text(''.concat(date.getMonth() + 1).concat('.').concat(date.getDate()).concat(' ').concat(cls.dayOfWeek[date.getDay()]));
				$(rightTimeCssClass).show();
			}
			
			/**
			 * <pre>
			 * 편성표 기본 CSS 적용
			 * </pre>
			 * @param flag 'Y' 적용 'N' 해제
			 */
			cls.setDefaultCss = function(flag){
				if('Y' == flag){
					$("body").addClass("bodyOnair");//body에 class 추가하면서, 풋터 숨김
					$("section#main_area").addClass("bodyPaddingOnair");				
				}else{
					$("body").removeClass("bodyOnair");//body에 class 추가하면서, 풋터 숨김
					$("section#main_area").removeClass("bodyPaddingOnair");				
				}
			}
			
			/**
			 * <pre>
			 * 히스토리백 관련 처리
			 * </pre>
			 */
			cls.checkHistoryBack = function(){
				var scrollY = gsCommon.getStorageOfPageCache("broadSchedule.scrollY");
				
				if(scrollY){
					cls.broadType = gsCommon.getStorageOfPageCache("broadSchedule.broadType");
					cls.initMseq(cls.broadType);
					
					$('#main_area').html(gsCommon.getStorageOfPageCache("broadSchedule.contents"));
					$(window).scrollTop(scrollY);
					cls.removeSessionStorage();

					cls.isOnAirCount = true;
					cls.setDefaultCss('Y');
					cls.timeLive.init();
					cls.moveToggle();
					cls.rightTimeLine.init();
					cls.setOnAirTimer();
					cls.setEvent();
					setTimeout(function(){
						cls.procScrollMove('Y');
					}, 500);
					$('#moreDiv').hide();
				}
			}

			/**
			 * <pre>
			 * LIVE / DATA 토글 버튼
			 * </pre>
			 */
			cls.moveToggle = function(){
		    	$('.tvshop-onair-status .btn-func').click(function(){
		    		if(!$(this).hasClass('on')){
		    			$('.tvshop-onair-status h4 strong').html('GS MY SHOP');
		    			$(this).addClass('on').html('<span>생방송 바로가기</span>');
						cls.broadType = 'DATA';
						cls.setToggleEvent();
						var params = {};
						params.gbn = "SWT_DATA";
						gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
		    		} else {
		    			$('.tvshop-onair-status h4 strong').html('GS SHOP LIVE');
		    			$(this).removeClass('on').html('<span>마이샵 바로가기</span>');
						cls.broadType = 'LIVE';
						cls.setToggleEvent();
						var params = {};
						params.gbn = "SWT_LIVE";
						gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
		    		}
		    	});
			}
			
			/**
			 * <pre>
			 * LIVE / DATA 토글 버튼 이벤트
			 * </pre>
			 */
			cls.setToggleEvent = function(){
				var todayIdx = $(win.broadSchedule.timeLive.swiperTargetCss.concat(' li')).index($('li[data-todayyn=Y]'));
				var url = cls.broadScheduleUrl;
				var param = {};
				param.broadType = cls.broadType;
				cls.initMseq(cls.broadType);
				cls.loadScheduleData(url, param);
				cls.timeLive.slideActive(todayIdx);
				$(win.broadSchedule.timeLive.swiperTargetCss.concat(' li')).siblings().removeClass('on');
				$(win.broadSchedule.timeLive.swiperTargetCss.concat(' li')).eq(todayIdx).addClass('on');
			}
			
			/**
			 * <pre>
			 * 이벤트설정
			 * </pre>
			 */
			cls.setEvent = function(){
				cls.scheduleAlarm.setEvent();
				cls.setScrollEvent();
							
				/**
				 * 편성날짜(달력) 검색버튼 이벤트
				 */
				/*
				$('.tvshop-day-wrap .btn-srch-open').on('click', function(e){
					
					e.stopPropagation(); //버블링방지
					
					var params = {};
					params.gbn = "SEARCH_BTN";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
					
					var scheduleSrchDim = $(cls.searchDimCss);
					var scheduleSrch = $(cls.searchAreaCss);
			
					if($('.tvshop-day-wrap').hasClass('on')){
						cls.scheduleSrchClose();
						return false;
					}
					scheduleSrch.addClass('on').queue(function(){
						setTimeout(function(){
							$('.tvshop-day-wrap').addClass('on')
						}, 10);
						$(this).dequeue();
					});
			
					//2017-02-06 편성표검색 focus 추가
					$('body').addClass('noscroll').bind('touchmove', function(e){ 
						e.preventDefault();
					});
					$(cls.searchAreaCss).find('.srch-input').focus();
					scheduleSrchDim.fadeIn(300).css({zIndex:60});
					
				});
				*/
				
				/*
				$(cls.searchDimCss).on('touchmove', function(e){
					e.preventDefault();
				}).on('click', function(e){
					if ($(cls.searchAreaCss).hasClass('on')) 
					cls.scheduleSrchClose();
					$(cls.searchAreaCss).find('.srch-input').blur();
				});
				 */
				
				/**
				 * 검색어 입력 취소 버튼
				 */
				/*
				$(".btn-del-srch").on('click', function(e){
					cls.setSearchWord('');
					$(".btn-del-srch").hide();
				});
				 */
				/**
				 * 검색어 입력 이벤트
				 */
				/*
			    $('#searchPrd').off('keydown').on('keydown',function(e){
			    	if(e.keyCode == 13 && !cls.isLoadData){
			    		cls.searchProduct();
			    	}
			    });
			    */
			    /**
			     * 탭이동시 편성표 관련 css 제거
			     */
			    $('ul.depth1_menu li').off('click.broadSchedule').on('click.broadSchedule', function(e){
			    	if(0 > $(this).data('aurl').indexOf('/main/broad/broadSchedule')){
			    		cls.setDefaultCss('N');
			    	}
			    });
			    
			    /**
			     * 생방송남은시간 퀵뷰
			     * 최신(오늘)날짜의 편성표 정보를 가져온다
			     */
			     /*
			   	$('.tvScheduleQuickView').off('click.broadSchedule').on('click.broadSchedule', function(e){
					var params = {};
					params.gbn = "QUICK_ICON";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
			    	cls.loadMainTab();
			    });
				*/
			    
			    /**
			     * 이전, 다음날짜이동 버튼 이벤트
			     */
			    $(''.concat(cls.rightTimeLine.swiperTargetCss).concat(' .product-nav').concat(', ').concat(cls.broadContentsAreaCss).concat(' .tvshop-onair-nav .date')).off('click.broadSchedule').on('click.broadSchedule', function(e){
			    	e.preventDefault();
			    	
			    	var $timelive = $(cls.timeLive.swiperTargetCss.concat(' li.swiper-slide[data-brddate='+$(this).data('brddate')+']'));
					var url = cls.broadScheduleUrl;
					var param = {};
					param.startDate = ''.concat($(this).data('brddate'));
					param.broadType = cls.broadType;

			    	cls.loadScheduleData(url, param);
			    	
			    	cls.timeLive.slideActive($(cls.timeLive.swiperTargetCss.concat(' li.swiper-slide')).index($timelive), cls.timeLive.timeLiveSwiper);
					$timelive.addClass('on');
					$timelive.siblings().removeClass('on');

					var mseqParams = {};
					if(!$(this).hasClass('product-nav')){
						mseqParams.isOnair = false;
					}
					mseqParams.gbn = 'prev' == $(this).data('nav') ? ($(this).hasClass('product-nav') ? "PRV_R" : "PRV_L") : ($(this).hasClass('product-nav') ? "NEXT_R" : "NEXT_L");
					gsCommon.sendClickTrac({ mseq : win.broadSchedule.setMseq(mseqParams)});
			    });


			    /**
			     * 상품상세정보 클릭시 세션스토리지 저장
			     */
			    $(cls.broadPGMCss).off('click.broadSchedule').on('click.broadSchedule', function(e){
			    	cls.setSessionStorage();
			    });
			    
			    /**
			     * 부상품 더보기 동작 이벤트
			     */
			    $(cls.broadContentsAreaCss.concat(' .inr .product-sub-btn')).off('click.broadSchedule').on('click.broadSchedule', function(e){
			    	//2017-06-20 부상품 더보기
			    	var $t = $(this).find('a.btn-more');
					var params = {};
			    	if($t.hasClass('open')){
			    		$t.removeClass("open");
			    		$(this).closest('.inr').children('.product-sub-prolist').slideUp(300).removeClass('open');
			    		$t.find("span").html("관련상품"+"<em>("+cls.getSubProductCount($(this).closest('.inr'))+"개)</em>"); //카운팅추가
						params.gbn = "MORE_CLOSE";
			    	}else{
			    		$t.addClass("open");
			    		$(this).closest('.inr').children('.product-sub-prolist').slideDown(300).addClass('open');
			    		$t.find("span").html("닫기");
						params.gbn = "MORE_OPEN";
			    	}

			    	gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
			    });
			    
			    /**
			     * 프로모션배너 MSEQ 이벤트
			     */
			    $(".tvshop-onair-bnr a").off("click").on("click", function(e) {
					var params = {};
					params.gbn = "PRO_BANNER";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
			    });

			    /**
			     * PGM배너 MSEQ 처리
			     */
			    $(".tvshop-onair-item .product-bnr a").off("click").on("click", function(e) {
					var params = {};
					params.isOnair = $(this).closest('.inr').hasClass('ontv');
					params.gbn = "PRD_PGM";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
			    });

			    /**
			     * 상품상세 MSEQ 처리
			     */
			    $(".inr .product-thumb > a, .inr .product-info > a").off("click").on("click", function(e) {
			    	var isSub = $(this).closest('.inr').hasClass('sub-pro');
					var params = {};
					params.isOnair = $(this).closest('.inr').hasClass('ontv');
					params.gbn = !isSub ? "PRD_MAIN_DETAIL" : "PRD_SUB_DETAIL";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
			    });

			    /**
			     * 라이브톡 MSEQ 처리
			     */
			    $(".inr .product-btn .btn_livetalk").off("click").on("click", function(e) {
					var params = {};
					params.isOnair = true;
					params.gbn = "LIVETALK";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});
			    });

			    /**
			     * 생방송 동영상 MSEQ 처리
			     */
			    $(".inr .product-thumb .vol_play").off("click").on("click", function(e) {
			    	e.stopPropagation();
					var params = {};
					params.isOnair = true;
					params.gbn = "VIDEOPLAY";
					gsCommon.sendClickTrac({ mseq : cls.setMseq(params)});

					var liveUrl = $('.inr .product-thumb .vol_play').data('liveurl');
					if(confirm("무선네트워크(3G/LTE)로 접속하시면" +
			        		"\n가입하신 요금제에 따라 별도\n요금이 부과될 수 있습니다.\n계속 하시겠습니까?")){
						setTimeout(function(){
							gsCommon.goLink(liveUrl);
						}, 300);
					}					
			    });
			}
			
			/**
			 * <pre>
			 * 부상품 갯수 
			 * </pre>
			 * @param $target 주상품 .inr 
			 */
			cls.getSubProductCount = function($target){
		    	var $t = $target.find('.product-sub-prolist');
		    	if(0 < $t.size()){
		    		return $t.children('.sub-pro').size();
		    	}				
		    	
		    	return 0;
			}
		
			/**
			 * <pre>
			 * 부상품 영역 갯수 설정
			 * </pre>
			 */
			cls.setSubProductArea = function(){
				var $t = $(cls.broadContentsAreaCss.concat(' .product-sub-btn span'));
				if($t.size() > 0){
					$t.each(function(){
						$(this).html("관련상품"+"<em>("+cls.getSubProductCount($(this).closest('.inr'))+"개)</em>");
					});
				}
			}
			
			/**
			 * <pre>
			 * 생방송남은시간 타이머 설정
			 * </pre>
			 */
			cls.setOnAirTimer = function(){
				if($('.inr').filter('.ontv').size() > 0){
					var broadStartDate = $('.inr').filter('.ontv').data('pgminfo').split('_')[0];
					var broadEndDate = ''.concat($('.inr').filter('.ontv').data('broadenddate'));
					var $t = $(cls.rightTimeLine.swiperTargetCss.concat(' li.on'));
					if($t.size() > 0){
						var broadtime = $t.data('pgminfo').split('_')[0];
						if(broadStartDate != broadtime && cls.isOnAirCount){
							cls.isOnAirCount = false;
							return;
						}
					}
					
					cls.mainTvBroadDateCheckInit(broadEndDate);
				}
			}

			/**
			 * <pre>
			 * 생방송 남은 시간 초기설정
			 * </pre>
			 * @param pgmInfo json 포맷
			 */
			cls.mainTvBroadDateCheckInit = function(nextBroadDate) {
				if('undefined' != typeof nextBroadDate){
					if(cls.onAirTimerCount_setTimeout != null){
						clearTimeout(cls.onAirTimerCount_setTimeout);
					}
					
					var nextTime = nextBroadDate;
					var tvStartTime	= new Date();
					var tvEndTime= new Date(eval(nextTime.substring(0,4)), eval(parseInt(nextTime.substring(4,6), 10) - 1), eval(nextTime.substring(6,8)), eval(nextTime.substring(8,10)), eval(nextTime.substring(10,12)), eval(nextTime.substring(12)));
					cls.tvDiffTime	= parseInt(((tvEndTime.getTime() - tvStartTime.getTime())/1000)+0.999,10);
					
					if (cls.tvDiffTime > 0) {
						cls.mainTvBroadDateCheck();
					} else {
						cls.onAirTimeCount('E', '');
//						cls.rightTimeLine.onAirTimeCount('E', '');
					}
				}
			}
			
			/**
			 * <pre>
			 * 생방송 상품 위치로 이동
			 * </pre>
			 */
			cls.moveTodayBroad = function() {
				var pgmInfo;

				if(null != gsCommon.m_storage.getItem('broadSchedule.pgmGbn') && 'undefined' != gsCommon.m_storage.getItem('broadSchedule.pgmGbn')){
					var pgmGbn = ''.concat(gsCommon.m_storage.getItem('broadSchedule.pgmGbn')).split('_');
					pgmInfo = $('.inr[data-pgminfo*='+pgmGbn[0]+']').filter('[data-prdid='+pgmGbn[1]+']').data('pgminfo');
				}else{
					var $t = $(cls.broadContentsAreaCss.concat(' .live-item > .ontv'));
					pgmInfo = $t.size() > 0 ? $t.data('pgminfo') : $(cls.broadContentsAreaCss.concat(' .inr:first')).data('pgminfo');
				}
				
				cls.moveProductByPGM(pgmInfo);
				cls.rightTimeLine.moveProductByPGM(pgmInfo);
			}			

			/**
			 * <pre>
			 * 세션스토리지 설정
			 * </pre>
			 */
			cls.setSessionStorage = function(){
				gsCommon.setStorageUsingCache('broadSchedule.contents', $('#main_area').html());
				gsCommon.setStorageUsingCache('broadSchedule.scrollY', gsCommon.getScrollNowY());
				gsCommon.setStorageUsingCache('broadSchedule.broadType', cls.broadType);
				gsCommon.m_storage.setItem('index.pageIdx', 1);
			}

			/**
			 * <pre>
			 * 세션스토리지 제거
			 * </pre>
			 */
			cls.removeSessionStorage = function(){
				gsCommon.removeStorageOfCurrentPage("broadSchedule.scrollY");
				gsCommon.removeStorageOfCurrentPage("broadSchedule.contents");
				gsCommon.removeStorageOfCurrentPage("broadSchedule.broadType");
				gsCommon.m_storage.removeItem("index.pageIdx");				
			}
			
			/**
			 * <pre>
			 * 편성데이터를 ajax로 가져옴
			 * </pre>
			 * @param url 링크경로
			 * @param param json 포맷의 파라메터정보
			 */ 
			cls.loadScheduleData = function(url, param){
				if(!cls.isLoadData){
					// 성공시 데이터 처리
					var sCallback = function(data){
						cls.isOnAirCount = false;
						// 리스트 
						var $t = $('<div></div>').attr("id","ajaxContents").html(data);
						var $leftArea = $t.find('.tvshop-onair-scroll');
						var $rightArea = $t.find('.tvScheduleCntRight');
						
						$('.tvshop-onair-scroll').html($leftArea.html());
						$('.tvScheduleCntRight').html($rightArea.html());
						
						cls.init("Y");
					}
					
					// 데이터 로딩중 처리
					var bCallback = function(){
						cls.isLoadData = true;
						$('.loading_cont_abs').show();
					}
					
					// 데이터 로딩 완료시 처리
					var cCallback = function(){
						cls.isLoadData = false;
						$('.loading_cont_abs').hide();
					}
					
					if('undefined' != typeof param.startDate){
						url += '/'.concat(param.startDate);
					}
					
					gsCommon.ajaxCall('get', url, param, sCallback, null, bCallback, cCallback);
				}
			}
			
			/**
			 * <pre>
			 * 현재날짜정보를 가져온다
			 * yyyyMMdd
			 * </pre>
			 */
			cls.getCurrentDate = function(){
				var date = new Date();
				var strDate = [];
				strDate.push(date.getFullYear());
				strDate.push('0'.concat(date.getMonth() + 1).substring('0'.concat(date.getMonth() + 1).length-2));
				strDate.push('0'.concat(date.getDate()).substring('0'.concat(date.getDate()).length-2));			
//				strDate.push('0'.concat(date.getHours()).substring('0'.concat(date.getHours()).length-2));
//				strDate.push('0'.concat(date.getMinutes()).substring('0'.concat(date.getMinutes()).length-2));
//				strDate.push('0'.concat(date.getSeconds()).substring('0'.concat(date.getSeconds()).length-2));
				
				return strDate.join('');
			}
			
			/**
			 * <pre>
			 * 해당 날짜가 현재인지 여부
			 * </pre>
			 * 
			 * @param targetDate yyyyMMdd 비교대상 날짜
			 */
			cls.isToday = function(targetDate){
				return cls.getCurrentDate() == targetDate;
			}

			/**
			 * <pre>
			 * 방송편성표 검색
			 * </pre>
			 */
			cls.searchProduct = function() {
				var keyword = $("#searchPrd").val();
				if (keyword.length < 1 || keyword.trim() == "") {
					alert('검색어를 입력해 주세요.');
					return;
				} 
				$(cls.searchDimCss).trigger('click');
				setTimeout(function(){
					cls.setSessionStorage();
					var resultURL = [];
					resultURL.push("/section/broad/broadSchedule/search/LIVE/");
					resultURL.push(xssFilter.xssFilterConvertReplace(keyword));
					resultURL.push('?');
					resultURL.push('isMain=Y');
//					resultURL.push('&');
//					resultURL.push('openDate=20170715000000');
					location.href = resultURL.join('');
				}, 1500);
			}

			/**
			 * <pre>
			 * 해당방송의 상품으로 이동
			 * </pre>
			 * @param target 
			 */
			cls.moveProductByPGM = function(target){
				if('undefined' != typeof target){
//					var $t = $('.tvshop-onair-item[data-pgminfo='+target+']');
					var $t = $('.live-item > .inr[data-pgminfo='+target+']');
					if($t.size() > 0){
						setTimeout(function(){
//							var topFixArea = $t.offset().top - ($('.tvshop-day-wrap').height() + $('header').height()) + ($t.find('dt:first').height() - 6);
							var topFixArea = $t.offset().top - ($('.tvshop-day-wrap').height() + $('header').height() + 8);
							$('html,body').animate({scrollTop:topFixArea}, 100);
//							$(window).scrollTop(topFixArea);
						},500);
					}
				}
			}

			/**
			 * <pre>
			 * 생방송 남은 시간 실시간 체크 및 표시
			 * </pre>
			 */
			cls.mainTvBroadDateCheck = function(){
				tmpTime	= cls.tvDiffTime;								// 초계산
				viewSec	= tmpTime % 60;
				if(viewSec < 10){viewSec="0" + viewSec;}				// 이부분은 초단위에 한자리 숫자일때 앞에 0을 포함시키는것
			
				tmpTime		= parseInt(tmpTime / 60, 10);				// 분계산
				viewMinute	= tmpTime % 60;
				if(viewMinute<10){viewMinute="0" + viewMinute;}			// 이부분은 분단위에 한자리 숫자일때 앞에 0을 포함시키는것
			
				tmpTime		= parseInt(tmpTime / 60, 10);				// 시계산
				viewHours	= tmpTime % 24;
				if(viewHours<10){viewHours="0" + viewHours;}				// 이부분은 시단위에 한자리 숫자일때 앞에 0을 포함시키는것
			
				tmpTime		= parseInt(tmpTime / 24, 10);				// 일수계산
				viewDay		= tmpTime % 12;
				
				var timer = viewHours + ":" + viewMinute + ":" + viewSec;
				
				if('00' == viewHours && '00' == viewMinute && '00' == viewSec){
					cls.onAirTimeCount('E', '');
//					cls.rightTimeLine.onAirTimeCount('E', '');
				}else{
					cls.onAirTimeCount('S', timer);
//					cls.rightTimeLine.onAirTimeCount('S', timer);
				}
			
				cls.tvDiffTime -= 1;

				if (cls.tvDiffTime < 0) {
					if(cls.onAirTimerCount_setTimeout != null){
						clearTimeout(cls.onAirTimerCount_setTimeout);
					}
				} else {
					cls.onAirTimerCount_setTimeout = setTimeout(cls.mainTvBroadDateCheck, 1000);
				}
			}	
			
			/**
			 * <pre>
			 * 타임라인 영역 스크롤 이벤트 설정
			 * </pre>
			 */
			cls.setScrollEvent = function(){
				$('.tvshop-onair-scroll').bind('touchmove.leftTimeline touchend.leftTimeline',function(e){
					if(cls.scrollHandler_setTimeout == null){
						cls.scrollMoveHandler();
					}
				});
			}
			
			/**
			 * <pre>
			 * 스크롤 이동시 처리 
			 * </pre>
			 * @param flag 'Y' or 'N' 오른쪽 Swper 타임라인 강제이동여부 
			 */
			cls.procScrollMove = function(flag){
				cls.rightTimeLine.resizeH();
				cls.rightTimeLine.rightTimeLine.resizeFix(true);
				var $target;
				// 편성라인 상단 체크 위치 단말의 1/3 지점
				var topFixArea = $('header').offset().top + $('.tvshop-day-wrap').height() + $('header').height() + cls.getMoveHeight();
//				$('.tvshop-onair-item').each(function(idx){
				$('.live-item > .inr').each(function(idx){
					if($(this).offset().top < topFixArea){
						$target = $(this);
					}
					return;
				});
				
				if($target && $target.size() > 0){
					// 생방송 영역이 아닐경우 생방송남은시간 퀵뷰처리
					//if(!$target.hasClass('ontv')){
					//	$('.tvScheduleQuickView').show();
					//}else{
					//	$('.tvScheduleQuickView').hide();
					//}
					// 우측 주상품 플리킹영역 해당 방송 상품으로 이동
					cls.rightTimeLine.moveProductByPGM($target.data('pgminfo'), flag);
				}				
			}
			
			/**
			 * <pre>
			 * 반복적으로 현재 스크롤위치를 체크하면서 오른쪽 Swiper 의 해당 PGM으로 이동
			 * </pre>
			 */
			cls.scrollMoveHandler = function(){
				cls.procScrollMove();
				cls.scrollHandler_setTimeout = setTimeout(cls.scrollMoveHandler, 100);
			}

			/**
			 * <pre>
			 * 편성표검색 닫기
			 * </pre>
			 */
			cls.scheduleSrchClose = function(){
				//2017-02-06 편성표검색 focus 추가
				var scheduleSrchDim = $(cls.searchDimCss);
				var scheduleSrch = $(cls.searchAreaCss);
			
				if(scheduleSrch.hasClass('on')){
					$('.tvshop-day-wrap').removeClass('on').queue(function(){
						setTimeout(function(){
							scheduleSrch.removeClass('on');
						}, 100);
						$(this).dequeue();
					});
				};
			
				scheduleSrchDim.fadeOut(300);
				$('body').removeClass('noscroll').unbind('touchmove');
			}

			/**
			 * <pre>
			 * 검색어삭제버튼 숨김
			 * </pre>
			 */
			cls.checkDelSrcBtn = function(){
	    		if('' == $('#searchPrd').val().trim()){
	    			$('.btn_del_srch').hide();
		    	}else{
	    			$('.btn_del_srch').show();
		    	}
			}

			/**
			 * <pre>
			 * 검색어 지정
			 * </pre>
			 * @param tq 검색어
			 */
			cls.setSearchWord = function(tq){
				$('#searchPrd').val(tq);
			}

			/**
			 * <pre>
			 * 화면의 컨텐츠 영역 1/3 지점 높이값
			 * </pre>
			 */
			cls.getMoveHeight = function(){
				return (window.screen.availHeight - $('header').height() - $('.tvshop-day-wrap').height() - $('.quick_link_area').height()) / 3;
			} 

			/**
			 * <pre>
			 * 편성표 메인
			 * </pre>
			 */
			cls.loadMainTab = function(){
	    		cls.setDefaultCss('N');
				loadTab($('#main_tab_list ul.depth1_menu li.on').data('id'));
			}
			
			/**
			 * <pre>
			 * onAir 영역 남은시간 카운트 처리
			 * </pre>
			 * @param gbn 'E' 방송종료, 'S' 남은시간
			 * @param time 남은시간 00:00:00
			 */
			cls.onAirTimeCount = function(gbn, time){
				var timer = 'TV HIT';
				if('E' == gbn){
					// 방송종료
					timer = "방송종료";
					if($('.tvShopping_vol').size() > 0){
						$('.tvShopping_vol').hide();
					}
					cls.isOnAirCount = true;
				}else if('S' == gbn){
					// 생방송중 남은시간
					timer = time;
				}

				if($('.live-item .time_remain').size() > 0){
					// HIT
					$('.live-item .time_remain').html(timer);
				}
			}

			/**
			 * <pre>
			 * 로딩바 생성
			 * </pre>
			 */
			cls.createLoadingBar = function(){
				// 2016-05-17 로딩바 독립사용 가능
				if($('.loading_cont_abs').size() == 0){
					var $loadBar = $("<div class='loading_cont_abs'><span class='loading15'></span></div>");
					$('body').append($loadBar);
					$loadBar.hide();
				}
			}
			
			/**
			 * <pre>
			 * mseq 설정
			 * </pre>
			 * @param params isOnair : 생방송구분, gbn : 구분자, idx : 인덱스
			 */
			cls.setMseq = function(params){
				var onAirGbn = 'undefined' != typeof params.isOnair ? (params.isOnair ? cls.mseqFix["LIVE"] : cls.mseqFix["ETC"]) : '';
				if('undefined' != typeof cls.mseqObj[params.gbn]){
					var sectionSeq = gsCommon.getParam($('#main_area').attr('data-section-url'), 'mseq');
					var mseq = sectionSeq.concat(onAirGbn).concat(cls.mseqObj[params.gbn]);
					if('undefined' != typeof params.idx){
						mseq = mseq.concat(params.idx);
					}
					
					return mseq;
				}else{
					return '';
				}
			}
		}
		
		return cls;
	}
	
	/**
	 * <pre>
	 * 방송알람관련 컨트롤러
	 * </pre>
	 */
	var scheduleAlarm = function(){
		var cls = this;
		/**
		 * <pre>
		 * 이벤트설정
		 * </pre>
		 */
		cls.setEvent = function() {
			// 방송알림 등록 버튼  
			$(".live-item .btn_alert").off("click").on("click", function(e) {
				var isSub = $(this).closest('.inr').hasClass('sub-pro');
				var isOn = $(this).hasClass('on');
				var params = {};
				params.isOnair = $(this).closest('.inr').hasClass('ontv');
				params.gbn = !isSub ? (!isOn ? "MAIN_ALARM_ON" : "MAIN_ALARM_OFF") : (!isOn ? "SUB_ALARM_ON" : "SUB_ALARM_OFF");
				gsCommon.sendClickTrac({ mseq : win.broadSchedule.setMseq(params)});

				if (!isOn) {
					$target = $(this).closest('.inr');
					var prdId = $target.data('prdid');
					var prdNm = $target.children('h4.label').text();
					// broadAlarm.js 참조
					broadAlarm.setPrdInfo(prdId, prdNm, "/index.gs");
					broadAlarm.setTarget($(this));
					broadAlarm.broadAlarmClickEvent(e);
				} else {
					broadAlarmDeleteByPrdId($(this).closest('.inr').data('prdid'), $(this));
				}
			});
		}
		
		return cls;
	}			

	/**
	 * <pre>
	 * 오른쪽 주상품 타임라인 플리킹
	 * </pre>
	 */
	var RightTimeLine = function(){
		var cls = this;

		cls.rightTimeLine = null;
		cls.halfIndex = 0;
		cls.currentIndex = 0;
		cls.swiperTargetCss = '.tvshop-nav';
		cls.scrollPosition = 0;

		/**
		 * <pre>초기설정</pre>
		 */
		cls.init = function(){
			if($(cls.swiperTargetCss.concat(' div.product-date')).size() == 0){
				$(cls.swiperTargetCss.concat(' div.hidden:first')).removeClass('hidden').addClass('product-date');
			}
			cls.resizeH();
			cls.rightTimeLine = new Swiper(cls.swiperTargetCss.concat(' .swiper-container'),{
				initialSlide:0,
				loop: false,
				slidesPerView: 'auto',
				freeMode : false,
				mode:'vertical',
				onFirstInit:function(swipe){
					swipe.swipeTo(swipe.activeIndex);
	
					for(var i=0; i<swipe.slides.length; i++){
						if($(swipe.slides[i]).hasClass('on')){
							cls.slideActive(i, swipe);
							return false;
						}
					}
				},
				onSlideClick:function(swipe){
					var pgmInfo = $(swipe.clickedSlide).data("pgminfo");
					if('undefined' != typeof pgmInfo){
//						cls.slideActive(swipe.clickedSlideIndex - 1);
						$(swipe.clickedSlide).addClass('on');
						$(swipe.clickedSlide).siblings().removeClass('on');

						$(window).off('touchmove.leftTimeline touchend.leftTimeline');
						win.broadSchedule.moveProductByPGM(pgmInfo);
						setTimeout(win.broadSchedule.setScrollEvent, 1000);

						var mseqParams = {};
						if($(cls.swiperTargetCss.concat(' li > div.onair')).size() > 0){
							var onairIdx = $(cls.swiperTargetCss.concat(' li')).index($(cls.swiperTargetCss.concat(' li > div.onair')).closest('li'));
							var interval = swipe.clickedSlideIndex - onairIdx;
//							mseqParams.gbn = interval == 0 ? "RIGHT_ONAIR" : (interval > 0 ? "RIGHT_NEXT" : "RIGHT_PRV");
							mseqParams.gbn = interval == 0 ? "RIGHT_ONAIR" : "RIGHT_ELSAIR";
						}else{
//							var todayIdx = $(win.broadSchedule.timeLive.swiperTargetCss.concat(' li')).index($('li[data-todayyn=Y]'));
//							var interval = $(win.broadSchedule.timeLive.swiperTargetCss.concat(' li')).index($(win.broadSchedule.timeLive.swiperTargetCss.concat(' li.on'))) - todayIdx;
//							mseqParams.gbn = interval > 0 ? "RIGHT_NEXT" : "RIGHT_PRV";
							mseqParams.gbn = "RIGHT_ELSAIR";
						}

						gsCommon.sendClickTrac({ mseq : win.broadSchedule.setMseq(mseqParams)});

					}else{
						var $t = $(swipe.clickedSlide).find('.product-nav');
						if($t.size() > 0){
							var url = win.broadSchedule.broadScheduleUrl;
							var param = {};
							param.broadType = cls.broadType;
							param.startDate = $t.data('brddate');

							win.broadSchedule.loadScheduleData(url, param);
						}
					}
				}
			});

			cls.rightTimeLine.resizeFix(true);
			cls.setEvent();
		}
		
		cls.setEvent = function(){
			/**
			 * Swiper 영역에 이벤트 발생시 편성라인의 스크롤 이벤트 제거
			 */
			$(cls.swiperTargetCss).bind('touchstart.rightTimeLine touchmove.rightTimeLine touchend.rightTimeLine',function(e){
				if(win.broadSchedule.scrollHandler_setTimeout != null){
					clearTimeout(win.broadSchedule.scrollHandler_setTimeout);
					win.broadSchedule.scrollHandler_setTimeout = null;
				}
			});
		}

		/**
		 * <pre>
		 * TV방송상품우측 네비게이션 높이지정
		 * </pre>
		 */
		cls.resizeH = function(){
			var tvNegativeSwipeH = $('header').height() + $('.quick_link_area').height() + $('.tvshop-day-wrap').height();
			var tvScheduleSwipeH = $(window).innerHeight() - tvNegativeSwipeH;

			if('Y' == $('.tvScheduleCntLeft').data('isios')){
				if(cls.scrollPosition <= $(window).scrollTop()){
					tvScheduleSwipeH = tvScheduleSwipeH + 69;
				}
				cls.scrollPosition = $(window).scrollTop();
			}
			
			$(cls.swiperTargetCss.concat(' .swiper-container') + ', ' + '.tvScheduleCntRight '.concat(cls.swiperTargetCss)).height(tvScheduleSwipeH);
		}

		/**
		 * <pre>
		 * 해당 위치로 이동
		 * </pre>
		 * @param index 이동할 위치
		 * @param swipe rightTimeLine swiper
		 */
		cls.slideActive = function(index, swipe){
			var target = (swipe) ? swipe : cls.rightTimeLine;

			cls.currentIndex = index - cls.halfIndex;
			if(cls.currentIndex < 0) cls.currentIndex = 0;
			target.swipeTo(cls.currentIndex);
		}

		/**
		 * <pre>
		 * 해당방송의 상품으로 이동
		 * </pre>
		 * @param target 
		 * @param flag 강제이동여부 
		 */
		cls.moveProductByPGM = function(target, flag){
//			var $t = $(cls.swiperTargetCss.concat(' li[data-pgminfo*='+target+']'));
			var $t = $(cls.swiperTargetCss.concat(' li[data-pgminfo='+target+']'));
			var cpgminfo = $(cls.swiperTargetCss).find(' li.on').data('pgminfo');
			if($t.size() > 0){
				// 이동할려는 PGM 이 지금과 같을경우 현재유지
				if(cpgminfo != target || 'Y' == flag){
					var idx = $(cls.swiperTargetCss.concat(' li')).index($($t.get(0)));
					cls.slideActive(idx, null);
					$(cls.swiperTargetCss.concat(' li')).removeClass('on');
					$($t.get(0)).addClass('on');
				}
			}
		}

		/**
		 * <pre>
		 * onAir 영역 남은시간 카운트 처리
		 * </pre>
		 * @param gbn 'E' 방송종료, 'S' 남은시간
		 * @param time 남은시간 00:00:00
		 */
		cls.onAirTimeCount = function(gbn, time){
			var $t = $(cls.swiperTargetCss.concat(' .onair .time-remain'));
			
			if($t.size() > 0){
				var timer = 'TV HIT';
				if('E' == gbn){
					// 방송종료
					timer = '방송종료';
				}else if('S' == gbn){
					// 생방송중 남은시간
					timer = time;
				}
				// HIT
				$t.text(timer);
			}
		}
		
		return cls;
	}

	/**
	 * <pre>
	 * 편성표달력영역 플리킹 컨트롤러
	 * </pre>
	 */
	var TimeLive = function(){
		var _that = this;
		_that.timeLiveSwiper = null;
		_that.halfIndex = 1;
		_that.currentIndex = 0;
		_that.swiperTargetCss = '.tvshop-day-list';

		return _that;
	}
	TimeLive.prototype = {
		init:function(){
			var _that = this;

			_that.timeLiveSwiper = new Swiper(_that.swiperTargetCss,{
				initialSlide:0,
				centeredSlides: false,
				slidesPerView: 8,
				DOMAnimation: false,
				onFirstInit:function(swipe){
					for(var i=0; i<swipe.slides.length; i++){
						if($(swipe.slides[i]).hasClass('on')){
							_that.slideActive(i, swipe);
							return false;
						}
					}
				},
				onSlideClick:function(swipe){
					var currentDate = win.broadSchedule.getCurrentDate();
					var targetDate = $(swipe.clickedSlide).data("brddate");
					var nowDate = $(_that.swiperTargetCss.concat(' li.swiper-slide.on')).data("brddate");
					// 현재 날짜와 다를경우 선택한 날짜의 편성정보를 가져온다
					if (nowDate != targetDate) {
						var mseqParams = {};
						// 선택한 날짜가 현재날짜일 경우 편성표 전체영역 새로고침(로딩된 날짜의 현재와 다를경우)
						//if(win.broadSchedule.isToday(targetDate)){
							//mseqParams.gbn = "DATE_TODAY";
							//loadTab($('#main_tab_list ul.depth1_menu li.on').data('id'));
						//}else{
							var url = win.broadSchedule.broadScheduleUrl;
							var param = {};
							param.broadType = win.broadSchedule.broadType;
							param.startDate = ''.concat(targetDate);
							
							win.broadSchedule.loadScheduleData(url, param);
							
							_that.slideActive(swipe.clickedSlideIndex);
							$(swipe.clickedSlide).addClass('on');
							$(swipe.clickedSlide).siblings().removeClass('on');

							var todayIdx = $(_that.swiperTargetCss.concat(' li')).index($('li[data-todayyn=Y]'));
							var interval = swipe.clickedSlideIndex - todayIdx;
							//mseqParams.gbn = interval > 0 ? "DATE_NEXT" : "DATE_PRV";
							
							if(interval > 0){
								mseqParams.gbn ="DATE_NEXT"
								mseqParams.idx = Math.abs(interval);
							}else if(interval < 0){
								mseqParams.gbn ="DATE_PRV"
								mseqParams.idx = Math.abs(interval);
							}else if(interval == 0){
								mseqParams.gbn ="DATE_TODAY"
							}
							
						//}

						gsCommon.sendClickTrac({ mseq : win.broadSchedule.setMseq(mseqParams)});
						
					}else{
						_that.slideActive(swipe.clickedSlideIndex);
						$(swipe.clickedSlide).addClass('on');
						$(swipe.clickedSlide).siblings().removeClass('on');
					}
				},
				onInit:function(swipe){
					swipe.activeIndex = _that.currentIndex;
				}

			});

			_that.timeLiveSwiper.resizeFix(true);
		},
		slideActive:function(index, swipe){
			var _that = this;
			var target = (swipe) ? swipe : _that.timeLiveSwiper;

			_that.currentIndex = index - _that.halfIndex;
			if(_that.currentIndex < 0) _that.currentIndex = 0;
			target.swipeTo(_that.currentIndex);
		},
		getActiveDate:function(){
			return $('.shop_live_time_list li.on').data('date');
		}
	};

	// 편성표달력
	broadSchedule.prototype.timeLive = new TimeLive();
	// 오른쪽 주상품 타임라인 플리킹
	broadSchedule.prototype.rightTimeLine = new RightTimeLine();
	// 방송알림
	broadSchedule.prototype.scheduleAlarm = new scheduleAlarm();
	
	window.broadSchedule = window.broadSchedule || new broadSchedule();

})(jQuery, window);

function goAlarmList() {
	window.broadSchedule.setSessionStorage();
	location.href = "/section/broad/alarm/list";
}