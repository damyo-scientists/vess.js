import React from 'react';
import './App.css';
import Character from "./components/character";
import GameStore from "./stores/game-store";
import {Loop, World} from 'react-game-kit'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loop>
          <World>
            <Character store={GameStore}/>
            <p>
              Hello vess.js!
            </p>
          </World>
        </Loop>
      </header>
    </div>
  );
}

export default App;
