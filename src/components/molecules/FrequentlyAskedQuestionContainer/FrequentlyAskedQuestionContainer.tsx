import React from "react";
import "./frequently-asked-question-container.scss";
import FrequentlyAskedQuestion from "../../atoms/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import { FrequentlyAskedQuestionData } from "./FrequentyAskedQuestionData";

const FrequentlyAskedQuestionContainer = () => {
  const questions = FrequentlyAskedQuestionData;

  return (
    <div className="FAQ">
      <h2 className="FAQ__header">Frequently Asked Questions</h2>
      {questions.map((question, idx) => {
        return (
          <FrequentlyAskedQuestion
            key={idx}
            question={question.question}
            answer={question.answer}
          />
        );
      })}
    </div>
  );
};

export default FrequentlyAskedQuestionContainer;
