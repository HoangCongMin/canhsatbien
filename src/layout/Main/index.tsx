import React, { useContext } from 'react'
import Napbar from '../../component/Napbar'
import Fotter from '../../component/Fotter'
import {myCreateContext}from'../../context'

interface mainitem {
  children?: React.ReactNode
}

export default function Main({ children }: mainitem) {
  const {isModelOpen,setIsModelOpen} =useContext(myCreateContext)

  const handle=()=>{
    setIsModelOpen(false)
  }
  return (
    <div className='relative'>
      {isModelOpen && (<div onClick={handle} className='absolute top-0 left-0 right-0 bottom-0 z-40' style={{background: " radial-gradient(circle, rgba(60,60,60,0.6) 0%, rgba(4,2,58,0.4906337535014006) 100%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)"}}></div>)}
      <Napbar />
      {children}
      <Fotter />
    </div>
  )
}
