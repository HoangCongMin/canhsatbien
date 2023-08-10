import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Getvichuquyen, GetListCategorySession } from '../../apis/GetHoatDongCSB'
import { GetAdministrativeDocument } from "../../apis/GetNew";
import { useParams, Link } from 'react-router-dom'
import Logo from '../../assets/logo-csb-080730606.png'
import { FormatImage } from '../../utils/util.type'
import { Helmet } from 'react-helmet'
import Paginate from '../../component/Paginate'
import useQueryParam from '../../Hook/useQueryParam'

import {Date_Time} from'../../utils/util.type'
import AdministrativeDocuments from '../../component/AdministrativeDoc'

export default function Portal() {
  const query = useQueryParam()
  const { id } = useParams()
  const { data: List_Portal_Item } = useQuery({
    queryKey: ['List_portal_all', [id, query]],
    queryFn: () => Getvichuquyen(Number(id), Number(query.p ? query.p : 1))
  })
  
  const { data: dataAdministrativeDocument } = useQuery({
    queryKey: ['AdministrativeDocument', [query, 10]],
    queryFn: () => GetAdministrativeDocument(Number(query.p ? query.p : 1), 10)
  })
  
  const ma = List_Portal_Item?.data?.id === 17 ? dataAdministrativeDocument?.data.length % 10 : List_Portal_Item?.data?.listItemAll % 10
  const mb = List_Portal_Item?.data?.id === 17 ? dataAdministrativeDocument?.data.length / 10 : List_Portal_Item?.data?.listItemAll / 10

  const handle_Paginate = () => {
    if (ma > 0) {
      return Math.floor(mb) + 1
    }
    return Math.floor(mb)
  }
  const item = handle_Paginate()

  return (
    <>
      <div className='w-[77%] max-[1200px]:w-[100%]'>
        <div className='uppercase py-2 border-b-[2.5px] relative pb-7  border-[#d6d6d6] text-[#191970] font-bold '>
          <p className='border-b-[2.5px]  top-0 pb-3 absolute  border-[#ffcc00]'>
            <span className='line-clamp-1'>
              <img alt='ok' src={Logo} className='w-[16px] float-left mr-2 mt-[2px]' />
              {List_Portal_Item?.data?.name}
            </span>
          </p>
        </div>
        {List_Portal_Item?.data?.id === 17 &&
          <>
            <AdministrativeDocuments PortalItem={List_Portal_Item?.data} dataAdministrativeDocument={dataAdministrativeDocument}/>
          </>
        }
        {List_Portal_Item?.data?.id !== 17 &&
          <>
            {List_Portal_Item?.data?.listItem.map((item: any,i:any) => (
              <Link key={i} to={`/${List_Portal_Item?.data?.name}/${item.id}/${item.catID}`} className='  grid grid-cols-4 gap-3 mt-6 max-[950px]:grid-cols-3  max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
                <div>
                  <img src={FormatImage(item.gallery)} alt='' />
                </div>
                <div className='col-span-3 max-[950px]:col-span-2  max-[800px]:col-span-1 '>
                  <h3 className='text-[#337ab7] font-bold mt-2'>{item.title}</h3>
                  <p className='text-[#1E1E1E] text-[14px] line-clamp-3 mt-4'>{item.introText}</p>
                  <div className='flex justify-between mt-2'>
                    <p className='text-[#737375] text-[12px]'>{Date_Time(item.created)}</p>
                    {/* <p className='text-[#737375] text-[12px]'>10/04/2023 04:36:00 PM</p> */}
                    <Link  to={`/${List_Portal_Item?.data?.name}/${item.id}/${item.catID}`} className='text-[#337ab7] text-[12px]'>
                      Xem tiếp...
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </>
        }
        {item ? (
          <Paginate path_Name={''} queryParam={query} page_size={item} />
        ) : (
          <div
            role='status'
            className=' p-4 w-full space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
          >
            <div className='flex items-center justify-between'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <span className='sr-only'>Loading...</span>
          </div>
        )}
      </div>
    </>
  )
}
