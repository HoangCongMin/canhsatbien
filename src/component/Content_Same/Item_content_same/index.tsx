import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from 'react-icons/ri'
import PostArticleRelate from '../../../type/PostArticleRelate'
import {Date_Time} from'../../../utils/util.type'



interface Item_content_same_all {
  Organization_Payroll_Data: PostArticleRelate
  date:string
}
export default function Item_content_same({ Organization_Payroll_Data,date }: Item_content_same_all) {

  return (
    <div className='mt-3 inline-block align-middle'>


      <div className='mb-3'>
        <div className='flex'>
          <RiArrowDropRightLine className='text-[21px] text-[#DA251C] min-w-[20px]	' />
          <div
            
            className='text-[15px] text-[#]  hover:text-[#DA251C] cursor-pointer'
          >
            {Organization_Payroll_Data.title}
                            <span className='text-[#838383] text-[15px] font-[Roboto] my-3 text-justify	ml-2'>({Date_Time( date)})</span>

          </div>
        </div>
      </div>


    </div>
  )
}
