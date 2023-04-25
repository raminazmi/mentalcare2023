import React from "react";

import {
  AiFillStarMini,
  GiGemPendantMini,
  BsClockHistoryMini,
  FaMoneyBillMini,
  TbBrainMini,
} from "../../../lib/@reacticons";
import { Link } from "react-router-dom";
import Chip from "../../../components/Chip/Chip";
import Button from "../../../components/Button/Button";
import "../style.css";

const CardTherapist = ({ Therapists }) => {
  return (
    <div className="rounded-lg max-w-[340px] md:min-w-[300px] h-full shadow-lg bg-white border border-[2.5px] overflow-hidden">
      <div
        className={` rounded-t-lg w-[350px] h-[80px] bg-[var(--secondary)] bg-gradient-to-tl from-[#dfefff] to-[#7CFBAB] rotate-[6deg] -translate-y-7 translate-x-3.5  max-lg:translate-x-1 relative ${
          Therapists.Connected ? "online" : "offline"
        }`}
      >
        <Link
          to="/"
          className="flex justify-center absolute -bottom-10 right-10 -rotate-[6deg]"
        >
          <span className="relative">
            <img
              className="w-[75px] h-[75px] object-cover rounded-full  border border-[6px] border-white "
              src={Therapists.image}
              alt="personal"
            />
            <span
              className={`absolute bottom-1 left-1 rounded-full text-white text-sm w-[18px] h-[18px] bg-[#7fee1d] border border-[3px] border-white ${
                Therapists.Connected ? "Connected" : "Disconnected"
              }`}
            ></span>
          </span>
        </Link>
        <div className=" pl-16 pt-20 -rotate-[6deg]">
          <div className="pl-3 flex justify-end items-center gap-1">
            <AiFillStarMini className="text-[#ffcc00]" />
            <h6 className="text-sm"> {Therapists.rate}</h6>
          </div>
          <h6 className="text-xs text-end"> ({Therapists.review}) تقييم</h6>
        </div>
      </div>
      <div className="pb-4 px-4">
        <div className="flex justify-between items-start  mx-2 mt-8 mb-4">
          <div className="">
            <Link to="/">
              <h4 className="font-semibold text-[16px]  text-[#193F63]">
                د. {Therapists.name}
              </h4>
            </Link>
            <p className=" mr-1 text-[13px] mt-1"> {Therapists.specialty}</p>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div>
              <div className="flex items-center gap-2 my-1">
                <TbBrainMini className="text-[var(--primary)] w-[18px] h-[18px]" />
                <h6 className="text-xs"> +{Therapists.sessions} جلسات</h6>
              </div>
              <div className="flex items-center gap-2 my-1">
                <GiGemPendantMini className="text-[#ffcc00] w-[18px] h-[18px]" />
                <h6 className="text-xs"> أفضل المعالجين</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h6 className="text-xs mt-2 font-bold my-1 mb-0">الإهتمامات :</h6>
          <div className="flex justify-start gap-2 pt-2  overflow-x-auto scrollbar-none scroll-smooth">
            {Therapists.interests.map((label, i) => (
              <div key={i}>
                <Chip label={label} />
              </div>
            ))}
          </div>
          <div className="mt-2 px-2">
            <div className="flex justify-start items-center mt-[18px] mb-[10px] gap-2">
              <BsClockHistoryMini className="text-[var(--secondary)]" />
              <h6 className="text-xs">
                أقرب معاد متاح: {Therapists.date} الساعة: {Therapists.time}
              </h6>
            </div>
            <div className="flex justify-start items-center mb-[18px] gap-2">
              <FaMoneyBillMini className="text-[var(--secondary)]" />
              <h6 className="text-xs flex justify-start">
                {Therapists.price[0][0]} دقيقة : {Therapists.price[0][1] + "$"}{" "}
                {Therapists.price[1][0] ? (
                  <h6>
                    {" "}
                    / {Therapists.price[1][0]} دقيقة :{" "}
                    {Therapists.price[1][1] + "$"}
                  </h6>
                ) : null}
              </h6>
            </div>
          </div>
          <Button
            value="حجز الآن"
            contentClassName="Reservation"
            onClicks={null}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTherapist;
