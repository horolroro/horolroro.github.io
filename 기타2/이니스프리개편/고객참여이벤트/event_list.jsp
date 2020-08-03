<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix= "fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="uf" uri="/WEB-INF/tld/user-function.tld" %>
<%@ taglib uri="/WEB-INF/tld/paging.tld" prefix="p"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="kr.innisfree.event.EventBean"%>
<%@page import="java.util.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%
	WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(application);
	Properties props = (Properties) context.getBean("siteConfig", Properties.class);
	String httpUrl = (String) props.getProperty("HTTP_ROOT")+ (String) props.getProperty("ORG_CODE");
%>
<c:set var="path" value="${_head_cdn_root }${uf:getConst('EVENT_FILE_UPLOAD') }"></c:set>
<c:set var="shopCD" value="${uf:getConst('EVENT_CD_VU0104') }"></c:set>

<%
Date from = new Date();

SimpleDateFormat transFormat = new SimpleDateFormat("yyyyMMddHHmm");

String to = transFormat.format(from).substring(0,11)+"7";

String tmpStat = request.getParameter("procStat");
EventBean eb = (EventBean)request.getAttribute("eventBean");
String channelTyp = eb.getChannelTyp();

String title = "";
if(tmpStat == null || tmpStat.equals("2")){
	if(channelTyp.equals("VU0104")) {
		title = "이벤트 - 쇼핑혜택";
	} else {
		title = "이벤트 - 진행중인 이벤트";		
	}
}else{
	title = "이벤트 - 종료된 이벤트";
}
String description = "이니스프리 이벤트가 진행중입니다. 지금 바로 이벤트에 참여하시고 특별한 혜택을 누리세요.";
String keyword = "이니스프리 이벤트, 화장품 이벤트, 이벤트 참여, 이벤트 혜택, 진행중인 이벤트, 경품 이벤트, 추천 이벤트";

String browser = request.getHeader("User-Agent");	// 브라우저 구해오기
boolean result = false;
if (browser.indexOf("Android") > 0) {				// 안드로이드로 접속했다면 결과값 true
	result = true;
} else if (browser.indexOf("iPhone") > 0) {			// 아이폰으로 접속했다면 결과값 true
	result = true;
} else if (browser.indexOf("iPad") > 0) {			// 아이폰으로 접속했다면 결과값 true
	result = true;
}

String eventSeq = request.getParameter("eventSeq");
String viewPageYn = request.getParameter("viewPageYn");
String procStat = request.getParameter("procStat");

if (result == true) {
	String url = "/kr/ko/mEventView.do?eventSeq="+eventSeq+"&viewPageYn="+viewPageYn+"&procStat="+procStat;
	response.sendRedirect(url);				// 웹 브라우저로 접속했다면 모바일사이트로 이동
}

String DepthFir = "이벤트";
String DepthSec = "진행중 이벤트";
if("3".equals(procStat)){
	DepthSec = "종료된 이벤트";
}
%>
<!DOCTYPE html>
<html lang="ko">
<head>
		<jsp:include page="${uf:getConst('INCLUDE_HEAD') }">
			<jsp:param value="ALL" name="robots"/>
			<jsp:param value="<%=keyword %>" name="keywords"/>
			<jsp:param value="<%=title%>" name="subject"/>
			<jsp:param value="<%=description %>" name="description"/>
			<jsp:param value="<%=title%>" name="title"/>
			<jsp:param value="innisfree.co.kr" name="author"/> 
			<jsp:param value="innisfree.co.kr" name="copyright"/>
			<jsp:param value="innisfree" name="writer"/>
			<jsp:param value="ko" name="language"/>
			<jsp:param value="2013. 04. 01" name="build"/>
		</jsp:include>
		
		<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-K8SNBK9&l=gv_GA_dataLayer"></script>
		<script async src="https://www.google-analytics.com/analytics.js"></script>
		<script type="text/javascript">
			function onclick_popup(popLayer){
				popLayer;
			}
			
			function goPage(pageNo){
				$("input[name=pageNo]").val(pageNo);
				$("#eventForm").submit();
			}
			
		</script>
	</head>

	<body>

		<div id="wrap">
		<form name="eventForm" id="eventForm" method="post" action="/kr/ko/Event.do">
			<input type="hidden" name="eventCl" value="<c:out value="${eventBean.eventCl }" />" />
			<input type="hidden" name="procStat" value="<c:out value="${eventBean.procStat }" />" />
			<input type="hidden" name="channelTyp" value="<c:out value="${eventBean.channelTyp }" />" />
			<input type="hidden" name="pageNo" value="<c:out value="${eventBean.pageNo }" />" />
		</form>

			<!-- header -->
				<jsp:include page="${uf:getConst('INCLUDE_HEADER') }" />
			<!-- //header -->
			
			<!-- container -->
			<div id="container">
			
			<!-- location -->
			<jsp:include page="${uf:getConst('INCLUDE_LOCATION') }">
				<jsp:param value="<%=DepthFir %>" name="DepthFir"/>	
				<jsp:param value="<%=DepthSec %>" name="DepthSec"/>				
			</jsp:include>
			<!-- //location -->
			
			<section id="contents">
				<h2 class="pageTitle">이벤트</h2>

				<div class="contWrap">

					<div class="eventVisualSlide">
						<div class="slide">
							<ul class="swiper-wrapper">
								<c:forEach var="topBnrList" items="${topBnrList }">
									<li class="swiper-slide">
										<c:choose>
	                                		<c:when test="${topBnrList.webTpl eq '3' }">
		                               			<c:choose>
			                               			<c:when test="${fn:indexOf(fn:toLowerCase(topBnrList.iframeLink), 'window.open') > -1}">
		                                				<a href="javascript:onclick_popup(<c:out value="${topBnrList.iframeLink }" escapeXml="true"/>);">
		                                					<img src="${path }${uf:GetProductImgName(topBnrList.eventSeq, topBnrList.topBnrImg, '_3')}" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="<c:out value="${topBnrList.bnrImgDesc}" />"/>
		                                				</a>
			                               			</c:when>
			                               			<c:otherwise>
				                               			<a href="<c:out value="${topBnrList.iframeLink }" escapeXml="true"/>">
				                               				<img src="${path }${uf:GetProductImgName(topBnrList.eventSeq, topBnrList.topBnrImg, '_3')}" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="<c:out value="${topBnrList.bnrImgDesc}" />"/>
				                               			</a>
			                               			</c:otherwise>
		                               			</c:choose>
	                                		</c:when>
	                                		<c:otherwise>
												<a href="/kr/ko/EventView.do?eventSeq=${topBnrList.eventSeq }">
													<img src="${path }${uf:GetProductImgName(topBnrList.eventSeq, topBnrList.topBnrImg, '_3')}" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="<c:out value="${topBnrList.bnrImgDesc}" />"/>
												</a>
	                                		</c:otherwise>
	                                	</c:choose>
									</li>
                               	</c:forEach>
							</ul>
						</div>
						<div class="slideControl">
							<span class="slidePage"></span>
						</div>
					</div>
					<script>
						eventVisualSlide();
					</script>

					<div class="eventMidBanner">
						<div class="banner">
							<a href="/kr/ko/FlagshipInniclass.do">
								<span class="img"><img src="${_head_cdn_root }/kr/ko/resources/web2/images/event/@event_bg.jpg?<%=to %>" alt=""></span>
								<span class="cont">
									<span class="cate">FLAGSHIP STORE</span>
									<strong class="name">이니클래스</strong>
									<span class="txt">오프라인 원데이클래스</span>
									<span class="hash">#제주라이프 #뷰티 #친환경DIY</span>
								</span>
							</a>
						</div>
						<div class="banner">
							<a href="/kr/ko/FlagshipMyRecipeBar.do">
								<span class="img"><img src="${_head_cdn_root }/kr/ko/resources/web2/images/event/@event_bg2.jpg?<%=to %>" alt=""></span>
								<span class="cont">
									<span class="cate">FLAGSHIP STORE</span>
									<strong class="name">마이 레시피바</strong>
									<span class="txt">나만의 로션, 스크럽, 배쓰밤 만들기</span>
									<span class="hash">#맞춤레시피 #나만의제품</span>
								</span>
							</a>
						</div>
					</div>

					<div class="evtTab">
						 <ul class="tabArea2">
							<c:set var="eventUrl" value="/kr/ko/Event.do?procStat=2&channelTyp=" />
							
							<li <c:if test="${eventBean.procStat eq '2' }"> class="on"</c:if>>
								<a href="<c:out value="${eventUrl }" />">진행중 이벤트 (<c:out value="${totCnt }" />)</a>
							</li>
							
							<li>
								<a href="/kr/ko/EventWin.do">당첨자 발표</a>
							</li>
							
							<li<c:if test="${eventBean.procStat eq '3' }"> class="on"</c:if>>
								<a href="/kr/ko/Event.do?procStat=3">종료된 이벤트</a>
							</li>
							
						</ul>
					</div>
					
					<div>
						<div class="evtList">
							<ul class="list" id="eventList">
							<c:if test="${empty eventList }">
                                	<li class="nonList"><c:out value="${(eventBean.procStat eq '2') ? '진행중인' : '종료된' }" /> 이벤트가 없습니다.</li>
                            </c:if>
                            <c:if test="${!empty eventList }">
                            	<c:forEach var="eventList" items="${eventList}" varStatus="status">
                            		<c:if test="${eventList.procStat eq eventBean.procStat}">
										<li>
											<c:choose>
		                                		<c:when test="${eventList.webTpl eq '3' }">
			                               			<c:choose>
				                               			<c:when test="${fn:indexOf(fn:toLowerCase(eventList.iframeLink), 'window.open') > -1}">
			                                				<a href="javascript:onclick_popup(<c:out value="${eventList.iframeLink }" escapeXml="true"/>);">
				                               			</c:when>
				                               			<c:otherwise>
				                               				<a href="<c:out value="${eventList.iframeLink }" escapeXml="true"/>">
				                               			</c:otherwise>
			                               			</c:choose>
		                                		</c:when>
		                                		<c:otherwise>
		                                			<a href="/kr/ko/EventView.do?eventSeq=${eventList.eventSeq }&amp;procStat=${eventBean.procStat }&amp;channelTyp=${(eventBean.channelTyp eq 'VU01') ? '' : eventBean.channelTyp }">
		                                		</c:otherwise>
		                                	</c:choose>
		                                	<span class="img">
                                    			<img src="${path }${uf:GetProductImgName(eventList.eventSeq, eventList.listImg, '_0') }" onerror="this.src='/kr/ko/resources/error/img/640x350.png'" alt="<c:out value="${eventList.basicDesc }" />" />
                                    		</span>
                                    		<span class="descWrap">
                                    			<span class="evtTime"><c:out value="${eventList.stDate}" /> ~ <c:if test="${empty eventList.periodEndDesc}"><c:out value="${eventList.endDate}" /></c:if><c:if test="${!empty eventList.periodEndDesc}"><c:out value="${eventList.periodEndDesc}" /></c:if></span>
                                    			<strong class="tit"><c:out value="${eventList.ttl }" /></strong>
                                    		</span>
												<span class="cate"><span>
													<c:set var="iconTp" />
													<c:forEach var="iconViewTp" items="${fn:split(eventList.iconViewTp,',') }" varStatus="idx">
														<c:if test="${iconViewTp eq 'C' }">
															<c:set var="iconTp" value="공통" />
														</c:if>
														<c:if test="${iconViewTp eq 'W' }">
															<c:if test="${idx.index == 0 }">
																<c:set var="iconTp" value="쇼핑몰" />
															</c:if>
															<c:if test="${idx.index > 0 }">
																<c:set var="iconTp" value="${iconTp } / 쇼핑몰" />
															</c:if>
														</c:if>
														<c:if test="${iconViewTp eq 'S' }">
															<c:if test="${idx.index == 0 }">
																<c:set var="iconTp" value="매장" />
															</c:if>
															<c:if test="${idx.index > 0 }">
																<c:set var="iconTp" value="${iconTp } / 매장" />
															</c:if>
														</c:if>
														<c:if test="${iconViewTp eq 'M' }">
															<c:if test="${idx.index == 0 }">
																<c:set var="iconTp" value="앱" />
															</c:if>
															<c:if test="${idx.index > 0 }">
																<c:set var="iconTp" value="${iconTp } / 앱" />
															</c:if>
														</c:if>
													</c:forEach><c:out value="${iconTp }" />
												</span></span>
											</a>
										</li>
									</c:if>
								</c:forEach>
							</c:if>
							</ul>
						</div>

						<c:if test="${eventBean.totalCount > 0 }">
							<p:webFrontN pageNo="${eventBean.pageNo }" totalCount="${eventBean.totalCount }" listScale="${eventBean.listScale }" />
						</c:if>
					</div>

				</div>

			</section>

			</div>
			<!-- //container -->

			<!-- footer -->
			<jsp:include page="${uf:getConst('INCLUDE_FOOTER') }"/>
			<!-- //footer -->

		</div>

	</body>
</html>