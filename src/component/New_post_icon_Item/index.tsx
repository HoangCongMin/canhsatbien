import React from 'react'
import { item } from '../NewPost_Item'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames'
import Featured from '../../type/new.type'
import { FormatImage } from '../../utils/util.type'
import { Link } from 'react-router-dom'
interface newsItemStory {
  newsItem: Featured
  classItem_all?: string
  img_Item?: string
  contentAll?: string
  handle: (img: string, storyall: string, contentall: string) => void
  content?: string,
  id_Item?: number,
  title?:string,
  itemAll_id?:number
  name:string
}
// onClick={()=>handle(newsItem.img,newsItem.story_All,newsItem.contentAll)}
export default function New_post_icon_Item({
  newsItem,
  classItem_all,
  img_Item,
  handle,
  content,
  id_Item,
  title,
  itemAll_id,
  name,
  
}: newsItemStory) {
  return (
    <Link
 
      to={`/${newsItem.title}/${id_Item}/${newsItem.catID}`}
      className={classNames(
        `text-[#182940] text-[15px] first:text-[18px]  font-medium	w-full h-full m-auto grid  grid-cols-5 grid-rows-1  gap-x-3   max-[1000px]:flex-col first:flex-col first:flex  ${
          classItem_all
            ? 'text-[10px]'
            : 'text-[14px] first:flex-col first:row-span-4 first:col-span-3 col-span-2  first:max-[900px]:col-span-5 max-[900px]:col-span-2 max-[900px]:flex  max-[500px]:col-span-4'
        }`
      )}
    >
      <div className={classNames(`overflow-hidden cursor-pointer col-span-3 relative group shadow-xl pt-[66.6667%]`)}>
        <img
          src={`${FormatImage(newsItem.gallery)}`}
          className='w-full h-full min-w-[131px] max-[450px]:h-auto max-[1000px]:w-full max-[500px]:grid-col-1  object-cover absolute top-0 left-0 bottom-0 right-0   group-hover:scale-110 transition duration-500 ease-in-out '
          alt=''
        />
      </div>
      <div className='w-full max-[1000px]:w-full col-span-2'>
        <div className='break-word line-clamp-4 font-bold  mt-2 hover:text-[#0066bc]  max-[1000px]:line-clamp-3  max-[1000px]:mt-2  '>

          {newsItem.title}
        </div>
        {content && <div className='text-[14px] mt-1 text-[#3B4E68] line-clamp-4'>{content}</div>}
        {/* <div className='text-[14px] font-[Roboto] text-[#62748D]'>20:17</div> */}
      </div>
    </Link>
  )
}

// max-[1300px]:w-[50%] max-[1245px]:w-[47%] max-[1175px]:w-[45%] max-[1143px]:w-[43%] max-[1100px]:w-[50%]
