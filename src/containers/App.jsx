import { connect } from 'react-redux'
import { togglePlaying, toggleEditing, toggleDescription } from '../actions/index.jsx'
import App from '../components/App.jsx'


const mapStateToProps = (state, ownProps) => {

	const tempo = state.buttons.filter(function(button) {

		return button.active == true
	})[0].tempo
  return {
  	tempo: tempo,
  	playing: state.playing,
  	editing: state.editing,
  	showingDescription: state.showingDescription
  }
}

const mapDispatchToProps = (dispatch) => {

	return {

		onTogglePlayCick: () => {

			dispatch(togglePlaying())
		},
		onToggleEditCick: () => {

			dispatch(toggleEditing())
		},
		onToggleDescription: () => {

			dispatch(toggleDescription())
		}
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
