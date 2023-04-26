import React from 'react'

const Product = () => {
  return (
    <div className='grid grid-cols-1 my-10 xl:grid-cols-2'>
      <div className='border-t-2 border-red-600'>
        <div className='flex items-center justify-between py-4'>
          <h3 className='font-bold text-lg text-[#031739]'>Quốc Phòng - An Ninh</h3>
          <a href='#'>Xem nhiều</a>
        </div>
        <div className='flex gap-4 h-[172px]'>
          <img src='https://canhsatbien.vn/upload/files/image/20230403/tang-qua-180746147.jpg?w=400' alt='' />
          <div className=''>
            <h4 className='py-4 text-lg font-semibold'>
              Phó Chủ tịch Quốc hội Trần Quang Phương thăm và làm việc với Bộ Tư lệnh Cảnh sát biển
            </h4>
            <span>
              Canhsatbien.vn - Ngày 03/4, đoàn công tác của Quốc hội do Thượng tướng Trần Quang Phương - Ủy viên Trung
              ương Đảng, Phó chủ tịch Quốc hội làm trưởng đoàn, đã đến thăm và làm việc với Bộ Tư lệnh Cảnh sát biển.
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Product
