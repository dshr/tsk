import { connect } from 'react-redux'
import { togglePreset, editPreset } from '../actions/index.jsx'
import PresetList from '../components/PresetList.jsx'

const mapStateToProps = (state) => {

	return {

		presets: state.buttons,
		editing: state.editing
	}
}

const mapDispatchToProps = (dispatch) => {

	return {

		onPresetClick: (id) => {

			dispatch(togglePreset(id))
		},
		onPresetChange: (id, tempo) => {

			dispatch(editPreset(id, tempo))
		}
	}
}

const PresetListContainer = connect(mapStateToProps, mapDispatchToProps)(PresetList)

export default PresetListContainer
