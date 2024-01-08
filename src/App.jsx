import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Work from './components/Work/Work'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
            <Routes>
              <Route path="/" element={<Hero/>} />
              <Route path="/home" element={<Hero/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/contactme" element={<ContactMe/>} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
