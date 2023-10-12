import React, { useEffect, useState } from 'react'
import SideNav from './Navbars/SideNav'
import './Userpage.css'
import { Link } from 'react-router-dom'
import Blog from './Blog'
import axios from 'axios'


function Userpage() {
    const uid = ((JSON.parse(localStorage.getItem("userid") || " ")))

    const [data,setData] = useState();
    const [user,setUser] = useState();
    const [count,setCount] = useState();

    const personalBlog = async ()=>{
        const result = await axios.get('http://localhost:8000/blog/getpersonalBlogs/'+uid)
        console.log(result.data);
        setCount(result.data.length);
        setData(result.data)
    }
    const userData = async ()=>{
        const result = await axios.get('http://localhost:8000/blog/getpersonalData/'+uid)
        console.log(result.data);
        setUser(result.data)
    }

    useEffect(()=>{
        personalBlog()
        userData()
    },[])

  return (
    <div className='user_page'>
        <SideNav/>
        <div className='user_page_sec'>
            {
                user?.map((item)=>(
                    <div className='profile_box'>
                        <img src={`./uploads/profile/${item.userimage}`} alt="" />
                        <div className='count_blog_sec'>
                            <p className='count_blog'>{count}</p>
                            <p className='count_text'>blogs</p>
                        </div>
                        <p className='profile_user_name'>{item.username}</p>
                    </div>
                ))
            }
            
            <div className='profile_edit_sec'>
                <Link className='Link_btn_profile' to={'/Edituser/'+uid}>Edit profile</Link>
                <Link className='Link_btn_profile' to={'/CreateBlog'}>Create blog</Link>
            </div>
            <div className='user_created_blogs'>
                <Blog data={data}/>
            </div>
        </div>
    </div>
  )
}

export default Userpage