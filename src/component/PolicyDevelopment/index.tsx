import React from 'react'
import { item_All, item } from '../NewPost_Item'
import New_post_icon_Item from '../New_post_icon_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'
import { RiSendPlaneFill } from 'react-icons/ri'

export default function PolicyDevelopment({
  itemAll_id,
  itemAll_RelatedNews,
  itemAll_content,
  itemAll_image,
  itemAll_title,
  itemAll_Name,
  itemAll_Name_All,
  itemAll_content_All,
  header
}: item_All) {
  const handle_item=()=>{}
  return (
    <div className='w-[100%] cursor-pointer	'>
      <div className='w-full border-b-[4px] relative  border-[#d6d6d6] pt-[3.1rem]'>
      {/* <span className='border-b-[4px] border-[#d42b1a] absolute top-[50px] w-[19%]'></span> */}

        <div className='py-3 flex items-center border-b-[4px] border-[#d42b1a] absolute top-0 z-10'>
          <RiSendPlaneFill className='text-[#ff7f00] text-[22px]' />
          <h1 className='font-bold	text-[17px] ml-2 uppercase text-[#00008B] hover:text-[#191970] cursor-pointer'>
            {header}
           
          </h1>
        </div>
      </div>
      <div className='flex justify-between max-[1000px]:flex-col'>
        <div className='mt-4 w-[50%]  max-[1000px]:w-full' >
          <div className='w-full overflow-hidden cursor-pointer relative group'>
            <img
              className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out 	'
              src={itemAll_image}
              alt=''
            />
          </div>

          <div className='w-full mt-3'>
            <h3 className='line-clamp-3 text-[18px] font-medium	text-[#031739] hover:text-[#191970]'>
              {itemAll_Name_All}
            </h3>
            <p className='text-[14px] text-[#3B4E68]'>{itemAll_content_All}</p>
          </div>
        </div>
        <div className='mt-4 w-[45%]  max-[1000px]:flex  max-[1000px]:w-[100%] max-[1000px]:flex-wrap '>
          {itemAll_RelatedNews.map((item: item) => (
            <New_post_icon_Item handle={handle_item} newsItem={item} />
          ))}
        </div>
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
