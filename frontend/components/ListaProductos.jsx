// Componente para mostrar la lista de productos
import React, { useState, useEffect } from "react";
import { social } from "../src/declarations/social"; // Importa los canisters

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const listaProductos = await social.dulcestradicionalesCanister.buscarProductos();
        setProductos(listaProductos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        // Lógica para manejar errores
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto[0]}>
            Nombre: {producto[1].nombre}, Descripción: {producto[1].descripcion}
            {/* Mostrar otros detalles si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
