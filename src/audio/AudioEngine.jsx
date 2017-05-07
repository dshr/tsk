class AudioEngine {

	constructor() {

		self = this
		this.tempo = 120
		this.nextNoteTime = 0
		this.playing = false
		this.started = false

		window.AudioContext = window.AudioContext || window.webkitAudioContext
		this.context = new AudioContext

		this.scriptNode = this.context.createScriptProcessor(1024, 1, 1)
		this.scriptNode.connect(this.context.destination)
		this.scriptNode.onaudioprocess = this.scheduleNotes
	}

	scheduleNotes(event) {

		let bufferLength = event.inputBuffer.length / event.inputBuffer.sampleRate
		while ((self.nextNoteTime < event.playbackTime + bufferLength) && self.playing) {

			self.playNote(self.nextNoteTime)
			self.nextNoteTime += self.secondsPerBeat()
		}
	}

	playNote(time) {

		let osc = self.context.createOscillator()
		osc.connect(self.context.destination)
		osc.frequency.value = 880.0
		osc.start(time)
		osc.stop(time + self.secondsPerBeat() / 16)
	}

	secondsPerBeat() {

		return 60.0 / self.tempo
	}

	kickStart() {

		if (!self.started) {

			const buffer = self.context.createBuffer(1, 1, 22050)
			const source = self.context.createBufferSource()
			source.buffer = buffer
			source.connect(self.context.destination)
			source.start(0)
		}
	}
}

export default AudioEngine
