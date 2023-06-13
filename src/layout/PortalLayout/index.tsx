import React from 'react'
import Napbar from '../../component/Napbar'
import Fotter from '../../component/Fotter'
import Box_Call_All from '../../component/Box_Call_All'

interface mainitem {
  children?: React.ReactNode
}
export default function PortalLayout({ children }: mainitem) {
  return (
    <div className=''>
      <Napbar />
      <div className='w-[80%] m-auto flex justify-between mt-5'>
        {children}
        <div className='w-[26%]'>
          <Box_Call_All />
        </div>
      </div>
      <Fotter />
    </div>
  )
}
