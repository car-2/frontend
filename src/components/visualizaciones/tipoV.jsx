import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TipoV() {
  const [Visual, setVisual] = useState([]);

  const getTipos = async () => {
    const response = await fetch(`${import.meta.env.VITE_URL}/tipo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setVisual(data);
  };

  const eliminar =(id) => {
    fetch(`${import.meta.env.VITE_URL}/tipo/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    setVisual(Visual.filter((tipo) => tipo._id !== id));
  };

  useEffect(() => {
    getTipos();
  }, []); 

  return (
    <div>
      <h1>Visualizacion de Tipo</h1>
      <table className="">
        <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
        </thead>
        <tbody>
          {Visual.map((tipo) => (
            <tr key={tipo._id}>
              <td>{tipo.Nombre}</td>
              <td>{tipo.Descripcion}</td>
              <td>{tipo.fechaCreacion}</td>
              <td>{tipo.fechaActualizacion}</td>
              <td>{<Link to={`/edicion/tipo/${tipo._id}`}>Editar</Link>}</td>
              <td>
                {
                  <button type="button" onClick={() => eliminar(tipo._id)}>
                    Borrar
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
