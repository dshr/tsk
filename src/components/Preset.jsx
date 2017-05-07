import React from 'react'
import { css } from 'glamor'

/**
 * A Preset button
 */

class Preset extends React.Component {

	constructor(props) {

		super(props)
	}

	render() {

		const boxStyles = css({
			alignItems: 'center',
			backgroundColor: this.props.active ? 'gray' : 'lightgray',
			color: 'white',
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
			justifyContent: 'center',
			width: '100%',
			margin: '0.5rem',
		}, {
			'@media(orientation: portrait)': {
				width: (100/3.5) + 'vw',
				height: (100/3.5) + 'vw',
			}
		}, {
			'@media(orientation: landscape)': {
				width: (100/6.5) + 'vw',
				height: (100/6.5) + 'vw',
				flex: 1,
			}
		})

		const inputStyles = css({
			backgroundColor: 'transparent',
			border: '0',
			borderRadius: '0',
			caretColor: 'white',
			color: 'white',
			display: 'block',
			fontSize: '2rem',
			marginBottom: this.props.editing ? '0.1rem' : '0.2rem',
			outline: 'none',
			padding: 0,
			pointerEvents: this.props.editing ? 'initial' : 'none',
			textAlign: 'center',
			width: '5rem',
			borderBottom: this.props.editing ? '1px solid white' : 'none',
			':placeholder': {
				color: 'white'
			},
			'::-webkit-inner-spin-button': {
				WebkitAppearance: 'none',
				margin: 0
			},
			'::-webkit-outer-spin-button': {
				WebkitAppearance: 'none',
				margin: 0
			},
			MozAppearance: 'textfield'
		})

		return (
			<div onClick={this.props.onClick} className={boxStyles}>
				<input type='number'
							 className={inputStyles}
							 defaultValue={this.props.tempo}
							 onChange={(e) => this.props.changeCallback(this.props.id, e.target.value)}
							 maxLength='3'/>
				<div>bpm</div>
			</div>
		)
	}
}

export default Preset
