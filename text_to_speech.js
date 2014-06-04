// 

console.log('Print & Announce list of all voices supported by this OS/Browser');

if (speechSynthesis) {
	speechSynthesis.getVoices().forEach(function(voice) { 

		var name = voice.name, 
			speech = new SpeechSynthesisUtterance("Hello, my name is " + name);
			
		speech.voice = voice;
		speechSynthesis.speak(speech);
		
		console.log(voice.name);

	});
}

// http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API