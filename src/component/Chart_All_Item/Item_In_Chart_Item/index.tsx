import React from 'react'
import classNames from 'classnames'
interface Item_In_Chart_Item_all {
  Img_Organization?: string
  title__Organization?: string
  class_child?: string
}

export default function Item_In_Chart_Item({
  Img_Organization,
  title__Organization,
  class_child
}: Item_In_Chart_Item_all) {
  return (
    <div
      className={classNames(
        `${class_child ? class_child : 'w-[20%] '} m-auto bg-[#F6F6F6] py-4 font-bold rounded-lg  `
      )}
    >
      <div className='text-[#031739] text-[12px] hover:text-[#0066bc]  max-[1250px]:text-[12px] max-[800px]:text-[8px] line-clamp-2 max-[1100px]:text-[10px] max-[800px]:line-clamp-1'>
        {title__Organization}
      </div>
      <div className='w-[30%]  m-auto max-[1250px]:w-[50%] max-[800px]:w-[70%] max-[600px]:w-[90%] '>
        {Img_Organization && (
          <img
            className='w-[60px] rounded-s-full rounded-full
          h-[60px] m-auto my-2 max-[450px]:w-[40px] max-[450px]:h-[40px]'
            src={Img_Organization}
            alt=''
          />
        )}
      </div>
    </div>
  )
}

// max-[1250px]:h-[40px] max-[1250px]:w-[40px]
// max-[800px]:h-[60px] max-[800px]:w-[60px]
