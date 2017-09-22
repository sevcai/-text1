/*
* @Author: asus
* @Date:   2017-08-10 15:40:08
* @Last Modified by:   asus
* @Last Modified time: 2017-09-12 14:08:45
*/

'use strict';
$(function(){
	//购物车
	$('.head-right2').mouseenter(function(){
		$('.cart-menu').css({height:'100px'})
	}).mouseleave(function(){
		$('.cart-menu').css({height:'0'})
	})
	//搜索框
	$('#search').focus(function(){
		$('.xiaomimax').hide()
		$('.zhinengdianshi').hide()
		$(this).css({borderColor:'#ff6700'})
		$('.sousuotubiao').css({borderColor:'#ff6700'})
		$('.search-menu').show()
	}).blur(function(){
		$('.xiaomimax').show()
		$('.zhinengdianshi').show()
		$(this).css({borderColor:'#e0e0e0'})
		$('.sousuotubiao').css({borderColor:'#e0e0e0'})
		$('.search-menu').hide()
	})
	// 侧边框
	$('.aside>li').mouseenter(function(){
		$(this).children('.colm').show()
	}).mouseleave(function(){
		$(this).children('.colm').hide()
	})
	//导航框
	$('.down>li').not('.fil').mouseenter(function(){
		$(this).children('.navitem').css({height:'240px',borderTop:'1px solid #e0e0e0'})
	}).mouseleave(function(){
		$(this).children('.navitem').css({height:'0',border:'none'})
	})
	//banner左右切换
	$('.zhezhao').mouseenter(function(){
		$(this).css({opacity:0.5})
	}).mouseleave(function(){
		$(this).css({opacity:0})
	})
	$('.youla').click(function(){
		fn();
	})
	$('.zuola').click(function(){
		fn('left');
	})
	let num=0;
	//轮播点
	$('.yuan').css({background:'#333333'}).click(function(){
		let ind=$(this).index();
		$('.yuan').css({background:'#333333'})
		$(this).css({background:'white'});
		$('.lb').css({display:'none'}).eq(ind).css({display:'block'})
		num=ind
	})
	let t;
	t=setInterval(fn,2000);
	function fn(dir='right'){
		var links=$('.yuan')
		if(dir=='right'){
			num++;
			if(num==links.length){
				num=0;
			}
		}
		if(dir=='left'){
			num--;
			if(num==-1){
				num=links.length-1;
			}
		}
		$('.lb').css({display:'none'}).eq(num).css({display:'block'})
		$('.yuan').css({background:'#333333'}).eq(num).css({background:'white'})
	}
	$('.banner-right').mouseenter(function(){
		clearInterval(t);
	}).mouseleave(function(){
		t=setInterval(fn,2000);
	})


	//小米明星单品
	let childNum=$('.onepin1').children().length;
	let wid=$('.diannao').innerWidth()+parseInt(getComputedStyle($('.diannao')[0],null).marginRight);
	$('.onepin1').css({width:`${wid*childNum}px`})
	let index=0;
	let t1;
	let flag=true;
	t1=setInterval(move,2000)
	function move(){
		if(flag){
			if(index==1){
				flag=false;
				return;
			}
			index++;
			$('.onepin1').css({left:`${-1240*index}px`})
		}else{
			if(index==0){
				flag=true;
				return;
			}
			index--;
			$('.onepin1').css({left:`${-1240*index}px`})
		}
	}
	$('.qianjin:eq(0)').click(function(){
		if(index==1){
			return;
		}
		index++;
		$('.onepin1').css({left:`${-1240*index}px`})		
	})
	$('.houtui:eq(0)').click(function(){
		if(index==0){
			return;
		}
		index--;
		$('.onepin1').css({left:`${-1240*index}px`})
	})
	$('.disanpai').mouseover(function(){
		clearInterval(t1)
	}).mouseout(function(){
		t1=setInterval(move,2000);
	})
	
	

	//热门
	remen($('.dapei2')[0],$('.main1')[0]);
	remen($('.dapei2')[1],$('.main1')[1]);
	remen($('.dapei2')[2],$('.main1')[2]);
	remen($('.dapei2')[3],$('.main1')[3]);
	function remen(dapei,main){
		// let rea=$(dapei).find('.classa');
		// rea.mousemove(function(){
		// 	let index=$(this).index();
		// 	console.log(index)
		// })

	
		let a=$('.classa',dapei)
		let qiehuan=$('.qiehuan',main)
		for(let i=0;i<a.length;i++){
			a[i].onmouseover=function(){
				for(let j=0;j<qiehuan.length;j++){
					qiehuan[j].style.display='none';
					a[j].style.color='#424242'
					a[j].style.borderColor='#f5f5f5'
				}
				qiehuan[i].style.display='block';
				a[i].style.color='#ff6700'
				a[i].style.borderColor='#ff6700'
			}
		}
	}


	//为你推荐
	let childNum1=$('.qiehuan1').children().length;
	let wid1=$('.tuijian1').innerWidth()+parseInt(getComputedStyle($('.tuijian1')[0],null).marginRight);
	$('.qiehuan1').css({width:`${wid1*childNum1}px`})
	let index1=0;
	$('.qianjin:eq(1)').click(function(){
		if(index1==3){
			return;
		}
		index1++;
		$('.qiehuan1').css({left:`${-1240*index1}px`})		
	})
	$('.houtui:eq(1)').click(function(){
		if(index1==0){
			return;
		}
		index1--;
		$('.qiehuan1').css({left:`${-1240*index1}px`})
	})




	//内容
	book($('.neirong1')[0],$('.lunbo')[0])
	book($('.neirong1')[1],$('.lunbo')[1])
	book($('.neirong1')[2],$('.lunbo')[2])
	book($('.neirong1')[3],$('.lunbo')[3])
	function book(nr,lunbo){
		let book= $('.zuida',nr)[0];
		let clef= $('.corleft',nr)[0];
		let crig= $('.corright',nr)[0];
		let cir= $('.circle',lunbo);
		let now=0;
		let next=0;
		for(let i=0;i<cir.length;i++){
			cir[i].onclick=function(){
				if(now==i){
					return;
				}
				cir[now].classList.remove('circle1')
				cir[i].classList.add('circle1')
				book.style.left=`${-296*i}px`
				now=next=i;
			}
		}
		crig.onclick=function(){
			
			if(next==2){
				return;
			}
			next++;

			cir[now].classList.remove('circle1')
			cir[next].classList.add('circle1')
			book.style.left=`${-296*next}px`
			now=next;
		}
		clef.onclick=function(){
			if(next==0){
				return;
			}
			next--;
			cir[now].classList.remove('circle1')
			cir[next].classList.add('circle1')
			book.style.left=`${-296*next}px`
			now=next;
		}
	}


})