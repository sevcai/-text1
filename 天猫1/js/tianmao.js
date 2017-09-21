/*
* @Author: asus
* @Date:   2017-08-12 15:21:49
* @Last Modified by:   asus
* @Last Modified time: 2017-09-12 11:12:05
*/

'use strict';
$(function(){
	$('.lis').mouseenter(function(){
		$(this).children('.aside').show()
	}).mouseleave(function(){
		$(this).children('.aside').hide()
	})
	


	$('.white').mouseenter(function(){
		$(this).children('.baobei').show()
	}).mouseleave(function(){
		$(this).children('.baobei').hide()
	})
	

	let banner=$('.ban-right').children('li')
	let num=0;
	$('.yuan').mouseenter(function(){
		let inde=$(this).index()
		$('.yuan').css({background:'#666666'})
		banner.hide()
		$(this).css({background:'white'})
		banner.eq(inde).show()
		num=inde
	})
	let t;
	t=setInterval(fn,3000);
	function fn(){
		num++;
		if(num==$('.yuan').length){
			num=0;
		}
		$('.yuan').css({background:'#666666'})
		banner.hide()
		$('.yuan').eq(num).css({background:'white'})
		banner.eq(num).show()
	}
	$('.ban-right').mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t=setInterval(fn,3000);
	})


	let ch=window.innerHeight; 
	let newarr=[];
	let flag=true;
	for(let i=0;i<$('.fashion').length;i++){
		newarr.push($('.fashion').eq(i).offset().top)
	}
	$(window).scroll(function(){
			//获取滚动条的距离
			let sc=$(document).scrollTop();
			if(sc>600){
				if(flag){
					flag=false;
					$('.gudingtop').animate({top:0})
					$('.mui-list').show()

				}	
			}else{
				if(!flag){
					flag=true;
					$('.gudingtop').animate({top:-50})
					$('.mui-list').hide()
				}
			}
			
			let colorarr=[`#ea5f8d`,`#0aa6e8`,`#64c333`,`#f15453`,`#f7a945`,`#ea5f8d`,`#ff0036`]
			newarr.forEach(function(value,index){
				if(ch+sc>=value+300){
					$('.small-list').css({background:''})
					$('.small-list').eq(index).css({background:colorarr[index]})
				}
				if(sc+ch<=newarr[0]+300){
                    $('.small-list').css({background:''})
				}
			})

		}
	)

	$('.small-list').click(function(){
		let index=$(this).index('.small-list')
		$('body').animate({scrollTop:newarr[index]-100})
	})
	$('.small-list9').click(function(){
		$('body').animate({scrollTop:0})
	})




	$('.guding').find('.iconfont').mouseenter(function(){
		$(this).children('.vip').show().animate({right:35})
	}).mouseleave(function(){
		$(this).children('.vip').hide().animate({right:70})
	}).click(function(){
		$('.saoma').hide();
		$(this).children('.saoma').show()
	})

	$('.fanhui').mouseenter(function(){
		$(this).children('.vip1').show().animate({right:35})
	}).mouseleave(function(){
		$(this).children('.vip1').hide().animate({right:70})
	}).click(function(){
		$('body').animate({scrollTop:0});
	})
	
	$('.iconfont1').click(function(){
		$('.saoma').hide();
		$(this).children('.saoma').show()
	})

	$('.guding').mouseleave(function(){
		$('.saoma').hide();
	})
})