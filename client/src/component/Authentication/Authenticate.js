import React, { useEffect } from 'react'
import './Authenticate.css'
import Login from './Login';
import Registration from './Registration';

function Authenticate() {

        useEffect(()=>{
            const tabs = document.querySelectorAll('.tab_btn');
            const all_content = document.querySelectorAll('.tab_content');
        
            tabs.forEach((tab,index)=>{
                tab.addEventListener('click',(e)=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');

                    // var line =document.querySelector('.line');
                    // line.style.Width = e.target.offsetWidth+"px";
                    // line.style.Left = e.target.offsetLeft+"px";

                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                })
            })
        },[])


  return (
    <div className='main_container'>
        <div className='main_tab_box'>
            <div className='tabs'>
                <button className='tab_btn active'>Login</button>
                <button className='tab_btn'>Register</button>
                {/* <div className='line'></div> */}
            </div>
            <div className='tab_content_box'>
                <div className='tab_content active'>
                    <Login/>
                </div>
                <div className='tab_content'>
                    <Registration/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Authenticate