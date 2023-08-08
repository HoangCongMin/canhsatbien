import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { GetRadioDetail,GetListRadio } from '../../../../../apis/GetMeidia'
import Media_detail from '../../../Component/Media_detail'
import Title from '../../../Component/Title'
import Detail_Audio from '../../../Component/Detail_Audio'
import Item_catergory from '../../../Component/Item_catergory'
import { typeData } from '../../../Component/Item_catergory'



export default function Radio_News_detail() {
  const { id } = useParams()

  const { data: Radio_detail_item } = useQuery({
    queryKey: ['Radio_detail', id],
    queryFn: () => GetRadioDetail(Number(id))
  })

  const { data: Radio_Item } = useQuery({ queryKey: ['List_Voice Radio'], queryFn: GetListRadio })



  const Video_Item_data_List = Radio_Item?.data

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        <Title name={'Multimedia Radio'} />
        <Detail_Audio audio={Radio_detail_item?.data?.sliderExtra?.video} bg={Radio_detail_item?.data?.sliderExtra?.gallery} title={Radio_detail_item?.data?.sliderExtra?.title}/>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Radio'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 '>{Video_Item_data_List&&Video_Item_data_List?.map((item: typeData) => (
              <Item_catergory Voices={true} data={item} type={'Radio_News'} />
            ))}</div>
          }
        </div>
      </div>
    </div>
  )
}
