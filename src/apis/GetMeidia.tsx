import http from '../utils'


export const GetListRadio = () => http.get('Layout/GetListRadio')
export const GetListVoice = () => http.get('Layout/GetListVoice')
export const GetListInfographic = () => http.get('Layout/GetListInfographic')
export const GetVideoDetail=(id:number)=>http.get(`Layout/GetVideoDetail?id=${id}`)
export const GetListVideoAllTow_Item=(categoryId:number)=>http.get(`Layout/GetListVideoAllTow_Item?categoryId=${categoryId}`)
export const GetRadioDetail=(id:number)=>http.get(`Layout/GetRadioDetail?id=${id}`)
export const GetImage_detail=(id:number)=>http.get(`Layout/GetImage_detail?id=${id}`)
export const GetItem_detail=(id:number)=>http.get(`ItemDetail/Item_Detail?itemId=${id}`)