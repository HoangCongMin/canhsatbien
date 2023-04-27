import React from 'react'
import { item_All, item } from '../NewPost_Item'
import New_post_icon_Item from '../New_post_icon_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'

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
      <Tippy
        arrow={false}
        followCursor={true}
        plugins={[followCursor]}
        className='bg-[#F6F6F6]'
        content={
          <div className='w-full py-4'>
            <div className='w-[80%] m-auto'>
              {/* <div className='w-[100%]'>
                <img className='w-full' src={itemAll_image} alt='' />
              </div> */}
              <div className='w-[100%]'>
                <h3 className=' text-[18px] font-medium	text-[#031739] mt-1'>{itemAll_Name}</h3>
                <p className='text-[14px] text-[#3B4E68] mt-1'>{itemAll_content}</p>
              </div>
            </div>
          </div>
        }
      >
        <div className='mt-4 flex justify-between'>
          <div className='w-[50%]'>
            <img className='w-full' src={itemAll_image} alt='' />
          </div>
          <div className='w-[48%]'>
            <h3 className='line-clamp-2 text-[18px] font-medium	text-[#031739]'>{itemAll_Name}</h3>
            <p className='text-[14px] text-[#3B4E68] line-clamp-4'>{itemAll_content}</p>
          </div>
        </div>
      </Tippy>
      <div className='mt-4 '>
        {itemAll_RelatedNews.map((item: item) => (
          <New_post_icon_Item newsItem={item} />
        ))}
      </div>
    </div>
  )
}
