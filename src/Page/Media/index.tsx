import React from 'react'
import NarbarMedia from '../../component/NarbarMedia'
import Slide_Media_all from '../../component/slide_Media_all'
import Slice_cart_news from '../../component/Slice_cart_news'

export default function Media() {
  return (
    <div className='w-full'>
      <div className='w-[80%] m-auto max-w-screen-2xl pb-8'>
        <Slide_Media_all />
      </div>
      <div className='w-full border-t border-slate-300'>
        <div className='w-[80%] m-auto'>
          <div className='text-center text-[30px] text-[#182940] font-bold	mt-20 mb-8'>Tiêu điểm</div>
           <Slice_cart_news/>
        </div>
      </div>
    </div>
  )
}
