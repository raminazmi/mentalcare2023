import React from 'react'
import hero from '../../../../assets/hero.png';
import { MdSlowMotionVideo } from 'react-icons/md'

const Hero = () => {
    return (
        <section className='pt-40 mx-[100px] max-lg:mx-[40px] max-xl:pt-10  max-xl:mx-[20px] flex justify-center items-center flex-wrap'>
            <div className='mt-24 space-y-2 w-[50%] max-lg:w-[100%] max-xl:w-[80%]'
                data-aos='fade-down'
                data-aos-delay='400'>
                <h6 className='text-xl max-md:text-[16px]'>
                    بغض النظر عن مكان تواجدك
                </h6>
                <h1 className='text-[45px] max-md:text-[35px]'>
                    هنا <strong className='text-[#1F1B4A]'> منصة منتال كِير</strong> لدعم صحتك النفسية والعقلية
                </h1>
                <p className="text-xl max-md:text-[16px]" data-aos='fade-down'
                    data-aos-delay='600 '>
                    يمكنك التواصل مع معالجين ومستشارين نفسيين وأنت مرتاح في منزلك ،
                    في الوقت الذي يناسبك
                </p>
                <br />
                <div className='flex sm:gap flex-wrap '>
                    <button data-aos='fade-down'
                        data-aos-delay='600' className='mb-4 text-[#ffffff] border border-white bg-[#00325C]  transition-all delay-100 [#1F1B4A] rounded-[6px] py-3 px-10 ml-4 text-[19px] font-medium leading-6 hover:bg-[#034D8C] ' >
                        أبدا معنا
                    </button>
                    <button data-aos='fade-down'
                        data-aos-delay='600' className='mb-4 text-[#1F1B4A] flex gap-2 transition-all delay-100  rounded-[6px] py-3 px-2 text-[19px] font-medium leading-6 hover:text-[#034D8C]' >
                        كيفية عمل الموقع
                        <MdSlowMotionVideo className='' size={22} />
                    </button>
                </div>
            </div>
            <img data-aos='fade-up'
                data-aos-delay='700' src={hero} className='w-[500px]' alt="hero" />
        </section>
    )
}

export default Hero