import React, { useEffect, useState } from 'react'
import SideNav from './Navbars/SideNav'
import './Writeblog.css'
import uuid from 'react-uuid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Writeblog() {
    const [blogid,setBlogid] = useState('')
    const [uid,setUid] = useState('')
    const [subject,setSubject] = useState('')
    const [head,setHead] = useState('')
    const [content,setContent] = useState('')
    const [bfile,setBfile] = useState('')
    


    const location = useNavigate(); // usenavigator navigate to another pages

    const handleCreateBlog = async (e)=>{
        e.preventDefault()
        setBlogid(uuid().slice(0,3))

        const formData = new FormData()    // passing blog data via formData
        formData.append('id',blogid);
        formData.append('userid',uid);
        formData.append('blogtitle',head);
        formData.append('blogsubject',subject);
        formData.append('blogcontent',content);
        formData.append('file',bfile);
        try{
            const result = await  axios.post('http://localhost:8000/blog/createBlog',formData,{
                headers:{
                    'Content-Type' : 'multipart/form-data' //set up content type to multipart/form-data
                }
            });
            console.log(result.data);
            location('/Home')  //redirect to home page
            alert(result.data);
            
        }catch(error){
            alert(error)
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("userid")){
            location('/')
        }else{
            setUid( (JSON.parse(localStorage.getItem("userid") || " ")))
            setBlogid(uuid().slice(0,3))
            console.log(uid);
        }

    },[])

  return (
    <div className='create_blog_page'>
        <SideNav/>
        <div className='create_section'>
            <p className='create_sec_head'>Create Your Ideas<i class="fa-solid fa-feather"></i></p>
            <div className='under_line'>.</div>
            <div className='create_blog_box'>
                <label><i class="fa-regular fa-pen-to-square"></i>Subject Of Blog</label>
                <input type="text" onChange={(e)=>{setSubject(e.target.value)}} placeholder='Eg:Design,Game,Sports,etc...' />
            </div>
            <div className='create_blog_box'>
            <label><i class="fa-regular fa-pen-to-square"></i>Title of Blog</label>
                <input type="text" onChange={(e)=>{setHead(e.target.value)}}  placeholder='' />
                
            </div>
            <div className='create_blog_box'>
                <label><i class="fa-regular fa-pen-to-square"></i>Content about Blog</label>
                <textarea cols="20" rows="10" onChange={(e)=>{setContent(e.target.value)}} maxLength={1500} placeholder='Explain Your thoughts and Intentions' />
            </div>
            <div className='create_blog_box'>
                <label><i class="fa-solid fa-file-arrow-up"></i>Upload Blog Image</label>
                <input type="file" onChange={(e)=>{setBfile(e.target.files[0])}}/>
            </div>
            <div className='create_blog_btn'>
                <button onClick={handleCreateBlog}>Create<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Writeblog