import React from 'react'
import {Organization_Payroll_Data} from'../constant'
import Item_content_same from'../Content_Same/Item_content_same'

export default function Content_Same() {
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
        <Item_content_same Organization_Payroll_Data={Organization_Payroll_Data.child}/>
      </div>
    </div>
  )
}