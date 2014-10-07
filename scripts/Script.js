$(document).ready(function(){
		var audio = document.createElement('audio');
		audio.setAttribute('src', 'audio/Nirvana-Love_Buzz.mp3');
		/*audio.setAttribute('autoplay', 'autoplay');*/
		audio.load();
		var play = 0;
	$("#image").click(function (){
		if(play)
		{
			play = 0;
			audio.pause();
		}
		else
		{
			play = 1;
			audio.play();
		}
	});
});