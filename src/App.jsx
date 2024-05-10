import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skills/Skills'
import Certificate from './Components/Certificate/Certificate'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Certificate/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
