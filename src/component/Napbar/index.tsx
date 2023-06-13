import React, { useState,useEffect,useContext } from 'react'
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
import Bg_mobile from '../../assets/baner-canhsatbienvn.jpg'
import { myCreateContext } from '../../context'
import {GetListCategorySession} from'../../apis/GetHoatDongCSB'
import {useQuery} from'@tanstack/react-query'

// export const narBarItemAll = [
//   {
//     id: 1,
//     title: 'giới thiệu',
//     link_nar: '/gioithieu',
//     menu_children: [
//       { title: 'Truyền thống', nap_bar: '/',idcart:78 },
//       { title: 'Xây dựng - Phát triển', nap_bar: '/',idcart:79 },
//       { title: 'Tổ chức - Biên chế', nap_bar: '/Organization_Payroll',idcart:90 }
//     ],
//     icon: CgAsterisk
//   },
//   {
//     id: 2,
//     title: 'hoạt động cảnh sát biển',
//     menu_children: [
//       { title: 'Vì chủ quyền biển, đảo', nap_bar: '/',idcart:80 },
//       { title: 'Thực thi pháp luật', nap_bar: '/',idcart:81 },
//       { title: 'Cứu hộ - Cứu nạn', nap_bar: '/',idcart:82 },
//       { title: 'Hợp Tác Quốc Tế', nap_bar: '/',idcart:2 },
//       { title: 'Phòng chống IUU', nap_bar: '/',idcart:115 },
//       { title: 'Theo gương Bác', nap_bar: '/',idcart:83 },
//       { title: 'Văn hóa - Thể thao', nap_bar: '/',idcart:84 },
//       { title: 'Công tác Cảnh sát biển', nap_bar: '/',idcart:110 },
//       { title: 'Cảnh sát biển Việt Nam và những người bạn', nap_bar: '/',idcart:113 }
//     ],
//     icon: CgAsterisk
//   },
//   {
//     id: 3,
//     title: 'tin tức - sự kiện',
//     menu_children: [
//       { title: 'Quốc phòng - An ninh', nap_bar: '/',idcart:12 },
//       { title: 'Tin trong nước', nap_bar: '/',idcart:14 },
//       { title: 'Tin quốc tế', nap_bar: '/',idcart:15 }
//     ],
//     icon: CgAsterisk
//   },
//   {
//     id: 4,
//     title: 'quản lý - chỉ đạo',
//     menu_children: [
//       { title: 'Văn bản quản lý, hành chính', nap_bar: '/',idcart:17 },
//       { title: 'Chỉ đạo - Hướng dẫn', nap_bar: '/',idcart:20 },
//       { title: 'Chế độ chính sách', nap_bar: '/',idcart:21 }
//     ],
//     icon: CgAsterisk
//   },
//   {
//     id: 5,
//     title: 'thông tin - tư liệu',
//     menu_children: [
//       { title: 'Biển đảo Việt Nam', nap_bar: '/' ,idcart:86},
//       { title: 'Nghiên cứu - Trao đổi', nap_bar: '/',idcart:87 },
//       { title: 'Khoa học - Công nghệ', nap_bar: '/',idcart:88 },
//       { title: 'Thông tin an ninh hàng hải', nap_bar: '/',idcart:114 },
//       { title: 'Thông tin dịch vụ', nap_bar: '/' ,idcart:19}
//     ],
//     icon: CgAsterisk
//   },
//   {
//     id: 6,
//     title: 'trợ giúp ngư dân',
//     menu_children: [
//       { title: 'Văn bản pháp luật', nap_bar: '/',idcart:11 },
//       { title: 'Phổ biến giáo dục pháp luật', nap_bar: '/',idcart:13 },
//       { title: 'Tuyên truyền Luật Cảnh sát biển Việt Nam', nap_bar: '/',idcart:112 },
//       { title: 'Trợ giúp ngư dân', nap_bar: '/',idcart:3 }
//     ],
//     icon: CgAsterisk
//   }
// ]

export default function Napbar() {

  const {data:List_Napbar_Item}=useQuery({
    queryKey:['List_Napbar'],
    queryFn:GetListCategorySession
  })

  console.log(List_Napbar_Item?.data)
  const [close, setClose] = useState(false)

  const [hoverNarbar, SetHoverNarbar] = useState(false)
  
  const [item_Window, Setitem_Window] = useState(window.innerWidth)
  
  const handleClose = () => {
    setClose((pre) => !pre)
  }

  const { setIsModelOpen } = useContext(myCreateContext)


  const handleClick = () => {
    setIsModelOpen(true)
  }

  useEffect(()=>{
    window.addEventListener('resize', () => {
    let ma=window.innerWidth
    Setitem_Window(ma)
    })

    return () => {
      window.removeEventListener('resize', () => {
        console.log('remove')
      })
    }
  },[])
  
  return (
    <div className='w-full bg-white '>
      <div className='w-[80%] m-auto cursor-pointer '>
        <Link to={'/'} className='w-full'>
          {/* style={{ backgroundImage: `url(${BG_Image})`}} */}
          <div className='w-full bg-cover'>
            {item_Window <= 500 && <img className='w-full border-l-[1px]' src={Bg_mobile} />}
            {item_Window > 500 && <img className='w-full border-l-[1px]' src={BG_Image} alt='' />}
          </div>
        </Link>
      </div>
      <div className=' object-cover '>
        <div className='w-[80%] m-auto flex  bg-[#56aaff] items-center justify-between border-slate-300'>
          <div className='flex items-center w-[92%] max-[1322px]:w-full pl-[1%]'>
            <div className='w-[3%] max-[1322px]:hidden'>
              <Link to={'/'}>
              <AiFillHome className='mb-[5px] text-white text-[25px]' />
              </Link>
            </div>

            <div className=' flex justify-between w-[92%]  max-[1322px]:hidden  items-center  max-[1316px]:flex-col max-[1316px]:absolute max-[1316px]:w-full	max-[1316px]:bg-white'>
              <div className='uppercase text-sm hidden	leading-10  justify-center border-b-2 font-bold border-[#191970] bg-[#F6F6F6] max-[1316px]:block max-[1316px]:flex  hover:text-[#015CA2] hover:duration-700 hover:border-b-2 hover:border-[#015CA2] max-[1316px]:justify-start'>
                <p>mENU</p>
              </div>
              {List_Napbar_Item?.data.map((item:any) => (
                <>
                  <div className=' group uppercase text-[0.8em]	leading-10 flex font-[Helvetica] justify-center relative text-white font-bold hover:text-[#003f7f]  border-b-[2.5px] border-[#56aaff]	 hover:border-[#003f7f] hover:duration-700 max-[1316px]:justify-start '>
                    <div className='flex items-center'>
                      <div>
                        <p className='cursor-pointer'>{item.name}</p>
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
                      {item?.listCategoryChild.map((itemAll:any) => (
                        <Link
                          to={`/portal/${itemAll.id}`}
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
            <div className='w-[95%] m-auto hidden  max-[1322px]:block py-3'>
              {!close && (
                <AiOutlineBars className='text-[#fff] text-[20px] max-[600px]:text-[35px]' onClick={handleClose} />
              )}
              {close && (
                <>
                  <li className='uppercase text-sm 	leading-10 text-[#fff]	items-center font-bold flex  hover:duration-700 px-3   justify-between'>
                    <p>mENU</p>
                    <AiOutlineClose className='text-[20px]' onClick={handleClose} />
                  </li>
                  {List_Napbar_Item?.data.map((item:any) => (
                    <li className='uppercase text-sm list-none	leading-10 flex-col  justify-center  font-bold   group  hover:duration-700 px-3 hover:border-b-2 hover:border-[#ff7f00] text-[#003f7f] max-[1322px]:justify-start'>
                      <Link to={`/portal/${item.id}`}>{item?.name}</Link>

                      <div className='hidden group-hover:block'>
                        {item?.listCategoryChild.map((item_all:any) => (
                          <div className='group-hover:block text-[13px] font-medium	'>{item_all?.name}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className='w-[8%] max-[1322px]:hidden flex justify-between mr-2'>
            <div className='text-[1.4rem] text-white'>
              <IoCallSharp onClick={handleClick } />
              
            </div>
            
            <div className='text-[1.5rem] text-white'>
              <a href="mailto:banbientapcsb@gmail.com">


              <AiOutlineMail />
              </a>
            </div>
            <div className='text-[1.5rem] text-white'>
              <BiSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
