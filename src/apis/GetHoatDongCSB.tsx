import React from 'react'
import http from '../utils'

export const Getvichuquyen=(id:number,p:number)=>http.get(`Home/GetListItem_category?catID=${id}&p=${p}`)
export const GetListCategorySession=()=>http.get('Home/GetListCategorySession')
export const GetStatisticVisit=()=>http.post('Portal/GetStatisticVisit')
export const GetBanner=(id:number)=>http.get(`Home/GetListBannerSession?Block=${id}`)
export const Getdatafalse=()=>http.get(`Home/GetCountItemFalse`)
