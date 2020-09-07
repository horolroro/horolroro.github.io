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
					</ul>
				</div>
				<!-- //cont2-->

				<div class="btn_wrap">
					<button type="button" class="btnWt" onclick="goPage()"><span class="arrMore">더보기</span></button>
				</div>

				<div class="cont1">
					<p class="title">Video</p>
					<div class="movBox"><iframe allowfullscreen="allowfullscreen" frameborder="0"  id="classVideo" src="https://www.youtube.com/embed/aLUNKAbXZcU" ></iframe></div>
					<p class="movTitle">[이니클래스] 제주라이프 - 팰롱팰롱 빛나는, 제주풍경 담은 천연 비누만들기 클래스!</p>

					<div class="movList">
						<div class="list on">
							<a data-video="https://www.youtube.com/embed/aLUNKAbXZcU" href="javascript:void(0);">
							<div class="movThumb" style="background-image:url('http://img.youtube.com/vi/aLUNKAbXZcU/mqdefault.jpg')">
								<p class="movTitle"><span>[이니클래스] 제주라이프 - 팰롱팰롱 빛나는, 제주풍경 담은 천연 비누만들기 클래스!</span></p>
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
		
		<!-- 팝업 -->
		<div class="inniClassPopWrap">
			<div class="layPop size560" id="classPop">
				<div class="wrapModal">
					<div class="inner popWrap">
						<div class="popHead">
							<h3 id="inniclassPopTitle">[플레이그린]2/24 플랙스 소재로 재미있게 만드는 에어팟 케이스 2차 :)</h3>
						</div>
						<div class="popBody">
							<div class="mid">
								<!--<img src="https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/img01_20190711.jpg" alt="">-->
								<ul class="viewClassBox">
								</ul>
							</div>
							<div class="navClassWrap">
								<ul class="arrowBtnWrap">
									<li class="prev"></li>
									<li class="next"></li>
								</ul>
								<ul class="navClassBox">
								</ul>
							</div>
						</div>
						<button type="button" class="mvClose" onclick="classContentsView_close();">닫기</button>
					</div>
				</div>   
			</div>
		</div>
		<!--//팝업-->

		<!-- 이니클래스 스크립트 -->
		<link rel="stylesheet" href="https://images.innisfree.co.kr/resources/mobile/css/slick.css">
		<script src="https://images.innisfree.co.kr/resources/mobile/js/slick.js"></script>

		
		<script type="text/javascript">
			$('.movList').slick({
				centerMode: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				arrows: false,
				infinite: true,
				variableWidth:false
			});
			$('.movList .list a').on('click', function(){
				$('.movList .list').removeClass('on');
				$(this).parent('.list').addClass('on');
				var contVideo = $(this).data('video'),
					contTitle = $(this).find('.movTitle').text(),
					contVideoStr = contVideo.split('/')[4],
					newContVideo = 'https://www.youtube.com/embed/' + contVideoStr;
				$('#classVideo').attr('src', newContVideo);
				$('.movBox').next().text(contTitle);
			});

			/*팝업_슬라이드*/
			function inniclassContentView(){
				var imgPath = 'https://images.innisfree.co.kr/kr/ko/upload/inniclass/content_img/';	
				console.log(imgPath)

				var photoView_html = `
					<div class="list"><img src="\${imgPath}/inniClass_content_photo_aaaa8_36.jpg"></div>
					<div class="list"><img src="\${imgPath}/inniClass_content_photo_aaaa8_36.jpg"></div>
					<div class="list"><img src="\${imgPath}/inniClass_content_photo_aaaa8_36.jpg"></div>
					<div class="list"><img src="\${imgPath}/inniClass_content_photo_aaaa8_36.jpg"></div>
					<div class="list"><img src="\${imgPath}/inniClass_content_photo_aaaa8_36.jpg"></div>
				`
				var photoNav_html = `
					<div class="list" style="background-image:url('\${imgPath}/inniClass_content_photo_89316367_672157746925674_6899112942315241472_n_35.jpg')">Thumb</div>
					<div class="list" style="background-image:url('\${imgPath}/img06_20190627.jpg')">Thumb</div>
					<div class="list" style="background-image:url('\${imgPath}/img06_20190627.jpg')">Thumb</div>
					<div class="list" style="background-image:url('\${imgPath}/img06_20190627.jpg')">Thumb</div>
					<div class="list" style="background-image:url('\${imgPath}/img06_20190627.jpg')">Thumb</div>
				`
				
				$('.viewClassBox').html(photoView_html);
				$('.navClassBox').html(photoNav_html);

				$('.viewClassBox').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					adaptiveHeight: true,
					asNavFor: '.navClassBox'
				});
				$('.navClassBox').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: '.viewClassBox',
					dots: false,
					arrows: true,
					focusOnSelect: true,
					prevArrow: '.navClassWrap .prev',
					nextArrow: '.navClassWrap .next'
				});
				

				layerOpen('classPop');

				$(".viewClassBox").slick('resize');
				$(".navClassBox").slick('resize');
			}

			var classContentsView_close = function() {
				$('.viewClassBox').slick('unslick');
				$('.navClassBox').slick('unslick');

				$('body').removeClass('overHeight');
			}

		</script>
		<!-- //body -->

		<!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
	</div>
</body>
</html>