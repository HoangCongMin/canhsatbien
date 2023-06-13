import React from 'react'
import { List_Data_media_product } from '../constant'
import Video_Title from '../video_Title'
import classNames from 'classnames'

interface data_all {
  data: data_item[]
  class_item?: number
  responsive_1440px?: string
  responsive_1024px?: string
  responsive_600px?: string
}

interface data_item {
  image: string
  video: string
  title: string
  time?: string
}
export default function List_New_All_Item({
  data,
  class_item,
  responsive_1440px,
  responsive_1024px,
  responsive_600px
}: data_all) {
  return (
    <div
      className={classNames(
        `grid grid-cols-5 max-[1440px]:grid-cols-4 max-[1024px]:grid-cols-3 max-[600px]:grid-cols-2 max-[500px]:grid-cols-1  grid-row-3 gap-6`
      )}
    >
      {data.map((item: data_item) => (
        <Video_Title
          class_Title={'text-[15px] text-[#182940] font-bold mt-4'}
          content={'28/04/2023'}
          Video_media_title={item.title}
          Video_media_video={item.video}
          Image_csb_All={item.image}
          hight_item={'h-[65%] mt-2'}
          line_clamp={'line-clamp-2'}
          class_content_icon={'text-[13px] text-[#3B4E69BF] font-[Roboto]'}
          time={item.time}
        />
      ))}
    </div>
  )
}
