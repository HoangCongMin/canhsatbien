import React from 'react'
import Logo from '../../assets/logo-csb-080730606.png'


interface weathers {
  List_weather: weather[]
}

interface weather {
  id: number
  title: string
  img: string
}

export default function Box_weather({ List_weather }: weathers) {
  return (
    <div className='w-full shadow-xl border-[1px] border-[#F6F6F6]'>
      
      {/* <div className='uppercase py-2 pb-6 border-b-[2.5px] border-[#d6d6d6] text-[#191970] font-bold text-center relative'>
        <div className='border-b-[2.5px] border-[#ffcc00] absolute	flex items-center top-0 pb-2 pl-2'>
          <img src={Logo} className='w-[16px]' />
          <div className='ml-2'> dự báo thời tiết biển</div>
        </div>
      </div> */}

      <div className='uppercase py-2 border-b-[2.5px] border-[#ffcc00] text-[#191970] font-bold text-center '>
        <div className='flex'>

          <img src={Logo} className='w-[16px]' />
          <div className='ml-2'> dự báo thời tiết biển</div>
        </div>
      </div>
      
      <div>
        <a target="_blank" href="https://www.nchmf.gov.vn/kttv/ ">

        <img className='m-auto py-6' src={List_weather[0].img} alt="" />
        </a>
        
      </div>
    </div>
  )
}
