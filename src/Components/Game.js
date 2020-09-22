import React from 'react'
import './Game.css'
import Screen from './Screen.js'
import Panel from './Panel.js'
import ScoreCounter from './ScoreCounter.js'
class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			score:0,
			colors: [],
			screenRef: React.createRef(),
			index:0,
			lost:false,
			correctSound:new Audio('/corect.mp3'),
			wrongSound: new Audio('/gresit.mp3')
		}
		this.state.correctSound.volume = props.volume ? 1 : 0
		this.state.wrongSound.volume = props.volume ? 0.3 : 0
	}

	render() {
		return (
			<div className = 'cover'>
				<ScoreCounter score = {this.state.score}/>
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
			this.state.wrongSound.load()
			this.state.wrongSound.play()
			this.setState({lost:true})
		}


		else {
			if(this.state.index == this.state.colors.length - 1) {
				this.state.correctSound.load()
				this.state.correctSound.play()
				this.setState(prevState => {
					return (
						{
							index:0,
							score:prevState.score + 1
						}
					)
				})
				this.addColor()
			}
			else {
				this.state.correctSound.load()
				this.state.correctSound.play()
				this.setState(prevState => {
					return (
						{index: prevState.index + 1, score:prevState.score + 1}
					)
				})
			}
		}

		
	}
}

export default Game