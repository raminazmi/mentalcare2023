import React from "react";
import { AiFillStarMini } from "../../lib/@reacticons";
const stars = ({
  rating,
}) => {

  const fullStars = Array.from({ length: rating }, (_, index) => (
    <AiFillStarMini key={index} className={`text-yellow-500`} />
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <AiFillStarMini key={index} className={`text-gray-500`} />
  ));
  
  return (
        <div className="flex justify-center items-center ">
          <div className="flex justify-start  items-startc gap-1">
            {fullStars}
            {emptyStars}
      </div>
    </div>
  );
};

export default stars;
