import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigater from './dashboard/Navigater'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact'
import projectdata from './components/projectHook';
import { Navbar } from 'react-bootstrap'
import FullPage from './components/fullPage';
import Menubar from './nav/nav';
// import Navbar from './nav/nav'

function App() {

  return (
    <div >
      {/* <Router>
        <Menubar />
        <Routes>
          <Route path='/' element={<FullPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router> */}
      <FullPage />
    </div>
  )
}

export default App
