import React, { useState } from 'react'
// import icons
import { Link } from 'react-router-dom';
import { AiOutlineCloseMini ,FaBarsMini} from '../../lib/@reacticons';

const NavMobile = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className='lg:hidden relative z-20'>
      {/* menu icons */}
      <button onClick={() => setisOpen(true)}>
        <span className='content-none absolute -top-1 -right-1 w-4 h-4 bg-[#193F63] p-4 rounded-sm'></span> <FaBarsMini size={22} className="text-[#04C873] relative" />
      </button>
      {/* nav list */}
      <ul className={`${isOpen ? 'right-0' : 'right-full'
        } bg-[#193F63] fixed top-0 w-full h-screen text-white transition-all flex flex-col
          justify-center items-center space-y-8 text-lg ` }> 
        {/* close button */}
        <button onClick={() => setisOpen(false)} className='absolute top-6 left-6'>
          <AiOutlineCloseMini size={22} className="text-[#fff]" />
        </button>
        <li>
          <Link className='cursor-pointer' to='/'> الرئيسية</Link>
        </li>
        <li>
          <Link className='cursor-pointer' to='/privacy'>المعالجين </Link>
        </li>
        <li>
          <Link className='cursor-pointer' to='/terms'> كيف تحجز جلستك؟ </Link>
        </li>
        <li className='ml-6 '>
        <Link className='cursor-pointer hover:text-[hsl(154,96%,40%)] transition-all delay-200  ' to='/'> الرئيسية</Link>
      </li>
      <li>
        <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' to='/therapists'>المعالجين </Link>
      </li>
      <li>
        <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' to='/blog'> المدونة</Link>
      </li>
        <li><button className='text-[#04C873] border border-[#04C873] rounded-[26px] py-3 px-6 text-xl font-medium leading-6
        hover:bg-[#04C873] hover:text-white' >احجز  &nbsp; الأن</button></li>
      </ul>
    </nav >

  )
}

export default NavMobile