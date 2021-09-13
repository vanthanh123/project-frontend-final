import React from "react";
import "./seed.css";

const seeds = (Props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      </link>
      
      <div class="seeds">
        <div class="seed">
          <header>
            <p class="title">MELON</p>
          </header>
          <content>
            <div class="image">
              <img class="img-fluid" src="/images/melon.png" alt="" />
            </div>
          </content>
          <footer class="footer">
            <div class="price">$200</div>
          </footer>
        </div>
        <div class="seed">
          <header>
            <p class="title">APPLE</p>
          </header>
          <content>
            <div class="image">
              <img class="img-fluid" src="/images/apple.png" alt="" />
            </div>
          </content>
          <footer class="footer">
            <div class="price">$350</div>
          </footer>
        </div>
        <div class="seed">
          <header>
            <p class="title">GRAPE</p>
          </header>
          <content>
            <div class="image">
              <img class="img-fluid" src="../images/grape.png" alt="" />
            </div>
          </content>
          <footer class="footer">
            <div class="price">$500</div>
          </footer>
        </div>
        <div class="seed">
          <header>
          <p class="title"></p>
          </header>
          <content>
            <div class="image"></div>
          </content>
          <footer class="footer">
            <div class="price"> </div>
          </footer>
        </div>
        <div class="component-name">current seeds</div>
      </div>
    </>
  );
};

export default seeds;
