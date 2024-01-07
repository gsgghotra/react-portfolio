import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Work from './components/Work/Work'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Work></Work>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </>
  )
}

export default App
