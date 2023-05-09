import React from 'react'
import Napbar from '../../component/Napbar'
import Fotter from '../../component/Fotter'
import Box_Call_All from '../../component/Box_Call_All'

interface Post_Detail_Layout {
  children?: React.ReactNode
}

export default function Post_Detail_Layout({ children }: Post_Detail_Layout) {
  return (
    <div className=''>
      <Napbar />
      <div className='flex justify-between w-[80%] m-auto mt-4'>
        <div className='w-[72%]'>{children}</div>
        <div className='w-[26%]'>
          <Box_Call_All />
        </div>
      </div>
      <Fotter />
    </div>
  )
}
