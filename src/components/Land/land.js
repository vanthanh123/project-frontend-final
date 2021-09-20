import React from "react";
import "./land.css";
import { useSelector, useDispatch } from "react-redux";
import { seedStep2, seedStep3 } from "../../action/LandsAction";
import { score } from "../../action/ScoreAction";

const Land = () => {
    return(
        <>
            <div className="land">
                <img className="img" src="" alt="123" />
            </div>
        </>
    );
};

export default Land;
