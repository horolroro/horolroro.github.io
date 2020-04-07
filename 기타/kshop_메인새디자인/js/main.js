





$(document).ready(function() {

	acc($(".gnbList h3"));

	$(".btn_side a").on('click', function() {
		$('.dim').show()
		$('.aside').addClass('active');
		$(".btn_side a").removeClass('active');
		$(this).addClass('active');
	});

	$(".swiper_area a").on('click', function() {
		$('.dim').show();
		$(".pop_1").fadeIn();
	});
	$(".btn_close").on('click', function(e){
		e.preventDefault();
		$('.dim').hide();
		$(".pop_1").hide();
	});
});

function acc(elm){
	elm.click(function(){
		var contentElm = $(this).parents('.gnbList').find('ul ul')
		contentElm.stop().slideUp();

		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
}

$(document).on('click', '.btnMenuClose', function(){
	$('.dim').hide();
	$('.aside').removeClass('active')
});
