import React, { Component } from "react";

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
              <img
                className="chev1"
                src=".reactstore/assets/chevron-down.svg"
                alt=""
              />
            </div>
            <img className="mag" src="../reactstore/assets/search.svg" alt="" />
          </div>

          <div className="frame91">
            <div className="btn1">
              <img className="heart" src="../assets/heart.svg" alt="" />
              <h4>Wishlist</h4>
            </div>
            <div className="btn2">
              <img
                className="trolley"
                src="../assets/shopping-cart.svg"
                alt=""
              />
              <div className="cart">
                <h4 className="cart-name">My cart</h4>
                <h4 className="price">£69</h4>
              </div>
              <img src="../assets/chevron-down.svg" alt="" />
            </div>
          </div>

          <div className="profile">
            <img className="face" src="../assets/face.svg" alt="" />
            <a className="name" href="#">
              Ilyas B
            </a>
            <img src="../assets/chevron-down.svg" alt="" />
          </div>
        </nav>

        <svg
          className="vector"
          width="1440"
          height="1"
          viewBox="0 0 1440 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.5 0.5H1440"
            stroke="#ADADAD"
            strokeOpacity="0.17"
            strokeLinecap="round"
          />
        </svg>

        <nav className="bot-nav">
          <div className="browse">
            <img src="../assets/grid.svg" fill="currentColor" alt="" />
            <h4>Browse All Categories</h4>
          </div>

          <div className="btns">
            <div className="btn3">
              <img src="../assets/home.svg" alt="" />
              <h4>Home</h4>
            </div>
            <div className="btn4">
              <img src="../assets/flame.svg" alt="" />
              <h4>Hot Deals</h4>
            </div>
            <div className="btn5">
              <img src="../assets/percent.svg" alt="" />
              <h4>Promotions</h4>
            </div>
            <div className="btn6">
              <img src="../assets/megaphone.svg" alt="" />
              <h4>New Products</h4>
            </div>
          </div>

          <div className="emergency">
            <img src="../assets/phone.svg" alt="" />
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
                <img src="../assets/send.svg" alt="" />
                <input
                  className="search"
                  placeholder="Enter you email address"
                />
              </div>

              <h3>Subscribe</h3>
            </div>
          </div>

          <div className="hero-right">
            <img src="../assets/hero1.svg" alt="" />
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
            <img src="../assets/arrow.svg" alt="" />
          </button>
          <div className="fop-wrapper">
            <div className="fops fop-slider" data-current-slide="0" id="fops">
              <div className="fop-element">
                <img src="../assets/peach.svg" alt="" />
                <h3 className="fop-name">Peach</h3>
                <h5 className="fop-stock">20 items</h5>
              </div>
              <div className="fop-element" id="veg">
                <img src="../assets/veg.svg" alt="" />
                <h3 className="fop-name">Vegetables</h3>
                <h5 className="fop-stock">200 items</h5>
              </div>
              <div className="fop-element" id="strawberry">
                <img src="../assets/strawberry.svg" alt="" />
                <h3 className="fop-name">Strawberry</h3>
                <h5 className="fop-stock">10 items</h5>
              </div>
              <div className="fop-element" id="apple">
                <img src="../assets/apple.svg" alt="" />
                <h3 className="fop-name">Apple</h3>
                <h5 className="fop-stock">40 items</h5>
              </div>
              <div className="fop-element" id="orange">
                <img src="../assets/orange.svg" alt="" />
                <h3 className="fop-name">Orange</h3>
                <h5 className="fop-stock">25 items</h5>
              </div>
              <div className="fop-element" id="potato">
                <img src="../assets/potato.svg" alt="" />
                <h3 className="fop-name">Potato</h3>
                <h5 className="fop-stock">3 items</h5>
              </div>
              <div className="fop-element" id="carrot">
                <img src="../assets/carrot.svg" alt="" />
                <h3 className="fop-name">Carrot</h3>
                <h5 className="fop-stock">9 items</h5>
              </div>
              <div className="fop-element">
                <img src="../assets/peach.svg" alt="" />
                <h3 className="fop-name">Peach</h3>
                <h5 className="fop-stock">20 items</h5>
              </div>
              <div className="fop-element" id="veg">
                <img src="../assets/veg.svg" alt="" />
                <h3 className="fop-name">Vegetables</h3>
                <h5 className="fop-stock">200 items</h5>
              </div>
              <div className="fop-element" id="strawberry">
                <img src="../assets/strawberry.svg" alt="" />
                <h3 className="fop-name">Strawberry</h3>
                <h5 className="fop-stock">10 items</h5>
              </div>
              <div className="fop-element" id="apple">
                <img src="../assets/apple.svg" alt="" />
                <h3 className="fop-name">Apple</h3>
                <h5 className="fop-stock">40 items</h5>
              </div>
              <div className="fop-element" id="orange">
                <img src="../assets/orange.svg" alt="" />
                <h3 className="fop-name">Orange</h3>
                <h5 className="fop-stock">25 items</h5>
              </div>
              <div className="fop-element" id="potato">
                <img src="../assets/potato.svg" alt="" />
                <h3 className="fop-name">Potato</h3>
                <h5 className="fop-stock">3 items</h5>
              </div>
              <div className="fop-element" id="carrot">
                <img src="../assets/carrot.svg" alt="" />
                <h3 className="fop-name">Carrot</h3>
                <h5 className="fop-stock">9 items</h5>
              </div>
            </div>
          </div>
          <button className="arrow-right slide-right" id="slide-arrow-next">
            <img src="../assets/arrow.svg" alt="" />
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
            <img src="../assets/arrow.svg" alt="" />
          </button>
          <div className="card-wrapper">
            <div className="cards fop-slider" data-current-slide="0">
              <div className="product-card">
                <img className="img" src="../assets/radish.svg" alt="" />
                <h5>Vegetables</h5>
                <h4 id="carditem">Radish 500g</h4>
                <div className="rating">
                  <div className="rating-stars">
                    <input type="radio" name="star" id="1" />
                    <input type="radio" name="star" id="2" />
                    <input type="radio" name="star" id="3" />
                    <input type="radio" name="star" id="4" />
                    <input type="radio" name="star" id="5" />
                  </div>

                  <h5>By Mr.food</h5>
                  <div className="fop-footer">
                    <h2>£2</h2>
                    <h3>£3.99</h3>
                    <img src="../assets/addtocart.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="arrow-right slide-right" id="slide-arrow-next2">
            <img src="../assets/arrow.svg" alt="" />
          </button>
        </div>
      </section>
      <footer></footer>
    </>
  );
};
