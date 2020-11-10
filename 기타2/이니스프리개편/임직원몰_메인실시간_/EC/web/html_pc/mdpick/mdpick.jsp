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
                <!-- body -->
                <div class="mdpick">
                    <h3>#지금뭐사지</h3>
                    <div class="tit_area">
                        <div class="tit">
                            <h4>여름을 위한 썬택템</h4>
                            <p>
                                더 강력하게 라인업 된 이니스프리 선크림에 주목!<br/>
                                강렬한 태양빛에 내피부를 지켜줄 필수 썬택템!
                            </p>
                        </div>
                        <div class="bgarea"><img src="/resources/web2/images/common/@titbg_1.jpg" alt=""></div>
                    </div>

                    <div class="pdtListType pdtListSub">
                        <ul>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
                                    <span class="price">
                                        <del class="regular">20,000</del>
                                        <span class="num">100,000,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:100%;">5점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">밀키프로젝트 - 밀키바통 </span>
                                    <span class="price">
                                        <span class="num">22,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:60%;">3점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
                                    <span class="price">
                                        <del class="regular">20,000</del>
                                        <span class="num">100,000,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:100%;">5점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">밀키프로젝트 - 밀키바통 </span>
                                    <span class="price">
                                        <span class="num">22,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:60%;">3점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
                                    <span class="price">
                                        <del class="regular">20,000</del>
                                        <span class="num">100,000,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:100%;">5점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">밀키프로젝트 - 밀키바통 </span>
                                    <span class="price">
                                        <span class="num">22,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:60%;">3점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
                                    <span class="price">
                                        <del class="regular">20,000</del>
                                        <span class="num">100,000,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:100%;">5점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">밀키프로젝트 - 밀키바통 </span>
                                    <span class="price">
                                        <span class="num">22,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:60%;">3점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="tit_area">
                        <div class="tit">
                            <h4>포기할 수 없는 톤업!</h4>
                            <p>
                                건조함 없이 피부에 밀착되어 자연스럽게 민낯을
                                밝혀주는 수분 생기 톤업 크림
                            </p>
                        </div>
                        <div class="bgarea"><img src="/resources/web2/images/common/@titbg_2.jpg" alt=""></div>
                    </div>

                    <div class="pdtListType pdtListSub">
                        <ul>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
                                    <span class="price">
                                        <del class="regular">20,000</del>
                                        <span class="num">100,000,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:100%;">5점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">밀키프로젝트 - 밀키바통 </span>
                                    <span class="price">
                                        <span class="num">22,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:60%;">3점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명">
                                        <img src="https://d2veos.innisfree.com:8901/upload/product/24897_l_S_250.png?202005190137?202005191330" alt="제품명" class="over">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">[더블쿠폰TEST] 이니스프리 포어딥클렌징티슈 80매. </span>
                                    <span class="price">
                                        <del class="regular">20,000</del>
                                        <span class="num">100,000,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:100%;">5점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span class="pdtOver">
                                    <a href="#" class="pdtImg">
                                        <span class="stikerWrap">
                                            <strong class="stikerType1">50%</strong>
                                        </span>
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l_S_250.png?202005190150" alt="밀키프로젝트 - 밀키바통" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                        <img src="https://images.innisfree.co.kr/upload/product/27220_l1_S_250.png?202005190150" class="over" onerror="this.src='/kr/ko/resources/error/img/300x300.png'">
                                    </a>
                                    <span class="pdtUtil">
                                        <a href="#" class="iconOpen" target="_blank">새 창</a>
                                        <a href="#" class="iconZzim">찜</a>
                                        <a href="#" class="iconCart">장바구니</a>
                                        <a href="#" class="iconBuy">바로구매</a>
                                    </span>
                                </span>
                                <a href="#" class="pdtCont">
                                    <span class="txt">2개 구매 시 반값 결제</span>
                                    <span class="name">밀키프로젝트 - 밀키바통 </span>
                                    <span class="price">
                                        <span class="num">22,000</span>원
                                    </span>
                                    <span class="review">
                                        <span class="reviewPoint"><span style="width:60%;">3점</span></span>
                                        <span class="length">(156)</span>
                                    </span>
                                    <span class="pdtStatus">
                                        <span class="iconstaff">임직원할인</span>
                                        <span class="iconNew">NEW</span>
                                        <span class="iconGift">GIFT</span>
                                        <span class="iconSale">SALE</span>
                                    </span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

			</section><!-- //contents -->
			
		</div>

		
		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>