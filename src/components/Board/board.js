import React from 'react';
import Land from '../Land/Land';
import './board.css';
import { useSelector , useDispatch} from 'react-redux';
import { grow, seedLevel2, seedLevel3, actionCountCrop, removeSeed } from "../../action/LandsAction";
import { buySeed, saleSeed } from "../../action/ScoreAction";



const Board = () => {
    const lands = useSelector((state) => state.Lands.lands);
    const seed = useSelector((state) => state.Seeds.seed);
    const priceSeed = useSelector((state) => state.Seeds.seed.price);
    const yourScore = useSelector((state) => state.Score.score);
    const timeLevelUp = useSelector((state) => state.Seeds.seed.timeLevelUp);
    const dispatch = useDispatch();
    
    const handleClickLand = (e,i) => {
        if(seed.name === "SEED"){
            alert("bạn chưa chọn hạt giống");
            return;
        }
        if(lands[i].isGrow === true) return;
        if(yourScore < priceSeed){
            alert('bạn không đủ tiền đề mua');
            return;
        }else{
            const actionScore = buySeed(priceSeed);
            dispatch(actionScore);
        }
        const seedGrow = {...seed,isGrow: true};
        const action = grow(seedGrow,i);
        dispatch(action);
        levelUp2(i,timeLevelUp);
        levelUp3(i,timeLevelUp*2,lands[i].imageStep3);

    }

    const handleClickImage = (e,i) => {
        const level = lands[i].level;
        const countCrop = lands[i].countCrop;
        const imageStep3 = lands[i].imageStep3;
        if(level < 3){
            return;
        }else{
                const actionSaleSeed = saleSeed(lands[i].price);
                dispatch(actionSaleSeed);
            if(countCrop < 2){
                const handleActionCountCrop = actionCountCrop(i);
                dispatch(handleActionCountCrop);
                levelUp2(i,0);
                levelUp3(i,timeLevelUp,imageStep3);
            }else{
                const actionRemoveSeed = removeSeed(i);
                dispatch(actionRemoveSeed);
                e.stopPropagation();
            }
        }
    }


    const levelUp2 = (i,timeLevelUp) => {
        setTimeout(() => {
            const actionLevelupSeed2 = seedLevel2(i);
            dispatch(actionLevelupSeed2);
        },timeLevelUp);
    }

    const levelUp3 = (i,timeLevelUp,image) => {
        setTimeout(() => {
            const actionLevelupSeed3 = seedLevel3(i,image);
            dispatch(actionLevelupSeed3);
        },timeLevelUp*2);
    }

    return (
        <div className="board">
           {lands.map((land,i) => {
               return(
                   <div key={i}>
                        <Land value={land} i={i} onClickLand={handleClickLand} onClickImage={handleClickImage}/>
                   </div>
               );
           })}
        </div>
    )
}

export default Board
