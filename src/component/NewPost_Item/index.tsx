import React from 'react'
import New_post_icon_Item from '../New_post_icon_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'
import classNames from 'classnames'

export interface item {
  story: string
  id: number
  story_All: string
  img:string
}

export interface item_All {
  itemAll_id: number
  itemAll_title?: string
  itemAll_image: string
  itemAll_content: string
  itemAll_Name: string
  itemAll_RelatedNews: item[]
  itemAll_Name_All: string
  itemAll_content_All: string
  class_NewPost_Item: string
  class_Custom_layout?: string
  icon_item?: any
  header?: string
}
export default function NewPost_Item({
  icon_item,
  itemAll_RelatedNews,
  itemAll_id,
  itemAll_content,
  itemAll_image,
  itemAll_title,
  itemAll_Name,
  itemAll_Name_All,
  itemAll_content_All,
  class_NewPost_Item,
  class_Custom_layout
}: item_All) {
  return (
    <div className={classNames(`${class_NewPost_Item}${class_Custom_layout} mt-6`)}>
      <div className='w-[50%] border-b-[3px] border-[#DA251C]'>
        <div className=' py-3 flex items-center'>
          <div className='text-[22px] text-[#ff7f00] pb-1'>{icon_item}</div>
          <h1 className='font-bold	text-[17px] uppercase text-[#00008B]  ml-3'>{itemAll_title}</h1>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='mt-4 w-[50%] '>
          <div className='w-full overflow-hidden cursor-pointer relative group'>
            <img
              className=' w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out'
              src={itemAll_image}
              alt=''
            />
          </div>
          <div className='w-full mt-3'>
            <h3 className='text-[18px] font-medium	text-[#031739] hover:text-[#191970]'>{itemAll_Name_All}</h3>
            <p className='text-[14px] text-[#3B4E68]'>{itemAll_content_All}</p>
          </div>
        </div>
        <div className='mt-4 w-[45%]'>
          {itemAll_RelatedNews.map((item: item) => (
            <New_post_icon_Item newsItem={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
