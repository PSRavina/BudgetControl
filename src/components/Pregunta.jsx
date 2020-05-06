import React, { Fragment, useState } from "react";
import Error from "./Error"
export const Pregunta = () => {
  //definiendo el State
  const [cantidad, guardarCantidad] = useState(0);

  const [error, guardarError] = useState(false); // Creamos otro state para el error y la validación

  //Al crear la función del onchange para el State, siempre pasamos un evento para sacar el valor con e.tarjet.value
  //salen en forma de string, por lo que usamos el parseInt para convertirlo en numbers
  const definirPresupuesto = (e) => {
    //Añadimos aquí la función de guardarCantidad del State

    guardarCantidad(parseInt(e.target.value));
  };

  //Submit para definir el presupuesto

  const agregarPresupuesto = (e) => {
    e.preventDefault(); //Siempre para evitar el refresco de la página

    //validamos que la cantidad no sea menor a 1
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //Si pasa la validación

    guardarError(false);

  };

  return (
      //El {error} es una ternaria de render condicional
    <Fragment>
      <h2>Añade tu presupuesto</h2>
      
      {error ?<Error mensaje="El presupuesto es incorrecto"></Error> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Presupuesto"
          onChange={definirPresupuesto}
        ></input>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};
