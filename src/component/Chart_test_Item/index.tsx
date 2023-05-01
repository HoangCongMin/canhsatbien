import React from 'react'
import { Organization_Payroll_Data } from '../constant'

export default function Chart_test_Item() {
  return (
    <div className='w-full'>
      <ul className='text-center pt-5 relative duration-75'>
        <li className='table text-center relative duration-75 p-2 before:content-[""] before:absolute before:w-[51%] before:h-[10px] before:only:hidden only:pt-[0px] before:first:border-none before:last:border-r-2 before:last:rounded-t-lg  before:border-black     after:absolute after:top-0 after:w-[51%] after:h-[10px] after:-[""] after:right-[auto] after:left-[50%]	after:border-l-2  after:border-black	after:only:hidden after:first:border-none after:first:rounded-l-lg  '>
          <span>{Organization_Payroll_Data.title}</span>
          <ul className='text-center pt-5 relative duration-75 before:content-[""] before:absolute before:top-0 before:left-[50%] before:border-l-2 before:border-black'>
            {Organization_Payroll_Data.child.map((item) => (
              <li className='table text-center relative duration-75 p-2 before:content-[""] before:absolute before:w-[51%] before:h-[10px] before:only:hidden only:pt-[0px] before:first:border-none before:last:border-r-2 before:last:rounded-t-lg before:border-black     after:absolute after:top-0 after:w-[51%] after:h-[10px]  after:-[""] after:right-[auto] after:left-[50%] after:border-l-2  after:border-black after:only:hidden after:first:border-none after:first:rounded-l-lg'>
                {' '}
                <span>{item.title}</span>
                <ul className='text-center pt-5 relative duration-75'>
                  {item.child.map((item) => (
                    <li className='table text-center relative duration-75 p-2 before:content-[""] before:absolute before:w-[51%] before:h-[10px] before:only:hidden only:pt-[0px] before:first:border-none before:last:border-r-2 before:last:rounded-t-lg before:border-black    after:absolute after:top-0 after:w-[51%] after:h-[10px]  after:-[""] after:right-[auto] after:left-[50%] after:border-l-2  after:border-black after:only:hidden after:first:border-none after:first:rounded-l-lg'>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
