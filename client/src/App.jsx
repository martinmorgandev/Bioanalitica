import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PacientePage from './pages/PacientePage'
import PacienteForm from './pages/PacienteForm'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<PacientePage></PacientePage>}></Route>
      <Route path="/new" element={<PacienteForm></PacienteForm>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App