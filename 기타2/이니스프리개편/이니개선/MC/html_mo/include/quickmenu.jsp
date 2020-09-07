<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<jsp:include page="/html_mo/include/sideMenu.jsp"></jsp:include>

<div class="fixedMenu">
    <div class="quickWrap">
        <ul class="quickMenu">
            <li class="active"><a href="/html_mo/shopping/shopping_main.jsp" class="home"><p>홈</p></a></li>
            <li><a href="javascript:;" class="categoryMenuOpen"><p>카테고리</p></a></li>
            <li>
                <a href="/html_mo/mypage/main/my_main.jsp" class="qMypage"><p>마이페이지</p></a>
            </li>
            <li>
                <a href="javascript:;" class="mbShipOpen"><p>멤버십</p></a>
                <!-- sns 로그인 -->
                <!-- <div class="mbShipWrap">
                    <div class="shoppingLink">
                        <div class="tit"><span class="icon"><img src="/resources/mobile2/images/common/icon_n36.png" alt="네이버"></span><span class="icon"><img src="/resources/mobile2/images/common/icon_f36.png" alt="페이스북"></span><span class="icon"><img src="/resources/mobile2/images/common/icon_k36.png" alt="카카오"></span>김이니님</div>
                        <p class="txt">이니스프리 쇼핑몰 회원으로 연동하시면, 다양한 포인트 적립 및 조회, 쿠폰 혜택 이벤트 참여 등 다양한 고객 서비스를 이용하실 수 있습니다. </p>
                        <div class="btnWrap">
                            <button type="button" class="btnBk">이니스프리 쇼핑몰 회원 연동</button>
                        </div>
                    </div>
                </div>  -->
                <!-- 로그인 후 -->
                <!-- <div class="mbShipWrap">
                    <div class="mbShipHead">
                        <p class="mgG"><span class="icon"><img src="/resources/mobile2/images/common/icon_gr36.png" alt=""></span><span class="icon"><img src="/resources/mobile2/images/common/icon_w36.png" alt=""></span><span class="icon"><img src="/resources/mobile2/images/common/icon_p36.png" alt=""></span>김이니님 등급은 <strong class="rating">GREEN</strong>입니다. </p>
                    </div>
                    <div class="mbShipBody">
                        <div class="mbIntor">
                            <div class="mbPoC">
                                <dl>
                                    <dt>뷰티포인트</dt>
                                    <dd><a href="#"><strong>4,703</strong></a>P</dd>
                                </dl>
                                <dl>
                                    <dt>보유 쿠폰</dt>
                                    <dd><a href="#"><strong>2</strong></a>개</dd>
                                </dl>
                            </div>
                            <div class="myshopRegis">
                                <a href="#"><span>MY SHOP 등록</span></a>
                            </div>
                        </div>
                        <div class="mbCod">
                            <div class="bImg"><img src="/resources/mobile2/images/temp/barcode_big_img.jpg" alt="코드"></div>
                            <p class="bNum">2146 4654 4333</p>
                        </div>
                        <div class="bBtn">
                            <a href="#">등급별 혜택 자세히보기</a>
                        </div>
                    </div>
                </div> -->
                <!-- 로그인 전 -->
                <div class="mbShipWrap">
                    <div class="mbShipLogin">
                        <!-- 로그인 전 이력 O-->
                        <div class="mbCod">
                            <div class="bImg"><img src="/resources/mobile2/images/temp/barcode_big_img.jpg" alt="코드"></div>
                            <p class="bNum">2146 4654 4333</p>
                        </div>
                        <p class="txt">로그인하시고 다양한 혜택 받으세요!</p>
                        <div class="btnWrap">
                            <button type="button" class="btnBk">로그인</button>
                        </div>
                        <!-- 로그인 전 이력 X -->
                        <p class="txt">회원가입을 하시면 더 많은 혜택을 <br />누리실 수 있는 <span class="card">멤버십 카드</span>가 바로 발급됩니다!</p>
                        <div class="btnWrap row2">
                            <span><button type="button" class="btnWt">회원가입</button></span>
                            <span><button type="button" class="btnBk">로그인</button></span>
                        </div>
                    </div>
                    <div class="mbShipBtn">
                        <div class="bBtn">
                            <a href="#">등급별 혜택 자세히보기</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="javascript:;" class="qRecently">
                    <span class="qRimg"><img src="/resources/mobile2/images/temp/review_img.png" alt="제품"></span>
                    <p>최근 본 제품</p>
                </a>
                <!-- 최근 본 제품 -->
                <jsp:include page="/html_mo/include/recently_product_src.jsp"></jsp:include>
            </li>
        </ul>
    </div>
</div>
<div class="dim"></div>
<!-- 멤버십팝업 --> 
<div class="layPop size560" id="modal01">
    <div class="wrapModal">
        <div class="inner">
            <div class="popBarcode">
                <div class="pbImg"><img src="/resources/mobile2/images/temp/barcode_pop.jpg" alt="코드이미지"></div>
                <p class="pbcd">2146 4654 4333</p>
                <button type="button" class="mvClose" onclick="layerClose();">닫기</button>
            </div>
        </div>
    </div>
</div>