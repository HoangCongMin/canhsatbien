import React from 'react'
import Video from '../../../../type/video.type'
import videoDetail from '../../../../type/videoDetail'
import {FormatImage,FormatMeida,Date_Time} from'../../../../utils/util.type'

export default function Media_detail({Video_Item_data}:any) {
  // console.log(Video_Item_data.datePost)
  return (
    <div>
          <h1 className='text-[25px] max-[600px]:text-[20px]  max-[400px]:text-[15px] text-[#004175] font-bold font-[Arial] mt-5'>
            {Video_Item_data && Video_Item_data?.title}
          </h1>
          <p className='text-[#768496] not-italic text-[15px] font-normal font-[roboto]	'>{Date_Time(Video_Item_data?.datePost)}</p>
          <video className='w-full mt-5' src={FormatMeida(Video_Item_data?.video)} controls></video>
        </div>
  )
}
