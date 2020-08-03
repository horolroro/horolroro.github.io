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
				<div class="staffShopWrap">
					<!-- 임직원 전용 특가샵 타이틀 영역-->
					<div class="mallHead">
						<div class="bx">
							<h2 class="tit">임직원 전용 <em>특가샵</em></h2>
							<p class="desc">이니스프리 및 AP 임직원 전용 이니스프리 제품 특가샵입니다.</p>
							<button class="btn_note">임직원샵 이용안내</button>
							<div class="note"> 
								<h4>임직원샵 이용안내</h4>
								<button type="button" class="btnLayerClose">레이어 팝업 닫기</button>
								<ul>
									<li>이니스프리 임직원샵은 사내 임직원 전용 복지몰로서 비정상 유통<br/>행위 시(유출 시) 사규에 의해 징계를 받을 수 있습니다. </li>
									<li>비정상 유통이 발생하지 않도록 임직원 여러분의 많은 협조 당부드립니다.</li>
									<li>임직원샵 메뉴에서 판매되는 특가 상품은 제조년월이 1년 이상 경과한<br/>구형 제품일 수 있으며 60~80% 할인된 가격으로 판매합니다.</li>
									<li>임직원샵 메뉴에 등록되지 않은 이니스프리의 모든 상품에 대해서는<br/>임직원 40% 할인이 적용됩니다.</li>
									<li>P포인트 추가 할인은 적용할 수 없습니다.<br/>임직원 여러분들의 양해 부탁드립니다.</li>
									<li>월 구매금액 한도는 결제금액 기준 80만원입니다.<br/>(임직원샵 메뉴 내 특가 제품 및 임직원 할인 제품 합산금액)</li>
								</ul>
							</div>
						</div>
					</div>
					<script>
						$('.mallHead .btn_note').on('click', function(){
							if($('.note').is(':visible')){
								$('.note').fadeOut();
							}else{
								$('.note').fadeIn();
							}
						})
						$('.btnLayerClose').on('click', function(){
							$('.note').fadeOut();
						});
					</script>
					
					<!-- 정렬 텍스트 -->
					<div class="sortCon">
						<p class="pdtListLength">총 <strong class="num">206개</strong>의 제품이 있습니다.</p>
						<div class="pdtSortTab">
							<ul>
								<li><input type="radio" id="pdtListSort1" name="pdtListSort" checked=""><label for="pdtListSort1">등록순</label></li>
								<li><input type="radio" id="pdtListSort2" name="pdtListSort"><label for="pdtListSort2">낮은 가격순</label></li>
								<li><input type="radio" id="pdtListSort3" name="pdtListSort"><label for="pdtListSort3">높은 가격순</label></li>
								<li><input type="radio" id="pdtListSort4" name="pdtListSort"><label for="pdtListSort4">할인율순</label></li>
							</ul>
						</div>
						<!-- 상세 검색 -->
						<div class="pdtSort">
							<button type="button" class="btnDetailSrch" onclick="pdtSort();"><span>상세 검색</span></button>
							<div class="pdtSortBox halfSel">
								<div class="pdtSortChkWrap">
									<div class="sortList">
										<p class="pdtSortSTit">유형별</p>
										<ul>
											<li><label for="benefit5" class="inputChk"><input type="checkbox" name="srchP_typeArr" value="P" id="benefit5"><span>기획세트(22)</span></label></li>
											<li><label for="benefit3" class="inputChk"><input type="checkbox" name="srchP_typeArr" value="N" id="benefit3"><span>사은품(5)</span></label></li>
											<li><label for="benefit4" class="inputChk"><input type="checkbox" name="srchP_typeArr" value="D" id="benefit4"><span>가격할인(29)</span></label></li>
										</ul>
									</div>
									<div class="sortList">
										<p class="pdtSortSTit">라인별</p>
										<ul id="materialList">
											<li><label for="material1" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material1" value="RM01"><span>화산송이(1)</span></label></li>
											<li><label for="material2" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material2" value="RM02"><span>감귤(1)</span></label></li>
											<li><label for="material3" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material3" value="RM04"><span>녹차(20)</span></label></li>
											<li><label for="material4" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material4" value="RM07"><span>비자(10)</span></label></li>
											<li><label for="material5" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material5" value="RM08"><span>유채(3)</span></label></li>
											<li><label for="material6" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material6" value="RM10"><span>용암해수(4)</span></label></li>
											<li><label for="material7" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material7" value="RM11"><span>삼나무(1)</span></label></li>
											<li><label for="material8" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material8" value="RM12"><span>청보리(3)</span></label></li>
											<li><label for="material9" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material9" value="RM13"><span>올리브(6)</span></label></li>
											<li><label for="material10" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material10" value="RM15"><span>한란(10)</span></label></li>
											<li><label for="material11" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material11" value="RM16"><span>푸른콩(8)</span></label></li>
											<li><label for="material12" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material12" value="RM20"><span>생강(3)</span></label></li>
											<li><label for="material13" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material13" value="RM22"><span>알로에(2)</span></label></li>
											<li><label for="material14" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material14" value="RM23"><span>꽃송이(5)</span></label></li>
											<li><label for="material15" class="inputChk"><input type="checkbox" name="lineCate1stArr" id="material15" value="RM24"><span>슈퍼푸드(17)</span></label></li>
										</ul>
									</div>
								</div>

								<div class="sortSelItem">
									<span>모공 <button type="button" class="btnDel">지우기</button></span>
									<span>청보리 <button type="button" class="btnDel">지우기</button></span>
									<span>모공 <button type="button" class="btnDel">지우기</button></span>
									<span>청보리 <button type="button" class="btnDel">지우기</button></span>
									<span>모공 <button type="button" class="btnDel">지우기</button></span>
									<span>청보리 <button type="button" class="btnDel">지우기</button></span>
									<span>모공 <button type="button" class="btnDel">지우기</button></span>
									<span>청보리 <button type="button" class="btnDel">지우기</button></span>
								</div>

								<div class="btnWrap">
									<button type="button" class="btnType6m" onclick="clearLnbSrch();">초기화</button>
									<button type="button" class="btnType3m">검색</button>
								</div>
								
								<button type="button" class="btnClose" onclick="pdtSort('close');">검색영역 닫기</button>
							</div>
						</div>
					</div>
					
					<!-- 리스트 li -->
					<div class="pdtListType pdtListSub">
						<!-- 검색결과 없음 -->
						<ul>
							<li class="nonList">
								선택하신 조건에 맞는 제품이 없습니다. 다시 선택해주세요.
							</li>
						</ul>
						<!-- //검색결과 없음 -->
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
						</ul>
					</div>
				</div><!-- //staffShopWrap -->

				<!-- 페이징 -->
				<div class="paging">
					<span class="pageNav prev2"><a href="#">처음 목록</a></span>
					<span class="pageNav prev"><a href="#">이전 목록</a></span>
					<span class="num on"><a href="#">1</a></span>
					<span class="num"><a href="#">2</a></span>
					<span class="num"><a href="#">3</a></span>
					<span class="num"><a href="#">4</a></span>
					<span class="num"><a href="#">5</a></span>
					<span class="num"><a href="#">6</a></span>
					<span class="num"><a href="#">8</a></span>
					<span class="num"><a href="#">9</a></span>
					<span class="num"><a href="#">10</a></span>
					<span class="pageNav next"><a href="#">다음 목록</a></span>
					<span class="pageNav next2"><a href="#">마지막 목록</a></span>
				</div>
			</section><!-- //contents -->
			
		</div>

		
		<jsp:include page="/html_pc/include/footer.jsp" />

	</div>

</body>
</html>