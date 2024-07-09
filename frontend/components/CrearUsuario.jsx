// Componente para crear usuarios
import React, { useState } from "react";
import { useCanister } from '@connect2ic/react';
import ActualizarUsuario from "./ActualizarUsuario";

function CrearUsuario (){
  const [nombreu, setNombre] = useState("");
  const [primerapellido, setPrimerapellido] = useState("");
  const [segundoapellido, setSegundoapellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [canalesS, setCanalesS] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipo, setTipo] = useState("");

  const [dulcestradicionalesCanister] = useCanister("dulcesTradicionales");
  const [Usuarios, setUsuarios] = useState([]);

  const handleBuscarUsr = async () => {
    try {
      const result = await dulcestradicionalesCanister.buscarUsuarios();
      setUsuarios(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0])));  // Ordenar posts por ID

    } catch(e) {
        console.log(e);
    }
  }

  const handleCrearUsuario = async (e) => {
    e.preventDefault();
        try{
            const result = await dulcestradicionalesCanister.crearUsuarios(
                nombreu,
                primerapellido,
                segundoapellido,
                telefono,
                canalesS,
                direccion,
                tipo)
            console.log(result)
        }catch(error){
            console.error(error)
        }
  }


  return (
    <div>
      <div>
      
      <form onSubmit={handleCrearUsuario}>
      <h2>Crear Nuevo Usuario</h2>
      <label>
          Nombre
        </label>
        <input type="text" placeholder="Nombre" value={nombreu} onChange={(e) => setNombre(e.target.value)}/>
        <label>
          Primer Apellido
        </label>
        <input type="text" placeholder="Primer Apellido" value={primerapellido} onChange={(e) => setPrimerapellido(e.target.value)}/>
        <label>
          Segundo Apellido
        </label>
        <input type="text" placeholder="Segundo Apellido" value={segundoapellido} onChange={(e) => setSegundoapellido(e.target.value)}/>
        <label>
          Telefono
        </label>
        <input type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
        <label>
          Red Social
        </label>
        <input type="text" placeholder="Red Social" value={canalesS} onChange={(e) => setCanalesS(e.target.value)}/>
        <label>
          Direccion
        </label>
        <input type="text" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
        <label>
          Tipo
        </label>
        <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
        
        <button type="submit">Crear Usuario</button>
      </form>
      </div>
      <div>
      <h3>Lista de Usuarios</h3>
      <ul>
      <button  onClick={handleBuscarUsr}>Buscar Usuarios</button>
        {Usuarios.map((Usuario) => (
          <li key={Usuario}>
            <ActualizarUsuario Usuario={Usuario}  refresh={handleBuscarUsr} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CrearUsuario;
