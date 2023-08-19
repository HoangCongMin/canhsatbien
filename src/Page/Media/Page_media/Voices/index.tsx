
import { GetListVoice,GetLongFormDetail } from '../../../../apis/GetMeidia'
import { useQuery } from '@tanstack/react-query'
import { FormatImage,FormatMeida } from '../../../../utils/util.type'
import Title from '../../Component/Title'
import Item_catergory from '../../Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'
import {useEffect} from'react'

export default function Voices() {
  
  
  const { data: Voice_Item } = useQuery({ queryKey: ['List_Voice_media'], queryFn: GetListVoice })
  
  
  
  const Video_Item_data_List = Voice_Item?.data
  const { data: Voice_Item_item } = useQuery({ queryKey: ['List_Voice_media_item', Voice_Item && Video_Item_data_List[0]?.id], queryFn: ()=>GetLongFormDetail(Video_Item_data_List && Video_Item_data_List[0].id) })

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
  }, [])

  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        {/* <Title name={'Đa phương tiện Longform'} /> */}
        {/* <div
              className='font-[NotoSerif] text-[19px] mt-4  text-justify'
              dangerouslySetInnerHTML={{
                __html:Voice_Item_item?.data?.sliderExtra?.description && handle_String(Voice_Item_item?.data?.sliderExtra?.description),
              }}/> */}

        <div className='mt-6'>
          <Title name={'Danh sách Longform'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[1000px]:grid-cols-2 max-[450px]:grid-cols-1'>{Video_Item_data_List&&Video_Item_data_List?.map((item: typeData) => (
              <Item_catergory typeImage={true} Voices={true} type={'voices'} data={item} />
            ))}</div>
          }
        </div>
      </div>
    </div>

  )
}