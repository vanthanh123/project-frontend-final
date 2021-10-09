import React from "react";
import "./Land.css";

const Land = ({ value, onClickLand, onClickImage, i }) => {
    return (
        <>
            <div className="land" onClick={(e) => onClickLand(e, i)}>
                {value.isGrow && (
                    <img
                        className="img img_check"
                        src={value.image}
                        onClick={(e) => onClickImage(e, i)}
                        alt={value.name}
                    />
                )}
            </div>
        </>
    );
};

export default Land;
