import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from 'react-icons/ri'
import PostArticleRelate from '../../../type/PostArticleRelate'



interface Item_content_same_all {
  Organization_Payroll_Data: PostArticleRelate
}
export default function Item_content_same({ Organization_Payroll_Data }: Item_content_same_all) {

  return (
    <div className='mt-3'>


      <div className='mb-3'>
        <div className='flex items-center'>
          <RiArrowDropRightLine className='text-[21px] text-[#DA251C]' />
          <div
            
            className='text-[15px] text-[#] font-bold hover:text-[#DA251C] cursor-pointer'
          >
            {Organization_Payroll_Data.title}
          </div>
        </div>
      </div>


    </div>
  )
}
