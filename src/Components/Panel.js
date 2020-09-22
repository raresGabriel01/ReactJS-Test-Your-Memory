import React from 'react'
import './Panel.css'

class Panel extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render() {
		return (
			<div id = 'panel'>
				<div className = 'button' style ={{backgroundColor:'red'}} onClick = {this.handleClick}> </div>
				<div className = 'button' style ={{backgroundColor:'blue'}} onClick = {this.handleClick}> </div>
				<div className = 'button' style ={{backgroundColor:'green'}} onClick = {this.handleClick}> </div>
			</div>
		)
	}

	handleClick = (event) => {
		
		let color = event.target.style.backgroundColor
		this.props.handleClick(color)
	}
}

export default Panel