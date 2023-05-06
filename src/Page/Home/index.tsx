import React, { useState } from 'react'
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
import { AiOutlineBars, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { narBarItemAll } from '../../component/Napbar'
import List_leaDer from '../../component/List_leaDer'
// import Video_media from '../../assets/Video/trailer-csb-va-nhung-nguoi-ban-lan-thu-nhat-074813552.mp4'
import Video_Title from '../../component/video_Title'
import Image_csb from '../../assets/cover canh sat bien vn.jpg'
import Title_media from '../../component/Title_media'
import { Link } from 'react-router-dom'
import BG_IMG from '../../assets/bnqc-6-095527762.jpg'
import BG_IMG_TWO from '../../assets/media-qdndvn-133303282.jpg'
import BG_IMG_THREE from '../../assets/duong-day-nong-090912604-150007571-080459585.jpg'
import BG_IMG_VietTell from '../../assets/viettel-logo-145740177.jpg'
import Chart_All_Item from '../../component/Chart_All_Item'
import Chart_test_Item from '../../component/Chart_test_Item'
import { Organization_Payroll_Data } from '../../component/constant'
import { FaBook } from 'react-icons/fa'
import { IoNewspaperSharp } from 'react-icons/io5'
import Backfrond from '../../assets/lopqqgk7.png'
import classNames from 'classnames'
import IconNews from '../../assets/png-clipart-kochers-computer-icons-new-label-leaf-text-thumbnail.png'
import { BsFacebook } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { HiOutlineMinusCircle } from 'react-icons/hi'
import { RiPrinterFill, RiRoadMapFill, RiSendPlaneFill } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { GoTextSize, GoLaw } from 'react-icons/go'
import List_item_all_new from '../../component/List_item_all_new'
import { MdSportsGymnastics, MdLocalPolice } from 'react-icons/md'
import AutoSlice_cart_newsPlay from '../../component/Slice_cart_news'
import Slice_cart_news_coppy_image from '../../component/Slice_cart_news_coppy_image'
import Box_Call from'../../component/Box_Call'

export default function Home() {
  const Theoguongbac = [
    { id: 1, content: 'Hành động nhỏ, ý nghĩa lớn - góp phần bảo vệ môi trường biển' },
    { id: 2, content: 'Tuyên dương Gương mặt trẻ tiêu biểu Cảnh sát biển năm 2022' },
    { id: 3, content: 'Đại tướng Phan Văn Giang gửi thư khen ngợi, động viên Trung tâm Đào tạo và' },
    { id: 4, content: 'HTuyên dương gương mặt trẻ tiêu biểu, gương mặt trẻ triển vọng toàn quân' },
    { id: 5, content: '“Bông hồng trắng” của Lực lượng Cảnh sát biển Việt Nam' },
    { id: 7, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' },
    { id: 8, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' },
    { id: 9, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' },
    { id: 10, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' }
  ]

  const DocNhieu = [
    {
      id: 1,
      content:
        'Thư của Đảng ủy, Bộ Tư lệnh Cảnh sát biển Việt Nam gửi cán bộ, chiến sĩ nhân kỷ niệm 24 năm Ngày truyền thống'
    },
    {
      id: 2,
      content:
        'Ban Liên lạc truyền thống Cảnh sát biển khu vực Hà Nội gặp mặt nhân kỷ niệm 24 năm Ngày thành lập Lực lượng'
    },
    {
      id: 3,
      content:
        'Chính ủy Cảnh sát biển gửi Thư chúc mừng Bộ Tư lệnh Vùng Cảnh sát biển 2 nhân dịp kỷ niệm 18 năm Ngày thành lập'
    },
    {
      id: 4,
      content:
        'Tư lệnh Cảnh sát biển gửi Thư chúc mừng Bộ Tư lệnh Vùng Cảnh sát biển 3 nhân dịp kỷ niệm 22 năm Ngày truyền trống'
    },
    { id: 5, content: '“Cục Cảnh sát biển Việt Nam 15 năm xây dựng và trưởng thành' },
    { id: 6, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' }
  ]

  const TinMoi = [
    {
      id: 1,
      content: 'Tàu CSB 3004 tuyên truyền, phổ biến pháp luật cho ngư dân'
    },
    {
      id: 2,
      content: 'Chú trọng tuyên truyền pháp luật tại các bến tàu'
    },
    {
      id: 3,
      content: 'Để mỗi người dân là một tuyên truyền viên về chống khai thác IUU'
    },
    {
      id: 4,
      content: 'Đẩy mạnh công tác truyền thông trong phòng chống IUU trên vùng biển Miền'
    },
    { id: 5, content: '“Tàu CSB 3004 tuyên truyền, phổ biến pháp luật cho ngư dân' },
    { id: 6, content: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 tạm giữ tàu chở dầu không rõ nguồn gốc' }
  ]
  const contentAll = [
    { id: 1, content: 'TIN MỚI', icon: FaBook, Conten_all: Theoguongbac },
    { id: 2, content: 'ĐỌC NHIỀU', icon: IoNewspaperSharp, Conten_all: DocNhieu },
    {
      id: 3,
      content: 'THEO GƯƠNG BÁC',
      img: 'https://static.wixstatic.com/media/9d8ed5_c69e33fefd0b420f8763d2c478de5c66~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01/9d8ed5_c69e33fefd0b420f8763d2c478de5c66~mv2.webp',
      Conten_all: TinMoi
    }
  ]

  const ShortMessageItem = [
    {
      id: 1,
      content: 'Đại tướng Lương Cường thăm, làm việc tại Bộ Tư lệnh Vùng Cảnh sát biển 4',
      title: 'Đại tướng Lương Cường thăm, làm việc tại Bộ Tư lệnh .'
    },
    {
      id: 2,
      content: 'Tạo sức lan toả và hiệu quả của Chương trình “Cảnh sát biển đồng hành với ngư dân” tại tỉnh Bến Tre',
      title: 'Tạo sức lan toả và hiệu quả của Chương trình “Cảnh sát biển.”'
    },
    {
      id: 3,
      content: 'Bộ Tư lệnh Vùng Cảnh sát biển 4 thực hiện hiệu quả Nghị quyết Trung ương 8, khóa XI',
      title: 'Bộ Tư lệnh Vùng Cảnh sát biển 4.'
    },
    {
      id: 4,
      content:
        'Hội đồng Lý luận Trung ương đánh giá kết quả thực hiện Chiến lược bảo vệ Tổ quốc trong tình hình mới tại Bộ Tư lệnh Cảnh sát biển',
      title: 'Hội đồng Lý luận Trung ương đánh giá kết quả.'
    }
  ]

  const [dataNews, setDataNews] = useState({ id: 1, content: 'TIN MỚI', icon: FaBook, Conten_all: Theoguongbac })
  const NewPost_Item_All = [
    {
      icon: RiRoadMapFill,
      id: 1,
      title: 'Vì chủ quyền biển, đảo',
      image: New_image_Item,
      content:
        'Ngày 25/4, Bộ Thông tin và Truyền thông tổ chức Hội nghị tập huấn, phổ biến chính sách pháp luật về bảo vệ biên giới của Tổ quốc năm 2023 và Hội nghị tập huấn, phổ biến chính sách, pháp luật về chủ quyền biển, đảo nhằm nâng cao nhận thức, hiểu biết về chính sách pháp luật và kỹ năng viết bài, đẩy mạnh tuyên truyền về bảo vệ biên giới và chủ quyền biển, đảo.',
      name: 'Tập huấn, phổ biến chính sách, pháp luật về bảo vệ biên giới và chủ quyền biển, đảo',
      nameAll: 'Tập huấn, phổ biến chính sách, pháp luật.',
      contentAll:
        'Ngày 25/4, Bộ Thông tin và Truyền thông tổ chức Hội nghị tập huấn, phổ biến chính sách pháp luật về bảo vệ biên giới của Tổ quốc năm 2023.',
      RelatedNews: [
        {
          story_All: 'Đoàn công tác Tổng cục Chính trị Quân đội Nhân dân.',
          story:
            'Đoàn công tác Tổng cục Chính trị Quân đội Nhân dân Việt Nam thăm, động viên cán bộ, chiến sĩ Tàu CSB 8001 trực tại khu vực quần đảo Trường Sa',
          id: 1
        },
        {
          story_All: 'Đẩy mạnh công tác "Cảnh sát biển".',
          story: 'Đẩy mạnh công tác dân vận "Cảnh sát biển đồng hành với ngư dân',
          id: 2
        },
        {
          story_All: 'Giao ban công tác phối hợp thực hiện 03/2019/NĐ-CP.',
          story:
            'Giao ban công tác phối hợp thực hiện Nghị định số 03/2019/NĐ-CP của Chính phủ quý I năm 2023 trên địa bàn tỉnh Quảng Nam',
          id: 3
        },
        {
          story_All: 'Khảo sát, rà soát nguồn nhân lực tàu thuyền trên địa bàn.',
          story: 'Khảo sát, rà soát nguồn nhân lực tàu thuyền trên địa bàn các tỉnh Tây Nam Bộ',
          id: 4
        }
      ]
    },
    {
      icon: GoLaw,
      id: 2,
      title: 'Thực thi pháp luật',
      image: New_image_Item_law,
      content:
        'Cục Nghiệp vụ và Pháp luật Cảnh sát biển cho biết, đơn vị vừa phối hợp với Công an tỉnh Thái Bình bắt quả tang 01 đối tượng có hành vi tàng trữ, vận chuyển trái phép chất ma túy.',
      name: 'Phối hợp bắt giữ đối tượng tàng trữ trái phép chất ma túy',
      nameAll: 'Phối hợp bắt giữ đối tượng.',
      contentAll:
        'Cục Nghiệp vụ và Pháp luật Cảnh sát biển cho biết, đơn vị vừa phối hợp với Công an tỉnh Thái Bình bắt quả tang 01 đối tượng có hành vi tàng trữ.',
      RelatedNews: [
        {
          story_All: 'Khen thưởng thành tích phá đường dây chuyển 9 bánh heroine.',
          story:
            'Bộ Tư lệnh Cảnh sát biển khen thưởng thành tích triệt phá đường dây mua bán, vận chuyển 9 bánh heroine',
          id: 1
        },
        {
          story_All: 'Bắt giữ tàu vận chuyển hơn 30.000 lít dầu D.O trái phép.',
          story: 'Bắt giữ tàu vận chuyển hơn 30.000 lít dầu D.O trái phép trên vùng biển Tây Nam',
          id: 2
        },
        {
          story_All: 'Cảnh sát biển bắt giữ tàu vận chuyển lượng lớn dầu D.O .',
          story: 'Cảnh sát biển bắt giữ tàu vận chuyển lượng lớn dầu D.O trái phép trên vùng biển Tây Nam',
          id: 3
        },
        {
          story_All: 'Triệt phá đường dây mua bán, vận chuyển ma túy.',
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
      name_All: 'Đoàn Đặc nhiệm PCTP ma túy số 2 tổ chức tuyên truyền.',
      image: ElecTriCiPyprice,
      content_All:
        'Chiều 10/4, Đoàn cơ sở Đoàn Đặc nhiệm PCTP ma túy số 2 phối hợp với Đoàn cơ sở xã Phúc Thọ tổ chức buổi tuyên truyền, giáo dục kỹ năng.',
      content:
        'Chiều 10/4, Đoàn cơ sở Đoàn Đặc nhiệm PCTP ma túy số 2 phối hợp với Đoàn cơ sở xã Phúc Thọ tổ chức buổi tuyên truyền, giáo dục kỹ năng sống về phòng, chống đuối nước cho hơn 800 em học sinh trường Tiều học xã Phúc Thọ, huyện Nghi Lộc, tỉnh Nghệ An.',
      RelatedNews: [
        {
          story_All: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 nỗ lực tham gia tìm kiếm.',
          id: 1,
          story: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 nỗ lực tham gia tìm kiếm nạn nhân trong vụ máy bay trực thăng gặp nạn'
        },
        {
          story_All: 'Hải đội 202 tham gia tìm kiếm và kịp thời hỗ trợ gia đình.',
          id: 2,
          story: 'Hải đội 202 tham gia tìm kiếm và kịp thời hỗ trợ gia đình ngư dân gặp nạn '
        },
        {
          story_All: 'Đã tìm thấy thêm 02 thuyền viên ở sà lan gặp nạn trên biển.',
          id: 3,
          story: 'Đã tìm thấy thêm 02 thuyền viên ở sà lan gặp nạn trên biển'
        },
        {
          story_All: 'Tàu CSB 2012 cấp cứu ngư dân bị tai biến trên biển.',
          id: 4,
          story: 'Tàu CSB 2012 cấp cứu ngư dân bị tai biến trên biển'
        }
      ]
    },
    {
      name_All: 'Lực lượng Cảnh sát biển Việt Nam tuần tra liên hợp.',
      content_All:
        'Chiều 09/4, biên đội tàu CSB 8004 và CSB 8003 của Bộ Tư lệnh Vùng Cảnh sát biển 1 cùng Đoàn công tác đã rời cảng Đình Vũ.',
      id: 2,
      name: 'Lực lượng Cảnh sát biển Việt Nam tuần tra liên hợp với Lực lượng Cảnh sát biển Trung Quốc',
      image: InternationalCooperation,
      content:
        'Chiều 09/4, biên đội tàu CSB 8004 và CSB 8003 của Bộ Tư lệnh Vùng Cảnh sát biển 1 cùng Đoàn công tác đã rời cảng Đình Vũ, thành phố Hải Phòng lên đường thực hiện nhiệm vụ tuần tra liên hợp trên vùng biển lân cận đường phân định Vịnh Bắc Bộ cùng Lực lượng Cảnh sát biển Trung Quốc.',
      RelatedNews: [
        {
          story_All: 'Bộ Tư lệnh Cảnh sát biển tổng kết thực hiện nhiệm vụ.',
          id: 1,
          story:
            'Bộ Tư lệnh Cảnh sát biển tổng kết thực hiện nhiệm vụ đón và luyện tập chung với Lực lượng Bảo vệ bờ biển Nhật Bản'
        },
        {
          story_All: 'Tăng cường phối hợp, hợp tác Cảnh sát biển Việt Nam.',
          id: 2,
          story: 'Tăng cường phối hợp, hợp tác giữa Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản'
        },
        {
          story_All: 'Thủ trưởng Bộ Tư lệnh Cảnh sát biển gặp mặt, giao nhiệm vụ.',
          id: 3,
          story:
            'Thủ trưởng Bộ Tư lệnh Cảnh sát biển gặp mặt, giao nhiệm vụ cho cán bộ trước khi lên đường làm nhiệm vụ gìn giữ hòa bình Liên Hợp quốc'
        },
        {
          story_All: 'Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật.',
          id: 4,
          story: 'Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản luyện tập chung trên biển'
        }
      ]
    }
  ]

  const NewPost_Item_All_One = [
    {
      icon: MdSportsGymnastics,
      id: 1,
      title: 'Văn hóa - Thể thao',
      image: SportsCulture,
      content_All:
        'Chiều 13/4, Trung tâm Đào tạo và Bồi dưỡng nghiệp vụ Cảnh sát biển phối hợp với Thời báo Văn học Nghệ thuật/ Liên hiệp các Hội Văn học.',
      name_All: 'Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2023',
      content:
        'Chiều 13/4, Trung tâm Đào tạo và Bồi dưỡng nghiệp vụ Cảnh sát biển phối hợp với Thời báo Văn học Nghệ thuật/ Liên hiệp các Hội Văn học Nghệ thuật Việt Nam, Nhà Xuất bản Dân trí khai mạc Ngày Sách và Văn hóa đọc Việt Nam lần thứ hai năm 2023 với chủ đề “Sách: Nhận thức - Đổi mới - Sáng tạo”. Đại tá Nguyễn Đức Độ - Bí thư Đảng ủy, Chính ủy Trung tâm chủ trì buổi khai mạc.',
      name: 'Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2023',
      RelatedNews: [
        {
          story_All: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 tham gia hội.',
          story: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 tham gia hội trại "Nối vòng tay lớn',
          id: 1
        },
        {
          story_All: 'Đoàn Văn công Quân chủng Phòng không biểu diễn.',
          story:
            'Đoàn Văn công Quân chủng Phòng không - Không quân biểu diễn phục vụ cán bộ, chiến sĩ Bộ Tư lệnh Vùng Cảnh sát biển 3',
          id: 2
        },
        {
          story_All: 'Thể lệ Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng.',
          story: 'Thể lệ Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng Cảnh sát biển Việt Nam',
          id: 3
        },
        {
          story_All: 'Bộ Tư lệnh Cảnh sát biển tổ chức Cuộc vận động sáng tác văn.',
          story:
            'Bộ Tư lệnh Cảnh sát biển tổ chức Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng Cảnh sát biển Việt Nam',
          id: 4
        }
      ]
    },
    {
      icon: MdLocalPolice,
      id: 2,
      title: 'Công tác Cảnh sát biển',
      name_All: 'Đảng ủy Cảnh sát biển và Tỉnh ủy Thái Bình.',
      image: CoastGuardwork,
      content_All:
        'Chiều 25/4, tại Thái Bình, Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam và Ban Thường vụ Tỉnh ủy Thái Bình đã tổ chức hội nghị ký kết.',
      content:
        'Chiều 25/4, tại Thái Bình, Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam và Ban Thường vụ Tỉnh ủy Thái Bình đã tổ chức hội nghị ký kết Chương trình phối hợp thực hiện công tác dân vận “Cảnh sát biển đồng hành với ngư dân”. Thái Bình là tỉnh thành thứ 22 Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam ký kết Chương trình phối hợp thực hiện.',
      name: 'Đảng ủy Cảnh sát biển và Tỉnh ủy Thái Bình ký kết chương trình Cảnh sát biển đồng hành với ngư dân',
      RelatedNews: [
        {
          story_All: 'Bộ Tư lệnh Vùng Cảnh sát biển 3 tổ chức chức Hội thi cán bộ.',
          story: 'Bộ Tư lệnh Vùng Cảnh sát biển 3 tổ chức Hội thi cán bộ giảng dạy chính trị năm 2023',
          id: 1
        },
        {
          story_All: 'Không ngừng củng cố kiến thức, chuyên môn kỹ thuật cho đội ngũ.',
          story: 'Không ngừng củng cố kiến thức, chuyên môn kỹ thuật cho đội ngũ QNCN, CNVQP',
          id: 2
        },
        {
          story_All: 'Sôi nổi Cuộc thi “Em yêu biển, đảo quê hương”.',
          story: 'Sôi nổi Cuộc thi “Em yêu biển, đảo quê hương” tại huyện Núi Thành, tỉnh Quảng Nam',
          id: 3
        },
        {
          story_All: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 hưởng ứng Ngày Sách.',
          story: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 hưởng ứng Ngày Sách và văn hóa đọc Việt Nam năm 2023',
          id: 4
        }
      ]
    }
  ]

  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose((pre) => !pre)
  }

  const Video_media =
    'https://canhsatbien.vn:443/upload/files/video/20221122/trailer-csb-va-nhung-nguoi-ban-lan-thu-nhat-074813552.mp4'

  const media_all = {
    title: 'Chương trình giao lưu "Cảnh sát biển Việt Nam và những người bạn" lần thứ nhất (Từ ngày 8 đến 11/12/2022)',
    video: Video_media
  }

  const handle_New = (Conten_all: any) => setDataNews(Conten_all)

  return (
    <div className='w-full mt-4 mb-10'>
      <div className='w-[80%] m-auto flex justify-between max-w-screen-2xl relative'>
        <div className=' w-[50.4%] flex items-center max-[1300px]:hidden bg-white shadow-xl border-[1px] border-[#F6F6F6] rounded-full  '>
          <input
            placeholder='Nhập từ khoá'
            type='text'
            className='w-[95%] outline-none rounded-full text-[15px]  px-3 py-2'
          />
          <AiOutlineSearch className='w-[5%]' />
        </div>
        <div className='w-[48%] bg-[#F6F6F6] max-[1300px]:w-full max-[1300px]:py-5 '>
          <div className='w-[95%] m-auto flex justify-between h-[100%] max-[500px]:justify-end'>
            {contentAll.map((item, index) => (
              <div
                className={classNames(
                  `flex items-center px-3 border-b-[2px] hover:border-[#DA251C]  max-[500px]:border-none	  hover:duration-700 ${
                    item.Conten_all[index].id === dataNews.id ? 'border-[#DA251C]' : 'border-[#F6F6F6]'
                  }`
                )}
                onClick={() => handle_New(item)}
              >
                {item.img && (
                  <div className='w-[16px] h-[21px] max-[500px]:hidden'>
                    <img className='w-full h-full' src={item.img} alt='' />
                  </div>
                )}
                {item.icon && (
                  <div className='cursor-pointer text-[#DA251C] max-[500px]:hidden'>
                    <item.icon />
                  </div>
                )}

                <NewsCsb
                  classItem={'max-[500px]:hidden cursor-pointer hover:[#191970] ml-[5px] text-[#000000]'}
                  contentItem={item.content}
                />
              </div>
            ))}
            {/* <div className='hidden max-[1300px]:block '>
              {!close && <AiOutlineBars onClick={handleClose} />}

              {close && (
                <div className='absolute w-[100%] z-[1] right-0 left-0 top-0 p-4 bg-white '>
                  <div className='flex justify-between bg-[#F6F6F6] items-center p-[10px]'>
                    <h3>Menu</h3>
                    {close && <AiOutlineClose className='bg-[#F6F6F6] p-[3px]' onClick={handleClose} />}
                  </div>
                  {narBarItemAll.map((item) => (
                    <div className='pt-2 px-[10px]'>{item.title}</div>
                  ))}
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl max-[850px]:flex-col overflow-auto '>
        <div className='w-[72%] flex justify-between max-[1300px]:flex-col max-[850px]:w-[100%] '>
          
          <Box_Call/>
          <div className='w-[88%]'>
            <div className='w-full flex justify-between '>
              <div className='w-[67%] max-[1300px]:w-[100%] border-r-[1px] max-[850px]:border-none	'>
                <div className='w-[97%]'>
                  <Posts />
                  <div className='w-full'>
                    <List_item_all_new />
                  </div>
                  <div className='mt-4'>
                    {ShortMessageItem.map((item) => (
                      <ShortMessage
                        classItiemAll={'line-clamp-1'}
                        classItiem={
                          "text-[15px] before:content-['>'] before:mr-2 before:text-red-500 flex cursor-pointer hover:text-[#191970]"
                        }
                        conTentShortMessage={item.title}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className='w-[30%] overflow-y-auto	max-[1300px]:w-[100%] max-[1300px]:pt-8'>
                <div className='scrollbar h-[22vh] max-[1300px]:h-[100%]'>
                  {dataNews.Conten_all.map((item) => (
                    <ShortMessage
                      classItiemAll={'text-[15px] text-black font-bold hover:text-[#191970]'}
                      classItiem={
                        "text-[15px] text-[#000] before:content-['>'] before:mr-2 before:text-red-500 flex pb-[17px] pt-[23px] border-b-[1px] first:pt-0 cursor-pointer	 "
                      }
                      conTentShortMessage={item.content}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full m-auto mt-9 pt-6 border-t-[1px] border-slate-300'>
              <img
                className='w-full'
                src='https://canhsatbien.vn:443/upload/files/category/20210607/tuyen-truyen-luat-csb-2021-090548126.gif?h=165'
                alt=''
              />
            </div>
            <div className='w-full m-auto max-w-screen-2xl '>
              <List_leaDer />
            </div>
            <div className='w-full m-auto max-w-screen-2xl mt-7 justify-between flex  max-[1160px]:flex-col'>
              <div className=' w-full flex flex-col max-[1160px]:w-[100%] max-[850px]:flex-col first:pb-4 '>
                {NewPost_Item_All.map((item) => (
                  <NewPost_Item
                    icon_item={<item.icon />}
                    class_Custom_layout={'first:pb-7'}
                    class_NewPost_Item={'w-[100%]  max-[850px]:w-[100%] cursor-pointer	'}
                    itemAll_id={item.id}
                    itemAll_RelatedNews={item.RelatedNews}
                    itemAll_content={item.content}
                    itemAll_image={item.image}
                    itemAll_title={item.title}
                    itemAll_Name={item.name}
                    itemAll_Name_All={item.nameAll}
                    itemAll_content_All={item.contentAll}
                  />
                ))}
              </div>
            </div>
            <div className='w-full m-auto mt-7 max-w-screen-2xl'>
              <div className='w-full border-t-[1px] border-[#DA251C]'>
                <div className='flex-col max-[850px]:flex-col'>
                  {policyDevelopmentAll.map((item) => (
                    <div className='w-full max-[850px]:w-[100%]'>
                      <PolicyDevelopment
                        class_NewPost_Item={'w-[47%]  max-[850px]:w-[100%] cursor-pointer	'}
                        itemAll_id={item.id}
                        itemAll_RelatedNews={item.RelatedNews}
                        itemAll_content={item.content}
                        itemAll_image={item.image}
                        itemAll_Name={item.name}
                        itemAll_Name_All={item.name_All}
                        itemAll_content_All={item.content_All}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full m-auto flex-col justify-between mt-7 max-w-screen-2xl max-[850px]:flex-col'>
              {NewPost_Item_All_One.map((item) => (
                <NewPost_Item
                  icon_item={<item.icon />}
                  class_NewPost_Item={'w-full  max-[850px]:w-[100%] cursor-pointer	'}
                  itemAll_id={item.id}
                  itemAll_RelatedNews={item.RelatedNews}
                  itemAll_content={item.content}
                  itemAll_image={item.image}
                  itemAll_title={item.title}
                  itemAll_Name={item.name}
                  itemAll_content_All={item.content_All}
                  itemAll_Name_All={item.name_All}
                />
              ))}
            </div>
            <div className='w-full m-auto max-w-screen-2xl mt-5'>
              <div className='w-full bg-[#F6F6F6] py-3 px-2 flex items-center '>
                <div className='bg-[#DA251C] h-7 w-1'></div>
                <div className='font-bold ml-2 text-[17px] uppercase mt-[2px] text-[#031739] hover:text-[#191970] '>
                  Tổ chức - Biên chế
                </div>
              </div>

              <div className='my-10 '>
                <p className='  text-[#333] my-3 text-[15px]'>
                  <span>
                    Theo đó, hệ thống tổ chức của Cảnh sát biển Việt Nam gồm: Bộ Tư lệnh Cảnh sát biển Việt Nam; các đơn
                    vị trực thuộc Bộ Tư lệnh Cảnh sát biển Việt Nam; Các cơ quan, đơn vị đầu mối và cấp cơ sở trực thuộc
                    các đơn vị trên. Trong đó, Cơ quan Bộ Tư lệnh Cảnh sát biển Việt Nam gồm Bộ Tham mưu, Cục Chính trị,
                    Cục Nghiệp vụ và Pháp luật, Cục Hậu Cần, Cục Kỹ thuật, các cơ quan trực thuộc Tư lệnh Cảnh sát biển
                    Việt Nam.
                  </span>
                </p>
                <p className=' text-[#333] my-3 text-[15px]'>
                  <span>
                    Chức danh pháp lý của Cảnh sát biển Việt Nam là Cảnh sát viên, Trinh sát viên và Cán bộ điều tra, có
                    nhiệm vụ phòng ngừa, ngăn chặn, phát hiện và đấu tranh phòng, chống tội phạm, vi phạm pháp luật.
                    Cảnh sát viên, Trinh sát viên Cảnh sát biển gồm: cảnh sát viên, Trinh sát viên sơ cấp; Cảnh sát
                    viên, Trinh sát trung cấp; Cảnh sát viên, Trinh sát viên cao cấp.
                  </span>
                </p>
                <p className=' text-[#333] my-3 text-[15px]'>
                  <span>
                    Bộ Quốc phòng quy định điều kiện, tiêu chuẩn, trình tự, thủ tục bổ nhiệm, miễn nhiệm, cách chức đối
                    với Cảnh sát viên, Trinh sát viên của Cảnh sát biển Việt Nam. Tư lệnh Cảnh sát biển Việt Nam quyết
                    định bổ nhiệm, miễn nhiệm, cách chức Cảnh sát viên, Trinh sát viên; cấp, thu hồi và quy định việc
                    quản lý, sử dụng Giấy chứng nhận Cảnh sát viên, Trinh sát viên của Cảnh sát biển Việt Nam.
                  </span>
                </p>
                <p className=' text-[#333] my-3 text-[15px]'>
                  <span>
                    Cán bộ điều tra thuộc Cảnh sát biển Việt Nam khi được phân công điều tra vụ án hình sự theo quy định
                    của Bộ luật Tố tụng hình sự, Luật Tổ chức cơ quan điều tra hình sự phải chịu trách nhiệm trước pháp
                    luật và Thủ trưởng đã ra quyết định phân công về việc thực hiện nhiệm vụ, quyền hạn của mình.
                  </span>
                </p>
                <p className=' text-[#333] my-3 text-[15px]'>
                  <span>
                    Cán bộ, chiến sỹ Cảnh sát biển Việt Nam được hưởng lương theo ngạch, bậc, chức vụ, chế độ trợ cấp;
                    được hưởng chế độ phụ cấp thâm niên vượt khung, phụ cấp kiêm nhiệm chức danh lãnh đạo, phụ cấp khu
                    vực, phụ cấp đặc biệt, phụ cấp thu hút, phụ cấp lưu động, phụ cấp độc hại nguy hiểm, phụ cấp thâm
                    niên nghề, phụ cấp trách nhiệm theo nghề, phụ cấp trách nhiệm công việc, phụ cấp phục vụ quốc
                    phòng-an ninh, phụ cấp công tác lâu năm ở trên tàu, biển, đảo, phụ cấp ngày đi biển, phụ cấp đặc thù
                    đi biển... phù hợp với khu vực địa bàn vùng biển, đảo công tác, yêu cầu nhiệm vụ và chế độ, chính
                    sách khác như cán bộ, chiến sỹ lực lượng vũ trang và cán bộ, công chức, viên chức có cùng điều kiện,
                    môi trường làm việc, khu vực địa bàn, biển đảo công tác theo quy định của pháp .
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[26%] border-slate-400 max-[850px]:w-[100%]'>
          <div className='w-[100%] border-t-[2px] border-[#DA251C]  '>
            <Title_media title_Clip={'Video - Clip'} libari_image={'Thư viện ảnh'} />
            <div className='w-[95%] m-auto mt-4'>
              <Video_Title
                Image_csb_All={Image_csb}
                Video_media_title={media_all.title}
                Video_media_video={media_all.video}
                content={'Xem tất cả...'}
              />
            </div>
          </div>
          <div>
            <Title_media title_Clip={'Thông tin thời tiết'} Title={'m-auto'} />
            <div className='w-full text-center text-[16px] font-bold hover:text-[#191970] py-2'>
              <Link to={''}>Bản tin thủy văn</Link>
              <img className='w-[95%] m-auto py-2' src={BG_IMG} alt='' />
              <img src={BG_IMG_THREE} alt='' className='w-[95%] m-auto py-2' />
              <img src='https://tranvietmb.com/wp-content/uploads/2021/09/bao-hiem-lien-ket-dau-tu-920x425.jpg' alt='' className='w-[95%] m-auto py-2  h-[122px]' />
              <img src="https://tttctt.1cdn.vn/thumbs/600x315/2023/03/06/kv-biz-mbbank.jpg" alt="" className='w-[95%] m-auto py-2 h-[122px]' />
              {/* <img src={BG_IMG_THREE} alt='' className='w-[95%] m-auto py-2' /> */}
              
              {/* <img src={BG_IMG_TWO} alt='' className='w-[95%] m-auto' /> */}
              {/* <img src={BG_IMG_VietTell} alt='' className='w-[95%] m-auto' /> */}
            </div>
          </div>
          <h1 className='text-center bg-[#F6F6F6] text-[17px] py-4 font-bold	border-slate-400	hover:text-[#191970]'>
            BẢN ĐỒ HÀNH CHÍNH
          </h1>
          <img src={Map} alt='' className='cursor-pointer	' />
          <p className='text-center bg-[#F6F6F6] text-[13px] text-[#3B4E68] py-4 border-slate-400'>
            © Cổng TTĐT Cảnh sát biển
          </p>
        </div>
      </div>
      <div className='w-[80%] m-auto'>
        <Slice_cart_news_coppy_image />
      </div>

      {/* <div className='w-[80%] m-auto max-w-screen-2xl '>
        <List_leaDer />
      </div> */}

      {/* <div className='w-[80%] m-auto mt-7 max-w-screen-2xl'>
        <div className='w-full border-t-[1px] border-[#DA251C]'>
          <div className='w-full border-t-[1px] border-[#DA251C]'>
            <div className='border-b-[1px] border-stale-300 py-3 flex items-center'>
              <RiSendPlaneFill className='text-[#00008B]' />
              <h1 className='font-bold	text-[17px] ml-2 uppercase text-[#00008B] hover:text-[#191970] cursor-pointer'>
                xây dựng chính sách
              </h1>
            </div>
          </div>
          <div className='flex-col max-[850px]:flex-col'>
            {policyDevelopmentAll.map((item) => (
              <div className='w-[47%] max-[850px]:w-[100%]'>
                <PolicyDevelopment
                  class_NewPost_Item={'w-[47%]  max-[850px]:w-[100%] cursor-pointer	'}
                  itemAll_id={item.id}
                  itemAll_RelatedNews={item.RelatedNews}
                  itemAll_content={item.content}
                  itemAll_image={item.image}
                  itemAll_Name={item.name}
                  itemAll_Name_All={item.name_All}
                  itemAll_content_All={item.content_All}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl max-[850px]:flex-col'>
        {NewPost_Item_All_One.map((item) => (
          <NewPost_Item
            icon_item={<item.icon />}
            class_NewPost_Item={'w-[47%]  max-[850px]:w-[100%] cursor-pointer	'}
            itemAll_id={item.id}
            itemAll_RelatedNews={item.RelatedNews}
            itemAll_content={item.content}
            itemAll_image={item.image}
            itemAll_title={item.title}
            itemAll_Name={item.name}
            itemAll_content_All={item.content_All}
            itemAll_Name_All={item.name_All}
          />
        ))}
      </div> */}
    </div>
  )
}

{
  /* <div className='overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group'>
  <img
    className='object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
    src='https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
'
  />
</div> */
}
{
  /* <img src={BG_IMG_TWO} alt='' className='w-[95%] m-auto' /> */
}
{
  /* <img src={BG_IMG_VietTell} alt='' className='w-[95%] m-auto' /> */
}

{
  /* <div className='w-[35%] max-[1160px]:w-[100%]'>
          <div className='w-[100%] border-t-[2px] border-[#DA251C]  '>
            <Title_media title_Clip={'Video - Clip'} libari_image={'Thư viện ảnh'} />
            <div className='w-[95%] m-auto mt-4'>
              <Video_Title
                Image_csb_All={Image_csb}
                Video_media_title={media_all.title}
                Video_media_video={media_all.video}
                content={'Xem tất cả...'}
              />
            </div>
          </div>
          <div>
            <Title_media title_Clip={'Thông tin thời tiết'} Title={'m-auto'} />
            <div className='w-full text-center text-[16px] font-bold hover:text-[#191970] py-2'>
              <Link to={''}>Bản tin thủy văn</Link>
              <img className='w-[95%] m-auto py-2' src={BG_IMG} alt='' />
              <img src={BG_IMG_THREE} alt='' className='w-[95%] m-auto py-2' />
            </div>
          </div>
        </div> */
}

{
  /* <Chart_All_Item /> */
}
{
  /* <Chart_test_Item /> */
}
