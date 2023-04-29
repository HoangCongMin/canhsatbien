import { useRoutes } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Page/Home'
import Media from '../Page/Media'
import MediaLayout from '../layout/MediaLayout'
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
    },
    {
      path: '/media',
      element: (
        <MediaLayout>
          <Media />
        </MediaLayout>
      )
    }
  ])
  return element
}
