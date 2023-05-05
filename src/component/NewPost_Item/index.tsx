import React from 'react'
import New_post_icon_Item from '../New_post_icon_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'
import classNames from 'classnames';

export interface item {
  story: string
  id: number
  story_All: string
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
  class_Custom_layout?:string
}
export default function NewPost_Item({
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
    <div className={classNames(`${class_NewPost_Item}${class_Custom_layout}`)}>
      <div className='w-full border-t-[2px] border-[#DA251C]'>
        <div className='border-b-[1px] border-stale-300 py-3'>
          <h1 className='font-bold	text-[17px] uppercase text-[#031739] hover:text-[#191970]'>{itemAll_title}</h1>
        </div>
      </div>

      <div className='mt-4 flex justify-between'>
        <div className='w-[50%] overflow-hidden cursor-pointer relative group'>
          <img className='hover:brightness-50 w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out' src={itemAll_image} alt='' />
        </div>
        {/* <Tippy
          className='bg-[#F6F6F6]'
          arrow={false}
          followCursor={true}
          plugins={[followCursor]}
          content={
            <div className='w-[100%]  max-[850px]:w-[100%] cursor-pointer	'>
              <div className='mt-4 '>
                <div className='w-[80%] m-auto overflow-hidden cursor-pointer relative group'>
                  <img className='w-full' src={itemAll_image} alt='' />
                </div>
                <div className='w-[80%] m-auto'>
                  <h3 className=' mt-3 text-[14px] font-medium	text-[#031739] hover:text-[#191970]'>{itemAll_Name}</h3>
                  <p className='text-[10px] text-[#3B4E68] '>{itemAll_content}</p>
                </div>
              </div>
            
            </div>
          }
        >
        </Tippy> */}
          <div className='w-[48%]'>
            <h3 className='line-clamp-2 text-[18px] font-medium	text-[#031739] hover:text-[#191970]'>
              {itemAll_Name_All}
            </h3>
            <p className='text-[14px] text-[#3B4E68] line-clamp-4'>{itemAll_content_All}</p>
          </div>
      </div>
      <div className='mt-4'>
        {itemAll_RelatedNews.map((item: item) => (
          <New_post_icon_Item newsItem={item} />
        ))}
      </div>
    </div>
  )
}


  {/* <div className='mt-4'>
              {itemAll_RelatedNews.map((item: item) => (
                <New_post_icon_Item classItem_all={'text-[10px]'} newsItem={item} />
              ))}
            </div> */}