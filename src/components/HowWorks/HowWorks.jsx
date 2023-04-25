import React from 'react'
import imgorks from '../../assets/hero-desktop.png'
import imgorks2 from '../../assets/1.png'
import dots from '../../assets/dots.png'
import vedio from '../../assets/Icon ionic-md-play-circle.png'




const HowWorks = () => {
    return (
        <div className=" -z-[1000]  px-[180px]  py-24 space-y-3 text-center ">
            <div className="flex justify-start items-start  rounded-br-2xl">
                <div className="rounded-tr-2xl text-start rounded-br-2xl text-[#1F1B4A] w-1/2 p-8 space-y-6 pt-24">
                    <h1 className="text-3xl font-[600]">    شاهد كيفية عمل
                        الموقع  ؟ </h1>
                    <p className='text-lg'>
                        للبدء معنا    ما عليك سوى الاشتراك للحصول على حساب على موقعنا الإلكتروني ، وإكمال الاختبار موجز. .. سيساعدنا هذا التقييم على فهم احتياجاتك الفريدة وربطك بمعالج هو الذي سيكون الأنسب لمساعدتك.
                    </p>
                    <button className=" h-12 w-auto cursor-pointer rounded-[6px] py-3 px-8  text-[19px] font-medium leading-6 bg-[#1F1B4A] text-white hover:bg-[#8ed2b5]">
                        ابدا الأن
                    </button>

                </div>

                <div className=" relative">
                    <div className=' !bg-white  -z-30'>
                        <img className='w-[150px] absolute -top-10 -left-14 -z-[10]' src={dots} alt="dots" />
                        <img className='bg-[#F4F7FA] rounded-2xl h-[450px] w-[750px] z-[10]' src={imgorks} alt="imgorks" />
                        <span>
                            <img className='w-[300px] filter brightness-50 absolute bottom-4 -right-14 z-[9]' src={imgorks2} alt="imgorks2" />
                            <img className='w-16  z-10  border-red-500 absolute right-16 top-80 ' src={vedio} alt="vedio" />

                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorks