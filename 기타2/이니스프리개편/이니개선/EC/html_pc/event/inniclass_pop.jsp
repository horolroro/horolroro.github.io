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
				</div><!-- //inniClassWrap -->

			</section><!-- //contents -->
			
		</div>

		<!-- 이니클래스 신청하기 팝업 -->
		<div class="layerPop" style="display: none;">
			<div class="layerWrap myReserveClassLayer" style="width:722px;">
				<p class="layerTitle">이니클래스 신청하기</p>
				<div class="layerContents">
					<div class="bgBox">
						회원은 회사가 이니클래스 진행 시 회원의 사진/영상 촬영을 허락하며, 촬영된 사진 및 영상의 저작권이 
						회사에 있음에 동의하며, 회원의 초상이 포함된 사진과 영상이 국내외에서 회사의 홍보물로 활용
						(2차 저작물 작성 포함)하는 것에 동의합니다.
					</div>
					<label for="inputCheck2" class="inputChk"><input type="checkbox" name="inputCheck2" id="inputCheck2"> <span>예, 동의합니다.</span></label>
					<div class="lineBox">
						<ul>
							<li>
								회사의 개인정보 수집 및 이용, 사진 촬영 및 활용에 대한 동의를 거부할 수 있습니다. <br/>
								단, 동의를 거부하는 경우 이니클래스를 신청하실 수 없습니다.
							</li>
							<li>
								개인정보 처리위탁에 대한 안내<br/>
								이니스프리는 이니클래스 신청을 위하여 하기와 같이 개인정보의 처리를 위탁합니다. 
							</li>
						</ul>
					</div>

					<div class="persInfoConsign">
						<div class="consignTable mgt10">
							<table summary="개인정보 처리위탁에 대한 내용">
								<caption>개인정보 처리위탁에 대한 내용</caption>
								<colgroup>
									<col style="width:50%">
									<col style="width:50%">
								</colgroup>
								<tbody>
									<tr>
										<th>개인정보 처리를 위탁받는 자</th>
										<th>개인정보 처리를 위탁받는 업무</th>
									</tr>
									<tr>
										<td>
											IBM(주)<br/>CJ올리브네트웍스
										</td>
										<td>
											개인정보의 전산처리 및 관리<br/>예약 확인을 위한 문자메세지 발송
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="btnWrap">
						<button type="button" class="btnType3l">결제단계로 이동</button>
					</div>

				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</div>
		</div>

		<!-- 이니클래스 결제하기 팝업 -->
		<div class="layerPop" style="display: block;">
			<div class="layerWrap myReserveClassLayer" style="width:722px;">
				<p class="layerTitle">이니클래스 결제하기</p>
				<div class="layerContents">
					<div class="bgBox">
						이니클래스는 온라인 선결제가 필요하며, 클래스 취소/환불 규정에 따라 취소 가능일 이후에 <br/>
						결제 취소가 불가능합니다. <br/>
						<span style="color: #222;">신청하시겠습니까? </span>
					</div>
					<label for="inputCheck3" class="inputChk"><input type="checkbox" name="inputCheck3" id="inputCheck3"> <span>예, 동의합니다.</span></label>
					<div class="lineBox">
						<ul>
							<li>
								이니클래스 결제 취소/환불 규정:
								<p>
									클래스 오픈~시작 3일 전까지: 클래스 신청&결제취소 가능/전액 환불<br/>
									클래스 시작 2일전~클래스 당일: <span>클래스 신청 가능</span>/ 결제취소 불가, 환불 불가
								</p>
								<p>
									<span>클래스 시작 3일전까지 신청과 결제, 결제 취소 및 환불 모두 가능하나<br/>
									클래스 시작 2일전~ 클래스 당일, 신청은 가능하나 결제 취소/환불은 불가능합니다.</span>
								<p>
									<span>
									클래스 결제취소는 “마이페이지”내 “주문관리＂와<br/>
									이니클래스 신청 목록의 “내 신청 확인 및 취소＂에서 가능합니다. </span>
								</p>
							</li>
						</ul>
					</div>

					<div class="btnWrap g">
						<button type="button" class="btnType6l">취소</button>
						<button type="button" class="btnType3l">결제하기</button>
					</div>

				</div>
				<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
			</div>
		</div>

		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>