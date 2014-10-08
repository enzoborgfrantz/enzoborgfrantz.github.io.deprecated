$(document).ready(function(){

	var logo = $("#logo");
	var tools = $("#divPlayerTools");
	var audio = new Audio(); //Creating a new audio object
	audio.src = "audio/Prodigy-Girls.mp3"; //Assigning the song to the audio object
	audio.loop = true; //looping the song
	audio.autoplay = false; //autoplay switched off
	var status = 0; //the song is not playing yet

	logo.click(function (){
		logo.fadeOut();
		tools.css('visibility', 'visible');
		tools.css('display', 'block');
		//tools.fadeIn();
		audio.play();
	});
	
	tools.click(function(){
		tools.fadeOut();
		tools.css('visibility', 'hidden');
		logo.delay().fadeIn();
		audio.pause();
	});
	
	var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
	window.addEventListener("load", initMp3Player, false);
	
	function initMp3Player() {
                //document.getElementById('audio_box').appendChild(audio);
                context = new AudioContext(); // AudioContext object instance
                analyser = context.createAnalyser(); // AnalyserNode method
                canvas = document.getElementById('equalizer');
				canvas.width = 400;
				canvas.height = 200;
                ctx = canvas.getContext('2d');
				
                // Re-route audio playback into the processing graph of the AudioContext
                source = context.createMediaElementSource(audio);
                source.connect(analyser);
                analyser.connect(context.destination);
                frameLooper();
            }
			
	function frameLooper() {
                window.webkitRequestAnimationFrame(frameLooper);
                fbc_array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(fbc_array);
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                bars = 16;
				
				
                for (var i = 0; i < bars; i++) {
                    bar_x = i * (canvas.width / bars) + 1; //x coordinate of the bar
                    bar_width = (canvas.width / bars) - 2; //width of the bar
                    bar_height = -(fbc_array[i] / 1.7);
                    ctx.fillStyle = "#02ADFF"; // Color of the bars
                    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
                }
            }
});