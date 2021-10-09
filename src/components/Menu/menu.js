
import React from "react";
import "./menu.css";
import {exitGame} from "../../action/StartAction";
import { useDispatch } from "react-redux";

const Menu = () => {
    const dispatch = useDispatch();

    const handleContinue = () => {

    }

    const handleMute = () => {
        
    }

    const handleExit = () => {
        const exitAction = exitGame();
        dispatch(exitAction);
    }
   
    return (
        <>
            <div className="container_menu">
                <ul>
                    <li onClick={handleContinue}>chơi tiếp</li>
                    <li onClick={handleMute}>tắt nhạc</li>
                    <li onClick={handleExit}>Thoát</li>
                </ul>
            </div>
        </>
    )
    
}

export default Menu;