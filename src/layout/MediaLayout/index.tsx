import React from 'react'
import Fotter from '../../component/Fotter'
import NarbarMedia from '../../component/NarbarMedia'

interface mainitem {
  children?: React.ReactNode
}

export default function MediaLayout({ children }: mainitem) {
  return (
    <div className=''>
      <NarbarMedia />
      {children}
      <Fotter />
    </div>
  )
}
