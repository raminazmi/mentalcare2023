import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo2.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div className={`  scroll-smooth fixed z-[10000]`}
    >
      <header
        className={`active ${show && ' shadow-sm shadow-[#8ed2b5]'}
         p-3 lg:px-0 w-full  fixed top-0 left-0 z-[10000]
      transition-all duration-300 bg-[#193F63] `}
      >
        <div className='container mx-auto flex items-center px-4   justify-between  lg:justify-evenly'>
          {/* logo  */}
          <Link to="/">
          <img className='w-[60px] h-12 ' src={Logo} alt="logo-img" />
          </Link>
          {/* nav */}
          <Nav />
          {/* nav-mobile */}
          <NavMobile />
        </div>
      </header>
    </div>
  )
}

export default Header