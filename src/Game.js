import React from "react";
import Board from "./components/Board/board";
import Seeds from "./components/Seeds/seeds";
import Seed from "./components/Seed/seed";
import Tool from "./components/Tools/tools";
import Score from "./components/Score/score";
import User from "./components/User/user";
import Menu from "./components/Menu/menu";
import Start from "./components/start/start";
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Game = () => {
    const [displayMenu, setDisplayMenu] = useState(false)
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
                        <Board />
                        {displayMenu && <Menu />}
                    </div>
                        <div className="footer">
                            <button className="btn-menu" onClick={() => setDisplayMenu(!displayMenu)}>Menu</button>
                        </div>
                    </div>
                )
                
            }  
};

export default Game;
