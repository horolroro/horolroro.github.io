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
		<!-- 이니클래스 컨텐츠 -->
		<div class="inniClassWrap">
			<div class="banner banner_1">
				<h2>이니스프리 원데이클래스</h2>
			</div>
		</div><!-- //inniClassWrap -->

		<!-- 이니클래스 팝업 -->
		<div class="inniClassPopWrap">
			<!-- 결제하기 -->
			<div class="layPop size560" id="payInfo" style="display: block;">
				<div class="wrapModal">
					<div class="inner popWrap">
						<div class="popHead">
							<h3>이니클래스 결제하기</h3>
						</div>
						<div class="popBody">
							<div class="bgBox">
								이니클래스는 온라인 선결제가 필요하며, 클래스 취소/환불 규정에 따라 취소 가능일 이후에
								결제 취소가 불가능합니다. <br/>
								<span style="color: #222;">신청하시겠습니까? </span>
							</div>
							<label for="inputCheck1" class="inputChk"><input type="checkbox" name="inputCheck1" id="inputCheck1"> <span>예, 동의합니다.</span></label>

							<div class="btnWrap row2 g">
								<span><button type="button" class="btnA7">취소</button></span>
								<span><button type="button" class="btnBk">결제하기</button></span>
							</div>

							<div class="lineBox">
								<ul>
									<li>
										이니클래스 결제 취소/환불 규정:
										<div>
											<p>클래스 오픈~시작 3일 전까지: 클래스 신청&결제취소 가능/전액 환불</p>
											<p>클래스 시작 2일전~클래스 당일: <span>클래스 신청 가능</span>/ 결제취소 불가, 환불 불가</p>
										</div>
										<p>
											<span>클래스 시작 3일전까지 신청과 결제, 결제 취소 및 환불 모두 가능하나
											클래스 시작 2일전~ 클래스 당일, 신청은 가능하나 결제 취소/환불은 불가능합니다.</span>
										<p>
											<span>
											클래스 결제취소는 “마이페이지”내 “주문관리＂와
											이니클래스 신청 목록의 “내 신청 확인 및 취소＂에서 가능합니다. </span>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<button type="button" class="mvClose" onclick="classContentsView_close();">닫기</button>
					</div>
				</div>   
			</div>
		</div>
		<!--//팝업-->
		<!-- //body -->

		<!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
	</div>
</body>
</html>