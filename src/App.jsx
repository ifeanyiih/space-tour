import { useState } from 'react'
import './styles/App.css'

import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App
