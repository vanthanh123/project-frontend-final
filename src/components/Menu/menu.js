import { render } from "@testing-library/react";
import { Dropdown } from "antd";
import React from "react";
import "./menu.css";



const menu = () => {
    const mn = () =>{
        alert(123);
    }
    return (
        <>
            <div class="dropup">
                <button  onClick={mn}  class="dropbtn">Menu</button>
                <div class="dropup-content">
                    <a href="#">Continue</a>
                    <a href="">Exit</a>
                </div>
            </div>
        </>
    )
    
}

export default menu;