import { useState } from "react";
import axios from "axios";
import "../tools/cssButtons/Buttons.css"

export const ButtonDelete = () =>{
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .delete(`http://localhost:3500/peliculas/${event.target.id.value}`)
        .then(() => {
          console.log("Película Eliminada");
        })
        .catch((error) => {
          console.error("Error al agregar la película:", error);
        });
    };
  
    return (
      <div className="form-container Delete button-container">
       
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Ocultar Formulario" : "Eliminar Pelicula"}
        </button>
        {showForm && (
          <form onSubmit={handleSubmit}>
      <div className="form-field">
      <label htmlFor="id">ID:</label>
        <input type="number" id="id" name="id" />
      </div>
            <button type="submit">Eliminar pelicula</button>
          </form>
        )}
      </div>
      )
}