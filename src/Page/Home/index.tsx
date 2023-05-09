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
import { AiOutlineSearch } from 'react-icons/ai'
// import { narBarItemAll } from '../../component/Napbar'
import List_leaDer from '../../component/List_leaDer'
// import Video_media from '../../assets/Video/trailer-csb-va-nhung-nguoi-ban-lan-thu-nhat-074813552.mp4'
import Video_Title from '../../component/video_Title'
import Image_csb from '../../assets/cover canh sat bien vn.jpg'
import Title_media from '../../component/Title_media'
import { Link } from 'react-router-dom'
import BG_IMG from '../../assets/bnqc-6-095527762.jpg'
// import BG_IMG_TWO from '../../assets/media-qdndvn-133303282.jpg'
import BG_IMG_THREE from '../../assets/duong-day-nong-090912604-150007571-080459585.jpg'
import Grid_bg from '../../assets/tuyen-truyen-luat-csb-2021-090548126.gif'
// import BG_IMG_VietTell from '../../assets/viettel-logo-145740177.jpg'
// import Chart_All_Item from '../../component/Chart_All_Item'
// import Chart_test_Item from '../../component/Chart_test_Item'
// import { Organization_Payroll_Data } from '../../component/constant'
import { FaBook } from 'react-icons/fa'
import { IoNewspaperSharp } from 'react-icons/io5'
// import Backfrond from '../../assets/lopqqgk7.png'
import classNames from 'classnames'
// import IconNews from '../../assets/png-clipart-kochers-computer-icons-new-label-leaf-text-thumbnail.png'
// import { BsFacebook } from 'react-icons/bs'
// import { FiMessageSquare } from 'react-icons/fi'
// import { HiOutlineMinusCircle } from 'react-icons/hi'
import { RiRoadMapFill } from 'react-icons/ri'
// import { IoMdAddCircleOutline } from 'react-icons/io'
import { GoLaw } from 'react-icons/go'
import List_item_all_new from '../../component/List_item_all_new'
import { MdSportsGymnastics, MdLocalPolice, MdSecurity } from 'react-icons/md'
// import AutoSlice_cart_newsPlay from '../../component/Slice_cart_news'
import Slice_cart_news_coppy_image from '../../component/Slice_cart_news_coppy_image'
import Box_Call from '../../component/Box_Call'
import Box_weather from '../../component/Box_weather'

export default function Home() {
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
    // { id: 7, content: '“Cục Cảnh sát biển Việt Nam 15 năm xây dựng và trưởng thành' },
    // { id: 8, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' },
    // { id: 9, content: '“Cục Cảnh sát biển Việt Nam 15 năm xây dựng và trưởng thành' },
    // { id: 10, content: 'UBND thành phố Hải Phòng tặng thưởng các tập thể có thành tích xuất sắc trong' }
  ]

  const TinMoi = [
    {
      id: 1,
      content: 'Thiếu tướng Lê Quang Đạo - Tư lệnh Cảnh sát biển tiếp xúc cử tri tỉnh Phú'
    },
    {
      id: 2,
      content: 'Đoàn Đặc nhiệm PCTP ma túy số 2 tuyên truyền pháp luật, khám và cấp phát thuốc miễn phí cho người dân'
    },
    {
      id: 3,
      content: 'Bảo hiểm xã hội Bộ Quốc phòng làm việc với Bộ Tư lệnh Cảnh sát biển'
    },
    {
      id: 4,
      content: 'Hải đoàn 21 tổ chức hội nghị tuyên truyền về tình hình an ninh biển, đảo'
    },
    { id: 5, content: 'Tàu Cảnh sát biển 3003 tuyên truyền phòng chống IUU tại khu vực đảo' },
    { id: 6, content: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 tạm giữ tàu chở dầu không rõ nguồn gốc' }
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

  const contentAll = [
    { id: 1, content: 'TIN ĐỌC NHIỀU', icon: IoNewspaperSharp, Conten_all: DocNhieu },
    { id: 2, content: 'TIN MỚI', icon: FaBook, Conten_all: TinMoi }
    // {
    //   id: 3,
    //   content: 'THEO GƯƠNG BÁC',
    //   img: 'https://static.wixstatic.com/media/9d8ed5_c69e33fefd0b420f8763d2c478de5c66~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01/9d8ed5_c69e33fefd0b420f8763d2c478de5c66~mv2.webp',
    //   Conten_all: TinMoi
    // }
  ]
  const [dataNews, setDataNews] = useState({ id: 1, content: 'ĐỌC NHIỀU', icon: FaBook, Conten_all: DocNhieu })
  const NewPost_Item_All = [
    {
      icon: MdSecurity,
      id: 8,
      title: 'Quốc phòng - An ninh',
      image: 'https://canhsatbien.vn/upload/files/image/20230507/thieu-tuong-le-quang-dao-181826741.jpg?w=400',
      content:
        'Từ ngày 04 – 06/5/2023, Thiếu tướng Lê Quang Đạo - Tư lệnh Cảnh sát biển Việt Nam, Đại biểu Quốc hội khóa XV cùng Đoàn Đại biểu Quốc hội (ĐBQH) tỉnh Phú Yên đã tiếp xúc cử tri tại Tp. Tuy Hòa, thị xã Sông Cầu, huyện Tuy An và huyện Đồng Xuân thuộc tỉnh Phú Yên.',
      name: 'Tập huấn, phổ biến chính sách, pháp luật về bảo vệ biên giới và chủ quyền biển, đảo',
      nameAll:
        'Thiếu tướng Lê Quang Đạo - Tư lệnh Cảnh sát biển tiếp xúc cử tri tỉnh Phú Yên trước Kỳ họp thứ 5, Quốc hội khóa XV',
      contentAll:
        'Từ ngày 04 – 06/5/2023, Thiếu tướng Lê Quang Đạo - Tư lệnh Cảnh sát biển Việt Nam, Đại biểu Quốc hội khóa XV cùng Đoàn Đại biểu Quốc hội (ĐBQH) tỉnh Phú Yên đã tiếp xúc cử tri tại Tp. Tuy Hòa, thị xã Sông Cầu, huyện Tuy An và huyện Đồng Xuân thuộc tỉnh Phú Yên.',
      RelatedNews: [
        {
          story_All: 'Phó Chủ tịch Quốc hội Trần Quang Phương thăm và làm việc với Bộ Tư lệnh Cảnh sát biển',
          story:
            'Đoàn công tác Tổng cục Chính trị Quân đội Nhân dân Việt Nam thăm, động viên cán bộ, chiến sĩ Tàu CSB 8001 trực tại khu vực quần đảo Trường Sa',
          id: 1,
          img: 'https://canhsatbien.vn/upload/files/1/Tin%20tuc%20-%20su%20kien/Quoc%20phong%20-%20an%20ninh/Nam%202023/Thang%204/Quang-canh.jpg'
        },
        {
          story_All: 'Đại tướng Lương Cường thăm, làm việc tại Bộ Tư lệnh Vùng Cảnh sát biển 4',
          story: 'Đẩy mạnh công tác dân vận "Cảnh sát biển đồng hành với ngư dân',
          id: 2,
          img: 'https://canhsatbien.vn/upload/files/1/Tin%20tuc%20-%20su%20kien/Quoc%20phong%20-%20an%20ninh/Nam%202023/Thang%203/Dai-tuong-tang-qua-Vung-4.jpg'
        },
        {
          story_All:
            'Tạo sức lan toả và hiệu quả của Chương trình “Cảnh sát biển đồng hành với ngư dân” tại tỉnh Bến Tre',
          story:
            'Giao ban công tác phối hợp thực hiện Nghị định số 03/2019/NĐ-CP của Chính phủ quý I năm 2023 trên địa bàn tỉnh Quảng Nam',
          id: 3,
          img: 'https://canhsatbien.vn/upload/files/1/Tin%20tuc%20-%20su%20kien/Quoc%20phong%20-%20an%20ninh/Nam%202023/Thang%203/BEN%20TRE/ky-ket-ben-tre.jpg'
        },
        {
          story_All: 'Bộ Tư lệnh Vùng Cảnh sát biển 4 thực hiện hiệu quả Nghị quyết Trung ương 8, khóa XI',
          story: 'Khảo sát, rà soát nguồn nhân lực tàu thuyền trên địa bàn các tỉnh Tây Nam Bộ',
          id: 4,
          img: 'https://canhsatbien.vn/upload/files/1/Tin%20tuc%20-%20su%20kien/Quoc%20phong%20-%20an%20ninh/Nam%202023/Thang%203/Quang-c%E1%BA%A3nh-H%E1%BB%99i-ngh%E1%BB%8B.jpg'
        }
      ]
    },
    {
      icon: RiRoadMapFill,
      id: 1,
      title: 'Vì chủ quyền biển, đảo',
      image: New_image_Item,
      content:
        'Ngày 25/4, Bộ Thông tin và Truyền thông tổ chức Hội nghị tập huấn, phổ biến chính sách pháp luật về bảo vệ biên giới của Tổ quốc năm 2023 và Hội nghị tập huấn, phổ biến chính sách, pháp luật về chủ quyền biển, đảo nhằm nâng cao nhận thức, hiểu biết về chính sách pháp luật và kỹ năng viết bài, đẩy mạnh tuyên truyền về bảo vệ biên giới và chủ quyền biển, đảo.',
      name: 'Tập huấn, phổ biến chính sách, pháp luật về bảo vệ biên giới và chủ quyền biển, đảo',
      nameAll: 'Tập huấn, phổ biến chính sách, pháp luật về bảo vệ biên giới và chủ quyền biển, đảo',
      contentAll:
        'Ngày 25/4, Bộ Thông tin và Truyền thông tổ chức Hội nghị tập huấn, phổ biến chính sách pháp luật về bảo vệ biên giới của Tổ quốc năm 2023 và Hội nghị tập huấn, phổ biến chính sách, pháp luật về chủ quyền biển, đảo nhằm nâng cao nhận thức, hiểu biết về chính sách pháp luật và kỹ năng viết bài, đẩy mạnh tuyên truyền về bảo vệ biên giới và chủ quyền biển, đảo.',
      RelatedNews: [
        {
          story_All:
            'Đoàn công tác Tổng cục Chính trị Quân đội Nhân dân Việt Nam thăm, động viên cán bộ, chiến sĩ Tàu CSB 8001 trực tại khu vực quần đảo Trường Sa.',
          story:
            'Đoàn công tác Tổng cục Chính trị Quân đội Nhân dân Việt Nam thăm, động viên cán bộ, chiến sĩ Tàu CSB 8001 trực tại khu vực quần đảo Trường Sa',
          id: 1,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Vi%20chu%20quyen%20bien%2C%20dao/Nam%202023/TT-Gau-tham-dong-vienTau-CSB-8001.jpg'
        },
        {
          story_All: 'Đẩy mạnh công tác dân vận "Cảnh sát biển đồng hành với ngư dân".',
          story: 'Đẩy mạnh công tác dân vận "Cảnh sát biển đồng hành với ngư dân',
          id: 2,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Vi%20chu%20quyen%20bien%2C%20dao/Nam%202023/Trung-tuong-Bui-Quoc-Oai-phat-bieu.jpg'
        },
        {
          story_All:
            'Giao ban công tác phối hợp thực hiện Nghị định số 03/2019/NĐ-CP của Chính phủ quý I năm 2023 trên địa bàn tỉnh Quảng Nam.',
          story:
            'Giao ban công tác phối hợp thực hiện Nghị định số 03/2019/NĐ-CP của Chính phủ quý I năm 2023 trên địa bàn tỉnh Quảng Nam',
          id: 3,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Vi%20chu%20quyen%20bien%2C%20dao/Nam%202023/%C4%90%E1%BA%A1i-bi%E1%BB%83u-tham-d%E1%BB%B1-h%E1%BB%99i-ngh%E1%BB%8B-giao-ban.jpg'
        },
        {
          story_All: 'Khảo sát, rà soát nguồn nhân lực tàu thuyền trên địa bàn các tỉnh Tây Nam Bộ.',
          story: 'Khảo sát, rà soát nguồn nhân lực tàu thuyền trên địa bàn các tỉnh Tây Nam Bộ',
          id: 4,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Vi%20chu%20quyen%20bien%2C%20dao/Nam%202023/%C4%90%E1%BA%A1i-t%C3%A1-Tr%E1%BA%A7n-Nguy%C3%AAn-Lai---Ph%C3%B3-T%C6%B0-l%E1%BB%87nh%2C-Tham-m%C6%B0u-tr%C6%B0%E1%BB%9Fng-BTL-V%C3%B9ng-CSB4-ph%C3%A1t-bi%E1%BB%83u-t%E1%BA%A1i-bu%E1%BB%95i-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-BCHQS-t%E1%BB%89nh-Ki%C3%AAn-Giang.jpg'
        }
      ]
    },
    {
      icon: GoLaw,
      id: 2,
      title: 'Thực thi pháp luật',
      image: 'https://canhsatbien.vn/upload/files/image/20230502/tau-vi-pham-bi-tam-giu-101420264.jpg?w=400',
      content:
        'Cục Nghiệp vụ và Pháp luật Cảnh sát biển cho biết, đơn vị vừa phối hợp với Công an tỉnh Thái Bình bắt quả tang 01 đối tượng có hành vi tàng trữ, vận chuyển trái phép chất ma túy.',
      name: 'Phối hợp bắt giữ đối tượng tàng trữ trái phép chất ma túy',
      nameAll: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 tạm giữ tàu chở dầu không rõ nguồn gốc',
      contentAll:
        'Ngày 01/5, lực lượng chức năng Bộ Tư lệnh Vùng Cảnh sát biển 1 đã hoàn tất hồ sơ ban đầu, ra quyết định tạm giữ tàu chở dầu DO và FO không rõ nguồn gốc hợp pháp, tiếp tục điều tra, xác minh và xử lý theo quy định của pháp luật.',
      RelatedNews: [
        {
          story_All: 'Phối hợp bắt giữ đối tượng tàng trữ trái phép chất ma túy.',
          story:
            'Bộ Tư lệnh Cảnh sát biển khen thưởng thành tích triệt phá đường dây mua bán, vận chuyển 9 bánh heroine',
          id: 1,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Thuc%20thi%20phap%20luat/Nam%202023/Thang%204/%C4%90%E1%BB%91i-t%C6%B0%E1%BB%A3ng-Tr%E1%BA%A7n-Th%E1%BB%8B-Rum-va-tang-vat.jpg'
        },
        {
          story_All:
            'Bộ Tư lệnh Cảnh sát biển khen thưởng thành tích triệt phá đường dây mua bán, vận chuyển 9 bánh heroine.',
          story: 'Bắt giữ tàu vận chuyển hơn 30.000 lít dầu D.O trái phép trên vùng biển Tây Nam',
          id: 2,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Thuc%20thi%20phap%20luat/Nam%202023/Thang%204/Thi%E1%BA%BFu%20t%C6%B0%E1%BB%9Bng%20V%C5%A9%20Trung%20Ki%C3%AAn%20-%20Ph%C3%B3%20T%C6%B0%20l%C3%AAnh%20C%E1%BA%A3nh%20s%C3%A1t%20bi%E1%BB%83n%20ph%C3%A1t%20bi%E1%BB%83u%20ch%E1%BB%89%20%C4%91%E1%BA%A1o%20H%E1%BB%99i%20ngh%E1%BB%8B.JPG'
        },
        {
          story_All: 'Bắt giữ tàu vận chuyển hơn 30.000 lít dầu D.O trái phép trên vùng biển Tây Nam.',
          story: 'Cảnh sát biển bắt giữ tàu vận chuyển lượng lớn dầu D.O trái phép trên vùng biển Tây Nam',
          id: 3,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Thuc%20thi%20phap%20luat/Nam%202023/Thang%204/L%E1%BB%B1c-l%C6%B0%E1%BB%A3ng-ch%E1%BB%A9c-n%C4%83ng-c%E1%BB%A7a-BTL-V%C3%B9ng-C%E1%BA%A3nh-s%C3%A1t-bi%E1%BB%83n-4-ki%E1%BB%83m-tra-t%C3%A0u-vi-ph%E1%BA%A1m.jpg'
        },
        {
          story_All: 'Cảnh sát biển bắt giữ tàu vận chuyển lượng lớn dầu D.O trái phép trên vùng biển Tây Nam',
          story: 'Triệt phá đường dây mua bán, vận chuyển ma túy với số lượng lớn',
          id: 4,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Thuc%20thi%20phap%20luat/Nam%202023/Thang%204/H%C3%ACnh-%E1%BA%A3nh-t%C3%A0u-vi-ph%E1%BA%A1m.jpg'
        }
      ]
    }
  ]

  const policyDevelopmentAll = [
    {
      header: 'Cứu hộ - Cứu nạn',
      id: 1,
      name: 'Đoàn Đặc nhiệm PCTP ma túy số 2 tổ chức tuyên truyền phòng, chống tai nạn đuối nước cho học sinh',
      name_All: 'Đoàn Đặc nhiệm PCTP ma túy số 2 tổ chức tuyên truyền phòng, chống tai nạn đuối nước cho học sinh',
      image: ElecTriCiPyprice,
      content_All:
        'Chiều 10/4, Đoàn cơ sở Đoàn Đặc nhiệm PCTP ma túy số 2 phối hợp với Đoàn cơ sở xã Phúc Thọ tổ chức buổi tuyên truyền, giáo dục kỹ năng sống về phòng, chống đuối nước cho hơn 800 em học sinh trường Tiều học xã Phúc Thọ, huyện Nghi Lộc, tỉnh Nghệ An.',
      content:
        'Chiều 10/4, Đoàn cơ sở Đoàn Đặc nhiệm PCTP ma túy số 2 phối hợp với Đoàn cơ sở xã Phúc Thọ tổ chức buổi tuyên truyền, giáo dục kỹ năng sống về phòng, chống đuối nước cho hơn 800 em học sinh trường Tiều học xã Phúc Thọ, huyện Nghi Lộc, tỉnh Nghệ An.',
      RelatedNews: [
        {
          story_All:
            'Bộ Tư lệnh Vùng Cảnh sát biển 1 nỗ lực tham gia tìm kiếm nạn nhân trong vụ máy bay trực thăng gặp nạn',
          id: 1,
          story: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 nỗ lực tham gia tìm kiếm nạn nhân trong vụ máy bay trực thăng gặp nạn',
          img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%204/Vung%201/T%C3%A0u-CSB-4003-%C4%91ang-l%C3%A0m-nhi%E1%BB%87m-v%E1%BB%A5-t%E1%BA%A1i-khu-v%E1%BB%B1c-m%C3%A1y-bay-tr%E1%BB%B1c-th%C4%83ng-g%E1%BA%B7p-n%E1%BA%A1n.jpg'
        },
        {
          story_All: 'Hải đội 202 tham gia tìm kiếm và kịp thời hỗ trợ gia đình ngư dân gặp nạn ',
          id: 2,
          story: 'Hải đội 202 tham gia tìm kiếm và kịp thời hỗ trợ gia đình ngư dân gặp nạn ',
          img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%203/Vung%202/202/csb-cuu-ho.jpg'
        },
        {
          story_All: 'Đã tìm thấy thêm 02 thuyền viên ở sà lan gặp nạn trên biển',
          id: 3,
          story: 'Đã tìm thấy thêm 02 thuyền viên ở sà lan gặp nạn trên biển',
          img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cuu%20ho%20-%20cuu%20nan/Nam%202023/vung%203/C%C3%A1n-b%E1%BB%99%2C-chi%E1%BA%BFn-s%C4%A9-T%C3%A0u-CSB-6007-%C4%91%C6%B0a-c%C3%A1c-thuy%E1%BB%81n-vi%C3%AAn-l%C3%AAn-t%C3%A0u.jpg'
        },
        {
          story_All: 'Tàu CSB 2012 cấp cứu ngư dân bị tai biến trên biển',
          id: 4,
          story: 'Tàu CSB 2012 cấp cứu ngư dân bị tai biến trên biển',
          img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cuu%20ho%20-%20cuu%20nan/Nam%202023/Vung%202/Ti%E1%BA%BFp-c%E1%BA%ADn-t%C3%A0u-c%C3%A1-c%C3%B3-ng%C6%B0%E1%BB%9Di-b%E1%BB%8B-n%E1%BA%A1n.jpg'
        }
      ]
    },
    {
      header: 'Hợp Tác Quốc Tế',

      name_All: 'Lực lượng Cảnh sát biển Việt Nam tuần tra liên hợp với Lực lượng Cảnh sát biển Trung Quốc',
      content_All:
        'Chiều 09/4, biên đội tàu CSB 8004 và CSB 8003 của Bộ Tư lệnh Vùng Cảnh sát biển 1 cùng Đoàn công tác đã rời cảng Đình Vũ, thành phố Hải Phòng lên đường thực hiện nhiệm vụ tuần tra liên hợp trên vùng biển lân cận đường phân định Vịnh Bắc Bộ cùng Lực lượng Cảnh sát biển Trung Quốc.',
      id: 2,
      name: 'Lực lượng Cảnh sát biển Việt Nam tuần tra liên hợp với Lực lượng Cảnh sát biển Trung Quốc',
      image: InternationalCooperation,
      content:
        'Chiều 09/4, biên đội tàu CSB 8004 và CSB 8003 của Bộ Tư lệnh Vùng Cảnh sát biển 1 cùng Đoàn công tác đã rời cảng Đình Vũ, thành phố Hải Phòng lên đường thực hiện nhiệm vụ tuần tra liên hợp trên vùng biển lân cận đường phân định Vịnh Bắc Bộ cùng Lực lượng Cảnh sát biển Trung Quốc.',
      RelatedNews: [
        {
          story_All:
            'Bộ Tư lệnh Cảnh sát biển tổng kết thực hiện nhiệm vụ đón và luyện tập chung với Lực lượng Bảo vệ bờ biển Nhật Bản',
          id: 1,
          story:
            'Bộ Tư lệnh Cảnh sát biển tổng kết thực hiện nhiệm vụ đón và luyện tập chung với Lực lượng Bảo vệ bờ biển Nhật Bản',
            img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Hop%20tac%20quoc%20te/Nam%202023/Thang%202/Luyen%20tap%20chung%20tren%20bien%20voi%20Nhat/Quang-canh-HN.jpg'

        },
        {
          story_All: 'Tăng cường phối hợp, hợp tác giữa Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản',
          id: 2,
          story: 'Tăng cường phối hợp, hợp tác giữa Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản',
          img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Hop%20tac%20quoc%20te/Nam%202023/Thang%202/Song%20phuong%20CSB%20Viet%20-%20Nhat/Quang-canh-buoi-tiep.jpg'
        },
        {
          story_All:
            'Thủ trưởng Bộ Tư lệnh Cảnh sát biển gặp mặt, giao nhiệm vụ cho cán bộ trước khi lên đường làm nhiệm vụ gìn giữ hòa bình Liên Hợp quốc',
          id: 3,
          story:
            'Thủ trưởng Bộ Tư lệnh Cảnh sát biển gặp mặt, giao nhiệm vụ cho cán bộ trước khi lên đường làm nhiệm vụ gìn giữ hòa bình Liên Hợp quốc',
            img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%202/BTL/QHQT/IMG_1448.jpg'

        },
        {
          story_All: 'Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản luyện tập chung trên biển',
          id: 4,
          story: 'Cảnh sát biển Việt Nam và Lực lượng Bảo vệ bờ biển Nhật Bản luyện tập chung trên biển',
          img:'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Hop%20tac%20quoc%20te/Nam%202023/Thang%202/Luyen%20tap%20chung%20tren%20bien%20voi%20Nhat/IMGP8098.jpg'
        }
      ]
    }
  ]

  const NewPost_Item_All_One = [
    {
      icon: MdSportsGymnastics,
      id: 1,
      title: 'Văn hóa - Thể thao',
      image:
        'https://canhsatbien.vn/upload/files/image/20230429/toc3a0n-ce1baa3nh-he1bb99i-nghe1bb8b--162606987.jpg?w=400',
      content_All:
        ' Ngày 28/4, Bộ Tư lệnh Vùng Cảnh sát biển 3 phối hợp với Đảng ủy phường Mỹ Xuân, thị xã Phú Mỹ, tỉnh Bà Riạ - Vũng Tàu tổ chức tuyên truyền biển, đảo; Luật Cảnh sát biển Việt Nam; Luật Phòng, chống ma túy cho 500 cán bộ, đảng viên, trưởng khu phố, công chức, viên chức, nhân dân trên địa bàn.',
      name_All: 'Bộ Tư lệnh Vùng Cảnh sát biển 3 đẩy mạnh tuyên truyền pháp luật cho người dân',
      content:
        'Chiều 13/4, Trung tâm Đào tạo và Bồi dưỡng nghiệp vụ Cảnh sát biển phối hợp với Thời báo Văn học Nghệ thuật/ Liên hiệp các Hội Văn học Nghệ thuật Việt Nam, Nhà Xuất bản Dân trí khai mạc Ngày Sách và Văn hóa đọc Việt Nam lần thứ hai năm 2023 với chủ đề “Sách: Nhận thức - Đổi mới - Sáng tạo”. Đại tá Nguyễn Đức Độ - Bí thư Đảng ủy, Chính ủy Trung tâm chủ trì buổi khai mạc.',
      name: 'Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2023',
      RelatedNews: [
        {
          story_All: 'Khuyến khích và phát triển văn hóa đọc tại đơn vị cơ sở',
          story: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 tham gia hội trại "Nối vòng tay lớn',
          id: 1,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Van%20hoa%20-%20van%20nghe/Nam%202023/Thang%204/CBCS-%C4%90o%C3%A0n-%C4%90%E1%BA%B7c-nhi%E1%BB%87m-PCTP-ma-t%C3%BAy-s%E1%BB%91-1-h%C6%B0%E1%BB%9Fng-%E1%BB%A9ng-Ng%C3%A0y-s%C3%A1ch-v%C3%A0-v%C4%83n-h%C3%B3a-%C4%91%E1%BB%8Dc.jpg'
        },
        {
          story_All: 'Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2023',
          story:
            'Đoàn Văn công Quân chủng Phòng không - Không quân biểu diễn phục vụ cán bộ, chiến sĩ Bộ Tư lệnh Vùng Cảnh sát biển 3',
          id: 2,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Van%20hoa%20-%20van%20nghe/Nam%202023/Thang%204/IMG_1681373790299_1681374526526.jpg'
        },
        {
          story_All: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 tham gia hội trại "Nối vòng tay lớn"',
          story:
            'Bộ Tư lệnh Cảnh sát biển tổ chức Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng Cảnh sát biển Việt Nam',
          id: 4,
          img: 'https://canhsatbien.vn/upload/files/1/Van%20hoa%20-%20the%20thao/Nam%202023/hoi-trai.jpg'
        },
        {
          story_All:
            'Đoàn Văn công Quân chủng Phòng không - Không quân biểu diễn phục vụ cán bộ, chiến sĩ Bộ Tư lệnh Vùng Cảnh sát biển 3',
          story: 'Thể lệ Cuộc vận động sáng tác văn học nghệ thuật về Lực lượng Cảnh sát biển Việt Nam',
          id: 3,
          img: 'https://canhsatbien.vn/upload/files/1/Van%20hoa%20-%20the%20thao/Nam%202023/M%E1%BB%99t-trong-c%C3%A1c-ti%E1%BA%BFt-m%E1%BB%A5c-%C4%91%E1%BA%B7c-s%E1%BA%AFc-c%E1%BB%A7a-%C4%91o%C3%A0n-t%E1%BA%A1i-%C4%91%C3%AAm-l%C6%B0u-di%E1%BB%87n-t%E1%BA%A1i-B%E1%BB%99-T%C6%B0-l%E1%BB%87nh-V%C3%B9ng-C%E1%BA%A3nh-s%C3%A1t-bi%E1%BB%83n-3.jpg'
        }
      ]
    },
    {
      icon: MdLocalPolice,
      id: 2,
      title: 'Công tác Cảnh sát biển',
      name_All: 'Hải đoàn 32 phối hợp tổ chức hành trình “Thanh niên Khánh Hòa vì biển, đảo quê hương”',
      image: 'https://canhsatbien.vn/upload/files/image/20230508/thu-truong-btl-vung-canh-sat-bien-3_-thu-truong-hai-doan-32-trao-qua-va-xe-dap-cho-cac-chau-hoc-sinh-ngheo-vuot-kho-132822153.jpg?w=400',
      content_All:'(Canhsatbien.vn) - Ngày 07/5, tại thị xã Ninh Hòa, tỉnh Khánh Hòa, Hải đoàn 32/BTL Vùng Cảnh sát biển 3 phối hợp với Tỉnh đoàn, Hội Sinh viên Việt Nam Khánh Hòa tổ chức hành trình “Thanh niên Khánh Hòa vì biển, đảo quê hương” năm 2023. Tham dự chương trình có đồng chí Bùi Quang Huy - Ủy viên dự khuyết Ban chấp hành Trung ương Đảng, Bí thư thứ nhất Ban Chấp hành Trung ương Đoàn; đồng chí Đinh Văn Thiệu - Tỉnh ủy viên,',
      content:
        'Chiều 25/4, tại Thái Bình, Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam và Ban Thường vụ Tỉnh ủy Thái Bình đã tổ chức hội nghị ký kết Chương trình phối hợp thực hiện công tác dân vận “Cảnh sát biển đồng hành với ngư dân”. Thái Bình là tỉnh thành thứ 22 Ban Thường vụ Đảng ủy Cảnh sát biển Việt Nam ký kết Chương trình phối hợp thực hiện.',
      name: 'Đảng ủy Cảnh sát biển và Tỉnh ủy Thái Bình ký kết chương trình Cảnh sát biển đồng hành với ngư dân',
      RelatedNews: [
        {
          story_All: 'Bộ Tư lệnh Vùng Cảnh sát biển 1 thăm, tặng quà Mẹ Việt Nam anh hùng',
          story: 'Bộ Tư lệnh Vùng Cảnh sát biển 3 tổ chức Hội thi cán bộ giảng dạy chính trị năm 2023',
          id: 1,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%204/Vung%201/%C4%90%E1%BA%A1i-t%C3%A1-Tr%E1%BA%A7n-V%C4%83n-H%E1%BA%ADu-th%C4%83m-h%E1%BB%8Fi%2C-%C4%91%E1%BB%99ng-vi%C3%AAn-M%E1%BA%B9-VNAH-Tr%E1%BA%A7n-Th%E1%BB%8B-B%E1%BB%87.jpg'
        },
        {
          story_All: 'Luyện tập các phương án sẵn sàng chiến đấu bảo vệ cơ quan Bộ Tư lệnh Cảnh sát biển',
          story: 'Không ngừng củng cố kiến thức, chuyên môn kỹ thuật cho đội ngũ QNCN, CNVQP',
          id: 2,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%204/BTL/Luyen%20tap%20SSCD/Thuong-ta-Nguyen-Ngoc-Tung.jpg'
        },
        {
          story_All: 'Tập huấn bồi dưỡng Cuộc thi chính luận về bảo vệ nền tảng tư tưởng của Đảng',
          story: 'Sôi nổi Cuộc thi “Em yêu biển, đảo quê hương” tại huyện Núi Thành, tỉnh Quảng Nam',
          id: 3,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%204/BTL/quang-canh-tap-huan.jpg'
        },
        {
          story_All: 'Bảo hiểm xã hội Bộ Quốc phòng làm việc với Bộ Tư lệnh Cảnh sát biển',
          story: 'Tuổi trẻ Bộ Tư lệnh Vùng Cảnh sát biển 3 hưởng ứng Ngày Sách và văn hóa đọc Việt Nam năm 2023',
          id: 4,
          img: 'https://canhsatbien.vn/upload/files/1/Hoat%20dong%20CSB/Cong%20tac%20CSB/Nam%202023/Thang%205/BTL/Quang-canh-BHXH.jpg'
        }
      ]
    }
  ]

  const List_weather_all = [
    { id: 1, title: 'Nam Vịnh Bắc Bộ', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 2, title: 'Quảng Trị đến Quảng Ngãi', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' },
    { id: 3, title: 'Bình Định đến Ninh Thuận', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 4, title: 'Bình Thuận đến Cà Mau', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' },
    { id: 5, title: 'Cà Mau đến Kiên Giang', img: 'https://baohaiquanvietnam.vn/storage/images/muarao_vadong.gif' },
    { id: 6, title: 'Bắc Biển Đông', img: 'https://baohaiquanvietnam.vn/storage/images/Co_luc_co_Mua.gif' }
  ]

  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose((pre) => !pre)
  }

  const Video_media =
    'https://canhsatbien.vn:443/upload/files/video/20221122/trailer-csb-va-nhung-nguoi-ban-lan-thu-nhat-074813552.mp4'

  // const media_all = {
  //   title: 'Chương trình giao lưu "Cảnh sát biển Việt Nam và những người bạn" lần thứ nhất (Từ ngày 8 đến 11/12/2022)',
  //   video: Video_media
  // }

  //   const Video_add = {
  //     title: 'Chương trình giao lưu "Cảnh sát biển Việt Nam và những người bạn" lần thứ nhất (Từ ngày 8 đến 11/12/2022)',
  //     video: Video_media
  //   }

  //   const imgbg={
  //     title:
  //     'Chương trình giao lưu "Cảnh sát biển Việt Nam và những người bạn" lần thứ nhất (Từ ngày 8 đến 11/12/2022)',
  //   img: 'https://file3.qdnd.vn/data/images/0/2021/01/28/thanhhuong/cover%20canh%20sat%20bien%20vn.jpg'
  // }

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

  const handle_New = (Conten_all: any) => setDataNews(Conten_all)

  console.log(video_defaule.content.video)

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
          <div className='w-[95%] m-auto flex justify-start h-[100%] max-[500px]:justify-end'>
            {contentAll.map((item, index) => (
              <div
                className={classNames(
                  `flex items-center px-3 border-b-[2px] hover:border-[#DA251C] last:ml-[20px] max-[500px]:border-none	  hover:duration-700 ${
                    item.Conten_all[index].id === dataNews.id ? 'border-[#DA251C]' : 'border-[#F6F6F6]'
                  }`
                )}
                onClick={() => handle_New(item)}
              >
                {/* {item.img && (
                  <div className='w-[16px] h-[21px] max-[500px]:hidden'>
                    <img className='w-full h-full' src={item.img} alt='' />
                  </div>
                )} */}
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
          </div>
        </div>
      </div>

      {/* phần thân */}
      <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl max-[1100px]:flex-col max-[850px]:flex-col  '>
        <div className='w-[72%] max-[1300px]:w-[65%] flex justify-between max-[1300px]:flex-col max-[850px]:w-[100%] max-[1100px]:w-[100%] overflow-y-auto'>
          {/* <Box_Call /> */}
          <div className='w-full max-[1300px]:w-full'>
            <div className='w-full flex justify-between max-[1300px]:flex-col '>
              <div className='w-[71%] max-[1300px]:w-[100%] border-r-[1px] max-[850px]:border-none	max-[1100px]:border-none '>
                <div className='w-[97%]'>
                  <Posts />
                  <div className='w-full'>
                    <List_item_all_new />
                  </div>
                  {/* <div className='mt-4'>
                    {ShortMessageItem.map((item) => (
                      <ShortMessage
                        classItiemAll={'line-clamp-1'}
                        classItiem={
                          "text-[15px] before:content-['>'] before:mr-2 before:text-red-500 flex cursor-pointer hover:text-[#191970]"
                        }
                        conTentShortMessage={item.title}
                      />
                    ))}
                  </div> */}
                </div>
              </div>

              <div className='w-[27%]  scrollbar-thumb-slate-300	scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  overflow-y-auto	max-[1300px]:w-[100%] max-[1300px]:pt-8'>
                <div className=' h-[22vh] max-[1300px]:h-[100%]'>
                  {dataNews.Conten_all.map((item) => (
                    <ShortMessage
                      classItiemAll={'text-[15px] text-black font-bold hover:text-[#191970]'}
                      classItiem={
                        "text-[15px] text-[#000] before:content-['>'] before:mr-2 before:text-red-500 flex pb-[17px] pt-[23px] border-b-[1px] first:pt-0 last:border-none cursor-pointer	 "
                      }
                      conTentShortMessage={item.content}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full m-auto mt-5 shadow-xl'>
              <img className='w-full ' src={Grid_bg} alt='' />
            </div>
            {/* <div className='w-full m-auto max-w-screen-2xl '>
              <List_leaDer />
            </div> */}
            <div className='w-full m-auto max-w-screen-2xl justify-between flex  max-[1160px]:flex-col'>
              <div className=' w-full flex flex-col max-[1160px]:w-[100%] max-[850px]:flex-col first:pb-4 '>
                {NewPost_Item_All.map((item) => (
                  <NewPost_Item
                    icon_item={<item.icon />}
                    class_Custom_layout={'first:pb-7'}
                    class_NewPost_Item={'w-[100%]  max-[850px]:w-[100%] cursor-pointer px-4 py-2 pb-4 border-[1px] mt-6 border-slate-200	'}
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
            <div className='w-full m-auto max-w-screen-2xl'>
              <div className='w-full'>
                <div className='flex-col max-[850px]:flex-col'>
                  {policyDevelopmentAll.map((item) => (
                    <div className='w-full max-[850px]:w-[100%] px-4 py-2 pb-4 border-[1px] mt-6 border-slate-200'>
                      <PolicyDevelopment
                        class_NewPost_Item={'w-[47%]  max-[850px]:w-[100%] cursor-pointer	 '}
                        itemAll_id={item.id}
                        itemAll_RelatedNews={item.RelatedNews}
                        itemAll_content={item.content}
                        itemAll_image={item.image}
                        itemAll_Name={item.name}
                        itemAll_Name_All={item.name_All}
                        itemAll_content_All={item.content_All}
                        header={item.header}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full m-auto flex-col justify-between max-w-screen-2xl max-[850px]:flex-col'>
              

              {NewPost_Item_All_One.map((item) => (
                <NewPost_Item
                  icon_item={<item.icon />}
                  class_NewPost_Item={'w-full  max-[850px]:w-[100%] cursor-pointer px-4 py-2 pb-4 border-[1px] border-slate-200 '}
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
          </div>
        </div>

        <div className='w-[26%] border-slate-400 max-[1300px]:w-[32%] max-[850px]:w-[100%] max-[1100px]:w-[100%]'>
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
                    <video
                      src={video_defaule.content.video}
                      className=' w-full object-cover h-[13rem]'
                      controls
                    ></video>
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
              {/* <div className='w-full text-center text-[16px] font-bold hover:text-[#191970] py-2'>
                <img className='w-[95%] m-auto' src={BG_IMG} alt='' />
                <img src={BG_IMG_THREE} alt='' className='w-[95%] m-auto ' />
                <img
                  src='https://tranvietmb.com/wp-content/uploads/2021/09/bao-hiem-lien-ket-dau-tu-920x425.jpg'
                  alt=''
                  className='w-[95%] m-auto h-[122px] max-[1100px]:h-[220px]'
                />
                <img
                  src='https://tttctt.1cdn.vn/thumbs/600x315/2023/03/06/kv-biz-mbbank.jpg'
                  alt=''
                  className='w-[95%] m-auto h-[122px] max-[1100px]:h-[220px]'
                />
                <img
                  src='https://viettelstore24h.com/wp-content/uploads/2021/12/banner.jpg'
                  alt=''
                  className='w-[95%] m-auto h-[122px] max-[1100px]:h-[220px]'
                />
                <img
                  src='https://ib.vib.com.vn/banners/Promotion/20221121100604159_vna.jpg'
                  className='w-[95%] m-auto h-[122px] max-[1100px]:h-[220px]'
                  alt=''
                />
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_zgfi7thzSz_0xcjtJNIbgG6hkqeBeOSow&usqp=CAU'
                  alt=''
                  className='w-[95%] m-auto h-[122px] max-[1100px]:h-[220px]'
                />
                <img
                  src='data:image/png;base64,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'
                  alt=''
                  className='w-[95%] m-auto h-[122px] max-[1100px]:h-[220px]'
                />
              </div> */}
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
        </div>
      </div>
      <div className='w-[80%] max-w-screen-2xl m-auto mt-10'>
        <Slice_cart_news_coppy_image />
      </div>
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

{
  /* <div className='w-full m-auto max-w-screen-2xl mt-5'>
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
    </div> */
}
{
  /* <div className='w-[80%] m-auto max-w-screen-2xl '>
    <List_leaDer />
  </div> */
}

{
  /* <div className='w-[80%] m-auto mt-7 max-w-screen-2xl'>
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
              </div> */
}
{
  /* <div className='w-[80%] m-auto flex justify-between mt-7 max-w-screen-2xl max-[850px]:flex-col'>
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
        </div> */
}
{
  /* <img src={BG_IMG_THREE} alt='' className='w-[95%] m-auto py-2' /> */
}

{
  /* <img src={BG_IMG_TWO} alt='' className='w-[95%] m-auto' /> */
}
{
  /* <img src={BG_IMG_VietTell} alt='' className='w-[95%] m-auto' /> */
}
{
  /* <div className='hidden max-[1300px]:block '>
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
        </div> */
}
