import React from 'react'
import { item } from '../NewPost_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames'

interface newsItemStory {
  newsItem: item
  classItem_all?: string
  img_Item?: string
  contentAll?:string
  handle: (img: string, storyall: string,contentall:string) => void
}

export default function New_post_icon_Item({ newsItem, classItem_all, img_Item,handle}: newsItemStory) {
  return (
   
      <div className='py-2 cursor-pointer max-[687px]:w-[45%] max-[450px]:w-[100%]  max-[1000px]:w-[160px] max-[1000px]:m-[6px]' onClick={()=>handle(newsItem.img,newsItem.story_All,newsItem.contentAll)}>
        <div
          className={classNames(
            ` text-[#182940] text-[15px] hover:text-[#191970] font-medium	w-full m-auto flex justify-between max-[1000px]:flex-col  ${
              classItem_all ? 'text-[10px]' : 'text-[14px]'
            }`
          )}
        >
          <img src={newsItem.img} className='w-[30%] h-[68px] max-[450px]:h-auto max-[1000px]:h-[100px] max-[1000px]:w-full' alt='' />
          <div className='w-[65%] max-[1000px]:w-full'>
            <div className='text-[15px] hover:text-[#191970] font-medium  max-[1000px]:line-clamp-4  max-[1000px]:mt-2'>{newsItem.story_All}</div>
            <div className='text-[14px] font-[Roboto] text-[#62748D]'>20:17</div>
          </div>
        </div>

       
      </div>
  )
}
