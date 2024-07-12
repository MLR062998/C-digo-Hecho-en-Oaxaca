import React, { useState } from "react";
import { useCanister } from "@connect2ic/react";

const CrearUsuario = ({ onUsuarioCreado }) => {
  const [dulcestradicionalesCanister] = useCanister("dulcestradicionalesCanister");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Loading...");
    try {
      await dulcestradicionalesCanister.crearUsuario({
        nombre,
        apellido,
        email,
        telefono,
        direccion
      });
      setLoading("Done");
      onUsuarioCreado(); // Llamar al callback para notificar que se ha creado un nuevo usuario
    } catch (error) {
      console.error("Error al crear usuario:", error);
      setLoading("Error");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col p-4 w-full">
      <h1 className="h1 text-center border-b border-gray-500 pb-2">Crear Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center border mt-4 border-gray-500 p-5 space-x-2 w-96">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              required
              className="border border-gray-500 px-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label htmlFor="direccion">Dirección</label>
            <input
              id="direccion"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <button
              type="submit"
              className="w-full p-2 rounded-sm bg-gray-950 hover:bg-gray-900 text-white text-lg font-bold"
            >
              Crear Usuario
            </button>
          </div>
        </div>
      </form>
      <p className="mx-2">{loading}</p>
    </div>
  );
};

export default CrearUsuario;
