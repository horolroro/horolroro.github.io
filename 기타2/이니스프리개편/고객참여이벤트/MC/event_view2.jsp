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
        <jsp:include page="/html_mo/include/header_mbs.jsp" >
             <jsp:param value="이벤트" name="subtitle"/>
        </jsp:include>
        <!-- //header -->
        <!-- body -->
        <div class="subWrap">
            <div class="event">
                <div class="eventView">
                    <div class="evHead">
                        <p class="title">이니스프리 카카오톡 플러스 친구에게 쇼핑지원금 1만원 쏜다!</p>
                        <p class="date">2019-07-22 ~ 2019-07-31</p>
                        <div class="shar">
                            <button type="button" onclick="layerOpen('share');">공유하기</button>
                        </div>
                    </div>
                    <div class="evBody">
                        <div class="evCoupon">
                            <a href="javascript:void(0);" onclick="eventLink();"><img src="/resources/mobile2/images/event/event_coupon.jpg" alt="이벤트"></a>
                            <p class="hide">8월1일,단 하루<br />이니스프리 카카오톡 플러스 친구에게</p>
                            <h2 class="hide">쇼핑지원금 1만원 쏜다!</h2>
                            <p class="hide">열받은 피부 진정은?&lt;NEW 제주 용암해수&gt;<br />열받은 마음 진정은?&lt;쇼핑지원금 1만원&gt;쏜다</p>
                            <p class="hide">쇼핑지원금 10,000원 수량 종료</p>
                            <p class="hide">이니스프리 쇼핑몰 전용<br />(2만5천원 이상 구매 시 사용가능)</p>
                            <ul class="hide">
                                <li>쿠폰 발급을 위해서는 로그인이 필요합니다</li>
                                <li>사이트 내 동시에 많은 고객이 접속하여 쿠폰 발급이 지연될 수 있습니다.</li>
                            </ul>
                            
                        </div>

				        <!-- 쿠폰이벤트 : S -->
                        <jsp:include page="/html_pc/events/event/event_coupon.jsp" />
                        <!-- 쿠폰이벤트 : E -->
                
                        <!-- 전체유의사항 : S -->
                        <jsp:include page="/html_pc/events/event/event_note.jsp" />
                        <!-- 전체유의사항 : E -->

                        <div class="eventReply">
                            <fieldset class="replyWrite">
                                <legend>댓글 작성 폼</legend>
                                <h3>댓글작성</h3>
                                <div class="area">
                                    <textarea cols="10" rows="3"></textarea>
                                    <button type="button" class="btnWrite">등록</button>
                                </div>
                                <p>
                                    <label class="inputChk"><input type="checkbox">
                                        <span>[필수] 개인정보 수집 및 이용에 동의합니다.</span>
                                    </label>
                                </p>
                                <ul class="dotList">
                                    <li>해당 이벤트는 개인정보 활용에 동의하셔야 참여 가능합니다.</li>
                                    <li>댓글 작성 후 등록 버튼을 누르시면 이벤트 참여가 완료됩니다.</li>
                                    <li>이벤트와 관련 없는 댓글은 임의로 삭제될 수 있습니다.</li>
                                </ul>
                                <ul class="dotList">
                                    <li>댓글 작성 후 등록 버튼을 누르시면 이벤트 참여가 완료됩니다.</li>
                                    <li>이벤트와 관련 없는 댓글은 임의로 삭제될 수 있습니다.</li>
                                </ul>
                            </fieldset>

                            <div class="replyList">
                                <p class="nodate">등록된 댓글이 없습니다.</p>
                                <ul class="cmtList" id="cmtList">
                                    <li>
                                        <div class="info">
                                            <span class="rating icoG">그린회원</span>
                                            <!-- <span class="rating icoW">웰컴회원</span>
                                            <span class="rating icoP">그린프라임회원</span> -->
                                            <span class="user">
                                                abc*****
                                            </span>
                                            <span class="date">2019-08-12 09:08</span>
                                        </div>

                                        <div class="replyCon">
                                            <div class="desc">한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요.  상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!</div>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.click(this);">수정</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="replyDelete();">삭제</button></span>
                                            </div>
                                        </div>
                                        <fieldset class="replyModify">
                                            <legend>댓글 수정</legend>
                                            <textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editComment();">저장</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.cancel(this);">취소</button></span>
                                            </div>
                                        </fieldset>
                                    </li>

                                    <li>
                                        <div class="info">
                                            <span class="rating icoG">그린회원</span>
                                            <!-- <span class="rating icoW">웰컴회원</span>
                                            <span class="rating icoP">그린프라임회원</span> -->
                                            <span class="user">
                                                abc*****
                                            </span>
                                            <span class="date">2019-08-12 09:08</span>
                                        </div>

                                        <div class="replyCon">
                                            <div class="desc">한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요.  상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!</div>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.click(this);">수정</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="replyDelete();">삭제</button></span>
                                            </div>
                                        </div>
                                        <fieldset class="replyModify">
                                            <legend>댓글 수정</legend>
                                            <textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editComment();">저장</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.cancel(this);">취소</button></span>
                                            </div>
                                        </fieldset>
                                    </li>

                                    
                                    <li>
                                        <div class="info">
                                            <!-- <span class="rating icoG">그린회원</span> -->
                                            <span class="rating icoW">웰컴회원</span>
                                            <!--<span class="rating icoP">그린프라임회원</span> -->
                                            <span class="user">
                                                abc*****
                                            </span>
                                            <span class="date">2019-08-12 09:08</span>
                                        </div>

                                        <div class="replyCon" style="display: none;">
                                            <div class="desc">한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요.  상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!</div>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.click(this);">수정</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="replyDelete();">삭제</button></span>
                                            </div>
                                        </div>
                                        <fieldset class="replyModify" style="display: block;">
                                            <legend>댓글 수정</legend>
                                            <textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editComment();">저장</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.cancel(this);">취소</button></span>
                                            </div>
                                        </fieldset>
                                    </li>

                                    <li>
                                        <div class="info">
                                            <span class="rating icoG">그린회원</span>
                                            <!-- <span class="rating icoW">웰컴회원</span>
                                            <span class="rating icoP">그린프라임회원</span> -->
                                            <span class="user">
                                                abc*****
                                            </span>
                                            <span class="date">2019-08-12 09:08</span>
                                        </div>

                                        <div class="replyCon">
                                            <div class="desc">한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요.  상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!</div>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.click(this);">수정</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="replyDelete();">삭제</button></span>
                                            </div>
                                        </div>
                                        <fieldset class="replyModify">
                                            <legend>댓글 수정</legend>
                                            <textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
                                            <div class="btn row2">
                                                <span><button type="button" class="btnA7b size32" onclick="editComment();">저장</button></span>
                                                <span><button type="button" class="btnA7b size32" onclick="editCmtBtn.cancel(this);">취소</button></span>
                                            </div>
                                        </fieldset>
                                    </li>

                                </ul>
                            </div>
                            <div class="btnWrap">
                                <button type="button" class="btnWt"><span class="arrMore">이전 댓글 더 보기</span></button>
                            </div>
                            <div class="newProduct">
                                <h2>NEW 수퍼 화산송이 라인</h2>
                                <div class="productTypeThumb">
                                    <ul>
                                        <li>
                                            <div class="itemThumb">
                                                <div class="stateWrap">
                                                    <p class="stateR"><strong>50</strong><em class="per">%</em></p>
                                                </div>
                                                <a href="#"><img src="/resources/mobile2/images/temp/product_img01.png" alt="제품명"></a>
                                                <div class="rk">
                                                    <span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk1.png" alt="수상마크"></span>
                                                    <span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk2.png" alt="수상마크"></span>
                                                    <span class="rkIcon"><img src="/resources/mobile2/images/common/icon_rk3.png" alt="수상마크"></span>
                                                </div>
                                            </div>
                                            <div class="itemInfor">
                                                <p class="tpDesc">20가지 스킨케어 솔루션</p>
                                                <p class="tpName"><a href="#">퍼스널 원크림</a></p>
                                                <p class="tPrice"><strong class="cost">28,000</strong><strong class="tUnit">39,000</strong>원<span class="tSock">일시품절</span></p> 
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
                                            <div class="itemThumb"><a href="#"><img src="/resources/mobile2/images/temp/product_img02.png" alt="제품명"></a></div>
                                            <div class="itemInfor">
                                                <p class="tpDesc">2개 구매 시 반값 결제</p>
                                                <p class="tpName"><a href="#">제주 용암해수 크림 마스크<br />60mL</a></p>
                                                <p class="tPrice"><strong class="cost">28,000</strong><strong class="tUnit">23,000</strong>원</p> 
                                            </div>
                                            <div class="way">
                                                <button type="button" class="hart" onclick="wishSel();">찜</button>
                                                <button type="button" class="cart">장바구니</button>
                                                <button type="button" class="card">바로구매</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="itemThumb">
                                                <a href="#"><img src="/resources/mobile2/images/temp/product_img01.png" alt="제품명"></a>
                                            </div>
                                            <div class="itemInfor">
                                                <p class="tpDesc">20가지 스킨케어 솔루션</p>
                                                <p class="tpName"><a href="#">퍼스널 원크림</a></p>
                                                <p class="tPrice"><strong class="cost">28,000</strong><strong class="tUnit">39,000</strong>원<span class="tSock">일시품절</span></p> 
                                            </div>
                                            <div class="way">
                                                <button type="button" class="hart" onclick="wishSel();">찜</button>
                                                <button type="button" class="cart">장바구니</button>
                                                <button type="button" class="card">바로구매</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="itemThumb"><a href="#"><img src="/resources/mobile2/images/temp/product_img02.png" alt="제품명"></a></div>
                                            <div class="itemInfor">
                                                <p class="tpDesc">2개 구매 시 반값 결제</p>
                                                <p class="tpName"><a href="#">제주 용암해수 크림 마스크<br />60mL60mL60mL60mL60mL60mL</a></p>
                                                <p class="tPrice"><strong class="cost">28,000</strong><strong class="tUnit">23,000</strong>원</p> 
                                            </div>
                                            <div class="way">
                                                <button type="button" class="hart" onclick="wishSel();">찜</button>
                                                <button type="button" class="cart">장바구니</button>
                                                <button type="button" class="card">바로구매</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="differentEvent">
                                <h2>다른 진행중인 이벤트</h2>
                                <div class="horizScroll">
                                    <ul class="eventList">
                                        <li>
                                            <div class="eImg"><a href="#"><img src="/resources/mobile2/images/event/event_img01.jpg" alt="제품명"></a></div>
                                            <p class="date">2019-07-22~2019-07-31</p>
                                            <p class="name"><a href="#">#홈캉스키트 수령 안내</a></p>
                                            <div class="eventType">
                                                <span>쇼핑몰</span>
                                            </div>
                                        </li>
                                        <!--<li>
                                            <div class="eImg"><a href="#"><img src="/resources/mobile2/images/event/event_img02.jpg" alt="제품명"></a></div>
                                            <p class="date">2019-07-22~2019-07-31</p>
                                            <p class="name"><a href="#">슈퍼푸드 비건 라인 온라인 선런칭</a></p>
                                            <div class="eventType">
                                                <span>쇼핑몰</span>
                                            </div>
                                        </li>-->
                                        <li><a href="#" class="productMore"><span>제품 더보기</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //body -->
        <!-- 공유하기 -->
        <div class="layPop size560" id="share">
            <div class="wrapModal">
                <div class="inner">
                    <div class="popWrap">
                        <div class="popHead">
                            <h3>공유하기</h3>
                        </div>
                        <div class="popBody">
                            <ul class="share">
                                <li><a href="#" class="face">페이스 북</a></li>
                                <li><a href="#" class="kakao">카카오톡</a></li>
                                <li><a href="#" class="story">카카오스토리</a></li>
                                <li><a href="#" class="url">url</a></li>
                            </ul>
                        </div>
                        <button type="button" class="mvClose" onclick="layerClose();">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <jsp:include page="/html_mo/include/footer.jsp" />
        <!-- //footer -->
    </div>
</body>
</html>