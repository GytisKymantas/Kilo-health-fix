import React from "react";
import YogaProgram from "../../atoms/YogaProgram/YogaProgram";
import { ProgramContentsData } from "./ProgramContentsData";
import "./yoga-program-container.scss";

const YogaProgramContainer = () => {
  const contents = ProgramContentsData;

  return (
    <div className="program">
      <h3 className="program__header">What's in my program?</h3>
      {contents.map((content, idx) => {
        return (
          <YogaProgram
            key={idx}
            icon={content.icon}
            title={content.title}
            subtitle={content.subtitle}
          />
        );
      })}
    </div>
  );
};

export default YogaProgramContainer;
