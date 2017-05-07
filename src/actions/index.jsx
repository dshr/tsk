export const togglePreset = (id) => ({
	type: 'TOGGLE_PRESET',
	id
})

export const editPreset = (id, tempo) => ({
	type: 'EDIT_PRESET',
	id,
	tempo
})

export const togglePlaying = () => ({
	type: 'TOGGLE_PLAYING'
})

export const toggleEditing = () => ({
	type: 'TOGGLE_EDITING'
})

export const toggleDescription = () => ({
	type: 'TOGGLE_DESCRIPTION'
})
