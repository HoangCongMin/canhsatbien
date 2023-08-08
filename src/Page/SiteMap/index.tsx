import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { GetListCategorySession } from '../../apis/GetHoatDongCSB'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function SiteMap() {
  const { data: List_Napbar_Item } = useQuery({
    queryKey: ['List_Napbar_all'],
    queryFn: GetListCategorySession
  })

  return (
    <div className='w-full'>
      <div className='w-[80%] m-auto bg-[#F6F6F6] py-3 px-2 flex items-center justify-between  mt-[1.5rem]'>
        <h1 className='font-bold ml-2 text-[17px] uppercase mt-[2px] hover:text-[#0066bc] cursor-pointer '>
          Sơ đồ trang
        </h1>
        <div className='flex items-center'>
          <AiFillStar className='text-[#375fae]' />
          <AiFillStar className='text-[#375fae]' />
          <AiFillStar className='text-[#375fae]' />
        </div>
      </div>
      <div className='w-[80%] m-auto'>
        <div className='my-[20px]'>
          {List_Napbar_Item &&
            List_Napbar_Item?.data.map((item: any) => (
              <div>
                <h3 className='font-bold text-[#375fae] my-2'>
                  {item.name}
                  <div>
                    {item.listCategoryChild.map((itemall: any) => (
                      <div  className='text-[14px] font-medium  text-[#3B4E68] my-2'>

                        <Link className='ml-[20px]' to={`/${itemall.name}/${item.id}`}>{itemall.name}</Link>
                      </div>
                    ))}
                  </div>
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
