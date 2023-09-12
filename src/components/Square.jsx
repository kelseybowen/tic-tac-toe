import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const Square = (props) => {

    const { turn, setTurn, p1Color, p2Color, p1GameState, setP1GameState, p2GameState, setP2GameState } = useContext(AppContext);
    const [bgColor, setBgColor] = useState("");

    const selectSquare = () => {
        if (bgColor === "") {
            if (turn === 1) {
                setBgColor(p1Color);
                // setP1GameState({
                //     ...p1GameState,
                //     props.id: true
                // });
                setTurn(2);
            } else if (turn === 2) {
                setBgColor(p2Color);
                setP2GameState();
                setTurn(1);
            }
        }
    }

    return (
        <button id={props.id} className='btn btn-secondary board-square d-flex justify-content-center align-items-center text-center' style={{ backgroundColor: bgColor }} onClick={() => selectSquare()}></button>
    )
}

export default Square