/**********************************************************************************
 *    Program ID   : jquery.common.js
 *    Description  : Utility Method정의
 *    lib : jquery-1.9.2.min.js
 **********************************************************************************
 *		Date						Author				Description
 *	2016/02/01				IBANK				초기작성
 **********************************************************************************/

/*
 * 호출 한 곳에서의 error함수가 먼저 수행되고 난 후 수행 됨 ( 둘다 작동 )
 * event - contains the event object
 * xhr - contains the XMLHttpRequest object
 * options - contains the options used in the AJAX request
 * exc - contains the JavaScript exception, if one occured
 */
//$(document).ajaxError(function (event, xhr, options, exc) {
//   alert('ajaxError' + xhr.status);
//});

/**
 * Ajax전송 전 공통 핸들링 함수
 * 1. 로딩바 호출 - jquery.common.js에 선언
 * 2. Ajax 공통 에러 처리 ( 호출 한 곳에서 error함수를 선언하면 실행되지 않음.  )
 */
var loading = true;
var loadingInter;
var loadingTimer;
var loadingState = false;
var errorState = true;

$.ajaxSetup({
	beforeSend: function(xhr) {
		xhr.setRequestHeader("AJAX", true);
		//2106.08.23 by thkim csrf token 추가\
		//xhr.setRequestHeader("CSRFTOKEN", $("meta[name='_xSiteSecToken']").attr("content"));

		//console.log("aaaaaaaaaaaaaaaaa")

		//로딩바 호출
		if(loading != false) {
			if(loadingState == false) {
				if(loadingTimer) {clearTimeout(loadingTimer);}
				loadingTimer = setTimeout(function(){
					$('.loadingArea').show();
				},1000);
			} else {
				$('.loadingArea').show();
			}
		}
	},
	error: function(xhr, status, err) {
		console.log("xhr.status : " + xhr.status);
		if(errorState != false){
			if (xhr.status == 902) {		//로그인 페이지로 이동
				$.jhead.fnChkLogin();
			} else if (xhr.status == 903) {	//자동 로그인
				location.href = "/kr/ko/mLoginProcAuto.do";
			} else {
		    	var thisPagePath = location.pathname;
		    	if(thisPagePath == null || thisPagePath == undefined) thisPagePath = "";
		    	if (thisPagePath.indexOf("/app/web/") == -1) { //app쪽 페이지는 에러메세지 노출안함
					$.jcom.showCommonLayer("처리 중 장애가 발생하였습니다. 잠시 후 재시도 후에도 지속적인 문제 발생 시 고객센터로 문의 바랍니다.");
		    	}
			}
		}
		clearTimeout(loadingTimer);
		loadingState = false;
		//로딩 바 숨김
		$('.loadingArea').fadeOut(250,function(){$(this).removeClass('open')});
	},
	complete : function(xhr) {
		if (xhr.status == 902) {		//로그인 페이지로 이동
			$.jhead.fnChkLogin();
		}

		if(loading != false) {
			clearTimeout(loadingTimer);
			loadingState = false;
			//로딩 바 숨김
			$('.loadingArea').fadeOut(250,function(){$(this).removeClass('open')});
		}
	}
});


//폼 밸리데이션 에러 클래스 및 태그 지정
var formValidErrClass = "warning";
var formValidErrTag = "div";
var formValidElementErrClass = "inputError";



(function($) {

$.extend({
	//제품 찜하기
	jcom : {
		saveJim : function(prdSeqArr, prdSeq, myshop_yn, myShopRegFl) {
			var paramPrdSeq = prdSeq.slice(0,-1);
			var myShopPrdFl = $.jcom.getMyShopYn(paramPrdSeq);
			var myshop = myShopPrdFl.split("|");
			var myShopCode = myshop[0];	//마이샵 조회 결과 코드
			var myShopFl = myshop[1];	//마이샵 가입여부
			var firstMyshopYn = myshop[2];	//마이샵 첫구매 제품 여부
			var firstYn = myshop[3];   // 첫구매 제품 여부
			var firstYearYn = myshop[4];  //당해 첫 구매 제품 여부
			var groupCampaignYn = myshop[5];  //그룹캠페인 해당 여부
			
			if(firstYn == "Y"){
				var firstPurchaseFl = $.jcom.getFirstPurYn(prdSeqArr);
				var firstPurchData = firstPurchaseFl.split("|");
				var cnt = firstPurchData[0];
				var ordDate = firstPurchData[1];
				if(cnt > 0){
					$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popHead .popTit").html("공식 온라인몰 첫 구매 전용 제품");
					$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popTxt").html("해당 제품은 공식 온라인몰 </br>첫 구매 전용제품입니다.");
					$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popDesc").html("(고객님의 공식 온라인몰 </br>최근 구매 일자: "+ordDate+")");
					layerOpen('firstPurchasePop');
					return "false";
				}
			}else if(firstYearYn == "Y"){
				var firstPurInThisYearFl = $.jcom.getFirstPurInThisYearYn();
				var firstPurchDataInThisYear = firstPurInThisYearFl.split("|");
				var cnt = firstPurchDataInThisYear[0];
				var ordDate = firstPurchDataInThisYear[1];
				if(cnt > 0){
					$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popHead .popTit").html("공식 온라인몰 올해 첫 구매 전용 제품");
					$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popTxt").html("해당 제품은 공식 온라인몰 </br>올해 첫 구매 전용제품입니다.");
					$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popDesc").html("(고객님의 공식 온라인몰 </br>올해 최근 구매 일자: "+ordDate+")");
					layerOpen('firstPurchasePop');
					return "false";
				}
			} 
			
			/*if (myShopPrdFl) {
				layerPop('myShopInfoPop');
				return;
			}*/
			if (myShopCode =="Y"  && myShopFl != "Y") {
				layerOpen('myShopInfoPop');
				return "false";
			}else{
				if(firstMyshopYn == "Y"){
					var myshopFirst = $.jcom.getMyshopFirstPurYn();
					var myshopData = myshopFirst.split("|");
					var cnt = myshopData[0];
					var ordDate = myshopData[1];
					if(cnt > 0){
						$("#myShopFirstJoinPop").find(".wrapModal .inner .popWrap .popHead .popTit").html("MY SHOP 첫 구매 전용 제품");
						$("#myShopFirstJoinPop").find(".wrapModal .inner .popWrap .popBody .popDesc").html("(고객님의 공식 온라인몰 </br>MYSHOP 최근 구매 일자: "+ordDate+")");
						layerOpen('myShopFirstJoinPop');
						return "false";
					}
				}
			}
			if(groupCampaignYn == "Y"){
				var oneData = $.jcom.getPurchaselimitOneData(paramPrdSeq);
				var totalCnt = 0;
				if(oneData.length > 0){
					var limitQty = oneData[0].qty;
					for(var i = 0; i< oneData.length;i++){
						totalCnt += oneData[i].cnt;
					}
					if(totalCnt  >= limitQty){
						layerOpen('purchaseInfoPop');
						return "false";
					}
				}
			}

			$.ajax({
				type : 'post',
				data : { 'prdSeqArr' : prdSeqArr },
				url : '/kr/ko/mProductJimExecute.json',
				error : function(e) { console.log(e);},
				success : function(data) {
					var code = data.productBean.r_code;
					if(code == 'Y') {	// 찜하기
						//$('.wishBtn').stop().fadeIn(200);
					} else if(code == 'C') {	// 찜취소
						//$('.wishBtn').stop().fadeOut(200);
					} else if(code == "M") {	// 미 로그인시
						$.jhead.fnChkLogin();
					} else if(code == "P") {	// 매장가입회원
						setMoveDefaultValue("","","","","Y");
						layerOpen('onlineJoinInfoPop');
					} else { // 에러
						alert("처리시 오류가 발생했습니다.");
					}
				}
			});
		},
		saveRcm : function(seq, obj, no_ref_flag) {
			$('.warning').hide();
			$.ajax({
				url : '/kr/ko/mProductReviewRcmCheck.json',
				type : 'post',
				data : {reviewSeq : seq},
				success : function(data){
					var code = data.productReviewBean.r_code;
					if(code == "R"){	//	추천 완료
						/*$(obj).find('.heart').addClass('on');
						$(obj).find('.heart').html(data.productReviewBean.recomCnt);*/

						var seqs=$(obj).attr('reviewseq');
						console.log(seqs);
						/*if($("a[reviewseq="+seqs+"]").size()>1){
							onOffSet("on",data.productReviewBean.recomCnt,seqs);
						}*/
						//$("a[reviewseq="+seqs+"]").addClass('on');
						$("a[reviewseq="+seqs+"]").children("span").addClass('on');
						$("a[reviewseq="+seqs+"]").children("span").text(data.productReviewBean.recomCnt);

					} else if(code == "D"){	// 추천 취소 완료
						/*$(obj).find('.heart').removeClass("on");
						$(obj).find('.heart').html(data.productReviewBean.recomCnt);*/

						var seqs=$(obj).attr('reviewseq');
						console.log(seqs);
						/*if($("a[reviewseq="+seqs+"]").size()>1){
							onOffSet("",data.productReviewBean.recomCnt,seqs);
						}*/

						//$("a[reviewseq="+seqs+"]").removeClass('on');
						$("a[reviewseq="+seqs+"]").children("span").removeClass('on');
						$("a[reviewseq="+seqs+"]").children("span").text(data.productReviewBean.recomCnt);

					} else if (code == "M") {
						$.jhead.fnChkLoginPop();
					} else {
						alert(data.productReviewBean.r_message);
					}
				}
			});
		},
		// 매거진 추천하기
		saveRcmMag : function(seq, obj) {
			$('.warning').hide();
			$.ajax({
				url : '/kr/ko/MagazineRcmCheck.json',
				type : 'post',
				data : {magSeq : seq},
				success : function(data){
					var code = data.insideBean.r_code;
					if(code == "R"){	//	추천 완료
						$(obj).addClass("on");
						$(obj).find('b').html(data.insideBean.recomCnt);
					} else if(code == "D"){	// 추천 취소 완료
						$(obj).removeClass("on");
						$(obj).find('b').html(data.insideBean.recomCnt);
					} else if (code == "M") {
						$.jhead.fnChkLogin();
					} else {
						$(obj).parent().find('p').html(data.insideBean.r_message);
						$(obj).parent().find('p').show();
					}
				}
			});
		},
		/**
		 * 모바일 웹 선물하기 용도
		 * @param mode
		 */
		makeMapG : function(mode) {

		    var mapPrd = new MapPrd();
			 var mCart = 0;
			 if( $("input[class=multiPurTypeG]").length == 0 ) {
			 } else {

				$("input[class=multiPurTypeG]").each(function(index){
						  var prdSeq    =  $("input[class='prdSeqG']").eq(index).val();
						  var sapPrdCd  =  $("input[class='sapPrdCdG']").eq(index).val();
						  var ordQty = 0;
						  if(mode=='order'){
						    ordQty   =  $("#ordQtyG_"+sapPrdCd).val();
						  }else{
						    ordQty   =  $("input[class='ordQtyG']").eq(index).val();
						  }

						  if(mapPrd.containsKey(prdSeq)){
							   var  tempOrdVal = mapPrd.get(prdSeq);
									mapPrd.remove(prdSeq);
									mapPrd.put(prdSeq, parseInt(tempOrdVal) + parseInt(ordQty));
						  }else{
									mapPrd.put(prdSeq,ordQty);
						  }
				});
			}
		 	$("input[class=multiPurTypeG]").each(function(index){
		        var prdSeq  =  $("input[class='prdSeqG']").eq(index).val();
				 if(mapPrd.containsKey(prdSeq)){ // makeMap중에 세팅
				      var  multiPurType = $(this).val();
					  var  multiPurCnt =  parseInt(multiPurType.split("+")[0])+parseInt(multiPurType.split("+")[1]) ;  // 1+1=2 ... 10+10=20
					  var  multiTotCnt =  mapPrd.get(prdSeq);
					  var  PurCnt = Math.floor(multiTotCnt/multiPurCnt);
					 //   alert(multiTotCnt+","+multiPurCnt+","+PurCnt);
						  if(PurCnt  > 1 || PurCnt == 1){   // 할인 조건에 맞는지
										  var sapPrdCd  =  parseInt($("input[class='sapPrdCdG']").eq(index).val());
		                                 var ordQty = 0;
										  var salPrc = 0;
										  if(mode=='order'){
												 ordQty    =  parseInt($("#ordQtyG_"+sapPrdCd).val());
												 salPrc    =  parseInt($("#salPrcG_"+sapPrdCd).val());
										  }else{
											     ordQty    =  parseInt($("input[class='ordQtyG']").eq(index).val());
											     salPrc    =  parseInt($("input[class='salPrcG']").eq(index).val());
										  }

										  var currPrc   =  0;
										  var TotPurCnt = parseInt(PurCnt * multiPurCnt);
										if(mapPrd.containsKey(prdSeq+"_Qty")){

													   var  totPrdQty  =  parseInt(mapPrd.get(prdSeq+"_Qty"));
											//		 alert(index+"_totPrdQty:"+totPrdQty);
													   var  tmpCnt     = 0;
													    if(TotPurCnt >  totPrdQty || TotPurCnt == totPrdQty){
													        tmpCnt = TotPurCnt - totPrdQty;
													    }

													   if( ordQty > tmpCnt ){


																currPrc =  parseInt(tmpCnt*salPrc/2) + (ordQty-tmpCnt)*salPrc;
																mapPrd.remove(prdSeq+"_Qty");
																mapPrd.put(prdSeq+"_Qty",totPrdQty+ordQty);

													   }else{

																currPrc = ordQty *salPrc/2;
																mapPrd.remove(prdSeq+"_Qty");
																mapPrd.put(prdSeq+"_Qty",totPrdQty+ordQty);


													   }
											//	  alert(index+"_2_"+currPrc);

										 }else{
														 var tmpCnt    =  TotPurCnt;

														if (ordQty > tmpCnt){

																	currPrc =  parseInt(tmpCnt*salPrc/2) + (ordQty-tmpCnt)*salPrc;
																	mapPrd.put(prdSeq+"_Qty",ordQty);

														 }else{

																	currPrc = ordQty *salPrc/2;
																	mapPrd.put(prdSeq+"_Qty",ordQty);
														 }
											//	alert(index+"_1_"+currPrc);
										 }

											$("#priceG_"+sapPrdCd).html(setComma(currPrc+"")+"원");
		                                    $("#purPrcG_"+sapPrdCd).val(currPrc);

								mCart++;
							 }
				 }
		 	});
		 	if(mode=='mCart' && mCart > 0){
		 		reTotAmt();
		 	}
		},
		//html 레이어페이지 생성 후 팝업 영역에 붙여서 호출하는 경우
		showLayerPop : function(data, id) {
			//팝업 레이어가 있는 경우 레이어 닫기
//			$("#"+id).html(data).promise().done(function() {//결과 페이지 레이어 호출
//				console.log("id : " + $("#"+id));
//				layerPop(id);
//			});
			//2016.04.29 thkim - 영역 아이디에 리턴된 결과 html을 attach한 후 id값을 자동으로 찾아서 show하도록 수정
			$("#"+id).html(data).promise().done(function() {//결과 페이지 레이어 호출
//				alert($(this).find("div").attr("id"));
				//layerPop($(this).find("div").attr("id"));
				layerOpen($(this).find("div").attr("id"));
			});
		},
		//단순 레이어 호출 하는 경우 (show/hide )
//		showCommonLayer : function(message) {
//			//팝업 레이어가 있는 경우 레이어 닫기
//			layerPop("commonPopup");
//			$("#commonPopup #commonPopupTxt1").text(message);
//		},
		//단순 레이어 호출 하는 경우 (show/hide )
		showCommonLayer : function(message, title, lnk) {
//			if(title === "MyShop등록 알림"){   //MyShop등록 알림은 .html로
//				$("#commonPopup").find(".popPad .layerCtn .layerPad .txt2").html(message);
//			} else {
//				$("#commonPopup").find(".popPad .layerCtn .layerPad .txt2").text(message);
//			}
//			$("#commonPopup").find(".popPad .layerCtn .layerPad h1").text((typeof title != 'string')?"알림":title);
//			if (lnk != undefined) {
//				$("#commonPopup").find("#commonPopupBtn").attr("href", lnk);
//			}
//			layerPop("commonPopup");
			layerClose();
			if(title === "MyShop등록 알림"){   //MyShop등록 알림은 .html로
				$("#commonPopup").find(".wrapModal .popBody .popTxt").html(message);
			} else {
				$("#commonPopup").find(".wrapModal .popBody .popTxt").html(message);
			}
			$("#commonPopup").find(".wrapModal .popWrap .popHead h3").text((typeof title != 'string')?"알림":title);
			if (lnk != undefined) {
				$("#commonPopup").find("#commonPopupBtn").attr("onclick", "location.href='"+lnk+"'");
			}
			layerOpen("commonPopup");
		},
		//단순 레이어 호출 하는 경우 (show/hide )
		showCommonConfirmLayer : function(message, title) {
			layerOpen("commonConfirmPopup");
			if(title === "OK캐쉬백 알람"){   //ok캐쉬백알람은 .html로
				$("#commonConfirmPopup #commonPopupTxt1").html(message);
			}else{
				$("#commonConfirmPopup #commonPopupTxt1").text(message);
			}
		},
		//도로명주소 :: 20140708 우편번호검색
		callNewRoadZipCodePopup : function(popAreaId) {
//			var url = "/program/newRoadZipCode_Mobile/newRoadZipCodePopup.jsp";
			var url = "/kr/ko/program/zipCode/mobile/newRoadZipCodePopup.jsp";
			$.post(url, function(data) {
				//$.jcom.showLayerPop(data, popAreaId);
				$("#"+popAreaId).html(data).promise().done(function() {
					layerOpen($(this).find("div").attr("id"));
				});
			});
		},
		formValidHighlight : function(element, errorClass, validClass) {
			$(element).removeClass(errorClass).removeClass(validClass);	//에러 발생 인 경우 요소의 inputAlt 클래스 제거하고 inputError 클래스 추가
			//에러 메세지 표시
		    $(element.form).find(formValidErrTag + "[for=" + element.id + "]").addClass(errorClass);
		    $(element).addClass(formValidElementErrClass);
		},
		formValidUnHighlight : function(element, errorClass, validClass) {
//			$(element).closest("td").find(".selectArea button").removeClass("inputError");
			$(element).removeClass(errorClass).addClass(validClass);		//에러 발생이 아닌 경우 요소의 inputAlt 클래스 제거하고 inputError 클래스 제거
			//에러 메세지 숨기기
		    $(element.form).find(formValidErrTag + "[for=" + element.id + "]").removeClass(errorClass);
		    $(element).removeClass(formValidElementErrClass);
		    console.log("formValidUnHighlight : " + "#"+element.name+"-error");
		    $("#"+element.name+"-error").remove();
		},
		//폼 밸리데이션 에러 문구 초기화
		resetFormMessage : function(formObj) {
			$(formObj).find("."+formValidErrClass).hide();
			$(formObj).find("."+formValidErrClass).removeClass(formValidErrClass);
			$(formObj).find("."+formValidElementErrClass).removeClass(formValidElementErrClass);
		},
		/*
		 * 에러 문구 보이기
		 * param.message : 에러 메세지 문구
		 * param.targetId : 에러 메세지 문구가 보여질 영역 아이디
		 * param.element : 에러 객체 ( 폼 밸리데이션의 경우 input, select 와 같은 객체에 error클래스 지정이 필요한 경우 )
		 */
		showFormMessage : function(param) {
			if (param.element && param.element != undefined) {
//				$(param.element).closest("td").find(".selectArea button").addClass("inputError");
				$(param.element).addClass(formValidElementErrClass);
				$(param.element).focus();
			}
			if (param.targetId && param.targetId != undefined) {
				$(param.targetId).text(param.message);
				$(param.targetId).addClass(formValidErrClass);
			}
			$(param.targetId).show();
		},
		//에러 문구 숨기기
		hideFormMessage : function(param) {
			if (param.element && param.element != undefined) {
//				$(param.element).closest("td").find(".selectArea button").removeClass("inputError");
				$(param.element).removeClass(formValidErrClass);
			}
			$(param.targetId).hide();
		},
		/*
		 * 장바구니 담기
		 */
		cartAdd : function(mode, prdList,callback,GaPrdList,giftYn) {
			if(prdList.length>0){
				var myShopPrdFl = $.jcom.getMyShopYn(prdList[0].prdSeq);
				var myshop = myShopPrdFl.split("|");
				var myShopCode = myshop[0];	//마이샵 조회 결과 코드
				var myShopFl = myshop[1];	//마이샵 가입여부
				var firstMyshopYn = myshop[2];	//마이샵 첫구매 제품 여부
				var firstYn = myshop[3];   // 첫구매 제품 여부
				var firstYearYn = myshop[4];  //당해 첫 구매 제품 여부
				var groupCampaignYn = myshop[5];  //그룹캠페인 해당 여부
				var purHistCustPurPsblYn = myshop[6];  //구매 이력 포함 사용여부
				var npurHistCustPurPsblYn = myshop[7];  //구매 이력 제외 사용여부
				
				if(firstYn == "Y"){
					var firstPurchaseFl = $.jcom.getFirstPurYn();
					var firstPurchData = firstPurchaseFl.split("|");
					var cnt = firstPurchData[0];
					var ordData = firstPurchData[1];
					if(cnt > 0){
						$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popHead .popTit").html("공식 온라인몰 첫 구매 전용 제품");
						$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popTxt").html("해당 제품은 공식 온라인몰 </br>첫 구매 전용제품입니다.");
						$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popDesc").html("(고객님의 공식 온라인몰 </br>최근 구매 일자: "+ordDate+")");
						layerOpen('firstPurchasePop');
						return;
					}
				}else if(firstYearYn == "Y"){
					var firstPurInThisYearFl = $.jcom.getFirstPurInThisYearYn();
					var firstPurchDataInThisYear = firstPurInThisYearFl.split("|");
					var cnt = firstPurchDataInThisYear[0];
					var ordData = firstPurchDataInThisYear[1];
					if(cnt > 0){
						$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popHead .popTit").html("공식 온라인몰 올해 첫 구매 전용 제품");
						$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popTxt").html("해당 제품은 공식 온라인몰 </br>올해 첫 구매 전용제품입니다.");
						$("#firstPurchasePop").find(".wrapModal .inner .popWrap .popBody .popDesc").html("(고객님의 공식 온라인몰 </br>올해 최근 구매 일자: "+ordDate+")");
						layerOpen('firstPurchasePop');
						return;
					}
				} 
				
				if (myShopCode =="Y"  && myShopFl != "Y") {
					layerOpen('myShopInfoPop');
					return;
				}else{
					if(firstMyshopYn == "Y"){
						var myshopFirst = $.jcom.getMyshopFirstPurYn();
						var myshopData = myshopFirst.split("|");
						var cnt = myshopData[0];
						var ordDate = myshopData[1];
						if(cnt > 0){
							$("#myShopFirstJoinPop").find(".wrapModal .inner .popWrap .popHead .popTit").html("MY SHOP 첫 구매 전용 제품");
							$("#myShopFirstJoinPop").find(".wrapModal .inner .popWrap .popBody .popDesc").html("(고객님의 공식 온라인몰 </br>MYSHOP 최근 구매 일자: "+ordDate+")");
							layerOpen('myShopFirstJoinPop');
							return;
						}
					}
				}
				if(groupCampaignYn == "Y"){
					var oneData = $.jcom.getPurchaselimitOneData(prdList[0].prdSeq);
					var totalCnt = 0;
					if(oneData.length > 0){
						var limitQty = oneData[0].qty;
						for(var i = 0; i< oneData.length;i++){
							totalCnt += oneData[i].cnt;
						}
						if(totalCnt  >= limitQty){
							layerOpen('purchaseInfoPop');
							return;
						}
					}
				}
				
				if(purHistCustPurPsblYn == "Y" || npurHistCustPurPsblYn == "Y"){
					var purCondPrdCnfmYn = $.jcom.getPurCondPrdCnfmYn(prdList[0].prdSeq);
					if(purCondPrdCnfmYn != 'Y'){
						$.jcom.showCommonLayer("해당 제품은 구매 제한이 있는 상품입니다<br>유의사항을 다시 확인해주세요.");
						return "false";
					}
				}
			}

			var prodInfo = JSON.stringify({prductJson : prdList}).replace(/\"/g,'&quot');
			var cartUrl = "/kr/ko/mOrderCartRegistProc.json";
			if(mode === "mORDER") cartUrl = "/kr/ko/mOrderOneClickProc.json";
			$.ajax({
				url : cartUrl,
				type : "post",
				data : {
					mode : mode,
					prodInfo : prodInfo,
					reviewSeq : $("#mReviewSeq").val()
				},
				success : function(data) {

					if (typeof callback === "function") {//콜백 함수가 선언 된 경우 결과 값 리턴
						callback(data);
					}
					else {//콜백 함수가 없는 경우 디폴트 에러 메세지 처리
						//2016.07.26 by thkim 각 페이지에서 처리되던 방식을 공통 스크립트에서 처리 되도록 변경
						$.jcom.cartResult(data, prdList,GaPrdList,giftYn);
					}
				}
			});
			var pixelSum = $("#totSum2").text().replace('원','').trim();
			if (navigator.userAgent.indexOf("inniMemAppAnd") > -1 || navigator.userAgent.indexOf("inniMemAppIOS") > -1) {
				try{
					window.inniApp.addedToCart([prdList[0].prdSeq],'product',pixelSum,'KRW');
				} catch (exception){
					try{
						if(prdList.length>0){
							fbq('track', 'AddToCart', {
								content_ids: [prdList[0].prdSeq],
								content_type: 'product',
								value: pixelSum,
								currency: 'KRW'
							});
						}
					}catch(exception){
					}
				}
			} else {
				try{
					if(prdList.length>0){
						fbq('track', 'AddToCart', {
							content_ids: [prdList[0].prdSeq],
							content_type: 'product',
							value: pixelSum,
							currency: 'KRW'
						});
					}
				}catch(exception){
				}
			}
		},
		cartResult : function(data, prdList,GaPrdList,giftYn) {
			var r_code = data.orderBean.r_code;
			var mode = data.orderBean.mode;

			if (r_code === 'CART_SUCCESS') {
				layerClose('pdtPreviewPop');
				if(mode == "REGULAR_CART"){
					layerOpen('rglrCartEmbed');
				}
				else{
					layerOpen('cartEmbed');
				}
				makeScriptGA_Order_Step3_CartAdd(GaPrdList,giftYn);
			}
			else if (r_code === '0007') {
				$.jhead.fnChkLogin(); //로그인
				return;
			}
			else if (r_code === 'ONLY_MEMBER_BIGSALE_PERIOD') {	//빅세일 기간 회원만 구매 가능 알림 후 로그인 페이지로 이동
				alert(data.orderBean.r_message);
				$.jhead.fnChkLogin();
			}
			else if (r_code === '0008') {
				setMoveDefaultValue("","","","","Y");
				layerOpen('onlineJoinInfoPop');
			}
			else if (r_code === 'NOT_SELECT_OPTION') {	//옵션이 있는 상품인데 선택하지 않은 경우
				var prdSeq = data.orderBean.prdSeq;
				var url = "/kr/ko/mProductView.do?prdSeq=" + prdSeq;
				var message = $.jcom.cartMessages.NOT_SELECT_OPTION;
				alert(message);
				location.href=url;
			}
			else if (r_code === 'NOT_MATCH_MULTIPUR_COND') {
				alert($.jcom.cartMessages.NOT_MATCH_MULTIPUR_COND)
			}
			else if (r_code === 'TERMPRD_NOTMIX') {
				alert("일반 상품과 예약 판매 상품은 동시 구매가 되지 않습니다.\n예약 판매 상품을 장바구니에서 삭제 후 제품을 담아주세요.");
			}
			else if (r_code === null) {
				alert($.jcom.cartMessages.SYSTEM_ERROR);
			}
			else if (r_code === 'ONECLICK_CARD'){
				//[20191007 brenda]ORDER 시 바로구매 - 원클릭 카드결제 사용 안함
				//주문서 로직 변경 필요
				alert("ORDER 시 바로구매 - 원클릭 카드결제 사용 안함(주문서 로직 변경 필요)");
			}
			else if (r_code === 'ORDER_SUCCESS') {
				makeOrderTag();
				if (navigator.userAgent.indexOf("inniMemAppAnd") > -1 || navigator.userAgent.indexOf("inniMemAppIOS") > -1) {
					var arrParam = "";
					for(var i=0; i<prdList.length; i++) {
						arrParam += "cartSeqOrder="+prdList[i].prdSeq+"|"+prdList[i].sapPrdCd+"&";
					}
					location.href = "/kr/ko/mOrderPageRenewal.do?"+arrParam;
				} else {
					for(var i=0; i<prdList.length; i++) {
						var prdSeq = prdList[i].prdSeq;
						var sapPrdCd = prdList[i].sapPrdCd;
						var cartSeqOrder = "<input type='hidden' name='cartSeqOrder' value='" + prdSeq + "|" + sapPrdCd + "' />";
						$('#orderForm').append(cartSeqOrder);
					}
					$('#orderForm').submit();
				}
			}
			else if(r_code === 'REQUIRE_PUCHASE_CSTMID_PRD'){
				alert(data.orderBean.r_message);
				$.jhead.fnChkLogin();
			}
			else {
				alert(data.orderBean.r_message);
			}
		},
		/*
		 * 마이샵 등록회원만 구매가능한 제품인지 조회
		 */
		getMyShopYn : function(prdSeq) {
			//var myShopPrdFl = false;
			var myShopPrdFl = "";
			$.ajax({
				type : 'post',
				data : { 'prdSeq' : prdSeq },
				url : '/kr/ko/mProductGetMyShopYn.json',
				async : false,
				error : function(e) {
					//console.log(e);
				},
				success : function(data) {
					var code = data.productBean.r_code;
					myShopRegFl = data.productBean.myShopRegFl;
					/*if (code == 'Y' && myShopRegFl != 'Y') {
						myShopPrdFl = true;
					}*/
					myShopPrdFl = code+"|"+myShopRegFl+"|"+data.productBean.myshop_first_pur_yn+"|"+data.productBean.first_pur_yn+"|"+data.productBean.year_first_pur_yn+"|"+data.productBean.group_campaign_yn+"|"+data.productBean.purHistCustPurPsblYn+"|"+data.productBean.npurHistCustPurPsblYn+"|"+data.productBean.inmPrdFreeExpeTpCd+"|"+data.productBean.inmPrdFreeExpeLmtdTxt;
				}
			});

			return myShopPrdFl;
		},
		
		//2019.01.17 마이샵 첫 등록회원만 구매가능한 제품인지 조회 pmj
		getMyshopFirstPurYn : function() {
			var myShopData;
			$.ajax({
				type : 'post',
				url : '/kr/ko/mProductGetMyshopFirstPurYn.json',
				async : false,
				error : function(data) { 
					//console.log(e);
				},
				success : function(data) {
					var ordDate = data.myshopData.ordDate;
					myShopData = data.myshopData.cnt+"|"+ordDate;
				}
			});

			return myShopData;
		},
		
		//2019.01.17 온라인 첫 구매가능한 제품인지 조회 pmj
		getFirstPurYn : function(prdSeq) {
			var firstPurData;
			$.ajax({
				type : 'post',
				url : '/kr/ko/mProductGetFirstPurYn.json',
				async : false,
				error : function(e) { 
					//console.log(e);
				},
				success : function(data) {
					firstPurData = data.firstPurBean.cnt+"|"+data.firstPurBean.ordDate;
				}
			});
			return firstPurData;
		},
		
		//2019.01.17 당해 첫 구매가능한 제품인지 조회 pmj
		getFirstPurInThisYearYn : function(prdSeq) {
			var firstPurDataInThisYear;
			$.ajax({
				type : 'post',
				url : '/kr/ko/mProductGetFirstPurInThisYearYn.json',
				async : false,
				error : function(e) { 
					//console.log(e);
				},
				success : function(data) {
					firstPurDataInThisYear = data.firstPurInThisYearBean.cnt+"|"+data.firstPurInThisYearBean.ordDate;
				}
			});
			return firstPurDataInThisYear;
		},
		
		//2019.01.17 구매개수 제한 캠페인 campaign_seq 조회 pmj
		getGroupCampaignSeq : function(prdSeq) {
			var campaignSeq = "";
			$.ajax({
				type : 'post',
				data : { 'prdSeq' : prdSeq },
				url : '/kr/ko/mProductGetGroupCampaignSeq.json',
				async : false,
				error : function(e) { 
					//console.log(e);
				},
				success : function(data) {
					campaignSeq = data.groupCampaign;
				}
			});

			return campaignSeq;
		},
		
		//2019.01.17 조회한 campaign_seq의 구매개수 제한 캠페인 정보 조회 pmj
		getGroupCampaignInfo : function(campaignSeq) {
			var campaignObj =  ""
			$.ajax({
				type : 'post',
				data : { 'campaign_seq' : campaignSeq },
				url : '/kr/ko/mProductGetGroupCampaignInfo.json',
				async : false,
				error : function(e) {
					//console.log(e);
				},
				success : function(data) {
					campaignObj = data.groupCampaignInfo;
				}
			});

			return campaignObj;
		},
		
		//2019.01.17 조회한 campaign_seq의 구매개수 제한 prdSeq 조회 pmj
		getCampaignIncludePrdSeq : function(campaignSeq) {
			var prdSeqArr =  new Object();
			$.ajax({
				type : 'post',
				data : { 'campaign_seq' : campaignSeq },
				url : '/kr/ko/mProductGetCampaignIncludePrdSeq.json',
				async : false,
				error : function(e) {
					//console.log(e);
				},
				success : function(data) {
					prdSeqArr = data.groupCampaignInclude;
				}
			});

			return prdSeqArr;
		},
		
		//2019.01.17 조회한 prdSeq들의 제한 구매개수 조회 pmj
		getCampaignlimitQty : function(stDate,endDate,campaignPrdList) {
			var limitQty = 0;
			$.ajax({
				type : 'post',
				data : { 'stDate' : stDate,
						 'endDate' : endDate,
						 'seqArr' : campaignPrdList},
				url : '/kr/ko/mProductGetCampaignlimitQty.json',
				async : false,
				error : function(e) {
					//console.log(e);
				},
				success : function(data) {
					limitQty = data.limitQty;
				}
			});

			return limitQty;
		},
		
		//2019.01.17 조회한 prdSeq의(단건, 장바구니 찜하기 용) 제한 구매개수 조회 pmj
		getPurchaselimitOneData : function(prdSeq) {
			var oneData = new Object();
			$.ajax({
				type : 'post',
				data : { 'prdSeq' : prdSeq },
				url : '/kr/ko/mProductGetPurchaselimitOneData.json',
				async : false,
				error : function(e) { 
					//console.log(e);
				},
				success : function(data) {
					oneData = data.oneData;
				}
			});
			
			return oneData;
		},
		
		getPurCondPrdCnfmYn : function(prdSeq) {
			var purCondPrdCnfmYn = "";
			$.ajax({
				type : 'post',
				data : { 'prdSeq' : prdSeq },
				url : '/kr/ko/mProductGetPurCondPrdCnfmYn.json',
				async : false,
				error : function(e) { 
					//console.log(e);
				},
				success : function(data) {
					purCondPrdCnfmYn = data.purCondPrdCnfmYn;
				}
			});
			
			return purCondPrdCnfmYn;
		},
		
		getProductGetPurChaseHistoryYn : function(prdSeq) {
			var result = new Object();
			$.ajax({
				type : 'post',
				data : { 'prdSeq' : prdSeq },
				url : '/kr/ko/mProductGetPurChaseHistoryYn.json',
				async : false,
				error : function(e) { 
					//console.log(e);
				},
				success : function(data) {
					result = data.prdDataPurYn;
				}
			});
			
			return result;
		},
		
		//메세지 지정
		cartMessages : {
			"NOT_SELECT_OPTION" : "옵션이 있는 상품입니다. 옵션 선택을 위해 상세페이지로 이동 합니다.",
			"NOT_MATCH_MULTIPUR_COND" : "복수구매 할인 제품입니다. 제품상세 페이지로 이동하셔서 장바구니 담기를 진행해 주세요.",
			"SYSTEM_ERROR" : "서버 오류로 인해 장바구니 담기에 실패 하였습니다."
		}
	}
});


})(jQuery);
