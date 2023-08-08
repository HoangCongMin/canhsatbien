import React from 'react'
import { Organization_Payroll_Data } from '../constant'
import Item_content_same from '../Content_Same/Item_content_same'
import PostArticleRelate from '../../type/PostArticleRelate'
import { useQuery } from '@tanstack/react-query'
import { GetArticleRelate } from '../../apis/GetNew'
import { Link } from 'react-router-dom'
import { Date_Time } from '../../utils/util.type'
import {useParams} from'react-router-dom'



interface data_Post_Same {
  data: number
  name?:string
  title_name?:string
}


export default function Content_Same({ data,name,title_name }: data_Post_Same) {
  const data_item = useParams()

  const { data: data_All } = useQuery({
    queryKey: ['ProductPortal', data],
    queryFn: () => GetArticleRelate(data as number)
  })






  return (
    <div className='w-full mt-4'>
      <div className='w-full border-t-[2px] border-[#DA251C]'>
        <div className='border-b-[1px] border-stale-300 py-3'>
          <div className='font-bold	text-[17px] uppercase hover:text-[#0066bc] cursor-pointer'>
            Nội dung cùng chuyên mục
          </div>
        </div>
      </div>
      <div className='w-full'>
        {
          data_All?.data.map((item: PostArticleRelate) => (
            <>
            {/* to={`/${data_item.title}/${data_item.idall}/${title_name}/${item.id}`} */}
              <Link className='flex items-center max-[1000px]:flex-col max-[1000px]:items-start  ' to={`/${item.title}/${item.id}/${item.catId}`}>

                <Item_content_same Organization_Payroll_Data={item} key={item.id} />
                <span className='text-[#838383] text-[15px] font-[Roboto] my-3 text-justify	ml-2'>({Date_Time( item.datePost)})</span>
              </Link>
            </>
          ))
        }
      </div>
    </div>
  )
}
