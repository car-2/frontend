import React, { useState } from "react";

export default function MediaC() {
  const [Titulo, setTitulo] = useState("");
  const [Sipnosis, setSipnosis] = useState("");
  const [Link, setLink] = useState("");
  const [Caratula, setCaratula] = useState("");
  const [Estreno, setEstreno] = useState("");
  const [Genero, setGenero] = useState("");
  const [Director, setDirector] = useState("");
  const [Productora, setProductora] = useState("");
  const [Tipo, setTipo] = useState("");
  const [CreadaEn, setCreadaEn] = useState("");
  const [ActualizadaEn, setActualizadaEn] = useState("");

  const handleTitulo = (event) => {
    setTitulo(event.target.value);
  };
  const handleSipnosis = (event) => {
    setSipnosis(event.target.value);
  };
  const handleLink = (event) => {
    setLink(event.target.value);
  };
  const handleCaratula = (event) => {
    setCaratula(event.target.value);
  };
  const handleEstreno = (event) => {
    setEstreno(event.target.value);
  };
  const handleGenero = (event) => {
    setGenero(event.target.value);
  };
  const handleDirector = (event) => {
    setDirector(event.target.value);
  };
  const handleProductora = (event) => {
    setProductora(event.target.value);
  };
  const handleTipo = (event) => {
    setTipo(event.target.value);
  };
  const handleCreadaEn = (event) => {
    setCreadaEn(event.target.value);
  };
  const handleActualizadaEn = (event) => {
    setActualizadaEn(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const datos = {
      Titulo: Titulo,
      Sipnosis: Sipnosis,
      Link: Link,
      Caratula: Caratula,
      Estreno: Estreno,
      Genero: Genero,
      Director: Director,
      Productora: Productora,
      Tipo: Tipo,
      CreadaEn: CreadaEn,
      ActualizadaEn: ActualizadaEn,
    };

    await fetch(`${import.meta.env.VITE_URL}/media`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
  };

  return (
    <React.Fragment>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ml-10 ">
        <h1>Modulo Media</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Completa todo los campos: </label>
          <input
            type="text"
            name="Titulo"
            placeholder="Titulo"
            value={Titulo}
            onChange={handleTitulo}
          ></input>
          <input
            type="text"
            name="Sipnosis"
            placeholder="Descripcion"
            value={Sipnosis}
            onChange={handleSipnosis}
          ></input>
          <input
            type="text"
            name="Link"
            placeholder="Link de la pelicula"
            value={Link}
            onChange={handleLink}
          ></input>
          <input
            type="text"
            name="Caratula"
            placeholder="Link de la imagen"
            value={Caratula}
            onChange={handleCaratula}
          ></input>
          <input
            type="text"
            name="Estreno"
            placeholder="Año de estreno"
            value={Estreno}
            onChange={handleEstreno}
          ></input>
          <input
            type="text"
            name="Genero"
            placeholder="Genero"
            value={Genero}
            onChange={handleGenero}
          ></input>
          <input
            type="text"
            name="Director"
            placeholder="Director"
            value={Director}
            onChange={handleDirector}
          ></input>
          <input
            type="text"
            name="Productora"
            placeholder="Productora"
            value={Productora}
            onChange={handleProductora}
          ></input>
          <input
            type="text"
            name="Tipo"
            placeholder="Tipo"
            value={Tipo}
            onChange={handleTipo}
          ></input>
          <input
            type="date"
            name="CreadaEN"
            placeholder="Creacion"
            value={CreadaEn}
            onChange={handleCreadaEn}
          ></input>
          <input
            type="date"
            name="ActualizadaEn"
            placeholder="Actualizacion"
            value={ActualizadaEn}
            onChange={handleActualizadaEn}
          ></input>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </React.Fragment>
  );
}
