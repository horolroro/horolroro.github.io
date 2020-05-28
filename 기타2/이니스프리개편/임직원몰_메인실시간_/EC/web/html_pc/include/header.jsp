<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


		<%-- <div class="docTopBanner" style="background-color:#5abba7;"> <!-- 버튼 컬러 선택 btnColor 클래스 추가 -->
			<div class="contWrap">
				<a href="#">
					<span class="img"><img src="/resources/web2/images/common/@top_banner.jpg" alt=""></span>
					<!-- <span class="txt" style="color:#fff;">텍스트배너</span> 텍스트 배너 -->
				</a>
				<button type="button" class="btnClose" onclick="docTopBannerClose();">배너 닫기</button>
			</div>
		</div> --%>

		<!-- 2020.05 탑배너추가 -->
		<!-- 기존 배너 한개일 경우 -->
		<div class="docTopBanner" style="display: block; background-color:#5abba7;"> <!-- 버튼 컬러 선택 btnColor 클래스 추가 -->
			<div class="contWrap">
				<a href="#">
					<span class="img"><img src="/resources/web2/images/common/@top_banner.jpg" alt=""></span>
					<!-- <span class="txt" style="color:#fff;">텍스트배너</span> 텍스트 배너 -->
				</a>
				<button type="button" class="btnClose" onclick="docTopBannerClose();">배너 닫기</button>
			</div>
		</div>

		<!-- 20.05 추가 배너 -->
		<!-- 추가 배너:: 이미지형 -->
		<div class="docTopBanner docTopBannerTwo">
			<div class="col1" style="background: #297552;"><!-- 좌측 배너 컬러 -->
				<a href="#">
					<img src="/resources/web2/images/common/@top_banner_1.jpg" alt="">
				</a>
			</div>

			<div class="col2" style="background:#efefef;"><!-- 우측 배너 컬러 -->
				<a href="#">
					<img src="/resources/web2/images/common/@top_banner_2.jpg" alt="">
				</a>
				<button type="button" class="btnClose" onclick="docTopBannerClose();">배너 닫기</button>
			</div>
		</div>
		<!-- 추가 배너:: 텍스트형 -->
		<div class="docTopBanner docTopBannerTwo docTopText">
			<div class="col1" style="background: #297552;"><!-- 좌측 배너 컬러 -->
				<a href="#">
					<!-- 대각선 라인 좌측 배너 background 컬러와 동일하게 맟춰주세요. -->
					<span class="txt_background" style="border-top-color:#297552;"></span>
					<span class="txt" style="color:#fff;">4월 멤버십 데이 UP TO 50%</span>
				</a>
			</div>

			<div class="col2" style="background:#efefef;"><!-- 우측 배너 컬러 -->
				<a href="#">
					<span class="txt" style="color:#f66b85;">트루케어 선크림 체험분 증정! </span>
				</a>
				<button type="button" class="btnClose" onclick="docTopBannerClose();">배너 닫기</button>
			</div>
		</div>
		<!-- //20.05 추가 배너 -->
		
		<header id="header">
			<div class="headerWrap">
				<div class="headerBox">
					<h1 class="logo"><a href="/html_pc/shopping/shopping_main.jsp"><img src="/resources/web2/images/common/logo_basic.png" alt="innisfree"></a></h1>
					<div class="utilArea">
						<span class="btn">
							<button type="button" class="btnSearch" onmouseenter="headerUtillLayer('.layerSearch');"><span>검색</span></button>
							<button type="button" class="btnMypage" onmouseenter="headerUtillLayer('.layerMember');"><span>마이페이지</span></button>
							<button type="button" class="btnCart" onmouseenter="headerUtillLayer('.layerCart');"><span>장바구니</span><em>3</em></button>
						</span>
						
						<!-- 검색 레이어 -->
						<div class="layerHeader layerSearch">
							<fieldset class="keywordInput">
								<legend>검색어 입력</legend>
								<input type="text" class="inputTxt">
								<button type="button" class="btnSearch">검색</button>

								<div class="keywordRolling">
									<ul>
										<li>
											<span class="txt">111마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
											<a href="https://www.google.com">바로가기</a>
										</li>
										<li>
											<span class="txt">222마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
											<a href="https://www.daum.net">바로가기</a>
										</li>
										<li>
											<span class="txt">333마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
											<a href="https://www.naver.com">바로가기</a>
										</li>
									</ul>
								</div>
								<script>
									keywordRolling();
								</script>
							</fieldset>

							<div class="recomWrap">
								<ul class="list">
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템핫썸머필수템핫썸머필수템핫썸머필수템핫썸머필수템</a></li>
									<li><a href="#">#비건뷰티</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
								</ul>
							</div>
							<div class="resultWrap" style="display: none;">
								<button type="button" class="btnAutoSearch">자동완성끄기</button>
								<p class="tit">추천 검색어</p>
								<ul class="list">
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템핫썸머필수템핫썸머필수템핫썸머필수템핫썸머필수템</a></li>
									<li><a href="#">#비건뷰티</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
									<li><a href="#">#핫썸머필수템</a></li>
								</ul>
							</div>
						</div>
						<!-- //검색 레이어 -->
	
						<!-- 마이페이지 레이어 -->
						<div class="layerHeader layerMember">
							<!-- 로그인전 -->
							<p class="loginBefore">
								<span><a href="#">로그인</a></span>
								<span><a href="#">회원가입</a></span>
							</p>
							<!-- 로그인후 -->
							<p class="loginAfter">
								<img src="/resources/web2/images/common/sns_n.png" alt="네이버">
								<!-- <img src="/resources/web2/images/common/grade_w.png" alt="w"> -->
								<b>김이니님</b>
								<a href="#">로그아웃</a>
							</p>
							<!-- sns연동 -->
							<div class="snsLink">
								<p class="txt">이니스프리 쇼핑몰 회원으로 연동하시면, 다양한 포인트 적립 및 조회, 쿠폰 혜택 이벤트 참여 등 다양한 고객 서비스를 이용하실 수 있습니다.</p>
								<button type="button" class="btnType3m">이니스프리 쇼핑몰 회원 연동</button>
							</div>
							<ul class="linkList">
								<li><a href="#">마이페이지</a></li>
								<li><a href="#">주문배송조회</a></li>
								<li><a href="#">나의 리뷰</a></li>
								<li><a href="#">회원정보 수정</a></li>
							</ul>
							<ul class="linkList">
								<li><a href="#">쿠폰</a></li>
								<li><a href="#">뷰티포인트</a></li>
								<li><a href="#">씨드/씨드 쿠폰</a></li>
								<li><a href="#">씨드 스토어</a></li>
							</ul>
							<ul class="linkList">
								<li><a href="#">멤버십</a></li>
								<li><a href="#">고객센터</a></li>
							</ul>
							
						</div>
						<!-- //마이페이지 레이어 -->

						<!-- 장바구니 레이어 -->
						<div class="layerHeader layerCart">
							<p class="title"><strong>장바구니 <span>(23)</span></strong></p>
							
							<div class="cartWrap">
								<p class="cartEmpty">
									장바구니가 비었습니다.
									<a href="#" class="btnType1m">내 찜목록 확인</a>
									<a href="#" class="btnType2m">로그인</a>
								</p>
								<p class="cartLink">
									<a href="#" class="linkArwB">장바구니 바로 가기</a>
								</p>
								<p class="cartLink">
									아직 이니스프리 회원이 아니세요?<br>
									<a href="#" class="linkArwB">회원 가입하고 혜택받기</a>
								</p>
								
								<p class="cartLink">
									이니스프리 쇼핑몰 회원으로 연동하시면,<br>
									다양한 포인트 적립 및 조회, 쿠폰 혜택 <br>
									이벤트 참여 등 다양한 고객 서비스를 <br>
									이용하실 수 있습니다. <br>
									<a href="#" class="linkArwB">이니스프리 쇼핑몰 회원 연동</a>
								</p>

								<div class="cartList">
									<ul>
										<li>
											<a href="#">
												<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
												<span class="pdtCont">
													<span class="name">포레스트 포맨 올인원 에센스 4종 100ML</span>
													<span class="opt">라이트(T/1)</span>
													<span class="pdtOpt">
														<span class="length">1개</span>
														<span class="price">
															<span class="num">9,000</span>원
														</span>
													</span>
												</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
												<span class="pdtCont">
													<span class="name">포레스트 포맨 올인원 에센스 4종 100ML</span>
													<span class="opt">라이트(T/1)</span>
													<span class="pdtOpt">
														<button type="button" class="btnType7">입고알림신청</button>
														<span class="soldOut">일심품절</span>
													</span>
												</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
												<span class="pdtCont">
													<span class="name">포레스트 포맨 올인원 에센스 4종 100ML포레스트 포맨 올인원 에센스 4종 100ML</span>
													<span class="opt">라이트라이트라이트라이트라이트라이트(T/1)</span>
													<span class="pdtOpt">
														<span class="length">1000개</span>
														<span class="price">
															<span class="num">1,100,000</span>원
														</span>
													</span>
												</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
												<span class="pdtCont">
													<span class="name">포레스트 포맨 올인원 에센스 4종 100ML</span>
													<span class="opt">라이트(T/1)</span>
													<span class="pdtOpt">
														<span class="length">1개</span>
														<span class="price">
															<span class="num">9,000</span>원
														</span>
													</span>
												</span>
											</a>
											<!-- 추가 구성품 -->
											<div class="addPdtWrap">
												<p class="title"><strong>+ 추가 구성품</strong></p>

												<div class="pdtRow">
													<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
													<span class="pdtCont">
														<a href="#" class="name">포레스트 포맨 올인원 에센스 4종 100ML</a>
														<span class="pdtOpt">
															<span class="length">1개</span>
															<span class="price">
																<span class="num">9,000</span>원
															</span>
														</span>
													</span>
												</div>

												<div class="pdtRow">
													<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
													<span class="pdtCont">
														<a href="#" class="name">포레스트 포맨 올인원 에센스 4종 100ML</a>
														<span class="pdtOpt">
															<span class="length">1개</span>
															<span class="price">
																<span class="num">9,000</span>원
															</span>
														</span>
													</span>
												</div>
												
											</div>
											<!-- //추가 구성품 -->
											<!-- 연계 구매 프로모션 -->
											<div class="connectBuy">
												<p class="name">연계구매프로모션 캠페인명</p>
												<p class="txt">
													<button type="button">A 카테고리 제품</button> 중 2개 이상 구매 시<br>
													할인 혜택 [ 40% (최대 할인액 1,000,000) ]
												</p>
												<p class="txt">
													<button type="button">행사 제품</button> 중 2개 이상 구매 시<br>
													할인 혜택 [ 40% (최대 할인액 1,000,000) ]
												</p>
												<p class="txt">
													<button type="button">A 카테고리 제품</button> 중 2개 이상 구매 / 30,000
													원 이상 구매 시<br>
													정액 할인가 혜택 [ 4,000원 ]
												</p>
												<p class="txt">
													<button type="button">A 카테고리 제품</button> 중 2개 이상 구매 /<br>
													<button type="button">B 카테고리 제품</button> 중 1개 이상 구매 시<br>
													정액 할인가 혜택 [ 4,000원 ]
												</p>
											</div>
											<!-- //연계 구매 프로모션 -->
										</li>
									</ul>
								</div>

								<div class="cartPriceWrap">
									<p class="totalPrice">
										<span class="tit">장바구니 총 금액</span>
										<span class="price"><span class="num">63,000</span>원</span>
									</p>
									<p class="shipPrice">
										<span class="tit">배송비</span>
										<span class="price"><span class="num">0</span>원</span>
									</p>
								</div>

								<div class="btnWrap">
									<span>
										<a href="#" class="btnType3">장바구니</a>
									</span>
									<span>
										<a href="#" class="btnType4">주문하기</a>
									</span>
								</div>

								<div class="btnWrap">
									<span>
										<a href="#" class="btnType4">주문하기</a>
									</span>
								</div>

								<p class="cartLink">
									아직 이니스프리 회원이 아니세요?<br>
									<a href="#" class="linkArwB">회원 가입하고 혜택받기</a>
								</p>
								
								<p class="cartLink">
									이니스프리 쇼핑몰 회원으로 연동하시면,<br>
									다양한 포인트 적립 및 조회, 쿠폰 혜택 <br>
									이벤트 참여 등 다양한 고객 서비스를 <br>
									이용하실 수 있습니다. <br>
									<a href="#" class="linkArwB">이니스프리 쇼핑몰 회원 연동</a>
								</p>
							</div>
							
						</div>
						<!-- //장바구니 레이어 -->

					</div>

					<!-- gnb -->
					<nav id="gnb" onmouseleave="gnbControl('close');">
						<ul class="gnbList">
							<li class="btn"><button type="button" onclick="gnbControl('open')"><span>카테고리</span></button></li>
							<li><a href="#"><img src="/resources/web2/images/common/@gnb_txt.png" alt="그린티 씨드"></a></li>
							<li><a href="#">HOT DEAL</a></li>
							<li><a href="#">FOR U</a></li>
							<li><a href="#">이벤트</a></li>
							<li><a href="#">리뷰</a></li>
							<li><a href="#">매장 체험</a></li>
							<li><a href="#">ABOUT US</a></li>
						</ul>

						<!-- //카테고리 -->
						<div class="categoryWrap">
							<div class="categoryList">
								<!-- 유형별 -->
								<div class="dep1 active">
									<a href="#" onmouseenter="depActive();">유형별</a>
									<div class="dep2">
										<ul>
											<li class="active"><a href="#" onmouseenter="depActive();">스킨케어</a>
												<div class="dep3">
													<ul>
														<li><a href="/html_pc/shopping/product/product_main.jsp">전체</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">스킨</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">로션</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">선케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">에센스/세럼</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">페이스오일</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">크림/젤</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">마사지</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">아이케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">립케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">미스트</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">기획세트</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">기타</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">대용량</a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" onmouseenter="depActive();">팩/마스크</a>
												<div class="dep3">
													<ul>
														<li><a href="/html_pc/shopping/product/product_main.jsp">전체</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">스킨</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">로션</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">선케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">에센스/세럼</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">페이스오일</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">크림/젤</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">마사지</a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" onmouseenter="depActive();">페이스 메이크업</a>
												<div class="dep3">
													<ul>
														<li><a href="/html_pc/shopping/product/product_main.jsp">전체</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">스킨</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">로션</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">선케어</a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" onmouseenter="depActive();">컬러 메이크업</a>
												<div class="dep3">
													<ul>
														<li><a href="/html_pc/shopping/product/product_main.jsp">전체</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">마사지</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">아이케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">립케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">미스트</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">기획세트</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">기타</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">대용량</a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" onmouseenter="depActive();">클렌징</a>
												<div class="dep3">
													<ul>
														<li><a href="/html_pc/shopping/product/product_main.jsp">립케어</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">미스트</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">기획세트</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">기타</a></li>
														<li><a href="/html_pc/shopping/product/product_main.jsp">대용량</a></li>
													</ul>
												</div>
											</li>
											<li><a href="#">네일</a></li>
											<li><a href="#">바디</a></li>
											<li><a href="#">헤어</a></li>
											<li><a href="#">방향</a></li>
											<li><a href="#">남성</a></li>
											<li><a href="#">미용소품</a></li>
											<li><a href="#">라이프 스타일</a></li>
										</ul>
									</div>
								</div>

								<!-- 라인별 -->
								<div class="dep1">
									<a href="#" onmouseenter="depActive();">라인별</a>
									<div class="dep2">
										<ul class="multiList">
											<li><a href="#">트루케어<em class="iconOnly">ONLY</em></a></li>
											<li><a href="#">용암해수<em class="iconNew">N</em></a></li>
											<li><a href="#">청보리<em class="iconNew">N</em></a></li>
											<li><a href="#">제주 왕벚꽃<em class="iconNew">N</em></a></li>
											<li><a href="#">링클&amp;리프팅 사이언스</a></li>
											<li><a href="#">그린티</a></li>
											<li><a href="#">한란</a></li>
											<li><a href="#">화산송이</a></li>
											<li><a href="#">비자</a></li>
											<li><a href="#">자연발효</a></li>
											<li><a href="#">포레스트포맨<em class="iconNew">N</em></a></li>
											<li><a href="#">슈퍼푸드<em class="iconNew">N</em></a></li>
											<li><a href="#">포레스트포맨<em class="iconNew">N</em></a></li>
											<li><a href="#">슈퍼푸드<em class="iconNew">N</em></a></li>
											<li><a href="#">트루케어<em class="iconOnly">ONLY</em></a></li>
											<li><a href="#">용암해수<em class="iconNew">N</em></a></li>
											<li><a href="#">청보리<em class="iconNew">N</em></a></li>
											<li><a href="#">제주 왕벚꽃<em class="iconNew">N</em></a></li>
											<li><a href="#">링클&amp;리프팅 사이언스</a></li>
											<li><a href="#">그린티</a></li>
											<li><a href="#">한란</a></li>
											<li><a href="#">화산송이</a></li>
											<li><a href="#">비자</a></li>
											<li><a href="#">자연발효</a></li>
											<li><a href="#">포레스트포맨<em class="iconNew">N</em></a></li>
											<li><a href="#">슈퍼푸드<em class="iconNew">N</em></a></li>
											<li><a href="#">포레스트포맨<em class="iconNew">N</em></a></li>
											<li><a href="#">슈퍼푸드<em class="iconNew">N</em></a></li>
											<li><a href="#">트루케어<em class="iconOnly">ONLY</em></a></li>
											<li><a href="#">용암해수<em class="iconNew">N</em></a></li>
											<li><a href="#">청보리<em class="iconNew">N</em></a></li>
											<li><a href="#">제주 왕벚꽃<em class="iconNew">N</em></a></li>
											<li><a href="#">링클&amp;리프팅 사이언스</a></li>
											<li><a href="#">그린티</a></li>
											<li><a href="#">한란</a></li>
											<li><a href="#">화산송이</a></li>
											<li><a href="#">비자</a></li>
											<li><a href="#">자연발효</a></li>
											<li><a href="#">포레스트포맨<em class="iconNew">N</em></a></li>
											<li><a href="#">슈퍼푸드<em class="iconNew">N</em></a></li>
											<li><a href="#">포레스트포맨<em class="iconNew">N</em></a></li>
											<li><a href="#">슈퍼푸드<em class="iconNew">N</em></a></li>
										</ul>
									</div>
								</div>

								<!-- 고민별 -->
								<div class="dep1">
									<a href="#" onmouseenter="depActive();">고민별</a>
									<div class="dep2">
										<ul>
											<li><a href="#">수분</a></li>
											<li><a href="#">보습</a></li>
											<li><a href="#">진정</a></li>
											<li><a href="#">각질</a></li>
											<li><a href="#">모공</a></li>
											<li><a href="#">트러블</a></li>
											<li><a href="#">화이트닝</a></li>
											<li><a href="#">안티에이징</a></li>
										</ul>
									</div>
								</div>

								<div class="dep1"><a href="#">NEW</a></div>
								<div class="dep1"><a href="#">BEST</a></div>
								<div class="dep1"><a href="#">ON SALE</a></div>
								<div class="dep1"><a href="#">1+1 SALE</a></div>
							</div>

							<!-- GNB 배너-->
							<div class="gnbBanner">
								<a href="#"><img src="/resources/web2/images/common/@gnb_banner1.jpg" alt="배너"></a>
								<a href="#"><img src="/resources/web2/images/common/@gnb_banner2.jpg" alt="배너"></a>
							</div>
						</div>
						<!-- // -->
					</nav>
					<!-- //gnb -->
				</div>

				<!-- 플로팅메뉴 -->
				<aside class="floatingMenu">
					<div class="innerWrap">
						<nav class="pdtList hideList">
							<h2 class="pdtHistoryTit">최근 본 제품 <span class="length">(7)</span></h2>
							<button type="button" class="btnHistory" onclick="pdtHistoryShow();">최근 본 제품 펼쳐보기</button>
							<ul class="list">
								<!-- <li class="nonList">최근 본 제품이 없습니다.</li> -->
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>1,000,000</span>원</del>
												<span class="num">1,000,000</span>원
												<span class="soldOut">일시품절</span>
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>,200,000</span>원</del>
												<span class="num">,100,000</span>원
												<span class="soldOut">일시품절</span>
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item1.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>30,000</span>원</del>
												<span class="num">9,000</span>원
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item2.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>30,000</span>원</del>
												<span class="num">9,000</span>원
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item3.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>30,000</span>원</del>
												<span class="num">9,000</span>원
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item4.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>30,000</span>원</del>
												<span class="num">9,000</span>원
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
								<li>
									<a href="#">
										<span class="pdtImg"><img src="/resources/web2/images/common/@aside_item5.jpg" alt="제품명"></span>
										<span class="pdtCont">
											<span class="tit">온라인 한정 기획 세트</span>
											<span class="name">포레스트 포맨 올인원 에센스</span>
											<span class="price">
												<del class="regular"><span>30,000</span>원</del>
												<span class="num">9,000</span>원
											</span>
										</span>
									</a>
									<span class="pdtUtil">
										<button type="button" class="iconZzim" onclick="wishSel();">찜</button>
										<button type="button" class="iconCart" onclick="layerOpen('pdtPreviewPop');">장바구니</button>
										<button type="button" class="iconBuy" onclick="layerOpen('pdtPreviewPop');">바로구매</button>
									</span>
								</li>
							</ul>
						</nav>
						<button type="button" class="btnChatbot"><img src="/resources/web2/images/common/btn_chatbot.png" alt="챗봇"></button>
						<div class="banner">
							<span class="pdtImg"><a href="#"><img src="/resources/web2/images/common/@aside_banner.jpg" alt="클렌징 세일"></a></span>
						</div>
						<button type="button" class="btnDocTop" onclick="docTop();">페이지 상단으로 이동</button>
					</div>
				</aside>
				<!-- //플로팅메뉴 -->

				<!-- 플로팅배너 -->
				<%-- <div class="floatingBanner">
					<a href="#"><img src="/resources/web2/images/common/@floating_banner.png" alt=""></a>
					<button type="button" class="btnHide" onclick="$('.floatingBanner').hide();">안보기</button>
				</div> --%>
				<!-- //플로팅배너 -->

				<!-- 20.05 추가 플로팅배너 -->
				<div class="exfloatingBanner">
					<button type="button" class="btnHide" onclick="$('.exfloatingBanner').hide();">안보기</button>
					<div class="bnr_off">
						<a href="#"><img src="/resources/web2/images/common/@exBaner.jpg" alt="" width="101" height="129"></a>
					</div>
					
					<div class="bnr_on">
						<a href="#">
							<!-- 이미지WIDTH 필수 -->
							<img src="/resources/web2/images/common/@exBaner_on.png" width="831" alt="">
						</a>
					</div>
				</div>
				<!-- //20.05 추가 플로팅배너 -->

			</div>
			

		</header>