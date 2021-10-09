import React from 'react';
import './Seed.css';
import { useSelector } from "react-redux";


const Seed = () => {
    const image = useSelector((state) => state.Seeds.seed.image); // lấy hình ảnh trong store seed
    const name = useSelector((state) => state.Seeds.seed.name); // lấy tên trong store seed

    return (
        <div className="seedShow">
            <img className="img-fluid" src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Seed;
