import React from 'react'
import { item_All, item } from '../NewPost_Item'
import New_post_icon_Item from '../New_post_icon_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'
import {RiSendPlaneFill} from'react-icons/ri'

export default function PolicyDevelopment({
  itemAll_id,
  itemAll_RelatedNews,
  itemAll_content,
  itemAll_image,
  itemAll_title,
  itemAll_Name,
  itemAll_Name_All,
  itemAll_content_All
}: item_All) {
  return (
    <div className='w-[100%] cursor-pointer	'>
      <div className='w-full border-b-[2px] border-[#DA251C]'>
        <div className='py-3 flex items-center'>
          <RiSendPlaneFill className='text-[#00008B]' />
          <h1 className='font-bold	text-[17px] ml-2 uppercase text-[#00008B] hover:text-[#191970] cursor-pointer'>
            xây dựng chính sách
          </h1>
        </div>
      </div>
      <div className='mt-4 flex justify-between'>
        <div className='w-[50%] overflow-hidden cursor-pointer relative group'>
          <img
            className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50	'
            src={itemAll_image}
            alt=''
          />
        </div>

        <div className='w-[48%]'>
          <h3 className='line-clamp-2 text-[18px] font-medium	text-[#031739] hover:text-[#191970]'>
            {itemAll_Name_All}
          </h3>
          <p className='text-[14px] text-[#3B4E68] line-clamp-4'>{itemAll_content_All}</p>
        </div>
      </div>
      <div className='mt-4 '>
        {itemAll_RelatedNews.map((item: item) => (
          <New_post_icon_Item newsItem={item} />
        ))}
      </div>
    </div>
  )
}

{
  /* <Tippy
arrow={false}
followCursor={true}
plugins={[followCursor]}
className='bg-[#F6F6F6]'
content={
  <div className='w-full py-4'>
    <div className='w-[80%] m-auto'>
      <div className='w-[100%]'>
        <h3 className=' text-[18px] font-medium	text-[#031739] mt-1'>{itemAll_Name}</h3>
        <p className='text-[14px] text-[#3B4E68] mt-1'>{itemAll_content}</p>
      </div>
    </div>
  </div>
}
>
</Tippy> */
}
{
  /* <div className='w-[100%]'>
  <img className='w-full' src={itemAll_image} alt='' />
  </div> */
}
