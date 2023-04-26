import React from 'react'

interface contentItemAll {
  contentItem: string
}
export default function NewsCsb({ contentItem }: contentItemAll) {
  return <div className='flex justify-center  items-center h-[100%] text-[#182940] text-xs	font-bold	'>{contentItem}</div>
}
