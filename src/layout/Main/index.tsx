import React from 'react'
import Napbar from '../../component/Napbar'
import Fotter from '../../component/Fotter'

interface mainitem {
  children?: React.ReactNode
}

export default function Main({ children }: mainitem) {
  return (
    <div className='overflow-y-auto'>
      <Napbar />
      {children}
      <Fotter />
    </div>
  )
}
