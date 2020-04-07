
/* JavaScript content from js/etv/M_G2222120M.js in folder common */

/* 
 *	편성표
 *  ID : M_G2222120M
 *  
*/

//page 컨트롤 클래스
CurrentView = {
	step : 0,
	today : null,
	todayIdx : null,
	flag : "N",	
	isWidget : false,
	PARAM : null,
	
	REMAINING_TIME : null,
	
	catalogId : null,
	categoryId : null,
	
	relationGoodsList : {}, // 연관상품 list
	limitedRelGoodsCnt : 999, // 연관상품 표시 제한 갯수
	
	date : [], //년월일
	mDay : [], // 월일
	day : [], //일
	datepicker : [], //요일
	
	temp : {},
	
	//상품 interval 체크
	prdInterval : 0,
	
	promiseArr : [],
	
	//좌측 상품 슬라이더 객체
	contentsSwiper : null,
	
	//우측 슬라이더 Translate
	contentsSwiperTranslate : null,
	
	//하단 util 영역 조정을 위한 기준 스크롤
	lastScroll : 0,

	//상단 헤더 + 날짜 높이
	movePosY : 0,
	
	//방송 재생 여부
	isPlay : true,
	
	//현재 방송 상품 이미지 HTML
	onAirPrdHtml : "",
	
	//현재 방송 상품 정보
	onAirPrdInfo : null,
	
	init : function( params ) {
		this.initializeComponent(params);
		this.onLoad(params);
	},
	
	//html 페이지 로딩 후 초기화해야 할 적업들을 정의한다.
	//이벤트 binding 등...
	initializeComponent : function( params ) {
		$("#subCategory").css("display", "none");
		//$("#btnFont").hide();
		
		if ( !Ns.Util.isNull( params ) && !Ns.Util.isNull( params.step ) ) {
			CurrentView.step = params.step; //backbutton이벤트에 의해서 페이지 전환되었을 때.. 
		}
		
		if( !Ns.Util.isNull(params) && !Ns.Util.isNull(params.fromWidget) )
			CurrentView.isWidget = true;
		else 
			CurrentView.isWidget = false;
		
		CurrentView.data.checkTime();
		CurrentView.today = Ns.Date.calcDate('', 0, 0, 0, CurrentView.step, 'yyyyMMdd');
		
		CurrentView.catalogId = !Ns.Util.isNull( params.catalogId ) ? params.catalogId : Const.getMarketingCatalogId('tv');
		
	},
	
	//html 페이지가 로딩된 후 기본적으로 처리해야 할 작업들을 정의한다.
	onLoad : function(params) {
		CurrentView.PARAM = params;
		CurrentView.data.getBroadcastingMobileList();
		
		if( CurrentView.flag == "N"){
			CurrentView.ui.setDateInfo();
			CurrentView.flag = "Y"
		}
		
		// 최상단 배너가 있을 경우 그 높이만큼 내려줌
		if($("#AttractAppDownLoad").css('display') == 'block'){
			$(".ns_tvScheduleCntRight").css('top', 100 + $("#AttractAppDownLoad").height());
			$(".date_swipe_broadcast").css('top', 45 + $("#AttractAppDownLoad").height());
		}

		//adbirx 송신용 파라미터
		if( mainCtrl.isOsApp() ){
			var invoke = {
				category : "Retention",
				action : "category_tvhomeshop"
			};
			Ns.Native.sendAdbrix( invoke );
		}
	},
	
	//데이터 관련 함수를 정의한다. 
	data : {
		
		/*
		 * 현재 시간이 00시~02시 사이이면 전날 편성표를 불러오도록 step을 설정해준다.
		 */
		checkTime : function() {
			var d = new Date();
			var nowHour = d.getHours();
			if(nowHour < 2){
				CurrentView.step--;
			}
		},
		/*
		 * 화면 구성에 필요한 날짜 관련 데이터 저장
		 */
		setDate : function() {
			return new Promise(function(resolve){
				var re = /^[0]/;
				
				for( var i = 0 ; i < 15 ; i++){
					var j = i - 7;
					CurrentView.date[i] = Ns.Date.calcDate('', 0, 0, 0, CurrentView.step + j, 'yyyyMMdd');
					CurrentView.day[i] = Ns.Date.calcDate('', 0, 0, 0, CurrentView.step + j, 'dd');
					CurrentView.mDay[i] = Ns.Date.calcDate('', 0, 0, 0, CurrentView.step + j, 'MM.dd').replace(re,"");
					CurrentView.datepicker[i] = Ns.Date.calcDate('', 0, 0, 0, CurrentView.step + j, 'E');
				}
				resolve();
			});
		},
		
		getBroadcastingMobileList : function() {
			CurrentView.data.setDate().then(function(){
				var prevDate = CurrentView.ui.getPrevDateInfo();
				var nextDate = CurrentView.ui.getNextDateInfo();
				
				//이전 날짜
				if(prevDate != -1){
					$("#prevDate").text(prevDate.prevDate);
					$("#prevDay").show();
				} else {
					$("#prevDay").hide();
				}
				
				//다음 날짜
				if(nextDate != -1){
					$("#nextDate").text(nextDate.nextDate);
					$("#nextDay").show();
				} else {
					$("#nextDay").hide();
				}
				
			}).then(function(){
				var today = CurrentView.ui.getCurrentDateInfo();
				$("#today").text(today.currentDate + " " + today.datepicker);
			});

			var invokeParams = {
				selectDay : CurrentView.today,
				processFlag : "brodcastingMobileScroll"
				//processFlag : "brodcastingMobile"
			};
			
			tran.callWCSJsonTran( "TVHomeShoppingAjaxMob", invokeParams, CurrentView.ui.setBroadcastingMobileList )
		},
		
		//현재 방송중인 아이템을 가져온다. 
		isCurrentLive : function( data ) {
			var currentTime = Ns.Date.getDateParse( Ns.Date.calcDate( '', 0, 0, 0, 0, 'yyyy-MM-dd HH:mm:ss' ) );
			
			/*var time = data.time.split( "~" );
			var stime = Ns.Date.getDateParse( time[0] );
			var etime = Ns.Date.getDateParse( time[1] );*/

			var stime = Ns.Date.getDateParse02(data.startDtm);
			var etime = Ns.Date.getDateParse02(data.endDtm);
			
			if ( stime <= currentTime && etime > currentTime  ) {
				return 0;
			} else if ( stime > currentTime ){
				return 1;
			} else if ( etime < currentTime ) {
				return -1;
			}
		},
		
		checkRealProduct : function( disp ){
			if(disp == "10" || disp == "15" ||
				disp == "20" || disp == "25" ||
				disp == "30" || disp == "60"){
				return true;
			}else{
				return false;
			}
		},
		
		/*
		 * 방송상태별 상품형태별 이름및 이벤트 설정 
		 */
		selectBtnEvent : function(orderYn, disp, partNumber, multiCd, busChnId){
			var obj = {};
			var realProduct = CurrentView.data.checkRealProduct(disp);
			
			if( orderYn == "Y" || orderYn == "T_EN" || orderYn == "D_EN"){
				if(realProduct){
					obj.name = "바로구매";
					obj.func = "productDisplay";
				}else{
					obj.name = "상담하기";
					obj.func = "productDisplay";
				}
			}else{
				obj.alert = "soldout";
				obj.name = "방송중 구매가능";
				obj.func = "alert";
			}

			var buyButton;
			/*if(obj.func == "noFunc"){
				obj.buyButton = Ns.Util.stringFormat('<a class="btn broadcast-box rate-a"><span>{0}</span></a>',
					obj.name );
				obj.clickEvent = Ns.Util.stringFormat('<a href="javascript:;">');
				
			} else */
			if( obj.func == "alert"){
				obj.clickEvent = Ns.Util.stringFormat('<a href="javascript:;">');
				obj.buyButton = Ns.Util.stringFormat('<a class="btn broadcast_box" href="javascript:;"><span>{0}</span></a>',
						obj.name );
				obj.relBuyButton = "";
			}else{
				obj.clickEvent = Ns.Util.stringFormat('<a href="javascript:mainCtrl.gotoProductDisplay({0},\'{1}\',\'{2}\');">',
					partNumber, multiCd, busChnId );
				obj.buyButton = Ns.Util.stringFormat('<a class="btn broadcast_box_live" href="javascript:mainCtrl.gotoProductDisplay({0},\'{1}\',\'{2}\');" ><span>{3}</span></a>',
					partNumber, multiCd, busChnId, obj.name );
				obj.relBuyButton = Ns.Util.stringFormat('<a class="btn btn_order" href="javascript:mainCtrl.gotoProductDisplay({0},\'{1}\',\'{2}\');" ><span>{3}</span></a>',
						partNumber, multiCd, busChnId, obj.name );
				
			}
			
			return obj;
		}
	},
	
	//ui 관련 함수를 정의한다.
	ui : {
		// 현재일 기준 전날 
		getPrevDateInfo : function(){
			var prevIdx = CurrentView.todayIdx -1;
			var prevDate = -1;
			if(prevIdx >= 0){
				prevDate = {prevDate : CurrentView.mDay[prevIdx], datepicker : CurrentView.datepicker[prevIdx]};
			} 
			
			return prevDate;
		},
		
		// 현재일 기준 다음날
		getNextDateInfo : function(){
			var nextIdx = CurrentView.todayIdx +1;
			var nextDate = -1;
			
			if(nextIdx <= 14){
				nextDate = {nextDate : CurrentView.mDay[nextIdx], datepicker : CurrentView.datepicker[nextIdx]};
			}
			return nextDate;
		},
	
		// 현재 날짜
		getCurrentDateInfo : function(){
			return {currentDate : CurrentView.mDay[CurrentView.todayIdx] , datepicker : CurrentView.datepicker[CurrentView.todayIdx]};
		},
		
		
		//상단 날짜 리스트
		setDateInfo : function() {
			var isToday = "";
			
			for (var i = 0; i < CurrentView.date.length; i++){
				if( i != 7){
					isToday += "<li class=\"swiper-slide\" id ="+i+"><a href=\"javascript:;\" class=\"ui-link\"><span class=\"date_num\">"+CurrentView.day[i]+"</span>"+CurrentView.datepicker[i]+"</a>";
				}else{
					isToday += "<li class=\"swiper-slide today\" id ="+i+"><a href=\"javascript:;\" class=\"ui-link\"><span class=\"date_num\">"+CurrentView.day[i]+"</span>오늘</a>";
				}
			}

			CurrentView.today = CurrentView.date[7];
			CurrentView.todayIdx = 7;
			$('#tabSwiper').html(isToday);
			
			CurrentView.movePosY = Number($("#header").height() + $("#promoHeroSwiper").height()),
			CurrentView.ui.setSwiper();	// 베너 swiper 처리 펑셩 호출
		},
		
		/**
		 * swiper 설정 및 세팅
		 */
		setSwiper : function (){
			// swiper 세팅
			var dateList = $('#promoHeroSwiper').find('.swiper-wrapper');
			var dateListLeng = dateList.find('.swiper-slide').length;
			dateList.addClass('default_date_swipe');
			
			dateList.find('.swiper-slide').removeClass('on');
			dateList.find('.swiper-slide').eq(7).addClass('on');

			dateList.find('.swiper-slide').each(function(i){
				$(this).click(function(){
					$('.swiper-wrapper').removeClass('default_date_swipe');
					dateList.find('.swiper-slide').removeClass('on');
					dateList.find('.swiper-slide').eq(i).addClass('on');
					var effectNum = dateList.find('.swiper-slide').width();		
					CurrentView.today = CurrentView.date[i];
					CurrentView.todayIdx = i;
					
					if((i>2)&(i<12)){
						var inTest = -(i-3)*effectNum;
						dateList.css("transform","translate3d("+ inTest +"px,0px,0px)");
						CurrentView.event.onclick_divDateTabArea();
					}else{
						CurrentView.event.onclick_divDateTabArea();
					}
				})
			})
			var tvTopBannerSwiper = new Swiper('#promoHeroSwiper', {
				onTouchMove : function(swiper) { 
					$('.swiper-wrapper').removeClass('default_date_swipe')
				},
				initialSlide: 5,
				slidesPerView: 7,
			    paginationClickable: true,
			    spaceBetween: 15
			});
				
		},	

		
		setBroadcastingMobileList : function( data ) {

			$("#ns_bodyPaddingOnair").hide();
			$(".ns_tvScheduleCntLeft").hide();
			$(".ns_tvScheduleCntRight").hide();
			$("#sub_nomsg").remove();
			
			$("#rightList").html("");
			$("#sectionLastBCList").html("");
			$("#sectionLiveBCList").html("");
			$("#sectionNextBCList").html("");
			$("#tvScheduleQuickView").hide();
			$(window).scrollTop(0);
			
			var noMsg = '<div class="sub_nomsg" id="sub_nomsg">';
			noMsg += '<p><strong>편성 상품이 없습니다</strong></p>';
			noMsg += '<p>본 편성표는 방송 확정된 프로그램의 상품만 제공하며, NS홈쇼핑의 내부 사정에 따라 변경 될 수 있습니다.</p>';
			noMsg += '</div>';
			
			if ( data.msg == null || data.msg=="" ) {
				$("#ns_bodyPaddingOnair").prepend(noMsg);
				$("#ns_bodyPaddingOnair").show();
				return false;
			} 
			
			var totalOrgan = data.msg.TotalOrgan;
			if ( totalOrgan == null || totalOrgan=="" ) {
				$("#ns_bodyPaddingOnair").prepend(noMsg);
				$("#ns_bodyPaddingOnair").show();
				return false;
			} 
			
			$("#sub_nomsg").remove();
			$("#tvScheduleQuickView").show();
			
			var currentPartNumber = "";
			var temp = {};
			
			// 우측 상품리스트 그리기
			CurrentView.ui.getRightProductHtml(totalOrgan);
			
			// 좌측 상품리스트 그리기
			for (var k = 0; k < totalOrgan.length; k++) {
				var info = totalOrgan[k];
				
				/*
				 * 생방송 상품 여부 
				 * -1 : 지난방송 
				 *  0 : 생방송 
				 *  1 :  방송 예정 
				 */
				var isLive = CurrentView.data.isCurrentLive( info );
				var time = CurrentView.ui.getTime( info.startDtm , info.endDtm );
				var imageUrl = Ns.Util.getImageUrl( info.partNumber, "Q" );
				
				var noImageUrl = Const.NO_IMAGE_URL +  'noimage_Q.jpg';
				var productName = Ns.UI.getProductName( info.brandCd, info.brandName, info.goodsName, info.headCopy );
				
				// 할인가 
				var saleTag 	= '';
				// 할인률
				var saleRateTag = '';
				// 생방송 타이머 태그
				var remainedTag = '';
				// 생방송 상품 추가 태그
				var onAirClass 	= '';
				//현재 방송 중인 상품 영역 ID
				var onAirItem 	= '';
				
				//Wapers 2017.09.25 옵션대표가 flag
				var optRepYn = "";
				if(undefined != info.prcWaveDisp){
					optRepYn = info.prcWaveDisp;
				}

				//Wapers 2017.09.25 옵션대표가 적용
				var salePrice 	= '';
				var strPriceDefault = "";
				var strPriceSelling = "";
				
				if(optRepYn == "~"){
					strPriceDefault = '원~';
					strPriceSelling = '원~';
					
				} else {
					strPriceDefault = '원';
					strPriceSelling = '원';
				}
				
				// 할인 적용 가격
				if((info.dispTypeCd == "35" || info.dispTypeCd == "40" || info.dispTypeCd == "45" || info.dispTypeCd == "56" || info.dispTypeCd == "58") && info.busChnId == 'TV'){
					   
				} else {
					
					// 할인 적용가 존재시
					if ( info.salePrice !=0 && info.priceofferprice != info.salePrice ) {
						// 할인률표시
						// 5% 미만 NS가 // 5% 이상 할인률 노출
						if( info.saleRate != 0 && info.saleRate > 5) {
							saleRateTag = '<dfn class="vol discountRate">' + info.saleRate+ '<span class="unit">%</span></dfn>';
						} else {
							saleRateTag = '<dfn class="vol nsPrice nsPrice_base">NS가</dfn>';
						}
						salePrice = Ns.Util.insertCommas( info.salePrice ); //알뜰할인가.
						saleTag = '<span class="infoPrice"><dfn class="label">NS가</dfn><strong>' + salePrice + '</strong>' + strPriceSelling + '</span>';

					// 할인 적용가 없을 시 NS가 노출
					} else {
						saleRateTag = '<dfn class="vol nsPrice">NS가</dfn>';
					}
				}
				
				//판매가.. 
				var offerPrice = "";
				var offerTag = "";
				offerPrice = Ns.Util.insertCommas( info.priceofferprice );
				// 할인 적용가 없을 시 판매가 노출	
				if( saleTag == "" ) {
					if((info.dispTypeCd == "35" || info.dispTypeCd == "40" || info.dispTypeCd == "45" || info.dispTypeCd == "56" || info.dispTypeCd == "58") && info.busChnId == 'TV'){
						
					} else {
						offerTag = '<span class="infoPrice"><dfn class="label">NS가</dfn><strong id="offerPrice">' + offerPrice + '</strong>' + strPriceSelling +'</span>';
					}	
					
				} else {
					offerTag = '<span class="basePrice"><dfn class="label">기본가</dfn><del id="offerPrice">'+offerPrice+'원</del></span>'
				}
				
				//현재 방송중이 아닌 상품
				if( isLive == -1  || isLive == 1 ) {
					temp[time] = {};
					temp[time].brandName = info.brandName;
					temp[time].partNumber = Number(info.partNumber);
					temp[time].goodsName = info.goodsName;
					
				//현재 방송
				} else if( isLive == 0 ) {
					
					remainedTag += '<div class="tvShopping_vol"><button class="vol_play" onclick="CurrentView.event.onclick_btnShowLive(\''+info.partNumber+'\');">방송보기</button>';
					remainedTag += '<span class="time_remain" id="remainedTime"></span></div>';
					onAirClass = 'ns_ontv';
					onAirItem = 'onAirItem';

					//  방송 상품 상세보기를 위한 데이터 저장
					CurrentView.onAirPrdInfo ={
						partNumber	: info.partNumber,	
						multiCd		: info.multiCd,
						busChnId	: info.busChnId
					}
					
					CurrentView.REMAINING_TIME = info.endDtm; 
					temp[time+"<<<<"]
					temp[time+"<<<<"] = {};
					temp[time+"<<<<"].brandName = info.brandName;
					temp[time+"<<<<"].partNumber = Number(info.partNumber);
					temp[time+"<<<<"].goodsName = info.goodsName;
					
					currentPartNumber = info.partNumber;
				
				} 
				
				/*
				 * 생방 구분
				 * 상품 데이터
				 * 방송 시간
				 * 상품 이미지
				 * 노이미지 url
				 * 노출 상품명
				 * 할인률 태그
				 * 할인가 태그
				 * 판매가 태그
				 * 생방 시간 태그
				 * 생방송 상품 영역 추가 클래스
				 * 상품별 이벤트 객체
				 */
				var obj = {
						isLive			: isLive,						
						info 			: info,
						time			: time,
						imageUrl 		: imageUrl,
						noImageUrl 		: noImageUrl,
						productName 	: productName,
						saleRateTag 	: saleRateTag,
						saleTag 		: saleTag,
						offerTag		: offerTag,
						remainedTag		: remainedTag,
						onAirClass		: onAirClass,
						eventObj		: CurrentView.data.selectBtnEvent(info.orderYn, info.dispTypeCd, info.partNumber, info.multiCd, info.busChnId),
						cnt				: k,
						onAirItem		: onAirItem
				}
				
				// 좌측 상품 리스트 그리기
				CurrentView.promiseArr.push(CurrentView.ui.getTVProductHtml(obj));
			} // end for loop
			CurrentView.temp = temp;
		
			Promise.all(CurrentView.promiseArr).then(function(){
				$(".ns_tvScheduleCntRight").show();
				$(".ns_tvScheduleCntLeft").show();
				$("#ns_bodyPaddingOnair").show();
				
				if($('#sectionLiveBCList').html() != ""){
					var movePosY = Number($("#header").height() + $("#promoHeroSwiper").height()) - $('#sectionLiveBCList .ns_tvshop_onair_item dt').eq(0).outerHeight();  //이동한 위치에서 header 86px + 여분 5px 만큼 아래로 이동.
					var top = $('#sectionLiveBCList').offset().top - movePosY - 10;
					setTimeout(function() { // footer HTML이 로드된 후 호출하기 위해 setTimeout을 넣어주었다.
						$(window).scrollTop(top);
					}, 500);
				} else {
					//$("#tvScheduleQuickView").hide();
				}

				//위젯에서 생방송보기 버튼 누를 때 실행됨
				if( CurrentView.isWidget ){
					var top = $('#sectionLiveBCList').offset().top - 86 + 5;
					CurrentView.event.onclick_showLive(currentPartNumber , top);
				};
				
				// 이벤트 바인딩
				CurrentView.util.initEvent();
				
				//좌측 리스트 앵커 동작 실행
				CurrentView.ui.prdIntervalFn();
				
			});
		},
		
		// 좌측 상품리스트 그리기
		getTVProductHtml  : function (drawObj) {
			
			var info = drawObj.info;
			var htmlTxt = '';
			
			//연관 & 서브 상품 리스트 작성 후 메인 상품 리스트 작성
			CurrentView.ui.getTVSubProductHtml(drawObj).then(function(relHtmlObj){
				var relHtmlTxt = '';
				var addBtnTxt = '';
				relHtmlTxt = relHtmlObj;

				// 연관 & 서브 상품 존재시 상품 더 보기 버튼 생성
				if(relHtmlTxt){
					var subPrdCnt = $(relHtmlTxt).find("div.product_thumbnail").length || 0;
					if(subPrdCnt > 0){
						addBtnTxt =  '<div class="product_sub_btn" data-part-number="'+ info.partNumber+'" data-cnt="'+ subPrdCnt +'" data-idx="'+ drawObj.cnt +'">';
						addBtnTxt += '<a href="javascript:;" class="btn_more">';
						addBtnTxt += '<span>상품 더 보기<em>(' + subPrdCnt + ')</em></span>';
						addBtnTxt += '</a>'
						addBtnTxt += '</div>';
					}
				}
				
				// 상품 판매가가 0원이면 가격  미노출
				if( $(drawObj.offerTag).find('#offerPrice').text() == "0" ){
					drawObj.offerTag = "";
					drawObj.saleTag = "";
					drawObj.saleRateTag = "";
				}
				
				htmlTxt = Ns.Util.stringFormat('\
					<div class="ns_tvshop_onair_item">\
			            <dl>\
			                <dt>\
			                    <div class="product_time"><span class="time">{0}</span></div>\
			                </dt>\
			                <dd>\
			                    <div class="ns_live_item" id="prd_{19}">\
			                        <div class="inr {14}">\
			                            <div class="product_thumbnail" id="{20}">\
											{1}\
		                                    <div class="product_Img"><img src="{2}" onerror="this.onerror=null;this.src=\'{18}\'" alt="상품 이미지"></div></a>\
											{3}\
			                            </div>\
			                            <div class="product_info">\
											{4}\
			                                <p class="product_Name">\
			                                    <dfn class="label">상품명</dfn>\
												{5}\
			                                </p>\
			                                <div class="product_Price">\
			                                    <dl class="ns_ontv">\
			                                        <dt class="hidden">생방송상품</dt>\
			                                        <dd>\
														{6}\
														{7}\
														{8}\
			                                        </dd>\
			                                    </dl>\
			                                 </div>\
			                                </a>\
			                            </div>\
			                            <div class="live_button_area">\
			                                <span>\
			                                    <a class="btn alarm-box rate-a" href="javascript:CurrentView.event.onclick_shoppingAlarm({9},{10},\'{11}\',\'{12}\');">\
			                                    	<span>방송알림</span>\
												</a>\
												{13}\
			                                </span>\
			                            </div>\
										<div class="product_sub_prolist" style="display:none" id="product_sub_prolist_{17}_{19}">\
											{15}\
						                </div>\
										{16}\
						            </div>\
						        </dd>\
						    </dl>\
						</div>',
						Ns.Date.calcDate(Ns.Date.getDateParse02(info.startDtm),0,0,0,0,"HH:mm"), drawObj.eventObj.clickEvent , drawObj.imageUrl , drawObj.remainedTag ,
						drawObj.eventObj.clickEvent , drawObj.productName , drawObj.saleRateTag ,drawObj.offerTag,
						drawObj.saleTag, info.partNumber, info.catentryId, drawObj.imageUrl, drawObj.productName,
						drawObj.eventObj.buyButton, drawObj.onAirClass, relHtmlTxt, addBtnTxt, info.partNumber, drawObj.noImageUrl, drawObj.cnt, drawObj.onAirItem);
			}).then(function(){
				if( drawObj.isLive == -1 ) { //이전 방송
					$("#sectionLastBCList").append( htmlTxt );
				} else if( drawObj.isLive == 0 ) { //현재 방송
					$("#sectionLiveBCList").append( htmlTxt );
					CurrentView.ui.setLimitLiveTime(); //방송 남은 시간 설정. 
				} else if( drawObj.isLive == 1 ) { //이후 방송
					$("#sectionNextBCList").append( htmlTxt );
				}
			});
		},
		
		//서브 , 연관 상품 그리기..
		getTVSubProductHtml : function(drawObj) {
			var info = drawObj.info;
			var relText = '';
			var noImageUrl = Const.NO_IMAGE_URL +  'noimage_F.jpg';
			
			return new Promise(function(resolve,reject){
				var relGoodsList = info.RelTotalOrgan;
				var k = 1;
				var relText = '';
				var prdTypeFlag = true;
				
				if(relGoodsList.length == 0){
					resolve();
				}
				
				for(var i = 0; i < relGoodsList.length; i++){
					var eventObj = CurrentView.data.selectBtnEvent(relGoodsList[i].orderYn, relGoodsList[i].dispTypeCd, relGoodsList[i].goodsId, relGoodsList[i].multiCd, relGoodsList[i].busChnId);
					var alertBtnTag = '';
					var onAirItemTag = '';
					var prdTypeLineClass = '';
					
					// 방송 상품 일 경우 방송알림 버튼 추가
					if(relGoodsList[i].broadProdYn == "Y" ){
						alertBtnTag += Ns.Util.stringFormat('\
							<ul>\
								<li class="flex_btn_alert">\
									<div>\
										<a href="javascript:CurrentView.event.onclick_shoppingAlarm({0},{1},\'{2}\',\'{3}\');" class="btn_alert ">\
											<span>방송알림</span>\
										</a>\
									</div>\
								</li>\
							</ul>',relGoodsList[i].goodsId, relGoodsList[i].catentryId, relGoodsList[i].imageUrl, relGoodsList[i].goodsName);
					}
					
					// 서브 상품 || 연관 상품 구분선 클래스
					if(relGoodsList[i].relGbn == "relProd"){
						if(prdTypeFlag){
							prdTypeLineClass = "relatedProducts_line";
							prdTypeFlag = false;
						}
					}
					
					if(eventObj.relBuyButton == ""){
						onAirItemTag = '<div class="vol_bar">방송중 구매가능</div>';
					}
					relText += Ns.Util.stringFormat('\
						<div class="inr sub_pro ontv {11}">\
		                	<h4 class="label">{0} </h4>\
			                <div class="product_thumbnail">\
								{1}\
									<div class="product_Img">\
										<img src="{2}" onerror="this.onerror=null;this.src=\'{9}\'" alt="상품이미지">\
									</div>\
									{10}\
								</a>\
			                </div>\
			                <div class="product_info">\
								{3}\
			                        <div class="product_Name">\
			                            <dfn class="label">상품명</dfn>{4}\
			                        </div>\
			                        <div class="productPrice">\
			                            <dl class="gs-ontv">\
			                                <dt class="hidden">생방송상품</dt>\
			                                <dd>\
												<dfn class="vol nsPrice">NS가</dfn>\
				                                <span class="basePrice">\
				                                    <dfn class="label">기본가</dfn>\
				                                    <del>{5}</del>원\
				                                </span>\
				                                <span class="infoPrice">\
				                                    <dfn class="label">NS가</dfn>\
				                                    <strong>{6}</strong>원\
				                                </span>\
			                                </dd>\
			                            </dl>\
			                        </div> \
			                    </a>\
			                </div>\
			                <div class="product_btn flex_btn">\
								{7}\
			                    <div class="flex_btn_order">\
									{8}\
								</div>\
			                </div>\
			            </div>',
			            relGoodsList[i].goodsName, eventObj.clickEvent , relGoodsList[i].imageUrl , 
						eventObj.clickEvent , relGoodsList[i].goodsName, Ns.Util.insertCommas(relGoodsList[i].price),
						Ns.Util.insertCommas(relGoodsList[i].salePrice), alertBtnTag,
						eventObj.relBuyButton, noImageUrl,onAirItemTag , prdTypeLineClass);
					if(i == relGoodsList.length -1 ){
						resolve(relText);
					}
				} // end loop
				
			});
		},
		
		// 우측 슬라이드 상품 리스트
		getRightProductHtml : function(prdObj){
			var info 		= prdObj;
			var prevDate 	= CurrentView.ui.getPrevDateInfo();
			var nextDate 	= CurrentView.ui.getNextDateInfo(); 
			var currentDate = CurrentView.ui.getCurrentDateInfo();
			var noImageUrl	= Const.NO_IMAGE_URL +  'noimage_D.jpg';
			var rightPrdHtml = '';
			
			// 전날 표시
			if(prevDate != -1){
				rightPrdHtml = Ns.Util.stringFormat('\
				<li class="swiper-slide">\
					<div class="product_nav prev">\
						<span><em class="date">{0}</em><em class="week">{1}</em>\</span>\
					</div>\
				</li>',prevDate.prevDate , prevDate.datepicker);
			}
			
			var onAirIndex = 1;
			new Promise(function(resolve){
				for(var i = 0; i < info.length; i++){
					var imageUrl	= Ns.Util.getImageUrl( info[i].partNumber, "D" );
					var onAirClass	= info[i].onAirFlag == "O" ? "onair" 		: '';
					var swiperOn	= info[i].onAirFlag == "O" ? "on" 		: '';
					var dateClass	= i == 0 				   ? "product_date" : 'hidden'; 
					var time  		= Ns.Date.calcDate(Ns.Date.getDateParse02(info[i].startDtm),0,0,0,0,"HH:mm");
					onAirIndex 		= Number(info[i].onAirFlag == "O" ? i : onAirIndex);
					
					rightPrdHtml += Ns.Util.stringFormat('\
						 <li class="swiper-slide {8}">\
	                         <div class="{7}"><span>{0}<em class="week">{1}</em></span></div>\
	                         <div class="product_item {2}">\
	                             <div class="product_Img">\
	                                 <img src="{3}" onerror="this.onerror=null;this.src=\'{4}\'" errorPass=true alt="상품이미지"></div>\
	                             <div class="product_Name">\
	                                 <dfn class="label">방송시간</dfn>\
	                                 <time class="time">{5}</time>\
	                                 <dfn class="label">상품명</dfn>{6}</div>\
	                         </div>\
	                     </li>', currentDate.currentDate , currentDate.datepicker, onAirClass, imageUrl
	                     	   , noImageUrl, time, info[i].goodsUnitName, dateClass , swiperOn);
					
					if(i == info.length -1 ){
						resolve();
					}
				}
			}).then(function(){
				
				//다음날 표시
				if(nextDate != -1){
					rightPrdHtml += Ns.Util.stringFormat('\
						<li class="swiper-slide">\
							<div class="product_nav next">\
		                    	<span><em class="date">{0}</em><em class="week">{1}</em></span>\
		                    </div>\
		                </li>',nextDate.nextDate , nextDate.datepicker);
				}
				
				$("#rightList").append(rightPrdHtml);
				
				
				CurrentView.ui.itemInnerHeight();
				
				CurrentView.contentsSwiper = new Swiper("#rightContainer", {
					mode : "vertical",
					slidesPerView : "auto",
					initialSlide: 0,
					freeMode: false,
			        calculateHeight: true,
			        loop : false,
			        autoplay: false,
			        resizeReInit : false,
			        autoResize : false,
			        speed: 500,
			        clickable : true,
			        onTouchMove : function(swiper) { 
			        	navi.clearAllIntervalList();
			        	CurrentView.prdInterval = 0;
					},
					onInit : function(swiper){
						if(Ns.Util.isNull(CurrentView.contentsSwiperTranslate)){
							var index = onAirIndex+1
							
							if(swiper.slides.length - index < 4){
								index = swiper.slides.length - 5;
							}
							swiper.swipeTo(index);
						} else {
							CurrentView.contentsSwiper.setWrapperTranslate(CurrentView.contentsSwiperTranslate);
							CurrentView.contentsSwiperTranslate = null;
						}
					},
					onSlideClick : function(swiper){
						if ( $(swiper.clickedSlide).children().hasClass("prev")){
							CurrentView.event.onclick_btn_prevDay();
							return false;
						} else if($(swiper.clickedSlide).children().hasClass("next")){
							CurrentView.event.onclick_btn_nextDay();
							return false;
						} else {
							$(swiper.slides).removeClass("on");
							$(swiper.clickedSlide).addClass("on");
							
							var idx = swiper.clickedSlideIndex-1;
							var movePosY = Number($("#header").height() + $("#promoHeroSwiper").height());
							//$( 'html, body' ).animate( { scrollTop : $("#prd_" + idx).offset().top - movePosY - 10 }, 100 );
							$(window).scrollTop($("#prd_" + idx).offset().top - movePosY - 10);
							return false;
						}
					}
				});
			});
		},
		
		itemInnerHeight: function() {
			var headerHeight = $('.page-header').outerHeight();
			var dateHeight = $('.date_swipe_broadcast').outerHeight();
			var naviHeight = $('#util').outerHeight();
			var topBannerHeight = 0;
			
			// 최상단 배너가 있을 경우
			if($("#AttractAppDownLoad").css('display') == 'block'){
				topBannerHeight = $("#AttractAppDownLoad").height();
			}
			
			function itemHeight() {
				var winHeight = window.innerHeight;
				var itemWrapHeight = winHeight - (headerHeight + dateHeight + naviHeight + topBannerHeight);
				
				$('.tvSchedule-nav-list').css({
					'height': itemWrapHeight
				});
			};
		
			itemHeight();
		},
		
	
		getTime : function( startDtm , endDtm ) {
			
			// 2017-12-14 02:00:00~2017-12-14 03:10:00에서 02:00~03:10로 변환해줌
			return Ns.Date.calcDate(Ns.Date.getDateParse02(startDtm),0,0,0,0,"HH:mm") + "~" + Ns.Date.calcDate(Ns.Date.getDateParse02(endDtm),0,0,0,0,"HH:mm");
		},
		
		/**
		 * 생방송 남은 시간 설정.
		 * 
		 * hour : 남은 시간. 
		 * min : 남은 분
		 * second : 남은 초
		 */
		setLimitLiveTime : function( ) {
			mainCtrl.checkTimerObject();
			mainCtrl.m_timer = setInterval(CurrentView.ui.setRemainedTime, 1000);
		},
		
		setRemainedTime : function() {
	        if( CurrentView.REMAINING_TIME == null ) {
	        	mainCtrl.checkTimerObject(); //destory timer
	        	return false;
	        }
	        
	        var timeLimit = Ns.Date.getPeriodDate( CurrentView.REMAINING_TIME, "json" );
	        var timeZone = '#remainedTime';
            if ( timeLimit.hour == 23 && timeLimit.minute == 59 && timeLimit.second >= 30 ) {
            	CurrentView.REMAINING_TIME = null;
            	mainCtrl.checkTimerObject(); //destory timer
            	
            	//$( timeZone ).html( "" );
            	//CurrentView.data.getBroadcastingMobileList(); //새로운 방송 조회..
            	$('.tvShopping_vol').html('<span class="vol_play_end">방송이<br>종료되었습니다.</span>');
            } else {
            	var limitTime = timeLimit.hour + ':'+ timeLimit.minute +':'+ timeLimit.second + '남음';
	            $( timeZone ).html( limitTime );
            }

        },
        
        prdIntervalFn : function(){
        	
        	navi.clearAllIntervalList();
        	CurrentView.prdInterval = 0;
        	var CurrentIndex = 0;
        	
    		CurrentView.prdInterval = setInterval(function(){
    			var hedaerY = Number($("#header").height() + $("#promoHeroSwiper").height());
    			var elementSize = [];
    			var elementOffsetTop = [];
    			
    			$(".ns_tvshop_onair_item").each(function(idx,obj){
    				elementSize.push(obj.offsetHeight);
    				elementOffsetTop.push($(obj).offset().top);
    			});
    			
    			
    			var viewportSize   = viewportSize   || CurrentView.util.getViewportSize();
    			var viewportOffset = viewportOffset || CurrentView.util.getViewportOffset();
    			
    			for(var i = 0; i < elementSize.length ; i++){
    				
    				if (elementOffsetTop[i] + elementSize[i] > viewportOffset.top + hedaerY &&
    						elementOffsetTop[i] < viewportOffset.top + hedaerY) {
    					
    					//console.error(elementOffsetTop[i] , elementSize[i] , viewportOffset.top , hedaerY)
    					if(CurrentIndex == i+1){
    						break;
    					}
    					
    					CurrentIndex = i+1;
    					
						if(CurrentView.contentsSwiper.slides.length - i+1 >= 7 ){
							CurrentView.contentsSwiper.swipeTo(CurrentIndex);
						} else if( CurrentView.contentsSwiper.slides.length - 2  == CurrentIndex){
							CurrentView.contentsSwiper.swipeTo(CurrentIndex - 4);
						} else if(CurrentIndex - CurrentView.contentsSwiper.activeIndex > 6){
							CurrentView.contentsSwiper.swipeTo(CurrentIndex - 4);
						}
    					$(CurrentView.contentsSwiper.slides).removeClass("on");
    					$(CurrentView.contentsSwiper.slides).eq(CurrentIndex).addClass("on");
    					break;
    					
    				}
    				else if(viewportOffset.top < elementOffsetTop[0]){
    					CurrentView.contentsSwiper.swipeTo(1);
    					$(CurrentView.contentsSwiper.slides).removeClass("on");
    					$(CurrentView.contentsSwiper.slides).eq(1).addClass("on");
    				}
    			}	
    		},1000);
		    navi.arrInteval.push(CurrentView.prdInterval);
        },
        
        playVideo : function(){
        	
        	var $t = $("#onAirItem");
        	var h = $t.height();
        	var w = $t.width();
        	var tSrc = $t.find("img").attr("src");
        	CurrentView.onAirPrdHtml = $t.html();
        	
        	
        	var html = '';
			html += '<div class="pause_layer" style="display: none;">';
			html += '<p class="pauseclose_btn"><img onclick="CurrentView.event.click_cancle();" src="./images/common/pauseclose_btn.png" alt=""></p>';
			html += '   <ul>';
			html += '    <li class="fullsc_btn"><img onclick="CurrentView.event.click_fullView(this);" src="./images/common/fullscreen_btn.png" alt=""></li>';
			html += '    <li class="pause_btn"><img id="pnp_btn" onclick="CurrentView.event.click_VideoToggle();" src="./images/common/pause_btn.png" alt=""></li>';
			html += '    <li class="viewitem_btn"><img onclick="CurrentView.event.onclick_btnGotoProductDisplay();" src="./images/common/go_btn.png" alt=""></li>';
			html += '   </ul>';
			html += '  </div>';
//			click_cancle
			if( mainCtrl.VIEW_TYPE == "android" || mainCtrl.VIEW_TYPE == "androidweb"){//안드로이드
				html += '	<video id="vid" onclick="CurrentView.event.click_fade()" autoplay preload="true" webkit-playsinline style="width:100%;">';
			}else{//아이폰

				html += '	<video id="vid" onclick="CurrentView.event.click_fade()" autoplay preload="true" playsinline style="width:100%;">';
			}
			//운영
			html += '		<source src="http://livestream.nsmall.com:1935/IPHONE/nsmallMobile.m3u8" type="video/mp4" >';
			//개발
//			html += '		<source src="http://shoppstream.nsmall.com/IPHONE/mobile.m3u8" type="video/mp4" >';		
//			html += '		<source src="http://221.140.53.53/IPHONE/mobile.m3u8" type="video/mp4" >';		
//			html += '		<source src="http://192.168.13.87/IPHONE/mobile.m3u8" type="video/mp4" >';		
			html += '		Your browser does not support the video tag.';					
			html += '	</video>';
        	
			
			$t.html(html);
			$t.css("background","#d2d2d2");
			$('#vid').css('height', h ).css('width', w );
			
			document.getElementById('vid').play();
			mainCtrl.bVideoplay = true;
        }
	},
	 
	//이벤트 관련 함수를 정의한다.
	event : {
		
		//방송 재생 종료
		click_cancle : function(){
        	var $t = $("#onAirItem");
        	$t.css("background","");
        	$t.html(CurrentView.onAirPrdHtml);
        	
		},
		
		//방송 재생지 버튼 fade
		click_fade : function(){
			$('.pause_layer').fadeIn();
			setTimeout( function(){
				//일시정지일 때는 항상 버튼 레이어 노출
				if(CurrentView.isPlay){
					$('.pause_layer').fadeOut();
				}
			}
			,2000 );
		},
		
		/**
		 * 2016-09-02 정승진 : 안드로이드 영상재생 콜백함수
		 * */
		playToggle : function(isplay) {
			CurrentView.isPlay = isplay;
			CurrentView.event.click_VideoToggleBtn();
		},
		click_VideoToggle : function(){
			CurrentView.isPlay = document.getElementById('vid').paused;
			mainCtrl.bVideoplay = false;
			CurrentView.event.click_VideoToggleBtn();
		},
		click_VideoToggleBtn : function(){
			if(!CurrentView.isPlay){
				$("#pnp_btn").attr("src", "./images/common/play_btn02.png");
				document.getElementById('vid').pause();
				mainCtrl.bVideoplay = false;
			}
			else{
				$("#pnp_btn").attr("src", "./images/common/pause_btn.png");
				document.getElementById('vid').play();
				mainCtrl.bVideoplay = true;
				//재생할 경우 버튼 레이어 제거
				$('.video').fadeOut(); 
				$('.pause_layer').fadeOut();
			}
		},
		
		//전체보기
		click_fullView : function(){
			if(CurrentView.isPlay){ //플레이중
				$("#pnp_btn").attr("src", "./images/common/play_btn02.png");
				document.getElementById('vid').pause();
				mainCtrl.bVideoplay = false;
			}
			
			//Ns.Native.tvHomeShoppingView( "LIVE", null, partNumber , topOffset);
			
			Ns.Native.nsShopTvHomeShoppingViewDirect( "LIVE", "http://livestream.nsmall.com:1935/IPHONE/nsmallMobile.m3u8", null, CurrentView.isPlay);
		},

		//방송 영역 상품보기
		onclick_btnGotoProductDisplay : function(){
			if(CurrentView.onAirPrdInfo){
				mainCtrl.gotoProductDisplay
				(
					CurrentView.onAirPrdInfo.partNumber,
					CurrentView.onAirPrdInfo.multiCd,
					CurrentView.onAirPrdInfo.busChnId
				);
			}
		},
		
		onclick_divDateTabArea : function() {
			//편성표 날짜 이동시 로그 url&파라미터 남기기
			var invokeParams = {
				selectDay : CurrentView.today,
				processFlag : "brodcastingMobileScroll"
			};
			invokeParams.catalogId = CurrentView.catalogId;
			tran.callPageLogging( navi.getPageId(), invokeParams );
			
			CurrentView.data.getBroadcastingMobileList();
		},
		
		//생방송보기
		onclick_showLive : function( partNumber , topOffset) {
			if( Ns.Util.isNull(topOffset) ) topOffset = 0;
			Ns.Native.tvHomeShoppingView( "LIVE", null, partNumber , topOffset);
		},
		
		//지난 방송보기
		/*onclick_showVOD : function( videoUrl, partNumber ) {
			Ns.Native.tvHomeShoppingView( "VOD", videoUrl, partNumber );
		},*/
		
		//방송알리미
		onclick_shoppingAlarm : function(partNumber, catentryId, imageUrl, productName) {
			var isLogon = mainCtrl.checkLogonStatus();
			if( !isLogon ) {
				mainCtrl.gotoLogin();
				return;
			}
			
			var invokeParams = {
				partNumber : partNumber,
				catentryId : catentryId,
				imageUrl : imageUrl,
				productName : productName
			};
			
			mainCtrl.navigate( "M_G261N000L", invokeParams );
		},

		//일시품절
		onclick_soldOut : function( checkAlert ){
			if( checkAlert == "day" ){
				Ns.Popup.alert("해당 상품은 방송 당일에만 구매하실 수 있습니다");
			}else if( checkAlert == "live" ){
				Ns.Popup.alert("해당 상품은 방송시간 중에만 구매하실 수 있습니다");
			}else if( checkAlert == "soldout"){
				Ns.Popup.alert("일시품절된 상품입니다");
			}
		},
		
		// 상품 더 보기
		onclick_btn_more : function (e){
			
			var $this = $(this);
			var partNumber = $this.data("partNumber");
			var cnt = $this.data("cnt");
			var idx = $this.data("idx");
			var $target = $("#product_sub_prolist_"+ partNumber + "_" + idx);
			var movePosY = Number($("#header").height() + $("#promoHeroSwiper").height());
			
			if( $target.is(":visible") ){
				$this.find(".btn_more").removeClass("open");
				$target.slideUp(300).removeClass("open");
				$this.find("span").html("상품 더 보기" + "<em>(" + cnt + ")</em>");
				$(window).scrollTop($this.closest(".ns_live_item").offset().top - movePosY - 10);
			} else {
				$this.find(".btn_more").addClass("open");
				$target.slideDown(300).addClass("open");
				$this.find("span").html("닫기");
			}
			//$target.toggle();
		},

		
		onclick_btn_prevDay : function(){
			$("#" + String(CurrentView.todayIdx -1)).trigger("click");
		},
		onclick_btn_nextDay : function(){
			$("#" + String(CurrentView.todayIdx +1)).trigger("click");
		},
		
		onscroll_util : function(e){
			//하단 Util 영역 스크롤 이벤트
			var $target = $("#util");
			if( mainCtrl.isOsApp() ){
				var st = $(this).scrollTop();

				
				if (st > CurrentView.lastScroll){
					$target.removeClass("active");
				} else {
					$target.addClass("active");
				}
				
				CurrentView.lastScroll = st;
			}
			
			if($(document).height() == $(window).height() + $(window).scrollTop()){
				$target.addClass("active");
				CurrentView.ui.itemInnerHeight();
			} 
			
			// 스크롤시 동영상 재생 중지
			var scr_now = $(window).scrollTop() + CurrentView.movePosY;
			var onAirItem =  $("#onAirItem").length > 0 ? true : false;

			if(onAirItem && scr_now > $("#onAirItem").next().offset().top){
				if(mainCtrl.bVideoplay == true){
					if($("#vid").length>0){
						$("#pnp_btn").attr("src", "./images/common/play_btn02.png");
						document.getElementById('vid').pause();
					}
				}
				mainCtrl.bVideoplay = false;
			}
			
		},

		// 상품 슬라이드 앵커 interval
		ontouch_prdInterval : function(e){
	         if(navi.getPageId() != "M_G2222120M"){
	        	 $(document).off("touchstart.M_G2222120M");
	        	 return false;
	         }
			 
			if($(".ns_tvshop_onair_list").html() && CurrentView.prdInterval == 0 ){
				CurrentView.ui.prdIntervalFn();
			}
		
		},
		
		// 지금 방송중 버튼
		onclick_tvScheduleQuickView : function(){
			//var movePosY = Number($("#header").height() + $("#promoHeroSwiper").height());
			//$(window).scrollTop($(".inr.ns_ontv").offset().top - movePosY - 10);
			mainCtrl.navigate( 'M_G2222120M', {catalogId : Const.getMarketingCatalogId('tv')} );
		},
		
		
		// 생방송보기
		onclick_btnShowLive : function(data) { 
			var msg = "3G/LTE 환경에서 이용시 요금제에 따라 <br/> 데이터 요금이 부가될 수 있습니다.<br/>시청하시겠습니까?";
			var okFuc = function() {
				CurrentView.ui.playVideo();
				return false;
			};
			var cancelFuc = function() {
				return false;
			};
			//2018-02-14 ssong confrim 변경
			var targetId = "onAirItem";
			Ns.Popup.confirmLayer( msg, okFuc, cancelFuc, "예", "아니오", targetId);
		},
	
	},
	
	util : {
		
		initEvent : function() {
			// 상품 더보기
			$("#ns_bodyPaddingOnair").off().on("click", ".product_sub_btn", CurrentView.event.onclick_btn_more);
			// 이전 날짜
			$("#prevDay").off().on("click",CurrentView.event.onclick_btn_prevDay);
			// 다음 날짜
			$("#nextDay").off().on("click",CurrentView.event.onclick_btn_nextDay);
			// 지금 방송중 버튼
			$("#tvScheduleQuickView").on("click",CurrentView.event.onclick_tvScheduleQuickView);
			// 상품 앵커 interval 
			$(document).off().on("touchstart.M_G2222120M",".ns_tvshop_onair_scroll", CurrentView.event.ontouch_prdInterval);
			//$(document).off("touchmove").on("touchmove", ".ns_tvshop_onair_scroll", CurrentView.util.throttle(CurrentView.event.ontouchmove_prdInterval , 500));
			// 하단 util 스크롤 이벤트
			$(window).off("scroll").on("scroll" , CurrentView.event.onscroll_util);
			
		},
		getViewportSize : function(){
			var d = document, w = window, documentElement = d.documentElement;
			var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

		    // if this is correct then return it. iPad has compat Mode, so will
		    // go into check clientHeight/clientWidth (which has the wrong value).
			if (!size.height) {
				mode = d.compatMode;
				if (mode || ! $.support.boxModel) { // IE, Gecko
					domObject = mode === 'CSS1Compat' ?
							documentElement : // Standards
							d.body; // Quirks
					size = {
		        		height: domObject.clientHeight,
		        		width:  domObject.clientWidth
					};
				}
			}

		    return size;
		},
			 
		getViewportOffset : function() {
			var d = document, w = window, documentElement = d.documentElement;
			return {
				top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
				left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
			};
		},
		
		/*throttle : function(func, wait, options) {
		    var context, args, result;
		    var timeout = null;
		    var previous = 0;
		    if (!options) options = {};
		    var later = function() {
		      previous = options.leading === false ? 0 : CurrentView.util.now();
		      timeout = null;
		      result = func.apply(context, args);
		      if (!timeout) context = args = null;
		    };
		    return function() {
			      var now = CurrentView.util.now();
			      if (!previous && options.leading === false) previous = now;
			      var remaining = wait - (now - previous);
			      context = this;
			      args = arguments;
			      if (remaining <= 0 || remaining > wait) {
			        if (timeout) {
			          clearTimeout(timeout);
			          timeout = null;
			        }
			        previous = now;
			        result = func.apply(context, args);
			        if (!timeout) context = args = null;
			      } else if (!timeout && options.trailing !== false) {
			        timeout = setTimeout(later, remaining);
			      }
			      return result;
		    };
		  },
		  
		  now : Date.now || function() {
			    return new Date().getTime();
		  },*/
	}

};
