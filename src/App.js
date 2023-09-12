import './App.css';
import React, { useEffect, useState, useContext, createContext } from 'react';
import Square from './components/Square';
import GameBoard from './views/GameBoard';
import ColorSelector from './components/ColorSelector';

export const AppContext = createContext();

function App() {

  const [gameIsOn, setGameIsOn] = useState(false);
  const [colorsChosen, setColorsChosen] = useState(false);
  const [turn, setTurn] = useState(1);
  const [p1Color, setP1Color] = useState("");
  const [p2Color, setP2Color] = useState("");
  const [p1GameState, setP1GameState] = useState({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false
  });
  const [p2GameState, setP2GameState] = useState({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false
  });


  const startGame = () => {
    setGameIsOn(true);
    setP1Color("red");
    setP2Color("blue");
  }

  const resetGame = () => {
    setGameIsOn(false);
    setP1Color("");
    setP2Color("");
    setTurn(1)
  }

  // const selectColors = () => {

  // }

  return (

    <div className='container mt-5'>
      <AppContext.Provider value={{ gameIsOn, setGameIsOn, turn, setTurn, p1Color, setP1Color, p2Color, setP2Color, p1GameState, setP1GameState, p2GameState, setP2GameState }}>

        {/* ------------------ HEADER --------------------*/}
        <div className='text-center'>
          <h1>Tic Tac Toe</h1>
        </div>
        <div className='text-center'>
          {
            gameIsOn &&
            <p>It's Player {turn}'s Turn!</p>
          }

          {
            !gameIsOn &&
            <button className="btn btn-success" onClick={() => startGame()}>Start</button>
          }
        </div>
        {/* ------------------ GAME BOARD --------------------*/}
        {
          (gameIsOn) &&
          <div className='text-center'>
            <div className='d-flex justify-content-center p-3'>
              {/* <ColorSelector /> */}
              <GameBoard />
            </div>
            <button className="btn btn-danger" onClick={() => resetGame()}>Reset</button>
          </div>
        }

      </AppContext.Provider>
    </div >
  );
}

export default App;
