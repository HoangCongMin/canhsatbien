import React, { Component, useState } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Data_Media from '../../component/constant'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import classNames from 'classnames'

export default function Slide_Media_all() {
  const [currenIndex, setCurrenIndex] = useState(0)

  const prevSlice = () => {
    const FirstSlice = currenIndex === 0
    const newIndex = FirstSlice ? Data_Media.length - 1 : currenIndex - 1
    setCurrenIndex(newIndex)
  }

  const nextSlice = () => {
    const LastSlice = currenIndex === Data_Media.length - 1
    const newIndex = LastSlice ? 0 : currenIndex + 1
    setCurrenIndex(newIndex)
  }

  
  return (
    <div className='w-full h-[760px] max-[1250px]:h-[560px]  max-[875px]:h-[460px] max-[500px]:h-[350px] relative bg-cover bg-center py-6 duration-500 group'>
      <div
        style={{ backgroundImage: `url(${Data_Media[currenIndex].image})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 brightness-[0.7]'
      ></div>
      <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlice} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlice} />
      </div>
      <div className='absolute duration-500 bottom-[10%] left-[20%] max-[1250px]:text-[30px] max-[700px]:text-[20px] max-[700px]:bottom-[20%] text-white text-[36px] w-[50%] font-bold	line-clamp-2'>
        {Data_Media[currenIndex].title}
      </div>
      <div className='absolute bottom-[7%] left-[20%] flex w-[100px]  max-[700px]:bottom-[15%] justify-between'>
        {Data_Media.map((item, index) => (
          <div className={classNames(`${currenIndex===index?'w-[30%]':'w-[10%]'} h-2 bg-[#fff] rounded-lg duration-500`)}></div>
        ))}
      </div>
    </div>
  )
}
