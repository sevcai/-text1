/*
* @Author: asus
* @Date:   2017-08-12 15:21:49
* @Last Modified by:   asus
* @Last Modified time: 2017-08-27 19:57:18
*/

'use strict';
window.onload=function(){
	let ul=document.getElementsByClassName('ul')[0];
	let lis=ul.getElementsByClassName('lis');
	let aside=document.getElementsByClassName('aside');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			aside[i].style.display='block';
		}
		lis[i].onmouseleave=function(){
			aside[i].style.display='none';
		}
	}

	let white=document.getElementsByClassName('white');
	let baobei=document.getElementsByClassName('baobei');
	let shangjia=document.getElementsByClassName('shangjia');
	let web=document.getElementsByClassName('web');
	white[0].onmouseover=function(){
		baobei[0].style.display='block';
	}
	white[0].onmouseout=function(){
		baobei[0].style.display='none';
	}
	white[1].onmouseover=function(){
		baobei[1].style.display='block';
	}
	white[1].onmouseout=function(){
		baobei[1].style.display='none';
	}
	white[2].onmouseover=function(){
		shangjia[0].style.display='block';
	}
	white[2].onmouseout=function(){
		shangjia[0].style.display='none';
	}
	white[3].onmouseover=function(){
		web[0].style.display='block';
	}
	white[3].onmouseout=function(){
		web[0].style.display='none';
	}

	let banner=document.getElementsByClassName('ban-right')[0];
	let banpic=banner.getElementsByTagName('li');
	let yuan=banner.getElementsByClassName('yuan');
	let num=0;
	for(let i=0;i<yuan.length;i++){
		yuan[i].onmouseover=function(){
			for(let j=0;j<banpic.length;j++){
				banpic[j].style.display='none';
				yuan[j].style.background='#666666';
			}
			banpic[i].style.display='block';
			yuan[i].style.background='white';
			num=i;
		}
	}
	let t;
	t=setInterval(fn,3000);
	function fn(){
		num++;
		if(num==yuan.length){
			num=0;
		}
		for(let i=0;i<banpic.length;i++){
			banpic[i].style.display='none';
			yuan[i].style.background='#666666';
		}
		banpic[num].style.display='block';
		yuan[num].style.background='white';
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fn,3000);
	}


	let guding=document.getElementsByClassName('gudingtop')[0];
	let list=document.querySelector('.mui-list')
	let ch=window.innerHeight; 
	let fashion=document.querySelectorAll('.fashion');
	let mui=document.querySelectorAll('.small-list');
	let dingbu1=document.querySelector('.small-list9')
	let newarr=[];
	let key=0;
	let flag=true;
	fashion.forEach(element=>{
		newarr.push(element.offsetTop)
	})
	window.onscroll=function(){
			//获取滚动条的距离
			let sc=document.body.scrollTop;
			if(sc>600){
				if(flag){
					flag=false;
					animate(guding,{top:0})
					list.style.display='block';

				}	
			}else{
				if(!flag){
					flag=true;
					animate(guding,{top:-50})
					list.style.display='none';
				}
			}
			
			let colorarr=[`#ea5f8d`,`#0aa6e8`,`#64c333`,`#f15453`,`#f7a945`,`#ea5f8d`,`#ff0036`]
			newarr.forEach(function(value,index){
				if(ch+sc>=value+300){
					// mui[key].classList.remove('bac')
					// mui[index].classList.add('bac')
					mui[key].style.background=''
					mui[index].style.background=colorarr[index]
					key=index;
				}
				if(sc+ch<=newarr[0]+300){
					mui[0].style.background=''
				}
			})

		}

	mui.forEach((element,index)=>{
		element.onclick=function(){
			animate(document.body,{scrollTop:newarr[index]});
		
		}
	})
	dingbu1.onclick=function(){
		animate(document.body,{scrollTop:0},500);
	}




	let vip=$('.vip');
	let vip1=$('.vip1')[0];
	let gu=$('.guding')[0];
	let icon=$('.iconfont',gu);
	let fanhui=$('.fanhui')[0]
	console.log(icon)
	for(let i=0;i<vip.length;i++){
		icon[i].onmouseenter=function(){
			vip[i].style.display='block'
			animate(vip[i],{right:35},300)
		}
		icon[i].onmouseleave=function(){
			vip[i].style.display='none'
			animate(vip[i],{right:70},300)
		}
	}

	fanhui.onmouseenter=function(){
		vip1.style.display='block'
		animate(vip1,{right:35},300)
	}
	fanhui.onmouseleave=function(){
		vip1.style.display='none'
		animate(vip1,{right:70},300)
	}
	fanhui.onclick=function(){
		animate(document.body,{scrollTop:0},500);
	}
	


	let sao=$('.saoma');
	for(let i=1;i<icon.length;i++){
		icon[i].onclick=function(){
			for(let j=0;j<sao.length;j++){
				sao[j].style.display='none'
			}
			sao[i+1].style.display='block'
		}
	}
	icon[0].onclick=function(){
		for(let j=0;j<sao.length;j++){
			sao[j].style.display='none'
		}
		sao[0].style.display='block'
	}
	let icon1=$('.iconfont1')[0];
	icon1.onclick=function(){
		for(let j=0;j<sao.length;j++){
			sao[j].style.display='none'
		}
		sao[1].style.display='block'
	}
	gu.onmouseleave=function(){
		for(let j=0;j<sao.length;j++){
			sao[j].style.display='none'
		}
	}
}