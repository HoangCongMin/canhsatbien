import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { GetImage_detail, GetListInfographic, GetItem_detail } from '../../../../../apis/GetMeidia'
import Title from '../../../Component/Title'
import { FormatImage, FormatMeida, Ingrp, Date_Time } from '../../../../../utils/util.type'
import Item_catergory from '../../../../../Page/Media/Component/Item_catergory'
import { typeData } from '../../../Component/Item_catergory'

export default function Infographics_detail() {
  const { id } = useParams()
  const { data: List_detail } = useQuery({
    queryKey: ['Infographics_Item', id],
    queryFn: () => GetItem_detail(Number(id))
  })

  const { data: Video_Item_data_List } = useQuery({
    queryKey: ['Infographics_Item_list'],
    queryFn: () => GetListInfographic()
  })

  const [datajson, setDataJson] = useState({ Title: '', Description: '', Gallery: '', Video: '' })

  useEffect(() => {
    if (List_detail) {
      setDataJson(JSON.parse(List_detail?.data?.fieldValue))
    }
    window.scrollTo(0, 0)
  }, [id, List_detail])
  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        <div className='text-[#768496] not-italic text-[15px] font-normal font-[roboto]	'>
          {Date_Time(List_detail?.data.createdDate)}
        </div>
        <div className='font-bold text-2xl not-italic	'>{datajson && datajson?.Title}</div>
        <div className='text-[20px] text-[#182940] not-italic	font-[roboto]'>{datajson && datajson?.Description}</div>

        <div className='mt-[20px] mb-5'>
          <img className='w-[90%] m-auto' src={FormatMeida(datajson?.Gallery)} alt='' />
          <img className='w-[90%] mt-4 m-auto' src={FormatMeida(datajson?.Video)} alt='' />
        </div>

        {/* <Title name={'Multimedia Image'} />
        <div
          className='bg-no-repeat bg-center  relative mt-10	bg-cover pt-[55.6%]	'
          style={{
            backgroundImage: `url(${
              FormatMeida(List_detail && List_detail?.data?.sliderExtra?.gallery) ||
              FormatMeida(List_detail && List_detail?.data?.sliderExtra?.gallery)
            })`
          }}
        >
          <div
            className='w-full absolute'
            style={{ background: 'linear - gradient(rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.46) 100 %)' }}
          ></div>
          <div className='absolute bottom-10 w-[80%] left-[10%] z-20	 '>
            <h1 className='text-[25px] text-[#fff] font-bold font-[Arial] text-center mt-5'>
              {List_detail && List_detail?.data?.sliderExtra?.title}
            </h1>
          </div>
        </div> */}

        <div className='mt-10 mb-20'>
          <Title name={'Multimedia Danh sách Image'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[850px]:grid-cols-2 max-[450px]:grid-cols-1'>
              {Video_Item_data_List &&
                Video_Item_data_List?.data?.map((item: typeData) => (
                  <Item_catergory Imge2={true} data={item} type={'Infographics'} />
                ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
