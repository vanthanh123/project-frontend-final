import React from "react";
import "./land.css";
const Land = ({value,onClickLand,onClickImage,i}) => {

    return(
        <>
            <div className="land" onClick={(e) => onClickLand(e,i)}>
                 {value.isGrow && <img  onClick={(e) => onClickImage(e,i)} className="img img_check" src={value.image} alt={value.name}/>}
            </div>
        </>
    );
};

export default Land;
