import React from 'react'
import http from '../utils'

export const Getvichuquyen=(id:number)=>http.get(`Home/GetListItem_category?catID=${id}`)
export const GetListCategorySession=()=>http.get('Home/GetListCategorySession')
