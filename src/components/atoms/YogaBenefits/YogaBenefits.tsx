import React from "react";
import "./yoga-benefits.scss";
import GreenTick from "../../../assets/greentick.svg";

interface IYogaBenefits {
  text: string;
}

const YogaBenefits: React.FC<IYogaBenefits> = ({ text }) => {
  return (
    <div className="yoga__benefits">
      <img src={GreenTick} alt="greentick" />
      <p className="yoga__benefits--text">{text}</p>
    </div>
  );
};

export default YogaBenefits;
