import React from 'react'
import Preset from './Preset.jsx'
import { css } from 'glamor'

class PresetList extends React.Component {

	constructor(props) {

		super(props)
	}

	render() {

		const listStyles = css({
			width: '100%',
			padding: '0.5rem',
			display: 'flex',
			flexWrap: 'wrap'
		})

		return (
			<div className={listStyles}>
				{this.props.presets.map(preset =>

					<Preset id={preset.id}
					        key={preset.id}
					        tempo={preset.tempo}
					        active={preset.active}
					        onClick={() => this.props.onPresetClick(preset.id)}
					        changeCallback={this.props.onPresetChange}
					        editing={this.props.editing}/>
				)}
			</div>
		)
	}
}

export default PresetList
