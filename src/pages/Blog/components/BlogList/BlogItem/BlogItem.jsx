import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../../../components/Chip/Chip';
import {BsChevronLeftMini} from '../../../../../lib/@reacticons';
import "../../../BlogId/styles.css";
const BlogItem = ({
    blog: {
        description,
        title,
        createdAt,
        authorName,
        authorAvatar,
        cover,
        category,
        id,
        key
    },
}) => {
    return (
        <div key={key} className="flex flex-col bg-white rounded-lg drop-shadow-md">
        <div className="relative">
        <div
        className="bg-cover bg-center w-full h-64 rounded-t-lg pt-1.5 pr-1.5"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <Chip label={category} contentClassName="ChipBlogCard bg-[#485563]  text-white"/>
        </div>
        </div>
        <div className="py-2 px-3">
            <h3 className="text-lg flex-1 font-semibold mt-2 mb-3">{title}</h3>
            <p className="text-gray-600 max-h-[45px] text-sm mb-2 line-clamp-2 overflow-hidden">{description}</p>
            <footer className="flex items-center justify-between mb-3 mt-7">
                <div className="flex items-center ">
                    <img className="w-[42px] h-[42px] object-cover rounded-full " src={authorAvatar} alt="avatar" />
                    <div className="text-sm mx-2">
                        <h6 className="font-bold">{authorName}</h6>
                        <p className="text-gray-600 font-semibold">{createdAt}</p>
                    </div>
                </div>
                <Link className="hover:text-[var(--primary)] text-[#2289FF] font-bold py-1.5 px-3 rounded-md flex justify-center items-center gap-1" to={`/blog/${id}`}>
                    اقرأ المزيد  <BsChevronLeftMini/>
                </Link>
            </footer>
            </div>
        </div>
    );
};

export default BlogItem;
