import React from "react";
import PriceTag from "../../../assets/pricetag.svg";
import "./discount-header.scss";

const DiscountHeader = () => {
  return (
    <div className="discount__container header">
      <div className="image__wrapper">
        <img
          className="discount__container--image"
          src={PriceTag}
          alt="pricetag"
        />
        <p className="discount">
          <strong>50%</strong> discount only valid for <strong>00:24:00</strong>{" "}
        </p>
      </div>
    </div>
  );
};
export default DiscountHeader;
