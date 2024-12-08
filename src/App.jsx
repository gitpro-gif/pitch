import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from '../components/Landing'
import FeaturePage from '../components/FeaturePage'
import About from '../components/About'
import Contact from '../components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Landing />} />
          <Route path='/features' element = {<FeaturePage />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
