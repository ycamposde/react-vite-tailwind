import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Client from './pages/Client'

import NavBar from './components/NavBar'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/dashboard" element={ <Dashboard/> }></Route>
          <Route path="/about" element={ <About/> }></Route>
          <Route path="/clients/:id" element={ <Client/> }></Route>
          <Route path="*" element={ <NotFound/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
