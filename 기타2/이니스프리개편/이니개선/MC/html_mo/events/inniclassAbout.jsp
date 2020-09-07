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
		<div class="inniClassWrap">
			<div class="banner banner_1">
				<h2>이니스프리 원데이클래스</h2>
			</div>

			<div class="contWrap">
				<!-- 링크 이동 탭 -->
				<nav class="tabType classTab">
					<ul class="item4">
						<li class="active"><a href="#"><span>이니클래스 소개</span></a></li>
						<li><a href="#"><span>이니클래스 신청</span></a></li>
						<li><a href="#"><span>이니클래스 장소</span></a></li>
						<li><a href="#"><span>이니클래스 기록</span></a></li>
					</ul>
				</nav>

				<div class="infoClass">
					<h3>이니클래스(inniclass)는</h3>
					<p>
						이니스프리의 제주 라이프와 이니스프리만의 아름다운 뷰티 철학, 그리고 친환경 청청 자연을 지키는 가치를 담은 원데이 클래스입니다.
						진정한 그린 뷰티, 그린라이프를 통한 새로운 경험을 제안합니다.
					</p>
				</div>

				<div class="classTheme">
					<h3>이니클래스 3가지 테마</h3>
					<div class="bx">
						<div class="info">
							<span class="title">제주 라이프 : Jeju Life</span>
							<p>
								이니스프리의 청정섬 제주 자연의 아름다움을 느끼며<br/>
								힐링과 즐거움을 선사하는 제주 라이프 클래스 
							</p>
						</div>
						<div class="horizScroll">
							<div class="info_img">
								<img src="/resources/mobile2/images/event/inniClass/theme_1.png" alt="">
							</div>
						</div>
						
					</div>

					<div class="bx">
						<div class="info">
							<span class="title">뷰티 : Beauty</span>
							<p>
								자연주의 이니스프리의 맞춤형 메이크업 서비스,<br/>
								퍼스널 컬러 찾기 뷰티 클래스  
							</p>
						</div>
						<div class="horizScroll">
							<div class="info_img">
								<img src="/resources/mobile2/images/event/inniClass/theme_2.png" alt="">
							</div>
						</div>
					</div>

					<div class="bx">
						<div class="info">
							<span class="title">Play Green : 플레이 그린</span>
							<p>
								세상을 바꾸는 이니스프리의 가치,<br/>
								지구를 위한 모든 놀이 활동<br/>
								자연을 사랑하고 환경을 아름답게 만드는<br/>
								플레이 그린 클래스
							</p>
						</div>
						<div class="horizScroll">
							<div class="info_img">
								<img src="/resources/mobile2/images/event/inniClass/theme_3.png" alt="">
							</div>
						</div>
					</div>
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