/*
* @Author: asus
* @Date:   2017-09-03 13:52:08
* @Last Modified by:   asus
* @Last Modified time: 2017-09-03 16:06:33
*/
$(function () {
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


    $('textarea').keyup(function(){
        let len=$(this).val().length;
        $('.rest>span').text(`${120-len}`);
    }).keydown(function (e){
        if(e.shiftKey && e.keyCode==13){
            fn();
        }
    })

    $('.send').click(function(){
        fn()
    })

    $('.clear').click(function(){
        $('.name').val('');
        $('.sub').val('');
        $('.emall').val('');
        $('textarea').val('');
        $('.rest>span').text(120);
    })
    function fn(){
        let use=$('.name').val();
        $('.name').val('');
        let subs=$('.sub').val();
        $('.sub').val('');
        let ema=$('.emall').val();
        $('.emall').val('');
        let val=$('textarea').val();
        $('textarea').val('');
        $('.rest>span').text(120);
    }
})



// window.onload=function(){
// 	let ftop=$('.ftop')[0];
// 	window.onscroll=function(){
// 		let fc=document.body.scrollTop;
// 		if(fc>=500){
// 			ftop.style.display='block'
// 		}else{
// 			ftop.style.display='none'
// 		}
// 		ftop.onclick=function(){
// 			animate(document.body,{scrollTop:0},300)
// 		}
// 	}
//
//
// 	let text =document.querySelector('textarea');
// 	let span=document.querySelector('.rest>span')
// 	let total=120;
// 	let clear=document.querySelector('.clear')
// 	let send=document.querySelector('.send')
// 	let name=document.querySelector('.name')
// 	let emall=document.querySelector('.emall')
// 	let sub=document.querySelector('.sub')
// 	text.onkeyup=function(){
// 		let len=text.value.length;
// 		span.innerText=`${total-len}`
//
// 	}
// 	send.onclick=text.onkeydown=function(e){
// 		if(e.type=='click'){//判断点击类型
// 			fn();
// 		}
// 		if(e.type=='keydown'){
// 			if(e.shiftKey && e.keyCode==13){
// 				fn();
// 			}
// 		}
//
// 	}
//
// 	clear.onclick=function(){
// 		name.value='';
// 		text.value='';
// 		emall.value='';
// 		sub.value='';
// 		span.innerText=120;
// 	}
// 	function fn(){
// 			let use=name.value;
// 			name.value=''
// 			let ema=emall.value;
// 			emall.value=''
// 			let subs=sub.value;
// 			sub.value=''
// 			let val=text.value;
// 			text.value='';
// 			span.innerText=120;
// 		}
// }