import React from "react";
import Board from "./components/Board/Board";
import Seeds from "./components/Seeds/Seeds";
import Seed from "./components/Seed/Seed";
import Tool from "./components/Tools/Tools";
import Score from "./components/Score/Score";
import User from "./components/User/User";
import Start from "./components/start/Start";
import "./App.css";

import { useSelector } from "react-redux";

const Game = () => {
    const playGame = useSelector((state) => state.Start.start);
    if (playGame === 0) {
        return <Start />;
    } else {
        return (
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
                </div>
            </div>
        );
    }
};

export default Game;
