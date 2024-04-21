import {React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DirectorV() {
  const [Visual, setVisual] = useState([]);

  const getDirectores = async () => {
    const respuesta = await fetch(`${import.meta.env.VITE_URL}/director`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datos = await respuesta.json();
    setVisual(datos);
  };

  const eliminar = (id) => {
    fetch(`${import.meta.env.VITE_URL}/director/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setVisual(Visual.filter((director) => director._id !== id));
  };

  useEffect(() => {
    getDirectores();
  }, []);

  return (
    <div>
      <h1>Visualización de Directores</h1>
      <table className="">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Actualización</th>
          </tr>
        </thead>
        <tbody>
          {Visual.map((director) => (
            <tr key={director._id}>
              <td>{director.Nombre}</td>
              <td>{director.Estado}</td>
              <td>{director.fechaCreacion}</td>
              <td>{director.fechaActualizacion}</td>
              <td>{<Link to={`/edicion/director/${director._id}`}>Editar</Link>}</td>
              <td>
                {
                  <button className="text-red-800" type="button" onClick={() => eliminar(director._id)}>
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
