import { useRoutes } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Page/Home'
/*import Media from '../Page/Media'
*/
import MediaLayout from '../layout/MediaLayout'
import Organization_Payroll from '../Page/Organization_Payroll'
import Post_detail from '../Page/Post_detail'
import Post_Detail_Layout from '../layout/Post_Detail_Layout'
import Video from '../Page/Media/Page_media/video'
import Radio_News from '../Page/Media/Page_media/Radio_News'
import Photos from '../Page/Media/Page_media/Photos'
import Infographics from '../Page/Media/Page_media/Infographics'

import Voices from '../Page/Media/Page_media/Voices'
import Layout_Media_Page from '../Page/Media/Layout_Media_Page'
import Video_Detail from '../Page/Media/Page_media/Video_Detail'
import Radio_News_detail from'../Page/Media/Page_media/Radio_News/Radio_News_detail'
import Voices_detail from '../Page/Media/Page_media/Voices/Voices_detail'
import Infographics_detail from'../Page/Media/Page_media/Infographics/Infographics_detail'
import Photos_detail from '../Page/Media/Page_media/Photos/Photos_detail'
import Portal from'../Page/Portal'
import PortalLayout from'../layout/PortalLayout'

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
      path: '/portal/:id',
      element: (
        <PortalLayout>
          <Portal />
        </PortalLayout>
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
      path: '/:id',
      element: (
        <Post_Detail_Layout>
          <Post_detail />
        </Post_Detail_Layout>
      )
    },
    {
      path: '/media/video',
      element: (
        <Layout_Media_Page>
          <Video />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Radio_News',
      element: (
        <Layout_Media_Page>
          <Radio_News />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Photos',
      element: (
        <Layout_Media_Page>
          <Photos />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Infographics',
      element: (
        <Layout_Media_Page>
          <Infographics />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Voices',
      element: (
        <Layout_Media_Page>
          <Voices />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/video/:id',
      element: (
        <Layout_Media_Page>
          <Video_Detail />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Radio_News/:id',
      element: (
        <Layout_Media_Page>
          <Radio_News_detail />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Voices/:id',
      element: (
        <Layout_Media_Page>
          <Voices_detail />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/infographics/:id',
      element: (
        <Layout_Media_Page>
          <Infographics_detail />
        </Layout_Media_Page>
      )
    },
    {
      path: '/media/Photos/:id',
      element: (
        <Layout_Media_Page>
          <Photos_detail />
        </Layout_Media_Page>
      )
    },
  ])
  return element
}
