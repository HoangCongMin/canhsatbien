import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

import {Date_Time, FormatImage} from'../../utils/util.type';

const ListDocument = ({filterItem, PortalItem, index}:any) => {
  // console.log(dataAdministrativeDocument);
  return (
    <tr>
      <td className="border-[1px] border-[#ddd] p-[7px] text-center">{index+1}</td>
      <td className="border-[1px] border-[#ddd] p-[7px]">{filterItem.extraFields.soKyHieu}</td>
      <td className="border-[1px] border-[#ddd] p-[7px] text-center lg:min-w-[130px]">{Date_Time(filterItem.extraFields.ngayBanHanh, true)}</td>
      <td className="border-[1px] border-[#ddd] p-[7px]">
        <Link to={`/${PortalItem?.name}/${filterItem.id}/17`}>
            <h3 className='text-[#337ab7] font-bold'>{filterItem.extraFields.trichYeu}</h3>
        </Link>
        <div className='mt-[10px]'>
          <Link to={`/${PortalItem?.name}/${filterItem.id}/17`} className='mr-[5px] border-[1px] border-[#ddd] text-[12px] p-[3px] inline-block rounded-[4px] hover:text-[#b40000]'>Chi tiết <MdOutlineKeyboardDoubleArrowRight className='inline-block align-middle ml-[3px] text-[#b40000]'/></Link>
          <Link to={FormatImage(filterItem.fileUrl)} target='_blank' className="cursor-pointer border-[1px] border-[#ddd] text-[12px] p-[3px] inline-block rounded-[4px] hover:text-[#b40000]">Tải về <MdOutlineKeyboardDoubleArrowRight className='inline-block align-middle ml-[3px] text-[#b40000]'/></Link>
        </div>
      </td>
    </tr>
  );
}

export default ListDocument;