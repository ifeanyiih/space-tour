import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home/>}/>
          <Route path="destinations" element={<Destination/>}/>
          <Route path="crew" element={<Crew/>}/>
          <Route path="technology" element={<Technology/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
