import React from 'react';
import './score.css';
import { useSelector, useDispatch } from "react-redux";

const Score = () => {
    const score = useSelector((state) => state.Lands.score);
    return (
        <div className="score">
            <h2>SCORE</h2>
            <p>$3000</p>
        </div>
    )
}

export default Score;
