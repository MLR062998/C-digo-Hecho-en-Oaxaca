import React, { useState, useEffect } from "react";
import { useCanister } from "@connect2ic/react";

const ListaProductos = () => {
  const [dulcestradicionalesCanister] = useCanister("dulcestradicionalesCanister");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const listaProductos = await dulcestradicionalesCanister.buscarProductos();
        setProductos(listaProductos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [dulcestradicionalesCanister]);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto[0]}>
            Nombre: {producto[1].nombreProducto}, Descripción: {producto[1].descripcion}
            {/* Mostrar otros detalles si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
