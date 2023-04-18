import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Home from './paginas/home/Home'
import { Grid} from '@material-ui/core'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTemas from './components/temas/listaTemas/ListaTemas'




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div style ={{minHeight: '100vh'}}>
            <Routes>
                <Route path = '/' element= {<Login />}/>
                <Route path = '/login' element= {<Login />}/>
                <Route path = '/home' element= {<Home />} />
                <Route path = '/usuarios/cadastrar' element= {<CadastroUsuario />} />
                <Route path = '/temas' element= {<ListaTemas />} />
            </Routes>
          </div>
        <Footer />
      
      </BrowserRouter>
    </>
  )
}

export default App
