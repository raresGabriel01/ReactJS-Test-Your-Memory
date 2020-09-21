import React from 'react'
import './Game.css'
import Screen from './Screen.js'
import Panel from './Panel.js'
class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			score:0,
			colors: [],
			screenRef: React.createRef(),
			index:0,
			lost:false
		}
	}

	render() {
		return (
			<div className = 'cover'>
				<Screen lost = {this.state.lost} colors = {this.state.colors} addColor = {this.addColor} ref = {this.state.screenRef}/>
				<Panel handleClick = {this.handleButtonClick}/>
			</div>
		)
	}

	componentDidMount() {
		this.state.screenRef.current.playTimer()
	}

	addColor = () => {
		this.setState({colors:[...this.state.colors,this.randomColor()]})
	}

	randomColor = () => {
		let randomColors = ['red', 'green', 'blue']
		return randomColors[Math.floor(Math.random()*3)]
	}

	handleButtonClick = (color) => {
		if(this.state.colors[this.state.index] !== color) {
			this.setState({lost:true})
		}

		else if(this.state.index == this.state.colors.length - 1) {
			this.setState({index:0})
			this.addColor()
		}
		else {
			this.setState(prevState => {
				return (
					{index: prevState.index + 1}
				)
			})
		}
		
	}
}

export default Game