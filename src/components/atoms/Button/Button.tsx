import React from "react";
import "./button.scss";

interface IButton {
  displayButton?: boolean;
}

const Button:React.FC<IButton> = ({ displayButton }) => {
  return (
    <div className="button__container">
      {displayButton ? (
        <button className="button">Get my plan</button>
      ) : (
        <button className="button button--two">Get your plan</button>
      )}
    </div>
  );
};

export default Button;
