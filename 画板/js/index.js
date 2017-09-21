/*
* @Author: asus
* @Date:   2017-08-28 18:10:56
* @Last Modified by:   asus
* @Last Modified time: 2017-08-30 22:42:22
*/
window.onload=function(){
	let canvas=document.querySelector('canvas')
	
	let mask=document.querySelector('.mask')
	let pale=new Palette(canvas,mask);
	//形状
	let tool=document.querySelectorAll('.tools');
	tool.forEach(element=>{
		element.onclick=function(){
			let act=document.querySelector('label[active=true]')
			act.setAttribute('active',false)
			element.setAttribute('active',true)
			if(element.id=='pen'){
					pale.pen();
			}else if(element.id=='more'||element.id=='wujiao'){					
					let num=prompt('请输入多边(角)形边(角)数')
					pale.draw(element.id,num);
			}else{
				pale.draw(element.id)
			}
		}
	}) 

	//工具
	let style=document.querySelectorAll('.style');
	style.forEach(element=>{
		element.onclick=function(){
			for(let i=0;i<style.length;i++){
				style[i].setAttribute('active',false)
			}
			element.setAttribute('active',true)
			pale.style=element.id;
		}
	})



	//色板
	let input=document.querySelectorAll('input')
	input.forEach((element,index)=>{
		element.onchange=function(){
			if(index==0){
				pale.strokeStyle=element.value
			}else{
				pale.fillStyle=element.value
			}
		}
	})



	//橡皮擦
	let xiang=document.querySelector('.xiang');
	let era=document.querySelector('.eraser');
	xiang.onclick=function(){
		pale.eraser(era);
		
	}


	//文字
	let font=document.querySelector('.font');
	font.onclick=function(){
		pale.font();
	}



	//保存
	let save=document.querySelector('.baocun');
	save.onclick=function(){
		save.href=canvas.toDataURL('image/png')
		save.download='a.png'
	}	


	//反向
	let fanxiang=document.querySelector('.fanxiang')
	fanxiang.onclick=function(){
		pale.reverses();
	}


	//裁切
	let clip=document.querySelector('.clip');
	let clips=document.querySelector('.clips');
	clip.onclick=function(){
		pale.clip(clips)
	}
}