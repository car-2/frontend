import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EdicionProductora() {
  const { id } = useParams();
  const [Nombre, setNombre] = useState("");
  const [Slogan, setSlogan] = useState("");
  const [Estado, setEstado] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleSlogan = (event) => {
    setSlogan(event.target.value);
  };
  const handleEstado = (event) => {
    setEstado(event.target.value);
  };
  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
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
      Slogan: Slogan,
      Nombre: Nombre,
      Descripcion: Descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
      Estado: Estado,
    };

    await fetch(`${import.meta.env.VITE_URL}/productora/${id}`, {
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
        <h1>Modulo Productora</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Completa todo los campos: </label>
          <input
            type="text"
            name="Nombre"
            placeholder="Ingresa el Nombre"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="Slogan"
            placeholder="Ingresa el Slogan de la Productora"
            value={Slogan}
            onChange={handleSlogan}
          ></input>
          <input
            type="text"
            name="Estado"
            placeholder="Ingresa el Estado"
            value={Estado}
            onChange={handleEstado}
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
            onChange={handleFechaCreacion}
          ></input>
          <input
            type="date"
            name="fechaActualizacion"
            placeholder="Fecha Actualizacion"
            value={fechaActualizacion}
            onChange={handleFechaActualizacion}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
    </React.Fragment>
  );
}
