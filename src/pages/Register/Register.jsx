
import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import img2 from "../../assets/logo2.png"
import Button from '../../components/Button/Button'
import { FaUserAltMini } from '../../lib/@reacticons';
import { Link} from "react-router-dom";
import RegisterTherapist from './RegisterTherapist';
const Register = () => {
  const [isShown, setIsShown] = useState(false);

  var contentClassNames = ""

  return (
    <>
      <Card contentClassName={!isShown ? contentClassNames = "flex-row bg-[#091B36]  h-[530px]" : contentClassNames = `w-full h-full mt-40`}>
        {
          isShown === false ? (
            <>
              <div className='flex justify-center items-center bg-white flex-col gap-4 px-24 py-[36px] space-y-6'>
                <h1 className='relative text-3xl '>إنشاء حساب
                  <span className='w-[148px] h-[2px] mt-4 bg-black absolute -bottom-2 right-0'></span>
                  <span className='w-[18px] h-[12px] mt-4 bg-blue-600 absolute -bottom-3 left-16 '></span>
                </h1>
                <span className='border-2 border-blue-500 rounded-full p-9'>
                  <FaUserAltMini size={120} />
                </span>

                {/* <Route> */}
                <Link to="/registerTherapist">
                  <Button contentClassName='w-[200px]' value="التسجيل كمعالج " />
                </Link>

                {/* </Route> */}
               <Link to='/RegisterUser'>
               <Button contentClassName='w-[200px]' value="التسجيل كمستخدم " />
               </Link>
              </div>
              <div className='flex  flex-col items-center w-[480px] h-[400px]  text-white'>
                <img src={img2} className='w-40 -mt-6' alt="logo" />
                <p className='mx-6 mt-4 text-base font-medium leading-7' >
                  تحدث مع طبيبك النفسي أونلاين, بكل خصوصية
                  في أي وقت وأي مكان ، يوجد لدينا معالجين أكفاء
                </p>
                <p className="text-lg mt-48">  لديك حساب ؟
                  <Link to="/login" >
                    <input
                      type="submit"
                      className=" text-blue-500 cursor-pointer font-semibold hover:text-white py-2 px-4 "
                      value="سجل دخول" />
                  </Link>
                </p>
              </div>
            </>
          ) : null
        }
        {isShown && <RegisterTherapist />}
      </Card>
    </>
  )
}

export default Register