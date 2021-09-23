import React from 'react';
import './score.css';
import { useSelector } from "react-redux";

const Score = () => {
    const score = useSelector((state) => state.Score.score);

    return (
        <div className="score">
            <h2>SCORE</h2>
            <p>${score}</p>
        </div>
    )
}

export default Score;
