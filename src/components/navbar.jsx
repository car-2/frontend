import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-20 justify-center flex items-center">
                <ul className="flex justify-center space-x-4">
                    <li className="inline-block text-3xl text-neutral-50 mx-6"><NavLink to={'/'}>Inicio</NavLink></li>
                    <li className="inline-block text-3xl text-neutral-50 mx-6"><NavLink to={'/creacion'}>Crear Modulo</NavLink></li>
                    <li className="inline-block text-3xl text-neutral-50 mx-6"><NavLink to={'/visualizacion'}>Edicion Modulo</NavLink></li>
                </ul>
            </nav>
        </>
    )
}