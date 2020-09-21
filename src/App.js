import React from 'react';
import './App.css';
import Game from './Components/Game.js'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inGame : true
    }
  }

  render() {
    return (
      this.state.inGame ? <Game/> : <div> {this.state.inGame.toString()} </div>
    )
  }
}

export default App;
