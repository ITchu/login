let user=document.getElementById('user');
let pas=document.getElementById('pas');
let btn=document.getElementById('btn');
btn.onclick=function(){
	let u=user.value;
	let p=pas.value;
	if(u=='karry'&&p=='19990921'){
		alert('success');
	}
	else{
	location.assign('error.html');}
}