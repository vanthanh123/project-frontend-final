import React from 'react';
import Land from '../Land/Land';
import './board.css';
import { useSelector , useDispatch} from 'react-redux';
import { grow, seedLevel2, seedLevel3 } from "../../action/LandsAction";
import { score } from "../../action/ScoreAction";



const Board = () => {
    const lands = useSelector((state) => state.Lands.lands);
    const seed = useSelector((state) => state.Seeds.seed);
    const priceSeed = useSelector((state) => state.Seeds.seed.price);
    const yourScore = useSelector((state) => state.Score.score);
    const timeLevelUp = useSelector((state) => state.Seeds.seed.timeLevelUp);
    const dispatch = useDispatch();
    
    const handleClick = (e,i) => {
        if(lands[i].isGrow === true) return;
        if(yourScore < priceSeed){
            alert('bạn không đủ tiền đề mua');
            return;
        }else{
            const actionScore = score(priceSeed);
            dispatch(actionScore);
        }
        const seedGrow = {...seed,isGrow: true};
        const action = grow(seedGrow,i);
        dispatch(action);
        
        setTimeout(() => {
            handleLevel2(i);
        },timeLevelUp);

        setTimeout(() => {
            handleLevel3(i);
        },timeLevelUp * 2);
        
    }

    const handleLevel2 = (i) => {
        const actionLevelupSeed2 = seedLevel2(i);
        dispatch(actionLevelupSeed2);
    }

    const handleLevel3 = (i) => {
        const actionLevelupSeed3 = seedLevel3(i);
        dispatch(actionLevelupSeed3);
    }


    return (
        <div className="board">
           {lands.map((land,i) => {
               return(
                   <div key={i}>
                        <Land value={land} i={i} onClick={handleClick}/>
                   </div>
               );
           })}
        </div>
    )
}

export default Board
