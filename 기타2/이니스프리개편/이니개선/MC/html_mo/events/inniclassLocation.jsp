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
		<!-- 이니 클래스 신청상세 -->
		<div class="inniClassWrap">
			<div class="banner banner_1">
				<h2>이니스프리 원데이클래스</h2>
			</div>

			<div class="contWrap">
				<!-- 링크 이동 탭 -->
				<nav class="tabType classTab">
					<ul class="item4">
						<li><a href="#"><span>이니클래스 안내</span></a></li>
						<li><a href="#"><span>이니클래스 신청</span></a></li>
						<li class="active"><a href="#"><span>이니클래스 장소</span></a></li>
						<li><a href="#"><span>이니클래스 기록</span></a></li>
					</ul>
				</nav>

				<div class="infoClass">
					<h3 class="h3tit">찾아오시는길</h3>
					<p>
						클래스 당첨자의 경우 매장 도착 후<br/>
						<span class="high">"이니클래스 당첨자"</span>라고 알려주세요.
					</p>
				</div>
				
				<div class="storeMap">
					<div class="store">
						<div class="viewImg"></div>
						<div class="adress">
							<div class="adress_1">
								강남 직영점<br>(강남 플래그십 스토어)
							</div>
							<div class="adress_2">
								주소 : 서울특별시 서초구 강남대로 423 한승빌딩 <br/>
								운영 시간 : 오전 10:00 ~ 오후 11:00<br/>
								문의 전화 : 02-535-0584
							</div>
						</div>
					</div>
					<div class="map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3245816441017!2d127.02370285119315!3d37.50026207971124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1591ca5e0ff%3A0xa0f22160badf630!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDshJzstIg064-ZIOqwleuCqOuMgOuhnCA0MjM!5e0!3m2!1sko!2skr!4v1594975008851!5m2!1sko!2skr" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
					</div>
				</div>
				<br>
			</div><!-- //contWrap -->
		</div><!-- //inniClassWrap -->
		<!-- //body -->

		<!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
	</div>
</body>
</html>