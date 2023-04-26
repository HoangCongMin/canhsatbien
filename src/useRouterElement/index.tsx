import { useRoutes } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Page/Home'

import React from 'react'

export default function useRouterElement() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <Main>
          <Home />
        </Main>
      )
    }
  ])
  return element
}
