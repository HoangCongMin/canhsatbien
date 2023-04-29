import React from 'react'
import Fotter from '../../component/Fotter'
import NarbarMedia from '../../component/NarbarMedia'

interface mainitem {
  children?: React.ReactNode
}

export default function MediaLayout({ children }: mainitem) {
  return (
    <div className='overflow-y-auto'>
      <NarbarMedia />
      {children}
      <Fotter />
    </div>
  )
}
