
import { FormatImage,FormatMeida } from '../../../../utils/util.type'
import {Link} from'react-router-dom'
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
  return (
    <Link to={`/media/${type}/${data.id}`}>
      <div>
        {video && (<video className='w-full' src={FormatMeida(data.videoExtra.video)} controls />)}
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