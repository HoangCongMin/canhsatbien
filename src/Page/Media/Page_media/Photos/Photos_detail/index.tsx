import React, { useState } from 'react'
import { GetImage_detail } from '../../../../../apis/GetMeidia'
import { GetImageList } from '../../../../../apis/GetNew'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Title from '../../../Component/Title'
import Detail_Audio from '../../../Component/Detail_Audio'
import { FormatImage, FormatMeida } from '../../../../../utils/util.type'
import Item_catergory from '../../../Component/Item_catergory'
import { typeData } from '../../../Component/Item_catergory'
import { useEffect } from 'react'
import {GetItem_detail} from '../../../../../apis/GetMeidia'

export default function Photos_detail() {
  const { id } = useParams()
  const { data: List_img } = useQuery({
    queryKey: ['Photo_detail', id],
    queryFn: () => GetItem_detail(Number(id))
  })


  const { data: Photo_detail_Item } = useQuery({
    queryKey: ['Photo_detail_item', id],
    queryFn: () => GetImage_detail(Number(id))
  })

  const { data: List_imgitem } = useQuery({
    queryKey: ['List_Photo_All'],
    queryFn: () => GetImageList()
  })
  const Video_Item_data_List = List_imgitem?.data
  const ma = Video_Item_data_List && (Video_Item_data_List.length = 10)

  const [datajson,setDataJson]=useState ({Title:'',Description:'',Gallery:'',Video:''})



  useEffect(() => {
    if(List_img){
      setDataJson(JSON.parse(List_img?.data?.fieldValue) )
    }
    window.scrollTo(0, 0)
  }, [id,List_img])

  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
      <div className='font-bold text-2xl not-italic	'>
          {datajson && datajson?.Title}
        </div>
        <div className='text-[20px] text-[#182940] not-italic	font-[roboto]'>
          {datajson?.Description}
        </div>
        <div className='text-[#768496] not-italic text-[15px] font-normal font-[roboto]	'>
          {List_img?.data.createdDate}
        </div>

        <div className='mt-[20px] mb-5'>
          <img className='w-[90%] m-auto' src={ FormatMeida(datajson?.Gallery)} alt="" />
          <img className='w-[90%] mt-4 m-auto' src={ FormatMeida(datajson?.Video)} alt="" />
        </div>

        <div className='mt-6 mb-20'>
          <Title name={'Multimedia Danh sách Image'} />
          {
            <div className='grid grid-cols-4 gap-4 max-[850px]:grid-cols-2 max-[450px]:grid-cols-1 mt-10'>
              {Video_Item_data_List &&
                Video_Item_data_List.map((item: typeData) => (
                  <Item_catergory Image={true} data={item} type={'Photos'} />
                ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

     



 {/* <Title name={'Multimedia Image'} /> */}
        {/* <div
          className='bg-no-repeat bg-center  relative mt-10	bg-cover pt-[55.6%]	'
          style={{
            backgroundImage: `url(${
              FormatMeida(Photo_detail_Item && Photo_detail_Item?.data?.sliderExtra?.gallery) ||
              FormatMeida(Photo_detail_Item && Photo_detail_Item?.data?.sliderExtra?.images)
            })`
          }}
        >
          <div
            className='w-full absolute'
            style={{ background: 'linear - gradient(rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.46) 100 %)' }}
          ></div>
          <div className='absolute bottom-10 w-[80%] left-[10%] z-20'>
            <h1 className='text-[25px] text-[#fff] font-bold font-[Arial] text-center mt-5'>
              {Photo_detail_Item && Photo_detail_Item?.data?.sliderExtra?.title}
            </h1>
          </div>
        </div> */}