import React from "react";
import Phones from "../../atoms/Phones/Phones";
import "./phones-container.scss";

const PhonesContainer = () => {
  return (
    <div className="phones__container">
      <h3 className="phones__container--header">Start your yoga journey now!</h3>
      <Phones />
      </div>
  );
};

export default PhonesContainer;