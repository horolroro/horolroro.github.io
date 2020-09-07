<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "고객센터";
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
        <jsp:include page="/html_mo/include/header_bk.jsp" >
             <jsp:param value="고객센터" name="subtitle"/>
        </jsp:include>
        <!-- //header -->
        <!-- body -->
        <div class="subWrap">
            <div class="cc main">
    
                <div class="faqSch">
                    <div class="subtit">
                        <div class="tit">자주하는 질문</div>
                        <div class="go">
                            <a href="/kr/ko/mFaqList.do">바로가기</a>
                        </div>
                    </div>
                    <div class="forms">
                        <input class="keyword" type="text" placeholder="궁금하신 내용을 입력해주세요.">
                        <button type="submit" class="btSch">검색</button>
                    </div>
                    <div class="key_text">
                        예) 교환, 마이샵 등록, 묶음배송, 배송지 변경, 취소, 공병수거,
                        뷰티포인트, 멤버십데이, 개인정보 변경
                    </div>
                </div>
                
                <div class="links">
                    <ul>
                        <li class="qna"><a href="../../mypage/counsel/counsel_write.jsp"><span>1:1문의</span></a></li>
                        <li class="store"><a href="../store/store_fav.jsp"><span>매장찾기</span></a></li>
                        <li class="mems"><a href="../../membership/membership.jsp"><span>멤버십 소개</span></a></li>
                    </ul>
                </div>

                <div class="cusOnCenter">
                    <div class="subtit">
                        <div class="tit">이니스프리 온라인 상담실</div>
                    </div>
                    <div class="box a">
                        <div class="p1">
                            운영시간  AM 09:00 ~ PM 18:00
                            <div>(주말 및 공휴일 휴무)</div>
                        </div>
                        <p class="p2">점심시간  PM 12:00 ~ PM 13:00</p>
                    </div>
                    <div class="box b">
                        <div class="p1">
                            <em>080-380-0114</em> (수신자 요금 부담)
                        </div>
                    </div>
        
                    <div class="btnWrap row2">
                        <span><button type="button" class="btnBk" onclick="layerOpen('cusOnCenter_layer_1')">고객불만 처리절차 ></button></span>
                        <span><button type="button" class="btnBk" onclick="layerOpen('cusOnCenter_layer_2')">고객불만 보상기준 ></button></span>
                    </div>
                </div>

                <div class="notice">
                    <div class="subtit">
                        <div class="tit">공지사항</div>
                        <div class="more"><a href="../notice/notice_list.jsp">더보기</a></div>
                    </div>
                    <ul class="list">
                        <li><a href="../notice/notice_list.jsp" class="tit">기프티콘 발송일 변경 안내</a></li>
                        <li><a href="../notice/notice_list.jsp" class="tit">큐브미 론칭 연기 안내</a></li>
                        <li><a href="../notice/notice_list.jsp" class="tit">이니스프리 멤버십 정책 변경 공지</a></li>
                        <li><a href="../notice/notice_list.jsp" class="tit">PC 익스플로러 이용 제한 안내</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
        <!-- //body -->

        <!-- footer -->
		<jsp:include page="/html_mo/include/footer.jsp" />
		<!-- //footer -->
        
        <!-- 고객불만 처리절차 팝업 -->
        <div class="layPop resize" id="cusOnCenter_layer_1">
            <div class="wrapModal cusOnCenter_layer_1">
                <div class="inner">
                    <div class="resizeHead">
                        <h3>고객불만 처리절차</h3>
                    </div>
                    <div class="resizeBody">
                        <div class="cont_img">
                            <img src="/resources/mobile2/images/customer/cusOnCenter_layer_2.jpg" alt="">
                        </div>
                    </div>
                    <button type="button" class="mvClose" onclick="layerClose();">닫기</button>
                </div>
            </div>
        </div>
        <!-- //고객불만 처리절차 팝업 -->


        <!-- 고객불만 처리기준 팝업 -->
        <div class="layPop resize" id="cusOnCenter_layer_2">
            <div class="wrapModal cusOnCenter_layer_1">
                <div class="inner">
                    <div class="resizeHead">
                        <h3>고객불만 처리기준</h3>
                    </div>
                    <div class="resizeBody">
                        <p class="emp">제품에 이상이 있을 경우 [소비자기본법]에 따른 소비자분쟁해결기준에 따라  교환 또는 보상을 해 드립니다.</p>
                        <p>화장품</p>

                        <div class="tbl_type">
                            <table>
                                <caption>설치 대수, 설치 위치 및 촬영범위</caption>
                                <colgroup>
                                    <col style="width:60%">
                                    <col>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">불만 유형</th>
                                        <th scope="col">처리 기준</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            이물 혼입, 함량 부적합, 변질/부패, 유효기간 경과,<br/>
                                            용량부족 품질/성능/기능 불량
                                        </td>
                                        <td>제품 교환 또는 구입가 환불</td>
                                    </tr>
                                    <tr>
                                        <td>용기불량으로 인한 피해 사고, 부작용</td>
                                        <td>치료비, 경비 및 일실 소득불</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ul class="bulListType">
                            <li>
                                치료비 지급: 피부과 전문의의 진단 및 처방에 의한 질환 치료 목적의 경우로 함. 단, 화장품과의 인과관계가
                                있어야 하며, 자의로 행한 성형, 미용관리 목적으로 인한 경우에는 지급하지 아니한다.
                            </li>
                            <li>
                                일실소득: 피해로 인하여 소득상실이 발생한 것이 입증된 때에 한하며, 금액을 입증할 수 없는 경우에는
                                시중 노임단가를 기준으로 한다.
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="mvClose" onclick="layerClose();">닫기</button>
                </div>
            </div>
        </div>
        <!-- //고객불만 처리기준 팝업 -->
        
    </div>
</body>
</html>