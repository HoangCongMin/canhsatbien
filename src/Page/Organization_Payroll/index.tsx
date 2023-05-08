import React from 'react'
import Chart_All_Item from '../../component/Chart_All_Item'
import Chart_test_Item from'../../component/Chart_test_Item'

export default function Organization_Payroll() {
  return (
    <div className='w-full'>
      <div className='w-[80%] m-auto max-w-screen-2xl'>
        {/* <Chart_All_Item /> */}
        <div className='w-full bg-[#F6F6F6] py-3 mt-[30px] px-2 flex items-center '>
                <div className='bg-[#DA251C] h-7 w-1'></div>
                <div className='font-bold ml-2 text-[17px] uppercase mt-[2px] text-[#031739] hover:text-[#191970] '>
                  Tổ chức - Biên chế
                </div>
              </div>
        <div className='mt-10'>

        <Chart_test_Item/>
        </div>
        <div className='my-10'>
          <p className='text-[12px] font-[Arial] text-[#333] my-3'>
            <span>
              Theo đó, hệ thống tổ chức của Cảnh sát biển Việt Nam gồm: Bộ Tư lệnh Cảnh sát biển Việt Nam; các đơn vị
              trực thuộc Bộ Tư lệnh Cảnh sát biển Việt Nam; Các cơ quan, đơn vị đầu mối và cấp cơ sở trực thuộc các đơn
              vị trên. Trong đó, Cơ quan Bộ Tư lệnh Cảnh sát biển Việt Nam gồm Bộ Tham mưu, Cục Chính trị, Cục Nghiệp vụ
              và Pháp luật, Cục Hậu Cần, Cục Kỹ thuật, các cơ quan trực thuộc Tư lệnh Cảnh sát biển Việt Nam.
            </span>
          </p>
          <p className='text-[12px] font-[Arial] text-[#333] my-3'>
            <span>
              Chức danh pháp lý của Cảnh sát biển Việt Nam là Cảnh sát viên, Trinh sát viên và Cán bộ điều tra, có nhiệm
              vụ phòng ngừa, ngăn chặn, phát hiện và đấu tranh phòng, chống tội phạm, vi phạm pháp luật. Cảnh sát viên,
              Trinh sát viên Cảnh sát biển gồm: cảnh sát viên, Trinh sát viên sơ cấp; Cảnh sát viên, Trinh sát trung
              cấp; Cảnh sát viên, Trinh sát viên cao cấp.
            </span>
          </p>
          <p className='text-[12px] font-[Arial] text-[#333] my-3'>
            <span>
              Bộ Quốc phòng quy định điều kiện, tiêu chuẩn, trình tự, thủ tục bổ nhiệm, miễn nhiệm, cách chức đối với
              Cảnh sát viên, Trinh sát viên của Cảnh sát biển Việt Nam. Tư lệnh Cảnh sát biển Việt Nam quyết định bổ
              nhiệm, miễn nhiệm, cách chức Cảnh sát viên, Trinh sát viên; cấp, thu hồi và quy định việc quản lý, sử dụng
              Giấy chứng nhận Cảnh sát viên, Trinh sát viên của Cảnh sát biển Việt Nam.
            </span>
          </p>
          <p className='text-[12px] font-[Arial] text-[#333] my-3'>
            <span>
              Cán bộ điều tra thuộc Cảnh sát biển Việt Nam khi được phân công điều tra vụ án hình sự theo quy định của
              Bộ luật Tố tụng hình sự, Luật Tổ chức cơ quan điều tra hình sự phải chịu trách nhiệm trước pháp luật và
              Thủ trưởng đã ra quyết định phân công về việc thực hiện nhiệm vụ, quyền hạn của mình.
            </span>
          </p>
          <p className='text-[12px] font-[Arial] text-[#333] my-3'>
            <span>
              Cán bộ, chiến sỹ Cảnh sát biển Việt Nam được hưởng lương theo ngạch, bậc, chức vụ, chế độ trợ cấp; được
              hưởng chế độ phụ cấp thâm niên vượt khung, phụ cấp kiêm nhiệm chức danh lãnh đạo, phụ cấp khu vực, phụ cấp
              đặc biệt, phụ cấp thu hút, phụ cấp lưu động, phụ cấp độc hại nguy hiểm, phụ cấp thâm niên nghề, phụ cấp
              trách nhiệm theo nghề, phụ cấp trách nhiệm công việc, phụ cấp phục vụ quốc phòng-an ninh, phụ cấp công tác
              lâu năm ở trên tàu, biển, đảo, phụ cấp ngày đi biển, phụ cấp đặc thù đi biển... phù hợp với khu vực địa
              bàn vùng biển, đảo công tác, yêu cầu nhiệm vụ và chế độ, chính sách khác như cán bộ, chiến sỹ lực lượng vũ
              trang và cán bộ, công chức, viên chức có cùng điều kiện, môi trường làm việc, khu vực địa bàn, biển đảo
              công tác theo quy định của pháp luật.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
