import React from 'react'
import calender from "../../../../assets/Advantages/calendar.png"
import star from "../../../../assets/Advantages/star (1).png"
import wallt from "../../../../assets/Advantages/wallet.png"
import phone from "../../../../assets/Advantages/phone.png"
import insurance from "../../../../assets/Advantages/insurance.png"
import timer from "../../../../assets/Advantages/timer.png"

const Advantages = () => {
  return (
    <div className="bg-white md:px-[180px] py-24 space-y-3 text-center ">
      <h1 className="text-[28px] lg:text-[32px] py-10 ">
        <strong className="text-[#193F63] max-sm:text-2xl"
          data-aos='fade-down'
          data-aos-delay='600'>
          استكشف أهم مزايا منتال كِير
        </strong>
      </h1>
      <div className='flex justify-center items-center flex-row flex-wrap gap-10 mx-10'
        data-aos='fade-up'
        data-aos-delay='600'>
        <div className='w-80 h-56  rounded-xl space-x-4 shadow-lg bg-[#F4F7FA] '>
          <div className='p-4 flex justify-center flex-col gap-4 items-center'>
            <span className='bg-[#fcfcfc] border-2  hover:border-[#193F63] flex justify-center items-center  w-14 h-14 p-2  rounded-full '>
              <img className='w-7 ml-1' src={calender} alt="calender" />
            </span>

            <h3 className='font-medium text-lg'> اختيار موعدك المناسب </h3>

            <p className='text-md'>
              القدرة على اختيار موعد مناسب لجلسة الاستشارة الخاصة بك عبر الإنترنت
            </p>
          </div>
        </div>

        <div className='w-80 h-56  rounded-xl space-x-4 shadow-lg bg-[#F4F7FA] '>
          <div className='p-4 flex justify-center flex-col gap-4 items-center'>
            <span className='bg-[#fcfcfc] border-2  hover:border-[#193F63] flex justify-center items-center  w-14 h-14 p-2  rounded-full '>
              <img className='w-7 ' src={star} alt="star" />
            </span>
            <h3 className='font-medium text-lg text-[#193F63]'>  الراحة وسهولة الوصول  </h3>
            <p className='text-md'>
              يوفر الموقع   أيضًا ميزة الراحة وسهولة الوصول. من خلال الاستشارة عبر الإنترنت            </p>
          </div>
        </div>

        <div className='w-80 h-56  rounded-xl space-x-4 shadow-lg  bg-[#F4F7FA] '>
          <div className='p-4 flex justify-center flex-col gap-4 items-center'>
            <span className='bg-[#fcfcfc] border-2  hover:border-[#193F63]  flex justify-center items-center  w-14 h-14 p-2  rounded-full '>
              <img className='w-7 ml-1' src={wallt} alt="wallt" />
            </span>

            <h3 className='font-medium text-lg text-[#193F63]'> فعاله من حيث التكلفه </h3>

            <p className='text-md'>
              يعتبر   خيارًا فعالاً من حيث التكلفة  الذين يسعون للحصول على خدمات  استشارية.            </p>
          </div>
        </div>

        <div className='w-80 h-56  rounded-xl space-x-4 shadow-lg bg-[#F4F7FA] '>
          <div className='p-4 flex justify-center flex-col gap-4 items-center'>
            <span className='bg-[#fcfcfc] border-2  hover:border-[#193F63] flex justify-center items-center  w-14 h-14 p-2  rounded-full '>
              <img className='w-7 ml-1' src={phone} alt="phone" />
            </span>

            <h3 className='font-medium text-lg text-[#193F63]'>   الوصول إلى معالجك  المناسب  </h3>

            <p className='text-md'>
              هي القدرة على الوصول إلى مجموعة واسعة من المتخصصين النفسيين            </p>
          </div>
        </div>

        <div className='w-80 h-56  rounded-xl space-x-4 shadow-lg bg-[#F4F7FA] '>
          <div className='p-4 flex justify-center flex-col gap-4 items-center'>
            <span className='bg-[#fcfcfc] border-2  hover:border-[#193F63] flex justify-center items-center  w-14 h-14 p-2  rounded-full '>
              <img className='w-7' src={insurance} alt="insurance" />
            </span>

            <h3 className='font-medium text-lg text-[#193F63]'> الخصوصية والسرية </h3>

            <p className='text-md'>
              يعطي الموقع الأولوية لخصوصية وسرية المستخدمين الساعين للدعم النفسي. المكالمات الصوتية والمرئية آمنة            </p>
          </div>
        </div>

        <div className='w-80 h-56  rounded-xl space-x-4 shadow-lg bg-[#F4F7FA] '>
          <div className='p-4 flex justify-center flex-col gap-4 items-center'>
            <span className='bg-[#fcfcfc] border-2  hover:border-[#193F63] flex justify-center items-center  w-14 h-14 p-2  rounded-full '>
              <img className='w-7 ' src={timer} alt="timer" />
            </span>

            <h3 className='font-medium text-lg text-[#193F63]'>  دعم الرعاية المستمرة:  </h3>

            <p className='text-md'>
              يمكن أن توفر الاستشارة عبر الإنترنت الدعم المستمر للأفراد الذين يعالجون حالات الصحة العقلية المزمنة            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Advantages
