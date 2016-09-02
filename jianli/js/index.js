$(function(){
	var wWin = window.innerWidth;
	var wHei = window.innerHeight;
	var left = (wWin - $('.box_in').width())/2;
	var top = (wHei - $('.box_in').height())/2 - 20;

	commons();
	// $('#dowebok').fullpage();
	$(window).resize(function(){
		var changeWin = window.innerWidth;
		var changeHei = window.innerHeight;
		var lefts = (changeWin - $('.box_in').width())/2;
		var tops = (changeHei - $('.box_in').height())/2 - 20;
		chancommons();
		function chancommon(ele,element){
			ele.css({
				'width':changeWin,
				'height':changeHei
			});
		}
		function chancommin(ele,val,val1){
			ele.css({
				'marginLeft':(changeWin - ele.width())/2 - val,
				'marginTop':(changeHei - ele.height())/2 - val1				
			})
		}
		function chancommons(){
			chancommon($('.box'));
			chancommon($('.header'));
			
			$('.box_in').css({
				'marginLeft':lefts,
				'marginTop':tops
			})
			$('.welcome').css('minHeight',changeWin);
			
			chancommon($('.skill'));
	
			$('.skill_in').css({
				'marginLeft':changeWin * 0.3,
				'marginTop':changeHei * 0.3
			})

			$('.skill_phone').css({
				'marginLeft':changeWin * 0.3,
				'marginTop':changeWin * 0.3
			})

			chancommon($('.person_skills'))
			// $('.person_skills').css('height',changeHei);
			chancommin($('.personSki'),-30,50);
			/*项目经验*/
			chancommon($('.experience'));
			chancommin($('.ex_pc'),0,50);
			chancommin($('.ex_phone'),0,50);
			/*个人优势*/
			chancommon($('.strength'));
			chancommin($('.str_pc'),0,50);
			chancommin($('.str_phone'),0,50);
			/*联系我吧*/
			chancommon($('.contact'));
			chancommin($('.cont_pc'),0,50);
			$('.cont_phone').css({
				'marginLeft':changeWin * 0.3,
				'marginTop':changeHei * 0.2
			});
		}
	})
	function common(ele,element){
		ele.css({
			'width':wWin,
			'height':wHei
		});
	}
	function commin(ele,val,val1){
		ele.css({
			'marginLeft':(wWin - ele.width())/2 - val,
			'marginTop':(wHei - ele.height())/2 - val1
		})
	}
	function commons(){
		common($('.box'));
		common($('.header'));
		
		$('.box_in').css({
			'marginLeft':left,
			'marginTop':top
		})
		$('.welcome').css('minHeight',wHei);
		
		common($('.skill'));
		commin($('.skill_in'),60,0);
		$('.skill_phone').css({
			'marginLeft':wWin * 0.3,
			'marginTop':wHei * 0.3
		})
		// commin($('.skill_phone'),0,20);
		common($('.person_skills'))
		// $('.person_skills').css('height',wHei);
		commin($('.personSki'),-30,50);
		/*项目经验*/
		common($('.experience'));
		commin($('.ex_pc'),0,50);
		commin($('.ex_phone'),0,50);
		/*个人优势*/
		common($('.strength'));
		commin($('.str_pc'),0,50);
		commin($('.str_phone'),0,50);
		/*联系我吧*/
		common($('.contact'));
		commin($('.cont_pc'),0,50);
		$('.cont_phone').css({
			'marginLeft':wWin * 0.3,
			'marginTop':wHei * 0.2
		});
	}
	
	$('.person_skill').eq(0).css('display','block');
	$('.skill_nav li').eq(0).children('h2').css('border-color','orange');
	$('.skill_nav li').hover(function(){
		var a = $(this).index();
		$(this).children('h2').css('border-color','orange');
		$(this).siblings('li').children('h2').css('border-color','#ccc');
		$('.all_skill').children('.person_skill').eq(a).css('display', 'block').siblings('.person_skill').css('display', 'none');
	},function(){
	});

	/*ex_pc 效果*/
	$('.ex_pc ul li').hover(function(){
		$(this).children('i').css('display', 'none');
		$(this).children('.ex_hide').css({
			'display':'block',
			'box-shadow':'0 0 12px #313d47',
			'margin-left':'-14%'
		});
	},function(){
		$(this).children('i').css('display', 'block');
		$(this).children('.ex_hide').css({
			'display':'none',
			'box-shadow':'0 0 0px #313d47'
		});
	})

	/*当页面到达这个顶端时，动画显示 电脑*/
	var t1 = $('.box').offset().top;//2
	var t2 = $('.skill').offset().top;//3
	var t3 = $('.experience').offset().top;//5
	var t4 = $('.strength').offset().top;//6
	var t5 = $('.contact').offset().top;//7
	var t6 = $('.person_skills').offset().top;//4
	var top = $(window).scrollTop();
	if ($(window).scrollTop() <= t1) {
		$('.box_in p').addClass('bigs');
	}
	$(window).scroll(function(){
		var top = $(window).scrollTop();

		if (t1 >= top) {
			$('.box_in p').addClass('bigs');
		}else if (top>=t1 && top<t2) {
			$('.box_in p').removeClass('bigs');
			$('.skill_in h2').addClass('xuanzhuan');
		}else if (top>=t2 && top<t3) {
			$('.skill_in h2').removeClass('xuanzhuan');
			$('.ex_pc h2').addClass('xuanzhuan');
		}else if (top>=t3 && top<t4) {
			$('.ex_pc h2').removeClass('xuanzhuan');
			$('.str_pc h2').addClass('xuanzhuan');
			$('.str_pc p').addClass('bigs');
		}else if (top>=t4 && top<t5) {
			$('.str_pc p').removeClass('bigs');
			$('.str_pc h2').removeClass('xuanzhuan');
			$('.cont_pc h2').addClass('xuanzhuan');
		}else{
			$('.cont_pc h2').removeClass('xuanzhuan');
		}
	})
	document.ontouchmove = function(){
		top = event.touches[0].pageY; 
		if (t1 >= top) {
			$('.box_in p').addClass('bigs');
		}else if (top>=t1 && top<t2) {
			$('.box_in p').removeClass('bigs');
			$('.skill_phone h2').addClass('xuanzhuan');
			$('.major_skill li').addClass('jianbian');
		}else if(top>=t2 && top<t6) {
			$('.major_skill li').removeClass('jianbian');
			$('.skill_phone h2').removeClass('xuanzhuan');
			$('.personSki h2').addClass('xuanzhuan');
			$('.personSki ul li:first-child').addClass('firstFloat');
			$('.personSki ul li:nth-child(2)').addClass('secondFloat');
			$('.personSki ul li:nth-child(3)').addClass('threeFloat');
			$('.personSki ul li:last-child').addClass('fourFloat');
		}else if (top>=t6 && top<t3) {
			$('.personSki ul li:first-child').removeClass('firstFloat');
			$('.personSki ul li:nth-child(2)').removeClass('secondFloat');
			$('.personSki ul li:nth-child(3)').removeClass('threeFloat');
			$('.personSki ul li:last-child').removeClass('fourFloat');
			$('.personSki h2').removeClass('xuanzhuan');
			$('.ex_phone h2').addClass('xuanzhuan');
			$('.ex_phone ul li:first-child').addClass('firstFloat');
			$('.ex_phone ul li:nth-child(2)').addClass('secondFloat');
			$('.ex_phone ul li:last-child').addClass('threeFloat');
		}else if (top>=t3 && top<t4) {
			$('.ex_phone ul li:first-child').removeClass('firstFloat');
			$('.ex_phone ul li:nth-child(2)').removeClass('secondFloat');
			$('.ex_phone ul li:last-child').removeClass('threeFloat');
			$('.ex_phone h2').removeClass('xuanzhuan');
			$('.str_pc h2').addClass('xuanzhuan');
			$('.str_pc p').addClass('bigs');
		}else if (top>=t4 && top<t5) {
			$('.str_pc h2').removeClass('xuanzhuan');
			$('.str_pc p').removeClass('bigs');
			$('.cont_phone p').addClass('bigs');
		}else{
			$('.cont_phone p').removeClass('bigs');
		}
	}
	
})
