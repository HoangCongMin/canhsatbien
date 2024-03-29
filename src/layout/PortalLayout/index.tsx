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
      <div className='w-[80%]  max-[500px]:w-[95%]  max-[1200px]:flex-col	  max m-auto flex justify-between mt-5 max-w-screen-2xl mb-10'>
        {children}
        <div className='w-[20%] max-[1200px]:w-[100%]'>
          <Box_Call_All />
        </div>
      </div>
      <Fotter />
    </div>
  )
}
