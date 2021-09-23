import React from "react";
import Board from "./components/Board/board";
import Seeds from "./components/Seeds/seeds";
import Seed from "./components/Seed/seed";
import Tool from "./components/tools/tools";
import Score from "./components/Score/score";
import User from "./components/User/user";
import Menu from "./components/Menu/menu";
import { useState, useEffect, useReducer } from "react";
import Start from "./components/start/start";
import { useDispatch, useSelector } from "react-redux";
// const defaultState = {
//     lands: [Array(25).fill(null)],
//     number: 0,
// };

const Game = () => {
    const handleClick = (e) => {};
    const playGame = useSelector((state) => state.Start.start);

            if(playGame === 0){
                return (
                    <Start />
                )
                
            }
            else{
                return(
                    <div className="gameContainer">
                        <div className="header-top">
                            <Seed />
                            <Seeds />
                            <Tool />
                            <User />
                            <Score />
                            
                        </div>
                    <div className="boardContainer">
                        <Board lands={[123, 123,213,123, 123, 123,213,123, 123, 123,213,123, 123, 123,213,123, 123, 123,213,123, 123, 123,213,213]} onClick={handleClick} />
                    </div>
                    </div>
                )
                
            }  
            
        
};

export default Game;
