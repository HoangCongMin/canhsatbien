import React from 'react'
import AvatarImage from '../../assets/handle_cert.png'
import { RiProfileLine } from 'react-icons/ri'
import { CiMail } from 'react-icons/ci'
import { BsDiagram3 } from 'react-icons/bs'
import Android from '../../assets/google-play.png'
import Ios from '../../assets/app-store.png'
import { AiFillHome } from 'react-icons/ai'

export default function Fotter() {
  const Item_all = [{ title: 'Thư điện tử' }, { title: 'Ý kiến bạn đọc' }, { title: 'Sơ đồ trang' }]

  const Item_tw0 = [
    { title: 'Thành viên trực tuyến:', value: '8' },
    { title: 'Hôm nay:', value: '5000' },
    { title: 'Hôm qua:', value: '0' },
    { title: 'Tháng này:', value: '5000' }
  ]
  return (
    <div className='w-full bg-[#0066bc] '>
      <div className='w-full m-auto bg-[#ff7f00] '>
        <div className='w-[80%] m-auto flex items-center'>
          <div className='w-[5%] '>
            <AiFillHome className='m-auto text-white' />
          </div>
          <div className='flex w-[90%] justify-between items-center'>
            <div className='w-[30%] flex justify-between border-r-[1px] border-white'>
              {Item_all.map((item) => (
                <div className='text-white text-[12px] text-center w-[35%] cursor-pointer border-l-[1px] border-white'>{item.title}</div>
              ))}
            </div>
            <div className='w-[50%] flex justify-between'>
              {Item_tw0.map((item) => (
                <div className='flex items-center' >
                  <div className='text-white text-[12px] cursor-pointer'>{item.title}</div>
                  <div className='text-white'>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto pt-10 pb-10 border-b-[0.5px] border-stone-50 max-w-screen-2xl'>
        <div className='w-full flex justify-between items-center max-[1200px]:flex-col'>
          <div className='w-[45%] max-[1200px]:w-[100%]'>
            <div className='flex justify-between items-center'>
              <div className='w-[30%]'>
                <img src={AvatarImage} alt='' className='w-full' />
              </div>
              <div className='w-[68%]'>
                <p className='text-lg	font-medium	text-[#FFFFFFCC] font-sans line-clamp-2'>
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
              <p className='text-sm	text-[#ffffffe8] font-normal	'>Tel:84-69.567227</p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	'>Fax: +84-69.567235</p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	'>Email: banbientapcsb@gmail.com</p>
            </div>
          </div>
          <div className='w-[50%] max-[1200px]:w-[100%] max-[1200px]:mt-5'>
            <div className='w-[90%] max-[650px]:flex-col m-auto flex justify-between text-center'>
              <div className='w-[23%] max-[650px]:w-[100%]'>
                <div className='w-[70%] m-auto'>
                  <RiProfileLine className='text-[#FFFFFFCC] text-xl m-auto' />
                  <p className='text-sm text-white mt-3'>Giới thiệu cổng TTDT cảnh sát biển</p>
                </div>
              </div>
              <div className='w-[23%] max-[650px]:w-[100%]'>
                <div className='w-[70%] m-auto'>
                  <div className='text-[#FFFFFFCC] text-xl m-auto h-[21px]	'>@</div>
                  <p className='text-sm text-white mt-3'>Thư điện tử cảnh sát biển</p>
                </div>
              </div>
              <div className='w-[23%] max-[650px]:w-[100%]'>
                <div className='w-[70%] m-auto'>
                  <CiMail className='text-[#FFFFFFCC] text-xl m-auto	' />
                  <p className='text-sm text-white mt-3'>Liên hệ</p>
                </div>
              </div>
              <div className='w-[23%] max-[650px]:w-[100%]'>
                <div className='w-[70%] m-auto'>
                  <BsDiagram3 className='text-[#FFFFFFCC] text-xl	m-auto' />
                  <p className='text-sm text-white mt-3'>Sơ đồ TTDT cảnh sát biển</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between mt-10 max-[550px]:flex-col'>
              <div>
                <div className='text-sm text-[#FFFFFFCC]'>Tải ứng dụng:</div>
                <h5 className='text-[13px] text-white'>CỔNG THÔNG TIN ĐIỆN TỬ CẢNH SÁT BIỂN</h5>
              </div>
              <div className='flex justify-between items-center max-[550px]:justify-start max-[550px]:mt-5'>
                <img src={Android} alt='' className='w-[120px] h-[39px]' />
                <img src={Ios} alt='' className='w-[120px] h-[39px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto'>
        <p className='text-center text-[#FFFFFFCC] text-[14px] py-4'>
          Ghi rõ nguồn 'Cổng Thông tin điện tử Chính phủ' hoặc 'www.chinhphu.vn' khi phát hành lại thông tin từ các
          nguồn này.
        </p>
      </div>
    </div>
  )
}
