import React, { useState } from 'react'
import BG_Image from '../../assets/baner-canhsatbienvn-2022-ok-134459198.png'
import { Link } from 'react-router-dom'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'

export const narBarItemAll = [
  {
    id: 1,
    title: 'giới thiệu',
    link_nar: '/Organization_Payroll',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }]
  },
  {
    id: 2,
    title: 'hoạt động cảnh sát biển',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }]
  },
  {
    id: 3,
    title: 'tin tức - sự kiện',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }]
  },
  {
    id: 4,
    title: 'quản lý - chỉ đạo',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }]
  },
  {
    id: 5,
    title: 'thông tin - tư liệu',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }]
  },
  {
    id: 6,
    title: 'trợ giúp ngư dân',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }]
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
              <div className='flex justify-between w-[95%] max-[1316px]:hidden m-auto  max-[1316px]:flex-col max-[1316px]:absolute max-[1316px]:w-full 	 max-[1316px]:bg-white'>
                <li className='uppercase text-sm hidden	leading-10  justify-center border-b-2 font-bold border-white bg-[#F6F6F6] max-[1316px]:block max-[1316px]:flex  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1316px]:justify-start'>
                  <p>mENU</p>
                </li>
                {narBarItemAll.map((item) => (
                  <Tippy
                    className='bg-[#F6F6F6] py-3'
                    arrow={false}
                    placement='bottom'
                    interactive={true}
                    delay={[0, 200]}
                    content={
                      <div className='bg-[#F6F6F6] text-black w-[250px]   cursor-pointer'>
                        {item.menu_children.map((item_menu_children) => (
                          <div className='my-3 text-sm hover:text-[#015CA2] px-1 py-2 border-b-[2.5px] border-[#F6F6F6]  hover:border-b-[2.5px] hover:border-[#FF8C00]  '>{item_menu_children.title}</div>
                        ))}
                      </div>
                    }
                  >
                    <li className='uppercase text-sm	leading-10 flex justify-center border-b-[2.5px] font-bold border-white  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-[2.5px] hover:border-[#FF8C00] max-[1316px]:justify-start'>
                      <div>
                        <Link to={'/Organization_Payroll'}>{item.title}</Link>
                      </div>
                    </li>
                  </Tippy>
                ))}
              </div>
              <div className='w-[95%] m-auto hidden max-[1316px]:block'>
                {!close && <AiOutlineBars onClick={handleClose} />}
                {close && (
                  <>
                    <li className='uppercase text-sm hidden	leading-10	items-center	 border-b-2 font-bold border-white bg-[#F6F6F6] max-[1316px]:block max-[1316px]:flex  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1316px]:justify-between'>
                      <p>mENU</p>
                      <AiOutlineClose onClick={handleClose} />
                    </li>
                    {narBarItemAll.map((item) => (
                      <li className='uppercase text-sm	leading-10 flex justify-center border-b-2 font-bold border-white  hover:text-[#015CA2] hover:duration-700 px-3 hover:border-b-2 hover:border-[#015CA2] max-[1316px]:justify-start'>
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
