import React from "react";
import "./land.css";
import { useSelector, useDispatch } from "react-redux";
import { seedStep2, seedStep3 } from "../../action/LandsAction";
import { score } from "../../action/ScoreAction";

const Land = ({value,onClick,i}) => {
    return(
        <>
            <div className="land" onClick={(e) => onClick(e,i)}>
                 {value.isGrow && <img className="img" src={value.image} alt={value.name}/>}
            </div>
        </>
    );
};

export default Land;    
