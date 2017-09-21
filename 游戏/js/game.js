/*
* @Author: asus
* @Date:   2017-08-23 09:02:21
* @Last Modified by:   asus
* @Last Modified time: 2017-08-30 23:00:37
*/
/*
属性
	哪些字符
	个数
	速度
	得分
	关卡
	血条
	减分
	奖励
方法
	消除
	产生字符
		个数
		哪些
	下一关
	重新开始
 */
window.onload=function(){
    let start=document.querySelector('.start');
	start.onclick=function(){
		let game=new Game();
		game.start();
		start.style.display='none';
	}
let newarr=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
function color(arr){
		let str='#'
		for(let i=0;i<6;i++){
			let ind=Math.floor(Math.random()*arr.length)
			str+=arr[ind]
		}
		return str;
	}
function Game(){
	this.charSheet=[['Q','img/Q.png'],['W','img/W.png'],['E','img/E.png'],['R','img/R.png'],['T','img/T.png'],['Y','img/Y.png'],['U','img/U.png'],['I','img/I.png'],['O','img/O.png'],['P','img/P.png'],['A','img/A.png'],['S','img/S.png'],['D','img/D.png'],['F','img/F.png'],['G','img/G.png'],['H','img/H.png'],['J','img/J.png'],['K','img/K.png'],['L','img/L.png'],['Z','img/Z.png'],['X','img/X.png'],['C','img/C.png'],['V','img/V.png'],['B','img/B.png'],['N','img/N.png'],['M','img/M.png'],]
	this.length=5;
	this.element=[];
	this.position=[];
	this.speed=3;
	this.gq=50;
	this.scoreobj=document.querySelector('.span1')
	this.liveobj=document.querySelector('.span2')
}
Game.prototype={
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.key();
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			this.getChar();
		}
	},
	checkRepeat:function(num){
		let that=this;
		return this.element.some(function(value){
			return that.charSheet[num][0]==value.innerText;
		})
	},
	checkPosition:function(left){
		return this.position.some(function(value){
			return left+50>value && value+50>left
		})
	},
	getChar:function(){
		let num//获取字母下标
		let lefts
		let tops=Math.random()*300-200;
		do{
			num=Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkRepeat(num))
		do{
			lefts=(innerWidth-400)*Math.random()+200;
		}while(this.checkPosition(lefts))
		let divs=document.createElement('div');//创建元素
		divs.classList.add('char')
		//出现位置
		divs.style.cssText=`
			left:${lefts}px;top:${tops}px;
			background-image:url(${this.charSheet[num][1]});
		`
		divs.innerText=this.charSheet[num][0]//插入字母
		document.body.appendChild(divs)//放到页面中
		this.element.push(divs);
		this.position.push(lefts);
	},
	drop:function(){
		let that=this;
		this.t=setInterval(function(){
			for(let i=0;i<that.element.length;i++){
				that.element[i].style.top=`${that.element[i].offsetTop+that.speed}px`;
				if(that.element[i].offsetTop>=500){//下落超出的移除掉
					that.liveobj.innerText--;
					if(that.liveobj.innerText==0){
						clearInterval(that.t);	
						for(let i=0;i<that.element.length;i++){
							document.body.removeChild(that.element[i])
						}
						that.element=[];
						that.position=[];
						that.liveobj.innerText=10;
						that.scoreobj.innerText=0;
						start.style.display='block';
						if(confirm('继续游戏')){
							
						}else{
							window.close();
						}
					}
					document.body.removeChild(that.element[i])
					that.element.splice(i,1)//删除数组里的
					that.position.splice(i,1)
					that.getChar();
					
				}
				
			}


		},40)
	},
	key:function(){
		let that=this;
		document.onkeydown=function(e) {
			let char=String.fromCharCode(e.keyCode);//键盘按下的键转换为Unicode编码
			for(let i=0;i<that.element.length;i++){
				if(char==that.element[i].innerText){
					that.scoreobj.innerText++
					if(that.gq==that.scoreobj.innerText){
						that.next();
					}
					document.body.removeChild(that.element[i])
					that.element.splice(i,1)//删除数组里的
					that.position.splice(i,1)
					that.getChar();
				}
			}
		};
	},
	next:function(){
		clearInterval(this.t);
		for(let i=0;i<this.element.length;i++){
			document.body.removeChild(this.element[i])
		}
		this.element=[];
		this.position=[];
		this.length+=1;
		this.gq+=10;
		this.start();
	}
}
}