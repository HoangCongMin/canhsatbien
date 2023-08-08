import React from 'react'
import http from '../utils'
import video from 'type/video.type'



// export const GetListItemMaxHitsAll=()=>http.get('GetListItemMaxHits')
export const GetListItemHotestAll = () => http.get('Home/GetListItemHotest')
export const GetListCategoryItemAll = () => http.get('Home/GetListCategoryItem')
export const GetListItemNewestAll = () => http.get('Home/GetListItemNewest')
export const GetListItemFeaturedAll = () => http.get('Home/GetListItemFeatured')
export const GetArticleDetail = (id: string) => http.get(`Portal/ArticleDetail?itemId=${id}`)
export const GetArticleRelate = (CatId: number) => http.get(`Portal/ArticleRelate?CatId=${CatId}&page=10`)
export const GetListCategoryRightSession = () => http.get('Home/GetListCategoryRightSession')
export const GetVideo = () => http.get<video>('Layout/GetVideo')
export const GetImage = () => http.get('Layout/GetImage')
export const GetListVideoAllTow = (id: string, categoryId: string) => http.get(`Layout/GetListVideoAllTow?p=${id}&categoryId=${categoryId}`)
export const GetListVideoAll = () => http.get(`Layout/GetListVideoAll`)

export const GetImageList = () => http.get(`Layout/GetImageList`)

export const GetItemSeachItem=(pra:string)=>http.get(`Sreach/SerachItemContent?name=${pra}`)
export const GetItemSeachItemall=(pra:string,page:number)=>http.get(`Sreach/GetSerachItemContentTow?name=${pra}&p=${page}`)

export const GetSendComment=(body:any)=>http.post(`Comment/InsertComment`,body)


