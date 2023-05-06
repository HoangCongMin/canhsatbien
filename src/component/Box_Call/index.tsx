import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { RiPrinterFill } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { GoTextSize } from 'react-icons/go'
import { HiOutlineMinusCircle } from 'react-icons/hi'

export default function Box_Call() {
  return (
    <div className='w-[8%] sticky top-0 z-10 max-[1300px]:hidden'>
      <div className='w-[90%] m-auto'>
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center mt-2 m-auto'>
          <BsFacebook />
        </div>
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center mt-2 m-auto'>
          <FiMessageSquare />
        </div>
        <div className='text-center text-[11px] mt-3 m-auto  pb-5 border-b-[1px] border-slate-300 w-[65%]'>0</div>
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center mt-2 m-auto'>
          <RiPrinterFill />
        </div>
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full flex items-center justify-center mt-2 m-auto'>
          <div>
            <IoMdAddCircleOutline className='text-[14px] my-3' />
            <GoTextSize className='text-[14px] my-3' />
            <HiOutlineMinusCircle className='text-[14px] my-3' />
          </div>
        </div>
      </div>
    </div>
  )
}
