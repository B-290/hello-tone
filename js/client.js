
const sound = new Tone.Player("assets/storm.mp3").toDestination();
const button = document.querySelector('.play1');

button.addEventListener('click', function(){
	sound.start()	
		sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4)
});

var buffer = new Tone.Buffer("assets/storm.mp3", function(){
	
	var buff = buffer.get();
});
	
	console.log(button, 'click');


const sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();


