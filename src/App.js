import React from "react";
import { Pregunta } from "./components/Pregunta";
function App() {
  return (//El className es de skelleton
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido"><Pregunta></Pregunta>
      </div>
      </header>
    </div>
  );
}

export default App;
