//quote slider
const testimonials = [
	["Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....",
		"Andi Simond, Global Corporate Inc"],
	["And mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....",
		"Andi Simond, Global Corporate Inc"],
	["And then Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....",
		"Andi Simond, Global Corporate Inc"],
	["Also Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....",
		"Andi Simond, Global Corporate Inc"]
];
let j = 0;
const timer = 3000;
const nextButton = document.getElementById('next-one');
const message = document.getElementById('message');

function startTestimonials(){
	message.innerHTML = `<p>${testimonials[j][0]}<p> <small>${testimonials[i][1]}<small>`;
	if(j < testimonials.length - 1){
		j++;
	}else{
		j = 0;
	}
	// setTimeout('startTestimonials()', timer);
}

// window.onload = startTestimonials;
nextButton.addEventListener('click', startTestimonials);