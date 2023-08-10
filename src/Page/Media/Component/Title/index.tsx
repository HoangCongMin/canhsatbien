interface typeName{
  name: string
}

export default function Title({ name }: typeName) {
  return (
    <div className='uppercase py-1 border-b-[2.5px] relative 	 pb-7  border-[#d6d6d6] text-[#191970] font-bold '>
      <p className='border-b-[2.5px]  top-0 pb-2 	absolute  border-[#ffcc00]'>

        <span className='line-clamp-1	'>
          {name }
        </span>
      </p>
    </div>

  )
}