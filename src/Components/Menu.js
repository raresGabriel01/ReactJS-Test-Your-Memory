import React from 'react'
import './Menu.css'
class Menu extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div id = 'menu'>
				<img src ='/mind.jpg' id = 'mind'/>
				<button onClick = {this.props.startGame}> Start </button>


			</div>
		)
	}
}

export default Menu