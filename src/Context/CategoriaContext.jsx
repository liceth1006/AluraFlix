import { createContext, useEffect, useState } from "react";
import { conexion } from "../data/conexion";

export const CategoriaContext = createContext();

export default function CategoriaProvider({ children }) {
  const [categorias, setCategoria] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const data = await conexion.getCategorias();
      setCategoria([...data]);
    };
    fechData();
  }, []);

  return (
    <CategoriaContext.Provider value={{ categorias, setCategoria }}>
      {children}
    </CategoriaContext.Provider>
  );
}
