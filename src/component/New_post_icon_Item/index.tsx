import React from 'react'
import { item } from '../NewPost_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames'

interface newsItemStory {
  newsItem: item
  classItem_all?: string
}

export default function New_post_icon_Item({ newsItem, classItem_all }: newsItemStory) {
  return (
    <Tippy className='bg-[#F6F6F6]' arrow={false} content={<span className={'text-black'}>{newsItem.story}</span>}>
      <div className='py-2 cursor-pointer'>
       
        <div
          className={classNames(
            ` text-[#182940] text-[15px] hover:text-[#191970] font-medium	w-[90%] ${
              classItem_all ? 'text-[10px]' : 'text-[14px]'
            }`
          )}
        >
          {newsItem.story_All}
        </div>

        <div
          className={classNames(
            `w-[7%]  text-[#62748D] hover:text-[#191970] font-normal text-center	${
              classItem_all ? 'text-[10px]' : 'text-[14px]'
            }`
          )}
        >
          20:17
        </div>
      </div>
    </Tippy>
  )
}
