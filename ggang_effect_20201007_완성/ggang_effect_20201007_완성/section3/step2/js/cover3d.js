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

function ggangImgEffect(){

	var obj = $('.ggang_effect'); //이펙트 엘리먼트 최상위 요소
	var makeHtml = ''; //행과 열에 적용될 html을 담을 변수
	var row = 1;
	var columns = 2;

	var rowHeight = 100/row + '%'; //네모박스의 높이를 구함
	var columnsWidth = 100/columns + '%'; // 네모박스의 넓이를 구함
	var imgWidth = 100*columns + '%'; //이미지 박스 넓이 (section2-1)
	var imgHeight = 100*row + '%'; //이미지 박스 이 (section2-1)

	var setStyle = [];

	setStyle[0] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateY(80deg); transition-duration: 3s;';
	setStyle[1] = 'transform-style: preserve-3d; transform-origin: 100% 50% ; transform:perspective(450px) rotateY(-80deg); transition-duration: 3s;';

	for(var i=0; i<row; i++){ // 행

		for(var j=0; j<columns; j++){ // 열

			var delaySpeed = ((columns-j)-(i*0.5)) * 0.25; //(section2-1)
			var left = -j*100 + '%'; //(section2-1)
			var top = -i*100 + '%'; //(section2-1)

			// makeHtml += '<div class="img_box" style="'+ setStyle +' width:' + columnsWidth + '; height:' + rowHeight + '; transition-delay:'+ delaySpeed +'s" >'; //행과 열에 적용될 html을 담음
			// makeHtml += '<div class="img_position" style="width:' + imgWidth + '; height:' + imgHeight + '; left:' + left + '; top:' + top + ';"></div>'; //박스 셀 안에 위치하게될 이미지의 넓이 높이와 포지션을 설정 (section2-1)
			// makeHtml += '</div>';

			makeHtml += '<div class="img_box" style="'+ setStyle[j] +' width:' + columnsWidth + '; height:' + rowHeight + ';" >'; //행과 열에 적용될 html을 담음
			makeHtml += '<div class="img_position" style="width:' + imgWidth + '; height:' + imgHeight + '; left:' + left + '; top:' + top + ';"></div>'; //박스 셀 안에 위치하게될 이미지의 넓이 높이와 포지션을 설정 (section2-1)
			makeHtml += '</div>';

		}

	}

	$(obj).append(makeHtml); //이펙트 엘리먼트에 스크립트에서 만들어낸 요소를 추가함

	setTimeout(function(){ //(section2-1)
		$(obj).find('.img_box').addClass('active'); //액티브 클래스가 추가 됐을때 이펙트를 실행 //(section2-1)
	},200);

}

$(function(){

	ggangImgEffect(); //프로그램 시작

});


