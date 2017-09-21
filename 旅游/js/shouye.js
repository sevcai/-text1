/*
* @Author: asus
* @Date:   2017-08-21 10:15:50
* @Last Modified by:   asus
* @Last Modified time: 2017-09-12 17:47:46
*/
$(function(){

	$('.title').find('li').on('click',function(){
		let index=$(this).index();
		$('.last').hide().eq(index).show();
		$('.href').css({color:'#666565'}).eq(index).css({color:'#38afe5'})
		$('.title').find('li').css({borderBottom:'1px solid #dedbdb',background:'#fcfafa'}).eq(index)
		.css({borderBottom:'none',background:'white'})
	})




	$(document).scroll(function(){
		let fc=$(document).scrollTop();
		if(fc>=500){
			$('.ftop').show()
		}else{
			$('.ftop').hide()
		}
	})
    $('.ftop').click(function(){
        $('body').animate({scrollTop:0})
    })



	//banner
	let flag=true;
	let bli=$('.ban').find('li')
	let width = $('.ban').innerWidth();
	let t;
	let now=0;
	let next=0;
	t=setInterval(fn,3000);
	function fn(dir='right'){
		if(dir=='right'){
			next++;
			if(next==bli.length){
				next=0
			}
            bli.eq(next).css({left:width})
            bli.eq(now).animate({left:-width})
            bli.eq(next).animate({left:0},'normal','linear',function(){flag=true})
		}else if(dir=='left'){
			next--;
			if(next==-1){
				next=bli.length-1;
			}
            bli.eq(next).css({left:-width})
            bli.eq(now).animate({left:width})
            bli.eq(next).animate({left:0},'normal','linear',function(){flag=true})
		}
		now=next;
	}

	$('.ban').mouseenter(function(){
		clearInterval(t);
	}).mouseleave(function(){
		t=setInterval(fn,3000);
	})

	$('.pleft').click(function(){
		if(flag){
			flag=false;
			fn('left');
		}
	})
	$('.pright').click(function(){
		if(flag){
			flag=false;
			fn();
		}
	})
})
