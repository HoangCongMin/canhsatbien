import React from 'react'
import Video from '../../../../type/video.type'
import videoDetail from '../../../../type/videoDetail'
import {FormatImage} from'../../../../utils/util.type'

export default function Media_detail({Video_Item_data}:any) {
  return (
    <div>
          <h1 className='text-[25px] max-[600px]:text-[20px]  max-[400px]:text-[15px] text-[#004175] font-bold font-[Arial] text-center mt-5'>
            {Video_Item_data && Video_Item_data?.title}
          </h1>
          <video className='w-full mt-5' src={FormatImage(Video_Item_data?.video)} controls></video>
        </div>
  )
}
