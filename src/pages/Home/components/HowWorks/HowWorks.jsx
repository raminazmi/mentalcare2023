import React from 'react'
import imgorks from '../../../../assets/hero-desktop.png'
import imgorks2 from '../../../../assets/1.png'
import dots from '../../../../assets/dots.png'
import vedio from '../../../../assets/Icon ionic-md-play-circle.png'
import { Button } from 'react-chat-engine'



const HowWorks = () => {
    return (
        <div className=" -z-[1000]  lg:px-[180px]  py-32 space-y-3 text-center ">
            <div className="flex justify-center lg:justify-start items-center lg:items-start  rounded-br-2xl">
                <div className="rounded-tr-2xl text-center lg:text-start rounded-br-2xl text-[#193F63] w-full lg:w-1/2 p-8 space-y-6 pt-24">
                    <h1 className="text-2xl lg:text-4xl font-[600]">    شاهد كيفية عمل
                        الموقع؟ </h1>
                    <p className='text-lg'>
                        للبدء معنا    ما عليك سوى الاشتراك للحصول على حساب على موقعنا الإلكتروني ، وإكمال الاختبار موجز. .. سيساعدنا هذا التقييم على فهم احتياجاتك الفريدة وربطك بمعالج هو الذي سيكون الأنسب لمساعدتك.
                    </p>
                    <button className="mt-4 h-12 w-auto cursor-pointer rounded-[6px] py-3 px-8  text-[19px] font-medium leading-6 bg-[#193F63] text-white hover:bg-[#18bb74]">                        ابدا الأن
                    </button>

                </div>

                <div className="hidden lg:block relative">
                    <div className=' !bg-white  -z-30'>
                        <img className='w-[150px] absolute -top-10 -left-14 -z-[10]' src={dots} alt="dots" />
                        <img className='bg-[#F4F7FA] rounded-2xl h-[450px] w-[750px] z-10' src={imgorks} alt="imgorks" />
                        <span>
                            <img className='w-[200px] filter brightness-50 absolute bottom-2 -right-14 ' src={imgorks2} alt="imgorks2" />
                            <img className='w-16  z-[2] p-2  border-red-500  absolute bottom-8 right-4' src={vedio} alt="vedio" />

                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorks