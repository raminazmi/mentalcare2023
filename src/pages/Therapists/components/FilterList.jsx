import React, { useState } from "react";
import InputLabel from "../../../components/Button/InputLabel";
import MultiRangeSlider from './MultiRangeSlider';
import Button from "../../../components/Button/Button";
import { AiFillStarMini, BsChevronDownMini } from "../../../lib/@reacticons";
import "./StarRating.css";

function FilterList({
  psychotherapy,
  PsychotherapyHandler,
  behavioral,
  BehavioralHandler,
  online,
  OnlineHandler,
  offline,
  OfflinealHandler,
  minDate,
  MinDateHandler,
  maxDate,
  MaxDateHandler,
  duration30,
  Duration30Handler,
  duration60,
  Duration60Handler,
  genderMale,
  genderFemale,
  GenderMaleHandler,
  GenderFemaleHandler,
  handleInput,
  resetFilters,
  rating,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  getStarColor
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-10 max-sm:mb-4">
    <h1 className="text-[22px] flex max-md:hidden items-center justify-between max-sm:w-[100%] h-[58px] p-3 pr-5 max-md:px-0 rounded-t-lg w-full text-lg font-medium text-white bg-[var(--primary)]">
    التصنيف
  </h1>
      <button
        className={`flex md:hidden items-center justify-between w-[100%] h-[58px] p-3 pr-5 rounded-t-lg max-sm:${isOpen ? 'rounded-t-lg' : 'rounded-lg' } w-full text-left text-lg font-medium text-white bg-[var(--primary)] hover:bg-[#1b578f] focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <h1 className="text-[22px]">
            التصنيف
          </h1></span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <BsChevronDownMini className="h-5 w-5  rotate-180" />
          ) : (
            <BsChevronDownMini className="h-5 w-5" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pt-3 pb-6 px-6">
        <h1 className="text-[18px] text-[var(--secondary)]">نوع العلاج</h1>
        <div className="mr-[10px]">
          <InputLabel
            type="checkbox"
            value={psychotherapy}
            checked={psychotherapy}
            onChange={PsychotherapyHandler}
            name="type_of_treatment"
            text="العلاج النفسي"
            id="العلاج النفسي"
          />
          <InputLabel
            type="checkbox"
            value={behavioral}
            checked={behavioral}
            onChange={BehavioralHandler}
            name="type_of_treatment"
            text="العلاج السلوكي"
            id="العلاج السلوكي"
          />
        </div>
        <br />
        <h1 className="text-[18px] text-[var(--secondary)]">التواجد</h1>
        <div className="mr-[10px]">
          <InputLabel
            type="checkbox"
            value={online}
            checked={online}
            onChange={OnlineHandler}
            name="Appointments_available"
            text="متصل الآن"
            id="متصل الآن"
          />
          <InputLabel
            type="checkbox"
            value={offline}
            checked={offline}
            onChange={OfflinealHandler}
            name="Appointments_available"
            text="اليوم"
            id="اليوم"
          />
        </div>
        <br />
        <h1 className="text-[18px] text-[var(--secondary)] ">
          متاح من
        </h1>
        <input
          className="border border-2 border-[#AFAFAF] rounded-md mt-3 px-4 py-2 w-[100%]"
          type="date"
          id="7"
          name="trip-start"
          max="2052-12-31"
          value={minDate}
          onChange={MinDateHandler}
        />
        <h1 className="text-[18px] text-[var(--secondary)] mt-4 ">
          متاح الى
        </h1>
        <input
          className="border border-2 border-[#AFAFAF] rounded-md mt-3 px-4 py-2 w-[100%]"
          type="date"
          id="7"
          name="trip-start"
          max="2052-12-31"
          value={maxDate}
          onChange={MaxDateHandler}
        />
        <br />
        <h1 className="text-[18px] text-[var(--secondary)] mt-4">
          المدة
        </h1>
        <div class="flex justify-start gap-4 items-center mr-[10px]">
          <InputLabel
            type="checkbox"
            value={duration60}
            checked={duration60}
            onChange={Duration60Handler}
            name="time"
            text="60 دقيقة"
            id="60"
          />
          <InputLabel
            type="checkbox"
            value={duration30}
            checked={duration30}
            onChange={Duration30Handler}
            name="time"
            text="30 دقيقة"
            id="30"
          />
        </div>
        <h1 className="text-[18px] text-[var(--secondary)] mt-4">
          الجنس
        </h1>
        <div class="flex justify-start gap-4 items-center mr-[10px]">
          <InputLabel
            type="checkbox"
            name="gender"
            value={genderMale}
            checked={genderMale}
            onChange={GenderMaleHandler}
            text="ذكر"
            id="ذكر"
          />
          <InputLabel
            type="checkbox"
            name="gender"
            value={genderFemale}
            checked={genderFemale}
            onChange={GenderFemaleHandler}
            text="أنثى"
            id="أنثى"
          />
        </div>
        <h1 className="text-[18px] text-[var(--secondary)] mt-4">
          التقييم
        </h1>
        <div className="star-rating mt-4 mb-2">
          {[...Array(5)].map((_, index) => {
            const starRating = index + 1;
            return (
              <>
                <AiFillStarMini
                  key={index}
                  className={`text-2xl mt-1 mb-4 {$FontSizeStars}`}
                  style={{ color: getStarColor(starRating) }}
                  onClick={() => handleClick(starRating)}
                  onMouseEnter={() => handleMouseEnter(starRating)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              </>
            );
          })}
        </div>
        <h1 className="text-[18px] text-[var(--secondary)]">
          تكلفة الجلسة
        </h1>
        <div class="rtl mt-6 mb-16 ">
          <MultiRangeSlider
            className="rtl"
            min={0}
            max={100}
            onChange={handleInput}
          />
        </div>
        <Button type="submit" value="مسح التصنيف" onClicks={resetFilters} contentClassName="ResetFilters" />
      </div>
      )}
    </div>
  );
}

export default FilterList;
