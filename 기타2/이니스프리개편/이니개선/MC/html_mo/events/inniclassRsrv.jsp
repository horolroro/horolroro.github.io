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
		<!-- 이니 클래스 신청 -->
		<div class="inniClassWrap">
			<div class="banner banner_1">
				<h2>이니스프리 원데이클래스</h2>
			</div>

			<div class="contWrap">
				<!-- 링크 이동 탭 -->
				<nav class="tabType classTab">
					<ul class="item4">
						<li><a href="#"><span>이니클래스 안내</span></a></li>
						<li class="active"><a href="#"><span>이니클래스 신청</span></a></li>
						<li><a href="#"><span>이니클래스 장소</span></a></li>
						<li><a href="#"><span>이니클래스 기록</span></a></li>
					</ul>
				</nav>

				<div class="infoClass">
					<h3>이니클래스 신청하기</h3>
					<p>
						이니클래스는 이니스프리의 회원서비스입니다.<br/>
						클래스 신청, 온라인 결제 후 신청이 완료됩니다. 
					</p>
				</div>

				<div class="listBx">
					<div class="info_1">
						<span class="on">신청가능</span>
						<span>17/20</span>
						<div class="img_area">
							<img src="/resources/mobile2/images/event/inniClass/class_upload_1.jpg" alt="">
						</div>
					</div>
					<div class="info_2">
						<div class="classType_wrap">
							<span class="classType">강남 플래그십 스토어 </span>
							<span class="classType bt">뷰티</span>
							<span class="classType jl">플레이그린</span>
							<span class="classType able">신청가능</span>
						</div>
						<p class="title">
							환경을 생각하는 이니스프리<br/>
							친환경지 노트 북바인딩
						</p>
						<p class="title_sub">
							2020년, 이니클래스의 새로운 클래스를 소개합니다.<br>
							환경을 생각하는 이니스프리의 친환경지 노트북 바인딩 클래스!
						</p>
						<a href="#"><img src="/resources/mobile2/images/event/inniClass/btn_classview.jpg" alt="자세히보기"></a>
					</div>
				</div>

				<div class="listBx">
					<div class="info_1">
						<span class="off">신청마감</span>
						<span>20/20</span>
						<div class="img_area">
							<img src="/resources/mobile2/images/event/inniClass/class_upload_2.jpg" alt="">
						</div>
					</div>
					<div class="info_2">
						<div class="classType_wrap">
							<span class="classType">강남 플래그십 스토어 </span>
							<span class="classType bt">뷰티</span>
							<span class="classType jl">플레이그린</span>
							<span class="classType able">신청가능</span>
						</div>
						<p class="title">
							[업그레이드]톤리둥절에게 착붙! <br/>
							NEW 퍼스널 컬러 찾기_3월
						</p>
						<p class="title_sub">
							2020년, 이니클래스의 새로운 클래스를 소개합니다.<br>
							환경을 생각하는 이니스프리의 친환경지 노트북 바인딩 클래스!
						</p>
						<a href="#"><img src="/resources/mobile2/images/event/inniClass/btn_classview.jpg" alt="자세히보기"></a>
					</div>
				</div>

				<div class="btn_wrap">
					<a href="#" class="btnBk">내 신청 확인 및 취소</a>
				</div>

				<div class="notice">
					<dl>
						<dt>유의사항</dt>
						<dd>이니클래스는 ㈜이니스프리(이하 “회사”)의 온/오프라인 통합 회원을 대상으로 하는 오프라인 클래스입니다.</dd>
						<dd>이니클래스 진행시 참여자의 사진/영상이 촬영될 수 있으며, 촬영된 이미지와 영상의 저작권은 회사에 있습니다.<br> 또한 해당 이미지와 영상은 국내외에서 회사의 홍보물로 활용(2차 저작물 작성 포함)될 수 있습니다. 따라서 회원이 사진/영상 촬영 및 활용에 대한 동의를<br> 거부하거나 개인 정보 수집 동의를 하지 않는 경우 이니클래스를 신청 및 참여하실 수 없습니다.</dd>
						<dd>
							회원의 이니클래스 신청 후 랜덤 추첨을 통해 당첨자가 선정되며, 선정된 분은 아래와 같이 공지합니다.
							<p>- 당첨자 공지 방법 : 이니스프리 홈페이지, 개별 통보(LMS)</p>
							<p>- 회원의 사유로 인해 개별 통보를 받지 못하는 경우 회사는 책임지지 않습니다.</p>
						</dd>
						<dd>당첨자에 한해 결제 페이지가 오픈되며, 온라인 결제 완료 후 클래스 신청이 완료됩니다. 클래스 당첨자는 정해진 기한 내에 클래스 결제를 완료하여야 하며,<br> 결제하지 않으면 클래스 신청은 취소됩니다.</dd>
						<dd class="stm">
							이니클래스 결제 취소 규정
							<p>- 클래스 시작 3일 전까지 : 결제 취소 가능/ 전액 환불</p>
							<p>- 클래스 시작 2일 전~클래스 당일 : 결제 취소 불가/ 환불 불가<br> 전자상거래법의 의거해 최초 당첨자에게 결제일로부터 최소 7일간의 취소 가능 기한을 보장합니다.<br> 이후 추가 당첨자의 경우 클래스 시작일에 맞춘 결제 취소 규정이 적용됩니다.</p>
						</dd>
						<dd>이니클래스 결제 취소는 “마이페이지”내 “주문관리”와 이니클래스 신청 페이지의 “내 신청 확인 및 취소”에서 가능합니다.<br> 당일 No-Show는 이니클래스를 신청한 다른 회원 및 이니클래스 진행을 맡은 강사분에게 피해를 줄 수 있음을 유의 해주시고,<br> 패널티로 인해 이후 3달간 이니클래스에 신청하여도 당첨자에서 제외됩니다.</dd>
						<dd>이니클래스 참여는 선정된 참여자 본인에 한해 가능하며, 양도가 불가합니다. 타인의 명의 이용시 선정이 취소될 수 있습니다.</dd>
					</dl>
				</div>

			</div><!-- //contWrap -->
				
			
		</div><!-- //inniClassWrap -->
		<!-- //body -->

		<!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
	</div>
</body>
</html>