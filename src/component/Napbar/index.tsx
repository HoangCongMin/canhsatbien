import React from 'react'
import BG_Image from '../../assets/baner-canhsatbienvn-2022-ok-134459198.png'

export const narBarItemAll = [
  {
    id: 1,
    title: 'giới thiệu'
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
    <div className='w-full bg-white sticky top-0 z-10'>
      <div className='w-[80%] m-auto max-w-screen-2xl '>
        <div className='w-full'>
          <img className='w-full' src={BG_Image} alt='' />
        </div>
        <div className='w-full border-t-[1px]	 mt-5 max-[1300px]:hidden '>
          <div className='w-full border-b-[1.5px] border-slate-300		 '>
            <div className='flex justify-between w-[90%] m-auto'>
              {narBarItemAll.map((item) => (
                <div className='uppercase text-sm	leading-10	'>{item.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
