import { useState } from 'react'
// import './index.css'
import Sidebar from './components/Side Bar/sidebar'
import { Main } from './components/Main/main'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App
