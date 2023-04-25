import React from 'react';

function CategoryFilter({ searchKey2,searchCategory, Category}) {
  
  return (
    <div className='xl:max-w-[350px] md:min-w-[300px]'>
    <div className="relative">
    <select
    className="max-xl:w-[350px] md:min-w-[300px] appearance-none focus:shadow-outline hover:border-gray-500 cursor-pointer rounded-md bg-white py-3.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 "
    value={searchKey2}
    onChange={searchCategory.bind(this)}
  >
  <option value="الموضوع" className='hidden'>مجالات الاهتمام
  </option>
    {Category.map((page) => (
      <option key={page.id} >
        {page.category}
      </option>
    ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-[var(--primary)] ">
  <svg className="fill-current h-8 w-8 select-arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4z"/></svg>
</div>
  </div>
 </div>
  )
}

export default CategoryFilter;