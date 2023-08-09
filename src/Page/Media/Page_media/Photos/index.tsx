
import { GetImageList } from '../../../../apis/GetNew'
import { GetImage_detail } from '../../../../apis/GetMeidia'

import { useQuery } from '@tanstack/react-query'
import { FormatImage } from '../../../../utils/util.type'
import Title from '../../../Media/Component/Title'
import Item_catergory from '../../../Media/Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'
import {useEffect}from'react'
import {FormatMeida} from'../../../../utils/util.type'


export default function Photos() {

  const { data: Image_Item } = useQuery({ queryKey: ['List_Voice _media'], queryFn: GetImageList })
  const Video_Item_data_List = Image_Item?.data


  const { data: Voice_Item_item } = useQuery({ queryKey: ['List_Voice_media_item', Image_Item && Video_Item_data_List[0]?.id], queryFn: ()=>GetImage_detail(Video_Item_data_List && Video_Item_data_List[0].id) })



  // const ma = Video_Item_data_List && (Video_Item_data_List.length = 10)

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
         <Title name={'Multimedia Image'} />
       
         <div
              className='font-[NotoSerif] text-[19px] mt-4  text-justify'
              dangerouslySetInnerHTML={{
                __html:Voice_Item_item?.data?.sliderExtra?.description && handle_String(Voice_Item_item?.data?.sliderExtra?.description),
              }}/>

        <div className='mt-6'></div>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Image'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[1000px]:grid-cols-2 max-[450px]:grid-cols-1'>{Video_Item_data_List&&Video_Item_data_List.map((item: typeData) => (
              <Item_catergory typeImage={ true} Voices={true} type={'Photos'} data={item} />
            ))}</div>
          }
        </div>
      </div>
    </div>

  )
}