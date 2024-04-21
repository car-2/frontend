import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GeneroV() {
    const [Visual, setVisual] = useState([]);

    const getGeneros = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL}/genero`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setVisual(data);
    }

    const eliminar = (id) =>{
        fetch(`${import.meta.env.VITE_URL}/genero/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setVisual(Visual.filter((genero) => genero._id !== id));

    }

    useEffect(() => {
        getGeneros();
    }, []);

    return (
        <div>
            <h1>Visualización de Generos</h1>
            <table className="director-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Descripcion</th>
                        <th>Fecha de Creación</th>
                        <th>Fecha de Actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {Visual.map((genero) => (
                        <tr key={genero._id}>
                            <td>{genero.Nombre}</td>
                            <td>{genero.Estado}</td>
                            <td>{genero.Descripcion}</td>
                            <td>{genero.fechaCreacion}</td>
                            <td>{genero.fechaActualizacion}</td>
                            <td>{<Link to={`/edicion/genero/${genero._id}`}>Editar</Link>}</td>
                            <td>{<button className="text-red-800" type='button' onClick={() => eliminar(genero._id)}>Borrar</button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}