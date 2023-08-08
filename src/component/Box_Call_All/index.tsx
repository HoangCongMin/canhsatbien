import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import ShortMessage from '../shortMessage'
import Box_weather from '../Box_weather'
import classNames from 'classnames'
import Map from '../../assets/gisbd.png'
import Logo from '../../assets/logo-csb-080730606.png'
import { useQuery } from '@tanstack/react-query'
import { GetListCategoryRightSession, GetVideo, GetImage } from './../../apis/GetNew'
import { FormatMeida } from '../../utils/util.type'
import {useParams} from'react-router-dom'

export default function Box_Call_All() {
  const List_weather_all = [
    { id: 1, title: 'Nam Vịnh Bắc Bộ', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 2, title: 'Quảng Trị đến Quảng Ngãi', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' },
    { id: 3, title: 'Bình Định đến Ninh Thuận', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 4, title: 'Bình Thuận đến Cà Mau', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' },
    { id: 5, title: 'Cà Mau đến Kiên Giang', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 6, title: 'Bắc Biển Đông', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' }
  ]

  /* const { data } = useQuery({
     queryKey: ['List_side_right'],
     queryFn:()=> GetListCategoryRightSession()
   })*/

  const { data: List_Item } = useQuery({ queryKey: ['List_Item'], queryFn: GetListCategoryRightSession })

  const { data: Video_detail } = useQuery({ queryKey: ['Video_item'], queryFn: GetVideo })

  const { data: Imgae_detail } = useQuery({ queryKey: ['Imgae_item'], queryFn: GetImage })

  const [video_Display, setVideo_Display] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef();
  // ${newsItem.title}/${id_Item}/${newsItem.catID}
  const data_Item=useParams();

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
    videoRef.current.play();
  }

  return (
    <div className='sticky top-0 z-30 max-[1100px]:mt-7'>
      <div className='w-full m-auto '>
        <div className='w-full m-auto   '>
          <div className='uppercase py-1 border-b-[2.5px] relative  max-[1300px]:pb-[1.78rem] border-[#ffcc00] text-[#191970] font-bold '>
              <Link to={'/media/video'} className='ml-2 line-clamp-1	inline-block	'>
                <img src={Logo} className='w-[16px] float-left mr-2 mt-[2px]' />
                Đa Phương Tiện
              </Link>
            
          </div>
        </div>
        <div className='w-full mt-3'>
          {video_Display && (
            <>
              {' '}
              <img
                alt='okkk'
                src={`${FormatMeida(Imgae_detail?.data.sliderExtra.images)}`}
                className=' w-full object-cover h-[13rem]'
              />
              <p className='text-[15px] font-bold mt-2'>{Imgae_detail?.data.sliderExtra.title}</p>
              <div className='flex justify-end'>
                <Link to={'/media/video'} className='text-[#003f7f] text-[12px] font-semibold	'>
                  Xem tất cả...
                </Link>
              </div>{' '}
            </>
          )}
          {!video_Display && (
            <>
              <div className='relative overflow-hidden pt-[66.6667%]'>
                {!playVideo &&
                  <>
                    <img className='absolute top-0 left-0 w-full h-full object-cover z-10' src={`${FormatMeida(Video_detail?.data?.videoExtra?.gallery as string)}`} alt={Video_detail?.data?.videoExtra?.title} />
                    <div className='group absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 cursor-pointer bg-[rgba(0,_0,_0,_0.5)] text-[rgba(225,_225,_225,_0.8)]'
                      onClick={()=> handlePlayVideo()}
                    >
                        <FaPlay size={30} className='transition ease duration-[0.5s] scale-0 group-hover:scale-100'/>
                      </div>
                  </>
                }
                <video
                  ref={videoRef}
                  src={`${FormatMeida(Video_detail?.data?.videoExtra?.video as string)}`}
                  className='w-full h-full object-cover h-[13rem] absolute top-0 left-0'
                  controls
                >
                </video>
              </div>
              <p className='text-[15px] font-bold mt-2'>{Video_detail?.data.videoExtra.title}</p>
              <div className='flex justify-end'>
                <Link to={'/media/video'} className='text-[#003f7f] text-[12px] font-semibold	'>
                  Xem tất cả...
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        {List_Item?.data.map((itemll: any) => (
          <div className='w-full mt-3' key={itemll.id}>
           

            <div className='uppercase py-2 border-b-[2.5px] relative  max-w  border-[#ffcc00] text-[#191970] font-black	 '>
              <img src={Logo} className='w-[16px] float-left mr-2 mt-[2px]' />
              <span className='line-clamp-1'>{itemll.name}</span>
            </div>
            <div className='w-95% m-auto py-4  px-2 bg-[#F0F0F0]'>

              
              {itemll.listitem.map((item: any) => (
                <ShortMessage
                key={item.id}
                id_name={itemll.id}
                id_cart={item.catId}
                name={itemll.name}
                  classItiemAll={'line-clamp-2'}
                  classItiem={
                    "text-[14px] before:content-['▪'] before:mr-2 before:text-[16px] before:text-[#da251c] flex cursor-pointer hover:text-[#0066bc] my-2"
                  }
                  id_Item={item.id}
                  conTentShortMessage={item.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-5'>
        <Box_weather List_weather={List_weather_all} />
      </div>
    </div>
  )
}
