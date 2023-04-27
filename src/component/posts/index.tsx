import React from 'react'
import Manage from'../../assets/tang-qua-180746147.jpeg'

export default function posts() {
  return (
    <div className='cursor-pointer'>
      <h1 className='text-[27px] font-bold'>Phó Chủ tịch Quốc hội Trần Quang Phương thăm và làm việc với Bộ Tư lệnh Cảnh sát biển</h1>
      <img src={Manage} alt="" className='w-full' />
      <div className='text-sm text-[#3b4e68]'>
      (Chinhphu.vn) - Sáng 25/4 tại Trụ sở Chính phủ, Thủ tướng Phạm Minh Chính chủ trì cuộc họp Thường trực Chính phủ với các bộ, ngành và 5 ngân hàng thương mại...
      </div>
    </div>
  )
}
