var headerNav = { // 좌우 스크롤 메뉴 포지션.
	init:function(){
		var _this = this ;
		_this.using();
		// $(document).on("click",".headerNav>.list>li>a",function(e){
		// 	_this.using(this);
		// });
		headerNav.using()
	},
	using:function(els){

		$(document).on("click",".headerNav>.list>li",function(e){
		
				$(els).closest("li").addClass("active").siblings("li").removeClass("active");
				
				var sum = 0; 
				var dist;
				$(this).prevAll().each(function(e){
					sum += $(this).width();
				})
				
				dist = sum - ($(this).parent().width() - $(this).width()) / 2;
				if(dist<0){dist=0;}
				
				$(".headerNav ul").animate({ scrollLeft: dist }, 300);
		
		});

		// if($('.headerNav').find('.active').length > 0) {
		// 	if (!els) {
		// 		els = ".headerNav>.list>li.active>a";
		// 	}
		// 	$(els).closest("li").addClass("active").siblings("li").removeClass("active");
		// 	var myli = $(els).closest("li");
		// 	var myWd = myli.outerWidth();
		// 	var posL = myli.position().left - ($(".headerNav ul").outerWidth() * 0.5) + (myWd * 0.5) - ($('.headerWrap .btnAll').width() / 2);

		// 	var sum = 0; 
		// 	var dist;
		// 	$(this).prevAll().each(function(e){
		// 		sum += $(this).width();
		// 	})
			
		// 	dist = sum - ($(this).parent().width() - $(this).width()) / 2;
		// 	if(dist<0){dist=0;}
			
		// 	$(".headerNav ul").animate({ scrollLeft: posL }, 300);
		// }
	}
};