import React, { useState } from "react";
import "./frequently-asked-question.scss";
import ArrowUp from "../../../assets/arrowup.svg";
import ArrowDown from "../../../assets/arrowdown.svg";

interface IFrequentlyAskedQuestion {
  question: string;
  answer: string;
}

const FrequentlyAskedQuestion: React.FC<IFrequentlyAskedQuestion> = ({
  question,
  answer,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="frequently-asked-question__container" onClick={() => setClicked(!clicked)}>
      <div className="question">
        <h4>{question}</h4>
        {clicked ? (
          <img
            onClick={() => setClicked(!clicked)}
            src={ArrowUp}
            alt="arrowup"
          />
        ) : (
          <img
            onClick={() => setClicked(!clicked)}
            src={ArrowDown}
            alt="arrowup"
          />
        )}
      </div>
      {!clicked &&<p>{answer}</p> }
    </div>
  );
};

export default FrequentlyAskedQuestion;
