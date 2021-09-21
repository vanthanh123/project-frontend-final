import React from 'react';
import './seed.css';
import { useSelector } from "react-redux";


const Seed = () => {
    const image = useSelector((state) => state.Seeds.seed.image);
    const name = useSelector((state) => state.Seeds.seed.name);

    return (
        <div className="seedShow">
            <img className="img-fluid" src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Seed;
