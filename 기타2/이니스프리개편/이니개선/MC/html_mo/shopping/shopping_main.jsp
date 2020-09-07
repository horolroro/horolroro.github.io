<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "이니스프리";
	String description = "피부에 휴식을 주는 섬 자연주의 화장품 브랜드 이니스프리의 온라인 화장품 쇼핑몰입니다.";
	String keyword = "화장품 쇼핑몰, 스킨케어, 메이크업, 마스크팩, 바디, 헤어, 남성화장품, 맨스토어, 마이쿠션, 추천제품,기획전, 이벤트";
 %>
 <% request.setCharacterEncoding("utf-8");%>
<!DOCTYPE html>
<html lang="ko">
<head>
<jsp:include page="/html_mo/include/head.jsp">
	<jsp:param value="<%=title%>" name="title"/>
	<jsp:param value="<%=description %>" name="description"/>
	<jsp:param value="<%=keyword %>" name="keywords"/>
</jsp:include>
</head>
<body>
	<div id="container"> 
		<!-- header -->
		<jsp:include page="/html_mo/include/header.jsp" />
		<!-- //header -->

		<!-- MAIN POPUP-->
		<section class="mainPopup mainSlidePop" data-target="4388" style="display: block;">
			<div class="popWrap">
				<div class="popEvtSlider">
					<div class="slide swiper-container">
						<ul class="swiper-wrapper">
							<!-- TYPE A -->
							<li class="swiper-slide typeA">
								<a href="#">
									<div class="visualImg">
										<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/@pop_visual_wide_1.jpg" alt="비쥬얼이미지">
									</div>
								</a>
							</li>
							<!-- TYPE B -->
							<li class="swiper-slide typeB">
								<a href="#">
									<div class="visualImg">
										<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/@popvisual_two_col_1.jpg" alt="비쥬얼이미지">
									</div>
								</a>
								<a href="#">
									<div class="visualImg">
										<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/@popvisual_two_col_2.jpg" alt="비쥬얼이미지">
									</div>
								</a>
							</li>
							<!-- TYPE C -->
							<li class="swiper-slide typeC">
								<div class="popHead">
									<h3>이니 클래스 공지 사항</h3>
								</div>
								<div class="popBody">
									<div class="imgArea">
										<!-- 이미지 사이즈 height 370px-->
										<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/@pop_visual_s3.jpg" alt="비쥬얼이미지">
									</div>
									<div class="txtArea">
										클래스 신청은 시작 1주일 전 오픈 되어 가능합니다.
										클래스 신청 마감 후 당첨자가 홈페이지에 공지되며, 당첨자에겐 개별 연락 드립니다.  감사합니다.]
										클래스 신청은 시작 1주일 전 오픈 되어 가능합니다.
										클래스 신청 마감 후 당첨자가 홈페이지에 공지되며, 당첨자에겐 개별 연락 드립니다.  감사합니다.]
									</div>
								</div>
							</li>
							<!-- TYPE D -->
							<li class="swiper-slide typeD">
								<div class="popHead popHead2">
									<h3>'택배 없는 날' 배송 일정 안내</h3>
								</div>
								<div class="popBody">
									<div class="txtArea txtArea2">
										8/14(금) 택배 없는 날'로 아래와 같이 배송될 예정이오니 주문 시 참고 부탁드립니다.
										<br/><br/>
										★ 배송 
										<br/>
										8/12(수) 오전 결제 완료 건까지 →  8/13(목) 배송 예정<br/>
										8/12(수) 오후 결제 완료 건부터 →  8/17(월)부터 순차 배송
										<br/>
										*  상담실 운영 시간 안내 :  8/14일(금) 오후 6시 이후~ 8/17(월)까지는 상담실 운영되지 않아 실시간 취소 도움드리기 어렵습니다. 
										<br/><br/>
										신중한 쇼핑 이용 부탁드립니다.
										8/14(금) 택배 없는 날'로 아래와 같이 배송될 예정이오니 주문 시 참고 부탁드립니다.
										<br/><br/>
										★ 배송 
										<br/>
										8/12(수) 오전 결제 완료 건까지 →  8/13(목) 배송 예정<br/>
										8/12(수) 오후 결제 완료 건부터 →  8/17(월)부터 순차 배송
										<br/>
										*  상담실 운영 시간 안내 :  8/14일(금) 오후 6시 이후~ 8/17(월)까지는 상담실 운영되지 않아 실시간 취소 도움드리기 어렵습니다. 
										<br/><br/>
										신중한 쇼핑 이용 부탁드립니다.
									</div>
								</div>
							</li>
						</ul>
						<div class="slideControl">
							<span class="slidePage"></span>
						</div>
					</div>
				</div>

				<div class="btnWrap">
					<button type="button" class="next">다음</button>
					<button type="button" class="today" onclick="mainPopClose('hide','4388');">오늘 하루 보지 않기</button>
					<button type="button" class="close">닫기</button>
				</div>
			</div>
		</section>
		<!-- //MAIN POPUP-->

		<!-- body -->

		<div class="main">
			<!-- 20.05 텍스트 포함된 슬라이더와 없는 슬라이더 기존과 마크업형태는 동일함-->
			<div class="mainVisualDefault">
				<div class="slide swiper-container">
					<ul class="swiper-wrapper">
						<!-- 텍스트 -->
						<li class="swiper-slide">
							<a href="#">
								<div class="visualImg">
									<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_wide_3.jpg" alt="비쥬얼이미지">
								</div>
								<div class="visualTxt_new">
									<strong class="tit tit1" style="color:#222;">신청하신 프라임 키트</strong><!-- 타이틀1 -->
									<strong class="tit tit2" style="color:#0066cf;">지금 바로 찾아가세요!</strong><!-- 타이틀2 -->
								</div>
							</a>
						</li>
						<!-- <li class="swiper-slide">
							<a href="#">
								<div class="visualImg">
									<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_wide_1.jpg" alt="비쥬얼이미지">
								</div>
								<div class="visualTxt">
									<strong>무게감 없이 착 붙는<br /> 밀착 커버 쿠션1</strong>
									<p>균일하고 뭉침없는 세미매트 결광 피부표현</p>
								</div>
							</a>
						</li> -->
						<!-- 텍스트 없는 기본 -->
						<li class="swiper-slide">
							<a href="#">
								<div class="visualImg">
									<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_wide_2.jpg" alt="비쥬얼이미지">
								</div>
							</a>
						</li>
						<!-- 가로 2단 -->
						<li class="swiper-slide">
							<a href="#">
								<div class="visualImg">
									<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_two_col_1.jpg" alt="비쥬얼이미지">
								</div>
							</a>
							<a href="#">
								<div class="visualImg">
									<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_two_col_2.jpg" alt="비쥬얼이미지">
								</div>
							</a>
						</li>
						<!-- 세로 2단 -->
						<li class="swiper-slide">
							<div class="vertical_col">
								<a href="#">
									<div class="visualImg">
										<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_v_col_1.jpg" alt="비쥬얼이미지">
									</div>
								</a>
								<a href="#">
									<div class="visualImg">
										<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_v_col_2.jpg" alt="비쥬얼이미지">
									</div>
								</a>
							</div>
						</li>
						
						<li class="swiper-slide">
							<a href="#">
								<div class="visualImg">
									<img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/temp/@visual_wide_1.jpg" alt="비쥬얼이미지">
								</div>
							</a>
						</li>
					</ul>
					<div class="slideControl">
						<span class="slidePage"></span>
						<button class="slideAll">전체보기</button>
						<button type="button" class="btnAuto"><span>자동제어버튼</span></button>
					</div>
				</div>
				<div class="allvisual">
					<ul></ul>
					<div class="allClose">
						<a href="#"><span>닫기</span></a>
					</div>
				</div>
			</div>
			<!-- //20.05 텍스트 포함된 슬라이더 -->

			<div class="horizScroll case1">
				<ul>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_skin.png" alt="스킨케어"></div>
							<p class="mTxt">스킨케어</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_face.png" alt="페이스 메이크업"></div>
							<p class="mTxt">페이스 메이크업</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_color.png" alt="컬러 메이크업"></div>
							<p class="mTxt">컬러 메이크업</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_line.png" alt="라인별 제품"></div>
							<p class="mTxt">라인별 제품</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_worry.png" alt="고민별 제품"></div>
							<p class="mTxt">고민별 제품</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_class.png" alt="이니클래스"></div>
							<p class="mTxt">이니클래스</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_my.png" alt="마이레시피바"></div>
							<p class="mTxt">마이레시피바</p>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="mIcon"><img src="/resources/mobile2/images/common/icon_img_membership.png" alt="멤버십"></div>
							<p class="mTxt">멤버십</p>
						</a>
					</li>
				</ul>
			</div>
			<section class="sec5">
				<div class="loginWrap">
					<p class="lgTxt">로그인 하시면 <span class="logoImg"><img src="/resources/mobile2/images/common/innisfree_logo.png" alt="이니스프리"></span>에서<br />고객님께 딱! 맞는 제품을 추천해드립니다.</p>
					<div class="row2">
						<span>
							<button type="button" class="joinBtn">회원가입</button>
						</span>
						<span>
							<button type="button" class="loginBtn">로그인</button>
						</span>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="recommendInnitem">
					<h2>김이니님께 추천하는 이니템</h2>
					<div class="horizScroll case">
						<ul>
							<li>
								<div class="pImg">
									<a href="#"><img src="/resources/mobile2/images/temp/innitem_img01.png" alt="제품명"></a>
									<div class="rk">
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk1.png" alt="수상마크"></span>
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
									</div>
								</div>
								<div class="pWrap">
									<p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
									<p class="pName mgt0"><a href="#">특정 제품 구매 팝업 용암해수 쿨링 팩</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">10,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart" onclick="popBuy(this,'list');">장바구니</button>
									<button type="button" class="card" onclick="popBuy(this,'list');">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg">
									<a href="#"><img src="/resources/mobile2/images/temp/innitem_img02.png" alt="제품명"></a>
									<div class="rk">
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
									</div>
								</div>
								<div class="pWrap">
									<p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
									<p class="pName mgt0"><a href="#">제주 용암해수 크림<br />마스크 60mL</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">14,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg">
									<a href="#"><img src="/resources/mobile2/images/temp/innitem_img03.png" alt="제품명"></a>
								</div>
								<div class="pWrap">
									<p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
									<p class="pName mgt0"><a href="#">퍼스널 원크림</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">35,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="popularProduct">
					<h2>이니스프리 인기 제품</h2>
					<div class="productVideo">
						<!-- 유튜브로 등록 될 경우-->
						<script>
							var yotubeId = 'hiAMDJMuZL4'; // 유튜브 아이디
							var tag = document.createElement('script');
							tag.src = "https://www.youtube.com/iframe_api";
							var firstScriptTag = document.getElementsByTagName('script')[0];
							firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
							var youtubePlayer;
							var btnPlay;
							function onYouTubeIframeAPIReady() {
								youtubePlayer = new YT.Player('youtubePlayer', {
									width: '100%',
									height: '100%',
									videoId: yotubeId,
									playerVars : {
										'controls' : 0,
										'showinfo' : 0,
										'rel' : 0,
										'playsinline' : 1
									},
									events: {
										'onStateChange': onPlayerStateChange
									}
								});
							}
							function onPlayerStateChange(event) {
								if(event.data === 0) {
									btnPlay.fadeIn(1000);
								}
							}
						</script>
						<iframe id="youtubePlayer" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/hiAMDJMuZL4?controls=0&amp;showinfo=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A8181&amp;widgetid=1"></iframe>
						<!-- // -->

						<!-- mp4로 등록 될 경우-->
						<!-- <video src="/resources/web2/images/@video.mp4" id="videoPlayer" poster="/resources/web2/images/main/@vod.jpg"></video> -->
						<!-- // -->
						<button type="button" onclick="vodPlay();" style="display: block;">
							<span class="txt">동영상</span>
							<img src="/resources/web2/images/main/@vod.jpg" alt="">
						</button>
					</div>
					<div class="horizScroll case">
						<ul>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/popularproduct_img01.png" alt="제품명"></a>
									<div class="rk">
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
									</div>
								</div>
								<div class="pWrap">
									<p class="pName mgt0"><a href="#">용암해수 쿨링 팩</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">14,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/popularproduct_img02.png" alt="제품명"></a>
										<div class="rk">
											<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
											<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
										</div>
									</div>
									<div class="pWrap">
										<p class="pName mgt0"><a href="#">제주 용암해수 크림<br />마스크 60mL</a></p>
										<p class="price"><strong class="cost">28,000</strong><strong class="unit">14,000</strong>원<span class="stock">일시품절</span></p>
									</div>
								</a>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/popularproduct_img03.png" alt="제품명"></a></div>
									<div class="pWrap">
										<p class="pName mgt0"><a href="#">제주 용암해수 크림<br />마스크 60mL</a></p>
										<p class="price"><strong class="cost">28,000</strong><strong class="unit">14,000</strong>원<span class="stock">일시품절</span></p>
									</div>
								</a>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="onlineProduct">
					<h2>온라인 전용 제품</h2>
					<div class="horizScroll case6">
						<ul>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/online_img01.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pDesc">햇빛을 물리적으로 반사하는 무기 자외선 차단 성분을 함유하고 연약한 피부에도…</p>
									<p class="pName"><a href="#">트루케어 논나노 논코메도 무기자차 선크림 SPF48 </a></p>
									<p class="price"><strong class="cost">27,000</strong><strong class="unit">10,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/online_img02.png" alt="제품명"></a></div>
									<div class="pWrap">
										<p class="pDesc">햇빛을 물리적으로 반사하는 무기 자외선 차단 성분을 함유하고 연약한 피부에도…</p>
										<p class="pName"><a href="#">트루케어 논나노 논코메도 무기자차 선크림 SPF48 </a></p>
										<p class="price"><strong class="cost">27,000</strong><strong class="unit">14,000</strong>원<span class="stock">일시품절</span></p>
									</div>
								</a>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			
			<!-- 20.05 온라인실시간 랭킹 -->
			<section class="sec5">
				<div class="onRankingWrap">
					<h2>온라인 실시간 랭킹</h2>
					<div class="rankingWrap">
						<ul class="rankingTab">
							<li class="active"><a href="#">실시간 판매 랭킹</a></li>
							<li><a href="#">실시간 VIEW 랭킹</a></li>
						</ul>
						<div class="rankingCont">
						
							<!-- 1번째 탭 -->
							<div class="rankingList">
								<div class="cateWrap">
									<ul>
										<li class="active"><a href="#">전체</a></li>
										<li><a href="#">스킨케어</a></li>
										<li><a href="#">팩/마스크</a></li>
										<li><a href="#">페이스 메이크업</a></li>
										<li><a href="#">컬러 메이크업</a></li>
										<li><a href="#">클렌징</a></li>
										<li><a href="#">바디</a></li>
										<li><a href="#">네일</a></li>
										<li><a href="#">헤어</a></li>
										<li><a href="#">방향</a></li>
										<li><a href="#">남성</a></li>
										<li><a href="#">기획세트</a></li>
									</ul>
									<div class="high"></div>
								</div>
								
								<!-- swiper-container -->
								<div class="swiper-container swiper2">
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<ul class="rolling">
												<li><a href="#"><em class="num">1</em>블루베리 리밸런싱5.5클렌저</a></li>
												<li><a href="#"><em class="num">2</em>트루케어 논나노 논코메도 무기자차 선 트루케어 논나노 논코메도 무기자차 선</a></li>
												<li><a href="#"><em class="num">3</em>제주 용암해수 크림 마스크</a></li>
												<li><a href="#"><em class="num">4</em>제주 용암해수 크림 마스크</a></li>
												<li><a href="#"><em class="num">5</em>제주 용암해수 크림 마스크</a></li>
											</ul>
										</div>

									</div>
								</div>
							</div>

							<!-- 2번째 탭 -->
							<div class="rankingList">
								<!-- swiper-container -->
								<div class="swiper-container swiper3">
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<ul class="rolling">
												<li><a href="#"><em class="num">1</em><span class="purchase">167<em>명</em></span>용암해수 쿨링팩</a></li>
												<li><a href="#"><em class="num">2</em><span class="purchase">8590<em>명</em></span>블루베리 클렌징 패키지 클렌징 패키지</a></li>
												<li><a href="#"><em class="num">3</em><span class="purchase">8590<em>명</em></span>제주 용암해수 크림 마스크</a></li>
												<li><a href="#"><em class="num">4</em><span class="purchase">8590<em>명</em></span>제주 용암해수 크림 마스크</a></li>
												<li><a href="#"><em class="num">5</em><span class="purchase">8590<em>명</em></span>제주 용암해수 크림 마스크</a></li>
											</ul>
										</div>

										<div class="swiper-slide">
											<ul class="rolling">
												<li><a href="#"><em class="num">6</em><span class="purchase">8590<em>명</em></span>제주 용암해수 크림 마스크</a></li>
												<li><a href="#"><em class="num">7</em><span class="purchase">8590<em>명</em></span>제주 용암해수 크림 마스크</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- //20.05 온라인실시간 랭킹 -->

			<section class="sec5">
				<ul class="productBanner">
					<li><a href="#"><img src="/resources/mobile2/images/temp/banner_img01.jpg" alt="배너이미지"></a></li>
					<li><a href="#"><img src="/resources/mobile2/images/temp/banner_img02.jpg" alt="배너이미지"></a></li>
					<li><a href="#"><img src="/resources/mobile2/images/temp/banner_img03.jpg" alt="배너이미지"></a></li>
				</ul>
			</section>
			<section class="sec5">
				<div class="mdProduct">
					<h2>엠디 추천 제품</h2>
					<div class="horizScroll case4">
						<ul>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/mdproduct_img01.jpg" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pDesc2">20가지 스킨케어 솔루션</p>
									<p class="pName mgt0"><a href="#">베지 워터 토닝 앰플 & 베미스트<br />50ml + 120ml</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">39,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/mdproduct_img02.jpg" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pDesc2">20가지 스킨케어 솔루션</p>
									<p class="pName mgt0"><a href="#">퍼스널 원크림</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">39,000</strong>원</p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="hotProduct">
					<h2>HOT DEAL</h2>
					<div class="horizScroll case">
						<ul>
							<li>
								<div class="pImg">
									<div class="stateWrap">
										<p class="stateR">1+1</p>
									</div>
									<a href="#"><img src="/resources/mobile2/images/temp/innitem_img01.png" alt="제품명"></a>
									<div class="rk">
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
									</div>
								</div>
								<div class="pWrap">
									<p class="pDesc2">2개 구매 시 반값 결제</p>
									<p class="pName mgt0"><a href="#">베지 워터 토닝 앰플 & 베<br />미스트 50ml + 120mlaaaaaa</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">10,000</strong>원<span class="stock">일시품절</span></p>
									<div class="productStyle">
										<span class="pNew">NEW</span>
										<span class="pGift">GIFT</span>
										<span class="pSale">SALE</span>
										<span class="pLimit">한정수량</span>
										<span class="pMeasure">대용량</span>
										<span class="pShip">정기배송</span>
									</div>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg">
									<div class="stateWrap">
										<p class="stateR">1+1</p>
									</div>
									<a href="#"><img src="/resources/mobile2/images/temp/innitem_img02.png" alt="제품명"></a>
								</div>
								<div class="pWrap">
									<p class="pDesc2">2개 구매 시 반값 결제</p>
									<p class="pName mgt0"><a href="#">퍼스널 원크림</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">14,000</strong>원<span class="stock">일시품절</span></p>
									<div class="productStyle">
										<span class="pSale">SALE</span>
									</div>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg">
									<div class="discount">50%</div>
									<a href="#"><img src="/resources/mobile2/images/temp/innitem_img03.png" alt="제품명"></a>
								</div>
								<div class="pWrap">
									<p class="pDesc2">2개 구매 시 반값 결제</p>
									<p class="pName mgt0"><a href="#">퍼스널 원크림</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">35,000</strong>원<span class="stock">일시품절</span></p>
									<div class="productStyle">
										<span class="pNew">NEW</span>
										<span class="pGift">GIFT</span>
										<span class="pSale">SALE</span>
									</div>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="realReview">
					<h2>리얼 리뷰</h2>
					<div class="realReviewBg">
						<div class="realSlide">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<div class="realReviewWrap">
										<a href="#">
											<div class="realImg">
												<div class="realPos">
													<img src="/resources/mobile2/images/temp/real_img.jpg" alt="제품명">
													<div class="imgInfor"><span>18</span></div>
												</div>
											</div>
											<div class="realWrap">
												<div class="inforWrap">
													<div class="inforIcon"><img src="/resources/mobile2/images/temp/icon_character.png" alt="캐릭터이미지"></div>
													<div class="writerInfor">
														<p class="writerId"><span class="lv">3</span>푸른밤</p>
														<p class="date">19-07-02</p>
													</div>
												</div>
												<p class="realTxt"><span class="best">best</span>적은 용량이라 휴대도 간편해서 여행 갈때 기초케어 대신 챙기기도 좋고 특히 여름에  자극받은 피부를 진정 시키기 좋아요. 냉장고에 넣어뒀다 쓰면 정말 좋거든요! 그리고 무엇보다 알로에보다 덜 끈적여서 더 괜찮았어요.</p>
												<span class="reviewPoint"><span style="width:50%;">2.5점</span></span>
											</div>
										</a>
										<div class="realMore">
											<a href="reviewPage.jsp">더보기</a>
										</div>
									</div>
									<div class="reviewPro">
										<div class="rPimg"><a href="#"><img src="/resources/mobile2/images/temp/review_img.png" alt="제품명"></a></div>
										<div class="rPwrap">
											<p class="rPtxt"><a href="#">베지 워터 토닝 앰플 & 베지 워터 토닝 미스트 50mL+120mL</a></p>
											<p class="rprice"><strong class="cost">28,000</strong><span><strong class="unit">23,000</strong>원</span><span class="stock">일시품절</span></p>
											<div class="way">
												<button type="button" class="cart">장바구니</button>
												<button type="button" class="card">바로구매</button>
											</div>
										</div>
									</div>
								</li>
								<li class="swiper-slide">
									<div class="realReviewWrap">
										<a href="#">
											<div class="realImg">
												<div class="realPos">
													<img src="/resources/mobile2/images/temp/real_img.jpg" alt="제품명">
													<div class="imgInfor"><span>18</span></div>
												</div>
											</div>
											<div class="realWrap">
												<div class="inforWrap">
													<div class="writerInfor">
														<p class="p24">blu*******</p>
														<p class="date">19-07-02</p>
													</div>
												</div>
												<p class="realTxt">적은 용량이라 휴대도 간편해서 여행 갈때 기초케어 대신 챙기기도 좋고 특히 여름에  자극받은 피부를 진정 시키기 좋아요. 냉장고에 넣어뒀다 쓰면 정말 좋거든요! 그리고 무엇보다 알로에보다 덜 끈적여서 더 괜찮았어요.</p>
												<ul class="star">
													<li class="on"><span></span></li>
													<li><span></span></li>
													<li><span></span></li>
													<li><span></span></li>
													<li><span></span></li>
												</ul>
											</div>
										</a>
										<div class="realMore">
											<a href="reviewPage.jsp">더보기</a>
										</div>
									</div>
									<div class="reviewPro">
										<div class="rPimg"><a href="#"><img src="/resources/mobile2/images/temp/review_img.png" alt="제품명"></a></div>
										<div class="rPwrap">
											<p class="rPtxt"><a href="#">베지 워터 토닝 앰플 & 베지 워터 토닝 미스트 50mL+120mL</a></p>
											<p class="rprice"><strong class="cost">28,000</strong><span><strong class="unit">23,000</strong>원</span><span class="stock">일시품절</span></p>
											<div class="way">
												<button type="button" class="cart">장바구니</button>
												<button type="button" class="card">바로구매</button>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="swiper-scrollbar"></div>
					</div>
				</div>
				<script>
					realReview();
				</script>
			</section>
			<section class="sec5">
				<div class="myShop">
					<h2>MY SHOP</h2>
					<div class="myshopWrap">
						<div class="myshopImg"><img src="/resources/mobile2/images/temp/myshop_bimg.jpg" alt="MY SHOP innisfree"></div>
						<div class="myshopTxt">
							<strong>잠깐! MY SHOP은 등록 하셨나요?</strong>
							<p>자주 가는 매장을 등록하시면 MY SHOP만의 특별한 혜택을 받으실 수 있습니다!</p>
							<button class="resis">MY SHOP 등록하기</button>
						</div>
					</div>
					<div class="horizScroll case8">
						<ul>
							<li>
								<div class="pImg">
									<a href="#"><img src="/resources/mobile2/images/temp/myshop_img01.png" alt="제품명"></a>
									<div class="rk">
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk1.png" alt="수상마크"></span>
										<span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
									</div>
								</div>
								<div class="pWrap">
									<p class="pName"><a href="#">링클 사이언스 아이<br />크림 30mL</a></p>
								</div>
							</li>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/myshop_img02.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pName"><a href="#">제주 라이프 퍼퓸드<br />핸드 크림 9월...</a></p>
								</div>
							</li>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/myshop_img03.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pName"><a href="#">그린티 클렌징 젤 <br />투 폼 150mL</a></p>
								</div>
							</li>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/myshop_img04.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pName"><a href="#">제주 라이프 퍼퓸드<br />핸드 크림 9월...</a></p>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="newProduct">
					<h2>새로운 제품</h2>
					<div class="horizScroll case6">
						<ul>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/newproduct_img01.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pName"><a href="#">마이 메이크업 클렌저<br />미셀라 오일</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">35,000</strong>원<span class="stock">일시품절</span></p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/newproduct_img02.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pName"><a href="#">마이 메이크업 클렌저<br />미셀라 오일aaaaaaaaaaaa</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">35,000</strong>원</p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<div class="pImg"><a href="#"><img src="/resources/mobile2/images/temp/newproduct_img02.png" alt="제품명"></a></div>
								<div class="pWrap">
									<p class="pName"><a href="#">마이 메이크업 클렌저<br />미셀라 오일</a></p>
									<p class="price"><strong class="cost">28,000</strong><strong class="unit">35,000</strong>원</p>
								</div>
								<div class="way">
									<button type="button" class="hart" onclick="wishSel();">찜</button>
									<button type="button" class="cart">장바구니</button>
									<button type="button" class="card">바로구매</button>
								</div>
							</li>
							<li>
								<a href="#" class="productMore"><span>제품 더보기</span></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="sec5">
				<div class="innisfreePut">
					<div class="inniSlide">
						<div class="slide">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<a href="#">
										<img src="/resources/mobile2/images/temp/slider_img1.jpg" alt="제품명">
										<div class="txt">
											<strong>용암해수 딥 크림의 <br />수분 활성 에너지</strong>
											<span>#여름안티에징 찰떡템</span>
										</div>
									</a>
								</li>
								<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/slider_img.jpg" alt="제품명"></a></li>
								<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/slider_img.jpg" alt="제품명"></a></li>
							</ul>
						</div>
						<div class="slideControl">
							<span class="slidePage"></span>
						</div>
					</div>
					<script>
						creamSlide();
					</script>
				</div>
			</section>
			<section class="sec5">
				<div class="innisfreeNews">
					<h2>이니스프리 소식</h2>
					<p class="instalog">Innisfree.instalog</p>
					<div class="instaSlide">
						<ul class="swiper-wrapper">
							<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/instalog_img01.jpg" alt="제품명"></a></li>
							<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/instalog_img02.jpg" alt="제품명"></a></li>
							<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/instalog_img03.jpg" alt="제품명"></a></li>
						</ul>
					</div>
				</div> 
					<script>
						innisfreeNews();
					</script>
				<div class="innisfreeOfficial">
					<p class="instalog">Innisfree.instalog</p>
					<div class="instaSlide">
						<ul class="swiper-wrapper">
							<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/instalog_img04.jpg" alt="제품명"></a></li>
							<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/instalog_img05.jpg" alt="제품명"></a></li>
							<li class="swiper-slide"><a href="#"><img src="/resources/mobile2/images/temp/instalog_img06.jpg" alt="제품명"></a></li>
						</ul>
					</div>
					<script>
						innisfreeOfficial();
					</script>
				</div>
			</section>
			<section class="sec5">
				<div class="memberShip">
					<h2>멤버십 혜택 안내</h2>
					<p class="desc">이니스프리에서는 이런 혜택을 드려요!</p>
					<p class="desc">(8/12일까지 적용, 새로운 멤버십이 8/13일부터 시작됩니다.)</p>
					<div class="memberGuide">
						<ul>
							<li>
								<div class="iconGuide"><img src="/resources/mobile2/images/common/icon_membership.png" alt="멤버십데이 혜택"></div>
								<p class="guideTxt">멤버십데이 혜택</p>
								<p class="guideDesc">최대 30%할인</p>
							</li>
							<li>
								<div class="iconGuide"><img src="/resources/mobile2/images/common/icon_secretcoupon.png" alt="시크릿쿠폰"></div>
								<p class="guideTxt">시크릿쿠폰</p>
								<p class="guideDesc">월1회 할인쿠폰제공</p>
							</li>
							<li>
								<div class="iconGuide"><img src="/resources/mobile2/images/common/icon_purchase.png" alt="구매 적립"></div>
								<p class="guideTxt">구매 적립</p>
								<p class="guideDesc">구매 금액 1% 적립</p>
							</li>
							<li>
								<div class="iconGuide"><img src="/resources/mobile2/images/common/icon_birthday.png" alt="구매 금액 1% 적립"></div>
								<p class="guideTxt">생일 혜택</p>
								<p class="guideDesc">40% 할인 쿠폰 지급</p>
							</li>
							<li>
								<div class="iconGuide"><img src="/resources/mobile2/images/common/icon_greenteakit.png" alt="우수회원키트 제공"></div>
								<p class="guideTxt">우수회원키트 제공</p>
								<p class="guideDesc">연 2회</p>
							</li>
							<li>
								<div class="iconGuide"><img src="/resources/mobile2/images/common/icon_myshop.png" alt="MY SHOP 혜택"></div>
								<p class="guideTxt">MY SHOP 혜택</p>
								<p class="guideDesc">상품 할인 및 쿠폰 지급</p>
							</li>
						</ul>
					</div>
					<div class="memberMore">
						<a href="#">더보기</a>
					</div>
				</div>
			</section>
		</div>
		<!-- //body -->
		<!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
		<!-- quickmenu -->
		<jsp:include page="/html_mo/include/quickmenu.jsp" />
		<!-- //quickmenu -->
	</div>
</body>
</html>