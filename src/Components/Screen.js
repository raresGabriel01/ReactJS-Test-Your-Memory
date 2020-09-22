import React from 'react'
import './Screen.css'

class Screen extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			text:"Pay attention !",
			currentBackgroundColor: null
		}
	}

	render() {
		
		return (
			<div id = 'screen' style ={{backgroundColor:this.props.lost? "white" : this.state.currentBackgroundColor}}>
				{this.props.lost ? <h1> You lost :( </h1> : <h1> {this.state.text} </h1>}
			</div>
		)
	}

	componentDidUpdate(prevProps) {
		if(prevProps.colors.length != this.props.colors.length && this.state.currentBackgroundColor === undefined){
			this.showColors()
		}
	}

	playTimer = () => {
		let timer = 3
		let interval = setInterval(() => {
			this.setState({text:timer})
			timer -- 
			if(timer == -1) {
				this.setState({text:'Go!'})
			}
			else if(timer == -2) {
				this.setState({text:''})
				clearInterval(interval)
				this.props.addColor()
				this.showColors()
			}
		}, 1000)
	}


	showColors = () => {
		let timer = 0
		let index = 0
		let interval = setInterval(()=>{
			timer++
			if(index <= this.props.colors.length) {
				let value = timer % 2 ? 'white' : this.props.colors[index++]
				this.setState({currentBackgroundColor:value})
			}
			else {
				clearInterval(interval)
			}
		},300)
	}
}

export default Screen