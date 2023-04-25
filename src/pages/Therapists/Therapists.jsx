import React, { useState, useEffect } from "react";
import HeaderSearch from "./components/HeaderSearch";
import { Therapist, CategoryTherapist } from "../../data/data";
import EmptyList from './components/EmptyList/EmptyList';
import TherapistList from "./components/TherapistList";
function Therapists() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const searchText = (e) => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const results = Therapist.filter(Therapists => {
            return Object.keys(Therapists).some((key) =>
                Therapists.name
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase())
            ) ||
                Therapists.specialty
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase())
        });
        setSearchResult(results);
    }, [searchTerm]);
    return (
        <div  className="container flex justify-center m-auto  min-[1024px]:p-10">
        <div>
            <header className="mt-28 mb-12">
                <h1 className="text-[27px] lg:text-[32px] text-center ">
                    <strong className="text-[#193F63]">
                        نقوم بتوصيلك بمعالجك المختص
                    </strong>
                </h1>
                <p className="text-lg text-center my-3">
                    العديد من الأخصائيين والمعالجين النفسيين يتواجدون لمساعدتكم ودعمكم في
                    كل الأوقات
                </p>
            </header>
            <HeaderSearch
                searchKey1={searchTerm}
                searchText={searchText}
                searchCategory={searchText}
                Category={CategoryTherapist}
            />
            <div className="flex justify-center gap-16">
                <div className="mt-10 max-sm:mt-5 mb-14">
                    {!searchResult.length ? <EmptyList Therapists={Therapist} TextSearch={searchTerm} /> : <TherapistList Therapists={searchResult} />}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Therapists;
