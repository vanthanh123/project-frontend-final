import React from "react";
import "./start.css";
import { useSelector , useDispatch} from 'react-redux';
import { startGame } from "../../action/StartAction";
import { useState } from "react";



const Start = (Props) => {
    const [name, setname] = useState('');
    const dispatch = useDispatch();
    const playGame = (e) =>{
        const actionStart = startGame(name);
        dispatch(actionStart);
        
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
