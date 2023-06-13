import React, { useState,useEffect } from 'react'
import Content_Same from '../../component/Content_Same'
import Box_Call from '../../component/Box_Call'
import Share from '../../component/Share'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { GetArticleDetail, GetArticleRelate } from '../../apis/GetNew'
export default function Post_detail() {


  let { id } = useParams();

  const { data: prfile_all } = useQuery({
    queryKey: ['ProductDetails', id],
    queryFn: () => GetArticleDetail(id as string)
  })


  function handle_String(data: string) {
    let newStr = data.replace(/upload/g, 'https://canhsatbien.vn//upload');
    let index = newStr.indexOf('/https://canhsatbien.vn//upload');

    const ma = newStr
    const result = ma.replaceAll('src="/', 'src="');
    return result

  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])


  return (
    <div className='w-full max-w-screen-2xl'>
      <div className='w-full bg-[#F6F6F6] py-3 px-2 flex items-center '>
        <div className='bg-[#DA251C] h-7 w-1'></div>
        <div className='font-bold ml-2 text-[17px] uppercase mt-[2px] hover:text-[#191970] cursor-pointer'>
          Cục Chính trị
        </div>
      </div>

      <div className='w-[100%] m-auto my-7 flex'>
        <Box_Call />




        <div className='w-[90%]'>
          <h1 className='font-bold ml-2 text-[17px] uppercase mt-[2px] hover:text-[#191970] cursor-pointer'>
            {prfile_all?.data.title}
          </h1>
          <p className='text-[#838383] text-[15px] font-[Roboto] my-3'>{prfile_all?.data.created}</p>
          <strong>

            {prfile_all?.data.introText}
          </strong>
          {
            prfile_all?.data.gallery && (<img
              className='w-full mt-4'
              src={prfile_all?.data.gallery}
              alt=''
            />)
          }
         
          <p className='text-[14px] text-[#3B4E68]'>
            <div dangerouslySetInnerHTML={{ __html: prfile_all?.data.fullText && handle_String(prfile_all?.data.fullText) }} />

          </p>


        </div>




      </div>

      <div className='pt-4 pb-2'>
        <strong className='text-[16px] font-[Roboto] hover:text-[#191970] cursor-pointer'>Ngày truyền thống:</strong>{' '}
        <span className='text-[#838383] text-[15px] font-[Roboto] ml-1'>28/5/1964.</span>
      </div>
      <div className='pt-4 pb-2'>
        <strong className='text-[16px] font-[Roboto] hover:text-[#191970] cursor-pointer'>Truyền thống vẻ vang:</strong>
        <p className='text-[#838383] text-[15px] font-[Roboto] text-center py-1'>
          “TRUNG THÀNH - MƯU LƯỢC - ĐOÀN KẾT - CHỦ ĐỘNG - SÁNG TẠO”
        </p>
      </div>
      <div className='pt-3 pb-2'>
        <strong className='text-[16px] font-[Roboto] hover:text-[#191970] cursor-pointer'>Phần thưởng cao quý:</strong>{' '}
        <p className='text-[#3B4E68]  text-[15px] font-[Roboto]'>- Huân chương Quân công hạng Nhì (1984);</p>
        <p className='text-[#3B4E68]  text-[15px] font-[Roboto]'>
          - 3 Huân chương Chiến công (hạng Nhất, hạng Nhì, hạng Ba)…
        </p>
      </div>
      <div className='w-full  max-w-screen-2xl'>
        <Share />
      </div>
      <div className='pt-3 pb-2 '>
        <p className='font-bold text-[16px] uppercase mt-[2px] hover:text-[#191970] cursor-pointer text-right'>
          Cổng TTĐT Cảnh Sát Biển
        </p>
      </div>
      <div className='w-full m-auto mb-14 max-w-screen-2xl'>
        <Content_Same data={prfile_all?.data.catId} />
      </div>


    </div>
  )
}
