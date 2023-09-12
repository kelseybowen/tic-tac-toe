import React, { useState } from 'react'

const ColorSelector = (props) => {

    const {setP1Color, setP2Color} = props;

    const [taken, setTaken] = useState([]);

    const handleSelected = (color) => {
        setTaken([...[taken], color]);
        console.log(taken);
    }

    return (
        <div>
            <h2>Choose Your Colors</h2>
        <div className=''>
            <div className="p1Select col-2">
                <h4>Player 1</h4>
                <button className="btn red" onClick={() => handleSelected("red")}></button>
                <button className="btn orange"></button>
                <button className="btn yellow"></button>
                <button className="btn green"></button>
                <button className="btn blue"></button>
                <button className="btn purple"></button>
            </div>
            <div className="p2Select col-2">
                <h4>Player 2</h4>
                <button className="btn red"></button>
                <button className="btn orange"></button>
                <button className="btn yellow"></button>
                <button className="btn green"></button>
                <button className="btn blue"></button>
                <button className="btn purple"></button>
            </div>
        </div>
        </div>
    )
}

export default ColorSelector