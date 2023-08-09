import axios from "axios";
import { useState } from "react";
import "../tools/cssButtons/Buttons.css"

export const ButtonAgregar = () => {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const newMovie = {
        titulo: event.target.titulo.value,
        director: event.target.director.value,
        genero: event.target.genero.value,
        duracion_minutos: parseInt(event.target.duracion_minutos.value),
        sinopsis: event.target.sinopsis.value,
        fecha_estreno: event.target.fecha_estreno.value,
        clasificacion_edad: event.target.clasificacion_edad.value,
        idioma: event.target.idioma.value,
        subtitulos: event.target.subtitulos.checked,
        disponible: event.target.disponible.checked,
        link: event.target.link.value
      };
  
      axios
        .post("http://localhost:3500/peliculas", newMovie)
        .then(() => {
          console.log("Película agregada exitosamente");
        })
        .catch((error) => {
          console.error("Error al agregar la película:", error);
        });
    };
  
    return (
      <div className="form-container Post button-container">
        
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Ocultar Formulario" : "Agregar Pelicula"}
        </button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            
            <div class="form-field">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" />
      </div>
      <div class="form-field">
        <label for="director">Director:</label>
        <input type="text" id="director" name="director" />
      </div>
      <div class="form-field">
        <label for="genero">Género:</label>
        <input type="text" id="genero" name="genero" />
      </div>
      <div class="form-field">
        <label for="duracion_minutos">Duración (minutos):</label>
        <input type="number" id="duracion_minutos" name="duracion_minutos" />
      </div>
      <div class="form-field">
        <label for="sinopsis">Sinopsis:</label>
        <textarea id="sinopsis" name="sinopsis"></textarea>
      </div>
      <div class="form-field">
        <label for="fecha_estreno">Fecha de Estreno:</label>
        <input type="date" id="fecha_estreno" name="fecha_estreno" />
      </div>
      <div class="form-field">
        <label for="clasificacion_edad">Clasificación de Edad:</label>
        <input type="text" id="clasificacion_edad" name="clasificacion_edad" />
      </div>
      <div class="form-field">
        <label for="idioma">Idioma:</label>
        <input type="text" id="idioma" name="idioma" />
      </div>
      <div class="form-field">
        <label for="subtitulos">Subtítulos:</label>
        <input type="checkbox" id="subtitulos" name="subtitulos" />
      </div>
      <div class="form-field">
        <label for="disponible">Disponible:</label>
        <input type="checkbox" id="disponible" name="disponible" />
      </div>
      <div class="form-field">
        <label for="link">Link:</label>
        <input type="text" id="link" name="link" />
      </div>
            <button type="submit">Agregar Película</button>
          </form>
        )}
      </div>
    );
  };