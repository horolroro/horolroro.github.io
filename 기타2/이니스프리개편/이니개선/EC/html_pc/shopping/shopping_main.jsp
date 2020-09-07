<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "이니스프리";
	String description = "피부에 휴식을 주는 섬 자연주의 화장품 브랜드 이니스프리의 온라인 화장품 쇼핑몰입니다.";
	String keyword = "화장품 쇼핑몰, 스킨케어, 메이크업, 마스크팩, 바디, 헤어, 남성화장품, 맨스토어, 마이쿠션, 추천제품,기획전, 이벤트";
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
		
		<!-- 메인 팝업 -->
		<jsp:include page="popup_mainslide.jsp" />
		<!-- //메인 팝업 -->
		
		<div id="container">
			<!-- 상단 비쥬얼 영역 -->
			<div class="keyVisualSlide">
				<div class="slide">				
					<ul class="swiper-wrapper">
						<!-- 1단구성 -->
						<li class="swiper-slide">
							<div class="box">
								<a href="#" class="left">
									<div class="txtWrap">
										<span class="cate">이니스프리 X TOSS</span><!-- 카테고리명 -->
										<strong class="tit tit1" style="color:#222;">TOSS 결제 도입 기념</strong><!-- 타이틀1 -->
										<strong class="tit tit2" style="color:#0050ff;">즉시할인 혜택!</strong><!-- 타이틀2 -->
										<span class="subtit subtit1" style="color:#555;">2만원 이상 구매시 3천원 즉시할인 혜택 제공</span><!-- 서브타이틀1 -->
										<span class="subtit subtit2" style="color:#555;">6/1(월) ~ 금액 소진 시 종료</span><!-- 서브타이틀2 -->
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual1.jpg" alt="TOSS 결제 도입 기념 즉시할인 혜택!">
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box">
								<a href="#" class="center">
									<div class="txtWrap">
										<span class="cate">릴레이 특가</span>
										<strong class="tit tit1" style="color:#222;">스트레스 받는 피부를 위한</strong>
										<strong class="tit tit2" style="color:#0050ff;">#간절템</strong>
										<span class="subtit subtit1" style="color:#555;">1,000개 한정, 비자트러블 SET 특가도 놓치지 마세요.</span>
										<span class="subtit subtit2" style="color:#555;">6/4(목) ~ 6/7(일)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual2.jpg" alt="TOSS 결제 도입 기념 즉시할인 혜택!">
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box">
								<a href="#" class="right">
									<div class="txtWrap">
										<span class="cate">주목하세요! 6월의 신상</span>
										<strong class="tit tit1" style="color:#222;">12시간 #깃털컬링</strong>
										<strong class="tit tit2" style="color:#c7684c;">NEW 심플라벨 마스카라</strong>
										<span class="subtit subtit1" style="color:#555;">눈이 편한 #저자극마스카라 를 만나보세요</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual3.jpg" alt="심플라벨 마스카라">
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box cloumn2"><!-- 2단 구성 cloumn2 -->
								<a href="#" class="left" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">공식온라인몰 신규회원 혜택</span>
										<strong class="tit tit1" style="color:#222;">이니스프리 두근두근</strong>
										<strong class="tit tit2" style="color:#fb6362;">첫 만남 SUM~혜택</strong>
										<span class="subtit subtit1" style="color:#555;">스페셜 쿠폰팩, 무료배송 혜택, 첫 구매 1천원 상품까지!</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual4.jpg" alt="">
									</div>
								</a>
								<a href="#" class="left" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">MY SHOP 등록 고객 대상</span>
										<strong class="tit tit1" style="color:#222;">APP푸시 수신동의하고</strong>
										<strong class="tit tit2" style="color:#2877d6;">이 달의 쇼핑 쿠폰 받으세요!</strong>
										<span class="subtit subtit1" style="color:#555;">2,000원 중복할인쿠폰으로 더 알뜰한 쇼핑~</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual4_2.jpg" alt="" class="img">
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box cloumn2"><!-- 2단 구성 cloumn2 -->
								<a href="#" class="center" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">공식온라인몰 신규회원 혜택</span>
										<strong class="tit tit1" style="color:#222;">이니스프리 두근두근</strong>
										<strong class="tit tit2" style="color:#fb6362;">첫 만남 SUM~혜택</strong>
										<span class="subtit subtit1" style="color:#555;">스페셜 쿠폰팩, 무료배송 혜택, 첫 구매 1천원 상품까지!</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual4.jpg" alt="">
									</div>
								</a>
								<a href="#" class="center" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">MY SHOP 등록 고객 대상</span>
										<strong class="tit tit1" style="color:#222;">APP푸시 수신동의하고</strong>
										<strong class="tit tit2" style="color:#2877d6;">이 달의 쇼핑 쿠폰 받으세요!</strong>
										<span class="subtit subtit1" style="color:#555;">2,000원 중복할인쿠폰으로 더 알뜰한 쇼핑~</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual4_2.jpg" alt="" class="img">
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box cloumn2"><!-- 2단 구성 cloumn2 -->
								<a href="#" class="right" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">공식온라인몰 신규회원 혜택</span>
										<strong class="tit tit1" style="color:#222;">이니스프리 두근두근</strong>
										<strong class="tit tit2" style="color:#fb6362;">첫 만남 SUM~혜택</strong>
										<span class="subtit subtit1" style="color:#555;">스페셜 쿠폰팩, 무료배송 혜택, 첫 구매 1천원 상품까지!</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual4.jpg" alt="">
									</div>
								</a>
								<a href="#" class="right" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">MY SHOP 등록 고객 대상</span>
										<strong class="tit tit1" style="color:#222;">APP푸시 수신동의하고</strong>
										<strong class="tit tit2" style="color:#2877d6;">이 달의 쇼핑 쿠폰 받으세요!</strong>
										<span class="subtit subtit1" style="color:#555;">2,000원 중복할인쿠폰으로 더 알뜰한 쇼핑~</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual4_2.jpg" alt="" class="img">
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box cloumn3"> <!-- 3단 형태 cloumn3 -->
								<a href="#" class="left" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">공식온라인몰 신규회원 혜택</span>
										<strong class="tit tit1" style="color:#222;">이니스프리 두근두근</strong>
										<strong class="tit tit2" style="color:#fb6362;">첫 만남 SUM~혜택</strong>
										<span class="subtit subtit1" style="color:#555;">스페셜 쿠폰팩, 무료배송 혜택, 첫 구매 1천원 상품까지!</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual5.jpg" alt="" class="img">
									</div>
								</a>
								<a href="#" class="center onePrd" style="background:#eedbd3;"> <!-- 제품 하나 일 경우 onePrd 추가 -->
									<div class="inner"> <!-- inner -->
										<div class="imgWrap">
											<img src="/resources/web2/images/main/@pdt_img11.png" alt="" class="img">
										</div>
										<div class="txtWrap"> 
											<span class="name" style="color:#222;">마이 컨실러 [스팟 커버] 5.5g</span>
											<span class="hash" style="color:#fb6362;">
												<span>#화산송이</span>
												<span>#피지케어</span>
												<span>#모공청소기</span>
											</span>
										</div>
									</div>
								</a>
							</div>
						</li>
						
						<li class="swiper-slide">
							<div class="box cloumn3"> <!-- 3단 형태 cloumn3 -->
								<a href="#" class="center" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">공식온라인몰 신규회원 혜택</span>
										<strong class="tit tit1" style="color:#222;">이니스프리 두근두근</strong>
										<strong class="tit tit2" style="color:#fb6362;">첫 만남 SUM~혜택</strong>
										<span class="subtit subtit1" style="color:#555;">스페셜 쿠폰팩, 무료배송 혜택, 첫 구매 1천원 상품까지!</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual5.jpg" alt="" class="img">
									</div>
								</a>
								<a href="#" class="center onePrd" style="background:#eedbd3;"> <!-- 제품 하나 일 경우 onePrd 추가 -->
									<div class="inner"> <!-- inner -->
										<div class="imgWrap">
											<img src="/resources/web2/images/main/@pdt_img11.png" alt="" class="img">
										</div>
										<div class="txtWrap"> 
											<span class="name" style="color:#222;">마이 컨실러 [스팟 커버] 5.5g</span>
											<span class="hash" style="color:#fb6362;">
												<span>#화산송이</span>
												<span>#피지케어</span>
												<span>#모공청소기</span>
											</span>
										</div>
									</div>
								</a>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="box cloumn3"> <!-- 3단 형태 cloumn3 -->
								<a href="#" class="right" style="background:#fff;">
									<div class="txtWrap">
										<span class="cate">공식온라인몰 신규회원 혜택</span>
										<strong class="tit tit1" style="color:#222;">이니스프리 두근두근</strong>
										<strong class="tit tit2" style="color:#fb6362;">첫 만남 SUM~혜택</strong>
										<span class="subtit subtit1" style="color:#555;">스페셜 쿠폰팩, 무료배송 혜택, 첫 구매 1천원 상품까지!</span>
										<span class="subtit subtit2" style="color:#555;">6/1 (월) ~ 6/30 (화)</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual5_2.jpg" alt="" class="img">
									</div>
								</a>
								<a href="#" class="center" style="background:#eedbd3;">
									<div class="txtWrap">
										<span class="name" style="color:#222;">마이 컨실러 [스팟 커버] 5.5g</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual5_3.jpg" alt="" class="img">
									</div>
								</a>
								<a href="#" class="center" style="background:#eedbd3;">
									<div class="txtWrap">
										<span class="name" style="color:#222;">포어 블러 팩트 12.5g</span>
									</div>
									<div class="imgWrap">
										<img src="/resources/web2/images/main/@key_visual5_3.jpg" alt="" class="img">
									</div>
								</a>
							</div>
						</li>
						
					</ul>
				</div>
				<div class="slideControl">
					<div class="inner">
						<span class="slidePage"></span>
						<button type="button" class="btnAuto">자동제어버튼</button>
					</div>
				</div>
			</div>
			<script>
				keyVisualSlide();
			</script>
			<!-- //상단 비쥬얼 영역 -->

			<!-- 이니템 -->
			<section class="innitemSection">

				<!-- 로그인 전-->
				<div class="loginRequestBox">
					<p>로그인 하시면 <img src="/resources/web2/images/main/logo_innisfree.png" alt="이니스프리">에서 고객님께 딱! 맞는 상품을 추천해드립니다.</p>
					<a href="#" class="btnType1">회원가입</a>
					<a href="#" class="btnType2">로그인</a>
				</div>

				<!-- 로그인 후-->
				<h2 class="subTitle">김이니님께 추천하는 이니템</h2>
				<div class="innitemSlide">
					<div class="pdtListType contWrap">
						<div class="slide">
							<ul class="swiper-wrapper">
								<jsp:include page="list1.jsp" />
							</ul>
						</div>
						<a href="#" class="pdtMore">제품 더보기</a>
					</div>
					<div class="slideBtn">
						<button type="button" class="btnPrev">이전 슬라이드</button>
						<button type="button" class="btnNext">다음 슬라이드</button>
					</div>
				</div>
				<script>
					innitemSlide();
				</script>
			</section>
			<!-- //이니템 -->

			<!-- 인기 상품 -->
			<section class="popularSection">
				<h2 class="subTitle">이니스프리 인기 제품</h2>
				<div class="contWrap">
					<div class="pdtListType2">
						<ul>
							<jsp:include page="list2.jsp" />
						</ul>
					</div>
				</div>
			</section>
			<!-- //인기 상품 -->

			<!-- 온라인 전용관 -->
			<section>
				<h2 class="subTitle">온라인 전용관</h2>
				<div class="bgWrap">
					<div class="bestSeller">
						<div class="contWrap">
							<div class="slide">
								<div class="swiper-wrapper">
									<!--  제품별 영역 -->
									<section class="swiper-slide">
										<div class="pdtCont">
											<a href="#">
												<span class="name">트루케어 모이스트<br>리커버리 로션 200ML</span>
												<span class="txt">2자연 유래 보습 성분인 동백 오일이 깊은 수분을<br> 공급하고 피부 장벽 강화에 도움을 주는 저자극 로션 공급하고 피부 장벽 강화에 도움을 주는 저자극 로션</span>
												<span class="price">
													<del class="regular">20,000</del>
													<span class="num">36,000</span>원
													<span class="soldOut">일시품절</span>
												</span>
											</a>
											<div class="pdtUtil">
												<a href="#" class="iconOpen" target="_blank">새 창</a>
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</div>
										</div>
										<a href="#" class="pdtImg">
											<img src="/resources/web2/images/main/@pdt_img9.png" alt="제품명">
										</a>
										<div class="reviewBox">
											<p class="reviewTit">이 제품의 리얼 리뷰</p>
											<div class="reviewList">
												<ul>
													<li>
														<a href="#">
															<span class="reviewPoint">
																<span style="width:100%;">5점</span>
															</span>
															<span class="txt">트루케어라인은 출시될때 부터 반신반의 하며 주문했는데 .. 클렌징부터 모든 기초가 이젠 트루케어 아님 안되요 !! 왼전 고보습인데 , 번들 노노 , 끈적 노노! 여름에도 딱 좋아요</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="reviewPoint">
																<span style="width:0%;">0</span>
															</span>
															<span class="txt">트루케어라인은 출시될때 부터 반신반의 하며 주문했는데 .. 클렌징부터 모든 기초가 이젠 트루케어 아님 안되요 !! 왼전 고보습인데 , 번들 노노 , 끈적 노노! 여름에도 딱 좋아요</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="reviewPoint">
																<span style="width:60%;">2.5점</span>
															</span>
															<span class="txt">트루케어라인은 출시될때 부터 반신반의 하며 주문했는데 .. 클렌징부터 모든 기초가 이젠 트루케어 아님 안되요 !! 왼전 고보습인데 , 번들 노노 , 끈적 노노! 여름에도 딱 좋아요트루케어라인은 출시될때 부터 반신반의 하며 주문했는데 .. 클렌징부터 모든 기초가 이젠 트루케어 아님 안되요 !! 왼전 고보습인데 , 번들 노노 , 끈적 노노! 여름에도 딱 좋아요</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</section>
									<!-- // -->
								</div>
							</div>
							<a href="#" class="pdtMore">제품 더보기</a>
						</div>
						<div class="slideBtn">
							<button type="button" class="btnPrev">이전 제품</button>
							<button type="button" class="btnNext">다음 제품</button>
						</div>
					</div>
					<script>
						bestSellerSlide();
					</script>
				</div>
			</section>
			<!-- //온라인 전용관 -->

			<!-- 실시간 랭킹 -->
			<%-- <section class="realTimeRanking">
				<h2 class="subTitle">실시간 랭킹</h2>
				<div class="contWrap">
					<div class="rankingWrap">
						<div class="rankingTab">
							<span class="active"><button type="button">실시간 온라인 판매 랭킹</button></span>
							<span><button type="button">실시간 VIEW 랭킹</button></span>
						</div>
						<div class="rankingCont">
							<jsp:include page="list3.jsp" />
						</div>
					</div>
					<script>
						ranking('.rankingWrap');
					</script>
				</div>
			</section> --%>
			<!-- //실시간 랭킹 -->

			<!-- 20.05 실시간 랭킹 시작-->
			<section class="onRanking">
				<h2 class="subTitle">온라인실시간 랭킹</h2>
				<div class="onRankingWrap">
					<div class="rankTab">
						<ul class="tab-menu">
							<li><a href="메인.html" class="active">실시간 판매 랭킹</a></li>
							<li><a href="메인_2.html">실시간 VIEW 랭킹</a></li>
						</ul>
					</div>
					
					<div class="tab-content">
						<!-- 탭1 실시간 온라인 판매 랭킹:TAB 1-->
						<div id="tab-1" class="tab_cont active">
							<div class="cate_wrap">
								<div class="contWrap cate">
									<ul>
										<li><a href="#">전체</a></li>
										<li><a href="#">스킨케어</a></li>
										<li><a href="#">팩/마스크</a></li>
										<li class="active"><a href="#">페이스 메이크업</a></li>
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
							</div>
							<!-- swiper-container -->
							<div class="swiper-container swiper2">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="/resources/web2/images/common/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">1</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/15116_l_S_450.png?202004290840" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="/resources/web2/images/common/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">2</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/26676_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<img class="ic_bestCrown" src="/resources/web2/images/common/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">3</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/20864_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">4</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26116_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">5</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26458_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">6</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">7</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">8</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">9</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">10</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
								</div>

								<!-- navi -->
								<div class="slide_control">
									<div class="swiper-button-prev">이전 제품</div>
									<div class="swiper-button-next">다음 제품</div>
									<button class="btn_autoplay">자동제어버튼</button>
								</div>
							</div>
							<!-- //swiper-container -->
						</div>
						<!-- //실시간 VIEW 랭킹-->

						<!-- 2번째 탭 내용 -->
						<!-- 탭2 실시간 VIEW 랭킹-->
						<div id="tab-2" class="tab_cont">
							<!-- swiper-container -->
							<div class="swiper-container swiper3">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="/resources/web2/images/common/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">1</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/26518_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<!-- 1등 상품에 붙는 아이콘 -->
														<img class="ic_bestCrown" src="/resources/web2/images/common/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">2</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/26676_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<img class="ic_bestCrown" src="/resources/web2/images/common/icon_crown.png" alt="1위상품">
														<strong class="stikerType_1">3</strong>
													</span>
													<span class="labelWrap"></span>
													<!-- 이미지 사이즈 300 * 300 -->
													<img src="https://images.innisfree.co.kr/upload/product/20864_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">4</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26116_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">5</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/26458_l_S_250.png?202004290207" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
			
									<div class="swiper-slide">
										<div class="pdtListType pdtListSub">
											<span class="pdtOver">
												<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtImg" tabindex="0">
													<span class="stikerWrap">
														<strong class="stikerType_1">6</strong>
													</span>
													<span class="labelWrap"></span>
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" alt="비비드 슬림핏 틴트" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
													<img src="https://images.innisfree.co.kr/upload/product/24876_l_S_320.png?202004290100" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
												</a>
												<span class="pdtUtil">
													<a href="/kr/ko/ProductView.do?prdSeq=24876" class="iconOpen" target="_blank" tabindex="0">새 창</a>
													<button type="button" class="iconZzim " onclick="$.jhead.fnChkLoginPagePopAlert();" tabindex="0">찜</button>
													<button type="button" class="iconCart" onclick="javascript:openPreview('24876', 'POPCART');" tabindex="0">장바구니</button>
													<button type="button" class="iconBuy" onclick="javascript:openPreview('24876', 'ORDER');" tabindex="0">바로구매</button>
												</span>
											</span>
											<a href="/kr/ko/ProductView.do?prdSeq=24876" class="pdtCont" tabindex="0">
												<span class="purchase">8590<em>명</em></span>
												<span class="name">모이스트윈터베리어 선스크린 SPF50+ PA++++</span>
												<span class="price">
													<span class="num">9,000</span>원
													<del class="regular">32,000</del>
												</span>
												<span class="pdtStatus"></span>
											</a>
										</div>
									</div>
								</div>
			
								<!-- navi -->
								<div class="slide_control">
									<div class="swiper-button-prev">이전 제품</div>
									<div class="swiper-button-next">다음 제품</div>
									<button class="btn_autoplay">자동제어버튼</button>
								</div>
							
							</div>
							<!-- //swiper-container -->
						</div>
						<!-- //실시간 VIEW 랭킹-->
					</div>
				</div>
			</section>
			<!-- //20.05 실시간 랭킹 끝 -->

			<!-- 배너 -->
			<div class="mainBannerSlide mainBanner1">
				<div class="slide">
					<ul class="swiper-wrapper">
						<li class="swiper-slide">
							<a href="#" style="background: #f889a8">
								<span class="img"><img src="/resources/web2/images/main/@banner2.jpg" alt="배너내용"></span>
								<span class="txt">
									<strong>타이틀<br>타이틀</strong>
									<span>서브내용<br>서브내용</span>
								</span>
							</a>
						</li>
						<li class="swiper-slide"><a href="#" style="background: #449bed;"><img src="/resources/web2/images/main/@banner1.jpg" alt="배너내용"></a></li>
						<li class="swiper-slide"><a href="#" style="background: #f889a8;"><img src="/resources/web2/images/main/@banner2.jpg" alt="배너내용"></a></li>
						<li class="swiper-slide">
							<a href="#" style="background: #000 url('/resources/web2/images/main/@banner3.jpg') no-repeat 50% 50%;">
								<span class="txt">
									<strong>타이틀<br>타이틀</strong>
									<span>서브내용<br>서브내용</span>
								</span>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="#" style="background: #000 url('/resources/web2/images/main/@banner4.jpg') no-repeat 50% 50%;">
								<span class="txt">
									<strong>타이틀</strong>
									<span>서브내용</span>
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="slidePage"></div>
				<script>
					bannerSlide('mainBanner1');
				</script>
			</div>
			<!-- //배너 -->

			<!-- 엠디 추천 상품 -->
			<section class="mdRecomSlide">
				<h2 class="subTitle">엠디 추천 제품</h2>
				
				<div class="contWrap">
					<div class="slide">
						<ul class="swiper-wrapper">
							<jsp:include page="list5.jsp" />
						</ul>
					</div>
					<div class="slideBtn">
						<button type="button" class="btnPrev">이전 슬라이드</button>
						<button type="button" class="btnNext">다음 슬라이드</button>
					</div>
				</div>
				<script>
					mdRecomSlide();
				</script>

			</section>
			<!-- //엠디 추천 상품 -->

			<!-- HOT DEAL -->
			<section class="mainHotDeal">
				<h2 class="subTitle">HOT DEAL</h2>
				<div class="contWrap">
					<div class="slide pdtListType">
						<ul class="swiper-wrapper">
							<jsp:include page="list6.jsp" />
						</ul>
					</div>
					<a href="#" class="pdtMore">제품 더보기</a>
				</div>
				<div class="slideBtn">
					<button type="button" class="btnPrev">이전 슬라이드</button>
					<button type="button" class="btnNext">다음 슬라이드</button>
				</div>
				<script>
					hotDealSlide();
				</script>
			</section>
			<!-- //HOT DEAL -->

			<!-- 리얼 리뷰 -->
			<section class="mainReviewSection">
				<h2 class="subTitle">리얼 리뷰</h2>
				<div class="bgWrap">
					<div class="reviewSlide">
						<div class="slide contWrap">
							<ul class="swiper-wrapper">

								<li class="swiper-slide">
									<div class="box">
										<button type="button">
											<span class="img">
												<img src="/resources/web2/images/main/img_myshop_req.png" alt="">
												<span class="length"><span>등록된 이미지 수</span> 8</span>
											</span>
										
											<span class="reviewerInfo">
												<span class="reviewerId"><img src="/resources/web2/images/common/grade_p.png" alt=""> 푸른밤</span>
												<span class="date">19-07-02</span>
											</span>
											<span class="txt"><span class="iconBest">BEST</span> 1적은 용량이라 휴대도 간편해서 여행갈때 기초케어 대신 챙기기도 좋고, 특히 여름에 자극받은 피부를 진정시키기 좋아요. 냉장고에 넣어뒀다 쓰면 정말 좋거든요! 그리고 무엇보다 알로에보다 덜 끈적여서 더 괜찮았어요.</span>
											<span class="reviewPoint"><span style="width:50%;">2.5점</span></span>

										</button>
										<div class="reviewRelPdt">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img12.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
											<a href="#" class="pdtCont">
												<span class="name">올리브 & 알로에 미스트</span>
												<span class="price">
													<del class="regular">20,000</del>
													<span class="num">10,000</span>원
													<span class="soldOut">일시품절</span>
												</span>
											</a>
										</div>

									</div>
								</li>

								<li class="swiper-slide">
									<div class="box">
										<button type="button">
											<span class="img">
												<img src="/resources/web2/images/main/@pdt_img10.jpg" alt="">
												<!-- 이미지 -->
												<span class="length"><span>등록된 이미지 수</span> 8</span>
												<!-- 영상 -->
												<span class="mov">동영상</span>
											</span>
										
											<span class="reviewerInfo">
												<span class="thumb"><img src="/resources/web2/images/common/@thumb.png" alt=""></span>
												<span class="reviewerId"><span class="lv"><span>Lv</span> 3</span> 붉은밤</span>
												<span class="date">19-07-02</span>
											</span>
											<span class="txt">2적은 용량이라 휴대도 간편해서 여행갈때 기초케어 대신 챙기기도 좋고, 특히 여름에 자극받은 피부를 진정시키기 좋아요. 냉장고에 넣어뒀다 쓰면 정말 좋거든요! 그리고 무엇보다 알로에보다 덜 끈적여서 더 괜찮았어요.</span>
											<span class="reviewPoint"><span style="width:50%;">2.5점</span></span>

										</button>

										<div class="reviewRelPdt">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img12.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
											<a href="#" class="pdtCont">
												<span class="name">올리브 & 알로에 미스트올리브 & 알로에 미스트트올리브 & 알로에 미스트</span>
												<span class="price">
													<del class="regular">20,000</del>
													<span class="num">10,000</span>원
													<span class="soldOut">일시품절</span>
												</span>
											</a>
										</div>

									</div>
								</li>

								<li class="swiper-slide">
									<div class="box">
										<button type="button">
											<span class="img">
												<img src="/resources/web2/images/main/@pdt_img10.jpg" alt="">
												<!-- 이미지 -->
												<span class="length"><span>등록된 이미지 수</span> 8</span>
												<!-- 영상 -->
												<span class="mov">동영상</span>
											</span>
										
											<span class="reviewerInfo">
												<span class="thumb"><img src="/resources/web2/images/common/@thumb.png" alt=""></span>
												<span class="reviewerId"><span class="lv"><span>Lv</span> 3</span> 붉은밤</span>
												<span class="date">19-07-02</span>
											</span>
											<span class="txt">3적은 용량이라 휴대도 간편해서 여행갈때 기초케어 대신 챙기기도 좋고, 특히 여름에 자극받은 피부를 진정시키기 좋아요. 냉장고에 넣어뒀다 쓰면 정말 좋거든요! 그리고 무엇보다 알로에보다 덜 끈적여서 더 괜찮았어요.</span>
											<span class="reviewPoint"><span style="width:50%;">2.5점</span></span>

										</button>

										<div class="reviewRelPdt">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img12.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
											<a href="#" class="pdtCont">
												<span class="name">올리브 & 알로에 미스트올리브 & 알로에 미스트트올리브 & 알로에 미스트</span>
												<span class="price">
													<del class="regular">20,000</del>
													<span class="num">10,000</span>원
													<span class="soldOut">일시품절</span>
												</span>
											</a>
										</div>

									</div>
								</li>
								
							</ul>
						</div>
						<div class="slideBtn">
							<button type="button" class="btnPrev">이전 슬라이드</button>
							<button type="button" class="btnNext">다음 슬라이드</button>
						</div>
						<a href="#" class="pdtMore">리뷰 더보기</a>
					</div>
					<script>
						reviewSlide();
					</script>
				</div>
			</section>
			<!-- //리얼 리뷰 -->

			<!-- MY SHOP -->
			<section class="mainMyshop">
				<h2 class="subTitle">MY SHOP</h2>

				<!-- 마이샵 등록 요청 -->
				<div class="myshopRequestWrap">
					<div class="contWrap">
						<div class="cont">
							<p class="tit">잠깐! MY SHOP은 등록 하셨나요?</p>
							<p class="txt">자주 가는 매장을 MY SHOP으로 등록하시면<br>My SHOP만의 이벤트, 할인, MY SHOP 전용 상품 등 특별한 혜택을 받으실 수 있습니다!</p>
							<a href="#" class="link">MY SHOP 등록하기</a>
						</div>
						<span class="img"><img src="/resources/web2/images/main/img_myshop_req.png" alt="3천원 페이백 쿠폰"></span>
					</div>
				</div>
				<!-- //마이샵 등록 요청 -->
				
				<div class="myShopSlide">
					<div class="pdtListType contWrap">
						<div class="slide">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
											<img src="/resources/web2/images/main/@pdt_img_over.jpg" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
											<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
											<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">1올리브 & 알로에 미스트</span>
										<span class="price"><span class="num">100,000,000</span>원</span>
									</a>
								</li>
								<li class="swiper-slide">
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="labelWrap">
												<span><img src="/resources/web2/images/common/icon_label1.png" alt=""></span>
											</span>

											<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
											<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
											<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">2올리브 & 알로에 미스트올리브 & 알로에 미스트트올리브 & 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">36,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li class="swiper-slide">
									<span class="pdtOver">
										<a href="#" class="pdtImg">
											<span class="labelWrap">
												<span><img src="/resources/web2/images/common/icon_label1.png" alt=""></span>
												<span><img src="/resources/web2/images/common/icon_label2.png" alt=""></span>
											</span>

											<img src="/resources/web2/images/main/@pdt_img12.png" alt="제품명">
											<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
											<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
											<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">3올리브 & 알로에 미스트올리브 & 알로에 미스트</span>
										<span class="price"><span class="num">36,000</span>원</span>
									</a>
								</li>
								<li class="swiper-slide">
									<span class="pdtOver">
										<a href="#" class="pdtImg">

											<span class="labelWrap">
												<span><img src="/resources/web2/images/common/icon_label1.png" alt=""></span>
												<span><img src="/resources/web2/images/common/icon_label2.png" alt=""></span>
												<span><img src="/resources/web2/images/common/icon_label3.png" alt=""></span>
											</span>

											<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
											<img src="/resources/web2/images/main/@pdt_img_over.jpg" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
											<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
											<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">4올리브 & 알로에 미스트올리브 & 알로에 미스트</span>
										<span class="price"><span class="num">36,000</span>원</span>
									</a>
								</li>
								<li class="swiper-slide">
									<span class="pdtOver">
										<a href="#" class="pdtImg">

											<span class="labelWrap">
												<span><img src="/resources/web2/images/common/icon_label1.png" alt=""></span>
												<span><img src="/resources/web2/images/common/icon_label2.png" alt=""></span>
												<span><img src="/resources/web2/images/common/icon_label3.png" alt=""></span>
											</span>

											<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
											<img src="/resources/web2/images/main/@pdt_img_over.jpg" alt="제품명" class="over">
										</a>
										<span class="pdtUtil">
											<a href="#" class="iconOpen" target="_blank">새 창</a>
											<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
											<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
											<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
										</span>
									</span>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">4올리브 & 알로에 미스트올리브 & 알로에 미스트</span>
										<span class="price"><span class="num">36,000</span>원</span>
									</a>
								</li>
							</ul>
						</div>
						<a href="#" class="pdtMore">제품 더보기</a>
					</div>
					<div class="slideBtn">
						<button type="button" class="btnPrev">이전 슬라이드</button>
						<button type="button" class="btnNext">다음 슬라이드</button>
					</div>
					<script>
						myShopSlide();
					</script>
				</div>
			</section>
			<!-- //MY SHOP -->

			<!-- 새로운 제품 -->
			<section class="mainNewPdt">
				<h2 class="subTitle">새로운 제품</h2>
				<div class="bgWrap">
					<div class="newPdtSlide">
						<div class="pdtListType3 contWrap">
							<div class="slide">
								<ul class="swiper-wrapper">
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<a href="#" class="iconOpen" target="_blank">새 창</a>
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
										</span>
										<a href="#" class="pdtCont">
											<span class="name">1올리브 & 알로에 미스트</span>
											<span class="price">
												<del class="regular">20,000</del>
												<span class="num">36,000</span>원
												<span class="soldOut">일시품절</span>
											</span>
										</a>
									</li>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<a href="#" class="iconOpen" target="_blank">새 창</a>
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
										</span>
										<a href="#" class="pdtCont">
											<span class="name">2올리브 & 알로에 미스트올리브 & 알로에 미스트트올리브 & 알로에 미스트</span>
											<span class="price"><span class="num">36,000</span>원</span>
										</a>
									</li>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<a href="#" class="iconOpen" target="_blank">새 창</a>
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
										</span>
										<a href="#" class="pdtCont">
											<span class="name">3올리브 & 알로에 미스트올리브 & 알로에 미스트</span>
											<span class="price"><span class="num">36,000</span>원</span>
										</a>
									</li>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<a href="#" class="iconOpen" target="_blank">새 창</a>
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
										</span>
										<a href="#" class="pdtCont">
											<span class="name">4올리브 & 알로에 미스트올리브 & 알로에 미스트</span>
											<span class="price"><span class="num">36,000</span>원</span>
										</a>
									</li>
									<li class="swiper-slide">
										<span class="pdtOver">
											<a href="#" class="pdtImg">
												<img src="/resources/web2/images/main/@pdt_img11.png" alt="제품명">
											</a>
											<span class="pdtUtil">
												<a href="#" class="iconOpen" target="_blank">새 창</a>
												<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
												<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
												<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
											</span>
										</span>
										<a href="#" class="pdtCont">
											<span class="name">4올리브 & 알로에 미스트올리브 & 알로에 미스트</span>
											<span class="price"><span class="num">36,000</span>원</span>
										</a>
									</li>
								</ul>
							</div>
							<a href="#" class="pdtMore">제품 더보기</a>
						</div>
						<div class="slideBtn">
							<button type="button" class="btnPrev">이전 슬라이드</button>
							<button type="button" class="btnNext">다음 슬라이드</button>
						</div>
					</div>
					<script>
						newPdtSlide();
						var txtOverflow = function(els, limit) {
							var els =  $(els);
							els.each(function(){
								var txt = this.innerHTML;
								console.log(txt);
								if(txt.length > limit) txt = txt.substr(0, limit-2) + '<span>...</span>';
								console.log(txt);
								this.innerHTML = txt;
							});
						}
						//txtOverflow('.newPdtSlide .pdtCont .name', 35);
					</script>
				</div>
			</section>
			<!-- //새로운 제품 -->

			<!-- 추천 라인 -->
			<section class="mainRecomPdtLine">
				<h2 class="subTitle">추천 라인</h2>
				<div class="contWrap">
					<ul class="slideTab">
						<li class="active"><button type="button">용암해수</button></li>
						<li><button type="button">제주 왕벚꽃</button></li>
						<li><button type="button">애플 씨드</button></li>
						<li><button type="button">포레스트 포맨</button></li>
						<li><button type="button">2019 제주 컬러 피커 LTD</button></li>
					</ul>
					<div class="slide">
						<ul class="swiper-wrapper">
							<li class="swiper-slide">
								<span class="box">
									<a href="#"><img src="/resources/web2/images/main/@pdt_img8.jpg" alt="제주 왕벚꽃 제주의 봄을 아름답게 만드는 왕봊꽃의 화삼함을 프루티 플로랄 계열의 자연유래 향으로 표현했습니다."></a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 젤리 크림 제주</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤업 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 로션</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤스킨</span>
									</a>
								</span>
							</li>
							<li class="swiper-slide">
								<span class="box">
									<a href="#"><img src="/resources/web2/images/main/@pdt_img8.jpg" alt="제주 왕벚꽃 제주의 봄을 아름답게 만드는 왕봊꽃의 화삼함을 프루티 플로랄 계열의 자연유래 향으로 표현했습니다."></a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 젤리 크림 제주 왕벚꽃 젤리 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤업 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 로션</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤스킨</span>
									</a>
								</span>
							</li>
							<li class="swiper-slide">
								<span class="box">
									<a href="#"><img src="/resources/web2/images/main/@pdt_img8.jpg" alt="제주 왕벚꽃 제주의 봄을 아름답게 만드는 왕봊꽃의 화삼함을 프루티 플로랄 계열의 자연유래 향으로 표현했습니다."></a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 젤리 크림 제주 왕벚꽃 젤리 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤업 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 로션</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤스킨</span>
									</a>
								</span>
							</li>
							<li class="swiper-slide">
								<span class="box">
									<a href="#"><img src="/resources/web2/images/main/@pdt_img8.jpg" alt="제주 왕벚꽃 제주의 봄을 아름답게 만드는 왕봊꽃의 화삼함을 프루티 플로랄 계열의 자연유래 향으로 표현했습니다."></a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 젤리 크림 제주 왕벚꽃 젤리 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤업 크림</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 로션</span>
									</a>
									<a href="#" style="background: #faebf2;">
										<span class="img">
											<img src="/resources/web2/images/main/@pdt_img12.png" alt="">
										</span>
										<span class="txt">제주 왕벚꽃 톤스킨</span>
									</a>
								</span>
							</li>
							<li class="swiper-slide">
								<span class="box">
									<a href="#"><img src="/resources/web2/images/main/@pdt_img8.jpg" alt="제주 왕벚꽃 제주의 봄을 아름답게 만드는 왕봊꽃의 화삼함을 프루티 플로랄 계열의 자연유래 향으로 표현했습니다."></a>
									<a href="#"><img src="/resources/web2/images/main/@pdt_img4.jpg" alt="제주 왕벚꽃 젤리 크림"></a>
									<a href="#"><img src="/resources/web2/images/main/@pdt_img5.jpg" alt="제주 왕벚꽃 톤업 크림"></a>
									<a href="#"><img src="/resources/web2/images/main/@pdt_img6.jpg" alt="제주 왕벚꽃 로션"></a>
									<a href="#"><img src="/resources/web2/images/main/@pdt_img7.jpg" alt="제주 왕벚꽃 톤스킨"></a>
								</span>
							</li>
						</ul>
					</div>
				</div>
				<script>
					mainRecomPdtLine();
				</script>
			</section>
			<!-- //추천 라인 -->

			<!-- 배너 -->
			<div class="mainBannerSlide mainBanner2">
				<div class="slide">
					<ul class="swiper-wrapper">
						<li class="swiper-slide"><a href="#" style="background: #f889a8;"><img src="/resources/web2/images/main/@banner2.jpg" alt="배너내용"></a></li>
						<li class="swiper-slide"><a href="#" style="background: #449bed;"><img src="/resources/web2/images/main/@banner1.jpg" alt="배너내용"></a></li>
						<li class="swiper-slide">
							<a href="#" style="background: #000 url('/resources/web2/images/main/@banner3.jpg') no-repeat 50% 50%;">
								<span class="txt">
									<strong>타이틀<br>타이틀</strong>
									<span>서브내용<br>서브내용</span>
								</span>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="#" style="background: #000 url('/resources/web2/images/main/@banner4.jpg') no-repeat 50% 50%;">
								<span class="txt">
									<strong>타이틀</strong>
									<span>서브내용</span>
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="slidePage"></div>
				<script>
					bannerSlide('mainBanner2');
				</script>
			</div>
			<!-- //배너 -->

			<!-- 인스타그램 -->
			<section class="instaSction">
				<h2 class="subTitle">이니스프리의 소식을 가까이서 확인하세요 :)</h2>
				<section>
					<h3 class="instaTit"><span>Innisfree.instalog</span></h3>
					<div class="rollingList1">
						<ul>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta1.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta2.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta3.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta4.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta5.jpg" alt=""></span>
								</a>
							</li>
						</ul>
					</div>
					<script>
						rollingSlide('.rollingList1', 'left');
					</script>
				</section>
				<section>
					<h3 class="instaTit"><span>Innisfreeofficial</span></h3>
					<div class="rollingList2">
						<ul>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta6.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta7.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta8.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta9.jpg" alt=""></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span><img src="/resources/web2/images/main/@insta10.jpg" alt=""></span>
								</a>
							</li>
						</ul>
					</div>
					<script>
						rollingSlide('.rollingList2', 'right');
					</script>
				</section>
			</section>
			<!-- //인스타그램 -->

			<!-- 멤버십 혜택 안내 -->
			<section class="mainMemberShipInfo">
				<h2 class="subTitle">이니스프리 멤버십 혜택 안내 <span class="desc" style="font-family:'notoL';font-size:0.6em;">(8/12일까지 적용, 새로운 멤버십이 8/13일부터 시작됩니다.)</span></h2>
				<div class="contWrap">
					<p class="subTxt">이니스프리 멤버십 회원이 되시면 이니스프리에서 제공하는 다양한 혜택을 받으실 수 있습니다.</p>
					<ul class="list">
						<li>
							<a href="#">
								<span class="icon"><img src="/resources/web2/images/main/icon_mb1.png" alt="멤버십데이"></span>
								<strong class="tit">멤버십데이 혜택</strong>
								<span class="txt">최대 30% 할인</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon"><img src="/resources/web2/images/main/icon_mb7.png" alt="시크릿쿠폰"></span>
								<strong class="tit">시크릿쿠폰</strong>
								<span class="txt">월1회 할인쿠폰제공</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon"><img src="/resources/web2/images/main/icon_mb3.png" alt="구매 적립"></span>
								<strong class="tit">구매 적립</strong>
								<span class="txt">구매 금액 1% 적립</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon"><img src="/resources/web2/images/main/icon_mb4.png" alt="생일 혜택"></span>
								<strong class="tit">생일 혜택</strong>
								<span class="txt">40% 할인 쿠폰 지급</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon"><img src="/resources/web2/images/main/icon_mb8.png" alt="우수회원키트 제공"></span>
								<strong class="tit">우수회원키트 제공</strong>
								<span class="txt">연 2회</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon"><img src="/resources/web2/images/main/icon_mb6.png" alt="MY SHOP 혜택"></span>
								<strong class="tit">MY SHOP 혜택</strong>
								<span class="txt">제품 할인 및 쿠폰 지급</span>
							</a>
						</li>
					</ul>
					<a href="#" class="pdtMore">혜택 더보기</a>
				</div>
			</section>
			<!-- //멤버십 혜택 안내 -->

		</div>

		<!-- 회원 구매 혜택 레이어 -->
		<jsp:include page="/html_pc/include/layer_memberBenefit.jsp" />
		<!-- //회원 구매 혜택 레이어 -->

		<!-- 장바구니, 바로구매 레이어 -->
		<jsp:include page="/html_pc/shopping/product/product_preview.jsp" />
		<!-- //장바구니, 바로구매 레이어 -->

		<!-- 인스타그램 보기 레이어 -->
		<jsp:include page="layer_insta.jsp" />
		<!-- //인스타그램 보기 레이어 -->

		<!-- 신규 푸터 -->
		<jsp:include page="/html_pc/include/footer.jsp" />
		<!-- //신규 푸터 -->

	</div>

</body>
</html>