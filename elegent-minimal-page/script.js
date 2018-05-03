var btn = document.getElementById('back-to-top'),
	body = document.body,
	docElem = document.documentElement,
	offset = 100,
	scrollPos, docHeight,
	isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

//set footer copyright date
var dates = new Date();
var copyYear = document.getElementById('year');
copyYear.textContent = dates.getUTCFullYear();

//calculate doc height and set offset to a quarter of the value
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if( docHeight !== 'undefined'){
	offset = docHeight / 4;
}
//add event listeners for scroll and click
window.addEventListener('scroll', function( event){
	scrollPos = body.scrollTop || docElem.scrollTop;
	btn.className = ( scrollPos > offset ) ? 'visible' : '';
});
btn.addEventListener('click', function( event){
	event.preventDefault();
	if(isFirefox){
		docElem.scrollTop = 0;
	}else{
		body.scrollTop = 0;
	}
});