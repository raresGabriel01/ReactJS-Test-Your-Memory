import React from 'react'
import './ScoreCounter.css'

class ScoreCounter extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<span id ='score'>Your score: {this.props.score} </span>
		)
	}
}


export default ScoreCounter