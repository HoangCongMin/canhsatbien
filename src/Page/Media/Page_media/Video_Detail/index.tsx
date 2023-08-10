import React,{useEffect} from 'react'

import videoDetail from '../../../../type/videoDetail'
import Media_detail from '../../Component/Media_detail'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { GetVideoDetail } from '../../../../apis/GetMeidia'
import { GetListVideoAllTow_Item } from '../../../../apis/GetMeidia'
import Item_catergory from '../../Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'
import Title from '../../../Media/Component/Title'

export default function Video_Detail() {
  const { id } = useParams()

  const { data } = useQuery({ queryKey: ['detail_video',id], queryFn: () => GetVideoDetail(Number(id)) })
  const { data: List_Data } = useQuery({
    queryKey: ['List_Video', data?.data?.videoExtra?.categoryId],
    queryFn: () => GetListVideoAllTow_Item(data?.data?.videoExtra?.categoryId)
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='w-full'>
     
      <Media_detail Video_Item_data={data?.data?.videoExtra} />
      <div className='mt-6'>
        <Title name={'Tin liên quan'} />
      </div>
      {
        <div className='grid grid-cols-4 gap-4 mt-10 '>
          {List_Data &&
            List_Data?.data?.map((item: typeData) => <Item_catergory video={true} type={'video'} data={item} />)}
        </div>
      }
    </div>
  )
}
