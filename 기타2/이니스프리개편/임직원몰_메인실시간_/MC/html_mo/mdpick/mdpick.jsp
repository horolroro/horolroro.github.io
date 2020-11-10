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
        <jsp:include page="/html_mo/include/header.jsp" />
        <!-- //header -->
        <!-- body -->
        <div class="mdpick">
            <div class="tit_area">
                <div class="tit">
                    <h4>여름을 위한 썬택템</h4>
                    <p>
                        더 강력하게 라인업 된 이니스프리 선크림에 주목!<br/>
                        강렬한 태양빛에 내피부를 지켜줄 필수 썬택템!
                    </p>
                </div>
                <div class="bgarea"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/@titbg_1.jpg" alt=""></div>
            </div>

            <div class="horizScroll">
                <ul>
                    <li>
                        <div class="pImg">
                            <a href="#"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/innitem_img01.png" alt="제품명"></a>
                            <div class="rk">
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk1.png" alt="수상마크"></span>
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
                            </div>
                        </div>
                        <div class="pWrap">
                            <p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
                            <p class="pName mgt0"><a href="#">용암해수 쿨링 팩</a></p>
                            <p class="price"><strong class="cost">28,000</strong><strong class="unit">10,000</strong>원<span class="stock">일시품절</span></p>
                        </div>
                        <div class="way">
                            <button type="button" class="hart" onclick="wishSel();">찜</button>
                            <button type="button" class="cart">장바구니</button>
                            <button type="button" class="card">바로구매</button>
                        </div>
                    </li>
                    <li>
                        <div class="pImg">
                            <a href="#"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/innitem_img02.png" alt="제품명"></a>
                            <div class="rk">
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
                            </div>
                        </div>
                        <div class="pWrap">
                            <p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
                            <p class="pName mgt0"><a href="#">제주 용암해수 크림<br>마스크 60mL</a></p>
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
                            <a href="#"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/innitem_img03.png" alt="제품명"></a>
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
                    <!-- <li>
                        <a href="#" class="productMore"><span>제품 더보기</span></a>
                    </li> -->
                </ul>
            </div>

            <div class="tit_area">
                <div class="tit">
                    <h4>포기할 수 없는 톤업!</h4>
                    <p>
                        건조함 없이 피부에 밀착되어 자연스럽게 민낯을<br/>
                        밝혀주는 수분 생기 톤업 크림
                    </p>
                </div>
                <div class="bgarea"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/@titbg_2.jpg" alt=""></div>
            </div>

            <div class="horizScroll">
                <ul>
                    <li>
                        <div class="pImg">
                            <a href="#"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/innitem_img01.png" alt="제품명"></a>
                            <div class="rk">
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk1.png" alt="수상마크"></span>
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
                            </div>
                        </div>
                        <div class="pWrap">
                            <p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
                            <p class="pName mgt0"><a href="#">용암해수 쿨링 팩</a></p>
                            <p class="price"><strong class="cost">28,000</strong><strong class="unit">10,000</strong>원<span class="stock">일시품절</span></p>
                        </div>
                        <div class="way">
                            <button type="button" class="hart" onclick="wishSel();">찜</button>
                            <button type="button" class="cart">장바구니</button>
                            <button type="button" class="card">바로구매</button>
                        </div>
                    </li>
                    <li>
                        <div class="pImg">
                            <a href="#"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/innitem_img02.png" alt="제품명"></a>
                            <div class="rk">
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
                                <span class="rkIcon"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
                            </div>
                        </div>
                        <div class="pWrap">
                            <p class="pDesc2 mgt0">2개 구매 시 반값 결제</p>
                            <p class="pName mgt0"><a href="#">제주 용암해수 크림<br>마스크 60mL</a></p>
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
                            <a href="#"><img src="https://d2veos.innisfree.com:8901/resources/mobile2/images/temp/innitem_img03.png" alt="제품명"></a>
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
                    <!-- <li>
                        <a href="#" class="productMore"><span>제품 더보기</span></a>
                    </li> -->
                </ul>
            </div>
        </div>
        <!-- //body -->


    </div>
</body>
</html>