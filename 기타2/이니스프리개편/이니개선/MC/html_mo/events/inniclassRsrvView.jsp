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
						<li class="active"><a href="#"><span>이니클래스 신청</span></a></li>
						<li><a href="#"><span>이니클래스 장소</span></a></li>
						<li><a href="#"><span>이니클래스 기록</span></a></li>
					</ul>
				</nav>

				<div class="classView">
					<div class="classInfo">
						<div class="classImg">
							<img src="/resources/mobile2/images/event/inniClass/img_class1.jpg" alt="">
						</div>
						<div class="classDetail">
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
							<p class="title_sub date">
								*신청기간: 2/20(목)~3/1(일)
							</p>

							<div class="info_wrap">
								<dl class="info">
									<dt>일시 :</dt>
									<dd>2020년 07월 21일 화요일</dd>
									<dt>강사 :</dt>
									<dd>이니클래스 내부 강사</dd>
									<dt>가격 :</dt>
									<dd>25,000</dd>
									<dt>장소 :</dt>
									<dd>강남플래그십스토어</dd>
								</dl>
								<div class="timeList">
									<ul>
										<li><a href="javascript:void(0);">오전 11:00<span>(잔여석 : 0/10)</span></a></li>
										<li class="on"><a href="javascript:void(0);">오후 01:00<span>(잔여석 : 0/10)</span></a></li>
										<li><a href="javascript:void(0);">오후 03:00<span>(잔여석 : 0/10)</span></a></li>
										<li><a href="javascript:void(0);">오후 05:00<span>(잔여석 : 0/10)</span></a></li>
										<li><a href="javascript:void(0);">오후 07:00<span>(잔여석 : 0/10)</span></a></li>
									</ul>
								</div>

							</div>
						</div>
					</div>

					<div class="desc">
						이니스프리 립스틱 녹인 왁스 타블렛으로 향기남기기 ♥ 무더운 여름, 따로 불을 켜지 않고 자리에 두는 것만으로 은은하게 향이 나는 왁스 타블렛을 아시나요? :)
						<br/>
						이니클래스에서는 캔들을 만드는 바로 그 비즈 왁스로, 고체 향수를 만들거에요!
						<br/>
						왁스 타블렛 바디를 만든 후 이니스프리 리얼핏 매트 립스틱을 녹여서 오브제를 만들고, 프리저브드 플라워로 제공되는 유칼립투스, 수국과 함께 꾸미면 완 성!
						<br/>
						이니클래스의 4가지 향: 루바브, 그린 리프, 라벤더, 피톤치드 고급스러운 프레그런스 오일을 사용해 이니스프리 공병에 디퓨저도 함께 만들어 봅니다.
						<br/>
						이번 클래스는 이니클래스에서 핸드메이드로 제작한 "제작 키트"가 제공되며, 키트 박스는 친환경적인 크래프트지로 구성해 디퓨저용 공병, 디퓨저 베이스, 프레그런스 오일, 
						<br/>
						바디 몰드, 오브제 몰드,디퓨저용 리드스틱, 작업용 우드스틱, 포장용 박스, 리본, 프리저브드 플라워, 비즈 왁스 100g,크래프트 컵이 들어 있어요.
						<br/>
						립스틱을 녹여 오브제로 만드는 과정도 너무나 재미있고, 직접 바디 부분을 꾸미는 과정도 재미있어요!
						<br/>
						향을 좋아하는 분들이라면 정말 만족할 클래스입니다 ♥♥ 꼭 신청해서 이니클래스 만의 특별한 왁스 타블렛을 만들어 보세요!!! :)
					</div>
					
				</div>
				<!-- //classView -->

				<div class="btn_wrap">
					<a href="#" class="btn_apply">신청하기</a>
				</div>
				

				<div class="notice">
					<dl>
						<dt>주의사항</dt>
						<dd>이니클래스 당첨 후 온라인 결제가 필요합니다. 온라인 결제는 당첨자에 한해, "결제하기"버튼을 통해 카드로 가능합니다. 온라인 결제 완료 후 클래스 신청이 완료됩니다. </dd>
						<dd>이니클래스의 원활한 진행을 위해 시작 10분 전까지  도착해 주세요. 이니클래스 시작 15분 후까지 도착이 늦어질 경우, 클래스 불참으로 간주될 수 있습니다. </dd>
						<dd>강남 플래그십 스토어 도착 후 현장의 그린어스 분들께 “이니클래스＂참여를 위해 방문했다고 알려주시면 문자 확인 후 자리로 안내해 드립니다.</dd>
						<dd>강남 플래그십 스토어: 서울 서초구 강남대로 423 한승빌딩 1층 (주차공간이 구비되어 있지 않습니다. 대중교통 이용 부탁드려요:)</dd>
					</dl>
				</div>

				<div class="btn_wrap">
					<a href="#" class="btn_list">목록으로</a>
				</div>

				<h3 class="h3tit">찾아오시는길</h3>
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