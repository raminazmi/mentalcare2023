import React from "react";
import imageuiz from "../../../../assets/Mask Group 2.jpg";

const QuizShow = () => {
  return (
    <div className="bg-[#F4F7FA] lg:px-[180px]  py-24 space-y-3 text-center ">
      <h1 className="text-[32px] pb-5 ">
        <strong className="text-[#1F1B4A]">
          ساعدنا في مطابقتك مع المعالج المناسب
        </strong>
      </h1>
      <div className="flex justify-center mt-4 flex-col-reverse lg:flex-row bg-white py-10 rounded-xl shadow-sm">
        <div className="bg-[#00325C] rounded-xl text-white w-full lg:w-5/12 h-100 p-8 space-y-6 pt-24">
          <h1 className="text-3xl font-medium">قم بأداء الأختبار النفسي</h1>
          <p className="text-lg">
            يرجى ملء هذا الاستبيان القصير لتقديم بعض المعلومات الأساسية عنك
            والقضايا التي ترغب في التعامل معها في العلاج. . . . سيساعدنا ذلك في
            التوفيق بينك و بين المعالج الأنسب لك. ستمنح إجاباتك هذا المعالج نقطة
            انطلاق جيدة للتعرف عليك.
          </p>
          {/* <button>قم </button> */}
          <button className=" h-12 bg-white cursor-pointer rounded-[6px] py-3 px-6 text-[19px] font-medium leading-6 hover:bg-[#EAEAEA] text-[#1F1B4A] ">
            أداء الأختبار الأن
          </button>
        </div>

        <div className="lg:w-1/2 w-full">
          <img src={imageuiz} alt="imageuiz" />
        </div>
      </div>
    </div>
  );
};

export default QuizShow;
