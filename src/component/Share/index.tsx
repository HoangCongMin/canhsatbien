import React from 'react'
import { AiFillLike } from 'react-icons/ai'

export default function Share() {
  return (
    <div className=' m-auto text-[#0000FF] flex items-center text-[13px] mt-4'>
      <AiFillLike className='w-[12%] text-[20px]' />
      <div>
        <span className=''>Bài viết, video, hình ảnh đóng góp cho chuyên mục gửi về</span>
        <span className='text-[#DA251C] ml-3 '>banbientapcsb@gmail.com</span>
      </div>
    </div>
  )
}
