import React from 'react'
import { Organization_Payroll_Data } from '../constant'
import Item_content_same from '../Content_Same/Item_content_same'
import PostArticleRelate from '../../type/PostArticleRelate'
import { useQuery } from '@tanstack/react-query'
import { GetArticleRelate } from '../../apis/GetNew'
import { Link } from 'react-router-dom'


interface data_Post_Same {
  data: number
}


export default function Content_Same({ data }: data_Post_Same) {


  const { data: data_All } = useQuery({
    queryKey: ['ProductPortal', data],
    queryFn: () => GetArticleRelate(data as number)
  })

  return (
    <div className='w-full mt-4'>
      <div className='w-full border-t-[2px] border-[#DA251C]'>
        <div className='border-b-[1px] border-stale-300 py-3'>
          <div className='font-bold	text-[17px] uppercase hover:text-[#191970] cursor-pointer'>
            Nội dung cùng chuyên mục
          </div>
        </div>
      </div>
      <div className='w-full'>
        {
          data_All?.data.map((item: PostArticleRelate) => (
            <>
              <Link to={`/${item.id}`}>

                <Item_content_same Organization_Payroll_Data={item} key={item.id} />
              </Link>
            </>
          ))
        }
      </div>
    </div>
  )
}
