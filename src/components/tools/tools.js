import React from "react";
import './tools.css';

const tools = (Props) => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="tools">
                <div class="tool">
                    <header>
                        <div class="title">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </header>
                    <content>
                        <div class="image"><img class="img-fluid" src="./images/van-khoa-nuoc-2-chieu-kitz-removebg-preview-removebg-preview.png" alt=""/></div>

                    </content>
                    <footer class="footer">
                        <div class="price"></div>
                    </footer>
                </div>
                <div class="tool">
                    <header>
                        <div class="s s2 title"><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </header>
                    <content>
                        <div class="image"><img class="img-fluid" src="/images/binh-tuoi-cay-nhua.png" alt=""/></div>
                    </content>
                    <footer class="footer">
                        <div class="price"></div>
                    </footer>
                </div>
                <div class="tool">
                    <header>
                        <div class="title"><i class="fa fa-star sao"></i>
                            <i class="fa fa-star sao"></i>
                            <i class="fa fa-star sao"></i>
                        </div>
                    </header>
                    <content>
                        <div class="image"><img class="img-fluid" src={'../images/phan-removebg-preview.png'} alt=""/></div>
                    </content>
                    <footer class="footer">
                        <div class="g3 price">$300</div>
                    </footer>
                </div>
                <div class="tool">
                    <header>
                        <div class="s s4 title"><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star sao"></i>
                        </div>
                    </header>
                    <content>
                        <div class="image"><img class="img-fluid" src="images/zdv1623894537-removebg-preview.png" alt=""/></div>
                    </content>
                    <footer class="footer">
                        <div class="price">$900</div>
                    </footer>
                </div>
                <div class="component-name">current upgrades</div>
            </div>

        </>
    )
}


export default tools;