import React, { useState, useContext, useEffect } from 'react'
import NewsCsb from './NewsCsb'
import Posts from '../../component/posts'
import ShortMessage from '../../component/shortMessage'
import Map from '../../assets/gisbd.png'
import NewPost_Item from '../../component/NewPost_Item'
import New_image_Item from '../../assets/quang-canh-hoi-nghi-tap-huan-074134884.jpeg'
import New_image_Item_law from '../../assets/doi-tuong-tran-thi-rum-va-tang-vat-111048305.jpeg'
import PolicyDevelopment from '../../component/PolicyDevelopment'
import ElecTriCiPyprice from '../../assets/2-can-bo-doan-dac-nhiem-pctp-ma-tuy-so-2-huong-dan-ky-nang-so-cuu-cho-hoc-sinh-163959030.jpeg'
import InternationalCooperation from '../../assets/csb3-071712441.jpeg'
import SportsCulture from '../../assets/sc3a1ch-101432661.jpeg'
import CoastGuardwork from '../../assets/tang-qua-180746147.jpeg'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link,useNavigate,createSearchParams } from 'react-router-dom'
import Grid_bg from '../../assets/infographic-cu-dam-thep-cua-luc-luong-bo-binh-co-gioi-viet-nam-69-112642.gif'
import { RiRoadMapFill } from 'react-icons/ri'
import useQueryParam from'../../Hook/useQueryParam'

import { FaBook } from 'react-icons/fa'
import { IoNewspaperSharp } from 'react-icons/io5'
import classNames from 'classnames'

import { GoLaw } from 'react-icons/go'
import List_item_all_new from '../../component/List_item_all_new'
import { MdSportsGymnastics, MdLocalPolice, MdSecurity } from 'react-icons/md'
import Slice_cart_news_coppy_image from '../../component/Slice_cart_news_coppy_image'
import Box_Call from '../../component/Box_Call'
import Box_weather from '../../component/Box_weather'
import Box_Call_All from '../../component/Box_Call_All'
import { useQuery } from '@tanstack/react-query'
import ListCategoryItem from '../../type/title_Content_new.type'
import { GetListCategoryItemAll, GetListItemNewestAll, GetListItemHotestAll } from '../../apis/GetNew'
import New_post_icon_Item from '../../component/New_post_icon_Item'
import Featured from '../../type/new.type'
import Slide_Media_all from '../../component/slide_Media_all'
import { GrFormClose } from 'react-icons/gr'
import { myCreateContext } from '../../context'
import { Helmet } from 'react-helmet'
import { GetBanner } from '../../apis/GetHoatDongCSB'
import { FormatMeida } from '../../utils/util.type'
// import useQueryParam from'../../Hook/useQueryParam'

export default function Home() {
  const DocNhieu = [
    {
      id: 1,
      content: 'Nhìn lại sự kiện Hải Dương 981 và bài học kinh nghiệm trong đấu tranh bảo vệ chủ quyền biển đảo'
    },
    {
      id: 2,
      content: 'Kinh nghiệm xây dựng chính quy, quản lý rèn luyện kỷ luật ở Bộ Tư lệnh Vùng Cảnh sát biển 1'
    },
    {
      id: 3,
      content:
        'Một số vấn đề về đấu tranh chống các quan điểm sai trái, thù địch trên không gian mạng  ở các đơn vị quân đội hiện nay'
    },
    {
      id: 4,
      content: 'Xác lập Kỷ lục khoảng 3.000 người hát Quốc ca, tạo hình lá cờ Tổ quốc'
    },
    { id: 5, content: 'Chính sách của Nhật Bản đối với vấn đề Biển Đông hiện nay và tác động đến ASEAN, Việt Nam' },
    { id: 6, content: 'Vai trò của Biển Đông đối với các nước có tuyên bố chủ quyền, khu vực và thế giới hiện nay' }
  ]

  const contentAll = [{ id: 1, content: 'TIN ĐỌC NHIỀU', icon: IoNewspaperSharp, Conten_all: DocNhieu }]

  const { data: NewPost_Item_All } = useQuery({ queryKey: ['list_item'], queryFn: GetListCategoryItemAll })
  const { data: dataNewest } = useQuery({ queryKey: ['Newest'], queryFn: GetListItemNewestAll })
  const { data: List_side } = useQuery({ queryKey: ['List_sidle'], queryFn: GetListItemHotestAll })

  const { data: List_side_img } = useQuery({ queryKey: ['List_sidle_image'], queryFn: () => GetBanner(1) })
  // const { data: banner_top } = useQuery({ queryKey: ['list_banner_top'], queryFn:()=> GetBanner(2) })

  const [dataNews, setDataNews] = useState({ id: 1, content: 'ĐỌC NHIỀU', icon: FaBook, Conten_all: DocNhieu })

  const handle_New = (Conten_all: any) => setDataNews(Conten_all)

  const { isModelOpen, setIsModelOpen } = useContext(myCreateContext)

  const handleClick = () => {
    setIsModelOpen(false)
  }

  const queryParam = useQueryParam()


  const navigate = useNavigate()

  const [valueInput,setValueInput]=useState('')
 

  const handle_click=()=>{
    navigate({
      pathname: `/SearchItem`,
      search: createSearchParams({ ...queryParam, name: valueInput }).toString()
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full mt-4  max-[500px]:mt-2 mb-10'>
      <Helmet>
        <meta property='og:title' content='Bộ Tư lệnh Cảnh sát biển Việt Nam.' />
        <meta property='og:description' content='Bộ Tư lệnh Cảnh sát biển Việt Nam.' />
        <meta
          property='og:image'
          content='https://canhsatbien.vn/upload/files/setting/20210917/logo-csb-080730606.png?h=100'
        />
      </Helmet>
      <div className='fixed left-[35%]  z-40  w-[33%]   bg-[#fff] '>
        {isModelOpen && (
          <>
            {' '}
            <div className='flex justify-between item-center px-5 py-3  border-b-[1px]'>
              <h1 className='text-[#a94442] text-[18px] font-semibold	'>Đường dây nóng</h1>
              <GrFormClose onClick={handleClick} className='text-[21px] cursor-pointer font-bold' />
            </div>
            <div className='px-5'>
              <div className='py-2'>
                <p>
                  Hotline 1:{' '}
                  <span className='text-[#337ab7] font-[Arial]'>
                    <strong>04 33524978</strong>
                  </span>
                </p>
              </div>
              <div className='py-2'>
                <p>
                  Hotline 2:{' '}
                  <span className='text-[#337ab7] font-[Arial]'>
                    <strong>0904 336 476</strong>
                  </span>
                </p>
              </div>
              <div className='py-2'>
                <p>
                  Email:{' '}
                  <span className='text-[#337ab7] font-[Arial]'>
                    <strong>banbientapcsb@gmail.com</strong>
                  </span>
                </p>
              </div>
            </div>{' '}
          </>
        )}
      </div>
      <div className='w-[80%] max-[500px]:w-[95%] m-auto max-w-screen-2xl flex justify-between relative'>
        <div className=' w-[50.4%] flex items-center max-[1300px]:hidden bg-white shadow-xl border-[1px] border-[#F6F6F6] rounded-full  '>
          <input
            placeholder='Nhập từ khóa'
            type='text'
            className='w-[95%] outline-none rounded-full text-[15px]  px-3 py-2'
            onChange={(e)=>setValueInput(e.target.value)}
            value={valueInput}
          />
            <AiOutlineSearch className='w-[5%] cursor-pointer' onClick={handle_click} />
        </div>
        <div className='w-[48%] bg-[#F6F6F6] max-[1300px]:w-full max-[500px]:hidden'>
          <div className='w-[95%] m-auto flex justify-start h-[100%] max-[1100px]:w-full max-[500px]:justify-end'></div>
        </div>
      </div>
      <div className='w-[80%] max-[500px]:w-[95%] m-auto max-w-screen-2xl flex justify-between mt-7 max-[500px]:mt-0  max-[1300px]:flex-col max-[850px]:flex-col  '>
        
        <div className='w-[75%] max-[1300px]:w-full flex justify-between max-[1300px]:flex-col max-[850px]:w-[100%] max-[1100px]:w-[100%] overflow-y-auto'>
          <div className='w-full max-[1300px]:w-full'>
            <div className='w-full flex justify-between max-[1300px]:flex-col '>
              <div className='w-[68.1%] max-[1300px]:w-[100%] border-r-[1px] max-[850px]:border-none	max-[1100px]:border-none '>
                
                <div className='w-[97%]  max-[1100px]:w-full'>
                  <Slide_Media_all content={List_side?.data} from={' py-0'} />
                </div>
              </div>

              <div className='w-[30%]  	  overflow-y-auto	max-[1300px]:w-[100%] max-[1300px]:pt-8'>
                
                <div className=' h-[22vh] max-[1300px]:h-[100%]'>
               
                  {dataNewest?.data.map((item: Featured) => (
                    <ShortMessage
                    id_cart={item.catID}
                    name={item.title}
                    id_name={item.id}
                      id_Item={item.id}
                      classItiemAll={'text-[14px] w-[95%] mr-2 text-black hover:text-[#0066bc]  '}
                      classItiem={
                        "text-[15px] text-justify text-[#000]  relative     before:text-[1.2rem] before:content-['▪'] before:mr-2 before:text-[#da251c] flex pb-[17px] pt-[23px] border-b-[1px] first:pt-0 last:border-none cursor-pointer	 "
                      }
                      conTentShortMessage={item.title}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full'>
              <List_item_all_new />
            </div>

            <div className='w-full object-cover relative pt-[20%] m-auto mt-5 shadow-xl'>
              <img
                className='w-full absolute top-0 left-0 h-full  '
                src={FormatMeida(List_side_img?.data[0]?.bannerExtra?.images)}
                alt=''
              />
            </div>


            <div className='w-full m-auto  justify-between flex  max-[1160px]:flex-col'>
              <div className=' w-full flex flex-col max-[1160px]:w-[100%] max-[850px]:flex-col first:pb-4 '>
              
                {NewPost_Item_All?.data.map((item: ListCategoryItem) => (
                  <NewPost_Item
                    class_Custom_layout={''}
                    class_NewPost_Item={
                      'w-[100%]  max-[850px]:w-[100%] cursor-pointer px-4 pt-2 pb-2 border-[1px] mt-6 border-slate-200	'
                    }
                    itemAll_id={item.id}
                    itemAll_title={item?.name}
                    itemAll_RelatedNews={item.listItem}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </div>

        <div className='w-[22%] border-slate-400 max-[1300px]:w-full max-[850px]:w-[100%] max-[1100px]:w-[100%]'>
          <Box_Call_All />
         
        </div>
      </div>
      <div className='w-[80%] m-auto mt-10 max-w-screen-2xl'>
        <Slice_cart_news_coppy_image />
      </div>
    </div>
  )
}
