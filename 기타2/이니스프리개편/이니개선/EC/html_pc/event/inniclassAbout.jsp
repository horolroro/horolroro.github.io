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
                <div class="inniClassWrap">
					<h1>이니클래스</h1>
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
								이니스프리의 제주 라이프와 이니스프리만의 아름다운 뷰티 철학, 그리고 친환경 청청 자연을 지키는 가치를 담은 원데이 클래스입니다.<br/>
								진정한 그린 뷰티, 그린라이프를 통한 새로운 경험을 제안합니다.
							</p>
						</div>

						<div class="classTheme">
							<h3>이니클래스 3가지 테마</h3>
							<div class="bx">
								<div class="info">
									<span class="title">제주 라이프 : Jeju Life</span>
									<p>
										이니스프리의 청정섬<br/>
										제주 자연의 아름다움을 느끼며<br/>
										힐링과 즐거움을 선사하는<br/>
										제주 라이프 클래스 
									</p>
								</div>
								<div class="info_img">
									<img src="/resources/web2/images/event/inniclass/theme_1.jpg" alt="">
								</div>
							</div>

							<div class="bx">
								<div class="info">
									<span class="title">뷰티 : Beauty</span>
									<p>
										자연주의 이니스프리의<br/>
										맞춤형 메이크업 서비스,<br/>
										퍼스널 컬러 찾기<br/>
										뷰티 클래스  
									</p>
								</div>
								<div class="info_img">
									<img src="/resources/web2/images/event/inniclass/theme_2.jpg" alt="">
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
								<div class="info_img">
									<img src="/resources/web2/images/event/inniclass/theme_3.jpg" alt="">
								</div>
							</div>
						</div>
					</div><!-- //contWrap -->
				</div><!-- //inniClassWrap -->

			</section><!-- //contents -->
			
		</div>

		
		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>