import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './Register.css'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'

function Registration() {

    const location = useNavigate('');

    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [file,setFile] = useState('')


    const handleUpload = async (e)=>{    // register data
        e.preventDefault()
        setId(uuid().slice(0,3))

        const formData = new FormData()    // upload image
        formData.append('id',id)
        formData.append('username',name)
        formData.append('useremail',email)
        formData.append('userpassword',password)
        formData.append('file',file)
        try{
            const result = await  axios.post('http://localhost:8000/blog/register',formData,{
                headers:{
                    'Content-Type' : 'multipart/form-data' //set up content type to multipart/form-data
                }
            });
            
            console.log(result.data);
            localStorage.setItem("userid",JSON.stringify(id))
            location('/Home')
            alert(result.data);
            
        }catch(error){
            alert(error)
        }
    }
    useEffect(()=>{
        setId(uuid().slice(0,3))
    },[])
  return (
        <div className='registration_box'>
            <p className='r_head'>Register</p>
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
            <input type="file" className='custom-file-input' onChange={(e)=>setFile(e.target.files[0])}/>
            <button className='register_btn' onClick={handleUpload}>submit</button>
        </div>
  )
}

export default Registration