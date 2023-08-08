
import { GetListInfographic } from '../../../../apis/GetMeidia'
import { useQuery } from '@tanstack/react-query'
import { FormatImage,FormatMeida } from '../../../../utils/util.type'
import Title from '../../../Media/Component/Title'
import Item_catergory from '../../../Media/Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'
import { useEffect } from 'react'

export default function Infographics() {

  const { data: Image_Item, refetch } = useQuery({ queryKey: ['List_Infographics _media'], queryFn: GetListInfographic, refetchOnMount: true })



  const Video_Item_data_List = Image_Item?.data


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        <Title name={'Multimedia GetListInfographic'} />
        <div className='bg-no-repeat bg-center  relative mt-10	bg-cover pt-[55.6%]	' style={{ backgroundImage: `url(${FormatMeida(Video_Item_data_List && Video_Item_data_List[0].sliderExtra.gallery) || FormatMeida(Video_Item_data_List && Video_Item_data_List[0].sliderExtra.gallery)})` }} >
          <div className='w-full absolute' style={{ background: "linear - gradient(rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.46) 100 %)" }}></div>
          <div className='absolute bottom-10 w-[80%] left-[10%] z-20	 '>
            <h1 className='text-[25px] text-[#fff] font-bold font-[Arial] text-center mt-5 max-[700px]:text-[20px]  max-[500px]:text-[15px]'>{Video_Item_data_List&&Video_Item_data_List&&Video_Item_data_List[0].sliderExtra.title}</h1>
          </div>

        </div>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách GetListInfographic'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[1000px]:grid-cols-2 max-[450px]:grid-cols-1'>{Video_Item_data_List&&Video_Item_data_List.map((item: typeData) => (
              <Item_catergory type={'Infographics'}  Voices={true} data={item} />
            ))}</div>
          }
        </div>
      </div>
    </div>

  )
}