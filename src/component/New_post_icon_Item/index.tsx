import React from 'react'
import { item } from '../NewPost_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames'

interface newsItemStory {
  newsItem: item
  classItem_all?: string
  img_Item?: string
}

export default function New_post_icon_Item({ newsItem, classItem_all, img_Item }: newsItemStory) {
  return (
    <Tippy className='bg-[#F6F6F6]' arrow={false} content={<span className={'text-black'}>{newsItem.story_All}</span>}>
      <div className='py-2 cursor-pointer'>
        <div
          className={classNames(
            ` text-[#182940] text-[15px] hover:text-[#191970] font-medium	w-full m-auto flex justify-between ${
              classItem_all ? 'text-[10px]' : 'text-[14px]'
            }`
          )}
        >
          <img src={newsItem.img} className='w-[30%] h-[68px]' alt='' />
          <div className='w-[65%]'>
            <div className='text-[15px] hover:text-[#191970]'>{newsItem.story_All}</div>
            <div className='text-[14px] font-[Roboto] text-[#62748D]'>20:17</div>
          </div>
        </div>

        {/* <div
          className={classNames(
            `w-[7%]  text-[#62748D] hover:text-[#191970] hover:text-[#191970] font-normal text-center	${
              classItem_all ? 'text-[10px]' : 'text-[14px]'
            }`
          )}
        >
          20:17
        </div> */}
      </div>
    </Tippy>
  )
}
