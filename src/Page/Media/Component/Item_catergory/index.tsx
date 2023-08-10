import { FormatImage, FormatMeida ,Date_Time} from '../../../../utils/util.type'
import { Link } from 'react-router-dom'
import React, { useState, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'
interface typevideoExtra {
  title: string
  linkRef: null
  description: string | null
  gallery: string
  video: string
  categoryId: number
  datePost: string
}
export interface typeData {
  id: number
  ordering: number | null
  videoExtra: typevideoExtra
  datePost: string
  created: null
}

export default function Item_catergory({ data, video, Voices, typeImage, type, Image, Imge2, Imge3 }: any) {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo)
    // videoRef.current.play();
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  console.log( Date_Time(data.datePost))

  return (
    <Link to={`/media/${type}/${data.id}`}>
      <div>
        {video && (
          <div>
            {!playVideo && (
              <>
                <img
                  className='absolute top-0 left-0 w-full h-full object-cover z-10'
                  src={`${FormatMeida(data?.videoExtra?.gallery as string)}`}
                  alt={data?.videoExtra?.title}
                />
                <div
                  className='group absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 cursor-pointer bg-[rgba(0,_0,_0,_0.5)] text-[rgba(225,_225,_225,_0.8)]'
                  onClick={() => handlePlayVideo()}
                >
                  <FaPlay size={30} className='transition ease duration-[0.5s] scale-0 group-hover:scale-100' />
                </div>
              </>
            )}
            <video className='w-full' ref={videoRef} src={FormatMeida(data.videoExtra.video)} controls />
          </div>
        )}
        {video && (
          <p className='text-[15px]  mt-2 text-[#00285A] font-bold	 cursor-pointer front-[Arial] line-clamp-3 text-justify'>
            {data.videoExtra.title}
            <span className='ml-1 text-[#768496] not-italic text-[13px] font-normal font-[roboto]'>({Date_Time(data.datePost)})</span>
          </p>
        )}

        {Voices && (
          <div className='relative overflow-hidden pt-[66.6667%]'>
            <img
              className='w-full absolute top-0 left-0 h-full object-cover'
              src={
                typeImage
                  ? FormatMeida(data.sliderExtra.video)
                  : FormatMeida(data?.sliderExtra?.gallery || data?.sliderExtra?.gallery)
              }
            />
          </div>
        )}

        {Voices && (
          <p className='text-[15px]  text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]   line-clamp-3'>
            {data.sliderExtra.title}
            <span className='ml-1 text-[#768496] not-italic text-[13px] font-normal font-[roboto]'>({Date_Time(data.datePost)})</span>

          </p>
        )}
        {Voices && <span className='text-[15px] text-[#999]'>{data.sliderExtra.datePost}</span>}
        {Image && (
           <div className='relative overflow-hidden pt-[66.6667%]'>

             <img
               className='w-full absolute top-0 left-0 h-full object-cover'
               src={FormatMeida(data.sliderExtra.video) || FormatMeida(data.sliderExtra.video)}
             />
           </div>
        )}
        {Image && (
          <p className='text-[15px] text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]  line-clamp-3'>
            {data.sliderExtra.title}
            <span className='ml-1 text-[#768496] not-italic text-[13px] font-normal font-[roboto]'>({Date_Time(data.datePost)})</span>

          </p>
        )}
        {Imge2 && (
          <div className='relative overflow-hidden pt-[66.6667%]'>
            <img className='w-full absolute top-0 left-0 h-full object-cover' src={FormatMeida(data.sliderExtra.gallery)} />
          </div>
        )}
        {Imge2 && (
          <p className='text-[15px] text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]  line-clamp-3'>
            {data.sliderExtra.title}
            <span className='ml-1 text-[#768496] not-italic text-[13px] font-normal font-[roboto]'>({Date_Time(data.datePost)})</span>

          </p>
        )}
        {Imge3 && (
          <div className='relative overflow-hidden pt-[66.6667%]'>
            <img className='w-full absolute top-0 left-0 h-full object-cover' src={FormatMeida(data.sliderExtra.gallery)} />
          </div>
        )}
        {Imge3 && (
          <p className='text-[15px] text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]  line-clamp-3'>
            {data.sliderExtra.title}
            <span className='ml-1 text-[#768496] not-italic text-[13px] font-normal font-[roboto]'>({Date_Time(data.datePost)})</span>

          </p>
        )}
      </div>
    </Link>
  )
}
