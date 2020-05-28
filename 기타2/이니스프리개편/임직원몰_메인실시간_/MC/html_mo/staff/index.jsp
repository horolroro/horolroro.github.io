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
</head>
<body>
    
    <div id="container">
        <!-- header -->
        <jsp:include page="/html_mo/include/header_bk.jsp" >
             <jsp:param value="온라인 전용관" name="subtitle"/>
        </jsp:include>
        <!-- //header -->
        <!-- body -->
        <div class="staffShopWrap">
            <!-- 임직원 전용 특가샵 타이틀 영역-->
            <div class="mallHead">
                <div class="bx">
                    <button class="noteToggle">알림</button>
                    <!-- <h2 class="tit">임직원 전용 <em>특가샵</em></h2>
                    <p class="desc">이니스프리 및 AP 임직원 전용 이니스프리 제품 특가샵입니다.</p> -->

                    <div class="note"> 
                        <ul>
                            <li>이니스프리 임직원샵은 사내 임직원 전용 복지몰로서 비정상 유통 행위시(유출시) 사규에 의해 징계를 받을 수 있습니다.</li>
                            <li>비정상 유통이 발생하지 않도록 임직원 여러분의 많은 협조 당부 드립니다.</li>
                            <li>임직원샵 메뉴에서 판매되는 특가상품은 제조년월이 1년 이상 경과한 구형제품일 수 있으며 60~80% 할인된 가격으로 판매합니다.</li>
                            <li>임직원샵 메뉴에 등록되지 않은 이니스프리의 모든 상품에 대해서는 임직원 40% 할인이 적용됩니다.</li>
                            <li>P포인트 추가할인은 적용할 수 없습니다.<br/>임직원 여러분들의 양해 부탁 드립니다.</li>
                            <li>월 구매금액 한도는 결제금액 기준 80만원입니다.<br/>(임직원샵 메뉴 내 특가 제품 및 임직원 할인제품 합산금액)</li>
                        </ul>
                    </div>
                </div>
            </div>
                    
            <!-- 상품 리스트 시작 -->
            <div class="listStyleWrap">
                <!-- 정렬 -->
                <div class="sortWrap">
                    <p class="sortAll">총 <span>26</span>개</p>
                    <div class="sortList">
                        <div class="commonSelect">
                            <select name="sortStr" id="sortStr" onchange="goPage('1')">
                                <option value="">등록순</option>
                                <option value="">낮은 가격순</option>
                                <option value="">높은 가격순</option>
                                <option value="">할인율순</option>
                            </select>
                        </div>

                        <button type="button" class="viewSearch" onclick="layerOpen('dsModal');">상세검색</button>
                        <span class="listType"><button type="button"></button></span>
                    </div>
                </div>
                <!-- 리스트 li -->
                <div class="productTypeThumb">
                    <!-- 제품 없음 -->
                    <p class="nodate">선택하신 조건에 맞는 제품이 없습니다.<br>다시 선택해주세요.</p>
                    <!-- //제품 없음 -->
                    <ul>
                        <li>
                            <div class="itemThumb">
                                <div class="stateWrap">
                                    <p class="stateR"><strong>20</strong><em class="per">%</em></p>
                                </div>
                                <a href="/kr/ko/mProductView.do?prdSeq=20440">
                                    <img src="https://images.innisfree.co.kr/upload/product/20440_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="그린티 씨드 에센스 인 로션">
                                </a>
                            </div>
                            <div class="way">
                                <button type="button" class="hart" onclick="wishSel();">찜</button>
                                <button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
                                <button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
                            </div>
                            <div class="itemInfor">
                                <p class="tpDesc"></p>
                                <p class="tpName"><a href="/kr/ko/mProductView.do?prdSeq=20440">그린티 씨드 에센스 인 로션<br>100mL</a></p>
                                <p class="tPrice">
                                    <strong class="cost">20,000원</strong>
                                    <strong class="tUnit">16,000</strong>원
                                    <span class="tSock">일시품절</span>
                                </p>
                                <div class="productStyle">
                                    <span class="pstaff">임직원할인</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="itemThumb">
                                <div class="stateWrap">
                                    <p class="stateR"><strong>20</strong><em class="per">%</em></p>
                                </div>
                                <a href="/kr/ko/mProductView.do?prdSeq=20440">
                                    <img src="https://images.innisfree.co.kr/upload/product/27516_l_S_450.png?202005201010" onerror="this.src='/kr/ko/resources/error/img/125x125.png'" alt="트루케어 비타민C 20 앰플 + 판테놀 10 수분 스킨">
                                </a>
                            </div>
                            <div class="way">
                                <button type="button" class="hart " onclick="loginAlert();">찜</button>
                                <button type="button" class="cart" onclick="javascript:openPreview('20440', 'mCART');">장바구니</button>
                                <button type="button" class="card" onclick="javascript:openPreview('20440', 'mORDER');">바로구매</button>
                            </div>
                            <div class="itemInfor">
                                <p class="tpDesc"></p>
                                <p class="tpName"><a href="/kr/ko/mProductView.do?prdSeq=20440">그린티 씨드 에센스 인 로션<br>100mL</a></p>
                                <p class="tPrice">
                                    <strong class="cost">20,000원</strong>
                                    <strong class="tUnit">16,000</strong>원
                                </p>
                                <div class="productStyle">
                                    <span class="pSale">SALE</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div><!-- //listStyleWrap -->
        </div><!-- //staffShopWrap -->
        <!-- //body -->

        <!-- 상세 검색 -->
        <div class="layPop resize" id="dsModal">
            <div class="wrapModal">
                <div class="inner">
                    <div class="resizeHead">
                        <h3>상세검색</h3>
                    </div>
                    <div class="resizeBody">
                        <h4>혜택별</h4>
                        <ul class="dsList">
                            <li>
                                <label for="Benefit1">
                                    <input type="checkbox" name="Benefit" id="Benefit1"> 
                                    <span>1 + 1</span>
                                </label>
                            </li>
                            <li>
                                <label for="Benefit2">
                                    <input type="checkbox" name="Benefit" id="Benefit2"> 
                                    <span>10 + 10</span>
                                </label>
                            </li>
                            <li>
                                <label for="Benefit3">
                                    <input type="checkbox" name="Benefit" id="Benefit3"> 
                                    <span>기획세트</span>
                                </label>
                            </li>
                            <li>
                                <label for="Benefit4">
                                    <input type="checkbox" name="Benefit" id="Benefit4"> 
                                    <span>정기배송</span>
                                </label>
                            </li>
                        </ul>
                        <h4>피부 고민별</h4>
                        <ul class="dsList">
                            <li>
                                <label for="concern1">
                                    <input type="checkbox" name="concern" id="concern1"> 
                                    <span>수분</span>
                                </label>
                            </li>
                            <li>
                                <label for="concern2">
                                    <input type="checkbox" name="concern" id="concern2"> 
                                    <span>미백</span>
                                </label>
                            </li>
                            <li>
                                <label for="concern3">
                                    <input type="checkbox" name="concern" id="concern3"> 
                                    <span>모공</span>
                                </label>
                            </li>
                            <li>
                                <label for="concern4">
                                    <input type="checkbox" name="concern" id="concern4"> 
                                    <span>탄력</span>
                                </label>
                            </li>
                            <li>
                                <label for="concern5">
                                    <input type="checkbox" name="concern" id="concern5"> 
                                    <span>보습</span>
                                </label>
                            </li>
                            <li>
                                <label for="concern6">
                                    <input type="checkbox" name="concern" id="concern6"> 
                                    <span>토탈 케어</span>
                                </label>
                            </li>
                            <li>
                                <label for="concern7">
                                    <input type="checkbox" name="concern" id="concern7"> 
                                    <span>피부 트러블</span>
                                </label>
                            </li>
                            <li class="mgl0">
                                <label for="concern8">
                                    <input type="checkbox" name="concern" id="concern8"> 
                                    <span>눈가 주름개선</span>
                                </label>
                            </li>
                        </ul>
                        <h4>라인별</h4>
                        <ul class="dsList">
                            <li>
                                <label for="line1">
                                    <input type="checkbox" name="line" id="line1"> 
                                    <span>화산송이</span>
                                </label>
                            </li>
                            <li>
                                <label for="line2">
                                    <input type="checkbox" name="line" id="line2"> 
                                    <span>녹차</span>
                                </label>
                            </li>
                            <li>
                                <label for="line3">
                                    <input type="checkbox" name="line" id="line3"> 
                                    <span>비자</span>
                                </label>
                            </li>
                            <li>
                                <label for="line4">
                                    <input type="checkbox" name="line" id="line4"> 
                                    <span>유채</span>
                                </label>
                            </li>
                            <li>
                                <label for="line5">
                                    <input type="checkbox" name="line" id="line5"> 
                                    <span>용암해수</span>
                                </label>
                            </li>
                            <li>
                                <label for="line6">
                                    <input type="checkbox" name="line" id="line6"> 
                                    <span>청보리</span>
                                </label>
                            </li>
                            <li>
                                <label for="line7">
                                    <input type="checkbox" name="line" id="line7"> 
                                    <span>올리브</span>
                                </label>
                            </li>
                            <li>
                                <label for="line8">
                                    <input type="checkbox" name="line" id="line8"> 
                                    <span>한란</span>
                                </label>
                            </li>
                            <li>
                                <label for="line9">
                                    <input type="checkbox" name="line" id="line9"> 
                                    <span>푸른콩</span>
                                </label>
                            </li>
                            <li>
                                <label for="line10">
                                    <input type="checkbox" name="line" id="line10"> 
                                    <span>생강</span>
                                </label>
                            </li>
                            <li>
                                <label for="line11">
                                    <input type="checkbox" name="line" id="line11"> 
                                    <span>알로에</span>
                                </label>
                            </li>
                            <li>
                                <label for="line12">
                                    <input type="checkbox" name="line" id="line12"> 
                                    <span>꽃송이</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="btmFixed">
                        <span>
                            <button type="button" class="btnWt size60">초기화</button>
                        </span>
                        <span>
                            <button type="button" class="btnBk size60">선택적용</button>
                        </span>
                    </div>
                    <button type="button" class="mvClose" onclick="layerClose();">닫기</button>
                </div>
            </div>
        </div>
        <!-- //상세 검색 -->
    </div>
</body>
</html>