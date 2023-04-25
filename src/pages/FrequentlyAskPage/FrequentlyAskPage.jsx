import React from 'react'
import SectionAsk from '../Home/components/FrequentlyAsk/SectionAsk'
import { faqsGeneral } from "../../data/data";

const FrequentlyAskPage = () => {
    return (
        <div className='bg-[#f1f1f1] flex justify-center py-16'>
            <SectionAsk data={faqsGeneral} />
        </div>
    )
}

export default FrequentlyAskPage