import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

import { FormatImage } from '../../utils/util.type'
import {Date_Time} from'../../utils/util.type';

const ListDocument = ({listItems}:any) => {
  return (
    <>
      <table className="text-[12px] lg:text-[14px] w-full">
        <thead className="text-center">
          <tr>
            <th className="border-[1px] border-[#ddd] p-[7px]">STT</th>
            <th className="border-[1px] border-[#ddd] p-[7px] min-w-[100px]">Số/Ký hiệu</th>
            <th className="border-[1px] border-[#ddd] p-[7px]">Ngày ban hành</th>
            <th className="border-[1px] border-[#ddd] p-[7px]">Trích yếu</th>
          </tr>
        </thead>
        <tbody>
          {listItems?.listItem.map((item: any,i:any) => (
            <tr>
              <td className="border-[1px] border-[#ddd] p-[7px] text-center">{i+1}</td>
              <td className="border-[1px] border-[#ddd] p-[7px]">Số ký hiệu</td>
              <td className="border-[1px] border-[#ddd] p-[7px] text-center">{item.created}</td>
              <td className="border-[1px] border-[#ddd] p-[7px]">
                <Link key={i} to={`/${listItems?.name}/${item.id}/${item.catID}`}>
                    <h3 className='text-[#337ab7] font-bold'>{item.title}</h3>
                    {/* <p className='text-[#1E1E1E] text-[14px] line-clamp-3 mt-4'>{item.introText}</p> */}
                </Link>
                <div className='mt-[10px]'>
                  <Link to={`/${listItems?.name}/${item.id}/${item.catID}`} className='mr-[5px] border-[1px] border-[#ddd] text-[12px] p-[3px] inline-block rounded-[4px] hover:text-[#b40000]'>Chi tiết <MdOutlineKeyboardDoubleArrowRight className='inline-block align-middle ml-[3px] text-[#b40000]'/></Link>
                  <div className="cursor-pointer border-[1px] border-[#ddd] text-[12px] p-[3px] inline-block rounded-[4px] hover:text-[#b40000]">Tải về <MdOutlineKeyboardDoubleArrowRight className='inline-block align-middle ml-[3px] text-[#b40000]'/></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListDocument;