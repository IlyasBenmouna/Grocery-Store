import React, { Component } from "react";
import ChevronDown from "../../assets/chevron-down.svg";
import Mag from "../../assets/search.svg";
import Heart from "../../assets/heart.svg";
import Trolley from "../../assets/shopping-cart.svg";
import Face from "../../assets/face.svg";
import Grid from "../../assets/grid.svg";
import Home from "../../assets/home.svg";
import Flame from "../../assets/flame.svg";
import Percent from "../../assets/percent.svg";
import Megaphone from "../../assets/megaphone.svg";
import Phone from "../../assets/phone.svg";
import Send from "../../assets/send.svg";
import Hero from "../../assets/hero1.svg";
import Peach from "../../assets/peach.svg";
import Vegetables from "../../assets/veg.svg";
import Strawberry from "../../assets/strawberry.svg";
import Apple from "../../assets/apple.svg";
import Orange from "../../assets/orange.svg";
import Potato from "../../assets/potato.svg";
import Carrot from "../../assets/carrot.svg";
import Radish from "../../assets/radish.svg";
import AddToCart from "../../assets/addtocart.svg";
import Arrow from "../../assets/arrow.svg";

export const Main = () => {
  return (
    <>

      <section className="carousel">
        <div className="carousel-head">
          <div className="head-left">
            <h2>Explore Categories</h2>
          </div>
          <div className="head-right">
            <h3>All</h3>
            <h4>Vegetables</h4>
            <h4>Fruits</h4>
            <h4>Coffee & Teas</h4>
            <h4>Meat</h4>
          </div>
        </div>
        <div className="carousel-body">
          <button className="arrow-left slide-left" id="slide-arrow-prev">
            <img src={Arrow} />
          </button>
          <div className="fop-wrapper">
            <div className="fops fop-slider" data-current-slide="0" id="fops">
              <div className="fop-element">
                <img src={Peach} />
                <h3 className="fop-name">Peach</h3>
                <h5 className="fop-stock">20 items</h5>
              </div>
              <div className="fop-element" id="veg">
                <img src={Vegetables} />
                <h3 className="fop-name">Vegetables</h3>
                <h5 className="fop-stock">200 items</h5>
              </div>
              <div className="fop-element" id="strawberry">
                <img src={Strawberry} />
                <h3 className="fop-name">Strawberry</h3>
                <h5 className="fop-stock">10 items</h5>
              </div>
              <div className="fop-element" id="apple">
                <img src={Apple} />
                <h3 className="fop-name">Apple</h3>
                <h5 className="fop-stock">40 items</h5>
              </div>
              <div className="fop-element" id="orange">
                <img src={Orange} />
                <h3 className="fop-name">Orange</h3>
                <h5 className="fop-stock">25 items</h5>
              </div>
              <div className="fop-element" id="potato">
                <img src={Potato} />
                <h3 className="fop-name">Potato</h3>
                <h5 className="fop-stock">3 items</h5>
              </div>
              <div className="fop-element" id="carrot">
                <img src={Carrot} />
                <h3 className="fop-name">Carrot</h3>
                <h5 className="fop-stock">9 items</h5>
              </div>
              <div className="fop-element">
                \
                <img src={Peach} />
                <h3 className="fop-name">Peach</h3>
                <h5 className="fop-stock">20 items</h5>
              </div>
              <div className="fop-element" id="veg">
                <img src={Vegetables} />
                <h3 className="fop-name">Vegetables</h3>
                <h5 className="fop-stock">200 items</h5>
              </div>
              <div className="fop-element" id="strawberry">
                <img src={Strawberry} />
                <h3 className="fop-name">Strawberry</h3>
                <h5 className="fop-stock">10 items</h5>
              </div>
              <div className="fop-element" id="apple">
                <img src={Apple} />
                <h3 className="fop-name">Apple</h3>
                <h5 className="fop-stock">40 items</h5>
              </div>
              <div className="fop-element" id="orange">
                <img src={Orange} />
                <h3 className="fop-name">Orange</h3>
                <h5 className="fop-stock">25 items</h5>
              </div>
              <div className="fop-element" id="potato">
                <img src={Potato} />
                <h3 className="fop-name">Potato</h3>
                <h5 className="fop-stock">3 items</h5>
              </div>
              <div className="fop-element" id="carrot">
                <img src={Carrot} />
                <h3 className="fop-name">Carrot</h3>
                <h5 className="fop-stock">9 items</h5>
              </div>
            </div>
          </div>
          <button className="arrow-right slide-right" id="slide-arrow-next">
            <img src={Arrow} />
          </button>
        </div>
      </section>

      <footer></footer>
    </>
  );
};
