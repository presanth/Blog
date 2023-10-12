import React, { useEffect, useState } from 'react'
import './Edituser.css'
import SideNav from './Navbars/SideNav'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edituser() {
    const [previewfile, setPreviewFile] = useState();
    const [file, setFile] = useState();
    const [newfile, setNewfile] = useState();
    const [Ename, setEname] = useState('');
    const [eemail, setEemail] = useState();
    const [epassword, setEpassword] = useState();

    const params = useParams();
    function handlePreviw(e) {
        setNewfile(e.target.files[0])
        setPreviewFile(URL.createObjectURL(e.target.files[0]));
    }


    const handleUpdate = async (e)=>{
        const result = await axios.get('http://localhost:8000/blog/getpersonalData/'+params.id)
        console.log(result.data)
        setEname(result.data[0].username)
        setEemail(result.data[0].useremail)
        setEpassword(result.data[0].userpassword)
        setFile(result.data[0].userimage)
    }
    console.log(file);
    useEffect(()=>{
        handleUpdate()
    },[])
  return (
    <div className='edit_user_section'>
        <SideNav/>
        <div className='edit_user_box'>
            <div className='edit_user_form'>
                <p className='edit_head'>Edit profile<i class="fa-regular fa-pen-to-square"></i></p>
                <div className='under_line'>.</div>
                <div className='edit_image_preview'>
                    <img src={previewfile ? previewfile : `../uploads/profile/${file}`} alt="" />
                    <input type="file"  onChange={handlePreviw}/>
                </div>
                <div className='edit_form_input'>
                    <label><i class="fa-regular fa-user"></i>Name</label>
                    <input type="text" value={Ename} onChange={(e)=>setEname(e.target.value)}/>
                </div>
                <div className='edit_form_input'>
                    <label><i class="fa-regular fa-envelope"></i>Email</label>
                    <input type="text" value={eemail} onChange={(e)=>setEemail(e.target.value)}/>
                </div>
                <div className='edit_form_input'>
                    <label><i class="fa-solid fa-lock"></i>Password</label>
                    <input type="text" value={epassword} onChange={(e)=>setEpassword(e.target.value)}/>
                </div>
                <div className='edit_form_button'>
                    <button disabled>Edit</button>
                    function not allowded
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edituser