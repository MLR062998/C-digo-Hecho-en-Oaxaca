// Componente para actualizar información de usuario
import React, { useState } from "react";
import { useCanister } from '@connect2ic/react';

function ActualizarUsuario (props) {
  const [Dulctradic] = useCanister("dulcesTradicionales");
  const {Usuario , refresh} = props;

  const [nombreu, setNombre] = useState(Usuario[1].nombreu);
  const [primerapellido, setPrimerapellido] = useState(Usuario[1].primerapellido);
  const [segundoapellido, setSegundoapellido] = useState(Usuario[1].segundoapellido);
  const [telefono, setTelefono] = useState(Usuario[1].telefono);
  const [canalesS, setCanalesS] = useState(Usuario[1].canalesS);
  const [direccion, setDireccion] = useState(Usuario[1].direccion);
  const [tipo, setTipo] = useState(Usuario[1].tipo);

  const handleActualizarUsuario = async () => {
    // Lógica para llamar al método actualizarUsuario del canister
    try {
        await Dulctradic.actualizarUsuario(
          Usuario[0],
          nombreu,
          primerapellido,
          segundoapellido,
          telefono,
          canalesS,
          direccion,
          tipo
          );
          await refresh();
      // Lógica adicional (como mostrar un mensaje de éxito o limpiar el formulario)
    } catch(e) {
      console.log(e);
  } finally {
      setVisible(false);
  }
  };

  const handleBorrarUsr = async(usr) => {
    usr.preventDefault();
    try {
    // Lógica para enviar la información del producto a eliminar al backend
    await Dulctradic.eliminarUsuario(Usuario[0]);
    await refresh();
  } catch(e) {
    console.log(e);
  } finally {
      setVisible(false);
  }
  };



  return (
    <div>
      <h2>Actualizar Información de Usuario</h2>
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
        <button onClick={handleActualizarUsuario}>Actualizar</button>
        <button onClick={handleBorrarUsr}>Eliminar</button>
    </div>
  );
};

export default ActualizarUsuario;
