import React from "react";
import PropTypes from "prop-types";

const FeaturedTile = (props) => (
  <div className="product-card">
    <img src={props.image} />
    <div className="product-card__content">
      <p>{props.name}</p>
      <h4 className="cardItem">
        {props.name} {props.weight}
      </h4>
      <div className="rating">
        <div className="rating-stars">
          <input type="radio" name="star" id="1" />
          <label htmlFor="1"></label>
          <input type="radio" name="star" id="2" />
          <label htmlFor="2"></label>
          <input type="radio" name="star" id="3" />
          <label htmlFor="3"></label>
          <input type="radio" name="star" id="4" />
          <label htmlFor="4"></label>
          <input type="radio" name="star" id="5" />
          <label htmlFor="5"></label>
        </div>
      </div>
      <p>By {props.supplier}</p>
      <div className="product-card__footer">
        <div className="price">
          <p>£{props.currentPrice}</p>
          <span>£{props.oldPrice}</span>
        </div>
        <button>
          <span>Add</span>
        </button>
      </div>
    </div>
  </div>
);

FeaturedTile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  supplier: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
};

export default FeaturedTile;
