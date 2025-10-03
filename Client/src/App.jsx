import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-no-repeat bg-cover">
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
