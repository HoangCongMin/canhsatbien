
import { FormatImage,FormatMeida } from '../../../../utils/util.type'
import {Link} from'react-router-dom'
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


export default function Item_catergory({ data, video, Voices, typeImage ,type,Image,Imge2  }:any) {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef();

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
    videoRef.current.play();
  }
  return (
    <Link to={`/media/${type}/${data.id}`}>
      <div>
        {video && 
          <div className='relative overflow-hidden'>
            {!playVideo &&
              <>
                <img className='absolute top-0 left-0 w-full h-full object-cover z-10' src={`${FormatMeida(data?.videoExtra?.gallery as string)}`} alt={data?.videoExtra?.title} />
                <div className='group absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 cursor-pointer bg-[rgba(0,_0,_0,_0.5)] text-[rgba(225,_225,_225,_0.8)]'
                  onClick={()=> handlePlayVideo()}
                >
                    <FaPlay size={30} className='transition ease duration-[0.5s] scale-0 group-hover:scale-100'/>
                  </div>
              </>
            }
            <video className='w-full' ref={videoRef} src={FormatMeida(data.videoExtra.video)} controls />
          </div>
        }
        {video && (<p className='text-[15px]  mt-2 text-[#00285A] font-bold	 cursor-pointer front-[Arial] line-clamp-5'>{data.videoExtra.title}</p>)}

        {Voices && (<img className='w-full' src={typeImage ? FormatMeida(data.sliderExtra.gallery) : FormatMeida(data.sliderExtra.gallery || data.sliderExtra.gallery)} />)}
        
        {Voices && (<p className='text-[15px] text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]   line-clamp-5'>{data.sliderExtra.title}</p>)}
        {Voices && (<span className='text-[15px] text-[#999]'>{data.sliderExtra.datePost}</span>) }
        {Image &&(<img className='w-full' src={ FormatMeida(data.sliderExtra.gallery) || FormatMeida(data.sliderExtra.gallery)} />)}
        {Image && (<p className='text-[15px] text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]  line-clamp-5'>{data.sliderExtra.title}</p>)}
        {Imge2 &&(<img className='w-full' src={FormatMeida( data.sliderExtra.gallery)} />)}
        {Imge2 && (<p className='text-[15px] text-[#00285A] mt-2 cursor-pointer font-bold	 front-[Arial]  line-clamp-5'>{data.sliderExtra.title}</p>)}
        
        
      </div>
    </Link>

  )
}