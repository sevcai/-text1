/*
* @Author: asus
* @Date:   2017-08-31 08:41:40
* @Last Modified by:   asus
* @Last Modified time: 2017-09-03 19:44:37
*/
window.onload=function(){
	let pause=document.querySelector('.pause');
	let audio=document.querySelector('audio')
	let song=document.querySelector('.song')
	let singer=document.querySelector('.singer')
	let photo=document.querySelector('.photo>img')
	let name=document.querySelector('.name')
	let span1=document.querySelector('.span1')
	let span2=document.querySelector('.span2')
	let list=document.querySelector('.list')
	let jin=document.querySelector('.jin')
	let pre=document.querySelector('.pre')
	let next=document.querySelector('.next')
	let yinliang=document.querySelector('.yinliang')
	let voice=document.querySelector('.voice')
	let voc=document.querySelector('.voc')
	let danqu=document.querySelector('.suiji')



	pause.onclick=function(){
		if(audio.paused){
			audio.play();
			pause.classList.remove('icon-icon-test2')
			pause.classList.add('icon-icon-test1')
		}else{
			audio.pause()
			pause.classList.remove('icon-icon-test1')
			pause.classList.add('icon-icon-test2')
		}
	}



	audio.ontimeupdate=function(){
		let bili=audio.currentTime/audio.duration;
		jin.style.width=`${bili*100}%`
		let ct=time(audio.currentTime);
		span1.innerText=ct;

		database[i].lyrics.forEach((element,index)=>{
			if(element.time == ct){
				list.innerHTML='';
				let a=index;
				if(index<3){
					index=0;
				}
				if(index>=3){
					index-=3;
				}
				for(let j=index;j<database[i].lyrics.length;j++){
					list.innerHTML+=`<li class="list${j}">${database[i].lyrics[j].lyric}</li>`;
				}
				let obj=document.querySelector(`.list${a}`);
				obj.style.color='#da4242';
			}
		})

	}


	let i=0;
	pre.onclick=function(){
		i--;
		if(i<0){
			i=database.length-1;
		}
		render(database[i]);
		audio.play();
		pause.classList.remove('icon-icon-test2')
		pause.classList.add('icon-icon-test1')
	}
	next.onclick=function(){
		i++;
		if(i>=database.length){
			i=0		
		}
		render(database[i]);
		audio.play();
		pause.classList.remove('icon-icon-test2')
		pause.classList.add('icon-icon-test1')
	}
	
	audio.onended=function(){
		i++;
		if(i>=database.length){
			i=0		
		}
		render(database[i]);
		audio.play();
		pause.classList.remove('icon-icon-test2')
		pause.classList.add('icon-icon-test1')
	}

	
	render(database[i])
	function render(data){
		song.innerText=data.songs;
		singer.innerText=data.name;
		audio.src=data.src;
		photo.src=data.photo;
		name.innerText=`${data.songs}——${data.name}`;
		span1.innerText='00:00'
		span2.innerText=data.alltime;


		list.innerHTML='';
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`
				<li>${data.lyrics[i].lyric}</li>
			`
		}
	}


	function time(date){
		let min=Math.floor(date/60) >= 10 ? Math.floor(date/60) : `0${Math.floor(date/60)}`;
		let sec=Math.floor(date%60)>=10 ? Math.floor(date%60) :`0${Math.floor(date%60)}`;
		return `${min}:${sec}`;
	}



	voc.onmousedown=function(e){
		let ox=e.clientX;
		let ox1=voc.offsetLeft
		voc.onmousemove=function(e){
			let cx=e.clientX;
			let lefts=cx-ox+ox1;
			if(lefts<=0){
				lefts=0
			}else if(lefts>=96){
				lefts=96
			}
			voc.style.left=`${lefts}px`;
			voice.style.width=`${lefts}px`
			audio.volume=lefts/yinliang.offsetWidth;

		}
		voc.onmouseup=function(){
			voc.onmousemove=null;
			voc.onmouseup=null;	
		}
	}

	let flag=true;
	danqu.onclick=function(){
		if(flag){
			danqu.style.color='#31C27C';
			flag=false;
		}else{
			danqu.style.color='white';
			flag=true;
		}
	}

	
}