import React, { useState } from "react";
import { useCanister } from '@connect2ic/react';
import ActualizarProductos from './ActualizarProductos';

function CrearProducto() {
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
      setProductos(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0]))); // Ordenar posts por ID
    } catch (e) {
      console.log(e);
    }
  };

  const handleCrearProd = async (e) => {
    e.preventDefault();
    try {
      const result = await Dulctradic.crearProductos(
        nombre,
        descripcion,
        precio,
        reservacion,
        fecha,
        hora
      );
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="crear-producto">
        <h2>Crear Nuevo Producto</h2>
        <form onSubmit={handleCrearProd}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <input
              type="text"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Precio:</label>
            <input
              type="text"
              placeholder="Precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Reservación:</label>
            <input
              type="text"
              placeholder="Disponibles"
              value={reservacion}
              onChange={(e) => setReservacion(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="text"
              placeholder="Fecha de creacion"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Hora:</label>
            <input
              type="text"
              placeholder="ID"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Producto
          </button>
        </form>
      </div>
      <div className="lista-productos">
        <h3>Lista de Servicios</h3>
        <ul>
          <button onClick={handleBuscarProd}>Buscar Servicios</button>
          {Productos.map((producto) => (
            <li key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: {producto.precio}</p>
              <ActualizarProductos Producto={producto} refresh={handleBuscarProd} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CrearProducto;
