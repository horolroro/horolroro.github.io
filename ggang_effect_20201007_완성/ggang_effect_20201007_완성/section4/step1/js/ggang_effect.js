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
	var row;
	var columns;

	var rowHeight;
	var columnsWidth;
	var imgWidth;
	var imgHeight;
	var setStyle = [];

	var cusotomEffect = false;
	var effectType = ['fadeIn', 'inRight', 'inRight2','inRight3','inRotate','inScale','inSkew','inMix','inMixCustom','inRotateCustom','inRotateCustom2','inScaleCustom','cover3d','xRotate3d','yRotate3d'];
	var randomNumber = Math.floor(Math.random()*effectType.length);
	var thisType = effectType[randomNumber];

	//setStyle[0] = 'transform-origin: 0% 50%; transform: perspective(450px) rotateY(80deg); transition-delay:.3s; transition-duration: 3s;';
	// setStyle[1] = 'transform-origin: 100% 50%; transform: perspective(450px) rotateY(-80deg); transition-delay:.3s; transition-duration: 3s;';

	switch(thisType){

		case 'fadeIn':
			row = 4;
			columns = 8;
			setStyle = '';
		break;

		case 'inRight':
			row = 4;
			columns = 8;
			setStyle = 'transform:translateX(100%);';
		break;

		case 'inRight2':
			row = 4;
			columns = 1;
			setStyle = 'transform:translateX(100%);';
		break;

		case 'inRight3':
			row = 1;
			columns = 4;
			setStyle = 'transform:translateX(100%);';
		break;

		case 'inRotate':
			row = 4;
			columns = 8;
			setStyle = 'transform:rotate(90deg);';
		break;

		case 'inScale':
			row = 4;
			columns = 8;
			setStyle = 'transform:scale(0.2);';
		break;

		case 'inSkew':
			row = 4;
			columns = 8;
			setStyle = 'transform:skew(40deg);';
		break;

		case 'inMix':
			row = 2;
			columns = 4;
			setStyle = 'transform:scale(0.2) skew(40deg) rotate(90deg);';
		break;

		case 'inMixCustom':
			row = 1;
			columns = 4;
			setStyle[0] = 'transform-origin: 0% 50%; transform: scale(0.2) skew(40deg) rotate(20deg); transition-delay:.3s;';
			setStyle[1] = 'transform-origin: 0% 50%; transform: scale(0.2) skew(40deg) rotate(-20deg); transition-delay:.3s;';
			setStyle[2] = 'transform-origin: 100% 100%; transform: scale(0.2) skew(60deg) rotate(-40deg); transition-delay:1.2s;';
			setStyle[3] = 'transform-origin: 0% 100%; transform: scale(0.2) skew(-60deg) rotate(40deg); transition-delay:1.2s;';
			cusotomEffect = true;
		break;

		case 'inRotateCustom':
			row = 1;
			columns = 4;
			setStyle[0] = 'transform-origin: 0% 50%; transform: rotate(20deg); transition-delay:.3s;';
			setStyle[1] = 'transform-origin: 0% 50% ; transform: rotate(-10deg); transition-delay:.1s;';
			setStyle[2] = 'transform-origin: 0% 50% ; transform: rotate(10deg); transition-delay:.7s;';
			setStyle[3] = 'transform-origin: 0% 50% ; transform: rotate(-15deg); transition-delay:1.2s;';
			cusotomEffect = true;
		break;

		case 'inRotateCustom2':
			row = 1;
			columns = 4;
			setStyle[0] = 'transform-origin: 0% 50%; transform: rotateX(-90deg); transition-delay:.3s;';
			setStyle[1] = 'transform-origin: 0% 50%; transform: rotateX(-90deg); transition-delay:.1s;';
			setStyle[2] = 'transform-origin: 0% 50%; transform: rotateX(-90deg); transition-delay:.7s;';
			setStyle[3] = 'transform-origin: 0% 50%; transform: rotateX(-90deg); transition-delay:1.2s;';
			cusotomEffect = true;
		break;

		case 'inScaleCustom':
			row = 1;
			columns = 4;
			setStyle[0] = 'transform-origin: 0% 50%; transform: scale(0.1); transition-delay:.3s;';
			setStyle[1] = 'transform-origin: 0% 50% ; transform: scale(0.2); transition-delay:.1s;';
			setStyle[2] = 'transform-origin: 0% 50% ; transform: scale(0.3); transition-delay:.7s;';
			setStyle[3] = 'transform-origin: 0% 50% ; transform: scale(0.7); transition-delay:1.2s;';
			cusotomEffect = true;
		break;

		case 'cover3d':
			row = 1;
			columns = 2;
			setStyle[0] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateY(80deg); transition-duration: 3s;';
			setStyle[1] = 'transform-style: preserve-3d; transform-origin: 100% 50% ; transform:perspective(450px) rotateY(-80deg); transition-duration: 3s;';
			cusotomEffect = true;
		break;

		case 'xRotate3d':
			row = 1;
			columns = 4;
			setStyle[0] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateX(-100deg); transition-delay:.3s;';
			setStyle[1] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateX(-100deg); transition-delay:.1s;';
			setStyle[2] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateX(-100deg); transition-delay:.7s;';
			setStyle[3] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateX(-100deg); transition-delay:1.2s;';
			cusotomEffect = true;
		break;

		case 'yRotate3d':
			row = 1;
			columns = 4;
			setStyle[0] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateY(-140deg) scale(0.5); transition-delay:.3s;';
			setStyle[1] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateY(-140deg) scale(0.5); transition-delay:.6s;';
			setStyle[2] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateY(-140deg) scale(0.5); transition-delay:.9s;';
			setStyle[3] = 'transform-style: preserve-3d; transform-origin: 0% 50%; transform:perspective(450px) rotateY(-140deg) scale(0.5); transition-delay:1.2s;';
			cusotomEffect = true;
		break;

	}

	rowHeight = 100/row + '%';
	columnsWidth = 100/columns + '%';
	imgWidth = 100*columns + '%';
	imgHeight = 100 * row + '%';

	for(var i=0; i < row; i++){

		// console.log('-행-:'+i);
		for(var j=0; j< columns; j++){
			// console.log('열:'+j);
			var delaySpeed = ((columns-j) - (i*0.5)) * 0.25;
			var left = -j*100 + '%';
			var top = -i * 100 + '%';

			if(!cusotomEffect){
				makeHtml += '<div class="img_box" style="'+setStyle+';width:'+ columnsWidth +'; height:'+ rowHeight +'; transition-delay:'+ delaySpeed +'s;">';
				makeHtml += '<div class="img_position" style="width:' + imgWidth +'; height:'+ imgHeight +'; left:'+left+'; top:'+top+';"></div>';
				makeHtml += '</div>';
			}else{

				makeHtml += '<div class="img_box" style="'+setStyle[j]+';width:'+ columnsWidth +'; height:'+ rowHeight +';">';
				makeHtml += '<div class="img_position" style="width:' + imgWidth +'; height:'+ imgHeight +'; left:'+left+'; top:'+top+';"></div>';
				makeHtml += '</div>';

			}

		}

	}

	$(obj).append(makeHtml);

	setTimeout(function(){
		$(obj).find('.img_box').addClass('active');
	},200)

}



$(function(){

	ggangImgEffect();

})












