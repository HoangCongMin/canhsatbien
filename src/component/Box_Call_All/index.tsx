import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ShortMessage from '../shortMessage'
import Box_weather from '../Box_weather'
import classNames from 'classnames'
import Map from '../../assets/gisbd.png'


export default function Box_Call_All() {
  const media_item_all = [
    {
      herder: 'Video - Clip',
      content: {
        title:
          'Chương trình giao lưu "Cảnh sát biển Việt Nam và những người bạn" lần thứ nhất (Từ ngày 8 đến 11/12/2022)',
        video:
          'https://canhsatbien.vn:443/upload/files/video/20221122/trailer-csb-va-nhung-nguoi-ban-lan-thu-nhat-074813552.mp4',
        img: ''
      }
    },
    {
      herder: 'Thư viện ảnh',
      content: {
        title: 'Chính ủy Cảnh sát biển thăm, động viên, tặng quà quân dân huyện đảo Bạch Long Vĩ',
        video: '',

        img: 'https://canhsatbien.vn/upload/files/category/20200917/chinh-uy-tro-chuyen-voi-cac-llvt-tren-dao-074603881.jpg'
      }
    }
  ]

  const [video_defaule, setVideo_Defaule] = useState({
    herder: 'Video - Clip',
    content: {
      title:
        'Chương trình giao lưu "Cảnh sát biển Việt Nam và những người bạn" lần thứ nhất (Từ ngày 8 đến 11/12/2022)',
      video:
        'https://canhsatbien.vn:443/upload/files/video/20221122/trailer-csb-va-nhung-nguoi-ban-lan-thu-nhat-074813552.mp4' ||
        undefined,
      img: ''
    }
  })

  const Theoguongbac = [
    { id: 1, content: 'Hành động nhỏ, ý nghĩa lớn - góp phần bảo vệ môi trường biển' },
    { id: 2, content: 'Tuyên dương Gương mặt trẻ tiêu biểu Cảnh sát biển năm 2022' },
    {
      id: 3,
      content:
        'Đại tướng Phan Văn Giang gửi thư khen ngợi, động viên Trung tâm Đào tạo và Bồi dưỡng nghiệp vụ Cảnh sát biển'
    },
    { id: 4, content: 'Tuyên dương gương mặt trẻ tiêu biểu, gương mặt trẻ triển vọng toàn quân năm 2022' },
    { id: 5, content: '“Bông hồng trắng” của Lực lượng Cảnh sát biển Việt Nam' },
    { id: 7, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' }
    // { id: 8, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' },
    // { id: 9, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' },
    // { id: 10, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' }
  ]

  const LUATCSB = [
    { id: 1, content: 'Hải đội 301 tuyên truyền tại phường 9, thành phố Vũng Tàu' },
    { id: 2, content: 'Tuyên truyền, phổ biến pháp luật cho Nhân dân phường Phúc La, quận Hà Đô' },
    {
      id: 3,
      content: 'Cảnh sát biển tuyên truyền, phổ biến pháp luật cho nhân dân phường Đồng Mai'
    },
    { id: 4, content: 'Hải đoàn 42 quyết tâm tháo gỡ thẻ vàng của EC cho ngành thủy sản' },
    { id: 5, content: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 tuyên truyền biển, đảo tại Ninh Bình' },
    { id: 7, content: 'Tuyên truyền biển, đảo và phòng chống ma túy cho 1000 cán bộ, giáo viên và học sinh' }
  ]
  const IUU = [
    {
      id: 1,
      content: 'Đoàn Đặc nhiệm PCTP ma túy số 2 tuyên truyền pháp luật, khám và cấp phát thuốc miễn phí cho người dân'
    },
    { id: 2, content: 'Hải đoàn 21 tổ chức hội nghị tuyên truyền về tình hình an ninh biển, đảo' },
    {
      id: 3,
      content: 'Tàu Cảnh sát biển 3003 tuyên truyền phòng chống IUU tại khu vực đảo Bạch Long Vỹ'
    },
    { id: 4, content: 'Chú trọng tuyên truyền pháp luật tại các bến tàu' },
    { id: 5, content: 'Để mỗi người dân là một tuyên truyền viên về chống khai thác IUU' },
    { id: 7, content: 'Bộ Tư lệnh Vùng Cảnh sát biển 2 đẩy mạnh tuyên truyền phòng chống IUU' }
  ]

  const List_weather_all = [
    { id: 1, title: 'Nam Vịnh Bắc Bộ', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 2, title: 'Quảng Trị đến Quảng Ngãi', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' },
    { id: 3, title: 'Bình Định đến Ninh Thuận', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 4, title: 'Bình Thuận đến Cà Mau', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' },
    { id: 5, title: 'Cà Mau đến Kiên Giang', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 6, title: 'Bắc Biển Đông', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' }
  ]


  return (
    <div className='sticky top-0 z-30'>
      <div className='w-[95%] m-auto '>
        <div className='w-full m-auto flex border-b-[2.5px] border-[#DA251C] pb-2 '>
          {media_item_all.map((item) => (
            <div className='w-[50%] first:border-r-[1.5px] border-[#191970]'>
              <div
                className={classNames(
                  ` ${
                    item.herder === video_defaule.herder ? 'text-[#191970]' : 'text-[#000]'
                  } text-[16px] font-bold text-center cursor-pointer`
                )}
                onClick={() => setVideo_Defaule(item)}
              >
                {item.herder}
              </div>
            </div>
          ))}
        </div>
        <div className='w-full mt-3'>
          {video_defaule.content.video === '' ? (
            <>
              <img src={video_defaule.content.img} className=' w-full object-cover h-[13rem]' />
              <p className='text-[15px] font-bold mt-2'>{video_defaule.content.title}</p>
            </>
          ) : (
            <>
              <video src={video_defaule.content.video} className=' w-full object-cover h-[13rem]' controls></video>
              <p className='text-[15px] font-bold mt-2'>{video_defaule.content.title}</p>
            </>
          )}

          <div className='flex justify-end'>
            <Link to={'/media'} className='text-[#003f7f] text-[12px] font-semibold	'>
              Xem tất cả...
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className='w-full mt-3'>
          <div className='uppercase py-2 border-b-[2.5px] border-[#DA251C] text-[#191970] font-bold text-center flex items-center'>
            <img
              src={
                'https://static.wixstatic.com/media/9d8ed5_c69e33fefd0b420f8763d2c478de5c66~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01/9d8ed5_c69e33fefd0b420f8763d2c478de5c66~mv2.webp'
              }
              className='w-[16px]'
            />
            <div className='ml-2'>Theo gương Bác</div>
          </div>
          <div className='w-95% m-auto py-4 px-2 bg-[#F0F0F0]'>
            {Theoguongbac.map((item) => (
              <ShortMessage
                classItiemAll={'line-clamp-2'}
                classItiem={
                  "text-[14px] before:content-['>'] before:mr-2 before:text-red-500 flex cursor-pointer hover:text-[#191970] my-2"
                }
                conTentShortMessage={item.content}
              />
            ))}
          </div>
        </div>
        <div className='w-full mt-3'>
          <div className='uppercase py-2 border-b-[2.5px] border-[#DA251C] text-[#191970] font-bold text-center'>
            Tuyên truyền Luật Cảnh sát biển Việt Nam
          </div>
          <div className='w-95% m-auto py-4 px-2 bg-[#F0F0F0]'>
            {LUATCSB.map((item) => (
              <ShortMessage
                classItiemAll={'line-clamp-2'}
                classItiem={
                  "text-[14px] before:content-['>'] before:mr-2 before:text-red-500 flex cursor-pointer hover:text-[#191970] my-2"
                }
                conTentShortMessage={item.content}
              />
            ))}
          </div>
        </div>
        <div className='w-full mt-3'>
          <div className='uppercase py-2 border-b-[2.5px] border-[#DA251C] text-[#191970] font-bold text-center'>
            Phòng chống IUU
          </div>
          <div className='w-95% m-auto py-4 px-2 bg-[#F0F0F0]'>
            {Theoguongbac.map((item) => (
              <ShortMessage
                classItiemAll={'line-clamp-2'}
                classItiem={
                  "text-[14px] before:content-['>'] before:mr-2 before:text-red-500 flex cursor-pointer hover:text-[#191970] my-2"
                }
                conTentShortMessage={item.content}
              />
            ))}
          </div>
        </div>
      </div>
      <h1 className='text-center bg-[#F6F6F6] text-[17px] py-4 font-bold	border-slate-400	hover:text-[#191970]'>
        BẢN ĐỒ HÀNH CHÍNH
      </h1>
      <img src={Map} alt='' className='cursor-pointer	 w-full' />
      <p className='text-center bg-[#F6F6F6] text-[13px] text-[#3B4E68] py-4 border-slate-400'>
        © Cổng TTĐT Cảnh sát biển
      </p>
      <div className='mt-5'>
        <Box_weather List_weather={List_weather_all} />
      </div>
    </div>
  )
}
