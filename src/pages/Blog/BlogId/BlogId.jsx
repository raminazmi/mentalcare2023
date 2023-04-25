import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../../data/data";
import "./styles.css";
import { Link } from "react-router-dom";
import EmptyList from "../components/EmptyList/EmptyList";
import Chip from "../../../components/Chip/Chip";
import {BsChevronRightMini,FaShareMini} from "../../../lib/@reacticons"
import Taps from "../components/Taps/Taps";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faChevronRight,faShare} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faChevronRight,faShare} from '@fortawesome/free-solid-svg-icons';

const BlogId = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div className="flex justify-center ">
      {blog ? (
        <div className="blog-wrap Container mx-auto lg:px-40 md:px-10">
          <header className="grid grid-cols-3  items-center">
          <div className="blog-goBack">
          <Link to="/blog" className="flex items-center ">
          <span>
            <BsChevronRightMini /> </span><span>الرجوع</span>
        </Link>
        </div>
            <h1 className="blog-title text-center font-medium max-sm:text-xl font-bold">{blog.title}</h1>
          </header>
          <div
            className="bg-cover bg-center h-[380px] relative max-sm:h-[250px] flex justify-start gap-2 pt-2 pr-2 "
            style={{ backgroundImage: `url(${blog.cover})` }}
          >
          {blog.subCategory.map((interests, i) => (
            <div key={i}>
            <Chip label={interests}  contentClassName="ChipBlog bg-gradient-to-tr from-[#485563] to-[#29323c] text-white"/>
            </div>
          ))}
        </div>
          <div className="flex justify-between items-center mt-3 mx-2 min-sm:mx-5 max-sm:mx-5 text-[#858484] font-bold">
            <div className="flex justify-center gap-3 items-center">
              <p>
                نشرت بواسطة{" "}
                <Link
                  className="mr-1 text-blue-600 after:content ..."
                  to="/blog"
                >
                  {blog.authorName}
                </Link>
              </p>
              <Link
                  className="text-blue-600 after:content ..."
                  to="/blog"
                ><FaShareMini /></Link>
            </div>
            <p className="blog-date text-[var(--primary)] font-bold">
              {blog.createdAt}
            </p>
          </div>
          <div className="flex justify-between items-start gap-10  mt-4 mx-2 mb-12 sm:mx-5 max-sm:mx-5  max-sm:block  ">
            <p className="blog-desc text-justify text-justify inter-word ">
              {blog.description}
            </p>
            <div className="max-w-[250px] min-w-[250px] h-[300px]  mt-[2.5rem] pb-2 drop-shadow-md max-sm:max-w-[100%] ">
              <Taps />
            </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default BlogId;
