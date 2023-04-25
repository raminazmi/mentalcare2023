import React, { useState, useEffect } from "react";
import CardTherapist from "./CardTherapist";
import FilterList from "./FilterList";
import { BsChevronLeftMini, BsChevronRightMini } from "../../../lib/@reacticons";
import ReactPaginate from 'react-paginate';
import EmptyFilter from "./EmptyList/EmptyFilter";

function TherapistList({ Therapists }) {
  const [psychotherapy, setPsychotherapy] = useState(false);
  const [behavioral, setBehavioral] = useState(false);
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [duration30, setDuration30] = useState(false);
  const [duration60, setDuration60] = useState(false);
  const [genderMale, setGenderMale] = useState("");
  const [genderFemale, setGenderFemale] = useState("");
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const itemsPerPage = 4;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const colors = {
    filled: "#FFD700",
    empty: "#E4E5E9"
  };
// Stars Rating
  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const handleMouseEnter = (newHoverRating) => {
    setHoverRating(newHoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const getStarColor = (index) => {
    if (hoverRating >= index) {
      return colors.filled;
    }
    if (rating >= index) {
      return colors.filled;
    }
    return colors.empty;
  };
  // Filters
  const PsychotherapyHandler = (e) => {
    setPsychotherapy(e.target.checked);
  };
  const BehavioralHandler = (e) => {
    setBehavioral(e.target.checked);
  };
  const OnlineHandler = (e) => {
    setOnline(e.target.checked);
  };
  const OfflinealHandler = (e) => {
    setOffline(e.target.checked);
  };
  const MinDateHandler = (e) => {
    setMinDate(e.target.value);
  };
  const MaxDateHandler = (e) => {
    setMaxDate(e.target.value);
  };
  const Duration30Handler = (e) => {
    setDuration30(e.target.checked);
  };
  const Duration60Handler = (e) => {
    setDuration60(e.target.checked);
  };
  const GenderMaleHandler = (e) => {
    setGenderMale(e.target.checked);
  };
  const GenderFemaleHandler = (e) => {
    setGenderFemale(e.target.checked);
  };
  const handleInput = (e) => {
    set_minValue(e.min)
    set_maxValue(e.max)
  };
  const resetFilters = () => {
    setPsychotherapy(false);
    setBehavioral(false);
    setOnline(false);
    setOffline(false);
    setMinDate("");
    setMaxDate("");
    setDuration30(false);
    setDuration60(false);
    setGenderMale("");
    setGenderFemale("");
    set_minValue(0);
    set_maxValue(100);
    setIsChecked(false);
    setRating(0);
  };
  function filterTherapists(Therapists) {
    return Therapists.filter((Therapists) => {
      let pass = true;

      // Filter by category
      if (psychotherapy) {
        pass = pass && Therapists.isPsychotherapy === psychotherapy;
      }
      if (behavioral) {
        pass = pass && Therapists.isPsychotherapy === !behavioral;
      }
      if (behavioral && psychotherapy) {
        pass = Therapists.isPsychotherapy + !Therapists.isPsychotherapy;
      }
      // Filter by Connected
      if (online) {
        pass = pass && Therapists.Connected === online;
      }
      if (offline) {
        pass = pass && Therapists.Connected === !offline;
      }
      if (online && offline) {
        pass = Therapists.Connected + !Therapists.Connected;
      }
      // Filter by date
      if (minDate && maxDate) {
        pass = pass && Therapists.date >= minDate && Therapists.date <= maxDate;
      }
      // Filter by Gender
      if (genderMale) {
        pass = pass && Therapists.gender === "ذكر";
      }
      if (genderFemale) {
        pass = pass && Therapists.gender === "أنثى";
      }
      if (genderMale && genderFemale) {
        pass = Therapists.gender + !Therapists.gender;
      }
      // Filter by duration
      if (duration30) {
        pass = pass && Therapists.price[0][0] === 30 && Therapists.price[1][0] === undefined;
      }
      if (duration60) {
        pass = pass && Therapists.price[0][0] === 60;
      }
      if (duration30 && duration60) {
        pass = Therapists.price + !Therapists.price;
      }
      // Filter by Star Rating
      if (rating) {
        pass = pass && rating >= Therapists.rate;
      }
      // Filter by MinMaxValue
      if (maxValue && minValue) {
        pass = pass && (minValue <= (Therapists.price[0][1] || Therapists.price[1][1])) && ((Therapists.price[0][1] || Therapists.price[1][1]) <= maxValue);
      }
      return pass;
    });
  }
  const filteredCards = filterTherapists(Therapists);
  useEffect(() => {
    let endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredCards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCards.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredCards]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % filteredCards.length;
    setItemOffset(newOffset);
  };
  const EmptyCard = [
    {},
    {},
    {},
    {}
  ];
  return (
    <>
      <div className="flex justify-center gap-10 max-[1024px]:gap-6 h-[100%] max-md:block ">
        <div className="bg-white xl:max-w-[350px] mx-4 rounded-lg shadow-lg  md:min-w-[300px] h-fit">
          <FilterList 
            psychotherapy={psychotherapy}
            PsychotherapyHandler={PsychotherapyHandler}
            behavioral={behavioral}
            BehavioralHandler={BehavioralHandler}
            online={online}
            OnlineHandler={OnlineHandler}
            offline={offline}
            OfflinealHandler={OfflinealHandler}
            minDate={minDate}
            MinDateHandler={MinDateHandler}
            maxDate={maxDate}
            MaxDateHandler={MaxDateHandler}
            duration30={duration30}
            Duration30Handler={Duration30Handler}
            duration60={duration60}
            Duration60Handler={Duration60Handler}
            genderMale={genderMale}
            genderFemale={genderFemale}
            GenderMaleHandler={GenderMaleHandler}
            GenderFemaleHandler={GenderFemaleHandler}
            minValue={minValue}
            maxValue={maxValue}
            handleInput={handleInput}
            resetFilters={resetFilters}
            isChecked={isChecked}
            rating={rating}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            getStarColor={getStarColor}
          />
        </div>
        {!currentItems.length ?
          <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-8 h-fit max-sm:mx-4  max-md:grid max-md:grid-cols-2  max-sm:grid-cols-1">
            {EmptyCard.map((EmptyCard) => (<EmptyFilter EmptyCard={EmptyCard} />))}
          </div> :
          <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-8 h-fit max-sm:mx-4  max-md:grid max-md:grid-cols-2  max-sm:grid max-sm:grid-cols-1">
              {currentItems.map((Therapists) => (
                <CardTherapist key={Therapists.id} Therapists={Therapists} />
              ))}
            </div>
            <ReactPaginate
              breakLabel={"..."}
              nextLabel={<BsChevronLeftMini />}
              onPageChange={handlePageClick}
              marginPagesDisplayed={1}
              pageRangeDisplayed={0}
              pageCount={pageCount}
              previousLabel={<BsChevronRightMini />}
              breakClassName={"boder border-[1px] border-[#D4D3DD] bg-white w-8 h-[34px] flex justify-center items-center text-[var(--secondary)]  shadow-xl"}
              containerClassName={"pagination flex justify-center items-center my-4"}
              pageClassName={"boder border-[1px] border-x-0 border-[#D4D3DD] bg-white w-8 h-[34px] flex justify-center items-center hover:bg-[var(--primary)] text-[var(--secondary)] hover:text-white shadow-xl"}
              previousClassName={"p-2 bg-white rounded-r-xl boder border-[1px] border-[#D4D3DD] shadow-xl"}
              nextClassName={"p-2 bg-white rounded-l-xl boder border-[1px] border-[#D4D3DD] shadow-xl"}
              activeClassName={"!bg-[var(--secondary)] !text-white"}
              disabledClassName={"!bg-[#D4D3DD] !text-[var(--primary)] "}
            />
          </div>}
      </div>
    </>
  );
}
export default TherapistList;
