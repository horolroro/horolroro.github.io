<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<header>
    <div class="banner" style="background:#32035f;">
        <button class="IbannerClose">닫기</button>
        <a href="#" class="img"><img src="/resources/mobile2/images/main/top_banner.jpg" alt="배너"></a>
    </div>
    <div class="txtBanner wtClose" style="background:#104138;">
        <button class="TbannerClose">닫기</button>
        <a href="#" class="txt">4만원 이상 구입시 편의점 3천원 기프티콘 증정!</a>
    </div>
    <div class="headerWrap">
        <div class="headerInner">
            <div class="headerAside">
                <h1><a href="#">innisfree</a></h1>
                <div class="myBox">
                    <button type="button" class="mySearch" onclick="layerOpen('search')"><span>검색</span></button>
                    <button type="button" class="myCart"><span>장바구니</span><em>3</em></button>
                </div>
            </div>
            <nav>
                <div class="headerNav">
                    <ul class="list">
                        <li class=""><a href="javascript:;">홈</a></li>
                        <li class="active"><a href="javascript:;"><img src="/resources/mobile2/images/temp/ZZ05_5_0.jpg" alt=""></a></li>
                        <li class=""><a href="javascript:;">HOT DEAL</a><span class="ic-hot"></span></li>
                        <li class=""><a href="javascript:;">FOR U</a></li>
                        <li class=""><a href="javascript:;">이벤트</a></li>
                        <li class=""><a href="javascript:;">리뷰</a></li>
                        <li class=""><a href="javascript:;">NEW</a></li>
                        <li class=""><a href="javascript:;">BEST</a></li>
                        <li class=""><a href="javascript:;">체험 프로그램</a></li>
                        <li class=""><a href="javascript:;">ABOUT US</a></li>
                    </ul>
                </div>
                <button type="button" class="btnAll">메뉴 전체보기</button>
                <div class="allMenu">
                    <ul class="section">
                        <li><a href="#"><img src="/resources/mobile2/images/temp/ZZ05_5_0.jpg" alt=""></a></li>
                        <li><a href="#">HOT DEAL</a></li>
                        <li><a href="#">FOR U</a></li>
                        <li><a href="#">이벤트</a></li>
                        <li><a href="#">리뷰</a></li>
                        <li><a href="#">NEW</a></li>
                        <li><a href="#">BEST</a></li>
                        <li><a href="#">체험 프로그램</a></li>
                        <li><a href="#">ABOUT US</a></li>
                    </ul>
                </div>
            </nav>
            <div class="floatingBanner">
                <a href="#"><img src="/resources/mobile2/images/temp/floating_banner.png" alt=""></a>
                <button type="button" class="btnHide" onclick="$('.floatingBanner').hide();">안보기</button>
            </div>
        </div>
    </div>
</header>

<div class="layPop resize" id="search">
    <div class="wrapModal">
        <div class="inner">
            <div class="resizeHead">
                <h3>검색</h3>
            </div>
            <div class="resizeBody search">
                <div class="searchWrap">
                    <fieldset class="searchInput">
                        <legend>검색</legend>
                        <input type="text" class="inputTxt" id="querytop" title="검색어을 입력">
                        <button class="btnSearch">검색</button>
                        <div class="keywordRolling">
                            <ul>
                                <li>
                                    <span class="txt">111마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
                                    <a href="https://www.google.com">바로가기</a>
                                </li>
                                <li>
                                    <span class="txt">222마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
                                    <a href="https://www.daum.net">바로가기</a>
                                </li>
                                <li>
                                    <span class="txt">333마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
                                    <a href="https://www.naver.com">바로가기</a>
                                </li>
                                <li>
                                    <span class="txt">111마이 레시피 바, 나만을 위한 마이 레시피 바, 나만을 위한</span>
                                    <a href="https://www.google.com">바로가기</a>
                                </li>
                            </ul>
                        </div>
                    </fieldset>
                    <script>
                        keywordRolling();
                    </script>
                </div>
                <div class="resultWrap" id="ark">
                    <p class="autoSechTit">추천검색어</p>	
                    <ul id="ark_content_list">
                        <li class="nodate">해당 단어로 시작하는 검색어가 없습니다.</li>
                        <li><a href="#">에코 내추럴 그린티 비비 크림</a></li>
                        <li><a href="#">그린티 씨드 세럼</a></li>
                        <li><a href="#">블랙 그린티 마스크 ex</a></li>
                        <li><a href="#">블랙 그린티 크림 ex</a></li>
                        <li><a href="#">그린티 퓨어 바디 젤 스크럽</a></li>
                        <li><a href="#">그린티 밸런싱 크림 ex</a></li>
                        <li><a href="#">블랙 그린티 세럼 ex</a></li>
                        <li><a href="#">그린티 밸런싱 로션 ex</a></li>
                        <li><a href="#">그린티 퓨어 바디 로션</a></li>
                        <li><a href="#">더 그린티 오 드 뚜왈렛</a></li>
                    </ul>	
                    <div class="autoSechF">		
                        <p class="searchWord">
                            <span><em id="autoquery" class="colorGreen">'ㅁㅈㄷㄹㅈㄷㄹ'</em> 검색</span>
                        </p>		
                        <button class="autoSechBtn" onclick="setArkOff('true');" type="button">자동완성 끄기</button>
                	</div>
                </div>
                <div class="tabWrap">
                    <div class="tabType">
                        <ul class="item2">
                            <li class="active"><button type="button" onclick="tabActive()"><span>인기 해시태그</span></button></li>
                            <li><button type="button" onclick="tabActive()"><span>인기 검색어</span></button></li>
                        </ul>
                    </div>
                    <div class="tabContents">
                        <div class="tabCont active">
                            <ul>
                                <li><a href="#">#민현코랄</a></li>
                                <li><a href="#">#무드코랄</a></li>
                                <li><a href="#">#슈퍼푸드</a></li>
                                <li><a href="#">#프바써바</a></li>
                                <li><a href="#">#프바써바</a></li>
                                <li><a href="#">#유리알립스틱</a></li>
                                <li><a href="#">#퍼스널원크림</a></li>
                                <li><a href="#">#그린티</a></li>
                                <li><a href="#">#구름블러틴트</a></li>
                            </ul>
                        </div>
                        <div class="tabCont">
                            <ul>
                                <li><a href="#">섀도우</a></li>
                                <li><a href="#">그린티</a></li>
                                <li><a href="#">선크림</a></li>
                                <li><a href="#">노세범</a></li>
                                <li><a href="#">화산송이</a></li>
                                <li><a href="#">아이브로우</a></li>
                                <li><a href="#">틴트</a></li>
                                <li><a href="#">네일</a></li>
                                <li><a href="#">브러쉬</a></li>
                                <li><a href="#">블루베리</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="mvClose" onclick="layerClose();">닫기</button>
        </div>
    </div>
</div>