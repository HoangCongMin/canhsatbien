
import { GetImageList } from '../../../../apis/GetNew'
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

  const ma = Video_Item_data_List && (Video_Item_data_List.length = 10)


  console.log(Video_Item_data_List)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
         <Title name={'Multimedia Image'} />
        <div className='bg-no-repeat bg-center  relative mt-10	bg-cover pt-[55.6%]	' style={{ backgroundImage: `url(${FormatMeida(Video_Item_data_List && Video_Item_data_List[0].sliderExtra.gallery) || FormatMeida(Video_Item_data_List&& Video_Item_data_List[0].sliderExtra.gallery)})` }} >
          <div className='w-full absolute' style={{ background: "linear - gradient(rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.46) 100 %)" }}></div>
          <div className='absolute bottom-10 w-[80%] left-[10%] z-20	 '>
            <h1 className='text-[25px] text-[#fff] font-bold font-[Arial] text-center mt-5  max-[700px]:text-[20px]  max-[500px]:text-[15px]'>{Video_Item_data_List && Video_Item_data_List[0].sliderExtra.title}</h1>
          </div>

        </div>
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