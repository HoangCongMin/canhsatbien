import React from 'react'
import Napbar from '../../component/Napbar'
import Fotter from '../../component/Fotter'

interface mainitem {
  children?: React.ReactNode
}

export default function Main({ children }: mainitem) {
  return (
    <div className=''>
      <Napbar />
      {children}
      <Fotter />
    </div>
  )
}
