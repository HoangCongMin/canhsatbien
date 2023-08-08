import React from 'react'
import { Link } from 'react-router-dom'

interface conTentShortMessageAll {
  conTentShortMessage: string
  classItiem: string
  classItiemAll?: string
  id_Item?: number
  name:string
  id_name:number
  id_cart?:number
}
  // ${newsItem.title}/${id_Item}/${newsItem.catID}
  // id_cart
export default function shortMessage({ conTentShortMessage, classItiem, classItiemAll, id_Item,name,id_name,id_cart }: conTentShortMessageAll) {
  
  return (
    <Link to={`/${conTentShortMessage}/${id_Item}/${id_cart}` } className={classItiem}>
      <div className={classItiemAll}>{conTentShortMessage}</div>
    </Link>
  )
}
