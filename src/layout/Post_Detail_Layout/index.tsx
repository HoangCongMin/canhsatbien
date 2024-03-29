import React from 'react'
import Napbar from '../../component/Napbar'
import Fotter from '../../component/Fotter'
import Box_Call_All from '../../component/Box_Call_All'
import Slice_cart_news_coppy_image from '../../component/Slice_cart_news_coppy_image'

interface Post_Detail_Layout {
  children?: React.ReactNode
}

export default function Post_Detail_Layout({ children }: Post_Detail_Layout) {
  return (
    <div className=''>
      <Napbar />
      <div className='flex justify-between w-[80%] max-[500px]:w-[95%] max-w-screen-2xl m-auto mt-6 max-[1100px]:flex-col'>
        <div className='w-[75%] max-[1100px]:w-full'>{children}</div>
        <div className='w-[22%] max-[1100px]:w-full'>
          <Box_Call_All />
        </div>
      </div>
      <div className='w-[80%] m-auto mt-3 max-w-screen-2xl'>
        <Slice_cart_news_coppy_image />
      </div>
      <Fotter />
    </div>
  )
}
