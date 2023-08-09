import React from 'react'
import {FormatMeida} from '../../../../utils/util.type'

export default function Detail_Audio({audio,bg,title}:any) {
  return (
    <div className='bg-no-repeat bg-center  relative mt-10	bg-cover pt-[55.6%]	' style={{ backgroundImage: `url(${FormatMeida(bg)})` }} >
    <div className='w-full absolute' style={{ background: "linear - gradient(rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.46) 100 %)" }}></div>
    <div className='absolute bottom-10 w-[80%] left-[10%] z-20	max-[500px]:bottom-4 max-[400px]:bottom-2 '>
      <h1 className='text-[25px] text-[#fff] font-bold font-[Arial] text-center mt-5  max-[700px]:text-[20px]  max-[500px]:text-[15px] line-clamp-3'>{title}</h1>
      <audio className='w-full mt-5 max-[700px]:h-[50px] max-[400px]:h-[30px] max-[400px]:mt-1' src={FormatMeida(audio)} controls></audio >
    </div>

  </div>
  )
}
