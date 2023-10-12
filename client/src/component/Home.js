import React, { useEffect, useState } from 'react'
import SideNav from './Navbars/SideNav'
import './Home.css'
import Blog from './Blog'
import Pagination from './Navbars/Pagination'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {

  const location = useNavigate('')

  const [blogs,setBlogs] = useState([])

  const [postPerpage,setPostPerpage] = useState(10)
  const [currentPage,setCurrentPage] = useState(1)

  const fetchBlog = async (e)=>{
    try{
      const result = await axios.get('http://localhost:8000/blog/getAllBlogs');
      setBlogs(result.data)


    }catch(error){
      alert(error);
      console.log(error);
    }
  };

  
  useEffect(()=>{
    
     if(!localStorage.getItem("userid")){
      location('/')
      }else{
        fetchBlog()
 }

  },[])

  // current posts
  const indexOfLastPost = currentPage * postPerpage;
  const indexOfFirstPost = indexOfLastPost - postPerpage;
  const CurrentPosts = blogs.slice(indexOfFirstPost,indexOfLastPost);

  // change page

  const paginate = (pagenumber)=>{
    setCurrentPage(pagenumber)
  }




  return (
    <div className='home_container'>
        <SideNav/>
        <div className='home_content'>
            <div className='search_box'>
                <input type="text" placeholder='Search Content' className='search_inp' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='home_blog'>
                <Blog data={CurrentPosts}/>
            </div>
            <div className='home_pagination'>
              <Pagination postPerPage={postPerpage} totalPost={blogs.length} paginate={paginate}/>
            </div>
            
        </div>
    </div>
  )
}

export default Home