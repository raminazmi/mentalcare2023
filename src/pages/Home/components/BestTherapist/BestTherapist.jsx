import React, { useState, useRef } from 'react';

import CardBestTher from './CardBestTher';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Therapist } from "../../../../data/data.js"
const BestTherapist = () => {
    const [bestTherapistFilter, setBestTherapistFilter] = useState(true);

    console.table(Therapist);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToScroll: 1
        },
        LargeDesktop: {
            breakpoint: { max: 1245, min: 1024 },
            items: 3,
            slidesToScroll: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 700 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 700, min: 640 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 640, min: 350 },
            items: 1,
        },
        smallMobile: {
            breakpoint: { max: 350, min: 0 },
            items: 1,
            slidesToScroll: 1
        },
    };
    return (
        <div className="my-24 bg-white py-8 pt-24">
            <div className=' space-y-3 text-center '
                data-aos='fade-down'
                data-aos-offset='350'>
                <h1 className='text-[27px] lg:text-[32px]  ' >
                    <strong className='text-[#193F63]'>
                        نقوم بتوصيلك بمعالجك المختص
                    </strong>
                </h1>
                <p className='text-lg'>
                    العديد من الأخصائيين والمعالجين النفسيين يتواجدون لمساعدتكم ودعمكم في كل الأوقات
                </p>
            </div>
            <div className='mt-12 overflow-hidden '>
                <Carousel 
                    responsive={responsive} 
                    infinite={true}
                    arrows={true}
                    className='!mx-0 !px-0' 
                    containerClass="w-[100vw] !mx-0 !px-0"
                    itemClass="mt-2 mb-6 lg:px-4 md:px-3 sm:px-3 min-[420px]:px-2 max-[420px]:px-3 max-[420px]:w-[250px] cursor-grab"
                    centerMode={true}
                    rtl={true}
                >
                {Therapist.map((best, index) =>
                    (!bestTherapistFilter || best.isBestTherapist === bestTherapistFilter) && (
                      <CardBestTher
                        key={index}
                        name={best.name}
                        nameProperty={best.interests[0]}
                        image={best.image}
                        star={best.rate}
                      />
                    )
                  )}
                </Carousel>
            </div>
            <br />
            <br />
        </div >
    )
}

export default BestTherapist