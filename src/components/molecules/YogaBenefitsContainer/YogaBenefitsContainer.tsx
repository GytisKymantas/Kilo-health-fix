import React from "react";
import YogaBenefits from "../../atoms/YogaBenefits/YogaBenefits";
import { YogaBenefitsData } from "./YogaBenefitsData";
import "./yoga-benefits-container.scss";

const YogaBenefitsContainer = () => {
  const benefits = YogaBenefitsData;

  console.log(benefits);
  return (
    <div className="yogabenefits__container">
      <h3>Is Positive Yoga right for me?</h3>
      {benefits.map((benefit, idx) => {
        return <YogaBenefits text={benefit.text} key={idx} />;
      })}
    </div>
  );
};

export default YogaBenefitsContainer;
