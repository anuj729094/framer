import './App.css'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Sign from './Pages/Sign'
import Footer from './components/Footer'
import Typesofunds from './Pages/Typesofunds'
import Sipcalculator from './Pages/Sipcalculator'
import Mfperformance from './Pages/Mfperformance'
import Nfo from './Pages/Nfo'
import Nav from './Pages/Nav'

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/fund/:fundname' element={<Typesofunds/>}/>
      <Route path='/sip-calculator' element={<Sipcalculator/>}/>
      <Route path="/mf-performance" element={<Mfperformance/>}/>
      <Route path="/nfo" element={<Nfo/>}/>
      <Route path="/latest-nav" element={<Nav/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
