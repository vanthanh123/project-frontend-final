import React from "react";
import Land from "../Land/Land";
import "./Board.css";
import { useSelector, useDispatch } from "react-redux"; //import để sử dụng 2 hook useSelector và useDispatch để sử dụng trong redux
import {
    grow,
    seedLevel2,
    seedLevel3,
    actionCountCrop,
    removeSeed,
    droopy,
} from "../../action/LandsAction"; // import các action của land
import { buySeed, saleSeed } from "../../action/ScoreAction"; // import các action của score
import { useEffect } from "react";

const Board = () => {
    const lands = useSelector((state) => state.Lands.lands); // lấy giá trị của mảng land trong store
    const seed = useSelector((state) => state.Seeds.seed); // lấy giá trị của hạt giống trong store
    const priceSeed = useSelector((state) => state.Seeds.seed.price); // lấy giá trị điểm số bán hạt giống trong store
    const yourScore = useSelector((state) => state.Score.score); // lấy giá trị điểm hiện tại của game trong store
    const timeLevelUp = useSelector((state) => state.Seeds.seed.timeLevelUp); // lấy thời gian trưởng thành của 1 hạt giống trong store
    const dispatch = useDispatch(); // dùng để khởi tạo dispatch để thực thi action
    var timeOutDroopy; // tạo biên toàn cục để clear settimeout khi cây được thu hoạch trước khi nó héo

    const cropSound = new Audio();
    cropSound.src = 'sound/gold_add.mp3';
    cropSound.volume = 0.6;

    const dropSound = new Audio();
    dropSound.src = 'sound/drop.mp3';
    dropSound.volume = 0.6;

    useEffect(() => {
        const checkLands = lands.every((land) => {
            return land.isGrow === false;
        })
        if(checkLands === true && yourScore < 200){
            alert("bạn đã thua");
            window.location.reload();
        }
    }, [lands,yourScore])

    //hàm sử lý sự kiện click vào ô đất
    const handleClickLand = (e, i) => {
        e.preventDefault(); // ngăn mặc định của onclick
        if (seed.name === "SEED") {
            alert("bạn chưa chọn hạt giống");
            return;
        } //dùng để check hạt giống được chọn hay chưa

        if (lands[i].isGrow === true) return; // dùng để check hạt giống đc trồng hay chưa
        if (yourScore < priceSeed) {
            alert("bạn không đủ tiền đề mua");
            return;
        } else {
            const actionScore = buySeed(priceSeed); // gọi tới action mua hạt giống
            dispatch(actionScore); // thực thi action mua hạt giống
        } //dùng để check đủ tiền để mua hạt giống không và thực thi action mua hạt giống
        const seedGrow = { ...seed, isGrow: true }; // khởi tạo hạt giống bằng hạt giống hiện tại và set lại thuộc tính isGrow là true
        const action = grow(seedGrow, i); // gọi tới action trồng
        dispatch(action); // thực thi action trồng
        levelUp2(i, timeLevelUp); // gọi hàm cây phát triển lên cấp 2
        levelUp3(i, timeLevelUp * 2, lands[i].imageStep3); // gọi hàm lên cây phát triển lên câp 3
    };


    //hàm sử lý sự kiện onclick vào hình ảnh
    const handleClickImage = (e, i) => {
        const level = lands[i].level;
        const countCrop = lands[i].countCrop;
        const imageStep3 = lands[i].imageStep3;
        const imageCurrent = lands[i].image;
        // clearTimeout(timeOutDroopy); // clear cây khi cây được thu hoạch trước khi héo, nhưng bị lỗi không clear đươc @@

        //kiểm tra cây đã héo chưa, nếu héo thì gọi tới action bán
        if (imageCurrent === "/images/droopy.png") {
            const actionRemoveSeed = removeSeed(i);
            dispatch(actionRemoveSeed);
            dropSound.play();
            e.stopPropagation(); // chặn hành động của sự kiện cha
            return;
        }
        //kiểm tra cây có lên cấp 3 chưa và thu hoạch
        if (level < 3) {
            return;
        } else {
            const actionSaleSeed = saleSeed(lands[i].price); // gọi tới action bán cây
            dispatch(actionSaleSeed);
            cropSound.play();
            // kiểm tra cây được bán đủ 3 lần chưa nếu đủ thì xóa cây
            if (countCrop < 2) {
                console.log(lands[i].isDroopy);
                const handleActionCountCrop = actionCountCrop(i);
                dispatch(handleActionCountCrop);
                levelUp2(i, 0,true);
                levelUp3(i, timeLevelUp, imageStep3);
            } else {
                const actionRemoveSeed = removeSeed(i);
                dispatch(actionRemoveSeed);
                e.stopPropagation(); // chặn hành động của sự kiện cha
            }
        }
    };

    //hàm sử lý cây lên cấp 2
    const levelUp2 = (i, timeLevelUp,isDroopy) => {
        setTimeout(() => {
            const actionLevelupSeed2 = seedLevel2(i); // gọi tới action cây cấp 2
            dispatch(actionLevelupSeed2); // thực thi action cây cấp 2
            if(isDroopy === true){
                clearTimeout(timeOutDroopy);
            }
        }, timeLevelUp);
    };

    //hàm sử lý cây lên cấp 3
    const levelUp3 = (i, timeLevelUp, image) => {
        setTimeout(() => {
            const actionLevelupSeed3 = seedLevel3(i, image); //gọi tới action cây cấp 3
            dispatch(actionLevelupSeed3); // thực thi action cây cấp 3
            //đặt thêm 1 khoảng thời gian cây sẽ héo
        }, timeLevelUp);
        timeOutDroopy = setTimeout(() => {
            const actionDroopy = droopy(i); //gọi tới action cây héo
            dispatch(actionDroopy); // thực thi action cây héo
        },timeLevelUp * 1.5);
       
    };

    //dùng phương thức map để render ra các component land
    return (
        <>
            <div className="board">
                {lands.map((land, i) => {
                    return (
                        <div key={i}>
                            <Land
                                value={land}
                                i={i}
                                onClickLand={handleClickLand}
                                onClickImage={handleClickImage}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Board;
