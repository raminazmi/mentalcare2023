import React, { useState, useEffect } from 'react';
import SectionAsk from './SectionAsk';
import { faqs } from "../../../../data/data";
import { Link } from 'react-router-dom';



const FrequentlyAsk = () => {
    const [Visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <>
            <div className='bg-[#f1f1f1]  pb-24 w-full h-full flex items-center flex-col '>
                <SectionAsk data={faqs} Visible={Visible} setVisible={setVisible}/>
                {faqs.slice(0,Visible).length === faqs.length ? 
                    <Link to="/FrequentlyAsk"> <button
                className="h-12 w-auto cursor-pointer rounded-[6px] py-3 px-8  text-[19px] font-medium leading-6 bg-[var(--secondary)] text-white  hover:bg-[var(--primary)]"
                onClick={showMoreItems}
                > 
                   انتقل الى صفحة الاسئلة
               </button>
               </Link>
               :                
               <button
               className="h-12 w-auto cursor-pointer rounded-[6px] py-3 px-8  text-[19px] font-medium leading-6 bg-[#193F63] text-white hover:text-[#1F1B4A] hover:bg-[#18bb74]"
               onClick={showMoreItems}
               > 
                  المزيد من الأسئلة 
              </button>}
            </div>
        </>

    );
};


export default FrequentlyAsk