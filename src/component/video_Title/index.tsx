import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Image_csb from '../../assets/cover canh sat bien vn.jpg'
import classNames from 'classnames'

interface video_all {
  Video_media_title?: string
  Video_media_video?: string
  Image_csb_All?: string
  hight_item?: string
  line_clamp?: string
  class_Title?: string
  content?: string
  class_content_icon?: string
  time?: string
}
export default function Video_Title({
  Video_media_title,
  Video_media_video,
  Image_csb_All,
  hight_item,
  line_clamp,
  class_Title,
  content,
  class_content_icon,
  time
}: video_all) {
  // const vidRef = useRef(null)
  const [videoPlay, setVideoPlay] = useState(false)
  return (
    <div>
      {videoPlay ? (
        <div
          className={classNames(`w-full  ${hight_item ? hight_item : 'h-[13rem]'} max-[1160px]:h-auto`)}
          onMouseOut={() => setVideoPlay(false)}
        >
          <video className='object-cover h-full w-full' controls>
            <source src={Video_media_video} type='video/mp4' />
          </video>
        </div>
      ) : (
        <div
          className={classNames(`w-full ${hight_item ? hight_item : 'h-[13rem]'}  max-[1160px]:h-auto`)}
          onMouseOver={() => setVideoPlay(true)}
        >
          <img className='w-full h-full' src={Image_csb_All} alt='' />
        </div>
      )}
      <div className={classNames(`${class_Title ? class_Title : 'mt-3 text-[14px] text-[#3B4E68]'} `)}>
        {<div className='text-[12px] font-[Roboto] text-[#3B4E68BF] font-thin pb-1'>{time}</div>}
        <div className={classNames(`${line_clamp ? line_clamp : ''} cursor-pointer text-[#000] hover:text-[#182940]`)}>
          {Video_media_title}
        </div>
      </div>
      <div className={classNames(`${class_content_icon ? 'flex justify-start' : 'flex justify-end'}`)}>
        <Link
          className={classNames(class_content_icon ? class_content_icon : 'text-[#b40000] text-right mt-3')}
          to={'/media'}
        >
          {content}
        </Link>
      </div>
    </div>
  )
}
