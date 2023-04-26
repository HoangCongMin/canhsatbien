import React from 'react'
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

export default function Home() {
  const contentAll = [
    { id: 1, content: 'TIN MỚI' },
    { id: 2, content: 'ĐỌC NHIỀU' },
    { id: 3, content: 'THEO GƯƠNG BÁC' }
  ]

  const ShortMessageItem = [
    { id: 1, content: 'Đại tướng Lương Cường thăm, làm việc tại Bộ Tư lệnh Vùng Cảnh sát biển 4' },
    {
      id: 2,
      content: 'Tạo sức lan toả và hiệu quả của Chương trình “Cảnh sát biển đồng hành với ngư dân” tại tỉnh Bến Tre'
    },
    { id: 3, content: 'Bộ Tư lệnh Vùng Cảnh sát biển 4 thực hiện hiệu quả Nghị quyết Trung ương 8, khóa XI' },
    {
      id: 4,
      content:
        'Hội đồng Lý luận Trung ương đánh giá kết quả thực hiện Chiến lược bảo vệ Tổ quốc trong tình hình mới tại Bộ Tư lệnh Cảnh sát biển'
    }
  ]

  const Theoguongbac = [
    { id: 1, content: 'Hành động nhỏ, ý nghĩa lớn - góp phần bảo vệ môi trường biển' },
    { id: 2, content: 'Tuyên dương Gương mặt trẻ tiêu biểu Cảnh sát biển năm 2022' },
    { id: 3, content: 'Đại tướng Phan Văn Giang gửi thư khen ngợi, động viên Trung tâm Đào tạo và' },
    { id: 4, content: 'HTuyên dương gương mặt trẻ tiêu biểu, gương mặt trẻ triển vọng toàn quân' },
    { id: 5, content: '“Bông hồng trắng” của Lực lượng Cảnh sát biển Việt Nam' },
    { id: 6, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' }
  ]

  const NewPost_Item_All = [
    {
      id: 1,
      title: 'Vì chủ quyền biển, đảo',
      image: New_image_Item,
      content:
        'Ngày 25/4, Bộ Thông tin và Truyền thông tổ chức Hội nghị tập huấn, phổ biến chính sách pháp luật về bảo vệ biên giới của Tổ quốc năm 2023 và Hội nghị tập huấn, phổ biến chính sách, pháp luật về chủ quyền biển, đảo nhằm nâng cao nhận thức, hiểu biết về chính sách pháp luật và kỹ năng viết bài, đẩy mạnh tuyên truyền về bảo vệ biên giới và chủ quyền biển, đảo.',
      name: 'Tập huấn, phổ biến chính sách, pháp luật về bảo vệ biên giới và chủ quyền biển, đảo',
      RelatedNews: [
        {
          story:
            'Đoàn công tác Tổng cục Chính trị Quân đội Nhân dân Việt Nam thăm, động viên cán bộ, chiến sĩ Tàu CSB 8001 trực tại khu vực quần đảo Trường Sa',
          id: 1
        },
        { story: 'Đẩy mạnh công tác dân vận "Cảnh sát biển đồng hành với ngư dân', id: 2 },
        {
          story:
            'Giao ban công tác phối hợp thực hiện Nghị định số 03/2019/NĐ-CP của Chính phủ quý I năm 2023 trên địa bàn tỉnh Quảng Nam',
          id: 3
        },
        {
          story: 'Khảo sát, rà soát nguồn nhân lực tàu thuyền trên địa bàn các tỉnh Tây Nam Bộ',
          id: 4
        }
      ]
    },
    {
      id: 2,
      title: 'Thực thi pháp luật',
      image: New_image_Item_law,
      content:
        'Cục Nghiệp vụ và Pháp luật Cảnh sát biển cho biết, đơn vị vừa phối hợp với Công an tỉnh Thái Bình bắt quả tang 01 đối tượng có hành vi tàng trữ, vận chuyển trái phép chất ma túy.',
      name: 'Phối hợp bắt giữ đối tượng tàng trữ trái phép chất ma túy',
      RelatedNews: [
        {
          story:
            'Bộ Tư lệnh Cảnh sát biển khen thưởng thành tích triệt phá đường dây mua bán, vận chuyển 9 bánh heroine',
          id: 1
        },
        { story: 'Bắt giữ tàu vận chuyển hơn 30.000 lít dầu D.O trái phép trên vùng biển Tây Nam', id: 2 },
        {
          story: 'Cảnh sát biển bắt giữ tàu vận chuyển lượng lớn dầu D.O trái phép trên vùng biển Tây Nam',
          id: 3
        },
        {
          story: 'Triệt phá đường dây mua bán, vận chuyển ma túy với số lượng lớn',
          id: 4
        }
      ]
    }
  ]

  const policyDevelopmentAll = [
    {
      id: 1,
      name: 'Đoàn Đặc nhiệm PCTP ma túy số 2 tổ chức tuyên truyền phòng, chống tai nạn đuối nước cho học sinh',
      image: ElecTriCiPyprice,
      content:
        'Chiều 10/4, Đoàn cơ sở Đoàn Đặc nhiệm PCTP ma túy số 2 phối hợp với Đoàn cơ sở xã Phúc Thọ tổ chức buổi tuyên truyền, giáo dục kỹ năng sống về phòng, chống đuối nước cho hơn 800 em học sinh trường Tiều học xã Phúc Thọ, huyện Nghi Lộc, tỉnh Nghệ An.',
      RelatedNews: [
        {
          id: 1,
          story: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 nỗ lực tham gia tìm kiếm nạn nhân trong vụ máy bay trực thăng gặp nạn'
        },
        { id: 2, story: 'Hải đội 202 tham gia tìm kiếm và kịp thời hỗ trợ gia đình ngư dân gặp nạn ' },
        { id: 3, story: 'Đã tìm thấy thêm 02 thuyền viên ở sà lan gặp nạn trên biển' },
        { id: 4, story: 'Tàu CSB 2012 cấp cứu ngư dân bị tai biến trên biển' }
      ]
    },
    {
      id: 2,
      name: 'Lực lượng Cảnh sát biển Việt Nam tuần tra liên hợp với Lực lượng Cảnh sát biển Trung Quốc',
      image: InternationalCooperation,
      content:
        'Chiều 09/4, biên đội tàu CSB 8004 và CSB 8003 của Bộ Tư lệnh Vùng Cảnh sát biển 1 cùng Đoàn công tác đã rời cảng Đình Vũ, thành phố Hải Phòng lên đường thực hiện nhiệm vụ tuần tra liên hợp trên vùng biển lân cận đường phân định Vịnh Bắc Bộ cùng Lực lượng Cảnh sát biển Trung Quốc.',
      RelatedNews: [
        {
          id: 1,
          story:
            'Bộ Tư lệnh Cảnh sát biển tổng kết thực hiện nhiệm vụ đón và luyện tập chung với Lực lượng Bảo vệ bờ biển Nhật Bản'
        },
        {
          id: 2,
          story: 'Tăng cường phối hợp, hợp tác giữa Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản'
        },
        {
          id: 3,
          story:
            'Thủ trưởng Bộ Tư lệnh Cảnh sát biển gặp mặt, giao nhiệm vụ cho cán bộ trước khi lên đường làm nhiệm vụ gìn giữ hòa bình Liên Hợp quốc'
        },
        { id: 4, story: 'Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản luyện tập chung trên biển' }
      ]
    }
  ]

  const NewPost_Item_All_One = [
    {
      id: 1,
      title: 'Văn hóa - Thể thao',
      image: SportsCulture,
      content:
        'Chiều 13/4, Trung tâm Đào tạo và Bồi dưỡng nghiệp vụ Cảnh sát biển phối hợp với Thời báo Văn học Nghệ thuật/ Liên hiệp các Hội Văn học Nghệ thuật Việt Nam, Nhà Xuất bản Dân trí khai mạc Ngày Sách và Văn hóa đọc Việt Nam lần thứ hai năm 2023 với chủ đề “Sách: Nhận thức - Đổi mới - Sáng tạo”. Đại tá Nguyễn Đức Độ - Bí thư Đảng ủy, Chính ủy Trung tâm chủ trì buổi khai mạc.',
      name: 'Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2023',
      RelatedNews: [
        {
          story: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 tham gia hội trại "Nối vòng tay lớn',
          id: 1
        },
        {
          story:
            'Đoàn Văn công Quân chủng Phòng không - Không quân biểu diễn phục vụ cán bộ, chiến sĩ Bộ Tư lệnh Vùng Cảnh sát biển 3',
          id: 2
        },
        {
          story: 'Thể lệ Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng Cảnh sát biển Việt Nam',
          id: 3
        },
        {
          story:
            'Bộ Tư lệnh Cảnh sát biển tổ chức Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng Cảnh sát biển Việt Nam',
          id: 4
        }
      ]
    },
    {
      id: 2,
      title: 'Công tác Cảnh sát biển',
      image: CoastGuardwork,
      content:
        'Chiều 25/4, tại Thái Bình, Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam và Ban Thường vụ Tỉnh ủy Thái Bình đã tổ chức hội nghị ký kết Chương trình phối hợp thực hiện công tác dân vận “Cảnh sát biển đồng hành với ngư dân”. Thái Bình là tỉnh thành thứ 22 Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam ký kết Chương trình phối hợp thực hiện.',
      name: 'Đảng ủy Cảnh sát biển và Tỉnh ủy Thái Bình ký kết chương trình Cảnh sát biển đồng hành với ngư dân',
      RelatedNews: [
        {
          story: 'Bộ Tư lệnh Vùng Cảnh sát biển 3 tổ chức Hội thi cán bộ giảng dạy chính trị năm 2023',
          id: 1
        },
        { story: 'Không ngừng củng cố kiến thức, chuyên môn kỹ thuật cho đội ngũ QNCN, CNVQP', id: 2 },
        {
          story: 'Sôi nổi Cuộc thi “Em yêu biển, đảo quê hương” tại huyện Núi Thành, tỉnh Quảng Nam',
          id: 3
        },
        {
          story: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 hưởng ứng Ngày Sách và văn hóa đọc Việt Nam năm 2023',
          id: 4
        }
      ]
    }
  ]

  return (
    <div className='w-full mt-4 mb-10'>
      <div className='w-[80%] m-auto flex justify-between max-w-screen-2xl	'>
        <div className=' w-[60%] rounded-sm	'>
          <input placeholder='Nhập từ khoá' type='text' className='w-[100%] outline-none bg-[#F6F6F6] px-3 py-2' />
        </div>
        <div className='w-[38%] bg-[#F6F6F6]'>
          <div className='w-[90%] m-auto flex justify-between h-[100%]'>
            {contentAll.map((item) => (
              <NewsCsb contentItem={item.content} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl'>
        <div className='w-[72%] flex justify-between'>
          <div className='w-[70%] border-r-[1px]'>
            <div className='w-[97%]'>
              <Posts />
              {ShortMessageItem.map((item) => (
                <ShortMessage
                  classItiemAll={'line-clamp-1'}
                  classItiem={"text-[15px] before:content-['>'] before:mr-2 before:text-red-500 flex"}
                  conTentShortMessage={item.content}
                />
              ))}
            </div>
          </div>
          <div className='w-[28%] overflow-y-auto	'>
            <div className='scrollbar h-[80vh]'>
              {Theoguongbac.map((item) => (
                <ShortMessage
                  classItiemAll={'text-[15px] font-bold'}
                  classItiem={
                    "text-[15px] before:content-['>'] before:mr-2 before:text-red-500 flex pb-[17px] pt-[23px] border-b-[1px] first:pt-0"
                  }
                  conTentShortMessage={item.content}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='w-[26%] border-slate-400'>
          <h1 className='text-center bg-[#F6F6F6] text-[17px] py-4 font-bold	border-slate-400	'>BẢN ĐỒ HÀNH CHÍNH</h1>
          <img src={Map} alt='' />
          <p className='text-center bg-[#F6F6F6] text-[13px] text-[#3B4E68] py-4 border-slate-400'>
            © Cổng TTĐT Cảnh sát biển
          </p>
        </div>
      </div>
      <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl'>
        {NewPost_Item_All.map((item) => (
          <NewPost_Item
            itemAll_id={item.id}
            itemAll_RelatedNews={item.RelatedNews}
            itemAll_content={item.content}
            itemAll_image={item.image}
            itemAll_title={item.title}
            itemAll_Name={item.name}
          />
        ))}
      </div>
      <div className='w-[80%] m-auto mt-7 max-w-screen-2xl'>
        <div className='w-full border-t-[2px] border-[#DA251C]'>
          <div className='w-full border-t-[2px] border-[#DA251C]'>
            <div className='border-b-[1px] border-stale-300 py-3'>
              <h1 className='font-bold	text-[17px] uppercase text-[#031739]'>xây dựng chính sách</h1>
            </div>
          </div>
          <div className='flex justify-between'>
            {policyDevelopmentAll.map((item) => (
              <div className='w-[48.5%] first:border-r-[1px] first:border-stale-300'>
                <PolicyDevelopment
                  itemAll_id={item.id}
                  itemAll_RelatedNews={item.RelatedNews}
                  itemAll_content={item.content}
                  itemAll_image={item.image}
                  itemAll_Name={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl'>
        {NewPost_Item_All_One.map((item) => (
          <NewPost_Item
            itemAll_id={item.id}
            itemAll_RelatedNews={item.RelatedNews}
            itemAll_content={item.content}
            itemAll_image={item.image}
            itemAll_title={item.title}
            itemAll_Name={item.name}
          />
        ))}
      </div>
    </div>
  )
}
