import { combineReducers } from 'redux'

var initial = localStorage.state ? JSON.parse(localStorage.state) : {
	playing: false,
	editing: false,
	showingDescription: false,
	buttons: [
		{
			id: 0,
			tempo: 120,
			active: true
		},
		{
			id: 1,
			tempo: 160,
			active: false
		},
		{
			id: 2,
			tempo: 180,
			active: false
		},
		{
			id: 3,
			tempo: 130,
			active: false
		},
		{
			id: 4,
			tempo: 155,
			active: false
		},
		{
			id: 5,
			tempo: 201,
			active: false
		}
	]
}
initial.playing = false
initial.editing = false

export default (state = initial, action) => {

	var newState = {}
	switch (action.type) {

		case 'TOGGLE_PRESET':

			var targetPreset = state.buttons.filter(function(button) {

				return button.id == action.id
			})[0]
			targetPreset.active = true
			var otherPresets = state.buttons.filter(function(button) {

				return button.id != action.id
			}).map(function(button) {

				button.active = false
				return button
			})
			var buttons = otherPresets.concat(targetPreset).sort(function(button1, button2) {

				return button1.id - button2.id
			})

			newState = Object.assign({}, state, {
				buttons: buttons
			})
			localStorage.state = JSON.stringify(newState)
			return newState

		case 'EDIT_PRESET':

			var targetPreset = state.buttons.filter(function(button) {

				return button.id == action.id
			})[0]
			targetPreset.tempo = action.tempo
			var otherPresets = state.buttons.filter(function(button) {

				return button.id != action.id
			})
			var buttons = otherPresets.concat(targetPreset).sort(function(button1, button2) {

				return button1.id - button2.id
			})
			newState = Object.assign({}, state, {
				buttons: buttons
			})
			localStorage.state = JSON.stringify(newState)
			return newState

		case 'TOGGLE_PLAYING':

			let playing = !state.playing
			newState = Object.assign({}, state, {
				playing: playing
			})
			localStorage.state = JSON.stringify(newState)
			return newState

		case 'TOGGLE_EDITING':

			let editing = !state.editing
			newState =  Object.assign({}, state, {
				editing: editing
			})
			localStorage.state = JSON.stringify(newState)
			return newState


		case 'TOGGLE_DESCRIPTION':

			let showingDescription = !state.showingDescription
			newState =  Object.assign({}, state, {
				showingDescription: showingDescription
			})
			localStorage.state = JSON.stringify(newState)
			return newState

		default:

			return state
	}
}
