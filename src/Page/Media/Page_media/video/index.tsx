import { GetVideo, GetListVideoAllTow } from '../../../../apis/GetNew'
import { GetListVideoAll } from '../../../../apis/GetNew'
import Sort from '../../../../component/Sort'
import { useQuery } from '@tanstack/react-query'
import Title from '../../../Media/Component/Title'
import Item_catergory from '../../../Media/Component/Item_catergory'
import { typeData } from '../../Component/Item_catergory'
import Paginate from '../../../../component/Paginate'
import useQueryParam from '../../../../Hook/useQueryParam'
import Media_detail from '../../Component/Media_detail'
import VideoDetail from 'type/videoDetail'
import { useEffect } from 'react'

export default function Media() {
  const queryParam = useQueryParam()

  const { data: Video_Item } = useQuery({ queryKey: ['List_sidle_media'], queryFn: GetVideo })
  const { data: List_Video } = useQuery({
    queryKey: ['List_sidle_media_all', queryParam],
    queryFn: () => GetListVideoAllTow(queryParam.p, queryParam.categoryId)
  })
  const { data: List_Video_All } = useQuery({ queryKey: ['List_sidle_media_all_item'], queryFn: GetListVideoAll })

  const Video_Item_data = Video_Item?.data?.videoExtra as VideoDetail
  const Video_Item_data_List = List_Video?.data
  const page_size_all = List_Video?.data && List_Video_All?.data?.length % 10

  const ma = List_Video_All?.data && List_Video_All?.data?.length % 10
  const mb = List_Video_All?.data && List_Video_All?.data?.length / 10

  const handle_Paginate = () => {
    if (ma > 0) {
      return Math.floor(mb) + 1
    }
    return Math.floor(mb)
  }
  const item = handle_Paginate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [item])
  return (
    <div className='w-[100%]'>
      <div className='w-[98%] m-auto mt-[6px]'>
        <Title name={'Multimedia Video'} />

        <Media_detail Video_Item_data={Video_Item_data && Video_Item_data} />
        <div className='mt-6'>
          <Title name={'Multimedia Danh sách Video'} />

          <div className='flex justify-end mt-4	'>
            <span className='mr-4 text-[15px]'>Chọn chuyên mục :</span>
            <Sort queryParam={queryParam} />
          </div>
          {
            <div className='grid grid-cols-4 gap-4 mt-10 max-[1000px]:grid-cols-2 max-[450px]:grid-cols-1'>
              {Video_Item_data_List &&
                Video_Item_data_List?.map((item: typeData) => (
                  <Item_catergory video={true} type={'video'} data={item} />
                ))}
            </div>
          }
        </div>
        {item && <Paginate queryParam={queryParam} page_size={item} path_Name={'/media/video'} />}
      </div>
    </div>
  )
}
