
import { GetListRadio } from '../../../../apis/GetMeidia'
import { useQuery } from '@tanstack/react-query'
import { FormatImage } from '../../../../utils/util.type'
import Title from '../../../Media/Component/Title'
import Item_catergory from '../../../Media/Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'
import Detail_Audio from'../../Component/Detail_Audio'
import {useEffect}from'react'
import {FormatMeida} from'../../../../utils/util.type'

export default function Radio_News() {

  const { data: Radio_Item } = useQuery({ queryKey: ['List_Voice Radio'], queryFn: GetListRadio })



  const Video_Item_data_List = Radio_Item?.data



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        <Title name={'Multimedia Radio'} />
        <Detail_Audio title={Video_Item_data_List && Video_Item_data_List[0]?.sliderExtra?.title} audio={Video_Item_data_List && Video_Item_data_List[0]?.sliderExtra?.video}  bg={Video_Item_data_List&&Video_Item_data_List[0]?.sliderExtra?.gallery}/>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Audio'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[1000px]:grid-cols-2 max-[450px]:grid-cols-1'>{Video_Item_data_List&&Video_Item_data_List?.map((item: typeData) => (
              <Item_catergory Voices={true} data={item} type={'Radio_News'} />
            ))}</div>
          }
        </div>
      </div>
    </div>

  )
}