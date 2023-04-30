import React from 'react'
import { List_Data_media_product } from '../constant'
import Video_Title from '../video_Title'
import classNames from 'classnames'

interface data_all {
  data: data_item[]
  class_item?: string
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
        `grid grid-cols-${class_item ? class_item : 5} grid-row-3 gap-6 ${
          responsive_1440px ? responsive_1440px : ' max-[1440px]:grid-cols-4'
        } ${responsive_1024px ? responsive_1024px : 'max-[1024px]:grid-cols-3'} ${responsive_600px?responsive_600px:'max-[600px]:grid-cols-2'} max-[450px]:grid-cols-1`
      )}
    >
      {data.map((item: data_item) => (
        <div>
          <Video_Title
            class_Title={'text-[15px] text-[#182940] font-bold mt-4'}
            content={'28/04/2023'}
            Video_media_title={item.title}
            Video_media_video={item.video}
            Image_csb_All={item.image}
            hight_item={'h-[155px] mt-2'}
            line_clamp={'line-clamp-2'}
            class_content_icon={'text-[13px] text-[#3B4E69BF] font-[Roboto]'}
            time={item.time}
          />
        </div>
      ))}
    </div>
  )
}
