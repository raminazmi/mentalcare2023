import React from 'react';

const Chip = ({ label, contentClassName = "" }) => {
return (
  <p
  className={`text-[12px] font-[500] bg-gradient-to-tl from-[#ECF8EF] to-[#ECF8EF]
    text-[#43B966] px-2 py-1 rounded-[5px] w-fit shadow-sm ${contentClassName}`}>
    {label}
</p>
// bg-gradient-to-tr from-[#485563] to-[#29323c]
// bg-gradient-to-tr from-[#005C97] to-[#363795]
// bg-gradient-to-tr from-[#457fca] to-[#5691c8]
);}
export default Chip;

