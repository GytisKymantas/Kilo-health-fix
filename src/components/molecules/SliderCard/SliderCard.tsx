import React from "react";
import YellowStar from "../../../assets/yellowstar.svg";
import { YellowStarData } from "./YellowStarData";
import "./slider-card.scss";

const stars = YellowStarData;

interface ISliderCard {
  name: string;
  address: string;
  image: string;
  text: string;
  index?: number;
}

const SliderCard: React.FC<ISliderCard> = ({
  name,
  address,
  image,
  text,
  index,
}) => {
  return (
    <div className="slider__card slider__card--hidden">
      <span className="slider__card--title">{name}</span>
      <address className="slider__card--address">{address}</address>
      <div className="stars">
        {stars.map((star) => {
          return <img key={star} src={YellowStar} alt="yellowstar" />;
        })}
      </div>
      <img
        src={image}
        alt={
          index === 0
            ? "ladyinblue"
            : index === 1
            ? "ladyinbrightred"
            : index === 2
            ? "ladyinpink"
            : "image"
        }
      />
      {index === 0 ? (
        <p className="slider__card--paragraph">{text}</p>
      ) : index === 1 ? (
        <p className="slider__card--paragraph">
          {text.slice(0, 57)}
          <b>. Positive Yoga</b>
          {text.slice(57)}
        </p>
      ) : index === 2 ? (
        <p className="slider__card--paragraph">
          {text.slice(0, 126)}
          <b> Positive Yoga</b>
          {text.slice(126)}
        </p>
      ) : null}
    </div>
  );
};

export default SliderCard;

// {index ===0 ? <p className="slider__card--paragraph">{text.split(10,20)}
// </p>: index === 1? <p className="slider__card--paragraph">I will be straightforward - I hate sports and working out.
//  <b> Postive yoga</b> put my phisical activity to the next level.
//  I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place.
//  I could barely hold a plank at the beginning. Now I'm doing various yoga poses that looked impossible at first.
// My body shape improved a  lot and I am very motviated by both: results and the feeling of progress.
// </p> : index === 2? <p className="slider__card--paragraph"> I have many friends who practice yoga and I decided to try it myself.
//  It is the best decision I have made in a long time.
//   With <b>Positive Yoga</b> program I started to lose weight, which was demotivating me for a long time.
//    Also, I've learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction.
//     I am very proud of myself. Feeling better is my biggest motivation.
// </p>:null}
