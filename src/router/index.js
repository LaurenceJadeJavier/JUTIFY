import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import MyComponent from '../components/myComponent'

const MyRouter= () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/:code" element={<MyComponent />} />
    </Routes>
  )
}

export default MyRouter