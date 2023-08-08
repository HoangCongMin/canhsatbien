
import { useState } from "react";
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Content_Same from '../../component/Content_Same'
import Share from '../../component/Share'
import { Date_Time } from '../../utils/util.type';

const DetailDocument = ({prfile_all}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const extraFields = JSON.parse(prfile_all?.data.extraFields);
  function handle_String(data: string) {
    const newStr = data.replace(/upload/g, 'https://canhsatbien.vn//upload')
    const index = newStr.indexOf('/https://canhsatbien.vn//upload')

    const style = "className='m-auto'"
    const ma = newStr
    const result = ma.replaceAll('src="/', 'src="')
    const style_result = result.replace(/img/g, "img class='m-auto' ")
    const result_item=style_result.replace(/em/g,"p class='text-[19px] text-center'")
    return result_item
  }
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="mt-6">
      <ul className="border-b-[1px] border-[#ddd] text-[10px] min-[480px]:text-[12px] lg:text-[14px]">
        <li className={`hover:bg-[#eee] inline-block cursor-pointer px-[15px] py-[10px] border-[1px] border-[#ddd] rounded-t-[4px] mr-[2px] mb-[-1px] bg-white ${activeTab === "tab1" ? "border-b-[transparent]" : ""}`}
          onClick={handleTab1}
        >
          <strong>Nội dung văn bản</strong>
        </li>
        <li className={`hover:bg-[#eee] inline-block cursor-pointer px-[15px] py-[10px] border-[1px] border-[#ddd] rounded-t-[4px] mb-[-1px] bg-white ${activeTab === "tab2" ? "border-b-[transparent]" : ""}`}
          onClick={handleTab2}
        >
          <strong>Thuộc tính văn bản</strong>
        </li>
      </ul>
      <div className="border-t-solid border-[1px] border-[#ddd] border-dotted border-t-0 p-[15px]">
        {activeTab === "tab1" ?
          <div>
            <div className='w-[100%] m-auto mb-7 flex'>
              <div className='w-full'>
                <h1 className='font-bold text-[20px] my-[5px] hover:text-[#0066bc] cursor-pointer text-justify border-b-[2px] text-[#b40000] border-[#f16138] pb-[10px]'>{prfile_all?.data.title}</h1>
                <strong className='font-[NotoSerif] inline-block text-[19px] text-justify	mb-[10px] mt-[30px]'>{prfile_all?.data.introText}</strong>
                <p className='text-[14px] text-[#3B4E68]'>
                  <div
                    className='font-[NotoSerif] text-[19px] text-justify'
                    dangerouslySetInnerHTML={{
                      __html: prfile_all?.data.fullText &&  handle_String(prfile_all?.data.fullText)
                    }}
                  />
                </p>
              </div>
            </div>
            <Link to={`/`} className='mr-[5px] border-[1px] border-[#ddd] text-[12px] p-[3px] inline-block rounded-[4px] hover:text-[#b40000]'>
              Tải tệp đính kèm <MdOutlineKeyboardDoubleArrowRight className='inline-block align-middle ml-[3px] text-[#b40000]'/>
            </Link>
          </div>
        :
          <div>
            <table className="w-full text-[10px] 2xs:text-[12px] lg:text-[14px]">
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Trích yếu</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]"><strong>{extraFields.TrichYeu}</strong></td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Số/ký hiệu</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{extraFields.SoKyHieu}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Ngày ban hành</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{Date_Time(extraFields.NgayBanHanh, true)}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Ngày có hiệu lực</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{Date_Time(extraFields.NgayCoHieuLuc, true)}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Ngày hết hiệu lực</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{Date_Time(extraFields.NgayHetHieuLuc, true)}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Cơ quan ban hành</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{extraFields.CoQuanBanHanh}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Loại văn bản</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{extraFields.created}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Người ký</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{extraFields.NguoiKy}</td>
              </tr>
              <tr>
                <th className="text-left border-[1px] border-[#ddd] p-[8px]"><strong>Thay thế văn bản</strong></th>
                <td className="border-[1px] border-[#ddd] p-[8px]">{extraFields.ThayTheVanBan}</td>
              </tr>
            </table>
          </div>
        }
      </div>
      <p className="mt-[20px]"><strong>Các văn bản khác</strong></p>
    </div>
  );
}

export default DetailDocument;