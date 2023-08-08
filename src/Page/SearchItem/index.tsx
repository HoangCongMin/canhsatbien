import React from 'react'
import { GetItemSeachItem, GetItemSeachItemall } from '../../apis/GetNew'
import { useQuery } from '@tanstack/react-query'
import useQueryParam from '../../Hook/useQueryParam'
import Paginate from '../../component/Paginate'
import { FormatImage } from '../../utils/util.type'
import { Link } from 'react-router-dom'

export default function SearchItem() {
  const query = useQueryParam()
  const { data: Productall_item } = useQuery({
    queryKey: ['Productall_item', query],
    queryFn: () => GetItemSeachItem(query.name)
  })

  const { data: Productall_item_all } = useQuery({
    queryKey: ['Productall_item_all', query],
    queryFn: () => GetItemSeachItemall(query.name, Number(query.p))
  })

  const ma = Productall_item?.data && Productall_item?.data?.length % 10
  const mb = Productall_item?.data && Productall_item?.data?.length / 10

  const handle_Paginate = () => {
    if (ma > 0) {
      return Math.floor(mb) + 1
    }
    return Math.floor(mb)
  }
  const item = handle_Paginate()

  return (
    <div className='w-[78%] max-[1200px]:w-[100%]'>
      <span className='text-[#b40000] text-[14px] font-sans font-bold	'>
        Tìm thấy {Productall_item?.data?.length} kết quả
      </span>

      {Productall_item_all?.data?.map((item: any) => (
        <Link to={`/${item.id}`} className='  grid grid-cols-4 gap-3 mt-6 max-[950px]:grid-cols-3  max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
          <div>
            <img src={FormatImage(item.gallery)} alt='' />
          </div>
          <div className='col-span-3 max-[950px]:col-span-2  max-[800px]:col-span-1 '>
            <h3 className='text-[#337ab7] font-bold mt-2'>{item.title}</h3>
            <p className='text-[#1E1E1E] text-[14px] line-clamp-3 mt-4'>{item.introText}</p>
            <div className='flex justify-between mt-2'>
              <p className='text-[#737375] text-[12px]'>{item.created}</p>
              {/* <p className='text-[#737375] text-[12px]'>10/04/2023 04:36:00 PM</p> */}
              <Link to={`/${item.id}`} className='text-[#337ab7] text-[12px]'>
                Xem tiếp...
              </Link>
            </div>
          </div>
        </Link>
        //   <Link to={`/${item.id}`} className=' flex'>
        //   <div>
        //     <img src={FormatImage(item.gallery)} alt='' />
        //   </div>
        //   <div className=''>
        //     <h3 className='text-[#337ab7] font-bold mt-2'>{item.title}</h3>
        //     <p className='text-[#1E1E1E] text-[14px] line-clamp-3 mt-4'>{item.introText}</p>
        //     <div className='flex justify-between mt-2'>
        //       <p className='text-[#737375] text-[12px]'>{item.created}</p>
        //       {/* <p className='text-[#737375] text-[12px]'>10/04/2023 04:36:00 PM</p> */}
        //       <Link to={`/${item.id}`} className='text-[#337ab7] text-[12px]'>
        //         Xem tiếp...
        //       </Link>
        //     </div>
        //   </div>
        // </Link>
      ))}
      {item ? (
        <Paginate queryParam={query} page_size={item} path_Name={''} />
      ) : (
        <div
          role='status'
          className=' p-4 w-full space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
        >
          <div className='flex items-center justify-between'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
    </div>
  )
}
