import React from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SideNav() {
  const location = useNavigate('')
  const handleLogout = ()=>{
    console.log("logout");
    localStorage.removeItem("userid")
    // location('/')
  }
  return (
    <div className='sidenav_main'>
        <p className='side_head'>Blog Box</p>
        <div className='side_list'>
                <Link to={'/Home'} className='item_list'><i class="fa-solid fa-house"></i>Home</Link>
                <Link to={'/CreateBlog'} className='item_list'><i class="fa-solid fa-pen"></i>Write</Link>
                <Link to={'/User'} className='item_list'><i class="fa-solid fa-user"></i>User</Link>
                <Link to={'/'} onClick={handleLogout} className='item_list'><i class="fa-solid fa-right-from-bracket"></i>LogOut</Link>
        </div>
    </div>
  )
}

export default SideNav