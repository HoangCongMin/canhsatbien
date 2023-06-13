import React from 'react'
import { Link } from 'react-router-dom'

interface conTentShortMessageAll {
  conTentShortMessage: string
  classItiem: string
  classItiemAll?: string
  id_Item?: number
}

export default function shortMessage({ conTentShortMessage, classItiem, classItiemAll, id_Item }: conTentShortMessageAll) {
  
  return (
    <Link to={`/${id_Item}` } className={classItiem}>
      <div className={classItiemAll}>{conTentShortMessage}</div>
    </Link>
  )
}
