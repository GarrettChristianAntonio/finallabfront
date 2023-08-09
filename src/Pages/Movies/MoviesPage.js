import { Header } from "../../Components/Header/Header";
import { ButtonRegresar } from "../../Components/ButtonRegresar/ButtonRegresar.js";
import { SideBar } from "../../Components/Sidebar/Sidebar.js";
import { Card } from "../../Components/Card/Card";
import { useState, useEffect } from "react";
import axios from 'axios';
import { ButtonAgregar } from "../../Components/ButtonAgregar/ButtonAgregar";
import { ButtonDelete } from "../../Components/ButtonDelete/ButtonDelete";
import { ButtonActualizar } from "../../Components/ButtonActualizar/ButtonActualizar";
import { ButtonActualizarPatch } from "../../Components/ButtonActualizarPatch/ButtonActualizarPatch";

export const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/peliculas?q=${searchTerm}`
      );
      console.log(response.data.rows)
      setMovies(response.data.rows); // Actualizar a response.data.rows para obtener el array de películas
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log("Movies:", movies); // Agregar este console.log para verificar si los datos están llegando correctamente

  return (
    <div>
      <Header />
      <ButtonRegresar />
      <ButtonAgregar/>
      <ButtonDelete/>
      <ButtonActualizar/>
      <ButtonActualizarPatch/>
      <SideBar onChange={handleSearchChange} />
      {movies.length > 0 ? (
        <Card movies={movies} />
      ) : (
        <p>No se encontraron películas.</p>
      )}
    </div>
  );
};