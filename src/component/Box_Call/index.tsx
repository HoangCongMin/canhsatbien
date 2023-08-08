import React, { useEffect } from 'react'
// import { BsFacebook } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { RiPrinterFill } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { GoTextSize } from 'react-icons/go'
import { HiOutlineMinusCircle } from 'react-icons/hi'
import { AiFillLike } from 'react-icons/ai'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share'
import { FormatImage, FormatLink } from '../../utils/util.type'
// import '@zalo/sdk';

export default function Box_Call({Link}:any) {
  const ma = window.location.href

;

const handlePrint=()=>{
  window.print()
}

  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://sp.zalo.me/plugins/sdk.js'
   
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
      <div className='w-[30%]  flex justify-end  max-[1250px]:w-full  max-[1250px]:justify-start'>
       
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center '>
          <FacebookShareButton url={ma} quote={'FaceBook'}>
            <FacebookIcon size={20} round={true} />
          </FacebookShareButton>
        </div>
       
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center ml-[10px] '>
          <TelegramShareButton url={ma}>
            <TelegramIcon size={20} round={true} />
          </TelegramShareButton>
        </div>
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center ml-[10px] '>
          <div
            className='zalo-share-button'
            data-href={Link}
            data-oaid='3798984391676315104'
            data-layout='2'
            data-color='blue'
            data-customize='false'
          ></div>
        </div>
        <div className='w-[50px] border-[1px] border-slate-300 rounded-full h-[50px] flex items-center justify-center ml-[10px]'>
          <RiPrinterFill onClick={handlePrint} className='cursor-pointer text-[20px] text-[#375fae]'/>
        </div>

       
      </div>
    
  )
}
