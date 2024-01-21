import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { data } from './data/db';
import Header from './components/Header'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
   <div className="app">
    <BrowserRouter>
    <Header />
    <div className="container">
    <div className="content">
      <main>
      <Routes>
      <Route 
        path = "/"
        element = {<About />}
      />
      <Route
        path = "/skills"
        element = {<Skills />}
      /> 
      <Route
        path = "/projects"
        element = {<Projects data = {data}/>}
      /> 
      <Route
        path = "/contact"
        element = {<Contact />}
      /> 
      </Routes>
      </main>
    </div>
    </div>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
