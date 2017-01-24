$(document).ready(function(){

	var textBot = ['Здравствуйте, вас интересует разработка сайтов? Я могу проконсультировать','Консультация абсолютно бесплатная. Задавайте ваш вопрос'];

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
		var userBlock = '<div id="text-block" class="text-block"><span id="block" class="' + classBlock + ' _block">' + text +'</span></div>';
		$('#chat-content').append(userBlock);
	}

	function addUserText() {
		var userText = $('input[name="user-input"]').val();
		addText(userText,'user');
		$('input[name="user-input"]').val('');
		$('#chat-input').css({'display': 'none'});
		$('#chat-main').animate({'height': '310px'},500);
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

	$('#btn-text').click(function(){
		addUserText();
	});


	

	setTimeout(sideChat, 2000, '0px');
	setTimeout(addText, 4000, textBot[0], 'bot');
});