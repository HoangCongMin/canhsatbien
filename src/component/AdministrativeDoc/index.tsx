import { useForm } from 'react-hook-form'

import ListDocument from "./ListDocument";

const AdministrativeDocuments = ({listItems}) => {
  const agencyData = ["Tất cả", "BTL Cảnh sát biển", "Bộ Công An", "Bộ Công Thương", "Bộ Giao thông vận tải", "Bộ Giáo dục và Đào tạo", "Bộ Kế hoạch và Đầu tư", "Bộ Lao động - Thương binh và Xã hội", "Bộ Nông nghiệp và Phát triển nông thôn", "Bộ Nội vụ", "Bộ Quốc phòng", "Bộ Thông tin và Truyền thông", "Bộ Tài chính", "Bộ Tài nguyên & Môi trường", "Bộ Tư pháp", "Bộ Y tế", "Chính phủ", "Quốc hội", "Thủ tướng Chính phủ", "Toà án nhân dân tối cao", "Uỷ ban Thường vụ Quốc hội", "Viện kiểm sát nhân dân tối cao"];

  const typeData = ["Tất cả", "Chỉ thị", "Hiến pháp", "Hướng dẫn", "Luật - Pháp lệnh", "Nghị định", "Quyết định", "Sắc lệnh - Sắc luật", "Thông tư", "Thông tư liên tịch", "Văn bản hợp nhất"];
  const fieldData = ["Tất cả", "Nghĩa vụ quân sự", "Dân quân tự vệ", "Dự bị động viên", "Chế độ - chính sách", "Giáo dục quốc phòng", "Quốc phòng - an ninh", "VBPL khác"];

  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  const onSubmit =  (data: any) => {
    console.log(data);
  }

  return (
    <>
      <form className="border-[1px] border-[#c8c8c8] py-[10px] pl-[10px] pr-[30px] min-h-[190px] mb-[20px] mt-6 text-[12px] lg:text-[14px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full md:w-6/12 px-[15px] flex flex-wrap justify-between items-center mb-[15px]">
            <label className="font-bold">Số ký hiệu</label>
            <input type="text" title="Số ký hiệu" placeholder="Số ký hiệu..." className="w-[60%] border-[1px] border-[#ccc] px-[12px] py-[6px] rounded-[4px] text-[14px]"
              {...register('symbols')}
            />
          </div>

          <div className="w-full md:w-6/12 px-[15px] flex flex-wrap justify-between items-center mb-[15px]">
            <label className="font-bold">Cơ quan ban hành</label>
            <select
              className="w-[60%] border-[1px] border-[#ccc] px-[12px] py-[6px] rounded-[4px] text-[14px]"
              {...register("Agency")}
            >
              {agencyData.map((item, index) => (
                <option value={index} key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-6/12 px-[15px] flex flex-wrap justify-between items-center mb-[15px]">
            <label className="font-bold">Trích yếu</label>
            <input type="text" title="Trích yếu" placeholder="Trích yếu..." className="w-[60%] border-[1px] border-[#ccc] px-[12px] py-[6px] rounded-[4px] text-[14px]"
              {...register('abstract')}
            />
          </div>

          <div className="w-full md:w-6/12 px-[15px] flex flex-wrap justify-between items-center mb-[15px]">
            <label className="font-bold">Loại văn bản</label>
            <select value="1"
              className="w-[60%] border-[1px] border-[#ccc] px-[12px] py-[6px] rounded-[4px] text-[14px]"
              {...register("Type")}
            >
              {typeData.map((item, index) =>(
                <option value={index} key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-6/12 px-[15px] flex flex-wrap justify-between items-center mb-[15px]">
            <label className="font-bold">Lĩnh vực</label>
            <select value="1"
              className="w-[60%] border-[1px] border-[#ccc] px-[12px] py-[6px] rounded-[4px] text-[14px]"
              {...register("Field")}
            >
              {fieldData.map((item, index) =>(
                <option value={index} key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="w-full px-[15px] text-center">
            <input type="submit" value="Tìm kiếm" className="p-[10px] bg-[#337ab7] border-[#337ab7] text-white rounded-[4px] text-[14px] px-[12px] py-[6px] cursor-pointer hover:bg-[#286090] hover:border-[#204d74]"/>
          </div>
        </div>
      </form>
      <ListDocument listItems={listItems}/>
    </>
  );
}

export default AdministrativeDocuments;