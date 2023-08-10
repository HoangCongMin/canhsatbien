import React, { useState } from 'react'
import { TfiYoutube } from 'react-icons/tfi'
import { BiArrowBack } from 'react-icons/bi'
import { BsFillCameraVideoFill, BsFillMicFill, BsSearch } from 'react-icons/bs'
import { RiVoiceprintFill } from 'react-icons/ri'
import { AiFillPieChart } from 'react-icons/ai'
import { MdInsertPhoto } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Image_Icon from '../../assets/icon-back-home.png'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'

// style={{ backgroundImage: `url(${Image_Icon})` }}

export default function NarbarMedia() {
  const menu_Media = [
    { icon: BsFillCameraVideoFill, title: 'Video' ,Link:'Video'},
    { icon: BsFillMicFill, title: 'Radio News',Link:'Radio_News' },
    { icon: MdInsertPhoto, title: 'Photos' ,Link:'Photos'},
    { icon: AiFillPieChart, title: 'infographics',Link:'Infographics' },
    { icon: RiVoiceprintFill, title: 'Voices',Link:'Voices' }
  ]

  const [hidden, SetHidden] = useState(false)

  const handleClose = () => SetHidden((pre) => !pre)
  return (
    <div className='border-y	py-[3px] border-slate-300	 w-full  '>
      <div className='w-[80%] m-auto flex justify-between max-w-screen-2xl py-7 items-center relative   '>
        <div className='flex w-[30%] items-center	 justify-between'>
          <Link to={'/'} className='flex w-[32%] items-center	 bg-[#274c90] rounded-lg  max-[1400px]:hidden'>
            <div className='text-[#fff] py-2 px-2 h-[100%] w-[30%] bg-[orange] rounded-l-lg	'>
              <BiArrowBack />
            </div>
            <div className='text-[13px]  font-bold	text-[#fff] font-[Roboto] w-[75%] ml-2 line-clamp-1'>
              Về trang chủ
            </div>
          </Link>
          <Link to={'/'} className='flex max-[1400px]:w-[100%]  w-[60%] items-center uppercase'>
            {/* <div className='w-20%'>
              <TfiYoutube className='w-[30px] h-[30px] text-[#dc2c2c]' />
            </div> */}
            <div className='text-[23px] ml-2 text-[#182940] font-bold'>Đa phương tiện</div>
          </Link>
        </div>
        <div className='w-[60%] flex justify-between items-center max-[1240px]:hidden'>
          <Link to={ '/media/Video'} className='flex items-center cursor-pointer'>
            <BsFillCameraVideoFill className='text-[#274c90] text-[20px] ' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium	'>Video</span>
          </Link>
          <Link to={'/media/Radio_News'} className='flex items-center cursor-pointer '>
            <BsFillMicFill className='text-[#274c90] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Podcast</span>
          </Link>
          <Link to={ '/media/Voices'} className='flex items-center cursor-pointer'>
            <RiVoiceprintFill className='text-[#274c90] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Longform</span>
          </Link>

          <Link to={ '/media/Infographics'} className='flex items-center cursor-pointer'>
            <AiFillPieChart className='text-[#274c90] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Infographic</span>
          </Link>
          <Link to={ '/media/Photos'} className='flex items-center cursor-pointer'>
            <MdInsertPhoto className='text-[#274c90] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Photos</span>
          </Link>
          {/* <div className='flex items-center  cursor-pointer'>
            <BsSearch />
          </div> */}
        </div>
        <div className='min-[1240px]:hidden' onClick={handleClose}>
          <AiOutlineBars />
        </div>
        {hidden && (
          <div className='absolute top-0 right-0 w-full z-[1] p-4 bg-white  left-0  '>
            <div className='p-2 flex justify-end bg-[#F6F6F6] ' onClick={handleClose}>
              <AiOutlineClose className='text-[#274c90]' />
            </div>
            {menu_Media.map((item,i) => (
              <div key={i} className='p-2'>
                <Link to={`/media/${item.Link}`}>{item.title}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
