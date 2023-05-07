import React from 'react'

interface conTentShortMessageAll {
  conTentShortMessage: string
  classItiem: string
  classItiemAll?: string
}

export default function shortMessage({ conTentShortMessage, classItiem, classItiemAll }: conTentShortMessageAll) {
  return (
    <div className={classItiem}>
      <div className={classItiemAll}>{conTentShortMessage}</div>
    </div>
  )
}
