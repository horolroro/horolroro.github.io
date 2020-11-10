/*
****** 2020 깡코딩 LICENSE 안내 ******
이 프로그램은 저작권법의 보호를 받습니다.
이 프로그램의 로직과 수식의 저작권은 깡코딩에 있음을 알려드립니다.
이 프로그램은 깡코딩 강의를 수강한 수강생들에게 무료로 제공됩니다.
이 프로그램은 웹,앱 프로젝트에 자유롭게 사용할 수 있지만
웹사이트, 커뮤니티, 블로그에 배포하거나 인터넷 강의, 유튜브등 유료 무료 강좌에 배포, 사용하는
행위는 민사 및 형사법에 의해 엄격히 규제되어 있으며, 기소 사유가 됩니다.
 */

/**
 * [ggangImgEffect 이미지 이펙트를 생성]
 * @return {[type]}             [..]
 * 히스토리 [..]
 */

/* 코드를 작성하세요 :D */

function ggangImgEffect(){

	var obj = $('.ggang_effect');
	var makeHtml = '';
	var row = 4;
	var columns = 8;

	var rowHeight = 100/row + '%';
	var columnsWidth = 100/columns + '%';


	for(var i=0;  i<row; i++){

		// console.log('-행-:'+i);
		for(var j=0; j<columns; j++){

			makeHtml += '<div class="img_box" style="width:'+ columnsWidth +'; height:'+ rowHeight +'; ">';
			makeHtml += '</div>';
			// console.log('열:'+j);
		}
	}

	$(obj).append(makeHtml);
}


$(function(){

	ggangImgEffect();

})









