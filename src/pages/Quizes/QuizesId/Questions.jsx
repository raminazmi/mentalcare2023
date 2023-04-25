import React from "react";

const Questions = ({
  currentQuestion,
  quizes,
  titlequiz,
  handleNext,
  handleSubmit,
  handleOptionClick,
  clickOption,
}) => {
  return (
    <>
    <h1 className="p-4 text-2xl font-bold text-center text-[var(--primary)]">{titlequiz}</h1>
      <h5 className="question-no">
        سؤال {currentQuestion.id + 1} <span>/ 10</span>
      </h5>

      <h3 className="question">{currentQuestion.question}</h3>

    <div className={currentQuestion.imgOptions ? "img-options" : "options"}>
        {currentQuestion.answer.map((a) =>
          (
            <div
              className={
                a.id === clickOption ? "option active-option" : "option"
              }
              onClick={() => {
                handleOptionClick(a.id);
              }}
            >
              <p>{a.ans}</p>
            </div>
          )
        )} 
      </div>

   
      <div
        className={
          currentQuestion.id === quizes.length - 1
            ? "btn next-btn disabled"
            : "btn next-btn "
        }
        onClick={() => handleNext()}
      >
        التالي <i class="fas fa-arrow-right"></i>
      </div>
         <div
        className={
          currentQuestion.id === quizes.length - 1
            ? "btn submit-btn"
            : "btn submit-btn disabled"
        }
        onClick={() => handleSubmit()}
      >
        ارسال
      </div>
    </>
  );
};

export default Questions;
