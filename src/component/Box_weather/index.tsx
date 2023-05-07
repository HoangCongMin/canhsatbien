import React from 'react'

interface weathers{
  List_weather:weather[]
}

interface weather{
  id:number
  title:string
  img:string
}

export default function Box_weather({List_weather}:weathers) {
  return (
    <div className='w-full'>
      <h1 className='uppercase font-bold text-[16px] text-[#191970] text-center border-[#DA251C] border-b-[2.5px] py-2'>
        dự báo thời tiết biển
      </h1>
      <div>
        {List_weather.map((item)=>(
          <div className='flex items-center w-[95%] m-auto justify-between'>
            <span className='text-[13px] text-[#333] text-right w-[60%] max-[1100px]:w-[48%]'>{item.title}</span>
            <div className='w-[30%] max-[1100px]:w-[48%]'>
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
