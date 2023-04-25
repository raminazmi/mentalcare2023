import React from "react";
import "./styles.css";
import { FaSearchMini } from "../../lib/@reacticons";

function SearchBar({
  searchKey1,
  searchText,
  contentClassName = "",
  contentInputName = "",
}) {
  return (
    <div
      className={`searchBar-wrap w-[240px] cursor-pointer rounded-md bg-white py-3.5 px-2 text-left text-gray-900
     shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2289FF] max-xl:w-[350px] md:min-w-[300px] ${contentClassName}`}
    >
      <input
        className={`max-xl:w-[270px] md:min-w-[220px] ${contentInputName}`}
        type="text"
        placeholder="البحث"
        value={searchKey1}
        onChange={searchText.bind(this)}
      />
      <button>
        <FaSearchMini />
      </button>
    </div>
  );
}

export default SearchBar;
