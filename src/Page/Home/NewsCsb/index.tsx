import React from 'react'
import classNames from 'classnames'

interface contentItemAll {
  contentItem: string
  classItem: string
}
export default function NewsCsb({ contentItem, classItem }: contentItemAll) {
  return (
    <div id="news"
      className={classNames(
        `flex justify-center  items-center h-[100%] text-[#000000] text-xs	font-bold hover:text-[#0066bc] ${classItem}`
      )}
    >
      {contentItem}
    </div>
  )
}
