window.renderJson = window.renderJson || {}; 
 
(function($){ 
	var category = function(data){
		var cls = this;
		cls.linkArea = data.linkArea || {};
		cls.groupArea = data.groupArea || {};
		cls.SEQ = {
			"L" : "C_CA",
			"ETC" : ""
		}
		
		cls.init = function(){
			$("body").addClass("body-bgcategory");
			
			$('.shop-cate-list .cate-depth01').each(function(idx){
				$(this).addClass('menu' + (idx+1));
			});
			
			cls.setEvent();

			// sessionStorage clear : 카테고리 하위 페이지들의 history back 처리를 위해.
			if (typeof sessionStorage != 'undefined' && sessionStorage != null) {
				/** 최종 카테고리 정보 확인 */
				if(gsCommon.getStorageOfPageCache("cateGroupSeq") != null){
					$('li.cate-depth01[data-id='+gsCommon.getStorageOfPageCache("cateGroupSeq")+'] > div').eq(0).trigger('click');
				}
				
				window.sessionStorage.clear();
			}
		}
		
		cls.setEvent = function(){
			$('.shop-cate-list ul > li > div').click(function(e) {
				var currentAttrValue = $(this).attr('rel');
				if($(this).is('.active')) {
					cls.closeSubDepth();
				}else {
					cls.closeSubDepth();
					$(this).addClass('active');
					$(currentAttrValue).slideDown(300).addClass('open');
				}
				
				gsCommon.sendClickTrac({mseq : $(this).data("mseq")});
				e.preventDefault();
			});
			
			$('div.cate-depth-sublist li, .shop-cate-gate-list .cate-depth01').on('click.cate', function(e){
				e.preventDefault();
				var url = $(this).data('url');
				
				if(typeof url != 'undefined' && url.length > 0){
					var type = $(this).data("type");
					var groupSeq = $(this).closest("div").data("id");
					var largeCode = $(this).data("id");

					if("L" == type){
						var sectSeq = [];
						sectSeq.push(groupSeq);
						sectSeq.push(cls.SEQ[type]);
						sectSeq.push(largeCode);
						
						var JsonSeq = {};
						JsonSeq["sectSeq"] = sectSeq.join('-');
						
						url = gsCommon.appendParam(url, JsonSeq);
					}
					else if("ETC" == type){
						url = gsCommon.appendParam(url,{mseq : $(this).data("mseq")});
					}

					/** 최종 카테고리 정보 저장 */
					gsCommon.setStorageUsingCache("cateGroupSeq", groupSeq);

					cls.cornerGetUrl(url);
				}
			});
		}

		cls.closeSubDepth = function() {
			$('.shop-cate-list ul li > div').removeClass('active');
			$('.shop-cate-list .cate-depth-sublist').slideUp(300).removeClass('open');
		}
		
		cls.cornerGetUrl = function(goUrl){
			// 보험샵
			if (goUrl.indexOf("http://minsu.") > -1){
				gsCommon.sendClickTrac({mseq :'404563'});
			}
			/*
			// GS SHOP LIVE
			else if(goUrl.indexOf("TvSectL") > -1){
				goUrl = gsCommon.appendParam(goUrl,{sectSeq : '900-C_CA-GSLIVE'});
				goUrl = gsCommon.removeParam(goUrl,["mseq"])
			}
			// GS MY SHOP
			else if(goUrl.indexOf("gsmyshopL") > -1){
				goUrl = gsCommon.appendParam(goUrl,{sectSeq : '900-C_CA-MYSHOP'});
				goUrl = gsCommon.removeParam(goUrl,["mseq"])
			}
			// 브랜드찾기
			else if(goUrl.indexOf("brandXShopMain") > -1){
				goUrl = gsCommon.appendParam(goUrl,{mseq : '408613'});
			}
			 */
			
			gsCommon.goLink(goUrl);
		}
		
		return cls;
	}

	window.category = window.category || new category(renderJson);
	
	window.category.init();
})(jQuery); 