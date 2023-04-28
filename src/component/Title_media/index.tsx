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
      <div className='flex justify-between items-center w-[80%] m-auto py-3'>
        <div className={classNames(`${Title} font-bold hover:text-[#191970] uppercase text-[17px]`)}>{title_Clip}</div>
        {libari_image && (
          <>
            <div className='w-[1px] h-[12px] bg-black'></div>
            <div className=' font-bold	hover:text-[#191970] uppercase text-[17px]'>{libari_image}</div>
          </>
        )}
      </div>
    </div>
  )
}
