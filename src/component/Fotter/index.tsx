import React from 'react'
import AvatarImage from '../../assets/handle_cert.png'

export default function Fotter() {
  return (
    <div className='w-full bg-[#0066bc]'>
      <div className='w-[80%] m-auto'>
        <div className='w-full flex justify-between'>
          <div className='w-[45%]'>
            <div className='flex justify-between items-center'>
              <div className='w-[30%]'>
                <img src={AvatarImage} alt='' className='w-full' />
              </div>
              <div className='w-[68%]'>
                <p className='text-lg	font-medium	text-[#FFFFFFCC] font-sans'>
                  © TRANG THÔNG TIN ĐIỆN TỬ CỦA LỰC LƯỢNG CẢNH SÁT BIỂN VIỆT NAM
                </p>
                <p className='text-sm	text-[#FFFFFFCC] font-normal	'>
                  Tổng Giám đốc:<strong> Nguyễn Hồng Sâm </strong>
                </p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	'>
                Địa chỉ: Km số 6 + 825 Đại lộ Thăng Long, phường Tây Mỗ, quận Nam Từ Liêm, Thành phố Hà Nội
              </p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	'>Tel:84-69.567227</p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	'>Fax: +84-69.567235</p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	'>Email: banbientapcsb@gmail.com</p>
            </div>
          </div>
          <div className='w-[50%]'>
            <div className='w-[90%] m-auto flex justify-between'>
              <div>ma</div>
              <div>ma</div>
              <div>ma</div>
              <div>ma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
