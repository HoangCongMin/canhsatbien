import React from 'react'
import { GetLongFormDetail, GetListVoice } from '../../../../../apis/GetMeidia'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Detail_Audio from '../../../Component/Detail_Audio'
import Title from '../../../Component/Title'
import Item_catergory from '../../../Component/Item_catergory'
import { typeData } from '../../../Component/Item_catergory'
import {Date_Time} from'../../../../../utils/util.type'
import {useEffect} from'react'


export default function Voices_detail() {
  const { id } = useParams()
  const { data: Voices_detail_item_all } = useQuery({
    queryKey: ['Voices_detail_item', id],
    queryFn: () => GetLongFormDetail(Number(id))
  })

  const { data: Voice_Item } = useQuery({ queryKey: ['List_Voice_media_xame'], queryFn: GetListVoice })

  const Video_Item_data_List = Voice_Item?.data
  
  function handle_String(data: string) {
    const newStr = data.replace(/upload/g, 'https://csbe.3i.com.vn//upload')
    // const index = newStr.indexOf('/https://canhsatbien.vn//upload')

    const style = "className='m-auto'"
    const ma = newStr
    const result = ma.replaceAll('src="/', 'src="')
    const style_result = result.replace(/img/g, "img class='m-auto' ")
    const result_item=style_result.replace(/em/g,"p class='text-[19px] text-center'")
    return result_item
  }

    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])



  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        {/* <Title name={'Multimedia Voice'} />
        <Detail_Audio audio={Voices_detail_item_all && Voices_detail_item_all?.data?.sliderExtra?.video} bg={Voices_detail_item_all?.data?.sliderExtra?.gallery} title={Voices_detail_item_all?.data?.sliderExtra?.title}/> */}

        <div className='text-[#768496] not-italic text-[15px] font-normal font-[roboto]	'>
          {Date_Time(Voices_detail_item_all?.data?.datePost)}
        </div>
        <div className='font-bold text-2xl not-italic	'>
          {Voices_detail_item_all && Voices_detail_item_all?.data?.sliderExtra?.title}
        </div>
        <div
              className='font-[NotoSerif] text-[19px] mt-4  text-justify'
              dangerouslySetInnerHTML={{
                __html:Voices_detail_item_all?.data?.sliderExtra?.description && handle_String(Voices_detail_item_all?.data?.sliderExtra?.description),
              }}/>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Radio'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10'>
              {Video_Item_data_List &&
                Video_Item_data_List?.map((item: typeData) => (
                  <Item_catergory typeImage={true} Voices={true} data={item} type={'Voices'} />
                ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
