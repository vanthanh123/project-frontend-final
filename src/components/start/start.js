import React from "react";
import "./Start.css";
import { useDispatch} from 'react-redux';
import { startGame } from "../../action/StartAction";
import { useState } from "react";



const Start = (Props) => {
    const [name, setname] = useState('');
    const dispatch = useDispatch();

    const mainSound = new Audio();
    mainSound.src = 'sound/background.mp3';
    mainSound.volume = 0.2;

    const playGame = (e) => {
        if(name !== '' && name.length < 20){
            const actionStart = startGame(name);
            dispatch(actionStart);
            mainSound.play();
        }else{
            alert('bạn chưa nhập tên người chơi');
        }
    }
    return (
        
        <div className="start">
            <h1>Chào Mừng !!!</h1>
            <p>Nhập tên người chơi</p>
            <input id="name-person" name="name" type="text" required onChange={(e) => setname(e.target.value)}></input>
            <button id="btn-play" onClick={(e) => playGame(e)}>Chơi</button>
        </div>
                   
    );
};

export default Start;
