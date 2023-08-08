import React from 'react'
import { BiLike } from 'react-icons/bi'

export default function Share() {
  return (
    <div className='w-full  m-auto text-[#0000FF] flex justify-center text-[13px] mt-4 rounded-md border-dashed border-[0.5px] p-2 border-[#0000FF]'>
      <BiLike className='w-[3%] text-[16px] min-w-[20px]' />
      <div className='text-center	'>
        <span className=''>Bài viết, video, hình ảnh đóng góp cho chuyên mục gửi về</span>
        <span className='text-[#DA251C] ml-3 '>banbientapcsb@gmail.com</span>
      </div>
    </div>
  )
}
