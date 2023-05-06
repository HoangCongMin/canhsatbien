import React from 'react'


const Image_item_all = [
    {
      img: 'https://canhsatbien.vn/upload/files/image/20230419/kie1bb83m20tra20hc3a0ng20hc3b3a20vi20phe1baa1m-143409562.jpg?h=120',
      content: 'Cảnh sát biển bắt giữ tàu vận chuyển lượng lớn dầu D.O'
    },
    {
      img: 'https://canhsatbien.vn:443/upload/files/image/20230403/tang-qua-180746147.jpg?h=120',
      content: 'Phó Chủ tịch Quốc hội Trần Quang Phương thăm và làm'
    },
    {
      img: 'https://canhsatbien.vn/upload/files/image/20230223/chinh-uy-phat-to-roi-103634841.jpg?h=120',
      content: 'Chính ủy Cảnh sát biển thăm và làm việc tại đảo Thổ Châu'
    }
  ]




interface item_All_new{
    img:string
    content:string
}
export default function List_item_all_new() {
  return (
    <div className='w-full flex justify-between mt-2 cursor-pointer'>
        {
            Image_item_all.map((item)=>(
                <div className='w-[30%]  shadow-sm	'>
                    <div className='overflow-hidden cursor-pointer relative group mt-2'>

                    <img className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50' src={item.img} alt="" />
                    </div>
                    <p className='text-[14px] font-bold	 my-2 hover:text-[#191970]'>{item.content}</p>
                </div>
            ))
        }
    </div>
  )
}
