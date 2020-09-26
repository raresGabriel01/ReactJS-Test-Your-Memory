import React from 'react'
import './Menu.css'
import 'font-awesome/css/font-awesome.min.css'
class Menu extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			volume:true,
			chosenDifficulty:'easy'
		}
	}

	render() {
		return (
			<div id = 'menu'>
				<img src ='/mind.jpg' id = 'mind'/>
				<button id = 'startButton' onClick = {this.props.startGame}> Start </button>
				<i className="fa fa-volume-off" style = {{color: this.state.volume ? "green" : "red"}} aria-hidden="true" onClick = {this.handleVolumeClick}></i>
				<div id ='difficultyWrap'>
					<button id = 'easy'
							className ='difficulty easy' 
							onClick = {this.handleDifficultyClick}
							style = {this.getStyleOf('easy')}> Easy </button>

					<button id = 'normal'
							className = 'difficulty normal' 
							onClick = {this.handleDifficultyClick}
							style = {this.getStyleOf('normal')}> Normal </button>

					<button id = 'hard'
							className = 'difficulty hard' 
							onClick = {this.handleDifficultyClick}
							style = {this.getStyleOf('hard')}> Hard </button>
				</div>
			</div>
		)
	}

	handleVolumeClick = (event) => {
		this.setState(prevState => {return {volume:!prevState.volume}})
	}

	handleDifficultyClick = (event) => {
		this.setState({chosenDifficulty:event.target.id})
	}

	getStyleOf = (difficulty) => {
		let style = {}
		let dict = {'easy':'#2dd641', 'normal':'yellow', 'hard':'red'}
		style.backgroundColor = this.state.chosenDifficulty === difficulty ? dict[difficulty] : 'white'
		style.color = this.state.chosenDifficulty === difficulty ? 'white' : dict[difficulty]
		return style
	}
}

export default Menu