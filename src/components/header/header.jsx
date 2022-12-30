import React from "react";
import ChevronDown from "assets/chevron-down.svg";
import Mag from "assets/search.svg";
import Heart from "assets/heart.svg";
import Trolley from "assets/shopping-cart.svg";
import Face from "assets/face.svg";
import Grid from "assets/grid.svg";
import Home from "assets/home.svg";
import Flame from "assets/flame.svg";
import Percent from "assets/percent.svg";
import Megaphone from "assets/megaphone.svg";
import Phone from "assets/phone.svg";
import "./header.scss";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
