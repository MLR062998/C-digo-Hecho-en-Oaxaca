// Componente para mostrar la lista de usuarios
import React, { useState, useEffect } from "react";
import { social } from "../src/declarations/social"; // Importa los canisters

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const listaUsuarios = await social.dulcestradicionalesCanister.buscarUsuarios();
        setUsuarios(listaUsuarios);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
        // Lógica para manejar errores
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario[0]}>
            Nombre: {usuario[1].nombre}, Teléfono: {usuario[1].telefono}
            {/* Mostrar otros detalles si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
