import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'
import Item_In_Chart_Item from '../Chart_All_Item/Item_In_Chart_Item'
import { Organization_Payroll_Data } from '../constant'
import { Link } from 'react-router-dom'

export default function Chart_All_Item() {
  return (
    <div className='w-full mt-4'>
      <div className='w-full bg-[#F6F6F6] py-3 px-2 flex items-center'>
        <div className='bg-[#DA251C] h-7 w-1'></div>
        <div className='font-bold ml-2 text-[17px] uppercase mt-[2px] text-[#031739] hover:text-[#191970] '>
          Tổ chức - Biên chế
        </div>
      </div>
      <div className='text-[12px] text-[#888888] font-[Arial] my-4'>11/03/2021 11:06</div>

      <div className='mt-10'>
        <Tree
          lineWidth={'2px'}
          lineColor={'#0066bc'}
          label={
            <div>
              <Item_In_Chart_Item
                Img_Organization={Organization_Payroll_Data.img}
                title__Organization={Organization_Payroll_Data.title}
              />
            </div>
          }
        >
          {Organization_Payroll_Data.child.map((item) => (
            <TreeNode
              className={'w-[20%]'}
              label={
                <Link to={`/${item.title}`} className='w-full'>
                  <Item_In_Chart_Item
                    class_child={'w-full'}
                    Img_Organization={item.img}
                    title__Organization={item.title}
                  />
                </Link>
              }
            >
              {/* {Organization_Payroll_Data.child.map((item) =>
                item.child?.map((item) => (
                  <TreeNode className={'w-[20%]'} label={<Link to={`/${item.title}`} className='w-full'>
                    <Item_In_Chart_Item
                    class_child={'w-full'}
                    title__Organization={item.title}
                  />
                  </Link>} />
                ))
              )} */}
            </TreeNode>
          ))}

          <TreeNode
            className={'w-[20%]'}
            label={
              <Link to={`/`} className='w-full'>
                <Item_In_Chart_Item class_child={'w-full'} title__Organization={'ok'} />
              </Link>
            }
          >
            {/* {Organization_Payroll_Data.child.map((item) =>
                item.child?.map((item) => (
                  <TreeNode className={'w-[20%]'} label={<Link to={`/${item.title}`} className='w-full'>
                    <Item_In_Chart_Item
                    class_child={'w-full'}
                    title__Organization={item.title}
                  />
                  </Link>} />
                ))
              )} */}
          </TreeNode>
        </Tree>
      </div>
    </div>
  )
}
