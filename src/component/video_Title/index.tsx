import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Image_csb from '../../assets/cover canh sat bien vn.jpg'

interface video_all {
  Video_media_title: string
  Video_media_video: string
  Image_csb_All: string
}

export default function video_Title({ Video_media_title, Video_media_video, Image_csb_All }: video_all) {
  const vidRef = useRef(null)
  const [videoPlay, setVideoPlay] = useState(false)
  return (
    <div>
      {videoPlay ? (
        <div onMouseOut={() => setVideoPlay(false)}>
          <video width='100%' height='240' controls>
            <source src={Video_media_video} type='video/mp4' />
          </video>
        </div>
      ) : (
        <div className='w-full  h-[199.63px]' onMouseOver={() => setVideoPlay(true)}>
          <img className='w-full h-[199.63px] ' src={Image_csb_All} alt='' />
        </div>
      )}
      <div className='mt-3 text-[14px] text-[#3B4E68]'>{Video_media_title}</div>
      <div className='flex justify-end'>
        <Link className='text-[#b40000] text-right mt-3' to={''}>
          Xem tất cả...
        </Link>
      </div>
    </div>
  )
}
