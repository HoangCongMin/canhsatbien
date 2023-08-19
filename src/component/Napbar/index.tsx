import React, { useState, useEffect, useContext } from 'react'
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
import { IoCallSharp } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import Bg_mobile from '../../assets/app-store.png.jpg'
import { myCreateContext } from '../../context'
import { GetListCategorySession } from '../../apis/GetHoatDongCSB'
import { useQuery } from '@tanstack/react-query'
import { FormatMeida } from '../../utils/util.type'
import { GetBanner } from '../../apis/GetHoatDongCSB'

export default function Napbar() {
  const { data: List_Napbar_Item } = useQuery({
    queryKey: ['List_Napbar'],
    queryFn: GetListCategorySession
  })

  const [close, setClose] = useState(false)

  const [hoverNarbar, SetHoverNarbar] = useState(false)

  const [item_Window, Setitem_Window] = useState(window.innerWidth)

  const handleClose = () => {
    setClose((pre) => !pre)
  }

  const { setIsModelOpen } = useContext(myCreateContext)

  const { data: banner_top } = useQuery({ queryKey: ['list_banner_top'], queryFn: () => GetBanner(2) })
  const { data: mobile_mobile } = useQuery({ queryKey: ['list_banner_top_mobile'], queryFn: () => GetBanner(6) })

  const handleClick = () => {
    setIsModelOpen(true)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ma = window.innerWidth
      Setitem_Window(ma)
    })


    return () => {
      window.removeEventListener('resize', () => {
        console.log('thành công')
      })
    }
  }, [])
  // <img className='w-full' src={FormatMeida(banner_top?.data[0]?.bannerExtra?.images)} alt='' />
  // <img className='w-full border-l-[1px]' src={FormatMeida(mobile_mobile?.data[0]?.bannerExtra?.images)} />
  // BG_Image
  return (
    <div className='w-full bg-white '>
      <div className='w-[80%] max-[500px]:w-[95%]  max-w-screen-2xl  m-auto cursor-pointer '>
        <Link to={'/'} className='w-full'>
          {/* style={{ backgroundImage: `url(${BG_Image})`}} */}
          <div className='w-full bg-cover'>
            {item_Window <= 500 && (
             <img className='w-full border-l-[1px]' src={FormatMeida(mobile_mobile?.data[0]?.bannerExtra?.images)} />
            )}
            {item_Window > 500 && (
             <img className='w-full' src={FormatMeida(banner_top?.data[0]?.bannerExtra?.images)} alt='' />
            )}
            {/* <img className='w-full absolute top-0 left-0 h-full object-cover' src={FormatMeida(banner_top?.data[0]?.bannerExtra?.images)} alt='' /> */}
          </div>
        </Link>
      </div>
      <div className=' object-cover '>
        <div className='w-[80%] max-[500px]:w-[95%]
         m-auto flex max-w-screen-2xl bg-[#375fae] items-center justify-between border-slate-300'>
          <div className='flex items-center w-[92%] max-[1248px]:w-full pl-[1%]'>
            <div className='w-[3%]  max-[1248px]:hidden'>
              <Link to={'/'}>
                <AiFillHome className='mb-[5px] text-white text-[20px]' />
              </Link>
            </div>

            <div className=' flex justify-between w-[92%]  max-[1248px]:hidden  items-center  max-[1248px]:flex-col max-[1248px]:absolute max-[1248px]:w-full	max-[1248px]:bg-white'>
              {/* <div className='uppercase text-sm hidden	leading-10  justify-center border-b-2 font-bold border-[#191970] bg-[#F6F6F6] max-[1316px]:block max-[1316px]:flex  hover:text-[#015CA2] hover:duration-700 hover:border-b-2 hover:border-[#015CA2] max-[1316px]:justify-start'>
                <p>mENU</p>
              </div> */}
              {List_Napbar_Item?.data.map((item: any) => (
                <>
                  <div className=' group uppercase text-[0.8em]	leading-10 flex font-[Helvetica] justify-center relative text-white font-bold   border-b-[2.5px] border-[#375fae]	 hover:border-[#F6F6F6] hover:duration-700 max-[1316px]:justify-start '>
                    <div className='flex items-center'>
                      <div>
                        <p className='cursor-pointer text-[12px]'>{item.name}</p>
                      </div>
                      <div>
                        <IoMdArrowDropdown className='text-[17px] ml-1 ' />
                      </div>
                    </div>

                    <div
                      className={classNames(
                        `absolute  mt-10  ${
                          item.id === List_Napbar_Item?.data[5].id ? 'w-[260%]' : 'w-[280%]'
                        } px-3 pb-3 top-0.5 hidden group-hover:block z-40 left-0 bg-white rounded-b-lg   border-[#1px] border-[] shadow-2xl`
                      )}
                    >
                      {item?.listCategoryChild.map((itemAll: any) => (
                        <Link
                          to={`/${item.name}/${itemAll.id}`}
                          className={`w-[100%]	 hidden group-hover:block text-black bg-white  hover:duration-700  cursor-pointer  hover:text-[#003f7f] h-[30px]`}
                        >
                          {itemAll.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
                // </Tippy>
              ))}
            </div>
            <div className='w-[95%]  m-auto hidden  max-[1248px]:block  py-3 '>
              {!close && (
                <AiOutlineBars className='text-[#fff] text-[20px] max-[600px]:text-[35px]' onClick={handleClose} />
              )}
              {close && (
                <>
                  <li className='uppercase text-sm 	leading-10 text-[#fff]	items-center font-bold flex  hover:duration-700 px-3   justify-between'>
                    <p>mENU</p>
                    <AiOutlineClose className='text-[20px]' onClick={handleClose} />
                  </li>
                  {List_Napbar_Item?.data.map((item: any) => (
                    <li className='uppercase text-sm list-none	leading-10 flex-col  justify-center  font-bold   group  hover:duration-700 px-3 hover:border-b-2 hover:border-[#ff7f00] text-[#fff] max-[1248px]:justify-start'>
                      <p>{item?.name}</p>

                      <div className='hidden group-hover:block'>
                        {item?.listCategoryChild.map((item_all: any,i:any) => (
                          <Link key={i}  to={`/${item.name}/${item_all.id}`} className='group-hover:block text-[13px] font-medium	'>{item_all?.name}</Link>
                        ))}
                      </div>
                    </li>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className='w-[4%] max-[1248px]:hidden flex justify-between mr-2'>
            <div className='text-[1.2rem] text-white'>
              <IoCallSharp onClick={handleClick} />
            </div>

            <div className='text-[1.3rem] text-white'>
              <a href='mailto:banbientapcsb@gmail.com'>
                <AiOutlineMail />
              </a>
            </div>
            {/* <div className='text-[1.3rem] text-white'>
              <BiSearch />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}


// to={`/portal/${item.id}`}