import { useState } from "react"
import { useNavigate, createSearchParams } from 'react-router-dom'

interface param_type {
  queryParam: param_type_INTER
}

interface param_type_INTER {
  categoryId?: string
  p?: string
  m?: string
}



export default function Sort({ queryParam }: param_type) {
  const navigate = useNavigate()


  const [data_Item, setData_Item] = useState({ id: 0, title: 'Tất cả' })

  const data = [{ id: 0, title: 'Tất cả' }, { id: 4, title: 'Tin tức - sự kiện' }, { id: 41, title: 'Phim truyền thống' }, { id: 42, title: 'Phim tài liệu' }]




  const handle_Change = (e: any) => (
    navigate({
      pathname: '/media/video',
      search: createSearchParams({ ...queryParam, categoryId: e.target.value }).toString()
    })
  )




  return (
    <div className="text-[15px]    ">
      <div className="bg-slate-300 rounded px-2 py-1">

      <select className="bg-slate-300 rounded" onChange={(e) => handle_Change(e)} value={data_Item.id}>
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            
            {item.title}
          </option>
        ))}
      </select>
      </div>
    </div>
  )
}