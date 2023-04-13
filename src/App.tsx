import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Home from './components/home/Home'
import { Grid} from '@material-ui/core'



function App() {
  return (
    <>

      <Navbar />

      <Home />

      <Footer />

    </>
  )
}

export default App
