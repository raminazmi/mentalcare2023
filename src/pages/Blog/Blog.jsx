import React, { useState , useEffect } from 'react';
import { blogList ,CategoryBlog } from '../../data/data';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import BlogList from './components/BlogList/BlogList';
import EmptyList from './components/EmptyList/EmptyList';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const searchText = (e) => {
        setSearchTerm(e.target.value);
    };
useEffect(() => {
    const results = blogList.filter(blog => {
        return Object.keys(blog).some(key =>
    blog.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) 
    || blog.category.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) 
    || blog.authorName.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()))
    }); 
    setSearchResult(results);
},[searchTerm]);
    return (
        <div>
            <br />  <br />  <br />  <br />
            <div className='lg:px-[180px]'>
                {/* Search Bar */}
                <div className='flex justify-center gap-3 items-center my-6 max-sm:grid  '>
                    <SearchBar
                    searchKey1={searchTerm}
                    searchText={searchText}
                    />
                    <CategoryFilter
                    searchKey1={searchTerm}
                    searchCategory={searchText}
                    Category={CategoryBlog}
                    />
                </div>
                {/* Blog List & Empty View */}
                {!searchResult.length ? <EmptyList /> : <BlogList blogs={searchResult} />}
            </div>
            <br />  <br />  <br />
        </div>
    )
}
export default Blog