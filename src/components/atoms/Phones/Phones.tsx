import React from "react";
import "./phones.scss";
import DoublePhone from "../../../assets/doublephone.svg";
import Diagonal from "../../../assets/diagonal.svg";

const Phones = () => {
  return (
    <div className="phones__container">
      <div className="phones__container--1">
        <img src={Diagonal} alt="vector" />
      </div>
      <div className="phones__container--2">
        <img src={DoublePhone} alt="phones" />
      </div>
    </div>
  );
};

export default Phones;
