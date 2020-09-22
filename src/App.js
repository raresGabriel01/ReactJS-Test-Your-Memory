import React from 'react';
import './App.css';
import Game from './Components/Game.js'
import Menu from './Components/Menu.js'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inGame : false,
      menuRef: React.createRef()
    }
  }

  render() {

    return (
      
      this.state.inGame ? <Game volume = {this.state.menuRef.current.state.volume}/> : <Menu ref = {this.state.menuRef} startGame = {this.startGame}/>
    )
  }

  startGame = () => {
    this.setState({inGame:true})
  }
}

export default App;
