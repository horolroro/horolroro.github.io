<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "고객센터";
	String description = "이니스프리 제품에 대한 문의 및 공지사항, 매장정보를 확인하실 수 있습니다.";
	String keyword = "이니스프리 고객센터, 자주하는 질문, FAQ, 1:1 고객상담, 고객문의, 공지사항, 매장찾기, 매장안내, 이니스프리 제품 문의";
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<jsp:include page="/html_pc/include/head.jsp">
	<jsp:param value="<%=title%>" name="title"/>
	<jsp:param value="<%=description %>" name="description"/>
	<jsp:param value="<%=keyword %>" name="keywords"/>
</jsp:include>
</head>
<body>


	<div id="wrap">
		
		<jsp:include page="/html_pc/include/header.jsp" />
		<div id="container">
			<jsp:include page="/html_pc/include/location.jsp" />
			<section id="contents">
				<h2 class="pageTitle">고객센터</h2>
				<div class="contWrap">
					<jsp:include page="/html_pc/customercenter/tab.jsp" />
					
					<fieldset class="cusSearch">
						<legend>검색 입력</legend>
						<div class="inputText">
							<input type="text" class="inputTxt" placeholder="궁금하신 내용을 입력해주세요.">
							<button type="button" class="btnSearch">검색</button>
						</div>
					</fieldset>

					<section class="cusMainFaqList">
						<h3 class="subTitle4C">자주 하는 질문</h3>
						<div class="list">
							<ul>
								<li>
									<a href="#">
										<span class="num">1</span>
										<span class="txt">결제하기 선택 후<br> 다음 단계로 이동의 안돼요!결제하기 선택 후<br> 다음 단계로 이동의 안돼요!</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">2</span>
										<span class="txt">공병수거 기준이 궁금해요!</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">3</span>
										<span class="txt">결제하기를 눌러도<br> 다음화면으로 넘어가지 않아요.</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">4</span>
										<span class="txt">군인인데 배송이 가능할까요?</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">5</span>
										<span class="txt">왜 운송장번호가 추적이<br>되지 않나요?</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">6</span>
										<span class="txt">수취확인을 실수로 눌렀어요.<br>어떻게 하죠?</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">7</span>
										<span class="txt">택배회사는 어디를 이용하나요?</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">8</span>
										<span class="txt">뷰티포인트로 결제가 되나요?</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">9</span>
										<span class="txt">무통장 입금하려는데<br>없는 계좌라고 나와요.</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="num">10</span>
										<span class="txt">이니스프리 사이트 탈퇴는<br>어떻게 하나요?</span>
									</a>
								</li>
							</ul>
						</div>
						<a href="#" class="more">전체보기</a>
					</section>

					<!-- 이니스프리 고객서비스 센터 -->
					<section class="cusOnlineCenter">
						<h3 class="tit">이니스프리 고객서비스 센터</h3>
						<div class="txt">
							궁금하신 사항을 해결해 드립니다.
							<ul>
								<li>운영시간  AM 09:00 ~ PM 18:00 <em>(주말 및 공휴일 휴무)</em></li>
								<li>점심시간  PM 12:00 ~ PM 13:00</li>
							</ul>
							<button class="btnType3s" onclick="layerOpen('cusOnCenter_layer_1')">고객불만 처리절차</button>
							<button class="btnType3s" onclick="layerOpen('cusOnCenter_layer_2')">고객불만 보상기준 </button>
						</div>
						<div class="linkWrap">
							<a href="#none" class="link1">
								080-380-0114
							</a>
							<a href="/kr/ko/MypageCounselWrite.do" class="link2">
								<span>1:1 문의작성</span>
							</a>
							<a href="/kr/ko/MypageCounselList.do" class="link2">
								<span>1: 1 답변확인</span>
							</a>
						</div>
					</section>
					<!-- //이니스프리 고객서비스 센터 -->

					<div class="cusMainBotWrap">
						<section class="noticeList">
							<h3 class="subTitle4">공지사항</h3>
							<ul class="linkListType">
								<li>
									<a href="#">
										<span class="subject">기프티 콘 발송일 변경 안내기프티 콘 발송일 변경 안내기프티 콘 발송일 변경 안내</span>
										<span class="date">2019-07-26</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="subject">기프티 콘 발송일 변경 안내</span>
										<span class="date">2019-07-26</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="subject">기프티 콘 발송일 변경 안내</span>
										<span class="date">2019-07-26</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="subject">기프티 콘 발송일 변경 안내</span>
										<span class="date">2019-07-26</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="subject">기프티 콘 발송일 변경 안내</span>
										<span class="date">2019-07-26</span>
									</a>
								</li>
							</ul>
							<a href="#" class="more">전체보기</a>
						</section>

						<section class="serviceInfo">
							<h3 class="subTitle4">서비스 안내</h3>
							<ul class="serviceLink">
								<li class="store">
									<a href="#">
										<strong>매장안내</strong>
										<span>자주가는 매장을 확인하시고<br>특별한 혜택 받아가세요.</span>
									</a>
								</li>
								<li class="member">
									<a href="#">
										<strong>멤버십 소개</strong>
										<span>이니스프리 멤버십 등급과<br>등급별 혜택들을 확인해 보세요.</span>
									</a>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</section>
		</div>

		<!-- 고객불만 처리절차 팝업 -->
		<div id="cusOnCenter_layer_1" class="layerPop">
			<div class="layerWrap cusOnCenter_layer_1" style="width:720px;">
				<p class="layerTitle">고객불만 처리절차</p>
				<div class="layerContents">
					<div class="cont_img">
						<img src="/resources/web2/images/customer/cusOnCenter_layer_2.jpg" alt="">
					</div>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</div>
		</div>

		<!-- 고객불만 처리기준 팝업 -->
		<div id="cusOnCenter_layer_2" class="layerPop">
			<div class="layerWrap cusOnCenter_layer_1" style="width:720px;">
				<p class="layerTitle">고객불만 처리기준</p>
				<div class="layerContents">
					<p class="emp">제품에 이상이 있을 경우 [소비자기본법]에 따른 소비자분쟁해결기준에 따라  교환 또는 보상을 해 드립니다.</p>
					<p>화장품</p>

					<div class="tbl_type">
						<table>
							<caption>설치 대수, 설치 위치 및 촬영범위</caption>
							<colgroup>
								<col style="width:60%">
								<col>
							</colgroup>
							<thead>
								<tr>
									<th scope="col">불만 유형</th>
									<th scope="col">처리 기준</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										이물 혼입, 함량 부적합, 변질/부패, 유효기간 경과,<br/>
										용량부족 품질/성능/기능 불량
									</td>
									<td>제품 교환 또는 구입가 환불</td>
								</tr>
								<tr>
									<td>용기불량으로 인한 피해 사고, 부작용</td>
									<td>치료비, 경비 및 일실 소득불</td>
								</tr>
							</tbody>
						</table>
					</div>

					<ul class="bulListType">
						<li>
							치료비 지급: 피부과 전문의의 진단 및 처방에 의한 질환 치료 목적의 경우로 함. 단, 화장품과의 인과관계가
							있어야 하며, 자의로 행한 성형, 미용관리 목적으로 인한 경우에는 지급하지 아니한다.
						</li>
						<li>
							일실소득: 피해로 인하여 소득상실이 발생한 것이 입증된 때에 한하며, 금액을 입증할 수 없는 경우에는
							시중 노임단가를 기준으로 한다.
						</li>
					</ul>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</div>
		</div>

		<jsp:include page="/html_pc/include/footer.jsp" />		

	</div>

</body>
</html>