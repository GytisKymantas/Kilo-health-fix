import React, { useState, useEffect } from "react";
import SliderCard from "../../molecules/SliderCard/SliderCard";
import "./slider-card-container-hidden.scss";
// import SliderBullets from "../../atoms/SliderBullets/SliderBullets";
import { SliderCardData } from "./SliderCardDataHidden";

const slider = SliderCardData;
// console.log(slider);

const SliderCardContainer = () => {
  return (
    <div className="slider slider--hidden">
      <h2 className="slider__header">Hear success stories from our clients</h2>
      <div className="slider__header--hidden-wrapper">
      {slider &&
        slider.map((slide, idx) => {
          return (
            <SliderCard
              address={slide.address}
              name={slide.name}
              image={slide.image}
              text={slide.text}
              index={idx}
            />
          );
        })}
        </div>
    </div>
  );
};

export default SliderCardContainer;

// {slider.map((slide,idx) => {
//   return(
//     <SliderCard key={idx} index={index} address={slide.address} image={slide.image} name={slide.name} text={slide.text} />
//   );
// })}
