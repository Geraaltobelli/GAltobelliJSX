//Es el componente padre de Hijo e Header y Footer

import { useState } from 'react'
import './App.css'
import Footer from './Componentes/Footer'

import Inicio from './pages/Inicio'
import Moda from './pages/Moda'
import Cart from './pages/Cart'
import DetalleProducto from './pages/DetallesProducto'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='/' element = {<Inicio/>} />
        <Route path='/Moda' element = {<Moda/>}/>
        <Route path='/Cart' element = {<Cart/>}/>
        <Route path='/Productos/:id' element={<DetalleProducto/>}/>
        
      </Routes>
        
      <Footer/>
    </>
  )
}

export default App
