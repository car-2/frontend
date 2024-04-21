import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EdicionTipo() {
  const { id } = useParams();
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };
  const handleDateCreate = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleDateUpdate = (event) => {
    setFechaActualizacion(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const datos = {
      Nombre: Nombre,
      Descripcion: Descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
    };

    await fetch(`${import.meta.env.VITE_URL}/tipo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
  };

  return (
    <React.Fragment>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ml-10">
        <h1>Modulo Tipo</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Completa todo los campos:</label>
          <input
            type="text"
            name="Nombre"
            placeholder="Ingresa el Nombre"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="Descripcion"
            placeholder="Ingresar Descripcion"
            value={Descripcion}
            onChange={handleDescripcion}
          ></input>
          <input
            type="date"
            name="fechaCreacion"
            placeholder="Fecha de Creacion"
            value={fechaCreacion}
            onChange={handleDateCreate}
          ></input>
          <input
            type="date"
            name="fechaActualizacion"
            placeholder="Fecha Actualizacion"
            value={fechaActualizacion}
            onChange={handleDateUpdate}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
    </React.Fragment>
  );
}
