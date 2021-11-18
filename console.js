(function(){
var button;
function internalMic() {
	if (button===undefined) {
		button = document.querySelector('#wc-footer > div > div:nth-child(1) > div.join-audio-container > button');
	}
	if (button.getAttribute('aria-label') === 'unmute my microphone'){
		button.click();
	}
	setTimeout(internalMic,500);
}
internalMic();
})()
