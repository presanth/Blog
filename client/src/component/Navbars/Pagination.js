import React, { useEffect } from 'react'
import './Pagination.css'

function Pagination({postPerPage,totalPost,paginate}) {
    useEffect(()=>{
        const page = document.querySelectorAll('.page_item');
        page.forEach((btn,index)=>{
        btn.addEventListener('click',(e)=>{
            page.forEach(btn=>{btn.classList.remove('active')});
            btn.classList.add('active')
        })
    })

    })

    const pageNumber = [];

    for(let i=1;i<= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i);
    }




  return (
    <div className='pagination_bar'>
        <ul className='pagination_bar_sec'>
            {
                pageNumber?.map(number=>(
                    <li key={number} onClick={()=>paginate(number)}
                    className='page_item'>
                        {number}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination