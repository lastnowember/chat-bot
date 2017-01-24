$(document).ready(function(){

	function sideChat(side){
		$('#chat-wrapper').animate({'bottom':side}, 1000);
	}

	function addText(text, who){
		var classBlock;
		if(who == 'user') {
			classBlock = 'user-block';
		} else {
			classBlock = 'bot-block'
		}
		var userBlock = '<div id="text-block"><span id="block" class="' + classBlock + '">' + text +'</span></div>'

	}

	$('#click-chat-header').click(function(){
		var chatHeaderBottom = $('#chat-wrapper').css('bottom');
		console.log(chatHeaderBottom);
		if( chatHeaderBottom == '0px') {
			sideChat('-340px');
		} else {
			sideChat('0px');
		}
	});


	

setTimeout(sideChat, 2000, '0px');
});