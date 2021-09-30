import React from "react";
import "./start.css";
import { useSelector , useDispatch} from 'react-redux';
import { startGame } from "../../action/StartAction";
import { useState } from "react";



const Start = (Props) => {
    const [name, setname] = useState('');
    const dispatch = useDispatch();
    let error = '';
    const playGame = (e) =>{
        const actionStart = startGame(name);
        console.log(name);
        if(name.length > 10){
            alert('Tên không được dài quá 10 kí tự');
        }
        else{
          dispatch(actionStart);  
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
