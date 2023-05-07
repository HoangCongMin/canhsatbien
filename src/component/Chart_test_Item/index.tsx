import React from 'react'
import './Chart_test_Item.scss'
import { Link } from 'react-router-dom'

export default function Chart_test_Item() {
  return (
    <div className='content w-full  h-[74rem] max-[767px]:h-[320rem]  mt-10 '>
      <figure className='org-chart cf'>
        <ul className='administration'>
          <li>
            <ul className='director'>
              <li>
                <Link to={'/contact'}>
                  <span className='line-clamp-1 text-[17px]'>Bộ Tư lệnh Cảnh sát biển Việt Nam</span>
                </Link>
                <ul className='subdirector'>
                  <li className='invisible'>
                    <Link to={'/contact'}>
                      <span>Assistante Director</span>
                    </Link>
                  </li>
                </ul>
                <ul className='departments cf'>
                  <li className='invisible'>
                    <Link to={'/contact'}>
                      <span>Administration</span>
                    </Link>
                  </li>

                  <li className='department dep-a'>
                    <Link to={'/contact'}>
                      <span>Bộ Tư lệnh Vùng Cảnh sát biển 1</span>
                    </Link>
                    <ul className='sections'>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Tham mưu</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Chính trị</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Hậu cần</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Kỹ thuật</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Trinh sát</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Quan hệ quốc tế</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Tài chính</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>Trung tâm HH Cứu nạn & Bảo vệ môi trường biển 1</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đoàn 112/Hải đoàn 11</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đội 102</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>
                            Tàu Cảnh sát biển 2008 - 4036 - 6002 - 8003 - 8004 - 9004
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='department dep-a'>
                    <Link to={'/contact'}>
                      <span>Bộ Tư lệnh Vùng Cảnh sát biển 2</span>
                    </Link>
                    <ul className='sections'>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Tham mưu</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Chính trị</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Hậu cần</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Kỹ thuật</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Trinh sát</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Quan hệ quốc tế</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Tài chính</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>Trung tâm HH Cứu nạn & Bảo vệ môi trường biển 1</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đoàn 112/Hải đoàn 11</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đội 102</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>
                            Tàu Cảnh sát biển 2008 - 4036 - 6002 - 8003 - 8004 - 9004
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='department dep-a'>
                    <Link to={'/contact'}>
                      <span>Bộ Tư lệnh Vùng Cảnh sát biển 3</span>
                    </Link>
                    <ul className='sections'>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Tham mưu</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Chính trị</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Hậu cần</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Kỹ thuật</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Trinh sát</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Quan hệ quốc tế</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Tài chính</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>Trung tâm HH Cứu nạn & Bảo vệ môi trường biển 1</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đoàn 112/Hải đoàn 11</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đội 102</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>
                            Tàu Cảnh sát biển 2008 - 4036 - 6002 - 8003 - 8004 - 9004
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='department dep-a'>
                    <Link to={'/contact'}>
                      <span>Bộ Tư lệnh Vùng Cảnh sát biển 4</span>
                    </Link>
                    <ul className='sections'>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Tham mưu</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Chính trị</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Hậu cần</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Kỹ thuật</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Trinh sát</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Quan hệ quốc tế</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Tài chính</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>Trung tâm HH Cứu nạn & Bảo vệ môi trường biển 1</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đoàn 112/Hải đoàn 11</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đội 102</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>
                            Tàu Cảnh sát biển 2008 - 4036 - 6002 - 8003 - 8004 - 9004
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='department dep-a'>
                    <Link to={'/contact'}>
                      <span>Bộ Tư lệnh Vùng Cảnh sát biển 5</span>
                    </Link>
                    <ul className='sections'>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Tham mưu</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Chính trị</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Hậu cần</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Kỹ thuật</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Phòng Trinh sát</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Quan hệ quốc tế</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Ban Tài chính</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>Trung tâm HH Cứu nạn & Bảo vệ môi trường biển 1</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đoàn 112/Hải đoàn 11</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span>Hải đội 102</span>
                        </Link>
                      </li>
                      <li className='section'>
                        <Link to={'/contact'}>
                          <span className='line-clamp-1'>
                            Tàu Cảnh sát biển 2008 - 4036 - 6002 - 8003 - 8004 - 9004
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </figure>
    </div>
  )
}

// https://codepen.io/siiron/pen/DpJmwK
