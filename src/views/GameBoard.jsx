import React, { useEffect, useState, useContext } from 'react';
import Square from '../components/Square';
import { AppContext } from '../App';

const GameBoard = (props) => {

    const { turn, setTurn, p1GameState, setP1GameState, p2GameState, setP2GameState, gameIsOn, setGameIsOn } = useContext(AppContext);

    // const checkForGameOver = () => {
    //     if (
    //         // horizontal
    //         (p1GameState["1"] && p1GameState["2"] && p1GameState["3"]) ||
    //         (p1GameState["4"] && p1GameState["5"] && p1GameState["6"]) ||
    //         (p1GameState["7"] && p1GameState["8"] && p1GameState["9"]) ||
    //         // vertical
    //         (p1GameState["1"] && p1GameState["4"] && p1GameState["7"]) ||
    //         (p1GameState["2"] && p1GameState["5"] && p1GameState["8"]) ||
    //         (p1GameState["3"] && p1GameState["6"] && p1GameState["9"]) ||
    //         // diagonal
    //         (p1GameState["1"] && p1GameState["5"] && p1GameState["9"]) ||
    //         (p1GameState["3"] && p1GameState["5"] && p1GameState["7"])
    //     ) {
            
    //     }

    // }

    return (
        <div className='game-board p-3'>
            <div className='d-flex justify-content-around'>
                <div>
                    <Square id="1"/>
                </div>
                <div>
                    <Square id="2"/>
                </div>
                <div>
                    <Square id="3"/>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div>
                    <Square id="4"/>
                </div>
                <div>
                    <Square id="5"/>
                </div>
                <div>
                    <Square id="6"/>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div>
                    <Square id="7"/>
                </div>
                <div>
                    <Square id="8"/>
                </div>
                <div>
                    <Square id="9"/>
                </div>
            </div>
        </div>
    )
}

export default GameBoard