import React, { useState, useEffect } from "react";
import img1 from "../../assets/logo2.png"
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from "react-router-dom";
import Mainlayout from "../../layout/Mainlayout";
import Header from "../../components/header/Header";
import { toast } from "react-toastify";

const Login = ({ withoutNavbar }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("http://localhost:8000/users?emailInput=" + email).then((res) => {
        return res.json();
      }).then((resp) => {
        console.log(resp)
        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter valid email');
        } else {
          if (resp && resp.length > 0) {
            let passwordMatch = false;
            for (let i = 0; i < resp.length; i++) {
              if (resp[i]['password'] === password) {
                passwordMatch = true;
                break;
              }
            }
            if (passwordMatch) {
              toast.success('تم تسجيل دخول بنجاح');
              sessionStorage.setItem('email', email);
              sessionStorage.setItem('name', resp.name);
              // sessionStorage.setItem('userrole', resp.role);
              usenavigate('/')
            }
          } else {
            console.log(resp[0].password);
            console.log('password', password);
            toast.error('Please Enter valid credentials');
          }
        }
      }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
      });
    }
  }


  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Please Enter email');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  }
  return (
    <>

      <Card contentClassName="flex-col  bg-[#091B36] text-white py-6 space-y-4 min-w-[520px]">
        <img src={img1} className='w-[180px]' alt="logo" />
        <h1 className=' text-[26px] text-[#26ABE3] font-semibold'>    أهلا بعودتك &#128075;، قم بتسجيل الدخول  </h1>
        <form className='w-[390px]' onSubmit={ProceedLogin}>
          <div className="relative mt-8">
            <input name="email"
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
              className=" h-12 w-full border-b-[2.3px] border-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:border-blue-400  "
              placeholder="john@doe.com" />
          </div>
          <div className="relative mt-8">
            <input
              name="password"
              type="password"
              value={password} onChange={e => setPassword(e.target.value)}
              className="peer h-12 w-full border-b-[2.3px] border-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:border-blue-400  "
              placeholder="*********" />
          </div>
          <div className='mt-4  text-base flex justify-between items-center '>
            {/* <label> <input type="checkbox" className=" cursor-pointer w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={isChecked} name="lsRememberMe" onChange={onChangeCheckbox} /> &nbsp;&nbsp; تذكرني  </label> */}
            <label className='cursor-pointer hover:text-blue-900'>هل نسيت كلمة السر ؟  </label>
          </div>
          <br />
          <br />
          {<Button value="تسجيل الدخول" contentClassName="mr-28 bg-white" />}
        </form>
        <p className="text-lg"> ليس لديك حساب ؟
          <Link to="/register" >
            <input type="submit" className=" text-blue-500 cursor-pointer font-semibold hover:text-blue-900 py-2 px-4 " value="إنشاء حساب" />
          </Link>
        </p>
      </Card>
    </>
  )
}
export default Login