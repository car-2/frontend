import React, { useState } from "react";

export default function GeneroC() {
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [Descripcion, setDescription] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleDescripcion = (event) => {
    setDescription(event.target.value);
  };
  const handlefechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handlefechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
  };
  const handleestado = (event) => {
    setEstado(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const datos = {
      Nombre: Nombre,
      Estado: Estado,
      Descripcion: Descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
    };

    await fetch(`${import.meta.env.VITE_URL}/genero`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

  };

  return (
    <React.Fragment>
      <div className="">
        <h1>Modulo Genero</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Completa todo los campos: </label>
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
            onChange={handleestado}
          ></input>
          <input
            type="text"
            name="Descripcion"
            placeholder="Descripcion"
            value={Descripcion}
            onChange={handleDescripcion}
          ></input>
          <input
            type="date"
            name="fechaCreacion"
            placeholder="Creacion"
            value={fechaCreacion}
            onChange={handlefechaCreacion}
          ></input>
          <input
            type="date"
            name="fechaActualizacion"
            placeholder="Actualizacion"
            value={fechaActualizacion}
            onChange={handlefechaActualizacion}
          ></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </React.Fragment>
  );
}
