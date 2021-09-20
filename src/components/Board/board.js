import React from 'react';
import Land from '../Land/Land';
import './board.css'

const board = ({lands,seed}) => {
    return (
        <div className="board">
           {lands.map((land,i) => {
               return(
                   <div key={i}>
                    <Land seed={seed}/>
                   </div>
               );
           })}
        </div>
    )
}

export default board
