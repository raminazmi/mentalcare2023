import React, { useState } from 'react'
import { AiFillEyeInvisibleMini, AiFillEyeMini } from '../../lib/@reacticons'
import InputForm from '../../components/Input/InputForm'
import ReCAPTCHA from "react-google-recaptcha";
import Card from '../../components/Card/Card';
import { useForm, Controller } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterUser = (emailInput="") => {
  const [selectedDate, setSelectedDate] = useState('text');
  const { handleSubmit, formState: { errors }, control } = useForm();
  const navigaate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    }).then((response) => {
      toast.success("تم إنشاء الحساب بنجاح");
      navigaate('/login')

    }).catch((error) => {
      toast.error("فشل" + error.message)

    });
  }
  const [open, setOpen] = useState(false)
  // handle toggle 
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Card contentClassName="flex w-[820px] flex-col py-14 px-14 bg-white" MainContentClassName=" p-24">
    <h1 className='text-[26px] text-[#26ABE3] font-semibold'>إنشاء حساب كمستخدم</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className=' w-[620px]  flex-1'>
        <Controller
          name="username"
          type="text"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputForm placeholder="الاسم كامل" {...field} />}
        />
        {errors.username && <span className='text-red-500 text-sm'>ادخل الاسم مطلوب</span>}
      </div>

      <div className=''>
        <Controller
          name="emailInput"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputForm placeholder="البريد الالكتروني" type="email"
            onChange={emailInput}  {...field} />}
        />
        {errors.emailInput && <span className='text-red-500 text-sm'>ادخل البريد الالكتروني مطلوب</span>}
      </div>

      <div className=' relative '>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputForm placeholder="كلمة السر"
            type={(open === false) ? 'password' : 'text'} {...field} />}
        />
        <div className='text-2xl absolute top-10 left-5'>
          {
            (open === false) ? <AiFillEyeMini onClick={toggle} className='text-[#26ABE3]' /> :
              <AiFillEyeInvisibleMini onClick={toggle} className='text-[#6dccf5]' />
          }
        </div>
        {errors.password && <span className='text-red-500 text-sm'>ادخل كلمة السر مطلوبة</span>}
      </div>

      <div className=''>
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputForm placeholder="ادخل عنوانك كامل " type="text" {...field} />}
        />
        {errors.address && <span className='text-red-500 text-sm'>ادخل عنوانك مطلوب</span>}
      </div>


      <div className=''>
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) =>
            <InputForm placeholder="ادخل   تاريخ ميلاد "
              onFocus={() => setSelectedDate('date')}
              type={selectedDate} {...field} />}
        />
        {errors.date && <span className='text-red-500 text-sm'>ادخل تاريخ ميلاد مطلوب</span>}
      </div>
   
      {/* The validation rebort not nessacreey now ! */}
      <ReCAPTCHA sitekey="6LeXpZUkAAAAAFVUHHHE95_8TKEzy6gJuTj8QYYS" />
      <br />
      {/* <Link to="/verification"> */}
      <div className="flex flex-col gap-4" >
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          إنشاء حساب
        </button>
      </div>
      {/* </Link> */}
    </form>
  </Card>
  )
}

export default RegisterUser