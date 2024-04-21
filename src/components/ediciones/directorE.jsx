import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EdicionDirector() {
  const { id } = useParams();
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleEstado = (event) => {
    setEstado(event.target.value);
  };
  const handleFechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleFechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const datos = {
      Nombre: Nombre,
      Estado: Estado,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
    };

    await fetch(`${import.meta.env.VITE_URL}/director/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
  };

  return (
    <React.Fragment>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ml-10 ">
        <h1 className="">Modulo Director</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Completa todos los campos: </label>
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="Estado"
            placeholder="Activo o Inactivo"
            value={Estado}
            onChange={handleEstado}
          ></input>
          <input
            type="date"
            name="fechaCreacion"
            placeholder="Creacion"
            value={fechaCreacion}
            onChange={handleFechaCreacion}
          ></input>
          <input
            type="date"
            name="fechaActualizacion"
            placeholder="Actualizacion"
            value={fechaActualizacion}
            onChange={handleFechaActualizacion}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
    </React.Fragment>
  );
}
