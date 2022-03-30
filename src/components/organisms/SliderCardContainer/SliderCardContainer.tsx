import React, { useState, useEffect } from "react";
import SliderCard from "../../molecules/SliderCard/SliderCard";
import "./slider-card-container.scss";
import SliderBullets from "../../atoms/SliderBullets/SliderBullets";
import { SliderCardData } from "./SliderCardData";

const slider = SliderCardData;

const SliderCardContainer = () => {
  const [index, setIndex] = useState(0);
    // sets state with a number in order to render new cards and pass props according to state index number
  useEffect(() => {
    const timeout = setTimeout(
      () => setIndex(index === 2 ? index - 2 : index + 1),
      3000
    );

    return () => clearTimeout(timeout);
  }, [index]);

  
  return (
    <div className="slider">
      <h2 className="slider__header">Hear success stories from our clients</h2>
      {slider && (
        <SliderCard
        key={index}
          index={index}
          address={slider[index].address}
          image={slider[index].image}
          name={slider[index].name}
          text={slider[index].text}
        />
      )}
      <SliderBullets index={index} />
    </div>
  );
};

export default SliderCardContainer;


