import React, { useState } from "react";
import "./frequently-asked-question.scss";
import ArrowUp from "../../../assets/arrowup.svg";
import ArrowDown from "../../../assets/arrowdown.svg";

interface IFrequentlyAskedQuestion {
  question: string;
  answer: string;
  index?: number;
}

const FrequentlyAskedQuestion: React.FC<IFrequentlyAskedQuestion> = ({
  question,
  answer,
  index,
}) => {
  console.log(index);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="frequently-asked-question__container"
      onClick={() => setClicked(!clicked)}
    >
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
      {!clicked && <p>{answer}</p>}
      {index === 2? <span>Your plan will be accessible in Positive Yoga web app with a special link generated after your purchase</span>:null}
    </div>
  );
};

export default FrequentlyAskedQuestion;
