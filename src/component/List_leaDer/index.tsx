import React from 'react'
import Profile_ListDer from '../Profile_ListDer'
import Avatar_leader_one from '../../assets/242396159_193273982877333_3202117514279589189_n_1.jpeg'
import Avatar_leader_two from '../../assets/buiquocoai-16337502609381071636505.jpg'
import Avatar_leader_three from '../../assets/c03c2cb585c54c9b15d4-7213-1633094961.jpg'
import Avatar_leader_four from '../../assets/Thượng úy Nguyễn Thế Duyệt- TT tàu CSB 2008.jpg'

export interface List_user_leader_All {
  id: number
  avatar: string
  position: string
  name: string
}
export default function List_leaDer() {
  const List_Item_All: List_user_leader_All[] = [
    { id: 1, avatar: Avatar_leader_one, position: 'lãnh đạo', name: 'Lê Minh Khái' },
    { id: 2, avatar: Avatar_leader_two, position: 'sở trưởng', name: 'Lê Văn Thành' },
    { id: 3, avatar: Avatar_leader_three, position: 'bộ trưởng', name: 'Trần Hồng Hà' },
    { id: 4, avatar: Avatar_leader_four, position: 'cán bộ', name: 'Trần Lưu Quang' }
  ]
  return (
    <div className='  border-stale-300 mt-2 mb-[4rem] max-[1300px]:border-none'>
      <div className='flex justify-center pt-[1.5rem] pb-[1.5rem] '>
        <div className='text-[#182940] text-[18px] uppercase'>Trang tin điện tử của các Cảnh sát biển</div>
      </div>
      <div className='flex justify-between max-[1300px]:grid max-[1300px]:grid-cols-2 gap-4 max-[1300px]:grid-rows-2 max-[1150px]:grid max-[1150px]:grid-cols-1 max-[1150px]:gap-4 max-[1150px]:grid-rows-1'>
        {List_Item_All.map((item: List_user_leader_All) => (
          <Profile_ListDer
            user_leader_id={item.id}
            use_position={item.position}
            user_name={item.name}
            user_leader_image={item.avatar}
          />
        ))}
      </div>
    </div>
  )
}
