/* eslint-disable no-unused-vars */
import React, { useRef, useState, Children, useEffect } from "react";
import Arrow from "assets/arrow.svg";
import PropTypes from "prop-types";
import "./carousel.scss";

const Carousel = (props) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState(0);

  let sliderWidth = 0;
  let sliderRenderdWidth = 0;
  let slidesCount = Children.count(props.children);
  console.log("stepchange1234", step);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderWidth = sliderRef.current.scrollWidth;
    sliderRenderdWidth = sliderRef.current.offsetWidth;
  }, [sliderRef.current]);

  useEffect(() => {
    if (!sliderRef.current) return;
    console.log("stepeffect");
    setStep(sliderWidth / slidesCount);
  }, [slidesCount]);

  const nextButtonHandler = (e) => {
    console.log("next", e.target);
    console.log("currentSlide", step, currentSlide);
    if (step * currentSlide + sliderRenderdWidth - step < sliderWidth) {
      const currentStep = step * (currentSlide + 1);
      sliderRef.current.style.transform = `translateX(-${currentStep}px)`;
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevButtonHandler = (e) => {
    console.log("prev", e.target);
    console.log("sadsdasdsa", step, currentSlide);
    if (step * currentSlide > 0) {
      const currentStep = step * (currentSlide - 1);
      sliderRef.current.style.transform = `translateX(-${currentStep}px)`;
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carousel-body">
      <button
        className="arrow-left slide-left"
        id="slide-arrow-prev"
        onClick={prevButtonHandler}
      >
        <img src={Arrow} />
      </button>
      <div className="fop-wrapper">
        <div
          className="fops fop-slider"
          data-current-slide="0"
          id="fops"
          ref={sliderRef}
        >
          {props.children}
        </div>
      </div>
      <button
        className="arrow-right slide-right"
        id="slide-arrow-next"
        onClick={nextButtonHandler}
      >
        <img src={Arrow} />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.any,
};

export default Carousel;
