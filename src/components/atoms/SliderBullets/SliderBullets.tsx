import React from "react";
import "./slider-bullets.scss";
import SliderBulletBlank from "../../../assets/blankbullet.svg";
import SliderBulletFull from "../../../assets/bullet.svg";
import { BulletArrayData } from "./BulletArrayData";

const bullets = BulletArrayData;

interface ISliderBullets {
  index: number;
}

const SliderBullets: React.FC<ISliderBullets> = ({ index }) => {
  return (
    <div className="bullet__container">
      {bullets.map((bullet, idx) => (
        <img
          key={bullet}
          src={index === idx ? SliderBulletFull : SliderBulletBlank}
          alt={index === idx ? "selected point" : "bullet point"}
        />
      ))}
    </div>
  );
};

export default SliderBullets;
