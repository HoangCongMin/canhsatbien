import { useRoutes } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Page/Home'
import Media from '../Page/Media'
import MediaLayout from '../layout/MediaLayout'
import Organization_Payroll from '../Page/Organization_Payroll'
import Post_detail from '../Page/Post_detail'
import Post_Detail_Layout from '../layout/Post_Detail_Layout'
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
      path: '/Post_detail',
      element: (
        <Post_Detail_Layout>
          <Post_detail />
        </Post_Detail_Layout>
      )
    },
    {
      path: '/:name',
      element: (
        <Post_Detail_Layout>
          <Post_detail />
        </Post_Detail_Layout>
      )
    }
  ])
  return element
}
