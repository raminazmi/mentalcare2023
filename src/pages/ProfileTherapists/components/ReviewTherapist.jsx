import React from "react";

import { AiFillStarMini } from "../../../lib/@reacticons";
const ReviewTherapist = ({
  rating,
  text="" ,
  date="" ,
  name="" ,
  ratingType
}) => {

  const truncatedName = name.slice(0, 3)+ "..." ;

  const fullStars = Array.from({ length: rating }, (_, index) => (
    <AiFillStarMini key={index} className={`text-yellow-500`} />
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <AiFillStarMini key={index} className={`text-gray-500`} />
  ));
  
  return (
    <div className="flex gap-2 flex-col">
  {    ratingType&&<h3 className="text-center">{text}</h3>}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center ">
            {        ratingType&&<h5>{truncatedName }</h5>}
          <div className="flex justify-start  items-start">
            {fullStars}
            {emptyStars}
          </div>
        </div>
       {  ratingType&&<p className="text-xs text-[#AEAFB1]">منذ {date} </p>}
      </div>
    </div>
  );
};

export default ReviewTherapist;
