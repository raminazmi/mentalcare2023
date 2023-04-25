import React from 'react'
import Login from './pages/Login/Login'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useLocation, } from 'react-router-dom';
import Register from './pages/Register/Register'
import Verification from './pages/Verification/Verification'
import RegisterTherapist from './pages/Register/RegisterTherapist'
import Home from './pages/Home/Home'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Blog from './pages/Blog/Blog'
import BlogId from './pages/Blog/BlogId/BlogId'
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import FrequentlyAskPage from './pages/FrequentlyAskPage/FrequentlyAskPage';
import { ToastContainer, toast } from 'react-toastify';
import Quizes from './pages/Quizes/Quizes';
import QuizesId from './pages/Quizes/QuizesId/QuizesId';
import Therapists from './pages/Therapists/Therapists';
import ProfileTherapists from './pages/ProfileTherapists/ProfileTherapists';
import RegisterUser from './pages/Register/RegisterUser';
import SupportAdmin from './components/SupportAdmin/index';

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  const location = useLocation();
  const showHeader = !['/login', '/register', '/registerTherapist', '/verification', '/RegisterUser'].includes(location.pathname);


  return (
    <>
      {showHeader && <Header />}
      <ToastContainer theme='colored' ></ToastContainer>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogId />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registerTherapist' element={<RegisterTherapist />} />
        <Route path='/RegisterUser' element={<RegisterUser />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/Therapists' element={<Therapists />} />
        <Route path='/FrequentlyAsk' element={<FrequentlyAskPage />} />
        <Route path="Quizes/:id" element={<QuizesId />} />
        <Route path='/Quizes' element={<Quizes />} />
        <Route path ='/profileTherapists' element={<ProfileTherapists/>}/>
        <Route path ='/SupportAdmin' element={<SupportAdmin/>}/>

      </Routes >
      {showHeader && <Footer /> }
    </>
  )
}

export default App



