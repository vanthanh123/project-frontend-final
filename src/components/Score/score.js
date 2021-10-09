import React from 'react';
import './Score.css';
import { useSelector } from "react-redux";

const Score = () => {
    const score = useSelector((state) => state.Score.score); // lấy điểm số hiện tại trong store

    return (
        <div className="score">
            <h2>SCORE</h2>
            <p>${score}</p>
        </div>
    )
}

export default Score;
