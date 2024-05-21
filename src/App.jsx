import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'

function App() {
  return (
    <div className=' font-sans scroll-smooth'>
      <Router >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App