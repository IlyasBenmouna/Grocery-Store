import React, { Component } from "react";

export const Main = () => {
  return (
    <>
      <header>
        <nav class="top-nav">
          <div class="logo">
            <div class="svgport1"></div>
            <div class="logo-name">
              <h1>Groceyish</h1>
              <h3>GROCERY</h3>
            </div>
          </div>

          <div class="search-container">
            <div class="search-bar">
              <h4>All Categories</h4>
              <div class="divider"></div>
              <input class="search" placeholder="Search for items..." />
              <img class="chev1" src="./assets/chevron-down.svg" alt="" />
            </div>
            <img class="mag" src="./assets/search.svg" alt="" />
          </div>

          <div class="frame91">
            <div class="btn1">
              <img class="heart" src="./assets/heart.svg" alt="" />
              <h4>Wishlist</h4>
            </div>
            <div class="btn2">
              <img class="trolley" src="./assets/shopping-cart.svg" alt="" />
              <div class="cart">
                <h4 class="cart-name">My cart</h4>
                <h4 class="price">£69</h4>
              </div>
              <img src="./assets/chevron-down.svg" alt="" />
            </div>
          </div>

          <div class="profile">
            <img class="face" src="./assets/face.svg" alt="" />
            <a class="name" href="#">
              Ilyas B
            </a>
            <img src="./assets/chevron-down.svg" alt="" />
          </div>
        </nav>

        <svg
          class="vector"
          width="1440"
          height="1"
          viewBox="0 0 1440 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.5 0.5H1440"
            stroke="#ADADAD"
            stroke-opacity="0.17"
            stroke-linecap="round"
          />
        </svg>

        <nav class="bot-nav">
          <div class="browse">
            <img src="./assets/grid.svg" fill="currentColor" alt="" />
            <h4>Browse All Categories</h4>
          </div>

          <div class="btns">
            <div class="btn3">
              <img src="./assets/home.svg" alt=""  />
              <h4>Home</h4>
            </div>
            <div class="btn4">
              <img src="./assets/flame.svg" alt="" />
              <h4>Hot Deals</h4>
            </div>
            <div class="btn5">
              <img src="./assets/percent.svg" alt="" />
              <h4>Promotions</h4>
            </div>
            <div class="btn6">
              <img src="./assets/megaphone.svg" alt="" />
              <h4>New Products</h4>
            </div>
          </div>

          <div class="emergency">
            <img src="./assets/phone.svg" alt="" />
            <h3>1233-7777</h3>
            <h4>24/7 support center</h4>
          </div>
        </nav>
      </header>
      <section class="section1">
        <div class="back">
          <div class="hero-left">
            <h1>Don't miss our daily amazing deals.</h1>
            <h5>Save up to 60% off on your first order</h5>

            <div class="subscribe-container">
              <div class="subscribe-bar">
                <img src="./assets/send.svg" alt="" />
                <input class="search" placeholder="Enter you email address" />
              </div>

              <h3>Subscribe</h3>
            </div>
          </div>

          <div class="hero-right">
            <img src="./assets/hero1.svg" alt="" />
          </div>
        </div>
      </section>
      <section class="carousel">
        <div class="carousel-head">
          <div class="head-left">
            <h2>Explore Categories</h2>
          </div>
          <div class="head-right">
            <h3>All</h3>
            <h4>Vegetables</h4>
            <h4>Fruits</h4>
            <h4>Coffee & Teas</h4>
            <h4>Meat</h4>
          </div>
        </div>
        <div class="carousel-body">
          <button class="arrow-left slide-left" id="slide-arrow-prev">
            <img src="./assets/arrow.svg" alt="" />
          </button>
          <div class="fop-wrapper">
            <div class="fops fop-slider" data-current-slide="0" id="fops">
              <div class="fop-element">
                <img src="./assets/peach.svg" alt="" />
                <h3 class="fop-name">Peach</h3>
                <h5 class="fop-stock">20 items</h5>
              </div>
              <div class="fop-element" id="veg">
                <img src="./assets/veg.svg" alt="" />
                <h3 class="fop-name">Vegetables</h3>
                <h5 class="fop-stock">200 items</h5>
              </div>
              <div class="fop-element" id="strawberry">
                <img src="./assets/strawberry.svg" alt="" />
                <h3 class="fop-name">Strawberry</h3>
                <h5 class="fop-stock">10 items</h5>
              </div>
              <div class="fop-element" id="apple">
                <img src="./assets/apple.svg" alt="" />
                <h3 class="fop-name">Apple</h3>
                <h5 class="fop-stock">40 items</h5>
              </div>
              <div class="fop-element" id="orange">
                <img src="./assets/orange.svg" alt="" />
                <h3 class="fop-name">Orange</h3>
                <h5 class="fop-stock">25 items</h5>
              </div>
              <div class="fop-element" id="potato">
                <img src="./assets/potato.svg" alt="" />
                <h3 class="fop-name">Potato</h3>
                <h5 class="fop-stock">3 items</h5>
              </div>
              <div class="fop-element" id="carrot">
                <img src="./assets/carrot.svg" alt="" />
                <h3 class="fop-name">Carrot</h3>
                <h5 class="fop-stock">9 items</h5>
              </div>
              <div class="fop-element">
                <img src="./assets/peach.svg" alt="" />
                <h3 class="fop-name">Peach</h3>
                <h5 class="fop-stock">20 items</h5>
              </div>
              <div class="fop-element" id="veg">
                <img src="./assets/veg.svg" alt="" />
                <h3 class="fop-name">Vegetables</h3>
                <h5 class="fop-stock">200 items</h5>
              </div>
              <div class="fop-element" id="strawberry">
                <img src="./assets/strawberry.svg" alt="" />
                <h3 class="fop-name">Strawberry</h3>
                <h5 class="fop-stock">10 items</h5>
              </div>
              <div class="fop-element" id="apple">
                <img src="./assets/apple.svg" alt="" />
                <h3 class="fop-name">Apple</h3>
                <h5 class="fop-stock">40 items</h5>
              </div>
              <div class="fop-element" id="orange">
                <img src="./assets/orange.svg" alt="" />
                <h3 class="fop-name">Orange</h3>
                <h5 class="fop-stock">25 items</h5>
              </div>
              <div class="fop-element" id="potato">
                <img src="./assets/potato.svg" alt="" />
                <h3 class="fop-name">Potato</h3>
                <h5 class="fop-stock">3 items</h5>
              </div>
              <div class="fop-element" id="carrot">
                <img src="./assets/carrot.svg" alt="" />
                <h3 class="fop-name">Carrot</h3>
                <h5 class="fop-stock">9 items</h5>
              </div>
            </div>
          </div>
          <button class="arrow-right slide-right" id="slide-arrow-next">
            <img src="./assets/arrow.svg" alt="" />
          </button>
        </div>
      </section>
      <section class="carousel-featured">
            <div class="carousel-head">
                <div class="head-left">
                    <h2>Featured Products</h2>
                </div>
                <div class="head-right">
                        <h4>All</h4>
                        <h3>Vegetables</h3>
                        <h4>Fruits</h4>
                        <h4>Coffee & Teas</h4>
                        <h4>Meat</h4>      
                </div>     
            </div> 
            
            <div class="carousel-body">
                <button class="arrow-left slide-left" id="slide-arrow-prev2"><img src="./assets/arrow.svg" alt="" /></button>
                <div class="card-wrapper">
                    <div class="cards fop-slider" data-current-slide="0">
                                <div class="product-card">
                                    <img class="img" src="./assets/radish.svg" alt="" />
                                    <h5>Vegetables</h5>
                                    <h4 id="carditem">Radish 500g</h4>
                                    <div class="rating">
                                        <div class="rating-stars">
                                            <input type="radio" name="star" id="1" />
                                            <input type="radio" name="star" id="2" />
                                            <input type="radio" name="star" id="3" />
                                            <input type="radio" name="star" id="4" />
                                            <input type="radio" name="star" id="5" />
                                        </div>                                   

                                        <h5>By Mr.food</h5>
                                        <div class="fop-footer">
                                            <h2>£2</h2>
                                            <h3>£3.99</h3>
                                            <img src="./assets/addtocart.svg" alt="" />
                                        </div>
                                    </div>
                                
                                
                                </div>
                    </div>
                <button class="arrow-right slide-right" id="slide-arrow-next2"><img src="/./assets/arrow.svg" alt="" /></button>

            </div>


        </section>
    </>
  );
};
