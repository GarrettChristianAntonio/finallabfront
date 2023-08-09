import React from "react";
import "./Card.css"; // Importamos el archivo CSS para los estilos del componente Card

export const Card = ({ movies }) => {
  return (
    <div className="card-container">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <h3>{movie.titulo}</h3>
          <p>ID: {movie.id}</p>
          <p>Director: {movie.director}</p>
          <p>Género: {movie.genero}</p>
          <p>Duración: {movie.duracion_minutos} minutos</p>
          <p>Sinopsis: {movie.sinopsis}</p>
          <p>Fecha de estreno: {new Date(movie.fecha_estreno).toLocaleDateString()}</p>
          <p>Clasificación de edad: {movie.clasificacion_edad}</p>
          <p>Idioma: {movie.idioma}</p>
          {movie.subtitulos ? <p>Tiene subtítulos</p> : <p>No tiene subtítulos</p>}
          {movie.disponible ? <p>Disponible</p> : <p>No disponible</p>}
          {movie.link && (
            <div>
              {/* Insertar cuadro para reproducir el video */}
              <div dangerouslySetInnerHTML={{ __html: movie.link }}></div>
              {/* Insertar imagen almacenada (si tienes la URL de la imagen) */}
              {movie.imagen_url && <img src={movie.imagen_url} alt={movie.titulo} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};