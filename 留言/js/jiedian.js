/*
* @Author: asus
* @Date:   2017-08-16 16:37:55
* @Last Modified by:   asus
* @Last Modified time: 2017-08-16 16:51:45
*/
function insertAfter(nNode,pNode){
		let par=pNode.parentNode;
		let bro=pNode.nextElementSibling;
		if(bro){
			par.insertBefore(nNode,bro)
		}else{
			par.appendChild(nNode)
		}
		
	}
	//在一个节点后面插入元素
	HTMLElement.prototype.insertAfter=function(nNode){
		let par=this.parentNode;
		let bro=this.nextElementSibling;
		if(bro){
			par.insertBefore(nNode,bro)
		}else{
			par.appendChild(nNode)
		}
	}
	//在父节点前面插入元素
	HTMLElement.prototype.firstappend=function(nnode){
		let first=this.firstElementChild;
		if(first){
			this.insertBefore(nnode,first)
		}else{
			this.appendChild(nnode)
		}
	}

	//h1.appendto(box)
	HTMLElement.prototype.appendto=function(node){
		node.firstappend(this)
	} 


	//清楚里面的节点 
	HTMLElement.prototype.empty=function(){
		// this.innerHTML='';
		let child=this.childNodes;
		for(let i=child.length-1;i>=0;i--){
			this.removeChild(child[i])
		}
	}  
	//next()  nextAll()    nextUntil()  
	//previous()  previousAll()    previousUntil()  
	//ul.remove()
	//ul.closet(div)
	HTMLElement.prototype.next=function(){
		let nexte=this.nextElementSibling;
		return nexte;
	}
	HTMLElement.prototype.nextAll=function(){
		let nexte=this.nextElementSibling;
		let newarr=[];
		if(nexte){
			newarr.push(nexte)
		}else{
			return false;
		}
		while(nexte){
			nexte=nexte.next()
			newarr.push(nexte);
		}
		newarr.pop()
		return newarr;
	}