import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Login from './auth/login'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element = {<Login/>}/>
        <Route path = "/portfolio" element={<Portfolio/>}/>
        <Route path = "/contact" element={<Contact/>}/>
      </Routes>
      <Footer>
        
      </Footer>
    </div>
  )
}

export default App

