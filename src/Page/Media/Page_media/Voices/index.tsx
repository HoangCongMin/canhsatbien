
import { GetListVoice } from '../../../../apis/GetMeidia'
import { useQuery } from '@tanstack/react-query'
import { FormatImage,FormatMeida } from '../../../../utils/util.type'
import Title from '../../Component/Title'
import Item_catergory from '../../Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'

export default function Voices() {

  const { data: Voice_Item } = useQuery({ queryKey: ['List_Voice _media'], queryFn: GetListVoice })



  const Video_Item_data_List = Voice_Item?.data


  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto'>
        <Title name={'Multimedia Voice'} />
        <div className='bg-no-repeat bg-center  relative mt-10	bg-cover pt-[55.6%]	' style={{ backgroundImage: `url(${FormatMeida(Video_Item_data_List&&Video_Item_data_List[0].sliderExtra.gallery)})` }} >
          <div className='w-full absolute' style={{ background: "linear - gradient(rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.46) 100 %)"}}></div>
          <div className='absolute bottom-10 w-[80%] left-[10%] z-20	 '>
            <h1 className='text-[25px] text-[#fff] font-bold font-[Arial] text-center mt-5'>{Video_Item_data_List&&Video_Item_data_List[0]?.sliderExtra?.title}</h1>
            <audio className='w-full mt-5' src={Video_Item_data_List&&Video_Item_data_List[0]?.sliderExtra.audio} controls></audio >
          </div>

        </div>
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Voice'} />
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[1000px]:grid-cols-2 max-[450px]:grid-cols-1'>{Video_Item_data_List&&Video_Item_data_List?.map((item: typeData) => (
              <Item_catergory Voices={true} type={'voices'} data={item} />
            ))}</div>
          }
        </div>
      </div>
    </div>

  )
}