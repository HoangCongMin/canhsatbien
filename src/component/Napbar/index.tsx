import React, { useState } from 'react'
import BG_Image from '../../assets/baner-canhsatbienvn-2022-ok-134459198.png'
import { Link } from 'react-router-dom'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'

export const narBarItemAll = [
  {
    id: 1,
    title: 'giới thiệu',
    link_nar: '/Organization_Payroll'
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
  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose((pre) => !pre)
  }
  return (
    <div className='w-full bg-white sticky top-0 z-10'>
      <div className='w-[80%] m-auto max-w-screen-2xl cursor-pointer '>
        <Link to={'/'} className='w-full'>
          <div className='w-full'>
            <img className='w-full' src={BG_Image} alt='' />
          </div>
          <div className='w-full 	 mt-5 '>
            <div className='w-full border-slate-300 '>
              <div className='flex justify-between w-[95%] max-[1300px]:hidden m-auto  max-[1300px]:flex-col max-[1300px]:absolute max-[1300px]:w-full 	 max-[1300px]:bg-white'>
                <li className='uppercase text-sm hidden	leading-10  justify-center border-b-2 font-bold border-white bg-[#F6F6F6] max-[1300px]:block max-[1300px]:flex  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1300px]:justify-start'>
                  <p>mENU</p>
                </li>
                {narBarItemAll.map((item) => (
                  <li className='uppercase text-sm	leading-10 flex justify-center border-b-2 font-bold border-white  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1300px]:justify-start'>
                    <Link to={'/Organization_Payroll'}>{item.title}</Link>
                  </li>
                ))}
              </div>
              <div className='w-[95%] m-auto hidden max-[1300px]:block'>
                {!close && <AiOutlineBars onClick={handleClose} />}
                {close && (
                  <>
                    <li className='uppercase text-sm hidden	leading-10	items-center	 border-b-2 font-bold border-white bg-[#F6F6F6] max-[1300px]:block max-[1300px]:flex  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1300px]:justify-between'>
                      <p>mENU</p>
                      <AiOutlineClose onClick={handleClose}/>
                    </li>
                    {narBarItemAll.map((item) => (
                      <li className='uppercase text-sm	leading-10 flex justify-center border-b-2 font-bold border-white  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1300px]:justify-start'>
                        <Link to={'/Organization_Payroll'}>{item.title}</Link>
                      </li>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
