import React from 'react'
import Manage from '../../assets/tang-qua-180746147.jpeg'

export default function posts() {
  return (
    <div className='cursor-pointer'>
      {/* <h1 className='text-[27px] font-bold hover:text-[#191970]'>
        Phó Chủ tịch Quốc hội Trần Quang Phương thăm và làm việc với Bộ Tư lệnh Cảnh sát biển
      </h1> */}
      <div className='overflow-hidden cursor-pointer relative group mt-2'>
        <img
          src={'https://canhsatbien.vn/upload/files/image/20230323/trao-thuong-danh-hieu-guong-mat-tre-145546235.jpg?h=343'}
          alt=''
          className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50'
        />
      </div>
      <div className='text-sm text-[#000] font-bold mt-3'>
      Tuyên dương Gương mặt trẻ tiêu biểu Cảnh sát biển năm 2022
      </div>
    </div>
  )
}
