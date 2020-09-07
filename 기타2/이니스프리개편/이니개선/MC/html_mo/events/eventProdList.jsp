<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "이니스프리";
	String description = "피부에 휴식을 주는 섬 자연주의 화장품 브랜드 이니스프리의 온라인 화장품 쇼핑몰입니다.";
	String keyword = "화장품 쇼핑몰, 스킨케어, 메이크업, 마스크팩, 바디, 헤어, 남성화장품, 맨스토어, 마이쿠션, 추천제품,기획전, 이벤트";
 %>
<!DOCTYPE html>
<html lang="ko">
<head>
<jsp:include page="/html_mo/include/head.jsp">
	<jsp:param value="<%=title%>" name="title"/>
	<jsp:param value="<%=description %>" name="description"/>
	<jsp:param value="<%=keyword %>" name="keywords"/>
</jsp:include>

<style type="text/css">
	.floatingBanner{display: none;}
</style>
</head>
<body>

	<div id="container">
		<!-- header -->
		<jsp:include page="/html_mo/include/header.jsp" />
		<!-- //header -->
		<!-- body -->
		<div class="subWrap">
			<div class="event">
				<div class="eventView">
					<!-- 이벤트 상세 제품리스트 -->
					<section class="eventPrdList">
						<!-- 제품리스트 상단 탭 -->
						<nav class="evtListTab">
							<ul>
								<li class="active"><a href="#"><span>전체보기</span></a></li>
								<li><a href="#"><span>전체보기전체보기</span></a></li>
								<li><a href="#"><span>블루라이트 차단! 무기자차 선크림 찰떡궁합템 블루라이트 차단!</span></a></li>
								<li><a href="#"><span>전체보기</span></a></li>
								<li><a href="#"><span>전체보기전체보기</span></a></li>
								<li><a href="#"><span>블루라이트 차단! 무기자차 선크림 찰떡궁합템 블루라이트 차단!</span></a></li>
							</ul>
						</nav>

						<!-- 리스트 -->
						<div class="productTypeThumb">
							<!-- 제품 없음 -->
							<p class="nodate">선택하신 조건에 맞는 제품이 없습니다.<br>다시 선택해주세요.</p>
							<!-- //제품 없음 -->
							<ul>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/20440_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="그린티 씨드 에센스 인 로션">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart" onclick="wishSel();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
											<span class="tSock">일시품절</span>
										</p>
										<div class="productStyle">
											<span class="pstaff">임직원할인</span>
										</div>
									</div>
								</li>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/27516_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="트루케어 비타민C 20 앰플 + 판테놀 10 수분 스킨">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart " onclick="loginAlert();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
										</p>
										<div class="productStyle">
											<span class="pSale">SALE</span>
										</div>
									</div>
								</li>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/20440_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="그린티 씨드 에센스 인 로션">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart" onclick="wishSel();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
											<span class="tSock">일시품절</span>
										</p>
										<div class="productStyle">
											<span class="pstaff">임직원할인</span>
										</div>
									</div>
								</li>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/27516_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="트루케어 비타민C 20 앰플 + 판테놀 10 수분 스킨">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart " onclick="loginAlert();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
										</p>
										<div class="productStyle">
											<span class="pSale">SALE</span>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<!-- 리스트 -->
						<div class="productTypeThumb">
							<ul>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/20440_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="그린티 씨드 에센스 인 로션">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart" onclick="wishSel();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
											<span class="tSock">일시품절</span>
										</p>
										<div class="productStyle">
											<span class="pstaff">임직원할인</span>
										</div>
									</div>
								</li>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/27516_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="트루케어 비타민C 20 앰플 + 판테놀 10 수분 스킨">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart " onclick="loginAlert();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
										</p>
										<div class="productStyle">
											<span class="pSale">SALE</span>
										</div>
									</div>
								</li>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/20440_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="그린티 씨드 에센스 인 로션">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart" onclick="wishSel();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
											<span class="tSock">일시품절</span>
										</p>
										<div class="productStyle">
											<span class="pstaff">임직원할인</span>
										</div>
									</div>
								</li>
								<li>
									<div class="itemThumb">
										<div class="stateWrap">
											<p class="stateR"><strong>20</strong><em class="per">%</em></p>
										</div>
										<a href="">
											<img src="https://images.innisfree.co.kr/upload/product/27516_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="트루케어 비타민C 20 앰플 + 판테놀 10 수분 스킨">
										</a>
									</div>
									<div class="way">
										<button type="button" class="hart " onclick="loginAlert();">찜</button>
										<button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
										<button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
									</div>
									<div class="itemInfor">
										<p class="tpDesc"></p>
										<p class="tpName"><a href="">그린티 씨드 에센스 인 로션<br>100mL</a></p>
										<p class="tPrice">
											<strong class="cost">20,000원</strong>
											<strong class="tUnit">16,000</strong>원
										</p>
										<div class="productStyle">
											<span class="pSale">SALE</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</section>
					
					<script>
						//리스트 개수에 따른 탭 넓이 조정
						var evtItem = $('.evtListTab li');
						if(evtItem.length == 1){evtItem.css({width:'100%'})}
						else if(evtItem.length == 2){evtItem.css({width:'50%'})}
						else{evtItem.css({width:'33.3%'})}
					</script>

					<!-- //이벤트 상세 제품리스트 -->
				</div>
			</div>
		</div>
		<!-- //body -->

		<!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
	</div>
</body>
</html>