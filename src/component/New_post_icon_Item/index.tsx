import React from 'react'
import { item } from '../NewPost_Item'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames';



interface newsItemStory {
  newsItem: item
  classItem_all?: string
}

export default function New_post_icon_Item({ newsItem, classItem_all }: newsItemStory) {
  return (
    <Tippy className='bg-[#F6F6F6]' arrow={false} content={<span className={'text-black'}>{newsItem.story}</span>}>
      <div className='flex py-2 cursor-pointer' >
        <div className={classNames(`w-[10%] border-r-[0.5px] border-stale-300 text-[#62748D] font-normal	${classItem_all ? 'text-[10px]' : 'text-[14px]'}`)}
        >20:17</div>
        <div className={classNames(`line-clamp-1 text-[#182940] text-[15px] font-medium	w-[90%] ml-3 ${classItem_all ? 'text-[10px]' : 'text-[14px]'}`)}>{newsItem.story}</div>
      </div>
    </Tippy>
  )
}
