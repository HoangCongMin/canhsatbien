import React from 'react'
import classNames from 'classnames'

interface title_name_video {
  title_Clip?: string
  libari_image?: string
  Title?:string
}

export default function Title_media({ title_Clip, libari_image,Title }: title_name_video) {
  return (
    <div className='w-[100%] border-b-[1px] border-slate-300'>
      <div className='flex justify-between items-center w-[80%] m-auto py-3 max-[420px]:flex-col'>
        <div className={classNames(`${Title} font-bold hover:text-[#191970] uppercase text-[17px] max-[420px]:py-2`)}>{title_Clip}</div>
        {libari_image && (
          <>
            <div className='w-[1px] h-[12px] bg-black max-[1160px]:h-[26px] max-[420px]:w-[60%] max-[420px]:h-[1px] max-[420px]:bg-slate-300'></div>
            <div className=' font-bold	hover:text-[#191970] uppercase text-[17px] max-[420px]:py-2'>{libari_image}</div>
          </>
        )}
      </div>
    </div>
  )
}
// max-[420px]:hidden