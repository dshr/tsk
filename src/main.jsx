import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { css } from 'glamor'
import AudioEngine from './audio/AudioEngine.jsx'
import App from './containers/App.jsx'
import reducer from './reducers/index.jsx'

const store = createStore(reducer)
const engine = new AudioEngine()

css.global('*',	{ boxSizing: 'border-box' })
css.global('html, body',	{ margin: 0, fontFamily: ['Share Tech Mono', 'monospace'] })
css.global('html, body, #root',	{ height: '100%' })

render(
	<Provider store={store}>
		<App engine={engine} />
	</Provider>,
	document.getElementById('root')
)
