import React from 'react'
import { css } from 'glamor'
import PresetList from '../containers/PresetList.jsx'

class App extends React.Component {

	constructor(props) {

		super(props)
	}

	render() {

		this.props.engine.kickStart()
		this.props.engine.tempo = this.props.tempo
		this.props.engine.playing = this.props.playing

		const containerStyles = css({
			height: '100%',
			display: 'flex',
			textAlign: 'center',
			flexDirection: 'column',
			justifyContent: 'space-between',
			padding: '1rem 0'
		})

		const linkStyles = css({
			textDecoration: 'underline',
			fontSize: '1rem',
			margin: 0,
			fontWeight: 'normal',
			':hover': {
				textDecoration: 'line-through'
			}
		})

		const overlayStyles = css({
			background: 'white',
			display: this.props.showingDescription ? 'flex' : 'none',
			position: 'fixed',
			top: 0,
			width: '100%',
			height: '100%',
			textAlign: 'center',
			flexDirection: 'column',
			justifyContent: 'center'
		})

		const headingStyles = css({
			fontSize: '10vmax',
			margin: 0
		})

		const subheadingStyles = css({
			fontSize: '6vmax',
			margin: 0
		})

		const buttonContainerStyles = css({
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			padding: '2rem 0'
		})

		const buttonStyles = css({
			fontSize: '1.5rem'
		})

		return (
			<div className={containerStyles}>
				<div className={overlayStyles}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus placeat, voluptates dignissimos sint architecto neque debitis et consequatur id quia. Necessitatibus cupiditate incidunt, deleniti vero veritatis nostrum quae, obcaecati ab.
					</p>
					<a className={linkStyles} onClick={this.props.onToggleDescription}>
						close
					</a>
				</div>
				<h1 className={linkStyles} onClick={this.props.onToggleDescription}>
					tsk!
				</h1>
				<div>
					<h2 className={headingStyles}>{this.props.tempo}</h2>
					<h3 className={subheadingStyles}>bpm</h3>
				</div>
				<div>
					<PresetList />
					<div className={buttonContainerStyles}>
						<a onClick={this.props.onTogglePlayCick}
						   className={buttonStyles}>
							{this.props.playing ? 'stop' : 'play'}
						</a>
						<a onClick={this.props.onToggleEditCick}
						   className={buttonStyles}>
							{this.props.editing ? 'done' : 'edit'}
						</a>
					</div>
					<a href="https://des.codes" className={linkStyles}>des.codes</a>
				</div>
			</div>
		)
	}
}

export default App
