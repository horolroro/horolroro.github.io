<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="u" uri="/WEB-INF/tld/userInfo.tld" %>
<%@ taglib prefix="uf" uri="userFunction"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="str" uri="/WEB-INF/tld/str.tld"%>
<%@ page import="kr.innisfree.common.constants.SessionConstants"%>
<%@page import="kr.innisfree.common.config.Constants"%>
<%@ page import="kr.innisfree.customer.CustomerBean"%>
<%@page import="org.springframework.context.ApplicationContext"%>
<%@page import="kr.innisfree.product.ProductService"%>
<%@ page import="kr.innisfree.common.util.CommonUtil" %>
<%@page import="org.springframework.web.servlet.support.RequestContextUtils"%>
<%@page import="java.util.*"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:eval expression="@siteConfig['APJOINURL']" var="APJOINURL" />
<%
	pageContext.setAttribute("newLineChar", "\n");
%>
<%
	String title = "이니스프리";
	String description = "피부에 휴식을 주는 섬 자연주의 화장품 브랜드 이니스프리의 온라인 화장품 쇼핑몰입니다.";
	String keyword = "화장품 쇼핑몰, 스킨케어, 메이크업, 마스크팩, 바디, 헤어, 남성화장품, 맨스토어, 마이쿠션, 추천제품,기획전, 이벤트";

	CustomerBean cstm = (CustomerBean) session.getAttribute(SessionConstants.SESS_USER);
	boolean isLogin = false;
	String cstmNm = "";
	// SNS login User
	String isSnsLogin = null;
	if(null != cstm) {
		isLogin = true;
		cstmNm = CommonUtil.replaceStr(cstm.getCstmNm());
		isSnsLogin = cstm.getIsSnsLogin();
	}

	String cstmId = "";
	String grade = "";
	String snsFl = "";
	String jjimYn = "N";

	if(cstm != null) {
	    cstmId = cstm.getCstmId();
	    grade = cstm.getGradeCd();
	}

	// SNS회원 구분
	if(null != grade && Constants.CUSTOMER_LEVEL_SNS.equals(grade)) {
		snsFl = "Y";
	}

	ServletContext servletContext = this.getServletContext();

	ApplicationContext ctx = RequestContextUtils.getWebApplicationContext(request);
	ProductService productService = (ProductService)ctx.getBean("productService");

	Map<String, String> param = new HashMap<String, String>();

	param.put("cstmId", cstmId);
	param.put("snsFl", snsFl);

	String snsConnectFlag = request.getParameter("snsConnectFlag")==null?"":request.getParameter("snsConnectFlag");

	// SNS 회원 연동후 최초 로그인시 레이어처리를 위해 추가
	String sCstmId = request.getParameter("cstmId")==null?"":request.getParameter("cstmId");
	String sCstmNm = request.getParameter("cstmNm")==null?"":request.getParameter("cstmNm");
	String gradeCd = request.getParameter("gradeCd")==null?"":request.getParameter("gradeCd");
	String gradeCdNm = request.getParameter("gradeCdNm")==null?"":request.getParameter("gradeCdNm");
	String uCstmId = request.getParameter("uCstmId")==null?"":request.getParameter("uCstmId");
	String snsType = request.getParameter("snsType")==null?"":request.getParameter("snsType");
%>
<!DOCTYPE html>
<html lang="ko">
<c:set var="prdUrl" value="${_head_cdn_root }${uf:getConst('PRODUCT_FILE_UPLOAD') }" />
<c:set var="mainBnrUrl" value="${_head_cdn_root }${uf:getConst('MAIN_MNG_BANNER_FILE_UPLOAD') }" />
<c:set var="embLocCd" value="${uf:getConst('ADM_EMB_MNG_LOC_CD') }" />
<c:set var="prdReviewUrl" value="${_head_cdn_root }${uf:getConst('PRODUCTREVIEW_FILE_UPLOAD') }"/>

<head>
<jsp:include page="${uf:getConst('INCLUDE_HEAD') }">
	<jsp:param value="<%=title%>" name="title"/>
	<jsp:param value="<%=description %>" name="description"/>
	<jsp:param value="<%=keyword %>" name="keywords"/>
</jsp:include>
<script type="text/javascript">
	var mainInstaFeedInfo = {};
	function instaLoad (bizAccType, loc) {

		var div = 'rollingList';
		var type = '1' === loc ? 'left' : 'right';

		$.ajax({
			type: 'GET',
			url: '/kr/ko/MainInstaApiRequest.do',
			data : { bizAccType : bizAccType , "page" : "MAIN"},
			dataType: 'json',
			success: function(json) {
			    var list = json.media.data;
			    var html = '';

			    $.each (list, function(i, e) {

			    	var mediaType = e.media_type;
			    	var mediaUrl = e.media_url;
			    	var mediaId = e.id;

			   		mainInstaFeedInfo[mediaId] = e;

			   		if (mediaType === 'VIDEO') {
			   			mediaUrl = e.thumbnail_url;
			   		}
			    	html += '<li><a href="javascript:getInstaDetail(\''+mediaId+'\')"><img src="' + mediaUrl + '"></a></li>';
			    });
			    $('#'+ bizAccType).html(html);
			},
			complete : function() {
				rollingSlide('.'+div+loc, type);
			},
			error : function() {
				$('.instaSction').css('display','none');
				console.log('instagram graph api error');
			}
		});
	}

	var preSeq = '';
	var tp = '';

	function openPreview(seq, type) {
		//if(preSeq!=seq || tp != type) {
			$("#popArea").html("");
			var myShopPrdFl = $.jcom.getMyShopYn(seq);
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
				var ordDate = firstPurchData[1];
				if(cnt > 0){
					$("#firstPurchasePop").find(".layerWrap .alertCont .txt4").html("해당 제품은 공식 온라인몰 첫 구매 전용제품입니다.");
					$("#firstPurchasePop").find(".layerWrap .alertCont .txt2").html("(고객님의 공식 온라인몰 최근 구매 일자: "+ordDate+")");
					layerOpen('firstPurchasePop');
					return;
				}
			}else if(firstYearYn == "Y"){
				var firstPurInThisYearFl = $.jcom.getFirstPurInThisYearYn();
				var firstPurchDataInThisYear = firstPurInThisYearFl.split("|");
				var cnt = firstPurchDataInThisYear[0];
				var ordDate = firstPurchDataInThisYear[1];
				if(cnt > 0){
					$("#firstYearPurchasePop").find(".layerWrap .alertCont .txt4").html("해당 제품은 공식 온라인몰 올해 첫 구매 전용제품입니다.");
					$("#firstYearPurchasePop").find(".layerWrap .alertCont .txt2").html("(고객님의 공식 온라인몰 올해 최근 구매 일자: "+ordDate+")");
					layerOpen('firstYearPurchasePop');
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
						$("#myShopFirstJoinPop").find(".layerWrap .alertCont .txt4").html("해당 제품은 공식 온라인몰 </br>MYSHOP 등록 후 첫 구매 전용제품입니다.");
						$("#myShopFirstJoinPop").find(".layerWrap .alertCont .txt2").html("(고객님의 공식 온라인몰 MYSHOP </br>최근 구매 일자: "+ordDate+")");
						layerOpen('myShopFirstJoinPop');
						return;
					}
				}
			}
			if(groupCampaignYn == "Y"){
				var oneData = $.jcom.getPurchaselimitOneData(seq);
				var totalCnt = 0;
				if(oneData.length > 0){
					var limitQty = oneData[0].qty;
					for(var i = 0; i< oneData.length;i++){
						totalCnt += oneData[i].cnt;
					}
					if(totalCnt  >= limitQty){
						$.jcom.showCommonLayer("구매할 수 없는 상품이 포함되어 있습니다.</br>해당 이벤트의 유의사항을 다시 확인해주세요.");
						return;
					}
				}
			}
			if(purHistCustPurPsblYn == "Y" || npurHistCustPurPsblYn == "Y"){
				var purCondPrdCnfmYn = $.jcom.getPurCondPrdCnfmYn(seq);
				if(purCondPrdCnfmYn != 'Y'){
					$.jcom.showCommonLayer("해당 제품은 구매 제한이 있는 상품입니다<br>유의사항을 다시 확인해주세요.");
					return "false";
				}
			}
			$.ajax({
				url:'/kr/ko/ProductPreview.do',
				type:'get',
				data:{prdSeq:seq, type: type},
				dataType:'text',
				success:function(data) {
					$("#popArea").html(data);
					preSeq = seq;
					tp = type;

					//옵션이 없고 sns 로그인 사용자가 바로구매를 선택한 경우
					if($("#isSnsLogin").val() == 'Y' && type == "ORDER" && $("#singlePrdYn").val() == 'Y' && $("#addPrdListLength").val() == 0){
						layerOpen('fullMemberBenefit');
					}

					if($("#singlePrdYn").val() == 'Y' && $("#addPrdListLength").val() == 0 && $("#multiPurType").val() == ''){
						fnCartAdd(type, seq);
					}else{
						layerOpen('pdtPreviewPop');
					}
					return false;
				}
			});
		/* } else {
			layerOpen('pdtPreviewPop');
		} */
	}

	function openProductReviewView(seq) {
		//$('.inputAlt').hide();
		$.ajax({
			url:'/kr/ko/ProductReviewView.do',
			type:'get',
			data:{reviewSeq:seq, mode:'product'},
			async:false,
			dataType:'text',
			error:function(e){},
			success:function(data) {
				$('#reviewView').html(data);
				layerOpen('prdReviewView');
				reviewDetailSlide();
			}
		});
	}

	function getInstaDetail(mediaId){
		var data = mainInstaFeedInfo[mediaId];
		if(data!=undefined){
			if (data.media_type === 'VIDEO') {
	   			mediaTag = '<video controls src="'+data.media_url+'" poster="'+data.thumbnail_url+'" style="width:416px;" />';
	   		}else{
	   			mediaTag = '<img src="'+data.media_url+'" style="width:416px;" />';
	   		}
	   		$("#instaDetailMedia").html(mediaTag);
	   		$("#instaDetailUser").text("@"+data.username);
	   		$("#instaDetailUrl").attr("href",data.permalink);
			$("#instaDetailContext").html(data.caption.split('\n').join('<br/>'));
			layerOpen('instaPop');
		}else{
			$.jcom.showCommonLayer("처리 중 장애가 발생하였습니다. 잠시 후 재시도 후에도 지속적인 문제 발생 시 고객센터로 문의 바랍니다.");
		}
	}

	$(function() {
		instaLoad('INSTALOG', '1');
		instaLoad('OFFICIAL', '2');
	});
	
	function fncSaveJim(prdSeq, prdSeq2,myshopYn,myshopFl) {
		var flag = $.jcom.saveJim(prdSeq, prdSeq2,myshopYn,myshopFl);
    	if(flag != "false"){
    		wishSel(myshopYn,myshopFl);
    	}
    }
</script>
<link rel="stylesheet" href="${_head_cdn_root }/resources/web2/css/slick.css">
<script type="text/javascript" src="${_head_cdn_root }/resources/web2/js/slick.min.js"></script>
</head>
<body>
	<div id="wrap">
		<jsp:include page="${uf:getConst('INCLUDE_HEADER') }" />

		<!-- 메인 팝업 -->
		<jsp:include page="${uf:getConst('INCLUDE_MAIN_POPUP') }" />
		<!-- //메인 팝업 -->

		<div id="container">
			<!-- 상단 비쥬얼 영역 -->
			<c:set var="keyVisualList" value="${keyVisualInfo.keyVisualList}" />
			<c:if test="${not empty keyVisualList }">
				<div class="keyVisualSlide">
					<div class="slide">
						<ul class="swiper-wrapper">
							<c:forEach items="${keyVisualList }" var="keyVo" varStatus="keyIdx">
								<!-- 2단 형태 cloumn2, 이벤트+제품 column3 -->
								<c:set var="bnrTmplTyp">
									<c:choose>
										<c:when test="${keyVo.bnrTmpl eq 'TPKV02'}">cloumn2</c:when>
										<c:when test="${keyVo.bnrTmpl eq 'TPKV03'}">cloumn3</c:when>
									</c:choose>
								</c:set>
								<!-- 정렬 left, right, sort로 구분 -->
								<c:set var="sortTyp">
									<c:choose>
										<c:when test="${keyVo.leftSort eq 'L' || (keyVo.bnrTmpl eq 'TPKV02' && keyVo.rightSort eq 'L')}">left</c:when>
										<c:when test="${keyVo.leftSort eq 'M' || (keyVo.bnrTmpl eq 'TPKV02' && keyVo.rightSort eq 'M')}">center</c:when>
										<c:when test="${keyVo.leftSort eq 'R' || (keyVo.bnrTmpl eq 'TPKV02' && keyVo.rightSort eq 'R')}">right</c:when>
									</c:choose>
								</c:set>
								<c:set var="keyLeftPcImg" value="${mainBnrUrl}${keyVo.locCd}_${uf:GetProductImgName(keyVo.mainDpSeq, keyVo.leftPcImgNm, '_left_pc')}" />
								<c:set var="keyRightPcImg" value="${mainBnrUrl}${keyVo.locCd}_${uf:GetProductImgName(keyVo.mainDpSeq, keyVo.rightPcImgNm, '_right_pc')}" />
								<li class="swiper-slide">
									<span class="box ${bnrTmplTyp}">
										<a href="${keyVo.leftPcLink }" class="${sortTyp }" style="background: #fff;">
											<span class="txtWrap">
												<span class="txt" style="color:${IEFlag eq 'Y' ? fn:substring(keyVo.leftSubTitleClr, 0, 7) : keyVo.leftSubTitleClr };">${fn:replace(keyVo.leftSubTitle, newLineChar, '<br/>') }</span>
												<strong class="tit" style="color:${IEFlag eq 'Y' ? fn:substring(keyVo.leftTitleClr, 0, 7) : keyVo.leftTitleClr };">${fn:replace(keyVo.leftTitle, newLineChar, '<br/>') }</strong>
											</span>
											<span class="imgWrap">
												<c:set var="keyVisualErrImg" value="/kr/ko/resources/error/img/1280X640.jpg" />
												<c:if test="${keyVo.bnrTmpl eq 'TPKV03'}">
													<c:set var="keyVisualErrImg" value="/kr/ko/resources/error/img/960X640.jpg" />
												</c:if>
												<img src="${keyLeftPcImg}" alt="${keyVo.leftImgDesc}" onerror="this.src='${keyVisualErrImg}'">
											</span>
										</a>
										<c:if test="${keyVo.bnrTmpl eq 'TPKV02'}">
											<a href="${keyVo.rightPcLink }" class="${sortTyp }" style="background: #fff;">
												<span class="txtWrap">
													<span class="txt" style="color:${IEFlag eq 'Y' ? fn:substring(keyVo.rightSubTitleClr, 0, 7) : keyVo.rightSubTitleClr};">${fn:replace(keyVo.rightSubTitle, newLineChar, '<br/>') }</span>
													<strong class="tit" style="color:${IEFlag eq 'Y' ? fn:substring(keyVo.rightTitleclr, 0, 7) : keyVo.rightTitleclr};">${fn:replace(keyVo.rightTitle, newLineChar, '<br/>') }</strong>
												</span>
												<span class="imgWrap">
													<img src="${keyRightPcImg}" alt="${keyVo.rightImgDesc}" onerror="this.src='/kr/ko/resources/error/img/640X640.jpg'">
												</span>
											</a>
										</c:if>
										<c:set var="keyPrdList" value="${keyVisualInfo.keyPrdList[keyIdx.index] }" />
										<c:if test="${keyVo.bnrTmpl eq 'TPKV03' && not empty keyPrdList}">
											<c:forEach items="${keyPrdList }" var="prdVo" varStatus="idx">
												<c:set var="prdBgClr">
													<c:choose>
														<c:when test="${idx.index eq '0'}">${IEFlag eq 'Y' ? fn:substring(keyVo.leftPrdClr1, 0, 7) : keyVo.leftPrdClr1}</c:when>
														<c:otherwise>${IEFlag eq 'Y' ? fn:substring(keyVo.leftPrdClr2, 0, 7) : keyVo.leftPrdClr2}</c:otherwise>
													</c:choose>
												</c:set>
												<a href="/kr/ko/ProductView.do?prdSeq=${prdVo.prdSeq }" class="center ${fn:length(keyPrdList) < 2 ? 'onePrd' : ''}" style="background:${prdBgClr};">
													<span class="inner"> <!-- inner -->
														<span class="imgWrap">
															<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
															<img src="${prdUrl }${uf:GetProductImgName(prdVo.prdSeq, prdVo.prdImg, imggubun) }" alt="${prdVo.prdNm }" class="img" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
														</span>
														<span class="txtWrap">
															<c:set var="prdTxtClr">
																${IEFlag eq 'Y' ? fn:substring(keyVo.leftSubTitleClr, 0, 7) : keyVo.leftSubTitleClr }
															</c:set>
															<span class="name" style="color:${prdTxtClr};">${prdVo.prdNm }</span>
															<span class="hash" style="color:${prdTxtClr};">
																<c:if test="${fn:length(keyPrdList) < 2}">
																	<c:forTokens items="${prdVo.hashTag }" delims="@" var="item" varStatus="i">
																		<span><c:out value="${item }" /></span>
																	</c:forTokens>
																</c:if>
															</span>
														</span>
													</span>
												</a>
											</c:forEach>
										</c:if>
									</span>
								</li>
							</c:forEach>
						</ul>
					</div>
					<div class="slideControl">
						<div class="inner">
							<span class="slidePage"></span>
							<button type="button" class="btnAuto">자동제어버튼</button>
						</div>
					</div>
				</div>
					<script>
						keyVisualSlide();
					</script>
			</c:if>
			<!-- //상단 비쥬얼 영역 -->

			<!-- 이니템 -->
			<c:if test="${dpTitleList[0].useFl eq 'Y'}">
			<section class="innitemSection">
				<%if (!isLogin) { %>
				<div class="loginRequestBox">
					<p>로그인 하시면 <img src="/kr/ko/resources/web2/images/main/logo_innisfree.png" alt="이니스프리">에서 고객님께 딱! 맞는 제품을 추천해드립니다.</p>
					<a href="/kr/ko/MemberJoinStep1.do" class="btnType1">회원가입</a>
					<a href="javascript:void(0);" class="btnType2" onclick="adobeActionTrack('o','INNIWEB^GNB^로그인'); $.jhead.fnChkLoginPagePop(); makeScriptGA_Event('PC_HEADER', 'UTILITY', '로그인','Y');">로그인</a>
				</div>
				<% } else {%>
				<c:if test="${! empty mainRecommendList}">
				<h2 class="subTitle"><%=CommonUtil.replaceStr(cstmNm) %>${dpTitleList[0].cdNm}</h2>
				<div class="innitemSlide">
					<div class="pdtListType contWrap">
						<div class="slide">
							<ul class="swiper-wrapper">
								<c:forEach items="${mainRecommendList}" var="prd" varStatus="s">
									<c:set var="discount" value="${uf:GetDiscount(prd.stdPrc, prd.salPrc, true) }"/>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtImg">
												<span class="stikerWrap">
													<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc && discount > 0}"><strong class="stikerType1">${discount }%</strong></c:if>
													<c:if test="${prd.p_type eq 'E' }"><strong class="stikerType2">1+1</strong></c:if>
													<c:if test="${!empty prd.multiPurType }"><strong class="stikerType2"><c:out value="${prd.multiPurType }"/></strong></c:if>
													<c:if test="${prd.salChannel eq 'O' || prd.catCd1st eq 'OO' }"><strong class="stikerType3">온라인<br>전용</strong></c:if>
													<c:if test="${prd.myshop_yn eq 'Y'}"><strong class="stikerType3">마이샵<br>전용</strong></c:if>
												</span>
												<span class="labelWrap">
													<c:forTokens items="${prd.pEmblem }" delims="," var="temp" varStatus="i">
														<c:forTokens items="${prd.pEmblemInfo }" delims="," var="item" varStatus="i">
															<c:set var="mainSeq" value="${fn:split(item,'::')[0]}"/>
															<c:set var="embPcImgNm" value="${fn:split(item,'::')[1]}"/>
															<c:if test="${temp eq mainSeq}">
																<span><img src="${prdUrl }${embLocCd}_${uf:GetProductImgName(mainSeq, embPcImgNm, '_0')}" onerror="this.src='/kr/ko/resources/error/img/75x75.png'"></span>
															</c:if>
														</c:forTokens>
													</c:forTokens>
												</span>
												<c:set var="imggubun" value="_${prd.lpGubun }5_S_320" />
												<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdDspImg5, imggubun)}"/>
												<c:if test="${empty prd.prdDspImg5}">
													<c:if test="${!empty prd.prdDspImg1}">
														<c:set var="imggubun" value="_${prd.lpGubun }1_S_320" />
														<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdDspImg1, imggubun)}"/>
													</c:if>
													<c:if test="${empty prd.prdDspImg1}">
														<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
														<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun)}"/>
													</c:if>
												</c:if>
												<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
												<img src="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun)}" alt="${prd.prdNm}" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												<img src="${overImg }" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'" >
											</a>
											<span class="pdtUtil">
												<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="iconOpen" target="_blank">새 창</a>
												<c:choose>
													<c:when test="${empty userInfo}">
														<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
													</c:when>
													<c:otherwise>
														<c:set var="jimUrl" value="fncSaveJim('${prd.prdSeq }@', '${prd.prdSeq }@', '${prd.myshop_yn }', '${myShopRegFl}');"/>
													</c:otherwise>
												</c:choose>
												<button type="button" class="iconZzim <c:if test="${prd.jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
												<c:if test="${prd.salFl ne '2' && prd.salFl ne '4' }">
												<button type="button" class="iconCart" onclick="javascript:openPreview('${prd.prdSeq }', 'POPCART');">장바구니</button>
												<button type="button" class="iconBuy" onclick="javascript:openPreview('${prd.prdSeq }', 'ORDER');">바로구매</button>
												</c:if>
											</span>
										</span>
										<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtCont">
											<span class="txt" style="color:${prd.attribute01}">${prd.prdNmS}</span>
											<span class="name">${prd.prdNm}</span>
											<c:if test="${prd.salFl ne '4' }">
												<span class="price">
													<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc}">
														<del class="regular"><fmt:formatNumber value="${prd.stdPrc}" type="number" />원</del>
													</c:if>
													<span class="num"><fmt:formatNumber value="${prd.salPrc}" type="number" /></span>원
													<c:if test="${prd.salFl eq '2' }">
														<span class="soldOut">일시품절</span>
													</c:if>
												</span>
											</c:if>
											<c:if test="${prd.salFl eq '4' }">
												<span class="price">
													<strong class="ready">출시예정</strong>
												</span>
											</c:if>
										</a>
									</li>
								</c:forEach>
							</ul>
						</div>
					</div>
					<div class="slideBtn">
						<button type="button" class="btnPrev">이전 슬라이드</button>
						<button type="button" class="btnNext">다음 슬라이드</button>
					</div>
				</div>
				<script>
					innitemSlide();
				</script>
				</c:if>
				<% } %>
			</section>
			</c:if>
			<!-- //이니템 -->

			<!-- 인기 제품 -->
			<c:if test="${dpTitleList[1].useFl eq 'Y'}">
			<c:if test="${!empty popularPrdInfo.bannerInfo}">
				<c:set var="popularPrd" value="${popularPrdInfo.bannerInfo}" />
				<c:set var="popularPrdImg"
					value="${mainBnrUrl}${popularPrd.locCd}_${uf:GetProductImgName(popularPrd.mainDpSeq, popularPrd.imgNm, '_img')}" />
				<section class="popularSection">
					<h2 class="subTitle">${dpTitleList[1].cdNm}</h2>
					<div class="contWrap">
						<div class="pdtListType2">
							<ul>
								<li class="vod">
									<c:choose>
										<c:when test="${!empty popularPrd.videoNm}">
											<!-- mp4로 등록 될 경우-->
											<video controls src="${mainBnrUrl}${popularPrd.locCd}_${uf:GetProductImgName(popularPrd.mainDpSeq, popularPrd.videoNm, '_video')}" id="videoPlayer" poster="${popularPrdImg}"></video>
											<button type="button" onclick="vodPlay();">
												<span class="txt">
												</span>
												<img src="${popularPrdImg}" alt="${popularPrd.imgDesc}" onerror="this.src='/kr/ko/resources/error/img/640x350.png'">
											</button>
										</c:when>
										<c:when test="${!empty popularPrd.videoLink}">
											<c:choose>
												<c:when test="${'U' eq popularPrd.videoLinkTyp}">
													<!-- 유튜브로 등록 될 경우-->
													<script>
														var youtubeLinkArr = '${popularPrd.videoLink}'.split('/');
														var yotubeId = youtubeLinkArr[youtubeLinkArr.length - 1];
													</script>
													<div id="popularVod"></div>
												</c:when>
												<c:otherwise>
													<!-- 비메오로 등록 될 경우-->
													<video controls src="${popularPrd.videoLink}" id="popularVod" poster="${popularPrdImg}"></video>
												</c:otherwise>
											</c:choose>
											<button type="button" onclick="vodPlay();">
												<span class="txt">
												</span>
												<img src="${popularPrdImg}" alt="${popularPrd.imgDesc}" onerror="this.src='/kr/ko/resources/error/img/640x350.png'">
											</button>
										</c:when>
										<c:otherwise>
											<button type="button" class="img" disabled>
												<img src="${popularPrdImg}" alt="${popularPrd.imgDesc}" onerror="this.src='/kr/ko/resources/error/img/640x350.png'">
											</button>
										</c:otherwise>
									</c:choose>
								</li>
								<c:forEach items="${popularPrdInfo.prdList}" var="prd" varStatus="idx">
									<li>
										<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq}">
											<span class="pdtImg">
												<span class="labelWrap">
													<c:forTokens items="${prd.pEmblem }" delims="," var="item" varStatus="i">
														<c:forTokens items="${prd.pEmblemInfo }" delims="," var="item" varStatus="i">
															<c:set var="mainSeq" value="${fn:split(item,'::')[0]}" />
															<c:set var="embPcImgNm" value="${fn:split(item,'::')[1]}" />
															<c:if test="${temp eq mainSeq}">
																<span><img src="${prdUrl }${embLocCd}_${uf:GetProductImgName(mainSeq, embPcImgNm, '_0')}" onerror="this.src='/kr/ko/resources/error/img/75x75.png'"></span>
															</c:if>
														</c:forTokens>
													</c:forTokens>
												</span>
												<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
												<img src="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun) }" alt="${prd.prdNm}" onerror="this.src='/kr/ko/resources/error/img/125x125.png'">
											</span>
											<span class="pdtCont">
												<span class="name">${prd.prdNm}</span>
												<c:if test="${prd.salFl ne '4' }">
													<span class="price">
														<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc}">
															<del class="regular"><fmt:formatNumber value="${prd.stdPrc}" type="number" />원</del>
														</c:if>
														<span class="num"><fmt:formatNumber value="${prd.salPrc}" type="number" /></span>원
														<c:if test="${prd.salFl eq '2' }">
															<span class="soldOut">일시품절</span>
														</c:if>
													</span>
												</c:if>
												<c:if test="${prd.salFl eq '4' }">
													<span class="price">
														<strong class="ready">출시예정</strong>
													</span>
												</c:if>
											</span>
										</a>
										<div class="pdtUtil">
											<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq}" class="iconOpen" target="_blank">새 창</a>
											<c:choose>
												<c:when test="${empty userInfo}">
													<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
												</c:when>
												<c:otherwise>
													<c:set var="jimUrl" value="fncSaveJim('${prd.prdSeq }@', '${prd.prdSeq }@', '${prd.myshop_yn }', '${myShopRegFl}');"/>
												</c:otherwise>
											</c:choose>
											<c:set var="paramPrdSeq" value="${prd.prdSeq}"/>
											<c:set var="paramjjimYn" value="${prd.jjimYn}"/>
											<%
												// 2020.04.21 찜 상품 prd에서 꺼내서 쓰기위해 수정, 페이지 속도 높이기 위해 수정
												jjimYn = "N";
												if(cstmId != null && cstmId != ""){
													//param.put("prdSeq", String.valueOf(pageContext.getAttribute("paramPrdSeq")));
													jjimYn = String.valueOf(pageContext.getAttribute("paramjjimYn"));
												}
											%>
											<c:set var="jjimYn" value="<%=jjimYn%>" />
											<button type="button" class="iconZzim <c:if test="${jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
											<c:if test="${prd.salFl ne '2' && prd.salFl ne '4' }">
											<button type="button" class="iconCart" onclick="javascript:openPreview('${prd.prdSeq }', 'POPCART');">장바구니</button>
											<button type="button" class="iconBuy" onclick="javascript:openPreview('${prd.prdSeq }', 'ORDER');">바로구매</button>
											</c:if>
										</div>
									</li>
								</c:forEach>
							</ul>
						</div>
					</div>
				</section>
			</c:if>
			</c:if>
			<!-- //인기 제품 -->

			<!-- 온라인 전용관 -->
			<c:if test="${dpTitleList[2].useFl eq 'Y'}">
			<c:if test="${! empty onlineProductList}">
				<section>
					<h2 class="subTitle">${dpTitleList[2].cdNm}</h2>
					<div class="bgWrap">
						<div class="bestSeller">
							<div class="contWrap">
								<div class="slide">
									<div class="swiper-wrapper">
										<!--  제품별 영역 -->
										<c:forEach items="${onlineProductList}" var="prd" varStatus="idx">
											<section class="swiper-slide">
												<div class="pdtCont">
													<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq}">
														<span class="name">${prd.prdNm}</span>
														<span class="txt"><str:ttlLmt title="${prd.basicDesc}" max="200" end="..." /></span>
														<c:if test="${prd.salFl ne '4' }">
															<span class="price">
																<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc}">
																	<del class="regular"><fmt:formatNumber value="${prd.stdPrc}" type="number" />원</del>
																</c:if>
																<span class="num"><fmt:formatNumber value="${prd.salPrc}" type="number" /></span>원
																<c:if test="${prd.salFl eq '2' }">
																	<span class="soldOut">일시품절</span>
																</c:if>
															</span>
														</c:if>
														<c:if test="${prd.salFl eq '4' }">
															<span class="price">
																<strong class="ready">출시예정</strong>
															</span>
														</c:if>
													</a>
													<div class="pdtUtil">
														<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="iconOpen" target="_blank">새 창</a>
														<c:choose>
															<c:when test="${empty userInfo}">
																<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
															</c:when>
															<c:otherwise>
																<c:set var="jimUrl" value="fncSaveJim('${prd.prdSeq }@', '${prd.prdSeq }@', '${prd.myshop_yn }', '${myShopRegFl}');"/>
															</c:otherwise>
														</c:choose>
														<c:set var="paramPrdSeq" value="${prd.prdSeq}"/>
														<c:set var="paramjjimYn" value="${prd.jjimYn}"/>
														<%
															// 2020.04.21 찜 상품 prd에서 꺼내서 쓰기위해 수정, 페이지 속도 높이기 위해 수정
															jjimYn = "N";
															if(cstmId != null && cstmId != ""){
																//param.put("prdSeq", String.valueOf(pageContext.getAttribute("paramPrdSeq")));
																jjimYn = String.valueOf(pageContext.getAttribute("paramjjimYn"));
															}
														%>
														<c:set var="jjimYn" value="<%=jjimYn%>" />
														<button type="button" class="iconZzim <c:if test="${jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
														<c:if test="${prd.salFl ne '2' && prd.salFl ne '4' }">
														<button type="button" class="iconCart" onclick="javascript:openPreview('${prd.prdSeq }', 'POPCART');">장바구니</button>
														<button type="button" class="iconBuy" onclick="javascript:openPreview('${prd.prdSeq }', 'ORDER');">바로구매</button>
														</c:if>
													</div>
												</div>
												<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq}" class="pdtImg">
													<%-- <span class="labelWrap">
														<c:forTokens items="${prd.pEmblemInfo }" delims=","var="item" varStatus="i">
															<c:set var="mainSeq" value="${fn:split(item,'::')[0]}" />
															<c:set var="embPcImgNm" value="${fn:split(item,'::')[1]}" />
															<c:if test="${temp eq mainSeq}">
																<span><img src="${prdUrl }${embLocCd}_${uf:GetProductImgName(mainSeq, embPcImgNm, '_0')}" onerror="this.src='/kr/ko/resources/error/img/75x75.png'"></span>
															</c:if>
														</c:forTokens>
													</span> --%>
													<c:set var="imggubun" value="_${prd.lpGubun }_S_450" />
													<img src="${prdUrl }${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun) }" alt="${prd.prdNm}" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<c:forEach items="${onlineProductReview}" var="reviewMap">
													<c:if test="${reviewMap.key eq prd.prdSeq}">
														<c:if test="${! empty reviewMap.value}">
															<div class="reviewBox">
																<p class="reviewTit">이 제품의 리얼 리뷰</p>
																<div class="reviewList">
																	<ul>
																		<c:forEach items="${reviewMap.value}" var="review">
																			<li>
																				<a href="javascript:onclick=openProductReviewView('${review.reviewSeq}');">
																					<span class="reviewPoint">
																						<span style="width:${20*review.evalScor}%;">${review.evalScor}점</span>
																					</span>
																					<span class="txt" ><str:ttlLmt title="${review.goodcnt}" max="182" end="..." /></span>
																				</a>
																			</li>
																		</c:forEach>
																	</ul>
																</div>
															</div>
														</c:if>
													</c:if>
												</c:forEach>
											</section>
										</c:forEach>
										<!-- // -->
									</div>
								</div>
								<a href="/kr/ko/Product.do?catCd01=OO" class="pdtMore">제품 더보기</a>
							</div>
							<div class="slideBtn">
								<button type="button" class="btnPrev">이전 제품</button>
								<button type="button" class="btnNext">다음 제품</button>
							</div>
						</div>
						<script>
							bestSellerSlide();
						</script>
					</div>
				</section>
			</c:if>
			</c:if>
			<!-- //온라인 전용관 -->

			<!-- 20.05 실시간 랭킹 시작-->
			<section class="onRanking">
				<h2 class="subTitle">온라인실시간 랭킹</h2>
				<div class="onRankingWrap">
					<div class="rankTab">
						<ul class="tab-menu">
							<li><a href="메인.html" class="active">실시간 판매 랭킹</a></li>
							<li><a href="메인_2.html">실시간 VIEW 랭킹</a></li>
						</ul>
					</div>
					
					<div class="tab-content">
						<!-- 탭1 실시간 온라인 판매 랭킹:TAB 1-->
						<div id="tab-1" class="tab_cont active">
							<div class="cate_wrap">
								<div class="contWrap cate">
									<ul>
										<li><a href="#">전체</a></li>
										<li><a href="#">스킨케어</a></li>
										<li><a href="#">팩/마스크</a></li>
										<li class="active"><a href="#">페이스 메이크업</a></li>
										<li><a href="#">컬러 메이크업</a></li>
										<li><a href="#">클렌징</a></li>
										<li><a href="#">바디</a></li>
										<li><a href="#">네일</a></li>
										<li><a href="#">헤어</a></li>
										<li><a href="#">방향</a></li>
										<li><a href="#">남성</a></li>
										<li><a href="#">기획세트</a></li>
									</ul>
									<div class="high"></div>
								</div>
							</div>
							<!-- swiper-container -->
							<div class="swiper-container swiper2">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="resources/web2/images/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">1</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/15116_l_S_450.png?202004290840" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="resources/web2/images/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">2</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/26676_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<img class="ic_bestCrown" src="resources/web2/images/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">3</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/20864_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">4</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26116_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">5</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26458_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">6</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">7</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">8</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">9</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">10</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
								</div>

								<!-- navi -->
								<div class="slide_control">
									<div class="swiper-button-prev">이전 제품</div>
									<div class="swiper-button-next">다음 제품</div>
									<button class="btn_autoplay">자동제어버튼</button>
								</div>
							
							</div>
							<!-- //swiper-container -->
						</div>
						<!-- //실시간 VIEW 랭킹-->

						<!-- 탭2 실시간 VIEW 랭킹-->
						<div id="tab-2" class="tab_cont">
							<!-- swiper-container -->
							<div class="swiper-container swiper3">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="resources/web2/images/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">1</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/26518_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="resources/web2/images/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">2</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/26676_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<img class="ic_bestCrown" src="resources/web2/images/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">3</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/20864_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">4</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26116_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">5</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26458_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">6</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
								</div>
			
								<!-- navi -->
								<div class="slide_control">
									<div class="swiper-button-prev">이전 제품</div>
									<div class="swiper-button-next">다음 제품</div>
									<button class="btn_autoplay">자동제어버튼</button>
								</div>
							
							</div>
							<!-- //swiper-container -->
						</div>
						<!-- //실시간 VIEW 랭킹-->
					</div>
				</div>

				<!-- 필요 스크립트 로드 -->
				<!-- <script type="text/javascript" src="resources/web2/js/onranking.js"></script> -->
				<script>
				//온라인 실시간랭킹
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

						onRanking.high();
					},
					high : function(){
						if($('.cate').length){
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
				}
				//확장배너
				function exFloatOnetime(){
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
				</script>
				<script>
					$(function(){
						onRanking.init();
						exFloatOnetime()
					})
				</script>
			</section>
			<!-- //20.05 실시간 랭킹 끝 -->

			<!-- 중단 배너 -->
			<c:if test="${!empty middleBnrList}">
				<div class="mainBannerSlide mainBanner1">
					<div class="slide">
						<ul class="swiper-wrapper">
							<c:forEach items="${middleBnrList}" var="middleBnr" varStatus="idx">
								<li class="swiper-slide">
									<c:if test="${!empty middleBnr.pcLbBgImg}">
										<c:set var="middleBgImg" value="url('${mainBnrUrl}${middleBnr.locCd}_${uf:GetProductImgName(middleBnr.mainDpSeq, middleBnr.pcLbBgImg, '_pc_bg')}')" />
									</c:if>
									<a href="${middleBnr.pcLbLink}" target="${middleBnr.pcLbLinkTyp eq '1' ? '_blank' : '_self' }" style="background: ${IEFlag eq 'Y' ? fn:substring(middleBnr.pcLbBgColor, 0, 7) : middleBnr.pcLbBgColor} ${middleBgImg} no-repeat 50% 50%;">
										<c:if test="${!empty middleBnr.pcLbImgNm}">
											<span class="img">
												<img src="${mainBnrUrl}${middleBnr.locCd}_${uf:GetProductImgName(middleBnr.mainDpSeq, middleBnr.pcLbImgNm, '_pc')}" alt="${middleBnr.pcLbImgDesc}" onerror="this.src='/kr/ko/resources/error/img/270x202.png'">
											</span>
										</c:if>
										<c:if test="${ (middleBnr.pcLbTitFlUse eq 'Y') || (middleBnr.pcLbSubTitFlUse eq 'Y') }">
											<span class="txt">
												<c:if test="${middleBnr.pcLbTitFlUse eq 'Y'}">
													<strong>${fn:replace(middleBnr.pcLbTitle, newLineChar, '<br/>') }</strong>
												</c:if>
												<c:if test="${middleBnr.pcLbSubTitFlUse eq 'Y'}">
													<span>${fn:replace(middleBnr.pcLbSubTitle, newLineChar, '<br/>') }</span>
												</c:if>
											</span>
										</c:if>
									</a>
								</li>
							</c:forEach>
						</ul>
					</div>
					<div class="slidePage"></div>
					<script>
						bannerSlide('mainBanner1');
					</script>
				</div>
			</c:if>
			<!-- //중단 배너 -->

			<!-- 엠디 추천 제품 -->
			<c:if test="${dpTitleList[4].useFl eq 'Y'}">
			<c:if test="${not empty mdRcmdList }">
				<section class="mdRecomSlide">
					<h2 class="subTitle">${dpTitleList[4].cdNm}</h2>
					<div class="contWrap">
						<div class="slide">
							<ul class="swiper-wrapper">
								<c:forEach items="${mdRcmdList }" var="mdRcmdVo" varStatus="s">
									<c:set var="mdRcmdImg" value="${mainBnrUrl}${mdRcmdVo.locCd}_${uf:GetProductImgName(mdRcmdVo.mdFoSeq, mdRcmdVo.prdImg, '_pc')}" />
									<c:set var="discount" value="${uf:GetDiscount(mdRcmdVo.stdPrc, mdRcmdVo.salPrc, true) }" />
									<li class="swiper-slide">
										<a href="/kr/ko/ProductView.do?prdSeq=${mdRcmdVo.prdSeq }">
											<span class="pdtImg">
												<img src="${mdRcmdImg}" alt="${mdRcmdVo.prdNm }" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											</span>
											<span class="pdtCont">
												<c:if test="${not empty mdRcmdVo.prdNmS}">
													<span class="txt" style="color:${mdRcmdVo.attribute01}">${mdRcmdVo.prdNmS}</span>
												</c:if>
												<span class="name">${mdRcmdVo.prdNm }</span>
												<c:if test="${mdRcmdVo.salFl ne '4' }">
													<span class="price">
														<c:if test="${!empty mdRcmdVo.stdPrc && mdRcmdVo.salPrc < mdRcmdVo.stdPrc}">
															<del class="regular"><fmt:formatNumber value="${mdRcmdVo.stdPrc}" type="number" />원</del>
														</c:if>
														<span class="num"><fmt:formatNumber value="${mdRcmdVo.salPrc}" type="number" /></span>원
														<c:if test="${mdRcmdVo.salFl eq '2' }">
															<span class="soldOut">일시품절</span>
														</c:if>
													</span>
												</c:if>
												<c:if test="${mdRcmdVo.salFl eq '4' }">
													<span class="price">
														<strong class="ready">출시예정</strong>
													</span>
												</c:if>
											</span>
										</a>
									</li>
								</c:forEach>
							</ul>
						</div>
						<div class="slideBtn">
							<button type="button" class="btnPrev">이전 슬라이드</button>
							<button type="button" class="btnNext">다음 슬라이드</button>
						</div>
					</div>
					<script>
						mdRecomSlide();
					</script>
				</section>
			</c:if>
			</c:if>
			<!-- //엠디 추천 제품 -->

			<!-- 핫딜 제품 -->
			<c:if test="${dpTitleList[5].useFl eq 'Y'}">			
			<c:if test="${! empty hotDealPrdList}">
				<section class="mainHotDeal">
					<h2 class="subTitle">${dpTitleList[5].cdNm}</h2>
					<div class="contWrap">
						<div class="slide pdtListType">
							<ul class="swiper-wrapper">
								<c:forEach items="${hotDealPrdList}" var="prd" varStatus="s" begin = "0" end = "20">
								<c:set var="discount" value="${uf:GetDiscount(prd.stdPrc, prd.salPrc, true) }"/>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq}" class="pdtImg">
												<span class="stikerWrap">
													<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc && discount > 0}"><strong class="stikerType1">${discount }%</strong></c:if>
													<c:if test="${prd.p_type eq 'E' }"><strong class="stikerType2">1+1</strong></c:if>
													<c:if test="${!empty prd.multiPurType }"><strong class="stikerType2"><c:out value="${prd.multiPurType }"/></strong></c:if>
													<c:if test="${prd.salChannel eq 'O' || prd.catCd1st eq 'OO' }"><strong class="stikerType3">온라인<br>전용</strong></c:if>
													<c:if test="${prd.myshop_yn eq 'Y'}"><strong class="stikerType3">마이샵<br>전용</strong></c:if>
												</span>
												<span class="labelWrap">
													<c:forTokens items="${prd.pEmblem }" delims="," var="temp" varStatus="i">
														<c:forTokens items="${prd.pEmblemInfo }" delims="," var="item" varStatus="i">
															<c:set var="mainSeq" value="${fn:split(item,'::')[0]}"/>
															<c:set var="embPcImgNm" value="${fn:split(item,'::')[1]}"/>
															<c:if test="${temp eq mainSeq}">
																<span><img src="${prdUrl }${embLocCd}_${uf:GetProductImgName(mainSeq, embPcImgNm, '_0')}" onerror="this.src='/kr/ko/resources/error/img/75x75.png'"></span>
															</c:if>
														</c:forTokens>
													</c:forTokens>
												</span>
												<c:set var="imggubun" value="_${prd.lpGubun }5_S_320" />
												<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdDspImg5, imggubun)}"/>
												<c:if test="${empty prd.prdDspImg5}">
													<c:if test="${!empty prd.prdDspImg1}">
														<c:set var="imggubun" value="_${prd.lpGubun }1_S_320" />
														<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdDspImg1, imggubun)}"/>
													</c:if>
													<c:if test="${empty prd.prdDspImg1}">
														<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
														<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun)}"/>
													</c:if>
												</c:if>
												<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
												<img src="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun)}" alt="${prd.prdNm}" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												<img src="${overImg }" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'" >
											</a>
											<span class="pdtUtil">
												<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="iconOpen" target="_blank">새 창</a>
												<c:choose>
													<c:when test="${empty userInfo}">
														<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
													</c:when>
													<c:otherwise>
														<c:set var="jimUrl" value="fncSaveJim('${prd.prdSeq }@', '${prd.prdSeq }@', '${prd.myshop_yn }', '${myShopRegFl}');"/>
													</c:otherwise>
												</c:choose>
												<c:set var="paramPrdSeq" value="${prd.prdSeq}"/>
												<c:set var="paramjjimYn" value="${prd.jjimYn}"/>
												<%
													// 2020.04.21 찜 상품 prd에서 꺼내서 쓰기위해 수정, 페이지 속도 높이기 위해 수정
													jjimYn = "N";
													if(cstmId != null && cstmId != ""){
														//param.put("prdSeq", String.valueOf(pageContext.getAttribute("paramPrdSeq")));
														jjimYn = String.valueOf(pageContext.getAttribute("paramjjimYn"));
													}
												%>
												<c:set var="jjimYn" value="<%=jjimYn%>" />
												<button type="button" class="iconZzim <c:if test="${jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
												<c:if test="${prd.salFl ne '2' && prd.salFl ne '4' }">
												<button type="button" class="iconCart" onclick="javascript:openPreview('${prd.prdSeq }', 'POPCART');">장바구니</button>
												<button type="button" class="iconBuy" onclick="javascript:openPreview('${prd.prdSeq }', 'ORDER');">바로구매</button>
												</c:if>
											</span>
										</span>
										<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtCont">
											<span class="txt" style="color:${prd.attribute01}">${prd.prdNmS}</span>
											<span class="name">${prd.prdNm}</span>
											<c:if test="${prd.salFl ne '4' }">
												<span class="price">
													<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc}">
														<del class="regular"><fmt:formatNumber value="${prd.stdPrc}" type="number" />원</del>
													</c:if>
													<span class="num"><fmt:formatNumber value="${prd.salPrc}" type="number" /></span>원
													<c:if test="${prd.salFl eq '2' }">
														<span class="soldOut">일시품절</span>
													</c:if>
												</span>
											</c:if>
											<c:if test="${prd.salFl eq '4' }">
												<span class="price">
													<strong class="ready">출시예정</strong>
												</span>
											</c:if>
											<span class="pdtStatus">
												<c:if test="${prd.newPrdFl eq 'Y' }"><span class="iconNew">NEW</span></c:if>
												<c:if test="${stopGiftFlag eq 0 && prd.purrwrdPrdUnPaidFl ne 'Y' && prd.rwrdPrdFl eq 'Y' }"><span class="iconGift">GIFT</span></c:if>
												<c:if test="${prd.stdPrc > prd.salPrc }"><span class="iconSale">SALE</span></c:if>
												<c:if test="${prd.stkLmtPrdFl eq 'Y' }"><span class="iconLimit">한정수량</span></c:if>
												<c:if test="${prd.catCd2nd eq 'OOBP' }"><span class="iconBig">대용량</span></c:if>
												<c:if test="${prd.rglDlvPrDfl eq 'Y' && bigSalePreoOrder == 0 }"><span class="iconRglr">정기배송</span></c:if>
											</span>
										</a>
									</li>
								</c:forEach>
							</ul>
						</div>
						<a href="/kr/ko/HotdealSpcPrcMain.do" class="pdtMore">제품 더보기</a>
					</div>
					<div class="slideBtn">
						<button type="button" class="btnPrev">이전 슬라이드</button>
						<button type="button" class="btnNext">다음 슬라이드</button>
					</div>
					<script>
						hotDealSlide();
					</script>
				</section>
			</c:if>
			</c:if>
			<!-- //핫딜 제품 -->

			<!-- 리얼 리뷰 -->
			<c:if test="${dpTitleList[6].useFl eq 'Y'}">			
			<c:if test="${! empty recobellReviewList}">
				<section class="mainReviewSection">
					<h2 class="subTitle">${dpTitleList[6].cdNm}</h2>
					<div class="bgWrap">
						<div class="reviewSlide">
							<div class="slide contWrap">
								<ul class="swiper-wrapper">
									<c:forEach items="${recobellReviewList}" var="review" varStatus="s">
										<li class="swiper-slide">
											<div class="box">
												<button type="button" onclick="openProductReviewView('${review.reviewSeq }');" onClick="makeScriptGA_Order_Step1_ProductClick('어제 많이 본 제품 후기','${review.prdSeq }', '${review.prdNm }', 'INNISFREE', '${review.categoryNm}',('${review.catCd2nd}' == '') ? '${review.catCd1st}' : '${review.catCd2nd}', '${review.p_type }', '${review.catCd3ndNm}');">
													<span class="img">
														<img src="${prdReviewUrl }${uf:GetProductReviewListImgName(review.attch)}" alt="${review.attch}" onerror="this.src='/kr/ko/resources/error/img/300x300.png'" />
														<span class="length"><span>등록된 이미지 수</span>${review.tplRegCnt}</span>
														<c:if test="${review.tplCl eq 'V' }">
															<span class="mov">동영상</span>
														</c:if>
													</span>
													<span class="reviewerInfo">
														<c:choose>
															<c:when test="${empty review.revrseq }">
																<c:set var="gradeImg" value=""/>
																<c:choose>
																	<c:when test="${review.gradeCd eq 'CA02' }">
																		<c:set var="gradeImg" value="${_head_cdn_root }/kr/ko/resources/web2/images/common/grade_g.png"/>
																	</c:when>
																	<c:when test="${review.gradeCd eq 'CA03'}">
																		<c:set var="gradeImg" value="${_head_cdn_root }/kr/ko/resources/web2/images/common/grade_w.png"/>
																	</c:when>
																	<c:when test="${review.gradeCd eq 'CA04'}">
																		<c:set var="gradeImg" value="${_head_cdn_root }/kr/ko/resources/web2/images/common/grade_p.png"/>
																	</c:when>
																</c:choose>
																<span class="reviewerId"><img src="${gradeImg}" onerror="this.src='/kr/ko/resources/error/img/75x75.png'"><u:idHidden str="${review.regId}" /></span>
															</c:when>
															<c:otherwise>
																<span class="thumb"><img src="${_head_cdn_root }/kr/ko/resources/web/images/review/${review.profileimg}_on.png" onerror="this.src='/kr/ko/resources/error/img/75x75.png'" /></span>
																<%-- <span class="reviewerId"><span class="grade"><img src="/resources/web2/images/common/grade_p.png" alt=""></span>${uf:maskingId(review.regId,'')}</span> --%>
																<span class="reviewerId"><span class="lv"><span>Lv</span> ${review.revrlev}</span> ${review.revrniknm }</span>
															</c:otherwise>
														</c:choose>
														<span class="date">${review.regDate}</span>
													</span>
													<span class="txt">
														<c:if test="${review.bestFl eq 'Y'}"><span class="iconBest">BEST</span></c:if>${fn:replace(review.goodcnt, newLineChar, '<br/>') }
													</span>

													<span class="reviewPoint">
														<span style="width:${20*review.evalScor}%;">${review.evalScor}점</span>
													</span>
												</button>

												<div class="reviewRelPdt">
													<c:choose>
														<c:when test="${review.salFl eq '3'}">
															<c:set var="reviewRedirectValue" value="javascript:alert('판매가 중지된 제품입니다.');"/>
														</c:when>
														<c:otherwise>
															<c:set var="reviewRedirectValue" value="/kr/ko/ProductView.do?prdSeq=${review.prdSeq}"/>
														</c:otherwise>
													</c:choose>
													<a href="${reviewRedirectValue}" class="pdtImg"  onClick="makeScriptGA_Order_Step1_ProductClick('어제 많이 본 제품 후기','${review.prdSeq }', '${review.prdNm }', 'INNISFREE', '${review.categoryNm}',('${review.catCd2nd}' == '') ? '${review.catCd1st}' : '${review.catCd2nd}', '${review.p_type }', '${review.catCd3ndNm}');">
														<c:set var="imggubun" value="_${review.lpGubun }_S_107" />
														<img src="${prdUrl }${uf:GetProductImgName(review.prdSeq, review.prdImg, imggubun) }" alt="${review.prdNm }" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													</a>
													<span class="pdtUtil">
														<c:choose>
															<c:when test="${empty userInfo}">
																<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
															</c:when>
															<c:otherwise>
																<c:set var="jimUrl" value="fncSaveJim('${review.prdSeq }@', '${review.prdSeq }@', '${review.myshop_yn }', '${myShopRegFl}');"/>
															</c:otherwise>
														</c:choose>
														<c:if test="${review.salFl ne '3' }">
															<button type="button" class="iconZzim <c:if test="${review.jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
															<c:if test="${review.salFl ne '2' && review.salFl ne '4' }">
															<button type="button" class="iconCart" onclick="javascript:openPreview('${review.prdSeq }', 'POPCART');">장바구니</button>
															<button type="button" class="iconBuy" onclick="javascript:openPreview('${review.prdSeq }', 'ORDER');">바로구매</button>
															</c:if>
														</c:if>
													</span>
													<a href="${reviewRedirectValue}" class="pdtCont"  onClick="makeScriptGA_Order_Step1_ProductClick('어제 많이 본 제품 후기','${review.prdSeq }', '${review.prdNm }', 'INNISFREE', '${review.categoryNm}',('${review.catCd2nd}' == '') ? '${review.catCd1st}' : '${review.catCd2nd}', '${review.p_type }', '${review.catCd3ndNm}');">
														<span class="name">${review.prdNm}</span>
														<c:if test="${review.salFl ne '4' }">
															<span class="price">
																<c:if test="${!empty review.stdPrc && review.salPrc < review.stdPrc}">
																	<del class="regular"><fmt:formatNumber value="${review.stdPrc}" type="number" />원</del>
																</c:if>
																<span class="num"><fmt:formatNumber value="${review.salPrc}" type="number" /></span>원
																<c:if test="${review.salFl eq '2' }">
																	<span class="soldOut">일시품절</span>
																</c:if>
															</span>
														</c:if>
														<c:if test="${review.salFl eq '4' }">
															<span class="price">
																<strong class="ready">출시예정</strong>
															</span>
														</c:if>
													</a>
												</div>
											</div>
										</li>
									</c:forEach>
								</ul>
							</div>
							<div class="slideBtn">
								<button type="button" class="btnPrev">이전 슬라이드</button>
								<button type="button" class="btnNext">다음 슬라이드</button>
							</div>
							<a href="/kr/ko/ProductReviewList.do" class="pdtMore">리뷰 더보기</a>
						</div>
						<script>
							reviewSlide();
						</script>
					</div>
				</section>
			</c:if>
			</c:if>
			<!-- //리얼 리뷰 -->

			<!-- MY SHOP -->
			<c:if test="${dpTitleList[7].useFl eq 'Y'}">			
			<section class="mainMyshop">
				<h2 class="subTitle">${dpTitleList[7].cdNm}</h2>

				<!-- 마이샵 등록 요청 -->
				<div class="myshopRequestWrap">
					<div class="contWrap">
						<div class="cont">
							<p class="tit">잠깐! MY SHOP은 등록 하셨나요?</p>
							<p class="txt">자주 가는 매장을 MY SHOP으로 등록하시면<br>My SHOP만의 이벤트, 할인, MY SHOP 전용 제품 등 특별한 혜택을 받으실 수 있습니다!</p>
							<a href="/kr/ko/FindStoreList.do" class="link">MY SHOP 등록하기</a>
						</div>
						<span class="img"><img src="/kr/ko/resources/web2/images/main/img_myshop_req.png" alt="온/오프라인전용 5천원 쿠폰"></span>
					</div>
				</div>
				<!-- //마이샵 등록 요청 -->
				<c:if test="${not empty myShopProdList }">
				<div class="myShopSlide">
					<div class="pdtListType contWrap">
						<div class="slide">
							<ul class="swiper-wrapper">
								<c:forEach items="${myShopProdList}" var="prd" varStatus="s">
								<c:set var="discount" value="${uf:GetDiscount(prd.stdPrc, prd.salPrc, true) }"/>
								<li class="swiper-slide">
									<span class="pdtOver">
										<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtImg">
											<span class="stikerWrap">
												<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc && discount > 0}"><strong class="stikerType1">${discount }%</strong></c:if>
												<c:if test="${prd.p_type eq 'E' }"><strong class="stikerType2">1+1</strong></c:if>
												<c:if test="${!empty prd.multiPurType }"><strong class="stikerType2"><c:out value="${prd.multiPurType }"/></strong></c:if>
												<c:if test="${prd.salChannel eq 'O' || prd.catCd1st eq 'OO' }"><strong class="stikerType3">온라인<br>전용</strong></c:if>
												<c:if test="${prd.myshop_yn eq 'Y'}"><strong class="stikerType3">마이샵<br>전용</strong></c:if>
											</span>
											<span class="labelWrap">
												<c:forTokens items="${prd.pEmblem }" delims="," var="temp" varStatus="i">
													<c:forTokens items="${prd.pEmblemInfo }" delims="," var="item" varStatus="i">
														<c:set var="mainSeq" value="${fn:split(item,'::')[0]}"/>
														<c:set var="embPcImgNm" value="${fn:split(item,'::')[1]}"/>
														<c:if test="${temp eq mainSeq}">
															<span><img src="${prdUrl }${embLocCd}_${uf:GetProductImgName(mainSeq, embPcImgNm, '_0')}" onerror="this.src='/kr/ko/resources/error/img/75x75.png'"></span>
														</c:if>
													</c:forTokens>
												</c:forTokens>
											</span>
											<c:set var="imggubun" value="_${prd.lpGubun }5_S_320" />
											<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdDspImg5, imggubun)}"/>
											<c:if test="${empty prd.prdDspImg5}">
												<c:if test="${!empty prd.prdDspImg1}">
													<c:set var="imggubun" value="_${prd.lpGubun }1_S_320" />
													<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdDspImg1, imggubun)}"/>
												</c:if>
												<c:if test="${empty prd.prdDspImg1}">
													<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
													<c:set var="overImg" value="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun)}"/>
												</c:if>
											</c:if>
											
											<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
											<img src="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun)}" alt="${prd.prdNm}" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											<img src="${overImg }" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'" >
										</a>
										<span class="pdtUtil">
											<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="iconOpen" target="_blank">새 창</a>
											<c:choose>
												<c:when test="${empty userInfo}">
													<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
												</c:when>
												<c:otherwise>
													<c:set var="jimUrl" value="fncSaveJim('${prd.prdSeq }@', '${prd.prdSeq }@', '${prd.myshop_yn }', '${myShopRegFl}');"/>
												</c:otherwise>
											</c:choose>
											<c:set var="paramPrdSeq" value="${prd.prdSeq}"/>
											<c:set var="paramjjimYn" value="${prd.jjimYn}"/>
											<%
												// 2020.04.21 찜 상품 prd에서 꺼내서 쓰기위해 수정, 페이지 속도 높이기 위해 수정
												jjimYn = "N";
												if(cstmId != null && cstmId != ""){
													//param.put("prdSeq", String.valueOf(pageContext.getAttribute("paramPrdSeq")));
													jjimYn = String.valueOf(pageContext.getAttribute("paramjjimYn"));
												}
											%>
											<c:set var="jjimYn" value="<%=jjimYn%>" />
											<button type="button" class="iconZzim <c:if test="${jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
											<c:if test="${prd.salFl ne '2' && prd.salFl ne '4' }">
											<button type="button" class="iconCart" onclick="javascript:openPreview('${prd.prdSeq }', 'POPCART');">장바구니</button>
											<button type="button" class="iconBuy" onclick="javascript:openPreview('${prd.prdSeq }', 'ORDER');">바로구매</button>
											</c:if>
										</span>
									</span>
									<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtCont">
										<span class="txt" style="color:${prd.attribute01}">${prd.prdNmS}</span>
										<span class="name">${prd.prdNm}</span>
										<span class="price">
											<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc}">
												<del class="regular"><fmt:formatNumber value="${prd.stdPrc}" type="number" />원</del>
											</c:if>
											<span class="num"><fmt:formatNumber value="${prd.salPrc}" type="number" /></span>원
											<c:if test="${prd.salFl eq '2' }">
												<span class="soldOut">일시품절</span>
											</c:if>
										</span>
									</a>
								</li>
								</c:forEach>
							</ul>
						</div>
						<a href="/kr/ko/Product.do?catCd01=MS&catCd02=MSMS" class="pdtMore">제품 더보기</a>
					</div>
					<div class="slideBtn">
						<button type="button" class="btnPrev">이전 슬라이드</button>
						<button type="button" class="btnNext">다음 슬라이드</button>
					</div>
					<script>
						myShopSlide();
					</script>
				</div>
				</c:if>
			</section>
			</c:if>
			<!-- //MY SHOP -->

			<!-- 새로운 제품 -->
			<c:if test="${dpTitleList[8].useFl eq 'Y'}">			
			<c:if test="${not empty newPrdList }">
			<section class="mainNewPdt">
				<h2 class="subTitle">${dpTitleList[8].cdNm}</h2>
				<div class="bgWrap">
					<div class="newPdtSlide">
						<div class="pdtListType3 contWrap">
							<div class="slide">
								<ul class="swiper-wrapper">
									<c:forEach items="${newPrdList}" var="prd" varStatus="s">
									<c:set var="discount" value="${uf:GetDiscount(prd.stdPrc, prd.salPrc, true) }"/>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtImg">
												<c:set var="imggubun" value="_${prd.lpGubun }_S_320" />
												<img src="${prdUrl}${uf:GetProductImgName(prd.prdSeq, prd.prdImg, imggubun) }" alt="${prd.prdNm}" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											</a>
											<span class="pdtUtil">
												<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="iconOpen" target="_blank">새 창</a>
												<c:choose>
													<c:when test="${empty userInfo}">
														<c:set var="jimUrl" value="$.jhead.fnChkLoginPagePopAlert();"/>
													</c:when>
													<c:otherwise>
														<c:set var="jimUrl" value="fncSaveJim('${prd.prdSeq }@', '${prd.prdSeq }@', '${prd.myshop_yn }', '${myShopRegFl}');"/>
													</c:otherwise>
												</c:choose>
												<c:set var="paramPrdSeq" value="${prd.prdSeq}"/>
												<c:set var="paramjjimYn" value="${prd.jjimYn}"/>
													<%
														// 2020.04.21 찜 상품 prd에서 꺼내서 쓰기위해 수정, 페이지 속도 높이기 위해 수정
														jjimYn = "N";
														if(cstmId != null && cstmId != ""){
															//param.put("prdSeq", String.valueOf(pageContext.getAttribute("paramPrdSeq")));
															jjimYn = String.valueOf(pageContext.getAttribute("paramjjimYn"));
														}
													%>
												<c:set var="jjimYn" value="<%=jjimYn%>" />
												<button type="button" class="iconZzim <c:if test="${jjimYn eq 'Y'}">on </c:if>" onclick="<c:out value="${jimUrl }"/>">찜</button>
												<c:if test="${prd.salFl ne '2' && prd.salFl ne '4' }">
												<button type="button" class="iconCart" onclick="javascript:openPreview('${prd.prdSeq }', 'POPCART');">장바구니</button>
												<button type="button" class="iconBuy" onclick="javascript:openPreview('${prd.prdSeq }', 'ORDER');">바로구매</button>
												</c:if>
											</span>

										</span>
										<a href="/kr/ko/ProductView.do?prdSeq=${prd.prdSeq }" class="pdtCont">
											<span class="name">${prd.prdNm}</span>
											<span class="price">
												<c:if test="${!empty prd.stdPrc && prd.salPrc < prd.stdPrc}">
													<del class="regular"><fmt:formatNumber value="${prd.stdPrc}" type="number" />원</del>
												</c:if>
												<span class="num"><fmt:formatNumber value="${prd.salPrc}" type="number" /></span>원
												<c:if test="${prd.salFl eq '2' }">
													<span class="soldOut">일시품절</span>
												</c:if>
											</span>
										</a>
									</li>
									</c:forEach>
								</ul>
							</div>
							<a href="/kr/ko/ShopNewPrdList.do" class="pdtMore">제품 더보기</a>
						</div>
						<div class="slideBtn">
							<button type="button" class="btnPrev">이전 슬라이드</button>
							<button type="button" class="btnNext">다음 슬라이드</button>
						</div>
					</div>
					<script>
						newPdtSlide();
					</script>
				</div>
			</section>
			</c:if>
			</c:if>
			<!-- //새로운 제품 -->

			<!-- 추천 라인 -->
			<c:if test="${dpTitleList[9].useFl eq 'Y'}">			
			<c:if test="${not empty rcmdLineInfo.rcmdLineList }">
				<c:set var="rcmdLineList" value="${rcmdLineInfo.rcmdLineList}" />
				<section class="mainRecomPdtLine">
					<h2 class="subTitle">${dpTitleList[9].cdNm}</h2>
					<div class="contWrap">
						<ul class="slideTab">
							<c:forEach items="${rcmdLineList }" var="rcmdVo" varStatus="tabIdx">
								<li class="active"><button type="button">${rcmdVo.title }</button></li>
							</c:forEach>
						</ul>
						<div class="slide">
							<ul class="swiper-wrapper">
								<c:forEach items="${rcmdLineList }" var="rcmdVo" varStatus="idx">
									<c:set var="pcImg" value="${mainBnrUrl}${rcmdVo.locCd}_${uf:GetProductImgName(rcmdVo.mainDpSeq, rcmdVo.pcImgNm, '_pc')}" />
									<li class="swiper-slide">
										<span class="box">
											<a href="javascript:void(0);">
												<img src="${pcImg}" alt="${rcmdVo.imgDesc}" onerror="this.src='/kr/ko/resources/error/img/640X640.jpg'">
											</a>
											<c:set var="rcmdPrdList" value="${rcmdLineInfo.rcmdPrdList[idx.index] }" />
											<c:forEach items="${rcmdPrdList }" var="prdVo" varStatus="idx">
												<a href="/kr/ko/ProductView.do?prdSeq=${prdVo.prdSeq }" style="background:${IEFlag eq 'Y' ? fn:substring(rcmdVo.bgColor, 0, 7) : rcmdVo.bgColor};">
													<span class="img">
														<c:set var="imggubun" value="_${prdVo.lpGubun }_S_320" />
														<img src="${prdUrl }${uf:GetProductImgName(prdVo.prdSeq, prdVo.prdImg, imggubun) }" alt="${prdVo.prdNm }" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													</span>
													<span class="txt">${prdVo.prdNm }</span>
												</a>
											</c:forEach>
										</span>
									</li>
								</c:forEach>
							</ul>
						</div>
					</div>
					<script>
						mainRecomPdtLine();
					</script>
				</section>
			</c:if>
			</c:if>
			<!-- //추천 라인 -->

			<!-- 하단 배너 -->
			<c:if test="${!empty bottomBnrList}">
				<div class="mainBannerSlide mainBanner2">
					<div class="slide">
						<ul class="swiper-wrapper">
							<c:forEach items="${bottomBnrList}" var="bottomBnr" varStatus="idx">
								<li class="swiper-slide">
									<c:if test="${!empty bottomBnr.pcLbBgImg}">
										<c:set var="bottomBgImg" value="url('${mainBnrUrl}${bottomBnr.locCd}_${uf:GetProductImgName(bottomBnr.mainDpSeq, bottomBnr.pcLbBgImg, '_pc_bg')}')" />
									</c:if>
									<a href="${bottomBnr.pcLbLink}" target="${bottomBnr.pcLbLinkTyp eq '1' ? '_blank' : '_self' }" style="background: ${IEFlag eq 'Y' ? fn:substring(bottomBnr.pcLbBgColor, 0, 7) : bottomBnr.pcLbBgColor} ${bottomBgImg} no-repeat 50% 50%;">
										<c:if test="${!empty bottomBnr.pcLbImgNm}">
											<span class="img">
												<img src="${mainBnrUrl}${bottomBnr.locCd}_${uf:GetProductImgName(bottomBnr.mainDpSeq, bottomBnr.pcLbImgNm, '_pc')}" alt="${bottomBnr.pcLbImgDesc}" onerror="this.src='/kr/ko/resources/error/img/270x202.png'">
											</span>
										</c:if>
										<c:if test="${ (bottomBnr.pcLbTitFlUse eq 'Y') || (bottomBnr.pcLbSubTitFlUse eq 'Y') }">
											<span class="txt">
												<c:if test="${bottomBnr.pcLbTitFlUse eq 'Y'}">
													<strong>${fn:replace(bottomBnr.pcLbTitle, newLineChar, '<br/>') }</strong>
												</c:if>
												<c:if test="${bottomBnr.pcLbSubTitFlUse eq 'Y'}">
													<span>${fn:replace(bottomBnr.pcLbSubTitle, newLineChar, '<br/>') }</span>
												</c:if>
											</span>
										</c:if>
									</a>
								</li>
							</c:forEach>
						</ul>
					</div>
					<div class="slidePage"></div>
					<script>
						bannerSlide('mainBanner2');
					</script>
				</div>
			</c:if>
			<!-- //하단 배너 -->

			<!-- 인스타그램 -->
			<c:if test="${dpTitleList[10].useFl eq 'Y'}">
			<section class="instaSction">
				<h2 class="subTitle">${dpTitleList[10].cdNm}</h2>
				<section>
					<a href="https://www.instagram.com/innisfree.instalog/" target="_blank"><h3 class="instaTit"><span>Innisfree.instalog</span></h3></a>
					<div class="rollingList1">
						<ul id="INSTALOG">
						</ul>
					</div>
				</section>
				<section>
					<a href="https://www.instagram.com/innisfreeofficial/" target="_blank"><h3 class="instaTit"><span>Innisfreeofficial</span></h3></a>
					<div class="rollingList2">
						<ul id="OFFICIAL">
						</ul>
					</div>
				</section>
			</section>
			<!-- //인스타그램 -->
			</c:if>

			<!-- 멤버십 혜택 안내 -->
			<section class="mainMemberShipInfo">
				<h2 class="subTitle">이니스프리 멤버십 혜택 안내</h2>
				<div class="contWrap">
					<p class="subTxt">이니스프리 멤버십 회원이 되시면 이니스프리에서 제공하는 다양한 혜택을 받으실 수 있습니다.</p>
					<ul class="list">
						<li>
							<span class="icon"><img src="/kr/ko/resources/web2/images/main/icon_mb1.png" alt="멤버십데이"></span>
							<strong class="tit">멤버십데이 혜택</strong>
							<span class="txt">최대 30% 할인</span>
						</li>
						<li>
							<span class="icon"><img src="/kr/ko/resources/web2/images/main/icon_mb2.png" alt="씨드"></span>
							<strong class="tit">씨드 혜택</strong>
							<span class="txt">씨드 적립 및 쿠폰 지급</span>
						</li>
						<li>
							<span class="icon"><img src="/kr/ko/resources/web2/images/main/icon_mb3.png" alt="뷰티포인트 적립"></span>
							<strong class="tit">뷰티포인트 적립</strong>
							<span class="txt">결제 금액의 1% 적립</span>
						</li>
						<li>
							<span class="icon"><img src="/kr/ko/resources/web2/images/main/icon_mb4.png" alt="생일 혜택"></span>
							<strong class="tit">생일 혜택</strong>
							<span class="txt">40% 할인 쿠폰 지급</span>
						</li>
						<li>
							<span class="icon"><img src="/kr/ko/resources/web2/images/main/icon_mb5.png" alt="프라임 바우처 발급"></span>
							<strong class="tit">프라임 바우처 발급</strong>
							<span class="txt">KIT 증정 및 쿠폰 지급</span>
						</li>
						<li>
							<span class="icon"><img src="/kr/ko/resources/web2/images/main/icon_mb6.png" alt="MY SHOP 혜택"></span>
							<strong class="tit">MY SHOP 혜택</strong>
							<span class="txt">제품 할인 및 쿠폰 지급</span>
						</li>
					</ul>
					<a href="/kr/ko/GreenteaClubMembership.do" class="pdtMore">혜택 더보기</a>
				</div>

			</section>
			<!-- //멤버십 혜택 안내 -->
		</div>

		<!-- 인스타그램 상세보기 레이어 -->
		<div class="layerPop" id="instaPop">
			<section class="layerWrap" style="width:480px;">
				<div class="layerContents instaLayer">
					<div class="img" id="instaDetailMedia">
						<img src="/kr/ko/resources/web2/images/main/@insta.png" alt="" style="width:416px;">
					</div>
					<div class="cont">
						<p class="id" id="instaDetailUser"></p>
						<div class="txt" id="instaDetailContext">
						</div>
					</div>
					<div class="btnWrap">
						<span><a id="instaDetailUrl" href="#" class="btnType3" target="_blank">더보기</a></span>
					</div>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</section>
		</div>

	    <!-- 리뷰 상세 팝업 -->
	    <div id="reviewView">
			<jsp:include page="/WEB-INF/jsp/web/community/productreview/productreview_view_renew.jsp" flush="true">
				<jsp:param value="prdView" name="page" />
			</jsp:include>
		</div>
		<!-- //리뷰 상세 팝업 -->

		<jsp:include page="${uf:getConst('INCLUDE_FOOTER') }"/>

		<!-- 간편 로그인 연동완료 판업  -->
		<div id="snsLoginCmp_mbrMerge" class="layerPop">
			<section class="layerWrap" style="width: 480px;">
				<h3 class="layerTitle">간편 로그인 연동 완료 알림</h3>
				<div class="layerContents">
					<div class="snsMemLinkCom">
						<p class="linkUser">
							<img src="/kr/ko/resources/web2/images/common/icon_rank_w.png" alt="">
							<strong class="name" id="span_cstmnm"></strong>
							<span class="txt" id="p_linkTime"></span>
						</p>
						<p class="linkInfo">
							<span id="snsTp_FB" style="display:none"><img src="/kr/ko/resources/web2/images/member/icon_sns_fb.png"    alt="페이스북"> 페이스북</span>
							<span id="snsTp_KA" style="display:none"><img src="/kr/ko/resources/web2/images/member/icon_sns_kakao.png" alt="카카오"> 카카오톡</span>
							<span id="snsTp_NA" style="display:none"><img src="/kr/ko/resources/web2/images/member/icon_sns_naver.png" alt="네이버"> 네이버</span>
							<span id="span_gradenm"></span>
							<span id="span_cstmid"></span>
						</p>
					</div>
					<ul class="bulListType">
						<li>앞으로는 SNS 계정으로 로그인시, 기존 이니스프리 ID로 로그인한 것과 동일하게 사이트를 이용하실 수 있습니다.</li>
						<li>기존 이니스프리 ID로 이용한 서비스 내역 조회가 가능하며, 그린데이 혜택, 쿠폰 혜택 등을 받으실 수 있습니다.</li>
						<li>제품 구매 시 적립되는 뷰티포인트는 아모레퍼시픽 뷰티포인트 통합회원에 가입하셔야 적립 및 사용이 가능합니다. 통합회원이 아니시라면 가입 후 더 많은 혜택을 받으실 수 있습니다.</li>
						<li>SNS 연결 정보는 마이페이지 > 내 정보 관리에서 확인 및 변경하실 수 있습니다.</li>
					</ul>
					<div class="btnWrap">
						<span><a href="/kr/ko/Mypage.do" class="btnType3l">통합회원여부 확인</button></a></span>
						<span><a href="${APJOINURL}" class="btnType6l">통합회원 가입</button></a></span>
					</div>

				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</section>
		</div>

		<div id="snsLoginCmp" class="layerPop">
			<section class="layerWrap" style="width: 480px;">
				<h3 class="layerTitle">간편 로그인 연동 완료 알림</h3>
				<div class="layerContents">
					<div class="snsMemLinkCom">
						<p class="linkUser">
							<img src="/kr/ko/resources/web2/images/common/icon_rank_w.png" alt="">
							<strong class="name" id="u_span_cstmnm"></strong>
							<span class="txt" id="u_p_linkTime"></span>
						</p>
						<p class="linkInfo">
							<span id="u_snsTp_FB" style="display:none"><img src="/kr/ko/resources/web2/images/member/icon_sns_fb.png"    alt="페이스북"> 페이스북</span>
							<span id="u_snsTp_KA" style="display:none"><img src="/kr/ko/resources/web2/images/member/icon_sns_kakao.png" alt="카카오"> 카카오톡</span>
							<span id="u_snsTp_NA" style="display:none"><img src="/kr/ko/resources/web2/images/member/icon_sns_naver.png" alt="네이버"> 네이버</span>
							<span id="u_span_gradenm"></span>
							<span id="u_span_cstmid"></span>
						</p>
					</div>
					<ul class="bulListType">
						<li>앞으로는 SNS 계정으로 로그인시, 기존 이니스프리 ID로 로그인한 것과 동일하게 사이트를 이용하실 수 있습니다.</li>
						<li>기존 이니스프리 ID로 이용한 서비스 내역 조회가 가능하며, 그린데이 혜택, 쿠폰 혜택 등을 받으실 수 있습니다.</li>
						<li>SNS 연결 정보는 마이페이지 > 내 정보 관리에서 확인 및 변경하실 수 있습니다.</li>
					</ul>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</section>
		</div>
		<!-- // 간편 로그인 연동완료 판업  -->

<script>
//TODO  페이지 로드시간
//var start = Date.now();
$(document).ready(function(){
	//console.log("Page load took " + (Date.now() - start) + "milliseconds");

	if("<%=snsConnectFlag %>" === "Y")		{		// sns-일반회원 연동후 main page로 이동한 경우 20170225
		var v_uCstmId = "<%=uCstmId%>";
		var v_cstmId = "<%=sCstmId%>";
		var v_gradeCd = "<%=gradeCd%>";
		var v_gradeCdNm = "<%=gradeCdNm%>";
		var v_cstmNm = "<%=sCstmNm%>";
		var v_snsType = "<%=snsType%>"

		v_gradeCdNm = decodeURI(v_gradeCdNm);
		v_cstmNm = decodeURI(v_cstmNm);

		if(v_uCstmId > 0)	{	// 통합회원
			//$("#u_grade_"+v_gradeCd).show();
			$("#u_span_cstmnm").text(v_cstmNm+"  고객님");
			$("#u_snsTp_"+v_snsType).show();
			$("#u_span_gradenm").text(v_gradeCdNm);
			$("#u_span_cstmid").text(v_cstmId);
			var d = new Date();
			$("#u_p_linkTime").html(  "<span class='date' >"+d.getFullYear() + "-" + (d.getMonth() + 1)+ "-"+  d.getDate() +  "</span> 로그인 정보 연동이 완료되었습니다.");

			layerOpen('snsLoginCmp');
		} else {               // 채널회원

			//$("#grade_"+v_gradeCd).show();
			$("#span_cstmnm").text(v_cstmNm+"  고객님");
			$("#snsTp_"+v_snsType).show();
			$("#span_gradenm").text(v_gradeCdNm);
			$("#span_cstmid").text(v_cstmId);
			var d = new Date();
			$("#p_linkTime").html(  "<span class='date' >"+d.getFullYear() + "-" + (d.getMonth() + 1)+ "-"+  d.getDate() +  "</span> 로그인 정보 연동이 완료되었습니다.");

			layerOpen('snsLoginCmp_mbrMerge');
		}
	}
});
</script>
	</div>
</body>
</html> 