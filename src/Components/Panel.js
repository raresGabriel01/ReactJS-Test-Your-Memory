import React from 'react'
import './Panel.css'

class Panel extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render() {
		let colors = this.props.buttonColors
		colors = colors.map(color => <div className = 'button' style ={{backgroundColor:color}} key = {color} onClick ={ this.handleClick}></div>)
		return (
			<div id = 'panel'>
				{colors}
			</div>
		)
	}

	handleClick = (event) => {
		
		let color = event.target.style.backgroundColor
		this.props.handleClick(color)
	}
}

export default Panel