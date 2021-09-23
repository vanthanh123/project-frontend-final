import { render } from "@testing-library/react";
import { Dropdown } from "antd";
import React from "react";
import "./menu.css";



const menu = () => {
   
    return (
        <>
            <div class="dropup">
                <button  class="dropbtn">Menu</button>
                <div class="dropup-content">
                    <a href="#">Continue</a>
                    <a href="">Exit</a>
                </div>
            </div>
        </>
    )
    
}

export default menu;