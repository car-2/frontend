import React, { useState } from "react";
import CreacionDirector from "./creaciones/directorC";
import CreacionGenero from "./creaciones/generoC";
import CreacionMedia from "./creaciones/mediaC";
import CreacionProductora from "./creaciones/productoraC";
import CreacionTipo from "./creaciones/tipoC";

export default function Creacion() {
  const [creacionDatos, setCreacionDatos] = useState("");

  const handleSelect = (e) => {
    setCreacionDatos(e.target.value);
  };

  let formulario;
  switch (creacionDatos) {
    case "Tipo":
        formulario = <CreacionTipo />;
      break;

    case "Media":
        formulario = <CreacionMedia />;
      break;

    case "Productora":
        formulario = <CreacionProductora />;
      break;

    case "Director":
        formulario = <CreacionDirector />;
      break;

    case "Genero":
        formulario = <CreacionGenero />;
      break;

    default:
        formulario = null;
  }

  return (
    <React.Fragment>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ml-10 ">
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-tl from-[#001c97] to-green-500 text-left my-4">Creación</h1>
        <form action="/submit-form" method="post">
          <label className="block my-1 text-xl" for="opciones">
            Escoge el modulo de creacion:
          </label>
          <select
            className="bg-gradient-to-r from-[#001c97] to-[#000221] text-center text-white rounded shadow mb-4"
            name="opciones"
            id="opciones"
            value={creacionDatos}
            onChange={handleSelect}
          >
            <option className="bg-[#000221]" value="">No seleccionar</option>
            <option className="bg-[#000221]" value="Media">Media</option>
            <option className="bg-[#000221]" value="Productora">Productora</option>
            <option className="bg-[#000221]" value="Director">Director</option>
            <option className="bg-[#000221]" value="Genero">Genero</option>
            <option className="bg-[#000221]" value="Tipo">Tipo</option>
          </select>
        </form>
        {formulario}
      </div>
    </React.Fragment>
  );
}
