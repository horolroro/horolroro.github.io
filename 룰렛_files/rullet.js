/**
 * rullet 0.1
**/

(function($){
	$.fn.rullet = function(opt){

		opt = $.extend({
			value : [],
			winPercent : [],
			repeat : 5,
			speed : 5000
		}, opt);

		var $this = this;
		var length = opt.value.length;
		var rulletbox = function(){
			this.pieWidth = $this.width(); //룰렛 가로사이즈
			this.pieDeg = 360/length; // 룰렛수에 따른 각도 구하기
			this.fixedDeg = this.pieDeg.toFixed(1); // 각도 소수점 자르기
			this.originX = 6-length; // 수에 따른 기준(6이란 값은 잘 모르겠다)
			this.originNum = this.originX*this.pieWidth*0.095; //레이블 가운데 위치하기 위한 값(왜 이렇게 되는지 몰라)
			this.luckyArray = []; //항목별 확률에 따른 배열
			this.before = 0; //이전 회전값
			this.create(); // 룰렛 생성 실행
		}
		rulletbox.prototype = {
			create : function(){ // 룰렛 생성
				for(var i in opt.value){ // 룰렛 값 길이 만큼 실행
					var html = '';
					html += '<li class="item'+(i%2 != 0 ? ' even':'')+'" style="transform:rotate('+(this.fixedDeg*i)+'deg); clip: rect(0px, '+this.pieWidth+'px,'+this.pieWidth+'px, '+(this.pieWidth/2)+'px)">';
					html += '	<div class="pie" style="transform:rotate('+this.fixedDeg+'deg); clip: rect(0px, '+(this.pieWidth/2)+'px, '+this.pieWidth+'px, 0px);">';
					html += '		<span style="transform:rotate('+(-this.fixedDeg/2)+'deg);transform-origin: 100% '+this.originNum+'%;">'+opt.value[i]+'</span>';
					html += '	</div>';
					html += '</li>';
					$this.append(html); // 룰렛 항목 태그 추가
					for(var j=0;j<(opt.winPercent[i]*10);j++){ //확률에 따라 항목 배열 추가(현재 1000분의 1확률)
						this.luckyArray.push(opt.value[i]);//배열 추가
					}
				}
			},
			play : function(){
				var $self = this;
				var luckyNum = Math.floor((Math.random() * 1000)); //1000분의 1확률이므로 0~999값 구하기
				var win = this.luckyArray[luckyNum]; //랜덤값에 따른 항목 배열 값 가져오기
				var winIdx = 0; //선택된 항목의 각도 순번값
				for(var idx in opt.value){
					if(opt.value[idx] == win){ // 항목값 과 랜덤 항목값이 일치하는 경우
						winIdx = idx; // 항목의 각도 값을 저장
					}
				}
				var thisAngle = this.fixedDeg * winIdx; // 선택된 항목의 회전값 구하기
				var randomAngle = Math.floor((Math.random() * (this.pieDeg+1)) + thisAngle); // 선택된 항목 회전값 안에서 랜덤으로 다시 구하기
				$this.rotate({
					angle:this.before,
					animateTo:360 * opt.repeat - randomAngle, //반복수 만큼 회전 후 선택된 항목의 랜덤 회전값
					center: ["50%", "50%"],
					easing: $.easing.easeInOutQuart,
					callback: function(){
						var _angle = $(this).getRotateAngle(); // 완료된 후의 회전값
						$self.complete(_angle); //회전값을 넘긴다
					},
					duration:opt.speed
		       });
		   },
		   complete : function(angle){
			var nowAngle = angle%360+this.pieDeg;  // 전체항목 항목, 24도 - 1도
			var part = Math.floor(nowAngle/this.pieDeg); // 360/항목수 = 항목 하나의 각도
			var completeNum = opt.value[length - part];
			this.before = angle%360;//현재 회전값을 구한다
			$('.result').text(completeNum); //당첨항목 출력
		   }
		}

		var rullet = new rulletbox();

		$this.go = function(){
			rullet.play();
		}

		return this;
	}
})(jQuery);
