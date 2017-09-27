window.onload=function(){
	let table=document.querySelector('tbody');
	let arr=[
	{name:'Karry',age:18,sex:'男',classn:'WUIF1707',bron:'重庆'},
	{name:'Karry',age:18,sex:'男',classn:'WUIF1707',bron:'重庆'},
	{name:'Karry',age:18,sex:'男',classn:'WUIF1707',bron:'重庆'},
	{name:'Karry',age:18,sex:'男',classn:'WUIF1707',bron:'重庆'},
	{name:'Karry',age:18,sex:'男',classn:'WUIF1707',bron:'重庆'}
	];
	arr.forEach(element=>{
		creat(element);
	})
	function creat(obj){
		let trs=document.createElement('tr');
		trs.innerHTML=`
				<td>${obj.name}</td>
				<td>${obj.age}</td>
				<td>${obj.sex}</td>
				<td>${obj.classn}</td>
				<td>${obj.bron}</td>
				<td><button class="delbtn">删除</button></td>
		`;
		table.appendChild(trs);
	}
	table.ondblclick=function(e){
		let element=e.target;
		if(element.nodeName=='TD'){
			let oldt=element.innerText;
			element.innerText='';
			let inputs=document.createElement('input');
			inputs.value=oldt;
			element.appendChild(inputs);
			inputs.onblur=function(){
				let newt=inputs.value.trim();
				element.removeChild(inputs);
				if(newt){
					 element.innerText=newt;
				}
			   else{
			   	element.innerText=oldt;
			   }
			}

		}
		else if(element.nodeName=='BUTTON'){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}
	}
}