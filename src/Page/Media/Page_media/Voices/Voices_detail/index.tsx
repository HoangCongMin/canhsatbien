import React from 'react'
import {GetRadioDetail,GetListVoice} from'../../../../../apis/GetMeidia'
import { useQuery}from'@tanstack/react-query'
import {useParams} from'react-router-dom'
import Detail_Audio from'../../../Component/Detail_Audio'
import Title from '../../../Component/Title'
import Item_catergory from '../../../Component/Item_catergory'
import { typeData } from '../../../Component/Item_catergory'

export default function Voices_detail() {
    const {id}=useParams()
    const {data:Voices_detail_item_all}=useQuery({
        queryKey:['Voices_detail_item',id],queryFn:()=>GetRadioDetail(Number(id))
    })

    const { data: Voice_Item } = useQuery({ queryKey: ['List_Voice_media_xame'], queryFn: GetListVoice })

    const Video_Item_data_List = Voice_Item?.data


  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        <Title name={'Multimedia Voice'} />
        <Detail_Audio audio={Voices_detail_item_all && Voices_detail_item_all?.data?.sliderExtra?.video} bg={Voices_detail_item_all?.data?.sliderExtra?.gallery} title={Voices_detail_item_all?.data?.sliderExtra?.title}/>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Radio'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10'>{Video_Item_data_List&&Video_Item_data_List?.map((item: typeData) => (
              <Item_catergory Voices={true} data={item} type={'Voices'} />
            ))}</div>
          }
        </div>
      </div>
    </div>
  )
}
