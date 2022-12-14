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
      <header>
        <nav className="top-nav">
          <div className="logo">
            <div className="svgport1"></div>
            <div className="logo-name">
              <h1>Groceyish</h1>
              <h3>GROCERY</h3>
            </div>
          </div>

          <div className="search-container">
            <div className="search-bar">
              <h4>All Categories</h4>
              <div className="divider"></div>
              <input className="search" placeholder="Search for items..." />
              <img src={ChevronDown} />
            </div>
            <img src={Mag} />
          </div>

          <div className="frame91">
            <div className="btn1">
              <img src={Heart} />
              <h4>Wishlist</h4>
            </div>
            <div className="btn2">
              <img src={Trolley} />
              <div className="cart">
                <h4 className="cart-name">My cart</h4>
                <h4 className="price">£69</h4>
              </div>
              <img src={ChevronDown} />
            </div>
          </div>

          <div className="profile">
            <img src={Face} className="face" />
            <a className="name" href="#">
              Ilyas B
            </a>
            <img src={ChevronDown} />
          </div>
        </nav>
        <nav className="bot-nav">
          <div className="browse">
            <img src={Grid} />
            <h4>Browse All Categories</h4>
          </div>

          <div className="btns">
            <div className="btn3">
              <img src={Home} />
              <h4>Home</h4>
            </div>
            <div className="btn4">
              <img src={Flame} />
              <h4>Hot Deals</h4>
            </div>
            <div className="btn5">
              <img src={Percent} />
              <h4>Promotions</h4>
            </div>
            <div className="btn6">
              <img src={Megaphone} />
              <h4>New Products</h4>
            </div>
          </div>

          <div className="emergency">
            <img src={Phone} />
            <h3>1233-7777</h3>
            <h4>24/7 support center</h4>
          </div>
        </nav>
      </header>
      <section className="section1">
        <div className="back">
          <div className="hero-left">
            <h1>Don't miss our daily amazing deals.</h1>
            <h5>Save up to 60% off on your first order</h5>

            <div className="subscribe-container">
              <div className="subscribe-bar">
                <img src={Send} />
                <input
                  className="search"
                  placeholder="Enter you email address"
                />
              </div>

              <h3>Subscribe</h3>
            </div>
          </div>

          <div className="hero-right">
            <img src={Hero} />
          </div>
        </div>
      </section>
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
      <section className="carousel-featured">
        <div className="carousel-head">
          <div className="head-left">
            <h2>Featured Products</h2>
          </div>
          <div className="head-right">
            <h4>All</h4>
            <h3>Vegetables</h3>
            <h4>Fruits</h4>
            <h4>Coffee & Teas</h4>
            <h4>Meat</h4>
          </div>
        </div>

        <div className="carousel-body">
          <button className="arrow-left slide-left" id="slide-arrow-prev2">
            <img src={Arrow} />
            <img src="../assets/arrow.svg" alt="" />
          </button>
          <div className="card-wrapper">
            <div className="cards fop-slider" data-current-slide="0">
              <div className="product-card">
                <img src={Radish} />
                <div className="product-card__content">
                  <p>Vegetables</p>
                  <h4 className="cardItem">Radish 500g</h4>
                  <div className="rating">
                    <div className="rating-stars">
                      <input type="radio" name="star" id="1" />
                      <label for="1"></label>
                      <input type="radio" name="star" id="2" />
                      <label for="2"></label>
                      <input type="radio" name="star" id="3" />
                      <label for="3"></label>
                      <input type="radio" name="star" id="4" />
                      <label for="4"></label>
                      <input type="radio" name="star" id="5" />
                      <label for="5"></label>
                    </div>
                  </div>
                  <p>By Mr.food</p>
                  <div className="product-card__footer">
                    <div className="price">
                      <p>£2</p>
                      <span>£3.99</span>
                    </div>
                    <button>
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="arrow-right slide-right" id="slide-arrow-next2">
            <img src={Arrow} />
          </button>
        </div>
      </section>
      <footer></footer>
    </>
  );
};
