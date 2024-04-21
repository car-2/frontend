import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Creacion from "./components/creacion";
import Visualizaciones from "./components/visualizaciones";
import DirectorE from "./components/ediciones/directorE";
import GeneroE from "./components/ediciones/generoE";
import MediaE from "./components/ediciones/mediaE";
import ProductoraE from "./components/ediciones/productoraE";
import TipoE from "./components/ediciones/tipoE";
import Imagen from "./assets/milad-fakurian-XDSYwOd9YVQ-unsplash.jpg";
import SearchMovies from "./components/searchMovies";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Imagen})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" Component={SearchMovies} />
        <Route path="/creacion" Component={Creacion}/>
        <Route path="/visualizacion" Component={Visualizaciones} />
        <Route path="/edicion/director/:id" Component={DirectorE} />
        <Route path="/edicion/genero/:id" Component={GeneroE} />
        <Route path="/edicion/media/:id" Component={MediaE} />
        <Route path="/edicion/productora/:id" Component={ProductoraE} />
        <Route path="/edicion/tipo/:id" Component={TipoE} />
      </Routes>
    </div>
  );
}

export default App;
