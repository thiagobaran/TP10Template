import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritosContext = createContext();

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState({});

  useEffect(() => {
    // Cargar favoritos desde localStorage al inicializar la aplicación
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    setFavoritos(storedFavoritos);
  }, []);

  useEffect(() => {
    // Guardar favoritos en localStorage cuando cambian
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (title) => {
    setFavoritos((prevFavoritos) => ({
      ...prevFavoritos,
      [title]: !prevFavoritos[title],
    }));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
