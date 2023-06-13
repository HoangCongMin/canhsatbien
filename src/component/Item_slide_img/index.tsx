import React from 'react'
import { Link } from 'react-router-dom'

interface Img_Items_Container {
  Img_Items: string
  Name_img: string
}

export default function Item_slide_img({ Img_Items, Name_img }: Img_Items_Container) {
  return (
    <div className='w-[100%] '>
      <Link to={`/${Name_img}`} className='w-full h-full'>
        <img className='w-[100%] h-full' src={Img_Items} alt='' />
      </Link>
    </div>
  )
}
