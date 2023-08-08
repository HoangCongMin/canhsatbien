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
import { GetStatisticVisit, Getdatafalse } from '../../apis/GetHoatDongCSB'
import { useQuery } from '@tanstack/react-query'

export default function Fotter() {
  const Item_all = [
    { title: 'Thư điện tử', Link: 'mailto:banbientapcsb@gmail.com' },
    { title: 'Ý kiến bạn đọc', Link: '/comment' },
    { title: 'Sơ đồ trang', Link: '/SiteMap' }
  ]

  const Item_tw0 = [
    { title: 'Thành viên trực tuyến:', value: '8' },
    { title: 'Hôm nay:', value: '5000' },
    { title: 'Hôm qua:', value: '0' },
    { title: 'Tháng này:', value: '5000' }
  ]

  const { data: Visit } = useQuery({ queryKey: ['Visit'], queryFn: GetStatisticVisit })
  const { data: Visit_flase } = useQuery({ queryKey: ['Visit_false'], queryFn: Getdatafalse })




  return (
    <div className='w-[80%]  max-w-screen-2xl m-auto bg-[#0066bc] '>
      <div className='w-full m-auto bg-[#0066bc] '>
        <div className='w-[100%] m-auto  max-w-screen-2xl pt-3'>
          <div className='flex w-[95%] m-auto justify-between items-center max-[1372px]:flex-col text-white font-[Roboto]'>
            <div className='w-[35%] flex items-center max-[1250px]:w-full max-[1250px]:justify-center max-[417px]:flex-col'>
              {Item_all.map((item,i) => (
                <Link
                key={i}
                  className='border-b pb-[2px] mr-4 max-[417px]:w-full max-[417px]:text-center max-[417px]:m-auto '
                  to={item.Link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className='w-[50%] flex justify-end		max-[1372px]:w-full max-[1372px]:justify-center max-[686px]:flex-col max-[686px]:text-center max-[686px]:mt-2'>
              {Visit_flase?.data.map((item: any) => {
                return (
                  <>
                    {item.name === "Online_Member" && (
                      <div className='border-b pb-[2px] ml-4 max-[686px]:m-auto max-[686px]:w-full'>
                        <span> Số người online:</span> <span> {item.published === true ? item.value : Visit && 0}</span>
                      </div>
                    )}
                  </>
                )
              })}

              {Visit_flase?.data.map((item: any) => {
                return (
                  <>
                    {item.name === "Visit_Virtual_Today" && (
                      <div className='border-b pb-[2px] ml-4  max-[686px]:m-auto max-[686px]:w-full'>
                        <span> Hôm nay:</span> <span> {item.published === true ? item.value : Visit && Visit?.data.countToday}</span>
                      </div>
                    )}
                  </>
                )
              })}

              {Visit_flase?.data.map((item: any) => {
                return (
                  <>
                    {item.name === "Visit_Virtual_Yesterday" && (
                      <div className='border-b pb-[2px] ml-4  max-[686px]:m-auto max-[686px]:w-full'>
                        <span> Hôm qua:</span> <span>{item.published === true ? item.value : Visit && Visit?.data.countYesterday}</span> 
                      </div>
                    )}
                  </>
                )
              })}

              {Visit_flase?.data.map((item: any) => {
                return (
                  <>
                    {item.name === "Visit_Virtual_Month" && (
                      <div className='border-b pb-[2px] ml-4  max-[686px]:m-auto max-[686px]:w-full'>
                        <span> Tháng:</span> <span> {item.published === true ? item.value : Visit && Visit?.data.countMonth}</span>
                      </div>
                    )}
                  </>
                )
              })}

            </div>
          </div>
        </div>
      </div>
      <div className='w-[95%]  max-w-screen-2xl m-auto pt-3'>
        <div className='w-full flex justify-between mt-2 max-[1200px]:flex-col'>
          <div className='w-[75%] max-[1200px]:w-[100%]'>
            <div className='flex justify-between items-center'>
              <div className='w-full flex items-center'>
                <Link to={'/'}>
                  <AiFillHome className=' text-white text-[25px]' />
                </Link>
                <p className='text-lg	font-medium	text-[#FFFFFFCC] font-sans line-clamp-2 ml-1'>
                  TRANG THÔNG TIN ĐIỆN TỬ CỦA LỰC LƯỢNG CẢNH SÁT BIỂN VIỆT NAM
                </p>
              </div>
            </div>
            <div>
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
      <div className='w-[95%]  max-w-screen-2xl m-auto pb-4'>
        <p className=' text-[#FFFFFFCC] text-[14px] flex items-center'>
          <BiWorld className='mr-1' />
          <span>Website: canhsatbien.vn * Cơ quan quản lý: Bộ Tư lệnh Cảnh sát biển </span>
        </p>
        <p className=' text-[#FFFFFFCC] text-[14px] flex items-center'>
          <AiFillNotification className='mr-1' />
          <span>Quyết định cấp phép hoạt động: 362/QÐ-CT, ngày 13/03/2013 của Tổng cục Chính trị QĐNDVN</span>
        </p>
      </div>
      <div className='w-[95%]  max-w-screen-2xl m-auto '>
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

// className='text-[12px] px-[10px] py-[5px] border-r-[1px] max-[400px]:px-[3px] max-[400px]:border-none cursor-pointer 	 border-white first:border-l-[1px] first:border-white'
// className='text-[12px] py-[5px] px-[10px] border-l-[1px]   border-white max-[553px]:border-none'
