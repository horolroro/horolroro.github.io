<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = "이벤트";
	String description = "이니스프리 이벤트가 진행중입니다. 지금 바로 이벤트에 참여하시고 특별한 혜택을 누리세요.";
	String keyword = "이니스프리 이벤트, 화장품 이벤트, 이벤트 참여, 이벤트 혜택, 진행중인 이벤트, 경품 이벤트, 추천 이벤트";
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
		
		<div id="container">
			<jsp:include page="/html_pc/include/location.jsp" />

			<section id="contents">

				<div class="evtViewHead">
					<h2 class="pageTitle">NEW 수퍼 화산송이 클레이 무스 마스크 2X NEW 수퍼 화산송이 클레이 무스 마스크 2XNEW 수퍼 화산송이 클레이 무스 마스크 2X</h2>
					<p class="date">2019.07.22 – 2019.07.31</p>

					<!-- 공유하기 레이어 -->
					<div class="shareWrap">
						<button type="button" class="btnShare" onclick="shareLayer('open');">페이지 공유</button>

						<div class="shareLayer">
							<p class="tit">공유하기</p>
							<div class="shareBtn">
								<a href="#" class="btnShareFacebook">페이스북</a>
								<a href="#" class="btnShareKakao">카카오</a>
								<a href="#" class="btnShareUrl">URL</a>
							</div>
							<button type="button" class="btnClose" onclick="shareLayer('close');">공유 레이어 닫기</button>
						</div>

					</div>
					<!-- //공유하기 레이어 -->
				</div>

				<div class="eventCon eventViewPc">					
					<!-- html(include) -->
					<!-- START -->
					<div class="chuseok_delv">
						<style>
							.chuseok_delv{position:relative;text-align:center;}
							.chuseok_delv .mBr {display:none !important;}
							.chuseok_delv strong {font-family:'ngB'; font-weight:normal;}
							.chuseok_delv a {text-decoration:none;}
	
							.chuseok_delv .con1{position:relative;height:1828px;background:#468d85 url('http://www.innisfree.com/kr/ko/resources/event/201909/0903/chuseok_delv/con1Bg.jpg') no-repeat center top;}
							.chuseok_delv .con1 a{position:absolute;bottom:148px;left:50%;width:373px;height:70px;margin-left:-186.5px;}

							.evtjoin{display: block;width: 300px;height: 60px;margin-top: 60px;font-size: 24px;line-height: 60px;color: #fff;background: #000;border-radius: 3px;text-align: center;margin: 30px auto 0;}
	
							@media all and (max-device-width: 770px) {
								.chuseok_delv .pcBr {display:none !important;}
								.chuseok_delv .mBr {display:inline !important;}
	
								.chuseok_delv .con1{height:1167px;background:#468d85 url('http://www.innisfree.com/kr/ko/resources/event/201909/0903/chuseok_delv/con1Bg_m.jpg') no-repeat center top / 800px auto;}
								.chuseok_delv .con1 a{bottom:82.5px;width:289px;height:55px;margin-left:-144px;}
							}
						</style>
						<div class="con1">
							<h2 class="hide">추석 연휴<br> 배송 일정 안내 &amp; 무료 배송 이벤트</h2>
							<p class="hide">
								2019년 추석 연휴를 맞아, 이니스프리 쇼핑몰 배송 일정을 아래와 같이 안내 드립니다.<br>
								연휴 전 배송을 원하시는 고객님께서는 주문을 조금만 서둘러주시기 바랍니다.<br>
								더불어,  추석 연휴를 맞이하여 모든 구매 고객님들께 무료 배송 혜택을 드립니다!
							</p>
							<h3 class="hide">추석 연휴 무료 배송 이벤트 안내</h3>
							<dl class="hide">
								<dt>기간</dt>
								<dd>2019.09.09(월) ~ 2019.09.13(금)</dd>
							</dl>
							<dl class="hide">
								<dt>내용</dt>
								<dd>해당 기간 모든 구매 고객 무료 배송</dd>
							</dl>
							<dl class="hide">
								<dt>배송안내</dt>
								<dd>
									<ul>
										<li>- 9월 8일 주문 건까지는 추석 연휴 이전 배송이 가능하며, 이후 결제건은 16일부터 순차 발송 됩니다.</li>
										<li>- 일부 주문하신 제품의 재고 및 택배사 사정으로 인하여 배송이 지연될 수 있습니다.</li>
									</ul>
								</dd>
							</dl>
							<dl class="hide">
								<dt>반품안내</dt>
								<dd>
									<ul>
										<li>
											<dl>
												<dt>반품 접수</dt>
												<dd>9월 5일까지 반품 접수 가능</dd>
											</dl>
										</li>
										<li>
											<dl>
												<dt>반품 회수</dt>
												<dd>9월 16일부터 반품 회수 순차 진행</dd>
											</dl>
										</li>
									</ul>
								</dd>
							</dl>
							<a href="javascript:void(0);" onclick="eventLink();"><span class="hide">쇼핑하러 가기 go</span></a>
							<p class="hide">이니스프리와 함께 즐거운 추석 연휴 되세요!</p>

							
						</div>
						<script type="text/javascript">
							function eventLink(){
								if (_Device.type == 0) {	//웹
									window.open("https://www.innisfree.com/kr/ko/MainShopping.do");
								} else {	//태블릿/모바일
									location.href="http://m.innisfree.com/kr/ko/mMainShopping.do";
								}
							}
						</script>
					</div>
					<!-- END -->

					<!-- 20200408 신청하기 -->
					<a href="#" class="evtjoin">신청하기</a>
					
				</div>

				<!-- 쿠폰이벤트200403 : S -->
				<!-- 쿠폰이벤트가 아닌 경우 해당 소스 전체 노출 안되게 해주세요. -->
				<jsp:include page="/html_pc/events/event/event_coupon.jsp" />
				<!-- 쿠폰이벤트 : E -->

				<!-- 전체유의사항200403 : S -->
				<!-- 전체유의사항 입력값이 없을 경우 해당 소스 전체 노출 안되게 해주세요. -->
				<jsp:include page="/html_pc/events/event/event_note.jsp" />
				<!-- 전체유의사항 : E -->

				<!-- 20200408 고객신청이벤트 추가 -->
				<jsp:include page="/html_pc/events/event/event_customerJoinEvent.jsp" />
				<!-- //20200408 고객신청이벤트 추가 -->
				


				<section class="eventReply">
					<h3 class="hidden">댓글</h3>
					<fieldset class="replyWrite">
						<legend>댓글 작성 폼</legend>
						<textarea cols="10" rows="3"></textarea>
						<button type="button" class="btnWrite">작성하기</button>
						<p>
							<label class="inputChk"><input type="checkbox"> <span>[필수] 개인정보 수집 및 이용에 동의합니다.</span></label>
						</p>
					</fieldset>
					<ul class="bulListType">
						<li>해당 이벤트는 개인정보 활용에 동의하셔야 참여 가능합니다.</li>
						<li>댓글 작성 후 등록 버튼을 누르시면 이벤트 참여가 완료됩니다.</li>
						<li>이벤트와 관련 없는 댓글은 임의로 삭제될 수 있습니다.</li>
					</ul>
					<ul class="bulListType">
						<li>댓글 작성 후 등록 버튼을 누르시면 이벤트 참여가 완료됩니다.</li>
						<li>이벤트와 관련 없는 댓글은 임의로 삭제될 수 있습니다.</li>
					</ul>

					<div class="replyList">
						<ul class="cmtList" id="cmtList">
							<li class="nonList">등록된 댓글이 없습니다.</li>
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
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editCmtBtn.click(this);">수정</button>
										<button type="button" class="btnType5s" onclick="replyDelete();">삭제</button>
									</div>
								</div>
								<fieldset class="replyModify">
									<legend>댓글 수정</legend>
									<textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editComment();">저장</button>
										<button type="button" class="btnType5s" onclick="editCmtBtn.cancel(this);">취소</button>
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
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editCmtBtn.click(this);">수정</button>
										<button type="button" class="btnType5s" onclick="replyDelete();">삭제</button>
									</div>
								</div>
								<fieldset class="replyModify">
									<legend>댓글 수정</legend>
									<textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editComment();">저장</button>
										<button type="button" class="btnType5s" onclick="editCmtBtn.cancel(this);">취소</button>
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
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editCmtBtn.click(this);">수정</button>
										<button type="button" class="btnType5s" onclick="replyDelete();">삭제</button>
									</div>
								</div>
								<fieldset class="replyModify" style="display: block;">
									<legend>댓글 수정</legend>
									<textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editComment();">저장</button>
										<button type="button" class="btnType5s" onclick="editCmtBtn.cancel(this);">취소</button>
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
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editCmtBtn.click(this);">수정</button>
										<button type="button" class="btnType5s" onclick="replyDelete();">삭제</button>
									</div>
								</div>
								<fieldset class="replyModify">
									<legend>댓글 수정</legend>
									<textarea cols="10" rows="3" placeholder="한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요. 상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!"></textarea>
									<div class="btn">
										<button type="button" class="btnType7s" onclick="editComment();">저장</button>
										<button type="button" class="btnType5s" onclick="editCmtBtn.cancel(this);">취소</button>
									</div>
								</fieldset>
							</li>

						</ul>
					</div>
					<div class="btnWrap">
						<button type="button" class="btnType6l more">이전 댓글 더 보기</button>
					</div>

				</section>

				<div class="contWrap">

					<section class="evtBotList">
						<h3 class="subTitle4">NEW 수퍼 화산송이 라인</h3>
						<div class="pdtListType pdtListSub">
							<ul>
								<li>
									<a href="#" class="pdtImg">
										
										<span class="stikerWrap">
											<strong class="stikerType1">50%</strong>
											<strong class="stikerType3">온라인<br>전용</strong>
										</span>

										<span class="labelWrap">
											<span><img src="/resources/web2/images/common/icon_label1.png" alt=""></span>
											<span><img src="/resources/web2/images/common/icon_label2.png" alt=""></span>
											<span><img src="/resources/web2/images/common/icon_label3.png" alt=""></span>
										</span>
												
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
							</ul>
						</div>

					</section>

					<section class="evtBotList">
						<h3 class="subTitle4">스테디 화산송이 라인</h3>
						<div class="pdtListType pdtListSub">
							<ul>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">100,000,000</span>원
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#" class="pdtImg">
										<img src="/resources/web2/images/main/@pdt_img.jpg" alt="제품명">
									</a>
									<a href="#" class="pdtCont">
										<span class="txt">2개 구매 시 반값 결제</span>
										<span class="name">올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트올리브 &amp; 알로에 미스트</span>
										<span class="price">
											<del class="regular">20,000</del>
											<span class="num">9,000</span>원
											<span class="soldOut">일시품절</span>
										</span>
									</a>
								</li>
							</ul>
						</div>

					</section>

					<section class="evtBotList">
						<h3 class="subTitle4">다른 진행중인 이벤트</h3>
						<div class="evtList">
							<ul class="list">
								<li>
									<a href="/kr/ko/EventView.do?eventSeq=1063&amp;procStat=2&amp;channelTyp=">
										<span class="img">
											<img src="https://images.innisfree.co.kr/upload/event/1063_0.jpg" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="각종 커뮤니티에서 수상한 엠블럼 보유 제품 30% 할인">
										</span>
										<span class="descWrap">
											<span class="evtTime">2019.09.16 - 2019.09.18</span>
											<strong class="tit">스테디-셀러 특급 쎄-일스테디-셀러 특급 쎄-일스테디-셀러 특급 쎄-일</strong>
										</span>
										<span class="cate">
											<span>공통</span>
											<span>쇼핑몰/앱</span>
											<span>쇼핑몰</span>
										</span>
									</a>
								</li>
								<li>
									<a href="/kr/ko/EventView.do?eventSeq=1063&amp;procStat=2&amp;channelTyp=">
										<span class="img">
											<img src="https://images.innisfree.co.kr/upload/event/1063_0.jpg" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="각종 커뮤니티에서 수상한 엠블럼 보유 제품 30% 할인">
										</span>
										<span class="descWrap">
											<span class="evtTime">2019.09.16 - 한정수량마감</span>
											<strong class="tit">스테디-셀러 특급 쎄-일</strong>
										</span>
										<span class="cate">
											<span>공통</span>
										</span>
									</a>
								</li>
								<li>
									<a href="/kr/ko/EventView.do?eventSeq=1063&amp;procStat=2&amp;channelTyp=">
										<span class="img">
											<img src="https://images.innisfree.co.kr/upload/event/1063_0.jpg" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="각종 커뮤니티에서 수상한 엠블럼 보유 제품 30% 할인">
										</span>
										<span class="descWrap">
											<span class="evtTime">2019.09.16 - 2019.09.18</span>
											<strong class="tit">스테디-셀러 특급 쎄-일</strong>
										</span>
										<span class="cate">
											<span>공통</span>
											<span>쇼핑몰/앱</span>
											<span>쇼핑몰</span>
										</span>
									</a>
								</li>
								<li>
									<a href="/kr/ko/EventView.do?eventSeq=1063&amp;procStat=2&amp;channelTyp=">
										<span class="img">
											<img src="https://images.innisfree.co.kr/upload/event/1063_0.jpg" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="각종 커뮤니티에서 수상한 엠블럼 보유 제품 30% 할인">
										</span>
										<span class="descWrap">
											<span class="evtTime">2019.09.16 - 한정수량마감</span>
											<strong class="tit">스테디-셀러 특급 쎄-일</strong>
										</span>
										<span class="cate">
											<span>공통</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
						<a href="#" class="pdtMore">전체보기</a>
					</section>

				</div>

			</section>
		</div>

		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>