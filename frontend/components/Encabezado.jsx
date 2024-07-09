// Encabezado.js
import React from 'react';

const Encabezado = () => {
  return (
    <div style={{ 
      backgroundColor: "black", 
      color: "yellow", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "20px" 
    }}>
      <button style={{ 
        backgroundColor: "White", 
        color: "Black", 
        border: "none", 
        padding: "10px 20px", 
        cursor: "pointer", 
        fontSize: "1em", 
        borderRadius: "10px" 
      }}>
        Menú
      </button>
      <h1 style={{ 
        margin: "0 auto", 
        fontSize: "2.5em", 
        fontWeight: "bold", 
        textAlign: "center" 
      }}>
        DULCE TRADICIÓN
      </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button style={{ 
          backgroundColor: "White", 
          color: "Purple", 
          border: "none", 
          padding: "10px 20px", 
          cursor: "pointer", 
          fontSize: "1em", 
          borderRadius: "10px" 
        }}>
          Iniciar Sesión
        </button>
        <button style={{ 
          backgroundColor: "White", 
          color: "Purple", 
          border: "none", 
          padding: "10px 20px", 
          cursor: "pointer", 
          fontSize: "1em", 
          borderRadius: "10px" 
        }}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

export { Encabezado };
