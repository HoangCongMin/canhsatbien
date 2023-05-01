import { useRoutes } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Page/Home'
import Media from '../Page/Media'
import MediaLayout from '../layout/MediaLayout'
import Organization_Payroll from '../Page/Organization_Payroll'
import GrassRootslevelundertheUnits from '../Page/GrassRootslevelundertheUnits'
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
    },
    {
      path: '/Organization_Payroll',
      element: (
        <Main>
          <Organization_Payroll />
        </Main>
      )
    },
    {
      path: '/:name',
      element: (
        <Main>
          <GrassRootslevelundertheUnits />
        </Main>
      )
    }
  ])
  return element
}
