import React, { useState } from 'react'
import BG_Image from '../../assets/baner-canhsatbienvn-2022-ok-134459198.png'
import { Link } from 'react-router-dom'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'
import Backfrond from '../../assets/menubackground2.png'
import { CgAsterisk } from 'react-icons/cg'
import { AiFillHome } from 'react-icons/ai'
import classNames from 'classnames'

export const narBarItemAll = [
  {
    id: 1,
    title: 'giới thiệu',
    link_nar: '/Organization_Payroll',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }],
    icon: CgAsterisk
  },
  {
    id: 2,
    title: 'hoạt động cảnh sát biển',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }],
    icon: CgAsterisk
  },
  {
    id: 3,
    title: 'tin tức - sự kiện',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }],
    icon: CgAsterisk
  },
  {
    id: 4,
    title: 'quản lý - chỉ đạo',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }],
    icon: CgAsterisk
  },
  {
    id: 5,
    title: 'thông tin - tư liệu',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Xây dựng - Phát triển' }, { title: 'Tổ chức - Biên chế' }],
    icon: CgAsterisk
  },
  {
    id: 6,
    title: 'trợ giúp ngư dân',
    menu_children: [{ title: 'Truyền thống' }, { title: 'Tin quốc tế' }, { title: 'Tổ chức - Biên chế' }],
    icon: CgAsterisk
  }
]

export default function Napbar() {
  const [close, setClose] = useState(false)

  const [hoverNarbar, SetHoverNarbar] = useState(false)

  const handleClose = () => {
    setClose((pre) => !pre)
  }

  return (
    <div className='w-full bg-white sticky top-0 z-20'>
      <div className='w-[80%] m-auto max-w-screen-2xl cursor-pointer'>
        <Link to={'/'} className='w-full'>
          <div className='w-full'>
            <img className='w-full' src={BG_Image} alt='' />
          </div>
        </Link>
      </div>
          <div className='w-full object-cover mt-5  bg-[#56aaff]'>
            <div className='w-[80%] m-auto flex items-center border-slate-300'>
              <div className='m-auto max-[1322px]:hidden '>
                <AiFillHome className='mb-[5px] text-white text-[25px]' />
              </div>
              <div className=' flex justify-between w-[97%]  max-[1322px]:hidden  items-center  max-[1316px]:flex-col max-[1316px]:absolute max-[1316px]:w-full	max-[1316px]:bg-white'>
                <li className='uppercase text-sm hidden	leading-10  justify-center border-b-2 font-bold border-[#191970] bg-[#F6F6F6] max-[1316px]:block max-[1316px]:flex  hover:text-[#015CA2] hover:duration-700 hover:border-b-2 hover:border-[#015CA2] max-[1316px]:justify-start'>
                  <p>mENU</p>
                </li>
                {narBarItemAll.map((item) => (
                  // style={{ backgroundImage: `url(${!close && Backfrond})` }}
                  // <Tippy
                  //   className='bg-[#F6F6F6] py-3'
                  //   arrow={false}

                  //   placement='bottom'
                  //   interactive={true}
                  //   delay={[0, 200]}
                  //   content={
                  //     <div className='bg-[#F6F6F6] text-black w-[250px]   cursor-pointer'>
                  //       {item.menu_children.map((item_menu_children) => (
                  //         <div className='my-3 text-sm hover:text-[#015CA2] px-1 py-2 border-b-[2.5px] border-[#F6F6F6]  hover:border-b-[2.5px] hover:border-[#FF8C00]  '>{item_menu_children.title}</div>
                  //       ))}
                  //     </div>
                  //   }
                  // >
                  <>
                    <li className=' group uppercase text-[13px]	leading-10 flex justify-center text-white font-bold hover:text-[#003f7f]  border-b-[2.5px] border-[#56aaff]	 hover:border-[#003f7f] hover:duration-700 max-[1316px]:justify-start '>
                      <div className='flex items-center'>
                        <div>
                          <item.icon className='text-[#ff7f00]' />
                        </div>
                        <div>
                          <Link to={'/Organization_Payroll'}>{item.title}</Link>
                        </div>
                      </div>

                      <div
                        className={classNames(`absolute  mt-10  ${item.id===narBarItemAll[5].id ?'w-full':'w-[215%]'} px-3 pb-3 top-0.5 hidden group-hover:block z-10 left-0 bg-white rounded-b-lg  border-[#1px] border-[] shadow-2xl`)}
                      >
                        {item.menu_children.map((itemAll) => (
                          <div className={`w-[100%] hidden group-hover:block text-black bg-white  hover:duration-700   hover:text-[#003f7f] 	 h-[30px]`}>
                            {itemAll.title}
                          </div>
                        ))}
                      </div>
                    </li>
                  </>
                  // </Tippy>
                ))}
              </div>
              <div className='w-[95%] m-auto hidden  max-[1322px]:block py-2'>
                {!close && <AiOutlineBars className='text-[#003f7f]' onClick={handleClose} />}
                {close && (
                  <>
                    <li className='uppercase text-sm 	leading-10 text-[#003f7f]	items-center font-bold flex  hover:duration-700 px-3   justify-between'>
                      <p>mENU</p>
                      <AiOutlineClose onClick={handleClose} />
                    </li>
                    {narBarItemAll.map((item) => (
                      <li className='uppercase text-sm list-none	leading-10 flex-col  justify-center  font-bold   group  hover:duration-700 px-3 hover:border-b-2 hover:border-[#ff7f00] text-[#003f7f] max-[1322px]:justify-start'>
                        <Link to={'/Organization_Payroll'}>{item.title}</Link>

                        <div className='hidden group-hover:block  '>
                          {item.menu_children.map((item_all) => (
                            <div className='group-hover:block text-[13px] font-medium	'>{item_all.title}</div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
    </div>
  )
}
