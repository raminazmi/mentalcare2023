import React from 'react'
import undraw_active_sup from "../../../../assets/svg/undraw_active_sup.svg";

const Helps = () => {
    return (
        <div className="lg:bg-[#F4F7FA] lg:px-[180px]  py-14 space-y-3 text-center ">
            <h1 className="text-[28px] lg:text-[32px] py-10 ">
                <strong className="text-[#193F63]">
                    هل مازلت تحتاج للمساعدة؟
                </strong>
            </h1>
            <div className="flex justify-center lg:h-[430px]  flex-col-reverse lg:flex-row ">

                <div className="w-auto mx-4 bg-[#193F63] rounded-tr-2xl rounded-br-2xl text-start text-white lg:w-1/2 p-8 space-y-6 pt-24">
                    <h1 className="text-2xl lg:text-3xl font-medium">فريق دعم العملاء لدينا متواجد دائمًا للإجابة على أسئلتك غير الطبية   </h1>
                    <p className="text-lg">
                        اتصل بهم في أي وقت وفي أي مكان للحصول على المساعدة المطلوبة ، استخدم الزر أدناه أو الدائرة الزرقاء في الجانب الأيسر السفلي.
                    </p>
                    {/* <button>قم </button> */}
                    <button className=" h-12 bg-white cursor-pointer  border border-transparent rounded-[6px] py-3 px-6 text-[19px] font-medium leading-6 hover:border-white hover:bg-[#193F63] hover:text-white text-[#193F63] ">
                        راسل فريق الدعم
                    </button>
                </div>
                <div className="lg:w-1/2 mx-8">
                    <img src={undraw_active_sup} className=' h-[430px]' alt="undraw_active_sup" />
                </div>
            </div>
        </div>
    )
}

export default Helps