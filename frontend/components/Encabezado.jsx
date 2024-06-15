// Encabezado.js
import React, { useState } from 'react';

const Encabezado = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <div style={{ 
      backgroundColor: "black", 
      color: "yellow", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "20px" 
    }}>
      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        style={{ position: "relative" }}
      >
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
        {menuVisible && (
          <div style={{
            position: "absolute",
            top: "100%",
            left: "0",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            overflow: "hidden",
            zIndex: 1
          }}>
            <button style={{ 
              padding: "10px 20px", 
              width: "100%", 
              textAlign: "left", 
              border: "none", 
              backgroundColor: "black", 
              cursor: "pointer"
            }}>
              Textiles
            </button>
            <button style={{ 
              padding: "10px 20px", 
              width: "100%", 
              textAlign: "left", 
              border: "none", 
              backgroundColor: "black", 
              cursor: "pointer"
            }}>
              Dulces Tradicionales
            </button>
            <button style={{ 
              padding: "10px 20px", 
              width: "100%", 
              textAlign: "left", 
              border: "none", 
              backgroundColor: "black", 
              cursor: "pointer"
            }}>
              Artesanías
            </button>
          </div>
        )}
      </div>
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
