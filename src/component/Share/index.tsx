import React from 'react'
import {AiFillLike} from'react-icons/ai'

export default function Share() {
  return (
    <div className='w-[70%] m-auto flex items-center justify-center	 text-[#0000FF] text-[13px] mt-4'>
       <AiFillLike className='ml-3'/>
       <p className='ml-3'>Bài viết, video, hình ảnh đóng góp cho chuyên mục gửi về</p>
       <span className='text-[#DA251C] ml-3 '>banbientapcsb@gmail.com</span>
    </div>
  )
}
