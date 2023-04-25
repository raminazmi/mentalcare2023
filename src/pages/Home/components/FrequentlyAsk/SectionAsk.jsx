import React from 'react'
import Accordion from './Accordion';
import imgtitle from '../../../../assets/svg/title_img.svg'

const SectionAsk = ({ data , Visible}) => {
    return (
        <div className=" lg:w-[100%]  pt-8">
            <div className="max-xl:w-[90vw] xl:w-[60vw] pt-2 pb-4  text-center mx-auto">
                <div className='flex justify-center items-center flex-col space-y-4 pt-8'>
                    <h2 className="text-2xl  lg:text-4xl font-bold   text-[#193F63]">أسئلة مكررة حول الموقع</h2>
                    <img className='pb-8' src={imgtitle} alt="imagtilte" />
                </div>
                {data.slice(0,Visible).map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))} 
                <br />
            </div >
        </div >
    )
}

export default SectionAsk