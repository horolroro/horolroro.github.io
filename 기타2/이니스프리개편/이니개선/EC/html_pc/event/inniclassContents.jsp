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

				<!-- 이니클래스 컨텐츠 -->
				<div class="inniClassWrap">
					<h1>이니클래스</h1>
					<div class="banner banner_1">
						<h2>이니스프리 원데이클래스</h2>
					</div>

					<div class="contWrap">
						<!-- 링크 이동 탭 -->
						<nav class="tabType classTab">
							<ul class="item4">
								<li><a href="#"><span>이니클래스 안내</span></a></li>
								<li><a href="#"><span>이니클래스 신청</span></a></li>
								<li><a href="#"><span>이니클래스 장소</span></a></li>
								<li class="active"><a href="#"><span>이니클래스 기록</span></a></li>
							</ul>
						</nav>

						<div class="infoClass">
							<h3>이니클래스 기록</h3>
							<p>
								진행된 이니클래스의 사진, 영상을 공유합니다.
							</p>
						</div>

						<div class="cont2">
							<p class="title">Photo</p>
							<ul class="classList">
								<li>
									<a href="javascript:void(0);" onclick="inniclassContentView()">
									<div class="classThumb" style="background-image:url('https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_36.jpg?T202007201307')">
										<div class="imgCnt">
											11
										</div>
									</div>
									<div class="classInfo">
										<p class="typeBT"><span>[뷰티]</span> 6/16 꾸안꾸 일대일 메이크업 :)</p>
										<div class="date">
											2020.06.16
										</div>
									</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" onclick="inniclassContentView()">
									<div class="classThumb" style="background-image:url('https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_35.jpg?T202007201307')">
										<div class="imgCnt">
											13
										</div>
									</div>
									<div class="classInfo">
										<p class="typePG"><span>[플레이그린]</span> 2/24 플랙스 소재로 재미있게 만드는 에어팟 케이스 2차 :)</p>
										<div class="date">
											2020.02.24
										</div>
									</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" onclick="inniclassContentView()">
									<div class="classThumb" style="background-image:url('https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_34.jpg?T202007201307')">
										<div class="imgCnt">
											15
										</div>
									</div>
									<div class="classInfo">
										<p class="typeJL"><span>[제주라이프]</span> 2/18 종이꽃다발 X 향기나는 배쓰밤 만들기</p>
										<div class="date">
											2020.02.18
										</div>
									</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" onclick="inniclassContentView()">
									<div class="classThumb" style="background-image:url('https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_33.jpg?T202007201307')">
										<div class="imgCnt">
											13
										</div>
									</div>
									<div class="classInfo">
										<p class="typeJL"><span>[제주라이프]</span> 2/11 [NEW디자인] 제주도 녹차밭 수제비누 만들기 ♡</p>
										<div class="date">
											2020.02.11
										</div>
									</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" onclick="inniclassContentView()">
									<div class="classThumb" style="background-image:url('https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_32.jpg?T202007201307')">
										<div class="imgCnt">
											12
										</div>
									</div>
									<div class="classInfo">
										<p class="typeBT"><span>[뷰티]</span> 2/6 업그레이드 퍼스널 컬러 찾기 :)</p>
										<div class="date">
											2020.02.06
										</div>
									</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" onclick="inniclassContentView()">
									<div class="classThumb" style="background-image:url('https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_30.jpg?T202007201307')">
										<div class="imgCnt">
											16
										</div>
									</div>
									<div class="classInfo">
										<p class="typePG"><span>[플레이그린]</span> 1/30 플랙스 소재로 만드는 에어팟 케이스</p>
										<div class="date">
											2020.01.30
										</div>
									</div>
									</a>
								</li>
							</ul><!-- paging -->
							<div class="paging">
								<span class="pageNav prev2"><a href=""><em class="hide">이전</em></a></span>
								<span class="pageNav prev"><a href=""><em class="hide">이전</em></a></span>
								<span class="num on"><a href="">1</a></span>
								<span class="num"><a href="">2</a></span>
								<span class="num"><a href="">3</a></span>
								<span class="num"><a href="">4</a></span>
								<span class="num"><a href="">5</a></span>
								<span class="pageNav next"><a href=""><em class="hide">다음</em></a></span>
								<span class="pageNav next2"><a href=""><em class="hide">다음</em></a></span>
							</div><!-- //paging -->
						</div>
						<!-- //cont2-->

						<div class="cont1">
							<p class="title">Video</p>
							<div class="movBox">
								<iframe allowfullscreen="allowfullscreen" frameborder="0" width="1280" height="720" id="classVideo" src="https://www.youtube.com/embed/aLUNKAbXZcU" ></iframe>
								<p class="movTitle">[이니클래스] 제주라이프 - 팰롱팰롱 빛나는, 제주풍경 담은 천연 비누만들기 클래스!</p>
							</div>
							<div class="movList">
								<div class="list on">
									<a data-video="https://www.youtube.com/embed/aLUNKAbXZcU" href="javascript:void(0);">
									<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/aLUNKAbXZcU/mqdefault.jpg')">
										<p class="movTitle"><span>[이니클래스] 제주라이프 - 팰롱팰롱 빛나는, 제주풍경 담은 천연 비누만들기 클래스![이니클래스] 제주라이프 - 팰롱팰롱 빛나는, 제주풍경 담은 천연 비누만들기 클래스!</span></p>
									</div>
									</a>
								</div>
								<div class="list ">
									<a data-video="https://www.youtube.com/embed/oRfQxROV5HM" href="javascript:void(0);">
									<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/oRfQxROV5HM/mqdefault.jpg')">
										<p class="movTitle"><span>[이니클래스] 버블버블 굴려라 배쓰밤 X 크리스마스 트리 클래스  버블버블 굴려라 배쓰밤 X 크리스마스 트리 클래스</span></p>
									</div>
									</a>
								</div>
								<div class="list">
									<a data-video="https://www.youtube.com/embed/zCGhHFUoM80" href="javascript:void(0);">
									<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/zCGhHFUoM80/mqdefault.jpg')">
										<p class="movTitle"><span>[이니클래스] 플레이그린 - 내 손안의 필름 감성, 업사이클 카메라 DIY 제작!</span></p>
									</div>
									</a>
								</div>
								<div class="list">
									<a data-video="https://www.youtube.com/embed/Hmjf68N3PuA" href="javascript:void(0);">
									<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/Hmjf68N3PuA/mqdefault.jpg')">
										<p class="movTitle"><span>[이니메이크업] 뷰티유튜버 민스코의 원데이 가을 메이크업 클래스</span></p>
									</div>
									</a>
								</div>
								<div class="list">
									<a data-video="https://www.youtube.com/embed/q7kCMj83yxQ" href="javascript:void(0);">
									<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/q7kCMj83yxQ/mqdefault.jpg')">
										<p class="movTitle"><span>[이니클래스] 제주라이프 - 2019 제주컬러피커 색상으로 그리는 손그림 엽서 :)</span></p>
									</div>
									</a>
								</div>
								
								<div class="list">
									<a data-video="https://www.youtube.com/embed/kaWWVAIUdcg" href="javascript:void(0);">
									<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/kaWWVAIUdcg/mqdefault.jpg')">
										<p class="movTitle"><span>[이니클래스 런칭] 퍼스널 컬러 찾기! 강남 플래그십 스토어의 오프라인 원데이 클래스 :)</span></p>
									</div>
									</a>
								</div>
							</div>
						</div>
					</div><!-- //contWrap -->
						
					
				</div><!-- //inniClassWrap -->

				<!--이니클래스 팝업-->
				<div id="classContentsView" class="layerPop"> 
					<div class="layerWrap classContentsLayer" style="width:681px;">
						<p class="layerTitle" id="inniclassPopTitle"></p>
						<div class="layerContents">
							<div class="classPhotoList">
								<div class="photoView">
									<div class="list"><img src="https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_photo_aaaa8_36.jpg"></div>
									<div class="list"><img src="https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_photo_aaaa8_36.jpg"></div>
									<div class="list"><img src="https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_photo_aaaa8_36.jpg"></div>
									<div class="list"><img src="https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_photo_aaaa8_36.jpg"></div>
									<div class="list"><img src="https://www.innisfree.com/kr/ko/upload/inniclass/content_img/inniClass_content_photo_aaaa8_36.jpg"></div>
								</div>
								<div class="photoThumb">
									<button type="button" class="photo-prev">Previous</button>
									<div class="photoNav">
										<div class="list" style="background-image:url('https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/img06_20190627.jpg')">Thumb</div>
										<div class="list" style="background-image:url('https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/img06_20190627.jpg')">Thumb</div>
										<div class="list" style="background-image:url('https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/img06_20190627.jpg')">Thumb</div>
										<div class="list" style="background-image:url('https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/img06_20190627.jpg')">Thumb</div>
										<div class="list" style="background-image:url('https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/img06_20190627.jpg')">Thumb</div>
									</div>
									<button type="button" class="photo-next">Next</button>
								</div>
							</div>
						</div>
						<button type="button" class="btnLayerClose" onclick="layerClose();">레이어 팝업 닫기</button>
					</div>
				</div>

				<!-- 이니클래스 스크립트 -->
				<script type="text/javascript">
					$('.movList').slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						infinite: true,
					});
					$('.movList .list a').on('click', function(){
						console.log('aa')
						$('.movList .list').removeClass('on');
						$(this).parent('.list').addClass('on');
						var contVideo = $(this).data('video'),
							contTitle = $(this).find('.movTitle').text(),
							contVideoStr = contVideo.split('/')[4],
							newContVideo = 'https://www.youtube.com/embed/' + contVideoStr;
						$('#classVideo').attr('src', newContVideo);
						$('.movBox .movTitle').text(contTitle);
					});

					/*팝업_슬라이드*/
					$('.photoView').slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						adaptiveHeight: true,
						asNavFor: '.photoNav'
					});
					$('.photoNav').slick({
						slidesToShow: 4,
						slidesToScroll: 1,
						asNavFor: '.photoView',
						dots: false,
						arrows: true,
						focusOnSelect: true,
						prevArrow: '.photo-prev',
						nextArrow: '.photo-next'
					});

					$('.photo-next').click(function() {
						$('.photoView').slick('slickNext');
						$('.photoNav').slick('slickNext');
					});

					$('.photo-prev').click(function() {
						$('.photoView').slick('slickPrev');
						$('.photoNav').slick('slickPrev');
					});

					function inniclassContentView(){

						layerOpen('classContentsView');
						$('.photoView').resize();
					}

				</script>

			</section><!-- //contents -->
			
		</div>

		
		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>