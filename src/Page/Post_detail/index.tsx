import React, { useState, useEffect } from 'react'
import Content_Same from '../../component/Content_Same'
import Box_Call from '../../component/Box_Call'
import Share from '../../component/Share'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { GetArticleDetail, GetArticleRelate } from '../../apis/GetNew'

import { GetBreadCrumb } from '../../apis/GetMeidia'

import { Helmet } from 'react-helmet'
import { FormatImage, FormatMeida } from '../../utils/util.type'
import { Date_Time } from '../../utils/util.type'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Post_detail() {
  const data = useParams()

  const { data: prfile_all } = useQuery({
    queryKey: ['ProductDetails', data.id],
    queryFn: () => GetArticleDetail(data.id as string)
  })
  const { data: BreadCrumb } = useQuery({
    queryKey: ['ProductDetails_all', data.cart_id],
    queryFn: () => GetBreadCrumb(Number(data.cart_id))
  })

  function handle_String(data: string) {
    const newStr = data.replace(/upload/g, 'https://canhsatbien.vn//upload')
    const index = newStr.indexOf('/https://canhsatbien.vn//upload')

    const style = "className='m-auto'"
    const ma = newStr
    const result = ma.replaceAll('src="/', 'src="')
    const style_result = result.replace(/img/g, "img class='m-auto' ")
    const result_item=style_result.replace(/em/g,"p class='text-[19px] text-center'")
    return result_item
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data.id, data.cart_id])

  return (
    <div id='post-detail' className='w-full max-w-screen-2xl'>
      <div className='w-full bg-[#F6F6F6] py-3 px-2 flex items-center  max-[1250px]:flex-col'>
        <div className='flex items-center w-[70%] max-[1250px]:w-full'>
          <div className='bg-[#DA251C] h-7 w-1 max-[1250px]:hidden'></div>
          <div className='font-bold ml-2 text-[17px] uppercase mt-[2px] hover:text-[#0066bc] cursor-pointer '>
            {BreadCrumb &&
              BreadCrumb.data.map((item: any) => (
                <div className='flex items-center  max-[1250px]:flex-col'>
                  <p className='line-clamp-1'>{item.grandName}</p>
                  {item.child.map((item_child: any) => (
                    <div className='flex items-center max-[1250px]:w-full'>
                      <MdKeyboardArrowRight className='text-[35px] text-[#DA251C] ' />
                      <Link to={`/${item_child.parentName}/${prfile_all?.data.catId}`} className='ml-2 line-clamp-1  max-[1250px]:w-full max-[1250px]:ml-0'>
                        {item_child.parentName}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <Box_Call Link={`http://smartwork.3i.com.vn:33204/${data.id}`} />
      </div>

      <div className='w-[100%] m-auto my-7 flex'>
        <div className='w-full'>
          {/* <Box_Call Link={`http://smartwork.3i.com.vn:33204/${id}`} /> */}
          <h1 className='font-bold  text-[20px]  mt-[2px] hover:text-[#0066bc] cursor-pointer text-justify	'>
            {prfile_all?.data.title}
          </h1>
          <p className='text-[#838383] text-[15px] font-[Roboto] my-3 text-justify	'>
            {Date_Time(prfile_all?.data.datePost)}
          </p>
          <strong className='font-[NotoSerif]  text-[20px] text-justify	'>{prfile_all?.data.introText}</strong>
          {prfile_all?.data.gallery && <img className='w-full mt-4' src={prfile_all?.data.gallery} alt='' />}

          <p className='text-[14px] text-[#3B4E68]'>
            <div
              className='font-[NotoSerif] text-[19px] text-justify'
              dangerouslySetInnerHTML={{
                __html: prfile_all?.data.fullText &&  handle_String(prfile_all?.data.fullText)
              }}
            />
          </p>
        </div>
      </div>

      <div className='w-full  max-w-screen-2xl'>
        <Share />
      </div>

      <div className='w-full m-auto mb-14 max-w-screen-2xl'>
        <Content_Same name={data.name} title_name={data.Post_detail} data={prfile_all?.data.catId} />
      </div>
    </div>
  )
}
