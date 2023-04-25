import React from "react";
import imgtitle from "../../../../assets/svg/title_img.svg";
import TherapistList from "../TherapistList";
const EmptyList = ({ Therapists, TextSearch }) => (
  <div>
    <div className="flex justify-center">
      <div>
        <h1 className="mx-3 mt-2 mb-6 font-semibold ">
          نأسف لا يوجد معالجين بهذا الاسم "{" "}
          <span className="text-[#FD8E35]">{TextSearch}</span> " :(
        </h1>
        <div className="flex justify-center">
          <img className="mb-4" src={imgtitle} alt="imagtilte" />
        </div>
      </div>
    </div>
    <h1 className="mx-3 my-4 font-bold text-[var(--secondary)]">
      إليك بعض المعالجين المقترحين:
    </h1>
    <TherapistList Therapists={Therapists} />
  </div>
);

export default EmptyList;
