import React from 'react'
import Polygon from "../../../../assets/reviews/Polygon.png"
import Path from "../../../../assets/reviews/Path.png"
import p1 from "../../../../assets/reviews/p1.jpg"
import p2 from "../../../../assets/reviews/p2.jpg"
import p3 from "../../../../assets/reviews/p3.jpg"
import p4 from "../../../../assets/reviews/p4.jpg"
import p5 from "../../../../assets/reviews/p5.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper'
import Slide from './Slide'

const Reviews = () => {

    return (
        <>


            <div className="relative bg-white lg:px-[180px] py-24 space-y-3 text-left ">
                <h1 className="text-center lg:text-left text-[25px] lg:text-[28px] lg:py-10 ">
                    انضم الى العديد من العملاء الذين يحصلون على الدعم النفسي
                </h1>
                <div className='flex justify-center items-center'>
                    <div className='hidden lg:block lg:w-1/2'>
                        <div className=''>
                            <img className='absolute top-2 rotate-[360deg] -right-28 w-[690px]' src={Polygon} alt="Polygon" />
                            <img className='absolute top-48 rotate-[10deg] right-20 w-[400px]' src={Path} alt="Path" />
                            <div className='bg-cover bg-center absolute top-44  swiper-slide-active  rounded-full border-[5px] border-white right-48 w-[72px]  h-[70px]' style={{ backgroundImage: `url(${p5})` }}/>
                            <div className='bg-cover bg-center absolute top-[535px]  rounded-full  border-[5px] border-white right-[310px] w-[72px]  h-[70px]'  style={{ backgroundImage: `url(${p1})` }}/>
                            <div className='bg-cover bg-center absolute top-[365px]  rounded-full  border-[5px] border-white right-[280px] w-[72px]  h-[70px]' style={{ backgroundImage: `url(${p4})` }} />
                            <div className='bg-cover bg-center absolute top-56  rounded-full  border-[5px] border-white right-[400px] w-[72px]  h-[70px]' style={{ backgroundImage: `url(${p1})` }}/>
                            <span className='bg-cover bg-center absolute top-[460px]    rounded-full  border-[5px] border-white right-[70px] w-[72px]  h-[70px]' style={{ backgroundImage: `url(${p2})` }} />
                            <span className='absolute top-[340px] dots  rounded-full  border-[7px] border-white right-[140px] w-7 h-7 bg-[#2289FF] '></span>
                            <span className='absolute top-[520px] dots2  rounded-full  border-[7px] border-white right-[200px] w-6 h-6 bg-[#00325C] '></span>
                            <span className='absolute top-[220px] dots2  rounded-full  border-[7px] border-white right-[300px] w-6 h-6 bg-[#00325C] '></span>
                            <span className='absolute top-[320px] dots3  rounded-full  border-[5px] border-white right-[375px] w-5 h-5 bg-[#2289FF] '></span>
                            <span className='absolute top-[480px] dots3  rounded-full  border-[5px] border-white right-[325px] w-5 h-5 bg-[#2289FF] '></span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}

                            className="swiper_container m-4 "
                        >
                            <SwiperSlide>
                                <Slide
                                    image={p1}
                                    name="اسلام البيك"
                                    revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide image={p2} name="محمد الكيلاني"
                                    revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide image={p3} name="طارق العطار"
                                    revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide image={p4} name="رامي الملاحي"
                                    revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide image={p5} name="محمد عبده"
                                    revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"' />
                            </SwiperSlide>

                            <br />
                            <div className="slider-controler">
                                <button className="swiper-button-prev slider-arrow"   >
                                </button>
                                <button className="swiper-button-next slider-arrow w-14" >
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>

            </div>
            <style jsx>{`
                .dots::after {
                content: "";
                position: absolute;
                top: -50%;
                width:30px;
                height:30px;
                left: -50%;
                background-color: transparent;
                color: #fff;
                border:3px solid #2289FF;
                padding: 0.25rem 0.5rem;
                border-radius: 50%;
                white-space: nowrap;
                }

                .dots2::after {
                content: "";
                position: absolute;
                top: -50%;
                width:22px;
                height:22px;
                left: -50%;
                background-color: transparent;
                color: #fff;
                border:3px solid #00325C ;
                padding: 0.25rem 0.5rem;
                border-radius: 50%;
                white-space: nowrap;
                }

                .dots3::after {
                content: "";
                position: absolute;
                top: -52%;
                width:22px;
                height:22px;
                left: -54%;
                background-color: transparent;
                color: #fff;
                border:3px solid #2289FF;
                padding: 0.25rem 0.5rem;
                border-radius: 50%;
                white-space: nowrap;
                }
            }
            `}</style>


        </>
    )
}

export default Reviews