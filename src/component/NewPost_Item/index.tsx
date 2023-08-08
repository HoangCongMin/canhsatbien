import React, { useState } from 'react'
import New_post_icon_Item from '../New_post_icon_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { followCursor } from 'tippy.js'
import classNames from 'classnames'
import Logo from '../../assets/logo-csb-080730606.png'
import Featured from '../../type/new.type'
import { Link, useParams } from 'react-router-dom'
export interface item {
  story: string
  id: number
  story_All: string
  contentAll: string
  img: string
}

export interface item_All {
  itemAll_id?: number
  itemAll_title?: string
  itemAll_image?: string
  itemAll_content?: string
  itemAll_Name?: string
  itemAll_RelatedNews?: Featured[]
  itemAll_Name_All?: string
  itemAll_content_All?: string
  class_NewPost_Item?: string
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
  const [item_Wrapper, setItem_Wrapper] = useState({
    id: 8,
    image: itemAll_image,
    content:
      'Từ ngày 04 – 06/5/2023, Thiếu tướng Lê Quang Đạo - Tư lệnh Cảnh sát biển Việt Nam, Đại biểu Quốc hội khóa XV cùng Đoàn Đại biểu Quốc hội (ĐBQH) tỉnh Phú Yên đã tiếp xúc cử tri tại Tp. Tuy Hòa, thị xã Sông Cầu, huyện Tuy An và huyện Đồng Xuân thuộc tỉnh Phú Yên.',
    name: 'Tập huấn, phổ biến chính sách, pháp luật về bảo vệ biên giới và chủ quyền biển, đảo',
    nameAll: itemAll_Name_All,
    contentAll: itemAll_content_All
  })

  const handle_Item = (img: string, storyall: string, contentAll: string) => {
    setItem_Wrapper((pre) => ({ ...pre, image: img, nameAll: storyall, contentAll: contentAll }))
  }



  return (
    <div id="news-post" className={classNames(`${class_NewPost_Item}${class_Custom_layout} mt-6`)}>
      <div className='w-[100%] relative border-b-[2.5px] md:border-b-[4px] border-[#ffcc00] md:border-[#e5e7eb] py-3	pb-[2.4rem]'>
        <span className='items-center border-0 md:border-b-[4px] inline-block border-[#ffcc00] absolute top-0 left-0 right-0 md:right-[auto] pt-[11px] pb-[0.77rem] z-10 '>
          <img className='h-[1.7rem] text-[#ff7f00] pb-1 inline-block' src={Logo} />
          <h2 className='font-bold max-[360px]:text-[14px] inline-block	text-[17px] uppercase text-[#00008B] ml-3 '>
        
            {itemAll_title}
          </h2>
        </span>
      </div>

      <div className='flex justify-between max-[1000px]:flex-col'>
        {/* <div className='mt-4 w-[50%] max-[1000px]:w-full '>
          <div className='w-full overflow-hidden cursor-pointer relative group'>
            <img
              className=' w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out'
              src={item_Wrapper.image}
              alt=''
            />
          </div>
          <div className='w-full mt-3 '>
            <h3 className='text-[18px] font-medium	text-[#031739] hover:text-[#191970]'>{item_Wrapper.nameAll}</h3>
            <p className='text-[14px] text-[#3B4E68]'>{item_Wrapper.contentAll}</p>
          </div>
        </div> */}
        {/* max-[1000px]:flex-row  max-[1000px]:justify-between max-[1000px]:flex-wrap max-[687px]:	 max-[1000px]:w-full */}

        {/* grid-rows-3 */}
        <div className='mt-4 w-full grid  grid-cols-5  gap-4 max-[900px]:grid-cols-4'>
          {itemAll_RelatedNews?.map((item: Featured,i: number) => {
            if (i==0) {
              return (
                <New_post_icon_Item key={i} newsItem={item} itemAll_id={itemAll_id} title={itemAll_title} name={item.title} id_Item={item.id} content={item.introText} handle={handle_Item} />
              )
            } else {
              return (<>
                <New_post_icon_Item key={i} newsItem={item} itemAll_id={itemAll_id} title={itemAll_title} name={item.title} id_Item={item.id} handle={handle_Item} />
              </>)
            }
            
          })}
        </div>
      </div>
    </div>
  )
}
