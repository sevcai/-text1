/*
* @Author: asus
* @Date:   2017-08-28 18:10:56
* @Last Modified by:   asus
* @Last Modified time: 2017-09-03 20:42:44
*/
/*
属性：
	颜色、线宽、端点、边数、角、橡皮尺寸、width height、history、ctx、
	canvas
方法：
	画线、画虚线、铅笔、新建、保存、裁切、多边形、画圆、多角形、橡皮
 */
function Palette(canvas,mask){
	this.canvas=canvas;
	this.ctx=this.canvas.getContext("2d");
	this.history=[];
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;
	this.lineWidth=1;
	this.lineCap='butt';
	this.fillStyle='#266355'
	this.strokeStyle='#266355'
	this.mask=mask;
	this.style='stroke';
	this.temp=null;
}
Palette.prototype={
	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineCap=this.lineCap;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.setLineDash([0,0])
	},
	line:function(ox,oy,cx,cy){
		this.ctx.beginPath();
		this.ctx.moveTo(ox, oy);
		this.ctx.lineTo(cx, cy);
		this.ctx.closePath();
		this.ctx.stroke();
	},
	more:function(ox,oy,cx,cy,num){
		let that=this;
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
		poly(ox,oy,num,r)
		function poly(x,y,num,r){
			that.ctx.clearRect(0, 0, that.cw, that.ch);
			if(that.history.length>0){
				that.ctx.putImageData(that.history[that.history.length-1],0,0)
			}
			let ang=360/num*Math.PI/180
			that.ctx.beginPath()
			that.ctx.moveTo(x+r, y)
			for(let i=1;i<num;i++){
				that.ctx.lineTo(x+r*Math.cos(ang*i), y+r*Math.sin(ang*i))
			}
			that.ctx.closePath();
			that.ctx[that.style]();
		}
	},

	pen:function(){
		let that=this;
		that.init();
		this.ctx.setLineDash([0,0])
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			// if(that.history.length>0){
			// 	that.ctx.putImageData(that.history[that.history.length-1],0,0)
			// }
			that.ctx.beginPath();
			that.ctx.moveTo(ox, oy)
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				that.ctx.lineTo(cx, cy)
				that.ctx.stroke();
				that.mask.onmouseup=function(){
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}
		}
		document.onkeydown=function(e){
			if(e.ctrlKey && e.keyCode==90){
				let datas=that.history.pop();
				if(that.history==''){
					that.ctx.clearRect(0, 0, that.cw, that.ch)
				}else{
					that.ctx.putImageData(datas,0,0)
				}
				

			}
		}
	},
	dash:function(ox,oy,cx,cy){
				this.ctx.beginPath();
				this.ctx.setLineDash([1,5]);
				this.ctx.moveTo(ox, oy);
				this.ctx.lineTo(cx, cy);
				this.ctx.closePath();
				this.ctx.stroke();
	},
	wujiao:function(ox,oy,cx,cy,num){
		let that=this;
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
		poly(ox,oy,num,r)
		function poly(x,y,num,r){
			that.ctx.clearRect(0, 0, that.cw, that.ch);
			if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
			let ang=360/(num*2)*Math.PI/180
			let r1=r/2;
			that.ctx.beginPath()
			that.ctx.moveTo(x+r, y)
			for(let i=1;i<(num*2);i++){
				if(i%2){
					that.ctx.lineTo(x+r1*Math.cos(ang*i), y+r1*Math.sin(ang*i))
				}else{
					that.ctx.lineTo(x+r*Math.cos(ang*i), y+r*Math.sin(ang*i))
				}	
			}
			that.ctx.closePath();
			that.ctx[that.style]();
		}
	},
	circle:function(ox,oy,cx,cy){
				let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
				this.ctx.beginPath();
				this.ctx.arc(ox, oy, r, 0, 2*Math.PI, false)
				this.ctx.closePath();
				this.ctx[this.style]();
	},
	four:function(ox,oy,cx,cy){
				let x=cx-ox,y=cy-oy;
				this.ctx.beginPath();
				this.ctx.rect(ox, oy, x, y)
				this.ctx.closePath();
				this.ctx[this.style]();	
	},
	draw:function(type,num){
		let that=this;
		this.mask.onmousedown=function(e){
			that.init();
			let ox=e.offsetX,oy=e.offsetY;
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				that.ctx.clearRect(0, 0, that.cw, that.ch);
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that[type](ox,oy,cx,cy,num)				
			}
			that.mask.onmouseup=function(){
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
		}
		document.onkeydown=function(e){
			if(e.ctrlKey && e.keyCode==90){
				if(that.history==''){
					that.ctx.clearRect(0, 0, that.cw, that.ch)
				}else{
					let datas=that.history.pop();
					that.ctx.putImageData(datas,0,0)
				}
			}
		}
	},
	eraser:function(obj,w=20,h=20){
		let that=this;
		that.mask.onmousedown=function(e){
			obj.style.display='block';
			e.preventDefault();
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				let lefts=cx-w/2;
				let tops=cy-h/2;
				if(lefts<=0){
					lefts=0;
				}else if(lefts>=that.cw-w){
					lefts=that.cw-w
				}
				if(tops<=0){
					tops=0;
				}else if(tops>=that.ch-h){
					tops=that.ch-h;
				}
				obj.style.left=`${lefts}px`
				obj.style.top=`${tops}px`
				that.ctx.clearRect(lefts, tops, w, h)				
			}
			that.mask.onmouseup=function(){
				obj.style.display='none';
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
		 		that.mask.onmousemove=null;
		 		that.mask.onmouseup=null;
		 	}
		}
		document.onkeydown=function(e){
			if(e.ctrlKey && e.keyCode==90){
				if(this.history==''){
					this.ctx.clearRect(0, 0, this.cw, this.ch)
				}else{
					let datas=this.history.pop();
					this.ctx.putImageData(datas,0,0)
				}
			}
		}.bind(this)
	},
	font:function(){
		let that=this;
		that.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let divs=document.createElement('div');
			divs.style.cssText=`
				width:100px;height:30px;border:1px solid #666565;
				background:white;position:absolute;left:${ox}px;top:${oy}px;
			`
			divs.contentEditable=true;
			that.mask.appendChild(divs);
			that.mask.onmousedown=null;
			let lefts=ox;
			let tops=oy;
			divs.onmousedown=(e)=>{
				let ox1 =e.offsetX,oy1=e.offsetY;
				let leftw=e.clientX-ox1-divs.offsetLeft;
				let toph=e.clientY-oy1-divs.offsetTop;
				that.mask.onmousemove=(e)=>{
					let cx=e.clientX,cy=e.clientY;
				 	lefts=cx-ox1-leftw;
				 	tops=cy-oy1-toph;
				 	if(lefts<=0){
				 		lefts=0
				 	}else if(lefts>=that.cw-100){
				 		lefts=that.cw-100
				 	}
				 	if(tops<=0){
				 		tops=0
				 	}else if(tops>=that.ch-30){
				 		tops=that.ch-30
				 	}
				 	divs.style.left=`${lefts}px`
				 	divs.style.top=`${tops}px`
				}
				that.mask.onmouseup=()=>{
			 		that.mask.onmousemove=null;
			 		that.mask.onmouseup=null;
			 	}
			}


			divs.onblur=function(){
				let value=divs.innerText;
				that.ctx.textAlign='center';
				that.ctx.textBaseLine='middle';
				that.ctx.fillText(value, lefts, tops);
				that.mask.removeChild(divs);
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
			}
		}
		document.onkeydown=function(e){
			if(e.ctrlKey && e.keyCode==90){
				if(this.history==''){
					this.ctx.clearRect(0, 0, this.cw, this.ch)
				}else{
					let datas=this.history.pop();
					this.ctx.putImageData(datas,0,0)
				}
			}
		}.bind(this)
	},
	reverses:function(){
		let imgdata=this.ctx.getImageData(0,0,this.cw,this.ch);
		let data=imgdata.data;
		for(let i=0;i<data.length;i+=4){
			data[i]=255-data[i]
			data[i+1]=255-data[i+1]
			data[i+2]=255-data[i+2]
		}
		this.ctx.putImageData(imgdata,0,0)
	},
	clip:function(objs){
		let that=this;
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let ax,ay,minx,miny;
			that.mask.onmousemove=function(e){
				cx=e.offsetX,cy=e.offsetY;
				ax=Math.abs(cx-ox),ay=Math.abs(cy-oy);
				minx=cx>ox?ox:cx;
				miny=cy>oy?oy:cy;
				objs.style.cssText=`
					display:block;
					left:${minx}px;
					top:${miny}px;
					width:${ax}px;
					height:${ay}px;

				`

			}
			that.mask.onmouseup=function(){
				that.temp=that.ctx.getImageData(minx,miny,ax,ay)
				that.ctx.clearRect(minx, miny, ax, ay)
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.ctx.putImageData(that.temp,minx,miny)
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
				that.drag(minx,miny,ax,ay,objs)
				
			}
		}
	},
	drag:function(minx,miny,ax,ay,objs){
		let that= this;
		that.mask.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			if(ox>minx&&ox<minx+ax&&oy>miny&&oy<miny+ay){
				that.mask.style.cursor='move'
			}else{
				that.mask.style.cursor='default'
			}
		}
		that.mask.onmousedown=function(e){
			e.preventDefault();
			let ox=e.offsetX,oy=e.offsetY;
			that.mask.onmousemove=function(e){
				let cx=e.offsetX;cy=e.offsetY;
				let lef=cx-ox+minx;
				let to=cy-oy+miny;
				if(lef<=0){
					lef=0;
				}else if(lef>=that.cw-ax){
					lef=that.cw-ax
				}
				if(to<=0){
					to=0;
				}else if(to>=that.ch-ay){
					to=that.ch-ay;
				}
				objs.style.left=`${lef}px`
				objs.style.top=`${to}px`
				that.ctx.clearRect(0, 0, that.cw, that.ch);
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				if(that.temp) {
				that.ctx.putImageData(that.temp,lef,to)
				}
			}
			that.mask.onmouseup=function(){
				objs.style.display='none';
				that.temp=null;
				that.mask.style.cursor='default'
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.onmousemove=null;
				that.onmouseup=null;
			}
		}
	}
}