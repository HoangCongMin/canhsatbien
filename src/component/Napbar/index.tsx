import React from 'react'
import BG_Image from '../../assets/baner-canhsatbienvn-2022-ok-134459198.png'
import {Link} from'react-router-dom'

export const narBarItemAll = [
  {
    id: 1,
    title: 'giới thiệu',
    link_nar:'/Organization_Payroll'
  },
  {
    id: 2,
    title: 'hoạt động cảnh sát biển'
  },
  {
    id: 3,
    title: 'tin tức - sự kiện'
  },
  {
    id: 4,
    title: 'quản lý - chỉ đạo'
  },
  {
    id: 5,
    title: 'thông tin - tư liệu'
  },
  {
    id: 6,
    title: 'trợ giúp ngư dân'
  }
]
export default function Napbar() {
  return (
    <div className='w-full bg-white sticky top-0 z-10 '>
      <div className='w-[80%] m-auto max-w-screen-2xl cursor-pointer '>
        <Link to={'/'} className='w-full'>
        
        <div className='w-full'>
          <img className='w-full' src={BG_Image} alt='' />
        </div>
        <div className='w-full 	 mt-5 max-[1300px]:hidden'>
          <div className='w-full border-slate-300 '>
            <ul className='flex justify-between w-[95%] m-auto'>
              {narBarItemAll.map((item) => (
                <li className='uppercase text-sm	leading-10 flex justify-center hover:text-white hover:bg-[#7f0000] hover:duration-700 px-3 '>
                  <Link to={'/Organization_Payroll'}>
                  {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}
