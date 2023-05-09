import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from 'react-icons/ri'

interface Item_content_same_one {
  id: string
  content: string
}
interface Item_content_same_all {
  Organization_Payroll_Data: Item_content_same_one
}
export default function Item_content_same({ Organization_Payroll_Data }: Item_content_same_all) {
  return (
    <div className='mt-3'>
     
        
          <div className='mb-3'>
            <div className='flex items-center'>
              <RiArrowDropRightLine className='text-[21px] text-[#DA251C]' />
              <Link
                to={`/${Organization_Payroll_Data.id}`}
                className='text-[15px] text-[#] font-bold hover:text-[#DA251C] cursor-pointer'
              >
                {Organization_Payroll_Data.content}
              </Link>
            </div>
          </div>
        
     
    </div>
  )
}
