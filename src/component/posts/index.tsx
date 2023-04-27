import React from 'react'
import Manage from '../../assets/tang-qua-180746147.jpeg'

export default function posts() {
  return (
    <div className='cursor-pointer'>
      <h1 className='text-[27px] font-bold hover:text-[#191970]'>
        Phó Chủ tịch Quốc hội Trần Quang Phương thăm và làm việc với Bộ Tư lệnh Cảnh sát biển
      </h1>
      <div className='overflow-hidden cursor-pointer relative group mt-2'>
        <img src={Manage} alt='' className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50' />
      </div>
      <div className='text-sm text-[#3b4e68] mt-3'>
        (Chinhphu.vn) - Sáng 25/4 tại Trụ sở Chính phủ, Thủ tướng Phạm Minh Chính chủ trì cuộc họp Thường trực Chính phủ
        với các bộ
      </div>
    </div>
  )
}
