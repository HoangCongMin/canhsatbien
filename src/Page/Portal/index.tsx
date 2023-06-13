import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Getvichuquyen ,GetListCategorySession} from '../../apis/GetHoatDongCSB'
import { useParams,Link } from 'react-router-dom'
import Logo from '../../assets/logo-csb-080730606.png'
import { FormatImage } from '../../utils/util.type'

export default function Portal() {
  const { id } = useParams()
  const { data: List_Portal_Item } = useQuery({
    queryKey: ['List_portal', id],
    queryFn: () => Getvichuquyen(Number(id))
  })



  console.log(List_Portal_Item?.data)
 

  return (
    <div className='w-[72%]'>
      <div className='uppercase py-2 border-b-[2.5px] relative 	 pb-7  border-[#d6d6d6] text-[#191970] font-bold '>
        <p className='border-b-[2.5px]  top-0 pb-3 pl-2	absolute  border-[#ffcc00]'>
          <span className='ml-2 line-clamp-1'>
            <img src={Logo} className='w-[16px] float-left mr-2 mt-[2px]' />
            {List_Portal_Item?.data?.name}
          </span>
        </p>
      </div>

      {List_Portal_Item?.data?.listItem.map((item: any) => (
        <div className='  grid grid-cols-4 gap-3 mt-6'>
          <div>
            <img src={FormatImage(item.gallery)} alt='' />
          </div>
          <div className='col-span-3'>
            <h3 className='text-[#337ab7] font-bold mt-2'>{item.title}</h3>
            <p className='text-[#1E1E1E] text-[14px] line-clamp-3 mt-4'>{item.introText}</p>
            <div className='flex justify-between mt-2'>
              <p className='text-[#737375] text-[12px]'>{item.created}</p>
              {/* <p className='text-[#737375] text-[12px]'>10/04/2023 04:36:00 PM</p> */}
              <Link to={`/${item.id}`} className='text-[#337ab7] text-[12px]'>Xem tiếp...</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
