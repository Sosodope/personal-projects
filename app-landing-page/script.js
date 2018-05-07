var email = document.querySelector('#email');
var submit = document.querySelector('#subscribe');
var checkbox = document.querySelector('#checkbox');
var box = document.querySelector('#subscription');
var msg = document.querySelector('#msg');

function subscribed(){
	if(email.value !== ' ' && checkbox === true){
		email.value = ' ';
		email['placeholder'] = 'Enter your email here';
		checkbox['checked'] = false;
		msg.innerText = 'Subscribed';
	}else{
		submit.disabled = true;
	}
}

submit.addEventListener('click', subscribed);
