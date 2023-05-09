import React from 'react'
import Content_Same from '../../component/Content_Same'
import Box_Call from '../../component/Box_Call'

export default function Post_detail() {
  return (
    <div className='w-full max-w-screen-2xl'>
        <div className='w-full bg-[#F6F6F6] py-3 px-2 flex items-center'>
          <div className='bg-[#DA251C] h-7 w-1'></div>
          <div className='font-bold ml-2 text-[17px] uppercase mt-[2px] hover:text-[#191970] cursor-pointer '>
            Cục Chính trị
          </div>
        </div>

        <div className='w-[100%] m-auto my-7 flex'>
          <Box_Call />

          <img
            className='w-[90%]'
            src={'https://cdn.lawnet.vn/uploads/tintuc/2022/11/29/canh-sat-bien-viet-nma.jpg'}
            alt=''
          />
        </div>
        <div className='text-[#838383] text-[15px] font-[Roboto] my-3'>08:48 | 09/02/2023</div>
        <p className='text-[14px] text-[#3B4E68]'>
          - Cục Đối ngoại Bộ Quốc phòng là cơ quan quản lý nhà nước về hội nhập quốc tế và đối ngoại quốc phòng của Quân
          đội, thực hiện chức năng tham mưu cho Thường vụ Quân ủy Trung ương, Bộ trưởng Bộ Quốc phòng về chủ trương,
          phương hướng và biện pháp của công tác hội nhập quốc tế và đối ngoại quốc phòng; chỉ đạo, hướng dẫn và quản lý
          các hoạt động đối ngoại quốc phòng của Quân đội; lập kế hoạch và tổ chức các hoạt động đối ngoại quốc phòng
          được phân công; là đại diện của Bộ Quốc phòng trong quan hệ với đại diện các nước, các tổ chức quốc tế về lĩnh
          vực quốc phòng.
        </p>
        <div className='pt-4 pb-2'>
          <strong className='text-[16px] font-[Roboto] hover:text-[#191970] cursor-pointer'>Ngày truyền thống:</strong>{' '}
          <span className='text-[#838383] text-[15px] font-[Roboto] ml-1'>28/5/1964.</span>
        </div>
        <div className='pt-4 pb-2'>
          <strong className='text-[16px] font-[Roboto] hover:text-[#191970] cursor-pointer'>
            Truyền thống vẻ vang:
          </strong>
          <p className='text-[#838383] text-[15px] font-[Roboto] text-center py-1'>
            “TRUNG THÀNH - MƯU LƯỢC - ĐOÀN KẾT - CHỦ ĐỘNG - SÁNG TẠO”
          </p>
        </div>
        <div className='pt-3 pb-2'>
          <strong className='text-[16px] font-[Roboto] hover:text-[#191970] cursor-pointer'>
            Phần thưởng cao quý:
          </strong>{' '}
          <p className='text-[#3B4E68]  text-[15px] font-[Roboto]'>- Huân chương Quân công hạng Nhì (1984);</p>
          <p className='text-[#3B4E68]  text-[15px] font-[Roboto]'>
            - 3 Huân chương Chiến công (hạng Nhất, hạng Nhì, hạng Ba)…
          </p>
        </div>
        <div className='pt-3 pb-2'>
          <p className='font-bold text-[16px] uppercase mt-[2px] hover:text-[#191970] cursor-pointer text-right'>
            Cổng TTĐT Cảnh Sát Biển
          </p>
        </div>
      <div className='w-full m-auto mb-14 max-w-screen-2xl'>
        <Content_Same />
      </div>
    </div>
  )
}
