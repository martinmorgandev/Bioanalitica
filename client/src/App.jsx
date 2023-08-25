import React from "react";
import { Route, Routes } from "react-router-dom";
import PacientePage from "./pages/pacientes/PacientePage";
import PacienteForm from "./pages/pacientes/PacienteForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { PacienteContextProvider } from "./context/PacienteContext";
import PacienteEditForm from "./pages/pacientes/PacienteEditForm";
import "./app.css";
import Home from "./pages/Home";
import EstudioPage from "./pages/lista-estudios/EstudioPage";
import { EstudioContextProvider } from "./context/EstudiosContext";
import EstudioForm from "./pages/lista-estudios/EstudioForm";
import EstudioEditForm from "./pages/lista-estudios/EstudioEditForm";
import Carga from "./pages/archivos/Carga";

function App() {
  return (
    <PacienteContextProvider>
      <EstudioContextProvider>
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

                  {/* rutas de pacientes */}
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route
                    path="/registrarpaciente"
                    element={<PacienteForm></PacienteForm>}
                  ></Route>
                  <Route
                    path="/listapacientes"
                    element={<PacientePage></PacientePage>}
                  ></Route>
                  <Route
                    path="/edit/:id"
                    element={<PacienteEditForm></PacienteEditForm>}
                  ></Route>

                  {/* RUTAS DE ESTUDIOS */}
                  <Route
                    path="/registrar-estudio"
                    element={<EstudioForm></EstudioForm>}
                  ></Route>
                  <Route
                    path="/lista-estudios"
                    element={<EstudioPage></EstudioPage>}
                  ></Route>
                  <Route
                    path="/edit-estudio/:id"
                    element={<EstudioEditForm></EstudioEditForm>}
                  ></Route>



                  {/* SUBIR ARCHIVOS */}
                  <Route
                    path="/upload"
                    element={<Carga></Carga>}
                  ></Route>

                  {/* ERROR 404 */}
                  <Route path="*" element={<NotFound></NotFound>}></Route>


                </Routes>
              </div>
            </main>
          </div>
        </div>
      </EstudioContextProvider>
    </PacienteContextProvider>
  );
}

export default App;
