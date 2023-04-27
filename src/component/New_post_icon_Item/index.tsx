import React from 'react'
import { item } from '../NewPost_Item'
interface newsItemStory {
  newsItem: item
}

export default function New_post_icon_Item({ newsItem }: newsItemStory) {
  return (
    <div className='flex py-2 border-t-[0.5px] border-stale-300 cursor-pointer'>
      <div className='w-[10%] border-r-[0.5px] border-stale-300 text-[#62748D] font-normal	text-[14px]'>20:17</div>
      <div className='line-clamp-1 text-[#182940] text-[15px] font-medium	w-[90%] ml-3'>{newsItem.story}</div>
    </div>
  )
}
