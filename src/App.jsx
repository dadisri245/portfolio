import React from 'react'
import './index.css'
import Nav from './components/nav/Nav'
import Header from './components/header/header'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
function App() {
  return (
     <div>
      <Nav/>
      <Header/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     </div>
  )
}

export default App;
