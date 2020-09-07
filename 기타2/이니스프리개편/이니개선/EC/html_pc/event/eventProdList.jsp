<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "고객센터 > 창업 전국가맹문의";
	String description = "당신이 계신 곳에서 가장 가까운 이니스프리 매장을 찾아보세요.  지역별 이니스프리 매장을 확인하실수 있습니다.";
	String keyword = "이니스프리 고객센터,1:1 고객상담,자주묻는질문,친절매장추천,이니스프리 창업안내,사업설명회안내,공지사항,매장찾기";
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<jsp:include page="/html_pc/include/head.jsp">
	<jsp:param value="<%=title%>" name="title"/>
	<jsp:param value="<%=description %>" name="description"/>
	<jsp:param value="<%=keyword %>" name="keywords"/>
</jsp:include>

<style type="text/css">
	.exfloatingBanner{display:none}
</style>
</head>
<body>


	<div id="wrap">
		
		<jsp:include page="/html_pc/include/header.jsp" />

		<div id="container"> <!-- snb 있을 경우 class="snbContainer" -->

			<jsp:include page="/html_pc/include/location.jsp" />

			<section id="contents">
				<div class="evtViewHead">
					<h2 class="pageTitle">NEW 수퍼 화산송이 클레이 무스 마스크 2X NEW 수퍼 화산송이 클레이 무스 마스크 2XNEW 수퍼 화산송이 클레이 무스 마스크 2X</h2>
					<p class="date">2019.07.22 – 2019.07.31</p>
				</div>

				<div style="background:dodgerblue; height: 50vh;font-size: 30px;text-align: center;color: #000;">컨텐츠영역</div>
				
				<div class="contWrap">
					<!-- 이벤트 상세 제품리스트 -->
					<section class="eventPrdList">
						<!-- 제품리스트 상단 탭 -->
						<nav class="evtListTab">
							<ul>
								<li class="active"><a href="#"><span>전체보기</span></a></li>
								<li><a href="#"><span>화산송이 모공케어!</span></a></li>
								<li><a href="#"><span>블루라이트 차단! 무기자차 선크림 찰떡궁합템</span></a></li>
								<li><a href="#"><span>화산송이 모공케어!</span></a></li>
								<li><a href="#"><span>블루라이트 차단! 무기자차 선크림 찰떡궁합템</span></a></li>
							</ul>
						</nav>

						<!-- 리스트 -->
						<div class="pdtListType pdtListSub">
							<!-- 검색결과 없음 -->
							<ul style="display: none;">
								<li class="nonList">
									선택하신 조건에 맞는 제품이 없습니다. 다시 선택해주세요.
								</li>
							</ul>
							<!-- //검색결과 없음 -->
							<ul>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:100%;">5점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											<img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">밀키프로젝트 - 밀키바통 </span>
										<span class="price">
											<span class="num">22,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:60%;">3점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:100%;">5점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											<img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">밀키프로젝트 - 밀키바통 </span>
										<span class="price">
											<span class="num">22,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:60%;">3점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
							</ul>
						</div>

						<!-- 리스트 -->
						<div class="pdtListType pdtListSub">
							<ul>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:100%;">5점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											<img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">밀키프로젝트 - 밀키바통 </span>
										<span class="price">
											<span class="num">22,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:60%;">3점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
											<img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:100%;">5점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
								<li>
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="stikerWrap">
												<strong class="stikerType1">50%</strong>
											</span>
											<img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
											<img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<a href="#" class="iconZzim">찜</a>
											<a href="#" class="iconCart">장바구니</a>
											<a href="#" class="iconBuy">바로구매</a>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">밀키프로젝트 - 밀키바통 </span>
										<span class="price">
											<span class="num">22,000</span>원
										</span>
										<span class="review">
											<span class="reviewPoint"><span style="width:60%;">3점</span></span>
											<span class="length">(156)</span>
										</span>
										<span class="pdtStatus">
											<span class="iconstaff">임직원할인</span>
											<span class="iconNew">NEW</span>
											<span class="iconGift">GIFT</span>
											<span class="iconSale">SALE</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</section>
					<!-- //이벤트 상세 제품리스트 -->
				</div>
				
			</section><!-- //contents -->
			
		</div>

		
		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>