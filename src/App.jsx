import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigater from './dashboard/Navigater'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact'
import projectdata from './components/projectHook';

function App() {

  return (
    <div >
      <Router>
        <Navigater />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project projectdata={projectdata} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
