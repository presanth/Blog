import React,{useState,useEffect} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const location = useNavigate()
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('')

  const handleLogin = async (e)=>{
    e.preventDefault()
    const body={
      email,
      pass
    }
    
      const result = await axios.post('http://localhost:8000/blog/userLogin',body)
      if(result.data.message == "login success"){
        localStorage.setItem("userid",JSON.stringify(result.data.data.id))
        console.log(result.data.data);
        location('/Home')
        alert(result.data.message);
      }else{
        alert(result.data.message)
      }
  }
  return (
    <div className='login_box'>
      <p className='r_head'>SignIn</p>
      <input type="text" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="text" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
      <button className='login_btn' onClick={handleLogin}>submit</button>
    </div>
  )
}

export default Login