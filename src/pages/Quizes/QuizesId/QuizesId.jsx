// import React from 'react'
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { quizzes } from "../../../data/data";

// const quizenewId = () => {
//   const { id } = useParams();
//   const [quizData, setQuizData] = useState(null);

//   useEffect(() => {
//     // Find the quiz with the matching id in the quizzes array
//     const quiz = quizzes.find(q => q.id === Number(id));
//     setQuizData(quiz);
//   }, [id]);

//   if (!quizData) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="lg:bg-[#F4F7FA] lg:px-[180px]  py-24 space-y-3 text-center ">
//     <h1>{quizData.name}</h1>
//     <p>Duration: {quizData.duration}</p>
//     <ul>
//       {quizData.questions.map(question => (
//         <li key={question.id}>
//           <h3>{question.text}</h3>
//           <ul>
//             {question.options.map(option => (
//               <li key={option.id}>{option.text}</li>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </ul>
//   </div>
//   )
// }

// export default quizenewId


import React, { useState } from "react";
// import bg from "../assets/bg.jpg";

import Questions from "./Questions";
import ScoreSummary from "./ScoreSummary";

// import {res} from "../../../data/data";
import { useParams } from 'react-router-dom';
  // const location = useLocation();
  // var namepath =location.pathname.split('/');
  // var quizenew= [],res = []
  // if(Number(id) ===1){
    
  //   res=quizenew.concat(quizes)
  //   console.log(quizes);
  // } 
  //  if(Number(id) ===2){
  //   res=quizenew.concat(quizes2);
  //   console.log(quizes2);
  // }
  // console.log(quizenew);
const QuizesId = () => {
  const res = 
  {
      1:{
          titlequiz:"مقياس الضغط",
          questions:[
              {
                  id: 0,
          
              question:
                "وجدت صعوبة في تهدئة نفسي  ",
              answer: [
                {
                  id: 1,
                  ans: "لا ينطبق عليّ بتاتاً",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "ينطبق عليّ بعض الشيء أو قليلاً من الأوقات",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "ينطبق عليّ بدرجة ملحوظة أو بعض الأوقات",
                  correct: true,
                },
              ],
            },
            {
              id: 1,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 3,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 4,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 5,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 6,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 7,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 8,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 9,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            {
              id: 10,
              question:
                "With this you can make a selection of any rectangular size and shape",
              answer: [
                {
                  id: 1,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 2,
                  ans: "Reactangular marquee tool",
                  correct: false,
                },
                {
                  id: 3,
                  ans: "Reactangular marquee tool",
                  correct: true,
                },
              ],
            },
            
          ],
        },
    2:{
      titlequiz:"مقياس القلق والموت",
      questions:[
    
          {
              id: 0,
      
          question:
            "وجدت صعوبة في تهدئة نفسي  ",
          answer: [
            {
              id: 1,
              ans: "لا ينطبق عليّ بتاتاً",
              correct: false,
            },
            {
              id: 2,
              ans: "ينطبق عليّ بعض الشيء أو قليلاً من الأوقات",
              correct: false,
            },
            {
              id: 3,
              ans: "ينطبق عليّ بدرجة ملحوظة أو بعض الأوقات",
              correct: true,
            },
          ],
        },
        {
          id: 1,
          question:
            "With this you can make a selection of any rectangular size and shape",
          answer: [
            {
              id: 1,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 2,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 3,
              ans: "Reactangular marquee tool",
              correct: true,
            },
          ],
        },
        {
          id: 2,
          question:
            "With this you can make a selection of any rectangular size and shape",
          answer: [
            {
              id: 1,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 2,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 3,
              ans: "Reactangular marquee tool",
              correct: true,
            },
          ],
        },
      
      ],
    },
    3:{
      titlequiz:"مقياس  الاكتئاب",
      questions:[
    
          {
              id: 0,
      
          question:
            "وجدت صعوبة في تهدئة نفسي  ",
          answer: [
            {
              id: 1,
              ans: "لا ينطبق عليّ بتاتاً",
              correct: false,
            },
            {
              id: 2,
              ans: "ينطبق عليّ بعض الشيء أو قليلاً من الأوقات",
              correct: false,
            },
            {
              id: 3,
              ans: "ينطبق عليّ بدرجة ملحوظة أو بعض الأوقات",
              correct: true,
            },
          ],
        },
        {
          id: 1,
          question:
            "With this you can make a selection of any rectangular size and shape",
          answer: [
            {
              id: 1,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 2,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 3,
              ans: "Reactangular marquee tool",
              correct: true,
            },
          ],
        },
        {
          id: 2,
          question:
            "With this you can make a selection of any rectangular size and shape",
          answer: [
            {
              id: 1,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 2,
              ans: "Reactangular marquee tool",
              correct: false,
            },
            {
              id: 3,
              ans: "Reactangular marquee tool",
              correct: true,
            },
          ],
        },
      
      ],
    }
    
  }
  const { id } = useParams();
console.log("The id"+id);

var currentQuiz = res[Number(id)] ;
var currentQuestion2 =currentQuiz.questions[0];
// console.log("first"+first[id]);
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  const [selectOption, setSelectOption] = useState(null);
  const [clickOption, setClickOption] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [review, setReview] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(currentQuestion2);
  // console.log(questions[1].id);
  const handleSubmit = () => {
    setAnsweredQuestion([
      ...answeredQuestion,
      { ...currentQuestion, selectedAns: selectOption },
    ]);
    setSubmit(true);
  };
  // console.log("currentQuestion"+currentQuestion);

  const handleNext = () => {
    if (currentQuiz.questions.length > currentQuestion.id + 1) {
      setAnsweredQuestion([
        ...answeredQuestion,
        { ...currentQuestion, selectedAns: selectOption },
      ]);
      setCurrentQuestion(currentQuiz.questions[currentQuestion.id + 1]);
      setClickOption(null);
    } else {
      setAnsweredQuestion([
        ...answeredQuestion,
        { ...currentQuestion, selectedAns: selectOption },
      ]);
    }
  };

  const handleOptionClick = (id) => {
    setClickOption(id);
    setSelectOption(id);
  };
  return (
    <div className="container2 mt-24">
      <div className="grid justify-ceter items-center flex-row w-full h-full">
        <div className=" w-[1/2]">

          {!submit && !review && (
            <Questions
              currentQuestion={currentQuestion}
              titlequiz={currentQuiz.titlequiz}
              quizes={currentQuiz.questions}
              clickOption={clickOption}
              handleNext={handleNext}
              handleSubmit={handleSubmit}
              handleOptionClick={handleOptionClick}
            />
          )}
          

          {/* Review Question and answer */}
          {/* {review && <ReviewQuestion answeredQuestion={answeredQuestion} />} */}

          {/* Score summary */}
          {submit && (
            <ScoreSummary
              answer={answeredQuestion}
              setReview={setReview}
              setSubmit={setSubmit}
            />
          )}
        </div>
 
        <div className=" h-[80vh] w-[1/2]  bg-cover 
        bg-center bg-no-repeat text-white rounded-lg relative " >
          <div className=" absolute h-2 w-[100%]
         top-[50px] bg-gray-300 "></div>
      <div
        className="progress-line2"
        style={{
          width: `${((currentQuestion.id + 1) / currentQuiz.questions.length) * 100}%`,
        }}
      ></div>
        </div>
      </div>
    </div>
  );
};


export default QuizesId