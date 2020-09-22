import React from 'react'
import './Menu.css'
import 'font-awesome/css/font-awesome.min.css'
class Menu extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			volume:true
		}
	}

	render() {
		return (
			<div id = 'menu'>
				<img src ='/mind.jpg' id = 'mind'/>
				<button id = 'startButton' onClick = {this.props.startGame}> Start </button>
				<i className="fa fa-volume-off" style = {{color: this.state.volume ? "green" : "red"}} aria-hidden="true" onClick = {this.handleVolumeClick}></i>

			</div>
		)
	}

	handleVolumeClick = (event) => {
		this.setState(prevState => {return {volume:!prevState.volume}})
	}
}

export default Menu