<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="kr.innisfree.common.constants.SessionConstants"%>
<%@page import="kr.innisfree.customer.CustomerBean"%>
<%@page import="kr.innisfree.common.util.StringUtil"%>
<%@page import ="java.security.MessageDigest" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="uf" uri="/WEB-INF/tld/user-function.tld" %>
<%
//SNS Login 여부 체크
CustomerBean userInfo = (CustomerBean) session.getAttribute(SessionConstants.SESS_USER);
String isSnsLogin = "";
String userLogin = "";
if(userInfo == null){
	isSnsLogin = "N";
	userLogin = "N";
}else{
// 	isSnsLogin = StringUtil.toNotNull(userInfo.getIsSnsLogin()) ;
	isSnsLogin = userInfo.getIsSnsLogin();
	if(null == isSnsLogin || "" == isSnsLogin){
		isSnsLogin = "N";
	}else{
		isSnsLogin = "Y";
	}
	userLogin = userInfo.getCstmId();
	if(null == userLogin || "" == userLogin){
		userLogin = "N";
	}else{
		userLogin = "Y";
	}
}
%>
<c:set var="isSns" value="<%=isSnsLogin%>" />
<!-- 201905 크리테오 -->
<%
String criUserEmail="";
if(userInfo!=null && userInfo.getEmail() !=null && !userInfo.getEmail().equals("")){
	StringBuffer sbuf = new StringBuffer();


	MessageDigest mDigest = MessageDigest.getInstance("MD5");
	mDigest.update(userInfo.getEmail().getBytes());

	byte[] msgStr = mDigest.digest() ;

	for(int i=0; i < msgStr.length; i++){
	    String tmpEncTxt = Integer.toHexString((int)msgStr[i] & 0x00ff) ;
	    sbuf.append(tmpEncTxt) ;
	}

	criUserEmail=sbuf.toString();
}

%>
<script type="text/javascript">
$(document).ready(function(){
	$("#querytop").val("");
});
var criUserEmail="<%=criUserEmail%>";
</script>

<!-- 이니스프리 간편 로그인 / 회원가입 _ 비회원 -->
<div id="snsEasyLogin_nonMbr" class="layerPop">
	<section class="layerWrap" style="width:600px;">
		<h3 class="layerTitle">이니스프리 간편 로그인 / 회원가입</h3>
		<div class="layerContents">
			<div class="alertCont">
				<p class="txt2">SNS 계정을 이니스프리 쇼핑몰 회원 계정과 연동하시면, <br />더 많은 혜택을 받아보실 수 있습니다.<br/>· 그린데이 혜택, 각종 쿠폰 혜택, 이벤트 참여, 원클릭 결제 서비스 이용 등<br />· 단, 뷰티포인트 적립/사용은 통합 회원인 경우만 가능합니다.</p>
			</div>
			<div class="btnWrap">
				<span><a href="/kr/ko/Mypage.do?tp=sns_connect" class="btnType6">이니스프리 쇼핑몰 회원으로 연동하기</a></span></span>
			</div>
		</div>
		<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
	</section>
</div>
<!-- //이니스프리 간편 로그인 / 회원가입 _ 비회원 -->

<!--chatbot  -->
<spring:eval expression='@siteConfig["CHATBOT_URL"]' var="chatbot_url"  />
<%

Cookie[] cookies = request.getCookies() ;
String cid = "undefined";

String topId = "";
String floatId = "";

if(cookies != null){
    for(int i=0; i < cookies.length; i++){
        Cookie c = cookies[i] ;
        String cName = c.getName();
        
        if(cName.equals("_ga")){
        	String gaValue = c.getValue();
        	if(gaValue != null && gaValue != ""){
	        	String[] gaValueArr = c.getValue().split("\\.");
	        	cid = gaValueArr[2]+"."+gaValueArr[3];
        	}
        }
        else if (cName.contains("topPopupClose")) {
        	String topArr[] = cName.split("_");
        	topId = topArr[1];
        }
        else if (cName.contains("floatingPopupClose")) {
        	String floatArr[] = cName.split("_");
        	floatId = floatArr[1];
        }
        
    }
} 

%>
<script type="text/javascript">
function openChatBot(){
	$("#getChatBotUrl").attr("src", $("#getChatBotUrl").attr("setUrl"));
	$('.chatBotLayer').show();
}
</script>
<!--//chatbot  -->
	    <!-- 메인상단띠배너 -->
		<jsp:include page="/GnbGetBanner.do">
			<jsp:param value="BM02" name="locCd"/>
			<jsp:param value="<%=topId%>" name="hisSeq"/>
		</jsp:include>
		<!-- 메인상단띠배너 -->

		<!-- 20.05 추가 배너 -->
		<!-- 추가 배너:: 이미지형 -->
		<div class="docTopBanner docTopBannerTwo">
			<div class="col1" style="background: #297552;"><!-- 좌측 배너 컬러 -->
				<a href="#">
					<img src="/resources/web2/images/common/@top_banner_1.jpg" alt="">
				</a>
			</div>

			<div class="col2" style="background:#efefef;"><!-- 우측 배너 컬러 -->
				<a href="#">
					<img src="/resources/web2/images/common/@top_banner_2.jpg" alt="">
				</a>
				<button type="button" class="btnClose" onclick="docTopBannerClose();">배너 닫기</button>
			</div>
		</div>
		<!-- 추가 배너:: 텍스트형 -->
		<div class="docTopBanner docTopBannerTwo docTopText">
			<div class="col1" style="background: #297552;"><!-- 좌측 배너 컬러 -->
				<a href="#">
					<!-- 대각선 라인 좌측 배너 background 컬러와 동일하게 맟춰주세요. -->
					<span class="txt_background" style="border-top-color:#297552;"></span>
					<span class="txt" style="color:#fff;">4월 멤버십 데이 UP TO 50%</span>
				</a>
			</div>

			<div class="col2" style="background:#efefef;"><!-- 우측 배너 컬러 -->
				<a href="#">
					<span class="txt" style="color:#f66b85;">트루케어 선크림 체험분 증정! </span>
				</a>
				<button type="button" class="btnClose" onclick="docTopBannerClose();">배너 닫기</button>
			</div>
		</div>
		<!-- //20.05 추가 배너 -->

		<header id="header">
			<div class="headerWrap">
				<div class="headerBox">
					<h1 class="logo">
						<a href="/kr/ko/Main.do" onclick="makeScriptGA_Event('PC_HEADER', 'LOGO', 'INNISFREE','Y');">
							<img src="${_head_cdn_root }/resources/web2/images/common/logo_basic.png" alt="innisfree">
						</a>
					</h1>
					<div class="utilArea">
						<span class="btn">
							<button type="button" class="btnSearch" onmouseenter="headerUtillLayer('.layerSearch');"><span>검색</span></button>
							<button type="button" class="btnMypage" onmouseenter="headerUtillLayer('.layerMember');"><span>마이페이지</span></button>
							<button type="button" class="btnCart" onmouseenter="adobeActionTrack('o','INNIWEB^GNB^장바구니'); makeScriptGA_Event('PC_HEADER', 'UTILITY', '장바구니'); openCart('cartLayerArea', ''); "><span>장바구니</span><em id="cartCntTxt"></em></button>
						</span>

						<!-- 검색 레이어 -->
						<div class="layerHeader layerSearch">
							<fieldset class="keywordInput">
								<legend>검색어 입력</legend>
								<form name="topSearchFrm" id="topSearchFrm" action="/kr/ko/Search.do" method="get" >
									<input type="hidden" name="schText" id="schText" value="" />
									<input type="text" class="inputTxt" id="querytop" name="query" value="" onkeydown="if (event.keyCode == 13 && !$('#querytop').val()) {_head_top_search();return false;}; searchKeydown();" />
<!-- 									<input type="text" class="inputTxt" id="querytop" name="query" onkeydown="searchKeydown();" /> -->

									<input type="hidden" id="querytopseq" name="querytopseq" value="" />
									<input type="hidden" id="searchPath" name="searchPath" value="W" />

									<!-- 이니스프리 고도화 2017/10/30 -->
									<input type="hidden" id="hashStatus2" name="hashStatus2"/>
									<!-- 이니스프리 고도화 2017/10/30 -->
									<input type="hidden" id="searchType" name="searchType"/>
									<button type="button" class="btnSearch" onclick="_head_top_search(); adobeActionTrack('o','INNIWEB^GNB^검색');"><span class="hide">검색</span></button>
									<!--검색창 검색어 롤링 텍스트 -->
									<div class="keywordRolling">
										<ul>
										</ul>
									</div>
								</form>
							</fieldset>

							<div class="recomWrap" id="hashTag">
								<ul class="list">
									<li>해시태그</li>
								</ul>
							</div>
							<div class="resultWrap" id="ark" style="display: none;">

							</div>

						</div>
						<!-- //검색 레이어 -->
						
						<!-- 마이페이지 레이어 -->
						<div class="layerHeader layerMember">
							<!-- 로그인전 -->												
							<c:if test="${empty userInfo.cstmId }">
								<p class="loginBefore">
								<span><a href="javascript:void(0);" onclick="adobeActionTrack('o','INNIWEB^GNB^로그인'); $.jhead.fnChkLoginPage();   makeScriptGA_Event('PC_HEADER', 'UTILITY', '로그인','Y');">로그인</a></span>
								<span><a href="javascript:void(0);" onclick="$.jhead.fnMemberJoinPage();">회원가입</a></span>
								</p>
							</c:if>
							<!-- 로그인후 -->
							<c:if test="${not empty userInfo.cstmId }">
								<p class="loginAfter">
									<c:if test="${isSns ne 'Y' }">
										<c:choose>
											<c:when test="${userInfo.gradeCd eq 'CA03' }">
												<img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/grade_w.png" alt="w">
											</c:when>
											<c:when test="${userInfo.gradeCd eq 'CA02' }">
												<img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/grade_g.png" alt="g">
											</c:when>
											<c:when test="${userInfo.gradeCd eq 'CA04' }">
												<img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/grade_p.png" alt="p">
											</c:when>
										</c:choose>
									</c:if>
									<c:if test="${isSns eq 'Y' }">
										<c:choose>
											<c:when test="${userInfo.snstypecd eq 'FB' }">
												<img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/sns_f.png" alt="페이스북">
											</c:when>
											<c:when test="${userInfo.snstypecd eq 'KA' }">
												<img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/sns_k.png" alt="카카오톡">
											</c:when>
											<c:when test="${userInfo.snstypecd eq 'NA' }">
												<img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/sns_n.png" alt="네이버">
											</c:when>
										</c:choose>
									</c:if>
									<b>${userInfo.cstmNm }님</b>
									<a href="javascript:void(0);" onclick="if(confirm('로그아웃 하시겠습니까?')){location.href='/kr/ko/LoginOut.do';}">로그아웃</a>
								</p>
							</c:if>
							<!-- sns연동 -->

							<c:if test="${not empty userInfo.cstmId && isSns eq 'Y' }">
								<div class="snsLink">
									<p class="txt">이니스프리 쇼핑몰 회원으로 연동하시면, 다양한 포인트 적립 및 조회, 쿠폰 혜택 이벤트 참여 등 다양한 고객 서비스를 이용하실 수 있습니다.</p>
									<button type="button" class="btnType3m" onclick="layerOpen('snsEasyLogin_nonMbr')">이니스프리 쇼핑몰 회원 연동</button>
								</div>
							</c:if>
							<!-- sns연동회원이 아닌경우 -->
							<c:if test="${uf:getConst('CUSTOMER_LEVEL_SNS') ne userInfo.gradeCd }">
								<ul class="linkList">
									<!--TODO PC버전 마이페이지가 없어서 주문배송조회로 이동 MypageAction 리턴 주소값을 바꿈 2019.09 -->
									<!-- <li><a href="/kr/ko/Mypage.do" onclick="adobeActionTrack('o','INNIWEB^GNB^마이페이지');  makeScriptGA_Event('PC_HEADER', 'UTILITY', '마이 페이지','Y');">마이페이지</a></li> -->
									<li><a href="/kr/ko/MypageOnlineOrderList.do?reqOrdStatType=000" onclick="loginChkFn();adobeActionTrack('o','INNIWEB^GNB^마이페이지');  makeScriptGA_Event('PC_HEADER', 'UTILITY', '마이 페이지','Y');">마이페이지</a></li>
									<li><a href="/kr/ko/MypageOnlineOrderList.do?reqOrdStatType=000" onclick="loginChkFn();adobeActionTrack('o','INNIWEB^GNB^주문배송조회');  makeScriptGA_Event('PC_HEADER', 'UTILITY', '주문배송조회','Y');">주문배송조회</a></li>
	<!-- 								<li><a href="/kr/ko/MypageOnlineOrderList.do?reqOrdStatType=000" >주문배송조회</a></li> -->
<!-- 									<li><a href="/kr/ko/ProductReviewList.do?myReview=Y">나의 리뷰</a></li> -->
									<li><a href="/kr/ko/ProdReviewerMyProfile.do" onclick="loginChkFn();">나의 리뷰</a></li>
									<li><a href="/kr/ko/MemberEdit.do" onclick="loginChkFn();">회원정보 수정</a></li>
								</ul>
								<ul class="linkList">
									<li><a href="/kr/ko/MypageCouponList.do?useFl=N" onclick="loginChkFn();">쿠폰</a></li>
									<li><a href="/kr/ko/MypageBeautyPoint.do" onclick="loginChkFn();">뷰티포인트</a></li>
	<!-- 								<li><a href="/kr/ko/MypageMaCoupon.do">씨드/씨드 쿠폰</a></li> -->
									<li><a href="/kr/ko/MypageSeedPoint.do" onclick="loginChkFn();">씨드/씨드 쿠폰</a></li>
									<li><a href="/kr/ko/SeedLoungePSPPage.do">씨드 스토어</a></li>
								</ul>
								<ul class="linkList">
									<li><a href="/kr/ko/GreenteaClubMembership.do" onclick="adobeActionTrack('o','INNIWEB^GNB^멤버쉽');   makeScriptGA_Event('PC_HEADER', 'UTILITY', '멤버십','Y');" >멤버십</a></li>
									<li><a href="/kr/ko/CustMainPage.do" onclick="adobeActionTrack('o','INNIWEB^GNB^고객센터');   makeScriptGA_Event('PC_HEADER', 'UTILITY', '고객센터','Y');">고객센터</a></li>
								</ul>
							</c:if>
							<!-- sns 로그인 -->
							<c:if test="${not empty userInfo.cstmId && uf:getConst('CUSTOMER_LEVEL_SNS') eq userInfo.gradeCd}">
								<ul class="linkList">
									<li><a href="/kr/ko/MypageOnlineOrderList.do?reqOrdStatType=000" onclick="loginChkFn();adobeActionTrack('o','INNIWEB^GNB^마이페이지');  makeScriptGA_Event('PC_HEADER', 'UTILITY', '마이 페이지','Y');">마이페이지</a></li>
									<li><a href="/kr/ko/MypageOnlineOrderList.do?reqOrdStatType=000" onclick="loginChkFn();adobeActionTrack('o','INNIWEB^GNB^주문배송조회');  makeScriptGA_Event('PC_HEADER', 'UTILITY', '주문배송조회','Y');">주문배송조회</a></li>
<!-- 									<li><a href="/kr/ko/ProductReviewList.do?myReview=Y">나의 리뷰</a></li> -->
									<li><a href="/kr/ko/ProdReviewerMyProfile.do" onclick="loginChkFn();">나의 리뷰</a></li>
									<li><a href="/kr/ko/SnsMemberEdit.do" onclick="loginChkFn();">회원정보 수정</a></li>
								</ul>
								<ul class="linkList">
									<li><a href="/kr/ko/SnsMemberBlockPage.do?tp=01" onclick="loginChkFn();">쿠폰</a></li>
									<li><a href="/kr/ko/SnsMemberBlockPage.do?tp=02" onclick="loginChkFn();">뷰티포인트</a></li>
	<!-- 								<li><a href="/kr/ko/MypageMaCoupon.do">씨드/씨드 쿠폰</a></li> -->
<!-- 									<li><a href="/kr/ko/MypageSeedPoint.do">씨드/씨드 쿠폰</a></li> -->
									<li><a href="/kr/ko/SnsMemberBlockPage.do?tp=05" onclick="loginChkFn();">씨드/씨드 쿠폰</a></li>
									<li><a href="/kr/ko/SeedLoungePSPPage.do">씨드 스토어</a></li>
								</ul>
								<ul class="linkList">
									<li><a href="/kr/ko/GreenteaClubMembership.do" onclick="adobeActionTrack('o','INNIWEB^GNB^멤버쉽');   makeScriptGA_Event('PC_HEADER', 'UTILITY', '멤버십','Y');" >멤버십</a></li>
									<li><a href="/kr/ko/CustMainPage.do" onclick="adobeActionTrack('o','INNIWEB^GNB^고객센터');   makeScriptGA_Event('PC_HEADER', 'UTILITY', '고객센터','Y');">고객센터</a></li>
								</ul>
							</c:if>
						</div>
						<!-- //마이페이지 레이어 -->

						<!-- 장바구니 레이어 -->
						<div class="layerHeader layerCart" id="cartLayerArea"></div>

					</div>
					<!-- 장바구니 레이어 -->

					<!-- gnb -->
						<jsp:include page="/GnbList.do"/>
					<!-- //gnb -->
				</div>

				<!-- 플로팅메뉴 -->
				<aside class="floatingMenu">
					<div class="innerWrap">
						<!-- 최근 본 제품  -->
						<jsp:include page="/GnbPdtHistoryTitList.do"/>
						<!-- //최근 본 제품 -->
						<button type="button" class="btnChatbot" onclick="openChatBot();"><img src="${_head_cdn_root }/kr/ko/resources/web2/images/common/btn_chatbot.png" alt="챗봇"></button>
						<!-- 챗봇-->
						<c:set var="chatBotCid" value="<%=cid %>"/>
						<div class="chatBot">
							<!-- <div class="chatBotBtn">
								<p>궁금한 건 제게 물어보세요!</p>
								<a href="javascript:openChatBot();">
									<span class="hide">챗봇 열기</span>
								</a>
							</div> -->
							<div class="chatBotLayer">
								<div class="layerHeader">
									<a href="javascript:void(0);" onclick="$('.chatBotLayer').hide();">닫기</a>
								</div>
 								<c:set var="context" value="${param.context}" scope="request" />
								<%-- <% String context = java.net.URLEncoder.encode((String)request.getAttribute("context"));%>
								<c:set var="context" value="<%=context%>" /> --%>

								<c:if test="${!empty userInfo.cstmId}">
									<c:set var="aesCstmId" value="${userInfo.aesCstmId}" scope="request" />
									<c:set var="ucstm" value="${userInfo.ucstmId > 0 ? 'Y' : 'N'}" scope="request" />
									<%
									  String aesCstmId = java.net.URLEncoder.encode((String)request.getAttribute("aesCstmId"));
									  String ucstm = java.net.URLEncoder.encode((String)request.getAttribute("ucstm"));
									%>
									<c:set var="aesCstmId" value="<%=aesCstmId%>" />
									<c:set var="ucstm" value="<%=ucstm%>" />
									<c:set var="chatBotUrl" value="${chatbot_url}/service/#/innisfree?key=${aesCstmId }&ucstm=${ucstm }&context=${context }&cid=${chatBotCid}" />
								</c:if>
								<c:if test="${empty userInfo.cstmId}">
									<c:set var="chatBotUrl" value="${chatbot_url}/service/#/innisfree?context=${context }&cid=${chatBotCid}"/>
								</c:if>
								<iframe src="" setUrl="${chatBotUrl}" id="getChatBotUrl"></iframe>
							</div>
						</div>
						<!-- //챗봇 -->

						<!-- 퀵메뉴배너 -->
						<jsp:include page="/GnbGetBanner.do">
							<jsp:param value="R07" name="locCd"/>
						</jsp:include>
						<!-- 퀵메뉴배너 -->

						<button type="button" class="btnDocTop" onclick="docTop();">페이지 상단으로 이동</button>
					</div>
				</aside>
				<!-- //플로팅메뉴 -->
								
				<!-- 플로팅배너 -->
				<jsp:include page="/GnbGetBanner.do">
					<jsp:param value="R06" name="locCd"/>
					<jsp:param value="<%=floatId%>" name="hisSeq"/>
				</jsp:include>			
				<!-- //플로팅배너 -->
				
				<div class="layerPop" id="abcCampaignPrdList">
					<section class="layerWrap" style="width:960px;">
						<h3 class="layerTitle">연계구매 프로모션 제품 리스트</h3>
						<div class="layerContents layerConnetPdt" id="abcCampaignPrdContent" style="min-height:690px;"></div>
						<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
					</section>
				</div>
			</div>
		</header>
		
		<!-- 페이지 로딩 -->
		<div class="loadingArea" style="display:none;">
			<div class="loadingIcon"><img src="${_head_cdn_root }/resources/web/images/common/loadingAreaIcon.gif" alt="로딩중" /></div>
		</div> 

		<!-- 공통팝업 -->
		<div id="commonPopup" class="layerPop">
			<section class="layerWrap" style="width:480px;">
				<h3 class="layerTitle">알려 드립니다.(공통 문구 지정 필요...)</h3>
				<div class="layerContents">

					<div class="alertCont">
						<p class="txt4"></p>
					</div>

					<div class="btnWrap">
						<span>
							<button type="button" class="btnType3l" onclick="layerClose();return false;" id="commonPopupBtn" >확인</button>
						</span>
					</div>

				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();return false;">레이어 팝업 닫기</button>
			</section>
		</div>

		<div id="commonConfirmPopup" class="layerPop">
			<section class="layerWrap" style="width:480px;">
				<h3 class="layerTitle">알려 드립니다.(공통 문구 지정 필요...)</h3>
				<div class="layerContents">
					<div class="alertCont">
						<p class="txt4"></p>
					</div>
					<div class="btnWrap">
						<span><button type="button" class="btnType3l" onclick="confirmCancel();layerClose('commonConfirmPopup');return false;">취소</button></span>
						<span><button type="button" class="btnType3l" onclick="confirmOK();return false;">확인</button></span>
					</div>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose('commonConfirmPopup');return false;">레이어 팝업 닫기</button>
			</section>
		</div>
		<!-- //공통팝업-->
<!--검색창 관련  -->
<script type="text/javascript">

$(document).ready(function(){
	// GNB검색창 기본검색어
	searchRolling();

	// 인기해시태그
	getPopkeywordHash2();
});

function loginChkFn(){	
	var loginYn = '<%=userLogin%>';	
	if( loginYn == 'N' || loginYn == ''){
		alert("로그인 후 이용 가능한 서비스입니다. \n로그인 후 이용해 주세요.");
	}
}

function searchRolling(){
	// GNB검색창 기본검색어
	$.ajax({
		type:'post',
		url:'/kr/ko/MainGetSchText.do',
		success:function(data){
			if( data != "" ) {
				var mainTmp = data.split("#");
				var html = "";
				for( var i = 0; i < mainTmp.length; i++ ) {
					var tmp = mainTmp[i].split("@");
					if( tmp[0] != "" ) {
						html += "<li><span class=\"txt\">"+tmp[0]+"</span><a href=\""+$.trim(tmp[1])+"\">바로가기</a></li>\n";
					}
				}
				$(".keywordRolling ul").html(html);
				keywordRolling();

			}
		}
	});
}

//인기해쉬태그
function getPopkeywordHash2() {
	var target = "popword";
	var range = "W";	//D:일, W:주, M:월
//		var collection = "_ALL_";
	var collection = "innisfree_hash"; 	//이니스프리 개발 /운영 같음
	var datatype = "text";
	$.ajax({
		type : "POST",
		url : "/kr/ko/SearchPopKeyword.do",
		dataType : "text",
		data : {
			"target" : target,
			"range" : range,
			"collection" : collection,
			"datatype" : datatype
		},
		timeOut : 2000,
		beforeSend : false,
		success : function(text) {

			var xml = $.parseXML(text);
			var str = "";
			// 최대 7개 여부
			var hashCount = 0;

			$(xml).find("Query").each(function(idx, value) {

				// 해쉬로그일 경우 카운트 +1
				if ($(this).text().indexOf("#") >= 0) {
					hashCount += 1;
				}
				// #이 포함된 인기해시태그만 뿌려준다.
				if ($(this).text().indexOf("#") >= 0 && hashCount < 8) {
					if (idx == 0) {
						str += "<li><a href=\"javascript:void(0);\" onclick=\"_head_top_search_hash('" + $(this).text() + "', 'Y');\">" + $(this).text() + "</a></li>";
					} else {
						str += "<li><a href=\"javascript:void(0);\" onclick=\"_head_top_search_hash('" + $(this).text() + "', 'Y');\">" + $(this).text() + "</a></li>";
					}
				}
			});

			$("#hashTag ul").html(str);
			getBrdHashTag();
		}
	});
}

function getBrdHashTag() {
	// GNB검색창 브랜드 노출 해시태그
	$.ajax({
		type:'post',
		url:'/kr/ko/MainGetHashTag.do',
		success:function(data){
			if( data != "" ) {
				var mainTmp = data.split("@");
				var html = "";
				for( var i = 0; i < mainTmp.length; i++ ) {
					if( mainTmp[i] != "" ) {
						html += "<li><a href=\"javascript:void(0);\" onclick=\"_head_top_search_hash('"+ $.trim(mainTmp[i]) +"', 'Y');\">"+ $.trim(mainTmp[i]) +"</a></li>\n";
					}
				}
				html += "<li class=\"clrHash\"><a href=\"/kr/ko/FlagshipMyRecipeBar.do\" onclick=\"_head_top_search_hash('#마이레시피바', 'Y');\">#마이레시피바</a></li>\n";
				$("#hashTag ul").append(html);
			}
		}
	});
}

//검색
function _head_top_search() {

	if (!$('#querytop').val()) {
		alert("검색어를 입력해주세요.");
// 		$.jcom.showCommonLayer("검색어를 입력해주세요.");
		return;
	}

	var frm = document.topSearchFrm;
	var prdseq = frm.querytopseq.value;
	var hashStatus2 = "";
	if (frm.querytop.value.indexOf("#") >= 0) {
		hashStatus2 = "Y";
	}

	$("#schText").val($(".keywordRolling ul").find('li').find('span').text());
	if( $('#querytop').val() != $("#schText").val() ) {
		if (prdseq) {	//자동완성에서 선택 제품이 있으면 해당 제품 검색 수 업데이트
			$.ajax({
				url : "/kr/ko/ProductSearchCntUpdate.do",
				data : { prdSeq : prdseq },
				type : "post",
				beforeSend : false,	//로딩바 호출 안되게
				success : function(data) {}
			});
		}
	} else {
		frm.method = "post";
		frm.action = schUrl;
		frm.schText.value = "";
		frm.query.value = "";
	}
	//frm.searchType.value = "추천검색어";
	frm.hashStatus2.value = hashStatus2;
	frm.submit();
}

//해시태그 검색
function _head_top_search_hash(query, hashstatus) {
	$(".keywordRolling").hide();
	var frm = document.topSearchFrm;
	var prdseq = frm.querytopseq.value;

	frm.query.value = query;
	frm.hashStatus2.value = hashstatus;
	frm.searchType.value = "해시태그";

	frm.submit();
}

function searchKeydown(){
	$(".resultWrap").attr('style','display:block;');
	$(".recomWrap").attr('style','display:none;');
	$(".keywordRolling").hide();
};




</script>
<!--
<script type="text/javascript">

var schT = "";
var schUrl = "";
/* 2017.10.31 검색 고도화 */
var bannerAuto;
var $searchInput = $("#queryTop");
$(document).ready(function(){

	// floatingMenu 미노출 페이지 : 마이페이지, 제품 상세, 장바구니, 주문서 작성
	console.log("===================================");
// 	console.log(document.getElementsByTagName('html')[0]);
// 	$('#wrap').addClass('nonFloating');

	console.log("===================================");


	// GNB검색창 기본검색어
	$.ajax({
		type:'post',
		url:'/kr/ko/MainGetSchText.do',
		success:function(data){
			if( data != "" ) {
				var mainTmp = data.split("#");
				var html = "";
				for( var i = 0; i < mainTmp.length; i++ ) {
					var tmp = mainTmp[i].split("@");
					if( tmp[0] != "" ) {
						html += "<div class=\"slideTxt\" schUrl=\""+ $.trim(tmp[1]) +"\"><span>"+ tmp[0] +"</span></div>\n";
					}
				}
				console.log(html);
				$("#topSearchArea").html(html);

				if ($("#topSearchArea .slideTxt").length < 1) {
					$(".srchSlideWrap").hide()
				}else{
					srchLolling();
				}
				/* var tmp = data.split("@");
				schT = tmp[0];
				schUrl = $.trim(tmp[1]);

				if(schT != null && schT != "null") {
					$("#querytop").val(schT);
					$("#schText").val(schT);
				} */
			}
		}
	});

	//검색창 영역 롤링 실행
	//srchLolling()

	//검색창 밑 해시태그 스크롤
	//niceHashTag()

	// GNB상단 배너 가져오기
// 	if (!$.jutil.getCookie("gnbUpperBanner")) {
// 		$.ajax({
// 			url:'/kr/ko/BannerList.do',
// 			type:'POST',
// 			data:{locCd:'BC01'},
// 			success:function(data) {
// 				$('#banner_BC01').html(data);
// 			}
// 		});
// 	}

	// GNB레이어 배너 가져오기
	//2016.08.08 페이지 로딩 되면서 순차적으로 처리 될 수 있도록 배너영역에서 직접 호출
// 	$.ajax({
// 		url:'/kr/ko/BannerList.do',
// 		type:'POST',
// 		data:{locCd:'BC02'},
// 		success:function(data) {
// 			$('#banner_BC02').html(data);
// 		}
// 	});

	$("input[name=query]").click(function() {
		$(this).val('');
	});


	//검색창을 클릭했을 때 검색input노출
	$(".inputTxt").click(restoreSearchBox);

// 	$('#querytop').click(function(){
// 		if ($("#topSearchArea .slideTxt").length < 1) {
// 			$('#header .layerSearch').css("z-index", "1");
// 		}
// 	})
	//검색창 영역을 빠져 나갔을 때 롤링재실행
	//$("#querytop").blur(hideSearchBox);
	/* 2017.10.31 검색 고도화 */
	$(".utilSech input[name=query]").val($(".srchSlide .slideTxt").eq(0).find("span").text());

	getPopkeywordHash2();

// 	$(window).resize(function(){
// 		hashtagSize();
// 	})

});

//검색창롤링을 클릭했을 때 검색input노출
function restoreSearchBox() {
    $('.srchSlideWrap .srchSlide').slick('unslick');
    $('.srchSlideWrap').css('display','none');
    $('#header .layerSearch').css("z-index", "1");
    setTimeout(function() {
    	$("#querytop").val('').focus();
    }, 0);
}

//검색창 영역을 빠져 나갔을 때 롤링재실행
function hideSearchBox() {
	if ($(".layerSearch input[name=query]").val().length == 0) {
		if ($("#topSearchArea .slideTxt").length > 0) {
			srchLolling();
		}
    }
}

/* 2017.10.31 검색 고도화 */
//검색창 밑 해시태그 스크롤
// function hashtagRoll(){
// 	var hashWidth = 1;
// 	$("#hashTag ul>li").each(function(){
// 		hashWidth += $(this).innerWidth()
// 	});
// 	$("#hashTag ul").css( "width", hashWidth + 1);

// 	hashtagSize()

// 	$(".hashTagWrap").mouseenter(function(){
// 		clearInterval(bannerAuto);
// 	})
// 	$(".hashTagWrap").mouseleave(function(){
// 		hashtagSize()
// 	})
// 	if ($(".utilMenu li").eq(1).text() === "로그인") {
// 		$("#header.srchRenewal .hashTagWrap").removeClass("logOut");
// 	}else{
// 		$("#header.srchRenewal .hashTagWrap").addClass("logOut");
// 	}
// }

// function hashtagSize(){
// 	if ($("#hashTag ul").width() > $("#header .hashTagWrap").width()) {
// 		clearInterval(bannerAuto);
// 		hashtagAuto()
// 	}else{
// 		clearInterval(bannerAuto);
// 	}
// }
/* 2017.10.31 검색 고도화 */
function hashtagAuto(){
	bannerAuto = setInterval(function(){
		var hashWidth = $("#hashTag li:first").width();
		$("#hashTag ul").animate({left:hashWidth*-1},400,"swing",function(){
            $(this).children("li:first").insertAfter($(this).children("li:last"));
            $(this).css({left:0});
        });
	},2500);
}

/* 2017.10.31 검색 고도화 */
//검색창 롤링
function srchLolling(){
	//검색창 value 값 체크 후 실행한다
	if ($(".layerSearch input[name=query]").val().length == 0) {
		setTimeout(function() {

			$("#querytop").attr('placeholder',$(".srchSlide .slideTxt").eq(0).find("span").text());
			$("#schText").attr('placeholder',$(".srchSlide .slideTxt").eq(0).find("span").text());
			schUrl = $(".srchSlide .slideTxt").attr("schUrl");

			$('.srchSlideWrap .srchSlide').slick({
			    infinite: true,
			    speed: 400,
			    slidesToShow: 1,
			    autoplay: true,
			    autoplaySpeed: 2200,
			    dots: false,
			    vertical:true,
			    arrows:false
			});

			$('.srchSlideWrap .srchSlide').on('afterChange', function(){
				$("#querytop").attr('placeholder',$(".slick-current").find("span").text());
				$("#schText").attr('placeholder',$(".slick-current").find("span").text());
				schUrl = $(".slick-current").attr("schUrl");
			  	//$(".utilSech input[name=query]").val($(".slick-current").find("span").text());
			});
		}, 150);
	}else{
		$('.srchSlideWrap .srchSlide').slick('unslick');
		$('.srchSlideWrap').css('display','none');
		$('#header .utilSech').css("z-index", "1");
	}

}

/* 이니스프리 고도화 2017/10/30 */


// 검색
function _head_top_search() {

// 	if (!$('#querytop').val()) {
// 		$.jcom.showCommonLayer("검색어를 입력해주세요.");
// 		return;
// 	}

	var frm = document.topSearchFrm;
	var prdseq = frm.querytopseq.value;
	var hashStatus2 = "";

	if (frm.querytop.value.indexOf("#") >= 0) {
		hashStatus2 = "Y";
	}

	if( $('#querytop').val() != $("#schText").val() ) {
		if (prdseq) {	//자동완성에서 선택 제품이 있으면 해당 제품 검색 수 업데이트
			$.ajax({
				url : "/kr/ko/ProductSearchCntUpdate.do",
				data : { prdSeq : prdseq },
				type : "post",
				beforeSend : false,	//로딩바 호출 안되게
				success : function(data) {}
			});
		}
	} else {
		frm.method = "post";
		frm.action = schUrl;
		frm.schText.value = "";
		frm.query.value = "";
	}
	//frm.searchType.value = "추천검색어";
	frm.hashStatus2.value = hashStatus2;
	frm.submit();
}
/* 이니스프리 고도화 2017/10/30 */

/* 이니스프리 고도화 2017/10/30 */
//해시태그 검색
function _head_top_search_hash(query, hashstatus) {

	var frm = document.topSearchFrm;
	var prdseq = frm.querytopseq.value;

	frm.query.value = query;
	frm.hashStatus2.value = hashstatus;
	frm.searchType.value = "해시태그";

	frm.submit();
}

function resetValue(obj) {
	obj.value = "";
}
/* 이니스프리 고도화 2017/10/30 */

/* 이니스프리 고도화 2017/10/30 */
// 인기해쉬태그
function getPopkeywordHash2() {
	var target = "popword";
	var range = "W";	//D:일, W:주, M:월
//		var collection = "_ALL_";
	var collection = "innisfree_hash"; 	//이니스프리 개발 /운영 같음
	var datatype = "text";
	$.ajax({
		type : "POST",
		url : "/kr/ko/SearchPopKeyword.do",
		dataType : "text",
		data : {
			"target" : target,
			"range" : range,
			"collection" : collection,
			"datatype" : datatype
		},
		timeOut : 2000,
		beforeSend : false,
		success : function(text) {

			var xml = $.parseXML(text);
			var str = "";
			// 최대 7개 여부
			var hashCount = 0;

			$(xml).find("Query").each(function(idx, value) {

				// 해쉬로그일 경우 카운트 +1
				if ($(this).text().indexOf("#") >= 0) {
					hashCount += 1;
				}
				// #이 포함된 인기해시태그만 뿌려준다.
				if ($(this).text().indexOf("#") >= 0 && hashCount < 8) {
					if (idx == 0) {
						str += "<li><a href=\"javascript:void(0);\" onclick=\"_head_top_search_hash('" + $(this).text() + "', 'Y');\">" + $(this).text() + "</a></li>";
					} else {
						str += "<li><a href=\"javascript:void(0);\" onclick=\"_head_top_search_hash('" + $(this).text() + "', 'Y');\">" + $(this).text() + "</a></li>";
					}
				}
			});

			$("#hashTag ul").html(str);
// 			getBrdHashTag();
		}
	});
}

function getBrdHashTag() {
	// GNB검색창 브랜드 노출 해시태그
	$.ajax({
		type:'post',
		url:'/kr/ko/MainGetHashTag.do',
		success:function(data){
			if( data != "" ) {
				var mainTmp = data.split("@");
				var html = "";
				for( var i = 0; i < mainTmp.length; i++ ) {
					if( mainTmp[i] != "" ) {
						html += "<li><a href=\"javascript:void(0);\" onclick=\"_head_top_search_hash('"+ $.trim(mainTmp[i]) +"', 'Y');\">"+ $.trim(mainTmp[i]) +"</a></li>\n";
					}
				}
				$("#hashTag ul").append(html);
// 				hashtagRoll();
			}
		}
	});
}


</script>
-->