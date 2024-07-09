import React, { useState } from "react";
import ProductosLista from "./ProductosLista";

function CrearProducto() {
  // ... (el resto de tu código)

  const [productos, setProductos] = useState([]);

  const handleBuscarProd = async () => {
    // ... (el resto de tu código)
    setProductos(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0])));
  }

  return (
    <div>
      <div>
        {/* ... (el resto de tu código) */}
      </div>
      <div>
        <h3>Lista de Servicios</h3>
        <button onClick={handleBuscarProd}>Buscar Servicios</button>
        <ProductosLista productos={productos} />
      </div>
    </div>
  );
}

export default CrearProducto;