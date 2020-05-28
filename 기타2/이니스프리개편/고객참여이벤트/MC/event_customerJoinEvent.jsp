<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- 신청 정보 입력 레이어 -->
<div class="layPop size560" id="" style="display: none">
	<div class="wrapModal">
		<div class="inner">
			<div class="popWrap">
				<div class="popHead">
					<h3>신청 정보 입력</h3>
				</div>
				<div class="popBody">
					<div class="customerEventLayer">
						<p class="txt_1">
							이벤트 참여를 위해 아래의 정보를 정확하게 입력해주세요.
						</p>
						<div class="eventTable">
							<table>
								<caption>정보입력</caption>
								<colgroup>
									<col style="width: 30%;">
									<col>
								</colgroup>
								<tbody>
									<tr>
										<th scope="row">이름</th>
										<td>
											<input type="text" id="" name="" value="" class="inputTxt" style="width:100%;">
											<p class="inputAlt" id="">
												이름을 입력해 주세요.
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">휴대폰번호</th>
										<td>
											<div class="phone">
												<div class="selectBox">
													<select name="mobileNo1">
														<option value="010" selected="selected">010</option>
														<option value="011">011</option>
														<option value="016">016</option>
														<option value="017">017</option>
														<option value="018">018</option>
														<option value="019">019</option>
													</select>
												</div>
												<input type="text" class="inputTxt">
												<input type="text" class="inputTxt">
											</div>
											<p class="inputAlt">휴대폰번호를 입력해주세요.</p>
										</td>
									</tr>
									<tr>
										<th scope="row">이메일</th>
										<td>
											<input type="text" id="email" name="email" value="" class="inputTxt" style="width:100%;">
											<p class="inputAlt">정확한 이메일을 입력해 주세요.</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<ul class="dotList">
							<li>잘못된 정보 기재 시 이벤트 대상에서 제외될 수 있습니다.</li>
						</ul>
		
						<div class="btnWrap">
							<button type="button" class="btnBk btn">확인</button>
						</div>
					</div>
				</div>
				<button type="button" class="mvClose" onclick="layerClose();">닫기</button>
			</div>
		</div>
	</div>
</div>

<!-- 이벤트 신청 레이어 -->
<div class="layPop size560" id="" style="display: none">
	<div class="wrapModal">
		<div class="inner">
			<div class="popWrap">
				<div class="popHead">
					<h3>이벤트 신청</h3>
				</div>
				<div class="popBody">
					<div class="customerEventLayer">
						<p class="txt_1">
							신청 내용은 한 번 등록된 경우 수정이 불가하니 신중하게 입력해주세요.
						</p>
						
						<textarea id="cnt" name="cnt" onkeydown="checkleng(this);" placeholder="내용을 입력해주세요." style="width: 100%; height: 20vh;"></textarea>
						
						<ul class="dotList">
							<li>잘못된 정보 기재 시 이벤트 대상에서 제외될 수 있습니다.</li>
						</ul>
		
						<div class="btnWrap">
							<button type="button" class="btnBk btn">확인</button>
						</div>
					</div>
				</div>
				<button type="button" class="mvClose" onclick="layerClose();">닫기</button>
			</div>
		</div>
	</div>
</div>

<!-- 신청제품선택 -->
<div class="layPop size560" id="" style="display: none">
	<div class="wrapModal">
		<div class="inner">
			<div class="popWrap">
				<div class="popHead">
					<h3>신청제품선택</h3>
				</div>
				<div class="popBody">
					<div class="customerEventLayer mbs">
						<p class="kitTxt">
							신청한 제품은 변경이 불가능합니다. 단, 신청기간 내 매장 및 배송지 변경은 가능합니다.
						</p>
						<ul class="kitList">
							<li>
								<label class="inputRadio">
									<input type="radio" checked="">
									<span><img src="/resources/mobile2/images/membership/kit_img01.png" alt=""></span>
									<div class="kit">
										<strong>프라임 키트 1</strong>
										<p>(잔여수량 : 999)</p>
									</div>
								</label>
							</li>
							<li>
								<label class="inputRadio">
									<input type="radio">
									<span><img src="/resources/mobile2/images/membership/kit_img02.png" alt=""></span>
									<div class="kit">
										<strong>프라임 키트 1</strong>
										<p>(잔여수량 : 999)</p>
									</div>
								</label>
							</li>
							<li>
								<label class="inputRadio">
									<input type="radio">
									<span><img src="/resources/mobile2/images/membership/kit_img03.png" alt=""></span>
									<div class="kit">
										<strong>프라임 키트 1</strong>
										<p>(잔여수량 : 999)</p>
									</div>
								</label>
							</li>
							<li>
								<label class="inputRadio">
									<input type="radio">
									<span><img src="/resources/mobile2/images/membership/kit_img04.png" alt=""></span>
									<div class="kit">
										<strong>프라임 키트 4</strong>
										<p>(잔여수량 : 999)</p>
									</div>
								</label>
							</li>
							<li>
								<label class="inputRadio">
									<input type="radio">
									<span><img src="/resources/mobile2/images/membership/kit_img04.png" alt=""></span>
									<div class="kit">
										<strong>프라임 키트 4</strong>
										<p>(잔여수량 : 999)</p>
									</div>
								</label>
							</li>
							<li>
								<label class="inputRadio">
									<input type="radio">
									<span><img src="/resources/mobile2/images/membership/kit_img04.png" alt=""></span>
									<div class="kit">
										<strong>프라임 키트 4</strong>
										<p>(잔여수량 : 999)</p>
									</div>
								</label>
							</li>
						</ul>
						<div class="btnWrap">
							<button type="button" class="btnBk">확인</button>
						</div>
					</div>


				</div>
				<button type="button" class="mvClose" onclick="layerClose();">닫기</button>
			</div>
		</div>
	</div>
</div>

<!-- 신청확인 1,2,3 -->
<div class="layPop size560" id="" style="display: none">
	<div class="wrapModal">
		<div class="inner" style="height: 90vh;">
			<div class="popWrap">
				<div class="popHead">
					<h3>신청확인</h3>
				</div>
				<div class="popBody">
					<div class="layerContents customerEventLayer">
						<h4 class="subTit_1">3월 고객신청 이벤트</h4>
						<div class="eventTable_2">
							<table>
								<caption>신청기간,수령기간</caption>
								<colgroup>
									<col style="width: 25%">
									<col>
								</colgroup>
								<tbody>
									<tr>
										<th scope="row">신청기간</th>
										<td>
											2019-09-01 ~ 2019-09-30
										</td>
									</tr>
									<tr>
										<th scope="row">수령기간</th>
										<td>
											2019-09-01 ~ 2019-09-30
										</td>
									</tr>
								</tbody>
							</table>
						</div>
		
						<div class="eventTable_3">
							<table>
								<caption>고객명,신청제품,등급,수령매장</caption>
								<colgroup>
									<col style="width: 30%">
									<col>
								</colgroup>
								<tbody>
									<tr>
										<th scope="row">고객명</th>
										<td>
											홍길동
										</td>
									</tr>
									<tr>
										<th scope="row">신청제품</th>
										<td>
											제주 왕벚꽃미스트 120mL
										</td>
									</tr>
									<tr>
										<th scope="row">등급</th>
										<td>
											WELCOME
										</td>
									</tr>
									<tr>
										<th scope="row">수령매장</th>
										<td>
											명동점 (N011)
										</td>
									</tr>
								</tbody>
							</table>
						</div>
		
						<ul class="dotList">
							<li>수령매장은 신청기간 내 변경이 가능합니다.</li>
						</ul>
		
						<div class="txtBx_1">
							+_+! 정말 갖고 싶었던 제품입니다~!! 평생 없어서는 안될 저의 핫잇템! 
							드디어 이벤트로 통해서 진행을 하는군요! 정말 필요했었는데…<br/>
							건조한 사무실에서 내 얼굴에 즉각적인 수분을 채워 건조할틈 없이 <br/>
							촉촉하고 화사한 피부로 가꿔주는 수분 아이
						</div>
		
						<!-- 배송지인 경우 추가 -->
						<div class="onoffbx_1" style="display: block;">
							<h4 class="subTit_2">수령배송지</h4>
							<div class="txtBx_2">
								<p>
									홍길동 010-1234-5678
								</p>
								<p>
									서울 용산구 한강대로 100 아모레퍼시픽
								</p>
							</div>
		
							<ul class="dotList">
								<li>배송지는 신청기간 내 변경이 가능합니다.</li>
							</ul>
						</div>
		
						<div class="btnWrap">
							<button type="button" class="btnBk btn">신청하기</button>
						</div>
		
						<!-- 제3자 제공 노출 설정한 경우 추가-->
						<div class="onoffbx_2" style="display: block;">
							<div class="profileRegTerms">
								<div class="box">
									<label class="inputChk"><input type="checkbox" id="eventJoinAgr"> <span>제 3자 제공 동의(필수)</span></label>
									<div class="terms">
										1. 목적: 이벤트 응모로 인한 상품 및 경품(서비스), 배송(전송), 고객상담 등 정보통신서비스제공 계약 및 전자상거래(통신판매)계약의 이행을 위해 필요한 업무의 처리<br/>
										2. 항목 : ID, 성명, 휴대폰번호, 배송지 주소, 이메일주소
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<button type="button" class="mvClose" onclick="layerClose();">닫기</button>
			</div>
		</div>
	</div>
</div>

<!-- 신청완료 -->
<div class="layPop size560" id="" style="display: block">
	<div class="wrapModal">
		<div class="inner" style="height: 90vh;">
			<div class="popWrap">
				<div class="popHead">
					<h3>신청완료</h3>
				</div>
				<div class="popBody">
					<div class="layerContents customerEventLayer">
						<!-- 완료 메시지 6개-->
						<div class="completeTxt" style="display:none">
							<em>신청 완료되었습니다.</em>
							<p>수령기간<span>2019-09-01 ~ 2019-09-30</span></p>
						</div>
						<div class="completeTxt" style="display:none">
							<em>신청 완료되었습니다.</em>
							<p>발송예정일<span>2020-04-01</span></p>
						</div>   
						<div class="completeTxt" style="display:none">
							<em>신청 완료되었습니다.</em>
							<p>지급기간<span>2020-04-01</span></p>
						</div>
						<div class="completeTxt" style="display:none">
							<em>고객님은 이미 신청되었습니다.</em>
							<p>신청일자<span>2020-04-01</span></p>
							<p>수령기간<span>2019-09-01 ~ 2019-09-30</span></p>
						</div>
						<div class="completeTxt" style="display:none">
							<em>고객님은 이미 신청되었습니다.</em>
							<p>신청일자<span>2020-04-01</span></p>
							<p>발송예정일<span>2020-04-01</span></p>
						</div>
						<div class="completeTxt" style="display: block">
							<em>고객님은 이미 신청되었습니다.</em>
							<p>신청일자<span>2020-04-01</span></p>
							<p>지급기간<span>2020-04-01</span></p>
						</div>
		
						<div style="display: block;">
							<div class="eventTable_3">
								<table>
									<caption>고객명,신청제품,등급,수령매장</caption>
									<colgroup>
										<col style="width: 25%">
										<col>
									</colgroup>
									<tbody>
										<tr>
											<th scope="row">신청제품</th>
											<td>
												제주 왕벚꽃미스트 120mL
											</td>
										</tr>
										<tr>
											<th scope="row">수령매장</th>
											<td>
												명동점 (N011)
											</td>
										</tr>
									</tbody>
								</table>
							</div>
			
							<ul class="dotList">
								<li>수령매장은 신청기간 내 변경 가능합니다.</li>
							</ul>
						</div>
						
						<div class="txtBx_1">
							+_+! 정말 갖고 싶었던 제품입니다~!! 평생 없어서는 안될 저의 핫잇템! 
							드디어 이벤트로 통해서 진행을 하는군요! 정말 필요했었는데…<br/>
							건조한 사무실에서 내 얼굴에 즉각적인 수분을 채워 건조할틈 없이 <br/>
							촉촉하고 화사한 피부로 가꿔주는 수분 아이
						</div>
						<ul class="dotList" style="display: block;">
							<li>매장 수령 기간은 신청일과 별도이니 수령기간을 반드시 확인해 주시기 바랍니다.</li>
							<li>문의사항은 이니스프리 고객센터 (080-380-0114)로 문의주시기 바랍니다.</li>
						</ul>
		
						<!-- 배송지인 경우 추가 -->
						<div class="onoffbx_1" style="display: block;">
							<h4 class="subTit_2">수령배송지</h4>
							<div class="txtBx_2">
								<p>
									홍길동 010-1234-5678
								</p>
								<p>
									서울 용산구 한강대로 100 아모레퍼시픽
								</p>
							</div>
		
							<ul class="dotList">
								<li>배송지는 신청기간 내 변경 가능합니다.</li>
								<li>수령 배송지 정보가 잘못 되었을 경우 발송 진행이 어려울 수 있습니다.</li>
								<li>문의사항은 이니스프리 고객센터(080-380-0114)로 문의주시기 바랍니다.</li>
							</ul>
						</div>
		
						<!-- 확인 -->
						<div class="btnWrap">
							<button type="button" class="btnBk btn">확인</button>
						</div>
		
						<!-- 버튼 수정하기/확인하기 -->
						<div class="btnWrap row2" style="display: none;">
							<span><button type="button" class="btnWt">수정하기</button></span>
							<span><button type="button" class="btnBk">확인</button></span>
						</div>
					</div>
				</div>
				<button type="button" class="mvClose" onclick="layerClose();">닫기</button>
			</div>
		</div>
	</div>
</div>

<div class="customerEventArea">
					
	<div class="eventReply">
		<h3 class="hidden">댓글</h3>

		<div class="replyList">
			<p class="nodate">등록된 댓글이 없습니다.</p>
			<h4>이벤트참여</h4>
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
						<div class="pdtName">제주 왕벚꽃미스트 120mL</div>
						<div class="desc">한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요.  상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!</div>
					</div>
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
						<div class="pdtName">제주 왕벚꽃미스트 120mL</div>
						<div class="desc">한란 인리치드 크림 너무 좋아요. 건성 피부라서 사계절 내내 건조했는데 이젠 촉촉해요. 같이 배송된 토이스토리 케이스 상자도 샘플 보관하기 딱 좋아요.  상자도 샘플 보관하기 딱 좋아요. 앞으로도 이런 구성이 많이 나오면 좋겠어요!!</div>
					</div>
				</li>


			</ul>
		</div>
	</div>

	<div class="paging">
		<span class="pageNav prev2"><a href="#">처음 목록</a></span>
		<span class="pageNav prev"><a href="#">이전 목록</a></span>
		<span class="num on"><a href="#">1</a></span>
		<span class="num"><a href="#">2</a></span>
		<span class="num"><a href="#">3</a></span>
		<span class="num"><a href="#">4</a></span>
		<span class="num"><a href="#">5</a></span>
		<span class="pageNav next"><a href="#">다음 목록</a></span>
		<span class="pageNav next2"><a href="#">마지막 목록</a></span>
	</div>

</div>
