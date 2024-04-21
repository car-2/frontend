import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function datoV() {
  const [Visual, setVisual] = useState([]);

  const getdato = async () => {
    const response = await fetch(`${import.meta.env.VITE_URL}/media`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setVisual(data);
  };

  const eliminar = (id) => {
    fetch(`${import.meta.env.VITE_URL}/media/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setVisual(Visual.filter((dato) => dato._id !== id));
  };

  useEffect(() => {
    getdato();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="block my-1 text-3xl mt-5">Visualizacion de Media</h1>
      <table className="block my-1 text-x">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Sipnosis</th>
            <th>Link</th>
            <th>Caratula</th>
            <th>Estreno</th>
            <th>Genero</th>
            <th>Director</th>
            <th>Productora</th>
            <th>Tipo</th>
            <th>CreadaEn</th>
            <th>ActualizadaEn</th>
          </tr>
        </thead>
        <tbody>
          {Visual.map((dato) => (
            <tr key={dato._id}>
              <td>{dato.Titulo}</td>
              <td>{dato.Sipnosis}</td>
              <td>{dato.Link}</td>
              <td>{dato.Caratula}</td>
              <td>{dato.Estreno}</td>
              <td>{dato.Genero}</td>
              <td>{dato.Director}</td>
              <td>{dato.Productora}</td>
              <td>{dato.Tipo}</td>
              <td>{dato.CreadaEn}</td>
              <td>{dato.ActualizadaEn}</td>
              <td>{<Link to={`/edicion/media/${dato._id}`}>Editar</Link>}</td>
              <td>{<button type="button" onClick={() => eliminar(dato._id)}>Borrar</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
