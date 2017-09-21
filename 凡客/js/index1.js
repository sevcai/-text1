/*
* @Author: asus
* @Date:   2017-08-14 08:39:01
* @Last Modified by:   asus
* @Last Modified time: 2017-09-12 14:04:06
*/

'use strict';
$(function(){


	$('.sousuo-box').find('input').focus(function(){
		$(this).get(0).placeholder='';
	})




	$('.shou').mouseenter(function(){
		let num=$(this).find('.neibu').children().length;
		$(this).children('.xiala').css({height:36*num}).find('.neibu').css({borderTop:'5px solid #B81C22'})
	}).mouseleave(function(){
		$(this).children('.xiala').css({height:0}).find('.neibu').css({borderTop:'none'})
	})


	$('.gouwuche').mouseenter(function(){
		$('.hover').css({height:'22px',border:'1px solid #c1383e'})
		$(this).css({borderBottomColor:'white'})
	}).mouseleave(function(){
		$('.hover').css({height:0,border:'none'})
		$(this).css({borderBottomColor:'#c1383e'})
	})



	let img=$('.banner').find('li')
	let num=0;
	let t;
	t=setInterval(fn,2000);
	function fn(dir='right'){
		if(dir=='right'){
			num++;
			if(num==img.length){
				num=0;
			}
		}else if(dir=='left'){
			num--;
			if(num==-1){
				num=img.length-1;
			}
		}		
		img.hide()
		$('.yuan').css({background:'#666666'})
		img.eq(num).show()
		$('.yuan').eq(num).css({background:'red'})
	}
	$('.banner').mouseover(function(){
		clearInterval(t)
	}).mouseout(function(){
		t=setInterval(fn,2000);
	})
	$('.youla').click(function(){
		fn();
	})
	$('.zuola').click(function(){
		fn('left');
	})

	$('.yuan').mouseenter(function(){
		let index=$(this).index();
		$('.yuan').css({background:'#666666'}).eq(index).css({background:'red'});
		img.hide().eq(index).show()
		num=index
	})
})