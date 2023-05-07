import React from 'react'
interface item {
  title: string
  name: string
  img: string
}

interface item_all {
  content_item: item
}

export default function Item_image_new_all({ content_item }: item_all) {
  return (
    <div className='w-full overflow-hidden cursor-pointer relative group'>
      <img
        className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50'
        src={content_item.img}
        alt=''
      />
      <div className='text-[#182940] text-[15px] font-bold	mt-5 line-clamp-4'>{content_item.title}</div>
    </div>
  )
}
