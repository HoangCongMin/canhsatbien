import React, { Component, useState, useEffect } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import classNames from 'classnames'
import Featured from '../../type/new.type'
import { FormatImage } from '../../utils/util.type'
import Data_Media from '../../component/constant'
import { Link } from 'react-router-dom'

interface typeSilde {
  from?: string
  content?: any[]
  media_style?: string
  text_media?: string
  text_Media_all?: string
}



export default function Slide_Media_all({ content, from, media_style, text_media, text_Media_all }: typeSilde) {
  const [currenIndex, setCurrenIndex] = useState(0)

  const prevSlice = () => {
    const FirstSlice = currenIndex === 0
    const newIndex = FirstSlice ? content && content.length - 1 : currenIndex - 1
    setCurrenIndex(newIndex as number)
  }

  const nextSlice = () => {
    const LastSlice = currenIndex === (content && content.length - 1)
    const newIndex = LastSlice ? 0 : currenIndex + 1
    setCurrenIndex(newIndex)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currenIndex === (content && content.length - 1)) {
        setCurrenIndex(0)
      } else {
        setCurrenIndex(currenIndex + 1)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [currenIndex])

  // max-[1250px]:h-[560px] overflow-hidden  max-[875px]:h-[460px] max-[500px]:h-[350px]
  return (
    <div id="slider-media"
      className={classNames(
        `w-full ${from && from 
        }  relative bg-cover  bg-center ${media_style ? media_style : ''
        }  duration-500 group`
      )}
    >
      <Link to={`/${content&&content[currenIndex].title}/${content&&content[currenIndex].id}/${content&&content[currenIndex].catID}` }>
        <div
          style={{
            backgroundImage: `url(${content && content[currenIndex].gallery
                ? FormatImage(content && content[currenIndex].gallery)
                : content && content[currenIndex].img
              })`
          }}
          className={classNames(`w-full  ${from ? 'rounded-none' : 'rounded-2xl'} bg-center bg-cover duration-500 pt-[66.6667%]`)}
        ></div>
      </Link>
      <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlice} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlice} />
      </div>
      <div
        style={{ background: 'linear-gradient(rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 46%) 100%)' }}
        className={classNames(
          `absolute pointer-events-none	${text_media ? text_media : 'line-clamp-4 text-[20px]'
          } w-full flex flex-col justify-end	p-5 duration-500 bottom-0 left-0 top-0 right-0 max-[1250px]:text-[30px] max-[700px]:text-[20px] 	 text-white  font-bold`
        )}
      >
        <div className={classNames(`${text_Media_all ? text_Media_all : 'w-full md:text-[18px] lg:text-[20px] sm:text-[12px] text-[12px] line-clamp-2	'} mx-auto`)}>{content && content[currenIndex].title}</div>
      </div>
      {!from && (
        <div className='absolute bottom-[7%] left-[20%] flex w-[100px]  max-[700px]:bottom-[15%] justify-between'>
          {content &&
            content.map((item, index) => (
              <div
                className={classNames(
                  `${currenIndex === index ? 'w-[30%]' : 'w-[10%]'} h-2 bg-[#fff] rounded-lg duration-500`
                )}
              ></div>
            ))}
        </div>
      )}
    </div>
  )
}
