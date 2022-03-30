import React from "react";
import PositiveYogaLogo from "../../../assets/positiveyoga.svg";
import "./logo-header.scss";

const LogoHeader = () => {
  return (
    <div className="header yogalogo">
      <img src={PositiveYogaLogo} alt="yogalogo" />
    </div>
  );
};

export default LogoHeader;
