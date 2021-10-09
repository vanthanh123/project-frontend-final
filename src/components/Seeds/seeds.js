import React from "react";
import "./Seeds.css";
import { useDispatch } from "react-redux";
import { createSeed } from "../../action/SeedsAction";

const Seeds = (Props) => {
  const dispatch = useDispatch();
    const handleClick = (e) => {
        const name = (e.target.parentElement.previousElementSibling.innerHTML).toLowerCase(); 
        const id = new Date().getTime().toString();
        const price = e.target.parentElement.nextElementSibling.getAttribute('value');
        const image = `/images/${name}_seed.png`;
        const timeLevelUp = e.target.parentElement.previousElementSibling.getAttribute('value');
        const imageStep3 = `images/${name}_step3.png`;
        const isDroopy = false;
        const newSeed = {id:id, name: name, price: price, image: image, timeLevelUp: timeLevelUp, countCrop: 0, level: 1,imageStep3: imageStep3,isDroopy: isDroopy};
        const action = createSeed(newSeed);
        dispatch(action);
        
    };

    return (
        <>
            <div className="seeds">
                <div className="seed">
                    <p className="title" value="2000">MELON</p>

                    <div className="image">
                        <img
                            onClick={handleClick}
                            className="img-fluid"
                            src="/images/melon.png"
                            alt=""
                        />
                    </div>

                    <div className="price" value="200">$200</div>
                </div>
                <div className="seed">
                    <p className="title" value="3000">APPLE</p>

                    <div className="image">
                        <img
                            onClick={handleClick}
                            className="img-fluid"
                            src="/images/apple.png"
                            alt=""
                        />
                    </div>

                    <div className="price" value="300">$300</div>
                </div>
                <div className="seed">
                    <p className="title" value="4000">GRAPE</p>

                    <div className="image">
                        <img
                            onClick={handleClick}
                            className="img-fluid"
                            src="../images/grape.png"
                            alt=""
                        />
                    </div>

                    <div className="price" value="400">$400</div>
                </div>
                <div className="seed">
                    <p className="title" value="5000">PUMPKIN</p>

                    <div className="image">
                    <img
                            onClick={handleClick}
                            className="img-fluid"
                            src="../images/pumpkin.png"
                            alt=""
                        />
                    </div>

                    <div className="price" value="500">500</div>
                </div>
                <div className="component-name">current seeds</div>
            </div>
        </>
    );
};

export default Seeds;
