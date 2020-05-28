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
</head>
<body>


	<div id="wrap">
		
		<jsp:include page="/html_pc/include/header.jsp" />

		<div id="container"> <!-- snb 있을 경우 class="snbContainer" -->

			<jsp:include page="/html_pc/include/location.jsp" />

			<section id="contents">
				<h2 class="pageTitle2">임직원 인증</h2>
				<p class="pageDesc3">
					이니스프리에 및 아모레퍼시픽 임직원이라면 <span>AP-ON 계정인증</span>을 통해 <br/>
					이니스프리 임직원 서비스를 이용하실 수 있습니다.
				</p>
				<div class="signWrap staffWrap">
					<dl>
						<dt class="hidden"><label for="userId">현재 비밀번호</label></dt>
						<dd>
							<input type="text" id="userId" class="inputTxt" title="AP-ON 아이디를 입력" placeholder="AP-ON 아이디를 입력하세요." style="width:100%;">
						</dd>
					</dl>
					<dl>
						<dt class="hidden"><label for="n-password">새 비밀번호</label></dt>
						<dd class="safetyForm">
							<div class="inner">
								<input type="password" class="inputTxt" title="AP-ON 비밀번호를 입력" placeholder="AP-ON 비밀번호를 입력하세요." style="width:100%;">
							</div>
							<p class="inputAlt" id="newPwdAlt">새 비밀번호를 입력해 주세요.</p>
						</dd>
					</dl>
					<div class="btnWrap">
						<button type="button" class="btnType6b">인증하기</button>
					</div>
					<div class="desc">
						※임직원 인증은 최초 1회에 한해 진행되며<br/>
						로그인 뷰티포인트 통합 멤버십 계정에 연동되므로 인증 전 꼭 확인해주세요.
					</div>
				</div>
			</section>
			
		</div>

		<!-- 로그인 안내 레이어 -->
		<div class="layerPop" style="display: block; display: none;">
			<section class="layerWrap" style="width: 480px;">
				<h3 class="layerTitle">로그인 안내</h3>
				<div class="layerContents staffLayer">
					<div class="staff_msg">
						<p class="txt_1">
							임직원서비스 이용을 위해서는<br/>
							로그인이 필요합니다.
						</p>
					</div>

					<div class="btnWrap">
						<span><button type="button" class="btnType6l">취소</button></span>
						<span><button type="button" class="btnType3l">확인</button></span>
					</div>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</section>
		</div>

		<!-- 임직원 인증 실패 레이어 -->
		<div class="layerPop" style="display: block;">
			<section class="layerWrap" style="width: 480px;">
				<h3 class="layerTitle">임직원 인증 실패</h3>
				<div class="layerContents staffLayer">
					<!-- 1.AP-ON 아이디를 입력해주세요. -->
					<div id="staff_msg_1" style="display: none;">
						<div class="staff_msg">
							<p class="txt_1">
								AP-ON 아이디를 입력해주세요.
							</p>
						</div>
					</div>
					<!-- 2.입력하신 정보가 일치하지 않습니다. -->
					<div id="staff_msg_2" style="display: none;">
						<div class="staff_msg">
							<p class="txt_1">
								입력하신 정보가 일치하지 않습니다.
							</p>
							<p class="txt_2">
								AP-ON 아이디/비밀번호를 정보를 다시 확인해주세요.
							</p>
						</div>
					</div>
					<!-- 3.AP-ON 비밀번호를 입력해주세요. -->
					<div id="staff_msg_3" style="display: none;">
						<div class="staff_msg">
							<p class="txt_1">
								AP-ON 비밀번호를 입력해주세요.
							</p>
						</div>
					</div>
					<!-- 4.김이니님의 임직원 인증이 완료되었습니다. -->
					<div id="staff_msg_4" style="display: block;">
						<div class="staff_msg">
							<p class="txt_1">
								김이니님의 임직원 인증이 완료되었습니다.
							</p>
							<p class="txt_2">
								앞으로 이니스프리 임직원 서비스 혜택이 적용됩니다.
							</p>
						</div>
					</div>

					<div class="btnWrap">
						<span><button type="button" class="btnType6b">확인</button></span>
					</div>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</section>
		</div>

		<!-- 임직원 인증 완료 레이어 -->
		<div class="layerPop" style="display: block;">
			<section class="layerWrap" style="width: 480px;">
				<h3 class="layerTitle">임직원 인증 완료</h3>
				<div class="layerContents staffLayer">

					<!-- 1.김이니님의 임직원 인증이 완료되었습니다. -->
					<div id="staff_msg_4">
						<div class="staff_msg">
							<p class="txt_1">
								김이니님의 임직원 인증이 완료되었습니다.
							</p>
							<p class="txt_2">
								앞으로 이니스프리 임직원 서비스 혜택이 적용됩니다.
							</p>
						</div>
					</div>

					<div class="btnWrap">
						<span><button type="button" class="btnType6b">확인</button></span>
					</div>
				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</section>
		</div>

		
		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>