import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import './styles/index.css'

const Destination = lazy(() => import('./pages/Destination'))
const Crew = lazy(() => import('./pages/Crew'))
const Technology = lazy(() => import('./pages/Technology'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="/destination" element={<Suspense><Destination/></Suspense>}></Route>
          <Route path="/crew" element={<Suspense><Crew/></Suspense>}></Route>
          <Route path="/technology" element={<Suspense><Technology/></Suspense>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
