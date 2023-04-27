import React from 'react'
import { item_All, item } from '../NewPost_Item'
import New_post_icon_Item from '../New_post_icon_Item'

export default function PolicyDevelopment({
  itemAll_id,
  itemAll_RelatedNews,
  itemAll_content,
  itemAll_image,
  itemAll_title,
  itemAll_Name
}: item_All) {
  return (
    <div className='w-[100%] cursor-pointer	'>
      <div className='w-[93%]'>
        <div className='mt-4 flex justify-between'>
          <div className='w-[50%]'>
            <img className='w-full' src={itemAll_image} alt='' />
          </div>
          <div className='w-[48%]'>
            <h3 className='line-clamp-2 text-[18px] font-medium	text-[#031739]'>{itemAll_Name}</h3>
            <p className='text-[14px] text-[#3B4E68] line-clamp-4'>{itemAll_content}</p>
          </div>
        </div>
        <div className='mt-4 '>
          {itemAll_RelatedNews.map((item: item) => (
            <New_post_icon_Item newsItem={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
