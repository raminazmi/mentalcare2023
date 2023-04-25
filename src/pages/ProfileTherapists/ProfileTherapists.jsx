import React from "react";
import { Link } from "react-router-dom";
import imageprofile from "../../assets/profiles/nesma.webp";
import sessions from "../../assets/profiles/sessions.svg";
import reversecomma from "../../assets/profiles/reverse-comma.svg";

import {
  AiFillStarMini,
  BiWorldMini,
  FaMoneyBillMini,
  MdDateRangeMini,
  MdFlagCircleMini,
} from "../../lib/@reacticons";
import CardProfileDetials from "./components/CardProfileDetials";
import Button from "../../components/Button/Button";
import ButtonOutline from "../../components/Button/ButtonOutline";
import Interest from "./components/Interest";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/swiper-bundle.css";
import ReviewTherapist from "./components/ReviewTherapist";

const ProfileTherapists = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <div className="bg-[#F5F4F4] lg:px-[220px] py-20">
      {/* The section top navigation */}
      <div>
        <h1 className="text-[var(--primary)] font-bold leading-[60px] text-[40px] text-center p-4">
          الملف الشخصي للمعالج
        </h1>
        <span className="flex justify-start items-center gap-1">
          <Link to="/">
            <button className="underline text-[var(--primary)] font-[500] leading-[24px] text-[14px]">
              الصفحة الرئيسية
            </button>
          </Link>
          <span className="text-[15px]">&gt;</span>

          <Link to="/Therapists">
            <button className="underline text-[var(--primary)] font-[500] leading-[24px] text-[14px]">
              قائمة المعالجين
            </button>
          </Link>
          <span className="text-[15px]">&gt;</span>
          <h5 className=" font-[500] leading-[24px] text-[14px]">
            ماجي رووف
          </h5>
        </span>
      </div>

      {/* The section component contains */}
      <div className="flex justify-start items-start  gap-6 py-4 ">
        <div className="flex gap-4 flex-col ">
          {/* The section interests [ 1..N] */}
          <div className="bg-white shadow-md p-6 h-auto rounded-2xl max-w-[500px]">
            <h3 className="text-[var(--primary)] font-medium leading-[24px] pb-4 text-[16px]">
              الأهتمامات
            </h3>
            <div className="flex justify-start items-center flex-wrap gap-2">
              <Interest interest=" مشاكل المراهق" />
              <Interest interest="اضطرابات طيف التوحد" />
              <Interest interest="الإدمان" />
              <Interest interest="اضطرابات المزاج" />
              <Interest interest="القلق والوسواس " />
              <Interest interest="المشاكل الجنسية " />
              <Interest interest=" استشارات الزواج / مشاكل العلاقات" />
            </div>
          </div>
          {/* The section interests [ 1..N] */}

          <div className="bg-white shadow-md p-6 h-auto rounded-2xl max-w-[500px]">
            <h3 className="flex justify-start gap-6 items-center pb-4 ">
              <div className="flex justify-start gap-2 items-start">
                <AiFillStarMini className="text-yellow-500" />
                <AiFillStarMini className="text-yellow-500" />
                <AiFillStarMini className="text-yellow-500" />
                <AiFillStarMini className="text-yellow-500" />
              </div>

              {/* compontents revriews progress bar */}
              <div className="flex items-center -mr-4  justify-start ">
                <h6 className="text-xs pl-1"> 4.8 </h6>
                <h6 className="text-xs"> (5000) تقييم </h6>
              </div>
            </h3>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm">مهارات التواصل</h5>
                <div className="flex justify-center items-center gap-3">
                  <div className="h-[10px]  w-full bg-neutral-300 rounded-md ">
                    <div
                      className="h-[10px] rounded-md  bg-[#4D4D4F]"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <p className="text-sm">4.96</p>
                </div>
              </div>

              <div className="">
                <h5 className="text-sm"> فهم الحالة</h5>
                <div className="flex justify-center items-center gap-3">
                  <div className="h-[10px]  w-full bg-neutral-300 rounded-md ">
                    <div
                      className="h-[10px] rounded-md  bg-[#4D4D4F]"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <p className="text-sm">4.56</p>
                </div>
              </div>

              <div>
                <h5 className="text-sm"> تقديم حلول فعالة</h5>
                <div className="flex justify-center items-center gap-3">
                  <div className="h-[10px]  w-full bg-neutral-300 rounded-md ">
                    <div
                      className="h-[10px] rounded-md  bg-[#4D4D4F]"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="text-sm">4.90</p>
                </div>
              </div>

              <div>
                <h5 className="text-sm"> الإلتزام بمواعيد الجلسة</h5>
                <div className="flex justify-center items-center gap-3">
                  <div className="h-[10px]  w-full bg-neutral-300 rounded-md ">
                    <div
                      className="h-[10px] rounded-md  bg-[#4D4D4F]"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-sm">4.44</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 h-auto rounded-2xl max-w-[500px]">
            <h3 className=" pb-4 ">
              <img src={reversecomma} alt="reversecomma" />
            </h3>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="h-auto">
                  <ReviewTherapist
                    text="ممتازة 🤍🤍"
                    date="  18 يومًا"
                    rating={3}
                    name="eslam"
                    ratingType={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="h-24">
                  <ReviewTherapist
                    text="Amazing as always 😍😍"
                    date="19 يومًا "
                    rating={4}
                    name="ahmed"
                    ratingType={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="h-24">
                  <ReviewTherapist
                    text="Another great session 🥰"
                    date="22 يومًا "
                    rating={2}
                    name="rami"
                    ratingType={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="h-24">
                  <ReviewTherapist
                    text="very very nice thripts "
                    date="31 يومًا "
                    rating={5}
                    name="mohammad"
                    ratingType={true}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>


          
          <div className="bg-white shadow-md p-6 h-auto rounded-2xl max-w-[500px]">
            <h3 className=" pb-4 font-[500] text-[var(--primary)]">
            خبرة
            </h3>
            <div className="space-y-6">
              <div className="relative ">
                <span className="absolute h-[79px] w-[6px] rounded-md bg-[var(--primary)] top-0 right-0"></span>
                  <div className="mr-4 text-sm space-y-1">
                  <h3 className="font-[500]">تدريب وعلاج</h3>
                  <p className="font-[500] text-xs">
                  مستشفى مصر الجديدة للصحة النفسية وعلاج الإدمان (مستشفى المطار) - وحدة الإدمان
                  </p>
                  <p className="text-[var(--primary)] font-[400]">
                  سبتمبر ٢٠١٩ - فبراير ٢٠٢١
                  </p>
                  </div>
              </div>

              <div className="relative ">
                <span className="absolute h-[79px] w-[6px] rounded-md bg-[var(--primary)] top-0 right-0"></span>
                  <div className="mr-4 text-sm space-y-1">
                  <h3 className="font-[500]">تدريب وعلاج</h3>
                  <p className="font-[500] text-xs">
                  مستشفى مصر الجديدة للصحة النفسية وعلاج الإدمان (مستشفى المطار) - وحدة الإدمان
                  </p>
                  <p className="text-[var(--primary)] font-[400]">
                  سبتمبر ٢٠١٩ - فبراير ٢٠٢١
                  </p>
                  </div>
              </div>

              <div className="relative ">
                <span className="absolute h-[79px] w-[6px] rounded-md bg-[var(--primary)] top-0 right-0"></span>
                  <div className="mr-4 text-sm space-y-1">
                  <h3 className="font-[500]">تدريب وعلاج</h3>
                  <p className="font-[500] text-xs">
                  مستشفى مصر الجديدة للصحة النفسية وعلاج الإدمان (مستشفى المطار) - وحدة الإدمان
                  </p>
                  <p className="text-[var(--primary)] font-[400]">
                  سبتمبر ٢٠١٩ - فبراير ٢٠٢١
                  </p>
                  </div>
              </div>

            </div>
          </div>

          <div className="bg-white shadow-md p-6 h-auto rounded-2xl max-w-[500px]">
            <h3 className=" pb-4 font-[500] text-[var(--primary)]">
            التعليم
            </h3>
            <div className="space-y-6">
              <div className="relative ">
                <span className="absolute h-[79px] w-[6px] rounded-md bg-[var(--primary)] top-0 right-0"></span>
                  <div className="mr-4 text-sm space-y-1">
                  <h3 className="font-[500]">تدريب وعلاج</h3>
                  <p className="font-[500] text-xs">
                  مستشفى مصر الجديدة للصحة النفسية وعلاج الإدمان (مستشفى المطار) - وحدة الإدمان
                  </p>
                  <p className="text-[var(--primary)] font-[400]">
                  سبتمبر ٢٠١٩ - فبراير ٢٠٢١
                  </p>
                  </div>
              </div>

              <div className="relative ">
                <span className="absolute h-[79px] w-[6px] rounded-md bg-[var(--primary)] top-0 right-0"></span>
                  <div className="mr-4 text-sm space-y-1">
                  <h3 className="font-[500]">تدريب وعلاج</h3>
                  <p className="font-[500] text-xs">
                  مستشفى مصر الجديدة للصحة النفسية وعلاج الإدمان (مستشفى المطار) - وحدة الإدمان
                  </p>
                  <p className="text-[var(--primary)] font-[400]">
                  سبتمبر ٢٠١٩ - فبراير ٢٠٢١
                  </p>
                  </div>
              </div>

              <div className="relative ">
                <span className="absolute h-[79px] w-[6px] rounded-md bg-[var(--primary)] top-0 right-0"></span>
                  <div className="mr-4 text-sm space-y-1">
                  <h3 className="font-[500]">تدريب وعلاج</h3>
                  <p className="font-[500] text-xs">
                  مستشفى مصر الجديدة للصحة النفسية وعلاج الإدمان (مستشفى المطار) - وحدة الإدمان
                  </p>
                  <p className="text-[var(--primary)] font-[400]">
                  سبتمبر ٢٠١٩ - فبراير ٢٠٢١
                  </p>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Details ProfileTherapists  */}
        <div className="bg-white shadow-md p-6 rounded-2xl w-[546px]">
          <div className="flex justify-start items-start  gap-6">
            <span className="relative">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full shadow-md"
                src={imageprofile}
                alt="personalimage"
              />
              <span
                className={`absolute bottom-2 left-0 rounded-full text-white text-sm 
                w-[25px] h-[25px] bg-[#7fee1d]  border-[3px]  border-white
                 ${true ? "Connected" : "Disconnected "}`}
              ></span>
            </span>
            <div className="mx-2">
              <Link to="/">
                <h4 className="font-semibold text-[17px]  text-[#193F63]">
                  د. ماجي رووف
                </h4>
              </Link>
              <p className="  text-[15px]">طبيب نفسي</p>

              {/* ---[  The Numbers revriews ]---*/}
              <div className="flex flex-col  justify-start items-center gap-1">
                {/* ---[ The Number of stars revriews ]---*/}
                <div className="flex justify-start -mr-4  pt-2 items-start">
                <ReviewTherapist rating={4} ratingType={false}/>
                </div>

                <div className="flex items-center -mr-2 underline justify-start ">
                  <h6 className="text-sm pl-1"> 4.8 </h6>
                  <h6 className="text-xs"> (5000) تقييم </h6>
                </div>
              </div>
            </div>
          </div>
          {/* The section interests [ 1..N] */}
          <div className="flex justify-start items-center pt-8 flex-wrap gap-2">
            <Interest interest=" مشاكل المراهق" />
            <Interest interest="اضطرابات طيف التوحد" />
            <Interest interest="الإدمان" />
          </div>
          {/* The section CardProfileDetials [ 1..5] */}
          <div className="py-8 space-y-4">
            <CardProfileDetials nameicon={BiWorldMini} text="اللغة: العربية" />
            <CardProfileDetials nameicon={MdFlagCircleMini} text="البلد: لبنان"/>
            <CardProfileDetials
              nameicon={MdDateRangeMini}
              text="تاريخ الانضمام منذ عام واحد"
            />
            <CardProfileDetials
              nameicon={sessions}
              text="عدد الجلسات: 300+ جلسة"
            />
            <CardProfileDetials
              nameicon={FaMoneyBillMini}
              text="دولار 20/ 30 دقيقة  || دولار 50/ 60 دقيقة"
            />
          </div>
          <div className="flex justify-center gap-6 my-2">
            <Button
              value="أكتب تقييم"
              contentClassName="rounded-md w-[240px] py-[10px] text-xl"
            />
          <Link to="SessionReservation">
          <ButtonOutline
              value="إختر ميعاد"
              contentClassName="rounded-md py-[10px] w-[240px] text-xl"
            />
          </Link>
          </div>
        </div>
        {/* Details ProfileTherapists  */}
      </div>
    </div>
  );
};

export default ProfileTherapists;
