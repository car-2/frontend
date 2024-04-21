import { React, useState } from "react";
import DirectorV from "./visualizaciones/directorV";
import GeneroV from "./visualizaciones/generoV";
import MediaV from "./visualizaciones/mediaV";
import ProductoraV from "./visualizaciones/productoraV";
import TipoV from "./visualizaciones/tipoV";

export default function Visualizaciones() {
  const [visualDatos, setVisualDatos] = useState("");

  const handleVisual = (e) => {
    setVisualDatos(e.target.value);
  };

  let componente;
  switch (visualDatos) {
    case "tipo":
      componente = <TipoV />;
      break;
    case "productora":
      componente = <ProductoraV />;
      break;
    case "director":
      componente = <DirectorV />;
      break;
    case "genero":
      componente = <GeneroV />;
      break;
    case "media":
      componente = <MediaV />;
      break;
    default:
      componente = null;
  }

  return (
    <>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ml-10 ">
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-tl from-[#001c97] to-green-500 text-left my-4">
          Edición
        </h1>
        <label className="block my-1 text-xl" for="opciones">Escoge el modulo de edicion</label>
        <select
          value={visualDatos}
          onChange={handleVisual}
          className="mb-4 bg-gradient-to-r from-[#001c97] to-[#000221] text-center text-white rounded shadow"
        >
          <option value="" className="bg-[#000221]">
            No seleccionar
          </option>
          <option value="tipo" className="bg-[#000221]">
            Tipo
          </option>
          <option value="productora" className="bg-[#000221]">
            Productora
          </option>
          <option value="director" className="bg-[#000221]">
            Director
          </option>
          <option value="genero" className="bg-[#000221]">
            Genero
          </option>
          <option value="media" className="bg-[#000221]">
            Media
          </option>
        </select>
        {componente}
      </div>
    </>
  );
}
