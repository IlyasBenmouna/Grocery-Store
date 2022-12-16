import React from "react";
import PropTypes from "prop-types";

const CategoryTile = (props) => {
  return (
    <div className="fop-element" key={props.name}>
      <img src={props.image} />
      <h3 className="fop-name">{props.name}</h3>
      <h5 className="fop-stock">{props.stock} items</h5>
    </div>
  );
};

CategoryTile.propTypes = {
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryTile;
