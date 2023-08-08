import classNames from 'classnames'
import { Link, createSearchParams } from 'react-router-dom'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface typePage_size {
  page_size: number
  queryParam: queryPram_Type
  path_Name:string
}

interface queryPram_Type {
  p?: string
  m?: string
  categoryId?: string
}


const range = 2
export default function Paginate({ page_size, queryParam,path_Name }: typePage_size) {
  const pages = Number( queryParam.p || 1)

  const renderPaginate = () => {
    let dotAfter = false
    let dotBefore = false

    const doDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <button key={index} className='mr-5 flex h-8 w-10 items-center justify-center text-[#00000066]'>
            ...
          </button>
        )
      }
      return null
    }


    const doDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <button key={index} className='mr-5 flex h-8 w-10 items-center justify-center text-[#00000066]'>
            ...
          </button>
        )
      }
      return null
    }
    return Array(page_size).fill(0).map((_, index) => {
      const pageName = index + 1
      if (pages <= range * 2 + 1 && pageName > pages + range && pageName < page_size - range + 1) {
        return doDotAfter(index)
      } else if (pages > range * 2 + 1 && pages < page_size - range * 2) {
        if (pageName < pages - range && pageName > range) {
          return doDotBefore(index)
        }
        if (pageName > pages + range && pageName < page_size - range + 1) {
          return doDotAfter(index)
        }
      } else if (pages >= page_size - range * 2 && pageName > range && pageName < pages - range) {
        return doDotBefore(index)
      }
      
      return (
        <Link
          to={{
            pathname: path_Name,
            search: createSearchParams({
              ...queryParam,
              p: pageName.toString()
            }).toString()
          }}
          key={index}
          className={classNames(
            `mx-1 flex h-8 w-10 items-center justify-center text-[12px] font-[Arial]	 ${pageName === pages ? 'rounded-sm bg-[#337ab7] text-white' : 'border-transparent text-[#00000066]'
            }`
          )}
        >
          {pageName}
        </Link>
      )
    })
  }

  return (
    <div className='m-auto mt-10 flex flex-wrap items-center justify-center	'>
      {pages === 1 ? (
        <span>
          <span className='mr-5 flex h-8 w-10 text-[12px] font-[Arial] cursor-not-allowed items-center justify-center text-[#00000066]'>
            <IoIosArrowBack />

          </span>
        </span>
      ) : (
        <Link
          to={{
            pathname: path_Name,
            search: createSearchParams({
              ...queryParam,
              p: (pages - 1).toString()
            }).toString()
          }}
            className='mr-5 flex h-8 w-10 text-[12px] font-[Arial] items-center justify-center text-[#00000066]'
        >
          <IoIosArrowBack />
        </Link>
      )}
      {renderPaginate()}
      {pages === page_size ? (
        <span className='ml-5 flex h-8 w-10 cursor-not-allowed items-center justify-center text-[#00000066]'>
          <IoIosArrowForward />
        </span>
      ) : (
        <Link
          to={{
            pathname: path_Name,
            search: createSearchParams({
              ...queryParam,
              p: (pages + 1).toString()
            }).toString()
          }}
            className='ml-5 flex h-8 w-10 text-[12px] font-[Arial] items-center justify-center text-[#00000066]'
        >
          <IoIosArrowForward />


        </Link>
      )}
    </div>
  )
}