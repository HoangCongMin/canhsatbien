import React from 'react'
import NewsCsb from './NewsCsb'

export default function Home() {
  const contentAll = [
    { id: 1, content: 'TIN MỚI' },
    { id: 2, content: 'ĐỌC NHIỀU' },
    { id: 3, content: 'THEO GƯƠNG BÁC' }
  ]
  return (
    <div className='w-full mt-4'>
      <div className='w-[80%] m-auto flex justify-between'>
        <div className=' w-[60%] rounded-sm	'>
          <input placeholder='Nhập từ khoá' type='text' className='w-[100%] outline-none bg-[#F6F6F6] px-3 py-2' />
        </div>
        <div className='w-[38%] bg-[#F6F6F6]'>
          <div className='w-[90%] m-auto flex justify-between h-[100%]'>
            {contentAll.map((item) => (
              <NewsCsb contentItem={item.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
