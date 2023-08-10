import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { GetImage_detail, GetListInfographic, GetItem_detail } from '../../../../../apis/GetMeidia'
import Title from '../../../Component/Title'
import { FormatImage, FormatMeida, Ingrp, Date_Time } from '../../../../../utils/util.type'
import Item_catergory from '../../../../../Page/Media/Component/Item_catergory'
import { typeData } from '../../../Component/Item_catergory'
// import {Date_Time} from'../../../../../utils/util.type'

export default function Infographics_detail() {
  const { id } = useParams()
  
  const { data: Video_Item_data_List } = useQuery({
    queryKey: ['Infographics_Item_list'],
    queryFn: () => GetListInfographic()
  })
  
  const { data: List_detail } = useQuery({
    queryKey: ['Infographics_Item_detail', id],
    queryFn: () => GetItem_detail(Number(id))
  })

  
  function handle_String(data: string) {
    const newStr = data.replace(/upload/g, 'https://csbe.3i.com.vn//upload')
    // const index = newStr.indexOf('/https://canhsatbien.vn//upload')

    const style = "className='m-auto'"
    const ma = newStr
    const result = ma.replaceAll('src="/', 'src="')
    const style_result = result.replace(/img/g, "img class='m-auto' ")
    const result_item = style_result.replace(/em/g, "p class='text-[19px] text-center'")
    return result_item
  }


  const item_result = List_detail?.data?.sliderExtra

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])
  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
       

        <div className='text-[#768496] not-italic text-[15px] font-normal font-[roboto]	'>
          {Date_Time(List_detail?.data?.datePost)}
        </div>
        <div className='font-bold text-2xl not-italic	'>{item_result && item_result?.title}</div>
        <div
          className='font-[NotoSerif] text-[19px] mt-4  text-justify'
          dangerouslySetInnerHTML={{
            __html: item_result?.description && handle_String(item_result?.description)
          }}
        />
        <div className='w-full my-10'>
          <img className='m-auto' src={ FormatMeida(item_result?.video)} alt="" />

        </div>

        <div className='mt-10 mb-20'>
          <Title name={'Multimedia Danh sách Image'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[850px]:grid-cols-2 max-[450px]:grid-cols-1'>
              {Video_Item_data_List &&
                Video_Item_data_List?.data?.map((item: any) => (
                  <Item_catergory Imge3={true} data={item} type={'Infographics'} />
                ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
