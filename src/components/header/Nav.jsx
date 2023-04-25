import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowDownMini } from '../../lib/@reacticons';
import user from "../../assets/user.png"
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var isLoggedIn = !!sessionStorage.getItem('email');
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='hidden lg:flex  lg:gap-52' >
      <ul className='text-white lg:flex space-x-6 items-center text-[18px] leading-6 font-normal lg:mr-32'>
        <li className='ml-6 '>
          <Link className='cursor-pointer hover:text-[hsl(154,96%,40%)] transition-all delay-200  ' to='/'> الرئيسية</Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' to='/therapists'>المعالجين </Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' to='/blog'> المدونة</Link>
        </li>
        <li>
          <div className="relative">
            <button
              className=" text-white hover:text-[#04C873]  py-2 flex rounded"
              onClick={toggleDropdown}
            >
              المزيد
              <AiOutlineArrowDownMini className='mt-1 mr-2' />  </button>
            {isOpen && (
              <div
                className="absolute right-0 mt-2 py-2 w-48 bg-[#193F63] text-white rounded-md shadow-xl z-10">
                <Link to="/PrivacyPolicy">
                  <h3 className="block px-4 py-2 text-sm  hover:text-[#04C873] " >
                    سياسية الخصوصية
                  </h3>
                </Link>
                <Link to="/FrequentlyAsk">
                  <h3 className="block px-4 py-2 text-sm  hover:text-[#04C873] " >
                    أسئلة مكررة
                  </h3>
                </Link>
              <Link to="/Quizes">
              <h3 className="block px-4 py-2 text-sm  hover:text-[#04C873] ">
                  أداء اختبار
                </h3>
              </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
      <div className='hidden lg:flex  lg:gap-5'>
        {isLoggedIn ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="mr-4 text-white  hover:text-blue-300">اسلام البيك </div>
            <img className='w-7' src={user} alt="user" />
          </div>
        ) : (
          <Link to="login">
          <button className=' text-white  transition-all delay-100  border border-white rounded-[6px] py-2 px-4 text-[18px] font-medium leading-6 hover:text-[#2289FF] hover:border-[#2289FF]' >تسجيل الدخول
          </button>
        </Link> 
        )}
      </div>
    </nav >
  )
}
export default Nav