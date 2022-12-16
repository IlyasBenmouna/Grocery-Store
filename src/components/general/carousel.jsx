import React from "react";
import Arrow from "assets/arrow.svg";
import PropTypes from "prop-types";

const Carousel = (props) => {
  return (
    <div className="carousel-body">
      <button className="arrow-left slide-left" id="slide-arrow-prev">
        <img src={Arrow} />
      </button>
      <div className="fop-wrapper">
        <div className="fops fop-slider" data-current-slide="0" id="fops">
          {props.children}
        </div>
      </div>
      <button className="arrow-right slide-right" id="slide-arrow-next">
        <img src={Arrow} />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.any,
};

export default Carousel;
