import React from 'react';
import browser from '../../../../assets/blog/browser.png';

const EmptyList = () => (
  <div>
  <div className='flex justify-center items-center'>
    <img className='max-w-[320px] w-full max-sm:w-[260px]' src={browser} alt='empty' />
  </div>
  <h1 className='text-center my-3 font-semibold'>نأسف لا يوجد مقالات </h1>
</div>
);

export default EmptyList;
