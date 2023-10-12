import React from 'react'
import './Blog.css'

function Blog({data}) {

  
  return (
    <>
      {
        data?.map((item)=>(
          <div className='blog_box'>
              <div className='blog_head_box'>
                  <p className='blog_head'>{item.blogtitle}</p>
              </div>
              <img src={`./uploads/blog/${item.blogimage}`} alt="" className='blog_img'/>
              <div className='blog_sub_box'>
                  <p className='blog_sub'>{item.blogsubject}</p>
                  <img src="./uploads/profile/download.jpg" alt="" className='auther_profile'/>
                  <p className='blog_auther'>name auther</p>
              </div>

              <div className='blog_content_box'>
                  <p className='blog_content'>{item.blogcontent.slice(0,200)+"Read More....."}</p>
              </div>
          </div>
        ))

      }
    </>
        

  )
}

export default Blog