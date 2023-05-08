import React, { useState } from 'react'
import classNames from 'classnames'

interface title_name_video {
  title_Clip?: string
  libari_image?: string
  Title?: string
}

export default function Title_media({ title_Clip, libari_image, Title }: title_name_video) {
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive((pre) => !pre)
  }

  return (
    <div className='w-[100%] border-b-[2.5px] border-[#DA251C]'>
      <div className='flex justify-between max-[1100px]:justify-around items-center w-[90%] m-auto pb-3 max-[420px]:flex-col cursor-pointer '>

      
          <>
            <div className='w-[1px] h-[12px] bg-black max-[1160px]:h-[26px] max-[420px]:w-[60%] max-[420px]:h-[1px] max-[420px]:bg-slate-300'></div>
            <div>
              {title_Clip}
            </div>
          </>
        
      </div>
    </div>
  )
}
// max-[420px]:hidden
