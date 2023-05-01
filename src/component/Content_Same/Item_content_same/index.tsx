import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from 'react-icons/ri'

interface Item_content_same_one {
  title: string
  img: string
}
interface Item_content_same_all {
  Organization_Payroll_Data: Item_content_same_one[]
}
export default function Item_content_same({ Organization_Payroll_Data }: Item_content_same_all) {
  return (
    <div className='mt-3'>
      {Organization_Payroll_Data.map((item, index) => {
        return (
          <div key={index} className='mb-3'>
            <div className='flex items-center'>
              <RiArrowDropRightLine className='text-[21px] text-[#DA251C]' />
              <Link
                to={`/${item.title}`}
                className='text-[15px] text-[#] font-bold hover:text-[#DA251C] cursor-pointer'
              >
                {item.title}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
