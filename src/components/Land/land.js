import React from "react";
import "./land.css";
const Land = ({value,onClickLand,onClickImage,i}) => {
    return(
        <>
            <div className="land" onClick={(e) => onClickLand(e,i)}>
                 {value.isGrow && <button className="img_check" onClick={(e) => onClickImage(e,i)}><img className="img" src={value.image} alt={value.name}/></button>}
            </div>
        </>
    );
};

export default Land;
