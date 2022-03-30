import React from "react";
import "./yoga-program.scss";

interface YogaProgram {
  icon:string,
  title:string,
  subtitle:string
}

const YogaProgram:React.FC<YogaProgram> = ({icon,title,subtitle}) => {
  return (
    <div className="yoga-program">
      <div className="yoga-program__icon-wrapper">
        <img className="yoga-icon" src={icon} alt="plan" />
      </div>
      <div className="yoga-program__text-wrapper">
        <h3 className="yoga-program__header">{title}</h3>
        <p className="yoga-program__paragraph">{subtitle}</p>
      </div>
    </div>
  );
};

export default YogaProgram;
