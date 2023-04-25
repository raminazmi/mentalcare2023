import React, { useState } from 'react'
import { BsChevronDownMini } from "../../../../lib/@reacticons";

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className="border-b  border-[#615d8b] ">
            <button
                className="flex items-center justify-between w-full px-4 py-6 text-left text-lg font-medium text-gray-700 bg-[#f1f1f1]  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50  border-t-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl text-[#252625] text-right max-sm:text-lg">{question}</span>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <BsChevronDownMini className="h-5 w-5  rotate-180" />
                    ) : (
                        <BsChevronDownMini className="h-5 w-5" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="px-4 py-5 text-right text-gray-500 text-[17px] max-sm:text-[15px]">{answer}</div>
            )}
        </div>
    )
}

export default Accordion