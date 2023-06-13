import React from 'react'
import NarbarMedia from '../../../component/NarbarMedia'
import Slide_Media_all from '../../../component/slide_Media_all'
import Slice_cart_news from '../../../component/Slice_cart_news'
import List_New_All_Item from '../../../component/List_New_All_Item'
import {
  List_Data_media_product,
  data_video_all_item,
  images_all_items_media,
  Radio,
  Longform,
  Voices
} from '../../../component/constant'
import { BsFillCameraVideoFill, BsFillMicFill, BsSearch } from 'react-icons/bs'
import { MdInsertPhoto } from 'react-icons/md'
import Item_image_new from '../../../component/Item_image_new_all'
import Data_Media from '../../../component/constant'
import { useQuery } from '@tanstack/react-query'
import { GetImageList } from '../../../apis/GetNew'


export default function Media() {
  const { data } = useQuery({
    queryKey: ['List_all_item'],
    queryFn: GetImageList
  })



  return (
    <div className='w-full '>
      <div className='w-[80%] m-auto  pb-8'>
        <Slide_Media_all media_style={'mt-8 rounded-2xl'} text_media={'line-clamp-2 top-[10px] text-[35px] '} text_Media_all={'w-[63%] line-clamp-2 mb-16'} content={Data_Media} />
      </div>
      <div className='w-full border-t border-slate-300'>
        <div className='w-[80%] m-auto'>
          <div className='text-center text-[30px] text-[#182940] font-bold	mt-10 mb-8'>Tiêu điểm</div>
          <Slice_cart_news />
        </div>
      </div>
      <div className='w-full'>
        <div className='w-[80%] m-auto mt-9'>
          <List_New_All_Item data={List_Data_media_product} />
        </div>
      </div>
      <div className='w-full'>
        <div className='w-[80%] m-auto  mt-12 border-t-2 border-[#dc2c2c]'>
          <div className='flex items-center py-3'>
            <BsFillCameraVideoFill className='text-[#dc2c2c]   w-[20px] h-[20px]' />
            <div className='ml-2 text-[#dc2c2c] uppercase text-[18px] font-black	'>Video</div>
          </div>
          <List_New_All_Item data={data_video_all_item} />
        </div>
      </div>
      <div className='w-full'>
        <div className='w-[80%] m-auto flex justify-between mt-12 max-[1300px]:flex-col'>
          <div className='w-[75%] border-t-2 border-[#dc2c2c] max-[1300px]:w-full'>
            <div className='flex items-center py-3'>
              <MdInsertPhoto className='text-[#dc2c2c]   w-[20px] h-[20px]' />
              <div className='ml-2 text-[#dc2c2c] uppercase text-[18px] font-black	'>Photos</div>
            </div>

            <div className='flex justify-between flex-wrap'>
              {images_all_items_media.map((idtem: any) => (
                <div className='w-[23%] max-[1024px]:w-[30%] max-[1024px]:mt-3 max-[600px]:w-[48%] max-[500px]:w-[100%]'>
                  <div className='w-full overflow-hidden cursor-pointer relative group'>
                    <img
                      className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out '
                      src={idtem.image}
                      alt=''
                    />
                  </div>
                  <div>
                    <div className='text-[13px] font-[Roboto] text-[#3B4E69BF] mt-2'>{idtem.time}</div>
                    <div className='text-[15px] hover:text-[#182940] font-bold mt-1 cursor-pointer '>{idtem.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[20%] border-t-2 border-[#dc2c2c] max-[1300px]:w-[100%] max-[1300px]:mt-8'>
            <div className='w-full'>
              <div className='flex items-center py-3'>
                <BsFillMicFill className='text-[#dc2c2c]  w-[20px] h-[20px]' />
                <div className='ml-2 text-[#dc2c2c] uppercase text-[18px] font-black	'>Radio News</div>
              </div>
              <Item_image_new content_item={Radio} />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-6 mb-20'>
        <div className='w-[80%] m-auto '>
          <div className='w-[66%] grid gap-11 grid-cols-3 max-[1300px]:grid-cols-2  max-[1000px]:w-full max-[600px]:grid-cols-1'>
            <div className=' border-t-2  border-[#dc2c2c]'>
              <div className='w-full'>
                <div className='flex items-center py-3'>
                  <BsFillMicFill className='text-[#dc2c2c]  w-[20px] h-[20px]' />
                  <div className='ml-2 text-[#dc2c2c] uppercase text-[18px] font-black	'>Radio News</div>
                </div>
                <Item_image_new content_item={Longform} />
              </div>
            </div>

            <div className=' border-t-2   border-[#dc2c2c]'>
              <div className='w-full'>
                <div className='flex items-center py-3'>
                  <BsFillMicFill className='text-[#dc2c2c]  w-[20px] h-[20px]' />
                  <div className='ml-2 text-[#dc2c2c] uppercase text-[18px] font-black	'>Radio News</div>
                </div>
                <Item_image_new content_item={Voices} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}