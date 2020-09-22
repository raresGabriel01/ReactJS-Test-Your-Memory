import React from 'react';
import './App.css';
import Game from './Components/Game.js'
import Menu from './Components/Menu.js'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inGame : false
    }
  }

  render() {
    return (
      this.state.inGame ? <Game/> : <Menu startGame = {this.startGame}/>
    )
  }

  startGame = () => {
    this.setState({inGame:true})
  }
}

export default App;
