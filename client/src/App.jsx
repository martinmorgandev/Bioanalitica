import React from "react";
import { Route, Routes } from "react-router-dom";
import PacientePage from "./pages/PacientePage";
import PacienteForm from "./pages/PacienteForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { PacienteContextProvider } from "./context/PacienteContext";
import PacienteEditForm from "./pages/PacienteEditForm";
import "./app.css";
import Home from "./pages/Home";

function App() {
  return (
    <PacienteContextProvider>
      <div className="container-fluid">
        <div className="row">

          <aside className="barra-lateral col-12 col-md-auto p-0">
            <div className="logo">
              <h2 className="py-4 m-0">Bioanalitica</h2>
            </div>
              <Navbar></Navbar>
            </aside>

          <main className="main col">
            <div className="row">

            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/registrarpaciente"
                element={<PacienteForm></PacienteForm>}
                ></Route>
              <Route
                path="/edit/:id"
                element={<PacienteEditForm></PacienteEditForm>}
                ></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
                </div>
          </main>

        </div>
      </div>
    </PacienteContextProvider>
  );
}

export default App;
