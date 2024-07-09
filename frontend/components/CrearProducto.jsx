// Componente para crear productos
import React, { useState } from "react";
import { useCanister } from '@connect2ic/react';
import  ActualizarProductos  from './ActualizarProductos';

function CrearProducto () {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [reservacion, setReservacion] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const [Dulctradic] = useCanister("dulcesTradicionales");
  const [Productos, setProductos] = useState([]);

  const handleBuscarProd = async () => {
    try {
      const result = await Dulctradic.buscarProductos();
      setProductos(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0])));  // Ordenar posts por ID

    } catch(e) {
        console.log(e);
    }
  }

  const handleCrearProd = async (e) => {
    e.preventDefault();
        try{
            const result = await Dulctradic.crearProductos(
                nombre,
                descripcion,
                precio,
                reservacion,
                fecha,
                hora)
            console.log(result)
        }catch(e){
            console.error(e)
        }
  };

  return (
    <div>
      <div>
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={handleCrearProd}>
      
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
        <button type="submit">Crear Producto</button>
      </form>
      </div>
      <div>
      <h3>Lista de Servicios</h3>
      <ul>
      <button  onClick={handleBuscarProd}>Buscar Servicios</button>
        {Productos.map((Producto) => (
          <li key={Producto}>
            <ActualizarProductos Producto={Producto}  refresh={handleBuscarProd} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CrearProducto;