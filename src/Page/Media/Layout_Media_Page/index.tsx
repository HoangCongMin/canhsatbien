import NarbarMedia from '../../../component/NarbarMedia'
import Footer from '../../../component/Fotter'
import Box_Call_All from '../../../component/Box_Call_All'


interface mainitem {
  children?: React.ReactNode
}
export default function Layout_Media_Page({ children }: mainitem) {
  return (
    <div>
      <NarbarMedia />
      <div className='flex w-[80%] mt-3 justify-between m-auto max-[1300px]:flex-col max-w-screen-2xl'>
        <div className='w-[75%]  max-[1300px]:w-full'>
          {children}
        </div>
        <div className='w-[22%]  max-[1300px]:w-full'>
          <Box_Call_All />
        </div>

      </div>

      <Footer />
    </div>

  )
}