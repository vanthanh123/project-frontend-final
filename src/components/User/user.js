import React from 'react';
import './User.css'
import { useSelector } from 'react-redux';

const User = () => {
    const name  = useSelector((state) => state.Start.name);
    return (
        <div className="user">
            <img src="/images/user1.png" alt="user" />
            <p>{name}</p>
        </div>
    )
}

export default User;

