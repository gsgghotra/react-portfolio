import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <div className='primary-bg'> 
          <Header />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/contactme" element={<Contact/>} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
