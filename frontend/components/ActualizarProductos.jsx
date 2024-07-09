// Componente para actualizar información de usuario
import React, { useState } from "react";
import { useCanister } from '@connect2ic/react';

function ActualizarProductos (props) {
  const {Producto , refresh} = props;
  const [Dulc_tradic] = useCanister("dulcesTradicionales");

  const [nombre, setNombre] = useState(Producto[1].nombre);
  const [descripcion, setDescripcion] = useState(Producto[1].descripcion);
  const [precio, setPrecio] = useState(Producto[1].precio);
  const [reservacion, setReservacion] = useState(Producto[1].reservacion);
  const [fecha, setFecha] = useState(Producto[1].fecha);
  const [hora, setHora] = useState(Producto[1].hora);
  // Otros campos del formulario

  const handleActualizarProd = async () => {
    // Lógica para llamar al método actualizarUsuario del canister
    try {
        await Dulc_tradic.actualizarProductos(
        Producto[0],
        nombre,
        descripcion,
        precio,
        reservacion,
        fecha,
        hora
        );
        await refresh();
      } catch(e) {
        console.log(e);
      } finally {
          setVisible(false);
      }
  };

  const handleBorrarProd = async(product) => {
    product.preventDefault();
    try {
    // Lógica para enviar la información del producto a eliminar al backend
    await Dulc_tradic.eliminarProducto(Producto[0]);
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
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <label>
          Descripcion
        </label>
        <input type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
        <label>
          Precio
        </label>
        <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
        <label>
          Reservacion
        </label>
        <input type="text" placeholder="Reservacion" value={reservacion} onChange={(e) => setReservacion(e.target.value)}/>
        <label>
          Fecha
        </label>
        <input type="text" placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        <label>
          Hora
        </label>
        <input type="text" placeholder="Hora" value={hora} onChange={(e) => setHora(e.target.value)}/>
        <button onClick={handleActualizarProd}>Actualizar</button>
        <button onClick={handleBorrarProd}>Eliminar</button>
    </div>
  );
};

export default ActualizarProductos;