import React from "react";
import { Route, Routes } from "react-router-dom";
import PacientePage from "./pages/PacientePage";
import PacienteForm from "./pages/PacienteForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { PacienteContextProvider } from "./context/PacienteContext";
import PacienteEditForm from "./pages/PacienteEditForm";

function App() {
  return (
      <PacienteContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<PacientePage></PacientePage>}></Route>
          <Route path="/new" element={<PacienteForm></PacienteForm>}></Route>
          <Route path="/edit/:id" element={<PacienteEditForm></PacienteEditForm>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </PacienteContextProvider>
  );
}

export default App;
