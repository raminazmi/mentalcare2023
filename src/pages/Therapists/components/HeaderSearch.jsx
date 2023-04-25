import React from "react";
import SearchBar from '../../../components/SearchBar/SearchBar';
import CategoryFilter from '../../../components/CategoryFilter/CategoryFilter';
import "../style.css";
function HeaderSearch({searchKey1,searchText,searchCategory,Category}){
    return (
        <div className="flex justify-center gap-5 flex-wrap mx-4">
        <SearchBar  
        searchKey1={searchKey1}
        searchText={searchText}
        contentClassName="TherapistSearch"
        contentInputName="contentInputName"
        />
        <CategoryFilter 
        searchKey1={searchKey1}
        searchCategory={searchCategory}
        Category={Category}
        />
        </div>
        );
    };
    
    export default HeaderSearch;