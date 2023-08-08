import element from './useRouterElement/index'
import { ToastContainer } from 'react-toastify'

function App() {
  const useElemen = element()
  return (
    <div>
      {useElemen}
      <ToastContainer />
    </div>
  )
}

export default App
