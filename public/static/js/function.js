$(function(){
	$(function(){
		const date1 = new Date();
		const date2 = date1.getFullYear()
		$(".copyright .txt .year").append(date2);
	});

	$(function(){
		if ($(".fv").hasClass("changeG")) {
			$(".copyright ").addClass("changeG");
		}
	});

	$(function(){
		let result = location.search;
		if (result == "?matcha") {
			$("#matcha").trigger("click");
		}
	});

	$(".hd_nav>li>a").each(function () {
		$(this).mouseover(function(){
			$(".hd_cnav").removeClass("show");
    	if ($(this).parent().hasClass('mega_trigger')) {
				$(this).next().addClass("show");
			}
		});
	});
	
	$(".hd_100").mouseleave(function(){
		$(".hd_cnav").removeClass("show");
	});

	$(".editor_area ol").each(function () {
		count = 0;
		$(this).children("li").each(function () {
			count++;
			$(this).prepend("<span>" + count + ".</span>");
		});
	});

	$(window).on('load scroll', function(){
		if ($(this).scrollTop() > 500) {
			$('.pagetop').addClass("show");
			$('.pararax_area').addClass("show");
		} else {
			$('.pagetop').removeClass("show");
			$('.pararax_area').removeClass("show");
		}
	});

	$('.tab_group .tab_btn').children().each(function () {
		$(this).click(function(){
			$(this).siblings().removeClass("current");
			$(this).addClass("current");
			var index = $(this).parent().children().index(this);
			$(this).parent().siblings(".tab_contents").children().removeClass('show');
			$(this).parent().siblings(".tab_contents").children().eq(index).addClass('show');
		});
	});

	$(window).on('load resize', function(){
		var width = $(window).width();
		
		if (width > 767) {
			var val = .515625;
			var slideSpeed = 15;
		} else{
			var val = .8333333;
			var slideSpeed = 10;
		}
		var sliderWidth = width * val; //スライダーの横幅を動的に変化
		var slideTime =  width / slideSpeed; //スライダーの速度を固定する為にスライド時間を動的に変化
		$('.mv_slider').css('animation-duration',slideTime + "s");
		$('.mv_slider > li').css('width',sliderWidth + "rem");

		if (width > 767) {
			var slideSpeed = 70;
		} else{
			var slideSpeed = 60;
		}
		$('.common_slider01 .slider01_list').each(function () {
			var logoSlideWidth = $(this).innerWidth();
			var logoSlideTime =  logoSlideWidth / slideSpeed;
			$(this).css('animation-duration',logoSlideTime + "s");
		});
		
		if (width > 767) {
			$index03SliderCount = 0;
			$('.index03_slider01 .slick-slide').each(function () {
				if (! $(this).hasClass("slick-cloned")) {
					$index03SliderCount ++;
				}
			});
			if ($index03SliderCount < 3) {
				$('.index03_slider01').addClass("transform");
			}
			if ($index03SliderCount < 4) {
				$('.index03_slider01 .slick-dots').addClass("none");
			}
			if ($index03SliderCount > 3) {
				$('.index03_slider01').addClass("opacity");
			}
		}
		
		if (width > 767) {
			var slideSpeed = 35;
		} else{
			var slideSpeed = 30;
		}
		$('.index02_block01 .common_slider01 .slider01_list').each(function () {
			var logoSlideWidth = $(this).innerWidth();
			var logoSlideTime =  logoSlideWidth / slideSpeed;
			$(this).css('animation-duration',logoSlideTime + "s");
		});

		var mcm02_block01_max_h = 0;
		$(".mcm02_block01 .box_list01").css({'height':'auto'});
		$('.mcm02_block01 .box_list01').each(function () {
			var height = $(this).innerHeight();
			if (!mcm02_block01_max_h) {
        mcm02_block01_max_h = height;
			} else if (mcm02_block01_max_h < height) {
				mcm02_block01_max_h = height;
			}
		});
		$(".mcm02_block01 .box_list01").css({'height':mcm02_block01_max_h + 'px'});

		$('.toggle_trigger').each(function () {
			const text = $(this).text();
      $(this).off('click');
			$(this).click(function(){
				$(this).toggleClass("open");
				$(this).prev(".toggle_target").slideToggle();
				if($(this).hasClass("open")){
					$(this).find(".txt").text("閉じる");
				} else {
					$(this).find(".txt").text(text);
				}
			});
		});

		$('.common_faq_list01 dt').each(function () {
			$(this).off('click');
			$(this).click(function(){
				$(this).toggleClass("open");
				$(this).next().slideToggle();
			});
		});
		if (width > 767) {
			$('.child_box').each(function () {
				var height = $(this).innerHeight();
				$(this).parent(".parent_box").css({'height':height + 'px'});
			});
		}
		
		var hdHeight = $('.hd_100').innerHeight();
		setTimeout(function(){
			$(".anker").css({'margin-top':'-' + hdHeight + 'rem'});
			$(".anker").css({'padding-top':hdHeight + 'rem'});
			if (width > 768) {
				$(".fv").css({'margin-top':hdHeight + 'px'});
				$(".mv").css({'margin-top':hdHeight + 'px'}); //remで更に倍率が加わってしまうのでpx
				$(".hd_cnav.mega").css({'top':hdHeight + 'px'});
				$(".sub_fv_img").css({'margin-top':hdHeight + 'px'});
			} else {
				$(".mv").css({'margin-top':60 + 'rem'});
				$(".fv").css({'margin-top':60 + 'rem'});
				$(".sub_fv_img").css({'margin-top':0 + 'rem'});
			}
		},1);
		//slidetoggleのPC時とSP時の設定がリサイズ時にも残るので削除
		if (width > 1025) {
			$(".hd_cnav").css('display', 'block');
		} else{
			//$(".hd_cnav").css('display', 'none');
			$(".hd_nav li").removeClass("open");
		}
	});


	//slidetoggleがリサイズ毎に登録されるのでクリック時のみ判定
	//$('.hd_menu li').click(function(){ 
	//	var width = $(window).width();
	//	if (width < 1025) {
	//		$(this).find(".hd_cnav").slideToggle();
	//	} 
	//});

	$(window).ready(function($) {
		$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
	});

	// 要素が画面内に入ったらclass付与
	$(window).scroll(function () {
		var scroll = $(window).scrollTop(); //スクロール量
		var wHeight = $(window).height(); //表示領域の高さ
		var customTop = 300; //表示領域からどれくらい進んだか
		$('.view_animation').each(function () {
			var hit = $(this).offset().top; //トップからの距離
			//if (typeof $(this).data('effect') !== 'undefined') {
				// data-effect="任意の値" が設定されている場合
			//  customTop = $(this).data('effect');
			//}
			if (hit + customTop < wHeight + scroll) {
				$(this).addClass("animation-on");
			}
		});
		//copyrightの色切り替え
		//ウィンドウの半分でも同じ処理だけどヒット位置の調整が出来る様に一応
		var cpOffset = $(".copyright .txt").offset().top;
		var cpHeight = $(".copyright .txt").innerWidth() / 2; 
		var cpChange = cpOffset + cpHeight;
		$('.copychange').each(function () {
			var addData = 0;
			var hit = $(this).offset().top;
			if (typeof $(this).data('effect') !== 'undefined') {
				addData = $(this).data('effect');
			}
			if (hit < cpChange + addData) {
				if($(this).hasClass("changeW")){
					$(".copyright").removeClass("changeG");
				} else if($(this).hasClass("changeG")){
					$(".copyright").addClass("changeG");
				}
			}
		});
		//var pararax = scroll / 5; //パララックス多重スクロール量
		//$(".sub_fv_img").css({'top':'-' + pararax + 'rem'});
	});

	// ページを読み込んだらclass付与
	$(window).on('load', function(){
		$('.load_animation').each(function () {
			$(this).addClass("animation-on");
		});
	});

	$('.language_btn').click(function(){
		$(this).next().slideToggle();
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			/** 画面の上部がグローバルナビを越えたらクラスfixedをつける **/
			$('#pagetop').addClass("show");
		} else {
			/** 画面の上がグローバルナビを越えていなければクラスfixedをつけない **/
			$('#pagetop').removeClass("show");
		}
	});
	////// ページトップ //////
	$('#pagetop').click(function(){
		click_scroll_pagetop();
	});

	// ページトップ
	function click_scroll_pagetop(){
		var top = $(window).scrollTop();//スクロール値取得
		var speed = 4;//速度
		var time = Math.floor(top/speed);//小数点切り捨て
		$('body,html').animate({
			scrollTop: 0
		},time);
		return false;
	}
	

	$(".hd_nav li").click(function () {
		$(this).toggleClass("open");
	});
	////// レスポンシブ //////
	// spナビ用開閉ボタン
	$(".menu_trigger").click(function () {
		$(this).toggleClass("active");
		$(".hd_menu").toggleClass("open");
		$(".hd_logo").toggleClass("change");
	});
	
	////// ページ内リンク //////
	// ヘッダー固定の場合、ヘッダーの高さ、もしくはずらしたい分の数値を指定
	var hd_height = 0;
	// #で始まるアンカーをクリックした場合に処理
	$("a[href^='#']").click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top - hd_height;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
	});
	
	////// 外部ページブランク //////
	$("a[href^='http://'] , a[href^='https://']").not("a[href*='" + location.hostname + "']").attr("target","_blank");
	$("a[href$='.pdf']").attr("target","_blank");
	
	////// スライドパネル //////
	$('.js_slide_panel').click(function(){
		var slide_panel_id = $(this).attr("data-slide_panel");
		$("#"+slide_panel_id).stop().slideToggle().addClass("active");
		return false;
	});

	// 別ページから遷移しページ内リンクがある場合に処理
	var anker_name = window.location.href.split('/');
	anker_name = anker_name[anker_name.length-1];
	if ( anker_name.indexOf('#') != -1) {
		anker_name = anker_name.split('#');
		anker_name = anker_name[anker_name.length-1];
		// 移動先を数値で取得
		var position = $("#"+anker_name).offset().top - hd_height;
		// スムーススクロール
		window.scrollTo(0, position);
	}
	// ウィンドウサイズがリサイズされたときのナビの表示
	$(window).on('resize load',function(){
		// PC環境の場合
		if (window.matchMedia( '(min-width: 770px)' ).matches) {
		// sp環境の場合
		} else {
			// ドロップダウンメニューをすべて表示
			$(".nav_clist,.nav_glist").show();
		};
	});
});

// マウスオーバー
function hover_change_img(obj_name){
	var postfix = '-ov';
	$(obj_name).find('a img').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_ov = src.substr(0, src.lastIndexOf('.'))
		+ postfix
		+ src.substring(src.lastIndexOf('.'));
		$('<img>').attr('src', src_ov);
		img.hover(function() {
			img.attr('src', src_ov);
		}, function() {
			img.attr('src', src);
		});
	});
}

//サイドナビ自動生成
function autlist(element,target) {
	var $element     = $(element);
	var $target_list = $(target);
	if($target_list.size() > 0){
		$target_list.each(function(i) {
			var $current = $(this),
					head_text = $current.text();
			$current.attr("id", "anker-" + i);
			$element.append("<li><a href='#anker-" + i + "'>" + head_text + "</a></li>");
		});
		return false;
	}else {
		$element.css("display","none");
	}
};

