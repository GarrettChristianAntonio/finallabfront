import React, { useState } from "react";
import axios from "axios";
import "../tools/cssButtons/Buttons.css"

export const ButtonActualizar = () => {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [genero, setGenero] = useState("");
  const [duracionMinutos, setDuracionMinutos] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [fechaEstreno, setFechaEstreno] = useState("");
  const [clasificacionEdad, setClasificacionEdad] = useState("");
  const [idioma, setIdioma] = useState("");
  const [subtitulos, setSubtitulos] = useState(false);
  const [disponible, setDisponible] = useState(false);
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedMovie = {
      titulo: titulo,
      director: director,
      genero: genero,
      duracion_minutos: parseInt(duracionMinutos),
      sinopsis: sinopsis,
      fecha_estreno: fechaEstreno,
      clasificacion_edad: clasificacionEdad,
      idioma: idioma,
      subtitulos: subtitulos,
      disponible: disponible,
      link: link,
    };

    axios
      .put(`http://localhost:3500/peliculas/${id}`, updatedMovie)
      .then(() => {
        console.log("Película actualizada exitosamente");
      })
      .catch((error) => {
        console.error("Error al actualizar la película:", error);
        console.log("Error detallado:", error.response)
      });
  };

  return (
    <div className="Put button-container form-container">
      <button onClick={() => setShowForm(!showForm)} >
        {showForm ? "Ocultar Formulario" : "Actualizar Película con Put"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              id="id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="director">Director:</label>
            <input
              type="text"
              id="director"
              name="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="genero">Género:</label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="duracionMinutos">Duración (minutos):</label>
            <input
              type="number"
              id="duracionMinutos"
              name="duracionMinutos"
              value={duracionMinutos}
              onChange={(e) => setDuracionMinutos(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="sinopsis">Sinopsis:</label>
            <textarea
              id="sinopsis"
              name="sinopsis"
              value={sinopsis}
              onChange={(e) => setSinopsis(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="fechaEstreno">Fecha de Estreno:</label>
            <input
              type="date"
              id="fechaEstreno"
              name="fechaEstreno"
              value={fechaEstreno}
              onChange={(e) => setFechaEstreno(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="clasificacionEdad">Clasificación de Edad:</label>
            <input
              type="text"
              id="clasificacionEdad"
              name="clasificacionEdad"
              value={clasificacionEdad}
              onChange={(e) => setClasificacionEdad(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="idioma">Idioma:</label>
            <input
              type="text"
              id="idioma"
              name="idioma"
              value={idioma}
              onChange={(e) => setIdioma(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subtitulos">Subtítulos:</label>
            <input
              type="checkbox"
              id="subtitulos"
              name="subtitulos"
              checked={subtitulos}
              onChange={(e) => setSubtitulos(e.target.checked)}
            />
          </div>
          <div>
            <label htmlFor="disponible">Disponible:</label>
            <input
              type="checkbox"
              id="disponible"
              name="disponible"
              checked={disponible}
              onChange={(e) => setDisponible(e.target.checked)}
            />
          </div>
          <div>
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <button type="submit">Actualizar</button>
        </form>
      )}
    </div>
  );
};

