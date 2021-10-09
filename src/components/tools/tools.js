import React from "react";
import "./Tools.css";

const tools = (Props) => {
    return (
        <>
            <div className="tools">
                <div className="tool">
                    <header>
                        <div className="title">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </header>

                    <div className="image">
                        <img
                            className="img-fluid"
                            src="./images/van-khoa-nuoc-2-chieu-kitz-removebg-preview-removebg-preview.png"
                            alt=""
                        />
                    </div>

                    <footer className="footer">
                        <div className="price"></div>
                    </footer>
                </div>
                <div className="tool">
                    <header>
                        <div className="s s2 title">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </header>

                    <div className="image">
                        <img
                            className="img-fluid"
                            src="/images/binh-tuoi-cay-nhua.png"
                            alt=""
                        />
                    </div>

                    <footer className="footer">
                        <div className="price"></div>
                    </footer>
                </div>
                <div className="tool">
                    <header>
                        <div className="title">
                            <i className="fa fa-star sao"></i>
                            <i className="fa fa-star sao"></i>
                            <i className="fa fa-star sao"></i>
                        </div>
                    </header>

                    <div className="image">
                        <img
                            className="img-fluid"
                            src={"../images/phan-removebg-preview.png"}
                            alt=""
                        />
                    </div>

                    <footer className="footer">
                        <div className="g3 price">$300</div>
                    </footer>
                </div>
                <div className="tool">
                    <header>
                        <div className="s s4 title">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star sao"></i>
                        </div>
                    </header>

                    <div className="image">
                        <img
                            className="img-fluid"
                            src="images/zdv1623894537-removebg-preview.png"
                            alt=""
                        />
                    </div>

                    <footer className="footer">
                        <div className="price">$900</div>
                    </footer>
                </div>
                <div className="component-name">current upgrades</div>
            </div>
        </>
    );
};

export default tools;
