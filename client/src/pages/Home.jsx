import React from "react";
import { Grafica } from "../components/Grafica";

function Home() {
  return (
    <div className="container">
      <div className="row">
      <button class="btn btn-primary mb-4" type="button" disabled>
            <h1>Bienvenido</h1>
          </button>

      <Grafica></Grafica>

      </div>
    </div>
  );
}

export default Home;
