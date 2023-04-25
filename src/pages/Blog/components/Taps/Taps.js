import { useState } from 'react';
import React from 'react';

const Taps = () => {
    const [selectedTab, setSelectedTab] = useState(1);
const tabs = [
  { id: 1, title: 'مقالات', content: 'العقل السليم في الجسم السليم' },
  { id: 2, title: 'معلومات', content: '' },
];
    return (
<div className="w-full">
  <div className="border-b-2 border-[#2289FF]">
    <nav className="-mb-px flex" aria-label="Tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            selectedTab === tab.id
              ? 'border-[#2289FF] text-white bg-[#2289FF] rounded-t-sm p-[1px]'
              : 'border-transparent  text-[#00325C] hover:text-[#00325C] hover:border-[#2289FF] hover:bg-[#E8E8E8]'
          } whitespace-nowrap py-2 px-3 border-b-2 font-medium text-md`}
          onClick={() => setSelectedTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </nav>
  </div>
  <div>
    {tabs.map((tab) => (
      <div
        key={tab.id}
        className={`${
          selectedTab === tab.id ? 'block' : 'hidden'
        } px-4 py-5 sm:p-6 bg-[#F4F7FA] text-[var(--primary)]`}
      >
        {tab.content}
      </div>
    ))}
  </div>
</div>
);
};

export default Taps;