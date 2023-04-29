import React from 'react'
import { TfiYoutube } from 'react-icons/tfi'
import { BiArrowBack } from 'react-icons/bi'
import { BsFillCameraVideoFill, BsFillMicFill, BsSearch } from 'react-icons/bs'
import { RiVoiceprintFill } from 'react-icons/ri'
import { AiFillPieChart } from 'react-icons/ai'
import { MdInsertPhoto } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Image_Icon from '../../assets/icon-back-home.png'

// style={{ backgroundImage: `url(${Image_Icon})` }}

export default function NarbarMedia() {
  return (
    <div className='border-y	py-[3px] border-slate-300	 w-full'>
      <div className='w-[80%] m-auto flex justify-between max-w-screen-2xl py-7  '>
        <div className='flex w-[30%] items-center	 justify-between'>
          <Link to={'/'} className='flex w-[32%] items-center	 bg-[#dc2c2c] rounded-lg  max-[1400px]:hidden'>
            <div className='text-[#fff] py-2 px-2 h-[100%] w-[30%] bg-[orange] rounded-l-lg	' >
              <BiArrowBack />
            </div>
            <div className='text-[13px]  font-bold	text-[#fff] font-[Roboto] w-[75%] ml-2 line-clamp-1'>Về trang chủ</div>
          </Link>
          <Link to={'/media'} className='flex max-[1400px]:w-[100%]  w-[60%] items-center uppercase'>
            <div className='w-20%'>

            <TfiYoutube className='w-[30px] h-[30px] text-[#dc2c2c]' />
            </div>
            <div className='text-[23px] ml-2 text-[#182940] font-bold'>multimedia</div>
          </Link>
        </div>
        <div className='w-[60%] flex justify-between items-center'>
          <div className='flex items-center '>
            <BsFillCameraVideoFill className='text-[#dc2c2c] text-[20px] ' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium	'>Video</span>
          </div>
          <div className='flex items-center '>
            <BsFillMicFill className='text-[#dc2c2c] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Radio News</span>
          </div>
          <div className='flex items-center '>
            <RiVoiceprintFill className='text-[#dc2c2c] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Voices</span>
          </div>
          <div className='flex items-center '>
            <span className='text-[#182940] font-[Roboto] text-[15px] font-medium'>Longform</span>
          </div>
          <div className='flex items-center '>
            <AiFillPieChart className='text-[#dc2c2c] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>infographics</span>
          </div>
          <div className='flex items-center '>
            <MdInsertPhoto className='text-[#dc2c2c] text-[20px]' />
            <span className='ml-2 text-[#182940] font-[Roboto] text-[15px] font-medium'>Photos</span>
          </div>
          <div className='flex items-center '>
            <BsSearch />
          </div>
        </div>
      </div>
    </div>
  )
}
