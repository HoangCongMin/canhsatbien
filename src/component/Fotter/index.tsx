import React from 'react'
import AvatarImage from '../../assets/handle_cert.png'
import { RiProfileLine } from 'react-icons/ri'
import { CiMail } from 'react-icons/ci'
import { BsDiagram3 } from 'react-icons/bs'
import Android from '../../assets/google-play.png'
import Ios from '../../assets/app-store.png'
import { AiFillHome } from 'react-icons/ai'
import ScrollToTop from 'react-scroll-to-top'
import { Link } from 'react-router-dom'
import { HiMapPin } from 'react-icons/hi2'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdFax, MdEmail } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineMail, AiFillNotification } from 'react-icons/ai'

export default function Fotter() {
  const Item_all = [
    { title: 'Thư điện tử', Link: 'mailto:banbientapcsb@gmail.com' },
    { title: 'Ý kiến bạn đọc', Link: '/' },
    { title: 'Sơ đồ trang', Link: '/' }
  ]

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
          <div className='flex w-[100%] justify-between items-center text-white font-[Roboto] max-[1165px]:flex-col'>
            <div className='w-[35%] flex items-center max-[1165px]:w-full max-[1165px]:justify-center '>
              <div className='px-[10px] py-[5px] border-r-[1px] border-white max-[400px]:border-none'>
                <Link to={'/'}>
                  <AiFillHome className=' text-white text-[25px]' />
                </Link>
              </div>
              {Item_all.map((item) => (
                <Link
                  to={item.Link}
                  className='text-[12px] px-[10px] py-[5px] border-r-[1px] max-[400px]:px-[3px] max-[400px]:border-none cursor-pointer	 border-white first:border-l-[1px] first:border-white'
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className='w-[50%] flex justify-end	max-[1165px]:w-full max-[1165px]:justify-center max-[553px]:flex-col max-[553px]:text-center'>
              {Item_tw0.map((item) => (
                <div className='first:border-l-[1px] max-[553px]:border-none'>
                  <div className='text-[12px] py-[5px] px-[10px] border-r-[1px] border-white max-[553px]:border-none'>
                    {item.title} {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto pt-5'>
        <div className='w-full flex justify-between items-center max-[1200px]:flex-col'>
          <div className='w-[75%] max-[1200px]:w-[100%]'>
            <div className='flex justify-between items-center'>
              <div className='w-full'>
                <p className='text-lg	font-medium	text-[#FFFFFFCC] font-sans line-clamp-2'>
                  TRANG THÔNG TIN ĐIỆN TỬ CỦA LỰC LƯỢNG CẢNH SÁT BIỂN VIỆT NAM
                </p>
              </div>
            </div>
            <div className='mt-2'>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	flex items-center'>
                <HiMapPin className='mr-1' />
                <span>Địa chỉ: Km số 6 + 825 Đại lộ Thăng Long, phường Tây Mỗ, quận Nam Từ Liêm, Thành phố Hà Nội</span>
              </p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal flex items-center'>
                <BsTelephoneFill className='mr-1 text-[11px]' />
                <span>Tel:84-69.567227</span>
              </p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal	flex items-center'>
                <MdFax className='mr-1' />
                <span>Fax: +84-69.567235</span>
              </p>
              <p className='text-sm	text-[#FFFFFFCC] font-normal flex items-center'>
                <MdEmail className='mr-1' />
                <span>Email: banbientapcsb@gmail.com</span>
              </p>
            </div>
          </div>
          <div className='w-[20%] max-[1200px]:w-[100%] max-[1200px]:mt-5'>
            <div className='w-full max-w-[263px] max-[1200px]:mb-2'>
              <img src={AvatarImage} alt='' className='w-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto pb-4'>
        <p className=' text-[#FFFFFFCC] text-[14px] flex items-center'>
          <BiWorld className='mr-1' />
          <span>Website: canhsatbien.vn * Cơ quan quản lý: Bộ Tư lệnh Cảnh sát biển </span>
        </p>
        <p className=' text-[#FFFFFFCC] text-[14px] flex items-center'>
          <AiFillNotification className='mr-1' />
          <span>Quyết định cấp phép hoạt động: 362/QÐ-CT, ngày 13/03/2013 của Tổng cục Chính trị QĐNDVN</span>
        </p>
      </div>
      <div className='w-[80%] m-auto '>
        <p className='text-center text-[#FFFFFFCC] text-[14px] py-4 border-t-[0.5px] border-stone-50'>
          ® Ghi rõ nguồn canhsatbien.vn khi phát hành lại thông tin từ trang thông tin điện tử này.
          <ScrollToTop
            className='bg-none'
            smooth
            viewBox='0 0 24 24'
            component={
              <img className='w-[25px] h-[25px] m-auto' src={'https://canhsatbien.vn/assets/img/icon-top.png'} alt='' />
            }
          />
        </p>
      </div>
    </div>
  )
}
