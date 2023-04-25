import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import BlogItem from './BlogItem/BlogItem';
import {BsChevronLeftMini, BsChevronRightMini} from "../../../../lib/@reacticons";
const BlogList = ({blogs}) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,blogs]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };
    return (
        <>
        <h1 className="text-3xl font-[600] mb-[30px] mx-2">أحدث المقالات</h1>
        <div className='blogList-wrap grid xl:grid-cols-3 gap-8 max-sm:grid-cols-1 sm:grid-cols-2 mx-5'>
            {currentItems.map((blog, index) => (
                <BlogItem key={index} blog={blog} />
            ))}
        </div>
        <ReactPaginate
        breakLabel={"..."}
        nextLabel={<BsChevronLeftMini />}
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel={<BsChevronRightMini />}
        breakClassName={"boder border-[1px] border-[#D4D3DD] bg-white w-8 h-[34px] flex justify-center items-center text-[var(--secondary)]  shadow-xl"}
        containerClassName={"pagination flex justify-center items-center my-4"}
        pageClassName={"boder border-[1px] border-x-0 border-[#D4D3DD] bg-white w-8 h-[34px] flex justify-center items-center hover:bg-[var(--primary)] text-[var(--secondary)] hover:text-white shadow-xl"}
        previousClassName={"p-2 bg-white rounded-r-xl boder border-[1px] border-[#D4D3DD] shadow-xl"}
        nextClassName={"p-2 bg-white rounded-l-xl boder border-[1px] border-[#D4D3DD] shadow-xl"}
        activeClassName={"!bg-[var(--secondary)] !text-white"}
        disabledClassName={"!bg-[#D4D3DD] !text-[var(--primary)] "}
    />
        </>
    );
};

export default BlogList;
