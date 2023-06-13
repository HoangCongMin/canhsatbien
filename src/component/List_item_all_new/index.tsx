import React from 'react'
import { useQuery } from '@tanstack/react-query'
import {GetListItemFeaturedAll} from'../../apis/GetNew'
import Featured from '../../type/new.type'
import { Link } from 'react-router-dom'




interface item_All_new {
  img: string
  content: string
}
export default function List_item_all_new() {

  const { data: Image_item_all } = useQuery({ queryKey: ['todos_List'], queryFn: GetListItemFeaturedAll })





  return (
    <div className='w-full flex justify-between mt-2 cursor-pointer '>
      {Image_item_all?.data.map((item: Featured) => (

        <Link to={`/${item.id}`} className='w-[32%]  shadow-lg' key={item.id}>
          <div className='overflow-hidden cursor-pointer relative group mt-2'>
            <img
              className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out '
              src={`https://canhsatbien.vn/${item.gallery}`}
              alt=''
            />
          </div>
         
          <p className='text-[14px] font-bold	 my-2 hover:text-[#191970] line-clamp-4'>{item.title}</p>
        </Link>
      ))}
    </div>
  )
}
