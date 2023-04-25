import React, { useEffect, useState } from "react";
// import card from "../assets/card.png";

const ScoreSummary = ({ answer, setReview, setSubmit }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalQuestion = answer.map((ans) =>
      ans.answer.filter((an) => an.id === ans.selectedAns && an.correct)
    );
    let totalScore = totalQuestion.filter((a) => a.length !== 0);
    setTotal(totalScore);
  }, [answer]);

  return (
    <div className="score-div">
      <h5 className="medal">
        <i class="fas fa-medal"></i>النتيجة
      </h5>
      <h1 className="score">
        {((total && total.length) / answer.length) * 100}%
      </h1>
      <p>
      حصلت {total && total.length} من خلال {answer.length} الاسئلة
      </p>
      <div
        className={"btn submit-btn"}
        onClick={() => {
          setReview(true);
          setSubmit(false);
        }}
      >
        تصفح المعالجين
      </div>
      <div className="share-score">
        <p>شارك نتيجتك</p>
        <div className="icon">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <h4>يمكنك تسجيل مع معالج    </h4>
      <div class="workshop-card">
        <div class="image">
          {/* <img src={card} alt="" /> */}
        </div>

      </div>
    </div>
  );
};

export default ScoreSummary;
