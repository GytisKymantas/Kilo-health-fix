import React from "react";
import SliderCard from "../../molecules/SliderCard/SliderCard";
import "./slider-card-container-hidden.scss";
import { SliderCardData } from "./SliderCardDataHidden";

const slider = SliderCardData;

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
