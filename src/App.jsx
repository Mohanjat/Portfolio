import { useEffect, useState,useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Aos from 'aos'
import "aos/dist/aos.css"
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
        Aos.init();
  },[])



  return (
    <>


      <Navbar/>
    <div className="mainContainer">
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
     </div>

    </>
  )
}

export default App
