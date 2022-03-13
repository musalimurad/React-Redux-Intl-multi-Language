import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/About' exact element={<About/>}/>
        <Route path='/Contact' exact element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes