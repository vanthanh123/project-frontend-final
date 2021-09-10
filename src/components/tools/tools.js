import React from "react";
import './tools.css';

const tools = (Props) => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="tools">
                <div class="o o1">
                    <header>
                        <div class="s s1">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </header>
                    <content>
                        <div class="a a1"><img class="img-fluid" src="./images/van-khoa-nuoc-2-chieu-kitz-removebg-preview-removebg-preview.png" alt=""/></div>

                    </content>
                    <footer>
                        <div class="g g1"></div>
                    </footer>
                </div>
                <div class="o o2">
                    <header>
                        <div class="s s2"><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </header>
                    <content>
                        <div class="a a2"><img class="img-fluid" src="/images/binh-tuoi-cay-nhua.png" alt=""/></div>
                    </content>
                    <footer>
                        <div class="g g2"></div>
                    </footer>
                </div>
                <div class="o o3">
                    <header>
                        <div class="s s3"><i class="fa fa-star sao"></i>
                            <i class="fa fa-star sao"></i>
                            <i class="fa fa-star sao"></i>
                        </div>
                    </header>
                    <content>
                        <div class="a a3"><img class="img-fluid" src={'../images/phan-removebg-preview.png'} alt=""/></div>
                    </content>
                    <footer>
                        <div class="g3">$300</div>
                    </footer>
                </div>
                <div class="o o4">
                    <header>
                        <div class="s s4"><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star sao"></i>
                        </div>
                    </header>
                    <content>
                        <div class="a a4"><img class="img-fluid" src="images/zdv1623894537-removebg-preview.png" alt=""/></div>
                    </content>
                    <footer>
                        <div class="g4">$900</div>
                    </footer>
                </div>
                <div class="current">current upgrades</div>
            </div>

        </>
    )
}


export default tools;